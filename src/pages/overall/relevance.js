import React, { Component } from 'react';
import styles from "../overall/group/account/account.css"
import Account from "../../components/Account/index.js"
// import { Select, Input, Button } from 'antd';
import Rele from "../../components/relevance"

class Relevance extends Component {
    state = {}
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
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.title}>关联分析</div>
                <Account />
                <div className={styles.all}>
                    <div className={styles.search}>
                        <div>
                            <select
                                className={styles.show}>
                                <option value="jack">Jack</option>
                                <option value="lucy">Lucy</option>
                                <option value="tom">Tom</option>
                            </select>,
                    </div>

                        <input placeholder="Basic usage" />

                        <button type="primary">搜索实体</button>
                    </div>
                   <Rele />
                </div>

            </div>
        );
    }
}

export default Relevance;