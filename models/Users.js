const {Sequelize, DataType} = require('sequilize');

const Db = require('../db.config');

const users = Db.define("users", {
    agency_name: {
        type:  DataType.STRING,
        allowNull: false 
    },
    password : {
        type : DataType.STRING,
        allowNull : false
    }
})

module.exports = users;