import React, { Component } from 'react'
import styles from "./ind.css"
import {  Icon } from 'antd';
import router from 'umi/router';

class index extends Component {
    state = {}
    render() {
        return (
            <div className={styles.big}>
                <div className={styles.more}>
                    <p className={styles.acctitle}>
                        <Icon type="home"></Icon>
                        <span>埃塞尔比亚坠机</span>
                    </p>

                    <select
                        className={styles.select}
                        style={{ width: 150, height: 30 }}
                        placeholder="全部账号"
                    >
                        <otion value="jack">Jack</otion>
                        <option value="lucy">Lucy</option>
                        <option value="tom">Tom</option>
                    </select>
                    <select
                        className={styles.select}
                        placeholder="全部数组"
                        style={{ width: 150, height: 30 }}
                    >
                        <option value="jack">Jack</option>
                        <option value="lucy">Lucy</option>
                        <option value="tom">Tom</option>
                    </select>
                </div>
                <div className={styles.geng}>
                    更多
             </div>
                <div className={styles.jc} onClick={this.tiaozhuan}>监测管理</div>
            </div>
        );
    }
    tiaozhuan(){
        router.push('/jiancemanage')
    }
    onChange(value) {
        console.log(`selected ${value}`);
    }
    onBlur() {
        console.log('blur');
    }

    onFocus() {
        console.log('focus');
    }

    onSearch(val) {
        console.log('search:', val);
    }

}

export default index;