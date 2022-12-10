// const Db =  require('../Db/db');
// const pos = require('./pos');
// const operations = require('./operations');


// pos.belongsToMany(operations, { through: 'pos_operation'});
// operations.belongsToMany(pos, { through: 'pos_operation'});



// Db.sync().then(() => {
//     console.log('All tables created successfully!');
//   }).catch((error) => {
//     console.error('Unable to create table : ', error);
//   });