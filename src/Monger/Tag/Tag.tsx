import * as React from "react";
import "./_structure.css";
import "./_color.css";

interface TagProps {

}

const Tag: React.FunctionComponent<TagProps> = props => {
    return (
        <div className={`tag`}><span>{props.children}</span></div>
    );
};

export { Tag };
