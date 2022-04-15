import './getBoards.css';
import { Component } from 'react';
import { getBoardsApiMethod } from '../../services/getBoards/getBoards'

class GetBoards extends Component {
    state = {
        boards: []
      }

    componentDidMount() {
        this.handleGetBoards();
    }

    handleGetBoards = async () => {
        try {
            var boards = await getBoardsApiMethod();
            this.setState({boards: boards})
        } catch (err) {
            console.error(err)
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.boards.map((board) => 
                        <li>{board.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default GetBoards;