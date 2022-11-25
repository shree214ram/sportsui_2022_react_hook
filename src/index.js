import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Switch, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import Leaderboard from './Leaderboard';
import reportWebVitals from './reportWebVitals';
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "./NotFound";

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <br />
      <React.StrictMode>
        <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/schedule" component={App} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route component={NotFound} />
          </Switch>
        </div>
      </React.StrictMode>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();