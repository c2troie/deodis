import React from 'react';
import '../Assets/App.css';
import Tabletop from 'tabletop';
import Chart from "../Components/chart";

// https://docs.google.com/spreadsheets/d/1YYjr47ZPErnh1BYiJsgbHo_BXLGZ_iwtLxwuz4vSfUs/edit#gid=1249982404
// 1YYjr47ZPErnh1BYiJsgbHo_BXLGZ_iwtLxwuz4vSfUs/edit#gid=1249982404
//Token : 1YYjr47ZPErnh1BYiJsgbHo_BXLGZ_iwtLxwuz4vSfUs
class MainChart extends React.Component {
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
                <p>
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScvDKJ_vId1fQ2uCm6Z_9Dzfgk0XAuIt7UjEt-U8tLF3RSwUg/viewform">ACCEDER AU QCM</a>

                </p>

            </div>
        );
    }
}
export default MainChart;
