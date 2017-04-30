import React from 'react';

function numWords(line) {
  return line.split(" ").filter(word => word).length
}

function checkValid(content) {
  const lines = content.split("\n").filter((line) => line).map(line => line.trim())
  return lines.length === 3 && numWords(lines[0]) === 5 && numWords(lines[1]) === 3 && numWords(lines[2]) === 5
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      isValid: false
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    this.setState({
      value: ev.target.value,
      isValid: checkValid(ev.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange} rows="3" cols="60" />
        {!this.state.isValid &&
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        }
      </div>
    );
  }
}
