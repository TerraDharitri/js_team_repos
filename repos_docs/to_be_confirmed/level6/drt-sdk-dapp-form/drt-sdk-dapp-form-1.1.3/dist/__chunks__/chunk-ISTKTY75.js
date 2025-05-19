import{a as c}from"./chunk-5ASRFLQP.js";import{i as d}from"./chunk-P4IVSQC4.js";import{f as p}from"./chunk-JH2LJGTQ.js";p();p();d();var v=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__data {
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__data .dapp-core-component__styles-module__value {
  min-height: 80px;
  font-size: 14px;
  padding: 12px;
  line-height: 1.25;
  border-radius: 6px;
  border: 1px solid var(--dapp-form-input-data-border);
  word-break: break-all;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(v));var l={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"};import e from"react";import{decodePart as _}from"@terradharitri/sdk-dapp/utils/decoders/decodePart";d();var E=(f,m)=>[...f.matchAll(new RegExp(m,"gi"))].map(r=>r.index),S=({label:f="Data",scCallLabel:m="SC Call",data:r,highlight:a,isScCall:s})=>{let o=e.createElement(e.Fragment,null,r),[n,...i]=a&&s?a.split("@"):[];if(r&&a&&E(r,a).length===1)switch(!0){case r.startsWith(a):{let[,t]=r.split(a);o=e.createElement(e.Fragment,null,a,e.createElement("span",null,t));break}case r.endsWith(a):{let[t]=r.split(a);o=e.createElement(e.Fragment,null,e.createElement("span",null,t),a);break}default:{let[t,b]=r.split(a);o=e.createElement(e.Fragment,null,e.createElement("span",null,t),a,e.createElement("span",null,b));break}}return e.createElement(e.Fragment,null,n&&e.createElement("div",{className:l.data},e.createElement("span",{className:c.label},m),e.createElement("div",{"data-testid":"confirmScCall",className:l.value},[_(n),...i].join("@"))),e.createElement("div",{className:l.data},e.createElement("span",{className:c.label},f),e.createElement("div",{"data-testid":"confirmData",className:l.value},r?o:"N/A")))};export{S as a};
//# sourceMappingURL=chunk-ISTKTY75.js.map
