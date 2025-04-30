import{a as N}from"./chunk-XMBOYETM.js";import{a as D}from"./chunk-OZVN3IJX.js";import{a as U,b as A}from"./chunk-TR6ZK6N7.js";import{a as E}from"./chunk-ERKXDDUC.js";import{a as C}from"./chunk-TLQSFVXU.js";import{a as I}from"./chunk-7ZBKJOEK.js";import{a as T}from"./chunk-UVJABL57.js";import{a as i}from"./chunk-GYOAIX6G.js";import{c as w}from"./chunk-53QEV2V5.js";import{c as h}from"./chunk-IYJRFSXF.js";import{a as k,i as o}from"./chunk-BL7T5FXS.js";import{f as e}from"./chunk-RGFNPOTZ.js";e();import{Component as ne}from"react";o();var c=class extends ne{render(){return null}};c.Receiver=T,c.Amount=E,c.Fee=I,c.Data=C,c.Token=D;var d=c;e();e();o();var me=`:root {
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

.dapp-core-component__confirmScreen-module__summary {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__fields {
  gap: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__fields .dapp-core-component__confirmScreen-module__columns {
  display: flex;
  column-gap: 16px;
  row-gap: 32px;
  flex-wrap: wrap;
  align-items: flex-start;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__fields .dapp-core-component__confirmScreen-module__columns .dapp-core-component__confirmScreen-module__column {
  min-width: calc(50% - 8px);
  text-align: left;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
}
@media (min-width: 768px) {
  .dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__buttons {
    padding-top: 80px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(me));var t={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};import r,{useState as te}from"react";import{ConfirmReceiver as ce}from"@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver";o();var Ne=({isConfirmCloseBtnVisible:F=!0,providerType:B})=>{var s;let{setIsGuardianScreenVisible:L}=h(),{receiverUsernameInfo:{receiverUsername:G},receiverInfo:{scamError:u,receiver:_,knownAddresses:P},formInfo:R,gasInfo:{gasCostError:b,feeLimit:V},accountInfo:{isGuarded:j},dataFieldInfo:{data:M},amountInfo:v,tokensInfo:q}=w(),{tokenId:z,tokenDetails:f,nft:l,rewaPriceInUsd:x,rewaLabel:g}=q,{readonly:S,onCloseForm:H,onInvalidateForm:J,onPreviewClick:K,onSubmitForm:O,txType:p,hasGuardianScreen:y}=R,Q=()=>{L(!0)},[W,X]=te(!1),Y=p==="NonFungibleDCDT",Z=U({providerType:B,hasGuardianScreen:y}),$=ae=>{ae.preventDefault(),S?H():J()},ee=()=>{if(j&&y)return Q();X(!0),O()},oe=!["REWA","DCDT","MetaDCDT"].includes(p),re=A({knownAddresses:P,receiverAddress:_,existingReceiverUsername:G});return r.createElement("div",{className:t.summary},r.createElement("div",{className:t.fields},oe&&l&&r.createElement(N,k({onClick:K,txType:p},l)),r.createElement(ce,{amount:v.amount,scamReport:u!=null?u:null,receiver:_,receiverUsername:re}),r.createElement("div",{className:t.columns},!Y&&r.createElement("div",{className:t.column},r.createElement(d.Amount,{txType:p,tokenId:z,tokenDecimals:f.decimals,amount:String(v.amount),nft:l,rewaPriceInUsd:x,rewaLabel:g,tokenLabel:f.name,tokenAvatar:((s=f.assets)==null?void 0:s.svgUrl)||""})),r.createElement("div",{className:t.column},r.createElement(d.Fee,{rewaLabel:g,rewaPriceInUsd:x,feeLimit:V}))),r.createElement(d.Data,{data:M}),b&&r.createElement("p",{className:i.error},b)),r.createElement("div",{className:t.buttons},r.createElement("button",{className:i.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:W,onClick:ee},Z),F&&r.createElement("button",{className:i.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:$},S?"Close":"Back")))};e();o();e();o();e();o();e();o();e();o();e();o();e();o();export{t as a,c as b,Ne as c};
//# sourceMappingURL=chunk-G7LBB7WU.js.map
