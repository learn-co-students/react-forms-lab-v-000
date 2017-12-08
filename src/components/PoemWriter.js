import React from 'react';

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      showError: false
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
    console.log(this.poemValidator(event.target.value))
  }

  poemValidator(poem){
    const poemLines = poem.split("\n")
    if(poemLines.length != 3) {
      return false
    }
    else if(poemLines.map(line => line.split(" ").filter(word => word != '').length != ['5', '3', '5'])){
      {
        this.setState({
          showError: true
        })
      }
  }
  }

  render() {
    return (
      <div>
        <textarea
          value = {this.state.value}
          onChange = {this.handleChange}
          rows="3"
          cols="60"
        />
        {!this.state.showError &&
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
