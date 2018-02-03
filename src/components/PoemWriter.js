import React from "react";

const validity = content => {
  const lines = content.split("\n").filter(line => line)
  const lineCount = lines.length
  if (lineCount == 3) {
    let firstLine = lines[0].split(" ").filter(w => w).length
    let secLine = lines[1].split(" ").filter(w => w).length
    let thirdLine = lines[2].split(" ").filter(w => w).length

    if (firstLine === 5 && secLine === 3 && thirdLine === 5) {
      return true
    }
  } else {
    return false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      valid: false
    };
  }

  handleChange = event => {
    this.setState({
      content: event.target.value,
      valid: validity(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.handleChange}/>
        {!this.state.valid ? <div id="poem-validation-error" style={{ color: "red" }}>
           "This poem is not written in the right structure!"
        </div> : null}
      </div>
    );
  }
}

export default PoemWriter;
