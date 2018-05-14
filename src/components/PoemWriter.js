import React from "react";

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
      this.handleChange = this.handleChange.bind(this);
    };

    handleChange = (event) => {
      this.setState({
        value: event.target.value,
      });
    };

  validPoem(text) {
    let lines = text.split("\n")
    if(lines.length === 3) {
      return true
    };
  };

  render() {
    let valid = this.validPoem(this.state.value)

    const validated = valid ? '' :
    (<div id="poem-validation-error" style={{ color: "red" }}>
    This poem is not written in the right structure!
    </div>)
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {validated}
      </div>
    );
  };
};
