import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      hasError: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })

    var lines = event.target.value.split("\n")
    var checkLines = lines.length === 3
    var checkWords = lines[0].trim().split(' ').length === 5 && lines[1].trim().split(' ').length === 3 && lines[2].trim().split(' ').length === 5

    if (checkLines && checkWords) {
      this.setState({
         hasError: false 
      }) 
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        {this.state.hasError ? (<div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>) : null }
      </div>
    );
  }
}
