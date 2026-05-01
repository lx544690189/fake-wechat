import classNames from 'classnames'
import type { CSSProperties, MouseEventHandler } from 'react'
import Avatar from '../../../../components/Avatar'
import ToolbarButton from '../../../../components/ToolbarButton'
import type { Conversation } from '../../../../stores/wechat'
import styles from './index.module.less'

type ConversationListProps = {
  conversations: readonly Conversation[]
  activeConversationId: string | null
  width: number
  onSelect: (conversationId: string) => void
  onResizeStart: MouseEventHandler<HTMLDivElement>
}

function ConversationList({
  conversations,
  activeConversationId,
  width,
  onSelect,
  onResizeStart,
}: ConversationListProps) {
  return (
    <section
      className={styles.panel}
      style={{ '--conversation-width': `${width}px` } as CSSProperties}
    >
      <div className={styles.searchBar}>
        <div className={styles.searchBox}>
          <ToolbarButton icon="search" label="搜索" muted />
          <span className={styles.placeholder}>搜索</span>
        </div>
        <ToolbarButton icon="plus" label="新建" muted />
      </div>

      <div className={styles.list}>
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            className={classNames(styles.item, {
              [styles.selected]: conversation.id === activeConversationId,
            })}
            type="button"
            onClick={() => onSelect(conversation.id)}
          >
            <Avatar
              redDot={conversation.redDot}
              unread={conversation.unread}
              variant={conversation.avatar}
            />

            <span className={styles.body}>
              <span className={styles.titleRow}>
                <span className={styles.title}>{conversation.title}</span>
                <span className={styles.time}>{conversation.time}</span>
              </span>
              <span className={styles.previewRow}>
                {conversation.mention && <span className={styles.mention}>{conversation.mention}</span>}
                <span className={styles.preview}>{conversation.preview}</span>
                {conversation.marker === 'bubble' && <span className={styles.tinyBubble} />}
                {conversation.muted && <span className={styles.mutedIcon} />}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div
        aria-label="调整会话列表宽度"
        aria-orientation="vertical"
        className={styles.resizeHandle}
        role="separator"
        tabIndex={0}
        onMouseDown={onResizeStart}
      />
    </section>
  )
}

export default ConversationList
