const
	path = require( 'path' ),
	fs   = require( 'fs' );

function getIndexFiles( dirPath ) {
	const savePaths = {};

	fs.readdirSync( dirPath ).map( pageDir => {

		const pathPage = path.join( dirPath, pageDir );
		const file     = fs.readdirSync( pathPage ).
			find( file => /^index\.js$/.test( file ) );

		savePaths[ `admin/pages/${ pageDir }` ] = path.join( pathPage,
			file );
	} );

	return savePaths;
}

function getAdminPagesEntries() {
	const pagesPath = path.join( __dirname, 'src', 'admin', 'pages' );

	return getIndexFiles( pagesPath );
}

function isDev() {
	return process.env.npm_lifecycle_event === 'dev';
}

module.exports = {
	getAllEntries() {
		return {
			'frontend/main': './frontend/main/main.js',
			'frontend/media.field': './frontend/media.field/main.js',
			'frontend/multi.step': './frontend/multi.step/main.js',
			'frontend/repeater.field': './frontend/repeater.field/main.js',
			'frontend/calculated.field': './frontend/calculated.field/main.js',
			'frontend/conditional.block': './frontend/conditional.block/main.js',
			'frontend/advanced.reporting': './frontend/advanced.reporting/main.js',
			'frontend/dynamic.value': './frontend/dynamic.value/main.js',
			'frontend/calculated.module': './frontend/calculated.module/main.js',
			'frontend/deprecated': './frontend/deprecated/main.js',
			'editor/form.builder': './editor/main.js',
			'editor/default.builder': './editor/form-block.js',
			'editor/package': './package/manager.js',
			'admin/package': './admin-package/manager.js',
			'admin/vuex.package': './admin-vuex-package/manager.js',
			...getAdminPagesEntries(),
		};
	},
	isDev,
};