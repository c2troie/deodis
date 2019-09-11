import Sugar from 'sugar';
import React from 'react';
import CanvasJSReact from '../Lib/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Sug = new Sugar();

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            resultat: [],
            pourcentageTotal: 0
        }


    }

    async UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        this.setState({data:nextProps.data});
        let ParseData = await this.printData(nextProps.data);
        let getPourcentageScore = await this.getScoreTotal(nextProps.data);
        this.setState({resultat:ParseData});
        this.setState({pourcentageTotal:getPourcentageScore});
    }

    async printData(element){
        let resultat = [];
        let name = element.map((item,i)=>{
            return item.Prenom
        });
        let score = element.map((item,i)=>{
            return item.Score.slice(0,2);
        });
        const parsScore = score.map((item,i)=>{
            let iScore = Sug.Object.add({y:item});
            //console.log('iName',iName);
            return iScore;
        });
        const parsName = name.map((elm,i)=>{
            let iName = Sug.Object.add({name:elm});
            //console.log('iScore',iScore);
            return iName;
        });

        for (let i = 0; i < parsScore.length; i++) {
            let obj = Sug.Object.add({name:parsName[i].name},{y:parsScore[i].y});
            resultat.push(obj);
        }
        return resultat;
    }

    async getScoreTotal(element){
        let score='';
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let getScore = element.map((element)=>{
            return parseInt(element.Score.slice(0,2),10);
        });
        let totalScore = getScore.reduce(reducer);
        score = totalScore / getScore.length;
        return score;
    }

    render() {
        const options = {
            height:600,
            theme: "light1",
            zoomEnabled:true,
            animationEnabled: true,
            title: {
                text: "Resultats "
            },
            subtitles: [{
                text: Math.round(this.state.pourcentageTotal) + "% Positive",
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true,

            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#,###'%'",
                dataPoints: this.state.resultat
            }]
        }
        return (
            <div>
                <CanvasJSChart options = {options}
                    /* onRef={ref => this.chart = ref} */
                />
            </div>
        );
    }
}
export default Chart;