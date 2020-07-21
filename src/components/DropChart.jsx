import React, { Component } from "react";
import {Chart, Bar, Pie, Line} from 'react-chartjs-2';
import { Dropdown, Button } from 'semantic-ui-react';

class DropChart extends Component{

    constructor (props) {
        super(props)
        this.url = this.props.data
        this.x = this.props.x
        this.y = this.props.y
        this.state = {
            choice: "None",
            chartData: {},
            data: [{}],
            dropMenuData: []
            }
    }
    
    async componentDidMount() {
        fetch(this.url)
            .then((response) => response.json())
            .then(data => {
            this.setState({
                data: data,
                dropMenuData: Object.keys(data),
                choice: Object.keys(data)[0]
                });
            this.setState({
                chartData: {
                    labels: this.state.data[this.state.choice].map(d => new Date(d[this.x])),
                    datasets: [{
                        label: 'Casos Suavizados',
                        data: this.state.data[this.state.choice].map(d => d["smooth_"+this.y]),
                        borderColor: "#3e95cd",
                        fill: false
                    },{
                        label: 'Casos Diarios',
                        data: this.state.data[this.state.choice].map(d => d[this.y]),
                        borderColor: "#0195cd",
                        backgroundColor: "#d1f2eb ",
                        fill: true,
                        type: "bar"
                    }]
                }
            })
        })
    }

    update = (e, {value}) => {this.setState({
        choice: value,
        chartData: {
            labels: this.state.data[value].map(d => new Date(d[this.x])),
            datasets: [{
                label: 'Casos Suavizados',
                data: this.state.data[value].map(d => d["smooth_"+this.y]),
                borderColor: "#3e95cd",
                fill: false
            },{
                label: 'Casos Diarios',
                data: this.state.data[value].map(d => d[this.y]),
                borderColor: "#0195cd",
                backgroundColor: "#d1f2eb ",
                fill: true,
                type: "bar"
            }]
        }
        }
    )}


    render() {
        return (
            <div className="Chart">
                <Dropdown
                    placeholder = {this.state.choice}
                    options = {this.state.dropMenuData.map((value, index) => ({"key": index, "text": value, "value": value}))}
                    fluid
                    search
                    selection
                    onChange = {this.update}
                    noResultsMessage="Ninguna opción coincide..."
                />
                <Line
                    data = {this.state.chartData}
                    responsive = {true}
                    maintainAspectRatio = {true}
                    options = {{
                        responsive: true,
                        maintainAspectRatio: true,
                        title: {
                            display: true,
                            text: this.state.choice,
                        },
                        layout: {
                            padding: 20
                        },
                        legend: {
                            display: true,
                            padding: 10
                        },
                        scales: {
                            xAxes: [{
                                type: "time",
                                time: {
                                    unit: 'month'
                                }
                            }]
                        },
                    }}
                    plugins = {[{
                        resize: function(c, o) {
                            var chartHeight = c.chart.height;
                            var size = chartHeight*0.04;
                            c.scales['y-axis-0'].options.ticks.minor.fontSize = size;
                            c.scales['x-axis-0'].options.ticks.minor.fontSize = size;
                        }
                    }]}
                />    
            </div>
        )
    };
}


export default DropChart;