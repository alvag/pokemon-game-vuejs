<template>
    <h1>Quién es este pokemon?</h1>

    <PokemonPicture :pokemonId="4" :showPokemon="false"/>

    <PokemonOptions/>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';

export default {
    name: 'PokemonPage',
    components: { PokemonOptions, PokemonPicture }
};
</script>
