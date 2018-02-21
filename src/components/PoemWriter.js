import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      valid: false
    };
  }

  poemState = (event) => {
    this.setState({
      poem: event.target.value,
      valid: this.validPoem(event.target.value)
    })
  }

  validPoem = (poem) => {
    let prose = poem.split("\n")
    if (this.threeLines(prose) && this.fiveWords(prose) && this.threeWords(prose)){
      return true
    }
  }

  threeLines = (prose) => {
    if(prose.length === 3) {
      return true
    }
  }

  fiveWords = (prose) => {
    var lineOne = prose[0].split(" ").filter(n => {return n != ""})
    var lineThree = prose[2].split(" ").filter(n => {return n != ""})
    if(lineOne.length === 5 && lineThree.length === 5) {
      return true
    }
  }

  threeWords = (prose) => {
    var lineTwo = prose[1].split(" ").filter(n => {return n != ""})
    if(lineTwo.length === 3) {
      return true
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.poemState}/>
          {this.state.valid ? "" :
            <div id="poem-validation-error" style={{ color: "red" }} >
              This poem is not written in the right structure!
              </div>
            }
      </div>
    );
  }
}

export default PoemWriter;

//if state is valid render this div
