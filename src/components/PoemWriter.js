import React from "react";



//The poem has three lines.
//The first line has five words.
//The second line has three words.
//The third line has five words.

const validPoem = poem => {
  const poemLines = poem.split("\n").map(line => line.trim())
  const lineCount = poemLines.length;

  if (poem && 
      lineCount === 3 &&
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    ) {
        return true;
    } else {
      return false;
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      isValid: true
    };
  }

  handleChange = event => {
    this.setState({
      poem: event.target.value,
      isValid: validPoem(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value ={this.state.poem} onChange={this.handleChange}/>
        
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
