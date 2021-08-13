import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '../../../src/components/PokemonOptions';
import { mockPokemons } from '../mocks/pokemons.mock';

describe( 'PokemonOptions', () => {

	let wrapper;

	beforeEach( () => {
		wrapper = shallowMount( PokemonOptions, {
			props: {
				pokemons: mockPokemons
			}
		} );
	} );

	test( 'debe de hacer match con el snapshot', () => {
		expect( wrapper.html() ).toMatchSnapshot();
	} );

	test( 'Debe de mostrar las 4 opciones correctamente', () => {
		const liTags = wrapper.findAll( 'li' );
		expect( liTags.length ).toBe( 4 );

		expect( liTags[ 0 ].text() ).toBe( 'bulbasaur' );
		expect( liTags[ 1 ].text() ).toBe( 'ivysaur' );
		expect( liTags[ 2 ].text() ).toBe( 'venusaur' );
		expect( liTags[ 3 ].text() ).toBe( 'charmander' );

	} );

	test( 'Debe de emitir el evento con sus respectivos parametros', () => {
		const [li1, li2, li3, li4] = wrapper.findAll( 'li' );

		li1.trigger( 'click' );

		expect( wrapper.emitted( 'onSelectPokemon' ).length ).toBe( 1 );
		expect( wrapper.emitted( 'onSelectPokemon' )[ 0 ] ).toEqual( [1] );
	} );

} );
