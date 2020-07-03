import React, { Component } from "react";
import {Bar, Pie, Line} from 'react-chartjs-2';
import { Dropdown, Button } from 'semantic-ui-react';

class DropChart extends Component{

    constructor (props) {
        super(props)
        this.dropMenuData = Object.keys(this.props.data)
        this.db = this.props.data
        this.state = {
            choice: "Afghanistan",
            chartData: {}
            }
        
        this.state["chartData"] = {
            labels: this.db[this.state.choice].map(d => new Date(d["dateRep"])),
            datasets: [{
                label: 'Casos',
                data: this.db[this.state.choice].map(d => d["cases"]),
                borderColor: "#3e95cd",
                fill: false
            }]
        }
    }
    
    test = (e, {value}) => console.log(value)

    update = (e, {value}) => {this.setState({
        choice: value,
        chartData: {
            labels: this.db[value].map(d => new Date(d["dateRep"])),
            datasets: [{
                label: 'Casos',
                data: this.db[value].map(d => d["cases"]),
                borderColor: "#3e95cd",
                fill: false
            }]
        }
    })}


    render() {
        return (
                <div className="Chart">
                        <Dropdown
                            placeholder = {this.state.choice}
                            options = {this.dropMenuData.map((value, index) => ({"key": index, "text": value, "value": value}))}
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