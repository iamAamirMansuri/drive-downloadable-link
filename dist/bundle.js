!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.getDownloadableLink=o():e.getDownloadableLink=o()}(self,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};function t(e){const o=e.indexOf("/d/"),t=e.indexOf("/",o+3);return-1!==o&&-1!==t?"https://drive.google.com/uc?export=download&id="+e.substring(o+3,t):null}return e.r(o),e.d(o,{getDownloadableLink:()=>t}),o})()));