import styles from './index.module.less'

function ComingSoonPage() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🚧</div>
      <h2 className={styles.title}>功能开发中</h2>
      <p className={styles.description}>该功能正在紧张开发中，敬请期待...</p>
    </div>
  )
}

export default ComingSoonPage
