import React from 'react';

//account for spaces
const wordCount = line => line.split(' ').filter(l => l).length;

const validPoem = poem => {
  if (poem) {
    const poemLines = poem.split('\n').filter(l => l);
    //poem has 3 lines
    const lineCount = poemLines.length === 3;
    //first line has five words, second line has three words, third line has five words
    const wordsInLine = wordCount(poemLines[0]) === 5 && wordCount(poemLines[1]) === 3 && wordCount(poemLines[2]) === 5;
    return lineCount && wordsInLine;
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false
    };
  }
  handleChange = event => {
    const poem = event.target.value;
    if (poem) {
      this.setState({
        poem: poem,
        valid: validPoem(poem),
      })
    }
  }

  render() {
    return (
      <div>
      //make controlled component by adding necessary props to the element
      //value is saved in the component's state
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handleChange}
        />
        //if poem is invalid
        {!this.state.valid && <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
