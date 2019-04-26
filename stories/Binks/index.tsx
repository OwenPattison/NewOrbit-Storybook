import * as React from "react";
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import { PersonalWebsite } from "../../src";

const stories = storiesOf("Binks", module)

stories.addDecorator(withKnobs);

stories
    .add("The Binks Component",() => (
            <PersonalWebsite />
        ),
    );
