import * as React from "react";
import "./_structure.css";
import { Tag } from "../Tag/Tag";

interface TagListProps {
    items: string[];
}

const TagList: React.FunctionComponent<TagListProps> = props => {
    return (
        <ul className="tag-list">
            {
                (props.items || []).map(item => <li><Tag>{item}</Tag></li>)
            }
        </ul>
    );
};

export { TagList };
