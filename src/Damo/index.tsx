import * as React from "react";
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Damo", module)

stories.addDecorator(withKnobs);

stories
    .add("Lovely Thing",() => (
            <h1>Please add something lovely here!</h1>
        ),
    );
