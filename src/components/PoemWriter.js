import React from 'react';

const countWords = line => {
  if (line) {
    return line.split(' ').filter(word => word).length
  }
}
// because rightWordCount keeps calling countWords, we need to make sure that
// line exists first
// and because of the { } we need to use return
// without the brackets, there's no need for return

const validPoem = poem => {
  if (poem) {
    const lines = poem.split('\n').filter(line => line)
    // filter to check if line exists or not, otherwise empty line breaks will count as a line
    const rightLineCount = lines.length === 3;
    const rightWordCount = countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5;
    return rightLineCount && rightWordCount
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: true
    };
  }

  handleContentChange = event => {
    const content = event.target.value
    debugger
    this.setState({
      content: content,
      isValid: validPoem(content)
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.handleContentChange}
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
