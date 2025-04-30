"use strict";var Mr=Object.create;var me=Object.defineProperty;var qr=Object.getOwnPropertyDescriptor;var Or=Object.getOwnPropertyNames;var $r=Object.getPrototypeOf,Wr=Object.prototype.hasOwnProperty;var Kr=(t,e)=>()=>(t&&(e=t(t=0)),e);var ue=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),zr=(t,e)=>{for(var r in e)me(t,r,{get:e[r],enumerable:!0})},Ke=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Or(e))!Wr.call(t,i)&&i!==r&&me(t,i,{get:()=>e[i],enumerable:!(o=qr(e,i))||o.enumerable});return t};var f=(t,e,r)=>(r=t!=null?Mr($r(t)):{},Ke(e||!t||!t.__esModule?me(r,"default",{value:t,enumerable:!0}):r,t)),Zr=t=>Ke(me({},"__esModule",{value:!0}),t);var He=ue(le=>{"use strict";n();le.byteLength=Xr;le.toByteArray=jr;le.fromByteArray=et;var L=[],_=[],Hr=typeof Uint8Array!="undefined"?Uint8Array:Array,ke="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(q=0,ze=ke.length;q<ze;++q)L[q]=ke[q],_[ke.charCodeAt(q)]=q;var q,ze;_["-".charCodeAt(0)]=62;_["_".charCodeAt(0)]=63;function Ze(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var o=r===e?0:4-r%4;return[r,o]}function Xr(t){var e=Ze(t),r=e[0],o=e[1];return(r+o)*3/4-o}function Yr(t,e,r){return(e+r)*3/4-r}function jr(t){var e,r=Ze(t),o=r[0],i=r[1],a=new Hr(Yr(t,o,i)),m=0,l=i>0?o-4:o,d;for(d=0;d<l;d+=4)e=_[t.charCodeAt(d)]<<18|_[t.charCodeAt(d+1)]<<12|_[t.charCodeAt(d+2)]<<6|_[t.charCodeAt(d+3)],a[m++]=e>>16&255,a[m++]=e>>8&255,a[m++]=e&255;return i===2&&(e=_[t.charCodeAt(d)]<<2|_[t.charCodeAt(d+1)]>>4,a[m++]=e&255),i===1&&(e=_[t.charCodeAt(d)]<<10|_[t.charCodeAt(d+1)]<<4|_[t.charCodeAt(d+2)]>>2,a[m++]=e>>8&255,a[m++]=e&255),a}function Jr(t){return L[t>>18&63]+L[t>>12&63]+L[t>>6&63]+L[t&63]}function Qr(t,e,r){for(var o,i=[],a=e;a<r;a+=3)o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(t[a+2]&255),i.push(Jr(o));return i.join("")}function et(t){for(var e,r=t.length,o=r%3,i=[],a=16383,m=0,l=r-o;m<l;m+=a)i.push(Qr(t,m,m+a>l?l:m+a));return o===1?(e=t[r-1],i.push(L[e>>2]+L[e<<4&63]+"==")):o===2&&(e=(t[r-2]<<8)+t[r-1],i.push(L[e>>10]+L[e>>4&63]+L[e<<2&63]+"=")),i.join("")}});var Xe=ue(Le=>{n();Le.read=function(t,e,r,o,i){var a,m,l=i*8-o-1,d=(1<<l)-1,h=d>>1,x=-7,g=r?i-1:0,w=r?-1:1,v=t[e+g];for(g+=w,a=v&(1<<-x)-1,v>>=-x,x+=l;x>0;a=a*256+t[e+g],g+=w,x-=8);for(m=a&(1<<-x)-1,a>>=-x,x+=o;x>0;m=m*256+t[e+g],g+=w,x-=8);if(a===0)a=1-h;else{if(a===d)return m?NaN:(v?-1:1)*(1/0);m=m+Math.pow(2,o),a=a-h}return(v?-1:1)*m*Math.pow(2,a-o)};Le.write=function(t,e,r,o,i,a){var m,l,d,h=a*8-i-1,x=(1<<h)-1,g=x>>1,w=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=o?0:a-1,E=o?1:-1,_e=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,m=x):(m=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-m))<1&&(m--,d*=2),m+g>=1?e+=w/d:e+=w*Math.pow(2,1-g),e*d>=2&&(m++,d/=2),m+g>=x?(l=0,m=x):m+g>=1?(l=(e*d-1)*Math.pow(2,i),m=m+g):(l=e*Math.pow(2,g-1)*Math.pow(2,i),m=0));i>=8;t[r+v]=l&255,v+=E,l/=256,i-=8);for(m=m<<i|l,h+=i;h>0;t[r+v]=m&255,v+=E,m/=256,h-=8);t[r+v-E]|=_e*128}});var cr=ue(Y=>{"use strict";n();var Se=He(),X=Xe(),Ye=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Y.Buffer=u;Y.SlowBuffer=at;Y.INSPECT_MAX_BYTES=50;var de=2147483647;Y.kMaxLength=de;u.TYPED_ARRAY_SUPPORT=rt();!u.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function rt(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(r){return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.buffer}});Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.byteOffset}});function N(t){if(t>de)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,u.prototype),e}function u(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Ge(t)}return Qe(t,e,r)}u.poolSize=8192;function Qe(t,e,r){if(typeof t=="string")return ot(t,e);if(ArrayBuffer.isView(t))return nt(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(S(t,ArrayBuffer)||t&&S(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(S(t,SharedArrayBuffer)||t&&S(t.buffer,SharedArrayBuffer)))return Fe(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=t.valueOf&&t.valueOf();if(o!=null&&o!==t)return u.from(o,e,r);var i=it(t);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return u.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}u.from=function(t,e,r){return Qe(t,e,r)};Object.setPrototypeOf(u.prototype,Uint8Array.prototype);Object.setPrototypeOf(u,Uint8Array);function er(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function tt(t,e,r){return er(t),t<=0?N(t):e!==void 0?typeof r=="string"?N(t).fill(e,r):N(t).fill(e):N(t)}u.alloc=function(t,e,r){return tt(t,e,r)};function Ge(t){return er(t),N(t<0?0:Be(t)|0)}u.allocUnsafe=function(t){return Ge(t)};u.allocUnsafeSlow=function(t){return Ge(t)};function ot(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=rr(t,e)|0,o=N(r),i=o.write(t,e);return i!==r&&(o=o.slice(0,i)),o}function Pe(t){for(var e=t.length<0?0:Be(t.length)|0,r=N(e),o=0;o<e;o+=1)r[o]=t[o]&255;return r}function nt(t){if(S(t,Uint8Array)){var e=new Uint8Array(t);return Fe(e.buffer,e.byteOffset,e.byteLength)}return Pe(t)}function Fe(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return e===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,e):o=new Uint8Array(t,e,r),Object.setPrototypeOf(o,u.prototype),o}function it(t){if(u.isBuffer(t)){var e=Be(t.length)|0,r=N(e);return r.length===0||t.copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||De(t.length)?N(0):Pe(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Pe(t.data)}function Be(t){if(t>=de)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+de.toString(16)+" bytes");return t|0}function at(t){return+t!=t&&(t=0),u.alloc(+t)}u.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==u.prototype};u.compare=function(e,r){if(S(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),S(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(e)||!u.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var o=e.length,i=r.length,a=0,m=Math.min(o,i);a<m;++a)if(e[a]!==r[a]){o=e[a],i=r[a];break}return o<i?-1:i<o?1:0};u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};u.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return u.alloc(0);var o;if(r===void 0)for(r=0,o=0;o<e.length;++o)r+=e[o].length;var i=u.allocUnsafe(r),a=0;for(o=0;o<e.length;++o){var m=e[o];if(S(m,Uint8Array))a+m.length>i.length?u.from(m).copy(i,a):Uint8Array.prototype.set.call(i,m,a);else if(u.isBuffer(m))m.copy(i,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=m.length}return i};function rr(t,e){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||S(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Ne(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return sr(t).length;default:if(i)return o?-1:Ne(t).length;e=(""+e).toLowerCase(),i=!0}}u.byteLength=rr;function st(t,e,r){var o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return ht(this,e,r);case"utf8":case"utf-8":return or(this,e,r);case"ascii":return gt(this,e,r);case"latin1":case"binary":return xt(this,e,r);case"base64":return dt(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yt(this,e,r);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}u.prototype._isBuffer=!0;function O(t,e,r){var o=t[e];t[e]=t[r],t[r]=o}u.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)O(this,r,r+1);return this};u.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)O(this,r,r+3),O(this,r+1,r+2);return this};u.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)O(this,r,r+7),O(this,r+1,r+6),O(this,r+2,r+5),O(this,r+3,r+4);return this};u.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?or(this,0,e):st.apply(this,arguments)};u.prototype.toLocaleString=u.prototype.toString;u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:u.compare(this,e)===0};u.prototype.inspect=function(){var e="",r=Y.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"};Ye&&(u.prototype[Ye]=u.prototype.inspect);u.prototype.compare=function(e,r,o,i,a){if(S(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),o===void 0&&(o=e?e.length:0),i===void 0&&(i=0),a===void 0&&(a=this.length),r<0||o>e.length||i<0||a>this.length)throw new RangeError("out of range index");if(i>=a&&r>=o)return 0;if(i>=a)return-1;if(r>=o)return 1;if(r>>>=0,o>>>=0,i>>>=0,a>>>=0,this===e)return 0;for(var m=a-i,l=o-r,d=Math.min(m,l),h=this.slice(i,a),x=e.slice(r,o),g=0;g<d;++g)if(h[g]!==x[g]){m=h[g],l=x[g];break}return m<l?-1:l<m?1:0};function tr(t,e,r,o,i){if(t.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,De(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=u.from(e,o)),u.isBuffer(e))return e.length===0?-1:je(t,e,r,o,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):je(t,[e],r,o,i);throw new TypeError("val must be string, number or Buffer")}function je(t,e,r,o,i){var a=1,m=t.length,l=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(t.length<2||e.length<2)return-1;a=2,m/=2,l/=2,r/=2}function d(v,E){return a===1?v[E]:v.readUInt16BE(E*a)}var h;if(i){var x=-1;for(h=r;h<m;h++)if(d(t,h)===d(e,x===-1?0:h-x)){if(x===-1&&(x=h),h-x+1===l)return x*a}else x!==-1&&(h-=h-x),x=-1}else for(r+l>m&&(r=m-l),h=r;h>=0;h--){for(var g=!0,w=0;w<l;w++)if(d(t,h+w)!==d(e,w)){g=!1;break}if(g)return h}return-1}u.prototype.includes=function(e,r,o){return this.indexOf(e,r,o)!==-1};u.prototype.indexOf=function(e,r,o){return tr(this,e,r,o,!0)};u.prototype.lastIndexOf=function(e,r,o){return tr(this,e,r,o,!1)};function ct(t,e,r,o){r=Number(r)||0;var i=t.length-r;o?(o=Number(o),o>i&&(o=i)):o=i;var a=e.length;o>a/2&&(o=a/2);for(var m=0;m<o;++m){var l=parseInt(e.substr(m*2,2),16);if(De(l))return m;t[r+m]=l}return m}function pt(t,e,r,o){return fe(Ne(e,t.length-r),t,r,o)}function mt(t,e,r,o){return fe(vt(e),t,r,o)}function ut(t,e,r,o){return fe(sr(e),t,r,o)}function lt(t,e,r,o){return fe(Et(e,t.length-r),t,r,o)}u.prototype.write=function(e,r,o,i){if(r===void 0)i="utf8",o=this.length,r=0;else if(o===void 0&&typeof r=="string")i=r,o=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(o)?(o=o>>>0,i===void 0&&(i="utf8")):(i=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-r;if((o===void 0||o>a)&&(o=a),e.length>0&&(o<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var m=!1;;)switch(i){case"hex":return ct(this,e,r,o);case"utf8":case"utf-8":return pt(this,e,r,o);case"ascii":case"latin1":case"binary":return mt(this,e,r,o);case"base64":return ut(this,e,r,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return lt(this,e,r,o);default:if(m)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),m=!0}};u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function dt(t,e,r){return e===0&&r===t.length?Se.fromByteArray(t):Se.fromByteArray(t.slice(e,r))}function or(t,e,r){r=Math.min(t.length,r);for(var o=[],i=e;i<r;){var a=t[i],m=null,l=a>239?4:a>223?3:a>191?2:1;if(i+l<=r){var d,h,x,g;switch(l){case 1:a<128&&(m=a);break;case 2:d=t[i+1],(d&192)===128&&(g=(a&31)<<6|d&63,g>127&&(m=g));break;case 3:d=t[i+1],h=t[i+2],(d&192)===128&&(h&192)===128&&(g=(a&15)<<12|(d&63)<<6|h&63,g>2047&&(g<55296||g>57343)&&(m=g));break;case 4:d=t[i+1],h=t[i+2],x=t[i+3],(d&192)===128&&(h&192)===128&&(x&192)===128&&(g=(a&15)<<18|(d&63)<<12|(h&63)<<6|x&63,g>65535&&g<1114112&&(m=g))}}m===null?(m=65533,l=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),i+=l}return ft(o)}var Je=4096;function ft(t){var e=t.length;if(e<=Je)return String.fromCharCode.apply(String,t);for(var r="",o=0;o<e;)r+=String.fromCharCode.apply(String,t.slice(o,o+=Je));return r}function gt(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]&127);return o}function xt(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]);return o}function ht(t,e,r){var o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);for(var i="",a=e;a<r;++a)i+=wt[t[a]];return i}function yt(t,e,r){for(var o=t.slice(e,r),i="",a=0;a<o.length-1;a+=2)i+=String.fromCharCode(o[a]+o[a+1]*256);return i}u.prototype.slice=function(e,r){var o=this.length;e=~~e,r=r===void 0?o:~~r,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),r<0?(r+=o,r<0&&(r=0)):r>o&&(r=o),r<e&&(r=e);var i=this.subarray(e,r);return Object.setPrototypeOf(i,u.prototype),i};function b(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=this[e],a=1,m=0;++m<r&&(a*=256);)i+=this[e+m]*a;return i};u.prototype.readUintBE=u.prototype.readUIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=this[e+--r],a=1;r>0&&(a*=256);)i+=this[e+--r]*a;return i};u.prototype.readUint8=u.prototype.readUInt8=function(e,r){return e=e>>>0,r||b(e,1,this.length),this[e]};u.prototype.readUint16LE=u.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||b(e,2,this.length),this[e]|this[e+1]<<8};u.prototype.readUint16BE=u.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||b(e,2,this.length),this[e]<<8|this[e+1]};u.prototype.readUint32LE=u.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};u.prototype.readUint32BE=u.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||b(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};u.prototype.readIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=this[e],a=1,m=0;++m<r&&(a*=256);)i+=this[e+m]*a;return a*=128,i>=a&&(i-=Math.pow(2,8*r)),i};u.prototype.readIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=r,a=1,m=this[e+--i];i>0&&(a*=256);)m+=this[e+--i]*a;return a*=128,m>=a&&(m-=Math.pow(2,8*r)),m};u.prototype.readInt8=function(e,r){return e=e>>>0,r||b(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};u.prototype.readInt16LE=function(e,r){e=e>>>0,r||b(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o};u.prototype.readInt16BE=function(e,r){e=e>>>0,r||b(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o};u.prototype.readInt32LE=function(e,r){return e=e>>>0,r||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};u.prototype.readInt32BE=function(e,r){return e=e>>>0,r||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};u.prototype.readFloatLE=function(e,r){return e=e>>>0,r||b(e,4,this.length),X.read(this,e,!0,23,4)};u.prototype.readFloatBE=function(e,r){return e=e>>>0,r||b(e,4,this.length),X.read(this,e,!1,23,4)};u.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||b(e,8,this.length),X.read(this,e,!0,52,8)};u.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||b(e,8,this.length),X.read(this,e,!1,52,8)};function C(t,e,r,o,i,a){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<a)throw new RangeError('"value" argument is out of bounds');if(r+o>t.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var a=Math.pow(2,8*o)-1;C(this,e,r,o,a,0)}var m=1,l=0;for(this[r]=e&255;++l<o&&(m*=256);)this[r+l]=e/m&255;return r+o};u.prototype.writeUintBE=u.prototype.writeUIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var a=Math.pow(2,8*o)-1;C(this,e,r,o,a,0)}var m=o-1,l=1;for(this[r+m]=e&255;--m>=0&&(l*=256);)this[r+m]=e/l&255;return r+o};u.prototype.writeUint8=u.prototype.writeUInt8=function(e,r,o){return e=+e,r=r>>>0,o||C(this,e,r,1,255,0),this[r]=e&255,r+1};u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||C(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||C(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2};u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||C(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4};u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||C(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};u.prototype.writeIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var a=Math.pow(2,8*o-1);C(this,e,r,o,a-1,-a)}var m=0,l=1,d=0;for(this[r]=e&255;++m<o&&(l*=256);)e<0&&d===0&&this[r+m-1]!==0&&(d=1),this[r+m]=(e/l>>0)-d&255;return r+o};u.prototype.writeIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var a=Math.pow(2,8*o-1);C(this,e,r,o,a-1,-a)}var m=o-1,l=1,d=0;for(this[r+m]=e&255;--m>=0&&(l*=256);)e<0&&d===0&&this[r+m+1]!==0&&(d=1),this[r+m]=(e/l>>0)-d&255;return r+o};u.prototype.writeInt8=function(e,r,o){return e=+e,r=r>>>0,o||C(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1};u.prototype.writeInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||C(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};u.prototype.writeInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||C(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};u.prototype.writeInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||C(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};u.prototype.writeInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||C(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function nr(t,e,r,o,i,a){if(r+o>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function ir(t,e,r,o,i){return e=+e,r=r>>>0,i||nr(t,e,r,4,34028234663852886e22,-34028234663852886e22),X.write(t,e,r,o,23,4),r+4}u.prototype.writeFloatLE=function(e,r,o){return ir(this,e,r,!0,o)};u.prototype.writeFloatBE=function(e,r,o){return ir(this,e,r,!1,o)};function ar(t,e,r,o,i){return e=+e,r=r>>>0,i||nr(t,e,r,8,17976931348623157e292,-17976931348623157e292),X.write(t,e,r,o,52,8),r+8}u.prototype.writeDoubleLE=function(e,r,o){return ar(this,e,r,!0,o)};u.prototype.writeDoubleBE=function(e,r,o){return ar(this,e,r,!1,o)};u.prototype.copy=function(e,r,o,i){if(!u.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!i&&i!==0&&(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<o&&(i=o),i===o||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-o&&(i=e.length-r+o);var a=i-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,o,i):Uint8Array.prototype.set.call(e,this.subarray(o,i),r),a};u.prototype.fill=function(e,r,o,i){if(typeof e=="string"){if(typeof r=="string"?(i=r,r=0,o=this.length):typeof o=="string"&&(i=o,o=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){var a=e.charCodeAt(0);(i==="utf8"&&a<128||i==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<o)throw new RangeError("Out of range index");if(o<=r)return this;r=r>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var m;if(typeof e=="number")for(m=r;m<o;++m)this[m]=e;else{var l=u.isBuffer(e)?e:u.from(e,i),d=l.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(m=0;m<o-r;++m)this[m+r]=l[m%d]}return this};var Tt=/[^+/0-9A-Za-z-_]/g;function bt(t){if(t=t.split("=")[0],t=t.trim().replace(Tt,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function Ne(t,e){e=e||1/0;for(var r,o=t.length,i=null,a=[],m=0;m<o;++m){if(r=t.charCodeAt(m),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(m+1===o){(e-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&a.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;a.push(r)}else if(r<2048){if((e-=2)<0)break;a.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;a.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return a}function vt(t){for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r)&255);return e}function Et(t,e){for(var r,o,i,a=[],m=0;m<t.length&&!((e-=2)<0);++m)r=t.charCodeAt(m),o=r>>8,i=r%256,a.push(i),a.push(o);return a}function sr(t){return Se.toByteArray(bt(t))}function fe(t,e,r,o){for(var i=0;i<o&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function S(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function De(t){return t!==t}var wt=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var o=r*16,i=0;i<16;++i)e[o+i]=t[r]+t[i];return e}()});var dr=ue((Jn,lr)=>{n();var T=lr.exports={},P,F;function Ue(){throw new Error("setTimeout has not been defined")}function Ve(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?P=setTimeout:P=Ue}catch(t){P=Ue}try{typeof clearTimeout=="function"?F=clearTimeout:F=Ve}catch(t){F=Ve}})();function pr(t){if(P===setTimeout)return setTimeout(t,0);if((P===Ue||!P)&&setTimeout)return P=setTimeout,setTimeout(t,0);try{return P(t,0)}catch(e){try{return P.call(null,t,0)}catch(r){return P.call(this,t,0)}}}function Ct(t){if(F===clearTimeout)return clearTimeout(t);if((F===Ve||!F)&&clearTimeout)return F=clearTimeout,clearTimeout(t);try{return F(t)}catch(e){try{return F.call(null,t)}catch(r){return F.call(this,t)}}}var G=[],j=!1,$,ge=-1;function At(){!j||!$||(j=!1,$.length?G=$.concat(G):ge=-1,G.length&&mr())}function mr(){if(!j){var t=pr(At);j=!0;for(var e=G.length;e;){for($=G,G=[];++ge<e;)$&&$[ge].run();ge=-1,e=G.length}$=null,j=!1,Ct(t)}}T.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];G.push(new ur(t,e)),G.length===1&&!j&&pr(mr)};function ur(t,e){this.fun=t,this.array=e}ur.prototype.run=function(){this.fun.apply(null,this.array)};T.title="browser";T.browser=!0;T.env={};T.argv=[];T.version="";T.versions={};function B(){}T.on=B;T.addListener=B;T.once=B;T.off=B;T.removeListener=B;T.removeAllListeners=B;T.emit=B;T.prependListener=B;T.prependOnceListener=B;T.listeners=function(t){return[]};T.binding=function(t){throw new Error("process.binding is not supported")};T.cwd=function(){return"/"};T.chdir=function(t){throw new Error("process.chdir is not supported")};T.umask=function(){return 0}});var s,c,Qn,n=Kr(()=>{s=f(cr()),c=f(dr()),Qn=function(t){function e(){var o=this||self;return delete t.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object)});var Zn={};zr(Zn,{SFTAmount:()=>zn});module.exports=Zr(Zn);n();n();var I=f(require("react")),Vr=f(require("bignumber.js")),Ae=f(require("classnames"));n();var _t=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_t));var J={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};n();n();var We=f(require("react")),Wn=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var St=f(require("axios"));n();n();n();var kt=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var It=require("@terradharitri/sdk-dapp/constants/index");n();n();n();n();n();n();var Pt=f(require("axios"));n();n();var gr=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ft=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Nt=f(require("axios")),Gt=f(require("lodash/uniqBy"));n();var Bt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Dt=f(require("axios"));n();n();n();var Q=require("@terradharitri/sdk-dapp/types/tokens.types");n();n();n();n();var xr=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ut=f(require("axios"));n();n();var Vt=f(require("axios"));n();var xe=f(require("react")),fa=(0,xe.createContext)({});n();n();var H=f(require("react")),vn=require("@terradharitri/sdk-dapp/constants/index"),En=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),wn=f(require("bignumber.js")),Cn=require("formik");n();n();n();var Rt=require("bech32");n();n();n();var he=(t,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(t);n();n();n();var qt=require("@terradharitri/sdk-dapp/constants"),Ot=require("@terradharitri/sdk-dapp/utils/account/getAccount");n();n();var $t=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");n();var Wt=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var Kt=f(require("anchorme"));n();n();var hr=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ee=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),yr=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),U=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();var oe=f(require("react")),Yo=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),jo=require("formik");n();n();var Ar=require("@terradharitri/sdk-dapp/constants/index"),lo=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),fo=f(require("bignumber.js"));n();n();var Tr=require("@terradharitri/sdk-dapp/constants/index");n();var Zt=require("@terradharitri/sdk-dapp/constants/index");n();var br=require("@terradharitri/sdk-dapp/constants/index"),Xt=f(require("bignumber.js"));n();var Ht=require("@terradharitri/sdk-dapp/constants/index");n();var Yt=require("@terradharitri/sdk-dapp/constants/index");n();n();var ce=require("@terradharitri/sdk-core"),jt=require("@terradharitri/sdk-dapp/constants/index"),Jt=f(require("bignumber.js"));n();n();var eo=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");n();var ro=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var oo=f(require("bignumber.js"));n();var io=require("@terradharitri/sdk-dapp/constants/index"),ao=require("@terradharitri/sdk-dapp/utils/smartContracts"),so=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),co=f(require("bignumber.js"));n();var no=f(require("bignumber.js"));n();var te=require("@terradharitri/sdk-dapp/constants/index"),Cr=f(require("bignumber.js"));var vr,Er,wr,qe=(0,ee.formatAmount)({input:String((vr=te.GAS_PRICE)!=null?vr:1e9),decimals:(Er=te.DECIMALS)!=null?Er:18,showLastNonZeroDecimal:!0,digits:(wr=te.DIGITS)!=null?wr:4}),po=new Cr.default(qe).times(10).toString(10);n();var be=require("@terradharitri/sdk-dapp/constants/index"),mo=f(require("bignumber.js"));n();var uo=f(require("bignumber.js"));n();n();var kr=require("yup");n();var ve=require("@terradharitri/sdk-dapp/constants/ledger.constants"),_r=f(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Ee=require("yup"),go=(0,Ee.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:r}=this.parent;return!(r&&e&&e.length&&!r.ledgerDataActive)}),xo=(0,Ee.string)().test({name:"hashSign",test:function(e){let{ledger:r,isGuarded:o}=this.parent;if(r){let{ledgerWithHashSign:i,ledgerWithGuardians:a}=(0,_r.default)(r.version);if(e&&e.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${ve.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(o&&!a)return this.createError({message:`You need at least DharitrI app version ${ve.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),ho=[go,xo],yc=ho.reduce((t,e)=>t.concat(e),(0,Ee.string)());n();var yo=require("@terradharitri/sdk-dapp/constants/index"),To=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),bo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),vo=require("yup");n();var Ao=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),_o=f(require("bignumber.js")),Io=require("yup");n();var Eo=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),wo=f(require("bignumber.js")),Co=require("yup");n();var ko=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Lo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),So=f(require("bignumber.js")),Po=require("yup");n();var Fo=f(require("bignumber.js")),No=require("yup");n();var Go=require("@terradharitri/sdk-dapp/constants/index"),Bo=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Do=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Uo=f(require("bignumber.js")),Vo=require("yup");n();var Ro=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Mo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),qo=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Oo=f(require("bignumber.js")),$o=require("yup");n();var Wo=f(require("bignumber.js")),Ko=require("yup");n();var zo=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Zo=require("yup");n();var Ho=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Xo=require("yup");n();n();var $p=(0,oe.createContext)({});n();n();var V=f(require("react")),rn=require("formik"),tn=f(require("lodash/uniqBy"));n();n();var ne=f(require("react"));var Yp=(0,ne.createContext)({});n();n();var Lr=require("react"),Jo=require("@terradharitri/sdk-dapp/constants/index");var Qo=require("@terradharitri/sdk-dapp/types/enums.types");n();var _m=(0,V.createContext)({});n();n();var Br=require("@terradharitri/sdk-dapp/constants/index"),bn=require("formik");n();n();var Z=f(require("react")),Nr=require("@terradharitri/sdk-dapp/constants/index"),gn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),xn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),hn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),yn=f(require("bignumber.js")),Tn=require("formik");n();n();n();n();var on=f(require("bignumber.js"));n();var nn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),an=f(require("bignumber.js"));n();n();var Fr=require("react"),cn=require("@terradharitri/sdk-dapp/constants/index"),pn=require("@terradharitri/sdk-dapp/utils/smartContracts"),mn=f(require("bignumber.js")),un=require("formik");n();var Sr=require("react");n();n();var ln=require("@terradharitri/sdk-dapp/constants/index"),dn=f(require("bignumber.js"));var Pu=(0,Z.createContext)({});var sl=(0,H.createContext)({});n();n();var ae=f(require("react")),An=require("formik");var El=(0,ae.createContext)({});n();n();var se=f(require("react")),Nn=require("formik");n();n();n();var Dr=require("react"),kn=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Ln=f(require("lodash/uniqBy"));n();n();var _n=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),In=require("@terradharitri/sdk-dapp/utils");n();var Fn=require("react");n();var Sn=require("react"),Pn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var Jl=(0,se.createContext)({});n();n();var Ce=f(require("react")),On=require("formik");n();n();n();n();n();var Rn=require("react"),Mn=require("@terradharitri/sdk-dapp/utils");n();var Un=require("react"),Vn=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var Gn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Bn=f(require("axios"));n();var Dn=f(require("axios"));var Bd=(0,Ce.createContext)({});n();var pe=f(require("react"));var $n=(0,pe.createContext)({});function Ur(){return(0,pe.useContext)($n)}n();var Kn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Kn));var M={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"};var zn=t=>{let{className:e}=t,{formInfo:{readonly:r},amountInfo:o,tokensInfo:i}=Ur(),{amount:a,error:m,onFocus:l,onBlur:d,onChange:h,isInvalid:x,onMaxClicked:g,maxAmountAvailable:w,isMaxButtonVisible:v}=o,{nft:E}=i,_e=E!=null&&E.balance?new Vr.default(E.balance).isGreaterThan(0):!1,Rr=Ie=>{Ie.preventDefault(),g()};return I.default.createElement("div",{className:(0,Ae.default)(M.amount,e)},I.default.createElement("div",{className:M.label},I.default.createElement("label",{htmlFor:"amount",className:J.label},"Amount"),_e&&E&&I.default.createElement("div",{"data-value":`${w} ${E.identifier}`,className:(0,Ae.default)(M.balance,e)},I.default.createElement("span",null,"Available:")," ",I.default.createElement("span",{"data-testid":`available-${E.identifier}`,className:M.available},I.default.createElement("span",{className:M.amount},w)," ",E.ticker))),I.default.createElement("div",{className:M.wrapper},I.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:a,disabled:he("amount",r),onFocus:l,onBlur:d,onChange:h,autoComplete:"off",className:(0,Ae.default)(J.input,{[J.invalid]:x,[J.disabled]:he("amount",r)})}),v&&I.default.createElement("a",{href:"/","data-testid":"maxBtn",className:M.max,onClick:Rr,onMouseDown:Ie=>{Ie.preventDefault()}},"Max")),x&&I.default.createElement("div",{className:J.error,"data-testid":"amountError"},m))};0&&(module.exports={SFTAmount});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
