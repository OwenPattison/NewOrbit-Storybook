import * as React from "react";
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import {Winner} from "../../src/Guy";

const stories = storiesOf("Guy", module)

stories.addDecorator(withKnobs);

stories
    .add("Are you lucky, punk?",() => (
            <Winner></Winner>
        ),
    );
