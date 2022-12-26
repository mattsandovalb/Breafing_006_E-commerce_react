import './App.css';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [showChatBot, setShowChatBot] = useState(false)
  setTimeout(() => setShowChatBot(true), 5000);

  return (
    <div className="App">
      <Login />
      {/*showChatBot &&
        <div style={{ maxWidth: '300px' }} className='chatbot' >
          <StoreChatbot />
        </div>
     */}
    </div>

  );
}

export default App;
