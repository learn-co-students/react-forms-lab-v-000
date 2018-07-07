import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      isError: true
    };
  }

  properPoem(str) {
    const noWhiteSpace = str.replace(/\n/g, " ").split(" ").map(function(el){return el.trim()})
    const justWords = noWhiteSpace.filter(function(el){return el !== ""})
    if (justWords.length === 13){
      this.setState({isError: false})
    } else {
      this.setState({isError: true})
    }
  }

  handleChange = e => {
    this.properPoem(e.target.value)
    this.setState({
      value: e.target.value
    })
  }


  render() {
    console.log(this)
    let style = this.state.isError ? {color: "red"} : {display: "none"}
    if (this.state.isError){
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
          <div id="poem-validation-error" style={style}>
            This poem is not written in the right structure
          </div>
        </div>
      )
    } else {
      return(
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
      )
    }
  }
}

export default PoemWriter;
