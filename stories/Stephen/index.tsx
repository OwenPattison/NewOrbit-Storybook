import * as React from "react";
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Stephen", module)

stories.addDecorator(withKnobs);

stories
    .add("Lovely Thing",() => (
            <div style={{
                padding: "1em",
                background: "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
                width: "100%",
                height: "40vh",
                cursor: "url(http://www.rw-designer.com/cursor-teaser/ultimate-unicorn.png), auto"

            }}>
                <h1 style={{
                    textAlign: "center",
                    fontSize: "3em",
                    color: "purple",
                }}>Hello world</h1>
            </div>
        ),
        {
            info: { inline: true },
            cssresources: [
                {
                    id: `neworbit`,
                    code:
                    `<style>
                        .btn.primary {
                            background-color: #FF9035;
                        }

                        .btn.primary:hover, .btn.primary:focus {
                            background-color: #FF7A19;
                        }
                    </style>`,
                    picked: false
                },
            ],
        }
    );