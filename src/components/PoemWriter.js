import React from 'react';

function validPoem(value) {
  var poem = value.trim()
  var lines = poem.split('\n')
  var lineCheck = (lines.length) === 3;
  if (lineCheck) {
    var lineOne = lines[0];
    var lineTwo = lines[1];
    var lineThree = lines[2];
    if (lineOne.trim().split(' ').length === 5 && lineTwo.trim().split(' ').length === 3 && lineThree.trim().split(' ').length === 5) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }

}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false,
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      valid: validPoem(event.target.value),
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
        {this.state.valid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

export default PoemWriter;
