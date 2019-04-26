import * as React from "react";

export const CoolComponent: React.FunctionComponent<{ color: string, bigDiv: boolean, throbbing: boolean }> = (props) => (
    <div
        style={{ backgroundColor: props.color, height: props.bigDiv ? "500px" : "20px" }}
        className={`cool-component ${props.throbbing ? "throbbing" : ""}`}
    >Look at this really super component</div>
);