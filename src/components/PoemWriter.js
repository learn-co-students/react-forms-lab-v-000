import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      poem: e.target.value
    })
  }


// commented code gets strict about white space
  checkPoem = (poem) => {
    const poemArr = poem.split("\n");
    if (poemArr.length === 3) {
      // if (poemArr.every(l => l.split(' ').length === l.split(' ').filter(Boolean).length)) {
        if (poemArr[0].split(' ').filter(Boolean).length === 5 && poemArr[1].split(' ').filter(Boolean).length === 3 && poemArr[2].split(' ').filter(Boolean).length === 5) {
          return true
        }
      // }
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handleChange}
        />
        {this.checkPoem(this.state.poem) === true ? "" :
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
