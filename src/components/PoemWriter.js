import React from "react";

const validatePoem = (poem) => {
  const poemLines = poem.split("\n").map(line => line.trim());
  const isRightAmountOfLines = poemLines.length === 3;
  if (poem && isRightAmountOfLines) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  } else {
    return false;
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: true
    };
  }

  handleChange = (e) => {
    const content = e.target.value;
    this.setState({
      content: content,
      isValid: validatePoem(content)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange}>{this.state.message}</textarea>
          {this.state.isValid ? null : 
            <div id="poem-validation-error" style={{ color: "red" }}>
              "This poem is not written in the right structure!" 
            </div>
          }
      </div>
    );
  }
}

export default PoemWriter;
