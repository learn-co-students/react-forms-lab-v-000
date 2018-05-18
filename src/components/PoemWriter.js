import React from "react";

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      });
  }

  validatePoem() {
    let splitText = this.state.value.split(/\r\n|\r|\n/)

    if (splitText.length === 3) {
    let a = 0;
    let b = 0;

    a += (splitText[0].trim().split(" ").length === 5)? 1 : 0; b += 1;
    a += (splitText[1].trim().split(" ").length === 3)? 1 : 0; b += 1;
    a += (splitText[2].trim().split(" ").length === 5)? 1 : 0; b += 1;

    if(a === b) {
      return true}
       else {
        return false}
   } else {
     false
   }
 }

  render() {
    const errorMessage = <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>

    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value}  onChange={this.handleChange} />
        {!this.validatePoem() ? (errorMessage) : null}
      </div>
    );
  }
}
