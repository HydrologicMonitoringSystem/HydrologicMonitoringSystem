import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';


const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh' }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>
                        <Menu.Item key="home">
                            <Link to='/list'>
                                <Icon type="pie-chart" />
                                <span>首页</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                        key="info"
                        title={<span><Icon type="dashboard" /><span>站点详情</span></span>}
                        >
                            <Menu.Item key="1"><Link to="/info/basic">流速/流量信息</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/info/section">断面信息</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/info/export">数据导出</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="conf">
                            <Link to="/conf">
                                <Icon type="setting" />
                                <span>参数配置</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout >
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}