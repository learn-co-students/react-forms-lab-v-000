import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      characters: this.props.maxChars 
    };
  }
  
  handleChange = e => {
    let counter = e.target.value.length
    let characterLeft = (this.props.maxChars - counter)
    this.setState({
      value: e.target.value,
      characters: characterLeft 
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}  />
        <p>Characters left: {this.state.characters}</p>

      </div>
    );
  }
}

export default TwitterMessage;
