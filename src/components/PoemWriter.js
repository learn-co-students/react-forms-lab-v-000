import React from "react";

/* below checks for validity, not allowing extra whitespace
const isValidPoem = poemContent => {
  const poem = poemContent.split(/\n/g)

  if (poem.length === 3) {
    const splitPoem = poem.map(line => line.split(' '));

    splitPoem.forEach(lineArray => lineArray.filter((word) => {
      if (word === "") {
        return false;
      }
    }));
  }
}
*/

const isValidPoem = poemContent => {
  const poem = poemContent.split(/\n/g)

  if (poem.length === 3) {
    const splitPoem = poem.map(line => line.trim().split(' '));

    return (
      splitPoem[0].length === 5 &&
      splitPoem[1].length === 3 &&
      splitPoem[2].length === 5
    );
  } else {
    return false;
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      isValid: true,
    };
  }

  setPoemContent = event => {
    const content = event.target.value;
    this.setState({
      content,
      isValid: isValidPoem(content),
    });
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.setPoemContent}
        />
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
