import React from 'react'
import { Layout } from 'antd'
import { Menu, Icon } from 'antd'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Categories from './component/Categories/Categories'
import Articles from './component/Articles/Articles'
import AddArticle from './component/AddArticle/AddArticle'

const { Sider,Content } = Layout


class HomePage extends React.Component {
    render() {
        return (
            <Router>
                <div className="Home page">
                    <Layout style={{height: "100%"}}>
                        <Sider>
                            <Menu theme="light" style={{height: "100%"}}>
                                <Menu.Item key="1">
                                    <Link to="/home/categorites"><Icon type="setting"/>分类管理</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/home/articles"><Icon type="setting"/>文章列表</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                            <Content>
                                <Route path="/home/categorites" component={Categories} />
                                <Route path="/home/articles" component={Articles}/>
                                <Route path="/home/add" component={AddArticle}/>            
                            </Content>
                    </Layout>
                </div>
            </Router>
        )
    }
}

export default HomePage