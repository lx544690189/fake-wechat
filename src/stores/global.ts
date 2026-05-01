import { proxy } from 'valtio'
import type { AvatarVariant, SidebarItem } from '@typings/chat'

class GlobalStore {
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
}

export const globalStore = proxy(new GlobalStore())
