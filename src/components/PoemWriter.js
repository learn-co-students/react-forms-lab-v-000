import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      display: true
    };
  }
  checkPoem = (event) => {
    this.setState({
      value: event.target.value
    })
    let poem = event.target.value.split(/\r\n|\r|\n/)
    if (poem.length === 3 && poem[0].trim().split(' ').length === 5 && poem[1].trim().split(' ').length === 3 && poem[2].trim().split(' ').length === 5) {
          this.setState({
            display: false
          })

    } else {
      this.setState({
        display: true
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.checkPoem}/>
        {this.state.display ?
          <div id="poem-validation-error" style={{color: "red"}}>
          This poem is not written in the right structure!
        </div> : null}
      </div>
    );
  }
}

export default PoemWriter;
