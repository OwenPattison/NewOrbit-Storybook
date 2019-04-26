import * as React from "react";
import {Button} from "semantic-ui-react";

interface WinnerProps {
}

const haveIWon = () => {
    const win : boolean = (Math.floor(Math.random() * 2) == 0);

    if (win) {
        alert("Congratulations!");
    }
    else
    {
        alert("Boo.");
    }
};

const Winner: React.FunctionComponent<WinnerProps> = () => (

    <div>
        <Button onClick={() => haveIWon()}>Have you won?</Button>
    </div>
);

export {
    Winner
};
