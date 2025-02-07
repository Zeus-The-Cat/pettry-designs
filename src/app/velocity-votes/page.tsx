'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/button.component';
import { Input } from '@headlessui/react';

export default function VelocityVotePage() {
    const [existingRoomId, setExistingRoomId] = useState('');
    const router = useRouter();

    const handleCreateRoom = () => {
        const roomId = crypto.randomUUID().split('-')[0];
        router.push(`/velocity-votes/${roomId}`);
    };

    const handleJoinRoom = () => {
        if (existingRoomId) {
            router.push(`/velocity-votes/${existingRoomId}`);
        }
    };

    return (
        <div>
            <h1>Velocity Vote</h1>
            <div>
                <Button onClick={handleCreateRoom} title={"Create New Room"}></Button>
            </div>
            <div>
                <Input
                    type="text"
                    value={existingRoomId}
                    onChange={(e) => setExistingRoomId(e.target.value)}
                    placeholder="Enter Room ID"
                />
                <Button onClick={handleJoinRoom} title="Join Room"></Button>
            </div>
        </div>
    )
}