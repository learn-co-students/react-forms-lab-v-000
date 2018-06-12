import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      valid: false
    };
  }

  handleChange = (event) => {
    this.setState({
       text: event.target.value,
       valid: this.validPoem()
    });
  }

  validPoem = () => {
    const lines = this.state.text.split("\n");
    if(lines.length === 3){
      const wordsOne = (lines[0]).split(" ").length
      const wordsTwo = (lines[1]).split(" ").length
      const wordsThree = (lines[2]).split(" ").length

      wordsOne === 5 && wordsTwo === 3 && wordsThree === 5 ? true : false
    }
  }

  render() {
    return (
      <div>
        <textarea value={this.state.text} onChange={this.handleChange} rows="3" cols="60" />
        {!this.state.isValid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null }
      </div>
    );
  }
}

export default PoemWriter;
