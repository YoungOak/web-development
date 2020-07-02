import React, { Component } from "react";
import {Bar, Pie, Line} from 'react-chartjs-2';
import { Dropdown } from 'react-bootstrap';
import { thresholdScott } from "d3";
import { findAllByTestId } from "@testing-library/react";


class DropChart extends Component{

    constructor (props) {
        super(props)
        this.dropMenuData = Object.keys(this.props.data)
        this.db = this.props.data
        this.state = {
            dropSelection: "Afghanistan",
            selection: "Afghanistan",
            chartData: {
                    labels: this.db["Afghanistan"].map(d => new Date(d["dateRep"])),
                    datasets: [{
                        label: 'Casos',
                        data: this.db["Afghanistan"].map(d => d["cases"]),
                        borderColor: "#3e95cd",
                        fill: false
                }]
            }   
        }
        console.log(this.state.charData)
        this.selection = this.selection.bind(this)
    }

    selection = function (sel){
        this.setState({
            dropSelection: sel,
            chartData: {
                labels: this.db[sel].map(d => new Date(d["dateRep"])),
                datasets: [{
                    label: 'Casos',
                    data: this.db[sel].map(d => d["cases"]),
                    borderColor: "#3e95cd",
                    fill: false,
                }]
            }
        })
    }


    render() {
        return (
                <div className="Chart">
                    <div id={"option"}>
                        <Dropdown>
                            <Dropdown.Toggle variant="info">
                                {this.state.dropSelection}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.dropMenuData.map(d => <Dropdown.Item onSelect={() => this.selection(d)}>{d}</Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    
                    <div id="chart" height="600" width="400">
                        <Line
                            data = {this.state.chartData}
                            options = {{
                                title: {
                                    display: true,
                                    text: this.state.dropSelection,
                                    fontSize: 25
                                },
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [{
                                        type: "time",
                                    }]
                                }
                            }}
                        />    
                    </div>
                </div>
        )
    };
}


export default DropChart;