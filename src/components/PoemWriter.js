import React from "react";

const isValid = poem => {
  // The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
  const poemLines = poem.split("\n").map(line => line.trim());
  const properNumberOfLines = poemLines.length === 3;
  if (poem && properNumberOfLines) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    )
  }  else {
    return false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: true,
    };
  }

  handleTextChange = e => {
    this.setState({
      value: e.target.value,
      isValid: isValid(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleTextChange} />
        {!this.state.isValid ? 
        (<div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>)
        : null }
      </div>
    );
  }
}

export default PoemWriter;
