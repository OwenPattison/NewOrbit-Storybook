import * as React from "react";
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import { Button } from "../../src/Monger/Button/Button";

const stories = storiesOf("Monger", module)

stories.addDecorator(withKnobs);

stories
    .add("Button",() => (
            <Button type={select("Type", { Primary: "primary", Secondary: "secondary"}, "primary")}>{text("Text", "Click me")}</Button>
        ),
        {
            info: { inline: true }
        }
    );
