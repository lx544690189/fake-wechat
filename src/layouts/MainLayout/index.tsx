import { Outlet } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import Sidebar from './components/Sidebar'
import { wechatStore } from '@stores/chat'
import styles from './index.module.less'

function MainLayout() {
  const snapshot = useSnapshot(wechatStore)

  return (
    <main className={styles.layout}>
      <Sidebar
        avatar={snapshot.profileAvatar}
        items={snapshot.sidebarItems}
      />
      <Outlet />
    </main>
  )
}

export default MainLayout
