
import './Boards.css';
import GetBoards from '../components/getBoards/getBoards';
import { Component } from 'react';
import CreateBoard from '../components/createBoard/createBoard';

class Boards extends Component {


  render() {
    return (
      <div className="Boards">
        <main>
            <CreateBoard />
            <GetBoards />
        </main>
      </div>
    );
  }
}

export default Boards;