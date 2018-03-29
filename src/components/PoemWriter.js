import React from "react";

const isValid = (poem) => {
  let poemLines = poem.split('\n').map(line => line.trim());

  let firstLine = (poemLines[0]);
  let secondLine = (poemLines[1]);
  let thirdLine = (poemLines[2]);

  if (poemLines.length === 3) {
    return (
      firstLine.split(" ").length === 5 &&
      secondLine.split(" ").length === 3 &&
      thirdLine.split(" ").length === 5
    );
  } else {
    return false;
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      validity: true,
    };
  }

  handleChange = (event) => {
    const poem = event.target.value;

    this.setState({
      poem,
      validity: isValid(poem),
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handleChange}
        />
        {!this.state.validity ? (
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
        ) : null }
      </div>
    );
  }
}

export default PoemWriter;
