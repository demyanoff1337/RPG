const { Skill, Inventory } = require('../db/models');

const router = require('express').Router();



router.get('/', async (req, res) => {
  try {
    const skill = await Skill.findAll()
    console.log(skill);
    res.json(skill)
  }
  catch (err) {
    throw new Error(err);
  }
})

router.get('/:id_inv/:id_skill', async (req, res) => {
  try {
    const inv = await Inventory.findOne({ where: { id: +req.params.id_inv } })
    inv.skill_id = +req.params.id_skill;
    inv.save();
    res.sendStatus(200)
  } catch (e) {
    console.log(e)
  }
})

module.exports = router;
