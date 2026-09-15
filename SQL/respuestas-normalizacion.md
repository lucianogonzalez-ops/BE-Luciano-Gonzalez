


¿Qué problema concreto tiene una tabla única que repite datos de un mismo autor en cada fila de libro (en vez de separar autores y libros en dos tablas)?

If we use this system, it will create a lot of problems. If we want to modify the name of an author, we will need to modify each record of the books they own; if we forget even one, the database will be ruined.
If we delete a book and it was the last one by an author, we lose the author because the author only existed in that column



¿Qué es la normalización, con tus propias palabras?
in my own words, normalization is the proces to organize and clean the database, so that every piece of data is stored in exactly one place.
The main goal is to delete unnecessary duplication and prevent the problems mentioned in the first questions.


La normalización tiene niveles formales llamados 1FN, 2FN y 3FN, cada uno más estricto que el anterior. Investigá qué es la 1FN (Primera Forma Normal). Explicá con tus propias palabras qué regla exige.

NF is the most basic level of normalization in relational databases. Tables in 1NF need to follow certain rules like atomic values, meaning that every cell of the table needs to save only one value. It doesn't support things like arrays or lists, and it also needs unique column names



Entidad es el nombre que le damos a cada "cosa" distinta que modelamos como su propia tabla (por ejemplo, en el ejemplo de biblioteca, "autor" es una entidad y "libro" es otra entidad). Pensá en el dominio de tu propio proyecto de React: nombrá 2 entidades distintas que tenga tu dominio, y para cada una, un dato que le pertenece SOLO a esa entidad (por ejemplo: la nacionalidad le pertenece al autor, no al libro).

In our project, we have some entities, for example:

Pokémon: It has exclusive data like the pokedex_number.

Type:  double_damage_from, being the types it is weak against.