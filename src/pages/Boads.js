import "./Boards.css";
import GetBoards from "../components/getBoards/getBoards";
import CreateBoard from "../components/createBoard/createBoard";
import { getBoardsApiMethod, createBoardApiMethod } from "../services/kanbanApi";
import { Container, Grid } from "@mui/material";
import React from "react";

export default function Boards() {
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
