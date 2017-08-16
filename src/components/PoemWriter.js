import React from 'react';

function isValidPoem(content) {
  const lines = content.split("\n").filter(l => l)
  if (
      lines.length === 3 &&
      lines[0].split(" ").filter(l => l).length === 5 &&
      lines[1].split(" ").filter(l => l).length === 3 &&
      lines[2].split(" ").filter(l => l).length === 5
      ) {
      return true;
    }
 return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };

    this.poemTextChange = this.poemTextChange.bind(this);
  }

  poemTextChange = event => {
    const content = event.target.value
    if (content) {
      this.setState({
        value: content,
        isValid: isValidPoem(content),
      });
    }
    debugger
  } 

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" 
          placeholder="Your magnificent poetry here"
          value={this.state.value} 
          onChange={this.poemTextChange}
        />
        <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
        {(this.state.isValid) ? null : "This poem is not written in the right structure!" }  
        </div>
      </div>
    );
  }
}

export default PoemWriter;