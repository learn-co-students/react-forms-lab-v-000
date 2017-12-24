// import React from 'react'

// class PoemWriter extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       text: '',
//       validContent: true
//     }
//   }

//   updateText = (event) => {
//     this.setState({
//       text: event.target.value,
//       validContent: this.poemValid(event.target.value)
//     })
   
//   }

//   poemValid = (text) => {
    
//     return ( 
//       text.trim().split('\n').filter(l => l).length === 3 &&
//       text.trim().split('\n')[0].split(' ').filter(theLine => theLine).length === 5 &&
//       text.trim().split('\n')[1].split(' ').filter(theLine => theLine).length === 3 &&
//       text.trim().split('\n')[2].split(' ').filter(theLine => theLine).length === 5
//     )


//   }

//   render() {
//     return (
//       <div>
//         <textarea
//           rows="3"
//           cols="60"
//           value = {this.state.text}
//           onChange = {this.updateText}
//         />
//         <div
//           id="poem-validation-error"
//           style={{color: 'red'}}
//         >{this.state.validContent ? '' : 'This poem is not written in the right structure!'}
//         </div>
//       </div>
//     )
//   }
// }

// export default PoemWriter


import React from 'react';

const countWords = line => line.split(' ').filter(l => l).length;

const isValidPoem = poem => {
  if (poem) {
    const poemLines = poem.split('\n').filter(l => l);
    const isRightAmountOfLines = poemLines.length === 3;
    const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
    return isRightAmountOfLines && hasRightAmountOfWords;
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: true
    };
  }

  setPoemContent = event => {
    const content = event.target.value;

    this.setState({
      content,
      isValid: isValidPoem(content),
    });
  }

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" 
          value={this.state.content}
          onChange={this.setPoemContent} 
        />
        {!this.state.isValid &&
          <div 
            id="poem-validation-error" 
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;