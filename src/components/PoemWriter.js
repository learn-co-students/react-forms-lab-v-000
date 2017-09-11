import React from 'react';

function wordCount(line) {
  return line.trim().split(/\s+/).length;
}

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  hasValidText = () => {
    const lines = this.state.value.split('\n');
    return ( (lines.length === 3) && (wordCount(lines[0]) === 5) && (wordCount(lines[1]) === 3) && (wordCount(lines[2]) === 5) ) ? true : false;
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {this.hasValidText() ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

export default PoemWriter;
