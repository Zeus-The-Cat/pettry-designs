'use client'
import { Button } from "@/components/button.component"
import { Tabs } from "@/components/tabs.component"
import { Toggle } from "@/components/toggle.component"
import { useState } from "react"

export const Components = () => {
    return (<div>
        <div className="flex gap-4">
            <h1>Component</h1> <ToggleDarkMode />
        </div>
        <div>
            <ThemeHeaders />
            <ThemeColors />
            <ThemeButtons />
            <Tabs />
        </div>
    </div>)
}

export const ThemeColors = () => {
    const squareClass = "w-10 h-10 rounded-md"
    return (
        <div className="flex gap-2">
            <div className={`${squareClass} bg-background dark:bg-dark-background`}></div>
            <div className={`${squareClass} bg-foreground dark:bg-fdark-oreground`}></div>
            <div className={`${squareClass} bg-primary dark:bg-dark-primary`}></div>
            <div className={`${squareClass} bg-secondary dark:bg-dark-secondary`}></div>
            <div className={`${squareClass} bg-accent dark:bg-dark-accent`}></div>
            <div className={`${squareClass} bg-highlight dark:bg-dark-highlight`}></div>
        </div>
    )
}

export const ThemeHeaders = () => {
    return (
        <div>
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
        </div>
    )
}
export const ThemeButtons = () => {
    return (
        <div>
            <h1>Buttons</h1>
            <Button title="Primary" onClick={() => console.log("Button clicked")} />
            <Button title="Secondary" secondary onClick={() => console.log("Button clicked")} />
        </div>
    )
}
export const ToggleDarkMode = () => {
    const [enabled, setEnabled] = useState(document.documentElement.classList.contains("dark"));
    return <Toggle
        enabled={enabled}
        setEnabled={() => {
            setEnabled(!enabled);
            document.documentElement.classList.toggle("dark");
        }}
        leftText="Dark"
        rightText="Light"
    />
}