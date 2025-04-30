import{a as H}from"./chunk-2TORC7YY.js";import{a as K}from"./chunk-4PG6A2G6.js";import{a as R}from"./chunk-HKI4TYKB.js";import{a as A}from"./chunk-4RXK7TOV.js";import{a as P}from"./chunk-BEAEDX45.js";import{a as G}from"./chunk-4ZG37LTY.js";import{a as O}from"./chunk-Z6Z554HA.js";import{a as W}from"./chunk-2AYLJ5FW.js";import{b as D}from"./chunk-MGA3GKFX.js";import{a as V}from"./chunk-RS4LHJUS.js";import{a as B}from"./chunk-XMBOYETM.js";import{a as g}from"./chunk-GYOAIX6G.js";import{c as w}from"./chunk-53QEV2V5.js";import{r as I}from"./chunk-MEB4XTPU.js";import{e as N}from"./chunk-SABWITOR.js";import{a as d,g as _,i as r}from"./chunk-BL7T5FXS.js";import{f as o}from"./chunk-RGFNPOTZ.js";o();o();r();var de=`:root {
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

.dapp-core-component__form-module__form {
  background-color: var(--dapp-form-bg);
  border-radius: 12px;
  padding: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__form-module__form .dapp-core-component__form-module__formFieldset {
  padding: 0;
  margin: 0;
  border: none;
  width: 100%;
  gap: 32px;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__form-module__form .dapp-core-component__form-module__formWrapper {
  margin-bottom: 1.5rem;
}
.dapp-core-component__form-module__form .dapp-core-component__form-module__form-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
}
@media (min-width: 768px) {
  .dapp-core-component__form-module__form .dapp-core-component__form-module__form-buttons {
    padding-top: 80px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(de));var l={form:"dapp-core-component__form-module__form",formFieldset:"dapp-core-component__form-module__formFieldset",formWrapper:"dapp-core-component__form-module__formWrapper","form-buttons":"dapp-core-component__form-module__form-buttons",formButtons:"dapp-core-component__form-module__form-buttons"};import e,{useEffect as h,useState as le}from"react";import{TransactionOptions as ie,TransactionVersion as ce}from"@terradharitri/sdk-core/out";import se from"classnames";import{useFormikContext as ue}from"formik";r();var Ae=({className:x,GuardianScreen:i})=>{let{formInfo:j,accountInfo:v,amountInfo:q,tokensInfo:y}=w(),{values:c}=ue(),{txType:s,tokenId:z,address:E,balance:J,chainId:L,ledger:M}=c,{nft:S}=y,[p,u]=le(),{amountRange:Q,onSetAmountPercentage:U}=q,{renderKey:X,onValidateForm:T,onInvalidateForm:Y,onCloseForm:Z,onSubmitForm:$,onPreviewClick:ee,areValidatedValuesReady:b,isGuardianScreenVisible:oe,uiOptions:k,readonly:re,setGuardedTransaction:te,setHasGuardianScreen:ae}=j,ne=()=>_(void 0,null,function*(){if(!b)return;let t=yield N(c);try{let f=yield I({address:E,balance:J,chainId:L,nonce:v.nonce,values:t});f.setVersion(ce.withTxOptions());let fe=d({guarded:!0},M?{hashSign:!0}:{});f.setOptions(ie.withOptions(fe)),u({0:f})}catch(f){u({})}});h(()=>{ne()},[c,b]),h(()=>{ae(Boolean(i))},[]),h(()=>{if(!p)return;let t=p[0];t&&te(t)},[p]);let me=t=>{t.preventDefault(),Z()},C=s==="NonFungibleDCDT",F=s==="SemiFungibleDCDT",pe={onSignTransaction:()=>_(void 0,null,function*(){setTimeout(()=>{$()})}),onPrev:Y,address:E,title:"",className:x,signedTransactions:p,setSignedTransactions:u,signStepInnerClasses:{}};return i&&oe?e.createElement(i,d({},pe)):b?e.createElement(V,{providerType:v.providerType}):e.createElement("form",{key:X,onSubmit:T,className:se(l.form,x)},e.createElement("fieldset",{className:l.formFieldset},(C||F)&&S&&e.createElement(B,d({onClick:ee,txType:s},S)),e.createElement(P,null),F?e.createElement(A,null):e.createElement(D,null),(k==null?void 0:k.showAmountSlider)&&!C&&e.createElement(O,{onPercentageChange:U,percentageValue:Q,disabled:Boolean(re)}),e.createElement(H,{tokenId:z}),e.createElement(K,null),e.createElement(G,null),e.createElement(W,null)),e.createElement("div",{className:l.formButtons},e.createElement("button",{type:"button",id:"sendBtn","data-testid":"sendBtn",onClick:T,className:g.buttonSend},"Send ",R(y)),e.createElement("button",{type:"button",id:"closeButton","data-testid":"returnToWalletBtn",onClick:me,className:g.buttonText},"Cancel")))};o();r();o();r();o();r();o();r();o();r();export{Ae as a};
//# sourceMappingURL=chunk-LA5ZJCHG.js.map
