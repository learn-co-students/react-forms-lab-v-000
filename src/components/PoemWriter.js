import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false
    };
  }

  handleChange = (event) => {
    var poem =  event.target.value
    var goodPoem = false
    var lines = poem.split("\n").map(function (line) {
      return line.trim().split(' ').length
    })
    if (lines === [5, 3, 5]) {
      goodPoem = true
      console.log(goodPoem);
    }
    console.log(lines);
    this.setState({
      value: poem,
      valid: goodPoem
    })
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
        {this.state.valid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

export default PoemWriter;
