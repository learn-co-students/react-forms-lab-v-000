import React from 'react';

const linesThree = (poem) => {
   return poem.split(/\n/).length === 3;
 }
 const firstIsFive = (poem) => {
   return poem.split(/\n/)[0].trim().split(' ').length === 5;
 }
 const secondIsThree = (poem) => {
   return poem.split(/\n/)[1].trim().split(' ').length === 3;
 }
 const thirdIsFive = (poem) => {
   return poem.split(/\n/)[2].trim().split(' ').length === 5;
 }
 // const wordCount = this.state.content.split(/\n/).join(' ').split(' ').length;
 const isValidPoem = (poem) => {
   return linesThree(poem) && firstIsFive(poem) && secondIsThree(poem) && thirdIsFive(poem)
 }
 
class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
       content: '',
       isValid: false,
     };
   }
 
   updatePoem = (event) => {
     const content = event.target.value;
     this.setState( {
       content: content,
       isValid: isValidPoem(content)
     })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.updatePoem}
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
