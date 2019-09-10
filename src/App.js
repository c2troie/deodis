import React from 'react';
import './Assets/App.css';
import Tabletop from 'tabletop';
import Chart from "./Components/chart";

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
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
    setInterval((elm)=>{
      Tabletop.init({
        key: '1YYjr47ZPErnh1BYiJsgbHo_BXLGZ_iwtLxwuz4vSfUs',
        callback: googleData => {

          this.setState({
            data: googleData
          })
        },
        simpleSheet: true
      })
    },3000);
  }

  render() {
    console.log('updated state --->', this.state)
    const { data } = this.state;
    return (

        <div className="App">

          <Chart data={data}/>

        </div>
    );
  }
}

export default App;
