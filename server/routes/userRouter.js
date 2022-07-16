const router = require('express').Router();
const sha256 = require('sha256');
const { User, Role, Person, Inventory } = require('../db/models');
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/img/');
  },

  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

router.get('/auth', (req, res) => {
  try {
    if (req.session?.user_name) {
      const data = {};
      data.nickname = req.session.user_nickname
      data.id = req.session.user_id;
      data.role = req.session.user_role;
      res.json(data);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { mail: req.body.mail } });
    if (user) {
      if (user.password === sha256(req.body.password)) {
        req.session.user_id = user.id;
        req.session.user_name = user.name;
        req.session.user_nickname = user.nickname;
        const { id, nickname } = user;
        const role = await Role.findByPk(user.role_id);
        req.session.user_role = role.role_name;
        res.status(200).json({ role, id, nickname });
      } else {
        res.sendStatus(234);
      }
    } else {
      res.sendStatus(233);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.post('/signup', /*upload.single('file'),*/ async (req, res) => {
  console.log(req.body)
  try {
    const userOne = await User.findOne({ where: { mail: req.body.mail } });
    if (userOne) {
      return res.sendStatus(234);
    }

    const user = await User.create({
      name: req.body.name,
      nickname: req.body.nickname,
      role_id: Number(req.body.role),
      mail: req.body.mail,
      password: sha256(req.body.password),
    });
    const invent = await Inventory.create();
    const person = await Person.create({
      user_id: user.id,
      level: 1,
      exp: 0,
      HP: 300,
      damage: 50,
      armor: 5,
      money: 10,
      critical: 15,
      inventory_id: invent.id,
    });
        req.session.user_id = user.id;
        req.session.user_nickname = user.nickname;
        req.session.user_name = user.name;
    const role = await Role.findByPk(Number(req.body.role));
    const { id, nickname } = user;
    req.session.user_role = role.role_name;
    res.status(200).json({ role, id, nickname });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('auth');
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.get('/profile', async (req, res) => {
  try {
    if (req.session.user_id) {
      const user = await User.findByPk(req.session.user_id);
      res.status(200).json(user);
    } else {
      res.sendStatus(234);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// router.put('/', upload.single('file'), async (req, res) => {
//   try {
//     if (req.session.user_id) {
//       if (req.file) {
//         await User.update({ avatar: `/img/${req.file.originalname}` }, { where: { id: req.session.user_id } });
//         res.sendStatus(200);
//       } else {
//         await User.update(req.body, { where: { id: req.session.user_id } });
//         res.sendStatus(200);
//       }
//     } else {
//       res.sendStatus(303);
//     }
//   } catch (e) {
//     console.log(e);
//     res.sendStatus(500);
//   }
// });

module.exports = router;
