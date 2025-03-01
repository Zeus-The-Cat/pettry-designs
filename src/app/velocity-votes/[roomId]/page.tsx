"use client";
import { useParams } from "next/navigation";
import { Text } from "@/components/text.component";
import { Button } from "@/components/button.component";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useState } from "react";
import { VoteDisplay } from "@/components/VoteDisplay.component";
import CloudySVG, { NoiseSVG } from "@/components/CloudySVG.component";

export default function RoomPage() {
    const [anim, setAnim] = useState<boolean | null>(null)
    const [votes, setVotes] = useState<number[]>([1])
    const params = useParams();
    const roomId = params.roomId;
    const { _, copyToClipboard } = useCopyToClipboard();
    return (
        <div className="flex gap-1 m-5">
            <div className="flex flex-col p-2 grow bg-secondary">
                <div className='w-full flex gap-2 items-center'>
                    <Text level="2">Room Id: {params.roomId}</Text>
                    {typeof roomId === 'string' && (
                        <Button onClick={() => {
                            setAnim(!anim)
                            setTimeout(() => setAnim((an) => !an), 750)
                            copyToClipboard(roomId)
                        }} secondary={true}>

                        </Button>)}
                    {anim && <Text level='3' className="text-txt/90">Copied!</Text>}
                    <Text level="2" className="ml-auto">Nickname: Franklin</Text>
                </div>
                <div>
                    <Text level="3">Votes</Text>
                    <div className="grid grid-cols-3 gap-2">
                        <div>
                            <Text level="2">
                                <Button onClick={() => setVotes([...votes, Math.max(1, Math.floor(Math.random() * 9))])} title="random number"></Button>
                            </Text>
                        </div>
                        <VoteDisplay votes={votes} size={128} />
                        <CloudySVG />
                        <NoiseSVG />
                        <div><Text level="2">Votes</Text></div>
                    </div>
                </div>
            </div>
            <section className="flex flex-col gap-4 bg-dark-secondary p-4 basis-[40%]">
                <h2 className="w-full !text-white">Room</h2>
                <Button onClick={() => setAnim(!anim)} title={'Press'}></Button>
            </section>
        </div>
    )
}

