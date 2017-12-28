import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      valid: false
    };
  }

  lineSplitter = (newLine) =>{
    return newLine.split(" ").filter((element) => element)
  }

  isValid = () => {
    let lines = this.state.value.split("\n")
    if (lines.length !== 3) {
      this.setState({ valid: false })
      return null;
    }

    let firstLine = this.lineSplitter(lines[0])
    if (firstLine.length !== 5) {
      this.setState({ valid: false })
      return null;
    }
    
    let secondLine = this.lineSplitter(lines[1])
    if (secondLine.length !== 3) {
      this.setState({ valid: false })
      return null;
    }
    let thirdLine = this.lineSplitter(lines[2])
    if (thirdLine.length !== 5) {
      this.setState({valid: false})
      return null;
    }
    console.log(true)
    this.setState({valid: true})
  }

  poemHandler = (event) => {
    this.setState({
      value: event.target.value
    }, this.isValid)
  }

  render() {
    let errorMessage
    if (this.state.valid){
      errorMessage = null
    }
    else{
      errorMessage = <div
      id="poem-validation-error"
      style={{
        color: 'red'
      }}
      >
      This poem is not written in the right structure!
        </div>
    }
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value = {this.value}
          onChange ={this.poemHandler}
        />
      {errorMessage}
      </div>
    );
  }
}

export default PoemWriter;
