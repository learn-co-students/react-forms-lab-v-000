import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false
    };
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} value={this.state.value} />
        { this.error() }
      </div>
    );
  }

  handleChange = event => {
    const value = event.target.value

    this.setState({
      value: value,
      valid: this.validPoem(value.split('\n'))
    })
  }

  error() {
    if (!this.state.valid) {
      return (
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      )
    }
  }

  numWords(sentence, length) {
    const words = sentence.trim().split(' ').length
    return (words === length)
  }
  
  validPoem(sentences) {
    switch (false) {
      case (sentences.length === 3): return false
      case this.numWords(sentences[0], 5): return false
      case this.numWords(sentences[1], 3): return false
      case this.numWords(sentences[2], 5): return false
    }
    return true
  }
}

export default PoemWriter;
