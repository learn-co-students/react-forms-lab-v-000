import React from "react";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

class TwitterMessage extends React.Component {

  constructor(){
    super();
    this.state = {
      input:"",
    lessThanmax: true
      }
    }


   handleChange = event => {
     var input = event.target.value;
     var maxChars = this.props.maxChars;
     if(input.length <= maxChars)
        this.setState({
         input: input })
     else
     {
       this.setState({lessThanmax:false});
     }
   }

  render() {
    var remaining = this.props.maxChars - this.state.input.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
         value={this.state.input}
         onChange={this.handleChange}/>
         <p>{remaining} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
