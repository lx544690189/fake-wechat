import classNames from 'classnames'
import type { CSSProperties } from 'react'
import type { AvatarVariant } from '@typings/chat'
import styles from './index.module.less'

type AvatarProps = {
  variant: AvatarVariant
  size?: number
  unread?: number
  redDot?: boolean
}

function Avatar({ variant, size = 46, unread, redDot }: AvatarProps) {
  return (
    <span
      className={classNames(styles.avatar, styles[variant])}
      style={{ '--avatar-size': `${size}px` } as CSSProperties}
    >
      <span className={styles.inner} />
      {Boolean(unread) && <span className={styles.badge}>{unread}</span>}
      {redDot && !unread && <span className={styles.dot} />}
    </span>
  )
}

export default Avatar
