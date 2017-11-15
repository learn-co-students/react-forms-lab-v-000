import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      validPoem: false
    };
  }

  handleTextareaChange = e => {
    this.setState({
      value: e.target.value,
      validPoem: this.validatePoem(e)
    });
  }

  validatePoem = (e) => {
    let poem = e.target.value.split('\n');

    if (poem.length !== 3) {
      return false;
    }

    if (poem[0].trim().split(" ").length !== 5) {
      return false;
    }

    if (poem[1].trim().split(" ").length !== 3) {
      return false;
    }

    if (poem[2].trim().split(" ").length !== 5) {
      return false;
    }

    return true;
  }

  render() {
    let errorDiv = null;
    if (!this.state.validPoem) {
      errorDiv = (
        <div
          id="poem-validation-error"
          style={{
            color: 'red',
            visibility: this.state.validPoem ? "hidden" : "visible"
          }}

        >
          This poem is not written in the right structure!
        </div>
      )
    }
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleTextareaChange}
        />
        {errorDiv}
      </div>
    );
  }
}

export default PoemWriter;
