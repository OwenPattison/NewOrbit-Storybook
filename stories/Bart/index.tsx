import * as React from "react";
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Bart", module)

stories.addDecorator(withKnobs);

stories
    .add("Root cause of bugs",() => (
            <iframe width="800" height="600" src="https://condescending-kilby-151061.netlify.com/?path=/story/bart--lovely-thing" frameBorder="0" allowFullScreen></iframe>
        ),
    );
