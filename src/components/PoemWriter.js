import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      isValid: true
    };
  }


   handleChange = event => {
   
    this.setState({
      poem: event.target.value,
      isValid: this.poemValid(event.target.value)
    });

  }

  poemValid(somevalue){

    let lines = somevalue.split("\n").map(x=> x.trim())

    let linesCount = lines.length
  
    if (somevalue && linesCount === 3){
        
       let firstLine = lines[0].split(" ").length
       let secondLine = lines[1].split(" ").length
       let thirdLine = lines[2].split(" ").length
       debugger
      return (
        firstLine === 5 && secondLine === 3 && thirdLine === 5
      )
    } else { 
   
      return false;
    }
  }


  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} value={this.state.poem} name="poem" rows="3" cols="60" />
        {!this.state.isValid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
          ) : null}
      </div>
    );
  }
}

export default PoemWriter;

