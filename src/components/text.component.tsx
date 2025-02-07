import React from 'react';

interface TextProps {
    level: '1' | '1b' | '2' | '2b' | '3' | '3b' | '4' | '4b';
    children: React.ReactNode;
    className?: string;
}

export const Text: React.FC<TextProps> = ({ level, className, children }) => {
    const getSize = (level: string) => {
        switch (level) {
            case '1':
                return '2rem';
            case '1b':
                return '1.75rem';
            case '2':
                return '1.5rem';
            case '2b':
                return '1.25rem';
            case '3':
                return '1rem';
            case '3b':
                return '0.875rem';
            case '4':
                return '0.75rem';
            case '4b':
                return '0.625rem';
            default:
                return '1rem';
        }
    };

    const style = {
        fontSize: getSize(level),
    };

    return <div className={`text-txt dark:text-dark-txt ${className ?? ''}`} style={style}>{children}</div>;
};