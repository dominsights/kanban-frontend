import "./createBoard.css";
import { Component } from "react";
import { Button, TextField } from "@mui/material";

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
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <br/>
          <TextField
            value={this.state.title}
            onChange={this.handleChange}
            variant="outlined"
            label="Board name"
          />
          <br />
          <Button type="submit" color="primary" variant="contained">
            Create
          </Button>
        </form>
    );
  }
}

export default CreateBoard;
