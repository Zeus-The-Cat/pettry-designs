import { BaseRoom } from "@/types/velocityVotes.schema";
import { useSyncExternalStore } from "react";

export const ROOM_KEY = "ROOM_KEY";
function useLocalStorageState() {
    const item = useSyncExternalStore(subscribe, getSnapshot, () => undefined);

    // Parse the json string
    // You should probably further narrow down the JSON.parse type because JSON.parse returns any
    const state = typeof item === "string" ? JSON.parse(item) : null;

    const setState = (state: BaseRoom) => {
        localStorage.setItem(ROOM_KEY, JSON.stringify(state));
        //The event name has to match the eventListeners defined in the subscribe function
        window.dispatchEvent(new StorageEvent("custom-storage-event-name"));
    };

    return { state: state as BaseRoom, setState } as const;
}

function subscribe(callback: () => void) {
    window.addEventListener("custom-storage-event-name", callback);
    return () => {
        window.removeEventListener("custom-storage-event-name", callback);
    };
}

//Return the current state from the browser API
function getSnapshot() {
    //alert("localStorage changed")
    return localStorage.getItem(ROOM_KEY);
}
export default useLocalStorageState;
