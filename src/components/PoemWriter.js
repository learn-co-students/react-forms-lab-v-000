import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      validPoem: true
    };
  }

  handleInputChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value,
      validPoem: this.validatePoem(value)
    });
  }

  validatePoem = (poem) => {
    const poemLines = poem.split(/\n/).map(line => line.trim());
    const validPoem =
      poemLines.length === 3 &&
      poemLines[0].split(' ').length === 5 &&
      poemLines[1].split(' ').length === 3 &&
      poemLines[2].split(' ').length === 5;
    return validPoem;
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" name="poem" value={this.state.poem} onChange={this.handleInputChange} />
        {!this.state.validPoem ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
