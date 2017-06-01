import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      valid: false,
      value: '',
    };
  }

  handleChange(event) {
    var value = event.target.value
    var valid = false
    var lines = value.split("\n")
    var checkLines = lines.length === 3
    var checkWords = lines[0].trim().split(' ').length === 5 && lines[1].trim().split(' ').length === 3 && lines[2].trim().split(' ').length === 5

    if (checkLines && checkWords) {
      valid = true
    }

    this.setState({
      value: value,
      valid: valid
    });
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {this.state.valid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}
