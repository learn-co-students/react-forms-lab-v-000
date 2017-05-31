import React from 'react';

const validatePoem = (poem) => {
  var poemLines = poem.split("\n");
  if (poemLines.length === 3) {
    var lineOneCount = poemLines[0].split(" ").filter(word => /\S/.test(word)).length;
    var lineTwoCount = poemLines[1].split(" ").filter(word => /\S/.test(word)).length;
    var lineThreeCount = poemLines[2].split(" ").filter(word => /\S/.test(word)).length;
    return lineOneCount === 5 && lineTwoCount === 3 && lineThreeCount === 5
  } else {
    return false
  }
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isPoem: false
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    var poem = e.target.value
    if (poem) {
      this.setState({
        text: poem,
        isPoem: validatePoem(poem)
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.changeHandler}/>
        {!this.state.isPoem ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}
