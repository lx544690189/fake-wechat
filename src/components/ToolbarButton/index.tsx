import classNames from 'classnames'
import type { SidebarIcon } from '../../stores/wechat'
import styles from './index.module.less'

type ToolbarButtonProps = {
  icon: SidebarIcon | 'search' | 'plus' | 'smile' | 'folder' | 'scissors' | 'mic' | 'phoneCall' | 'video' | 'more' | 'chevron'
  label: string
  active?: boolean
  badge?: number
  muted?: boolean
  onClick?: () => void
}

function ToolbarButton({ icon, label, active, badge, muted, onClick }: ToolbarButtonProps) {
  return (
    <button
      aria-label={label}
      className={classNames(styles.button, styles[icon], {
        [styles.active]: active,
        [styles.muted]: muted,
      })}
      title={label}
      type="button"
      onClick={onClick}
    >
      <span className={styles.symbol} />
      {Boolean(badge) && <span className={styles.badge}>{badge}</span>}
    </button>
  )
}

export default ToolbarButton
