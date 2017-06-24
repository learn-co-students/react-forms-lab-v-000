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
    var goodPoem = 0
    var lines = poem.split("\n").map(function (line) {
      return line.trim().split(' ').length
    })
    if (lines[0] === 5 && lines[1] === 3 && lines[2] === 5) {
      goodPoem = 1
    }
    this.setState({
      value: poem,
      valid: goodPoem
    }, function() {
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
