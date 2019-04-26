import * as React from "react";
import "./Breadcrumb.css";

interface BreadcrumbProps {
    steps: string[];
    onClick: (step: string) => void;
    activeColor: string;
    inactiveColor: string;
}

const Breadcrumb = (props: BreadcrumbProps) => {
    const [activeStep, setActiveStep] = React.useState(props.steps[0]);
    return (
    <div className="breadcrumb">
        {props.steps.map((s, i) =>
            <>
                <a onClick={() => {
                    props.onClick(s);
                    setActiveStep(s);
                }} key={s} className="breadcrumb-step" style={{
                    color: s === activeStep ? props.activeColor : props.inactiveColor
                }}>
                    {s}
                </a>
                {props.steps.length-1 !== i && <div> > </div>}
            </>
        )}
    </div>);
};

export { Breadcrumb, BreadcrumbProps };
