import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { SoundProvider } from './context/SoundContext'
import { RobotProvider } from './context/RobotContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ToastProvider />
      <Router>
        <div className="dark crt">
          <ThemeProvider>
            <SoundProvider>
              <RobotProvider>
                <App />
              </RobotProvider>
            </SoundProvider>
          </ThemeProvider>
        </div>
      </Router>
    </HeroUIProvider>
  </React.StrictMode>,
)
