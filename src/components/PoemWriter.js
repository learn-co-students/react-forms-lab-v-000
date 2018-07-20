import React from "react";

function validatePoem(poem) {
  var splitPoem = poem.split('\n').map(line=> line.trim());
  return (splitPoem[0].split(" ").length === 5 && splitPoem[1].split(" ").length === 3 && splitPoem[2].split(" ").length === 5) ? true : false
}

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      poemText: '',
      validPoem: false
    };
  }

  handleInputChange = (event) => {
    this.setState({
      poemText: event.target.value,
      validPoem: validatePoem(event.target.value)
      });
      console.log(this.state.validPoem)
    }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" name = "poemText" value={this.state.poemText} onChange={this.handleInputChange}/>
        { !this.state.validPoem &&
          <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
