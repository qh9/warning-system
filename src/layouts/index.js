import styles from './index.css';
import Link from 'umi/link';
import SelectLang from '../components/SelectLang'
import React, { Component } from 'react';
import Warning from '../components/Hello/warning'
import Overall from '../components/Hello/overall'
import Contentlang from '../components/Hello/content'
import Group from '../components/Hello/group'
import Relevance from '../components/Hello/relevance'
import Monitor from '../components/Hello/monitor'
import Gather from '../components/Hello/gather'
import System from '../components/Hello/system'
import Account from '../components/Hello/account'
import Feature from '../components/Hello/feature'
import Accountmanage from '../components/Hello/accountmanage'
import Groupmanage from '../components/Hello/groupmanage'
import Keyworld from '../components/Hello/keyworld'
import Monitoring from '../components/Hello/monitoring'
import Assist from '../components/Hello/assist'
import Usermanage from '../components/Hello/usermanage'
import Division from '../components/Hello/division'
import Rolemanage from '../components/Hello/rolemanage'
import Functionmanage from '../components/Hello/functionmanage'
import { Layout, Menu, Icon, Input, Badge, Select, Skeleton } from 'antd';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { Option } = Select;

class BasicLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      collapsed: false,
      // visible: false, 
      placement: 'top',
      style: { display: "none" }
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  handleClick = (e) => {
    console.log('click', e);
  };

  showDrawer = () => {
    if (this.state.style.display === "none") {
      this.setState({
        style: { display: "block", color: "#000" }
      });
    } else {
      this.setState({
        style: { display: "none", color: "red" }
      });
    }

  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showSkeleton = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };
  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };
  menu = (
    <Menu selectable>
      {/* <Menu  ></Menu> */}
      <Menu.Item key="3">退出登录</Menu.Item>
    </Menu>
  )
  render() {
    let { collapsed } = this.state
    return (
      <Skeleton loading={this.state.loading}>
        <Layout className={styles.wrap}>
          <Header className={styles.head}>
            <div className={styles.left}>
              {
                !collapsed && <h3 className={styles.h3}><Warning /></h3>
              }
              <Icon
                className="trigger"
                type={collapsed ? 'menu' : 'menu'}
                onClick={this.toggle}
              />
            </div>

            <div className={styles.right}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200, height: 50, marginRight: 20 }}
              />
              <span style={{ marginRight: 24 }}>
                <Badge count={1}>
                  <Icon
                    className={styles.trigger}
                    type="bell"
                    top="50"
                    onClick={this.showDrawer.bind(this)}
                  />
                </Badge>
              </span>
              <Select
                className={styles.select}
                defaultValue="Nick"
                style={{ width: 100, border: 0 }}
              >
                <Option value="退出登录">
                  <span>退出登录</span>
                </Option>
              </Select>
              <SelectLang />
              <div className={styles.show} style={this.state.style}>
                <div className={styles.layshow}>
                  <b>12条预警信息</b><span>查看消息</span>
                </div>
                <div className={styles.laylist}>
                  <div className={styles.layone}>
                    <Icon type="bell" className={styles.layicon}></Icon>
                    <div className={styles.layp}>A user IP blocked</div>
                    <button className={styles.laytxt}>3days</button>
                  </div>
                </div>
              </div>
            </div>
          </Header>
          <Layout className={styles.layout}>
            <Sider trigger={null} collapsible collapsed={collapsed} className={styles.slide}>
              <div className="logo" />
              <Menu onClick={this.handleClick} className={styles.menu} theme="dark">
                <Menu.Item
                  key="1"
                  className={styles.menuItem}
                >
                  <span>
                    <Icon type="home" />
                    <span><Link to="/overall"><Overall /></Link></span>
                  </span>
                </Menu.Item>
                <Menu.Item
                  key="2"
                  className={styles.menuItem}
                >
                  <span>
                    <Icon type="copy" />
                    <span><Link to="/overall/content"><Contentlang /></Link></span>
                  </span>
                </Menu.Item>
                <SubMenu
                  className={styles.submenu}
                  key="sub4"
                  title={
                    <span>
                      <Icon type="bar-chart" />
                      <span><Link to="/overall/group"><Group /></Link></span>
                    </span>
                  }
                >
                  <Menu.Item key="9"><Link to="/overall/group/account"><Account /></Link></Menu.Item>
                  <Menu.Item key="10"><Link to="/overall/group/feature"><Feature /></Link></Menu.Item>
                </SubMenu>
                <Menu.Item
                  key="3"
                  className={styles.menuItem}
                >
                  <span>
                    <Icon type="database" />
                    <span><Link to="/overall/relevance"><Relevance /></Link></span>
                  </span>
                </Menu.Item>
                <Menu.Item
                  className={styles.menuItem}
                  key="4"
                >
                  <span>
                    <Icon type="global" />
                    <span><Link to="/overall/monitor"><Monitor /></Link></span>
                  </span>
                </Menu.Item>
                <SubMenu
                  className={styles.submenu}
                  key="sub7"
                  title={
                    <span>
                      <Icon type="usb" />
                      <span><Link to="/overall/gather"><Gather /></Link></span>
                    </span>
                  }
                >
                  <Menu.Item key="9"><Link to="/overall/gather/accountManage"><Accountmanage /></Link></Menu.Item>
                  <Menu.Item key="10"><Link to="/overall/gather/groupManage"><Groupmanage /></Link></Menu.Item>
                  <Menu.Item key="11"><Link to="/overall/gather/keyworld"><Keyworld /></Link></Menu.Item>
                  <Menu.Item key="12"><Link to="/overall/gather/monitoring"><Monitoring /></Link></Menu.Item>
                  <Menu.Item key="13"><Link to="/overall/gather/assist"><Assist /></Link></Menu.Item>
                </SubMenu>
                <SubMenu
                  className={styles.submenu}
                  key="sub8"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span><Link to="/overall/system"><System /></Link></span>
                    </span>
                  }
                >
                  <Menu.Item key="9"><Link to="/overall/system/userManage"><Usermanage /></Link></Menu.Item>
                  <Menu.Item key="10"><Link to="/overall/system/division"><Division /></Link></Menu.Item>
                  <Menu.Item key="11"><Link to="/overall/system/roleManage"><Rolemanage /></Link></Menu.Item>
                  <Menu.Item key="12"><Link to="/overall/system/functionManage"><Functionmanage /></Link></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Content
                style={{
                  padding: 15,
                  background: '#eef1f5'
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Skeleton>
    );
  }
}
export default BasicLayout
