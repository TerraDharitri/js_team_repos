"use strict";import{i as e}from"../../../../__chunks__/chunk-SVQK3TVL.js";e();var o=`:root {
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

.dapp-core-component___toast-messages__toast-messages {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 9999;
}
@media (min-width: 768px) {
  .dapp-core-component___toast-messages__toast-messages {
    right: 2rem;
    bottom: 2rem;
    width: 22.5rem;
    left: auto;
  }
}
.dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast {
  display: block;
  flex-basis: 4rem;
  width: 100%;
  max-width: 28.875rem;
  transition: transform 0.3s ease-in-out;
  transform: translateX(120%);
  background-color: #fff;
  border-radius: var(--dapp-form-input-border-radius);
  border-color: var(--border-color);
}
.dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast.dapp-core-component___toast-messages__clickable {
  cursor: pointer;
}
.dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast.dapp-core-component___toast-messages__toast-visible {
  margin-bottom: 0.3rem;
  transform: translateX(0);
}
.dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast.dapp-core-component___toast-messages__toast-visible .dapp-core-component___toast-messages__progress {
  background-color: transparent;
  height: inherit;
  font-size: inherit;
  line-height: inherit;
}
.dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast.dapp-core-component___toast-messages__toast-visible .dapp-core-component___toast-messages__progress .dapp-core-component___toast-messages__progress-bar {
  background-color: rgba(108, 117, 125, 0.2);
}
.dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast.dapp-core-component___toast-messages__toast-visible .dapp-core-component___toast-messages__progress .dapp-core-component___toast-messages__progress-bar .dapp-core-component___toast-messages__content-height {
  z-index: -1;
  visibility: hidden;
  width: 0;
}
@media (max-width: 575px) {
  .dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast {
    display: none;
  }
  .dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast:first-child {
    display: block;
    transform: translateY(150%);
  }
  .dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast:first-child.dapp-core-component___toast-messages__toast-visible {
    transform: translateY(0);
  }
}
@media (max-width: 767px) {
  .dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast {
    display: none;
  }
  .dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast:first-child {
    display: block;
    transform: translateY(150%);
  }
  .dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast:first-child.dapp-core-component___toast-messages__toast-visible {
    transform: translateY(0);
  }
}
.dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__toast .dapp-core-component___toast-messages__tx-description {
  margin-bottom: 0.2rem;
}
.dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__close {
  opacity: 1;
}
.dapp-core-component___toast-messages__toast-messages .dapp-core-component___toast-messages__close svg {
  color: var(--secondary);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(o));var _={"toast-messages":"dapp-core-component___toast-messages__toast-messages",toastMessages:"dapp-core-component___toast-messages__toast-messages",toast:"dapp-core-component___toast-messages__toast",clickable:"dapp-core-component___toast-messages__clickable","toast-visible":"dapp-core-component___toast-messages__toast-visible",toastVisible:"dapp-core-component___toast-messages__toast-visible",progress:"dapp-core-component___toast-messages__progress","progress-bar":"dapp-core-component___toast-messages__progress-bar",progressBar:"dapp-core-component___toast-messages__progress-bar","content-height":"dapp-core-component___toast-messages__content-height",contentHeight:"dapp-core-component___toast-messages__content-height","tx-description":"dapp-core-component___toast-messages__tx-description",txDescription:"dapp-core-component___toast-messages__tx-description",close:"dapp-core-component___toast-messages__close"};export{o as css,_ as default};
//# sourceMappingURL=_toast-messages.js.map
