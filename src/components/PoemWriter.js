import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false,
    };
  }

  handleChange = (event) => {
    let isValid = poemValidation(event.target.value);
    this.setState({
      poem: event.target.value,
      valid: isValid,
    });
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange} />
        {!this.state.valid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null }
      </div>
    );
  }
}

function poemValidation(poem) {
  let valid = false;
  let lines = poem.split(/\n/);

  if (lines.length === 3 && lines[0].trim().split(' ').length === 5 && lines[1].trim().split(' ').length === 3 && lines[2].trim().split(' ').length === 5) {
    valid = true;
  }
  return valid;
}

export default PoemWriter;
