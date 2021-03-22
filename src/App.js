import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.js';
import './CSS/App.css';
import LoginForm from './components/LoginForm.js';
import Options from './components/Options.js'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID="012bfa49-a6bc-44f2-b7ab-ffb713f95e68"
            userName="troyqk"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
            renderOptionsSettings={() => <Options />}
        />
    )
}

export default App;