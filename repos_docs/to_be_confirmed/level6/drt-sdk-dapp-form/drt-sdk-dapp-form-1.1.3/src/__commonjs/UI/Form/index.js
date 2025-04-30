"use strict";var Tc=Object.create;var Vo=Object.defineProperty,kc=Object.defineProperties,Sc=Object.getOwnPropertyDescriptor,wc=Object.getOwnPropertyDescriptors,Cc=Object.getOwnPropertyNames,rt=Object.getOwnPropertySymbols,Ec=Object.getPrototypeOf,Yt=Object.prototype.hasOwnProperty,Xr=Object.prototype.propertyIsEnumerable;var Rr=(t,e,o)=>e in t?Vo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,h=(t,e)=>{for(var o in e||(e={}))Yt.call(e,o)&&Rr(t,o,e[o]);if(rt)for(var o of rt(e))Xr.call(e,o)&&Rr(t,o,e[o]);return t},E=(t,e)=>kc(t,wc(e));var nt=(t,e)=>{var o={};for(var n in t)Yt.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&rt)for(var n of rt(t))e.indexOf(n)<0&&Xr.call(t,n)&&(o[n]=t[n]);return o};var Qt=(t,e)=>()=>(t&&(e=t(t=0)),e);var at=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),pt=(t,e)=>{for(var o in e)Vo(t,o,{get:e[o],enumerable:!0})},jr=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Cc(e))!Yt.call(t,a)&&a!==o&&Vo(t,a,{get:()=>e[a],enumerable:!(n=Sc(e,a))||n.enumerable});return t};var _=(t,e,o)=>(o=t!=null?Tc(Ec(t)):{},jr(e||!t||!t.__esModule?Vo(o,"default",{value:t,enumerable:!0}):o,t)),So=t=>jr(Vo({},"__esModule",{value:!0}),t);var N=(t,e,o)=>new Promise((n,a)=>{var i=d=>{try{m(o.next(d))}catch(f){a(f)}},l=d=>{try{m(o.throw(d))}catch(f){a(f)}},m=d=>d.done?n(d.value):Promise.resolve(d.value).then(i,l);m((o=o.apply(t,e)).next())});var Qr=at(st=>{"use strict";r();st.byteLength=Ac;st.toByteArray=Fc;st.fromByteArray=Dc;var Le=[],be=[],Ic=typeof Uint8Array!="undefined"?Uint8Array:Array,er="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(mo=0,Jr=er.length;mo<Jr;++mo)Le[mo]=er[mo],be[er.charCodeAt(mo)]=mo;var mo,Jr;be["-".charCodeAt(0)]=62;be["_".charCodeAt(0)]=63;function Yr(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function Ac(t){var e=Yr(t),o=e[0],n=e[1];return(o+n)*3/4-n}function Nc(t,e,o){return(e+o)*3/4-o}function Fc(t){var e,o=Yr(t),n=o[0],a=o[1],i=new Ic(Nc(t,n,a)),l=0,m=a>0?n-4:n,d;for(d=0;d<m;d+=4)e=be[t.charCodeAt(d)]<<18|be[t.charCodeAt(d+1)]<<12|be[t.charCodeAt(d+2)]<<6|be[t.charCodeAt(d+3)],i[l++]=e>>16&255,i[l++]=e>>8&255,i[l++]=e&255;return a===2&&(e=be[t.charCodeAt(d)]<<2|be[t.charCodeAt(d+1)]>>4,i[l++]=e&255),a===1&&(e=be[t.charCodeAt(d)]<<10|be[t.charCodeAt(d+1)]<<4|be[t.charCodeAt(d+2)]>>2,i[l++]=e>>8&255,i[l++]=e&255),i}function Lc(t){return Le[t>>18&63]+Le[t>>12&63]+Le[t>>6&63]+Le[t&63]}function Pc(t,e,o){for(var n,a=[],i=e;i<o;i+=3)n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),a.push(Lc(n));return a.join("")}function Dc(t){for(var e,o=t.length,n=o%3,a=[],i=16383,l=0,m=o-n;l<m;l+=i)a.push(Pc(t,l,l+i>m?m:l+i));return n===1?(e=t[o-1],a.push(Le[e>>2]+Le[e<<4&63]+"==")):n===2&&(e=(t[o-2]<<8)+t[o-1],a.push(Le[e>>10]+Le[e>>4&63]+Le[e<<2&63]+"=")),a.join("")}});var en=at(or=>{r();or.read=function(t,e,o,n,a){var i,l,m=a*8-n-1,d=(1<<m)-1,f=d>>1,u=-7,y=o?a-1:0,v=o?-1:1,b=t[e+y];for(y+=v,i=b&(1<<-u)-1,b>>=-u,u+=m;u>0;i=i*256+t[e+y],y+=v,u-=8);for(l=i&(1<<-u)-1,i>>=-u,u+=n;u>0;l=l*256+t[e+y],y+=v,u-=8);if(i===0)i=1-f;else{if(i===d)return l?NaN:(b?-1:1)*(1/0);l=l+Math.pow(2,n),i=i-f}return(b?-1:1)*l*Math.pow(2,i-n)};or.write=function(t,e,o,n,a,i){var l,m,d,f=i*8-a-1,u=(1<<f)-1,y=u>>1,v=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=n?0:i-1,T=n?1:-1,S=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(m=isNaN(e)?1:0,l=u):(l=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-l))<1&&(l--,d*=2),l+y>=1?e+=v/d:e+=v*Math.pow(2,1-y),e*d>=2&&(l++,d/=2),l+y>=u?(m=0,l=u):l+y>=1?(m=(e*d-1)*Math.pow(2,a),l=l+y):(m=e*Math.pow(2,y-1)*Math.pow(2,a),l=0));a>=8;t[o+b]=m&255,b+=T,m/=256,a-=8);for(l=l<<a|m,f+=a;f>0;t[o+b]=l&255,b+=T,l/=256,f-=8);t[o+b-T]|=S*128}});var un=at(Co=>{"use strict";r();var tr=Qr(),wo=en(),on=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Co.Buffer=g;Co.SlowBuffer=Oc;Co.INSPECT_MAX_BYTES=50;var ct=2147483647;Co.kMaxLength=ct;g.TYPED_ARRAY_SUPPORT=Bc();!g.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Bc(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(o){return!1}}Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(!!g.isBuffer(this))return this.buffer}});Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(!!g.isBuffer(this))return this.byteOffset}});function ze(t){if(t>ct)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,g.prototype),e}function g(t,e,o){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return pr(t)}return nn(t,e,o)}g.poolSize=8192;function nn(t,e,o){if(typeof t=="string")return Vc(t,e);if(ArrayBuffer.isView(t))return Uc(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Pe(t,ArrayBuffer)||t&&Pe(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Pe(t,SharedArrayBuffer)||t&&Pe(t.buffer,SharedArrayBuffer)))return nr(t,e,o);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return g.from(n,e,o);var a=Mc(t);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return g.from(t[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}g.from=function(t,e,o){return nn(t,e,o)};Object.setPrototypeOf(g.prototype,Uint8Array.prototype);Object.setPrototypeOf(g,Uint8Array);function an(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Gc(t,e,o){return an(t),t<=0?ze(t):e!==void 0?typeof o=="string"?ze(t).fill(e,o):ze(t).fill(e):ze(t)}g.alloc=function(t,e,o){return Gc(t,e,o)};function pr(t){return an(t),ze(t<0?0:sr(t)|0)}g.allocUnsafe=function(t){return pr(t)};g.allocUnsafeSlow=function(t){return pr(t)};function Vc(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!g.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=pn(t,e)|0,n=ze(o),a=n.write(t,e);return a!==o&&(n=n.slice(0,a)),n}function rr(t){for(var e=t.length<0?0:sr(t.length)|0,o=ze(e),n=0;n<e;n+=1)o[n]=t[n]&255;return o}function Uc(t){if(Pe(t,Uint8Array)){var e=new Uint8Array(t);return nr(e.buffer,e.byteOffset,e.byteLength)}return rr(t)}function nr(t,e,o){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(t):o===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,o),Object.setPrototypeOf(n,g.prototype),n}function Mc(t){if(g.isBuffer(t)){var e=sr(t.length)|0,o=ze(e);return o.length===0||t.copy(o,0,0,e),o}if(t.length!==void 0)return typeof t.length!="number"||cr(t.length)?ze(0):rr(t);if(t.type==="Buffer"&&Array.isArray(t.data))return rr(t.data)}function sr(t){if(t>=ct)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ct.toString(16)+" bytes");return t|0}function Oc(t){return+t!=t&&(t=0),g.alloc(+t)}g.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==g.prototype};g.compare=function(e,o){if(Pe(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),Pe(o,Uint8Array)&&(o=g.from(o,o.offset,o.byteLength)),!g.isBuffer(e)||!g.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,a=o.length,i=0,l=Math.min(n,a);i<l;++i)if(e[i]!==o[i]){n=e[i],a=o[i];break}return n<a?-1:a<n?1:0};g.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};g.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return g.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var a=g.allocUnsafe(o),i=0;for(n=0;n<e.length;++n){var l=e[n];if(Pe(l,Uint8Array))i+l.length>a.length?g.from(l).copy(a,i):Uint8Array.prototype.set.call(a,l,i);else if(g.isBuffer(l))l.copy(a,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=l.length}return a};function pn(t,e){if(g.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Pe(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var o=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ar(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return _n(t).length;default:if(a)return n?-1:ar(t).length;e=(""+e).toLowerCase(),a=!0}}g.byteLength=pn;function Wc(t,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return Jc(this,e,o);case"utf8":case"utf-8":return cn(this,e,o);case"ascii":return Xc(this,e,o);case"latin1":case"binary":return jc(this,e,o);case"base64":return Hc(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yc(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}g.prototype._isBuffer=!0;function _o(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}g.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)_o(this,o,o+1);return this};g.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)_o(this,o,o+3),_o(this,o+1,o+2);return this};g.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)_o(this,o,o+7),_o(this,o+1,o+6),_o(this,o+2,o+5),_o(this,o+3,o+4);return this};g.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?cn(this,0,e):Wc.apply(this,arguments)};g.prototype.toLocaleString=g.prototype.toString;g.prototype.equals=function(e){if(!g.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:g.compare(this,e)===0};g.prototype.inspect=function(){var e="",o=Co.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};on&&(g.prototype[on]=g.prototype.inspect);g.prototype.compare=function(e,o,n,a,i){if(Pe(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),!g.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),a===void 0&&(a=0),i===void 0&&(i=this.length),o<0||n>e.length||a<0||i>this.length)throw new RangeError("out of range index");if(a>=i&&o>=n)return 0;if(a>=i)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,a>>>=0,i>>>=0,this===e)return 0;for(var l=i-a,m=n-o,d=Math.min(l,m),f=this.slice(a,i),u=e.slice(o,n),y=0;y<d;++y)if(f[y]!==u[y]){l=f[y],m=u[y];break}return l<m?-1:m<l?1:0};function sn(t,e,o,n,a){if(t.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,cr(o)&&(o=a?0:t.length-1),o<0&&(o=t.length+o),o>=t.length){if(a)return-1;o=t.length-1}else if(o<0)if(a)o=0;else return-1;if(typeof e=="string"&&(e=g.from(e,n)),g.isBuffer(e))return e.length===0?-1:tn(t,e,o,n,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(t,e,o):Uint8Array.prototype.lastIndexOf.call(t,e,o):tn(t,[e],o,n,a);throw new TypeError("val must be string, number or Buffer")}function tn(t,e,o,n,a){var i=1,l=t.length,m=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;i=2,l/=2,m/=2,o/=2}function d(b,T){return i===1?b[T]:b.readUInt16BE(T*i)}var f;if(a){var u=-1;for(f=o;f<l;f++)if(d(t,f)===d(e,u===-1?0:f-u)){if(u===-1&&(u=f),f-u+1===m)return u*i}else u!==-1&&(f-=f-u),u=-1}else for(o+m>l&&(o=l-m),f=o;f>=0;f--){for(var y=!0,v=0;v<m;v++)if(d(t,f+v)!==d(e,v)){y=!1;break}if(y)return f}return-1}g.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};g.prototype.indexOf=function(e,o,n){return sn(this,e,o,n,!0)};g.prototype.lastIndexOf=function(e,o,n){return sn(this,e,o,n,!1)};function qc(t,e,o,n){o=Number(o)||0;var a=t.length-o;n?(n=Number(n),n>a&&(n=a)):n=a;var i=e.length;n>i/2&&(n=i/2);for(var l=0;l<n;++l){var m=parseInt(e.substr(l*2,2),16);if(cr(m))return l;t[o+l]=m}return l}function zc(t,e,o,n){return it(ar(e,t.length-o),t,o,n)}function $c(t,e,o,n){return it(oi(e),t,o,n)}function Zc(t,e,o,n){return it(_n(e),t,o,n)}function Kc(t,e,o,n){return it(ti(e,t.length-o),t,o,n)}g.prototype.write=function(e,o,n,a){if(o===void 0)a="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")a=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,a===void 0&&(a="utf8")):(a=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-o;if((n===void 0||n>i)&&(n=i),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var l=!1;;)switch(a){case"hex":return qc(this,e,o,n);case"utf8":case"utf-8":return zc(this,e,o,n);case"ascii":case"latin1":case"binary":return $c(this,e,o,n);case"base64":return Zc(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Kc(this,e,o,n);default:if(l)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),l=!0}};g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Hc(t,e,o){return e===0&&o===t.length?tr.fromByteArray(t):tr.fromByteArray(t.slice(e,o))}function cn(t,e,o){o=Math.min(t.length,o);for(var n=[],a=e;a<o;){var i=t[a],l=null,m=i>239?4:i>223?3:i>191?2:1;if(a+m<=o){var d,f,u,y;switch(m){case 1:i<128&&(l=i);break;case 2:d=t[a+1],(d&192)===128&&(y=(i&31)<<6|d&63,y>127&&(l=y));break;case 3:d=t[a+1],f=t[a+2],(d&192)===128&&(f&192)===128&&(y=(i&15)<<12|(d&63)<<6|f&63,y>2047&&(y<55296||y>57343)&&(l=y));break;case 4:d=t[a+1],f=t[a+2],u=t[a+3],(d&192)===128&&(f&192)===128&&(u&192)===128&&(y=(i&15)<<18|(d&63)<<12|(f&63)<<6|u&63,y>65535&&y<1114112&&(l=y))}}l===null?(l=65533,m=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|l&1023),n.push(l),a+=m}return Rc(n)}var rn=4096;function Rc(t){var e=t.length;if(e<=rn)return String.fromCharCode.apply(String,t);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,t.slice(n,n+=rn));return o}function Xc(t,e,o){var n="";o=Math.min(t.length,o);for(var a=e;a<o;++a)n+=String.fromCharCode(t[a]&127);return n}function jc(t,e,o){var n="";o=Math.min(t.length,o);for(var a=e;a<o;++a)n+=String.fromCharCode(t[a]);return n}function Jc(t,e,o){var n=t.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var a="",i=e;i<o;++i)a+=ri[t[i]];return a}function Yc(t,e,o){for(var n=t.slice(e,o),a="",i=0;i<n.length-1;i+=2)a+=String.fromCharCode(n[i]+n[i+1]*256);return a}g.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var a=this.subarray(e,o);return Object.setPrototypeOf(a,g.prototype),a};function R(t,e,o){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>o)throw new RangeError("Trying to access beyond buffer length")}g.prototype.readUintLE=g.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||R(e,o,this.length);for(var a=this[e],i=1,l=0;++l<o&&(i*=256);)a+=this[e+l]*i;return a};g.prototype.readUintBE=g.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||R(e,o,this.length);for(var a=this[e+--o],i=1;o>0&&(i*=256);)a+=this[e+--o]*i;return a};g.prototype.readUint8=g.prototype.readUInt8=function(e,o){return e=e>>>0,o||R(e,1,this.length),this[e]};g.prototype.readUint16LE=g.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||R(e,2,this.length),this[e]|this[e+1]<<8};g.prototype.readUint16BE=g.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||R(e,2,this.length),this[e]<<8|this[e+1]};g.prototype.readUint32LE=g.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||R(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};g.prototype.readUint32BE=g.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||R(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};g.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||R(e,o,this.length);for(var a=this[e],i=1,l=0;++l<o&&(i*=256);)a+=this[e+l]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*o)),a};g.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||R(e,o,this.length);for(var a=o,i=1,l=this[e+--a];a>0&&(i*=256);)l+=this[e+--a]*i;return i*=128,l>=i&&(l-=Math.pow(2,8*o)),l};g.prototype.readInt8=function(e,o){return e=e>>>0,o||R(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};g.prototype.readInt16LE=function(e,o){e=e>>>0,o||R(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};g.prototype.readInt16BE=function(e,o){e=e>>>0,o||R(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};g.prototype.readInt32LE=function(e,o){return e=e>>>0,o||R(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};g.prototype.readInt32BE=function(e,o){return e=e>>>0,o||R(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};g.prototype.readFloatLE=function(e,o){return e=e>>>0,o||R(e,4,this.length),wo.read(this,e,!0,23,4)};g.prototype.readFloatBE=function(e,o){return e=e>>>0,o||R(e,4,this.length),wo.read(this,e,!1,23,4)};g.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||R(e,8,this.length),wo.read(this,e,!0,52,8)};g.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||R(e,8,this.length),wo.read(this,e,!1,52,8)};function de(t,e,o,n,a,i){if(!g.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<i)throw new RangeError('"value" argument is out of bounds');if(o+n>t.length)throw new RangeError("Index out of range")}g.prototype.writeUintLE=g.prototype.writeUIntLE=function(e,o,n,a){if(e=+e,o=o>>>0,n=n>>>0,!a){var i=Math.pow(2,8*n)-1;de(this,e,o,n,i,0)}var l=1,m=0;for(this[o]=e&255;++m<n&&(l*=256);)this[o+m]=e/l&255;return o+n};g.prototype.writeUintBE=g.prototype.writeUIntBE=function(e,o,n,a){if(e=+e,o=o>>>0,n=n>>>0,!a){var i=Math.pow(2,8*n)-1;de(this,e,o,n,i,0)}var l=n-1,m=1;for(this[o+l]=e&255;--l>=0&&(m*=256);)this[o+l]=e/m&255;return o+n};g.prototype.writeUint8=g.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||de(this,e,o,1,255,0),this[o]=e&255,o+1};g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||de(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||de(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||de(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||de(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};g.prototype.writeIntLE=function(e,o,n,a){if(e=+e,o=o>>>0,!a){var i=Math.pow(2,8*n-1);de(this,e,o,n,i-1,-i)}var l=0,m=1,d=0;for(this[o]=e&255;++l<n&&(m*=256);)e<0&&d===0&&this[o+l-1]!==0&&(d=1),this[o+l]=(e/m>>0)-d&255;return o+n};g.prototype.writeIntBE=function(e,o,n,a){if(e=+e,o=o>>>0,!a){var i=Math.pow(2,8*n-1);de(this,e,o,n,i-1,-i)}var l=n-1,m=1,d=0;for(this[o+l]=e&255;--l>=0&&(m*=256);)e<0&&d===0&&this[o+l+1]!==0&&(d=1),this[o+l]=(e/m>>0)-d&255;return o+n};g.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||de(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};g.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||de(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};g.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||de(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};g.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||de(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};g.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||de(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ln(t,e,o,n,a,i){if(o+n>t.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function mn(t,e,o,n,a){return e=+e,o=o>>>0,a||ln(t,e,o,4,34028234663852886e22,-34028234663852886e22),wo.write(t,e,o,n,23,4),o+4}g.prototype.writeFloatLE=function(e,o,n){return mn(this,e,o,!0,n)};g.prototype.writeFloatBE=function(e,o,n){return mn(this,e,o,!1,n)};function dn(t,e,o,n,a){return e=+e,o=o>>>0,a||ln(t,e,o,8,17976931348623157e292,-17976931348623157e292),wo.write(t,e,o,n,52,8),o+8}g.prototype.writeDoubleLE=function(e,o,n){return dn(this,e,o,!0,n)};g.prototype.writeDoubleBE=function(e,o,n){return dn(this,e,o,!1,n)};g.prototype.copy=function(e,o,n,a){if(!g.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!a&&a!==0&&(a=this.length),o>=e.length&&(o=e.length),o||(o=0),a>0&&a<n&&(a=n),a===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-o<a-n&&(a=e.length-o+n);var i=a-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,a):Uint8Array.prototype.set.call(e,this.subarray(n,a),o),i};g.prototype.fill=function(e,o,n,a){if(typeof e=="string"){if(typeof o=="string"?(a=o,o=0,n=this.length):typeof n=="string"&&(a=n,n=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!g.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){var i=e.charCodeAt(0);(a==="utf8"&&i<128||a==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var l;if(typeof e=="number")for(l=o;l<n;++l)this[l]=e;else{var m=g.isBuffer(e)?e:g.from(e,a),d=m.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(l=0;l<n-o;++l)this[l+o]=m[l%d]}return this};var Qc=/[^+/0-9A-Za-z-_]/g;function ei(t){if(t=t.split("=")[0],t=t.trim().replace(Qc,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function ar(t,e){e=e||1/0;for(var o,n=t.length,a=null,i=[],l=0;l<n;++l){if(o=t.charCodeAt(l),o>55295&&o<57344){if(!a){if(o>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(l+1===n){(e-=3)>-1&&i.push(239,191,189);continue}a=o;continue}if(o<56320){(e-=3)>-1&&i.push(239,191,189),a=o;continue}o=(a-55296<<10|o-56320)+65536}else a&&(e-=3)>-1&&i.push(239,191,189);if(a=null,o<128){if((e-=1)<0)break;i.push(o)}else if(o<2048){if((e-=2)<0)break;i.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;i.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;i.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return i}function oi(t){for(var e=[],o=0;o<t.length;++o)e.push(t.charCodeAt(o)&255);return e}function ti(t,e){for(var o,n,a,i=[],l=0;l<t.length&&!((e-=2)<0);++l)o=t.charCodeAt(l),n=o>>8,a=o%256,i.push(a),i.push(n);return i}function _n(t){return tr.toByteArray(ei(t))}function it(t,e,o,n){for(var a=0;a<n&&!(a+o>=e.length||a>=t.length);++a)e[a+o]=t[a];return a}function Pe(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function cr(t){return t!==t}var ri=function(){for(var t="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,a=0;a<16;++a)e[n+a]=t[o]+t[a];return e}()});var vn=at((xd,bn)=>{r();var q=bn.exports={},De,Be;function ir(){throw new Error("setTimeout has not been defined")}function lr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?De=setTimeout:De=ir}catch(t){De=ir}try{typeof clearTimeout=="function"?Be=clearTimeout:Be=lr}catch(t){Be=lr}})();function fn(t){if(De===setTimeout)return setTimeout(t,0);if((De===ir||!De)&&setTimeout)return De=setTimeout,setTimeout(t,0);try{return De(t,0)}catch(e){try{return De.call(null,t,0)}catch(o){return De.call(this,t,0)}}}function ni(t){if(Be===clearTimeout)return clearTimeout(t);if((Be===lr||!Be)&&clearTimeout)return Be=clearTimeout,clearTimeout(t);try{return Be(t)}catch(e){try{return Be.call(null,t)}catch(o){return Be.call(this,t)}}}var $e=[],Eo=!1,uo,lt=-1;function ai(){!Eo||!uo||(Eo=!1,uo.length?$e=uo.concat($e):lt=-1,$e.length&&gn())}function gn(){if(!Eo){var t=fn(ai);Eo=!0;for(var e=$e.length;e;){for(uo=$e,$e=[];++lt<e;)uo&&uo[lt].run();lt=-1,e=$e.length}uo=null,Eo=!1,ni(t)}}q.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];$e.push(new yn(t,e)),$e.length===1&&!Eo&&fn(gn)};function yn(t,e){this.fun=t,this.array=e}yn.prototype.run=function(){this.fun.apply(null,this.array)};q.title="browser";q.browser=!0;q.env={};q.argv=[];q.version="";q.versions={};function Ze(){}q.on=Ze;q.addListener=Ze;q.once=Ze;q.off=Ze;q.removeListener=Ze;q.removeAllListeners=Ze;q.emit=Ze;q.prependListener=Ze;q.prependOnceListener=Ze;q.listeners=function(t){return[]};q.binding=function(t){throw new Error("process.binding is not supported")};q.cwd=function(){return"/"};q.chdir=function(t){throw new Error("process.chdir is not supported")};q.umask=function(){return 0}});var p,s,Td,r=Qt(()=>{p=_(un()),s=_(vn()),Td=function(t){function e(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var Zo={};pt(Zo,{default:()=>gm});var wt,fm,gm,Ko=Qt(()=>{"use strict";r();wt=_(require("react")),fm=t=>wt.createElement("svg",h({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),wt.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),wt.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),gm=fm});var ma={};pt(ma,{default:()=>km});var It,Tm,km,da=Qt(()=>{"use strict";r();It=_(require("react")),Tm=t=>It.createElement("svg",h({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},t),It.createElement("g",null,It.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),km=Tm});var gd={};pt(gd,{Form:()=>fd});module.exports=So(gd);r();r();var M=_(require("react")),Jt=require("@terradharitri/sdk-core/out"),hc=_(require("classnames")),xc=require("formik");r();var pi=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pi));var x={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};r();r();var $o=_(require("react"));r();var mt=_(require("react")),Ed=(0,mt.createContext)({});r();r();var vo=_(require("react")),zl=require("@terradharitri/sdk-dapp/constants/index"),$l=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Zl=_(require("bignumber.js")),Kl=require("formik");r();r();r();var si=require("bech32");r();r();r();var pe=(t,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(t);r();r();var te=require("@terradharitri/sdk-dapp/types/tokens.types");var mr=t=>!["REWA","DCDT"].includes(t);r();r();var hn=require("@terradharitri/sdk-dapp/constants"),xn=require("@terradharitri/sdk-dapp/utils/account/getAccount");var Tn=t=>N(void 0,null,function*(){let e=t.txType==="REWA"?t.amount:hn.ZERO,o=mr(t.txType),n=yield(0,xn.getAccount)(t.receiver),a=n==null?void 0:n.username,i=o?t.senderUsername:a,l=E(h({},t),{amount:e,receiverUsername:i});return delete l.rawReceiverUsername,l});r();r();var dr=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),kn=({nft:t,skipDescription:e})=>{var S,C;let{name:o,metadata:n,media:a,isNsfw:i,scamInfo:l,verified:m}=t,d="Scam - ",{isSuspicious:f,message:u}=(0,dr.getScamFlag)({verified:m,message:o,isNsfw:i,scamInfo:l,messagePrefix:d});if(!(n!=null&&n.description)||e){let A=f?"placeholder":(S=a==null?void 0:a[0])==null?void 0:S.thumbnailUrl;return{isSuspicious:f,name:o||u,thumbnail:A,description:""}}let{message:y,isSuspicious:v}=(0,dr.getScamFlag)({message:n.description,messagePrefix:d,verified:m}),b=f||v,T=b?"placeholder":(C=a==null?void 0:a[0])==null?void 0:C.thumbnailUrl;return{isSuspicious:b,name:o||u,thumbnail:T,description:y||n.description}};r();var ci=require("@terradharitri/sdk-dapp/utils/buildUrlParams");r();var dt=_(require("anchorme")),_r=t=>t.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Sn=(t,e)=>{if(e){let o=`[Message hidden due to suspicious content - ${e.info}]`;if(t.length>1e3)return{output:o,stringWithLinks:t,found:!0};let n=_r(t.normalize("NFKC")),a=dt.default.list(n),i=[];if(a.length>0){let l=o;a.forEach((m,d)=>{let{string:f}=m,u="",y="",v=f;for(let b=0;b<l.length;b++){let T=l.slice(b),[S]=dt.default.list(_r(T));S&&f===S.string&&(u=l.substring(0,b))}for(let b=o.length;b>0;b--){let T=l.slice(0,b),[S]=dt.default.list(_r(T));S&&f===S.string&&(y=l.substring(b))}i.push(u),i.push(v),l=y,d===a.length-1&&i.push(y)})}else i.push(t);return{output:o,stringWithLinks:i.join(""),found:!0}}else return{output:t,stringWithLinks:"",found:!1}};r();r();var wn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),fo=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),ur=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),se=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");r();r();r();r();r();r();r();var go=_(require("react")),dl=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),_l=require("formik");r();r();var Wn=require("@terradharitri/sdk-dapp/constants/index"),Ai=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ni=_(require("bignumber.js"));r();r();var Uo=require("@terradharitri/sdk-dapp/constants/index");function _t({feeLimit:t,rewaPriceInUsd:e}){let o=(0,fo.formatAmount)({input:t,decimals:Uo.DECIMALS,digits:Uo.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,ur.getUsdValue)({amount:o,usd:e,decimals:Uo.DIGITS})}`}r();var li=require("@terradharitri/sdk-dapp/constants/index");r();r();var Cn="Token can only be transfered to one of the following addresses:",En="WREWA is not REWA! It can not be sent to exchanges. It can not be staked or delegated. It can not be used as transaction fee.";var Mo="5000000000000000",U="0",In="WREWA-bd4d79";r();var An=require("@terradharitri/sdk-dapp/constants/index"),di=_(require("bignumber.js"));r();var mi=require("@terradharitri/sdk-dapp/constants/index");r();var _i=require("@terradharitri/sdk-dapp/constants/index");r();r();var Ne=require("@terradharitri/sdk-core"),Nn=require("@terradharitri/sdk-dapp/constants/index"),Fn=_(require("bignumber.js"));function fr({amount:t,data:e,nonce:o,receiver:n,receiverUsername:a,sender:i,senderUsername:l,gasPrice:m,gasLimit:d,chainId:f}){let u=new Fn.default((0,se.parseAmount)(t));return new Ne.Transaction({nonce:o,value:Ne.TokenPayment.rewaFromBigInteger(u.toString(10)),sender:new Ne.Address(i),receiver:new Ne.Address(n),gasPrice:parseInt(m),gasLimit:parseInt(d),senderUsername:l,receiverUsername:a,data:new Ne.TransactionPayload(e),chainID:f,version:new Ne.TransactionVersion(Nn.VERSION)})}r();function Oo(t){return isNaN(Number(t))||t===""?(0,se.parseAmount)("0"):(0,se.parseAmount)(t)}function Ln(t){return N(this,null,function*(){let{address:e,balance:o,chainId:n,nonce:a,values:i}=t,{amount:l,receiver:m,data:d,gasLimit:f,gasPrice:u,nft:y,receiverUsername:v,senderUsername:b}=i,T=Boolean(y)?e:m;try{return fr({balance:o,amount:String(l),gasLimit:String(f),gasPrice:Oo(u),data:d.trim(),receiver:T,receiverUsername:v,senderUsername:b,sender:e,nonce:a,chainId:n})}catch(S){throw console.log("Prepare transaction error",S),S}})}r();var ui=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");r();var fi=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");r();var yi=_(require("bignumber.js"));r();var Ti=require("@terradharitri/sdk-dapp/constants/index"),ki=require("@terradharitri/sdk-dapp/utils/smartContracts"),Si=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),wi=_(require("bignumber.js"));r();var xi=_(require("bignumber.js"));r();r();var hi=_(require("axios"));r();r();r();var Bn=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");r();var Pn=require("@terradharitri/sdk-dapp/constants/index");r();var bi={D:"devnet",T:"testnet",1:"mainnet"},vi={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function ut(t){return bi[t]}function ft(t){return vi[t]||In}function Dn(t){let e=ut(t),o=Pn.fallbackNetworkConfigurations[e].apiAddress;if(!o)throw"Could not extract api address for environment, check if you have a valid chainID";return o}function gr(t){return N(this,null,function*(){let e=Dn(t);return yield(0,Bn.getServerConfiguration)(e)})}r();var gt={value:null};function Gn(t){return gt.value={baseURL:t.apiAddress,timeout:Number(t.apiTimeout)},gt.value}function Ge(t){return N(this,null,function*(){if(gt.value!=null)return gt.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),t!=null){let o=yield gr(t);return Gn(o)}let e="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(e),e})}r();var Ao=require("@terradharitri/sdk-dapp/constants/index"),On=_(require("bignumber.js"));var Vn,Un,Mn,Wo=(0,fo.formatAmount)({input:String((Vn=Ao.GAS_PRICE)!=null?Vn:1e9),decimals:(Un=Ao.DECIMALS)!=null?Un:18,showLastNonZeroDecimal:!0,digits:(Mn=Ao.DIGITS)!=null?Mn:4}),Ci=new On.default(Wo).times(10).toString(10);r();var vt=require("@terradharitri/sdk-dapp/constants/index"),Ei=_(require("bignumber.js"));r();var Ii=_(require("bignumber.js"));r();r();var $n=require("yup");r();var ht=require("@terradharitri/sdk-dapp/constants/ledger.constants"),qn=_(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),xt=require("yup"),Fi=(0,xt.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:o}=this.parent;return!(o&&e&&e.length&&!o.ledgerDataActive)}),Li=(0,xt.string)().test({name:"hashSign",test:function(e){let{ledger:o,isGuarded:n}=this.parent;if(o){let{ledgerWithHashSign:a,ledgerWithGuardians:i}=(0,qn.default)(o.version);if(e&&e.length>300&&!a)return this.createError({message:`Data too long. You need at least DharitrI app version ${ht.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(n&&!i)return this.createError({message:`You need at least DharitrI app version ${ht.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Pi=[Fi,Li],sf=Pi.reduce((t,e)=>t.concat(e),(0,xt.string)());r();var Di=require("@terradharitri/sdk-dapp/constants/index"),Bi=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Gi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Vi=require("yup");r();var Wi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),qi=_(require("bignumber.js")),zi=require("yup");r();var Ui=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Mi=_(require("bignumber.js")),Oi=require("yup");r();var $i=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Zi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ki=_(require("bignumber.js")),Hi=require("yup");r();var Ri=_(require("bignumber.js")),Xi=require("yup");r();var ji=require("@terradharitri/sdk-dapp/constants/index"),Ji=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Yi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Qi=_(require("bignumber.js")),el=require("yup");r();var ol=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),tl=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),rl=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),nl=_(require("bignumber.js")),al=require("yup");r();var pl=_(require("bignumber.js")),sl=require("yup");r();var cl=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),il=require("yup");r();var ll=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ml=require("yup");r();r();var ul=(0,go.createContext)({});function ve(){return(0,go.useContext)(ul)}r();r();var Ke=_(require("react")),Sl=require("formik"),wl=_(require("lodash/uniqBy"));r();r();r();var fl=_(require("axios"));r();r();var Zn=_(require("axios"));function Kn(){return N(this,null,function*(){try{let t=yield Ge(),{data:e}=yield Zn.default.get("economics",t);return e}catch(t){return console.error("err fetching economics info",t),null}})}r();r();var Hn=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),gl=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),yl=_(require("axios")),bl=_(require("lodash/uniqBy"));r();var vl=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),hl=_(require("axios"));r();var Rn=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),xl=_(require("axios"));r();r();var yo=_(require("react"));var Tl=(0,yo.createContext)({});function he(){return(0,yo.useContext)(Tl)}r();r();var kt=require("react"),Xn=require("@terradharitri/sdk-dapp/constants/index");var Tt=require("@terradharitri/sdk-dapp/types/enums.types");function vr(){let{networkConfig:t}=he(),[e,o]=(0,kt.useState)(0);function n(){return N(this,null,function*(){let a=yield Kn(),i=(a==null?void 0:a.price)||0;o(i)})}return(0,kt.useEffect)(()=>{![Tt.EnvironmentsEnum.mainnet,Tt.EnvironmentsEnum.testnet,Tt.EnvironmentsEnum.devnet].includes(t==null?void 0:t.id)||n()},[t==null?void 0:t.id]),{rewaLabel:t.rewaLabel,rewaPriceInUsd:e,digits:Xn.DIGITS}}r();var zy=(0,Ke.createContext)({});r();r();var oa=require("@terradharitri/sdk-dapp/constants/index"),ql=require("formik");r();r();var bo=_(require("react")),Qn=require("@terradharitri/sdk-dapp/constants/index"),Vl=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ul=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ml=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ol=_(require("bignumber.js")),Wl=require("formik");r();r();r();r();var Cl=_(require("bignumber.js"));r();var El=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Il=_(require("bignumber.js"));r();r();var Yn=require("react"),Nl=require("@terradharitri/sdk-dapp/constants/index"),Fl=require("@terradharitri/sdk-dapp/utils/smartContracts"),Ll=_(require("bignumber.js")),Pl=require("formik");r();var jn=require("react");r();r();var Dl=require("@terradharitri/sdk-dapp/constants/index"),Bl=_(require("bignumber.js"));var Rb=(0,bo.createContext)({});var Sv=(0,vo.createContext)({});r();r();var Fo=_(require("react")),Hl=require("formik");var Mv=(0,Fo.createContext)({});r();r();var ho=_(require("react")),om=require("formik");r();r();r();var ta=require("react"),jl=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Jl=_(require("lodash/uniqBy"));r();r();var Rl=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Xl=require("@terradharitri/sdk-dapp/utils");r();var em=require("react");r();var Yl=require("react"),Ql=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var tm=(0,ho.createContext)({});function St(){return(0,ho.useContext)(tm)}r();r();var qo=_(require("react")),lm=require("formik");r();r();var xr=({knownAddresses:t,inputValue:e,key:o})=>!t||!e?!1:t.some(a=>{var i;return Boolean((i=a[o])==null?void 0:i.startsWith(e))});r();r();r();var cm=require("react"),im=require("@terradharitri/sdk-dapp/utils");r();var pm=require("react"),sm=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");r();r();var rm=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),nm=_(require("axios"));r();var am=_(require("axios"));var mm=(0,qo.createContext)({});function zo(){return(0,qo.useContext)(mm)}var dm=(0,$o.createContext)({});function F(){return(0,$o.useContext)(dm)}r();r();var jo=_(require("react")),Pa=_(require("classnames"));r();r();r();var Y=_(require("react")),Fa=require("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");r();var Tr=_(require("react")),_m=require("@terradharitri/sdk-dapp/constants/index");r();var Ia=require("react");r();r();var He=_(require("react")),Et=require("@terradharitri/sdk-dapp/constants/index"),Sr=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),aa=require("@terradharitri/sdk-dapp/UI/UsdValue/index");r();r();var Ve=_(require("react")),ra=require("@fortawesome/free-solid-svg-icons"),na=require("@fortawesome/react-fontawesome"),kr=_(require("classnames"));r();var um=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-transform: uppercase;
  border-radius: 50%;
  min-width: 20px;
  min-height: 20px;
  border: 1px solid var(--dapp-form-select-icon-border);
  margin-right: 4px;
  position: relative;
  font-size: 6px;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar:before {
  content: "";
  border-radius: 50%;
  position: absolute;
  inset: 0;
  padding: 1px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar img {
  max-width: 100%;
  height: auto;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar.dapp-core-component__tokenAvatar-styles__tokenAvatarNFT {
  border: none;
  color: #fef08a;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar.dapp-core-component__tokenAvatar-styles__tokenAvatarNFT:before {
  background: linear-gradient(90deg, rgba(240, 152, 25, 0.4), rgba(237, 222, 93, 0.4));
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar.dapp-core-component__tokenAvatar-styles__tokenAvatarSFT {
  border: none;
  color: #fed7aa;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar.dapp-core-component__tokenAvatar-styles__tokenAvatarSFT:before {
  background: linear-gradient(90deg, rgba(240, 77, 25, 0.4), rgba(237, 136, 93, 0.4));
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(um));var to={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"};var ym=(Ko(),So(Zo)).default,Ct=t=>{let{avatar:e,type:o}=t;return o==="NonFungibleDCDT"?Ve.default.createElement("div",{className:(0,kr.default)(to.tokenAvatar,to.tokenAvatarNFT)},"NFT"):o==="SemiFungibleDCDT"?Ve.default.createElement("div",{className:(0,kr.default)(to.tokenAvatar,to.tokenAvatarSFT)},"SFT"):o==="REWA"?Ve.default.createElement("div",{className:to.tokenAvatar},t.RewaIcon?Ve.default.createElement(t.RewaIcon,null):Ve.default.createElement(ym,null)):e?Ve.default.createElement("div",{className:to.tokenAvatar},Ve.default.createElement("img",{src:e})):Ve.default.createElement("div",{className:to.tokenAvatar},Ve.default.createElement(na.FontAwesomeIcon,{icon:ra.faDiamond}))};r();var bm=`:root {
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
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__token {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__token .dapp-core-component__styles-module__value {
  font-size: 14px;
  font-weight: 500;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__price {
  font-size: 12px;
  color: var(--dapp-form-placeholder-color);
  line-height: 1;
  margin-top: 8px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bm));var Ho={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var pa=({label:t="Amount",amount:e,txType:o,tokenDecimals:n,tokenId:a,rewaLabel:i,rewaPriceInUsd:l,nft:m,tokenAvatar:d})=>{let f=(m==null?void 0:m.decimals)||0,u=o==="DCDT",y=o==="MetaDCDT",v=o==="NonFungibleDCDT",b=y?(0,se.parseAmount)(e,m==null?void 0:m.decimals):e,T=Boolean(m&&e),S=a.split("-")[0],C=u?n:Et.DECIMALS,A=T?He.default.createElement(Sr.FormatAmount,{rewaLabel:i,value:b,decimals:f,digits:o==="MetaDCDT"?Et.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):He.default.createElement(Sr.FormatAmount,{rewaLabel:i,value:(0,se.parseAmount)(e,C),showLabel:!1,decimals:C,showLastNonZeroDecimal:!0,token:u?S:i,"data-testid":"confirmAmount"});return v?null:He.default.createElement("div",{className:Ho.amount},He.default.createElement("span",{className:x.label},t),He.default.createElement("div",{className:Ho.token},He.default.createElement(Ct,{type:o,avatar:d}),He.default.createElement("div",{className:Ho.value},A," ",S)),!u&&He.default.createElement(aa.UsdValue,{amount:e,usd:l,"data-testid":"confirmUsdValue",className:Ho.price}))};r();r();var $=_(require("react")),sa=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");r();var vm=`:root {
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

.dapp-core-component__styles-module__data {
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__data .dapp-core-component__styles-module__value {
  min-height: 80px;
  font-size: 14px;
  padding: 12px;
  line-height: 1.25;
  border-radius: 6px;
  border: 1px solid var(--dapp-form-input-data-border);
  word-break: break-all;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vm));var Ro={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"};var hm=(t,e)=>[...t.matchAll(new RegExp(e,"gi"))].map(o=>o.index),ca=({label:t="Data",scCallLabel:e="SC Call",data:o,highlight:n,isScCall:a})=>{let i=$.default.createElement($.default.Fragment,null,o),[l,...m]=n&&a?n.split("@"):[];if(o&&n&&hm(o,n).length===1)switch(!0){case o.startsWith(n):{let[,d]=o.split(n);i=$.default.createElement($.default.Fragment,null,n,$.default.createElement("span",null,d));break}case o.endsWith(n):{let[d]=o.split(n);i=$.default.createElement($.default.Fragment,null,$.default.createElement("span",null,d),n);break}default:{let[d,f]=o.split(n);i=$.default.createElement($.default.Fragment,null,$.default.createElement("span",null,d),n,$.default.createElement("span",null,f));break}}return $.default.createElement($.default.Fragment,null,l&&$.default.createElement("div",{className:Ro.data},$.default.createElement("span",{className:x.label},e),$.default.createElement("div",{"data-testid":"confirmScCall",className:Ro.value},[(0,sa.decodePart)(l),...m].join("@"))),$.default.createElement("div",{className:Ro.data},$.default.createElement("span",{className:x.label},t),$.default.createElement("div",{"data-testid":"confirmData",className:Ro.value},o?i:"N/A")))};r();r();var ro=_(require("react")),ia=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");r();var xm=`:root {
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
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__token {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__token .dapp-core-component__styles-module__value {
  font-size: 14px;
  font-weight: 500;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__price {
  font-size: 12px;
  color: var(--dapp-form-placeholder-color);
  line-height: 1;
  margin-top: 8px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xm));var Xo={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var la=({rewaPriceInUsd:t,label:e="Fee",feeLimit:o,rewaLabel:n})=>ro.default.createElement("div",{className:Xo.fee},ro.default.createElement("span",{className:x.label},e),ro.default.createElement("div",{className:Xo.token},ro.default.createElement(Ct,{type:"REWA"}),ro.default.createElement("div",{className:Xo.value},ro.default.createElement(ia.FormatAmount,{rewaLabel:n,value:o,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),o!==U&&ro.default.createElement("span",{className:Xo.price},_t({feeLimit:o,rewaPriceInUsd:t})));r();r();var fe=_(require("react")),_a=require("@fortawesome/free-solid-svg-icons"),ua=require("@fortawesome/react-fontawesome"),fa=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),ga=require("@terradharitri/sdk-dapp/UI/CopyButton"),ya=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),ba=require("@terradharitri/sdk-dapp/UI/Trim"),va=_(require("classnames"));r();var{default:Re}=(da(),So(ma));r();var Sm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sm));var Fe={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"};var ha=({label:t="Receiver",receiver:e,scamReport:o,receiverUsername:n})=>{let a=Boolean(n),i=n!=null?n:e;return fe.default.createElement("div",{className:Fe.confirmReceiver},fe.default.createElement("span",{className:x.label},t),fe.default.createElement("span",{className:(0,va.default)(Fe.value,{[Fe.shrunk]:a}),"data-testid":"confirmReceiver"},a&&fe.default.createElement(Re,{className:Fe.icon}),i,a&&fe.default.createElement(ya.ExplorerLink,{page:`/${fa.ACCOUNTS_ENDPOINT}/${e}`,className:Fe.explorer})),a&&fe.default.createElement("span",{className:Fe.subValue},fe.default.createElement(ba.Trim,{text:e,className:Fe.subValueTrim}),fe.default.createElement(ga.CopyButton,{text:e,className:Fe.subValueCopy})),o&&fe.default.createElement("div",{className:Fe.scam},fe.default.createElement("span",null,fe.default.createElement(ua.FontAwesomeIcon,{icon:_a.faExclamationTriangle,className:Fe.icon}),fe.default.createElement("small",{"data-testid":"confirmScamReport"},o))))};r();r();var no=_(require("react"));r();r();var K=_(require("react")),xa=require("@fortawesome/free-solid-svg-icons"),Ta=require("@fortawesome/react-fontawesome"),ka=_(require("@terradharitri/sdk-dapp/constants/index")),Sa=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),wa=_(require("classnames"));r();var wm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wm));var xo={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};var Cm=(Ko(),So(Zo)).default,At=({RewaIcon:t,inDropdown:e=!1,isRewa:o,nftTokenDetails:n,nftType:a,token:i})=>{var A,B;let{name:l,identifier:m,balance:d,decimals:f}=i,u=((A=i.assets)==null?void 0:A.svgUrl)||((B=i.assets)==null?void 0:B.pngUrl)||"",y=u?28:20,[v,b]=(0,K.useState)(l);(0,K.useEffect)(()=>{var ne;((ne=n==null?void 0:n.uris)==null?void 0:ne.some(j=>{let le=p.Buffer.from(String(j),"base64").toString(),{found:_e}=Sn(le,n==null?void 0:n.scamInfo);return _e}))||b(l)},[l]);let T=K.default.createElement(Ta.FontAwesomeIcon,{icon:xa.faDiamond});a==te.NftEnumType.NonFungibleDCDT&&(T=K.default.createElement("div",{className:"nft-type","data-testid":`${m}-type-nft`},"NFT")),a===te.NftEnumType.SemiFungibleDCDT&&(T=K.default.createElement("div",{className:"nft-type","data-testid":`${m}-type-sft`},"SFT"));let S=!e&&a!==te.NftEnumType.NonFungibleDCDT,C=K.default.createElement("div",{className:xo.tokenElementCircle},T);return u&&(C=K.default.createElement("img",{className:xo.tokenElementCircle,src:u,alt:l,height:y})),o&&(C=K.default.createElement("div",{className:xo.tokenElementCircle},t?K.default.createElement(t,{height:36}):K.default.createElement(Cm,{height:36}))),K.default.createElement("div",{className:(0,wa.default)(x.value,xo.tokenElement)},K.default.createElement("div",{className:xo.tokenElementWrapper},C),K.default.createElement("div",{"data-testid":"tokenName"},K.default.createElement("span",{"data-testid":`${m}-element`},K.default.createElement("span",null,v)," ",K.default.createElement("span",{className:xo.tokenElementIdentifier},m)),S&&K.default.createElement(Sa.FormatAmount,{rewaLabel:m,value:d||U,digits:a===te.NftEnumType.SemiFungibleDCDT?0:ka.DIGITS,token:m,showLabel:!1,decimals:f,"data-testid":`${m}-balance`})))};r();var Em=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Em));var Ca={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"};var Ea=({RewaIcon:t,rewaLabel:e,isDcdtTransaction:o,nft:n,tokenAvatar:a,tokenId:i,tokenIdError:l})=>{var d;let m=(n==null?void 0:n.name)||"";return no.default.createElement("div",{className:Ca.token},no.default.createElement("span",{className:x.label},n?no.default.createElement("span",null,n==null?void 0:n.name," "):"","Token"),no.default.createElement("div",null,n?no.default.createElement(At,{inDropdown:!0,token:{name:n==null?void 0:n.name,identifier:n==null?void 0:n.identifier,decimals:0,balance:U,ticker:"",assets:{svgUrl:((d=n==null?void 0:n.assets)==null?void 0:d.svgUrl)||""}}}):no.default.createElement(At,{inDropdown:!0,token:{name:o?m:"DharitrI eGold",identifier:o?i:e,decimals:0,balance:U,ticker:"",assets:{svgUrl:a||""}},isRewa:i===e,RewaIcon:t})),l&&no.default.createElement("div",{className:x.error},l))};var ao=class extends Ia.Component{render(){return null}};ao.Receiver=ha,ao.Amount=pa,ao.Fee=la,ao.Data=ca,ao.Token=Ea;var Nt=ao;r();r();var Xe=_(require("react")),wr=_(require("classnames"));r();var Im=`.dapp-core-component__styles-module__preview {
  border-radius: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--dapp-form-nftsft-preview-bg);
}
.dapp-core-component__styles-module__preview.dapp-core-component__styles-module__clickable {
  cursor: pointer;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__image {
  min-width: 64px;
  min-height: 64px;
  max-width: 64px;
  max-height: 64px;
  height: auto;
  width: auto;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content {
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__left {
  gap: 8px;
  line-height: 1;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__left .dapp-core-component__styles-module__name {
  font-size: 12px;
  font-weight: 600;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__left .dapp-core-component__styles-module__identifier {
  color: var(--dapp-form-placeholder-color);
  font-size: 12px;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge {
  line-height: 1;
  font-weight: 500;
  font-size: 12px;
  padding: 4px 8px;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: var(--dapp-form-nftsft-preview-badge-bg);
  position: relative;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge:before {
  content: "";
  border-radius: 4px;
  position: absolute;
  inset: 0;
  padding: 1px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__nft {
  color: #fef08a;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__nft:before {
  background: linear-gradient(90deg, rgba(240, 152, 25, 0.4), rgba(237, 222, 93, 0.4));
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__sft {
  color: #fed7aa;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__sft:before {
  background: linear-gradient(90deg, rgba(240, 77, 25, 0.4), rgba(237, 136, 93, 0.4));
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Im));var xe={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"};var Ft=t=>{let u=t,{txType:e,onClick:o,identifier:n}=u,a=nt(u,["txType","onClick","identifier"]),{name:i,thumbnail:l}=kn({nft:a}),m=["NonFungibleDCDT","SemiFungibleDCDT"].includes(e),d=e==="NonFungibleDCDT"?"NFT":"SFT",f=y=>{y.preventDefault(),o&&o(y,Object.assign(a,{identifier:n}))};return m?Xe.default.createElement("div",{onClick:f,"data-testid":"token-preview",className:(0,wr.default)(xe.preview,{[xe.clickable]:Boolean(o)})},Xe.default.createElement("img",{src:l,className:xe.image}),Xe.default.createElement("div",{className:xe.content},Xe.default.createElement("div",{className:xe.left},Xe.default.createElement("div",{"data-testid":"token-preview-name",className:xe.name},i),Xe.default.createElement("div",{"data-testid":"token-preview-identifier",className:xe.identifier},n)),Xe.default.createElement("div",{className:xe.right},Xe.default.createElement("div",{className:(0,wr.default)(xe.badge,{[xe.nft]:e==="NonFungibleDCDT",[xe.sft]:e==="SemiFungibleDCDT"})},d)))):null};r();var Am=`:root {
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

.dapp-core-component__confirmScreen-module__summary {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__fields {
  gap: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__fields .dapp-core-component__confirmScreen-module__columns {
  display: flex;
  column-gap: 16px;
  row-gap: 32px;
  flex-wrap: wrap;
  align-items: flex-start;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__fields .dapp-core-component__confirmScreen-module__columns .dapp-core-component__confirmScreen-module__column {
  min-width: calc(50% - 8px);
  text-align: left;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
}
@media (min-width: 768px) {
  .dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__buttons {
    padding-top: 80px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Am));var je={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};r();r();var Lt=require("@terradharitri/sdk-dapp/types/enums.types"),Aa=({providerType:t,hasGuardianScreen:e})=>e?"Confirm & Continue":t===Lt.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":t===Lt.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":t===Lt.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";r();var Na=({receiverAddress:t,knownAddresses:e,existingReceiverUsername:o})=>{if(o)return o;let n=e==null?void 0:e.find(a=>a.address===t);return n==null?void 0:n.username};var La=({isConfirmCloseBtnVisible:t=!0,providerType:e})=>{var ge;let{setIsGuardianScreenVisible:o}=ve(),{receiverUsernameInfo:{receiverUsername:n},receiverInfo:{scamError:a,receiver:i,knownAddresses:l},formInfo:m,gasInfo:{gasCostError:d,feeLimit:f},accountInfo:{isGuarded:u},dataFieldInfo:{data:y},amountInfo:v,tokensInfo:b}=F(),{tokenId:T,tokenDetails:S,nft:C,rewaPriceInUsd:A,rewaLabel:B}=b,{readonly:G,onCloseForm:ne,onInvalidateForm:j,onPreviewClick:le,onSubmitForm:_e,txType:L,hasGuardianScreen:ae}=m,oe=()=>{o(!0)},[H,Ie]=(0,Y.useState)(!1),ue=L==="NonFungibleDCDT",I=Aa({providerType:e,hasGuardianScreen:ae}),P=ye=>{ye.preventDefault(),G?ne():j()},W=()=>{if(u&&ae)return oe();Ie(!0),_e()},me=!["REWA","DCDT","MetaDCDT"].includes(L),Ae=Na({knownAddresses:l,receiverAddress:i,existingReceiverUsername:n});return Y.default.createElement("div",{className:je.summary},Y.default.createElement("div",{className:je.fields},me&&C&&Y.default.createElement(Ft,h({onClick:le,txType:L},C)),Y.default.createElement(Fa.ConfirmReceiver,{amount:v.amount,scamReport:a!=null?a:null,receiver:i,receiverUsername:Ae}),Y.default.createElement("div",{className:je.columns},!ue&&Y.default.createElement("div",{className:je.column},Y.default.createElement(Nt.Amount,{txType:L,tokenId:T,tokenDecimals:S.decimals,amount:String(v.amount),nft:C,rewaPriceInUsd:A,rewaLabel:B,tokenLabel:S.name,tokenAvatar:((ge=S.assets)==null?void 0:ge.svgUrl)||""})),Y.default.createElement("div",{className:je.column},Y.default.createElement(Nt.Fee,{rewaLabel:B,rewaPriceInUsd:A,feeLimit:f}))),Y.default.createElement(Nt.Data,{data:y}),d&&Y.default.createElement("p",{className:x.error},d)),Y.default.createElement("div",{className:je.buttons},Y.default.createElement("button",{className:x.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:H,onClick:W},I),t&&Y.default.createElement("button",{className:x.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:P},G?"Close":"Back")))};var Da=t=>{let{formInfo:{setHasGuardianScreen:e}}=F();return(0,jo.useEffect)(()=>{t.hasGuardianScreen&&e(!0)},[]),jo.default.createElement("div",{className:(0,Pa.default)(je.confirm,t.className),"data-testid":"confirmScreen"},jo.default.createElement(La,h({},t)))};r();r();r();var D=_(require("react")),Vt=require("@fortawesome/free-solid-svg-icons"),Ar=require("@fortawesome/react-fontawesome"),Gt=_(require("classnames")),Tp=require("formik"),kp=_(require("react-select"));r();r();var Ba=_(require("react")),Ga=require("react-select");r();var Nm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nm));var k={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};var Va=t=>Ba.default.createElement(Ga.components.Control,E(h({},t),{className:k.receiverSelectControl}));r();r();var Jo=_(require("react")),za=require("@fortawesome/free-solid-svg-icons"),$a=require("@fortawesome/react-fontawesome"),Za=_(require("classnames")),Ka=require("react-select");r();r();var Lo=(t,e)=>{let o=e.toLowerCase(),n=t.label.toLowerCase(),a=t.value.toLowerCase();return e?n.includes(o)||a.includes(o):!0};r();var Ua=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Ma=require("@terradharitri/sdk-dapp/utils"),Cr=t=>t?t.filter(n=>(0,Ma.addressIsValid)(n.address)).map(n=>{let a=n.username?String((0,Ua.trimUsernameDomain)(n.username)):n.address;return{value:n.address,label:a}}):[];r();var Oa=({setOption:t,setAllValues:e})=>(n,a)=>{["input-blur","menu-close"].includes(a.action)||(e(n),n||t(null))};r();var Wa=({setInputValue:t,setOption:e,changeAndBlurInput:o})=>a=>{!a||(e(a),o(a.value),a.value!==a.label?t(a.label):t(a.value))};r();var qa=({options:t,usernameAccounts:e,knownAddresses:o,setFieldValue:n,setInputValue:a,setOption:i})=>m=>{var S,C,A,B;let d=t.find(G=>G.value===m&&G.value!==G.label),f=d==null?void 0:d.label,u,y,v=(S=e[m])==null?void 0:S.username;v&&(f=v,u=v,y=(C=e[m])==null?void 0:C.rawUsername);let b=o.find(G=>G.address===m);b!=null&&b.username&&(f=b==null?void 0:b.username,u=b==null?void 0:b.username,y=b==null?void 0:b.rawUsername);let T=f!=null?f:m;a(T),i({value:m,label:T}),n("receiver",(B=(A=e[m])==null?void 0:A.address)!=null?B:m),n("receiverUsername",u),n("rawReceiverUsername",y)};var Ha=t=>{let{selectProps:e,isDisabled:o,options:n}=t,{menuIsOpen:a,value:i,isLoading:l}=e,m=(0,Jo.useMemo)(()=>n.find(y=>{let v=y,b=i;return b?Lo(v,b.label):null}),[i,n]),d=n.length===0&&!l,f=Boolean(i)&&!m,u=o||d||f;return l?Jo.default.createElement($a.FontAwesomeIcon,{icon:za.faSpinner,spin:!0,className:k.receiverSelectSpinner}):Jo.default.createElement(Ka.components.DropdownIndicator,E(h({},t),{className:(0,Za.default)(k.receiverSelectIndicator,{[k.expanded]:a,[k.hidden]:u})}))};r();r();var Xa=_(require("react")),ja=require("@terradharitri/sdk-dapp/utils"),Ja=_(require("classnames")),Ya=require("react-select");r();r();var Ra=(t,e)=>{let o=t.current;if(!o||!o.state.focusedOption)return!1;let n=o.state.focusedOption,a=n.label.toLowerCase(),i=n.value.toLowerCase(),l=a!==i,m=l&&a.startsWith(e.toLowerCase());return l&&!e?!0:m};var Qa=t=>e=>{let{selectProps:o,value:n}=e,{inputValue:a,menuIsOpen:i}=o,{receiverUsernameInfo:{receiverUsername:l}}=F(),m=Ra(t,a),d=(0,ja.addressIsValid)(String(n)),f=Boolean(l)||m,u=d&&i||!d&&a;return Xa.default.createElement(Ya.components.Input,E(h({},e),{"data-testid":"receiver",className:(0,Ja.default)(k.receiverSelectInput,{[k.visible]:u,[k.spaced]:f})}))};r();r();var ep=_(require("react")),op=require("react-select");var tp=t=>ep.default.createElement(op.components.Menu,E(h({},t),{className:k.receiverSelectMenu}));r();r();var Q=_(require("react")),Pt=require("@terradharitri/sdk-dapp/UI/Trim"),Yo=_(require("classnames")),rp=require("react-select");var np=t=>{let{selectProps:e,focusedOption:o}=t,{value:n,inputValue:a}=e,i=o,l=i?i.label.toLowerCase():null,m=i&&i.label!==i.value,u=(l&&(!n||n&&a)?l.startsWith(a.toLowerCase()):!1)&&i?i.label.replace(i.label.substring(0,a.length),a):null,y=u&&!a,v=u&&a.length<u.length/2,b=u&&Boolean(a)&&v,T=u&&Boolean(a);return Q.default.createElement(Q.default.Fragment,null,b&&!m&&Q.default.createElement("div",{className:(0,Yo.default)(k.receiverSelectAutocomplete,k.receiverSelectAutocompleteUntrimmed)},u),T&&m&&Q.default.createElement("div",{className:(0,Yo.default)(k.receiverSelectAutocomplete,k.receiverSelectAutocompleteUsername)},Q.default.createElement(Re,{className:k.receiverSelectAutocompleteIcon}),u,Q.default.createElement("span",{className:k.receiverSelectAutocompleteWrapper},"(",Q.default.createElement(Pt.Trim,{text:i.value}),")")),y&&Q.default.createElement("span",{className:(0,Yo.default)(k.receiverSelectAutocomplete,{[k.receiverSelectAutocompleteUsername]:m})},m?Q.default.createElement(Q.default.Fragment,null,Q.default.createElement("span",null,Q.default.createElement(Re,{className:(0,Yo.default)(k.receiverSelectAutocompleteIcon,k.receiverSelectAutocompleteIconMuted)}),i.label),Q.default.createElement("span",{className:k.receiverSelectAutocompleteWrapper},"(",Q.default.createElement(Pt.Trim,{text:i.value}),")")):Q.default.createElement(Pt.Trim,{text:u})),Q.default.createElement(rp.components.MenuList,E(h({},t),{className:k.receiverSelectList})))};r();r();var Ue=_(require("react")),Er=require("@terradharitri/sdk-dapp/UI/Trim"),pp=_(require("classnames")),sp=require("react-select");r();r();var Qo=_(require("react"));r();var Fm=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fm));var ap={highlight:"dapp-core-component__styles-modules__highlight"};var Dt=({highlight:t,text:e=""})=>{let o=e.split(" "),n=t.toLowerCase(),a=new RegExp(`(${n})`,"gi"),i=o.map(l=>l.split(a).filter(m=>m));return Qo.default.createElement("span",{className:ap.highlight},i.map((l,m)=>{let d=`${l}-${m}`;return Qo.default.createElement("span",{key:d},l.map((f,u)=>{let y=f.toLowerCase()===n,v=n&&y,b=`${f}-${u}`;return v?Qo.default.createElement("strong",{key:b},f):Qo.default.createElement("span",{key:b},f)}))}))};var cp=t=>{let{isFocused:e,data:o,selectProps:n}=t,{inputValue:a}=n,i=o,l=i.value!==i.label;return Ue.default.createElement(sp.components.Option,E(h({},t),{className:(0,pp.default)(k.receiverSelectOption,{[k.focused]:e})}),l?Ue.default.createElement(Ue.default.Fragment,null,Ue.default.createElement("span",{className:k.receiverSelectOptionUsername},Ue.default.createElement(Re,{className:k.receiverSelectOptionUsernameIcon}),Ue.default.createElement(Dt,{text:i.label,highlight:a})),Ue.default.createElement("span",{className:k.receiverSelectOptionNameWrapper},"(",Ue.default.createElement(Er.Trim,{text:i.value,className:k.receiverSelectOptionName}),")")):Ue.default.createElement(Er.Trim,{text:i.value,className:k.receiverSelectOptionName}))};r();r();var ip=_(require("react")),lp=_(require("classnames")),mp=require("react-select");var dp=t=>{let{selectProps:e,isFocused:o,className:n}=t,{menuIsOpen:a}=e;return ip.default.createElement(mp.components.SelectContainer,E(h({},t),{className:(0,lp.default)(n,{[k.expanded]:a,[k.focused]:o&&a})}))};r();r();var Me=_(require("react")),Ir=require("@terradharitri/sdk-dapp/UI/Trim"),_p=require("@terradharitri/sdk-dapp/utils"),up=_(require("classnames")),fp=require("react-select");var gp=t=>{let{selectProps:e,isDisabled:o}=t,{value:n,menuIsOpen:a}=e,i=n,{receiverInfo:{receiver:l},receiverUsernameInfo:{receiverUsername:m}}=F(),d=m!=null?m:i&&i.value!==i.label,f=i?{value:l!=null?l:i.value,label:i.label}:null,u=f&&(d||!d&&!a)&&(0,_p.addressIsValid)(f.value);return Me.default.createElement(fp.components.ValueContainer,E(h({},t),{className:k.receiverSelectValue}),u&&Me.default.createElement("span",{className:(0,up.default)(k.receiverSelectSingle,{[k.disabled]:o})},d?Me.default.createElement(Me.default.Fragment,null,Me.default.createElement("span",{className:k.receiverSelectSingleUsername},Me.default.createElement(Re,{className:k.receiverSelectSingleUsernameIcon}),f.label),Me.default.createElement("span",{className:k.receiverSelectSingleTrimWrapper},"(",Me.default.createElement(Ir.Trim,{text:f.value,className:k.receiverSelectSingleTrim}),")")):Me.default.createElement(Ir.Trim,{text:f.value,className:k.receiverSelectSingleTrim})),t.children)};r();r();var yp=require("formik");var Bt=()=>{let{receiverInfo:{receiverError:t,isReceiverInvalid:e},receiverUsernameInfo:{receiverUsernameError:o,isReceiverUsernameInvalid:n,receiverUsername:a}}=F(),{touched:{receiver:i}}=(0,yp.useFormikContext)(),l=e&&i||n;return a!=null&&a.startsWith("drt1")?{isInvalid:e,receiverErrorDataTestId:"receiverError",error:t}:{isInvalid:l,receiverErrorDataTestId:n?"receiverUsernameError":"receiverError",error:n?o:t}};r();r();var vp=require("@terradharitri/sdk-dapp/utils"),hp=require("formik");r();r();var bp=({knownAddresses:t,inputValue:e})=>!t||!e?!1:t.filter(n=>{var m;let a=(m=n.username)!=null?m:n.address,i=n.address;return Lo({label:a,value:i,data:{label:a,value:i}},e)}).length>0;var xp=({menuIsOpen:t})=>{let{isInvalid:e}=Bt(),{values:{nft:o}}=(0,hp.useFormikContext)(),{showUsernameError:n,isUsernameLoading:a,isUsernameDebouncing:i,usernameIsAmongKnown:l,searchQueryIsAddress:m}=zo(),{receiverInputValue:d,knownAddresses:f}=St(),u=xr({key:"address",knownAddresses:f,inputValue:d}),y=bp({inputValue:d,knownAddresses:f}),v=m&&(!u||!t)&&!(0,vp.addressIsValid)(d),b=Boolean(n&&!(t&&u)&&!(t&&l));return{isAddressError:v||(o?e:!1),isUsernameError:b,isRequiredError:e&&!b&&!a&&!i&&!v&&!y&&!d,isReceiverDropdownOpened:d&&y&&t}};var Sp=t=>{let e=(0,D.useRef)(null),{className:o}=t,{setFieldValue:n}=(0,Tp.useFormikContext)(),{receiverInfo:{scamError:a,fetchingScamAddress:i,receiverInputValue:l,setReceiverInputValue:m,knownAddresses:d,receiver:f,onBlurReceiver:u,onChangeReceiver:y},receiverUsernameInfo:{receiverUsername:v},formInfo:{readonly:b}}=F(),[T,S]=(0,D.useState)(!1),[C,A]=(0,D.useState)(f?{label:f,value:f}:null),{receiverErrorDataTestId:B,error:G}=Bt(),{isAddressError:ne,isUsernameError:j,isRequiredError:le,isReceiverDropdownOpened:_e}=xp({menuIsOpen:T}),{usernameAccounts:L,isUsernameLoading:ae}=zo(),oe=()=>{u(new Event("blur"));let V=d==null?void 0:d.find(oo=>oo.username===l&&oo.address===f);V&&(n("receiver",V.address),n("receiverUsername",V.username),n("rawReceiverUsername",V.rawUsername))},H=d==null?void 0:d.find(V=>V.username===l&&V.address===f),Ie=(0,D.useMemo)(()=>Cr(d),[d]),ue=H?Cr([H]):Ie,I=qa({setFieldValue:n,setInputValue:m,setOption:A,options:ue,knownAddresses:d!=null?d:[],usernameAccounts:L}),P=(0,D.useCallback)(Oa({setAllValues:I,setOption:A}),[]),W=(0,D.useCallback)(V=>{y(V?V.trim():""),setTimeout(oe)},[]),me=Wa({changeAndBlurInput:W,setOption:A,setInputValue:m}),Ae=(0,D.useMemo)(()=>Qa(e),[e]);(0,D.useEffect)(()=>{if(!f)return;let V=Object.keys(L).find(oo=>{var Go;return((Go=L[oo])==null?void 0:Go.address)===f});I(V!=null?V:f),V&&m(V)},[L,f]);let ge=ne||j||le,ye=ge&&!T;return D.default.createElement("div",{className:(0,Gt.default)(k.receiver,o)},D.default.createElement("div",{className:x.label,"data-testid":"receiverLabel","data-loading":i},"Receiver"),D.default.createElement(kp.default,{value:C,onInputChange:P,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:pe("receiver",b),options:ue,filterOption:Lo,noOptionsMessage:()=>null,onChange:me,onBlur:oe,isMulti:!1,ref:e,inputValue:l,onMenuClose:()=>S(!1),onMenuOpen:()=>S(!0),components:{Menu:tp,Input:Ae,Control:Va,ValueContainer:gp,DropdownIndicator:Ha,SelectContainer:dp,MenuList:np,Option:cp,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,Gt.default)(k.receiverSelectContainer,{[k.opened]:_e,[k.invalid]:ge||a})}),ye&&D.default.createElement("div",{"data-testid":B,className:x.error},G),ae&&D.default.createElement("div",{className:k.loading},"Loading..."),v&&D.default.createElement("span",{className:k.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",D.default.createElement(Ar.FontAwesomeIcon,{icon:Vt.faCheck,className:k.foundIcon})),a&&D.default.createElement("div",{"data-testid":"receiverScam",className:(0,Gt.default)(x.error,x.scam)},D.default.createElement("span",null,D.default.createElement(Ar.FontAwesomeIcon,{icon:Vt.faExclamationTriangle}),D.default.createElement("small",null,a))))};r();r();var Te=_(require("react")),wp=_(require("bignumber.js")),Ut=_(require("classnames"));r();var Lm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Lm));var po={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"};var Cp=t=>{let{className:e}=t,{formInfo:{readonly:o},amountInfo:n,tokensInfo:a}=F(),{amount:i,error:l,onFocus:m,onBlur:d,onChange:f,isInvalid:u,onMaxClicked:y,maxAmountAvailable:v,isMaxButtonVisible:b}=n,{nft:T}=a,S=T!=null&&T.balance?new wp.default(T.balance).isGreaterThan(0):!1,C=A=>{A.preventDefault(),y()};return Te.default.createElement("div",{className:(0,Ut.default)(po.amount,e)},Te.default.createElement("div",{className:po.label},Te.default.createElement("label",{htmlFor:"amount",className:x.label},"Amount"),S&&T&&Te.default.createElement("div",{"data-value":`${v} ${T.identifier}`,className:(0,Ut.default)(po.balance,e)},Te.default.createElement("span",null,"Available:")," ",Te.default.createElement("span",{"data-testid":`available-${T.identifier}`,className:po.available},Te.default.createElement("span",{className:po.amount},v)," ",T.ticker))),Te.default.createElement("div",{className:po.wrapper},Te.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:i,disabled:pe("amount",o),onFocus:m,onBlur:d,onChange:f,autoComplete:"off",className:(0,Ut.default)(x.input,{[x.invalid]:u,[x.disabled]:pe("amount",o)})}),b&&Te.default.createElement("a",{href:"/","data-testid":"maxBtn",className:po.max,onClick:C,onMouseDown:A=>{A.preventDefault()}},"Max")),u&&Te.default.createElement("div",{className:x.error,"data-testid":"amountError"},l))};r();r();var ce=_(require("react")),Ot=require("@fortawesome/free-solid-svg-icons"),Pr=require("@fortawesome/react-fontawesome"),zp=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Dr=_(require("classnames")),$p=_(require("react-collapsed"));r();var Ye=_(require("react")),Fp=require("@fortawesome/free-solid-svg-icons"),Lp=require("@fortawesome/react-fontawesome"),Pp=_(require("bignumber.js")),Fr=_(require("classnames")),Dp=require("react-number-format");r();r();var so=require("@terradharitri/sdk-dapp/constants/index"),Ep=require("@terradharitri/sdk-dapp/utils/validation"),Je=_(require("bignumber.js")),Ip=(t,e)=>{let o=e!=null?e:so.DIGITS;if((0,Ep.stringIsFloat)(t)){if(new Je.default(t).isZero())return"0";let a=new Je.default(t).toFormat(o);return a=parseFloat(a)>0?a:new Je.default(t).toFormat(so.DIGITS),a=parseFloat(a)>0?a:new Je.default(t).toFormat(so.DIGITS+2),a=parseFloat(a)>0?a:new Je.default(t).toFormat(so.DIGITS+4),a=parseFloat(a)>0?a:new Je.default(t).toFormat(so.DIGITS+6),a=parseFloat(a)>0?a:new Je.default(t).toFormat(so.DIGITS+10),parseFloat(a)>0?a:new Je.default(t).toFormat(so.DIGITS+14)}return"0"};r();var Nr=t=>t.replace(/,/g,"");r();var Mt=require("react"),Pm={value:"",count:0},Ap=(t,e)=>{let[o,n]=(0,Mt.useState)(Pm);return(0,Mt.useEffect)(()=>{let i=setTimeout(()=>{n(t)},e);return()=>clearTimeout(i)},[t.count]),o};r();var Np=_(require("bignumber.js")),Po=t=>{let[e,o]=t.split(""),n=new Np.default(e).isZero();return Boolean(n&&o&&!(o==="."))};r();var Dm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Dm));var X={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"};var Bp=()=>{let{formInfo:t,gasInfo:e}=F(),{readonly:o}=t,{defaultGasLimit:n,onResetGasLimit:a,onChangeGasLimit:i,onBlurGasLimit:l,gasLimit:m,gasLimitError:d,isGasLimitInvalid:f}=e,u=S=>{S.preventDefault(),a()},y=({value:S,floatValue:C})=>(!C||!(0,Pp.default)(C).isNaN())&&!Po(S),v=S=>{i(S.value,!0)},b=m!==n&&!o,T=pe("gasLimit",o);return Ye.default.createElement("div",{className:X.gas},Ye.default.createElement("label",{className:x.label,htmlFor:"gasLimit"},"Gas Limit"),Ye.default.createElement("div",{className:X.wrapper},Ye.default.createElement(Dp.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:T,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:l,onValueChange:v,required:!0,isAllowed:y,thousandSeparator:",",thousandsGroupStyle:"thousand",value:m,valueIsNumericString:!0,allowNegative:!1,className:(0,Fr.default)(x.input,X.input,{[x.disabled]:T,[x.invalid]:f,[X.spaced]:b})}),b&&Ye.default.createElement("div",{className:X.actions},Ye.default.createElement("div",{onClick:u,"data-testid":"gasLimitResetBtn",className:(0,Fr.default)(X.action,{[X.disabled]:T})},Ye.default.createElement(Lp.FontAwesomeIcon,{icon:Fp.faUndo,className:X.icon}))),f&&Ye.default.createElement("div",{className:x.error,"data-testid":`${"gasLimit"}Error`},d)))};r();r();var Qe=_(require("react")),Gp=require("@fortawesome/free-solid-svg-icons"),Vp=require("@fortawesome/react-fontawesome"),Up=_(require("bignumber.js")),Lr=_(require("classnames")),Mp=require("react-number-format");var Op=()=>{let{networkConfig:t}=he(),{gasInfo:e,formInfo:o}=F(),{readonly:n}=o,{rewaLabel:a}=t,{gasPrice:i,gasPriceError:l,isGasPriceInvalid:m,onChangeGasPrice:d,onBlurGasPrice:f,onResetGasPrice:u}=e,y=i!==Wo&&!n,v=pe("gasPrice",n),b=({value:C,floatValue:A})=>(!A||!(0,Up.default)(A).isNaN())&&!Po(C),T=C=>{C.preventDefault(),u()},S=C=>{d(C.value,!0)};return Qe.default.createElement("div",{className:X.gas},Qe.default.createElement("label",{className:x.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),Qe.default.createElement("div",{className:X.wrapper},Qe.default.createElement(Mp.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:v,id:"gasPrice",inputMode:"decimal",isAllowed:b,name:"gasPrice",onBlur:f,onValueChange:S,required:!0,suffix:` ${a}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:i,valueIsNumericString:!0,allowNegative:!1,className:(0,Lr.default)(x.input,X.input,{[x.disabled]:v,[x.invalid]:m,[X.spaced]:y})}),y&&Qe.default.createElement("div",{className:X.actions},Qe.default.createElement("div",{onClick:T,className:(0,Lr.default)(X.action,{[X.disabled]:v})},Qe.default.createElement(Vp.FontAwesomeIcon,{icon:Gp.faUndo,className:X.icon})))),m&&Qe.default.createElement("div",{className:x.error,"data-testid":`${"gasPrice"}Error`},l))};r();var Wp=_(require("react"));r();var Bm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bm));var Oe={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"};var qp=({feeLimit:t,rewaPriceInUsd:e})=>t===U?null:Wp.default.createElement("span",{className:Oe.fiat,"data-testid":"feeInFiat"},"(",_t({feeLimit:t,rewaPriceInUsd:e}),")");var Zp=({className:t})=>{let{gasInfo:e,tokensInfo:o}=F(),{feeLimit:n,gasCostLoading:a,gasPriceError:i,gasLimitError:l}=e,{rewaPriceInUsd:m,rewaLabel:d}=o,[f,u]=(0,ce.useState)(Boolean(i||l)),{getCollapseProps:y,getToggleProps:v}=(0,$p.default)({isExpanded:f}),b=()=>{u(T=>!T)};return ce.default.createElement("div",{className:(0,Dr.default)(Oe.fee,t)},ce.default.createElement("label",{className:x.label},"Fee"),ce.default.createElement("div",h({className:Oe.trigger},v({onClick:b})),ce.default.createElement("span",{className:Oe.limit,"data-testid":"feeLimit"},ce.default.createElement(zp.FormatAmount,{value:n,showLastNonZeroDecimal:!0,rewaLabel:d})),a&&ce.default.createElement(Pr.FontAwesomeIcon,{icon:Ot.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),ce.default.createElement(qp,{rewaPriceInUsd:m,feeLimit:n}),ce.default.createElement(Pr.FontAwesomeIcon,{icon:Ot.faChevronRight,className:(0,Dr.default)(Oe.arrow,{[Oe.active]:f})})),ce.default.createElement("div",h({className:Oe.expandable},y()),ce.default.createElement("div",{className:Oe.content},ce.default.createElement(Op,null),ce.default.createElement(Bp,null))))};r();r();var Vm=_(require("react")),Um=_(require("@terradharitri/sdk-dapp/constants/index")),Mm=_(require("classnames")),Kp=_(require("react-select"));r();var Gm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gm));r();r();var Se=_(require("react")),Ht=_(require("classnames"));r();var Om=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Om));var We={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};r();r();r();var O=_(require("react")),Rp=require("@terradharitri/sdk-dapp/utils/validation"),Wt=_(require("bignumber.js")),Br=_(require("classnames")),Xp=require("react-number-format");r();var Wm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wm));var et={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};var qm=500,Hp=1e13,zm=({"data-testid":t,InfoDustComponent:e,disabled:o,handleBlur:n,handleChange:a,name:i,onDebounceChange:l,onFocus:m,onKeyDown:d,placeholder:f,required:u,usdPrice:y,value:v,usdValue:b,className:T,autoFocus:S,suffix:C})=>{let A=(0,O.useRef)(null),[B,G]=(0,O.useState)(),[ne,j]=(0,O.useState)(!1),[le,_e]=(0,O.useState)({value:v,count:0}),[L,ae]=(0,O.useState)(),oe=Ap(le,qm),H=I=>{I.stopPropagation(),j(!0);let P=Nr(I.target.value),W=(0,Wt.default)(P).isLessThanOrEqualTo(Hp);if((P===""||W)&&(G(P),I.target.value=P,a(I),l)){let me={value:P,count:le.count+1};_e(me)}},Ie=()=>{if(b)return ae(`$${b}`);if(!y||!v)return ae(void 0);let I=Nr(v);if(!(v!==""&&(0,Rp.stringIsFloat)(I))||I==="")return ae(void 0);let W=Ip(new Wt.default(I).times(y!=null?y:0).toString(10),2);ae(`$${W}`)},ue=({value:I,floatValue:P})=>(!P||(0,Wt.default)(P).isLessThanOrEqualTo(Hp))&&!Po(I);return(0,O.useEffect)(()=>{l&&ne&&(j(!1),l(oe.value))},[oe]),(0,O.useEffect)(Ie,[v,b,y]),(0,O.useEffect)(()=>{v!==B&&G(v)},[v]),O.default.createElement("div",{ref:A,className:(0,Br.default)(et.amountHolder,{[et.showUsdValue]:Boolean(L)},T)},O.default.createElement(Xp.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":t||i,decimalSeparator:".",disabled:Boolean(o),id:i,inputMode:"decimal",isAllowed:ue,name:i,onBlur:n,onChange:H,onFocus:m,onKeyDown:d,placeholder:f,required:u,thousandSeparator:",",thousandsGroupStyle:"thousand",value:B,suffix:C,valueIsNumericString:!0,allowNegative:!1,autoFocus:S,className:(0,Br.default)(x.input,et.amountInput,{[x.disabled]:Boolean(o)})}),L&&O.default.createElement("span",{className:et.amountHolderUsd},O.default.createElement("small",{"data-testid":`tokenPrice_${y}`},L!=="$0"?O.default.createElement(O.default.Fragment,null,"\u2248 "):O.default.createElement(O.default.Fragment,null),L),e))},jp=(0,O.memo)(zm,(t,e)=>t.value===e.value&&t.usdPrice===e.usdPrice&&t.className===e.className&&t.disabled===e.disabled&&t.usdValue===e.usdValue);r();r();var Gr=_(require("react"));r();r();var Do=_(require("react")),Jp=require("@fortawesome/free-solid-svg-icons"),Yp=require("@fortawesome/react-fontawesome"),Qp=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),es=require("react-tooltip"),N1=require("react-tooltip/dist/react-tooltip.css");r();var $m=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($m));var qt={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"};var os=({rewaLabel:t})=>Do.default.createElement("div",{className:qt.infoDust},Do.default.createElement(es.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:qt.infoDustTooltip},"A minimal amount of"," ",Do.default.createElement(Qp.FormatAmount,{rewaLabel:t,value:Mo,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),Do.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:qt.infoDustTrigger},Do.default.createElement(Yp.FontAwesomeIcon,{icon:Jp.faInfoCircle,className:"i-icon"})));var ts=({rewaLabel:t,amount:e,maxAmountMinusDust:o,isMaxClicked:n,tokenId:a})=>e===o&&n&&a===t?Gr.default.createElement("span",{style:{marginLeft:"0.2rem"}},Gr.default.createElement(os,{rewaLabel:t})):null;r();r();var ss=_(require("react")),cs=require("@terradharitri/sdk-dapp/constants"),Ur=_(require("bignumber.js")),is=_(require("classnames"));r();var Vr=_(require("bignumber.js"));var rs=t=>{let e=new Vr.default(t!=null?t:"0"),o=new Vr.default(Mo),n=e.minus(o);return n.isGreaterThan(0)?n.toString(10):"0"};r();var Zm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zm));var ns={max:"dapp-core-component__maxButton-module__max"};r();var co=require("@terradharitri/sdk-dapp/constants"),as=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),ps=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Bo=({amount:t="0",decimals:e=0,digits:o=co.DIGITS,addCommas:n=!1,showLastNonZeroDecimal:a=!1})=>{if(t==null||!(0,ps.stringIsInteger)(t))return"0";let i=m=>(0,as.formatAmount)({input:t,digits:m,decimals:e,addCommas:n,showLastNonZeroDecimal:a}),l=i(o);return l=parseFloat(l)>0?l:i(co.DIGITS),l=parseFloat(l)>0?l:i(co.DIGITS+2),l=parseFloat(l)>0?l:i(co.DIGITS+4),l=parseFloat(l)>0?l:i(co.DIGITS+6),l=parseFloat(l)>0?l:i(co.DIGITS+10),parseFloat(l)>0?l:i(co.DIGITS+14)};var ls=({token:t,rewaLabel:e,inputAmount:o,className:n,onMaxClick:a})=>{var u;let i=(t==null?void 0:t.identifier)===e,l=(u=t==null?void 0:t.balance)!=null?u:"0";if(l==="0")return null;let m=Bo({amount:i?rs(l):l,decimals:(t==null?void 0:t.decimals)||cs.DECIMALS}),d=new Ur.default(o).isEqualTo(new Ur.default(m)),f=y=>{y.preventDefault(),a==null||a(m)};return d?null:ss.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,is.default)(ns.max,n),onClick:f,onMouseDown:y=>{y.preventDefault()}},"Max")};r();r();var ke=_(require("react")),$s=_(require("classnames")),Zs=_(require("react-select"));var zr={};pt(zr,{Control:()=>Jm,IndicatorsContainer:()=>Qm,Input:()=>Rm,Menu:()=>jm,MenuList:()=>Xm,DharitrIIcon:()=>Ws,Placeholder:()=>Ym,SmallLoader:()=>Km,ValueComponent:()=>Ps,getOption:()=>Wr,getSingleValue:()=>qr,getValueContainer:()=>Or});r();r();var Mr=_(require("react")),ms=require("@fortawesome/free-solid-svg-icons"),ds=require("@fortawesome/react-fontawesome"),Km=({show:t,color:e})=>t?Mr.default.createElement("div",{className:"d-flex"},Mr.default.createElement(ds.FontAwesomeIcon,{icon:ms.faSpinner,className:`fa-spin fast-spin ${e||"text-primary"}`})):null;r();r();var _s=_(require("react")),us=require("react-select");r();var Hm=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hm));var w={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var Rm=t=>_s.default.createElement(us.components.Input,E(h({},t),{className:w.dropdown,"data-testid":"tokenSelectInput"}));r();var fs=_(require("react")),gs=require("react-select");var Xm=t=>{let n=t,{rx:e}=n,o=nt(n,["rx"]);return fs.default.createElement(gs.components.MenuList,E(h({},o),{className:w.list}))};r();var zt=_(require("react")),ys=require("@fortawesome/free-solid-svg-icons"),bs=require("@fortawesome/react-fontawesome"),vs=require("react-select");var jm=t=>zt.default.createElement(vs.components.Menu,E(h({},t),{className:w.menu}),t.selectProps.isLoading?zt.default.createElement("div",{className:w.loading},zt.default.createElement(bs.FontAwesomeIcon,{icon:ys.faCircleNotch,className:"fa-spin",size:"lg"})):t.children);r();var hs=_(require("react")),xs=require("react-select");var Jm=t=>hs.default.createElement(xs.components.Control,E(h({},t),{className:w.control}));r();var Ts=_(require("react")),ks=_(require("classnames")),Ss=require("react-select");var Ym=t=>Ts.default.createElement(Ss.components.Placeholder,E(h({},t),{className:(0,ks.default)(w.placeholder,{[w.focused]:t.isFocused})}));r();var ws=_(require("react")),Cs=_(require("classnames")),Es=require("react-select");var Qm=t=>ws.default.createElement(Es.components.IndicatorsContainer,E(h({},t),{className:(0,Cs.default)(w.indicator,{[w.expanded]:t.selectProps.menuIsOpen})}));r();var ie=_(require("react")),Is=require("@fortawesome/free-solid-svg-icons"),As=require("@fortawesome/react-fontawesome"),Ns=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Fs=_(require("classnames")),Ls=require("react-select");var ed=(Ko(),So(Zo)).default,Ps=({RewaIcon:t,tokenId:e,icon:o})=>{let{isRewa:n}=(0,Ns.getIdentifierType)(e);return n?ie.default.createElement("span",{className:w.asset},t?ie.default.createElement(t,{className:w.diamond}):ie.default.createElement(ed,{className:w.diamond})):o?ie.default.createElement("img",{src:o,className:w.asset}):ie.default.createElement(As.FontAwesomeIcon,{icon:Is.faDiamond,className:w.asset})},od=({children:t})=>ie.default.createElement("div",{className:w.wrapper},t),Or=(t,e,o)=>n=>{var u,y;let{selectProps:a,isDisabled:i,children:l}=n,m=a.value,d=(y=(u=m==null?void 0:m.assets)==null?void 0:u.svgUrl)!=null?y:null,f=(0,ie.useMemo)(()=>{let v=String(m==null?void 0:m.token.usdPrice);return v!=null&&v.includes("$")?m==null?void 0:m.token.usdPrice:`$${m==null?void 0:m.token.usdPrice}`},[m==null?void 0:m.token.usdPrice]);return ie.default.createElement(Ls.components.ValueContainer,E(h({},n),{className:w.container}),ie.default.createElement("div",{className:(0,Fs.default)(w.icon,e)},ie.default.createElement(Ps,{RewaIcon:o,rewaLabel:t,icon:d,isDisabled:i,tokenId:m==null?void 0:m.value})),ie.default.createElement("div",{className:w.payload},ie.default.createElement(od,null,l,(m==null?void 0:m.token.usdPrice)&&ie.default.createElement("small",{className:w.price},f))))};r();var Z=_(require("react")),Ds=require("@fortawesome/free-solid-svg-icons"),Bs=require("@fortawesome/react-fontawesome"),Gs=require("@terradharitri/sdk-dapp/constants"),Vs=require("@terradharitri/sdk-dapp/UI/UsdValue"),Us=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ms=_(require("classnames")),Os=require("react-select");var{default:Ws}=(Ko(),So(Zo)),Wr=({RewaIcon:t,TokenTickerIcon:e,showBalanceUsdValue:o,showTokenPrice:n})=>a=>{var C,A,B,G;let{data:i,isSelected:l,isFocused:m,isDisabled:d,selectProps:f}=a,u=i,{isRewa:y}=(0,Us.getIdentifierType)(u.value),v=u.token.assets?u.token.assets.svgUrl:null,b=Bo({amount:u.token.balance,decimals:u.token.decimals||Gs.DECIMALS,addCommas:!0}),T=(A=(C=u.token)==null?void 0:C.usdPrice)==null?void 0:A.toString(),S=(G=(B=u.token)==null?void 0:B.valueUSD)==null?void 0:G.toString();return Z.default.createElement("div",{"data-testid":`${a.value}-option`},Z.default.createElement(Os.components.Option,E(h({},a),{className:(0,Ms.default)(w.option,{[w.selected]:l||m,[w.disabled]:d})}),Z.default.createElement("div",{className:w.image},y?Z.default.createElement("span",{className:w.icon},t?Z.default.createElement(t,null):Z.default.createElement(Ws,null)):v?Z.default.createElement("img",{src:v,className:w.icon}):Z.default.createElement("span",{className:w.icon},Z.default.createElement(Bs.FontAwesomeIcon,{icon:Ds.faDiamond,className:w.diamond}))),Z.default.createElement("div",{className:w.info},Z.default.createElement("div",{className:w.left},Z.default.createElement("div",{className:w.ticker},Z.default.createElement("span",{className:w.value},f.inputValue?Z.default.createElement(Dt,{text:u.token.ticker,highlight:f.inputValue}):u.token.ticker),e&&Z.default.createElement(e,{token:u.token})),n&&Z.default.createElement("small",{className:w.price},T)),Z.default.createElement("div",{className:w.right},Z.default.createElement("span",{className:w.value},b),o&&S&&Z.default.createElement(Vs.UsdValue,{usd:1,decimals:4,amount:S,"data-testid":"token-price-usd-value",className:w.price,addEqualSign:!1}))),Z.default.createElement("div",{className:w.children},a.children)))};r();var $t=_(require("react")),qs=_(require("classnames")),zs=require("react-select");var qr=t=>e=>{let{selectProps:o,children:n}=e,a=o.value;return $t.default.createElement(zs.components.SingleValue,E(h({},e),{className:(0,qs.default)(w.single,{[w.focused]:e.selectProps.menuIsOpen})}),$t.default.createElement("div",{className:w.ticker},n,t&&$t.default.createElement(t,{token:a==null?void 0:a.token})))};var{Menu:td,Control:rd,Input:nd,MenuList:ad,IndicatorsContainer:pd,Placeholder:sd}=zr,Ks=t=>{let{name:e,options:o,isLoading:n=!1,className:a="",noOptionsMessage:i="No Tokens",disabledOption:l,rewaLabel:m,RewaIcon:d,disabled:f,value:u,onBlur:y,onFocus:v,onChange:b,onMenuOpen:T,chainId:S,wrapperClassName:C="",showTokenPrice:A=!1,showBalanceUsdValue:B=!1,selectedTokenIconClassName:G,TokenTickerIcon:ne}=t,j=(0,ke.useRef)(null),le=[m,ft(S)],_e=(0,ke.useMemo)(()=>Wr({rewaLabel:m,RewaIcon:d,showTokenPrice:A,showBalanceUsdValue:B,TokenTickerIcon:ne}),[]),L=(0,ke.useMemo)(()=>Or(m,G,d),[]),ae=(0,ke.useMemo)(()=>qr(ne),[]);(0,ke.useEffect)(()=>{let I=o.find(W=>W.value===(u==null?void 0:u.value)),P=(I==null?void 0:I.token.balance)===(u==null?void 0:u.token.balance);!I||P||b(I)},[o]);let H=I=>le.includes(I),Ie=I=>{var ge;let P=I.value===(l==null?void 0:l.value),W=H(I.value),me=H((ge=l==null?void 0:l.value)!=null?ge:"");return P||W&&me},ue=(I,P)=>{let W=I.data.token.ticker?I.data.token.ticker.toLowerCase().includes(P.toLowerCase()):!1,me=I.data.token.name.toLowerCase().includes(P.toLowerCase());return Boolean(P)?W||me:!0};return ke.default.createElement("div",{"data-testid":`${e}Select`,className:`${C} ${n?"select-holder-loading":""}`},ke.default.createElement("label",{htmlFor:e,"data-testid":"tokenIdLabel",className:w.label},"Token"),ke.default.createElement(Zs.default,{ref:j,inputId:e,name:e,options:o,openMenuOnFocus:!0,isDisabled:f,isLoading:n,value:u,isOptionDisabled:Ie,onBlur:y,filterOption:ue,onFocus:v,onChange:I=>{b(I),j&&j.current!==null&&j.current.blur()},isSearchable:t.isSearchable,maxMenuHeight:260,onMenuOpen:T,noOptionsMessage:()=>i,className:(0,$s.default)(w.select,a,{[w.disabled]:t.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:td,Control:rd,Input:nd,MenuList:ad,IndicatorsContainer:pd,ValueContainer:L,Placeholder:sd,Option:_e,SingleValue:ae}}))};r();r();var Hs=_(require("react")),Rs=_(require("classnames"));var Xs=({hasErrors:t,className:e,error:o,"data-testid":n})=>t?Hs.default.createElement("div",{className:(0,Rs.default)(x.error,e),"data-testid":n},o):null;r();r();var Kt=_(require("react")),js=_(require("classnames"));r();var cd=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cd));var Zt={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"};var Js=({label:t,value:e,className:o,token:n,"data-testid":a,"data-value":i})=>Kt.default.createElement("div",{"data-testid":a,"data-value":i,className:(0,js.default)(Zt.balance,o)},Kt.default.createElement("span",{className:Zt.label},t,": "),Kt.default.createElement("span",{className:Zt.value},e)," ",n==null?void 0:n.ticker);var Ys=({className:t,label:e,name:o,wrapperControlsClassName:n,tokenSelectProps:a,tokenBalanceProps:i,amountInputProps:l,amountErrorProps:m,maxButtonProps:d,readonly:f})=>Se.default.createElement("div",{className:(0,Ht.default)(We.amount,t)},Se.default.createElement("div",{className:We.label},e&&Se.default.createElement("label",{htmlFor:o,className:x.label,"data-testid":"amountLabel"},e),Se.default.createElement(Js,h({},i))),Se.default.createElement("div",{className:(0,Ht.default)(We.wrapper,n,{[We.error]:l.isInvalid||a.isInvalid||m.hasErrors,[We.disabled]:f})},Se.default.createElement(jp,h({},l)),Se.default.createElement("div",{className:(0,Ht.default)(We.interaction,d.wrapperClassName)},d.isMaxButtonVisible&&Se.default.createElement(ls,h({},d)),Se.default.createElement("div",{className:We.select},Se.default.createElement(Ks,h({},a))))),Se.default.createElement(Xs,h({},m)));r();var ot=_(require("react")),Qs=require("@terradharitri/sdk-dapp/constants"),ec=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");var oc=()=>{var Go,Hr;let{checkInvalid:t}=ve(),{tokensInfo:e,amountInfo:o,formInfo:n}=F(),{readonly:a}=n,{networkConfig:{rewaLabel:i,chainId:l}}=he(),{rewaPriceInUsd:m}=vr(),{amount:d,onBlur:f,onChange:u,onMaxClicked:y,error:v,isInvalid:b,onFocus:T,maxAmountAvailable:S,isMaxClicked:C,isMaxButtonVisible:A,maxAmountMinusDust:B}=o,{allAvailableTokens:G,areTokensLoading:ne,getTokens:j,isTokenIdInvalid:le,RewaIcon:_e,nft:L,onChangeTokenId:ae,tokenDetails:oe,tokenId:H,tokenIdError:Ie}=e,ue=G.map(qe=>({value:qe.identifier,label:String(qe.ticker),assets:qe.assets,token:qe})),{isRewa:I}=(0,ec.getIdentifierType)(H),P=ue.find(({value:qe})=>qe===H),W={id:"tokenId",value:P,name:"tokenId",isLoading:ne,options:ue,isSearchable:!0,onChange:qe=>{qe&&(ae(qe.value),u(""))},onMenuOpen:j,disabled:pe("tokenId",a),error:Ie,isInvalid:le,rewaLabel:i,chainId:l,RewaIcon:_e},me=(0,ot.useMemo)(()=>ot.default.createElement(ts,{amount:d,rewaLabel:i,maxAmountMinusDust:B,tokenId:H,isMaxClicked:C}),[d,i,B,H,C]),Ae={name:"amount",required:!0,value:d,placeholder:"Amount",handleBlur:f,"data-testid":"amount",handleChange:u,onFocus:T,usdPrice:I?m:void 0,error:v,isInvalid:b,InfoDustComponent:me},ge={token:oe,inputAmount:d,onMaxClick:y,isMaxClicked:C,isMaxButtonVisible:A},ye=t("amount")&&!Ae.value,V={hasErrors:Ae.isInvalid||W.isInvalid||ye,error:Ae.error||W.error,className:x.error,"data-testid":Ae.error?`${"amount"}Error`:`${"tokenId"}Error`},oo={"data-testid":`available-${(Go=L==null?void 0:L.identifier)!=null?Go:H}`,"data-value":`${S} ${(Hr=L==null?void 0:L.identifier)!=null?Hr:H}`,label:"Available",token:P==null?void 0:P.token,value:Bo({amount:oe.balance,decimals:oe.decimals||Qs.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(L==null?void 0:L.type)===te.NftEnumType.NonFungibleDCDT?null:ot.default.createElement(Ys,{name:"tokenId",amountErrorProps:V,tokenSelectProps:W,amountInputProps:Ae,tokenBalanceProps:oo,maxButtonProps:ge,label:"Amount",readonly:a})};r();r();var io=_(require("react")),Kr=_(require("classnames"));r();r();r();var we=_(require("react")),Xt=require("@fortawesome/free-solid-svg-icons"),$r=require("@fortawesome/react-fontawesome"),tc=require("formik");r();r();var Rt=()=>{let{formInfo:{isRewaTransaction:t,readonly:e},dataFieldInfo:{isAdvancedModeEnabled:o}}=F();return o?!1:!t||pe("data",e)};r();var id=`.dapp-core-component__styles-module__advanced {
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
  top: 0;
  color: var(--dapp-form-label-color);
  transition: all 200ms ease;
  right: 0;
  cursor: pointer;
  position: absolute;
}
.dapp-core-component__styles-module__advanced svg path {
  transition: all 200ms ease;
  fill: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__advanced:hover .dapp-core-component__styles-module__advanced-text {
  color: var(--dapp-form-btn-bg);
}
.dapp-core-component__styles-module__advanced:hover svg path {
  fill: var(--dapp-form-btn-bg);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(id));var tt={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"};var rc=()=>{let{formInfo:{readonly:t,isRewaTransaction:e}}=F(),{setFieldValue:o,values:n}=(0,tc.useFormikContext)(),[a,i]=(0,we.useState)(!1),[l,m]=(0,we.useState)(!1),d=Rt(),f=!a&&!t&&d&&Boolean(n.data),u=()=>{i(!0),o("isAdvancedModeEnabled",!0)},y=()=>{m(!0),setTimeout(()=>{m(!1)},5e3)};return(0,we.useEffect)(()=>{!e&&a&&i(!1)},[e,n.amount]),f?l?we.default.createElement("div",{className:tt.advanced,"data-testid":"confirmAdvancedMode",onClick:u},we.default.createElement($r.FontAwesomeIcon,{icon:Xt.faCheck,className:"i-icon"}),we.default.createElement("span",{className:tt.advancedText},"Confirm")):we.default.createElement("div",{"data-testid":"enableAdvancedMode",className:tt.advanced,onClick:y},we.default.createElement($r.FontAwesomeIcon,{icon:Xt.faScrewdriverWrench,className:"i-icon"}),we.default.createElement("span",{className:tt.advancedText},"Advanced")):null};r();var ld=`:root {
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

.dapp-core-component__styles-module__data {
  display: flex;
  position: relative;
}
.dapp-core-component__styles-module__data .dapp-core-component__styles-module__wrapper {
  display: flex;
  position: relative;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ld));var Zr={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"};var nc=({className:t})=>{let{dataFieldInfo:{data:e,dataError:o,isDataInvalid:n,onChange:a,onBlur:i}}=F(),l=Rt();return io.default.createElement("div",{className:(0,Kr.default)(Zr.data,t)},io.default.createElement("div",{className:We.label},io.default.createElement("label",{htmlFor:"data",className:x.label},"Data"),io.default.createElement(rc,null)),io.default.createElement("div",{className:Zr.wrapper},io.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:l,"data-testid":"data",value:e,onBlur:i,onChange:a,spellCheck:"false",placeholder:"Add transaction data",className:(0,Kr.default)(x.textarea,{[x.invalid]:n,[x.disabled]:l})})),n&&io.default.createElement("div",{className:x.error,"data-testid":"dataError"},o))};r();r();r();var eo=_(require("react")),lo=_(require("classnames"));r();var md=`:root {
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

.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange {
  position: relative;
  display: flex;
  margin: 10px 16px 30px 0;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange:after {
  width: 100%;
  left: 2px;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  position: absolute;
  background: var(--border-color);
  height: 4px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput {
  width: calc(100% + 16px);
  opacity: 0;
  z-index: 6;
  cursor: pointer;
  height: 1.25rem;
  margin-right: -16px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput.dapp-core-component__styles-module__disabled {
  pointer-events: none;
  cursor: default;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput:hover ~ .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  opacity: 1;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb {
  width: 16px;
  height: 16px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: var(--black);
  z-index: 5;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb.dapp-core-component__styles-module__disabled {
  background-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  line-height: 1;
  opacity: 0;
  transition: all 400ms ease;
  color: var(--white);
  font-weight: 500;
  position: absolute;
  left: 50%;
  padding: 0.25rem 0.35rem;
  background: var(--black);
  border-radius: var(--dapp-form-input-border-radius);
  font-size: 11px;
  transform: translateX(-50%);
  bottom: calc(100% + 0.25rem);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderCompletion {
  height: 4px;
  background: var(--primary);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 3;
  margin-left: 2px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderCompletion.dapp-core-component__styles-module__disabled {
  background: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint {
  position: absolute;
  transform: translate(-25%, -50%);
  padding: 15px;
  top: 50%;
  z-index: 4;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint:after {
  content: "";
  position: absolute;
  height: 12px;
  border-radius: 50%;
  background-color: var(--white);
  border: 2px solid var(--primary);
  width: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__completed:after {
  background-color: var(--primary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__completed:after.dapp-core-component__styles-module__disabled:after {
  background-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__disabled:after {
  border-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage {
  position: absolute;
  left: 50%;
  transform: translateX(-25%);
  z-index: 7;
  padding: 1.5rem 0 0;
  line-height: 1;
  color: var(--black);
  font-size: 12px;
  cursor: pointer;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage:hover ~ .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  opacity: 1;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage.dapp-core-component__styles-module__exact {
  font-weight: bold;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage.dapp-core-component__styles-module__disabled {
  pointer-events: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(md));var ee={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"};var ac=({disabled:t,percentageValue:e=0,onPercentageChange:o,className:n})=>{let a=[0,25,50,75,100],i="amountSlider";return eo.default.createElement("div",{className:(0,lo.default)(ee.amountSlider,n)},eo.default.createElement("div",{className:ee.amountSliderRange},eo.default.createElement("input",{name:i,id:i,"data-testid":i,type:"range",disabled:t,min:0,max:100,value:String(e),className:(0,lo.default)(ee.amountSliderInput,{[ee.disabled]:t}),onChange:l=>{o(Number(l.target.value))}}),eo.default.createElement("div",{style:{width:`${e}%`},className:(0,lo.default)(ee.amountSliderCompletion,{[ee.disabled]:t})}),a.map(l=>eo.default.createElement("span",{onClick:()=>o(l),key:`breakpoint-${l}`,style:{left:`${l}%`},className:(0,lo.default)(ee.amountSliderBreakpoint,{[ee.completed]:l<=e,[ee.disabled]:t})})),a.map(l=>eo.default.createElement("span",{style:{left:`${l}%`},key:`breakpoint-${l}`,onClick:()=>o(l),className:(0,lo.default)(ee.amountSliderPercentage,{[ee.exact]:l===e,[ee.disabled]:t})},l,"%")),eo.default.createElement("span",{style:{left:`${e}%`},className:(0,lo.default)(ee.amountSliderThumb,{[ee.disabled]:t})},eo.default.createElement("strong",{className:(0,lo.default)(ee.amountSliderThumbPercentage,{[ee.hidden]:a.includes(e)})},Math.round(e),"%"))))};r();r();var Ee=_(require("react")),pc=require("@fortawesome/free-solid-svg-icons"),sc=require("@fortawesome/react-fontawesome"),cc=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),ic=require("@terradharitri/sdk-dapp/UI/CopyButton"),lc=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),mc=require("@terradharitri/sdk-dapp/UI/Trim"),dc=_(require("classnames")),_c=require("formik");r();var dd=`:root {
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

.dapp-core-component__styles-module__can-transfer-warning {
  border-radius: 8px;
  padding: 16px;
  border: 1px solid var(--action-bg);
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-heading {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-heading .dapp-core-component__styles-module__can-transfer-warning-icon {
  margin-right: 12px;
  color: #ffc107;
  font-size: 24px;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-heading .dapp-core-component__styles-module__can-transfer-warning-label {
  color: #ffc107;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 12px;
  color: var(--dapp-form-label-color);
  gap: 8px;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address:before {
  position: absolute;
  content: "";
  left: 0;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid var(--dapp-form-placeholder-color);
  top: 50%;
  transform: translateY(-50%);
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=ellipsis] {
  display: flex;
  align-items: flex-end;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=left],
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=right],
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=ellipsis] {
  line-height: 1.25;
  color: var(--dapp-form-placeholder-color);
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=left] *,
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=right] *,
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=ellipsis] * {
  color: var(--dapp-form-placeholder-color);
  line-height: 1.25;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address .dapp-core-component__styles-module__can-transfer-warning-address-explorer,
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address .dapp-core-component__styles-module__can-transfer-warning-address-copy {
  color: var(--dapp-form-placeholder-color) !important;
  margin: 0;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address .dapp-core-component__styles-module__can-transfer-warning-address-explorer svg path,
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address .dapp-core-component__styles-module__can-transfer-warning-address-copy svg path {
  fill: var(--dapp-form-placeholder-color);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dd));var Ce={"can-transfer-warning":"dapp-core-component__styles-module__can-transfer-warning",canTransferWarning:"dapp-core-component__styles-module__can-transfer-warning","can-transfer-warning-heading":"dapp-core-component__styles-module__can-transfer-warning-heading",canTransferWarningHeading:"dapp-core-component__styles-module__can-transfer-warning-heading","can-transfer-warning-icon":"dapp-core-component__styles-module__can-transfer-warning-icon",canTransferWarningIcon:"dapp-core-component__styles-module__can-transfer-warning-icon","can-transfer-warning-label":"dapp-core-component__styles-module__can-transfer-warning-label",canTransferWarningLabel:"dapp-core-component__styles-module__can-transfer-warning-label","can-transfer-warning-addresses":"dapp-core-component__styles-module__can-transfer-warning-addresses",canTransferWarningAddresses:"dapp-core-component__styles-module__can-transfer-warning-addresses","can-transfer-warning-address":"dapp-core-component__styles-module__can-transfer-warning-address",canTransferWarningAddress:"dapp-core-component__styles-module__can-transfer-warning-address","can-transfer-warning-address-explorer":"dapp-core-component__styles-module__can-transfer-warning-address-explorer",canTransferWarningAddressExplorer:"dapp-core-component__styles-module__can-transfer-warning-address-explorer","can-transfer-warning-address-copy":"dapp-core-component__styles-module__can-transfer-warning-address-copy",canTransferWarningAddressCopy:"dapp-core-component__styles-module__can-transfer-warning-address-copy"};var uc=t=>{let{className:e}=t,{values:{nft:o,address:n}}=(0,_c.useFormikContext)();return!(o!=null&&o.allowedReceivers)||o.allowedReceivers.includes(n)?null:Ee.default.createElement("div",{className:(0,dc.default)(Ce.canTransferWarning,e),"data-testid":"canTransferWarning"},Ee.default.createElement("div",{className:Ce.canTransferWarningHeading},Ee.default.createElement(sc.FontAwesomeIcon,{icon:pc.faExclamationTriangle,className:Ce.canTransferWarningIcon,size:"lg"}),Ee.default.createElement("div",{className:Ce.canTransferWarningTitle},Ee.default.createElement("div",{className:Ce.canTransferWarningLabel},"Warning!"),Ee.default.createElement("div",{className:Ce.canTransferWarningMessage},Cn))),Ee.default.createElement("div",{className:Ce.canTransferWarningAddresses},o.allowedReceivers.map(a=>Ee.default.createElement("div",{className:Ce.canTransferWarningAddress,key:a},Ee.default.createElement(mc.Trim,{text:a,className:Ce.canTransferWarningAddressTrim}),Ee.default.createElement(ic.CopyButton,{text:a,className:Ce.canTransferWarningAddressCopy}),Ee.default.createElement(lc.ExplorerLink,{page:`/${cc.ACCOUNTS_ENDPOINT}/${a}`,className:Ce.canTransferWarningAddressExplorer})))))};r();r();var ko=_(require("react")),fc=require("@fortawesome/free-solid-svg-icons"),gc=require("@fortawesome/react-fontawesome"),yc=_(require("classnames"));r();var _d=`:root {
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

.dapp-core-component__styles-module__wrewa-warning {
  border-radius: 8px;
  padding: 16px;
  border: 1px solid var(--action-bg);
}
.dapp-core-component__styles-module__wrewa-warning .dapp-core-component__styles-module__wrewa-warning-heading {
  display: flex;
  align-items: center;
  color: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__wrewa-warning .dapp-core-component__styles-module__wrewa-warning-heading .dapp-core-component__styles-module__wrewa-warning-icon {
  margin-right: 12px;
  color: #ffc107;
  font-size: 24px;
}
.dapp-core-component__styles-module__wrewa-warning .dapp-core-component__styles-module__wrewa-warning-heading .dapp-core-component__styles-module__wrewa-warning-label {
  color: #ffc107;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_d));var To={"wrewa-warning":"dapp-core-component__styles-module__wrewa-warning",wrewaWarning:"dapp-core-component__styles-module__wrewa-warning","wrewa-warning-heading":"dapp-core-component__styles-module__wrewa-warning-heading",wrewaWarningHeading:"dapp-core-component__styles-module__wrewa-warning-heading","wrewa-warning-icon":"dapp-core-component__styles-module__wrewa-warning-icon",wrewaWarningIcon:"dapp-core-component__styles-module__wrewa-warning-icon","wrewa-warning-label":"dapp-core-component__styles-module__wrewa-warning-label",wrewaWarningLabel:"dapp-core-component__styles-module__wrewa-warning-label"};var bc=t=>{let{tokenId:e,className:o}=t,{networkConfig:{chainId:n}}=he();return ft(n)!==e?null:ko.default.createElement("div",{className:(0,yc.default)(To.wrewaWarning,o)},ko.default.createElement("div",{className:To.wrewaWarningHeading},ko.default.createElement(gc.FontAwesomeIcon,{icon:fc.faExclamationTriangle,className:To.wrewaWarningIcon,size:"lg"}),ko.default.createElement("div",{className:To.wrewaWarningTitle},ko.default.createElement("div",{className:To.wrewaWarningLabel},"Warning!"),ko.default.createElement("div",{className:To.wrewaWarningMessage},En))))};r();var ud=`:root {
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

.dapp-core-component__form-module__form {
  background-color: var(--dapp-form-bg);
  border-radius: 12px;
  padding: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__form-module__form .dapp-core-component__form-module__formFieldset {
  padding: 0;
  margin: 0;
  border: none;
  width: 100%;
  gap: 32px;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__form-module__form .dapp-core-component__form-module__formWrapper {
  margin-bottom: 1.5rem;
}
.dapp-core-component__form-module__form .dapp-core-component__form-module__form-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
}
@media (min-width: 768px) {
  .dapp-core-component__form-module__form .dapp-core-component__form-module__form-buttons {
    padding-top: 80px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ud));var jt={form:"dapp-core-component__form-module__form",formFieldset:"dapp-core-component__form-module__formFieldset",formWrapper:"dapp-core-component__form-module__formWrapper","form-buttons":"dapp-core-component__form-module__form-buttons",formButtons:"dapp-core-component__form-module__form-buttons"};r();r();var vc=t=>{var e,o;return((e=t.nft)==null?void 0:e.type)===te.NftEnumType.NonFungibleDCDT?"NFT":((o=t.nft)==null?void 0:o.type)===te.NftEnumType.SemiFungibleDCDT?"SFT":t.tokenDetails.ticker};var fd=({className:t,GuardianScreen:e})=>{let{formInfo:o,accountInfo:n,amountInfo:a,tokensInfo:i}=F(),{values:l}=(0,xc.useFormikContext)(),{txType:m,tokenId:d,address:f,balance:u,chainId:y,ledger:v}=l,{nft:b}=i,[T,S]=(0,M.useState)(),{amountRange:C,onSetAmountPercentage:A}=a,{renderKey:B,onValidateForm:G,onInvalidateForm:ne,onCloseForm:j,onSubmitForm:le,onPreviewClick:_e,areValidatedValuesReady:L,isGuardianScreenVisible:ae,uiOptions:oe,readonly:H,setGuardedTransaction:Ie,setHasGuardianScreen:ue}=o,I=()=>N(void 0,null,function*(){if(!L)return;let ye=yield Tn(l);try{let V=yield Ln({address:f,balance:u,chainId:y,nonce:n.nonce,values:ye});V.setVersion(Jt.TransactionVersion.withTxOptions());let oo=h({guarded:!0},v?{hashSign:!0}:{});V.setOptions(Jt.TransactionOptions.withOptions(oo)),S({0:V})}catch(V){S({})}});(0,M.useEffect)(()=>{I()},[l,L]),(0,M.useEffect)(()=>{ue(Boolean(e))},[]),(0,M.useEffect)(()=>{if(!T)return;let ye=T[0];ye&&Ie(ye)},[T]);let P=ye=>{ye.preventDefault(),j()},W=m==="NonFungibleDCDT",me=m==="SemiFungibleDCDT",ge={onSignTransaction:()=>N(void 0,null,function*(){setTimeout(()=>{le()})}),onPrev:ne,address:f,title:"",className:t,signedTransactions:T,setSignedTransactions:S,signStepInnerClasses:{}};return e&&ae?M.default.createElement(e,h({},ge)):L?M.default.createElement(Da,{providerType:n.providerType}):M.default.createElement("form",{key:B,onSubmit:G,className:(0,hc.default)(jt.form,t)},M.default.createElement("fieldset",{className:jt.formFieldset},(W||me)&&b&&M.default.createElement(Ft,h({onClick:_e,txType:m},b)),M.default.createElement(Sp,null),me?M.default.createElement(Cp,null):M.default.createElement(oc,null),(oe==null?void 0:oe.showAmountSlider)&&!W&&M.default.createElement(ac,{onPercentageChange:A,percentageValue:C,disabled:Boolean(H)}),M.default.createElement(bc,{tokenId:d}),M.default.createElement(uc,null),M.default.createElement(Zp,null),M.default.createElement(nc,null)),M.default.createElement("div",{className:jt.formButtons},M.default.createElement("button",{type:"button",id:"sendBtn","data-testid":"sendBtn",onClick:G,className:x.buttonSend},"Send ",vc(i)),M.default.createElement("button",{type:"button",id:"closeButton","data-testid":"returnToWalletBtn",onClick:P,className:x.buttonText},"Cancel")))};0&&(module.exports={Form});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
