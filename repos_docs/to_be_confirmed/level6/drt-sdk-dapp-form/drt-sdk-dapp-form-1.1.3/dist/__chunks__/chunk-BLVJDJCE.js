import{a as g}from"./chunk-GRUMHYMK.js";import{a as u}from"./chunk-KEZ3U2JI.js";import{a as b}from"./chunk-5ASRFLQP.js";import{c as i}from"./chunk-EXRI3DJM.js";import{t as _}from"./chunk-RU4WZGQA.js";import{h as f}from"./chunk-AWV4CCGJ.js";import{a as l,i as a}from"./chunk-P4IVSQC4.js";import{f as r}from"./chunk-JH2LJGTQ.js";r();r();r();a();var U=`:root {
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

.dapp-core-component__styles-module__fee {
  color: var(--dapp-form-input-color);
  width: 100%;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger {
  align-items: center;
  background: var(--dapp-form-input-bg);
  border-radius: var(--border-radius-low);
  cursor: pointer;
  display: flex;
  flex-flow: row;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 1rem;
  word-break: break-all;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger:hover .dapp-core-component__styles-module__label, .dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger:hover .dapp-core-component__styles-module__fiat, .dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger:hover .dapp-core-component__styles-module__arrow {
  color: var(--dapp-form-input-color);
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger .dapp-core-component__styles-module__fiat {
  font-size: 12px;
  margin-left: 0.25rem;
  transition: all 200ms ease;
  color: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger .dapp-core-component__styles-module__arrow {
  transition: all 200ms ease;
  color: var(--dapp-form-label-color);
  margin-left: auto;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger .dapp-core-component__styles-module__arrow.dapp-core-component__styles-module__active {
  transform: rotateZ(90deg);
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__expandable .dapp-core-component__styles-module__content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(U));var o={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"};import T from"react";a();var y=({feeLimit:t,rewaPriceInUsd:p})=>t===f?null:T.createElement("span",{className:o.fiat,"data-testid":"feeInFiat"},"(",_({feeLimit:t,rewaPriceInUsd:p}),")");import e,{useState as z}from"react";import{faChevronRight as A,faSpinner as Z}from"@fortawesome/free-solid-svg-icons";import{FontAwesomeIcon as v}from"@fortawesome/react-fontawesome";import{FormatAmount as B}from"@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount";import h from"classnames";import D from"react-collapsed";a();var le=({className:t})=>{let{gasInfo:p,tokensInfo:w}=i(),{feeLimit:c,gasCostLoading:x,gasPriceError:E,gasLimitError:N}=p,{rewaPriceInUsd:L,rewaLabel:k}=w,[d,I]=z(Boolean(E||N)),{getCollapseProps:C,getToggleProps:P}=D({isExpanded:d}),F=()=>{I(S=>!S)};return e.createElement("div",{className:h(o.fee,t)},e.createElement("label",{className:b.label},"Fee"),e.createElement("div",l({className:o.trigger},P({onClick:F})),e.createElement("span",{className:o.limit,"data-testid":"feeLimit"},e.createElement(B,{value:c,showLastNonZeroDecimal:!0,rewaLabel:k})),x&&e.createElement(v,{icon:Z,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),e.createElement(y,{rewaPriceInUsd:L,feeLimit:c}),e.createElement(v,{icon:A,className:h(o.arrow,{[o.active]:d})})),e.createElement("div",l({className:o.expandable},C()),e.createElement("div",{className:o.content},e.createElement(g,null),e.createElement(u,null))))};r();a();export{le as a};
//# sourceMappingURL=chunk-BLVJDJCE.js.map
