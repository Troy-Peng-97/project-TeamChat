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
            projectID="58808ee8-be29-41bc-97d0-6ded1420e883"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
            renderNewChatForm={() => <Options />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default App;