import React, { Component } from 'react'
import styles from "./data.css"
import { Tabs, Icon } from 'antd';
import axios from "axios"
export default class Data extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    render() {
        const { TabPane } = Tabs;
        return (
            <div className={styles.datac}>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="突发事件" key="1">
                        <div className={styles.falist}>
                            {
                                this.state.list.map(item => (
                                    <div className={styles.fayan}>
                                        <Icon type={item.icon} className={styles.icon} style={{ background: item.color }}></Icon>
                                        <div className={styles.min}></div>{item.min}
                                    </div>
                                ))
                            }
                        </div>

                    </TabPane>
                    <TabPane tab="热点事件" key="2">
                        <div className={styles.falist}>
                            {
                                this.state.list.map(item => (
                                    <div className={styles.fayan}><Icon type={item.icon} className={styles.icon} style={{ background: item.color }}></Icon>{item.min}</div>
                                ))
                            }
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
    componentDidMount() {
        axios.get("http://169.254.213.59:7001/").then(res => {
            this.setState({
                list: res.data.data.collect.list
            })
        })
    }

}
