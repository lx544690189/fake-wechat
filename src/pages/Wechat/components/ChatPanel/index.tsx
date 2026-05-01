import classNames from 'classnames'
import Avatar from '../../../../components/Avatar'
import ToolbarButton from '../../../../components/ToolbarButton'
import type { Conversation, TimelineItem } from '../../../../stores/wechat'
import styles from './index.module.less'

type ChatPanelProps = {
  conversation: Conversation
  messages: readonly TimelineItem[]
}

function ChatPanel({ conversation, messages }: ChatPanelProps) {
  return (
    <section className={styles.chat}>
      <header className={styles.header}>
        <h1>{conversation.title}</h1>
        <div className={styles.headerActions}>
          <ToolbarButton icon="chat" label="消息" />
          <ToolbarButton icon="chevron" label="展开" />
          <ToolbarButton icon="more" label="更多" />
        </div>
      </header>

      <div className={styles.timeline}>
        <div className={styles.scrollbar} />
        {messages.map((item) => {
          if (item.type === 'time') {
            return (
              <div key={item.id} className={styles.time}>
                {item.label}
              </div>
            )
          }

          const isMine = item.author === 'me'
          return (
            <div
              key={item.id}
              className={classNames(styles.message, {
                [styles.mine]: isMine,
                [styles.theirs]: !isMine,
                [styles.imageMessage]: item.type === 'image',
              })}
            >
              {!isMine && <Avatar variant={conversation.avatar} size={46} />}
              <div className={styles.bubbleWrap}>
                {item.type === 'image' ? (
                  <span className={classNames(styles.imageBubble, item.imageKind && styles[item.imageKind])} />
                ) : (
                  <span className={styles.textBubble}>{item.content}</span>
                )}
              </div>
              {isMine && <Avatar variant="sunset" size={46} />}
            </div>
          )
        })}
      </div>

      <footer className={styles.composer}>
        <div className={styles.composerTools}>
          <div className={styles.leftTools}>
            <ToolbarButton icon="smile" label="表情" />
            <ToolbarButton icon="box" label="收藏" />
            <ToolbarButton icon="folder" label="文件" />
            <ToolbarButton icon="scissors" label="截图" />
            <ToolbarButton icon="chevron" label="更多工具" />
            <ToolbarButton icon="mic" label="语音" />
          </div>
          <div className={styles.rightTools}>
            <ToolbarButton icon="phoneCall" label="语音通话" />
            <ToolbarButton icon="video" label="视频通话" />
          </div>
        </div>
        <div className={styles.inputArea} />
      </footer>
    </section>
  )
}

export default ChatPanel
