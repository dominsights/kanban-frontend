import logo from './logo.svg';
import './App.css';
import Boards from './pages/Boads';
import { Component } from 'react';

class App extends Component {


  render() {
    return (
      <div className="App">
        <main>
          <Boards />
        </main>
      </div>
    );
  }
}

export default App;
