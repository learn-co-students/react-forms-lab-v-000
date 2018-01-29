import React from "react";

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.isValid = this.isValid.bind(this)
    this.state = {
      value: '',
      shouldHide: false
    };
  }

  isValid(poem){
    const lines = poem.split('\n')
    let wordsPerLine = [];
    if (lines.length === 3){
      for(let i = 0; i < 3; i++){
        wordsPerLine.push(lines[i].split(/\b\s\b/).length)
      }
    }
    return (wordsPerLine[0] === 5 && wordsPerLine[1] === 3 && wordsPerLine[2] === 5) ? true : false;
  }

  handleChange(e){
    this.setState({value: e.target.value});
    if (this.isValid(e.target.value)){
      this.setState({shouldHide: true})
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {!this.state.shouldHide &&
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
