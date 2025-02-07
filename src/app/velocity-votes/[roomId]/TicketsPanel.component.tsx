import { SelectTickets } from "@/functions/selectors"
import useLocalStorageState from "@/hooks/useLocalStorage"

export const TicketPanel = () => {
    const { state } = useLocalStorageState()
    const tickets = state ? SelectTickets(state) : []
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Ticket Queue</h2>
            <ul className="list-none p-0">
                {tickets && tickets.map((ticket, index) => (
                    <li key={index} className="border border-accent/30 rounded-lg p-4 mb-2 shadow-sm">
                        <h3 className="text-xl font-semibold">{ticket.title}</h3>
                        <p className="text-gray-700">{ticket.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}