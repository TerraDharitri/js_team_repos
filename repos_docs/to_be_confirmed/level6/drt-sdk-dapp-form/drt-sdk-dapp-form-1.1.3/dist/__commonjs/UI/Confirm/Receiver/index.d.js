"use strict";import{a as q,b as Ne,d as $,e as je,f as H}from"../../../../__chunks__/chunk-JH2LJGTQ.js";var ve=Ne((ht,ye)=>{"use strict";H();var De=Object.create,F=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,We=Object.getOwnPropertyNames,le=Object.getOwnPropertySymbols,Ye=Object.getPrototypeOf,se=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,fe=(u,l,p)=>l in u?F(u,l,{enumerable:!0,configurable:!0,writable:!0,value:p}):u[l]=p,$e=(u,l)=>{for(var p in l||(l={}))se.call(l,p)&&fe(u,p,l[p]);if(le)for(var p of le(l))Ze.call(l,p)&&fe(u,p,l[p]);return u},ce=(u,l)=>()=>(u&&(l=u(u=0)),l),G=(u,l)=>()=>(l||u((l={exports:{}}).exports,l),l.exports),de=(u,l)=>{for(var p in l)F(u,p,{get:l[p],enumerable:!0})},he=(u,l,p,g)=>{if(l&&typeof l=="object"||typeof l=="function")for(let d of We(l))!se.call(u,d)&&d!==p&&F(u,d,{get:()=>l[d],enumerable:!(g=Fe(l,d))||g.enumerable});return u},D=(u,l,p)=>(p=u!=null?De(Ye(u)):{},he(l||!u||!u.__esModule?F(p,"default",{value:u,enumerable:!0}):p,u)),me=u=>he(F({},"__esModule",{value:!0}),u),He=G(u=>{"use strict";V(),u.byteLength=k,u.toByteArray=U,u.fromByteArray=I;var l=[],p=[],g=typeof Uint8Array!="undefined"?Uint8Array:Array,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(y=0,b=d.length;y<b;++y)l[y]=d[y],p[d.charCodeAt(y)]=y;var y,b;p["-".charCodeAt(0)]=62,p["_".charCodeAt(0)]=63;function n(s){var h=s.length;if(h%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var m=s.indexOf("=");m===-1&&(m=h);var c=m===h?0:4-m%4;return[m,c]}function k(s){var h=n(s),m=h[0],c=h[1];return(m+c)*3/4-c}function x(s,h,m){return(h+m)*3/4-m}function U(s){var h,m=n(s),c=m[0],E=m[1],v=new g(x(s,c,E)),S=0,M=E>0?c-4:c,O;for(O=0;O<M;O+=4)h=p[s.charCodeAt(O)]<<18|p[s.charCodeAt(O+1)]<<12|p[s.charCodeAt(O+2)]<<6|p[s.charCodeAt(O+3)],v[S++]=h>>16&255,v[S++]=h>>8&255,v[S++]=h&255;return E===2&&(h=p[s.charCodeAt(O)]<<2|p[s.charCodeAt(O+1)]>>4,v[S++]=h&255),E===1&&(h=p[s.charCodeAt(O)]<<10|p[s.charCodeAt(O+1)]<<4|p[s.charCodeAt(O+2)]>>2,v[S++]=h>>8&255,v[S++]=h&255),v}function _(s){return l[s>>18&63]+l[s>>12&63]+l[s>>6&63]+l[s&63]}function B(s,h,m){for(var c,E=[],v=h;v<m;v+=3)c=(s[v]<<16&16711680)+(s[v+1]<<8&65280)+(s[v+2]&255),E.push(_(c));return E.join("")}function I(s){for(var h,m=s.length,c=m%3,E=[],v=16383,S=0,M=m-c;S<M;S+=v)E.push(B(s,S,S+v>M?M:S+v));return c===1?(h=s[m-1],E.push(l[h>>2]+l[h<<4&63]+"==")):c===2&&(h=(s[m-2]<<8)+s[m-1],E.push(l[h>>10]+l[h>>4&63]+l[h<<2&63]+"=")),E.join("")}}),Je=G(u=>{V(),u.read=function(l,p,g,d,y){var b,n,k=y*8-d-1,x=(1<<k)-1,U=x>>1,_=-7,B=g?y-1:0,I=g?-1:1,s=l[p+B];for(B+=I,b=s&(1<<-_)-1,s>>=-_,_+=k;_>0;b=b*256+l[p+B],B+=I,_-=8);for(n=b&(1<<-_)-1,b>>=-_,_+=d;_>0;n=n*256+l[p+B],B+=I,_-=8);if(b===0)b=1-U;else{if(b===x)return n?NaN:(s?-1:1)*(1/0);n=n+Math.pow(2,d),b=b-U}return(s?-1:1)*n*Math.pow(2,b-d)},u.write=function(l,p,g,d,y,b){var n,k,x,U=b*8-y-1,_=(1<<U)-1,B=_>>1,I=y===23?Math.pow(2,-24)-Math.pow(2,-77):0,s=d?0:b-1,h=d?1:-1,m=p<0||p===0&&1/p<0?1:0;for(p=Math.abs(p),isNaN(p)||p===1/0?(k=isNaN(p)?1:0,n=_):(n=Math.floor(Math.log(p)/Math.LN2),p*(x=Math.pow(2,-n))<1&&(n--,x*=2),n+B>=1?p+=I/x:p+=I*Math.pow(2,1-B),p*x>=2&&(n++,x/=2),n+B>=_?(k=0,n=_):n+B>=1?(k=(p*x-1)*Math.pow(2,y),n=n+B):(k=p*Math.pow(2,B-1)*Math.pow(2,y),n=0));y>=8;l[g+s]=k&255,s+=h,k/=256,y-=8);for(n=n<<y|k,U+=y;U>0;l[g+s]=n&255,s+=h,n/=256,U-=8);l[g+s-h]|=m*128}}),Ge=G(u=>{"use strict";V();var l=He(),p=Je(),g=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;u.Buffer=n,u.SlowBuffer=E,u.INSPECT_MAX_BYTES=50;var d=2147483647;u.kMaxLength=d,n.TYPED_ARRAY_SUPPORT=y(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(r){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function b(e){if(e>d)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,n.prototype),t}function n(e,t,r){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _(e)}return k(e,t,r)}n.poolSize=8192;function k(e,t,r){if(typeof e=="string")return B(e,t);if(ArrayBuffer.isView(e))return s(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(j(e,ArrayBuffer)||e&&j(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(j(e,SharedArrayBuffer)||e&&j(e.buffer,SharedArrayBuffer)))return h(e,t,r);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,t,r);var a=m(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,t,r){return k(e,t,r)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function x(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function U(e,t,r){return x(e),e<=0?b(e):t!==void 0?typeof r=="string"?b(e).fill(t,r):b(e).fill(t):b(e)}n.alloc=function(e,t,r){return U(e,t,r)};function _(e){return x(e),b(e<0?0:c(e)|0)}n.allocUnsafe=function(e){return _(e)},n.allocUnsafeSlow=function(e){return _(e)};function B(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!n.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=v(e,t)|0,o=b(r),a=o.write(e,t);return a!==r&&(o=o.slice(0,a)),o}function I(e){for(var t=e.length<0?0:c(e.length)|0,r=b(t),o=0;o<t;o+=1)r[o]=e[o]&255;return r}function s(e){if(j(e,Uint8Array)){var t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return I(e)}function h(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return t===void 0&&r===void 0?o=new Uint8Array(e):r===void 0?o=new Uint8Array(e,t):o=new Uint8Array(e,t,r),Object.setPrototypeOf(o,n.prototype),o}function m(e){if(n.isBuffer(e)){var t=c(e.length)|0,r=b(t);return r.length===0||e.copy(r,0,0,t),r}if(e.length!==void 0)return typeof e.length!="number"||X(e.length)?b(0):I(e);if(e.type==="Buffer"&&Array.isArray(e.data))return I(e.data)}function c(e){if(e>=d)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+d.toString(16)+" bytes");return e|0}function E(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,t){if(j(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),j(t,Uint8Array)&&(t=n.from(t,t.offset,t.byteLength)),!n.isBuffer(e)||!n.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,o=t.length,a=0,i=Math.min(r,o);a<i;++a)if(e[a]!==t[a]){r=e[a],o=t[a];break}return r<o?-1:o<r?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var o=n.allocUnsafe(t),a=0;for(r=0;r<e.length;++r){var i=e[r];if(j(i,Uint8Array))a+i.length>o.length?n.from(i).copy(o,a):Uint8Array.prototype.set.call(o,i,a);else if(n.isBuffer(i))i.copy(o,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=i.length}return o};function v(e,t){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||j(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return K(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return ae(e).length;default:if(a)return o?-1:K(e).length;t=(""+t).toLowerCase(),a=!0}}n.byteLength=v;function S(e,t,r){var o=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,t>>>=0,r<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return Re(this,t,r);case"utf8":case"utf-8":return ee(this,t,r);case"ascii":return Le(this,t,r);case"latin1":case"binary":return ke(this,t,r);case"base64":return Te(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Oe(this,t,r);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function M(e,t,r){var o=e[t];e[t]=e[r],e[r]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)M(this,t,t+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)M(this,t,t+3),M(this,t+1,t+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)M(this,t,t+7),M(this,t+1,t+6),M(this,t+2,t+5),M(this,t+3,t+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?ee(this,0,e):S.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",t=u.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},g&&(n.prototype[g]=n.prototype.inspect),n.prototype.compare=function(e,t,r,o,a){if(j(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),r===void 0&&(r=e?e.length:0),o===void 0&&(o=0),a===void 0&&(a=this.length),t<0||r>e.length||o<0||a>this.length)throw new RangeError("out of range index");if(o>=a&&t>=r)return 0;if(o>=a)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,o>>>=0,a>>>=0,this===e)return 0;for(var i=a-o,f=r-t,w=Math.min(i,f),R=this.slice(o,a),A=e.slice(t,r),T=0;T<w;++T)if(R[T]!==A[T]){i=R[T],f=A[T];break}return i<f?-1:f<i?1:0};function O(e,t,r,o,a){if(e.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,X(r)&&(r=a?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(a)return-1;r=e.length-1}else if(r<0)if(a)r=0;else return-1;if(typeof t=="string"&&(t=n.from(t,o)),n.isBuffer(t))return t.length===0?-1:Q(e,t,r,o,a);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):Q(e,[t],r,o,a);throw new TypeError("val must be string, number or Buffer")}function Q(e,t,r,o,a){var i=1,f=e.length,w=t.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,f/=2,w/=2,r/=2}function R(ie,pe){return i===1?ie[pe]:ie.readUInt16BE(pe*i)}var A;if(a){var T=-1;for(A=r;A<f;A++)if(R(e,A)===R(t,T===-1?0:A-T)){if(T===-1&&(T=A),A-T+1===w)return T*i}else T!==-1&&(A-=A-T),T=-1}else for(r+w>f&&(r=f-w),A=r;A>=0;A--){for(var C=!0,Z=0;Z<w;Z++)if(R(e,A+Z)!==R(t,Z)){C=!1;break}if(C)return A}return-1}n.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1},n.prototype.indexOf=function(e,t,r){return O(this,e,t,r,!0)},n.prototype.lastIndexOf=function(e,t,r){return O(this,e,t,r,!1)};function we(e,t,r,o){r=Number(r)||0;var a=e.length-r;o?(o=Number(o),o>a&&(o=a)):o=a;var i=t.length;o>i/2&&(o=i/2);for(var f=0;f<o;++f){var w=parseInt(t.substr(f*2,2),16);if(X(w))return f;e[r+f]=w}return f}function Ee(e,t,r,o){return Y(K(t,e.length-r),e,r,o)}function xe(e,t,r,o){return Y(Se(t),e,r,o)}function Ae(e,t,r,o){return Y(ae(t),e,r,o)}function Be(e,t,r,o){return Y(Pe(t,e.length-r),e,r,o)}n.prototype.write=function(e,t,r,o){if(t===void 0)o="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")o=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-t;if((r===void 0||r>a)&&(r=a),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var i=!1;;)switch(o){case"hex":return we(this,e,t,r);case"utf8":case"utf-8":return Ee(this,e,t,r);case"ascii":case"latin1":case"binary":return xe(this,e,t,r);case"base64":return Ae(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Be(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),i=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Te(e,t,r){return t===0&&r===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,r))}function ee(e,t,r){r=Math.min(e.length,r);for(var o=[],a=t;a<r;){var i=e[a],f=null,w=i>239?4:i>223?3:i>191?2:1;if(a+w<=r){var R,A,T,C;switch(w){case 1:i<128&&(f=i);break;case 2:R=e[a+1],(R&192)===128&&(C=(i&31)<<6|R&63,C>127&&(f=C));break;case 3:R=e[a+1],A=e[a+2],(R&192)===128&&(A&192)===128&&(C=(i&15)<<12|(R&63)<<6|A&63,C>2047&&(C<55296||C>57343)&&(f=C));break;case 4:R=e[a+1],A=e[a+2],T=e[a+3],(R&192)===128&&(A&192)===128&&(T&192)===128&&(C=(i&15)<<18|(R&63)<<12|(A&63)<<6|T&63,C>65535&&C<1114112&&(f=C))}}f===null?(f=65533,w=1):f>65535&&(f-=65536,o.push(f>>>10&1023|55296),f=56320|f&1023),o.push(f),a+=w}return Ue(o)}var te=4096;function Ue(e){var t=e.length;if(t<=te)return String.fromCharCode.apply(String,e);for(var r="",o=0;o<t;)r+=String.fromCharCode.apply(String,e.slice(o,o+=te));return r}function Le(e,t,r){var o="";r=Math.min(e.length,r);for(var a=t;a<r;++a)o+=String.fromCharCode(e[a]&127);return o}function ke(e,t,r){var o="";r=Math.min(e.length,r);for(var a=t;a<r;++a)o+=String.fromCharCode(e[a]);return o}function Re(e,t,r){var o=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>o)&&(r=o);for(var a="",i=t;i<r;++i)a+=Me[e[i]];return a}function Oe(e,t,r){for(var o=e.slice(t,r),a="",i=0;i<o.length-1;i+=2)a+=String.fromCharCode(o[i]+o[i+1]*256);return a}n.prototype.slice=function(e,t){var r=this.length;e=~~e,t=t===void 0?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);var o=this.subarray(e,t);return Object.setPrototypeOf(o,n.prototype),o};function L(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||L(e,t,this.length);for(var o=this[e],a=1,i=0;++i<t&&(a*=256);)o+=this[e+i]*a;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||L(e,t,this.length);for(var o=this[e+--t],a=1;t>0&&(a*=256);)o+=this[e+--t]*a;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,t){return e=e>>>0,t||L(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||L(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||L(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||L(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||L(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||L(e,t,this.length);for(var o=this[e],a=1,i=0;++i<t&&(a*=256);)o+=this[e+i]*a;return a*=128,o>=a&&(o-=Math.pow(2,8*t)),o},n.prototype.readIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||L(e,t,this.length);for(var o=t,a=1,i=this[e+--o];o>0&&(a*=256);)i+=this[e+--o]*a;return a*=128,i>=a&&(i-=Math.pow(2,8*t)),i},n.prototype.readInt8=function(e,t){return e=e>>>0,t||L(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,t){e=e>>>0,t||L(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r},n.prototype.readInt16BE=function(e,t){e=e>>>0,t||L(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r},n.prototype.readInt32LE=function(e,t){return e=e>>>0,t||L(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,t){return e=e>>>0,t||L(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,t){return e=e>>>0,t||L(e,4,this.length),p.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,t){return e=e>>>0,t||L(e,4,this.length),p.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||L(e,8,this.length),p.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||L(e,8,this.length),p.read(this,e,!1,52,8)};function P(e,t,r,o,a,i){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<i)throw new RangeError('"value" argument is out of bounds');if(r+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,t,r,o){if(e=+e,t=t>>>0,r=r>>>0,!o){var a=Math.pow(2,8*r)-1;P(this,e,t,r,a,0)}var i=1,f=0;for(this[t]=e&255;++f<r&&(i*=256);)this[t+f]=e/i&255;return t+r},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,t,r,o){if(e=+e,t=t>>>0,r=r>>>0,!o){var a=Math.pow(2,8*r)-1;P(this,e,t,r,a,0)}var i=r-1,f=1;for(this[t+i]=e&255;--i>=0&&(f*=256);)this[t+i]=e/f&255;return t+r},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,1,255,0),this[t]=e&255,t+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},n.prototype.writeIntLE=function(e,t,r,o){if(e=+e,t=t>>>0,!o){var a=Math.pow(2,8*r-1);P(this,e,t,r,a-1,-a)}var i=0,f=1,w=0;for(this[t]=e&255;++i<r&&(f*=256);)e<0&&w===0&&this[t+i-1]!==0&&(w=1),this[t+i]=(e/f>>0)-w&255;return t+r},n.prototype.writeIntBE=function(e,t,r,o){if(e=+e,t=t>>>0,!o){var a=Math.pow(2,8*r-1);P(this,e,t,r,a-1,-a)}var i=r-1,f=1,w=0;for(this[t+i]=e&255;--i>=0&&(f*=256);)e<0&&w===0&&this[t+i+1]!==0&&(w=1),this[t+i]=(e/f>>0)-w&255;return t+r},n.prototype.writeInt8=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},n.prototype.writeInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},n.prototype.writeInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},n.prototype.writeInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},n.prototype.writeInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||P(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function re(e,t,r,o,a,i){if(r+o>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function oe(e,t,r,o,a){return t=+t,r=r>>>0,a||re(e,t,r,4,34028234663852886e22,-34028234663852886e22),p.write(e,t,r,o,23,4),r+4}n.prototype.writeFloatLE=function(e,t,r){return oe(this,e,t,!0,r)},n.prototype.writeFloatBE=function(e,t,r){return oe(this,e,t,!1,r)};function ne(e,t,r,o,a){return t=+t,r=r>>>0,a||re(e,t,r,8,17976931348623157e292,-17976931348623157e292),p.write(e,t,r,o,52,8),r+8}n.prototype.writeDoubleLE=function(e,t,r){return ne(this,e,t,!0,r)},n.prototype.writeDoubleBE=function(e,t,r){return ne(this,e,t,!1,r)},n.prototype.copy=function(e,t,r,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<r&&(o=r),o===r||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-r&&(o=e.length-t+r);var a=o-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,o):Uint8Array.prototype.set.call(e,this.subarray(r,o),t),a},n.prototype.fill=function(e,t,r,o){if(typeof e=="string"){if(typeof t=="string"?(o=t,t=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var a=e.charCodeAt(0);(o==="utf8"&&a<128||o==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<r;++i)this[i]=e;else{var f=n.isBuffer(e)?e:n.from(e,o),w=f.length;if(w===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=f[i%w]}return this};var Ce=/[^+/0-9A-Za-z-_]/g;function Ie(e){if(e=e.split("=")[0],e=e.trim().replace(Ce,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function K(e,t){t=t||1/0;for(var r,o=e.length,a=null,i=[],f=0;f<o;++f){if(r=e.charCodeAt(f),r>55295&&r<57344){if(!a){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(f+1===o){(t-=3)>-1&&i.push(239,191,189);continue}a=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),a=r;continue}r=(a-55296<<10|r-56320)+65536}else a&&(t-=3)>-1&&i.push(239,191,189);if(a=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,r&63|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return i}function Se(e){for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r)&255);return t}function Pe(e,t){for(var r,o,a,i=[],f=0;f<e.length&&!((t-=2)<0);++f)r=e.charCodeAt(f),o=r>>8,a=r%256,i.push(a),i.push(o);return i}function ae(e){return l.toByteArray(Ie(e))}function Y(e,t,r,o){for(var a=0;a<o&&!(a+r>=t.length||a>=e.length);++a)t[a+r]=e[a];return a}function j(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function X(e){return e!==e}var Me=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var o=r*16,a=0;a<16;++a)t[o+a]=e[r]+e[a];return t}()}),Ke=G((u,l)=>{V();var p=l.exports={},g,d;function y(){throw new Error("setTimeout has not been defined")}function b(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=y}catch(c){g=y}try{typeof clearTimeout=="function"?d=clearTimeout:d=b}catch(c){d=b}})();function n(c){if(g===setTimeout)return setTimeout(c,0);if((g===y||!g)&&setTimeout)return g=setTimeout,setTimeout(c,0);try{return g(c,0)}catch(E){try{return g.call(null,c,0)}catch(v){return g.call(this,c,0)}}}function k(c){if(d===clearTimeout)return clearTimeout(c);if((d===b||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(c);try{return d(c)}catch(E){try{return d.call(null,c)}catch(v){return d.call(this,c)}}}var x=[],U=!1,_,B=-1;function I(){!U||!_||(U=!1,_.length?x=_.concat(x):B=-1,x.length&&s())}function s(){if(!U){var c=n(I);U=!0;for(var E=x.length;E;){for(_=x,x=[];++B<E;)_&&_[B].run();B=-1,E=x.length}_=null,U=!1,k(c)}}p.nextTick=function(c){var E=new Array(arguments.length-1);if(arguments.length>1)for(var v=1;v<arguments.length;v++)E[v-1]=arguments[v];x.push(new h(c,E)),x.length===1&&!U&&n(s)};function h(c,E){this.fun=c,this.array=E}h.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={};function m(){}p.on=m,p.addListener=m,p.once=m,p.off=m,p.removeListener=m,p.removeAllListeners=m,p.emit=m,p.prependListener=m,p.prependOnceListener=m,p.listeners=function(c){return[]},p.binding=function(c){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(c){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}}),Xe,Qe,et,V=ce(()=>{Xe=D(Ge()),Qe=D(Ke()),et=function(u){function l(){var g=this||self;return delete u.prototype.__magic__,g}if(typeof globalThis=="object")return globalThis;if(this)return l();u.defineProperty(u.prototype,"__magic__",{configurable:!0,get:l});var p=__magic__;return p}(Object)}),ge={};de(ge,{default:()=>be});var J,ue,be,tt=ce(()=>{"use strict";V(),J=D(q("react")),ue=u=>J.createElement("svg",$e({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},u),J.createElement("g",null,J.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),be=ue}),_e={};de(_e,{Receiver:()=>dt});ye.exports=me(_e);V();var N=D(q("react")),rt=q("@fortawesome/free-solid-svg-icons"),ot=q("@fortawesome/react-fontawesome"),nt=q("@terradharitri/sdk-dapp/apiCalls/endpoints"),at=q("@terradharitri/sdk-dapp/UI/CopyButton"),it=q("@terradharitri/sdk-dapp/UI/ExplorerLink"),pt=q("@terradharitri/sdk-dapp/UI/Trim"),lt=D(q("classnames"));V();var ft=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ft));var ut={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};V();V();var{default:st}=(tt(),me(ge));V();var ct=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ct));var z={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"},dt=({label:u="Receiver",receiver:l,scamReport:p,receiverUsername:g})=>{let d=Boolean(g),y=g!=null?g:l;return N.default.createElement("div",{className:z.confirmReceiver},N.default.createElement("span",{className:ut.label},u),N.default.createElement("span",{className:(0,lt.default)(z.value,{[z.shrunk]:d}),"data-testid":"confirmReceiver"},d&&N.default.createElement(st,{className:z.icon}),y,d&&N.default.createElement(it.ExplorerLink,{page:`/${nt.ACCOUNTS_ENDPOINT}/${l}`,className:z.explorer})),d&&N.default.createElement("span",{className:z.subValue},N.default.createElement(pt.Trim,{text:l,className:z.subValueTrim}),N.default.createElement(at.CopyButton,{text:l,className:z.subValueCopy})),p&&N.default.createElement("div",{className:z.scam},N.default.createElement("span",null,N.default.createElement(ot.FontAwesomeIcon,{icon:rt.faExclamationTriangle,className:z.icon}),N.default.createElement("small",{"data-testid":"confirmScamReport"},p))))};});var W={};H();$(W,je(ve()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
