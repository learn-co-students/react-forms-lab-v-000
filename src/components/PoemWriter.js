import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      message: false
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
      message: this.error(e.target.value)
    })
  }
  
  error = (e) => {
    let words = (line) => line.split(" ").filter(v=> v).length
    let lines = (e) => e.split(/\n/).filter(n=>n)
    var line_array = e.split(/\n/).filter(n=>n)
    console.log(line_array) 
    if (line_array.length == 3) {
      if (words(line_array[0]) == 5 && words(line_array[1]) == 3 && words(line_array[2]) == 5) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  render() {
    return (
      <div >
        <textarea onChange={this.handleChange} value={this.state.text}
          rows="3" 
          cols="60" 
        />

        {(this.state.message) ? null : <div 
          id="poem-validation-error" 
          style={{color: 'red'}}

        >
          'This poem is not written in the right structure!'
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
