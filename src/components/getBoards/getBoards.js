import './getBoards.css';
import { Component } from 'react';

class GetBoards extends Component {
    state = {
        boards: []
      }

    componentDidMount() {
        this.handleGetBoards();
    }

    handleGetBoards = async () => {
        try {
            var boards = await this.props.getBoardsApiMethod();
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