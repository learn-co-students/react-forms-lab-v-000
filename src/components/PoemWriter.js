import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textarea: '',
      valid: true
    };
  }

  handleChange = event =>{
    this.setState({ 
    textarea: event.target.value,
    valid: this.isValid(event.target.value)
     })
  }
  isValid = text => {
   var array = text.trim().split('\n')
   if(array.length === 3){
  var mod  =  array.map((phrase)=>{ return phrase.trim().split(" ")})
   return mod[0].length === 5 &&  mod[1].length === 3 && mod[2].length === 5
   }
   return false
  }
  

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} value={this.state.value}
          rows="3"
          cols="60"
        />
      {!this.state.valid &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            "This poem is not written in the right structure!"
          </div>
        }
  
      </div>
    );
  }
}

export default PoemWriter;
