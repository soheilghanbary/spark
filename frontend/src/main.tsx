import './styles/app.css'

import { App } from '@/App'
import { QueryProvider } from '@/components/providers/query-provider.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>,
)
