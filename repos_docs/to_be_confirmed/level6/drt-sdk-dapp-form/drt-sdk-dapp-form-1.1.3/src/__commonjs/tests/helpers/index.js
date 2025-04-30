"use strict";var $d=Object.create;var St=Object.defineProperty,Rd=Object.defineProperties,Hd=Object.getOwnPropertyDescriptor,Zd=Object.getOwnPropertyDescriptors,Kd=Object.getOwnPropertyNames,Jt=Object.getOwnPropertySymbols,Xd=Object.getPrototypeOf,gn=Object.prototype.hasOwnProperty,Da=Object.prototype.propertyIsEnumerable;var La=(o,e,t)=>e in o?St(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,x=(o,e)=>{for(var t in e||(e={}))gn.call(e,t)&&La(o,t,e[t]);if(Jt)for(var t of Jt(e))Da.call(e,t)&&La(o,t,e[t]);return o},w=(o,e)=>Rd(o,Zd(e));var Ho=(o,e)=>{var t={};for(var r in o)gn.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&Jt)for(var r of Jt(o))e.indexOf(r)<0&&Da.call(o,r)&&(t[r]=o[r]);return t};var yn=(o,e)=>()=>(o&&(e=o(o=0)),e);var Yt=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),Qt=(o,e)=>{for(var t in e)St(o,t,{get:e[t],enumerable:!0})},Ga=(o,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Kd(e))!gn.call(o,a)&&a!==t&&St(o,a,{get:()=>e[a],enumerable:!(r=Hd(e,a))||r.enumerable});return o};var g=(o,e,t)=>(t=o!=null?$d(Xd(o)):{},Ga(e||!o||!o.__esModule?St(t,"default",{value:o,enumerable:!0}):t,o)),Zo=o=>Ga(St({},"__esModule",{value:!0}),o);var S=(o,e,t)=>new Promise((r,a)=>{var p=d=>{try{i(t.next(d))}catch(u){a(u)}},s=d=>{try{i(t.throw(d))}catch(u){a(u)}},i=d=>d.done?r(d.value):Promise.resolve(d.value).then(p,s);i((t=t.apply(o,e)).next())});var Ua=Yt(er=>{"use strict";n();er.byteLength=Jd;er.toByteArray=Qd;er.fromByteArray=tu;var Ze=[],De=[],jd=typeof Uint8Array!="undefined"?Uint8Array:Array,bn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Po=0,Ba=bn.length;Po<Ba;++Po)Ze[Po]=bn[Po],De[bn.charCodeAt(Po)]=Po;var Po,Ba;De["-".charCodeAt(0)]=62;De["_".charCodeAt(0)]=63;function Va(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=o.indexOf("=");t===-1&&(t=e);var r=t===e?0:4-t%4;return[t,r]}function Jd(o){var e=Va(o),t=e[0],r=e[1];return(t+r)*3/4-r}function Yd(o,e,t){return(e+t)*3/4-t}function Qd(o){var e,t=Va(o),r=t[0],a=t[1],p=new jd(Yd(o,r,a)),s=0,i=a>0?r-4:r,d;for(d=0;d<i;d+=4)e=De[o.charCodeAt(d)]<<18|De[o.charCodeAt(d+1)]<<12|De[o.charCodeAt(d+2)]<<6|De[o.charCodeAt(d+3)],p[s++]=e>>16&255,p[s++]=e>>8&255,p[s++]=e&255;return a===2&&(e=De[o.charCodeAt(d)]<<2|De[o.charCodeAt(d+1)]>>4,p[s++]=e&255),a===1&&(e=De[o.charCodeAt(d)]<<10|De[o.charCodeAt(d+1)]<<4|De[o.charCodeAt(d+2)]>>2,p[s++]=e>>8&255,p[s++]=e&255),p}function eu(o){return Ze[o>>18&63]+Ze[o>>12&63]+Ze[o>>6&63]+Ze[o&63]}function ou(o,e,t){for(var r,a=[],p=e;p<t;p+=3)r=(o[p]<<16&16711680)+(o[p+1]<<8&65280)+(o[p+2]&255),a.push(eu(r));return a.join("")}function tu(o){for(var e,t=o.length,r=t%3,a=[],p=16383,s=0,i=t-r;s<i;s+=p)a.push(ou(o,s,s+p>i?i:s+p));return r===1?(e=o[t-1],a.push(Ze[e>>2]+Ze[e<<4&63]+"==")):r===2&&(e=(o[t-2]<<8)+o[t-1],a.push(Ze[e>>10]+Ze[e>>4&63]+Ze[e<<2&63]+"=")),a.join("")}});var Ma=Yt(vn=>{n();vn.read=function(o,e,t,r,a){var p,s,i=a*8-r-1,d=(1<<i)-1,u=d>>1,_=-7,f=t?a-1:0,y=t?-1:1,b=o[e+f];for(f+=y,p=b&(1<<-_)-1,b>>=-_,_+=i;_>0;p=p*256+o[e+f],f+=y,_-=8);for(s=p&(1<<-_)-1,p>>=-_,_+=r;_>0;s=s*256+o[e+f],f+=y,_-=8);if(p===0)p=1-u;else{if(p===d)return s?NaN:(b?-1:1)*(1/0);s=s+Math.pow(2,r),p=p-u}return(b?-1:1)*s*Math.pow(2,p-r)};vn.write=function(o,e,t,r,a,p){var s,i,d,u=p*8-a-1,_=(1<<u)-1,f=_>>1,y=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=r?0:p-1,v=r?1:-1,T=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(i=isNaN(e)?1:0,s=_):(s=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-s))<1&&(s--,d*=2),s+f>=1?e+=y/d:e+=y*Math.pow(2,1-f),e*d>=2&&(s++,d/=2),s+f>=_?(i=0,s=_):s+f>=1?(i=(e*d-1)*Math.pow(2,a),s=s+f):(i=e*Math.pow(2,f-1)*Math.pow(2,a),s=0));a>=8;o[t+b]=i&255,b+=v,i/=256,a-=8);for(s=s<<a|i,u+=a;u>0;o[t+b]=s&255,b+=v,s/=256,u-=8);o[t+b-v]|=T*128}});var Ya=Yt(Xo=>{"use strict";n();var hn=Ua(),Ko=Ma(),Oa=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Xo.Buffer=h;Xo.SlowBuffer=iu;Xo.INSPECT_MAX_BYTES=50;var or=2147483647;Xo.kMaxLength=or;h.TYPED_ARRAY_SUPPORT=ru();!h.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ru(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(t){return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.buffer}});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.byteOffset}});function po(o){if(o>or)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,h.prototype),e}function h(o,e,t){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Sn(o)}return za(o,e,t)}h.poolSize=8192;function za(o,e,t){if(typeof o=="string")return au(o,e);if(ArrayBuffer.isView(o))return pu(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(Ke(o,ArrayBuffer)||o&&Ke(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Ke(o,SharedArrayBuffer)||o&&Ke(o.buffer,SharedArrayBuffer)))return Tn(o,e,t);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=o.valueOf&&o.valueOf();if(r!=null&&r!==o)return h.from(r,e,t);var a=su(o);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return h.from(o[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}h.from=function(o,e,t){return za(o,e,t)};Object.setPrototypeOf(h.prototype,Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function $a(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function nu(o,e,t){return $a(o),o<=0?po(o):e!==void 0?typeof t=="string"?po(o).fill(e,t):po(o).fill(e):po(o)}h.alloc=function(o,e,t){return nu(o,e,t)};function Sn(o){return $a(o),po(o<0?0:wn(o)|0)}h.allocUnsafe=function(o){return Sn(o)};h.allocUnsafeSlow=function(o){return Sn(o)};function au(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=Ra(o,e)|0,r=po(t),a=r.write(o,e);return a!==t&&(r=r.slice(0,a)),r}function xn(o){for(var e=o.length<0?0:wn(o.length)|0,t=po(e),r=0;r<e;r+=1)t[r]=o[r]&255;return t}function pu(o){if(Ke(o,Uint8Array)){var e=new Uint8Array(o);return Tn(e.buffer,e.byteOffset,e.byteLength)}return xn(o)}function Tn(o,e,t){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return e===void 0&&t===void 0?r=new Uint8Array(o):t===void 0?r=new Uint8Array(o,e):r=new Uint8Array(o,e,t),Object.setPrototypeOf(r,h.prototype),r}function su(o){if(h.isBuffer(o)){var e=wn(o.length)|0,t=po(e);return t.length===0||o.copy(t,0,0,e),t}if(o.length!==void 0)return typeof o.length!="number"||Cn(o.length)?po(0):xn(o);if(o.type==="Buffer"&&Array.isArray(o.data))return xn(o.data)}function wn(o){if(o>=or)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+or.toString(16)+" bytes");return o|0}function iu(o){return+o!=o&&(o=0),h.alloc(+o)}h.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==h.prototype};h.compare=function(e,t){if(Ke(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),Ke(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,a=t.length,p=0,s=Math.min(r,a);p<s;++p)if(e[p]!==t[p]){r=e[p],a=t[p];break}return r<a?-1:a<r?1:0};h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return h.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var a=h.allocUnsafe(t),p=0;for(r=0;r<e.length;++r){var s=e[r];if(Ke(s,Uint8Array))p+s.length>a.length?h.from(s).copy(a,p):Uint8Array.prototype.set.call(a,s,p);else if(h.isBuffer(s))s.copy(a,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=s.length}return a};function Ra(o,e){if(h.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||Ke(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var t=o.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return kn(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ja(o).length;default:if(a)return r?-1:kn(o).length;e=(""+e).toLowerCase(),a=!0}}h.byteLength=Ra;function cu(o,e,t){var r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return vu(this,e,t);case"utf8":case"utf-8":return Za(this,e,t);case"ascii":return yu(this,e,t);case"latin1":case"binary":return bu(this,e,t);case"base64":return fu(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return hu(this,e,t);default:if(r)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),r=!0}}h.prototype._isBuffer=!0;function Lo(o,e,t){var r=o[e];o[e]=o[t],o[t]=r}h.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)Lo(this,t,t+1);return this};h.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)Lo(this,t,t+3),Lo(this,t+1,t+2);return this};h.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)Lo(this,t,t+7),Lo(this,t+1,t+6),Lo(this,t+2,t+5),Lo(this,t+3,t+4);return this};h.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Za(this,0,e):cu.apply(this,arguments)};h.prototype.toLocaleString=h.prototype.toString;h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:h.compare(this,e)===0};h.prototype.inspect=function(){var e="",t=Xo.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};Oa&&(h.prototype[Oa]=h.prototype.inspect);h.prototype.compare=function(e,t,r,a,p){if(Ke(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),r===void 0&&(r=e?e.length:0),a===void 0&&(a=0),p===void 0&&(p=this.length),t<0||r>e.length||a<0||p>this.length)throw new RangeError("out of range index");if(a>=p&&t>=r)return 0;if(a>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,a>>>=0,p>>>=0,this===e)return 0;for(var s=p-a,i=r-t,d=Math.min(s,i),u=this.slice(a,p),_=e.slice(t,r),f=0;f<d;++f)if(u[f]!==_[f]){s=u[f],i=_[f];break}return s<i?-1:i<s?1:0};function Ha(o,e,t,r,a){if(o.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Cn(t)&&(t=a?0:o.length-1),t<0&&(t=o.length+t),t>=o.length){if(a)return-1;t=o.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof e=="string"&&(e=h.from(e,r)),h.isBuffer(e))return e.length===0?-1:qa(o,e,t,r,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(o,e,t):Uint8Array.prototype.lastIndexOf.call(o,e,t):qa(o,[e],t,r,a);throw new TypeError("val must be string, number or Buffer")}function qa(o,e,t,r,a){var p=1,s=o.length,i=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(o.length<2||e.length<2)return-1;p=2,s/=2,i/=2,t/=2}function d(b,v){return p===1?b[v]:b.readUInt16BE(v*p)}var u;if(a){var _=-1;for(u=t;u<s;u++)if(d(o,u)===d(e,_===-1?0:u-_)){if(_===-1&&(_=u),u-_+1===i)return _*p}else _!==-1&&(u-=u-_),_=-1}else for(t+i>s&&(t=s-i),u=t;u>=0;u--){for(var f=!0,y=0;y<i;y++)if(d(o,u+y)!==d(e,y)){f=!1;break}if(f)return u}return-1}h.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1};h.prototype.indexOf=function(e,t,r){return Ha(this,e,t,r,!0)};h.prototype.lastIndexOf=function(e,t,r){return Ha(this,e,t,r,!1)};function lu(o,e,t,r){t=Number(t)||0;var a=o.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var p=e.length;r>p/2&&(r=p/2);for(var s=0;s<r;++s){var i=parseInt(e.substr(s*2,2),16);if(Cn(i))return s;o[t+s]=i}return s}function mu(o,e,t,r){return tr(kn(e,o.length-t),o,t,r)}function du(o,e,t,r){return tr(ku(e),o,t,r)}function uu(o,e,t,r){return tr(Ja(e),o,t,r)}function _u(o,e,t,r){return tr(Su(e,o.length-t),o,t,r)}h.prototype.write=function(e,t,r,a){if(t===void 0)a="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")a=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var s=!1;;)switch(a){case"hex":return lu(this,e,t,r);case"utf8":case"utf-8":return mu(this,e,t,r);case"ascii":case"latin1":case"binary":return du(this,e,t,r);case"base64":return uu(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _u(this,e,t,r);default:if(s)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),s=!0}};h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function fu(o,e,t){return e===0&&t===o.length?hn.fromByteArray(o):hn.fromByteArray(o.slice(e,t))}function Za(o,e,t){t=Math.min(o.length,t);for(var r=[],a=e;a<t;){var p=o[a],s=null,i=p>239?4:p>223?3:p>191?2:1;if(a+i<=t){var d,u,_,f;switch(i){case 1:p<128&&(s=p);break;case 2:d=o[a+1],(d&192)===128&&(f=(p&31)<<6|d&63,f>127&&(s=f));break;case 3:d=o[a+1],u=o[a+2],(d&192)===128&&(u&192)===128&&(f=(p&15)<<12|(d&63)<<6|u&63,f>2047&&(f<55296||f>57343)&&(s=f));break;case 4:d=o[a+1],u=o[a+2],_=o[a+3],(d&192)===128&&(u&192)===128&&(_&192)===128&&(f=(p&15)<<18|(d&63)<<12|(u&63)<<6|_&63,f>65535&&f<1114112&&(s=f))}}s===null?(s=65533,i=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|s&1023),r.push(s),a+=i}return gu(r)}var Wa=4096;function gu(o){var e=o.length;if(e<=Wa)return String.fromCharCode.apply(String,o);for(var t="",r=0;r<e;)t+=String.fromCharCode.apply(String,o.slice(r,r+=Wa));return t}function yu(o,e,t){var r="";t=Math.min(o.length,t);for(var a=e;a<t;++a)r+=String.fromCharCode(o[a]&127);return r}function bu(o,e,t){var r="";t=Math.min(o.length,t);for(var a=e;a<t;++a)r+=String.fromCharCode(o[a]);return r}function vu(o,e,t){var r=o.length;(!e||e<0)&&(e=0),(!t||t<0||t>r)&&(t=r);for(var a="",p=e;p<t;++p)a+=wu[o[p]];return a}function hu(o,e,t){for(var r=o.slice(e,t),a="",p=0;p<r.length-1;p+=2)a+=String.fromCharCode(r[p]+r[p+1]*256);return a}h.prototype.slice=function(e,t){var r=this.length;e=~~e,t=t===void 0?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);var a=this.subarray(e,t);return Object.setPrototypeOf(a,h.prototype),a};function ce(o,e,t){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>t)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||ce(e,t,this.length);for(var a=this[e],p=1,s=0;++s<t&&(p*=256);)a+=this[e+s]*p;return a};h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||ce(e,t,this.length);for(var a=this[e+--t],p=1;t>0&&(p*=256);)a+=this[e+--t]*p;return a};h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e=e>>>0,t||ce(e,1,this.length),this[e]};h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ce(e,2,this.length),this[e]|this[e+1]<<8};h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ce(e,2,this.length),this[e]<<8|this[e+1]};h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};h.prototype.readIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||ce(e,t,this.length);for(var a=this[e],p=1,s=0;++s<t&&(p*=256);)a+=this[e+s]*p;return p*=128,a>=p&&(a-=Math.pow(2,8*t)),a};h.prototype.readIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||ce(e,t,this.length);for(var a=t,p=1,s=this[e+--a];a>0&&(p*=256);)s+=this[e+--a]*p;return p*=128,s>=p&&(s-=Math.pow(2,8*t)),s};h.prototype.readInt8=function(e,t){return e=e>>>0,t||ce(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};h.prototype.readInt16LE=function(e,t){e=e>>>0,t||ce(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};h.prototype.readInt16BE=function(e,t){e=e>>>0,t||ce(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};h.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};h.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};h.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),Ko.read(this,e,!0,23,4)};h.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),Ko.read(this,e,!1,23,4)};h.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ce(e,8,this.length),Ko.read(this,e,!0,52,8)};h.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ce(e,8,this.length),Ko.read(this,e,!1,52,8)};function Ae(o,e,t,r,a,p){if(!h.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<p)throw new RangeError('"value" argument is out of bounds');if(t+r>o.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,r,a){if(e=+e,t=t>>>0,r=r>>>0,!a){var p=Math.pow(2,8*r)-1;Ae(this,e,t,r,p,0)}var s=1,i=0;for(this[t]=e&255;++i<r&&(s*=256);)this[t+i]=e/s&255;return t+r};h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,r,a){if(e=+e,t=t>>>0,r=r>>>0,!a){var p=Math.pow(2,8*r)-1;Ae(this,e,t,r,p,0)}var s=r-1,i=1;for(this[t+s]=e&255;--s>=0&&(i*=256);)this[t+s]=e/i&255;return t+r};h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,1,255,0),this[t]=e&255,t+1};h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};h.prototype.writeIntLE=function(e,t,r,a){if(e=+e,t=t>>>0,!a){var p=Math.pow(2,8*r-1);Ae(this,e,t,r,p-1,-p)}var s=0,i=1,d=0;for(this[t]=e&255;++s<r&&(i*=256);)e<0&&d===0&&this[t+s-1]!==0&&(d=1),this[t+s]=(e/i>>0)-d&255;return t+r};h.prototype.writeIntBE=function(e,t,r,a){if(e=+e,t=t>>>0,!a){var p=Math.pow(2,8*r-1);Ae(this,e,t,r,p-1,-p)}var s=r-1,i=1,d=0;for(this[t+s]=e&255;--s>=0&&(i*=256);)e<0&&d===0&&this[t+s+1]!==0&&(d=1),this[t+s]=(e/i>>0)-d&255;return t+r};h.prototype.writeInt8=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};h.prototype.writeInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};h.prototype.writeInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};h.prototype.writeInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};h.prototype.writeInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Ka(o,e,t,r,a,p){if(t+r>o.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Xa(o,e,t,r,a){return e=+e,t=t>>>0,a||Ka(o,e,t,4,34028234663852886e22,-34028234663852886e22),Ko.write(o,e,t,r,23,4),t+4}h.prototype.writeFloatLE=function(e,t,r){return Xa(this,e,t,!0,r)};h.prototype.writeFloatBE=function(e,t,r){return Xa(this,e,t,!1,r)};function ja(o,e,t,r,a){return e=+e,t=t>>>0,a||Ka(o,e,t,8,17976931348623157e292,-17976931348623157e292),Ko.write(o,e,t,r,52,8),t+8}h.prototype.writeDoubleLE=function(e,t,r){return ja(this,e,t,!0,r)};h.prototype.writeDoubleBE=function(e,t,r){return ja(this,e,t,!1,r)};h.prototype.copy=function(e,t,r,a){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<r&&(a=r),a===r||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-r&&(a=e.length-t+r);var p=a-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,a):Uint8Array.prototype.set.call(e,this.subarray(r,a),t),p};h.prototype.fill=function(e,t,r,a){if(typeof e=="string"){if(typeof t=="string"?(a=t,t=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!h.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){var p=e.charCodeAt(0);(a==="utf8"&&p<128||a==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<r;++s)this[s]=e;else{var i=h.isBuffer(e)?e:h.from(e,a),d=i.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<r-t;++s)this[s+t]=i[s%d]}return this};var xu=/[^+/0-9A-Za-z-_]/g;function Tu(o){if(o=o.split("=")[0],o=o.trim().replace(xu,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function kn(o,e){e=e||1/0;for(var t,r=o.length,a=null,p=[],s=0;s<r;++s){if(t=o.charCodeAt(s),t>55295&&t<57344){if(!a){if(t>56319){(e-=3)>-1&&p.push(239,191,189);continue}else if(s+1===r){(e-=3)>-1&&p.push(239,191,189);continue}a=t;continue}if(t<56320){(e-=3)>-1&&p.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(e-=3)>-1&&p.push(239,191,189);if(a=null,t<128){if((e-=1)<0)break;p.push(t)}else if(t<2048){if((e-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function ku(o){for(var e=[],t=0;t<o.length;++t)e.push(o.charCodeAt(t)&255);return e}function Su(o,e){for(var t,r,a,p=[],s=0;s<o.length&&!((e-=2)<0);++s)t=o.charCodeAt(s),r=t>>8,a=t%256,p.push(a),p.push(r);return p}function Ja(o){return hn.toByteArray(Tu(o))}function tr(o,e,t,r){for(var a=0;a<r&&!(a+t>=e.length||a>=o.length);++a)e[a+t]=o[a];return a}function Ke(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function Cn(o){return o!==o}var wu=function(){for(var o="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)e[r+a]=o[t]+o[a];return e}()});var rp=Yt((kf,tp)=>{n();var oe=tp.exports={},Xe,je;function En(){throw new Error("setTimeout has not been defined")}function In(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Xe=setTimeout:Xe=En}catch(o){Xe=En}try{typeof clearTimeout=="function"?je=clearTimeout:je=In}catch(o){je=In}})();function Qa(o){if(Xe===setTimeout)return setTimeout(o,0);if((Xe===En||!Xe)&&setTimeout)return Xe=setTimeout,setTimeout(o,0);try{return Xe(o,0)}catch(e){try{return Xe.call(null,o,0)}catch(t){return Xe.call(this,o,0)}}}function Cu(o){if(je===clearTimeout)return clearTimeout(o);if((je===In||!je)&&clearTimeout)return je=clearTimeout,clearTimeout(o);try{return je(o)}catch(e){try{return je.call(null,o)}catch(t){return je.call(this,o)}}}var so=[],jo=!1,Do,rr=-1;function Eu(){!jo||!Do||(jo=!1,Do.length?so=Do.concat(so):rr=-1,so.length&&ep())}function ep(){if(!jo){var o=Qa(Eu);jo=!0;for(var e=so.length;e;){for(Do=so,so=[];++rr<e;)Do&&Do[rr].run();rr=-1,e=so.length}Do=null,jo=!1,Cu(o)}}oe.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];so.push(new op(o,e)),so.length===1&&!jo&&Qa(ep)};function op(o,e){this.fun=o,this.array=e}op.prototype.run=function(){this.fun.apply(null,this.array)};oe.title="browser";oe.browser=!0;oe.env={};oe.argv=[];oe.version="";oe.versions={};function io(){}oe.on=io;oe.addListener=io;oe.once=io;oe.off=io;oe.removeListener=io;oe.removeAllListeners=io;oe.emit=io;oe.prependListener=io;oe.prependOnceListener=io;oe.listeners=function(o){return[]};oe.binding=function(o){throw new Error("process.binding is not supported")};oe.cwd=function(){return"/"};oe.chdir=function(o){throw new Error("process.chdir is not supported")};oe.umask=function(){return 0}});var c,l,Sf,n=yn(()=>{c=g(Ya()),l=g(rp()),Sf=function(o){function e(){var r=this||self;return delete o.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var t=__magic__;return t}(Object)});var Mt={};Qt(Mt,{default:()=>u_});var Mr,d_,u_,Ot=yn(()=>{"use strict";n();Mr=g(require("react")),d_=o=>Mr.createElement("svg",x({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},o),Mr.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Mr.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),u_=d_});var Tc={};Qt(Tc,{default:()=>h_});var Wr,v_,h_,kc=yn(()=>{"use strict";n();Wr=g(require("react")),v_=o=>Wr.createElement("svg",x({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},o),Wr.createElement("g",null,Wr.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),h_=v_});var bf={};Qt(bf,{formConfiguration:()=>Fa,formattedAmountSelector:()=>gf,renderForm:()=>ff,sendAndConfirmTest:()=>yf});module.exports=Zo(bf);n();n();var qd=g(require("react")),Wd=require("@testing-library/react");n();var $o=g(require("react")),Ud=require("@terradharitri/sdk-dapp/constants/network"),_n=require("@terradharitri/sdk-dapp/types/enums.types"),Md=require("@terradharitri/sdk-dapp/UI/Loader");n();n();n();var Oo=g(require("react")),zi=require("@terradharitri/sdk-dapp/constants/index"),$i=require("formik");n();n();var np="Token can only be transfered to one of the following addresses:",ap="WREWA is not REWA! It can not be sent to exchanges. It can not be staked or delegated. It can not be used as transaction fee.";var An="600000000",pp=10,co="500000",sp=75e4,ip=1e6,cp=2e5,Jo="5000000000000000",L="0",lp="WREWA-bd4d79";n();var Se=g(require("react")),qi=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var _p=g(require("axios"));n();n();n();var up=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var mp=require("@terradharitri/sdk-dapp/constants/index");n();var Iu={D:"devnet",T:"testnet",1:"mainnet"},Au={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function Yo(o){return Iu[o]}function nr(o){return Au[o]||lp}function dp(o){let e=Yo(o),t=mp.fallbackNetworkConfigurations[e].apiAddress;if(!t)throw"Could not extract api address for environment, check if you have a valid chainID";return t}function ar(o){return S(this,null,function*(){let e=dp(o);return yield(0,up.getServerConfiguration)(e)})}n();var Nu={mainnet:{delegationContract:"drt1qqqqqqqqqqqqqpgqxwakt2g7u9atsnr03gqcgmhcv38pt7mkd94q8vqld4",delegationContractData:{minGasLimit:"75000000"}},devnet:{delegationContract:"drt1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqeyzkqc",delegationContractData:{minGasLimit:"75000000"}},testnet:{delegationContract:"drt1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqeyzkqc",delegationContractData:{minGasLimit:"75000000"}}};function pr(o){let e=Yo(o);return e?Nu[e]:null}var sr={value:null};function Qo(o){return sr.value={baseURL:o.apiAddress,timeout:Number(o.apiTimeout)},sr.value}function ne(o){return S(this,null,function*(){if(sr.value!=null)return sr.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),o!=null){let t=yield ar(o);return Qo(t)}let e="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(e),e})}function fp(o,e){return S(this,null,function*(){let t=e||(yield ne()),{data:r}=yield _p.default.get(`/accounts/${o}`,t);return r})}n();n();var gp=g(require("axios"));function yp(){return S(this,null,function*(){try{let o=yield ne(),{data:e}=yield gp.default.get("economics",o);return e}catch(o){return console.error("err fetching economics info",o),null}})}n();n();var et=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Fu=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Fn=g(require("axios")),bp=g(require("lodash/uniqBy"));var Pu=1e3,Nn=100;function Lu(a){return S(this,arguments,function*({address:o,size:e,from:t,search:r}){let p=new URLSearchParams(w(x(x({},t!=null&&e!=null?{from:String(t),size:String(e)}:{}),r?{search:r}:{}),{includeMetaDCDT:"true"})).toString(),s=yield ne();return Fn.default.get(`/${et.ACCOUNTS_ENDPOINT}/${o}/${et.TOKENS_ENDPOINT}?${p}`,s)})}function vp(o,e){return S(this,null,function*(){let{address:t,token:r}=o,a=e||(yield ne());return Fn.default.get(`/${et.ACCOUNTS_ENDPOINT}/${t}/${et.TOKENS_ENDPOINT}/${r}`,a)})}function Du(a){return S(this,arguments,function*({address:o,page:e=1,search:t,size:r}){let p={address:o,search:t};r!=null&&(p.from=(e-1)*Nn,p.size=Nn);let{data:s}=yield Lu(p);return s})}function hp(o){return S(this,null,function*(){let e=[],t=!0,r=1;for(;t;)try{let a=yield Du({address:o,size:Pu,page:r});if(a==null||(a==null?void 0:a.length)===0){t=!1;break}let p=a.map(s=>x({},s));if(e.push(...p),a.length!=Nn){t=!1;break}r++}catch(a){console.log(a),t=!1}return(0,bp.default)(e,a=>a.identifier)})}n();var xp=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Tp=g(require("axios"));n();n();n();var Z=require("@terradharitri/sdk-dapp/types/tokens.types");n();var ie=(u=>(u.receiver="receiver",u.gasPrice="gasPrice",u.data="data",u.tokenId="tokenId",u.amount="amount",u.gasLimit="gasLimit",u.receiverUsername="receiverUsername",u.rawReceiverUsername="rawReceiverUsername",u.senderUsername="senderUsername",u))(ie||{});n();n();function kp(o,e){return S(this,null,function*(){if(o.type!==Z.NftEnumType.MetaDCDT)return null;let t=e||(yield ne());try{let{data:r}=yield Tp.default.get(`/${xp.COLLECTIONS_ENDPOINT}/${o.collection}`,t);return(r==null?void 0:r.canTransfer)===!1?r==null?void 0:r.roles.map(({address:s,canTransfer:i})=>i?s:"").filter(s=>Boolean(s)):null}catch(r){return console.error(`Unable to get canTransfer information for collection ${o.collection}`,r),null}})}n();var wt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Pn=g(require("axios"));function ir(r,a){return S(this,arguments,function*({address:o,identifier:e},t){try{let p=t||(yield ne()),{data:s}=yield Pn.default.get(`/${wt.ACCOUNTS_ENDPOINT}/${o}/${wt.NFTS_ENDPOINT}/${e}`,p);return s||null}catch(p){return null}})}function Sp(o,e){return S(this,null,function*(){try{let t=e||(yield ne()),{data:r}=yield Pn.default.get(`/${wt.NFTS_ENDPOINT}/${o}`,t);return r||null}catch(t){return null}})}n();n();var wp=g(require("axios"));function Cp(o){return S(this,null,function*(){try{let e=yield ne(),{data:t}=yield wp.default.post("/transaction/cost",o,e);return{data:t,success:!0}}catch(e){return console.error(e),{success:!1}}})}n();var ot=g(require("react")),Ep=(0,ot.createContext)({});function Ip({children:o,value:e}){return ot.default.createElement(Ep.Provider,{value:e},o)}function Ne(){return(0,ot.useContext)(Ep)}n();n();var ye=g(require("react")),pi=require("@terradharitri/sdk-dapp/constants/index"),si=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Dr=g(require("bignumber.js")),ii=require("formik");n();n();n();var Ct=require("bech32"),Gu=o=>{let e=Ct.bech32.toWords(c.Buffer.from(o,"hex"));return Ct.bech32.encode("drt",e)},Bu=o=>{let e=Ct.bech32.decode(o,256);return c.Buffer.from(Ct.bech32.fromWords(e.words)).toString("hex")},Ap={encode:Gu,decode:Bu};n();n();var Go=({initialValues:o,gasLimit:e,touched:t})=>o.gasLimit!==e&&t.gasLimit;n();var Te=(o,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(o);n();var cr=o=>!["REWA","DCDT"].includes(o);n();var Np=o=>Boolean(o==null?void 0:o.startsWith("drt1"));n();var Fp=require("@terradharitri/sdk-dapp/constants"),Pp=require("@terradharitri/sdk-dapp/utils/account/getAccount");var lr=o=>S(void 0,null,function*(){let e=o.txType==="REWA"?o.amount:Fp.ZERO,t=cr(o.txType),r=yield(0,Pp.getAccount)(o.receiver),a=r==null?void 0:r.username,p=t?o.senderUsername:a,s=w(x({},o),{amount:e,receiverUsername:p});return delete s.rawReceiverUsername,s});n();n();var Ln=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),Lp=({nft:o,skipDescription:e})=>{var T,k;let{name:t,metadata:r,media:a,isNsfw:p,scamInfo:s,verified:i}=o,d="Scam - ",{isSuspicious:u,message:_}=(0,Ln.getScamFlag)({verified:i,message:t,isNsfw:p,scamInfo:s,messagePrefix:d});if(!(r!=null&&r.description)||e){let C=u?"placeholder":(T=a==null?void 0:a[0])==null?void 0:T.thumbnailUrl;return{isSuspicious:u,name:t||_,thumbnail:C,description:""}}let{message:f,isSuspicious:y}=(0,Ln.getScamFlag)({message:r.description,messagePrefix:d,verified:i}),b=u||y,v=b?"placeholder":(k=a==null?void 0:a[0])==null?void 0:k.thumbnailUrl;return{isSuspicious:b,name:t||_,thumbnail:v,description:f||r.description}};n();var Vu=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var mr=g(require("anchorme")),Dn=o=>o.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Dp=(o,e)=>{if(e){let t=`[Message hidden due to suspicious content - ${e.info}]`;if(o.length>1e3)return{output:t,stringWithLinks:o,found:!0};let r=Dn(o.normalize("NFKC")),a=mr.default.list(r),p=[];if(a.length>0){let s=t;a.forEach((i,d)=>{let{string:u}=i,_="",f="",y=u;for(let b=0;b<s.length;b++){let v=s.slice(b),[T]=mr.default.list(Dn(v));T&&u===T.string&&(_=s.substring(0,b))}for(let b=t.length;b>0;b--){let v=s.slice(0,b),[T]=mr.default.list(Dn(v));T&&u===T.string&&(f=s.substring(b))}p.push(_),p.push(y),s=f,d===a.length-1&&p.push(f)})}else p.push(o);return{output:t,stringWithLinks:p.join(""),found:!0}}else return{output:o,stringWithLinks:"",found:!1}};n();n();var Gn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),we=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Bn=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),j=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();var Ce=g(require("react")),Ns=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Fs=require("formik");n();n();var hr=require("@terradharitri/sdk-dapp/constants/index"),ts=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),vr=g(require("bignumber.js"));n();n();var Et=require("@terradharitri/sdk-dapp/constants/index");function dr({feeLimit:o,rewaPriceInUsd:e}){let t=(0,we.formatAmount)({input:o,decimals:Et.DECIMALS,digits:Et.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,Bn.getUsdValue)({amount:t,usd:e,decimals:Et.DIGITS})}`}n();var Bp=require("@terradharitri/sdk-dapp/constants/index");var Je=(o="")=>{let e=sp+o.length*Bp.GAS_PER_DATA_BYTE;return o.startsWith("DCDTNFTBurn")?cp.toString():String(Math.max(e,ip))};n();var ur=require("@terradharitri/sdk-dapp/constants/index"),Vn=g(require("bignumber.js"));n();var Vp=require("@terradharitri/sdk-dapp/constants/index");function Fe(o=!1){return o?Vp.EXTRA_GAS_LIMIT_GUARDED_TX:0}var Ye=({data:o,isGuarded:e})=>{let t=new Vn.default(ur.GAS_LIMIT),r=new Vn.default(ur.GAS_PER_DATA_BYTE),a=o?r.times(c.Buffer.from(o).length):0,p=Fe(e);return t.plus(a).plus(p).toString(10)};n();var Up=require("@terradharitri/sdk-dapp/constants/index");function It({tokens:o,tokenId:e}){let t=o.find(({identifier:p})=>p===e),r=t?t.decimals:Up.DECIMALS,a=(t==null?void 0:t.balance)||L;return w(x({},t),{decimals:r,identifier:(t==null?void 0:t.identifier)||"",name:(t==null?void 0:t.name)||"",ticker:(t==null?void 0:t.ticker)||"",balance:a})}var tt=It;n();n();var $e=require("@terradharitri/sdk-core"),Mp=require("@terradharitri/sdk-dapp/constants/index"),Op=g(require("bignumber.js"));function _r({amount:o,data:e,nonce:t,receiver:r,receiverUsername:a,sender:p,senderUsername:s,gasPrice:i,gasLimit:d,chainId:u}){let _=new Op.default((0,j.parseAmount)(o));return new $e.Transaction({nonce:t,value:$e.TokenPayment.rewaFromBigInteger(_.toString(10)),sender:new $e.Address(p),receiver:new $e.Address(r),gasPrice:parseInt(i),gasLimit:parseInt(d),senderUsername:s,receiverUsername:a,data:new $e.TransactionPayload(e),chainID:u,version:new $e.TransactionVersion(Mp.VERSION)})}n();function vo(o){return isNaN(Number(o))||o===""?(0,j.parseAmount)("0"):(0,j.parseAmount)(o)}function fr(o){return S(this,null,function*(){let{address:e,balance:t,chainId:r,nonce:a,values:p}=o,{amount:s,receiver:i,data:d,gasLimit:u,gasPrice:_,nft:f,receiverUsername:y,senderUsername:b}=p,v=Boolean(f)?e:i;try{return _r({balance:t,amount:String(s),gasLimit:String(u),gasPrice:vo(_),data:d.trim(),receiver:v,receiverUsername:y,senderUsername:b,sender:e,nonce:a,chainId:r})}catch(T){throw console.log("Prepare transaction error",T),T}})}n();var Uu=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");n();var qp=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");function At({nft:o,tokenId:e}){let{isDcdt:t,isNft:r,isRewa:a}=(0,qp.getIdentifierType)(e);return a?"REWA":(o==null?void 0:o.type)===Z.NftEnumType.NonFungibleDCDT?"NonFungibleDCDT":(o==null?void 0:o.type)===Z.NftEnumType.SemiFungibleDCDT?"SemiFungibleDCDT":(o==null?void 0:o.type)===Z.NftEnumType.MetaDCDT||r?"MetaDCDT":t?"DCDT":"REWA"}var Wp=At;n();var gr=g(require("bignumber.js"));var yr=o=>o.length%2===0?o:`0${o}`,Mu=({amount:o,decimals:e,tokenId:t})=>{let r=Boolean(o)?o:L,a=yr(c.Buffer.from(t).toString("hex")),p=yr(new gr.default((0,j.parseAmount)(r,e)).toString(16));return`DCDTTransfer@${a}@${p}`},Un=({nft:o,amount:e,receiver:t,errors:r})=>{if(!(o&&e&&t&&!r))return"";try{let p="DCDTNFTTransfer",s=(o==null?void 0:o.type)===Z.NftEnumType.MetaDCDT?(0,j.parseAmount)(e,o.decimals):e;return p+=`@${c.Buffer.from(String(o.collection)).toString("hex")}`,p+=`@${yr(new gr.default(String(o.nonce)).toString(16))}`,p+=`@${yr(new gr.default(s).toString(16))}`,p+=`@${Ap.decode(t)}`,p}catch(p){return""}},zp=({txType:o,values:e,nft:t,amountError:r,receiverError:a})=>{let{tokens:p,tokenId:s,amount:i,receiver:d}=e;if(p&&o==="DCDT"&&!r){let{decimals:u}=tt({tokens:p,tokenId:s});return Mu({amount:i,tokenId:s,decimals:u})}return o!=="REWA"?Un({nft:t,amount:i,receiver:d,errors:Boolean(r||a)}):e.data};n();var Hp=require("@terradharitri/sdk-dapp/constants/index"),Zp=require("@terradharitri/sdk-dapp/utils/smartContracts"),Kp=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Bo=g(require("bignumber.js"));n();var $p=g(require("bignumber.js"));var Mn=s=>S(void 0,[s],function*({balance:o,address:e,isGuarded:t,nonce:r,values:a,chainId:p}){var U,M,W;let{amount:i,receiver:d,data:u,gasLimit:_,gasPrice:f}=a,b=_r({balance:o,amount:String(i),gasLimit:String(_),gasPrice:vo(f),data:u.trim(),receiver:d,sender:e,nonce:r,chainId:p}).toPlainObject(),{data:v,success:T}=yield Cp(w(x({},b),{sender:e})),k=Number((U=v==null?void 0:v.data)==null?void 0:U.txGasUnits),C=(M=v==null?void 0:v.data)==null?void 0:M.returnMessage;if(!Boolean(T&&(v==null?void 0:v.code)==="successful"&&k&&k!==0))return{gasLimit:_,gasLimitCostError:(W=v==null?void 0:v.data)==null?void 0:W.returnMessage};if(!C)return{gasLimit:new $p.default(k).times(pp).dividedToIntegerBy(100).plus(k).toString(10)};let I=Ye({data:a.data?a.data.trim():"",isGuarded:t});return{gasLimit:String(k)===L?I:String(k)}}),Rp=Mn;var Xp=b=>S(void 0,[b],function*({computedTokenId:o,receiver:e,isInternal:t,balance:r,address:a,isGuarded:p,nonce:s,amount:i,data:d,gasLimit:u,gasPrice:_,delegationContractData:f,chainId:y}){var V;let v=Fe(p),T=f==null?void 0:f.delegationContract,k=(V=f==null?void 0:f.delegationContractData.minGasLimit)!=null?V:L;if(!new Bo.default(u).isNaN()&&new Bo.default(u).isGreaterThan(L))return{initGasLimit:u};if((0,Zp.isContract)(e)&&!t){let{gasLimit:U,gasLimitCostError:M}=yield Rp({balance:r,address:a,nonce:s,values:{amount:i,receiver:e,data:d,gasLimit:u,gasPrice:_},chainId:y});return{initGasLimit:e===T?new Bo.default(U).plus(k).plus(v).toString():U,initGasLimitError:M}}if(d.length>0)return{initGasLimit:Ye({data:d.trim(),isGuarded:p})};let{isDcdt:A,isNft:I}=(0,Kp.getIdentifierType)(o);return A?{initGasLimit:new Bo.default(co).plus(v).toString()}:I?{initGasLimit:new Bo.default(Je()).plus(v).toString()}:{initGasLimit:new Bo.default(Hp.GAS_LIMIT).plus(v).toString()}});n();var rt=require("@terradharitri/sdk-dapp/constants/index"),Qp=g(require("bignumber.js"));var jp,Jp,Yp,Ge=(0,we.formatAmount)({input:String((jp=rt.GAS_PRICE)!=null?jp:1e9),decimals:(Jp=rt.DECIMALS)!=null?Jp:18,showLastNonZeroDecimal:!0,digits:(Yp=rt.DIGITS)!=null?Yp:4}),Nt=new Qp.default(Ge).times(10).toString(10);n();var ho=require("@terradharitri/sdk-dapp/constants/index"),Ft=g(require("bignumber.js"));function es({balance:o=L,gasLimit:e=L,gasPrice:t,decimals:r,digits:a,data:p="",chainId:s}){let i=new Ft.default(o),d=new Ft.default(Jo),u=new Ft.default((0,Gn.calculateFeeLimit)({gasPrice:t,gasLimit:e,data:p,chainId:s,gasPerDataByte:String(ho.GAS_PER_DATA_BYTE),gasPriceModifier:String(ho.GAS_PRICE_MODIFIER)})),_=i.minus(u),f=_.minus(d),y=_.isGreaterThanOrEqualTo(0)?(0,we.formatAmount)({input:_.toString(10),decimals:r,digits:a,showLastNonZeroDecimal:!0,addCommas:!1}):L,b=f.isGreaterThanOrEqualTo(0)?(0,we.formatAmount)({input:f.toString(10),decimals:r,digits:a,showLastNonZeroDecimal:!0,addCommas:!1}):y;return{entireBalance:y,entireBalanceMinusDust:b,parsedEntireBalance:_.isGreaterThan(0)?_.toString(10):L}}function On({balance:o=L,decimals:e=ho.DECIMALS,digits:t=ho.DIGITS}){let r=new Ft.default(o);if(r.isGreaterThanOrEqualTo(0)){let a=r.toString(10);return(0,we.formatAmount)({input:a,decimals:e,digits:t>e?e:t,showLastNonZeroDecimal:!0,addCommas:!1})}return L}n();var os=g(require("bignumber.js"));function br({txType:o,data:e="",isGuarded:t}){let r=Fe(t),a=Je();return o==="DCDT"&&(a=co),o==="REWA"&&(a=Ye({data:e.trim()})),new os.default(a).plus(r).toString(10)}var xo=({amount:o,balance:e,gasPrice:t,gasLimit:r,data:a,chainId:p})=>{let s=(0,j.parseAmount)(o.toString()),i=new vr.default(s),d=new vr.default(e),u=new vr.default((0,ts.calculateFeeLimit)({gasPrice:vo(t),gasLimit:r,data:a,chainId:p,gasPerDataByte:String(hr.GAS_PER_DATA_BYTE),gasPriceModifier:String(hr.GAS_PRICE_MODIFIER)}));return d.isGreaterThanOrEqualTo(i.plus(u))};n();n();var it=require("yup");n();var xr=require("@terradharitri/sdk-dapp/constants/ledger.constants"),rs=g(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Tr=require("yup"),Ou=(0,Tr.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:t}=this.parent;return!(t&&e&&e.length&&!t.ledgerDataActive)}),qu=(0,Tr.string)().test({name:"hashSign",test:function(e){let{ledger:t,isGuarded:r}=this.parent;if(t){let{ledgerWithHashSign:a,ledgerWithGuardians:p}=(0,rs.default)(t.version);if(e&&e.length>300&&!a)return this.createError({message:`Data too long. You need at least DharitrI app version ${xr.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(r&&!p)return this.createError({message:`You need at least DharitrI app version ${xr.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Wu=[Ou,qu],zu=Wu.reduce((o,e)=>o.concat(e),(0,Tr.string)()),ns=zu;n();var as=require("@terradharitri/sdk-dapp/constants/index"),ps=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),qn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),nt=require("yup");var $u=o=>{let e=(0,nt.string)().required(o.required),t=(0,nt.string)().test("decimalFormat",o.maxDecimalsAllowed(as.DECIMALS),s=>(0,ps.maxDecimals)(String(s))),r=(0,nt.string)().test("funds",o.insufficientFunds,function(s){if(s&&(0,qn.stringIsFloat)(s)){let{gasLimit:i,data:d,gasPrice:u,balance:_,chainId:f}=this.parent;return xo({amount:s,balance:_,gasLimit:i,gasPrice:u,data:d,chainId:f})}return!0}),a=(0,nt.string)().test("isValidNumber",o.invalidNumber,s=>Boolean(s&&(0,qn.stringIsFloat)(s)));return[e,a,t,r].reduce((s,i)=>s.concat(i),(0,nt.string)())},ss=$u;n();var cs=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),zn=g(require("bignumber.js")),Pt=require("yup");n();var is=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Wn=g(require("bignumber.js")),kr=require("yup");var at=o=>{let e=(0,kr.string)().required(o.required),t=(0,kr.string)().test("isValidInteger",o.invalidNumber,a=>{let p=a&&(0,is.stringIsInteger)(a);return Boolean(p)}),r=(0,kr.string)().test("maximum",o.tooHighGasLimit(An),a=>{let p=new Wn.default(String(a)),s=new Wn.default(An),i=a&&s.comparedTo(p)>=0;return Boolean(i)});return[e,t,r]};var Ru=o=>{let e=(0,Pt.string)().required(o.required),t=(0,Pt.string)().test("funds",o.insufficientFunds,function(s){let{data:i,gasPrice:d,amount:u,balance:_,chainId:f,ignoreTokenBalance:y}=this.parent;return y?!0:u&&(0,cs.stringIsFloat)(u)&&s!=null?xo({amount:u,balance:_,gasLimit:s,gasPrice:d,data:i,chainId:f}):!0}),r=(0,Pt.string)().test({name:"minValueData",test:function(p){let s=this.parent,{data:i,ignoreTokenBalance:d,isGuarded:u}=s;if(d)return!0;let _=Ye({data:i?i.trim():"",isGuarded:u});if(p){let f=new zn.default(p),y=new zn.default(_);if(!(p&&f.isGreaterThanOrEqualTo(y)))return this.createError({message:o.tooLowGasLimit(_),path:"gasLimit"})}return!0}});return[e,...at(o),t,r].reduce((p,s)=>p.concat(s),(0,Pt.string)())},ls=Ru;n();var ms=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ds=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Sr=g(require("bignumber.js")),Vo=require("yup");var Hu=o=>{let e=(0,Vo.string)().required(o.required),t=(0,Vo.string)().test({name:"decimalFormat",test:function(i){let{tokenId:d,tokens:u}=this.parent;if(u){let{decimals:_}=tt({tokens:u,tokenId:d});return(0,ms.maxDecimals)(String(i),_)?!0:this.createError({message:o.maxDecimalsAllowed(_),path:"amount"})}return!0}}),r=(0,Vo.string)().test("tokenBalance",o.insufficientFunds,function(d){let{ignoreTokenBalance:u,tokens:_}=this.parent;if(d!==void 0&&!u&&_){let{decimals:f,balance:y}=tt({tokens:_,tokenId:this.parent.tokenId}),b=(0,j.parseAmount)(d.toString(),f),v=new Sr.default(b);return new Sr.default(y).comparedTo(v)>=0}return!0}),a=(0,Vo.string)().test("greaterThanZero",o.cannotBeZero,function(d){let{tokens:u,ignoreTokenBalance:_}=this.parent;if(!_&&d!=null&&u){let{decimals:f}=tt({tokens:u,tokenId:this.parent.tokenId}),y=(0,j.parseAmount)(d.toString(),f);return new Sr.default(y).isGreaterThan(0)}return!0}),p=(0,Vo.string)().test("isValidNumber",o.invalidNumber,i=>Boolean(i&&(0,ds.stringIsFloat)(i)));return[e,t,r,a,p].reduce((i,d)=>i.concat(d),(0,Vo.string)())},us=Hu;n();var $n=g(require("bignumber.js")),Lt=require("yup");var Zu=o=>{let e=(0,Lt.string)().required(o.required),t=(0,Lt.string)().test("minValue",o.tooLowGasLimit(co),function(s){let i=this.parent,{ignoreTokenBalance:d,isGuarded:u}=i;if(d)return!0;let _=new $n.default(s),f=new $n.default(co).plus(Fe(u));return s&&_.isGreaterThanOrEqualTo(f)}),r=(0,Lt.string)().test("funds",o.insufficientFunds,function(s){let{data:i,gasPrice:d,ignoreTokenBalance:u,balance:_,chainId:f}=this.parent;return s&&!u?xo({amount:L,balance:_,gasLimit:s,gasPrice:d,data:i,chainId:f}):!0});return[e,...at(o),r,t].reduce((p,s)=>p.concat(s),(0,Lt.string)())},_s=Zu;n();var fs=require("@terradharitri/sdk-dapp/constants/index"),gs=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ys=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Dt=g(require("bignumber.js")),Uo=require("yup");var Ku=o=>{let e=(0,Uo.string)().required(o.required),t=(0,Uo.string)().test("decimalFormat",o.maxDecimalsAllowed(fs.DECIMALS),i=>(0,gs.maxDecimals)(String(i))),r=(0,Uo.string)().test("minimum",o.tooLowGasPrice(Ge),i=>{let d=new Dt.default(String(i)),u=new Dt.default(Ge),_=i&&d.isGreaterThanOrEqualTo(u);return Boolean(_)}),a=(0,Uo.string)().test("maximum",o.tooHighGasPrice(Nt),i=>{let d=new Dt.default(String(i)),u=new Dt.default(Nt),_=i&&d.isLessThanOrEqualTo(u);return Boolean(_)}),p=(0,Uo.string)().test("isValidNumber",o.invalidNumber,i=>Boolean(i&&(0,ys.stringIsFloat)(i)));return[e,t,r,a,p].reduce((i,d)=>i.concat(d),(0,Uo.string)())},bs=Ku;n();var vs=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),hs=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),xs=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),pt=g(require("bignumber.js")),Mo=require("yup");var Xu=o=>{let e=(0,Mo.string)().required(o.required),t=(0,Mo.string)().test({name:"formatDecimals",test:function(d){let{nft:u,txType:_}=this.parent;return _!=="MetaDCDT"||(0,vs.maxDecimals)(String(d),u==null?void 0:u.decimals)?!0:this.createError({message:o.maxDecimalsAllowed(u==null?void 0:u.decimals),path:"amount"})}}),r=(0,Mo.string)().test("balance",o.insufficientFunds,function(d){let{txType:u,nft:_}=this.parent;if(!d)return!0;if(u==="MetaDCDT"){let f=(0,j.parseAmount)(d,_==null?void 0:_.decimals),y=new pt.default(f);return new pt.default((_==null?void 0:_.balance)||L).isGreaterThanOrEqualTo(y)}if(u==="SemiFungibleDCDT"){let f=new pt.default(d);return new pt.default((_==null?void 0:_.balance)||L).isGreaterThanOrEqualTo(f)}return!0}),a=(0,Mo.string)().test("nonZero",o.cannotBeZero,function(d){let u=this.parent,{ignoreTokenBalance:_}=u;return!d||_?!0:!new pt.default(d).isZero()}),p=(0,Mo.string)().test("isValidNumber",o.invalidNumber,function(d){let{nft:u}=this.parent;return(u==null?void 0:u.type)===Z.NftEnumType.MetaDCDT?Boolean(d&&(0,hs.stringIsFloat)(d)):Boolean(d&&(0,xs.stringIsInteger)(d))});return[e,p,r,t,a].reduce((i,d)=>i.concat(d),(0,Mo.string)())},Ts=Xu;n();var Rn=g(require("bignumber.js")),Gt=require("yup");var ju=o=>{let e=(0,Gt.string)().required(o.required),t=(0,Gt.string)().test({name:"minValueData",test:function(p){let s=this.parent,{data:i,ignoreTokenBalance:d,isGuarded:u}=s;if(d)return!0;let _=Je(i?i.trim():"");if(p){let f=new Rn.default(p),y=new Rn.default(_).plus(Fe(u));if(!(p&&f.isGreaterThanOrEqualTo(y)))return this.createError({message:o.tooLowGasLimit(y.toString()),path:"gasLimit"})}return!0}}),r=(0,Gt.string)().test("funds",o.insufficientFunds,function(s){let{data:i,gasPrice:d,balance:u,chainId:_,ignoreTokenBalance:f}=this.parent;return s&&!f?xo({amount:L,balance:u,gasLimit:s,gasPrice:d,data:i,chainId:_}):!0});return[e,...at(o),r,t].reduce((p,s)=>p.concat(s),(0,Gt.string)())},ks=ju;n();var Ss=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),st=require("yup");var Ju=o=>{let e=(0,st.string)().required(o.required),t=(0,st.string)().test("addressIsValid",o.invalidAddress,s=>Boolean(s&&(0,Ss.addressIsValid)(s))),r=(0,st.string)().test("sameAddress",o.sameAsOwnerAddress,function(i){let{ignoreTokenBalance:d,txType:u,readonly:_,address:f,isBurn:y}=this.parent;return cr(u)&&!d&&!_&&!y?f!==i:!0}),a=(0,st.string)().test("canTransfer",o.receiverNotAllowed,function(i){let{nft:d,txType:u,ignoreTokenBalance:_,address:f}=this.parent,y="MetaDCDT"===u,b=_,v=d==null?void 0:d.allowedReceivers;return!i||!y||b||v==null||v.includes(f)?!0:v.includes(i)});return[e,t,r,a].reduce((s,i)=>s.concat(i),(0,st.string)())},ws=Ju;n();var Cs=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Hn=require("yup"),Yu=o=>[(0,Hn.string)().test("invalidHerotag",o.invalidHerotag,function(a){let{receiver:p}=this.parent;if((p==null?void 0:p.startsWith("drt1"))||!a&&!p)return!0;let d=a&&(0,Cs.addressIsValid)(p);return Boolean(d)})].reduce((r,a)=>r.concat(a),(0,Hn.string)()),Es=Yu;var wr=o=>(0,it.object)().shape({receiver:ws(o),receiverUsername:Es(o),tokenId:(0,it.string)().required(o.required),gasPrice:bs(o),data:ns,amount:(0,it.string)().when(["txType"],function(t){switch(t){case"DCDT":return us(o);case"REWA":return ss(o);default:return Ts(o)}}),gasLimit:(0,it.string)().when(["txType"],function(t){switch(t){case"DCDT":return _s(o);case"REWA":return ls(o);default:return ks(o)}})});var Is=({prefilledForm:o,initialValues:e,errorMessages:t})=>{if(!o||!e)return{};try{return wr(t).validateSync(e),{}}catch(r){let{path:a,message:p}=r;return{[String(a)]:p}}};n();var As=({shouldValidateForm:o,errors:e,touched:t})=>r=>Boolean(e[r]&&(t[r]||o));n();var Ps=(0,Ce.createContext)({});function Ls({children:o,value:e}){let{skipToConfirm:t}=e,[r,a]=(0,Ce.useState)(Boolean(t)),[p,s]=(0,Ce.useState)(!1),[i,d]=(0,Ce.useState)(Date.now()),{values:u,errors:_,touched:f,validateForm:y,setFieldTouched:b,setErrors:v,isValid:T,handleSubmit:k}=(0,Fs.useFormikContext)(),C=(0,Ce.useCallback)(e.onCloseForm,[]),{isDcdt:A,isNft:I,isRewa:V}=(0,Ns.getIdentifierType)(u.tokenId),U=(0,Ce.useCallback)(As({shouldValidateForm:r,errors:_,touched:f}),[r,_,f]),M=(0,Ce.useCallback)(()=>S(this,null,function*(){a(!0),Object.values(ie).forEach(O=>{b(O,!0)});let B=yield y();if(Object.keys(B).length===0){e.setIsFormSubmitted(!0);return}_.gasLimit||B.gasPrice?(v(B),d(Date.now())):b("gasLimit",!1)}),[_,y]),W=(0,Ce.useCallback)(()=>{p?s(!1):e.setIsFormSubmitted(!1)},[p]),N=w(x({},e),{checkInvalid:U,isRewaTransaction:V,isDcdtTransaction:A,isNftTransaction:I,shouldValidateForm:r,areValidatedValuesReady:Boolean(e.isFormSubmitted||t)&&T,isGuardianScreenVisible:p,setIsGuardianScreenVisible:s,isFormValid:T,renderKey:i,txType:u.txType,onValidateForm:M,onInvalidateForm:W,onCloseForm:C,onSubmitForm:k});return Ce.default.createElement(Ps.Provider,{value:N},o)}function ae(){return(0,Ce.useContext)(Ps)}n();n();var le=g(require("react")),Us=require("formik"),Ms=g(require("lodash/uniqBy"));n();n();var Qe=g(require("react"));var Ds=(0,Qe.createContext)({});function Gs({children:o,value:{networkConfig:e}}){let[t,r]=(0,Qe.useState)(null);(0,Qe.useEffect)(()=>{a()},[e]);function a(){let p=pr(e.id);r(p)}return Qe.default.createElement(Ds.Provider,{value:{networkConfig:e,delegationContractData:t}},o)}function ke(){return(0,Qe.useContext)(Ds)}n();n();var Er=require("react"),Bs=require("@terradharitri/sdk-dapp/constants/index");var Cr=require("@terradharitri/sdk-dapp/types/enums.types");function Ir(){let{networkConfig:o}=ke(),[e,t]=(0,Er.useState)(0);function r(){return S(this,null,function*(){let a=yield yp(),p=(a==null?void 0:a.price)||0;t(p)})}return(0,Er.useEffect)(()=>{![Cr.EnvironmentsEnum.mainnet,Cr.EnvironmentsEnum.testnet,Cr.EnvironmentsEnum.devnet].includes(o==null?void 0:o.id)||r()},[o==null?void 0:o.id]),{rewaLabel:o.rewaLabel,rewaPriceInUsd:e,digits:Bs.DIGITS}}n();var Ar={},Nr=o=>S(void 0,null,function*(){if(!o)return null;if(o.collection in Ar)return Ar[o.collection];let e=yield kp(o);return Ar[o.collection]=e,Ar[o.collection]});var Os=(0,le.createContext)({}),Vs="tokenId",Zn="nft",Qu="tokens",e_="txType",Kn=[];function qs({children:o,value:e}){let[t,r]=(0,le.useState)(!0),{values:{tokenId:a,tokens:p,nft:s},errors:{tokenId:i},setFieldValue:d}=(0,Us.useFormikContext)(),{address:u,balance:_}=Ne(),{checkInvalid:f}=ae(),{networkConfig:{decimals:y}}=ke(),b=(0,le.useRef)(!1),{rewaPriceInUsd:v,digits:T,rewaLabel:k}=Ir(),C=p||Kn,A=(0,le.useCallback)((N=!0)=>S(this,null,function*(){if(r(N),b.current)return;b.current=!0;let B=yield hp(u),P=p!=null?p:[],O=(0,Ms.default)([...P,...B],K=>K.identifier);d(Qu,O),Kn=O,b.current=!1,r(!1)}),[u]),I=(0,le.useCallback)(N=>{d(Vs,N,!1)},[]);(0,le.useEffect)(()=>(A(!1),()=>{Kn=[]}),[]);let V=()=>S(this,null,function*(){let N=At({nft:s,tokenId:a});if(d(e_,N),N==="SemiFungibleDCDT"||N==="NonFungibleDCDT")return;let B=(M==null?void 0:M.find(P=>P.identifier===a))||s;if(N==="MetaDCDT"&&B){let P=B;d(Zn,P);let O=yield Nr(P);P=w(x({},P),{allowedReceivers:O}),d(Zn,P)}else d(Zn,void 0)}),U=f(Vs),M=[{name:"DharitrI eGold",identifier:k,balance:_,decimals:Number(y),ticker:k,usdPrice:v},...C];(0,le.useEffect)(()=>{V()},[a]);let W=(0,le.useMemo)(()=>It({tokens:M||[],tokenId:a}),[a,p]);return le.default.createElement(Os.Provider,{value:{nft:s||(e==null?void 0:e.initialNft),tokens:C,allAvailableTokens:M,areTokensLoading:t&&C.length===0,tokenIdError:i,tokenId:a,tokenDetails:W,rewaLabel:k,RewaIcon:e==null?void 0:e.RewaIcon,rewaPriceInUsd:v,digits:T,isTokenIdInvalid:U,getTokens:A,onChangeTokenId:I}},o)}function To(){return(0,le.useContext)(Os)}n();n();var mt=require("@terradharitri/sdk-dapp/constants/index"),ni=require("formik");n();n();var me=g(require("react")),Lr=require("@terradharitri/sdk-dapp/constants/index"),Ys=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Qs=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Yn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ei=g(require("bignumber.js")),oi=require("formik");n();n();n();n();var Xn=g(require("bignumber.js"));function Ws({amount:o="",available:e,readonly:t=!1,entireBalanceMinusDust:r}){let a=new Xn.default(o),s=new Xn.default(r).isGreaterThan(a),i=!o,d=Te("amount",t);return(i||s)&&e!==L&&!d}function zs({nft:o,amount:e,readonly:t,maxAmountAvailable:r,maxAmountMinusDust:a,txType:p}){switch(p){case"REWA":return Ws({amount:e,entireBalanceMinusDust:a,readonly:t,available:r});case"DCDT":return e!==r&&!t&&r!==L;default:return o!=null&&e!==(o==null?void 0:o.balance)&&!t}}n();var jn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Bt=g(require("bignumber.js"));var Vt=(o,e)=>{let t=(0,jn.stringIsFloat)(String(o))?o:L,r=(0,jn.stringIsFloat)(String(e))?new Bt.default(e):new Bt.default(L),a=(0,Bt.default)(100).dividedBy(r.dividedBy(t)).toNumber();return Bt.default.minimum(a,100).toNumber()};n();function Fr({values:o,errors:e,touched:t}){let r=Boolean(e["amount"]&&t["amount"]);return o.txType==="REWA"?o.amount!=L?r:!1:r}n();var Ut=require("react"),$s=require("@terradharitri/sdk-dapp/constants/index"),Rs=require("@terradharitri/sdk-dapp/utils/smartContracts"),Hs=g(require("bignumber.js")),Zs=require("formik");n();var Pr=require("react");function o_(o,e){let[t,r]=(0,Pr.useState)(o);return(0,Pr.useEffect)(()=>{let p=setTimeout(()=>r(o),e);return()=>clearTimeout(p)},[o]),t}var ct=o_;var Jn=500;function t_(o){let{networkConfig:{chainId:e}}=ke(),{prefilledForm:t}=ae(),r=(0,Zs.useFormikContext)(),{balance:a,address:p,nonce:s}=Ne(),{values:i,initialValues:d,touched:u,errors:{gasLimit:_,amount:f},setFieldValue:y}=r,{data:b,amount:v,gasLimit:T}=i,k=ct(b,Jn),C=ct(v,Jn),A=ct(T,Jn),[I,V]=(0,Ut.useState)(!1),[U,M]=(0,Ut.useState)(o),W=()=>S(this,null,function*(){let N=_||f,B=k.length>0,P=new Hs.default(C).isGreaterThanOrEqualTo(0),O=Go({initialValues:d,gasLimit:T,touched:u}),K=e!==$s.MAINNET_CHAIN_ID||!1;if(!t&&(0,Rs.isContract)(i.receiver)&&K&&!O&&!N&&B&&P){V(!0);try{let{gasLimit:G,gasLimitCostError:q}=yield Mn({balance:a,address:p,nonce:s,values:i,chainId:e});V(!1),M(q),y("gasLimit",G,!0)}catch(G){V(!1),console.error(G)}}});return(0,Ut.useEffect)(()=>{W()},[k,C,A,i.receiver,t]),{gasCostLoading:I,gasCostError:U}}var Ks=t_;n();n();var Xs=require("@terradharitri/sdk-dapp/constants/index"),js=g(require("bignumber.js"));var Js=({isNftTransaction:o,isDcdtTransaction:e,data:t,isGuarded:r})=>{let a=Fe(r),p=Xs.GAS_LIMIT.toString();return o&&(p=Je(t)),e&&(p=co),new js.default(p).plus(a).toString(10)};var ti=(0,me.createContext)({});function ri({children:o,initGasLimitError:e}){let t=(0,oi.useFormikContext)(),{values:r,touched:a,errors:{gasPrice:p,gasLimit:s},setFieldValue:i,setFieldTouched:d,initialValues:u}=t,{gasPrice:_,gasLimit:f,data:y,tokenId:b,txType:v,isGuarded:T,receiver:k,amount:C}=r,A=Fe(T),{checkInvalid:I,isNftTransaction:V,isDcdtTransaction:U,prefilledForm:M,isRewaTransaction:W}=ae(),{networkConfig:{chainId:N}}=ke(),{gasCostLoading:B,gasCostError:P}=Ks(e),O=Js({isNftTransaction:V,isDcdtTransaction:U,data:y,isGuarded:T}),H=!Fr({values:r,errors:t.errors,touched:a})&&I("gasLimit"),G=I("gasPrice"),q=(0,me.useCallback)((ee,fe=!1)=>{var Ro;let kt=typeof ee=="string"?ee:(Ro=ee==null?void 0:ee.target)==null?void 0:Ro.value;i("gasPrice",kt,fe)},[]),R=(0,me.useCallback)((ee,fe=!1)=>{var Ro;let kt=typeof ee=="string"?ee:(Ro=ee==null?void 0:ee.target)==null?void 0:Ro.value;i("gasLimit",kt,fe)},[]),se=(0,me.useCallback)(()=>{i("gasPrice",Ge)},[]),xe=(0,me.useCallback)(()=>{i("gasLimit",O)},[V]),ue=(0,me.useCallback)(()=>{d("gasPrice",!0)},[]),_e=(0,me.useCallback)(()=>{d("gasLimit",!0)},[]),$=Boolean(p)||Boolean(s),Pe=(0,me.useMemo)(()=>{let ee=!(0,Yn.stringIsInteger)(f),fe=!(0,Qs.stringIsFloat)(_);if(ee||fe)return L;let kt=Go({initialValues:u,gasLimit:f,touched:a}),zd=!M&&!kt&&W?y.trim():"",Pa=(0,Ys.calculateFeeLimit)({gasLimit:f,gasPrice:(0,j.parseAmount)(_),data:zd,chainId:N,gasPerDataByte:String(Lr.GAS_PER_DATA_BYTE),gasPriceModifier:String(Lr.GAS_PRICE_MODIFIER)});return(0,Yn.stringIsInteger)(Pa)?Pa:L},[$,_,f,N,M,W,a.gasLimit,y,k,C]);(0,me.useEffect)(()=>{let ee=Go({initialValues:u,gasLimit:f,touched:a});!M&&V&&!ee&&R(new ei.default(Je()).plus(A).toString())},[V,a]),(0,me.useEffect)(()=>{M||R(br({txType:v,data:y,isGuarded:T}),!0)},[b,v]);let ao={gasPrice:_,gasLimit:f,gasCostLoading:B,feeLimit:Pe,defaultGasLimit:O,gasPriceError:p,gasLimitError:s,gasCostError:P,hasErrors:$,isGasLimitInvalid:H,isGasPriceInvalid:G,onChangeGasLimit:R,onChangeGasPrice:q,onBlurGasPrice:ue,onBlurGasLimit:_e,onResetGasPrice:se,onResetGasLimit:xe};return me.default.createElement(ti.Provider,{value:ao},o)}function lt(){return(0,me.useContext)(ti)}function ai(){let{values:o}=(0,ni.useFormikContext)(),{balance:e}=Ne(),{networkConfig:{chainId:t}}=ke(),{nft:r,tokens:a}=To(),{isDcdtTransaction:p,isNftTransaction:s,isRewaTransaction:i}=ae(),{gasLimit:d,gasPrice:u}=lt(),{tokenId:_}=o,f=null;s&&r&&(f=On({balance:r.balance,decimals:r.type===Z.NftEnumType.MetaDCDT?r.decimals:0,digits:mt.DIGITS}));let y=null;if(p){let{decimals:A,balance:I}=It({tokens:a,tokenId:_});y=On({balance:I,decimals:A,digits:mt.DIGITS})}let b=L,v=e;if(e&&i){let{entireBalance:A,entireBalanceMinusDust:I}=es({balance:e,gasPrice:vo(u),gasLimit:d,decimals:mt.DECIMALS,digits:mt.DIGITS,chainId:t});b=A,v=I}let k=i?b:r&&f?f:y;return{maxAmountAvailable:k||L,maxAmountMinusDust:(i?v:k)||L}}var ci=(0,ye.createContext)({});function li({children:o}){let{values:e,errors:t,touched:r,handleBlur:a,setFieldValue:p,setFieldError:s,setFieldTouched:i}=(0,ii.useFormikContext)(),{readonly:d,uiOptions:u}=ae(),{maxAmountAvailable:_,maxAmountMinusDust:f}=ai(),[y,b]=(0,ye.useState)(Vt(e.amount,f)),[v,T]=(0,ye.useState)(!1),{nft:k}=To(),C=u!=null&&u.showAmountSlider?!1:zs({nft:k,amount:e.amount,readonly:d,maxAmountAvailable:_,maxAmountMinusDust:f,txType:e.txType});function A(){T(!1)}let I=(0,ye.useCallback)((P,O=!0)=>{if(new Dr.default(f).isZero()||!(0,si.stringIsFloat)(P.toString())){b(0);return}let H=new Dr.default(f).times(P).dividedBy(100),G=(0,we.formatAmount)({input:(0,j.parseAmount)(String(H)),digits:pi.DIGITS,showLastNonZeroDecimal:P>=100});if(O&&p("amount",G),P<0){b(0);return}if(P>100){b(100);return}b(P)},[f,p]),V=(0,ye.useCallback)((P,O=!0)=>{var H;let K=typeof P=="string"?P:(H=P==null?void 0:P.target)==null?void 0:H.value;return i("amount",!0),I(Vt(K,f),!1),p("amount",K,O)},[p,I,f]),U=(0,ye.useCallback)(P=>s("amount",P),[s]),M=(0,ye.useCallback)(()=>{i("amount",!0)},[a]),W=(0,ye.useCallback)(()=>(T(!0),V(f||e.amount)),[f]);(0,ye.useEffect)(()=>{(0,Dr.default)(f).isGreaterThan(0)&&I(Vt(e.amount,f),!1)},[Vt,f]);let N=Fr({values:e,errors:t,touched:r}),B={amount:e.amount,error:t.amount,isInvalid:N,maxAmountAvailable:_,maxAmountMinusDust:f,isMaxButtonVisible:C,isMaxClicked:v,amountRange:y,onFocus:A,onBlur:M,onChange:V,onMaxClicked:W,onSetError:U,onSetAmountPercentage:I};return ye.default.createElement(ci.Provider,{value:B},o)}function mi(){return(0,ye.useContext)(ci)}n();n();var Be=g(require("react")),di=require("formik");var ui=(0,Be.createContext)({});function _i({children:o}){let{values:e,errors:t,touched:r,setFieldValue:a,handleBlur:p,setFieldTouched:s,initialValues:i}=(0,di.useFormikContext)(),{checkInvalid:d,prefilledForm:u,isRewaTransaction:_}=ae(),{nft:f}=To(),{receiver:y,txType:b,amount:v,tokenId:T,isAdvancedModeEnabled:k,gasLimit:C}=e,{onChangeGasLimit:A}=lt(),{isGuarded:I}=Ne(),V=d("data"),U=(B,P=!1)=>{var H;let O=typeof B=="string"?B:(H=B==null?void 0:B.target)==null?void 0:H.value,K=Go({initialValues:i,gasLimit:C,touched:r});if(a("data",O,P),!u&&!K&&_){let G=Ye({data:O,isGuarded:I});A(G)}},M=(0,Be.useCallback)(()=>{s("data",!0)},[p]),W=(0,Be.useCallback)(()=>{U("")},[]);(0,Be.useEffect)(()=>{if(!u){let B=b!=="DCDT"?t.receiver:"",P=zp({txType:b,values:e,nft:f,amountError:Boolean(t.amount),receiverError:B});U(P)}},[v,y,u,f,t.receiver,t.amount,b]),(0,Be.useEffect)(()=>{!u&&_&&U("")},[T,_]);let N={data:e.data,dataError:t.data,isDataInvalid:V,onChange:U,onBlur:M,onReset:W,isAdvancedModeEnabled:k};return Be.default.createElement(ui.Provider,{value:N},o)}function fi(){return(0,Be.useContext)(ui)}n();n();var Re=g(require("react")),Si=require("formik");n();n();n();var Gr=require("react"),yi=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),bi=g(require("lodash/uniqBy"));n();n();var Qn=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),ea=require("@terradharitri/sdk-dapp/utils"),gi=o=>o.reduce((e,t)=>{var f,y;let r=(f=t.receiverAssets)==null?void 0:f.name,a=(y=t.senderAssets)==null?void 0:y.name,p=(0,Qn.trimUsernameDomain)(r),s=(0,Qn.trimUsernameDomain)(a),i=(0,ea.isContract)(t.receiver),d=(0,ea.isContract)(t.sender),u={address:t.receiver,username:i?void 0:p,rawUsername:i?void 0:r},_={address:t.sender,username:d?void 0:s,rawUsername:d?void 0:a};return t?[...e,u,_]:e},[]);function vi(){let{address:o}=Ne(),[e,t]=(0,Gr.useState)(null);function r(){return S(this,null,function*(){try{let a=yield ne(),{data:p}=yield(0,yi.getTransactions)({sender:o,receiver:o,transactionSize:50,apiAddress:a.baseURL,apiTimeout:a.timeout,withUsername:!0}),s=gi(p),i=(0,bi.default)(s,d=>d.address);t(i)}catch(a){console.error("Unable to fetch transactions",a),t([])}})}return(0,Gr.useEffect)(()=>{r()},[]),e}n();var Ti=require("react");n();var oa=require("react"),hi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");function xi(o){let[e,t]=(0,oa.useState)({}),[r,a]=(0,oa.useState)(!1);return{verifiedAddresses:e,verifyScamAddress:d=>S(this,[d],function*({address:s,addressToVerify:i=""}){let u=s!==i,_=!(i in e);if(u&&(0,hi.addressIsValid)(i)&&_&&!r){a(!0);try{let f=yield fp(i,o);t(y=>x(x({},y),f.scamInfo?{[i]:f.scamInfo}:{}))}catch(f){console.error("Unable to find address",f)}a(!1)}}),fetchingScamAddress:r}}function ki(o){var s;let{address:e}=Ne(),{verifiedAddresses:t,verifyScamAddress:r,fetchingScamAddress:a}=xi(),p=(s=t[o])==null?void 0:s.info;return(0,Ti.useEffect)(()=>{o&&r({address:e,addressToVerify:o})},[o]),{scamError:p,fetchingScamAddress:a}}var wi=(0,Re.createContext)({}),ta="receiver";function Ci({children:o}){let{values:{receiver:e},errors:{receiver:t},setFieldValue:r,setFieldTouched:a}=(0,Si.useFormikContext)(),{checkInvalid:p}=ae(),[s,i]=(0,Re.useState)(e),{scamError:d,fetchingScamAddress:u}=ki(e),_=vi(),f=(0,Re.useCallback)((v,T=!1)=>{r(ta,v,T)},[]),y=(0,Re.useCallback)(()=>{a(ta,!0)},[]),b={receiver:e,receiverError:t,receiverInputValue:s,setReceiverInputValue:v=>i(v),isReceiverInvalid:p(ta),scamError:d,fetchingScamAddress:u,knownAddresses:_,onChangeReceiver:f,onBlurReceiver:y};return Re.default.createElement(wi.Provider,{value:b},o)}function dt(){return(0,Re.useContext)(wi)}n();n();var ut=g(require("react")),Bi=require("formik");n();n();var Br=({knownAddresses:o,inputValue:e,key:t})=>!o||!e?!1:o.some(a=>{var p;return Boolean((p=a[t])==null?void 0:p.startsWith(e))});n();n();n();var Li=require("react"),Di=require("@terradharitri/sdk-dapp/utils");n();var na=require("react"),aa=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var Ei=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ii=g(require("axios"));function Ai(o,e){return S(this,null,function*(){var t;try{let r=e||(yield ne()),{request:a,data:p}=yield Ii.default.get(`usernames/${o}`,r);if(!(a!=null&&a.responseURL))return null;let[,s]=(t=a.responseURL.split("/accounts/"))!=null?t:[],i=s!=null?s:p.address;return(0,Ei.addressIsValid)(i)?p:null}catch(r){return null}})}n();var Ni=g(require("axios"));function Fi(o,e){return S(this,null,function*(){try{let{data:t}=yield Ni.default.get(`${e}/accounts/${o}`);if(t!=null)return t}catch(t){console.error("error fetching numbat account")}return null})}var ra={};function Pi(o){let[e,t]=(0,na.useState)(!1),[r,a]=(0,na.useState)(ra);return{usernameAccounts:r,fetchUsernameAccount:i=>S(this,null,function*(){if(!(i in r||e)){t(!0);try{let u=yield Ai(i,o),_=u==null?void 0:u.username;a(f=>{var b;let y=w(x({},f),{[i]:{address:(b=u==null?void 0:u.address)!=null?b:"",username:_?String((0,aa.trimUsernameDomain)(_)):"",rawUsername:_!=null?_:""}});return ra=y,y})}catch(u){a(_=>w(x({},_),{[i]:null}))}t(!1)}}),fetchUsernameByAddress:i=>S(this,null,function*(){if(!(Object.values(r).find(u=>u&&u.address===i)||e)){t(!0);try{let u=o||(yield ne()),_=yield Fi(i,u.baseURL),f=_==null?void 0:_.address,y=_==null?void 0:_.username,b=(0,aa.trimUsernameDomain)(y);if(!f||!b)return;a(v=>{let T=w(x({},v),{[b]:{address:f,username:String(b),rawUsername:y!=null?y:""}});return ra=T,T})}catch(u){console.error(u)}t(!1)}}),fetchingUsernameAccount:e}}var Gi=({shouldSkipSearch:o=!1,searchPatternToLookFor:e})=>{let{fetchUsernameAccount:t,fetchUsernameByAddress:r,fetchingUsernameAccount:a,usernameAccounts:p}=Pi(),s=(0,Di.addressIsValid)(e);return(0,Li.useEffect)(()=>{if(!(!e||o)){if(s){r(e);return}t(e)}},[e,s]),{fetchingUsernameAccount:a,usernameAccounts:p}};var Vi=(0,ut.createContext)({}),r_=1e3;function Ui({children:o}){var k;let{values:{receiverUsername:e},errors:{receiverUsername:t}}=(0,Bi.useFormikContext)(),{receiverInputValue:r,knownAddresses:a}=dt(),p=Np(r),s=ct(r,r_),i=a==null?void 0:a.some(C=>C.username===r),{usernameAccounts:d}=Gi({shouldSkipSearch:Boolean(i),searchPatternToLookFor:s}),u=(k=d[r])==null?void 0:k.username,_=r!==s&&u!==null,f=Br({key:"username",knownAddresses:a,inputValue:r}),y=!_&&u===void 0&&r,b=Boolean(y&&!p&&!f),T={showUsernameError:Boolean(r&&s&&!_&&!y&&!u&&!p),isUsernameLoading:b,isUsernameDebouncing:_,usernameIsAmongKnown:f,receiverUsername:e,receiverUsernameError:t,isReceiverUsernameInvalid:Boolean(t),usernameAccounts:d,searchQueryIsAddress:p};return ut.default.createElement(Vi.Provider,{value:T},o)}function _t(){return(0,ut.useContext)(Vi)}n();var ft=g(require("react"));var Mi=(0,ft.createContext)({});function Oi({children:o}){let e=Ne(),t=ae(),r=To(),a=mi(),p=lt(),s=fi(),i=dt(),d=_t();return ft.default.createElement(Mi.Provider,{value:{accountInfo:e,formInfo:t,tokensInfo:r,gasInfo:p,dataFieldInfo:s,receiverInfo:i,receiverUsernameInfo:d,amountInfo:a}},o)}function z(){return(0,ft.useContext)(Mi)}function Wi({accountInfo:o,formInfo:e,tokensInfo:t,networkConfig:r,children:a,Loader:p,initGasLimitError:s}){let[i,d]=(0,Se.useState)();function u(){return S(this,null,function*(){let _=!r.skipFetchFromServer,{chainId:f}=r,y=Yo(f),b=qi.fallbackNetworkConfigurations[y]||{};if(_){let T=yield ar(f);if(T){let k=x(x(x({},b),T),r);Qo(k),d(k);return}}let v=x(x({},b),r);Qo(v),d(v)})}return(0,Se.useEffect)(()=>{u()},[r]),i?Se.default.createElement(Gs,{value:{networkConfig:i}},Se.default.createElement(Ip,{value:o},Se.default.createElement(Ls,{value:e},Se.default.createElement(qs,{value:t},Se.default.createElement(Ci,null,Se.default.createElement(Ui,null,Se.default.createElement(ri,{initGasLimitError:s},Se.default.createElement(_i,null,Se.default.createElement(li,null,Se.default.createElement(Oi,null,a)))))))))):p!=null?Se.default.createElement(p,null):null}n();var pa=require("@terradharitri/sdk-dapp/constants/index");var Vr={insufficientFunds:"Insufficient funds",invalidAddress:"Invalid address",invalidGasPrice:"Invalid gas price",invalidNumber:"Invalid number",invalidFeePerDataByte:"Invalid fee per data byte",cannotBeZero:"Cannot be zero",required:"Required",amountTooSmall:"Amount too small",sameAsOwnerAddress:"Same as owner address",receiverNotAllowed:"Receiver not allowed",invalidHerotag:"Invalid herotag",tooLowGasLimit:(o=pa.GAS_LIMIT)=>`Gas limit must be greater or equal to ${o}`,tooHighGasLimit:(o=pa.GAS_LIMIT)=>`Gas limit must be lower than ${o}`,tooLowGasPrice:(o=Ge)=>`Gas price must be greater or equal to ${o}`,tooHighGasPrice:(o=Nt)=>`Gas price must be lower or equal to ${o}`,maxDecimalsAllowed:o=>`Maximum ${o} decimals allowed`};function Ri(o){var q,R,se,xe,ue,_e,$,Pe;let{initialValues:e,onFormSubmit:t,formInfo:r,children:a,accountInfo:p,tokensInfo:s,initGasLimitError:i,networkConfig:d,enableReinitialize:u=!0,Loader:_,errorMessageTranslations:f=Vr,shouldGenerateTransactionOnSubmit:y=!0}=o,{address:b,balance:v,username:T}=p,{chainId:k}=d,[C,A]=(0,Oo.useState)(Boolean(o.formInfo.skipToConfirm)),[I,V]=(0,Oo.useState)(),[U,M]=(0,Oo.useState)(!1),W=Is({initialValues:e,prefilledForm:r.prefilledForm,errorMessages:Vr});function N(ao){return S(this,null,function*(){let ee=yield lr(ao),fe=y?I!=null?I:yield fr({address:b,balance:v,chainId:k,nonce:p.nonce,values:ee}):null;return t(ee,fe,A)})}let B=(e==null?void 0:e.tokenId)||(d==null?void 0:d.rewaLabel)||zi.fallbackNetworkConfigurations.mainnet.rewaLabel,P=wr(x(x({},f),Vr)),O=(q=e==null?void 0:e.data)!=null?q:"",K=(R=e==null?void 0:e.txType)!=null?R:At({nft:s==null?void 0:s.initialNft,tokenId:B}),H=(se=e==null?void 0:e.gasLimit)!=null?se:br({txType:K,data:O,isGuarded:p.isGuarded}),G={address:(xe=e==null?void 0:e.address)!=null?xe:b,amount:(ue=e==null?void 0:e.amount)!=null?ue:L,balance:(e==null?void 0:e.balance)||v,chainId:(e==null?void 0:e.chainId)||d.chainId,code:"",data:O,gasLimit:H,gasPrice:(_e=e==null?void 0:e.gasPrice)!=null?_e:Ge,isBurn:r.isBurn,isGuarded:($=e==null?void 0:e.isGuarded)!=null?$:p.isGuarded,ledger:e==null?void 0:e.ledger,nft:s==null?void 0:s.initialNft,receiver:(Pe=e==null?void 0:e.receiver)!=null?Pe:"",receiverUsername:e==null?void 0:e.receiverUsername,senderUsername:T,tokenId:B,tokens:s==null?void 0:s.initialTokens,txType:K};return Oo.default.createElement($i.Formik,{initialValues:G,enableReinitialize:u,onSubmit:N,initialErrors:W,validationSchema:P},Oo.default.createElement(Wi,{initGasLimitError:i,accountInfo:p,formInfo:w(x({},r),{isFormSubmitted:C,setIsFormSubmitted:A,setGuardedTransaction:V,hasGuardianScreen:U,setHasGuardianScreen:M}),networkConfig:d,tokensInfo:s,Loader:_},a))}n();var Ur=require("react");n();n();var mc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var Hi=require("@terradharitri/sdk-dapp/constants/index");var n_="1",Zi=({computedNft:o,amount:e})=>{var a,p,s;if(((a=o==null?void 0:o.nft)==null?void 0:a.type)===Z.NftEnumType.NonFungibleDCDT)return n_;let t=((p=o==null?void 0:o.nft)==null?void 0:p.type)===Z.NftEnumType.MetaDCDT,r=(o==null?void 0:o.quantity)||e;return t&&r?(0,we.formatAmount)({input:r,decimals:(s=o==null?void 0:o.nft)==null?void 0:s.decimals,showLastNonZeroDecimal:!0,addCommas:!1,digits:Hi.DIGITS}):r};n();function Ki(o){let{computedNft:e,data:t,amount:r,receiver:a}=o,p=e==null?void 0:e.nft,s=p?Un({nft:p,amount:r,receiver:a,errors:!1}):"";return t||s}n();var Xi=o=>S(void 0,null,function*(){let p=o,{configValues:e}=p,t=Ho(p,["configValues"]),r=pr(o.chainId),a=w(x(x({isInternal:["1","T"].includes(o.chainId)},t),e),{delegationContractData:r});return Xp(a)});n();var gt=require("@terradharitri/sdk-dapp/constants/index");var ji=o=>o!=null&&o!==L?o:(0,we.formatAmount)({input:String(gt.GAS_PRICE),decimals:gt.DECIMALS,showLastNonZeroDecimal:!0,digits:gt.DIGITS});n();var sc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var Ji=require("@terradharitri/sdk-dapp/types/tokens.types"),Yi=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");function Qi(o,e){return S(this,null,function*(){let{address:t,identifier:r}=o,{isNft:a}=(0,Yi.getIdentifierType)(r);if(!a)return null;try{let p=yield ir({address:t,identifier:r},e);if((p==null?void 0:p.type)===Ji.NftEnumType.MetaDCDT){let s=yield Nr(p);p=w(x({},p),{allowedReceivers:s})}return p}catch(p){console.log(p)}return null})}n();var nc=require("@terradharitri/sdk-core"),ac=g(require("bignumber.js"));n();var ec=require("@terradharitri/sdk-core"),oc=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),tc=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");var a_=o=>o.split("@").map((p,s)=>[2,3].includes(s)?p:(0,tc.decodePart)(p)),rc=({data:o,nft:e,address:t})=>{let r=o==null?void 0:o.startsWith("DCDTNFTBurn"),a=o==null?void 0:o.startsWith("DCDTNFTTransfer");if((r||a)&&o.includes("@"))try{let[,s,i,d,u]=e?["DCDTNFTTransfer",e.collection,e.nonce,e.quantity,e.receiver]:a_(o),_=r&&!u?t:u,f=[s,i,d,_].every(b=>b),y=(0,oc.addressIsValid)(new ec.Address(_).bech32());if(f&&y)return{collection:s,nonce:i,quantity:d,receiver:_}}catch(s){console.error("Could not extract NFT from data:",s);return}};var p_=(o,e)=>S(void 0,null,function*(){let{address:t,identifier:r}=o;try{return yield ir({address:t,identifier:r},e)}catch(a){return yield Sp(r,e)}}),pc=(o,e)=>S(void 0,null,function*(){let{address:t,nft:r}=o,a=rc(o);try{if(a){let{collection:p,nonce:s,quantity:i,receiver:d}=a,u=`${p}-${s}`,_=yield p_({identifier:u,address:t},e);if(_)return{receiver:new nc.Address(d).bech32(),nft:_,quantity:r?i:new ac.default(i,16).toString(10)}}}catch(p){console.log(p)}return null});var s_={receiver:"",quantity:""},ic=r=>S(void 0,[r],function*({data:o,address:e,identifier:t}){if(o)return yield pc({data:o,address:e});let{isNft:a}=(0,sc.getIdentifierType)(t);if(t&&a){let p=yield Qi({identifier:t,address:e});return p?w(x({},s_),{nft:p}):null}return null});n();var cc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");function i_(o,e){return S(this,null,function*(){let{address:t,identifier:r}=o;try{let{data:a}=yield vp({address:t,token:r},e);return a}catch(a){console.log(a)}return null})}function lc(o){let{identifier:e,address:t}=o,{isDcdt:r}=(0,cc.getIdentifierType)(e);return e&&r?i_({address:t,identifier:e}):null}function c_(){let o=new URLSearchParams(window.location.search);return Object.fromEntries(o).token}function dc(o){return S(this,null,function*(){let{address:e,rewaLabel:t,configValues:{receiver:r,receiverUsername:a,amount:p,gasPrice:s,data:i,tokenId:d},networkConfig:u}=o,_=c_(),f=d||_,y=f||t;u&&Qo(u);let[b,v,T]=yield Promise.all([ic({data:i,address:e,identifier:f}),lc({identifier:f,address:e}),Xi(w(x({},o),{computedTokenId:y}))]),{initGasLimit:k,initGasLimitError:C}=T,A={receiver:r,receiverUsername:a,amount:Zi({computedNft:b,amount:p}),tokenId:y,gasLimit:k,gasPrice:ji(s),data:Ki({computedNft:b,data:i,receiver:r,amount:p})},{isDcdt:I}=(0,mc.getIdentifierType)(f);return{initialValues:A,nft:b==null?void 0:b.nft,gasLimitCostError:C,computedTokens:v?[v]:[],computedTokenId:y,tokenFound:I?Boolean(v):!0}})}n();function uc(o){let[e,t]=(0,Ur.useState)(null);function r(){return S(this,null,function*(){let a=yield dc(o);t(a)})}return(0,Ur.useEffect)(()=>{r()},[]),e}n();n();var Y=g(require("react")),dn=require("@terradharitri/sdk-core/out"),Fd=g(require("classnames")),Pd=require("formik");n();var l_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(l_));var E={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};n();n();var $t=g(require("react")),$c=g(require("classnames"));n();n();n();var be=g(require("react")),Wc=require("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");n();var Mc=require("react");n();n();var lo=g(require("react")),qr=require("@terradharitri/sdk-dapp/constants/index"),ia=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),gc=require("@terradharitri/sdk-dapp/UI/UsdValue/index");n();n();var eo=g(require("react")),_c=require("@fortawesome/free-solid-svg-icons"),fc=require("@fortawesome/react-fontawesome"),sa=g(require("classnames"));n();var m_=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(m_));var ko={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"};var __=(Ot(),Zo(Mt)).default,Or=o=>{let{avatar:e,type:t}=o;return t==="NonFungibleDCDT"?eo.default.createElement("div",{className:(0,sa.default)(ko.tokenAvatar,ko.tokenAvatarNFT)},"NFT"):t==="SemiFungibleDCDT"?eo.default.createElement("div",{className:(0,sa.default)(ko.tokenAvatar,ko.tokenAvatarSFT)},"SFT"):t==="REWA"?eo.default.createElement("div",{className:ko.tokenAvatar},o.RewaIcon?eo.default.createElement(o.RewaIcon,null):eo.default.createElement(__,null)):e?eo.default.createElement("div",{className:ko.tokenAvatar},eo.default.createElement("img",{src:e})):eo.default.createElement("div",{className:ko.tokenAvatar},eo.default.createElement(fc.FontAwesomeIcon,{icon:_c.faDiamond}))};n();var f_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(f_));var qt={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var yc=({label:o="Amount",amount:e,txType:t,tokenDecimals:r,tokenId:a,rewaLabel:p,rewaPriceInUsd:s,nft:i,tokenAvatar:d})=>{let u=(i==null?void 0:i.decimals)||0,_=t==="DCDT",f=t==="MetaDCDT",y=t==="NonFungibleDCDT",b=f?(0,j.parseAmount)(e,i==null?void 0:i.decimals):e,v=Boolean(i&&e),T=a.split("-")[0],k=_?r:qr.DECIMALS,C=v?lo.default.createElement(ia.FormatAmount,{rewaLabel:p,value:b,decimals:u,digits:t==="MetaDCDT"?qr.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):lo.default.createElement(ia.FormatAmount,{rewaLabel:p,value:(0,j.parseAmount)(e,k),showLabel:!1,decimals:k,showLastNonZeroDecimal:!0,token:_?T:p,"data-testid":"confirmAmount"});return y?null:lo.default.createElement("div",{className:qt.amount},lo.default.createElement("span",{className:E.label},o),lo.default.createElement("div",{className:qt.token},lo.default.createElement(Or,{type:t,avatar:d}),lo.default.createElement("div",{className:qt.value},C," ",T)),!_&&lo.default.createElement(gc.UsdValue,{amount:e,usd:s,"data-testid":"confirmUsdValue",className:qt.price}))};n();n();var te=g(require("react")),bc=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");n();var g_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(g_));var Wt={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"};var y_=(o,e)=>[...o.matchAll(new RegExp(e,"gi"))].map(t=>t.index),vc=({label:o="Data",scCallLabel:e="SC Call",data:t,highlight:r,isScCall:a})=>{let p=te.default.createElement(te.default.Fragment,null,t),[s,...i]=r&&a?r.split("@"):[];if(t&&r&&y_(t,r).length===1)switch(!0){case t.startsWith(r):{let[,d]=t.split(r);p=te.default.createElement(te.default.Fragment,null,r,te.default.createElement("span",null,d));break}case t.endsWith(r):{let[d]=t.split(r);p=te.default.createElement(te.default.Fragment,null,te.default.createElement("span",null,d),r);break}default:{let[d,u]=t.split(r);p=te.default.createElement(te.default.Fragment,null,te.default.createElement("span",null,d),r,te.default.createElement("span",null,u));break}}return te.default.createElement(te.default.Fragment,null,s&&te.default.createElement("div",{className:Wt.data},te.default.createElement("span",{className:E.label},e),te.default.createElement("div",{"data-testid":"confirmScCall",className:Wt.value},[(0,bc.decodePart)(s),...i].join("@"))),te.default.createElement("div",{className:Wt.data},te.default.createElement("span",{className:E.label},o),te.default.createElement("div",{"data-testid":"confirmData",className:Wt.value},t?p:"N/A")))};n();n();var So=g(require("react")),hc=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");n();var b_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(b_));var zt={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var xc=({rewaPriceInUsd:o,label:e="Fee",feeLimit:t,rewaLabel:r})=>So.default.createElement("div",{className:zt.fee},So.default.createElement("span",{className:E.label},e),So.default.createElement("div",{className:zt.token},So.default.createElement(Or,{type:"REWA"}),So.default.createElement("div",{className:zt.value},So.default.createElement(hc.FormatAmount,{rewaLabel:r,value:t,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),t!==L&&So.default.createElement("span",{className:zt.price},dr({feeLimit:t,rewaPriceInUsd:o})));n();n();var Le=g(require("react")),Sc=require("@fortawesome/free-solid-svg-icons"),wc=require("@fortawesome/react-fontawesome"),Cc=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ec=require("@terradharitri/sdk-dapp/UI/CopyButton"),Ic=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),Ac=require("@terradharitri/sdk-dapp/UI/Trim"),Nc=g(require("classnames"));n();var{default:mo}=(kc(),Zo(Tc));n();var x_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(x_));var He={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"};var Fc=({label:o="Receiver",receiver:e,scamReport:t,receiverUsername:r})=>{let a=Boolean(r),p=r!=null?r:e;return Le.default.createElement("div",{className:He.confirmReceiver},Le.default.createElement("span",{className:E.label},o),Le.default.createElement("span",{className:(0,Nc.default)(He.value,{[He.shrunk]:a}),"data-testid":"confirmReceiver"},a&&Le.default.createElement(mo,{className:He.icon}),p,a&&Le.default.createElement(Ic.ExplorerLink,{page:`/${Cc.ACCOUNTS_ENDPOINT}/${e}`,className:He.explorer})),a&&Le.default.createElement("span",{className:He.subValue},Le.default.createElement(Ac.Trim,{text:e,className:He.subValueTrim}),Le.default.createElement(Ec.CopyButton,{text:e,className:He.subValueCopy})),t&&Le.default.createElement("div",{className:He.scam},Le.default.createElement("span",null,Le.default.createElement(wc.FontAwesomeIcon,{icon:Sc.faExclamationTriangle,className:He.icon}),Le.default.createElement("small",{"data-testid":"confirmScamReport"},t))))};n();n();var wo=g(require("react"));n();n();var pe=g(require("react")),Pc=require("@fortawesome/free-solid-svg-icons"),Lc=require("@fortawesome/react-fontawesome"),Dc=g(require("@terradharitri/sdk-dapp/constants/index")),Gc=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Bc=g(require("classnames"));n();var T_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(T_));var qo={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};var k_=(Ot(),Zo(Mt)).default,zr=({RewaIcon:o,inDropdown:e=!1,isRewa:t,nftTokenDetails:r,nftType:a,token:p})=>{var C,A;let{name:s,identifier:i,balance:d,decimals:u}=p,_=((C=p.assets)==null?void 0:C.svgUrl)||((A=p.assets)==null?void 0:A.pngUrl)||"",f=_?28:20,[y,b]=(0,pe.useState)(s);(0,pe.useEffect)(()=>{var V;((V=r==null?void 0:r.uris)==null?void 0:V.some(U=>{let M=c.Buffer.from(String(U),"base64").toString(),{found:W}=Dp(M,r==null?void 0:r.scamInfo);return W}))||b(s)},[s]);let v=pe.default.createElement(Lc.FontAwesomeIcon,{icon:Pc.faDiamond});a==Z.NftEnumType.NonFungibleDCDT&&(v=pe.default.createElement("div",{className:"nft-type","data-testid":`${i}-type-nft`},"NFT")),a===Z.NftEnumType.SemiFungibleDCDT&&(v=pe.default.createElement("div",{className:"nft-type","data-testid":`${i}-type-sft`},"SFT"));let T=!e&&a!==Z.NftEnumType.NonFungibleDCDT,k=pe.default.createElement("div",{className:qo.tokenElementCircle},v);return _&&(k=pe.default.createElement("img",{className:qo.tokenElementCircle,src:_,alt:s,height:f})),t&&(k=pe.default.createElement("div",{className:qo.tokenElementCircle},o?pe.default.createElement(o,{height:36}):pe.default.createElement(k_,{height:36}))),pe.default.createElement("div",{className:(0,Bc.default)(E.value,qo.tokenElement)},pe.default.createElement("div",{className:qo.tokenElementWrapper},k),pe.default.createElement("div",{"data-testid":"tokenName"},pe.default.createElement("span",{"data-testid":`${i}-element`},pe.default.createElement("span",null,y)," ",pe.default.createElement("span",{className:qo.tokenElementIdentifier},i)),T&&pe.default.createElement(Gc.FormatAmount,{rewaLabel:i,value:d||L,digits:a===Z.NftEnumType.SemiFungibleDCDT?0:Dc.DIGITS,token:i,showLabel:!1,decimals:u,"data-testid":`${i}-balance`})))};n();var S_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(S_));var Vc={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"};var Uc=({RewaIcon:o,rewaLabel:e,isDcdtTransaction:t,nft:r,tokenAvatar:a,tokenId:p,tokenIdError:s})=>{var d;let i=(r==null?void 0:r.name)||"";return wo.default.createElement("div",{className:Vc.token},wo.default.createElement("span",{className:E.label},r?wo.default.createElement("span",null,r==null?void 0:r.name," "):"","Token"),wo.default.createElement("div",null,r?wo.default.createElement(zr,{inDropdown:!0,token:{name:r==null?void 0:r.name,identifier:r==null?void 0:r.identifier,decimals:0,balance:L,ticker:"",assets:{svgUrl:((d=r==null?void 0:r.assets)==null?void 0:d.svgUrl)||""}}}):wo.default.createElement(zr,{inDropdown:!0,token:{name:t?i:"DharitrI eGold",identifier:t?p:e,decimals:0,balance:L,ticker:"",assets:{svgUrl:a||""}},isRewa:p===e,RewaIcon:o})),s&&wo.default.createElement("div",{className:E.error},s))};var Co=class extends Mc.Component{render(){return null}};Co.Receiver=Fc,Co.Amount=yc,Co.Fee=xc,Co.Data=vc,Co.Token=Uc;var $r=Co;n();n();var uo=g(require("react")),ca=g(require("classnames"));n();var w_=`.dapp-core-component__styles-module__preview {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(w_));var Ve={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"};var Rr=o=>{let _=o,{txType:e,onClick:t,identifier:r}=_,a=Ho(_,["txType","onClick","identifier"]),{name:p,thumbnail:s}=Lp({nft:a}),i=["NonFungibleDCDT","SemiFungibleDCDT"].includes(e),d=e==="NonFungibleDCDT"?"NFT":"SFT",u=f=>{f.preventDefault(),t&&t(f,Object.assign(a,{identifier:r}))};return i?uo.default.createElement("div",{onClick:u,"data-testid":"token-preview",className:(0,ca.default)(Ve.preview,{[Ve.clickable]:Boolean(t)})},uo.default.createElement("img",{src:s,className:Ve.image}),uo.default.createElement("div",{className:Ve.content},uo.default.createElement("div",{className:Ve.left},uo.default.createElement("div",{"data-testid":"token-preview-name",className:Ve.name},p),uo.default.createElement("div",{"data-testid":"token-preview-identifier",className:Ve.identifier},r)),uo.default.createElement("div",{className:Ve.right},uo.default.createElement("div",{className:(0,ca.default)(Ve.badge,{[Ve.nft]:e==="NonFungibleDCDT",[Ve.sft]:e==="SemiFungibleDCDT"})},d)))):null};n();var C_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(C_));var _o={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};n();n();var Hr=require("@terradharitri/sdk-dapp/types/enums.types"),Oc=({providerType:o,hasGuardianScreen:e})=>e?"Confirm & Continue":o===Hr.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":o===Hr.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":o===Hr.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";n();var qc=({receiverAddress:o,knownAddresses:e,existingReceiverUsername:t})=>{if(t)return t;let r=e==null?void 0:e.find(a=>a.address===o);return r==null?void 0:r.username};var zc=({isConfirmCloseBtnVisible:o=!0,providerType:e})=>{var ue;let{setIsGuardianScreenVisible:t}=ae(),{receiverUsernameInfo:{receiverUsername:r},receiverInfo:{scamError:a,receiver:p,knownAddresses:s},formInfo:i,gasInfo:{gasCostError:d,feeLimit:u},accountInfo:{isGuarded:_},dataFieldInfo:{data:f},amountInfo:y,tokensInfo:b}=z(),{tokenId:v,tokenDetails:T,nft:k,rewaPriceInUsd:C,rewaLabel:A}=b,{readonly:I,onCloseForm:V,onInvalidateForm:U,onPreviewClick:M,onSubmitForm:W,txType:N,hasGuardianScreen:B}=i,P=()=>{t(!0)},[O,K]=(0,be.useState)(!1),H=N==="NonFungibleDCDT",G=Oc({providerType:e,hasGuardianScreen:B}),q=_e=>{_e.preventDefault(),I?V():U()},R=()=>{if(_&&B)return P();K(!0),W()},se=!["REWA","DCDT","MetaDCDT"].includes(N),xe=qc({knownAddresses:s,receiverAddress:p,existingReceiverUsername:r});return be.default.createElement("div",{className:_o.summary},be.default.createElement("div",{className:_o.fields},se&&k&&be.default.createElement(Rr,x({onClick:M,txType:N},k)),be.default.createElement(Wc.ConfirmReceiver,{amount:y.amount,scamReport:a!=null?a:null,receiver:p,receiverUsername:xe}),be.default.createElement("div",{className:_o.columns},!H&&be.default.createElement("div",{className:_o.column},be.default.createElement($r.Amount,{txType:N,tokenId:v,tokenDecimals:T.decimals,amount:String(y.amount),nft:k,rewaPriceInUsd:C,rewaLabel:A,tokenLabel:T.name,tokenAvatar:((ue=T.assets)==null?void 0:ue.svgUrl)||""})),be.default.createElement("div",{className:_o.column},be.default.createElement($r.Fee,{rewaLabel:A,rewaPriceInUsd:C,feeLimit:u}))),be.default.createElement($r.Data,{data:f}),d&&be.default.createElement("p",{className:E.error},d)),be.default.createElement("div",{className:_o.buttons},be.default.createElement("button",{className:E.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:O,onClick:R},G),o&&be.default.createElement("button",{className:E.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:q},I?"Close":"Back")))};var Rc=o=>{let{formInfo:{setHasGuardianScreen:e}}=z();return(0,$t.useEffect)(()=>{o.hasGuardianScreen&&e(!0)},[]),$t.default.createElement("div",{className:(0,$c.default)(_o.confirm,o.className),"data-testid":"confirmScreen"},$t.default.createElement(zc,x({},o)))};n();n();n();var X=g(require("react")),Jr=require("@fortawesome/free-solid-svg-icons"),ua=require("@fortawesome/react-fontawesome"),jr=g(require("classnames")),Ll=require("formik"),Dl=g(require("react-select"));n();n();var Hc=g(require("react")),Zc=require("react-select");n();var E_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(E_));var F={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};var Kc=o=>Hc.default.createElement(Zc.components.Control,w(x({},o),{className:F.receiverSelectControl}));n();n();var Rt=g(require("react")),el=require("@fortawesome/free-solid-svg-icons"),ol=require("@fortawesome/react-fontawesome"),tl=g(require("classnames")),rl=require("react-select");n();n();var yt=(o,e)=>{let t=e.toLowerCase(),r=o.label.toLowerCase(),a=o.value.toLowerCase();return e?r.includes(t)||a.includes(t):!0};n();var Xc=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),jc=require("@terradharitri/sdk-dapp/utils"),la=o=>o?o.filter(r=>(0,jc.addressIsValid)(r.address)).map(r=>{let a=r.username?String((0,Xc.trimUsernameDomain)(r.username)):r.address;return{value:r.address,label:a}}):[];n();var Jc=({setOption:o,setAllValues:e})=>(r,a)=>{["input-blur","menu-close"].includes(a.action)||(e(r),r||o(null))};n();var Yc=({setInputValue:o,setOption:e,changeAndBlurInput:t})=>a=>{!a||(e(a),t(a.value),a.value!==a.label?o(a.label):o(a.value))};n();var Qc=({options:o,usernameAccounts:e,knownAddresses:t,setFieldValue:r,setInputValue:a,setOption:p})=>i=>{var T,k,C,A;let d=o.find(I=>I.value===i&&I.value!==I.label),u=d==null?void 0:d.label,_,f,y=(T=e[i])==null?void 0:T.username;y&&(u=y,_=y,f=(k=e[i])==null?void 0:k.rawUsername);let b=t.find(I=>I.address===i);b!=null&&b.username&&(u=b==null?void 0:b.username,_=b==null?void 0:b.username,f=b==null?void 0:b.rawUsername);let v=u!=null?u:i;a(v),p({value:i,label:v}),r("receiver",(A=(C=e[i])==null?void 0:C.address)!=null?A:i),r("receiverUsername",_),r("rawReceiverUsername",f)};var nl=o=>{let{selectProps:e,isDisabled:t,options:r}=o,{menuIsOpen:a,value:p,isLoading:s}=e,i=(0,Rt.useMemo)(()=>r.find(f=>{let y=f,b=p;return b?yt(y,b.label):null}),[p,r]),d=r.length===0&&!s,u=Boolean(p)&&!i,_=t||d||u;return s?Rt.default.createElement(ol.FontAwesomeIcon,{icon:el.faSpinner,spin:!0,className:F.receiverSelectSpinner}):Rt.default.createElement(rl.components.DropdownIndicator,w(x({},o),{className:(0,tl.default)(F.receiverSelectIndicator,{[F.expanded]:a,[F.hidden]:_})}))};n();n();var pl=g(require("react")),sl=require("@terradharitri/sdk-dapp/utils"),il=g(require("classnames")),cl=require("react-select");n();n();var al=(o,e)=>{let t=o.current;if(!t||!t.state.focusedOption)return!1;let r=t.state.focusedOption,a=r.label.toLowerCase(),p=r.value.toLowerCase(),s=a!==p,i=s&&a.startsWith(e.toLowerCase());return s&&!e?!0:i};var ll=o=>e=>{let{selectProps:t,value:r}=e,{inputValue:a,menuIsOpen:p}=t,{receiverUsernameInfo:{receiverUsername:s}}=z(),i=al(o,a),d=(0,sl.addressIsValid)(String(r)),u=Boolean(s)||i,_=d&&p||!d&&a;return pl.default.createElement(cl.components.Input,w(x({},e),{"data-testid":"receiver",className:(0,il.default)(F.receiverSelectInput,{[F.visible]:_,[F.spaced]:u})}))};n();n();var ml=g(require("react")),dl=require("react-select");var ul=o=>ml.default.createElement(dl.components.Menu,w(x({},o),{className:F.receiverSelectMenu}));n();n();var ve=g(require("react")),Zr=require("@terradharitri/sdk-dapp/UI/Trim"),Ht=g(require("classnames")),_l=require("react-select");var fl=o=>{let{selectProps:e,focusedOption:t}=o,{value:r,inputValue:a}=e,p=t,s=p?p.label.toLowerCase():null,i=p&&p.label!==p.value,_=(s&&(!r||r&&a)?s.startsWith(a.toLowerCase()):!1)&&p?p.label.replace(p.label.substring(0,a.length),a):null,f=_&&!a,y=_&&a.length<_.length/2,b=_&&Boolean(a)&&y,v=_&&Boolean(a);return ve.default.createElement(ve.default.Fragment,null,b&&!i&&ve.default.createElement("div",{className:(0,Ht.default)(F.receiverSelectAutocomplete,F.receiverSelectAutocompleteUntrimmed)},_),v&&i&&ve.default.createElement("div",{className:(0,Ht.default)(F.receiverSelectAutocomplete,F.receiverSelectAutocompleteUsername)},ve.default.createElement(mo,{className:F.receiverSelectAutocompleteIcon}),_,ve.default.createElement("span",{className:F.receiverSelectAutocompleteWrapper},"(",ve.default.createElement(Zr.Trim,{text:p.value}),")")),f&&ve.default.createElement("span",{className:(0,Ht.default)(F.receiverSelectAutocomplete,{[F.receiverSelectAutocompleteUsername]:i})},i?ve.default.createElement(ve.default.Fragment,null,ve.default.createElement("span",null,ve.default.createElement(mo,{className:(0,Ht.default)(F.receiverSelectAutocompleteIcon,F.receiverSelectAutocompleteIconMuted)}),p.label),ve.default.createElement("span",{className:F.receiverSelectAutocompleteWrapper},"(",ve.default.createElement(Zr.Trim,{text:p.value}),")")):ve.default.createElement(Zr.Trim,{text:_})),ve.default.createElement(_l.components.MenuList,w(x({},o),{className:F.receiverSelectList})))};n();n();var oo=g(require("react")),ma=require("@terradharitri/sdk-dapp/UI/Trim"),yl=g(require("classnames")),bl=require("react-select");n();n();var Zt=g(require("react"));n();var I_=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(I_));var gl={highlight:"dapp-core-component__styles-modules__highlight"};var Kr=({highlight:o,text:e=""})=>{let t=e.split(" "),r=o.toLowerCase(),a=new RegExp(`(${r})`,"gi"),p=t.map(s=>s.split(a).filter(i=>i));return Zt.default.createElement("span",{className:gl.highlight},p.map((s,i)=>{let d=`${s}-${i}`;return Zt.default.createElement("span",{key:d},s.map((u,_)=>{let f=u.toLowerCase()===r,y=r&&f,b=`${u}-${_}`;return y?Zt.default.createElement("strong",{key:b},u):Zt.default.createElement("span",{key:b},u)}))}))};var vl=o=>{let{isFocused:e,data:t,selectProps:r}=o,{inputValue:a}=r,p=t,s=p.value!==p.label;return oo.default.createElement(bl.components.Option,w(x({},o),{className:(0,yl.default)(F.receiverSelectOption,{[F.focused]:e})}),s?oo.default.createElement(oo.default.Fragment,null,oo.default.createElement("span",{className:F.receiverSelectOptionUsername},oo.default.createElement(mo,{className:F.receiverSelectOptionUsernameIcon}),oo.default.createElement(Kr,{text:p.label,highlight:a})),oo.default.createElement("span",{className:F.receiverSelectOptionNameWrapper},"(",oo.default.createElement(ma.Trim,{text:p.value,className:F.receiverSelectOptionName}),")")):oo.default.createElement(ma.Trim,{text:p.value,className:F.receiverSelectOptionName}))};n();n();var hl=g(require("react")),xl=g(require("classnames")),Tl=require("react-select");var kl=o=>{let{selectProps:e,isFocused:t,className:r}=o,{menuIsOpen:a}=e;return hl.default.createElement(Tl.components.SelectContainer,w(x({},o),{className:(0,xl.default)(r,{[F.expanded]:a,[F.focused]:t&&a})}))};n();n();var to=g(require("react")),da=require("@terradharitri/sdk-dapp/UI/Trim"),Sl=require("@terradharitri/sdk-dapp/utils"),wl=g(require("classnames")),Cl=require("react-select");var El=o=>{let{selectProps:e,isDisabled:t}=o,{value:r,menuIsOpen:a}=e,p=r,{receiverInfo:{receiver:s},receiverUsernameInfo:{receiverUsername:i}}=z(),d=i!=null?i:p&&p.value!==p.label,u=p?{value:s!=null?s:p.value,label:p.label}:null,_=u&&(d||!d&&!a)&&(0,Sl.addressIsValid)(u.value);return to.default.createElement(Cl.components.ValueContainer,w(x({},o),{className:F.receiverSelectValue}),_&&to.default.createElement("span",{className:(0,wl.default)(F.receiverSelectSingle,{[F.disabled]:t})},d?to.default.createElement(to.default.Fragment,null,to.default.createElement("span",{className:F.receiverSelectSingleUsername},to.default.createElement(mo,{className:F.receiverSelectSingleUsernameIcon}),u.label),to.default.createElement("span",{className:F.receiverSelectSingleTrimWrapper},"(",to.default.createElement(da.Trim,{text:u.value,className:F.receiverSelectSingleTrim}),")")):to.default.createElement(da.Trim,{text:u.value,className:F.receiverSelectSingleTrim})),o.children)};n();n();var Il=require("formik");var Xr=()=>{let{receiverInfo:{receiverError:o,isReceiverInvalid:e},receiverUsernameInfo:{receiverUsernameError:t,isReceiverUsernameInvalid:r,receiverUsername:a}}=z(),{touched:{receiver:p}}=(0,Il.useFormikContext)(),s=e&&p||r;return a!=null&&a.startsWith("drt1")?{isInvalid:e,receiverErrorDataTestId:"receiverError",error:o}:{isInvalid:s,receiverErrorDataTestId:r?"receiverUsernameError":"receiverError",error:r?t:o}};n();n();var Nl=require("@terradharitri/sdk-dapp/utils"),Fl=require("formik");n();n();var Al=({knownAddresses:o,inputValue:e})=>!o||!e?!1:o.filter(r=>{var i;let a=(i=r.username)!=null?i:r.address,p=r.address;return yt({label:a,value:p,data:{label:a,value:p}},e)}).length>0;var Pl=({menuIsOpen:o})=>{let{isInvalid:e}=Xr(),{values:{nft:t}}=(0,Fl.useFormikContext)(),{showUsernameError:r,isUsernameLoading:a,isUsernameDebouncing:p,usernameIsAmongKnown:s,searchQueryIsAddress:i}=_t(),{receiverInputValue:d,knownAddresses:u}=dt(),_=Br({key:"address",knownAddresses:u,inputValue:d}),f=Al({inputValue:d,knownAddresses:u}),y=i&&(!_||!o)&&!(0,Nl.addressIsValid)(d),b=Boolean(r&&!(o&&_)&&!(o&&s));return{isAddressError:y||(t?e:!1),isUsernameError:b,isRequiredError:e&&!b&&!a&&!p&&!y&&!f&&!d,isReceiverDropdownOpened:d&&f&&o}};var Gl=o=>{let e=(0,X.useRef)(null),{className:t}=o,{setFieldValue:r}=(0,Ll.useFormikContext)(),{receiverInfo:{scamError:a,fetchingScamAddress:p,receiverInputValue:s,setReceiverInputValue:i,knownAddresses:d,receiver:u,onBlurReceiver:_,onChangeReceiver:f},receiverUsernameInfo:{receiverUsername:y},formInfo:{readonly:b}}=z(),[v,T]=(0,X.useState)(!1),[k,C]=(0,X.useState)(u?{label:u,value:u}:null),{receiverErrorDataTestId:A,error:I}=Xr(),{isAddressError:V,isUsernameError:U,isRequiredError:M,isReceiverDropdownOpened:W}=Pl({menuIsOpen:v}),{usernameAccounts:N,isUsernameLoading:B}=_t(),P=()=>{_(new Event("blur"));let $=d==null?void 0:d.find(Pe=>Pe.username===s&&Pe.address===u);$&&(r("receiver",$.address),r("receiverUsername",$.username),r("rawReceiverUsername",$.rawUsername))},O=d==null?void 0:d.find($=>$.username===s&&$.address===u),K=(0,X.useMemo)(()=>la(d),[d]),H=O?la([O]):K,G=Qc({setFieldValue:r,setInputValue:i,setOption:C,options:H,knownAddresses:d!=null?d:[],usernameAccounts:N}),q=(0,X.useCallback)(Jc({setAllValues:G,setOption:C}),[]),R=(0,X.useCallback)($=>{f($?$.trim():""),setTimeout(P)},[]),se=Yc({changeAndBlurInput:R,setOption:C,setInputValue:i}),xe=(0,X.useMemo)(()=>ll(e),[e]);(0,X.useEffect)(()=>{if(!u)return;let $=Object.keys(N).find(Pe=>{var ao;return((ao=N[Pe])==null?void 0:ao.address)===u});G($!=null?$:u),$&&i($)},[N,u]);let ue=V||U||M,_e=ue&&!v;return X.default.createElement("div",{className:(0,jr.default)(F.receiver,t)},X.default.createElement("div",{className:E.label,"data-testid":"receiverLabel","data-loading":p},"Receiver"),X.default.createElement(Dl.default,{value:k,onInputChange:q,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:Te("receiver",b),options:H,filterOption:yt,noOptionsMessage:()=>null,onChange:se,onBlur:P,isMulti:!1,ref:e,inputValue:s,onMenuClose:()=>T(!1),onMenuOpen:()=>T(!0),components:{Menu:ul,Input:xe,Control:Kc,ValueContainer:El,DropdownIndicator:nl,SelectContainer:kl,MenuList:fl,Option:vl,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,jr.default)(F.receiverSelectContainer,{[F.opened]:W,[F.invalid]:ue||a})}),_e&&X.default.createElement("div",{"data-testid":A,className:E.error},I),B&&X.default.createElement("div",{className:F.loading},"Loading..."),y&&X.default.createElement("span",{className:F.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",X.default.createElement(ua.FontAwesomeIcon,{icon:Jr.faCheck,className:F.foundIcon})),a&&X.default.createElement("div",{"data-testid":"receiverScam",className:(0,jr.default)(E.error,E.scam)},X.default.createElement("span",null,X.default.createElement(ua.FontAwesomeIcon,{icon:Jr.faExclamationTriangle}),X.default.createElement("small",null,a))))};n();n();var Ue=g(require("react")),Bl=g(require("bignumber.js")),Yr=g(require("classnames"));n();var A_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(A_));var Eo={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"};var Vl=o=>{let{className:e}=o,{formInfo:{readonly:t},amountInfo:r,tokensInfo:a}=z(),{amount:p,error:s,onFocus:i,onBlur:d,onChange:u,isInvalid:_,onMaxClicked:f,maxAmountAvailable:y,isMaxButtonVisible:b}=r,{nft:v}=a,T=v!=null&&v.balance?new Bl.default(v.balance).isGreaterThan(0):!1,k=C=>{C.preventDefault(),f()};return Ue.default.createElement("div",{className:(0,Yr.default)(Eo.amount,e)},Ue.default.createElement("div",{className:Eo.label},Ue.default.createElement("label",{htmlFor:"amount",className:E.label},"Amount"),T&&v&&Ue.default.createElement("div",{"data-value":`${y} ${v.identifier}`,className:(0,Yr.default)(Eo.balance,e)},Ue.default.createElement("span",null,"Available:")," ",Ue.default.createElement("span",{"data-testid":`available-${v.identifier}`,className:Eo.available},Ue.default.createElement("span",{className:Eo.amount},y)," ",v.ticker))),Ue.default.createElement("div",{className:Eo.wrapper},Ue.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:p,disabled:Te("amount",t),onFocus:i,onBlur:d,onChange:u,autoComplete:"off",className:(0,Yr.default)(E.input,{[E.invalid]:_,[E.disabled]:Te("amount",t)})}),b&&Ue.default.createElement("a",{href:"/","data-testid":"maxBtn",className:Eo.max,onClick:k,onMouseDown:C=>{C.preventDefault()}},"Max")),_&&Ue.default.createElement("div",{className:E.error,"data-testid":"amountError"},s))};n();n();var Ee=g(require("react")),en=require("@fortawesome/free-solid-svg-icons"),ya=require("@fortawesome/react-fontawesome"),em=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),ba=g(require("classnames")),om=g(require("react-collapsed"));n();var go=g(require("react")),Wl=require("@fortawesome/free-solid-svg-icons"),zl=require("@fortawesome/react-fontawesome"),$l=g(require("bignumber.js")),fa=g(require("classnames")),Rl=require("react-number-format");n();n();var Io=require("@terradharitri/sdk-dapp/constants/index"),Ul=require("@terradharitri/sdk-dapp/utils/validation"),fo=g(require("bignumber.js")),Ml=(o,e)=>{let t=e!=null?e:Io.DIGITS;if((0,Ul.stringIsFloat)(o)){if(new fo.default(o).isZero())return"0";let a=new fo.default(o).toFormat(t);return a=parseFloat(a)>0?a:new fo.default(o).toFormat(Io.DIGITS),a=parseFloat(a)>0?a:new fo.default(o).toFormat(Io.DIGITS+2),a=parseFloat(a)>0?a:new fo.default(o).toFormat(Io.DIGITS+4),a=parseFloat(a)>0?a:new fo.default(o).toFormat(Io.DIGITS+6),a=parseFloat(a)>0?a:new fo.default(o).toFormat(Io.DIGITS+10),parseFloat(a)>0?a:new fo.default(o).toFormat(Io.DIGITS+14)}return"0"};n();var _a=o=>o.replace(/,/g,"");n();var Qr=require("react"),N_={value:"",count:0},Ol=(o,e)=>{let[t,r]=(0,Qr.useState)(N_);return(0,Qr.useEffect)(()=>{let p=setTimeout(()=>{r(o)},e);return()=>clearTimeout(p)},[o.count]),t};n();var ql=g(require("bignumber.js")),bt=o=>{let[e,t]=o.split(""),r=new ql.default(e).isZero();return Boolean(r&&t&&!(t==="."))};n();var F_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(F_));var de={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"};var Hl=()=>{let{formInfo:o,gasInfo:e}=z(),{readonly:t}=o,{defaultGasLimit:r,onResetGasLimit:a,onChangeGasLimit:p,onBlurGasLimit:s,gasLimit:i,gasLimitError:d,isGasLimitInvalid:u}=e,_=T=>{T.preventDefault(),a()},f=({value:T,floatValue:k})=>(!k||!(0,$l.default)(k).isNaN())&&!bt(T),y=T=>{p(T.value,!0)},b=i!==r&&!t,v=Te("gasLimit",t);return go.default.createElement("div",{className:de.gas},go.default.createElement("label",{className:E.label,htmlFor:"gasLimit"},"Gas Limit"),go.default.createElement("div",{className:de.wrapper},go.default.createElement(Rl.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:v,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:s,onValueChange:y,required:!0,isAllowed:f,thousandSeparator:",",thousandsGroupStyle:"thousand",value:i,valueIsNumericString:!0,allowNegative:!1,className:(0,fa.default)(E.input,de.input,{[E.disabled]:v,[E.invalid]:u,[de.spaced]:b})}),b&&go.default.createElement("div",{className:de.actions},go.default.createElement("div",{onClick:_,"data-testid":"gasLimitResetBtn",className:(0,fa.default)(de.action,{[de.disabled]:v})},go.default.createElement(zl.FontAwesomeIcon,{icon:Wl.faUndo,className:de.icon}))),u&&go.default.createElement("div",{className:E.error,"data-testid":`${"gasLimit"}Error`},d)))};n();n();var yo=g(require("react")),Zl=require("@fortawesome/free-solid-svg-icons"),Kl=require("@fortawesome/react-fontawesome"),Xl=g(require("bignumber.js")),ga=g(require("classnames")),jl=require("react-number-format");var Jl=()=>{let{networkConfig:o}=ke(),{gasInfo:e,formInfo:t}=z(),{readonly:r}=t,{rewaLabel:a}=o,{gasPrice:p,gasPriceError:s,isGasPriceInvalid:i,onChangeGasPrice:d,onBlurGasPrice:u,onResetGasPrice:_}=e,f=p!==Ge&&!r,y=Te("gasPrice",r),b=({value:k,floatValue:C})=>(!C||!(0,Xl.default)(C).isNaN())&&!bt(k),v=k=>{k.preventDefault(),_()},T=k=>{d(k.value,!0)};return yo.default.createElement("div",{className:de.gas},yo.default.createElement("label",{className:E.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),yo.default.createElement("div",{className:de.wrapper},yo.default.createElement(jl.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:y,id:"gasPrice",inputMode:"decimal",isAllowed:b,name:"gasPrice",onBlur:u,onValueChange:T,required:!0,suffix:` ${a}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:p,valueIsNumericString:!0,allowNegative:!1,className:(0,ga.default)(E.input,de.input,{[E.disabled]:y,[E.invalid]:i,[de.spaced]:f})}),f&&yo.default.createElement("div",{className:de.actions},yo.default.createElement("div",{onClick:v,className:(0,ga.default)(de.action,{[de.disabled]:y})},yo.default.createElement(Kl.FontAwesomeIcon,{icon:Zl.faUndo,className:de.icon})))),i&&yo.default.createElement("div",{className:E.error,"data-testid":`${"gasPrice"}Error`},s))};n();var Yl=g(require("react"));n();var P_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(P_));var ro={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"};var Ql=({feeLimit:o,rewaPriceInUsd:e})=>o===L?null:Yl.default.createElement("span",{className:ro.fiat,"data-testid":"feeInFiat"},"(",dr({feeLimit:o,rewaPriceInUsd:e}),")");var tm=({className:o})=>{let{gasInfo:e,tokensInfo:t}=z(),{feeLimit:r,gasCostLoading:a,gasPriceError:p,gasLimitError:s}=e,{rewaPriceInUsd:i,rewaLabel:d}=t,[u,_]=(0,Ee.useState)(Boolean(p||s)),{getCollapseProps:f,getToggleProps:y}=(0,om.default)({isExpanded:u}),b=()=>{_(v=>!v)};return Ee.default.createElement("div",{className:(0,ba.default)(ro.fee,o)},Ee.default.createElement("label",{className:E.label},"Fee"),Ee.default.createElement("div",x({className:ro.trigger},y({onClick:b})),Ee.default.createElement("span",{className:ro.limit,"data-testid":"feeLimit"},Ee.default.createElement(em.FormatAmount,{value:r,showLastNonZeroDecimal:!0,rewaLabel:d})),a&&Ee.default.createElement(ya.FontAwesomeIcon,{icon:en.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),Ee.default.createElement(Ql,{rewaPriceInUsd:i,feeLimit:r}),Ee.default.createElement(ya.FontAwesomeIcon,{icon:en.faChevronRight,className:(0,ba.default)(ro.arrow,{[ro.active]:u})})),Ee.default.createElement("div",x({className:ro.expandable},f()),Ee.default.createElement("div",{className:ro.content},Ee.default.createElement(Jl,null),Ee.default.createElement(Hl,null))))};n();n();var D_=g(require("react")),G_=g(require("@terradharitri/sdk-dapp/constants/index")),B_=g(require("classnames")),rm=g(require("react-select"));n();var L_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(L_));n();n();var Oe=g(require("react")),sn=g(require("classnames"));n();var V_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(V_));var no={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};n();n();n();var Q=g(require("react")),am=require("@terradharitri/sdk-dapp/utils/validation"),on=g(require("bignumber.js")),va=g(require("classnames")),pm=require("react-number-format");n();var U_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(U_));var Kt={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};var M_=500,nm=1e13,O_=({"data-testid":o,InfoDustComponent:e,disabled:t,handleBlur:r,handleChange:a,name:p,onDebounceChange:s,onFocus:i,onKeyDown:d,placeholder:u,required:_,usdPrice:f,value:y,usdValue:b,className:v,autoFocus:T,suffix:k})=>{let C=(0,Q.useRef)(null),[A,I]=(0,Q.useState)(),[V,U]=(0,Q.useState)(!1),[M,W]=(0,Q.useState)({value:y,count:0}),[N,B]=(0,Q.useState)(),P=Ol(M,M_),O=G=>{G.stopPropagation(),U(!0);let q=_a(G.target.value),R=(0,on.default)(q).isLessThanOrEqualTo(nm);if((q===""||R)&&(I(q),G.target.value=q,a(G),s)){let se={value:q,count:M.count+1};W(se)}},K=()=>{if(b)return B(`$${b}`);if(!f||!y)return B(void 0);let G=_a(y);if(!(y!==""&&(0,am.stringIsFloat)(G))||G==="")return B(void 0);let R=Ml(new on.default(G).times(f!=null?f:0).toString(10),2);B(`$${R}`)},H=({value:G,floatValue:q})=>(!q||(0,on.default)(q).isLessThanOrEqualTo(nm))&&!bt(G);return(0,Q.useEffect)(()=>{s&&V&&(U(!1),s(P.value))},[P]),(0,Q.useEffect)(K,[y,b,f]),(0,Q.useEffect)(()=>{y!==A&&I(y)},[y]),Q.default.createElement("div",{ref:C,className:(0,va.default)(Kt.amountHolder,{[Kt.showUsdValue]:Boolean(N)},v)},Q.default.createElement(pm.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":o||p,decimalSeparator:".",disabled:Boolean(t),id:p,inputMode:"decimal",isAllowed:H,name:p,onBlur:r,onChange:O,onFocus:i,onKeyDown:d,placeholder:u,required:_,thousandSeparator:",",thousandsGroupStyle:"thousand",value:A,suffix:k,valueIsNumericString:!0,allowNegative:!1,autoFocus:T,className:(0,va.default)(E.input,Kt.amountInput,{[E.disabled]:Boolean(t)})}),N&&Q.default.createElement("span",{className:Kt.amountHolderUsd},Q.default.createElement("small",{"data-testid":`tokenPrice_${f}`},N!=="$0"?Q.default.createElement(Q.default.Fragment,null,"\u2248 "):Q.default.createElement(Q.default.Fragment,null),N),e))},sm=(0,Q.memo)(O_,(o,e)=>o.value===e.value&&o.usdPrice===e.usdPrice&&o.className===e.className&&o.disabled===e.disabled&&o.usdValue===e.usdValue);n();n();var ha=g(require("react"));n();n();var vt=g(require("react")),im=require("@fortawesome/free-solid-svg-icons"),cm=require("@fortawesome/react-fontawesome"),lm=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),mm=require("react-tooltip"),A2=require("react-tooltip/dist/react-tooltip.css");n();var q_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(q_));var tn={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"};var dm=({rewaLabel:o})=>vt.default.createElement("div",{className:tn.infoDust},vt.default.createElement(mm.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:tn.infoDustTooltip},"A minimal amount of"," ",vt.default.createElement(lm.FormatAmount,{rewaLabel:o,value:Jo,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),vt.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:tn.infoDustTrigger},vt.default.createElement(cm.FontAwesomeIcon,{icon:im.faInfoCircle,className:"i-icon"})));var um=({rewaLabel:o,amount:e,maxAmountMinusDust:t,isMaxClicked:r,tokenId:a})=>e===t&&r&&a===o?ha.default.createElement("span",{style:{marginLeft:"0.2rem"}},ha.default.createElement(dm,{rewaLabel:o})):null;n();n();var bm=g(require("react")),vm=require("@terradharitri/sdk-dapp/constants"),Ta=g(require("bignumber.js")),hm=g(require("classnames"));n();var xa=g(require("bignumber.js"));var _m=o=>{let e=new xa.default(o!=null?o:"0"),t=new xa.default(Jo),r=e.minus(t);return r.isGreaterThan(0)?r.toString(10):"0"};n();var W_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(W_));var fm={max:"dapp-core-component__maxButton-module__max"};n();var Ao=require("@terradharitri/sdk-dapp/constants"),gm=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),ym=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ht=({amount:o="0",decimals:e=0,digits:t=Ao.DIGITS,addCommas:r=!1,showLastNonZeroDecimal:a=!1})=>{if(o==null||!(0,ym.stringIsInteger)(o))return"0";let p=i=>(0,gm.formatAmount)({input:o,digits:i,decimals:e,addCommas:r,showLastNonZeroDecimal:a}),s=p(t);return s=parseFloat(s)>0?s:p(Ao.DIGITS),s=parseFloat(s)>0?s:p(Ao.DIGITS+2),s=parseFloat(s)>0?s:p(Ao.DIGITS+4),s=parseFloat(s)>0?s:p(Ao.DIGITS+6),s=parseFloat(s)>0?s:p(Ao.DIGITS+10),parseFloat(s)>0?s:p(Ao.DIGITS+14)};var xm=({token:o,rewaLabel:e,inputAmount:t,className:r,onMaxClick:a})=>{var _;let p=(o==null?void 0:o.identifier)===e,s=(_=o==null?void 0:o.balance)!=null?_:"0";if(s==="0")return null;let i=ht({amount:p?_m(s):s,decimals:(o==null?void 0:o.decimals)||vm.DECIMALS}),d=new Ta.default(t).isEqualTo(new Ta.default(i)),u=f=>{f.preventDefault(),a==null||a(i)};return d?null:bm.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,hm.default)(fm.max,r),onClick:u,onMouseDown:f=>{f.preventDefault()}},"Max")};n();n();var Me=g(require("react")),od=g(require("classnames")),td=g(require("react-select"));var Ea={};Qt(Ea,{Control:()=>K_,IndicatorsContainer:()=>j_,Input:()=>R_,Menu:()=>Z_,MenuList:()=>H_,DharitrIIcon:()=>Ym,Placeholder:()=>X_,SmallLoader:()=>z_,ValueComponent:()=>$m,getOption:()=>wa,getSingleValue:()=>Ca,getValueContainer:()=>Sa});n();n();var ka=g(require("react")),Tm=require("@fortawesome/free-solid-svg-icons"),km=require("@fortawesome/react-fontawesome"),z_=({show:o,color:e})=>o?ka.default.createElement("div",{className:"d-flex"},ka.default.createElement(km.FontAwesomeIcon,{icon:Tm.faSpinner,className:`fa-spin fast-spin ${e||"text-primary"}`})):null;n();n();var Sm=g(require("react")),wm=require("react-select");n();var $_=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($_));var D={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var R_=o=>Sm.default.createElement(wm.components.Input,w(x({},o),{className:D.dropdown,"data-testid":"tokenSelectInput"}));n();var Cm=g(require("react")),Em=require("react-select");var H_=o=>{let r=o,{rx:e}=r,t=Ho(r,["rx"]);return Cm.default.createElement(Em.components.MenuList,w(x({},t),{className:D.list}))};n();var rn=g(require("react")),Im=require("@fortawesome/free-solid-svg-icons"),Am=require("@fortawesome/react-fontawesome"),Nm=require("react-select");var Z_=o=>rn.default.createElement(Nm.components.Menu,w(x({},o),{className:D.menu}),o.selectProps.isLoading?rn.default.createElement("div",{className:D.loading},rn.default.createElement(Am.FontAwesomeIcon,{icon:Im.faCircleNotch,className:"fa-spin",size:"lg"})):o.children);n();var Fm=g(require("react")),Pm=require("react-select");var K_=o=>Fm.default.createElement(Pm.components.Control,w(x({},o),{className:D.control}));n();var Lm=g(require("react")),Dm=g(require("classnames")),Gm=require("react-select");var X_=o=>Lm.default.createElement(Gm.components.Placeholder,w(x({},o),{className:(0,Dm.default)(D.placeholder,{[D.focused]:o.isFocused})}));n();var Bm=g(require("react")),Vm=g(require("classnames")),Um=require("react-select");var j_=o=>Bm.default.createElement(Um.components.IndicatorsContainer,w(x({},o),{className:(0,Vm.default)(D.indicator,{[D.expanded]:o.selectProps.menuIsOpen})}));n();var Ie=g(require("react")),Mm=require("@fortawesome/free-solid-svg-icons"),Om=require("@fortawesome/react-fontawesome"),qm=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Wm=g(require("classnames")),zm=require("react-select");var J_=(Ot(),Zo(Mt)).default,$m=({RewaIcon:o,tokenId:e,icon:t})=>{let{isRewa:r}=(0,qm.getIdentifierType)(e);return r?Ie.default.createElement("span",{className:D.asset},o?Ie.default.createElement(o,{className:D.diamond}):Ie.default.createElement(J_,{className:D.diamond})):t?Ie.default.createElement("img",{src:t,className:D.asset}):Ie.default.createElement(Om.FontAwesomeIcon,{icon:Mm.faDiamond,className:D.asset})},Y_=({children:o})=>Ie.default.createElement("div",{className:D.wrapper},o),Sa=(o,e,t)=>r=>{var _,f;let{selectProps:a,isDisabled:p,children:s}=r,i=a.value,d=(f=(_=i==null?void 0:i.assets)==null?void 0:_.svgUrl)!=null?f:null,u=(0,Ie.useMemo)(()=>{let y=String(i==null?void 0:i.token.usdPrice);return y!=null&&y.includes("$")?i==null?void 0:i.token.usdPrice:`$${i==null?void 0:i.token.usdPrice}`},[i==null?void 0:i.token.usdPrice]);return Ie.default.createElement(zm.components.ValueContainer,w(x({},r),{className:D.container}),Ie.default.createElement("div",{className:(0,Wm.default)(D.icon,e)},Ie.default.createElement($m,{RewaIcon:t,rewaLabel:o,icon:d,isDisabled:p,tokenId:i==null?void 0:i.value})),Ie.default.createElement("div",{className:D.payload},Ie.default.createElement(Y_,null,s,(i==null?void 0:i.token.usdPrice)&&Ie.default.createElement("small",{className:D.price},u))))};n();var re=g(require("react")),Rm=require("@fortawesome/free-solid-svg-icons"),Hm=require("@fortawesome/react-fontawesome"),Zm=require("@terradharitri/sdk-dapp/constants"),Km=require("@terradharitri/sdk-dapp/UI/UsdValue"),Xm=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),jm=g(require("classnames")),Jm=require("react-select");var{default:Ym}=(Ot(),Zo(Mt)),wa=({RewaIcon:o,TokenTickerIcon:e,showBalanceUsdValue:t,showTokenPrice:r})=>a=>{var k,C,A,I;let{data:p,isSelected:s,isFocused:i,isDisabled:d,selectProps:u}=a,_=p,{isRewa:f}=(0,Xm.getIdentifierType)(_.value),y=_.token.assets?_.token.assets.svgUrl:null,b=ht({amount:_.token.balance,decimals:_.token.decimals||Zm.DECIMALS,addCommas:!0}),v=(C=(k=_.token)==null?void 0:k.usdPrice)==null?void 0:C.toString(),T=(I=(A=_.token)==null?void 0:A.valueUSD)==null?void 0:I.toString();return re.default.createElement("div",{"data-testid":`${a.value}-option`},re.default.createElement(Jm.components.Option,w(x({},a),{className:(0,jm.default)(D.option,{[D.selected]:s||i,[D.disabled]:d})}),re.default.createElement("div",{className:D.image},f?re.default.createElement("span",{className:D.icon},o?re.default.createElement(o,null):re.default.createElement(Ym,null)):y?re.default.createElement("img",{src:y,className:D.icon}):re.default.createElement("span",{className:D.icon},re.default.createElement(Hm.FontAwesomeIcon,{icon:Rm.faDiamond,className:D.diamond}))),re.default.createElement("div",{className:D.info},re.default.createElement("div",{className:D.left},re.default.createElement("div",{className:D.ticker},re.default.createElement("span",{className:D.value},u.inputValue?re.default.createElement(Kr,{text:_.token.ticker,highlight:u.inputValue}):_.token.ticker),e&&re.default.createElement(e,{token:_.token})),r&&re.default.createElement("small",{className:D.price},v)),re.default.createElement("div",{className:D.right},re.default.createElement("span",{className:D.value},b),t&&T&&re.default.createElement(Km.UsdValue,{usd:1,decimals:4,amount:T,"data-testid":"token-price-usd-value",className:D.price,addEqualSign:!1}))),re.default.createElement("div",{className:D.children},a.children)))};n();var nn=g(require("react")),Qm=g(require("classnames")),ed=require("react-select");var Ca=o=>e=>{let{selectProps:t,children:r}=e,a=t.value;return nn.default.createElement(ed.components.SingleValue,w(x({},e),{className:(0,Qm.default)(D.single,{[D.focused]:e.selectProps.menuIsOpen})}),nn.default.createElement("div",{className:D.ticker},r,o&&nn.default.createElement(o,{token:a==null?void 0:a.token})))};var{Menu:Q_,Control:ef,Input:of,MenuList:tf,IndicatorsContainer:rf,Placeholder:nf}=Ea,rd=o=>{let{name:e,options:t,isLoading:r=!1,className:a="",noOptionsMessage:p="No Tokens",disabledOption:s,rewaLabel:i,RewaIcon:d,disabled:u,value:_,onBlur:f,onFocus:y,onChange:b,onMenuOpen:v,chainId:T,wrapperClassName:k="",showTokenPrice:C=!1,showBalanceUsdValue:A=!1,selectedTokenIconClassName:I,TokenTickerIcon:V}=o,U=(0,Me.useRef)(null),M=[i,nr(T)],W=(0,Me.useMemo)(()=>wa({rewaLabel:i,RewaIcon:d,showTokenPrice:C,showBalanceUsdValue:A,TokenTickerIcon:V}),[]),N=(0,Me.useMemo)(()=>Sa(i,I,d),[]),B=(0,Me.useMemo)(()=>Ca(V),[]);(0,Me.useEffect)(()=>{let G=t.find(R=>R.value===(_==null?void 0:_.value)),q=(G==null?void 0:G.token.balance)===(_==null?void 0:_.token.balance);!G||q||b(G)},[t]);let O=G=>M.includes(G),K=G=>{var ue;let q=G.value===(s==null?void 0:s.value),R=O(G.value),se=O((ue=s==null?void 0:s.value)!=null?ue:"");return q||R&&se},H=(G,q)=>{let R=G.data.token.ticker?G.data.token.ticker.toLowerCase().includes(q.toLowerCase()):!1,se=G.data.token.name.toLowerCase().includes(q.toLowerCase());return Boolean(q)?R||se:!0};return Me.default.createElement("div",{"data-testid":`${e}Select`,className:`${k} ${r?"select-holder-loading":""}`},Me.default.createElement("label",{htmlFor:e,"data-testid":"tokenIdLabel",className:D.label},"Token"),Me.default.createElement(td.default,{ref:U,inputId:e,name:e,options:t,openMenuOnFocus:!0,isDisabled:u,isLoading:r,value:_,isOptionDisabled:K,onBlur:f,filterOption:H,onFocus:y,onChange:G=>{b(G),U&&U.current!==null&&U.current.blur()},isSearchable:o.isSearchable,maxMenuHeight:260,onMenuOpen:v,noOptionsMessage:()=>p,className:(0,od.default)(D.select,a,{[D.disabled]:o.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:Q_,Control:ef,Input:of,MenuList:tf,IndicatorsContainer:rf,ValueContainer:N,Placeholder:nf,Option:W,SingleValue:B}}))};n();n();var nd=g(require("react")),ad=g(require("classnames"));var pd=({hasErrors:o,className:e,error:t,"data-testid":r})=>o?nd.default.createElement("div",{className:(0,ad.default)(E.error,e),"data-testid":r},t):null;n();n();var pn=g(require("react")),sd=g(require("classnames"));n();var af=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(af));var an={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"};var id=({label:o,value:e,className:t,token:r,"data-testid":a,"data-value":p})=>pn.default.createElement("div",{"data-testid":a,"data-value":p,className:(0,sd.default)(an.balance,t)},pn.default.createElement("span",{className:an.label},o,": "),pn.default.createElement("span",{className:an.value},e)," ",r==null?void 0:r.ticker);var cd=({className:o,label:e,name:t,wrapperControlsClassName:r,tokenSelectProps:a,tokenBalanceProps:p,amountInputProps:s,amountErrorProps:i,maxButtonProps:d,readonly:u})=>Oe.default.createElement("div",{className:(0,sn.default)(no.amount,o)},Oe.default.createElement("div",{className:no.label},e&&Oe.default.createElement("label",{htmlFor:t,className:E.label,"data-testid":"amountLabel"},e),Oe.default.createElement(id,x({},p))),Oe.default.createElement("div",{className:(0,sn.default)(no.wrapper,r,{[no.error]:s.isInvalid||a.isInvalid||i.hasErrors,[no.disabled]:u})},Oe.default.createElement(sm,x({},s)),Oe.default.createElement("div",{className:(0,sn.default)(no.interaction,d.wrapperClassName)},d.isMaxButtonVisible&&Oe.default.createElement(xm,x({},d)),Oe.default.createElement("div",{className:no.select},Oe.default.createElement(rd,x({},a))))),Oe.default.createElement(pd,x({},i)));n();var Xt=g(require("react")),ld=require("@terradharitri/sdk-dapp/constants"),md=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");var dd=()=>{var ao,ee;let{checkInvalid:o}=ae(),{tokensInfo:e,amountInfo:t,formInfo:r}=z(),{readonly:a}=r,{networkConfig:{rewaLabel:p,chainId:s}}=ke(),{rewaPriceInUsd:i}=Ir(),{amount:d,onBlur:u,onChange:_,onMaxClicked:f,error:y,isInvalid:b,onFocus:v,maxAmountAvailable:T,isMaxClicked:k,isMaxButtonVisible:C,maxAmountMinusDust:A}=t,{allAvailableTokens:I,areTokensLoading:V,getTokens:U,isTokenIdInvalid:M,RewaIcon:W,nft:N,onChangeTokenId:B,tokenDetails:P,tokenId:O,tokenIdError:K}=e,H=I.map(fe=>({value:fe.identifier,label:String(fe.ticker),assets:fe.assets,token:fe})),{isRewa:G}=(0,md.getIdentifierType)(O),q=H.find(({value:fe})=>fe===O),R={id:"tokenId",value:q,name:"tokenId",isLoading:V,options:H,isSearchable:!0,onChange:fe=>{fe&&(B(fe.value),_(""))},onMenuOpen:U,disabled:Te("tokenId",a),error:K,isInvalid:M,rewaLabel:p,chainId:s,RewaIcon:W},se=(0,Xt.useMemo)(()=>Xt.default.createElement(um,{amount:d,rewaLabel:p,maxAmountMinusDust:A,tokenId:O,isMaxClicked:k}),[d,p,A,O,k]),xe={name:"amount",required:!0,value:d,placeholder:"Amount",handleBlur:u,"data-testid":"amount",handleChange:_,onFocus:v,usdPrice:G?i:void 0,error:y,isInvalid:b,InfoDustComponent:se},ue={token:P,inputAmount:d,onMaxClick:f,isMaxClicked:k,isMaxButtonVisible:C},_e=o("amount")&&!xe.value,$={hasErrors:xe.isInvalid||R.isInvalid||_e,error:xe.error||R.error,className:E.error,"data-testid":xe.error?`${"amount"}Error`:`${"tokenId"}Error`},Pe={"data-testid":`available-${(ao=N==null?void 0:N.identifier)!=null?ao:O}`,"data-value":`${T} ${(ee=N==null?void 0:N.identifier)!=null?ee:O}`,label:"Available",token:q==null?void 0:q.token,value:ht({amount:P.balance,decimals:P.decimals||ld.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(N==null?void 0:N.type)===Z.NftEnumType.NonFungibleDCDT?null:Xt.default.createElement(cd,{name:"tokenId",amountErrorProps:$,tokenSelectProps:R,amountInputProps:xe,tokenBalanceProps:Pe,maxButtonProps:ue,label:"Amount",readonly:a})};n();n();var No=g(require("react")),Na=g(require("classnames"));n();n();n();var qe=g(require("react")),ln=require("@fortawesome/free-solid-svg-icons"),Ia=require("@fortawesome/react-fontawesome"),ud=require("formik");n();n();var cn=()=>{let{formInfo:{isRewaTransaction:o,readonly:e},dataFieldInfo:{isAdvancedModeEnabled:t}}=z();return t?!1:!o||Te("data",e)};n();var pf=`.dapp-core-component__styles-module__advanced {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pf));var jt={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"};var _d=()=>{let{formInfo:{readonly:o,isRewaTransaction:e}}=z(),{setFieldValue:t,values:r}=(0,ud.useFormikContext)(),[a,p]=(0,qe.useState)(!1),[s,i]=(0,qe.useState)(!1),d=cn(),u=!a&&!o&&d&&Boolean(r.data),_=()=>{p(!0),t("isAdvancedModeEnabled",!0)},f=()=>{i(!0),setTimeout(()=>{i(!1)},5e3)};return(0,qe.useEffect)(()=>{!e&&a&&p(!1)},[e,r.amount]),u?s?qe.default.createElement("div",{className:jt.advanced,"data-testid":"confirmAdvancedMode",onClick:_},qe.default.createElement(Ia.FontAwesomeIcon,{icon:ln.faCheck,className:"i-icon"}),qe.default.createElement("span",{className:jt.advancedText},"Confirm")):qe.default.createElement("div",{"data-testid":"enableAdvancedMode",className:jt.advanced,onClick:f},qe.default.createElement(Ia.FontAwesomeIcon,{icon:ln.faScrewdriverWrench,className:"i-icon"}),qe.default.createElement("span",{className:jt.advancedText},"Advanced")):null};n();var sf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sf));var Aa={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"};var fd=({className:o})=>{let{dataFieldInfo:{data:e,dataError:t,isDataInvalid:r,onChange:a,onBlur:p}}=z(),s=cn();return No.default.createElement("div",{className:(0,Na.default)(Aa.data,o)},No.default.createElement("div",{className:no.label},No.default.createElement("label",{htmlFor:"data",className:E.label},"Data"),No.default.createElement(_d,null)),No.default.createElement("div",{className:Aa.wrapper},No.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:s,"data-testid":"data",value:e,onBlur:p,onChange:a,spellCheck:"false",placeholder:"Add transaction data",className:(0,Na.default)(E.textarea,{[E.invalid]:r,[E.disabled]:s})})),r&&No.default.createElement("div",{className:E.error,"data-testid":"dataError"},t))};n();n();n();var bo=g(require("react")),Fo=g(require("classnames"));n();var cf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cf));var he={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"};var gd=({disabled:o,percentageValue:e=0,onPercentageChange:t,className:r})=>{let a=[0,25,50,75,100],p="amountSlider";return bo.default.createElement("div",{className:(0,Fo.default)(he.amountSlider,r)},bo.default.createElement("div",{className:he.amountSliderRange},bo.default.createElement("input",{name:p,id:p,"data-testid":p,type:"range",disabled:o,min:0,max:100,value:String(e),className:(0,Fo.default)(he.amountSliderInput,{[he.disabled]:o}),onChange:s=>{t(Number(s.target.value))}}),bo.default.createElement("div",{style:{width:`${e}%`},className:(0,Fo.default)(he.amountSliderCompletion,{[he.disabled]:o})}),a.map(s=>bo.default.createElement("span",{onClick:()=>t(s),key:`breakpoint-${s}`,style:{left:`${s}%`},className:(0,Fo.default)(he.amountSliderBreakpoint,{[he.completed]:s<=e,[he.disabled]:o})})),a.map(s=>bo.default.createElement("span",{style:{left:`${s}%`},key:`breakpoint-${s}`,onClick:()=>t(s),className:(0,Fo.default)(he.amountSliderPercentage,{[he.exact]:s===e,[he.disabled]:o})},s,"%")),bo.default.createElement("span",{style:{left:`${e}%`},className:(0,Fo.default)(he.amountSliderThumb,{[he.disabled]:o})},bo.default.createElement("strong",{className:(0,Fo.default)(he.amountSliderThumbPercentage,{[he.hidden]:a.includes(e)})},Math.round(e),"%"))))};n();n();var ze=g(require("react")),yd=require("@fortawesome/free-solid-svg-icons"),bd=require("@fortawesome/react-fontawesome"),vd=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),hd=require("@terradharitri/sdk-dapp/UI/CopyButton"),xd=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),Td=require("@terradharitri/sdk-dapp/UI/Trim"),kd=g(require("classnames")),Sd=require("formik");n();var lf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(lf));var We={"can-transfer-warning":"dapp-core-component__styles-module__can-transfer-warning",canTransferWarning:"dapp-core-component__styles-module__can-transfer-warning","can-transfer-warning-heading":"dapp-core-component__styles-module__can-transfer-warning-heading",canTransferWarningHeading:"dapp-core-component__styles-module__can-transfer-warning-heading","can-transfer-warning-icon":"dapp-core-component__styles-module__can-transfer-warning-icon",canTransferWarningIcon:"dapp-core-component__styles-module__can-transfer-warning-icon","can-transfer-warning-label":"dapp-core-component__styles-module__can-transfer-warning-label",canTransferWarningLabel:"dapp-core-component__styles-module__can-transfer-warning-label","can-transfer-warning-addresses":"dapp-core-component__styles-module__can-transfer-warning-addresses",canTransferWarningAddresses:"dapp-core-component__styles-module__can-transfer-warning-addresses","can-transfer-warning-address":"dapp-core-component__styles-module__can-transfer-warning-address",canTransferWarningAddress:"dapp-core-component__styles-module__can-transfer-warning-address","can-transfer-warning-address-explorer":"dapp-core-component__styles-module__can-transfer-warning-address-explorer",canTransferWarningAddressExplorer:"dapp-core-component__styles-module__can-transfer-warning-address-explorer","can-transfer-warning-address-copy":"dapp-core-component__styles-module__can-transfer-warning-address-copy",canTransferWarningAddressCopy:"dapp-core-component__styles-module__can-transfer-warning-address-copy"};var wd=o=>{let{className:e}=o,{values:{nft:t,address:r}}=(0,Sd.useFormikContext)();return!(t!=null&&t.allowedReceivers)||t.allowedReceivers.includes(r)?null:ze.default.createElement("div",{className:(0,kd.default)(We.canTransferWarning,e),"data-testid":"canTransferWarning"},ze.default.createElement("div",{className:We.canTransferWarningHeading},ze.default.createElement(bd.FontAwesomeIcon,{icon:yd.faExclamationTriangle,className:We.canTransferWarningIcon,size:"lg"}),ze.default.createElement("div",{className:We.canTransferWarningTitle},ze.default.createElement("div",{className:We.canTransferWarningLabel},"Warning!"),ze.default.createElement("div",{className:We.canTransferWarningMessage},np))),ze.default.createElement("div",{className:We.canTransferWarningAddresses},t.allowedReceivers.map(a=>ze.default.createElement("div",{className:We.canTransferWarningAddress,key:a},ze.default.createElement(Td.Trim,{text:a,className:We.canTransferWarningAddressTrim}),ze.default.createElement(hd.CopyButton,{text:a,className:We.canTransferWarningAddressCopy}),ze.default.createElement(xd.ExplorerLink,{page:`/${vd.ACCOUNTS_ENDPOINT}/${a}`,className:We.canTransferWarningAddressExplorer})))))};n();n();var zo=g(require("react")),Cd=require("@fortawesome/free-solid-svg-icons"),Ed=require("@fortawesome/react-fontawesome"),Id=g(require("classnames"));n();var mf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(mf));var Wo={"wrewa-warning":"dapp-core-component__styles-module__wrewa-warning",wrewaWarning:"dapp-core-component__styles-module__wrewa-warning","wrewa-warning-heading":"dapp-core-component__styles-module__wrewa-warning-heading",wrewaWarningHeading:"dapp-core-component__styles-module__wrewa-warning-heading","wrewa-warning-icon":"dapp-core-component__styles-module__wrewa-warning-icon",wrewaWarningIcon:"dapp-core-component__styles-module__wrewa-warning-icon","wrewa-warning-label":"dapp-core-component__styles-module__wrewa-warning-label",wrewaWarningLabel:"dapp-core-component__styles-module__wrewa-warning-label"};var Ad=o=>{let{tokenId:e,className:t}=o,{networkConfig:{chainId:r}}=ke();return nr(r)!==e?null:zo.default.createElement("div",{className:(0,Id.default)(Wo.wrewaWarning,t)},zo.default.createElement("div",{className:Wo.wrewaWarningHeading},zo.default.createElement(Ed.FontAwesomeIcon,{icon:Cd.faExclamationTriangle,className:Wo.wrewaWarningIcon,size:"lg"}),zo.default.createElement("div",{className:Wo.wrewaWarningTitle},zo.default.createElement("div",{className:Wo.wrewaWarningLabel},"Warning!"),zo.default.createElement("div",{className:Wo.wrewaWarningMessage},ap))))};n();var df=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(df));var mn={form:"dapp-core-component__form-module__form",formFieldset:"dapp-core-component__form-module__formFieldset",formWrapper:"dapp-core-component__form-module__formWrapper","form-buttons":"dapp-core-component__form-module__form-buttons",formButtons:"dapp-core-component__form-module__form-buttons"};n();n();var Nd=o=>{var e,t;return((e=o.nft)==null?void 0:e.type)===Z.NftEnumType.NonFungibleDCDT?"NFT":((t=o.nft)==null?void 0:t.type)===Z.NftEnumType.SemiFungibleDCDT?"SFT":o.tokenDetails.ticker};var Ld=({className:o,GuardianScreen:e})=>{let{formInfo:t,accountInfo:r,amountInfo:a,tokensInfo:p}=z(),{values:s}=(0,Pd.useFormikContext)(),{txType:i,tokenId:d,address:u,balance:_,chainId:f,ledger:y}=s,{nft:b}=p,[v,T]=(0,Y.useState)(),{amountRange:k,onSetAmountPercentage:C}=a,{renderKey:A,onValidateForm:I,onInvalidateForm:V,onCloseForm:U,onSubmitForm:M,onPreviewClick:W,areValidatedValuesReady:N,isGuardianScreenVisible:B,uiOptions:P,readonly:O,setGuardedTransaction:K,setHasGuardianScreen:H}=t,G=()=>S(void 0,null,function*(){if(!N)return;let _e=yield lr(s);try{let $=yield fr({address:u,balance:_,chainId:f,nonce:r.nonce,values:_e});$.setVersion(dn.TransactionVersion.withTxOptions());let Pe=x({guarded:!0},y?{hashSign:!0}:{});$.setOptions(dn.TransactionOptions.withOptions(Pe)),T({0:$})}catch($){T({})}});(0,Y.useEffect)(()=>{G()},[s,N]),(0,Y.useEffect)(()=>{H(Boolean(e))},[]),(0,Y.useEffect)(()=>{if(!v)return;let _e=v[0];_e&&K(_e)},[v]);let q=_e=>{_e.preventDefault(),U()},R=i==="NonFungibleDCDT",se=i==="SemiFungibleDCDT",ue={onSignTransaction:()=>S(void 0,null,function*(){setTimeout(()=>{M()})}),onPrev:V,address:u,title:"",className:o,signedTransactions:v,setSignedTransactions:T,signStepInnerClasses:{}};return e&&B?Y.default.createElement(e,x({},ue)):N?Y.default.createElement(Rc,{providerType:r.providerType}):Y.default.createElement("form",{key:A,onSubmit:I,className:(0,Fd.default)(mn.form,o)},Y.default.createElement("fieldset",{className:mn.formFieldset},(R||se)&&b&&Y.default.createElement(Rr,x({onClick:W,txType:i},b)),Y.default.createElement(Gl,null),se?Y.default.createElement(Vl,null):Y.default.createElement(dd,null),(P==null?void 0:P.showAmountSlider)&&!R&&Y.default.createElement(gd,{onPercentageChange:C,percentageValue:k,disabled:Boolean(O)}),Y.default.createElement(Ad,{tokenId:d}),Y.default.createElement(wd,null),Y.default.createElement(tm,null),Y.default.createElement(fd,null)),Y.default.createElement("div",{className:mn.formButtons},Y.default.createElement("button",{type:"button",id:"sendBtn","data-testid":"sendBtn",onClick:I,className:E.buttonSend},"Send ",Nd(p)),Y.default.createElement("button",{type:"button",id:"closeButton","data-testid":"returnToWalletBtn",onClick:q,className:E.buttonText},"Cancel")))};n();var xt=require("@terradharitri/sdk-dapp/constants/index"),Vd=require("@terradharitri/sdk-dapp/types/enums.types");n();n();var Dd=require("@terradharitri/sdk-dapp/constants/index"),Gd=require("@terradharitri/sdk-dapp/types/enums.types"),Bd="drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c",cF=Dd.fallbackNetworkConfigurations[Gd.EnvironmentsEnum.testnet];var uf=xt.fallbackNetworkConfigurations[Vd.EnvironmentsEnum.testnet],Tt={rewaLabel:xt.TESTNET_REWA_LABEL,address:Bd,chainId:xt.TESTNET_CHAIN_ID,balance:"812350000000000000",nonce:0,networkConfig:uf};n();var un=require("@terradharitri/sdk-dapp/constants/index"),Fa={receiver:"",amount:"",tokenId:un.TESTNET_REWA_LABEL,gasLimit:String(un.GAS_LIMIT),gasPrice:"0.000000001",data:""};var _f=Ud.fallbackNetworkConfigurations[_n.EnvironmentsEnum.testnet],Od=({formConfigValues:o=Fa,balance:e=Tt.balance,address:t=Tt.address,chainId:r=Tt.chainId,ledger:a,isGuarded:p,GuardianScreen:s})=>{var C;let i=uc(w(x({configValues:o},Tt),{balance:e,address:t})),[d,u]=(0,$o.useState)(Boolean(s)),[_,f]=(0,$o.useState)(Boolean(o.skipToConfirm));if(!i)return $o.default.createElement(Md.Loader,{"data-testid":"loader"});let y=o,{nft:b,gasLimitCostError:v}=i,T=x(w(x({},y),{tokenId:String(y.tokenId),txType:Wp({nft:b,tokenId:String(y.tokenId)}),address:t,chainId:r,balance:e}),a?{ledger:x({},a)}:{}),k={networkConfig:w(x({},_f),{skipFetchFromServer:!0}),initGasLimitError:v,initialValues:T,onFormSubmit:()=>"log submit",accountInfo:{address:t,isGuarded:p,nonce:Tt.nonce,balance:e,providerType:_n.LoginMethodsEnum.extra},formInfo:{prefilledForm:!1,skipToConfirm:!1,readonly:!1,isFormSubmitted:_,setIsFormSubmitted:f,onCloseForm:()=>"",setGuardedTransaction:A=>{console.log(A)},setHasGuardianScreen:u,hasGuardianScreen:d},tokensInfo:{initialNft:b,initialTokens:(C=i==null?void 0:i.computedTokens.map(A=>{var I;return w(x({},A),{ledgerSignature:((I=A.assets)==null?void 0:I.ledgerSignature)||"",decimals:A.decimals})}))!=null?C:[]}};return $o.default.createElement(Ri,x({},k),$o.default.createElement(Ld,{GuardianScreen:s}))};var ff=o=>(0,Wd.render)(qd.default.createElement(Od,x({},o)));n();function gf(o){var r,a;let e=(r=o.querySelector('span[data-testid="formatAmountInt"]'))==null?void 0:r.textContent,t=(a=o.querySelector('span[data-testid="formatAmountDecimals"]'))==null?void 0:a.textContent;return{intAmount:e,decimalAmount:t}}n();var fn=require("@testing-library/react");var yf=({methods:o})=>a=>S(void 0,[a],function*({amount:e,fee:t,data:r}){var d;let p=o.getByTestId("feeLimit");yield(0,fn.waitFor)(()=>{expect(p.textContent).toContain(t)});let s=o.getByTestId("sendBtn");fn.fireEvent.click(s);let i=yield o.findByTestId("confirmScreen");e!=null&&expect(o.getByTestId("confirmAmount").textContent).toBe(e),t!=null&&expect((d=o.getByTestId("confirmFee").textContent)==null?void 0:d.toString()).toContain(t),r!=null&&expect(o.getByTestId("confirmData").textContent).toBe(r),expect(i).toBeDefined()});0&&(module.exports={formConfiguration,formattedAmountSelector,renderForm,sendAndConfirmTest});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
