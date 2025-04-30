import{a as F,b,c as k,d as C}from"./chunk-DG64L5BA.js";import{a as h}from"./chunk-GYOAIX6G.js";import{i as m}from"./chunk-BL7T5FXS.js";import{f as r}from"./chunk-RGFNPOTZ.js";r();r();m();var X=`:root {
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

.dapp-core-component__amountInput-module__amount-input {
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: var(--black);
  font-variant-numeric: tabular-nums;
  font-weight: 500;
  height: 100%;
  padding: 1rem;
  width: 100%;
}
.dapp-core-component__amountInput-module__amount-input::focused, .dapp-core-component__amountInput-module__amount-input::active {
  box-shadow: none;
}
.dapp-core-component__amountInput-module__amount-input::placeholder {
  font-weight: 300;
}
@media (max-width: 575px) {
  .dapp-core-component__amountInput-module__amount-input::placeholder {
    font-size: 1rem;
  }
}
@media (max-width: 767px) {
  .dapp-core-component__amountInput-module__amount-input::placeholder {
    font-size: 1rem;
  }
}

.dapp-core-component__amountInput-module__amount-holder {
  max-width: 50%;
  position: relative;
  width: 100%;
}
.dapp-core-component__amountInput-module__amount-holder.dapp-core-component__amountInput-module__show-usd-value .dapp-core-component__amountInput-module__amount-input {
  padding-top: 0.375rem;
  padding-bottom: 1.5rem;
}
.dapp-core-component__amountInput-module__amount-holder .dapp-core-component__amountInput-module__amount-holder-usd {
  display: flex;
  font-size: 1rem;
  line-height: 1;
  padding: 0 1rem;
  position: absolute;
  color: var(--dapp-form-label-color);
  top: 1.875rem;
  width: 100%;
}
.dapp-core-component__amountInput-module__amount-holder .dapp-core-component__amountInput-module__amount-holder-usd small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dapp-core-component__amountInput-module__amount-holder .dapp-core-component__amountInput-module__input {
  height: 70px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(X));var d={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};import t,{memo as Y,useEffect as g,useRef as Z,useState as i}from"react";import{stringIsFloat as oo}from"@terradharitri/sdk-dapp/utils/validation";import v from"bignumber.js";import $ from"classnames";import{NumericFormat as eo}from"react-number-format";m();var ao=500,B=1e13,to=({"data-testid":n,InfoDustComponent:p,disabled:w,handleBlur:P,handleChange:V,name:s,onDebounceChange:f,onFocus:q,onKeyDown:z,placeholder:H,required:U,usdPrice:u,value:a,usdValue:_,className:O,autoFocus:A,suffix:G})=>{let K=Z(null),[I,x]=i(),[L,E]=i(!1),[N,R]=i({value:a,count:0}),[l,c]=i(),y=k(N,ao),j=o=>{o.stopPropagation(),E(!0);let e=b(o.target.value),Q=v(e).isLessThanOrEqualTo(B);if((e===""||Q)&&(x(e),o.target.value=e,V(o),f)){let W={value:e,count:N.count+1};R(W)}},J=()=>{if(_)return c(`$${_}`);if(!u||!a)return c(void 0);let o=b(a);if(!(a!==""&&oo(o))||o==="")return c(void 0);let e=F(new v(o).times(u!=null?u:0).toString(10),2);c(`$${e}`)},M=({value:o,floatValue:e})=>(!e||v(e).isLessThanOrEqualTo(B))&&!C(o);return g(()=>{f&&L&&(E(!1),f(y.value))},[y]),g(J,[a,_,u]),g(()=>{a!==I&&x(a)},[a]),t.createElement("div",{ref:K,className:$(d.amountHolder,{[d.showUsdValue]:Boolean(l)},O)},t.createElement(eo,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":n||s,decimalSeparator:".",disabled:Boolean(w),id:s,inputMode:"decimal",isAllowed:M,name:s,onBlur:P,onChange:j,onFocus:q,onKeyDown:z,placeholder:H,required:U,thousandSeparator:",",thousandsGroupStyle:"thousand",value:I,suffix:G,valueIsNumericString:!0,allowNegative:!1,autoFocus:A,className:$(h.input,d.amountInput,{[h.disabled]:Boolean(w)})}),l&&t.createElement("span",{className:d.amountHolderUsd},t.createElement("small",{"data-testid":`tokenPrice_${u}`},l!=="$0"?t.createElement(t.Fragment,null,"\u2248 "):t.createElement(t.Fragment,null),l),p))},vo=Y(to,(n,p)=>n.value===p.value&&n.usdPrice===p.usdPrice&&n.className===p.className&&n.disabled===p.disabled&&n.usdValue===p.usdValue);r();m();export{vo as a};
//# sourceMappingURL=chunk-SWVM7WPZ.js.map
