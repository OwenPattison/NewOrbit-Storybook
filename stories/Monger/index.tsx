import * as React from "react";
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import { Button } from "../../src/Monger/Button/Button";
import { Tag } from "../../src/Monger/Tag/Tag";
import { TagList } from "../../src/Monger/TagList/TagList";

const stories = storiesOf("Monger", module)

stories.addDecorator(withKnobs);

stories
    .addDecorator(story =>
        <div style={{ textAlign: 'center' }}>
            {story()}
        </div>
    )
    .add("Button",() => (
            <Button type={select("Type", { Primary: "primary", Secondary: "secondary"}, "primary")}>{text("Text", "Click me")}</Button>
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
                }
            ]
        }
    )
    .add("Tag",() => (
            <Tag>{text("Text", "Tag A")}</Tag>
        ),
        {
            info: { inline: true }
        }
    )
    .add("TagList",() => (
            <TagList items={["Tag A", "Tag B"]} />
        ),
        {
            info: { inline: true }
        }
    );
