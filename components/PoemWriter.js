const React = require('react');

function wordCount(line) {
  return line.split(" ").filter(word => word).length;
}

function isValidPoem(poem) {
  let lineArr = poem.split('\n').filter(line => line);
  let lineCountCheck = lineArr.length === 3;
  let wordCountCheck = wordCount(lineArr[0]) === 5 && wordCount(lineArr[1]) === 3 && wordCount(lineArr[2]) === 5;

  return lineCountCheck && wordCountCheck;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false
    };

    this.setPoemContent = this.setPoemContent.bind(this);
  }

  setPoemContent(event) {
    const poemContent = event.target.value;

    if (poemContent) {
      this.setState({
        content: poemContent,
        isValid: isValidPoem(poemContent)
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
