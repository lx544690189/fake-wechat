import dayjs from 'dayjs'
import { find } from 'lodash-es'
import { proxy } from 'valtio'

export type AvatarVariant =
  | 'sunset'
  | 'aunt'
  | 'file'
  | 'service'
  | 'groupBlue'
  | 'public'
  | 'groupWarm'
  | 'pay'
  | 'orange'

export type SidebarIcon =
  | 'chat'
  | 'contacts'
  | 'box'
  | 'aperture'
  | 'butterfly'
  | 'spark'
  | 'target'
  | 'music'
  | 'phone'
  | 'menu'

export type Conversation = {
  id: string
  title: string
  avatar: AvatarVariant
  preview: string
  time: string
  muted?: boolean
  unread?: number
  redDot?: boolean
  marker?: 'bubble'
  mention?: string
}

export type ChatMessage = {
  id: string
  author: 'me' | 'them'
  type: 'text' | 'image'
  content?: string
  imageKind?: 'screenshotTop' | 'screenshotWide'
}

export type TimelineItem =
  | {
      id: string
      type: 'time'
      label: string
    }
  | ChatMessage

export type SidebarItem = {
  id: SidebarIcon
  icon: SidebarIcon
  badge?: number
}

class WechatStore {
  activeNav: SidebarIcon = 'chat'

  activeConversationId: string | null = 'aunt'

  conversationListWidth = 300

  composerHeight = 270

  composerText = '你好'

  profileAvatar: AvatarVariant = 'sunset'

  sidebarItems: SidebarItem[] = [
    { id: 'chat', icon: 'chat', badge: 18 },
    { id: 'contacts', icon: 'contacts' },
    { id: 'box', icon: 'box' },
    { id: 'aperture', icon: 'aperture' },
    { id: 'butterfly', icon: 'butterfly' },
    { id: 'spark', icon: 'spark' },
    { id: 'target', icon: 'target' },
    { id: 'music', icon: 'music' },
  ]

  conversations: Conversation[] = [
    {
      id: 'file-helper',
      title: '文件助手',
      avatar: 'file',
      preview: '[文件] 产品说明草稿.pdf',
      time: dayjs('2026-04-22').format('MM/DD'),
    },
    {
      id: 'aunt',
      title: '家人',
      avatar: 'aunt',
      preview: '[图片]',
      time: '昨天 18:39',
    },
    {
      id: 'service',
      title: '订阅号',
      avatar: 'service',
      preview: '安全提醒: 今日账号防护建议已更新...',
      time: '19:01',
      redDot: true,
    },
    {
      id: 'agent',
      title: '产品设计讨论群（一）',
      avatar: 'groupBlue',
      preview: '小林: 搜索体验可以再收敛一下',
      time: '18:37',
      muted: true,
      redDot: true,
    },
    {
      id: 'public',
      title: '城市服务',
      avatar: 'public',
      preview: '今日提醒: 周末交通出行提示',
      time: '18:36',
    },
    {
      id: 'coding',
      title: '前端交流 5 群',
      avatar: 'groupWarm',
      preview: '小周: 又发现一个边界场景😅',
      time: '18:33',
      muted: true,
      marker: 'bubble',
    },
    {
      id: 'car',
      title: '🔥 社区汽车服务群',
      avatar: 'groupWarm',
      preview: '[9条] 小陈: 明早还有空位吗?',
      time: '18:29',
      muted: true,
      redDot: true,
      mention: '[@所有人]',
    },
    {
      id: 'class',
      title: '周末活动班',
      avatar: 'groupWarm',
      preview: '小王: 收到',
      time: '17:51',
    },
    {
      id: 'estate',
      title: '小区 17 栋 1 单元业主群',
      avatar: 'groupWarm',
      preview: '[4条] 物业助手: [图片]',
      time: '16:14',
      muted: true,
      redDot: true,
      marker: 'bubble',
    },
    {
      id: 'midway',
      title: '技术栈交流群',
      avatar: 'groupWarm',
      preview: '小叶: [链接] 这篇文章写得挺清楚...',
      time: '11:32',
      muted: true,
      redDot: true,
    },
    {
      id: 'pay',
      title: '支付通知',
      avatar: 'pay',
      preview: '[2条] 已支付¥195.00',
      time: '11:23',
      unread: 2,
    },
    {
      id: 'mirror',
      title: 'AI 工具交流群【看群公告】',
      avatar: 'groupWarm',
      preview: '"群助手" 撤回了一条消息',
      time: '09:14',
      muted: true,
      marker: 'bubble',
    },
    {
      id: 'folded',
      title: '折叠的聊天',
      avatar: 'orange',
      preview: '🖊️ 远程协作小组: 先整理到文档里...',
      time: '',
      redDot: true,
    },
  ]

  messagesByConversation: Record<string, TimelineItem[]> = {
    aunt: [
      { id: 'img-1', author: 'me', type: 'image', imageKind: 'screenshotTop' },
      { id: 'time-1', type: 'time', label: '昨天 16:40' },
      {
        id: 'me-1',
        author: 'me',
        type: 'text',
        content: '这个版本先把静态界面搭起来，后面再接真实数据',
      },
      { id: 'them-1', author: 'them', type: 'text', content: '可以' },
      { id: 'them-2', author: 'them', type: 'text', content: '交互先预留就行' },
      { id: 'me-2', author: 'me', type: 'text', content: '会话列表和聊天区都拆成组件了' },
      { id: 'them-3', author: 'them', type: 'text', content: '空状态也要保留吗？' },
      { id: 'img-2', author: 'me', type: 'image', imageKind: 'screenshotWide' },
      { id: 'me-3', author: 'me', type: 'text', content: '保留，未选中会话时就展示空面板' },
      { id: 'me-4', author: 'me', type: 'text', content: 'mock 数据也统一放到状态层里' },
      { id: 'them-4', author: 'them', type: 'text', content: '这样后面替换数据源会轻松很多' },
    ],
  }

  get activeConversation() {
    if (!this.activeConversationId) {
      return undefined
    }

    return find(this.conversations, { id: this.activeConversationId })
  }

  get activeMessages() {
    if (!this.activeConversationId) {
      return []
    }

    return this.messagesByConversation[this.activeConversationId] ?? []
  }

  setActiveConversation = (conversationId: string | null) => {
    this.activeConversationId = conversationId
  }

  setActiveNav = (nav: SidebarIcon) => {
    this.activeNav = nav
  }

  setConversationListWidth = (width: number) => {
    this.conversationListWidth = Math.min(Math.max(width, 260), 520)
  }

  setComposerHeight = (height: number) => {
    this.composerHeight = Math.min(Math.max(height, 150), 420)
  }

  setComposerText = (text: string) => {
    this.composerText = text
  }
}

export const wechatStore = proxy(new WechatStore())
