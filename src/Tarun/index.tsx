import * as React from "react";

interface SliderWidgetProps {
    description: string;
    min: number;
    max: number;
    value: number;
}

const SliderWidget: React.FunctionComponent<SliderWidgetProps> = ({ description, min, max, value }) => (
    <div>
        <h1>{description}: Min - {min}, Max - {max}, Value - {value}</h1>
        <input type="range" min={min} max={max} value={value} id="customslider" />
    </div>
);

export {
    SliderWidget
};
