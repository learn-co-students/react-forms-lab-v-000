import React from "react";

  // Are const assignments not allowed in the component logic?

  // Check the poem structure
  const isPoemValid = poem => {
    // Split the poem on newline, trim each line for whitespace
    const poemLines = poem.split('\n').map(line => line.trim())
    console.log('poemLines: ', poemLines)
    // Check the amount of lines
    const isRightAmountOfLines = poemLines.length === 3
    
    // if the poem exists and has 3 lines
    if (poem && isRightAmountOfLines) {
      return (
        // Check if each line is the exact amount
        poemLines[0].split(" ").length === 5 &&
        poemLines[1].split(" ").length === 3 &&
        poemLines[2].split(" ").length === 5
        )
    }
    else {
      return false
    }
  }

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      valid: true
    };
  }
  
  handlePoemChange = (e) => {
    this.setState({
      content: e.target.value,
      valid: isPoemValid(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea 
        rows="3" 
        cols="60"
        value={this.state.content}
        onChange={this.handlePoemChange}/>
        {(this.state.valid) ? null :
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
