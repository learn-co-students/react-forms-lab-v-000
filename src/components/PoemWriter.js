import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      valid: true
    };
  }

  validPoem = (poem) => {
    const lines = poem.split("\n").map(line => line.trim());
    if(lines.length === 3){
      const wordsOne = (lines[0]).split(/\s+/).length
      const wordsTwo = (lines[1]).split(/\s+/).length
      const wordsThree = (lines[2]).split(/\s+/).length

      if (wordsOne === 5 && wordsTwo === 3 && wordsThree === 5) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  handlePoem = (event) => {
   let isValid = this.validPoem(event.target.value)
   this.setState({
      text: event.target.value,
      valid: isValid
   });
 }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handlePoem} />
        {!this.state.valid ? (
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>)
         : null }
      </div>
    );
  }
}

export default PoemWriter;
