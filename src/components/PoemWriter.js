import React from 'react';

const splitLength = line => line.split(' ').filter(l => l).length;


const isValidPoem = (poem) => {

  if(poem) {
    const lineCount = poem.split("\n").filter(l => l);
    const isRightAmountOfLines = lineCount.length === 3

    const hasRightAmountOfWords = splitLength(lineCount[0]) === 5 && splitLength(lineCount[1]) === 3 && splitLength(lineCount[2]) === 5;
    return isRightAmountOfLines && hasRightAmountOfWords

  }
    return false;

}


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      isValid: true
    };
  }
  handleOnChange = (event) => {
    const value = event.target.value
    this.setState({
      value,
      isValid: isValidPoem(value)
    });
  }


  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleOnChange}
          value={this.state.value}
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
