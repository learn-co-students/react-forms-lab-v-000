import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {value: "", valid: false};
  }

  checkValidity = (val) => {
    let lines = val.split('\n')

    if(lines.length !== 3){
      return false
    }

    return lines.every(function(line, index){
      return (index % 2 === 0 && line.trim().split(" ").length === 5) || (line.trim().split(" ").length === 3)
    })
  }

  handleChange = (e) => {
    let val = e.target.value
    this.setState({ value: val })
    console.log(this.checkValidity(val))
    if(this.checkValidity(val)){
      this.setState({ valid: true})
    }
  }


  render() {
    const {value, valid } = this.state
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={value}
          onChange={this.handleChange}
        />
        {!valid &&
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
