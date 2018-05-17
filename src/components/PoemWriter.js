import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      poem: '',
      isValid: false
    };
  }

  handleChange = (event ) => {
    this.setState({poem: event.target.value});
    this.validatePoem();
  }

  validatePoem = () => {
    let isValidPoem = false;
    let poem = this.state.poem;
    let lines = poem.split('\n').map(line => line.trim());
    let wordCountByLine = lines.map((line) => {
      return line.split(' ').length;
    });
    if (lines.length === 3 && wordCountByLine[0] === 5 && wordCountByLine[1] === 3 && wordCountByLine[2] === 5){
      isValidPoem = true;
    }
    this.setState({isValid: isValidPoem})
  }

  render() {

    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} value={this.state.poem}/>
        {this.state.isValid ? null :
          (<div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
            </div>)
        }
      </div>
    );
  }
}

export default PoemWriter;
