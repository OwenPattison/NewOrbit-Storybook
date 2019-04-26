import * as React from "react";
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import { Farewell } from "../../src/Pete";

const stories = storiesOf("Pete", module)

stories.addDecorator(withKnobs);

stories
    .add("Lovely Thing",() => (
            <h1>Please add something lovely here!</h1>
        ),
    )
    .add("Valedictory",() => (
        <Farewell
            name={text('Name', 'PvB')}
            age={text('Age', '30++++++++')}
        />
    ),
    {
        info: { inline: true },
        notes: 'A goodbye component.',
        cssresources: [
            {
                id: `muicss`,
                code: `<link href="//cdn.muicss.com/mui-0.9.41/css/mui.min.css" rel="stylesheet" type="text/css"></link>`,
                picked: true,
            }, {
                id: `bluetheme`,
                code: `<style>body { 
                    background-color: silver;
                    color: blue; 
                }</style>`,
                picked: true,
            },
        ],
    },
);
