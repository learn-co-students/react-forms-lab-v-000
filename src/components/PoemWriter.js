import React from "react";

class PoemWriter extends React.Component {

  constructor() {
    super();
    this.state = {textarea: "",
       valid: false};
  }

  handleChange = e => {
     var str = e.target.value;
      this.setState({
        textarea: e.target.value
      })

      if(str.split("\n").length === 3)
      {
       var [line1, line2, line3] = str.split("\n").map(line => line.trim());

      if (line1.split(" ").length === 5 && line2.split(" ").length === 3 && line3.split(" ").length === 5)
      {
         this.setState({valid: true});
      }
    }
  }
  render() {
    var isNotValid = !this.state.valid;
    return (
      <div>
      <p>{this.state.textarea}</p>
        <textarea rows="3" cols="60" name="test-textarea" value={this.state.textarea}  onChange={this.handleChange}/>

        {(isNotValid) && <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written  in the right structure!
        </div>
}
      </div>
    );

}
}
export default PoemWriter;
