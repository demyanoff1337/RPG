const { Flask } = require('../db/models');

const router = require('express').Router();



router.get('/', async (req, res) => {
  try {
    const flask = await Flask.findAll()
    console.log(flask);
    res.json(flask)
  }
  catch (err) {
    throw new Error(err);
  }
})

module.exports = router;
