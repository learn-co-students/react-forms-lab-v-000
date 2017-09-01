import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false,
    };
  }

  handleChange = (event) => {
    if (event.target.value) {
      this.setState({
        value: event.target.value,
        valid: isValid(event.target.value),
      });
    }
  }

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" 
          wrap="hard"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {(this.state.valid) ? null : <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

function isValid(text) {
  const lines = text.split(/\r*\n/);
  if (lines.length === 3) {
    const one = lines[0].trim().split(' ');
    const two = lines[1].trim().split(' ');
    const three = lines[2].trim().split(' ');
    if (one.length === 5 && two.length === 3 && three.length === 5) {
      return true;
    } else {
      return false;
    }
  }
}

export default PoemWriter;