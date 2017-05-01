import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: "",
      hasError: true
    };
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
    var enteredText = event.target.value.split("\n")
    console.log(enteredText)
    function validateAllLines(){
      return enteredText.length === 3
    }
    function validateFirstLine(){
      return enteredText[0].trim().split(" ").length === 5
    }
    function validateSecondLine(){
      return enteredText[1].trim().split(" ").length === 3
    }
    function validateThirdLine(){
      return enteredText[2].trim().split(" ").length === 5
    }
    console.log(validateAllLines() && validateFirstLine() && validateSecondLine() && validateThirdLine())
    if (validateAllLines() && validateFirstLine() && validateSecondLine() && validateThirdLine()){
      this.setState({
        hasError: false
      })
    }
  }

  render() {
    return (
      <div>
        <textarea id="text" rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {this.state.hasError? (<div id="poem-validation-error" style={{color: 'red'}}>
        "This poem is not written in the right structure!"
        </div>):(null)}
      </div>
    );
  }
}
