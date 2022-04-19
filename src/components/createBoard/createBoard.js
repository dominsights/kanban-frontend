import "./createBoard.css";
import { Component } from "react";
import { Button, Container, TextField } from "@mui/material";

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
      <Container>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <TextField
            value={this.state.title}
            onChange={this.handleChange}
            variant="outlined"
            label="Board name"
          />
          <Button type="submit" color="primary" variant="contained">
            Create
          </Button>
        </form>
      </Container>
    );
  }
}

export default CreateBoard;
