import { response } from "express"
import { pool } from "./db.js"


export async function insertIntoPokemon(name, id_trainer, types) {
    try {
        const queryText = 'INSERT INTO pokemon (name, id_trainer, types) VALUES ($1, $2, $3)'
        
        const values = [name, id_trainer, types]
        
        const response = await pool.query(queryText, values)
        return response
    }
    catch (error)
    {
        console.error(error.message)
    }
}

export async function deletePokemon(id) {
    try {
        const queryText = 'DELETE FROM pokemon WHERE id = $1'
        
        const values = [id]
        
        const response = await pool.query(queryText, values)
        return response
    }
    catch (error)
    {
        console.error(error.message)
    }
}


export async function updatePokemon(types , id) {
    try {
        const queryText = 'UPDATE pokemon set types = $1 where id = $2'

        
        const values = [types,id]
        
        const response = await pool.query(queryText, values)
        return response
    }
    catch (error)
    {
        console.error(error.message)
    }
}

export async function showAllPokemons() {
    try {
        const res = await pool.query('SELECT * FROM pokemon')
        console.log(res.rows)
        
        return res
    } catch (error) {
        console.error(error.message)
    }
}

export async function showAllPokemonsByID(pokemonId) {
    try {
        const queryText = 'SELECT name,types FROM pokemon WHERE id = $1';

        const values = [pokemonId];

        const response = await pool.query(queryText, values);
        
        return response
    } catch (error) {
        console.error(error.message)
    }
}




