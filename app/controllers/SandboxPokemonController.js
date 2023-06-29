import { AppState } from "../AppState.js";
import { sandboxPokemonService } from "../services/SandboxPokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

const _drawMyPokemonList = () => {
    let template = '<ul>'
    AppState.currentPokemonList.forEach(pokemon => {
        template += pokemon.MyPokemonListTemplate
    })
    template += '</ul>'
    setHTML('pokemonList', template)
}

export class SandboxPokemonController {
    constructor() {
        console.log('Sandbox Pokemon Controller loaded');
    }

    createMyPokemon() {
        sandboxPokemonService.createMyPokemon()
            .catch(error => {
                Pop.error(error.message)
                console.error(error)
            })
    }

    getMyPokemon() {
        sandboxPokemonService.getMyPokemon()
            .then(() => {
                _drawMyPokemonList()
            })
            .catch(error => {
                Pop.error(error.message)
                console.error(error)
            })
    }

    setActivePokemon(pokemonId) {

    }
}