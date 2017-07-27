import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      area: "",
      poem: [],
    };

    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.validStructure = this.validStructure.bind(this);
  }

  validStructure() {
    if(this.state.poem.length > 2 &&
      this.state.poem[0].trim().split(/[\s]/).length === 5 &&
      this.state.poem[1].trim().split(/[\s]/).length === 3 &&
      this.state.poem[2].trim().split(/[\s]/).length === 5){
        return true;
    }
    else{
      return false;
    }
  }

  handleAreaChange(event) {
    this.setState({
      area: event.target.value,
      poem: event.target.value.split(/[\n]/),
    });
  }

  render() {

    var message = React.createElement('div',{
      id: "poem-validation-error",
      style:{color: 'red'}
    },"This poem is not written in the right structure!")

    if(this.validStructure()){
      message = "";
    }

    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.area}
          onChange={this.handleAreaChange}
        />

        {message}

        <p>{this.state.poem[0]}</p>
        <p>{this.state.poem[1]}</p>
        <p>{this.state.poem[2]}</p>
      </div>
    );
  }
}

export default PoemWriter;
