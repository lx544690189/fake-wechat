import Avatar from '@components/Avatar'
import ToolbarButton from '@components/ToolbarButton'
import type { AvatarVariant, SidebarIcon, SidebarItem } from '@stores/wechat'
import styles from './index.module.less'

type SidebarProps = {
  avatar: AvatarVariant
  activeNav: SidebarIcon
  items: readonly SidebarItem[]
  onNavSelect: (nav: SidebarIcon) => void
}

function Sidebar({ avatar, activeNav, items, onNavSelect }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>

      <div className={styles.avatarSlot}>
        <Avatar variant={avatar} size={38} />
      </div>

      <nav className={styles.nav}>
        {items.map((item) => (
          <ToolbarButton
            key={item.id}
            active={item.id === activeNav}
            badge={item.badge}
            icon={item.icon}
            label={item.id}
            onClick={() => onNavSelect(item.id)}
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
