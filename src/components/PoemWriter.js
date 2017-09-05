import React from 'react';

function isValidPoem(content){
  var poemLines = content.split('\n');
  if(poemLines.length !== 3){
    return false;
  }
  if(poemLines[0].trim().split(" ").length!== 5 || poemLines[1].trim().split(" ").length!== 3 || poemLines[2].trim().split(" ").length!== 5){
    return false;
  }
  return true;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false
    };
  }

  updatePoem = (event) => {
    this.setState({
      poem: event.target.value,
      isValid: isValidPoem(event.target.value)
    });
  }

  render() {
    return (
      <div>
        <textarea
          name="poem"
          value= {this.state.poem}
          onChange={this.updatePoem}
          rows="3"
          cols="60"
        />
        {!this.state.isValid?
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
        : null}
      </div>
    );
  }
}

export default PoemWriter;
