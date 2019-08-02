import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

class Contentss extends Component {
    componentDidMount() {
        am4core.useTheme(am4themes_animated);
        let chart = am4core.create("contentsss", am4charts.PieChart);
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
    }
    render() {
        return (
            <div id="contentsss" style={{ width: 500, height: 500, background: '#fff' }}></div>
        )
    }
}
export default Contentss
