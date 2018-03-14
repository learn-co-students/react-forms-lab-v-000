import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false
    };
  }

  handleChange = (e)=> {
    this.setState({poem: e.target.value}, ()=> {this.checkValidity()});
  }

  checkValidity = ()=> {
    const poemLines = this.state.poem.split('\n') || [];
    const valid = poemLines.length === 3 && 
                  [5,3,5].every((w, i)=> {
                    return poemLines[i].indexOf(' ') !== -1 && 
                    poemLines[i].match(/\w+/g).length === w
                  });
    console.log(valid)
    this.setState({valid: valid});
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange}/>
        { this.state.valid == false &&
          <div id="poem-validation-error" style={{ color: "red" }} >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
