import { NavLink, Route, Routes } from 'react-router-dom'
import styles from './index.module.less'

function getNavClassName({ isActive }: { isActive: boolean }) {
  return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
}

function Home() {
  return (
    <section className={styles.page}>
      <p className={styles.eyebrow}>Vite + React + Router</p>
      <h1 className={styles.title}>fake-wechat</h1>
      <p className={styles.lead}>
        项目已经接入 React Router，可以从这里继续搭页面、组件和状态逻辑。
      </p>
    </section>
  )
}

function Chats() {
  return (
    <section className={styles.page}>
      <p className={styles.eyebrow}>Route: /chats</p>
      <h1 className={styles.title}>聊天列表</h1>
      <p className={styles.lead}>这里可以作为仿微信会话列表的入口。</p>
    </section>
  )
}

function Profile() {
  return (
    <section className={styles.page}>
      <p className={styles.eyebrow}>Route: /profile</p>
      <h1 className={styles.title}>个人中心</h1>
      <p className={styles.lead}>这里可以放用户信息、设置和账号相关页面。</p>
    </section>
  )
}

function NotFound() {
  return (
    <section className={styles.page}>
      <p className={styles.eyebrow}>404</p>
      <h1 className={styles.title}>页面不存在</h1>
      <p className={styles.lead}>检查一下地址，或者回到首页继续开发。</p>
    </section>
  )
}

function App() {
  return (
    <main className={styles.appShell}>
      <nav className={styles.nav}>
        <NavLink className={getNavClassName} to="/">
          首页
        </NavLink>
        <NavLink className={getNavClassName} to="/chats">
          聊天
        </NavLink>
        <NavLink className={getNavClassName} to="/profile">
          我的
        </NavLink>
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
