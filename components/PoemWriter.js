import React from 'react';

function countWords(sentence){
  return sentence.split(" ").length
}

function sentenceCheck(sentence){
  const lines = sentence.split('\n')
  const lineCheck = lines.length === 3
  const wordCheck = countWords(lines[0]) === 5  && countWords(lines[1]) === 3  && countWords(lines[2]) === 5
  return wordCheck && lineCheck
}


class PoemWriter extends React.Component{
  constructor(){
    super();

    this.state = {
      message: "",
      formatOk: false
    }
    this.checkPoem = this.checkPoem.bind(this)
  }

  checkPoem(event){
    const content = event.target.value;

    if (content){
      this.setState({
        message: content,
        formatOk: sentenceCheck(content)
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.checkPoem} />
        {!this.state.formatOk ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}


module.exports = PoemWriter;
