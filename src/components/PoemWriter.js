import React from 'react';

function isValidContent(poem) {
  const line = poem.split(/\r*\n/);
  const lineCount = line.length === 3;
  const numOfWords = line[0].split(" ").filter(n => n).length === 5 &&
                     line[1].split(" ").filter(n => n).length === 3 &&
                     line[2].split(" ").filter(n => n).length === 5;

  return lineCount && numOfWords;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
    };

    this.handleContent = this.handleContent.bind(this);
  }

  handleContent(event) {
    const poemContent = event.target.value;

    if(poemContent) {
      this.setState({
        poem: poemContent,
      });
    }
  }

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60"
          value={this.state.poem}
          onChange={this.handleContent}
        />
        {!isValidContent(this.state.poem) ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null }
      </div>
    );
  }
}

export default PoemWriter;