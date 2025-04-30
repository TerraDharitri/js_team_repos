"use strict";import{a as t,b as ur,d as pe,e as mr,f as se}from"../../../../__chunks__/chunk-RGFNPOTZ.js";var pr=ur((Ac,lr)=>{"use strict";se();var hr=Object.create,J=Object.defineProperty,gr=Object.defineProperties,br=Object.getOwnPropertyDescriptor,wr=Object.getOwnPropertyDescriptors,xr=Object.getOwnPropertyNames,Ne=Object.getOwnPropertySymbols,qr=Object.getPrototypeOf,He=Object.prototype.hasOwnProperty,Er=Object.prototype.propertyIsEnumerable,Me=(i,a,s)=>a in i?J(i,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[a]=s,Y=(i,a)=>{for(var s in a||(a={}))He.call(a,s)&&Me(i,s,a[s]);if(Ne)for(var s of Ne(a))Er.call(a,s)&&Me(i,s,a[s]);return i},H=(i,a)=>gr(i,wr(a)),$e=(i,a)=>()=>(i&&(a=i(i=0)),a),me=(i,a)=>()=>(a||i((a={exports:{}}).exports,a),a.exports),Ze=(i,a)=>{for(var s in a)J(i,s,{get:a[s],enumerable:!0})},Ke=(i,a,s,d)=>{if(a&&typeof a=="object"||typeof a=="function")for(let u of xr(a))!He.call(i,u)&&u!==s&&J(i,u,{get:()=>a[u],enumerable:!(d=br(a,u))||d.enumerable});return i},f=(i,a,s)=>(s=i!=null?hr(qr(i)):{},Ke(a||!i||!i.__esModule?J(s,"default",{value:i,enumerable:!0}):s,i)),Je=i=>Ke(J({},"__esModule",{value:!0}),i),Ar=me(i=>{"use strict";l(),i.byteLength=h,i.toByteArray=I,i.fromByteArray=C;var a=[],s=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(m=0,v=u.length;m<v;++m)a[m]=u[m],s[u.charCodeAt(m)]=m;var m,v;s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63;function c(g){var q=g.length;if(q%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var x=g.indexOf("=");x===-1&&(x=q);var w=x===q?0:4-x%4;return[x,w]}function h(g){var q=c(g),x=q[0],w=q[1];return(x+w)*3/4-w}function y(g,q,x){return(q+x)*3/4-x}function I(g){var q,x=c(g),w=x[0],k=x[1],O=new d(y(g,w,k)),z=0,j=k>0?w-4:w,R;for(R=0;R<j;R+=4)q=s[g.charCodeAt(R)]<<18|s[g.charCodeAt(R+1)]<<12|s[g.charCodeAt(R+2)]<<6|s[g.charCodeAt(R+3)],O[z++]=q>>16&255,O[z++]=q>>8&255,O[z++]=q&255;return k===2&&(q=s[g.charCodeAt(R)]<<2|s[g.charCodeAt(R+1)]>>4,O[z++]=q&255),k===1&&(q=s[g.charCodeAt(R)]<<10|s[g.charCodeAt(R+1)]<<4|s[g.charCodeAt(R+2)]>>2,O[z++]=q>>8&255,O[z++]=q&255),O}function A(g){return a[g>>18&63]+a[g>>12&63]+a[g>>6&63]+a[g&63]}function S(g,q,x){for(var w,k=[],O=q;O<x;O+=3)w=(g[O]<<16&16711680)+(g[O+1]<<8&65280)+(g[O+2]&255),k.push(A(w));return k.join("")}function C(g){for(var q,x=g.length,w=x%3,k=[],O=16383,z=0,j=x-w;z<j;z+=O)k.push(S(g,z,z+O>j?j:z+O));return w===1?(q=g[x-1],k.push(a[q>>2]+a[q<<4&63]+"==")):w===2&&(q=(g[x-2]<<8)+g[x-1],k.push(a[q>>10]+a[q>>4&63]+a[q<<2&63]+"=")),k.join("")}}),Sr=me(i=>{l(),i.read=function(a,s,d,u,m){var v,c,h=m*8-u-1,y=(1<<h)-1,I=y>>1,A=-7,S=d?m-1:0,C=d?-1:1,g=a[s+S];for(S+=C,v=g&(1<<-A)-1,g>>=-A,A+=h;A>0;v=v*256+a[s+S],S+=C,A-=8);for(c=v&(1<<-A)-1,v>>=-A,A+=u;A>0;c=c*256+a[s+S],S+=C,A-=8);if(v===0)v=1-I;else{if(v===y)return c?NaN:(g?-1:1)*(1/0);c=c+Math.pow(2,u),v=v-I}return(g?-1:1)*c*Math.pow(2,v-u)},i.write=function(a,s,d,u,m,v){var c,h,y,I=v*8-m-1,A=(1<<I)-1,S=A>>1,C=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=u?0:v-1,q=u?1:-1,x=s<0||s===0&&1/s<0?1:0;for(s=Math.abs(s),isNaN(s)||s===1/0?(h=isNaN(s)?1:0,c=A):(c=Math.floor(Math.log(s)/Math.LN2),s*(y=Math.pow(2,-c))<1&&(c--,y*=2),c+S>=1?s+=C/y:s+=C*Math.pow(2,1-S),s*y>=2&&(c++,y/=2),c+S>=A?(h=0,c=A):c+S>=1?(h=(s*y-1)*Math.pow(2,m),c=c+S):(h=s*Math.pow(2,S-1)*Math.pow(2,m),c=0));m>=8;a[d+g]=h&255,g+=q,h/=256,m-=8);for(c=c<<m|h,I+=m;I>0;a[d+g]=c&255,g+=q,c/=256,I-=8);a[d+g-q]|=x*128}}),Ir=me(i=>{"use strict";l();var a=Ar(),s=Sr(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=c,i.SlowBuffer=k,i.INSPECT_MAX_BYTES=50;var u=2147483647;i.kMaxLength=u,c.TYPED_ARRAY_SUPPORT=m(),!c.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function m(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(o){return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}});function v(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,c.prototype),r}function c(e,r,o){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return A(e)}return h(e,r,o)}c.poolSize=8192;function h(e,r,o){if(typeof e=="string")return S(e,r);if(ArrayBuffer.isView(e))return g(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(F(e,ArrayBuffer)||e&&F(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(F(e,SharedArrayBuffer)||e&&F(e.buffer,SharedArrayBuffer)))return q(e,r,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return c.from(n,r,o);var p=x(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return c.from(e[Symbol.toPrimitive]("string"),r,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}c.from=function(e,r,o){return h(e,r,o)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function I(e,r,o){return y(e),e<=0?v(e):r!==void 0?typeof o=="string"?v(e).fill(r,o):v(e).fill(r):v(e)}c.alloc=function(e,r,o){return I(e,r,o)};function A(e){return y(e),v(e<0?0:w(e)|0)}c.allocUnsafe=function(e){return A(e)},c.allocUnsafeSlow=function(e){return A(e)};function S(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var o=O(e,r)|0,n=v(o),p=n.write(e,r);return p!==o&&(n=n.slice(0,p)),n}function C(e){for(var r=e.length<0?0:w(e.length)|0,o=v(r),n=0;n<r;n+=1)o[n]=e[n]&255;return o}function g(e){if(F(e,Uint8Array)){var r=new Uint8Array(e);return q(r.buffer,r.byteOffset,r.byteLength)}return C(e)}function q(e,r,o){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return r===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,r):n=new Uint8Array(e,r,o),Object.setPrototypeOf(n,c.prototype),n}function x(e){if(c.isBuffer(e)){var r=w(e.length)|0,o=v(r);return o.length===0||e.copy(o,0,0,r),o}if(e.length!==void 0)return typeof e.length!="number"||qe(e.length)?v(0):C(e);if(e.type==="Buffer"&&Array.isArray(e.data))return C(e.data)}function w(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function k(e){return+e!=e&&(e=0),c.alloc(+e)}c.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==c.prototype},c.compare=function(e,r){if(F(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),F(r,Uint8Array)&&(r=c.from(r,r.offset,r.byteLength)),!c.isBuffer(e)||!c.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var o=e.length,n=r.length,p=0,_=Math.min(o,n);p<_;++p)if(e[p]!==r[p]){o=e[p],n=r[p];break}return o<n?-1:n<o?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return c.alloc(0);var o;if(r===void 0)for(r=0,o=0;o<e.length;++o)r+=e[o].length;var n=c.allocUnsafe(r),p=0;for(o=0;o<e.length;++o){var _=e[o];if(F(_,Uint8Array))p+_.length>n.length?c.from(_).copy(n,p):Uint8Array.prototype.set.call(n,_,p);else if(c.isBuffer(_))_.copy(n,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=_.length}return n};function O(e,r){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||F(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var p=!1;;)switch(r){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return xe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Be(e).length;default:if(p)return n?-1:xe(e).length;r=(""+r).toLowerCase(),p=!0}}c.byteLength=O;function z(e,r,o){var n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,r>>>=0,o<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return ne(this,r,o);case"utf8":case"utf-8":return Z(this,r,o);case"ascii":return ge(this,r,o);case"latin1":case"binary":return be(this,r,o);case"base64":return oe(this,r,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return we(this,r,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}c.prototype._isBuffer=!0;function j(e,r,o){var n=e[r];e[r]=e[o],e[o]=n}c.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)j(this,r,r+1);return this},c.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)j(this,r,r+3),j(this,r+1,r+2);return this},c.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)j(this,r,r+7),j(this,r+1,r+6),j(this,r+2,r+5),j(this,r+3,r+4);return this},c.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Z(this,0,e):z.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:c.compare(this,e)===0},c.prototype.inspect=function(){var e="",r=i.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},d&&(c.prototype[d]=c.prototype.inspect),c.prototype.compare=function(e,r,o,n,p){if(F(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),p===void 0&&(p=this.length),r<0||o>e.length||n<0||p>this.length)throw new RangeError("out of range index");if(n>=p&&r>=o)return 0;if(n>=p)return-1;if(r>=o)return 1;if(r>>>=0,o>>>=0,n>>>=0,p>>>=0,this===e)return 0;for(var _=p-n,b=o-r,B=Math.min(_,b),P=this.slice(n,p),L=e.slice(r,o),T=0;T<B;++T)if(P[T]!==L[T]){_=P[T],b=L[T];break}return _<b?-1:b<_?1:0};function R(e,r,o,n,p){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,qe(o)&&(o=p?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(p)return-1;o=e.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof r=="string"&&(r=c.from(r,n)),c.isBuffer(r))return r.length===0?-1:X(e,r,o,n,p);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,r,o):Uint8Array.prototype.lastIndexOf.call(e,r,o):X(e,[r],o,n,p);throw new TypeError("val must be string, number or Buffer")}function X(e,r,o,n,p){var _=1,b=e.length,B=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||r.length<2)return-1;_=2,b/=2,B/=2,o/=2}function P(Le,Te){return _===1?Le[Te]:Le.readUInt16BE(Te*_)}var L;if(p){var T=-1;for(L=o;L<b;L++)if(P(e,L)===P(r,T===-1?0:L-T)){if(T===-1&&(T=L),L-T+1===B)return T*_}else T!==-1&&(L-=L-T),T=-1}else for(o+B>b&&(o=b-B),L=o;L>=0;L--){for(var V=!0,le=0;le<B;le++)if(P(e,L+le)!==P(r,le)){V=!1;break}if(V)return L}return-1}c.prototype.includes=function(e,r,o){return this.indexOf(e,r,o)!==-1},c.prototype.indexOf=function(e,r,o){return R(this,e,r,o,!0)},c.prototype.lastIndexOf=function(e,r,o){return R(this,e,r,o,!1)};function $(e,r,o,n){o=Number(o)||0;var p=e.length-o;n?(n=Number(n),n>p&&(n=p)):n=p;var _=r.length;n>_/2&&(n=_/2);for(var b=0;b<n;++b){var B=parseInt(r.substr(b*2,2),16);if(qe(B))return b;e[o+b]=B}return b}function fe(e,r,o,n){return ce(xe(r,e.length-o),e,o,n)}function ee(e,r,o,n){return ce(ir(r),e,o,n)}function re(e,r,o,n){return ce(Be(r),e,o,n)}function ye(e,r,o,n){return ce(_r(r,e.length-o),e,o,n)}c.prototype.write=function(e,r,o,n){if(r===void 0)n="utf8",o=this.length,r=0;else if(o===void 0&&typeof r=="string")n=r,o=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-r;if((o===void 0||o>p)&&(o=p),e.length>0&&(o<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var _=!1;;)switch(n){case"hex":return $(this,e,r,o);case"utf8":case"utf-8":return fe(this,e,r,o);case"ascii":case"latin1":case"binary":return ee(this,e,r,o);case"base64":return re(this,e,r,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ye(this,e,r,o);default:if(_)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),_=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function oe(e,r,o){return r===0&&o===e.length?a.fromByteArray(e):a.fromByteArray(e.slice(r,o))}function Z(e,r,o){o=Math.min(e.length,o);for(var n=[],p=r;p<o;){var _=e[p],b=null,B=_>239?4:_>223?3:_>191?2:1;if(p+B<=o){var P,L,T,V;switch(B){case 1:_<128&&(b=_);break;case 2:P=e[p+1],(P&192)===128&&(V=(_&31)<<6|P&63,V>127&&(b=V));break;case 3:P=e[p+1],L=e[p+2],(P&192)===128&&(L&192)===128&&(V=(_&15)<<12|(P&63)<<6|L&63,V>2047&&(V<55296||V>57343)&&(b=V));break;case 4:P=e[p+1],L=e[p+2],T=e[p+3],(P&192)===128&&(L&192)===128&&(T&192)===128&&(V=(_&15)<<18|(P&63)<<12|(L&63)<<6|T&63,V>65535&&V<1114112&&(b=V))}}b===null?(b=65533,B=1):b>65535&&(b-=65536,n.push(b>>>10&1023|55296),b=56320|b&1023),n.push(b),p+=B}return he(n)}var te=4096;function he(e){var r=e.length;if(r<=te)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<r;)o+=String.fromCharCode.apply(String,e.slice(n,n+=te));return o}function ge(e,r,o){var n="";o=Math.min(e.length,o);for(var p=r;p<o;++p)n+=String.fromCharCode(e[p]&127);return n}function be(e,r,o){var n="";o=Math.min(e.length,o);for(var p=r;p<o;++p)n+=String.fromCharCode(e[p]);return n}function ne(e,r,o){var n=e.length;(!r||r<0)&&(r=0),(!o||o<0||o>n)&&(o=n);for(var p="",_=r;_<o;++_)p+=dr[e[_]];return p}function we(e,r,o){for(var n=e.slice(r,o),p="",_=0;_<n.length-1;_+=2)p+=String.fromCharCode(n[_]+n[_+1]*256);return p}c.prototype.slice=function(e,r){var o=this.length;e=~~e,r=r===void 0?o:~~r,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),r<0?(r+=o,r<0&&(r=0)):r>o&&(r=o),r<e&&(r=e);var n=this.subarray(e,r);return Object.setPrototypeOf(n,c.prototype),n};function U(e,r,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>o)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||U(e,r,this.length);for(var n=this[e],p=1,_=0;++_<r&&(p*=256);)n+=this[e+_]*p;return n},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||U(e,r,this.length);for(var n=this[e+--r],p=1;r>0&&(p*=256);)n+=this[e+--r]*p;return n},c.prototype.readUint8=c.prototype.readUInt8=function(e,r){return e=e>>>0,r||U(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||U(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||U(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||U(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||U(e,r,this.length);for(var n=this[e],p=1,_=0;++_<r&&(p*=256);)n+=this[e+_]*p;return p*=128,n>=p&&(n-=Math.pow(2,8*r)),n},c.prototype.readIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||U(e,r,this.length);for(var n=r,p=1,_=this[e+--n];n>0&&(p*=256);)_+=this[e+--n]*p;return p*=128,_>=p&&(_-=Math.pow(2,8*r)),_},c.prototype.readInt8=function(e,r){return e=e>>>0,r||U(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},c.prototype.readInt16LE=function(e,r){e=e>>>0,r||U(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},c.prototype.readInt16BE=function(e,r){e=e>>>0,r||U(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},c.prototype.readInt32LE=function(e,r){return e=e>>>0,r||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,r){return e=e>>>0,r||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readFloatLE=function(e,r){return e=e>>>0,r||U(e,4,this.length),s.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,r){return e=e>>>0,r||U(e,4,this.length),s.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||U(e,8,this.length),s.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||U(e,8,this.length),s.read(this,e,!1,52,8)};function N(e,r,o,n,p,_){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>p||r<_)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,r,o,n){if(e=+e,r=r>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;N(this,e,r,o,p,0)}var _=1,b=0;for(this[r]=e&255;++b<o&&(_*=256);)this[r+b]=e/_&255;return r+o},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,r,o,n){if(e=+e,r=r>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;N(this,e,r,o,p,0)}var _=o-1,b=1;for(this[r+_]=e&255;--_>=0&&(b*=256);)this[r+_]=e/b&255;return r+o},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,r,o){return e=+e,r=r>>>0,o||N(this,e,r,1,255,0),this[r]=e&255,r+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||N(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||N(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||N(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||N(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},c.prototype.writeIntLE=function(e,r,o,n){if(e=+e,r=r>>>0,!n){var p=Math.pow(2,8*o-1);N(this,e,r,o,p-1,-p)}var _=0,b=1,B=0;for(this[r]=e&255;++_<o&&(b*=256);)e<0&&B===0&&this[r+_-1]!==0&&(B=1),this[r+_]=(e/b>>0)-B&255;return r+o},c.prototype.writeIntBE=function(e,r,o,n){if(e=+e,r=r>>>0,!n){var p=Math.pow(2,8*o-1);N(this,e,r,o,p-1,-p)}var _=o-1,b=1,B=0;for(this[r+_]=e&255;--_>=0&&(b*=256);)e<0&&B===0&&this[r+_+1]!==0&&(B=1),this[r+_]=(e/b>>0)-B&255;return r+o},c.prototype.writeInt8=function(e,r,o){return e=+e,r=r>>>0,o||N(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},c.prototype.writeInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||N(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},c.prototype.writeInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||N(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},c.prototype.writeInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||N(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},c.prototype.writeInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||N(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function K(e,r,o,n,p,_){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function Ce(e,r,o,n,p){return r=+r,o=o>>>0,p||K(e,r,o,4,34028234663852886e22,-34028234663852886e22),s.write(e,r,o,n,23,4),o+4}c.prototype.writeFloatLE=function(e,r,o){return Ce(this,e,r,!0,o)},c.prototype.writeFloatBE=function(e,r,o){return Ce(this,e,r,!1,o)};function Oe(e,r,o,n,p){return r=+r,o=o>>>0,p||K(e,r,o,8,17976931348623157e292,-17976931348623157e292),s.write(e,r,o,n,52,8),o+8}c.prototype.writeDoubleLE=function(e,r,o){return Oe(this,e,r,!0,o)},c.prototype.writeDoubleBE=function(e,r,o){return Oe(this,e,r,!1,o)},c.prototype.copy=function(e,r,o,n){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),r>=e.length&&(r=e.length),r||(r=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-r<n-o&&(n=e.length-r+o);var p=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),r),p},c.prototype.fill=function(e,r,o,n){if(typeof e=="string"){if(typeof r=="string"?(n=r,r=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!c.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var p=e.charCodeAt(0);(n==="utf8"&&p<128||n==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<o)throw new RangeError("Out of range index");if(o<=r)return this;r=r>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var _;if(typeof e=="number")for(_=r;_<o;++_)this[_]=e;else{var b=c.isBuffer(e)?e:c.from(e,n),B=b.length;if(B===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(_=0;_<o-r;++_)this[_+r]=b[_%B]}return this};var sr=/[^+/0-9A-Za-z-_]/g;function ar(e){if(e=e.split("=")[0],e=e.trim().replace(sr,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function xe(e,r){r=r||1/0;for(var o,n=e.length,p=null,_=[],b=0;b<n;++b){if(o=e.charCodeAt(b),o>55295&&o<57344){if(!p){if(o>56319){(r-=3)>-1&&_.push(239,191,189);continue}else if(b+1===n){(r-=3)>-1&&_.push(239,191,189);continue}p=o;continue}if(o<56320){(r-=3)>-1&&_.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(r-=3)>-1&&_.push(239,191,189);if(p=null,o<128){if((r-=1)<0)break;_.push(o)}else if(o<2048){if((r-=2)<0)break;_.push(o>>6|192,o&63|128)}else if(o<65536){if((r-=3)<0)break;_.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((r-=4)<0)break;_.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return _}function ir(e){for(var r=[],o=0;o<e.length;++o)r.push(e.charCodeAt(o)&255);return r}function _r(e,r){for(var o,n,p,_=[],b=0;b<e.length&&!((r-=2)<0);++b)o=e.charCodeAt(b),n=o>>8,p=o%256,_.push(p),_.push(n);return _}function Be(e){return a.toByteArray(ar(e))}function ce(e,r,o,n){for(var p=0;p<n&&!(p+o>=r.length||p>=e.length);++p)r[p+o]=e[p];return p}function F(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function qe(e){return e!==e}var dr=function(){for(var e="0123456789abcdef",r=new Array(256),o=0;o<16;++o)for(var n=o*16,p=0;p<16;++p)r[n+p]=e[o]+e[p];return r}()}),Ur=me((i,a)=>{l();var s=a.exports={},d,u;function m(){throw new Error("setTimeout has not been defined")}function v(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=m}catch(w){d=m}try{typeof clearTimeout=="function"?u=clearTimeout:u=v}catch(w){u=v}})();function c(w){if(d===setTimeout)return setTimeout(w,0);if((d===m||!d)&&setTimeout)return d=setTimeout,setTimeout(w,0);try{return d(w,0)}catch(k){try{return d.call(null,w,0)}catch(O){return d.call(this,w,0)}}}function h(w){if(u===clearTimeout)return clearTimeout(w);if((u===v||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(w);try{return u(w)}catch(k){try{return u.call(null,w)}catch(O){return u.call(this,w)}}}var y=[],I=!1,A,S=-1;function C(){!I||!A||(I=!1,A.length?y=A.concat(y):S=-1,y.length&&g())}function g(){if(!I){var w=c(C);I=!0;for(var k=y.length;k;){for(A=y,y=[];++S<k;)A&&A[S].run();S=-1,k=y.length}A=null,I=!1,h(w)}}s.nextTick=function(w){var k=new Array(arguments.length-1);if(arguments.length>1)for(var O=1;O<arguments.length;O++)k[O-1]=arguments[O];y.push(new q(w,k)),y.length===1&&!I&&c(g)};function q(w,k){this.fun=w,this.array=k}q.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={};function x(){}s.on=x,s.addListener=x,s.once=x,s.off=x,s.removeListener=x,s.removeAllListeners=x,s.emit=x,s.prependListener=x,s.prependOnceListener=x,s.listeners=function(w){return[]},s.binding=function(w){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(w){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}}),kr,Cr,Or,l=$e(()=>{kr=f(Ir()),Cr=f(Ur()),Or=function(i){function a(){var d=this||self;return delete i.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return a();i.defineProperty(i.prototype,"__magic__",{configurable:!0,get:a});var s=__magic__;return s}(Object)}),Qe={};Ze(Qe,{default:()=>Xe});var ae,Re,Xe,Br=$e(()=>{"use strict";l(),ae=f(t("react")),Re=i=>ae.createElement("svg",Y({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},i),ae.createElement("g",null,ae.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Xe=Re}),er={};Ze(er,{Receiver:()=>Ho});lr.exports=Je(er);l();var M=f(t("react")),Pe=t("@fortawesome/free-solid-svg-icons"),ze=t("@fortawesome/react-fontawesome"),Ee=f(t("classnames")),Lr=t("formik"),Tr=f(t("react-select"));l();var Nr=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nr));var ie={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};l();l();l();var rr=f(t("react")),$o=t("formik");l();l();var or=f(t("react")),Zo=t("formik");l();l();var Mr=f(t("react")),Ko=t("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Jo=t("formik");l();l();l();var Qo=t("@terradharitri/sdk-dapp/types/tokens.types");l();l();l();l();l();var Xo=t("@terradharitri/sdk-dapp/constants/index"),et=t("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),rt=f(t("bignumber.js"));l();l();l();var ot=t("bech32");l();l();l();var Rr=(i,a)=>typeof a=="boolean"?a:Array.isArray(a)&&a.includes(i);l();l();l();var tt=t("@terradharitri/sdk-dapp/constants"),nt=t("@terradharitri/sdk-dapp/utils/account/getAccount");l();l();var ct=t("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");l();var lt=t("@terradharitri/sdk-dapp/utils/buildUrlParams");l();var pt=f(t("anchorme"));l();l();var st=t("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Pr=t("@terradharitri/sdk-dapp/utils/operations/formatAmount"),at=t("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),it=t("@terradharitri/sdk-dapp/utils/operations/parseAmount");l();l();var _t=t("@terradharitri/sdk-dapp/constants/index");l();var dt=t("@terradharitri/sdk-dapp/constants/index");l();l();l();var ut=t("@terradharitri/sdk-dapp/constants/index"),mt=f(t("bignumber.js"));l();var vt=t("@terradharitri/sdk-dapp/constants/index");l();var ft=t("@terradharitri/sdk-dapp/constants/index");l();l();var yt=t("@terradharitri/sdk-core"),ht=t("@terradharitri/sdk-dapp/constants/index"),gt=f(t("bignumber.js"));l();l();var bt=t("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");l();var wt=t("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");l();var xt=f(t("bignumber.js"));l();var qt=t("@terradharitri/sdk-dapp/constants/index"),Et=t("@terradharitri/sdk-dapp/utils/smartContracts"),At=t("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),St=f(t("bignumber.js"));l();var It=f(t("bignumber.js"));l();l();var Ut=f(t("axios"));l();l();l();var kt=t("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");l();var Ct=t("@terradharitri/sdk-dapp/constants/index");l();l();l();var Ae=t("@terradharitri/sdk-dapp/constants/index"),zr=f(t("bignumber.js")),De,je,Ve,Dr=(0,Pr.formatAmount)({input:String((De=Ae.GAS_PRICE)!=null?De:1e9),decimals:(je=Ae.DECIMALS)!=null?je:18,showLastNonZeroDecimal:!0,digits:(Ve=Ae.DIGITS)!=null?Ve:4}),Ot=new zr.default(Dr).times(10).toString(10);l();var Bt=t("@terradharitri/sdk-dapp/constants/index"),Lt=f(t("bignumber.js"));l();var Tt=f(t("bignumber.js"));l();l();var Nt=t("yup");l();var Fe=t("@terradharitri/sdk-dapp/constants/ledger.constants"),jr=f(t("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Ue=t("yup"),Vr=(0,Ue.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(i){let{ledger:a}=this.parent;return!(a&&i&&i.length&&!a.ledgerDataActive)}),Fr=(0,Ue.string)().test({name:"hashSign",test:function(i){let{ledger:a,isGuarded:s}=this.parent;if(a){let{ledgerWithHashSign:d,ledgerWithGuardians:u}=(0,jr.default)(a.version);if(i&&i.length>300&&!d)return this.createError({message:`Data too long. You need at least DharitrI app version ${Fe.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(s&&!u)return this.createError({message:`You need at least DharitrI app version ${Fe.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Wr=[Vr,Fr],Mt=Wr.reduce((i,a)=>i.concat(a),(0,Ue.string)());l();var Rt=t("@terradharitri/sdk-dapp/constants/index"),Pt=t("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),zt=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Dt=t("yup");l();var jt=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Vt=f(t("bignumber.js")),Ft=t("yup");l();var Wt=t("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Gt=f(t("bignumber.js")),Yt=t("yup");l();var Ht=t("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),$t=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Zt=f(t("bignumber.js")),Kt=t("yup");l();var Jt=f(t("bignumber.js")),Qt=t("yup");l();var Xt=t("@terradharitri/sdk-dapp/constants/index"),en=t("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),rn=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),on=f(t("bignumber.js")),tn=t("yup");l();var nn=t("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),cn=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ln=t("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),pn=f(t("bignumber.js")),sn=t("yup");l();var an=f(t("bignumber.js")),_n=t("yup");l();var dn=t("@terradharitri/sdk-dapp/utils/account/addressIsValid"),un=t("yup");l();var mn=t("@terradharitri/sdk-dapp/utils/account/addressIsValid"),vn=t("yup");l();l();var fn=(0,Mr.createContext)({});l();l();l();var yn=t("react"),hn=t("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),gn=f(t("lodash/uniqBy"));l();l();l();var bn=f(t("axios"));l();l();var wn=f(t("axios"));l();l();var xn=t("@terradharitri/sdk-dapp/apiCalls/endpoints"),qn=t("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),En=f(t("axios")),An=f(t("lodash/uniqBy"));l();var Sn=t("@terradharitri/sdk-dapp/apiCalls/endpoints"),In=f(t("axios"));l();var Un=t("@terradharitri/sdk-dapp/apiCalls/endpoints"),kn=f(t("axios"));l();var Gr=f(t("react")),Cn=(0,Gr.createContext)({});l();l();var On=t("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Bn=t("@terradharitri/sdk-dapp/utils");l();var Ln=t("react");l();var Tn=t("react"),Nn=t("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Yr=(0,or.createContext)({});function Hr(){return(0,or.useContext)(Yr)}l();var Mn=t("react");l();l();var $r=({knownAddresses:i,inputValue:a,key:s})=>!i||!a?!1:i.some(d=>{var u;return Boolean((u=d[s])==null?void 0:u.startsWith(a))});l();l();l();var Rn=t("react"),Pn=t("@terradharitri/sdk-dapp/utils");l();var zn=t("react"),Dn=t("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");l();l();var jn=t("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Vn=f(t("axios"));l();var Fn=f(t("axios")),Zr=(0,rr.createContext)({});function tr(){return(0,rr.useContext)(Zr)}l();var nr=f(t("react"));l();l();var Kr=f(t("react")),Wn=t("@terradharitri/sdk-dapp/constants/index"),Gn=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Yn=f(t("bignumber.js")),Hn=t("formik");l();l();var Jr=f(t("react")),$n=t("formik"),Zn=f(t("lodash/uniqBy"));l();l();var Qr=f(t("react")),Kn=(0,Qr.createContext)({});l();l();var Jn=t("react"),Qn=t("@terradharitri/sdk-dapp/constants/index"),Xn=t("@terradharitri/sdk-dapp/types/enums.types");l();var ec=(0,Jr.createContext)({});l();l();var rc=t("@terradharitri/sdk-dapp/constants/index"),oc=t("formik");l();l();var Xr=f(t("react")),tc=t("@terradharitri/sdk-dapp/constants/index"),nc=t("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),cc=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),lc=t("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),pc=f(t("bignumber.js")),sc=t("formik");l();l();l();l();var ac=f(t("bignumber.js"));l();var ic=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),_c=f(t("bignumber.js"));l();l();var dc=t("react"),uc=t("@terradharitri/sdk-dapp/constants/index"),mc=t("@terradharitri/sdk-dapp/utils/smartContracts"),vc=f(t("bignumber.js")),fc=t("formik");l();l();var yc=t("@terradharitri/sdk-dapp/constants/index"),hc=f(t("bignumber.js")),gc=(0,Xr.createContext)({}),bc=(0,Kr.createContext)({});l();l();var eo=f(t("react")),wc=t("formik"),xc=(0,eo.createContext)({}),ro=(0,nr.createContext)({});function ve(){return(0,nr.useContext)(ro)}l();l();var oo=f(t("react")),to=t("react-select");l();var no=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(no));var E={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"},co=i=>oo.default.createElement(to.components.Control,H(Y({},i),{className:E.receiverSelectControl}));l();l();var Se=f(t("react")),lo=t("@fortawesome/free-solid-svg-icons"),po=t("@fortawesome/react-fontawesome"),so=f(t("classnames")),ao=t("react-select");l();l();var ke=(i,a)=>{let s=a.toLowerCase(),d=i.label.toLowerCase(),u=i.value.toLowerCase();return a?d.includes(s)||u.includes(s):!0};l();var io=t("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),_o=t("@terradharitri/sdk-dapp/utils"),We=i=>i?i.filter(a=>(0,_o.addressIsValid)(a.address)).map(a=>{let s=a.username?String((0,io.trimUsernameDomain)(a.username)):a.address;return{value:a.address,label:s}}):[];l();var uo=({setOption:i,setAllValues:a})=>(s,d)=>{["input-blur","menu-close"].includes(d.action)||(a(s),s||i(null))};l();var mo=({setInputValue:i,setOption:a,changeAndBlurInput:s})=>d=>{!d||(a(d),s(d.value),d.value!==d.label?i(d.label):i(d.value))};l();var vo=({options:i,usernameAccounts:a,knownAddresses:s,setFieldValue:d,setInputValue:u,setOption:m})=>v=>{var c,h,y,I;let A=i.find(k=>k.value===v&&k.value!==k.label),S=A==null?void 0:A.label,C,g,q=(c=a[v])==null?void 0:c.username;q&&(S=q,C=q,g=(h=a[v])==null?void 0:h.rawUsername);let x=s.find(k=>k.address===v);x!=null&&x.username&&(S=x==null?void 0:x.username,C=x==null?void 0:x.username,g=x==null?void 0:x.rawUsername);let w=S!=null?S:v;u(w),m({value:v,label:w}),d("receiver",(I=(y=a[v])==null?void 0:y.address)!=null?I:v),d("receiverUsername",C),d("rawReceiverUsername",g)},fo=i=>{let{selectProps:a,isDisabled:s,options:d}=i,{menuIsOpen:u,value:m,isLoading:v}=a,c=(0,Se.useMemo)(()=>d.find(A=>{let S=A,C=m;return C?ke(S,C.label):null}),[m,d]),h=d.length===0&&!v,y=Boolean(m)&&!c,I=s||h||y;return v?Se.default.createElement(po.FontAwesomeIcon,{icon:lo.faSpinner,spin:!0,className:E.receiverSelectSpinner}):Se.default.createElement(ao.components.DropdownIndicator,H(Y({},i),{className:(0,so.default)(E.receiverSelectIndicator,{[E.expanded]:u,[E.hidden]:I})}))};l();l();var yo=f(t("react")),ho=t("@terradharitri/sdk-dapp/utils"),go=f(t("classnames")),bo=t("react-select");l();var qc=f(t("react")),Ec=t("@terradharitri/sdk-dapp/constants/index");l();l();var wo=(i,a)=>{let s=i.current;if(!s||!s.state.focusedOption)return!1;let d=s.state.focusedOption,u=d.label.toLowerCase(),m=d.value.toLowerCase(),v=u!==m,c=v&&u.startsWith(a.toLowerCase());return v&&!a?!0:c},xo=i=>a=>{let{selectProps:s,value:d}=a,{inputValue:u,menuIsOpen:m}=s,{receiverUsernameInfo:{receiverUsername:v}}=ve(),c=wo(i,u),h=(0,ho.addressIsValid)(String(d)),y=Boolean(v)||c,I=h&&m||!h&&u;return yo.default.createElement(bo.components.Input,H(Y({},a),{"data-testid":"receiver",className:(0,go.default)(E.receiverSelectInput,{[E.visible]:I,[E.spaced]:y})}))};l();l();var qo=f(t("react")),Eo=t("react-select"),Ao=i=>qo.default.createElement(Eo.components.Menu,H(Y({},i),{className:E.receiverSelectMenu}));l();l();var D=f(t("react")),Ie=t("@terradharitri/sdk-dapp/UI/Trim"),_e=f(t("classnames")),So=t("react-select");l();var{default:ue}=(Br(),Je(Qe)),Io=i=>{let{selectProps:a,focusedOption:s}=i,{value:d,inputValue:u}=a,m=s,v=m?m.label.toLowerCase():null,c=m&&m.label!==m.value,h=(v&&(!d||d&&u)?v.startsWith(u.toLowerCase()):!1)&&m?m.label.replace(m.label.substring(0,u.length),u):null,y=h&&!u,I=h&&u.length<h.length/2,A=h&&Boolean(u)&&I,S=h&&Boolean(u);return D.default.createElement(D.default.Fragment,null,A&&!c&&D.default.createElement("div",{className:(0,_e.default)(E.receiverSelectAutocomplete,E.receiverSelectAutocompleteUntrimmed)},h),S&&c&&D.default.createElement("div",{className:(0,_e.default)(E.receiverSelectAutocomplete,E.receiverSelectAutocompleteUsername)},D.default.createElement(ue,{className:E.receiverSelectAutocompleteIcon}),h,D.default.createElement("span",{className:E.receiverSelectAutocompleteWrapper},"(",D.default.createElement(Ie.Trim,{text:m.value}),")")),y&&D.default.createElement("span",{className:(0,_e.default)(E.receiverSelectAutocomplete,{[E.receiverSelectAutocompleteUsername]:c})},c?D.default.createElement(D.default.Fragment,null,D.default.createElement("span",null,D.default.createElement(ue,{className:(0,_e.default)(E.receiverSelectAutocompleteIcon,E.receiverSelectAutocompleteIconMuted)}),m.label),D.default.createElement("span",{className:E.receiverSelectAutocompleteWrapper},"(",D.default.createElement(Ie.Trim,{text:m.value}),")")):D.default.createElement(Ie.Trim,{text:h})),D.default.createElement(So.components.MenuList,H(Y({},i),{className:E.receiverSelectList})))};l();l();var W=f(t("react")),Ge=t("@terradharitri/sdk-dapp/UI/Trim"),Uo=f(t("classnames")),ko=t("react-select");l();l();var de=f(t("react"));l();var Co=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Co));var Oo={highlight:"dapp-core-component__styles-modules__highlight"},Bo=({highlight:i,text:a=""})=>{let s=a.split(" "),d=i.toLowerCase(),u=new RegExp(`(${d})`,"gi"),m=s.map(v=>v.split(u).filter(c=>c));return de.default.createElement("span",{className:Oo.highlight},m.map((v,c)=>{let h=`${v}-${c}`;return de.default.createElement("span",{key:h},v.map((y,I)=>{let A=y.toLowerCase()===d,S=d&&A,C=`${y}-${I}`;return S?de.default.createElement("strong",{key:C},y):de.default.createElement("span",{key:C},y)}))}))},Lo=i=>{let{isFocused:a,data:s,selectProps:d}=i,{inputValue:u}=d,m=s,v=m.value!==m.label;return W.default.createElement(ko.components.Option,H(Y({},i),{className:(0,Uo.default)(E.receiverSelectOption,{[E.focused]:a})}),v?W.default.createElement(W.default.Fragment,null,W.default.createElement("span",{className:E.receiverSelectOptionUsername},W.default.createElement(ue,{className:E.receiverSelectOptionUsernameIcon}),W.default.createElement(Bo,{text:m.label,highlight:u})),W.default.createElement("span",{className:E.receiverSelectOptionNameWrapper},"(",W.default.createElement(Ge.Trim,{text:m.value,className:E.receiverSelectOptionName}),")")):W.default.createElement(Ge.Trim,{text:m.value,className:E.receiverSelectOptionName}))};l();l();var To=f(t("react")),No=f(t("classnames")),Mo=t("react-select"),Ro=i=>{let{selectProps:a,isFocused:s,className:d}=i,{menuIsOpen:u}=a;return To.default.createElement(Mo.components.SelectContainer,H(Y({},i),{className:(0,No.default)(d,{[E.expanded]:u,[E.focused]:s&&u})}))};l();l();var G=f(t("react")),Ye=t("@terradharitri/sdk-dapp/UI/Trim"),Po=t("@terradharitri/sdk-dapp/utils"),zo=f(t("classnames")),Do=t("react-select"),jo=i=>{let{selectProps:a,isDisabled:s}=i,{value:d,menuIsOpen:u}=a,m=d,{receiverInfo:{receiver:v},receiverUsernameInfo:{receiverUsername:c}}=ve(),h=c!=null?c:m&&m.value!==m.label,y=m?{value:v!=null?v:m.value,label:m.label}:null,I=y&&(h||!h&&!u)&&(0,Po.addressIsValid)(y.value);return G.default.createElement(Do.components.ValueContainer,H(Y({},i),{className:E.receiverSelectValue}),I&&G.default.createElement("span",{className:(0,zo.default)(E.receiverSelectSingle,{[E.disabled]:s})},h?G.default.createElement(G.default.Fragment,null,G.default.createElement("span",{className:E.receiverSelectSingleUsername},G.default.createElement(ue,{className:E.receiverSelectSingleUsernameIcon}),y.label),G.default.createElement("span",{className:E.receiverSelectSingleTrimWrapper},"(",G.default.createElement(Ye.Trim,{text:y.value,className:E.receiverSelectSingleTrim}),")")):G.default.createElement(Ye.Trim,{text:y.value,className:E.receiverSelectSingleTrim})),i.children)};l();l();var Vo=t("formik"),cr=()=>{let{receiverInfo:{receiverError:i,isReceiverInvalid:a},receiverUsernameInfo:{receiverUsernameError:s,isReceiverUsernameInvalid:d,receiverUsername:u}}=ve(),{touched:{receiver:m}}=(0,Vo.useFormikContext)(),v=a&&m||d;return u!=null&&u.startsWith("drt1")?{isInvalid:a,receiverErrorDataTestId:"receiverError",error:i}:{isInvalid:v,receiverErrorDataTestId:d?"receiverUsernameError":"receiverError",error:d?s:i}};l();l();var Fo=t("@terradharitri/sdk-dapp/utils"),Wo=t("formik");l();l();var Go=({knownAddresses:i,inputValue:a})=>!i||!a?!1:i.filter(s=>{var d;let u=(d=s.username)!=null?d:s.address,m=s.address;return ke({label:u,value:m,data:{label:u,value:m}},a)}).length>0,Yo=({menuIsOpen:i})=>{let{isInvalid:a}=cr(),{values:{nft:s}}=(0,Wo.useFormikContext)(),{showUsernameError:d,isUsernameLoading:u,isUsernameDebouncing:m,usernameIsAmongKnown:v,searchQueryIsAddress:c}=tr(),{receiverInputValue:h,knownAddresses:y}=Hr(),I=$r({key:"address",knownAddresses:y,inputValue:h}),A=Go({inputValue:h,knownAddresses:y}),S=c&&(!I||!i)&&!(0,Fo.addressIsValid)(h),C=Boolean(d&&!(i&&I)&&!(i&&v));return{isAddressError:S||(s?a:!1),isUsernameError:C,isRequiredError:a&&!C&&!u&&!m&&!S&&!A&&!h,isReceiverDropdownOpened:h&&A&&i}},Ho=i=>{let a=(0,M.useRef)(null),{className:s}=i,{setFieldValue:d}=(0,Lr.useFormikContext)(),{receiverInfo:{scamError:u,fetchingScamAddress:m,receiverInputValue:v,setReceiverInputValue:c,knownAddresses:h,receiver:y,onBlurReceiver:I,onChangeReceiver:A},receiverUsernameInfo:{receiverUsername:S},formInfo:{readonly:C}}=ve(),[g,q]=(0,M.useState)(!1),[x,w]=(0,M.useState)(y?{label:y,value:y}:null),{receiverErrorDataTestId:k,error:O}=cr(),{isAddressError:z,isUsernameError:j,isRequiredError:R,isReceiverDropdownOpened:X}=Yo({menuIsOpen:g}),{usernameAccounts:$,isUsernameLoading:fe}=tr(),ee=()=>{I(new Event("blur"));let U=h==null?void 0:h.find(N=>N.username===v&&N.address===y);U&&(d("receiver",U.address),d("receiverUsername",U.username),d("rawReceiverUsername",U.rawUsername))},re=h==null?void 0:h.find(U=>U.username===v&&U.address===y),ye=(0,M.useMemo)(()=>We(h),[h]),oe=re?We([re]):ye,Z=vo({setFieldValue:d,setInputValue:c,setOption:w,options:oe,knownAddresses:h!=null?h:[],usernameAccounts:$}),te=(0,M.useCallback)(uo({setAllValues:Z,setOption:w}),[]),he=(0,M.useCallback)(U=>{A(U?U.trim():""),setTimeout(ee)},[]),ge=mo({changeAndBlurInput:he,setOption:w,setInputValue:c}),be=(0,M.useMemo)(()=>xo(a),[a]);(0,M.useEffect)(()=>{if(!y)return;let U=Object.keys($).find(N=>{var K;return((K=$[N])==null?void 0:K.address)===y});Z(U!=null?U:y),U&&c(U)},[$,y]);let ne=z||j||R,we=ne&&!g;return M.default.createElement("div",{className:(0,Ee.default)(E.receiver,s)},M.default.createElement("div",{className:ie.label,"data-testid":"receiverLabel","data-loading":m},"Receiver"),M.default.createElement(Tr.default,{value:x,onInputChange:te,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:Rr("receiver",C),options:oe,filterOption:ke,noOptionsMessage:()=>null,onChange:ge,onBlur:ee,isMulti:!1,ref:a,inputValue:v,onMenuClose:()=>q(!1),onMenuOpen:()=>q(!0),components:{Menu:Ao,Input:be,Control:co,ValueContainer:jo,DropdownIndicator:fo,SelectContainer:Ro,MenuList:Io,Option:Lo,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,Ee.default)(E.receiverSelectContainer,{[E.opened]:X,[E.invalid]:ne||u})}),we&&M.default.createElement("div",{"data-testid":k,className:ie.error},O),fe&&M.default.createElement("div",{className:E.loading},"Loading..."),S&&M.default.createElement("span",{className:E.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",M.default.createElement(ze.FontAwesomeIcon,{icon:Pe.faCheck,className:E.foundIcon})),u&&M.default.createElement("div",{"data-testid":"receiverScam",className:(0,Ee.default)(ie.error,ie.scam)},M.default.createElement("span",null,M.default.createElement(ze.FontAwesomeIcon,{icon:Pe.faExclamationTriangle}),M.default.createElement("small",null,u))))};});var Q={};se();pe(Q,mr(pr()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
