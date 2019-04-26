// @ts-ignore
import * as React from "react";
// @ts-ignore
import { withKnobs } from '@storybook/addon-knobs';
// @ts-ignore
import { storiesOf } from "@storybook/react";
// @ts-ignore
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
// @ts-ignore
const stories = storiesOf("Bart", module)

stories.addDecorator(withKnobs);

stories
    .add("Root cause of bugs",() => (
            <iframe width="800" height="600" src="https://condescending-kilby-151061.netlify.com/?path=/story/bart--lovely-thing" frameBorder="0" allowFullScreen></iframe>
        )
    )
    .add("Chees!  🧀🧀🧀",() => (
        <Camera
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
          idealResolution = {{width: 640, height: 480}}
          imageType = {IMAGE_TYPES.JPG}
          imageCompression = {0.97}
          isMaxResolution = {false}
          isImageMirror = {false}
          isSilentMode = {true}
          isDisplayStartCameraError = {true}
          isFullscreen = {true}
          sizeFactor = {1}
        />
    )
);
