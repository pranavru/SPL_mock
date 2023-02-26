const express = require('express');
const config = require('../services/config');
const router = new express.Router();
 
router.get('/', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await config.getConfig(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;