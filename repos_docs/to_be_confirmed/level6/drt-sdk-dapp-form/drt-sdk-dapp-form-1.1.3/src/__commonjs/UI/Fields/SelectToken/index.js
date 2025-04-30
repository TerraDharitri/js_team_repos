"use strict";var xr=Object.create;var ue=Object.defineProperty,Tr=Object.defineProperties,br=Object.getOwnPropertyDescriptor,vr=Object.getOwnPropertyDescriptors,Er=Object.getOwnPropertyNames,it=Object.getOwnPropertySymbols,wr=Object.getPrototypeOf,st=Object.prototype.hasOwnProperty,Ar=Object.prototype.propertyIsEnumerable;var at=(r,e,t)=>e in r?ue(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,T=(r,e)=>{for(var t in e||(e={}))st.call(e,t)&&at(r,t,e[t]);if(it)for(var t of it(e))Ar.call(e,t)&&at(r,t,e[t]);return r},w=(r,e)=>Tr(r,vr(e));var ct=(r,e)=>()=>(r&&(e=r(r=0)),e);var he=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),pt=(r,e)=>{for(var t in e)ue(r,t,{get:e[t],enumerable:!0})},mt=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Er(e))!st.call(r,i)&&i!==t&&ue(r,i,{get:()=>e[i],enumerable:!(o=br(e,i))||o.enumerable});return r};var f=(r,e,t)=>(t=r!=null?xr(wr(r)):{},mt(e||!r||!r.__esModule?ue(t,"default",{value:r,enumerable:!0}):t,r)),lt=r=>mt(ue({},"__esModule",{value:!0}),r);var b=(r,e,t)=>new Promise((o,i)=>{var a=d=>{try{u(t.next(d))}catch(h){i(h)}},s=d=>{try{u(t.throw(d))}catch(h){i(h)}},u=d=>d.done?o(d.value):Promise.resolve(d.value).then(a,s);u((t=t.apply(r,e)).next())});var ft=he(ye=>{"use strict";n();ye.byteLength=kr;ye.toByteArray=_r;ye.fromByteArray=Pr;var G=[],S=[],Cr=typeof Uint8Array!="undefined"?Uint8Array:Array,Ue="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(K=0,ut=Ue.length;K<ut;++K)G[K]=Ue[K],S[Ue.charCodeAt(K)]=K;var K,ut;S["-".charCodeAt(0)]=62;S["_".charCodeAt(0)]=63;function dt(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var o=t===e?0:4-t%4;return[t,o]}function kr(r){var e=dt(r),t=e[0],o=e[1];return(t+o)*3/4-o}function Ir(r,e,t){return(e+t)*3/4-t}function _r(r){var e,t=dt(r),o=t[0],i=t[1],a=new Cr(Ir(r,o,i)),s=0,u=i>0?o-4:o,d;for(d=0;d<u;d+=4)e=S[r.charCodeAt(d)]<<18|S[r.charCodeAt(d+1)]<<12|S[r.charCodeAt(d+2)]<<6|S[r.charCodeAt(d+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=e&255;return i===2&&(e=S[r.charCodeAt(d)]<<2|S[r.charCodeAt(d+1)]>>4,a[s++]=e&255),i===1&&(e=S[r.charCodeAt(d)]<<10|S[r.charCodeAt(d+1)]<<4|S[r.charCodeAt(d+2)]>>2,a[s++]=e>>8&255,a[s++]=e&255),a}function Lr(r){return G[r>>18&63]+G[r>>12&63]+G[r>>6&63]+G[r&63]}function Sr(r,e,t){for(var o,i=[],a=e;a<t;a+=3)o=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),i.push(Lr(o));return i.join("")}function Pr(r){for(var e,t=r.length,o=t%3,i=[],a=16383,s=0,u=t-o;s<u;s+=a)i.push(Sr(r,s,s+a>u?u:s+a));return o===1?(e=r[t-1],i.push(G[e>>2]+G[e<<4&63]+"==")):o===2&&(e=(r[t-2]<<8)+r[t-1],i.push(G[e>>10]+G[e>>4&63]+G[e<<2&63]+"=")),i.join("")}});var gt=he(Ve=>{n();Ve.read=function(r,e,t,o,i){var a,s,u=i*8-o-1,d=(1<<u)-1,h=d>>1,y=-7,g=t?i-1:0,C=t?-1:1,x=r[e+g];for(g+=C,a=x&(1<<-y)-1,x>>=-y,y+=u;y>0;a=a*256+r[e+g],g+=C,y-=8);for(s=a&(1<<-y)-1,a>>=-y,y+=o;y>0;s=s*256+r[e+g],g+=C,y-=8);if(a===0)a=1-h;else{if(a===d)return s?NaN:(x?-1:1)*(1/0);s=s+Math.pow(2,o),a=a-h}return(x?-1:1)*s*Math.pow(2,a-o)};Ve.write=function(r,e,t,o,i,a){var s,u,d,h=a*8-i-1,y=(1<<h)-1,g=y>>1,C=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,x=o?0:a-1,k=o?1:-1,P=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,s=y):(s=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-s))<1&&(s--,d*=2),s+g>=1?e+=C/d:e+=C*Math.pow(2,1-g),e*d>=2&&(s++,d/=2),s+g>=y?(u=0,s=y):s+g>=1?(u=(e*d-1)*Math.pow(2,i),s=s+g):(u=e*Math.pow(2,g-1)*Math.pow(2,i),s=0));i>=8;r[t+x]=u&255,x+=k,u/=256,i-=8);for(s=s<<i|u,h+=i;h>0;r[t+x]=s&255,x+=k,s/=256,h-=8);r[t+x-k]|=P*128}});var _t=he(ee=>{"use strict";n();var Re=ft(),Q=gt(),ht=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ee.Buffer=l;ee.SlowBuffer=Ur;ee.INSPECT_MAX_BYTES=50;var xe=2147483647;ee.kMaxLength=xe;l.TYPED_ARRAY_SUPPORT=Nr();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Nr(){try{var r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch(t){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function V(r){if(r>xe)throw new RangeError('The value "'+r+'" is invalid for option "size"');var e=new Uint8Array(r);return Object.setPrototypeOf(e,l.prototype),e}function l(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return $e(r)}return Tt(r,e,t)}l.poolSize=8192;function Tt(r,e,t){if(typeof r=="string")return Gr(r,e);if(ArrayBuffer.isView(r))return Br(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(B(r,ArrayBuffer)||r&&B(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(B(r,SharedArrayBuffer)||r&&B(r.buffer,SharedArrayBuffer)))return qe(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=r.valueOf&&r.valueOf();if(o!=null&&o!==r)return l.from(o,e,t);var i=Dr(r);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return l.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}l.from=function(r,e,t){return Tt(r,e,t)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function bt(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function Fr(r,e,t){return bt(r),r<=0?V(r):e!==void 0?typeof t=="string"?V(r).fill(e,t):V(r).fill(e):V(r)}l.alloc=function(r,e,t){return Fr(r,e,t)};function $e(r){return bt(r),V(r<0?0:We(r)|0)}l.allocUnsafe=function(r){return $e(r)};l.allocUnsafeSlow=function(r){return $e(r)};function Gr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!l.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=vt(r,e)|0,o=V(t),i=o.write(r,e);return i!==t&&(o=o.slice(0,i)),o}function Me(r){for(var e=r.length<0?0:We(r.length)|0,t=V(e),o=0;o<e;o+=1)t[o]=r[o]&255;return t}function Br(r){if(B(r,Uint8Array)){var e=new Uint8Array(r);return qe(e.buffer,e.byteOffset,e.byteLength)}return Me(r)}function qe(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return e===void 0&&t===void 0?o=new Uint8Array(r):t===void 0?o=new Uint8Array(r,e):o=new Uint8Array(r,e,t),Object.setPrototypeOf(o,l.prototype),o}function Dr(r){if(l.isBuffer(r)){var e=We(r.length)|0,t=V(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||Ke(r.length)?V(0):Me(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Me(r.data)}function We(r){if(r>=xe)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+xe.toString(16)+" bytes");return r|0}function Ur(r){return+r!=r&&(r=0),l.alloc(+r)}l.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==l.prototype};l.compare=function(e,t){if(B(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),B(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,i=t.length,a=0,s=Math.min(o,i);a<s;++a)if(e[a]!==t[a]){o=e[a],i=t[a];break}return o<i?-1:i<o?1:0};l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return l.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var i=l.allocUnsafe(t),a=0;for(o=0;o<e.length;++o){var s=e[o];if(B(s,Uint8Array))a+s.length>i.length?l.from(s).copy(i,a):Uint8Array.prototype.set.call(i,s,a);else if(l.isBuffer(s))s.copy(i,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return i};function vt(r,e){if(l.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||B(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);var t=r.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Oe(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return It(r).length;default:if(i)return o?-1:Oe(r).length;e=(""+e).toLowerCase(),i=!0}}l.byteLength=vt;function Vr(r,e,t){var o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Hr(this,e,t);case"utf8":case"utf-8":return wt(this,e,t);case"ascii":return Zr(this,e,t);case"latin1":case"binary":return zr(this,e,t);case"base64":return Wr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Xr(this,e,t);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),o=!0}}l.prototype._isBuffer=!0;function Z(r,e,t){var o=r[e];r[e]=r[t],r[t]=o}l.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)Z(this,t,t+1);return this};l.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)Z(this,t,t+3),Z(this,t+1,t+2);return this};l.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)Z(this,t,t+7),Z(this,t+1,t+6),Z(this,t+2,t+5),Z(this,t+3,t+4);return this};l.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?wt(this,0,e):Vr.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:l.compare(this,e)===0};l.prototype.inspect=function(){var e="",t=ee.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};ht&&(l.prototype[ht]=l.prototype.inspect);l.prototype.compare=function(e,t,o,i,a){if(B(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),i===void 0&&(i=0),a===void 0&&(a=this.length),t<0||o>e.length||i<0||a>this.length)throw new RangeError("out of range index");if(i>=a&&t>=o)return 0;if(i>=a)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,i>>>=0,a>>>=0,this===e)return 0;for(var s=a-i,u=o-t,d=Math.min(s,u),h=this.slice(i,a),y=e.slice(t,o),g=0;g<d;++g)if(h[g]!==y[g]){s=h[g],u=y[g];break}return s<u?-1:u<s?1:0};function Et(r,e,t,o,i){if(r.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Ke(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e=="string"&&(e=l.from(e,o)),l.isBuffer(e))return e.length===0?-1:yt(r,e,t,o,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):yt(r,[e],t,o,i);throw new TypeError("val must be string, number or Buffer")}function yt(r,e,t,o,i){var a=1,s=r.length,u=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,s/=2,u/=2,t/=2}function d(x,k){return a===1?x[k]:x.readUInt16BE(k*a)}var h;if(i){var y=-1;for(h=t;h<s;h++)if(d(r,h)===d(e,y===-1?0:h-y)){if(y===-1&&(y=h),h-y+1===u)return y*a}else y!==-1&&(h-=h-y),y=-1}else for(t+u>s&&(t=s-u),h=t;h>=0;h--){for(var g=!0,C=0;C<u;C++)if(d(r,h+C)!==d(e,C)){g=!1;break}if(g)return h}return-1}l.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1};l.prototype.indexOf=function(e,t,o){return Et(this,e,t,o,!0)};l.prototype.lastIndexOf=function(e,t,o){return Et(this,e,t,o,!1)};function Rr(r,e,t,o){t=Number(t)||0;var i=r.length-t;o?(o=Number(o),o>i&&(o=i)):o=i;var a=e.length;o>a/2&&(o=a/2);for(var s=0;s<o;++s){var u=parseInt(e.substr(s*2,2),16);if(Ke(u))return s;r[t+s]=u}return s}function Mr(r,e,t,o){return Te(Oe(e,r.length-t),r,t,o)}function qr(r,e,t,o){return Te(Jr(e),r,t,o)}function Or(r,e,t,o){return Te(It(e),r,t,o)}function $r(r,e,t,o){return Te(Qr(e,r.length-t),r,t,o)}l.prototype.write=function(e,t,o,i){if(t===void 0)i="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")i=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,i===void 0&&(i="utf8")):(i=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-t;if((o===void 0||o>a)&&(o=a),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var s=!1;;)switch(i){case"hex":return Rr(this,e,t,o);case"utf8":case"utf-8":return Mr(this,e,t,o);case"ascii":case"latin1":case"binary":return qr(this,e,t,o);case"base64":return Or(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $r(this,e,t,o);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Wr(r,e,t){return e===0&&t===r.length?Re.fromByteArray(r):Re.fromByteArray(r.slice(e,t))}function wt(r,e,t){t=Math.min(r.length,t);for(var o=[],i=e;i<t;){var a=r[i],s=null,u=a>239?4:a>223?3:a>191?2:1;if(i+u<=t){var d,h,y,g;switch(u){case 1:a<128&&(s=a);break;case 2:d=r[i+1],(d&192)===128&&(g=(a&31)<<6|d&63,g>127&&(s=g));break;case 3:d=r[i+1],h=r[i+2],(d&192)===128&&(h&192)===128&&(g=(a&15)<<12|(d&63)<<6|h&63,g>2047&&(g<55296||g>57343)&&(s=g));break;case 4:d=r[i+1],h=r[i+2],y=r[i+3],(d&192)===128&&(h&192)===128&&(y&192)===128&&(g=(a&15)<<18|(d&63)<<12|(h&63)<<6|y&63,g>65535&&g<1114112&&(s=g))}}s===null?(s=65533,u=1):s>65535&&(s-=65536,o.push(s>>>10&1023|55296),s=56320|s&1023),o.push(s),i+=u}return Kr(o)}var xt=4096;function Kr(r){var e=r.length;if(e<=xt)return String.fromCharCode.apply(String,r);for(var t="",o=0;o<e;)t+=String.fromCharCode.apply(String,r.slice(o,o+=xt));return t}function Zr(r,e,t){var o="";t=Math.min(r.length,t);for(var i=e;i<t;++i)o+=String.fromCharCode(r[i]&127);return o}function zr(r,e,t){var o="";t=Math.min(r.length,t);for(var i=e;i<t;++i)o+=String.fromCharCode(r[i]);return o}function Hr(r,e,t){var o=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>o)&&(t=o);for(var i="",a=e;a<t;++a)i+=eo[r[a]];return i}function Xr(r,e,t){for(var o=r.slice(e,t),i="",a=0;a<o.length-1;a+=2)i+=String.fromCharCode(o[a]+o[a+1]*256);return i}l.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var i=this.subarray(e,t);return Object.setPrototypeOf(i,l.prototype),i};function A(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||A(e,t,this.length);for(var i=this[e],a=1,s=0;++s<t&&(a*=256);)i+=this[e+s]*a;return i};l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||A(e,t,this.length);for(var i=this[e+--t],a=1;t>0&&(a*=256);)i+=this[e+--t]*a;return i};l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e=e>>>0,t||A(e,1,this.length),this[e]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||A(e,2,this.length),this[e]|this[e+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||A(e,2,this.length),this[e]<<8|this[e+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||A(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||A(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};l.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||A(e,t,this.length);for(var i=this[e],a=1,s=0;++s<t&&(a*=256);)i+=this[e+s]*a;return a*=128,i>=a&&(i-=Math.pow(2,8*t)),i};l.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||A(e,t,this.length);for(var i=t,a=1,s=this[e+--i];i>0&&(a*=256);)s+=this[e+--i]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*t)),s};l.prototype.readInt8=function(e,t){return e=e>>>0,t||A(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};l.prototype.readInt16LE=function(e,t){e=e>>>0,t||A(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o};l.prototype.readInt16BE=function(e,t){e=e>>>0,t||A(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o};l.prototype.readInt32LE=function(e,t){return e=e>>>0,t||A(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};l.prototype.readInt32BE=function(e,t){return e=e>>>0,t||A(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};l.prototype.readFloatLE=function(e,t){return e=e>>>0,t||A(e,4,this.length),Q.read(this,e,!0,23,4)};l.prototype.readFloatBE=function(e,t){return e=e>>>0,t||A(e,4,this.length),Q.read(this,e,!1,23,4)};l.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||A(e,8,this.length),Q.read(this,e,!0,52,8)};l.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||A(e,8,this.length),Q.read(this,e,!1,52,8)};function L(r,e,t,o,i,a){if(!l.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<a)throw new RangeError('"value" argument is out of bounds');if(t+o>r.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,o,i){if(e=+e,t=t>>>0,o=o>>>0,!i){var a=Math.pow(2,8*o)-1;L(this,e,t,o,a,0)}var s=1,u=0;for(this[t]=e&255;++u<o&&(s*=256);)this[t+u]=e/s&255;return t+o};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,o,i){if(e=+e,t=t>>>0,o=o>>>0,!i){var a=Math.pow(2,8*o)-1;L(this,e,t,o,a,0)}var s=o-1,u=1;for(this[t+s]=e&255;--s>=0&&(u*=256);)this[t+s]=e/u&255;return t+o};l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||L(this,e,t,1,255,0),this[t]=e&255,t+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||L(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||L(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||L(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||L(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};l.prototype.writeIntLE=function(e,t,o,i){if(e=+e,t=t>>>0,!i){var a=Math.pow(2,8*o-1);L(this,e,t,o,a-1,-a)}var s=0,u=1,d=0;for(this[t]=e&255;++s<o&&(u*=256);)e<0&&d===0&&this[t+s-1]!==0&&(d=1),this[t+s]=(e/u>>0)-d&255;return t+o};l.prototype.writeIntBE=function(e,t,o,i){if(e=+e,t=t>>>0,!i){var a=Math.pow(2,8*o-1);L(this,e,t,o,a-1,-a)}var s=o-1,u=1,d=0;for(this[t+s]=e&255;--s>=0&&(u*=256);)e<0&&d===0&&this[t+s+1]!==0&&(d=1),this[t+s]=(e/u>>0)-d&255;return t+o};l.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||L(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};l.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||L(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};l.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||L(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};l.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||L(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};l.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||L(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function At(r,e,t,o,i,a){if(t+o>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ct(r,e,t,o,i){return e=+e,t=t>>>0,i||At(r,e,t,4,34028234663852886e22,-34028234663852886e22),Q.write(r,e,t,o,23,4),t+4}l.prototype.writeFloatLE=function(e,t,o){return Ct(this,e,t,!0,o)};l.prototype.writeFloatBE=function(e,t,o){return Ct(this,e,t,!1,o)};function kt(r,e,t,o,i){return e=+e,t=t>>>0,i||At(r,e,t,8,17976931348623157e292,-17976931348623157e292),Q.write(r,e,t,o,52,8),t+8}l.prototype.writeDoubleLE=function(e,t,o){return kt(this,e,t,!0,o)};l.prototype.writeDoubleBE=function(e,t,o){return kt(this,e,t,!1,o)};l.prototype.copy=function(e,t,o,i){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!i&&i!==0&&(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<o&&(i=o),i===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-o&&(i=e.length-t+o);var a=i-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,i):Uint8Array.prototype.set.call(e,this.subarray(o,i),t),a};l.prototype.fill=function(e,t,o,i){if(typeof e=="string"){if(typeof t=="string"?(i=t,t=0,o=this.length):typeof o=="string"&&(i=o,o=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!l.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){var a=e.charCodeAt(0);(i==="utf8"&&a<128||i==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<o;++s)this[s]=e;else{var u=l.isBuffer(e)?e:l.from(e,i),d=u.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<o-t;++s)this[s+t]=u[s%d]}return this};var Yr=/[^+/0-9A-Za-z-_]/g;function jr(r){if(r=r.split("=")[0],r=r.trim().replace(Yr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Oe(r,e){e=e||1/0;for(var t,o=r.length,i=null,a=[],s=0;s<o;++s){if(t=r.charCodeAt(s),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(s+1===o){(e-=3)>-1&&a.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&a.push(239,191,189);if(i=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function Jr(r){for(var e=[],t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Qr(r,e){for(var t,o,i,a=[],s=0;s<r.length&&!((e-=2)<0);++s)t=r.charCodeAt(s),o=t>>8,i=t%256,a.push(i),a.push(o);return a}function It(r){return Re.toByteArray(jr(r))}function Te(r,e,t,o){for(var i=0;i<o&&!(i+t>=e.length||i>=r.length);++i)e[i+t]=r[i];return i}function B(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function Ke(r){return r!==r}var eo=function(){for(var r="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var o=t*16,i=0;i<16;++i)e[o+i]=r[t]+r[i];return e}()});var Ft=he((Fi,Nt)=>{n();var v=Nt.exports={},D,U;function Ze(){throw new Error("setTimeout has not been defined")}function ze(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?D=setTimeout:D=Ze}catch(r){D=Ze}try{typeof clearTimeout=="function"?U=clearTimeout:U=ze}catch(r){U=ze}})();function Lt(r){if(D===setTimeout)return setTimeout(r,0);if((D===Ze||!D)&&setTimeout)return D=setTimeout,setTimeout(r,0);try{return D(r,0)}catch(e){try{return D.call(null,r,0)}catch(t){return D.call(this,r,0)}}}function to(r){if(U===clearTimeout)return clearTimeout(r);if((U===ze||!U)&&clearTimeout)return U=clearTimeout,clearTimeout(r);try{return U(r)}catch(e){try{return U.call(null,r)}catch(t){return U.call(this,r)}}}var R=[],te=!1,z,be=-1;function ro(){!te||!z||(te=!1,z.length?R=z.concat(R):be=-1,R.length&&St())}function St(){if(!te){var r=Lt(ro);te=!0;for(var e=R.length;e;){for(z=R,R=[];++be<e;)z&&z[be].run();be=-1,e=R.length}z=null,te=!1,to(r)}}v.nextTick=function(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];R.push(new Pt(r,e)),R.length===1&&!te&&Lt(St)};function Pt(r,e){this.fun=r,this.array=e}Pt.prototype.run=function(){this.fun.apply(null,this.array)};v.title="browser";v.browser=!0;v.env={};v.argv=[];v.version="";v.versions={};function M(){}v.on=M;v.addListener=M;v.once=M;v.off=M;v.removeListener=M;v.removeAllListeners=M;v.emit=M;v.prependListener=M;v.prependOnceListener=M;v.listeners=function(r){return[]};v.binding=function(r){throw new Error("process.binding is not supported")};v.cwd=function(){return"/"};v.chdir=function(r){throw new Error("process.chdir is not supported")};v.umask=function(){return 0}});var c,p,Gi,n=ct(()=>{c=f(_t()),p=f(Ft()),Gi=function(r){function e(){var o=this||self;return delete r.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return e();r.defineProperty(r.prototype,"__magic__",{configurable:!0,get:e});var t=__magic__;return t}(Object)});var ir={};pt(ir,{default:()=>wi});var Pe,Ei,wi,ar=ct(()=>{"use strict";n();Pe=f(require("react")),Ei=r=>Pe.createElement("svg",T({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},r),Pe.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Pe.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),wi=Ei});var _i={};pt(_i,{SelectToken:()=>Ii});module.exports=lt(_i);n();n();var $=f(require("react")),dr=f(require("@terradharitri/sdk-dapp/constants/index")),fr=f(require("classnames")),Ne=f(require("react-select"));n();var oo=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(oo));var ve={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};n();n();var fe=f(require("react"));n();var Ee=f(require("react")),Ri=(0,Ee.createContext)({});n();n();var j=f(require("react")),jn=require("@terradharitri/sdk-dapp/constants/index"),Jn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Qn=f(require("bignumber.js")),ei=require("formik");n();n();n();var no=require("bech32");n();n();n();var He=(r,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(r);n();n();var N=require("@terradharitri/sdk-dapp/types/tokens.types");n();n();var ao=require("@terradharitri/sdk-dapp/constants"),so=require("@terradharitri/sdk-dapp/utils/account/getAccount");n();n();var co=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");n();var po=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var we=f(require("anchorme")),Xe=r=>r.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Gt=(r,e)=>{if(e){let t=`[Message hidden due to suspicious content - ${e.info}]`;if(r.length>1e3)return{output:t,stringWithLinks:r,found:!0};let o=Xe(r.normalize("NFKC")),i=we.default.list(o),a=[];if(i.length>0){let s=t;i.forEach((u,d)=>{let{string:h}=u,y="",g="",C=h;for(let x=0;x<s.length;x++){let k=s.slice(x),[P]=we.default.list(Xe(k));P&&h===P.string&&(y=s.substring(0,x))}for(let x=t.length;x>0;x--){let k=s.slice(0,x),[P]=we.default.list(Xe(k));P&&h===P.string&&(g=s.substring(x))}a.push(y),a.push(C),s=g,d===i.length-1&&a.push(g)})}else a.push(r);return{output:t,stringWithLinks:a.join(""),found:!0}}else return{output:r,stringWithLinks:"",found:!1}};n();function Bt({docStyle:r}){let e={hoverColor:r.getPropertyValue("--border-color"),primaryColor:r.getPropertyValue("--primary"),bgColor:r.getPropertyValue("--card-bg"),mutedColor:r.getPropertyValue("--muted"),blackColor:r.getPropertyValue("--black")};return{valueContainer:()=>({padding:"0.125rem 0 0.125rem 0.2rem",lineHeight:"1.5",fontSize:"0.8125rem",maxWidth:"85%",display:"flex"}),control:(t,o)=>w(T({},t),{minHeight:"0",flexWrap:"nowrap",backgroundColor:o.isDisabled?"#e9ecef":"transparent",borderColor:o.isDisabled?e.hoverColor:o.isFocused?e.primaryColor:e.blackColor,boxShadow:o.isFocused?`0 0 0 0.2rem #${e.primaryColor.replace("#","").trim()}33`:null,"&:hover":{borderColor:o.isFocused?e.primaryColor:"#b0b0b0"}}),input:t=>w(T({},t),{paddingLeft:"0.4rem",marginLeft:"0",marginRight:"0"}),indicatorSeparator:t=>w(T({},t),{marginTop:"0.3rem",marginBottom:"0.3rem"}),indicatorsContainer:t=>w(T({},t),{zIndex:"0"}),dropdownIndicator:t=>w(T({},t),{padding:"0 0.4rem"}),multiValue:t=>w(T({},t),{backgroundColor:e.hoverColor,borderRadius:"4px"}),multiValueRemove:t=>w(T({},t),{cursor:"pointer"}),multiValueLebel:t=>w(T({},t),{lineHeight:"1.5"}),placeholder:t=>w(T({},t),{marginLeft:"0",lineHeight:"2"}),option:(t,{isFocused:o,isSelected:i})=>w(T({},t),{fontSize:"0.8125rem",cursor:"pointer",align:"left",backgroundColor:i?e.primaryColor:o?e.hoverColor:"transparent"}),menu:t=>w(T({},t),{marginTop:"0.2rem",zIndex:"5"})}}n();var Dt=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),re=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Ut=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),q=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();n();n();n();n();n();var ie=f(require("react")),Tn=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),bn=require("formik");n();n();var Wt=require("@terradharitri/sdk-dapp/constants/index"),Bo=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Do=f(require("bignumber.js"));n();n();var Vt=require("@terradharitri/sdk-dapp/constants/index");n();var lo=require("@terradharitri/sdk-dapp/constants/index");n();n();var I="0";n();var Rt=require("@terradharitri/sdk-dapp/constants/index"),fo=f(require("bignumber.js"));n();var uo=require("@terradharitri/sdk-dapp/constants/index");n();var go=require("@terradharitri/sdk-dapp/constants/index");n();n();var de=require("@terradharitri/sdk-core"),ho=require("@terradharitri/sdk-dapp/constants/index"),yo=f(require("bignumber.js"));n();n();var To=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");n();var bo=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var Eo=f(require("bignumber.js"));n();var _o=require("@terradharitri/sdk-dapp/constants/index"),Lo=require("@terradharitri/sdk-dapp/utils/smartContracts"),So=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Po=f(require("bignumber.js"));n();var Io=f(require("bignumber.js"));n();n();var ko=f(require("axios"));n();n();n();var Co=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var Ao=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var ne=require("@terradharitri/sdk-dapp/constants/index"),$t=f(require("bignumber.js"));var Mt,qt,Ot,Je=(0,re.formatAmount)({input:String((Mt=ne.GAS_PRICE)!=null?Mt:1e9),decimals:(qt=ne.DECIMALS)!=null?qt:18,showLastNonZeroDecimal:!0,digits:(Ot=ne.DIGITS)!=null?Ot:4}),No=new $t.default(Je).times(10).toString(10);n();var ke=require("@terradharitri/sdk-dapp/constants/index"),Fo=f(require("bignumber.js"));n();var Go=f(require("bignumber.js"));n();n();var zt=require("yup");n();var Ie=require("@terradharitri/sdk-dapp/constants/ledger.constants"),Kt=f(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),_e=require("yup"),Uo=(0,_e.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:t}=this.parent;return!(t&&e&&e.length&&!t.ledgerDataActive)}),Vo=(0,_e.string)().test({name:"hashSign",test:function(e){let{ledger:t,isGuarded:o}=this.parent;if(t){let{ledgerWithHashSign:i,ledgerWithGuardians:a}=(0,Kt.default)(t.version);if(e&&e.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${Ie.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(o&&!a)return this.createError({message:`You need at least DharitrI app version ${Ie.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Ro=[Uo,Vo],wc=Ro.reduce((r,e)=>r.concat(e),(0,_e.string)());n();var Mo=require("@terradharitri/sdk-dapp/constants/index"),qo=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Oo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),$o=require("yup");n();var zo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ho=f(require("bignumber.js")),Xo=require("yup");n();var Wo=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ko=f(require("bignumber.js")),Zo=require("yup");n();var Yo=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),jo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Jo=f(require("bignumber.js")),Qo=require("yup");n();var en=f(require("bignumber.js")),tn=require("yup");n();var rn=require("@terradharitri/sdk-dapp/constants/index"),on=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),nn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),an=f(require("bignumber.js")),sn=require("yup");n();var cn=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),pn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),mn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ln=f(require("bignumber.js")),un=require("yup");n();var dn=f(require("bignumber.js")),fn=require("yup");n();var gn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),hn=require("yup");n();var yn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),xn=require("yup");n();n();var Hp=(0,ie.createContext)({});n();n();var O=f(require("react")),Nn=require("formik"),Fn=f(require("lodash/uniqBy"));n();n();n();var vn=f(require("axios"));n();n();var En=f(require("axios"));n();n();var Ht=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),wn=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),An=f(require("axios")),Cn=f(require("lodash/uniqBy"));n();var kn=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),In=f(require("axios"));n();var Xt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),_n=f(require("axios"));n();n();var ae=f(require("react"));var Nm=(0,ae.createContext)({});n();n();var Yt=require("react"),Ln=require("@terradharitri/sdk-dapp/constants/index");var Sn=require("@terradharitri/sdk-dapp/types/enums.types");n();var cl=(0,O.createContext)({});n();n();var rr=require("@terradharitri/sdk-dapp/constants/index"),Yn=require("formik");n();n();var Y=f(require("react")),er=require("@terradharitri/sdk-dapp/constants/index"),Kn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Zn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),zn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Hn=f(require("bignumber.js")),Xn=require("formik");n();n();n();n();var Gn=f(require("bignumber.js"));n();var Bn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Dn=f(require("bignumber.js"));n();n();var Qt=require("react"),Vn=require("@terradharitri/sdk-dapp/constants/index"),Rn=require("@terradharitri/sdk-dapp/utils/smartContracts"),Mn=f(require("bignumber.js")),qn=require("formik");n();var jt=require("react");n();n();var On=require("@terradharitri/sdk-dapp/constants/index"),$n=f(require("bignumber.js"));var du=(0,Y.createContext)({});var $u=(0,j.createContext)({});n();n();var ce=f(require("react")),ti=require("formik");var nd=(0,ce.createContext)({});n();n();var pe=f(require("react")),pi=require("formik");n();n();n();var or=require("react"),ni=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),ii=f(require("lodash/uniqBy"));n();n();var ri=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),oi=require("@terradharitri/sdk-dapp/utils");n();var ci=require("react");n();var ai=require("react"),si=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var Gd=(0,pe.createContext)({});n();n();var Se=f(require("react")),xi=require("formik");n();n();n();n();n();var gi=require("react"),hi=require("@terradharitri/sdk-dapp/utils");n();var di=require("react"),fi=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var mi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),li=f(require("axios"));n();var ui=f(require("axios"));var xf=(0,Se.createContext)({});var Ti=(0,fe.createContext)({});function nr(){return(0,fe.useContext)(Ti)}n();var bi=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bi));var tt={selectTokenContainer:"dapp-core-component__styles-module__selectTokenContainer"};n();n();var E=f(require("react")),sr=require("@fortawesome/free-solid-svg-icons"),cr=require("@fortawesome/react-fontawesome"),pr=f(require("@terradharitri/sdk-dapp/constants/index")),mr=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),lr=f(require("classnames"));n();var vi=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vi));var J={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};var Ci=(ar(),lt(ir)).default,ur=({RewaIcon:r,inDropdown:e=!1,isRewa:t,nftTokenDetails:o,nftType:i,token:a})=>{var Fe,le;let{name:s,identifier:u,balance:d,decimals:h}=a,y=((Fe=a.assets)==null?void 0:Fe.svgUrl)||((le=a.assets)==null?void 0:le.pngUrl)||"",g=y?28:20,[C,x]=(0,E.useState)(s);(0,E.useEffect)(()=>{var ge;((ge=o==null?void 0:o.uris)==null?void 0:ge.some(Ge=>{let Be=c.Buffer.from(String(Ge),"base64").toString(),{found:De}=Gt(Be,o==null?void 0:o.scamInfo);return De}))||x(s)},[s]);let k=E.default.createElement(cr.FontAwesomeIcon,{icon:sr.faDiamond});i==N.NftEnumType.NonFungibleDCDT&&(k=E.default.createElement("div",{className:"nft-type","data-testid":`${u}-type-nft`},"NFT")),i===N.NftEnumType.SemiFungibleDCDT&&(k=E.default.createElement("div",{className:"nft-type","data-testid":`${u}-type-sft`},"SFT"));let P=!e&&i!==N.NftEnumType.NonFungibleDCDT,me=E.default.createElement("div",{className:J.tokenElementCircle},k);return y&&(me=E.default.createElement("img",{className:J.tokenElementCircle,src:y,alt:s,height:g})),t&&(me=E.default.createElement("div",{className:J.tokenElementCircle},r?E.default.createElement(r,{height:36}):E.default.createElement(Ci,{height:36}))),E.default.createElement("div",{className:(0,lr.default)(ve.value,J.tokenElement)},E.default.createElement("div",{className:J.tokenElementWrapper},me),E.default.createElement("div",{"data-testid":"tokenName"},E.default.createElement("span",{"data-testid":`${u}-element`},E.default.createElement("span",null,C)," ",E.default.createElement("span",{className:J.tokenElementIdentifier},u)),P&&E.default.createElement(mr.FormatAmount,{rewaLabel:u,value:d||I,digits:i===N.NftEnumType.SemiFungibleDCDT?0:pr.DIGITS,token:u,showLabel:!1,decimals:h,"data-testid":`${u}-balance`})))};var ki=r=>$.default.createElement("div",{className:`token-option ${r.isSelected?"is-selected":""}`,"data-testid":`${r.value}-option`},$.default.createElement(Ne.components.Option,T({},r))),Ii=({className:r,label:e})=>{let{formInfo:t,accountInfo:o,tokensInfo:i}=nr(),{readonly:a}=t,{balance:s}=o,{getTokens:u,areTokensLoading:d,tokens:h,tokenId:y,rewaLabel:g,RewaIcon:C,tokenIdError:x,onChangeTokenId:k,isTokenIdInvalid:P}=i,me=({token:_})=>$.default.createElement(ur,{inDropdown:!0,token:_,isRewa:_.identifier===g,RewaIcon:C}),le=[{name:"DharitrI eGold",identifier:g,balance:s,decimals:dr.DECIMALS,ticker:""},...h].map(_=>({value:_.identifier,label:_.name,assets:_.assets,token:_}));function rt(){return b(this,null,function*(){yield u()})}let ge=_=>{_&&k(_.value)},Ge=({value:_,label:gr},ot)=>{if(Boolean(ot)){let hr=ot.trim().toLowerCase(),nt=yr=>yr.toLowerCase().indexOf(hr)>-1;return nt(_)||nt(gr)}return!0},Be=window.getComputedStyle(document.documentElement),De=Bt({docStyle:Be});return $.default.createElement("div",{className:(0,fr.default)(tt.selectTokenContainer,r)},e&&$.default.createElement("label",{htmlFor:"tokenId","data-testid":"tokenIdLabel",className:tt.selectTokenLabel},e),$.default.createElement(Ne.default,{className:"selectToken",classNamePrefix:"selectToken",components:{Option:ki},filterOption:Ge,formatOptionLabel:me,inputId:"tokenId",isDisabled:He("tokenId",a),isLoading:d,name:"tokenId",onChange:ge,onMenuOpen:rt,openMenuOnFocus:!0,options:le,styles:r?{}:De,value:le.find(({value:_})=>_===y)||void 0}),P&&$.default.createElement("div",{className:ve.error,"data-testid":"tokenIdError"},$.default.createElement("small",null,x)))};0&&(module.exports={SelectToken});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
