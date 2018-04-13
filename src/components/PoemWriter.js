import React from "react";

const validatePoem = (poem) => {
  const lines = poem.split('\n').map(line => line.trim());
  if (poem && lines.length === 3){
    return (
      lines[0].split(" ").length === 5 && lines[1].split(" ").length === 3 && lines[2].split(" ").length === 5 
    )
  } else {
    return false;
  }
}

class PoemWriter extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      poem: '',
      isValid: true,
    };
  }

  handleInputChange = (event) => {
      const poem = event.target.value
    this.setState(
      {
        poem: event.target.value,
        isValid: validatePoem(poem)
      }
    )
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" name="poem" value={this.state.poem} onChange={this.handleInputChange}/>
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