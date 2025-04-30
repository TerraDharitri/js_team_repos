"use strict";var Nc=Object.create;var Uo=Object.defineProperty,Fc=Object.defineProperties,Lc=Object.getOwnPropertyDescriptor,Pc=Object.getOwnPropertyDescriptors,Dc=Object.getOwnPropertyNames,pt=Object.getOwnPropertySymbols,Bc=Object.getPrototypeOf,er=Object.prototype.hasOwnProperty,_n=Object.prototype.propertyIsEnumerable;var dn=(t,e,o)=>e in t?Uo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,v=(t,e)=>{for(var o in e||(e={}))er.call(e,o)&&dn(t,o,e[o]);if(pt)for(var o of pt(e))_n.call(e,o)&&dn(t,o,e[o]);return t},S=(t,e)=>Fc(t,Pc(e));var st=(t,e)=>{var o={};for(var n in t)er.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&pt)for(var n of pt(t))e.indexOf(n)<0&&_n.call(t,n)&&(o[n]=t[n]);return o};var or=(t,e)=>()=>(t&&(e=t(t=0)),e);var ct=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),it=(t,e)=>{for(var o in e)Uo(t,o,{get:e[o],enumerable:!0})},un=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Dc(e))!er.call(t,a)&&a!==o&&Uo(t,a,{get:()=>e[a],enumerable:!(n=Lc(e,a))||n.enumerable});return t};var _=(t,e,o)=>(o=t!=null?Nc(Bc(t)):{},un(e||!t||!t.__esModule?Uo(o,"default",{value:t,enumerable:!0}):o,t)),wo=t=>un(Uo({},"__esModule",{value:!0}),t);var F=(t,e,o)=>new Promise((n,a)=>{var i=d=>{try{m(o.next(d))}catch(f){a(f)}},l=d=>{try{m(o.throw(d))}catch(f){a(f)}},m=d=>d.done?n(d.value):Promise.resolve(d.value).then(i,l);m((o=o.apply(t,e)).next())});var yn=ct(lt=>{"use strict";r();lt.byteLength=Vc;lt.toByteArray=Mc;lt.fromByteArray=qc;var Le=[],ve=[],Gc=typeof Uint8Array!="undefined"?Uint8Array:Array,tr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_o=0,fn=tr.length;_o<fn;++_o)Le[_o]=tr[_o],ve[tr.charCodeAt(_o)]=_o;var _o,fn;ve["-".charCodeAt(0)]=62;ve["_".charCodeAt(0)]=63;function gn(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function Vc(t){var e=gn(t),o=e[0],n=e[1];return(o+n)*3/4-n}function Uc(t,e,o){return(e+o)*3/4-o}function Mc(t){var e,o=gn(t),n=o[0],a=o[1],i=new Gc(Uc(t,n,a)),l=0,m=a>0?n-4:n,d;for(d=0;d<m;d+=4)e=ve[t.charCodeAt(d)]<<18|ve[t.charCodeAt(d+1)]<<12|ve[t.charCodeAt(d+2)]<<6|ve[t.charCodeAt(d+3)],i[l++]=e>>16&255,i[l++]=e>>8&255,i[l++]=e&255;return a===2&&(e=ve[t.charCodeAt(d)]<<2|ve[t.charCodeAt(d+1)]>>4,i[l++]=e&255),a===1&&(e=ve[t.charCodeAt(d)]<<10|ve[t.charCodeAt(d+1)]<<4|ve[t.charCodeAt(d+2)]>>2,i[l++]=e>>8&255,i[l++]=e&255),i}function Oc(t){return Le[t>>18&63]+Le[t>>12&63]+Le[t>>6&63]+Le[t&63]}function Wc(t,e,o){for(var n,a=[],i=e;i<o;i+=3)n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),a.push(Oc(n));return a.join("")}function qc(t){for(var e,o=t.length,n=o%3,a=[],i=16383,l=0,m=o-n;l<m;l+=i)a.push(Wc(t,l,l+i>m?m:l+i));return n===1?(e=t[o-1],a.push(Le[e>>2]+Le[e<<4&63]+"==")):n===2&&(e=(t[o-2]<<8)+t[o-1],a.push(Le[e>>10]+Le[e>>4&63]+Le[e<<2&63]+"=")),a.join("")}});var bn=ct(rr=>{r();rr.read=function(t,e,o,n,a){var i,l,m=a*8-n-1,d=(1<<m)-1,f=d>>1,u=-7,y=o?a-1:0,h=o?-1:1,b=t[e+y];for(y+=h,i=b&(1<<-u)-1,b>>=-u,u+=m;u>0;i=i*256+t[e+y],y+=h,u-=8);for(l=i&(1<<-u)-1,i>>=-u,u+=n;u>0;l=l*256+t[e+y],y+=h,u-=8);if(i===0)i=1-f;else{if(i===d)return l?NaN:(b?-1:1)*(1/0);l=l+Math.pow(2,n),i=i-f}return(b?-1:1)*l*Math.pow(2,i-n)};rr.write=function(t,e,o,n,a,i){var l,m,d,f=i*8-a-1,u=(1<<f)-1,y=u>>1,h=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=n?0:i-1,x=n?1:-1,k=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(m=isNaN(e)?1:0,l=u):(l=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-l))<1&&(l--,d*=2),l+y>=1?e+=h/d:e+=h*Math.pow(2,1-y),e*d>=2&&(l++,d/=2),l+y>=u?(m=0,l=u):l+y>=1?(m=(e*d-1)*Math.pow(2,a),l=l+y):(m=e*Math.pow(2,y-1)*Math.pow(2,a),l=0));a>=8;t[o+b]=m&255,b+=x,m/=256,a-=8);for(l=l<<a|m,f+=a;f>0;t[o+b]=l&255,b+=x,l/=256,f-=8);t[o+b-x]|=k*128}});var Fn=ct(Eo=>{"use strict";r();var nr=yn(),Co=bn(),vn=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Eo.Buffer=g;Eo.SlowBuffer=Rc;Eo.INSPECT_MAX_BYTES=50;var mt=2147483647;Eo.kMaxLength=mt;g.TYPED_ARRAY_SUPPORT=zc();!g.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function zc(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(o){return!1}}Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(!!g.isBuffer(this))return this.buffer}});Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(!!g.isBuffer(this))return this.byteOffset}});function ze(t){if(t>mt)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,g.prototype),e}function g(t,e,o){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return cr(t)}return Tn(t,e,o)}g.poolSize=8192;function Tn(t,e,o){if(typeof t=="string")return Zc(t,e);if(ArrayBuffer.isView(t))return Kc(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Pe(t,ArrayBuffer)||t&&Pe(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Pe(t,SharedArrayBuffer)||t&&Pe(t.buffer,SharedArrayBuffer)))return pr(t,e,o);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return g.from(n,e,o);var a=Hc(t);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return g.from(t[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}g.from=function(t,e,o){return Tn(t,e,o)};Object.setPrototypeOf(g.prototype,Uint8Array.prototype);Object.setPrototypeOf(g,Uint8Array);function kn(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function $c(t,e,o){return kn(t),t<=0?ze(t):e!==void 0?typeof o=="string"?ze(t).fill(e,o):ze(t).fill(e):ze(t)}g.alloc=function(t,e,o){return $c(t,e,o)};function cr(t){return kn(t),ze(t<0?0:ir(t)|0)}g.allocUnsafe=function(t){return cr(t)};g.allocUnsafeSlow=function(t){return cr(t)};function Zc(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!g.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=Sn(t,e)|0,n=ze(o),a=n.write(t,e);return a!==o&&(n=n.slice(0,a)),n}function ar(t){for(var e=t.length<0?0:ir(t.length)|0,o=ze(e),n=0;n<e;n+=1)o[n]=t[n]&255;return o}function Kc(t){if(Pe(t,Uint8Array)){var e=new Uint8Array(t);return pr(e.buffer,e.byteOffset,e.byteLength)}return ar(t)}function pr(t,e,o){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(t):o===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,o),Object.setPrototypeOf(n,g.prototype),n}function Hc(t){if(g.isBuffer(t)){var e=ir(t.length)|0,o=ze(e);return o.length===0||t.copy(o,0,0,e),o}if(t.length!==void 0)return typeof t.length!="number"||lr(t.length)?ze(0):ar(t);if(t.type==="Buffer"&&Array.isArray(t.data))return ar(t.data)}function ir(t){if(t>=mt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+mt.toString(16)+" bytes");return t|0}function Rc(t){return+t!=t&&(t=0),g.alloc(+t)}g.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==g.prototype};g.compare=function(e,o){if(Pe(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),Pe(o,Uint8Array)&&(o=g.from(o,o.offset,o.byteLength)),!g.isBuffer(e)||!g.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,a=o.length,i=0,l=Math.min(n,a);i<l;++i)if(e[i]!==o[i]){n=e[i],a=o[i];break}return n<a?-1:a<n?1:0};g.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};g.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return g.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var a=g.allocUnsafe(o),i=0;for(n=0;n<e.length;++n){var l=e[n];if(Pe(l,Uint8Array))i+l.length>a.length?g.from(l).copy(a,i):Uint8Array.prototype.set.call(a,l,i);else if(g.isBuffer(l))l.copy(a,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=l.length}return a};function Sn(t,e){if(g.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Pe(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var o=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return sr(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Nn(t).length;default:if(a)return n?-1:sr(t).length;e=(""+e).toLowerCase(),a=!0}}g.byteLength=Sn;function Xc(t,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return ai(this,e,o);case"utf8":case"utf-8":return Cn(this,e,o);case"ascii":return ri(this,e,o);case"latin1":case"binary":return ni(this,e,o);case"base64":return oi(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pi(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}g.prototype._isBuffer=!0;function uo(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}g.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)uo(this,o,o+1);return this};g.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)uo(this,o,o+3),uo(this,o+1,o+2);return this};g.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)uo(this,o,o+7),uo(this,o+1,o+6),uo(this,o+2,o+5),uo(this,o+3,o+4);return this};g.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Cn(this,0,e):Xc.apply(this,arguments)};g.prototype.toLocaleString=g.prototype.toString;g.prototype.equals=function(e){if(!g.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:g.compare(this,e)===0};g.prototype.inspect=function(){var e="",o=Eo.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};vn&&(g.prototype[vn]=g.prototype.inspect);g.prototype.compare=function(e,o,n,a,i){if(Pe(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),!g.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),a===void 0&&(a=0),i===void 0&&(i=this.length),o<0||n>e.length||a<0||i>this.length)throw new RangeError("out of range index");if(a>=i&&o>=n)return 0;if(a>=i)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,a>>>=0,i>>>=0,this===e)return 0;for(var l=i-a,m=n-o,d=Math.min(l,m),f=this.slice(a,i),u=e.slice(o,n),y=0;y<d;++y)if(f[y]!==u[y]){l=f[y],m=u[y];break}return l<m?-1:m<l?1:0};function wn(t,e,o,n,a){if(t.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,lr(o)&&(o=a?0:t.length-1),o<0&&(o=t.length+o),o>=t.length){if(a)return-1;o=t.length-1}else if(o<0)if(a)o=0;else return-1;if(typeof e=="string"&&(e=g.from(e,n)),g.isBuffer(e))return e.length===0?-1:hn(t,e,o,n,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(t,e,o):Uint8Array.prototype.lastIndexOf.call(t,e,o):hn(t,[e],o,n,a);throw new TypeError("val must be string, number or Buffer")}function hn(t,e,o,n,a){var i=1,l=t.length,m=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;i=2,l/=2,m/=2,o/=2}function d(b,x){return i===1?b[x]:b.readUInt16BE(x*i)}var f;if(a){var u=-1;for(f=o;f<l;f++)if(d(t,f)===d(e,u===-1?0:f-u)){if(u===-1&&(u=f),f-u+1===m)return u*i}else u!==-1&&(f-=f-u),u=-1}else for(o+m>l&&(o=l-m),f=o;f>=0;f--){for(var y=!0,h=0;h<m;h++)if(d(t,f+h)!==d(e,h)){y=!1;break}if(y)return f}return-1}g.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};g.prototype.indexOf=function(e,o,n){return wn(this,e,o,n,!0)};g.prototype.lastIndexOf=function(e,o,n){return wn(this,e,o,n,!1)};function jc(t,e,o,n){o=Number(o)||0;var a=t.length-o;n?(n=Number(n),n>a&&(n=a)):n=a;var i=e.length;n>i/2&&(n=i/2);for(var l=0;l<n;++l){var m=parseInt(e.substr(l*2,2),16);if(lr(m))return l;t[o+l]=m}return l}function Jc(t,e,o,n){return dt(sr(e,t.length-o),t,o,n)}function Yc(t,e,o,n){return dt(ii(e),t,o,n)}function Qc(t,e,o,n){return dt(Nn(e),t,o,n)}function ei(t,e,o,n){return dt(li(e,t.length-o),t,o,n)}g.prototype.write=function(e,o,n,a){if(o===void 0)a="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")a=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,a===void 0&&(a="utf8")):(a=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-o;if((n===void 0||n>i)&&(n=i),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var l=!1;;)switch(a){case"hex":return jc(this,e,o,n);case"utf8":case"utf-8":return Jc(this,e,o,n);case"ascii":case"latin1":case"binary":return Yc(this,e,o,n);case"base64":return Qc(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ei(this,e,o,n);default:if(l)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),l=!0}};g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function oi(t,e,o){return e===0&&o===t.length?nr.fromByteArray(t):nr.fromByteArray(t.slice(e,o))}function Cn(t,e,o){o=Math.min(t.length,o);for(var n=[],a=e;a<o;){var i=t[a],l=null,m=i>239?4:i>223?3:i>191?2:1;if(a+m<=o){var d,f,u,y;switch(m){case 1:i<128&&(l=i);break;case 2:d=t[a+1],(d&192)===128&&(y=(i&31)<<6|d&63,y>127&&(l=y));break;case 3:d=t[a+1],f=t[a+2],(d&192)===128&&(f&192)===128&&(y=(i&15)<<12|(d&63)<<6|f&63,y>2047&&(y<55296||y>57343)&&(l=y));break;case 4:d=t[a+1],f=t[a+2],u=t[a+3],(d&192)===128&&(f&192)===128&&(u&192)===128&&(y=(i&15)<<18|(d&63)<<12|(f&63)<<6|u&63,y>65535&&y<1114112&&(l=y))}}l===null?(l=65533,m=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|l&1023),n.push(l),a+=m}return ti(n)}var xn=4096;function ti(t){var e=t.length;if(e<=xn)return String.fromCharCode.apply(String,t);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,t.slice(n,n+=xn));return o}function ri(t,e,o){var n="";o=Math.min(t.length,o);for(var a=e;a<o;++a)n+=String.fromCharCode(t[a]&127);return n}function ni(t,e,o){var n="";o=Math.min(t.length,o);for(var a=e;a<o;++a)n+=String.fromCharCode(t[a]);return n}function ai(t,e,o){var n=t.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var a="",i=e;i<o;++i)a+=mi[t[i]];return a}function pi(t,e,o){for(var n=t.slice(e,o),a="",i=0;i<n.length-1;i+=2)a+=String.fromCharCode(n[i]+n[i+1]*256);return a}g.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var a=this.subarray(e,o);return Object.setPrototypeOf(a,g.prototype),a};function j(t,e,o){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>o)throw new RangeError("Trying to access beyond buffer length")}g.prototype.readUintLE=g.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||j(e,o,this.length);for(var a=this[e],i=1,l=0;++l<o&&(i*=256);)a+=this[e+l]*i;return a};g.prototype.readUintBE=g.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||j(e,o,this.length);for(var a=this[e+--o],i=1;o>0&&(i*=256);)a+=this[e+--o]*i;return a};g.prototype.readUint8=g.prototype.readUInt8=function(e,o){return e=e>>>0,o||j(e,1,this.length),this[e]};g.prototype.readUint16LE=g.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||j(e,2,this.length),this[e]|this[e+1]<<8};g.prototype.readUint16BE=g.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||j(e,2,this.length),this[e]<<8|this[e+1]};g.prototype.readUint32LE=g.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||j(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};g.prototype.readUint32BE=g.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};g.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||j(e,o,this.length);for(var a=this[e],i=1,l=0;++l<o&&(i*=256);)a+=this[e+l]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*o)),a};g.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||j(e,o,this.length);for(var a=o,i=1,l=this[e+--a];a>0&&(i*=256);)l+=this[e+--a]*i;return i*=128,l>=i&&(l-=Math.pow(2,8*o)),l};g.prototype.readInt8=function(e,o){return e=e>>>0,o||j(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};g.prototype.readInt16LE=function(e,o){e=e>>>0,o||j(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};g.prototype.readInt16BE=function(e,o){e=e>>>0,o||j(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};g.prototype.readInt32LE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};g.prototype.readInt32BE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};g.prototype.readFloatLE=function(e,o){return e=e>>>0,o||j(e,4,this.length),Co.read(this,e,!0,23,4)};g.prototype.readFloatBE=function(e,o){return e=e>>>0,o||j(e,4,this.length),Co.read(this,e,!1,23,4)};g.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||j(e,8,this.length),Co.read(this,e,!0,52,8)};g.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||j(e,8,this.length),Co.read(this,e,!1,52,8)};function fe(t,e,o,n,a,i){if(!g.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<i)throw new RangeError('"value" argument is out of bounds');if(o+n>t.length)throw new RangeError("Index out of range")}g.prototype.writeUintLE=g.prototype.writeUIntLE=function(e,o,n,a){if(e=+e,o=o>>>0,n=n>>>0,!a){var i=Math.pow(2,8*n)-1;fe(this,e,o,n,i,0)}var l=1,m=0;for(this[o]=e&255;++m<n&&(l*=256);)this[o+m]=e/l&255;return o+n};g.prototype.writeUintBE=g.prototype.writeUIntBE=function(e,o,n,a){if(e=+e,o=o>>>0,n=n>>>0,!a){var i=Math.pow(2,8*n)-1;fe(this,e,o,n,i,0)}var l=n-1,m=1;for(this[o+l]=e&255;--l>=0&&(m*=256);)this[o+l]=e/m&255;return o+n};g.prototype.writeUint8=g.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||fe(this,e,o,1,255,0),this[o]=e&255,o+1};g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||fe(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||fe(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||fe(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||fe(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};g.prototype.writeIntLE=function(e,o,n,a){if(e=+e,o=o>>>0,!a){var i=Math.pow(2,8*n-1);fe(this,e,o,n,i-1,-i)}var l=0,m=1,d=0;for(this[o]=e&255;++l<n&&(m*=256);)e<0&&d===0&&this[o+l-1]!==0&&(d=1),this[o+l]=(e/m>>0)-d&255;return o+n};g.prototype.writeIntBE=function(e,o,n,a){if(e=+e,o=o>>>0,!a){var i=Math.pow(2,8*n-1);fe(this,e,o,n,i-1,-i)}var l=n-1,m=1,d=0;for(this[o+l]=e&255;--l>=0&&(m*=256);)e<0&&d===0&&this[o+l+1]!==0&&(d=1),this[o+l]=(e/m>>0)-d&255;return o+n};g.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||fe(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};g.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||fe(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};g.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||fe(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};g.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||fe(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};g.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||fe(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function En(t,e,o,n,a,i){if(o+n>t.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function In(t,e,o,n,a){return e=+e,o=o>>>0,a||En(t,e,o,4,34028234663852886e22,-34028234663852886e22),Co.write(t,e,o,n,23,4),o+4}g.prototype.writeFloatLE=function(e,o,n){return In(this,e,o,!0,n)};g.prototype.writeFloatBE=function(e,o,n){return In(this,e,o,!1,n)};function An(t,e,o,n,a){return e=+e,o=o>>>0,a||En(t,e,o,8,17976931348623157e292,-17976931348623157e292),Co.write(t,e,o,n,52,8),o+8}g.prototype.writeDoubleLE=function(e,o,n){return An(this,e,o,!0,n)};g.prototype.writeDoubleBE=function(e,o,n){return An(this,e,o,!1,n)};g.prototype.copy=function(e,o,n,a){if(!g.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!a&&a!==0&&(a=this.length),o>=e.length&&(o=e.length),o||(o=0),a>0&&a<n&&(a=n),a===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-o<a-n&&(a=e.length-o+n);var i=a-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,a):Uint8Array.prototype.set.call(e,this.subarray(n,a),o),i};g.prototype.fill=function(e,o,n,a){if(typeof e=="string"){if(typeof o=="string"?(a=o,o=0,n=this.length):typeof n=="string"&&(a=n,n=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!g.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){var i=e.charCodeAt(0);(a==="utf8"&&i<128||a==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var l;if(typeof e=="number")for(l=o;l<n;++l)this[l]=e;else{var m=g.isBuffer(e)?e:g.from(e,a),d=m.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(l=0;l<n-o;++l)this[l+o]=m[l%d]}return this};var si=/[^+/0-9A-Za-z-_]/g;function ci(t){if(t=t.split("=")[0],t=t.trim().replace(si,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function sr(t,e){e=e||1/0;for(var o,n=t.length,a=null,i=[],l=0;l<n;++l){if(o=t.charCodeAt(l),o>55295&&o<57344){if(!a){if(o>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(l+1===n){(e-=3)>-1&&i.push(239,191,189);continue}a=o;continue}if(o<56320){(e-=3)>-1&&i.push(239,191,189),a=o;continue}o=(a-55296<<10|o-56320)+65536}else a&&(e-=3)>-1&&i.push(239,191,189);if(a=null,o<128){if((e-=1)<0)break;i.push(o)}else if(o<2048){if((e-=2)<0)break;i.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;i.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;i.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return i}function ii(t){for(var e=[],o=0;o<t.length;++o)e.push(t.charCodeAt(o)&255);return e}function li(t,e){for(var o,n,a,i=[],l=0;l<t.length&&!((e-=2)<0);++l)o=t.charCodeAt(l),n=o>>8,a=o%256,i.push(a),i.push(n);return i}function Nn(t){return nr.toByteArray(ci(t))}function dt(t,e,o,n){for(var a=0;a<n&&!(a+o>=e.length||a>=t.length);++a)e[a+o]=t[a];return a}function Pe(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function lr(t){return t!==t}var mi=function(){for(var t="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,a=0;a<16;++a)e[n+a]=t[o]+t[a];return e}()});var Gn=ct((Nd,Bn)=>{r();var q=Bn.exports={},De,Be;function mr(){throw new Error("setTimeout has not been defined")}function dr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?De=setTimeout:De=mr}catch(t){De=mr}try{typeof clearTimeout=="function"?Be=clearTimeout:Be=dr}catch(t){Be=dr}})();function Ln(t){if(De===setTimeout)return setTimeout(t,0);if((De===mr||!De)&&setTimeout)return De=setTimeout,setTimeout(t,0);try{return De(t,0)}catch(e){try{return De.call(null,t,0)}catch(o){return De.call(this,t,0)}}}function di(t){if(Be===clearTimeout)return clearTimeout(t);if((Be===dr||!Be)&&clearTimeout)return Be=clearTimeout,clearTimeout(t);try{return Be(t)}catch(e){try{return Be.call(null,t)}catch(o){return Be.call(this,t)}}}var $e=[],Io=!1,fo,_t=-1;function _i(){!Io||!fo||(Io=!1,fo.length?$e=fo.concat($e):_t=-1,$e.length&&Pn())}function Pn(){if(!Io){var t=Ln(_i);Io=!0;for(var e=$e.length;e;){for(fo=$e,$e=[];++_t<e;)fo&&fo[_t].run();_t=-1,e=$e.length}fo=null,Io=!1,di(t)}}q.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];$e.push(new Dn(t,e)),$e.length===1&&!Io&&Ln(Pn)};function Dn(t,e){this.fun=t,this.array=e}Dn.prototype.run=function(){this.fun.apply(null,this.array)};q.title="browser";q.browser=!0;q.env={};q.argv=[];q.version="";q.versions={};function Ze(){}q.on=Ze;q.addListener=Ze;q.once=Ze;q.off=Ze;q.removeListener=Ze;q.removeAllListeners=Ze;q.emit=Ze;q.prependListener=Ze;q.prependOnceListener=Ze;q.listeners=function(t){return[]};q.binding=function(t){throw new Error("process.binding is not supported")};q.cwd=function(){return"/"};q.chdir=function(t){throw new Error("process.chdir is not supported")};q.umask=function(){return 0}});var p,s,Fd,r=or(()=>{p=_(Fn()),s=_(Gn()),Fd=function(t){function e(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var Ko={};it(Ko,{default:()=>Em});var At,Cm,Em,Ho=or(()=>{"use strict";r();At=_(require("react")),Cm=t=>At.createElement("svg",v({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),At.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),At.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Em=Cm});var Ba={};it(Ba,{default:()=>Dm});var Lt,Pm,Dm,Ga=or(()=>{"use strict";r();Lt=_(require("react")),Pm=t=>Lt.createElement("svg",v({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},t),Lt.createElement("g",null,Lt.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Dm=Pm});var wd={};it(wd,{AmountSelect:()=>on,AmountSelectInput:()=>tn,AmountSlider:()=>sn,Confirm:()=>Xe,ConfirmScreen:()=>Nr,Data:()=>pn,FeeAccordion:()=>$r,Form:()=>Sd,GasLimit:()=>Mr,GasPrice:()=>Wr,HighlightText:()=>tt,InfoDust:()=>_r,Loader:()=>gi,NFTCanTransferWarning:()=>cn,Receiver:()=>Br,SFTAmount:()=>Gr,SelectToken:()=>Xm,WREWAWarning:()=>ln});module.exports=wo(wd);r();r();r();var Ao=_(require("react")),On=require("@fortawesome/free-solid-svg-icons"),Wn=require("@fortawesome/react-fontawesome"),qn=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),zn=require("react-tooltip"),Md=require("react-tooltip/dist/react-tooltip.css");r();r();var Vn="Token can only be transfered to one of the following addresses:",Un="WREWA is not REWA! It can not be sent to exchanges. It can not be staked or delegated. It can not be used as transaction fee.";r();var Mo="5000000000000000",U="0",Mn="WREWA-bd4d79";r();var ui=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ui));var ut={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"};var _r=({rewaLabel:t})=>Ao.default.createElement("div",{className:ut.infoDust},Ao.default.createElement(zn.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:ut.infoDustTooltip},"A minimal amount of"," ",Ao.default.createElement(qn.FormatAmount,{rewaLabel:t,value:Mo,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),Ao.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:ut.infoDustTrigger},Ao.default.createElement(Wn.FontAwesomeIcon,{icon:On.faInfoCircle,className:"i-icon"})));r();r();var ur=_(require("react")),Zn=require("@terradharitri/sdk-dapp/UI/Loader/index");r();var fi=`:root {
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

.dapp-core-component__styles-module__loader p {
  margin: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fi));var $n={loader:"dapp-core-component__styles-module__loader"};var gi=()=>ur.default.createElement("div",{className:$n.loader},ur.default.createElement(Zn.Loader,null));r();r();var M=_(require("react")),Qt=require("@terradharitri/sdk-core/out"),Ic=_(require("classnames")),Ac=require("formik");r();var yi=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(yi));var T={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};r();var Zo=_(require("react"));r();var ft=_(require("react")),Yd=(0,ft.createContext)({});r();r();var ho=_(require("react")),em=require("@terradharitri/sdk-dapp/constants/index"),om=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),tm=_(require("bignumber.js")),rm=require("formik");r();r();r();var bi=require("bech32");r();r();r();var ae=(t,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(t);r();r();var pe=require("@terradharitri/sdk-dapp/types/tokens.types");var fr=t=>!["REWA","DCDT"].includes(t);r();r();var Kn=require("@terradharitri/sdk-dapp/constants"),Hn=require("@terradharitri/sdk-dapp/utils/account/getAccount");var Rn=t=>F(void 0,null,function*(){let e=t.txType==="REWA"?t.amount:Kn.ZERO,o=fr(t.txType),n=yield(0,Hn.getAccount)(t.receiver),a=n==null?void 0:n.username,i=o?t.senderUsername:a,l=S(v({},t),{amount:e,receiverUsername:i});return delete l.rawReceiverUsername,l});r();r();var gr=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),Xn=({nft:t,skipDescription:e})=>{var k,E;let{name:o,metadata:n,media:a,isNsfw:i,scamInfo:l,verified:m}=t,d="Scam - ",{isSuspicious:f,message:u}=(0,gr.getScamFlag)({verified:m,message:o,isNsfw:i,scamInfo:l,messagePrefix:d});if(!(n!=null&&n.description)||e){let A=f?"placeholder":(k=a==null?void 0:a[0])==null?void 0:k.thumbnailUrl;return{isSuspicious:f,name:o||u,thumbnail:A,description:""}}let{message:y,isSuspicious:h}=(0,gr.getScamFlag)({message:n.description,messagePrefix:d,verified:m}),b=f||h,x=b?"placeholder":(E=a==null?void 0:a[0])==null?void 0:E.thumbnailUrl;return{isSuspicious:b,name:o||u,thumbnail:x,description:y||n.description}};r();var vi=require("@terradharitri/sdk-dapp/utils/buildUrlParams");r();var gt=_(require("anchorme")),yr=t=>t.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),jn=(t,e)=>{if(e){let o=`[Message hidden due to suspicious content - ${e.info}]`;if(t.length>1e3)return{output:o,stringWithLinks:t,found:!0};let n=yr(t.normalize("NFKC")),a=gt.default.list(n),i=[];if(a.length>0){let l=o;a.forEach((m,d)=>{let{string:f}=m,u="",y="",h=f;for(let b=0;b<l.length;b++){let x=l.slice(b),[k]=gt.default.list(yr(x));k&&f===k.string&&(u=l.substring(0,b))}for(let b=o.length;b>0;b--){let x=l.slice(0,b),[k]=gt.default.list(yr(x));k&&f===k.string&&(y=l.substring(b))}i.push(u),i.push(h),l=y,d===a.length-1&&i.push(y)})}else i.push(t);return{output:o,stringWithLinks:i.join(""),found:!0}}else return{output:t,stringWithLinks:"",found:!1}};r();function Jn({docStyle:t}){let e={hoverColor:t.getPropertyValue("--border-color"),primaryColor:t.getPropertyValue("--primary"),bgColor:t.getPropertyValue("--card-bg"),mutedColor:t.getPropertyValue("--muted"),blackColor:t.getPropertyValue("--black")};return{valueContainer:()=>({padding:"0.125rem 0 0.125rem 0.2rem",lineHeight:"1.5",fontSize:"0.8125rem",maxWidth:"85%",display:"flex"}),control:(o,n)=>S(v({},o),{minHeight:"0",flexWrap:"nowrap",backgroundColor:n.isDisabled?"#e9ecef":"transparent",borderColor:n.isDisabled?e.hoverColor:n.isFocused?e.primaryColor:e.blackColor,boxShadow:n.isFocused?`0 0 0 0.2rem #${e.primaryColor.replace("#","").trim()}33`:null,"&:hover":{borderColor:n.isFocused?e.primaryColor:"#b0b0b0"}}),input:o=>S(v({},o),{paddingLeft:"0.4rem",marginLeft:"0",marginRight:"0"}),indicatorSeparator:o=>S(v({},o),{marginTop:"0.3rem",marginBottom:"0.3rem"}),indicatorsContainer:o=>S(v({},o),{zIndex:"0"}),dropdownIndicator:o=>S(v({},o),{padding:"0 0.4rem"}),multiValue:o=>S(v({},o),{backgroundColor:e.hoverColor,borderRadius:"4px"}),multiValueRemove:o=>S(v({},o),{cursor:"pointer"}),multiValueLebel:o=>S(v({},o),{lineHeight:"1.5"}),placeholder:o=>S(v({},o),{marginLeft:"0",lineHeight:"2"}),option:(o,{isFocused:n,isSelected:a})=>S(v({},o),{fontSize:"0.8125rem",cursor:"pointer",align:"left",backgroundColor:a?e.primaryColor:n?e.hoverColor:"transparent"}),menu:o=>S(v({},o),{marginTop:"0.2rem",zIndex:"5"})}}r();var Yn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),go=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),br=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),le=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");r();r();r();r();r();r();r();var yo=_(require("react")),kl=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Sl=require("formik");r();r();var ma=require("@terradharitri/sdk-dapp/constants/index"),Oi=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Wi=_(require("bignumber.js"));r();r();var Oo=require("@terradharitri/sdk-dapp/constants/index");function yt({feeLimit:t,rewaPriceInUsd:e}){let o=(0,go.formatAmount)({input:t,decimals:Oo.DECIMALS,digits:Oo.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,br.getUsdValue)({amount:o,usd:e,decimals:Oo.DIGITS})}`}r();var xi=require("@terradharitri/sdk-dapp/constants/index");r();var Qn=require("@terradharitri/sdk-dapp/constants/index"),ki=_(require("bignumber.js"));r();var Ti=require("@terradharitri/sdk-dapp/constants/index");r();var Si=require("@terradharitri/sdk-dapp/constants/index");r();r();var Ne=require("@terradharitri/sdk-core"),ea=require("@terradharitri/sdk-dapp/constants/index"),oa=_(require("bignumber.js"));function vr({amount:t,data:e,nonce:o,receiver:n,receiverUsername:a,sender:i,senderUsername:l,gasPrice:m,gasLimit:d,chainId:f}){let u=new oa.default((0,le.parseAmount)(t));return new Ne.Transaction({nonce:o,value:Ne.TokenPayment.rewaFromBigInteger(u.toString(10)),sender:new Ne.Address(i),receiver:new Ne.Address(n),gasPrice:parseInt(m),gasLimit:parseInt(d),senderUsername:l,receiverUsername:a,data:new Ne.TransactionPayload(e),chainID:f,version:new Ne.TransactionVersion(ea.VERSION)})}r();function Wo(t){return isNaN(Number(t))||t===""?(0,le.parseAmount)("0"):(0,le.parseAmount)(t)}function ta(t){return F(this,null,function*(){let{address:e,balance:o,chainId:n,nonce:a,values:i}=t,{amount:l,receiver:m,data:d,gasLimit:f,gasPrice:u,nft:y,receiverUsername:h,senderUsername:b}=i,x=Boolean(y)?e:m;try{return vr({balance:o,amount:String(l),gasLimit:String(f),gasPrice:Wo(u),data:d.trim(),receiver:x,receiverUsername:h,senderUsername:b,sender:e,nonce:a,chainId:n})}catch(k){throw console.log("Prepare transaction error",k),k}})}r();var wi=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");r();var Ci=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");r();var Ii=_(require("bignumber.js"));r();var Pi=require("@terradharitri/sdk-dapp/constants/index"),Di=require("@terradharitri/sdk-dapp/utils/smartContracts"),Bi=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Gi=_(require("bignumber.js"));r();var Li=_(require("bignumber.js"));r();r();var Fi=_(require("axios"));r();r();r();var aa=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");r();var ra=require("@terradharitri/sdk-dapp/constants/index");r();var Ai={D:"devnet",T:"testnet",1:"mainnet"},Ni={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function bt(t){return Ai[t]}function vt(t){return Ni[t]||Mn}function na(t){let e=bt(t),o=ra.fallbackNetworkConfigurations[e].apiAddress;if(!o)throw"Could not extract api address for environment, check if you have a valid chainID";return o}function hr(t){return F(this,null,function*(){let e=na(t);return yield(0,aa.getServerConfiguration)(e)})}r();var ht={value:null};function pa(t){return ht.value={baseURL:t.apiAddress,timeout:Number(t.apiTimeout)},ht.value}function Ge(t){return F(this,null,function*(){if(ht.value!=null)return ht.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),t!=null){let o=yield hr(t);return pa(o)}let e="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(e),e})}r();var Fo=require("@terradharitri/sdk-dapp/constants/index"),la=_(require("bignumber.js"));var sa,ca,ia,qo=(0,go.formatAmount)({input:String((sa=Fo.GAS_PRICE)!=null?sa:1e9),decimals:(ca=Fo.DECIMALS)!=null?ca:18,showLastNonZeroDecimal:!0,digits:(ia=Fo.DIGITS)!=null?ia:4}),Vi=new la.default(qo).times(10).toString(10);r();var kt=require("@terradharitri/sdk-dapp/constants/index"),Ui=_(require("bignumber.js"));r();var Mi=_(require("bignumber.js"));r();r();var ua=require("yup");r();var St=require("@terradharitri/sdk-dapp/constants/ledger.constants"),da=_(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),wt=require("yup"),qi=(0,wt.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:o}=this.parent;return!(o&&e&&e.length&&!o.ledgerDataActive)}),zi=(0,wt.string)().test({name:"hashSign",test:function(e){let{ledger:o,isGuarded:n}=this.parent;if(o){let{ledgerWithHashSign:a,ledgerWithGuardians:i}=(0,da.default)(o.version);if(e&&e.length>300&&!a)return this.createError({message:`Data too long. You need at least DharitrI app version ${St.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(n&&!i)return this.createError({message:`You need at least DharitrI app version ${St.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),$i=[qi,zi],Af=$i.reduce((t,e)=>t.concat(e),(0,wt.string)());r();var Zi=require("@terradharitri/sdk-dapp/constants/index"),Ki=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Hi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ri=require("yup");r();var Yi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Qi=_(require("bignumber.js")),el=require("yup");r();var Xi=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ji=_(require("bignumber.js")),Ji=require("yup");r();var ol=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),tl=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),rl=_(require("bignumber.js")),nl=require("yup");r();var al=_(require("bignumber.js")),pl=require("yup");r();var sl=require("@terradharitri/sdk-dapp/constants/index"),cl=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),il=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ll=_(require("bignumber.js")),ml=require("yup");r();var dl=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),_l=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ul=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),fl=_(require("bignumber.js")),gl=require("yup");r();var yl=_(require("bignumber.js")),bl=require("yup");r();var vl=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),hl=require("yup");r();var xl=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Tl=require("yup");r();r();var wl=(0,yo.createContext)({});function he(){return(0,yo.useContext)(wl)}r();r();var Ke=_(require("react")),Bl=require("formik"),Gl=_(require("lodash/uniqBy"));r();r();r();var Cl=_(require("axios"));r();r();var fa=_(require("axios"));function ga(){return F(this,null,function*(){try{let t=yield Ge(),{data:e}=yield fa.default.get("economics",t);return e}catch(t){return console.error("err fetching economics info",t),null}})}r();r();var ya=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),El=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Il=_(require("axios")),Al=_(require("lodash/uniqBy"));r();var Nl=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Fl=_(require("axios"));r();var ba=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ll=_(require("axios"));r();r();var bo=_(require("react"));var Pl=(0,bo.createContext)({});function xe(){return(0,bo.useContext)(Pl)}r();r();var Et=require("react"),va=require("@terradharitri/sdk-dapp/constants/index");var Ct=require("@terradharitri/sdk-dapp/types/enums.types");function kr(){let{networkConfig:t}=xe(),[e,o]=(0,Et.useState)(0);function n(){return F(this,null,function*(){let a=yield ga(),i=(a==null?void 0:a.price)||0;o(i)})}return(0,Et.useEffect)(()=>{![Ct.EnvironmentsEnum.mainnet,Ct.EnvironmentsEnum.testnet,Ct.EnvironmentsEnum.devnet].includes(t==null?void 0:t.id)||n()},[t==null?void 0:t.id]),{rewaLabel:t.rewaLabel,rewaPriceInUsd:e,digits:va.DIGITS}}r();var lb=(0,Ke.createContext)({});r();r();var wa=require("@terradharitri/sdk-dapp/constants/index"),Ql=require("formik");r();r();var vo=_(require("react")),ka=require("@terradharitri/sdk-dapp/constants/index"),Rl=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Xl=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),jl=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Jl=_(require("bignumber.js")),Yl=require("formik");r();r();r();r();var Vl=_(require("bignumber.js"));r();var Ul=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ml=_(require("bignumber.js"));r();r();var Ta=require("react"),Wl=require("@terradharitri/sdk-dapp/constants/index"),ql=require("@terradharitri/sdk-dapp/utils/smartContracts"),zl=_(require("bignumber.js")),$l=require("formik");r();var ha=require("react");r();r();var Zl=require("@terradharitri/sdk-dapp/constants/index"),Kl=_(require("bignumber.js"));var fv=(0,vo.createContext)({});var Zv=(0,ho.createContext)({});r();r();var Po=_(require("react")),nm=require("formik");var ph=(0,Po.createContext)({});r();r();var xo=_(require("react")),dm=require("formik");r();r();r();var Ca=require("react"),sm=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),cm=_(require("lodash/uniqBy"));r();r();var am=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),pm=require("@terradharitri/sdk-dapp/utils");r();var mm=require("react");r();var im=require("react"),lm=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var _m=(0,xo.createContext)({});function It(){return(0,xo.useContext)(_m)}r();r();var zo=_(require("react")),xm=require("formik");r();r();var wr=({knownAddresses:t,inputValue:e,key:o})=>!t||!e?!1:t.some(a=>{var i;return Boolean((i=a[o])==null?void 0:i.startsWith(e))});r();r();r();var vm=require("react"),hm=require("@terradharitri/sdk-dapp/utils");r();var ym=require("react"),bm=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");r();r();var um=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),fm=_(require("axios"));r();var gm=_(require("axios"));var Tm=(0,zo.createContext)({});function $o(){return(0,zo.useContext)(Tm)}var km=(0,Zo.createContext)({});function L(){return(0,Zo.useContext)(km)}r();r();var Yo=_(require("react")),rp=_(require("classnames"));r();r();r();var oe=_(require("react")),op=require("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");r();var Cr=_(require("react")),Sm=require("@terradharitri/sdk-dapp/constants/index");r();var Ya=require("react");r();r();var He=_(require("react")),Ft=require("@terradharitri/sdk-dapp/constants/index"),Ir=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Aa=require("@terradharitri/sdk-dapp/UI/UsdValue/index");r();r();var Ve=_(require("react")),Ea=require("@fortawesome/free-solid-svg-icons"),Ia=require("@fortawesome/react-fontawesome"),Er=_(require("classnames"));r();var wm=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wm));var no={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"};var Im=(Ho(),wo(Ko)).default,Nt=t=>{let{avatar:e,type:o}=t;return o==="NonFungibleDCDT"?Ve.default.createElement("div",{className:(0,Er.default)(no.tokenAvatar,no.tokenAvatarNFT)},"NFT"):o==="SemiFungibleDCDT"?Ve.default.createElement("div",{className:(0,Er.default)(no.tokenAvatar,no.tokenAvatarSFT)},"SFT"):o==="REWA"?Ve.default.createElement("div",{className:no.tokenAvatar},t.RewaIcon?Ve.default.createElement(t.RewaIcon,null):Ve.default.createElement(Im,null)):e?Ve.default.createElement("div",{className:no.tokenAvatar},Ve.default.createElement("img",{src:e})):Ve.default.createElement("div",{className:no.tokenAvatar},Ve.default.createElement(Ia.FontAwesomeIcon,{icon:Ea.faDiamond}))};r();var Am=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Am));var Ro={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Na=({label:t="Amount",amount:e,txType:o,tokenDecimals:n,tokenId:a,rewaLabel:i,rewaPriceInUsd:l,nft:m,tokenAvatar:d})=>{let f=(m==null?void 0:m.decimals)||0,u=o==="DCDT",y=o==="MetaDCDT",h=o==="NonFungibleDCDT",b=y?(0,le.parseAmount)(e,m==null?void 0:m.decimals):e,x=Boolean(m&&e),k=a.split("-")[0],E=u?n:Ft.DECIMALS,A=x?He.default.createElement(Ir.FormatAmount,{rewaLabel:i,value:b,decimals:f,digits:o==="MetaDCDT"?Ft.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):He.default.createElement(Ir.FormatAmount,{rewaLabel:i,value:(0,le.parseAmount)(e,E),showLabel:!1,decimals:E,showLastNonZeroDecimal:!0,token:u?k:i,"data-testid":"confirmAmount"});return h?null:He.default.createElement("div",{className:Ro.amount},He.default.createElement("span",{className:T.label},t),He.default.createElement("div",{className:Ro.token},He.default.createElement(Nt,{type:o,avatar:d}),He.default.createElement("div",{className:Ro.value},A," ",k)),!u&&He.default.createElement(Aa.UsdValue,{amount:e,usd:l,"data-testid":"confirmUsdValue",className:Ro.price}))};r();r();var $=_(require("react")),Fa=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");r();var Nm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nm));var Xo={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"};var Fm=(t,e)=>[...t.matchAll(new RegExp(e,"gi"))].map(o=>o.index),La=({label:t="Data",scCallLabel:e="SC Call",data:o,highlight:n,isScCall:a})=>{let i=$.default.createElement($.default.Fragment,null,o),[l,...m]=n&&a?n.split("@"):[];if(o&&n&&Fm(o,n).length===1)switch(!0){case o.startsWith(n):{let[,d]=o.split(n);i=$.default.createElement($.default.Fragment,null,n,$.default.createElement("span",null,d));break}case o.endsWith(n):{let[d]=o.split(n);i=$.default.createElement($.default.Fragment,null,$.default.createElement("span",null,d),n);break}default:{let[d,f]=o.split(n);i=$.default.createElement($.default.Fragment,null,$.default.createElement("span",null,d),n,$.default.createElement("span",null,f));break}}return $.default.createElement($.default.Fragment,null,l&&$.default.createElement("div",{className:Xo.data},$.default.createElement("span",{className:T.label},e),$.default.createElement("div",{"data-testid":"confirmScCall",className:Xo.value},[(0,Fa.decodePart)(l),...m].join("@"))),$.default.createElement("div",{className:Xo.data},$.default.createElement("span",{className:T.label},t),$.default.createElement("div",{"data-testid":"confirmData",className:Xo.value},o?i:"N/A")))};r();r();var ao=_(require("react")),Pa=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");r();var Lm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Lm));var jo={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Da=({rewaPriceInUsd:t,label:e="Fee",feeLimit:o,rewaLabel:n})=>ao.default.createElement("div",{className:jo.fee},ao.default.createElement("span",{className:T.label},e),ao.default.createElement("div",{className:jo.token},ao.default.createElement(Nt,{type:"REWA"}),ao.default.createElement("div",{className:jo.value},ao.default.createElement(Pa.FormatAmount,{rewaLabel:n,value:o,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),o!==U&&ao.default.createElement("span",{className:jo.price},yt({feeLimit:o,rewaPriceInUsd:t})));r();r();var ge=_(require("react")),Va=require("@fortawesome/free-solid-svg-icons"),Ua=require("@fortawesome/react-fontawesome"),Ma=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Oa=require("@terradharitri/sdk-dapp/UI/CopyButton"),Wa=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),qa=require("@terradharitri/sdk-dapp/UI/Trim"),za=_(require("classnames"));r();var{default:Re}=(Ga(),wo(Ba));r();var Bm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bm));var Fe={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"};var $a=({label:t="Receiver",receiver:e,scamReport:o,receiverUsername:n})=>{let a=Boolean(n),i=n!=null?n:e;return ge.default.createElement("div",{className:Fe.confirmReceiver},ge.default.createElement("span",{className:T.label},t),ge.default.createElement("span",{className:(0,za.default)(Fe.value,{[Fe.shrunk]:a}),"data-testid":"confirmReceiver"},a&&ge.default.createElement(Re,{className:Fe.icon}),i,a&&ge.default.createElement(Wa.ExplorerLink,{page:`/${Ma.ACCOUNTS_ENDPOINT}/${e}`,className:Fe.explorer})),a&&ge.default.createElement("span",{className:Fe.subValue},ge.default.createElement(qa.Trim,{text:e,className:Fe.subValueTrim}),ge.default.createElement(Oa.CopyButton,{text:e,className:Fe.subValueCopy})),o&&ge.default.createElement("div",{className:Fe.scam},ge.default.createElement("span",null,ge.default.createElement(Ua.FontAwesomeIcon,{icon:Va.faExclamationTriangle,className:Fe.icon}),ge.default.createElement("small",{"data-testid":"confirmScamReport"},o))))};r();r();var po=_(require("react"));r();r();var H=_(require("react")),Za=require("@fortawesome/free-solid-svg-icons"),Ka=require("@fortawesome/react-fontawesome"),Ha=_(require("@terradharitri/sdk-dapp/constants/index")),Ra=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Xa=_(require("classnames"));r();var Gm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gm));var To={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};var Vm=(Ho(),wo(Ko)).default,Jo=({RewaIcon:t,inDropdown:e=!1,isRewa:o,nftTokenDetails:n,nftType:a,token:i})=>{var A,D;let{name:l,identifier:m,balance:d,decimals:f}=i,u=((A=i.assets)==null?void 0:A.svgUrl)||((D=i.assets)==null?void 0:D.pngUrl)||"",y=u?28:20,[h,b]=(0,H.useState)(l);(0,H.useEffect)(()=>{var Y;((Y=n==null?void 0:n.uris)==null?void 0:Y.some(R=>{let ne=p.Buffer.from(String(R),"base64").toString(),{found:ce}=jn(ne,n==null?void 0:n.scamInfo);return ce}))||b(l)},[l]);let x=H.default.createElement(Ka.FontAwesomeIcon,{icon:Za.faDiamond});a==pe.NftEnumType.NonFungibleDCDT&&(x=H.default.createElement("div",{className:"nft-type","data-testid":`${m}-type-nft`},"NFT")),a===pe.NftEnumType.SemiFungibleDCDT&&(x=H.default.createElement("div",{className:"nft-type","data-testid":`${m}-type-sft`},"SFT"));let k=!e&&a!==pe.NftEnumType.NonFungibleDCDT,E=H.default.createElement("div",{className:To.tokenElementCircle},x);return u&&(E=H.default.createElement("img",{className:To.tokenElementCircle,src:u,alt:l,height:y})),o&&(E=H.default.createElement("div",{className:To.tokenElementCircle},t?H.default.createElement(t,{height:36}):H.default.createElement(Vm,{height:36}))),H.default.createElement("div",{className:(0,Xa.default)(T.value,To.tokenElement)},H.default.createElement("div",{className:To.tokenElementWrapper},E),H.default.createElement("div",{"data-testid":"tokenName"},H.default.createElement("span",{"data-testid":`${m}-element`},H.default.createElement("span",null,h)," ",H.default.createElement("span",{className:To.tokenElementIdentifier},m)),k&&H.default.createElement(Ra.FormatAmount,{rewaLabel:m,value:d||U,digits:a===pe.NftEnumType.SemiFungibleDCDT?0:Ha.DIGITS,token:m,showLabel:!1,decimals:f,"data-testid":`${m}-balance`})))};r();var Um=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Um));var ja={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"};var Ja=({RewaIcon:t,rewaLabel:e,isDcdtTransaction:o,nft:n,tokenAvatar:a,tokenId:i,tokenIdError:l})=>{var d;let m=(n==null?void 0:n.name)||"";return po.default.createElement("div",{className:ja.token},po.default.createElement("span",{className:T.label},n?po.default.createElement("span",null,n==null?void 0:n.name," "):"","Token"),po.default.createElement("div",null,n?po.default.createElement(Jo,{inDropdown:!0,token:{name:n==null?void 0:n.name,identifier:n==null?void 0:n.identifier,decimals:0,balance:U,ticker:"",assets:{svgUrl:((d=n==null?void 0:n.assets)==null?void 0:d.svgUrl)||""}}}):po.default.createElement(Jo,{inDropdown:!0,token:{name:o?m:"DharitrI eGold",identifier:o?i:e,decimals:0,balance:U,ticker:"",assets:{svgUrl:a||""}},isRewa:i===e,RewaIcon:t})),l&&po.default.createElement("div",{className:T.error},l))};var Xe=class extends Ya.Component{render(){return null}};Xe.Receiver=$a,Xe.Amount=Na,Xe.Fee=Da,Xe.Data=La,Xe.Token=Ja;var Pt=Xe;r();r();var je=_(require("react")),Ar=_(require("classnames"));r();var Mm=`.dapp-core-component__styles-module__preview {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Mm));var Te={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"};var Dt=t=>{let u=t,{txType:e,onClick:o,identifier:n}=u,a=st(u,["txType","onClick","identifier"]),{name:i,thumbnail:l}=Xn({nft:a}),m=["NonFungibleDCDT","SemiFungibleDCDT"].includes(e),d=e==="NonFungibleDCDT"?"NFT":"SFT",f=y=>{y.preventDefault(),o&&o(y,Object.assign(a,{identifier:n}))};return m?je.default.createElement("div",{onClick:f,"data-testid":"token-preview",className:(0,Ar.default)(Te.preview,{[Te.clickable]:Boolean(o)})},je.default.createElement("img",{src:l,className:Te.image}),je.default.createElement("div",{className:Te.content},je.default.createElement("div",{className:Te.left},je.default.createElement("div",{"data-testid":"token-preview-name",className:Te.name},i),je.default.createElement("div",{"data-testid":"token-preview-identifier",className:Te.identifier},n)),je.default.createElement("div",{className:Te.right},je.default.createElement("div",{className:(0,Ar.default)(Te.badge,{[Te.nft]:e==="NonFungibleDCDT",[Te.sft]:e==="SemiFungibleDCDT"})},d)))):null};r();var Om=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Om));var Je={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};r();r();var Bt=require("@terradharitri/sdk-dapp/types/enums.types"),Qa=({providerType:t,hasGuardianScreen:e})=>e?"Confirm & Continue":t===Bt.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":t===Bt.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":t===Bt.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";r();var ep=({receiverAddress:t,knownAddresses:e,existingReceiverUsername:o})=>{if(o)return o;let n=e==null?void 0:e.find(a=>a.address===t);return n==null?void 0:n.username};var tp=({isConfirmCloseBtnVisible:t=!0,providerType:e})=>{var ye;let{setIsGuardianScreenVisible:o}=he(),{receiverUsernameInfo:{receiverUsername:n},receiverInfo:{scamError:a,receiver:i,knownAddresses:l},formInfo:m,gasInfo:{gasCostError:d,feeLimit:f},accountInfo:{isGuarded:u},dataFieldInfo:{data:y},amountInfo:h,tokensInfo:b}=L(),{tokenId:x,tokenDetails:k,nft:E,rewaPriceInUsd:A,rewaLabel:D}=b,{readonly:B,onCloseForm:Y,onInvalidateForm:R,onPreviewClick:ne,onSubmitForm:ce,txType:I,hasGuardianScreen:Q}=m,X=()=>{o(!0)},[K,_e]=(0,oe.useState)(!1),ie=I==="NonFungibleDCDT",N=Qa({providerType:e,hasGuardianScreen:Q}),P=be=>{be.preventDefault(),B?Y():R()},W=()=>{if(u&&Q)return X();_e(!0),ce()},ue=!["REWA","DCDT","MetaDCDT"].includes(I),Ae=ep({knownAddresses:l,receiverAddress:i,existingReceiverUsername:n});return oe.default.createElement("div",{className:Je.summary},oe.default.createElement("div",{className:Je.fields},ue&&E&&oe.default.createElement(Dt,v({onClick:ne,txType:I},E)),oe.default.createElement(op.ConfirmReceiver,{amount:h.amount,scamReport:a!=null?a:null,receiver:i,receiverUsername:Ae}),oe.default.createElement("div",{className:Je.columns},!ie&&oe.default.createElement("div",{className:Je.column},oe.default.createElement(Pt.Amount,{txType:I,tokenId:x,tokenDecimals:k.decimals,amount:String(h.amount),nft:E,rewaPriceInUsd:A,rewaLabel:D,tokenLabel:k.name,tokenAvatar:((ye=k.assets)==null?void 0:ye.svgUrl)||""})),oe.default.createElement("div",{className:Je.column},oe.default.createElement(Pt.Fee,{rewaLabel:D,rewaPriceInUsd:A,feeLimit:f}))),oe.default.createElement(Pt.Data,{data:y}),d&&oe.default.createElement("p",{className:T.error},d)),oe.default.createElement("div",{className:Je.buttons},oe.default.createElement("button",{className:T.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:K,onClick:W},N),t&&oe.default.createElement("button",{className:T.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:P},B?"Close":"Back")))};var Nr=t=>{let{formInfo:{setHasGuardianScreen:e}}=L();return(0,Yo.useEffect)(()=>{t.hasGuardianScreen&&e(!0)},[]),Yo.default.createElement("div",{className:(0,rp.default)(Je.confirm,t.className),"data-testid":"confirmScreen"},Yo.default.createElement(tp,v({},t)))};r();r();r();var G=_(require("react")),Mt=require("@fortawesome/free-solid-svg-icons"),Dr=require("@fortawesome/react-fontawesome"),Ut=_(require("classnames")),Zp=require("formik"),Kp=_(require("react-select"));r();r();var np=_(require("react")),ap=require("react-select");r();var Wm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wm));var w={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};var pp=t=>np.default.createElement(ap.components.Control,S(v({},t),{className:w.receiverSelectControl}));r();r();var Qo=_(require("react")),dp=require("@fortawesome/free-solid-svg-icons"),_p=require("@fortawesome/react-fontawesome"),up=_(require("classnames")),fp=require("react-select");r();r();var Do=(t,e)=>{let o=e.toLowerCase(),n=t.label.toLowerCase(),a=t.value.toLowerCase();return e?n.includes(o)||a.includes(o):!0};r();var sp=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),cp=require("@terradharitri/sdk-dapp/utils"),Fr=t=>t?t.filter(n=>(0,cp.addressIsValid)(n.address)).map(n=>{let a=n.username?String((0,sp.trimUsernameDomain)(n.username)):n.address;return{value:n.address,label:a}}):[];r();var ip=({setOption:t,setAllValues:e})=>(n,a)=>{["input-blur","menu-close"].includes(a.action)||(e(n),n||t(null))};r();var lp=({setInputValue:t,setOption:e,changeAndBlurInput:o})=>a=>{!a||(e(a),o(a.value),a.value!==a.label?t(a.label):t(a.value))};r();var mp=({options:t,usernameAccounts:e,knownAddresses:o,setFieldValue:n,setInputValue:a,setOption:i})=>m=>{var k,E,A,D;let d=t.find(B=>B.value===m&&B.value!==B.label),f=d==null?void 0:d.label,u,y,h=(k=e[m])==null?void 0:k.username;h&&(f=h,u=h,y=(E=e[m])==null?void 0:E.rawUsername);let b=o.find(B=>B.address===m);b!=null&&b.username&&(f=b==null?void 0:b.username,u=b==null?void 0:b.username,y=b==null?void 0:b.rawUsername);let x=f!=null?f:m;a(x),i({value:m,label:x}),n("receiver",(D=(A=e[m])==null?void 0:A.address)!=null?D:m),n("receiverUsername",u),n("rawReceiverUsername",y)};var gp=t=>{let{selectProps:e,isDisabled:o,options:n}=t,{menuIsOpen:a,value:i,isLoading:l}=e,m=(0,Qo.useMemo)(()=>n.find(y=>{let h=y,b=i;return b?Do(h,b.label):null}),[i,n]),d=n.length===0&&!l,f=Boolean(i)&&!m,u=o||d||f;return l?Qo.default.createElement(_p.FontAwesomeIcon,{icon:dp.faSpinner,spin:!0,className:w.receiverSelectSpinner}):Qo.default.createElement(fp.components.DropdownIndicator,S(v({},t),{className:(0,up.default)(w.receiverSelectIndicator,{[w.expanded]:a,[w.hidden]:u})}))};r();r();var bp=_(require("react")),vp=require("@terradharitri/sdk-dapp/utils"),hp=_(require("classnames")),xp=require("react-select");r();r();var yp=(t,e)=>{let o=t.current;if(!o||!o.state.focusedOption)return!1;let n=o.state.focusedOption,a=n.label.toLowerCase(),i=n.value.toLowerCase(),l=a!==i,m=l&&a.startsWith(e.toLowerCase());return l&&!e?!0:m};var Tp=t=>e=>{let{selectProps:o,value:n}=e,{inputValue:a,menuIsOpen:i}=o,{receiverUsernameInfo:{receiverUsername:l}}=L(),m=yp(t,a),d=(0,vp.addressIsValid)(String(n)),f=Boolean(l)||m,u=d&&i||!d&&a;return bp.default.createElement(xp.components.Input,S(v({},e),{"data-testid":"receiver",className:(0,hp.default)(w.receiverSelectInput,{[w.visible]:u,[w.spaced]:f})}))};r();r();var kp=_(require("react")),Sp=require("react-select");var wp=t=>kp.default.createElement(Sp.components.Menu,S(v({},t),{className:w.receiverSelectMenu}));r();r();var te=_(require("react")),Gt=require("@terradharitri/sdk-dapp/UI/Trim"),et=_(require("classnames")),Cp=require("react-select");var Ep=t=>{let{selectProps:e,focusedOption:o}=t,{value:n,inputValue:a}=e,i=o,l=i?i.label.toLowerCase():null,m=i&&i.label!==i.value,u=(l&&(!n||n&&a)?l.startsWith(a.toLowerCase()):!1)&&i?i.label.replace(i.label.substring(0,a.length),a):null,y=u&&!a,h=u&&a.length<u.length/2,b=u&&Boolean(a)&&h,x=u&&Boolean(a);return te.default.createElement(te.default.Fragment,null,b&&!m&&te.default.createElement("div",{className:(0,et.default)(w.receiverSelectAutocomplete,w.receiverSelectAutocompleteUntrimmed)},u),x&&m&&te.default.createElement("div",{className:(0,et.default)(w.receiverSelectAutocomplete,w.receiverSelectAutocompleteUsername)},te.default.createElement(Re,{className:w.receiverSelectAutocompleteIcon}),u,te.default.createElement("span",{className:w.receiverSelectAutocompleteWrapper},"(",te.default.createElement(Gt.Trim,{text:i.value}),")")),y&&te.default.createElement("span",{className:(0,et.default)(w.receiverSelectAutocomplete,{[w.receiverSelectAutocompleteUsername]:m})},m?te.default.createElement(te.default.Fragment,null,te.default.createElement("span",null,te.default.createElement(Re,{className:(0,et.default)(w.receiverSelectAutocompleteIcon,w.receiverSelectAutocompleteIconMuted)}),i.label),te.default.createElement("span",{className:w.receiverSelectAutocompleteWrapper},"(",te.default.createElement(Gt.Trim,{text:i.value}),")")):te.default.createElement(Gt.Trim,{text:u})),te.default.createElement(Cp.components.MenuList,S(v({},t),{className:w.receiverSelectList})))};r();r();var Ue=_(require("react")),Lr=require("@terradharitri/sdk-dapp/UI/Trim"),Ap=_(require("classnames")),Np=require("react-select");r();r();var ot=_(require("react"));r();var qm=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qm));var Ip={highlight:"dapp-core-component__styles-modules__highlight"};var tt=({highlight:t,text:e=""})=>{let o=e.split(" "),n=t.toLowerCase(),a=new RegExp(`(${n})`,"gi"),i=o.map(l=>l.split(a).filter(m=>m));return ot.default.createElement("span",{className:Ip.highlight},i.map((l,m)=>{let d=`${l}-${m}`;return ot.default.createElement("span",{key:d},l.map((f,u)=>{let y=f.toLowerCase()===n,h=n&&y,b=`${f}-${u}`;return h?ot.default.createElement("strong",{key:b},f):ot.default.createElement("span",{key:b},f)}))}))};var Fp=t=>{let{isFocused:e,data:o,selectProps:n}=t,{inputValue:a}=n,i=o,l=i.value!==i.label;return Ue.default.createElement(Np.components.Option,S(v({},t),{className:(0,Ap.default)(w.receiverSelectOption,{[w.focused]:e})}),l?Ue.default.createElement(Ue.default.Fragment,null,Ue.default.createElement("span",{className:w.receiverSelectOptionUsername},Ue.default.createElement(Re,{className:w.receiverSelectOptionUsernameIcon}),Ue.default.createElement(tt,{text:i.label,highlight:a})),Ue.default.createElement("span",{className:w.receiverSelectOptionNameWrapper},"(",Ue.default.createElement(Lr.Trim,{text:i.value,className:w.receiverSelectOptionName}),")")):Ue.default.createElement(Lr.Trim,{text:i.value,className:w.receiverSelectOptionName}))};r();r();var Lp=_(require("react")),Pp=_(require("classnames")),Dp=require("react-select");var Bp=t=>{let{selectProps:e,isFocused:o,className:n}=t,{menuIsOpen:a}=e;return Lp.default.createElement(Dp.components.SelectContainer,S(v({},t),{className:(0,Pp.default)(n,{[w.expanded]:a,[w.focused]:o&&a})}))};r();r();var Me=_(require("react")),Pr=require("@terradharitri/sdk-dapp/UI/Trim"),Gp=require("@terradharitri/sdk-dapp/utils"),Vp=_(require("classnames")),Up=require("react-select");var Mp=t=>{let{selectProps:e,isDisabled:o}=t,{value:n,menuIsOpen:a}=e,i=n,{receiverInfo:{receiver:l},receiverUsernameInfo:{receiverUsername:m}}=L(),d=m!=null?m:i&&i.value!==i.label,f=i?{value:l!=null?l:i.value,label:i.label}:null,u=f&&(d||!d&&!a)&&(0,Gp.addressIsValid)(f.value);return Me.default.createElement(Up.components.ValueContainer,S(v({},t),{className:w.receiverSelectValue}),u&&Me.default.createElement("span",{className:(0,Vp.default)(w.receiverSelectSingle,{[w.disabled]:o})},d?Me.default.createElement(Me.default.Fragment,null,Me.default.createElement("span",{className:w.receiverSelectSingleUsername},Me.default.createElement(Re,{className:w.receiverSelectSingleUsernameIcon}),f.label),Me.default.createElement("span",{className:w.receiverSelectSingleTrimWrapper},"(",Me.default.createElement(Pr.Trim,{text:f.value,className:w.receiverSelectSingleTrim}),")")):Me.default.createElement(Pr.Trim,{text:f.value,className:w.receiverSelectSingleTrim})),t.children)};r();r();var Op=require("formik");var Vt=()=>{let{receiverInfo:{receiverError:t,isReceiverInvalid:e},receiverUsernameInfo:{receiverUsernameError:o,isReceiverUsernameInvalid:n,receiverUsername:a}}=L(),{touched:{receiver:i}}=(0,Op.useFormikContext)(),l=e&&i||n;return a!=null&&a.startsWith("drt1")?{isInvalid:e,receiverErrorDataTestId:"receiverError",error:t}:{isInvalid:l,receiverErrorDataTestId:n?"receiverUsernameError":"receiverError",error:n?o:t}};r();r();var qp=require("@terradharitri/sdk-dapp/utils"),zp=require("formik");r();r();var Wp=({knownAddresses:t,inputValue:e})=>!t||!e?!1:t.filter(n=>{var m;let a=(m=n.username)!=null?m:n.address,i=n.address;return Do({label:a,value:i,data:{label:a,value:i}},e)}).length>0;var $p=({menuIsOpen:t})=>{let{isInvalid:e}=Vt(),{values:{nft:o}}=(0,zp.useFormikContext)(),{showUsernameError:n,isUsernameLoading:a,isUsernameDebouncing:i,usernameIsAmongKnown:l,searchQueryIsAddress:m}=$o(),{receiverInputValue:d,knownAddresses:f}=It(),u=wr({key:"address",knownAddresses:f,inputValue:d}),y=Wp({inputValue:d,knownAddresses:f}),h=m&&(!u||!t)&&!(0,qp.addressIsValid)(d),b=Boolean(n&&!(t&&u)&&!(t&&l));return{isAddressError:h||(o?e:!1),isUsernameError:b,isRequiredError:e&&!b&&!a&&!i&&!h&&!y&&!d,isReceiverDropdownOpened:d&&y&&t}};var Br=t=>{let e=(0,G.useRef)(null),{className:o}=t,{setFieldValue:n}=(0,Zp.useFormikContext)(),{receiverInfo:{scamError:a,fetchingScamAddress:i,receiverInputValue:l,setReceiverInputValue:m,knownAddresses:d,receiver:f,onBlurReceiver:u,onChangeReceiver:y},receiverUsernameInfo:{receiverUsername:h},formInfo:{readonly:b}}=L(),[x,k]=(0,G.useState)(!1),[E,A]=(0,G.useState)(f?{label:f,value:f}:null),{receiverErrorDataTestId:D,error:B}=Vt(),{isAddressError:Y,isUsernameError:R,isRequiredError:ne,isReceiverDropdownOpened:ce}=$p({menuIsOpen:x}),{usernameAccounts:I,isUsernameLoading:Q}=$o(),X=()=>{u(new Event("blur"));let V=d==null?void 0:d.find(ro=>ro.username===l&&ro.address===f);V&&(n("receiver",V.address),n("receiverUsername",V.username),n("rawReceiverUsername",V.rawUsername))},K=d==null?void 0:d.find(V=>V.username===l&&V.address===f),_e=(0,G.useMemo)(()=>Fr(d),[d]),ie=K?Fr([K]):_e,N=mp({setFieldValue:n,setInputValue:m,setOption:A,options:ie,knownAddresses:d!=null?d:[],usernameAccounts:I}),P=(0,G.useCallback)(ip({setAllValues:N,setOption:A}),[]),W=(0,G.useCallback)(V=>{y(V?V.trim():""),setTimeout(X)},[]),ue=lp({changeAndBlurInput:W,setOption:A,setInputValue:m}),Ae=(0,G.useMemo)(()=>Tp(e),[e]);(0,G.useEffect)(()=>{if(!f)return;let V=Object.keys(I).find(ro=>{var Vo;return((Vo=I[ro])==null?void 0:Vo.address)===f});N(V!=null?V:f),V&&m(V)},[I,f]);let ye=Y||R||ne,be=ye&&!x;return G.default.createElement("div",{className:(0,Ut.default)(w.receiver,o)},G.default.createElement("div",{className:T.label,"data-testid":"receiverLabel","data-loading":i},"Receiver"),G.default.createElement(Kp.default,{value:E,onInputChange:P,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:ae("receiver",b),options:ie,filterOption:Do,noOptionsMessage:()=>null,onChange:ue,onBlur:X,isMulti:!1,ref:e,inputValue:l,onMenuClose:()=>k(!1),onMenuOpen:()=>k(!0),components:{Menu:wp,Input:Ae,Control:pp,ValueContainer:Mp,DropdownIndicator:gp,SelectContainer:Bp,MenuList:Ep,Option:Fp,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,Ut.default)(w.receiverSelectContainer,{[w.opened]:ce,[w.invalid]:ye||a})}),be&&G.default.createElement("div",{"data-testid":D,className:T.error},B),Q&&G.default.createElement("div",{className:w.loading},"Loading..."),h&&G.default.createElement("span",{className:w.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",G.default.createElement(Dr.FontAwesomeIcon,{icon:Mt.faCheck,className:w.foundIcon})),a&&G.default.createElement("div",{"data-testid":"receiverScam",className:(0,Ut.default)(T.error,T.scam)},G.default.createElement("span",null,G.default.createElement(Dr.FontAwesomeIcon,{icon:Mt.faExclamationTriangle}),G.default.createElement("small",null,a))))};r();r();var ke=_(require("react")),Hp=_(require("bignumber.js")),Ot=_(require("classnames"));r();var zm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zm));var so={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"};var Gr=t=>{let{className:e}=t,{formInfo:{readonly:o},amountInfo:n,tokensInfo:a}=L(),{amount:i,error:l,onFocus:m,onBlur:d,onChange:f,isInvalid:u,onMaxClicked:y,maxAmountAvailable:h,isMaxButtonVisible:b}=n,{nft:x}=a,k=x!=null&&x.balance?new Hp.default(x.balance).isGreaterThan(0):!1,E=A=>{A.preventDefault(),y()};return ke.default.createElement("div",{className:(0,Ot.default)(so.amount,e)},ke.default.createElement("div",{className:so.label},ke.default.createElement("label",{htmlFor:"amount",className:T.label},"Amount"),k&&x&&ke.default.createElement("div",{"data-value":`${h} ${x.identifier}`,className:(0,Ot.default)(so.balance,e)},ke.default.createElement("span",null,"Available:")," ",ke.default.createElement("span",{"data-testid":`available-${x.identifier}`,className:so.available},ke.default.createElement("span",{className:so.amount},h)," ",x.ticker))),ke.default.createElement("div",{className:so.wrapper},ke.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:i,disabled:ae("amount",o),onFocus:m,onBlur:d,onChange:f,autoComplete:"off",className:(0,Ot.default)(T.input,{[T.invalid]:u,[T.disabled]:ae("amount",o)})}),b&&ke.default.createElement("a",{href:"/","data-testid":"maxBtn",className:so.max,onClick:E,onMouseDown:A=>{A.preventDefault()}},"Max")),u&&ke.default.createElement("div",{className:T.error,"data-testid":"amountError"},l))};r();r();var me=_(require("react")),qt=require("@fortawesome/free-solid-svg-icons"),qr=require("@fortawesome/react-fontawesome"),cs=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),zr=_(require("classnames")),is=_(require("react-collapsed"));r();var Qe=_(require("react")),Yp=require("@fortawesome/free-solid-svg-icons"),Qp=require("@fortawesome/react-fontawesome"),es=_(require("bignumber.js")),Ur=_(require("classnames")),os=require("react-number-format");r();r();var co=require("@terradharitri/sdk-dapp/constants/index"),Rp=require("@terradharitri/sdk-dapp/utils/validation"),Ye=_(require("bignumber.js")),Xp=(t,e)=>{let o=e!=null?e:co.DIGITS;if((0,Rp.stringIsFloat)(t)){if(new Ye.default(t).isZero())return"0";let a=new Ye.default(t).toFormat(o);return a=parseFloat(a)>0?a:new Ye.default(t).toFormat(co.DIGITS),a=parseFloat(a)>0?a:new Ye.default(t).toFormat(co.DIGITS+2),a=parseFloat(a)>0?a:new Ye.default(t).toFormat(co.DIGITS+4),a=parseFloat(a)>0?a:new Ye.default(t).toFormat(co.DIGITS+6),a=parseFloat(a)>0?a:new Ye.default(t).toFormat(co.DIGITS+10),parseFloat(a)>0?a:new Ye.default(t).toFormat(co.DIGITS+14)}return"0"};r();var Vr=t=>t.replace(/,/g,"");r();var Wt=require("react"),$m={value:"",count:0},jp=(t,e)=>{let[o,n]=(0,Wt.useState)($m);return(0,Wt.useEffect)(()=>{let i=setTimeout(()=>{n(t)},e);return()=>clearTimeout(i)},[t.count]),o};r();var Jp=_(require("bignumber.js")),Bo=t=>{let[e,o]=t.split(""),n=new Jp.default(e).isZero();return Boolean(n&&o&&!(o==="."))};r();var Zm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zm));var J={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"};var Mr=()=>{let{formInfo:t,gasInfo:e}=L(),{readonly:o}=t,{defaultGasLimit:n,onResetGasLimit:a,onChangeGasLimit:i,onBlurGasLimit:l,gasLimit:m,gasLimitError:d,isGasLimitInvalid:f}=e,u=k=>{k.preventDefault(),a()},y=({value:k,floatValue:E})=>(!E||!(0,es.default)(E).isNaN())&&!Bo(k),h=k=>{i(k.value,!0)},b=m!==n&&!o,x=ae("gasLimit",o);return Qe.default.createElement("div",{className:J.gas},Qe.default.createElement("label",{className:T.label,htmlFor:"gasLimit"},"Gas Limit"),Qe.default.createElement("div",{className:J.wrapper},Qe.default.createElement(os.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:x,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:l,onValueChange:h,required:!0,isAllowed:y,thousandSeparator:",",thousandsGroupStyle:"thousand",value:m,valueIsNumericString:!0,allowNegative:!1,className:(0,Ur.default)(T.input,J.input,{[T.disabled]:x,[T.invalid]:f,[J.spaced]:b})}),b&&Qe.default.createElement("div",{className:J.actions},Qe.default.createElement("div",{onClick:u,"data-testid":"gasLimitResetBtn",className:(0,Ur.default)(J.action,{[J.disabled]:x})},Qe.default.createElement(Qp.FontAwesomeIcon,{icon:Yp.faUndo,className:J.icon}))),f&&Qe.default.createElement("div",{className:T.error,"data-testid":`${"gasLimit"}Error`},d)))};r();r();var eo=_(require("react")),ts=require("@fortawesome/free-solid-svg-icons"),rs=require("@fortawesome/react-fontawesome"),ns=_(require("bignumber.js")),Or=_(require("classnames")),as=require("react-number-format");var Wr=()=>{let{networkConfig:t}=xe(),{gasInfo:e,formInfo:o}=L(),{readonly:n}=o,{rewaLabel:a}=t,{gasPrice:i,gasPriceError:l,isGasPriceInvalid:m,onChangeGasPrice:d,onBlurGasPrice:f,onResetGasPrice:u}=e,y=i!==qo&&!n,h=ae("gasPrice",n),b=({value:E,floatValue:A})=>(!A||!(0,ns.default)(A).isNaN())&&!Bo(E),x=E=>{E.preventDefault(),u()},k=E=>{d(E.value,!0)};return eo.default.createElement("div",{className:J.gas},eo.default.createElement("label",{className:T.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),eo.default.createElement("div",{className:J.wrapper},eo.default.createElement(as.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:h,id:"gasPrice",inputMode:"decimal",isAllowed:b,name:"gasPrice",onBlur:f,onValueChange:k,required:!0,suffix:` ${a}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:i,valueIsNumericString:!0,allowNegative:!1,className:(0,Or.default)(T.input,J.input,{[T.disabled]:h,[T.invalid]:m,[J.spaced]:y})}),y&&eo.default.createElement("div",{className:J.actions},eo.default.createElement("div",{onClick:x,className:(0,Or.default)(J.action,{[J.disabled]:h})},eo.default.createElement(rs.FontAwesomeIcon,{icon:ts.faUndo,className:J.icon})))),m&&eo.default.createElement("div",{className:T.error,"data-testid":`${"gasPrice"}Error`},l))};r();var ps=_(require("react"));r();var Km=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Km));var Oe={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"};var ss=({feeLimit:t,rewaPriceInUsd:e})=>t===U?null:ps.default.createElement("span",{className:Oe.fiat,"data-testid":"feeInFiat"},"(",yt({feeLimit:t,rewaPriceInUsd:e}),")");var $r=({className:t})=>{let{gasInfo:e,tokensInfo:o}=L(),{feeLimit:n,gasCostLoading:a,gasPriceError:i,gasLimitError:l}=e,{rewaPriceInUsd:m,rewaLabel:d}=o,[f,u]=(0,me.useState)(Boolean(i||l)),{getCollapseProps:y,getToggleProps:h}=(0,is.default)({isExpanded:f}),b=()=>{u(x=>!x)};return me.default.createElement("div",{className:(0,zr.default)(Oe.fee,t)},me.default.createElement("label",{className:T.label},"Fee"),me.default.createElement("div",v({className:Oe.trigger},h({onClick:b})),me.default.createElement("span",{className:Oe.limit,"data-testid":"feeLimit"},me.default.createElement(cs.FormatAmount,{value:n,showLastNonZeroDecimal:!0,rewaLabel:d})),a&&me.default.createElement(qr.FontAwesomeIcon,{icon:qt.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),me.default.createElement(ss,{rewaPriceInUsd:m,feeLimit:n}),me.default.createElement(qr.FontAwesomeIcon,{icon:qt.faChevronRight,className:(0,zr.default)(Oe.arrow,{[Oe.active]:f})})),me.default.createElement("div",v({className:Oe.expandable},y()),me.default.createElement("div",{className:Oe.content},me.default.createElement(Wr,null),me.default.createElement(Mr,null))))};r();r();var oo=_(require("react")),ls=_(require("@terradharitri/sdk-dapp/constants/index")),ms=_(require("classnames")),zt=_(require("react-select"));r();var Hm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hm));var Zr={selectTokenContainer:"dapp-core-component__styles-module__selectTokenContainer"};var Rm=t=>oo.default.createElement("div",{className:`token-option ${t.isSelected?"is-selected":""}`,"data-testid":`${t.value}-option`},oo.default.createElement(zt.components.Option,v({},t))),Xm=({className:t,label:e})=>{let{formInfo:o,accountInfo:n,tokensInfo:a}=L(),{readonly:i}=o,{balance:l}=n,{getTokens:m,areTokensLoading:d,tokens:f,tokenId:u,rewaLabel:y,RewaIcon:h,tokenIdError:b,onChangeTokenId:x,isTokenIdInvalid:k}=a,E=({token:I})=>oo.default.createElement(Jo,{inDropdown:!0,token:I,isRewa:I.identifier===y,RewaIcon:h}),D=[{name:"DharitrI eGold",identifier:y,balance:l,decimals:ls.DECIMALS,ticker:""},...f].map(I=>({value:I.identifier,label:I.name,assets:I.assets,token:I}));function B(){return F(this,null,function*(){yield m()})}let Y=I=>{I&&x(I.value)},R=({value:I,label:Q},X)=>{if(Boolean(X)){let K=X.trim().toLowerCase(),_e=ie=>ie.toLowerCase().indexOf(K)>-1;return _e(I)||_e(Q)}return!0},ne=window.getComputedStyle(document.documentElement),ce=Jn({docStyle:ne});return oo.default.createElement("div",{className:(0,ms.default)(Zr.selectTokenContainer,t)},e&&oo.default.createElement("label",{htmlFor:"tokenId","data-testid":"tokenIdLabel",className:Zr.selectTokenLabel},e),oo.default.createElement(zt.default,{className:"selectToken",classNamePrefix:"selectToken",components:{Option:Rm},filterOption:R,formatOptionLabel:E,inputId:"tokenId",isDisabled:ae("tokenId",i),isLoading:d,name:"tokenId",onChange:Y,onMenuOpen:B,openMenuOnFocus:!0,options:D,styles:t?{}:ce,value:D.find(({value:I})=>I===u)||void 0}),k&&oo.default.createElement("div",{className:T.error,"data-testid":"tokenIdError"},oo.default.createElement("small",null,b)))};r();r();var we=_(require("react")),Xt=_(require("classnames"));r();var jm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jm));var We={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};r();r();r();var O=_(require("react")),_s=require("@terradharitri/sdk-dapp/utils/validation"),$t=_(require("bignumber.js")),Kr=_(require("classnames")),us=require("react-number-format");r();var Jm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jm));var rt={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};var Ym=500,ds=1e13,Qm=({"data-testid":t,InfoDustComponent:e,disabled:o,handleBlur:n,handleChange:a,name:i,onDebounceChange:l,onFocus:m,onKeyDown:d,placeholder:f,required:u,usdPrice:y,value:h,usdValue:b,className:x,autoFocus:k,suffix:E})=>{let A=(0,O.useRef)(null),[D,B]=(0,O.useState)(),[Y,R]=(0,O.useState)(!1),[ne,ce]=(0,O.useState)({value:h,count:0}),[I,Q]=(0,O.useState)(),X=jp(ne,Ym),K=N=>{N.stopPropagation(),R(!0);let P=Vr(N.target.value),W=(0,$t.default)(P).isLessThanOrEqualTo(ds);if((P===""||W)&&(B(P),N.target.value=P,a(N),l)){let ue={value:P,count:ne.count+1};ce(ue)}},_e=()=>{if(b)return Q(`$${b}`);if(!y||!h)return Q(void 0);let N=Vr(h);if(!(h!==""&&(0,_s.stringIsFloat)(N))||N==="")return Q(void 0);let W=Xp(new $t.default(N).times(y!=null?y:0).toString(10),2);Q(`$${W}`)},ie=({value:N,floatValue:P})=>(!P||(0,$t.default)(P).isLessThanOrEqualTo(ds))&&!Bo(N);return(0,O.useEffect)(()=>{l&&Y&&(R(!1),l(X.value))},[X]),(0,O.useEffect)(_e,[h,b,y]),(0,O.useEffect)(()=>{h!==D&&B(h)},[h]),O.default.createElement("div",{ref:A,className:(0,Kr.default)(rt.amountHolder,{[rt.showUsdValue]:Boolean(I)},x)},O.default.createElement(us.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":t||i,decimalSeparator:".",disabled:Boolean(o),id:i,inputMode:"decimal",isAllowed:ie,name:i,onBlur:n,onChange:K,onFocus:m,onKeyDown:d,placeholder:f,required:u,thousandSeparator:",",thousandsGroupStyle:"thousand",value:D,suffix:E,valueIsNumericString:!0,allowNegative:!1,autoFocus:k,className:(0,Kr.default)(T.input,rt.amountInput,{[T.disabled]:Boolean(o)})}),I&&O.default.createElement("span",{className:rt.amountHolderUsd},O.default.createElement("small",{"data-testid":`tokenPrice_${y}`},I!=="$0"?O.default.createElement(O.default.Fragment,null,"\u2248 "):O.default.createElement(O.default.Fragment,null),I),e))},fs=(0,O.memo)(Qm,(t,e)=>t.value===e.value&&t.usdPrice===e.usdPrice&&t.className===e.className&&t.disabled===e.disabled&&t.usdValue===e.usdValue);r();r();var Hr=_(require("react"));var gs=({rewaLabel:t,amount:e,maxAmountMinusDust:o,isMaxClicked:n,tokenId:a})=>e===o&&n&&a===t?Hr.default.createElement("span",{style:{marginLeft:"0.2rem"}},Hr.default.createElement(_r,{rewaLabel:t})):null;r();r();var xs=_(require("react")),Ts=require("@terradharitri/sdk-dapp/constants"),Xr=_(require("bignumber.js")),ks=_(require("classnames"));r();var Rr=_(require("bignumber.js"));var ys=t=>{let e=new Rr.default(t!=null?t:"0"),o=new Rr.default(Mo),n=e.minus(o);return n.isGreaterThan(0)?n.toString(10):"0"};r();var ed=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ed));var bs={max:"dapp-core-component__maxButton-module__max"};r();var io=require("@terradharitri/sdk-dapp/constants"),vs=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),hs=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Go=({amount:t="0",decimals:e=0,digits:o=io.DIGITS,addCommas:n=!1,showLastNonZeroDecimal:a=!1})=>{if(t==null||!(0,hs.stringIsInteger)(t))return"0";let i=m=>(0,vs.formatAmount)({input:t,digits:m,decimals:e,addCommas:n,showLastNonZeroDecimal:a}),l=i(o);return l=parseFloat(l)>0?l:i(io.DIGITS),l=parseFloat(l)>0?l:i(io.DIGITS+2),l=parseFloat(l)>0?l:i(io.DIGITS+4),l=parseFloat(l)>0?l:i(io.DIGITS+6),l=parseFloat(l)>0?l:i(io.DIGITS+10),parseFloat(l)>0?l:i(io.DIGITS+14)};var Ss=({token:t,rewaLabel:e,inputAmount:o,className:n,onMaxClick:a})=>{var u;let i=(t==null?void 0:t.identifier)===e,l=(u=t==null?void 0:t.balance)!=null?u:"0";if(l==="0")return null;let m=Go({amount:i?ys(l):l,decimals:(t==null?void 0:t.decimals)||Ts.DECIMALS}),d=new Xr.default(o).isEqualTo(new Xr.default(m)),f=y=>{y.preventDefault(),a==null||a(m)};return d?null:xs.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,ks.default)(bs.max,n),onClick:f,onMouseDown:y=>{y.preventDefault()}},"Max")};r();r();var Se=_(require("react")),nc=_(require("classnames")),ac=_(require("react-select"));var en={};it(en,{Control:()=>pd,IndicatorsContainer:()=>cd,Input:()=>rd,Menu:()=>ad,MenuList:()=>nd,DharitrIIcon:()=>oc,Placeholder:()=>sd,SmallLoader:()=>od,ValueComponent:()=>Hs,getOption:()=>Yr,getSingleValue:()=>Qr,getValueContainer:()=>Jr});r();r();var jr=_(require("react")),ws=require("@fortawesome/free-solid-svg-icons"),Cs=require("@fortawesome/react-fontawesome"),od=({show:t,color:e})=>t?jr.default.createElement("div",{className:"d-flex"},jr.default.createElement(Cs.FontAwesomeIcon,{icon:ws.faSpinner,className:`fa-spin fast-spin ${e||"text-primary"}`})):null;r();r();var Es=_(require("react")),Is=require("react-select");r();var td=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(td));var C={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var rd=t=>Es.default.createElement(Is.components.Input,S(v({},t),{className:C.dropdown,"data-testid":"tokenSelectInput"}));r();var As=_(require("react")),Ns=require("react-select");var nd=t=>{let n=t,{rx:e}=n,o=st(n,["rx"]);return As.default.createElement(Ns.components.MenuList,S(v({},o),{className:C.list}))};r();var Zt=_(require("react")),Fs=require("@fortawesome/free-solid-svg-icons"),Ls=require("@fortawesome/react-fontawesome"),Ps=require("react-select");var ad=t=>Zt.default.createElement(Ps.components.Menu,S(v({},t),{className:C.menu}),t.selectProps.isLoading?Zt.default.createElement("div",{className:C.loading},Zt.default.createElement(Ls.FontAwesomeIcon,{icon:Fs.faCircleNotch,className:"fa-spin",size:"lg"})):t.children);r();var Ds=_(require("react")),Bs=require("react-select");var pd=t=>Ds.default.createElement(Bs.components.Control,S(v({},t),{className:C.control}));r();var Gs=_(require("react")),Vs=_(require("classnames")),Us=require("react-select");var sd=t=>Gs.default.createElement(Us.components.Placeholder,S(v({},t),{className:(0,Vs.default)(C.placeholder,{[C.focused]:t.isFocused})}));r();var Ms=_(require("react")),Os=_(require("classnames")),Ws=require("react-select");var cd=t=>Ms.default.createElement(Ws.components.IndicatorsContainer,S(v({},t),{className:(0,Os.default)(C.indicator,{[C.expanded]:t.selectProps.menuIsOpen})}));r();var de=_(require("react")),qs=require("@fortawesome/free-solid-svg-icons"),zs=require("@fortawesome/react-fontawesome"),$s=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Zs=_(require("classnames")),Ks=require("react-select");var id=(Ho(),wo(Ko)).default,Hs=({RewaIcon:t,tokenId:e,icon:o})=>{let{isRewa:n}=(0,$s.getIdentifierType)(e);return n?de.default.createElement("span",{className:C.asset},t?de.default.createElement(t,{className:C.diamond}):de.default.createElement(id,{className:C.diamond})):o?de.default.createElement("img",{src:o,className:C.asset}):de.default.createElement(zs.FontAwesomeIcon,{icon:qs.faDiamond,className:C.asset})},ld=({children:t})=>de.default.createElement("div",{className:C.wrapper},t),Jr=(t,e,o)=>n=>{var u,y;let{selectProps:a,isDisabled:i,children:l}=n,m=a.value,d=(y=(u=m==null?void 0:m.assets)==null?void 0:u.svgUrl)!=null?y:null,f=(0,de.useMemo)(()=>{let h=String(m==null?void 0:m.token.usdPrice);return h!=null&&h.includes("$")?m==null?void 0:m.token.usdPrice:`$${m==null?void 0:m.token.usdPrice}`},[m==null?void 0:m.token.usdPrice]);return de.default.createElement(Ks.components.ValueContainer,S(v({},n),{className:C.container}),de.default.createElement("div",{className:(0,Zs.default)(C.icon,e)},de.default.createElement(Hs,{RewaIcon:o,rewaLabel:t,icon:d,isDisabled:i,tokenId:m==null?void 0:m.value})),de.default.createElement("div",{className:C.payload},de.default.createElement(ld,null,l,(m==null?void 0:m.token.usdPrice)&&de.default.createElement("small",{className:C.price},f))))};r();var Z=_(require("react")),Rs=require("@fortawesome/free-solid-svg-icons"),Xs=require("@fortawesome/react-fontawesome"),js=require("@terradharitri/sdk-dapp/constants"),Js=require("@terradharitri/sdk-dapp/UI/UsdValue"),Ys=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Qs=_(require("classnames")),ec=require("react-select");var{default:oc}=(Ho(),wo(Ko)),Yr=({RewaIcon:t,TokenTickerIcon:e,showBalanceUsdValue:o,showTokenPrice:n})=>a=>{var E,A,D,B;let{data:i,isSelected:l,isFocused:m,isDisabled:d,selectProps:f}=a,u=i,{isRewa:y}=(0,Ys.getIdentifierType)(u.value),h=u.token.assets?u.token.assets.svgUrl:null,b=Go({amount:u.token.balance,decimals:u.token.decimals||js.DECIMALS,addCommas:!0}),x=(A=(E=u.token)==null?void 0:E.usdPrice)==null?void 0:A.toString(),k=(B=(D=u.token)==null?void 0:D.valueUSD)==null?void 0:B.toString();return Z.default.createElement("div",{"data-testid":`${a.value}-option`},Z.default.createElement(ec.components.Option,S(v({},a),{className:(0,Qs.default)(C.option,{[C.selected]:l||m,[C.disabled]:d})}),Z.default.createElement("div",{className:C.image},y?Z.default.createElement("span",{className:C.icon},t?Z.default.createElement(t,null):Z.default.createElement(oc,null)):h?Z.default.createElement("img",{src:h,className:C.icon}):Z.default.createElement("span",{className:C.icon},Z.default.createElement(Xs.FontAwesomeIcon,{icon:Rs.faDiamond,className:C.diamond}))),Z.default.createElement("div",{className:C.info},Z.default.createElement("div",{className:C.left},Z.default.createElement("div",{className:C.ticker},Z.default.createElement("span",{className:C.value},f.inputValue?Z.default.createElement(tt,{text:u.token.ticker,highlight:f.inputValue}):u.token.ticker),e&&Z.default.createElement(e,{token:u.token})),n&&Z.default.createElement("small",{className:C.price},x)),Z.default.createElement("div",{className:C.right},Z.default.createElement("span",{className:C.value},b),o&&k&&Z.default.createElement(Js.UsdValue,{usd:1,decimals:4,amount:k,"data-testid":"token-price-usd-value",className:C.price,addEqualSign:!1}))),Z.default.createElement("div",{className:C.children},a.children)))};r();var Kt=_(require("react")),tc=_(require("classnames")),rc=require("react-select");var Qr=t=>e=>{let{selectProps:o,children:n}=e,a=o.value;return Kt.default.createElement(rc.components.SingleValue,S(v({},e),{className:(0,tc.default)(C.single,{[C.focused]:e.selectProps.menuIsOpen})}),Kt.default.createElement("div",{className:C.ticker},n,t&&Kt.default.createElement(t,{token:a==null?void 0:a.token})))};var{Menu:md,Control:dd,Input:_d,MenuList:ud,IndicatorsContainer:fd,Placeholder:gd}=en,pc=t=>{let{name:e,options:o,isLoading:n=!1,className:a="",noOptionsMessage:i="No Tokens",disabledOption:l,rewaLabel:m,RewaIcon:d,disabled:f,value:u,onBlur:y,onFocus:h,onChange:b,onMenuOpen:x,chainId:k,wrapperClassName:E="",showTokenPrice:A=!1,showBalanceUsdValue:D=!1,selectedTokenIconClassName:B,TokenTickerIcon:Y}=t,R=(0,Se.useRef)(null),ne=[m,vt(k)],ce=(0,Se.useMemo)(()=>Yr({rewaLabel:m,RewaIcon:d,showTokenPrice:A,showBalanceUsdValue:D,TokenTickerIcon:Y}),[]),I=(0,Se.useMemo)(()=>Jr(m,B,d),[]),Q=(0,Se.useMemo)(()=>Qr(Y),[]);(0,Se.useEffect)(()=>{let N=o.find(W=>W.value===(u==null?void 0:u.value)),P=(N==null?void 0:N.token.balance)===(u==null?void 0:u.token.balance);!N||P||b(N)},[o]);let K=N=>ne.includes(N),_e=N=>{var ye;let P=N.value===(l==null?void 0:l.value),W=K(N.value),ue=K((ye=l==null?void 0:l.value)!=null?ye:"");return P||W&&ue},ie=(N,P)=>{let W=N.data.token.ticker?N.data.token.ticker.toLowerCase().includes(P.toLowerCase()):!1,ue=N.data.token.name.toLowerCase().includes(P.toLowerCase());return Boolean(P)?W||ue:!0};return Se.default.createElement("div",{"data-testid":`${e}Select`,className:`${E} ${n?"select-holder-loading":""}`},Se.default.createElement("label",{htmlFor:e,"data-testid":"tokenIdLabel",className:C.label},"Token"),Se.default.createElement(ac.default,{ref:R,inputId:e,name:e,options:o,openMenuOnFocus:!0,isDisabled:f,isLoading:n,value:u,isOptionDisabled:_e,onBlur:y,filterOption:ie,onFocus:h,onChange:N=>{b(N),R&&R.current!==null&&R.current.blur()},isSearchable:t.isSearchable,maxMenuHeight:260,onMenuOpen:x,noOptionsMessage:()=>i,className:(0,nc.default)(C.select,a,{[C.disabled]:t.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:md,Control:dd,Input:_d,MenuList:ud,IndicatorsContainer:fd,ValueContainer:I,Placeholder:gd,Option:ce,SingleValue:Q}}))};r();r();var sc=_(require("react")),cc=_(require("classnames"));var ic=({hasErrors:t,className:e,error:o,"data-testid":n})=>t?sc.default.createElement("div",{className:(0,cc.default)(T.error,e),"data-testid":n},o):null;r();r();var Rt=_(require("react")),lc=_(require("classnames"));r();var yd=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(yd));var Ht={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"};var mc=({label:t,value:e,className:o,token:n,"data-testid":a,"data-value":i})=>Rt.default.createElement("div",{"data-testid":a,"data-value":i,className:(0,lc.default)(Ht.balance,o)},Rt.default.createElement("span",{className:Ht.label},t,": "),Rt.default.createElement("span",{className:Ht.value},e)," ",n==null?void 0:n.ticker);var on=({className:t,label:e,name:o,wrapperControlsClassName:n,tokenSelectProps:a,tokenBalanceProps:i,amountInputProps:l,amountErrorProps:m,maxButtonProps:d,readonly:f})=>we.default.createElement("div",{className:(0,Xt.default)(We.amount,t)},we.default.createElement("div",{className:We.label},e&&we.default.createElement("label",{htmlFor:o,className:T.label,"data-testid":"amountLabel"},e),we.default.createElement(mc,v({},i))),we.default.createElement("div",{className:(0,Xt.default)(We.wrapper,n,{[We.error]:l.isInvalid||a.isInvalid||m.hasErrors,[We.disabled]:f})},we.default.createElement(fs,v({},l)),we.default.createElement("div",{className:(0,Xt.default)(We.interaction,d.wrapperClassName)},d.isMaxButtonVisible&&we.default.createElement(Ss,v({},d)),we.default.createElement("div",{className:We.select},we.default.createElement(pc,v({},a))))),we.default.createElement(ic,v({},m)));r();var nt=_(require("react")),dc=require("@terradharitri/sdk-dapp/constants"),_c=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");var tn=()=>{var Vo,mn;let{checkInvalid:t}=he(),{tokensInfo:e,amountInfo:o,formInfo:n}=L(),{readonly:a}=n,{networkConfig:{rewaLabel:i,chainId:l}}=xe(),{rewaPriceInUsd:m}=kr(),{amount:d,onBlur:f,onChange:u,onMaxClicked:y,error:h,isInvalid:b,onFocus:x,maxAmountAvailable:k,isMaxClicked:E,isMaxButtonVisible:A,maxAmountMinusDust:D}=o,{allAvailableTokens:B,areTokensLoading:Y,getTokens:R,isTokenIdInvalid:ne,RewaIcon:ce,nft:I,onChangeTokenId:Q,tokenDetails:X,tokenId:K,tokenIdError:_e}=e,ie=B.map(qe=>({value:qe.identifier,label:String(qe.ticker),assets:qe.assets,token:qe})),{isRewa:N}=(0,_c.getIdentifierType)(K),P=ie.find(({value:qe})=>qe===K),W={id:"tokenId",value:P,name:"tokenId",isLoading:Y,options:ie,isSearchable:!0,onChange:qe=>{qe&&(Q(qe.value),u(""))},onMenuOpen:R,disabled:ae("tokenId",a),error:_e,isInvalid:ne,rewaLabel:i,chainId:l,RewaIcon:ce},ue=(0,nt.useMemo)(()=>nt.default.createElement(gs,{amount:d,rewaLabel:i,maxAmountMinusDust:D,tokenId:K,isMaxClicked:E}),[d,i,D,K,E]),Ae={name:"amount",required:!0,value:d,placeholder:"Amount",handleBlur:f,"data-testid":"amount",handleChange:u,onFocus:x,usdPrice:N?m:void 0,error:h,isInvalid:b,InfoDustComponent:ue},ye={token:X,inputAmount:d,onMaxClick:y,isMaxClicked:E,isMaxButtonVisible:A},be=t("amount")&&!Ae.value,V={hasErrors:Ae.isInvalid||W.isInvalid||be,error:Ae.error||W.error,className:T.error,"data-testid":Ae.error?`${"amount"}Error`:`${"tokenId"}Error`},ro={"data-testid":`available-${(Vo=I==null?void 0:I.identifier)!=null?Vo:K}`,"data-value":`${k} ${(mn=I==null?void 0:I.identifier)!=null?mn:K}`,label:"Available",token:P==null?void 0:P.token,value:Go({amount:X.balance,decimals:X.decimals||dc.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(I==null?void 0:I.type)===pe.NftEnumType.NonFungibleDCDT?null:nt.default.createElement(on,{name:"tokenId",amountErrorProps:V,tokenSelectProps:W,amountInputProps:Ae,tokenBalanceProps:ro,maxButtonProps:ye,label:"Amount",readonly:a})};r();r();var lo=_(require("react")),an=_(require("classnames"));r();r();r();var Ce=_(require("react")),Jt=require("@fortawesome/free-solid-svg-icons"),rn=require("@fortawesome/react-fontawesome"),uc=require("formik");r();r();var jt=()=>{let{formInfo:{isRewaTransaction:t,readonly:e},dataFieldInfo:{isAdvancedModeEnabled:o}}=L();return o?!1:!t||ae("data",e)};r();var bd=`.dapp-core-component__styles-module__advanced {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bd));var at={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"};var fc=()=>{let{formInfo:{readonly:t,isRewaTransaction:e}}=L(),{setFieldValue:o,values:n}=(0,uc.useFormikContext)(),[a,i]=(0,Ce.useState)(!1),[l,m]=(0,Ce.useState)(!1),d=jt(),f=!a&&!t&&d&&Boolean(n.data),u=()=>{i(!0),o("isAdvancedModeEnabled",!0)},y=()=>{m(!0),setTimeout(()=>{m(!1)},5e3)};return(0,Ce.useEffect)(()=>{!e&&a&&i(!1)},[e,n.amount]),f?l?Ce.default.createElement("div",{className:at.advanced,"data-testid":"confirmAdvancedMode",onClick:u},Ce.default.createElement(rn.FontAwesomeIcon,{icon:Jt.faCheck,className:"i-icon"}),Ce.default.createElement("span",{className:at.advancedText},"Confirm")):Ce.default.createElement("div",{"data-testid":"enableAdvancedMode",className:at.advanced,onClick:y},Ce.default.createElement(rn.FontAwesomeIcon,{icon:Jt.faScrewdriverWrench,className:"i-icon"}),Ce.default.createElement("span",{className:at.advancedText},"Advanced")):null};r();var vd=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vd));var nn={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"};var pn=({className:t})=>{let{dataFieldInfo:{data:e,dataError:o,isDataInvalid:n,onChange:a,onBlur:i}}=L(),l=jt();return lo.default.createElement("div",{className:(0,an.default)(nn.data,t)},lo.default.createElement("div",{className:We.label},lo.default.createElement("label",{htmlFor:"data",className:T.label},"Data"),lo.default.createElement(fc,null)),lo.default.createElement("div",{className:nn.wrapper},lo.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:l,"data-testid":"data",value:e,onBlur:i,onChange:a,spellCheck:"false",placeholder:"Add transaction data",className:(0,an.default)(T.textarea,{[T.invalid]:n,[T.disabled]:l})})),n&&lo.default.createElement("div",{className:T.error,"data-testid":"dataError"},o))};r();r();r();var to=_(require("react")),mo=_(require("classnames"));r();var hd=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hd));var re={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"};var sn=({disabled:t,percentageValue:e=0,onPercentageChange:o,className:n})=>{let a=[0,25,50,75,100],i="amountSlider";return to.default.createElement("div",{className:(0,mo.default)(re.amountSlider,n)},to.default.createElement("div",{className:re.amountSliderRange},to.default.createElement("input",{name:i,id:i,"data-testid":i,type:"range",disabled:t,min:0,max:100,value:String(e),className:(0,mo.default)(re.amountSliderInput,{[re.disabled]:t}),onChange:l=>{o(Number(l.target.value))}}),to.default.createElement("div",{style:{width:`${e}%`},className:(0,mo.default)(re.amountSliderCompletion,{[re.disabled]:t})}),a.map(l=>to.default.createElement("span",{onClick:()=>o(l),key:`breakpoint-${l}`,style:{left:`${l}%`},className:(0,mo.default)(re.amountSliderBreakpoint,{[re.completed]:l<=e,[re.disabled]:t})})),a.map(l=>to.default.createElement("span",{style:{left:`${l}%`},key:`breakpoint-${l}`,onClick:()=>o(l),className:(0,mo.default)(re.amountSliderPercentage,{[re.exact]:l===e,[re.disabled]:t})},l,"%")),to.default.createElement("span",{style:{left:`${e}%`},className:(0,mo.default)(re.amountSliderThumb,{[re.disabled]:t})},to.default.createElement("strong",{className:(0,mo.default)(re.amountSliderThumbPercentage,{[re.hidden]:a.includes(e)})},Math.round(e),"%"))))};r();r();var Ie=_(require("react")),gc=require("@fortawesome/free-solid-svg-icons"),yc=require("@fortawesome/react-fontawesome"),bc=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),vc=require("@terradharitri/sdk-dapp/UI/CopyButton"),hc=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),xc=require("@terradharitri/sdk-dapp/UI/Trim"),Tc=_(require("classnames")),kc=require("formik");r();var xd=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xd));var Ee={"can-transfer-warning":"dapp-core-component__styles-module__can-transfer-warning",canTransferWarning:"dapp-core-component__styles-module__can-transfer-warning","can-transfer-warning-heading":"dapp-core-component__styles-module__can-transfer-warning-heading",canTransferWarningHeading:"dapp-core-component__styles-module__can-transfer-warning-heading","can-transfer-warning-icon":"dapp-core-component__styles-module__can-transfer-warning-icon",canTransferWarningIcon:"dapp-core-component__styles-module__can-transfer-warning-icon","can-transfer-warning-label":"dapp-core-component__styles-module__can-transfer-warning-label",canTransferWarningLabel:"dapp-core-component__styles-module__can-transfer-warning-label","can-transfer-warning-addresses":"dapp-core-component__styles-module__can-transfer-warning-addresses",canTransferWarningAddresses:"dapp-core-component__styles-module__can-transfer-warning-addresses","can-transfer-warning-address":"dapp-core-component__styles-module__can-transfer-warning-address",canTransferWarningAddress:"dapp-core-component__styles-module__can-transfer-warning-address","can-transfer-warning-address-explorer":"dapp-core-component__styles-module__can-transfer-warning-address-explorer",canTransferWarningAddressExplorer:"dapp-core-component__styles-module__can-transfer-warning-address-explorer","can-transfer-warning-address-copy":"dapp-core-component__styles-module__can-transfer-warning-address-copy",canTransferWarningAddressCopy:"dapp-core-component__styles-module__can-transfer-warning-address-copy"};var cn=t=>{let{className:e}=t,{values:{nft:o,address:n}}=(0,kc.useFormikContext)();return!(o!=null&&o.allowedReceivers)||o.allowedReceivers.includes(n)?null:Ie.default.createElement("div",{className:(0,Tc.default)(Ee.canTransferWarning,e),"data-testid":"canTransferWarning"},Ie.default.createElement("div",{className:Ee.canTransferWarningHeading},Ie.default.createElement(yc.FontAwesomeIcon,{icon:gc.faExclamationTriangle,className:Ee.canTransferWarningIcon,size:"lg"}),Ie.default.createElement("div",{className:Ee.canTransferWarningTitle},Ie.default.createElement("div",{className:Ee.canTransferWarningLabel},"Warning!"),Ie.default.createElement("div",{className:Ee.canTransferWarningMessage},Vn))),Ie.default.createElement("div",{className:Ee.canTransferWarningAddresses},o.allowedReceivers.map(a=>Ie.default.createElement("div",{className:Ee.canTransferWarningAddress,key:a},Ie.default.createElement(xc.Trim,{text:a,className:Ee.canTransferWarningAddressTrim}),Ie.default.createElement(vc.CopyButton,{text:a,className:Ee.canTransferWarningAddressCopy}),Ie.default.createElement(hc.ExplorerLink,{page:`/${bc.ACCOUNTS_ENDPOINT}/${a}`,className:Ee.canTransferWarningAddressExplorer})))))};r();r();var So=_(require("react")),Sc=require("@fortawesome/free-solid-svg-icons"),wc=require("@fortawesome/react-fontawesome"),Cc=_(require("classnames"));r();var Td=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Td));var ko={"wrewa-warning":"dapp-core-component__styles-module__wrewa-warning",wrewaWarning:"dapp-core-component__styles-module__wrewa-warning","wrewa-warning-heading":"dapp-core-component__styles-module__wrewa-warning-heading",wrewaWarningHeading:"dapp-core-component__styles-module__wrewa-warning-heading","wrewa-warning-icon":"dapp-core-component__styles-module__wrewa-warning-icon",wrewaWarningIcon:"dapp-core-component__styles-module__wrewa-warning-icon","wrewa-warning-label":"dapp-core-component__styles-module__wrewa-warning-label",wrewaWarningLabel:"dapp-core-component__styles-module__wrewa-warning-label"};var ln=t=>{let{tokenId:e,className:o}=t,{networkConfig:{chainId:n}}=xe();return vt(n)!==e?null:So.default.createElement("div",{className:(0,Cc.default)(ko.wrewaWarning,o)},So.default.createElement("div",{className:ko.wrewaWarningHeading},So.default.createElement(wc.FontAwesomeIcon,{icon:Sc.faExclamationTriangle,className:ko.wrewaWarningIcon,size:"lg"}),So.default.createElement("div",{className:ko.wrewaWarningTitle},So.default.createElement("div",{className:ko.wrewaWarningLabel},"Warning!"),So.default.createElement("div",{className:ko.wrewaWarningMessage},Un))))};r();var kd=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kd));var Yt={form:"dapp-core-component__form-module__form",formFieldset:"dapp-core-component__form-module__formFieldset",formWrapper:"dapp-core-component__form-module__formWrapper","form-buttons":"dapp-core-component__form-module__form-buttons",formButtons:"dapp-core-component__form-module__form-buttons"};r();r();var Ec=t=>{var e,o;return((e=t.nft)==null?void 0:e.type)===pe.NftEnumType.NonFungibleDCDT?"NFT":((o=t.nft)==null?void 0:o.type)===pe.NftEnumType.SemiFungibleDCDT?"SFT":t.tokenDetails.ticker};var Sd=({className:t,GuardianScreen:e})=>{let{formInfo:o,accountInfo:n,amountInfo:a,tokensInfo:i}=L(),{values:l}=(0,Ac.useFormikContext)(),{txType:m,tokenId:d,address:f,balance:u,chainId:y,ledger:h}=l,{nft:b}=i,[x,k]=(0,M.useState)(),{amountRange:E,onSetAmountPercentage:A}=a,{renderKey:D,onValidateForm:B,onInvalidateForm:Y,onCloseForm:R,onSubmitForm:ne,onPreviewClick:ce,areValidatedValuesReady:I,isGuardianScreenVisible:Q,uiOptions:X,readonly:K,setGuardedTransaction:_e,setHasGuardianScreen:ie}=o,N=()=>F(void 0,null,function*(){if(!I)return;let be=yield Rn(l);try{let V=yield ta({address:f,balance:u,chainId:y,nonce:n.nonce,values:be});V.setVersion(Qt.TransactionVersion.withTxOptions());let ro=v({guarded:!0},h?{hashSign:!0}:{});V.setOptions(Qt.TransactionOptions.withOptions(ro)),k({0:V})}catch(V){k({})}});(0,M.useEffect)(()=>{N()},[l,I]),(0,M.useEffect)(()=>{ie(Boolean(e))},[]),(0,M.useEffect)(()=>{if(!x)return;let be=x[0];be&&_e(be)},[x]);let P=be=>{be.preventDefault(),R()},W=m==="NonFungibleDCDT",ue=m==="SemiFungibleDCDT",ye={onSignTransaction:()=>F(void 0,null,function*(){setTimeout(()=>{ne()})}),onPrev:Y,address:f,title:"",className:t,signedTransactions:x,setSignedTransactions:k,signStepInnerClasses:{}};return e&&Q?M.default.createElement(e,v({},ye)):I?M.default.createElement(Nr,{providerType:n.providerType}):M.default.createElement("form",{key:D,onSubmit:B,className:(0,Ic.default)(Yt.form,t)},M.default.createElement("fieldset",{className:Yt.formFieldset},(W||ue)&&b&&M.default.createElement(Dt,v({onClick:ce,txType:m},b)),M.default.createElement(Br,null),ue?M.default.createElement(Gr,null):M.default.createElement(tn,null),(X==null?void 0:X.showAmountSlider)&&!W&&M.default.createElement(sn,{onPercentageChange:A,percentageValue:E,disabled:Boolean(K)}),M.default.createElement(ln,{tokenId:d}),M.default.createElement(cn,null),M.default.createElement($r,null),M.default.createElement(pn,null)),M.default.createElement("div",{className:Yt.formButtons},M.default.createElement("button",{type:"button",id:"sendBtn","data-testid":"sendBtn",onClick:B,className:T.buttonSend},"Send ",Ec(i)),M.default.createElement("button",{type:"button",id:"closeButton","data-testid":"returnToWalletBtn",onClick:P,className:T.buttonText},"Cancel")))};0&&(module.exports={AmountSelect,AmountSelectInput,AmountSlider,Confirm,ConfirmScreen,Data,FeeAccordion,Form,GasLimit,GasPrice,HighlightText,InfoDust,Loader,NFTCanTransferWarning,Receiver,SFTAmount,SelectToken,WREWAWarning});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
