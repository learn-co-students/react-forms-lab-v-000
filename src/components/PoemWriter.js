import React from 'react';
import PropTypes from 'prop-types';


const validPoem = (content) => {
  if (content) {
    const lines = content.trim().split('\n').filter(l => l)
  const validLines = lines.length === 3
  const validWords = lines[0].split(" ").filter(l => l).length === 5 && lines[1].split(" ").filter(l => l).length === 3 && lines[2].split(" ").filter(l => l).length === 5;
  return validLines && validWords;
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {poem: '', isValid: true};
  }

  handleChange = (event) => {
    const poem = event.target.value
    this.setState({
      poem,
      isValid: validPoem(poem)
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
        value={this.state.poem} onChange={this.handleChange}/>
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
