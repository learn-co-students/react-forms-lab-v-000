import React from 'react';

// THIS WORKS BUT TESTS DON'T LIKE IT
// Trim Whitespace & Split Into Lines
// var userText = event.target.innerHTML.trim();
// var eachLine = userText.split('\n');
// var condition0, condition1, condition2;

// if (eachLine.length == 3) {
//   condition0 = eachLine[0].split(' ').length == 5 ? true : false;
//   condition1 = eachLine[1].split(' ').length == 3 ? true : false;
//   condition2 = eachLine[2].split(' ').length == 5 ? true : false;
// }

// if (condition0 && condition1 && condition2) {
//   document.getElementById('poem-validation-error').style.display = 'none';
// }

function validText(text) {
  const eachLine = text.split('\n').filter(l => l);

  if (eachLine.length === 3) {
    let condition0 = eachLine[0].split(' ').filter(l => l).length === 5 ? true : false;
    let condition1 = eachLine[1].split(' ').filter(l => l).length === 3 ? true : false;
    let condition2 = eachLine[2].split(' ').filter(l => l).length === 5 ? true : false;

    if (condition0 && condition1 && condition2) {
      return true
    }
  }

  return false
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textArea: '',
      isValid: false
    };

    this.updateTextArea = this.updateTextArea.bind(this);
  }

  updateTextArea(event) {
    const text = event.target.value;

    if (text) {
      this.setState({
        textArea: text,
        isValid: validText(text)
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.textArea} onChange={this.updateTextArea} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}
