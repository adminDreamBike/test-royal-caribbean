import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TaskProvider } from './contexts/task.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </StrictMode>,
)
