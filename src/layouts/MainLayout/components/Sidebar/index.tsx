import Avatar from '@components/Avatar'
import ToolbarButton from '@components/ToolbarButton'
import { useNavigate, useLocation } from 'react-router-dom'
import type { AvatarVariant, SidebarIcon, SidebarItem } from '@typings/chat'
import styles from './index.module.less'

type SidebarProps = {
  avatar: AvatarVariant
  items: readonly SidebarItem[]
}

const navRouteMap: Record<SidebarIcon, string> = {
  chat: '/chat',
  contacts: '/contacts',
  box: '/box',
  aperture: '/aperture',
  butterfly: '/butterfly',
  spark: '/spark',
  target: '/target',
  music: '/music',
  phone: '/phone',
  menu: '/menu',
}

function Sidebar({ avatar, items }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavSelect = (nav: SidebarIcon) => {
    const path = navRouteMap[nav]
    if (path) {
      navigate(path)
    }
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.avatarSlot}>
        <Avatar variant={avatar} size={38} />
      </div>

      <nav className={styles.nav}>
        {items.map((item) => (
          <ToolbarButton
            key={item.id}
            active={navRouteMap[item.id] === location.pathname}
            badge={item.badge}
            icon={item.icon}
            label={item.id}
            onClick={() => handleNavSelect(item.id)}
          />
        ))}
      </nav>

      <div className={styles.bottomNav}>
        <ToolbarButton icon="phone" label="手机" muted />
        <ToolbarButton icon="menu" label="菜单" muted />
      </div>
    </aside>
  )
}

export default Sidebar
