import logo from "./logo.svg";
import "./App.css";
import Boards from "./pages/Boads";
import Board from "./pages/Board";
import { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
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
}

export default App;
