import React from 'react';

function countWords(line){
  return line.match(/\w+/g).filter(l => l).length
}

function isValidPoem(poem){
  const lines = poem.split(/\n/).filter(l => l);
  const isRightNumberOfLines = lines.length === 3;
  if (isRightNumberOfLines){
    return countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5;
  };
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const poem = event.target.value;

    if (poem) {
      this.setState({
      poem: poem,
      isValid: isValidPoem(poem),
      });
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.poem}
          onChange={this.handleChange}
        />
        {!this.state.isValid ? <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div> : null}
      </div>
    );
  }
}

export default PoemWriter;
