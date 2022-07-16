const { Weapon, Inventory } = require('../db/models');

const router = require('express').Router();



router.get('/', async (req, res) => {
  try {
    const weapon = await Weapon.findAll()
    console.log(weapon);
    res.json(weapon)
  }
  catch (err) {
    throw new Error(err);
  }
})

router.get('/:id_inv/:id_wep', async(req, res) => {
  try {
    const inv = await Inventory.findOne({where: {id:+req.params.id_inv}})
    inv.weapon_id = +req.params.id_wep;
    inv.save();
    res.sendStatus(200)
  } catch (e) {
    console.log(e)
  }
})

module.exports = router;
