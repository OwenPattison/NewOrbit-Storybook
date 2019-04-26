import * as React from "react";
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import { SliderWidget } from "../../src/Tarun";

const stories = storiesOf("Tarun", module)

stories.addDecorator(withKnobs);

stories
    .addDecorator(story =>
        <div style={{ textAlign: 'center' }}>
            {story()}
        </div>
    )
    .add("Slider Widget", () => (
        <SliderWidget
            description={text('Description', 'Brightness')}
            min={number('Min', 0)}
            max={number('Max', 100)}
            value={number('Value', 75)}
        />
    ),
        {
            info: { inline: true },
            notes: 'A slider component',
            cssresources: [
                {
                    id: `muicss`,
                    code: `<link href="//cdn.muicss.com/mui-0.9.41/css/mui.min.css" rel="stylesheet" type="text/css"></link>`,
                    picked: true,
                }, {
                    id: `orangetheme`,
                    code: `<style>body { background-color: orange; }</style>`,
                    picked: true,
                }, {
                    id: `roundslidertheme`,
                    code: `<style>
                        .customslider {
                            border-radius: 5px;   
                        }
                        
                        .customslider::-webkit-slider-thumb {
                            border-radius: 50%; 
                        }
                        
                        .customslider::-moz-range-thumb {
                            border-radius: 50%;
                        }
                    </style>`,
                    picked: true,
                },
            ],
        },
);
