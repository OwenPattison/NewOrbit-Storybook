import * as React from "react";
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import { SampleWidget } from "../src";

const stories = storiesOf("Sample Library", module)

stories.addDecorator(withKnobs);

stories
    .addDecorator(story =>
        <div style={{ textAlign: 'center' }}>
            {story()}
        </div>
    )
    .add("Sample Widget",() => (
            <SampleWidget
                name={text('Name', 'Owen')}
                age={number('Age', 30)}
            />
        ),
        {
            info: { inline: true },
            notes: 'bleep bloop i am a robot',
            cssresources: [
                {
                    id: `muicss`,
                    code: `<link href="//cdn.muicss.com/mui-0.9.41/css/mui.min.css" rel="stylesheet" type="text/css"></link>`,
                    picked: true,
                }, {
                    id: `orangetheme`,
                    code: `<style>body { background-color: orange; }</style>`,
                    picked: true,
                },
            ],
        },
    );
