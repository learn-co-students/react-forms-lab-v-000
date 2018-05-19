import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false,
    }
  }  

  handleChange = (event)=> {
    this.setState({
        ...this.state,
        value: event.target.value, 
    },this.validateContent)
  }

  testPoem(poem){
    if (poem.length === 3){
      return [5,3,5].every(function(element, i, array){
        return element === poem[i]
      });
    } else {
      return false
    }
  }
    validPoem =()=>{
    this.setState({
      ...this.state,
      valid: true,
    }, ()=> this.state.valid)
  }

  validateContent(event){
    const lines = this.state.value.split("\n")
    let poem = lines.map(function(line){
      return line.trim().split(' ').length
    })
    this.testPoem(poem) ? this.validPoem() : null
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" 
                  onChange={this.handleChange} 
                  value={this.state.value}
        />
        {!this.state.valid ? (
              <div id="poem-validation-error" style={{ color: "red" }}>
                This poem is not written in the right structure!
              </div>
            ) : null}  
      </div>
    );
  }
}

export default PoemWriter;
