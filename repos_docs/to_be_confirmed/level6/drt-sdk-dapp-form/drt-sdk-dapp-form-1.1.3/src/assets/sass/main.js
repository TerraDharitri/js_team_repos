"use strict";import{i as o}from"../../__chunks__/chunk-SVQK3TVL.js";o();var n=`* {
  /* Bootstrap overrides
  -------------------------------------------------- */
  /* Do not move the imports from here.
  Override Bootstrap variables only above.
  -------------------------------------------------- */
  /* Base
    -------------------------------------------------- */
  /* Navbar
    -------------------------------------------------- */
  /* Dashboard
    -------------------------------------------------- */
  /* Loader, Transaction Success/Fail
    -------------------------------------------------- */
}
* :root {
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
* html {
  min-height: 100%;
  font-size: 14px;
}
* a,
* .dapp-core-component__main__link-style {
  color: var(--primary-light);
}
* .dapp-core-component__main__link-second-style {
  color: var(--secondary);
}
* .dapp-core-component__main__link-second-style:hover {
  color: var(--primary-light);
}
* .dapp-core-component__main__link-second-style:hover svg {
  color: var(--primary-light);
}
* .dapp-core-component__main__wrapper {
  min-height: 100vh;
}
* .dapp-core-component__main__opacity-6 {
  opacity: 0.6;
}
* .dapp-core-component__main__dapp-icon {
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
* .dapp-core-component__main__dapp-icon.dapp-core-component__main__icon-medium {
  width: 80px;
  height: 80px;
}
* .dapp-core-component__main__centering {
  display: flex;
  justify-content: center;
  align-items: center;
}
* .dapp-core-component__main__border-n {
  border: none;
}
* .dapp-core-component__main__text {
  color: #9dabbd;
}
* .dapp-core-component__main__t-shadow {
  text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.3);
}
* .dapp-core-component__main__btn {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
}
* .dapp-core-component__main__media {
  display: flex;
  align-items: flex-start;
}
* .dapp-core-component__main__media-body {
  flex: 1;
}
* .dapp-core-component__main__connect-btns .dapp-core-component__main__btn {
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
* .dapp-core-component__main__connect-btns .dapp-core-component__main__btn:hover, * .dapp-core-component__main__connect-btns .dapp-core-component__main__btn:active {
  background-color: var(--primary-light);
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
}
* .dapp-core-component__main__connect-btns .dapp-core-component__main__info {
  color: var(--primary-light);
  margin-left: 48px;
}
* .dapp-core-component__main__btn {
  transition: none;
}
* .dapp-core-component__main__trust-badge {
  width: 20px;
  height: 20px;
}
* .dapp-core-component__main__navbar .dapp-core-component__main__dapp-name {
  display: flex;
  align-items: center;
  font-size: toRem(24);
  font-weight: 400;
  color: #9ba5b4;
  margin-left: 1.6428571429rem;
}
* .dapp-core-component__main__navbar .dapp-core-component__main__dapp-name:before {
  content: "";
  display: block;
  width: 1px;
  height: toRem(42);
  margin-right: toRem(24);
}
* .dapp-core-component__main__action-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  margin: 0 7px;
}
* .dapp-core-component__main__action-btn button {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: var(--white);
}
* .dapp-core-component__main__action-btn button:hover {
  opacity: 0.9;
}
* .dapp-core-component__main__transactions .dapp-core-component__main__transaction-icon {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
* .dapp-core-component__main__transactions.dapp-core-component__main__table td {
  white-space: nowrap;
  vertical-align: middle;
}
* .dapp-core-component__main__transactions.dapp-core-component__main__table tr:last-of-type td {
  border-bottom: 1px solid var(--border-color);
}
* .dapp-core-component__main__page-state .dapp-core-component__main__lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
* .dapp-core-component__main__page-state .dapp-core-component__main__lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
* .dapp-core-component__main__page-state .dapp-core-component__main__bg-blue .dapp-core-component__main__lds-ellipsis div {
  background: rgba(255, 255, 255, 0.4);
}
* .dapp-core-component__main__page-state .dapp-core-component__main__lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: dapp-core-component__main__lds-ellipsis1 0.6s infinite;
}
* .dapp-core-component__main__page-state .dapp-core-component__main__lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: dapp-core-component__main__lds-ellipsis2 0.6s infinite;
}
* .dapp-core-component__main__page-state .dapp-core-component__main__lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: dapp-core-component__main__lds-ellipsis2 0.6s infinite;
}
* .dapp-core-component__main__page-state .dapp-core-component__main__lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: dapp-core-component__main__lds-ellipsis3 0.6s infinite;
}
@keyframes dapp-core-component__main__lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes dapp-core-component__main__lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes dapp-core-component__main__lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
* :root {
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
* :root {
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
* .dapp-core-component__main__trim {
  display: flex;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  /* IE fix */
  /* SAFARI 10.1+ fix */
}
* .dapp-core-component__main__trim.dapp-core-component__main__overflow .dapp-core-component__main__ellipsis {
  display: block;
}
* .dapp-core-component__main__trim .dapp-core-component__main__left {
  flex-shrink: 1;
  font-size: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
}
* .dapp-core-component__main__trim .dapp-core-component__main__right {
  flex-shrink: 1;
  font-size: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  direction: rtl;
}
* .dapp-core-component__main__trim .dapp-core-component__main__left span,
* .dapp-core-component__main__trim .dapp-core-component__main__right span {
  font-size: 1rem;
  pointer-events: none;
  user-select: none;
}
* .dapp-core-component__main__trim .dapp-core-component__main__ellipsis {
  flex-shrink: 0;
  display: none;
  pointer-events: none;
  user-select: none;
}
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  * .dapp-core-component__main__trim .dapp-core-component__main__right {
    text-overflow: clip;
  }
}
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    * .dapp-core-component__main__trim .dapp-core-component__main__right {
      text-overflow: unset;
    }
  }
}
* .dapp-core-component__main__trim .dapp-core-component__main__hidden-text-ref {
  position: absolute;
  display: block;
  color: transparent;
}
* .dapp-core-component__main__trim-wrapper {
  display: flex;
  max-width: 100%;
  overflow: hidden;
}
* a:hover > .dapp-core-component__main__trim span {
  color: var(--link-hover-color);
}
* a:hover > .dapp-core-component__main__trim span.dapp-core-component__main__hidden-text-ref {
  color: transparent;
}
* a > .dapp-core-component__main__trim span,
* .dapp-core-component__main__text-primary > .dapp-core-component__main__trim span {
  color: var(--primary);
}
* a > .dapp-core-component__main__trim span.dapp-core-component__main__hidden-text-ref,
* .dapp-core-component__main__text-primary > .dapp-core-component__main__trim span.dapp-core-component__main__hidden-text-ref {
  color: transparent;
}
* .dapp-core-component__main__table .dapp-core-component__main__trim {
  max-width: 10rem;
}
* .dapp-core-component__main__table .dapp-core-component__main__trim-only-sm .dapp-core-component__main__trim {
  max-width: none;
}
@media (max-width: 575px) {
  * .dapp-core-component__main__table .dapp-core-component__main__trim-only-sm .dapp-core-component__main__trim {
    max-width: 13rem;
  }
}
@media (max-width: 767px) {
  * .dapp-core-component__main__table .dapp-core-component__main__trim-only-sm .dapp-core-component__main__trim {
    max-width: 13rem;
  }
}
* .dapp-core-component__main__trim-fs-sm .dapp-core-component__main__trim .dapp-core-component__main__left span,
* .dapp-core-component__main__trim-fs-sm .dapp-core-component__main__trim .dapp-core-component__main__right span,
* .dapp-core-component__main__trim-fs-sm .dapp-core-component__main__trim .dapp-core-component__main__ellipsis {
  font-size: 0.875rem;
}
@media (min-width: 768px) {
  * .dapp-core-component__main__table .dapp-core-component__main__trim-size-xl .dapp-core-component__main__trim {
    max-width: 13rem;
  }
}
* :root {
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
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-dialog .dapp-core-component__main__modal-content {
  border-radius: 20px;
  border: none;
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-dialog .dapp-core-component__main__modal-content .dapp-core-component__main__card {
  border: none;
  background: none;
  box-shadow: unset;
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-dialog .dapp-core-component__main__modal-content .dapp-core-component__main__card-body {
  padding: 40px;
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-dialog .dapp-core-component__main__modal-content .dapp-core-component__main__btn-close-link {
  width: 8rem;
  background: #f3f9ff;
  border: 1px solid #ddeeff;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-dialog .dapp-core-component__main__modal-content .dapp-core-component__main__btn-close-link:hover {
  background-image: linear-gradient(rgba(77, 169, 255, 0.1) 0 0);
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-dialog .dapp-core-component__main__modal-card .dapp-core-component__main__modal-card-body {
  border-radius: var(--dapp-form-input-border-radius);
}
@media (min-width: 576px) {
  * .dapp-core-component__main__modal-container .dapp-core-component__main__modal-dialog .dapp-core-component__main__modal-card {
    width: 39rem;
  }
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-dialog .dapp-core-component__main__modal-card .dapp-core-component__main__card {
  background-color: var(--card-bg);
  border-radius: 0;
  box-shadow: none;
  border: none;
  width: unset;
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-dialog .dapp-core-component__main__modal-card .dapp-core-component__main__card > .dapp-core-component__main__p-4 {
  padding: 0;
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-dialog .dapp-core-component__main__modal-card .dapp-core-component__main__card.dapp-core-component__main__my-4 {
  margin: 0;
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-action-btns {
  display: flex;
  justify-content: center;
  gap: 11px;
  margin-top: 32px;
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-action-btns button {
  flex: 1;
  display: flex;
  max-width: 236px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-light);
  border: 1px solid #007ded;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  gap: 12px;
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-action-btns button:hover, * .dapp-core-component__main__modal-container .dapp-core-component__main__modal-action-btns button:active {
  color: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-action-btns .dapp-core-component__main__selectable-option {
  max-width: 100%;
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-action-btns .dapp-core-component__main__btn-light {
  color: var(--primary-light);
  background: #f3f9ff;
  border: 1px solid #ddeeff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
}
* .dapp-core-component__main__modal-container .dapp-core-component__main__modal-action-btns .dapp-core-component__main__btn-light:hover, * .dapp-core-component__main__modal-container .dapp-core-component__main__modal-action-btns .dapp-core-component__main__btn-light:active {
  color: var(--primary-light);
  background-image: linear-gradient(rgba(77, 169, 255, 0.1) 0 0);
  background-color: unset;
}
* .dapp-core-component__main__icon-state {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}
* .dapp-core-component__main__icon-state.dapp-core-component__main__half {
  width: 3rem;
  height: 3rem;
}
* :root {
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
* .dapp-core-component__main__toast-messages {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 9999;
}
@media (min-width: 768px) {
  * .dapp-core-component__main__toast-messages {
    right: 2rem;
    bottom: 2rem;
    width: 22.5rem;
    left: auto;
  }
}
* .dapp-core-component__main__toast-messages .dapp-core-component__main__toast {
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
* .dapp-core-component__main__toast-messages .dapp-core-component__main__toast.dapp-core-component__main__clickable {
  cursor: pointer;
}
* .dapp-core-component__main__toast-messages .dapp-core-component__main__toast.dapp-core-component__main__toast-visible {
  margin-bottom: 0.3rem;
  transform: translateX(0);
}
* .dapp-core-component__main__toast-messages .dapp-core-component__main__toast.dapp-core-component__main__toast-visible .dapp-core-component__main__progress {
  background-color: transparent;
  height: inherit;
  font-size: inherit;
  line-height: inherit;
}
* .dapp-core-component__main__toast-messages .dapp-core-component__main__toast.dapp-core-component__main__toast-visible .dapp-core-component__main__progress .dapp-core-component__main__progress-bar {
  background-color: rgba(108, 117, 125, 0.2);
}
* .dapp-core-component__main__toast-messages .dapp-core-component__main__toast.dapp-core-component__main__toast-visible .dapp-core-component__main__progress .dapp-core-component__main__progress-bar .dapp-core-component__main__content-height {
  z-index: -1;
  visibility: hidden;
  width: 0;
}
@media (max-width: 575px) {
  * .dapp-core-component__main__toast-messages .dapp-core-component__main__toast {
    display: none;
  }
  * .dapp-core-component__main__toast-messages .dapp-core-component__main__toast:first-child {
    display: block;
    transform: translateY(150%);
  }
  * .dapp-core-component__main__toast-messages .dapp-core-component__main__toast:first-child.dapp-core-component__main__toast-visible {
    transform: translateY(0);
  }
}
@media (max-width: 767px) {
  * .dapp-core-component__main__toast-messages .dapp-core-component__main__toast {
    display: none;
  }
  * .dapp-core-component__main__toast-messages .dapp-core-component__main__toast:first-child {
    display: block;
    transform: translateY(150%);
  }
  * .dapp-core-component__main__toast-messages .dapp-core-component__main__toast:first-child.dapp-core-component__main__toast-visible {
    transform: translateY(0);
  }
}
* .dapp-core-component__main__toast-messages .dapp-core-component__main__toast .dapp-core-component__main__tx-description {
  margin-bottom: 0.2rem;
}
* .dapp-core-component__main__toast-messages .dapp-core-component__main__close {
  opacity: 1;
}
* .dapp-core-component__main__toast-messages .dapp-core-component__main__close svg {
  color: var(--secondary);
}
* .dapp-core-component__main__tx-details-text {
  width: 10rem;
}
* :root {
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
* .dapp-core-component__main__token-symbol,
* .dapp-core-component__main__token-symbol-combined {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: 50%;
}
* .dapp-core-component__main__token-symbol svg #dapp-core-component__main__rewa-token,
* .dapp-core-component__main__token-symbol-combined svg #dapp-core-component__main__rewa-token {
  fill: var(--black);
}
* .dapp-core-component__main__token-symbol-combined {
  background-color: transparent;
}
* .dapp-core-component__main__token-symbol {
  border: 1px solid var(--black);
  width: 2rem;
  height: 2rem;
}
* .dapp-core-component__main__token-symbol img {
  width: 100%;
  height: 100%;
}
* .dapp-core-component__main__token-symbol svg {
  width: 1.25rem;
  height: 1.25rem;
}
* .dapp-core-component__main__token-symbol svg.dapp-core-component__main__expanded {
  width: 100%;
  height: 100%;
}
* .dapp-core-component__main__token-symbol-combined {
  width: 4.5rem;
  height: 4.5rem;
}
* .dapp-core-component__main__token-symbol-combined svg {
  filter: drop-shadow(0 0 0.25rem black);
}
* .dapp-core-component__main__token-symbol-combined svg circle {
  fill: var(--card-bg);
}
* .dapp-core-component__main__token-symbol-combined svg {
  width: 4.25rem;
  height: 4.25rem;
}
* .dapp-core-component__main__token-symbol-combined.dapp-core-component__main__small {
  width: 2.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
}
* .dapp-core-component__main__token-symbol-combined.dapp-core-component__main__small svg {
  width: 2.5rem;
  height: 2.5rem;
}
* .dapp-core-component__main__token-icon-lg .dapp-core-component__main__token-symbol {
  width: 3rem;
  height: 3rem;
}
* .dapp-core-component__main__token-icon-lg .dapp-core-component__main__token-symbol svg {
  width: 2.25rem;
  height: 2.25rem;
}
* .dapp-core-component__main__token-icon-xl .dapp-core-component__main__token-symbol {
  width: 4rem;
  height: 4rem;
}
* .dapp-core-component__main__token-icon-xl .dapp-core-component__main__token-symbol svg {
  width: 2.3rem;
  height: 2.3rem;
}
* .dapp-core-component__main__pool-icon.dapp-core-component__main__icon-xs .dapp-core-component__main__token-symbol + .dapp-core-component__main__token-symbol {
  margin-left: 0.7rem;
  margin-top: -0.325rem;
}
* .dapp-core-component__main__pool-icon.dapp-core-component__main__icon-xs .dapp-core-component__main__token-symbol {
  width: 1rem;
  height: 1rem;
}
* .dapp-core-component__main__pool-icon.dapp-core-component__main__icon-xs .dapp-core-component__main__token-symbol svg {
  width: 0.625rem;
  height: 0.625rem;
}
* .dapp-core-component__main__pool-icon.dapp-core-component__main__icon-md .dapp-core-component__main__token-symbol + .dapp-core-component__main__token-symbol {
  margin-left: 1.2rem;
  margin-top: -0.6rem;
}
* .dapp-core-component__main__pool-icon.dapp-core-component__main__icon-md .dapp-core-component__main__token-symbol {
  width: 1.8rem;
  height: 1.8rem;
}
* .dapp-core-component__main__pool-icon.dapp-core-component__main__icon-md .dapp-core-component__main__token-symbol svg {
  width: 1.2rem;
  height: 1.2rem;
}
* .dapp-core-component__main__pool-icon.dapp-core-component__main__icon-lg .dapp-core-component__main__token-symbol + .dapp-core-component__main__token-symbol {
  margin-left: 1.3rem;
  margin-top: -0.725rem;
}
* .dapp-core-component__main__pool-icon.dapp-core-component__main__icon-lg .dapp-core-component__main__token-symbol {
  width: 2.3rem;
  height: 2.3rem;
}
* .dapp-core-component__main__pool-icon.dapp-core-component__main__icon-xl .dapp-core-component__main__token-symbol + .dapp-core-component__main__token-symbol {
  margin-left: 2rem;
  margin-top: -1rem;
}
* .dapp-core-component__main__pool-icon.dapp-core-component__main__icon-xl .dapp-core-component__main__token-symbol {
  width: 4rem;
  height: 4rem;
}
* .dapp-core-component__main__pool-icon.dapp-core-component__main__icon-xl .dapp-core-component__main__token-symbol svg {
  width: 2.3rem;
  height: 2.3rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(n));var _={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n",text:"dapp-core-component__main__text","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",trim:"dapp-core-component__main__trim",overflow:"dapp-core-component__main__overflow",ellipsis:"dapp-core-component__main__ellipsis",left:"dapp-core-component__main__left",right:"dapp-core-component__main__right","hidden-text-ref":"dapp-core-component__main__hidden-text-ref",hiddenTextRef:"dapp-core-component__main__hidden-text-ref","trim-wrapper":"dapp-core-component__main__trim-wrapper",trimWrapper:"dapp-core-component__main__trim-wrapper","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl","modal-container":"dapp-core-component__main__modal-container",modalContainer:"dapp-core-component__main__modal-container","modal-dialog":"dapp-core-component__main__modal-dialog",modalDialog:"dapp-core-component__main__modal-dialog","modal-content":"dapp-core-component__main__modal-content",modalContent:"dapp-core-component__main__modal-content",card:"dapp-core-component__main__card","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","btn-close-link":"dapp-core-component__main__btn-close-link",btnCloseLink:"dapp-core-component__main__btn-close-link","modal-card":"dapp-core-component__main__modal-card",modalCard:"dapp-core-component__main__modal-card","modal-card-body":"dapp-core-component__main__modal-card-body",modalCardBody:"dapp-core-component__main__modal-card-body","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","modal-action-btns":"dapp-core-component__main__modal-action-btns",modalActionBtns:"dapp-core-component__main__modal-action-btns","selectable-option":"dapp-core-component__main__selectable-option",selectableOption:"dapp-core-component__main__selectable-option","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","tx-details-text":"dapp-core-component__main__tx-details-text",txDetailsText:"dapp-core-component__main__tx-details-text","token-symbol":"dapp-core-component__main__token-symbol",tokenSymbol:"dapp-core-component__main__token-symbol","token-symbol-combined":"dapp-core-component__main__token-symbol-combined",tokenSymbolCombined:"dapp-core-component__main__token-symbol-combined","rewa-token":"dapp-core-component__main__rewa-token",rewaToken:"dapp-core-component__main__rewa-token",expanded:"dapp-core-component__main__expanded",small:"dapp-core-component__main__small","token-icon-lg":"dapp-core-component__main__token-icon-lg",tokenIconLg:"dapp-core-component__main__token-icon-lg","token-icon-xl":"dapp-core-component__main__token-icon-xl",tokenIconXl:"dapp-core-component__main__token-icon-xl","pool-icon":"dapp-core-component__main__pool-icon",poolIcon:"dapp-core-component__main__pool-icon","icon-xs":"dapp-core-component__main__icon-xs",iconXs:"dapp-core-component__main__icon-xs","icon-md":"dapp-core-component__main__icon-md",iconMd:"dapp-core-component__main__icon-md","icon-lg":"dapp-core-component__main__icon-lg",iconLg:"dapp-core-component__main__icon-lg","icon-xl":"dapp-core-component__main__icon-xl",iconXl:"dapp-core-component__main__icon-xl"};export{n as css,_ as default};
//# sourceMappingURL=main.js.map
