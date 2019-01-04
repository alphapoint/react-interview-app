import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { simpleAction } from "./actions/simple-action";

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{textAlign: 'left'}}>
            <button onClick={this.simpleAction}>Load Movies</button>
            <ul>
              {
                this.props.simpleReducer.map(movie => {
                  return (
                    <li key={movie.episode_id}>{ movie.title }</li>
                  )
                })
              }
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
