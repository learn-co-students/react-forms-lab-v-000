import React from "react";

//why is this function OUTSDIE OF the component?

const testValid = poem => {
  const poemLines = poem.split('\n').map(line => line.trim())
  const rightLineCount = poemLines.length === 3
  if(rightLineCount && poem) {
    return (
      poemLines[0].split(' ').length === 5 &&
      poemLines[1].split(' ').length === 3 &&
      poemLines[2].split(' ').length === 5
    )
  } else {

    return false
  }
}


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      validPoem: false,
    };
  }

  handlePoemChange = (e) => {
    this.setState ({
      poem: e.target.value,
      validPoem: testValid(e.target.value),
    })
  }


  render() {
    return (
      <div>
        <textarea rows="3" cols="60"
            onChange={this.handlePoemChange}
            value={this.state.poem}
            />
      {(this.state.validPoem) ? null :
        <div id="poem-validation-error" style={{ color: "red" }}>
           "This poem is not written in the right structure!"
        </div>
      }
      </div>
    );
  }
}

export default PoemWriter;
