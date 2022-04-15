import logo from './logo.svg';
import './App.css';
import GetBoards from './components/getBoards/getBoards';
import { Component } from 'react';

class App extends Component {


  render() {
    return (
      <div className="App">
        <main>
          <GetBoards />
        </main>
      </div>
    );
  }
}

export default App;
