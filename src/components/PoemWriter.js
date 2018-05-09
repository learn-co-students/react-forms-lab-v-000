import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
  }

  handleChange = (event) => {
    const poem = event.target.value;
    this.setState({
      value: poem,
      isValid: this.validPoem(poem),
    });
  };

  validPoem = (poem) => {
    return (this.threeLines(poem) && this.enoughWords(poem))
  };

  threeLines = (poem) => {
    return (poem.match(/\r|\n/g)||[]).length >= 2
  };

  enoughWords = (poem) => {
    const lineWords = poem.split(/\r|\n/g);
    const lineOne = lineWords[0].trim().split(" ").length >= 5;
    const lineTwo = lineWords[1].trim().split(" ").length >= 3;
    const lineThree = lineWords[2].trim().split(" ").length >= 5;
    return lineOne && lineTwo && lineThree
  };

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        {this.state.isValid ? null : (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        )}
      </div>
    );
  }
}

export default PoemWriter;
