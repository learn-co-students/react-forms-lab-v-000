import React from 'react';

function cleanLines(array){
  return array.map(line => {
    return line.trim().split(" ");
  })
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      validPoem: false
    };
  }

  handleChange = event => {
    this.setState({
      content: event.target.value
    })
    if(this.isValid(event.target.value)){
      this.setState({
        validPoem: true
      })
    } else {
      this.setState({
        validPoem: false
      })
    }
  }

  isValid = content => {
    var array = cleanLines(content.split('\n'));
    if(array.length !== 3){return false;}
    const line1 = array[0], line2 = array[1], line3 = array[2];

    if(line1.length !== 5){return false;}
    if(line2.length !== 3){return false;}
    if(line3.length !== 5){return false;}
    return true;
  }

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.content}
          rows="3"
          cols="60"
        />
        {!this.state.validPoem ? (<div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>) : null}
      </div>
    );
  }
}

export default PoemWriter;
