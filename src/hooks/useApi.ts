"use client";
import { RouteNames, routeSchemas } from "@/types/velocityVotes.schema";
import { useCallback, useState } from "react";
import { z } from "zod";

const BaseRoute = "http://localhost:8787";
export const useApi = () => {
    const [response, setResponse] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

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
