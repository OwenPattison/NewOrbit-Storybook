import * as React from "react";
import { withKnobs, array, color } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import { Breadcrumb } from "../../src/Kelvin";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Kelvin", module)

stories.addDecorator(withKnobs);

stories
    .add("Breadcrumb",() => (
            <Breadcrumb
                steps={array<string>("steps", [
                    "Introduction",
                    "Middle",
                    "End"
                ])}
                onClick={(clickedStep) => action('breadcrumb-click')(clickedStep)}
                activeColor={color("activeColor", "magenta")}
                inactiveColor={color("inactiveColor", "blue")}
            />
        ),
        {
            //info: { inline: true },
            notes: 'These are some notes for my breadcrumb'
        }
    );
