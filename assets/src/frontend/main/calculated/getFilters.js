import LengthFilter from './filters/LengthFilter';
import FallBackFilter from './filters/FallBackFilter';
import ToDateFilter from './filters/ToDateFilter';
import ToTimeFilter from './filters/ToTimeFilter';
import ToDateTimeFilter from './filters/ToDateTimeFilter';
import AddDayFilter from './filters/AddDayFilter';

const { applyFilters } = wp.hooks;

const getFilterItems = () => applyFilters(
	'jet.fb.restrictions.filters',
	[
		LengthFilter,
		FallBackFilter,
		ToDateFilter,
		ToTimeFilter,
		ToDateTimeFilter,
		AddDayFilter,
	],
);

/**
 * @type {array<Filter>}
 */
let filters  = [];
let response = [];

function pushFilter( name, props = '' ) {
	if ( !filters.length ) {
		filters = getFilterItems().map( current => new current() );
	}

	const filter = filters.find(
		current => name === current.getSlug(),
	);

	if ( !filter ) {
		return;
	}
	props = props.split( ',' ).map(
		item => item.trim(),
	);

	filter.setProps( props );
	response.push( filter );
}

function getFilters( filtersList ) {
	if ( null === filtersList || !filtersList?.length ) {
		return null;
	}

	for ( let filterName of filtersList ) {
		const matches = filterName.match( /^(\w+)\(([^()]+)\)/ );

		if ( null === matches ) {
			pushFilter( filterName );

			continue;
		}

		pushFilter( matches[ 1 ], matches[ 2 ] );
	}

	const tempResponse = [ ...response ];
	response           = [];

	return tempResponse;
}

export default getFilters;