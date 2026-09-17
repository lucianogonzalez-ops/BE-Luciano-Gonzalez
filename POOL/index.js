const express = require('express');
const { showAllPokemons,showAllPokemonsByID,insertIntoPokemon, deletePokemon, updatePokemon} = require('./test-de-conexion');
const app = express();

const PORT = 3000;

app.use(express.json());


app.get('/items', async(req, res) => {
    const items = await showAllPokemons();
    res.json(items);
});

app.put('/items', async(req, res) => {
    try {
    const { types,id } = req.body;
    const content = await updatePokemon(types,id);
    res.status(200).json(content);
      
    } catch (error) {
      
    }
});

app.get('/items/:id', async(req, res) => {
  const pokemonId = Number(req.params.id);
  const pokemon = await showAllPokemonsByID(pokemonId);
  
  
  res.json(pokemon);
});
app.post('/items', async(req, res) => {

  try {
    const { name, id_trainer,types } = req.body;
    const content = await insertIntoPokemon(name,id_trainer,types);
    res.status(201).json(content);
  } catch (error) {
    console.log(error)
  }
});




app.delete('/items/:id', async (req, res) => {
  try {
    const { id} = req.body;
    const content = await deletePokemon(id);
    res.status(200).json(content);
  } catch (error) {
    console.log(error)
  }
});

  

app.listen(PORT, () => {
  console.log(`starter-api corriendo en http://localhost:${PORT}`);
});
