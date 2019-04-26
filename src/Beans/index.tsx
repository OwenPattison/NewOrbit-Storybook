import * as React from "react";

interface IComponentProps {
    name: string;
}

const BeansComponent: React.FunctionComponent<IComponentProps> = ({ name }) => {

    return (
        <div>
            <h1>Welcome, {name}</h1>
        </div>
    );
};

export { BeansComponent };
