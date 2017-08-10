import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      valid: false
    };
    this.poemValid = this.poemValid.bind(this)
  }

  changePoemState = (event) => {
    this.setState({
      content: event.target.value,
      valid: this.poemValid(event.target.value)
    })
  }

  poemValid = (poem) => {
    if (poem.split(/\r?\n/).length > 2) {
      let poemArr = poem.split(/\r?\n/)
      var firstLineCount = poemArr[0].trim().split(" ").length
      var secondLineCount = poemArr[1].trim().split(" ").length
      var thirdLineCount = poemArr[2].trim().split(" ").length
      if (poemArr.length === 3 && firstLineCount === 5 && secondLineCount === 3 && thirdLineCount === 5) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea onChange={this.changePoemState} value={this.state.content} rows="3" cols="60" />


        {(this.state.valid) ? null : <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
