import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app/App'

import './app/styles/index.css'
import { AppProvider } from './app/app-provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
