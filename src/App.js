import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import MainPage from './Vistas/MainPage'

function App() {
  const [showChatBot, setShowChatBot] = useState(false)
  setTimeout(() => setShowChatBot(true), 5000)

  return (
    <div className="App">
      <MainPage />
      {/* {showChatBot &&
        <div style={{ maxWidth: '300px' }} className='chatbot' >
          <StoreChatbot />
        </div>
      }*/}
    </div>
  )
}

export default App
