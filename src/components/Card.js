import { makeStyles, Paper } from "@mui/material";
import React from "react";

const useStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1)
  }
}));

export default function Card() {
  const classes = useStyle();

  return (
    <div>
      <Paper className={classes.card}>Study Akka</Paper>
    </div>
  );
}
