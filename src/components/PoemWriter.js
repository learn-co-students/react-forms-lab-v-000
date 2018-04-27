import React from "react";
import PropTypes from "prop-types";

function isValid(poem) {
  const poemLines = poem.split("\n").map(line => line.trim());
  if(poemLines.length === 3){
    return (poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5)
  }
  else{return false}
}
class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {poem: "", validity: true};
  }
  handleChange=(event)=>{
    const poem = event.target.value
    this.setState({poem, validity: isValid(poem)});

  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange}/>
        {!this.state.validity ? (
                  <div id="poem-validation-error" style={{ color: "red" }}>
                    This poem is not written in the right structure!
                  </div>
                ) : null}

      </div>
    );
  }
}

export default PoemWriter;
