import React from "react";

const isValidPoem = (poem) => {
  const poemArray = poem.split("\n")
  return (
  poemArray.length === 3 &&
  poemArray[0].split(/\b\s+\b/).length === 5 &&
  poemArray[1].split(/\b\s+\b/).length === 3 &&
  poemArray[2].split(/\b\s+\b/).length === 5 
  )}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false,
    };
  }

  handleChange = event => {
    this.setState({
      poem: event.target.value,
      isValid: isValidPoem(event.target.value),
    });

  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange}/>
        {!this.state.isValid ? (<div id="poem-validation-error" style={{ color: "red" }}>
          The first and third line must have five words; the second line must have three words.
        </div>) : <p>What a lovely poem!</p>}
      </div>
    );
  }
}

export default PoemWriter;
