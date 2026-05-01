import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '@layouts/MainLayout'
import ChatPage from '@pages/Chat'
import ComingSoonPage from '@pages/ComingSoon'
import './index.less'

const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/chat" replace />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="contacts" element={<ComingSoonPage />} />
          <Route path="box" element={<ComingSoonPage />} />
          <Route path="aperture" element={<ComingSoonPage />} />
          <Route path="butterfly" element={<ComingSoonPage />} />
          <Route path="spark" element={<ComingSoonPage />} />
          <Route path="target" element={<ComingSoonPage />} />
          <Route path="music" element={<ComingSoonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
