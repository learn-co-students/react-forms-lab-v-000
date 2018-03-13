import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      isValid: true
    };
  }

  handleChange = event => {
    const change = event.target.value;
    this.setState({
      value: change,
      isValid: this.isValidChange(change)
    });
  }

  isValidChange = change => {
    const lines = change.split("\n").map(line => line.trim());
    if (lines.length === 3) {
      return (
        lines[0].split(" ").length === 5 &&
        lines[1].split(" ").length === 3 &&
        lines[2].split(" ").length === 5
      )
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" 
          value={this.state.value} 
          onChange={this.handleChange}
        />
        {!this.state.isValid? 
          <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
          </div>
          : null
        }
      </div>
    );
  }
}

export default PoemWriter;
