import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isPoemCorrect: true
    };
  }

  handleOnChange = event => {
    var valueArray = event.target.value.split('\n')
    if (valueArray.length == 3) {
      var line1 = valueArray[0].split(" ").filter(word => word != "");
      var line2 = valueArray[1].split(" ").filter(word => word != "");;
      var line3 = valueArray[2].split(" ").filter(word => word != "");;
      //console.log(line1)
      //console.log(line2)
      //console.log(line3)
      if (line1.length == 5 && line2.length == 3 && line3.length == 5) {
        this.setState({
          value: event.target.value,
          isPoemCorrect: true
        })
      } else {
        this.setState({
          isPoemCorrect: false
        })
      }

    } else {
      this.setState({
        isPoemCorrect: false
      })
    }
  }



  render() {

    let errorDiv = null

    //console.log(this.state.isPoemCorrect)

    if(this.state.isPoemCorrect == true) {

    } else {
      errorDiv = <div
              id="poem-validation-error"
              style={{color: 'red'}}
            >
              This poem is not written in the right structure!
            </div>
      }

      return (
        <div>
          <textarea
            rows="3"
            cols="60"
            onChange={this.handleOnChange}
          />
          {errorDiv}
        </div>
        );
  }
}

export default PoemWriter;
