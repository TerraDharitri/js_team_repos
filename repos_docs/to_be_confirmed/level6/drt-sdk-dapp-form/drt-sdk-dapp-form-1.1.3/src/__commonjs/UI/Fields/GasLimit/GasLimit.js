"use strict";var $r=Object.create;var ue=Object.defineProperty;var Wr=Object.getOwnPropertyDescriptor;var Zr=Object.getOwnPropertyNames;var Kr=Object.getPrototypeOf,zr=Object.prototype.hasOwnProperty;var Hr=(t,e)=>()=>(t&&(e=t(t=0)),e);var le=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Xr=(t,e)=>{for(var r in e)ue(t,r,{get:e[r],enumerable:!0})},We=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Zr(e))!zr.call(t,i)&&i!==r&&ue(t,i,{get:()=>e[i],enumerable:!(o=Wr(e,i))||o.enumerable});return t};var f=(t,e,r)=>(r=t!=null?$r(Kr(t)):{},We(e||!t||!t.__esModule?ue(r,"default",{value:t,enumerable:!0}):r,t)),Yr=t=>We(ue({},"__esModule",{value:!0}),t);var ze=le(de=>{"use strict";n();de.byteLength=Qr;de.toByteArray=et;de.fromByteArray=ot;var L=[],A=[],jr=typeof Uint8Array!="undefined"?Uint8Array:Array,Ae="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(O=0,Ze=Ae.length;O<Ze;++O)L[O]=Ae[O],A[Ae.charCodeAt(O)]=O;var O,Ze;A["-".charCodeAt(0)]=62;A["_".charCodeAt(0)]=63;function Ke(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var o=r===e?0:4-r%4;return[r,o]}function Qr(t){var e=Ke(t),r=e[0],o=e[1];return(r+o)*3/4-o}function Jr(t,e,r){return(e+r)*3/4-r}function et(t){var e,r=Ke(t),o=r[0],i=r[1],c=new jr(Jr(t,o,i)),m=0,l=i>0?o-4:o,d;for(d=0;d<l;d+=4)e=A[t.charCodeAt(d)]<<18|A[t.charCodeAt(d+1)]<<12|A[t.charCodeAt(d+2)]<<6|A[t.charCodeAt(d+3)],c[m++]=e>>16&255,c[m++]=e>>8&255,c[m++]=e&255;return i===2&&(e=A[t.charCodeAt(d)]<<2|A[t.charCodeAt(d+1)]>>4,c[m++]=e&255),i===1&&(e=A[t.charCodeAt(d)]<<10|A[t.charCodeAt(d+1)]<<4|A[t.charCodeAt(d+2)]>>2,c[m++]=e>>8&255,c[m++]=e&255),c}function rt(t){return L[t>>18&63]+L[t>>12&63]+L[t>>6&63]+L[t&63]}function tt(t,e,r){for(var o,i=[],c=e;c<r;c+=3)o=(t[c]<<16&16711680)+(t[c+1]<<8&65280)+(t[c+2]&255),i.push(rt(o));return i.join("")}function ot(t){for(var e,r=t.length,o=r%3,i=[],c=16383,m=0,l=r-o;m<l;m+=c)i.push(tt(t,m,m+c>l?l:m+c));return o===1?(e=t[r-1],i.push(L[e>>2]+L[e<<4&63]+"==")):o===2&&(e=(t[r-2]<<8)+t[r-1],i.push(L[e>>10]+L[e>>4&63]+L[e<<2&63]+"=")),i.join("")}});var He=le(Ce=>{n();Ce.read=function(t,e,r,o,i){var c,m,l=i*8-o-1,d=(1<<l)-1,h=d>>1,y=-7,g=r?i-1:0,_=r?-1:1,v=t[e+g];for(g+=_,c=v&(1<<-y)-1,v>>=-y,y+=l;y>0;c=c*256+t[e+g],g+=_,y-=8);for(m=c&(1<<-y)-1,c>>=-y,y+=o;y>0;m=m*256+t[e+g],g+=_,y-=8);if(c===0)c=1-h;else{if(c===d)return m?NaN:(v?-1:1)*(1/0);m=m+Math.pow(2,o),c=c-h}return(v?-1:1)*m*Math.pow(2,c-o)};Ce.write=function(t,e,r,o,i,c){var m,l,d,h=c*8-i-1,y=(1<<h)-1,g=y>>1,_=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=o?0:c-1,I=o?1:-1,q=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,m=y):(m=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-m))<1&&(m--,d*=2),m+g>=1?e+=_/d:e+=_*Math.pow(2,1-g),e*d>=2&&(m++,d/=2),m+g>=y?(l=0,m=y):m+g>=1?(l=(e*d-1)*Math.pow(2,i),m=m+g):(l=e*Math.pow(2,g-1)*Math.pow(2,i),m=0));i>=8;t[r+v]=l&255,v+=I,l/=256,i-=8);for(m=m<<i|l,h+=i;h>0;t[r+v]=m&255,v+=I,m/=256,h-=8);t[r+v-I]|=q*128}});var sr=le(j=>{"use strict";n();var Ie=ze(),Y=He(),Xe=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;j.Buffer=u;j.SlowBuffer=pt;j.INSPECT_MAX_BYTES=50;var fe=2147483647;j.kMaxLength=fe;u.TYPED_ARRAY_SUPPORT=nt();!u.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function nt(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(r){return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.buffer}});Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.byteOffset}});function G(t){if(t>fe)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,u.prototype),e}function u(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Fe(t)}return Qe(t,e,r)}u.poolSize=8192;function Qe(t,e,r){if(typeof t=="string")return at(t,e);if(ArrayBuffer.isView(t))return st(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(k(t,ArrayBuffer)||t&&k(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(k(t,SharedArrayBuffer)||t&&k(t.buffer,SharedArrayBuffer)))return ke(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=t.valueOf&&t.valueOf();if(o!=null&&o!==t)return u.from(o,e,r);var i=ct(t);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return u.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}u.from=function(t,e,r){return Qe(t,e,r)};Object.setPrototypeOf(u.prototype,Uint8Array.prototype);Object.setPrototypeOf(u,Uint8Array);function Je(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function it(t,e,r){return Je(t),t<=0?G(t):e!==void 0?typeof r=="string"?G(t).fill(e,r):G(t).fill(e):G(t)}u.alloc=function(t,e,r){return it(t,e,r)};function Fe(t){return Je(t),G(t<0?0:Ge(t)|0)}u.allocUnsafe=function(t){return Fe(t)};u.allocUnsafeSlow=function(t){return Fe(t)};function at(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=er(t,e)|0,o=G(r),i=o.write(t,e);return i!==r&&(o=o.slice(0,i)),o}function Le(t){for(var e=t.length<0?0:Ge(t.length)|0,r=G(e),o=0;o<e;o+=1)r[o]=t[o]&255;return r}function st(t){if(k(t,Uint8Array)){var e=new Uint8Array(t);return ke(e.buffer,e.byteOffset,e.byteLength)}return Le(t)}function ke(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return e===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,e):o=new Uint8Array(t,e,r),Object.setPrototypeOf(o,u.prototype),o}function ct(t){if(u.isBuffer(t)){var e=Ge(t.length)|0,r=G(e);return r.length===0||t.copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||Ne(t.length)?G(0):Le(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Le(t.data)}function Ge(t){if(t>=fe)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+fe.toString(16)+" bytes");return t|0}function pt(t){return+t!=t&&(t=0),u.alloc(+t)}u.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==u.prototype};u.compare=function(e,r){if(k(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),k(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(e)||!u.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var o=e.length,i=r.length,c=0,m=Math.min(o,i);c<m;++c)if(e[c]!==r[c]){o=e[c],i=r[c];break}return o<i?-1:i<o?1:0};u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};u.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return u.alloc(0);var o;if(r===void 0)for(r=0,o=0;o<e.length;++o)r+=e[o].length;var i=u.allocUnsafe(r),c=0;for(o=0;o<e.length;++o){var m=e[o];if(k(m,Uint8Array))c+m.length>i.length?u.from(m).copy(i,c):Uint8Array.prototype.set.call(i,m,c);else if(u.isBuffer(m))m.copy(i,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=m.length}return i};function er(t,e){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||k(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Se(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return ar(t).length;default:if(i)return o?-1:Se(t).length;e=(""+e).toLowerCase(),i=!0}}u.byteLength=er;function mt(t,e,r){var o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return bt(this,e,r);case"utf8":case"utf-8":return tr(this,e,r);case"ascii":return xt(this,e,r);case"latin1":case"binary":return Tt(this,e,r);case"base64":return ht(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return vt(this,e,r);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}u.prototype._isBuffer=!0;function $(t,e,r){var o=t[e];t[e]=t[r],t[r]=o}u.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)$(this,r,r+1);return this};u.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)$(this,r,r+3),$(this,r+1,r+2);return this};u.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)$(this,r,r+7),$(this,r+1,r+6),$(this,r+2,r+5),$(this,r+3,r+4);return this};u.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?tr(this,0,e):mt.apply(this,arguments)};u.prototype.toLocaleString=u.prototype.toString;u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:u.compare(this,e)===0};u.prototype.inspect=function(){var e="",r=j.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"};Xe&&(u.prototype[Xe]=u.prototype.inspect);u.prototype.compare=function(e,r,o,i,c){if(k(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),o===void 0&&(o=e?e.length:0),i===void 0&&(i=0),c===void 0&&(c=this.length),r<0||o>e.length||i<0||c>this.length)throw new RangeError("out of range index");if(i>=c&&r>=o)return 0;if(i>=c)return-1;if(r>=o)return 1;if(r>>>=0,o>>>=0,i>>>=0,c>>>=0,this===e)return 0;for(var m=c-i,l=o-r,d=Math.min(m,l),h=this.slice(i,c),y=e.slice(r,o),g=0;g<d;++g)if(h[g]!==y[g]){m=h[g],l=y[g];break}return m<l?-1:l<m?1:0};function rr(t,e,r,o,i){if(t.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Ne(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=u.from(e,o)),u.isBuffer(e))return e.length===0?-1:Ye(t,e,r,o,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):Ye(t,[e],r,o,i);throw new TypeError("val must be string, number or Buffer")}function Ye(t,e,r,o,i){var c=1,m=t.length,l=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(t.length<2||e.length<2)return-1;c=2,m/=2,l/=2,r/=2}function d(v,I){return c===1?v[I]:v.readUInt16BE(I*c)}var h;if(i){var y=-1;for(h=r;h<m;h++)if(d(t,h)===d(e,y===-1?0:h-y)){if(y===-1&&(y=h),h-y+1===l)return y*c}else y!==-1&&(h-=h-y),y=-1}else for(r+l>m&&(r=m-l),h=r;h>=0;h--){for(var g=!0,_=0;_<l;_++)if(d(t,h+_)!==d(e,_)){g=!1;break}if(g)return h}return-1}u.prototype.includes=function(e,r,o){return this.indexOf(e,r,o)!==-1};u.prototype.indexOf=function(e,r,o){return rr(this,e,r,o,!0)};u.prototype.lastIndexOf=function(e,r,o){return rr(this,e,r,o,!1)};function ut(t,e,r,o){r=Number(r)||0;var i=t.length-r;o?(o=Number(o),o>i&&(o=i)):o=i;var c=e.length;o>c/2&&(o=c/2);for(var m=0;m<o;++m){var l=parseInt(e.substr(m*2,2),16);if(Ne(l))return m;t[r+m]=l}return m}function lt(t,e,r,o){return ge(Se(e,t.length-r),t,r,o)}function dt(t,e,r,o){return ge(wt(e),t,r,o)}function ft(t,e,r,o){return ge(ar(e),t,r,o)}function gt(t,e,r,o){return ge(At(e,t.length-r),t,r,o)}u.prototype.write=function(e,r,o,i){if(r===void 0)i="utf8",o=this.length,r=0;else if(o===void 0&&typeof r=="string")i=r,o=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(o)?(o=o>>>0,i===void 0&&(i="utf8")):(i=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-r;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var m=!1;;)switch(i){case"hex":return ut(this,e,r,o);case"utf8":case"utf-8":return lt(this,e,r,o);case"ascii":case"latin1":case"binary":return dt(this,e,r,o);case"base64":return ft(this,e,r,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gt(this,e,r,o);default:if(m)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),m=!0}};u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ht(t,e,r){return e===0&&r===t.length?Ie.fromByteArray(t):Ie.fromByteArray(t.slice(e,r))}function tr(t,e,r){r=Math.min(t.length,r);for(var o=[],i=e;i<r;){var c=t[i],m=null,l=c>239?4:c>223?3:c>191?2:1;if(i+l<=r){var d,h,y,g;switch(l){case 1:c<128&&(m=c);break;case 2:d=t[i+1],(d&192)===128&&(g=(c&31)<<6|d&63,g>127&&(m=g));break;case 3:d=t[i+1],h=t[i+2],(d&192)===128&&(h&192)===128&&(g=(c&15)<<12|(d&63)<<6|h&63,g>2047&&(g<55296||g>57343)&&(m=g));break;case 4:d=t[i+1],h=t[i+2],y=t[i+3],(d&192)===128&&(h&192)===128&&(y&192)===128&&(g=(c&15)<<18|(d&63)<<12|(h&63)<<6|y&63,g>65535&&g<1114112&&(m=g))}}m===null?(m=65533,l=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),i+=l}return yt(o)}var je=4096;function yt(t){var e=t.length;if(e<=je)return String.fromCharCode.apply(String,t);for(var r="",o=0;o<e;)r+=String.fromCharCode.apply(String,t.slice(o,o+=je));return r}function xt(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]&127);return o}function Tt(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]);return o}function bt(t,e,r){var o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);for(var i="",c=e;c<r;++c)i+=Ct[t[c]];return i}function vt(t,e,r){for(var o=t.slice(e,r),i="",c=0;c<o.length-1;c+=2)i+=String.fromCharCode(o[c]+o[c+1]*256);return i}u.prototype.slice=function(e,r){var o=this.length;e=~~e,r=r===void 0?o:~~r,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),r<0?(r+=o,r<0&&(r=0)):r>o&&(r=o),r<e&&(r=e);var i=this.subarray(e,r);return Object.setPrototypeOf(i,u.prototype),i};function b(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=this[e],c=1,m=0;++m<r&&(c*=256);)i+=this[e+m]*c;return i};u.prototype.readUintBE=u.prototype.readUIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=this[e+--r],c=1;r>0&&(c*=256);)i+=this[e+--r]*c;return i};u.prototype.readUint8=u.prototype.readUInt8=function(e,r){return e=e>>>0,r||b(e,1,this.length),this[e]};u.prototype.readUint16LE=u.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||b(e,2,this.length),this[e]|this[e+1]<<8};u.prototype.readUint16BE=u.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||b(e,2,this.length),this[e]<<8|this[e+1]};u.prototype.readUint32LE=u.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};u.prototype.readUint32BE=u.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||b(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};u.prototype.readIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=this[e],c=1,m=0;++m<r&&(c*=256);)i+=this[e+m]*c;return c*=128,i>=c&&(i-=Math.pow(2,8*r)),i};u.prototype.readIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=r,c=1,m=this[e+--i];i>0&&(c*=256);)m+=this[e+--i]*c;return c*=128,m>=c&&(m-=Math.pow(2,8*r)),m};u.prototype.readInt8=function(e,r){return e=e>>>0,r||b(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};u.prototype.readInt16LE=function(e,r){e=e>>>0,r||b(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o};u.prototype.readInt16BE=function(e,r){e=e>>>0,r||b(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o};u.prototype.readInt32LE=function(e,r){return e=e>>>0,r||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};u.prototype.readInt32BE=function(e,r){return e=e>>>0,r||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};u.prototype.readFloatLE=function(e,r){return e=e>>>0,r||b(e,4,this.length),Y.read(this,e,!0,23,4)};u.prototype.readFloatBE=function(e,r){return e=e>>>0,r||b(e,4,this.length),Y.read(this,e,!1,23,4)};u.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||b(e,8,this.length),Y.read(this,e,!0,52,8)};u.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||b(e,8,this.length),Y.read(this,e,!1,52,8)};function E(t,e,r,o,i,c){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<c)throw new RangeError('"value" argument is out of bounds');if(r+o>t.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var c=Math.pow(2,8*o)-1;E(this,e,r,o,c,0)}var m=1,l=0;for(this[r]=e&255;++l<o&&(m*=256);)this[r+l]=e/m&255;return r+o};u.prototype.writeUintBE=u.prototype.writeUIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var c=Math.pow(2,8*o)-1;E(this,e,r,o,c,0)}var m=o-1,l=1;for(this[r+m]=e&255;--m>=0&&(l*=256);)this[r+m]=e/l&255;return r+o};u.prototype.writeUint8=u.prototype.writeUInt8=function(e,r,o){return e=+e,r=r>>>0,o||E(this,e,r,1,255,0),this[r]=e&255,r+1};u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||E(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||E(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2};u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||E(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4};u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||E(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};u.prototype.writeIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var c=Math.pow(2,8*o-1);E(this,e,r,o,c-1,-c)}var m=0,l=1,d=0;for(this[r]=e&255;++m<o&&(l*=256);)e<0&&d===0&&this[r+m-1]!==0&&(d=1),this[r+m]=(e/l>>0)-d&255;return r+o};u.prototype.writeIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var c=Math.pow(2,8*o-1);E(this,e,r,o,c-1,-c)}var m=o-1,l=1,d=0;for(this[r+m]=e&255;--m>=0&&(l*=256);)e<0&&d===0&&this[r+m+1]!==0&&(d=1),this[r+m]=(e/l>>0)-d&255;return r+o};u.prototype.writeInt8=function(e,r,o){return e=+e,r=r>>>0,o||E(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1};u.prototype.writeInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||E(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};u.prototype.writeInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||E(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};u.prototype.writeInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||E(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};u.prototype.writeInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||E(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function or(t,e,r,o,i,c){if(r+o>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function nr(t,e,r,o,i){return e=+e,r=r>>>0,i||or(t,e,r,4,34028234663852886e22,-34028234663852886e22),Y.write(t,e,r,o,23,4),r+4}u.prototype.writeFloatLE=function(e,r,o){return nr(this,e,r,!0,o)};u.prototype.writeFloatBE=function(e,r,o){return nr(this,e,r,!1,o)};function ir(t,e,r,o,i){return e=+e,r=r>>>0,i||or(t,e,r,8,17976931348623157e292,-17976931348623157e292),Y.write(t,e,r,o,52,8),r+8}u.prototype.writeDoubleLE=function(e,r,o){return ir(this,e,r,!0,o)};u.prototype.writeDoubleBE=function(e,r,o){return ir(this,e,r,!1,o)};u.prototype.copy=function(e,r,o,i){if(!u.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!i&&i!==0&&(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<o&&(i=o),i===o||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-o&&(i=e.length-r+o);var c=i-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,o,i):Uint8Array.prototype.set.call(e,this.subarray(o,i),r),c};u.prototype.fill=function(e,r,o,i){if(typeof e=="string"){if(typeof r=="string"?(i=r,r=0,o=this.length):typeof o=="string"&&(i=o,o=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){var c=e.charCodeAt(0);(i==="utf8"&&c<128||i==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<o)throw new RangeError("Out of range index");if(o<=r)return this;r=r>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var m;if(typeof e=="number")for(m=r;m<o;++m)this[m]=e;else{var l=u.isBuffer(e)?e:u.from(e,i),d=l.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(m=0;m<o-r;++m)this[m+r]=l[m%d]}return this};var Et=/[^+/0-9A-Za-z-_]/g;function _t(t){if(t=t.split("=")[0],t=t.trim().replace(Et,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function Se(t,e){e=e||1/0;for(var r,o=t.length,i=null,c=[],m=0;m<o;++m){if(r=t.charCodeAt(m),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&c.push(239,191,189);continue}else if(m+1===o){(e-=3)>-1&&c.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&c.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&c.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;c.push(r)}else if(r<2048){if((e-=2)<0)break;c.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;c.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;c.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return c}function wt(t){for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r)&255);return e}function At(t,e){for(var r,o,i,c=[],m=0;m<t.length&&!((e-=2)<0);++m)r=t.charCodeAt(m),o=r>>8,i=r%256,c.push(i),c.push(o);return c}function ar(t){return Ie.toByteArray(_t(t))}function ge(t,e,r,o){for(var i=0;i<o&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function k(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Ne(t){return t!==t}var Ct=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var o=r*16,i=0;i<16;++i)e[o+i]=t[r]+t[i];return e}()});var lr=le((ni,ur)=>{n();var x=ur.exports={},S,F;function Pe(){throw new Error("setTimeout has not been defined")}function Be(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?S=setTimeout:S=Pe}catch(t){S=Pe}try{typeof clearTimeout=="function"?F=clearTimeout:F=Be}catch(t){F=Be}})();function cr(t){if(S===setTimeout)return setTimeout(t,0);if((S===Pe||!S)&&setTimeout)return S=setTimeout,setTimeout(t,0);try{return S(t,0)}catch(e){try{return S.call(null,t,0)}catch(r){return S.call(this,t,0)}}}function It(t){if(F===clearTimeout)return clearTimeout(t);if((F===Be||!F)&&clearTimeout)return F=clearTimeout,clearTimeout(t);try{return F(t)}catch(e){try{return F.call(null,t)}catch(r){return F.call(this,t)}}}var N=[],Q=!1,W,he=-1;function Lt(){!Q||!W||(Q=!1,W.length?N=W.concat(N):he=-1,N.length&&pr())}function pr(){if(!Q){var t=cr(Lt);Q=!0;for(var e=N.length;e;){for(W=N,N=[];++he<e;)W&&W[he].run();he=-1,e=N.length}W=null,Q=!1,It(t)}}x.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];N.push(new mr(t,e)),N.length===1&&!Q&&cr(pr)};function mr(t,e){this.fun=t,this.array=e}mr.prototype.run=function(){this.fun.apply(null,this.array)};x.title="browser";x.browser=!0;x.env={};x.argv=[];x.version="";x.versions={};function P(){}x.on=P;x.addListener=P;x.once=P;x.off=P;x.removeListener=P;x.removeAllListeners=P;x.emit=P;x.prependListener=P;x.prependOnceListener=P;x.listeners=function(t){return[]};x.binding=function(t){throw new Error("process.binding is not supported")};x.cwd=function(){return"/"};x.chdir=function(t){throw new Error("process.chdir is not supported")};x.umask=function(){return 0}});var a,s,ii,n=Hr(()=>{a=f(sr()),s=f(lr()),ii=function(t){function e(){var o=this||self;return delete t.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object)});var Qn={};Xr(Qn,{GasLimit:()=>jn});module.exports=Yr(Qn);n();var V=f(require("react")),Rr=require("@fortawesome/free-solid-svg-icons"),Mr=require("@fortawesome/react-fontawesome"),qr=f(require("bignumber.js")),Oe=f(require("classnames")),Or=require("react-number-format");n();var kt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kt));var J={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};n();n();var me=f(require("react"));n();var ye=f(require("react")),mi=(0,ye.createContext)({});n();n();var X=f(require("react")),wn=require("@terradharitri/sdk-dapp/constants/index"),An=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Cn=f(require("bignumber.js")),In=require("formik");n();n();n();var St=require("bech32");n();n();n();var De=(t,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(t);n();n();var ee=require("@terradharitri/sdk-dapp/types/tokens.types");n();n();var Gt=require("@terradharitri/sdk-dapp/constants"),Nt=require("@terradharitri/sdk-dapp/utils/account/getAccount");n();n();var Pt=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");n();var Bt=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var Dt=f(require("anchorme"));n();n();var dr=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),re=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),fr=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),B=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();n();n();n();n();n();var ne=f(require("react")),Zo=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ko=require("formik");n();n();var vr=require("@terradharitri/sdk-dapp/constants/index"),so=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),co=f(require("bignumber.js"));n();n();var gr=require("@terradharitri/sdk-dapp/constants/index");n();var Vt=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var hr=require("@terradharitri/sdk-dapp/constants/index"),Mt=f(require("bignumber.js"));n();var Rt=require("@terradharitri/sdk-dapp/constants/index");n();var qt=require("@terradharitri/sdk-dapp/constants/index");n();n();var pe=require("@terradharitri/sdk-core"),Ot=require("@terradharitri/sdk-dapp/constants/index"),$t=f(require("bignumber.js"));n();n();var Zt=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");n();var Kt=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var Ht=f(require("bignumber.js"));n();var eo=require("@terradharitri/sdk-dapp/constants/index"),ro=require("@terradharitri/sdk-dapp/utils/smartContracts"),to=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),oo=f(require("bignumber.js"));n();var Jt=f(require("bignumber.js"));n();n();var Qt=f(require("axios"));n();n();n();var jt=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var Yt=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var oe=require("@terradharitri/sdk-dapp/constants/index"),br=f(require("bignumber.js"));var yr,xr,Tr,Re=(0,re.formatAmount)({input:String((yr=oe.GAS_PRICE)!=null?yr:1e9),decimals:(xr=oe.DECIMALS)!=null?xr:18,showLastNonZeroDecimal:!0,digits:(Tr=oe.DIGITS)!=null?Tr:4}),no=new br.default(Re).times(10).toString(10);n();var be=require("@terradharitri/sdk-dapp/constants/index"),io=f(require("bignumber.js"));n();var ao=f(require("bignumber.js"));n();n();var wr=require("yup");n();var ve=require("@terradharitri/sdk-dapp/constants/ledger.constants"),Er=f(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Ee=require("yup"),po=(0,Ee.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:r}=this.parent;return!(r&&e&&e.length&&!r.ledgerDataActive)}),mo=(0,Ee.string)().test({name:"hashSign",test:function(e){let{ledger:r,isGuarded:o}=this.parent;if(r){let{ledgerWithHashSign:i,ledgerWithGuardians:c}=(0,Er.default)(r.version);if(e&&e.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${ve.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(o&&!c)return this.createError({message:`You need at least DharitrI app version ${ve.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),uo=[po,mo],Hs=uo.reduce((t,e)=>t.concat(e),(0,Ee.string)());n();var lo=require("@terradharitri/sdk-dapp/constants/index"),fo=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),go=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ho=require("yup");n();var bo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),vo=f(require("bignumber.js")),Eo=require("yup");n();var yo=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),xo=f(require("bignumber.js")),To=require("yup");n();var _o=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),wo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ao=f(require("bignumber.js")),Co=require("yup");n();var Io=f(require("bignumber.js")),Lo=require("yup");n();var ko=require("@terradharitri/sdk-dapp/constants/index"),So=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Fo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Go=f(require("bignumber.js")),No=require("yup");n();var Po=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Bo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Do=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Uo=f(require("bignumber.js")),Vo=require("yup");n();var Ro=f(require("bignumber.js")),Mo=require("yup");n();var qo=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Oo=require("yup");n();var $o=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Wo=require("yup");n();n();var Tp=(0,ne.createContext)({});n();n();var D=f(require("react")),nn=require("formik"),an=f(require("lodash/uniqBy"));n();n();n();var zo=f(require("axios"));n();n();var Ho=f(require("axios"));n();n();var Ar=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Xo=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Yo=f(require("axios")),jo=f(require("lodash/uniqBy"));n();var Qo=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Jo=f(require("axios"));n();var Cr=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),en=f(require("axios"));n();n();var ie=f(require("react"));var om=(0,ie.createContext)({});n();n();var Ir=require("react"),rn=require("@terradharitri/sdk-dapp/constants/index");var tn=require("@terradharitri/sdk-dapp/types/enums.types");n();var Nm=(0,D.createContext)({});n();n();var Nr=require("@terradharitri/sdk-dapp/constants/index"),_n=require("formik");n();n();var H=f(require("react")),Fr=require("@terradharitri/sdk-dapp/constants/index"),xn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Tn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),bn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),vn=f(require("bignumber.js")),En=require("formik");n();n();n();n();var sn=f(require("bignumber.js"));n();var cn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),pn=f(require("bignumber.js"));n();n();var Sr=require("react"),un=require("@terradharitri/sdk-dapp/constants/index"),ln=require("@terradharitri/sdk-dapp/utils/smartContracts"),dn=f(require("bignumber.js")),fn=require("formik");n();var Lr=require("react");n();n();var gn=require("@terradharitri/sdk-dapp/constants/index"),hn=f(require("bignumber.js"));var Vu=(0,H.createContext)({});var fl=(0,X.createContext)({});n();n();var se=f(require("react")),Ln=require("formik");var kl=(0,se.createContext)({});n();n();var ce=f(require("react")),Dn=require("formik");n();n();n();var Pr=require("react"),Fn=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Gn=f(require("lodash/uniqBy"));n();n();var kn=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Sn=require("@terradharitri/sdk-dapp/utils");n();var Bn=require("react");n();var Nn=require("react"),Pn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var id=(0,ce.createContext)({});n();n();var we=f(require("react")),Zn=require("formik");n();n();n();n();n();var On=require("react"),$n=require("@terradharitri/sdk-dapp/utils");n();var Mn=require("react"),qn=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var Un=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Vn=f(require("axios"));n();var Rn=f(require("axios"));var Od=(0,we.createContext)({});var Kn=(0,me.createContext)({});function Br(){return(0,me.useContext)(Kn)}n();n();var zn=require("@terradharitri/sdk-dapp/constants/index"),Hn=require("@terradharitri/sdk-dapp/utils/validation"),Xn=f(require("bignumber.js"));n();n();var Dr=require("react");n();var Ur=f(require("bignumber.js")),Vr=t=>{let[e,r]=t.split(""),o=new Ur.default(e).isZero();return Boolean(o&&r&&!(r==="."))};n();var Yn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yn));var U={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"};var jn=()=>{let{formInfo:t,gasInfo:e}=Br(),{readonly:r}=t,{defaultGasLimit:o,onResetGasLimit:i,onChangeGasLimit:c,onBlurGasLimit:m,gasLimit:l,gasLimitError:d,isGasLimitInvalid:h}=e,y=q=>{q.preventDefault(),i()},g=({value:q,floatValue:$e})=>(!$e||!(0,qr.default)($e).isNaN())&&!Vr(q),_=q=>{c(q.value,!0)},v=l!==o&&!r,I=De("gasLimit",r);return V.default.createElement("div",{className:U.gas},V.default.createElement("label",{className:J.label,htmlFor:"gasLimit"},"Gas Limit"),V.default.createElement("div",{className:U.wrapper},V.default.createElement(Or.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:I,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:m,onValueChange:_,required:!0,isAllowed:g,thousandSeparator:",",thousandsGroupStyle:"thousand",value:l,valueIsNumericString:!0,allowNegative:!1,className:(0,Oe.default)(J.input,U.input,{[J.disabled]:I,[J.invalid]:h,[U.spaced]:v})}),v&&V.default.createElement("div",{className:U.actions},V.default.createElement("div",{onClick:y,"data-testid":"gasLimitResetBtn",className:(0,Oe.default)(U.action,{[U.disabled]:I})},V.default.createElement(Mr.FontAwesomeIcon,{icon:Rr.faUndo,className:U.icon}))),h&&V.default.createElement("div",{className:J.error,"data-testid":`${"gasLimit"}Error`},d)))};0&&(module.exports={GasLimit});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=GasLimit.js.map
