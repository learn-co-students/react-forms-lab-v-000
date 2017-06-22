import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = { value: "" };
  }
  
  writePoem = event => {
    this.setState({
      value: event.target.value,
    })
  }
  
  validPoem() {
    var textarea = this.state.value.replace(/\n$/, "")
    var lines = textarea.split("\n")
    if (lines.length !== 3)
      return false
    if (lines[0].trim().split(/[\s,]+/).length !== 5 || lines[1].trim().split(/[\s,]+/).length !== 3 || lines[2].trim().split(/[\s,]+/).length !== 5)
      return false
    return true
  }

  render() {
    return (
      <div>
        <textarea
          value={this.state.value}
          onChange={this.writePoem}
          rows="3" 
          cols="60" 
        />
        {  (this.validPoem() === false) ?
        <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
          "This poem is not written in the right structure!"
        </div>
        : ""
        }
      </div>
    );
  }
}

export default PoemWriter;