import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { api } from "./AxiosService.js"

class SandboxPokemonService {
    createMyPokemon() {
        return api.post('api/pokemon', AppState.activePokemon)
            .then(res => console.log(res))
    }

    getMyPokemon() {
        return api.get('api/pokemon')
            .then(res => {
                AppState.currentPokemonList = res.data.map(pokemonData => new Pokemon(pokemonData))
            })
    }
}

export const sandboxPokemonService = new SandboxPokemonService()