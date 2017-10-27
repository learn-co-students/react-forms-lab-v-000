import React from 'react';

const wordCount = line => line.split(' ').filter(w => w).length
class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemMessage: '',
      isValid: true
    };
  }

  changePoem = event => {
    this.setState({
      poemMessage: event.target.value,
      isValid: this.poemValid(event.target.value)
    })
  }

  poemValid = poem => {
    const splitPoem = poem.split('\n')
    const lineCount = splitPoem.length
    const firstLineIsValid = wordCount(splitPoem[0]) === 5
    const secondLineIsValid = splitPoem[1] && wordCount(splitPoem[1]) === 3
    const thirdLineIsValid = splitPoem[2] && wordCount(splitPoem[2]) === 5
    const hasThreeLines = lineCount === 3

    console.log(hasThreeLines && firstLineIsValid && secondLineIsValid && thirdLineIsValid)

    return hasThreeLines && firstLineIsValid && secondLineIsValid && thirdLineIsValid
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poemMessage}
          onChange={this.changePoem}
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
