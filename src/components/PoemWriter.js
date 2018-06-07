import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false
    };
  }

  handleChange = e => {
    const poem = e.target.value;
    this.setState({
      poem: poem,
      valid: this.isValid(e.target.value)
    })
  }

isValid(poem) {
  const poemLines = poem.split('\n').filter(n => n).length
  const poemArray = poem.split('\n').filter(n => n)
  if (poemLines === 3) {
    return this.countWords(poemArray[0]) === 5 && this.countWords(poemArray[1]) === 3 &&
      this.countWords(poemArray[2]) === 5
  }
}

countWords(line) {
  return line.split(' ').filter(n => n).length
}

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem}
                  onChange={this.handleChange}/>
        {this.state.valid ? null : <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
