import styles from './index.module.less'

function EmptyChat() {
  return (
    <section className={styles.empty}>
      <span className={styles.logo} aria-hidden="true">
        <span className={styles.logoBack} />
        <span className={styles.logoFront} />
      </span>
    </section>
  )
}

export default EmptyChat
