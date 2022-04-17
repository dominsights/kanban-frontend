import "./createBoard.css";
import { Component } from "react";

class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    this.props.createBoardApiMethod(this.state.title);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Create" />
      </form>
    );
  }
}

export default CreateBoard;
