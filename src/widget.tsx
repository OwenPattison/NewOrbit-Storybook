import * as React from "react";

interface SampleWidgetProps {
    name: string;
    age: number;
}

const SampleWidget: React.FunctionComponent<SampleWidgetProps> = ({ name, age }) => (
    <div>
        <h1>Hello {name} {age}</h1>
    </div>
);

export {
    SampleWidget
};
