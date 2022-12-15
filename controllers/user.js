const bcrypt = require('bcrypt');
const Pos = require('../models/pos');
const jwt = require('jsonwebtoken');

//user authentification

exports.signup = (req, res, next) => {
    console.log(req.body);

    let agency_name = req.body.agency_name;
    let contry = req.body.contry;
    let  phone = req.body.phone;
    let city = req.body.city;
    let commune = req.body.commune;
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;

    if (!agency_name ||  !phone|| !contry || !city || !commune || !latitude || !longitude) {   
          res.status(400).send({message: "Content can not be empty"});

          return;
        
        }
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            //create new agent
            const newAgent = {
                agency_name: agency_name,
                phone: phone,
                contry: contry,
                city: city,
                commune: commune,
                latitude: latitude,
                longitude: longitude,
                deposit_withdrawal: req.body.deposit_withdrawal? req.body.deposit_withdrawal : false,
                moove: req.body.moov? req.body.moov : false,
                orange: req.body.orange? req.body.orange : false,
                mtn: req.body.mtn? req.body.mtn : false,
                wave: req.body.wave? req.body.wave : false,
                password: hash,
                visibility: req.body.visibility? req.body.visibility : false
            }
            Pos.create(newAgent)
            .then(agent => { res.status(201).send(agent)})
            .catch((error) => res.status(400).send({ message: error || "an error " }));
        }).catch((error) => {res.status(500).json({error})});

};

exports.login = (req, res, next) => {

    Pos.findOne({ where : { agency_name : req.body.agency_name}
    })
    .then((user) =>{
        if (!user) {
            res.status(401).json({message: "Paire id/password incorrect"})
        } else {
            bcrypt.compare(req.body.password, user.password)
                .then((valide) => {
                    if(!valide) {
                        res.status(401).json({message: "id/password incrrect"})
                    } else {
                        res.status(200).json({
                            userId: user.id,
                            token: jwt.sign(
                                { userId: user.id},
                                'RANDOM_TOKEN_SECRET',
                                {expiresIn: '24'}
                            )
                        });
                    }
                }).catch((error) => res.status(500).json({error}))
        }
    }).catch((error) => {res.status(401).jason({error})});
}


