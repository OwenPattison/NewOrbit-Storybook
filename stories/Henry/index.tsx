import * as React from "react";
import { withKnobs, number, select } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import { Rating } from "semantic-ui-react";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Henry", module)

stories.addDecorator(withKnobs);

const clearableOptions: { [s: string]: boolean | "auto" } = {
    true: true,
    false: false,
    auto: "auto"
}

stories
    .add(
        "Rating",
        () => (
            <Rating
                rating={number("rating", 3)}
                maxRating={number("maxRating", 5)}
                icon={select<"star" | "heart">("icon", ["star", "heart"], "star",)}
                clearable={select<"auto" | boolean>("clearable", clearableOptions, "auto")}
                size={select<'mini' | 'tiny' | 'small' | 'large' | 'huge' | 'massive'>("size", ["mini", "tiny", "small", "large", "huge", "massive"], "small")}
                onRate={(event, data) => {
                    action("onRate")(data.rating)
                }}

            />
        ),
        {
            info: { inline: true }
        }
    );
