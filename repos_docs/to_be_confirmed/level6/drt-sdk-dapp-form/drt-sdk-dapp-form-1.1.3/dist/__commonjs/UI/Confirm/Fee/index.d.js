"use strict";import{a as d,b as Ge,d as X,e as Je,f as $}from"../../../../__chunks__/chunk-JH2LJGTQ.js";var Ue=Ge((nr,Le)=>{"use strict";$();var Ke=Object.create,Y=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Qe=Object.getOwnPropertyNames,ce=Object.getOwnPropertySymbols,et=Object.getPrototypeOf,ye=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,de=(l,f,p)=>f in l?Y(l,f,{enumerable:!0,configurable:!0,writable:!0,value:p}):l[f]=p,rt=(l,f)=>{for(var p in f||(f={}))ye.call(f,p)&&de(l,p,f[p]);if(ce)for(var p of ce(f))tt.call(f,p)&&de(l,p,f[p]);return l},ve=(l,f)=>()=>(l&&(f=l(l=0)),f),V=(l,f)=>()=>(f||l((f={exports:{}}).exports,f),f.exports),we=(l,f)=>{for(var p in f)Y(l,p,{get:f[p],enumerable:!0})},Ee=(l,f,p,y)=>{if(f&&typeof f=="object"||typeof f=="function")for(let b of Qe(f))!ye.call(l,b)&&b!==p&&Y(l,b,{get:()=>f[b],enumerable:!(y=Ve(f,b))||y.enumerable});return l},O=(l,f,p)=>(p=l!=null?Ke(et(l)):{},Ee(f||!l||!l.__esModule?Y(p,"default",{value:l,enumerable:!0}):p,l)),Ae=l=>Ee(Y({},"__esModule",{value:!0}),l),ot=V(l=>{"use strict";u(),l.byteLength=S,l.toByteArray=U,l.fromByteArray=R;var f=[],p=[],y=typeof Uint8Array!="undefined"?Uint8Array:Array,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(A=0,_=b.length;A<_;++A)f[A]=b[A],p[b.charCodeAt(A)]=A;var A,_;p["-".charCodeAt(0)]=62,p["_".charCodeAt(0)]=63;function n(c){var m=c.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var g=c.indexOf("=");g===-1&&(g=m);var h=g===m?0:4-g%4;return[g,h]}function S(c){var m=n(c),g=m[0],h=m[1];return(g+h)*3/4-h}function k(c,m,g){return(m+g)*3/4-g}function U(c){var m,g=n(c),h=g[0],x=g[1],w=new y(k(c,h,x)),P=0,F=x>0?h-4:h,q;for(q=0;q<F;q+=4)m=p[c.charCodeAt(q)]<<18|p[c.charCodeAt(q+1)]<<12|p[c.charCodeAt(q+2)]<<6|p[c.charCodeAt(q+3)],w[P++]=m>>16&255,w[P++]=m>>8&255,w[P++]=m&255;return x===2&&(m=p[c.charCodeAt(q)]<<2|p[c.charCodeAt(q+1)]>>4,w[P++]=m&255),x===1&&(m=p[c.charCodeAt(q)]<<10|p[c.charCodeAt(q+1)]<<4|p[c.charCodeAt(q+2)]>>2,w[P++]=m>>8&255,w[P++]=m&255),w}function v(c){return f[c>>18&63]+f[c>>12&63]+f[c>>6&63]+f[c&63]}function B(c,m,g){for(var h,x=[],w=m;w<g;w+=3)h=(c[w]<<16&16711680)+(c[w+1]<<8&65280)+(c[w+2]&255),x.push(v(h));return x.join("")}function R(c){for(var m,g=c.length,h=g%3,x=[],w=16383,P=0,F=g-h;P<F;P+=w)x.push(B(c,P,P+w>F?F:P+w));return h===1?(m=c[g-1],x.push(f[m>>2]+f[m<<4&63]+"==")):h===2&&(m=(c[g-2]<<8)+c[g-1],x.push(f[m>>10]+f[m>>4&63]+f[m<<2&63]+"=")),x.join("")}}),nt=V(l=>{u(),l.read=function(f,p,y,b,A){var _,n,S=A*8-b-1,k=(1<<S)-1,U=k>>1,v=-7,B=y?A-1:0,R=y?-1:1,c=f[p+B];for(B+=R,_=c&(1<<-v)-1,c>>=-v,v+=S;v>0;_=_*256+f[p+B],B+=R,v-=8);for(n=_&(1<<-v)-1,_>>=-v,v+=b;v>0;n=n*256+f[p+B],B+=R,v-=8);if(_===0)_=1-U;else{if(_===k)return n?NaN:(c?-1:1)*(1/0);n=n+Math.pow(2,b),_=_-U}return(c?-1:1)*n*Math.pow(2,_-b)},l.write=function(f,p,y,b,A,_){var n,S,k,U=_*8-A-1,v=(1<<U)-1,B=v>>1,R=A===23?Math.pow(2,-24)-Math.pow(2,-77):0,c=b?0:_-1,m=b?1:-1,g=p<0||p===0&&1/p<0?1:0;for(p=Math.abs(p),isNaN(p)||p===1/0?(S=isNaN(p)?1:0,n=v):(n=Math.floor(Math.log(p)/Math.LN2),p*(k=Math.pow(2,-n))<1&&(n--,k*=2),n+B>=1?p+=R/k:p+=R*Math.pow(2,1-B),p*k>=2&&(n++,k/=2),n+B>=v?(S=0,n=v):n+B>=1?(S=(p*k-1)*Math.pow(2,A),n=n+B):(S=p*Math.pow(2,B-1)*Math.pow(2,A),n=0));A>=8;f[y+c]=S&255,c+=m,S/=256,A-=8);for(n=n<<A|S,U+=A;U>0;f[y+c]=n&255,c+=m,n/=256,U-=8);f[y+c-m]|=g*128}}),at=V(l=>{"use strict";u();var f=ot(),p=nt(),y=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;l.Buffer=n,l.SlowBuffer=x,l.INSPECT_MAX_BYTES=50;var b=2147483647;l.kMaxLength=b,n.TYPED_ARRAY_SUPPORT=A(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function A(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(r){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function _(e){if(e>b)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,n.prototype),t}function n(e,t,r){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return v(e)}return S(e,t,r)}n.poolSize=8192;function S(e,t,r){if(typeof e=="string")return B(e,t);if(ArrayBuffer.isView(e))return c(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(j(e,ArrayBuffer)||e&&j(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(j(e,SharedArrayBuffer)||e&&j(e.buffer,SharedArrayBuffer)))return m(e,t,r);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,t,r);var a=g(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,t,r){return S(e,t,r)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function k(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function U(e,t,r){return k(e),e<=0?_(e):t!==void 0?typeof r=="string"?_(e).fill(t,r):_(e).fill(t):_(e)}n.alloc=function(e,t,r){return U(e,t,r)};function v(e){return k(e),_(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return v(e)},n.allocUnsafeSlow=function(e){return v(e)};function B(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!n.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=w(e,t)|0,o=_(r),a=o.write(e,t);return a!==r&&(o=o.slice(0,a)),o}function R(e){for(var t=e.length<0?0:h(e.length)|0,r=_(t),o=0;o<t;o+=1)r[o]=e[o]&255;return r}function c(e){if(j(e,Uint8Array)){var t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return R(e)}function m(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return t===void 0&&r===void 0?o=new Uint8Array(e):r===void 0?o=new Uint8Array(e,t):o=new Uint8Array(e,t,r),Object.setPrototypeOf(o,n.prototype),o}function g(e){if(n.isBuffer(e)){var t=h(e.length)|0,r=_(t);return r.length===0||e.copy(r,0,0,t),r}if(e.length!==void 0)return typeof e.length!="number"||ee(e.length)?_(0):R(e);if(e.type==="Buffer"&&Array.isArray(e.data))return R(e.data)}function h(e){if(e>=b)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+b.toString(16)+" bytes");return e|0}function x(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,t){if(j(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),j(t,Uint8Array)&&(t=n.from(t,t.offset,t.byteLength)),!n.isBuffer(e)||!n.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,o=t.length,a=0,i=Math.min(r,o);a<i;++a)if(e[a]!==t[a]){r=e[a],o=t[a];break}return r<o?-1:o<r?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var o=n.allocUnsafe(t),a=0;for(r=0;r<e.length;++r){var i=e[r];if(j(i,Uint8Array))a+i.length>o.length?n.from(i).copy(o,a):Uint8Array.prototype.set.call(o,i,a);else if(n.isBuffer(i))i.copy(o,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=i.length}return o};function w(e,t){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||j(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Q(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return ue(e).length;default:if(a)return o?-1:Q(e).length;t=(""+t).toLowerCase(),a=!0}}n.byteLength=w;function P(e,t,r){var o=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,t>>>=0,r<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return Fe(this,t,r);case"utf8":case"utf-8":return ne(this,t,r);case"ascii":return Pe(this,t,r);case"latin1":case"binary":return Me(this,t,r);case"base64":return Ne(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return je(this,t,r);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function F(e,t,r){var o=e[t];e[t]=e[r],e[r]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)F(this,t,t+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)F(this,t,t+3),F(this,t+1,t+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)F(this,t,t+7),F(this,t+1,t+6),F(this,t+2,t+5),F(this,t+3,t+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?ne(this,0,e):P.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",t=l.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},y&&(n.prototype[y]=n.prototype.inspect),n.prototype.compare=function(e,t,r,o,a){if(j(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),r===void 0&&(r=e?e.length:0),o===void 0&&(o=0),a===void 0&&(a=this.length),t<0||r>e.length||o<0||a>this.length)throw new RangeError("out of range index");if(o>=a&&t>=r)return 0;if(o>=a)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,o>>>=0,a>>>=0,this===e)return 0;for(var i=a-o,s=r-t,E=Math.min(i,s),C=this.slice(o,a),T=e.slice(t,r),L=0;L<E;++L)if(C[L]!==T[L]){i=C[L],s=T[L];break}return i<s?-1:s<i?1:0};function q(e,t,r,o,a){if(e.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,ee(r)&&(r=a?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(a)return-1;r=e.length-1}else if(r<0)if(a)r=0;else return-1;if(typeof t=="string"&&(t=n.from(t,o)),n.isBuffer(t))return t.length===0?-1:oe(e,t,r,o,a);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):oe(e,[t],r,o,a);throw new TypeError("val must be string, number or Buffer")}function oe(e,t,r,o,a){var i=1,s=e.length,E=t.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,s/=2,E/=2,r/=2}function C(le,se){return i===1?le[se]:le.readUInt16BE(se*i)}var T;if(a){var L=-1;for(T=r;T<s;T++)if(C(e,T)===C(t,L===-1?0:T-L)){if(L===-1&&(L=T),T-L+1===E)return L*i}else L!==-1&&(T-=T-L),L=-1}else for(r+E>s&&(r=s-E),T=r;T>=0;T--){for(var N=!0,J=0;J<E;J++)if(C(e,T+J)!==C(t,J)){N=!1;break}if(N)return T}return-1}n.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1},n.prototype.indexOf=function(e,t,r){return q(this,e,t,r,!0)},n.prototype.lastIndexOf=function(e,t,r){return q(this,e,t,r,!1)};function Ie(e,t,r,o){r=Number(r)||0;var a=e.length-r;o?(o=Number(o),o>a&&(o=a)):o=a;var i=t.length;o>i/2&&(o=i/2);for(var s=0;s<o;++s){var E=parseInt(t.substr(s*2,2),16);if(ee(E))return s;e[r+s]=E}return s}function Se(e,t,r,o){return G(Q(t,e.length-r),e,r,o)}function Ce(e,t,r,o){return G(We(t),e,r,o)}function Oe(e,t,r,o){return G(ue(t),e,r,o)}function qe(e,t,r,o){return G(Ye(t,e.length-r),e,r,o)}n.prototype.write=function(e,t,r,o){if(t===void 0)o="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")o=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-t;if((r===void 0||r>a)&&(r=a),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var i=!1;;)switch(o){case"hex":return Ie(this,e,t,r);case"utf8":case"utf-8":return Se(this,e,t,r);case"ascii":case"latin1":case"binary":return Ce(this,e,t,r);case"base64":return Oe(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return qe(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),i=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ne(e,t,r){return t===0&&r===e.length?f.fromByteArray(e):f.fromByteArray(e.slice(t,r))}function ne(e,t,r){r=Math.min(e.length,r);for(var o=[],a=t;a<r;){var i=e[a],s=null,E=i>239?4:i>223?3:i>191?2:1;if(a+E<=r){var C,T,L,N;switch(E){case 1:i<128&&(s=i);break;case 2:C=e[a+1],(C&192)===128&&(N=(i&31)<<6|C&63,N>127&&(s=N));break;case 3:C=e[a+1],T=e[a+2],(C&192)===128&&(T&192)===128&&(N=(i&15)<<12|(C&63)<<6|T&63,N>2047&&(N<55296||N>57343)&&(s=N));break;case 4:C=e[a+1],T=e[a+2],L=e[a+3],(C&192)===128&&(T&192)===128&&(L&192)===128&&(N=(i&15)<<18|(C&63)<<12|(T&63)<<6|L&63,N>65535&&N<1114112&&(s=N))}}s===null?(s=65533,E=1):s>65535&&(s-=65536,o.push(s>>>10&1023|55296),s=56320|s&1023),o.push(s),a+=E}return Re(o)}var ae=4096;function Re(e){var t=e.length;if(t<=ae)return String.fromCharCode.apply(String,e);for(var r="",o=0;o<t;)r+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return r}function Pe(e,t,r){var o="";r=Math.min(e.length,r);for(var a=t;a<r;++a)o+=String.fromCharCode(e[a]&127);return o}function Me(e,t,r){var o="";r=Math.min(e.length,r);for(var a=t;a<r;++a)o+=String.fromCharCode(e[a]);return o}function Fe(e,t,r){var o=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>o)&&(r=o);for(var a="",i=t;i<r;++i)a+=Ze[e[i]];return a}function je(e,t,r){for(var o=e.slice(t,r),a="",i=0;i<o.length-1;i+=2)a+=String.fromCharCode(o[i]+o[i+1]*256);return a}n.prototype.slice=function(e,t){var r=this.length;e=~~e,t=t===void 0?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);var o=this.subarray(e,t);return Object.setPrototypeOf(o,n.prototype),o};function I(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||I(e,t,this.length);for(var o=this[e],a=1,i=0;++i<t&&(a*=256);)o+=this[e+i]*a;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||I(e,t,this.length);for(var o=this[e+--t],a=1;t>0&&(a*=256);)o+=this[e+--t]*a;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,t){return e=e>>>0,t||I(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||I(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||I(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||I(e,t,this.length);for(var o=this[e],a=1,i=0;++i<t&&(a*=256);)o+=this[e+i]*a;return a*=128,o>=a&&(o-=Math.pow(2,8*t)),o},n.prototype.readIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||I(e,t,this.length);for(var o=t,a=1,i=this[e+--o];o>0&&(a*=256);)i+=this[e+--o]*a;return a*=128,i>=a&&(i-=Math.pow(2,8*t)),i},n.prototype.readInt8=function(e,t){return e=e>>>0,t||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,t){e=e>>>0,t||I(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r},n.prototype.readInt16BE=function(e,t){e=e>>>0,t||I(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r},n.prototype.readInt32LE=function(e,t){return e=e>>>0,t||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,t){return e=e>>>0,t||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,t){return e=e>>>0,t||I(e,4,this.length),p.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,t){return e=e>>>0,t||I(e,4,this.length),p.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||I(e,8,this.length),p.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||I(e,8,this.length),p.read(this,e,!1,52,8)};function M(e,t,r,o,a,i){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<i)throw new RangeError('"value" argument is out of bounds');if(r+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,t,r,o){if(e=+e,t=t>>>0,r=r>>>0,!o){var a=Math.pow(2,8*r)-1;M(this,e,t,r,a,0)}var i=1,s=0;for(this[t]=e&255;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,t,r,o){if(e=+e,t=t>>>0,r=r>>>0,!o){var a=Math.pow(2,8*r)-1;M(this,e,t,r,a,0)}var i=r-1,s=1;for(this[t+i]=e&255;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,t,r){return e=+e,t=t>>>0,r||M(this,e,t,1,255,0),this[t]=e&255,t+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||M(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},n.prototype.writeIntLE=function(e,t,r,o){if(e=+e,t=t>>>0,!o){var a=Math.pow(2,8*r-1);M(this,e,t,r,a-1,-a)}var i=0,s=1,E=0;for(this[t]=e&255;++i<r&&(s*=256);)e<0&&E===0&&this[t+i-1]!==0&&(E=1),this[t+i]=(e/s>>0)-E&255;return t+r},n.prototype.writeIntBE=function(e,t,r,o){if(e=+e,t=t>>>0,!o){var a=Math.pow(2,8*r-1);M(this,e,t,r,a-1,-a)}var i=r-1,s=1,E=0;for(this[t+i]=e&255;--i>=0&&(s*=256);)e<0&&E===0&&this[t+i+1]!==0&&(E=1),this[t+i]=(e/s>>0)-E&255;return t+r},n.prototype.writeInt8=function(e,t,r){return e=+e,t=t>>>0,r||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},n.prototype.writeInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||M(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},n.prototype.writeInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},n.prototype.writeInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||M(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},n.prototype.writeInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ie(e,t,r,o,a,i){if(r+o>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function pe(e,t,r,o,a){return t=+t,r=r>>>0,a||ie(e,t,r,4,34028234663852886e22,-34028234663852886e22),p.write(e,t,r,o,23,4),r+4}n.prototype.writeFloatLE=function(e,t,r){return pe(this,e,t,!0,r)},n.prototype.writeFloatBE=function(e,t,r){return pe(this,e,t,!1,r)};function fe(e,t,r,o,a){return t=+t,r=r>>>0,a||ie(e,t,r,8,17976931348623157e292,-17976931348623157e292),p.write(e,t,r,o,52,8),r+8}n.prototype.writeDoubleLE=function(e,t,r){return fe(this,e,t,!0,r)},n.prototype.writeDoubleBE=function(e,t,r){return fe(this,e,t,!1,r)},n.prototype.copy=function(e,t,r,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<r&&(o=r),o===r||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-r&&(o=e.length-t+r);var a=o-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,o):Uint8Array.prototype.set.call(e,this.subarray(r,o),t),a},n.prototype.fill=function(e,t,r,o){if(typeof e=="string"){if(typeof t=="string"?(o=t,t=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var a=e.charCodeAt(0);(o==="utf8"&&a<128||o==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<r;++i)this[i]=e;else{var s=n.isBuffer(e)?e:n.from(e,o),E=s.length;if(E===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=s[i%E]}return this};var De=/[^+/0-9A-Za-z-_]/g;function ze(e){if(e=e.split("=")[0],e=e.trim().replace(De,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Q(e,t){t=t||1/0;for(var r,o=e.length,a=null,i=[],s=0;s<o;++s){if(r=e.charCodeAt(s),r>55295&&r<57344){if(!a){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(s+1===o){(t-=3)>-1&&i.push(239,191,189);continue}a=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),a=r;continue}r=(a-55296<<10|r-56320)+65536}else a&&(t-=3)>-1&&i.push(239,191,189);if(a=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,r&63|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return i}function We(e){for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r)&255);return t}function Ye(e,t){for(var r,o,a,i=[],s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),o=r>>8,a=r%256,i.push(a),i.push(o);return i}function ue(e){return f.toByteArray(ze(e))}function G(e,t,r,o){for(var a=0;a<o&&!(a+r>=t.length||a>=e.length);++a)t[a+r]=e[a];return a}function j(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function ee(e){return e!==e}var Ze=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var o=r*16,a=0;a<16;++a)t[o+a]=e[r]+e[a];return t}()}),it=V((l,f)=>{u();var p=f.exports={},y,b;function A(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?y=setTimeout:y=A}catch(h){y=A}try{typeof clearTimeout=="function"?b=clearTimeout:b=_}catch(h){b=_}})();function n(h){if(y===setTimeout)return setTimeout(h,0);if((y===A||!y)&&setTimeout)return y=setTimeout,setTimeout(h,0);try{return y(h,0)}catch(x){try{return y.call(null,h,0)}catch(w){return y.call(this,h,0)}}}function S(h){if(b===clearTimeout)return clearTimeout(h);if((b===_||!b)&&clearTimeout)return b=clearTimeout,clearTimeout(h);try{return b(h)}catch(x){try{return b.call(null,h)}catch(w){return b.call(this,h)}}}var k=[],U=!1,v,B=-1;function R(){!U||!v||(U=!1,v.length?k=v.concat(k):B=-1,k.length&&c())}function c(){if(!U){var h=n(R);U=!0;for(var x=k.length;x;){for(v=k,k=[];++B<x;)v&&v[B].run();B=-1,x=k.length}v=null,U=!1,S(h)}}p.nextTick=function(h){var x=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)x[w-1]=arguments[w];k.push(new m(h,x)),k.length===1&&!U&&n(c)};function m(h,x){this.fun=h,this.array=x}m.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={};function g(){}p.on=g,p.addListener=g,p.once=g,p.off=g,p.removeListener=g,p.removeAllListeners=g,p.emit=g,p.prependListener=g,p.prependOnceListener=g,p.listeners=function(h){return[]},p.binding=function(h){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(h){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}}),pt,ft,ut,u=ve(()=>{pt=O(at()),ft=O(it()),ut=function(l){function f(){var y=this||self;return delete l.prototype.__magic__,y}if(typeof globalThis=="object")return globalThis;if(this)return f();l.defineProperty(l.prototype,"__magic__",{configurable:!0,get:f});var p=__magic__;return p}(Object)}),xe={};we(xe,{default:()=>ke});var H,he,ke,lt=ve(()=>{"use strict";u(),H=O(d("react")),he=l=>H.createElement("svg",rt({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},l),H.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),H.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),ke=he}),Te={};we(Te,{Fee:()=>kt});Le.exports=Ae(Te);u();var z=O(d("react")),st=d("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");u();var ct=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ct));var dt={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};u();u();u();var ht="0";u();u();var te=d("@terradharitri/sdk-dapp/constants/index");u();u();u();var Tt=d("bech32");u();u();u();u();u();var Bt=d("@terradharitri/sdk-dapp/types/tokens.types");u();u();var Lt=d("@terradharitri/sdk-dapp/constants"),Ut=d("@terradharitri/sdk-dapp/utils/account/getAccount");u();u();var It=d("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");u();var St=d("@terradharitri/sdk-dapp/utils/buildUrlParams");u();var Ct=O(d("anchorme"));u();u();var Ot=d("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Be=d("@terradharitri/sdk-dapp/utils/operations/formatAmount"),mt=d("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),qt=d("@terradharitri/sdk-dapp/utils/operations/parseAmount");function gt({feeLimit:l,rewaPriceInUsd:f}){let p=(0,Be.formatAmount)({input:l,decimals:te.DECIMALS,digits:te.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,mt.getUsdValue)({amount:p,usd:f,decimals:te.DIGITS})}`}u();var Nt=d("@terradharitri/sdk-dapp/constants/index");u();u();u();u();u();u();var Rt=d("@terradharitri/sdk-dapp/constants/index"),Pt=O(d("bignumber.js"));u();var Mt=d("@terradharitri/sdk-dapp/constants/index");u();var Ft=d("@terradharitri/sdk-dapp/constants/index");u();u();var jt=d("@terradharitri/sdk-core"),Dt=d("@terradharitri/sdk-dapp/constants/index"),zt=O(d("bignumber.js"));u();u();var Wt=d("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");u();var Yt=d("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");u();var Zt=O(d("bignumber.js"));u();var Gt=d("@terradharitri/sdk-dapp/constants/index"),Jt=d("@terradharitri/sdk-dapp/utils/smartContracts"),Xt=d("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),$t=O(d("bignumber.js"));u();var Ht=O(d("bignumber.js"));u();u();var Kt=O(d("axios"));u();u();u();var Vt=d("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");u();var Qt=d("@terradharitri/sdk-dapp/constants/index");u();u();u();var re=d("@terradharitri/sdk-dapp/constants/index"),bt=O(d("bignumber.js")),me,ge,be,_t=(0,Be.formatAmount)({input:String((me=re.GAS_PRICE)!=null?me:1e9),decimals:(ge=re.DECIMALS)!=null?ge:18,showLastNonZeroDecimal:!0,digits:(be=re.DIGITS)!=null?be:4}),er=new bt.default(_t).times(10).toString(10);u();var tr=d("@terradharitri/sdk-dapp/constants/index"),rr=O(d("bignumber.js"));u();var or=O(d("bignumber.js"));u();u();var D=O(d("react")),yt=d("@fortawesome/free-solid-svg-icons"),vt=d("@fortawesome/react-fontawesome"),_e=O(d("classnames"));u();var wt=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wt));var W={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"},Et=(lt(),Ae(xe)).default,At=l=>{let{avatar:f,type:p}=l;return p==="NonFungibleDCDT"?D.default.createElement("div",{className:(0,_e.default)(W.tokenAvatar,W.tokenAvatarNFT)},"NFT"):p==="SemiFungibleDCDT"?D.default.createElement("div",{className:(0,_e.default)(W.tokenAvatar,W.tokenAvatarSFT)},"SFT"):p==="REWA"?D.default.createElement("div",{className:W.tokenAvatar},l.RewaIcon?D.default.createElement(l.RewaIcon,null):D.default.createElement(Et,null)):f?D.default.createElement("div",{className:W.tokenAvatar},D.default.createElement("img",{src:f})):D.default.createElement("div",{className:W.tokenAvatar},D.default.createElement(vt.FontAwesomeIcon,{icon:yt.faDiamond}))};u();var xt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xt));var K={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},kt=({rewaPriceInUsd:l,label:f="Fee",feeLimit:p,rewaLabel:y})=>z.default.createElement("div",{className:K.fee},z.default.createElement("span",{className:dt.label},f),z.default.createElement("div",{className:K.token},z.default.createElement(At,{type:"REWA"}),z.default.createElement("div",{className:K.value},z.default.createElement(st.FormatAmount,{rewaLabel:y,value:p,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),p!==ht&&z.default.createElement("span",{className:K.price},gt({feeLimit:p,rewaPriceInUsd:l})));});var Z={};$();X(Z,Je(Ue()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
