!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks,n=window.wp.blockEditor,r=window.wp.serverSideRender,o=e.n(r),a=window.wp.element,c=window.wp.primitives,i=(0,a.createElement)(c.SVG,{xmlns:"https://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(c.Path,{d:"m4 5.5h2v6.5h1.5v-6.5h2v-1.5h-5.5zm16 10.5h-16v-1.5h16zm-7 4h-9v-1.5h9z"})),l=JSON.parse('{"name":"sht/archive-title-search"}');const{name:s}=l;(0,t.registerBlockType)(s,{icon:i,edit:e=>{const{attributes:t,setAttributes:r}=e,{textAlign:a}=t,c=(0,n.useBlockProps)({className:a?`has-text-align-${a}`:""});return React.createElement("div",c,React.createElement(n.BlockControls,{key:"controls"},React.createElement(n.AlignmentToolbar,{value:a,onChange:e=>r({textAlign:e})})),React.createElement(o(),{block:s,attributes:t}))}})}();