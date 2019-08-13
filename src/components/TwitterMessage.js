import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      // username: 'candycrazed',
      // message: 'Trying not to make the news drive me crazy today',
      message: '',
      // password: 'Candycrusher2019!'
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {/* <form> */}
          <input 
            type="text"
            name="message" 
            id="message" />
        {/* </form> */}
      </div>
    );
  }
}

export default TwitterMessage;
