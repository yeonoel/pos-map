const { Sequelize, DataTypes } = require("sequelize");

const Db =  require('../db.config');

const pos = Db.define("pos", {
  agency_name: {
    type: DataTypes.STRING(300),
    allowNull: false
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  contry: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  commune: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  deposit_withdrawal: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  moov: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  orange: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  mtn: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  wave: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  visibility: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

});


module.exports = pos;