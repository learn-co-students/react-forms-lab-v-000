import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
			maxChars: this.props.maxChars,
			charsLeft: this.props.maxChars,
			message: ""
		};
  }

	handleInput = (e) => {const charsLeft = this.state.maxChars - e.target.value.length
								this.setState({charsLeft: charsLeft,
									message: e.target.value});
							}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleInput} />
				<p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
