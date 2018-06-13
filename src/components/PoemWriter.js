import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      valid: false
    };
  }

  poemHandler = e => {
    this.setState({
      content: e.target.value,
      valid: this.validPoem(e.target.value)
    })
  }

  validPoem = poem => {
    const lines = poem.split('\n').map(line => line.trim());
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
        <textarea rows="3" onChange={this.poemHandler} value={this.state.content} cols="60" />
        {(this.state.valid) ? null :
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
