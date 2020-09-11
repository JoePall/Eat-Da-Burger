CREATE TABLE `burger` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT,
  `devoured` INT DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);