import React from 'react';

const ContentCopyFillIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
        <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z" />
    </svg>
);
// export const ContentCopyFillPath = "M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Z";
const ContentCopyFillPath1 = "M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Z";
const ContentCopyFillPath2 = "M200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"
export const ContentCopyFillPathArray = [ContentCopyFillPath1, ContentCopyFillPath2]
export const ContentCopyFillPathCombined = ContentCopyFillPath1 + ContentCopyFillPath2
export default ContentCopyFillIcon;