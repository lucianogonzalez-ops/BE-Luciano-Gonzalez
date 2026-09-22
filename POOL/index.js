const express = require('express');
const { getAllPokemons,getPokemonsByID,insertPokemon, deletePokemonById, updatePokemon, getAllPokemonsWithLimitAndOffset, getPokemonsByIDHigherThan, getAllPokemonsByTrainer} = require('./pokemons');
const app = express();

const PORT = 3000;

app.use(express.json());


app.get('/items', async(req, res) => {
    const items = await getAllPokemons();
    res.json(items);
});

app.get('/items/:id', async(req, res) => {
      const { id } = req.params
      const items = await getPokemonsByID(id);
    res.json(items);
});

app.get('/pokemons/trainer/:trainer', async(req, res) => {
    const { trainer } = req.params
    const items = await getAllPokemonsByTrainer(trainer);
    res.json(items);
});

app.get('/pokemons/:id', async(req, res) => {
    const { id } = req.params
    const items = await getPokemonsByIDHigherThan(id);
    res.json(items);
});




app.get('/offsset', async(req, res) => {
    const items = await getAllPokemonsWithLimitAndOffset();
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










app.post('/items', async(req, res) => {

  try {
    const { name, types } = req.body;
    const content = await insertPokemon(name,types);
    res.status(201).json(content);
  } catch (error) {
    console.log(error)
  }
});




app.delete('/items/:id', async (req, res) => {
  try {
    const { id} = req.body;
    const content = await deletePokemonById(id);
    res.status(200).json(content);
  } catch (error) {
    console.log(error)
  }
});

  

app.listen(PORT, () => {
  console.log(`starter-api corriendo en http://localhost:${PORT}`);
});
