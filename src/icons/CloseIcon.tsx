import type {SVGProps} from "react";

const CloseIcon = ({height, width, ...props}: SVGProps<SVGSVGElement>) => (
    <svg
        width={width || 30}
        height={height || 30}
        viewBox="0 0 30 30"
        fill="transparent"
        style={{transform: "rotate(45deg)"}}
        {...props}
    >
        <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export default CloseIcon;
