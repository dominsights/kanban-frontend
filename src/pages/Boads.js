import "./Boards.css";
import GetBoards from "../components/getBoards/getBoards";
import { Component } from "react";
import CreateBoard from "../components/createBoard/createBoard";
import { createBoardApiMethod } from "../services/createBoard/api";
import { getBoardsApiMethod } from "../services/getBoards/api";
import { Container, Grid } from "@mui/material";

class Boards extends Component {
  render() {
    return (
      <Container>
        <Grid container>
          <Grid item>
            <GetBoards getBoardsApiMethod={getBoardsApiMethod} />
          </Grid>
          <Grid item xs={12}>
            <CreateBoard createBoardApiMethod={createBoardApiMethod} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Boards;
