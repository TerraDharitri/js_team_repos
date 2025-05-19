import{a as i}from"./chunk-SEFUDONF.js";import{g as c}from"./chunk-AWV4CCGJ.js";import{i as e}from"./chunk-P4IVSQC4.js";import{f as r}from"./chunk-JH2LJGTQ.js";r();r();import b from"bignumber.js";e();var g=o=>{let p=new b(o!=null?o:"0"),t=new b(c),a=p.minus(t);return a.isGreaterThan(0)?a.toString(10):"0"};r();e();var y=`:root {
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

.dapp-core-component__maxButton-module__max {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border-radius: 16px;
  margin-right: 8px;
  background-color: var(--dapp-form-max-btn-bg);
  color: var(--dapp-form-max-btn-color);
  text-transform: uppercase;
  width: 48px;
  padding: 6px 0;
  font-size: 12px;
  transition: all 200ms ease;
}
.dapp-core-component__maxButton-module__max:hover {
  color: var(--dapp-form-max-btn-color);
  background-color: var(--dapp-form-max-hover-btn-bg);
  text-decoration: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(y));var v={max:"dapp-core-component__maxButton-module__max"};import B from"react";import{DECIMALS as C}from"@terradharitri/sdk-dapp/constants";import h from"bignumber.js";import M from"classnames";e();var J=({token:o,rewaLabel:p,inputAmount:t,className:a,onMaxClick:n})=>{var l;let _=(o==null?void 0:o.identifier)===p,f=(l=o==null?void 0:o.balance)!=null?l:"0";if(f==="0")return null;let d=i({amount:_?g(f):f,decimals:(o==null?void 0:o.decimals)||C}),w=new h(t).isEqualTo(new h(d)),k=m=>{m.preventDefault(),n==null||n(d)};return w?null:B.createElement("a",{href:"/","data-testid":"maxBtn",className:M(v.max,a),onClick:k,onMouseDown:m=>{m.preventDefault()}},"Max")};export{J as a};
//# sourceMappingURL=chunk-MVSDEA6Y.js.map
