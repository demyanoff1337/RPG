const { Armor, Inventory } = require('../db/models');

const router = require('express').Router();



router.get('/', async (req, res) => {
  try {
    const armor = await Armor.findAll()
    console.log(armor);
    res.json(armor)
  }
  catch (err) {
    throw new Error(err);
  }
})

router.get('/:id_inv/:id_armor', async (req, res) => {
  try {
    const inv = await Inventory.findOne({ where: { id: +req.params.id_inv } })
    inv.armor_id = +req.params.id_armor;
    inv.save();
    res.sendStatus(200)
  } catch (e) {
    console.log(e)
  }
})


module.exports = router;
