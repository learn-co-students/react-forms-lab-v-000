import React from 'react';

function filterForSpaces(line) {
  return line.split(' ').filter(l => l).length;
}

function isValidPoem(content) {
  const splitContent = content.split('\n').filter(b => b)
  if(splitContent.length === 3) {
    if(filterForSpaces(splitContent[0]) === 5 && filterForSpaces(splitContent[1]) === 3 && filterForSpaces(splitContent[2]) === 5 ) {
      return true;
    }
  }
}


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false,
    };
    this.checkPoem = this.checkPoem.bind(this);
  }

  checkPoem(event) {
    var content = event.target.value;

    if (content) {
      this.setState({
        content: content,
        isValid: isValidPoem(content)
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.checkPoem} />
        <p>{this.state.isValid}</p>
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

export default PoemWriter;
