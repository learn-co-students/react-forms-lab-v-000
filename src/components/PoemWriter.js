import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      isValid: false
    };
  }

  validatePoem = (poem) => {
    let poemLines = poem.split("\n").map((line) => line.split(" "));

    if (poemLines.length !== 3) { return false; }

    let cleanedPoemLines = [];

    poemLines.forEach((poemLine) => {
      cleanedPoemLines.push(poemLine.filter(word => word));
    })

    if (cleanedPoemLines[0].length !== 5 || cleanedPoemLines[1].length !== 3 || cleanedPoemLines[2].length !== 5) {
      return false;
    }
    return true;
  }


  handlePoem = (event) => {
    this.setState({
        content: event.target.value,
        isValid: this.validatePoem(event.target.value)
      })
  }


  render() {
    const errorMessage = (
      <div
        id="poem-validation-error"
        style={{color: 'red'}}
      >
        This poem is not written in the right structure!
      </div>
    )

    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handlePoem}
        />
        { this.state.isValid || errorMessage}
      </div>
    );
  }
}

export default PoemWriter;
