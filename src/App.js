import React, { Component } from 'react'
import { Router, Route } from "react-router-dom"
import LoginPage from './page/login/LoginPage'
import HomePage from './page/Home/HomePage'
import './App.css'
import history from './history/history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={HomePage}/>
        </div>
      </Router>
      
    )
  }
}

export default App
