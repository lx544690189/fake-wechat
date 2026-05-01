import { Outlet } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import Sidebar from './components/Sidebar'
import { globalStore } from '@stores/global'
import styles from './index.module.less'

function MainLayout() {
  const snapshot = useSnapshot(globalStore)

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
