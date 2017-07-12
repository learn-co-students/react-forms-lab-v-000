import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemContent: "",
      poemValid: false,
      errorMessage: "This poem is not written in the right structure!"
    };

    this.changePoem = this.changePoem.bind(this)
    this.evaluatePoem = this.evaluatePoem.bind(this)
    this.displayError = this.displayError.bind(this)
  }

  changePoem = (e) => {
    const content = e.target.value
    this.setState({
      poemContent: content
    })
    this.evaluatePoem(content)
  }


  evaluatePoem = (content) => {
    var lines = content.split("\n")
    if (lines.length === 3) {
        if (lines[0].trim().split(" ").length === 5 && lines[1].trim().split(" ").length === 3 && lines[2].trim().split(" ").length === 5) {
            this.setState({poemValid: true})
        } else {
          this.setState({poemValid: false,
          errorMessage: "This poem is not written in the right structure!"})
        }
    } else {
      this.setState({poemValid: false,
      errorMessage: "This poem is not written in the right structure!"})
    }
    };

  displayError = () => {
    if (!this.state.poemValid){
      return( 
              <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
          {this.state.errorMessage}
        </div>)
    }else {
      return ""
    } 
  }


  render() {

    return (
      <div>
        <textarea value={this.state.poemContent} onChange={this.changePoem}
          rows="3" 
          cols="60" 
        />
          {this.displayError()}
      </div>
    );
  }
}

export default PoemWriter;