import React from "react";

function validPoem(poem) {
  const lines = poem.split("\n").map(line => line.trim());
  if (poem && lines.length === 3) {
    return (lines[0].split(" ").length === 5 && lines[1].split(" ").length === 3 && lines[2].split(" ").length === 5);
  } else {
    return false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      valid: false
    };
  }

  handleChange = event => {
  this.setState({
    content: event.target.value,
    valid: validPoem(event.target.value),
  });
}

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.handleChange}/>
        {!this.state.valid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>) : null}
      </div>
    );
  }
}

export default PoemWriter;
