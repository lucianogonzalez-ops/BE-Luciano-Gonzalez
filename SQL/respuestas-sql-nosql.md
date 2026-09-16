# ¿Cuál es la diferencia principal entre una base de datos relacional (SQL) y una no relacional (NoSQL)?




The big difference between those databases is how they organize the data. A relational database organizes data into tables and columns, and it relates them to each other using keys.




in the other hand, a non-relational database doesn't use a fixed structure to save data. It groups them using a key-value system like a dictionary, and it also uses documents to save the data, like JSON.



# Nombrá al menos dos motores de base de datos relacionales, y dos no relacionales (de categorías distintas: documentos, clave-valor, o columnar).

Reltional:PostgreSQL y MySQL
Non-relational:MongoDB(it saves them in JSON)
Redis: Uses a key-value system to save data, where each key is an identifier associated with a value.




# Tomemos el ejemplo de biblioteca (authors, books, loans) que ya usaste en el MATERIAL. En una base relacional, esos datos viven en 3 tablas separadas, conectadas por claves foráneas. Si tuvieras que modelar ese mismo ejemplo como base de datos de documentos (tipo MongoDB), una opción posible sería tener un solo documento por libro, con los datos del autor "adentro" del documento (en vez de en otra tabla aparte). Con esa idea como referencia: elegí 2 o 3 entidades de tu propio proyecto (por ejemplo, personajes y su casa/facción) y describí brevemente cómo se verían como documentos, en vez de como tablas separadas.

{
  "_id": "1",
  "name": "Pikachu",
  "type": ["Electric"],
  "level": 27,
  "attacks": [
    { "name": "Thunderbolt","type": "Electric"},
    {"name": "Scratch","type": "Normal"}
  ]
}




# ¿En qué situación elegirías una base no relacional en vez de una relacional? Dame un ejemplo concreto (no tiene que ser de tu proyecto).
Eligiria una base de datos no relacional, cuando los datos cambian constantemente y quiero que sean rapidos.
En un caso de pokemon, por ejemplo, seria el chat en linea, guardaria clave-valor

I`ll  choose a non-relational database when the data changes constantly and I need it to be fast.
In my case (Pokemon) for example , it would be the online chat, and i would save it using a key-value system
