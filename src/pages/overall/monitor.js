import React, { Component } from 'react';
import styles from "../monitor.css"
import axios from 'axios'
import { Collapse, Tabs, List, Carousel, Input, DatePicker, Select, Radio, Pagination, Row, Col, Icon } from 'antd';
import router from 'umi/router';
const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
class Monitor extends Component {
    constructor(){
        super()
        this.state = {
            dotPosition: 'bottom',
            time:new Date().getTime(),
            data :[],
            data111:[]
        }
    }
    callback(key) {
        console.log(key);
    }
    callback1(key) {
        console.log(key);
    }
    handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });
    timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        this.Y = date.getFullYear() + '-';
        this.M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        this.D = date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate() ;
        this.h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours() )+ ' : ' ;
        this.m = (date.getMinutes() < 10 ? '0'+(date.getHours()) : date.getHours() );
        return this.Y+this.M+this.D+' '+this.h+' '+this.m;
    }
    onChange = (a, b,  c)=> {
        console.log(a, b, c);
    }
    handleChange = (value) => {
        console.log(`selected ${value}`);
      }
    onChangeDate = (date, dateString) => {
        console.log(date, dateString);
      }
    tiaozhuan = () => {
        router.push('/jiancemanage')
    }
    render() {
        let {data,time,dotPosition,data111} = this.state
        return (
            <div className={styles.monitor}>
                <div className={styles.head}>
                    <Collapse bordered={false}>
                        <Panel key="133">
                            <div className={styles.monzhedie}>
                                <div>
                                    通道：<select name="全部" className={styles.monselect}>
                                        <option value="全部">全部</option>
                                        <option value="sdhfjsdf">sdhfjsdf</option>
                                        <option value="sdhfjsdf">sdhfjsdf</option>
                                        <option value="sdhfjsdf">sdhfjsdf</option>
                                        <option value="sdhfjsdf">sdhfjsdf</option>
                                        <option value="sdhfjsdf">sdhfjsdf</option>
                                    </select>
                                </div>
                                <div className={styles.datepic}>请选择开始时间: <DatePicker onChange={this.onChangedate} /></div>
                                <div>请选择结束时间: <DatePicker onChange={this.onChangedate} /></div>
                            </div>
                            <div className={styles.tag}>
                                标签：<Select
                                        style={{width:700,background:'#fff !important'}}
                                        mode="multiple"
                                        placeholder="请选择标签"
                                        // defaultValue={{'请选择标签'}}
                                        onChange={this.handleChange}
                                    >
                                        {children}
                                    </Select>
                            </div>
                        </Panel>
                    </Collapse>
                    <div className={styles.search}>
                        <Input placeholder="Basic usage" />
                        <button>搜索</button>
                    </div>
                    <button className={styles.monitormanage} onClick={this.tiaozhuan}>监测管理</button>
                </div>
                <div className={styles.middle}>
                <div>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="信息" key="1">
                            <div className={styles.aisai}>
                                <span className={styles.span}>埃塞俄比亚坠机</span>
                                <div className={styles.three}>
                                    <button>已关注</button>
                                    <button>分析</button>
                                    <button>关联</button>
                                </div>
                            </div>
                            <div>
                                <h3>列表展示</h3>
                                <div>
                                    <Radio.Group
                                        onChange={this.handlePositionChange}
                                        value={dotPosition}
                                    >
                                    </Radio.Group>

                                    <Carousel afterChange={this.onChange}  >
                                        <List
                                        size="large"
                                        bordered
                                        dataSource={data}
                                        renderItem={item => <List.Item className={styles.list}>
                                                <a className={styles.h3}>{item.title}</a>
                                                <div className={styles.time}>
                                                    <span>时间：{this.timestampToTime(time)}</span>
                                                    <span>来源：<a href="#">Bob Robson</a></span>
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
                                    <Pagination  />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="账号" key="2">
                            <div>
                                <div className={styles.zhanghaotou}>
                                    <Row>
                                        <Col span={8}><h3>账号名称</h3></Col>
                                        <Col span={16}><h3>相关描述</h3></Col>
                                    </Row>
                                </div>
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
                                        dataSource={data111}
                                        renderItem={item => <List.Item className={styles.list}>
                                            <Row>
                                                <Col span={8}>
                                                    <a className={styles.h3}>{item.title}</a>
                                                </Col>
                                                <Col span={16}>
                                                    <div className={styles.right}>
                                                        <span>{item.xiangqing}</span>
                                                        <div className={styles.button}>
                                                            <span><Icon type="eye" className={styles.icon}/>已关注</span>
                                                            <span><Icon type="cluster" className={styles.icon}/>关联</span>
                                                            <span><Icon type="pie-chart" className={styles.icon}/>分析</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </List.Item>}
                                    />
                                   <List
                                        size="large"
                                        bordered
                                        dataSource={data111}
                                        renderItem={item => <List.Item className={styles.list}>
                                            <Row>
                                                <Col span={8}>
                                                    <a className={styles.h3}>{item.title}</a>
                                                </Col>
                                                <Col span={16}>
                                                    <div className={styles.right}>
                                                        <span>{item.xiangqing}</span>
                                                        <div className={styles.button}>
                                                            <span><Icon type="eye" className={styles.icon}/>已关注</span>
                                                            <span><Icon type="cluster" className={styles.icon}/>关联</span>
                                                            <span><Icon type="pie-chart" className={styles.icon}/>分析</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </List.Item>}
                                    />
                                     <List
                                        size="large"
                                        bordered
                                        dataSource={data111}
                                        renderItem={item => <List.Item className={styles.list}>
                                            <Row>
                                                <Col span={8}>
                                                    <a className={styles.h3}>{item.title}</a>
                                                </Col>
                                                <Col span={16}>
                                                    <div className={styles.right}>
                                                        <span>{item.xiangqing}</span>
                                                        <div className={styles.button}>
                                                            <span><Icon type="eye" className={styles.icon}/>已关注</span>
                                                            <span><Icon type="cluster" className={styles.icon}/>关联</span>
                                                            <span><Icon type="pie-chart" className={styles.icon}/>分析</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </List.Item>}
                                    />
                                     <List
                                        size="large"
                                        bordered
                                        dataSource={data111}
                                        renderItem={item => <List.Item className={styles.list}>
                                            <Row>
                                                <Col span={8}>
                                                    <a className={styles.h3}>{item.title}</a>
                                                </Col>
                                                <Col span={16}>
                                                    <div className={styles.right}>
                                                        <span>{item.xiangqing}</span>
                                                        <div className={styles.button}>
                                                            <span><Icon type="eye" className={styles.icon}/>已关注</span>
                                                            <span><Icon type="cluster" className={styles.icon}/>关联</span>
                                                            <span><Icon type="pie-chart" className={styles.icon}/>分析</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            
                                            
                                        </List.Item>}
                                    />
                                </Carousel>
                                <Pagination></Pagination>
                            </div>
                            </div>
                        </TabPane>
                        <TabPane tab="群组" key="3">
                            <div>
                                <div className={styles.zhanghaotou}>
                                    <Row>
                                        <Col span={8}><h3>群组名称</h3></Col>
                                        <Col span={16}><h3>相关描述</h3></Col>
                                    </Row>
                                </div>
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
                                        dataSource={data111}
                                        renderItem={item => <List.Item className={styles.list}>
                                            <Row>
                                                <Col span={8}>
                                                    <a className={styles.h3}>{item.title}</a>
                                                </Col>
                                                <Col span={16}>
                                                    <div className={styles.right}>
                                                        <span>{item.xiangqing}</span>
                                                        <div className={styles.button}>
                                                            <span><Icon type="eye" className={styles.icon}/>已关注</span>
                                                            <span><Icon type="cluster" className={styles.icon}/>关联</span>
                                                            <span><Icon type="pie-chart" className={styles.icon}/>分析</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            
                                            
                                        </List.Item>}
                                    />
                                   <List
                                        size="large"
                                        bordered
                                        dataSource={data111}
                                        renderItem={item => <List.Item className={styles.list}>
                                            <Row>
                                                <Col span={8}>
                                                    <a className={styles.h3}>{item.title}</a>
                                                </Col>
                                                <Col span={16}>
                                                    <div className={styles.right}>
                                                        <span>{item.xiangqing}</span>
                                                        <div className={styles.button}>
                                                            <span><Icon type="eye" className={styles.icon}/>已关注</span>
                                                            <span><Icon type="cluster" className={styles.icon}/>关联</span>
                                                            <span><Icon type="pie-chart" className={styles.icon}/>分析</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            
                                            
                                        </List.Item>}
                                    />
                                     <List
                                        size="large"
                                        bordered
                                        dataSource={data111}
                                        renderItem={item => <List.Item className={styles.list}>
                                            <Row>
                                                <Col span={8}>
                                                    <a className={styles.h3}>{item.title}</a>
                                                </Col>
                                                <Col span={16}>
                                                    <div className={styles.right}>
                                                        <span>{item.xiangqing}</span>
                                                        <div className={styles.button}>
                                                            <span><Icon type="eye" className={styles.icon}/>已关注</span>
                                                            <span><Icon type="cluster" className={styles.icon}/>关联</span>
                                                            <span><Icon type="pie-chart" className={styles.icon}/>分析</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            
                                            
                                        </List.Item>}
                                    />
                                     <List
                                        size="large"
                                        bordered
                                        dataSource={data111}
                                        renderItem={item => <List.Item className={styles.list}>
                                            <Row>
                                                <Col span={8}>
                                                    <a className={styles.h3}>{item.title}</a>
                                                </Col>
                                                <Col span={16}>
                                                    <div className={styles.right}>
                                                        <span>{item.xiangqing}</span>
                                                        <div className={styles.button}>
                                                            <span><Icon type="eye" className={styles.icon}/>已关注</span>
                                                            <span><Icon type="cluster" className={styles.icon}/>关联</span>
                                                            <span><Icon type="pie-chart" className={styles.icon}/>分析</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            
                                            
                                        </List.Item>}
                                    />
                                </Carousel>
                                <Pagination></Pagination>
                            </div>
                            </div>
                        </TabPane>
                    </Tabs>
                    </div>

                </div>
            </div>

)}
    componentDidMount(){
        axios.get("http://169.254.213.59:7001/").then(res => {
            console.log(res.data.data.data111.data111)
            this.setState({
                data: res.data.data.data.data,
                data111: res.data.data.data111.data111
            })
        })
    }
}

export default Monitor
