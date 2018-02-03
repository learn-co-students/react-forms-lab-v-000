import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
  }

  handleChange = event => {
      let validPoem = false;
      const poemLines = event.target.value.split("\n").map(line => line.trim());
      const isRightAmountOfLines = poemLines.length === 3;
      if (event.target.value && isRightAmountOfLines) {
        if (poemLines[0].split(" ").length === 5 && poemLines[1].split(" ").length === 3 && poemLines[2].split(" ").length === 5) {
          validPoem = true;
        }
      }

      this.setState({
      value: event.target.value,
      isValid: validPoem
      });
  }

  render() {

    const isValid = this.state.isValid;

    let error = null;
    if (isValid) {
      error = <div/>;
    } else {
      error = <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>;
    }

    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {error}
      </div>
    );
  }
}

export default PoemWriter;
