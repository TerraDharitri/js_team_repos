"use strict";import{i as o}from"../../../../__chunks__/chunk-SVQK3TVL.js";o();var e=`:root {
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

.dapp-core-component__tokenSymbol__token-symbol,
.dapp-core-component__tokenSymbol__token-symbol-combined {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: 50%;
}
.dapp-core-component__tokenSymbol__token-symbol svg #dapp-core-component__tokenSymbol__rewa-token,
.dapp-core-component__tokenSymbol__token-symbol-combined svg #dapp-core-component__tokenSymbol__rewa-token {
  fill: var(--black);
}

.dapp-core-component__tokenSymbol__token-symbol-combined {
  background-color: transparent;
}

.dapp-core-component__tokenSymbol__token-symbol {
  border: 1px solid var(--black);
  width: 2rem;
  height: 2rem;
}
.dapp-core-component__tokenSymbol__token-symbol img {
  width: 100%;
  height: 100%;
}
.dapp-core-component__tokenSymbol__token-symbol svg {
  width: 1.25rem;
  height: 1.25rem;
}
.dapp-core-component__tokenSymbol__token-symbol svg.dapp-core-component__tokenSymbol__expanded {
  width: 100%;
  height: 100%;
}

.dapp-core-component__tokenSymbol__token-symbol-combined {
  width: 4.5rem;
  height: 4.5rem;
}
.dapp-core-component__tokenSymbol__token-symbol-combined svg {
  filter: drop-shadow(0 0 0.25rem black);
}
.dapp-core-component__tokenSymbol__token-symbol-combined svg circle {
  fill: var(--card-bg);
}
.dapp-core-component__tokenSymbol__token-symbol-combined svg {
  width: 4.25rem;
  height: 4.25rem;
}
.dapp-core-component__tokenSymbol__token-symbol-combined.dapp-core-component__tokenSymbol__small {
  width: 2.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
}
.dapp-core-component__tokenSymbol__token-symbol-combined.dapp-core-component__tokenSymbol__small svg {
  width: 2.5rem;
  height: 2.5rem;
}

.dapp-core-component__tokenSymbol__token-icon-lg .dapp-core-component__tokenSymbol__token-symbol {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSymbol__token-icon-lg .dapp-core-component__tokenSymbol__token-symbol svg {
  width: 2.25rem;
  height: 2.25rem;
}

.dapp-core-component__tokenSymbol__token-icon-xl .dapp-core-component__tokenSymbol__token-symbol {
  width: 4rem;
  height: 4rem;
}
.dapp-core-component__tokenSymbol__token-icon-xl .dapp-core-component__tokenSymbol__token-symbol svg {
  width: 2.3rem;
  height: 2.3rem;
}

.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-xs .dapp-core-component__tokenSymbol__token-symbol + .dapp-core-component__tokenSymbol__token-symbol {
  margin-left: 0.7rem;
  margin-top: -0.325rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-xs .dapp-core-component__tokenSymbol__token-symbol {
  width: 1rem;
  height: 1rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-xs .dapp-core-component__tokenSymbol__token-symbol svg {
  width: 0.625rem;
  height: 0.625rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-md .dapp-core-component__tokenSymbol__token-symbol + .dapp-core-component__tokenSymbol__token-symbol {
  margin-left: 1.2rem;
  margin-top: -0.6rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-md .dapp-core-component__tokenSymbol__token-symbol {
  width: 1.8rem;
  height: 1.8rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-md .dapp-core-component__tokenSymbol__token-symbol svg {
  width: 1.2rem;
  height: 1.2rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-lg .dapp-core-component__tokenSymbol__token-symbol + .dapp-core-component__tokenSymbol__token-symbol {
  margin-left: 1.3rem;
  margin-top: -0.725rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-lg .dapp-core-component__tokenSymbol__token-symbol {
  width: 2.3rem;
  height: 2.3rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-xl .dapp-core-component__tokenSymbol__token-symbol + .dapp-core-component__tokenSymbol__token-symbol {
  margin-left: 2rem;
  margin-top: -1rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-xl .dapp-core-component__tokenSymbol__token-symbol {
  width: 4rem;
  height: 4rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-xl .dapp-core-component__tokenSymbol__token-symbol svg {
  width: 2.3rem;
  height: 2.3rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(e));var t={"token-symbol":"dapp-core-component__tokenSymbol__token-symbol",tokenSymbol:"dapp-core-component__tokenSymbol__token-symbol","token-symbol-combined":"dapp-core-component__tokenSymbol__token-symbol-combined",tokenSymbolCombined:"dapp-core-component__tokenSymbol__token-symbol-combined","rewa-token":"dapp-core-component__tokenSymbol__rewa-token",rewaToken:"dapp-core-component__tokenSymbol__rewa-token",expanded:"dapp-core-component__tokenSymbol__expanded",small:"dapp-core-component__tokenSymbol__small","token-icon-lg":"dapp-core-component__tokenSymbol__token-icon-lg",tokenIconLg:"dapp-core-component__tokenSymbol__token-icon-lg","token-icon-xl":"dapp-core-component__tokenSymbol__token-icon-xl",tokenIconXl:"dapp-core-component__tokenSymbol__token-icon-xl","pool-icon":"dapp-core-component__tokenSymbol__pool-icon",poolIcon:"dapp-core-component__tokenSymbol__pool-icon","icon-xs":"dapp-core-component__tokenSymbol__icon-xs",iconXs:"dapp-core-component__tokenSymbol__icon-xs","icon-md":"dapp-core-component__tokenSymbol__icon-md",iconMd:"dapp-core-component__tokenSymbol__icon-md","icon-lg":"dapp-core-component__tokenSymbol__icon-lg",iconLg:"dapp-core-component__tokenSymbol__icon-lg","icon-xl":"dapp-core-component__tokenSymbol__icon-xl",iconXl:"dapp-core-component__tokenSymbol__icon-xl"};export{e as css,t as default};
//# sourceMappingURL=tokenSymbol.js.map
