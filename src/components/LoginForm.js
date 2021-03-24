import { useState } from 'react';
import axios from 'axios';

const projectID = '58808ee8-be29-41bc-97d0-6ded1420e883';
const LoginForm = () => {
    const [username, setUsername] = useState('guest');
    const [password, setPassword] = useState('123123');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
    
        try {
          await axios.get('https://api.chatengine.io/chats', { headers: authObject });
    
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          console.log(username, password);
          window.location.reload();
          setError('');
        } catch (err) {
          setError('Oops, incorrect credentials.');
        }
    };
    return (
        <div className="wrapper">
            <div className='form'>
                <h1 className="title">Welcome to Team Chat</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />    
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    )
}

export default LoginForm;