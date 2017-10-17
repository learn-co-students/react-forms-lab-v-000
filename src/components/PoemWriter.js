import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      error: true,
    };
  }

  handlePoem = (event) => {
    this.setState({
      ...this.state,
      poem: event.target.value,
    });
    var enteredText = event.target.value;
    if (enteredText == "") {
      console.log(enteredText);
    } else {
      var arrayOfLines = enteredText.match(/[^\r\n]+/g);
      if (arrayOfLines.length != 3) {
        this.setState({
          ...this.state,
          error: true,
        })
      } else if (arrayOfLines.length === 3) {
        var firstLine = arrayOfLines[0].trim().split(' ').length;
        var secondLine = arrayOfLines[1].trim().split(' ').length;
        var thirdLine = arrayOfLines[2].trim().split(' ').length;
        console.log(firstLine);
        this.setState({
          ...this.state,
          error: false,
        })
        console.log(this.state.error);
      }
    }
  }

  handleErrors = (poem) => {

  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handlePoem}/>
         {this.state.error && <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div> }

      </div>
    );
  }
}

export default PoemWriter;
