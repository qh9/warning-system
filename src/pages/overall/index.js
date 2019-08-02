import React, { Component } from 'react';
import axios from "axios";
import styles from "./overall.css"
import { connect } from 'dva';
import Map from '../../components/Overall/map'
import Test from '../../components/Overall/zhu'
import Easy from '../../components/Overall/zhuEasy'
import Talk from "../../components/Fayan/data"
import Toplist from '../../components/shuju'
class Overall extends Component {
    state = {
        all: [],
    }
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.list}>
                    {
                        this.state.all.map((item, index) => (
                            <Toplist item={item}></Toplist>
                        ))
                    }

                </div>

                <div className={styles.allPic}>
                    <div className={styles.map}>
                        <Map />
                    </div>
                    <div className={styles.arrData}>
                        <Talk />
                    </div>
                    {/* </div>
                <div className={styles.bar}> */}
                    <div className={styles.barOne}>
                        <Test />
                    </div>
                    <div className={styles.barTwo}>
                        <Easy />
                    </div>
                </div>
            </div>

        );
    }
    callback(key) {
        console.log(key);
    }
    componentDidMount() {
        axios.get("http://169.254.213.59:7001/").then(res => {
            // console.log(res.data.data.allList)
            this.setState({
                all: res.data.data.allList.allList
            })
        })
    }
}
Overall.propTypes = {}
export default connect()(Overall);