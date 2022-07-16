const router = require('express').Router();
const sha256 = require('sha256');
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

    const user = await User.findOne({ where: { mail: req.body.mail } });
    if (user) {
      if (user.password === sha256(req.body.password)) {
        req.session.user_id = user.id;
        req.session.user_name = user.name;
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

module.exports = router;
