import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false
    };
  }
  
  handlePoem = (e) => {
    const poemIn = e.target.value;
    const lines = poemIn.split('\n').map(line => line.trim())
    const lengths = lines.map(line => line.split(' ').length)
    const linesMatch = (lengths) => {
      return (
        lengths[0] === 5 && 
        lengths[1] === 3 && 
        lengths[2] === 5
      );
    }
    
    this.setState({
      poem: poemIn,
      isValid: lines.length === 3 && linesMatch(lengths)
    })
  }

  render() {
    const isValid = this.state.isValid;
    
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handlePoem} />
        {isValid ? null :
        <div id="poem-validation-error" style={{ color: "red" }}>
           This poem is not written in the right structure!
        </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
