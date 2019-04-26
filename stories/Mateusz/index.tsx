import * as React from "react";
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Mateusz", module)

stories.addDecorator(withKnobs);

stories
    .add("Lovely Thing",() => (
            <iframe width="420" height="345" src="https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" frameBorder="0" allowFullScreen></iframe>
        ),
    );
