const router = require('express').Router();
const cepService = require('../services/cepService');

router.get('/:cep', async (req, res, next) => {
  const { cep } = req.params;
  const { status, data, error } = await cepService.getFullAdress(cep);
  if (error) return res.status(status).json(error);
  return res.status(status).json(data);
})

module.exports = router;