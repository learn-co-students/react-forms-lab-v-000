import React from "react";


class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value:'',
      remainingChars: props.maxChars
    };
  }

    handleChange = event => {
    this.setState({
      value: event.target.value,
      remainingChars: this.state.remainingChars - 1
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
               onChange={this.handleChange} 
               value={this.state.value} 
        />
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;





