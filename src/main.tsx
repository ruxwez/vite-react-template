import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalRoutes } from './routes'
import { GlobalContexts } from './contexts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalContexts> 
      <GlobalRoutes />
    </GlobalContexts>
  </StrictMode>,
)
