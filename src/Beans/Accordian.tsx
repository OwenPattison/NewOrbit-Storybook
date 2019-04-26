import * as React from "react";
import { Button } from "semantic-ui-react";
import "./Accordian.css";

interface AccordianItemProps {
    title: string;
    content: string;
}

interface AccordianProps {
    items: AccordianItemProps[];
}

const AccordianItem: React.FC<AccordianItemProps> = ({ title, content }) => {
    const [panelVisibility, setPanelVisibility] = React.useState(false);

    const toggleVisibility = () => {
        setPanelVisibility(!panelVisibility);
    }

    const getClassName = () => panelVisibility ? "expanded-content shown" : "expanded-content not-shown";

    return (
        <div>
            <Button className="accordion" onClick={toggleVisibility}>{title}</Button>
            <div className={getClassName()}>
                <p>{content}</p>
            </div>
        </div>
    );
}

const Accordian: React.FC<AccordianProps> = ({ items }) => {
    {
        items ||
            <p>There are no items to show.</p>
    }

    return (
        <div>
            {items.map(i => {
                return <AccordianItem title={i.title} content={i.content} />;
            })}
        </div>
    );
};

export { Accordian };
