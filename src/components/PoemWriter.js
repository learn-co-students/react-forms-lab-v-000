import React from "react";

//function written outside of the component?
const isValidPoem = poem =>{
  const poemLines = poem.split("\n").map(line => line.trim());
  const rightAmount = poemLines.length === 3;
  if(poem && rightAmount){
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  }else{
    return false;
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      isValid: true
    };
  }

  setPoemContents = event =>{
    const content = event.target.value
    this.setState({
      //Why content here? only trying to update valid state. test wont pass without it.
      content,
      isValid: isValidPoem(content)
    })
  }

  render() {
    return (
      <div>
        <textarea
        rows="3"
        cols="60"
        value={this.state.content}
        onChange={this.setPoemContents} />
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
