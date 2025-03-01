"use client";
import {
    BaseRoom,
    RouteNames,
    routeSchemas,
} from "@/types/velocityVotes.schema";
import { useCallback, useState } from "react";
import { z } from "zod";
import useLocalStorageState from "./useLocalStorage";

const BaseRoute = process.env.NODE_ENV === "development"
    ? "http://localhost:8787"
    : process.env.DURABLE_OBJECT_URL;
export const useApi = () => {
    const [response, setResponse] = useState<BaseRoom | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { setState } = useLocalStorageState();

    const callApi = useCallback(
        async <T extends RouteNames>(
            route: T,
            roomId: string,
            payload: z.infer<(typeof routeSchemas)[T]>,
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
                setState(data as BaseRoom);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        },
        [setState],
    );

    return { callApi, loading, error, response };
};
