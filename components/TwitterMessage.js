import React from 'react';

function underTen(sentence){
 return sentence.target.value.length > 10 ? true : false
}

class TwitterMessage extends React.Component{
  constructor(){
    super();

    this.state = {
      inputlength: 0,
      warning: false
    }

    this.updateCount = this.updateCount.bind(this)
  }

  updateCount(event){
    console.log(underTen(event))
   this.setState({
     inputlength: event.target.value.length,
     warning: underTen(event),
   })
  }

  render(){
    return(
      <div>
        <input onChange={this.updateCount} />
        {this.state.warning ? <h3 style={{color: 'red'}}>Characters Left: {this.props.characters - this.state.inputlength}</h3> : <h3>Characters Left: {this.props.characters - this.state.inputlength}</h3>}
      </div>
    )
  }
}

TwitterMessage.defaultProps = {
  characters: 20
}


module.exports = TwitterMessage;
