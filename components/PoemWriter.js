const React = require('react');

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function validPoem(content) {
  const poemLines = content.split('\n').filter(l => l);
  const amountOfLines = poemLines.length === 3;
  const amountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  return amountOfLines && amountOfWords;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      poemError: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const content = ev.target.value;

    if (content) {
      this.setState({
        content: content,
        poemError: validPoem(content),
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {!this.state.poemError ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
