"use client";
import { useParams } from "next/navigation";
import { Text } from "@/components/text.component";
import { Button } from "@/components/button.component";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { RoomTabs } from "./RoomTabs.component";
import ApiTestPage from "@/components/ApiTestPage.component";

export default function RoomPage() {
    const params = useParams();
    const roomId = params.roomId;
    const { isCopied, copyToClipboard } = useCopyToClipboard();
    return (
        <div className="flex gap-1 m-5">
            <div className="flex flex-col p-2 grow bg-secondary">
                <div className='w-full flex gap-2'>
                    <Text level="2">Room Id: {params.roomId}</Text> {typeof roomId === 'string' && <Button onClick={() => copyToClipboard(roomId)} title={isCopied ? 'Copied!' : 'Copy'} secondary={true}></Button>}
                    <Text level="2" className="ml-auto">Nickname: Franklin</Text>
                </div>
                <div>
                    <Text level="3">Votes</Text>
                    <ApiTestPage />
                </div>
            </div>
            <section className="flex flex-col gap-4 bg-dark-secondary p-4 basis-[40%]">
                <h2 className="w-full !text-white">Room</h2>
                <RoomTabs />
            </section>
        </div>
    )
}

