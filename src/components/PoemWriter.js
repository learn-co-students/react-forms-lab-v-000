import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      poemText: [],
    };
  }

  handleTextChange = event => {
    this.setState({
      value: event.target.value,
      poemText: event.target.value,     
    }); 
    
    
  }

  toggleHidden() {
    var lines = this.state.value.split("\n")
    
    if (lines[0]) {
      
      var line1 = lines[0].trim()
      var line1Words = line1.split(' ').length  
          
    }
    if (lines[1]) {
      var line2 = lines[1].trim()
      var line2Words = line2.split(' ').length  
          
    }
    if (lines[2]) {
      var line3 = lines[2].trim()
      var line3Words = line3.split(' ').length  
          
    }
    
    console.log('lines.length', lines.length)

    if (lines.length === 3 && (line1Words ===5 && line2Words === 3 && line3Words === 5)) {
      return true;
    
    } else if (this.state.value === '') {
        return false;
    
    } else {
      return false;
    
    }
    }
        
    
    
  

  render() {
    if (this.toggleHidden()) {
       return (     
        <div>
        <textarea 
          rows="3" 
          cols="60"      
          id="texta"     
          name="textarea"
          value={this.state.value}
          onChange={this.handleTextChange}
        />
        </div>
      )
    } else {
      return (
        <div>
        <textarea 
          rows="3" 
          cols="60"      
          id="texta"     
          name="textarea"
          value={this.state.value}
          onChange={this.handleTextChange}
        />

        <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div>
      </div>
        )
    }
    
  }
}



export default PoemWriter;