import * as React from "react";
import "./_customslider.css";
import { action } from "@storybook/addon-actions";

interface SliderWidgetProps {
    description: string;
    min: number;
    max: number;
    value: number;
}

const SliderWidget: React.FunctionComponent<SliderWidgetProps> = ({ description, min, max, value }) => (
    <div>
        <h1>{description}: Min - {min}, Max - {max}, Initial Value - {value}</h1>
        <input
            type="range"
            min={min}
            max={max} 
            defaultValue={value.toString()} 
            className="customslider" 
            onChange={(event) => {
                action("onChange")(event.target.value)
            }}/>
    </div>
);

export {
    SliderWidget
};
