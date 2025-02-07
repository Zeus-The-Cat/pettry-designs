import { useState } from 'react';

export const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    };

    return { isCopied, copyToClipboard };
};