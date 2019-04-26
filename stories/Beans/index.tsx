import * as React from "react";
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import { Accordian } from "../../src/Beans/Accordian";

const stories = storiesOf("Beans", module)

stories.addDecorator(withKnobs);

stories
    .add("Accordian", () => (
        <Accordian items={
            [
                {
                    title: "Thing",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac vehicula risus, ac euismod dolor. Sed vitae sem in nibh venenatis porta imperdiet in dui. Aliquam erat volutpat. Suspendisse viverra sit amet libero eget efficitur. Cras egestas sem vel erat venenatis aliquet. Curabitur at pellentesque ligula. Duis eu faucibus elit, sollicitudin iaculis dolor. Praesent eu felis id leo pellentesque eleifend semper non lorem. Pellentesque euismod venenatis diam sed rhoncus. Sed non massa eu risus mollis pretium in ac massa. Aliquam sed convallis urna, eu fermentum dui."
                },
                {
                    title: "Another thing",
                    content: "Nulla sollicitudin leo et ante accumsan, at tristique metus auctor. Nam accumsan erat nunc, tincidunt bibendum tellus accumsan id. Vivamus tempus massa nunc, ut posuere velit egestas ut. Maecenas sagittis vel libero et interdum. Praesent finibus vel sapien vel dictum. Donec diam eros, vehicula ullamcorper tortor nec, efficitur vulputate massa. Nunc aliquam porttitor tellus, sit amet viverra ex ultricies sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at magna porta, ultrices mauris sit amet, hendrerit neque. Ut tincidunt eu erat vel semper. Vestibulum accumsan velit et maximus condimentum. Pellentesque volutpat faucibus auctor. Phasellus rhoncus mi eget purus cursus, ac pretium urna sollicitudin. Pellentesque hendrerit, odio sed placerat malesuada, purus ipsum aliquam ipsum, quis imperdiet nulla ligula non libero. Cras egestas pretium nisi, ut mollis orci fringilla in. Etiam gravida ex at tincidunt viverra."
                },
                {
                    title: "One more thing",
                    content: "Nunc tincidunt id dui vel venenatis. Fusce elit felis, eleifend nec ligula a, bibendum suscipit elit. Sed eu purus pellentesque, ullamcorper enim sit amet, laoreet felis. Proin interdum ex et lacus blandit porta. Duis ut leo mi. Suspendisse erat augue, convallis in convallis a, rutrum interdum ligula. Aenean felis purus, volutpat sit amet neque at, pulvinar tristique ex. Integer sit amet rhoncus erat, vitae varius eros."
                }
            ]
        } />
    )
    );
