import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';
// https://docs.google.com/spreadsheets/d/1YYjr47ZPErnh1BYiJsgbHo_BXLGZ_iwtLxwuz4vSfUs/edit#gid=1249982404
// 1YYjr47ZPErnh1BYiJsgbHo_BXLGZ_iwtLxwuz4vSfUs/edit#gid=1249982404
//Token : 1YYjr47ZPErnh1BYiJsgbHo_BXLGZ_iwtLxwuz4vSfUs
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    Tabletop.init({
      key: '1YYjr47ZPErnh1BYiJsgbHo_BXLGZ_iwtLxwuz4vSfUs',
      callback: googleData => {
        console.log('google sheet data --->', googleData)
      },
      simpleSheet: true
    })
  }

  render() {
    console.log('updated state --->', this.state)
      const { data } = this.state;
    return (

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React + Google Sheets Demo</h1>
          </header>
            {data.length <= 1 ?
                <div>
                    <h1 className="App-title">
                        fef
                    </h1>
                </div>
            :null}
        </div>
    );
  }
}

export default App;
