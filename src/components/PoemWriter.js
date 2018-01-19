import React from "react";

function isValidPoem(poem) {
  const fullPoem = poem.split('\n').map(line => line.trim());
  const correctLineAmount = fullPoem.length === 3;

  if (poem && correctLineAmount){
    return (
      fullPoem[0].split(" ").length === 5 &&
      fullPoem[1].split(" ").length === 3 &&
      fullPoem[2].split(" ").length === 5
    );
  } else {
    return false;
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      isValid: true,
    };
  }

  updatePoemInput = event => {
    const content = event.target.value;
    
    this.setState({
      input: content,
      isValid: isValidPoem(content)
    })
  }



  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.updatePoemInput} />
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
