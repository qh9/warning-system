import React, { Component } from 'react';
import styles from './index.css'
import axios from 'axios'
import { Collapse, List, Carousel, Input, DatePicker, Select, Radio, Pagination, Row, Col, Icon } from 'antd';
const { Panel } = Collapse;
const { Option } = Select;
// const { SubMenu } = Menu;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class Control extends Component {
    constructor(){
        super()
        this.state = {
            dotPosition: 'bottom',
            time:new Date().getTime(),
            data111:[],
            value:true
        }
    }
    callback(key) {
        console.log(key);
    }
    callback1(key) {
        console.log(key);
    }
    handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });
    onChange = (a, b,  c)=> {
        console.log(a, b, c);
    }
    handleChange = (value) => {
        console.log(`selected ${value}`);
      }
    onChangeDate = (date, dateString) => {
        console.log(date, dateString);
      }
      componentDidMount(){
        axios.get("http://169.254.213.59:7001/").then(res => {
            this.setState({
                data111: res.data.data.data111.data111
            })
        })
    }
    // valueData(e){
    //     // let val = e.target.getAttribute('data-value')
    //     if(this.value){
    //         <span><Icon type="eye" className={styles.icon}/>已关注</span>
    //     }else{
    //         <span><Icon type="eye-invisible" className={styles.icon}/>未关注</span>
    //     }
    // }
    render() {
        let {data111,dotPosition} = this.state;
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
                <div>
                    <div className={styles.zhanghaotou}>
                        <Row>
                            <Col span={8}><h3>账号名称</h3></Col>
                            <Col span={4}><h3>相关描述</h3></Col>
                            <Col span={8}><h3>账号名称</h3></Col>
                            <Col span={4}><h3>相关描述</h3></Col>
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
                                    <Row className={styles.row}>
                                        <Col span={1} className={styles.col}>
                                            <a className={styles.h3}>{item.title}</a>
                                            <div className={styles.button}>
                                                <span><Icon type="eye" className={styles.icon}/>已关注</span>
                                            </div>
                                        </Col>
                                        <Col span={1} className={styles.col}>
                                            <a className={styles.h3}>{item.title}</a>
                                            <div className={styles.button}>
                                                <span><Icon type="eye" className={styles.icon}/>已关注</span>
                                            </div>
                                        </Col>
                                            </Row> 
                                        
                                </List.Item>}
                            />
                        </Carousel>
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
        );
    }
}

export default Control;