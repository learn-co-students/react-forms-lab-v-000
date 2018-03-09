import React from "react";

const isValidPoem = poem => {
  
  const countLines = poem.split('\n').map(l => l.trim())

  const threeLines = (countLines.length === 3)

  if (poem && threeLines) {
    return (
    countLines[0].split(" ").length === 5 &&
    countLines[1].split(" ").length === 3 && 
    countLines[2].split(" ").length === 5
    )
  } else {
    return false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemContent: '',
      valid: false
    };
  }

  handleChange = e => {
    const poem = e.target.value
    //it seems to not work if there's no content in the box - 
    //only fires onChange, so an empty box wouldn't fire it
      this.setState({
        poemContent: poem,
        isValid: isValidPoem(poem)
      })
    
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange}/>
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