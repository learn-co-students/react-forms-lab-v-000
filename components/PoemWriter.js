import React from 'react';
import ReactDOM from 'react-dom';

function splitWords(poem){
  var lines = poem.split("\n").filter(l => l)
  if (lines.length === 3) {
    var line1 = lines[0].split(" ").filter(l => l).length;
    var line2 = lines[1].split(" ").filter(l => l).length;
    var line3 = lines[2].split(" ").filter(l => l).length;
    if (line1 === 5 && line2 === 3 && line3 === 5){
      return true
    }
  }
  return false
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false
    };

    this.poem = this.poem.bind(this);
  }

  poem(e){
    this.setState({
      poem: e.target.value,
      valid: splitWords(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.poem}/>
        {this.state.valid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}
