import React from "react";

type SVGProps = {
    className?: string;
}

const MenuIcon: React.FC<SVGProps> = (props) => {
    return (
        <svg
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
        >
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3z" />
        </svg>
    );
}

export default MenuIcon;