import initCommon from './init/initCommon';
import initElementor from './init/initElementor';
import BaseSignal from './signals/BaseSignal';
import ReactiveVar from './reactive/ReactiveVar';
import LoadingReactiveVar from './reactive/LoadingReactiveVar';
import InputData from './inputs/InputData';
import HtmlMacro from './html.macro/HtmlMacro';
import Observable from './Observable';
import ReportingInterface from './reporting/ReportingInterface';
import CheckboxData from './inputs/CheckboxData';
import MultiSelectData from './inputs/MultiSelectData';
import CalculatedFormula from './calculated/CalculatedFormula';
import getFilters from './calculated/getFilters';
import applyFilters from './calculated/applyFilters';
import { toDate, toDateTime, toTime } from './calculated/filters/functions';

(
	function ( $ ) {

		window.JetFormBuilderAbstract = {
			...(
				window.JetFormBuilderAbstract ?? {}
			),
			InputData,
			BaseSignal,
			HtmlMacro,
			ReactiveVar,
			LoadingReactiveVar,
			Observable,
			ReportingInterface,
			CheckboxData,
			MultiSelectData,
			CalculatedFormula,
		};

		window.JetFormBuilderFunctions = {
			...(
				window.JetFormBuilderFunctions ?? {}
			),
			getFilters,
			applyFilters,
			toDate,
			toDateTime,
			toTime,
		};

		$( initCommon );
		$( window ).on( 'elementor/frontend/init', initElementor );
	}
)( jQuery );