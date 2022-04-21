import React, { useState } from "react";
import { InputBase, makeStyles, Typography } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";

const useStyle = makeStyles((theme) => ({
  displayTitleContainer: {
    margin: theme.spacing(1),
    display: "flex",
  },
  displayTitle: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  inputTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd",
    },
  },
}));

export default function Title() {
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            autoFocus
            value="Todo"
            inputProps={{
              className: classes.inputTitle
            }}
            fullWidth
            onBlur={() => setOpen(!open)}
          />
        </div>
      ) : (
        <div className={classes.displayTitleContainer}>
            <Typography
                onClick={() => setOpen(!open)}
                className={classes.displayTitle}
            >
                Todo
            </Typography>
            <MoreHoriz />
        </div>
      )}
    </div>
  );
}
