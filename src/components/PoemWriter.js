import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textValue: '',
      validPoem: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      textValue: event.target.value,
    })
  }

  validPoem = () => {
    let poem = this.state.textValue.split('\n')
    if (poem.length === 3) {
      if (poem[0].trim().split(' ').length === 5 && poem[1].trim().split(' ').length === 3 && poem[2].trim().split(' ').length === 5) {
        return true
      }
    }
    return false
  }

  render() {
    const isValid = this.validPoem()
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleChange}
          value={this.state.textValue}
        />

        {isValid ? null : <div
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
