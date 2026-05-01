import { useSnapshot } from 'valtio'
import ChatPanel from './components/ChatPanel'
import ConversationList from './components/ConversationList'
import EmptyChat from './components/EmptyChat'
import Sidebar from './components/Sidebar'
import { wechatStore } from '../../stores/wechat'
import styles from './index.module.less'

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
        onSelect={wechatStore.setActiveConversation}
      />

      {wechatStore.activeConversation ? (
        <ChatPanel conversation={wechatStore.activeConversation} messages={wechatStore.activeMessages} />
      ) : (
        <EmptyChat />
      )}
    </main>
  )
}

export default WechatDesktop
