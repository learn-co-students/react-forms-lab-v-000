import React from 'react';

const isValidPoem = (poem) => {
  const sentences = poem.split('\n')

  let words = [];

  if (sentences.length === 3) {
    for (let i = 0; i < 3; i++) {
      words.push(sentences[i].split(/\b\s\b/).length)
    }
  }
  
  if (words[0] === 5 && words[1] === 3 && words[2] === 5) {
    return true;
  } else {
    return false;
  }
}


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      isValid: isValidPoem(event.target.value)
    })
    

  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />

        { !this.state.isValid &&
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
