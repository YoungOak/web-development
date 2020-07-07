import React, { Component } from "react";
import {Bar, Pie, Line} from 'react-chartjs-2';
import { Dropdown, Button } from 'semantic-ui-react';

class DropChart extends Component{

    constructor (props) {
        super(props)
        this.url = this.props.data
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
                    labels: this.state.data[this.state.choice].map(d => new Date(d["dateRep"])),
                    datasets: [{
                        label: 'Casos',
                        data: this.state.data[this.state.choice].map(d => d["cases"]),
                        borderColor: "#3e95cd",
                        fill: false
                    }]
                }
            })
        })
    }

    update = (e, {value}) => {this.setState({
        choice: value,
        chartData: {
            labels: this.state.data[value].map(d => new Date(d["dateRep"])),
            datasets: [{
                label: 'Casos',
                data: this.state.data[value].map(d => d["cases"]),
                borderColor: "#3e95cd",
                fill: false
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
                    options = {{
                        title: {
                            display: true,
                            text: this.state.choice,
                            fontSize: 25
                        },
                        legend: {
                            display: false
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
                />    
            </div>
        )
    };
}


export default DropChart;