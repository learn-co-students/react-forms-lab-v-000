import React from 'react';


function isValidPoem(poem){
  var lines = poem.trim().split('\n')
  if (lines.length === 3){
    if (lines[0].trim().split(" ").length === 5){
      if (lines[1].trim().split(" ").length === 3){
        if (lines[2].trim().split(" ").length === 5){
          return true
        }
      }
    }
  }
  return false

}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false,
    };
  }



  handleInputChange = event => {

    this.setState({
      value: event.target.value,
      isValid: isValidPoem(event.target.value),
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleInputChange}
          value={this.state.value}
        />
        {!this.state.isValid ? <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div> :null }
      </div>
    );
  }
}

export default PoemWriter;