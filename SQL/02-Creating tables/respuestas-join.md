 select trainer.name ,trainer.city, pokemon.name
 from trainer
  INNER JOIN  pokemon
  on pokemon.id_trainer=trainer.id;

1	"Lucas"	"K"	1	"Pikachu"	1	"Electrico"
1	"Lucas"	"K"	3	"Pikachu"	1	"Electrico"
1	"Lucas"	"K"	2	"charmander"	1	"Electrico"
1	"Lucas"	"K"	11	"Mustang"	1	"Fairy"
2	"nacho"	"K"	9	"Mustang"	2	"Fairy"
3	"pele"	"K"	10	"Mustang"	3	"Fairy"



SELECT *
FROM trainer
LEFT JOIN pokemon 
ON pokemon.id_trainer = trainer.id
ORDER BY trainer.id ASC

1	"Lucas"	"K"	1	"Pikachu"	1	"Electrico"
1	"Lucas"	"K"	3	"Pikachu"	1	"Electrico"
1	"Lucas"	"K"	2	"charmander"	1	"Electrico"
1	"Lucas"	"K"	11	"Mustang"	1	"Fairy"
2	"nacho"	"K"	9	"Mustang"	2	"Fairy"
3	"pele"	"K"	10	"Mustang"	3	"Fairy"
4	"messi"	"K"				
6	"Alan"	"Costa"				


La diferencia que hay, es que el inner join mezcla las dos tablas mientras se cumpla la condicion dada.
en el primer join , deja de lado a todos los trainers que no tienen pokemon capturados.

por otro lado, LEFT JOIN, devuelve los elementos de la tabla de la izquierda y lo mas notorio, es que si no hay relacion alguna, lo rellena con null