const React = require('react');

function wordCount(line) {
  let wordArr = line.split(" ")
  return wordArr.filter(word => word)
}

function isValidPoem(poem) {
  let lineArr = poem.split("\n").filter(line => line);
  let wordCountCheck = wordCount(lineArr[0]) === 5 && wordCount(lineArr[1]) === 3 && wordCount(lineArr[2]) === 5;

  return (lineArr.length === 3) //&& wordCountCheck);
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      isValid: false
    };

    this.writePoem = this.writePoem.bind(this);
  }

  writePoem(event) {
    const poemContent = event.target.value;

    if (poemContent) {
      let validity = isValidPoem(poemContent);

      this.setState({
        poem: poemContent,
        isValid: validity,
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.writePoem} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
