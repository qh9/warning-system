import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
class Shang extends React.Component {
    componentDidMount() {
        am4core.useTheme(am4themes_animated);
        let chart = am4core.create("shang", am4charts.XYChart);
        let data = [];
        let value = 50;
        for (let i = 0; i < 300; i++) {
            let date = new Date();
            date.setHours(0, 0, 0, 0);
            date.setDate(i);
            value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
            data.push({ date: date, value: value });
        }
        chart.data = data;
        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 60;
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        // Create series
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value";
        series.dataFields.dateX = "date";
        series.tooltipText = "{value}"
        series.tooltip.pointerOrientation = "vertical";
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.snapToSeries = series;
        chart.cursor.xAxis = dateAxis;
        //chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarX = new am4core.Scrollbar();

    }
    render() {
        return (
            <div id="shang" style={{ width: 500, height: 500, background: '#fff' }}></div>

        );
    }
}

export default Shang;