"use strict";var ft=Object.create;var ge=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var yt=Object.getOwnPropertyNames,or=Object.getOwnPropertySymbols,ht=Object.getPrototypeOf,ir=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable;var nr=(t,e,r)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,k=(t,e)=>{for(var r in e||(e={}))ir.call(e,r)&&nr(t,r,e[r]);if(or)for(var r of or(e))xt.call(e,r)&&nr(t,r,e[r]);return t};var Tt=(t,e)=>()=>(t&&(e=t(t=0)),e);var ve=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),bt=(t,e)=>{for(var r in e)ge(t,r,{get:e[r],enumerable:!0})},ar=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of yt(e))!ir.call(t,i)&&i!==r&&ge(t,i,{get:()=>e[i],enumerable:!(o=gt(e,i))||o.enumerable});return t};var u=(t,e,r)=>(r=t!=null?ft(ht(t)):{},ar(e||!t||!t.__esModule?ge(r,"default",{value:t,enumerable:!0}):r,t)),vt=t=>ar(ge({},"__esModule",{value:!0}),t);var pr=ve(_e=>{"use strict";n();_e.byteLength=Et;_e.toByteArray=Ct;_e.fromByteArray=Lt;var F=[],S=[],_t=typeof Uint8Array!="undefined"?Uint8Array:Array,De="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(H=0,sr=De.length;H<sr;++H)F[H]=De[H],S[De.charCodeAt(H)]=H;var H,sr;S["-".charCodeAt(0)]=62;S["_".charCodeAt(0)]=63;function cr(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var o=r===e?0:4-r%4;return[r,o]}function Et(t){var e=cr(t),r=e[0],o=e[1];return(r+o)*3/4-o}function wt(t,e,r){return(e+r)*3/4-r}function Ct(t){var e,r=cr(t),o=r[0],i=r[1],p=new _t(wt(t,o,i)),m=0,d=i>0?o-4:o,f;for(f=0;f<d;f+=4)e=S[t.charCodeAt(f)]<<18|S[t.charCodeAt(f+1)]<<12|S[t.charCodeAt(f+2)]<<6|S[t.charCodeAt(f+3)],p[m++]=e>>16&255,p[m++]=e>>8&255,p[m++]=e&255;return i===2&&(e=S[t.charCodeAt(f)]<<2|S[t.charCodeAt(f+1)]>>4,p[m++]=e&255),i===1&&(e=S[t.charCodeAt(f)]<<10|S[t.charCodeAt(f+1)]<<4|S[t.charCodeAt(f+2)]>>2,p[m++]=e>>8&255,p[m++]=e&255),p}function At(t){return F[t>>18&63]+F[t>>12&63]+F[t>>6&63]+F[t&63]}function It(t,e,r){for(var o,i=[],p=e;p<r;p+=3)o=(t[p]<<16&16711680)+(t[p+1]<<8&65280)+(t[p+2]&255),i.push(At(o));return i.join("")}function Lt(t){for(var e,r=t.length,o=r%3,i=[],p=16383,m=0,d=r-o;m<d;m+=p)i.push(It(t,m,m+p>d?d:m+p));return o===1?(e=t[r-1],i.push(F[e>>2]+F[e<<4&63]+"==")):o===2&&(e=(t[r-2]<<8)+t[r-1],i.push(F[e>>10]+F[e>>4&63]+F[e<<2&63]+"=")),i.join("")}});var mr=ve(Ue=>{n();Ue.read=function(t,e,r,o,i){var p,m,d=i*8-o-1,f=(1<<d)-1,y=f>>1,h=-7,g=r?i-1:0,v=r?-1:1,b=t[e+g];for(g+=v,p=b&(1<<-h)-1,b>>=-h,h+=d;h>0;p=p*256+t[e+g],g+=v,h-=8);for(m=p&(1<<-h)-1,p>>=-h,h+=o;h>0;m=m*256+t[e+g],g+=v,h-=8);if(p===0)p=1-y;else{if(p===f)return m?NaN:(b?-1:1)*(1/0);m=m+Math.pow(2,o),p=p-y}return(b?-1:1)*m*Math.pow(2,p-o)};Ue.write=function(t,e,r,o,i,p){var m,d,f,y=p*8-i-1,h=(1<<y)-1,g=h>>1,v=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=o?0:p-1,A=o?1:-1,U=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(d=isNaN(e)?1:0,m=h):(m=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-m))<1&&(m--,f*=2),m+g>=1?e+=v/f:e+=v*Math.pow(2,1-g),e*f>=2&&(m++,f/=2),m+g>=h?(d=0,m=h):m+g>=1?(d=(e*f-1)*Math.pow(2,i),m=m+g):(d=e*Math.pow(2,g-1)*Math.pow(2,i),m=0));i>=8;t[r+b]=d&255,b+=A,d/=256,i-=8);for(m=m<<i|d,y+=i;y>0;t[r+b]=m&255,b+=A,m/=256,y-=8);t[r+b-A]|=U*128}});var Er=ve(ie=>{"use strict";n();var Ve=pr(),ne=mr(),lr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ie.Buffer=l;ie.SlowBuffer=Gt;ie.INSPECT_MAX_BYTES=50;var Ee=2147483647;ie.kMaxLength=Ee;l.TYPED_ARRAY_SUPPORT=kt();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function kt(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(r){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function V(t){if(t>Ee)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,l.prototype),e}function l(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Oe(t)}return fr(t,e,r)}l.poolSize=8192;function fr(t,e,r){if(typeof t=="string")return Pt(t,e);if(ArrayBuffer.isView(t))return Ft(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(N(t,ArrayBuffer)||t&&N(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(t,SharedArrayBuffer)||t&&N(t.buffer,SharedArrayBuffer)))return Me(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=t.valueOf&&t.valueOf();if(o!=null&&o!==t)return l.from(o,e,r);var i=Nt(t);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return l.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}l.from=function(t,e,r){return fr(t,e,r)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function gr(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function St(t,e,r){return gr(t),t<=0?V(t):e!==void 0?typeof r=="string"?V(t).fill(e,r):V(t).fill(e):V(t)}l.alloc=function(t,e,r){return St(t,e,r)};function Oe(t){return gr(t),V(t<0?0:$e(t)|0)}l.allocUnsafe=function(t){return Oe(t)};l.allocUnsafeSlow=function(t){return Oe(t)};function Pt(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!l.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=yr(t,e)|0,o=V(r),i=o.write(t,e);return i!==r&&(o=o.slice(0,i)),o}function Re(t){for(var e=t.length<0?0:$e(t.length)|0,r=V(e),o=0;o<e;o+=1)r[o]=t[o]&255;return r}function Ft(t){if(N(t,Uint8Array)){var e=new Uint8Array(t);return Me(e.buffer,e.byteOffset,e.byteLength)}return Re(t)}function Me(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return e===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,e):o=new Uint8Array(t,e,r),Object.setPrototypeOf(o,l.prototype),o}function Nt(t){if(l.isBuffer(t)){var e=$e(t.length)|0,r=V(e);return r.length===0||t.copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||Ze(t.length)?V(0):Re(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Re(t.data)}function $e(t){if(t>=Ee)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ee.toString(16)+" bytes");return t|0}function Gt(t){return+t!=t&&(t=0),l.alloc(+t)}l.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==l.prototype};l.compare=function(e,r){if(N(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),N(r,Uint8Array)&&(r=l.from(r,r.offset,r.byteLength)),!l.isBuffer(e)||!l.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var o=e.length,i=r.length,p=0,m=Math.min(o,i);p<m;++p)if(e[p]!==r[p]){o=e[p],i=r[p];break}return o<i?-1:i<o?1:0};l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return l.alloc(0);var o;if(r===void 0)for(r=0,o=0;o<e.length;++o)r+=e[o].length;var i=l.allocUnsafe(r),p=0;for(o=0;o<e.length;++o){var m=e[o];if(N(m,Uint8Array))p+m.length>i.length?l.from(m).copy(i,p):Uint8Array.prototype.set.call(i,m,p);else if(l.isBuffer(m))m.copy(i,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return i};function yr(t,e){if(l.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||N(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return qe(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return _r(t).length;default:if(i)return o?-1:qe(t).length;e=(""+e).toLowerCase(),i=!0}}l.byteLength=yr;function Bt(t,e,r){var o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return Wt(this,e,r);case"utf8":case"utf-8":return xr(this,e,r);case"ascii":return $t(this,e,r);case"latin1":case"binary":return Zt(this,e,r);case"base64":return qt(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Kt(this,e,r);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}l.prototype._isBuffer=!0;function X(t,e,r){var o=t[e];t[e]=t[r],t[r]=o}l.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)X(this,r,r+1);return this};l.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)X(this,r,r+3),X(this,r+1,r+2);return this};l.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)X(this,r,r+7),X(this,r+1,r+6),X(this,r+2,r+5),X(this,r+3,r+4);return this};l.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?xr(this,0,e):Bt.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:l.compare(this,e)===0};l.prototype.inspect=function(){var e="",r=ie.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"};lr&&(l.prototype[lr]=l.prototype.inspect);l.prototype.compare=function(e,r,o,i,p){if(N(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),o===void 0&&(o=e?e.length:0),i===void 0&&(i=0),p===void 0&&(p=this.length),r<0||o>e.length||i<0||p>this.length)throw new RangeError("out of range index");if(i>=p&&r>=o)return 0;if(i>=p)return-1;if(r>=o)return 1;if(r>>>=0,o>>>=0,i>>>=0,p>>>=0,this===e)return 0;for(var m=p-i,d=o-r,f=Math.min(m,d),y=this.slice(i,p),h=e.slice(r,o),g=0;g<f;++g)if(y[g]!==h[g]){m=y[g],d=h[g];break}return m<d?-1:d<m?1:0};function hr(t,e,r,o,i){if(t.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Ze(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=l.from(e,o)),l.isBuffer(e))return e.length===0?-1:ur(t,e,r,o,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):ur(t,[e],r,o,i);throw new TypeError("val must be string, number or Buffer")}function ur(t,e,r,o,i){var p=1,m=t.length,d=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(t.length<2||e.length<2)return-1;p=2,m/=2,d/=2,r/=2}function f(b,A){return p===1?b[A]:b.readUInt16BE(A*p)}var y;if(i){var h=-1;for(y=r;y<m;y++)if(f(t,y)===f(e,h===-1?0:y-h)){if(h===-1&&(h=y),y-h+1===d)return h*p}else h!==-1&&(y-=y-h),h=-1}else for(r+d>m&&(r=m-d),y=r;y>=0;y--){for(var g=!0,v=0;v<d;v++)if(f(t,y+v)!==f(e,v)){g=!1;break}if(g)return y}return-1}l.prototype.includes=function(e,r,o){return this.indexOf(e,r,o)!==-1};l.prototype.indexOf=function(e,r,o){return hr(this,e,r,o,!0)};l.prototype.lastIndexOf=function(e,r,o){return hr(this,e,r,o,!1)};function Dt(t,e,r,o){r=Number(r)||0;var i=t.length-r;o?(o=Number(o),o>i&&(o=i)):o=i;var p=e.length;o>p/2&&(o=p/2);for(var m=0;m<o;++m){var d=parseInt(e.substr(m*2,2),16);if(Ze(d))return m;t[r+m]=d}return m}function Ut(t,e,r,o){return we(qe(e,t.length-r),t,r,o)}function Vt(t,e,r,o){return we(Xt(e),t,r,o)}function Rt(t,e,r,o){return we(_r(e),t,r,o)}function Mt(t,e,r,o){return we(Yt(e,t.length-r),t,r,o)}l.prototype.write=function(e,r,o,i){if(r===void 0)i="utf8",o=this.length,r=0;else if(o===void 0&&typeof r=="string")i=r,o=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(o)?(o=o>>>0,i===void 0&&(i="utf8")):(i=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-r;if((o===void 0||o>p)&&(o=p),e.length>0&&(o<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var m=!1;;)switch(i){case"hex":return Dt(this,e,r,o);case"utf8":case"utf-8":return Ut(this,e,r,o);case"ascii":case"latin1":case"binary":return Vt(this,e,r,o);case"base64":return Rt(this,e,r,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Mt(this,e,r,o);default:if(m)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function qt(t,e,r){return e===0&&r===t.length?Ve.fromByteArray(t):Ve.fromByteArray(t.slice(e,r))}function xr(t,e,r){r=Math.min(t.length,r);for(var o=[],i=e;i<r;){var p=t[i],m=null,d=p>239?4:p>223?3:p>191?2:1;if(i+d<=r){var f,y,h,g;switch(d){case 1:p<128&&(m=p);break;case 2:f=t[i+1],(f&192)===128&&(g=(p&31)<<6|f&63,g>127&&(m=g));break;case 3:f=t[i+1],y=t[i+2],(f&192)===128&&(y&192)===128&&(g=(p&15)<<12|(f&63)<<6|y&63,g>2047&&(g<55296||g>57343)&&(m=g));break;case 4:f=t[i+1],y=t[i+2],h=t[i+3],(f&192)===128&&(y&192)===128&&(h&192)===128&&(g=(p&15)<<18|(f&63)<<12|(y&63)<<6|h&63,g>65535&&g<1114112&&(m=g))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),i+=d}return Ot(o)}var dr=4096;function Ot(t){var e=t.length;if(e<=dr)return String.fromCharCode.apply(String,t);for(var r="",o=0;o<e;)r+=String.fromCharCode.apply(String,t.slice(o,o+=dr));return r}function $t(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]&127);return o}function Zt(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]);return o}function Wt(t,e,r){var o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);for(var i="",p=e;p<r;++p)i+=jt[t[p]];return i}function Kt(t,e,r){for(var o=t.slice(e,r),i="",p=0;p<o.length-1;p+=2)i+=String.fromCharCode(o[p]+o[p+1]*256);return i}l.prototype.slice=function(e,r){var o=this.length;e=~~e,r=r===void 0?o:~~r,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),r<0?(r+=o,r<0&&(r=0)):r>o&&(r=o),r<e&&(r=e);var i=this.subarray(e,r);return Object.setPrototypeOf(i,l.prototype),i};function _(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||_(e,r,this.length);for(var i=this[e],p=1,m=0;++m<r&&(p*=256);)i+=this[e+m]*p;return i};l.prototype.readUintBE=l.prototype.readUIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||_(e,r,this.length);for(var i=this[e+--r],p=1;r>0&&(p*=256);)i+=this[e+--r]*p;return i};l.prototype.readUint8=l.prototype.readUInt8=function(e,r){return e=e>>>0,r||_(e,1,this.length),this[e]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||_(e,2,this.length),this[e]|this[e+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||_(e,2,this.length),this[e]<<8|this[e+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||_(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||_(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};l.prototype.readIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||_(e,r,this.length);for(var i=this[e],p=1,m=0;++m<r&&(p*=256);)i+=this[e+m]*p;return p*=128,i>=p&&(i-=Math.pow(2,8*r)),i};l.prototype.readIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||_(e,r,this.length);for(var i=r,p=1,m=this[e+--i];i>0&&(p*=256);)m+=this[e+--i]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*r)),m};l.prototype.readInt8=function(e,r){return e=e>>>0,r||_(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};l.prototype.readInt16LE=function(e,r){e=e>>>0,r||_(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o};l.prototype.readInt16BE=function(e,r){e=e>>>0,r||_(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o};l.prototype.readInt32LE=function(e,r){return e=e>>>0,r||_(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};l.prototype.readInt32BE=function(e,r){return e=e>>>0,r||_(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};l.prototype.readFloatLE=function(e,r){return e=e>>>0,r||_(e,4,this.length),ne.read(this,e,!0,23,4)};l.prototype.readFloatBE=function(e,r){return e=e>>>0,r||_(e,4,this.length),ne.read(this,e,!1,23,4)};l.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||_(e,8,this.length),ne.read(this,e,!0,52,8)};l.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||_(e,8,this.length),ne.read(this,e,!1,52,8)};function I(t,e,r,o,i,p){if(!l.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<p)throw new RangeError('"value" argument is out of bounds');if(r+o>t.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var p=Math.pow(2,8*o)-1;I(this,e,r,o,p,0)}var m=1,d=0;for(this[r]=e&255;++d<o&&(m*=256);)this[r+d]=e/m&255;return r+o};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var p=Math.pow(2,8*o)-1;I(this,e,r,o,p,0)}var m=o-1,d=1;for(this[r+m]=e&255;--m>=0&&(d*=256);)this[r+m]=e/d&255;return r+o};l.prototype.writeUint8=l.prototype.writeUInt8=function(e,r,o){return e=+e,r=r>>>0,o||I(this,e,r,1,255,0),this[r]=e&255,r+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||I(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||I(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||I(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||I(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};l.prototype.writeIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var p=Math.pow(2,8*o-1);I(this,e,r,o,p-1,-p)}var m=0,d=1,f=0;for(this[r]=e&255;++m<o&&(d*=256);)e<0&&f===0&&this[r+m-1]!==0&&(f=1),this[r+m]=(e/d>>0)-f&255;return r+o};l.prototype.writeIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var p=Math.pow(2,8*o-1);I(this,e,r,o,p-1,-p)}var m=o-1,d=1,f=0;for(this[r+m]=e&255;--m>=0&&(d*=256);)e<0&&f===0&&this[r+m+1]!==0&&(f=1),this[r+m]=(e/d>>0)-f&255;return r+o};l.prototype.writeInt8=function(e,r,o){return e=+e,r=r>>>0,o||I(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1};l.prototype.writeInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||I(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};l.prototype.writeInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||I(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};l.prototype.writeInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||I(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};l.prototype.writeInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||I(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function Tr(t,e,r,o,i,p){if(r+o>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function br(t,e,r,o,i){return e=+e,r=r>>>0,i||Tr(t,e,r,4,34028234663852886e22,-34028234663852886e22),ne.write(t,e,r,o,23,4),r+4}l.prototype.writeFloatLE=function(e,r,o){return br(this,e,r,!0,o)};l.prototype.writeFloatBE=function(e,r,o){return br(this,e,r,!1,o)};function vr(t,e,r,o,i){return e=+e,r=r>>>0,i||Tr(t,e,r,8,17976931348623157e292,-17976931348623157e292),ne.write(t,e,r,o,52,8),r+8}l.prototype.writeDoubleLE=function(e,r,o){return vr(this,e,r,!0,o)};l.prototype.writeDoubleBE=function(e,r,o){return vr(this,e,r,!1,o)};l.prototype.copy=function(e,r,o,i){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!i&&i!==0&&(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<o&&(i=o),i===o||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-o&&(i=e.length-r+o);var p=i-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,o,i):Uint8Array.prototype.set.call(e,this.subarray(o,i),r),p};l.prototype.fill=function(e,r,o,i){if(typeof e=="string"){if(typeof r=="string"?(i=r,r=0,o=this.length):typeof o=="string"&&(i=o,o=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!l.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){var p=e.charCodeAt(0);(i==="utf8"&&p<128||i==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<o)throw new RangeError("Out of range index");if(o<=r)return this;r=r>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var m;if(typeof e=="number")for(m=r;m<o;++m)this[m]=e;else{var d=l.isBuffer(e)?e:l.from(e,i),f=d.length;if(f===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(m=0;m<o-r;++m)this[m+r]=d[m%f]}return this};var zt=/[^+/0-9A-Za-z-_]/g;function Ht(t){if(t=t.split("=")[0],t=t.trim().replace(zt,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function qe(t,e){e=e||1/0;for(var r,o=t.length,i=null,p=[],m=0;m<o;++m){if(r=t.charCodeAt(m),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&p.push(239,191,189);continue}else if(m+1===o){(e-=3)>-1&&p.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&p.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&p.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;p.push(r)}else if(r<2048){if((e-=2)<0)break;p.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;p.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;p.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return p}function Xt(t){for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r)&255);return e}function Yt(t,e){for(var r,o,i,p=[],m=0;m<t.length&&!((e-=2)<0);++m)r=t.charCodeAt(m),o=r>>8,i=r%256,p.push(i),p.push(o);return p}function _r(t){return Ve.toByteArray(Ht(t))}function we(t,e,r,o){for(var i=0;i<o&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function N(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Ze(t){return t!==t}var jt=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var o=r*16,i=0;i<16;++i)e[o+i]=t[r]+t[i];return e}()});var Lr=ve((Fi,Ir)=>{n();var T=Ir.exports={},G,B;function We(){throw new Error("setTimeout has not been defined")}function Ke(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?G=setTimeout:G=We}catch(t){G=We}try{typeof clearTimeout=="function"?B=clearTimeout:B=Ke}catch(t){B=Ke}})();function wr(t){if(G===setTimeout)return setTimeout(t,0);if((G===We||!G)&&setTimeout)return G=setTimeout,setTimeout(t,0);try{return G(t,0)}catch(e){try{return G.call(null,t,0)}catch(r){return G.call(this,t,0)}}}function Jt(t){if(B===clearTimeout)return clearTimeout(t);if((B===Ke||!B)&&clearTimeout)return B=clearTimeout,clearTimeout(t);try{return B(t)}catch(e){try{return B.call(null,t)}catch(r){return B.call(this,t)}}}var R=[],ae=!1,Y,Ce=-1;function Qt(){!ae||!Y||(ae=!1,Y.length?R=Y.concat(R):Ce=-1,R.length&&Cr())}function Cr(){if(!ae){var t=wr(Qt);ae=!0;for(var e=R.length;e;){for(Y=R,R=[];++Ce<e;)Y&&Y[Ce].run();Ce=-1,e=R.length}Y=null,ae=!1,Jt(t)}}T.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];R.push(new Ar(t,e)),R.length===1&&!ae&&wr(Cr)};function Ar(t,e){this.fun=t,this.array=e}Ar.prototype.run=function(){this.fun.apply(null,this.array)};T.title="browser";T.browser=!0;T.env={};T.argv=[];T.version="";T.versions={};function M(){}T.on=M;T.addListener=M;T.once=M;T.off=M;T.removeListener=M;T.removeAllListeners=M;T.emit=M;T.prependListener=M;T.prependOnceListener=M;T.listeners=function(t){return[]};T.binding=function(t){throw new Error("process.binding is not supported")};T.cwd=function(){return"/"};T.chdir=function(t){throw new Error("process.chdir is not supported")};T.umask=function(){return 0}});var a,s,Ni,n=Tt(()=>{a=u(Er()),s=u(Lr()),Ni=function(t){function e(){var o=this||self;return delete t.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object)});var Ai={};bt(Ai,{FeeAccordion:()=>Ci});module.exports=vt(Ai);n();var C=u(require("react")),Ge=require("@fortawesome/free-solid-svg-icons"),rr=require("@fortawesome/react-fontawesome"),ut=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),tr=u(require("classnames")),dt=u(require("react-collapsed"));n();var eo=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(eo));var L={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};n();n();var be=u(require("react"));n();var Ae=u(require("react")),Vi=(0,Ae.createContext)({});n();n();var oe=u(require("react")),Yn=require("@terradharitri/sdk-dapp/constants/index"),jn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Jn=u(require("bignumber.js")),Qn=require("formik");n();n();n();var ro=require("bech32");n();n();n();var ye=(t,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(t);n();n();var se=require("@terradharitri/sdk-dapp/types/tokens.types");n();n();var oo=require("@terradharitri/sdk-dapp/constants"),no=require("@terradharitri/sdk-dapp/utils/account/getAccount");n();n();var io=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");n();var ao=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var so=u(require("anchorme"));n();n();var kr=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),J=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),ze=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),q=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();n();n();n();n();n();var me=u(require("react")),hn=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),xn=require("formik");n();n();var Ur=require("@terradharitri/sdk-dapp/constants/index"),No=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Go=u(require("bignumber.js"));n();n();var he=require("@terradharitri/sdk-dapp/constants/index");function Sr({feeLimit:t,rewaPriceInUsd:e}){let r=(0,J.formatAmount)({input:t,decimals:he.DECIMALS,digits:he.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,ze.getUsdValue)({amount:r,usd:e,decimals:he.DIGITS})}`}n();var po=require("@terradharitri/sdk-dapp/constants/index");n();n();var w="0";n();var Pr=require("@terradharitri/sdk-dapp/constants/index"),lo=u(require("bignumber.js"));n();var mo=require("@terradharitri/sdk-dapp/constants/index");n();var uo=require("@terradharitri/sdk-dapp/constants/index");n();n();var xe=require("@terradharitri/sdk-core"),fo=require("@terradharitri/sdk-dapp/constants/index"),go=u(require("bignumber.js"));n();n();var ho=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");n();var xo=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var bo=u(require("bignumber.js"));n();var Ao=require("@terradharitri/sdk-dapp/constants/index"),Io=require("@terradharitri/sdk-dapp/utils/smartContracts"),Lo=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),ko=u(require("bignumber.js"));n();var Co=u(require("bignumber.js"));n();n();var wo=u(require("axios"));n();n();n();var _o=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var vo=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var pe=require("@terradharitri/sdk-dapp/constants/index"),Dr=u(require("bignumber.js"));var Nr,Gr,Br,Te=(0,J.formatAmount)({input:String((Nr=pe.GAS_PRICE)!=null?Nr:1e9),decimals:(Gr=pe.DECIMALS)!=null?Gr:18,showLastNonZeroDecimal:!0,digits:(Br=pe.DIGITS)!=null?Br:4}),So=new Dr.default(Te).times(10).toString(10);n();var ke=require("@terradharitri/sdk-dapp/constants/index"),Po=u(require("bignumber.js"));n();var Fo=u(require("bignumber.js"));n();n();var Mr=require("yup");n();var Se=require("@terradharitri/sdk-dapp/constants/ledger.constants"),Vr=u(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Pe=require("yup"),Bo=(0,Pe.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:r}=this.parent;return!(r&&e&&e.length&&!r.ledgerDataActive)}),Do=(0,Pe.string)().test({name:"hashSign",test:function(e){let{ledger:r,isGuarded:o}=this.parent;if(r){let{ledgerWithHashSign:i,ledgerWithGuardians:p}=(0,Vr.default)(r.version);if(e&&e.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${Se.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(o&&!p)return this.createError({message:`You need at least DharitrI app version ${Se.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Uo=[Bo,Do],vc=Uo.reduce((t,e)=>t.concat(e),(0,Pe.string)());n();var Vo=require("@terradharitri/sdk-dapp/constants/index"),Ro=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Mo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),qo=require("yup");n();var Wo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ko=u(require("bignumber.js")),zo=require("yup");n();var Oo=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),$o=u(require("bignumber.js")),Zo=require("yup");n();var Ho=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Xo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Yo=u(require("bignumber.js")),jo=require("yup");n();var Jo=u(require("bignumber.js")),Qo=require("yup");n();var en=require("@terradharitri/sdk-dapp/constants/index"),rn=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),tn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),on=u(require("bignumber.js")),nn=require("yup");n();var an=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),sn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),cn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),pn=u(require("bignumber.js")),mn=require("yup");n();var ln=u(require("bignumber.js")),un=require("yup");n();var dn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),fn=require("yup");n();var gn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),yn=require("yup");n();n();var Kp=(0,me.createContext)({});n();n();var O=u(require("react")),Pn=require("formik"),Fn=u(require("lodash/uniqBy"));n();n();n();var Tn=u(require("axios"));n();n();var bn=u(require("axios"));n();n();var qr=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),vn=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),_n=u(require("axios")),En=u(require("lodash/uniqBy"));n();var wn=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Cn=u(require("axios"));n();var Or=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),An=u(require("axios"));n();n();var Q=u(require("react"));var In=(0,Q.createContext)({});function ee(){return(0,Q.useContext)(In)}n();n();var $r=require("react"),Ln=require("@terradharitri/sdk-dapp/constants/index");var kn=require("@terradharitri/sdk-dapp/types/enums.types");n();var il=(0,O.createContext)({});n();n();var Xr=require("@terradharitri/sdk-dapp/constants/index"),Xn=require("formik");n();n();var te=u(require("react")),zr=require("@terradharitri/sdk-dapp/constants/index"),Zn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Wn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Kn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),zn=u(require("bignumber.js")),Hn=require("formik");n();n();n();n();var Nn=u(require("bignumber.js"));n();var Gn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Bn=u(require("bignumber.js"));n();n();var Kr=require("react"),Un=require("@terradharitri/sdk-dapp/constants/index"),Vn=require("@terradharitri/sdk-dapp/utils/smartContracts"),Rn=u(require("bignumber.js")),Mn=require("formik");n();var Zr=require("react");n();n();var qn=require("@terradharitri/sdk-dapp/constants/index"),On=u(require("bignumber.js"));var mu=(0,te.createContext)({});var Mu=(0,oe.createContext)({});n();n();var ue=u(require("react")),ei=require("formik");var rd=(0,ue.createContext)({});n();n();var de=u(require("react")),ci=require("formik");n();n();n();var Yr=require("react"),oi=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),ni=u(require("lodash/uniqBy"));n();n();var ri=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),ti=require("@terradharitri/sdk-dapp/utils");n();var si=require("react");n();var ii=require("react"),ai=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var Pd=(0,de.createContext)({});n();n();var Fe=u(require("react")),hi=require("formik");n();n();n();n();n();var fi=require("react"),gi=require("@terradharitri/sdk-dapp/utils");n();var ui=require("react"),di=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var pi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),mi=u(require("axios"));n();var li=u(require("axios"));var gf=(0,Fe.createContext)({});var xi=(0,be.createContext)({});function fe(){return(0,be.useContext)(xi)}n();var $=u(require("react")),et=require("@fortawesome/free-solid-svg-icons"),rt=require("@fortawesome/react-fontawesome"),tt=u(require("bignumber.js")),Je=u(require("classnames")),ot=require("react-number-format");n();n();var Ti=require("@terradharitri/sdk-dapp/constants/index"),bi=require("@terradharitri/sdk-dapp/utils/validation"),vi=u(require("bignumber.js"));n();n();var jr=require("react");n();var Jr=u(require("bignumber.js")),Ne=t=>{let[e,r]=t.split(""),o=new Jr.default(e).isZero();return Boolean(o&&r&&!(r==="."))};n();var _i=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_i));var E={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"};var nt=()=>{let{formInfo:t,gasInfo:e}=fe(),{readonly:r}=t,{defaultGasLimit:o,onResetGasLimit:i,onChangeGasLimit:p,onBlurGasLimit:m,gasLimit:d,gasLimitError:f,isGasLimitInvalid:y}=e,h=U=>{U.preventDefault(),i()},g=({value:U,floatValue:W})=>(!W||!(0,tt.default)(W).isNaN())&&!Ne(U),v=U=>{p(U.value,!0)},b=d!==o&&!r,A=ye("gasLimit",r);return $.default.createElement("div",{className:E.gas},$.default.createElement("label",{className:L.label,htmlFor:"gasLimit"},"Gas Limit"),$.default.createElement("div",{className:E.wrapper},$.default.createElement(ot.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:A,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:m,onValueChange:v,required:!0,isAllowed:g,thousandSeparator:",",thousandsGroupStyle:"thousand",value:d,valueIsNumericString:!0,allowNegative:!1,className:(0,Je.default)(L.input,E.input,{[L.disabled]:A,[L.invalid]:y,[E.spaced]:b})}),b&&$.default.createElement("div",{className:E.actions},$.default.createElement("div",{onClick:h,"data-testid":"gasLimitResetBtn",className:(0,Je.default)(E.action,{[E.disabled]:A})},$.default.createElement(rt.FontAwesomeIcon,{icon:et.faUndo,className:E.icon}))),y&&$.default.createElement("div",{className:L.error,"data-testid":`${"gasLimit"}Error`},f)))};n();n();var Z=u(require("react")),it=require("@fortawesome/free-solid-svg-icons"),at=require("@fortawesome/react-fontawesome"),st=u(require("bignumber.js")),er=u(require("classnames")),ct=require("react-number-format");n();var Qe=u(require("react")),Ei=require("@terradharitri/sdk-dapp/constants/index");var pt=()=>{let{networkConfig:t}=ee(),{gasInfo:e,formInfo:r}=fe(),{readonly:o}=r,{rewaLabel:i}=t,{gasPrice:p,gasPriceError:m,isGasPriceInvalid:d,onChangeGasPrice:f,onBlurGasPrice:y,onResetGasPrice:h}=e,g=p!==Te&&!o,v=ye("gasPrice",o),b=({value:W,floatValue:Be})=>(!Be||!(0,st.default)(Be).isNaN())&&!Ne(W),A=W=>{W.preventDefault(),h()},U=W=>{f(W.value,!0)};return Z.default.createElement("div",{className:E.gas},Z.default.createElement("label",{className:L.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),Z.default.createElement("div",{className:E.wrapper},Z.default.createElement(ct.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:v,id:"gasPrice",inputMode:"decimal",isAllowed:b,name:"gasPrice",onBlur:y,onValueChange:U,required:!0,suffix:` ${i}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:p,valueIsNumericString:!0,allowNegative:!1,className:(0,er.default)(L.input,E.input,{[L.disabled]:v,[L.invalid]:d,[E.spaced]:g})}),g&&Z.default.createElement("div",{className:E.actions},Z.default.createElement("div",{onClick:A,className:(0,er.default)(E.action,{[E.disabled]:v})},Z.default.createElement(at.FontAwesomeIcon,{icon:it.faUndo,className:E.icon})))),d&&Z.default.createElement("div",{className:L.error,"data-testid":`${"gasPrice"}Error`},m))};n();var mt=u(require("react"));n();var wi=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wi));var D={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"};var lt=({feeLimit:t,rewaPriceInUsd:e})=>t===w?null:mt.default.createElement("span",{className:D.fiat,"data-testid":"feeInFiat"},"(",Sr({feeLimit:t,rewaPriceInUsd:e}),")");var Ci=({className:t})=>{let{gasInfo:e,tokensInfo:r}=fe(),{feeLimit:o,gasCostLoading:i,gasPriceError:p,gasLimitError:m}=e,{rewaPriceInUsd:d,rewaLabel:f}=r,[y,h]=(0,C.useState)(Boolean(p||m)),{getCollapseProps:g,getToggleProps:v}=(0,dt.default)({isExpanded:y}),b=()=>{h(A=>!A)};return C.default.createElement("div",{className:(0,tr.default)(D.fee,t)},C.default.createElement("label",{className:L.label},"Fee"),C.default.createElement("div",k({className:D.trigger},v({onClick:b})),C.default.createElement("span",{className:D.limit,"data-testid":"feeLimit"},C.default.createElement(ut.FormatAmount,{value:o,showLastNonZeroDecimal:!0,rewaLabel:f})),i&&C.default.createElement(rr.FontAwesomeIcon,{icon:Ge.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),C.default.createElement(lt,{rewaPriceInUsd:d,feeLimit:o}),C.default.createElement(rr.FontAwesomeIcon,{icon:Ge.faChevronRight,className:(0,tr.default)(D.arrow,{[D.active]:y})})),C.default.createElement("div",k({className:D.expandable},g()),C.default.createElement("div",{className:D.content},C.default.createElement(pt,null),C.default.createElement(nt,null))))};0&&(module.exports={FeeAccordion});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=FeeAccordion.js.map
