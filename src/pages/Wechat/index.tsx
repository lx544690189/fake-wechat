import type { MouseEvent as ReactMouseEvent } from 'react'
import { useSnapshot } from 'valtio'
import ChatPanel from './components/ChatPanel'
import ConversationList from './components/ConversationList'
import EmptyChat from './components/EmptyChat'
import Sidebar from './components/Sidebar'
import { wechatStore } from '@stores/wechat'
import styles from './index.module.less'

function createConversationResizeHandler(startWidth: number) {
  return (event: ReactMouseEvent) => {
    event.preventDefault()

    const startX = event.clientX
    const previousCursor = document.body.style.cursor
    const previousUserSelect = document.body.style.userSelect

    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'

    const handleMouseMove = (moveEvent: MouseEvent) => {
      wechatStore.setConversationListWidth(startWidth + moveEvent.clientX - startX)
    }

    const handleMouseUp = () => {
      document.body.style.cursor = previousCursor
      document.body.style.userSelect = previousUserSelect
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }
}

function createComposerResizeHandler(startHeight: number) {
  return (event: ReactMouseEvent) => {
    event.preventDefault()

    const startY = event.clientY
    const previousCursor = document.body.style.cursor
    const previousUserSelect = document.body.style.userSelect

    document.body.style.cursor = 'row-resize'
    document.body.style.userSelect = 'none'

    const handleMouseMove = (moveEvent: MouseEvent) => {
      wechatStore.setComposerHeight(startHeight + startY - moveEvent.clientY)
    }

    const handleMouseUp = () => {
      document.body.style.cursor = previousCursor
      document.body.style.userSelect = previousUserSelect
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }
}

function WechatDesktop() {
  const snapshot = useSnapshot(wechatStore)

  return (
    <main className={styles.desktop}>
      <Sidebar
        activeNav={snapshot.activeNav}
        avatar={snapshot.profileAvatar}
        items={snapshot.sidebarItems}
        onNavSelect={wechatStore.setActiveNav}
      />

      <ConversationList
        activeConversationId={snapshot.activeConversationId}
        conversations={snapshot.conversations}
        width={snapshot.conversationListWidth}
        onResizeStart={createConversationResizeHandler(snapshot.conversationListWidth)}
        onSelect={wechatStore.setActiveConversation}
      />

      {wechatStore.activeConversation ? (
        <ChatPanel
          composerHeight={snapshot.composerHeight}
          composerText={snapshot.composerText}
          conversation={wechatStore.activeConversation}
          messages={wechatStore.activeMessages}
          onComposerResizeStart={createComposerResizeHandler(snapshot.composerHeight)}
          onComposerTextChange={wechatStore.setComposerText}
        />
      ) : (
        <EmptyChat />
      )}
    </main>
  )
}

export default WechatDesktop
