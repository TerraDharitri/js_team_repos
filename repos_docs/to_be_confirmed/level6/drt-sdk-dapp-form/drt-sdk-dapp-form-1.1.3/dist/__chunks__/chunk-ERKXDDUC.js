import{a as s}from"./chunk-NBDUCIHG.js";import{a as i}from"./chunk-GYOAIX6G.js";import{d}from"./chunk-FEKYKXOC.js";import{i as l}from"./chunk-BL7T5FXS.js";import{f as p}from"./chunk-RGFNPOTZ.js";p();p();l();var T=`:root {
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

.dapp-core-component__styles-module__amount {
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__token {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__token .dapp-core-component__styles-module__value {
  font-size: 14px;
  font-weight: 500;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__price {
  font-size: 12px;
  color: var(--dapp-form-placeholder-color);
  line-height: 1;
  margin-top: 8px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(T));var t={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};import e from"react";import{DECIMALS as A,DIGITS as I}from"@terradharitri/sdk-dapp/constants/index";import{FormatAmount as b}from"@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount";import{UsdValue as M}from"@terradharitri/sdk-dapp/UI/UsdValue/index";l();var q=({label:u="Amount",amount:o,txType:a,tokenDecimals:_,tokenId:g,rewaLabel:m,rewaPriceInUsd:v,nft:r,tokenAvatar:h})=>{let y=(r==null?void 0:r.decimals)||0,n=a==="DCDT",k=a==="MetaDCDT",x=a==="NonFungibleDCDT",D=k?d(o,r==null?void 0:r.decimals):o,w=Boolean(r&&o),c=g.split("-")[0],f=n?_:A,E=w?e.createElement(b,{rewaLabel:m,value:D,decimals:y,digits:a==="MetaDCDT"?I:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):e.createElement(b,{rewaLabel:m,value:d(o,f),showLabel:!1,decimals:f,showLastNonZeroDecimal:!0,token:n?c:m,"data-testid":"confirmAmount"});return x?null:e.createElement("div",{className:t.amount},e.createElement("span",{className:i.label},u),e.createElement("div",{className:t.token},e.createElement(s,{type:a,avatar:h}),e.createElement("div",{className:t.value},E," ",c)),!n&&e.createElement(M,{amount:o,usd:v,"data-testid":"confirmUsdValue",className:t.price}))};export{q as a};
//# sourceMappingURL=chunk-ERKXDDUC.js.map
