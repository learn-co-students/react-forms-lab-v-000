import React from 'react';

const trimInput = (input) => {
  return (input.split(' ').filter(function(e){if(e){return e;}}))
}

const lineValidation = (textInput) => {
  let rows = textInput.split('\n').filter(function(e){if(e){return e}});
  if(rows.length === 3){
    if(trimInput(rows[0]).length === 5 && trimInput(rows[1]).length === 3 && trimInput(rows[2]).length === 5){
      return true;
    }else{
      return false;
    }
  }  
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      validText: false
    };
  }
  
  handleTextInput = (event) => {
    this.setState({
      text: event.target.value
    });

    if(event.target.value === ""){
      this.setState({
        validText: false
      })
    }else{
      this.setState({
        validText: lineValidation(event.target.value)
      })
    }
  }

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleTextInput}
          value={this.state.text}
          rows="3"
          cols="60"
        />
        {this.state.validText ? '' :
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