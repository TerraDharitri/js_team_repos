import{a as i,b as c}from"./chunk-VN727LT2.js";import{f as s,i as o}from"./chunk-P4IVSQC4.js";import{f as a}from"./chunk-JH2LJGTQ.js";a();a();o();var v=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-transform: uppercase;
  border-radius: 50%;
  min-width: 20px;
  min-height: 20px;
  border: 1px solid var(--dapp-form-select-icon-border);
  margin-right: 4px;
  position: relative;
  font-size: 6px;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar:before {
  content: "";
  border-radius: 50%;
  position: absolute;
  inset: 0;
  padding: 1px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar img {
  max-width: 100%;
  height: auto;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar.dapp-core-component__tokenAvatar-styles__tokenAvatarNFT {
  border: none;
  color: #fef08a;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar.dapp-core-component__tokenAvatar-styles__tokenAvatarNFT:before {
  background: linear-gradient(90deg, rgba(240, 152, 25, 0.4), rgba(237, 222, 93, 0.4));
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar.dapp-core-component__tokenAvatar-styles__tokenAvatarSFT {
  border: none;
  color: #fed7aa;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar.dapp-core-component__tokenAvatar-styles__tokenAvatarSFT:before {
  background: linear-gradient(90deg, rgba(240, 77, 25, 0.4), rgba(237, 136, 93, 0.4));
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(v));var t={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"};import e from"react";import{faDiamond as k}from"@fortawesome/free-solid-svg-icons";import{FontAwesomeIcon as A}from"@fortawesome/react-fontawesome";import m from"classnames";o();var f=(c(),s(i)).default,E=r=>{let{avatar:p,type:n}=r;return n==="NonFungibleDCDT"?e.createElement("div",{className:m(t.tokenAvatar,t.tokenAvatarNFT)},"NFT"):n==="SemiFungibleDCDT"?e.createElement("div",{className:m(t.tokenAvatar,t.tokenAvatarSFT)},"SFT"):n==="REWA"?e.createElement("div",{className:t.tokenAvatar},r.RewaIcon?e.createElement(r.RewaIcon,null):e.createElement(f,null)):p?e.createElement("div",{className:t.tokenAvatar},e.createElement("img",{src:p})):e.createElement("div",{className:t.tokenAvatar},e.createElement(A,{icon:k}))};export{E as a};
//# sourceMappingURL=chunk-2WVVP2AH.js.map
