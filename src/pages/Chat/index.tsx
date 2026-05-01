import type { MouseEvent as ReactMouseEvent } from 'react'
import { useSnapshot } from 'valtio'
import ChatPanel from './components/ChatPanel'
import ConversationList from './components/ConversationList'
import EmptyChat from './components/EmptyChat'
import { chatStore } from '@stores/chat'

function createConversationResizeHandler(startWidth: number) {
  return (event: ReactMouseEvent) => {
    event.preventDefault()

    const startX = event.clientX
    const previousCursor = document.body.style.cursor
    const previousUserSelect = document.body.style.userSelect

    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'

    const handleMouseMove = (moveEvent: MouseEvent) => {
      chatStore.setConversationListWidth(startWidth + moveEvent.clientX - startX)
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
      chatStore.setComposerHeight(startHeight + startY - moveEvent.clientY)
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

function ChatPage() {
  const snapshot = useSnapshot(chatStore)

  return (
    <>
      <ConversationList
        activeConversationId={snapshot.activeConversationId}
        conversations={snapshot.conversations}
        width={snapshot.conversationListWidth}
        onResizeStart={createConversationResizeHandler(snapshot.conversationListWidth)}
        onSelect={chatStore.setActiveConversation}
      />

      {chatStore.activeConversation ? (
        <ChatPanel
          composerHeight={snapshot.composerHeight}
          composerText={snapshot.composerText}
          conversation={chatStore.activeConversation}
          messages={chatStore.activeMessages}
          onComposerResizeStart={createComposerResizeHandler(snapshot.composerHeight)}
          onComposerTextChange={chatStore.setComposerText}
        />
      ) : (
        <EmptyChat />
      )}
    </>
  )
}

export default ChatPage
