import React from 'react';


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      valid: false
    };


  }

  updatePoemState = (e) => {
    this.setState({
      content: e.target.value,
      valid: this.poemValid(e.target.value)
    })
  }

  poemValid = (poem) => {
    if (poem.split(/\r\n|\r|\n/).length > 2){
      let poemArray = poem.split(/\r\n|\r|\n/)
      var firstLineWordCount = poemArray[0].trim().split(" ").length
      var secondLineWordCount = poemArray[1].trim().split(" ").length
      var thirdLineWordCount = poemArray[2].trim().split(" ").length
      if (poemArray.length === 3 && firstLineWordCount === 5 && secondLineWordCount === 3 && thirdLineWordCount === 5){
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
      <div >
        <textarea onChange={this.updatePoemState} value={this.state.content}
          rows="3"
          cols="60"
        />

        {(this.state.valid) ? null : <div
          id="poem-validation-error"
          style={{color: 'red'}}

        >
          'This poem is not written in the right structure!'
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
