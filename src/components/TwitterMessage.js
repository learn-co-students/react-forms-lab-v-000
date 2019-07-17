import React from "react";

class TwitterMessage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            remainingChars: props.maxChars,
            value: ''
        };
    }

    handleChange = e => {
        this.setState({
            value: e.target.value,
            remainingChars: this.props.maxChars - e.target.value.length})
    }

    render() {
        return (
            <div>
            <p>Max Chars: {this.props.maxChars}</p>
            <p>Remaining Chars: {this.state.remainingChars}</p>
            <strong>Your message:</strong>
            <input type="text" value={this.state.value}
            onChange={this.handleChange} />
            </div>
        );
    }
}

export default TwitterMessage;
