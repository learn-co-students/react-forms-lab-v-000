import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
			content: '',
		};
  }

	handleChange = event => {
		this.setState({
			content: event.target.value
		})
	}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.content} />
				<small>{this.props.maxChars - this.state.content.length}</small>
      </div>
    );
  }
}

export default TwitterMessage;
