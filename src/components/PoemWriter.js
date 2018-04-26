import React from "react";

const validPoem = poem => {
  const numLines = poem.split("\n").map(line => line.trim());
  const checkLines = numLines.length === 3;
  if (poem && checkLines) {
    return (
      numLines[0].split(" ").length === 5 &&
      numLines[1].split(" ").length === 3 &&
      numLines[2].split(" ").length === 5
    );
  }else{
    return false;
  }
};

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
      isValid: validPoem(content),
    });
  };

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent}/>
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
