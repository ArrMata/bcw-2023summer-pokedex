import { AppState } from "../AppState.js"

export class Pokemon {
    constructor(data) {
        this.id = data.id ? data.id : "no id"
        this.name = data.name
        this.img = data.img ? data.img : data.sprites.other['official-artwork'].front_default
        this.weight = data.weight
        this.height = data.height
    }

    get ActivePokemonTemplate() {
        return `
        <div class="col-12 pokemon-name">
            <h2>${this.ComputedName}</h2>
        </div>
        <div class="col-12 text-center">
            <img class="img-fluid"
                src="${this.img}"
                alt="${this.name}">
        </div>
        <div class="col-12 pokemon-info">
            <div>
                <h3>Height: ${this.height}</h3>
                <h3>Weight: ${this.weight}</h3>
            </div>
            ${AppState.account ? `<button onclick="app.SandboxPokemonController.createMyPokemon()">Catch Pokemon!</button>` : ''}
        </div>
        `
    }

    get MyPokemonListTemplate() {
        return `
        <li class='selectable' onclick='app.SandboxPokemonController.setActivePokemon("${this.id}")'>${this.ComputedName}</li>
        `
    }

    get ComputedName() {
        let splitPokemonName = this.name.split('')
        splitPokemonName[0] = splitPokemonName[0].toUpperCase()
        return splitPokemonName.join('')
    }
}