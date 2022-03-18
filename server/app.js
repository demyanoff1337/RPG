const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();
const cors = require('cors');
const { User, Person } = require('./db/models');
const PORT = process.env.PORT ?? 3001;

const app = express();
const userRouter = require('./routes/userRouter');

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

app.listen(PORT, () => {
  console.log(`Port ${PORT} started`);
});

module.exports = app;
