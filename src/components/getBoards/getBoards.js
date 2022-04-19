import "./getBoards.css";
import { Component } from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

class GetBoards extends Component {
  state = {
    boards: [],
  };

  componentDidMount() {
    this.handleGetBoards();
  }

  handleGetBoards = async () => {
    try {
      var boards = await this.props.getBoardsApiMethod();
      this.setState({ boards: boards });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
        <Grid container spacing={2}>
          {this.state.boards.map((board) => (
            <Grid item key={board.title}>
              <Card elevation={1}>
                <CardContent><Typography>{board.title}</Typography></CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
    );
  }
}

export default GetBoards;
