"use strict";import{a as N,b as Ie,d as W,e as ke,f as V}from"../../../../../../__chunks__/chunk-JH2LJGTQ.js";var me=Ie((io,de)=>{"use strict";V();var je=Object.create,D=Object.defineProperty,Pe=Object.defineProperties,Re=Object.getOwnPropertyDescriptor,ze=Object.getOwnPropertyDescriptors,Ne=Object.getOwnPropertyNames,le=Object.getOwnPropertySymbols,De=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,se=(_,s,l)=>s in _?D(_,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):_[s]=l,Fe=(_,s)=>{for(var l in s||(s={}))_e.call(s,l)&&se(_,l,s[l]);if(le)for(var l of le(s))qe.call(s,l)&&se(_,l,s[l]);return _},Ye=(_,s)=>Pe(_,ze(s)),We=(_,s)=>()=>(_&&(s=_(_=0)),s),J=(_,s)=>()=>(s||_((s={exports:{}}).exports,s),s.exports),Ve=(_,s)=>{for(var l in s)D(_,l,{get:s[l],enumerable:!0})},ie=(_,s,l,f)=>{if(s&&typeof s=="object"||typeof s=="function")for(let u of Ne(s))!_e.call(_,u)&&u!==l&&D(_,u,{get:()=>s[u],enumerable:!(f=Re(s,u))||f.enumerable});return _},Z=(_,s,l)=>(l=_!=null?je(De(_)):{},ie(s||!_||!_.__esModule?D(l,"default",{value:_,enumerable:!0}):l,_)),Xe=_=>ie(D({},"__esModule",{value:!0}),_),Ze=J(_=>{"use strict";I(),_.byteLength=T,_.toByteArray=S,_.fromByteArray=k;var s=[],l=[],f=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(g=0,v=u.length;g<v;++g)s[g]=u[g],l[u.charCodeAt(g)]=g;var g,v;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(a){var m=a.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=a.indexOf("=");y===-1&&(y=m);var d=y===m?0:4-y%4;return[y,d]}function T(a){var m=n(a),y=m[0],d=m[1];return(y+d)*3/4-d}function w(a,m,y){return(m+y)*3/4-y}function S(a){var m,y=n(a),d=y[0],E=y[1],b=new f(w(a,d,E)),j=0,R=E>0?d-4:d,C;for(C=0;C<R;C+=4)m=l[a.charCodeAt(C)]<<18|l[a.charCodeAt(C+1)]<<12|l[a.charCodeAt(C+2)]<<6|l[a.charCodeAt(C+3)],b[j++]=m>>16&255,b[j++]=m>>8&255,b[j++]=m&255;return E===2&&(m=l[a.charCodeAt(C)]<<2|l[a.charCodeAt(C+1)]>>4,b[j++]=m&255),E===1&&(m=l[a.charCodeAt(C)]<<10|l[a.charCodeAt(C+1)]<<4|l[a.charCodeAt(C+2)]>>2,b[j++]=m>>8&255,b[j++]=m&255),b}function h(a){return s[a>>18&63]+s[a>>12&63]+s[a>>6&63]+s[a&63]}function A(a,m,y){for(var d,E=[],b=m;b<y;b+=3)d=(a[b]<<16&16711680)+(a[b+1]<<8&65280)+(a[b+2]&255),E.push(h(d));return E.join("")}function k(a){for(var m,y=a.length,d=y%3,E=[],b=16383,j=0,R=y-d;j<R;j+=b)E.push(A(a,j,j+b>R?R:j+b));return d===1?(m=a[y-1],E.push(s[m>>2]+s[m<<4&63]+"==")):d===2&&(m=(a[y-2]<<8)+a[y-1],E.push(s[m>>10]+s[m>>4&63]+s[m<<2&63]+"=")),E.join("")}}),Je=J(_=>{I(),_.read=function(s,l,f,u,g){var v,n,T=g*8-u-1,w=(1<<T)-1,S=w>>1,h=-7,A=f?g-1:0,k=f?-1:1,a=s[l+A];for(A+=k,v=a&(1<<-h)-1,a>>=-h,h+=T;h>0;v=v*256+s[l+A],A+=k,h-=8);for(n=v&(1<<-h)-1,v>>=-h,h+=u;h>0;n=n*256+s[l+A],A+=k,h-=8);if(v===0)v=1-S;else{if(v===w)return n?NaN:(a?-1:1)*(1/0);n=n+Math.pow(2,u),v=v-S}return(a?-1:1)*n*Math.pow(2,v-u)},_.write=function(s,l,f,u,g,v){var n,T,w,S=v*8-g-1,h=(1<<S)-1,A=h>>1,k=g===23?Math.pow(2,-24)-Math.pow(2,-77):0,a=u?0:v-1,m=u?1:-1,y=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(T=isNaN(l)?1:0,n=h):(n=Math.floor(Math.log(l)/Math.LN2),l*(w=Math.pow(2,-n))<1&&(n--,w*=2),n+A>=1?l+=k/w:l+=k*Math.pow(2,1-A),l*w>=2&&(n++,w/=2),n+A>=h?(T=0,n=h):n+A>=1?(T=(l*w-1)*Math.pow(2,g),n=n+A):(T=l*Math.pow(2,A-1)*Math.pow(2,g),n=0));g>=8;s[f+a]=T&255,a+=m,T/=256,g-=8);for(n=n<<g|T,S+=g;S>0;s[f+a]=n&255,a+=m,n/=256,S-=8);s[f+a-m]|=y*128}}),Ge=J(_=>{"use strict";I();var s=Ze(),l=Je(),f=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=n,_.SlowBuffer=E,_.INSPECT_MAX_BYTES=50;var u=2147483647;_.kMaxLength=u,n.TYPED_ARRAY_SUPPORT=g(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function g(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function v(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return h(e)}return T(e,o,t)}n.poolSize=8192;function T(e,o,t){if(typeof e=="string")return A(e,o);if(ArrayBuffer.isView(e))return a(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return m(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return n.from(r,o,t);var c=y(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,t){return T(e,o,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function w(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function S(e,o,t){return w(e),e<=0?v(e):o!==void 0?typeof t=="string"?v(e).fill(o,t):v(e).fill(o):v(e)}n.alloc=function(e,o,t){return S(e,o,t)};function h(e){return w(e),v(e<0?0:d(e)|0)}n.allocUnsafe=function(e){return h(e)},n.allocUnsafeSlow=function(e){return h(e)};function A(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=b(e,o)|0,r=v(t),c=r.write(e,o);return c!==t&&(r=r.slice(0,c)),r}function k(e){for(var o=e.length<0?0:d(e.length)|0,t=v(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function a(e){if(z(e,Uint8Array)){var o=new Uint8Array(e);return m(o.buffer,o.byteOffset,o.byteLength)}return k(e)}function m(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,n.prototype),r}function y(e){if(n.isBuffer(e)){var o=d(e.length)|0,t=v(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||H(e.length)?v(0):k(e);if(e.type==="Buffer"&&Array.isArray(e.data))return k(e.data)}function d(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function E(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if(z(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),z(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,c=0,p=Math.min(t,r);c<p;++c)if(e[c]!==o[c]){t=e[c],r=o[c];break}return t<r?-1:r<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=n.allocUnsafe(o),c=0;for(t=0;t<e.length;++t){var p=e[t];if(z(p,Uint8Array))c+p.length>r.length?n.from(p).copy(r,c):Uint8Array.prototype.set.call(r,p,c);else if(n.isBuffer(p))p.copy(r,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return r};function b(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return G(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ne(e).length;default:if(c)return r?-1:G(e).length;o=(""+o).toLowerCase(),c=!0}}n.byteLength=b;function j(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ee(this,o,t);case"utf8":case"utf-8":return $(this,o,t);case"ascii":return we(this,o,t);case"latin1":case"binary":return xe(this,o,t);case"base64":return ge(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}n.prototype._isBuffer=!0;function R(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)R(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)R(this,o,o+3),R(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)R(this,o,o+7),R(this,o+1,o+6),R(this,o+2,o+5),R(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?$(this,0,e):j.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},f&&(n.prototype[f]=n.prototype.inspect),n.prototype.compare=function(e,o,t,r,c){if(z(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),c===void 0&&(c=this.length),o<0||t>e.length||r<0||c>this.length)throw new RangeError("out of range index");if(r>=c&&o>=t)return 0;if(r>=c)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,c>>>=0,this===e)return 0;for(var p=c-r,i=t-o,x=Math.min(p,i),L=this.slice(r,c),B=e.slice(o,t),U=0;U<x;++U)if(L[U]!==B[U]){p=L[U],i=B[U];break}return p<i?-1:i<p?1:0};function C(e,o,t,r,c){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,H(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=n.from(o,r)),n.isBuffer(o))return o.length===0?-1:Q(e,o,t,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Q(e,[o],t,r,c);throw new TypeError("val must be string, number or Buffer")}function Q(e,o,t,r,c){var p=1,i=e.length,x=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,i/=2,x/=2,t/=2}function L(ce,pe){return p===1?ce[pe]:ce.readUInt16BE(pe*p)}var B;if(c){var U=-1;for(B=t;B<i;B++)if(L(e,B)===L(o,U===-1?0:B-U)){if(U===-1&&(U=B),B-U+1===x)return U*p}else U!==-1&&(B-=B-U),U=-1}else for(t+x>i&&(t=i-x),B=t;B>=0;B--){for(var M=!0,Y=0;Y<x;Y++)if(L(e,B+Y)!==L(o,Y)){M=!1;break}if(M)return B}return-1}n.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},n.prototype.indexOf=function(e,o,t){return C(this,e,o,t,!0)},n.prototype.lastIndexOf=function(e,o,t){return C(this,e,o,t,!1)};function ue(e,o,t,r){t=Number(t)||0;var c=e.length-t;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var i=0;i<r;++i){var x=parseInt(o.substr(i*2,2),16);if(H(x))return i;e[t+i]=x}return i}function ye(e,o,t,r){return F(G(o,e.length-t),e,t,r)}function ve(e,o,t,r){return F(Ue(o),e,t,r)}function fe(e,o,t,r){return F(ne(o),e,t,r)}function he(e,o,t,r){return F(Te(o,e.length-t),e,t,r)}n.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-o;if((t===void 0||t>c)&&(t=c),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var p=!1;;)switch(r){case"hex":return ue(this,e,o,t);case"utf8":case"utf-8":return ye(this,e,o,t);case"ascii":case"latin1":case"binary":return ve(this,e,o,t);case"base64":return fe(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return he(this,e,o,t);default:if(p)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),p=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ge(e,o,t){return o===0&&t===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(o,t))}function $(e,o,t){t=Math.min(e.length,t);for(var r=[],c=o;c<t;){var p=e[c],i=null,x=p>239?4:p>223?3:p>191?2:1;if(c+x<=t){var L,B,U,M;switch(x){case 1:p<128&&(i=p);break;case 2:L=e[c+1],(L&192)===128&&(M=(p&31)<<6|L&63,M>127&&(i=M));break;case 3:L=e[c+1],B=e[c+2],(L&192)===128&&(B&192)===128&&(M=(p&15)<<12|(L&63)<<6|B&63,M>2047&&(M<55296||M>57343)&&(i=M));break;case 4:L=e[c+1],B=e[c+2],U=e[c+3],(L&192)===128&&(B&192)===128&&(U&192)===128&&(M=(p&15)<<18|(L&63)<<12|(B&63)<<6|U&63,M>65535&&M<1114112&&(i=M))}}i===null?(i=65533,x=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|i&1023),r.push(i),c+=x}return be(r)}var ee=4096;function be(e){var o=e.length;if(o<=ee)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=ee));return t}function we(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]&127);return r}function xe(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]);return r}function Ee(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var c="",p=o;p<t;++p)c+=Oe[e[p]];return c}function Ae(e,o,t){for(var r=e.slice(o,t),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}n.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,n.prototype),r};function O(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||O(e,o,this.length);for(var r=this[e],c=1,p=0;++p<o&&(c*=256);)r+=this[e+p]*c;return r},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||O(e,o,this.length);for(var r=this[e+--o],c=1;o>0&&(c*=256);)r+=this[e+--o]*c;return r},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||O(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||O(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||O(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||O(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||O(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||O(e,o,this.length);for(var r=this[e],c=1,p=0;++p<o&&(c*=256);)r+=this[e+p]*c;return c*=128,r>=c&&(r-=Math.pow(2,8*o)),r},n.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||O(e,o,this.length);for(var r=o,c=1,p=this[e+--r];r>0&&(c*=256);)p+=this[e+--r]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*o)),p},n.prototype.readInt8=function(e,o){return e=e>>>0,o||O(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||O(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||O(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||O(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||O(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||O(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||O(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||O(e,8,this.length),l.read(this,e,!1,52,8)};function P(e,o,t,r,c,p){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var c=Math.pow(2,8*t)-1;P(this,e,o,t,c,0)}var p=1,i=0;for(this[o]=e&255;++i<t&&(p*=256);)this[o+i]=e/p&255;return o+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var c=Math.pow(2,8*t)-1;P(this,e,o,t,c,0)}var p=t-1,i=1;for(this[o+p]=e&255;--p>=0&&(i*=256);)this[o+p]=e/i&255;return o+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var c=Math.pow(2,8*t-1);P(this,e,o,t,c-1,-c)}var p=0,i=1,x=0;for(this[o]=e&255;++p<t&&(i*=256);)e<0&&x===0&&this[o+p-1]!==0&&(x=1),this[o+p]=(e/i>>0)-x&255;return o+t},n.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var c=Math.pow(2,8*t-1);P(this,e,o,t,c-1,-c)}var p=t-1,i=1,x=0;for(this[o+p]=e&255;--p>=0&&(i*=256);)e<0&&x===0&&this[o+p+1]!==0&&(x=1),this[o+p]=(e/i>>0)-x&255;return o+t},n.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||P(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function oe(e,o,t,r,c,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function te(e,o,t,r,c){return o=+o,t=t>>>0,c||oe(e,o,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,o,t,r,23,4),t+4}n.prototype.writeFloatLE=function(e,o,t){return te(this,e,o,!0,t)},n.prototype.writeFloatBE=function(e,o,t){return te(this,e,o,!1,t)};function re(e,o,t,r,c){return o=+o,t=t>>>0,c||oe(e,o,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,o,t,r,52,8),t+8}n.prototype.writeDoubleLE=function(e,o,t){return re(this,e,o,!0,t)},n.prototype.writeDoubleBE=function(e,o,t){return re(this,e,o,!1,t)},n.prototype.copy=function(e,o,t,r){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var c=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),c},n.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var c=e.charCodeAt(0);(r==="utf8"&&c<128||r==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=o;p<t;++p)this[p]=e;else{var i=n.isBuffer(e)?e:n.from(e,r),x=i.length;if(x===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-o;++p)this[p+o]=i[p%x]}return this};var Be=/[^+/0-9A-Za-z-_]/g;function Se(e){if(e=e.split("=")[0],e=e.trim().replace(Be,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function G(e,o){o=o||1/0;for(var t,r=e.length,c=null,p=[],i=0;i<r;++i){if(t=e.charCodeAt(i),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(i+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Ue(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Te(e,o){for(var t,r,c,p=[],i=0;i<e.length&&!((o-=2)<0);++i)t=e.charCodeAt(i),r=t>>8,c=t%256,p.push(c),p.push(r);return p}function ne(e){return s.toByteArray(Se(e))}function F(e,o,t,r){for(var c=0;c<r&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function z(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function H(e){return e!==e}var Oe=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,c=0;c<16;++c)o[r+c]=e[t]+e[c];return o}()}),He=J((_,s)=>{I();var l=s.exports={},f,u;function g(){throw new Error("setTimeout has not been defined")}function v(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?f=setTimeout:f=g}catch(d){f=g}try{typeof clearTimeout=="function"?u=clearTimeout:u=v}catch(d){u=v}})();function n(d){if(f===setTimeout)return setTimeout(d,0);if((f===g||!f)&&setTimeout)return f=setTimeout,setTimeout(d,0);try{return f(d,0)}catch(E){try{return f.call(null,d,0)}catch(b){return f.call(this,d,0)}}}function T(d){if(u===clearTimeout)return clearTimeout(d);if((u===v||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(d);try{return u(d)}catch(E){try{return u.call(null,d)}catch(b){return u.call(this,d)}}}var w=[],S=!1,h,A=-1;function k(){!S||!h||(S=!1,h.length?w=h.concat(w):A=-1,w.length&&a())}function a(){if(!S){var d=n(k);S=!0;for(var E=w.length;E;){for(h=w,w=[];++A<E;)h&&h[A].run();A=-1,E=w.length}h=null,S=!1,T(d)}}l.nextTick=function(d){var E=new Array(arguments.length-1);if(arguments.length>1)for(var b=1;b<arguments.length;b++)E[b-1]=arguments[b];w.push(new m(d,E)),w.length===1&&!S&&n(a)};function m(d,E){this.fun=d,this.array=E}m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function y(){}l.on=y,l.addListener=y,l.once=y,l.off=y,l.removeListener=y,l.removeAllListeners=y,l.emit=y,l.prependListener=y,l.prependOnceListener=y,l.listeners=function(d){return[]},l.binding=function(d){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(d){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Ke,Qe,$e,I=We(()=>{Ke=Z(Ge()),Qe=Z(He()),$e=function(_){function s(){var f=this||self;return delete _.prototype.__magic__,f}if(typeof globalThis=="object")return globalThis;if(this)return s();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:s});var l=__magic__;return l}(Object)}),ae={};Ve(ae,{DropdownIndicator:()=>po});de.exports=Xe(ae);I();var K=Z(N("react")),eo=N("@fortawesome/free-solid-svg-icons"),oo=N("@fortawesome/react-fontawesome"),to=Z(N("classnames")),ro=N("react-select");I();I();var no=(_,s)=>{let l=s.toLowerCase(),f=_.label.toLowerCase(),u=_.value.toLowerCase();return s?f.includes(l)||u.includes(l):!0};I();var lo=N("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),so=N("@terradharitri/sdk-dapp/utils");I();I();I();I();I();I();var _o=N("@terradharitri/sdk-dapp/types/tokens.types");I();I();I();I();var co=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(co));var X={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"},po=_=>{let{selectProps:s,isDisabled:l,options:f}=_,{menuIsOpen:u,value:g,isLoading:v}=s,n=(0,K.useMemo)(()=>f.find(h=>{let A=h,k=g;return k?no(A,k.label):null}),[g,f]),T=f.length===0&&!v,w=Boolean(g)&&!n,S=l||T||w;return v?K.default.createElement(oo.FontAwesomeIcon,{icon:eo.faSpinner,spin:!0,className:X.receiverSelectSpinner}):K.default.createElement(ro.components.DropdownIndicator,Ye(Fe({},_),{className:(0,to.default)(X.receiverSelectIndicator,{[X.expanded]:u,[X.hidden]:S})}))};});var q={};V();W(q,ke(me()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
