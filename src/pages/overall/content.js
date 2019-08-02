import React, { Component } from 'react';
import { Tabs, List, Carousel, Radio, Pagination } from 'antd';
import styles from './content.css';
import Account from '../../components/Account/index.js'
import Zhang from "../../components/Content/zheng"
import Soso from "../../components/Content/soso"
import Fan from "../../components/Content/fan"
import Emotione from "../../components/canvas"
import Axios from 'axios';

const { TabPane } = Tabs;

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            dotPosition: 'bottom',
            time: new Date().getTime(),
            data:[],
            numArr:[30,85,54]
        }
    }
    handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });
    timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        this.Y = date.getFullYear() + '-';
        this.M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        this.D = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();
        this.h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ' : ';
        this.m = (date.getMinutes() < 10 ? '0' + (date.getHours()) : date.getHours());
        return this.Y + this.M + this.D + ' ' + this.h + ' ' + this.m;
    }
    callback = (key) => {
        console.log(key);
    }
    onChange = (a, b, c) => {
        console.log(a, b, c);
    }
    reload = () =>{
        let numArr = []
        for(var i=0;i<3;i++){
            numArr.push(Math.floor(Math.random()*100))
        }
        this.setState({
            numArr
        })
        
    }
    render() {
        let { data, time, dotPosition,numArr } = this.state;
        return (
            <div className={styles.main}>
                <div className={styles.acc}><Account /></div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="监测结果" key="1">
                        <div>
                            <h3 id="hh">列表展示</h3>
                            <div>
                                <Radio.Group
                                    onChange={this.handlePositionChange}
                                    value={dotPosition}
                                >
                                </Radio.Group>
                                <Carousel afterChange={this.onChange}>
                                    <List
                                        size="large"
                                        bordered
                                        dataSource={data}
                                        renderItem={item => <List.Item className={styles.list}>
                                            <a className={styles.h3}>{item.title}</a>
                                            <div className={styles.time}>
                                                <span>时间：{this.timestampToTime(time)}</span>
                                                <span>来源：<a>Bob Robson</a></span>
                                                <span>原</span>
                                            </div>
                                        </List.Item>}
                                    />
                                    <List
                                        size="large"
                                        bordered
                                        dataSource={data}
                                        renderItem={item => <List.Item className={styles.list}>

                                            <a className={styles.h3}>{item.title}</a>
                                            <div className={styles.time}>
                                                <span>时间：{this.timestampToTime(time)}</span>
                                                <span>来源：<a>Bob Robson</a></span>
                                                <span>原</span>
                                            </div>
                                        </List.Item>}
                                    />
                                    <List
                                        size="large"
                                        bordered
                                        dataSource={data}
                                        renderItem={item => <List.Item className={styles.list}>

                                            <a className={styles.h3}>{item.title}</a>
                                            <div className={styles.time}>
                                                <span>时间：{this.timestampToTime(time)}</span>
                                                <span>来源：<a>Bob Robson</a></span>
                                                <span>原</span>
                                            </div>
                                        </List.Item>}
                                    />
                                    <List
                                        size="large"
                                        bordered
                                        dataSource={data}
                                        renderItem={item => <List.Item className={styles.list}>

                                            <a className={styles.h3}>{item.title}</a>
                                            <div className={styles.time}>
                                                <span>时间：{this.timestampToTime(time)}</span>
                                                <span>来源：<a>Bob Robson</a></span>
                                                <span>原</span>
                                            </div>
                                        </List.Item>}
                                    />
                                </Carousel>
                                <Pagination></Pagination>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="检测分析" key="2">
                        <div>
                            <div className={styles.contmain}>
                                <div className={styles.contTit}>
                                    <div className={styles.conttext}>
                                        <div className={styles.contadd}>情绪增量</div>
                                        <div className={styles.contload} onClick={this.reload}>reload</div>
                                    </div>
                                    <div className={styles.contpic}>
                                        <div>
                                            
                                            <Emotione number={numArr[0]} color="red" id="23"/>
                                            <Emotione number={numArr[1]} color="yellow" id="52"/>
                                            <Emotione number={numArr[2]} color="blue" id="34"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.contTit}>
                                    <div className={styles.conttext}>
                                        <div className={styles.contadd}>情绪趋势<span className={styles.contweek}>近一周观点趋势</span></div>
                                    </div>
                                    <div className={styles.contpic}>
                                        <div className={styles.one}>
                                            <Zhang />
                                            <div className={styles.contwen}>正面</div>
                                        </div>
                                        <div className={styles.one}>
                                            <Soso />
                                            <div className={styles.contwen}>一般</div>
                                        </div>
                                        <div className={styles.one}>
                                            <Fan />
                                            <div className={styles.contwen}>反面</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.contmessage}>
                                <Tabs defaultActiveKey="1" onChange={this.callback}>
                                    <TabPane tab="主要观点" key="1">
                                        <div className={styles.contdata}>
                                            {
                                                this.state.list.map((item, index) => (
                                                    <dl key={index}>
                                                        <dt><img src="http://img.duoziwang.com/2018/18/06051452301397.jpg" /></dt>
                                                        <dd>
                                                            <div>
                                                                <p className={styles.contname}>{item.name}</p>
                                                                <p className={styles.conttle}>{item.title}</p>
                                                                <p className={styles.contopen}>{item.kind}</p>
                                                            </div>
                                                            <div>26Fem,10.30AM</div>
                                                        </dd>
                                                    </dl>
                                                ))
                                            }

                                        </div>
                                    </TabPane>

                                </Tabs>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
    componentDidMount() {
        Axios.get("http://169.254.213.59:7001/").then(res => {
            this.setState({
                list: res.data.data.realtime.turan,
                data: res.data.data.data.data
            })
        })
    }
}

export default Content;
