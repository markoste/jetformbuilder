(()=>{"use strict";(()=>{const e=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"jet-forms/form-block","title":"JetForm","keywords":["jetform","form","builder","crocoblock"],"textdomain":"jet-form-builder","supports":{"html":false,"className":true},"editorScript":"jet-form-builder/form","editorStyle":"jet-form-builder-others","category":"layout","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"42\\" height=\\"2\\" rx=\\"1\\" fill=\\"#162B40\\"/><path d=\\"M0 5C0 4.44772 0.447715 4 1 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H1C0.447715 6 0 5.55228 0 5Z\\" fill=\\"#162B40\\"/><rect x=\\"1\\" y=\\"2\\" width=\\"62\\" height=\\"61\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"7\\" y=\\"19\\" width=\\"50\\" height=\\"11\\" rx=\\"2\\" fill=\\"#6F8CFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"7\\" y=\\"35\\" width=\\"50\\" height=\\"11\\" rx=\\"2\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"39\\" y=\\"51\\" width=\\"18\\" height=\\"7\\" rx=\\"2\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"form_id":{"type":"number","default":0},"submit_type":{"type":"string","default":"reload"},"required_mark":{"type":"string","default":"*"},"fields_layout":{"type":"string","default":"column"},"enable_progress":{"type":"boolean","default":false},"fields_label_tag":{"type":"string","default":"div"}}}');function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function r(e){for(var r=1;r<arguments.length;r++){var l=null!=arguments[r]?arguments[r]:{};r%2?t(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):t(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l.apply(this,arguments)}var n=wp.blocks.registerBlockType,i=wp.i18n.__,a=wp.blockEditor?wp.blockEditor:wp.editor,s=a.InspectorControls,c=a.useBlockProps,u=wp.components,p=u.PanelBody,m=u.SelectControl,f=u.TextControl,d=u.ToggleControl,b=wp.serverSideRender,g=function(t){return"".concat(e.name,"/").concat(t)};n(e.name,r(r({},e),{},{title:i("JetForm"),icon:wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:e.icon}}),attributes:e.attributes,edit:function(t){var r=t.attributes,o=t.setAttributes,n=t.isSelected,a=window.JetFormData,u=c();return[n&&wp.element.createElement(s,{key:g("InspectorControls")},wp.element.createElement(p,{title:i("Form Settings"),key:g("PanelBody")},wp.element.createElement(m,{key:"form_id",label:i("Choose Form"),labelposition:"top",value:r.form_id,onChange:function(e){o({form_id:Number(e)})},options:a.forms_list}),Boolean(r.form_id)&&wp.element.createElement(React.Fragment,null,wp.element.createElement(m,{label:i("Fields Layout","jet-form-builder"),value:r.fields_layout,options:a.fields_layout,onChange:function(e){return o({fields_layout:e})}}),wp.element.createElement(f,{label:i("Required Mark","jet-form-builder"),value:r.required_mark,onChange:function(e){return o({required_mark:e})}}),wp.element.createElement(m,{label:i("Fields label HTML tag","jet-form-builder"),value:r.fields_label_tag,options:a.fields_label_tag,onChange:function(e){return o({fields_label_tag:e})}}),wp.element.createElement(m,{label:i("Submit Type","jet-form-builder"),value:r.submit_type,options:a.submit_type,onChange:function(e){return o({submit_type:e})}}),wp.element.createElement(d,{key:"enable_progress",label:i("Enable form pages progress"),checked:r.enable_progress,onChange:function(e){o({enable_progress:Boolean(e)})}})))),wp.element.createElement("div",l({key:g("viewBlock")},u),wp.element.createElement(b,{block:e.name,attributes:r,httpMethod:"POST"}))]}}))})()})();