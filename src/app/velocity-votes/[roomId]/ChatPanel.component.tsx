import { SelectMessages, SelectUser } from "@/functions/selectors"
import useLocalStorageState from "@/hooks/useLocalStorage"

export const ChatPanel = () => {
    const { state } = useLocalStorageState()
    const messages = state ? SelectMessages(state) : []
    const currentUser = 'u-1'
    return (
        <div className="messages space-y-4 p-4">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`message flex items-start ${message.userId === currentUser ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                        className={`p-3 rounded-lg max-w-xs break-words ${message.userId === currentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                        style={{ color: SelectUser(state, message.userId)?.color ?? 'blue' }}
                    >
                        <span className="block text-xs text-gray-500">{message?.updatedOn && new Date(message.updatedOn).toLocaleTimeString()}</span>
                        <span className="block font-semibold">{message.userId}</span>
                        <span className="block">{message.message}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}