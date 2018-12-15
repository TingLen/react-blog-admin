import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LoginPage from './page/login/LoginPage'
import HomePage from './page/Home/HomePage'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={HomePage}/>
        </div>
      </Router>
      
    )
  }
}

export default App
