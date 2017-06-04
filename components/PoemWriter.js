import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      val: '',
      valid: false
    };

    this.checkPoem = this.checkPoem.bind(this)
  }

  checkPoem(e) {
    this.setState({
      val: e.target.value,
      valid: checkValidity(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={ this.state.val } onChange={ this.checkPoem }/>
        {this.state.valid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

const checkValidity = text => {
  let poem = text.split('\n')
  let validNumOfLns = poem.filter(l => l).length === 3
  let validNumOfWrds = numOfWrds(poem[0]) === 5 && numOfWrds(poem[1]) === 3 && numOfWrds(poem[2]) === 5
  return validNumOfLns && validNumOfWrds
}

const numOfWrds = words => {
  return words.split(' ').filter(l => l).length
}
