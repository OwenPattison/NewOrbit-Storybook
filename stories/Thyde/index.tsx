import * as React from "react";
import { withKnobs, boolean, color } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import { CoolComponent } from "./coolComponent";

const stories = storiesOf("Thyde", module)

stories.addDecorator(withKnobs);

stories
    .add("Lovely Thing",() => (
            <CoolComponent color={color("Color", "#01F201")} bigDiv={boolean("Big?", false)} throbbing={boolean("Throbbing?", false)} />
        ),
        {
            cssresources: [
                {
                    id: "custom-background",
                    code: `<style>body { background-image: url(https://media.giphy.com/media/QKN0IVrQKSmbe/giphy.gif); }</style>`,
                    picked: true
                },
                {
                    id: "hover-style",
                    code: `<style>.cool-component:hover { transform: scale(2); }</style>`,
                    picked: true
                },
                {
                    id: "throbbing",
                    code: `<style>
                        @keyframes throbbing {
                            0% { transform: scale(1); }
                            50% { transform: scale(2); }
                            100% { transform: scale(1); }
                        }
                        .throbbing {
                            animation-name: throbbing;
                            animation-iteration-count: infinite;
                            animation-duration: 500ms;
                        }
                    </style>`,
                    picked: true
                },

            ]
        }
    )
    .add("another thing", () => (
        <div>this thing is less lovely</div>
    ));
