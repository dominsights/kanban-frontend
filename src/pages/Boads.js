
import './Boards.css';
import GetBoards from '../components/getBoards/getBoards';
import { Component } from 'react';
import CreateBoard from '../components/createBoard/createBoard';
import { createBoardApiMethod } from '../services/createBoard/api'
import { getBoardsApiMethod } from '../services/getBoards/api'

class Boards extends Component {

  render() {
    return (
      <div className="Boards">
        <main>
            <CreateBoard createBoardApiMethod={createBoardApiMethod} />
            <GetBoards getBoardsApiMethod={getBoardsApiMethod} />
        </main>
      </div>
    );
  }
}

export default Boards;