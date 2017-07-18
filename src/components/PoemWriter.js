import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      valid: false
    };
  }

  handleInput(event){
    var valid = true;

    var input = event.target.value;
    var lines = input.split("\n").map((line) => line.trim());
    console.log(lines)
    if (lines.length < 3){
      valid = false;
    } else if(lines[0].split(" ").length != 5) {
      valid = false;
    } else if(lines[1].split(" ").length != 3) {
      valid = false;
    } else if(lines[2].split(" ").length != 5) {
      valid = false;
    }

    this.setState({
      input: input,
      valid: valid
    })
  }

  render() {
    console.log(this.state.valid);
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.input} onChange={this.handleInput.bind(this)} />
        {!this.state.valid &&
        <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div>
        }
      </div>
    );
  }
}

export default PoemWriter;