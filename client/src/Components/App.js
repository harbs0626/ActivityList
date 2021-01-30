import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          {/* --Header/NavBar-- */}
          <Header 
            defaultUrl="/" 
            loginUrl="/Login"
            registerUrl="/Register">
          </Header>

          {/* --Content-- */}
          <div className="content">
            <Route exact path="/" component={Home}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/Register" component={Register}></Route>
          </div>        
        </HashRouter>
      </>
    );
  }
}

export default App;
