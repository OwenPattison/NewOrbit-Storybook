import * as React from "react";
import "./_structure.css";
import "./_color.css";

interface ButtonProps {
    type?: "primary" | "secondary";
}

const Button: React.FunctionComponent<ButtonProps> = props => {
    const buttonType = props.type || "secondary";

    return (
        <button className={`btn ${buttonType}`}>{props.children}</button>
    );
};

export { Button };
