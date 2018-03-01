import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: true
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      valid: isPoemValid(e.target.value)
    })
  }


  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.valid ? null : (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        )}
      </div>
    );
  }
}

const isPoemValid = (text) => {
  let rows = text.split("\n").length
  let row1 = text.split("\n")[0].trim()
  let row2;
  let row3;
  // debugger;
  if (text.split("\n")[1] !== undefined) {
    row2 = text.split("\n")[1].trim()
  }
  if (text.split("\n")[2] !== undefined) {
    row3 = text.split("\n")[2].trim()
  }

  if (rows !== 3 || row1.split(" ").length !== 5 || row2.split(" ").length !== 3 || row3.split(" ").length !== 5 ) {
    return false
  } else {
    return true
  }

}




export default PoemWriter;
