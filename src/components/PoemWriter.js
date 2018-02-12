import React from "react";

class PoemWriter extends React.Component {
  constructor() {
  super();

  this.state = {
      value: '',
      isValid: false
    };
  }

  handleChange = event => {
    const valid = this.validateInput(event.target.value)
    this.setState({
      value: event.target.value,
      isValid: valid
    })
  }

  validateInput = (value) => {
    let validPoem = false
    let validLine1 = false
    let validLine2 = false
    let validLine3 = false

    const poemLines = value.split('\n')
    if (poemLines.length === 3 ){

      poemLines.forEach(function(value, index) {
        if (index === 0) {
          // 5 words
          let line1Array = []
          const line1 = value.split(" ").forEach(function(value) {
            if (value !== "")
              line1Array.push(value)
          })
          if (line1Array.length === 5) {
            validLine1 = true
          }
        }else if (index === 1){
          // 3 words
          let line2Array = []
          const line2 = value.split(" ").forEach(function(value) {
            if (value !== "")
              line2Array.push(value)
          })
          if (line2Array.length === 3) {
            validLine2 = true
          }
        }else if (index === 2){
          // 5 words
          let line3Array = []
          const line3 = value.split(" ").forEach(function(value) {
            if (value !== "")
              line3Array.push(value)
          })
          if (line3Array.length === 5) {
            validLine3 = true
          }
        }

      })
    }

    if ( poemLines.length === 3 && validLine1 && validLine2 && validLine3) {
      validPoem = true
    }

    if (validPoem) {
      return true
    }else{
      return false
    }
  }


  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" 
          value={this.state.value} 
          onChange={this.handleChange} 
        />
        <div id={this.state.isValid}>{this.state.isValid}</div>
        { this.state.isValid ? "" : 
            <div id="poem-validation-error" style={{ color: "red" }}>
              This poem is not written in the right structure!
            </div> }
      </div>
    );
  }
}



export default PoemWriter;
