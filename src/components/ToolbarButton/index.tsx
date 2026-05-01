import classNames from 'classnames'
import Icon, { type IconName } from '@components/Icon'
import styles from './index.module.less'

type ToolbarIconName = Exclude<IconName, 'bellOff' | 'miniBubble'>

type ToolbarButtonProps = {
  icon: ToolbarIconName
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
      aria-pressed={active}
      className={classNames(styles.button, styles[icon], {
        [styles.active]: active,
        [styles.muted]: muted,
      })}
      title={label}
      type="button"
      onClick={onClick}
    >
      <Icon className={styles.symbol} name={icon} />
      {Boolean(badge) && <span className={styles.badge}>{badge}</span>}
    </button>
  )
}

export default ToolbarButton
