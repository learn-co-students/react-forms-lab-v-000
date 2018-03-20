import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  validPoem() {
    const lines = this.state.value.split("\n")
    if (lines.length === 3) {
      var [one, two, three] = lines
      return one.trim().split(" ").length === 5 && two.trim().split(" ").length === 3 && three.trim().split(" ").length === 5
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange} rows="3" cols="60" />
        {!this.validPoem() &&
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
