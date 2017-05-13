import React from 'react';

function parseText(poem) {
  var array = poem.split("\n")
  if (array.length === 3) {
    var line1WordCount = array[0].split(' ').filter(n => n).length
    var line2WordCount = array[1].split(' ').filter(n => n).length
    var line3WordCount = array[2].split(' ').filter(n => n).length

    if(line1WordCount === 5 && line2WordCount === 3 && line3WordCount === 5) {
      return false
    }
  }
  return true
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isInvalidPoem: true
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      isInvalidPoem: parseText(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange} rows="3" cols="60" />
        {this.state.isInvalidPoem ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}
