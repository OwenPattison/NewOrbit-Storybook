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
                    id: `slidertheme`,
                    code: `<style>
                    #customslider {
                        -webkit-appearance: none;
                        width: 50%;
                        height: 15px;
                        background: #d3d3d3;
                        outline: none;
                        opacity: 0.7;
                        -webkit-transition: .2s;
                        transition: opacity .2s;
                      }
                      
                      #customslider:hover {
                        opacity: 1;
                      
                      #customslider::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 25px;
                        height: 25px;
                        background: #4CAF50;
                        cursor: pointer;
                      }
                      
                      #customslider::-moz-range-thumb {
                        width: 25px;
                        height: 25px;
                        background: #4CAF50;
                        cursor: pointer;
                      }
                    </style>`,
                    picked: true,
                }, {
                    id: `roundslidertheme`,
                    code: `<style>
                    #customslider {
                        border-radius: 5px;   
                      }
                      
                      #customslider::-webkit-slider-thumb {
                        border-radius: 50%; 
                      }
                      
                      #customslider::-moz-range-thumb {
                        border-radius: 50%;
                      }
                    </style>`,
                    picked: true,
                },
            ],
        },
);
