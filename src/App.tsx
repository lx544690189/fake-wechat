import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <section className="page">
      <p className="eyebrow">Vite + React + Router</p>
      <h1>fake-wechat</h1>
      <p className="lead">
        项目已经接入 React Router，可以从这里继续搭页面、组件和状态逻辑。
      </p>
    </section>
  )
}

function Chats() {
  return (
    <section className="page">
      <p className="eyebrow">Route: /chats</p>
      <h1>聊天列表</h1>
      <p className="lead">这里可以作为仿微信会话列表的入口。</p>
    </section>
  )
}

function Profile() {
  return (
    <section className="page">
      <p className="eyebrow">Route: /profile</p>
      <h1>个人中心</h1>
      <p className="lead">这里可以放用户信息、设置和账号相关页面。</p>
    </section>
  )
}

function NotFound() {
  return (
    <section className="page">
      <p className="eyebrow">404</p>
      <h1>页面不存在</h1>
      <p className="lead">检查一下地址，或者回到首页继续开发。</p>
    </section>
  )
}

function App() {
  return (
    <main className="app-shell">
      <nav className="nav">
        <NavLink to="/">首页</NavLink>
        <NavLink to="/chats">聊天</NavLink>
        <NavLink to="/profile">我的</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
