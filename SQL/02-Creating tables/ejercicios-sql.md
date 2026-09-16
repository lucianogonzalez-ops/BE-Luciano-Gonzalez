
EJERCICIO 2
SELECT id
FROM trainer
WHERE id > 2
ORDER BY id DESC

it returns this 
6
4
3



EJERCICIO 3 
UPDATE pokemon
set types = 'Electrico'
where id = 1

it returns this 
UPDATE 1

Query returned successfully in 72 msec.


INSERT INTO pokemon (name, id_trainer, types) 
VALUES ('Magikarp', 1, 'agua');

INSERT 0 1

Query returned successfully in 49 msec.



EJERCICIO 4

DELETE FROM trainer
WHERE name = 'Lucas';



