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
