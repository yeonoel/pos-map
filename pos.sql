DROP TABLE IF EXISTS `pos`;

CREATE TABLE `pos` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `agency_name` VARCHAR(225),
    `phone` INT NOT NULL,
    `contry` VARCHAR(100),
    `city` VARCHAR(100),
    `commune` VARCHAR(100),
    `deposit_withdrawal` BOOLEAN,
    `moov` BOOLEAN DEFAULT '0',
    `mtn` BOOLEAN DEFAULT '0',
    `orange` BOOLEAN DEFAULT '0',
    `wave` BOOLEAN DEFAULT '0',
    `latitude` FLOAT DEFAULT '0',
    `longitude` FLOAT DEFAULT '0',
    `password` VARCHAR(225),
    `visibility` BOOLEAN DEFAULT false,
    `createdAt` VARCHAR(500),
    `updatedAt` Varchar(500),
    PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `pos` VALUES (1, 0565676413, "côte d'ivoire", 'Abidjan', 'Abbata', 5.359952, -4.008256, 0), (2, 0565676413, "Nigeria", 'lagos', 'Abbata', 6.524379, 3.379206, 0), (3, 0747492156, "Ghana", 'akra', 'tessi', 5.3552, -4.008, 1);







{
        "agency_name": "Agence center",
         "phone": "0556576413" ,
         "contry": "Côte d'ivoire",
         "city" : "Abidjan",
         "commune": "Marcory",
         "latitude": 5.363452,
         "longitude" : -3.998047,
         "deposit_withdrawal" : 1,
         "moov" : 1,
         "orange" : 1,
         "mtn" : 0,
         "wave" : 1,
         "password" : "Le47492156@",
         "visibility" : 1

}






DROP TABLE IF EXISTS `operation`;

CREATE TABLE `operation` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `deposit` BOOLEAN DEFAULT false,
    `withdrawal` BOOLEAN DEFAULT false,
    `deposit_withdrawal` BOOLEAN DEFAULT false,
    PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `operation` VALUES (1, 0, 0, 1), (2, 1, 0, 0), (3, 0, 1, 0);

DROP TABLE IF EXISTS `operator`;

CREATE TABLE `operator` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `moov` BOOLEAN DEFAULT false,
    `mtn` BOOLEAN DEFAULT false,
    `orange` BOOLEAN DEFAULT false,
    `wave` BOOLEAN DEFAULT false,
    PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `operator` VALUES (1, 0, 0, 1), (2, 1, 1, 1), (3, 1, 1, 0);


DROP TABLE IF EXISTS `pos_operation`;

CREATE TABLE `pos_operation` (
    `pos_id` INT NOT NULL,
    `operation_id` INT NOT NULL,
    KEY `pos_id` (`pos_id`),
    KEY `operation_id` (`operation_id`),
    CONSTRAINT `pos_operation_ibfk_1` FOREIGN KEY (`pos_id`) REFERENCES `pos` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `pos_operation_ibfk_2` FOREIGN KEY  (`operation_id`) REFERENCES `operation` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `pos_operation` VALUES (1, 1), (2, 2), (3, 3)


DROP TABLE IF EXISTS `operation_operator`;

CREATE TABLE `operation_operator` (
    `operation_id` INT NOT NULL,
    `operator_id` INT NOT NULL,
    KEY `operation_id` (`operation_id`),
    KEY `operator_id` (`operator_id`),
    CONSTRAINT `operation_operator_ibfk_1` FOREIGN KEY (`operation_id`) REFERENCES `operation` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `operation_operator_ibfk_2` FOREIGN KEY  (`operator_id`) REFERENCES `operator` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `operation_operator` VALUES (1, 1), (2, 2), (3, 3)

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


