const express = require('express');
const router = express.Router();
const posCtrl = require('../controllers/pos');





//find all operator
router.get('/', posCtrl.getAllOperatorsPos);

// find mtn operator
router.get('/mtn', posCtrl.returnActiveMtnAgents);

// find orange operator
router.get('/orange', posCtrl.returnActiveOrangeAgents);

// find mtn operator
router.get('/wave', posCtrl.returnActiveWaveAgents);

// find mtn operator
router.get('/moov', posCtrl.returnActiveMoovAgents);




// //update an agent
// router.put('/:id', posCtrl.updateAgent);

// //delete agent
// router.delete('/id', this.posCtrl.deleleAgent);



module.exports = router;