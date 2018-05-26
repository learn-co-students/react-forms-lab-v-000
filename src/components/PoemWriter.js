import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      poemValid: false
    };
  }

  handleChange = e => {
    console.log(this.state.value)
    let poemValid;

    if (this.validatePoem(e.target.value)) {
      poemValid = true;
    } else {
      poemValid = false;
    }

    this.setState({
      value: e.target.value,
      poemValid: poemValid
    });
  }

  validatePoem = (text) => {
    let lines = text.split('\n')

    if (lines.length !== 3) { return false; }

    let firstLineWords = lines[0].split(' ').filter(word => word !== "")
    let secondLineWords = lines[1].split(' ').filter(word => word !== "")
    let thirdLineWords = lines[2].split(' ').filter(word => word !== "")

    if (firstLineWords.length !== 5 ||
        secondLineWords.length !== 3 ||
        thirdLineWords.length !== 5) {
      return false;
    }
    else {
      return true;
    }
  }

  render() {
    let errorDiv = '';

    if (!this.state.poemValid) {
      errorDiv =
        <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div>
    }

    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange} rows="3" cols="60" />
        {errorDiv}
      </div>
    );
  }
}

export default PoemWriter;
