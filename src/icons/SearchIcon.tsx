import type {SVGProps} from "react";

const SearchIcon = ({height, width, ...props}: SVGProps<SVGSVGElement>) => (
    <svg
        width={width || 30}
        height={height || 30}
        viewBox="0 0 30 30"
        fill="transparent"
        {...props}
    >
        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 22L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export default SearchIcon;
