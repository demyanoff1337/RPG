var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();
const cors = require('cors');
const { User, Person } = require('./db/models');
const PORT = process.env.PORT ?? 3001;
const WebSocket = require('ws')

const wss = new WebSocket.Server({
  port: 8080
}, () => console.log('Server started on 8080'))

wss.on('connection', function connection(ws) {
  ws.on('message', function (message) {
    message = JSON.parse(message);
    switch (message.event) {
      case 'message':
        broadcastMessage(message)
        break;
      case 'connection':
        broadcastMessage(message)
        break;
    }
  })
})

function broadcastMessage(message) {
  wss.clients.forEach(client => {
    client.send(JSON.stringify((message)))
  })
}

var app = express();
const userRouter = require('./routes/userRouter');
const radeRouter = require('./routes/radeRouter');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: { secure: false },
  name: 'userCookie',
}));

app.post('/login', async (req, res) => {
  const { mail, password } = req.body;
  try {
    const user = await User.findOne({ where: { mail } });
    if (user) {
      if (password === user.password) {
        return res.json({ exists: true, correct: true, user });
      }
      return res.json({ exists: true, correct: false });
    } else { 
      return res.json({ exists: false });
    }
  } catch (e) {
    return res.status(e);
  }
});

app.get('/person/:id', async (req, res) => {
  try {
    const person = await Person.findOne({ where: { user_id: Number(req.params.id) } });
    if (person) {
      return res.json(person);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.use('/user', userRouter);
app.use('/rade', radeRouter);

app.listen(PORT, () => {
  console.log(`Port ${PORT} started`);
});

module.exports = app;
