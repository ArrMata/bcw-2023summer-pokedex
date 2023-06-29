import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokemonApi } from "./AxiosService.js"

class PokemonService {

    getPokemonList(pokemonUrl) {
        return pokemonApi.get(pokemonUrl)
            .then(res => {
                AppState.pokemonNextLink = res.data.next
                AppState.pokemonPrevLink = res.data.previous
                AppState.currentPokemonList = res.data.results
            })
    }

    setActivePokemon(pokemonUrl) {
        return pokemonApi.get(pokemonUrl)
            .then(res => {
                AppState.activePokemon = new Pokemon(res.data)
            })
    }
}

export const pokemonService = new PokemonService