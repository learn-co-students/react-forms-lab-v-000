import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      hide: false
    };

    this.handleChange = this.handleChange.bind(this)
    this.validation = this.validation.bind(this)
  }

  validation(poem){
    let lines = poem.split('\n')
    let words = [];
    if (lines.length === 3){
      for(let i = 0; i < 3; i++){
        words.push(lines[i].split(/\b\s\b/).length)
      }
    }
    return (words[0] === 5 && words[1] === 3 && words[2] === 5) ? true : false;
  }

  handleChange(event){
    this.setState({poem: event.target.value});
    if (this.validation(event.target.value)){
      this.setState({hide: true})
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange}/>
        {!this.state.hide &&
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
