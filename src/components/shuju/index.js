import React, { Component } from 'react'
import styles from './index.css'
import Hello from '../../components/Hello'
import Name from '../../components/Hello/name'
export default class top_list extends Component {
    state = {
        num:0
    }
    componentDidMount() {
        let timer = null;
        clearInterval(timer)
        let {all_num} = this.props.item;
        let bei = Math.ceil(all_num/100)
        timer = setInterval(() => {
            let {num} = this.state;
            if(all_num>num){
                this.setState({num:num + bei})
            }else{
                this.setState({num:all_num})
                clearInterval(timer)
            }
        }, 1);
    }
    render() {
        let {item} = this.props;
        let {num} = this.state;
        return (
            <div className={styles.content}>
                <div className={styles.num}><span style={{fontSize: '30px', color: 'rgb(136,119,169)'}}>{num}</span><span style={{marginLeft:'20px',fontSize:'20px'}}>{item.unit}</span></div>
                <h3 className={styles.tor}><Hello></Hello></h3>
                <hr className={styles.line}></hr>
                <div className={styles.jin}><span><Name></Name></span><span>{item.today_num}</span></div>
            </div>
        )
    }
}
