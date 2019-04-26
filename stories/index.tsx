import * as React from "react";
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import { SampleWidget } from "../src";
// import { action } from '@storybook/addon-actions';
// import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

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
    // .add('Action and method', () => (
    //     <Button
    //         onClick={event => {
    //             event.preventDefault();
    //             action('method-log')(event.target);
    //         }}
    //     >
    //       Click me to log the action
    //     </Button>
    // ));
