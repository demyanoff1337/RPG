var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();
const cors = require('cors');
const { User, Person, Weapon, Skill, Flask, Armor, Inventory } = require('./db/models');
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
const weaponRouter = require('./routes/weaponRouter');
const flascRouter = require('./routes/flaskRouter');
const skillRouter = require('./routes/skillRouter');
const armorRouter = require('./routes/armorRouter');

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

app.get('/inv/:id', async (req, res) => {
  try {
    const inventory = await Inventory.findOne({ where: { id: Number(req.params.id) } });
    if (inventory) {
      return res.json(inventory);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.get('/weap/:id', async (req, res) => {
  try {
    const weapon = await Weapon.findOne({ where: { id: Number(req.params.id) } });
    if (weapon) {
      return res.json(weapon);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.get('/arm/:id', async (req, res) => {
  try {
    const armor = await Armor.findOne({ where: { id: Number(req.params.id) } });
    if (armor) {
      return res.json(armor);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.get('/fire/:id', async (req, res) => {
  try {
    const fire = await Skill.findOne({ where: { id: Number(req.params.id) } });
    if (fire) {
      return res.json(fire);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.get('/flask1/:id', async (req, res) => {
  try {
    const flask = await Flask.findOne({ where: { id: Number(req.params.id) } });
    if (flask) {
      return res.json(flask);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.get('/weapon-set/:id/:id2/:person_id', async (req, res) => {
  try {
    console.log(req.params)
    const user = await Person.findOne({ where: { id: Number(req.params.person_id) } });
    const inv = await Inventory.findOne({ where: { id: user.inventory_id } });
    if (user) {
      user.weapon_id = req.params.id === 'empty' ? null : Number(req.params.id);
      user.save();
      inv.weapon_id = req.params.id2 === 'empty' ? null : Number(req.params.id2);
      inv.save();
      return res.sendStatus(200);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.get('/armor-set/:id/:id2/:person_id', async (req, res) => {
  try {
    const user = await Person.findOne({ where: { id: Number(req.params.person_id) } });
    const inv = await Inventory.findOne({ where: { id: user.inventory_id } });
    if (user) {
      user.armor_id = req.params.id === 'empty' ? null : Number(req.params.id);
      user.save();
      inv.armor_id = req.params.id2 === 'empty' ? null : Number(req.params.id2);
      inv.save();
      return res.sendStatus(200);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.get('/fire-set/:id/:id2/:person_id', async (req, res) => {
  try {
    const user = await Person.findOne({ where: { id: Number(req.params.person_id) } });
    const inv = await Inventory.findOne({ where: { id: user.inventory_id } });
    if (user) {
      user.skill_id = req.params.id === 'empty' ? null : Number(req.params.id);
      user.save();
      inv.skill_id = req.params.id2 === 'empty' ? null : Number(req.params.id2);
      inv.save();
      return res.sendStatus(200);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.get('/flask1-set/:id/:id2/:person_id', async (req, res) => {
  try {
    const user = await Person.findOne({ where: { id: Number(req.params.person_id) } });
    const inv = await Inventory.findOne({ where: { id: user.inventory_id } });
    if (user) {
      user.flask1_id = req.params.id === 'empty' ? null : Number(req.params.id);
      user.save();
      inv.flask1_id = req.params.id2 === 'empty' ? null : Number(req.params.id2);
      inv.save();
      return res.sendStatus(200);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.get('/flask2-set/:id/:id2/:person_id', async (req, res) => {
  try {
    const user = await Person.findOne({ where: { id: Number(req.params.person_id) } });
    const inv = await Inventory.findOne({ where: { id: user.inventory_id } });
    if (user) {
      user.flask2_id = req.params.id === 'empty' ? null : Number(req.params.id);
      user.save();
      inv.flask2_id = req.params.id2 === 'empty' ? null : Number(req.params.id2);
      inv.save();
      return res.sendStatus(200);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.get('/flask3-set/:id/:id2/:person_id', async (req, res) => {
  try {
    const user = await Person.findOne({ where: { id: Number(req.params.person_id) } });
    const inv = await Inventory.findOne({ where: { id: user.inventory_id } });
    if (user) {
      user.flask3_id = req.params.id === 'empty' ? null : Number(req.params.id);
      user.save();
      inv.flask3_id = req.params.id2 === 'empty' ? null : Number(req.params.id2);
      inv.save();
      return res.sendStatus(200);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.get('/flask4-set/:id/:id2/:person_id', async (req, res) => {
  try {
    const user = await Person.findOne({ where: { id: Number(req.params.person_id) } });
    const inv = await Inventory.findOne({ where: { id: user.inventory_id } });
    if (user) {
      user.flask4_id = req.params.id === 'empty' ? null : Number(req.params.id);
      user.save();
      inv.flask4_id = req.params.id2 === 'empty' ? null : Number(req.params.id2);
      inv.save();
      return res.sendStatus(200);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});

app.get('/money-exp/:id/:money/:exp', async (req, res) => {
  try {
    const user = await Person.findOne({ where: { id: Number(req.params.id) } });
    if (user) {
      user.money = Number(req.params.money);
      user.exp = Number(req.params.exp);
      user.save();
      return res.sendStatus(200);
    }
    return res.json({ failed: true });
  } catch (e) {
    return res.send(e);
  }
});


app.use('/user', userRouter);
app.use('/rade', radeRouter);
app.use('/weapon', weaponRouter);
app.use('/armor', armorRouter);
app.use('/flasc', flascRouter);
app.use('/skill', skillRouter);

app.listen(PORT, () => {
  console.log(`Port ${PORT} started`);
});

module.exports = app;
