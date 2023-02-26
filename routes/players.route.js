const express = require('express');
const players = require('../services/players');
const router = new express.Router();
 
router.get('/', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await players.getPlayers(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;