import React, { Component } from 'react';
import { ChatBot} from 'aws-amplify-react';

import './App.css';

class App extends Component {

  handleComplete(err, confirmation) {
    if (err) {
      alert('Bot conversation failed');
      return;
    }

    alert('Success: ' + JSON.stringify(confirmation, null, 2));
    return 'Reservation booked. Thank you! What would you like to do next?';
  }
  
  render() {
    return (
      <div className="App">
        <ChatBot
          title="My React Bot"
          botName="BookTripReactMOBILEHUB"
          welcomeMessage="Welcome, how can i help you today?"
          onComplete={this.handleComplete.bind(this)}
          clearOnComplete={true}
        />
      </div>
    );
  }
}

export default App;
