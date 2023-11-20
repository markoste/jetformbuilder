(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?t(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):t(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var l=r.call(t,"string");if("object"!==e(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw l}}return i}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=JetFBActions,u=c.globalTab,s=c.Tools.withPlaceholder,p=c.getFormFieldsBlocks,m=c.convertListToFieldsMap,f=JetFBComponents,b=f.ActionFieldsMap,y=f.WrapperRequiredControl,d=f.ActionFetchButton,g=f.DynamicPropertySelect,v=f.ToggleControl,_=JetFBHooks,w=_.withRequestFields,h=_.withSelectActionLoading,j=wp.components,O=j.TextControl,S=j.SelectControl,E=j.BaseControl,k=wp.i18n.__,A=wp.element,P=A.useState,F=A.useEffect,C=wp.data.withSelect,B=wp.compose.compose,T={first_name:"firstName",last_name:"lastName"};const I=B(C(w),C(h))((function(e){var t,r=e.settings,o=e.onChangeSettingObj,i=e.source,c=e.label,f=e.help,_=e.requestFields,w=e.loadingState,h=u({slug:"active-campaign-tab"}),j=a(P((function(){return[].concat(l(p([],"--")),l(_))})),1)[0];F((function(){for(var e={},t=0,n=Object.entries(null!==(l=r.fields_map)&&void 0!==l?l:{});t<n.length;t++){var l,i=a(n[t],2),c=i[0],u=i[1];T.hasOwnProperty(c)?e[T[c]]=u:e[c]=u}o({fields_map:e})}),[]),F((function(){if(w.success){for(var e=new Set(w.response.fields.map((function(e){return e.value}))),t={},n=0,l=Object.entries(r.fields_map);n<l.length;n++){var i=a(l[n],2),c=i[0],u=i[1];e.has(c)&&(t[c]=u)}o({fields_map:t})}}),[w.success]);var A=function(e){var t;return r.use_global?h[e]:null!==(t=r[e])&&void 0!==t?t:""};return wp.element.createElement(React.Fragment,null,wp.element.createElement(v,{checked:r.use_global,onChange:function(e){return o({use_global:Boolean(e)})}},k("Use","jet-form-builder")+" ",wp.element.createElement("a",{href:JetFormEditorData.global_settings_url+"#active-campaign-tab"},k("Global Settings","jet-form-builder"))),wp.element.createElement(E,{label:c("api_data"),key:"activecampaign_input_key"},wp.element.createElement("div",{className:"jet-control-clear-full jet-d-flex-between"},wp.element.createElement("div",null,wp.element.createElement(O,{key:"api_url",help:c("api_url"),className:"jet-control-clear",disabled:r.use_global,value:A("api_url"),onChange:function(e){return o({api_url:e})}}),wp.element.createElement(O,{key:"api_key",help:c("api_key"),className:"jet-control-clear",disabled:r.use_global,value:A("api_key"),onChange:function(e){return o({api_key:e})}})),wp.element.createElement(d,{initialLabel:c("validate_api_key"),label:c("retry_request"),apiArgs:n(n({},i.fetch),{},{headers:{"API-TOKEN":A("api_key"),"API-URL":A("api_url")}})}))),wp.element.createElement("div",{style:{paddingBottom:"1.2em"}},f("api_key_link_prefix")," ",wp.element.createElement("a",{href:f("api_key_link")},f("api_key_link_suffix"))),w.success&&wp.element.createElement(React.Fragment,null,wp.element.createElement(S,{key:"activecampaign_select_lists",label:c("list_id"),labelPosition:"side",value:r.list_id,onChange:function(e){return o({list_id:e})},options:s(null!==(t=w.response.lists)&&void 0!==t?t:[])}),wp.element.createElement(O,{key:"activecampaign_tags",label:c("tags"),value:r.tags,help:f("tags"),onChange:function(e){return o({tags:e})}}),wp.element.createElement(b,{label:c("fields_map"),fields:m(w.response.fields)},wp.element.createElement(y,null,wp.element.createElement(g,{properties:j})))))}));(0,JetFBActions.addAction)("active_campaign",I)})();