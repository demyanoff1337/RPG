import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const socket = useRef()
    const [connected, setConnected] = useState(false);
    const [username, setUsername] = useState('')


    function connect() {
        socket.current = new WebSocket('ws://localhost:8080')

        socket.current.onopen = () => {
            setConnected(true)
            const message = {
                event: 'connection',
                username,
                id: Date.now()
            }
            socket.current.send(JSON.stringify(message))
        }
        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            setMessages(prev => [message, ...prev])
             const item =  window.localStorage.getItem('Almambek')
            if (item){
            // console.log(window.localStorage.getItem('Almambek'))
                console.log(item)
                const prev = JSON.parse(item)
                console.log({prev})
                const next = [{id: message.id,message: message.message,event: message.event, username: message.username},...prev]
                setMessages(next)
            window.localStorage.setItem('Almambek', JSON.stringify(next))
            } else {
                console.log("ELSE")
            window.localStorage.setItem('Almambek', JSON.stringify([{message: message.message,event: message.event, username: message.username}]))
            }
        }
        socket.current.onclose= () => {
            console.log('Socket закрыт')
        }
        socket.current.onerror = () => {
            console.log('Socket произошла ошибка')
        }
    }

    useEffect(()=> {
        const messagesFromLS = JSON.parse(window.localStorage.getItem('Almambek'))
        console.log(messagesFromLS)
        if (messagesFromLS) {
            setMessages(messagesFromLS)
        }
        else {
            setMessages([])
        }
    },[])
    const sendMessage = async () => {
        const message = {
            username,
            message: value,
            id: Date.now(),
            event: 'message'
        }
        socket.current.send(JSON.stringify(message));
        setValue('')
    }


    return (
        <>
          <div class="back-from-chat">x</div>
          <img class="chat-back" src="chat-back2.png"/>
          <img class="chat-fire" src="fffire.gif"/>
            <div className="center">
                <div>
                    {!connected ?   <div className="form">
                        <input
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            type="text"
                            placeholder="Введите ваше имя"/>
                        <button onClick={connect}>Войти</button>
                    </div> :

                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button onClick={sendMessage}>Отправить</button>
                </div>
                    }
                <div className="messages">
                    {messages && messages.map(mess =>
                        <div key={mess.id}>
                            {mess.event === 'connection'
                                ? <div className="connection_message">
                                    <h4 className="user">{mess.username} вошел в чат</h4>
                                </div>
                                : <div className="message">
                                    <span className='username-c'>&nbsp;{mess.username}</span>: {mess.message}
                                </div>
                            }

                        </div>
                    )}
                </div>
            </div>
            </div>

        </>
    );
};

export default Chat;
