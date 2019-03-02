import React, { Component } from 'react';
import './App.css'
import Menu from './components/Menu/Menu'

import routers from './routers'
import { Switch, Route,BrowserRouter as Router } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              {this.showContentMenu(routers)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenu = (routers) => {
    var result = ' ';
    if (routers.length > 0) {
      result = routers.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return <Switch>{result}</Switch>

  }

}



export default App;
