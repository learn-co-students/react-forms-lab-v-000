import React from 'react';

function isValid(poem) {
  let isValid = false
  const lines = poem.split("\n");
  if (lines.length === 3) {
    if (
      lines[0].trim().split(" ").length === 5 &&
      lines[1].trim().split(" ").length === 3 &&
      lines[2].trim().split(" ").length === 5
      ) {
      isValid = true
    } 
  }
  return isValid 
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleInputChange = (event) => {
    const validPoem = isValid(event.target.value)
    this.setState({
      value: event.target.value,
      isValid: validPoem
    })
  }

  render() {
    return (
      <div>
      <textarea
      rows="3"
      cols="60"
      value={this.state.value}
      onChange={this.handleInputChange}
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
