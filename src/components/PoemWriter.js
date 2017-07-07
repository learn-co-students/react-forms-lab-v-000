import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };

    this.handleChange = this.handleChange.bind(this)
    this.invalidPoem = this.invalidPoem.bind(this)
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  invalidPoem = () => {
    var lines = this.state.text.split('\n')
    if (lines.length < 3 || lines[0].split(" ").length < 5 || lines[1].split(" ").length < 3 || lines[2].split(" ").length < 5) {
      return true
    }
  }

  render() {

    let invalidDiv = <div id="poem-validation-error" style={{color: 'red'}}> This poem is not written in the right structure! </div>

    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.text}
          onChange={this.handleChange}
        />
        {console.log(this.invalidPoem())}
        {console.log(this.state.text.split('\n'))}
        {this.invalidPoem() ? (
          invalidDiv ) : (
            null)
        }
      </div>


    );
  }
}

export default PoemWriter;
