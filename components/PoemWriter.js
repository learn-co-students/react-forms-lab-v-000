// import React from 'react';
//
// function validatePoem(poem) {
//   let splitPoem = poem.split('\n').filter(i => i)
//   let correctLinesCount = splitPoem.length === 3
//   let correctWordsOnLines = countWords(splitPoem)
//   return correctWordsOnLines && correctLinesCount
// }
//
// function countWords(arr) {
//   let count = arr[0] === 5 && arr[1] === 7 && arr[2] === 5
//   return count
// }
//
// export default class PoemWriter extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       content: "",
//       valid: false,
//     };
//
//     this._setContent = this._setContent.bind(this)
//   }
//
//   _setContent(e) {
//      const poem = e.target.value;
//
//      if (poem) {
//        this.setState({
//          content: poem,
//          valid: validatePoem(poem),
//        });
//      }
//    }
//
//   render() {
//     return (
//       <div>
//         <textarea rows="3" cols="60" value={this.state.content} onChange={this._setContent} />
//         {!this.state.valid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
//       </div>
//     );
//   }
// }
/******************************** looking for mistake ************************ */

import React from 'react';

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function isValidPoem(poem) {
  const poemLines = poem.split('\n').filter(l => l);
  const isRightAmountOfLines = poemLines.length === 3;
  const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  return isRightAmountOfLines && hasRightAmountOfWords;
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false,
    };

    this.setPoemContent = this.setPoemContent.bind(this);
  }

  setPoemContent(ev) {
    const content = ev.target.value;

    if (content) {
      this.setState({
        content: content,
        isValid: isValidPoem(content),
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}
