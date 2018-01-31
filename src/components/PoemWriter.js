import React from "react";

const stripSpaces = (poemRow) => {
  const arr = poemRow.split(" ");
  const words = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      words.push(arr[i]);
    }
  }
  return words;
}

const checkPoemValidity = (poem) => {
  const poemArray = poem.split("\n");
  const poemArrayStripped = poemArray.map(
    line => stripSpaces(line)
  )
  return (poemArrayStripped.length === 3 && poemArrayStripped[0].length === 5 && poemArrayStripped[1].length === 3 && poemArrayStripped[2].length === 5 )
}


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      numOfRows: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const poemValidity = checkPoemValidity(event.target.value)
    this.setState({
      value: event.target.value,
      correctPoem: poemValidity,
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        { !this.state.correctPoem &&
            <div id="poem-validation-error" style={{ color: "red" }}>
              This poem is not written in the right structure!
            </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
