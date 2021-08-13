import pokemonApi from '../api/pokemonApi';

export const getPokemons = () => {
	const pokemonsArr = Array.from( Array( 650 ) );
	return pokemonsArr.map( ( _, i ) => i + 1 );
};

const getPokemonOptions = () => {
	const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 );

	return getPokemonNames( mixedPokemons.splice( 0, 4 ) );
};

export const getPokemonNames = async ( [a, b, c, d] = [] ) => {
	const [p1, p2, p3, p4] = await Promise.all( [
		pokemonApi.get( `/${a}` ),
		pokemonApi.get( `/${b}` ),
		pokemonApi.get( `/${c}` ),
		pokemonApi.get( `/${d}` ),
	] );

	return [
		{ name: p1.data.name, id: p1.data.id },
		{ name: p2.data.name, id: p2.data.id },
		{ name: p3.data.name, id: p3.data.id },
		{ name: p4.data.name, id: p4.data.id },
	];
};

export default getPokemonOptions;
