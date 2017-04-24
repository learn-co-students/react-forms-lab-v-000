import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();
    
    this.state = {
      value: '',
      isInvalidPoem: true
    };
    this.handleChange = this.handleChange.bind(this)
    this.parseText = this.parseText.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  parseText() {
    var array = this.state.value.split("\n")
    if (array.length === 3) {
      var line1WordCount = array[0].split(/^\s*\S+(?:\s+\S+){4,}\s*$/).length
      var line2WordCount = array[1].split(/^\s*\S+(?:\s+\S+){4,}\s*$/).length
      var line3WordCount = array[2].split(/^\s*\S+(?:\s+\S+){4,}\s*$/).length

      if(line1WordCount === 5 && line2WordCount === 3 && line3WordCount === 5) {
        this.setState({
          isInvalidPoem: true
        })
        console.log('we did it!')
      }
    }    
  }

  render() {
    return (
      <div>
        <textarea value={this.state.value} onBlur={this.parseText} onChange={this.handleChange} rows="3" cols="60" />
        <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
      </div>
    );
  }
}
