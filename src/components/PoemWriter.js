import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      valid: false,
    };
  }

  handleChange = (event) => {
    var myPoem = event.target.value
    this.setState({
      text: myPoem,
      valid: this.validPoem(myPoem)
    })
  }

  validPoem = (poem) => {
    const pattern = /(\w+\s+){5}(\w+\s+){3}(\w+\s+){5}/
    return pattern.test(poem)
  }

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" 
          value = {this.state.text}
          onChange = {this.handleChange}
        />
        {!this.state.valid ?
        <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
          type = "hidden"
        >
          This poem is not written in the right structure!
        </div> : null }
      </div>
    );
  }
}

export default PoemWriter;