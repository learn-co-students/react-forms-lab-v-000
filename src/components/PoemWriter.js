import React from "react";

function validatePoem(poem) {
  var splitPoem = poem.split('\n')
  var eachWord = []
  if (splitPoem.length === 3) {
    for(var i = 0; i < splitPoem.length; i++)
      eachWord.push(splitPoem[i].split(/\b\s\b/).length)

  }
  return (eachWord[0] === 5 && eachWord[1] === 3 && eachWord[2] === 5 ? true : false)
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
  }

  inputChange = (event) => {
    this.setState({
      value: event.target.value,
      isValid: validatePoem(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" onChange={this.inputChange} value={this.state.value} cols="60" />
          { !this.state.isValid &&
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
