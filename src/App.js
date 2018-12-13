import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LoginPage from './page/login/LoginPage'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
      
    )
  }
}

export default App
