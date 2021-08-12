<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1>Quién es este pokemon?</h1>

        <PokemonPicture :pokemon-id="pokemon.id"
                        :show-pokemon="showPokemon"/>

        <PokemonOptions :pokemons="pokemonsArr"
                        @onSelectPokemon="checkAnswer"/>

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="reset">Nuevo Juego</button>
        </template>

    </div>
</template>

<script>
import PokemonPicture from '../components/PokemonPicture';
import PokemonOptions from '../components/PokemonOptions';

import getPokemonOptions from '../helpers/getPokemonOptions';

export default {
    name: 'PokemonPage',
    components: { PokemonOptions, PokemonPicture },
    data() {
        return {
            pokemonsArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        };
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonsArr = await getPokemonOptions();
            const rndInt = Math.floor( Math.random() * 4 );
            this.pokemon = this.pokemonsArr[ rndInt ];
        },
        checkAnswer( id ) {
            this.showPokemon = true;
            this.showAnswer = true;

            if ( this.pokemon.id === id ) {
                this.message = `Correcto, ${this.pokemon.name}`;
            } else {
                this.message = `Opps, era ${this.pokemon.name}`;
            }
        },
        reset() {
            this.mixPokemonArray();
            this.message = '';
            this.pokemon = null;
            this.showPokemon = false;
            this.showAnswer = false;
        }
    },
    mounted() {
        this.mixPokemonArray();
    }
};
</script>
