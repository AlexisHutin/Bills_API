const express = require('express');
const router = express.Router();

const customersCtrl = require('../controllers/CustomersController');

router.post('/add', customersCtrl.add);
router.post('/edit', customersCtrl.edit);
router.delete('/delete', customersCtrl.delete);

router.get('/:id', customersCtrl.view);

module.exports = router;