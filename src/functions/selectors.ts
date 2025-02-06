import {
    BaseRoom,
    Message,
    Reaction,
    Ticket,
    User,
    Vote,
} from "@/types/velocityVotes.schema";
// Admin
export const SelectAdmin = (state: BaseRoom): User | null => state.admin;

// Users
export const SelectUsers = (state: BaseRoom): User[] => state.users;
export const SelectUser = (state: BaseRoom, userId: string): User | undefined =>
    state.users.find((user) => user.id === userId);

// Votes
export const SelectVotes = (state: BaseRoom): Vote[] => state.votes;
export const SelectUserVotes = (state: BaseRoom, userId: string): Vote[] =>
    state.votes.filter((vote) => vote.userId === userId);
export const SelectTicketVotes = (state: BaseRoom, ticketId: string): Vote[] =>
    state.votes.filter((vote) => vote.ticketId === ticketId);
export const SelectUserTicketVote = (
    state: BaseRoom,
    userId: string,
    ticketId: string,
): Vote | undefined =>
    state.votes.find((vote) =>
        vote.userId === userId && vote.ticketId === ticketId
    );
export const SelectTicketVoteTotal = (
    state: BaseRoom,
    ticketId: string,
): number =>
    state.votes.filter((vote) => vote.ticketId === ticketId).reduce(
        (acc, vote) => acc + vote.vote,
        0,
    ) / state.votes.length;

// Tickets
export const SelectTickets = (state: BaseRoom): Ticket[] => state.tickets;
export const SelectTicket = (
    state: BaseRoom,
    ticketId: string,
): Ticket | undefined => state.tickets.find((ticket) => ticket.id === ticketId);
export const SelectActiveTicket = (state: BaseRoom): Ticket | null =>
    state.activeTicket;
export const SelectTicketHistory = (state: BaseRoom): Array<Vote[]> =>
    state.history;

// Messages
export const SelectMessages = (state: BaseRoom): Message[] => state.chat;
export const SelectMessage = (
    state: BaseRoom,
    messageId: string,
): Message | undefined =>
    state.chat.find((message) => message.messageId === messageId);
export const SelectReactions = (
    state: BaseRoom,
    messageId: string,
): Reaction[] | undefined => {
    return state.chat.find((message) => message.messageId === messageId)
        ?.reactions;
};
