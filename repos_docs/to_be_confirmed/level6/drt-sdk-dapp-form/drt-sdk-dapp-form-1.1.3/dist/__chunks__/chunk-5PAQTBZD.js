import{a as m}from"./chunk-GETUPFZG.js";import{c as l}from"./chunk-EXRI3DJM.js";import{i as a}from"./chunk-P4IVSQC4.js";import{f as e}from"./chunk-JH2LJGTQ.js";e();e();a();var C=`.dapp-core-component__styles-module__advanced {
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
  top: 0;
  color: var(--dapp-form-label-color);
  transition: all 200ms ease;
  right: 0;
  cursor: pointer;
  position: absolute;
}
.dapp-core-component__styles-module__advanced svg path {
  transition: all 200ms ease;
  fill: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__advanced:hover .dapp-core-component__styles-module__advanced-text {
  color: var(--dapp-form-btn-bg);
}
.dapp-core-component__styles-module__advanced:hover svg path {
  fill: var(--dapp-form-btn-bg);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(C));var t={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"};import o,{useEffect as N,useState as _}from"react";import{faScrewdriverWrench as T,faCheck as A}from"@fortawesome/free-solid-svg-icons";import{FontAwesomeIcon as f}from"@fortawesome/react-fontawesome";import{useFormikContext as k}from"formik";a();var V=()=>{let{formInfo:{readonly:u,isRewaTransaction:n}}=l(),{setFieldValue:x,values:d}=k(),[r,c]=_(!1),[h,s]=_(!1),b=m(),y=!r&&!u&&b&&Boolean(d.data),E=()=>{c(!0),x("isAdvancedModeEnabled",!0)},g=()=>{s(!0),setTimeout(()=>{s(!1)},5e3)};return N(()=>{!n&&r&&c(!1)},[n,d.amount]),y?h?o.createElement("div",{className:t.advanced,"data-testid":"confirmAdvancedMode",onClick:E},o.createElement(f,{icon:A,className:"i-icon"}),o.createElement("span",{className:t.advancedText},"Confirm")):o.createElement("div",{"data-testid":"enableAdvancedMode",className:t.advanced,onClick:g},o.createElement(f,{icon:T,className:"i-icon"}),o.createElement("span",{className:t.advancedText},"Advanced")):null};e();a();export{V as a};
//# sourceMappingURL=chunk-5PAQTBZD.js.map
