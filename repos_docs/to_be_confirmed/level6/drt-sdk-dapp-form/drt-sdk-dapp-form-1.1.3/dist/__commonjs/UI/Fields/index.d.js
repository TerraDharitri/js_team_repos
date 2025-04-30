"use strict";import{a,b as Xe,d as Y,e as Je,f as Be}from"../../../__chunks__/chunk-RGFNPOTZ.js";var So=Xe((Xg,xo)=>{"use strict";Be();var Za=Object.create,kr=Object.defineProperty,Xa=Object.defineProperties,Ja=Object.getOwnPropertyDescriptor,Ka=Object.getOwnPropertyDescriptors,Qa=Object.getOwnPropertyNames,Kt=Object.getOwnPropertySymbols,ei=Object.getPrototypeOf,uo=Object.prototype.hasOwnProperty,ri=Object.prototype.propertyIsEnumerable,Qt=(u,c,l)=>c in u?kr(u,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[c]=l,or=(u,c)=>{for(var l in c||(c={}))uo.call(c,l)&&Qt(u,l,c[l]);if(Kt)for(var l of Kt(c))ri.call(c,l)&&Qt(u,l,c[l]);return u},ir=(u,c)=>Xa(u,Ka(c)),so=(u,c)=>()=>(u&&(c=u(u=0)),c),zr=(u,c)=>()=>(c||u((c={exports:{}}).exports,c),c.exports),fo=(u,c)=>{for(var l in c)kr(u,l,{get:c[l],enumerable:!0})},mo=(u,c,l,f)=>{if(c&&typeof c=="object"||typeof c=="function")for(let m of Qa(c))!uo.call(u,m)&&m!==l&&kr(u,m,{get:()=>c[m],enumerable:!(f=Ja(c,m))||f.enumerable});return u},X=(u,c,l)=>(l=u!=null?Za(ei(u)):{},mo(c||!u||!u.__esModule?kr(l,"default",{value:u,enumerable:!0}):l,u)),_o=u=>mo(kr({},"__esModule",{value:!0}),u),ti=zr(u=>{"use strict";L(),u.byteLength=x,u.toByteArray=A,u.fromByteArray=B;var c=[],l=[],f=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(v=0,_=m.length;v<_;++v)c[v]=m[v],l[m.charCodeAt(v)]=v;var v,_;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(s){var g=s.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var b=s.indexOf("=");b===-1&&(b=g);var h=b===g?0:4-b%4;return[b,h]}function x(s){var g=n(s),b=g[0],h=g[1];return(b+h)*3/4-h}function y(s,g,b){return(g+b)*3/4-b}function A(s){var g,b=n(s),h=b[0],S=b[1],E=new f(y(s,h,S)),R=0,D=S>0?h-4:h,N;for(N=0;N<D;N+=4)g=l[s.charCodeAt(N)]<<18|l[s.charCodeAt(N+1)]<<12|l[s.charCodeAt(N+2)]<<6|l[s.charCodeAt(N+3)],E[R++]=g>>16&255,E[R++]=g>>8&255,E[R++]=g&255;return S===2&&(g=l[s.charCodeAt(N)]<<2|l[s.charCodeAt(N+1)]>>4,E[R++]=g&255),S===1&&(g=l[s.charCodeAt(N)]<<10|l[s.charCodeAt(N+1)]<<4|l[s.charCodeAt(N+2)]>>2,E[R++]=g>>8&255,E[R++]=g&255),E}function w(s){return c[s>>18&63]+c[s>>12&63]+c[s>>6&63]+c[s&63]}function q(s,g,b){for(var h,S=[],E=g;E<b;E+=3)h=(s[E]<<16&16711680)+(s[E+1]<<8&65280)+(s[E+2]&255),S.push(w(h));return S.join("")}function B(s){for(var g,b=s.length,h=b%3,S=[],E=16383,R=0,D=b-h;R<D;R+=E)S.push(q(s,R,R+E>D?D:R+E));return h===1?(g=s[b-1],S.push(c[g>>2]+c[g<<4&63]+"==")):h===2&&(g=(s[b-2]<<8)+s[b-1],S.push(c[g>>10]+c[g>>4&63]+c[g<<2&63]+"=")),S.join("")}}),oi=zr(u=>{L(),u.read=function(c,l,f,m,v){var _,n,x=v*8-m-1,y=(1<<x)-1,A=y>>1,w=-7,q=f?v-1:0,B=f?-1:1,s=c[l+q];for(q+=B,_=s&(1<<-w)-1,s>>=-w,w+=x;w>0;_=_*256+c[l+q],q+=B,w-=8);for(n=_&(1<<-w)-1,_>>=-w,w+=m;w>0;n=n*256+c[l+q],q+=B,w-=8);if(_===0)_=1-A;else{if(_===y)return n?NaN:(s?-1:1)*(1/0);n=n+Math.pow(2,m),_=_-A}return(s?-1:1)*n*Math.pow(2,_-m)},u.write=function(c,l,f,m,v,_){var n,x,y,A=_*8-v-1,w=(1<<A)-1,q=w>>1,B=v===23?Math.pow(2,-24)-Math.pow(2,-77):0,s=m?0:_-1,g=m?1:-1,b=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(x=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+q>=1?l+=B/y:l+=B*Math.pow(2,1-q),l*y>=2&&(n++,y/=2),n+q>=w?(x=0,n=w):n+q>=1?(x=(l*y-1)*Math.pow(2,v),n=n+q):(x=l*Math.pow(2,q-1)*Math.pow(2,v),n=0));v>=8;c[f+s]=x&255,s+=g,x/=256,v-=8);for(n=n<<v|x,A+=v;A>0;c[f+s]=n&255,s+=g,n/=256,A-=8);c[f+s-g]|=b*128}}),ni=zr(u=>{"use strict";L();var c=ti(),l=oi(),f=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;u.Buffer=n,u.SlowBuffer=S,u.INSPECT_MAX_BYTES=50;var m=2147483647;u.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=v(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function v(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function _(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return x(e,r,t)}n.poolSize=8192;function x(e,r,t){if(typeof e=="string")return q(e,r);if(ArrayBuffer.isView(e))return s(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var i=b(e);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return x(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function A(e,r,t){return y(e),e<=0?_(e):r!==void 0?typeof t=="string"?_(e).fill(r,t):_(e).fill(r):_(e)}n.alloc=function(e,r,t){return A(e,r,t)};function w(e){return y(e),_(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function q(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=E(e,r)|0,o=_(t),i=o.write(e,r);return i!==t&&(o=o.slice(0,i)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=_(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function s(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function b(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=_(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?_(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,i=0,p=Math.min(t,o);i<p;++i)if(e[i]!==r[i]){t=e[i],o=r[i];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),i=0;for(t=0;t<e.length;++t){var p=e[t];if(H(p,Uint8Array))i+p.length>o.length?n.from(p).copy(o,i):Uint8Array.prototype.set.call(o,p,i);else if(n.isBuffer(p))p.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return o};function E(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ee(e).length;default:if(i)return o?-1:fe(e).length;r=(""+r).toLowerCase(),i=!0}}n.byteLength=E;function R(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return qe(this,r,t);case"latin1":case"binary":return Ae(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function D(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)D(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)D(this,r,r+3),D(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)D(this,r,r+7),D(this,r+1,r+6),D(this,r+2,r+5),D(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):R.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=u.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},f&&(n.prototype[f]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,i){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),r<0||t>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=t)return 0;if(o>=i)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var p=i-o,d=t-r,k=Math.min(p,d),O=this.slice(o,i),I=e.slice(r,t),U=0;U<k;++U)if(O[U]!==I[U]){p=O[U],d=I[U];break}return p<d?-1:d<p?1:0};function N(e,r,t,o,i){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=i?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(i)return-1;t=e.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,i);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,i);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,i){var p=1,d=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;p=2,d/=2,k/=2,t/=2}function O(xe,Se){return p===1?xe[Se]:xe.readUInt16BE(Se*p)}var I;if(i){var U=-1;for(I=t;I<d;I++)if(O(e,I)===O(r,U===-1?0:I-U)){if(U===-1&&(U=I),I-U+1===k)return U*p}else U!==-1&&(I-=I-U),U=-1}else for(t+k>d&&(t=d-k),I=t;I>=0;I--){for(var M=!0,ce=0;ce<k;ce++)if(O(e,I+ce)!==O(r,ce)){M=!1;break}if(M)return I}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return N(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return N(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var i=e.length-t;o?(o=Number(o),o>i&&(o=i)):o=i;var p=r.length;o>p/2&&(o=p/2);for(var d=0;d<o;++d){var k=parseInt(r.substr(d*2,2),16);if(me(k))return d;e[t+d]=k}return d}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Oe(r),e,t,o)}function be(e,r,t,o){return pe(Ee(r),e,t,o)}function ve(e,r,t,o){return pe(Ne(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-r;if((t===void 0||t>i)&&(t=i),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return be(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?c.fromByteArray(e):c.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],i=r;i<t;){var p=e[i],d=null,k=p>239?4:p>223?3:p>191?2:1;if(i+k<=t){var O,I,U,M;switch(k){case 1:p<128&&(d=p);break;case 2:O=e[i+1],(O&192)===128&&(M=(p&31)<<6|O&63,M>127&&(d=M));break;case 3:O=e[i+1],I=e[i+2],(O&192)===128&&(I&192)===128&&(M=(p&15)<<12|(O&63)<<6|I&63,M>2047&&(M<55296||M>57343)&&(d=M));break;case 4:O=e[i+1],I=e[i+2],U=e[i+3],(O&192)===128&&(I&192)===128&&(U&192)===128&&(M=(p&15)<<18|(O&63)<<12|(I&63)<<6|U&63,M>65535&&M<1114112&&(d=M))}}d===null?(d=65533,k=1):d>65535&&(d-=65536,o.push(d>>>10&1023|55296),d=56320|d&1023),o.push(d),i+=k}return we(o)}var ae=4096;function we(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function qe(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]&127);return o}function Ae(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var i="",p=r;p<t;++p)i+=Re[e[p]];return i}function ke(e,r,t){for(var o=e.slice(r,t),i="",p=0;p<o.length-1;p+=2)i+=String.fromCharCode(o[p]+o[p+1]*256);return i}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function T(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e+--r],i=1;r>0&&(i*=256);)o+=this[e+--r]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=r,i=1,p=this[e+--o];o>0&&(i*=256);)p+=this[e+--o]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*r)),p},n.prototype.readInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!1,52,8)};function j(e,r,t,o,i,p){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<p)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=1,d=0;for(this[r]=e&255;++d<t&&(p*=256);)this[r+d]=e/p&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=t-1,d=1;for(this[r+p]=e&255;--p>=0&&(d*=256);)this[r+p]=e/d&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=0,d=1,k=0;for(this[r]=e&255;++p<t&&(d*=256);)e<0&&k===0&&this[r+p-1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=t-1,d=1,k=0;for(this[r+p]=e&255;--p>=0&&(d*=256);)e<0&&k===0&&this[r+p+1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,i,p){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ye(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return ye(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return ye(this,e,r,!1,t)};function se(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var i=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),i},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var d=n.isBuffer(e)?e:n.from(e,o),k=d.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=d[p%k]}return this};var Ce=/[^+/0-9A-Za-z-_]/g;function Le(e){if(e=e.split("=")[0],e=e.trim().replace(Ce,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,i=null,p=[],d=0;d<o;++d){if(t=e.charCodeAt(d),t>55295&&t<57344){if(!i){if(t>56319){(r-=3)>-1&&p.push(239,191,189);continue}else if(d+1===o){(r-=3)>-1&&p.push(239,191,189);continue}i=t;continue}if(t<56320){(r-=3)>-1&&p.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(r-=3)>-1&&p.push(239,191,189);if(i=null,t<128){if((r-=1)<0)break;p.push(t)}else if(t<2048){if((r-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Oe(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Ne(e,r){for(var t,o,i,p=[],d=0;d<e.length&&!((r-=2)<0);++d)t=e.charCodeAt(d),o=t>>8,i=t%256,p.push(i),p.push(o);return p}function Ee(e){return c.toByteArray(Le(e))}function pe(e,r,t,o){for(var i=0;i<o&&!(i+t>=r.length||i>=e.length);++i)r[i+t]=e[i];return i}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Re=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,i=0;i<16;++i)r[o+i]=e[t]+e[i];return r}()}),ai=zr((u,c)=>{L();var l=c.exports={},f,m;function v(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?f=setTimeout:f=v}catch(h){f=v}try{typeof clearTimeout=="function"?m=clearTimeout:m=_}catch(h){m=_}})();function n(h){if(f===setTimeout)return setTimeout(h,0);if((f===v||!f)&&setTimeout)return f=setTimeout,setTimeout(h,0);try{return f(h,0)}catch(S){try{return f.call(null,h,0)}catch(E){return f.call(this,h,0)}}}function x(h){if(m===clearTimeout)return clearTimeout(h);if((m===_||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(h);try{return m(h)}catch(S){try{return m.call(null,h)}catch(E){return m.call(this,h)}}}var y=[],A=!1,w,q=-1;function B(){!A||!w||(A=!1,w.length?y=w.concat(y):q=-1,y.length&&s())}function s(){if(!A){var h=n(B);A=!0;for(var S=y.length;S;){for(w=y,y=[];++q<S;)w&&w[q].run();q=-1,S=y.length}w=null,A=!1,x(h)}}l.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)S[E-1]=arguments[E];y.push(new g(h,S)),y.length===1&&!A&&n(s)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function b(){}l.on=b,l.addListener=b,l.once=b,l.off=b,l.removeListener=b,l.removeAllListeners=b,l.emit=b,l.prependListener=b,l.prependOnceListener=b,l.listeners=function(h){return[]},l.binding=function(h){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(h){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),ii,li,pi,L=so(()=>{ii=X(ni()),li=X(ai()),pi=function(u){function c(){var f=this||self;return delete u.prototype.__magic__,f}if(typeof globalThis=="object")return globalThis;if(this)return c();u.defineProperty(u.prototype,"__magic__",{configurable:!0,get:c});var l=__magic__;return l}(Object)}),ho={};fo(ho,{default:()=>go});var Rr,eo,go,ci=so(()=>{"use strict";L(),Rr=X(a("react")),eo=u=>Rr.createElement("svg",or({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},u),Rr.createElement("g",null,Rr.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),go=eo}),bo={};fo(bo,{Receiver:()=>El});xo.exports=_o(bo);L();L();var Ue=X(a("react")),ro=a("@fortawesome/free-solid-svg-icons"),to=a("@fortawesome/react-fontawesome"),dt=X(a("classnames")),ui=a("formik"),si=X(a("react-select"));L();var di=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(di));var Mr={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};L();L();L();var vo=X(a("react")),y_=a("formik");L();L();var yo=X(a("react")),w_=a("formik");L();L();var fi=X(a("react")),q_=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),E_=a("formik");L();L();L();var x_=a("@terradharitri/sdk-dapp/types/tokens.types");L();L();L();L();L();var S_=a("@terradharitri/sdk-dapp/constants/index"),k_=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),A_=X(a("bignumber.js"));L();L();L();var I_=a("bech32");L();L();L();var mi=(u,c)=>typeof c=="boolean"?c:Array.isArray(c)&&c.includes(u);L();L();L();var B_=a("@terradharitri/sdk-dapp/constants"),T_=a("@terradharitri/sdk-dapp/utils/account/getAccount");L();L();var U_=a("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");L();var C_=a("@terradharitri/sdk-dapp/utils/buildUrlParams");L();var L_=X(a("anchorme"));L();L();var O_=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),_i=a("@terradharitri/sdk-dapp/utils/operations/formatAmount"),N_=a("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),R_=a("@terradharitri/sdk-dapp/utils/operations/parseAmount");L();L();var M_=a("@terradharitri/sdk-dapp/constants/index");L();var P_=a("@terradharitri/sdk-dapp/constants/index");L();L();L();var D_=a("@terradharitri/sdk-dapp/constants/index"),j_=X(a("bignumber.js"));L();var z_=a("@terradharitri/sdk-dapp/constants/index");L();var F_=a("@terradharitri/sdk-dapp/constants/index");L();L();var G_=a("@terradharitri/sdk-core"),V_=a("@terradharitri/sdk-dapp/constants/index"),W_=X(a("bignumber.js"));L();L();var $_=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");L();var Y_=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");L();var H_=X(a("bignumber.js"));L();var Z_=a("@terradharitri/sdk-dapp/constants/index"),X_=a("@terradharitri/sdk-dapp/utils/smartContracts"),J_=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),K_=X(a("bignumber.js"));L();var Q_=X(a("bignumber.js"));L();L();var eh=X(a("axios"));L();L();L();var rh=a("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");L();var th=a("@terradharitri/sdk-dapp/constants/index");L();L();L();var ft=a("@terradharitri/sdk-dapp/constants/index"),hi=X(a("bignumber.js")),oo,no,ao,gi=(0,_i.formatAmount)({input:String((oo=ft.GAS_PRICE)!=null?oo:1e9),decimals:(no=ft.DECIMALS)!=null?no:18,showLastNonZeroDecimal:!0,digits:(ao=ft.DIGITS)!=null?ao:4}),oh=new hi.default(gi).times(10).toString(10);L();var nh=a("@terradharitri/sdk-dapp/constants/index"),ah=X(a("bignumber.js"));L();var ih=X(a("bignumber.js"));L();L();var lh=a("yup");L();var io=a("@terradharitri/sdk-dapp/constants/ledger.constants"),bi=X(a("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),ht=a("yup"),vi=(0,ht.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(u){let{ledger:c}=this.parent;return!(c&&u&&u.length&&!c.ledgerDataActive)}),yi=(0,ht.string)().test({name:"hashSign",test:function(u){let{ledger:c,isGuarded:l}=this.parent;if(c){let{ledgerWithHashSign:f,ledgerWithGuardians:m}=(0,bi.default)(c.version);if(u&&u.length>300&&!f)return this.createError({message:`Data too long. You need at least DharitrI app version ${io.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!m)return this.createError({message:`You need at least DharitrI app version ${io.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),wi=[vi,yi],ph=wi.reduce((u,c)=>u.concat(c),(0,ht.string)());L();var ch=a("@terradharitri/sdk-dapp/constants/index"),uh=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),sh=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),dh=a("yup");L();var fh=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),mh=X(a("bignumber.js")),_h=a("yup");L();var hh=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),gh=X(a("bignumber.js")),bh=a("yup");L();var vh=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),yh=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),wh=X(a("bignumber.js")),qh=a("yup");L();var Eh=X(a("bignumber.js")),xh=a("yup");L();var Sh=a("@terradharitri/sdk-dapp/constants/index"),kh=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ah=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ih=X(a("bignumber.js")),Bh=a("yup");L();var Th=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Uh=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ch=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Lh=X(a("bignumber.js")),Oh=a("yup");L();var Nh=X(a("bignumber.js")),Rh=a("yup");L();var Mh=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ph=a("yup");L();var Dh=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),jh=a("yup");L();L();var zh=(0,fi.createContext)({});L();L();L();var Fh=a("react"),Gh=a("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Vh=X(a("lodash/uniqBy"));L();L();L();var Wh=X(a("axios"));L();L();var $h=X(a("axios"));L();L();var Yh=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),Hh=a("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Zh=X(a("axios")),Xh=X(a("lodash/uniqBy"));L();var Jh=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),Kh=X(a("axios"));L();var Qh=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),eg=X(a("axios"));L();var qi=X(a("react")),rg=(0,qi.createContext)({});L();L();var tg=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),og=a("@terradharitri/sdk-dapp/utils");L();var ng=a("react");L();var ag=a("react"),ig=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ei=(0,yo.createContext)({});function xi(){return(0,yo.useContext)(Ei)}L();var lg=a("react");L();L();var Si=({knownAddresses:u,inputValue:c,key:l})=>!u||!c?!1:u.some(f=>{var m;return Boolean((m=f[l])==null?void 0:m.startsWith(c))});L();L();L();var pg=a("react"),cg=a("@terradharitri/sdk-dapp/utils");L();var ug=a("react"),sg=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");L();L();var dg=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),fg=X(a("axios"));L();var mg=X(a("axios")),ki=(0,vo.createContext)({});function wo(){return(0,vo.useContext)(ki)}L();var qo=X(a("react"));L();L();var Ai=X(a("react")),_g=a("@terradharitri/sdk-dapp/constants/index"),hg=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),gg=X(a("bignumber.js")),bg=a("formik");L();L();var Ii=X(a("react")),vg=a("formik"),yg=X(a("lodash/uniqBy"));L();L();var Bi=X(a("react")),wg=(0,Bi.createContext)({});L();L();var qg=a("react"),Eg=a("@terradharitri/sdk-dapp/constants/index"),xg=a("@terradharitri/sdk-dapp/types/enums.types");L();var Sg=(0,Ii.createContext)({});L();L();var kg=a("@terradharitri/sdk-dapp/constants/index"),Ag=a("formik");L();L();var Ti=X(a("react")),Ig=a("@terradharitri/sdk-dapp/constants/index"),Bg=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Tg=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ug=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Cg=X(a("bignumber.js")),Lg=a("formik");L();L();L();L();var Og=X(a("bignumber.js"));L();var Ng=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Rg=X(a("bignumber.js"));L();L();var Mg=a("react"),Pg=a("@terradharitri/sdk-dapp/constants/index"),Dg=a("@terradharitri/sdk-dapp/utils/smartContracts"),jg=X(a("bignumber.js")),zg=a("formik");L();L();var Fg=a("@terradharitri/sdk-dapp/constants/index"),Gg=X(a("bignumber.js")),Vg=(0,Ti.createContext)({}),Wg=(0,Ai.createContext)({});L();L();var Ui=X(a("react")),$g=a("formik"),Yg=(0,Ui.createContext)({}),Ci=(0,qo.createContext)({});function Fr(){return(0,qo.useContext)(Ci)}L();L();var Li=X(a("react")),Oi=a("react-select");L();var Ni=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ni));var le={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"},Ri=u=>Li.default.createElement(Oi.components.Control,ir(or({},u),{className:le.receiverSelectControl}));L();L();var mt=X(a("react")),Mi=a("@fortawesome/free-solid-svg-icons"),Pi=a("@fortawesome/react-fontawesome"),Di=X(a("classnames")),ji=a("react-select");L();L();var gt=(u,c)=>{let l=c.toLowerCase(),f=u.label.toLowerCase(),m=u.value.toLowerCase();return c?f.includes(l)||m.includes(l):!0};L();var zi=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Fi=a("@terradharitri/sdk-dapp/utils"),lo=u=>u?u.filter(c=>(0,Fi.addressIsValid)(c.address)).map(c=>{let l=c.username?String((0,zi.trimUsernameDomain)(c.username)):c.address;return{value:c.address,label:l}}):[];L();var Gi=({setOption:u,setAllValues:c})=>(l,f)=>{["input-blur","menu-close"].includes(f.action)||(c(l),l||u(null))};L();var Vi=({setInputValue:u,setOption:c,changeAndBlurInput:l})=>f=>{!f||(c(f),l(f.value),f.value!==f.label?u(f.label):u(f.value))};L();var Wi=({options:u,usernameAccounts:c,knownAddresses:l,setFieldValue:f,setInputValue:m,setOption:v})=>_=>{var n,x,y,A;let w=u.find(S=>S.value===_&&S.value!==S.label),q=w==null?void 0:w.label,B,s,g=(n=c[_])==null?void 0:n.username;g&&(q=g,B=g,s=(x=c[_])==null?void 0:x.rawUsername);let b=l.find(S=>S.address===_);b!=null&&b.username&&(q=b==null?void 0:b.username,B=b==null?void 0:b.username,s=b==null?void 0:b.rawUsername);let h=q!=null?q:_;m(h),v({value:_,label:h}),f("receiver",(A=(y=c[_])==null?void 0:y.address)!=null?A:_),f("receiverUsername",B),f("rawReceiverUsername",s)},$i=u=>{let{selectProps:c,isDisabled:l,options:f}=u,{menuIsOpen:m,value:v,isLoading:_}=c,n=(0,mt.useMemo)(()=>f.find(w=>{let q=w,B=v;return B?gt(q,B.label):null}),[v,f]),x=f.length===0&&!_,y=Boolean(v)&&!n,A=l||x||y;return _?mt.default.createElement(Pi.FontAwesomeIcon,{icon:Mi.faSpinner,spin:!0,className:le.receiverSelectSpinner}):mt.default.createElement(ji.components.DropdownIndicator,ir(or({},u),{className:(0,Di.default)(le.receiverSelectIndicator,{[le.expanded]:m,[le.hidden]:A})}))};L();L();var Yi=X(a("react")),Hi=a("@terradharitri/sdk-dapp/utils"),Zi=X(a("classnames")),Xi=a("react-select");L();var Hg=X(a("react")),Zg=a("@terradharitri/sdk-dapp/constants/index");L();L();var Ji=(u,c)=>{let l=u.current;if(!l||!l.state.focusedOption)return!1;let f=l.state.focusedOption,m=f.label.toLowerCase(),v=f.value.toLowerCase(),_=m!==v,n=_&&m.startsWith(c.toLowerCase());return _&&!c?!0:n},Ki=u=>c=>{let{selectProps:l,value:f}=c,{inputValue:m,menuIsOpen:v}=l,{receiverUsernameInfo:{receiverUsername:_}}=Fr(),n=Ji(u,m),x=(0,Hi.addressIsValid)(String(f)),y=Boolean(_)||n,A=x&&v||!x&&m;return Yi.default.createElement(Xi.components.Input,ir(or({},c),{"data-testid":"receiver",className:(0,Zi.default)(le.receiverSelectInput,{[le.visible]:A,[le.spaced]:y})}))};L();L();var Qi=X(a("react")),el=a("react-select"),rl=u=>Qi.default.createElement(el.components.Menu,ir(or({},u),{className:le.receiverSelectMenu}));L();L();var De=X(a("react")),_t=a("@terradharitri/sdk-dapp/UI/Trim"),Pr=X(a("classnames")),tl=a("react-select");L();var{default:jr}=(ci(),_o(ho)),ol=u=>{let{selectProps:c,focusedOption:l}=u,{value:f,inputValue:m}=c,v=l,_=v?v.label.toLowerCase():null,n=v&&v.label!==v.value,x=(_&&(!f||f&&m)?_.startsWith(m.toLowerCase()):!1)&&v?v.label.replace(v.label.substring(0,m.length),m):null,y=x&&!m,A=x&&m.length<x.length/2,w=x&&Boolean(m)&&A,q=x&&Boolean(m);return De.default.createElement(De.default.Fragment,null,w&&!n&&De.default.createElement("div",{className:(0,Pr.default)(le.receiverSelectAutocomplete,le.receiverSelectAutocompleteUntrimmed)},x),q&&n&&De.default.createElement("div",{className:(0,Pr.default)(le.receiverSelectAutocomplete,le.receiverSelectAutocompleteUsername)},De.default.createElement(jr,{className:le.receiverSelectAutocompleteIcon}),x,De.default.createElement("span",{className:le.receiverSelectAutocompleteWrapper},"(",De.default.createElement(_t.Trim,{text:v.value}),")")),y&&De.default.createElement("span",{className:(0,Pr.default)(le.receiverSelectAutocomplete,{[le.receiverSelectAutocompleteUsername]:n})},n?De.default.createElement(De.default.Fragment,null,De.default.createElement("span",null,De.default.createElement(jr,{className:(0,Pr.default)(le.receiverSelectAutocompleteIcon,le.receiverSelectAutocompleteIconMuted)}),v.label),De.default.createElement("span",{className:le.receiverSelectAutocompleteWrapper},"(",De.default.createElement(_t.Trim,{text:v.value}),")")):De.default.createElement(_t.Trim,{text:x})),De.default.createElement(tl.components.MenuList,ir(or({},u),{className:le.receiverSelectList})))};L();L();var Ke=X(a("react")),po=a("@terradharitri/sdk-dapp/UI/Trim"),nl=X(a("classnames")),al=a("react-select");L();L();var Dr=X(a("react"));L();var il=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(il));var ll={highlight:"dapp-core-component__styles-modules__highlight"},pl=({highlight:u,text:c=""})=>{let l=c.split(" "),f=u.toLowerCase(),m=new RegExp(`(${f})`,"gi"),v=l.map(_=>_.split(m).filter(n=>n));return Dr.default.createElement("span",{className:ll.highlight},v.map((_,n)=>{let x=`${_}-${n}`;return Dr.default.createElement("span",{key:x},_.map((y,A)=>{let w=y.toLowerCase()===f,q=f&&w,B=`${y}-${A}`;return q?Dr.default.createElement("strong",{key:B},y):Dr.default.createElement("span",{key:B},y)}))}))},cl=u=>{let{isFocused:c,data:l,selectProps:f}=u,{inputValue:m}=f,v=l,_=v.value!==v.label;return Ke.default.createElement(al.components.Option,ir(or({},u),{className:(0,nl.default)(le.receiverSelectOption,{[le.focused]:c})}),_?Ke.default.createElement(Ke.default.Fragment,null,Ke.default.createElement("span",{className:le.receiverSelectOptionUsername},Ke.default.createElement(jr,{className:le.receiverSelectOptionUsernameIcon}),Ke.default.createElement(pl,{text:v.label,highlight:m})),Ke.default.createElement("span",{className:le.receiverSelectOptionNameWrapper},"(",Ke.default.createElement(po.Trim,{text:v.value,className:le.receiverSelectOptionName}),")")):Ke.default.createElement(po.Trim,{text:v.value,className:le.receiverSelectOptionName}))};L();L();var ul=X(a("react")),sl=X(a("classnames")),dl=a("react-select"),fl=u=>{let{selectProps:c,isFocused:l,className:f}=u,{menuIsOpen:m}=c;return ul.default.createElement(dl.components.SelectContainer,ir(or({},u),{className:(0,sl.default)(f,{[le.expanded]:m,[le.focused]:l&&m})}))};L();L();var Qe=X(a("react")),co=a("@terradharitri/sdk-dapp/UI/Trim"),ml=a("@terradharitri/sdk-dapp/utils"),_l=X(a("classnames")),hl=a("react-select"),gl=u=>{let{selectProps:c,isDisabled:l}=u,{value:f,menuIsOpen:m}=c,v=f,{receiverInfo:{receiver:_},receiverUsernameInfo:{receiverUsername:n}}=Fr(),x=n!=null?n:v&&v.value!==v.label,y=v?{value:_!=null?_:v.value,label:v.label}:null,A=y&&(x||!x&&!m)&&(0,ml.addressIsValid)(y.value);return Qe.default.createElement(hl.components.ValueContainer,ir(or({},u),{className:le.receiverSelectValue}),A&&Qe.default.createElement("span",{className:(0,_l.default)(le.receiverSelectSingle,{[le.disabled]:l})},x?Qe.default.createElement(Qe.default.Fragment,null,Qe.default.createElement("span",{className:le.receiverSelectSingleUsername},Qe.default.createElement(jr,{className:le.receiverSelectSingleUsernameIcon}),y.label),Qe.default.createElement("span",{className:le.receiverSelectSingleTrimWrapper},"(",Qe.default.createElement(co.Trim,{text:y.value,className:le.receiverSelectSingleTrim}),")")):Qe.default.createElement(co.Trim,{text:y.value,className:le.receiverSelectSingleTrim})),u.children)};L();L();var bl=a("formik"),Eo=()=>{let{receiverInfo:{receiverError:u,isReceiverInvalid:c},receiverUsernameInfo:{receiverUsernameError:l,isReceiverUsernameInvalid:f,receiverUsername:m}}=Fr(),{touched:{receiver:v}}=(0,bl.useFormikContext)(),_=c&&v||f;return m!=null&&m.startsWith("drt1")?{isInvalid:c,receiverErrorDataTestId:"receiverError",error:u}:{isInvalid:_,receiverErrorDataTestId:f?"receiverUsernameError":"receiverError",error:f?l:u}};L();L();var vl=a("@terradharitri/sdk-dapp/utils"),yl=a("formik");L();L();var wl=({knownAddresses:u,inputValue:c})=>!u||!c?!1:u.filter(l=>{var f;let m=(f=l.username)!=null?f:l.address,v=l.address;return gt({label:m,value:v,data:{label:m,value:v}},c)}).length>0,ql=({menuIsOpen:u})=>{let{isInvalid:c}=Eo(),{values:{nft:l}}=(0,yl.useFormikContext)(),{showUsernameError:f,isUsernameLoading:m,isUsernameDebouncing:v,usernameIsAmongKnown:_,searchQueryIsAddress:n}=wo(),{receiverInputValue:x,knownAddresses:y}=xi(),A=Si({key:"address",knownAddresses:y,inputValue:x}),w=wl({inputValue:x,knownAddresses:y}),q=n&&(!A||!u)&&!(0,vl.addressIsValid)(x),B=Boolean(f&&!(u&&A)&&!(u&&_));return{isAddressError:q||(l?c:!1),isUsernameError:B,isRequiredError:c&&!B&&!m&&!v&&!q&&!w&&!x,isReceiverDropdownOpened:x&&w&&u}},El=u=>{let c=(0,Ue.useRef)(null),{className:l}=u,{setFieldValue:f}=(0,ui.useFormikContext)(),{receiverInfo:{scamError:m,fetchingScamAddress:v,receiverInputValue:_,setReceiverInputValue:n,knownAddresses:x,receiver:y,onBlurReceiver:A,onChangeReceiver:w},receiverUsernameInfo:{receiverUsername:q},formInfo:{readonly:B}}=Fr(),[s,g]=(0,Ue.useState)(!1),[b,h]=(0,Ue.useState)(y?{label:y,value:y}:null),{receiverErrorDataTestId:S,error:E}=Eo(),{isAddressError:R,isUsernameError:D,isRequiredError:N,isReceiverDropdownOpened:ne}=ql({menuIsOpen:s}),{usernameAccounts:_e,isUsernameLoading:he}=wo(),de=()=>{A(new Event("blur"));let T=x==null?void 0:x.find(j=>j.username===_&&j.address===y);T&&(f("receiver",T.address),f("receiverUsername",T.username),f("rawReceiverUsername",T.rawUsername))},be=x==null?void 0:x.find(T=>T.username===_&&T.address===y),ve=(0,Ue.useMemo)(()=>lo(x),[x]),ie=be?lo([be]):ve,re=Wi({setFieldValue:f,setInputValue:n,setOption:h,options:ie,knownAddresses:x!=null?x:[],usernameAccounts:_e}),ae=(0,Ue.useCallback)(Gi({setAllValues:re,setOption:h}),[]),we=(0,Ue.useCallback)(T=>{w(T?T.trim():""),setTimeout(de)},[]),qe=Vi({changeAndBlurInput:we,setOption:h,setInputValue:n}),Ae=(0,Ue.useMemo)(()=>Ki(c),[c]);(0,Ue.useEffect)(()=>{if(!y)return;let T=Object.keys(_e).find(j=>{var ge;return((ge=_e[j])==null?void 0:ge.address)===y});re(T!=null?T:y),T&&n(T)},[_e,y]);let Ie=R||D||N,ke=Ie&&!s;return Ue.default.createElement("div",{className:(0,dt.default)(le.receiver,l)},Ue.default.createElement("div",{className:Mr.label,"data-testid":"receiverLabel","data-loading":v},"Receiver"),Ue.default.createElement(si.default,{value:b,onInputChange:ae,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:mi("receiver",B),options:ie,filterOption:gt,noOptionsMessage:()=>null,onChange:qe,onBlur:de,isMulti:!1,ref:c,inputValue:_,onMenuClose:()=>g(!1),onMenuOpen:()=>g(!0),components:{Menu:rl,Input:Ae,Control:Ri,ValueContainer:gl,DropdownIndicator:$i,SelectContainer:fl,MenuList:ol,Option:cl,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,dt.default)(le.receiverSelectContainer,{[le.opened]:ne,[le.invalid]:Ie||m})}),ke&&Ue.default.createElement("div",{"data-testid":S,className:Mr.error},E),he&&Ue.default.createElement("div",{className:le.loading},"Loading..."),q&&Ue.default.createElement("span",{className:le.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",Ue.default.createElement(to.FontAwesomeIcon,{icon:ro.faCheck,className:le.foundIcon})),m&&Ue.default.createElement("div",{"data-testid":"receiverScam",className:(0,dt.default)(Mr.error,Mr.scam)},Ue.default.createElement("span",null,Ue.default.createElement(to.FontAwesomeIcon,{icon:ro.faExclamationTriangle}),Ue.default.createElement("small",null,m))))};});var No=Xe((By,Oo)=>{"use strict";Be();var xl=Object.create,Gr=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,kl=Object.getOwnPropertyNames,Al=Object.getPrototypeOf,Il=Object.prototype.hasOwnProperty,Bl=(u,c)=>()=>(u&&(c=u(u=0)),c),Vr=(u,c)=>()=>(c||u((c={exports:{}}).exports,c),c.exports),Tl=(u,c)=>{for(var l in c)Gr(u,l,{get:c[l],enumerable:!0})},Uo=(u,c,l,f)=>{if(c&&typeof c=="object"||typeof c=="function")for(let m of kl(c))!Il.call(u,m)&&m!==l&&Gr(u,m,{get:()=>c[m],enumerable:!(f=Sl(c,m))||f.enumerable});return u},te=(u,c,l)=>(l=u!=null?xl(Al(u)):{},Uo(c||!u||!u.__esModule?Gr(l,"default",{value:u,enumerable:!0}):l,u)),Ul=u=>Uo(Gr({},"__esModule",{value:!0}),u),Cl=Vr(u=>{"use strict";W(),u.byteLength=x,u.toByteArray=A,u.fromByteArray=B;var c=[],l=[],f=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(v=0,_=m.length;v<_;++v)c[v]=m[v],l[m.charCodeAt(v)]=v;var v,_;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(s){var g=s.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var b=s.indexOf("=");b===-1&&(b=g);var h=b===g?0:4-b%4;return[b,h]}function x(s){var g=n(s),b=g[0],h=g[1];return(b+h)*3/4-h}function y(s,g,b){return(g+b)*3/4-b}function A(s){var g,b=n(s),h=b[0],S=b[1],E=new f(y(s,h,S)),R=0,D=S>0?h-4:h,N;for(N=0;N<D;N+=4)g=l[s.charCodeAt(N)]<<18|l[s.charCodeAt(N+1)]<<12|l[s.charCodeAt(N+2)]<<6|l[s.charCodeAt(N+3)],E[R++]=g>>16&255,E[R++]=g>>8&255,E[R++]=g&255;return S===2&&(g=l[s.charCodeAt(N)]<<2|l[s.charCodeAt(N+1)]>>4,E[R++]=g&255),S===1&&(g=l[s.charCodeAt(N)]<<10|l[s.charCodeAt(N+1)]<<4|l[s.charCodeAt(N+2)]>>2,E[R++]=g>>8&255,E[R++]=g&255),E}function w(s){return c[s>>18&63]+c[s>>12&63]+c[s>>6&63]+c[s&63]}function q(s,g,b){for(var h,S=[],E=g;E<b;E+=3)h=(s[E]<<16&16711680)+(s[E+1]<<8&65280)+(s[E+2]&255),S.push(w(h));return S.join("")}function B(s){for(var g,b=s.length,h=b%3,S=[],E=16383,R=0,D=b-h;R<D;R+=E)S.push(q(s,R,R+E>D?D:R+E));return h===1?(g=s[b-1],S.push(c[g>>2]+c[g<<4&63]+"==")):h===2&&(g=(s[b-2]<<8)+s[b-1],S.push(c[g>>10]+c[g>>4&63]+c[g<<2&63]+"=")),S.join("")}}),Ll=Vr(u=>{W(),u.read=function(c,l,f,m,v){var _,n,x=v*8-m-1,y=(1<<x)-1,A=y>>1,w=-7,q=f?v-1:0,B=f?-1:1,s=c[l+q];for(q+=B,_=s&(1<<-w)-1,s>>=-w,w+=x;w>0;_=_*256+c[l+q],q+=B,w-=8);for(n=_&(1<<-w)-1,_>>=-w,w+=m;w>0;n=n*256+c[l+q],q+=B,w-=8);if(_===0)_=1-A;else{if(_===y)return n?NaN:(s?-1:1)*(1/0);n=n+Math.pow(2,m),_=_-A}return(s?-1:1)*n*Math.pow(2,_-m)},u.write=function(c,l,f,m,v,_){var n,x,y,A=_*8-v-1,w=(1<<A)-1,q=w>>1,B=v===23?Math.pow(2,-24)-Math.pow(2,-77):0,s=m?0:_-1,g=m?1:-1,b=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(x=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+q>=1?l+=B/y:l+=B*Math.pow(2,1-q),l*y>=2&&(n++,y/=2),n+q>=w?(x=0,n=w):n+q>=1?(x=(l*y-1)*Math.pow(2,v),n=n+q):(x=l*Math.pow(2,q-1)*Math.pow(2,v),n=0));v>=8;c[f+s]=x&255,s+=g,x/=256,v-=8);for(n=n<<v|x,A+=v;A>0;c[f+s]=n&255,s+=g,n/=256,A-=8);c[f+s-g]|=b*128}}),Ol=Vr(u=>{"use strict";W();var c=Cl(),l=Ll(),f=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;u.Buffer=n,u.SlowBuffer=S,u.INSPECT_MAX_BYTES=50;var m=2147483647;u.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=v(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function v(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function _(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return x(e,r,t)}n.poolSize=8192;function x(e,r,t){if(typeof e=="string")return q(e,r);if(ArrayBuffer.isView(e))return s(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var i=b(e);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return x(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function A(e,r,t){return y(e),e<=0?_(e):r!==void 0?typeof t=="string"?_(e).fill(r,t):_(e).fill(r):_(e)}n.alloc=function(e,r,t){return A(e,r,t)};function w(e){return y(e),_(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function q(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=E(e,r)|0,o=_(t),i=o.write(e,r);return i!==t&&(o=o.slice(0,i)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=_(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function s(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function b(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=_(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?_(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,i=0,p=Math.min(t,o);i<p;++i)if(e[i]!==r[i]){t=e[i],o=r[i];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),i=0;for(t=0;t<e.length;++t){var p=e[t];if(H(p,Uint8Array))i+p.length>o.length?n.from(p).copy(o,i):Uint8Array.prototype.set.call(o,p,i);else if(n.isBuffer(p))p.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return o};function E(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ee(e).length;default:if(i)return o?-1:fe(e).length;r=(""+r).toLowerCase(),i=!0}}n.byteLength=E;function R(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return qe(this,r,t);case"latin1":case"binary":return Ae(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function D(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)D(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)D(this,r,r+3),D(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)D(this,r,r+7),D(this,r+1,r+6),D(this,r+2,r+5),D(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):R.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=u.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},f&&(n.prototype[f]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,i){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),r<0||t>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=t)return 0;if(o>=i)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var p=i-o,d=t-r,k=Math.min(p,d),O=this.slice(o,i),I=e.slice(r,t),U=0;U<k;++U)if(O[U]!==I[U]){p=O[U],d=I[U];break}return p<d?-1:d<p?1:0};function N(e,r,t,o,i){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=i?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(i)return-1;t=e.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,i);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,i);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,i){var p=1,d=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;p=2,d/=2,k/=2,t/=2}function O(xe,Se){return p===1?xe[Se]:xe.readUInt16BE(Se*p)}var I;if(i){var U=-1;for(I=t;I<d;I++)if(O(e,I)===O(r,U===-1?0:I-U)){if(U===-1&&(U=I),I-U+1===k)return U*p}else U!==-1&&(I-=I-U),U=-1}else for(t+k>d&&(t=d-k),I=t;I>=0;I--){for(var M=!0,ce=0;ce<k;ce++)if(O(e,I+ce)!==O(r,ce)){M=!1;break}if(M)return I}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return N(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return N(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var i=e.length-t;o?(o=Number(o),o>i&&(o=i)):o=i;var p=r.length;o>p/2&&(o=p/2);for(var d=0;d<o;++d){var k=parseInt(r.substr(d*2,2),16);if(me(k))return d;e[t+d]=k}return d}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Oe(r),e,t,o)}function be(e,r,t,o){return pe(Ee(r),e,t,o)}function ve(e,r,t,o){return pe(Ne(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-r;if((t===void 0||t>i)&&(t=i),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return be(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?c.fromByteArray(e):c.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],i=r;i<t;){var p=e[i],d=null,k=p>239?4:p>223?3:p>191?2:1;if(i+k<=t){var O,I,U,M;switch(k){case 1:p<128&&(d=p);break;case 2:O=e[i+1],(O&192)===128&&(M=(p&31)<<6|O&63,M>127&&(d=M));break;case 3:O=e[i+1],I=e[i+2],(O&192)===128&&(I&192)===128&&(M=(p&15)<<12|(O&63)<<6|I&63,M>2047&&(M<55296||M>57343)&&(d=M));break;case 4:O=e[i+1],I=e[i+2],U=e[i+3],(O&192)===128&&(I&192)===128&&(U&192)===128&&(M=(p&15)<<18|(O&63)<<12|(I&63)<<6|U&63,M>65535&&M<1114112&&(d=M))}}d===null?(d=65533,k=1):d>65535&&(d-=65536,o.push(d>>>10&1023|55296),d=56320|d&1023),o.push(d),i+=k}return we(o)}var ae=4096;function we(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function qe(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]&127);return o}function Ae(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var i="",p=r;p<t;++p)i+=Re[e[p]];return i}function ke(e,r,t){for(var o=e.slice(r,t),i="",p=0;p<o.length-1;p+=2)i+=String.fromCharCode(o[p]+o[p+1]*256);return i}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function T(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e+--r],i=1;r>0&&(i*=256);)o+=this[e+--r]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=r,i=1,p=this[e+--o];o>0&&(i*=256);)p+=this[e+--o]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*r)),p},n.prototype.readInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!1,52,8)};function j(e,r,t,o,i,p){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<p)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=1,d=0;for(this[r]=e&255;++d<t&&(p*=256);)this[r+d]=e/p&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=t-1,d=1;for(this[r+p]=e&255;--p>=0&&(d*=256);)this[r+p]=e/d&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=0,d=1,k=0;for(this[r]=e&255;++p<t&&(d*=256);)e<0&&k===0&&this[r+p-1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=t-1,d=1,k=0;for(this[r+p]=e&255;--p>=0&&(d*=256);)e<0&&k===0&&this[r+p+1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,i,p){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ye(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return ye(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return ye(this,e,r,!1,t)};function se(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var i=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),i},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var d=n.isBuffer(e)?e:n.from(e,o),k=d.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=d[p%k]}return this};var Ce=/[^+/0-9A-Za-z-_]/g;function Le(e){if(e=e.split("=")[0],e=e.trim().replace(Ce,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,i=null,p=[],d=0;d<o;++d){if(t=e.charCodeAt(d),t>55295&&t<57344){if(!i){if(t>56319){(r-=3)>-1&&p.push(239,191,189);continue}else if(d+1===o){(r-=3)>-1&&p.push(239,191,189);continue}i=t;continue}if(t<56320){(r-=3)>-1&&p.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(r-=3)>-1&&p.push(239,191,189);if(i=null,t<128){if((r-=1)<0)break;p.push(t)}else if(t<2048){if((r-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Oe(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Ne(e,r){for(var t,o,i,p=[],d=0;d<e.length&&!((r-=2)<0);++d)t=e.charCodeAt(d),o=t>>8,i=t%256,p.push(i),p.push(o);return p}function Ee(e){return c.toByteArray(Le(e))}function pe(e,r,t,o){for(var i=0;i<o&&!(i+t>=r.length||i>=e.length);++i)r[i+t]=e[i];return i}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Re=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,i=0;i<16;++i)r[o+i]=e[t]+e[i];return r}()}),Nl=Vr((u,c)=>{W();var l=c.exports={},f,m;function v(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?f=setTimeout:f=v}catch(h){f=v}try{typeof clearTimeout=="function"?m=clearTimeout:m=_}catch(h){m=_}})();function n(h){if(f===setTimeout)return setTimeout(h,0);if((f===v||!f)&&setTimeout)return f=setTimeout,setTimeout(h,0);try{return f(h,0)}catch(S){try{return f.call(null,h,0)}catch(E){return f.call(this,h,0)}}}function x(h){if(m===clearTimeout)return clearTimeout(h);if((m===_||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(h);try{return m(h)}catch(S){try{return m.call(null,h)}catch(E){return m.call(this,h)}}}var y=[],A=!1,w,q=-1;function B(){!A||!w||(A=!1,w.length?y=w.concat(y):q=-1,y.length&&s())}function s(){if(!A){var h=n(B);A=!0;for(var S=y.length;S;){for(w=y,y=[];++q<S;)w&&w[q].run();q=-1,S=y.length}w=null,A=!1,x(h)}}l.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)S[E-1]=arguments[E];y.push(new g(h,S)),y.length===1&&!A&&n(s)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function b(){}l.on=b,l.addListener=b,l.once=b,l.off=b,l.removeListener=b,l.removeAllListeners=b,l.emit=b,l.prependListener=b,l.prependOnceListener=b,l.listeners=function(h){return[]},l.binding=function(h){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(h){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Rl,Ml,Pl,W=Bl(()=>{Rl=te(Ol()),Ml=te(Nl()),Pl=function(u){function c(){var f=this||self;return delete u.prototype.__magic__,f}if(typeof globalThis=="object")return globalThis;if(this)return c();u.defineProperty(u.prototype,"__magic__",{configurable:!0,get:c});var l=__magic__;return l}(Object)}),Co={};Tl(Co,{SFTAmount:()=>ip});Oo.exports=Ul(Co);W();W();var $e=te(a("react")),Dl=te(a("bignumber.js")),bt=te(a("classnames"));W();var jl=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jl));var Ar={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};W();W();var Jg=te(a("react")),Kg=a("@terradharitri/sdk-dapp/constants/index");W();W();W();var Qg=te(a("axios"));W();W();W();var eb=a("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");W();var rb=a("@terradharitri/sdk-dapp/constants/index");W();W();W();W();W();W();var tb=te(a("axios"));W();W();var ob=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),nb=a("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),ab=te(a("axios")),ib=te(a("lodash/uniqBy"));W();var lb=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),pb=te(a("axios"));W();W();W();var cb=a("@terradharitri/sdk-dapp/types/tokens.types");W();W();W();W();var ub=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),sb=te(a("axios"));W();W();var db=te(a("axios"));W();var zl=te(a("react")),fb=(0,zl.createContext)({});W();W();var Fl=te(a("react")),mb=a("@terradharitri/sdk-dapp/constants/index"),_b=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),hb=te(a("bignumber.js")),gb=a("formik");W();W();W();var bb=a("bech32");W();W();W();var ko=(u,c)=>typeof c=="boolean"?c:Array.isArray(c)&&c.includes(u);W();W();W();var vb=a("@terradharitri/sdk-dapp/constants"),yb=a("@terradharitri/sdk-dapp/utils/account/getAccount");W();W();var wb=a("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");W();var qb=a("@terradharitri/sdk-dapp/utils/buildUrlParams");W();var Eb=te(a("anchorme"));W();W();var xb=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Gl=a("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Sb=a("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),kb=a("@terradharitri/sdk-dapp/utils/operations/parseAmount");W();W();var Vl=te(a("react")),Ab=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ib=a("formik");W();W();var Bb=a("@terradharitri/sdk-dapp/constants/index"),Tb=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ub=te(a("bignumber.js"));W();W();var Cb=a("@terradharitri/sdk-dapp/constants/index");W();var Lb=a("@terradharitri/sdk-dapp/constants/index");W();var Ob=a("@terradharitri/sdk-dapp/constants/index"),Nb=te(a("bignumber.js"));W();var Rb=a("@terradharitri/sdk-dapp/constants/index");W();var Mb=a("@terradharitri/sdk-dapp/constants/index");W();W();var Pb=a("@terradharitri/sdk-core"),Db=a("@terradharitri/sdk-dapp/constants/index"),jb=te(a("bignumber.js"));W();W();var zb=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");W();var Fb=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");W();var Gb=te(a("bignumber.js"));W();var Vb=a("@terradharitri/sdk-dapp/constants/index"),Wb=a("@terradharitri/sdk-dapp/utils/smartContracts"),$b=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Yb=te(a("bignumber.js"));W();var Hb=te(a("bignumber.js"));W();var vt=a("@terradharitri/sdk-dapp/constants/index"),Wl=te(a("bignumber.js")),Ao,Io,Bo,$l=(0,Gl.formatAmount)({input:String((Ao=vt.GAS_PRICE)!=null?Ao:1e9),decimals:(Io=vt.DECIMALS)!=null?Io:18,showLastNonZeroDecimal:!0,digits:(Bo=vt.DIGITS)!=null?Bo:4}),Zb=new Wl.default($l).times(10).toString(10);W();var Xb=a("@terradharitri/sdk-dapp/constants/index"),Jb=te(a("bignumber.js"));W();var Kb=te(a("bignumber.js"));W();W();var Qb=a("yup");W();var To=a("@terradharitri/sdk-dapp/constants/ledger.constants"),Yl=te(a("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),yt=a("yup"),Hl=(0,yt.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(u){let{ledger:c}=this.parent;return!(c&&u&&u.length&&!c.ledgerDataActive)}),Zl=(0,yt.string)().test({name:"hashSign",test:function(u){let{ledger:c,isGuarded:l}=this.parent;if(c){let{ledgerWithHashSign:f,ledgerWithGuardians:m}=(0,Yl.default)(c.version);if(u&&u.length>300&&!f)return this.createError({message:`Data too long. You need at least DharitrI app version ${To.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!m)return this.createError({message:`You need at least DharitrI app version ${To.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Xl=[Hl,Zl],ev=Xl.reduce((u,c)=>u.concat(c),(0,yt.string)());W();var rv=a("@terradharitri/sdk-dapp/constants/index"),tv=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ov=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),nv=a("yup");W();var av=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),iv=te(a("bignumber.js")),lv=a("yup");W();var pv=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),cv=te(a("bignumber.js")),uv=a("yup");W();var sv=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),dv=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),fv=te(a("bignumber.js")),mv=a("yup");W();var _v=te(a("bignumber.js")),hv=a("yup");W();var gv=a("@terradharitri/sdk-dapp/constants/index"),bv=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),vv=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),yv=te(a("bignumber.js")),wv=a("yup");W();var qv=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ev=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),xv=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Sv=te(a("bignumber.js")),kv=a("yup");W();var Av=te(a("bignumber.js")),Iv=a("yup");W();var Bv=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Tv=a("yup");W();var Uv=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Cv=a("yup");W();W();var Lv=(0,Vl.createContext)({});W();W();var Jl=te(a("react")),Ov=a("formik"),Nv=te(a("lodash/uniqBy"));W();W();var Kl=te(a("react")),Rv=(0,Kl.createContext)({});W();W();var Mv=a("react"),Pv=a("@terradharitri/sdk-dapp/constants/index"),Dv=a("@terradharitri/sdk-dapp/types/enums.types");W();var jv=(0,Jl.createContext)({});W();W();var zv=a("@terradharitri/sdk-dapp/constants/index"),Fv=a("formik");W();W();var Ql=te(a("react")),Gv=a("@terradharitri/sdk-dapp/constants/index"),Vv=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Wv=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),$v=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Yv=te(a("bignumber.js")),Hv=a("formik");W();W();W();W();var Zv=te(a("bignumber.js"));W();var Xv=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Jv=te(a("bignumber.js"));W();W();var Kv=a("react"),Qv=a("@terradharitri/sdk-dapp/constants/index"),ey=a("@terradharitri/sdk-dapp/utils/smartContracts"),ry=te(a("bignumber.js")),ty=a("formik");W();var oy=a("react");W();W();var ny=a("@terradharitri/sdk-dapp/constants/index"),ay=te(a("bignumber.js")),iy=(0,Ql.createContext)({}),ly=(0,Fl.createContext)({});W();W();var ep=te(a("react")),py=a("formik"),cy=(0,ep.createContext)({});W();W();var rp=te(a("react")),uy=a("formik");W();W();W();var sy=a("react"),dy=a("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),fy=te(a("lodash/uniqBy"));W();W();var my=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),_y=a("@terradharitri/sdk-dapp/utils");W();var hy=a("react");W();var gy=a("react"),by=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),vy=(0,rp.createContext)({});W();W();var tp=te(a("react")),yy=a("formik");W();W();W();W();W();var wy=a("react"),qy=a("@terradharitri/sdk-dapp/utils");W();var Ey=a("react"),xy=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");W();W();var Sy=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ky=te(a("axios"));W();var Ay=te(a("axios")),Iy=(0,tp.createContext)({});W();var Lo=te(a("react")),op=(0,Lo.createContext)({});function np(){return(0,Lo.useContext)(op)}W();var ap=`:root {
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
  position: relative;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label label {
  margin: 0;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label .dapp-core-component__styles-module__balance {
  line-height: 1;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  display: flex;
  overflow: hidden;
  min-width: 0;
  align-items: center;
  gap: 4px;
  max-width: 75%;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label .dapp-core-component__styles-module__balance .dapp-core-component__styles-module__available {
  color: var(--dapp-form-input-color);
  display: flex;
  align-items: center;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  gap: 4px;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label .dapp-core-component__styles-module__balance .dapp-core-component__styles-module__available .dapp-core-component__styles-module__amount {
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__wrapper {
  position: relative;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__max {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border-radius: 16px;
  margin-right: 8px;
  background-color: var(--dapp-form-max-btn-bg);
  color: var(--dapp-form-max-btn-color);
  text-transform: uppercase;
  padding: 6px 0;
  font-size: 12px;
  transition: all 200ms ease;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__max:hover {
  color: var(--dapp-form-max-btn-color);
  background-color: var(--dapp-form-max-hover-btn-bg);
  text-decoration: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ap));var br={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"},ip=u=>{let{className:c}=u,{formInfo:{readonly:l},amountInfo:f,tokensInfo:m}=np(),{amount:v,error:_,onFocus:n,onBlur:x,onChange:y,isInvalid:A,onMaxClicked:w,maxAmountAvailable:q,isMaxButtonVisible:B}=f,{nft:s}=m,g=s!=null&&s.balance?new Dl.default(s.balance).isGreaterThan(0):!1,b=h=>{h.preventDefault(),w()};return $e.default.createElement("div",{className:(0,bt.default)(br.amount,c)},$e.default.createElement("div",{className:br.label},$e.default.createElement("label",{htmlFor:"amount",className:Ar.label},"Amount"),g&&s&&$e.default.createElement("div",{"data-value":`${q} ${s.identifier}`,className:(0,bt.default)(br.balance,c)},$e.default.createElement("span",null,"Available:")," ",$e.default.createElement("span",{"data-testid":`available-${s.identifier}`,className:br.available},$e.default.createElement("span",{className:br.amount},q)," ",s.ticker))),$e.default.createElement("div",{className:br.wrapper},$e.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:v,disabled:ko("amount",l),onFocus:n,onBlur:x,onChange:y,autoComplete:"off",className:(0,bt.default)(Ar.input,{[Ar.invalid]:A,[Ar.disabled]:ko("amount",l)})}),B&&$e.default.createElement("a",{href:"/","data-testid":"maxBtn",className:br.max,onClick:b,onMouseDown:h=>{h.preventDefault()}},"Max")),A&&$e.default.createElement("div",{className:Ar.error,"data-testid":"amountError"},_))};});var nn=Xe((c2,on)=>{"use strict";Be();var lp=Object.create,Ir=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,cp=Object.getOwnPropertyNames,Ro=Object.getOwnPropertySymbols,up=Object.getPrototypeOf,Ho=Object.prototype.hasOwnProperty,sp=Object.prototype.propertyIsEnumerable,Mo=(u,c,l)=>c in u?Ir(u,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[c]=l,Po=(u,c)=>{for(var l in c||(c={}))Ho.call(c,l)&&Mo(u,l,c[l]);if(Ro)for(var l of Ro(c))sp.call(c,l)&&Mo(u,l,c[l]);return u},dp=(u,c)=>()=>(u&&(c=u(u=0)),c),Wr=(u,c)=>()=>(c||u((c={exports:{}}).exports,c),c.exports),fp=(u,c)=>{for(var l in c)Ir(u,l,{get:c[l],enumerable:!0})},Zo=(u,c,l,f)=>{if(c&&typeof c=="object"||typeof c=="function")for(let m of cp(c))!Ho.call(u,m)&&m!==l&&Ir(u,m,{get:()=>c[m],enumerable:!(f=pp(c,m))||f.enumerable});return u},J=(u,c,l)=>(l=u!=null?lp(up(u)):{},Zo(c||!u||!u.__esModule?Ir(l,"default",{value:u,enumerable:!0}):l,u)),mp=u=>Zo(Ir({},"__esModule",{value:!0}),u),_p=Wr(u=>{"use strict";P(),u.byteLength=x,u.toByteArray=A,u.fromByteArray=B;var c=[],l=[],f=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(v=0,_=m.length;v<_;++v)c[v]=m[v],l[m.charCodeAt(v)]=v;var v,_;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(s){var g=s.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var b=s.indexOf("=");b===-1&&(b=g);var h=b===g?0:4-b%4;return[b,h]}function x(s){var g=n(s),b=g[0],h=g[1];return(b+h)*3/4-h}function y(s,g,b){return(g+b)*3/4-b}function A(s){var g,b=n(s),h=b[0],S=b[1],E=new f(y(s,h,S)),R=0,D=S>0?h-4:h,N;for(N=0;N<D;N+=4)g=l[s.charCodeAt(N)]<<18|l[s.charCodeAt(N+1)]<<12|l[s.charCodeAt(N+2)]<<6|l[s.charCodeAt(N+3)],E[R++]=g>>16&255,E[R++]=g>>8&255,E[R++]=g&255;return S===2&&(g=l[s.charCodeAt(N)]<<2|l[s.charCodeAt(N+1)]>>4,E[R++]=g&255),S===1&&(g=l[s.charCodeAt(N)]<<10|l[s.charCodeAt(N+1)]<<4|l[s.charCodeAt(N+2)]>>2,E[R++]=g>>8&255,E[R++]=g&255),E}function w(s){return c[s>>18&63]+c[s>>12&63]+c[s>>6&63]+c[s&63]}function q(s,g,b){for(var h,S=[],E=g;E<b;E+=3)h=(s[E]<<16&16711680)+(s[E+1]<<8&65280)+(s[E+2]&255),S.push(w(h));return S.join("")}function B(s){for(var g,b=s.length,h=b%3,S=[],E=16383,R=0,D=b-h;R<D;R+=E)S.push(q(s,R,R+E>D?D:R+E));return h===1?(g=s[b-1],S.push(c[g>>2]+c[g<<4&63]+"==")):h===2&&(g=(s[b-2]<<8)+s[b-1],S.push(c[g>>10]+c[g>>4&63]+c[g<<2&63]+"=")),S.join("")}}),hp=Wr(u=>{P(),u.read=function(c,l,f,m,v){var _,n,x=v*8-m-1,y=(1<<x)-1,A=y>>1,w=-7,q=f?v-1:0,B=f?-1:1,s=c[l+q];for(q+=B,_=s&(1<<-w)-1,s>>=-w,w+=x;w>0;_=_*256+c[l+q],q+=B,w-=8);for(n=_&(1<<-w)-1,_>>=-w,w+=m;w>0;n=n*256+c[l+q],q+=B,w-=8);if(_===0)_=1-A;else{if(_===y)return n?NaN:(s?-1:1)*(1/0);n=n+Math.pow(2,m),_=_-A}return(s?-1:1)*n*Math.pow(2,_-m)},u.write=function(c,l,f,m,v,_){var n,x,y,A=_*8-v-1,w=(1<<A)-1,q=w>>1,B=v===23?Math.pow(2,-24)-Math.pow(2,-77):0,s=m?0:_-1,g=m?1:-1,b=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(x=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+q>=1?l+=B/y:l+=B*Math.pow(2,1-q),l*y>=2&&(n++,y/=2),n+q>=w?(x=0,n=w):n+q>=1?(x=(l*y-1)*Math.pow(2,v),n=n+q):(x=l*Math.pow(2,q-1)*Math.pow(2,v),n=0));v>=8;c[f+s]=x&255,s+=g,x/=256,v-=8);for(n=n<<v|x,A+=v;A>0;c[f+s]=n&255,s+=g,n/=256,A-=8);c[f+s-g]|=b*128}}),gp=Wr(u=>{"use strict";P();var c=_p(),l=hp(),f=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;u.Buffer=n,u.SlowBuffer=S,u.INSPECT_MAX_BYTES=50;var m=2147483647;u.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=v(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function v(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function _(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return x(e,r,t)}n.poolSize=8192;function x(e,r,t){if(typeof e=="string")return q(e,r);if(ArrayBuffer.isView(e))return s(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var i=b(e);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return x(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function A(e,r,t){return y(e),e<=0?_(e):r!==void 0?typeof t=="string"?_(e).fill(r,t):_(e).fill(r):_(e)}n.alloc=function(e,r,t){return A(e,r,t)};function w(e){return y(e),_(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function q(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=E(e,r)|0,o=_(t),i=o.write(e,r);return i!==t&&(o=o.slice(0,i)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=_(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function s(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function b(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=_(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?_(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,i=0,p=Math.min(t,o);i<p;++i)if(e[i]!==r[i]){t=e[i],o=r[i];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),i=0;for(t=0;t<e.length;++t){var p=e[t];if(H(p,Uint8Array))i+p.length>o.length?n.from(p).copy(o,i):Uint8Array.prototype.set.call(o,p,i);else if(n.isBuffer(p))p.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return o};function E(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ee(e).length;default:if(i)return o?-1:fe(e).length;r=(""+r).toLowerCase(),i=!0}}n.byteLength=E;function R(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return qe(this,r,t);case"latin1":case"binary":return Ae(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function D(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)D(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)D(this,r,r+3),D(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)D(this,r,r+7),D(this,r+1,r+6),D(this,r+2,r+5),D(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):R.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=u.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},f&&(n.prototype[f]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,i){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),r<0||t>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=t)return 0;if(o>=i)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var p=i-o,d=t-r,k=Math.min(p,d),O=this.slice(o,i),I=e.slice(r,t),U=0;U<k;++U)if(O[U]!==I[U]){p=O[U],d=I[U];break}return p<d?-1:d<p?1:0};function N(e,r,t,o,i){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=i?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(i)return-1;t=e.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,i);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,i);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,i){var p=1,d=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;p=2,d/=2,k/=2,t/=2}function O(xe,Se){return p===1?xe[Se]:xe.readUInt16BE(Se*p)}var I;if(i){var U=-1;for(I=t;I<d;I++)if(O(e,I)===O(r,U===-1?0:I-U)){if(U===-1&&(U=I),I-U+1===k)return U*p}else U!==-1&&(I-=I-U),U=-1}else for(t+k>d&&(t=d-k),I=t;I>=0;I--){for(var M=!0,ce=0;ce<k;ce++)if(O(e,I+ce)!==O(r,ce)){M=!1;break}if(M)return I}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return N(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return N(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var i=e.length-t;o?(o=Number(o),o>i&&(o=i)):o=i;var p=r.length;o>p/2&&(o=p/2);for(var d=0;d<o;++d){var k=parseInt(r.substr(d*2,2),16);if(me(k))return d;e[t+d]=k}return d}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Oe(r),e,t,o)}function be(e,r,t,o){return pe(Ee(r),e,t,o)}function ve(e,r,t,o){return pe(Ne(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-r;if((t===void 0||t>i)&&(t=i),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return be(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?c.fromByteArray(e):c.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],i=r;i<t;){var p=e[i],d=null,k=p>239?4:p>223?3:p>191?2:1;if(i+k<=t){var O,I,U,M;switch(k){case 1:p<128&&(d=p);break;case 2:O=e[i+1],(O&192)===128&&(M=(p&31)<<6|O&63,M>127&&(d=M));break;case 3:O=e[i+1],I=e[i+2],(O&192)===128&&(I&192)===128&&(M=(p&15)<<12|(O&63)<<6|I&63,M>2047&&(M<55296||M>57343)&&(d=M));break;case 4:O=e[i+1],I=e[i+2],U=e[i+3],(O&192)===128&&(I&192)===128&&(U&192)===128&&(M=(p&15)<<18|(O&63)<<12|(I&63)<<6|U&63,M>65535&&M<1114112&&(d=M))}}d===null?(d=65533,k=1):d>65535&&(d-=65536,o.push(d>>>10&1023|55296),d=56320|d&1023),o.push(d),i+=k}return we(o)}var ae=4096;function we(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function qe(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]&127);return o}function Ae(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var i="",p=r;p<t;++p)i+=Re[e[p]];return i}function ke(e,r,t){for(var o=e.slice(r,t),i="",p=0;p<o.length-1;p+=2)i+=String.fromCharCode(o[p]+o[p+1]*256);return i}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function T(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e+--r],i=1;r>0&&(i*=256);)o+=this[e+--r]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=r,i=1,p=this[e+--o];o>0&&(i*=256);)p+=this[e+--o]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*r)),p},n.prototype.readInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!1,52,8)};function j(e,r,t,o,i,p){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<p)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=1,d=0;for(this[r]=e&255;++d<t&&(p*=256);)this[r+d]=e/p&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=t-1,d=1;for(this[r+p]=e&255;--p>=0&&(d*=256);)this[r+p]=e/d&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=0,d=1,k=0;for(this[r]=e&255;++p<t&&(d*=256);)e<0&&k===0&&this[r+p-1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=t-1,d=1,k=0;for(this[r+p]=e&255;--p>=0&&(d*=256);)e<0&&k===0&&this[r+p+1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,i,p){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ye(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return ye(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return ye(this,e,r,!1,t)};function se(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var i=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),i},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var d=n.isBuffer(e)?e:n.from(e,o),k=d.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=d[p%k]}return this};var Ce=/[^+/0-9A-Za-z-_]/g;function Le(e){if(e=e.split("=")[0],e=e.trim().replace(Ce,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,i=null,p=[],d=0;d<o;++d){if(t=e.charCodeAt(d),t>55295&&t<57344){if(!i){if(t>56319){(r-=3)>-1&&p.push(239,191,189);continue}else if(d+1===o){(r-=3)>-1&&p.push(239,191,189);continue}i=t;continue}if(t<56320){(r-=3)>-1&&p.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(r-=3)>-1&&p.push(239,191,189);if(i=null,t<128){if((r-=1)<0)break;p.push(t)}else if(t<2048){if((r-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Oe(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Ne(e,r){for(var t,o,i,p=[],d=0;d<e.length&&!((r-=2)<0);++d)t=e.charCodeAt(d),o=t>>8,i=t%256,p.push(i),p.push(o);return p}function Ee(e){return c.toByteArray(Le(e))}function pe(e,r,t,o){for(var i=0;i<o&&!(i+t>=r.length||i>=e.length);++i)r[i+t]=e[i];return i}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Re=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,i=0;i<16;++i)r[o+i]=e[t]+e[i];return r}()}),bp=Wr((u,c)=>{P();var l=c.exports={},f,m;function v(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?f=setTimeout:f=v}catch(h){f=v}try{typeof clearTimeout=="function"?m=clearTimeout:m=_}catch(h){m=_}})();function n(h){if(f===setTimeout)return setTimeout(h,0);if((f===v||!f)&&setTimeout)return f=setTimeout,setTimeout(h,0);try{return f(h,0)}catch(S){try{return f.call(null,h,0)}catch(E){return f.call(this,h,0)}}}function x(h){if(m===clearTimeout)return clearTimeout(h);if((m===_||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(h);try{return m(h)}catch(S){try{return m.call(null,h)}catch(E){return m.call(this,h)}}}var y=[],A=!1,w,q=-1;function B(){!A||!w||(A=!1,w.length?y=w.concat(y):q=-1,y.length&&s())}function s(){if(!A){var h=n(B);A=!0;for(var S=y.length;S;){for(w=y,y=[];++q<S;)w&&w[q].run();q=-1,S=y.length}w=null,A=!1,x(h)}}l.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)S[E-1]=arguments[E];y.push(new g(h,S)),y.length===1&&!A&&n(s)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function b(){}l.on=b,l.addListener=b,l.once=b,l.off=b,l.removeListener=b,l.removeAllListeners=b,l.emit=b,l.prependListener=b,l.prependOnceListener=b,l.listeners=function(h){return[]},l.binding=function(h){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(h){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),vp,yp,wp,P=dp(()=>{vp=J(gp()),yp=J(bp()),wp=function(u){function c(){var f=this||self;return delete u.prototype.__magic__,f}if(typeof globalThis=="object")return globalThis;if(this)return c();u.defineProperty(u.prototype,"__magic__",{configurable:!0,get:c});var l=__magic__;return l}(Object)}),Xo={};fp(Xo,{FeeAccordion:()=>ac});on.exports=mp(Xo);P();P();var Ge=J(a("react")),Do=a("@fortawesome/free-solid-svg-icons"),jo=a("@fortawesome/react-fontawesome"),qp=a("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),zo=J(a("classnames")),Ep=J(a("react-collapsed"));P();var xp=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xp));var Ye={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};P();P();var Jo=J(a("react"));P();var Sp=J(a("react")),Ty=(0,Sp.createContext)({});P();P();var kp=J(a("react")),Uy=a("@terradharitri/sdk-dapp/constants/index"),Cy=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ly=J(a("bignumber.js")),Oy=a("formik");P();P();P();var Ny=a("bech32");P();P();P();var Ko=(u,c)=>typeof c=="boolean"?c:Array.isArray(c)&&c.includes(u);P();P();var Ry=a("@terradharitri/sdk-dapp/types/tokens.types");P();P();var My=a("@terradharitri/sdk-dapp/constants"),Py=a("@terradharitri/sdk-dapp/utils/account/getAccount");P();P();var Dy=a("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");P();var jy=a("@terradharitri/sdk-dapp/utils/buildUrlParams");P();var zy=J(a("anchorme"));P();P();var Fy=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Qo=a("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Ap=a("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Gy=a("@terradharitri/sdk-dapp/utils/operations/parseAmount");P();P();P();P();P();P();P();var Ip=J(a("react")),Vy=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Wy=a("formik");P();P();var $y=a("@terradharitri/sdk-dapp/constants/index"),Yy=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Hy=J(a("bignumber.js"));P();P();var wt=a("@terradharitri/sdk-dapp/constants/index");function Bp({feeLimit:u,rewaPriceInUsd:c}){let l=(0,Qo.formatAmount)({input:u,decimals:wt.DECIMALS,digits:wt.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,Ap.getUsdValue)({amount:l,usd:c,decimals:wt.DIGITS})}`}P();var Zy=a("@terradharitri/sdk-dapp/constants/index");P();P();var Tp="0";P();var Xy=a("@terradharitri/sdk-dapp/constants/index"),Jy=J(a("bignumber.js"));P();var Ky=a("@terradharitri/sdk-dapp/constants/index");P();var Qy=a("@terradharitri/sdk-dapp/constants/index");P();P();var e0=a("@terradharitri/sdk-core"),r0=a("@terradharitri/sdk-dapp/constants/index"),t0=J(a("bignumber.js"));P();P();var o0=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");P();var n0=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");P();var a0=J(a("bignumber.js"));P();var i0=a("@terradharitri/sdk-dapp/constants/index"),l0=a("@terradharitri/sdk-dapp/utils/smartContracts"),p0=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),c0=J(a("bignumber.js"));P();var u0=J(a("bignumber.js"));P();P();var s0=J(a("axios"));P();P();P();var d0=a("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");P();var f0=a("@terradharitri/sdk-dapp/constants/index");P();P();P();var qt=a("@terradharitri/sdk-dapp/constants/index"),Up=J(a("bignumber.js")),Fo,Go,Vo,en=(0,Qo.formatAmount)({input:String((Fo=qt.GAS_PRICE)!=null?Fo:1e9),decimals:(Go=qt.DECIMALS)!=null?Go:18,showLastNonZeroDecimal:!0,digits:(Vo=qt.DIGITS)!=null?Vo:4}),m0=new Up.default(en).times(10).toString(10);P();var _0=a("@terradharitri/sdk-dapp/constants/index"),h0=J(a("bignumber.js"));P();var g0=J(a("bignumber.js"));P();P();var b0=a("yup");P();var Wo=a("@terradharitri/sdk-dapp/constants/ledger.constants"),Cp=J(a("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Et=a("yup"),Lp=(0,Et.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(u){let{ledger:c}=this.parent;return!(c&&u&&u.length&&!c.ledgerDataActive)}),Op=(0,Et.string)().test({name:"hashSign",test:function(u){let{ledger:c,isGuarded:l}=this.parent;if(c){let{ledgerWithHashSign:f,ledgerWithGuardians:m}=(0,Cp.default)(c.version);if(u&&u.length>300&&!f)return this.createError({message:`Data too long. You need at least DharitrI app version ${Wo.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!m)return this.createError({message:`You need at least DharitrI app version ${Wo.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Np=[Lp,Op],v0=Np.reduce((u,c)=>u.concat(c),(0,Et.string)());P();var y0=a("@terradharitri/sdk-dapp/constants/index"),w0=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),q0=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),E0=a("yup");P();var x0=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),S0=J(a("bignumber.js")),k0=a("yup");P();var A0=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),I0=J(a("bignumber.js")),B0=a("yup");P();var T0=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),U0=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),C0=J(a("bignumber.js")),L0=a("yup");P();var O0=J(a("bignumber.js")),N0=a("yup");P();var R0=a("@terradharitri/sdk-dapp/constants/index"),M0=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),P0=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),D0=J(a("bignumber.js")),j0=a("yup");P();var z0=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),F0=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),G0=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),V0=J(a("bignumber.js")),W0=a("yup");P();var $0=J(a("bignumber.js")),Y0=a("yup");P();var H0=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Z0=a("yup");P();var X0=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),J0=a("yup");P();P();var K0=(0,Ip.createContext)({});P();P();var Rp=J(a("react")),Q0=a("formik"),e1=J(a("lodash/uniqBy"));P();P();P();var r1=J(a("axios"));P();P();var t1=J(a("axios"));P();P();var o1=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),n1=a("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),a1=J(a("axios")),i1=J(a("lodash/uniqBy"));P();var l1=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),p1=J(a("axios"));P();var c1=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),u1=J(a("axios"));P();P();var rn=J(a("react")),Mp=(0,rn.createContext)({});function Pp(){return(0,rn.useContext)(Mp)}P();P();var s1=a("react"),d1=a("@terradharitri/sdk-dapp/constants/index"),f1=a("@terradharitri/sdk-dapp/types/enums.types");P();var m1=(0,Rp.createContext)({});P();P();var _1=a("@terradharitri/sdk-dapp/constants/index"),h1=a("formik");P();P();var Dp=J(a("react")),g1=a("@terradharitri/sdk-dapp/constants/index"),b1=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),v1=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),y1=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),w1=J(a("bignumber.js")),q1=a("formik");P();P();P();P();var E1=J(a("bignumber.js"));P();var x1=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),S1=J(a("bignumber.js"));P();P();var k1=a("react"),A1=a("@terradharitri/sdk-dapp/constants/index"),I1=a("@terradharitri/sdk-dapp/utils/smartContracts"),B1=J(a("bignumber.js")),T1=a("formik");P();var U1=a("react");P();P();var C1=a("@terradharitri/sdk-dapp/constants/index"),L1=J(a("bignumber.js")),O1=(0,Dp.createContext)({}),N1=(0,kp.createContext)({});P();P();var jp=J(a("react")),R1=a("formik"),M1=(0,jp.createContext)({});P();P();var zp=J(a("react")),P1=a("formik");P();P();P();var D1=a("react"),j1=a("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),z1=J(a("lodash/uniqBy"));P();P();var F1=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),G1=a("@terradharitri/sdk-dapp/utils");P();var V1=a("react");P();var W1=a("react"),$1=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Y1=(0,zp.createContext)({});P();P();var Fp=J(a("react")),H1=a("formik");P();P();P();P();P();var Z1=a("react"),X1=a("@terradharitri/sdk-dapp/utils");P();var J1=a("react"),K1=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");P();P();var Q1=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),e2=J(a("axios"));P();var r2=J(a("axios")),t2=(0,Fp.createContext)({}),Gp=(0,Jo.createContext)({});function xt(){return(0,Jo.useContext)(Gp)}P();var lr=J(a("react")),Vp=a("@fortawesome/free-solid-svg-icons"),Wp=a("@fortawesome/react-fontawesome"),$p=J(a("bignumber.js")),$o=J(a("classnames")),Yp=a("react-number-format");P();P();var o2=a("@terradharitri/sdk-dapp/constants/index"),n2=a("@terradharitri/sdk-dapp/utils/validation"),a2=J(a("bignumber.js"));P();P();var i2=a("react");P();var Hp=J(a("bignumber.js")),tn=u=>{let[c,l]=u.split(""),f=new Hp.default(c).isZero();return Boolean(f&&l&&l!==".")};P();var Zp=`:root {
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

.dapp-core-component__styles-module__gas {
  position: relative;
}
.dapp-core-component__styles-module__gas:last-child {
  margin-bottom: 0;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper {
  position: relative;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__input {
  display: initial;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__input.dapp-core-component__styles-module__spaced {
  padding-right: 44px;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions {
  right: 0;
  top: 0;
  position: absolute;
  bottom: 0;
  display: flex;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action {
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:hover .dapp-core-component__styles-module__icon {
  color: #23f7dd;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:not(:first-child) {
  position: relative;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:not(:first-child):before {
  background-color: var(--dapp-form-placeholder-color);
  width: 1px;
  top: 16px;
  bottom: 16px;
  left: 0;
  content: "";
  position: absolute;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action .dapp-core-component__styles-module__icon {
  color: var(--dapp-form-placeholder-color);
  transition: all 200ms ease;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zp));var je={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},Xp=()=>{let{formInfo:u,gasInfo:c}=xt(),{readonly:l}=u,{defaultGasLimit:f,onResetGasLimit:m,onChangeGasLimit:v,onBlurGasLimit:_,gasLimit:n,gasLimitError:x,isGasLimitInvalid:y}=c,A=g=>{g.preventDefault(),m()},w=({value:g,floatValue:b})=>(!b||!(0,$p.default)(b).isNaN())&&!tn(g),q=g=>{v(g.value,!0)},B=n!==f&&!l,s=Ko("gasLimit",l);return lr.default.createElement("div",{className:je.gas},lr.default.createElement("label",{className:Ye.label,htmlFor:"gasLimit"},"Gas Limit"),lr.default.createElement("div",{className:je.wrapper},lr.default.createElement(Yp.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:s,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:_,onValueChange:q,required:!0,isAllowed:w,thousandSeparator:",",thousandsGroupStyle:"thousand",value:n,valueIsNumericString:!0,allowNegative:!1,className:(0,$o.default)(Ye.input,je.input,{[Ye.disabled]:s,[Ye.invalid]:y,[je.spaced]:B})}),B&&lr.default.createElement("div",{className:je.actions},lr.default.createElement("div",{onClick:A,"data-testid":"gasLimitResetBtn",className:(0,$o.default)(je.action,{[je.disabled]:s})},lr.default.createElement(Wp.FontAwesomeIcon,{icon:Vp.faUndo,className:je.icon}))),y&&lr.default.createElement("div",{className:Ye.error,"data-testid":"gasLimitError"},x)))};P();P();var pr=J(a("react")),Jp=a("@fortawesome/free-solid-svg-icons"),Kp=a("@fortawesome/react-fontawesome"),Qp=J(a("bignumber.js")),Yo=J(a("classnames")),ec=a("react-number-format");P();var l2=J(a("react")),p2=a("@terradharitri/sdk-dapp/constants/index"),rc=()=>{let{networkConfig:u}=Pp(),{gasInfo:c,formInfo:l}=xt(),{readonly:f}=l,{rewaLabel:m}=u,{gasPrice:v,gasPriceError:_,isGasPriceInvalid:n,onChangeGasPrice:x,onBlurGasPrice:y,onResetGasPrice:A}=c,w=v!==en&&!f,q=Ko("gasPrice",f),B=({value:b,floatValue:h})=>(!h||!(0,Qp.default)(h).isNaN())&&!tn(b),s=b=>{b.preventDefault(),A()},g=b=>{x(b.value,!0)};return pr.default.createElement("div",{className:je.gas},pr.default.createElement("label",{className:Ye.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),pr.default.createElement("div",{className:je.wrapper},pr.default.createElement(ec.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:q,id:"gasPrice",inputMode:"decimal",isAllowed:B,name:"gasPrice",onBlur:y,onValueChange:g,required:!0,suffix:` ${m}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:v,valueIsNumericString:!0,allowNegative:!1,className:(0,Yo.default)(Ye.input,je.input,{[Ye.disabled]:q,[Ye.invalid]:n,[je.spaced]:w})}),w&&pr.default.createElement("div",{className:je.actions},pr.default.createElement("div",{onClick:s,className:(0,Yo.default)(je.action,{[je.disabled]:q})},pr.default.createElement(Kp.FontAwesomeIcon,{icon:Jp.faUndo,className:je.icon})))),n&&pr.default.createElement("div",{className:Ye.error,"data-testid":"gasPriceError"},_))};P();var tc=J(a("react"));P();var oc=`:root {
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
  color: var(--dapp-form-input-color);
  width: 100%;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger {
  align-items: center;
  background: var(--dapp-form-input-bg);
  border-radius: var(--border-radius-low);
  cursor: pointer;
  display: flex;
  flex-flow: row;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 1rem;
  word-break: break-all;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger:hover .dapp-core-component__styles-module__label, .dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger:hover .dapp-core-component__styles-module__fiat, .dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger:hover .dapp-core-component__styles-module__arrow {
  color: var(--dapp-form-input-color);
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger .dapp-core-component__styles-module__fiat {
  font-size: 12px;
  margin-left: 0.25rem;
  transition: all 200ms ease;
  color: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger .dapp-core-component__styles-module__arrow {
  transition: all 200ms ease;
  color: var(--dapp-form-label-color);
  margin-left: auto;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger .dapp-core-component__styles-module__arrow.dapp-core-component__styles-module__active {
  transform: rotateZ(90deg);
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__expandable .dapp-core-component__styles-module__content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(oc));var cr={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"},nc=({feeLimit:u,rewaPriceInUsd:c})=>u===Tp?null:tc.default.createElement("span",{className:cr.fiat,"data-testid":"feeInFiat"},"(",Bp({feeLimit:u,rewaPriceInUsd:c}),")"),ac=({className:u})=>{let{gasInfo:c,tokensInfo:l}=xt(),{feeLimit:f,gasCostLoading:m,gasPriceError:v,gasLimitError:_}=c,{rewaPriceInUsd:n,rewaLabel:x}=l,[y,A]=(0,Ge.useState)(Boolean(v||_)),{getCollapseProps:w,getToggleProps:q}=(0,Ep.default)({isExpanded:y}),B=()=>{A(s=>!s)};return Ge.default.createElement("div",{className:(0,zo.default)(cr.fee,u)},Ge.default.createElement("label",{className:Ye.label},"Fee"),Ge.default.createElement("div",Po({className:cr.trigger},q({onClick:B})),Ge.default.createElement("span",{className:cr.limit,"data-testid":"feeLimit"},Ge.default.createElement(qp.FormatAmount,{value:f,showLastNonZeroDecimal:!0,rewaLabel:x})),m&&Ge.default.createElement(jo.FontAwesomeIcon,{icon:Do.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),Ge.default.createElement(nc,{rewaPriceInUsd:n,feeLimit:f}),Ge.default.createElement(jo.FontAwesomeIcon,{icon:Do.faChevronRight,className:(0,zo.default)(cr.arrow,{[cr.active]:y})})),Ge.default.createElement("div",Po({className:cr.expandable},w()),Ge.default.createElement("div",{className:cr.content},Ge.default.createElement(rc,null),Ge.default.createElement(Xp,null))))};});var An=Xe((P6,kn)=>{"use strict";Be();var ic=Object.create,Br=Object.defineProperty,lc=Object.defineProperties,pc=Object.getOwnPropertyDescriptor,cc=Object.getOwnPropertyDescriptors,uc=Object.getOwnPropertyNames,an=Object.getOwnPropertySymbols,sc=Object.getPrototypeOf,mn=Object.prototype.hasOwnProperty,dc=Object.prototype.propertyIsEnumerable,ln=(u,c,l)=>c in u?Br(u,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[c]=l,Ve=(u,c)=>{for(var l in c||(c={}))mn.call(c,l)&&ln(u,l,c[l]);if(an)for(var l of an(c))dc.call(c,l)&&ln(u,l,c[l]);return u},He=(u,c)=>lc(u,cc(c)),_n=(u,c)=>()=>(u&&(c=u(u=0)),c),Hr=(u,c)=>()=>(c||u((c={exports:{}}).exports,c),c.exports),hn=(u,c)=>{for(var l in c)Br(u,l,{get:c[l],enumerable:!0})},gn=(u,c,l,f)=>{if(c&&typeof c=="object"||typeof c=="function")for(let m of uc(c))!mn.call(u,m)&&m!==l&&Br(u,m,{get:()=>c[m],enumerable:!(f=pc(c,m))||f.enumerable});return u},K=(u,c,l)=>(l=u!=null?ic(sc(u)):{},gn(c||!u||!u.__esModule?Br(l,"default",{value:u,enumerable:!0}):l,u)),bn=u=>gn(Br({},"__esModule",{value:!0}),u),fc=(u,c,l)=>new Promise((f,m)=>{var v=x=>{try{n(l.next(x))}catch(y){m(y)}},_=x=>{try{n(l.throw(x))}catch(y){m(y)}},n=x=>x.done?f(x.value):Promise.resolve(x.value).then(v,_);n((l=l.apply(u,c)).next())}),mc=Hr(u=>{"use strict";V(),u.byteLength=x,u.toByteArray=A,u.fromByteArray=B;var c=[],l=[],f=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(v=0,_=m.length;v<_;++v)c[v]=m[v],l[m.charCodeAt(v)]=v;var v,_;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(s){var g=s.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var b=s.indexOf("=");b===-1&&(b=g);var h=b===g?0:4-b%4;return[b,h]}function x(s){var g=n(s),b=g[0],h=g[1];return(b+h)*3/4-h}function y(s,g,b){return(g+b)*3/4-b}function A(s){var g,b=n(s),h=b[0],S=b[1],E=new f(y(s,h,S)),R=0,D=S>0?h-4:h,N;for(N=0;N<D;N+=4)g=l[s.charCodeAt(N)]<<18|l[s.charCodeAt(N+1)]<<12|l[s.charCodeAt(N+2)]<<6|l[s.charCodeAt(N+3)],E[R++]=g>>16&255,E[R++]=g>>8&255,E[R++]=g&255;return S===2&&(g=l[s.charCodeAt(N)]<<2|l[s.charCodeAt(N+1)]>>4,E[R++]=g&255),S===1&&(g=l[s.charCodeAt(N)]<<10|l[s.charCodeAt(N+1)]<<4|l[s.charCodeAt(N+2)]>>2,E[R++]=g>>8&255,E[R++]=g&255),E}function w(s){return c[s>>18&63]+c[s>>12&63]+c[s>>6&63]+c[s&63]}function q(s,g,b){for(var h,S=[],E=g;E<b;E+=3)h=(s[E]<<16&16711680)+(s[E+1]<<8&65280)+(s[E+2]&255),S.push(w(h));return S.join("")}function B(s){for(var g,b=s.length,h=b%3,S=[],E=16383,R=0,D=b-h;R<D;R+=E)S.push(q(s,R,R+E>D?D:R+E));return h===1?(g=s[b-1],S.push(c[g>>2]+c[g<<4&63]+"==")):h===2&&(g=(s[b-2]<<8)+s[b-1],S.push(c[g>>10]+c[g>>4&63]+c[g<<2&63]+"=")),S.join("")}}),_c=Hr(u=>{V(),u.read=function(c,l,f,m,v){var _,n,x=v*8-m-1,y=(1<<x)-1,A=y>>1,w=-7,q=f?v-1:0,B=f?-1:1,s=c[l+q];for(q+=B,_=s&(1<<-w)-1,s>>=-w,w+=x;w>0;_=_*256+c[l+q],q+=B,w-=8);for(n=_&(1<<-w)-1,_>>=-w,w+=m;w>0;n=n*256+c[l+q],q+=B,w-=8);if(_===0)_=1-A;else{if(_===y)return n?NaN:(s?-1:1)*(1/0);n=n+Math.pow(2,m),_=_-A}return(s?-1:1)*n*Math.pow(2,_-m)},u.write=function(c,l,f,m,v,_){var n,x,y,A=_*8-v-1,w=(1<<A)-1,q=w>>1,B=v===23?Math.pow(2,-24)-Math.pow(2,-77):0,s=m?0:_-1,g=m?1:-1,b=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(x=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+q>=1?l+=B/y:l+=B*Math.pow(2,1-q),l*y>=2&&(n++,y/=2),n+q>=w?(x=0,n=w):n+q>=1?(x=(l*y-1)*Math.pow(2,v),n=n+q):(x=l*Math.pow(2,q-1)*Math.pow(2,v),n=0));v>=8;c[f+s]=x&255,s+=g,x/=256,v-=8);for(n=n<<v|x,A+=v;A>0;c[f+s]=n&255,s+=g,n/=256,A-=8);c[f+s-g]|=b*128}}),hc=Hr(u=>{"use strict";V();var c=mc(),l=_c(),f=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;u.Buffer=n,u.SlowBuffer=S,u.INSPECT_MAX_BYTES=50;var m=2147483647;u.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=v(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function v(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function _(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return x(e,r,t)}n.poolSize=8192;function x(e,r,t){if(typeof e=="string")return q(e,r);if(ArrayBuffer.isView(e))return s(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var i=b(e);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return x(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function A(e,r,t){return y(e),e<=0?_(e):r!==void 0?typeof t=="string"?_(e).fill(r,t):_(e).fill(r):_(e)}n.alloc=function(e,r,t){return A(e,r,t)};function w(e){return y(e),_(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function q(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=E(e,r)|0,o=_(t),i=o.write(e,r);return i!==t&&(o=o.slice(0,i)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=_(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function s(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function b(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=_(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?_(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,i=0,p=Math.min(t,o);i<p;++i)if(e[i]!==r[i]){t=e[i],o=r[i];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),i=0;for(t=0;t<e.length;++t){var p=e[t];if(H(p,Uint8Array))i+p.length>o.length?n.from(p).copy(o,i):Uint8Array.prototype.set.call(o,p,i);else if(n.isBuffer(p))p.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return o};function E(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ee(e).length;default:if(i)return o?-1:fe(e).length;r=(""+r).toLowerCase(),i=!0}}n.byteLength=E;function R(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return qe(this,r,t);case"latin1":case"binary":return Ae(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function D(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)D(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)D(this,r,r+3),D(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)D(this,r,r+7),D(this,r+1,r+6),D(this,r+2,r+5),D(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):R.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=u.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},f&&(n.prototype[f]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,i){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),r<0||t>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=t)return 0;if(o>=i)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var p=i-o,d=t-r,k=Math.min(p,d),O=this.slice(o,i),I=e.slice(r,t),U=0;U<k;++U)if(O[U]!==I[U]){p=O[U],d=I[U];break}return p<d?-1:d<p?1:0};function N(e,r,t,o,i){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=i?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(i)return-1;t=e.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,i);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,i);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,i){var p=1,d=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;p=2,d/=2,k/=2,t/=2}function O(xe,Se){return p===1?xe[Se]:xe.readUInt16BE(Se*p)}var I;if(i){var U=-1;for(I=t;I<d;I++)if(O(e,I)===O(r,U===-1?0:I-U)){if(U===-1&&(U=I),I-U+1===k)return U*p}else U!==-1&&(I-=I-U),U=-1}else for(t+k>d&&(t=d-k),I=t;I>=0;I--){for(var M=!0,ce=0;ce<k;ce++)if(O(e,I+ce)!==O(r,ce)){M=!1;break}if(M)return I}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return N(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return N(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var i=e.length-t;o?(o=Number(o),o>i&&(o=i)):o=i;var p=r.length;o>p/2&&(o=p/2);for(var d=0;d<o;++d){var k=parseInt(r.substr(d*2,2),16);if(me(k))return d;e[t+d]=k}return d}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Oe(r),e,t,o)}function be(e,r,t,o){return pe(Ee(r),e,t,o)}function ve(e,r,t,o){return pe(Ne(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-r;if((t===void 0||t>i)&&(t=i),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return be(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?c.fromByteArray(e):c.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],i=r;i<t;){var p=e[i],d=null,k=p>239?4:p>223?3:p>191?2:1;if(i+k<=t){var O,I,U,M;switch(k){case 1:p<128&&(d=p);break;case 2:O=e[i+1],(O&192)===128&&(M=(p&31)<<6|O&63,M>127&&(d=M));break;case 3:O=e[i+1],I=e[i+2],(O&192)===128&&(I&192)===128&&(M=(p&15)<<12|(O&63)<<6|I&63,M>2047&&(M<55296||M>57343)&&(d=M));break;case 4:O=e[i+1],I=e[i+2],U=e[i+3],(O&192)===128&&(I&192)===128&&(U&192)===128&&(M=(p&15)<<18|(O&63)<<12|(I&63)<<6|U&63,M>65535&&M<1114112&&(d=M))}}d===null?(d=65533,k=1):d>65535&&(d-=65536,o.push(d>>>10&1023|55296),d=56320|d&1023),o.push(d),i+=k}return we(o)}var ae=4096;function we(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function qe(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]&127);return o}function Ae(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var i="",p=r;p<t;++p)i+=Re[e[p]];return i}function ke(e,r,t){for(var o=e.slice(r,t),i="",p=0;p<o.length-1;p+=2)i+=String.fromCharCode(o[p]+o[p+1]*256);return i}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function T(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e+--r],i=1;r>0&&(i*=256);)o+=this[e+--r]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=r,i=1,p=this[e+--o];o>0&&(i*=256);)p+=this[e+--o]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*r)),p},n.prototype.readInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!1,52,8)};function j(e,r,t,o,i,p){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<p)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=1,d=0;for(this[r]=e&255;++d<t&&(p*=256);)this[r+d]=e/p&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=t-1,d=1;for(this[r+p]=e&255;--p>=0&&(d*=256);)this[r+p]=e/d&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=0,d=1,k=0;for(this[r]=e&255;++p<t&&(d*=256);)e<0&&k===0&&this[r+p-1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=t-1,d=1,k=0;for(this[r+p]=e&255;--p>=0&&(d*=256);)e<0&&k===0&&this[r+p+1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,i,p){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ye(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return ye(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return ye(this,e,r,!1,t)};function se(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var i=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),i},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var d=n.isBuffer(e)?e:n.from(e,o),k=d.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=d[p%k]}return this};var Ce=/[^+/0-9A-Za-z-_]/g;function Le(e){if(e=e.split("=")[0],e=e.trim().replace(Ce,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,i=null,p=[],d=0;d<o;++d){if(t=e.charCodeAt(d),t>55295&&t<57344){if(!i){if(t>56319){(r-=3)>-1&&p.push(239,191,189);continue}else if(d+1===o){(r-=3)>-1&&p.push(239,191,189);continue}i=t;continue}if(t<56320){(r-=3)>-1&&p.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(r-=3)>-1&&p.push(239,191,189);if(i=null,t<128){if((r-=1)<0)break;p.push(t)}else if(t<2048){if((r-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Oe(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Ne(e,r){for(var t,o,i,p=[],d=0;d<e.length&&!((r-=2)<0);++d)t=e.charCodeAt(d),o=t>>8,i=t%256,p.push(i),p.push(o);return p}function Ee(e){return c.toByteArray(Le(e))}function pe(e,r,t,o){for(var i=0;i<o&&!(i+t>=r.length||i>=e.length);++i)r[i+t]=e[i];return i}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Re=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,i=0;i<16;++i)r[o+i]=e[t]+e[i];return r}()}),gc=Hr((u,c)=>{V();var l=c.exports={},f,m;function v(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?f=setTimeout:f=v}catch(h){f=v}try{typeof clearTimeout=="function"?m=clearTimeout:m=_}catch(h){m=_}})();function n(h){if(f===setTimeout)return setTimeout(h,0);if((f===v||!f)&&setTimeout)return f=setTimeout,setTimeout(h,0);try{return f(h,0)}catch(S){try{return f.call(null,h,0)}catch(E){return f.call(this,h,0)}}}function x(h){if(m===clearTimeout)return clearTimeout(h);if((m===_||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(h);try{return m(h)}catch(S){try{return m.call(null,h)}catch(E){return m.call(this,h)}}}var y=[],A=!1,w,q=-1;function B(){!A||!w||(A=!1,w.length?y=w.concat(y):q=-1,y.length&&s())}function s(){if(!A){var h=n(B);A=!0;for(var S=y.length;S;){for(w=y,y=[];++q<S;)w&&w[q].run();q=-1,S=y.length}w=null,A=!1,x(h)}}l.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)S[E-1]=arguments[E];y.push(new g(h,S)),y.length===1&&!A&&n(s)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function b(){}l.on=b,l.addListener=b,l.once=b,l.off=b,l.removeListener=b,l.removeAllListeners=b,l.emit=b,l.prependListener=b,l.prependOnceListener=b,l.listeners=function(h){return[]},l.binding=function(h){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(h){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),vn,bc,vc,V=_n(()=>{vn=K(hc()),bc=K(gc()),vc=function(u){function c(){var f=this||self;return delete u.prototype.__magic__,f}if(typeof globalThis=="object")return globalThis;if(this)return c();u.defineProperty(u.prototype,"__magic__",{configurable:!0,get:c});var l=__magic__;return l}(Object)}),yn={};hn(yn,{default:()=>wn});var $r,pn,wn,yc=_n(()=>{"use strict";V(),$r=K(a("react")),pn=u=>$r.createElement("svg",Ve({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},u),$r.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),$r.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),wn=pn}),qn={};hn(qn,{SelectToken:()=>tu});kn.exports=bn(qn);V();V();var ur=K(a("react")),wc=K(a("@terradharitri/sdk-dapp/constants/index")),qc=K(a("classnames")),En=K(a("react-select"));V();var Ec=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ec));var xn={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};V();V();var Sn=K(a("react"));V();var xc=K(a("react")),u2=(0,xc.createContext)({});V();V();var Sc=K(a("react")),s2=a("@terradharitri/sdk-dapp/constants/index"),d2=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),f2=K(a("bignumber.js")),m2=a("formik");V();V();V();var _2=a("bech32");V();V();V();var kc=(u,c)=>typeof c=="boolean"?c:Array.isArray(c)&&c.includes(u);V();V();var Yr=a("@terradharitri/sdk-dapp/types/tokens.types");V();V();var h2=a("@terradharitri/sdk-dapp/constants"),g2=a("@terradharitri/sdk-dapp/utils/account/getAccount");V();V();var b2=a("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");V();var v2=a("@terradharitri/sdk-dapp/utils/buildUrlParams");V();var St=K(a("anchorme")),kt=u=>u.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Ac=(u,c)=>{if(c){let l=`[Message hidden due to suspicious content - ${c.info}]`;if(u.length>1e3)return{output:l,stringWithLinks:u,found:!0};let f=kt(u.normalize("NFKC")),m=St.default.list(f),v=[];if(m.length>0){let _=l;m.forEach((n,x)=>{let{string:y}=n,A="",w="",q=y;for(let B=0;B<_.length;B++){let s=_.slice(B),[g]=St.default.list(kt(s));g&&y===g.string&&(A=_.substring(0,B))}for(let B=l.length;B>0;B--){let s=_.slice(0,B),[g]=St.default.list(kt(s));g&&y===g.string&&(w=_.substring(B))}v.push(A),v.push(q),_=w,x===m.length-1&&v.push(w)})}else v.push(u);return{output:l,stringWithLinks:v.join(""),found:!0}}else return{output:u,stringWithLinks:"",found:!1}};V();function Ic({docStyle:u}){let c={hoverColor:u.getPropertyValue("--border-color"),primaryColor:u.getPropertyValue("--primary"),bgColor:u.getPropertyValue("--card-bg"),mutedColor:u.getPropertyValue("--muted"),blackColor:u.getPropertyValue("--black")};return{valueContainer:()=>({padding:"0.125rem 0 0.125rem 0.2rem",lineHeight:"1.5",fontSize:"0.8125rem",maxWidth:"85%",display:"flex"}),control:(l,f)=>He(Ve({},l),{minHeight:"0",flexWrap:"nowrap",backgroundColor:f.isDisabled?"#e9ecef":"transparent",borderColor:f.isDisabled?c.hoverColor:f.isFocused?c.primaryColor:c.blackColor,boxShadow:f.isFocused?`0 0 0 0.2rem #${c.primaryColor.replace("#","").trim()}33`:null,"&:hover":{borderColor:f.isFocused?c.primaryColor:"#b0b0b0"}}),input:l=>He(Ve({},l),{paddingLeft:"0.4rem",marginLeft:"0",marginRight:"0"}),indicatorSeparator:l=>He(Ve({},l),{marginTop:"0.3rem",marginBottom:"0.3rem"}),indicatorsContainer:l=>He(Ve({},l),{zIndex:"0"}),dropdownIndicator:l=>He(Ve({},l),{padding:"0 0.4rem"}),multiValue:l=>He(Ve({},l),{backgroundColor:c.hoverColor,borderRadius:"4px"}),multiValueRemove:l=>He(Ve({},l),{cursor:"pointer"}),multiValueLebel:l=>He(Ve({},l),{lineHeight:"1.5"}),placeholder:l=>He(Ve({},l),{marginLeft:"0",lineHeight:"2"}),option:(l,{isFocused:f,isSelected:m})=>He(Ve({},l),{fontSize:"0.8125rem",cursor:"pointer",align:"left",backgroundColor:m?c.primaryColor:f?c.hoverColor:"transparent"}),menu:l=>He(Ve({},l),{marginTop:"0.2rem",zIndex:"5"})}}V();var y2=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Bc=a("@terradharitri/sdk-dapp/utils/operations/formatAmount"),w2=a("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),q2=a("@terradharitri/sdk-dapp/utils/operations/parseAmount");V();V();V();V();V();V();V();var Tc=K(a("react")),E2=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),x2=a("formik");V();V();var S2=a("@terradharitri/sdk-dapp/constants/index"),k2=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),A2=K(a("bignumber.js"));V();V();var I2=a("@terradharitri/sdk-dapp/constants/index");V();var B2=a("@terradharitri/sdk-dapp/constants/index");V();V();var Uc="0";V();var T2=a("@terradharitri/sdk-dapp/constants/index"),U2=K(a("bignumber.js"));V();var C2=a("@terradharitri/sdk-dapp/constants/index");V();var L2=a("@terradharitri/sdk-dapp/constants/index");V();V();var O2=a("@terradharitri/sdk-core"),N2=a("@terradharitri/sdk-dapp/constants/index"),R2=K(a("bignumber.js"));V();V();var M2=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");V();var P2=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");V();var D2=K(a("bignumber.js"));V();var j2=a("@terradharitri/sdk-dapp/constants/index"),z2=a("@terradharitri/sdk-dapp/utils/smartContracts"),F2=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),G2=K(a("bignumber.js"));V();var V2=K(a("bignumber.js"));V();V();var W2=K(a("axios"));V();V();V();var $2=a("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");V();var Y2=a("@terradharitri/sdk-dapp/constants/index");V();V();V();var At=a("@terradharitri/sdk-dapp/constants/index"),Cc=K(a("bignumber.js")),cn,un,sn,Lc=(0,Bc.formatAmount)({input:String((cn=At.GAS_PRICE)!=null?cn:1e9),decimals:(un=At.DECIMALS)!=null?un:18,showLastNonZeroDecimal:!0,digits:(sn=At.DIGITS)!=null?sn:4}),H2=new Cc.default(Lc).times(10).toString(10);V();var Z2=a("@terradharitri/sdk-dapp/constants/index"),X2=K(a("bignumber.js"));V();var J2=K(a("bignumber.js"));V();V();var K2=a("yup");V();var dn=a("@terradharitri/sdk-dapp/constants/ledger.constants"),Oc=K(a("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),It=a("yup"),Nc=(0,It.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(u){let{ledger:c}=this.parent;return!(c&&u&&u.length&&!c.ledgerDataActive)}),Rc=(0,It.string)().test({name:"hashSign",test:function(u){let{ledger:c,isGuarded:l}=this.parent;if(c){let{ledgerWithHashSign:f,ledgerWithGuardians:m}=(0,Oc.default)(c.version);if(u&&u.length>300&&!f)return this.createError({message:`Data too long. You need at least DharitrI app version ${dn.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!m)return this.createError({message:`You need at least DharitrI app version ${dn.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Mc=[Nc,Rc],Q2=Mc.reduce((u,c)=>u.concat(c),(0,It.string)());V();var ew=a("@terradharitri/sdk-dapp/constants/index"),rw=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),tw=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ow=a("yup");V();var nw=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),aw=K(a("bignumber.js")),iw=a("yup");V();var lw=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),pw=K(a("bignumber.js")),cw=a("yup");V();var uw=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),sw=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),dw=K(a("bignumber.js")),fw=a("yup");V();var mw=K(a("bignumber.js")),_w=a("yup");V();var hw=a("@terradharitri/sdk-dapp/constants/index"),gw=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),bw=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),vw=K(a("bignumber.js")),yw=a("yup");V();var ww=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),qw=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ew=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),xw=K(a("bignumber.js")),Sw=a("yup");V();var kw=K(a("bignumber.js")),Aw=a("yup");V();var Iw=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Bw=a("yup");V();var Tw=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Uw=a("yup");V();V();var Cw=(0,Tc.createContext)({});V();V();var Pc=K(a("react")),Lw=a("formik"),Ow=K(a("lodash/uniqBy"));V();V();V();var Nw=K(a("axios"));V();V();var Rw=K(a("axios"));V();V();var Mw=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),Pw=a("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Dw=K(a("axios")),jw=K(a("lodash/uniqBy"));V();var zw=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),Fw=K(a("axios"));V();var Gw=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),Vw=K(a("axios"));V();V();var Dc=K(a("react")),Ww=(0,Dc.createContext)({});V();V();var $w=a("react"),Yw=a("@terradharitri/sdk-dapp/constants/index"),Hw=a("@terradharitri/sdk-dapp/types/enums.types");V();var Zw=(0,Pc.createContext)({});V();V();var Xw=a("@terradharitri/sdk-dapp/constants/index"),Jw=a("formik");V();V();var jc=K(a("react")),Kw=a("@terradharitri/sdk-dapp/constants/index"),Qw=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),e6=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),r6=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),t6=K(a("bignumber.js")),o6=a("formik");V();V();V();V();var n6=K(a("bignumber.js"));V();var a6=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),i6=K(a("bignumber.js"));V();V();var l6=a("react"),p6=a("@terradharitri/sdk-dapp/constants/index"),c6=a("@terradharitri/sdk-dapp/utils/smartContracts"),u6=K(a("bignumber.js")),s6=a("formik");V();var d6=a("react");V();V();var f6=a("@terradharitri/sdk-dapp/constants/index"),m6=K(a("bignumber.js")),_6=(0,jc.createContext)({}),h6=(0,Sc.createContext)({});V();V();var zc=K(a("react")),g6=a("formik"),b6=(0,zc.createContext)({});V();V();var Fc=K(a("react")),v6=a("formik");V();V();V();var y6=a("react"),w6=a("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),q6=K(a("lodash/uniqBy"));V();V();var E6=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),x6=a("@terradharitri/sdk-dapp/utils");V();var S6=a("react");V();var k6=a("react"),A6=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),I6=(0,Fc.createContext)({});V();V();var Gc=K(a("react")),B6=a("formik");V();V();V();V();V();var T6=a("react"),U6=a("@terradharitri/sdk-dapp/utils");V();var C6=a("react"),L6=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");V();V();var O6=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),N6=K(a("axios"));V();var R6=K(a("axios")),M6=(0,Gc.createContext)({}),Vc=(0,Sn.createContext)({});function Wc(){return(0,Sn.useContext)(Vc)}V();var $c=`:root {
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

.dapp-core-component__styles-module__selectTokenContainer {
  margin-bottom: 1.5rem;
  z-index: 8;
  position: relative;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($c));var fn={selectTokenContainer:"dapp-core-component__styles-module__selectTokenContainer"};V();V();var Me=K(a("react")),Yc=a("@fortawesome/free-solid-svg-icons"),Hc=a("@fortawesome/react-fontawesome"),Zc=K(a("@terradharitri/sdk-dapp/constants/index")),Xc=a("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Jc=K(a("classnames"));V();var Kc=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Kc));var Sr={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},Qc=(yc(),bn(yn)).default,eu=({RewaIcon:u,inDropdown:c=!1,isRewa:l,nftTokenDetails:f,nftType:m,token:v})=>{var _,n;let{name:x,identifier:y,balance:A,decimals:w}=v,q=((_=v.assets)==null?void 0:_.svgUrl)||((n=v.assets)==null?void 0:n.pngUrl)||"",B=q?28:20,[s,g]=(0,Me.useState)(x);(0,Me.useEffect)(()=>{var E;(E=f==null?void 0:f.uris)!=null&&E.some(R=>{let D=vn.Buffer.from(String(R),"base64").toString(),{found:N}=Ac(D,f==null?void 0:f.scamInfo);return N})||g(x)},[x]);let b=Me.default.createElement(Hc.FontAwesomeIcon,{icon:Yc.faDiamond});m==Yr.NftEnumType.NonFungibleDCDT&&(b=Me.default.createElement("div",{className:"nft-type","data-testid":`${y}-type-nft`},"NFT")),m===Yr.NftEnumType.SemiFungibleDCDT&&(b=Me.default.createElement("div",{className:"nft-type","data-testid":`${y}-type-sft`},"SFT"));let h=!c&&m!==Yr.NftEnumType.NonFungibleDCDT,S=Me.default.createElement("div",{className:Sr.tokenElementCircle},b);return q&&(S=Me.default.createElement("img",{className:Sr.tokenElementCircle,src:q,alt:x,height:B})),l&&(S=Me.default.createElement("div",{className:Sr.tokenElementCircle},u?Me.default.createElement(u,{height:36}):Me.default.createElement(Qc,{height:36}))),Me.default.createElement("div",{className:(0,Jc.default)(xn.value,Sr.tokenElement)},Me.default.createElement("div",{className:Sr.tokenElementWrapper},S),Me.default.createElement("div",{"data-testid":"tokenName"},Me.default.createElement("span",{"data-testid":`${y}-element`},Me.default.createElement("span",null,s)," ",Me.default.createElement("span",{className:Sr.tokenElementIdentifier},y)),h&&Me.default.createElement(Xc.FormatAmount,{rewaLabel:y,value:A||Uc,digits:m===Yr.NftEnumType.SemiFungibleDCDT?0:Zc.DIGITS,token:y,showLabel:!1,decimals:w,"data-testid":`${y}-balance`})))},ru=u=>ur.default.createElement("div",{className:`token-option ${u.isSelected?"is-selected":""}`,"data-testid":`${u.value}-option`},ur.default.createElement(En.components.Option,Ve({},u))),tu=({className:u,label:c})=>{let{formInfo:l,accountInfo:f,tokensInfo:m}=Wc(),{readonly:v}=l,{balance:_}=f,{getTokens:n,areTokensLoading:x,tokens:y,tokenId:A,rewaLabel:w,RewaIcon:q,tokenIdError:B,onChangeTokenId:s,isTokenIdInvalid:g}=m,b=({token:ne})=>ur.default.createElement(eu,{inDropdown:!0,token:ne,isRewa:ne.identifier===w,RewaIcon:q}),h=[{name:"DharitrI eGold",identifier:w,balance:_,decimals:wc.DECIMALS,ticker:""},...y].map(ne=>({value:ne.identifier,label:ne.name,assets:ne.assets,token:ne}));function S(){return fc(this,null,function*(){yield n()})}let E=ne=>{ne&&s(ne.value)},R=({value:ne,label:_e},he)=>{if(Boolean(he)){let de=he.trim().toLowerCase(),be=ve=>ve.toLowerCase().indexOf(de)>-1;return be(ne)||be(_e)}return!0},D=window.getComputedStyle(document.documentElement),N=Ic({docStyle:D});return ur.default.createElement("div",{className:(0,qc.default)(fn.selectTokenContainer,u)},c&&ur.default.createElement("label",{htmlFor:"tokenId","data-testid":"tokenIdLabel",className:fn.selectTokenLabel},c),ur.default.createElement(En.default,{className:"selectToken",classNamePrefix:"selectToken",components:{Option:ru},filterOption:R,formatOptionLabel:b,inputId:"tokenId",isDisabled:kc("tokenId",v),isLoading:x,name:"tokenId",onChange:E,onMenuOpen:S,openMenuOnFocus:!0,options:h,styles:u?{}:N,value:h.find(({value:ne})=>ne===A)||void 0}),g&&ur.default.createElement("div",{className:xn.error,"data-testid":"tokenIdError"},ur.default.createElement("small",null,B)))};});var pa=Xe((c8,la)=>{"use strict";Be();var ou=Object.create,Cr=Object.defineProperty,nu=Object.defineProperties,au=Object.getOwnPropertyDescriptor,iu=Object.getOwnPropertyDescriptors,lu=Object.getOwnPropertyNames,Kr=Object.getOwnPropertySymbols,pu=Object.getPrototypeOf,Dt=Object.prototype.hasOwnProperty,Gn=Object.prototype.propertyIsEnumerable,In=(u,c,l)=>c in u?Cr(u,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[c]=l,Fe=(u,c)=>{for(var l in c||(c={}))Dt.call(c,l)&&In(u,l,c[l]);if(Kr)for(var l of Kr(c))Gn.call(c,l)&&In(u,l,c[l]);return u},nr=(u,c)=>nu(u,iu(c)),cu=(u,c)=>{var l={};for(var f in u)Dt.call(u,f)&&c.indexOf(f)<0&&(l[f]=u[f]);if(u!=null&&Kr)for(var f of Kr(u))c.indexOf(f)<0&&Gn.call(u,f)&&(l[f]=u[f]);return l},Vn=(u,c)=>()=>(u&&(c=u(u=0)),c),et=(u,c)=>()=>(c||u((c={exports:{}}).exports,c),c.exports),jt=(u,c)=>{for(var l in c)Cr(u,l,{get:c[l],enumerable:!0})},Wn=(u,c,l,f)=>{if(c&&typeof c=="object"||typeof c=="function")for(let m of lu(c))!Dt.call(u,m)&&m!==l&&Cr(u,m,{get:()=>c[m],enumerable:!(f=au(c,m))||f.enumerable});return u},Z=(u,c,l)=>(l=u!=null?ou(pu(u)):{},Wn(c||!u||!u.__esModule?Cr(l,"default",{value:u,enumerable:!0}):l,u)),zt=u=>Wn(Cr({},"__esModule",{value:!0}),u),rt=(u,c,l)=>new Promise((f,m)=>{var v=x=>{try{n(l.next(x))}catch(y){m(y)}},_=x=>{try{n(l.throw(x))}catch(y){m(y)}},n=x=>x.done?f(x.value):Promise.resolve(x.value).then(v,_);n((l=l.apply(u,c)).next())}),uu=et(u=>{"use strict";C(),u.byteLength=x,u.toByteArray=A,u.fromByteArray=B;var c=[],l=[],f=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(v=0,_=m.length;v<_;++v)c[v]=m[v],l[m.charCodeAt(v)]=v;var v,_;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(s){var g=s.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var b=s.indexOf("=");b===-1&&(b=g);var h=b===g?0:4-b%4;return[b,h]}function x(s){var g=n(s),b=g[0],h=g[1];return(b+h)*3/4-h}function y(s,g,b){return(g+b)*3/4-b}function A(s){var g,b=n(s),h=b[0],S=b[1],E=new f(y(s,h,S)),R=0,D=S>0?h-4:h,N;for(N=0;N<D;N+=4)g=l[s.charCodeAt(N)]<<18|l[s.charCodeAt(N+1)]<<12|l[s.charCodeAt(N+2)]<<6|l[s.charCodeAt(N+3)],E[R++]=g>>16&255,E[R++]=g>>8&255,E[R++]=g&255;return S===2&&(g=l[s.charCodeAt(N)]<<2|l[s.charCodeAt(N+1)]>>4,E[R++]=g&255),S===1&&(g=l[s.charCodeAt(N)]<<10|l[s.charCodeAt(N+1)]<<4|l[s.charCodeAt(N+2)]>>2,E[R++]=g>>8&255,E[R++]=g&255),E}function w(s){return c[s>>18&63]+c[s>>12&63]+c[s>>6&63]+c[s&63]}function q(s,g,b){for(var h,S=[],E=g;E<b;E+=3)h=(s[E]<<16&16711680)+(s[E+1]<<8&65280)+(s[E+2]&255),S.push(w(h));return S.join("")}function B(s){for(var g,b=s.length,h=b%3,S=[],E=16383,R=0,D=b-h;R<D;R+=E)S.push(q(s,R,R+E>D?D:R+E));return h===1?(g=s[b-1],S.push(c[g>>2]+c[g<<4&63]+"==")):h===2&&(g=(s[b-2]<<8)+s[b-1],S.push(c[g>>10]+c[g>>4&63]+c[g<<2&63]+"=")),S.join("")}}),su=et(u=>{C(),u.read=function(c,l,f,m,v){var _,n,x=v*8-m-1,y=(1<<x)-1,A=y>>1,w=-7,q=f?v-1:0,B=f?-1:1,s=c[l+q];for(q+=B,_=s&(1<<-w)-1,s>>=-w,w+=x;w>0;_=_*256+c[l+q],q+=B,w-=8);for(n=_&(1<<-w)-1,_>>=-w,w+=m;w>0;n=n*256+c[l+q],q+=B,w-=8);if(_===0)_=1-A;else{if(_===y)return n?NaN:(s?-1:1)*(1/0);n=n+Math.pow(2,m),_=_-A}return(s?-1:1)*n*Math.pow(2,_-m)},u.write=function(c,l,f,m,v,_){var n,x,y,A=_*8-v-1,w=(1<<A)-1,q=w>>1,B=v===23?Math.pow(2,-24)-Math.pow(2,-77):0,s=m?0:_-1,g=m?1:-1,b=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(x=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+q>=1?l+=B/y:l+=B*Math.pow(2,1-q),l*y>=2&&(n++,y/=2),n+q>=w?(x=0,n=w):n+q>=1?(x=(l*y-1)*Math.pow(2,v),n=n+q):(x=l*Math.pow(2,q-1)*Math.pow(2,v),n=0));v>=8;c[f+s]=x&255,s+=g,x/=256,v-=8);for(n=n<<v|x,A+=v;A>0;c[f+s]=n&255,s+=g,n/=256,A-=8);c[f+s-g]|=b*128}}),du=et(u=>{"use strict";C();var c=uu(),l=su(),f=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;u.Buffer=n,u.SlowBuffer=S,u.INSPECT_MAX_BYTES=50;var m=2147483647;u.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=v(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function v(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function _(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return x(e,r,t)}n.poolSize=8192;function x(e,r,t){if(typeof e=="string")return q(e,r);if(ArrayBuffer.isView(e))return s(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var i=b(e);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return x(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function A(e,r,t){return y(e),e<=0?_(e):r!==void 0?typeof t=="string"?_(e).fill(r,t):_(e).fill(r):_(e)}n.alloc=function(e,r,t){return A(e,r,t)};function w(e){return y(e),_(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function q(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=E(e,r)|0,o=_(t),i=o.write(e,r);return i!==t&&(o=o.slice(0,i)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=_(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function s(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function b(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=_(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?_(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,i=0,p=Math.min(t,o);i<p;++i)if(e[i]!==r[i]){t=e[i],o=r[i];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),i=0;for(t=0;t<e.length;++t){var p=e[t];if(H(p,Uint8Array))i+p.length>o.length?n.from(p).copy(o,i):Uint8Array.prototype.set.call(o,p,i);else if(n.isBuffer(p))p.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return o};function E(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ee(e).length;default:if(i)return o?-1:fe(e).length;r=(""+r).toLowerCase(),i=!0}}n.byteLength=E;function R(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return qe(this,r,t);case"latin1":case"binary":return Ae(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function D(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)D(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)D(this,r,r+3),D(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)D(this,r,r+7),D(this,r+1,r+6),D(this,r+2,r+5),D(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):R.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=u.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},f&&(n.prototype[f]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,i){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),r<0||t>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=t)return 0;if(o>=i)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var p=i-o,d=t-r,k=Math.min(p,d),O=this.slice(o,i),I=e.slice(r,t),U=0;U<k;++U)if(O[U]!==I[U]){p=O[U],d=I[U];break}return p<d?-1:d<p?1:0};function N(e,r,t,o,i){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=i?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(i)return-1;t=e.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,i);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,i);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,i){var p=1,d=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;p=2,d/=2,k/=2,t/=2}function O(xe,Se){return p===1?xe[Se]:xe.readUInt16BE(Se*p)}var I;if(i){var U=-1;for(I=t;I<d;I++)if(O(e,I)===O(r,U===-1?0:I-U)){if(U===-1&&(U=I),I-U+1===k)return U*p}else U!==-1&&(I-=I-U),U=-1}else for(t+k>d&&(t=d-k),I=t;I>=0;I--){for(var M=!0,ce=0;ce<k;ce++)if(O(e,I+ce)!==O(r,ce)){M=!1;break}if(M)return I}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return N(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return N(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var i=e.length-t;o?(o=Number(o),o>i&&(o=i)):o=i;var p=r.length;o>p/2&&(o=p/2);for(var d=0;d<o;++d){var k=parseInt(r.substr(d*2,2),16);if(me(k))return d;e[t+d]=k}return d}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Oe(r),e,t,o)}function be(e,r,t,o){return pe(Ee(r),e,t,o)}function ve(e,r,t,o){return pe(Ne(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-r;if((t===void 0||t>i)&&(t=i),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return be(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?c.fromByteArray(e):c.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],i=r;i<t;){var p=e[i],d=null,k=p>239?4:p>223?3:p>191?2:1;if(i+k<=t){var O,I,U,M;switch(k){case 1:p<128&&(d=p);break;case 2:O=e[i+1],(O&192)===128&&(M=(p&31)<<6|O&63,M>127&&(d=M));break;case 3:O=e[i+1],I=e[i+2],(O&192)===128&&(I&192)===128&&(M=(p&15)<<12|(O&63)<<6|I&63,M>2047&&(M<55296||M>57343)&&(d=M));break;case 4:O=e[i+1],I=e[i+2],U=e[i+3],(O&192)===128&&(I&192)===128&&(U&192)===128&&(M=(p&15)<<18|(O&63)<<12|(I&63)<<6|U&63,M>65535&&M<1114112&&(d=M))}}d===null?(d=65533,k=1):d>65535&&(d-=65536,o.push(d>>>10&1023|55296),d=56320|d&1023),o.push(d),i+=k}return we(o)}var ae=4096;function we(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function qe(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]&127);return o}function Ae(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var i="",p=r;p<t;++p)i+=Re[e[p]];return i}function ke(e,r,t){for(var o=e.slice(r,t),i="",p=0;p<o.length-1;p+=2)i+=String.fromCharCode(o[p]+o[p+1]*256);return i}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function T(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e+--r],i=1;r>0&&(i*=256);)o+=this[e+--r]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=r,i=1,p=this[e+--o];o>0&&(i*=256);)p+=this[e+--o]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*r)),p},n.prototype.readInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!1,52,8)};function j(e,r,t,o,i,p){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<p)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=1,d=0;for(this[r]=e&255;++d<t&&(p*=256);)this[r+d]=e/p&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=t-1,d=1;for(this[r+p]=e&255;--p>=0&&(d*=256);)this[r+p]=e/d&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=0,d=1,k=0;for(this[r]=e&255;++p<t&&(d*=256);)e<0&&k===0&&this[r+p-1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=t-1,d=1,k=0;for(this[r+p]=e&255;--p>=0&&(d*=256);)e<0&&k===0&&this[r+p+1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,i,p){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ye(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return ye(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return ye(this,e,r,!1,t)};function se(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var i=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),i},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var d=n.isBuffer(e)?e:n.from(e,o),k=d.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=d[p%k]}return this};var Ce=/[^+/0-9A-Za-z-_]/g;function Le(e){if(e=e.split("=")[0],e=e.trim().replace(Ce,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,i=null,p=[],d=0;d<o;++d){if(t=e.charCodeAt(d),t>55295&&t<57344){if(!i){if(t>56319){(r-=3)>-1&&p.push(239,191,189);continue}else if(d+1===o){(r-=3)>-1&&p.push(239,191,189);continue}i=t;continue}if(t<56320){(r-=3)>-1&&p.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(r-=3)>-1&&p.push(239,191,189);if(i=null,t<128){if((r-=1)<0)break;p.push(t)}else if(t<2048){if((r-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Oe(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Ne(e,r){for(var t,o,i,p=[],d=0;d<e.length&&!((r-=2)<0);++d)t=e.charCodeAt(d),o=t>>8,i=t%256,p.push(i),p.push(o);return p}function Ee(e){return c.toByteArray(Le(e))}function pe(e,r,t,o){for(var i=0;i<o&&!(i+t>=r.length||i>=e.length);++i)r[i+t]=e[i];return i}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Re=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,i=0;i<16;++i)r[o+i]=e[t]+e[i];return r}()}),fu=et((u,c)=>{C();var l=c.exports={},f,m;function v(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?f=setTimeout:f=v}catch(h){f=v}try{typeof clearTimeout=="function"?m=clearTimeout:m=_}catch(h){m=_}})();function n(h){if(f===setTimeout)return setTimeout(h,0);if((f===v||!f)&&setTimeout)return f=setTimeout,setTimeout(h,0);try{return f(h,0)}catch(S){try{return f.call(null,h,0)}catch(E){return f.call(this,h,0)}}}function x(h){if(m===clearTimeout)return clearTimeout(h);if((m===_||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(h);try{return m(h)}catch(S){try{return m.call(null,h)}catch(E){return m.call(this,h)}}}var y=[],A=!1,w,q=-1;function B(){!A||!w||(A=!1,w.length?y=w.concat(y):q=-1,y.length&&s())}function s(){if(!A){var h=n(B);A=!0;for(var S=y.length;S;){for(w=y,y=[];++q<S;)w&&w[q].run();q=-1,S=y.length}w=null,A=!1,x(h)}}l.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)S[E-1]=arguments[E];y.push(new g(h,S)),y.length===1&&!A&&n(s)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function b(){}l.on=b,l.addListener=b,l.once=b,l.off=b,l.removeListener=b,l.removeAllListeners=b,l.emit=b,l.prependListener=b,l.prependOnceListener=b,l.listeners=function(h){return[]},l.binding=function(h){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(h){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),mu,_u,hu,C=Vn(()=>{mu=Z(du()),_u=Z(fu()),hu=function(u){function c(){var f=this||self;return delete u.prototype.__magic__,f}if(typeof globalThis=="object")return globalThis;if(this)return c();u.defineProperty(u.prototype,"__magic__",{configurable:!0,get:c});var l=__magic__;return l}(Object)}),Ft={};jt(Ft,{default:()=>$n});var Zr,Bn,$n,Yn=Vn(()=>{"use strict";C(),Zr=Z(a("react")),Bn=u=>Zr.createElement("svg",Fe({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},u),Zr.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Zr.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),$n=Bn}),Hn={};jt(Hn,{AmountSelect:()=>ta,AmountSelectInput:()=>Rd});la.exports=zt(Hn);C();C();var Ze=Z(a("react")),Bt=Z(a("classnames"));C();var gu=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gu));var Ur={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};C();C();var bu=`:root {
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

.dapp-core-component__amountSelect-module__amount {
  display: block;
  position: relative;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper {
  align-items: center;
  background: var(--dapp-form-input-bg);
  border: 1px solid var(--dapp-form-input-bg);
  border-radius: var(--dapp-form-input-border-radius);
  display: flex;
  position: relative;
  padding: 4px;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper.dapp-core-component__amountSelect-module__error {
  border-color: var(--dapp-form-error-color);
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper.dapp-core-component__amountSelect-module__disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper .dapp-core-component__amountSelect-module__interaction {
  align-items: center;
  bottom: 0;
  display: flex;
  position: absolute;
  right: 4px;
  top: 0;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__label label {
  margin: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bu));var vr={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};C();C();C();var Pe=Z(a("react")),vu=a("@terradharitri/sdk-dapp/utils/validation"),Tt=Z(a("bignumber.js")),Tn=Z(a("classnames")),yu=a("react-number-format");C();var wu=`:root {
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

.dapp-core-component__amountInput-module__amount-input {
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: var(--black);
  font-variant-numeric: tabular-nums;
  font-weight: 500;
  height: 100%;
  padding: 1rem;
  width: 100%;
}
.dapp-core-component__amountInput-module__amount-input::focused, .dapp-core-component__amountInput-module__amount-input::active {
  box-shadow: none;
}
.dapp-core-component__amountInput-module__amount-input::placeholder {
  font-weight: 300;
}
@media (max-width: 575px) {
  .dapp-core-component__amountInput-module__amount-input::placeholder {
    font-size: 1rem;
  }
}
@media (max-width: 767px) {
  .dapp-core-component__amountInput-module__amount-input::placeholder {
    font-size: 1rem;
  }
}

.dapp-core-component__amountInput-module__amount-holder {
  max-width: 50%;
  position: relative;
  width: 100%;
}
.dapp-core-component__amountInput-module__amount-holder.dapp-core-component__amountInput-module__show-usd-value .dapp-core-component__amountInput-module__amount-input {
  padding-top: 0.375rem;
  padding-bottom: 1.5rem;
}
.dapp-core-component__amountInput-module__amount-holder .dapp-core-component__amountInput-module__amount-holder-usd {
  display: flex;
  font-size: 1rem;
  line-height: 1;
  padding: 0 1rem;
  position: absolute;
  color: var(--dapp-form-label-color);
  top: 1.875rem;
  width: 100%;
}
.dapp-core-component__amountInput-module__amount-holder .dapp-core-component__amountInput-module__amount-holder-usd small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dapp-core-component__amountInput-module__amount-holder .dapp-core-component__amountInput-module__input {
  height: 70px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wu));var Xr={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};C();C();var yr=a("@terradharitri/sdk-dapp/constants/index"),qu=a("@terradharitri/sdk-dapp/utils/validation"),sr=Z(a("bignumber.js")),Eu=(u,c)=>{let l=c!=null?c:yr.DIGITS;if((0,qu.stringIsFloat)(u)){if(new sr.default(u).isZero())return"0";let f=new sr.default(u).toFormat(l);return f=parseFloat(f)>0?f:new sr.default(u).toFormat(yr.DIGITS),f=parseFloat(f)>0?f:new sr.default(u).toFormat(yr.DIGITS+2),f=parseFloat(f)>0?f:new sr.default(u).toFormat(yr.DIGITS+4),f=parseFloat(f)>0?f:new sr.default(u).toFormat(yr.DIGITS+6),f=parseFloat(f)>0?f:new sr.default(u).toFormat(yr.DIGITS+10),parseFloat(f)>0?f:new sr.default(u).toFormat(yr.DIGITS+14)}return"0"};C();var Un=u=>u.replace(/,/g,"");C();var Cn=a("react"),xu={value:"",count:0},Su=(u,c)=>{let[l,f]=(0,Cn.useState)(xu);return(0,Cn.useEffect)(()=>{let m=setTimeout(()=>{f(u)},c);return()=>clearTimeout(m)},[u.count]),l};C();var ku=Z(a("bignumber.js")),Au=u=>{let[c,l]=u.split(""),f=new ku.default(c).isZero();return Boolean(f&&l&&l!==".")},Iu=500,Ln=1e13,Bu=({"data-testid":u,InfoDustComponent:c,disabled:l,handleBlur:f,handleChange:m,name:v,onDebounceChange:_,onFocus:n,onKeyDown:x,placeholder:y,required:A,usdPrice:w,value:q,usdValue:B,className:s,autoFocus:g,suffix:b})=>{let h=(0,Pe.useRef)(null),[S,E]=(0,Pe.useState)(),[R,D]=(0,Pe.useState)(!1),[N,ne]=(0,Pe.useState)({value:q,count:0}),[_e,he]=(0,Pe.useState)(),de=Su(N,Iu),be=re=>{re.stopPropagation(),D(!0);let ae=Un(re.target.value),we=(0,Tt.default)(ae).isLessThanOrEqualTo(Ln);if((ae===""||we)&&(E(ae),re.target.value=ae,m(re),_)){let qe={value:ae,count:N.count+1};ne(qe)}},ve=()=>{if(B)return he(`$${B}`);if(!w||!q)return he(void 0);let re=Un(q);if(!(q!==""&&(0,vu.stringIsFloat)(re))||re==="")return he(void 0);let ae=Eu(new Tt.default(re).times(w!=null?w:0).toString(10),2);he(`$${ae}`)},ie=({value:re,floatValue:ae})=>(!ae||(0,Tt.default)(ae).isLessThanOrEqualTo(Ln))&&!Au(re);return(0,Pe.useEffect)(()=>{_&&R&&(D(!1),_(de.value))},[de]),(0,Pe.useEffect)(ve,[q,B,w]),(0,Pe.useEffect)(()=>{q!==S&&E(q)},[q]),Pe.default.createElement("div",{ref:h,className:(0,Tn.default)(Xr.amountHolder,{[Xr.showUsdValue]:Boolean(_e)},s)},Pe.default.createElement(yu.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":u||v,decimalSeparator:".",disabled:Boolean(l),id:v,inputMode:"decimal",isAllowed:ie,name:v,onBlur:f,onChange:be,onFocus:n,onKeyDown:x,placeholder:y,required:A,thousandSeparator:",",thousandsGroupStyle:"thousand",value:S,suffix:b,valueIsNumericString:!0,allowNegative:!1,autoFocus:g,className:(0,Tn.default)(Ur.input,Xr.amountInput,{[Ur.disabled]:Boolean(l)})}),_e&&Pe.default.createElement("span",{className:Xr.amountHolderUsd},Pe.default.createElement("small",{"data-testid":`tokenPrice_${w}`},_e!=="$0"?Pe.default.createElement(Pe.default.Fragment,null,"\u2248 "):Pe.default.createElement(Pe.default.Fragment,null),_e),c))},Tu=(0,Pe.memo)(Bu,(u,c)=>u.value===c.value&&u.usdPrice===c.usdPrice&&u.className===c.className&&u.disabled===c.disabled&&u.usdValue===c.usdValue);C();C();var On=Z(a("react"));C();C();var Tr=Z(a("react")),Uu=a("@fortawesome/free-solid-svg-icons"),Cu=a("@fortawesome/react-fontawesome"),Lu=a("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Ou=a("react-tooltip"),D6=a("react-tooltip/dist/react-tooltip.css");C();C();var Zn="5000000000000000",Nu="WREWA-bd4d79";C();var Ru=`:root {
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

.dapp-core-component__styles-module__infoDust {
  display: inline-block;
  position: relative;
}
.dapp-core-component__styles-module__infoDust .dapp-core-component__styles-module__infoDustTrigger {
  cursor: pointer;
  color: var(--primary-light);
}
.dapp-core-component__styles-module__infoDust .dapp-core-component__styles-module__infoDustTrigger:hover {
  color: var(--link-hover-color);
}
.dapp-core-component__styles-module__infoDust .dapp-core-component__styles-module__infoDustTooltip {
  width: 200px;
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: var(--white);
  text-align: center;
  border-radius: var(--dapp-form-input-border-radius);
  background-color: var(--black);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ru));var Ut={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},Mu=({rewaLabel:u})=>Tr.default.createElement("div",{className:Ut.infoDust},Tr.default.createElement(Ou.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:Ut.infoDustTooltip},"A minimal amount of"," ",Tr.default.createElement(Lu.FormatAmount,{rewaLabel:u,value:Zn,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),Tr.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:Ut.infoDustTrigger},Tr.default.createElement(Cu.FontAwesomeIcon,{icon:Uu.faInfoCircle,className:"i-icon"}))),Pu=({rewaLabel:u,amount:c,maxAmountMinusDust:l,isMaxClicked:f,tokenId:m})=>c===l&&f&&m===u?On.default.createElement("span",{style:{marginLeft:"0.2rem"}},On.default.createElement(Mu,{rewaLabel:u})):null;C();C();var Du=Z(a("react")),ju=a("@terradharitri/sdk-dapp/constants"),Nn=Z(a("bignumber.js")),zu=Z(a("classnames"));C();var Rn=Z(a("bignumber.js")),Fu=u=>{let c=new Rn.default(u!=null?u:"0"),l=new Rn.default(Zn),f=c.minus(l);return f.isGreaterThan(0)?f.toString(10):"0"};C();var Gu=`:root {
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

.dapp-core-component__maxButton-module__max {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border-radius: 16px;
  margin-right: 8px;
  background-color: var(--dapp-form-max-btn-bg);
  color: var(--dapp-form-max-btn-color);
  text-transform: uppercase;
  width: 48px;
  padding: 6px 0;
  font-size: 12px;
  transition: all 200ms ease;
}
.dapp-core-component__maxButton-module__max:hover {
  color: var(--dapp-form-max-btn-color);
  background-color: var(--dapp-form-max-hover-btn-bg);
  text-decoration: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gu));var Vu={max:"dapp-core-component__maxButton-module__max"};C();var wr=a("@terradharitri/sdk-dapp/constants"),Wu=a("@terradharitri/sdk-dapp/utils/operations/formatAmount"),$u=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Gt=({amount:u="0",decimals:c=0,digits:l=wr.DIGITS,addCommas:f=!1,showLastNonZeroDecimal:m=!1})=>{if(u==null||!(0,$u.stringIsInteger)(u))return"0";let v=n=>(0,Wu.formatAmount)({input:u,digits:n,decimals:c,addCommas:f,showLastNonZeroDecimal:m}),_=v(l);return _=parseFloat(_)>0?_:v(wr.DIGITS),_=parseFloat(_)>0?_:v(wr.DIGITS+2),_=parseFloat(_)>0?_:v(wr.DIGITS+4),_=parseFloat(_)>0?_:v(wr.DIGITS+6),_=parseFloat(_)>0?_:v(wr.DIGITS+10),parseFloat(_)>0?_:v(wr.DIGITS+14)},Yu=({token:u,rewaLabel:c,inputAmount:l,className:f,onMaxClick:m})=>{var v;let _=(u==null?void 0:u.identifier)===c,n=(v=u==null?void 0:u.balance)!=null?v:"0";if(n==="0")return null;let x=Gt({amount:_?Fu(n):n,decimals:(u==null?void 0:u.decimals)||ju.DECIMALS}),y=new Nn.default(l).isEqualTo(new Nn.default(x)),A=w=>{w.preventDefault(),m==null||m(x)};return y?null:Du.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,zu.default)(Vu.max,f),onClick:A,onMouseDown:w=>{w.preventDefault()}},"Max")};C();C();var dr=Z(a("react")),Hu=Z(a("classnames")),Zu=Z(a("react-select"));C();var Xu={D:"devnet",T:"testnet",1:"mainnet"},Ju={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function Ku(u){return Xu[u]}function Qu(u){return Ju[u]||Nu}var Xn={};jt(Xn,{Control:()=>hs,IndicatorsContainer:()=>xs,Input:()=>is,Menu:()=>fs,MenuList:()=>cs,DharitrIIcon:()=>Qn,Placeholder:()=>ys,SmallLoader:()=>ts,ValueComponent:()=>Jn,getOption:()=>ea,getSingleValue:()=>ra,getValueContainer:()=>Kn});C();C();var Mn=Z(a("react")),es=a("@fortawesome/free-solid-svg-icons"),rs=a("@fortawesome/react-fontawesome"),ts=({show:u,color:c})=>u?Mn.default.createElement("div",{className:"d-flex"},Mn.default.createElement(rs.FontAwesomeIcon,{icon:es.faSpinner,className:`fa-spin fast-spin ${c||"text-primary"}`})):null;C();C();var os=Z(a("react")),ns=a("react-select");C();var as=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(as));var ue={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},is=u=>os.default.createElement(ns.components.Input,nr(Fe({},u),{className:ue.dropdown,"data-testid":"tokenSelectInput"}));C();var ls=Z(a("react")),ps=a("react-select"),cs=u=>{let c=u,{rx:l}=c,f=cu(c,["rx"]);return ls.default.createElement(ps.components.MenuList,nr(Fe({},f),{className:ue.list}))};C();var Ct=Z(a("react")),us=a("@fortawesome/free-solid-svg-icons"),ss=a("@fortawesome/react-fontawesome"),ds=a("react-select"),fs=u=>Ct.default.createElement(ds.components.Menu,nr(Fe({},u),{className:ue.menu}),u.selectProps.isLoading?Ct.default.createElement("div",{className:ue.loading},Ct.default.createElement(ss.FontAwesomeIcon,{icon:us.faCircleNotch,className:"fa-spin",size:"lg"})):u.children);C();var ms=Z(a("react")),_s=a("react-select"),hs=u=>ms.default.createElement(_s.components.Control,nr(Fe({},u),{className:ue.control}));C();var gs=Z(a("react")),bs=Z(a("classnames")),vs=a("react-select"),ys=u=>gs.default.createElement(vs.components.Placeholder,nr(Fe({},u),{className:(0,bs.default)(ue.placeholder,{[ue.focused]:u.isFocused})}));C();var ws=Z(a("react")),qs=Z(a("classnames")),Es=a("react-select"),xs=u=>ws.default.createElement(Es.components.IndicatorsContainer,nr(Fe({},u),{className:(0,qs.default)(ue.indicator,{[ue.expanded]:u.selectProps.menuIsOpen})}));C();var We=Z(a("react")),Ss=a("@fortawesome/free-solid-svg-icons"),ks=a("@fortawesome/react-fontawesome"),As=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Is=Z(a("classnames")),Bs=a("react-select"),Ts=(Yn(),zt(Ft)).default,Jn=({RewaIcon:u,tokenId:c,icon:l})=>{let{isRewa:f}=(0,As.getIdentifierType)(c);return f?We.default.createElement("span",{className:ue.asset},u?We.default.createElement(u,{className:ue.diamond}):We.default.createElement(Ts,{className:ue.diamond})):l?We.default.createElement("img",{src:l,className:ue.asset}):We.default.createElement(ks.FontAwesomeIcon,{icon:Ss.faDiamond,className:ue.asset})},Us=({children:u})=>We.default.createElement("div",{className:ue.wrapper},u),Kn=(u,c,l)=>f=>{var m,v;let{selectProps:_,isDisabled:n,children:x}=f,y=_.value,A=(v=(m=y==null?void 0:y.assets)==null?void 0:m.svgUrl)!=null?v:null,w=(0,We.useMemo)(()=>{let q=String(y==null?void 0:y.token.usdPrice);return q!=null&&q.includes("$")?y==null?void 0:y.token.usdPrice:`$${y==null?void 0:y.token.usdPrice}`},[y==null?void 0:y.token.usdPrice]);return We.default.createElement(Bs.components.ValueContainer,nr(Fe({},f),{className:ue.container}),We.default.createElement("div",{className:(0,Is.default)(ue.icon,c)},We.default.createElement(Jn,{RewaIcon:l,rewaLabel:u,icon:A,isDisabled:n,tokenId:y==null?void 0:y.value})),We.default.createElement("div",{className:ue.payload},We.default.createElement(Us,null,x,(y==null?void 0:y.token.usdPrice)&&We.default.createElement("small",{className:ue.price},w))))};C();var Te=Z(a("react")),Cs=a("@fortawesome/free-solid-svg-icons"),Ls=a("@fortawesome/react-fontawesome"),Os=a("@terradharitri/sdk-dapp/constants"),Ns=a("@terradharitri/sdk-dapp/UI/UsdValue"),Rs=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ms=Z(a("classnames")),Ps=a("react-select");C();C();var Jr=Z(a("react"));C();var Ds=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ds));var js={highlight:"dapp-core-component__styles-modules__highlight"},zs=({highlight:u,text:c=""})=>{let l=c.split(" "),f=u.toLowerCase(),m=new RegExp(`(${f})`,"gi"),v=l.map(_=>_.split(m).filter(n=>n));return Jr.default.createElement("span",{className:js.highlight},v.map((_,n)=>{let x=`${_}-${n}`;return Jr.default.createElement("span",{key:x},_.map((y,A)=>{let w=y.toLowerCase()===f,q=f&&w,B=`${y}-${A}`;return q?Jr.default.createElement("strong",{key:B},y):Jr.default.createElement("span",{key:B},y)}))}))},{default:Qn}=(Yn(),zt(Ft)),ea=({RewaIcon:u,TokenTickerIcon:c,showBalanceUsdValue:l,showTokenPrice:f})=>m=>{var v,_,n,x;let{data:y,isSelected:A,isFocused:w,isDisabled:q,selectProps:B}=m,s=y,{isRewa:g}=(0,Rs.getIdentifierType)(s.value),b=s.token.assets?s.token.assets.svgUrl:null,h=Gt({amount:s.token.balance,decimals:s.token.decimals||Os.DECIMALS,addCommas:!0}),S=(_=(v=s.token)==null?void 0:v.usdPrice)==null?void 0:_.toString(),E=(x=(n=s.token)==null?void 0:n.valueUSD)==null?void 0:x.toString();return Te.default.createElement("div",{"data-testid":`${m.value}-option`},Te.default.createElement(Ps.components.Option,nr(Fe({},m),{className:(0,Ms.default)(ue.option,{[ue.selected]:A||w,[ue.disabled]:q})}),Te.default.createElement("div",{className:ue.image},g?Te.default.createElement("span",{className:ue.icon},u?Te.default.createElement(u,null):Te.default.createElement(Qn,null)):b?Te.default.createElement("img",{src:b,className:ue.icon}):Te.default.createElement("span",{className:ue.icon},Te.default.createElement(Ls.FontAwesomeIcon,{icon:Cs.faDiamond,className:ue.diamond}))),Te.default.createElement("div",{className:ue.info},Te.default.createElement("div",{className:ue.left},Te.default.createElement("div",{className:ue.ticker},Te.default.createElement("span",{className:ue.value},B.inputValue?Te.default.createElement(zs,{text:s.token.ticker,highlight:B.inputValue}):s.token.ticker),c&&Te.default.createElement(c,{token:s.token})),f&&Te.default.createElement("small",{className:ue.price},S)),Te.default.createElement("div",{className:ue.right},Te.default.createElement("span",{className:ue.value},h),l&&E&&Te.default.createElement(Ns.UsdValue,{usd:1,decimals:4,amount:E,"data-testid":"token-price-usd-value",className:ue.price,addEqualSign:!1}))),Te.default.createElement("div",{className:ue.children},m.children)))};C();var Lt=Z(a("react")),Fs=Z(a("classnames")),Gs=a("react-select"),ra=u=>c=>{let{selectProps:l,children:f}=c,m=l.value;return Lt.default.createElement(Gs.components.SingleValue,nr(Fe({},c),{className:(0,Fs.default)(ue.single,{[ue.focused]:c.selectProps.menuIsOpen})}),Lt.default.createElement("div",{className:ue.ticker},f,u&&Lt.default.createElement(u,{token:m==null?void 0:m.token})))},{Menu:Vs,Control:Ws,Input:$s,MenuList:Ys,IndicatorsContainer:Hs,Placeholder:Zs}=Xn,Xs=u=>{let{name:c,options:l,isLoading:f=!1,className:m="",noOptionsMessage:v="No Tokens",disabledOption:_,rewaLabel:n,RewaIcon:x,disabled:y,value:A,onBlur:w,onFocus:q,onChange:B,onMenuOpen:s,chainId:g,wrapperClassName:b="",showTokenPrice:h=!1,showBalanceUsdValue:S=!1,selectedTokenIconClassName:E,TokenTickerIcon:R}=u,D=(0,dr.useRef)(null),N=[n,Qu(g)],ne=(0,dr.useMemo)(()=>ea({rewaLabel:n,RewaIcon:x,showTokenPrice:h,showBalanceUsdValue:S,TokenTickerIcon:R}),[]),_e=(0,dr.useMemo)(()=>Kn(n,E,x),[]),he=(0,dr.useMemo)(()=>ra(R),[]);(0,dr.useEffect)(()=>{let ie=l.find(ae=>ae.value===(A==null?void 0:A.value)),re=(ie==null?void 0:ie.token.balance)===(A==null?void 0:A.token.balance);!ie||re||B(ie)},[l]);let de=ie=>N.includes(ie),be=ie=>{var re;let ae=ie.value===(_==null?void 0:_.value),we=de(ie.value),qe=de((re=_==null?void 0:_.value)!=null?re:"");return ae||we&&qe},ve=(ie,re)=>{let ae=ie.data.token.ticker?ie.data.token.ticker.toLowerCase().includes(re.toLowerCase()):!1,we=ie.data.token.name.toLowerCase().includes(re.toLowerCase());return Boolean(re)?ae||we:!0};return dr.default.createElement("div",{"data-testid":`${c}Select`,className:`${b} ${f?"select-holder-loading":""}`},dr.default.createElement("label",{htmlFor:c,"data-testid":"tokenIdLabel",className:ue.label},"Token"),dr.default.createElement(Zu.default,{ref:D,inputId:c,name:c,options:l,openMenuOnFocus:!0,isDisabled:y,isLoading:f,value:A,isOptionDisabled:be,onBlur:w,filterOption:ve,onFocus:q,onChange:ie=>{B(ie),D&&D.current!==null&&D.current.blur()},isSearchable:u.isSearchable,maxMenuHeight:260,onMenuOpen:s,noOptionsMessage:()=>v,className:(0,Hu.default)(ue.select,m,{[ue.disabled]:u.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:Vs,Control:Ws,Input:$s,MenuList:Ys,IndicatorsContainer:Hs,ValueContainer:_e,Placeholder:Zs,Option:ne,SingleValue:he}}))};C();C();var Js=Z(a("react")),Ks=Z(a("classnames")),Qs=({hasErrors:u,className:c,error:l,"data-testid":f})=>u?Js.default.createElement("div",{className:(0,Ks.default)(Ur.error,c),"data-testid":f},l):null;C();C();var Ot=Z(a("react")),ed=Z(a("classnames"));C();var rd=`.dapp-core-component__tokenBalance-module__balance {
  line-height: 1;
  font-size: 12px;
  color: var(--dapp-form-input-color);
  max-width: 75%;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  gap: 4px;
}
.dapp-core-component__tokenBalance-module__balance span {
  color: var(--dapp-form-label-color);
}
.dapp-core-component__tokenBalance-module__balance .dapp-core-component__tokenBalance-module__value {
  overflow: hidden;
  text-overflow: ellipsis;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rd));var Nt={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"},td=({label:u,value:c,className:l,token:f,"data-testid":m,"data-value":v})=>Ot.default.createElement("div",{"data-testid":m,"data-value":v,className:(0,ed.default)(Nt.balance,l)},Ot.default.createElement("span",{className:Nt.label},u,": "),Ot.default.createElement("span",{className:Nt.value},c)," ",f==null?void 0:f.ticker),ta=({className:u,label:c,name:l,wrapperControlsClassName:f,tokenSelectProps:m,tokenBalanceProps:v,amountInputProps:_,amountErrorProps:n,maxButtonProps:x,readonly:y})=>Ze.default.createElement("div",{className:(0,Bt.default)(vr.amount,u)},Ze.default.createElement("div",{className:vr.label},c&&Ze.default.createElement("label",{htmlFor:l,className:Ur.label,"data-testid":"amountLabel"},c),Ze.default.createElement(td,Fe({},v))),Ze.default.createElement("div",{className:(0,Bt.default)(vr.wrapper,f,{[vr.error]:_.isInvalid||m.isInvalid||n.hasErrors,[vr.disabled]:y})},Ze.default.createElement(Tu,Fe({},_)),Ze.default.createElement("div",{className:(0,Bt.default)(vr.interaction,x.wrapperClassName)},x.isMaxButtonVisible&&Ze.default.createElement(Yu,Fe({},x)),Ze.default.createElement("div",{className:vr.select},Ze.default.createElement(Xs,Fe({},m))))),Ze.default.createElement(Qs,Fe({},n)));C();var Rt=Z(a("react")),od=a("@terradharitri/sdk-dapp/constants"),nd=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");C();var j6=Z(a("react")),z6=a("@terradharitri/sdk-dapp/constants/index");C();C();C();var F6=Z(a("axios"));C();C();C();var ad=a("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");C();var id=a("@terradharitri/sdk-dapp/constants/index");function ld(u){let c=Ku(u),l=id.fallbackNetworkConfigurations[c].apiAddress;if(!l)throw"Could not extract api address for environment, check if you have a valid chainID";return l}function pd(u){return rt(this,null,function*(){let c=ld(u);return yield(0,ad.getServerConfiguration)(c)})}C();var Qr={value:null};function cd(u){return Qr.value={baseURL:u.apiAddress,timeout:Number(u.apiTimeout)},Qr.value}function ud(u){return rt(this,null,function*(){if(Qr.value!=null)return Qr.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),u!=null){let l=yield pd(u);return cd(l)}let c="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(c),c})}C();C();var sd=Z(a("axios"));function dd(){return rt(this,null,function*(){try{let u=yield ud(),{data:c}=yield sd.default.get("economics",u);return c}catch(u){return console.error("err fetching economics info",u),null}})}C();C();var G6=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),V6=a("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),W6=Z(a("axios")),$6=Z(a("lodash/uniqBy"));C();var Y6=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),H6=Z(a("axios"));C();C();C();var fd=a("@terradharitri/sdk-dapp/types/tokens.types");C();C();C();C();var Z6=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),X6=Z(a("axios"));C();C();var J6=Z(a("axios"));C();var md=Z(a("react")),K6=(0,md.createContext)({});C();C();var _d=Z(a("react")),Q6=a("@terradharitri/sdk-dapp/constants/index"),e5=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),r5=Z(a("bignumber.js")),t5=a("formik");C();C();C();var o5=a("bech32");C();C();C();var hd=(u,c)=>typeof c=="boolean"?c:Array.isArray(c)&&c.includes(u);C();C();C();var n5=a("@terradharitri/sdk-dapp/constants"),a5=a("@terradharitri/sdk-dapp/utils/account/getAccount");C();C();var i5=a("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");C();var l5=a("@terradharitri/sdk-dapp/utils/buildUrlParams");C();var p5=Z(a("anchorme"));C();C();var c5=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),gd=a("@terradharitri/sdk-dapp/utils/operations/formatAmount"),u5=a("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),s5=a("@terradharitri/sdk-dapp/utils/operations/parseAmount");C();C();var oa=Z(a("react")),d5=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),f5=a("formik");C();C();var m5=a("@terradharitri/sdk-dapp/constants/index"),_5=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),h5=Z(a("bignumber.js"));C();C();var g5=a("@terradharitri/sdk-dapp/constants/index");C();var b5=a("@terradharitri/sdk-dapp/constants/index");C();var v5=a("@terradharitri/sdk-dapp/constants/index"),y5=Z(a("bignumber.js"));C();var w5=a("@terradharitri/sdk-dapp/constants/index");C();var q5=a("@terradharitri/sdk-dapp/constants/index");C();C();var E5=a("@terradharitri/sdk-core"),x5=a("@terradharitri/sdk-dapp/constants/index"),S5=Z(a("bignumber.js"));C();C();var k5=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");C();var A5=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");C();var I5=Z(a("bignumber.js"));C();var B5=a("@terradharitri/sdk-dapp/constants/index"),T5=a("@terradharitri/sdk-dapp/utils/smartContracts"),U5=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),C5=Z(a("bignumber.js"));C();var L5=Z(a("bignumber.js"));C();var Mt=a("@terradharitri/sdk-dapp/constants/index"),bd=Z(a("bignumber.js")),Pn,Dn,jn,vd=(0,gd.formatAmount)({input:String((Pn=Mt.GAS_PRICE)!=null?Pn:1e9),decimals:(Dn=Mt.DECIMALS)!=null?Dn:18,showLastNonZeroDecimal:!0,digits:(jn=Mt.DIGITS)!=null?jn:4}),O5=new bd.default(vd).times(10).toString(10);C();var N5=a("@terradharitri/sdk-dapp/constants/index"),R5=Z(a("bignumber.js"));C();var M5=Z(a("bignumber.js"));C();C();var P5=a("yup");C();var zn=a("@terradharitri/sdk-dapp/constants/ledger.constants"),yd=Z(a("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Vt=a("yup"),wd=(0,Vt.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(u){let{ledger:c}=this.parent;return!(c&&u&&u.length&&!c.ledgerDataActive)}),qd=(0,Vt.string)().test({name:"hashSign",test:function(u){let{ledger:c,isGuarded:l}=this.parent;if(c){let{ledgerWithHashSign:f,ledgerWithGuardians:m}=(0,yd.default)(c.version);if(u&&u.length>300&&!f)return this.createError({message:`Data too long. You need at least DharitrI app version ${zn.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!m)return this.createError({message:`You need at least DharitrI app version ${zn.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Ed=[wd,qd],D5=Ed.reduce((u,c)=>u.concat(c),(0,Vt.string)());C();var j5=a("@terradharitri/sdk-dapp/constants/index"),z5=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),F5=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),G5=a("yup");C();var V5=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),W5=Z(a("bignumber.js")),$5=a("yup");C();var Y5=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),H5=Z(a("bignumber.js")),Z5=a("yup");C();var X5=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),J5=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),K5=Z(a("bignumber.js")),Q5=a("yup");C();var e4=Z(a("bignumber.js")),r4=a("yup");C();var t4=a("@terradharitri/sdk-dapp/constants/index"),o4=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),n4=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),a4=Z(a("bignumber.js")),i4=a("yup");C();var l4=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),p4=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),c4=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),u4=Z(a("bignumber.js")),s4=a("yup");C();var d4=Z(a("bignumber.js")),f4=a("yup");C();var m4=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),_4=a("yup");C();var h4=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),g4=a("yup");C();C();var xd=(0,oa.createContext)({});function Sd(){return(0,oa.useContext)(xd)}C();C();var kd=Z(a("react")),b4=a("formik"),v4=Z(a("lodash/uniqBy"));C();C();var na=Z(a("react")),Ad=(0,na.createContext)({});function aa(){return(0,na.useContext)(Ad)}C();C();var Fn=a("react"),Id=a("@terradharitri/sdk-dapp/constants/index"),Pt=a("@terradharitri/sdk-dapp/types/enums.types");function Bd(){let{networkConfig:u}=aa(),[c,l]=(0,Fn.useState)(0);function f(){return rt(this,null,function*(){let m=yield dd(),v=(m==null?void 0:m.price)||0;l(v)})}return(0,Fn.useEffect)(()=>{![Pt.EnvironmentsEnum.mainnet,Pt.EnvironmentsEnum.testnet,Pt.EnvironmentsEnum.devnet].includes(u==null?void 0:u.id)||f()},[u==null?void 0:u.id]),{rewaLabel:u.rewaLabel,rewaPriceInUsd:c,digits:Id.DIGITS}}C();var y4=(0,kd.createContext)({});C();C();var w4=a("@terradharitri/sdk-dapp/constants/index"),q4=a("formik");C();C();var Td=Z(a("react")),E4=a("@terradharitri/sdk-dapp/constants/index"),x4=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),S4=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),k4=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),A4=Z(a("bignumber.js")),I4=a("formik");C();C();C();C();var B4=Z(a("bignumber.js"));C();var T4=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),U4=Z(a("bignumber.js"));C();C();var C4=a("react"),L4=a("@terradharitri/sdk-dapp/constants/index"),O4=a("@terradharitri/sdk-dapp/utils/smartContracts"),N4=Z(a("bignumber.js")),R4=a("formik");C();var M4=a("react");C();C();var P4=a("@terradharitri/sdk-dapp/constants/index"),D4=Z(a("bignumber.js")),j4=(0,Td.createContext)({}),z4=(0,_d.createContext)({});C();C();var Ud=Z(a("react")),F4=a("formik"),G4=(0,Ud.createContext)({});C();C();var Cd=Z(a("react")),V4=a("formik");C();C();C();var W4=a("react"),$4=a("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Y4=Z(a("lodash/uniqBy"));C();C();var H4=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Z4=a("@terradharitri/sdk-dapp/utils");C();var X4=a("react");C();var J4=a("react"),K4=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Q4=(0,Cd.createContext)({});C();C();var Ld=Z(a("react")),e8=a("formik");C();C();C();C();C();var r8=a("react"),t8=a("@terradharitri/sdk-dapp/utils");C();var o8=a("react"),n8=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");C();C();var a8=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),i8=Z(a("axios"));C();var l8=Z(a("axios")),p8=(0,Ld.createContext)({});C();var ia=Z(a("react")),Od=(0,ia.createContext)({});function Nd(){return(0,ia.useContext)(Od)}var Rd=()=>{var u,c;let{checkInvalid:l}=Sd(),{tokensInfo:f,amountInfo:m,formInfo:v}=Nd(),{readonly:_}=v,{networkConfig:{rewaLabel:n,chainId:x}}=aa(),{rewaPriceInUsd:y}=Bd(),{amount:A,onBlur:w,onChange:q,onMaxClicked:B,error:s,isInvalid:g,onFocus:b,maxAmountAvailable:h,isMaxClicked:S,isMaxButtonVisible:E,maxAmountMinusDust:R}=m,{allAvailableTokens:D,areTokensLoading:N,getTokens:ne,isTokenIdInvalid:_e,RewaIcon:he,nft:de,onChangeTokenId:be,tokenDetails:ve,tokenId:ie,tokenIdError:re}=f,ae=D.map(se=>({value:se.identifier,label:String(se.ticker),assets:se.assets,token:se})),{isRewa:we}=(0,nd.getIdentifierType)(ie),qe=ae.find(({value:se})=>se===ie),Ae={id:"tokenId",value:qe,name:"tokenId",isLoading:N,options:ae,isSearchable:!0,onChange:se=>{se&&(be(se.value),q(""))},onMenuOpen:ne,disabled:hd("tokenId",_),error:re,isInvalid:_e,rewaLabel:n,chainId:x,RewaIcon:he},Ie=(0,Rt.useMemo)(()=>Rt.default.createElement(Pu,{amount:A,rewaLabel:n,maxAmountMinusDust:R,tokenId:ie,isMaxClicked:S}),[A,n,R,ie,S]),ke={name:"amount",required:!0,value:A,placeholder:"Amount",handleBlur:w,"data-testid":"amount",handleChange:q,onFocus:b,usdPrice:we?y:void 0,error:s,isInvalid:g,InfoDustComponent:Ie},T={token:ve,inputAmount:A,onMaxClick:B,isMaxClicked:S,isMaxButtonVisible:E},j=l("amount")&&!ke.value,ge={hasErrors:ke.isInvalid||Ae.isInvalid||j,error:ke.error||Ae.error,className:Ur.error,"data-testid":ke.error?"amountError":"tokenIdError"},ye={"data-testid":`available-${(u=de==null?void 0:de.identifier)!=null?u:ie}`,"data-value":`${h} ${(c=de==null?void 0:de.identifier)!=null?c:ie}`,label:"Available",token:qe==null?void 0:qe.token,value:Gt({amount:ve.balance,decimals:ve.decimals||od.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(de==null?void 0:de.type)===fd.NftEnumType.NonFungibleDCDT?null:Rt.default.createElement(ta,{name:"tokenId",amountErrorProps:ge,tokenSelectProps:Ae,amountInputProps:ke,tokenBalanceProps:ye,maxButtonProps:T,label:"Amount",readonly:_})};});var qa=Xe((Fq,wa)=>{"use strict";Be();var Md=Object.create,ot=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,Dd=Object.getOwnPropertyNames,jd=Object.getPrototypeOf,zd=Object.prototype.hasOwnProperty,Fd=(u,c)=>()=>(u&&(c=u(u=0)),c),nt=(u,c)=>()=>(c||u((c={exports:{}}).exports,c),c.exports),Gd=(u,c)=>{for(var l in c)ot(u,l,{get:c[l],enumerable:!0})},ga=(u,c,l,f)=>{if(c&&typeof c=="object"||typeof c=="function")for(let m of Dd(c))!zd.call(u,m)&&m!==l&&ot(u,m,{get:()=>c[m],enumerable:!(f=Pd(c,m))||f.enumerable});return u},oe=(u,c,l)=>(l=u!=null?Md(jd(u)):{},ga(c||!u||!u.__esModule?ot(l,"default",{value:u,enumerable:!0}):l,u)),Vd=u=>ga(ot({},"__esModule",{value:!0}),u),Wd=nt(u=>{"use strict";z(),u.byteLength=x,u.toByteArray=A,u.fromByteArray=B;var c=[],l=[],f=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(v=0,_=m.length;v<_;++v)c[v]=m[v],l[m.charCodeAt(v)]=v;var v,_;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(s){var g=s.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var b=s.indexOf("=");b===-1&&(b=g);var h=b===g?0:4-b%4;return[b,h]}function x(s){var g=n(s),b=g[0],h=g[1];return(b+h)*3/4-h}function y(s,g,b){return(g+b)*3/4-b}function A(s){var g,b=n(s),h=b[0],S=b[1],E=new f(y(s,h,S)),R=0,D=S>0?h-4:h,N;for(N=0;N<D;N+=4)g=l[s.charCodeAt(N)]<<18|l[s.charCodeAt(N+1)]<<12|l[s.charCodeAt(N+2)]<<6|l[s.charCodeAt(N+3)],E[R++]=g>>16&255,E[R++]=g>>8&255,E[R++]=g&255;return S===2&&(g=l[s.charCodeAt(N)]<<2|l[s.charCodeAt(N+1)]>>4,E[R++]=g&255),S===1&&(g=l[s.charCodeAt(N)]<<10|l[s.charCodeAt(N+1)]<<4|l[s.charCodeAt(N+2)]>>2,E[R++]=g>>8&255,E[R++]=g&255),E}function w(s){return c[s>>18&63]+c[s>>12&63]+c[s>>6&63]+c[s&63]}function q(s,g,b){for(var h,S=[],E=g;E<b;E+=3)h=(s[E]<<16&16711680)+(s[E+1]<<8&65280)+(s[E+2]&255),S.push(w(h));return S.join("")}function B(s){for(var g,b=s.length,h=b%3,S=[],E=16383,R=0,D=b-h;R<D;R+=E)S.push(q(s,R,R+E>D?D:R+E));return h===1?(g=s[b-1],S.push(c[g>>2]+c[g<<4&63]+"==")):h===2&&(g=(s[b-2]<<8)+s[b-1],S.push(c[g>>10]+c[g>>4&63]+c[g<<2&63]+"=")),S.join("")}}),$d=nt(u=>{z(),u.read=function(c,l,f,m,v){var _,n,x=v*8-m-1,y=(1<<x)-1,A=y>>1,w=-7,q=f?v-1:0,B=f?-1:1,s=c[l+q];for(q+=B,_=s&(1<<-w)-1,s>>=-w,w+=x;w>0;_=_*256+c[l+q],q+=B,w-=8);for(n=_&(1<<-w)-1,_>>=-w,w+=m;w>0;n=n*256+c[l+q],q+=B,w-=8);if(_===0)_=1-A;else{if(_===y)return n?NaN:(s?-1:1)*(1/0);n=n+Math.pow(2,m),_=_-A}return(s?-1:1)*n*Math.pow(2,_-m)},u.write=function(c,l,f,m,v,_){var n,x,y,A=_*8-v-1,w=(1<<A)-1,q=w>>1,B=v===23?Math.pow(2,-24)-Math.pow(2,-77):0,s=m?0:_-1,g=m?1:-1,b=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(x=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+q>=1?l+=B/y:l+=B*Math.pow(2,1-q),l*y>=2&&(n++,y/=2),n+q>=w?(x=0,n=w):n+q>=1?(x=(l*y-1)*Math.pow(2,v),n=n+q):(x=l*Math.pow(2,q-1)*Math.pow(2,v),n=0));v>=8;c[f+s]=x&255,s+=g,x/=256,v-=8);for(n=n<<v|x,A+=v;A>0;c[f+s]=n&255,s+=g,n/=256,A-=8);c[f+s-g]|=b*128}}),Yd=nt(u=>{"use strict";z();var c=Wd(),l=$d(),f=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;u.Buffer=n,u.SlowBuffer=S,u.INSPECT_MAX_BYTES=50;var m=2147483647;u.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=v(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function v(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function _(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return x(e,r,t)}n.poolSize=8192;function x(e,r,t){if(typeof e=="string")return q(e,r);if(ArrayBuffer.isView(e))return s(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var i=b(e);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return x(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function A(e,r,t){return y(e),e<=0?_(e):r!==void 0?typeof t=="string"?_(e).fill(r,t):_(e).fill(r):_(e)}n.alloc=function(e,r,t){return A(e,r,t)};function w(e){return y(e),_(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function q(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=E(e,r)|0,o=_(t),i=o.write(e,r);return i!==t&&(o=o.slice(0,i)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=_(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function s(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function b(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=_(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?_(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,i=0,p=Math.min(t,o);i<p;++i)if(e[i]!==r[i]){t=e[i],o=r[i];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),i=0;for(t=0;t<e.length;++t){var p=e[t];if(H(p,Uint8Array))i+p.length>o.length?n.from(p).copy(o,i):Uint8Array.prototype.set.call(o,p,i);else if(n.isBuffer(p))p.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return o};function E(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ee(e).length;default:if(i)return o?-1:fe(e).length;r=(""+r).toLowerCase(),i=!0}}n.byteLength=E;function R(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return qe(this,r,t);case"latin1":case"binary":return Ae(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function D(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)D(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)D(this,r,r+3),D(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)D(this,r,r+7),D(this,r+1,r+6),D(this,r+2,r+5),D(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):R.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=u.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},f&&(n.prototype[f]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,i){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),r<0||t>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=t)return 0;if(o>=i)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var p=i-o,d=t-r,k=Math.min(p,d),O=this.slice(o,i),I=e.slice(r,t),U=0;U<k;++U)if(O[U]!==I[U]){p=O[U],d=I[U];break}return p<d?-1:d<p?1:0};function N(e,r,t,o,i){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=i?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(i)return-1;t=e.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,i);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,i);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,i){var p=1,d=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;p=2,d/=2,k/=2,t/=2}function O(xe,Se){return p===1?xe[Se]:xe.readUInt16BE(Se*p)}var I;if(i){var U=-1;for(I=t;I<d;I++)if(O(e,I)===O(r,U===-1?0:I-U)){if(U===-1&&(U=I),I-U+1===k)return U*p}else U!==-1&&(I-=I-U),U=-1}else for(t+k>d&&(t=d-k),I=t;I>=0;I--){for(var M=!0,ce=0;ce<k;ce++)if(O(e,I+ce)!==O(r,ce)){M=!1;break}if(M)return I}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return N(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return N(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var i=e.length-t;o?(o=Number(o),o>i&&(o=i)):o=i;var p=r.length;o>p/2&&(o=p/2);for(var d=0;d<o;++d){var k=parseInt(r.substr(d*2,2),16);if(me(k))return d;e[t+d]=k}return d}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Oe(r),e,t,o)}function be(e,r,t,o){return pe(Ee(r),e,t,o)}function ve(e,r,t,o){return pe(Ne(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-r;if((t===void 0||t>i)&&(t=i),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return be(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?c.fromByteArray(e):c.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],i=r;i<t;){var p=e[i],d=null,k=p>239?4:p>223?3:p>191?2:1;if(i+k<=t){var O,I,U,M;switch(k){case 1:p<128&&(d=p);break;case 2:O=e[i+1],(O&192)===128&&(M=(p&31)<<6|O&63,M>127&&(d=M));break;case 3:O=e[i+1],I=e[i+2],(O&192)===128&&(I&192)===128&&(M=(p&15)<<12|(O&63)<<6|I&63,M>2047&&(M<55296||M>57343)&&(d=M));break;case 4:O=e[i+1],I=e[i+2],U=e[i+3],(O&192)===128&&(I&192)===128&&(U&192)===128&&(M=(p&15)<<18|(O&63)<<12|(I&63)<<6|U&63,M>65535&&M<1114112&&(d=M))}}d===null?(d=65533,k=1):d>65535&&(d-=65536,o.push(d>>>10&1023|55296),d=56320|d&1023),o.push(d),i+=k}return we(o)}var ae=4096;function we(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function qe(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]&127);return o}function Ae(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var i="",p=r;p<t;++p)i+=Re[e[p]];return i}function ke(e,r,t){for(var o=e.slice(r,t),i="",p=0;p<o.length-1;p+=2)i+=String.fromCharCode(o[p]+o[p+1]*256);return i}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function T(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e+--r],i=1;r>0&&(i*=256);)o+=this[e+--r]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=r,i=1,p=this[e+--o];o>0&&(i*=256);)p+=this[e+--o]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*r)),p},n.prototype.readInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!1,52,8)};function j(e,r,t,o,i,p){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<p)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=1,d=0;for(this[r]=e&255;++d<t&&(p*=256);)this[r+d]=e/p&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=t-1,d=1;for(this[r+p]=e&255;--p>=0&&(d*=256);)this[r+p]=e/d&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=0,d=1,k=0;for(this[r]=e&255;++p<t&&(d*=256);)e<0&&k===0&&this[r+p-1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=t-1,d=1,k=0;for(this[r+p]=e&255;--p>=0&&(d*=256);)e<0&&k===0&&this[r+p+1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,i,p){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ye(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return ye(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return ye(this,e,r,!1,t)};function se(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var i=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),i},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var d=n.isBuffer(e)?e:n.from(e,o),k=d.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=d[p%k]}return this};var Ce=/[^+/0-9A-Za-z-_]/g;function Le(e){if(e=e.split("=")[0],e=e.trim().replace(Ce,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,i=null,p=[],d=0;d<o;++d){if(t=e.charCodeAt(d),t>55295&&t<57344){if(!i){if(t>56319){(r-=3)>-1&&p.push(239,191,189);continue}else if(d+1===o){(r-=3)>-1&&p.push(239,191,189);continue}i=t;continue}if(t<56320){(r-=3)>-1&&p.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(r-=3)>-1&&p.push(239,191,189);if(i=null,t<128){if((r-=1)<0)break;p.push(t)}else if(t<2048){if((r-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Oe(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Ne(e,r){for(var t,o,i,p=[],d=0;d<e.length&&!((r-=2)<0);++d)t=e.charCodeAt(d),o=t>>8,i=t%256,p.push(i),p.push(o);return p}function Ee(e){return c.toByteArray(Le(e))}function pe(e,r,t,o){for(var i=0;i<o&&!(i+t>=r.length||i>=e.length);++i)r[i+t]=e[i];return i}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Re=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,i=0;i<16;++i)r[o+i]=e[t]+e[i];return r}()}),Hd=nt((u,c)=>{z();var l=c.exports={},f,m;function v(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?f=setTimeout:f=v}catch(h){f=v}try{typeof clearTimeout=="function"?m=clearTimeout:m=_}catch(h){m=_}})();function n(h){if(f===setTimeout)return setTimeout(h,0);if((f===v||!f)&&setTimeout)return f=setTimeout,setTimeout(h,0);try{return f(h,0)}catch(S){try{return f.call(null,h,0)}catch(E){return f.call(this,h,0)}}}function x(h){if(m===clearTimeout)return clearTimeout(h);if((m===_||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(h);try{return m(h)}catch(S){try{return m.call(null,h)}catch(E){return m.call(this,h)}}}var y=[],A=!1,w,q=-1;function B(){!A||!w||(A=!1,w.length?y=w.concat(y):q=-1,y.length&&s())}function s(){if(!A){var h=n(B);A=!0;for(var S=y.length;S;){for(w=y,y=[];++q<S;)w&&w[q].run();q=-1,S=y.length}w=null,A=!1,x(h)}}l.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)S[E-1]=arguments[E];y.push(new g(h,S)),y.length===1&&!A&&n(s)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function b(){}l.on=b,l.addListener=b,l.once=b,l.off=b,l.removeListener=b,l.removeAllListeners=b,l.emit=b,l.prependListener=b,l.prependOnceListener=b,l.listeners=function(h){return[]},l.binding=function(h){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(h){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Zd,Xd,Jd,z=Fd(()=>{Zd=oe(Yd()),Xd=oe(Hd()),Jd=function(u){function c(){var f=this||self;return delete u.prototype.__magic__,f}if(typeof globalThis=="object")return globalThis;if(this)return c();u.defineProperty(u.prototype,"__magic__",{configurable:!0,get:c});var l=__magic__;return l}(Object)}),ba={};Gd(ba,{Data:()=>xf});wa.exports=Vd(ba);z();z();var qr=oe(a("react")),ca=oe(a("classnames"));z();var Kd=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Kd));var Lr={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};z();z();var va=oe(a("react"));z();var Qd=oe(a("react")),u8=(0,Qd.createContext)({});z();z();var ef=oe(a("react")),s8=a("@terradharitri/sdk-dapp/constants/index"),d8=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),f8=oe(a("bignumber.js")),m8=a("formik");z();z();z();var _8=a("bech32");z();z();z();var rf=(u,c)=>typeof c=="boolean"?c:Array.isArray(c)&&c.includes(u);z();z();var h8=a("@terradharitri/sdk-dapp/types/tokens.types");z();z();var g8=a("@terradharitri/sdk-dapp/constants"),b8=a("@terradharitri/sdk-dapp/utils/account/getAccount");z();z();var v8=a("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");z();var y8=a("@terradharitri/sdk-dapp/utils/buildUrlParams");z();var w8=oe(a("anchorme"));z();z();var q8=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),tf=a("@terradharitri/sdk-dapp/utils/operations/formatAmount"),E8=a("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),x8=a("@terradharitri/sdk-dapp/utils/operations/parseAmount");z();z();z();z();z();z();z();var of=oe(a("react")),S8=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),k8=a("formik");z();z();var A8=a("@terradharitri/sdk-dapp/constants/index"),I8=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),B8=oe(a("bignumber.js"));z();z();var T8=a("@terradharitri/sdk-dapp/constants/index");z();var U8=a("@terradharitri/sdk-dapp/constants/index");z();z();z();var C8=a("@terradharitri/sdk-dapp/constants/index"),L8=oe(a("bignumber.js"));z();var O8=a("@terradharitri/sdk-dapp/constants/index");z();var N8=a("@terradharitri/sdk-dapp/constants/index");z();z();var R8=a("@terradharitri/sdk-core"),M8=a("@terradharitri/sdk-dapp/constants/index"),P8=oe(a("bignumber.js"));z();z();var D8=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");z();var j8=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");z();var z8=oe(a("bignumber.js"));z();var F8=a("@terradharitri/sdk-dapp/constants/index"),G8=a("@terradharitri/sdk-dapp/utils/smartContracts"),V8=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),W8=oe(a("bignumber.js"));z();var $8=oe(a("bignumber.js"));z();z();var Y8=oe(a("axios"));z();z();z();var H8=a("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");z();var Z8=a("@terradharitri/sdk-dapp/constants/index");z();z();z();var Wt=a("@terradharitri/sdk-dapp/constants/index"),nf=oe(a("bignumber.js")),ua,sa,da,af=(0,tf.formatAmount)({input:String((ua=Wt.GAS_PRICE)!=null?ua:1e9),decimals:(sa=Wt.DECIMALS)!=null?sa:18,showLastNonZeroDecimal:!0,digits:(da=Wt.DIGITS)!=null?da:4}),X8=new nf.default(af).times(10).toString(10);z();var J8=a("@terradharitri/sdk-dapp/constants/index"),K8=oe(a("bignumber.js"));z();var Q8=oe(a("bignumber.js"));z();z();var e3=a("yup");z();var fa=a("@terradharitri/sdk-dapp/constants/ledger.constants"),lf=oe(a("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),$t=a("yup"),pf=(0,$t.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(u){let{ledger:c}=this.parent;return!(c&&u&&u.length&&!c.ledgerDataActive)}),cf=(0,$t.string)().test({name:"hashSign",test:function(u){let{ledger:c,isGuarded:l}=this.parent;if(c){let{ledgerWithHashSign:f,ledgerWithGuardians:m}=(0,lf.default)(c.version);if(u&&u.length>300&&!f)return this.createError({message:`Data too long. You need at least DharitrI app version ${fa.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!m)return this.createError({message:`You need at least DharitrI app version ${fa.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),uf=[pf,cf],r3=uf.reduce((u,c)=>u.concat(c),(0,$t.string)());z();var t3=a("@terradharitri/sdk-dapp/constants/index"),o3=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),n3=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),a3=a("yup");z();var i3=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),l3=oe(a("bignumber.js")),p3=a("yup");z();var c3=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),u3=oe(a("bignumber.js")),s3=a("yup");z();var d3=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),f3=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),m3=oe(a("bignumber.js")),_3=a("yup");z();var h3=oe(a("bignumber.js")),g3=a("yup");z();var b3=a("@terradharitri/sdk-dapp/constants/index"),v3=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),y3=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),w3=oe(a("bignumber.js")),q3=a("yup");z();var E3=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),x3=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),S3=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),k3=oe(a("bignumber.js")),A3=a("yup");z();var I3=oe(a("bignumber.js")),B3=a("yup");z();var T3=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),U3=a("yup");z();var C3=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),L3=a("yup");z();z();var O3=(0,of.createContext)({});z();z();var sf=oe(a("react")),N3=a("formik"),R3=oe(a("lodash/uniqBy"));z();z();z();var M3=oe(a("axios"));z();z();var P3=oe(a("axios"));z();z();var D3=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),j3=a("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),z3=oe(a("axios")),F3=oe(a("lodash/uniqBy"));z();var G3=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),V3=oe(a("axios"));z();var W3=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),$3=oe(a("axios"));z();z();var df=oe(a("react")),Y3=(0,df.createContext)({});z();z();var H3=a("react"),Z3=a("@terradharitri/sdk-dapp/constants/index"),X3=a("@terradharitri/sdk-dapp/types/enums.types");z();var J3=(0,sf.createContext)({});z();z();var K3=a("@terradharitri/sdk-dapp/constants/index"),Q3=a("formik");z();z();var ff=oe(a("react")),eq=a("@terradharitri/sdk-dapp/constants/index"),rq=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),tq=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),oq=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),nq=oe(a("bignumber.js")),aq=a("formik");z();z();z();z();var iq=oe(a("bignumber.js"));z();var lq=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),pq=oe(a("bignumber.js"));z();z();var cq=a("react"),uq=a("@terradharitri/sdk-dapp/constants/index"),sq=a("@terradharitri/sdk-dapp/utils/smartContracts"),dq=oe(a("bignumber.js")),fq=a("formik");z();var mq=a("react");z();z();var _q=a("@terradharitri/sdk-dapp/constants/index"),hq=oe(a("bignumber.js")),gq=(0,ff.createContext)({}),bq=(0,ef.createContext)({});z();z();var mf=oe(a("react")),vq=a("formik"),yq=(0,mf.createContext)({});z();z();var _f=oe(a("react")),wq=a("formik");z();z();z();var qq=a("react"),Eq=a("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),xq=oe(a("lodash/uniqBy"));z();z();var Sq=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),kq=a("@terradharitri/sdk-dapp/utils");z();var Aq=a("react");z();var Iq=a("react"),Bq=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Tq=(0,_f.createContext)({});z();z();var hf=oe(a("react")),Uq=a("formik");z();z();z();z();z();var Cq=a("react"),Lq=a("@terradharitri/sdk-dapp/utils");z();var Oq=a("react"),Nq=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");z();z();var Rq=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Mq=oe(a("axios"));z();var Pq=oe(a("axios")),Dq=(0,hf.createContext)({}),gf=(0,va.createContext)({});function Yt(){return(0,va.useContext)(gf)}z();var bf=`:root {
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

.dapp-core-component__amountSelect-module__amount {
  display: block;
  position: relative;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper {
  align-items: center;
  background: var(--dapp-form-input-bg);
  border: 1px solid var(--dapp-form-input-bg);
  border-radius: var(--dapp-form-input-border-radius);
  display: flex;
  position: relative;
  padding: 4px;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper.dapp-core-component__amountSelect-module__error {
  border-color: var(--dapp-form-error-color);
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper.dapp-core-component__amountSelect-module__disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper .dapp-core-component__amountSelect-module__interaction {
  align-items: center;
  bottom: 0;
  display: flex;
  position: absolute;
  right: 4px;
  top: 0;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__label label {
  margin: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bf));var vf={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};z();z();z();var ar=oe(a("react")),ma=a("@fortawesome/free-solid-svg-icons"),_a=a("@fortawesome/react-fontawesome"),yf=a("formik");z();z();z();var jq=oe(a("react")),zq=a("@terradharitri/sdk-dapp/constants/index"),ya=()=>{let{formInfo:{isRewaTransaction:u,readonly:c},dataFieldInfo:{isAdvancedModeEnabled:l}}=Yt();return l?!1:!u||rf("data",c)};z();var wf=`.dapp-core-component__styles-module__advanced {
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
  top: 0;
  color: var(--dapp-form-label-color);
  transition: all 200ms ease;
  right: 0;
  cursor: pointer;
  position: absolute;
}
.dapp-core-component__styles-module__advanced svg path {
  transition: all 200ms ease;
  fill: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__advanced:hover .dapp-core-component__styles-module__advanced-text {
  color: var(--dapp-form-btn-bg);
}
.dapp-core-component__styles-module__advanced:hover svg path {
  fill: var(--dapp-form-btn-bg);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wf));var tt={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"},qf=()=>{let{formInfo:{readonly:u,isRewaTransaction:c}}=Yt(),{setFieldValue:l,values:f}=(0,yf.useFormikContext)(),[m,v]=(0,ar.useState)(!1),[_,n]=(0,ar.useState)(!1),x=ya(),y=!m&&!u&&x&&Boolean(f.data),A=()=>{v(!0),l("isAdvancedModeEnabled",!0)},w=()=>{n(!0),setTimeout(()=>{n(!1)},5e3)};return(0,ar.useEffect)(()=>{!c&&m&&v(!1)},[c,f.amount]),y?_?ar.default.createElement("div",{className:tt.advanced,"data-testid":"confirmAdvancedMode",onClick:A},ar.default.createElement(_a.FontAwesomeIcon,{icon:ma.faCheck,className:"i-icon"}),ar.default.createElement("span",{className:tt.advancedText},"Confirm")):ar.default.createElement("div",{"data-testid":"enableAdvancedMode",className:tt.advanced,onClick:w},ar.default.createElement(_a.FontAwesomeIcon,{icon:ma.faScrewdriverWrench,className:"i-icon"}),ar.default.createElement("span",{className:tt.advancedText},"Advanced")):null};z();var Ef=`:root {
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
  position: relative;
}
.dapp-core-component__styles-module__data .dapp-core-component__styles-module__wrapper {
  display: flex;
  position: relative;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ef));var ha={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"},xf=({className:u})=>{let{dataFieldInfo:{data:c,dataError:l,isDataInvalid:f,onChange:m,onBlur:v}}=Yt(),_=ya();return qr.default.createElement("div",{className:(0,ca.default)(ha.data,u)},qr.default.createElement("div",{className:vf.label},qr.default.createElement("label",{htmlFor:"data",className:Lr.label},"Data"),qr.default.createElement(qf,null)),qr.default.createElement("div",{className:ha.wrapper},qr.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:_,"data-testid":"data",value:c,onBlur:v,onChange:m,spellCheck:"false",placeholder:"Add transaction data",className:(0,ca.default)(Lr.textarea,{[Lr.invalid]:f,[Lr.disabled]:_})})),f&&qr.default.createElement("div",{className:Lr.error,"data-testid":"dataError"},l))};});var Ca=Xe((ES,Ua)=>{"use strict";Be();var Sf=Object.create,at=Object.defineProperty,kf=Object.getOwnPropertyDescriptor,Af=Object.getOwnPropertyNames,If=Object.getPrototypeOf,Bf=Object.prototype.hasOwnProperty,Tf=(u,c)=>()=>(u&&(c=u(u=0)),c),it=(u,c)=>()=>(c||u((c={exports:{}}).exports,c),c.exports),Uf=(u,c)=>{for(var l in c)at(u,l,{get:c[l],enumerable:!0})},Ia=(u,c,l,f)=>{if(c&&typeof c=="object"||typeof c=="function")for(let m of Af(c))!Bf.call(u,m)&&m!==l&&at(u,m,{get:()=>c[m],enumerable:!(f=kf(c,m))||f.enumerable});return u},ee=(u,c,l)=>(l=u!=null?Sf(If(u)):{},Ia(c||!u||!u.__esModule?at(l,"default",{value:u,enumerable:!0}):l,u)),Cf=u=>Ia(at({},"__esModule",{value:!0}),u),Lf=it(u=>{"use strict";G(),u.byteLength=x,u.toByteArray=A,u.fromByteArray=B;var c=[],l=[],f=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(v=0,_=m.length;v<_;++v)c[v]=m[v],l[m.charCodeAt(v)]=v;var v,_;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(s){var g=s.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var b=s.indexOf("=");b===-1&&(b=g);var h=b===g?0:4-b%4;return[b,h]}function x(s){var g=n(s),b=g[0],h=g[1];return(b+h)*3/4-h}function y(s,g,b){return(g+b)*3/4-b}function A(s){var g,b=n(s),h=b[0],S=b[1],E=new f(y(s,h,S)),R=0,D=S>0?h-4:h,N;for(N=0;N<D;N+=4)g=l[s.charCodeAt(N)]<<18|l[s.charCodeAt(N+1)]<<12|l[s.charCodeAt(N+2)]<<6|l[s.charCodeAt(N+3)],E[R++]=g>>16&255,E[R++]=g>>8&255,E[R++]=g&255;return S===2&&(g=l[s.charCodeAt(N)]<<2|l[s.charCodeAt(N+1)]>>4,E[R++]=g&255),S===1&&(g=l[s.charCodeAt(N)]<<10|l[s.charCodeAt(N+1)]<<4|l[s.charCodeAt(N+2)]>>2,E[R++]=g>>8&255,E[R++]=g&255),E}function w(s){return c[s>>18&63]+c[s>>12&63]+c[s>>6&63]+c[s&63]}function q(s,g,b){for(var h,S=[],E=g;E<b;E+=3)h=(s[E]<<16&16711680)+(s[E+1]<<8&65280)+(s[E+2]&255),S.push(w(h));return S.join("")}function B(s){for(var g,b=s.length,h=b%3,S=[],E=16383,R=0,D=b-h;R<D;R+=E)S.push(q(s,R,R+E>D?D:R+E));return h===1?(g=s[b-1],S.push(c[g>>2]+c[g<<4&63]+"==")):h===2&&(g=(s[b-2]<<8)+s[b-1],S.push(c[g>>10]+c[g>>4&63]+c[g<<2&63]+"=")),S.join("")}}),Of=it(u=>{G(),u.read=function(c,l,f,m,v){var _,n,x=v*8-m-1,y=(1<<x)-1,A=y>>1,w=-7,q=f?v-1:0,B=f?-1:1,s=c[l+q];for(q+=B,_=s&(1<<-w)-1,s>>=-w,w+=x;w>0;_=_*256+c[l+q],q+=B,w-=8);for(n=_&(1<<-w)-1,_>>=-w,w+=m;w>0;n=n*256+c[l+q],q+=B,w-=8);if(_===0)_=1-A;else{if(_===y)return n?NaN:(s?-1:1)*(1/0);n=n+Math.pow(2,m),_=_-A}return(s?-1:1)*n*Math.pow(2,_-m)},u.write=function(c,l,f,m,v,_){var n,x,y,A=_*8-v-1,w=(1<<A)-1,q=w>>1,B=v===23?Math.pow(2,-24)-Math.pow(2,-77):0,s=m?0:_-1,g=m?1:-1,b=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(x=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+q>=1?l+=B/y:l+=B*Math.pow(2,1-q),l*y>=2&&(n++,y/=2),n+q>=w?(x=0,n=w):n+q>=1?(x=(l*y-1)*Math.pow(2,v),n=n+q):(x=l*Math.pow(2,q-1)*Math.pow(2,v),n=0));v>=8;c[f+s]=x&255,s+=g,x/=256,v-=8);for(n=n<<v|x,A+=v;A>0;c[f+s]=n&255,s+=g,n/=256,A-=8);c[f+s-g]|=b*128}}),Nf=it(u=>{"use strict";G();var c=Lf(),l=Of(),f=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;u.Buffer=n,u.SlowBuffer=S,u.INSPECT_MAX_BYTES=50;var m=2147483647;u.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=v(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function v(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function _(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return x(e,r,t)}n.poolSize=8192;function x(e,r,t){if(typeof e=="string")return q(e,r);if(ArrayBuffer.isView(e))return s(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var i=b(e);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return x(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function A(e,r,t){return y(e),e<=0?_(e):r!==void 0?typeof t=="string"?_(e).fill(r,t):_(e).fill(r):_(e)}n.alloc=function(e,r,t){return A(e,r,t)};function w(e){return y(e),_(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function q(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=E(e,r)|0,o=_(t),i=o.write(e,r);return i!==t&&(o=o.slice(0,i)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=_(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function s(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function b(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=_(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?_(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,i=0,p=Math.min(t,o);i<p;++i)if(e[i]!==r[i]){t=e[i],o=r[i];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),i=0;for(t=0;t<e.length;++t){var p=e[t];if(H(p,Uint8Array))i+p.length>o.length?n.from(p).copy(o,i):Uint8Array.prototype.set.call(o,p,i);else if(n.isBuffer(p))p.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return o};function E(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ee(e).length;default:if(i)return o?-1:fe(e).length;r=(""+r).toLowerCase(),i=!0}}n.byteLength=E;function R(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return qe(this,r,t);case"latin1":case"binary":return Ae(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function D(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)D(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)D(this,r,r+3),D(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)D(this,r,r+7),D(this,r+1,r+6),D(this,r+2,r+5),D(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):R.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=u.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},f&&(n.prototype[f]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,i){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),r<0||t>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=t)return 0;if(o>=i)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var p=i-o,d=t-r,k=Math.min(p,d),O=this.slice(o,i),I=e.slice(r,t),U=0;U<k;++U)if(O[U]!==I[U]){p=O[U],d=I[U];break}return p<d?-1:d<p?1:0};function N(e,r,t,o,i){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=i?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(i)return-1;t=e.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,i);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,i);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,i){var p=1,d=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;p=2,d/=2,k/=2,t/=2}function O(xe,Se){return p===1?xe[Se]:xe.readUInt16BE(Se*p)}var I;if(i){var U=-1;for(I=t;I<d;I++)if(O(e,I)===O(r,U===-1?0:I-U)){if(U===-1&&(U=I),I-U+1===k)return U*p}else U!==-1&&(I-=I-U),U=-1}else for(t+k>d&&(t=d-k),I=t;I>=0;I--){for(var M=!0,ce=0;ce<k;ce++)if(O(e,I+ce)!==O(r,ce)){M=!1;break}if(M)return I}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return N(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return N(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var i=e.length-t;o?(o=Number(o),o>i&&(o=i)):o=i;var p=r.length;o>p/2&&(o=p/2);for(var d=0;d<o;++d){var k=parseInt(r.substr(d*2,2),16);if(me(k))return d;e[t+d]=k}return d}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Oe(r),e,t,o)}function be(e,r,t,o){return pe(Ee(r),e,t,o)}function ve(e,r,t,o){return pe(Ne(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-r;if((t===void 0||t>i)&&(t=i),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return be(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?c.fromByteArray(e):c.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],i=r;i<t;){var p=e[i],d=null,k=p>239?4:p>223?3:p>191?2:1;if(i+k<=t){var O,I,U,M;switch(k){case 1:p<128&&(d=p);break;case 2:O=e[i+1],(O&192)===128&&(M=(p&31)<<6|O&63,M>127&&(d=M));break;case 3:O=e[i+1],I=e[i+2],(O&192)===128&&(I&192)===128&&(M=(p&15)<<12|(O&63)<<6|I&63,M>2047&&(M<55296||M>57343)&&(d=M));break;case 4:O=e[i+1],I=e[i+2],U=e[i+3],(O&192)===128&&(I&192)===128&&(U&192)===128&&(M=(p&15)<<18|(O&63)<<12|(I&63)<<6|U&63,M>65535&&M<1114112&&(d=M))}}d===null?(d=65533,k=1):d>65535&&(d-=65536,o.push(d>>>10&1023|55296),d=56320|d&1023),o.push(d),i+=k}return we(o)}var ae=4096;function we(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function qe(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]&127);return o}function Ae(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var i="",p=r;p<t;++p)i+=Re[e[p]];return i}function ke(e,r,t){for(var o=e.slice(r,t),i="",p=0;p<o.length-1;p+=2)i+=String.fromCharCode(o[p]+o[p+1]*256);return i}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function T(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e+--r],i=1;r>0&&(i*=256);)o+=this[e+--r]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=r,i=1,p=this[e+--o];o>0&&(i*=256);)p+=this[e+--o]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*r)),p},n.prototype.readInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!1,52,8)};function j(e,r,t,o,i,p){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<p)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=1,d=0;for(this[r]=e&255;++d<t&&(p*=256);)this[r+d]=e/p&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=t-1,d=1;for(this[r+p]=e&255;--p>=0&&(d*=256);)this[r+p]=e/d&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=0,d=1,k=0;for(this[r]=e&255;++p<t&&(d*=256);)e<0&&k===0&&this[r+p-1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=t-1,d=1,k=0;for(this[r+p]=e&255;--p>=0&&(d*=256);)e<0&&k===0&&this[r+p+1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,i,p){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ye(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return ye(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return ye(this,e,r,!1,t)};function se(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var i=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),i},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var d=n.isBuffer(e)?e:n.from(e,o),k=d.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=d[p%k]}return this};var Ce=/[^+/0-9A-Za-z-_]/g;function Le(e){if(e=e.split("=")[0],e=e.trim().replace(Ce,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,i=null,p=[],d=0;d<o;++d){if(t=e.charCodeAt(d),t>55295&&t<57344){if(!i){if(t>56319){(r-=3)>-1&&p.push(239,191,189);continue}else if(d+1===o){(r-=3)>-1&&p.push(239,191,189);continue}i=t;continue}if(t<56320){(r-=3)>-1&&p.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(r-=3)>-1&&p.push(239,191,189);if(i=null,t<128){if((r-=1)<0)break;p.push(t)}else if(t<2048){if((r-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Oe(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Ne(e,r){for(var t,o,i,p=[],d=0;d<e.length&&!((r-=2)<0);++d)t=e.charCodeAt(d),o=t>>8,i=t%256,p.push(i),p.push(o);return p}function Ee(e){return c.toByteArray(Le(e))}function pe(e,r,t,o){for(var i=0;i<o&&!(i+t>=r.length||i>=e.length);++i)r[i+t]=e[i];return i}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Re=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,i=0;i<16;++i)r[o+i]=e[t]+e[i];return r}()}),Rf=it((u,c)=>{G();var l=c.exports={},f,m;function v(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?f=setTimeout:f=v}catch(h){f=v}try{typeof clearTimeout=="function"?m=clearTimeout:m=_}catch(h){m=_}})();function n(h){if(f===setTimeout)return setTimeout(h,0);if((f===v||!f)&&setTimeout)return f=setTimeout,setTimeout(h,0);try{return f(h,0)}catch(S){try{return f.call(null,h,0)}catch(E){return f.call(this,h,0)}}}function x(h){if(m===clearTimeout)return clearTimeout(h);if((m===_||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(h);try{return m(h)}catch(S){try{return m.call(null,h)}catch(E){return m.call(this,h)}}}var y=[],A=!1,w,q=-1;function B(){!A||!w||(A=!1,w.length?y=w.concat(y):q=-1,y.length&&s())}function s(){if(!A){var h=n(B);A=!0;for(var S=y.length;S;){for(w=y,y=[];++q<S;)w&&w[q].run();q=-1,S=y.length}w=null,A=!1,x(h)}}l.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)S[E-1]=arguments[E];y.push(new g(h,S)),y.length===1&&!A&&n(s)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function b(){}l.on=b,l.addListener=b,l.once=b,l.off=b,l.removeListener=b,l.removeAllListeners=b,l.emit=b,l.prependListener=b,l.prependOnceListener=b,l.listeners=function(h){return[]},l.binding=function(h){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(h){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Mf,Pf,Df,G=Tf(()=>{Mf=ee(Nf()),Pf=ee(Rf()),Df=function(u){function c(){var f=this||self;return delete u.prototype.__magic__,f}if(typeof globalThis=="object")return globalThis;if(this)return c();u.defineProperty(u.prototype,"__magic__",{configurable:!0,get:c});var l=__magic__;return l}(Object)}),Ba={};Uf(Ba,{GasLimit:()=>fm});Ua.exports=Cf(Ba);G();G();var fr=ee(a("react")),jf=a("@fortawesome/free-solid-svg-icons"),zf=a("@fortawesome/react-fontawesome"),Ff=ee(a("bignumber.js")),Ea=ee(a("classnames")),Gf=a("react-number-format");G();var Vf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vf));var Or={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};G();G();var Ta=ee(a("react"));G();var Wf=ee(a("react")),Gq=(0,Wf.createContext)({});G();G();var $f=ee(a("react")),Vq=a("@terradharitri/sdk-dapp/constants/index"),Wq=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),$q=ee(a("bignumber.js")),Yq=a("formik");G();G();G();var Hq=a("bech32");G();G();G();var Yf=(u,c)=>typeof c=="boolean"?c:Array.isArray(c)&&c.includes(u);G();G();var Zq=a("@terradharitri/sdk-dapp/types/tokens.types");G();G();var Xq=a("@terradharitri/sdk-dapp/constants"),Jq=a("@terradharitri/sdk-dapp/utils/account/getAccount");G();G();var Kq=a("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");G();var Qq=a("@terradharitri/sdk-dapp/utils/buildUrlParams");G();var eE=ee(a("anchorme"));G();G();var rE=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Hf=a("@terradharitri/sdk-dapp/utils/operations/formatAmount"),tE=a("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),oE=a("@terradharitri/sdk-dapp/utils/operations/parseAmount");G();G();G();G();G();G();G();var Zf=ee(a("react")),nE=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),aE=a("formik");G();G();var iE=a("@terradharitri/sdk-dapp/constants/index"),lE=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),pE=ee(a("bignumber.js"));G();G();var cE=a("@terradharitri/sdk-dapp/constants/index");G();var uE=a("@terradharitri/sdk-dapp/constants/index");G();G();G();var sE=a("@terradharitri/sdk-dapp/constants/index"),dE=ee(a("bignumber.js"));G();var fE=a("@terradharitri/sdk-dapp/constants/index");G();var mE=a("@terradharitri/sdk-dapp/constants/index");G();G();var _E=a("@terradharitri/sdk-core"),hE=a("@terradharitri/sdk-dapp/constants/index"),gE=ee(a("bignumber.js"));G();G();var bE=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");G();var vE=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");G();var yE=ee(a("bignumber.js"));G();var wE=a("@terradharitri/sdk-dapp/constants/index"),qE=a("@terradharitri/sdk-dapp/utils/smartContracts"),EE=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),xE=ee(a("bignumber.js"));G();var SE=ee(a("bignumber.js"));G();G();var kE=ee(a("axios"));G();G();G();var AE=a("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");G();var IE=a("@terradharitri/sdk-dapp/constants/index");G();G();G();var Ht=a("@terradharitri/sdk-dapp/constants/index"),Xf=ee(a("bignumber.js")),xa,Sa,ka,Jf=(0,Hf.formatAmount)({input:String((xa=Ht.GAS_PRICE)!=null?xa:1e9),decimals:(Sa=Ht.DECIMALS)!=null?Sa:18,showLastNonZeroDecimal:!0,digits:(ka=Ht.DIGITS)!=null?ka:4}),BE=new Xf.default(Jf).times(10).toString(10);G();var TE=a("@terradharitri/sdk-dapp/constants/index"),UE=ee(a("bignumber.js"));G();var CE=ee(a("bignumber.js"));G();G();var LE=a("yup");G();var Aa=a("@terradharitri/sdk-dapp/constants/ledger.constants"),Kf=ee(a("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Zt=a("yup"),Qf=(0,Zt.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(u){let{ledger:c}=this.parent;return!(c&&u&&u.length&&!c.ledgerDataActive)}),em=(0,Zt.string)().test({name:"hashSign",test:function(u){let{ledger:c,isGuarded:l}=this.parent;if(c){let{ledgerWithHashSign:f,ledgerWithGuardians:m}=(0,Kf.default)(c.version);if(u&&u.length>300&&!f)return this.createError({message:`Data too long. You need at least DharitrI app version ${Aa.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!m)return this.createError({message:`You need at least DharitrI app version ${Aa.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),rm=[Qf,em],OE=rm.reduce((u,c)=>u.concat(c),(0,Zt.string)());G();var NE=a("@terradharitri/sdk-dapp/constants/index"),RE=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ME=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),PE=a("yup");G();var DE=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),jE=ee(a("bignumber.js")),zE=a("yup");G();var FE=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),GE=ee(a("bignumber.js")),VE=a("yup");G();var WE=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),$E=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),YE=ee(a("bignumber.js")),HE=a("yup");G();var ZE=ee(a("bignumber.js")),XE=a("yup");G();var JE=a("@terradharitri/sdk-dapp/constants/index"),KE=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),QE=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ex=ee(a("bignumber.js")),rx=a("yup");G();var tx=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ox=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),nx=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ax=ee(a("bignumber.js")),ix=a("yup");G();var lx=ee(a("bignumber.js")),px=a("yup");G();var cx=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ux=a("yup");G();var sx=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),dx=a("yup");G();G();var fx=(0,Zf.createContext)({});G();G();var tm=ee(a("react")),mx=a("formik"),_x=ee(a("lodash/uniqBy"));G();G();G();var hx=ee(a("axios"));G();G();var gx=ee(a("axios"));G();G();var bx=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),vx=a("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),yx=ee(a("axios")),wx=ee(a("lodash/uniqBy"));G();var qx=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ex=ee(a("axios"));G();var xx=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),Sx=ee(a("axios"));G();G();var om=ee(a("react")),kx=(0,om.createContext)({});G();G();var Ax=a("react"),Ix=a("@terradharitri/sdk-dapp/constants/index"),Bx=a("@terradharitri/sdk-dapp/types/enums.types");G();var Tx=(0,tm.createContext)({});G();G();var Ux=a("@terradharitri/sdk-dapp/constants/index"),Cx=a("formik");G();G();var nm=ee(a("react")),Lx=a("@terradharitri/sdk-dapp/constants/index"),Ox=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Nx=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Rx=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Mx=ee(a("bignumber.js")),Px=a("formik");G();G();G();G();var Dx=ee(a("bignumber.js"));G();var jx=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),zx=ee(a("bignumber.js"));G();G();var Fx=a("react"),Gx=a("@terradharitri/sdk-dapp/constants/index"),Vx=a("@terradharitri/sdk-dapp/utils/smartContracts"),Wx=ee(a("bignumber.js")),$x=a("formik");G();var Yx=a("react");G();G();var Hx=a("@terradharitri/sdk-dapp/constants/index"),Zx=ee(a("bignumber.js")),Xx=(0,nm.createContext)({}),Jx=(0,$f.createContext)({});G();G();var am=ee(a("react")),Kx=a("formik"),Qx=(0,am.createContext)({});G();G();var im=ee(a("react")),eS=a("formik");G();G();G();var rS=a("react"),tS=a("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),oS=ee(a("lodash/uniqBy"));G();G();var nS=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),aS=a("@terradharitri/sdk-dapp/utils");G();var iS=a("react");G();var lS=a("react"),pS=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),cS=(0,im.createContext)({});G();G();var lm=ee(a("react")),uS=a("formik");G();G();G();G();G();var sS=a("react"),dS=a("@terradharitri/sdk-dapp/utils");G();var fS=a("react"),mS=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");G();G();var _S=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),hS=ee(a("axios"));G();var gS=ee(a("axios")),bS=(0,lm.createContext)({}),pm=(0,Ta.createContext)({});function cm(){return(0,Ta.useContext)(pm)}G();G();var vS=a("@terradharitri/sdk-dapp/constants/index"),yS=a("@terradharitri/sdk-dapp/utils/validation"),wS=ee(a("bignumber.js"));G();G();var qS=a("react");G();var um=ee(a("bignumber.js")),sm=u=>{let[c,l]=u.split(""),f=new um.default(c).isZero();return Boolean(f&&l&&l!==".")};G();var dm=`:root {
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

.dapp-core-component__styles-module__gas {
  position: relative;
}
.dapp-core-component__styles-module__gas:last-child {
  margin-bottom: 0;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper {
  position: relative;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__input {
  display: initial;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__input.dapp-core-component__styles-module__spaced {
  padding-right: 44px;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions {
  right: 0;
  top: 0;
  position: absolute;
  bottom: 0;
  display: flex;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action {
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:hover .dapp-core-component__styles-module__icon {
  color: #23f7dd;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:not(:first-child) {
  position: relative;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:not(:first-child):before {
  background-color: var(--dapp-form-placeholder-color);
  width: 1px;
  top: 16px;
  bottom: 16px;
  left: 0;
  content: "";
  position: absolute;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action .dapp-core-component__styles-module__icon {
  color: var(--dapp-form-placeholder-color);
  transition: all 200ms ease;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dm));var mr={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},fm=()=>{let{formInfo:u,gasInfo:c}=cm(),{readonly:l}=u,{defaultGasLimit:f,onResetGasLimit:m,onChangeGasLimit:v,onBlurGasLimit:_,gasLimit:n,gasLimitError:x,isGasLimitInvalid:y}=c,A=g=>{g.preventDefault(),m()},w=({value:g,floatValue:b})=>(!b||!(0,Ff.default)(b).isNaN())&&!sm(g),q=g=>{v(g.value,!0)},B=n!==f&&!l,s=Yf("gasLimit",l);return fr.default.createElement("div",{className:mr.gas},fr.default.createElement("label",{className:Or.label,htmlFor:"gasLimit"},"Gas Limit"),fr.default.createElement("div",{className:mr.wrapper},fr.default.createElement(Gf.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:s,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:_,onValueChange:q,required:!0,isAllowed:w,thousandSeparator:",",thousandsGroupStyle:"thousand",value:n,valueIsNumericString:!0,allowNegative:!1,className:(0,Ea.default)(Or.input,mr.input,{[Or.disabled]:s,[Or.invalid]:y,[mr.spaced]:B})}),B&&fr.default.createElement("div",{className:mr.actions},fr.default.createElement("div",{onClick:A,"data-testid":"gasLimitResetBtn",className:(0,Ea.default)(mr.action,{[mr.disabled]:s})},fr.default.createElement(zf.FontAwesomeIcon,{icon:jf.faUndo,className:mr.icon}))),y&&fr.default.createElement("div",{className:Or.error,"data-testid":"gasLimitError"},x)))};});var Va=Xe((a9,Ga)=>{"use strict";Be();var mm=Object.create,lt=Object.defineProperty,_m=Object.getOwnPropertyDescriptor,hm=Object.getOwnPropertyNames,gm=Object.getPrototypeOf,bm=Object.prototype.hasOwnProperty,vm=(u,c)=>()=>(u&&(c=u(u=0)),c),pt=(u,c)=>()=>(c||u((c={exports:{}}).exports,c),c.exports),ym=(u,c)=>{for(var l in c)lt(u,l,{get:c[l],enumerable:!0})},Pa=(u,c,l,f)=>{if(c&&typeof c=="object"||typeof c=="function")for(let m of hm(c))!bm.call(u,m)&&m!==l&&lt(u,m,{get:()=>c[m],enumerable:!(f=_m(c,m))||f.enumerable});return u},Q=(u,c,l)=>(l=u!=null?mm(gm(u)):{},Pa(c||!u||!u.__esModule?lt(l,"default",{value:u,enumerable:!0}):l,u)),wm=u=>Pa(lt({},"__esModule",{value:!0}),u),qm=pt(u=>{"use strict";F(),u.byteLength=x,u.toByteArray=A,u.fromByteArray=B;var c=[],l=[],f=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(v=0,_=m.length;v<_;++v)c[v]=m[v],l[m.charCodeAt(v)]=v;var v,_;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(s){var g=s.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var b=s.indexOf("=");b===-1&&(b=g);var h=b===g?0:4-b%4;return[b,h]}function x(s){var g=n(s),b=g[0],h=g[1];return(b+h)*3/4-h}function y(s,g,b){return(g+b)*3/4-b}function A(s){var g,b=n(s),h=b[0],S=b[1],E=new f(y(s,h,S)),R=0,D=S>0?h-4:h,N;for(N=0;N<D;N+=4)g=l[s.charCodeAt(N)]<<18|l[s.charCodeAt(N+1)]<<12|l[s.charCodeAt(N+2)]<<6|l[s.charCodeAt(N+3)],E[R++]=g>>16&255,E[R++]=g>>8&255,E[R++]=g&255;return S===2&&(g=l[s.charCodeAt(N)]<<2|l[s.charCodeAt(N+1)]>>4,E[R++]=g&255),S===1&&(g=l[s.charCodeAt(N)]<<10|l[s.charCodeAt(N+1)]<<4|l[s.charCodeAt(N+2)]>>2,E[R++]=g>>8&255,E[R++]=g&255),E}function w(s){return c[s>>18&63]+c[s>>12&63]+c[s>>6&63]+c[s&63]}function q(s,g,b){for(var h,S=[],E=g;E<b;E+=3)h=(s[E]<<16&16711680)+(s[E+1]<<8&65280)+(s[E+2]&255),S.push(w(h));return S.join("")}function B(s){for(var g,b=s.length,h=b%3,S=[],E=16383,R=0,D=b-h;R<D;R+=E)S.push(q(s,R,R+E>D?D:R+E));return h===1?(g=s[b-1],S.push(c[g>>2]+c[g<<4&63]+"==")):h===2&&(g=(s[b-2]<<8)+s[b-1],S.push(c[g>>10]+c[g>>4&63]+c[g<<2&63]+"=")),S.join("")}}),Em=pt(u=>{F(),u.read=function(c,l,f,m,v){var _,n,x=v*8-m-1,y=(1<<x)-1,A=y>>1,w=-7,q=f?v-1:0,B=f?-1:1,s=c[l+q];for(q+=B,_=s&(1<<-w)-1,s>>=-w,w+=x;w>0;_=_*256+c[l+q],q+=B,w-=8);for(n=_&(1<<-w)-1,_>>=-w,w+=m;w>0;n=n*256+c[l+q],q+=B,w-=8);if(_===0)_=1-A;else{if(_===y)return n?NaN:(s?-1:1)*(1/0);n=n+Math.pow(2,m),_=_-A}return(s?-1:1)*n*Math.pow(2,_-m)},u.write=function(c,l,f,m,v,_){var n,x,y,A=_*8-v-1,w=(1<<A)-1,q=w>>1,B=v===23?Math.pow(2,-24)-Math.pow(2,-77):0,s=m?0:_-1,g=m?1:-1,b=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(x=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+q>=1?l+=B/y:l+=B*Math.pow(2,1-q),l*y>=2&&(n++,y/=2),n+q>=w?(x=0,n=w):n+q>=1?(x=(l*y-1)*Math.pow(2,v),n=n+q):(x=l*Math.pow(2,q-1)*Math.pow(2,v),n=0));v>=8;c[f+s]=x&255,s+=g,x/=256,v-=8);for(n=n<<v|x,A+=v;A>0;c[f+s]=n&255,s+=g,n/=256,A-=8);c[f+s-g]|=b*128}}),xm=pt(u=>{"use strict";F();var c=qm(),l=Em(),f=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;u.Buffer=n,u.SlowBuffer=S,u.INSPECT_MAX_BYTES=50;var m=2147483647;u.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=v(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function v(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function _(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return x(e,r,t)}n.poolSize=8192;function x(e,r,t){if(typeof e=="string")return q(e,r);if(ArrayBuffer.isView(e))return s(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var i=b(e);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return x(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function A(e,r,t){return y(e),e<=0?_(e):r!==void 0?typeof t=="string"?_(e).fill(r,t):_(e).fill(r):_(e)}n.alloc=function(e,r,t){return A(e,r,t)};function w(e){return y(e),_(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function q(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=E(e,r)|0,o=_(t),i=o.write(e,r);return i!==t&&(o=o.slice(0,i)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=_(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function s(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function b(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=_(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?_(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,i=0,p=Math.min(t,o);i<p;++i)if(e[i]!==r[i]){t=e[i],o=r[i];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),i=0;for(t=0;t<e.length;++t){var p=e[t];if(H(p,Uint8Array))i+p.length>o.length?n.from(p).copy(o,i):Uint8Array.prototype.set.call(o,p,i);else if(n.isBuffer(p))p.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return o};function E(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ee(e).length;default:if(i)return o?-1:fe(e).length;r=(""+r).toLowerCase(),i=!0}}n.byteLength=E;function R(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return qe(this,r,t);case"latin1":case"binary":return Ae(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function D(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)D(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)D(this,r,r+3),D(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)D(this,r,r+7),D(this,r+1,r+6),D(this,r+2,r+5),D(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):R.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=u.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},f&&(n.prototype[f]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,i){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),r<0||t>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=t)return 0;if(o>=i)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var p=i-o,d=t-r,k=Math.min(p,d),O=this.slice(o,i),I=e.slice(r,t),U=0;U<k;++U)if(O[U]!==I[U]){p=O[U],d=I[U];break}return p<d?-1:d<p?1:0};function N(e,r,t,o,i){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=i?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(i)return-1;t=e.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,i);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,i);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,i){var p=1,d=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;p=2,d/=2,k/=2,t/=2}function O(xe,Se){return p===1?xe[Se]:xe.readUInt16BE(Se*p)}var I;if(i){var U=-1;for(I=t;I<d;I++)if(O(e,I)===O(r,U===-1?0:I-U)){if(U===-1&&(U=I),I-U+1===k)return U*p}else U!==-1&&(I-=I-U),U=-1}else for(t+k>d&&(t=d-k),I=t;I>=0;I--){for(var M=!0,ce=0;ce<k;ce++)if(O(e,I+ce)!==O(r,ce)){M=!1;break}if(M)return I}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return N(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return N(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var i=e.length-t;o?(o=Number(o),o>i&&(o=i)):o=i;var p=r.length;o>p/2&&(o=p/2);for(var d=0;d<o;++d){var k=parseInt(r.substr(d*2,2),16);if(me(k))return d;e[t+d]=k}return d}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Oe(r),e,t,o)}function be(e,r,t,o){return pe(Ee(r),e,t,o)}function ve(e,r,t,o){return pe(Ne(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-r;if((t===void 0||t>i)&&(t=i),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return be(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?c.fromByteArray(e):c.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],i=r;i<t;){var p=e[i],d=null,k=p>239?4:p>223?3:p>191?2:1;if(i+k<=t){var O,I,U,M;switch(k){case 1:p<128&&(d=p);break;case 2:O=e[i+1],(O&192)===128&&(M=(p&31)<<6|O&63,M>127&&(d=M));break;case 3:O=e[i+1],I=e[i+2],(O&192)===128&&(I&192)===128&&(M=(p&15)<<12|(O&63)<<6|I&63,M>2047&&(M<55296||M>57343)&&(d=M));break;case 4:O=e[i+1],I=e[i+2],U=e[i+3],(O&192)===128&&(I&192)===128&&(U&192)===128&&(M=(p&15)<<18|(O&63)<<12|(I&63)<<6|U&63,M>65535&&M<1114112&&(d=M))}}d===null?(d=65533,k=1):d>65535&&(d-=65536,o.push(d>>>10&1023|55296),d=56320|d&1023),o.push(d),i+=k}return we(o)}var ae=4096;function we(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function qe(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]&127);return o}function Ae(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var i="",p=r;p<t;++p)i+=Re[e[p]];return i}function ke(e,r,t){for(var o=e.slice(r,t),i="",p=0;p<o.length-1;p+=2)i+=String.fromCharCode(o[p]+o[p+1]*256);return i}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function T(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e+--r],i=1;r>0&&(i*=256);)o+=this[e+--r]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=r,i=1,p=this[e+--o];o>0&&(i*=256);)p+=this[e+--o]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*r)),p},n.prototype.readInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!1,52,8)};function j(e,r,t,o,i,p){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<p)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=1,d=0;for(this[r]=e&255;++d<t&&(p*=256);)this[r+d]=e/p&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=t-1,d=1;for(this[r+p]=e&255;--p>=0&&(d*=256);)this[r+p]=e/d&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=0,d=1,k=0;for(this[r]=e&255;++p<t&&(d*=256);)e<0&&k===0&&this[r+p-1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=t-1,d=1,k=0;for(this[r+p]=e&255;--p>=0&&(d*=256);)e<0&&k===0&&this[r+p+1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,i,p){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ye(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return ye(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return ye(this,e,r,!1,t)};function se(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var i=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),i},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var d=n.isBuffer(e)?e:n.from(e,o),k=d.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=d[p%k]}return this};var Ce=/[^+/0-9A-Za-z-_]/g;function Le(e){if(e=e.split("=")[0],e=e.trim().replace(Ce,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,i=null,p=[],d=0;d<o;++d){if(t=e.charCodeAt(d),t>55295&&t<57344){if(!i){if(t>56319){(r-=3)>-1&&p.push(239,191,189);continue}else if(d+1===o){(r-=3)>-1&&p.push(239,191,189);continue}i=t;continue}if(t<56320){(r-=3)>-1&&p.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(r-=3)>-1&&p.push(239,191,189);if(i=null,t<128){if((r-=1)<0)break;p.push(t)}else if(t<2048){if((r-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Oe(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Ne(e,r){for(var t,o,i,p=[],d=0;d<e.length&&!((r-=2)<0);++d)t=e.charCodeAt(d),o=t>>8,i=t%256,p.push(i),p.push(o);return p}function Ee(e){return c.toByteArray(Le(e))}function pe(e,r,t,o){for(var i=0;i<o&&!(i+t>=r.length||i>=e.length);++i)r[i+t]=e[i];return i}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Re=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,i=0;i<16;++i)r[o+i]=e[t]+e[i];return r}()}),Sm=pt((u,c)=>{F();var l=c.exports={},f,m;function v(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?f=setTimeout:f=v}catch(h){f=v}try{typeof clearTimeout=="function"?m=clearTimeout:m=_}catch(h){m=_}})();function n(h){if(f===setTimeout)return setTimeout(h,0);if((f===v||!f)&&setTimeout)return f=setTimeout,setTimeout(h,0);try{return f(h,0)}catch(S){try{return f.call(null,h,0)}catch(E){return f.call(this,h,0)}}}function x(h){if(m===clearTimeout)return clearTimeout(h);if((m===_||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(h);try{return m(h)}catch(S){try{return m.call(null,h)}catch(E){return m.call(this,h)}}}var y=[],A=!1,w,q=-1;function B(){!A||!w||(A=!1,w.length?y=w.concat(y):q=-1,y.length&&s())}function s(){if(!A){var h=n(B);A=!0;for(var S=y.length;S;){for(w=y,y=[];++q<S;)w&&w[q].run();q=-1,S=y.length}w=null,A=!1,x(h)}}l.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)S[E-1]=arguments[E];y.push(new g(h,S)),y.length===1&&!A&&n(s)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function b(){}l.on=b,l.addListener=b,l.once=b,l.off=b,l.removeListener=b,l.removeAllListeners=b,l.emit=b,l.prependListener=b,l.prependOnceListener=b,l.listeners=function(h){return[]},l.binding=function(h){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(h){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),km,Am,Im,F=vm(()=>{km=Q(xm()),Am=Q(Sm()),Im=function(u){function c(){var f=this||self;return delete u.prototype.__magic__,f}if(typeof globalThis=="object")return globalThis;if(this)return c();u.defineProperty(u.prototype,"__magic__",{configurable:!0,get:c});var l=__magic__;return l}(Object)}),Da={};ym(Da,{GasPrice:()=>t_});Ga.exports=wm(Da);F();F();var _r=Q(a("react")),Bm=a("@fortawesome/free-solid-svg-icons"),Tm=a("@fortawesome/react-fontawesome"),Um=Q(a("bignumber.js")),La=Q(a("classnames")),Cm=a("react-number-format");F();var Lm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Lm));var Nr={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};F();var xS=Q(a("react")),SS=a("@terradharitri/sdk-dapp/constants/index");F();F();F();var kS=Q(a("axios"));F();F();F();var AS=a("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");F();var IS=a("@terradharitri/sdk-dapp/constants/index");F();F();F();F();F();F();F();var BS=Q(a("axios"));F();F();var TS=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),US=a("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),CS=Q(a("axios")),LS=Q(a("lodash/uniqBy"));F();var OS=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),NS=Q(a("axios"));F();F();F();var RS=a("@terradharitri/sdk-dapp/types/tokens.types");F();F();F();F();var MS=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),PS=Q(a("axios"));F();F();var DS=Q(a("axios"));F();var Om=Q(a("react")),jS=(0,Om.createContext)({});F();F();var Nm=Q(a("react")),zS=a("@terradharitri/sdk-dapp/constants/index"),FS=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),GS=Q(a("bignumber.js")),VS=a("formik");F();F();F();var WS=a("bech32");F();F();F();var Rm=(u,c)=>typeof c=="boolean"?c:Array.isArray(c)&&c.includes(u);F();F();F();var $S=a("@terradharitri/sdk-dapp/constants"),YS=a("@terradharitri/sdk-dapp/utils/account/getAccount");F();F();var HS=a("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");F();var ZS=a("@terradharitri/sdk-dapp/utils/buildUrlParams");F();var XS=Q(a("anchorme"));F();F();var JS=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Mm=a("@terradharitri/sdk-dapp/utils/operations/formatAmount"),KS=a("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),QS=a("@terradharitri/sdk-dapp/utils/operations/parseAmount");F();F();var Pm=Q(a("react")),ek=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),rk=a("formik");F();F();var tk=a("@terradharitri/sdk-dapp/constants/index"),ok=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),nk=Q(a("bignumber.js"));F();F();var ak=a("@terradharitri/sdk-dapp/constants/index");F();var ik=a("@terradharitri/sdk-dapp/constants/index");F();var lk=a("@terradharitri/sdk-dapp/constants/index"),pk=Q(a("bignumber.js"));F();var ck=a("@terradharitri/sdk-dapp/constants/index");F();var uk=a("@terradharitri/sdk-dapp/constants/index");F();F();var sk=a("@terradharitri/sdk-core"),dk=a("@terradharitri/sdk-dapp/constants/index"),fk=Q(a("bignumber.js"));F();F();var mk=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");F();var _k=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");F();var hk=Q(a("bignumber.js"));F();var gk=a("@terradharitri/sdk-dapp/constants/index"),bk=a("@terradharitri/sdk-dapp/utils/smartContracts"),vk=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),yk=Q(a("bignumber.js"));F();var wk=Q(a("bignumber.js"));F();var Xt=a("@terradharitri/sdk-dapp/constants/index"),Dm=Q(a("bignumber.js")),Oa,Na,Ra,ja=(0,Mm.formatAmount)({input:String((Oa=Xt.GAS_PRICE)!=null?Oa:1e9),decimals:(Na=Xt.DECIMALS)!=null?Na:18,showLastNonZeroDecimal:!0,digits:(Ra=Xt.DIGITS)!=null?Ra:4}),qk=new Dm.default(ja).times(10).toString(10);F();var Ek=a("@terradharitri/sdk-dapp/constants/index"),xk=Q(a("bignumber.js"));F();var Sk=Q(a("bignumber.js"));F();F();var kk=a("yup");F();var Ma=a("@terradharitri/sdk-dapp/constants/ledger.constants"),jm=Q(a("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Jt=a("yup"),zm=(0,Jt.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(u){let{ledger:c}=this.parent;return!(c&&u&&u.length&&!c.ledgerDataActive)}),Fm=(0,Jt.string)().test({name:"hashSign",test:function(u){let{ledger:c,isGuarded:l}=this.parent;if(c){let{ledgerWithHashSign:f,ledgerWithGuardians:m}=(0,jm.default)(c.version);if(u&&u.length>300&&!f)return this.createError({message:`Data too long. You need at least DharitrI app version ${Ma.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!m)return this.createError({message:`You need at least DharitrI app version ${Ma.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Gm=[zm,Fm],Ak=Gm.reduce((u,c)=>u.concat(c),(0,Jt.string)());F();var Ik=a("@terradharitri/sdk-dapp/constants/index"),Bk=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Tk=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Uk=a("yup");F();var Ck=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Lk=Q(a("bignumber.js")),Ok=a("yup");F();var Nk=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Rk=Q(a("bignumber.js")),Mk=a("yup");F();var Pk=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Dk=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),jk=Q(a("bignumber.js")),zk=a("yup");F();var Fk=Q(a("bignumber.js")),Gk=a("yup");F();var Vk=a("@terradharitri/sdk-dapp/constants/index"),Wk=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),$k=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Yk=Q(a("bignumber.js")),Hk=a("yup");F();var Zk=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Xk=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Jk=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Kk=Q(a("bignumber.js")),Qk=a("yup");F();var eA=Q(a("bignumber.js")),rA=a("yup");F();var tA=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),oA=a("yup");F();var nA=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),aA=a("yup");F();F();var iA=(0,Pm.createContext)({});F();F();var Vm=Q(a("react")),lA=a("formik"),pA=Q(a("lodash/uniqBy"));F();F();var za=Q(a("react")),Wm=(0,za.createContext)({});function $m(){return(0,za.useContext)(Wm)}F();F();var cA=a("react"),uA=a("@terradharitri/sdk-dapp/constants/index"),sA=a("@terradharitri/sdk-dapp/types/enums.types");F();var dA=(0,Vm.createContext)({});F();F();var fA=a("@terradharitri/sdk-dapp/constants/index"),mA=a("formik");F();F();var Ym=Q(a("react")),_A=a("@terradharitri/sdk-dapp/constants/index"),hA=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),gA=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),bA=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),vA=Q(a("bignumber.js")),yA=a("formik");F();F();F();F();var wA=Q(a("bignumber.js"));F();var qA=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),EA=Q(a("bignumber.js"));F();F();var xA=a("react"),SA=a("@terradharitri/sdk-dapp/constants/index"),kA=a("@terradharitri/sdk-dapp/utils/smartContracts"),AA=Q(a("bignumber.js")),IA=a("formik");F();var BA=a("react");F();F();var TA=a("@terradharitri/sdk-dapp/constants/index"),UA=Q(a("bignumber.js")),CA=(0,Ym.createContext)({}),LA=(0,Nm.createContext)({});F();F();var Hm=Q(a("react")),OA=a("formik"),NA=(0,Hm.createContext)({});F();F();var Zm=Q(a("react")),RA=a("formik");F();F();F();var MA=a("react"),PA=a("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),DA=Q(a("lodash/uniqBy"));F();F();var jA=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),zA=a("@terradharitri/sdk-dapp/utils");F();var FA=a("react");F();var GA=a("react"),VA=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),WA=(0,Zm.createContext)({});F();F();var Xm=Q(a("react")),$A=a("formik");F();F();F();F();F();var YA=a("react"),HA=a("@terradharitri/sdk-dapp/utils");F();var ZA=a("react"),XA=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");F();F();var JA=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),KA=Q(a("axios"));F();var QA=Q(a("axios")),e9=(0,Xm.createContext)({});F();var Fa=Q(a("react")),Jm=(0,Fa.createContext)({});function Km(){return(0,Fa.useContext)(Jm)}F();F();var r9=a("@terradharitri/sdk-dapp/constants/index"),t9=a("@terradharitri/sdk-dapp/utils/validation"),o9=Q(a("bignumber.js"));F();F();var n9=a("react");F();var Qm=Q(a("bignumber.js")),e_=u=>{let[c,l]=u.split(""),f=new Qm.default(c).isZero();return Boolean(f&&l&&l!==".")};F();var r_=`:root {
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

.dapp-core-component__styles-module__gas {
  position: relative;
}
.dapp-core-component__styles-module__gas:last-child {
  margin-bottom: 0;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper {
  position: relative;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__input {
  display: initial;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__input.dapp-core-component__styles-module__spaced {
  padding-right: 44px;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions {
  right: 0;
  top: 0;
  position: absolute;
  bottom: 0;
  display: flex;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action {
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:hover .dapp-core-component__styles-module__icon {
  color: #23f7dd;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:not(:first-child) {
  position: relative;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:not(:first-child):before {
  background-color: var(--dapp-form-placeholder-color);
  width: 1px;
  top: 16px;
  bottom: 16px;
  left: 0;
  content: "";
  position: absolute;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action .dapp-core-component__styles-module__icon {
  color: var(--dapp-form-placeholder-color);
  transition: all 200ms ease;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(r_));var hr={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},t_=()=>{let{networkConfig:u}=$m(),{gasInfo:c,formInfo:l}=Km(),{readonly:f}=l,{rewaLabel:m}=u,{gasPrice:v,gasPriceError:_,isGasPriceInvalid:n,onChangeGasPrice:x,onBlurGasPrice:y,onResetGasPrice:A}=c,w=v!==ja&&!f,q=Rm("gasPrice",f),B=({value:b,floatValue:h})=>(!h||!(0,Um.default)(h).isNaN())&&!e_(b),s=b=>{b.preventDefault(),A()},g=b=>{x(b.value,!0)};return _r.default.createElement("div",{className:hr.gas},_r.default.createElement("label",{className:Nr.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),_r.default.createElement("div",{className:hr.wrapper},_r.default.createElement(Cm.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:q,id:"gasPrice",inputMode:"decimal",isAllowed:B,name:"gasPrice",onBlur:y,onValueChange:g,required:!0,suffix:` ${m}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:v,valueIsNumericString:!0,allowNegative:!1,className:(0,La.default)(Nr.input,hr.input,{[Nr.disabled]:q,[Nr.invalid]:n,[hr.spaced]:w})}),w&&_r.default.createElement("div",{className:hr.actions},_r.default.createElement("div",{onClick:s,className:(0,La.default)(hr.action,{[hr.disabled]:q})},_r.default.createElement(Tm.FontAwesomeIcon,{icon:Bm.faUndo,className:hr.icon})))),n&&_r.default.createElement("div",{className:Nr.error,"data-testid":"gasPriceError"},_))};});var Ha=Xe((i9,Ya)=>{"use strict";Be();var o_=Object.create,ut=Object.defineProperty,n_=Object.getOwnPropertyDescriptor,a_=Object.getOwnPropertyNames,i_=Object.getPrototypeOf,l_=Object.prototype.hasOwnProperty,p_=(u,c)=>()=>(u&&(c=u(u=0)),c),st=(u,c)=>()=>(c||u((c={exports:{}}).exports,c),c.exports),c_=(u,c)=>{for(var l in c)ut(u,l,{get:c[l],enumerable:!0})},Wa=(u,c,l,f)=>{if(c&&typeof c=="object"||typeof c=="function")for(let m of a_(c))!l_.call(u,m)&&m!==l&&ut(u,m,{get:()=>c[m],enumerable:!(f=n_(c,m))||f.enumerable});return u},ct=(u,c,l)=>(l=u!=null?o_(i_(u)):{},Wa(c||!u||!u.__esModule?ut(l,"default",{value:u,enumerable:!0}):l,u)),u_=u=>Wa(ut({},"__esModule",{value:!0}),u),s_=st(u=>{"use strict";xr(),u.byteLength=x,u.toByteArray=A,u.fromByteArray=B;var c=[],l=[],f=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(v=0,_=m.length;v<_;++v)c[v]=m[v],l[m.charCodeAt(v)]=v;var v,_;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(s){var g=s.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var b=s.indexOf("=");b===-1&&(b=g);var h=b===g?0:4-b%4;return[b,h]}function x(s){var g=n(s),b=g[0],h=g[1];return(b+h)*3/4-h}function y(s,g,b){return(g+b)*3/4-b}function A(s){var g,b=n(s),h=b[0],S=b[1],E=new f(y(s,h,S)),R=0,D=S>0?h-4:h,N;for(N=0;N<D;N+=4)g=l[s.charCodeAt(N)]<<18|l[s.charCodeAt(N+1)]<<12|l[s.charCodeAt(N+2)]<<6|l[s.charCodeAt(N+3)],E[R++]=g>>16&255,E[R++]=g>>8&255,E[R++]=g&255;return S===2&&(g=l[s.charCodeAt(N)]<<2|l[s.charCodeAt(N+1)]>>4,E[R++]=g&255),S===1&&(g=l[s.charCodeAt(N)]<<10|l[s.charCodeAt(N+1)]<<4|l[s.charCodeAt(N+2)]>>2,E[R++]=g>>8&255,E[R++]=g&255),E}function w(s){return c[s>>18&63]+c[s>>12&63]+c[s>>6&63]+c[s&63]}function q(s,g,b){for(var h,S=[],E=g;E<b;E+=3)h=(s[E]<<16&16711680)+(s[E+1]<<8&65280)+(s[E+2]&255),S.push(w(h));return S.join("")}function B(s){for(var g,b=s.length,h=b%3,S=[],E=16383,R=0,D=b-h;R<D;R+=E)S.push(q(s,R,R+E>D?D:R+E));return h===1?(g=s[b-1],S.push(c[g>>2]+c[g<<4&63]+"==")):h===2&&(g=(s[b-2]<<8)+s[b-1],S.push(c[g>>10]+c[g>>4&63]+c[g<<2&63]+"=")),S.join("")}}),d_=st(u=>{xr(),u.read=function(c,l,f,m,v){var _,n,x=v*8-m-1,y=(1<<x)-1,A=y>>1,w=-7,q=f?v-1:0,B=f?-1:1,s=c[l+q];for(q+=B,_=s&(1<<-w)-1,s>>=-w,w+=x;w>0;_=_*256+c[l+q],q+=B,w-=8);for(n=_&(1<<-w)-1,_>>=-w,w+=m;w>0;n=n*256+c[l+q],q+=B,w-=8);if(_===0)_=1-A;else{if(_===y)return n?NaN:(s?-1:1)*(1/0);n=n+Math.pow(2,m),_=_-A}return(s?-1:1)*n*Math.pow(2,_-m)},u.write=function(c,l,f,m,v,_){var n,x,y,A=_*8-v-1,w=(1<<A)-1,q=w>>1,B=v===23?Math.pow(2,-24)-Math.pow(2,-77):0,s=m?0:_-1,g=m?1:-1,b=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(x=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+q>=1?l+=B/y:l+=B*Math.pow(2,1-q),l*y>=2&&(n++,y/=2),n+q>=w?(x=0,n=w):n+q>=1?(x=(l*y-1)*Math.pow(2,v),n=n+q):(x=l*Math.pow(2,q-1)*Math.pow(2,v),n=0));v>=8;c[f+s]=x&255,s+=g,x/=256,v-=8);for(n=n<<v|x,A+=v;A>0;c[f+s]=n&255,s+=g,n/=256,A-=8);c[f+s-g]|=b*128}}),f_=st(u=>{"use strict";xr();var c=s_(),l=d_(),f=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;u.Buffer=n,u.SlowBuffer=S,u.INSPECT_MAX_BYTES=50;var m=2147483647;u.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=v(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function v(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function _(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return x(e,r,t)}n.poolSize=8192;function x(e,r,t){if(typeof e=="string")return q(e,r);if(ArrayBuffer.isView(e))return s(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var i=b(e);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return x(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function A(e,r,t){return y(e),e<=0?_(e):r!==void 0?typeof t=="string"?_(e).fill(r,t):_(e).fill(r):_(e)}n.alloc=function(e,r,t){return A(e,r,t)};function w(e){return y(e),_(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function q(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=E(e,r)|0,o=_(t),i=o.write(e,r);return i!==t&&(o=o.slice(0,i)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=_(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function s(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function b(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=_(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?_(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,i=0,p=Math.min(t,o);i<p;++i)if(e[i]!==r[i]){t=e[i],o=r[i];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),i=0;for(t=0;t<e.length;++t){var p=e[t];if(H(p,Uint8Array))i+p.length>o.length?n.from(p).copy(o,i):Uint8Array.prototype.set.call(o,p,i);else if(n.isBuffer(p))p.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return o};function E(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ee(e).length;default:if(i)return o?-1:fe(e).length;r=(""+r).toLowerCase(),i=!0}}n.byteLength=E;function R(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return qe(this,r,t);case"latin1":case"binary":return Ae(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function D(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)D(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)D(this,r,r+3),D(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)D(this,r,r+7),D(this,r+1,r+6),D(this,r+2,r+5),D(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):R.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=u.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},f&&(n.prototype[f]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,i){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),r<0||t>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=t)return 0;if(o>=i)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var p=i-o,d=t-r,k=Math.min(p,d),O=this.slice(o,i),I=e.slice(r,t),U=0;U<k;++U)if(O[U]!==I[U]){p=O[U],d=I[U];break}return p<d?-1:d<p?1:0};function N(e,r,t,o,i){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=i?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(i)return-1;t=e.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,i);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,i);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,i){var p=1,d=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;p=2,d/=2,k/=2,t/=2}function O(xe,Se){return p===1?xe[Se]:xe.readUInt16BE(Se*p)}var I;if(i){var U=-1;for(I=t;I<d;I++)if(O(e,I)===O(r,U===-1?0:I-U)){if(U===-1&&(U=I),I-U+1===k)return U*p}else U!==-1&&(I-=I-U),U=-1}else for(t+k>d&&(t=d-k),I=t;I>=0;I--){for(var M=!0,ce=0;ce<k;ce++)if(O(e,I+ce)!==O(r,ce)){M=!1;break}if(M)return I}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return N(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return N(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var i=e.length-t;o?(o=Number(o),o>i&&(o=i)):o=i;var p=r.length;o>p/2&&(o=p/2);for(var d=0;d<o;++d){var k=parseInt(r.substr(d*2,2),16);if(me(k))return d;e[t+d]=k}return d}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Oe(r),e,t,o)}function be(e,r,t,o){return pe(Ee(r),e,t,o)}function ve(e,r,t,o){return pe(Ne(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-r;if((t===void 0||t>i)&&(t=i),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return be(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?c.fromByteArray(e):c.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],i=r;i<t;){var p=e[i],d=null,k=p>239?4:p>223?3:p>191?2:1;if(i+k<=t){var O,I,U,M;switch(k){case 1:p<128&&(d=p);break;case 2:O=e[i+1],(O&192)===128&&(M=(p&31)<<6|O&63,M>127&&(d=M));break;case 3:O=e[i+1],I=e[i+2],(O&192)===128&&(I&192)===128&&(M=(p&15)<<12|(O&63)<<6|I&63,M>2047&&(M<55296||M>57343)&&(d=M));break;case 4:O=e[i+1],I=e[i+2],U=e[i+3],(O&192)===128&&(I&192)===128&&(U&192)===128&&(M=(p&15)<<18|(O&63)<<12|(I&63)<<6|U&63,M>65535&&M<1114112&&(d=M))}}d===null?(d=65533,k=1):d>65535&&(d-=65536,o.push(d>>>10&1023|55296),d=56320|d&1023),o.push(d),i+=k}return we(o)}var ae=4096;function we(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function qe(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]&127);return o}function Ae(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var i="",p=r;p<t;++p)i+=Re[e[p]];return i}function ke(e,r,t){for(var o=e.slice(r,t),i="",p=0;p<o.length-1;p+=2)i+=String.fromCharCode(o[p]+o[p+1]*256);return i}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function T(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e+--r],i=1;r>0&&(i*=256);)o+=this[e+--r]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var o=r,i=1,p=this[e+--o];o>0&&(i*=256);)p+=this[e+--o]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*r)),p},n.prototype.readInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||T(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||T(e,8,this.length),l.read(this,e,!1,52,8)};function j(e,r,t,o,i,p){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<p)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=1,d=0;for(this[r]=e&255;++d<t&&(p*=256);)this[r+d]=e/p&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;j(this,e,r,t,i,0)}var p=t-1,d=1;for(this[r+p]=e&255;--p>=0&&(d*=256);)this[r+p]=e/d&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=0,d=1,k=0;for(this[r]=e&255;++p<t&&(d*=256);)e<0&&k===0&&this[r+p-1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);j(this,e,r,t,i-1,-i)}var p=t-1,d=1,k=0;for(this[r+p]=e&255;--p>=0&&(d*=256);)e<0&&k===0&&this[r+p+1]!==0&&(k=1),this[r+p]=(e/d>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||j(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,i,p){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ye(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return ye(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return ye(this,e,r,!1,t)};function se(e,r,t,o,i){return r=+r,t=t>>>0,i||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var i=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),i},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var d=n.isBuffer(e)?e:n.from(e,o),k=d.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=d[p%k]}return this};var Ce=/[^+/0-9A-Za-z-_]/g;function Le(e){if(e=e.split("=")[0],e=e.trim().replace(Ce,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,i=null,p=[],d=0;d<o;++d){if(t=e.charCodeAt(d),t>55295&&t<57344){if(!i){if(t>56319){(r-=3)>-1&&p.push(239,191,189);continue}else if(d+1===o){(r-=3)>-1&&p.push(239,191,189);continue}i=t;continue}if(t<56320){(r-=3)>-1&&p.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(r-=3)>-1&&p.push(239,191,189);if(i=null,t<128){if((r-=1)<0)break;p.push(t)}else if(t<2048){if((r-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Oe(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Ne(e,r){for(var t,o,i,p=[],d=0;d<e.length&&!((r-=2)<0);++d)t=e.charCodeAt(d),o=t>>8,i=t%256,p.push(i),p.push(o);return p}function Ee(e){return c.toByteArray(Le(e))}function pe(e,r,t,o){for(var i=0;i<o&&!(i+t>=r.length||i>=e.length);++i)r[i+t]=e[i];return i}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Re=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,i=0;i<16;++i)r[o+i]=e[t]+e[i];return r}()}),m_=st((u,c)=>{xr();var l=c.exports={},f,m;function v(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?f=setTimeout:f=v}catch(h){f=v}try{typeof clearTimeout=="function"?m=clearTimeout:m=_}catch(h){m=_}})();function n(h){if(f===setTimeout)return setTimeout(h,0);if((f===v||!f)&&setTimeout)return f=setTimeout,setTimeout(h,0);try{return f(h,0)}catch(S){try{return f.call(null,h,0)}catch(E){return f.call(this,h,0)}}}function x(h){if(m===clearTimeout)return clearTimeout(h);if((m===_||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(h);try{return m(h)}catch(S){try{return m.call(null,h)}catch(E){return m.call(this,h)}}}var y=[],A=!1,w,q=-1;function B(){!A||!w||(A=!1,w.length?y=w.concat(y):q=-1,y.length&&s())}function s(){if(!A){var h=n(B);A=!0;for(var S=y.length;S;){for(w=y,y=[];++q<S;)w&&w[q].run();q=-1,S=y.length}w=null,A=!1,x(h)}}l.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)S[E-1]=arguments[E];y.push(new g(h,S)),y.length===1&&!A&&n(s)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function b(){}l.on=b,l.addListener=b,l.once=b,l.off=b,l.removeListener=b,l.removeAllListeners=b,l.emit=b,l.prependListener=b,l.prependOnceListener=b,l.listeners=function(h){return[]},l.binding=function(h){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(h){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),__,h_,g_,xr=p_(()=>{__=ct(f_()),h_=ct(m_()),g_=function(u){function c(){var f=this||self;return delete u.prototype.__magic__,f}if(typeof globalThis=="object")return globalThis;if(this)return c();u.defineProperty(u.prototype,"__magic__",{configurable:!0,get:c});var l=__magic__;return l}(Object)}),$a={};c_($a,{AmountSlider:()=>v_});Ya.exports=u_($a);xr();xr();var gr=ct(a("react")),Er=ct(a("classnames"));xr();var b_=`:root {
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

.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange {
  position: relative;
  display: flex;
  margin: 10px 16px 30px 0;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange:after {
  width: 100%;
  left: 2px;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  position: absolute;
  background: var(--border-color);
  height: 4px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput {
  width: calc(100% + 16px);
  opacity: 0;
  z-index: 6;
  cursor: pointer;
  height: 1.25rem;
  margin-right: -16px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput.dapp-core-component__styles-module__disabled {
  pointer-events: none;
  cursor: default;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput:hover ~ .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  opacity: 1;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb {
  width: 16px;
  height: 16px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: var(--black);
  z-index: 5;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb.dapp-core-component__styles-module__disabled {
  background-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  line-height: 1;
  opacity: 0;
  transition: all 400ms ease;
  color: var(--white);
  font-weight: 500;
  position: absolute;
  left: 50%;
  padding: 0.25rem 0.35rem;
  background: var(--black);
  border-radius: var(--dapp-form-input-border-radius);
  font-size: 11px;
  transform: translateX(-50%);
  bottom: calc(100% + 0.25rem);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderCompletion {
  height: 4px;
  background: var(--primary);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 3;
  margin-left: 2px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderCompletion.dapp-core-component__styles-module__disabled {
  background: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint {
  position: absolute;
  transform: translate(-25%, -50%);
  padding: 15px;
  top: 50%;
  z-index: 4;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint:after {
  content: "";
  position: absolute;
  height: 12px;
  border-radius: 50%;
  background-color: var(--white);
  border: 2px solid var(--primary);
  width: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__completed:after {
  background-color: var(--primary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__completed:after.dapp-core-component__styles-module__disabled:after {
  background-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__disabled:after {
  border-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage {
  position: absolute;
  left: 50%;
  transform: translateX(-25%);
  z-index: 7;
  padding: 1.5rem 0 0;
  line-height: 1;
  color: var(--black);
  font-size: 12px;
  cursor: pointer;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage:hover ~ .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  opacity: 1;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage.dapp-core-component__styles-module__exact {
  font-weight: bold;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage.dapp-core-component__styles-module__disabled {
  pointer-events: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(b_));var ze={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"},v_=({disabled:u,percentageValue:c=0,onPercentageChange:l,className:f})=>{let m=[0,25,50,75,100],v="amountSlider";return gr.default.createElement("div",{className:(0,Er.default)(ze.amountSlider,f)},gr.default.createElement("div",{className:ze.amountSliderRange},gr.default.createElement("input",{name:v,id:v,"data-testid":v,type:"range",disabled:u,min:0,max:100,value:String(c),className:(0,Er.default)(ze.amountSliderInput,{[ze.disabled]:u}),onChange:_=>{l(Number(_.target.value))}}),gr.default.createElement("div",{style:{width:`${c}%`},className:(0,Er.default)(ze.amountSliderCompletion,{[ze.disabled]:u})}),m.map(_=>gr.default.createElement("span",{onClick:()=>l(_),key:`breakpoint-${_}`,style:{left:`${_}%`},className:(0,Er.default)(ze.amountSliderBreakpoint,{[ze.completed]:_<=c,[ze.disabled]:u})})),m.map(_=>gr.default.createElement("span",{style:{left:`${_}%`},key:`breakpoint-${_}`,onClick:()=>l(_),className:(0,Er.default)(ze.amountSliderPercentage,{[ze.exact]:_===c,[ze.disabled]:u})},_,"%")),gr.default.createElement("span",{style:{left:`${c}%`},className:(0,Er.default)(ze.amountSliderThumb,{[ze.disabled]:u})},gr.default.createElement("strong",{className:(0,Er.default)(ze.amountSliderThumbPercentage,{[ze.hidden]:m.includes(c)})},Math.round(c),"%"))))};});var $={};Be();Y($,Je(So()));Y($,Je(No()));Y($,Je(nn()));Y($,Je(An()));Y($,Je(pa()));Y($,Je(qa()));Y($,Je(Ca()));Y($,Je(Va()));Y($,Je(Ha()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
