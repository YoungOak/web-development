import * as d3 from 'd3';
import React from 'react';

class D3Stuff extends React.Component {
    render () {
        return (
            d3.select("body")
                .append("p")
                .text("Parrafo con D3");
        )
    }
}

export default D3Stuff;