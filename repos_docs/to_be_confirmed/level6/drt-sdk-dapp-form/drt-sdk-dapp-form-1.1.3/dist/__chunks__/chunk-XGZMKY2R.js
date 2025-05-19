import{a as v,b as y}from"./chunk-VN727LT2.js";import{a as x}from"./chunk-5ASRFLQP.js";import{i as k}from"./chunk-IO4ZZN6V.js";import{a as r}from"./chunk-RNM37DYC.js";import{h}from"./chunk-AWV4CCGJ.js";import{f as g,h as E,i as m}from"./chunk-P4IVSQC4.js";import{f as p}from"./chunk-JH2LJGTQ.js";p();p();m();var j=`:root {
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

.dapp-core-component__styles-module__tokenElement {
  height: 100%;
  display: flex !important;
  align-items: center;
}
.dapp-core-component__styles-module__tokenElement .dapp-core-component__styles-module__tokenElementWrapper {
  display: flex;
}
.dapp-core-component__styles-module__tokenElement .dapp-core-component__styles-module__tokenElementWrapper .dapp-core-component__styles-module__tokenElementCircle {
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  background-color: var(--dapp-form-select-icon-bg);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}
.dapp-core-component__styles-module__tokenElement .dapp-core-component__styles-module__tokenElementIdentifier {
  line-height: 1.5;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(j));var o={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};import e,{useEffect as q,useState as z}from"react";import{faDiamond as B}from"@fortawesome/free-solid-svg-icons";import{FontAwesomeIcon as J}from"@fortawesome/react-fontawesome";import*as N from"@terradharitri/sdk-dapp/constants/index";import{FormatAmount as M}from"@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount";import P from"classnames";m();var X=(y(),g(v)).default,pe=({RewaIcon:s,inDropdown:D=!1,isRewa:w,nftTokenDetails:a,nftType:n,token:d})=>{var b,u;let{name:l,identifier:t,balance:C,decimals:I}=d,c=((b=d.assets)==null?void 0:b.svgUrl)||((u=d.assets)==null?void 0:u.pngUrl)||"",T=c?28:20,[F,S]=z(l);q(()=>{var _;(_=a==null?void 0:a.uris)!=null&&_.some($=>{let A=E.Buffer.from(String($),"base64").toString(),{found:L}=k(A,a==null?void 0:a.scamInfo);return L})||S(l)},[l]);let f=e.createElement(J,{icon:B});n==r.NonFungibleDCDT&&(f=e.createElement("div",{className:"nft-type","data-testid":`${t}-type-nft`},"NFT")),n===r.SemiFungibleDCDT&&(f=e.createElement("div",{className:"nft-type","data-testid":`${t}-type-sft`},"SFT"));let W=!D&&n!==r.NonFungibleDCDT,i=e.createElement("div",{className:o.tokenElementCircle},f);return c&&(i=e.createElement("img",{className:o.tokenElementCircle,src:c,alt:l,height:T})),w&&(i=e.createElement("div",{className:o.tokenElementCircle},s?e.createElement(s,{height:36}):e.createElement(X,{height:36}))),e.createElement("div",{className:P(x.value,o.tokenElement)},e.createElement("div",{className:o.tokenElementWrapper},i),e.createElement("div",{"data-testid":"tokenName"},e.createElement("span",{"data-testid":`${t}-element`},e.createElement("span",null,F)," ",e.createElement("span",{className:o.tokenElementIdentifier},t)),W&&e.createElement(M,{rewaLabel:t,value:C||h,digits:n===r.SemiFungibleDCDT?0:N.DIGITS,token:t,showLabel:!1,decimals:I,"data-testid":`${t}-balance`})))};export{pe as a};
//# sourceMappingURL=chunk-XGZMKY2R.js.map
