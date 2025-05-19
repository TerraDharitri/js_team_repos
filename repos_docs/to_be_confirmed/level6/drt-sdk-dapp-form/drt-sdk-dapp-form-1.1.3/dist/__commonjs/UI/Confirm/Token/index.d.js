"use strict";import{a as C,b as $e,d as J,e as Ge,f as K}from"../../../../__chunks__/chunk-JH2LJGTQ.js";var Le=$e((It,Te)=>{"use strict";K();var He=Object.create,Y=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Xe=Object.getOwnPropertyNames,he=Object.getOwnPropertySymbols,Ve=Object.getPrototypeOf,ye=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,me=(f,p,l)=>p in f?Y(f,p,{enumerable:!0,configurable:!0,writable:!0,value:l}):f[p]=l,tt=(f,p)=>{for(var l in p||(p={}))ye.call(p,l)&&me(f,l,p[l]);if(he)for(var l of he(p))et.call(p,l)&&me(f,l,p[l]);return f},_e=(f,p)=>()=>(f&&(p=f(f=0)),p),X=(f,p)=>()=>(p||f((p={exports:{}}).exports,p),p.exports),ve=(f,p)=>{for(var l in p)Y(f,l,{get:p[l],enumerable:!0})},we=(f,p,l,c)=>{if(p&&typeof p=="object"||typeof p=="function")for(let h of Xe(p))!ye.call(f,h)&&h!==l&&Y(f,h,{get:()=>p[h],enumerable:!(c=Qe(p,h))||c.enumerable});return f},z=(f,p,l)=>(l=f!=null?He(Ve(f)):{},we(p||!f||!f.__esModule?Y(l,"default",{value:f,enumerable:!0}):l,f)),Ee=f=>we(Y({},"__esModule",{value:!0}),f),rt=X(f=>{"use strict";w(),f.byteLength=A,f.toByteArray=U,f.fromByteArray=B;var p=[],l=[],c=typeof Uint8Array!="undefined"?Uint8Array:Array,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(y=0,m=h.length;y<m;++y)p[y]=h[y],l[h.charCodeAt(y)]=y;var y,m;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(u){var d=u.length;if(d%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var g=u.indexOf("=");g===-1&&(g=d);var b=g===d?0:4-g%4;return[g,b]}function A(u){var d=n(u),g=d[0],b=d[1];return(g+b)*3/4-b}function _(u,d,g){return(d+g)*3/4-g}function U(u){var d,g=n(u),b=g[0],x=g[1],E=new c(_(u,b,x)),M=0,P=x>0?b-4:b,S;for(S=0;S<P;S+=4)d=l[u.charCodeAt(S)]<<18|l[u.charCodeAt(S+1)]<<12|l[u.charCodeAt(S+2)]<<6|l[u.charCodeAt(S+3)],E[M++]=d>>16&255,E[M++]=d>>8&255,E[M++]=d&255;return x===2&&(d=l[u.charCodeAt(S)]<<2|l[u.charCodeAt(S+1)]>>4,E[M++]=d&255),x===1&&(d=l[u.charCodeAt(S)]<<10|l[u.charCodeAt(S+1)]<<4|l[u.charCodeAt(S+2)]>>2,E[M++]=d>>8&255,E[M++]=d&255),E}function v(u){return p[u>>18&63]+p[u>>12&63]+p[u>>6&63]+p[u&63]}function k(u,d,g){for(var b,x=[],E=d;E<g;E+=3)b=(u[E]<<16&16711680)+(u[E+1]<<8&65280)+(u[E+2]&255),x.push(v(b));return x.join("")}function B(u){for(var d,g=u.length,b=g%3,x=[],E=16383,M=0,P=g-b;M<P;M+=E)x.push(k(u,M,M+E>P?P:M+E));return b===1?(d=u[g-1],x.push(p[d>>2]+p[d<<4&63]+"==")):b===2&&(d=(u[g-2]<<8)+u[g-1],x.push(p[d>>10]+p[d>>4&63]+p[d<<2&63]+"=")),x.join("")}}),ot=X(f=>{w(),f.read=function(p,l,c,h,y){var m,n,A=y*8-h-1,_=(1<<A)-1,U=_>>1,v=-7,k=c?y-1:0,B=c?-1:1,u=p[l+k];for(k+=B,m=u&(1<<-v)-1,u>>=-v,v+=A;v>0;m=m*256+p[l+k],k+=B,v-=8);for(n=m&(1<<-v)-1,m>>=-v,v+=h;v>0;n=n*256+p[l+k],k+=B,v-=8);if(m===0)m=1-U;else{if(m===_)return n?NaN:(u?-1:1)*(1/0);n=n+Math.pow(2,h),m=m-U}return(u?-1:1)*n*Math.pow(2,m-h)},f.write=function(p,l,c,h,y,m){var n,A,_,U=m*8-y-1,v=(1<<U)-1,k=v>>1,B=y===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=h?0:m-1,d=h?1:-1,g=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(A=isNaN(l)?1:0,n=v):(n=Math.floor(Math.log(l)/Math.LN2),l*(_=Math.pow(2,-n))<1&&(n--,_*=2),n+k>=1?l+=B/_:l+=B*Math.pow(2,1-k),l*_>=2&&(n++,_/=2),n+k>=v?(A=0,n=v):n+k>=1?(A=(l*_-1)*Math.pow(2,y),n=n+k):(A=l*Math.pow(2,k-1)*Math.pow(2,y),n=0));y>=8;p[c+u]=A&255,u+=d,A/=256,y-=8);for(n=n<<y|A,U+=y;U>0;p[c+u]=n&255,u+=d,n/=256,U-=8);p[c+u-d]|=g*128}}),nt=X(f=>{"use strict";w();var p=rt(),l=ot(),c=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;f.Buffer=n,f.SlowBuffer=x,f.INSPECT_MAX_BYTES=50;var h=2147483647;f.kMaxLength=h,n.TYPED_ARRAY_SUPPORT=y(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(r){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function m(e){if(e>h)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,n.prototype),t}function n(e,t,r){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return v(e)}return A(e,t,r)}n.poolSize=8192;function A(e,t,r){if(typeof e=="string")return k(e,t);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(q(e,ArrayBuffer)||e&&q(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(q(e,SharedArrayBuffer)||e&&q(e.buffer,SharedArrayBuffer)))return d(e,t,r);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,t,r);var a=g(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,t,r){return A(e,t,r)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function _(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function U(e,t,r){return _(e),e<=0?m(e):t!==void 0?typeof r=="string"?m(e).fill(t,r):m(e).fill(t):m(e)}n.alloc=function(e,t,r){return U(e,t,r)};function v(e){return _(e),m(e<0?0:b(e)|0)}n.allocUnsafe=function(e){return v(e)},n.allocUnsafeSlow=function(e){return v(e)};function k(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!n.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=E(e,t)|0,o=m(r),a=o.write(e,t);return a!==r&&(o=o.slice(0,a)),o}function B(e){for(var t=e.length<0?0:b(e.length)|0,r=m(t),o=0;o<t;o+=1)r[o]=e[o]&255;return r}function u(e){if(q(e,Uint8Array)){var t=new Uint8Array(e);return d(t.buffer,t.byteOffset,t.byteLength)}return B(e)}function d(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return t===void 0&&r===void 0?o=new Uint8Array(e):r===void 0?o=new Uint8Array(e,t):o=new Uint8Array(e,t,r),Object.setPrototypeOf(o,n.prototype),o}function g(e){if(n.isBuffer(e)){var t=b(e.length)|0,r=m(t);return r.length===0||e.copy(r,0,0,t),r}if(e.length!==void 0)return typeof e.length!="number"||ee(e.length)?m(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function b(e){if(e>=h)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+h.toString(16)+" bytes");return e|0}function x(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,t){if(q(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),q(t,Uint8Array)&&(t=n.from(t,t.offset,t.byteLength)),!n.isBuffer(e)||!n.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,o=t.length,a=0,i=Math.min(r,o);a<i;++a)if(e[a]!==t[a]){r=e[a],o=t[a];break}return r<o?-1:o<r?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var o=n.allocUnsafe(t),a=0;for(r=0;r<e.length;++r){var i=e[r];if(q(i,Uint8Array))a+i.length>o.length?n.from(i).copy(o,a):Uint8Array.prototype.set.call(o,i,a);else if(n.isBuffer(i))i.copy(o,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=i.length}return o};function E(e,t){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||q(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return se(e).length;default:if(a)return o?-1:V(e).length;t=(""+t).toLowerCase(),a=!0}}n.byteLength=E;function M(e,t,r){var o=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,t>>>=0,r<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return je(this,t,r);case"utf8":case"utf-8":return ie(this,t,r);case"ascii":return Me(this,t,r);case"latin1":case"binary":return Pe(this,t,r);case"base64":return Ne(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return De(this,t,r);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function P(e,t,r){var o=e[t];e[t]=e[r],e[r]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)P(this,t,t+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?ie(this,0,e):M.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",t=f.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},c&&(n.prototype[c]=n.prototype.inspect),n.prototype.compare=function(e,t,r,o,a){if(q(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),r===void 0&&(r=e?e.length:0),o===void 0&&(o=0),a===void 0&&(a=this.length),t<0||r>e.length||o<0||a>this.length)throw new RangeError("out of range index");if(o>=a&&t>=r)return 0;if(o>=a)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,o>>>=0,a>>>=0,this===e)return 0;for(var i=a-o,s=r-t,T=Math.min(i,s),N=this.slice(o,a),L=e.slice(t,r),I=0;I<T;++I)if(N[I]!==L[I]){i=N[I],s=L[I];break}return i<s?-1:s<i?1:0};function S(e,t,r,o,a){if(e.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,ee(r)&&(r=a?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(a)return-1;r=e.length-1}else if(r<0)if(a)r=0;else return-1;if(typeof t=="string"&&(t=n.from(t,o)),n.isBuffer(t))return t.length===0?-1:ae(e,t,r,o,a);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):ae(e,[t],r,o,a);throw new TypeError("val must be string, number or Buffer")}function ae(e,t,r,o,a){var i=1,s=e.length,T=t.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,s/=2,T/=2,r/=2}function N(ce,de){return i===1?ce[de]:ce.readUInt16BE(de*i)}var L;if(a){var I=-1;for(L=r;L<s;L++)if(N(e,L)===N(t,I===-1?0:L-I)){if(I===-1&&(I=L),L-I+1===T)return I*i}else I!==-1&&(L-=L-I),I=-1}else for(r+T>s&&(r=s-T),L=r;L>=0;L--){for(var j=!0,Z=0;Z<T;Z++)if(N(e,L+Z)!==N(t,Z)){j=!1;break}if(j)return L}return-1}n.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1},n.prototype.indexOf=function(e,t,r){return S(this,e,t,r,!0)},n.prototype.lastIndexOf=function(e,t,r){return S(this,e,t,r,!1)};function Ue(e,t,r,o){r=Number(r)||0;var a=e.length-r;o?(o=Number(o),o>a&&(o=a)):o=a;var i=t.length;o>i/2&&(o=i/2);for(var s=0;s<o;++s){var T=parseInt(t.substr(s*2,2),16);if(ee(T))return s;e[r+s]=T}return s}function Ie(e,t,r,o){return G(V(t,e.length-r),e,r,o)}function Ce(e,t,r,o){return G(Fe(t),e,r,o)}function Oe(e,t,r,o){return G(se(t),e,r,o)}function Se(e,t,r,o){return G(We(t,e.length-r),e,r,o)}n.prototype.write=function(e,t,r,o){if(t===void 0)o="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")o=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-t;if((r===void 0||r>a)&&(r=a),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var i=!1;;)switch(o){case"hex":return Ue(this,e,t,r);case"utf8":case"utf-8":return Ie(this,e,t,r);case"ascii":case"latin1":case"binary":return Ce(this,e,t,r);case"base64":return Oe(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Se(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),i=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ne(e,t,r){return t===0&&r===e.length?p.fromByteArray(e):p.fromByteArray(e.slice(t,r))}function ie(e,t,r){r=Math.min(e.length,r);for(var o=[],a=t;a<r;){var i=e[a],s=null,T=i>239?4:i>223?3:i>191?2:1;if(a+T<=r){var N,L,I,j;switch(T){case 1:i<128&&(s=i);break;case 2:N=e[a+1],(N&192)===128&&(j=(i&31)<<6|N&63,j>127&&(s=j));break;case 3:N=e[a+1],L=e[a+2],(N&192)===128&&(L&192)===128&&(j=(i&15)<<12|(N&63)<<6|L&63,j>2047&&(j<55296||j>57343)&&(s=j));break;case 4:N=e[a+1],L=e[a+2],I=e[a+3],(N&192)===128&&(L&192)===128&&(I&192)===128&&(j=(i&15)<<18|(N&63)<<12|(L&63)<<6|I&63,j>65535&&j<1114112&&(s=j))}}s===null?(s=65533,T=1):s>65535&&(s-=65536,o.push(s>>>10&1023|55296),s=56320|s&1023),o.push(s),a+=T}return Re(o)}var le=4096;function Re(e){var t=e.length;if(t<=le)return String.fromCharCode.apply(String,e);for(var r="",o=0;o<t;)r+=String.fromCharCode.apply(String,e.slice(o,o+=le));return r}function Me(e,t,r){var o="";r=Math.min(e.length,r);for(var a=t;a<r;++a)o+=String.fromCharCode(e[a]&127);return o}function Pe(e,t,r){var o="";r=Math.min(e.length,r);for(var a=t;a<r;++a)o+=String.fromCharCode(e[a]);return o}function je(e,t,r){var o=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>o)&&(r=o);for(var a="",i=t;i<r;++i)a+=Ye[e[i]];return a}function De(e,t,r){for(var o=e.slice(t,r),a="",i=0;i<o.length-1;i+=2)a+=String.fromCharCode(o[i]+o[i+1]*256);return a}n.prototype.slice=function(e,t){var r=this.length;e=~~e,t=t===void 0?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);var o=this.subarray(e,t);return Object.setPrototypeOf(o,n.prototype),o};function O(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||O(e,t,this.length);for(var o=this[e],a=1,i=0;++i<t&&(a*=256);)o+=this[e+i]*a;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||O(e,t,this.length);for(var o=this[e+--t],a=1;t>0&&(a*=256);)o+=this[e+--t]*a;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,t){return e=e>>>0,t||O(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||O(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||O(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||O(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||O(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||O(e,t,this.length);for(var o=this[e],a=1,i=0;++i<t&&(a*=256);)o+=this[e+i]*a;return a*=128,o>=a&&(o-=Math.pow(2,8*t)),o},n.prototype.readIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||O(e,t,this.length);for(var o=t,a=1,i=this[e+--o];o>0&&(a*=256);)i+=this[e+--o]*a;return a*=128,i>=a&&(i-=Math.pow(2,8*t)),i},n.prototype.readInt8=function(e,t){return e=e>>>0,t||O(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,t){e=e>>>0,t||O(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r},n.prototype.readInt16BE=function(e,t){e=e>>>0,t||O(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r},n.prototype.readInt32LE=function(e,t){return e=e>>>0,t||O(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,t){return e=e>>>0,t||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,t){return e=e>>>0,t||O(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,t){return e=e>>>0,t||O(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||O(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||O(e,8,this.length),l.read(this,e,!1,52,8)};function D(e,t,r,o,a,i){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<i)throw new RangeError('"value" argument is out of bounds');if(r+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,t,r,o){if(e=+e,t=t>>>0,r=r>>>0,!o){var a=Math.pow(2,8*r)-1;D(this,e,t,r,a,0)}var i=1,s=0;for(this[t]=e&255;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,t,r,o){if(e=+e,t=t>>>0,r=r>>>0,!o){var a=Math.pow(2,8*r)-1;D(this,e,t,r,a,0)}var i=r-1,s=1;for(this[t+i]=e&255;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,t,r){return e=+e,t=t>>>0,r||D(this,e,t,1,255,0),this[t]=e&255,t+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||D(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||D(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||D(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||D(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},n.prototype.writeIntLE=function(e,t,r,o){if(e=+e,t=t>>>0,!o){var a=Math.pow(2,8*r-1);D(this,e,t,r,a-1,-a)}var i=0,s=1,T=0;for(this[t]=e&255;++i<r&&(s*=256);)e<0&&T===0&&this[t+i-1]!==0&&(T=1),this[t+i]=(e/s>>0)-T&255;return t+r},n.prototype.writeIntBE=function(e,t,r,o){if(e=+e,t=t>>>0,!o){var a=Math.pow(2,8*r-1);D(this,e,t,r,a-1,-a)}var i=r-1,s=1,T=0;for(this[t+i]=e&255;--i>=0&&(s*=256);)e<0&&T===0&&this[t+i+1]!==0&&(T=1),this[t+i]=(e/s>>0)-T&255;return t+r},n.prototype.writeInt8=function(e,t,r){return e=+e,t=t>>>0,r||D(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},n.prototype.writeInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||D(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},n.prototype.writeInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||D(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},n.prototype.writeInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||D(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},n.prototype.writeInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||D(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function pe(e,t,r,o,a,i){if(r+o>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function fe(e,t,r,o,a){return t=+t,r=r>>>0,a||pe(e,t,r,4,34028234663852886e22,-34028234663852886e22),l.write(e,t,r,o,23,4),r+4}n.prototype.writeFloatLE=function(e,t,r){return fe(this,e,t,!0,r)},n.prototype.writeFloatBE=function(e,t,r){return fe(this,e,t,!1,r)};function ue(e,t,r,o,a){return t=+t,r=r>>>0,a||pe(e,t,r,8,17976931348623157e292,-17976931348623157e292),l.write(e,t,r,o,52,8),r+8}n.prototype.writeDoubleLE=function(e,t,r){return ue(this,e,t,!0,r)},n.prototype.writeDoubleBE=function(e,t,r){return ue(this,e,t,!1,r)},n.prototype.copy=function(e,t,r,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<r&&(o=r),o===r||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-r&&(o=e.length-t+r);var a=o-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,o):Uint8Array.prototype.set.call(e,this.subarray(r,o),t),a},n.prototype.fill=function(e,t,r,o){if(typeof e=="string"){if(typeof t=="string"?(o=t,t=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var a=e.charCodeAt(0);(o==="utf8"&&a<128||o==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<r;++i)this[i]=e;else{var s=n.isBuffer(e)?e:n.from(e,o),T=s.length;if(T===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=s[i%T]}return this};var qe=/[^+/0-9A-Za-z-_]/g;function ze(e){if(e=e.split("=")[0],e=e.trim().replace(qe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function V(e,t){t=t||1/0;for(var r,o=e.length,a=null,i=[],s=0;s<o;++s){if(r=e.charCodeAt(s),r>55295&&r<57344){if(!a){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(s+1===o){(t-=3)>-1&&i.push(239,191,189);continue}a=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),a=r;continue}r=(a-55296<<10|r-56320)+65536}else a&&(t-=3)>-1&&i.push(239,191,189);if(a=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,r&63|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return i}function Fe(e){for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r)&255);return t}function We(e,t){for(var r,o,a,i=[],s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),o=r>>8,a=r%256,i.push(a),i.push(o);return i}function se(e){return p.toByteArray(ze(e))}function G(e,t,r,o){for(var a=0;a<o&&!(a+r>=t.length||a>=e.length);++a)t[a+r]=e[a];return a}function q(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function ee(e){return e!==e}var Ye=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var o=r*16,a=0;a<16;++a)t[o+a]=e[r]+e[a];return t}()}),at=X((f,p)=>{w();var l=p.exports={},c,h;function y(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?c=setTimeout:c=y}catch(b){c=y}try{typeof clearTimeout=="function"?h=clearTimeout:h=m}catch(b){h=m}})();function n(b){if(c===setTimeout)return setTimeout(b,0);if((c===y||!c)&&setTimeout)return c=setTimeout,setTimeout(b,0);try{return c(b,0)}catch(x){try{return c.call(null,b,0)}catch(E){return c.call(this,b,0)}}}function A(b){if(h===clearTimeout)return clearTimeout(b);if((h===m||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(b);try{return h(b)}catch(x){try{return h.call(null,b)}catch(E){return h.call(this,b)}}}var _=[],U=!1,v,k=-1;function B(){!U||!v||(U=!1,v.length?_=v.concat(_):k=-1,_.length&&u())}function u(){if(!U){var b=n(B);U=!0;for(var x=_.length;x;){for(v=_,_=[];++k<x;)v&&v[k].run();k=-1,x=_.length}v=null,U=!1,A(b)}}l.nextTick=function(b){var x=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)x[E-1]=arguments[E];_.push(new d(b,x)),_.length===1&&!U&&n(u)};function d(b,x){this.fun=b,this.array=x}d.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function g(){}l.on=g,l.addListener=g,l.once=g,l.off=g,l.removeListener=g,l.removeAllListeners=g,l.emit=g,l.prependListener=g,l.prependOnceListener=g,l.listeners=function(b){return[]},l.binding=function(b){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(b){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),xe,it,lt,w=_e(()=>{xe=z(nt()),it=z(at()),lt=function(f){function p(){var c=this||self;return delete f.prototype.__magic__,c}if(typeof globalThis=="object")return globalThis;if(this)return p();f.defineProperty(f.prototype,"__magic__",{configurable:!0,get:p});var l=__magic__;return l}(Object)}),ke={};ve(ke,{default:()=>Ae});var H,be,Ae,pt=_e(()=>{"use strict";w(),H=z(C("react")),be=f=>H.createElement("svg",tt({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},f),H.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),H.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Ae=be}),Be={};ve(Be,{Token:()=>vt});Te.exports=Ee(Be);w();var F=z(C("react"));w();var ft=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ft));var oe={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};w();w();w();var ne="0";w();w();var R=z(C("react")),ut=C("@fortawesome/free-solid-svg-icons"),st=C("@fortawesome/react-fontawesome"),ct=z(C("@terradharitri/sdk-dapp/constants/index")),dt=C("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),ht=z(C("classnames"));w();w();w();var wt=C("bech32");w();w();w();w();w();var Q=C("@terradharitri/sdk-dapp/types/tokens.types");w();w();var Et=C("@terradharitri/sdk-dapp/constants"),xt=C("@terradharitri/sdk-dapp/utils/account/getAccount");w();w();var kt=C("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");w();var At=C("@terradharitri/sdk-dapp/utils/buildUrlParams");w();var te=z(C("anchorme")),re=f=>f.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),mt=(f,p)=>{if(p){let l=`[Message hidden due to suspicious content - ${p.info}]`;if(f.length>1e3)return{output:l,stringWithLinks:f,found:!0};let c=re(f.normalize("NFKC")),h=te.default.list(c),y=[];if(h.length>0){let m=l;h.forEach((n,A)=>{let{string:_}=n,U="",v="",k=_;for(let B=0;B<m.length;B++){let u=m.slice(B),[d]=te.default.list(re(u));d&&_===d.string&&(U=m.substring(0,B))}for(let B=l.length;B>0;B--){let u=m.slice(0,B),[d]=te.default.list(re(u));d&&_===d.string&&(v=m.substring(B))}y.push(U),y.push(k),m=v,A===h.length-1&&y.push(v)})}else y.push(f);return{output:l,stringWithLinks:y.join(""),found:!0}}else return{output:f,stringWithLinks:"",found:!1}};w();w();var Bt=C("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Tt=C("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Lt=C("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Ut=C("@terradharitri/sdk-dapp/utils/operations/parseAmount");w();w();w();w();w();w();var bt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bt));var W={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},gt=(pt(),Ee(ke)).default,ge=({RewaIcon:f,inDropdown:p=!1,isRewa:l,nftTokenDetails:c,nftType:h,token:y})=>{var m,n;let{name:A,identifier:_,balance:U,decimals:v}=y,k=((m=y.assets)==null?void 0:m.svgUrl)||((n=y.assets)==null?void 0:n.pngUrl)||"",B=k?28:20,[u,d]=(0,R.useState)(A);(0,R.useEffect)(()=>{var E;(E=c==null?void 0:c.uris)!=null&&E.some(M=>{let P=xe.Buffer.from(String(M),"base64").toString(),{found:S}=mt(P,c==null?void 0:c.scamInfo);return S})||d(A)},[A]);let g=R.default.createElement(st.FontAwesomeIcon,{icon:ut.faDiamond});h==Q.NftEnumType.NonFungibleDCDT&&(g=R.default.createElement("div",{className:"nft-type","data-testid":`${_}-type-nft`},"NFT")),h===Q.NftEnumType.SemiFungibleDCDT&&(g=R.default.createElement("div",{className:"nft-type","data-testid":`${_}-type-sft`},"SFT"));let b=!p&&h!==Q.NftEnumType.NonFungibleDCDT,x=R.default.createElement("div",{className:W.tokenElementCircle},g);return k&&(x=R.default.createElement("img",{className:W.tokenElementCircle,src:k,alt:A,height:B})),l&&(x=R.default.createElement("div",{className:W.tokenElementCircle},f?R.default.createElement(f,{height:36}):R.default.createElement(gt,{height:36}))),R.default.createElement("div",{className:(0,ht.default)(oe.value,W.tokenElement)},R.default.createElement("div",{className:W.tokenElementWrapper},x),R.default.createElement("div",{"data-testid":"tokenName"},R.default.createElement("span",{"data-testid":`${_}-element`},R.default.createElement("span",null,u)," ",R.default.createElement("span",{className:W.tokenElementIdentifier},_)),b&&R.default.createElement(dt.FormatAmount,{rewaLabel:_,value:U||ne,digits:h===Q.NftEnumType.SemiFungibleDCDT?0:ct.DIGITS,token:_,showLabel:!1,decimals:v,"data-testid":`${_}-balance`})))};w();var yt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(yt));var _t={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"},vt=({RewaIcon:f,rewaLabel:p,isDcdtTransaction:l,nft:c,tokenAvatar:h,tokenId:y,tokenIdError:m})=>{var n;let A=(c==null?void 0:c.name)||"";return F.default.createElement("div",{className:_t.token},F.default.createElement("span",{className:oe.label},c?F.default.createElement("span",null,c==null?void 0:c.name," "):"","Token"),F.default.createElement("div",null,c?F.default.createElement(ge,{inDropdown:!0,token:{name:c==null?void 0:c.name,identifier:c==null?void 0:c.identifier,decimals:0,balance:ne,ticker:"",assets:{svgUrl:((n=c==null?void 0:c.assets)==null?void 0:n.svgUrl)||""}}}):F.default.createElement(ge,{inDropdown:!0,token:{name:l?A:"DharitrI eGold",identifier:l?y:p,decimals:0,balance:ne,ticker:"",assets:{svgUrl:h||""}},isRewa:y===p,RewaIcon:f})),m&&F.default.createElement("div",{className:oe.error},m))};});var $={};K();J($,Ge(Le()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
