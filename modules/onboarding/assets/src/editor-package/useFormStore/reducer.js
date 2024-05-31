import dispatchers from './dispatchers';

const DEFAULT_STATE = {
	builders: [],
	settings: {},
};

export default function ( state = DEFAULT_STATE, action ) {
	const callback = dispatchers[ action?.type ];

	if ( callback ) {
		return callback( state, action );
	}

	return state;
}