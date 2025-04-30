import{h as t,i as f}from"./chunk-BL7T5FXS.js";import{f as d}from"./chunk-RGFNPOTZ.js";d();import{bech32 as r}from"bech32";f();var m=e=>{let o=r.toWords(t.Buffer.from(e,"hex"));return r.encode("drt",o)},s=e=>{let o=r.decode(e,256);return t.Buffer.from(r.fromWords(o.words)).toString("hex")},u={encode:m,decode:s};export{u as a};
//# sourceMappingURL=chunk-RDE23DWT.js.map
