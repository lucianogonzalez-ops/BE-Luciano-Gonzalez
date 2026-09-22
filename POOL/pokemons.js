const db = require('../models/index.js');
const { Op } = require('sequelize');


const Pokemon = db.pokemons;
const Trainer = db.trainers

async function insertPokemon(name, types,trainerId) {
    try {
        const newPokemon = await Pokemon.create({
            name: name,
            types: types,
            trainerId:trainerId
        });
        return newPokemon;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

async function deletePokemonById(pokemonId) {
    try {
        const deletedPokemon = await Pokemon.destroy({
            where: { id: pokemonId }
        });
        return deletedPokemon;
    } catch (error) {
        console.error(error.message);
    }
}

async function updatePokemon(updateType, pokemonId) {
    try {
        const updatedPokemon = await Pokemon.update(
            { types: updateType },
            { where: { id: pokemonId } }
        );
        return updatedPokemon;
    } catch (error) {
        console.error(error.message);
    }
}

async function getAllPokemons() {
    try {
        const pokemons = await Pokemon.findAll();
        return pokemons;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

async function getPokemonsByID(pokemonId) {
    try {
        const pokemon = await Pokemon.findAll({
            where: { id: pokemonId }
        });
        return pokemon;
    } catch (error) {
        console.error(error.message);
    }
}

async function getPokemonsByIDHigherThan(pokemonId) {
    try {
        const pokemon = await Pokemon.findAll({
            where: {
                id:  {
                    [Op.gt]: pokemonId
                }
            },
            order: [['id','DESC']]
        });
        return pokemon;
    } catch (error) {
        console.error(error.message);
    }
}


async function getAllPokemonsWithLimitAndOffset() {
    try {
        const pokemon = await Pokemon.findAll({
            limit: 3,
            offset: 4,
            order: [['createdAt', 'DESC']]
        });
        return pokemon;
    } catch (error) {
        console.error(error.message);
    }
}


async function getAllPokemonsByTrainer(trainerName) {
    try {
        const pokemon = await Pokemon.findAll({
        include: [{
                model: Trainer,
                as:'trainer',
                where: { name: trainerName },
                required: true                      }]
        });
        return pokemon;
    } catch (error) {
        console.error(error.message);
    }
}


module.exports = {
    insertPokemon,
    deletePokemonById,
    updatePokemon,
    getAllPokemons,
    getPokemonsByID,
    getAllPokemonsWithLimitAndOffset,
    getPokemonsByIDHigherThan,
    getAllPokemonsByTrainer
};
