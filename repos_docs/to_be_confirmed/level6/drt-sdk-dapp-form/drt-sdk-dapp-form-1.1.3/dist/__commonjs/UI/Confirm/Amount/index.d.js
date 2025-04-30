"use strict";import{a as U,b as We,d as J,e as Ye,f as $}from"../../../../__chunks__/chunk-RGFNPOTZ.js";var Te=We((Lt,ke)=>{"use strict";$();var Je=Object.create,Y=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,He=Object.getOwnPropertyNames,ue=Object.getOwnPropertySymbols,Ke=Object.getPrototypeOf,be=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,se=(f,l,p)=>l in f?Y(f,l,{enumerable:!0,configurable:!0,writable:!0,value:p}):f[l]=p,Ve=(f,l)=>{for(var p in l||(l={}))be.call(l,p)&&se(f,p,l[p]);if(ue)for(var p of ue(l))Qe.call(l,p)&&se(f,p,l[p]);return f},_e=(f,l)=>()=>(f&&(l=f(f=0)),l),Q=(f,l)=>()=>(l||f((l={exports:{}}).exports,l),l.exports),ye=(f,l)=>{for(var p in l)Y(f,p,{get:l[p],enumerable:!0})},ve=(f,l,p,y)=>{if(l&&typeof l=="object"||typeof l=="function")for(let m of He(l))!be.call(f,m)&&m!==p&&Y(f,m,{get:()=>l[m],enumerable:!(y=$e(l,m))||y.enumerable});return f},W=(f,l,p)=>(p=f!=null?Je(Ke(f)):{},ve(l||!f||!f.__esModule?Y(p,"default",{value:f,enumerable:!0}):p,f)),we=f=>ve(Y({},"__esModule",{value:!0}),f),et=Q(f=>{"use strict";b(),f.byteLength=I,f.toByteArray=B,f.fromByteArray=S;var l=[],p=[],y=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(v=0,g=m.length;v<g;++v)l[v]=m[v],p[m.charCodeAt(v)]=v;var v,g;p["-".charCodeAt(0)]=62,p["_".charCodeAt(0)]=63;function n(s){var d=s.length;if(d%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var h=s.indexOf("=");h===-1&&(h=d);var c=h===d?0:4-h%4;return[h,c]}function I(s){var d=n(s),h=d[0],c=d[1];return(h+c)*3/4-c}function A(s,d,h){return(d+h)*3/4-h}function B(s){var d,h=n(s),c=h[0],x=h[1],w=new y(A(s,c,x)),M=0,j=x>0?c-4:c,N;for(N=0;N<j;N+=4)d=p[s.charCodeAt(N)]<<18|p[s.charCodeAt(N+1)]<<12|p[s.charCodeAt(N+2)]<<6|p[s.charCodeAt(N+3)],w[M++]=d>>16&255,w[M++]=d>>8&255,w[M++]=d&255;return x===2&&(d=p[s.charCodeAt(N)]<<2|p[s.charCodeAt(N+1)]>>4,w[M++]=d&255),x===1&&(d=p[s.charCodeAt(N)]<<10|p[s.charCodeAt(N+1)]<<4|p[s.charCodeAt(N+2)]>>2,w[M++]=d>>8&255,w[M++]=d&255),w}function _(s){return l[s>>18&63]+l[s>>12&63]+l[s>>6&63]+l[s&63]}function k(s,d,h){for(var c,x=[],w=d;w<h;w+=3)c=(s[w]<<16&16711680)+(s[w+1]<<8&65280)+(s[w+2]&255),x.push(_(c));return x.join("")}function S(s){for(var d,h=s.length,c=h%3,x=[],w=16383,M=0,j=h-c;M<j;M+=w)x.push(k(s,M,M+w>j?j:M+w));return c===1?(d=s[h-1],x.push(l[d>>2]+l[d<<4&63]+"==")):c===2&&(d=(s[h-2]<<8)+s[h-1],x.push(l[d>>10]+l[d>>4&63]+l[d<<2&63]+"=")),x.join("")}}),tt=Q(f=>{b(),f.read=function(l,p,y,m,v){var g,n,I=v*8-m-1,A=(1<<I)-1,B=A>>1,_=-7,k=y?v-1:0,S=y?-1:1,s=l[p+k];for(k+=S,g=s&(1<<-_)-1,s>>=-_,_+=I;_>0;g=g*256+l[p+k],k+=S,_-=8);for(n=g&(1<<-_)-1,g>>=-_,_+=m;_>0;n=n*256+l[p+k],k+=S,_-=8);if(g===0)g=1-B;else{if(g===A)return n?NaN:(s?-1:1)*(1/0);n=n+Math.pow(2,m),g=g-B}return(s?-1:1)*n*Math.pow(2,g-m)},f.write=function(l,p,y,m,v,g){var n,I,A,B=g*8-v-1,_=(1<<B)-1,k=_>>1,S=v===23?Math.pow(2,-24)-Math.pow(2,-77):0,s=m?0:g-1,d=m?1:-1,h=p<0||p===0&&1/p<0?1:0;for(p=Math.abs(p),isNaN(p)||p===1/0?(I=isNaN(p)?1:0,n=_):(n=Math.floor(Math.log(p)/Math.LN2),p*(A=Math.pow(2,-n))<1&&(n--,A*=2),n+k>=1?p+=S/A:p+=S*Math.pow(2,1-k),p*A>=2&&(n++,A/=2),n+k>=_?(I=0,n=_):n+k>=1?(I=(p*A-1)*Math.pow(2,v),n=n+k):(I=p*Math.pow(2,k-1)*Math.pow(2,v),n=0));v>=8;l[y+s]=I&255,s+=d,I/=256,v-=8);for(n=n<<v|I,B+=v;B>0;l[y+s]=n&255,s+=d,n/=256,B-=8);l[y+s-d]|=h*128}}),rt=Q(f=>{"use strict";b();var l=et(),p=tt(),y=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;f.Buffer=n,f.SlowBuffer=x,f.INSPECT_MAX_BYTES=50;var m=2147483647;f.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=v(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function v(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(r){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function g(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,n.prototype),t}function n(e,t,r){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _(e)}return I(e,t,r)}n.poolSize=8192;function I(e,t,r){if(typeof e=="string")return k(e,t);if(ArrayBuffer.isView(e))return s(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(D(e,ArrayBuffer)||e&&D(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(D(e,SharedArrayBuffer)||e&&D(e.buffer,SharedArrayBuffer)))return d(e,t,r);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,t,r);var a=h(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,t,r){return I(e,t,r)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function A(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,r){return A(e),e<=0?g(e):t!==void 0?typeof r=="string"?g(e).fill(t,r):g(e).fill(t):g(e)}n.alloc=function(e,t,r){return B(e,t,r)};function _(e){return A(e),g(e<0?0:c(e)|0)}n.allocUnsafe=function(e){return _(e)},n.allocUnsafeSlow=function(e){return _(e)};function k(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!n.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=w(e,t)|0,o=g(r),a=o.write(e,t);return a!==r&&(o=o.slice(0,a)),o}function S(e){for(var t=e.length<0?0:c(e.length)|0,r=g(t),o=0;o<t;o+=1)r[o]=e[o]&255;return r}function s(e){if(D(e,Uint8Array)){var t=new Uint8Array(e);return d(t.buffer,t.byteOffset,t.byteLength)}return S(e)}function d(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return t===void 0&&r===void 0?o=new Uint8Array(e):r===void 0?o=new Uint8Array(e,t):o=new Uint8Array(e,t,r),Object.setPrototypeOf(o,n.prototype),o}function h(e){if(n.isBuffer(e)){var t=c(e.length)|0,r=g(t);return r.length===0||e.copy(r,0,0,t),r}if(e.length!==void 0)return typeof e.length!="number"||ee(e.length)?g(0):S(e);if(e.type==="Buffer"&&Array.isArray(e.data))return S(e.data)}function c(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function x(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,t){if(D(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),D(t,Uint8Array)&&(t=n.from(t,t.offset,t.byteLength)),!n.isBuffer(e)||!n.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,o=t.length,a=0,i=Math.min(r,o);a<i;++a)if(e[a]!==t[a]){r=e[a],o=t[a];break}return r<o?-1:o<r?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var o=n.allocUnsafe(t),a=0;for(r=0;r<e.length;++r){var i=e[r];if(D(i,Uint8Array))a+i.length>o.length?n.from(i).copy(o,a):Uint8Array.prototype.set.call(o,i,a);else if(n.isBuffer(i))i.copy(o,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=i.length}return o};function w(e,t){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||D(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return pe(e).length;default:if(a)return o?-1:V(e).length;t=(""+t).toLowerCase(),a=!0}}n.byteLength=w;function M(e,t,r){var o=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,t>>>=0,r<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return Me(this,t,r);case"utf8":case"utf-8":return re(this,t,r);case"ascii":return Ne(this,t,r);case"latin1":case"binary":return Re(this,t,r);case"base64":return Oe(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Pe(this,t,r);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function j(e,t,r){var o=e[t];e[t]=e[r],e[r]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)j(this,t,t+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)j(this,t,t+3),j(this,t+1,t+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)j(this,t,t+7),j(this,t+1,t+6),j(this,t+2,t+5),j(this,t+3,t+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):M.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",t=f.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},y&&(n.prototype[y]=n.prototype.inspect),n.prototype.compare=function(e,t,r,o,a){if(D(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),r===void 0&&(r=e?e.length:0),o===void 0&&(o=0),a===void 0&&(a=this.length),t<0||r>e.length||o<0||a>this.length)throw new RangeError("out of range index");if(o>=a&&t>=r)return 0;if(o>=a)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,o>>>=0,a>>>=0,this===e)return 0;for(var i=a-o,u=r-t,E=Math.min(i,u),O=this.slice(o,a),T=e.slice(t,r),L=0;L<E;++L)if(O[L]!==T[L]){i=O[L],u=T[L];break}return i<u?-1:u<i?1:0};function N(e,t,r,o,a){if(e.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,ee(r)&&(r=a?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(a)return-1;r=e.length-1}else if(r<0)if(a)r=0;else return-1;if(typeof t=="string"&&(t=n.from(t,o)),n.isBuffer(t))return t.length===0?-1:te(e,t,r,o,a);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):te(e,[t],r,o,a);throw new TypeError("val must be string, number or Buffer")}function te(e,t,r,o,a){var i=1,u=e.length,E=t.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,u/=2,E/=2,r/=2}function O(le,fe){return i===1?le[fe]:le.readUInt16BE(fe*i)}var T;if(a){var L=-1;for(T=r;T<u;T++)if(O(e,T)===O(t,L===-1?0:T-L)){if(L===-1&&(L=T),T-L+1===E)return L*i}else L!==-1&&(T-=T-L),L=-1}else for(r+E>u&&(r=u-E),T=r;T>=0;T--){for(var R=!0,G=0;G<E;G++)if(O(e,T+G)!==O(t,G)){R=!1;break}if(R)return T}return-1}n.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1},n.prototype.indexOf=function(e,t,r){return N(this,e,t,r,!0)},n.prototype.lastIndexOf=function(e,t,r){return N(this,e,t,r,!1)};function Be(e,t,r,o){r=Number(r)||0;var a=e.length-r;o?(o=Number(o),o>a&&(o=a)):o=a;var i=t.length;o>i/2&&(o=i/2);for(var u=0;u<o;++u){var E=parseInt(t.substr(u*2,2),16);if(ee(E))return u;e[r+u]=E}return u}function Le(e,t,r,o){return X(V(t,e.length-r),e,r,o)}function Ue(e,t,r,o){return X(Fe(t),e,r,o)}function Ie(e,t,r,o){return X(pe(t),e,r,o)}function Ce(e,t,r,o){return X(qe(t,e.length-r),e,r,o)}n.prototype.write=function(e,t,r,o){if(t===void 0)o="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")o=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-t;if((r===void 0||r>a)&&(r=a),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var i=!1;;)switch(o){case"hex":return Be(this,e,t,r);case"utf8":case"utf-8":return Le(this,e,t,r);case"ascii":case"latin1":case"binary":return Ue(this,e,t,r);case"base64":return Ie(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ce(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),i=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Oe(e,t,r){return t===0&&r===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,r))}function re(e,t,r){r=Math.min(e.length,r);for(var o=[],a=t;a<r;){var i=e[a],u=null,E=i>239?4:i>223?3:i>191?2:1;if(a+E<=r){var O,T,L,R;switch(E){case 1:i<128&&(u=i);break;case 2:O=e[a+1],(O&192)===128&&(R=(i&31)<<6|O&63,R>127&&(u=R));break;case 3:O=e[a+1],T=e[a+2],(O&192)===128&&(T&192)===128&&(R=(i&15)<<12|(O&63)<<6|T&63,R>2047&&(R<55296||R>57343)&&(u=R));break;case 4:O=e[a+1],T=e[a+2],L=e[a+3],(O&192)===128&&(T&192)===128&&(L&192)===128&&(R=(i&15)<<18|(O&63)<<12|(T&63)<<6|L&63,R>65535&&R<1114112&&(u=R))}}u===null?(u=65533,E=1):u>65535&&(u-=65536,o.push(u>>>10&1023|55296),u=56320|u&1023),o.push(u),a+=E}return Se(o)}var oe=4096;function Se(e){var t=e.length;if(t<=oe)return String.fromCharCode.apply(String,e);for(var r="",o=0;o<t;)r+=String.fromCharCode.apply(String,e.slice(o,o+=oe));return r}function Ne(e,t,r){var o="";r=Math.min(e.length,r);for(var a=t;a<r;++a)o+=String.fromCharCode(e[a]&127);return o}function Re(e,t,r){var o="";r=Math.min(e.length,r);for(var a=t;a<r;++a)o+=String.fromCharCode(e[a]);return o}function Me(e,t,r){var o=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>o)&&(r=o);for(var a="",i=t;i<r;++i)a+=ze[e[i]];return a}function Pe(e,t,r){for(var o=e.slice(t,r),a="",i=0;i<o.length-1;i+=2)a+=String.fromCharCode(o[i]+o[i+1]*256);return a}n.prototype.slice=function(e,t){var r=this.length;e=~~e,t=t===void 0?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);var o=this.subarray(e,t);return Object.setPrototypeOf(o,n.prototype),o};function C(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||C(e,t,this.length);for(var o=this[e],a=1,i=0;++i<t&&(a*=256);)o+=this[e+i]*a;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||C(e,t,this.length);for(var o=this[e+--t],a=1;t>0&&(a*=256);)o+=this[e+--t]*a;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,t){return e=e>>>0,t||C(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||C(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||C(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||C(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||C(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||C(e,t,this.length);for(var o=this[e],a=1,i=0;++i<t&&(a*=256);)o+=this[e+i]*a;return a*=128,o>=a&&(o-=Math.pow(2,8*t)),o},n.prototype.readIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||C(e,t,this.length);for(var o=t,a=1,i=this[e+--o];o>0&&(a*=256);)i+=this[e+--o]*a;return a*=128,i>=a&&(i-=Math.pow(2,8*t)),i},n.prototype.readInt8=function(e,t){return e=e>>>0,t||C(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,t){e=e>>>0,t||C(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r},n.prototype.readInt16BE=function(e,t){e=e>>>0,t||C(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r},n.prototype.readInt32LE=function(e,t){return e=e>>>0,t||C(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,t){return e=e>>>0,t||C(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,t){return e=e>>>0,t||C(e,4,this.length),p.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,t){return e=e>>>0,t||C(e,4,this.length),p.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||C(e,8,this.length),p.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||C(e,8,this.length),p.read(this,e,!1,52,8)};function P(e,t,r,o,a,i){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<i)throw new RangeError('"value" argument is out of bounds');if(r+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,t,r,o){if(e=+e,t=t>>>0,r=r>>>0,!o){var a=Math.pow(2,8*r)-1;P(this,e,t,r,a,0)}var i=1,u=0;for(this[t]=e&255;++u<r&&(i*=256);)this[t+u]=e/i&255;return t+r},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,t,r,o){if(e=+e,t=t>>>0,r=r>>>0,!o){var a=Math.pow(2,8*r)-1;P(this,e,t,r,a,0)}var i=r-1,u=1;for(this[t+i]=e&255;--i>=0&&(u*=256);)this[t+i]=e/u&255;return t+r},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,1,255,0),this[t]=e&255,t+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},n.prototype.writeIntLE=function(e,t,r,o){if(e=+e,t=t>>>0,!o){var a=Math.pow(2,8*r-1);P(this,e,t,r,a-1,-a)}var i=0,u=1,E=0;for(this[t]=e&255;++i<r&&(u*=256);)e<0&&E===0&&this[t+i-1]!==0&&(E=1),this[t+i]=(e/u>>0)-E&255;return t+r},n.prototype.writeIntBE=function(e,t,r,o){if(e=+e,t=t>>>0,!o){var a=Math.pow(2,8*r-1);P(this,e,t,r,a-1,-a)}var i=r-1,u=1,E=0;for(this[t+i]=e&255;--i>=0&&(u*=256);)e<0&&E===0&&this[t+i+1]!==0&&(E=1),this[t+i]=(e/u>>0)-E&255;return t+r},n.prototype.writeInt8=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},n.prototype.writeInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},n.prototype.writeInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},n.prototype.writeInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},n.prototype.writeInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ne(e,t,r,o,a,i){if(r+o>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function ae(e,t,r,o,a){return t=+t,r=r>>>0,a||ne(e,t,r,4,34028234663852886e22,-34028234663852886e22),p.write(e,t,r,o,23,4),r+4}n.prototype.writeFloatLE=function(e,t,r){return ae(this,e,t,!0,r)},n.prototype.writeFloatBE=function(e,t,r){return ae(this,e,t,!1,r)};function ie(e,t,r,o,a){return t=+t,r=r>>>0,a||ne(e,t,r,8,17976931348623157e292,-17976931348623157e292),p.write(e,t,r,o,52,8),r+8}n.prototype.writeDoubleLE=function(e,t,r){return ie(this,e,t,!0,r)},n.prototype.writeDoubleBE=function(e,t,r){return ie(this,e,t,!1,r)},n.prototype.copy=function(e,t,r,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<r&&(o=r),o===r||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-r&&(o=e.length-t+r);var a=o-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,o):Uint8Array.prototype.set.call(e,this.subarray(r,o),t),a},n.prototype.fill=function(e,t,r,o){if(typeof e=="string"){if(typeof t=="string"?(o=t,t=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var a=e.charCodeAt(0);(o==="utf8"&&a<128||o==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<r;++i)this[i]=e;else{var u=n.isBuffer(e)?e:n.from(e,o),E=u.length;if(E===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=u[i%E]}return this};var je=/[^+/0-9A-Za-z-_]/g;function De(e){if(e=e.split("=")[0],e=e.trim().replace(je,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function V(e,t){t=t||1/0;for(var r,o=e.length,a=null,i=[],u=0;u<o;++u){if(r=e.charCodeAt(u),r>55295&&r<57344){if(!a){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(u+1===o){(t-=3)>-1&&i.push(239,191,189);continue}a=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),a=r;continue}r=(a-55296<<10|r-56320)+65536}else a&&(t-=3)>-1&&i.push(239,191,189);if(a=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,r&63|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return i}function Fe(e){for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r)&255);return t}function qe(e,t){for(var r,o,a,i=[],u=0;u<e.length&&!((t-=2)<0);++u)r=e.charCodeAt(u),o=r>>8,a=r%256,i.push(a),i.push(o);return i}function pe(e){return l.toByteArray(De(e))}function X(e,t,r,o){for(var a=0;a<o&&!(a+r>=t.length||a>=e.length);++a)t[a+r]=e[a];return a}function D(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function ee(e){return e!==e}var ze=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var o=r*16,a=0;a<16;++a)t[o+a]=e[r]+e[a];return t}()}),ot=Q((f,l)=>{b();var p=l.exports={},y,m;function v(){throw new Error("setTimeout has not been defined")}function g(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?y=setTimeout:y=v}catch(c){y=v}try{typeof clearTimeout=="function"?m=clearTimeout:m=g}catch(c){m=g}})();function n(c){if(y===setTimeout)return setTimeout(c,0);if((y===v||!y)&&setTimeout)return y=setTimeout,setTimeout(c,0);try{return y(c,0)}catch(x){try{return y.call(null,c,0)}catch(w){return y.call(this,c,0)}}}function I(c){if(m===clearTimeout)return clearTimeout(c);if((m===g||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(c);try{return m(c)}catch(x){try{return m.call(null,c)}catch(w){return m.call(this,c)}}}var A=[],B=!1,_,k=-1;function S(){!B||!_||(B=!1,_.length?A=_.concat(A):k=-1,A.length&&s())}function s(){if(!B){var c=n(S);B=!0;for(var x=A.length;x;){for(_=A,A=[];++k<x;)_&&_[k].run();k=-1,x=A.length}_=null,B=!1,I(c)}}p.nextTick=function(c){var x=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)x[w-1]=arguments[w];A.push(new d(c,x)),A.length===1&&!B&&n(s)};function d(c,x){this.fun=c,this.array=x}d.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={};function h(){}p.on=h,p.addListener=h,p.once=h,p.off=h,p.removeListener=h,p.removeAllListeners=h,p.emit=h,p.prependListener=h,p.prependOnceListener=h,p.listeners=function(c){return[]},p.binding=function(c){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(c){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}}),nt,at,it,b=_e(()=>{nt=W(rt()),at=W(ot()),it=function(f){function l(){var y=this||self;return delete f.prototype.__magic__,y}if(typeof globalThis=="object")return globalThis;if(this)return l();f.defineProperty(f.prototype,"__magic__",{configurable:!0,get:l});var p=__magic__;return p}(Object)}),Ae={};ye(Ae,{default:()=>Ee});var H,ce,Ee,pt=_e(()=>{"use strict";b(),H=W(U("react")),ce=f=>H.createElement("svg",Ve({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},f),H.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),H.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Ee=ce}),xe={};ye(xe,{Amount:()=>bt});ke.exports=we(xe);b();var q=W(U("react")),de=U("@terradharitri/sdk-dapp/constants/index"),he=U("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),lt=U("@terradharitri/sdk-dapp/UI/UsdValue/index");b();var ft=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ft));var ut={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};b();b();b();b();var _t=U("bech32");b();b();b();b();b();var yt=U("@terradharitri/sdk-dapp/types/tokens.types");b();b();var vt=U("@terradharitri/sdk-dapp/constants"),wt=U("@terradharitri/sdk-dapp/utils/account/getAccount");b();b();var At=U("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");b();var Et=U("@terradharitri/sdk-dapp/utils/buildUrlParams");b();var xt=W(U("anchorme"));b();b();var kt=U("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Tt=U("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Bt=U("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),me=U("@terradharitri/sdk-dapp/utils/operations/parseAmount");b();b();b();b();b();b();b();var F=W(U("react")),st=U("@fortawesome/free-solid-svg-icons"),ct=U("@fortawesome/react-fontawesome"),ge=W(U("classnames"));b();var dt=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dt));var z={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"},ht=(pt(),we(Ae)).default,mt=f=>{let{avatar:l,type:p}=f;return p==="NonFungibleDCDT"?F.default.createElement("div",{className:(0,ge.default)(z.tokenAvatar,z.tokenAvatarNFT)},"NFT"):p==="SemiFungibleDCDT"?F.default.createElement("div",{className:(0,ge.default)(z.tokenAvatar,z.tokenAvatarSFT)},"SFT"):p==="REWA"?F.default.createElement("div",{className:z.tokenAvatar},f.RewaIcon?F.default.createElement(f.RewaIcon,null):F.default.createElement(ht,null)):l?F.default.createElement("div",{className:z.tokenAvatar},F.default.createElement("img",{src:l})):F.default.createElement("div",{className:z.tokenAvatar},F.default.createElement(ct.FontAwesomeIcon,{icon:st.faDiamond}))};b();var gt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gt));var K={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},bt=({label:f="Amount",amount:l,txType:p,tokenDecimals:y,tokenId:m,rewaLabel:v,rewaPriceInUsd:g,nft:n,tokenAvatar:I})=>{let A=(n==null?void 0:n.decimals)||0,B=p==="DCDT",_=p==="MetaDCDT",k=p==="NonFungibleDCDT",S=_?(0,me.parseAmount)(l,n==null?void 0:n.decimals):l,s=Boolean(n&&l),d=m.split("-")[0],h=B?y:de.DECIMALS,c=s?q.default.createElement(he.FormatAmount,{rewaLabel:v,value:S,decimals:A,digits:p==="MetaDCDT"?de.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):q.default.createElement(he.FormatAmount,{rewaLabel:v,value:(0,me.parseAmount)(l,h),showLabel:!1,decimals:h,showLastNonZeroDecimal:!0,token:B?d:v,"data-testid":"confirmAmount"});return k?null:q.default.createElement("div",{className:K.amount},q.default.createElement("span",{className:ut.label},f),q.default.createElement("div",{className:K.token},q.default.createElement(mt,{type:p,avatar:I}),q.default.createElement("div",{className:K.value},c," ",d)),!B&&q.default.createElement(lt.UsdValue,{amount:l,usd:g,"data-testid":"confirmUsdValue",className:K.price}))};});var Z={};$();J(Z,Ye(Te()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
