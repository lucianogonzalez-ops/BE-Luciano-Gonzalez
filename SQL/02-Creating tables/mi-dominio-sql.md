
ALTER TABLE pokemon 
ADD COLUMN types text;


INSERT INTO pokemon (id ,name, id_trainer) VALUES ( 5,'Pikachu',1);



CREATE TABLE pokemon (
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
	id_trainer INT,
    FOREIGN KEY (id_trainer) REFERENCES trainer(id)
)
