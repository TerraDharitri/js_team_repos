"use strict";import{a as q,b as qe,d as H,e as We,f as J}from"../../../../../../__chunks__/chunk-JH2LJGTQ.js";var Ae=qe((ao,Ee)=>{"use strict";J();var Xe=Object.create,Y=Object.defineProperty,He=Object.defineProperties,Je=Object.getOwnPropertyDescriptor,Ve=Object.getOwnPropertyDescriptors,Ge=Object.getOwnPropertyNames,ie=Object.getOwnPropertySymbols,Ke=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,ae=(_,s,p)=>s in _?Y(_,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):_[s]=p,ye=(_,s)=>{for(var p in s||(s={}))ue.call(s,p)&&ae(_,p,s[p]);if(ie)for(var p of ie(s))Qe.call(s,p)&&ae(_,p,s[p]);return _},$e=(_,s)=>He(_,Ve(s)),ve=(_,s)=>()=>(_&&(s=_(_=0)),s),K=(_,s)=>()=>(s||_((s={exports:{}}).exports,s),s.exports),fe=(_,s)=>{for(var p in s)Y(_,p,{get:s[p],enumerable:!0})},he=(_,s,p,g)=>{if(s&&typeof s=="object"||typeof s=="function")for(let m of Ge(s))!ue.call(_,m)&&m!==p&&Y(_,m,{get:()=>s[m],enumerable:!(g=Je(s,m))||g.enumerable});return _},W=(_,s,p)=>(p=_!=null?Xe(Ke(_)):{},he(s||!_||!_.__esModule?Y(p,"default",{value:_,enumerable:!0}):p,_)),ge=_=>he(Y({},"__esModule",{value:!0}),_),eo=K(_=>{"use strict";F(),_.byteLength=w,_.toByteArray=U,_.fromByteArray=M;var s=[],p=[],g=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(y=0,f=m.length;y<f;++y)s[y]=m[y],p[m.charCodeAt(y)]=y;var y,f;p["-".charCodeAt(0)]=62,p["_".charCodeAt(0)]=63;function c(a){var u=a.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=a.indexOf("=");v===-1&&(v=u);var d=v===u?0:4-v%4;return[v,d]}function w(a){var u=c(a),v=u[0],d=u[1];return(v+d)*3/4-d}function x(a,u,v){return(u+v)*3/4-v}function U(a){var u,v=c(a),d=v[0],A=v[1],b=new g(x(a,d,A)),j=0,R=A>0?d-4:d,I;for(I=0;I<R;I+=4)u=p[a.charCodeAt(I)]<<18|p[a.charCodeAt(I+1)]<<12|p[a.charCodeAt(I+2)]<<6|p[a.charCodeAt(I+3)],b[j++]=u>>16&255,b[j++]=u>>8&255,b[j++]=u&255;return A===2&&(u=p[a.charCodeAt(I)]<<2|p[a.charCodeAt(I+1)]>>4,b[j++]=u&255),A===1&&(u=p[a.charCodeAt(I)]<<10|p[a.charCodeAt(I+1)]<<4|p[a.charCodeAt(I+2)]>>2,b[j++]=u>>8&255,b[j++]=u&255),b}function h(a){return s[a>>18&63]+s[a>>12&63]+s[a>>6&63]+s[a&63]}function B(a,u,v){for(var d,A=[],b=u;b<v;b+=3)d=(a[b]<<16&16711680)+(a[b+1]<<8&65280)+(a[b+2]&255),A.push(h(d));return A.join("")}function M(a){for(var u,v=a.length,d=v%3,A=[],b=16383,j=0,R=v-d;j<R;j+=b)A.push(B(a,j,j+b>R?R:j+b));return d===1?(u=a[v-1],A.push(s[u>>2]+s[u<<4&63]+"==")):d===2&&(u=(a[v-2]<<8)+a[v-1],A.push(s[u>>10]+s[u>>4&63]+s[u<<2&63]+"=")),A.join("")}}),oo=K(_=>{F(),_.read=function(s,p,g,m,y){var f,c,w=y*8-m-1,x=(1<<w)-1,U=x>>1,h=-7,B=g?y-1:0,M=g?-1:1,a=s[p+B];for(B+=M,f=a&(1<<-h)-1,a>>=-h,h+=w;h>0;f=f*256+s[p+B],B+=M,h-=8);for(c=f&(1<<-h)-1,f>>=-h,h+=m;h>0;c=c*256+s[p+B],B+=M,h-=8);if(f===0)f=1-U;else{if(f===x)return c?NaN:(a?-1:1)*(1/0);c=c+Math.pow(2,m),f=f-U}return(a?-1:1)*c*Math.pow(2,f-m)},_.write=function(s,p,g,m,y,f){var c,w,x,U=f*8-y-1,h=(1<<U)-1,B=h>>1,M=y===23?Math.pow(2,-24)-Math.pow(2,-77):0,a=m?0:f-1,u=m?1:-1,v=p<0||p===0&&1/p<0?1:0;for(p=Math.abs(p),isNaN(p)||p===1/0?(w=isNaN(p)?1:0,c=h):(c=Math.floor(Math.log(p)/Math.LN2),p*(x=Math.pow(2,-c))<1&&(c--,x*=2),c+B>=1?p+=M/x:p+=M*Math.pow(2,1-B),p*x>=2&&(c++,x/=2),c+B>=h?(w=0,c=h):c+B>=1?(w=(p*x-1)*Math.pow(2,y),c=c+B):(w=p*Math.pow(2,B-1)*Math.pow(2,y),c=0));y>=8;s[g+a]=w&255,a+=u,w/=256,y-=8);for(c=c<<y|w,U+=y;U>0;s[g+a]=c&255,a+=u,c/=256,U-=8);s[g+a-u]|=v*128}}),to=K(_=>{"use strict";F();var s=eo(),p=oo(),g=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=c,_.SlowBuffer=A,_.INSPECT_MAX_BYTES=50;var m=2147483647;_.kMaxLength=m,c.TYPED_ARRAY_SUPPORT=y(),!c.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}});function f(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,c.prototype),o}function c(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return h(e)}return w(e,o,t)}c.poolSize=8192;function w(e,o,t){if(typeof e=="string")return B(e,o);if(ArrayBuffer.isView(e))return a(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return u(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return c.from(r,o,t);var n=v(e);if(n)return n;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return c.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}c.from=function(e,o,t){return w(e,o,t)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array);function x(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function U(e,o,t){return x(e),e<=0?f(e):o!==void 0?typeof t=="string"?f(e).fill(o,t):f(e).fill(o):f(e)}c.alloc=function(e,o,t){return U(e,o,t)};function h(e){return x(e),f(e<0?0:d(e)|0)}c.allocUnsafe=function(e){return h(e)},c.allocUnsafeSlow=function(e){return h(e)};function B(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!c.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=b(e,o)|0,r=f(t),n=r.write(e,o);return n!==t&&(r=r.slice(0,n)),r}function M(e){for(var o=e.length<0?0:d(e.length)|0,t=f(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function a(e){if(N(e,Uint8Array)){var o=new Uint8Array(e);return u(o.buffer,o.byteOffset,o.byteLength)}return M(e)}function u(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,c.prototype),r}function v(e){if(c.isBuffer(e)){var o=d(e.length)|0,t=f(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||$(e.length)?f(0):M(e);if(e.type==="Buffer"&&Array.isArray(e.data))return M(e.data)}function d(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function A(e){return+e!=e&&(e=0),c.alloc(+e)}c.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==c.prototype},c.compare=function(e,o){if(N(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),N(o,Uint8Array)&&(o=c.from(o,o.offset,o.byteLength)),!c.isBuffer(e)||!c.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,n=0,l=Math.min(t,r);n<l;++n)if(e[n]!==o[n]){t=e[n],r=o[n];break}return t<r?-1:r<t?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return c.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=c.allocUnsafe(o),n=0;for(t=0;t<e.length;++t){var l=e[t];if(N(l,Uint8Array))n+l.length>r.length?c.from(l).copy(r,n):Uint8Array.prototype.set.call(r,l,n);else if(c.isBuffer(l))l.copy(r,n);else throw new TypeError('"list" argument must be an Array of Buffers');n+=l.length}return r};function b(e,o){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var n=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Q(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return pe(e).length;default:if(n)return r?-1:Q(e).length;o=(""+o).toLowerCase(),n=!0}}c.byteLength=b;function j(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Me(this,o,t);case"utf8":case"utf-8":return te(this,o,t);case"ascii":return Ie(this,o,t);case"latin1":case"binary":return Ce(this,o,t);case"base64":return Oe(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return je(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}c.prototype._isBuffer=!0;function R(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}c.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)R(this,o,o+1);return this},c.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)R(this,o,o+3),R(this,o+1,o+2);return this},c.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)R(this,o,o+7),R(this,o+1,o+6),R(this,o+2,o+5),R(this,o+3,o+4);return this},c.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?te(this,0,e):j.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:c.compare(this,e)===0},c.prototype.inspect=function(){var e="",o=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},g&&(c.prototype[g]=c.prototype.inspect),c.prototype.compare=function(e,o,t,r,n){if(N(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),n===void 0&&(n=this.length),o<0||t>e.length||r<0||n>this.length)throw new RangeError("out of range index");if(r>=n&&o>=t)return 0;if(r>=n)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,n>>>=0,this===e)return 0;for(var l=n-r,i=t-o,E=Math.min(l,i),O=this.slice(r,n),S=e.slice(o,t),T=0;T<E;++T)if(O[T]!==S[T]){l=O[T],i=S[T];break}return l<i?-1:i<l?1:0};function I(e,o,t,r,n){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,$(t)&&(t=n?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(n)return-1;t=e.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof o=="string"&&(o=c.from(o,r)),c.isBuffer(o))return o.length===0?-1:oe(e,o,t,r,n);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):oe(e,[o],t,r,n);throw new TypeError("val must be string, number or Buffer")}function oe(e,o,t,r,n){var l=1,i=e.length,E=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;l=2,i/=2,E/=2,t/=2}function O(se,_e){return l===1?se[_e]:se.readUInt16BE(_e*l)}var S;if(n){var T=-1;for(S=t;S<i;S++)if(O(e,S)===O(o,T===-1?0:S-T)){if(T===-1&&(T=S),S-T+1===E)return T*l}else T!==-1&&(S-=S-T),T=-1}else for(t+E>i&&(t=i-E),S=t;S>=0;S--){for(var C=!0,X=0;X<E;X++)if(O(e,S+X)!==O(o,X)){C=!1;break}if(C)return S}return-1}c.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},c.prototype.indexOf=function(e,o,t){return I(this,e,o,t,!0)},c.prototype.lastIndexOf=function(e,o,t){return I(this,e,o,t,!1)};function Be(e,o,t,r){t=Number(t)||0;var n=e.length-t;r?(r=Number(r),r>n&&(r=n)):r=n;var l=o.length;r>l/2&&(r=l/2);for(var i=0;i<r;++i){var E=parseInt(o.substr(i*2,2),16);if($(E))return i;e[t+i]=E}return i}function Se(e,o,t,r){return Z(Q(o,e.length-t),e,t,r)}function Ue(e,o,t,r){return Z(ze(o),e,t,r)}function Te(e,o,t,r){return Z(pe(o),e,t,r)}function Le(e,o,t,r){return Z(Ne(o,e.length-t),e,t,r)}c.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var n=this.length-o;if((t===void 0||t>n)&&(t=n),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var l=!1;;)switch(r){case"hex":return Be(this,e,o,t);case"utf8":case"utf-8":return Se(this,e,o,t);case"ascii":case"latin1":case"binary":return Ue(this,e,o,t);case"base64":return Te(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Le(this,e,o,t);default:if(l)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),l=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Oe(e,o,t){return o===0&&t===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(o,t))}function te(e,o,t){t=Math.min(e.length,t);for(var r=[],n=o;n<t;){var l=e[n],i=null,E=l>239?4:l>223?3:l>191?2:1;if(n+E<=t){var O,S,T,C;switch(E){case 1:l<128&&(i=l);break;case 2:O=e[n+1],(O&192)===128&&(C=(l&31)<<6|O&63,C>127&&(i=C));break;case 3:O=e[n+1],S=e[n+2],(O&192)===128&&(S&192)===128&&(C=(l&15)<<12|(O&63)<<6|S&63,C>2047&&(C<55296||C>57343)&&(i=C));break;case 4:O=e[n+1],S=e[n+2],T=e[n+3],(O&192)===128&&(S&192)===128&&(T&192)===128&&(C=(l&15)<<18|(O&63)<<12|(S&63)<<6|T&63,C>65535&&C<1114112&&(i=C))}}i===null?(i=65533,E=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|i&1023),r.push(i),n+=E}return ke(r)}var re=4096;function ke(e){var o=e.length;if(o<=re)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=re));return t}function Ie(e,o,t){var r="";t=Math.min(e.length,t);for(var n=o;n<t;++n)r+=String.fromCharCode(e[n]&127);return r}function Ce(e,o,t){var r="";t=Math.min(e.length,t);for(var n=o;n<t;++n)r+=String.fromCharCode(e[n]);return r}function Me(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var n="",l=o;l<t;++l)n+=Fe[e[l]];return n}function je(e,o,t){for(var r=e.slice(o,t),n="",l=0;l<r.length-1;l+=2)n+=String.fromCharCode(r[l]+r[l+1]*256);return n}c.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,c.prototype),r};function L(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||L(e,o,this.length);for(var r=this[e],n=1,l=0;++l<o&&(n*=256);)r+=this[e+l]*n;return r},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||L(e,o,this.length);for(var r=this[e+--o],n=1;o>0&&(n*=256);)r+=this[e+--o]*n;return r},c.prototype.readUint8=c.prototype.readUInt8=function(e,o){return e=e>>>0,o||L(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||L(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||L(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||L(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||L(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||L(e,o,this.length);for(var r=this[e],n=1,l=0;++l<o&&(n*=256);)r+=this[e+l]*n;return n*=128,r>=n&&(r-=Math.pow(2,8*o)),r},c.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||L(e,o,this.length);for(var r=o,n=1,l=this[e+--r];r>0&&(n*=256);)l+=this[e+--r]*n;return n*=128,l>=n&&(l-=Math.pow(2,8*o)),l},c.prototype.readInt8=function(e,o){return e=e>>>0,o||L(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},c.prototype.readInt16LE=function(e,o){e=e>>>0,o||L(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},c.prototype.readInt16BE=function(e,o){e=e>>>0,o||L(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},c.prototype.readInt32LE=function(e,o){return e=e>>>0,o||L(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,o){return e=e>>>0,o||L(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readFloatLE=function(e,o){return e=e>>>0,o||L(e,4,this.length),p.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,o){return e=e>>>0,o||L(e,4,this.length),p.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||L(e,8,this.length),p.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||L(e,8,this.length),p.read(this,e,!1,52,8)};function P(e,o,t,r,n,l){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>n||o<l)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var n=Math.pow(2,8*t)-1;P(this,e,o,t,n,0)}var l=1,i=0;for(this[o]=e&255;++i<t&&(l*=256);)this[o+i]=e/l&255;return o+t},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var n=Math.pow(2,8*t)-1;P(this,e,o,t,n,0)}var l=t-1,i=1;for(this[o+l]=e&255;--l>=0&&(i*=256);)this[o+l]=e/i&255;return o+t},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,1,255,0),this[o]=e&255,o+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},c.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var n=Math.pow(2,8*t-1);P(this,e,o,t,n-1,-n)}var l=0,i=1,E=0;for(this[o]=e&255;++l<t&&(i*=256);)e<0&&E===0&&this[o+l-1]!==0&&(E=1),this[o+l]=(e/i>>0)-E&255;return o+t},c.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var n=Math.pow(2,8*t-1);P(this,e,o,t,n-1,-n)}var l=t-1,i=1,E=0;for(this[o+l]=e&255;--l>=0&&(i*=256);)e<0&&E===0&&this[o+l+1]!==0&&(E=1),this[o+l]=(e/i>>0)-E&255;return o+t},c.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},c.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},c.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},c.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},c.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ce(e,o,t,r,n,l){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ne(e,o,t,r,n){return o=+o,t=t>>>0,n||ce(e,o,t,4,34028234663852886e22,-34028234663852886e22),p.write(e,o,t,r,23,4),t+4}c.prototype.writeFloatLE=function(e,o,t){return ne(this,e,o,!0,t)},c.prototype.writeFloatBE=function(e,o,t){return ne(this,e,o,!1,t)};function le(e,o,t,r,n){return o=+o,t=t>>>0,n||ce(e,o,t,8,17976931348623157e292,-17976931348623157e292),p.write(e,o,t,r,52,8),t+8}c.prototype.writeDoubleLE=function(e,o,t){return le(this,e,o,!0,t)},c.prototype.writeDoubleBE=function(e,o,t){return le(this,e,o,!1,t)},c.prototype.copy=function(e,o,t,r){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var n=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),n},c.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var n=e.charCodeAt(0);(r==="utf8"&&n<128||r==="latin1")&&(e=n)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var l;if(typeof e=="number")for(l=o;l<t;++l)this[l]=e;else{var i=c.isBuffer(e)?e:c.from(e,r),E=i.length;if(E===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(l=0;l<t-o;++l)this[l+o]=i[l%E]}return this};var Pe=/[^+/0-9A-Za-z-_]/g;function Re(e){if(e=e.split("=")[0],e=e.trim().replace(Pe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Q(e,o){o=o||1/0;for(var t,r=e.length,n=null,l=[],i=0;i<r;++i){if(t=e.charCodeAt(i),t>55295&&t<57344){if(!n){if(t>56319){(o-=3)>-1&&l.push(239,191,189);continue}else if(i+1===r){(o-=3)>-1&&l.push(239,191,189);continue}n=t;continue}if(t<56320){(o-=3)>-1&&l.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(o-=3)>-1&&l.push(239,191,189);if(n=null,t<128){if((o-=1)<0)break;l.push(t)}else if(t<2048){if((o-=2)<0)break;l.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;l.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;l.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return l}function ze(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Ne(e,o){for(var t,r,n,l=[],i=0;i<e.length&&!((o-=2)<0);++i)t=e.charCodeAt(i),r=t>>8,n=t%256,l.push(n),l.push(r);return l}function pe(e){return s.toByteArray(Re(e))}function Z(e,o,t,r){for(var n=0;n<r&&!(n+t>=o.length||n>=e.length);++n)o[n+t]=e[n];return n}function N(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function $(e){return e!==e}var Fe=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,n=0;n<16;++n)o[r+n]=e[t]+e[n];return o}()}),ro=K((_,s)=>{F();var p=s.exports={},g,m;function y(){throw new Error("setTimeout has not been defined")}function f(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=y}catch(d){g=y}try{typeof clearTimeout=="function"?m=clearTimeout:m=f}catch(d){m=f}})();function c(d){if(g===setTimeout)return setTimeout(d,0);if((g===y||!g)&&setTimeout)return g=setTimeout,setTimeout(d,0);try{return g(d,0)}catch(A){try{return g.call(null,d,0)}catch(b){return g.call(this,d,0)}}}function w(d){if(m===clearTimeout)return clearTimeout(d);if((m===f||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(d);try{return m(d)}catch(A){try{return m.call(null,d)}catch(b){return m.call(this,d)}}}var x=[],U=!1,h,B=-1;function M(){!U||!h||(U=!1,h.length?x=h.concat(x):B=-1,x.length&&a())}function a(){if(!U){var d=c(M);U=!0;for(var A=x.length;A;){for(h=x,x=[];++B<A;)h&&h[B].run();B=-1,A=x.length}h=null,U=!1,w(d)}}p.nextTick=function(d){var A=new Array(arguments.length-1);if(arguments.length>1)for(var b=1;b<arguments.length;b++)A[b-1]=arguments[b];x.push(new u(d,A)),x.length===1&&!U&&c(a)};function u(d,A){this.fun=d,this.array=A}u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={};function v(){}p.on=v,p.addListener=v,p.once=v,p.off=v,p.removeListener=v,p.removeAllListeners=v,p.emit=v,p.prependListener=v,p.prependOnceListener=v,p.listeners=function(d){return[]},p.binding=function(d){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(d){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}}),co,no,lo,F=ve(()=>{co=W(to()),no=W(ro()),lo=function(_){function s(){var g=this||self;return delete _.prototype.__magic__,g}if(typeof globalThis=="object")return globalThis;if(this)return s();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:s});var p=__magic__;return p}(Object)}),be={};fe(be,{default:()=>we});var V,me,we,po=ve(()=>{"use strict";F(),V=W(q("react")),me=_=>V.createElement("svg",ye({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},_),V.createElement("g",null,V.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),we=me}),xe={};fe(xe,{MenuList:()=>io});Ee.exports=ge(xe);F();var k=W(q("react")),ee=q("@terradharitri/sdk-dapp/UI/Trim"),G=W(q("classnames")),so=q("react-select");F();var _o=`:root {
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

.dapp-core-component__styles-module__receiver {
  position: relative;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete {
  position: relative;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete input[aria-hidden=true] {
  display: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu {
  left: 0px;
  top: 0px;
  float: left;
  min-width: 10rem;
  font-size: 1rem;
  color: var(--brown);
  text-align: left;
  list-style: none;
  background-color: var(--white);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: var(--dapp-form-input-border-radius);
  z-index: 1000;
  inset: unset;
  max-height: 300px;
  overflow: unset;
  transform: none;
  overflow-x: scroll;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item {
  display: inline-block;
  line-height: 1.5;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: var(--brown);
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  text-decoration: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item:hover, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item.dapp-core-component__styles-module__highlighted {
  color: #16181b;
  text-decoration: none;
  background-color: #e9ecef;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item:first-child {
  margin-top: 0.675rem;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item:last-child {
  margin-bottom: 0.675rem;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item .dapp-core-component__styles-module__trim {
  display: flex;
  align-items: flex-end;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container {
  background-color: var(--body-bg);
  border: 1px solid transparent;
  transition: var(--transition);
  border-radius: 8px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container.dapp-core-component__styles-module__invalid {
  border-color: var(--danger);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container.dapp-core-component__styles-module__focused {
  border-color: var(--primary);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container.dapp-core-component__styles-module__expanded {
  z-index: 3;
  position: relative;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container.dapp-core-component__styles-module__opened + div {
  display: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control {
  background-color: transparent !important;
  border: none;
  box-shadow: none;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value {
  padding: 0;
  display: flex;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single {
  padding: 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: var(--action-color);
  margin: 0;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single.dapp-core-component__styles-module__disabled {
  color: var(--dapp-form-input-color-disabled);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single.dapp-core-component__styles-module__disabled [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single.dapp-core-component__styles-module__disabled [class*=__right] * {
  color: var(--dapp-form-input-color-disabled);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-username {
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-username .dapp-core-component__styles-module__receiver-select-single-username-icon {
  height: 20px;
  width: 20px;
  background: var(--black);
  border-radius: 4px;
  padding: 3px;
  padding-bottom: 2px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim-wrapper {
  display: flex;
  gap: 4px;
  color: var(--placeholder-color);
  align-items: center;
  overflow: hidden;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim-wrapper .dapp-core-component__styles-module__receiver-select-single-trim {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim-wrapper .dapp-core-component__styles-module__receiver-select-single-trim [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim-wrapper .dapp-core-component__styles-module__receiver-select-single-trim [class*=__right] * {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim {
  align-items: center;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--action-color);
  margin-right: 4px;
  font-size: 1rem;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single [class*=__left],
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single [class*=__right] {
  line-height: 17px;
  height: 17px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input:after {
  content: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input.dapp-core-component__styles-module__visible input {
  opacity: 1 !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input.dapp-core-component__styles-module__spaced input {
  padding-left: 36px !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input input {
  flex: 1;
  min-height: auto;
  border-radius: 8px;
  padding: 12px !important;
  line-height: 17px !important;
  font-size: 14px !important;
  opacity: 0 !important;
  color: var(--action-color) !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-spinner {
  margin-right: 12px;
  font-size: 16px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator {
  transition: var(--transition);
  margin-left: -12px;
  z-index: 1;
  pointer-events: all;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator svg path {
  fill: var(--heading-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator:hover svg path {
  fill: var(--heading-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator.dapp-core-component__styles-module__expanded {
  transform: rotateZ(180deg);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator.dapp-core-component__styles-module__hidden {
  display: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu {
  background-color: var(--body-bg);
  border: 2px solid var(--action-bg);
  border-radius: var(--border-radius-low);
  margin: 8px 0 0;
  padding: 4px;
  z-index: 1;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu:before {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  border: 8px solid var(--body-bg);
  left: 0;
  top: 0;
  border-radius: var(--border-radius-low);
  z-index: 1;
  pointer-events: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete {
  font-size: 14px;
  padding: 12px;
  border: 1px solid transparent;
  bottom: calc(100% + 8px - 1px);
  border-right: 0;
  position: absolute;
  pointer-events: none;
  color: var(--placeholder-color);
  left: -1px;
  right: 24px;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete > * {
  max-width: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__left],
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__right],
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__ellipsis] {
  line-height: 17px;
  height: 17px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__right] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__ellipsis] * {
  color: var(--placeholder-color) !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete.dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed {
  text-overflow: ellipsis;
  line-height: 17px;
  overflow: hidden;
  white-space: nowrap;
  display: block;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete.dapp-core-component__styles-module__receiver-select-autocomplete-username {
  padding-left: 36px;
  white-space: nowrap;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-icon {
  min-width: 20px;
  flex: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  height: 20px;
  width: 20px;
  background: var(--black);
  border-radius: 4px;
  padding: 3px;
  padding-bottom: 2px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-icon.dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted {
  opacity: 0.75;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-wrapper [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-wrapper [class*=__right] * {
  color: var(--card-subtitle) !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-collection {
  margin-left: 4px;
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list {
  padding: 0;
  gap: 4px;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list::-webkit-scrollbar {
  width: 12px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list::-webkit-scrollbar-track {
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: var(--border-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list::-webkit-scrollbar-thumb, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list::-webkit-scrollbar-thumb:hover {
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option {
  cursor: pointer;
  line-height: 1.25;
  padding: 12px !important;
  border-radius: 6px;
  background-color: transparent;
  width: calc(100% - 8px);
  margin: 0 4px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:first-child {
  margin-top: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:last-child {
  margin-bottom: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused {
  background-color: var(--action-bg);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--action-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] *, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] * {
  color: var(--action-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name-wrapper, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name-wrapper {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] *, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] * {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-username, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-username {
  color: var(--action-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-collection, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-collection {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover strong, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused strong {
  font-weight: 900 !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper {
  display: flex;
  align-items: center;
  overflow: hidden;
  color: var(--card-subtitle);
  font-size: 1rem;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper * {
  font-size: 1rem !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] * {
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-username {
  font-size: 1rem;
  position: relative;
  padding-left: 28px;
  color: var(--placeholder-color);
  display: flex;
  align-items: center;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-username * {
  white-space: nowrap;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-username .dapp-core-component__styles-module__receiver-select-option-username-icon {
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--black);
  border-radius: 4px;
  left: 0;
  padding: 3px;
  padding-bottom: 2px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--placeholder-color);
  align-items: flex-end;
  display: flex;
  max-width: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] * {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-collection {
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-collection strong {
  color: var(--action-color);
  font-weight: 400;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__found,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__loading {
  top: 0;
  font-size: 12px;
  line-height: 1;
  position: absolute;
  right: 0;
  color: var(--dapp-form-label-color);
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__found .dapp-core-component__styles-module__svg,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__loading .dapp-core-component__styles-module__svg {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_o));var z={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};F();var{default:de}=(po(),ge(be)),io=_=>{let{selectProps:s,focusedOption:p}=_,{value:g,inputValue:m}=s,y=p,f=y?y.label.toLowerCase():null,c=y&&y.label!==y.value,w=(f&&(!g||g&&m)?f.startsWith(m.toLowerCase()):!1)&&y?y.label.replace(y.label.substring(0,m.length),m):null,x=w&&!m,U=w&&m.length<w.length/2,h=w&&Boolean(m)&&U,B=w&&Boolean(m);return k.default.createElement(k.default.Fragment,null,h&&!c&&k.default.createElement("div",{className:(0,G.default)(z.receiverSelectAutocomplete,z.receiverSelectAutocompleteUntrimmed)},w),B&&c&&k.default.createElement("div",{className:(0,G.default)(z.receiverSelectAutocomplete,z.receiverSelectAutocompleteUsername)},k.default.createElement(de,{className:z.receiverSelectAutocompleteIcon}),w,k.default.createElement("span",{className:z.receiverSelectAutocompleteWrapper},"(",k.default.createElement(ee.Trim,{text:y.value}),")")),x&&k.default.createElement("span",{className:(0,G.default)(z.receiverSelectAutocomplete,{[z.receiverSelectAutocompleteUsername]:c})},c?k.default.createElement(k.default.Fragment,null,k.default.createElement("span",null,k.default.createElement(de,{className:(0,G.default)(z.receiverSelectAutocompleteIcon,z.receiverSelectAutocompleteIconMuted)}),y.label),k.default.createElement("span",{className:z.receiverSelectAutocompleteWrapper},"(",k.default.createElement(ee.Trim,{text:y.value}),")")):k.default.createElement(ee.Trim,{text:w})),k.default.createElement(so.components.MenuList,$e(ye({},_),{className:z.receiverSelectList})))};});var D={};J();H(D,We(Ae()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
