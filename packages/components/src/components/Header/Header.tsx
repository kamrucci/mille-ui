import * as React from "react";

interface HeaderProps {
    text: string;
}

const Header: React.FC<HeaderProps> = ({ text = "" }) => {
    return (
        <h1>Shared header library {text}</h1>
    )
}

export default Header;