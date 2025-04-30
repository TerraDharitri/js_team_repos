"use strict";import{a as q,b as be,d as z,e as ve,f as ee}from"../../../../../../../../__chunks__/chunk-RGFNPOTZ.js";var vt=be((Qp,bt)=>{"use strict";ee();var Xo=Object.create,Me=Object.defineProperty,Zo=Object.defineProperties,Wo=Object.getOwnPropertyDescriptor,$o=Object.getOwnPropertyDescriptors,Go=Object.getOwnPropertyNames,gt=Object.getOwnPropertySymbols,Ho=Object.getPrototypeOf,yt=Object.prototype.hasOwnProperty,Jo=Object.prototype.propertyIsEnumerable,kt=(_,i,l)=>i in _?Me(_,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):_[i]=l,Ko=(_,i)=>{for(var l in i||(i={}))yt.call(i,l)&&kt(_,l,i[l]);if(gt)for(var l of gt(i))Jo.call(i,l)&&kt(_,l,i[l]);return _},Qo=(_,i)=>Zo(_,$o(i)),en=(_,i)=>()=>(_&&(i=_(_=0)),i),We=(_,i)=>()=>(i||_((i={exports:{}}).exports,i),i.exports),tn=(_,i)=>{for(var l in i)Me(_,l,{get:i[l],enumerable:!0})},St=(_,i,l,g)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of Go(i))!yt.call(_,f)&&f!==l&&Me(_,f,{get:()=>i[f],enumerable:!(g=Wo(i,f))||g.enumerable});return _},_t=(_,i,l)=>(l=_!=null?Xo(Ho(_)):{},St(i||!_||!_.__esModule?Me(l,"default",{value:_,enumerable:!0}):l,_)),on=_=>St(Me({},"__esModule",{value:!0}),_),nn=We(_=>{"use strict";Be(),_.byteLength=T,_.toByteArray=B,_.fromByteArray=C;var i=[],l=[],g=typeof Uint8Array!="undefined"?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(S=0,h=f.length;S<h;++S)i[S]=f[S],l[f.charCodeAt(S)]=S;var S,h;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function r(u){var m=u.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var s=u.indexOf("=");s===-1&&(s=m);var d=s===m?0:4-s%4;return[s,d]}function T(u){var m=r(u),s=m[0],d=m[1];return(s+d)*3/4-d}function w(u,m,s){return(m+s)*3/4-s}function B(u){var m,s=r(u),d=s[0],v=s[1],y=new g(w(u,d,v)),j=0,P=v>0?d-4:d,L;for(L=0;L<P;L+=4)m=l[u.charCodeAt(L)]<<18|l[u.charCodeAt(L+1)]<<12|l[u.charCodeAt(L+2)]<<6|l[u.charCodeAt(L+3)],y[j++]=m>>16&255,y[j++]=m>>8&255,y[j++]=m&255;return v===2&&(m=l[u.charCodeAt(L)]<<2|l[u.charCodeAt(L+1)]>>4,y[j++]=m&255),v===1&&(m=l[u.charCodeAt(L)]<<10|l[u.charCodeAt(L+1)]<<4|l[u.charCodeAt(L+2)]>>2,y[j++]=m>>8&255,y[j++]=m&255),y}function k(u){return i[u>>18&63]+i[u>>12&63]+i[u>>6&63]+i[u&63]}function E(u,m,s){for(var d,v=[],y=m;y<s;y+=3)d=(u[y]<<16&16711680)+(u[y+1]<<8&65280)+(u[y+2]&255),v.push(k(d));return v.join("")}function C(u){for(var m,s=u.length,d=s%3,v=[],y=16383,j=0,P=s-d;j<P;j+=y)v.push(E(u,j,j+y>P?P:j+y));return d===1?(m=u[s-1],v.push(i[m>>2]+i[m<<4&63]+"==")):d===2&&(m=(u[s-2]<<8)+u[s-1],v.push(i[m>>10]+i[m>>4&63]+i[m<<2&63]+"=")),v.join("")}}),rn=We(_=>{Be(),_.read=function(i,l,g,f,S){var h,r,T=S*8-f-1,w=(1<<T)-1,B=w>>1,k=-7,E=g?S-1:0,C=g?-1:1,u=i[l+E];for(E+=C,h=u&(1<<-k)-1,u>>=-k,k+=T;k>0;h=h*256+i[l+E],E+=C,k-=8);for(r=h&(1<<-k)-1,h>>=-k,k+=f;k>0;r=r*256+i[l+E],E+=C,k-=8);if(h===0)h=1-B;else{if(h===w)return r?NaN:(u?-1:1)*(1/0);r=r+Math.pow(2,f),h=h-B}return(u?-1:1)*r*Math.pow(2,h-f)},_.write=function(i,l,g,f,S,h){var r,T,w,B=h*8-S-1,k=(1<<B)-1,E=k>>1,C=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=f?0:h-1,m=f?1:-1,s=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(T=isNaN(l)?1:0,r=k):(r=Math.floor(Math.log(l)/Math.LN2),l*(w=Math.pow(2,-r))<1&&(r--,w*=2),r+E>=1?l+=C/w:l+=C*Math.pow(2,1-E),l*w>=2&&(r++,w/=2),r+E>=k?(T=0,r=k):r+E>=1?(T=(l*w-1)*Math.pow(2,S),r=r+E):(T=l*Math.pow(2,E-1)*Math.pow(2,S),r=0));S>=8;i[g+u]=T&255,u+=m,T/=256,S-=8);for(r=r<<S|T,B+=S;B>0;i[g+u]=r&255,u+=m,r/=256,B-=8);i[g+u-m]|=s*128}}),cn=We(_=>{"use strict";Be();var i=nn(),l=rn(),g=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=v,_.INSPECT_MAX_BYTES=50;var f=2147483647;_.kMaxLength=f,r.TYPED_ARRAY_SUPPORT=S(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function S(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function h(e){if(e>f)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return T(e,t,o)}r.poolSize=8192;function T(e,t,o){if(typeof e=="string")return E(e,t);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return m(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var c=s(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return T(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function w(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return w(e),e<=0?h(e):t!==void 0?typeof o=="string"?h(e).fill(t,o):h(e).fill(t):h(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return w(e),h(e<0?0:d(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function E(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=y(e,t)|0,n=h(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function C(e){for(var t=e.length<0?0:d(e.length)|0,o=h(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function u(e){if(N(e,Uint8Array)){var t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return C(e)}function m(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function s(e){if(r.isBuffer(e)){var t=d(e.length)|0,o=h(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?h(0):C(e);if(e.type==="Buffer"&&Array.isArray(e.data))return C(e.data)}function d(e){if(e>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return e|0}function v(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),N(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,p=Math.min(o,n);c<p;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var p=e[o];if(N(p,Uint8Array))c+p.length>n.length?r.from(p).copy(n,c):Uint8Array.prototype.set.call(n,p,c);else if(r.isBuffer(p))p.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return n};function y(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return J(e).length;default:if(c)return n?-1:Y(e).length;t=(""+t).toLowerCase(),c=!0}}r.byteLength=y;function j(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return ue(this,t,o);case"utf8":case"utf-8":return Z(this,t,o);case"ascii":return _e(this,t,o);case"latin1":case"binary":return ae(this,t,o);case"base64":return le(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return de(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function P(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)P(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Z(this,0,e):j.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},g&&(r.prototype[g]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,c){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var p=c-n,a=o-t,b=Math.min(p,a),O=this.slice(n,c),x=e.slice(t,o),A=0;A<b;++A)if(O[A]!==x[A]){p=O[A],a=x[A];break}return p<a?-1:a<p?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:X(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):X(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function X(e,t,o,n,c){var p=1,a=e.length,b=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;p=2,a/=2,b/=2,o/=2}function O(K,Q){return p===1?K[Q]:K.readUInt16BE(Q*p)}var x;if(c){var A=-1;for(x=o;x<a;x++)if(O(e,x)===O(t,A===-1?0:x-A)){if(A===-1&&(A=x),x-A+1===b)return A*p}else A!==-1&&(x-=x-A),A=-1}else for(o+b>a&&(o=a-b),x=o;x>=0;x--){for(var I=!0,F=0;F<b;F++)if(O(e,x+F)!==O(t,F)){I=!1;break}if(I)return x}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function oe(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var p=t.length;n>p/2&&(n=p/2);for(var a=0;a<n;++a){var b=parseInt(t.substr(a*2,2),16);if(V(b))return a;e[o+a]=b}return a}function ne(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function re(e,t,o,n){return D(fe(t),e,o,n)}function ce(e,t,o,n){return D(J(t),e,o,n)}function pe(e,t,o,n){return D(he(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return oe(this,e,t,o);case"utf8":case"utf-8":return ne(this,e,t,o);case"ascii":case"latin1":case"binary":return re(this,e,t,o);case"base64":return ce(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,e,t,o);default:if(p)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function le(e,t,o){return t===0&&o===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,o))}function Z(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var p=e[c],a=null,b=p>239?4:p>223?3:p>191?2:1;if(c+b<=o){var O,x,A,I;switch(b){case 1:p<128&&(a=p);break;case 2:O=e[c+1],(O&192)===128&&(I=(p&31)<<6|O&63,I>127&&(a=I));break;case 3:O=e[c+1],x=e[c+2],(O&192)===128&&(x&192)===128&&(I=(p&15)<<12|(O&63)<<6|x&63,I>2047&&(I<55296||I>57343)&&(a=I));break;case 4:O=e[c+1],x=e[c+2],A=e[c+3],(O&192)===128&&(x&192)===128&&(A&192)===128&&(I=(p&15)<<18|(O&63)<<12|(x&63)<<6|A&63,I>65535&&I<1114112&&(a=I))}}a===null?(a=65533,b=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),c+=b}return ie(n)}var W=4096;function ie(e){var t=e.length;if(t<=W)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=W));return o}function _e(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function ae(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function ue(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",p=t;p<o;++p)c+=ge[e[p]];return c}function de(e,t,o){for(var n=e.slice(t,o),c="",p=0;p<n.length-1;p+=2)c+=String.fromCharCode(n[p]+n[p+1]*256);return c}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function U(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=t,c=1,p=this[e+--n];n>0&&(c*=256);)p+=this[e+--n]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*t)),p},r.prototype.readInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!1,52,8)};function R(e,t,o,n,c,p){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<p)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=1,a=0;for(this[t]=e&255;++a<o&&(p*=256);)this[t+a]=e/p&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=o-1,a=1;for(this[t+p]=e&255;--p>=0&&(a*=256);)this[t+p]=e/a&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=0,a=1,b=0;for(this[t]=e&255;++p<o&&(a*=256);)e<0&&b===0&&this[t+p-1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=o-1,a=1,b=0;for(this[t+p]=e&255;--p>=0&&(a*=256);)e<0&&b===0&&this[t+p+1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,c,p){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function G(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),l.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return G(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return G(this,e,t,!1,o)};function H(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),l.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return H(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var p;if(typeof e=="number")for(p=t;p<o;++p)this[p]=e;else{var a=r.isBuffer(e)?e:r.from(e,n),b=a.length;if(b===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<o-t;++p)this[p+t]=a[p%b]}return this};var me=/[^+/0-9A-Za-z-_]/g;function se(e){if(e=e.split("=")[0],e=e.trim().replace(me,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,c=null,p=[],a=0;a<n;++a){if(o=e.charCodeAt(a),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&p.push(239,191,189);continue}else if(a+1===n){(t-=3)>-1&&p.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&p.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&p.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;p.push(o)}else if(o<2048){if((t-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function fe(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function he(e,t){for(var o,n,c,p=[],a=0;a<e.length&&!((t-=2)<0);++a)o=e.charCodeAt(a),n=o>>8,c=o%256,p.push(c),p.push(n);return p}function J(e){return i.toByteArray(se(e))}function D(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function N(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ge=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),pn=We((_,i)=>{Be();var l=i.exports={},g,f;function S(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=S}catch(d){g=S}try{typeof clearTimeout=="function"?f=clearTimeout:f=h}catch(d){f=h}})();function r(d){if(g===setTimeout)return setTimeout(d,0);if((g===S||!g)&&setTimeout)return g=setTimeout,setTimeout(d,0);try{return g(d,0)}catch(v){try{return g.call(null,d,0)}catch(y){return g.call(this,d,0)}}}function T(d){if(f===clearTimeout)return clearTimeout(d);if((f===h||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(d);try{return f(d)}catch(v){try{return f.call(null,d)}catch(y){return f.call(this,d)}}}var w=[],B=!1,k,E=-1;function C(){!B||!k||(B=!1,k.length?w=k.concat(w):E=-1,w.length&&u())}function u(){if(!B){var d=r(C);B=!0;for(var v=w.length;v;){for(k=w,w=[];++E<v;)k&&k[E].run();E=-1,v=w.length}k=null,B=!1,T(d)}}l.nextTick=function(d){var v=new Array(arguments.length-1);if(arguments.length>1)for(var y=1;y<arguments.length;y++)v[y-1]=arguments[y];w.push(new m(d,v)),w.length===1&&!B&&r(u)};function m(d,v){this.fun=d,this.array=v}m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function s(){}l.on=s,l.addListener=s,l.once=s,l.off=s,l.removeListener=s,l.removeAllListeners=s,l.emit=s,l.prependListener=s,l.prependOnceListener=s,l.listeners=function(d){return[]},l.binding=function(d){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(d){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),ln,_n,an,Be=en(()=>{ln=_t(cn()),_n=_t(pn()),an=function(_){function i(){var g=this||self;return delete _.prototype.__magic__,g}if(typeof globalThis=="object")return globalThis;if(this)return i();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),wt={};tn(wt,{Input:()=>fn});bt.exports=on(wt);Be();var un=_t(q("react")),dn=q("react-select");Be();Be();var mn=`.dapp-core-component__tokenSelect-module__label {
  display: none;
}

.dapp-core-component__tokenSelect-module__select {
  width: auto;
  margin-left: auto;
  position: relative;
}
.dapp-core-component__tokenSelect-module__select.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
  background-color: var(--dapp-form-bg);
  border: transparent;
  border-radius: var(--dapp-form-input-border-radius);
  width: 8rem;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
    margin-left: 0.2rem;
    width: 11rem;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__indicator svg {
  fill: var(--dapp-form-select-indicator-fill-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
  line-height: 1.5;
  font-size: 1rem;
  height: 3.625rem;
  padding: 4px 0 4px 10px;
  flex: 1;
  cursor: pointer;
  display: flex;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
    padding-left: 4px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
  width: 40px;
  height: 40px;
  max-width: 40px;
  min-width: 40px;
  margin-right: 8px;
  flex: 1;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  justify-content: center;
  overflow: hidden;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon img {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__asset .dapp-core-component__tokenSelect-module__diamond {
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
    display: none;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload {
  min-width: 0;
  flex: 1;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper > [class*=css] {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color);
  font-size: 16px;
  margin: 0;
  transition: all 200ms ease;
  font-weight: 300;
  white-space: normal;
  left: 0;
  right: 0;
  line-height: 1.25;
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  top: auto;
  transform: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single + div {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single.dapp-core-component__tokenSelect-module__focused {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown {
  padding: 0;
  margin: 0;
  display: flex;
  line-height: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input {
  margin: 0 !important;
  min-height: 20px !important;
  background-color: transparent !important;
  font-size: 16px !important;
  border: none !important;
  color: var(--dapp-form-select-input-color) !important;
  line-height: 1.25 !important;
  border-radius: 0 !important;
  min-width: 100% !important;
  font-weight: 300 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:after {
  content: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:focus, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:hover {
  opacity: 1 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  color: var(--dapp-form-label-color);
  font-size: 12px;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: block;
  white-space: nowrap;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator {
  cursor: pointer;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator svg {
  transition: all 200ms ease;
  fill: var(--dapp-form-select-indicator-fill);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator.dapp-core-component__tokenSelect-module__expanded svg {
  transform: rotateZ(180deg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator:hover svg {
  fill: var(--dapp-form-select-indicator-fill-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__loading {
  height: 150px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu {
  border: 1px solid var(--dapp-form-select-menu-border);
  border-radius: 6px;
  width: auto;
  right: -1px;
  overflow: hidden;
  background-color: var(--dapp-form-select-option-bg);
  z-index: 99999;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list {
  background-color: var(--dapp-form-select-menu-bg);
  max-height: 260px;
  padding: 0;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track:hover, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-corner {
  background-color: var(--dapp-form-select-menu-scroll-track);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar:horizontal {
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:horizontal {
  border-radius: var(--dapp-form-input-border-radius);
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2.5px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:hover {
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-resizer {
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0;
  background-color: var(--dapp-form-select-option-bg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected {
  background-color: var(--dapp-form-select-option-bg-selected);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  margin-right: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond {
  font-size: 24px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond path {
  fill: #fff;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
  text-align: left;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value {
  color: var(--dapp-form-select-option-color);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value strong,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value strong {
  font-weight: 900;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__price,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  margin-top: 4px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  text-align: right;
  margin-left: 16px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__children {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__ticker {
  display: flex;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(mn));var sn={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},fn=_=>un.default.createElement(dn.components.Input,Qo(Ko({},_),{className:sn.dropdown,"data-testid":"tokenSelectInput"}));});var Tt=be((el,Ut)=>{"use strict";ee();var hn=Object.create,ze=Object.defineProperty,gn=Object.defineProperties,kn=Object.getOwnPropertyDescriptor,yn=Object.getOwnPropertyDescriptors,Sn=Object.getOwnPropertyNames,$e=Object.getOwnPropertySymbols,wn=Object.getPrototypeOf,ut=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable,xt=(_,i,l)=>i in _?ze(_,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):_[i]=l,bn=(_,i)=>{for(var l in i||(i={}))ut.call(i,l)&&xt(_,l,i[l]);if($e)for(var l of $e(i))Et.call(i,l)&&xt(_,l,i[l]);return _},vn=(_,i)=>gn(_,yn(i)),xn=(_,i)=>{var l={};for(var g in _)ut.call(_,g)&&i.indexOf(g)<0&&(l[g]=_[g]);if(_!=null&&$e)for(var g of $e(_))i.indexOf(g)<0&&Et.call(_,g)&&(l[g]=_[g]);return l},En=(_,i)=>()=>(_&&(i=_(_=0)),i),Ge=(_,i)=>()=>(i||_((i={exports:{}}).exports,i),i.exports),An=(_,i)=>{for(var l in i)ze(_,l,{get:i[l],enumerable:!0})},At=(_,i,l,g)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of Sn(i))!ut.call(_,f)&&f!==l&&ze(_,f,{get:()=>i[f],enumerable:!(g=kn(i,f))||g.enumerable});return _},at=(_,i,l)=>(l=_!=null?hn(wn(_)):{},At(i||!_||!_.__esModule?ze(l,"default",{value:_,enumerable:!0}):l,_)),Bn=_=>At(ze({},"__esModule",{value:!0}),_),Un=Ge(_=>{"use strict";Oe(),_.byteLength=T,_.toByteArray=B,_.fromByteArray=C;var i=[],l=[],g=typeof Uint8Array!="undefined"?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(S=0,h=f.length;S<h;++S)i[S]=f[S],l[f.charCodeAt(S)]=S;var S,h;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function r(u){var m=u.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var s=u.indexOf("=");s===-1&&(s=m);var d=s===m?0:4-s%4;return[s,d]}function T(u){var m=r(u),s=m[0],d=m[1];return(s+d)*3/4-d}function w(u,m,s){return(m+s)*3/4-s}function B(u){var m,s=r(u),d=s[0],v=s[1],y=new g(w(u,d,v)),j=0,P=v>0?d-4:d,L;for(L=0;L<P;L+=4)m=l[u.charCodeAt(L)]<<18|l[u.charCodeAt(L+1)]<<12|l[u.charCodeAt(L+2)]<<6|l[u.charCodeAt(L+3)],y[j++]=m>>16&255,y[j++]=m>>8&255,y[j++]=m&255;return v===2&&(m=l[u.charCodeAt(L)]<<2|l[u.charCodeAt(L+1)]>>4,y[j++]=m&255),v===1&&(m=l[u.charCodeAt(L)]<<10|l[u.charCodeAt(L+1)]<<4|l[u.charCodeAt(L+2)]>>2,y[j++]=m>>8&255,y[j++]=m&255),y}function k(u){return i[u>>18&63]+i[u>>12&63]+i[u>>6&63]+i[u&63]}function E(u,m,s){for(var d,v=[],y=m;y<s;y+=3)d=(u[y]<<16&16711680)+(u[y+1]<<8&65280)+(u[y+2]&255),v.push(k(d));return v.join("")}function C(u){for(var m,s=u.length,d=s%3,v=[],y=16383,j=0,P=s-d;j<P;j+=y)v.push(E(u,j,j+y>P?P:j+y));return d===1?(m=u[s-1],v.push(i[m>>2]+i[m<<4&63]+"==")):d===2&&(m=(u[s-2]<<8)+u[s-1],v.push(i[m>>10]+i[m>>4&63]+i[m<<2&63]+"=")),v.join("")}}),Tn=Ge(_=>{Oe(),_.read=function(i,l,g,f,S){var h,r,T=S*8-f-1,w=(1<<T)-1,B=w>>1,k=-7,E=g?S-1:0,C=g?-1:1,u=i[l+E];for(E+=C,h=u&(1<<-k)-1,u>>=-k,k+=T;k>0;h=h*256+i[l+E],E+=C,k-=8);for(r=h&(1<<-k)-1,h>>=-k,k+=f;k>0;r=r*256+i[l+E],E+=C,k-=8);if(h===0)h=1-B;else{if(h===w)return r?NaN:(u?-1:1)*(1/0);r=r+Math.pow(2,f),h=h-B}return(u?-1:1)*r*Math.pow(2,h-f)},_.write=function(i,l,g,f,S,h){var r,T,w,B=h*8-S-1,k=(1<<B)-1,E=k>>1,C=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=f?0:h-1,m=f?1:-1,s=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(T=isNaN(l)?1:0,r=k):(r=Math.floor(Math.log(l)/Math.LN2),l*(w=Math.pow(2,-r))<1&&(r--,w*=2),r+E>=1?l+=C/w:l+=C*Math.pow(2,1-E),l*w>=2&&(r++,w/=2),r+E>=k?(T=0,r=k):r+E>=1?(T=(l*w-1)*Math.pow(2,S),r=r+E):(T=l*Math.pow(2,E-1)*Math.pow(2,S),r=0));S>=8;i[g+u]=T&255,u+=m,T/=256,S-=8);for(r=r<<S|T,B+=S;B>0;i[g+u]=r&255,u+=m,r/=256,B-=8);i[g+u-m]|=s*128}}),On=Ge(_=>{"use strict";Oe();var i=Un(),l=Tn(),g=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=v,_.INSPECT_MAX_BYTES=50;var f=2147483647;_.kMaxLength=f,r.TYPED_ARRAY_SUPPORT=S(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function S(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function h(e){if(e>f)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return T(e,t,o)}r.poolSize=8192;function T(e,t,o){if(typeof e=="string")return E(e,t);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return m(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var c=s(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return T(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function w(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return w(e),e<=0?h(e):t!==void 0?typeof o=="string"?h(e).fill(t,o):h(e).fill(t):h(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return w(e),h(e<0?0:d(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function E(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=y(e,t)|0,n=h(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function C(e){for(var t=e.length<0?0:d(e.length)|0,o=h(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function u(e){if(N(e,Uint8Array)){var t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return C(e)}function m(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function s(e){if(r.isBuffer(e)){var t=d(e.length)|0,o=h(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?h(0):C(e);if(e.type==="Buffer"&&Array.isArray(e.data))return C(e.data)}function d(e){if(e>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return e|0}function v(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),N(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,p=Math.min(o,n);c<p;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var p=e[o];if(N(p,Uint8Array))c+p.length>n.length?r.from(p).copy(n,c):Uint8Array.prototype.set.call(n,p,c);else if(r.isBuffer(p))p.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return n};function y(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return J(e).length;default:if(c)return n?-1:Y(e).length;t=(""+t).toLowerCase(),c=!0}}r.byteLength=y;function j(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return ue(this,t,o);case"utf8":case"utf-8":return Z(this,t,o);case"ascii":return _e(this,t,o);case"latin1":case"binary":return ae(this,t,o);case"base64":return le(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return de(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function P(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)P(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Z(this,0,e):j.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},g&&(r.prototype[g]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,c){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var p=c-n,a=o-t,b=Math.min(p,a),O=this.slice(n,c),x=e.slice(t,o),A=0;A<b;++A)if(O[A]!==x[A]){p=O[A],a=x[A];break}return p<a?-1:a<p?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:X(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):X(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function X(e,t,o,n,c){var p=1,a=e.length,b=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;p=2,a/=2,b/=2,o/=2}function O(K,Q){return p===1?K[Q]:K.readUInt16BE(Q*p)}var x;if(c){var A=-1;for(x=o;x<a;x++)if(O(e,x)===O(t,A===-1?0:x-A)){if(A===-1&&(A=x),x-A+1===b)return A*p}else A!==-1&&(x-=x-A),A=-1}else for(o+b>a&&(o=a-b),x=o;x>=0;x--){for(var I=!0,F=0;F<b;F++)if(O(e,x+F)!==O(t,F)){I=!1;break}if(I)return x}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function oe(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var p=t.length;n>p/2&&(n=p/2);for(var a=0;a<n;++a){var b=parseInt(t.substr(a*2,2),16);if(V(b))return a;e[o+a]=b}return a}function ne(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function re(e,t,o,n){return D(fe(t),e,o,n)}function ce(e,t,o,n){return D(J(t),e,o,n)}function pe(e,t,o,n){return D(he(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return oe(this,e,t,o);case"utf8":case"utf-8":return ne(this,e,t,o);case"ascii":case"latin1":case"binary":return re(this,e,t,o);case"base64":return ce(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,e,t,o);default:if(p)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function le(e,t,o){return t===0&&o===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,o))}function Z(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var p=e[c],a=null,b=p>239?4:p>223?3:p>191?2:1;if(c+b<=o){var O,x,A,I;switch(b){case 1:p<128&&(a=p);break;case 2:O=e[c+1],(O&192)===128&&(I=(p&31)<<6|O&63,I>127&&(a=I));break;case 3:O=e[c+1],x=e[c+2],(O&192)===128&&(x&192)===128&&(I=(p&15)<<12|(O&63)<<6|x&63,I>2047&&(I<55296||I>57343)&&(a=I));break;case 4:O=e[c+1],x=e[c+2],A=e[c+3],(O&192)===128&&(x&192)===128&&(A&192)===128&&(I=(p&15)<<18|(O&63)<<12|(x&63)<<6|A&63,I>65535&&I<1114112&&(a=I))}}a===null?(a=65533,b=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),c+=b}return ie(n)}var W=4096;function ie(e){var t=e.length;if(t<=W)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=W));return o}function _e(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function ae(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function ue(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",p=t;p<o;++p)c+=ge[e[p]];return c}function de(e,t,o){for(var n=e.slice(t,o),c="",p=0;p<n.length-1;p+=2)c+=String.fromCharCode(n[p]+n[p+1]*256);return c}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function U(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=t,c=1,p=this[e+--n];n>0&&(c*=256);)p+=this[e+--n]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*t)),p},r.prototype.readInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!1,52,8)};function R(e,t,o,n,c,p){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<p)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=1,a=0;for(this[t]=e&255;++a<o&&(p*=256);)this[t+a]=e/p&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=o-1,a=1;for(this[t+p]=e&255;--p>=0&&(a*=256);)this[t+p]=e/a&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=0,a=1,b=0;for(this[t]=e&255;++p<o&&(a*=256);)e<0&&b===0&&this[t+p-1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=o-1,a=1,b=0;for(this[t+p]=e&255;--p>=0&&(a*=256);)e<0&&b===0&&this[t+p+1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,c,p){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function G(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),l.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return G(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return G(this,e,t,!1,o)};function H(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),l.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return H(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var p;if(typeof e=="number")for(p=t;p<o;++p)this[p]=e;else{var a=r.isBuffer(e)?e:r.from(e,n),b=a.length;if(b===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<o-t;++p)this[p+t]=a[p%b]}return this};var me=/[^+/0-9A-Za-z-_]/g;function se(e){if(e=e.split("=")[0],e=e.trim().replace(me,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,c=null,p=[],a=0;a<n;++a){if(o=e.charCodeAt(a),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&p.push(239,191,189);continue}else if(a+1===n){(t-=3)>-1&&p.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&p.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&p.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;p.push(o)}else if(o<2048){if((t-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function fe(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function he(e,t){for(var o,n,c,p=[],a=0;a<e.length&&!((t-=2)<0);++a)o=e.charCodeAt(a),n=o>>8,c=o%256,p.push(c),p.push(n);return p}function J(e){return i.toByteArray(se(e))}function D(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function N(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ge=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),Ln=Ge((_,i)=>{Oe();var l=i.exports={},g,f;function S(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=S}catch(d){g=S}try{typeof clearTimeout=="function"?f=clearTimeout:f=h}catch(d){f=h}})();function r(d){if(g===setTimeout)return setTimeout(d,0);if((g===S||!g)&&setTimeout)return g=setTimeout,setTimeout(d,0);try{return g(d,0)}catch(v){try{return g.call(null,d,0)}catch(y){return g.call(this,d,0)}}}function T(d){if(f===clearTimeout)return clearTimeout(d);if((f===h||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(d);try{return f(d)}catch(v){try{return f.call(null,d)}catch(y){return f.call(this,d)}}}var w=[],B=!1,k,E=-1;function C(){!B||!k||(B=!1,k.length?w=k.concat(w):E=-1,w.length&&u())}function u(){if(!B){var d=r(C);B=!0;for(var v=w.length;v;){for(k=w,w=[];++E<v;)k&&k[E].run();E=-1,v=w.length}k=null,B=!1,T(d)}}l.nextTick=function(d){var v=new Array(arguments.length-1);if(arguments.length>1)for(var y=1;y<arguments.length;y++)v[y-1]=arguments[y];w.push(new m(d,v)),w.length===1&&!B&&r(u)};function m(d,v){this.fun=d,this.array=v}m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function s(){}l.on=s,l.addListener=s,l.once=s,l.off=s,l.removeListener=s,l.removeAllListeners=s,l.emit=s,l.prependListener=s,l.prependOnceListener=s,l.listeners=function(d){return[]},l.binding=function(d){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(d){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),In,Cn,jn,Oe=En(()=>{In=at(On()),Cn=at(Ln()),jn=function(_){function i(){var g=this||self;return delete _.prototype.__magic__,g}if(typeof globalThis=="object")return globalThis;if(this)return i();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),Bt={};An(Bt,{MenuList:()=>Nn});Ut.exports=Bn(Bt);Oe();var Rn=at(q("react")),Pn=q("react-select");Oe();var Mn=`.dapp-core-component__tokenSelect-module__label {
  display: none;
}

.dapp-core-component__tokenSelect-module__select {
  width: auto;
  margin-left: auto;
  position: relative;
}
.dapp-core-component__tokenSelect-module__select.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
  background-color: var(--dapp-form-bg);
  border: transparent;
  border-radius: var(--dapp-form-input-border-radius);
  width: 8rem;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
    margin-left: 0.2rem;
    width: 11rem;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__indicator svg {
  fill: var(--dapp-form-select-indicator-fill-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
  line-height: 1.5;
  font-size: 1rem;
  height: 3.625rem;
  padding: 4px 0 4px 10px;
  flex: 1;
  cursor: pointer;
  display: flex;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
    padding-left: 4px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
  width: 40px;
  height: 40px;
  max-width: 40px;
  min-width: 40px;
  margin-right: 8px;
  flex: 1;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  justify-content: center;
  overflow: hidden;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon img {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__asset .dapp-core-component__tokenSelect-module__diamond {
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
    display: none;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload {
  min-width: 0;
  flex: 1;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper > [class*=css] {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color);
  font-size: 16px;
  margin: 0;
  transition: all 200ms ease;
  font-weight: 300;
  white-space: normal;
  left: 0;
  right: 0;
  line-height: 1.25;
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  top: auto;
  transform: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single + div {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single.dapp-core-component__tokenSelect-module__focused {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown {
  padding: 0;
  margin: 0;
  display: flex;
  line-height: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input {
  margin: 0 !important;
  min-height: 20px !important;
  background-color: transparent !important;
  font-size: 16px !important;
  border: none !important;
  color: var(--dapp-form-select-input-color) !important;
  line-height: 1.25 !important;
  border-radius: 0 !important;
  min-width: 100% !important;
  font-weight: 300 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:after {
  content: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:focus, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:hover {
  opacity: 1 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  color: var(--dapp-form-label-color);
  font-size: 12px;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: block;
  white-space: nowrap;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator {
  cursor: pointer;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator svg {
  transition: all 200ms ease;
  fill: var(--dapp-form-select-indicator-fill);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator.dapp-core-component__tokenSelect-module__expanded svg {
  transform: rotateZ(180deg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator:hover svg {
  fill: var(--dapp-form-select-indicator-fill-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__loading {
  height: 150px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu {
  border: 1px solid var(--dapp-form-select-menu-border);
  border-radius: 6px;
  width: auto;
  right: -1px;
  overflow: hidden;
  background-color: var(--dapp-form-select-option-bg);
  z-index: 99999;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list {
  background-color: var(--dapp-form-select-menu-bg);
  max-height: 260px;
  padding: 0;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track:hover, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-corner {
  background-color: var(--dapp-form-select-menu-scroll-track);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar:horizontal {
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:horizontal {
  border-radius: var(--dapp-form-input-border-radius);
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2.5px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:hover {
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-resizer {
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0;
  background-color: var(--dapp-form-select-option-bg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected {
  background-color: var(--dapp-form-select-option-bg-selected);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  margin-right: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond {
  font-size: 24px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond path {
  fill: #fff;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
  text-align: left;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value {
  color: var(--dapp-form-select-option-color);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value strong,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value strong {
  font-weight: 900;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__price,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  margin-top: 4px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  text-align: right;
  margin-left: 16px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__children {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__ticker {
  display: flex;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Mn));var zn={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Nn=_=>{let i=_,{rx:l}=i,g=xn(i,["rx"]);return Rn.default.createElement(Pn.components.MenuList,vn(bn({},g),{className:zn.list}))};});var Mt=be((tl,Pt)=>{"use strict";ee();var Dn=Object.create,Ne=Object.defineProperty,Fn=Object.defineProperties,qn=Object.getOwnPropertyDescriptor,Yn=Object.getOwnPropertyDescriptors,Vn=Object.getOwnPropertyNames,Ot=Object.getOwnPropertySymbols,Xn=Object.getPrototypeOf,Ct=Object.prototype.hasOwnProperty,Zn=Object.prototype.propertyIsEnumerable,Lt=(_,i,l)=>i in _?Ne(_,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):_[i]=l,Wn=(_,i)=>{for(var l in i||(i={}))Ct.call(i,l)&&Lt(_,l,i[l]);if(Ot)for(var l of Ot(i))Zn.call(i,l)&&Lt(_,l,i[l]);return _},$n=(_,i)=>Fn(_,Yn(i)),Gn=(_,i)=>()=>(_&&(i=_(_=0)),i),He=(_,i)=>()=>(i||_((i={exports:{}}).exports,i),i.exports),Hn=(_,i)=>{for(var l in i)Ne(_,l,{get:i[l],enumerable:!0})},jt=(_,i,l,g)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of Vn(i))!Ct.call(_,f)&&f!==l&&Ne(_,f,{get:()=>i[f],enumerable:!(g=qn(i,f))||g.enumerable});return _},mt=(_,i,l)=>(l=_!=null?Dn(Xn(_)):{},jt(i||!_||!_.__esModule?Ne(l,"default",{value:_,enumerable:!0}):l,_)),Jn=_=>jt(Ne({},"__esModule",{value:!0}),_),Kn=He(_=>{"use strict";Le(),_.byteLength=T,_.toByteArray=B,_.fromByteArray=C;var i=[],l=[],g=typeof Uint8Array!="undefined"?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(S=0,h=f.length;S<h;++S)i[S]=f[S],l[f.charCodeAt(S)]=S;var S,h;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function r(u){var m=u.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var s=u.indexOf("=");s===-1&&(s=m);var d=s===m?0:4-s%4;return[s,d]}function T(u){var m=r(u),s=m[0],d=m[1];return(s+d)*3/4-d}function w(u,m,s){return(m+s)*3/4-s}function B(u){var m,s=r(u),d=s[0],v=s[1],y=new g(w(u,d,v)),j=0,P=v>0?d-4:d,L;for(L=0;L<P;L+=4)m=l[u.charCodeAt(L)]<<18|l[u.charCodeAt(L+1)]<<12|l[u.charCodeAt(L+2)]<<6|l[u.charCodeAt(L+3)],y[j++]=m>>16&255,y[j++]=m>>8&255,y[j++]=m&255;return v===2&&(m=l[u.charCodeAt(L)]<<2|l[u.charCodeAt(L+1)]>>4,y[j++]=m&255),v===1&&(m=l[u.charCodeAt(L)]<<10|l[u.charCodeAt(L+1)]<<4|l[u.charCodeAt(L+2)]>>2,y[j++]=m>>8&255,y[j++]=m&255),y}function k(u){return i[u>>18&63]+i[u>>12&63]+i[u>>6&63]+i[u&63]}function E(u,m,s){for(var d,v=[],y=m;y<s;y+=3)d=(u[y]<<16&16711680)+(u[y+1]<<8&65280)+(u[y+2]&255),v.push(k(d));return v.join("")}function C(u){for(var m,s=u.length,d=s%3,v=[],y=16383,j=0,P=s-d;j<P;j+=y)v.push(E(u,j,j+y>P?P:j+y));return d===1?(m=u[s-1],v.push(i[m>>2]+i[m<<4&63]+"==")):d===2&&(m=(u[s-2]<<8)+u[s-1],v.push(i[m>>10]+i[m>>4&63]+i[m<<2&63]+"=")),v.join("")}}),Qn=He(_=>{Le(),_.read=function(i,l,g,f,S){var h,r,T=S*8-f-1,w=(1<<T)-1,B=w>>1,k=-7,E=g?S-1:0,C=g?-1:1,u=i[l+E];for(E+=C,h=u&(1<<-k)-1,u>>=-k,k+=T;k>0;h=h*256+i[l+E],E+=C,k-=8);for(r=h&(1<<-k)-1,h>>=-k,k+=f;k>0;r=r*256+i[l+E],E+=C,k-=8);if(h===0)h=1-B;else{if(h===w)return r?NaN:(u?-1:1)*(1/0);r=r+Math.pow(2,f),h=h-B}return(u?-1:1)*r*Math.pow(2,h-f)},_.write=function(i,l,g,f,S,h){var r,T,w,B=h*8-S-1,k=(1<<B)-1,E=k>>1,C=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=f?0:h-1,m=f?1:-1,s=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(T=isNaN(l)?1:0,r=k):(r=Math.floor(Math.log(l)/Math.LN2),l*(w=Math.pow(2,-r))<1&&(r--,w*=2),r+E>=1?l+=C/w:l+=C*Math.pow(2,1-E),l*w>=2&&(r++,w/=2),r+E>=k?(T=0,r=k):r+E>=1?(T=(l*w-1)*Math.pow(2,S),r=r+E):(T=l*Math.pow(2,E-1)*Math.pow(2,S),r=0));S>=8;i[g+u]=T&255,u+=m,T/=256,S-=8);for(r=r<<S|T,B+=S;B>0;i[g+u]=r&255,u+=m,r/=256,B-=8);i[g+u-m]|=s*128}}),er=He(_=>{"use strict";Le();var i=Kn(),l=Qn(),g=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=v,_.INSPECT_MAX_BYTES=50;var f=2147483647;_.kMaxLength=f,r.TYPED_ARRAY_SUPPORT=S(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function S(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function h(e){if(e>f)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return T(e,t,o)}r.poolSize=8192;function T(e,t,o){if(typeof e=="string")return E(e,t);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return m(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var c=s(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return T(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function w(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return w(e),e<=0?h(e):t!==void 0?typeof o=="string"?h(e).fill(t,o):h(e).fill(t):h(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return w(e),h(e<0?0:d(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function E(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=y(e,t)|0,n=h(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function C(e){for(var t=e.length<0?0:d(e.length)|0,o=h(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function u(e){if(N(e,Uint8Array)){var t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return C(e)}function m(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function s(e){if(r.isBuffer(e)){var t=d(e.length)|0,o=h(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?h(0):C(e);if(e.type==="Buffer"&&Array.isArray(e.data))return C(e.data)}function d(e){if(e>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return e|0}function v(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),N(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,p=Math.min(o,n);c<p;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var p=e[o];if(N(p,Uint8Array))c+p.length>n.length?r.from(p).copy(n,c):Uint8Array.prototype.set.call(n,p,c);else if(r.isBuffer(p))p.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return n};function y(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return J(e).length;default:if(c)return n?-1:Y(e).length;t=(""+t).toLowerCase(),c=!0}}r.byteLength=y;function j(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return ue(this,t,o);case"utf8":case"utf-8":return Z(this,t,o);case"ascii":return _e(this,t,o);case"latin1":case"binary":return ae(this,t,o);case"base64":return le(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return de(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function P(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)P(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Z(this,0,e):j.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},g&&(r.prototype[g]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,c){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var p=c-n,a=o-t,b=Math.min(p,a),O=this.slice(n,c),x=e.slice(t,o),A=0;A<b;++A)if(O[A]!==x[A]){p=O[A],a=x[A];break}return p<a?-1:a<p?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:X(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):X(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function X(e,t,o,n,c){var p=1,a=e.length,b=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;p=2,a/=2,b/=2,o/=2}function O(K,Q){return p===1?K[Q]:K.readUInt16BE(Q*p)}var x;if(c){var A=-1;for(x=o;x<a;x++)if(O(e,x)===O(t,A===-1?0:x-A)){if(A===-1&&(A=x),x-A+1===b)return A*p}else A!==-1&&(x-=x-A),A=-1}else for(o+b>a&&(o=a-b),x=o;x>=0;x--){for(var I=!0,F=0;F<b;F++)if(O(e,x+F)!==O(t,F)){I=!1;break}if(I)return x}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function oe(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var p=t.length;n>p/2&&(n=p/2);for(var a=0;a<n;++a){var b=parseInt(t.substr(a*2,2),16);if(V(b))return a;e[o+a]=b}return a}function ne(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function re(e,t,o,n){return D(fe(t),e,o,n)}function ce(e,t,o,n){return D(J(t),e,o,n)}function pe(e,t,o,n){return D(he(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return oe(this,e,t,o);case"utf8":case"utf-8":return ne(this,e,t,o);case"ascii":case"latin1":case"binary":return re(this,e,t,o);case"base64":return ce(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,e,t,o);default:if(p)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function le(e,t,o){return t===0&&o===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,o))}function Z(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var p=e[c],a=null,b=p>239?4:p>223?3:p>191?2:1;if(c+b<=o){var O,x,A,I;switch(b){case 1:p<128&&(a=p);break;case 2:O=e[c+1],(O&192)===128&&(I=(p&31)<<6|O&63,I>127&&(a=I));break;case 3:O=e[c+1],x=e[c+2],(O&192)===128&&(x&192)===128&&(I=(p&15)<<12|(O&63)<<6|x&63,I>2047&&(I<55296||I>57343)&&(a=I));break;case 4:O=e[c+1],x=e[c+2],A=e[c+3],(O&192)===128&&(x&192)===128&&(A&192)===128&&(I=(p&15)<<18|(O&63)<<12|(x&63)<<6|A&63,I>65535&&I<1114112&&(a=I))}}a===null?(a=65533,b=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),c+=b}return ie(n)}var W=4096;function ie(e){var t=e.length;if(t<=W)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=W));return o}function _e(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function ae(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function ue(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",p=t;p<o;++p)c+=ge[e[p]];return c}function de(e,t,o){for(var n=e.slice(t,o),c="",p=0;p<n.length-1;p+=2)c+=String.fromCharCode(n[p]+n[p+1]*256);return c}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function U(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=t,c=1,p=this[e+--n];n>0&&(c*=256);)p+=this[e+--n]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*t)),p},r.prototype.readInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!1,52,8)};function R(e,t,o,n,c,p){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<p)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=1,a=0;for(this[t]=e&255;++a<o&&(p*=256);)this[t+a]=e/p&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=o-1,a=1;for(this[t+p]=e&255;--p>=0&&(a*=256);)this[t+p]=e/a&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=0,a=1,b=0;for(this[t]=e&255;++p<o&&(a*=256);)e<0&&b===0&&this[t+p-1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=o-1,a=1,b=0;for(this[t+p]=e&255;--p>=0&&(a*=256);)e<0&&b===0&&this[t+p+1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,c,p){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function G(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),l.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return G(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return G(this,e,t,!1,o)};function H(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),l.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return H(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var p;if(typeof e=="number")for(p=t;p<o;++p)this[p]=e;else{var a=r.isBuffer(e)?e:r.from(e,n),b=a.length;if(b===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<o-t;++p)this[p+t]=a[p%b]}return this};var me=/[^+/0-9A-Za-z-_]/g;function se(e){if(e=e.split("=")[0],e=e.trim().replace(me,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,c=null,p=[],a=0;a<n;++a){if(o=e.charCodeAt(a),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&p.push(239,191,189);continue}else if(a+1===n){(t-=3)>-1&&p.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&p.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&p.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;p.push(o)}else if(o<2048){if((t-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function fe(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function he(e,t){for(var o,n,c,p=[],a=0;a<e.length&&!((t-=2)<0);++a)o=e.charCodeAt(a),n=o>>8,c=o%256,p.push(c),p.push(n);return p}function J(e){return i.toByteArray(se(e))}function D(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function N(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ge=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),tr=He((_,i)=>{Le();var l=i.exports={},g,f;function S(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=S}catch(d){g=S}try{typeof clearTimeout=="function"?f=clearTimeout:f=h}catch(d){f=h}})();function r(d){if(g===setTimeout)return setTimeout(d,0);if((g===S||!g)&&setTimeout)return g=setTimeout,setTimeout(d,0);try{return g(d,0)}catch(v){try{return g.call(null,d,0)}catch(y){return g.call(this,d,0)}}}function T(d){if(f===clearTimeout)return clearTimeout(d);if((f===h||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(d);try{return f(d)}catch(v){try{return f.call(null,d)}catch(y){return f.call(this,d)}}}var w=[],B=!1,k,E=-1;function C(){!B||!k||(B=!1,k.length?w=k.concat(w):E=-1,w.length&&u())}function u(){if(!B){var d=r(C);B=!0;for(var v=w.length;v;){for(k=w,w=[];++E<v;)k&&k[E].run();E=-1,v=w.length}k=null,B=!1,T(d)}}l.nextTick=function(d){var v=new Array(arguments.length-1);if(arguments.length>1)for(var y=1;y<arguments.length;y++)v[y-1]=arguments[y];w.push(new m(d,v)),w.length===1&&!B&&r(u)};function m(d,v){this.fun=d,this.array=v}m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function s(){}l.on=s,l.addListener=s,l.once=s,l.off=s,l.removeListener=s,l.removeAllListeners=s,l.emit=s,l.prependListener=s,l.prependOnceListener=s,l.listeners=function(d){return[]},l.binding=function(d){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(d){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),or,nr,rr,Le=Gn(()=>{or=mt(er()),nr=mt(tr()),rr=function(_){function i(){var g=this||self;return delete _.prototype.__magic__,g}if(typeof globalThis=="object")return globalThis;if(this)return i();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),Rt={};Hn(Rt,{Menu:()=>_r});Pt.exports=Jn(Rt);Le();var dt=mt(q("react")),cr=q("@fortawesome/free-solid-svg-icons"),pr=q("@fortawesome/react-fontawesome"),lr=q("react-select");Le();var ir=`.dapp-core-component__tokenSelect-module__label {
  display: none;
}

.dapp-core-component__tokenSelect-module__select {
  width: auto;
  margin-left: auto;
  position: relative;
}
.dapp-core-component__tokenSelect-module__select.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
  background-color: var(--dapp-form-bg);
  border: transparent;
  border-radius: var(--dapp-form-input-border-radius);
  width: 8rem;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
    margin-left: 0.2rem;
    width: 11rem;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__indicator svg {
  fill: var(--dapp-form-select-indicator-fill-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
  line-height: 1.5;
  font-size: 1rem;
  height: 3.625rem;
  padding: 4px 0 4px 10px;
  flex: 1;
  cursor: pointer;
  display: flex;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
    padding-left: 4px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
  width: 40px;
  height: 40px;
  max-width: 40px;
  min-width: 40px;
  margin-right: 8px;
  flex: 1;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  justify-content: center;
  overflow: hidden;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon img {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__asset .dapp-core-component__tokenSelect-module__diamond {
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
    display: none;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload {
  min-width: 0;
  flex: 1;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper > [class*=css] {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color);
  font-size: 16px;
  margin: 0;
  transition: all 200ms ease;
  font-weight: 300;
  white-space: normal;
  left: 0;
  right: 0;
  line-height: 1.25;
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  top: auto;
  transform: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single + div {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single.dapp-core-component__tokenSelect-module__focused {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown {
  padding: 0;
  margin: 0;
  display: flex;
  line-height: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input {
  margin: 0 !important;
  min-height: 20px !important;
  background-color: transparent !important;
  font-size: 16px !important;
  border: none !important;
  color: var(--dapp-form-select-input-color) !important;
  line-height: 1.25 !important;
  border-radius: 0 !important;
  min-width: 100% !important;
  font-weight: 300 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:after {
  content: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:focus, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:hover {
  opacity: 1 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  color: var(--dapp-form-label-color);
  font-size: 12px;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: block;
  white-space: nowrap;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator {
  cursor: pointer;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator svg {
  transition: all 200ms ease;
  fill: var(--dapp-form-select-indicator-fill);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator.dapp-core-component__tokenSelect-module__expanded svg {
  transform: rotateZ(180deg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator:hover svg {
  fill: var(--dapp-form-select-indicator-fill-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__loading {
  height: 150px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu {
  border: 1px solid var(--dapp-form-select-menu-border);
  border-radius: 6px;
  width: auto;
  right: -1px;
  overflow: hidden;
  background-color: var(--dapp-form-select-option-bg);
  z-index: 99999;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list {
  background-color: var(--dapp-form-select-menu-bg);
  max-height: 260px;
  padding: 0;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track:hover, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-corner {
  background-color: var(--dapp-form-select-menu-scroll-track);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar:horizontal {
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:horizontal {
  border-radius: var(--dapp-form-input-border-radius);
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2.5px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:hover {
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-resizer {
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0;
  background-color: var(--dapp-form-select-option-bg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected {
  background-color: var(--dapp-form-select-option-bg-selected);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  margin-right: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond {
  font-size: 24px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond path {
  fill: #fff;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
  text-align: left;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value {
  color: var(--dapp-form-select-option-color);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value strong,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value strong {
  font-weight: 900;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__price,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  margin-top: 4px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  text-align: right;
  margin-left: 16px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__children {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__ticker {
  display: flex;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ir));var It={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},_r=_=>dt.default.createElement(lr.components.Menu,$n(Wn({},_),{className:It.menu}),_.selectProps.isLoading?dt.default.createElement("div",{className:It.loading},dt.default.createElement(pr.FontAwesomeIcon,{icon:cr.faCircleNotch,className:"fa-spin",size:"lg"})):_.children);});var Vt=be((ol,Yt)=>{"use strict";ee();var ar=Object.create,De=Object.defineProperty,ur=Object.defineProperties,dr=Object.getOwnPropertyDescriptor,mr=Object.getOwnPropertyDescriptors,sr=Object.getOwnPropertyNames,zt=Object.getOwnPropertySymbols,fr=Object.getPrototypeOf,Dt=Object.prototype.hasOwnProperty,hr=Object.prototype.propertyIsEnumerable,Nt=(_,i,l)=>i in _?De(_,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):_[i]=l,gr=(_,i)=>{for(var l in i||(i={}))Dt.call(i,l)&&Nt(_,l,i[l]);if(zt)for(var l of zt(i))hr.call(i,l)&&Nt(_,l,i[l]);return _},kr=(_,i)=>ur(_,mr(i)),yr=(_,i)=>()=>(_&&(i=_(_=0)),i),Je=(_,i)=>()=>(i||_((i={exports:{}}).exports,i),i.exports),Sr=(_,i)=>{for(var l in i)De(_,l,{get:i[l],enumerable:!0})},Ft=(_,i,l,g)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of sr(i))!Dt.call(_,f)&&f!==l&&De(_,f,{get:()=>i[f],enumerable:!(g=dr(i,f))||g.enumerable});return _},st=(_,i,l)=>(l=_!=null?ar(fr(_)):{},Ft(i||!_||!_.__esModule?De(l,"default",{value:_,enumerable:!0}):l,_)),wr=_=>Ft(De({},"__esModule",{value:!0}),_),br=Je(_=>{"use strict";Ie(),_.byteLength=T,_.toByteArray=B,_.fromByteArray=C;var i=[],l=[],g=typeof Uint8Array!="undefined"?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(S=0,h=f.length;S<h;++S)i[S]=f[S],l[f.charCodeAt(S)]=S;var S,h;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function r(u){var m=u.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var s=u.indexOf("=");s===-1&&(s=m);var d=s===m?0:4-s%4;return[s,d]}function T(u){var m=r(u),s=m[0],d=m[1];return(s+d)*3/4-d}function w(u,m,s){return(m+s)*3/4-s}function B(u){var m,s=r(u),d=s[0],v=s[1],y=new g(w(u,d,v)),j=0,P=v>0?d-4:d,L;for(L=0;L<P;L+=4)m=l[u.charCodeAt(L)]<<18|l[u.charCodeAt(L+1)]<<12|l[u.charCodeAt(L+2)]<<6|l[u.charCodeAt(L+3)],y[j++]=m>>16&255,y[j++]=m>>8&255,y[j++]=m&255;return v===2&&(m=l[u.charCodeAt(L)]<<2|l[u.charCodeAt(L+1)]>>4,y[j++]=m&255),v===1&&(m=l[u.charCodeAt(L)]<<10|l[u.charCodeAt(L+1)]<<4|l[u.charCodeAt(L+2)]>>2,y[j++]=m>>8&255,y[j++]=m&255),y}function k(u){return i[u>>18&63]+i[u>>12&63]+i[u>>6&63]+i[u&63]}function E(u,m,s){for(var d,v=[],y=m;y<s;y+=3)d=(u[y]<<16&16711680)+(u[y+1]<<8&65280)+(u[y+2]&255),v.push(k(d));return v.join("")}function C(u){for(var m,s=u.length,d=s%3,v=[],y=16383,j=0,P=s-d;j<P;j+=y)v.push(E(u,j,j+y>P?P:j+y));return d===1?(m=u[s-1],v.push(i[m>>2]+i[m<<4&63]+"==")):d===2&&(m=(u[s-2]<<8)+u[s-1],v.push(i[m>>10]+i[m>>4&63]+i[m<<2&63]+"=")),v.join("")}}),vr=Je(_=>{Ie(),_.read=function(i,l,g,f,S){var h,r,T=S*8-f-1,w=(1<<T)-1,B=w>>1,k=-7,E=g?S-1:0,C=g?-1:1,u=i[l+E];for(E+=C,h=u&(1<<-k)-1,u>>=-k,k+=T;k>0;h=h*256+i[l+E],E+=C,k-=8);for(r=h&(1<<-k)-1,h>>=-k,k+=f;k>0;r=r*256+i[l+E],E+=C,k-=8);if(h===0)h=1-B;else{if(h===w)return r?NaN:(u?-1:1)*(1/0);r=r+Math.pow(2,f),h=h-B}return(u?-1:1)*r*Math.pow(2,h-f)},_.write=function(i,l,g,f,S,h){var r,T,w,B=h*8-S-1,k=(1<<B)-1,E=k>>1,C=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=f?0:h-1,m=f?1:-1,s=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(T=isNaN(l)?1:0,r=k):(r=Math.floor(Math.log(l)/Math.LN2),l*(w=Math.pow(2,-r))<1&&(r--,w*=2),r+E>=1?l+=C/w:l+=C*Math.pow(2,1-E),l*w>=2&&(r++,w/=2),r+E>=k?(T=0,r=k):r+E>=1?(T=(l*w-1)*Math.pow(2,S),r=r+E):(T=l*Math.pow(2,E-1)*Math.pow(2,S),r=0));S>=8;i[g+u]=T&255,u+=m,T/=256,S-=8);for(r=r<<S|T,B+=S;B>0;i[g+u]=r&255,u+=m,r/=256,B-=8);i[g+u-m]|=s*128}}),xr=Je(_=>{"use strict";Ie();var i=br(),l=vr(),g=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=v,_.INSPECT_MAX_BYTES=50;var f=2147483647;_.kMaxLength=f,r.TYPED_ARRAY_SUPPORT=S(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function S(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function h(e){if(e>f)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return T(e,t,o)}r.poolSize=8192;function T(e,t,o){if(typeof e=="string")return E(e,t);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return m(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var c=s(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return T(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function w(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return w(e),e<=0?h(e):t!==void 0?typeof o=="string"?h(e).fill(t,o):h(e).fill(t):h(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return w(e),h(e<0?0:d(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function E(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=y(e,t)|0,n=h(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function C(e){for(var t=e.length<0?0:d(e.length)|0,o=h(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function u(e){if(N(e,Uint8Array)){var t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return C(e)}function m(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function s(e){if(r.isBuffer(e)){var t=d(e.length)|0,o=h(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?h(0):C(e);if(e.type==="Buffer"&&Array.isArray(e.data))return C(e.data)}function d(e){if(e>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return e|0}function v(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),N(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,p=Math.min(o,n);c<p;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var p=e[o];if(N(p,Uint8Array))c+p.length>n.length?r.from(p).copy(n,c):Uint8Array.prototype.set.call(n,p,c);else if(r.isBuffer(p))p.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return n};function y(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return J(e).length;default:if(c)return n?-1:Y(e).length;t=(""+t).toLowerCase(),c=!0}}r.byteLength=y;function j(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return ue(this,t,o);case"utf8":case"utf-8":return Z(this,t,o);case"ascii":return _e(this,t,o);case"latin1":case"binary":return ae(this,t,o);case"base64":return le(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return de(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function P(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)P(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Z(this,0,e):j.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},g&&(r.prototype[g]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,c){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var p=c-n,a=o-t,b=Math.min(p,a),O=this.slice(n,c),x=e.slice(t,o),A=0;A<b;++A)if(O[A]!==x[A]){p=O[A],a=x[A];break}return p<a?-1:a<p?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:X(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):X(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function X(e,t,o,n,c){var p=1,a=e.length,b=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;p=2,a/=2,b/=2,o/=2}function O(K,Q){return p===1?K[Q]:K.readUInt16BE(Q*p)}var x;if(c){var A=-1;for(x=o;x<a;x++)if(O(e,x)===O(t,A===-1?0:x-A)){if(A===-1&&(A=x),x-A+1===b)return A*p}else A!==-1&&(x-=x-A),A=-1}else for(o+b>a&&(o=a-b),x=o;x>=0;x--){for(var I=!0,F=0;F<b;F++)if(O(e,x+F)!==O(t,F)){I=!1;break}if(I)return x}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function oe(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var p=t.length;n>p/2&&(n=p/2);for(var a=0;a<n;++a){var b=parseInt(t.substr(a*2,2),16);if(V(b))return a;e[o+a]=b}return a}function ne(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function re(e,t,o,n){return D(fe(t),e,o,n)}function ce(e,t,o,n){return D(J(t),e,o,n)}function pe(e,t,o,n){return D(he(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return oe(this,e,t,o);case"utf8":case"utf-8":return ne(this,e,t,o);case"ascii":case"latin1":case"binary":return re(this,e,t,o);case"base64":return ce(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,e,t,o);default:if(p)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function le(e,t,o){return t===0&&o===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,o))}function Z(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var p=e[c],a=null,b=p>239?4:p>223?3:p>191?2:1;if(c+b<=o){var O,x,A,I;switch(b){case 1:p<128&&(a=p);break;case 2:O=e[c+1],(O&192)===128&&(I=(p&31)<<6|O&63,I>127&&(a=I));break;case 3:O=e[c+1],x=e[c+2],(O&192)===128&&(x&192)===128&&(I=(p&15)<<12|(O&63)<<6|x&63,I>2047&&(I<55296||I>57343)&&(a=I));break;case 4:O=e[c+1],x=e[c+2],A=e[c+3],(O&192)===128&&(x&192)===128&&(A&192)===128&&(I=(p&15)<<18|(O&63)<<12|(x&63)<<6|A&63,I>65535&&I<1114112&&(a=I))}}a===null?(a=65533,b=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),c+=b}return ie(n)}var W=4096;function ie(e){var t=e.length;if(t<=W)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=W));return o}function _e(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function ae(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function ue(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",p=t;p<o;++p)c+=ge[e[p]];return c}function de(e,t,o){for(var n=e.slice(t,o),c="",p=0;p<n.length-1;p+=2)c+=String.fromCharCode(n[p]+n[p+1]*256);return c}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function U(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=t,c=1,p=this[e+--n];n>0&&(c*=256);)p+=this[e+--n]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*t)),p},r.prototype.readInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!1,52,8)};function R(e,t,o,n,c,p){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<p)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=1,a=0;for(this[t]=e&255;++a<o&&(p*=256);)this[t+a]=e/p&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=o-1,a=1;for(this[t+p]=e&255;--p>=0&&(a*=256);)this[t+p]=e/a&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=0,a=1,b=0;for(this[t]=e&255;++p<o&&(a*=256);)e<0&&b===0&&this[t+p-1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=o-1,a=1,b=0;for(this[t+p]=e&255;--p>=0&&(a*=256);)e<0&&b===0&&this[t+p+1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,c,p){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function G(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),l.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return G(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return G(this,e,t,!1,o)};function H(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),l.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return H(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var p;if(typeof e=="number")for(p=t;p<o;++p)this[p]=e;else{var a=r.isBuffer(e)?e:r.from(e,n),b=a.length;if(b===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<o-t;++p)this[p+t]=a[p%b]}return this};var me=/[^+/0-9A-Za-z-_]/g;function se(e){if(e=e.split("=")[0],e=e.trim().replace(me,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,c=null,p=[],a=0;a<n;++a){if(o=e.charCodeAt(a),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&p.push(239,191,189);continue}else if(a+1===n){(t-=3)>-1&&p.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&p.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&p.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;p.push(o)}else if(o<2048){if((t-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function fe(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function he(e,t){for(var o,n,c,p=[],a=0;a<e.length&&!((t-=2)<0);++a)o=e.charCodeAt(a),n=o>>8,c=o%256,p.push(c),p.push(n);return p}function J(e){return i.toByteArray(se(e))}function D(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function N(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ge=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),Er=Je((_,i)=>{Ie();var l=i.exports={},g,f;function S(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=S}catch(d){g=S}try{typeof clearTimeout=="function"?f=clearTimeout:f=h}catch(d){f=h}})();function r(d){if(g===setTimeout)return setTimeout(d,0);if((g===S||!g)&&setTimeout)return g=setTimeout,setTimeout(d,0);try{return g(d,0)}catch(v){try{return g.call(null,d,0)}catch(y){return g.call(this,d,0)}}}function T(d){if(f===clearTimeout)return clearTimeout(d);if((f===h||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(d);try{return f(d)}catch(v){try{return f.call(null,d)}catch(y){return f.call(this,d)}}}var w=[],B=!1,k,E=-1;function C(){!B||!k||(B=!1,k.length?w=k.concat(w):E=-1,w.length&&u())}function u(){if(!B){var d=r(C);B=!0;for(var v=w.length;v;){for(k=w,w=[];++E<v;)k&&k[E].run();E=-1,v=w.length}k=null,B=!1,T(d)}}l.nextTick=function(d){var v=new Array(arguments.length-1);if(arguments.length>1)for(var y=1;y<arguments.length;y++)v[y-1]=arguments[y];w.push(new m(d,v)),w.length===1&&!B&&r(u)};function m(d,v){this.fun=d,this.array=v}m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function s(){}l.on=s,l.addListener=s,l.once=s,l.off=s,l.removeListener=s,l.removeAllListeners=s,l.emit=s,l.prependListener=s,l.prependOnceListener=s,l.listeners=function(d){return[]},l.binding=function(d){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(d){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Ar,Br,Ur,Ie=yr(()=>{Ar=st(xr()),Br=st(Er()),Ur=function(_){function i(){var g=this||self;return delete _.prototype.__magic__,g}if(typeof globalThis=="object")return globalThis;if(this)return i();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),qt={};Sr(qt,{Control:()=>Cr});Yt.exports=wr(qt);Ie();var Tr=st(q("react")),Or=q("react-select");Ie();var Lr=`.dapp-core-component__tokenSelect-module__label {
  display: none;
}

.dapp-core-component__tokenSelect-module__select {
  width: auto;
  margin-left: auto;
  position: relative;
}
.dapp-core-component__tokenSelect-module__select.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
  background-color: var(--dapp-form-bg);
  border: transparent;
  border-radius: var(--dapp-form-input-border-radius);
  width: 8rem;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
    margin-left: 0.2rem;
    width: 11rem;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__indicator svg {
  fill: var(--dapp-form-select-indicator-fill-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
  line-height: 1.5;
  font-size: 1rem;
  height: 3.625rem;
  padding: 4px 0 4px 10px;
  flex: 1;
  cursor: pointer;
  display: flex;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
    padding-left: 4px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
  width: 40px;
  height: 40px;
  max-width: 40px;
  min-width: 40px;
  margin-right: 8px;
  flex: 1;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  justify-content: center;
  overflow: hidden;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon img {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__asset .dapp-core-component__tokenSelect-module__diamond {
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
    display: none;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload {
  min-width: 0;
  flex: 1;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper > [class*=css] {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color);
  font-size: 16px;
  margin: 0;
  transition: all 200ms ease;
  font-weight: 300;
  white-space: normal;
  left: 0;
  right: 0;
  line-height: 1.25;
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  top: auto;
  transform: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single + div {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single.dapp-core-component__tokenSelect-module__focused {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown {
  padding: 0;
  margin: 0;
  display: flex;
  line-height: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input {
  margin: 0 !important;
  min-height: 20px !important;
  background-color: transparent !important;
  font-size: 16px !important;
  border: none !important;
  color: var(--dapp-form-select-input-color) !important;
  line-height: 1.25 !important;
  border-radius: 0 !important;
  min-width: 100% !important;
  font-weight: 300 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:after {
  content: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:focus, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:hover {
  opacity: 1 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  color: var(--dapp-form-label-color);
  font-size: 12px;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: block;
  white-space: nowrap;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator {
  cursor: pointer;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator svg {
  transition: all 200ms ease;
  fill: var(--dapp-form-select-indicator-fill);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator.dapp-core-component__tokenSelect-module__expanded svg {
  transform: rotateZ(180deg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator:hover svg {
  fill: var(--dapp-form-select-indicator-fill-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__loading {
  height: 150px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu {
  border: 1px solid var(--dapp-form-select-menu-border);
  border-radius: 6px;
  width: auto;
  right: -1px;
  overflow: hidden;
  background-color: var(--dapp-form-select-option-bg);
  z-index: 99999;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list {
  background-color: var(--dapp-form-select-menu-bg);
  max-height: 260px;
  padding: 0;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track:hover, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-corner {
  background-color: var(--dapp-form-select-menu-scroll-track);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar:horizontal {
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:horizontal {
  border-radius: var(--dapp-form-input-border-radius);
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2.5px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:hover {
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-resizer {
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0;
  background-color: var(--dapp-form-select-option-bg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected {
  background-color: var(--dapp-form-select-option-bg-selected);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  margin-right: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond {
  font-size: 24px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond path {
  fill: #fff;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
  text-align: left;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value {
  color: var(--dapp-form-select-option-color);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value strong,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value strong {
  font-weight: 900;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__price,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  margin-top: 4px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  text-align: right;
  margin-left: 16px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__children {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__ticker {
  display: flex;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Lr));var Ir={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Cr=_=>Tr.default.createElement(Or.components.Control,kr(gr({},_),{className:Ir.control}));});var Kt=be((nl,Jt)=>{"use strict";ee();var jr=Object.create,Fe=Object.defineProperty,Rr=Object.defineProperties,Pr=Object.getOwnPropertyDescriptor,Mr=Object.getOwnPropertyDescriptors,zr=Object.getOwnPropertyNames,Xt=Object.getOwnPropertySymbols,Nr=Object.getPrototypeOf,$t=Object.prototype.hasOwnProperty,Dr=Object.prototype.propertyIsEnumerable,Zt=(_,i,l)=>i in _?Fe(_,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):_[i]=l,Fr=(_,i)=>{for(var l in i||(i={}))$t.call(i,l)&&Zt(_,l,i[l]);if(Xt)for(var l of Xt(i))Dr.call(i,l)&&Zt(_,l,i[l]);return _},qr=(_,i)=>Rr(_,Mr(i)),Yr=(_,i)=>()=>(_&&(i=_(_=0)),i),Qe=(_,i)=>()=>(i||_((i={exports:{}}).exports,i),i.exports),Vr=(_,i)=>{for(var l in i)Fe(_,l,{get:i[l],enumerable:!0})},Gt=(_,i,l,g)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of zr(i))!$t.call(_,f)&&f!==l&&Fe(_,f,{get:()=>i[f],enumerable:!(g=Pr(i,f))||g.enumerable});return _},Ke=(_,i,l)=>(l=_!=null?jr(Nr(_)):{},Gt(i||!_||!_.__esModule?Fe(l,"default",{value:_,enumerable:!0}):l,_)),Xr=_=>Gt(Fe({},"__esModule",{value:!0}),_),Zr=Qe(_=>{"use strict";Ce(),_.byteLength=T,_.toByteArray=B,_.fromByteArray=C;var i=[],l=[],g=typeof Uint8Array!="undefined"?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(S=0,h=f.length;S<h;++S)i[S]=f[S],l[f.charCodeAt(S)]=S;var S,h;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function r(u){var m=u.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var s=u.indexOf("=");s===-1&&(s=m);var d=s===m?0:4-s%4;return[s,d]}function T(u){var m=r(u),s=m[0],d=m[1];return(s+d)*3/4-d}function w(u,m,s){return(m+s)*3/4-s}function B(u){var m,s=r(u),d=s[0],v=s[1],y=new g(w(u,d,v)),j=0,P=v>0?d-4:d,L;for(L=0;L<P;L+=4)m=l[u.charCodeAt(L)]<<18|l[u.charCodeAt(L+1)]<<12|l[u.charCodeAt(L+2)]<<6|l[u.charCodeAt(L+3)],y[j++]=m>>16&255,y[j++]=m>>8&255,y[j++]=m&255;return v===2&&(m=l[u.charCodeAt(L)]<<2|l[u.charCodeAt(L+1)]>>4,y[j++]=m&255),v===1&&(m=l[u.charCodeAt(L)]<<10|l[u.charCodeAt(L+1)]<<4|l[u.charCodeAt(L+2)]>>2,y[j++]=m>>8&255,y[j++]=m&255),y}function k(u){return i[u>>18&63]+i[u>>12&63]+i[u>>6&63]+i[u&63]}function E(u,m,s){for(var d,v=[],y=m;y<s;y+=3)d=(u[y]<<16&16711680)+(u[y+1]<<8&65280)+(u[y+2]&255),v.push(k(d));return v.join("")}function C(u){for(var m,s=u.length,d=s%3,v=[],y=16383,j=0,P=s-d;j<P;j+=y)v.push(E(u,j,j+y>P?P:j+y));return d===1?(m=u[s-1],v.push(i[m>>2]+i[m<<4&63]+"==")):d===2&&(m=(u[s-2]<<8)+u[s-1],v.push(i[m>>10]+i[m>>4&63]+i[m<<2&63]+"=")),v.join("")}}),Wr=Qe(_=>{Ce(),_.read=function(i,l,g,f,S){var h,r,T=S*8-f-1,w=(1<<T)-1,B=w>>1,k=-7,E=g?S-1:0,C=g?-1:1,u=i[l+E];for(E+=C,h=u&(1<<-k)-1,u>>=-k,k+=T;k>0;h=h*256+i[l+E],E+=C,k-=8);for(r=h&(1<<-k)-1,h>>=-k,k+=f;k>0;r=r*256+i[l+E],E+=C,k-=8);if(h===0)h=1-B;else{if(h===w)return r?NaN:(u?-1:1)*(1/0);r=r+Math.pow(2,f),h=h-B}return(u?-1:1)*r*Math.pow(2,h-f)},_.write=function(i,l,g,f,S,h){var r,T,w,B=h*8-S-1,k=(1<<B)-1,E=k>>1,C=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=f?0:h-1,m=f?1:-1,s=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(T=isNaN(l)?1:0,r=k):(r=Math.floor(Math.log(l)/Math.LN2),l*(w=Math.pow(2,-r))<1&&(r--,w*=2),r+E>=1?l+=C/w:l+=C*Math.pow(2,1-E),l*w>=2&&(r++,w/=2),r+E>=k?(T=0,r=k):r+E>=1?(T=(l*w-1)*Math.pow(2,S),r=r+E):(T=l*Math.pow(2,E-1)*Math.pow(2,S),r=0));S>=8;i[g+u]=T&255,u+=m,T/=256,S-=8);for(r=r<<S|T,B+=S;B>0;i[g+u]=r&255,u+=m,r/=256,B-=8);i[g+u-m]|=s*128}}),$r=Qe(_=>{"use strict";Ce();var i=Zr(),l=Wr(),g=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=v,_.INSPECT_MAX_BYTES=50;var f=2147483647;_.kMaxLength=f,r.TYPED_ARRAY_SUPPORT=S(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function S(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function h(e){if(e>f)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return T(e,t,o)}r.poolSize=8192;function T(e,t,o){if(typeof e=="string")return E(e,t);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return m(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var c=s(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return T(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function w(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return w(e),e<=0?h(e):t!==void 0?typeof o=="string"?h(e).fill(t,o):h(e).fill(t):h(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return w(e),h(e<0?0:d(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function E(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=y(e,t)|0,n=h(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function C(e){for(var t=e.length<0?0:d(e.length)|0,o=h(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function u(e){if(N(e,Uint8Array)){var t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return C(e)}function m(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function s(e){if(r.isBuffer(e)){var t=d(e.length)|0,o=h(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?h(0):C(e);if(e.type==="Buffer"&&Array.isArray(e.data))return C(e.data)}function d(e){if(e>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return e|0}function v(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),N(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,p=Math.min(o,n);c<p;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var p=e[o];if(N(p,Uint8Array))c+p.length>n.length?r.from(p).copy(n,c):Uint8Array.prototype.set.call(n,p,c);else if(r.isBuffer(p))p.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return n};function y(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return J(e).length;default:if(c)return n?-1:Y(e).length;t=(""+t).toLowerCase(),c=!0}}r.byteLength=y;function j(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return ue(this,t,o);case"utf8":case"utf-8":return Z(this,t,o);case"ascii":return _e(this,t,o);case"latin1":case"binary":return ae(this,t,o);case"base64":return le(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return de(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function P(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)P(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Z(this,0,e):j.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},g&&(r.prototype[g]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,c){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var p=c-n,a=o-t,b=Math.min(p,a),O=this.slice(n,c),x=e.slice(t,o),A=0;A<b;++A)if(O[A]!==x[A]){p=O[A],a=x[A];break}return p<a?-1:a<p?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:X(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):X(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function X(e,t,o,n,c){var p=1,a=e.length,b=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;p=2,a/=2,b/=2,o/=2}function O(K,Q){return p===1?K[Q]:K.readUInt16BE(Q*p)}var x;if(c){var A=-1;for(x=o;x<a;x++)if(O(e,x)===O(t,A===-1?0:x-A)){if(A===-1&&(A=x),x-A+1===b)return A*p}else A!==-1&&(x-=x-A),A=-1}else for(o+b>a&&(o=a-b),x=o;x>=0;x--){for(var I=!0,F=0;F<b;F++)if(O(e,x+F)!==O(t,F)){I=!1;break}if(I)return x}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function oe(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var p=t.length;n>p/2&&(n=p/2);for(var a=0;a<n;++a){var b=parseInt(t.substr(a*2,2),16);if(V(b))return a;e[o+a]=b}return a}function ne(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function re(e,t,o,n){return D(fe(t),e,o,n)}function ce(e,t,o,n){return D(J(t),e,o,n)}function pe(e,t,o,n){return D(he(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return oe(this,e,t,o);case"utf8":case"utf-8":return ne(this,e,t,o);case"ascii":case"latin1":case"binary":return re(this,e,t,o);case"base64":return ce(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,e,t,o);default:if(p)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function le(e,t,o){return t===0&&o===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,o))}function Z(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var p=e[c],a=null,b=p>239?4:p>223?3:p>191?2:1;if(c+b<=o){var O,x,A,I;switch(b){case 1:p<128&&(a=p);break;case 2:O=e[c+1],(O&192)===128&&(I=(p&31)<<6|O&63,I>127&&(a=I));break;case 3:O=e[c+1],x=e[c+2],(O&192)===128&&(x&192)===128&&(I=(p&15)<<12|(O&63)<<6|x&63,I>2047&&(I<55296||I>57343)&&(a=I));break;case 4:O=e[c+1],x=e[c+2],A=e[c+3],(O&192)===128&&(x&192)===128&&(A&192)===128&&(I=(p&15)<<18|(O&63)<<12|(x&63)<<6|A&63,I>65535&&I<1114112&&(a=I))}}a===null?(a=65533,b=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),c+=b}return ie(n)}var W=4096;function ie(e){var t=e.length;if(t<=W)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=W));return o}function _e(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function ae(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function ue(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",p=t;p<o;++p)c+=ge[e[p]];return c}function de(e,t,o){for(var n=e.slice(t,o),c="",p=0;p<n.length-1;p+=2)c+=String.fromCharCode(n[p]+n[p+1]*256);return c}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function U(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=t,c=1,p=this[e+--n];n>0&&(c*=256);)p+=this[e+--n]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*t)),p},r.prototype.readInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!1,52,8)};function R(e,t,o,n,c,p){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<p)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=1,a=0;for(this[t]=e&255;++a<o&&(p*=256);)this[t+a]=e/p&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=o-1,a=1;for(this[t+p]=e&255;--p>=0&&(a*=256);)this[t+p]=e/a&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=0,a=1,b=0;for(this[t]=e&255;++p<o&&(a*=256);)e<0&&b===0&&this[t+p-1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=o-1,a=1,b=0;for(this[t+p]=e&255;--p>=0&&(a*=256);)e<0&&b===0&&this[t+p+1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,c,p){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function G(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),l.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return G(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return G(this,e,t,!1,o)};function H(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),l.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return H(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var p;if(typeof e=="number")for(p=t;p<o;++p)this[p]=e;else{var a=r.isBuffer(e)?e:r.from(e,n),b=a.length;if(b===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<o-t;++p)this[p+t]=a[p%b]}return this};var me=/[^+/0-9A-Za-z-_]/g;function se(e){if(e=e.split("=")[0],e=e.trim().replace(me,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,c=null,p=[],a=0;a<n;++a){if(o=e.charCodeAt(a),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&p.push(239,191,189);continue}else if(a+1===n){(t-=3)>-1&&p.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&p.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&p.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;p.push(o)}else if(o<2048){if((t-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function fe(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function he(e,t){for(var o,n,c,p=[],a=0;a<e.length&&!((t-=2)<0);++a)o=e.charCodeAt(a),n=o>>8,c=o%256,p.push(c),p.push(n);return p}function J(e){return i.toByteArray(se(e))}function D(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function N(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ge=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),Gr=Qe((_,i)=>{Ce();var l=i.exports={},g,f;function S(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=S}catch(d){g=S}try{typeof clearTimeout=="function"?f=clearTimeout:f=h}catch(d){f=h}})();function r(d){if(g===setTimeout)return setTimeout(d,0);if((g===S||!g)&&setTimeout)return g=setTimeout,setTimeout(d,0);try{return g(d,0)}catch(v){try{return g.call(null,d,0)}catch(y){return g.call(this,d,0)}}}function T(d){if(f===clearTimeout)return clearTimeout(d);if((f===h||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(d);try{return f(d)}catch(v){try{return f.call(null,d)}catch(y){return f.call(this,d)}}}var w=[],B=!1,k,E=-1;function C(){!B||!k||(B=!1,k.length?w=k.concat(w):E=-1,w.length&&u())}function u(){if(!B){var d=r(C);B=!0;for(var v=w.length;v;){for(k=w,w=[];++E<v;)k&&k[E].run();E=-1,v=w.length}k=null,B=!1,T(d)}}l.nextTick=function(d){var v=new Array(arguments.length-1);if(arguments.length>1)for(var y=1;y<arguments.length;y++)v[y-1]=arguments[y];w.push(new m(d,v)),w.length===1&&!B&&r(u)};function m(d,v){this.fun=d,this.array=v}m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function s(){}l.on=s,l.addListener=s,l.once=s,l.off=s,l.removeListener=s,l.removeAllListeners=s,l.emit=s,l.prependListener=s,l.prependOnceListener=s,l.listeners=function(d){return[]},l.binding=function(d){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(d){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Hr,Jr,Kr,Ce=Yr(()=>{Hr=Ke($r()),Jr=Ke(Gr()),Kr=function(_){function i(){var g=this||self;return delete _.prototype.__magic__,g}if(typeof globalThis=="object")return globalThis;if(this)return i();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),Ht={};Vr(Ht,{Placeholder:()=>nc});Jt.exports=Xr(Ht);Ce();var Qr=Ke(q("react")),ec=Ke(q("classnames")),tc=q("react-select");Ce();var oc=`.dapp-core-component__tokenSelect-module__label {
  display: none;
}

.dapp-core-component__tokenSelect-module__select {
  width: auto;
  margin-left: auto;
  position: relative;
}
.dapp-core-component__tokenSelect-module__select.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
  background-color: var(--dapp-form-bg);
  border: transparent;
  border-radius: var(--dapp-form-input-border-radius);
  width: 8rem;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
    margin-left: 0.2rem;
    width: 11rem;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__indicator svg {
  fill: var(--dapp-form-select-indicator-fill-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
  line-height: 1.5;
  font-size: 1rem;
  height: 3.625rem;
  padding: 4px 0 4px 10px;
  flex: 1;
  cursor: pointer;
  display: flex;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
    padding-left: 4px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
  width: 40px;
  height: 40px;
  max-width: 40px;
  min-width: 40px;
  margin-right: 8px;
  flex: 1;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  justify-content: center;
  overflow: hidden;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon img {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__asset .dapp-core-component__tokenSelect-module__diamond {
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
    display: none;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload {
  min-width: 0;
  flex: 1;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper > [class*=css] {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color);
  font-size: 16px;
  margin: 0;
  transition: all 200ms ease;
  font-weight: 300;
  white-space: normal;
  left: 0;
  right: 0;
  line-height: 1.25;
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  top: auto;
  transform: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single + div {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single.dapp-core-component__tokenSelect-module__focused {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown {
  padding: 0;
  margin: 0;
  display: flex;
  line-height: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input {
  margin: 0 !important;
  min-height: 20px !important;
  background-color: transparent !important;
  font-size: 16px !important;
  border: none !important;
  color: var(--dapp-form-select-input-color) !important;
  line-height: 1.25 !important;
  border-radius: 0 !important;
  min-width: 100% !important;
  font-weight: 300 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:after {
  content: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:focus, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:hover {
  opacity: 1 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  color: var(--dapp-form-label-color);
  font-size: 12px;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: block;
  white-space: nowrap;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator {
  cursor: pointer;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator svg {
  transition: all 200ms ease;
  fill: var(--dapp-form-select-indicator-fill);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator.dapp-core-component__tokenSelect-module__expanded svg {
  transform: rotateZ(180deg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator:hover svg {
  fill: var(--dapp-form-select-indicator-fill-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__loading {
  height: 150px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu {
  border: 1px solid var(--dapp-form-select-menu-border);
  border-radius: 6px;
  width: auto;
  right: -1px;
  overflow: hidden;
  background-color: var(--dapp-form-select-option-bg);
  z-index: 99999;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list {
  background-color: var(--dapp-form-select-menu-bg);
  max-height: 260px;
  padding: 0;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track:hover, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-corner {
  background-color: var(--dapp-form-select-menu-scroll-track);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar:horizontal {
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:horizontal {
  border-radius: var(--dapp-form-input-border-radius);
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2.5px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:hover {
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-resizer {
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0;
  background-color: var(--dapp-form-select-option-bg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected {
  background-color: var(--dapp-form-select-option-bg-selected);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  margin-right: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond {
  font-size: 24px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond path {
  fill: #fff;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
  text-align: left;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value {
  color: var(--dapp-form-select-option-color);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value strong,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value strong {
  font-weight: 900;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__price,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  margin-top: 4px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  text-align: right;
  margin-left: 16px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__children {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__ticker {
  display: flex;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(oc));var Wt={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},nc=_=>Qr.default.createElement(tc.components.Placeholder,qr(Fr({},_),{className:(0,ec.default)(Wt.placeholder,{[Wt.focused]:_.isFocused})}));});var po=be((rl,co)=>{"use strict";ee();var rc=Object.create,qe=Object.defineProperty,cc=Object.defineProperties,pc=Object.getOwnPropertyDescriptor,lc=Object.getOwnPropertyDescriptors,ic=Object.getOwnPropertyNames,Qt=Object.getOwnPropertySymbols,_c=Object.getPrototypeOf,oo=Object.prototype.hasOwnProperty,ac=Object.prototype.propertyIsEnumerable,eo=(_,i,l)=>i in _?qe(_,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):_[i]=l,uc=(_,i)=>{for(var l in i||(i={}))oo.call(i,l)&&eo(_,l,i[l]);if(Qt)for(var l of Qt(i))ac.call(i,l)&&eo(_,l,i[l]);return _},dc=(_,i)=>cc(_,lc(i)),mc=(_,i)=>()=>(_&&(i=_(_=0)),i),tt=(_,i)=>()=>(i||_((i={exports:{}}).exports,i),i.exports),sc=(_,i)=>{for(var l in i)qe(_,l,{get:i[l],enumerable:!0})},no=(_,i,l,g)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of ic(i))!oo.call(_,f)&&f!==l&&qe(_,f,{get:()=>i[f],enumerable:!(g=pc(i,f))||g.enumerable});return _},et=(_,i,l)=>(l=_!=null?rc(_c(_)):{},no(i||!_||!_.__esModule?qe(l,"default",{value:_,enumerable:!0}):l,_)),fc=_=>no(qe({},"__esModule",{value:!0}),_),hc=tt(_=>{"use strict";je(),_.byteLength=T,_.toByteArray=B,_.fromByteArray=C;var i=[],l=[],g=typeof Uint8Array!="undefined"?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(S=0,h=f.length;S<h;++S)i[S]=f[S],l[f.charCodeAt(S)]=S;var S,h;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function r(u){var m=u.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var s=u.indexOf("=");s===-1&&(s=m);var d=s===m?0:4-s%4;return[s,d]}function T(u){var m=r(u),s=m[0],d=m[1];return(s+d)*3/4-d}function w(u,m,s){return(m+s)*3/4-s}function B(u){var m,s=r(u),d=s[0],v=s[1],y=new g(w(u,d,v)),j=0,P=v>0?d-4:d,L;for(L=0;L<P;L+=4)m=l[u.charCodeAt(L)]<<18|l[u.charCodeAt(L+1)]<<12|l[u.charCodeAt(L+2)]<<6|l[u.charCodeAt(L+3)],y[j++]=m>>16&255,y[j++]=m>>8&255,y[j++]=m&255;return v===2&&(m=l[u.charCodeAt(L)]<<2|l[u.charCodeAt(L+1)]>>4,y[j++]=m&255),v===1&&(m=l[u.charCodeAt(L)]<<10|l[u.charCodeAt(L+1)]<<4|l[u.charCodeAt(L+2)]>>2,y[j++]=m>>8&255,y[j++]=m&255),y}function k(u){return i[u>>18&63]+i[u>>12&63]+i[u>>6&63]+i[u&63]}function E(u,m,s){for(var d,v=[],y=m;y<s;y+=3)d=(u[y]<<16&16711680)+(u[y+1]<<8&65280)+(u[y+2]&255),v.push(k(d));return v.join("")}function C(u){for(var m,s=u.length,d=s%3,v=[],y=16383,j=0,P=s-d;j<P;j+=y)v.push(E(u,j,j+y>P?P:j+y));return d===1?(m=u[s-1],v.push(i[m>>2]+i[m<<4&63]+"==")):d===2&&(m=(u[s-2]<<8)+u[s-1],v.push(i[m>>10]+i[m>>4&63]+i[m<<2&63]+"=")),v.join("")}}),gc=tt(_=>{je(),_.read=function(i,l,g,f,S){var h,r,T=S*8-f-1,w=(1<<T)-1,B=w>>1,k=-7,E=g?S-1:0,C=g?-1:1,u=i[l+E];for(E+=C,h=u&(1<<-k)-1,u>>=-k,k+=T;k>0;h=h*256+i[l+E],E+=C,k-=8);for(r=h&(1<<-k)-1,h>>=-k,k+=f;k>0;r=r*256+i[l+E],E+=C,k-=8);if(h===0)h=1-B;else{if(h===w)return r?NaN:(u?-1:1)*(1/0);r=r+Math.pow(2,f),h=h-B}return(u?-1:1)*r*Math.pow(2,h-f)},_.write=function(i,l,g,f,S,h){var r,T,w,B=h*8-S-1,k=(1<<B)-1,E=k>>1,C=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=f?0:h-1,m=f?1:-1,s=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(T=isNaN(l)?1:0,r=k):(r=Math.floor(Math.log(l)/Math.LN2),l*(w=Math.pow(2,-r))<1&&(r--,w*=2),r+E>=1?l+=C/w:l+=C*Math.pow(2,1-E),l*w>=2&&(r++,w/=2),r+E>=k?(T=0,r=k):r+E>=1?(T=(l*w-1)*Math.pow(2,S),r=r+E):(T=l*Math.pow(2,E-1)*Math.pow(2,S),r=0));S>=8;i[g+u]=T&255,u+=m,T/=256,S-=8);for(r=r<<S|T,B+=S;B>0;i[g+u]=r&255,u+=m,r/=256,B-=8);i[g+u-m]|=s*128}}),kc=tt(_=>{"use strict";je();var i=hc(),l=gc(),g=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=v,_.INSPECT_MAX_BYTES=50;var f=2147483647;_.kMaxLength=f,r.TYPED_ARRAY_SUPPORT=S(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function S(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function h(e){if(e>f)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return T(e,t,o)}r.poolSize=8192;function T(e,t,o){if(typeof e=="string")return E(e,t);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return m(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var c=s(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return T(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function w(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return w(e),e<=0?h(e):t!==void 0?typeof o=="string"?h(e).fill(t,o):h(e).fill(t):h(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return w(e),h(e<0?0:d(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function E(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=y(e,t)|0,n=h(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function C(e){for(var t=e.length<0?0:d(e.length)|0,o=h(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function u(e){if(N(e,Uint8Array)){var t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return C(e)}function m(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function s(e){if(r.isBuffer(e)){var t=d(e.length)|0,o=h(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?h(0):C(e);if(e.type==="Buffer"&&Array.isArray(e.data))return C(e.data)}function d(e){if(e>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return e|0}function v(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),N(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,p=Math.min(o,n);c<p;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var p=e[o];if(N(p,Uint8Array))c+p.length>n.length?r.from(p).copy(n,c):Uint8Array.prototype.set.call(n,p,c);else if(r.isBuffer(p))p.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return n};function y(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return J(e).length;default:if(c)return n?-1:Y(e).length;t=(""+t).toLowerCase(),c=!0}}r.byteLength=y;function j(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return ue(this,t,o);case"utf8":case"utf-8":return Z(this,t,o);case"ascii":return _e(this,t,o);case"latin1":case"binary":return ae(this,t,o);case"base64":return le(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return de(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function P(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)P(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Z(this,0,e):j.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},g&&(r.prototype[g]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,c){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var p=c-n,a=o-t,b=Math.min(p,a),O=this.slice(n,c),x=e.slice(t,o),A=0;A<b;++A)if(O[A]!==x[A]){p=O[A],a=x[A];break}return p<a?-1:a<p?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:X(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):X(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function X(e,t,o,n,c){var p=1,a=e.length,b=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;p=2,a/=2,b/=2,o/=2}function O(K,Q){return p===1?K[Q]:K.readUInt16BE(Q*p)}var x;if(c){var A=-1;for(x=o;x<a;x++)if(O(e,x)===O(t,A===-1?0:x-A)){if(A===-1&&(A=x),x-A+1===b)return A*p}else A!==-1&&(x-=x-A),A=-1}else for(o+b>a&&(o=a-b),x=o;x>=0;x--){for(var I=!0,F=0;F<b;F++)if(O(e,x+F)!==O(t,F)){I=!1;break}if(I)return x}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function oe(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var p=t.length;n>p/2&&(n=p/2);for(var a=0;a<n;++a){var b=parseInt(t.substr(a*2,2),16);if(V(b))return a;e[o+a]=b}return a}function ne(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function re(e,t,o,n){return D(fe(t),e,o,n)}function ce(e,t,o,n){return D(J(t),e,o,n)}function pe(e,t,o,n){return D(he(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return oe(this,e,t,o);case"utf8":case"utf-8":return ne(this,e,t,o);case"ascii":case"latin1":case"binary":return re(this,e,t,o);case"base64":return ce(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,e,t,o);default:if(p)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function le(e,t,o){return t===0&&o===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,o))}function Z(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var p=e[c],a=null,b=p>239?4:p>223?3:p>191?2:1;if(c+b<=o){var O,x,A,I;switch(b){case 1:p<128&&(a=p);break;case 2:O=e[c+1],(O&192)===128&&(I=(p&31)<<6|O&63,I>127&&(a=I));break;case 3:O=e[c+1],x=e[c+2],(O&192)===128&&(x&192)===128&&(I=(p&15)<<12|(O&63)<<6|x&63,I>2047&&(I<55296||I>57343)&&(a=I));break;case 4:O=e[c+1],x=e[c+2],A=e[c+3],(O&192)===128&&(x&192)===128&&(A&192)===128&&(I=(p&15)<<18|(O&63)<<12|(x&63)<<6|A&63,I>65535&&I<1114112&&(a=I))}}a===null?(a=65533,b=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),c+=b}return ie(n)}var W=4096;function ie(e){var t=e.length;if(t<=W)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=W));return o}function _e(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function ae(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function ue(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",p=t;p<o;++p)c+=ge[e[p]];return c}function de(e,t,o){for(var n=e.slice(t,o),c="",p=0;p<n.length-1;p+=2)c+=String.fromCharCode(n[p]+n[p+1]*256);return c}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function U(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=t,c=1,p=this[e+--n];n>0&&(c*=256);)p+=this[e+--n]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*t)),p},r.prototype.readInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!1,52,8)};function R(e,t,o,n,c,p){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<p)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=1,a=0;for(this[t]=e&255;++a<o&&(p*=256);)this[t+a]=e/p&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=o-1,a=1;for(this[t+p]=e&255;--p>=0&&(a*=256);)this[t+p]=e/a&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=0,a=1,b=0;for(this[t]=e&255;++p<o&&(a*=256);)e<0&&b===0&&this[t+p-1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=o-1,a=1,b=0;for(this[t+p]=e&255;--p>=0&&(a*=256);)e<0&&b===0&&this[t+p+1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,c,p){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function G(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),l.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return G(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return G(this,e,t,!1,o)};function H(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),l.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return H(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var p;if(typeof e=="number")for(p=t;p<o;++p)this[p]=e;else{var a=r.isBuffer(e)?e:r.from(e,n),b=a.length;if(b===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<o-t;++p)this[p+t]=a[p%b]}return this};var me=/[^+/0-9A-Za-z-_]/g;function se(e){if(e=e.split("=")[0],e=e.trim().replace(me,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,c=null,p=[],a=0;a<n;++a){if(o=e.charCodeAt(a),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&p.push(239,191,189);continue}else if(a+1===n){(t-=3)>-1&&p.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&p.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&p.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;p.push(o)}else if(o<2048){if((t-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function fe(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function he(e,t){for(var o,n,c,p=[],a=0;a<e.length&&!((t-=2)<0);++a)o=e.charCodeAt(a),n=o>>8,c=o%256,p.push(c),p.push(n);return p}function J(e){return i.toByteArray(se(e))}function D(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function N(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ge=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),yc=tt((_,i)=>{je();var l=i.exports={},g,f;function S(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=S}catch(d){g=S}try{typeof clearTimeout=="function"?f=clearTimeout:f=h}catch(d){f=h}})();function r(d){if(g===setTimeout)return setTimeout(d,0);if((g===S||!g)&&setTimeout)return g=setTimeout,setTimeout(d,0);try{return g(d,0)}catch(v){try{return g.call(null,d,0)}catch(y){return g.call(this,d,0)}}}function T(d){if(f===clearTimeout)return clearTimeout(d);if((f===h||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(d);try{return f(d)}catch(v){try{return f.call(null,d)}catch(y){return f.call(this,d)}}}var w=[],B=!1,k,E=-1;function C(){!B||!k||(B=!1,k.length?w=k.concat(w):E=-1,w.length&&u())}function u(){if(!B){var d=r(C);B=!0;for(var v=w.length;v;){for(k=w,w=[];++E<v;)k&&k[E].run();E=-1,v=w.length}k=null,B=!1,T(d)}}l.nextTick=function(d){var v=new Array(arguments.length-1);if(arguments.length>1)for(var y=1;y<arguments.length;y++)v[y-1]=arguments[y];w.push(new m(d,v)),w.length===1&&!B&&r(u)};function m(d,v){this.fun=d,this.array=v}m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function s(){}l.on=s,l.addListener=s,l.once=s,l.off=s,l.removeListener=s,l.removeAllListeners=s,l.emit=s,l.prependListener=s,l.prependOnceListener=s,l.listeners=function(d){return[]},l.binding=function(d){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(d){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Sc,wc,bc,je=mc(()=>{Sc=et(kc()),wc=et(yc()),bc=function(_){function i(){var g=this||self;return delete _.prototype.__magic__,g}if(typeof globalThis=="object")return globalThis;if(this)return i();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),ro={};sc(ro,{IndicatorsContainer:()=>Bc});co.exports=fc(ro);je();var vc=et(q("react")),xc=et(q("classnames")),Ec=q("react-select");je();var Ac=`.dapp-core-component__tokenSelect-module__label {
  display: none;
}

.dapp-core-component__tokenSelect-module__select {
  width: auto;
  margin-left: auto;
  position: relative;
}
.dapp-core-component__tokenSelect-module__select.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
  background-color: var(--dapp-form-bg);
  border: transparent;
  border-radius: var(--dapp-form-input-border-radius);
  width: 8rem;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
    margin-left: 0.2rem;
    width: 11rem;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__indicator svg {
  fill: var(--dapp-form-select-indicator-fill-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
  line-height: 1.5;
  font-size: 1rem;
  height: 3.625rem;
  padding: 4px 0 4px 10px;
  flex: 1;
  cursor: pointer;
  display: flex;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
    padding-left: 4px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
  width: 40px;
  height: 40px;
  max-width: 40px;
  min-width: 40px;
  margin-right: 8px;
  flex: 1;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  justify-content: center;
  overflow: hidden;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon img {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__asset .dapp-core-component__tokenSelect-module__diamond {
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
    display: none;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload {
  min-width: 0;
  flex: 1;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper > [class*=css] {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color);
  font-size: 16px;
  margin: 0;
  transition: all 200ms ease;
  font-weight: 300;
  white-space: normal;
  left: 0;
  right: 0;
  line-height: 1.25;
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  top: auto;
  transform: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single + div {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single.dapp-core-component__tokenSelect-module__focused {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown {
  padding: 0;
  margin: 0;
  display: flex;
  line-height: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input {
  margin: 0 !important;
  min-height: 20px !important;
  background-color: transparent !important;
  font-size: 16px !important;
  border: none !important;
  color: var(--dapp-form-select-input-color) !important;
  line-height: 1.25 !important;
  border-radius: 0 !important;
  min-width: 100% !important;
  font-weight: 300 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:after {
  content: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:focus, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:hover {
  opacity: 1 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  color: var(--dapp-form-label-color);
  font-size: 12px;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: block;
  white-space: nowrap;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator {
  cursor: pointer;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator svg {
  transition: all 200ms ease;
  fill: var(--dapp-form-select-indicator-fill);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator.dapp-core-component__tokenSelect-module__expanded svg {
  transform: rotateZ(180deg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator:hover svg {
  fill: var(--dapp-form-select-indicator-fill-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__loading {
  height: 150px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu {
  border: 1px solid var(--dapp-form-select-menu-border);
  border-radius: 6px;
  width: auto;
  right: -1px;
  overflow: hidden;
  background-color: var(--dapp-form-select-option-bg);
  z-index: 99999;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list {
  background-color: var(--dapp-form-select-menu-bg);
  max-height: 260px;
  padding: 0;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track:hover, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-corner {
  background-color: var(--dapp-form-select-menu-scroll-track);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar:horizontal {
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:horizontal {
  border-radius: var(--dapp-form-input-border-radius);
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2.5px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:hover {
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-resizer {
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0;
  background-color: var(--dapp-form-select-option-bg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected {
  background-color: var(--dapp-form-select-option-bg-selected);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  margin-right: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond {
  font-size: 24px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond path {
  fill: #fff;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
  text-align: left;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value {
  color: var(--dapp-form-select-option-color);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value strong,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value strong {
  font-weight: 900;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__price,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  margin-top: 4px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  text-align: right;
  margin-left: 16px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__children {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__ticker {
  display: flex;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ac));var to={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Bc=_=>vc.default.createElement(Ec.components.IndicatorsContainer,dc(uc({},_),{className:(0,xc.default)(to.indicator,{[to.expanded]:_.selectProps.menuIsOpen})}));});var bo=be((cl,wo)=>{"use strict";ee();var Uc=Object.create,Ve=Object.defineProperty,Tc=Object.defineProperties,Oc=Object.getOwnPropertyDescriptor,Lc=Object.getOwnPropertyDescriptors,Ic=Object.getOwnPropertyNames,lo=Object.getOwnPropertySymbols,Cc=Object.getPrototypeOf,ao=Object.prototype.hasOwnProperty,jc=Object.prototype.propertyIsEnumerable,io=(_,i,l)=>i in _?Ve(_,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):_[i]=l,uo=(_,i)=>{for(var l in i||(i={}))ao.call(i,l)&&io(_,l,i[l]);if(lo)for(var l of lo(i))jc.call(i,l)&&io(_,l,i[l]);return _},Rc=(_,i)=>Tc(_,Lc(i)),mo=(_,i)=>()=>(_&&(i=_(_=0)),i),nt=(_,i)=>()=>(i||_((i={exports:{}}).exports,i),i.exports),so=(_,i)=>{for(var l in i)Ve(_,l,{get:i[l],enumerable:!0})},fo=(_,i,l,g)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of Ic(i))!ao.call(_,f)&&f!==l&&Ve(_,f,{get:()=>i[f],enumerable:!(g=Oc(i,f))||g.enumerable});return _},Ye=(_,i,l)=>(l=_!=null?Uc(Cc(_)):{},fo(i||!_||!_.__esModule?Ve(l,"default",{value:_,enumerable:!0}):l,_)),ho=_=>fo(Ve({},"__esModule",{value:!0}),_),Pc=nt(_=>{"use strict";Ue(),_.byteLength=T,_.toByteArray=B,_.fromByteArray=C;var i=[],l=[],g=typeof Uint8Array!="undefined"?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(S=0,h=f.length;S<h;++S)i[S]=f[S],l[f.charCodeAt(S)]=S;var S,h;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function r(u){var m=u.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var s=u.indexOf("=");s===-1&&(s=m);var d=s===m?0:4-s%4;return[s,d]}function T(u){var m=r(u),s=m[0],d=m[1];return(s+d)*3/4-d}function w(u,m,s){return(m+s)*3/4-s}function B(u){var m,s=r(u),d=s[0],v=s[1],y=new g(w(u,d,v)),j=0,P=v>0?d-4:d,L;for(L=0;L<P;L+=4)m=l[u.charCodeAt(L)]<<18|l[u.charCodeAt(L+1)]<<12|l[u.charCodeAt(L+2)]<<6|l[u.charCodeAt(L+3)],y[j++]=m>>16&255,y[j++]=m>>8&255,y[j++]=m&255;return v===2&&(m=l[u.charCodeAt(L)]<<2|l[u.charCodeAt(L+1)]>>4,y[j++]=m&255),v===1&&(m=l[u.charCodeAt(L)]<<10|l[u.charCodeAt(L+1)]<<4|l[u.charCodeAt(L+2)]>>2,y[j++]=m>>8&255,y[j++]=m&255),y}function k(u){return i[u>>18&63]+i[u>>12&63]+i[u>>6&63]+i[u&63]}function E(u,m,s){for(var d,v=[],y=m;y<s;y+=3)d=(u[y]<<16&16711680)+(u[y+1]<<8&65280)+(u[y+2]&255),v.push(k(d));return v.join("")}function C(u){for(var m,s=u.length,d=s%3,v=[],y=16383,j=0,P=s-d;j<P;j+=y)v.push(E(u,j,j+y>P?P:j+y));return d===1?(m=u[s-1],v.push(i[m>>2]+i[m<<4&63]+"==")):d===2&&(m=(u[s-2]<<8)+u[s-1],v.push(i[m>>10]+i[m>>4&63]+i[m<<2&63]+"=")),v.join("")}}),Mc=nt(_=>{Ue(),_.read=function(i,l,g,f,S){var h,r,T=S*8-f-1,w=(1<<T)-1,B=w>>1,k=-7,E=g?S-1:0,C=g?-1:1,u=i[l+E];for(E+=C,h=u&(1<<-k)-1,u>>=-k,k+=T;k>0;h=h*256+i[l+E],E+=C,k-=8);for(r=h&(1<<-k)-1,h>>=-k,k+=f;k>0;r=r*256+i[l+E],E+=C,k-=8);if(h===0)h=1-B;else{if(h===w)return r?NaN:(u?-1:1)*(1/0);r=r+Math.pow(2,f),h=h-B}return(u?-1:1)*r*Math.pow(2,h-f)},_.write=function(i,l,g,f,S,h){var r,T,w,B=h*8-S-1,k=(1<<B)-1,E=k>>1,C=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=f?0:h-1,m=f?1:-1,s=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(T=isNaN(l)?1:0,r=k):(r=Math.floor(Math.log(l)/Math.LN2),l*(w=Math.pow(2,-r))<1&&(r--,w*=2),r+E>=1?l+=C/w:l+=C*Math.pow(2,1-E),l*w>=2&&(r++,w/=2),r+E>=k?(T=0,r=k):r+E>=1?(T=(l*w-1)*Math.pow(2,S),r=r+E):(T=l*Math.pow(2,E-1)*Math.pow(2,S),r=0));S>=8;i[g+u]=T&255,u+=m,T/=256,S-=8);for(r=r<<S|T,B+=S;B>0;i[g+u]=r&255,u+=m,r/=256,B-=8);i[g+u-m]|=s*128}}),zc=nt(_=>{"use strict";Ue();var i=Pc(),l=Mc(),g=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=v,_.INSPECT_MAX_BYTES=50;var f=2147483647;_.kMaxLength=f,r.TYPED_ARRAY_SUPPORT=S(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function S(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function h(e){if(e>f)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return T(e,t,o)}r.poolSize=8192;function T(e,t,o){if(typeof e=="string")return E(e,t);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return m(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var c=s(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return T(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function w(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return w(e),e<=0?h(e):t!==void 0?typeof o=="string"?h(e).fill(t,o):h(e).fill(t):h(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return w(e),h(e<0?0:d(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function E(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=y(e,t)|0,n=h(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function C(e){for(var t=e.length<0?0:d(e.length)|0,o=h(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function u(e){if(N(e,Uint8Array)){var t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return C(e)}function m(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function s(e){if(r.isBuffer(e)){var t=d(e.length)|0,o=h(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?h(0):C(e);if(e.type==="Buffer"&&Array.isArray(e.data))return C(e.data)}function d(e){if(e>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return e|0}function v(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),N(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,p=Math.min(o,n);c<p;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var p=e[o];if(N(p,Uint8Array))c+p.length>n.length?r.from(p).copy(n,c):Uint8Array.prototype.set.call(n,p,c);else if(r.isBuffer(p))p.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return n};function y(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return J(e).length;default:if(c)return n?-1:Y(e).length;t=(""+t).toLowerCase(),c=!0}}r.byteLength=y;function j(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return ue(this,t,o);case"utf8":case"utf-8":return Z(this,t,o);case"ascii":return _e(this,t,o);case"latin1":case"binary":return ae(this,t,o);case"base64":return le(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return de(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function P(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)P(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Z(this,0,e):j.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},g&&(r.prototype[g]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,c){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var p=c-n,a=o-t,b=Math.min(p,a),O=this.slice(n,c),x=e.slice(t,o),A=0;A<b;++A)if(O[A]!==x[A]){p=O[A],a=x[A];break}return p<a?-1:a<p?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:X(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):X(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function X(e,t,o,n,c){var p=1,a=e.length,b=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;p=2,a/=2,b/=2,o/=2}function O(K,Q){return p===1?K[Q]:K.readUInt16BE(Q*p)}var x;if(c){var A=-1;for(x=o;x<a;x++)if(O(e,x)===O(t,A===-1?0:x-A)){if(A===-1&&(A=x),x-A+1===b)return A*p}else A!==-1&&(x-=x-A),A=-1}else for(o+b>a&&(o=a-b),x=o;x>=0;x--){for(var I=!0,F=0;F<b;F++)if(O(e,x+F)!==O(t,F)){I=!1;break}if(I)return x}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function oe(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var p=t.length;n>p/2&&(n=p/2);for(var a=0;a<n;++a){var b=parseInt(t.substr(a*2,2),16);if(V(b))return a;e[o+a]=b}return a}function ne(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function re(e,t,o,n){return D(fe(t),e,o,n)}function ce(e,t,o,n){return D(J(t),e,o,n)}function pe(e,t,o,n){return D(he(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return oe(this,e,t,o);case"utf8":case"utf-8":return ne(this,e,t,o);case"ascii":case"latin1":case"binary":return re(this,e,t,o);case"base64":return ce(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,e,t,o);default:if(p)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function le(e,t,o){return t===0&&o===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,o))}function Z(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var p=e[c],a=null,b=p>239?4:p>223?3:p>191?2:1;if(c+b<=o){var O,x,A,I;switch(b){case 1:p<128&&(a=p);break;case 2:O=e[c+1],(O&192)===128&&(I=(p&31)<<6|O&63,I>127&&(a=I));break;case 3:O=e[c+1],x=e[c+2],(O&192)===128&&(x&192)===128&&(I=(p&15)<<12|(O&63)<<6|x&63,I>2047&&(I<55296||I>57343)&&(a=I));break;case 4:O=e[c+1],x=e[c+2],A=e[c+3],(O&192)===128&&(x&192)===128&&(A&192)===128&&(I=(p&15)<<18|(O&63)<<12|(x&63)<<6|A&63,I>65535&&I<1114112&&(a=I))}}a===null?(a=65533,b=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),c+=b}return ie(n)}var W=4096;function ie(e){var t=e.length;if(t<=W)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=W));return o}function _e(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function ae(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function ue(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",p=t;p<o;++p)c+=ge[e[p]];return c}function de(e,t,o){for(var n=e.slice(t,o),c="",p=0;p<n.length-1;p+=2)c+=String.fromCharCode(n[p]+n[p+1]*256);return c}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function U(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=t,c=1,p=this[e+--n];n>0&&(c*=256);)p+=this[e+--n]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*t)),p},r.prototype.readInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!1,52,8)};function R(e,t,o,n,c,p){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<p)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=1,a=0;for(this[t]=e&255;++a<o&&(p*=256);)this[t+a]=e/p&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=o-1,a=1;for(this[t+p]=e&255;--p>=0&&(a*=256);)this[t+p]=e/a&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=0,a=1,b=0;for(this[t]=e&255;++p<o&&(a*=256);)e<0&&b===0&&this[t+p-1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=o-1,a=1,b=0;for(this[t+p]=e&255;--p>=0&&(a*=256);)e<0&&b===0&&this[t+p+1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,c,p){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function G(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),l.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return G(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return G(this,e,t,!1,o)};function H(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),l.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return H(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var p;if(typeof e=="number")for(p=t;p<o;++p)this[p]=e;else{var a=r.isBuffer(e)?e:r.from(e,n),b=a.length;if(b===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<o-t;++p)this[p+t]=a[p%b]}return this};var me=/[^+/0-9A-Za-z-_]/g;function se(e){if(e=e.split("=")[0],e=e.trim().replace(me,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,c=null,p=[],a=0;a<n;++a){if(o=e.charCodeAt(a),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&p.push(239,191,189);continue}else if(a+1===n){(t-=3)>-1&&p.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&p.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&p.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;p.push(o)}else if(o<2048){if((t-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function fe(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function he(e,t){for(var o,n,c,p=[],a=0;a<e.length&&!((t-=2)<0);++a)o=e.charCodeAt(a),n=o>>8,c=o%256,p.push(c),p.push(n);return p}function J(e){return i.toByteArray(se(e))}function D(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function N(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ge=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),Nc=nt((_,i)=>{Ue();var l=i.exports={},g,f;function S(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=S}catch(d){g=S}try{typeof clearTimeout=="function"?f=clearTimeout:f=h}catch(d){f=h}})();function r(d){if(g===setTimeout)return setTimeout(d,0);if((g===S||!g)&&setTimeout)return g=setTimeout,setTimeout(d,0);try{return g(d,0)}catch(v){try{return g.call(null,d,0)}catch(y){return g.call(this,d,0)}}}function T(d){if(f===clearTimeout)return clearTimeout(d);if((f===h||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(d);try{return f(d)}catch(v){try{return f.call(null,d)}catch(y){return f.call(this,d)}}}var w=[],B=!1,k,E=-1;function C(){!B||!k||(B=!1,k.length?w=k.concat(w):E=-1,w.length&&u())}function u(){if(!B){var d=r(C);B=!0;for(var v=w.length;v;){for(k=w,w=[];++E<v;)k&&k[E].run();E=-1,v=w.length}k=null,B=!1,T(d)}}l.nextTick=function(d){var v=new Array(arguments.length-1);if(arguments.length>1)for(var y=1;y<arguments.length;y++)v[y-1]=arguments[y];w.push(new m(d,v)),w.length===1&&!B&&r(u)};function m(d,v){this.fun=d,this.array=v}m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function s(){}l.on=s,l.addListener=s,l.once=s,l.off=s,l.removeListener=s,l.removeAllListeners=s,l.emit=s,l.prependListener=s,l.prependOnceListener=s,l.listeners=function(d){return[]},l.binding=function(d){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(d){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Dc,Fc,qc,Ue=mo(()=>{Dc=Ye(zc()),Fc=Ye(Nc()),qc=function(_){function i(){var g=this||self;return delete _.prototype.__magic__,g}if(typeof globalThis=="object")return globalThis;if(this)return i();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),go={};so(go,{default:()=>ko});var ot,_o,ko,Yc=mo(()=>{"use strict";Ue(),ot=Ye(q("react")),_o=_=>ot.createElement("svg",uo({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},_),ot.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),ot.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),ko=_o}),yo={};so(yo,{ValueComponent:()=>So,getValueContainer:()=>Kc});wo.exports=ho(yo);Ue();var ye=Ye(q("react")),Vc=q("@fortawesome/free-solid-svg-icons"),Xc=q("@fortawesome/react-fontawesome"),Zc=q("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Wc=Ye(q("classnames")),$c=q("react-select");Ue();var Gc=`.dapp-core-component__tokenSelect-module__label {
  display: none;
}

.dapp-core-component__tokenSelect-module__select {
  width: auto;
  margin-left: auto;
  position: relative;
}
.dapp-core-component__tokenSelect-module__select.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
  background-color: var(--dapp-form-bg);
  border: transparent;
  border-radius: var(--dapp-form-input-border-radius);
  width: 8rem;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
    margin-left: 0.2rem;
    width: 11rem;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__indicator svg {
  fill: var(--dapp-form-select-indicator-fill-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
  line-height: 1.5;
  font-size: 1rem;
  height: 3.625rem;
  padding: 4px 0 4px 10px;
  flex: 1;
  cursor: pointer;
  display: flex;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
    padding-left: 4px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
  width: 40px;
  height: 40px;
  max-width: 40px;
  min-width: 40px;
  margin-right: 8px;
  flex: 1;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  justify-content: center;
  overflow: hidden;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon img {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__asset .dapp-core-component__tokenSelect-module__diamond {
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
    display: none;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload {
  min-width: 0;
  flex: 1;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper > [class*=css] {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color);
  font-size: 16px;
  margin: 0;
  transition: all 200ms ease;
  font-weight: 300;
  white-space: normal;
  left: 0;
  right: 0;
  line-height: 1.25;
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  top: auto;
  transform: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single + div {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single.dapp-core-component__tokenSelect-module__focused {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown {
  padding: 0;
  margin: 0;
  display: flex;
  line-height: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input {
  margin: 0 !important;
  min-height: 20px !important;
  background-color: transparent !important;
  font-size: 16px !important;
  border: none !important;
  color: var(--dapp-form-select-input-color) !important;
  line-height: 1.25 !important;
  border-radius: 0 !important;
  min-width: 100% !important;
  font-weight: 300 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:after {
  content: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:focus, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:hover {
  opacity: 1 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  color: var(--dapp-form-label-color);
  font-size: 12px;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: block;
  white-space: nowrap;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator {
  cursor: pointer;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator svg {
  transition: all 200ms ease;
  fill: var(--dapp-form-select-indicator-fill);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator.dapp-core-component__tokenSelect-module__expanded svg {
  transform: rotateZ(180deg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator:hover svg {
  fill: var(--dapp-form-select-indicator-fill-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__loading {
  height: 150px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu {
  border: 1px solid var(--dapp-form-select-menu-border);
  border-radius: 6px;
  width: auto;
  right: -1px;
  overflow: hidden;
  background-color: var(--dapp-form-select-option-bg);
  z-index: 99999;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list {
  background-color: var(--dapp-form-select-menu-bg);
  max-height: 260px;
  padding: 0;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track:hover, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-corner {
  background-color: var(--dapp-form-select-menu-scroll-track);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar:horizontal {
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:horizontal {
  border-radius: var(--dapp-form-input-border-radius);
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2.5px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:hover {
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-resizer {
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0;
  background-color: var(--dapp-form-select-option-bg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected {
  background-color: var(--dapp-form-select-option-bg-selected);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  margin-right: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond {
  font-size: 24px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond path {
  fill: #fff;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
  text-align: left;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value {
  color: var(--dapp-form-select-option-color);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value strong,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value strong {
  font-weight: 900;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__price,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  margin-top: 4px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  text-align: right;
  margin-left: 16px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__children {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__ticker {
  display: flex;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gc));var we={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Hc=(Yc(),ho(go)).default,So=({RewaIcon:_,tokenId:i,icon:l})=>{let{isRewa:g}=(0,Zc.getIdentifierType)(i);return g?ye.default.createElement("span",{className:we.asset},_?ye.default.createElement(_,{className:we.diamond}):ye.default.createElement(Hc,{className:we.diamond})):l?ye.default.createElement("img",{src:l,className:we.asset}):ye.default.createElement(Xc.FontAwesomeIcon,{icon:Vc.faDiamond,className:we.asset})},Jc=({children:_})=>ye.default.createElement("div",{className:we.wrapper},_),Kc=(_,i,l)=>g=>{var f,S;let{selectProps:h,isDisabled:r,children:T}=g,w=h.value,B=(S=(f=w==null?void 0:w.assets)==null?void 0:f.svgUrl)!=null?S:null,k=(0,ye.useMemo)(()=>{let E=String(w==null?void 0:w.token.usdPrice);return E!=null&&E.includes("$")?w==null?void 0:w.token.usdPrice:`$${w==null?void 0:w.token.usdPrice}`},[w==null?void 0:w.token.usdPrice]);return ye.default.createElement($c.components.ValueContainer,Rc(uo({},g),{className:we.container}),ye.default.createElement("div",{className:(0,Wc.default)(we.icon,i)},ye.default.createElement(So,{RewaIcon:l,rewaLabel:_,icon:B,isDisabled:r,tokenId:w==null?void 0:w.value})),ye.default.createElement("div",{className:we.payload},ye.default.createElement(Jc,null,T,(w==null?void 0:w.token.usdPrice)&&ye.default.createElement("small",{className:we.price},k))))};});var Mo=be((pl,Po)=>{"use strict";ee();var Qc=Object.create,Xe=Object.defineProperty,ep=Object.defineProperties,tp=Object.getOwnPropertyDescriptor,op=Object.getOwnPropertyDescriptors,np=Object.getOwnPropertyNames,vo=Object.getOwnPropertySymbols,rp=Object.getPrototypeOf,Ao=Object.prototype.hasOwnProperty,cp=Object.prototype.propertyIsEnumerable,xo=(_,i,l)=>i in _?Xe(_,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):_[i]=l,Bo=(_,i)=>{for(var l in i||(i={}))Ao.call(i,l)&&xo(_,l,i[l]);if(vo)for(var l of vo(i))cp.call(i,l)&&xo(_,l,i[l]);return _},pp=(_,i)=>ep(_,op(i)),Uo=(_,i)=>()=>(_&&(i=_(_=0)),i),pt=(_,i)=>()=>(i||_((i={exports:{}}).exports,i),i.exports),To=(_,i)=>{for(var l in i)Xe(_,l,{get:i[l],enumerable:!0})},Oo=(_,i,l,g)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of np(i))!Ao.call(_,f)&&f!==l&&Xe(_,f,{get:()=>i[f],enumerable:!(g=tp(i,f))||g.enumerable});return _},Re=(_,i,l)=>(l=_!=null?Qc(rp(_)):{},Oo(i||!_||!_.__esModule?Xe(l,"default",{value:_,enumerable:!0}):l,_)),Lo=_=>Oo(Xe({},"__esModule",{value:!0}),_),lp=pt(_=>{"use strict";Se(),_.byteLength=T,_.toByteArray=B,_.fromByteArray=C;var i=[],l=[],g=typeof Uint8Array!="undefined"?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(S=0,h=f.length;S<h;++S)i[S]=f[S],l[f.charCodeAt(S)]=S;var S,h;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function r(u){var m=u.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var s=u.indexOf("=");s===-1&&(s=m);var d=s===m?0:4-s%4;return[s,d]}function T(u){var m=r(u),s=m[0],d=m[1];return(s+d)*3/4-d}function w(u,m,s){return(m+s)*3/4-s}function B(u){var m,s=r(u),d=s[0],v=s[1],y=new g(w(u,d,v)),j=0,P=v>0?d-4:d,L;for(L=0;L<P;L+=4)m=l[u.charCodeAt(L)]<<18|l[u.charCodeAt(L+1)]<<12|l[u.charCodeAt(L+2)]<<6|l[u.charCodeAt(L+3)],y[j++]=m>>16&255,y[j++]=m>>8&255,y[j++]=m&255;return v===2&&(m=l[u.charCodeAt(L)]<<2|l[u.charCodeAt(L+1)]>>4,y[j++]=m&255),v===1&&(m=l[u.charCodeAt(L)]<<10|l[u.charCodeAt(L+1)]<<4|l[u.charCodeAt(L+2)]>>2,y[j++]=m>>8&255,y[j++]=m&255),y}function k(u){return i[u>>18&63]+i[u>>12&63]+i[u>>6&63]+i[u&63]}function E(u,m,s){for(var d,v=[],y=m;y<s;y+=3)d=(u[y]<<16&16711680)+(u[y+1]<<8&65280)+(u[y+2]&255),v.push(k(d));return v.join("")}function C(u){for(var m,s=u.length,d=s%3,v=[],y=16383,j=0,P=s-d;j<P;j+=y)v.push(E(u,j,j+y>P?P:j+y));return d===1?(m=u[s-1],v.push(i[m>>2]+i[m<<4&63]+"==")):d===2&&(m=(u[s-2]<<8)+u[s-1],v.push(i[m>>10]+i[m>>4&63]+i[m<<2&63]+"=")),v.join("")}}),ip=pt(_=>{Se(),_.read=function(i,l,g,f,S){var h,r,T=S*8-f-1,w=(1<<T)-1,B=w>>1,k=-7,E=g?S-1:0,C=g?-1:1,u=i[l+E];for(E+=C,h=u&(1<<-k)-1,u>>=-k,k+=T;k>0;h=h*256+i[l+E],E+=C,k-=8);for(r=h&(1<<-k)-1,h>>=-k,k+=f;k>0;r=r*256+i[l+E],E+=C,k-=8);if(h===0)h=1-B;else{if(h===w)return r?NaN:(u?-1:1)*(1/0);r=r+Math.pow(2,f),h=h-B}return(u?-1:1)*r*Math.pow(2,h-f)},_.write=function(i,l,g,f,S,h){var r,T,w,B=h*8-S-1,k=(1<<B)-1,E=k>>1,C=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=f?0:h-1,m=f?1:-1,s=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(T=isNaN(l)?1:0,r=k):(r=Math.floor(Math.log(l)/Math.LN2),l*(w=Math.pow(2,-r))<1&&(r--,w*=2),r+E>=1?l+=C/w:l+=C*Math.pow(2,1-E),l*w>=2&&(r++,w/=2),r+E>=k?(T=0,r=k):r+E>=1?(T=(l*w-1)*Math.pow(2,S),r=r+E):(T=l*Math.pow(2,E-1)*Math.pow(2,S),r=0));S>=8;i[g+u]=T&255,u+=m,T/=256,S-=8);for(r=r<<S|T,B+=S;B>0;i[g+u]=r&255,u+=m,r/=256,B-=8);i[g+u-m]|=s*128}}),_p=pt(_=>{"use strict";Se();var i=lp(),l=ip(),g=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=v,_.INSPECT_MAX_BYTES=50;var f=2147483647;_.kMaxLength=f,r.TYPED_ARRAY_SUPPORT=S(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function S(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function h(e){if(e>f)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return T(e,t,o)}r.poolSize=8192;function T(e,t,o){if(typeof e=="string")return E(e,t);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return m(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var c=s(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return T(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function w(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return w(e),e<=0?h(e):t!==void 0?typeof o=="string"?h(e).fill(t,o):h(e).fill(t):h(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return w(e),h(e<0?0:d(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function E(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=y(e,t)|0,n=h(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function C(e){for(var t=e.length<0?0:d(e.length)|0,o=h(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function u(e){if(N(e,Uint8Array)){var t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return C(e)}function m(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function s(e){if(r.isBuffer(e)){var t=d(e.length)|0,o=h(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?h(0):C(e);if(e.type==="Buffer"&&Array.isArray(e.data))return C(e.data)}function d(e){if(e>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return e|0}function v(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),N(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,p=Math.min(o,n);c<p;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var p=e[o];if(N(p,Uint8Array))c+p.length>n.length?r.from(p).copy(n,c):Uint8Array.prototype.set.call(n,p,c);else if(r.isBuffer(p))p.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return n};function y(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return J(e).length;default:if(c)return n?-1:Y(e).length;t=(""+t).toLowerCase(),c=!0}}r.byteLength=y;function j(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return ue(this,t,o);case"utf8":case"utf-8":return Z(this,t,o);case"ascii":return _e(this,t,o);case"latin1":case"binary":return ae(this,t,o);case"base64":return le(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return de(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function P(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)P(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Z(this,0,e):j.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},g&&(r.prototype[g]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,c){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var p=c-n,a=o-t,b=Math.min(p,a),O=this.slice(n,c),x=e.slice(t,o),A=0;A<b;++A)if(O[A]!==x[A]){p=O[A],a=x[A];break}return p<a?-1:a<p?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:X(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):X(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function X(e,t,o,n,c){var p=1,a=e.length,b=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;p=2,a/=2,b/=2,o/=2}function O(K,Q){return p===1?K[Q]:K.readUInt16BE(Q*p)}var x;if(c){var A=-1;for(x=o;x<a;x++)if(O(e,x)===O(t,A===-1?0:x-A)){if(A===-1&&(A=x),x-A+1===b)return A*p}else A!==-1&&(x-=x-A),A=-1}else for(o+b>a&&(o=a-b),x=o;x>=0;x--){for(var I=!0,F=0;F<b;F++)if(O(e,x+F)!==O(t,F)){I=!1;break}if(I)return x}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function oe(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var p=t.length;n>p/2&&(n=p/2);for(var a=0;a<n;++a){var b=parseInt(t.substr(a*2,2),16);if(V(b))return a;e[o+a]=b}return a}function ne(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function re(e,t,o,n){return D(fe(t),e,o,n)}function ce(e,t,o,n){return D(J(t),e,o,n)}function pe(e,t,o,n){return D(he(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return oe(this,e,t,o);case"utf8":case"utf-8":return ne(this,e,t,o);case"ascii":case"latin1":case"binary":return re(this,e,t,o);case"base64":return ce(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,e,t,o);default:if(p)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function le(e,t,o){return t===0&&o===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,o))}function Z(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var p=e[c],a=null,b=p>239?4:p>223?3:p>191?2:1;if(c+b<=o){var O,x,A,I;switch(b){case 1:p<128&&(a=p);break;case 2:O=e[c+1],(O&192)===128&&(I=(p&31)<<6|O&63,I>127&&(a=I));break;case 3:O=e[c+1],x=e[c+2],(O&192)===128&&(x&192)===128&&(I=(p&15)<<12|(O&63)<<6|x&63,I>2047&&(I<55296||I>57343)&&(a=I));break;case 4:O=e[c+1],x=e[c+2],A=e[c+3],(O&192)===128&&(x&192)===128&&(A&192)===128&&(I=(p&15)<<18|(O&63)<<12|(x&63)<<6|A&63,I>65535&&I<1114112&&(a=I))}}a===null?(a=65533,b=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),c+=b}return ie(n)}var W=4096;function ie(e){var t=e.length;if(t<=W)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=W));return o}function _e(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function ae(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function ue(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",p=t;p<o;++p)c+=ge[e[p]];return c}function de(e,t,o){for(var n=e.slice(t,o),c="",p=0;p<n.length-1;p+=2)c+=String.fromCharCode(n[p]+n[p+1]*256);return c}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function U(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=t,c=1,p=this[e+--n];n>0&&(c*=256);)p+=this[e+--n]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*t)),p},r.prototype.readInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!1,52,8)};function R(e,t,o,n,c,p){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<p)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=1,a=0;for(this[t]=e&255;++a<o&&(p*=256);)this[t+a]=e/p&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=o-1,a=1;for(this[t+p]=e&255;--p>=0&&(a*=256);)this[t+p]=e/a&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=0,a=1,b=0;for(this[t]=e&255;++p<o&&(a*=256);)e<0&&b===0&&this[t+p-1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=o-1,a=1,b=0;for(this[t+p]=e&255;--p>=0&&(a*=256);)e<0&&b===0&&this[t+p+1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,c,p){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function G(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),l.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return G(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return G(this,e,t,!1,o)};function H(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),l.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return H(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var p;if(typeof e=="number")for(p=t;p<o;++p)this[p]=e;else{var a=r.isBuffer(e)?e:r.from(e,n),b=a.length;if(b===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<o-t;++p)this[p+t]=a[p%b]}return this};var me=/[^+/0-9A-Za-z-_]/g;function se(e){if(e=e.split("=")[0],e=e.trim().replace(me,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,c=null,p=[],a=0;a<n;++a){if(o=e.charCodeAt(a),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&p.push(239,191,189);continue}else if(a+1===n){(t-=3)>-1&&p.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&p.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&p.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;p.push(o)}else if(o<2048){if((t-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function fe(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function he(e,t){for(var o,n,c,p=[],a=0;a<e.length&&!((t-=2)<0);++a)o=e.charCodeAt(a),n=o>>8,c=o%256,p.push(c),p.push(n);return p}function J(e){return i.toByteArray(se(e))}function D(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function N(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ge=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),ap=pt((_,i)=>{Se();var l=i.exports={},g,f;function S(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=S}catch(d){g=S}try{typeof clearTimeout=="function"?f=clearTimeout:f=h}catch(d){f=h}})();function r(d){if(g===setTimeout)return setTimeout(d,0);if((g===S||!g)&&setTimeout)return g=setTimeout,setTimeout(d,0);try{return g(d,0)}catch(v){try{return g.call(null,d,0)}catch(y){return g.call(this,d,0)}}}function T(d){if(f===clearTimeout)return clearTimeout(d);if((f===h||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(d);try{return f(d)}catch(v){try{return f.call(null,d)}catch(y){return f.call(this,d)}}}var w=[],B=!1,k,E=-1;function C(){!B||!k||(B=!1,k.length?w=k.concat(w):E=-1,w.length&&u())}function u(){if(!B){var d=r(C);B=!0;for(var v=w.length;v;){for(k=w,w=[];++E<v;)k&&k[E].run();E=-1,v=w.length}k=null,B=!1,T(d)}}l.nextTick=function(d){var v=new Array(arguments.length-1);if(arguments.length>1)for(var y=1;y<arguments.length;y++)v[y-1]=arguments[y];w.push(new m(d,v)),w.length===1&&!B&&r(u)};function m(d,v){this.fun=d,this.array=v}m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function s(){}l.on=s,l.addListener=s,l.once=s,l.off=s,l.removeListener=s,l.removeAllListeners=s,l.emit=s,l.prependListener=s,l.prependOnceListener=s,l.listeners=function(d){return[]},l.binding=function(d){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(d){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),up,dp,mp,Se=Uo(()=>{up=Re(_p()),dp=Re(ap()),mp=function(_){function i(){var g=this||self;return delete _.prototype.__magic__,g}if(typeof globalThis=="object")return globalThis;if(this)return i();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),Io={};To(Io,{default:()=>Co});var rt,Eo,Co,sp=Uo(()=>{"use strict";Se(),rt=Re(q("react")),Eo=_=>rt.createElement("svg",Bo({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},_),rt.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),rt.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Co=Eo}),jo={};To(jo,{DharitrIIcon:()=>Ro,getOption:()=>Tp});Po.exports=Lo(jo);Se();var te=Re(q("react")),fp=q("@fortawesome/free-solid-svg-icons"),hp=q("@fortawesome/react-fontawesome"),gp=q("@terradharitri/sdk-dapp/constants"),kp=q("@terradharitri/sdk-dapp/UI/UsdValue"),yp=q("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Sp=Re(q("classnames")),wp=q("react-select");Se();Se();Se();var ct=Re(q("react"));Se();var bp=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bp));var vp={highlight:"dapp-core-component__styles-modules__highlight"},xp=({highlight:_,text:i=""})=>{let l=i.split(" "),g=_.toLowerCase(),f=new RegExp(`(${g})`,"gi"),S=l.map(h=>h.split(f).filter(r=>r));return ct.default.createElement("span",{className:vp.highlight},S.map((h,r)=>{let T=`${h}-${r}`;return ct.default.createElement("span",{key:T},h.map((w,B)=>{let k=w.toLowerCase()===g,E=g&&k,C=`${w}-${B}`;return E?ct.default.createElement("strong",{key:C},w):ct.default.createElement("span",{key:C},w)}))}))};Se();var Te=q("@terradharitri/sdk-dapp/constants"),Ep=q("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Ap=q("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Bp=({amount:_="0",decimals:i=0,digits:l=Te.DIGITS,addCommas:g=!1,showLastNonZeroDecimal:f=!1})=>{if(_==null||!(0,Ap.stringIsInteger)(_))return"0";let S=r=>(0,Ep.formatAmount)({input:_,digits:r,decimals:i,addCommas:g,showLastNonZeroDecimal:f}),h=S(l);return h=parseFloat(h)>0?h:S(Te.DIGITS),h=parseFloat(h)>0?h:S(Te.DIGITS+2),h=parseFloat(h)>0?h:S(Te.DIGITS+4),h=parseFloat(h)>0?h:S(Te.DIGITS+6),h=parseFloat(h)>0?h:S(Te.DIGITS+10),parseFloat(h)>0?h:S(Te.DIGITS+14)};Se();var Up=`.dapp-core-component__tokenSelect-module__label {
  display: none;
}

.dapp-core-component__tokenSelect-module__select {
  width: auto;
  margin-left: auto;
  position: relative;
}
.dapp-core-component__tokenSelect-module__select.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
  background-color: var(--dapp-form-bg);
  border: transparent;
  border-radius: var(--dapp-form-input-border-radius);
  width: 8rem;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
    margin-left: 0.2rem;
    width: 11rem;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__indicator svg {
  fill: var(--dapp-form-select-indicator-fill-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
  line-height: 1.5;
  font-size: 1rem;
  height: 3.625rem;
  padding: 4px 0 4px 10px;
  flex: 1;
  cursor: pointer;
  display: flex;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
    padding-left: 4px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
  width: 40px;
  height: 40px;
  max-width: 40px;
  min-width: 40px;
  margin-right: 8px;
  flex: 1;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  justify-content: center;
  overflow: hidden;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon img {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__asset .dapp-core-component__tokenSelect-module__diamond {
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
    display: none;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload {
  min-width: 0;
  flex: 1;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper > [class*=css] {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color);
  font-size: 16px;
  margin: 0;
  transition: all 200ms ease;
  font-weight: 300;
  white-space: normal;
  left: 0;
  right: 0;
  line-height: 1.25;
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  top: auto;
  transform: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single + div {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single.dapp-core-component__tokenSelect-module__focused {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown {
  padding: 0;
  margin: 0;
  display: flex;
  line-height: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input {
  margin: 0 !important;
  min-height: 20px !important;
  background-color: transparent !important;
  font-size: 16px !important;
  border: none !important;
  color: var(--dapp-form-select-input-color) !important;
  line-height: 1.25 !important;
  border-radius: 0 !important;
  min-width: 100% !important;
  font-weight: 300 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:after {
  content: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:focus, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:hover {
  opacity: 1 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  color: var(--dapp-form-label-color);
  font-size: 12px;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: block;
  white-space: nowrap;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator {
  cursor: pointer;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator svg {
  transition: all 200ms ease;
  fill: var(--dapp-form-select-indicator-fill);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator.dapp-core-component__tokenSelect-module__expanded svg {
  transform: rotateZ(180deg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator:hover svg {
  fill: var(--dapp-form-select-indicator-fill-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__loading {
  height: 150px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu {
  border: 1px solid var(--dapp-form-select-menu-border);
  border-radius: 6px;
  width: auto;
  right: -1px;
  overflow: hidden;
  background-color: var(--dapp-form-select-option-bg);
  z-index: 99999;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list {
  background-color: var(--dapp-form-select-menu-bg);
  max-height: 260px;
  padding: 0;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track:hover, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-corner {
  background-color: var(--dapp-form-select-menu-scroll-track);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar:horizontal {
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:horizontal {
  border-radius: var(--dapp-form-input-border-radius);
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2.5px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:hover {
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-resizer {
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0;
  background-color: var(--dapp-form-select-option-bg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected {
  background-color: var(--dapp-form-select-option-bg-selected);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  margin-right: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond {
  font-size: 24px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond path {
  fill: #fff;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
  text-align: left;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value {
  color: var(--dapp-form-select-option-color);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value strong,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value strong {
  font-weight: 900;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__price,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  margin-top: 4px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  text-align: right;
  margin-left: 16px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__children {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__ticker {
  display: flex;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Up));var ke={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},{default:Ro}=(sp(),Lo(Io)),Tp=({RewaIcon:_,TokenTickerIcon:i,showBalanceUsdValue:l,showTokenPrice:g})=>f=>{var S,h,r,T;let{data:w,isSelected:B,isFocused:k,isDisabled:E,selectProps:C}=f,u=w,{isRewa:m}=(0,yp.getIdentifierType)(u.value),s=u.token.assets?u.token.assets.svgUrl:null,d=Bp({amount:u.token.balance,decimals:u.token.decimals||gp.DECIMALS,addCommas:!0}),v=(h=(S=u.token)==null?void 0:S.usdPrice)==null?void 0:h.toString(),y=(T=(r=u.token)==null?void 0:r.valueUSD)==null?void 0:T.toString();return te.default.createElement("div",{"data-testid":`${f.value}-option`},te.default.createElement(wp.components.Option,pp(Bo({},f),{className:(0,Sp.default)(ke.option,{[ke.selected]:B||k,[ke.disabled]:E})}),te.default.createElement("div",{className:ke.image},m?te.default.createElement("span",{className:ke.icon},_?te.default.createElement(_,null):te.default.createElement(Ro,null)):s?te.default.createElement("img",{src:s,className:ke.icon}):te.default.createElement("span",{className:ke.icon},te.default.createElement(hp.FontAwesomeIcon,{icon:fp.faDiamond,className:ke.diamond}))),te.default.createElement("div",{className:ke.info},te.default.createElement("div",{className:ke.left},te.default.createElement("div",{className:ke.ticker},te.default.createElement("span",{className:ke.value},C.inputValue?te.default.createElement(xp,{text:u.token.ticker,highlight:C.inputValue}):u.token.ticker),i&&te.default.createElement(i,{token:u.token})),g&&te.default.createElement("small",{className:ke.price},v)),te.default.createElement("div",{className:ke.right},te.default.createElement("span",{className:ke.value},d),l&&y&&te.default.createElement(kp.UsdValue,{usd:1,decimals:4,amount:y,"data-testid":"token-price-usd-value",className:ke.price,addEqualSign:!1}))),te.default.createElement("div",{className:ke.children},f.children)))};});var Vo=be((ll,Yo)=>{"use strict";ee();var Op=Object.create,Ze=Object.defineProperty,Lp=Object.defineProperties,Ip=Object.getOwnPropertyDescriptor,Cp=Object.getOwnPropertyDescriptors,jp=Object.getOwnPropertyNames,zo=Object.getOwnPropertySymbols,Rp=Object.getPrototypeOf,Do=Object.prototype.hasOwnProperty,Pp=Object.prototype.propertyIsEnumerable,No=(_,i,l)=>i in _?Ze(_,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):_[i]=l,Mp=(_,i)=>{for(var l in i||(i={}))Do.call(i,l)&&No(_,l,i[l]);if(zo)for(var l of zo(i))Pp.call(i,l)&&No(_,l,i[l]);return _},zp=(_,i)=>Lp(_,Cp(i)),Np=(_,i)=>()=>(_&&(i=_(_=0)),i),it=(_,i)=>()=>(i||_((i={exports:{}}).exports,i),i.exports),Dp=(_,i)=>{for(var l in i)Ze(_,l,{get:i[l],enumerable:!0})},Fo=(_,i,l,g)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of jp(i))!Do.call(_,f)&&f!==l&&Ze(_,f,{get:()=>i[f],enumerable:!(g=Ip(i,f))||g.enumerable});return _},lt=(_,i,l)=>(l=_!=null?Op(Rp(_)):{},Fo(i||!_||!_.__esModule?Ze(l,"default",{value:_,enumerable:!0}):l,_)),Fp=_=>Fo(Ze({},"__esModule",{value:!0}),_),qp=it(_=>{"use strict";Pe(),_.byteLength=T,_.toByteArray=B,_.fromByteArray=C;var i=[],l=[],g=typeof Uint8Array!="undefined"?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(S=0,h=f.length;S<h;++S)i[S]=f[S],l[f.charCodeAt(S)]=S;var S,h;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function r(u){var m=u.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var s=u.indexOf("=");s===-1&&(s=m);var d=s===m?0:4-s%4;return[s,d]}function T(u){var m=r(u),s=m[0],d=m[1];return(s+d)*3/4-d}function w(u,m,s){return(m+s)*3/4-s}function B(u){var m,s=r(u),d=s[0],v=s[1],y=new g(w(u,d,v)),j=0,P=v>0?d-4:d,L;for(L=0;L<P;L+=4)m=l[u.charCodeAt(L)]<<18|l[u.charCodeAt(L+1)]<<12|l[u.charCodeAt(L+2)]<<6|l[u.charCodeAt(L+3)],y[j++]=m>>16&255,y[j++]=m>>8&255,y[j++]=m&255;return v===2&&(m=l[u.charCodeAt(L)]<<2|l[u.charCodeAt(L+1)]>>4,y[j++]=m&255),v===1&&(m=l[u.charCodeAt(L)]<<10|l[u.charCodeAt(L+1)]<<4|l[u.charCodeAt(L+2)]>>2,y[j++]=m>>8&255,y[j++]=m&255),y}function k(u){return i[u>>18&63]+i[u>>12&63]+i[u>>6&63]+i[u&63]}function E(u,m,s){for(var d,v=[],y=m;y<s;y+=3)d=(u[y]<<16&16711680)+(u[y+1]<<8&65280)+(u[y+2]&255),v.push(k(d));return v.join("")}function C(u){for(var m,s=u.length,d=s%3,v=[],y=16383,j=0,P=s-d;j<P;j+=y)v.push(E(u,j,j+y>P?P:j+y));return d===1?(m=u[s-1],v.push(i[m>>2]+i[m<<4&63]+"==")):d===2&&(m=(u[s-2]<<8)+u[s-1],v.push(i[m>>10]+i[m>>4&63]+i[m<<2&63]+"=")),v.join("")}}),Yp=it(_=>{Pe(),_.read=function(i,l,g,f,S){var h,r,T=S*8-f-1,w=(1<<T)-1,B=w>>1,k=-7,E=g?S-1:0,C=g?-1:1,u=i[l+E];for(E+=C,h=u&(1<<-k)-1,u>>=-k,k+=T;k>0;h=h*256+i[l+E],E+=C,k-=8);for(r=h&(1<<-k)-1,h>>=-k,k+=f;k>0;r=r*256+i[l+E],E+=C,k-=8);if(h===0)h=1-B;else{if(h===w)return r?NaN:(u?-1:1)*(1/0);r=r+Math.pow(2,f),h=h-B}return(u?-1:1)*r*Math.pow(2,h-f)},_.write=function(i,l,g,f,S,h){var r,T,w,B=h*8-S-1,k=(1<<B)-1,E=k>>1,C=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=f?0:h-1,m=f?1:-1,s=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(T=isNaN(l)?1:0,r=k):(r=Math.floor(Math.log(l)/Math.LN2),l*(w=Math.pow(2,-r))<1&&(r--,w*=2),r+E>=1?l+=C/w:l+=C*Math.pow(2,1-E),l*w>=2&&(r++,w/=2),r+E>=k?(T=0,r=k):r+E>=1?(T=(l*w-1)*Math.pow(2,S),r=r+E):(T=l*Math.pow(2,E-1)*Math.pow(2,S),r=0));S>=8;i[g+u]=T&255,u+=m,T/=256,S-=8);for(r=r<<S|T,B+=S;B>0;i[g+u]=r&255,u+=m,r/=256,B-=8);i[g+u-m]|=s*128}}),Vp=it(_=>{"use strict";Pe();var i=qp(),l=Yp(),g=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=v,_.INSPECT_MAX_BYTES=50;var f=2147483647;_.kMaxLength=f,r.TYPED_ARRAY_SUPPORT=S(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function S(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function h(e){if(e>f)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return T(e,t,o)}r.poolSize=8192;function T(e,t,o){if(typeof e=="string")return E(e,t);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return m(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var c=s(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return T(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function w(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return w(e),e<=0?h(e):t!==void 0?typeof o=="string"?h(e).fill(t,o):h(e).fill(t):h(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return w(e),h(e<0?0:d(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function E(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=y(e,t)|0,n=h(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function C(e){for(var t=e.length<0?0:d(e.length)|0,o=h(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function u(e){if(N(e,Uint8Array)){var t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return C(e)}function m(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function s(e){if(r.isBuffer(e)){var t=d(e.length)|0,o=h(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?h(0):C(e);if(e.type==="Buffer"&&Array.isArray(e.data))return C(e.data)}function d(e){if(e>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return e|0}function v(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),N(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,p=Math.min(o,n);c<p;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var p=e[o];if(N(p,Uint8Array))c+p.length>n.length?r.from(p).copy(n,c):Uint8Array.prototype.set.call(n,p,c);else if(r.isBuffer(p))p.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return n};function y(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return J(e).length;default:if(c)return n?-1:Y(e).length;t=(""+t).toLowerCase(),c=!0}}r.byteLength=y;function j(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return ue(this,t,o);case"utf8":case"utf-8":return Z(this,t,o);case"ascii":return _e(this,t,o);case"latin1":case"binary":return ae(this,t,o);case"base64":return le(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return de(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function P(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)P(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Z(this,0,e):j.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},g&&(r.prototype[g]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,c){if(N(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var p=c-n,a=o-t,b=Math.min(p,a),O=this.slice(n,c),x=e.slice(t,o),A=0;A<b;++A)if(O[A]!==x[A]){p=O[A],a=x[A];break}return p<a?-1:a<p?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:X(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):X(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function X(e,t,o,n,c){var p=1,a=e.length,b=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;p=2,a/=2,b/=2,o/=2}function O(K,Q){return p===1?K[Q]:K.readUInt16BE(Q*p)}var x;if(c){var A=-1;for(x=o;x<a;x++)if(O(e,x)===O(t,A===-1?0:x-A)){if(A===-1&&(A=x),x-A+1===b)return A*p}else A!==-1&&(x-=x-A),A=-1}else for(o+b>a&&(o=a-b),x=o;x>=0;x--){for(var I=!0,F=0;F<b;F++)if(O(e,x+F)!==O(t,F)){I=!1;break}if(I)return x}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function oe(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var p=t.length;n>p/2&&(n=p/2);for(var a=0;a<n;++a){var b=parseInt(t.substr(a*2,2),16);if(V(b))return a;e[o+a]=b}return a}function ne(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function re(e,t,o,n){return D(fe(t),e,o,n)}function ce(e,t,o,n){return D(J(t),e,o,n)}function pe(e,t,o,n){return D(he(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return oe(this,e,t,o);case"utf8":case"utf-8":return ne(this,e,t,o);case"ascii":case"latin1":case"binary":return re(this,e,t,o);case"base64":return ce(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,e,t,o);default:if(p)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function le(e,t,o){return t===0&&o===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,o))}function Z(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var p=e[c],a=null,b=p>239?4:p>223?3:p>191?2:1;if(c+b<=o){var O,x,A,I;switch(b){case 1:p<128&&(a=p);break;case 2:O=e[c+1],(O&192)===128&&(I=(p&31)<<6|O&63,I>127&&(a=I));break;case 3:O=e[c+1],x=e[c+2],(O&192)===128&&(x&192)===128&&(I=(p&15)<<12|(O&63)<<6|x&63,I>2047&&(I<55296||I>57343)&&(a=I));break;case 4:O=e[c+1],x=e[c+2],A=e[c+3],(O&192)===128&&(x&192)===128&&(A&192)===128&&(I=(p&15)<<18|(O&63)<<12|(x&63)<<6|A&63,I>65535&&I<1114112&&(a=I))}}a===null?(a=65533,b=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),c+=b}return ie(n)}var W=4096;function ie(e){var t=e.length;if(t<=W)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=W));return o}function _e(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function ae(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function ue(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",p=t;p<o;++p)c+=ge[e[p]];return c}function de(e,t,o){for(var n=e.slice(t,o),c="",p=0;p<n.length-1;p+=2)c+=String.fromCharCode(n[p]+n[p+1]*256);return c}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function U(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||U(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=this[e],c=1,p=0;++p<t&&(c*=256);)n+=this[e+p]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||U(e,t,this.length);for(var n=t,c=1,p=this[e+--n];n>0&&(c*=256);)p+=this[e+--n]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*t)),p},r.prototype.readInt8=function(e,t){return e=e>>>0,t||U(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||U(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||U(e,4,this.length),l.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||U(e,8,this.length),l.read(this,e,!1,52,8)};function R(e,t,o,n,c,p){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<p)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=1,a=0;for(this[t]=e&255;++a<o&&(p*=256);)this[t+a]=e/p&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;R(this,e,t,o,c,0)}var p=o-1,a=1;for(this[t+p]=e&255;--p>=0&&(a*=256);)this[t+p]=e/a&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=0,a=1,b=0;for(this[t]=e&255;++p<o&&(a*=256);)e<0&&b===0&&this[t+p-1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);R(this,e,t,o,c-1,-c)}var p=o-1,a=1,b=0;for(this[t+p]=e&255;--p>=0&&(a*=256);)e<0&&b===0&&this[t+p+1]!==0&&(b=1),this[t+p]=(e/a>>0)-b&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||R(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,c,p){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function G(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),l.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return G(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return G(this,e,t,!1,o)};function H(e,t,o,n,c){return t=+t,o=o>>>0,c||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),l.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return H(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var p;if(typeof e=="number")for(p=t;p<o;++p)this[p]=e;else{var a=r.isBuffer(e)?e:r.from(e,n),b=a.length;if(b===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<o-t;++p)this[p+t]=a[p%b]}return this};var me=/[^+/0-9A-Za-z-_]/g;function se(e){if(e=e.split("=")[0],e=e.trim().replace(me,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,c=null,p=[],a=0;a<n;++a){if(o=e.charCodeAt(a),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&p.push(239,191,189);continue}else if(a+1===n){(t-=3)>-1&&p.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&p.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&p.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;p.push(o)}else if(o<2048){if((t-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function fe(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function he(e,t){for(var o,n,c,p=[],a=0;a<e.length&&!((t-=2)<0);++a)o=e.charCodeAt(a),n=o>>8,c=o%256,p.push(c),p.push(n);return p}function J(e){return i.toByteArray(se(e))}function D(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function N(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ge=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),Xp=it((_,i)=>{Pe();var l=i.exports={},g,f;function S(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=S}catch(d){g=S}try{typeof clearTimeout=="function"?f=clearTimeout:f=h}catch(d){f=h}})();function r(d){if(g===setTimeout)return setTimeout(d,0);if((g===S||!g)&&setTimeout)return g=setTimeout,setTimeout(d,0);try{return g(d,0)}catch(v){try{return g.call(null,d,0)}catch(y){return g.call(this,d,0)}}}function T(d){if(f===clearTimeout)return clearTimeout(d);if((f===h||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(d);try{return f(d)}catch(v){try{return f.call(null,d)}catch(y){return f.call(this,d)}}}var w=[],B=!1,k,E=-1;function C(){!B||!k||(B=!1,k.length?w=k.concat(w):E=-1,w.length&&u())}function u(){if(!B){var d=r(C);B=!0;for(var v=w.length;v;){for(k=w,w=[];++E<v;)k&&k[E].run();E=-1,v=w.length}k=null,B=!1,T(d)}}l.nextTick=function(d){var v=new Array(arguments.length-1);if(arguments.length>1)for(var y=1;y<arguments.length;y++)v[y-1]=arguments[y];w.push(new m(d,v)),w.length===1&&!B&&r(u)};function m(d,v){this.fun=d,this.array=v}m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function s(){}l.on=s,l.addListener=s,l.once=s,l.off=s,l.removeListener=s,l.removeAllListeners=s,l.emit=s,l.prependListener=s,l.prependOnceListener=s,l.listeners=function(d){return[]},l.binding=function(d){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(d){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Zp,Wp,$p,Pe=Np(()=>{Zp=lt(Vp()),Wp=lt(Xp()),$p=function(_){function i(){var g=this||self;return delete _.prototype.__magic__,g}if(typeof globalThis=="object")return globalThis;if(this)return i();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),qo={};Dp(qo,{getSingleValue:()=>Kp});Yo.exports=Fp(qo);Pe();var ft=lt(q("react")),Gp=lt(q("classnames")),Hp=q("react-select");Pe();var Jp=`.dapp-core-component__tokenSelect-module__label {
  display: none;
}

.dapp-core-component__tokenSelect-module__select {
  width: auto;
  margin-left: auto;
  position: relative;
}
.dapp-core-component__tokenSelect-module__select.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
  background-color: var(--dapp-form-bg);
  border: transparent;
  border-radius: var(--dapp-form-input-border-radius);
  width: 8rem;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
    margin-left: 0.2rem;
    width: 11rem;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__indicator svg {
  fill: var(--dapp-form-select-indicator-fill-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
  line-height: 1.5;
  font-size: 1rem;
  height: 3.625rem;
  padding: 4px 0 4px 10px;
  flex: 1;
  cursor: pointer;
  display: flex;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
    padding-left: 4px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
  width: 40px;
  height: 40px;
  max-width: 40px;
  min-width: 40px;
  margin-right: 8px;
  flex: 1;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  justify-content: center;
  overflow: hidden;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon img {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__asset .dapp-core-component__tokenSelect-module__diamond {
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
    display: none;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload {
  min-width: 0;
  flex: 1;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper > [class*=css] {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color);
  font-size: 16px;
  margin: 0;
  transition: all 200ms ease;
  font-weight: 300;
  white-space: normal;
  left: 0;
  right: 0;
  line-height: 1.25;
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  top: auto;
  transform: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single + div {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single.dapp-core-component__tokenSelect-module__focused {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown {
  padding: 0;
  margin: 0;
  display: flex;
  line-height: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input {
  margin: 0 !important;
  min-height: 20px !important;
  background-color: transparent !important;
  font-size: 16px !important;
  border: none !important;
  color: var(--dapp-form-select-input-color) !important;
  line-height: 1.25 !important;
  border-radius: 0 !important;
  min-width: 100% !important;
  font-weight: 300 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:after {
  content: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:focus, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:hover {
  opacity: 1 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  color: var(--dapp-form-label-color);
  font-size: 12px;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: block;
  white-space: nowrap;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator {
  cursor: pointer;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator svg {
  transition: all 200ms ease;
  fill: var(--dapp-form-select-indicator-fill);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator.dapp-core-component__tokenSelect-module__expanded svg {
  transform: rotateZ(180deg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator:hover svg {
  fill: var(--dapp-form-select-indicator-fill-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__loading {
  height: 150px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu {
  border: 1px solid var(--dapp-form-select-menu-border);
  border-radius: 6px;
  width: auto;
  right: -1px;
  overflow: hidden;
  background-color: var(--dapp-form-select-option-bg);
  z-index: 99999;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list {
  background-color: var(--dapp-form-select-menu-bg);
  max-height: 260px;
  padding: 0;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track:hover, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-corner {
  background-color: var(--dapp-form-select-menu-scroll-track);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar:horizontal {
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:horizontal {
  border-radius: var(--dapp-form-input-border-radius);
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2.5px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:hover {
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-resizer {
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0;
  background-color: var(--dapp-form-select-option-bg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected {
  background-color: var(--dapp-form-select-option-bg-selected);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  margin-right: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond {
  font-size: 24px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond path {
  fill: #fff;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
  text-align: left;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value {
  color: var(--dapp-form-select-option-color);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value strong,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value strong {
  font-weight: 900;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__price,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  margin-top: 4px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  text-align: right;
  margin-left: 16px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__children {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__ticker {
  display: flex;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jp));var ht={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Kp=_=>i=>{let{selectProps:l,children:g}=i,f=l.value;return ft.default.createElement(Hp.components.SingleValue,zp(Mp({},i),{className:(0,Gp.default)(ht.single,{[ht.focused]:i.selectProps.menuIsOpen})}),ft.default.createElement("div",{className:ht.ticker},g,_&&ft.default.createElement(_,{token:f==null?void 0:f.token})))};});var M={};ee();z(M,ve(vt()));z(M,ve(Tt()));z(M,ve(Mt()));z(M,ve(Vt()));z(M,ve(Kt()));z(M,ve(po()));z(M,ve(bo()));z(M,ve(Mo()));z(M,ve(Vo()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
