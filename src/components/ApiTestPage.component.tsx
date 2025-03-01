'use client'
import { Message, RouteNames, Ticket, User, Vote } from '@/types/velocityVotes.schema';
import { Mock_Admin } from '@/mocks/admin';
import { Mock_Message_1, Mock_Message_2 } from '@/mocks/message';
import { Mock_Ticket_1, Mock_Ticket_2, Mock_Ticket_3, Mock_Ticket_4, Mock_Ticket_5 } from '@/mocks/tickets';
import { Mock_User_1, Mock_User_2, Mock_User_3, Mock_User_4 } from '@/mocks/user';
import { Mock_Vote_1, Mock_Vote_2, Mock_Vote_3, Mock_Vote_4, Mock_Vote_5 } from '@/mocks/votes';
import { CSSProperties } from 'react';
import { useApi } from '@/hooks/useApi';

const TestRoom = 'abcdef'
const ApiTestPage: React.FC = () => {
 
    const { response, loading, callApi, error } = useApi();
    const createRoom = async () => {
        await callApi<RouteNames.createRoom>(RouteNames.createRoom, TestRoom, {
            admin: Mock_Admin,
            roomName: 'New Room A',
        });
    }
    const addUser = async (user: User) => {
        await callApi<RouteNames.addUser>(RouteNames.addUser, TestRoom, user);
    }
    const addTicket = async (ticket: Ticket) => {
        await callApi<RouteNames.addTicket>(RouteNames.addTicket, TestRoom, ticket);
    }
    const editTicket = async (ticket: Ticket) => {
        await callApi<RouteNames.updateTicket>(RouteNames.updateTicket, TestRoom, {
            ticketId: ticket.id,
            updates: ticket,
        });
    }
    const setRoomName = async () => {
        await callApi<RouteNames.setRoomName>(RouteNames.setRoomName, TestRoom, { roomName: 'New Room Name' });
    }
    const setRoomSetting = async () => {
        await callApi<RouteNames.setRoomSetting>(RouteNames.setRoomSetting, TestRoom, { setting: 'New Setting' });
    }
    const setBaseLinkUrl = async () => {
        await callApi<RouteNames.setBaseLinkUrl>(RouteNames.setBaseLinkUrl, TestRoom, { url: 'https://www.google.com' });
    }
    const setActiveTicket = async () => {
        await callApi<RouteNames.setActiveTicket>(RouteNames.setActiveTicket, TestRoom, { ticketId: Mock_Ticket_1.id });
    }
    const addVote = async (vote: Vote) => {
        await callApi<RouteNames.addVote>(RouteNames.addVote, TestRoom, vote);
    }
    const editVote = async (vote: Vote) => {
        await callApi<RouteNames.editVote>(RouteNames.editVote, TestRoom, vote);
    }
    const deleteVote = async (userId: string, ticketId: string) => {
        await callApi<RouteNames.deleteVote>(RouteNames.deleteVote, TestRoom, { userId, ticketId });
    }
    const SendMessage = async (message: Message) => {
        await callApi<RouteNames.addMessage>(RouteNames.addMessage, TestRoom, { userId: message.userId, message: message.message });
    }
    const SendReaction = async (messageId: string, userId: string, reaction: string) => {
        await callApi<RouteNames.reactToMessage>(RouteNames.reactToMessage, TestRoom, { messageId, userId, reaction });
    }
    // Todo save to history
    const BtnStyle: CSSProperties = {
        background: 'white',
        border: 'teal',
        color: 'teal',
        padding: 5,
        borderRadius: 6
    }
    const ColStyle: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 10, }
    const H3Style: CSSProperties = { fontSize: 18, textAlign: 'center' }
    return (
        <div style={{ padding: 20, paddingLeft: 40, paddingRight: 40, display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center    ', alignItems: 'flex-start' }}>
            <h1 style={{ fontSize: 24, textAlign: 'center' }}>API Test Page</h1>
            <div style={{ display: 'flex', gap: 10 }}>
                <div style={ColStyle}>
                    <h3 style={H3Style}>Room Actions</h3>
                    <button style={BtnStyle} onClick={createRoom} disabled={loading}>
                        Create Room
                    </button>
                    <button style={BtnStyle} onClick={setRoomName} disabled={loading}>
                        Set Room Name
                    </button>
                    <button style={BtnStyle} onClick={setRoomSetting} disabled={loading}>
                        Set Room Setting
                    </button>
                    <button style={BtnStyle} onClick={setBaseLinkUrl} disabled={loading}>
                        Set Base Link Url
                    </button>
                </div>
                <div style={ColStyle}>
                    <h3 style={H3Style}>User Actions</h3>
                    <button style={BtnStyle} onClick={() => void addUser(Mock_User_1)} disabled={loading}>
                        Add User 1
                    </button>
                    <button style={BtnStyle} onClick={() => void addUser(Mock_User_2)} disabled={loading}>
                        Add User 2
                    </button>
                    <button style={BtnStyle} onClick={() => void addUser(Mock_User_3)} disabled={loading}>
                        Add User 3
                    </button>
                    <button style={BtnStyle} onClick={() => void addUser(Mock_User_4)} disabled={loading}>
                        Add User 4
                    </button>
                </div>
                <div style={ColStyle}>
                    <h3 style={H3Style}>Ticket Actions</h3>
                    <button style={BtnStyle} onClick={() => void addTicket(Mock_Ticket_1)} disabled={loading}>
                        Add Ticket 1
                    </button>
                    <button style={BtnStyle} onClick={() => void addTicket(Mock_Ticket_2)} disabled={loading}>
                        Add Ticket 2
                    </button>
                    <button style={BtnStyle} onClick={() => void addTicket(Mock_Ticket_3)} disabled={loading}>
                        Add Ticket 3
                    </button>
                    <button style={BtnStyle} onClick={() => void addTicket(Mock_Ticket_4)} disabled={loading}>
                        Add Ticket 4
                    </button>
                    <button style={BtnStyle} onClick={() => void addTicket(Mock_Ticket_5)} disabled={loading}>
                        Add Ticket 5
                    </button>
                    <button style={BtnStyle} onClick={setActiveTicket} disabled={loading}>
                        Set Active Ticket
                    </button>
                    <button style={BtnStyle} onClick={() => void editTicket({ ...Mock_Ticket_1, title: 'edited title ticket 1' })} disabled={loading}>
                        Edit Ticket 1
                    </button>
                </div>
                <div style={ColStyle}>
                    <h3 style={H3Style}>Vote Actions</h3>
                    <button style={BtnStyle} onClick={() => void addVote(Mock_Vote_1)} disabled={loading}>
                        Add Vote 1
                    </button>
                    <button style={BtnStyle} onClick={() => void addVote(Mock_Vote_2)} disabled={loading}>
                        Add Vote 2
                    </button>
                    <button style={BtnStyle} onClick={() => void addVote(Mock_Vote_3)} disabled={loading}>
                        Add Vote 3
                    </button>
                    <button style={BtnStyle} onClick={() => void addVote(Mock_Vote_4)} disabled={loading}>
                        Add Vote 4
                    </button>
                    <button style={BtnStyle} onClick={() => void addVote(Mock_Vote_5)} disabled={loading}>
                        Add Vote 5
                    </button>
                    <button style={BtnStyle} onClick={() => void editVote({ ...Mock_Vote_1, vote: 10 })} disabled={loading}>
                        Edit Vote 1
                    </button>
                    <button style={BtnStyle} onClick={() => void deleteVote(Mock_Vote_1.userId, Mock_Vote_1.ticketId)} disabled={loading}>
                        Delete Vote 1
                    </button>
                </div>
                <div style={ColStyle}>
                    <h3 style={H3Style}>Message Actions</h3>
                    <button style={BtnStyle} onClick={() => void SendMessage({ ...Mock_Message_1, userId: Mock_User_1.id })} disabled={loading}>
                        Send Message 1
                    </button>
                    <button style={BtnStyle} onClick={() => void SendMessage({ ...Mock_Message_2, userId: Mock_User_2.id })} disabled={loading}>
                        Send Message 2
                    </button>
                    <button style={BtnStyle} onClick={() => void SendReaction(Mock_Message_1.messageId, Mock_User_1.id, 'like')} disabled={loading}>
                        Send Reaction 1
                    </button>
                    <button style={BtnStyle} onClick={() => void SendReaction(Mock_Message_1.messageId, Mock_User_2.id, 'dislike')} disabled={loading}>
                        Send Reaction 2
                    </button>
                </div>

            </div>
            {error && (
                <div style={{ marginBottom: 10 }}>
                    <pre style={{ background: '#1e1e1e', padding: '10px', borderRadius: '5px', color: 'red' }}>
                        <h2 style={{ color: 'white', fontSize: 18 }}>Error</h2>
                        <code>{error}</code>
                    </pre>
                </div>
            )
            }
            <pre style={{ background: '#1e1e1e', padding: '10px', borderRadius: '5px', color: '#d4d4d4' }}>
                <h2 style={{ color: 'white', fontSize: 18 }}>Response</h2>
                <code>{JSON.stringify(response, null, 2)}</code>
            </pre>
        </div >
    );
};

export default ApiTestPage;