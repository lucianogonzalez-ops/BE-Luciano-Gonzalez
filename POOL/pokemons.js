import { response } from "express"
import { pool } from "./db.js"
import db from '../models/index.js'
import { where } from "sequelize";
const Pokemon = db.pokemons;


export async function insertPokemon(name, types) {
    try {
        const newPokemon = await Pokemon.create({
            name: name,
            types: types
        });

        return newPokemon;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}
export async function deletePokemonById(pokemonId) {
    try {
        
        const deletedPokemon = Pokemon.destroy({
            where:{
                id:pokemonId
            }
        })
        return deletedPokemon
    }
    catch (error)
    {
        console.error(error.message)
    }
}


export async function updatePokemon(updateType,pokemonId) {
    try {
        
        const updatedPokemon = await Pokemon.update(
            {types:updateType},
            {
                where:{
                    id:pokemonId
                }
            }
        )
        return updatedPokemon
    }
    catch (error)
    {
        console.error(error.message)
    }
}

export async function getAllPokemons() {
    try {
        const pokemons = await Pokemon.findAll();
        console.log(pokemons);

        return pokemons;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

export async function getPokemonsByID(pokemonId) {
    try {
        const pokemon = await Pokemon.findAll({
            where:{
                id:pokemonId
            }
        })
        console.log(pokemon)


        
        return pokemon
    } catch (error) {
        console.error(error.message)
    }
}

getAllPokemons()



