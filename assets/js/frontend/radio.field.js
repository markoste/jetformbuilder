(()=>{"use strict";var t;function e(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var n=(null===(t=window)||void 0===t?void 0:t.JetFormBuilderSettings).strict_mode,o=Boolean(void 0!==n&&n),i=JetFormBuilderAbstract,a=i.InputData,u=i.ReactiveHook,l=JetFormBuilderFunctions.getParsedName;function c(){a.call(this),this.wrapper=null,this.isSupported=function(t){return t.classList.contains("checkradio-wrap")&&t.querySelector(".radio-wrap")},this.addListeners=function(){var t=this;this.enterKey=new u,this.wrapper.addEventListener("change",(function(e){e.target.dataset.custom?t.toggleCustomOption():t.setValue()})),this.wrapper.addEventListener("keydown",this.handleEnterKey.bind(this));var n=this.getCustomInput();this.wrapper.addEventListener("focusout",(function(o){var i;(i=t.nodes,function(t){if(Array.isArray(t))return r(t)}(i)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||e(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).includes(null==o?void 0:o.relatedTarget)||[o.relatedTarget,o.target].includes(n)||t.reportOnBlur()})),n.addEventListener("blur",(function(e){t.setValue()})),!o&&jQuery(this.wrapper).on("change",(function(e){var r;t.value.current==e.target.value||null!==(r=e.target)&&void 0!==r&&null!==(r=r.dataset)&&void 0!==r&&r.custom||(t.callable.lockTrigger(),t.setValue(),t.callable.unlockTrigger())}))},this.setValue=function(){this.value.current=this.getActiveValue()},this.toggleCustomOption=function(){var t=this.lastNode(),e=this.getCustomInput();e.disabled===t.checked&&(e.disabled=!t.checked),t.checked&&e.focus()},this.getActiveValue=function(){var t,r=function(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=e(t))){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){l=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw a}}}}(this.nodes);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(!n.dataset.custom&&n.checked)return n.value}}catch(t){r.e(t)}finally{r.f()}return this.hasCustom?this.getCustomInput().value:""},this.setNode=function(t){var e;t.jfbSync=this,this.nodes=t.getElementsByClassName("jet-form-builder__field radio-field"),this.rawName=this.nodes[0].name,this.name=l(this.rawName),this.inputType="radio",this.wrapper=t,this.hasCustom=!(null===(e=this.lastNode())||void 0===e||null===(e=e.dataset)||void 0===e||!e.custom)}}c.prototype=Object.create(a.prototype),c.prototype.lastNode=function(){return this.nodes[this.nodes.length-1]},c.prototype.getCustomInput=function(){return this.lastNode().closest(".custom-option").querySelector("input.text-field")};const s=c;function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=JetFormBuilderAbstract.BaseSignal;function p(){d.call(this),this.isSupported=function(t,e){return"radio"===t.type},this.runSignal=function(){this.input.calcValue=0;var t,e=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}(this.input.nodes);try{for(e.s();!(t=e.n()).done;){var r,n,o=t.value;if(!o.dataset.custom&&(o.checked=this.input.value.current===o.value,o.checked)){this.input.calcValue+=parseFloat(null!==(r=null===(n=o.dataset)||void 0===n?void 0:n.calculate)&&void 0!==r?r:o.value),this.triggerJQuery(o);break}}}catch(t){e.e(t)}finally{e.f()}if(this.input.hasCustom){var i=this.input.lastNode(),a=this.input.getCustomInput();a.disabled===i.checked&&(a.disabled=!i.checked);var u=this.input.value.current;i.checked&&a.value!==u&&(a.value=u)}}}JetFormBuilderFunctions.isEmpty,p.prototype=Object.create(d.prototype);const y=p;function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){w(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function w(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===h(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var S=JetPlugins.hooks.addFilter;window.JetFormBuilderAbstract=g(g({},window.JetFormBuilderAbstract),{},{RadioData:s,SignalRadio:y}),S("jet.fb.inputs","jet-form-builder/radio-field",(function(t){return[s].concat(m(t))})),S("jet.fb.signals","jet-form-builder/radio-field",(function(t){return[y].concat(m(t))}))})();