import React from "react";

function lineWordCount(lines) {
  return (
    lines[0].split(" ").length === 5 &&
    lines[1].split(" ").length === 3 &&
    lines[2].split(" ").length === 5 ? true : false
  )
}

function validatePoem(poem) {
  let lines = poem.split("\n").map(line => line.trim())

  return (
    poem &&
    lines.length === 3 &&
    lineWordCount(lines) ? true : false
  )
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: true
    }
  }

  handlePoemContent = (event) => {
    let content = event.target.value
    this.setState({
      content: content,
      isValid: validatePoem(content)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.handlePoemContent}/>
        {!this.state.isValid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
