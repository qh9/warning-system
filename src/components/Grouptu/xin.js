import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
export default class Huo extends Component {
    componentDidMount() {
        am4core.useTheme(am4themes_animated);
        let chart = am4core.create("xin", am4charts.XYChart3D);
        chart.paddingBottom = 30;
        chart.angle = 35;
        chart.data = [{
            "country": "Tor",
            "visits": 4025
        }, {
            "country": "12p",
            "visits": 1882
        }, {
            "country": "ZerNet",
            "visits": 580
        }, {
            "country": "Telegram",
            "visits": 443
        }, {
            "country": "UK",
            "visits": 328
        }];

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.inside = true;
        categoryAxis.renderer.grid.template.disabled = true;

        let labelTemplate = categoryAxis.renderer.labels.template;
        labelTemplate.rotation = -90;
        labelTemplate.horizontalCenter = "left";
        labelTemplate.verticalCenter = "middle";
        labelTemplate.dy = 10; // moves it a bit down;
        labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.disabled = true;

        // Create series
        let series = chart.series.push(new am4charts.ConeSeries());
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";

        let columnTemplate = series.columns.template;
        columnTemplate.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        })

        columnTemplate.adapter.add("stroke", function (stroke, target) {
            return chart.colors.getIndex(target.dataItem.index);
        })
    }
    render() {
        return (
            <div id="xin" style={{ width: 500, height: 500, background: '#fff' }}></div>
        )
    }
}
