const router = require('express').Router();
const fs = require('fs');

router.get('/names', async (req, res) => {
  const names = fs.readFileSync('../db/names', 'UTF-8').split('\n');
  const number = Math.floor(Math.random() * names.length - 10);
  const tenNames = names.slice(number, number + 10);
  res.json({ tenNames });
});


module.exports = router;
