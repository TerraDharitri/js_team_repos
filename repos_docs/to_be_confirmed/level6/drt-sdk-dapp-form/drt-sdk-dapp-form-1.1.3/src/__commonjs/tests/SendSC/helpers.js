"use strict";var Yd=Object.create;var Et=Object.defineProperty,Qd=Object.defineProperties,eu=Object.getOwnPropertyDescriptor,ou=Object.getOwnPropertyDescriptors,tu=Object.getOwnPropertyNames,or=Object.getOwnPropertySymbols,ru=Object.getPrototypeOf,xn=Object.prototype.hasOwnProperty,Ua=Object.prototype.propertyIsEnumerable;var Va=(o,e,t)=>e in o?Et(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,x=(o,e)=>{for(var t in e||(e={}))xn.call(e,t)&&Va(o,t,e[t]);if(or)for(var t of or(e))Ua.call(e,t)&&Va(o,t,e[t]);return o},w=(o,e)=>Qd(o,ou(e));var Xo=(o,e)=>{var t={};for(var r in o)xn.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&or)for(var r of or(o))e.indexOf(r)<0&&Ua.call(o,r)&&(t[r]=o[r]);return t};var Tn=(o,e)=>()=>(o&&(e=o(o=0)),e);var tr=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),rr=(o,e)=>{for(var t in e)Et(o,t,{get:e[t],enumerable:!0})},Ma=(o,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of tu(e))!xn.call(o,a)&&a!==t&&Et(o,a,{get:()=>e[a],enumerable:!(r=eu(e,a))||r.enumerable});return o};var g=(o,e,t)=>(t=o!=null?Yd(ru(o)):{},Ma(e||!o||!o.__esModule?Et(t,"default",{value:o,enumerable:!0}):t,o)),jo=o=>Ma(Et({},"__esModule",{value:!0}),o);var S=(o,e,t)=>new Promise((r,a)=>{var p=d=>{try{i(t.next(d))}catch(u){a(u)}},s=d=>{try{i(t.throw(d))}catch(u){a(u)}},i=d=>d.done?r(d.value):Promise.resolve(d.value).then(p,s);i((t=t.apply(o,e)).next())});var Wa=tr(nr=>{"use strict";n();nr.byteLength=au;nr.toByteArray=su;nr.fromByteArray=lu;var Ze=[],De=[],nu=typeof Uint8Array!="undefined"?Uint8Array:Array,kn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Lo=0,Oa=kn.length;Lo<Oa;++Lo)Ze[Lo]=kn[Lo],De[kn.charCodeAt(Lo)]=Lo;var Lo,Oa;De["-".charCodeAt(0)]=62;De["_".charCodeAt(0)]=63;function qa(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=o.indexOf("=");t===-1&&(t=e);var r=t===e?0:4-t%4;return[t,r]}function au(o){var e=qa(o),t=e[0],r=e[1];return(t+r)*3/4-r}function pu(o,e,t){return(e+t)*3/4-t}function su(o){var e,t=qa(o),r=t[0],a=t[1],p=new nu(pu(o,r,a)),s=0,i=a>0?r-4:r,d;for(d=0;d<i;d+=4)e=De[o.charCodeAt(d)]<<18|De[o.charCodeAt(d+1)]<<12|De[o.charCodeAt(d+2)]<<6|De[o.charCodeAt(d+3)],p[s++]=e>>16&255,p[s++]=e>>8&255,p[s++]=e&255;return a===2&&(e=De[o.charCodeAt(d)]<<2|De[o.charCodeAt(d+1)]>>4,p[s++]=e&255),a===1&&(e=De[o.charCodeAt(d)]<<10|De[o.charCodeAt(d+1)]<<4|De[o.charCodeAt(d+2)]>>2,p[s++]=e>>8&255,p[s++]=e&255),p}function iu(o){return Ze[o>>18&63]+Ze[o>>12&63]+Ze[o>>6&63]+Ze[o&63]}function cu(o,e,t){for(var r,a=[],p=e;p<t;p+=3)r=(o[p]<<16&16711680)+(o[p+1]<<8&65280)+(o[p+2]&255),a.push(iu(r));return a.join("")}function lu(o){for(var e,t=o.length,r=t%3,a=[],p=16383,s=0,i=t-r;s<i;s+=p)a.push(cu(o,s,s+p>i?i:s+p));return r===1?(e=o[t-1],a.push(Ze[e>>2]+Ze[e<<4&63]+"==")):r===2&&(e=(o[t-2]<<8)+o[t-1],a.push(Ze[e>>10]+Ze[e>>4&63]+Ze[e<<2&63]+"=")),a.join("")}});var $a=tr(Sn=>{n();Sn.read=function(o,e,t,r,a){var p,s,i=a*8-r-1,d=(1<<i)-1,u=d>>1,_=-7,f=t?a-1:0,y=t?-1:1,b=o[e+f];for(f+=y,p=b&(1<<-_)-1,b>>=-_,_+=i;_>0;p=p*256+o[e+f],f+=y,_-=8);for(s=p&(1<<-_)-1,p>>=-_,_+=r;_>0;s=s*256+o[e+f],f+=y,_-=8);if(p===0)p=1-u;else{if(p===d)return s?NaN:(b?-1:1)*(1/0);s=s+Math.pow(2,r),p=p-u}return(b?-1:1)*s*Math.pow(2,p-r)};Sn.write=function(o,e,t,r,a,p){var s,i,d,u=p*8-a-1,_=(1<<u)-1,f=_>>1,y=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=r?0:p-1,v=r?1:-1,T=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(i=isNaN(e)?1:0,s=_):(s=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-s))<1&&(s--,d*=2),s+f>=1?e+=y/d:e+=y*Math.pow(2,1-f),e*d>=2&&(s++,d/=2),s+f>=_?(i=0,s=_):s+f>=1?(i=(e*d-1)*Math.pow(2,a),s=s+f):(i=e*Math.pow(2,f-1)*Math.pow(2,a),s=0));a>=8;o[t+b]=i&255,b+=v,i/=256,a-=8);for(s=s<<a|i,u+=a;u>0;o[t+b]=s&255,b+=v,s/=256,u-=8);o[t+b-v]|=T*128}});var tp=tr(Yo=>{"use strict";n();var wn=Wa(),Jo=$a(),za=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Yo.Buffer=h;Yo.SlowBuffer=gu;Yo.INSPECT_MAX_BYTES=50;var ar=2147483647;Yo.kMaxLength=ar;h.TYPED_ARRAY_SUPPORT=mu();!h.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function mu(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(t){return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.buffer}});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.byteOffset}});function po(o){if(o>ar)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,h.prototype),e}function h(o,e,t){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return An(o)}return Za(o,e,t)}h.poolSize=8192;function Za(o,e,t){if(typeof o=="string")return uu(o,e);if(ArrayBuffer.isView(o))return _u(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(Ke(o,ArrayBuffer)||o&&Ke(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Ke(o,SharedArrayBuffer)||o&&Ke(o.buffer,SharedArrayBuffer)))return En(o,e,t);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=o.valueOf&&o.valueOf();if(r!=null&&r!==o)return h.from(r,e,t);var a=fu(o);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return h.from(o[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}h.from=function(o,e,t){return Za(o,e,t)};Object.setPrototypeOf(h.prototype,Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function Ka(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function du(o,e,t){return Ka(o),o<=0?po(o):e!==void 0?typeof t=="string"?po(o).fill(e,t):po(o).fill(e):po(o)}h.alloc=function(o,e,t){return du(o,e,t)};function An(o){return Ka(o),po(o<0?0:Nn(o)|0)}h.allocUnsafe=function(o){return An(o)};h.allocUnsafeSlow=function(o){return An(o)};function uu(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=Xa(o,e)|0,r=po(t),a=r.write(o,e);return a!==t&&(r=r.slice(0,a)),r}function Cn(o){for(var e=o.length<0?0:Nn(o.length)|0,t=po(e),r=0;r<e;r+=1)t[r]=o[r]&255;return t}function _u(o){if(Ke(o,Uint8Array)){var e=new Uint8Array(o);return En(e.buffer,e.byteOffset,e.byteLength)}return Cn(o)}function En(o,e,t){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return e===void 0&&t===void 0?r=new Uint8Array(o):t===void 0?r=new Uint8Array(o,e):r=new Uint8Array(o,e,t),Object.setPrototypeOf(r,h.prototype),r}function fu(o){if(h.isBuffer(o)){var e=Nn(o.length)|0,t=po(e);return t.length===0||o.copy(t,0,0,e),t}if(o.length!==void 0)return typeof o.length!="number"||Fn(o.length)?po(0):Cn(o);if(o.type==="Buffer"&&Array.isArray(o.data))return Cn(o.data)}function Nn(o){if(o>=ar)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ar.toString(16)+" bytes");return o|0}function gu(o){return+o!=o&&(o=0),h.alloc(+o)}h.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==h.prototype};h.compare=function(e,t){if(Ke(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),Ke(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,a=t.length,p=0,s=Math.min(r,a);p<s;++p)if(e[p]!==t[p]){r=e[p],a=t[p];break}return r<a?-1:a<r?1:0};h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return h.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var a=h.allocUnsafe(t),p=0;for(r=0;r<e.length;++r){var s=e[r];if(Ke(s,Uint8Array))p+s.length>a.length?h.from(s).copy(a,p):Uint8Array.prototype.set.call(a,s,p);else if(h.isBuffer(s))s.copy(a,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=s.length}return a};function Xa(o,e){if(h.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||Ke(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var t=o.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return In(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return op(o).length;default:if(a)return r?-1:In(o).length;e=(""+e).toLowerCase(),a=!0}}h.byteLength=Xa;function yu(o,e,t){var r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return Eu(this,e,t);case"utf8":case"utf-8":return Ja(this,e,t);case"ascii":return wu(this,e,t);case"latin1":case"binary":return Cu(this,e,t);case"base64":return ku(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Iu(this,e,t);default:if(r)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),r=!0}}h.prototype._isBuffer=!0;function Po(o,e,t){var r=o[e];o[e]=o[t],o[t]=r}h.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)Po(this,t,t+1);return this};h.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)Po(this,t,t+3),Po(this,t+1,t+2);return this};h.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)Po(this,t,t+7),Po(this,t+1,t+6),Po(this,t+2,t+5),Po(this,t+3,t+4);return this};h.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Ja(this,0,e):yu.apply(this,arguments)};h.prototype.toLocaleString=h.prototype.toString;h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:h.compare(this,e)===0};h.prototype.inspect=function(){var e="",t=Yo.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};za&&(h.prototype[za]=h.prototype.inspect);h.prototype.compare=function(e,t,r,a,p){if(Ke(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),r===void 0&&(r=e?e.length:0),a===void 0&&(a=0),p===void 0&&(p=this.length),t<0||r>e.length||a<0||p>this.length)throw new RangeError("out of range index");if(a>=p&&t>=r)return 0;if(a>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,a>>>=0,p>>>=0,this===e)return 0;for(var s=p-a,i=r-t,d=Math.min(s,i),u=this.slice(a,p),_=e.slice(t,r),f=0;f<d;++f)if(u[f]!==_[f]){s=u[f],i=_[f];break}return s<i?-1:i<s?1:0};function ja(o,e,t,r,a){if(o.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Fn(t)&&(t=a?0:o.length-1),t<0&&(t=o.length+t),t>=o.length){if(a)return-1;t=o.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof e=="string"&&(e=h.from(e,r)),h.isBuffer(e))return e.length===0?-1:Ra(o,e,t,r,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(o,e,t):Uint8Array.prototype.lastIndexOf.call(o,e,t):Ra(o,[e],t,r,a);throw new TypeError("val must be string, number or Buffer")}function Ra(o,e,t,r,a){var p=1,s=o.length,i=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(o.length<2||e.length<2)return-1;p=2,s/=2,i/=2,t/=2}function d(b,v){return p===1?b[v]:b.readUInt16BE(v*p)}var u;if(a){var _=-1;for(u=t;u<s;u++)if(d(o,u)===d(e,_===-1?0:u-_)){if(_===-1&&(_=u),u-_+1===i)return _*p}else _!==-1&&(u-=u-_),_=-1}else for(t+i>s&&(t=s-i),u=t;u>=0;u--){for(var f=!0,y=0;y<i;y++)if(d(o,u+y)!==d(e,y)){f=!1;break}if(f)return u}return-1}h.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1};h.prototype.indexOf=function(e,t,r){return ja(this,e,t,r,!0)};h.prototype.lastIndexOf=function(e,t,r){return ja(this,e,t,r,!1)};function bu(o,e,t,r){t=Number(t)||0;var a=o.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var p=e.length;r>p/2&&(r=p/2);for(var s=0;s<r;++s){var i=parseInt(e.substr(s*2,2),16);if(Fn(i))return s;o[t+s]=i}return s}function vu(o,e,t,r){return pr(In(e,o.length-t),o,t,r)}function hu(o,e,t,r){return pr(Fu(e),o,t,r)}function xu(o,e,t,r){return pr(op(e),o,t,r)}function Tu(o,e,t,r){return pr(Lu(e,o.length-t),o,t,r)}h.prototype.write=function(e,t,r,a){if(t===void 0)a="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")a=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var s=!1;;)switch(a){case"hex":return bu(this,e,t,r);case"utf8":case"utf-8":return vu(this,e,t,r);case"ascii":case"latin1":case"binary":return hu(this,e,t,r);case"base64":return xu(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Tu(this,e,t,r);default:if(s)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),s=!0}};h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ku(o,e,t){return e===0&&t===o.length?wn.fromByteArray(o):wn.fromByteArray(o.slice(e,t))}function Ja(o,e,t){t=Math.min(o.length,t);for(var r=[],a=e;a<t;){var p=o[a],s=null,i=p>239?4:p>223?3:p>191?2:1;if(a+i<=t){var d,u,_,f;switch(i){case 1:p<128&&(s=p);break;case 2:d=o[a+1],(d&192)===128&&(f=(p&31)<<6|d&63,f>127&&(s=f));break;case 3:d=o[a+1],u=o[a+2],(d&192)===128&&(u&192)===128&&(f=(p&15)<<12|(d&63)<<6|u&63,f>2047&&(f<55296||f>57343)&&(s=f));break;case 4:d=o[a+1],u=o[a+2],_=o[a+3],(d&192)===128&&(u&192)===128&&(_&192)===128&&(f=(p&15)<<18|(d&63)<<12|(u&63)<<6|_&63,f>65535&&f<1114112&&(s=f))}}s===null?(s=65533,i=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|s&1023),r.push(s),a+=i}return Su(r)}var Ha=4096;function Su(o){var e=o.length;if(e<=Ha)return String.fromCharCode.apply(String,o);for(var t="",r=0;r<e;)t+=String.fromCharCode.apply(String,o.slice(r,r+=Ha));return t}function wu(o,e,t){var r="";t=Math.min(o.length,t);for(var a=e;a<t;++a)r+=String.fromCharCode(o[a]&127);return r}function Cu(o,e,t){var r="";t=Math.min(o.length,t);for(var a=e;a<t;++a)r+=String.fromCharCode(o[a]);return r}function Eu(o,e,t){var r=o.length;(!e||e<0)&&(e=0),(!t||t<0||t>r)&&(t=r);for(var a="",p=e;p<t;++p)a+=Pu[o[p]];return a}function Iu(o,e,t){for(var r=o.slice(e,t),a="",p=0;p<r.length-1;p+=2)a+=String.fromCharCode(r[p]+r[p+1]*256);return a}h.prototype.slice=function(e,t){var r=this.length;e=~~e,t=t===void 0?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);var a=this.subarray(e,t);return Object.setPrototypeOf(a,h.prototype),a};function ce(o,e,t){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>t)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||ce(e,t,this.length);for(var a=this[e],p=1,s=0;++s<t&&(p*=256);)a+=this[e+s]*p;return a};h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||ce(e,t,this.length);for(var a=this[e+--t],p=1;t>0&&(p*=256);)a+=this[e+--t]*p;return a};h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e=e>>>0,t||ce(e,1,this.length),this[e]};h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ce(e,2,this.length),this[e]|this[e+1]<<8};h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ce(e,2,this.length),this[e]<<8|this[e+1]};h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};h.prototype.readIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||ce(e,t,this.length);for(var a=this[e],p=1,s=0;++s<t&&(p*=256);)a+=this[e+s]*p;return p*=128,a>=p&&(a-=Math.pow(2,8*t)),a};h.prototype.readIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||ce(e,t,this.length);for(var a=t,p=1,s=this[e+--a];a>0&&(p*=256);)s+=this[e+--a]*p;return p*=128,s>=p&&(s-=Math.pow(2,8*t)),s};h.prototype.readInt8=function(e,t){return e=e>>>0,t||ce(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};h.prototype.readInt16LE=function(e,t){e=e>>>0,t||ce(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};h.prototype.readInt16BE=function(e,t){e=e>>>0,t||ce(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};h.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};h.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};h.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),Jo.read(this,e,!0,23,4)};h.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),Jo.read(this,e,!1,23,4)};h.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ce(e,8,this.length),Jo.read(this,e,!0,52,8)};h.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ce(e,8,this.length),Jo.read(this,e,!1,52,8)};function Ae(o,e,t,r,a,p){if(!h.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<p)throw new RangeError('"value" argument is out of bounds');if(t+r>o.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,r,a){if(e=+e,t=t>>>0,r=r>>>0,!a){var p=Math.pow(2,8*r)-1;Ae(this,e,t,r,p,0)}var s=1,i=0;for(this[t]=e&255;++i<r&&(s*=256);)this[t+i]=e/s&255;return t+r};h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,r,a){if(e=+e,t=t>>>0,r=r>>>0,!a){var p=Math.pow(2,8*r)-1;Ae(this,e,t,r,p,0)}var s=r-1,i=1;for(this[t+s]=e&255;--s>=0&&(i*=256);)this[t+s]=e/i&255;return t+r};h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,1,255,0),this[t]=e&255,t+1};h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};h.prototype.writeIntLE=function(e,t,r,a){if(e=+e,t=t>>>0,!a){var p=Math.pow(2,8*r-1);Ae(this,e,t,r,p-1,-p)}var s=0,i=1,d=0;for(this[t]=e&255;++s<r&&(i*=256);)e<0&&d===0&&this[t+s-1]!==0&&(d=1),this[t+s]=(e/i>>0)-d&255;return t+r};h.prototype.writeIntBE=function(e,t,r,a){if(e=+e,t=t>>>0,!a){var p=Math.pow(2,8*r-1);Ae(this,e,t,r,p-1,-p)}var s=r-1,i=1,d=0;for(this[t+s]=e&255;--s>=0&&(i*=256);)e<0&&d===0&&this[t+s+1]!==0&&(d=1),this[t+s]=(e/i>>0)-d&255;return t+r};h.prototype.writeInt8=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};h.prototype.writeInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};h.prototype.writeInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};h.prototype.writeInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};h.prototype.writeInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Ya(o,e,t,r,a,p){if(t+r>o.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Qa(o,e,t,r,a){return e=+e,t=t>>>0,a||Ya(o,e,t,4,34028234663852886e22,-34028234663852886e22),Jo.write(o,e,t,r,23,4),t+4}h.prototype.writeFloatLE=function(e,t,r){return Qa(this,e,t,!0,r)};h.prototype.writeFloatBE=function(e,t,r){return Qa(this,e,t,!1,r)};function ep(o,e,t,r,a){return e=+e,t=t>>>0,a||Ya(o,e,t,8,17976931348623157e292,-17976931348623157e292),Jo.write(o,e,t,r,52,8),t+8}h.prototype.writeDoubleLE=function(e,t,r){return ep(this,e,t,!0,r)};h.prototype.writeDoubleBE=function(e,t,r){return ep(this,e,t,!1,r)};h.prototype.copy=function(e,t,r,a){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<r&&(a=r),a===r||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-r&&(a=e.length-t+r);var p=a-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,a):Uint8Array.prototype.set.call(e,this.subarray(r,a),t),p};h.prototype.fill=function(e,t,r,a){if(typeof e=="string"){if(typeof t=="string"?(a=t,t=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!h.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){var p=e.charCodeAt(0);(a==="utf8"&&p<128||a==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<r;++s)this[s]=e;else{var i=h.isBuffer(e)?e:h.from(e,a),d=i.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<r-t;++s)this[s+t]=i[s%d]}return this};var Au=/[^+/0-9A-Za-z-_]/g;function Nu(o){if(o=o.split("=")[0],o=o.trim().replace(Au,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function In(o,e){e=e||1/0;for(var t,r=o.length,a=null,p=[],s=0;s<r;++s){if(t=o.charCodeAt(s),t>55295&&t<57344){if(!a){if(t>56319){(e-=3)>-1&&p.push(239,191,189);continue}else if(s+1===r){(e-=3)>-1&&p.push(239,191,189);continue}a=t;continue}if(t<56320){(e-=3)>-1&&p.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(e-=3)>-1&&p.push(239,191,189);if(a=null,t<128){if((e-=1)<0)break;p.push(t)}else if(t<2048){if((e-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Fu(o){for(var e=[],t=0;t<o.length;++t)e.push(o.charCodeAt(t)&255);return e}function Lu(o,e){for(var t,r,a,p=[],s=0;s<o.length&&!((e-=2)<0);++s)t=o.charCodeAt(s),r=t>>8,a=t%256,p.push(a),p.push(r);return p}function op(o){return wn.toByteArray(Nu(o))}function pr(o,e,t,r){for(var a=0;a<r&&!(a+t>=e.length||a>=o.length);++a)e[a+t]=o[a];return a}function Ke(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function Fn(o){return o!==o}var Pu=function(){for(var o="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)e[r+a]=o[t]+o[a];return e}()});var sp=tr((Pf,pp)=>{n();var oe=pp.exports={},Xe,je;function Ln(){throw new Error("setTimeout has not been defined")}function Pn(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Xe=setTimeout:Xe=Ln}catch(o){Xe=Ln}try{typeof clearTimeout=="function"?je=clearTimeout:je=Pn}catch(o){je=Pn}})();function rp(o){if(Xe===setTimeout)return setTimeout(o,0);if((Xe===Ln||!Xe)&&setTimeout)return Xe=setTimeout,setTimeout(o,0);try{return Xe(o,0)}catch(e){try{return Xe.call(null,o,0)}catch(t){return Xe.call(this,o,0)}}}function Du(o){if(je===clearTimeout)return clearTimeout(o);if((je===Pn||!je)&&clearTimeout)return je=clearTimeout,clearTimeout(o);try{return je(o)}catch(e){try{return je.call(null,o)}catch(t){return je.call(this,o)}}}var so=[],Qo=!1,Do,sr=-1;function Gu(){!Qo||!Do||(Qo=!1,Do.length?so=Do.concat(so):sr=-1,so.length&&np())}function np(){if(!Qo){var o=rp(Gu);Qo=!0;for(var e=so.length;e;){for(Do=so,so=[];++sr<e;)Do&&Do[sr].run();sr=-1,e=so.length}Do=null,Qo=!1,Du(o)}}oe.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];so.push(new ap(o,e)),so.length===1&&!Qo&&rp(np)};function ap(o,e){this.fun=o,this.array=e}ap.prototype.run=function(){this.fun.apply(null,this.array)};oe.title="browser";oe.browser=!0;oe.env={};oe.argv=[];oe.version="";oe.versions={};function io(){}oe.on=io;oe.addListener=io;oe.once=io;oe.off=io;oe.removeListener=io;oe.removeAllListeners=io;oe.emit=io;oe.prependListener=io;oe.prependOnceListener=io;oe.listeners=function(o){return[]};oe.binding=function(o){throw new Error("process.binding is not supported")};oe.cwd=function(){return"/"};oe.chdir=function(o){throw new Error("process.chdir is not supported")};oe.umask=function(){return 0}});var c,l,Df,n=Tn(()=>{c=g(tp()),l=g(sp()),Df=function(o){function e(){var r=this||self;return delete o.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var t=__magic__;return t}(Object)});var $t={};rr($t,{default:()=>T_});var Rr,x_,T_,zt=Tn(()=>{"use strict";n();Rr=g(require("react")),x_=o=>Rr.createElement("svg",x({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},o),Rr.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Rr.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),T_=x_});var Nc={};rr(Nc,{default:()=>A_});var Kr,I_,A_,Fc=Tn(()=>{"use strict";n();Kr=g(require("react")),I_=o=>Kr.createElement("svg",x({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},o),Kr.createElement("g",null,Kr.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),A_=I_});var If={};rr(If,{fillInForm:()=>Cf,finalFee:()=>wf,setResponse:()=>Ef});module.exports=jo(If);n();var Zo=require("@testing-library/react");n();n();var ip=require("@terradharitri/sdk-dapp/constants/index"),cp=require("@terradharitri/sdk-dapp/types/enums.types"),ir="drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c",Go=ip.fallbackNetworkConfigurations[cp.EnvironmentsEnum.testnet],It="drt1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqeyzkqc";n();var Bo=require("msw"),lp=require("msw/node");var cr=o=>(e,t,r)=>t(r.status(200),r.json(o)),Bu=[...["tokens","nfts","sfts"].map(o=>Bo.rest.get(`${Go.apiAddress}/accounts/${ir}/${o}`,cr([]))),Bo.rest.get(`${Go.apiAddress}/accounts/${It}`,cr({})),Bo.rest.get(`${Go.apiAddress}/economics`,cr({totalSupply:20431908,circulatingSupply:19101908,staked:5562989,price:58.14,marketCap:1110584931,apr:.350951,topUpApr:.150087,baseApr:.413132})),Bo.rest.get(`${Go.apiAddress}/transactions`,cr([]))],mp=(0,lp.setupServer)(...Bu);n();n();var ne=(u=>(u.receiver="receiver",u.gasPrice="gasPrice",u.data="data",u.tokenId="tokenId",u.amount="amount",u.gasLimit="gasLimit",u.receiverUsername="receiverUsername",u.rawReceiverUsername="rawReceiverUsername",u.senderUsername="senderUsername",u))(ne||{});n();n();var Zd=g(require("react")),Kd=require("@testing-library/react");n();var Ho=g(require("react")),zd=require("@terradharitri/sdk-dapp/constants/network"),hn=require("@terradharitri/sdk-dapp/types/enums.types"),Rd=require("@terradharitri/sdk-dapp/UI/Loader");n();n();var Wo=g(require("react")),Ji=require("@terradharitri/sdk-dapp/constants/index"),Yi=require("formik");n();n();var dp="Token can only be transfered to one of the following addresses:",up="WREWA is not REWA! It can not be sent to exchanges. It can not be staked or delegated. It can not be used as transaction fee.";var Dn="600000000",_p=10,co="500000",fp=75e4,gp=1e6,yp=2e5,et="5000000000000000",P="0",bp="WREWA-bd4d79";n();var Se=g(require("react")),Xi=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var Tp=g(require("axios"));n();n();n();var xp=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var vp=require("@terradharitri/sdk-dapp/constants/index");n();var Vu={D:"devnet",T:"testnet",1:"mainnet"},Uu={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function ot(o){return Vu[o]}function lr(o){return Uu[o]||bp}function hp(o){let e=ot(o),t=vp.fallbackNetworkConfigurations[e].apiAddress;if(!t)throw"Could not extract api address for environment, check if you have a valid chainID";return t}function mr(o){return S(this,null,function*(){let e=hp(o);return yield(0,xp.getServerConfiguration)(e)})}n();var Mu={mainnet:{delegationContract:"drt1qqqqqqqqqqqqqpgqxwakt2g7u9atsnr03gqcgmhcv38pt7mkd94q8vqld4",delegationContractData:{minGasLimit:"75000000"}},devnet:{delegationContract:"drt1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqeyzkqc",delegationContractData:{minGasLimit:"75000000"}},testnet:{delegationContract:"drt1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqeyzkqc",delegationContractData:{minGasLimit:"75000000"}}};function dr(o){let e=ot(o);return e?Mu[e]:null}var ur={value:null};function tt(o){return ur.value={baseURL:o.apiAddress,timeout:Number(o.apiTimeout)},ur.value}function ae(o){return S(this,null,function*(){if(ur.value!=null)return ur.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),o!=null){let t=yield mr(o);return tt(t)}let e="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(e),e})}function kp(o,e){return S(this,null,function*(){let t=e||(yield ae()),{data:r}=yield Tp.default.get(`/accounts/${o}`,t);return r})}n();n();var Sp=g(require("axios"));function wp(){return S(this,null,function*(){try{let o=yield ae(),{data:e}=yield Sp.default.get("economics",o);return e}catch(o){return console.error("err fetching economics info",o),null}})}n();n();var rt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ou=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Bn=g(require("axios")),Cp=g(require("lodash/uniqBy"));var qu=1e3,Gn=100;function Wu(a){return S(this,arguments,function*({address:o,size:e,from:t,search:r}){let p=new URLSearchParams(w(x(x({},t!=null&&e!=null?{from:String(t),size:String(e)}:{}),r?{search:r}:{}),{includeMetaDCDT:"true"})).toString(),s=yield ae();return Bn.default.get(`/${rt.ACCOUNTS_ENDPOINT}/${o}/${rt.TOKENS_ENDPOINT}?${p}`,s)})}function Ep(o,e){return S(this,null,function*(){let{address:t,token:r}=o,a=e||(yield ae());return Bn.default.get(`/${rt.ACCOUNTS_ENDPOINT}/${t}/${rt.TOKENS_ENDPOINT}/${r}`,a)})}function $u(a){return S(this,arguments,function*({address:o,page:e=1,search:t,size:r}){let p={address:o,search:t};r!=null&&(p.from=(e-1)*Gn,p.size=Gn);let{data:s}=yield Wu(p);return s})}function Ip(o){return S(this,null,function*(){let e=[],t=!0,r=1;for(;t;)try{let a=yield $u({address:o,size:qu,page:r});if(a==null||(a==null?void 0:a.length)===0){t=!1;break}let p=a.map(s=>x({},s));if(e.push(...p),a.length!=Gn){t=!1;break}r++}catch(a){console.log(a),t=!1}return(0,Cp.default)(e,a=>a.identifier)})}n();var Ap=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Np=g(require("axios"));n();n();n();var Z=require("@terradharitri/sdk-dapp/types/tokens.types");n();n();function Fp(o,e){return S(this,null,function*(){if(o.type!==Z.NftEnumType.MetaDCDT)return null;let t=e||(yield ae());try{let{data:r}=yield Np.default.get(`/${Ap.COLLECTIONS_ENDPOINT}/${o.collection}`,t);return(r==null?void 0:r.canTransfer)===!1?r==null?void 0:r.roles.map(({address:s,canTransfer:i})=>i?s:"").filter(s=>Boolean(s)):null}catch(r){return console.error(`Unable to get canTransfer information for collection ${o.collection}`,r),null}})}n();var At=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Vn=g(require("axios"));function _r(r,a){return S(this,arguments,function*({address:o,identifier:e},t){try{let p=t||(yield ae()),{data:s}=yield Vn.default.get(`/${At.ACCOUNTS_ENDPOINT}/${o}/${At.NFTS_ENDPOINT}/${e}`,p);return s||null}catch(p){return null}})}function Lp(o,e){return S(this,null,function*(){try{let t=e||(yield ae()),{data:r}=yield Vn.default.get(`/${At.NFTS_ENDPOINT}/${o}`,t);return r||null}catch(t){return null}})}n();n();var Pp=g(require("axios"));function Dp(o){return S(this,null,function*(){try{let e=yield ae(),{data:t}=yield Pp.default.post("/transaction/cost",o,e);return{data:t,success:!0}}catch(e){return console.error(e),{success:!1}}})}n();var nt=g(require("react")),Gp=(0,nt.createContext)({});function Bp({children:o,value:e}){return nt.default.createElement(Gp.Provider,{value:e},o)}function Ne(){return(0,nt.useContext)(Gp)}n();n();var ye=g(require("react")),_i=require("@terradharitri/sdk-dapp/constants/index"),fi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Or=g(require("bignumber.js")),gi=require("formik");n();n();n();var Nt=require("bech32"),zu=o=>{let e=Nt.bech32.toWords(c.Buffer.from(o,"hex"));return Nt.bech32.encode("drt",e)},Ru=o=>{let e=Nt.bech32.decode(o,256);return c.Buffer.from(Nt.bech32.fromWords(e.words)).toString("hex")},Vp={encode:zu,decode:Ru};n();n();var Vo=({initialValues:o,gasLimit:e,touched:t})=>o.gasLimit!==e&&t.gasLimit;n();var Te=(o,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(o);n();var fr=o=>!["REWA","DCDT"].includes(o);n();var Up=o=>Boolean(o==null?void 0:o.startsWith("drt1"));n();var Mp=require("@terradharitri/sdk-dapp/constants"),Op=require("@terradharitri/sdk-dapp/utils/account/getAccount");var gr=o=>S(void 0,null,function*(){let e=o.txType==="REWA"?o.amount:Mp.ZERO,t=fr(o.txType),r=yield(0,Op.getAccount)(o.receiver),a=r==null?void 0:r.username,p=t?o.senderUsername:a,s=w(x({},o),{amount:e,receiverUsername:p});return delete s.rawReceiverUsername,s});n();n();var Un=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),qp=({nft:o,skipDescription:e})=>{var T,k;let{name:t,metadata:r,media:a,isNsfw:p,scamInfo:s,verified:i}=o,d="Scam - ",{isSuspicious:u,message:_}=(0,Un.getScamFlag)({verified:i,message:t,isNsfw:p,scamInfo:s,messagePrefix:d});if(!(r!=null&&r.description)||e){let C=u?"placeholder":(T=a==null?void 0:a[0])==null?void 0:T.thumbnailUrl;return{isSuspicious:u,name:t||_,thumbnail:C,description:""}}let{message:f,isSuspicious:y}=(0,Un.getScamFlag)({message:r.description,messagePrefix:d,verified:i}),b=u||y,v=b?"placeholder":(k=a==null?void 0:a[0])==null?void 0:k.thumbnailUrl;return{isSuspicious:b,name:t||_,thumbnail:v,description:f||r.description}};n();var Hu=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var yr=g(require("anchorme")),Mn=o=>o.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Wp=(o,e)=>{if(e){let t=`[Message hidden due to suspicious content - ${e.info}]`;if(o.length>1e3)return{output:t,stringWithLinks:o,found:!0};let r=Mn(o.normalize("NFKC")),a=yr.default.list(r),p=[];if(a.length>0){let s=t;a.forEach((i,d)=>{let{string:u}=i,_="",f="",y=u;for(let b=0;b<s.length;b++){let v=s.slice(b),[T]=yr.default.list(Mn(v));T&&u===T.string&&(_=s.substring(0,b))}for(let b=t.length;b>0;b--){let v=s.slice(0,b),[T]=yr.default.list(Mn(v));T&&u===T.string&&(f=s.substring(b))}p.push(_),p.push(y),s=f,d===a.length-1&&p.push(f)})}else p.push(o);return{output:t,stringWithLinks:p.join(""),found:!0}}else return{output:o,stringWithLinks:"",found:!1}};n();n();var On=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),we=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),qn=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),J=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();var Ce=g(require("react")),Us=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ms=require("formik");n();n();var Cr=require("@terradharitri/sdk-dapp/constants/index"),ls=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),wr=g(require("bignumber.js"));n();n();var Ft=require("@terradharitri/sdk-dapp/constants/index");function br({feeLimit:o,rewaPriceInUsd:e}){let t=(0,we.formatAmount)({input:o,decimals:Ft.DECIMALS,digits:Ft.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,qn.getUsdValue)({amount:t,usd:e,decimals:Ft.DIGITS})}`}n();var zp=require("@terradharitri/sdk-dapp/constants/index");var Je=(o="")=>{let e=fp+o.length*zp.GAS_PER_DATA_BYTE;return o.startsWith("DCDTNFTBurn")?yp.toString():String(Math.max(e,gp))};n();var vr=require("@terradharitri/sdk-dapp/constants/index"),Wn=g(require("bignumber.js"));n();var Rp=require("@terradharitri/sdk-dapp/constants/index");function Fe(o=!1){return o?Rp.EXTRA_GAS_LIMIT_GUARDED_TX:0}var Ye=({data:o,isGuarded:e})=>{let t=new Wn.default(vr.GAS_LIMIT),r=new Wn.default(vr.GAS_PER_DATA_BYTE),a=o?r.times(c.Buffer.from(o).length):0,p=Fe(e);return t.plus(a).plus(p).toString(10)};n();var Hp=require("@terradharitri/sdk-dapp/constants/index");function Lt({tokens:o,tokenId:e}){let t=o.find(({identifier:p})=>p===e),r=t?t.decimals:Hp.DECIMALS,a=(t==null?void 0:t.balance)||P;return w(x({},t),{decimals:r,identifier:(t==null?void 0:t.identifier)||"",name:(t==null?void 0:t.name)||"",ticker:(t==null?void 0:t.ticker)||"",balance:a})}var at=Lt;n();n();var ze=require("@terradharitri/sdk-core"),Zp=require("@terradharitri/sdk-dapp/constants/index"),Kp=g(require("bignumber.js"));function hr({amount:o,data:e,nonce:t,receiver:r,receiverUsername:a,sender:p,senderUsername:s,gasPrice:i,gasLimit:d,chainId:u}){let _=new Kp.default((0,J.parseAmount)(o));return new ze.Transaction({nonce:t,value:ze.TokenPayment.rewaFromBigInteger(_.toString(10)),sender:new ze.Address(p),receiver:new ze.Address(r),gasPrice:parseInt(i),gasLimit:parseInt(d),senderUsername:s,receiverUsername:a,data:new ze.TransactionPayload(e),chainID:u,version:new ze.TransactionVersion(Zp.VERSION)})}n();function vo(o){return isNaN(Number(o))||o===""?(0,J.parseAmount)("0"):(0,J.parseAmount)(o)}function xr(o){return S(this,null,function*(){let{address:e,balance:t,chainId:r,nonce:a,values:p}=o,{amount:s,receiver:i,data:d,gasLimit:u,gasPrice:_,nft:f,receiverUsername:y,senderUsername:b}=p,v=Boolean(f)?e:i;try{return hr({balance:t,amount:String(s),gasLimit:String(u),gasPrice:vo(_),data:d.trim(),receiver:v,receiverUsername:y,senderUsername:b,sender:e,nonce:a,chainId:r})}catch(T){throw console.log("Prepare transaction error",T),T}})}n();var Zu=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");n();var Xp=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");function Pt({nft:o,tokenId:e}){let{isDcdt:t,isNft:r,isRewa:a}=(0,Xp.getIdentifierType)(e);return a?"REWA":(o==null?void 0:o.type)===Z.NftEnumType.NonFungibleDCDT?"NonFungibleDCDT":(o==null?void 0:o.type)===Z.NftEnumType.SemiFungibleDCDT?"SemiFungibleDCDT":(o==null?void 0:o.type)===Z.NftEnumType.MetaDCDT||r?"MetaDCDT":t?"DCDT":"REWA"}var jp=Pt;n();var Tr=g(require("bignumber.js"));var kr=o=>o.length%2===0?o:`0${o}`,Ku=({amount:o,decimals:e,tokenId:t})=>{let r=Boolean(o)?o:P,a=kr(c.Buffer.from(t).toString("hex")),p=kr(new Tr.default((0,J.parseAmount)(r,e)).toString(16));return`DCDTTransfer@${a}@${p}`},$n=({nft:o,amount:e,receiver:t,errors:r})=>{if(!(o&&e&&t&&!r))return"";try{let p="DCDTNFTTransfer",s=(o==null?void 0:o.type)===Z.NftEnumType.MetaDCDT?(0,J.parseAmount)(e,o.decimals):e;return p+=`@${c.Buffer.from(String(o.collection)).toString("hex")}`,p+=`@${kr(new Tr.default(String(o.nonce)).toString(16))}`,p+=`@${kr(new Tr.default(s).toString(16))}`,p+=`@${Vp.decode(t)}`,p}catch(p){return""}},Jp=({txType:o,values:e,nft:t,amountError:r,receiverError:a})=>{let{tokens:p,tokenId:s,amount:i,receiver:d}=e;if(p&&o==="DCDT"&&!r){let{decimals:u}=at({tokens:p,tokenId:s});return Ku({amount:i,tokenId:s,decimals:u})}return o!=="REWA"?$n({nft:t,amount:i,receiver:d,errors:Boolean(r||a)}):e.data};n();var es=require("@terradharitri/sdk-dapp/constants/index"),os=require("@terradharitri/sdk-dapp/utils/smartContracts"),ts=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Uo=g(require("bignumber.js"));n();var Yp=g(require("bignumber.js"));var zn=s=>S(void 0,[s],function*({balance:o,address:e,isGuarded:t,nonce:r,values:a,chainId:p}){var U,M,W;let{amount:i,receiver:d,data:u,gasLimit:_,gasPrice:f}=a,b=hr({balance:o,amount:String(i),gasLimit:String(_),gasPrice:vo(f),data:u.trim(),receiver:d,sender:e,nonce:r,chainId:p}).toPlainObject(),{data:v,success:T}=yield Dp(w(x({},b),{sender:e})),k=Number((U=v==null?void 0:v.data)==null?void 0:U.txGasUnits),C=(M=v==null?void 0:v.data)==null?void 0:M.returnMessage;if(!Boolean(T&&(v==null?void 0:v.code)==="successful"&&k&&k!==0))return{gasLimit:_,gasLimitCostError:(W=v==null?void 0:v.data)==null?void 0:W.returnMessage};if(!C)return{gasLimit:new Yp.default(k).times(_p).dividedToIntegerBy(100).plus(k).toString(10)};let I=Ye({data:a.data?a.data.trim():"",isGuarded:t});return{gasLimit:String(k)===P?I:String(k)}}),Qp=zn;var rs=b=>S(void 0,[b],function*({computedTokenId:o,receiver:e,isInternal:t,balance:r,address:a,isGuarded:p,nonce:s,amount:i,data:d,gasLimit:u,gasPrice:_,delegationContractData:f,chainId:y}){var V;let v=Fe(p),T=f==null?void 0:f.delegationContract,k=(V=f==null?void 0:f.delegationContractData.minGasLimit)!=null?V:P;if(!new Uo.default(u).isNaN()&&new Uo.default(u).isGreaterThan(P))return{initGasLimit:u};if((0,os.isContract)(e)&&!t){let{gasLimit:U,gasLimitCostError:M}=yield Qp({balance:r,address:a,nonce:s,values:{amount:i,receiver:e,data:d,gasLimit:u,gasPrice:_},chainId:y});return{initGasLimit:e===T?new Uo.default(U).plus(k).plus(v).toString():U,initGasLimitError:M}}if(d.length>0)return{initGasLimit:Ye({data:d.trim(),isGuarded:p})};let{isDcdt:A,isNft:I}=(0,ts.getIdentifierType)(o);return A?{initGasLimit:new Uo.default(co).plus(v).toString()}:I?{initGasLimit:new Uo.default(Je()).plus(v).toString()}:{initGasLimit:new Uo.default(es.GAS_LIMIT).plus(v).toString()}});n();var pt=require("@terradharitri/sdk-dapp/constants/index"),ss=g(require("bignumber.js"));var ns,as,ps,Ge=(0,we.formatAmount)({input:String((ns=pt.GAS_PRICE)!=null?ns:1e9),decimals:(as=pt.DECIMALS)!=null?as:18,showLastNonZeroDecimal:!0,digits:(ps=pt.DIGITS)!=null?ps:4}),Dt=new ss.default(Ge).times(10).toString(10);n();var ho=require("@terradharitri/sdk-dapp/constants/index"),Gt=g(require("bignumber.js"));function is({balance:o=P,gasLimit:e=P,gasPrice:t,decimals:r,digits:a,data:p="",chainId:s}){let i=new Gt.default(o),d=new Gt.default(et),u=new Gt.default((0,On.calculateFeeLimit)({gasPrice:t,gasLimit:e,data:p,chainId:s,gasPerDataByte:String(ho.GAS_PER_DATA_BYTE),gasPriceModifier:String(ho.GAS_PRICE_MODIFIER)})),_=i.minus(u),f=_.minus(d),y=_.isGreaterThanOrEqualTo(0)?(0,we.formatAmount)({input:_.toString(10),decimals:r,digits:a,showLastNonZeroDecimal:!0,addCommas:!1}):P,b=f.isGreaterThanOrEqualTo(0)?(0,we.formatAmount)({input:f.toString(10),decimals:r,digits:a,showLastNonZeroDecimal:!0,addCommas:!1}):y;return{entireBalance:y,entireBalanceMinusDust:b,parsedEntireBalance:_.isGreaterThan(0)?_.toString(10):P}}function Rn({balance:o=P,decimals:e=ho.DECIMALS,digits:t=ho.DIGITS}){let r=new Gt.default(o);if(r.isGreaterThanOrEqualTo(0)){let a=r.toString(10);return(0,we.formatAmount)({input:a,decimals:e,digits:t>e?e:t,showLastNonZeroDecimal:!0,addCommas:!1})}return P}n();var cs=g(require("bignumber.js"));function Sr({txType:o,data:e="",isGuarded:t}){let r=Fe(t),a=Je();return o==="DCDT"&&(a=co),o==="REWA"&&(a=Ye({data:e.trim()})),new cs.default(a).plus(r).toString(10)}var xo=({amount:o,balance:e,gasPrice:t,gasLimit:r,data:a,chainId:p})=>{let s=(0,J.parseAmount)(o.toString()),i=new wr.default(s),d=new wr.default(e),u=new wr.default((0,ls.calculateFeeLimit)({gasPrice:vo(t),gasLimit:r,data:a,chainId:p,gasPerDataByte:String(Cr.GAS_PER_DATA_BYTE),gasPriceModifier:String(Cr.GAS_PRICE_MODIFIER)}));return d.isGreaterThanOrEqualTo(i.plus(u))};n();n();var mt=require("yup");n();var Er=require("@terradharitri/sdk-dapp/constants/ledger.constants"),ms=g(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Ir=require("yup"),Xu=(0,Ir.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:t}=this.parent;return!(t&&e&&e.length&&!t.ledgerDataActive)}),ju=(0,Ir.string)().test({name:"hashSign",test:function(e){let{ledger:t,isGuarded:r}=this.parent;if(t){let{ledgerWithHashSign:a,ledgerWithGuardians:p}=(0,ms.default)(t.version);if(e&&e.length>300&&!a)return this.createError({message:`Data too long. You need at least DharitrI app version ${Er.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(r&&!p)return this.createError({message:`You need at least DharitrI app version ${Er.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Ju=[Xu,ju],Yu=Ju.reduce((o,e)=>o.concat(e),(0,Ir.string)()),ds=Yu;n();var us=require("@terradharitri/sdk-dapp/constants/index"),_s=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Hn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),st=require("yup");var Qu=o=>{let e=(0,st.string)().required(o.required),t=(0,st.string)().test("decimalFormat",o.maxDecimalsAllowed(us.DECIMALS),s=>(0,_s.maxDecimals)(String(s))),r=(0,st.string)().test("funds",o.insufficientFunds,function(s){if(s&&(0,Hn.stringIsFloat)(s)){let{gasLimit:i,data:d,gasPrice:u,balance:_,chainId:f}=this.parent;return xo({amount:s,balance:_,gasLimit:i,gasPrice:u,data:d,chainId:f})}return!0}),a=(0,st.string)().test("isValidNumber",o.invalidNumber,s=>Boolean(s&&(0,Hn.stringIsFloat)(s)));return[e,a,t,r].reduce((s,i)=>s.concat(i),(0,st.string)())},fs=Qu;n();var ys=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Kn=g(require("bignumber.js")),Bt=require("yup");n();var gs=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Zn=g(require("bignumber.js")),Ar=require("yup");var it=o=>{let e=(0,Ar.string)().required(o.required),t=(0,Ar.string)().test("isValidInteger",o.invalidNumber,a=>{let p=a&&(0,gs.stringIsInteger)(a);return Boolean(p)}),r=(0,Ar.string)().test("maximum",o.tooHighGasLimit(Dn),a=>{let p=new Zn.default(String(a)),s=new Zn.default(Dn),i=a&&s.comparedTo(p)>=0;return Boolean(i)});return[e,t,r]};var e_=o=>{let e=(0,Bt.string)().required(o.required),t=(0,Bt.string)().test("funds",o.insufficientFunds,function(s){let{data:i,gasPrice:d,amount:u,balance:_,chainId:f,ignoreTokenBalance:y}=this.parent;return y?!0:u&&(0,ys.stringIsFloat)(u)&&s!=null?xo({amount:u,balance:_,gasLimit:s,gasPrice:d,data:i,chainId:f}):!0}),r=(0,Bt.string)().test({name:"minValueData",test:function(p){let s=this.parent,{data:i,ignoreTokenBalance:d,isGuarded:u}=s;if(d)return!0;let _=Ye({data:i?i.trim():"",isGuarded:u});if(p){let f=new Kn.default(p),y=new Kn.default(_);if(!(p&&f.isGreaterThanOrEqualTo(y)))return this.createError({message:o.tooLowGasLimit(_),path:"gasLimit"})}return!0}});return[e,...it(o),t,r].reduce((p,s)=>p.concat(s),(0,Bt.string)())},bs=e_;n();var vs=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),hs=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Nr=g(require("bignumber.js")),Mo=require("yup");var o_=o=>{let e=(0,Mo.string)().required(o.required),t=(0,Mo.string)().test({name:"decimalFormat",test:function(i){let{tokenId:d,tokens:u}=this.parent;if(u){let{decimals:_}=at({tokens:u,tokenId:d});return(0,vs.maxDecimals)(String(i),_)?!0:this.createError({message:o.maxDecimalsAllowed(_),path:"amount"})}return!0}}),r=(0,Mo.string)().test("tokenBalance",o.insufficientFunds,function(d){let{ignoreTokenBalance:u,tokens:_}=this.parent;if(d!==void 0&&!u&&_){let{decimals:f,balance:y}=at({tokens:_,tokenId:this.parent.tokenId}),b=(0,J.parseAmount)(d.toString(),f),v=new Nr.default(b);return new Nr.default(y).comparedTo(v)>=0}return!0}),a=(0,Mo.string)().test("greaterThanZero",o.cannotBeZero,function(d){let{tokens:u,ignoreTokenBalance:_}=this.parent;if(!_&&d!=null&&u){let{decimals:f}=at({tokens:u,tokenId:this.parent.tokenId}),y=(0,J.parseAmount)(d.toString(),f);return new Nr.default(y).isGreaterThan(0)}return!0}),p=(0,Mo.string)().test("isValidNumber",o.invalidNumber,i=>Boolean(i&&(0,hs.stringIsFloat)(i)));return[e,t,r,a,p].reduce((i,d)=>i.concat(d),(0,Mo.string)())},xs=o_;n();var Xn=g(require("bignumber.js")),Vt=require("yup");var t_=o=>{let e=(0,Vt.string)().required(o.required),t=(0,Vt.string)().test("minValue",o.tooLowGasLimit(co),function(s){let i=this.parent,{ignoreTokenBalance:d,isGuarded:u}=i;if(d)return!0;let _=new Xn.default(s),f=new Xn.default(co).plus(Fe(u));return s&&_.isGreaterThanOrEqualTo(f)}),r=(0,Vt.string)().test("funds",o.insufficientFunds,function(s){let{data:i,gasPrice:d,ignoreTokenBalance:u,balance:_,chainId:f}=this.parent;return s&&!u?xo({amount:P,balance:_,gasLimit:s,gasPrice:d,data:i,chainId:f}):!0});return[e,...it(o),r,t].reduce((p,s)=>p.concat(s),(0,Vt.string)())},Ts=t_;n();var ks=require("@terradharitri/sdk-dapp/constants/index"),Ss=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ws=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ut=g(require("bignumber.js")),Oo=require("yup");var r_=o=>{let e=(0,Oo.string)().required(o.required),t=(0,Oo.string)().test("decimalFormat",o.maxDecimalsAllowed(ks.DECIMALS),i=>(0,Ss.maxDecimals)(String(i))),r=(0,Oo.string)().test("minimum",o.tooLowGasPrice(Ge),i=>{let d=new Ut.default(String(i)),u=new Ut.default(Ge),_=i&&d.isGreaterThanOrEqualTo(u);return Boolean(_)}),a=(0,Oo.string)().test("maximum",o.tooHighGasPrice(Dt),i=>{let d=new Ut.default(String(i)),u=new Ut.default(Dt),_=i&&d.isLessThanOrEqualTo(u);return Boolean(_)}),p=(0,Oo.string)().test("isValidNumber",o.invalidNumber,i=>Boolean(i&&(0,ws.stringIsFloat)(i)));return[e,t,r,a,p].reduce((i,d)=>i.concat(d),(0,Oo.string)())},Cs=r_;n();var Es=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Is=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),As=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ct=g(require("bignumber.js")),qo=require("yup");var n_=o=>{let e=(0,qo.string)().required(o.required),t=(0,qo.string)().test({name:"formatDecimals",test:function(d){let{nft:u,txType:_}=this.parent;return _!=="MetaDCDT"||(0,Es.maxDecimals)(String(d),u==null?void 0:u.decimals)?!0:this.createError({message:o.maxDecimalsAllowed(u==null?void 0:u.decimals),path:"amount"})}}),r=(0,qo.string)().test("balance",o.insufficientFunds,function(d){let{txType:u,nft:_}=this.parent;if(!d)return!0;if(u==="MetaDCDT"){let f=(0,J.parseAmount)(d,_==null?void 0:_.decimals),y=new ct.default(f);return new ct.default((_==null?void 0:_.balance)||P).isGreaterThanOrEqualTo(y)}if(u==="SemiFungibleDCDT"){let f=new ct.default(d);return new ct.default((_==null?void 0:_.balance)||P).isGreaterThanOrEqualTo(f)}return!0}),a=(0,qo.string)().test("nonZero",o.cannotBeZero,function(d){let u=this.parent,{ignoreTokenBalance:_}=u;return!d||_?!0:!new ct.default(d).isZero()}),p=(0,qo.string)().test("isValidNumber",o.invalidNumber,function(d){let{nft:u}=this.parent;return(u==null?void 0:u.type)===Z.NftEnumType.MetaDCDT?Boolean(d&&(0,Is.stringIsFloat)(d)):Boolean(d&&(0,As.stringIsInteger)(d))});return[e,p,r,t,a].reduce((i,d)=>i.concat(d),(0,qo.string)())},Ns=n_;n();var jn=g(require("bignumber.js")),Mt=require("yup");var a_=o=>{let e=(0,Mt.string)().required(o.required),t=(0,Mt.string)().test({name:"minValueData",test:function(p){let s=this.parent,{data:i,ignoreTokenBalance:d,isGuarded:u}=s;if(d)return!0;let _=Je(i?i.trim():"");if(p){let f=new jn.default(p),y=new jn.default(_).plus(Fe(u));if(!(p&&f.isGreaterThanOrEqualTo(y)))return this.createError({message:o.tooLowGasLimit(y.toString()),path:"gasLimit"})}return!0}}),r=(0,Mt.string)().test("funds",o.insufficientFunds,function(s){let{data:i,gasPrice:d,balance:u,chainId:_,ignoreTokenBalance:f}=this.parent;return s&&!f?xo({amount:P,balance:u,gasLimit:s,gasPrice:d,data:i,chainId:_}):!0});return[e,...it(o),r,t].reduce((p,s)=>p.concat(s),(0,Mt.string)())},Fs=a_;n();var Ls=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),lt=require("yup");var p_=o=>{let e=(0,lt.string)().required(o.required),t=(0,lt.string)().test("addressIsValid",o.invalidAddress,s=>Boolean(s&&(0,Ls.addressIsValid)(s))),r=(0,lt.string)().test("sameAddress",o.sameAsOwnerAddress,function(i){let{ignoreTokenBalance:d,txType:u,readonly:_,address:f,isBurn:y}=this.parent;return fr(u)&&!d&&!_&&!y?f!==i:!0}),a=(0,lt.string)().test("canTransfer",o.receiverNotAllowed,function(i){let{nft:d,txType:u,ignoreTokenBalance:_,address:f}=this.parent,y="MetaDCDT"===u,b=_,v=d==null?void 0:d.allowedReceivers;return!i||!y||b||v==null||v.includes(f)?!0:v.includes(i)});return[e,t,r,a].reduce((s,i)=>s.concat(i),(0,lt.string)())},Ps=p_;n();var Ds=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Jn=require("yup"),s_=o=>[(0,Jn.string)().test("invalidHerotag",o.invalidHerotag,function(a){let{receiver:p}=this.parent;if((p==null?void 0:p.startsWith("drt1"))||!a&&!p)return!0;let d=a&&(0,Ds.addressIsValid)(p);return Boolean(d)})].reduce((r,a)=>r.concat(a),(0,Jn.string)()),Gs=s_;var Fr=o=>(0,mt.object)().shape({receiver:Ps(o),receiverUsername:Gs(o),tokenId:(0,mt.string)().required(o.required),gasPrice:Cs(o),data:ds,amount:(0,mt.string)().when(["txType"],function(t){switch(t){case"DCDT":return xs(o);case"REWA":return fs(o);default:return Ns(o)}}),gasLimit:(0,mt.string)().when(["txType"],function(t){switch(t){case"DCDT":return Ts(o);case"REWA":return bs(o);default:return Fs(o)}})});var Bs=({prefilledForm:o,initialValues:e,errorMessages:t})=>{if(!o||!e)return{};try{return Fr(t).validateSync(e),{}}catch(r){let{path:a,message:p}=r;return{[String(a)]:p}}};n();var Vs=({shouldValidateForm:o,errors:e,touched:t})=>r=>Boolean(e[r]&&(t[r]||o));n();var Os=(0,Ce.createContext)({});function qs({children:o,value:e}){let{skipToConfirm:t}=e,[r,a]=(0,Ce.useState)(Boolean(t)),[p,s]=(0,Ce.useState)(!1),[i,d]=(0,Ce.useState)(Date.now()),{values:u,errors:_,touched:f,validateForm:y,setFieldTouched:b,setErrors:v,isValid:T,handleSubmit:k}=(0,Ms.useFormikContext)(),C=(0,Ce.useCallback)(e.onCloseForm,[]),{isDcdt:A,isNft:I,isRewa:V}=(0,Us.getIdentifierType)(u.tokenId),U=(0,Ce.useCallback)(Vs({shouldValidateForm:r,errors:_,touched:f}),[r,_,f]),M=(0,Ce.useCallback)(()=>S(this,null,function*(){a(!0),Object.values(ne).forEach(O=>{b(O,!0)});let B=yield y();if(Object.keys(B).length===0){e.setIsFormSubmitted(!0);return}_.gasLimit||B.gasPrice?(v(B),d(Date.now())):b("gasLimit",!1)}),[_,y]),W=(0,Ce.useCallback)(()=>{p?s(!1):e.setIsFormSubmitted(!1)},[p]),N=w(x({},e),{checkInvalid:U,isRewaTransaction:V,isDcdtTransaction:A,isNftTransaction:I,shouldValidateForm:r,areValidatedValuesReady:Boolean(e.isFormSubmitted||t)&&T,isGuardianScreenVisible:p,setIsGuardianScreenVisible:s,isFormValid:T,renderKey:i,txType:u.txType,onValidateForm:M,onInvalidateForm:W,onCloseForm:C,onSubmitForm:k});return Ce.default.createElement(Os.Provider,{value:N},o)}function pe(){return(0,Ce.useContext)(Os)}n();n();var le=g(require("react")),Hs=require("formik"),Zs=g(require("lodash/uniqBy"));n();n();var Qe=g(require("react"));var Ws=(0,Qe.createContext)({});function $s({children:o,value:{networkConfig:e}}){let[t,r]=(0,Qe.useState)(null);(0,Qe.useEffect)(()=>{a()},[e]);function a(){let p=dr(e.id);r(p)}return Qe.default.createElement(Ws.Provider,{value:{networkConfig:e,delegationContractData:t}},o)}function ke(){return(0,Qe.useContext)(Ws)}n();n();var Pr=require("react"),zs=require("@terradharitri/sdk-dapp/constants/index");var Lr=require("@terradharitri/sdk-dapp/types/enums.types");function Dr(){let{networkConfig:o}=ke(),[e,t]=(0,Pr.useState)(0);function r(){return S(this,null,function*(){let a=yield wp(),p=(a==null?void 0:a.price)||0;t(p)})}return(0,Pr.useEffect)(()=>{![Lr.EnvironmentsEnum.mainnet,Lr.EnvironmentsEnum.testnet,Lr.EnvironmentsEnum.devnet].includes(o==null?void 0:o.id)||r()},[o==null?void 0:o.id]),{rewaLabel:o.rewaLabel,rewaPriceInUsd:e,digits:zs.DIGITS}}n();var Gr={},Br=o=>S(void 0,null,function*(){if(!o)return null;if(o.collection in Gr)return Gr[o.collection];let e=yield Fp(o);return Gr[o.collection]=e,Gr[o.collection]});var Ks=(0,le.createContext)({}),Rs="tokenId",Yn="nft",i_="tokens",c_="txType",Qn=[];function Xs({children:o,value:e}){let[t,r]=(0,le.useState)(!0),{values:{tokenId:a,tokens:p,nft:s},errors:{tokenId:i},setFieldValue:d}=(0,Hs.useFormikContext)(),{address:u,balance:_}=Ne(),{checkInvalid:f}=pe(),{networkConfig:{decimals:y}}=ke(),b=(0,le.useRef)(!1),{rewaPriceInUsd:v,digits:T,rewaLabel:k}=Dr(),C=p||Qn,A=(0,le.useCallback)((N=!0)=>S(this,null,function*(){if(r(N),b.current)return;b.current=!0;let B=yield Ip(u),L=p!=null?p:[],O=(0,Zs.default)([...L,...B],K=>K.identifier);d(i_,O),Qn=O,b.current=!1,r(!1)}),[u]),I=(0,le.useCallback)(N=>{d(Rs,N,!1)},[]);(0,le.useEffect)(()=>(A(!1),()=>{Qn=[]}),[]);let V=()=>S(this,null,function*(){let N=Pt({nft:s,tokenId:a});if(d(c_,N),N==="SemiFungibleDCDT"||N==="NonFungibleDCDT")return;let B=(M==null?void 0:M.find(L=>L.identifier===a))||s;if(N==="MetaDCDT"&&B){let L=B;d(Yn,L);let O=yield Br(L);L=w(x({},L),{allowedReceivers:O}),d(Yn,L)}else d(Yn,void 0)}),U=f(Rs),M=[{name:"DharitrI eGold",identifier:k,balance:_,decimals:Number(y),ticker:k,usdPrice:v},...C];(0,le.useEffect)(()=>{V()},[a]);let W=(0,le.useMemo)(()=>Lt({tokens:M||[],tokenId:a}),[a,p]);return le.default.createElement(Ks.Provider,{value:{nft:s||(e==null?void 0:e.initialNft),tokens:C,allAvailableTokens:M,areTokensLoading:t&&C.length===0,tokenIdError:i,tokenId:a,tokenDetails:W,rewaLabel:k,RewaIcon:e==null?void 0:e.RewaIcon,rewaPriceInUsd:v,digits:T,isTokenIdInvalid:U,getTokens:A,onChangeTokenId:I}},o)}function To(){return(0,le.useContext)(Ks)}n();n();var _t=require("@terradharitri/sdk-dapp/constants/index"),di=require("formik");n();n();var me=g(require("react")),Mr=require("@terradharitri/sdk-dapp/constants/index"),pi=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),si=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ra=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ii=g(require("bignumber.js")),ci=require("formik");n();n();n();n();var ea=g(require("bignumber.js"));function js({amount:o="",available:e,readonly:t=!1,entireBalanceMinusDust:r}){let a=new ea.default(o),s=new ea.default(r).isGreaterThan(a),i=!o,d=Te("amount",t);return(i||s)&&e!==P&&!d}function Js({nft:o,amount:e,readonly:t,maxAmountAvailable:r,maxAmountMinusDust:a,txType:p}){switch(p){case"REWA":return js({amount:e,entireBalanceMinusDust:a,readonly:t,available:r});case"DCDT":return e!==r&&!t&&r!==P;default:return o!=null&&e!==(o==null?void 0:o.balance)&&!t}}n();var oa=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ot=g(require("bignumber.js"));var qt=(o,e)=>{let t=(0,oa.stringIsFloat)(String(o))?o:P,r=(0,oa.stringIsFloat)(String(e))?new Ot.default(e):new Ot.default(P),a=(0,Ot.default)(100).dividedBy(r.dividedBy(t)).toNumber();return Ot.default.minimum(a,100).toNumber()};n();function Vr({values:o,errors:e,touched:t}){let r=Boolean(e["amount"]&&t["amount"]);return o.txType==="REWA"?o.amount!=P?r:!1:r}n();var Wt=require("react"),Ys=require("@terradharitri/sdk-dapp/constants/index"),Qs=require("@terradharitri/sdk-dapp/utils/smartContracts"),ei=g(require("bignumber.js")),oi=require("formik");n();var Ur=require("react");function l_(o,e){let[t,r]=(0,Ur.useState)(o);return(0,Ur.useEffect)(()=>{let p=setTimeout(()=>r(o),e);return()=>clearTimeout(p)},[o]),t}var dt=l_;var ta=500;function m_(o){let{networkConfig:{chainId:e}}=ke(),{prefilledForm:t}=pe(),r=(0,oi.useFormikContext)(),{balance:a,address:p,nonce:s}=Ne(),{values:i,initialValues:d,touched:u,errors:{gasLimit:_,amount:f},setFieldValue:y}=r,{data:b,amount:v,gasLimit:T}=i,k=dt(b,ta),C=dt(v,ta),A=dt(T,ta),[I,V]=(0,Wt.useState)(!1),[U,M]=(0,Wt.useState)(o),W=()=>S(this,null,function*(){let N=_||f,B=k.length>0,L=new ei.default(C).isGreaterThanOrEqualTo(0),O=Vo({initialValues:d,gasLimit:T,touched:u}),K=e!==Ys.MAINNET_CHAIN_ID||!1;if(!t&&(0,Qs.isContract)(i.receiver)&&K&&!O&&!N&&B&&L){V(!0);try{let{gasLimit:G,gasLimitCostError:q}=yield zn({balance:a,address:p,nonce:s,values:i,chainId:e});V(!1),M(q),y("gasLimit",G,!0)}catch(G){V(!1),console.error(G)}}});return(0,Wt.useEffect)(()=>{W()},[k,C,A,i.receiver,t]),{gasCostLoading:I,gasCostError:U}}var ti=m_;n();n();var ri=require("@terradharitri/sdk-dapp/constants/index"),ni=g(require("bignumber.js"));var ai=({isNftTransaction:o,isDcdtTransaction:e,data:t,isGuarded:r})=>{let a=Fe(r),p=ri.GAS_LIMIT.toString();return o&&(p=Je(t)),e&&(p=co),new ni.default(p).plus(a).toString(10)};var li=(0,me.createContext)({});function mi({children:o,initGasLimitError:e}){let t=(0,ci.useFormikContext)(),{values:r,touched:a,errors:{gasPrice:p,gasLimit:s},setFieldValue:i,setFieldTouched:d,initialValues:u}=t,{gasPrice:_,gasLimit:f,data:y,tokenId:b,txType:v,isGuarded:T,receiver:k,amount:C}=r,A=Fe(T),{checkInvalid:I,isNftTransaction:V,isDcdtTransaction:U,prefilledForm:M,isRewaTransaction:W}=pe(),{networkConfig:{chainId:N}}=ke(),{gasCostLoading:B,gasCostError:L}=ti(e),O=ai({isNftTransaction:V,isDcdtTransaction:U,data:y,isGuarded:T}),H=!Vr({values:r,errors:t.errors,touched:a})&&I("gasLimit"),G=I("gasPrice"),q=(0,me.useCallback)((ee,fe=!1)=>{var Ko;let Ct=typeof ee=="string"?ee:(Ko=ee==null?void 0:ee.target)==null?void 0:Ko.value;i("gasPrice",Ct,fe)},[]),R=(0,me.useCallback)((ee,fe=!1)=>{var Ko;let Ct=typeof ee=="string"?ee:(Ko=ee==null?void 0:ee.target)==null?void 0:Ko.value;i("gasLimit",Ct,fe)},[]),ie=(0,me.useCallback)(()=>{i("gasPrice",Ge)},[]),xe=(0,me.useCallback)(()=>{i("gasLimit",O)},[V]),ue=(0,me.useCallback)(()=>{d("gasPrice",!0)},[]),_e=(0,me.useCallback)(()=>{d("gasLimit",!0)},[]),z=Boolean(p)||Boolean(s),Le=(0,me.useMemo)(()=>{let ee=!(0,ra.stringIsInteger)(f),fe=!(0,si.stringIsFloat)(_);if(ee||fe)return P;let Ct=Vo({initialValues:u,gasLimit:f,touched:a}),Jd=!M&&!Ct&&W?y.trim():"",Ba=(0,pi.calculateFeeLimit)({gasLimit:f,gasPrice:(0,J.parseAmount)(_),data:Jd,chainId:N,gasPerDataByte:String(Mr.GAS_PER_DATA_BYTE),gasPriceModifier:String(Mr.GAS_PRICE_MODIFIER)});return(0,ra.stringIsInteger)(Ba)?Ba:P},[z,_,f,N,M,W,a.gasLimit,y,k,C]);(0,me.useEffect)(()=>{let ee=Vo({initialValues:u,gasLimit:f,touched:a});!M&&V&&!ee&&R(new ii.default(Je()).plus(A).toString())},[V,a]),(0,me.useEffect)(()=>{M||R(Sr({txType:v,data:y,isGuarded:T}),!0)},[b,v]);let ao={gasPrice:_,gasLimit:f,gasCostLoading:B,feeLimit:Le,defaultGasLimit:O,gasPriceError:p,gasLimitError:s,gasCostError:L,hasErrors:z,isGasLimitInvalid:H,isGasPriceInvalid:G,onChangeGasLimit:R,onChangeGasPrice:q,onBlurGasPrice:ue,onBlurGasLimit:_e,onResetGasPrice:ie,onResetGasLimit:xe};return me.default.createElement(li.Provider,{value:ao},o)}function ut(){return(0,me.useContext)(li)}function ui(){let{values:o}=(0,di.useFormikContext)(),{balance:e}=Ne(),{networkConfig:{chainId:t}}=ke(),{nft:r,tokens:a}=To(),{isDcdtTransaction:p,isNftTransaction:s,isRewaTransaction:i}=pe(),{gasLimit:d,gasPrice:u}=ut(),{tokenId:_}=o,f=null;s&&r&&(f=Rn({balance:r.balance,decimals:r.type===Z.NftEnumType.MetaDCDT?r.decimals:0,digits:_t.DIGITS}));let y=null;if(p){let{decimals:A,balance:I}=Lt({tokens:a,tokenId:_});y=Rn({balance:I,decimals:A,digits:_t.DIGITS})}let b=P,v=e;if(e&&i){let{entireBalance:A,entireBalanceMinusDust:I}=is({balance:e,gasPrice:vo(u),gasLimit:d,decimals:_t.DECIMALS,digits:_t.DIGITS,chainId:t});b=A,v=I}let k=i?b:r&&f?f:y;return{maxAmountAvailable:k||P,maxAmountMinusDust:(i?v:k)||P}}var yi=(0,ye.createContext)({});function bi({children:o}){let{values:e,errors:t,touched:r,handleBlur:a,setFieldValue:p,setFieldError:s,setFieldTouched:i}=(0,gi.useFormikContext)(),{readonly:d,uiOptions:u}=pe(),{maxAmountAvailable:_,maxAmountMinusDust:f}=ui(),[y,b]=(0,ye.useState)(qt(e.amount,f)),[v,T]=(0,ye.useState)(!1),{nft:k}=To(),C=u!=null&&u.showAmountSlider?!1:Js({nft:k,amount:e.amount,readonly:d,maxAmountAvailable:_,maxAmountMinusDust:f,txType:e.txType});function A(){T(!1)}let I=(0,ye.useCallback)((L,O=!0)=>{if(new Or.default(f).isZero()||!(0,fi.stringIsFloat)(L.toString())){b(0);return}let H=new Or.default(f).times(L).dividedBy(100),G=(0,we.formatAmount)({input:(0,J.parseAmount)(String(H)),digits:_i.DIGITS,showLastNonZeroDecimal:L>=100});if(O&&p("amount",G),L<0){b(0);return}if(L>100){b(100);return}b(L)},[f,p]),V=(0,ye.useCallback)((L,O=!0)=>{var H;let K=typeof L=="string"?L:(H=L==null?void 0:L.target)==null?void 0:H.value;return i("amount",!0),I(qt(K,f),!1),p("amount",K,O)},[p,I,f]),U=(0,ye.useCallback)(L=>s("amount",L),[s]),M=(0,ye.useCallback)(()=>{i("amount",!0)},[a]),W=(0,ye.useCallback)(()=>(T(!0),V(f||e.amount)),[f]);(0,ye.useEffect)(()=>{(0,Or.default)(f).isGreaterThan(0)&&I(qt(e.amount,f),!1)},[qt,f]);let N=Vr({values:e,errors:t,touched:r}),B={amount:e.amount,error:t.amount,isInvalid:N,maxAmountAvailable:_,maxAmountMinusDust:f,isMaxButtonVisible:C,isMaxClicked:v,amountRange:y,onFocus:A,onBlur:M,onChange:V,onMaxClicked:W,onSetError:U,onSetAmountPercentage:I};return ye.default.createElement(yi.Provider,{value:B},o)}function vi(){return(0,ye.useContext)(yi)}n();n();var Be=g(require("react")),hi=require("formik");var xi=(0,Be.createContext)({});function Ti({children:o}){let{values:e,errors:t,touched:r,setFieldValue:a,handleBlur:p,setFieldTouched:s,initialValues:i}=(0,hi.useFormikContext)(),{checkInvalid:d,prefilledForm:u,isRewaTransaction:_}=pe(),{nft:f}=To(),{receiver:y,txType:b,amount:v,tokenId:T,isAdvancedModeEnabled:k,gasLimit:C}=e,{onChangeGasLimit:A}=ut(),{isGuarded:I}=Ne(),V=d("data"),U=(B,L=!1)=>{var H;let O=typeof B=="string"?B:(H=B==null?void 0:B.target)==null?void 0:H.value,K=Vo({initialValues:i,gasLimit:C,touched:r});if(a("data",O,L),!u&&!K&&_){let G=Ye({data:O,isGuarded:I});A(G)}},M=(0,Be.useCallback)(()=>{s("data",!0)},[p]),W=(0,Be.useCallback)(()=>{U("")},[]);(0,Be.useEffect)(()=>{if(!u){let B=b!=="DCDT"?t.receiver:"",L=Jp({txType:b,values:e,nft:f,amountError:Boolean(t.amount),receiverError:B});U(L)}},[v,y,u,f,t.receiver,t.amount,b]),(0,Be.useEffect)(()=>{!u&&_&&U("")},[T,_]);let N={data:e.data,dataError:t.data,isDataInvalid:V,onChange:U,onBlur:M,onReset:W,isAdvancedModeEnabled:k};return Be.default.createElement(xi.Provider,{value:N},o)}function ki(){return(0,Be.useContext)(xi)}n();n();var Re=g(require("react")),Li=require("formik");n();n();n();var qr=require("react"),wi=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Ci=g(require("lodash/uniqBy"));n();n();var na=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),aa=require("@terradharitri/sdk-dapp/utils"),Si=o=>o.reduce((e,t)=>{var f,y;let r=(f=t.receiverAssets)==null?void 0:f.name,a=(y=t.senderAssets)==null?void 0:y.name,p=(0,na.trimUsernameDomain)(r),s=(0,na.trimUsernameDomain)(a),i=(0,aa.isContract)(t.receiver),d=(0,aa.isContract)(t.sender),u={address:t.receiver,username:i?void 0:p,rawUsername:i?void 0:r},_={address:t.sender,username:d?void 0:s,rawUsername:d?void 0:a};return t?[...e,u,_]:e},[]);function Ei(){let{address:o}=Ne(),[e,t]=(0,qr.useState)(null);function r(){return S(this,null,function*(){try{let a=yield ae(),{data:p}=yield(0,wi.getTransactions)({sender:o,receiver:o,transactionSize:50,apiAddress:a.baseURL,apiTimeout:a.timeout,withUsername:!0}),s=Si(p),i=(0,Ci.default)(s,d=>d.address);t(i)}catch(a){console.error("Unable to fetch transactions",a),t([])}})}return(0,qr.useEffect)(()=>{r()},[]),e}n();var Ni=require("react");n();var pa=require("react"),Ii=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");function Ai(o){let[e,t]=(0,pa.useState)({}),[r,a]=(0,pa.useState)(!1);return{verifiedAddresses:e,verifyScamAddress:d=>S(this,[d],function*({address:s,addressToVerify:i=""}){let u=s!==i,_=!(i in e);if(u&&(0,Ii.addressIsValid)(i)&&_&&!r){a(!0);try{let f=yield kp(i,o);t(y=>x(x({},y),f.scamInfo?{[i]:f.scamInfo}:{}))}catch(f){console.error("Unable to find address",f)}a(!1)}}),fetchingScamAddress:r}}function Fi(o){var s;let{address:e}=Ne(),{verifiedAddresses:t,verifyScamAddress:r,fetchingScamAddress:a}=Ai(),p=(s=t[o])==null?void 0:s.info;return(0,Ni.useEffect)(()=>{o&&r({address:e,addressToVerify:o})},[o]),{scamError:p,fetchingScamAddress:a}}var Pi=(0,Re.createContext)({}),sa="receiver";function Di({children:o}){let{values:{receiver:e},errors:{receiver:t},setFieldValue:r,setFieldTouched:a}=(0,Li.useFormikContext)(),{checkInvalid:p}=pe(),[s,i]=(0,Re.useState)(e),{scamError:d,fetchingScamAddress:u}=Fi(e),_=Ei(),f=(0,Re.useCallback)((v,T=!1)=>{r(sa,v,T)},[]),y=(0,Re.useCallback)(()=>{a(sa,!0)},[]),b={receiver:e,receiverError:t,receiverInputValue:s,setReceiverInputValue:v=>i(v),isReceiverInvalid:p(sa),scamError:d,fetchingScamAddress:u,knownAddresses:_,onChangeReceiver:f,onBlurReceiver:y};return Re.default.createElement(Pi.Provider,{value:b},o)}function ft(){return(0,Re.useContext)(Pi)}n();n();var gt=g(require("react")),zi=require("formik");n();n();var Wr=({knownAddresses:o,inputValue:e,key:t})=>!o||!e?!1:o.some(a=>{var p;return Boolean((p=a[t])==null?void 0:p.startsWith(e))});n();n();n();var qi=require("react"),Wi=require("@terradharitri/sdk-dapp/utils");n();var ca=require("react"),la=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var Gi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Bi=g(require("axios"));function Vi(o,e){return S(this,null,function*(){var t;try{let r=e||(yield ae()),{request:a,data:p}=yield Bi.default.get(`usernames/${o}`,r);if(!(a!=null&&a.responseURL))return null;let[,s]=(t=a.responseURL.split("/accounts/"))!=null?t:[],i=s!=null?s:p.address;return(0,Gi.addressIsValid)(i)?p:null}catch(r){return null}})}n();var Ui=g(require("axios"));function Mi(o,e){return S(this,null,function*(){try{let{data:t}=yield Ui.default.get(`${e}/accounts/${o}`);if(t!=null)return t}catch(t){console.error("error fetching numbat account")}return null})}var ia={};function Oi(o){let[e,t]=(0,ca.useState)(!1),[r,a]=(0,ca.useState)(ia);return{usernameAccounts:r,fetchUsernameAccount:i=>S(this,null,function*(){if(!(i in r||e)){t(!0);try{let u=yield Vi(i,o),_=u==null?void 0:u.username;a(f=>{var b;let y=w(x({},f),{[i]:{address:(b=u==null?void 0:u.address)!=null?b:"",username:_?String((0,la.trimUsernameDomain)(_)):"",rawUsername:_!=null?_:""}});return ia=y,y})}catch(u){a(_=>w(x({},_),{[i]:null}))}t(!1)}}),fetchUsernameByAddress:i=>S(this,null,function*(){if(!(Object.values(r).find(u=>u&&u.address===i)||e)){t(!0);try{let u=o||(yield ae()),_=yield Mi(i,u.baseURL),f=_==null?void 0:_.address,y=_==null?void 0:_.username,b=(0,la.trimUsernameDomain)(y);if(!f||!b)return;a(v=>{let T=w(x({},v),{[b]:{address:f,username:String(b),rawUsername:y!=null?y:""}});return ia=T,T})}catch(u){console.error(u)}t(!1)}}),fetchingUsernameAccount:e}}var $i=({shouldSkipSearch:o=!1,searchPatternToLookFor:e})=>{let{fetchUsernameAccount:t,fetchUsernameByAddress:r,fetchingUsernameAccount:a,usernameAccounts:p}=Oi(),s=(0,Wi.addressIsValid)(e);return(0,qi.useEffect)(()=>{if(!(!e||o)){if(s){r(e);return}t(e)}},[e,s]),{fetchingUsernameAccount:a,usernameAccounts:p}};var Ri=(0,gt.createContext)({}),d_=1e3;function Hi({children:o}){var k;let{values:{receiverUsername:e},errors:{receiverUsername:t}}=(0,zi.useFormikContext)(),{receiverInputValue:r,knownAddresses:a}=ft(),p=Up(r),s=dt(r,d_),i=a==null?void 0:a.some(C=>C.username===r),{usernameAccounts:d}=$i({shouldSkipSearch:Boolean(i),searchPatternToLookFor:s}),u=(k=d[r])==null?void 0:k.username,_=r!==s&&u!==null,f=Wr({key:"username",knownAddresses:a,inputValue:r}),y=!_&&u===void 0&&r,b=Boolean(y&&!p&&!f),T={showUsernameError:Boolean(r&&s&&!_&&!y&&!u&&!p),isUsernameLoading:b,isUsernameDebouncing:_,usernameIsAmongKnown:f,receiverUsername:e,receiverUsernameError:t,isReceiverUsernameInvalid:Boolean(t),usernameAccounts:d,searchQueryIsAddress:p};return gt.default.createElement(Ri.Provider,{value:T},o)}function yt(){return(0,gt.useContext)(Ri)}n();var bt=g(require("react"));var Zi=(0,bt.createContext)({});function Ki({children:o}){let e=Ne(),t=pe(),r=To(),a=vi(),p=ut(),s=ki(),i=ft(),d=yt();return bt.default.createElement(Zi.Provider,{value:{accountInfo:e,formInfo:t,tokensInfo:r,gasInfo:p,dataFieldInfo:s,receiverInfo:i,receiverUsernameInfo:d,amountInfo:a}},o)}function $(){return(0,bt.useContext)(Zi)}function ji({accountInfo:o,formInfo:e,tokensInfo:t,networkConfig:r,children:a,Loader:p,initGasLimitError:s}){let[i,d]=(0,Se.useState)();function u(){return S(this,null,function*(){let _=!r.skipFetchFromServer,{chainId:f}=r,y=ot(f),b=Xi.fallbackNetworkConfigurations[y]||{};if(_){let T=yield mr(f);if(T){let k=x(x(x({},b),T),r);tt(k),d(k);return}}let v=x(x({},b),r);tt(v),d(v)})}return(0,Se.useEffect)(()=>{u()},[r]),i?Se.default.createElement($s,{value:{networkConfig:i}},Se.default.createElement(Bp,{value:o},Se.default.createElement(qs,{value:e},Se.default.createElement(Xs,{value:t},Se.default.createElement(Di,null,Se.default.createElement(Hi,null,Se.default.createElement(mi,{initGasLimitError:s},Se.default.createElement(Ti,null,Se.default.createElement(bi,null,Se.default.createElement(Ki,null,a)))))))))):p!=null?Se.default.createElement(p,null):null}n();var ma=require("@terradharitri/sdk-dapp/constants/index");var $r={insufficientFunds:"Insufficient funds",invalidAddress:"Invalid address",invalidGasPrice:"Invalid gas price",invalidNumber:"Invalid number",invalidFeePerDataByte:"Invalid fee per data byte",cannotBeZero:"Cannot be zero",required:"Required",amountTooSmall:"Amount too small",sameAsOwnerAddress:"Same as owner address",receiverNotAllowed:"Receiver not allowed",invalidHerotag:"Invalid herotag",tooLowGasLimit:(o=ma.GAS_LIMIT)=>`Gas limit must be greater or equal to ${o}`,tooHighGasLimit:(o=ma.GAS_LIMIT)=>`Gas limit must be lower than ${o}`,tooLowGasPrice:(o=Ge)=>`Gas price must be greater or equal to ${o}`,tooHighGasPrice:(o=Dt)=>`Gas price must be lower or equal to ${o}`,maxDecimalsAllowed:o=>`Maximum ${o} decimals allowed`};function Qi(o){var q,R,ie,xe,ue,_e,z,Le;let{initialValues:e,onFormSubmit:t,formInfo:r,children:a,accountInfo:p,tokensInfo:s,initGasLimitError:i,networkConfig:d,enableReinitialize:u=!0,Loader:_,errorMessageTranslations:f=$r,shouldGenerateTransactionOnSubmit:y=!0}=o,{address:b,balance:v,username:T}=p,{chainId:k}=d,[C,A]=(0,Wo.useState)(Boolean(o.formInfo.skipToConfirm)),[I,V]=(0,Wo.useState)(),[U,M]=(0,Wo.useState)(!1),W=Bs({initialValues:e,prefilledForm:r.prefilledForm,errorMessages:$r});function N(ao){return S(this,null,function*(){let ee=yield gr(ao),fe=y?I!=null?I:yield xr({address:b,balance:v,chainId:k,nonce:p.nonce,values:ee}):null;return t(ee,fe,A)})}let B=(e==null?void 0:e.tokenId)||(d==null?void 0:d.rewaLabel)||Ji.fallbackNetworkConfigurations.mainnet.rewaLabel,L=Fr(x(x({},f),$r)),O=(q=e==null?void 0:e.data)!=null?q:"",K=(R=e==null?void 0:e.txType)!=null?R:Pt({nft:s==null?void 0:s.initialNft,tokenId:B}),H=(ie=e==null?void 0:e.gasLimit)!=null?ie:Sr({txType:K,data:O,isGuarded:p.isGuarded}),G={address:(xe=e==null?void 0:e.address)!=null?xe:b,amount:(ue=e==null?void 0:e.amount)!=null?ue:P,balance:(e==null?void 0:e.balance)||v,chainId:(e==null?void 0:e.chainId)||d.chainId,code:"",data:O,gasLimit:H,gasPrice:(_e=e==null?void 0:e.gasPrice)!=null?_e:Ge,isBurn:r.isBurn,isGuarded:(z=e==null?void 0:e.isGuarded)!=null?z:p.isGuarded,ledger:e==null?void 0:e.ledger,nft:s==null?void 0:s.initialNft,receiver:(Le=e==null?void 0:e.receiver)!=null?Le:"",receiverUsername:e==null?void 0:e.receiverUsername,senderUsername:T,tokenId:B,tokens:s==null?void 0:s.initialTokens,txType:K};return Wo.default.createElement(Yi.Formik,{initialValues:G,enableReinitialize:u,onSubmit:N,initialErrors:W,validationSchema:L},Wo.default.createElement(ji,{initGasLimitError:i,accountInfo:p,formInfo:w(x({},r),{isFormSubmitted:C,setIsFormSubmitted:A,setGuardedTransaction:V,hasGuardianScreen:U,setHasGuardianScreen:M}),networkConfig:d,tokensInfo:s,Loader:_},a))}n();var zr=require("react");n();n();var vc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var ec=require("@terradharitri/sdk-dapp/constants/index");var u_="1",oc=({computedNft:o,amount:e})=>{var a,p,s;if(((a=o==null?void 0:o.nft)==null?void 0:a.type)===Z.NftEnumType.NonFungibleDCDT)return u_;let t=((p=o==null?void 0:o.nft)==null?void 0:p.type)===Z.NftEnumType.MetaDCDT,r=(o==null?void 0:o.quantity)||e;return t&&r?(0,we.formatAmount)({input:r,decimals:(s=o==null?void 0:o.nft)==null?void 0:s.decimals,showLastNonZeroDecimal:!0,addCommas:!1,digits:ec.DIGITS}):r};n();function tc(o){let{computedNft:e,data:t,amount:r,receiver:a}=o,p=e==null?void 0:e.nft,s=p?$n({nft:p,amount:r,receiver:a,errors:!1}):"";return t||s}n();var rc=o=>S(void 0,null,function*(){let p=o,{configValues:e}=p,t=Xo(p,["configValues"]),r=dr(o.chainId),a=w(x(x({isInternal:["1","T"].includes(o.chainId)},t),e),{delegationContractData:r});return rs(a)});n();var vt=require("@terradharitri/sdk-dapp/constants/index");var nc=o=>o!=null&&o!==P?o:(0,we.formatAmount)({input:String(vt.GAS_PRICE),decimals:vt.DECIMALS,showLastNonZeroDecimal:!0,digits:vt.DIGITS});n();var fc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var ac=require("@terradharitri/sdk-dapp/types/tokens.types"),pc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");function sc(o,e){return S(this,null,function*(){let{address:t,identifier:r}=o,{isNft:a}=(0,pc.getIdentifierType)(r);if(!a)return null;try{let p=yield _r({address:t,identifier:r},e);if((p==null?void 0:p.type)===ac.NftEnumType.MetaDCDT){let s=yield Br(p);p=w(x({},p),{allowedReceivers:s})}return p}catch(p){console.log(p)}return null})}n();var dc=require("@terradharitri/sdk-core"),uc=g(require("bignumber.js"));n();var ic=require("@terradharitri/sdk-core"),cc=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),lc=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");var __=o=>o.split("@").map((p,s)=>[2,3].includes(s)?p:(0,lc.decodePart)(p)),mc=({data:o,nft:e,address:t})=>{let r=o==null?void 0:o.startsWith("DCDTNFTBurn"),a=o==null?void 0:o.startsWith("DCDTNFTTransfer");if((r||a)&&o.includes("@"))try{let[,s,i,d,u]=e?["DCDTNFTTransfer",e.collection,e.nonce,e.quantity,e.receiver]:__(o),_=r&&!u?t:u,f=[s,i,d,_].every(b=>b),y=(0,cc.addressIsValid)(new ic.Address(_).bech32());if(f&&y)return{collection:s,nonce:i,quantity:d,receiver:_}}catch(s){console.error("Could not extract NFT from data:",s);return}};var f_=(o,e)=>S(void 0,null,function*(){let{address:t,identifier:r}=o;try{return yield _r({address:t,identifier:r},e)}catch(a){return yield Lp(r,e)}}),_c=(o,e)=>S(void 0,null,function*(){let{address:t,nft:r}=o,a=mc(o);try{if(a){let{collection:p,nonce:s,quantity:i,receiver:d}=a,u=`${p}-${s}`,_=yield f_({identifier:u,address:t},e);if(_)return{receiver:new dc.Address(d).bech32(),nft:_,quantity:r?i:new uc.default(i,16).toString(10)}}}catch(p){console.log(p)}return null});var g_={receiver:"",quantity:""},gc=r=>S(void 0,[r],function*({data:o,address:e,identifier:t}){if(o)return yield _c({data:o,address:e});let{isNft:a}=(0,fc.getIdentifierType)(t);if(t&&a){let p=yield sc({identifier:t,address:e});return p?w(x({},g_),{nft:p}):null}return null});n();var yc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");function y_(o,e){return S(this,null,function*(){let{address:t,identifier:r}=o;try{let{data:a}=yield Ep({address:t,token:r},e);return a}catch(a){console.log(a)}return null})}function bc(o){let{identifier:e,address:t}=o,{isDcdt:r}=(0,yc.getIdentifierType)(e);return e&&r?y_({address:t,identifier:e}):null}function b_(){let o=new URLSearchParams(window.location.search);return Object.fromEntries(o).token}function hc(o){return S(this,null,function*(){let{address:e,rewaLabel:t,configValues:{receiver:r,receiverUsername:a,amount:p,gasPrice:s,data:i,tokenId:d},networkConfig:u}=o,_=b_(),f=d||_,y=f||t;u&&tt(u);let[b,v,T]=yield Promise.all([gc({data:i,address:e,identifier:f}),bc({identifier:f,address:e}),rc(w(x({},o),{computedTokenId:y}))]),{initGasLimit:k,initGasLimitError:C}=T,A={receiver:r,receiverUsername:a,amount:oc({computedNft:b,amount:p}),tokenId:y,gasLimit:k,gasPrice:nc(s),data:tc({computedNft:b,data:i,receiver:r,amount:p})},{isDcdt:I}=(0,vc.getIdentifierType)(f);return{initialValues:A,nft:b==null?void 0:b.nft,gasLimitCostError:C,computedTokens:v?[v]:[],computedTokenId:y,tokenFound:I?Boolean(v):!0}})}n();function xc(o){let[e,t]=(0,zr.useState)(null);function r(){return S(this,null,function*(){let a=yield hc(o);t(a)})}return(0,zr.useEffect)(()=>{r()},[]),e}n();n();var Y=g(require("react")),bn=require("@terradharitri/sdk-core/out"),Md=g(require("classnames")),Od=require("formik");n();var v_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(v_));var E={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};n();n();var Kt=g(require("react")),Yc=g(require("classnames"));n();n();n();var be=g(require("react")),jc=require("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");n();var Zc=require("react");n();n();var lo=g(require("react")),Zr=require("@terradharitri/sdk-dapp/constants/index"),ua=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Sc=require("@terradharitri/sdk-dapp/UI/UsdValue/index");n();n();var eo=g(require("react")),Tc=require("@fortawesome/free-solid-svg-icons"),kc=require("@fortawesome/react-fontawesome"),da=g(require("classnames"));n();var h_=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(h_));var ko={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"};var k_=(zt(),jo($t)).default,Hr=o=>{let{avatar:e,type:t}=o;return t==="NonFungibleDCDT"?eo.default.createElement("div",{className:(0,da.default)(ko.tokenAvatar,ko.tokenAvatarNFT)},"NFT"):t==="SemiFungibleDCDT"?eo.default.createElement("div",{className:(0,da.default)(ko.tokenAvatar,ko.tokenAvatarSFT)},"SFT"):t==="REWA"?eo.default.createElement("div",{className:ko.tokenAvatar},o.RewaIcon?eo.default.createElement(o.RewaIcon,null):eo.default.createElement(k_,null)):e?eo.default.createElement("div",{className:ko.tokenAvatar},eo.default.createElement("img",{src:e})):eo.default.createElement("div",{className:ko.tokenAvatar},eo.default.createElement(kc.FontAwesomeIcon,{icon:Tc.faDiamond}))};n();var S_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(S_));var Rt={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var wc=({label:o="Amount",amount:e,txType:t,tokenDecimals:r,tokenId:a,rewaLabel:p,rewaPriceInUsd:s,nft:i,tokenAvatar:d})=>{let u=(i==null?void 0:i.decimals)||0,_=t==="DCDT",f=t==="MetaDCDT",y=t==="NonFungibleDCDT",b=f?(0,J.parseAmount)(e,i==null?void 0:i.decimals):e,v=Boolean(i&&e),T=a.split("-")[0],k=_?r:Zr.DECIMALS,C=v?lo.default.createElement(ua.FormatAmount,{rewaLabel:p,value:b,decimals:u,digits:t==="MetaDCDT"?Zr.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):lo.default.createElement(ua.FormatAmount,{rewaLabel:p,value:(0,J.parseAmount)(e,k),showLabel:!1,decimals:k,showLastNonZeroDecimal:!0,token:_?T:p,"data-testid":"confirmAmount"});return y?null:lo.default.createElement("div",{className:Rt.amount},lo.default.createElement("span",{className:E.label},o),lo.default.createElement("div",{className:Rt.token},lo.default.createElement(Hr,{type:t,avatar:d}),lo.default.createElement("div",{className:Rt.value},C," ",T)),!_&&lo.default.createElement(Sc.UsdValue,{amount:e,usd:s,"data-testid":"confirmUsdValue",className:Rt.price}))};n();n();var te=g(require("react")),Cc=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");n();var w_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(w_));var Ht={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"};var C_=(o,e)=>[...o.matchAll(new RegExp(e,"gi"))].map(t=>t.index),Ec=({label:o="Data",scCallLabel:e="SC Call",data:t,highlight:r,isScCall:a})=>{let p=te.default.createElement(te.default.Fragment,null,t),[s,...i]=r&&a?r.split("@"):[];if(t&&r&&C_(t,r).length===1)switch(!0){case t.startsWith(r):{let[,d]=t.split(r);p=te.default.createElement(te.default.Fragment,null,r,te.default.createElement("span",null,d));break}case t.endsWith(r):{let[d]=t.split(r);p=te.default.createElement(te.default.Fragment,null,te.default.createElement("span",null,d),r);break}default:{let[d,u]=t.split(r);p=te.default.createElement(te.default.Fragment,null,te.default.createElement("span",null,d),r,te.default.createElement("span",null,u));break}}return te.default.createElement(te.default.Fragment,null,s&&te.default.createElement("div",{className:Ht.data},te.default.createElement("span",{className:E.label},e),te.default.createElement("div",{"data-testid":"confirmScCall",className:Ht.value},[(0,Cc.decodePart)(s),...i].join("@"))),te.default.createElement("div",{className:Ht.data},te.default.createElement("span",{className:E.label},o),te.default.createElement("div",{"data-testid":"confirmData",className:Ht.value},t?p:"N/A")))};n();n();var So=g(require("react")),Ic=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");n();var E_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(E_));var Zt={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Ac=({rewaPriceInUsd:o,label:e="Fee",feeLimit:t,rewaLabel:r})=>So.default.createElement("div",{className:Zt.fee},So.default.createElement("span",{className:E.label},e),So.default.createElement("div",{className:Zt.token},So.default.createElement(Hr,{type:"REWA"}),So.default.createElement("div",{className:Zt.value},So.default.createElement(Ic.FormatAmount,{rewaLabel:r,value:t,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),t!==P&&So.default.createElement("span",{className:Zt.price},br({feeLimit:t,rewaPriceInUsd:o})));n();n();var Pe=g(require("react")),Lc=require("@fortawesome/free-solid-svg-icons"),Pc=require("@fortawesome/react-fontawesome"),Dc=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Gc=require("@terradharitri/sdk-dapp/UI/CopyButton"),Bc=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),Vc=require("@terradharitri/sdk-dapp/UI/Trim"),Uc=g(require("classnames"));n();var{default:mo}=(Fc(),jo(Nc));n();var N_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(N_));var He={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"};var Mc=({label:o="Receiver",receiver:e,scamReport:t,receiverUsername:r})=>{let a=Boolean(r),p=r!=null?r:e;return Pe.default.createElement("div",{className:He.confirmReceiver},Pe.default.createElement("span",{className:E.label},o),Pe.default.createElement("span",{className:(0,Uc.default)(He.value,{[He.shrunk]:a}),"data-testid":"confirmReceiver"},a&&Pe.default.createElement(mo,{className:He.icon}),p,a&&Pe.default.createElement(Bc.ExplorerLink,{page:`/${Dc.ACCOUNTS_ENDPOINT}/${e}`,className:He.explorer})),a&&Pe.default.createElement("span",{className:He.subValue},Pe.default.createElement(Vc.Trim,{text:e,className:He.subValueTrim}),Pe.default.createElement(Gc.CopyButton,{text:e,className:He.subValueCopy})),t&&Pe.default.createElement("div",{className:He.scam},Pe.default.createElement("span",null,Pe.default.createElement(Pc.FontAwesomeIcon,{icon:Lc.faExclamationTriangle,className:He.icon}),Pe.default.createElement("small",{"data-testid":"confirmScamReport"},t))))};n();n();var wo=g(require("react"));n();n();var se=g(require("react")),Oc=require("@fortawesome/free-solid-svg-icons"),qc=require("@fortawesome/react-fontawesome"),Wc=g(require("@terradharitri/sdk-dapp/constants/index")),$c=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),zc=g(require("classnames"));n();var F_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(F_));var $o={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};var L_=(zt(),jo($t)).default,Xr=({RewaIcon:o,inDropdown:e=!1,isRewa:t,nftTokenDetails:r,nftType:a,token:p})=>{var C,A;let{name:s,identifier:i,balance:d,decimals:u}=p,_=((C=p.assets)==null?void 0:C.svgUrl)||((A=p.assets)==null?void 0:A.pngUrl)||"",f=_?28:20,[y,b]=(0,se.useState)(s);(0,se.useEffect)(()=>{var V;((V=r==null?void 0:r.uris)==null?void 0:V.some(U=>{let M=c.Buffer.from(String(U),"base64").toString(),{found:W}=Wp(M,r==null?void 0:r.scamInfo);return W}))||b(s)},[s]);let v=se.default.createElement(qc.FontAwesomeIcon,{icon:Oc.faDiamond});a==Z.NftEnumType.NonFungibleDCDT&&(v=se.default.createElement("div",{className:"nft-type","data-testid":`${i}-type-nft`},"NFT")),a===Z.NftEnumType.SemiFungibleDCDT&&(v=se.default.createElement("div",{className:"nft-type","data-testid":`${i}-type-sft`},"SFT"));let T=!e&&a!==Z.NftEnumType.NonFungibleDCDT,k=se.default.createElement("div",{className:$o.tokenElementCircle},v);return _&&(k=se.default.createElement("img",{className:$o.tokenElementCircle,src:_,alt:s,height:f})),t&&(k=se.default.createElement("div",{className:$o.tokenElementCircle},o?se.default.createElement(o,{height:36}):se.default.createElement(L_,{height:36}))),se.default.createElement("div",{className:(0,zc.default)(E.value,$o.tokenElement)},se.default.createElement("div",{className:$o.tokenElementWrapper},k),se.default.createElement("div",{"data-testid":"tokenName"},se.default.createElement("span",{"data-testid":`${i}-element`},se.default.createElement("span",null,y)," ",se.default.createElement("span",{className:$o.tokenElementIdentifier},i)),T&&se.default.createElement($c.FormatAmount,{rewaLabel:i,value:d||P,digits:a===Z.NftEnumType.SemiFungibleDCDT?0:Wc.DIGITS,token:i,showLabel:!1,decimals:u,"data-testid":`${i}-balance`})))};n();var P_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(P_));var Rc={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"};var Hc=({RewaIcon:o,rewaLabel:e,isDcdtTransaction:t,nft:r,tokenAvatar:a,tokenId:p,tokenIdError:s})=>{var d;let i=(r==null?void 0:r.name)||"";return wo.default.createElement("div",{className:Rc.token},wo.default.createElement("span",{className:E.label},r?wo.default.createElement("span",null,r==null?void 0:r.name," "):"","Token"),wo.default.createElement("div",null,r?wo.default.createElement(Xr,{inDropdown:!0,token:{name:r==null?void 0:r.name,identifier:r==null?void 0:r.identifier,decimals:0,balance:P,ticker:"",assets:{svgUrl:((d=r==null?void 0:r.assets)==null?void 0:d.svgUrl)||""}}}):wo.default.createElement(Xr,{inDropdown:!0,token:{name:t?i:"DharitrI eGold",identifier:t?p:e,decimals:0,balance:P,ticker:"",assets:{svgUrl:a||""}},isRewa:p===e,RewaIcon:o})),s&&wo.default.createElement("div",{className:E.error},s))};var Co=class extends Zc.Component{render(){return null}};Co.Receiver=Mc,Co.Amount=wc,Co.Fee=Ac,Co.Data=Ec,Co.Token=Hc;var jr=Co;n();n();var uo=g(require("react")),_a=g(require("classnames"));n();var D_=`.dapp-core-component__styles-module__preview {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(D_));var Ve={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"};var Jr=o=>{let _=o,{txType:e,onClick:t,identifier:r}=_,a=Xo(_,["txType","onClick","identifier"]),{name:p,thumbnail:s}=qp({nft:a}),i=["NonFungibleDCDT","SemiFungibleDCDT"].includes(e),d=e==="NonFungibleDCDT"?"NFT":"SFT",u=f=>{f.preventDefault(),t&&t(f,Object.assign(a,{identifier:r}))};return i?uo.default.createElement("div",{onClick:u,"data-testid":"token-preview",className:(0,_a.default)(Ve.preview,{[Ve.clickable]:Boolean(t)})},uo.default.createElement("img",{src:s,className:Ve.image}),uo.default.createElement("div",{className:Ve.content},uo.default.createElement("div",{className:Ve.left},uo.default.createElement("div",{"data-testid":"token-preview-name",className:Ve.name},p),uo.default.createElement("div",{"data-testid":"token-preview-identifier",className:Ve.identifier},r)),uo.default.createElement("div",{className:Ve.right},uo.default.createElement("div",{className:(0,_a.default)(Ve.badge,{[Ve.nft]:e==="NonFungibleDCDT",[Ve.sft]:e==="SemiFungibleDCDT"})},d)))):null};n();var G_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(G_));var _o={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};n();n();var Yr=require("@terradharitri/sdk-dapp/types/enums.types"),Kc=({providerType:o,hasGuardianScreen:e})=>e?"Confirm & Continue":o===Yr.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":o===Yr.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":o===Yr.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";n();var Xc=({receiverAddress:o,knownAddresses:e,existingReceiverUsername:t})=>{if(t)return t;let r=e==null?void 0:e.find(a=>a.address===o);return r==null?void 0:r.username};var Jc=({isConfirmCloseBtnVisible:o=!0,providerType:e})=>{var ue;let{setIsGuardianScreenVisible:t}=pe(),{receiverUsernameInfo:{receiverUsername:r},receiverInfo:{scamError:a,receiver:p,knownAddresses:s},formInfo:i,gasInfo:{gasCostError:d,feeLimit:u},accountInfo:{isGuarded:_},dataFieldInfo:{data:f},amountInfo:y,tokensInfo:b}=$(),{tokenId:v,tokenDetails:T,nft:k,rewaPriceInUsd:C,rewaLabel:A}=b,{readonly:I,onCloseForm:V,onInvalidateForm:U,onPreviewClick:M,onSubmitForm:W,txType:N,hasGuardianScreen:B}=i,L=()=>{t(!0)},[O,K]=(0,be.useState)(!1),H=N==="NonFungibleDCDT",G=Kc({providerType:e,hasGuardianScreen:B}),q=_e=>{_e.preventDefault(),I?V():U()},R=()=>{if(_&&B)return L();K(!0),W()},ie=!["REWA","DCDT","MetaDCDT"].includes(N),xe=Xc({knownAddresses:s,receiverAddress:p,existingReceiverUsername:r});return be.default.createElement("div",{className:_o.summary},be.default.createElement("div",{className:_o.fields},ie&&k&&be.default.createElement(Jr,x({onClick:M,txType:N},k)),be.default.createElement(jc.ConfirmReceiver,{amount:y.amount,scamReport:a!=null?a:null,receiver:p,receiverUsername:xe}),be.default.createElement("div",{className:_o.columns},!H&&be.default.createElement("div",{className:_o.column},be.default.createElement(jr.Amount,{txType:N,tokenId:v,tokenDecimals:T.decimals,amount:String(y.amount),nft:k,rewaPriceInUsd:C,rewaLabel:A,tokenLabel:T.name,tokenAvatar:((ue=T.assets)==null?void 0:ue.svgUrl)||""})),be.default.createElement("div",{className:_o.column},be.default.createElement(jr.Fee,{rewaLabel:A,rewaPriceInUsd:C,feeLimit:u}))),be.default.createElement(jr.Data,{data:f}),d&&be.default.createElement("p",{className:E.error},d)),be.default.createElement("div",{className:_o.buttons},be.default.createElement("button",{className:E.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:O,onClick:R},G),o&&be.default.createElement("button",{className:E.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:q},I?"Close":"Back")))};var Qc=o=>{let{formInfo:{setHasGuardianScreen:e}}=$();return(0,Kt.useEffect)(()=>{o.hasGuardianScreen&&e(!0)},[]),Kt.default.createElement("div",{className:(0,Yc.default)(_o.confirm,o.className),"data-testid":"confirmScreen"},Kt.default.createElement(Jc,x({},o)))};n();n();n();var X=g(require("react")),rn=require("@fortawesome/free-solid-svg-icons"),ba=require("@fortawesome/react-fontawesome"),tn=g(require("classnames")),ql=require("formik"),Wl=g(require("react-select"));n();n();var el=g(require("react")),ol=require("react-select");n();var B_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(B_));var F={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};var tl=o=>el.default.createElement(ol.components.Control,w(x({},o),{className:F.receiverSelectControl}));n();n();var Xt=g(require("react")),il=require("@fortawesome/free-solid-svg-icons"),cl=require("@fortawesome/react-fontawesome"),ll=g(require("classnames")),ml=require("react-select");n();n();var ht=(o,e)=>{let t=e.toLowerCase(),r=o.label.toLowerCase(),a=o.value.toLowerCase();return e?r.includes(t)||a.includes(t):!0};n();var rl=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),nl=require("@terradharitri/sdk-dapp/utils"),fa=o=>o?o.filter(r=>(0,nl.addressIsValid)(r.address)).map(r=>{let a=r.username?String((0,rl.trimUsernameDomain)(r.username)):r.address;return{value:r.address,label:a}}):[];n();var al=({setOption:o,setAllValues:e})=>(r,a)=>{["input-blur","menu-close"].includes(a.action)||(e(r),r||o(null))};n();var pl=({setInputValue:o,setOption:e,changeAndBlurInput:t})=>a=>{!a||(e(a),t(a.value),a.value!==a.label?o(a.label):o(a.value))};n();var sl=({options:o,usernameAccounts:e,knownAddresses:t,setFieldValue:r,setInputValue:a,setOption:p})=>i=>{var T,k,C,A;let d=o.find(I=>I.value===i&&I.value!==I.label),u=d==null?void 0:d.label,_,f,y=(T=e[i])==null?void 0:T.username;y&&(u=y,_=y,f=(k=e[i])==null?void 0:k.rawUsername);let b=t.find(I=>I.address===i);b!=null&&b.username&&(u=b==null?void 0:b.username,_=b==null?void 0:b.username,f=b==null?void 0:b.rawUsername);let v=u!=null?u:i;a(v),p({value:i,label:v}),r("receiver",(A=(C=e[i])==null?void 0:C.address)!=null?A:i),r("receiverUsername",_),r("rawReceiverUsername",f)};var dl=o=>{let{selectProps:e,isDisabled:t,options:r}=o,{menuIsOpen:a,value:p,isLoading:s}=e,i=(0,Xt.useMemo)(()=>r.find(f=>{let y=f,b=p;return b?ht(y,b.label):null}),[p,r]),d=r.length===0&&!s,u=Boolean(p)&&!i,_=t||d||u;return s?Xt.default.createElement(cl.FontAwesomeIcon,{icon:il.faSpinner,spin:!0,className:F.receiverSelectSpinner}):Xt.default.createElement(ml.components.DropdownIndicator,w(x({},o),{className:(0,ll.default)(F.receiverSelectIndicator,{[F.expanded]:a,[F.hidden]:_})}))};n();n();var _l=g(require("react")),fl=require("@terradharitri/sdk-dapp/utils"),gl=g(require("classnames")),yl=require("react-select");n();n();var ul=(o,e)=>{let t=o.current;if(!t||!t.state.focusedOption)return!1;let r=t.state.focusedOption,a=r.label.toLowerCase(),p=r.value.toLowerCase(),s=a!==p,i=s&&a.startsWith(e.toLowerCase());return s&&!e?!0:i};var bl=o=>e=>{let{selectProps:t,value:r}=e,{inputValue:a,menuIsOpen:p}=t,{receiverUsernameInfo:{receiverUsername:s}}=$(),i=ul(o,a),d=(0,fl.addressIsValid)(String(r)),u=Boolean(s)||i,_=d&&p||!d&&a;return _l.default.createElement(yl.components.Input,w(x({},e),{"data-testid":"receiver",className:(0,gl.default)(F.receiverSelectInput,{[F.visible]:_,[F.spaced]:u})}))};n();n();var vl=g(require("react")),hl=require("react-select");var xl=o=>vl.default.createElement(hl.components.Menu,w(x({},o),{className:F.receiverSelectMenu}));n();n();var ve=g(require("react")),Qr=require("@terradharitri/sdk-dapp/UI/Trim"),jt=g(require("classnames")),Tl=require("react-select");var kl=o=>{let{selectProps:e,focusedOption:t}=o,{value:r,inputValue:a}=e,p=t,s=p?p.label.toLowerCase():null,i=p&&p.label!==p.value,_=(s&&(!r||r&&a)?s.startsWith(a.toLowerCase()):!1)&&p?p.label.replace(p.label.substring(0,a.length),a):null,f=_&&!a,y=_&&a.length<_.length/2,b=_&&Boolean(a)&&y,v=_&&Boolean(a);return ve.default.createElement(ve.default.Fragment,null,b&&!i&&ve.default.createElement("div",{className:(0,jt.default)(F.receiverSelectAutocomplete,F.receiverSelectAutocompleteUntrimmed)},_),v&&i&&ve.default.createElement("div",{className:(0,jt.default)(F.receiverSelectAutocomplete,F.receiverSelectAutocompleteUsername)},ve.default.createElement(mo,{className:F.receiverSelectAutocompleteIcon}),_,ve.default.createElement("span",{className:F.receiverSelectAutocompleteWrapper},"(",ve.default.createElement(Qr.Trim,{text:p.value}),")")),f&&ve.default.createElement("span",{className:(0,jt.default)(F.receiverSelectAutocomplete,{[F.receiverSelectAutocompleteUsername]:i})},i?ve.default.createElement(ve.default.Fragment,null,ve.default.createElement("span",null,ve.default.createElement(mo,{className:(0,jt.default)(F.receiverSelectAutocompleteIcon,F.receiverSelectAutocompleteIconMuted)}),p.label),ve.default.createElement("span",{className:F.receiverSelectAutocompleteWrapper},"(",ve.default.createElement(Qr.Trim,{text:p.value}),")")):ve.default.createElement(Qr.Trim,{text:_})),ve.default.createElement(Tl.components.MenuList,w(x({},o),{className:F.receiverSelectList})))};n();n();var oo=g(require("react")),ga=require("@terradharitri/sdk-dapp/UI/Trim"),wl=g(require("classnames")),Cl=require("react-select");n();n();var Jt=g(require("react"));n();var V_=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(V_));var Sl={highlight:"dapp-core-component__styles-modules__highlight"};var en=({highlight:o,text:e=""})=>{let t=e.split(" "),r=o.toLowerCase(),a=new RegExp(`(${r})`,"gi"),p=t.map(s=>s.split(a).filter(i=>i));return Jt.default.createElement("span",{className:Sl.highlight},p.map((s,i)=>{let d=`${s}-${i}`;return Jt.default.createElement("span",{key:d},s.map((u,_)=>{let f=u.toLowerCase()===r,y=r&&f,b=`${u}-${_}`;return y?Jt.default.createElement("strong",{key:b},u):Jt.default.createElement("span",{key:b},u)}))}))};var El=o=>{let{isFocused:e,data:t,selectProps:r}=o,{inputValue:a}=r,p=t,s=p.value!==p.label;return oo.default.createElement(Cl.components.Option,w(x({},o),{className:(0,wl.default)(F.receiverSelectOption,{[F.focused]:e})}),s?oo.default.createElement(oo.default.Fragment,null,oo.default.createElement("span",{className:F.receiverSelectOptionUsername},oo.default.createElement(mo,{className:F.receiverSelectOptionUsernameIcon}),oo.default.createElement(en,{text:p.label,highlight:a})),oo.default.createElement("span",{className:F.receiverSelectOptionNameWrapper},"(",oo.default.createElement(ga.Trim,{text:p.value,className:F.receiverSelectOptionName}),")")):oo.default.createElement(ga.Trim,{text:p.value,className:F.receiverSelectOptionName}))};n();n();var Il=g(require("react")),Al=g(require("classnames")),Nl=require("react-select");var Fl=o=>{let{selectProps:e,isFocused:t,className:r}=o,{menuIsOpen:a}=e;return Il.default.createElement(Nl.components.SelectContainer,w(x({},o),{className:(0,Al.default)(r,{[F.expanded]:a,[F.focused]:t&&a})}))};n();n();var to=g(require("react")),ya=require("@terradharitri/sdk-dapp/UI/Trim"),Ll=require("@terradharitri/sdk-dapp/utils"),Pl=g(require("classnames")),Dl=require("react-select");var Gl=o=>{let{selectProps:e,isDisabled:t}=o,{value:r,menuIsOpen:a}=e,p=r,{receiverInfo:{receiver:s},receiverUsernameInfo:{receiverUsername:i}}=$(),d=i!=null?i:p&&p.value!==p.label,u=p?{value:s!=null?s:p.value,label:p.label}:null,_=u&&(d||!d&&!a)&&(0,Ll.addressIsValid)(u.value);return to.default.createElement(Dl.components.ValueContainer,w(x({},o),{className:F.receiverSelectValue}),_&&to.default.createElement("span",{className:(0,Pl.default)(F.receiverSelectSingle,{[F.disabled]:t})},d?to.default.createElement(to.default.Fragment,null,to.default.createElement("span",{className:F.receiverSelectSingleUsername},to.default.createElement(mo,{className:F.receiverSelectSingleUsernameIcon}),u.label),to.default.createElement("span",{className:F.receiverSelectSingleTrimWrapper},"(",to.default.createElement(ya.Trim,{text:u.value,className:F.receiverSelectSingleTrim}),")")):to.default.createElement(ya.Trim,{text:u.value,className:F.receiverSelectSingleTrim})),o.children)};n();n();var Bl=require("formik");var on=()=>{let{receiverInfo:{receiverError:o,isReceiverInvalid:e},receiverUsernameInfo:{receiverUsernameError:t,isReceiverUsernameInvalid:r,receiverUsername:a}}=$(),{touched:{receiver:p}}=(0,Bl.useFormikContext)(),s=e&&p||r;return a!=null&&a.startsWith("drt1")?{isInvalid:e,receiverErrorDataTestId:"receiverError",error:o}:{isInvalid:s,receiverErrorDataTestId:r?"receiverUsernameError":"receiverError",error:r?t:o}};n();n();var Ul=require("@terradharitri/sdk-dapp/utils"),Ml=require("formik");n();n();var Vl=({knownAddresses:o,inputValue:e})=>!o||!e?!1:o.filter(r=>{var i;let a=(i=r.username)!=null?i:r.address,p=r.address;return ht({label:a,value:p,data:{label:a,value:p}},e)}).length>0;var Ol=({menuIsOpen:o})=>{let{isInvalid:e}=on(),{values:{nft:t}}=(0,Ml.useFormikContext)(),{showUsernameError:r,isUsernameLoading:a,isUsernameDebouncing:p,usernameIsAmongKnown:s,searchQueryIsAddress:i}=yt(),{receiverInputValue:d,knownAddresses:u}=ft(),_=Wr({key:"address",knownAddresses:u,inputValue:d}),f=Vl({inputValue:d,knownAddresses:u}),y=i&&(!_||!o)&&!(0,Ul.addressIsValid)(d),b=Boolean(r&&!(o&&_)&&!(o&&s));return{isAddressError:y||(t?e:!1),isUsernameError:b,isRequiredError:e&&!b&&!a&&!p&&!y&&!f&&!d,isReceiverDropdownOpened:d&&f&&o}};var $l=o=>{let e=(0,X.useRef)(null),{className:t}=o,{setFieldValue:r}=(0,ql.useFormikContext)(),{receiverInfo:{scamError:a,fetchingScamAddress:p,receiverInputValue:s,setReceiverInputValue:i,knownAddresses:d,receiver:u,onBlurReceiver:_,onChangeReceiver:f},receiverUsernameInfo:{receiverUsername:y},formInfo:{readonly:b}}=$(),[v,T]=(0,X.useState)(!1),[k,C]=(0,X.useState)(u?{label:u,value:u}:null),{receiverErrorDataTestId:A,error:I}=on(),{isAddressError:V,isUsernameError:U,isRequiredError:M,isReceiverDropdownOpened:W}=Ol({menuIsOpen:v}),{usernameAccounts:N,isUsernameLoading:B}=yt(),L=()=>{_(new Event("blur"));let z=d==null?void 0:d.find(Le=>Le.username===s&&Le.address===u);z&&(r("receiver",z.address),r("receiverUsername",z.username),r("rawReceiverUsername",z.rawUsername))},O=d==null?void 0:d.find(z=>z.username===s&&z.address===u),K=(0,X.useMemo)(()=>fa(d),[d]),H=O?fa([O]):K,G=sl({setFieldValue:r,setInputValue:i,setOption:C,options:H,knownAddresses:d!=null?d:[],usernameAccounts:N}),q=(0,X.useCallback)(al({setAllValues:G,setOption:C}),[]),R=(0,X.useCallback)(z=>{f(z?z.trim():""),setTimeout(L)},[]),ie=pl({changeAndBlurInput:R,setOption:C,setInputValue:i}),xe=(0,X.useMemo)(()=>bl(e),[e]);(0,X.useEffect)(()=>{if(!u)return;let z=Object.keys(N).find(Le=>{var ao;return((ao=N[Le])==null?void 0:ao.address)===u});G(z!=null?z:u),z&&i(z)},[N,u]);let ue=V||U||M,_e=ue&&!v;return X.default.createElement("div",{className:(0,tn.default)(F.receiver,t)},X.default.createElement("div",{className:E.label,"data-testid":"receiverLabel","data-loading":p},"Receiver"),X.default.createElement(Wl.default,{value:k,onInputChange:q,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:Te("receiver",b),options:H,filterOption:ht,noOptionsMessage:()=>null,onChange:ie,onBlur:L,isMulti:!1,ref:e,inputValue:s,onMenuClose:()=>T(!1),onMenuOpen:()=>T(!0),components:{Menu:xl,Input:xe,Control:tl,ValueContainer:Gl,DropdownIndicator:dl,SelectContainer:Fl,MenuList:kl,Option:El,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,tn.default)(F.receiverSelectContainer,{[F.opened]:W,[F.invalid]:ue||a})}),_e&&X.default.createElement("div",{"data-testid":A,className:E.error},I),B&&X.default.createElement("div",{className:F.loading},"Loading..."),y&&X.default.createElement("span",{className:F.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",X.default.createElement(ba.FontAwesomeIcon,{icon:rn.faCheck,className:F.foundIcon})),a&&X.default.createElement("div",{"data-testid":"receiverScam",className:(0,tn.default)(E.error,E.scam)},X.default.createElement("span",null,X.default.createElement(ba.FontAwesomeIcon,{icon:rn.faExclamationTriangle}),X.default.createElement("small",null,a))))};n();n();var Ue=g(require("react")),zl=g(require("bignumber.js")),nn=g(require("classnames"));n();var U_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(U_));var Eo={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"};var Rl=o=>{let{className:e}=o,{formInfo:{readonly:t},amountInfo:r,tokensInfo:a}=$(),{amount:p,error:s,onFocus:i,onBlur:d,onChange:u,isInvalid:_,onMaxClicked:f,maxAmountAvailable:y,isMaxButtonVisible:b}=r,{nft:v}=a,T=v!=null&&v.balance?new zl.default(v.balance).isGreaterThan(0):!1,k=C=>{C.preventDefault(),f()};return Ue.default.createElement("div",{className:(0,nn.default)(Eo.amount,e)},Ue.default.createElement("div",{className:Eo.label},Ue.default.createElement("label",{htmlFor:"amount",className:E.label},"Amount"),T&&v&&Ue.default.createElement("div",{"data-value":`${y} ${v.identifier}`,className:(0,nn.default)(Eo.balance,e)},Ue.default.createElement("span",null,"Available:")," ",Ue.default.createElement("span",{"data-testid":`available-${v.identifier}`,className:Eo.available},Ue.default.createElement("span",{className:Eo.amount},y)," ",v.ticker))),Ue.default.createElement("div",{className:Eo.wrapper},Ue.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:p,disabled:Te("amount",t),onFocus:i,onBlur:d,onChange:u,autoComplete:"off",className:(0,nn.default)(E.input,{[E.invalid]:_,[E.disabled]:Te("amount",t)})}),b&&Ue.default.createElement("a",{href:"/","data-testid":"maxBtn",className:Eo.max,onClick:k,onMouseDown:C=>{C.preventDefault()}},"Max")),_&&Ue.default.createElement("div",{className:E.error,"data-testid":"amountError"},s))};n();n();var Ee=g(require("react")),pn=require("@fortawesome/free-solid-svg-icons"),Ta=require("@fortawesome/react-fontawesome"),im=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),ka=g(require("classnames")),cm=g(require("react-collapsed"));n();var go=g(require("react")),jl=require("@fortawesome/free-solid-svg-icons"),Jl=require("@fortawesome/react-fontawesome"),Yl=g(require("bignumber.js")),ha=g(require("classnames")),Ql=require("react-number-format");n();n();var Io=require("@terradharitri/sdk-dapp/constants/index"),Hl=require("@terradharitri/sdk-dapp/utils/validation"),fo=g(require("bignumber.js")),Zl=(o,e)=>{let t=e!=null?e:Io.DIGITS;if((0,Hl.stringIsFloat)(o)){if(new fo.default(o).isZero())return"0";let a=new fo.default(o).toFormat(t);return a=parseFloat(a)>0?a:new fo.default(o).toFormat(Io.DIGITS),a=parseFloat(a)>0?a:new fo.default(o).toFormat(Io.DIGITS+2),a=parseFloat(a)>0?a:new fo.default(o).toFormat(Io.DIGITS+4),a=parseFloat(a)>0?a:new fo.default(o).toFormat(Io.DIGITS+6),a=parseFloat(a)>0?a:new fo.default(o).toFormat(Io.DIGITS+10),parseFloat(a)>0?a:new fo.default(o).toFormat(Io.DIGITS+14)}return"0"};n();var va=o=>o.replace(/,/g,"");n();var an=require("react"),M_={value:"",count:0},Kl=(o,e)=>{let[t,r]=(0,an.useState)(M_);return(0,an.useEffect)(()=>{let p=setTimeout(()=>{r(o)},e);return()=>clearTimeout(p)},[o.count]),t};n();var Xl=g(require("bignumber.js")),xt=o=>{let[e,t]=o.split(""),r=new Xl.default(e).isZero();return Boolean(r&&t&&!(t==="."))};n();var O_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(O_));var de={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"};var em=()=>{let{formInfo:o,gasInfo:e}=$(),{readonly:t}=o,{defaultGasLimit:r,onResetGasLimit:a,onChangeGasLimit:p,onBlurGasLimit:s,gasLimit:i,gasLimitError:d,isGasLimitInvalid:u}=e,_=T=>{T.preventDefault(),a()},f=({value:T,floatValue:k})=>(!k||!(0,Yl.default)(k).isNaN())&&!xt(T),y=T=>{p(T.value,!0)},b=i!==r&&!t,v=Te("gasLimit",t);return go.default.createElement("div",{className:de.gas},go.default.createElement("label",{className:E.label,htmlFor:"gasLimit"},"Gas Limit"),go.default.createElement("div",{className:de.wrapper},go.default.createElement(Ql.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:v,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:s,onValueChange:y,required:!0,isAllowed:f,thousandSeparator:",",thousandsGroupStyle:"thousand",value:i,valueIsNumericString:!0,allowNegative:!1,className:(0,ha.default)(E.input,de.input,{[E.disabled]:v,[E.invalid]:u,[de.spaced]:b})}),b&&go.default.createElement("div",{className:de.actions},go.default.createElement("div",{onClick:_,"data-testid":"gasLimitResetBtn",className:(0,ha.default)(de.action,{[de.disabled]:v})},go.default.createElement(Jl.FontAwesomeIcon,{icon:jl.faUndo,className:de.icon}))),u&&go.default.createElement("div",{className:E.error,"data-testid":`${"gasLimit"}Error`},d)))};n();n();var yo=g(require("react")),om=require("@fortawesome/free-solid-svg-icons"),tm=require("@fortawesome/react-fontawesome"),rm=g(require("bignumber.js")),xa=g(require("classnames")),nm=require("react-number-format");var am=()=>{let{networkConfig:o}=ke(),{gasInfo:e,formInfo:t}=$(),{readonly:r}=t,{rewaLabel:a}=o,{gasPrice:p,gasPriceError:s,isGasPriceInvalid:i,onChangeGasPrice:d,onBlurGasPrice:u,onResetGasPrice:_}=e,f=p!==Ge&&!r,y=Te("gasPrice",r),b=({value:k,floatValue:C})=>(!C||!(0,rm.default)(C).isNaN())&&!xt(k),v=k=>{k.preventDefault(),_()},T=k=>{d(k.value,!0)};return yo.default.createElement("div",{className:de.gas},yo.default.createElement("label",{className:E.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),yo.default.createElement("div",{className:de.wrapper},yo.default.createElement(nm.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:y,id:"gasPrice",inputMode:"decimal",isAllowed:b,name:"gasPrice",onBlur:u,onValueChange:T,required:!0,suffix:` ${a}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:p,valueIsNumericString:!0,allowNegative:!1,className:(0,xa.default)(E.input,de.input,{[E.disabled]:y,[E.invalid]:i,[de.spaced]:f})}),f&&yo.default.createElement("div",{className:de.actions},yo.default.createElement("div",{onClick:v,className:(0,xa.default)(de.action,{[de.disabled]:y})},yo.default.createElement(tm.FontAwesomeIcon,{icon:om.faUndo,className:de.icon})))),i&&yo.default.createElement("div",{className:E.error,"data-testid":`${"gasPrice"}Error`},s))};n();var pm=g(require("react"));n();var q_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(q_));var ro={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"};var sm=({feeLimit:o,rewaPriceInUsd:e})=>o===P?null:pm.default.createElement("span",{className:ro.fiat,"data-testid":"feeInFiat"},"(",br({feeLimit:o,rewaPriceInUsd:e}),")");var lm=({className:o})=>{let{gasInfo:e,tokensInfo:t}=$(),{feeLimit:r,gasCostLoading:a,gasPriceError:p,gasLimitError:s}=e,{rewaPriceInUsd:i,rewaLabel:d}=t,[u,_]=(0,Ee.useState)(Boolean(p||s)),{getCollapseProps:f,getToggleProps:y}=(0,cm.default)({isExpanded:u}),b=()=>{_(v=>!v)};return Ee.default.createElement("div",{className:(0,ka.default)(ro.fee,o)},Ee.default.createElement("label",{className:E.label},"Fee"),Ee.default.createElement("div",x({className:ro.trigger},y({onClick:b})),Ee.default.createElement("span",{className:ro.limit,"data-testid":"feeLimit"},Ee.default.createElement(im.FormatAmount,{value:r,showLastNonZeroDecimal:!0,rewaLabel:d})),a&&Ee.default.createElement(Ta.FontAwesomeIcon,{icon:pn.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),Ee.default.createElement(sm,{rewaPriceInUsd:i,feeLimit:r}),Ee.default.createElement(Ta.FontAwesomeIcon,{icon:pn.faChevronRight,className:(0,ka.default)(ro.arrow,{[ro.active]:u})})),Ee.default.createElement("div",x({className:ro.expandable},f()),Ee.default.createElement("div",{className:ro.content},Ee.default.createElement(am,null),Ee.default.createElement(em,null))))};n();n();var $_=g(require("react")),z_=g(require("@terradharitri/sdk-dapp/constants/index")),R_=g(require("classnames")),mm=g(require("react-select"));n();var W_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(W_));n();n();var Oe=g(require("react")),_n=g(require("classnames"));n();var H_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(H_));var no={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};n();n();n();var Q=g(require("react")),um=require("@terradharitri/sdk-dapp/utils/validation"),sn=g(require("bignumber.js")),Sa=g(require("classnames")),_m=require("react-number-format");n();var Z_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Z_));var Yt={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};var K_=500,dm=1e13,X_=({"data-testid":o,InfoDustComponent:e,disabled:t,handleBlur:r,handleChange:a,name:p,onDebounceChange:s,onFocus:i,onKeyDown:d,placeholder:u,required:_,usdPrice:f,value:y,usdValue:b,className:v,autoFocus:T,suffix:k})=>{let C=(0,Q.useRef)(null),[A,I]=(0,Q.useState)(),[V,U]=(0,Q.useState)(!1),[M,W]=(0,Q.useState)({value:y,count:0}),[N,B]=(0,Q.useState)(),L=Kl(M,K_),O=G=>{G.stopPropagation(),U(!0);let q=va(G.target.value),R=(0,sn.default)(q).isLessThanOrEqualTo(dm);if((q===""||R)&&(I(q),G.target.value=q,a(G),s)){let ie={value:q,count:M.count+1};W(ie)}},K=()=>{if(b)return B(`$${b}`);if(!f||!y)return B(void 0);let G=va(y);if(!(y!==""&&(0,um.stringIsFloat)(G))||G==="")return B(void 0);let R=Zl(new sn.default(G).times(f!=null?f:0).toString(10),2);B(`$${R}`)},H=({value:G,floatValue:q})=>(!q||(0,sn.default)(q).isLessThanOrEqualTo(dm))&&!xt(G);return(0,Q.useEffect)(()=>{s&&V&&(U(!1),s(L.value))},[L]),(0,Q.useEffect)(K,[y,b,f]),(0,Q.useEffect)(()=>{y!==A&&I(y)},[y]),Q.default.createElement("div",{ref:C,className:(0,Sa.default)(Yt.amountHolder,{[Yt.showUsdValue]:Boolean(N)},v)},Q.default.createElement(_m.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":o||p,decimalSeparator:".",disabled:Boolean(t),id:p,inputMode:"decimal",isAllowed:H,name:p,onBlur:r,onChange:O,onFocus:i,onKeyDown:d,placeholder:u,required:_,thousandSeparator:",",thousandsGroupStyle:"thousand",value:A,suffix:k,valueIsNumericString:!0,allowNegative:!1,autoFocus:T,className:(0,Sa.default)(E.input,Yt.amountInput,{[E.disabled]:Boolean(t)})}),N&&Q.default.createElement("span",{className:Yt.amountHolderUsd},Q.default.createElement("small",{"data-testid":`tokenPrice_${f}`},N!=="$0"?Q.default.createElement(Q.default.Fragment,null,"\u2248 "):Q.default.createElement(Q.default.Fragment,null),N),e))},fm=(0,Q.memo)(X_,(o,e)=>o.value===e.value&&o.usdPrice===e.usdPrice&&o.className===e.className&&o.disabled===e.disabled&&o.usdValue===e.usdValue);n();n();var wa=g(require("react"));n();n();var Tt=g(require("react")),gm=require("@fortawesome/free-solid-svg-icons"),ym=require("@fortawesome/react-fontawesome"),bm=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),vm=require("react-tooltip"),X2=require("react-tooltip/dist/react-tooltip.css");n();var j_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(j_));var cn={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"};var hm=({rewaLabel:o})=>Tt.default.createElement("div",{className:cn.infoDust},Tt.default.createElement(vm.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:cn.infoDustTooltip},"A minimal amount of"," ",Tt.default.createElement(bm.FormatAmount,{rewaLabel:o,value:et,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),Tt.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:cn.infoDustTrigger},Tt.default.createElement(ym.FontAwesomeIcon,{icon:gm.faInfoCircle,className:"i-icon"})));var xm=({rewaLabel:o,amount:e,maxAmountMinusDust:t,isMaxClicked:r,tokenId:a})=>e===t&&r&&a===o?wa.default.createElement("span",{style:{marginLeft:"0.2rem"}},wa.default.createElement(hm,{rewaLabel:o})):null;n();n();var Cm=g(require("react")),Em=require("@terradharitri/sdk-dapp/constants"),Ea=g(require("bignumber.js")),Im=g(require("classnames"));n();var Ca=g(require("bignumber.js"));var Tm=o=>{let e=new Ca.default(o!=null?o:"0"),t=new Ca.default(et),r=e.minus(t);return r.isGreaterThan(0)?r.toString(10):"0"};n();var J_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(J_));var km={max:"dapp-core-component__maxButton-module__max"};n();var Ao=require("@terradharitri/sdk-dapp/constants"),Sm=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),wm=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),kt=({amount:o="0",decimals:e=0,digits:t=Ao.DIGITS,addCommas:r=!1,showLastNonZeroDecimal:a=!1})=>{if(o==null||!(0,wm.stringIsInteger)(o))return"0";let p=i=>(0,Sm.formatAmount)({input:o,digits:i,decimals:e,addCommas:r,showLastNonZeroDecimal:a}),s=p(t);return s=parseFloat(s)>0?s:p(Ao.DIGITS),s=parseFloat(s)>0?s:p(Ao.DIGITS+2),s=parseFloat(s)>0?s:p(Ao.DIGITS+4),s=parseFloat(s)>0?s:p(Ao.DIGITS+6),s=parseFloat(s)>0?s:p(Ao.DIGITS+10),parseFloat(s)>0?s:p(Ao.DIGITS+14)};var Am=({token:o,rewaLabel:e,inputAmount:t,className:r,onMaxClick:a})=>{var _;let p=(o==null?void 0:o.identifier)===e,s=(_=o==null?void 0:o.balance)!=null?_:"0";if(s==="0")return null;let i=kt({amount:p?Tm(s):s,decimals:(o==null?void 0:o.decimals)||Em.DECIMALS}),d=new Ea.default(t).isEqualTo(new Ea.default(i)),u=f=>{f.preventDefault(),a==null||a(i)};return d?null:Cm.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,Im.default)(km.max,r),onClick:u,onMouseDown:f=>{f.preventDefault()}},"Max")};n();n();var Me=g(require("react")),cd=g(require("classnames")),ld=g(require("react-select"));var La={};rr(La,{Control:()=>rf,IndicatorsContainer:()=>af,Input:()=>ef,Menu:()=>tf,MenuList:()=>of,DharitrIIcon:()=>pd,Placeholder:()=>nf,SmallLoader:()=>Y_,ValueComponent:()=>Ym,getOption:()=>Na,getSingleValue:()=>Fa,getValueContainer:()=>Aa});n();n();var Ia=g(require("react")),Nm=require("@fortawesome/free-solid-svg-icons"),Fm=require("@fortawesome/react-fontawesome"),Y_=({show:o,color:e})=>o?Ia.default.createElement("div",{className:"d-flex"},Ia.default.createElement(Fm.FontAwesomeIcon,{icon:Nm.faSpinner,className:`fa-spin fast-spin ${e||"text-primary"}`})):null;n();n();var Lm=g(require("react")),Pm=require("react-select");n();var Q_=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Q_));var D={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var ef=o=>Lm.default.createElement(Pm.components.Input,w(x({},o),{className:D.dropdown,"data-testid":"tokenSelectInput"}));n();var Dm=g(require("react")),Gm=require("react-select");var of=o=>{let r=o,{rx:e}=r,t=Xo(r,["rx"]);return Dm.default.createElement(Gm.components.MenuList,w(x({},t),{className:D.list}))};n();var ln=g(require("react")),Bm=require("@fortawesome/free-solid-svg-icons"),Vm=require("@fortawesome/react-fontawesome"),Um=require("react-select");var tf=o=>ln.default.createElement(Um.components.Menu,w(x({},o),{className:D.menu}),o.selectProps.isLoading?ln.default.createElement("div",{className:D.loading},ln.default.createElement(Vm.FontAwesomeIcon,{icon:Bm.faCircleNotch,className:"fa-spin",size:"lg"})):o.children);n();var Mm=g(require("react")),Om=require("react-select");var rf=o=>Mm.default.createElement(Om.components.Control,w(x({},o),{className:D.control}));n();var qm=g(require("react")),Wm=g(require("classnames")),$m=require("react-select");var nf=o=>qm.default.createElement($m.components.Placeholder,w(x({},o),{className:(0,Wm.default)(D.placeholder,{[D.focused]:o.isFocused})}));n();var zm=g(require("react")),Rm=g(require("classnames")),Hm=require("react-select");var af=o=>zm.default.createElement(Hm.components.IndicatorsContainer,w(x({},o),{className:(0,Rm.default)(D.indicator,{[D.expanded]:o.selectProps.menuIsOpen})}));n();var Ie=g(require("react")),Zm=require("@fortawesome/free-solid-svg-icons"),Km=require("@fortawesome/react-fontawesome"),Xm=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),jm=g(require("classnames")),Jm=require("react-select");var pf=(zt(),jo($t)).default,Ym=({RewaIcon:o,tokenId:e,icon:t})=>{let{isRewa:r}=(0,Xm.getIdentifierType)(e);return r?Ie.default.createElement("span",{className:D.asset},o?Ie.default.createElement(o,{className:D.diamond}):Ie.default.createElement(pf,{className:D.diamond})):t?Ie.default.createElement("img",{src:t,className:D.asset}):Ie.default.createElement(Km.FontAwesomeIcon,{icon:Zm.faDiamond,className:D.asset})},sf=({children:o})=>Ie.default.createElement("div",{className:D.wrapper},o),Aa=(o,e,t)=>r=>{var _,f;let{selectProps:a,isDisabled:p,children:s}=r,i=a.value,d=(f=(_=i==null?void 0:i.assets)==null?void 0:_.svgUrl)!=null?f:null,u=(0,Ie.useMemo)(()=>{let y=String(i==null?void 0:i.token.usdPrice);return y!=null&&y.includes("$")?i==null?void 0:i.token.usdPrice:`$${i==null?void 0:i.token.usdPrice}`},[i==null?void 0:i.token.usdPrice]);return Ie.default.createElement(Jm.components.ValueContainer,w(x({},r),{className:D.container}),Ie.default.createElement("div",{className:(0,jm.default)(D.icon,e)},Ie.default.createElement(Ym,{RewaIcon:t,rewaLabel:o,icon:d,isDisabled:p,tokenId:i==null?void 0:i.value})),Ie.default.createElement("div",{className:D.payload},Ie.default.createElement(sf,null,s,(i==null?void 0:i.token.usdPrice)&&Ie.default.createElement("small",{className:D.price},u))))};n();var re=g(require("react")),Qm=require("@fortawesome/free-solid-svg-icons"),ed=require("@fortawesome/react-fontawesome"),od=require("@terradharitri/sdk-dapp/constants"),td=require("@terradharitri/sdk-dapp/UI/UsdValue"),rd=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),nd=g(require("classnames")),ad=require("react-select");var{default:pd}=(zt(),jo($t)),Na=({RewaIcon:o,TokenTickerIcon:e,showBalanceUsdValue:t,showTokenPrice:r})=>a=>{var k,C,A,I;let{data:p,isSelected:s,isFocused:i,isDisabled:d,selectProps:u}=a,_=p,{isRewa:f}=(0,rd.getIdentifierType)(_.value),y=_.token.assets?_.token.assets.svgUrl:null,b=kt({amount:_.token.balance,decimals:_.token.decimals||od.DECIMALS,addCommas:!0}),v=(C=(k=_.token)==null?void 0:k.usdPrice)==null?void 0:C.toString(),T=(I=(A=_.token)==null?void 0:A.valueUSD)==null?void 0:I.toString();return re.default.createElement("div",{"data-testid":`${a.value}-option`},re.default.createElement(ad.components.Option,w(x({},a),{className:(0,nd.default)(D.option,{[D.selected]:s||i,[D.disabled]:d})}),re.default.createElement("div",{className:D.image},f?re.default.createElement("span",{className:D.icon},o?re.default.createElement(o,null):re.default.createElement(pd,null)):y?re.default.createElement("img",{src:y,className:D.icon}):re.default.createElement("span",{className:D.icon},re.default.createElement(ed.FontAwesomeIcon,{icon:Qm.faDiamond,className:D.diamond}))),re.default.createElement("div",{className:D.info},re.default.createElement("div",{className:D.left},re.default.createElement("div",{className:D.ticker},re.default.createElement("span",{className:D.value},u.inputValue?re.default.createElement(en,{text:_.token.ticker,highlight:u.inputValue}):_.token.ticker),e&&re.default.createElement(e,{token:_.token})),r&&re.default.createElement("small",{className:D.price},v)),re.default.createElement("div",{className:D.right},re.default.createElement("span",{className:D.value},b),t&&T&&re.default.createElement(td.UsdValue,{usd:1,decimals:4,amount:T,"data-testid":"token-price-usd-value",className:D.price,addEqualSign:!1}))),re.default.createElement("div",{className:D.children},a.children)))};n();var mn=g(require("react")),sd=g(require("classnames")),id=require("react-select");var Fa=o=>e=>{let{selectProps:t,children:r}=e,a=t.value;return mn.default.createElement(id.components.SingleValue,w(x({},e),{className:(0,sd.default)(D.single,{[D.focused]:e.selectProps.menuIsOpen})}),mn.default.createElement("div",{className:D.ticker},r,o&&mn.default.createElement(o,{token:a==null?void 0:a.token})))};var{Menu:cf,Control:lf,Input:mf,MenuList:df,IndicatorsContainer:uf,Placeholder:_f}=La,md=o=>{let{name:e,options:t,isLoading:r=!1,className:a="",noOptionsMessage:p="No Tokens",disabledOption:s,rewaLabel:i,RewaIcon:d,disabled:u,value:_,onBlur:f,onFocus:y,onChange:b,onMenuOpen:v,chainId:T,wrapperClassName:k="",showTokenPrice:C=!1,showBalanceUsdValue:A=!1,selectedTokenIconClassName:I,TokenTickerIcon:V}=o,U=(0,Me.useRef)(null),M=[i,lr(T)],W=(0,Me.useMemo)(()=>Na({rewaLabel:i,RewaIcon:d,showTokenPrice:C,showBalanceUsdValue:A,TokenTickerIcon:V}),[]),N=(0,Me.useMemo)(()=>Aa(i,I,d),[]),B=(0,Me.useMemo)(()=>Fa(V),[]);(0,Me.useEffect)(()=>{let G=t.find(R=>R.value===(_==null?void 0:_.value)),q=(G==null?void 0:G.token.balance)===(_==null?void 0:_.token.balance);!G||q||b(G)},[t]);let O=G=>M.includes(G),K=G=>{var ue;let q=G.value===(s==null?void 0:s.value),R=O(G.value),ie=O((ue=s==null?void 0:s.value)!=null?ue:"");return q||R&&ie},H=(G,q)=>{let R=G.data.token.ticker?G.data.token.ticker.toLowerCase().includes(q.toLowerCase()):!1,ie=G.data.token.name.toLowerCase().includes(q.toLowerCase());return Boolean(q)?R||ie:!0};return Me.default.createElement("div",{"data-testid":`${e}Select`,className:`${k} ${r?"select-holder-loading":""}`},Me.default.createElement("label",{htmlFor:e,"data-testid":"tokenIdLabel",className:D.label},"Token"),Me.default.createElement(ld.default,{ref:U,inputId:e,name:e,options:t,openMenuOnFocus:!0,isDisabled:u,isLoading:r,value:_,isOptionDisabled:K,onBlur:f,filterOption:H,onFocus:y,onChange:G=>{b(G),U&&U.current!==null&&U.current.blur()},isSearchable:o.isSearchable,maxMenuHeight:260,onMenuOpen:v,noOptionsMessage:()=>p,className:(0,cd.default)(D.select,a,{[D.disabled]:o.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:cf,Control:lf,Input:mf,MenuList:df,IndicatorsContainer:uf,ValueContainer:N,Placeholder:_f,Option:W,SingleValue:B}}))};n();n();var dd=g(require("react")),ud=g(require("classnames"));var _d=({hasErrors:o,className:e,error:t,"data-testid":r})=>o?dd.default.createElement("div",{className:(0,ud.default)(E.error,e),"data-testid":r},t):null;n();n();var un=g(require("react")),fd=g(require("classnames"));n();var ff=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ff));var dn={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"};var gd=({label:o,value:e,className:t,token:r,"data-testid":a,"data-value":p})=>un.default.createElement("div",{"data-testid":a,"data-value":p,className:(0,fd.default)(dn.balance,t)},un.default.createElement("span",{className:dn.label},o,": "),un.default.createElement("span",{className:dn.value},e)," ",r==null?void 0:r.ticker);var yd=({className:o,label:e,name:t,wrapperControlsClassName:r,tokenSelectProps:a,tokenBalanceProps:p,amountInputProps:s,amountErrorProps:i,maxButtonProps:d,readonly:u})=>Oe.default.createElement("div",{className:(0,_n.default)(no.amount,o)},Oe.default.createElement("div",{className:no.label},e&&Oe.default.createElement("label",{htmlFor:t,className:E.label,"data-testid":"amountLabel"},e),Oe.default.createElement(gd,x({},p))),Oe.default.createElement("div",{className:(0,_n.default)(no.wrapper,r,{[no.error]:s.isInvalid||a.isInvalid||i.hasErrors,[no.disabled]:u})},Oe.default.createElement(fm,x({},s)),Oe.default.createElement("div",{className:(0,_n.default)(no.interaction,d.wrapperClassName)},d.isMaxButtonVisible&&Oe.default.createElement(Am,x({},d)),Oe.default.createElement("div",{className:no.select},Oe.default.createElement(md,x({},a))))),Oe.default.createElement(_d,x({},i)));n();var Qt=g(require("react")),bd=require("@terradharitri/sdk-dapp/constants"),vd=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");var hd=()=>{var ao,ee;let{checkInvalid:o}=pe(),{tokensInfo:e,amountInfo:t,formInfo:r}=$(),{readonly:a}=r,{networkConfig:{rewaLabel:p,chainId:s}}=ke(),{rewaPriceInUsd:i}=Dr(),{amount:d,onBlur:u,onChange:_,onMaxClicked:f,error:y,isInvalid:b,onFocus:v,maxAmountAvailable:T,isMaxClicked:k,isMaxButtonVisible:C,maxAmountMinusDust:A}=t,{allAvailableTokens:I,areTokensLoading:V,getTokens:U,isTokenIdInvalid:M,RewaIcon:W,nft:N,onChangeTokenId:B,tokenDetails:L,tokenId:O,tokenIdError:K}=e,H=I.map(fe=>({value:fe.identifier,label:String(fe.ticker),assets:fe.assets,token:fe})),{isRewa:G}=(0,vd.getIdentifierType)(O),q=H.find(({value:fe})=>fe===O),R={id:"tokenId",value:q,name:"tokenId",isLoading:V,options:H,isSearchable:!0,onChange:fe=>{fe&&(B(fe.value),_(""))},onMenuOpen:U,disabled:Te("tokenId",a),error:K,isInvalid:M,rewaLabel:p,chainId:s,RewaIcon:W},ie=(0,Qt.useMemo)(()=>Qt.default.createElement(xm,{amount:d,rewaLabel:p,maxAmountMinusDust:A,tokenId:O,isMaxClicked:k}),[d,p,A,O,k]),xe={name:"amount",required:!0,value:d,placeholder:"Amount",handleBlur:u,"data-testid":"amount",handleChange:_,onFocus:v,usdPrice:G?i:void 0,error:y,isInvalid:b,InfoDustComponent:ie},ue={token:L,inputAmount:d,onMaxClick:f,isMaxClicked:k,isMaxButtonVisible:C},_e=o("amount")&&!xe.value,z={hasErrors:xe.isInvalid||R.isInvalid||_e,error:xe.error||R.error,className:E.error,"data-testid":xe.error?`${"amount"}Error`:`${"tokenId"}Error`},Le={"data-testid":`available-${(ao=N==null?void 0:N.identifier)!=null?ao:O}`,"data-value":`${T} ${(ee=N==null?void 0:N.identifier)!=null?ee:O}`,label:"Available",token:q==null?void 0:q.token,value:kt({amount:L.balance,decimals:L.decimals||bd.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(N==null?void 0:N.type)===Z.NftEnumType.NonFungibleDCDT?null:Qt.default.createElement(yd,{name:"tokenId",amountErrorProps:z,tokenSelectProps:R,amountInputProps:xe,tokenBalanceProps:Le,maxButtonProps:ue,label:"Amount",readonly:a})};n();n();var No=g(require("react")),Ga=g(require("classnames"));n();n();n();var qe=g(require("react")),gn=require("@fortawesome/free-solid-svg-icons"),Pa=require("@fortawesome/react-fontawesome"),xd=require("formik");n();n();var fn=()=>{let{formInfo:{isRewaTransaction:o,readonly:e},dataFieldInfo:{isAdvancedModeEnabled:t}}=$();return t?!1:!o||Te("data",e)};n();var gf=`.dapp-core-component__styles-module__advanced {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gf));var er={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"};var Td=()=>{let{formInfo:{readonly:o,isRewaTransaction:e}}=$(),{setFieldValue:t,values:r}=(0,xd.useFormikContext)(),[a,p]=(0,qe.useState)(!1),[s,i]=(0,qe.useState)(!1),d=fn(),u=!a&&!o&&d&&Boolean(r.data),_=()=>{p(!0),t("isAdvancedModeEnabled",!0)},f=()=>{i(!0),setTimeout(()=>{i(!1)},5e3)};return(0,qe.useEffect)(()=>{!e&&a&&p(!1)},[e,r.amount]),u?s?qe.default.createElement("div",{className:er.advanced,"data-testid":"confirmAdvancedMode",onClick:_},qe.default.createElement(Pa.FontAwesomeIcon,{icon:gn.faCheck,className:"i-icon"}),qe.default.createElement("span",{className:er.advancedText},"Confirm")):qe.default.createElement("div",{"data-testid":"enableAdvancedMode",className:er.advanced,onClick:f},qe.default.createElement(Pa.FontAwesomeIcon,{icon:gn.faScrewdriverWrench,className:"i-icon"}),qe.default.createElement("span",{className:er.advancedText},"Advanced")):null};n();var yf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(yf));var Da={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"};var kd=({className:o})=>{let{dataFieldInfo:{data:e,dataError:t,isDataInvalid:r,onChange:a,onBlur:p}}=$(),s=fn();return No.default.createElement("div",{className:(0,Ga.default)(Da.data,o)},No.default.createElement("div",{className:no.label},No.default.createElement("label",{htmlFor:"data",className:E.label},"Data"),No.default.createElement(Td,null)),No.default.createElement("div",{className:Da.wrapper},No.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:s,"data-testid":"data",value:e,onBlur:p,onChange:a,spellCheck:"false",placeholder:"Add transaction data",className:(0,Ga.default)(E.textarea,{[E.invalid]:r,[E.disabled]:s})})),r&&No.default.createElement("div",{className:E.error,"data-testid":"dataError"},t))};n();n();n();var bo=g(require("react")),Fo=g(require("classnames"));n();var bf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bf));var he={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"};var Sd=({disabled:o,percentageValue:e=0,onPercentageChange:t,className:r})=>{let a=[0,25,50,75,100],p="amountSlider";return bo.default.createElement("div",{className:(0,Fo.default)(he.amountSlider,r)},bo.default.createElement("div",{className:he.amountSliderRange},bo.default.createElement("input",{name:p,id:p,"data-testid":p,type:"range",disabled:o,min:0,max:100,value:String(e),className:(0,Fo.default)(he.amountSliderInput,{[he.disabled]:o}),onChange:s=>{t(Number(s.target.value))}}),bo.default.createElement("div",{style:{width:`${e}%`},className:(0,Fo.default)(he.amountSliderCompletion,{[he.disabled]:o})}),a.map(s=>bo.default.createElement("span",{onClick:()=>t(s),key:`breakpoint-${s}`,style:{left:`${s}%`},className:(0,Fo.default)(he.amountSliderBreakpoint,{[he.completed]:s<=e,[he.disabled]:o})})),a.map(s=>bo.default.createElement("span",{style:{left:`${s}%`},key:`breakpoint-${s}`,onClick:()=>t(s),className:(0,Fo.default)(he.amountSliderPercentage,{[he.exact]:s===e,[he.disabled]:o})},s,"%")),bo.default.createElement("span",{style:{left:`${e}%`},className:(0,Fo.default)(he.amountSliderThumb,{[he.disabled]:o})},bo.default.createElement("strong",{className:(0,Fo.default)(he.amountSliderThumbPercentage,{[he.hidden]:a.includes(e)})},Math.round(e),"%"))))};n();n();var $e=g(require("react")),wd=require("@fortawesome/free-solid-svg-icons"),Cd=require("@fortawesome/react-fontawesome"),Ed=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Id=require("@terradharitri/sdk-dapp/UI/CopyButton"),Ad=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),Nd=require("@terradharitri/sdk-dapp/UI/Trim"),Fd=g(require("classnames")),Ld=require("formik");n();var vf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vf));var We={"can-transfer-warning":"dapp-core-component__styles-module__can-transfer-warning",canTransferWarning:"dapp-core-component__styles-module__can-transfer-warning","can-transfer-warning-heading":"dapp-core-component__styles-module__can-transfer-warning-heading",canTransferWarningHeading:"dapp-core-component__styles-module__can-transfer-warning-heading","can-transfer-warning-icon":"dapp-core-component__styles-module__can-transfer-warning-icon",canTransferWarningIcon:"dapp-core-component__styles-module__can-transfer-warning-icon","can-transfer-warning-label":"dapp-core-component__styles-module__can-transfer-warning-label",canTransferWarningLabel:"dapp-core-component__styles-module__can-transfer-warning-label","can-transfer-warning-addresses":"dapp-core-component__styles-module__can-transfer-warning-addresses",canTransferWarningAddresses:"dapp-core-component__styles-module__can-transfer-warning-addresses","can-transfer-warning-address":"dapp-core-component__styles-module__can-transfer-warning-address",canTransferWarningAddress:"dapp-core-component__styles-module__can-transfer-warning-address","can-transfer-warning-address-explorer":"dapp-core-component__styles-module__can-transfer-warning-address-explorer",canTransferWarningAddressExplorer:"dapp-core-component__styles-module__can-transfer-warning-address-explorer","can-transfer-warning-address-copy":"dapp-core-component__styles-module__can-transfer-warning-address-copy",canTransferWarningAddressCopy:"dapp-core-component__styles-module__can-transfer-warning-address-copy"};var Pd=o=>{let{className:e}=o,{values:{nft:t,address:r}}=(0,Ld.useFormikContext)();return!(t!=null&&t.allowedReceivers)||t.allowedReceivers.includes(r)?null:$e.default.createElement("div",{className:(0,Fd.default)(We.canTransferWarning,e),"data-testid":"canTransferWarning"},$e.default.createElement("div",{className:We.canTransferWarningHeading},$e.default.createElement(Cd.FontAwesomeIcon,{icon:wd.faExclamationTriangle,className:We.canTransferWarningIcon,size:"lg"}),$e.default.createElement("div",{className:We.canTransferWarningTitle},$e.default.createElement("div",{className:We.canTransferWarningLabel},"Warning!"),$e.default.createElement("div",{className:We.canTransferWarningMessage},dp))),$e.default.createElement("div",{className:We.canTransferWarningAddresses},t.allowedReceivers.map(a=>$e.default.createElement("div",{className:We.canTransferWarningAddress,key:a},$e.default.createElement(Nd.Trim,{text:a,className:We.canTransferWarningAddressTrim}),$e.default.createElement(Id.CopyButton,{text:a,className:We.canTransferWarningAddressCopy}),$e.default.createElement(Ad.ExplorerLink,{page:`/${Ed.ACCOUNTS_ENDPOINT}/${a}`,className:We.canTransferWarningAddressExplorer})))))};n();n();var Ro=g(require("react")),Dd=require("@fortawesome/free-solid-svg-icons"),Gd=require("@fortawesome/react-fontawesome"),Bd=g(require("classnames"));n();var hf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hf));var zo={"wrewa-warning":"dapp-core-component__styles-module__wrewa-warning",wrewaWarning:"dapp-core-component__styles-module__wrewa-warning","wrewa-warning-heading":"dapp-core-component__styles-module__wrewa-warning-heading",wrewaWarningHeading:"dapp-core-component__styles-module__wrewa-warning-heading","wrewa-warning-icon":"dapp-core-component__styles-module__wrewa-warning-icon",wrewaWarningIcon:"dapp-core-component__styles-module__wrewa-warning-icon","wrewa-warning-label":"dapp-core-component__styles-module__wrewa-warning-label",wrewaWarningLabel:"dapp-core-component__styles-module__wrewa-warning-label"};var Vd=o=>{let{tokenId:e,className:t}=o,{networkConfig:{chainId:r}}=ke();return lr(r)!==e?null:Ro.default.createElement("div",{className:(0,Bd.default)(zo.wrewaWarning,t)},Ro.default.createElement("div",{className:zo.wrewaWarningHeading},Ro.default.createElement(Gd.FontAwesomeIcon,{icon:Dd.faExclamationTriangle,className:zo.wrewaWarningIcon,size:"lg"}),Ro.default.createElement("div",{className:zo.wrewaWarningTitle},Ro.default.createElement("div",{className:zo.wrewaWarningLabel},"Warning!"),Ro.default.createElement("div",{className:zo.wrewaWarningMessage},up))))};n();var xf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xf));var yn={form:"dapp-core-component__form-module__form",formFieldset:"dapp-core-component__form-module__formFieldset",formWrapper:"dapp-core-component__form-module__formWrapper","form-buttons":"dapp-core-component__form-module__form-buttons",formButtons:"dapp-core-component__form-module__form-buttons"};n();n();var Ud=o=>{var e,t;return((e=o.nft)==null?void 0:e.type)===Z.NftEnumType.NonFungibleDCDT?"NFT":((t=o.nft)==null?void 0:t.type)===Z.NftEnumType.SemiFungibleDCDT?"SFT":o.tokenDetails.ticker};var qd=({className:o,GuardianScreen:e})=>{let{formInfo:t,accountInfo:r,amountInfo:a,tokensInfo:p}=$(),{values:s}=(0,Od.useFormikContext)(),{txType:i,tokenId:d,address:u,balance:_,chainId:f,ledger:y}=s,{nft:b}=p,[v,T]=(0,Y.useState)(),{amountRange:k,onSetAmountPercentage:C}=a,{renderKey:A,onValidateForm:I,onInvalidateForm:V,onCloseForm:U,onSubmitForm:M,onPreviewClick:W,areValidatedValuesReady:N,isGuardianScreenVisible:B,uiOptions:L,readonly:O,setGuardedTransaction:K,setHasGuardianScreen:H}=t,G=()=>S(void 0,null,function*(){if(!N)return;let _e=yield gr(s);try{let z=yield xr({address:u,balance:_,chainId:f,nonce:r.nonce,values:_e});z.setVersion(bn.TransactionVersion.withTxOptions());let Le=x({guarded:!0},y?{hashSign:!0}:{});z.setOptions(bn.TransactionOptions.withOptions(Le)),T({0:z})}catch(z){T({})}});(0,Y.useEffect)(()=>{G()},[s,N]),(0,Y.useEffect)(()=>{H(Boolean(e))},[]),(0,Y.useEffect)(()=>{if(!v)return;let _e=v[0];_e&&K(_e)},[v]);let q=_e=>{_e.preventDefault(),U()},R=i==="NonFungibleDCDT",ie=i==="SemiFungibleDCDT",ue={onSignTransaction:()=>S(void 0,null,function*(){setTimeout(()=>{M()})}),onPrev:V,address:u,title:"",className:o,signedTransactions:v,setSignedTransactions:T,signStepInnerClasses:{}};return e&&B?Y.default.createElement(e,x({},ue)):N?Y.default.createElement(Qc,{providerType:r.providerType}):Y.default.createElement("form",{key:A,onSubmit:I,className:(0,Md.default)(yn.form,o)},Y.default.createElement("fieldset",{className:yn.formFieldset},(R||ie)&&b&&Y.default.createElement(Jr,x({onClick:W,txType:i},b)),Y.default.createElement($l,null),ie?Y.default.createElement(Rl,null):Y.default.createElement(hd,null),(L==null?void 0:L.showAmountSlider)&&!R&&Y.default.createElement(Sd,{onPercentageChange:C,percentageValue:k,disabled:Boolean(O)}),Y.default.createElement(Vd,{tokenId:d}),Y.default.createElement(Pd,null),Y.default.createElement(lm,null),Y.default.createElement(kd,null)),Y.default.createElement("div",{className:yn.formButtons},Y.default.createElement("button",{type:"button",id:"sendBtn","data-testid":"sendBtn",onClick:I,className:E.buttonSend},"Send ",Ud(p)),Y.default.createElement("button",{type:"button",id:"closeButton","data-testid":"returnToWalletBtn",onClick:q,className:E.buttonText},"Cancel")))};n();var St=require("@terradharitri/sdk-dapp/constants/index"),Wd=require("@terradharitri/sdk-dapp/types/enums.types");var Tf=St.fallbackNetworkConfigurations[Wd.EnvironmentsEnum.testnet],wt={rewaLabel:St.TESTNET_REWA_LABEL,address:ir,chainId:St.TESTNET_CHAIN_ID,balance:"812350000000000000",nonce:0,networkConfig:Tf};n();var vn=require("@terradharitri/sdk-dapp/constants/index"),$d={receiver:"",amount:"",tokenId:vn.TESTNET_REWA_LABEL,gasLimit:String(vn.GAS_LIMIT),gasPrice:"0.000000001",data:""};var kf=zd.fallbackNetworkConfigurations[hn.EnvironmentsEnum.testnet],Hd=({formConfigValues:o=$d,balance:e=wt.balance,address:t=wt.address,chainId:r=wt.chainId,ledger:a,isGuarded:p,GuardianScreen:s})=>{var C;let i=xc(w(x({configValues:o},wt),{balance:e,address:t})),[d,u]=(0,Ho.useState)(Boolean(s)),[_,f]=(0,Ho.useState)(Boolean(o.skipToConfirm));if(!i)return Ho.default.createElement(Rd.Loader,{"data-testid":"loader"});let y=o,{nft:b,gasLimitCostError:v}=i,T=x(w(x({},y),{tokenId:String(y.tokenId),txType:jp({nft:b,tokenId:String(y.tokenId)}),address:t,chainId:r,balance:e}),a?{ledger:x({},a)}:{}),k={networkConfig:w(x({},kf),{skipFetchFromServer:!0}),initGasLimitError:v,initialValues:T,onFormSubmit:()=>"log submit",accountInfo:{address:t,isGuarded:p,nonce:wt.nonce,balance:e,providerType:hn.LoginMethodsEnum.extra},formInfo:{prefilledForm:!1,skipToConfirm:!1,readonly:!1,isFormSubmitted:_,setIsFormSubmitted:f,onCloseForm:()=>"",setGuardedTransaction:A=>{console.log(A)},setHasGuardianScreen:u,hasGuardianScreen:d},tokensInfo:{initialNft:b,initialTokens:(C=i==null?void 0:i.computedTokens.map(A=>{var I;return w(x({},A),{ledgerSignature:((I=A.assets)==null?void 0:I.ledgerSignature)||"",decimals:A.decimals})}))!=null?C:[]}};return Ho.default.createElement(Qi,x({},k),Ho.default.createElement(qd,{GuardianScreen:s}))};var Xd=o=>(0,Kd.render)(Zd.default.createElement(Hd,x({},o)));n();n();var jd=require("@testing-library/react");function*Sf(o){yield*o}var wf="0.000057937 xREWA",Cf=()=>S(void 0,null,function*(){let o=Xd({balance:"7600000000000000000000"}),t=yield o.findByTestId("amount");Zo.fireEvent.change(t,{target:{value:"0.1"}}),Zo.fireEvent.blur(t),expect(t.value).toBe("0.1");let a=o.getByTestId("receiver");Zo.fireEvent.change(a,{target:{value:It}}),Zo.fireEvent.blur(a),expect(a.value).toBe(It);let s=o.getByTestId("data");Zo.fireEvent.change(s,{target:{value:"claim"}}),Zo.fireEvent.blur(s),expect(s.value).toBe("claim");let i=yield o.findByTestId("feeLimit");return expect(i.textContent).toBe("0.0000575 xREWA"),{render:o}}),Ef=o=>{let e=Sf(o);mp.use(Bo.rest.post(`${Go.apiAddress}/transaction/cost`,(t,r,a)=>{let{value:p}=e.next();return r(a.status(200),a.json({data:{txGasUnits:p||0},code:p?"successful":"failed"}))}))};0&&(module.exports={fillInForm,finalFee,setResponse});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=helpers.js.map
