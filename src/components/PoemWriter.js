import React from "react";

const isValid = (poem) => {
  const lines = poem.split("\n").map(line => line.trim())
  const enoughLines = lines.length === 3
  if (poem && enoughLines) {
    return (
      lines[0].split(" ").length === 5 &&
      lines[1].split(" ").length === 3 &&
      lines[2].split(" ").length === 5
    )
  } else {
    return false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      valid: true
    };
  }

  handleChange = (event) => {
    const poem = event.target.value
    this.setState({
      text: poem,
      valid: isValid(poem)
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.text}
          onChange={this.handleChange}
        />
        {!this.state.valid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
