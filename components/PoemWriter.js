const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      errorState: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.checkForErrors = this.checkForErrors.bind(this);
  }

  checkForErrors(event){
    const text = event.target.value;
    let error = true;

    if (text) {
      const lines = text.trim().split('\n');
      const [line1, line2, line3] = lines.map(line => {
        return line.trim().split(/\s+/).length;
      });

      if (line1 === 5 && line2 == 3 && line3 == 5) {
        error = false;
      }
    }

    this.setState({
      errorState: error
    })

  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })

    this.checkForErrors(event);
  }

  validate(){
    if (this.state.errorState) {
      return (
        <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        { this.validate() }
      </div>
    );
  }
}

module.exports = PoemWriter;
