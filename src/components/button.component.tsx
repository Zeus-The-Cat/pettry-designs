'use client'
import { Button as HButton } from '@headlessui/react'

interface ButtonProps {
    onClick: () => void;
    title?: string;
    secondary?: boolean;
    children?: React.ReactNode;
}
export const Button = ({ title = '', secondary, onClick, children }: ButtonProps) => {
    const baseStyle = "text-txt inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold "
    const primaryStyle = "text bg-primary dark:bg-dark-primary hover:bg-primary/90 dark:hover:bg-dark-primary/90 active:bg-primary/80 dark:active:bg-dark-primary/80 focus:ring-primary/50 dark:focus:ring-dark-primary/50"
    const secondaryStyle = "bg-secondary dark:bg-dark-secondary hover:bg-secondary/90 dark:hover:bg-dark-secondary/90 active:bg-secondary/80 dark:active:bg-dark-secondary/80 focus:ring-secondary/50 dark:focus:ring-dark-secondary/50"
    return <HButton
        onClick={onClick}
        className={`${baseStyle} ${secondary ? secondaryStyle : primaryStyle}`}>
        {title} {children}
    </HButton>
}