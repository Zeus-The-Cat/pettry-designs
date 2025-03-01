import { on } from "events";
import { interpolate } from "flubber2";
import { useEffect, useState } from "react";

interface AnimatedSVGProps {
    pathA: string,
    pathB: string,
    trigger: boolean | null,
    color: string,
    size?: number,
    duration?: number
    animationFinished?: () => void
}

export const AnimatedSVG = ({ pathA, pathB, trigger, color, duration = 150, size = 24, animationFinished }: AnimatedSVGProps) => {
    const [path, setPath] = useState<string>(pathA);
    const interpolator = interpolate(pathA, pathB, { maxSegmentLength: 20 });

    useEffect(() => {
        let start: number | null = null;
        const animate = (timestamp: DOMHighResTimeStamp, reverse: boolean) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setPath(interpolator(reverse ? 1 - progress : progress));
            if (progress < 1) {
                requestAnimationFrame((ts) => animate(ts, reverse));
            } else {
                animationFinished?.();
            }
        };
        if (trigger === true) {
            requestAnimationFrame((ts) => animate(ts, false));
        } else if (trigger === false) {
            requestAnimationFrame((ts) => animate(ts, true));
        }
    }, [trigger, duration]);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 100 100" width={size} fill={color}>
            <path d={path} />
        </svg>
    );
};

interface AnimatedSVGArrayProps {
    pathA: string,
    pathB: string[],
    trigger: boolean | null,
    color: string,
    initPath?: string,
    size?: number,
    duration?: number
}

export const AnimatedSVGArray = ({ pathA, pathB, trigger, initPath, color, duration = 150, size = 24 }: AnimatedSVGArrayProps) => {
    const [path, setPath] = useState<string>(initPath ?? pathA);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const interpolators = pathB.map((path) => interpolate(pathA, path, { maxSegmentLength: 20 }));

    useEffect(() => {
        let start: number | null = null;
        const animate = (timestamp: DOMHighResTimeStamp, reverse: boolean) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setPath(interpolators[currentIndex](reverse ? 1 - progress : progress));
            if (progress < 1) {
                requestAnimationFrame((ts) => animate(ts, reverse));
            } else if (trigger !== null) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % pathB.length);
            }
        };
        if (trigger === true) {
            requestAnimationFrame((ts) => animate(ts, initPath ? true : false));
        } else if (trigger === false) {
            requestAnimationFrame((ts) => animate(ts, initPath ? false : true));
        }
    }, [trigger, duration, currentIndex]);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size} fill={color}>
            <path d={path} />
        </svg>
    );
};

interface OneWayAnimatedSVGProps {
    pathA: string,
    pathB: string,
    trigger: boolean | null,
    color: string,
    onlyPathElement?: boolean
    offset?: number,
    size?: number,
    duration?: number,
    animationFinished?: () => void
}

export const OneWayAnimatedSVG = ({ pathA, pathB, trigger, color, offset, duration = 150, size = 24, onlyPathElement = false, animationFinished }: OneWayAnimatedSVGProps) => {
    const [path, setPath] = useState<string>(pathA);
    const interpolator = interpolate(pathA, pathB, { maxSegmentLength: 20 });

    useEffect(() => {
        if (trigger) {
            console.log('show animation')
            let start: number | null = null;
            const animate = (timestamp: DOMHighResTimeStamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                setPath(interpolator(progress));
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else if (progress === 1) {
                    setTimeout(() => {
                        animationFinished?.();
                    }, 30)
                }
            };
            requestAnimationFrame(animate);
        } else if (trigger === false) {
            console.log('no animation')
            animationFinished?.();
        }
    }, [trigger, duration]);

    if (onlyPathElement) {
        return (
            <path d={path} fill={color} filter="url(#f2)" transform={`translate(${offset ?? 0},0)`} />
        )
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 100 100" width={size} fill={color} clip={'false'}>
            <path d={path} />
        </svg>
    );
};