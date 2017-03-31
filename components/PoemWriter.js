const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      errorMessage: "This poem is not written in the right structure!"
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    const poem = event.target.value.trim().split("\n");

    if(poem.length === 3 && poem[0].trim().split(" ").length === 5 && poem[1].trim().split(" ").length === 3 && poem[2].trim().split(" ").length === 5) {
      this.setState({
        value: event.target.value,
        errorMessage: ''
      });
    } else {
      this.setState({
        value: event.target.value,
        errorMessage: "This poem is not written in the right structure!"
      });
    }
  }

  render() {

    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.updateState} />
        <div id="poem-validation-error" style={{color: 'red'}}>{this.state.errorMessage}</div>
      </div>
    );
  }
}

module.exports = PoemWriter;
