import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { withCssResources } from '@storybook/addon-cssresources';

function loadStories() {
    require("../stories");
    require("../stories/Andy");
    require("../stories/Bart");
    require("../stories/Beans");
    require("../stories/Binks");
    require("../stories/Damo");
    require("../stories/David");
    require("../stories/Diz");
    require("../stories/Frank");
    require("../stories/Guy");
    require("../stories/Henry");
    require("../stories/Kelvin");
    require("../stories/Maciek");
    require("../stories/Maria");
    require("../stories/Mateusz");
    require("../stories/Monger");
    require("../stories/Pete");
    require("../stories/Phil");
    require("../stories/Stephen");
    require("../stories/Tarun");
    require("../stories/Thyde");
}

addDecorator(withInfo({ header: false }));
addDecorator(withKnobs);

addDecorator(withCssResources)
addParameters({
    cssresources: [
        {
            id: `bluetheme`,
            code: `<style>body { background-color: lightblue; }</style>`,
            picked: false,
        },
    ],
});

configure(loadStories, module);
