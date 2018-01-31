import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      numOfRows: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  stripSpaces(poemRow) {
    const arr = poemRow.split(" ");
    const words = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        words.push(arr[i]);
      }
    }
    return words;
  }

  handleChange = (event) => {
    // debugger;
    this.setState({
      value: event.target.value,
      numOfRows: event.target.value.split("\n").length,
    })
  }

// text.split("\n")
  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        { this.state.numOfRows !== 3 &&
            <div id="poem-validation-error" style={{ color: "red" }}>
              This poem is not written in the right structure!
            </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
