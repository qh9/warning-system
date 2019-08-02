import React, { Component } from 'react'
import Account from "../../../../components/Account/index"
import styles from "../account/account.css"
import Huo from "../../../../components/Grouptu/huo"
import Xin from "../../../../components/Grouptu/xin"
import Content from "../../../../components/Grouptu/content"
import Gan from "../../../../components/Grouptu/gan"
export default class index extends Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.title}>群组特征</div>
                <Account />
                <div className={styles.allPic}>
                    <div className={styles.map}>
                        <h2>活跃度</h2>
                        <Huo />
                    </div>
                    <div className={styles.arrData}>
                        <h2>信息分析</h2>
                        <Xin />
                    </div>
                </div>
                <div className={styles.bar}>
                    <div className={styles.barOne}>
                        <h2>内容偏好</h2>
                        <Content />
                    </div>
                    <div className={styles.barTwo}>
                        <h2>群内消息</h2>
                        <Gan />
                    </div>
                </div>

            </div>
        )
    }
}
