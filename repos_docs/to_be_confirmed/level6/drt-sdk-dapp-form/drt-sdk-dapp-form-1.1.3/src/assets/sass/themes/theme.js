"use strict";import{i as e}from"../../../__chunks__/chunk-SVQK3TVL.js";e();var o=`:root {
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

/* Bootstrap overrides
-------------------------------------------------- */
/* Do not move the imports from here.
Override Bootstrap variables only above.
-------------------------------------------------- */
/* Base
  -------------------------------------------------- */
html {
  min-height: 100%;
  font-size: 14px;
}

a,
.dapp-core-component__theme__link-style {
  color: var(--primary-light);
}

.dapp-core-component__theme__link-second-style {
  color: var(--secondary);
}
.dapp-core-component__theme__link-second-style:hover {
  color: var(--primary-light);
}
.dapp-core-component__theme__link-second-style:hover svg {
  color: var(--primary-light);
}

.dapp-core-component__theme__wrapper {
  min-height: 100vh;
}

.dapp-core-component__theme__opacity-6 {
  opacity: 0.6;
}

.dapp-core-component__theme__dapp-icon {
  padding: 5px;
  border-radius: 50%;
  background-color: var(--light);
  width: toRem(65);
  height: toRem(65);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.dapp-core-component__theme__dapp-icon.dapp-core-component__theme__icon-medium {
  width: 80px;
  height: 80px;
}

.dapp-core-component__theme__centering {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dapp-core-component__theme__border-n {
  border: none;
}

.dapp-core-component__theme__text {
  color: #9dabbd;
}

.dapp-core-component__theme__t-shadow {
  text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.3);
}

.dapp-core-component__theme__btn {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
}

.dapp-core-component__theme__media {
  display: flex;
  align-items: flex-start;
}

.dapp-core-component__theme__media-body {
  flex: 1;
}

.dapp-core-component__theme__connect-btns .dapp-core-component__theme__btn {
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: var(--primary-light);
  padding: 15px 20px 15px 16px;
  border-radius: 6px;
  gap: 8px;
}
.dapp-core-component__theme__connect-btns .dapp-core-component__theme__btn:hover, .dapp-core-component__theme__connect-btns .dapp-core-component__theme__btn:active {
  background-color: var(--primary-light);
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
}
.dapp-core-component__theme__connect-btns .dapp-core-component__theme__info {
  color: var(--primary-light);
  margin-left: 48px;
}

.dapp-core-component__theme__btn {
  transition: none;
}

.dapp-core-component__theme__trust-badge {
  width: 20px;
  height: 20px;
}

/* Navbar
  -------------------------------------------------- */
.dapp-core-component__theme__navbar .dapp-core-component__theme__dapp-name {
  display: flex;
  align-items: center;
  font-size: toRem(24);
  font-weight: 400;
  color: #9ba5b4;
  margin-left: 1.6428571429rem;
}
.dapp-core-component__theme__navbar .dapp-core-component__theme__dapp-name:before {
  content: "";
  display: block;
  width: 1px;
  height: toRem(42);
  margin-right: toRem(24);
}

/* Dashboard
  -------------------------------------------------- */
.dapp-core-component__theme__action-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  margin: 0 7px;
}
.dapp-core-component__theme__action-btn button {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: var(--white);
}
.dapp-core-component__theme__action-btn button:hover {
  opacity: 0.9;
}

.dapp-core-component__theme__transactions .dapp-core-component__theme__transaction-icon {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.dapp-core-component__theme__transactions.dapp-core-component__theme__table td {
  white-space: nowrap;
  vertical-align: middle;
}
.dapp-core-component__theme__transactions.dapp-core-component__theme__table tr:last-of-type td {
  border-bottom: 1px solid var(--border-color);
}

/* Loader, Transaction Success/Fail
  -------------------------------------------------- */
.dapp-core-component__theme__page-state .dapp-core-component__theme__lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.dapp-core-component__theme__page-state .dapp-core-component__theme__lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.dapp-core-component__theme__page-state .dapp-core-component__theme__bg-blue .dapp-core-component__theme__lds-ellipsis div {
  background: rgba(255, 255, 255, 0.4);
}
.dapp-core-component__theme__page-state .dapp-core-component__theme__lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: dapp-core-component__theme__lds-ellipsis1 0.6s infinite;
}
.dapp-core-component__theme__page-state .dapp-core-component__theme__lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: dapp-core-component__theme__lds-ellipsis2 0.6s infinite;
}
.dapp-core-component__theme__page-state .dapp-core-component__theme__lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: dapp-core-component__theme__lds-ellipsis2 0.6s infinite;
}
.dapp-core-component__theme__page-state .dapp-core-component__theme__lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: dapp-core-component__theme__lds-ellipsis3 0.6s infinite;
}
@keyframes dapp-core-component__theme__lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes dapp-core-component__theme__lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes dapp-core-component__theme__lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(o));var _={"link-style":"dapp-core-component__theme__link-style",linkStyle:"dapp-core-component__theme__link-style","link-second-style":"dapp-core-component__theme__link-second-style",linkSecondStyle:"dapp-core-component__theme__link-second-style",wrapper:"dapp-core-component__theme__wrapper","opacity-6":"dapp-core-component__theme__opacity-6",opacity6:"dapp-core-component__theme__opacity-6","dapp-icon":"dapp-core-component__theme__dapp-icon",dappIcon:"dapp-core-component__theme__dapp-icon","icon-medium":"dapp-core-component__theme__icon-medium",iconMedium:"dapp-core-component__theme__icon-medium",centering:"dapp-core-component__theme__centering","border-n":"dapp-core-component__theme__border-n",borderN:"dapp-core-component__theme__border-n",text:"dapp-core-component__theme__text","t-shadow":"dapp-core-component__theme__t-shadow",tShadow:"dapp-core-component__theme__t-shadow",btn:"dapp-core-component__theme__btn",media:"dapp-core-component__theme__media","media-body":"dapp-core-component__theme__media-body",mediaBody:"dapp-core-component__theme__media-body","connect-btns":"dapp-core-component__theme__connect-btns",connectBtns:"dapp-core-component__theme__connect-btns",info:"dapp-core-component__theme__info","trust-badge":"dapp-core-component__theme__trust-badge",trustBadge:"dapp-core-component__theme__trust-badge",navbar:"dapp-core-component__theme__navbar","dapp-name":"dapp-core-component__theme__dapp-name",dappName:"dapp-core-component__theme__dapp-name","action-btn":"dapp-core-component__theme__action-btn",actionBtn:"dapp-core-component__theme__action-btn",transactions:"dapp-core-component__theme__transactions","transaction-icon":"dapp-core-component__theme__transaction-icon",transactionIcon:"dapp-core-component__theme__transaction-icon",table:"dapp-core-component__theme__table","page-state":"dapp-core-component__theme__page-state",pageState:"dapp-core-component__theme__page-state","lds-ellipsis":"dapp-core-component__theme__lds-ellipsis",ldsEllipsis:"dapp-core-component__theme__lds-ellipsis","bg-blue":"dapp-core-component__theme__bg-blue",bgBlue:"dapp-core-component__theme__bg-blue","lds-ellipsis1":"dapp-core-component__theme__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__theme__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__theme__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__theme__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__theme__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__theme__lds-ellipsis3"};export{o as css,_ as default};
//# sourceMappingURL=theme.js.map
