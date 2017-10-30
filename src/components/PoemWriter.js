import React from 'react';

const countWords = line => line.split(' ').filter(l => l).length;


const isCorrect = input => {
  if (input) {
    const poemLines = input.split('\n').filter(l => l);

    const numberOfLines = poemLines.length === 3;
    const numberOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
    return numberOfLines && numberOfWords;
  }
  return false;

}


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content:'',
      hasError: true
    };
  }

  handleChange = event => {
      this.setState({
        content: event.target.value,
        hasError: !isCorrect(event.target.value)
      });
    }


  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleChange}
          value={this.state.content}
        />
        {(this.state.hasError) ?  <div id="poem-validation-error" style={{color: 'red'}}>
            This poem is not written in the right structure!
          </div> : ""}

      </div>
    );
  }
}

export default PoemWriter;
