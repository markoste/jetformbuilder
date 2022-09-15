import InputData from './InputData';
import { isInputMask } from '../supports';

function InputMaskedData() {
	InputData.call( this );

	this.isSupported  = function ( node ) {
		return isInputMask( node );
	};
	this.addListeners = function () {
		const [ node ] = this.nodes;

		node.addEventListener( 'blur', () => {
			this.value.current = node.inputmask.unmaskedvalue();
		} );
	};
	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		jQuery( node ).inputmask();
		this.getSubmit().submitter.promise( this.removeMask.bind( this ) );
	};
	this.removeMask   = function ( resolve ) {
		const $maskedField = jQuery( this.nodes[ 0 ] );

		// Remove mask if empty value
		if ( !this.value.current ) {
			$maskedField.inputmask( 'remove' );
		}

		resolve();
	};
}

InputMaskedData.prototype = Object.create( InputData.prototype );

export default InputMaskedData;