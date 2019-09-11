import React from 'react';
import './Assets/App.css';
import Tabletop from 'tabletop';
import Chart from "./Components/chart";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainChart from "./Components/MainChart";
// https://docs.google.com/spreadsheets/d/1YYjr47ZPErnh1BYiJsgbHo_BXLGZ_iwtLxwuz4vSfUs/edit#gid=1249982404
// 1YYjr47ZPErnh1BYiJsgbHo_BXLGZ_iwtLxwuz4vSfUs/edit#gid=1249982404
//Token : 1YYjr47ZPErnh1BYiJsgbHo_BXLGZ_iwtLxwuz4vSfUs
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (

        <Router>
          <Switch>
            <Route exact path='/' component={MainChart}/>
            <Route path='/qcm' component={() => {
              window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScvDKJ_vId1fQ2uCm6Z_9Dzfgk0XAuIt7UjEt-U8tLF3RSwUg/viewform';
              return null;
            }}/>

          </Switch>
        </Router>
    );
  }
}

export default App;
