import "./App.css";
import Boards from "./pages/Boads";
import Board from "./pages/Board";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";


export default function App() {


  return (
    <div className="App">
      <main>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Kanban Board
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Boards />} />
            <Route path="/board/:name" element={<Board />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}
