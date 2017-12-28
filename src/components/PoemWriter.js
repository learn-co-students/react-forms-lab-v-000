import React from 'react';

const validatePoem = data => {
  const poemLines = data.split(/\r?\n/).filter(Boolean);
  const numOfLines = poemLines.length;

  if (numOfLines === 3) {
    const lineOne = poemLines[0].split(' ').filter(String).length;
    const lineTwo = poemLines[1].split(' ').filter(String).length;
    const lineThree = poemLines[2].split(' ').filter(String).length;

    if (lineOne === 5 && lineTwo === 3 && lineThree === 5) {
      return true;
    }
  } else {
    return false;
  }
};

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = { content: '' };
  }

  handleChange = event => {
    this.setState({
      content: event.target.value,
      poemValidation: validatePoem(event.target.value),
    });
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.handleChange}
        />
        {
          !this.state.poemValidation && <div
            id="poem-validation-error"
            style={{ color: 'red' }}
          >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
