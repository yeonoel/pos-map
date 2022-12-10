const Pos = require('../models/pos');
const Db = require('../db.config');


// mtn
exports.returnActiveMtnAgents = (req, res, next) => {
    console.log("test reussi");
    Pos.findAll({where : { mtn: true, visibility : true }})
        .then((agents => { res.status(200).json({response : agents })}))
        .catch((error) => res.status(400).send({ message: error || "an error " }));

};

// orange
exports.returnActiveOrangeAgents = (req, res, next) => {
    console.log("test reussi");
    Pos.findAll({where : { orange: true, visibility : true }})
        .then((agents => { res.status(200).json({response : agents })}))
        .catch((error) => res.status(400).send({ message: error || "an error " }));

};



// Wave
exports.returnActiveWaveAgents = (req, res, next) => {
    console.log("test reussi");
    Pos.findAll({where : { wave: true, visibility : true }})
        .then((agents => { res.status(200).json({response : agents })}))
        .catch((error) => res.status(400).send({ message: error || "an error " }));

};



// wave
exports.returnActiveMoovAgents = (req, res, next) => {
    console.log("test reussi");
    Pos.findAll({where : { moov: true, visibility : true }})
        .then((agents => { res.status(200).json({response : agents })}))
        .catch((error) => res.status(400).send({ message: error || "an error " }));

};


exports.getAllOperatorsPos = (req, res, next) => {

    Pos.findAll({ where: {visibility : 1}})
        .then(datas => { res.status(200).json({ response: datas })})
        .catch((error) => {console.log('Failled :', error)});
};


exports.updateAgent = (req, res, next) => {
    const _id = req.params.id;
    Pos.update(req.body, { where: {id : _id}})
        .then(num  => { 
            if (num == 1) {
                res.send({message: "Tutoriel was uodated successfully."
            });
        } else {
            req.send({message: `Cannot update Agent with id=${id}. Maybe Tutorial was not found or req.body is empty!`})
        }
        })
        .catch((error) => {console.log('Failled :', error)});
};

exports.deleteAgent = (req, res, next) => {
    const _id = req.params.id;

    Pos.destroy({ where: {id : _id}})
        .then(num => { 
            if (num == 1) {
                    res.send({ message: 'Agent was deleted successfully!'
                });
            } else {
                res.send({ 
                    message: `Cannot delete Agent with id=${id}. Maybe Agent was not found!`
                })
            }
         })
        .catch((error) => {console.log('Failled :', error)});
};












