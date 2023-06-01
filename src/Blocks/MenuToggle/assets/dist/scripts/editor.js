(()=>{"use strict";const e=window.wp.blocks,t=window.wp.blockEditor,a=window.wp.components,n=window.wp.element,l=window.wp.primitives,c=(0,n.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(l.Path,{d:"M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"})),o=window.wp.url,r=window.wp.i18n,s=JSON.parse('{"name":"sht/menu-toggle"}'),{name:i}=s,w=(0,e.getBlockDefaultClassName)(i);(0,e.registerBlockType)(i,{icon:c,edit:e=>{const{attributes:n,setAttributes:l}=e,{target:c,textColor:s}=n,i=""!==s?` has-text-color has-${s}-color`:"",m=(0,t.useBlockProps)({className:i});return React.createElement(React.Fragment,null,React.createElement(t.InspectorControls,null,React.createElement(a.PanelBody,{title:"Link Settings"},React.createElement(a.PanelRow,null,React.createElement(a.TextControl,{label:(0,r.__)("Target","sha"),help:(0,r.__)("Add the ID of the target container.","sha"),value:c,onChange:e=>{l({target:(0,o.cleanForSlug)(e)})}})))),React.createElement("div",m,React.createElement("span",{className:`${w}__line ${w}__line-1`}),React.createElement("span",{className:`${w}__line ${w}__line-2`}),React.createElement("span",{className:`${w}__line ${w}__line-3`})))}})})();