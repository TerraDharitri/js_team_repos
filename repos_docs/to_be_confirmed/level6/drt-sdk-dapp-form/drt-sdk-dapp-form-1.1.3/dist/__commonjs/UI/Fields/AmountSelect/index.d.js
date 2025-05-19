"use strict";import{a as l,b as Oo,d as se,e as Do,f as Oe}from"../../../../__chunks__/chunk-JH2LJGTQ.js";var it=Oo((qp,ct)=>{"use strict";Oe();var Vt=Object.create,Re=Object.defineProperty,Gt=Object.defineProperties,Wt=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,Ht=Object.getOwnPropertyNames,Ze=Object.getOwnPropertySymbols,Yt=Object.getPrototypeOf,fo=Object.prototype.hasOwnProperty,Yo=Object.prototype.propertyIsEnumerable,Po=(a,i,p)=>i in a?Re(a,i,{enumerable:!0,configurable:!0,writable:!0,value:p}):a[i]=p,le=(a,i)=>{for(var p in i||(i={}))fo.call(i,p)&&Po(a,p,i[p]);if(Ze)for(var p of Ze(i))Yo.call(i,p)&&Po(a,p,i[p]);return a},ge=(a,i)=>Gt(a,Zt(i)),Kt=(a,i)=>{var p={};for(var d in a)fo.call(a,d)&&i.indexOf(d)<0&&(p[d]=a[d]);if(a!=null&&Ze)for(var d of Ze(a))i.indexOf(d)<0&&Yo.call(a,d)&&(p[d]=a[d]);return p},Ko=(a,i)=>()=>(a&&(i=a(a=0)),i),Ye=(a,i)=>()=>(i||a((i={exports:{}}).exports,i),i.exports),ho=(a,i)=>{for(var p in i)Re(a,p,{get:i[p],enumerable:!0})},Jo=(a,i,p,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of Ht(i))!fo.call(a,s)&&s!==p&&Re(a,s,{get:()=>i[s],enumerable:!(d=Wt(i,s))||d.enumerable});return a},$=(a,i,p)=>(p=a!=null?Vt(Yt(a)):{},Jo(i||!a||!a.__esModule?Re(p,"default",{value:a,enumerable:!0}):p,a)),bo=a=>Jo(Re({},"__esModule",{value:!0}),a),Jt=Ye(a=>{"use strict";C(),a.byteLength=E,a.toByteArray=I,a.fromByteArray=A;var i=[],p=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(h=0,_=s.length;h<_;++h)i[h]=s[h],p[s.charCodeAt(h)]=h;var h,_;p["-".charCodeAt(0)]=62,p["_".charCodeAt(0)]=63;function n(f){var y=f.length;if(y%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var S=f.indexOf("=");S===-1&&(S=y);var v=S===y?0:4-S%4;return[S,v]}function E(f){var y=n(f),S=y[0],v=y[1];return(S+v)*3/4-v}function b(f,y,S){return(y+S)*3/4-S}function I(f){var y,S=n(f),v=S[0],T=S[1],q=new d(b(f,v,T)),P=0,O=T>0?v-4:v,D;for(D=0;D<O;D+=4)y=p[f.charCodeAt(D)]<<18|p[f.charCodeAt(D+1)]<<12|p[f.charCodeAt(D+2)]<<6|p[f.charCodeAt(D+3)],q[P++]=y>>16&255,q[P++]=y>>8&255,q[P++]=y&255;return T===2&&(y=p[f.charCodeAt(D)]<<2|p[f.charCodeAt(D+1)]>>4,q[P++]=y&255),T===1&&(y=p[f.charCodeAt(D)]<<10|p[f.charCodeAt(D+1)]<<4|p[f.charCodeAt(D+2)]>>2,q[P++]=y>>8&255,q[P++]=y&255),q}function k(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function x(f,y,S){for(var v,T=[],q=y;q<S;q+=3)v=(f[q]<<16&16711680)+(f[q+1]<<8&65280)+(f[q+2]&255),T.push(k(v));return T.join("")}function A(f){for(var y,S=f.length,v=S%3,T=[],q=16383,P=0,O=S-v;P<O;P+=q)T.push(x(f,P,P+q>O?O:P+q));return v===1?(y=f[S-1],T.push(i[y>>2]+i[y<<4&63]+"==")):v===2&&(y=(f[S-2]<<8)+f[S-1],T.push(i[y>>10]+i[y>>4&63]+i[y<<2&63]+"=")),T.join("")}}),Xt=Ye(a=>{C(),a.read=function(i,p,d,s,h){var _,n,E=h*8-s-1,b=(1<<E)-1,I=b>>1,k=-7,x=d?h-1:0,A=d?-1:1,f=i[p+x];for(x+=A,_=f&(1<<-k)-1,f>>=-k,k+=E;k>0;_=_*256+i[p+x],x+=A,k-=8);for(n=_&(1<<-k)-1,_>>=-k,k+=s;k>0;n=n*256+i[p+x],x+=A,k-=8);if(_===0)_=1-I;else{if(_===b)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,s),_=_-I}return(f?-1:1)*n*Math.pow(2,_-s)},a.write=function(i,p,d,s,h,_){var n,E,b,I=_*8-h-1,k=(1<<I)-1,x=k>>1,A=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=s?0:_-1,y=s?1:-1,S=p<0||p===0&&1/p<0?1:0;for(p=Math.abs(p),isNaN(p)||p===1/0?(E=isNaN(p)?1:0,n=k):(n=Math.floor(Math.log(p)/Math.LN2),p*(b=Math.pow(2,-n))<1&&(n--,b*=2),n+x>=1?p+=A/b:p+=A*Math.pow(2,1-x),p*b>=2&&(n++,b/=2),n+x>=k?(E=0,n=k):n+x>=1?(E=(p*b-1)*Math.pow(2,h),n=n+x):(E=p*Math.pow(2,x-1)*Math.pow(2,h),n=0));h>=8;i[d+f]=E&255,f+=y,E/=256,h-=8);for(n=n<<h|E,I+=h;I>0;i[d+f]=n&255,f+=y,n/=256,I-=8);i[d+f-y]|=S*128}}),Qt=Ye(a=>{"use strict";C();var i=Jt(),p=Xt(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;a.Buffer=n,a.SlowBuffer=T,a.INSPECT_MAX_BYTES=50;var s=2147483647;a.kMaxLength=s,n.TYPED_ARRAY_SUPPORT=h(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function _(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return E(e,o,t)}n.poolSize=8192;function E(e,o,t){if(typeof e=="string")return x(e,o);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return y(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return n.from(r,o,t);var c=S(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,t){return E(e,o,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function b(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function I(e,o,t){return b(e),e<=0?_(e):o!==void 0?typeof t=="string"?_(e).fill(o,t):_(e).fill(o):_(e)}n.alloc=function(e,o,t){return I(e,o,t)};function k(e){return b(e),_(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return k(e)},n.allocUnsafeSlow=function(e){return k(e)};function x(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=q(e,o)|0,r=_(t),c=r.write(e,o);return c!==t&&(r=r.slice(0,c)),r}function A(e){for(var o=e.length<0?0:v(e.length)|0,t=_(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function f(e){if(H(e,Uint8Array)){var o=new Uint8Array(e);return y(o.buffer,o.byteOffset,o.byteLength)}return A(e)}function y(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,n.prototype),r}function S(e){if(n.isBuffer(e)){var o=v(e.length)|0,t=_(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Te(e.length)?_(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function v(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return e|0}function T(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,c=0,u=Math.min(t,r);c<u;++c)if(e[c]!==o[c]){t=e[c],r=o[c];break}return t<r?-1:r<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=n.allocUnsafe(o),c=0;for(t=0;t<e.length;++t){var u=e[t];if(H(u,Uint8Array))c+u.length>r.length?n.from(u).copy(r,c):Uint8Array.prototype.set.call(r,u,c);else if(n.isBuffer(u))u.copy(r,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=u.length}return r};function q(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return qe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Pe(e).length;default:if(c)return r?-1:qe(e).length;o=(""+o).toLowerCase(),c=!0}}n.byteLength=q;function P(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return De(this,o,t);case"utf8":case"utf-8":return L(this,o,t);case"ascii":return ne(this,o,t);case"latin1":case"binary":return xe(this,o,t);case"base64":return U(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fe(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}n.prototype._isBuffer=!0;function O(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)O(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)O(this,o,o+3),O(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)O(this,o,o+7),O(this,o+1,o+6),O(this,o+2,o+5),O(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?L(this,0,e):P.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=a.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},d&&(n.prototype[d]=n.prototype.inspect),n.prototype.compare=function(e,o,t,r,c){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),c===void 0&&(c=this.length),o<0||t>e.length||r<0||c>this.length)throw new RangeError("out of range index");if(r>=c&&o>=t)return 0;if(r>=c)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,c>>>=0,this===e)return 0;for(var u=c-r,g=t-o,B=Math.min(u,g),V=this.slice(r,c),N=e.slice(o,t),z=0;z<B;++z)if(V[z]!==N[z]){u=V[z],g=N[z];break}return u<g?-1:g<u?1:0};function D(e,o,t,r,c){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Te(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=n.from(o,r)),n.isBuffer(o))return o.length===0?-1:te(e,o,t,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):te(e,[o],t,r,c);throw new TypeError("val must be string, number or Buffer")}function te(e,o,t,r,c){var u=1,g=e.length,B=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;u=2,g/=2,B/=2,t/=2}function V(Me,Fe){return u===1?Me[Fe]:Me.readUInt16BE(Fe*u)}var N;if(c){var z=-1;for(N=t;N<g;N++)if(V(e,N)===V(o,z===-1?0:N-z)){if(z===-1&&(z=N),N-z+1===B)return z*u}else z!==-1&&(N-=N-z),z=-1}else for(t+B>g&&(t=g-B),N=t;N>=0;N--){for(var W=!0,be=0;be<B;be++)if(V(e,N+be)!==V(o,be)){W=!1;break}if(W)return N}return-1}n.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},n.prototype.indexOf=function(e,o,t){return D(this,e,o,t,!0)},n.prototype.lastIndexOf=function(e,o,t){return D(this,e,o,t,!1)};function J(e,o,t,r){t=Number(t)||0;var c=e.length-t;r?(r=Number(r),r>c&&(r=c)):r=c;var u=o.length;r>u/2&&(r=u/2);for(var g=0;g<r;++g){var B=parseInt(o.substr(g*2,2),16);if(Te(B))return g;e[t+g]=B}return g}function X(e,o,t,r){return he(qe(o,e.length-t),e,t,r)}function Z(e,o,t,r){return he(ao(o),e,t,r)}function ce(e,o,t,r){return he(Pe(o),e,t,r)}function re(e,o,t,r){return he(lo(o,e.length-t),e,t,r)}n.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-o;if((t===void 0||t>c)&&(t=c),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var u=!1;;)switch(r){case"hex":return J(this,e,o,t);case"utf8":case"utf-8":return X(this,e,o,t);case"ascii":case"latin1":case"binary":return Z(this,e,o,t);case"base64":return ce(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return re(this,e,o,t);default:if(u)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),u=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function U(e,o,t){return o===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,t))}function L(e,o,t){t=Math.min(e.length,t);for(var r=[],c=o;c<t;){var u=e[c],g=null,B=u>239?4:u>223?3:u>191?2:1;if(c+B<=t){var V,N,z,W;switch(B){case 1:u<128&&(g=u);break;case 2:V=e[c+1],(V&192)===128&&(W=(u&31)<<6|V&63,W>127&&(g=W));break;case 3:V=e[c+1],N=e[c+2],(V&192)===128&&(N&192)===128&&(W=(u&15)<<12|(V&63)<<6|N&63,W>2047&&(W<55296||W>57343)&&(g=W));break;case 4:V=e[c+1],N=e[c+2],z=e[c+3],(V&192)===128&&(N&192)===128&&(z&192)===128&&(W=(u&15)<<18|(V&63)<<12|(N&63)<<6|z&63,W>65535&&W<1114112&&(g=W))}}g===null?(g=65533,B=1):g>65535&&(g-=65536,r.push(g>>>10&1023|55296),g=56320|g&1023),r.push(g),c+=B}return Q(r)}var M=4096;function Q(e){var o=e.length;if(o<=M)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=M));return t}function ne(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]&127);return r}function xe(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]);return r}function De(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var c="",u=o;u<t;++u)c+=po[e[u]];return c}function fe(e,o,t){for(var r=e.slice(o,t),c="",u=0;u<r.length-1;u+=2)c+=String.fromCharCode(r[u]+r[u+1]*256);return c}n.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,n.prototype),r};function j(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||j(e,o,this.length);for(var r=this[e],c=1,u=0;++u<o&&(c*=256);)r+=this[e+u]*c;return r},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||j(e,o,this.length);for(var r=this[e+--o],c=1;o>0&&(c*=256);)r+=this[e+--o]*c;return r},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||j(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||j(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||j(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||j(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||j(e,o,this.length);for(var r=this[e],c=1,u=0;++u<o&&(c*=256);)r+=this[e+u]*c;return c*=128,r>=c&&(r-=Math.pow(2,8*o)),r},n.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||j(e,o,this.length);for(var r=o,c=1,u=this[e+--r];r>0&&(c*=256);)u+=this[e+--r]*c;return c*=128,u>=c&&(u-=Math.pow(2,8*o)),u},n.prototype.readInt8=function(e,o){return e=e>>>0,o||j(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||j(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||j(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||j(e,4,this.length),p.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||j(e,4,this.length),p.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||j(e,8,this.length),p.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||j(e,8,this.length),p.read(this,e,!1,52,8)};function G(e,o,t,r,c,u){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<u)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var c=Math.pow(2,8*t)-1;G(this,e,o,t,c,0)}var u=1,g=0;for(this[o]=e&255;++g<t&&(u*=256);)this[o+g]=e/u&255;return o+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var c=Math.pow(2,8*t)-1;G(this,e,o,t,c,0)}var u=t-1,g=1;for(this[o+u]=e&255;--u>=0&&(g*=256);)this[o+u]=e/g&255;return o+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var c=Math.pow(2,8*t-1);G(this,e,o,t,c-1,-c)}var u=0,g=1,B=0;for(this[o]=e&255;++u<t&&(g*=256);)e<0&&B===0&&this[o+u-1]!==0&&(B=1),this[o+u]=(e/g>>0)-B&255;return o+t},n.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var c=Math.pow(2,8*t-1);G(this,e,o,t,c-1,-c)}var u=t-1,g=1,B=0;for(this[o+u]=e&255;--u>=0&&(g*=256);)e<0&&B===0&&this[o+u+1]!==0&&(B=1),this[o+u]=(e/g>>0)-B&255;return o+t},n.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function Ee(e,o,t,r,c,u){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ie(e,o,t,r,c){return o=+o,t=t>>>0,c||Ee(e,o,t,4,34028234663852886e22,-34028234663852886e22),p.write(e,o,t,r,23,4),t+4}n.prototype.writeFloatLE=function(e,o,t){return Ie(this,e,o,!0,t)},n.prototype.writeFloatBE=function(e,o,t){return Ie(this,e,o,!1,t)};function ae(e,o,t,r,c){return o=+o,t=t>>>0,c||Ee(e,o,t,8,17976931348623157e292,-17976931348623157e292),p.write(e,o,t,r,52,8),t+8}n.prototype.writeDoubleLE=function(e,o,t){return ae(this,e,o,!0,t)},n.prototype.writeDoubleBE=function(e,o,t){return ae(this,e,o,!1,t)},n.prototype.copy=function(e,o,t,r){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var c=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),c},n.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var c=e.charCodeAt(0);(r==="utf8"&&c<128||r==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var u;if(typeof e=="number")for(u=o;u<t;++u)this[u]=e;else{var g=n.isBuffer(e)?e:n.from(e,r),B=g.length;if(B===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(u=0;u<t-o;++u)this[u+o]=g[u%B]}return this};var ro=/[^+/0-9A-Za-z-_]/g;function no(e){if(e=e.split("=")[0],e=e.trim().replace(ro,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function qe(e,o){o=o||1/0;for(var t,r=e.length,c=null,u=[],g=0;g<r;++g){if(t=e.charCodeAt(g),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&u.push(239,191,189);continue}else if(g+1===r){(o-=3)>-1&&u.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&u.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&u.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;u.push(t)}else if(t<2048){if((o-=2)<0)break;u.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;u.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;u.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return u}function ao(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function lo(e,o){for(var t,r,c,u=[],g=0;g<e.length&&!((o-=2)<0);++g)t=e.charCodeAt(g),r=t>>8,c=t%256,u.push(c),u.push(r);return u}function Pe(e){return i.toByteArray(no(e))}function he(e,o,t,r){for(var c=0;c<r&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function H(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Te(e){return e!==e}var po=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,c=0;c<16;++c)o[r+c]=e[t]+e[c];return o}()}),er=Ye((a,i)=>{C();var p=i.exports={},d,s;function h(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=h}catch(v){d=h}try{typeof clearTimeout=="function"?s=clearTimeout:s=_}catch(v){s=_}})();function n(v){if(d===setTimeout)return setTimeout(v,0);if((d===h||!d)&&setTimeout)return d=setTimeout,setTimeout(v,0);try{return d(v,0)}catch(T){try{return d.call(null,v,0)}catch(q){return d.call(this,v,0)}}}function E(v){if(s===clearTimeout)return clearTimeout(v);if((s===_||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(v);try{return s(v)}catch(T){try{return s.call(null,v)}catch(q){return s.call(this,v)}}}var b=[],I=!1,k,x=-1;function A(){!I||!k||(I=!1,k.length?b=k.concat(b):x=-1,b.length&&f())}function f(){if(!I){var v=n(A);I=!0;for(var T=b.length;T;){for(k=b,b=[];++x<T;)k&&k[x].run();x=-1,T=b.length}k=null,I=!1,E(v)}}p.nextTick=function(v){var T=new Array(arguments.length-1);if(arguments.length>1)for(var q=1;q<arguments.length;q++)T[q-1]=arguments[q];b.push(new y(v,T)),b.length===1&&!I&&n(f)};function y(v,T){this.fun=v,this.array=T}y.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={};function S(){}p.on=S,p.addListener=S,p.once=S,p.off=S,p.removeListener=S,p.removeAllListeners=S,p.emit=S,p.prependListener=S,p.prependOnceListener=S,p.listeners=function(v){return[]},p.binding=function(v){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(v){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}}),or,tr,rr,C=Ko(()=>{or=$(Qt()),tr=$(er()),rr=function(a){function i(){var d=this||self;return delete a.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return i();a.defineProperty(a.prototype,"__magic__",{configurable:!0,get:i});var p=__magic__;return p}(Object)}),go={};ho(go,{default:()=>Xo});var Ve,Mo,Xo,Qo=Ko(()=>{"use strict";C(),Ve=$(l("react")),Mo=a=>Ve.createElement("svg",le({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},a),Ve.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Ve.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Xo=Mo}),et={};ho(et,{AmountSelect:()=>Mn});ct.exports=bo(et);C();var ue=$(l("react")),co=$(l("classnames"));C();var nr=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(nr));var He={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};C();C();var ar=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ar));var Ae={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};C();C();C();var ee=$(l("react")),lr=l("@terradharitri/sdk-dapp/utils/validation"),io=$(l("bignumber.js")),Fo=$(l("classnames")),pr=l("react-number-format");C();var cr=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cr));var Ge={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};C();C();var Ce=l("@terradharitri/sdk-dapp/constants/index"),ir=l("@terradharitri/sdk-dapp/utils/validation"),ke=$(l("bignumber.js")),dr=(a,i)=>{let p=i!=null?i:Ce.DIGITS;if((0,ir.stringIsFloat)(a)){if(new ke.default(a).isZero())return"0";let d=new ke.default(a).toFormat(p);return d=parseFloat(d)>0?d:new ke.default(a).toFormat(Ce.DIGITS),d=parseFloat(d)>0?d:new ke.default(a).toFormat(Ce.DIGITS+2),d=parseFloat(d)>0?d:new ke.default(a).toFormat(Ce.DIGITS+4),d=parseFloat(d)>0?d:new ke.default(a).toFormat(Ce.DIGITS+6),d=parseFloat(d)>0?d:new ke.default(a).toFormat(Ce.DIGITS+10),parseFloat(d)>0?d:new ke.default(a).toFormat(Ce.DIGITS+14)}return"0"};C();var Ro=a=>a.replace(/,/g,"");C();var zo=l("react"),ur={value:"",count:0},mr=(a,i)=>{let[p,d]=(0,zo.useState)(ur);return(0,zo.useEffect)(()=>{let s=setTimeout(()=>{d(a)},i);return()=>clearTimeout(s)},[a.count]),p};C();var _r=$(l("bignumber.js")),sr=a=>{let[i,p]=a.split(""),d=new _r.default(i).isZero();return Boolean(d&&p&&p!==".")},fr=500,jo=1e13,hr=({"data-testid":a,InfoDustComponent:i,disabled:p,handleBlur:d,handleChange:s,name:h,onDebounceChange:_,onFocus:n,onKeyDown:E,placeholder:b,required:I,usdPrice:k,value:x,usdValue:A,className:f,autoFocus:y,suffix:S})=>{let v=(0,ee.useRef)(null),[T,q]=(0,ee.useState)(),[P,O]=(0,ee.useState)(!1),[D,te]=(0,ee.useState)({value:x,count:0}),[J,X]=(0,ee.useState)(),Z=mr(D,fr),ce=L=>{L.stopPropagation(),O(!0);let M=Ro(L.target.value),Q=(0,io.default)(M).isLessThanOrEqualTo(jo);if((M===""||Q)&&(q(M),L.target.value=M,s(L),_)){let ne={value:M,count:D.count+1};te(ne)}},re=()=>{if(A)return X(`$${A}`);if(!k||!x)return X(void 0);let L=Ro(x);if(!(x!==""&&(0,lr.stringIsFloat)(L))||L==="")return X(void 0);let M=dr(new io.default(L).times(k!=null?k:0).toString(10),2);X(`$${M}`)},U=({value:L,floatValue:M})=>(!M||(0,io.default)(M).isLessThanOrEqualTo(jo))&&!sr(L);return(0,ee.useEffect)(()=>{_&&P&&(O(!1),_(Z.value))},[Z]),(0,ee.useEffect)(re,[x,A,k]),(0,ee.useEffect)(()=>{x!==T&&q(x)},[x]),ee.default.createElement("div",{ref:v,className:(0,Fo.default)(Ge.amountHolder,{[Ge.showUsdValue]:Boolean(J)},f)},ee.default.createElement(pr.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":a||h,decimalSeparator:".",disabled:Boolean(p),id:h,inputMode:"decimal",isAllowed:U,name:h,onBlur:d,onChange:ce,onFocus:n,onKeyDown:E,placeholder:b,required:I,thousandSeparator:",",thousandsGroupStyle:"thousand",value:T,suffix:S,valueIsNumericString:!0,allowNegative:!1,autoFocus:y,className:(0,Fo.default)(He.input,Ge.amountInput,{[He.disabled]:Boolean(p)})}),J&&ee.default.createElement("span",{className:Ge.amountHolderUsd},ee.default.createElement("small",{"data-testid":`tokenPrice_${k}`},J!=="$0"?ee.default.createElement(ee.default.Fragment,null,"\u2248 "):ee.default.createElement(ee.default.Fragment,null),J),i))},br=(0,ee.memo)(hr,(a,i)=>a.value===i.value&&a.usdPrice===i.usdPrice&&a.className===i.className&&a.disabled===i.disabled&&a.usdValue===i.usdValue);C();C();var kp=$(l("react"));C();C();var yp=$(l("react")),Sp=l("@fortawesome/free-solid-svg-icons"),wp=l("@fortawesome/react-fontawesome"),xp=l("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Ep=l("react-tooltip"),Ip=l("react-tooltip/dist/react-tooltip.css");C();C();var gr="5000000000000000",vr="WREWA-bd4d79";C();var kr=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kr));C();C();var yr=$(l("react")),Sr=l("@terradharitri/sdk-dapp/constants"),$o=$(l("bignumber.js")),wr=$(l("classnames"));C();var Vo=$(l("bignumber.js")),xr=a=>{let i=new Vo.default(a!=null?a:"0"),p=new Vo.default(gr),d=i.minus(p);return d.isGreaterThan(0)?d.toString(10):"0"};C();var Er=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Er));var Ir={max:"dapp-core-component__maxButton-module__max"};C();var Be=l("@terradharitri/sdk-dapp/constants"),qr=l("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Tr=l("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ot=({amount:a="0",decimals:i=0,digits:p=Be.DIGITS,addCommas:d=!1,showLastNonZeroDecimal:s=!1})=>{if(a==null||!(0,Tr.stringIsInteger)(a))return"0";let h=n=>(0,qr.formatAmount)({input:a,digits:n,decimals:i,addCommas:d,showLastNonZeroDecimal:s}),_=h(p);return _=parseFloat(_)>0?_:h(Be.DIGITS),_=parseFloat(_)>0?_:h(Be.DIGITS+2),_=parseFloat(_)>0?_:h(Be.DIGITS+4),_=parseFloat(_)>0?_:h(Be.DIGITS+6),_=parseFloat(_)>0?_:h(Be.DIGITS+10),parseFloat(_)>0?_:h(Be.DIGITS+14)},Ar=({token:a,rewaLabel:i,inputAmount:p,className:d,onMaxClick:s})=>{var h;let _=(a==null?void 0:a.identifier)===i,n=(h=a==null?void 0:a.balance)!=null?h:"0";if(n==="0")return null;let E=ot({amount:_?xr(n):n,decimals:(a==null?void 0:a.decimals)||Sr.DECIMALS}),b=new $o.default(p).isEqualTo(new $o.default(E)),I=k=>{k.preventDefault(),s==null||s(E)};return b?null:yr.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,wr.default)(Ir.max,d),onClick:I,onMouseDown:k=>{k.preventDefault()}},"Max")};C();C();var ye=$(l("react")),Cr=$(l("classnames")),Br=$(l("react-select"));C();var Nr={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function Lr(a){return Nr[a]||vr}var tt={};ho(tt,{Control:()=>Kr,IndicatorsContainer:()=>nn,Input:()=>Rr,Menu:()=>Zr,MenuList:()=>$r,DharitrIIcon:()=>at,Placeholder:()=>en,SmallLoader:()=>Dr,ValueComponent:()=>rt,getOption:()=>lt,getSingleValue:()=>pt,getValueContainer:()=>nt});C();C();var Go=$(l("react")),Ur=l("@fortawesome/free-solid-svg-icons"),Or=l("@fortawesome/react-fontawesome"),Dr=({show:a,color:i})=>a?Go.default.createElement("div",{className:"d-flex"},Go.default.createElement(Or.FontAwesomeIcon,{icon:Ur.faSpinner,className:`fa-spin fast-spin ${i||"text-primary"}`})):null;C();C();var Pr=$(l("react")),Mr=l("react-select");C();var Fr=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fr));var F={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Rr=a=>Pr.default.createElement(Mr.components.Input,ge(le({},a),{className:F.dropdown,"data-testid":"tokenSelectInput"}));C();var zr=$(l("react")),jr=l("react-select"),$r=a=>{let i=a,{rx:p}=i,d=Kt(i,["rx"]);return zr.default.createElement(jr.components.MenuList,ge(le({},d),{className:F.list}))};C();var uo=$(l("react")),Vr=l("@fortawesome/free-solid-svg-icons"),Gr=l("@fortawesome/react-fontawesome"),Wr=l("react-select"),Zr=a=>uo.default.createElement(Wr.components.Menu,ge(le({},a),{className:F.menu}),a.selectProps.isLoading?uo.default.createElement("div",{className:F.loading},uo.default.createElement(Gr.FontAwesomeIcon,{icon:Vr.faCircleNotch,className:"fa-spin",size:"lg"})):a.children);C();var Hr=$(l("react")),Yr=l("react-select"),Kr=a=>Hr.default.createElement(Yr.components.Control,ge(le({},a),{className:F.control}));C();var Jr=$(l("react")),Xr=$(l("classnames")),Qr=l("react-select"),en=a=>Jr.default.createElement(Qr.components.Placeholder,ge(le({},a),{className:(0,Xr.default)(F.placeholder,{[F.focused]:a.isFocused})}));C();var on=$(l("react")),tn=$(l("classnames")),rn=l("react-select"),nn=a=>on.default.createElement(rn.components.IndicatorsContainer,ge(le({},a),{className:(0,tn.default)(F.indicator,{[F.expanded]:a.selectProps.menuIsOpen})}));C();var ie=$(l("react")),an=l("@fortawesome/free-solid-svg-icons"),ln=l("@fortawesome/react-fontawesome"),pn=l("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),cn=$(l("classnames")),dn=l("react-select"),un=(Qo(),bo(go)).default,rt=({RewaIcon:a,tokenId:i,icon:p})=>{let{isRewa:d}=(0,pn.getIdentifierType)(i);return d?ie.default.createElement("span",{className:F.asset},a?ie.default.createElement(a,{className:F.diamond}):ie.default.createElement(un,{className:F.diamond})):p?ie.default.createElement("img",{src:p,className:F.asset}):ie.default.createElement(ln.FontAwesomeIcon,{icon:an.faDiamond,className:F.asset})},mn=({children:a})=>ie.default.createElement("div",{className:F.wrapper},a),nt=(a,i,p)=>d=>{var s,h;let{selectProps:_,isDisabled:n,children:E}=d,b=_.value,I=(h=(s=b==null?void 0:b.assets)==null?void 0:s.svgUrl)!=null?h:null,k=(0,ie.useMemo)(()=>{let x=String(b==null?void 0:b.token.usdPrice);return x!=null&&x.includes("$")?b==null?void 0:b.token.usdPrice:`$${b==null?void 0:b.token.usdPrice}`},[b==null?void 0:b.token.usdPrice]);return ie.default.createElement(dn.components.ValueContainer,ge(le({},d),{className:F.container}),ie.default.createElement("div",{className:(0,cn.default)(F.icon,i)},ie.default.createElement(rt,{RewaIcon:p,rewaLabel:a,icon:I,isDisabled:n,tokenId:b==null?void 0:b.value})),ie.default.createElement("div",{className:F.payload},ie.default.createElement(mn,null,E,(b==null?void 0:b.token.usdPrice)&&ie.default.createElement("small",{className:F.price},k))))};C();var Y=$(l("react")),_n=l("@fortawesome/free-solid-svg-icons"),sn=l("@fortawesome/react-fontawesome"),fn=l("@terradharitri/sdk-dapp/constants"),hn=l("@terradharitri/sdk-dapp/UI/UsdValue"),bn=l("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),gn=$(l("classnames")),vn=l("react-select");C();C();var We=$(l("react"));C();var kn=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kn));var yn={highlight:"dapp-core-component__styles-modules__highlight"},Sn=({highlight:a,text:i=""})=>{let p=i.split(" "),d=a.toLowerCase(),s=new RegExp(`(${d})`,"gi"),h=p.map(_=>_.split(s).filter(n=>n));return We.default.createElement("span",{className:yn.highlight},h.map((_,n)=>{let E=`${_}-${n}`;return We.default.createElement("span",{key:E},_.map((b,I)=>{let k=b.toLowerCase()===d,x=d&&k,A=`${b}-${I}`;return x?We.default.createElement("strong",{key:A},b):We.default.createElement("span",{key:A},b)}))}))},{default:at}=(Qo(),bo(go)),lt=({RewaIcon:a,TokenTickerIcon:i,showBalanceUsdValue:p,showTokenPrice:d})=>s=>{var h,_,n,E;let{data:b,isSelected:I,isFocused:k,isDisabled:x,selectProps:A}=s,f=b,{isRewa:y}=(0,bn.getIdentifierType)(f.value),S=f.token.assets?f.token.assets.svgUrl:null,v=ot({amount:f.token.balance,decimals:f.token.decimals||fn.DECIMALS,addCommas:!0}),T=(_=(h=f.token)==null?void 0:h.usdPrice)==null?void 0:_.toString(),q=(E=(n=f.token)==null?void 0:n.valueUSD)==null?void 0:E.toString();return Y.default.createElement("div",{"data-testid":`${s.value}-option`},Y.default.createElement(vn.components.Option,ge(le({},s),{className:(0,gn.default)(F.option,{[F.selected]:I||k,[F.disabled]:x})}),Y.default.createElement("div",{className:F.image},y?Y.default.createElement("span",{className:F.icon},a?Y.default.createElement(a,null):Y.default.createElement(at,null)):S?Y.default.createElement("img",{src:S,className:F.icon}):Y.default.createElement("span",{className:F.icon},Y.default.createElement(sn.FontAwesomeIcon,{icon:_n.faDiamond,className:F.diamond}))),Y.default.createElement("div",{className:F.info},Y.default.createElement("div",{className:F.left},Y.default.createElement("div",{className:F.ticker},Y.default.createElement("span",{className:F.value},A.inputValue?Y.default.createElement(Sn,{text:f.token.ticker,highlight:A.inputValue}):f.token.ticker),i&&Y.default.createElement(i,{token:f.token})),d&&Y.default.createElement("small",{className:F.price},T)),Y.default.createElement("div",{className:F.right},Y.default.createElement("span",{className:F.value},v),p&&q&&Y.default.createElement(hn.UsdValue,{usd:1,decimals:4,amount:q,"data-testid":"token-price-usd-value",className:F.price,addEqualSign:!1}))),Y.default.createElement("div",{className:F.children},s.children)))};C();var mo=$(l("react")),wn=$(l("classnames")),xn=l("react-select"),pt=a=>i=>{let{selectProps:p,children:d}=i,s=p.value;return mo.default.createElement(xn.components.SingleValue,ge(le({},i),{className:(0,wn.default)(F.single,{[F.focused]:i.selectProps.menuIsOpen})}),mo.default.createElement("div",{className:F.ticker},d,a&&mo.default.createElement(a,{token:s==null?void 0:s.token})))},{Menu:En,Control:In,Input:qn,MenuList:Tn,IndicatorsContainer:An,Placeholder:Cn}=tt,Bn=a=>{let{name:i,options:p,isLoading:d=!1,className:s="",noOptionsMessage:h="No Tokens",disabledOption:_,rewaLabel:n,RewaIcon:E,disabled:b,value:I,onBlur:k,onFocus:x,onChange:A,onMenuOpen:f,chainId:y,wrapperClassName:S="",showTokenPrice:v=!1,showBalanceUsdValue:T=!1,selectedTokenIconClassName:q,TokenTickerIcon:P}=a,O=(0,ye.useRef)(null),D=[n,Lr(y)],te=(0,ye.useMemo)(()=>lt({rewaLabel:n,RewaIcon:E,showTokenPrice:v,showBalanceUsdValue:T,TokenTickerIcon:P}),[]),J=(0,ye.useMemo)(()=>nt(n,q,E),[]),X=(0,ye.useMemo)(()=>pt(P),[]);(0,ye.useEffect)(()=>{let U=p.find(M=>M.value===(I==null?void 0:I.value)),L=(U==null?void 0:U.token.balance)===(I==null?void 0:I.token.balance);!U||L||A(U)},[p]);let Z=U=>D.includes(U),ce=U=>{var L;let M=U.value===(_==null?void 0:_.value),Q=Z(U.value),ne=Z((L=_==null?void 0:_.value)!=null?L:"");return M||Q&&ne},re=(U,L)=>{let M=U.data.token.ticker?U.data.token.ticker.toLowerCase().includes(L.toLowerCase()):!1,Q=U.data.token.name.toLowerCase().includes(L.toLowerCase());return Boolean(L)?M||Q:!0};return ye.default.createElement("div",{"data-testid":`${i}Select`,className:`${S} ${d?"select-holder-loading":""}`},ye.default.createElement("label",{htmlFor:i,"data-testid":"tokenIdLabel",className:F.label},"Token"),ye.default.createElement(Br.default,{ref:O,inputId:i,name:i,options:p,openMenuOnFocus:!0,isDisabled:b,isLoading:d,value:I,isOptionDisabled:ce,onBlur:k,filterOption:re,onFocus:x,onChange:U=>{A(U),O&&O.current!==null&&O.current.blur()},isSearchable:a.isSearchable,maxMenuHeight:260,onMenuOpen:f,noOptionsMessage:()=>h,className:(0,Cr.default)(F.select,s,{[F.disabled]:a.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:En,Control:In,Input:qn,MenuList:Tn,IndicatorsContainer:An,ValueContainer:J,Placeholder:Cn,Option:te,SingleValue:X}}))};C();C();var Nn=$(l("react")),Ln=$(l("classnames")),Un=({hasErrors:a,className:i,error:p,"data-testid":d})=>a?Nn.default.createElement("div",{className:(0,Ln.default)(He.error,i),"data-testid":d},p):null;C();C();var _o=$(l("react")),On=$(l("classnames"));C();var Dn=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Dn));var so={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"},Pn=({label:a,value:i,className:p,token:d,"data-testid":s,"data-value":h})=>_o.default.createElement("div",{"data-testid":s,"data-value":h,className:(0,On.default)(so.balance,p)},_o.default.createElement("span",{className:so.label},a,": "),_o.default.createElement("span",{className:so.value},i)," ",d==null?void 0:d.ticker),Mn=({className:a,label:i,name:p,wrapperControlsClassName:d,tokenSelectProps:s,tokenBalanceProps:h,amountInputProps:_,amountErrorProps:n,maxButtonProps:E,readonly:b})=>ue.default.createElement("div",{className:(0,co.default)(Ae.amount,a)},ue.default.createElement("div",{className:Ae.label},i&&ue.default.createElement("label",{htmlFor:p,className:He.label,"data-testid":"amountLabel"},i),ue.default.createElement(Pn,le({},h))),ue.default.createElement("div",{className:(0,co.default)(Ae.wrapper,d,{[Ae.error]:_.isInvalid||s.isInvalid||n.hasErrors,[Ae.disabled]:b})},ue.default.createElement(br,le({},_)),ue.default.createElement("div",{className:(0,co.default)(Ae.interaction,E.wrapperClassName)},E.isMaxButtonVisible&&ue.default.createElement(Ar,le({},E)),ue.default.createElement("div",{className:Ae.select},ue.default.createElement(Bn,le({},s))))),ue.default.createElement(Un,le({},n)));});var $t=Oo((Xi,jt)=>{"use strict";Oe();var Fn=Object.create,$e=Object.defineProperty,Rn=Object.defineProperties,zn=Object.getOwnPropertyDescriptor,jn=Object.getOwnPropertyDescriptors,$n=Object.getOwnPropertyNames,Qe=Object.getOwnPropertySymbols,Vn=Object.getPrototypeOf,Ao=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable,dt=(a,i,p)=>i in a?$e(a,i,{enumerable:!0,configurable:!0,writable:!0,value:p}):a[i]=p,pe=(a,i)=>{for(var p in i||(i={}))Ao.call(i,p)&&dt(a,p,i[p]);if(Qe)for(var p of Qe(i))Et.call(i,p)&&dt(a,p,i[p]);return a},ve=(a,i)=>Rn(a,jn(i)),Gn=(a,i)=>{var p={};for(var d in a)Ao.call(a,d)&&i.indexOf(d)<0&&(p[d]=a[d]);if(a!=null&&Qe)for(var d of Qe(a))i.indexOf(d)<0&&Et.call(a,d)&&(p[d]=a[d]);return p},It=(a,i)=>()=>(a&&(i=a(a=0)),i),oo=(a,i)=>()=>(i||a((i={exports:{}}).exports,i),i.exports),Co=(a,i)=>{for(var p in i)$e(a,p,{get:i[p],enumerable:!0})},qt=(a,i,p,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of $n(i))!Ao.call(a,s)&&s!==p&&$e(a,s,{get:()=>i[s],enumerable:!(d=zn(i,s))||d.enumerable});return a},w=(a,i,p)=>(p=a!=null?Fn(Vn(a)):{},qt(i||!a||!a.__esModule?$e(p,"default",{value:a,enumerable:!0}):p,a)),Bo=a=>qt($e({},"__esModule",{value:!0}),a),to=(a,i,p)=>new Promise((d,s)=>{var h=E=>{try{n(p.next(E))}catch(b){s(b)}},_=E=>{try{n(p.throw(E))}catch(b){s(b)}},n=E=>E.done?d(E.value):Promise.resolve(E.value).then(h,_);n((p=p.apply(a,i)).next())}),Wn=oo(a=>{"use strict";m(),a.byteLength=E,a.toByteArray=I,a.fromByteArray=A;var i=[],p=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(h=0,_=s.length;h<_;++h)i[h]=s[h],p[s.charCodeAt(h)]=h;var h,_;p["-".charCodeAt(0)]=62,p["_".charCodeAt(0)]=63;function n(f){var y=f.length;if(y%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var S=f.indexOf("=");S===-1&&(S=y);var v=S===y?0:4-S%4;return[S,v]}function E(f){var y=n(f),S=y[0],v=y[1];return(S+v)*3/4-v}function b(f,y,S){return(y+S)*3/4-S}function I(f){var y,S=n(f),v=S[0],T=S[1],q=new d(b(f,v,T)),P=0,O=T>0?v-4:v,D;for(D=0;D<O;D+=4)y=p[f.charCodeAt(D)]<<18|p[f.charCodeAt(D+1)]<<12|p[f.charCodeAt(D+2)]<<6|p[f.charCodeAt(D+3)],q[P++]=y>>16&255,q[P++]=y>>8&255,q[P++]=y&255;return T===2&&(y=p[f.charCodeAt(D)]<<2|p[f.charCodeAt(D+1)]>>4,q[P++]=y&255),T===1&&(y=p[f.charCodeAt(D)]<<10|p[f.charCodeAt(D+1)]<<4|p[f.charCodeAt(D+2)]>>2,q[P++]=y>>8&255,q[P++]=y&255),q}function k(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function x(f,y,S){for(var v,T=[],q=y;q<S;q+=3)v=(f[q]<<16&16711680)+(f[q+1]<<8&65280)+(f[q+2]&255),T.push(k(v));return T.join("")}function A(f){for(var y,S=f.length,v=S%3,T=[],q=16383,P=0,O=S-v;P<O;P+=q)T.push(x(f,P,P+q>O?O:P+q));return v===1?(y=f[S-1],T.push(i[y>>2]+i[y<<4&63]+"==")):v===2&&(y=(f[S-2]<<8)+f[S-1],T.push(i[y>>10]+i[y>>4&63]+i[y<<2&63]+"=")),T.join("")}}),Zn=oo(a=>{m(),a.read=function(i,p,d,s,h){var _,n,E=h*8-s-1,b=(1<<E)-1,I=b>>1,k=-7,x=d?h-1:0,A=d?-1:1,f=i[p+x];for(x+=A,_=f&(1<<-k)-1,f>>=-k,k+=E;k>0;_=_*256+i[p+x],x+=A,k-=8);for(n=_&(1<<-k)-1,_>>=-k,k+=s;k>0;n=n*256+i[p+x],x+=A,k-=8);if(_===0)_=1-I;else{if(_===b)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,s),_=_-I}return(f?-1:1)*n*Math.pow(2,_-s)},a.write=function(i,p,d,s,h,_){var n,E,b,I=_*8-h-1,k=(1<<I)-1,x=k>>1,A=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=s?0:_-1,y=s?1:-1,S=p<0||p===0&&1/p<0?1:0;for(p=Math.abs(p),isNaN(p)||p===1/0?(E=isNaN(p)?1:0,n=k):(n=Math.floor(Math.log(p)/Math.LN2),p*(b=Math.pow(2,-n))<1&&(n--,b*=2),n+x>=1?p+=A/b:p+=A*Math.pow(2,1-x),p*b>=2&&(n++,b/=2),n+x>=k?(E=0,n=k):n+x>=1?(E=(p*b-1)*Math.pow(2,h),n=n+x):(E=p*Math.pow(2,x-1)*Math.pow(2,h),n=0));h>=8;i[d+f]=E&255,f+=y,E/=256,h-=8);for(n=n<<h|E,I+=h;I>0;i[d+f]=n&255,f+=y,n/=256,I-=8);i[d+f-y]|=S*128}}),Hn=oo(a=>{"use strict";m();var i=Wn(),p=Zn(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;a.Buffer=n,a.SlowBuffer=T,a.INSPECT_MAX_BYTES=50;var s=2147483647;a.kMaxLength=s,n.TYPED_ARRAY_SUPPORT=h(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function _(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return E(e,o,t)}n.poolSize=8192;function E(e,o,t){if(typeof e=="string")return x(e,o);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return y(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return n.from(r,o,t);var c=S(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,t){return E(e,o,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function b(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function I(e,o,t){return b(e),e<=0?_(e):o!==void 0?typeof t=="string"?_(e).fill(o,t):_(e).fill(o):_(e)}n.alloc=function(e,o,t){return I(e,o,t)};function k(e){return b(e),_(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return k(e)},n.allocUnsafeSlow=function(e){return k(e)};function x(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=q(e,o)|0,r=_(t),c=r.write(e,o);return c!==t&&(r=r.slice(0,c)),r}function A(e){for(var o=e.length<0?0:v(e.length)|0,t=_(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function f(e){if(H(e,Uint8Array)){var o=new Uint8Array(e);return y(o.buffer,o.byteOffset,o.byteLength)}return A(e)}function y(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,n.prototype),r}function S(e){if(n.isBuffer(e)){var o=v(e.length)|0,t=_(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Te(e.length)?_(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function v(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return e|0}function T(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,c=0,u=Math.min(t,r);c<u;++c)if(e[c]!==o[c]){t=e[c],r=o[c];break}return t<r?-1:r<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=n.allocUnsafe(o),c=0;for(t=0;t<e.length;++t){var u=e[t];if(H(u,Uint8Array))c+u.length>r.length?n.from(u).copy(r,c):Uint8Array.prototype.set.call(r,u,c);else if(n.isBuffer(u))u.copy(r,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=u.length}return r};function q(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return qe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Pe(e).length;default:if(c)return r?-1:qe(e).length;o=(""+o).toLowerCase(),c=!0}}n.byteLength=q;function P(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return De(this,o,t);case"utf8":case"utf-8":return L(this,o,t);case"ascii":return ne(this,o,t);case"latin1":case"binary":return xe(this,o,t);case"base64":return U(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fe(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}n.prototype._isBuffer=!0;function O(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)O(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)O(this,o,o+3),O(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)O(this,o,o+7),O(this,o+1,o+6),O(this,o+2,o+5),O(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?L(this,0,e):P.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=a.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},d&&(n.prototype[d]=n.prototype.inspect),n.prototype.compare=function(e,o,t,r,c){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),c===void 0&&(c=this.length),o<0||t>e.length||r<0||c>this.length)throw new RangeError("out of range index");if(r>=c&&o>=t)return 0;if(r>=c)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,c>>>=0,this===e)return 0;for(var u=c-r,g=t-o,B=Math.min(u,g),V=this.slice(r,c),N=e.slice(o,t),z=0;z<B;++z)if(V[z]!==N[z]){u=V[z],g=N[z];break}return u<g?-1:g<u?1:0};function D(e,o,t,r,c){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Te(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=n.from(o,r)),n.isBuffer(o))return o.length===0?-1:te(e,o,t,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):te(e,[o],t,r,c);throw new TypeError("val must be string, number or Buffer")}function te(e,o,t,r,c){var u=1,g=e.length,B=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;u=2,g/=2,B/=2,t/=2}function V(Me,Fe){return u===1?Me[Fe]:Me.readUInt16BE(Fe*u)}var N;if(c){var z=-1;for(N=t;N<g;N++)if(V(e,N)===V(o,z===-1?0:N-z)){if(z===-1&&(z=N),N-z+1===B)return z*u}else z!==-1&&(N-=N-z),z=-1}else for(t+B>g&&(t=g-B),N=t;N>=0;N--){for(var W=!0,be=0;be<B;be++)if(V(e,N+be)!==V(o,be)){W=!1;break}if(W)return N}return-1}n.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},n.prototype.indexOf=function(e,o,t){return D(this,e,o,t,!0)},n.prototype.lastIndexOf=function(e,o,t){return D(this,e,o,t,!1)};function J(e,o,t,r){t=Number(t)||0;var c=e.length-t;r?(r=Number(r),r>c&&(r=c)):r=c;var u=o.length;r>u/2&&(r=u/2);for(var g=0;g<r;++g){var B=parseInt(o.substr(g*2,2),16);if(Te(B))return g;e[t+g]=B}return g}function X(e,o,t,r){return he(qe(o,e.length-t),e,t,r)}function Z(e,o,t,r){return he(ao(o),e,t,r)}function ce(e,o,t,r){return he(Pe(o),e,t,r)}function re(e,o,t,r){return he(lo(o,e.length-t),e,t,r)}n.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-o;if((t===void 0||t>c)&&(t=c),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var u=!1;;)switch(r){case"hex":return J(this,e,o,t);case"utf8":case"utf-8":return X(this,e,o,t);case"ascii":case"latin1":case"binary":return Z(this,e,o,t);case"base64":return ce(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return re(this,e,o,t);default:if(u)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),u=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function U(e,o,t){return o===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,t))}function L(e,o,t){t=Math.min(e.length,t);for(var r=[],c=o;c<t;){var u=e[c],g=null,B=u>239?4:u>223?3:u>191?2:1;if(c+B<=t){var V,N,z,W;switch(B){case 1:u<128&&(g=u);break;case 2:V=e[c+1],(V&192)===128&&(W=(u&31)<<6|V&63,W>127&&(g=W));break;case 3:V=e[c+1],N=e[c+2],(V&192)===128&&(N&192)===128&&(W=(u&15)<<12|(V&63)<<6|N&63,W>2047&&(W<55296||W>57343)&&(g=W));break;case 4:V=e[c+1],N=e[c+2],z=e[c+3],(V&192)===128&&(N&192)===128&&(z&192)===128&&(W=(u&15)<<18|(V&63)<<12|(N&63)<<6|z&63,W>65535&&W<1114112&&(g=W))}}g===null?(g=65533,B=1):g>65535&&(g-=65536,r.push(g>>>10&1023|55296),g=56320|g&1023),r.push(g),c+=B}return Q(r)}var M=4096;function Q(e){var o=e.length;if(o<=M)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=M));return t}function ne(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]&127);return r}function xe(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]);return r}function De(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var c="",u=o;u<t;++u)c+=po[e[u]];return c}function fe(e,o,t){for(var r=e.slice(o,t),c="",u=0;u<r.length-1;u+=2)c+=String.fromCharCode(r[u]+r[u+1]*256);return c}n.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,n.prototype),r};function j(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||j(e,o,this.length);for(var r=this[e],c=1,u=0;++u<o&&(c*=256);)r+=this[e+u]*c;return r},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||j(e,o,this.length);for(var r=this[e+--o],c=1;o>0&&(c*=256);)r+=this[e+--o]*c;return r},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||j(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||j(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||j(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||j(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||j(e,o,this.length);for(var r=this[e],c=1,u=0;++u<o&&(c*=256);)r+=this[e+u]*c;return c*=128,r>=c&&(r-=Math.pow(2,8*o)),r},n.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||j(e,o,this.length);for(var r=o,c=1,u=this[e+--r];r>0&&(c*=256);)u+=this[e+--r]*c;return c*=128,u>=c&&(u-=Math.pow(2,8*o)),u},n.prototype.readInt8=function(e,o){return e=e>>>0,o||j(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||j(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||j(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||j(e,4,this.length),p.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||j(e,4,this.length),p.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||j(e,8,this.length),p.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||j(e,8,this.length),p.read(this,e,!1,52,8)};function G(e,o,t,r,c,u){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<u)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var c=Math.pow(2,8*t)-1;G(this,e,o,t,c,0)}var u=1,g=0;for(this[o]=e&255;++g<t&&(u*=256);)this[o+g]=e/u&255;return o+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var c=Math.pow(2,8*t)-1;G(this,e,o,t,c,0)}var u=t-1,g=1;for(this[o+u]=e&255;--u>=0&&(g*=256);)this[o+u]=e/g&255;return o+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var c=Math.pow(2,8*t-1);G(this,e,o,t,c-1,-c)}var u=0,g=1,B=0;for(this[o]=e&255;++u<t&&(g*=256);)e<0&&B===0&&this[o+u-1]!==0&&(B=1),this[o+u]=(e/g>>0)-B&255;return o+t},n.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var c=Math.pow(2,8*t-1);G(this,e,o,t,c-1,-c)}var u=t-1,g=1,B=0;for(this[o+u]=e&255;--u>=0&&(g*=256);)e<0&&B===0&&this[o+u+1]!==0&&(B=1),this[o+u]=(e/g>>0)-B&255;return o+t},n.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||G(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function Ee(e,o,t,r,c,u){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ie(e,o,t,r,c){return o=+o,t=t>>>0,c||Ee(e,o,t,4,34028234663852886e22,-34028234663852886e22),p.write(e,o,t,r,23,4),t+4}n.prototype.writeFloatLE=function(e,o,t){return Ie(this,e,o,!0,t)},n.prototype.writeFloatBE=function(e,o,t){return Ie(this,e,o,!1,t)};function ae(e,o,t,r,c){return o=+o,t=t>>>0,c||Ee(e,o,t,8,17976931348623157e292,-17976931348623157e292),p.write(e,o,t,r,52,8),t+8}n.prototype.writeDoubleLE=function(e,o,t){return ae(this,e,o,!0,t)},n.prototype.writeDoubleBE=function(e,o,t){return ae(this,e,o,!1,t)},n.prototype.copy=function(e,o,t,r){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var c=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),c},n.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var c=e.charCodeAt(0);(r==="utf8"&&c<128||r==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var u;if(typeof e=="number")for(u=o;u<t;++u)this[u]=e;else{var g=n.isBuffer(e)?e:n.from(e,r),B=g.length;if(B===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(u=0;u<t-o;++u)this[u+o]=g[u%B]}return this};var ro=/[^+/0-9A-Za-z-_]/g;function no(e){if(e=e.split("=")[0],e=e.trim().replace(ro,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function qe(e,o){o=o||1/0;for(var t,r=e.length,c=null,u=[],g=0;g<r;++g){if(t=e.charCodeAt(g),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&u.push(239,191,189);continue}else if(g+1===r){(o-=3)>-1&&u.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&u.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&u.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;u.push(t)}else if(t<2048){if((o-=2)<0)break;u.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;u.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;u.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return u}function ao(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function lo(e,o){for(var t,r,c,u=[],g=0;g<e.length&&!((o-=2)<0);++g)t=e.charCodeAt(g),r=t>>8,c=t%256,u.push(c),u.push(r);return u}function Pe(e){return i.toByteArray(no(e))}function he(e,o,t,r){for(var c=0;c<r&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function H(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Te(e){return e!==e}var po=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,c=0;c<16;++c)o[r+c]=e[t]+e[c];return o}()}),Yn=oo((a,i)=>{m();var p=i.exports={},d,s;function h(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=h}catch(v){d=h}try{typeof clearTimeout=="function"?s=clearTimeout:s=_}catch(v){s=_}})();function n(v){if(d===setTimeout)return setTimeout(v,0);if((d===h||!d)&&setTimeout)return d=setTimeout,setTimeout(v,0);try{return d(v,0)}catch(T){try{return d.call(null,v,0)}catch(q){return d.call(this,v,0)}}}function E(v){if(s===clearTimeout)return clearTimeout(v);if((s===_||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(v);try{return s(v)}catch(T){try{return s.call(null,v)}catch(q){return s.call(this,v)}}}var b=[],I=!1,k,x=-1;function A(){!I||!k||(I=!1,k.length?b=k.concat(b):x=-1,b.length&&f())}function f(){if(!I){var v=n(A);I=!0;for(var T=b.length;T;){for(k=b,b=[];++x<T;)k&&k[x].run();x=-1,T=b.length}k=null,I=!1,E(v)}}p.nextTick=function(v){var T=new Array(arguments.length-1);if(arguments.length>1)for(var q=1;q<arguments.length;q++)T[q-1]=arguments[q];b.push(new y(v,T)),b.length===1&&!I&&n(f)};function y(v,T){this.fun=v,this.array=T}y.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={};function S(){}p.on=S,p.addListener=S,p.once=S,p.off=S,p.removeListener=S,p.removeAllListeners=S,p.emit=S,p.prependListener=S,p.prependOnceListener=S,p.listeners=function(v){return[]},p.binding=function(v){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(v){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}}),Kn,Jn,Xn,m=It(()=>{Kn=w(Hn()),Jn=w(Yn()),Xn=function(a){function i(){var d=this||self;return delete a.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return i();a.defineProperty(a.prototype,"__magic__",{configurable:!0,get:i});var p=__magic__;return p}(Object)}),No={};Co(No,{default:()=>Tt});var Ke,ut,Tt,At=It(()=>{"use strict";m(),Ke=w(l("react")),ut=a=>Ke.createElement("svg",pe({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},a),Ke.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Ke.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Tt=ut}),Ct={};Co(Ct,{AmountSelectInput:()=>vp});jt.exports=Bo(Ct);m();var vo=w(l("react")),Qn=l("@terradharitri/sdk-dapp/constants"),ea=l("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");m();var oa=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(oa));var je={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};m();var Tp=w(l("react")),Ap=l("@terradharitri/sdk-dapp/constants/index");m();m();m();var Cp=w(l("axios"));m();m();m();var ta=l("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");m();var ra=l("@terradharitri/sdk-dapp/constants/index");m();m();m();m();var Bt="5000000000000000",na="WREWA-bd4d79",aa={D:"devnet",T:"testnet",1:"mainnet"},la={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function pa(a){return aa[a]}function ca(a){return la[a]||na}function ia(a){let i=pa(a),p=ra.fallbackNetworkConfigurations[i].apiAddress;if(!p)throw"Could not extract api address for environment, check if you have a valid chainID";return p}function da(a){return to(this,null,function*(){let i=ia(a);return yield(0,ta.getServerConfiguration)(i)})}m();var eo={value:null};function ua(a){return eo.value={baseURL:a.apiAddress,timeout:Number(a.apiTimeout)},eo.value}function ma(a){return to(this,null,function*(){if(eo.value!=null)return eo.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),a!=null){let p=yield da(a);return ua(p)}let i="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(i),i})}m();m();var _a=w(l("axios"));function sa(){return to(this,null,function*(){try{let a=yield ma(),{data:i}=yield _a.default.get("economics",a);return i}catch(a){return console.error("err fetching economics info",a),null}})}m();m();var Bp=l("@terradharitri/sdk-dapp/apiCalls/endpoints"),Np=l("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Lp=w(l("axios")),Up=w(l("lodash/uniqBy"));m();var Op=l("@terradharitri/sdk-dapp/apiCalls/endpoints"),Dp=w(l("axios"));m();m();m();var fa=l("@terradharitri/sdk-dapp/types/tokens.types");m();m();m();m();var Pp=l("@terradharitri/sdk-dapp/apiCalls/endpoints"),Mp=w(l("axios"));m();m();var Fp=w(l("axios"));m();var ha=w(l("react")),Rp=(0,ha.createContext)({});m();m();var ba=w(l("react")),zp=l("@terradharitri/sdk-dapp/constants/index"),jp=l("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),$p=w(l("bignumber.js")),Vp=l("formik");m();m();m();var Gp=l("bech32");m();m();m();var ga=(a,i)=>typeof i=="boolean"?i:Array.isArray(i)&&i.includes(a);m();m();m();var Wp=l("@terradharitri/sdk-dapp/constants"),Zp=l("@terradharitri/sdk-dapp/utils/account/getAccount");m();m();var Hp=l("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");m();var Yp=l("@terradharitri/sdk-dapp/utils/buildUrlParams");m();var Kp=w(l("anchorme"));m();m();var Jp=l("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),va=l("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Xp=l("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Qp=l("@terradharitri/sdk-dapp/utils/operations/parseAmount");m();m();var Nt=w(l("react")),ec=l("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),oc=l("formik");m();m();var tc=l("@terradharitri/sdk-dapp/constants/index"),rc=l("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),nc=w(l("bignumber.js"));m();m();var ac=l("@terradharitri/sdk-dapp/constants/index");m();var lc=l("@terradharitri/sdk-dapp/constants/index");m();var pc=l("@terradharitri/sdk-dapp/constants/index"),cc=w(l("bignumber.js"));m();var ic=l("@terradharitri/sdk-dapp/constants/index");m();var dc=l("@terradharitri/sdk-dapp/constants/index");m();m();var uc=l("@terradharitri/sdk-core"),mc=l("@terradharitri/sdk-dapp/constants/index"),_c=w(l("bignumber.js"));m();m();var sc=l("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");m();var fc=l("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");m();var hc=w(l("bignumber.js"));m();var bc=l("@terradharitri/sdk-dapp/constants/index"),gc=l("@terradharitri/sdk-dapp/utils/smartContracts"),vc=l("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),kc=w(l("bignumber.js"));m();var yc=w(l("bignumber.js"));m();var ko=l("@terradharitri/sdk-dapp/constants/index"),ka=w(l("bignumber.js")),mt,_t,st,ya=(0,va.formatAmount)({input:String((mt=ko.GAS_PRICE)!=null?mt:1e9),decimals:(_t=ko.DECIMALS)!=null?_t:18,showLastNonZeroDecimal:!0,digits:(st=ko.DIGITS)!=null?st:4}),Sc=new ka.default(ya).times(10).toString(10);m();var wc=l("@terradharitri/sdk-dapp/constants/index"),xc=w(l("bignumber.js"));m();var Ec=w(l("bignumber.js"));m();m();var Ic=l("yup");m();var ft=l("@terradharitri/sdk-dapp/constants/ledger.constants"),Sa=w(l("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Lo=l("yup"),wa=(0,Lo.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(a){let{ledger:i}=this.parent;return!(i&&a&&a.length&&!i.ledgerDataActive)}),xa=(0,Lo.string)().test({name:"hashSign",test:function(a){let{ledger:i,isGuarded:p}=this.parent;if(i){let{ledgerWithHashSign:d,ledgerWithGuardians:s}=(0,Sa.default)(i.version);if(a&&a.length>300&&!d)return this.createError({message:`Data too long. You need at least DharitrI app version ${ft.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(p&&!s)return this.createError({message:`You need at least DharitrI app version ${ft.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Ea=[wa,xa],qc=Ea.reduce((a,i)=>a.concat(i),(0,Lo.string)());m();var Tc=l("@terradharitri/sdk-dapp/constants/index"),Ac=l("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Cc=l("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Bc=l("yup");m();var Nc=l("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Lc=w(l("bignumber.js")),Uc=l("yup");m();var Oc=l("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Dc=w(l("bignumber.js")),Pc=l("yup");m();var Mc=l("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Fc=l("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Rc=w(l("bignumber.js")),zc=l("yup");m();var jc=w(l("bignumber.js")),$c=l("yup");m();var Vc=l("@terradharitri/sdk-dapp/constants/index"),Gc=l("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Wc=l("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Zc=w(l("bignumber.js")),Hc=l("yup");m();var Yc=l("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Kc=l("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Jc=l("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Xc=w(l("bignumber.js")),Qc=l("yup");m();var ei=w(l("bignumber.js")),oi=l("yup");m();var ti=l("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ri=l("yup");m();var ni=l("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ai=l("yup");m();m();var Ia=(0,Nt.createContext)({});function qa(){return(0,Nt.useContext)(Ia)}m();m();var Ta=w(l("react")),li=l("formik"),pi=w(l("lodash/uniqBy"));m();m();var Lt=w(l("react")),Aa=(0,Lt.createContext)({});function Ut(){return(0,Lt.useContext)(Aa)}m();m();var ht=l("react"),Ca=l("@terradharitri/sdk-dapp/constants/index"),yo=l("@terradharitri/sdk-dapp/types/enums.types");function Ba(){let{networkConfig:a}=Ut(),[i,p]=(0,ht.useState)(0);function d(){return to(this,null,function*(){let s=yield sa(),h=(s==null?void 0:s.price)||0;p(h)})}return(0,ht.useEffect)(()=>{![yo.EnvironmentsEnum.mainnet,yo.EnvironmentsEnum.testnet,yo.EnvironmentsEnum.devnet].includes(a==null?void 0:a.id)||d()},[a==null?void 0:a.id]),{rewaLabel:a.rewaLabel,rewaPriceInUsd:i,digits:Ca.DIGITS}}m();var ci=(0,Ta.createContext)({});m();m();var ii=l("@terradharitri/sdk-dapp/constants/index"),di=l("formik");m();m();var Na=w(l("react")),ui=l("@terradharitri/sdk-dapp/constants/index"),mi=l("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),_i=l("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),si=l("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),fi=w(l("bignumber.js")),hi=l("formik");m();m();m();m();var bi=w(l("bignumber.js"));m();var gi=l("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),vi=w(l("bignumber.js"));m();m();var ki=l("react"),yi=l("@terradharitri/sdk-dapp/constants/index"),Si=l("@terradharitri/sdk-dapp/utils/smartContracts"),wi=w(l("bignumber.js")),xi=l("formik");m();var Ei=l("react");m();m();var Ii=l("@terradharitri/sdk-dapp/constants/index"),qi=w(l("bignumber.js")),Ti=(0,Na.createContext)({}),Ai=(0,ba.createContext)({});m();m();var La=w(l("react")),Ci=l("formik"),Bi=(0,La.createContext)({});m();m();var Ua=w(l("react")),Ni=l("formik");m();m();m();var Li=l("react"),Ui=l("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Oi=w(l("lodash/uniqBy"));m();m();var Di=l("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Pi=l("@terradharitri/sdk-dapp/utils");m();var Mi=l("react");m();var Fi=l("react"),Ri=l("@terradharitri/sdk-dapp/utils/account/addressIsValid"),zi=(0,Ua.createContext)({});m();m();var Oa=w(l("react")),ji=l("formik");m();m();m();m();m();var $i=l("react"),Vi=l("@terradharitri/sdk-dapp/utils");m();var Gi=l("react"),Wi=l("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");m();m();var Zi=l("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Hi=w(l("axios"));m();var Yi=w(l("axios")),Ki=(0,Oa.createContext)({});m();var Ot=w(l("react")),Da=(0,Ot.createContext)({});function Pa(){return(0,Ot.useContext)(Da)}m();var me=w(l("react")),So=w(l("classnames"));m();var Ma=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ma));var Ne={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};m();m();m();var oe=w(l("react")),Fa=l("@terradharitri/sdk-dapp/utils/validation"),wo=w(l("bignumber.js")),bt=w(l("classnames")),Ra=l("react-number-format");m();var za=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(za));var Je={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};m();m();var Le=l("@terradharitri/sdk-dapp/constants/index"),ja=l("@terradharitri/sdk-dapp/utils/validation"),Se=w(l("bignumber.js")),$a=(a,i)=>{let p=i!=null?i:Le.DIGITS;if((0,ja.stringIsFloat)(a)){if(new Se.default(a).isZero())return"0";let d=new Se.default(a).toFormat(p);return d=parseFloat(d)>0?d:new Se.default(a).toFormat(Le.DIGITS),d=parseFloat(d)>0?d:new Se.default(a).toFormat(Le.DIGITS+2),d=parseFloat(d)>0?d:new Se.default(a).toFormat(Le.DIGITS+4),d=parseFloat(d)>0?d:new Se.default(a).toFormat(Le.DIGITS+6),d=parseFloat(d)>0?d:new Se.default(a).toFormat(Le.DIGITS+10),parseFloat(d)>0?d:new Se.default(a).toFormat(Le.DIGITS+14)}return"0"};m();var gt=a=>a.replace(/,/g,"");m();var vt=l("react"),Va={value:"",count:0},Ga=(a,i)=>{let[p,d]=(0,vt.useState)(Va);return(0,vt.useEffect)(()=>{let s=setTimeout(()=>{d(a)},i);return()=>clearTimeout(s)},[a.count]),p};m();var Wa=w(l("bignumber.js")),Za=a=>{let[i,p]=a.split(""),d=new Wa.default(i).isZero();return Boolean(d&&p&&p!==".")},Ha=500,kt=1e13,Ya=({"data-testid":a,InfoDustComponent:i,disabled:p,handleBlur:d,handleChange:s,name:h,onDebounceChange:_,onFocus:n,onKeyDown:E,placeholder:b,required:I,usdPrice:k,value:x,usdValue:A,className:f,autoFocus:y,suffix:S})=>{let v=(0,oe.useRef)(null),[T,q]=(0,oe.useState)(),[P,O]=(0,oe.useState)(!1),[D,te]=(0,oe.useState)({value:x,count:0}),[J,X]=(0,oe.useState)(),Z=Ga(D,Ha),ce=L=>{L.stopPropagation(),O(!0);let M=gt(L.target.value),Q=(0,wo.default)(M).isLessThanOrEqualTo(kt);if((M===""||Q)&&(q(M),L.target.value=M,s(L),_)){let ne={value:M,count:D.count+1};te(ne)}},re=()=>{if(A)return X(`$${A}`);if(!k||!x)return X(void 0);let L=gt(x);if(!(x!==""&&(0,Fa.stringIsFloat)(L))||L==="")return X(void 0);let M=$a(new wo.default(L).times(k!=null?k:0).toString(10),2);X(`$${M}`)},U=({value:L,floatValue:M})=>(!M||(0,wo.default)(M).isLessThanOrEqualTo(kt))&&!Za(L);return(0,oe.useEffect)(()=>{_&&P&&(O(!1),_(Z.value))},[Z]),(0,oe.useEffect)(re,[x,A,k]),(0,oe.useEffect)(()=>{x!==T&&q(x)},[x]),oe.default.createElement("div",{ref:v,className:(0,bt.default)(Je.amountHolder,{[Je.showUsdValue]:Boolean(J)},f)},oe.default.createElement(Ra.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":a||h,decimalSeparator:".",disabled:Boolean(p),id:h,inputMode:"decimal",isAllowed:U,name:h,onBlur:d,onChange:ce,onFocus:n,onKeyDown:E,placeholder:b,required:I,thousandSeparator:",",thousandsGroupStyle:"thousand",value:T,suffix:S,valueIsNumericString:!0,allowNegative:!1,autoFocus:y,className:(0,bt.default)(je.input,Je.amountInput,{[je.disabled]:Boolean(p)})}),J&&oe.default.createElement("span",{className:Je.amountHolderUsd},oe.default.createElement("small",{"data-testid":`tokenPrice_${k}`},J!=="$0"?oe.default.createElement(oe.default.Fragment,null,"\u2248 "):oe.default.createElement(oe.default.Fragment,null),J),i))},Ka=(0,oe.memo)(Ya,(a,i)=>a.value===i.value&&a.usdPrice===i.usdPrice&&a.className===i.className&&a.disabled===i.disabled&&a.usdValue===i.usdValue);m();m();var yt=w(l("react"));m();m();var ze=w(l("react")),Ja=l("@fortawesome/free-solid-svg-icons"),Xa=l("@fortawesome/react-fontawesome"),Qa=l("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),el=l("react-tooltip"),Ji=l("react-tooltip/dist/react-tooltip.css");m();var ol=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ol));var xo={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},tl=({rewaLabel:a})=>ze.default.createElement("div",{className:xo.infoDust},ze.default.createElement(el.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:xo.infoDustTooltip},"A minimal amount of"," ",ze.default.createElement(Qa.FormatAmount,{rewaLabel:a,value:Bt,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),ze.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:xo.infoDustTrigger},ze.default.createElement(Xa.FontAwesomeIcon,{icon:Ja.faInfoCircle,className:"i-icon"}))),rl=({rewaLabel:a,amount:i,maxAmountMinusDust:p,isMaxClicked:d,tokenId:s})=>i===p&&d&&s===a?yt.default.createElement("span",{style:{marginLeft:"0.2rem"}},yt.default.createElement(tl,{rewaLabel:a})):null;m();m();var nl=w(l("react")),al=l("@terradharitri/sdk-dapp/constants"),St=w(l("bignumber.js")),ll=w(l("classnames"));m();var wt=w(l("bignumber.js")),pl=a=>{let i=new wt.default(a!=null?a:"0"),p=new wt.default(Bt),d=i.minus(p);return d.isGreaterThan(0)?d.toString(10):"0"};m();var cl=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cl));var il={max:"dapp-core-component__maxButton-module__max"};m();var Ue=l("@terradharitri/sdk-dapp/constants"),dl=l("@terradharitri/sdk-dapp/utils/operations/formatAmount"),ul=l("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Uo=({amount:a="0",decimals:i=0,digits:p=Ue.DIGITS,addCommas:d=!1,showLastNonZeroDecimal:s=!1})=>{if(a==null||!(0,ul.stringIsInteger)(a))return"0";let h=n=>(0,dl.formatAmount)({input:a,digits:n,decimals:i,addCommas:d,showLastNonZeroDecimal:s}),_=h(p);return _=parseFloat(_)>0?_:h(Ue.DIGITS),_=parseFloat(_)>0?_:h(Ue.DIGITS+2),_=parseFloat(_)>0?_:h(Ue.DIGITS+4),_=parseFloat(_)>0?_:h(Ue.DIGITS+6),_=parseFloat(_)>0?_:h(Ue.DIGITS+10),parseFloat(_)>0?_:h(Ue.DIGITS+14)},ml=({token:a,rewaLabel:i,inputAmount:p,className:d,onMaxClick:s})=>{var h;let _=(a==null?void 0:a.identifier)===i,n=(h=a==null?void 0:a.balance)!=null?h:"0";if(n==="0")return null;let E=Uo({amount:_?pl(n):n,decimals:(a==null?void 0:a.decimals)||al.DECIMALS}),b=new St.default(p).isEqualTo(new St.default(E)),I=k=>{k.preventDefault(),s==null||s(E)};return b?null:nl.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,ll.default)(il.max,d),onClick:I,onMouseDown:k=>{k.preventDefault()}},"Max")};m();m();var we=w(l("react")),_l=w(l("classnames")),sl=w(l("react-select")),Dt={};Co(Dt,{Control:()=>Bl,IndicatorsContainer:()=>Fl,Input:()=>yl,Menu:()=>Tl,MenuList:()=>xl,DharitrIIcon:()=>Ft,Placeholder:()=>Ol,SmallLoader:()=>bl,ValueComponent:()=>Pt,getOption:()=>Rt,getSingleValue:()=>zt,getValueContainer:()=>Mt});m();m();var xt=w(l("react")),fl=l("@fortawesome/free-solid-svg-icons"),hl=l("@fortawesome/react-fontawesome"),bl=({show:a,color:i})=>a?xt.default.createElement("div",{className:"d-flex"},xt.default.createElement(hl.FontAwesomeIcon,{icon:fl.faSpinner,className:`fa-spin fast-spin ${i||"text-primary"}`})):null;m();m();var gl=w(l("react")),vl=l("react-select");m();var kl=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kl));var R={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},yl=a=>gl.default.createElement(vl.components.Input,ve(pe({},a),{className:R.dropdown,"data-testid":"tokenSelectInput"}));m();var Sl=w(l("react")),wl=l("react-select"),xl=a=>{let i=a,{rx:p}=i,d=Gn(i,["rx"]);return Sl.default.createElement(wl.components.MenuList,ve(pe({},d),{className:R.list}))};m();var Eo=w(l("react")),El=l("@fortawesome/free-solid-svg-icons"),Il=l("@fortawesome/react-fontawesome"),ql=l("react-select"),Tl=a=>Eo.default.createElement(ql.components.Menu,ve(pe({},a),{className:R.menu}),a.selectProps.isLoading?Eo.default.createElement("div",{className:R.loading},Eo.default.createElement(Il.FontAwesomeIcon,{icon:El.faCircleNotch,className:"fa-spin",size:"lg"})):a.children);m();var Al=w(l("react")),Cl=l("react-select"),Bl=a=>Al.default.createElement(Cl.components.Control,ve(pe({},a),{className:R.control}));m();var Nl=w(l("react")),Ll=w(l("classnames")),Ul=l("react-select"),Ol=a=>Nl.default.createElement(Ul.components.Placeholder,ve(pe({},a),{className:(0,Ll.default)(R.placeholder,{[R.focused]:a.isFocused})}));m();var Dl=w(l("react")),Pl=w(l("classnames")),Ml=l("react-select"),Fl=a=>Dl.default.createElement(Ml.components.IndicatorsContainer,ve(pe({},a),{className:(0,Pl.default)(R.indicator,{[R.expanded]:a.selectProps.menuIsOpen})}));m();var de=w(l("react")),Rl=l("@fortawesome/free-solid-svg-icons"),zl=l("@fortawesome/react-fontawesome"),jl=l("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),$l=w(l("classnames")),Vl=l("react-select"),Gl=(At(),Bo(No)).default,Pt=({RewaIcon:a,tokenId:i,icon:p})=>{let{isRewa:d}=(0,jl.getIdentifierType)(i);return d?de.default.createElement("span",{className:R.asset},a?de.default.createElement(a,{className:R.diamond}):de.default.createElement(Gl,{className:R.diamond})):p?de.default.createElement("img",{src:p,className:R.asset}):de.default.createElement(zl.FontAwesomeIcon,{icon:Rl.faDiamond,className:R.asset})},Wl=({children:a})=>de.default.createElement("div",{className:R.wrapper},a),Mt=(a,i,p)=>d=>{var s,h;let{selectProps:_,isDisabled:n,children:E}=d,b=_.value,I=(h=(s=b==null?void 0:b.assets)==null?void 0:s.svgUrl)!=null?h:null,k=(0,de.useMemo)(()=>{let x=String(b==null?void 0:b.token.usdPrice);return x!=null&&x.includes("$")?b==null?void 0:b.token.usdPrice:`$${b==null?void 0:b.token.usdPrice}`},[b==null?void 0:b.token.usdPrice]);return de.default.createElement(Vl.components.ValueContainer,ve(pe({},d),{className:R.container}),de.default.createElement("div",{className:(0,$l.default)(R.icon,i)},de.default.createElement(Pt,{RewaIcon:p,rewaLabel:a,icon:I,isDisabled:n,tokenId:b==null?void 0:b.value})),de.default.createElement("div",{className:R.payload},de.default.createElement(Wl,null,E,(b==null?void 0:b.token.usdPrice)&&de.default.createElement("small",{className:R.price},k))))};m();var K=w(l("react")),Zl=l("@fortawesome/free-solid-svg-icons"),Hl=l("@fortawesome/react-fontawesome"),Yl=l("@terradharitri/sdk-dapp/constants"),Kl=l("@terradharitri/sdk-dapp/UI/UsdValue"),Jl=l("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Xl=w(l("classnames")),Ql=l("react-select");m();m();var Xe=w(l("react"));m();var ep=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ep));var op={highlight:"dapp-core-component__styles-modules__highlight"},tp=({highlight:a,text:i=""})=>{let p=i.split(" "),d=a.toLowerCase(),s=new RegExp(`(${d})`,"gi"),h=p.map(_=>_.split(s).filter(n=>n));return Xe.default.createElement("span",{className:op.highlight},h.map((_,n)=>{let E=`${_}-${n}`;return Xe.default.createElement("span",{key:E},_.map((b,I)=>{let k=b.toLowerCase()===d,x=d&&k,A=`${b}-${I}`;return x?Xe.default.createElement("strong",{key:A},b):Xe.default.createElement("span",{key:A},b)}))}))},{default:Ft}=(At(),Bo(No)),Rt=({RewaIcon:a,TokenTickerIcon:i,showBalanceUsdValue:p,showTokenPrice:d})=>s=>{var h,_,n,E;let{data:b,isSelected:I,isFocused:k,isDisabled:x,selectProps:A}=s,f=b,{isRewa:y}=(0,Jl.getIdentifierType)(f.value),S=f.token.assets?f.token.assets.svgUrl:null,v=Uo({amount:f.token.balance,decimals:f.token.decimals||Yl.DECIMALS,addCommas:!0}),T=(_=(h=f.token)==null?void 0:h.usdPrice)==null?void 0:_.toString(),q=(E=(n=f.token)==null?void 0:n.valueUSD)==null?void 0:E.toString();return K.default.createElement("div",{"data-testid":`${s.value}-option`},K.default.createElement(Ql.components.Option,ve(pe({},s),{className:(0,Xl.default)(R.option,{[R.selected]:I||k,[R.disabled]:x})}),K.default.createElement("div",{className:R.image},y?K.default.createElement("span",{className:R.icon},a?K.default.createElement(a,null):K.default.createElement(Ft,null)):S?K.default.createElement("img",{src:S,className:R.icon}):K.default.createElement("span",{className:R.icon},K.default.createElement(Hl.FontAwesomeIcon,{icon:Zl.faDiamond,className:R.diamond}))),K.default.createElement("div",{className:R.info},K.default.createElement("div",{className:R.left},K.default.createElement("div",{className:R.ticker},K.default.createElement("span",{className:R.value},A.inputValue?K.default.createElement(tp,{text:f.token.ticker,highlight:A.inputValue}):f.token.ticker),i&&K.default.createElement(i,{token:f.token})),d&&K.default.createElement("small",{className:R.price},T)),K.default.createElement("div",{className:R.right},K.default.createElement("span",{className:R.value},v),p&&q&&K.default.createElement(Kl.UsdValue,{usd:1,decimals:4,amount:q,"data-testid":"token-price-usd-value",className:R.price,addEqualSign:!1}))),K.default.createElement("div",{className:R.children},s.children)))};m();var Io=w(l("react")),rp=w(l("classnames")),np=l("react-select"),zt=a=>i=>{let{selectProps:p,children:d}=i,s=p.value;return Io.default.createElement(np.components.SingleValue,ve(pe({},i),{className:(0,rp.default)(R.single,{[R.focused]:i.selectProps.menuIsOpen})}),Io.default.createElement("div",{className:R.ticker},d,a&&Io.default.createElement(a,{token:s==null?void 0:s.token})))},{Menu:ap,Control:lp,Input:pp,MenuList:cp,IndicatorsContainer:ip,Placeholder:dp}=Dt,up=a=>{let{name:i,options:p,isLoading:d=!1,className:s="",noOptionsMessage:h="No Tokens",disabledOption:_,rewaLabel:n,RewaIcon:E,disabled:b,value:I,onBlur:k,onFocus:x,onChange:A,onMenuOpen:f,chainId:y,wrapperClassName:S="",showTokenPrice:v=!1,showBalanceUsdValue:T=!1,selectedTokenIconClassName:q,TokenTickerIcon:P}=a,O=(0,we.useRef)(null),D=[n,ca(y)],te=(0,we.useMemo)(()=>Rt({rewaLabel:n,RewaIcon:E,showTokenPrice:v,showBalanceUsdValue:T,TokenTickerIcon:P}),[]),J=(0,we.useMemo)(()=>Mt(n,q,E),[]),X=(0,we.useMemo)(()=>zt(P),[]);(0,we.useEffect)(()=>{let U=p.find(M=>M.value===(I==null?void 0:I.value)),L=(U==null?void 0:U.token.balance)===(I==null?void 0:I.token.balance);!U||L||A(U)},[p]);let Z=U=>D.includes(U),ce=U=>{var L;let M=U.value===(_==null?void 0:_.value),Q=Z(U.value),ne=Z((L=_==null?void 0:_.value)!=null?L:"");return M||Q&&ne},re=(U,L)=>{let M=U.data.token.ticker?U.data.token.ticker.toLowerCase().includes(L.toLowerCase()):!1,Q=U.data.token.name.toLowerCase().includes(L.toLowerCase());return Boolean(L)?M||Q:!0};return we.default.createElement("div",{"data-testid":`${i}Select`,className:`${S} ${d?"select-holder-loading":""}`},we.default.createElement("label",{htmlFor:i,"data-testid":"tokenIdLabel",className:R.label},"Token"),we.default.createElement(sl.default,{ref:O,inputId:i,name:i,options:p,openMenuOnFocus:!0,isDisabled:b,isLoading:d,value:I,isOptionDisabled:ce,onBlur:k,filterOption:re,onFocus:x,onChange:U=>{A(U),O&&O.current!==null&&O.current.blur()},isSearchable:a.isSearchable,maxMenuHeight:260,onMenuOpen:f,noOptionsMessage:()=>h,className:(0,_l.default)(R.select,s,{[R.disabled]:a.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:ap,Control:lp,Input:pp,MenuList:cp,IndicatorsContainer:ip,ValueContainer:J,Placeholder:dp,Option:te,SingleValue:X}}))};m();m();var mp=w(l("react")),_p=w(l("classnames")),sp=({hasErrors:a,className:i,error:p,"data-testid":d})=>a?mp.default.createElement("div",{className:(0,_p.default)(je.error,i),"data-testid":d},p):null;m();m();var qo=w(l("react")),fp=w(l("classnames"));m();var hp=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hp));var To={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"},bp=({label:a,value:i,className:p,token:d,"data-testid":s,"data-value":h})=>qo.default.createElement("div",{"data-testid":s,"data-value":h,className:(0,fp.default)(To.balance,p)},qo.default.createElement("span",{className:To.label},a,": "),qo.default.createElement("span",{className:To.value},i)," ",d==null?void 0:d.ticker),gp=({className:a,label:i,name:p,wrapperControlsClassName:d,tokenSelectProps:s,tokenBalanceProps:h,amountInputProps:_,amountErrorProps:n,maxButtonProps:E,readonly:b})=>me.default.createElement("div",{className:(0,So.default)(Ne.amount,a)},me.default.createElement("div",{className:Ne.label},i&&me.default.createElement("label",{htmlFor:p,className:je.label,"data-testid":"amountLabel"},i),me.default.createElement(bp,pe({},h))),me.default.createElement("div",{className:(0,So.default)(Ne.wrapper,d,{[Ne.error]:_.isInvalid||s.isInvalid||n.hasErrors,[Ne.disabled]:b})},me.default.createElement(Ka,pe({},_)),me.default.createElement("div",{className:(0,So.default)(Ne.interaction,E.wrapperClassName)},E.isMaxButtonVisible&&me.default.createElement(ml,pe({},E)),me.default.createElement("div",{className:Ne.select},me.default.createElement(up,pe({},s))))),me.default.createElement(sp,pe({},n))),vp=()=>{var a,i;let{checkInvalid:p}=qa(),{tokensInfo:d,amountInfo:s,formInfo:h}=Pa(),{readonly:_}=h,{networkConfig:{rewaLabel:n,chainId:E}}=Ut(),{rewaPriceInUsd:b}=Ba(),{amount:I,onBlur:k,onChange:x,onMaxClicked:A,error:f,isInvalid:y,onFocus:S,maxAmountAvailable:v,isMaxClicked:T,isMaxButtonVisible:q,maxAmountMinusDust:P}=s,{allAvailableTokens:O,areTokensLoading:D,getTokens:te,isTokenIdInvalid:J,RewaIcon:X,nft:Z,onChangeTokenId:ce,tokenDetails:re,tokenId:U,tokenIdError:L}=d,M=O.map(ae=>({value:ae.identifier,label:String(ae.ticker),assets:ae.assets,token:ae})),{isRewa:Q}=(0,ea.getIdentifierType)(U),ne=M.find(({value:ae})=>ae===U),xe={id:"tokenId",value:ne,name:"tokenId",isLoading:D,options:M,isSearchable:!0,onChange:ae=>{ae&&(ce(ae.value),x(""))},onMenuOpen:te,disabled:ga("tokenId",_),error:L,isInvalid:J,rewaLabel:n,chainId:E,RewaIcon:X},De=(0,vo.useMemo)(()=>vo.default.createElement(rl,{amount:I,rewaLabel:n,maxAmountMinusDust:P,tokenId:U,isMaxClicked:T}),[I,n,P,U,T]),fe={name:"amount",required:!0,value:I,placeholder:"Amount",handleBlur:k,"data-testid":"amount",handleChange:x,onFocus:S,usdPrice:Q?b:void 0,error:f,isInvalid:y,InfoDustComponent:De},j={token:re,inputAmount:I,onMaxClick:A,isMaxClicked:T,isMaxButtonVisible:q},G=p("amount")&&!fe.value,Ee={hasErrors:fe.isInvalid||xe.isInvalid||G,error:fe.error||xe.error,className:je.error,"data-testid":fe.error?"amountError":"tokenIdError"},Ie={"data-testid":`available-${(a=Z==null?void 0:Z.identifier)!=null?a:U}`,"data-value":`${v} ${(i=Z==null?void 0:Z.identifier)!=null?i:U}`,label:"Available",token:ne==null?void 0:ne.token,value:Uo({amount:re.balance,decimals:re.decimals||Qn.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(Z==null?void 0:Z.type)===fa.NftEnumType.NonFungibleDCDT?null:vo.default.createElement(gp,{name:"tokenId",amountErrorProps:Ee,tokenSelectProps:xe,amountInputProps:fe,tokenBalanceProps:Ie,maxButtonProps:j,label:"Amount",readonly:_})};});var _e={};Oe();se(_e,Do(it()));se(_e,Do($t()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
