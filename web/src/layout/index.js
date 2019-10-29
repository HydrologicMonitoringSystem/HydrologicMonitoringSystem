import { Component } from 'react';
import { Layout, Menu, Icon, Typography } from 'antd';
import Link from 'umi/link';
import { withRouter } from 'react-router';


const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh' }}>
                    <div style={{ height: '32px', margin: '16px' }}>
                        <Link to='/list'><Title level={3} style={{ color: '#ffffff' }}>水文流量监测平台</Title></Link>
                    </div>
                    <Menu
                        theme="dark" mode="inline"
                        defaultSelectedKeys={['/list']}
                        selectedKeys={this.props.history.location.pathname}
                        openKeys={['info']}
                    >
                        <Menu.Item key="/list">
                            <Link to='/list'>
                                <Icon type="pie-chart" />
                                <span>首页</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="info"
                            title={<span><Icon type="dashboard" /><span>站点详情</span></span>}
                        >
                            <Menu.Item key="/info/basic"><Link to="/info/basic">流速/流量信息</Link></Menu.Item>
                            <Menu.Item key="/info/section"><Link to="/info/section">断面信息</Link></Menu.Item>
                            <Menu.Item key="/info/export"><Link to="/info/export">数据导出</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="/conf">
                            <Link to="/conf">
                                <Icon type="setting" />
                                <span>参数配置</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout >
                    {/* <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header> */}
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by xueyong.zxy</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(BasicLayout);