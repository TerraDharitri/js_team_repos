"use strict";import{i as o}from"../../../../__chunks__/chunk-SVQK3TVL.js";o();var r=`:root {
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

.dapp-core-component___trim__trim {
  display: flex;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  /* IE fix */
  /* SAFARI 10.1+ fix */
}
.dapp-core-component___trim__trim.dapp-core-component___trim__overflow .dapp-core-component___trim__ellipsis {
  display: block;
}
.dapp-core-component___trim__trim .dapp-core-component___trim__left {
  flex-shrink: 1;
  font-size: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dapp-core-component___trim__trim .dapp-core-component___trim__right {
  flex-shrink: 1;
  font-size: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  direction: rtl;
}
.dapp-core-component___trim__trim .dapp-core-component___trim__left span,
.dapp-core-component___trim__trim .dapp-core-component___trim__right span {
  font-size: 1rem;
  pointer-events: none;
  user-select: none;
}
.dapp-core-component___trim__trim .dapp-core-component___trim__ellipsis {
  flex-shrink: 0;
  display: none;
  pointer-events: none;
  user-select: none;
}
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .dapp-core-component___trim__trim .dapp-core-component___trim__right {
    text-overflow: clip;
  }
}
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .dapp-core-component___trim__trim .dapp-core-component___trim__right {
      text-overflow: unset;
    }
  }
}
.dapp-core-component___trim__trim .dapp-core-component___trim__hidden-text-ref {
  position: absolute;
  display: block;
  color: transparent;
}

.dapp-core-component___trim__trim-wrapper {
  display: flex;
  max-width: 100%;
  overflow: hidden;
}

a:hover > .dapp-core-component___trim__trim span {
  color: var(--link-hover-color);
}
a:hover > .dapp-core-component___trim__trim span.dapp-core-component___trim__hidden-text-ref {
  color: transparent;
}

a > .dapp-core-component___trim__trim span,
.dapp-core-component___trim__text-primary > .dapp-core-component___trim__trim span {
  color: var(--primary);
}
a > .dapp-core-component___trim__trim span.dapp-core-component___trim__hidden-text-ref,
.dapp-core-component___trim__text-primary > .dapp-core-component___trim__trim span.dapp-core-component___trim__hidden-text-ref {
  color: transparent;
}

.dapp-core-component___trim__table .dapp-core-component___trim__trim {
  max-width: 10rem;
}

.dapp-core-component___trim__table .dapp-core-component___trim__trim-only-sm .dapp-core-component___trim__trim {
  max-width: none;
}
@media (max-width: 575px) {
  .dapp-core-component___trim__table .dapp-core-component___trim__trim-only-sm .dapp-core-component___trim__trim {
    max-width: 13rem;
  }
}
@media (max-width: 767px) {
  .dapp-core-component___trim__table .dapp-core-component___trim__trim-only-sm .dapp-core-component___trim__trim {
    max-width: 13rem;
  }
}

.dapp-core-component___trim__trim-fs-sm .dapp-core-component___trim__trim .dapp-core-component___trim__left span,
.dapp-core-component___trim__trim-fs-sm .dapp-core-component___trim__trim .dapp-core-component___trim__right span,
.dapp-core-component___trim__trim-fs-sm .dapp-core-component___trim__trim .dapp-core-component___trim__ellipsis {
  font-size: 0.875rem;
}

@media (min-width: 768px) {
  .dapp-core-component___trim__table .dapp-core-component___trim__trim-size-xl .dapp-core-component___trim__trim {
    max-width: 13rem;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(r));var t={trim:"dapp-core-component___trim__trim",overflow:"dapp-core-component___trim__overflow",ellipsis:"dapp-core-component___trim__ellipsis",left:"dapp-core-component___trim__left",right:"dapp-core-component___trim__right","hidden-text-ref":"dapp-core-component___trim__hidden-text-ref",hiddenTextRef:"dapp-core-component___trim__hidden-text-ref","trim-wrapper":"dapp-core-component___trim__trim-wrapper",trimWrapper:"dapp-core-component___trim__trim-wrapper","text-primary":"dapp-core-component___trim__text-primary",textPrimary:"dapp-core-component___trim__text-primary",table:"dapp-core-component___trim__table","trim-only-sm":"dapp-core-component___trim__trim-only-sm",trimOnlySm:"dapp-core-component___trim__trim-only-sm","trim-fs-sm":"dapp-core-component___trim__trim-fs-sm",trimFsSm:"dapp-core-component___trim__trim-fs-sm","trim-size-xl":"dapp-core-component___trim__trim-size-xl",trimSizeXl:"dapp-core-component___trim__trim-size-xl"};export{r as css,t as default};
//# sourceMappingURL=_trim.js.map
