import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      validPoem: false,
    };
  }

  updateContent = event => {
    this.setState({
      content: event.target.value,
      validPoem: this.isPoemValid(event)
    });
  }

  isPoemValid = (event) => {
    const poem = event.target.value
    const poemSplit = poem.split("\n")
    if (poemSplit.length < 3) {
      return false
    } else {
      const firstLine = poemSplit[0].trim().split(" ")
      const secondLine = poemSplit[1].trim().split(" ")
      const thirdLine = poemSplit[2].trim().split(" ")
    
      if (firstLine[0] === "" || secondLine[0] === "" || thirdLine[0] === "") {
          return false
      } else {
        if (firstLine.length === 5 && secondLine.length === 3 && thirdLine.length === 5) {
          return true
        } else {
          return false
          } 
      }
    }
  }


  render() {

    let poemErrorDiv = null;
    if (this.state.validPoem === false) {
      poemErrorDiv = <div id="poem-validation-error" style={{ color: "red" }}>
                      This poem is not written in the right structure!</div>
    }
      
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.updateContent}/>
        {poemErrorDiv}
      </div>
    );
  }
}

export default PoemWriter;
