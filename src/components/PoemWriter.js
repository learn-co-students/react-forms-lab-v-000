import React from "react";

const isValid = poem => {
  const rows = poem.split("\n").map(row => row.trim());
  const correctLength = rows.length === 3;
  if(poem && correctLength){
    return(
     rows[0].split(" ").length === 5 &&
     rows[1].split(" ").length === 3 &&
     rows[2].split(" ").length === 5
   )
 } else {
   return false;
  }

}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: true
    };
  }

   handleInputChange = event => {
    this.setState({
      value: event.target.value,
      valid: isValid(event.target.value)
    })
  }


  render() {
      return (
        <div>
         <textarea
           rows="3"
           cols="60"
           value={this.state.value}
           onChange={this.handleInputChange} />
           {!this.state.valid ?
         (<div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
         </div>) : null}
        </div>
      );
    }
 }

export default PoemWriter;
