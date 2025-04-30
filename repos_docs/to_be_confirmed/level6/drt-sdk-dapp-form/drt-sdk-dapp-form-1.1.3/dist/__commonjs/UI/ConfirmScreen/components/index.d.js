"use strict";import{a as n,b as Ir,d as se,e as Ur,f as ue}from"../../../../__chunks__/chunk-RGFNPOTZ.js";var Ar=Ir((Ua,qr)=>{"use strict";ue();var Fr=Object.create,ne=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,Pr=Object.getOwnPropertyNames,ye=Object.getOwnPropertySymbols,Mr=Object.getPrototypeOf,je=Object.prototype.hasOwnProperty,ur=Object.prototype.propertyIsEnumerable,Qe=(d,c,i)=>c in d?ne(d,c,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[c]=i,ze=(d,c)=>{for(var i in c||(c={}))je.call(c,i)&&Qe(d,i,c[i]);if(ye)for(var i of ye(c))ur.call(c,i)&&Qe(d,i,c[i]);return d},jr=(d,c)=>{var i={};for(var s in d)je.call(d,s)&&c.indexOf(s)<0&&(i[s]=d[s]);if(d!=null&&ye)for(var s of ye(d))c.indexOf(s)<0&&ur.call(d,s)&&(i[s]=d[s]);return i},Ve=(d,c)=>()=>(d&&(c=d(d=0)),c),xe=(d,c)=>()=>(c||d((c={exports:{}}).exports,c),c.exports),We=(d,c)=>{for(var i in c)ne(d,i,{get:c[i],enumerable:!0})},mr=(d,c,i,s)=>{if(c&&typeof c=="object"||typeof c=="function")for(let u of Pr(c))!je.call(d,u)&&u!==i&&ne(d,u,{get:()=>c[u],enumerable:!(s=Or(c,u))||s.enumerable});return d},m=(d,c,i)=>(i=d!=null?Fr(Mr(d)):{},mr(c||!d||!d.__esModule?ne(i,"default",{value:d,enumerable:!0}):i,d)),Ee=d=>mr(ne({},"__esModule",{value:!0}),d),zr=xe(d=>{"use strict";l(),d.byteLength=k,d.toByteArray=A,d.fromByteArray=T;var c=[],i=[],s=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,h=u.length;_<h;++_)c[_]=u[_],i[u.charCodeAt(_)]=_;var _,h;i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63;function a(b){var g=b.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var x=b.indexOf("=");x===-1&&(x=g);var y=x===g?0:4-x%4;return[x,y]}function k(b){var g=a(b),x=g[0],y=g[1];return(x+y)*3/4-y}function w(b,g,x){return(g+x)*3/4-x}function A(b){var g,x=a(b),y=x[0],N=x[1],C=new s(w(b,y,N)),B=0,F=N>0?y-4:y,D;for(D=0;D<F;D+=4)g=i[b.charCodeAt(D)]<<18|i[b.charCodeAt(D+1)]<<12|i[b.charCodeAt(D+2)]<<6|i[b.charCodeAt(D+3)],C[B++]=g>>16&255,C[B++]=g>>8&255,C[B++]=g&255;return N===2&&(g=i[b.charCodeAt(D)]<<2|i[b.charCodeAt(D+1)]>>4,C[B++]=g&255),N===1&&(g=i[b.charCodeAt(D)]<<10|i[b.charCodeAt(D+1)]<<4|i[b.charCodeAt(D+2)]>>2,C[B++]=g>>8&255,C[B++]=g&255),C}function E(b){return c[b>>18&63]+c[b>>12&63]+c[b>>6&63]+c[b&63]}function q(b,g,x){for(var y,N=[],C=g;C<x;C+=3)y=(b[C]<<16&16711680)+(b[C+1]<<8&65280)+(b[C+2]&255),N.push(E(y));return N.join("")}function T(b){for(var g,x=b.length,y=x%3,N=[],C=16383,B=0,F=x-y;B<F;B+=C)N.push(q(b,B,B+C>F?F:B+C));return y===1?(g=b[x-1],N.push(c[g>>2]+c[g<<4&63]+"==")):y===2&&(g=(b[x-2]<<8)+b[x-1],N.push(c[g>>10]+c[g>>4&63]+c[g<<2&63]+"=")),N.join("")}}),Vr=xe(d=>{l(),d.read=function(c,i,s,u,_){var h,a,k=_*8-u-1,w=(1<<k)-1,A=w>>1,E=-7,q=s?_-1:0,T=s?-1:1,b=c[i+q];for(q+=T,h=b&(1<<-E)-1,b>>=-E,E+=k;E>0;h=h*256+c[i+q],q+=T,E-=8);for(a=h&(1<<-E)-1,h>>=-E,E+=u;E>0;a=a*256+c[i+q],q+=T,E-=8);if(h===0)h=1-A;else{if(h===w)return a?NaN:(b?-1:1)*(1/0);a=a+Math.pow(2,u),h=h-A}return(b?-1:1)*a*Math.pow(2,h-u)},d.write=function(c,i,s,u,_,h){var a,k,w,A=h*8-_-1,E=(1<<A)-1,q=E>>1,T=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=u?0:h-1,g=u?1:-1,x=i<0||i===0&&1/i<0?1:0;for(i=Math.abs(i),isNaN(i)||i===1/0?(k=isNaN(i)?1:0,a=E):(a=Math.floor(Math.log(i)/Math.LN2),i*(w=Math.pow(2,-a))<1&&(a--,w*=2),a+q>=1?i+=T/w:i+=T*Math.pow(2,1-q),i*w>=2&&(a++,w/=2),a+q>=E?(k=0,a=E):a+q>=1?(k=(i*w-1)*Math.pow(2,_),a=a+q):(k=i*Math.pow(2,q-1)*Math.pow(2,_),a=0));_>=8;c[s+b]=k&255,b+=g,k/=256,_-=8);for(a=a<<_|k,A+=_;A>0;c[s+b]=a&255,b+=g,a/=256,A-=8);c[s+b-g]|=x*128}}),Wr=xe(d=>{"use strict";l();var c=zr(),i=Vr(),s=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;d.Buffer=a,d.SlowBuffer=N,d.INSPECT_MAX_BYTES=50;var u=2147483647;d.kMaxLength=u,a.TYPED_ARRAY_SUPPORT=_(),!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function h(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,a.prototype),r}function a(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return E(e)}return k(e,r,t)}a.poolSize=8192;function k(e,r,t){if(typeof e=="string")return q(e,r);if(ArrayBuffer.isView(e))return b(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Z(e,ArrayBuffer)||e&&Z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Z(e,SharedArrayBuffer)||e&&Z(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return a.from(o,r,t);var p=x(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,r,t){return k(e,r,t)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function w(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function A(e,r,t){return w(e),e<=0?h(e):r!==void 0?typeof t=="string"?h(e).fill(r,t):h(e).fill(r):h(e)}a.alloc=function(e,r,t){return A(e,r,t)};function E(e){return w(e),h(e<0?0:y(e)|0)}a.allocUnsafe=function(e){return E(e)},a.allocUnsafeSlow=function(e){return E(e)};function q(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!a.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=C(e,r)|0,o=h(t),p=o.write(e,r);return p!==t&&(o=o.slice(0,p)),o}function T(e){for(var r=e.length<0?0:y(e.length)|0,t=h(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function b(e){if(Z(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return T(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,a.prototype),o}function x(e){if(a.isBuffer(e)){var r=y(e.length)|0,t=h(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||Be(e.length)?h(0):T(e);if(e.type==="Buffer"&&Array.isArray(e.data))return T(e.data)}function y(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function N(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==a.prototype},a.compare=function(e,r){if(Z(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),Z(r,Uint8Array)&&(r=a.from(r,r.offset,r.byteLength)),!a.isBuffer(e)||!a.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,p=0,f=Math.min(t,o);p<f;++p)if(e[p]!==r[p]){t=e[p],o=r[p];break}return t<o?-1:o<t?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return a.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=a.allocUnsafe(r),p=0;for(t=0;t<e.length;++t){var f=e[t];if(Z(f,Uint8Array))p+f.length>o.length?a.from(f).copy(o,p):Uint8Array.prototype.set.call(o,f,p);else if(a.isBuffer(f))f.copy(o,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=f.length}return o};function C(e,r){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var p=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Ue(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Xe(e).length;default:if(p)return o?-1:Ue(e).length;r=(""+r).toLowerCase(),p=!0}}a.byteLength=C;function B(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Se(this,r,t);case"utf8":case"utf-8":return pe(this,r,t);case"ascii":return Ne(this,r,t);case"latin1":case"binary":return Le(this,r,t);case"base64":return Te(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ie(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}a.prototype._isBuffer=!0;function F(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)F(this,r,r+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)F(this,r,r+3),F(this,r+1,r+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)F(this,r,r+7),F(this,r+1,r+6),F(this,r+2,r+5),F(this,r+3,r+4);return this},a.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?pe(this,0,e):B.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:a.compare(this,e)===0},a.prototype.inspect=function(){var e="",r=d.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},s&&(a.prototype[s]=a.prototype.inspect),a.prototype.compare=function(e,r,t,o,p){if(Z(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),p===void 0&&(p=this.length),r<0||t>e.length||o<0||p>this.length)throw new RangeError("out of range index");if(o>=p&&r>=t)return 0;if(o>=p)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,p>>>=0,this===e)return 0;for(var f=p-o,v=t-r,L=Math.min(f,v),O=this.slice(o,p),S=e.slice(r,t),I=0;I<L;++I)if(O[I]!==S[I]){f=O[I],v=S[I];break}return f<v?-1:v<f?1:0};function D(e,r,t,o,p){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Be(t)&&(t=p?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(p)return-1;t=e.length-1}else if(t<0)if(p)t=0;else return-1;if(typeof r=="string"&&(r=a.from(r,o)),a.isBuffer(r))return r.length===0?-1:le(e,r,t,o,p);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):le(e,[r],t,o,p);throw new TypeError("val must be string, number or Buffer")}function le(e,r,t,o,p){var f=1,v=e.length,L=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;f=2,v/=2,L/=2,t/=2}function O(Je,Ke){return f===1?Je[Ke]:Je.readUInt16BE(Ke*f)}var S;if(p){var I=-1;for(S=t;S<v;S++)if(O(e,S)===O(r,I===-1?0:S-I)){if(I===-1&&(I=S),S-I+1===L)return I*f}else I!==-1&&(S-=S-I),I=-1}else for(t+L>v&&(t=v-L),S=t;S>=0;S--){for(var M=!0,fe=0;fe<L;fe++)if(O(e,S+fe)!==O(r,fe)){M=!1;break}if(M)return S}return-1}a.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},a.prototype.indexOf=function(e,r,t){return D(this,e,r,t,!0)},a.prototype.lastIndexOf=function(e,r,t){return D(this,e,r,t,!1)};function ke(e,r,t,o){t=Number(t)||0;var p=e.length-t;o?(o=Number(o),o>p&&(o=p)):o=p;var f=r.length;o>f/2&&(o=f/2);for(var v=0;v<o;++v){var L=parseInt(r.substr(v*2,2),16);if(Be(L))return v;e[t+v]=L}return v}function ee(e,r,t,o){return de(Ue(r,e.length-t),e,t,o)}function ie(e,r,t,o){return de(Nr(r),e,t,o)}function qe(e,r,t,o){return de(Xe(r),e,t,o)}function Ae(e,r,t,o){return de(Lr(r,e.length-t),e,t,o)}a.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-r;if((t===void 0||t>p)&&(t=p),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var f=!1;;)switch(o){case"hex":return ke(this,e,r,t);case"utf8":case"utf-8":return ee(this,e,r,t);case"ascii":case"latin1":case"binary":return ie(this,e,r,t);case"base64":return qe(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,e,r,t);default:if(f)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),f=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Te(e,r,t){return r===0&&t===e.length?c.fromByteArray(e):c.fromByteArray(e.slice(r,t))}function pe(e,r,t){t=Math.min(e.length,t);for(var o=[],p=r;p<t;){var f=e[p],v=null,L=f>239?4:f>223?3:f>191?2:1;if(p+L<=t){var O,S,I,M;switch(L){case 1:f<128&&(v=f);break;case 2:O=e[p+1],(O&192)===128&&(M=(f&31)<<6|O&63,M>127&&(v=M));break;case 3:O=e[p+1],S=e[p+2],(O&192)===128&&(S&192)===128&&(M=(f&15)<<12|(O&63)<<6|S&63,M>2047&&(M<55296||M>57343)&&(v=M));break;case 4:O=e[p+1],S=e[p+2],I=e[p+3],(O&192)===128&&(S&192)===128&&(I&192)===128&&(M=(f&15)<<18|(O&63)<<12|(S&63)<<6|I&63,M>65535&&M<1114112&&(v=M))}}v===null?(v=65533,L=1):v>65535&&(v-=65536,o.push(v>>>10&1023|55296),v=56320|v&1023),o.push(v),p+=L}return Ce(o)}var ce=4096;function Ce(e){var r=e.length;if(r<=ce)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ce));return t}function Ne(e,r,t){var o="";t=Math.min(e.length,t);for(var p=r;p<t;++p)o+=String.fromCharCode(e[p]&127);return o}function Le(e,r,t){var o="";t=Math.min(e.length,t);for(var p=r;p<t;++p)o+=String.fromCharCode(e[p]);return o}function Se(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var p="",f=r;f<t;++f)p+=Sr[e[f]];return p}function Ie(e,r,t){for(var o=e.slice(r,t),p="",f=0;f<o.length-1;f+=2)p+=String.fromCharCode(o[f]+o[f+1]*256);return p}a.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,a.prototype),o};function R(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||R(e,r,this.length);for(var o=this[e],p=1,f=0;++f<r&&(p*=256);)o+=this[e+f]*p;return o},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||R(e,r,this.length);for(var o=this[e+--r],p=1;r>0&&(p*=256);)o+=this[e+--r]*p;return o},a.prototype.readUint8=a.prototype.readUInt8=function(e,r){return e=e>>>0,r||R(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||R(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||R(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||R(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||R(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||R(e,r,this.length);for(var o=this[e],p=1,f=0;++f<r&&(p*=256);)o+=this[e+f]*p;return p*=128,o>=p&&(o-=Math.pow(2,8*r)),o},a.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||R(e,r,this.length);for(var o=r,p=1,f=this[e+--o];o>0&&(p*=256);)f+=this[e+--o]*p;return p*=128,f>=p&&(f-=Math.pow(2,8*r)),f},a.prototype.readInt8=function(e,r){return e=e>>>0,r||R(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},a.prototype.readInt16LE=function(e,r){e=e>>>0,r||R(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},a.prototype.readInt16BE=function(e,r){e=e>>>0,r||R(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},a.prototype.readInt32LE=function(e,r){return e=e>>>0,r||R(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,r){return e=e>>>0,r||R(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,r){return e=e>>>0,r||R(e,4,this.length),i.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,r){return e=e>>>0,r||R(e,4,this.length),i.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||R(e,8,this.length),i.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||R(e,8,this.length),i.read(this,e,!1,52,8)};function z(e,r,t,o,p,f){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>p||r<f)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var p=Math.pow(2,8*t)-1;z(this,e,r,t,p,0)}var f=1,v=0;for(this[r]=e&255;++v<t&&(f*=256);)this[r+v]=e/f&255;return r+t},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var p=Math.pow(2,8*t)-1;z(this,e,r,t,p,0)}var f=t-1,v=1;for(this[r+f]=e&255;--f>=0&&(v*=256);)this[r+f]=e/v&255;return r+t},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,1,255,0),this[r]=e&255,r+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},a.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var p=Math.pow(2,8*t-1);z(this,e,r,t,p-1,-p)}var f=0,v=1,L=0;for(this[r]=e&255;++f<t&&(v*=256);)e<0&&L===0&&this[r+f-1]!==0&&(L=1),this[r+f]=(e/v>>0)-L&255;return r+t},a.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var p=Math.pow(2,8*t-1);z(this,e,r,t,p-1,-p)}var f=t-1,v=1,L=0;for(this[r+f]=e&255;--f>=0&&(v*=256);)e<0&&L===0&&this[r+f+1]!==0&&(L=1),this[r+f]=(e/v>>0)-L&255;return r+t},a.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},a.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},a.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},a.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},a.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function $e(e,r,t,o,p,f){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ye(e,r,t,o,p){return r=+r,t=t>>>0,p||$e(e,r,t,4,34028234663852886e22,-34028234663852886e22),i.write(e,r,t,o,23,4),t+4}a.prototype.writeFloatLE=function(e,r,t){return Ye(this,e,r,!0,t)},a.prototype.writeFloatBE=function(e,r,t){return Ye(this,e,r,!1,t)};function He(e,r,t,o,p){return r=+r,t=t>>>0,p||$e(e,r,t,8,17976931348623157e292,-17976931348623157e292),i.write(e,r,t,o,52,8),t+8}a.prototype.writeDoubleLE=function(e,r,t){return He(this,e,r,!0,t)},a.prototype.writeDoubleBE=function(e,r,t){return He(this,e,r,!1,t)},a.prototype.copy=function(e,r,t,o){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var p=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),p},a.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!a.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var p=e.charCodeAt(0);(o==="utf8"&&p<128||o==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var f;if(typeof e=="number")for(f=r;f<t;++f)this[f]=e;else{var v=a.isBuffer(e)?e:a.from(e,o),L=v.length;if(L===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(f=0;f<t-r;++f)this[f+r]=v[f%L]}return this};var Tr=/[^+/0-9A-Za-z-_]/g;function Cr(e){if(e=e.split("=")[0],e=e.trim().replace(Tr,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Ue(e,r){r=r||1/0;for(var t,o=e.length,p=null,f=[],v=0;v<o;++v){if(t=e.charCodeAt(v),t>55295&&t<57344){if(!p){if(t>56319){(r-=3)>-1&&f.push(239,191,189);continue}else if(v+1===o){(r-=3)>-1&&f.push(239,191,189);continue}p=t;continue}if(t<56320){(r-=3)>-1&&f.push(239,191,189),p=t;continue}t=(p-55296<<10|t-56320)+65536}else p&&(r-=3)>-1&&f.push(239,191,189);if(p=null,t<128){if((r-=1)<0)break;f.push(t)}else if(t<2048){if((r-=2)<0)break;f.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;f.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;f.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return f}function Nr(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Lr(e,r){for(var t,o,p,f=[],v=0;v<e.length&&!((r-=2)<0);++v)t=e.charCodeAt(v),o=t>>8,p=t%256,f.push(p),f.push(o);return f}function Xe(e){return c.toByteArray(Cr(e))}function de(e,r,t,o){for(var p=0;p<o&&!(p+t>=r.length||p>=e.length);++p)r[p+t]=e[p];return p}function Z(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function Be(e){return e!==e}var Sr=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,p=0;p<16;++p)r[o+p]=e[t]+e[p];return r}()}),Gr=xe((d,c)=>{l();var i=c.exports={},s,u;function _(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?s=setTimeout:s=_}catch(y){s=_}try{typeof clearTimeout=="function"?u=clearTimeout:u=h}catch(y){u=h}})();function a(y){if(s===setTimeout)return setTimeout(y,0);if((s===_||!s)&&setTimeout)return s=setTimeout,setTimeout(y,0);try{return s(y,0)}catch(N){try{return s.call(null,y,0)}catch(C){return s.call(this,y,0)}}}function k(y){if(u===clearTimeout)return clearTimeout(y);if((u===h||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(y);try{return u(y)}catch(N){try{return u.call(null,y)}catch(C){return u.call(this,y)}}}var w=[],A=!1,E,q=-1;function T(){!A||!E||(A=!1,E.length?w=E.concat(w):q=-1,w.length&&b())}function b(){if(!A){var y=a(T);A=!0;for(var N=w.length;N;){for(E=w,w=[];++q<N;)E&&E[q].run();q=-1,N=w.length}E=null,A=!1,k(y)}}i.nextTick=function(y){var N=new Array(arguments.length-1);if(arguments.length>1)for(var C=1;C<arguments.length;C++)N[C-1]=arguments[C];w.push(new g(y,N)),w.length===1&&!A&&a(b)};function g(y,N){this.fun=y,this.array=N}g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={};function x(){}i.on=x,i.addListener=x,i.once=x,i.off=x,i.removeListener=x,i.removeAllListeners=x,i.emit=x,i.prependListener=x,i.prependOnceListener=x,i.listeners=function(y){return[]},i.binding=function(y){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(y){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}),_r,Zr,$r,l=Ve(()=>{_r=m(Wr()),Zr=m(Gr()),$r=function(d){function c(){var s=this||self;return delete d.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return c();d.defineProperty(d.prototype,"__magic__",{configurable:!0,get:c});var i=__magic__;return i}(Object)}),Ge={};We(Ge,{default:()=>br});var me,er,br,hr=Ve(()=>{"use strict";l(),me=m(n("react")),er=d=>me.createElement("svg",ze({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},d),me.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),me.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),br=er}),gr={};We(gr,{default:()=>vr});var _e,rr,vr,Yr=Ve(()=>{"use strict";l(),_e=m(n("react")),rr=d=>_e.createElement("svg",ze({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},d),_e.createElement("g",null,_e.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),vr=rr}),yr={};We(yr,{TransactionSummary:()=>ao});qr.exports=Ee(yr);l();l();var j=m(n("react")),Hr=n("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");l();var Xr=`:root {
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

.dapp-core-component__globals-module__error {
  width: 100%;
  display: block;
  color: var(--dapp-form-error-color);
  line-height: 1;
  position: absolute;
  top: 100%;
  left: 0;
  padding-top: 8px;
  font-size: 12px;
}
.dapp-core-component__globals-module__error.dapp-core-component__globals-module__scam svg {
  margin-right: 4px;
  color: var(--dapp-form-error-color) !important;
}

.dapp-core-component__globals-module__label {
  margin-bottom: 8px;
  color: var(--dapp-form-label-color);
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  display: block;
}

.dapp-core-component__globals-module__value {
  color: var(--dapp-form-input-color);
  display: block;
  background: var(--dapp-form-input-bg) !important;
  border-radius: var(--dapp-form-input-border-radius);
  padding: 12px;
  margin-top: 4px;
  font-size: 1rem;
}

.dapp-core-component__globals-module__input,
.dapp-core-component__globals-module__textarea {
  font-weight: 400;
  line-height: 1;
  color: var(--dapp-form-input-color) !important;
  background-clip: padding-box;
  border: 1px solid var(--dapp-form-input-bg);
  border-radius: var(--dapp-form-input-border-radius);
  width: 100%;
  box-sizing: border-box;
  background-color: var(--dapp-form-input-bg) !important;
  transition: all 200ms ease;
  padding: 12px;
  font-size: 14px;
}
.dapp-core-component__globals-module__input::placeholder,
.dapp-core-component__globals-module__textarea::placeholder {
  color: var(--dapp-form-placeholder-color) !important;
}
.dapp-core-component__globals-module__input.dapp-core-component__globals-module__disabled,
.dapp-core-component__globals-module__textarea.dapp-core-component__globals-module__disabled {
  pointer-events: none;
  color: var(--dapp-form-input-color-disabled) !important;
}
.dapp-core-component__globals-module__input.dapp-core-component__globals-module__disabled::placeholder,
.dapp-core-component__globals-module__textarea.dapp-core-component__globals-module__disabled::placeholder {
  color: var(--dapp-form-input-color-disabled) !important;
}
.dapp-core-component__globals-module__input.dapp-core-component__globals-module__invalid,
.dapp-core-component__globals-module__textarea.dapp-core-component__globals-module__invalid {
  margin: 0;
  border-color: var(--dapp-form-error-color);
  font-size: 1rem;
}
.dapp-core-component__globals-module__input:focus,
.dapp-core-component__globals-module__textarea:focus {
  outline: 0;
  color: var(--dapp-form-input-color) !important;
  border-color: var(--dapp-form-input-border-focus);
}

.dapp-core-component__globals-module__textarea {
  line-height: 1.25;
  min-height: 80px;
}

.dapp-core-component__globals-module__button-send {
  margin: 0 auto;
  align-self: center;
  line-height: 1;
  font-family: "Inter";
  transition: all 200ms ease;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 24px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
  border: none;
  box-shadow: none;
  background-color: var(--dapp-form-btn-bg);
}
.dapp-core-component__globals-module__button-send:hover {
  background-color: var(--dapp-form-btn-bg-hover);
}

.dapp-core-component__globals-module__button-text {
  font-size: 16px;
  font-weight: 500;
  margin-top: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 200ms ease;
  color: var(--dapp-form-btn-bg);
  background-color: transparent;
  border: none;
  padding: 0;
}
@media (min-width: 768px) {
  .dapp-core-component__globals-module__button-text {
    margin-top: 32px;
  }
}
.dapp-core-component__globals-module__button-text:hover {
  color: var(--dapp-form-btn-bg-hover);
}

.dapp-core-component__globals-module__btn {
  padding: 0.375rem 0.75rem;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: var(--dapp-form-input-border-radius);
  cursor: pointer;
  border: none;
  margin-bottom: 1rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.dapp-core-component__globals-module__btn.dapp-core-component__globals-module__btnPrimary {
  background-color: var(--primary);
  color: var(--white);
}
.dapp-core-component__globals-module__btn.dapp-core-component__globals-module__btnPrimary:hover {
  background-color: var(--btn-blue);
}
.dapp-core-component__globals-module__btn.dapp-core-component__globals-module__btnWarning {
  background-color: var(--warning);
  color: var(--brown);
}
.dapp-core-component__globals-module__btn.dapp-core-component__globals-module__btnLink {
  color: var(--primary-light);
  background: none;
  padding: 0;
}
.dapp-core-component__globals-module__btn.dapp-core-component__globals-module__btnLink:hover {
  text-decoration: underline;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xr));var G={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};l();l();var lo=m(n("react")),io=n("@terradharitri/sdk-dapp/constants/index");l();l();l();var po=m(n("axios"));l();l();l();var co=n("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");l();var fo=n("@terradharitri/sdk-dapp/constants/index");l();l();l();var we="0";l();l();l();var so=m(n("axios"));l();l();var uo=n("@terradharitri/sdk-dapp/apiCalls/endpoints"),mo=n("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),_o=m(n("axios")),bo=m(n("lodash/uniqBy"));l();var ho=n("@terradharitri/sdk-dapp/apiCalls/endpoints"),go=m(n("axios"));l();l();l();var be=n("@terradharitri/sdk-dapp/types/tokens.types");l();l();l();l();var vo=n("@terradharitri/sdk-dapp/apiCalls/endpoints"),yo=m(n("axios"));l();l();var wo=m(n("axios"));l();var Jr=m(n("react")),xo=(0,Jr.createContext)({});l();l();var Kr=m(n("react")),Eo=n("@terradharitri/sdk-dapp/constants/index"),ko=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),qo=m(n("bignumber.js")),Ao=n("formik");l();l();l();var To=n("bech32");l();l();l();l();l();l();var Co=n("@terradharitri/sdk-dapp/constants"),No=n("@terradharitri/sdk-dapp/utils/account/getAccount");l();l();var tr=n("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),Qr=({nft:d,skipDescription:c})=>{var i,s;let{name:u,metadata:_,media:h,isNsfw:a,scamInfo:k,verified:w}=d,A="Scam - ",{isSuspicious:E,message:q}=(0,tr.getScamFlag)({verified:w,message:u,isNsfw:a,scamInfo:k,messagePrefix:A});if(!(_!=null&&_.description)||c){let y=E?"placeholder":(i=h==null?void 0:h[0])==null?void 0:i.thumbnailUrl;return{isSuspicious:E,name:u||q,thumbnail:y,description:""}}let{message:T,isSuspicious:b}=(0,tr.getScamFlag)({message:_.description,messagePrefix:A,verified:w}),g=E||b,x=g?"placeholder":(s=h==null?void 0:h[0])==null?void 0:s.thumbnailUrl;return{isSuspicious:g,name:u||q,thumbnail:x,description:T||_.description}};l();var Lo=n("@terradharitri/sdk-dapp/utils/buildUrlParams");l();var De=m(n("anchorme")),Re=d=>d.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),et=(d,c)=>{if(c){let i=`[Message hidden due to suspicious content - ${c.info}]`;if(d.length>1e3)return{output:i,stringWithLinks:d,found:!0};let s=Re(d.normalize("NFKC")),u=De.default.list(s),_=[];if(u.length>0){let h=i;u.forEach((a,k)=>{let{string:w}=a,A="",E="",q=w;for(let T=0;T<h.length;T++){let b=h.slice(T),[g]=De.default.list(Re(b));g&&w===g.string&&(A=h.substring(0,T))}for(let T=i.length;T>0;T--){let b=h.slice(0,T),[g]=De.default.list(Re(b));g&&w===g.string&&(E=h.substring(T))}_.push(A),_.push(q),h=E,k===u.length-1&&_.push(E)})}else _.push(d);return{output:i,stringWithLinks:_.join(""),found:!0}}else return{output:d,stringWithLinks:"",found:!1}};l();l();var So=n("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),wr=n("@terradharitri/sdk-dapp/utils/operations/formatAmount"),rt=n("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),or=n("@terradharitri/sdk-dapp/utils/operations/parseAmount");l();l();var xr=m(n("react")),Io=n("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Uo=n("formik");l();l();var Bo=n("@terradharitri/sdk-dapp/constants/index"),Do=n("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ro=m(n("bignumber.js"));l();l();var Fe=n("@terradharitri/sdk-dapp/constants/index");function tt({feeLimit:d,rewaPriceInUsd:c}){let i=(0,wr.formatAmount)({input:d,decimals:Fe.DECIMALS,digits:Fe.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,rt.getUsdValue)({amount:i,usd:c,decimals:Fe.DIGITS})}`}l();var Fo=n("@terradharitri/sdk-dapp/constants/index");l();var Oo=n("@terradharitri/sdk-dapp/constants/index"),Po=m(n("bignumber.js"));l();var Mo=n("@terradharitri/sdk-dapp/constants/index");l();var jo=n("@terradharitri/sdk-dapp/constants/index");l();l();var zo=n("@terradharitri/sdk-core"),Vo=n("@terradharitri/sdk-dapp/constants/index"),Wo=m(n("bignumber.js"));l();l();var Go=n("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");l();var Zo=n("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");l();var $o=m(n("bignumber.js"));l();var Yo=n("@terradharitri/sdk-dapp/constants/index"),Ho=n("@terradharitri/sdk-dapp/utils/smartContracts"),Xo=n("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Jo=m(n("bignumber.js"));l();var Ko=m(n("bignumber.js"));l();var Oe=n("@terradharitri/sdk-dapp/constants/index"),ot=m(n("bignumber.js")),nr,ar,lr,nt=(0,wr.formatAmount)({input:String((nr=Oe.GAS_PRICE)!=null?nr:1e9),decimals:(ar=Oe.DECIMALS)!=null?ar:18,showLastNonZeroDecimal:!0,digits:(lr=Oe.DIGITS)!=null?lr:4}),Qo=new ot.default(nt).times(10).toString(10);l();var en=n("@terradharitri/sdk-dapp/constants/index"),rn=m(n("bignumber.js"));l();var tn=m(n("bignumber.js"));l();l();var on=n("yup");l();var ir=n("@terradharitri/sdk-dapp/constants/ledger.constants"),at=m(n("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Ze=n("yup"),lt=(0,Ze.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(d){let{ledger:c}=this.parent;return!(c&&d&&d.length&&!c.ledgerDataActive)}),it=(0,Ze.string)().test({name:"hashSign",test:function(d){let{ledger:c,isGuarded:i}=this.parent;if(c){let{ledgerWithHashSign:s,ledgerWithGuardians:u}=(0,at.default)(c.version);if(d&&d.length>300&&!s)return this.createError({message:`Data too long. You need at least DharitrI app version ${ir.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(i&&!u)return this.createError({message:`You need at least DharitrI app version ${ir.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),pt=[lt,it],nn=pt.reduce((d,c)=>d.concat(c),(0,Ze.string)());l();var an=n("@terradharitri/sdk-dapp/constants/index"),ln=n("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),pn=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),cn=n("yup");l();var dn=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),fn=m(n("bignumber.js")),sn=n("yup");l();var un=n("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),mn=m(n("bignumber.js")),_n=n("yup");l();var bn=n("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),hn=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),gn=m(n("bignumber.js")),vn=n("yup");l();var yn=m(n("bignumber.js")),wn=n("yup");l();var xn=n("@terradharitri/sdk-dapp/constants/index"),En=n("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),kn=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),qn=m(n("bignumber.js")),An=n("yup");l();var Tn=n("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Cn=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Nn=n("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ln=m(n("bignumber.js")),Sn=n("yup");l();var In=m(n("bignumber.js")),Un=n("yup");l();var Bn=n("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Dn=n("yup");l();var Rn=n("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Fn=n("yup");l();l();var ct=(0,xr.createContext)({});function dt(){return(0,xr.useContext)(ct)}l();l();var ft=m(n("react")),On=n("formik"),Pn=m(n("lodash/uniqBy"));l();l();var st=m(n("react")),Mn=(0,st.createContext)({});l();l();var jn=n("react"),zn=n("@terradharitri/sdk-dapp/constants/index"),Vn=n("@terradharitri/sdk-dapp/types/enums.types");l();var Wn=(0,ft.createContext)({});l();l();var Gn=n("@terradharitri/sdk-dapp/constants/index"),Zn=n("formik");l();l();var ut=m(n("react")),$n=n("@terradharitri/sdk-dapp/constants/index"),Yn=n("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Hn=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Xn=n("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Jn=m(n("bignumber.js")),Kn=n("formik");l();l();l();l();var Qn=m(n("bignumber.js"));l();var ea=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ra=m(n("bignumber.js"));l();l();var ta=n("react"),oa=n("@terradharitri/sdk-dapp/constants/index"),na=n("@terradharitri/sdk-dapp/utils/smartContracts"),aa=m(n("bignumber.js")),la=n("formik");l();var ia=n("react");l();l();var pa=n("@terradharitri/sdk-dapp/constants/index"),ca=m(n("bignumber.js")),da=(0,ut.createContext)({}),fa=(0,Kr.createContext)({});l();l();var mt=m(n("react")),sa=n("formik"),ua=(0,mt.createContext)({});l();l();var _t=m(n("react")),ma=n("formik");l();l();l();var _a=n("react"),ba=n("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),ha=m(n("lodash/uniqBy"));l();l();var ga=n("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),va=n("@terradharitri/sdk-dapp/utils");l();var ya=n("react");l();var wa=n("react"),xa=n("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ea=(0,_t.createContext)({});l();l();var bt=m(n("react")),ka=n("formik");l();l();l();l();l();var qa=n("react"),Aa=n("@terradharitri/sdk-dapp/utils");l();var Ta=n("react"),Ca=n("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");l();l();var Na=n("@terradharitri/sdk-dapp/utils/account/addressIsValid"),La=m(n("axios"));l();var Sa=m(n("axios")),Ia=(0,bt.createContext)({});l();var Er=m(n("react")),ht=(0,Er.createContext)({});function gt(){return(0,Er.useContext)(ht)}l();var vt=n("react");l();l();var H=m(n("react")),pr=n("@terradharitri/sdk-dapp/constants/index"),cr=n("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),yt=n("@terradharitri/sdk-dapp/UI/UsdValue/index");l();l();var Y=m(n("react")),wt=n("@fortawesome/free-solid-svg-icons"),xt=n("@fortawesome/react-fontawesome"),dr=m(n("classnames"));l();var Et=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Et));var J={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"},kt=(hr(),Ee(Ge)).default,kr=d=>{let{avatar:c,type:i}=d;return i==="NonFungibleDCDT"?Y.default.createElement("div",{className:(0,dr.default)(J.tokenAvatar,J.tokenAvatarNFT)},"NFT"):i==="SemiFungibleDCDT"?Y.default.createElement("div",{className:(0,dr.default)(J.tokenAvatar,J.tokenAvatarSFT)},"SFT"):i==="REWA"?Y.default.createElement("div",{className:J.tokenAvatar},d.RewaIcon?Y.default.createElement(d.RewaIcon,null):Y.default.createElement(kt,null)):c?Y.default.createElement("div",{className:J.tokenAvatar},Y.default.createElement("img",{src:c})):Y.default.createElement("div",{className:J.tokenAvatar},Y.default.createElement(xt.FontAwesomeIcon,{icon:wt.faDiamond}))};l();var qt=`:root {
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

.dapp-core-component__styles-module__amount {
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__token {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__token .dapp-core-component__styles-module__value {
  font-size: 14px;
  font-weight: 500;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__price {
  font-size: 12px;
  color: var(--dapp-form-placeholder-color);
  line-height: 1;
  margin-top: 8px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qt));var he={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},At=({label:d="Amount",amount:c,txType:i,tokenDecimals:s,tokenId:u,rewaLabel:_,rewaPriceInUsd:h,nft:a,tokenAvatar:k})=>{let w=(a==null?void 0:a.decimals)||0,A=i==="DCDT",E=i==="MetaDCDT",q=i==="NonFungibleDCDT",T=E?(0,or.parseAmount)(c,a==null?void 0:a.decimals):c,b=Boolean(a&&c),g=u.split("-")[0],x=A?s:pr.DECIMALS,y=b?H.default.createElement(cr.FormatAmount,{rewaLabel:_,value:T,decimals:w,digits:i==="MetaDCDT"?pr.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):H.default.createElement(cr.FormatAmount,{rewaLabel:_,value:(0,or.parseAmount)(c,x),showLabel:!1,decimals:x,showLastNonZeroDecimal:!0,token:A?g:_,"data-testid":"confirmAmount"});return q?null:H.default.createElement("div",{className:he.amount},H.default.createElement("span",{className:G.label},d),H.default.createElement("div",{className:he.token},H.default.createElement(kr,{type:i,avatar:k}),H.default.createElement("div",{className:he.value},y," ",g)),!A&&H.default.createElement(yt.UsdValue,{amount:c,usd:h,"data-testid":"confirmUsdValue",className:he.price}))};l();l();var U=m(n("react")),Tt=n("@terradharitri/sdk-dapp/utils/decoders/decodePart");l();var Ct=`:root {
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

.dapp-core-component__styles-module__data {
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__data .dapp-core-component__styles-module__value {
  min-height: 80px;
  font-size: 14px;
  padding: 12px;
  line-height: 1.25;
  border-radius: 6px;
  border: 1px solid var(--dapp-form-input-data-border);
  word-break: break-all;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ct));var ge={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"},Nt=(d,c)=>[...d.matchAll(new RegExp(c,"gi"))].map(i=>i.index),Lt=({label:d="Data",scCallLabel:c="SC Call",data:i,highlight:s,isScCall:u})=>{let _=U.default.createElement(U.default.Fragment,null,i),[h,...a]=s&&u?s.split("@"):[];if(i&&s&&Nt(i,s).length===1)switch(!0){case i.startsWith(s):{let[,k]=i.split(s);_=U.default.createElement(U.default.Fragment,null,s,U.default.createElement("span",null,k));break}case i.endsWith(s):{let[k]=i.split(s);_=U.default.createElement(U.default.Fragment,null,U.default.createElement("span",null,k),s);break}default:{let[k,w]=i.split(s);_=U.default.createElement(U.default.Fragment,null,U.default.createElement("span",null,k),s,U.default.createElement("span",null,w));break}}return U.default.createElement(U.default.Fragment,null,h&&U.default.createElement("div",{className:ge.data},U.default.createElement("span",{className:G.label},c),U.default.createElement("div",{"data-testid":"confirmScCall",className:ge.value},[(0,Tt.decodePart)(h),...a].join("@"))),U.default.createElement("div",{className:ge.data},U.default.createElement("span",{className:G.label},d),U.default.createElement("div",{"data-testid":"confirmData",className:ge.value},i?_:"N/A")))};l();l();var K=m(n("react")),St=n("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");l();var It=`:root {
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

.dapp-core-component__styles-module__fee {
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__token {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__token .dapp-core-component__styles-module__value {
  font-size: 14px;
  font-weight: 500;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__price {
  font-size: 12px;
  color: var(--dapp-form-placeholder-color);
  line-height: 1;
  margin-top: 8px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(It));var ve={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},Ut=({rewaPriceInUsd:d,label:c="Fee",feeLimit:i,rewaLabel:s})=>K.default.createElement("div",{className:ve.fee},K.default.createElement("span",{className:G.label},c),K.default.createElement("div",{className:ve.token},K.default.createElement(kr,{type:"REWA"}),K.default.createElement("div",{className:ve.value},K.default.createElement(St.FormatAmount,{rewaLabel:s,value:i,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),i!==we&&K.default.createElement("span",{className:ve.price},tt({feeLimit:i,rewaPriceInUsd:d})));l();l();var V=m(n("react")),Bt=n("@fortawesome/free-solid-svg-icons"),Dt=n("@fortawesome/react-fontawesome"),Rt=n("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ft=n("@terradharitri/sdk-dapp/UI/CopyButton"),Ot=n("@terradharitri/sdk-dapp/UI/ExplorerLink"),Pt=n("@terradharitri/sdk-dapp/UI/Trim"),Mt=m(n("classnames"));l();var{default:jt}=(Yr(),Ee(gr));l();var zt=`:root {
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

.dapp-core-component__styles-module__confirmReceiver {
  display: block;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__value {
  font-size: 14px;
  word-break: break-all;
  line-height: 1.5;
  display: block;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__value.dapp-core-component__styles-module__shrunk {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  margin-bottom: 8px;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue .dapp-core-component__styles-module__subValueTrim {
  line-height: 1;
  color: var(--dapp-form-placeholder-color);
  font-size: 12px;
  display: flex;
  align-items: flex-end;
  max-width: none;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue .dapp-core-component__styles-module__subValueTrim [class*=left] *,
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue .dapp-core-component__styles-module__subValueTrim [class*=right] * {
  color: var(--dapp-form-placeholder-color);
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue .dapp-core-component__styles-module__subValueCopy {
  font-size: 12px;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__explorer {
  margin-left: 0;
  font-size: 12px;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__explorer svg {
  color: var(--dapp-form-placeholder-color) !important;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__explorer:hover svg {
  color: var(--dapp-form-btn-bg) !important;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__icon {
  height: 16px;
  position: relative;
  width: auto;
  top: 1px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zt));var $={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"},Vt=({label:d="Receiver",receiver:c,scamReport:i,receiverUsername:s})=>{let u=Boolean(s),_=s!=null?s:c;return V.default.createElement("div",{className:$.confirmReceiver},V.default.createElement("span",{className:G.label},d),V.default.createElement("span",{className:(0,Mt.default)($.value,{[$.shrunk]:u}),"data-testid":"confirmReceiver"},u&&V.default.createElement(jt,{className:$.icon}),_,u&&V.default.createElement(Ot.ExplorerLink,{page:`/${Rt.ACCOUNTS_ENDPOINT}/${c}`,className:$.explorer})),u&&V.default.createElement("span",{className:$.subValue},V.default.createElement(Pt.Trim,{text:c,className:$.subValueTrim}),V.default.createElement(Ft.CopyButton,{text:c,className:$.subValueCopy})),i&&V.default.createElement("div",{className:$.scam},V.default.createElement("span",null,V.default.createElement(Dt.FontAwesomeIcon,{icon:Bt.faExclamationTriangle,className:$.icon}),V.default.createElement("small",{"data-testid":"confirmScamReport"},i))))};l();l();var Q=m(n("react"));l();l();var P=m(n("react")),Wt=n("@fortawesome/free-solid-svg-icons"),Gt=n("@fortawesome/react-fontawesome"),Zt=m(n("@terradharitri/sdk-dapp/constants/index")),$t=n("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Yt=m(n("classnames"));l();var Ht=`:root {
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

.dapp-core-component__styles-module__tokenElement {
  height: 100%;
  display: flex !important;
  align-items: center;
}
.dapp-core-component__styles-module__tokenElement .dapp-core-component__styles-module__tokenElementWrapper {
  display: flex;
}
.dapp-core-component__styles-module__tokenElement .dapp-core-component__styles-module__tokenElementWrapper .dapp-core-component__styles-module__tokenElementCircle {
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  background-color: var(--dapp-form-select-icon-bg);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}
.dapp-core-component__styles-module__tokenElement .dapp-core-component__styles-module__tokenElementIdentifier {
  line-height: 1.5;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ht));var re={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},Xt=(hr(),Ee(Ge)).default,fr=({RewaIcon:d,inDropdown:c=!1,isRewa:i,nftTokenDetails:s,nftType:u,token:_})=>{var h,a;let{name:k,identifier:w,balance:A,decimals:E}=_,q=((h=_.assets)==null?void 0:h.svgUrl)||((a=_.assets)==null?void 0:a.pngUrl)||"",T=q?28:20,[b,g]=(0,P.useState)(k);(0,P.useEffect)(()=>{var C;(C=s==null?void 0:s.uris)!=null&&C.some(B=>{let F=_r.Buffer.from(String(B),"base64").toString(),{found:D}=et(F,s==null?void 0:s.scamInfo);return D})||g(k)},[k]);let x=P.default.createElement(Gt.FontAwesomeIcon,{icon:Wt.faDiamond});u==be.NftEnumType.NonFungibleDCDT&&(x=P.default.createElement("div",{className:"nft-type","data-testid":`${w}-type-nft`},"NFT")),u===be.NftEnumType.SemiFungibleDCDT&&(x=P.default.createElement("div",{className:"nft-type","data-testid":`${w}-type-sft`},"SFT"));let y=!c&&u!==be.NftEnumType.NonFungibleDCDT,N=P.default.createElement("div",{className:re.tokenElementCircle},x);return q&&(N=P.default.createElement("img",{className:re.tokenElementCircle,src:q,alt:k,height:T})),i&&(N=P.default.createElement("div",{className:re.tokenElementCircle},d?P.default.createElement(d,{height:36}):P.default.createElement(Xt,{height:36}))),P.default.createElement("div",{className:(0,Yt.default)(G.value,re.tokenElement)},P.default.createElement("div",{className:re.tokenElementWrapper},N),P.default.createElement("div",{"data-testid":"tokenName"},P.default.createElement("span",{"data-testid":`${w}-element`},P.default.createElement("span",null,b)," ",P.default.createElement("span",{className:re.tokenElementIdentifier},w)),y&&P.default.createElement($t.FormatAmount,{rewaLabel:w,value:A||we,digits:u===be.NftEnumType.SemiFungibleDCDT?0:Zt.DIGITS,token:w,showLabel:!1,decimals:E,"data-testid":`${w}-balance`})))};l();var Jt=`:root {
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

.dapp-core-component__styles-module__token {
  line-height: 1.5;
}
.dapp-core-component__styles-module__token .dapp-core-component__styles-module__label {
  display: block;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jt));var Kt={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"},Qt=({RewaIcon:d,rewaLabel:c,isDcdtTransaction:i,nft:s,tokenAvatar:u,tokenId:_,tokenIdError:h})=>{var a;let k=(s==null?void 0:s.name)||"";return Q.default.createElement("div",{className:Kt.token},Q.default.createElement("span",{className:G.label},s?Q.default.createElement("span",null,s==null?void 0:s.name," "):"","Token"),Q.default.createElement("div",null,s?Q.default.createElement(fr,{inDropdown:!0,token:{name:s==null?void 0:s.name,identifier:s==null?void 0:s.identifier,decimals:0,balance:we,ticker:"",assets:{svgUrl:((a=s==null?void 0:s.assets)==null?void 0:a.svgUrl)||""}}}):Q.default.createElement(fr,{inDropdown:!0,token:{name:i?k:"DharitrI eGold",identifier:i?_:c,decimals:0,balance:we,ticker:"",assets:{svgUrl:u||""}},isRewa:_===c,RewaIcon:d})),h&&Q.default.createElement("div",{className:G.error},h))},oe=class extends vt.Component{render(){return null}};oe.Receiver=Vt,oe.Amount=At,oe.Fee=Ut,oe.Data=Lt,oe.Token=Qt;var Pe=oe;l();l();var X=m(n("react")),sr=m(n("classnames"));l();var eo=`.dapp-core-component__styles-module__preview {
  border-radius: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--dapp-form-nftsft-preview-bg);
}
.dapp-core-component__styles-module__preview.dapp-core-component__styles-module__clickable {
  cursor: pointer;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__image {
  min-width: 64px;
  min-height: 64px;
  max-width: 64px;
  max-height: 64px;
  height: auto;
  width: auto;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content {
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__left {
  gap: 8px;
  line-height: 1;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__left .dapp-core-component__styles-module__name {
  font-size: 12px;
  font-weight: 600;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__left .dapp-core-component__styles-module__identifier {
  color: var(--dapp-form-placeholder-color);
  font-size: 12px;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge {
  line-height: 1;
  font-weight: 500;
  font-size: 12px;
  padding: 4px 8px;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: var(--dapp-form-nftsft-preview-badge-bg);
  position: relative;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge:before {
  content: "";
  border-radius: 4px;
  position: absolute;
  inset: 0;
  padding: 1px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__nft {
  color: #fef08a;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__nft:before {
  background: linear-gradient(90deg, rgba(240, 152, 25, 0.4), rgba(237, 222, 93, 0.4));
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__sft {
  color: #fed7aa;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__sft:before {
  background: linear-gradient(90deg, rgba(240, 77, 25, 0.4), rgba(237, 136, 93, 0.4));
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(eo));var W={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"},ro=d=>{let c=d,{txType:i,onClick:s,identifier:u}=c,_=jr(c,["txType","onClick","identifier"]),{name:h,thumbnail:a}=Qr({nft:_}),k=["NonFungibleDCDT","SemiFungibleDCDT"].includes(i),w=i==="NonFungibleDCDT"?"NFT":"SFT",A=E=>{E.preventDefault(),s&&s(E,Object.assign(_,{identifier:u}))};return k?X.default.createElement("div",{onClick:A,"data-testid":"token-preview",className:(0,sr.default)(W.preview,{[W.clickable]:Boolean(s)})},X.default.createElement("img",{src:a,className:W.image}),X.default.createElement("div",{className:W.content},X.default.createElement("div",{className:W.left},X.default.createElement("div",{"data-testid":"token-preview-name",className:W.name},h),X.default.createElement("div",{"data-testid":"token-preview-identifier",className:W.identifier},u)),X.default.createElement("div",{className:W.right},X.default.createElement("div",{className:(0,sr.default)(W.badge,{[W.nft]:i==="NonFungibleDCDT",[W.sft]:i==="SemiFungibleDCDT"})},w)))):null};l();var to=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(to));var te={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};l();l();var Me=n("@terradharitri/sdk-dapp/types/enums.types"),oo=({providerType:d,hasGuardianScreen:c})=>c?"Confirm & Continue":d===Me.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":d===Me.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":d===Me.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";l();var no=({receiverAddress:d,knownAddresses:c,existingReceiverUsername:i})=>{if(i)return i;let s=c==null?void 0:c.find(u=>u.address===d);return s==null?void 0:s.username},ao=({isConfirmCloseBtnVisible:d=!0,providerType:c})=>{var i;let{setIsGuardianScreenVisible:s}=dt(),{receiverUsernameInfo:{receiverUsername:u},receiverInfo:{scamError:_,receiver:h,knownAddresses:a},formInfo:k,gasInfo:{gasCostError:w,feeLimit:A},accountInfo:{isGuarded:E},dataFieldInfo:{data:q},amountInfo:T,tokensInfo:b}=gt(),{tokenId:g,tokenDetails:x,nft:y,rewaPriceInUsd:N,rewaLabel:C}=b,{readonly:B,onCloseForm:F,onInvalidateForm:D,onPreviewClick:le,onSubmitForm:ke,txType:ee,hasGuardianScreen:ie}=k,qe=()=>{s(!0)},[Ae,Te]=(0,j.useState)(!1),pe=ee==="NonFungibleDCDT",ce=oo({providerType:c,hasGuardianScreen:ie}),Ce=Ie=>{Ie.preventDefault(),B?F():D()},Ne=()=>{if(E&&ie)return qe();Te(!0),ke()},Le=!["REWA","DCDT","MetaDCDT"].includes(ee),Se=no({knownAddresses:a,receiverAddress:h,existingReceiverUsername:u});return j.default.createElement("div",{className:te.summary},j.default.createElement("div",{className:te.fields},Le&&y&&j.default.createElement(ro,ze({onClick:le,txType:ee},y)),j.default.createElement(Hr.ConfirmReceiver,{amount:T.amount,scamReport:_!=null?_:null,receiver:h,receiverUsername:Se}),j.default.createElement("div",{className:te.columns},!pe&&j.default.createElement("div",{className:te.column},j.default.createElement(Pe.Amount,{txType:ee,tokenId:g,tokenDecimals:x.decimals,amount:String(T.amount),nft:y,rewaPriceInUsd:N,rewaLabel:C,tokenLabel:x.name,tokenAvatar:((i=x.assets)==null?void 0:i.svgUrl)||""})),j.default.createElement("div",{className:te.column},j.default.createElement(Pe.Fee,{rewaLabel:C,rewaPriceInUsd:N,feeLimit:A}))),j.default.createElement(Pe.Data,{data:q}),w&&j.default.createElement("p",{className:G.error},w)),j.default.createElement("div",{className:te.buttons},j.default.createElement("button",{className:G.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:Ae,onClick:Ne},ce),d&&j.default.createElement("button",{className:G.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:Ce},B?"Close":"Back")))};});var ae={};ue();se(ae,Ur(Ar()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
