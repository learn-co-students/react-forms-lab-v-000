const React = require('react');

function validPoem(poem) {
  var lines = poem.split("\n").filter(l => l)
  if (lines.length === 3) {
    var line1 = lines[0].split(" ").filter(l => l).length
    var line2 = lines[1].split(" ").filter(l => l).length
    var line3 = lines[2].split(" ").filter(l => l).length
    if (line1 === 5 && line2 === 3 && line3 === 5) {
      return true
    }
  }
  return false
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.changeHandler = this.changeHandler.bind(this)

    this.state = {
      value: "",
      valid: false
    };

  }

  changeHandler(event) {
    this.setState({
      value: event.target.value,
      valid: validPoem(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.changeHandler}/>
        {this.state.valid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

module.exports = PoemWriter;
