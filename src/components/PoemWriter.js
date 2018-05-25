import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isHidden: false
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
    this.validatePoem(event)
  }

  validatePoem = event => {
    // debugger;
    let lineCount = event.target.value.split('\n').length;
    if (lineCount === 3) {
      let firstLineArr = event.target.value.split('\n')[0].split(/\s+\b/).filter(n=>n)
      let secondLineArr = event.target.value.split('\n')[1].split(/\s+\b/).filter(n=>n)
      let thirdLineArr = event.target.value.split('\n')[2].split(/\s+\b/).filter(n=>n)
      if ((firstLineArr.length === 5) && (secondLineArr.length === 3) && (thirdLineArr.length === 5)){
        this.setState({
          isHidden: true,
        })
      } else {
        this.setState({
          isHidden: false,
        })
      }
    } else {
      this.setState({
        isHidden: false,
      })
    }

      // event.target.value.match(/\s*\S+\s+\S+\s+\S+\s+\S+\s+\S+\s*\n\s*\S+\s+\S+\s+\S+\s*\n\s*\S+\s+\S+\s+\S+\s+\S+\s+\S+\s*$/)

  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        {this.state.isHidden ? null :
            <div id="poem-validation-error" style={{ color: "red" }}>
              This poem is not written in the right structure!
            </div>
          }
      </div>
    );
  }
}

const ErrorDiv = () => {
  return(
  <div id="poem-validation-error" style={{ color: "red" }}>
    This poem is not written in the right structure!
  </div>)
}

export default PoemWriter;
