const { __ } = wp.i18n;


const MEDIA = 'jet-forms/media-field';


const messagesConfig = [
	{
		attribute: 'is_timestamp',
		to: [ 'jet-forms/date-field', 'jet-forms/datetime-field' ],
		message: __( 'Check this if you want to send value of this field as timestamp instead of plain datetime' )
	},
	{
		attribute: 'page_break_disabled',
		to: [ 'jet-forms/form-break-field' ],
		message: __( 'Text to show if next page button is disabled. For example - "Fill required fields" etc.' )
	},
	{
		attribute: 'insert_attachment',
		to: [ MEDIA ],
		message: __( 'If checked new attachment will be inserted for uploaded file. Note: work only for logged-in users!' )
	},
	{
		attribute: '',
		to: [ MEDIA ],
		message: __( 'If not set allow to upload 1 file' )
	}
];

const getHelpInstance = block => {
	const messages = {};

	messagesConfig.forEach( msg => {
		if ( msg.to.includes( block.name ) && msg.message ) {
			messages[ msg.attribute ] = msg.message;
		}
	} );

	return attribute => ( attribute in messages ) ? messages[ attribute ] : 'Undefined help';
};

export { getHelpInstance };