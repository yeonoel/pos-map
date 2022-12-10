
INSERT INTO `operations` VALUES  (2, 1, 0, 0), (3, 0, 1, 0);

INSERT INTO `operators` VALUES (1, 0, 1, 1, 1), (2, 1, 1, 1, 1), (1, 0, 1, 1, 1);

INSERT INTO `pos_operation` VALUES (1, 1), (2, 2), (3, 3);

INSERT INTO `operation_operator` VALUES (1, 1), (2, 2), (3, 3);



INSERT INTO `pos` VALUES('agence dark', 23230099, "Côte d'ivoire", "Abidjan", "Cocody", 5.3512941, -3.9164684, 1, 1, 0, 0, 1, 'Le47492156', 1);






-- DROP TABLE IF EXISTS `adress`;

-- CREATE TABLE `adress` (
--     `id` INT NOT NULL AUTO_INCREMENT,
--     `longitude` FLOAT,
--     `latitude` FLOAT,
--     PRIMARY KEY(`id`)
-- )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- DROP TABLE IF EXISTS `operation_adress`;

-- CREATE TABLE `operation_adress` (
--     `operation_id` INT NOT NULL,
--     `adress_id` INT NOT NULL,
--     KEY `operation_id` (`operation_id`),
--     KEY `adress_id` (`adress_id`),
--     CONSTRAINT `operation_adress_ibfk_1` FOREIGN KEY (`operation_id`) REFERENCES `operation` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
--     CONSTRAINT `operation_adress_ibfk_2` FOREIGN KEY  (`adress_id`) REFERENCES `adress` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
-- )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;






pos.create({
        id: 4,
        agency_name: "Mon way",
        phone: '0565676413',
        contry: "cote d'ivoire",
        city: "ABIDJAN",
        commune: 'Cocody',
        latitude: 5.3552941,
        longitude: -3.988774,
        deposit_withdrawal: 1,
        moove: 0,
        orange: 0,
        mtn: 1,
        wave: 1,
        visibility: 0
    }).then(res => {
        console.log(res);
    }).catch((error) => {
        console.log('Failed to create a new record: ', error)
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);





    Db.sync().then(() => {
    console.log('return all pos');
    pos.findAll().then(res => {
        console.log(res);
    }).catch((error) => {
        console.error('Failed to retrieve data:', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});;