import React from 'react';

const validatePoem = content => {
  const lines = content.split(/\r\n|\r|\n/).filter(word => word.length > 0)
  const numberOfLines = lines.length
  if (lines && numberOfLines === 3 && countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5) {
    return true
  } else {
    return false
  }
}

const countWords = line => {
  return line.split(" ").filter(word => word.length > 0).length
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
    };
  }

  handleTextChange = event => {
    const content = event.target.value

    this.setState({
      poem: content,
      validPoem: validatePoem(content),
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.rows}
          onChange={this.handleTextChange}
        />
        {!this.state.validPoem && <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
