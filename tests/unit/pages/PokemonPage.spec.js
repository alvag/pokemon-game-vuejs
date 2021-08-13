import { shallowMount } from '@vue/test-utils';
import PokemonPage from '../../../src/pages/PokemonPage';
import { mockPokemons } from '../mocks/pokemons.mock';

describe( 'PokemonPage component', () => {

	let wrapper;

	beforeEach( () => {
		wrapper = shallowMount( PokemonPage );
	} );

	test( 'debe de hacer match con el snapshot', () => {
		expect( wrapper.html() ).toMatchSnapshot();
	} );

	test( 'debe de llamar al mixPokemonArray al montar el componente', () => {
		const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' );
		shallowMount( PokemonPage );

		expect( mixPokemonArraySpy ).toHaveBeenCalled();
	} );

	test( 'debe de hacer match con el snapshot cuando cargan los pokemons', () => {
		const wrapper = shallowMount( PokemonPage, {
			data() {
				return {
					pokemonsArr: mockPokemons,
					pokemon: mockPokemons[ 0 ],
					showPokemon: false,
					showAnswer: false,
					message: ''
				};
			}
		} );

		expect( wrapper.html() ).toMatchSnapshot();
	} );

	test( 'debe mostrar los componentes PokemonPicture y PokemonOptions', () => {

		const wrapper = shallowMount( PokemonPage, {
			data() {
				return {
					pokemonsArr: mockPokemons,
					pokemon: mockPokemons[ 0 ],
					showPokemon: false,
					showAnswer: false,
					message: ''
				};
			}
		} );

		console.log( wrapper.html() );

		expect( wrapper.find( 'pokemon-picture-stub' ).exists() ).toBeTruthy();
		expect( wrapper.find( 'pokemon-options-stub' ).exists() ).toBeTruthy();

		expect( wrapper.find( 'pokemon-picture-stub' ).attributes( 'pokemonid' ) ).toBe( '1' );
		expect( wrapper.find( 'pokemon-options-stub' ).attributes( 'pokemons' ) ).toBeTruthy();
	} );

} );
