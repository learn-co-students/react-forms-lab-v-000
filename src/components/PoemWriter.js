import React from 'react';

const countWords = line => line.split(' ').filter(l => l).length


const isValidPoem = poem => {
  if (poem) {
    const poemLines = poem.split('\n').filter(l => l)
    const isCorrectNumberOfLines = poemLines.length === 3
    const isCorrectNumberOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5
    return isCorrectNumberOfLines && isCorrectNumberOfWords
  }
  return false
}

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isValid: true,
    };
  }

  handleChange = event => {
    const content = event.target.value

    this.setState({
      value: content,
      isValid: isValidPoem(content)
    })
  }

  render() {
    return (
      <div>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          rows="3"
          cols="60"
        />
        {!this.state.isValid &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
