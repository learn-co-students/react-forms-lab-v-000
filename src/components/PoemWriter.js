import React from "react";

const validPoem = poem =>{
  //console.log(poem)
  const splitPoem = poem.split("\n").map(line => line.trim());
  //console.log(splitPoem);
  const poemLength = splitPoem.length === 3;
  if (poem && poemLength){
    console.log(splitPoem);
    return (
     splitPoem[0].split(" ").length === 5 &&
     splitPoem[1].split(" ").length === 3 &&
     splitPoem[2].split(" ").length === 5
    )
  } else {
    return false;
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      valid: true
    };
  }

  handleChange = event => {
    const poem = event.target.value;
    this.setState({
      text: poem,
      valid: validPoem(poem)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleChange}/>
        {!this.state.valid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null }
      </div>
    );
  }
}

export default PoemWriter;
