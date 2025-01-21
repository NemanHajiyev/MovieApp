import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Css/Main.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
)
