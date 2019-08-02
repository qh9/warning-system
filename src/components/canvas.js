import React, { Component } from 'react';
import F2 from '@antv/f2'

function createCanvas(props){
    let {number,color,id} = props;
    var fontSize = 4 * (window.innerWidth / 375); // 字体适配不同屏幕
    var data = [{
        x: '1',
        y: number*1
    }];
    var chart = new F2.Chart({
        id: id,
        pixelRatio: window.devicePixelRatio
    });
    chart.source(data, {
        y: {
            max: 100,
            min: 0
        }
    });
    chart.axis(false);
    chart.tooltip(false);
    chart.coord('polar', {
        transposed: true,
        innerRadius: 0.9,
        radius: 1,
        
    });
    chart.guide().arc({
        start: [0, 0],
        end: [1, 99.98],
        top: false,
        style: {
            lineWidth: 3,
            stroke: '#eee'
        }
    });
    chart.guide().text({
        position: ['50%', '50%'],
        content: `${number}%`,
        style: {
            fontSize: fontSize,
            fill: 'black'
        }
    });
    chart.interval().position('x*y').size(3).color(`${color}`).animate({
        appear: {
            duration: 1200,
            easing: 'cubicIn',
        }
    });
    chart.render();
}
class Emotione extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState){
        createCanvas(this.props)
        // return true;
    }
    componentDidMount(){
        createCanvas(this.props)
    }
    render() {
        return (
            <canvas id={this.props.id} style={{width:'130px',height:'130px',marginLeft:'30px'}}></canvas>
        );
    }
}

export default Emotione;