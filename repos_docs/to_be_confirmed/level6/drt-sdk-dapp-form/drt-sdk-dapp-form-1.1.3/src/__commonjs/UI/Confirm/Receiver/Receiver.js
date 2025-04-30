"use strict";var Or=Object.create;var W=Object.defineProperty;var Jr=Object.getOwnPropertyDescriptor;var Qr=Object.getOwnPropertyNames,tr=Object.getOwnPropertySymbols,Zr=Object.getPrototypeOf,pr=Object.prototype.hasOwnProperty,$r=Object.prototype.propertyIsEnumerable;var ir=(o,r,e)=>r in o?W(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,ar=(o,r)=>{for(var e in r||(r={}))pr.call(r,e)&&ir(o,e,r[e]);if(tr)for(var e of tr(r))$r.call(r,e)&&ir(o,e,r[e]);return o};var lr=(o,r)=>()=>(o&&(r=o(o=0)),r);var q=(o,r)=>()=>(r||o((r={exports:{}}).exports,r),r.exports),cr=(o,r)=>{for(var e in r)W(o,e,{get:r[e],enumerable:!0})},ur=(o,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of Qr(r))!pr.call(o,t)&&t!==e&&W(o,t,{get:()=>r[t],enumerable:!(n=Jr(r,t))||n.enumerable});return o};var P=(o,r,e)=>(e=o!=null?Or(Zr(o)):{},ur(r||!o||!o.__esModule?W(e,"default",{value:o,enumerable:!0}):e,o)),fr=o=>ur(W({},"__esModule",{value:!0}),o);var dr=q(X=>{"use strict";m();X.byteLength=jr;X.toByteArray=re;X.fromByteArray=ne;var v=[],x=[],Kr=typeof Uint8Array!="undefined"?Uint8Array:Array,J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(S=0,sr=J.length;S<sr;++S)v[S]=J[S],x[J.charCodeAt(S)]=S;var S,sr;x["-".charCodeAt(0)]=62;x["_".charCodeAt(0)]=63;function mr(o){var r=o.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=o.indexOf("=");e===-1&&(e=r);var n=e===r?0:4-e%4;return[e,n]}function jr(o){var r=mr(o),e=r[0],n=r[1];return(e+n)*3/4-n}function Dr(o,r,e){return(r+e)*3/4-e}function re(o){var r,e=mr(o),n=e[0],t=e[1],i=new Kr(Dr(o,n,t)),p=0,l=t>0?n-4:n,c;for(c=0;c<l;c+=4)r=x[o.charCodeAt(c)]<<18|x[o.charCodeAt(c+1)]<<12|x[o.charCodeAt(c+2)]<<6|x[o.charCodeAt(c+3)],i[p++]=r>>16&255,i[p++]=r>>8&255,i[p++]=r&255;return t===2&&(r=x[o.charCodeAt(c)]<<2|x[o.charCodeAt(c+1)]>>4,i[p++]=r&255),t===1&&(r=x[o.charCodeAt(c)]<<10|x[o.charCodeAt(c+1)]<<4|x[o.charCodeAt(c+2)]>>2,i[p++]=r>>8&255,i[p++]=r&255),i}function ee(o){return v[o>>18&63]+v[o>>12&63]+v[o>>6&63]+v[o&63]}function oe(o,r,e){for(var n,t=[],i=r;i<e;i+=3)n=(o[i]<<16&16711680)+(o[i+1]<<8&65280)+(o[i+2]&255),t.push(ee(n));return t.join("")}function ne(o){for(var r,e=o.length,n=e%3,t=[],i=16383,p=0,l=e-n;p<l;p+=i)t.push(oe(o,p,p+i>l?l:p+i));return n===1?(r=o[e-1],t.push(v[r>>2]+v[r<<4&63]+"==")):n===2&&(r=(o[e-2]<<8)+o[e-1],t.push(v[r>>10]+v[r>>4&63]+v[r<<2&63]+"=")),t.join("")}});var hr=q(Q=>{m();Q.read=function(o,r,e,n,t){var i,p,l=t*8-n-1,c=(1<<l)-1,f=c>>1,s=-7,u=e?t-1:0,y=e?-1:1,b=o[r+u];for(u+=y,i=b&(1<<-s)-1,b>>=-s,s+=l;s>0;i=i*256+o[r+u],u+=y,s-=8);for(p=i&(1<<-s)-1,i>>=-s,s+=n;s>0;p=p*256+o[r+u],u+=y,s-=8);if(i===0)i=1-f;else{if(i===c)return p?NaN:(b?-1:1)*(1/0);p=p+Math.pow(2,n),i=i-f}return(b?-1:1)*p*Math.pow(2,i-n)};Q.write=function(o,r,e,n,t,i){var p,l,c,f=i*8-t-1,s=(1<<f)-1,u=s>>1,y=t===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=n?0:i-1,N=n?1:-1,Gr=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(l=isNaN(r)?1:0,p=s):(p=Math.floor(Math.log(r)/Math.LN2),r*(c=Math.pow(2,-p))<1&&(p--,c*=2),p+u>=1?r+=y/c:r+=y*Math.pow(2,1-u),r*c>=2&&(p++,c/=2),p+u>=s?(l=0,p=s):p+u>=1?(l=(r*c-1)*Math.pow(2,t),p=p+u):(l=r*Math.pow(2,u-1)*Math.pow(2,t),p=0));t>=8;o[e+b]=l&255,b+=N,l/=256,t-=8);for(p=p<<t|l,f+=t;f>0;o[e+b]=p&255,b+=N,p/=256,f-=8);o[e+b-N]|=Gr*128}});var kr=q(V=>{"use strict";m();var Z=dr(),M=hr(),_r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;V.Buffer=a;V.SlowBuffer=ce;V.INSPECT_MAX_BYTES=50;var Y=2147483647;V.kMaxLength=Y;a.TYPED_ARRAY_SUPPORT=te();!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function te(){try{var o=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(o,r),o.foo()===42}catch(e){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(!!a.isBuffer(this))return this.buffer}});Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(!!a.isBuffer(this))return this.byteOffset}});function L(o){if(o>Y)throw new RangeError('The value "'+o+'" is invalid for option "size"');var r=new Uint8Array(o);return Object.setPrototypeOf(r,a.prototype),r}function a(o,r,e){if(typeof o=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return D(o)}return xr(o,r,e)}a.poolSize=8192;function xr(o,r,e){if(typeof o=="string")return pe(o,r);if(ArrayBuffer.isView(o))return ae(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(A(o,ArrayBuffer)||o&&A(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(A(o,SharedArrayBuffer)||o&&A(o.buffer,SharedArrayBuffer)))return K(o,r,e);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=o.valueOf&&o.valueOf();if(n!=null&&n!==o)return a.from(n,r,e);var t=le(o);if(t)return t;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return a.from(o[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}a.from=function(o,r,e){return xr(o,r,e)};Object.setPrototypeOf(a.prototype,Uint8Array.prototype);Object.setPrototypeOf(a,Uint8Array);function yr(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function ie(o,r,e){return yr(o),o<=0?L(o):r!==void 0?typeof e=="string"?L(o).fill(r,e):L(o).fill(r):L(o)}a.alloc=function(o,r,e){return ie(o,r,e)};function D(o){return yr(o),L(o<0?0:rr(o)|0)}a.allocUnsafe=function(o){return D(o)};a.allocUnsafeSlow=function(o){return D(o)};function pe(o,r){if((typeof r!="string"||r==="")&&(r="utf8"),!a.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=wr(o,r)|0,n=L(e),t=n.write(o,r);return t!==e&&(n=n.slice(0,t)),n}function $(o){for(var r=o.length<0?0:rr(o.length)|0,e=L(r),n=0;n<r;n+=1)e[n]=o[n]&255;return e}function ae(o){if(A(o,Uint8Array)){var r=new Uint8Array(o);return K(r.buffer,r.byteOffset,r.byteLength)}return $(o)}function K(o,r,e){if(r<0||o.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var n;return r===void 0&&e===void 0?n=new Uint8Array(o):e===void 0?n=new Uint8Array(o,r):n=new Uint8Array(o,r,e),Object.setPrototypeOf(n,a.prototype),n}function le(o){if(a.isBuffer(o)){var r=rr(o.length)|0,e=L(r);return e.length===0||o.copy(e,0,0,r),e}if(o.length!==void 0)return typeof o.length!="number"||er(o.length)?L(0):$(o);if(o.type==="Buffer"&&Array.isArray(o.data))return $(o.data)}function rr(o){if(o>=Y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Y.toString(16)+" bytes");return o|0}function ce(o){return+o!=o&&(o=0),a.alloc(+o)}a.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==a.prototype};a.compare=function(r,e){if(A(r,Uint8Array)&&(r=a.from(r,r.offset,r.byteLength)),A(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(r)||!a.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;for(var n=r.length,t=e.length,i=0,p=Math.min(n,t);i<p;++i)if(r[i]!==e[i]){n=r[i],t=e[i];break}return n<t?-1:t<n?1:0};a.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};a.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return a.alloc(0);var n;if(e===void 0)for(e=0,n=0;n<r.length;++n)e+=r[n].length;var t=a.allocUnsafe(e),i=0;for(n=0;n<r.length;++n){var p=r[n];if(A(p,Uint8Array))i+p.length>t.length?a.from(p).copy(t,i):Uint8Array.prototype.set.call(t,p,i);else if(a.isBuffer(p))p.copy(t,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return t};function wr(o,r){if(a.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||A(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var e=o.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&e===0)return 0;for(var t=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return j(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return Fr(o).length;default:if(t)return n?-1:j(o).length;r=(""+r).toLowerCase(),t=!0}}a.byteLength=wr;function ue(o,r,e){var n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(o||(o="utf8");;)switch(o){case"hex":return ye(this,r,e);case"utf8":case"utf-8":return Er(this,r,e);case"ascii":return ge(this,r,e);case"latin1":case"binary":return xe(this,r,e);case"base64":return _e(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return we(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),n=!0}}a.prototype._isBuffer=!0;function R(o,r,e){var n=o[r];o[r]=o[e],o[e]=n}a.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)R(this,e,e+1);return this};a.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)R(this,e,e+3),R(this,e+1,e+2);return this};a.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)R(this,e,e+7),R(this,e+1,e+6),R(this,e+2,e+5),R(this,e+3,e+4);return this};a.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?Er(this,0,r):ue.apply(this,arguments)};a.prototype.toLocaleString=a.prototype.toString;a.prototype.equals=function(r){if(!a.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:a.compare(this,r)===0};a.prototype.inspect=function(){var r="",e=V.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"};_r&&(a.prototype[_r]=a.prototype.inspect);a.prototype.compare=function(r,e,n,t,i){if(A(r,Uint8Array)&&(r=a.from(r,r.offset,r.byteLength)),!a.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),n===void 0&&(n=r?r.length:0),t===void 0&&(t=0),i===void 0&&(i=this.length),e<0||n>r.length||t<0||i>this.length)throw new RangeError("out of range index");if(t>=i&&e>=n)return 0;if(t>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,t>>>=0,i>>>=0,this===r)return 0;for(var p=i-t,l=n-e,c=Math.min(p,l),f=this.slice(t,i),s=r.slice(e,n),u=0;u<c;++u)if(f[u]!==s[u]){p=f[u],l=s[u];break}return p<l?-1:l<p?1:0};function vr(o,r,e,n,t){if(o.length===0)return-1;if(typeof e=="string"?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,er(e)&&(e=t?0:o.length-1),e<0&&(e=o.length+e),e>=o.length){if(t)return-1;e=o.length-1}else if(e<0)if(t)e=0;else return-1;if(typeof r=="string"&&(r=a.from(r,n)),a.isBuffer(r))return r.length===0?-1:br(o,r,e,n,t);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?t?Uint8Array.prototype.indexOf.call(o,r,e):Uint8Array.prototype.lastIndexOf.call(o,r,e):br(o,[r],e,n,t);throw new TypeError("val must be string, number or Buffer")}function br(o,r,e,n,t){var i=1,p=o.length,l=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(o.length<2||r.length<2)return-1;i=2,p/=2,l/=2,e/=2}function c(b,N){return i===1?b[N]:b.readUInt16BE(N*i)}var f;if(t){var s=-1;for(f=e;f<p;f++)if(c(o,f)===c(r,s===-1?0:f-s)){if(s===-1&&(s=f),f-s+1===l)return s*i}else s!==-1&&(f-=f-s),s=-1}else for(e+l>p&&(e=p-l),f=e;f>=0;f--){for(var u=!0,y=0;y<l;y++)if(c(o,f+y)!==c(r,y)){u=!1;break}if(u)return f}return-1}a.prototype.includes=function(r,e,n){return this.indexOf(r,e,n)!==-1};a.prototype.indexOf=function(r,e,n){return vr(this,r,e,n,!0)};a.prototype.lastIndexOf=function(r,e,n){return vr(this,r,e,n,!1)};function fe(o,r,e,n){e=Number(e)||0;var t=o.length-e;n?(n=Number(n),n>t&&(n=t)):n=t;var i=r.length;n>i/2&&(n=i/2);for(var p=0;p<n;++p){var l=parseInt(r.substr(p*2,2),16);if(er(l))return p;o[e+p]=l}return p}function se(o,r,e,n){return H(j(r,o.length-e),o,e,n)}function me(o,r,e,n){return H(Be(r),o,e,n)}function de(o,r,e,n){return H(Fr(r),o,e,n)}function he(o,r,e,n){return H(Ae(r,o.length-e),o,e,n)}a.prototype.write=function(r,e,n,t){if(e===void 0)t="utf8",n=this.length,e=0;else if(n===void 0&&typeof e=="string")t=e,n=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(n)?(n=n>>>0,t===void 0&&(t="utf8")):(t=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((n===void 0||n>i)&&(n=i),r.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");t||(t="utf8");for(var p=!1;;)switch(t){case"hex":return fe(this,r,e,n);case"utf8":case"utf-8":return se(this,r,e,n);case"ascii":case"latin1":case"binary":return me(this,r,e,n);case"base64":return de(this,r,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return he(this,r,e,n);default:if(p)throw new TypeError("Unknown encoding: "+t);t=(""+t).toLowerCase(),p=!0}};a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _e(o,r,e){return r===0&&e===o.length?Z.fromByteArray(o):Z.fromByteArray(o.slice(r,e))}function Er(o,r,e){e=Math.min(o.length,e);for(var n=[],t=r;t<e;){var i=o[t],p=null,l=i>239?4:i>223?3:i>191?2:1;if(t+l<=e){var c,f,s,u;switch(l){case 1:i<128&&(p=i);break;case 2:c=o[t+1],(c&192)===128&&(u=(i&31)<<6|c&63,u>127&&(p=u));break;case 3:c=o[t+1],f=o[t+2],(c&192)===128&&(f&192)===128&&(u=(i&15)<<12|(c&63)<<6|f&63,u>2047&&(u<55296||u>57343)&&(p=u));break;case 4:c=o[t+1],f=o[t+2],s=o[t+3],(c&192)===128&&(f&192)===128&&(s&192)===128&&(u=(i&15)<<18|(c&63)<<12|(f&63)<<6|s&63,u>65535&&u<1114112&&(p=u))}}p===null?(p=65533,l=1):p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p),t+=l}return be(n)}var gr=4096;function be(o){var r=o.length;if(r<=gr)return String.fromCharCode.apply(String,o);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,o.slice(n,n+=gr));return e}function ge(o,r,e){var n="";e=Math.min(o.length,e);for(var t=r;t<e;++t)n+=String.fromCharCode(o[t]&127);return n}function xe(o,r,e){var n="";e=Math.min(o.length,e);for(var t=r;t<e;++t)n+=String.fromCharCode(o[t]);return n}function ye(o,r,e){var n=o.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var t="",i=r;i<e;++i)t+=Ue[o[i]];return t}function we(o,r,e){for(var n=o.slice(r,e),t="",i=0;i<n.length-1;i+=2)t+=String.fromCharCode(n[i]+n[i+1]*256);return t}a.prototype.slice=function(r,e){var n=this.length;r=~~r,e=e===void 0?n:~~e,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<r&&(e=r);var t=this.subarray(r,e);return Object.setPrototypeOf(t,a.prototype),t};function h(o,r,e){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+r>e)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||h(r,e,this.length);for(var t=this[r],i=1,p=0;++p<e&&(i*=256);)t+=this[r+p]*i;return t};a.prototype.readUintBE=a.prototype.readUIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||h(r,e,this.length);for(var t=this[r+--e],i=1;e>0&&(i*=256);)t+=this[r+--e]*i;return t};a.prototype.readUint8=a.prototype.readUInt8=function(r,e){return r=r>>>0,e||h(r,1,this.length),this[r]};a.prototype.readUint16LE=a.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||h(r,2,this.length),this[r]|this[r+1]<<8};a.prototype.readUint16BE=a.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||h(r,2,this.length),this[r]<<8|this[r+1]};a.prototype.readUint32LE=a.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||h(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};a.prototype.readUint32BE=a.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||h(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};a.prototype.readIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||h(r,e,this.length);for(var t=this[r],i=1,p=0;++p<e&&(i*=256);)t+=this[r+p]*i;return i*=128,t>=i&&(t-=Math.pow(2,8*e)),t};a.prototype.readIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||h(r,e,this.length);for(var t=e,i=1,p=this[r+--t];t>0&&(i*=256);)p+=this[r+--t]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*e)),p};a.prototype.readInt8=function(r,e){return r=r>>>0,e||h(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};a.prototype.readInt16LE=function(r,e){r=r>>>0,e||h(r,2,this.length);var n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n};a.prototype.readInt16BE=function(r,e){r=r>>>0,e||h(r,2,this.length);var n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n};a.prototype.readInt32LE=function(r,e){return r=r>>>0,e||h(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};a.prototype.readInt32BE=function(r,e){return r=r>>>0,e||h(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};a.prototype.readFloatLE=function(r,e){return r=r>>>0,e||h(r,4,this.length),M.read(this,r,!0,23,4)};a.prototype.readFloatBE=function(r,e){return r=r>>>0,e||h(r,4,this.length),M.read(this,r,!1,23,4)};a.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||h(r,8,this.length),M.read(this,r,!0,52,8)};a.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||h(r,8,this.length),M.read(this,r,!1,52,8)};function _(o,r,e,n,t,i){if(!a.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>t||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>o.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(r,e,n,t){if(r=+r,e=e>>>0,n=n>>>0,!t){var i=Math.pow(2,8*n)-1;_(this,r,e,n,i,0)}var p=1,l=0;for(this[e]=r&255;++l<n&&(p*=256);)this[e+l]=r/p&255;return e+n};a.prototype.writeUintBE=a.prototype.writeUIntBE=function(r,e,n,t){if(r=+r,e=e>>>0,n=n>>>0,!t){var i=Math.pow(2,8*n)-1;_(this,r,e,n,i,0)}var p=n-1,l=1;for(this[e+p]=r&255;--p>=0&&(l*=256);)this[e+p]=r/l&255;return e+n};a.prototype.writeUint8=a.prototype.writeUInt8=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,1,255,0),this[e]=r&255,e+1};a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2};a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2};a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4};a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};a.prototype.writeIntLE=function(r,e,n,t){if(r=+r,e=e>>>0,!t){var i=Math.pow(2,8*n-1);_(this,r,e,n,i-1,-i)}var p=0,l=1,c=0;for(this[e]=r&255;++p<n&&(l*=256);)r<0&&c===0&&this[e+p-1]!==0&&(c=1),this[e+p]=(r/l>>0)-c&255;return e+n};a.prototype.writeIntBE=function(r,e,n,t){if(r=+r,e=e>>>0,!t){var i=Math.pow(2,8*n-1);_(this,r,e,n,i-1,-i)}var p=n-1,l=1,c=0;for(this[e+p]=r&255;--p>=0&&(l*=256);)r<0&&c===0&&this[e+p+1]!==0&&(c=1),this[e+p]=(r/l>>0)-c&255;return e+n};a.prototype.writeInt8=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1};a.prototype.writeInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2};a.prototype.writeInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2};a.prototype.writeInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4};a.prototype.writeInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function Br(o,r,e,n,t,i){if(e+n>o.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function Ar(o,r,e,n,t){return r=+r,e=e>>>0,t||Br(o,r,e,4,34028234663852886e22,-34028234663852886e22),M.write(o,r,e,n,23,4),e+4}a.prototype.writeFloatLE=function(r,e,n){return Ar(this,r,e,!0,n)};a.prototype.writeFloatBE=function(r,e,n){return Ar(this,r,e,!1,n)};function Ur(o,r,e,n,t){return r=+r,e=e>>>0,t||Br(o,r,e,8,17976931348623157e292,-17976931348623157e292),M.write(o,r,e,n,52,8),e+8}a.prototype.writeDoubleLE=function(r,e,n){return Ur(this,r,e,!0,n)};a.prototype.writeDoubleBE=function(r,e,n){return Ur(this,r,e,!1,n)};a.prototype.copy=function(r,e,n,t){if(!a.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!t&&t!==0&&(t=this.length),e>=r.length&&(e=r.length),e||(e=0),t>0&&t<n&&(t=n),t===n||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("sourceEnd out of bounds");t>this.length&&(t=this.length),r.length-e<t-n&&(t=r.length-e+n);var i=t-n;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,n,t):Uint8Array.prototype.set.call(r,this.subarray(n,t),e),i};a.prototype.fill=function(r,e,n,t){if(typeof r=="string"){if(typeof e=="string"?(t=e,e=0,n=this.length):typeof n=="string"&&(t=n,n=this.length),t!==void 0&&typeof t!="string")throw new TypeError("encoding must be a string");if(typeof t=="string"&&!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);if(r.length===1){var i=r.charCodeAt(0);(t==="utf8"&&i<128||t==="latin1")&&(r=i)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e=e>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);var p;if(typeof r=="number")for(p=e;p<n;++p)this[p]=r;else{var l=a.isBuffer(r)?r:a.from(r,t),c=l.length;if(c===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(p=0;p<n-e;++p)this[p+e]=l[p%c]}return this};var ve=/[^+/0-9A-Za-z-_]/g;function Ee(o){if(o=o.split("=")[0],o=o.trim().replace(ve,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function j(o,r){r=r||1/0;for(var e,n=o.length,t=null,i=[],p=0;p<n;++p){if(e=o.charCodeAt(p),e>55295&&e<57344){if(!t){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}else if(p+1===n){(r-=3)>-1&&i.push(239,191,189);continue}t=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),t=e;continue}e=(t-55296<<10|e-56320)+65536}else t&&(r-=3)>-1&&i.push(239,191,189);if(t=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return i}function Be(o){for(var r=[],e=0;e<o.length;++e)r.push(o.charCodeAt(e)&255);return r}function Ae(o,r){for(var e,n,t,i=[],p=0;p<o.length&&!((r-=2)<0);++p)e=o.charCodeAt(p),n=e>>8,t=e%256,i.push(t),i.push(n);return i}function Fr(o){return Z.toByteArray(Ee(o))}function H(o,r,e,n){for(var t=0;t<n&&!(t+e>=r.length||t>=o.length);++t)r[t+e]=o[t];return t}function A(o,r){return o instanceof r||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===r.name}function er(o){return o!==o}var Ue=function(){for(var o="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var n=e*16,t=0;t<16;++t)r[n+t]=o[e]+o[t];return r}()});var Rr=q((We,Sr)=>{m();var d=Sr.exports={},U,F;function or(){throw new Error("setTimeout has not been defined")}function nr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?U=setTimeout:U=or}catch(o){U=or}try{typeof clearTimeout=="function"?F=clearTimeout:F=nr}catch(o){F=nr}})();function Lr(o){if(U===setTimeout)return setTimeout(o,0);if((U===or||!U)&&setTimeout)return U=setTimeout,setTimeout(o,0);try{return U(o,0)}catch(r){try{return U.call(null,o,0)}catch(e){return U.call(this,o,0)}}}function Fe(o){if(F===clearTimeout)return clearTimeout(o);if((F===nr||!F)&&clearTimeout)return F=clearTimeout,clearTimeout(o);try{return F(o)}catch(r){try{return F.call(null,o)}catch(e){return F.call(this,o)}}}var C=[],z=!1,I,G=-1;function ke(){!z||!I||(z=!1,I.length?C=I.concat(C):G=-1,C.length&&Cr())}function Cr(){if(!z){var o=Lr(ke);z=!0;for(var r=C.length;r;){for(I=C,C=[];++G<r;)I&&I[G].run();G=-1,r=C.length}I=null,z=!1,Fe(o)}}d.nextTick=function(o){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];C.push(new Tr(o,r)),C.length===1&&!z&&Lr(Cr)};function Tr(o,r){this.fun=o,this.array=r}Tr.prototype.run=function(){this.fun.apply(null,this.array)};d.title="browser";d.browser=!0;d.env={};d.argv=[];d.version="";d.versions={};function T(){}d.on=T;d.addListener=T;d.once=T;d.off=T;d.removeListener=T;d.removeAllListeners=T;d.emit=T;d.prependListener=T;d.prependOnceListener=T;d.listeners=function(o){return[]};d.binding=function(o){throw new Error("process.binding is not supported")};d.cwd=function(){return"/"};d.chdir=function(o){throw new Error("process.chdir is not supported")};d.umask=function(){return 0}});var E,B,Pe,m=lr(()=>{E=P(kr()),B=P(Rr()),Pe=function(o){function r(){var n=this||self;return delete o.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return r();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:r});var e=__magic__;return e}(Object)});var Nr={};cr(Nr,{default:()=>Te});var O,Ce,Te,Mr=lr(()=>{"use strict";m();O=P(require("react")),Ce=o=>O.createElement("svg",ar({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},o),O.createElement("g",null,O.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Te=Ce});var Ie={};cr(Ie,{Receiver:()=>Re});module.exports=fr(Ie);m();var g=P(require("react")),zr=require("@fortawesome/free-solid-svg-icons"),Wr=require("@fortawesome/react-fontawesome"),Pr=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),qr=require("@terradharitri/sdk-dapp/UI/CopyButton"),Xr=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),Yr=require("@terradharitri/sdk-dapp/UI/Trim"),Hr=P(require("classnames"));m();var Le=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Le));var Ir={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};m();m();var{default:Vr}=(Mr(),fr(Nr));m();var Se=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Se));var w={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"};var Re=({label:o="Receiver",receiver:r,scamReport:e,receiverUsername:n})=>{let t=Boolean(n),i=n!=null?n:r;return g.default.createElement("div",{className:w.confirmReceiver},g.default.createElement("span",{className:Ir.label},o),g.default.createElement("span",{className:(0,Hr.default)(w.value,{[w.shrunk]:t}),"data-testid":"confirmReceiver"},t&&g.default.createElement(Vr,{className:w.icon}),i,t&&g.default.createElement(Xr.ExplorerLink,{page:`/${Pr.ACCOUNTS_ENDPOINT}/${r}`,className:w.explorer})),t&&g.default.createElement("span",{className:w.subValue},g.default.createElement(Yr.Trim,{text:r,className:w.subValueTrim}),g.default.createElement(qr.CopyButton,{text:r,className:w.subValueCopy})),e&&g.default.createElement("div",{className:w.scam},g.default.createElement("span",null,g.default.createElement(Wr.FontAwesomeIcon,{icon:zr.faExclamationTriangle,className:w.icon}),g.default.createElement("small",{"data-testid":"confirmScamReport"},e))))};0&&(module.exports={Receiver});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=Receiver.js.map
