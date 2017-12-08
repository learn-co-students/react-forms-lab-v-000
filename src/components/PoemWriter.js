import React from 'react';


const countWords = (line) => {
  return line.split(' ').filter(word => word.length > 0).length;
}

const validatePoem = (text) => {
const lines = text.split(/\r*\n/).filter(word => word.length > 0);
  const lineCount = lines.length;

  if (lines && lineCount === 3 && countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5) {
    return true;
  } else {
    return false;
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ''
    };
  }

  handleChange = (event) => {
    const text = event.target.value;

    this.setState({
      content: text,
      isValid: validatePoem(text)
    });
  }


  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          rows="3"
          cols="60"
        />
        {!this.state.isValid && <div
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
