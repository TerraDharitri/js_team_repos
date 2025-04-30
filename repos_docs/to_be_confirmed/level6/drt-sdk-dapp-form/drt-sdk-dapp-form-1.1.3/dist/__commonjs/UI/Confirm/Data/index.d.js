"use strict";import{a as it,b as kt,d as Y,e as Lt,f as q}from"../../../../__chunks__/chunk-RGFNPOTZ.js";var st=kt(($t,ut)=>{"use strict";q();var St=Object.create,X=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,Mt=Object.getOwnPropertyNames,Rt=Object.getPrototypeOf,jt=Object.prototype.hasOwnProperty,Nt=(s,l)=>()=>(s&&(l=s(s=0)),l),J=(s,l)=>()=>(l||s((l={exports:{}}).exports,l),l.exports),zt=(s,l)=>{for(var f in l)X(s,f,{get:l[f],enumerable:!0})},pt=(s,l,f,d)=>{if(l&&typeof l=="object"||typeof l=="function")for(let m of Mt(l))!jt.call(s,m)&&m!==f&&X(s,m,{get:()=>l[m],enumerable:!(d=Pt(l,m))||d.enumerable});return s},H=(s,l,f)=>(f=s!=null?St(Rt(s)):{},pt(l||!s||!s.__esModule?X(f,"default",{value:s,enumerable:!0}):f,s)),Dt=s=>pt(X({},"__esModule",{value:!0}),s),Ft=J(s=>{"use strict";z(),s.byteLength=B,s.toByteArray=L,s.fromByteArray=P;var l=[],f=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(y=0,b=m.length;y<b;++y)l[y]=m[y],f[m.charCodeAt(y)]=y;var y,b;f["-".charCodeAt(0)]=62,f["_".charCodeAt(0)]=63;function n(u){var h=u.length;if(h%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var g=u.indexOf("=");g===-1&&(g=h);var c=g===h?0:4-g%4;return[g,c]}function B(u){var h=n(u),g=h[0],c=h[1];return(g+c)*3/4-c}function w(u,h,g){return(h+g)*3/4-g}function L(u){var h,g=n(u),c=g[0],x=g[1],v=new d(w(u,c,x)),M=0,j=x>0?c-4:c,I;for(I=0;I<j;I+=4)h=f[u.charCodeAt(I)]<<18|f[u.charCodeAt(I+1)]<<12|f[u.charCodeAt(I+2)]<<6|f[u.charCodeAt(I+3)],v[M++]=h>>16&255,v[M++]=h>>8&255,v[M++]=h&255;return x===2&&(h=f[u.charCodeAt(I)]<<2|f[u.charCodeAt(I+1)]>>4,v[M++]=h&255),x===1&&(h=f[u.charCodeAt(I)]<<10|f[u.charCodeAt(I+1)]<<4|f[u.charCodeAt(I+2)]>>2,v[M++]=h>>8&255,v[M++]=h&255),v}function _(u){return l[u>>18&63]+l[u>>12&63]+l[u>>6&63]+l[u&63]}function U(u,h,g){for(var c,x=[],v=h;v<g;v+=3)c=(u[v]<<16&16711680)+(u[v+1]<<8&65280)+(u[v+2]&255),x.push(_(c));return x.join("")}function P(u){for(var h,g=u.length,c=g%3,x=[],v=16383,M=0,j=g-c;M<j;M+=v)x.push(U(u,M,M+v>j?j:M+v));return c===1?(h=u[g-1],x.push(l[h>>2]+l[h<<4&63]+"==")):c===2&&(h=(u[g-2]<<8)+u[g-1],x.push(l[h>>10]+l[h>>4&63]+l[h<<2&63]+"=")),x.join("")}}),Wt=J(s=>{z(),s.read=function(l,f,d,m,y){var b,n,B=y*8-m-1,w=(1<<B)-1,L=w>>1,_=-7,U=d?y-1:0,P=d?-1:1,u=l[f+U];for(U+=P,b=u&(1<<-_)-1,u>>=-_,_+=B;_>0;b=b*256+l[f+U],U+=P,_-=8);for(n=b&(1<<-_)-1,b>>=-_,_+=m;_>0;n=n*256+l[f+U],U+=P,_-=8);if(b===0)b=1-L;else{if(b===w)return n?NaN:(u?-1:1)*(1/0);n=n+Math.pow(2,m),b=b-L}return(u?-1:1)*n*Math.pow(2,b-m)},s.write=function(l,f,d,m,y,b){var n,B,w,L=b*8-y-1,_=(1<<L)-1,U=_>>1,P=y===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=m?0:b-1,h=m?1:-1,g=f<0||f===0&&1/f<0?1:0;for(f=Math.abs(f),isNaN(f)||f===1/0?(B=isNaN(f)?1:0,n=_):(n=Math.floor(Math.log(f)/Math.LN2),f*(w=Math.pow(2,-n))<1&&(n--,w*=2),n+U>=1?f+=P/w:f+=P*Math.pow(2,1-U),f*w>=2&&(n++,w/=2),n+U>=_?(B=0,n=_):n+U>=1?(B=(f*w-1)*Math.pow(2,y),n=n+U):(B=f*Math.pow(2,U-1)*Math.pow(2,y),n=0));y>=8;l[d+u]=B&255,u+=h,B/=256,y-=8);for(n=n<<y|B,L+=y;L>0;l[d+u]=n&255,u+=h,n/=256,L-=8);l[d+u-h]|=g*128}}),Yt=J(s=>{"use strict";z();var l=Ft(),f=Wt(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;s.Buffer=n,s.SlowBuffer=x,s.INSPECT_MAX_BYTES=50;var m=2147483647;s.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=y(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(r){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function b(t){if(t>m)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,n.prototype),e}function n(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _(t)}return B(t,e,r)}n.poolSize=8192;function B(t,e,r){if(typeof t=="string")return U(t,e);if(ArrayBuffer.isView(t))return u(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(N(t,ArrayBuffer)||t&&N(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(t,SharedArrayBuffer)||t&&N(t.buffer,SharedArrayBuffer)))return h(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=t.valueOf&&t.valueOf();if(o!=null&&o!==t)return n.from(o,e,r);var a=g(t);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return n.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}n.from=function(t,e,r){return B(t,e,r)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function w(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function L(t,e,r){return w(t),t<=0?b(t):e!==void 0?typeof r=="string"?b(t).fill(e,r):b(t).fill(e):b(t)}n.alloc=function(t,e,r){return L(t,e,r)};function _(t){return w(t),b(t<0?0:c(t)|0)}n.allocUnsafe=function(t){return _(t)},n.allocUnsafeSlow=function(t){return _(t)};function U(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!n.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=v(t,e)|0,o=b(r),a=o.write(t,e);return a!==r&&(o=o.slice(0,a)),o}function P(t){for(var e=t.length<0?0:c(t.length)|0,r=b(e),o=0;o<e;o+=1)r[o]=t[o]&255;return r}function u(t){if(N(t,Uint8Array)){var e=new Uint8Array(t);return h(e.buffer,e.byteOffset,e.byteLength)}return P(t)}function h(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return e===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,e):o=new Uint8Array(t,e,r),Object.setPrototypeOf(o,n.prototype),o}function g(t){if(n.isBuffer(t)){var e=c(t.length)|0,r=b(e);return r.length===0||t.copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||G(t.length)?b(0):P(t);if(t.type==="Buffer"&&Array.isArray(t.data))return P(t.data)}function c(t){if(t>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return t|0}function x(t){return+t!=t&&(t=0),n.alloc(+t)}n.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==n.prototype},n.compare=function(t,e){if(N(t,Uint8Array)&&(t=n.from(t,t.offset,t.byteLength)),N(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(t)||!n.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,o=e.length,a=0,i=Math.min(r,o);a<i;++a)if(t[a]!==e[a]){r=t[a],o=e[a];break}return r<o?-1:o<r?1:0},n.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return n.alloc(0);var r;if(e===void 0)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var o=n.allocUnsafe(e),a=0;for(r=0;r<t.length;++r){var i=t[r];if(N(i,Uint8Array))a+i.length>o.length?n.from(i).copy(o,a):Uint8Array.prototype.set.call(o,i,a);else if(n.isBuffer(i))i.copy(o,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=i.length}return o};function v(t,e){if(n.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||N(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Z(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return ot(t).length;default:if(a)return o?-1:Z(t).length;e=(""+e).toLowerCase(),a=!0}}n.byteLength=v;function M(t,e,r){var o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return wt(this,e,r);case"utf8":case"utf-8":return Q(this,e,r);case"ascii":return _t(this,e,r);case"latin1":case"binary":return vt(this,e,r);case"base64":return bt(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Et(this,e,r);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function j(t,e,r){var o=t[e];t[e]=t[r],t[r]=o}n.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)j(this,e,e+1);return this},n.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)j(this,e,e+3),j(this,e+1,e+2);return this},n.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)j(this,e,e+7),j(this,e+1,e+6),j(this,e+2,e+5),j(this,e+3,e+4);return this},n.prototype.toString=function(){var t=this.length;return t===0?"":arguments.length===0?Q(this,0,t):M.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(t){if(!n.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:n.compare(this,t)===0},n.prototype.inspect=function(){var t="",e=s.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},d&&(n.prototype[d]=n.prototype.inspect),n.prototype.compare=function(t,e,r,o,a){if(N(t,Uint8Array)&&(t=n.from(t,t.offset,t.byteLength)),!n.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(e===void 0&&(e=0),r===void 0&&(r=t?t.length:0),o===void 0&&(o=0),a===void 0&&(a=this.length),e<0||r>t.length||o<0||a>this.length)throw new RangeError("out of range index");if(o>=a&&e>=r)return 0;if(o>=a)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,o>>>=0,a>>>=0,this===t)return 0;for(var i=a-o,p=r-e,E=Math.min(i,p),C=this.slice(o,a),A=t.slice(e,r),T=0;T<E;++T)if(C[T]!==A[T]){i=C[T],p=A[T];break}return i<p?-1:p<i?1:0};function I(t,e,r,o,a){if(t.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,G(r)&&(r=a?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(a)return-1;r=t.length-1}else if(r<0)if(a)r=0;else return-1;if(typeof e=="string"&&(e=n.from(e,o)),n.isBuffer(e))return e.length===0?-1:K(t,e,r,o,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):K(t,[e],r,o,a);throw new TypeError("val must be string, number or Buffer")}function K(t,e,r,o,a){var i=1,p=t.length,E=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(t.length<2||e.length<2)return-1;i=2,p/=2,E/=2,r/=2}function C(nt,at){return i===1?nt[at]:nt.readUInt16BE(at*i)}var A;if(a){var T=-1;for(A=r;A<p;A++)if(C(t,A)===C(e,T===-1?0:A-T)){if(T===-1&&(T=A),A-T+1===E)return T*i}else T!==-1&&(A-=A-T),T=-1}else for(r+E>p&&(r=p-E),A=r;A>=0;A--){for(var S=!0,W=0;W<E;W++)if(C(t,A+W)!==C(e,W)){S=!1;break}if(S)return A}return-1}n.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},n.prototype.indexOf=function(t,e,r){return I(this,t,e,r,!0)},n.prototype.lastIndexOf=function(t,e,r){return I(this,t,e,r,!1)};function ct(t,e,r,o){r=Number(r)||0;var a=t.length-r;o?(o=Number(o),o>a&&(o=a)):o=a;var i=e.length;o>i/2&&(o=i/2);for(var p=0;p<o;++p){var E=parseInt(e.substr(p*2,2),16);if(G(E))return p;t[r+p]=E}return p}function dt(t,e,r,o){return F(Z(e,t.length-r),t,r,o)}function ht(t,e,r,o){return F(Bt(e),t,r,o)}function mt(t,e,r,o){return F(ot(e),t,r,o)}function gt(t,e,r,o){return F(Ut(e,t.length-r),t,r,o)}n.prototype.write=function(t,e,r,o){if(e===void 0)o="utf8",r=this.length,e=0;else if(r===void 0&&typeof e=="string")o=e,r=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-e;if((r===void 0||r>a)&&(r=a),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var i=!1;;)switch(o){case"hex":return ct(this,t,e,r);case"utf8":case"utf-8":return dt(this,t,e,r);case"ascii":case"latin1":case"binary":return ht(this,t,e,r);case"base64":return mt(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gt(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),i=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function bt(t,e,r){return e===0&&r===t.length?l.fromByteArray(t):l.fromByteArray(t.slice(e,r))}function Q(t,e,r){r=Math.min(t.length,r);for(var o=[],a=e;a<r;){var i=t[a],p=null,E=i>239?4:i>223?3:i>191?2:1;if(a+E<=r){var C,A,T,S;switch(E){case 1:i<128&&(p=i);break;case 2:C=t[a+1],(C&192)===128&&(S=(i&31)<<6|C&63,S>127&&(p=S));break;case 3:C=t[a+1],A=t[a+2],(C&192)===128&&(A&192)===128&&(S=(i&15)<<12|(C&63)<<6|A&63,S>2047&&(S<55296||S>57343)&&(p=S));break;case 4:C=t[a+1],A=t[a+2],T=t[a+3],(C&192)===128&&(A&192)===128&&(T&192)===128&&(S=(i&15)<<18|(C&63)<<12|(A&63)<<6|T&63,S>65535&&S<1114112&&(p=S))}}p===null?(p=65533,E=1):p>65535&&(p-=65536,o.push(p>>>10&1023|55296),p=56320|p&1023),o.push(p),a+=E}return yt(o)}var $=4096;function yt(t){var e=t.length;if(e<=$)return String.fromCharCode.apply(String,t);for(var r="",o=0;o<e;)r+=String.fromCharCode.apply(String,t.slice(o,o+=$));return r}function _t(t,e,r){var o="";r=Math.min(t.length,r);for(var a=e;a<r;++a)o+=String.fromCharCode(t[a]&127);return o}function vt(t,e,r){var o="";r=Math.min(t.length,r);for(var a=e;a<r;++a)o+=String.fromCharCode(t[a]);return o}function wt(t,e,r){var o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);for(var a="",i=e;i<r;++i)a+=Tt[t[i]];return a}function Et(t,e,r){for(var o=t.slice(e,r),a="",i=0;i<o.length-1;i+=2)a+=String.fromCharCode(o[i]+o[i+1]*256);return a}n.prototype.slice=function(t,e){var r=this.length;t=~~t,e=e===void 0?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t);var o=this.subarray(t,e);return Object.setPrototypeOf(o,n.prototype),o};function O(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(t,e,r){t=t>>>0,e=e>>>0,r||O(t,e,this.length);for(var o=this[t],a=1,i=0;++i<e&&(a*=256);)o+=this[t+i]*a;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(t,e,r){t=t>>>0,e=e>>>0,r||O(t,e,this.length);for(var o=this[t+--e],a=1;e>0&&(a*=256);)o+=this[t+--e]*a;return o},n.prototype.readUint8=n.prototype.readUInt8=function(t,e){return t=t>>>0,e||O(t,1,this.length),this[t]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(t,e){return t=t>>>0,e||O(t,2,this.length),this[t]|this[t+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(t,e){return t=t>>>0,e||O(t,2,this.length),this[t]<<8|this[t+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(t,e){return t=t>>>0,e||O(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(t,e){return t=t>>>0,e||O(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},n.prototype.readIntLE=function(t,e,r){t=t>>>0,e=e>>>0,r||O(t,e,this.length);for(var o=this[t],a=1,i=0;++i<e&&(a*=256);)o+=this[t+i]*a;return a*=128,o>=a&&(o-=Math.pow(2,8*e)),o},n.prototype.readIntBE=function(t,e,r){t=t>>>0,e=e>>>0,r||O(t,e,this.length);for(var o=e,a=1,i=this[t+--o];o>0&&(a*=256);)i+=this[t+--o]*a;return a*=128,i>=a&&(i-=Math.pow(2,8*e)),i},n.prototype.readInt8=function(t,e){return t=t>>>0,e||O(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},n.prototype.readInt16LE=function(t,e){t=t>>>0,e||O(t,2,this.length);var r=this[t]|this[t+1]<<8;return r&32768?r|4294901760:r},n.prototype.readInt16BE=function(t,e){t=t>>>0,e||O(t,2,this.length);var r=this[t+1]|this[t]<<8;return r&32768?r|4294901760:r},n.prototype.readInt32LE=function(t,e){return t=t>>>0,e||O(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},n.prototype.readInt32BE=function(t,e){return t=t>>>0,e||O(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},n.prototype.readFloatLE=function(t,e){return t=t>>>0,e||O(t,4,this.length),f.read(this,t,!0,23,4)},n.prototype.readFloatBE=function(t,e){return t=t>>>0,e||O(t,4,this.length),f.read(this,t,!1,23,4)},n.prototype.readDoubleLE=function(t,e){return t=t>>>0,e||O(t,8,this.length),f.read(this,t,!0,52,8)},n.prototype.readDoubleBE=function(t,e){return t=t>>>0,e||O(t,8,this.length),f.read(this,t,!1,52,8)};function R(t,e,r,o,a,i){if(!n.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<i)throw new RangeError('"value" argument is out of bounds');if(r+o>t.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(t,e,r,o){if(t=+t,e=e>>>0,r=r>>>0,!o){var a=Math.pow(2,8*r)-1;R(this,t,e,r,a,0)}var i=1,p=0;for(this[e]=t&255;++p<r&&(i*=256);)this[e+p]=t/i&255;return e+r},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(t,e,r,o){if(t=+t,e=e>>>0,r=r>>>0,!o){var a=Math.pow(2,8*r)-1;R(this,t,e,r,a,0)}var i=r-1,p=1;for(this[e+i]=t&255;--i>=0&&(p*=256);)this[e+i]=t/p&255;return e+r},n.prototype.writeUint8=n.prototype.writeUInt8=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,1,255,0),this[e]=t&255,e+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,2,65535,0),this[e]=t&255,this[e+1]=t>>>8,e+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=t&255,e+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t&255,e+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4},n.prototype.writeIntLE=function(t,e,r,o){if(t=+t,e=e>>>0,!o){var a=Math.pow(2,8*r-1);R(this,t,e,r,a-1,-a)}var i=0,p=1,E=0;for(this[e]=t&255;++i<r&&(p*=256);)t<0&&E===0&&this[e+i-1]!==0&&(E=1),this[e+i]=(t/p>>0)-E&255;return e+r},n.prototype.writeIntBE=function(t,e,r,o){if(t=+t,e=e>>>0,!o){var a=Math.pow(2,8*r-1);R(this,t,e,r,a-1,-a)}var i=r-1,p=1,E=0;for(this[e+i]=t&255;--i>=0&&(p*=256);)t<0&&E===0&&this[e+i+1]!==0&&(E=1),this[e+i]=(t/p>>0)-E&255;return e+r},n.prototype.writeInt8=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=t&255,e+1},n.prototype.writeInt16LE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,2,32767,-32768),this[e]=t&255,this[e+1]=t>>>8,e+2},n.prototype.writeInt16BE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=t&255,e+2},n.prototype.writeInt32LE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,4,2147483647,-2147483648),this[e]=t&255,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},n.prototype.writeInt32BE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4};function tt(t,e,r,o,a,i){if(r+o>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function et(t,e,r,o,a){return e=+e,r=r>>>0,a||tt(t,e,r,4,34028234663852886e22,-34028234663852886e22),f.write(t,e,r,o,23,4),r+4}n.prototype.writeFloatLE=function(t,e,r){return et(this,t,e,!0,r)},n.prototype.writeFloatBE=function(t,e,r){return et(this,t,e,!1,r)};function rt(t,e,r,o,a){return e=+e,r=r>>>0,a||tt(t,e,r,8,17976931348623157e292,-17976931348623157e292),f.write(t,e,r,o,52,8),r+8}n.prototype.writeDoubleLE=function(t,e,r){return rt(this,t,e,!0,r)},n.prototype.writeDoubleBE=function(t,e,r){return rt(this,t,e,!1,r)},n.prototype.copy=function(t,e,r,o){if(!n.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),e>=t.length&&(e=t.length),e||(e=0),o>0&&o<r&&(o=r),o===r||t.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),t.length-e<o-r&&(o=t.length-e+r);var a=o-r;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,r,o):Uint8Array.prototype.set.call(t,this.subarray(r,o),e),a},n.prototype.fill=function(t,e,r,o){if(typeof t=="string"){if(typeof e=="string"?(o=e,e=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(t.length===1){var a=t.charCodeAt(0);(o==="utf8"&&a<128||o==="latin1")&&(t=a)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e=e>>>0,r=r===void 0?this.length:r>>>0,t||(t=0);var i;if(typeof t=="number")for(i=e;i<r;++i)this[i]=t;else{var p=n.isBuffer(t)?t:n.from(t,o),E=p.length;if(E===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=p[i%E]}return this};var xt=/[^+/0-9A-Za-z-_]/g;function At(t){if(t=t.split("=")[0],t=t.trim().replace(xt,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function Z(t,e){e=e||1/0;for(var r,o=t.length,a=null,i=[],p=0;p<o;++p){if(r=t.charCodeAt(p),r>55295&&r<57344){if(!a){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(p+1===o){(e-=3)>-1&&i.push(239,191,189);continue}a=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),a=r;continue}r=(a-55296<<10|r-56320)+65536}else a&&(e-=3)>-1&&i.push(239,191,189);if(a=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return i}function Bt(t){for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r)&255);return e}function Ut(t,e){for(var r,o,a,i=[],p=0;p<t.length&&!((e-=2)<0);++p)r=t.charCodeAt(p),o=r>>8,a=r%256,i.push(a),i.push(o);return i}function ot(t){return l.toByteArray(At(t))}function F(t,e,r,o){for(var a=0;a<o&&!(a+r>=e.length||a>=t.length);++a)e[a+r]=t[a];return a}function N(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function G(t){return t!==t}var Tt=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var o=r*16,a=0;a<16;++a)e[o+a]=t[r]+t[a];return e}()}),qt=J((s,l)=>{z();var f=l.exports={},d,m;function y(){throw new Error("setTimeout has not been defined")}function b(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=y}catch(c){d=y}try{typeof clearTimeout=="function"?m=clearTimeout:m=b}catch(c){m=b}})();function n(c){if(d===setTimeout)return setTimeout(c,0);if((d===y||!d)&&setTimeout)return d=setTimeout,setTimeout(c,0);try{return d(c,0)}catch(x){try{return d.call(null,c,0)}catch(v){return d.call(this,c,0)}}}function B(c){if(m===clearTimeout)return clearTimeout(c);if((m===b||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(c);try{return m(c)}catch(x){try{return m.call(null,c)}catch(v){return m.call(this,c)}}}var w=[],L=!1,_,U=-1;function P(){!L||!_||(L=!1,_.length?w=_.concat(w):U=-1,w.length&&u())}function u(){if(!L){var c=n(P);L=!0;for(var x=w.length;x;){for(_=w,w=[];++U<x;)_&&_[U].run();U=-1,x=w.length}_=null,L=!1,B(c)}}f.nextTick=function(c){var x=new Array(arguments.length-1);if(arguments.length>1)for(var v=1;v<arguments.length;v++)x[v-1]=arguments[v];w.push(new h(c,x)),w.length===1&&!L&&n(u)};function h(c,x){this.fun=c,this.array=x}h.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={};function g(){}f.on=g,f.addListener=g,f.once=g,f.off=g,f.removeListener=g,f.removeAllListeners=g,f.emit=g,f.prependListener=g,f.prependOnceListener=g,f.listeners=function(c){return[]},f.binding=function(c){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(c){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),Vt,Xt,Jt,z=Nt(()=>{Vt=H(Yt()),Xt=H(qt()),Jt=function(s){function l(){var d=this||self;return delete s.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return l();s.defineProperty(s.prototype,"__magic__",{configurable:!0,get:l});var f=__magic__;return f}(Object)}),lt={};zt(lt,{Data:()=>Qt});ut.exports=Dt(lt);z();var k=H(it("react")),Zt=it("@terradharitri/sdk-dapp/utils/decoders/decodePart");z();var Gt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gt));var ft={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};z();z();var Ht=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ht));var V={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"},Kt=(s,l)=>[...s.matchAll(new RegExp(l,"gi"))].map(f=>f.index),Qt=({label:s="Data",scCallLabel:l="SC Call",data:f,highlight:d,isScCall:m})=>{let y=k.default.createElement(k.default.Fragment,null,f),[b,...n]=d&&m?d.split("@"):[];if(f&&d&&Kt(f,d).length===1)switch(!0){case f.startsWith(d):{let[,B]=f.split(d);y=k.default.createElement(k.default.Fragment,null,d,k.default.createElement("span",null,B));break}case f.endsWith(d):{let[B]=f.split(d);y=k.default.createElement(k.default.Fragment,null,k.default.createElement("span",null,B),d);break}default:{let[B,w]=f.split(d);y=k.default.createElement(k.default.Fragment,null,k.default.createElement("span",null,B),d,k.default.createElement("span",null,w));break}}return k.default.createElement(k.default.Fragment,null,b&&k.default.createElement("div",{className:V.data},k.default.createElement("span",{className:ft.label},l),k.default.createElement("div",{"data-testid":"confirmScCall",className:V.value},[(0,Zt.decodePart)(b),...n].join("@"))),k.default.createElement("div",{className:V.data},k.default.createElement("span",{className:ft.label},s),k.default.createElement("div",{"data-testid":"confirmData",className:V.value},f?y:"N/A")))};});var D={};q();Y(D,Lt(st()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
