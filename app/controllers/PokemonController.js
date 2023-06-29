import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

const _drawPokemonList = () => {
    let template = '<ul>'
    AppState.currentPokemonList.forEach(pokemon => {
        let splitPokemonName = pokemon.name.split('')
        splitPokemonName[0] = splitPokemonName[0].toUpperCase()
        pokemon.name = splitPokemonName.join('')
        template += `<li class='selectable' onclick='app.PokemonController.setActivePokemon("${pokemon.url}")'>${pokemon.name}</li>`
    })
    template += '</ul>'
    template += `
        <div class='d-flex justify-content-end'>
            ${AppState.pokemonPrevLink ? `<button onclick='app.PokemonController.getPokemonList("${AppState.pokemonPrevLink}")'>Previous</button>` : ""}
            ${AppState.pokemonNextLink ? `<button onclick='app.PokemonController.getPokemonList("${AppState.pokemonNextLink}")'>Next</button>` : ""}
        </div>
    `
    setHTML('pokemonList', template)
}

const _drawActivePokemon = () => {
    setHTML('activePokemon', AppState.activePokemon.ActivePokemonTemplate)
}

export class PokemonController {
    constructor() {
        console.log('pokemon controller here');
        this.getPokemonList()
    }

    getPokemonList(pokemonUrl = 'https://pokeapi.co/api/v2/pokemon') {
        pokemonService.getPokemonList(pokemonUrl)
            .then(() => {
                _drawPokemonList()
            })
            .catch(error => {
                Pop.error(error.message)
                console.error(error)
            })
    }

    setActivePokemon(pokemonUrl) {
        pokemonService.setActivePokemon(pokemonUrl)
            .then(() => {
                _drawActivePokemon()
            })
            .catch(error => {
                Pop.error(error.message)
                console.error(error)
            })
    }
}