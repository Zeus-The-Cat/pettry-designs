import React from 'react';

interface CloudySVGProps {
    width?: number;
    height?: number;
    fill?: string;
}

const CloudySVG: React.FC<CloudySVGProps> = ({ width = 100, height = 100, fill = '#000' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="blur" x="-10" y="-10" width="120" height="120">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>
            </defs>
            <path
                d="M64.9,30.3c-0.6,0-1.2,0-1.8,0.1c-1.7-4.4-5.9-7.5-10.8-7.5c-4.1,0-7.7,2.1-9.8,5.3c-1.1-0.4-2.3-0.6-3.5-0.6
                c-5.5,0-10,4.5-10,10c0,0.5,0,1,0.1,1.5c-4.4,0.8-7.8,4.7-7.8,9.3c0,5.2,4.2,9.4,9.4,9.4h38.1c4.7,0,8.5-3.8,8.5-8.5
                C73.4,34.1,69.6,30.3,64.9,30.3z"
                fill={fill}
                filter="url(#blur)"
            >
                <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="4s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="d"
                    values="M64.9,30.3c-0.6,0-1.2,0-1.8,0.1c-1.7-4.4-5.9-7.5-10.8-7.5c-4.1,0-7.7,2.1-9.8,5.3c-1.1-0.4-2.3-0.6-3.5-0.6c-5.5,0-10,4.5-10,10c0,0.5,0,1,0.1,1.5c-4.4,0.8-7.8,4.7-7.8,9.3c0,5.2,4.2,9.4,9.4,9.4h38.1c4.7,0,8.5-3.8,8.5-8.5C73.4,34.1,69.6,30.3,64.9,30.3z;M64.9,30.3c-0.6,0-1.2,0-1.8,0.1c-1.7-4.4-5.9-7.5-10.8-7.5c-4.1,0-7.7,2.1-9.8,5.3c-1.1-0.4-2.3-0.6-3.5-0.6c-5.5,0-10,4.5-10,10c0,0.5,0,1,0.1,1.5c-4.4,0.8-7.8,4.7-7.8,9.3c0,5.2,4.2,9.4,9.4,9.4h38.1c4.7,0,8.5-3.8,8.5-8.5C73.4,34.1,69.6,30.3,64.9,30.3z"
                    dur="4s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill"
                    values="#000;#555;#000"
                    dur="4s"
                    repeatCount="indefinite"
                />
            </path>
        </svg>
    );
};

export default CloudySVG;


export const NoiseSVG = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 700 700" width="700" height="700" opacity="0.52"><defs><filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="linearRGB">
        <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
        <feSpecularLighting surfaceScale="28" specularConstant="1.2" specularExponent="20" lightingColor="#ffffff" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
            <feDistantLight azimuth="3" elevation="27"></feDistantLight>
        </feSpecularLighting>
        <feColorMatrix type="saturate" values="0" x="0%" y="0%" width="100%" height="100%" in="specularLighting" result="colormatrix"></feColorMatrix>
    </filter></defs><rect width="700" height="700" fill="transparent"></rect><rect width="700" height="700" fill="#ffffff" filter="url(#nnnoise-filter)"></rect></svg>)
}