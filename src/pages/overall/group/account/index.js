import React, { Component } from 'react'
import styles from "./account.css"
import Account from "../../../../components/Account/index"
import Shang from "../../../../components/Grouptu/shang"
import Contentss from "../../../../components/Grouptu/content"
import Gan from "../../../../components/Grouptu/gan"
import Talk from "../../../../components/Fayan/data"
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        return (
            <div className={styles.main}>
                <div className={styles.title}>账号行为</div>
                <Account />
                <div className={styles.allPic}>
                    <div className={styles.map}>
                        <Shang />
                    </div>
                    <div className={styles.arrData}>
                        <Talk />
                    </div>
                    <div className={styles.barOne}>
                        <h2>内容偏好</h2>
                        <Contentss />
                    </div>
                    <div className={styles.barTwo}>
                        <h2>情感分析</h2>
                        <Gan />
                    </div>
                </div>

            </div>
        );
    }
}

export default Index;