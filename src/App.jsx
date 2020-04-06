import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>

        <video id="video" width="360" height="280" autoPlay muted></video>
      </div>
    );
  }
}

export default App;
