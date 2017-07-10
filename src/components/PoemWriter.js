import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: null,
      isValid: false
    };
  }

  change = (e) => {
    this.setState({
      content: e.target.value,
      isValid: this.valid(e.target.value)
    })
  }

  valid = (content) => {
    var poemLines = content.split("\n")
    poemLines = poemLines.map((line) => line.trim())
    if (poemLines.length === 3 && poemLines[0].split(" ").length === 5 && poemLines[1].split(" ").length === 3 && poemLines[2].split(" ").length === 5) {
      return true
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.change}
        />
        {!this.state.isValid &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
