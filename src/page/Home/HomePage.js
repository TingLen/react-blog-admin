import React from 'react'
import { Layout } from 'antd'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu
const { Sider,Content } = Layout


class HomePage extends React.Component {
    render() {
        return (
            <div className="Home page">
                <Layout style={{height: "100%"}}>
                    <Sider>
                        <Menu theme="light" style={{height: "100%"}}>
                            <Menu.Item key="1">
                                <Link to="/">分类管理</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/">文章列表</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content>
    
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default HomePage