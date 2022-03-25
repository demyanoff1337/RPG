import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const socket = useRef()
    const [connected, setConnected] = useState(false);
    const [username, setUsername] = useState('')
    const navigate = useNavigate();

    const goBack = (e) => {
      const goGoGo = document.querySelectorAll('.go-go-go');
      const loading = document.querySelector('.on-load');
      loading.classList.remove('hide-animations-in');
      goGoGo[0].classList.add('logo-left-s');
      goGoGo[1].classList.add('logo-right-s');
      goGoGo[2].classList.add('loading-left-s');
      goGoGo[3].classList.add('loading-right-s');
      setTimeout(() => {
        navigate('/square');
      }, 700);
    }

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
      const onLoad = document.querySelector('#on-load');
    setTimeout(() => {
      onLoad.classList.add('hide-animations-in');
    }, 870);
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
        <div class="on-load hide-animations-in">
    <img class="go-go-go" src="1.png"/>
    <img class="go-go-go" src="2.png"/>
    <div class="go-go-go"></div>
    <div class="go-go-go"></div>
    </div>

    <div id="on-load" class="on-load">
    <img class="logo-left-f delay02" src="1.png"/>
    <img class="logo-right-f delay02" src="2.png"/>
    <div class="loading-left delay02"></div>
    <div class="loading-right delay02"></div>
    </div>
          <div onClick={goBack} class="back-from-chat">x</div>
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
