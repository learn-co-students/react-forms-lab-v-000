import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false
    };
  }
  handleChange = (event)=> {
    var input = event.target.value;
    this.setState({poem: input,})
    if (input.split('\n').length === 3) {
      var [line1, line2, line3] = input.split('\n').map(line => line.trim());
      if (line1.split(" ").length === 5 && line2.split(" ").length === 3 && line3.split(" ").length === 5) {
        this.setState({ isValid: true})
      }
    }
  }

  render() {
    const isEmpty = !this.state.poem
    const isntValid = !this.state.isValid
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange}/>
        {(isntValid || isEmpty) && <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
