'use client'
import { OneWayAnimatedSVG } from "./AnimatedSVG.component"
import { Number1Path } from "@/assets/svgs/number-1-light";
import { Number2Path } from "@/assets/svgs/number-2-light";
import { Number3Path } from "@/assets/svgs/number-3-light";
import { Number4Path } from "@/assets/svgs/number-4-light";
import { Number5Path } from "@/assets/svgs/number-5-light";
import { Number6Path } from "@/assets/svgs/number-6-light";
import { Number7Path } from "@/assets/svgs/number-7-light";
import { Number8Path } from "@/assets/svgs/number-8-light";
import { Number9Path } from "@/assets/svgs/number-9-light";
import { useRef, useState } from "react";

const NumberSVGPathMap = (num: string) => {
    switch (num) {
        case '1':
            return Number1Path
            break
        case '2':
            return Number2Path
            break
        case '3':
            return Number3Path
            break
        case '4':
            return Number4Path
            break
        case '5':
            return Number5Path
            break
        case '6':
            return Number6Path
            break
        case '7':
            return Number7Path
            break
        case '8':
            return Number8Path
            break
        case '9':
            return Number9Path
            break
        default:
            return Number1Path
            break
    }
}

const GetNumberAtPrecision = (num: number, precision: number): number => {
    const factor = Math.pow(10, precision);
    return Math.floor(num * factor) % 10;
}
const CheckNumberListIdentical = (a: number[], b: number[]): boolean => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

export const VoteDisplay = ({ votes, size }: { votes: number[], size: number }): React.ReactElement => {
    const _avg = votes.reduce((a, b) => a + b, 0) / votes.length
    const sigDig1 = GetNumberAtPrecision(_avg, 1)
    const sigDig2 = GetNumberAtPrecision(_avg, 2)
    const avg = Math.floor(_avg)
    const [triggerA, setTriggerA] = useState<boolean | null>(null);
    const [triggerB, setTriggerB] = useState<boolean | null>(null);
    const [triggerC, setTriggerC] = useState<boolean | null>(null);
    const votesRef = useRef<number[]>([]);
    const avgRef = useRef<number>(1);
    const sigDig1Ref = useRef<number>(1);
    const sigDig2Ref = useRef<number>(1);

    // New Average is a different number than old average and votes are different
    if (!CheckNumberListIdentical(votes, votesRef.current)) {
        votesRef.current = votes;
        // Set to true if the averages are different (render new svg), false if no animation is needed
        setTriggerA(avg !== avgRef.current);
        setTriggerB(sigDig1 !== sigDig1Ref.current);
        setTriggerC(sigDig2 !== sigDig2Ref.current);
    }
    const cbA = () => {
        avgRef.current = avg;
        setTriggerA(null);
    }
    const cbB = () => {
        sigDig1Ref.current = sigDig1;
        setTriggerB(null);
    }
    const cbC = () => {
        sigDig2Ref.current = sigDig2;
        setTriggerC(null);
    }
    return (
        <div className="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" height={300} viewBox="0 -0 300 300" width={300} fill={'bg-text'}>
                <defs>
                    <filter id="f2" x="-100%" y="-100%" width="400%" height="400%" filterUnits="userSpaceOnUse" xmlns="http://www.w3.org/2000/svg">
                        <feGaussianBlur stdDeviation="18" />
                    </filter>
                </defs>

                <circle cx="78" cy="78" r="4" fill="currentColor" filter="url(#f2)"/>
                <OneWayAnimatedSVG
                    trigger={triggerA}
                    pathA={NumberSVGPathMap(avgRef.current.toFixed(0))}
                    pathB={NumberSVGPathMap(avg.toFixed(0))}
                    color={'bg-text'}
                    duration={200}
                    animationFinished={cbA}
                    size={size}
                    onlyPathElement={true}
                />
                <OneWayAnimatedSVG
                    trigger={triggerB}
                    pathA={NumberSVGPathMap(sigDig1Ref.current.toFixed(0))}
                    pathB={NumberSVGPathMap(sigDig1.toFixed(0))}
                    color={'bg-text'}
                    duration={200}
                    animationFinished={cbB}
                    size={size}
                    onlyPathElement={true}
                    offset={60}
                />
                <OneWayAnimatedSVG
                    trigger={triggerC}
                    pathA={NumberSVGPathMap(sigDig2Ref.current.toFixed(0))}
                    pathB={NumberSVGPathMap(sigDig2.toFixed(0))}
                    color={'bg-text'}
                    duration={200}
                    animationFinished={cbC}
                    size={size}
                    onlyPathElement={true}
                    offset={105}
                />
            </svg>
        </div>
    )
}