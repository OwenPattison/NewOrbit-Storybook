import * as React from "react";
import "./binks.css";

export function PersonalWebsite({}) {
    return (
        <div className="binks">
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
            <RandomGif />
        </div>
    );
}

export class RandomGif extends React.Component<{ tag?: string }, { gifUrl: string }> {

    public async componentWillMount() {        
        const response: any = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=FkGKV8bXOlRZSVPNa2BxDrCyWoXZek7a&tag=${this.props.tag}`);

        const gifData = await response.json();

        this.setState({
            gifUrl: gifData.data["image_url"]
        });
    }

    public render() {
        if (this.state === null || !this.state.gifUrl) {
            return "Loading";
        }

        return <img src={this.state.gifUrl} />;
    }
}
