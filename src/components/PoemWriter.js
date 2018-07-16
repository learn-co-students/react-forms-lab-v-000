import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: true
    };
  }

  handleChange = event => {
    const poemContent = event.target.value;
    this.setState({
      value: poemContent,
      isValid: this.validatePoem(poemContent)
    });
  }

  validatePoem = (poemContent) => {
    const lines = poemContent.replace(/\r\n/g, "\n").split("\n");
    if (lines.length === 3) {
      if (lines[0].trim().split(/\s+/).length === 5 && lines[1].trim().split(/\s+/).length === 3 && lines[2].trim().split(/\s+/).length === 5) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" 
          value={this.state.value}
          onChange={this.handleChange}
        />
        {!this.state.isValid &&
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
