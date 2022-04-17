import "./Boards.css";
import GetBoards from "../components/getBoards/getBoards";
import { Component } from "react";
import CreateBoard from "../components/createBoard/createBoard";
import { createBoardApiMethod } from "../services/createBoard/api";
import { getBoardsApiMethod } from "../services/getBoards/api";
import { Grid } from "@mui/material";

class Boards extends Component {
  render() {
    return (
      <div className="Boards">
        <main>
          <Grid container>
            <Grid item xs={12}>
              <CreateBoard createBoardApiMethod={createBoardApiMethod} />
            </Grid>
            <Grid item>
              <GetBoards getBoardsApiMethod={getBoardsApiMethod} />
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default Boards;
