import React from 'react';

function isValidPoem(poem) {
  const poemLines = poem.split('\n').filter(n => n);
  var wordCounts = poemLines.map(function(line) {
    return line.split(' ').filter(n => n).length
  })
  return (poemLines.length === 3 && wordCounts[0] === 5 && wordCounts[1] === 3 && wordCounts[2] === 5)
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false
    };
  }

  handleChange = (event) => {
    const poem = event.target.value
    this.setState({
      value: poem,
      valid: isValidPoem(poem)
    });
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
        {!this.state.valid ? <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div> : null}
      </div>
    );
  }
}

export default PoemWriter;
