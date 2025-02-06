"use client";
import { z } from "zod";
import { useCallback, useState } from "react";

const BaseRoute = "http://localhost:8787";
// Define schemas
const UserSchema = z.object({
    id: z.string(),
    nickname: z.string(),
    admin: z.boolean().optional(),
    avatar: z.string().optional(),
    color: z.string().optional(),
});

const TicketSchema = z.object({
    id: z.string(),
    title: z.string(),
    currentPoints: z.number().optional(),
    description: z.string().optional(),
    urlOverride: z.string().optional(),
});

const VoteSchema = z.object({
    userId: z.string(),
    ticketId: z.string(),
    vote: z.number(),
    note: z.string().optional(),
    reaction: z.string().optional(),
});

const MessageSchema = z.object({
    messageId: z.string(),
    userId: z.string(),
    message: z.string(),
    reactions: z.array(z.string()),
});

const ReactSchema = z.object({
    messageId: z.number(),
    reaction: z.string(),
    remove: z.boolean(),
});

const CreateRoomSchema = z.object({
    roomName: z.string(),
    admin: UserSchema,
});

// Define a map for route-specific validation
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
    reactToMessage = "reactToMessage",
}

export enum NoBodyRoutes {
    clearVotes = "clearVotes",
}

export const routeSchemas: Record<RouteNames, z.ZodSchema<any>> = {
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
    [RouteNames.addMessage]: MessageSchema,
    [RouteNames.reactToMessage]: ReactSchema,
};

const NoSchema: NoBodyRoutes[] = [NoBodyRoutes.clearVotes];

export type User = z.infer<typeof UserSchema>;
export type Vote = z.infer<typeof VoteSchema>;
export type Ticket = z.infer<typeof TicketSchema>;
export type Message = z.infer<typeof MessageSchema>;

interface ApiResponse<T> {
    data?: T;
    error?: string;
}

export const useApi = () => {
    const [response, setResponse] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const callApi = useCallback(
        async <T extends RouteNames>(
            route: T,
            roomId: string,
            payload: z.infer<(typeof routeSchemas)[T]>
        ): Promise<void> => {
            setLoading(true);
            setError(null);

            try {
                // Validate payload against the schema
                const schema = routeSchemas[route];
                schema.parse(payload);

                const response = await fetch(`${BaseRoute}/${route}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-room": roomId,
                    },
                    body: JSON.stringify(payload),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Something went wrong");
                }

                setResponse(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        },
        [],
    );

    return { callApi, loading, error, response };
};
