import React from 'react';

function isValidPoem(poem) {
  var lines = poem.split("\n").filter(line => line)
  if (lines.length != 3) {
    return false;
  }

  var first_line = lines[0].split(" ").filter(line => line).length
  if (first_line != 5) {
    return false;
  }

  var second_line = lines[1].split(" ").filter(line => line).length
  if (second_line != 3) {
    return false;
  }

  var third_line = lines[2].split(" ").filter(line => line).length
  if (third_line != 5) {
    return false;
  }

  return true;
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

  this.state = {
        text: '',
        isValid: false,
      };

      this.handlePoem = this.handlePoem.bind(this);
    }


  handlePoem(event) {
    const text = event.target.value;

    if (text) {
      this.setState({
        text: text,
        isValid: isValidPoem(text),
      });
    }
  }



  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" 
          value={this.state.text}
          onChange={this.handlePoem}
        />
      
        {!this.state.isValid ? 
        <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div> : null}
      </div>
    );
  }
}
