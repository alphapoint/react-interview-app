import React, {Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import Routes from './routes';
import NavbarComponent from "./components/navbar-component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
          <NavbarComponent />
        </AppBar>
        <Routes/>
      </div>
    );
  }
}


export default App;
