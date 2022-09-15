import LoadingReactiveVar from '../reactive/LoadingReactiveVar';
import ReactiveVar from '../reactive/ReactiveVar';
import { getSignal } from '../signals/functions';
import { createReport } from '../reporting/functions';
import { getParsedName } from './functions';

const { doAction } = wp.hooks;

/**
 * @property {string} rawName
 * @property {string} name
 * @property {Node|boolean} comment
 * @property {Node|*[]} nodes
 * @property {ReactiveVar} value
 * @property {ConditionChecker|null} checker
 * @property {*} calcValue
 * @property {AdvancedReporting|BrowserReporting} reporting
 * @property {Observable} root
 * @property {PageState} page
 * @property {LoadingReactiveVar} loading
 *
 * @constructor
 */
function InputData() {
	this.rawName = '';
	this.name    = '';
	this.comment = false;
	this.nodes   = [];

	/**
	 * @type {ReactiveVar}
	 */
	this.value = null;
	this.calcValue = null;

	/**
	 * @type {AdvancedReporting|BrowserReporting}
	 */
	this.reporting = null;

	this.checker = null;

	/**
	 * @type {Observable}
	 */
	this.root = null;

	/**
	 * @type {PageState}
	 */
	this.page = null;

	this.loading = new LoadingReactiveVar( false );
	this.loading.make();
}

InputData.prototype.isSupported  = function ( node ) {
	return true;
};
InputData.prototype.addListeners = function () {
	const [ node ] = this.nodes;

	node.addEventListener( 'input', event => {
		this.value.current = event.target.value;
	} );
};
InputData.prototype.makeReactive = function () {
	this.onObserve();
	this.addListeners();
	this.setValue();

	this.value.make();

	doAction( 'jet.fb.input.makeReactive', this );
};
InputData.prototype.onChange     = function () {
	this.calcValue = this.value.current;

	// apply changes in DOM
	this.callable.runSignal();

	// show errors
	this.reporting.validateWithNoticeDebounced();
};
InputData.prototype.watch        = function ( callable ) {
	this.value.watch( callable );
};
/**
 * @param inputData {InputData}
 */
InputData.prototype.merge = function ( inputData ) {
	this.nodes.push( ...inputData.getNode() );
};
InputData.prototype.setValue = function () {
	if ( this.isArray() ) {
		this.value.current = Array.from( this.nodes ).
			map( ( { value } ) => value );
	}
	else {
		this.value.current = this.nodes[ 0 ]?.value;
	}
};
InputData.prototype.setNode  = function ( node ) {
	this.nodes   = [ node ];
	this.rawName = node.name ?? '';
	this.name    = getParsedName( this.rawName );
};
/**
 * Runs once in lifecycle.
 */
InputData.prototype.onObserve = function () {
	this.value     = new ReactiveVar( null );
	const [ node ] = this.nodes;

	/**
	 * Save link to this object
	 * @type {InputData}
	 */
	node.jfbSync = this;

	this.callable = getSignal( node, this );
	this.callable.setInput( this );

	this.reporting = createReport( this );

	this.loading.watch( () => this.onChangeLoading() );
};
InputData.prototype.onChangeLoading = function () {
	this.getSubmit().lockState.current = this.loading.current;

	const [ node ] = this.nodes;
	const wrapper  = node.closest( '.jet-form-builder-row' );

	node.disabled = this.loading.current;
	wrapper.classList.toggle( 'is-loading', this.loading.current );
};
/**
 * @param observable {Observable}
 */
InputData.prototype.setRoot = function ( observable ) {
	this.root = observable;
};
/**
 * By default it runs only if repeater item was removed
 */
InputData.prototype.onRemove = function () {
};
/**
 * @returns {string}
 */
InputData.prototype.getName = function () {
	return this.name;
};
/**
 * @returns {array|string}
 */
InputData.prototype.getValue = function () {
	return this.value.current;
};
/**
 * @returns {array}
 */
InputData.prototype.getNode = function () {
	return this.nodes;
};
/**
 * @returns {boolean}
 */
InputData.prototype.isArray = function () {
	return this.rawName.includes( '[]' );
};
/**
 * @return {*}
 */
InputData.prototype.valueType = function () {
	return String;
};
/**
 * @returns {FormSubmit}
 */
InputData.prototype.getSubmit = function () {
	return this.getRoot().form;
};
/**
 * @returns {Observable}
 */
InputData.prototype.getRoot = function () {
	return this.root?.parent?.root ?? this.root;
};
/**
 * @param page {PageState}
 */
InputData.prototype.setPage = function ( page ) {
	this.page = page;

	this.watch( () => page.updateState() );
};

export default InputData;