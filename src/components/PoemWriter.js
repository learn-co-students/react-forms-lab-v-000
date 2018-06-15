import React from "react";

const isValidPoem = poem => {
  let numberOfRows = poem.split(/\r?\n/).length
  let firstRowLength
  let secondRowLength
  let thirdRowLength

  if (poem.split(/\r?\n/)[0]) {
    firstRowLength = poem.split(/\r?\n/)[0].match(/\w/).input.split(" ").filter((n) => { return n !== "" }).length
  }
  if (poem.split(/\r?\n/)[1]) {
    secondRowLength = poem.split(/\r?\n/)[1].match(/\w/).input.split(" ").filter((n) => { return n !== "" }).length
  }
  if (poem.split(/\r?\n/)[2]) {
    thirdRowLength = poem.split(/\r?\n/)[2].match(/\w/).input.split(" ").filter((n) => { return n !== "" }).length
  }

  if(numberOfRows === 3 && firstRowLength === 5 && secondRowLength === 3 && thirdRowLength === 5){
    return true
  } else {
    return false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: true
    };
  }

  handleChange = event => {
    const poem = event.target.value
    this.setState({
      value: event.target.value,
      isValid: isValidPoem(poem)
    })

  }

  render() {
    return (
      <div>
        <textarea id="myText" rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {this.state.isValid ?
          null
          : <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
