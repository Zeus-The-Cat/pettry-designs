import { set, z } from "zod";

// Define schemas
export const UserSchema = z.object({
    id: z.string(),
    nickname: z.string(),
    admin: z.boolean().optional(),
    avatar: z.string().optional(),
    color: z.string().optional(),
});

export const TicketSchema = z.object({
    id: z.string(),
    title: z.string(),
    currentPoints: z.number().optional(),
    description: z.string().optional(),
    urlOverride: z.string().optional(),
});

export const VoteSchema = z.object({
    userId: z.string(),
    ticketId: z.string(),
    vote: z.number(),
    note: z.string().optional(),
    reaction: z.string().optional(),
});

export const ReactionSchema = z.object({
    userId: z.string(),
    reaction: z.string(),
});

export const MessageSchema = z.object({
    messageId: z.string(),
    userId: z.string(),
    message: z.string(),
    reactions: ReactionSchema.array(),
    createdOn: z.string().optional(),
    updatedOn: z.string().optional(),
});

export const CreateRoomSchema = z.object({
    roomName: z.string(),
    admin: UserSchema,
});

export enum RouteNames {
    createRoom = "createRoom",
    setRoomName = "setRoomName",
    setRoomSetting = "setRoomSetting",
    setBaseLinkUrl = "setBaseLinkUrl",
    setActiveTicket = "setActiveTicket",
    addUser = "addUser",
    removeUser = "removeUser",
    addTicket = "addTicket",
    updateTicket = "updateTicket",
    addVote = "addVote",
    editVote = "editVote",
    deleteVote = "deleteVote",
    addMessage = "addMessage",
    editMessage = "editMessage",
    reactToMessage = "reactToMessage",
}
export enum NoBodyRoutes {
    clearVotes = "clearVotes",
}

export const routeSchemas: Record<RouteNames | string, z.ZodSchema<any>> = {
    [RouteNames.createRoom]: CreateRoomSchema,
    [RouteNames.setRoomName]: z.object({ roomName: z.string() }),
    [RouteNames.setRoomSetting]: z.object({ setting: z.string() }),
    [RouteNames.setBaseLinkUrl]: z.object({ url: z.string() }),
    [RouteNames.setActiveTicket]: z.object({ ticketId: z.string() }),
    [RouteNames.addUser]: UserSchema,
    [RouteNames.removeUser]: z.object({ id: z.string() }),
    [RouteNames.addTicket]: TicketSchema,
    [RouteNames.updateTicket]: z.object({
        ticketId: z.string(),
        updates: TicketSchema.partial(),
    }),
    [RouteNames.addVote]: VoteSchema,
    [RouteNames.editVote]: VoteSchema,
    [RouteNames.deleteVote]: z.object({
        userId: z.string(),
        ticketId: z.string(),
    }),
    [RouteNames.addMessage]: z.object({
        userId: z.string(),
        message: z.string(),
    }),
    [RouteNames.editMessage]: z.object({
        userId: z.string(),
        messageId: z.string(),
        message: z.string(),
    }),
    [RouteNames.reactToMessage]: z.object({
        userId: z.string(),
        messageId: z.string(),
        reaction: z.string(),
    }),
};

export const NoSchema: Array<NoBodyRoutes | string> = [NoBodyRoutes.clearVotes];

export type User = z.infer<typeof UserSchema>;
export type Vote = z.infer<typeof VoteSchema>;
export type Ticket = z.infer<typeof TicketSchema>;
export type Message = z.infer<typeof MessageSchema>;
export type Reaction = z.infer<typeof ReactionSchema>;

interface ApiResponse<T> {
    data?: T;
    error?: string;
}

export type BaseRoom = {
    admin: User | null;
    users: User[];
    roomUUID: string;
    roomName: string | null;
    roomSetting: string | null;
    baseLinkUrl: string | null;
    activeTicket: Ticket | null;
    tickets: Ticket[];
    votes: Vote[];
    history: Array<Vote[]>;
    chat: Message[];
};
