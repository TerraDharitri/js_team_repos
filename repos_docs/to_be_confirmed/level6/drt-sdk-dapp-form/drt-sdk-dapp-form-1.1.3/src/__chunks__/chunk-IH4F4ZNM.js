import{i as e}from"./chunk-SVQK3TVL.js";e();var o=`:root {
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

.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange {
  position: relative;
  display: flex;
  margin: 10px 16px 30px 0;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange:after {
  width: 100%;
  left: 2px;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  position: absolute;
  background: var(--border-color);
  height: 4px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput {
  width: calc(100% + 16px);
  opacity: 0;
  z-index: 6;
  cursor: pointer;
  height: 1.25rem;
  margin-right: -16px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput.dapp-core-component__styles-module__disabled {
  pointer-events: none;
  cursor: default;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput:hover ~ .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  opacity: 1;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb {
  width: 16px;
  height: 16px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: var(--black);
  z-index: 5;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb.dapp-core-component__styles-module__disabled {
  background-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  line-height: 1;
  opacity: 0;
  transition: all 400ms ease;
  color: var(--white);
  font-weight: 500;
  position: absolute;
  left: 50%;
  padding: 0.25rem 0.35rem;
  background: var(--black);
  border-radius: var(--dapp-form-input-border-radius);
  font-size: 11px;
  transform: translateX(-50%);
  bottom: calc(100% + 0.25rem);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderCompletion {
  height: 4px;
  background: var(--primary);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 3;
  margin-left: 2px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderCompletion.dapp-core-component__styles-module__disabled {
  background: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint {
  position: absolute;
  transform: translate(-25%, -50%);
  padding: 15px;
  top: 50%;
  z-index: 4;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint:after {
  content: "";
  position: absolute;
  height: 12px;
  border-radius: 50%;
  background-color: var(--white);
  border: 2px solid var(--primary);
  width: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__completed:after {
  background-color: var(--primary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__completed:after.dapp-core-component__styles-module__disabled:after {
  background-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__disabled:after {
  border-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage {
  position: absolute;
  left: 50%;
  transform: translateX(-25%);
  z-index: 7;
  padding: 1.5rem 0 0;
  line-height: 1;
  color: var(--black);
  font-size: 12px;
  cursor: pointer;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage:hover ~ .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  opacity: 1;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage.dapp-core-component__styles-module__exact {
  font-weight: bold;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage.dapp-core-component__styles-module__disabled {
  pointer-events: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(o));var r={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"};export{o as a,r as b};
//# sourceMappingURL=chunk-IH4F4ZNM.js.map
