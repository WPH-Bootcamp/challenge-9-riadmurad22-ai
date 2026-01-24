import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App' // Menunjuk ke folder app
import './styles/index.css' // Menunjuk ke folder styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)