import aperture from '@assets/icons/aperture.svg?raw'
import bellOff from '@assets/icons/bell-off.svg?raw'
import box from '@assets/icons/box.svg?raw'
import butterfly from '@assets/icons/butterfly.svg?raw'
import chat from '@assets/icons/chat.svg?raw'
import chevron from '@assets/icons/chevron.svg?raw'
import contacts from '@assets/icons/contacts.svg?raw'
import folder from '@assets/icons/folder.svg?raw'
import menu from '@assets/icons/menu.svg?raw'
import mic from '@assets/icons/mic.svg?raw'
import miniBubble from '@assets/icons/mini-bubble.svg?raw'
import more from '@assets/icons/more.svg?raw'
import music from '@assets/icons/music.svg?raw'
import phoneCall from '@assets/icons/phone-call.svg?raw'
import phone from '@assets/icons/phone.svg?raw'
import plus from '@assets/icons/plus.svg?raw'
import scissors from '@assets/icons/scissors.svg?raw'
import search from '@assets/icons/search.svg?raw'
import smile from '@assets/icons/smile.svg?raw'
import spark from '@assets/icons/spark.svg?raw'
import target from '@assets/icons/target.svg?raw'
import video from '@assets/icons/video.svg?raw'

const icons = {
  aperture,
  bellOff,
  box,
  butterfly,
  chat,
  chevron,
  contacts,
  folder,
  menu,
  mic,
  miniBubble,
  more,
  music,
  phone,
  phoneCall,
  plus,
  scissors,
  search,
  smile,
  spark,
  target,
  video,
} as const

export type IconName = keyof typeof icons

type IconProps = {
  name: IconName
  className?: string
}

function Icon({ name, className }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={className}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  )
}

export default Icon
