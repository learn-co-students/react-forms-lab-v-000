import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      counter: 0
    };
  }

  handleChange(event){
    
    this.setState(
      {
          counter: event.target.value.length,
          value: event.target.value
      }
    )
  }

 /* handleSubmit = event => {
    event.preventDefault()
    this.setState(
      {
          counter: this.state.counter,
          value: this.state.value
      }
    )
  }*/

  render() {
    return (
      <div>
        <strong> Your message:</strong>
        <input type="text" name="message" id="message" onChange={event=>this.handleChange(event)} value={this.state.value} />
        <p>Max Characters:{this.props.maxChars} Remaining:{this.props.maxChars-this.state.counter} Count:{this.state.counter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
