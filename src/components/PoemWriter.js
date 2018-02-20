import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }
  
   handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }
  
  handleValidations = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    
    //line one 
    if(!textarea[0]){
      formIsValid = false;
      if(textarea[0].length != 5){
        formIsValid = false
      }
    }
  }
  

  render() {
    return (
      <div>
        <textarea 
        rows="3" 
        cols="60" 
        value={this.state.value}
        onChange={this.handleInputChange}
        />
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
