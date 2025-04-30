"use strict";var Kr=Object.create;var de=Object.defineProperty;var zr=Object.getOwnPropertyDescriptor;var Hr=Object.getOwnPropertyNames;var Xr=Object.getPrototypeOf,Yr=Object.prototype.hasOwnProperty;var jr=(t,e)=>()=>(t&&(e=t(t=0)),e);var fe=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Jr=(t,e)=>{for(var r in e)de(t,r,{get:e[r],enumerable:!0})},Ke=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Hr(e))!Yr.call(t,i)&&i!==r&&de(t,i,{get:()=>e[i],enumerable:!(o=zr(e,i))||o.enumerable});return t};var d=(t,e,r)=>(r=t!=null?Kr(Xr(t)):{},Ke(e||!t||!t.__esModule?de(r,"default",{value:t,enumerable:!0}):r,t)),Qr=t=>Ke(de({},"__esModule",{value:!0}),t);var Xe=fe(ge=>{"use strict";n();ge.byteLength=rt;ge.toByteArray=ot;ge.fromByteArray=at;var I=[],C=[],et=typeof Uint8Array!="undefined"?Uint8Array:Array,Ie="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(q=0,ze=Ie.length;q<ze;++q)I[q]=Ie[q],C[Ie.charCodeAt(q)]=q;var q,ze;C["-".charCodeAt(0)]=62;C["_".charCodeAt(0)]=63;function He(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var o=r===e?0:4-r%4;return[r,o]}function rt(t){var e=He(t),r=e[0],o=e[1];return(r+o)*3/4-o}function tt(t,e,r){return(e+r)*3/4-r}function ot(t){var e,r=He(t),o=r[0],i=r[1],p=new et(tt(t,o,i)),m=0,l=i>0?o-4:o,f;for(f=0;f<l;f+=4)e=C[t.charCodeAt(f)]<<18|C[t.charCodeAt(f+1)]<<12|C[t.charCodeAt(f+2)]<<6|C[t.charCodeAt(f+3)],p[m++]=e>>16&255,p[m++]=e>>8&255,p[m++]=e&255;return i===2&&(e=C[t.charCodeAt(f)]<<2|C[t.charCodeAt(f+1)]>>4,p[m++]=e&255),i===1&&(e=C[t.charCodeAt(f)]<<10|C[t.charCodeAt(f+1)]<<4|C[t.charCodeAt(f+2)]>>2,p[m++]=e>>8&255,p[m++]=e&255),p}function nt(t){return I[t>>18&63]+I[t>>12&63]+I[t>>6&63]+I[t&63]}function it(t,e,r){for(var o,i=[],p=e;p<r;p+=3)o=(t[p]<<16&16711680)+(t[p+1]<<8&65280)+(t[p+2]&255),i.push(nt(o));return i.join("")}function at(t){for(var e,r=t.length,o=r%3,i=[],p=16383,m=0,l=r-o;m<l;m+=p)i.push(it(t,m,m+p>l?l:m+p));return o===1?(e=t[r-1],i.push(I[e>>2]+I[e<<4&63]+"==")):o===2&&(e=(t[r-2]<<8)+t[r-1],i.push(I[e>>10]+I[e>>4&63]+I[e<<2&63]+"=")),i.join("")}});var Ye=fe(ke=>{n();ke.read=function(t,e,r,o,i){var p,m,l=i*8-o-1,f=(1<<l)-1,x=f>>1,y=-7,g=r?i-1:0,v=r?-1:1,E=t[e+g];for(g+=v,p=E&(1<<-y)-1,E>>=-y,y+=l;y>0;p=p*256+t[e+g],g+=v,y-=8);for(m=p&(1<<-y)-1,p>>=-y,y+=o;y>0;m=m*256+t[e+g],g+=v,y-=8);if(p===0)p=1-x;else{if(p===f)return m?NaN:(E?-1:1)*(1/0);m=m+Math.pow(2,o),p=p-x}return(E?-1:1)*m*Math.pow(2,p-o)};ke.write=function(t,e,r,o,i,p){var m,l,f,x=p*8-i-1,y=(1<<x)-1,g=y>>1,v=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=o?0:p-1,R=o?1:-1,Ae=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,m=y):(m=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-m))<1&&(m--,f*=2),m+g>=1?e+=v/f:e+=v*Math.pow(2,1-g),e*f>=2&&(m++,f/=2),m+g>=y?(l=0,m=y):m+g>=1?(l=(e*f-1)*Math.pow(2,i),m=m+g):(l=e*Math.pow(2,g-1)*Math.pow(2,i),m=0));i>=8;t[r+E]=l&255,E+=R,l/=256,i-=8);for(m=m<<i|l,x+=i;x>0;t[r+E]=m&255,E+=R,m/=256,x-=8);t[r+E-R]|=Ae*128}});var pr=fe(J=>{"use strict";n();var Le=Xe(),j=Ye(),je=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;J.Buffer=u;J.SlowBuffer=lt;J.INSPECT_MAX_BYTES=50;var xe=2147483647;J.kMaxLength=xe;u.TYPED_ARRAY_SUPPORT=st();!u.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function st(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(r){return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.buffer}});Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.byteOffset}});function P(t){if(t>xe)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,u.prototype),e}function u(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Ne(t)}return er(t,e,r)}u.poolSize=8192;function er(t,e,r){if(typeof t=="string")return pt(t,e);if(ArrayBuffer.isView(t))return mt(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(k(t,ArrayBuffer)||t&&k(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(k(t,SharedArrayBuffer)||t&&k(t.buffer,SharedArrayBuffer)))return Pe(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=t.valueOf&&t.valueOf();if(o!=null&&o!==t)return u.from(o,e,r);var i=ut(t);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return u.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}u.from=function(t,e,r){return er(t,e,r)};Object.setPrototypeOf(u.prototype,Uint8Array.prototype);Object.setPrototypeOf(u,Uint8Array);function rr(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function ct(t,e,r){return rr(t),t<=0?P(t):e!==void 0?typeof r=="string"?P(t).fill(e,r):P(t).fill(e):P(t)}u.alloc=function(t,e,r){return ct(t,e,r)};function Ne(t){return rr(t),P(t<0?0:Ge(t)|0)}u.allocUnsafe=function(t){return Ne(t)};u.allocUnsafeSlow=function(t){return Ne(t)};function pt(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=tr(t,e)|0,o=P(r),i=o.write(t,e);return i!==r&&(o=o.slice(0,i)),o}function Se(t){for(var e=t.length<0?0:Ge(t.length)|0,r=P(e),o=0;o<e;o+=1)r[o]=t[o]&255;return r}function mt(t){if(k(t,Uint8Array)){var e=new Uint8Array(t);return Pe(e.buffer,e.byteOffset,e.byteLength)}return Se(t)}function Pe(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return e===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,e):o=new Uint8Array(t,e,r),Object.setPrototypeOf(o,u.prototype),o}function ut(t){if(u.isBuffer(t)){var e=Ge(t.length)|0,r=P(e);return r.length===0||t.copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||Be(t.length)?P(0):Se(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Se(t.data)}function Ge(t){if(t>=xe)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+xe.toString(16)+" bytes");return t|0}function lt(t){return+t!=t&&(t=0),u.alloc(+t)}u.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==u.prototype};u.compare=function(e,r){if(k(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),k(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(e)||!u.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var o=e.length,i=r.length,p=0,m=Math.min(o,i);p<m;++p)if(e[p]!==r[p]){o=e[p],i=r[p];break}return o<i?-1:i<o?1:0};u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};u.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return u.alloc(0);var o;if(r===void 0)for(r=0,o=0;o<e.length;++o)r+=e[o].length;var i=u.allocUnsafe(r),p=0;for(o=0;o<e.length;++o){var m=e[o];if(k(m,Uint8Array))p+m.length>i.length?u.from(m).copy(i,p):Uint8Array.prototype.set.call(i,m,p);else if(u.isBuffer(m))m.copy(i,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return i};function tr(t,e){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||k(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Fe(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return cr(t).length;default:if(i)return o?-1:Fe(t).length;e=(""+e).toLowerCase(),i=!0}}u.byteLength=tr;function dt(t,e,r){var o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return _t(this,e,r);case"utf8":case"utf-8":return nr(this,e,r);case"ascii":return vt(this,e,r);case"latin1":case"binary":return Et(this,e,r);case"base64":return Tt(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wt(this,e,r);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}u.prototype._isBuffer=!0;function O(t,e,r){var o=t[e];t[e]=t[r],t[r]=o}u.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)O(this,r,r+1);return this};u.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)O(this,r,r+3),O(this,r+1,r+2);return this};u.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)O(this,r,r+7),O(this,r+1,r+6),O(this,r+2,r+5),O(this,r+3,r+4);return this};u.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?nr(this,0,e):dt.apply(this,arguments)};u.prototype.toLocaleString=u.prototype.toString;u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:u.compare(this,e)===0};u.prototype.inspect=function(){var e="",r=J.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"};je&&(u.prototype[je]=u.prototype.inspect);u.prototype.compare=function(e,r,o,i,p){if(k(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),o===void 0&&(o=e?e.length:0),i===void 0&&(i=0),p===void 0&&(p=this.length),r<0||o>e.length||i<0||p>this.length)throw new RangeError("out of range index");if(i>=p&&r>=o)return 0;if(i>=p)return-1;if(r>=o)return 1;if(r>>>=0,o>>>=0,i>>>=0,p>>>=0,this===e)return 0;for(var m=p-i,l=o-r,f=Math.min(m,l),x=this.slice(i,p),y=e.slice(r,o),g=0;g<f;++g)if(x[g]!==y[g]){m=x[g],l=y[g];break}return m<l?-1:l<m?1:0};function or(t,e,r,o,i){if(t.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Be(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=u.from(e,o)),u.isBuffer(e))return e.length===0?-1:Je(t,e,r,o,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):Je(t,[e],r,o,i);throw new TypeError("val must be string, number or Buffer")}function Je(t,e,r,o,i){var p=1,m=t.length,l=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(t.length<2||e.length<2)return-1;p=2,m/=2,l/=2,r/=2}function f(E,R){return p===1?E[R]:E.readUInt16BE(R*p)}var x;if(i){var y=-1;for(x=r;x<m;x++)if(f(t,x)===f(e,y===-1?0:x-y)){if(y===-1&&(y=x),x-y+1===l)return y*p}else y!==-1&&(x-=x-y),y=-1}else for(r+l>m&&(r=m-l),x=r;x>=0;x--){for(var g=!0,v=0;v<l;v++)if(f(t,x+v)!==f(e,v)){g=!1;break}if(g)return x}return-1}u.prototype.includes=function(e,r,o){return this.indexOf(e,r,o)!==-1};u.prototype.indexOf=function(e,r,o){return or(this,e,r,o,!0)};u.prototype.lastIndexOf=function(e,r,o){return or(this,e,r,o,!1)};function ft(t,e,r,o){r=Number(r)||0;var i=t.length-r;o?(o=Number(o),o>i&&(o=i)):o=i;var p=e.length;o>p/2&&(o=p/2);for(var m=0;m<o;++m){var l=parseInt(e.substr(m*2,2),16);if(Be(l))return m;t[r+m]=l}return m}function gt(t,e,r,o){return ye(Fe(e,t.length-r),t,r,o)}function xt(t,e,r,o){return ye(It(e),t,r,o)}function yt(t,e,r,o){return ye(cr(e),t,r,o)}function ht(t,e,r,o){return ye(kt(e,t.length-r),t,r,o)}u.prototype.write=function(e,r,o,i){if(r===void 0)i="utf8",o=this.length,r=0;else if(o===void 0&&typeof r=="string")i=r,o=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(o)?(o=o>>>0,i===void 0&&(i="utf8")):(i=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-r;if((o===void 0||o>p)&&(o=p),e.length>0&&(o<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var m=!1;;)switch(i){case"hex":return ft(this,e,r,o);case"utf8":case"utf-8":return gt(this,e,r,o);case"ascii":case"latin1":case"binary":return xt(this,e,r,o);case"base64":return yt(this,e,r,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ht(this,e,r,o);default:if(m)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),m=!0}};u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Tt(t,e,r){return e===0&&r===t.length?Le.fromByteArray(t):Le.fromByteArray(t.slice(e,r))}function nr(t,e,r){r=Math.min(t.length,r);for(var o=[],i=e;i<r;){var p=t[i],m=null,l=p>239?4:p>223?3:p>191?2:1;if(i+l<=r){var f,x,y,g;switch(l){case 1:p<128&&(m=p);break;case 2:f=t[i+1],(f&192)===128&&(g=(p&31)<<6|f&63,g>127&&(m=g));break;case 3:f=t[i+1],x=t[i+2],(f&192)===128&&(x&192)===128&&(g=(p&15)<<12|(f&63)<<6|x&63,g>2047&&(g<55296||g>57343)&&(m=g));break;case 4:f=t[i+1],x=t[i+2],y=t[i+3],(f&192)===128&&(x&192)===128&&(y&192)===128&&(g=(p&15)<<18|(f&63)<<12|(x&63)<<6|y&63,g>65535&&g<1114112&&(m=g))}}m===null?(m=65533,l=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),i+=l}return bt(o)}var Qe=4096;function bt(t){var e=t.length;if(e<=Qe)return String.fromCharCode.apply(String,t);for(var r="",o=0;o<e;)r+=String.fromCharCode.apply(String,t.slice(o,o+=Qe));return r}function vt(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]&127);return o}function Et(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]);return o}function _t(t,e,r){var o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);for(var i="",p=e;p<r;++p)i+=Lt[t[p]];return i}function wt(t,e,r){for(var o=t.slice(e,r),i="",p=0;p<o.length-1;p+=2)i+=String.fromCharCode(o[p]+o[p+1]*256);return i}u.prototype.slice=function(e,r){var o=this.length;e=~~e,r=r===void 0?o:~~r,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),r<0?(r+=o,r<0&&(r=0)):r>o&&(r=o),r<e&&(r=e);var i=this.subarray(e,r);return Object.setPrototypeOf(i,u.prototype),i};function b(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=this[e],p=1,m=0;++m<r&&(p*=256);)i+=this[e+m]*p;return i};u.prototype.readUintBE=u.prototype.readUIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=this[e+--r],p=1;r>0&&(p*=256);)i+=this[e+--r]*p;return i};u.prototype.readUint8=u.prototype.readUInt8=function(e,r){return e=e>>>0,r||b(e,1,this.length),this[e]};u.prototype.readUint16LE=u.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||b(e,2,this.length),this[e]|this[e+1]<<8};u.prototype.readUint16BE=u.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||b(e,2,this.length),this[e]<<8|this[e+1]};u.prototype.readUint32LE=u.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};u.prototype.readUint32BE=u.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||b(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};u.prototype.readIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=this[e],p=1,m=0;++m<r&&(p*=256);)i+=this[e+m]*p;return p*=128,i>=p&&(i-=Math.pow(2,8*r)),i};u.prototype.readIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=r,p=1,m=this[e+--i];i>0&&(p*=256);)m+=this[e+--i]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*r)),m};u.prototype.readInt8=function(e,r){return e=e>>>0,r||b(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};u.prototype.readInt16LE=function(e,r){e=e>>>0,r||b(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o};u.prototype.readInt16BE=function(e,r){e=e>>>0,r||b(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o};u.prototype.readInt32LE=function(e,r){return e=e>>>0,r||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};u.prototype.readInt32BE=function(e,r){return e=e>>>0,r||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};u.prototype.readFloatLE=function(e,r){return e=e>>>0,r||b(e,4,this.length),j.read(this,e,!0,23,4)};u.prototype.readFloatBE=function(e,r){return e=e>>>0,r||b(e,4,this.length),j.read(this,e,!1,23,4)};u.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||b(e,8,this.length),j.read(this,e,!0,52,8)};u.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||b(e,8,this.length),j.read(this,e,!1,52,8)};function _(t,e,r,o,i,p){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<p)throw new RangeError('"value" argument is out of bounds');if(r+o>t.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var p=Math.pow(2,8*o)-1;_(this,e,r,o,p,0)}var m=1,l=0;for(this[r]=e&255;++l<o&&(m*=256);)this[r+l]=e/m&255;return r+o};u.prototype.writeUintBE=u.prototype.writeUIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var p=Math.pow(2,8*o)-1;_(this,e,r,o,p,0)}var m=o-1,l=1;for(this[r+m]=e&255;--m>=0&&(l*=256);)this[r+m]=e/l&255;return r+o};u.prototype.writeUint8=u.prototype.writeUInt8=function(e,r,o){return e=+e,r=r>>>0,o||_(this,e,r,1,255,0),this[r]=e&255,r+1};u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||_(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||_(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2};u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||_(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4};u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||_(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};u.prototype.writeIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var p=Math.pow(2,8*o-1);_(this,e,r,o,p-1,-p)}var m=0,l=1,f=0;for(this[r]=e&255;++m<o&&(l*=256);)e<0&&f===0&&this[r+m-1]!==0&&(f=1),this[r+m]=(e/l>>0)-f&255;return r+o};u.prototype.writeIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var p=Math.pow(2,8*o-1);_(this,e,r,o,p-1,-p)}var m=o-1,l=1,f=0;for(this[r+m]=e&255;--m>=0&&(l*=256);)e<0&&f===0&&this[r+m+1]!==0&&(f=1),this[r+m]=(e/l>>0)-f&255;return r+o};u.prototype.writeInt8=function(e,r,o){return e=+e,r=r>>>0,o||_(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1};u.prototype.writeInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||_(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};u.prototype.writeInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||_(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};u.prototype.writeInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||_(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};u.prototype.writeInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||_(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ir(t,e,r,o,i,p){if(r+o>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function ar(t,e,r,o,i){return e=+e,r=r>>>0,i||ir(t,e,r,4,34028234663852886e22,-34028234663852886e22),j.write(t,e,r,o,23,4),r+4}u.prototype.writeFloatLE=function(e,r,o){return ar(this,e,r,!0,o)};u.prototype.writeFloatBE=function(e,r,o){return ar(this,e,r,!1,o)};function sr(t,e,r,o,i){return e=+e,r=r>>>0,i||ir(t,e,r,8,17976931348623157e292,-17976931348623157e292),j.write(t,e,r,o,52,8),r+8}u.prototype.writeDoubleLE=function(e,r,o){return sr(this,e,r,!0,o)};u.prototype.writeDoubleBE=function(e,r,o){return sr(this,e,r,!1,o)};u.prototype.copy=function(e,r,o,i){if(!u.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!i&&i!==0&&(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<o&&(i=o),i===o||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-o&&(i=e.length-r+o);var p=i-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,o,i):Uint8Array.prototype.set.call(e,this.subarray(o,i),r),p};u.prototype.fill=function(e,r,o,i){if(typeof e=="string"){if(typeof r=="string"?(i=r,r=0,o=this.length):typeof o=="string"&&(i=o,o=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){var p=e.charCodeAt(0);(i==="utf8"&&p<128||i==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<o)throw new RangeError("Out of range index");if(o<=r)return this;r=r>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var m;if(typeof e=="number")for(m=r;m<o;++m)this[m]=e;else{var l=u.isBuffer(e)?e:u.from(e,i),f=l.length;if(f===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(m=0;m<o-r;++m)this[m+r]=l[m%f]}return this};var Ct=/[^+/0-9A-Za-z-_]/g;function At(t){if(t=t.split("=")[0],t=t.trim().replace(Ct,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function Fe(t,e){e=e||1/0;for(var r,o=t.length,i=null,p=[],m=0;m<o;++m){if(r=t.charCodeAt(m),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&p.push(239,191,189);continue}else if(m+1===o){(e-=3)>-1&&p.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&p.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&p.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;p.push(r)}else if(r<2048){if((e-=2)<0)break;p.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;p.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;p.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return p}function It(t){for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r)&255);return e}function kt(t,e){for(var r,o,i,p=[],m=0;m<t.length&&!((e-=2)<0);++m)r=t.charCodeAt(m),o=r>>8,i=r%256,p.push(i),p.push(o);return p}function cr(t){return Le.toByteArray(At(t))}function ye(t,e,r,o){for(var i=0;i<o&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function k(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Be(t){return t!==t}var Lt=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var o=r*16,i=0;i<16;++i)e[o+i]=t[r]+t[i];return e}()});var fr=fe((pi,dr)=>{n();var T=dr.exports={},L,S;function De(){throw new Error("setTimeout has not been defined")}function Ue(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?L=setTimeout:L=De}catch(t){L=De}try{typeof clearTimeout=="function"?S=clearTimeout:S=Ue}catch(t){S=Ue}})();function mr(t){if(L===setTimeout)return setTimeout(t,0);if((L===De||!L)&&setTimeout)return L=setTimeout,setTimeout(t,0);try{return L(t,0)}catch(e){try{return L.call(null,t,0)}catch(r){return L.call(this,t,0)}}}function St(t){if(S===clearTimeout)return clearTimeout(t);if((S===Ue||!S)&&clearTimeout)return S=clearTimeout,clearTimeout(t);try{return S(t)}catch(e){try{return S.call(null,t)}catch(r){return S.call(this,t)}}}var F=[],Q=!1,$,he=-1;function Pt(){!Q||!$||(Q=!1,$.length?F=$.concat(F):he=-1,F.length&&ur())}function ur(){if(!Q){var t=mr(Pt);Q=!0;for(var e=F.length;e;){for($=F,F=[];++he<e;)$&&$[he].run();he=-1,e=F.length}$=null,Q=!1,St(t)}}T.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];F.push(new lr(t,e)),F.length===1&&!Q&&mr(ur)};function lr(t,e){this.fun=t,this.array=e}lr.prototype.run=function(){this.fun.apply(null,this.array)};T.title="browser";T.browser=!0;T.env={};T.argv=[];T.version="";T.versions={};function N(){}T.on=N;T.addListener=N;T.once=N;T.off=N;T.removeListener=N;T.removeAllListeners=N;T.emit=N;T.prependListener=N;T.prependOnceListener=N;T.listeners=function(t){return[]};T.binding=function(t){throw new Error("process.binding is not supported")};T.cwd=function(){return"/"};T.chdir=function(t){throw new Error("process.chdir is not supported")};T.umask=function(){return 0}});var a,s,mi,n=jr(()=>{a=d(pr()),s=d(fr()),mi=function(t){function e(){var o=this||self;return delete t.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object)});var oi={};Jr(oi,{GasPrice:()=>ti});module.exports=Qr(oi);n();n();var V=d(require("react")),Or=require("@fortawesome/free-solid-svg-icons"),$r=require("@fortawesome/react-fontawesome"),Wr=d(require("bignumber.js")),We=d(require("classnames")),Zr=require("react-number-format");n();var Ft=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ft));var ee={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};n();var $e=d(require("react")),jn=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var Dt=d(require("axios"));n();n();n();var Gt=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var Nt=require("@terradharitri/sdk-dapp/constants/index");n();n();n();n();n();n();n();var Ut=d(require("axios"));n();n();var xr=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Vt=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Rt=d(require("axios")),Mt=d(require("lodash/uniqBy"));n();var qt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ot=d(require("axios"));n();n();n();var re=require("@terradharitri/sdk-dapp/types/tokens.types");n();n();n();n();var yr=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),$t=d(require("axios"));n();n();var Wt=d(require("axios"));n();var Te=d(require("react")),Ca=(0,Te.createContext)({});n();n();var Y=d(require("react")),kn=require("@terradharitri/sdk-dapp/constants/index"),Ln=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Sn=d(require("bignumber.js")),Pn=require("formik");n();n();n();var Zt=require("bech32");n();n();n();var Ve=(t,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(t);n();n();n();var zt=require("@terradharitri/sdk-dapp/constants"),Ht=require("@terradharitri/sdk-dapp/utils/account/getAccount");n();n();var Xt=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");n();var Yt=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var jt=d(require("anchorme"));n();n();var hr=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),te=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Tr=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),B=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();var ie=d(require("react")),tn=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),on=require("formik");n();n();var Ar=require("@terradharitri/sdk-dapp/constants/index"),To=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),bo=d(require("bignumber.js"));n();n();var br=require("@terradharitri/sdk-dapp/constants/index");n();var Qt=require("@terradharitri/sdk-dapp/constants/index");n();var vr=require("@terradharitri/sdk-dapp/constants/index"),ro=d(require("bignumber.js"));n();var eo=require("@terradharitri/sdk-dapp/constants/index");n();var to=require("@terradharitri/sdk-dapp/constants/index");n();n();var me=require("@terradharitri/sdk-core"),oo=require("@terradharitri/sdk-dapp/constants/index"),no=d(require("bignumber.js"));n();n();var ao=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");n();var so=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var po=d(require("bignumber.js"));n();var uo=require("@terradharitri/sdk-dapp/constants/index"),lo=require("@terradharitri/sdk-dapp/utils/smartContracts"),fo=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),go=d(require("bignumber.js"));n();var mo=d(require("bignumber.js"));n();var ne=require("@terradharitri/sdk-dapp/constants/index"),Cr=d(require("bignumber.js"));var Er,_r,wr,ue=(0,te.formatAmount)({input:String((Er=ne.GAS_PRICE)!=null?Er:1e9),decimals:(_r=ne.DECIMALS)!=null?_r:18,showLastNonZeroDecimal:!0,digits:(wr=ne.DIGITS)!=null?wr:4}),xo=new Cr.default(ue).times(10).toString(10);n();var Ee=require("@terradharitri/sdk-dapp/constants/index"),yo=d(require("bignumber.js"));n();var ho=d(require("bignumber.js"));n();n();var Lr=require("yup");n();var _e=require("@terradharitri/sdk-dapp/constants/ledger.constants"),Ir=d(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),we=require("yup"),vo=(0,we.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:r}=this.parent;return!(r&&e&&e.length&&!r.ledgerDataActive)}),Eo=(0,we.string)().test({name:"hashSign",test:function(e){let{ledger:r,isGuarded:o}=this.parent;if(r){let{ledgerWithHashSign:i,ledgerWithGuardians:p}=(0,Ir.default)(r.version);if(e&&e.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${_e.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(o&&!p)return this.createError({message:`You need at least DharitrI app version ${_e.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),_o=[vo,Eo],Lc=_o.reduce((t,e)=>t.concat(e),(0,we.string)());n();var wo=require("@terradharitri/sdk-dapp/constants/index"),Co=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ao=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Io=require("yup");n();var Po=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Fo=d(require("bignumber.js")),No=require("yup");n();var ko=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Lo=d(require("bignumber.js")),So=require("yup");n();var Go=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Bo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Do=d(require("bignumber.js")),Uo=require("yup");n();var Vo=d(require("bignumber.js")),Ro=require("yup");n();var Mo=require("@terradharitri/sdk-dapp/constants/index"),qo=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Oo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),$o=d(require("bignumber.js")),Wo=require("yup");n();var Zo=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ko=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),zo=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ho=d(require("bignumber.js")),Xo=require("yup");n();var Yo=d(require("bignumber.js")),jo=require("yup");n();var Jo=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Qo=require("yup");n();var en=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),rn=require("yup");n();n();var em=(0,ie.createContext)({});n();n();var D=d(require("react")),pn=require("formik"),mn=d(require("lodash/uniqBy"));n();n();var K=d(require("react"));var nn=(0,K.createContext)({});function z(){return(0,K.useContext)(nn)}n();n();var Sr=require("react"),an=require("@terradharitri/sdk-dapp/constants/index");var sn=require("@terradharitri/sdk-dapp/types/enums.types");n();var Dm=(0,D.createContext)({});n();n();var Dr=require("@terradharitri/sdk-dapp/constants/index"),In=require("formik");n();n();var X=d(require("react")),Gr=require("@terradharitri/sdk-dapp/constants/index"),En=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),_n=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),wn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Cn=d(require("bignumber.js")),An=require("formik");n();n();n();n();var un=d(require("bignumber.js"));n();var ln=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),dn=d(require("bignumber.js"));n();n();var Nr=require("react"),gn=require("@terradharitri/sdk-dapp/constants/index"),xn=require("@terradharitri/sdk-dapp/utils/smartContracts"),yn=d(require("bignumber.js")),hn=require("formik");n();var Pr=require("react");n();n();var Tn=require("@terradharitri/sdk-dapp/constants/index"),bn=d(require("bignumber.js"));var qu=(0,X.createContext)({});var yl=(0,Y.createContext)({});n();n();var se=d(require("react")),Fn=require("formik");var Fl=(0,se.createContext)({});n();n();var ce=d(require("react")),Mn=require("formik");n();n();n();var Ur=require("react"),Bn=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Dn=d(require("lodash/uniqBy"));n();n();var Nn=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Gn=require("@terradharitri/sdk-dapp/utils");n();var Rn=require("react");n();var Un=require("react"),Vn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var cd=(0,ce.createContext)({});n();n();var Ce=d(require("react")),Xn=require("formik");n();n();n();n();n();var Kn=require("react"),zn=require("@terradharitri/sdk-dapp/utils");n();var Wn=require("react"),Zn=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var qn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),On=d(require("axios"));n();var $n=d(require("axios"));var Zd=(0,Ce.createContext)({});n();var le=d(require("react"));var Yn=(0,le.createContext)({});function Vr(){return(0,le.useContext)(Yn)}n();n();var Jn=require("@terradharitri/sdk-dapp/constants/index"),Qn=require("@terradharitri/sdk-dapp/utils/validation"),ei=d(require("bignumber.js"));n();n();var Rr=require("react");n();var Mr=d(require("bignumber.js")),qr=t=>{let[e,r]=t.split(""),o=new Mr.default(e).isZero();return Boolean(o&&r&&!(r==="."))};n();var ri=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ri));var U={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"};var ti=()=>{let{networkConfig:t}=z(),{gasInfo:e,formInfo:r}=Vr(),{readonly:o}=r,{rewaLabel:i}=t,{gasPrice:p,gasPriceError:m,isGasPriceInvalid:l,onChangeGasPrice:f,onBlurGasPrice:x,onResetGasPrice:y}=e,g=p!==ue&&!o,v=Ve("gasPrice",o),E=({value:pe,floatValue:Ze})=>(!Ze||!(0,Wr.default)(Ze).isNaN())&&!qr(pe),R=pe=>{pe.preventDefault(),y()},Ae=pe=>{f(pe.value,!0)};return V.default.createElement("div",{className:U.gas},V.default.createElement("label",{className:ee.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),V.default.createElement("div",{className:U.wrapper},V.default.createElement(Zr.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:v,id:"gasPrice",inputMode:"decimal",isAllowed:E,name:"gasPrice",onBlur:x,onValueChange:Ae,required:!0,suffix:` ${i}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:p,valueIsNumericString:!0,allowNegative:!1,className:(0,We.default)(ee.input,U.input,{[ee.disabled]:v,[ee.invalid]:l,[U.spaced]:g})}),g&&V.default.createElement("div",{className:U.actions},V.default.createElement("div",{onClick:R,className:(0,We.default)(U.action,{[U.disabled]:v})},V.default.createElement($r.FontAwesomeIcon,{icon:Or.faUndo,className:U.icon})))),l&&V.default.createElement("div",{className:ee.error,"data-testid":`${"gasPrice"}Error`},m))};0&&(module.exports={GasPrice});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
