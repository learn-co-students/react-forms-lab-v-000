import React from 'react';

function splitIntoLines (text) {
  return text.split('\n')
}

function poemValidator (poem) {
  var linesArray = []
  var lines = splitIntoLines(poem)
  var trimmedLines = lines.map(line => line.trim())
  trimmedLines.map(line => {
  linesArray.push(line.split(' ').length)
})
  if (trimmedLines.length === 3 && linesArray[0] === 5 && linesArray[1] === 3 && linesArray[2] === 5 ) {
    console.log(linesArray[1])
    return true
  } else {
    return false
  }

}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      validPoem: false
    };
  }



  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      validPoem: poemValidator(event.target.value)
    })
  }

  render() {
    console.log(this.state.validPoem)
    if (!this.state.validPoem === true) {
      var errorDiv = <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
    } else {
      var errorDiv = null
    }

    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value}
          onChange={this.handleChange}/>
          {errorDiv}
      </div>
    );
  }
}

export default PoemWriter;
