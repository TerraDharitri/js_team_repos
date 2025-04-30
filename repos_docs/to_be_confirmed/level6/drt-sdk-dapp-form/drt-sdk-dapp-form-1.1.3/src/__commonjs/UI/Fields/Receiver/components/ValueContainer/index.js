"use strict";var Ht=Object.create;var ce=Object.defineProperty,Xt=Object.defineProperties,Yt=Object.getOwnPropertyDescriptor,jt=Object.getOwnPropertyDescriptors,Jt=Object.getOwnPropertyNames,Oe=Object.getOwnPropertySymbols,Qt=Object.getPrototypeOf,We=Object.prototype.hasOwnProperty,er=Object.prototype.propertyIsEnumerable;var $e=(r,e,t)=>e in r?ce(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,T=(r,e)=>{for(var t in e||(e={}))We.call(e,t)&&$e(r,t,e[t]);if(Oe)for(var t of Oe(e))er.call(e,t)&&$e(r,t,e[t]);return r},I=(r,e)=>Xt(r,jt(e));var ze=(r,e)=>()=>(r&&(e=r(r=0)),e);var le=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),Ke=(r,e)=>{for(var t in e)ce(r,t,{get:e[t],enumerable:!0})},Ze=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Jt(e))!We.call(r,i)&&i!==t&&ce(r,i,{get:()=>e[i],enumerable:!(o=Yt(e,i))||o.enumerable});return r};var _=(r,e,t)=>(t=r!=null?Ht(Qt(r)):{},Ze(e||!r||!r.__esModule?ce(t,"default",{value:r,enumerable:!0}):t,r)),He=r=>Ze(ce({},"__esModule",{value:!0}),r);var je=le(me=>{"use strict";n();me.byteLength=rr;me.toByteArray=nr;me.fromByteArray=cr;var k=[],C=[],tr=typeof Uint8Array!="undefined"?Uint8Array:Array,we="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(q=0,Xe=we.length;q<Xe;++q)k[q]=we[q],C[we.charCodeAt(q)]=q;var q,Xe;C["-".charCodeAt(0)]=62;C["_".charCodeAt(0)]=63;function Ye(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var o=t===e?0:4-t%4;return[t,o]}function rr(r){var e=Ye(r),t=e[0],o=e[1];return(t+o)*3/4-o}function or(r,e,t){return(e+t)*3/4-t}function nr(r){var e,t=Ye(r),o=t[0],i=t[1],s=new tr(or(r,o,i)),l=0,d=i>0?o-4:o,u;for(u=0;u<d;u+=4)e=C[r.charCodeAt(u)]<<18|C[r.charCodeAt(u+1)]<<12|C[r.charCodeAt(u+2)]<<6|C[r.charCodeAt(u+3)],s[l++]=e>>16&255,s[l++]=e>>8&255,s[l++]=e&255;return i===2&&(e=C[r.charCodeAt(u)]<<2|C[r.charCodeAt(u+1)]>>4,s[l++]=e&255),i===1&&(e=C[r.charCodeAt(u)]<<10|C[r.charCodeAt(u+1)]<<4|C[r.charCodeAt(u+2)]>>2,s[l++]=e>>8&255,s[l++]=e&255),s}function ir(r){return k[r>>18&63]+k[r>>12&63]+k[r>>6&63]+k[r&63]}function sr(r,e,t){for(var o,i=[],s=e;s<t;s+=3)o=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(ir(o));return i.join("")}function cr(r){for(var e,t=r.length,o=t%3,i=[],s=16383,l=0,d=t-o;l<d;l+=s)i.push(sr(r,l,l+s>d?d:l+s));return o===1?(e=r[t-1],i.push(k[e>>2]+k[e<<4&63]+"==")):o===2&&(e=(r[t-2]<<8)+r[t-1],i.push(k[e>>10]+k[e>>4&63]+k[e<<2&63]+"=")),i.join("")}});var Je=le(Ce=>{n();Ce.read=function(r,e,t,o,i){var s,l,d=i*8-o-1,u=(1<<d)-1,f=u>>1,v=-7,y=t?i-1:0,A=t?-1:1,b=r[e+y];for(y+=A,s=b&(1<<-v)-1,b>>=-v,v+=d;v>0;s=s*256+r[e+y],y+=A,v-=8);for(l=s&(1<<-v)-1,s>>=-v,v+=o;v>0;l=l*256+r[e+y],y+=A,v-=8);if(s===0)s=1-f;else{if(s===u)return l?NaN:(b?-1:1)*(1/0);l=l+Math.pow(2,o),s=s-f}return(b?-1:1)*l*Math.pow(2,s-o)};Ce.write=function(r,e,t,o,i,s){var l,d,u,f=s*8-i-1,v=(1<<f)-1,y=v>>1,A=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=o?0:s-1,Z=o?1:-1,Zt=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(d=isNaN(e)?1:0,l=v):(l=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-l))<1&&(l--,u*=2),l+y>=1?e+=A/u:e+=A*Math.pow(2,1-y),e*u>=2&&(l++,u/=2),l+y>=v?(d=0,l=v):l+y>=1?(d=(e*u-1)*Math.pow(2,i),l=l+y):(d=e*Math.pow(2,y-1)*Math.pow(2,i),l=0));i>=8;r[t+b]=d&255,b+=Z,d/=256,i-=8);for(l=l<<i|d,f+=i;f>0;r[t+b]=l&255,b+=Z,l/=256,f-=8);r[t+b-Z]|=Zt*128}});var mt=le(X=>{"use strict";n();var Ae=je(),H=Je(),Qe=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;X.Buffer=m;X.SlowBuffer=ur;X.INSPECT_MAX_BYTES=50;var de=2147483647;X.kMaxLength=de;m.TYPED_ARRAY_SUPPORT=ar();!m.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ar(){try{var r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch(t){return!1}}Object.defineProperty(m.prototype,"parent",{enumerable:!0,get:function(){if(!!m.isBuffer(this))return this.buffer}});Object.defineProperty(m.prototype,"offset",{enumerable:!0,get:function(){if(!!m.isBuffer(this))return this.byteOffset}});function N(r){if(r>de)throw new RangeError('The value "'+r+'" is invalid for option "size"');var e=new Uint8Array(r);return Object.setPrototypeOf(e,m.prototype),e}function m(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Le(r)}return rt(r,e,t)}m.poolSize=8192;function rt(r,e,t){if(typeof r=="string")return lr(r,e);if(ArrayBuffer.isView(r))return mr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(L(r,ArrayBuffer)||r&&L(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(L(r,SharedArrayBuffer)||r&&L(r.buffer,SharedArrayBuffer)))return Ie(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=r.valueOf&&r.valueOf();if(o!=null&&o!==r)return m.from(o,e,t);var i=dr(r);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return m.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}m.from=function(r,e,t){return rt(r,e,t)};Object.setPrototypeOf(m.prototype,Uint8Array.prototype);Object.setPrototypeOf(m,Uint8Array);function ot(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function pr(r,e,t){return ot(r),r<=0?N(r):e!==void 0?typeof t=="string"?N(r).fill(e,t):N(r).fill(e):N(r)}m.alloc=function(r,e,t){return pr(r,e,t)};function Le(r){return ot(r),N(r<0?0:Pe(r)|0)}m.allocUnsafe=function(r){return Le(r)};m.allocUnsafeSlow=function(r){return Le(r)};function lr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!m.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=nt(r,e)|0,o=N(t),i=o.write(r,e);return i!==t&&(o=o.slice(0,i)),o}function Se(r){for(var e=r.length<0?0:Pe(r.length)|0,t=N(e),o=0;o<e;o+=1)t[o]=r[o]&255;return t}function mr(r){if(L(r,Uint8Array)){var e=new Uint8Array(r);return Ie(e.buffer,e.byteOffset,e.byteLength)}return Se(r)}function Ie(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return e===void 0&&t===void 0?o=new Uint8Array(r):t===void 0?o=new Uint8Array(r,e):o=new Uint8Array(r,e,t),Object.setPrototypeOf(o,m.prototype),o}function dr(r){if(m.isBuffer(r)){var e=Pe(r.length)|0,t=N(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||Fe(r.length)?N(0):Se(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Se(r.data)}function Pe(r){if(r>=de)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+de.toString(16)+" bytes");return r|0}function ur(r){return+r!=r&&(r=0),m.alloc(+r)}m.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==m.prototype};m.compare=function(e,t){if(L(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),L(t,Uint8Array)&&(t=m.from(t,t.offset,t.byteLength)),!m.isBuffer(e)||!m.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,i=t.length,s=0,l=Math.min(o,i);s<l;++s)if(e[s]!==t[s]){o=e[s],i=t[s];break}return o<i?-1:i<o?1:0};m.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};m.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return m.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var i=m.allocUnsafe(t),s=0;for(o=0;o<e.length;++o){var l=e[o];if(L(l,Uint8Array))s+l.length>i.length?m.from(l).copy(i,s):Uint8Array.prototype.set.call(i,l,s);else if(m.isBuffer(l))l.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=l.length}return i};function nt(r,e){if(m.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||L(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);var t=r.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ke(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return lt(r).length;default:if(i)return o?-1:ke(r).length;e=(""+e).toLowerCase(),i=!0}}m.byteLength=nt;function _r(r,e,t){var o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return wr(this,e,t);case"utf8":case"utf-8":return st(this,e,t);case"ascii":return Er(this,e,t);case"latin1":case"binary":return br(this,e,t);case"base64":return hr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Cr(this,e,t);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),o=!0}}m.prototype._isBuffer=!0;function O(r,e,t){var o=r[e];r[e]=r[t],r[t]=o}m.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this};m.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this};m.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this};m.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?st(this,0,e):_r.apply(this,arguments)};m.prototype.toLocaleString=m.prototype.toString;m.prototype.equals=function(e){if(!m.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:m.compare(this,e)===0};m.prototype.inspect=function(){var e="",t=X.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};Qe&&(m.prototype[Qe]=m.prototype.inspect);m.prototype.compare=function(e,t,o,i,s){if(L(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),!m.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||o>e.length||i<0||s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=o)return 0;if(i>=s)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,i>>>=0,s>>>=0,this===e)return 0;for(var l=s-i,d=o-t,u=Math.min(l,d),f=this.slice(i,s),v=e.slice(t,o),y=0;y<u;++y)if(f[y]!==v[y]){l=f[y],d=v[y];break}return l<d?-1:d<l?1:0};function it(r,e,t,o,i){if(r.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Fe(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e=="string"&&(e=m.from(e,o)),m.isBuffer(e))return e.length===0?-1:et(r,e,t,o,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):et(r,[e],t,o,i);throw new TypeError("val must be string, number or Buffer")}function et(r,e,t,o,i){var s=1,l=r.length,d=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(r.length<2||e.length<2)return-1;s=2,l/=2,d/=2,t/=2}function u(b,Z){return s===1?b[Z]:b.readUInt16BE(Z*s)}var f;if(i){var v=-1;for(f=t;f<l;f++)if(u(r,f)===u(e,v===-1?0:f-v)){if(v===-1&&(v=f),f-v+1===d)return v*s}else v!==-1&&(f-=f-v),v=-1}else for(t+d>l&&(t=l-d),f=t;f>=0;f--){for(var y=!0,A=0;A<d;A++)if(u(r,f+A)!==u(e,A)){y=!1;break}if(y)return f}return-1}m.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1};m.prototype.indexOf=function(e,t,o){return it(this,e,t,o,!0)};m.prototype.lastIndexOf=function(e,t,o){return it(this,e,t,o,!1)};function fr(r,e,t,o){t=Number(t)||0;var i=r.length-t;o?(o=Number(o),o>i&&(o=i)):o=i;var s=e.length;o>s/2&&(o=s/2);for(var l=0;l<o;++l){var d=parseInt(e.substr(l*2,2),16);if(Fe(d))return l;r[t+l]=d}return l}function yr(r,e,t,o){return ue(ke(e,r.length-t),r,t,o)}function vr(r,e,t,o){return ue(Ir(e),r,t,o)}function gr(r,e,t,o){return ue(lt(e),r,t,o)}function xr(r,e,t,o){return ue(kr(e,r.length-t),r,t,o)}m.prototype.write=function(e,t,o,i){if(t===void 0)i="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")i=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,i===void 0&&(i="utf8")):(i=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var s=this.length-t;if((o===void 0||o>s)&&(o=s),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var l=!1;;)switch(i){case"hex":return fr(this,e,t,o);case"utf8":case"utf-8":return yr(this,e,t,o);case"ascii":case"latin1":case"binary":return vr(this,e,t,o);case"base64":return gr(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xr(this,e,t,o);default:if(l)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),l=!0}};m.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function hr(r,e,t){return e===0&&t===r.length?Ae.fromByteArray(r):Ae.fromByteArray(r.slice(e,t))}function st(r,e,t){t=Math.min(r.length,t);for(var o=[],i=e;i<t;){var s=r[i],l=null,d=s>239?4:s>223?3:s>191?2:1;if(i+d<=t){var u,f,v,y;switch(d){case 1:s<128&&(l=s);break;case 2:u=r[i+1],(u&192)===128&&(y=(s&31)<<6|u&63,y>127&&(l=y));break;case 3:u=r[i+1],f=r[i+2],(u&192)===128&&(f&192)===128&&(y=(s&15)<<12|(u&63)<<6|f&63,y>2047&&(y<55296||y>57343)&&(l=y));break;case 4:u=r[i+1],f=r[i+2],v=r[i+3],(u&192)===128&&(f&192)===128&&(v&192)===128&&(y=(s&15)<<18|(u&63)<<12|(f&63)<<6|v&63,y>65535&&y<1114112&&(l=y))}}l===null?(l=65533,d=1):l>65535&&(l-=65536,o.push(l>>>10&1023|55296),l=56320|l&1023),o.push(l),i+=d}return Tr(o)}var tt=4096;function Tr(r){var e=r.length;if(e<=tt)return String.fromCharCode.apply(String,r);for(var t="",o=0;o<e;)t+=String.fromCharCode.apply(String,r.slice(o,o+=tt));return t}function Er(r,e,t){var o="";t=Math.min(r.length,t);for(var i=e;i<t;++i)o+=String.fromCharCode(r[i]&127);return o}function br(r,e,t){var o="";t=Math.min(r.length,t);for(var i=e;i<t;++i)o+=String.fromCharCode(r[i]);return o}function wr(r,e,t){var o=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>o)&&(t=o);for(var i="",s=e;s<t;++s)i+=Lr[r[s]];return i}function Cr(r,e,t){for(var o=r.slice(e,t),i="",s=0;s<o.length-1;s+=2)i+=String.fromCharCode(o[s]+o[s+1]*256);return i}m.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var i=this.subarray(e,t);return Object.setPrototypeOf(i,m.prototype),i};function h(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}m.prototype.readUintLE=m.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||h(e,t,this.length);for(var i=this[e],s=1,l=0;++l<t&&(s*=256);)i+=this[e+l]*s;return i};m.prototype.readUintBE=m.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||h(e,t,this.length);for(var i=this[e+--t],s=1;t>0&&(s*=256);)i+=this[e+--t]*s;return i};m.prototype.readUint8=m.prototype.readUInt8=function(e,t){return e=e>>>0,t||h(e,1,this.length),this[e]};m.prototype.readUint16LE=m.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||h(e,2,this.length),this[e]|this[e+1]<<8};m.prototype.readUint16BE=m.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||h(e,2,this.length),this[e]<<8|this[e+1]};m.prototype.readUint32LE=m.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||h(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};m.prototype.readUint32BE=m.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||h(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};m.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||h(e,t,this.length);for(var i=this[e],s=1,l=0;++l<t&&(s*=256);)i+=this[e+l]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i};m.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||h(e,t,this.length);for(var i=t,s=1,l=this[e+--i];i>0&&(s*=256);)l+=this[e+--i]*s;return s*=128,l>=s&&(l-=Math.pow(2,8*t)),l};m.prototype.readInt8=function(e,t){return e=e>>>0,t||h(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};m.prototype.readInt16LE=function(e,t){e=e>>>0,t||h(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o};m.prototype.readInt16BE=function(e,t){e=e>>>0,t||h(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o};m.prototype.readInt32LE=function(e,t){return e=e>>>0,t||h(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};m.prototype.readInt32BE=function(e,t){return e=e>>>0,t||h(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};m.prototype.readFloatLE=function(e,t){return e=e>>>0,t||h(e,4,this.length),H.read(this,e,!0,23,4)};m.prototype.readFloatBE=function(e,t){return e=e>>>0,t||h(e,4,this.length),H.read(this,e,!1,23,4)};m.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||h(e,8,this.length),H.read(this,e,!0,52,8)};m.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||h(e,8,this.length),H.read(this,e,!1,52,8)};function E(r,e,t,o,i,s){if(!m.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(t+o>r.length)throw new RangeError("Index out of range")}m.prototype.writeUintLE=m.prototype.writeUIntLE=function(e,t,o,i){if(e=+e,t=t>>>0,o=o>>>0,!i){var s=Math.pow(2,8*o)-1;E(this,e,t,o,s,0)}var l=1,d=0;for(this[t]=e&255;++d<o&&(l*=256);)this[t+d]=e/l&255;return t+o};m.prototype.writeUintBE=m.prototype.writeUIntBE=function(e,t,o,i){if(e=+e,t=t>>>0,o=o>>>0,!i){var s=Math.pow(2,8*o)-1;E(this,e,t,o,s,0)}var l=o-1,d=1;for(this[t+l]=e&255;--l>=0&&(d*=256);)this[t+l]=e/d&255;return t+o};m.prototype.writeUint8=m.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||E(this,e,t,1,255,0),this[t]=e&255,t+1};m.prototype.writeUint16LE=m.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||E(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};m.prototype.writeUint16BE=m.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||E(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};m.prototype.writeUint32LE=m.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||E(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};m.prototype.writeUint32BE=m.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||E(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};m.prototype.writeIntLE=function(e,t,o,i){if(e=+e,t=t>>>0,!i){var s=Math.pow(2,8*o-1);E(this,e,t,o,s-1,-s)}var l=0,d=1,u=0;for(this[t]=e&255;++l<o&&(d*=256);)e<0&&u===0&&this[t+l-1]!==0&&(u=1),this[t+l]=(e/d>>0)-u&255;return t+o};m.prototype.writeIntBE=function(e,t,o,i){if(e=+e,t=t>>>0,!i){var s=Math.pow(2,8*o-1);E(this,e,t,o,s-1,-s)}var l=o-1,d=1,u=0;for(this[t+l]=e&255;--l>=0&&(d*=256);)e<0&&u===0&&this[t+l+1]!==0&&(u=1),this[t+l]=(e/d>>0)-u&255;return t+o};m.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||E(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};m.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||E(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};m.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||E(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};m.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||E(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};m.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||E(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ct(r,e,t,o,i,s){if(t+o>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function at(r,e,t,o,i){return e=+e,t=t>>>0,i||ct(r,e,t,4,34028234663852886e22,-34028234663852886e22),H.write(r,e,t,o,23,4),t+4}m.prototype.writeFloatLE=function(e,t,o){return at(this,e,t,!0,o)};m.prototype.writeFloatBE=function(e,t,o){return at(this,e,t,!1,o)};function pt(r,e,t,o,i){return e=+e,t=t>>>0,i||ct(r,e,t,8,17976931348623157e292,-17976931348623157e292),H.write(r,e,t,o,52,8),t+8}m.prototype.writeDoubleLE=function(e,t,o){return pt(this,e,t,!0,o)};m.prototype.writeDoubleBE=function(e,t,o){return pt(this,e,t,!1,o)};m.prototype.copy=function(e,t,o,i){if(!m.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!i&&i!==0&&(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<o&&(i=o),i===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-o&&(i=e.length-t+o);var s=i-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,i):Uint8Array.prototype.set.call(e,this.subarray(o,i),t),s};m.prototype.fill=function(e,t,o,i){if(typeof e=="string"){if(typeof t=="string"?(i=t,t=0,o=this.length):typeof o=="string"&&(i=o,o=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!m.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){var s=e.charCodeAt(0);(i==="utf8"&&s<128||i==="latin1")&&(e=s)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var l;if(typeof e=="number")for(l=t;l<o;++l)this[l]=e;else{var d=m.isBuffer(e)?e:m.from(e,i),u=d.length;if(u===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(l=0;l<o-t;++l)this[l+t]=d[l%u]}return this};var Ar=/[^+/0-9A-Za-z-_]/g;function Sr(r){if(r=r.split("=")[0],r=r.trim().replace(Ar,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function ke(r,e){e=e||1/0;for(var t,o=r.length,i=null,s=[],l=0;l<o;++l){if(t=r.charCodeAt(l),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(l+1===o){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function Ir(r){for(var e=[],t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function kr(r,e){for(var t,o,i,s=[],l=0;l<r.length&&!((e-=2)<0);++l)t=r.charCodeAt(l),o=t>>8,i=t%256,s.push(i),s.push(o);return s}function lt(r){return Ae.toByteArray(Sr(r))}function ue(r,e,t,o){for(var i=0;i<o&&!(i+t>=e.length||i>=r.length);++i)e[i+t]=r[i];return i}function L(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function Fe(r){return r!==r}var Lr=function(){for(var r="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var o=t*16,i=0;i<16;++i)e[o+i]=r[t]+r[i];return e}()});var yt=le((si,ft)=>{n();var x=ft.exports={},P,F;function Ge(){throw new Error("setTimeout has not been defined")}function Ne(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?P=setTimeout:P=Ge}catch(r){P=Ge}try{typeof clearTimeout=="function"?F=clearTimeout:F=Ne}catch(r){F=Ne}})();function dt(r){if(P===setTimeout)return setTimeout(r,0);if((P===Ge||!P)&&setTimeout)return P=setTimeout,setTimeout(r,0);try{return P(r,0)}catch(e){try{return P.call(null,r,0)}catch(t){return P.call(this,r,0)}}}function Pr(r){if(F===clearTimeout)return clearTimeout(r);if((F===Ne||!F)&&clearTimeout)return F=clearTimeout,clearTimeout(r);try{return F(r)}catch(e){try{return F.call(null,r)}catch(t){return F.call(this,r)}}}var B=[],Y=!1,$,_e=-1;function Fr(){!Y||!$||(Y=!1,$.length?B=$.concat(B):_e=-1,B.length&&ut())}function ut(){if(!Y){var r=dt(Fr);Y=!0;for(var e=B.length;e;){for($=B,B=[];++_e<e;)$&&$[_e].run();_e=-1,e=B.length}$=null,Y=!1,Pr(r)}}x.nextTick=function(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];B.push(new _t(r,e)),B.length===1&&!Y&&dt(ut)};function _t(r,e){this.fun=r,this.array=e}_t.prototype.run=function(){this.fun.apply(null,this.array)};x.title="browser";x.browser=!0;x.env={};x.argv=[];x.version="";x.versions={};function U(){}x.on=U;x.addListener=U;x.once=U;x.off=U;x.removeListener=U;x.removeAllListeners=U;x.emit=U;x.prependListener=U;x.prependOnceListener=U;x.listeners=function(r){return[]};x.binding=function(r){throw new Error("process.binding is not supported")};x.cwd=function(){return"/"};x.chdir=function(r){throw new Error("process.chdir is not supported")};x.umask=function(){return 0}});var c,a,ci,n=ze(()=>{c=_(mt()),a=_(yt()),ci=function(r){function e(){var o=this||self;return delete r.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return e();r.defineProperty(r.prototype,"__magic__",{configurable:!0,get:e});var t=__magic__;return t}(Object)});var qt={};Ke(qt,{default:()=>Qn});var be,Jn,Qn,Ot=ze(()=>{"use strict";n();be=_(require("react")),Jn=r=>be.createElement("svg",T({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},r),be.createElement("g",null,be.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Qn=Jn});var ti={};Ke(ti,{ValueContainer:()=>ei});module.exports=He(ti);n();n();var G=_(require("react")),qe=require("@terradharitri/sdk-dapp/UI/Trim"),Wt=require("@terradharitri/sdk-dapp/utils"),zt=_(require("classnames")),Kt=require("react-select");n();var Me=_(require("react")),Yn=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var Ur=_(require("axios"));n();n();n();var Nr=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var Gr=require("@terradharitri/sdk-dapp/constants/index");n();n();n();n();n();n();n();var Dr=_(require("axios"));n();n();var gt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Vr=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Rr=_(require("axios")),Mr=_(require("lodash/uniqBy"));n();var qr=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Or=_(require("axios"));n();n();n();var j=require("@terradharitri/sdk-dapp/types/tokens.types");n();n();n();n();var xt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),$r=_(require("axios"));n();n();var Wr=_(require("axios"));n();var fe=_(require("react")),Ts=(0,fe.createContext)({});n();n();var K=_(require("react")),Sn=require("@terradharitri/sdk-dapp/constants/index"),In=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),kn=_(require("bignumber.js")),Ln=require("formik");n();n();n();var zr=require("bech32");n();n();n();n();n();n();var Zr=require("@terradharitri/sdk-dapp/constants"),Hr=require("@terradharitri/sdk-dapp/utils/account/getAccount");n();n();var Xr=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");n();var Yr=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var jr=_(require("anchorme"));n();n();var ht=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),J=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Tt=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),D=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();var re=_(require("react")),rn=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),on=require("formik");n();n();var It=require("@terradharitri/sdk-dapp/constants/index"),xo=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ho=_(require("bignumber.js"));n();n();var Et=require("@terradharitri/sdk-dapp/constants/index");n();var Qr=require("@terradharitri/sdk-dapp/constants/index");n();var bt=require("@terradharitri/sdk-dapp/constants/index"),to=_(require("bignumber.js"));n();var eo=require("@terradharitri/sdk-dapp/constants/index");n();var ro=require("@terradharitri/sdk-dapp/constants/index");n();n();var ae=require("@terradharitri/sdk-core"),oo=require("@terradharitri/sdk-dapp/constants/index"),no=_(require("bignumber.js"));n();n();var so=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");n();var co=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var po=_(require("bignumber.js"));n();var mo=require("@terradharitri/sdk-dapp/constants/index"),uo=require("@terradharitri/sdk-dapp/utils/smartContracts"),_o=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),fo=_(require("bignumber.js"));n();var lo=_(require("bignumber.js"));n();var ee=require("@terradharitri/sdk-dapp/constants/index"),St=_(require("bignumber.js"));var wt,Ct,At,De=(0,J.formatAmount)({input:String((wt=ee.GAS_PRICE)!=null?wt:1e9),decimals:(Ct=ee.DECIMALS)!=null?Ct:18,showLastNonZeroDecimal:!0,digits:(At=ee.DIGITS)!=null?At:4}),yo=new St.default(De).times(10).toString(10);n();var ge=require("@terradharitri/sdk-dapp/constants/index"),vo=_(require("bignumber.js"));n();var go=_(require("bignumber.js"));n();n();var Pt=require("yup");n();var xe=require("@terradharitri/sdk-dapp/constants/ledger.constants"),kt=_(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),he=require("yup"),To=(0,he.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:t}=this.parent;return!(t&&e&&e.length&&!t.ledgerDataActive)}),Eo=(0,he.string)().test({name:"hashSign",test:function(e){let{ledger:t,isGuarded:o}=this.parent;if(t){let{ledgerWithHashSign:i,ledgerWithGuardians:s}=(0,kt.default)(t.version);if(e&&e.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${xe.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(o&&!s)return this.createError({message:`You need at least DharitrI app version ${xe.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),bo=[To,Eo],Ca=bo.reduce((r,e)=>r.concat(e),(0,he.string)());n();var wo=require("@terradharitri/sdk-dapp/constants/index"),Co=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ao=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),So=require("yup");n();var Po=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Fo=_(require("bignumber.js")),Go=require("yup");n();var Io=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ko=_(require("bignumber.js")),Lo=require("yup");n();var No=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Bo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Uo=_(require("bignumber.js")),Do=require("yup");n();var Vo=_(require("bignumber.js")),Ro=require("yup");n();var Mo=require("@terradharitri/sdk-dapp/constants/index"),qo=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Oo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),$o=_(require("bignumber.js")),Wo=require("yup");n();var zo=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ko=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Zo=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ho=_(require("bignumber.js")),Xo=require("yup");n();var Yo=_(require("bignumber.js")),jo=require("yup");n();var Jo=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Qo=require("yup");n();var en=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),tn=require("yup");n();n();var Yp=(0,re.createContext)({});n();n();var V=_(require("react")),an=require("formik"),pn=_(require("lodash/uniqBy"));n();n();var oe=_(require("react"));var ol=(0,oe.createContext)({});n();n();var Ft=require("react"),nn=require("@terradharitri/sdk-dapp/constants/index");var sn=require("@terradharitri/sdk-dapp/types/enums.types");n();var Gl=(0,V.createContext)({});n();n();var Vt=require("@terradharitri/sdk-dapp/constants/index"),An=require("formik");n();n();var z=_(require("react")),Ut=require("@terradharitri/sdk-dapp/constants/index"),Tn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),En=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),bn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),wn=_(require("bignumber.js")),Cn=require("formik");n();n();n();n();var ln=_(require("bignumber.js"));n();var mn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),dn=_(require("bignumber.js"));n();n();var Bt=require("react"),_n=require("@terradharitri/sdk-dapp/constants/index"),fn=require("@terradharitri/sdk-dapp/utils/smartContracts"),yn=_(require("bignumber.js")),vn=require("formik");n();var Gt=require("react");n();n();var gn=require("@terradharitri/sdk-dapp/constants/index"),xn=_(require("bignumber.js"));var Rm=(0,z.createContext)({});var fd=(0,K.createContext)({});n();n();var ie=_(require("react")),Pn=require("formik");var Ld=(0,ie.createContext)({});n();n();var se=_(require("react")),Rn=require("formik");n();n();n();var Rt=require("react"),Nn=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Bn=_(require("lodash/uniqBy"));n();n();var Fn=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Gn=require("@terradharitri/sdk-dapp/utils");n();var Vn=require("react");n();var Un=require("react"),Dn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var su=(0,se.createContext)({});n();n();var Ee=_(require("react")),Hn=require("formik");n();n();n();n();n();var zn=require("react"),Kn=require("@terradharitri/sdk-dapp/utils");n();var $n=require("react"),Wn=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var Mn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),qn=_(require("axios"));n();var On=_(require("axios"));var $u=(0,Ee.createContext)({});n();var pe=_(require("react"));var Xn=(0,pe.createContext)({});function Mt(){return(0,pe.useContext)(Xn)}n();var jn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jn));var R={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};n();var{default:$t}=(Ot(),He(qt));var ei=r=>{let{selectProps:e,isDisabled:t}=r,{value:o,menuIsOpen:i}=e,s=o,{receiverInfo:{receiver:l},receiverUsernameInfo:{receiverUsername:d}}=Mt(),u=d!=null?d:s&&s.value!==s.label,f=s?{value:l!=null?l:s.value,label:s.label}:null,v=f&&(u||!u&&!i)&&(0,Wt.addressIsValid)(f.value);return G.default.createElement(Kt.components.ValueContainer,I(T({},r),{className:R.receiverSelectValue}),v&&G.default.createElement("span",{className:(0,zt.default)(R.receiverSelectSingle,{[R.disabled]:t})},u?G.default.createElement(G.default.Fragment,null,G.default.createElement("span",{className:R.receiverSelectSingleUsername},G.default.createElement($t,{className:R.receiverSelectSingleUsernameIcon}),f.label),G.default.createElement("span",{className:R.receiverSelectSingleTrimWrapper},"(",G.default.createElement(qe.Trim,{text:f.value,className:R.receiverSelectSingleTrim}),")")):G.default.createElement(qe.Trim,{text:f.value,className:R.receiverSelectSingleTrim})),r.children)};0&&(module.exports={ValueContainer});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
