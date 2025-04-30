"use strict";var tu=Object.create;var Nt=Object.defineProperty,ru=Object.defineProperties,nu=Object.getOwnPropertyDescriptor,au=Object.getOwnPropertyDescriptors,pu=Object.getOwnPropertyNames,lr=Object.getOwnPropertySymbols,su=Object.getPrototypeOf,hn=Object.prototype.hasOwnProperty,Bp=Object.prototype.propertyIsEnumerable;var Gp=(o,e,t)=>e in o?Nt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,v=(o,e)=>{for(var t in e||(e={}))hn.call(e,t)&&Gp(o,t,e[t]);if(lr)for(var t of lr(e))Bp.call(e,t)&&Gp(o,t,e[t]);return o},w=(o,e)=>ru(o,au(e));var ot=(o,e)=>{var t={};for(var r in o)hn.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&lr)for(var r of lr(o))e.indexOf(r)<0&&Bp.call(o,r)&&(t[r]=o[r]);return t};var Tn=(o,e)=>()=>(o&&(e=o(o=0)),e);var mr=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),dr=(o,e)=>{for(var t in e)Nt(o,t,{get:e[t],enumerable:!0})},Vp=(o,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of pu(e))!hn.call(o,a)&&a!==t&&Nt(o,a,{get:()=>e[a],enumerable:!(r=nu(e,a))||r.enumerable});return o};var b=(o,e,t)=>(t=o!=null?tu(su(o)):{},Vp(e||!o||!o.__esModule?Nt(t,"default",{value:o,enumerable:!0}):t,o)),tt=o=>Vp(Nt({},"__esModule",{value:!0}),o);var S=(o,e,t)=>new Promise((r,a)=>{var p=d=>{try{i(t.next(d))}catch(_){a(_)}},s=d=>{try{i(t.throw(d))}catch(_){a(_)}},i=d=>d.done?r(d.value):Promise.resolve(d.value).then(p,s);i((t=t.apply(o,e)).next())});var Op=mr(ur=>{"use strict";n();ur.byteLength=cu;ur.toByteArray=mu;ur.fromByteArray=_u;var je=[],Ge=[],iu=typeof Uint8Array!="undefined"?Uint8Array:Array,kn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Go=0,Up=kn.length;Go<Up;++Go)je[Go]=kn[Go],Ge[kn.charCodeAt(Go)]=Go;var Go,Up;Ge["-".charCodeAt(0)]=62;Ge["_".charCodeAt(0)]=63;function Mp(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=o.indexOf("=");t===-1&&(t=e);var r=t===e?0:4-t%4;return[t,r]}function cu(o){var e=Mp(o),t=e[0],r=e[1];return(t+r)*3/4-r}function lu(o,e,t){return(e+t)*3/4-t}function mu(o){var e,t=Mp(o),r=t[0],a=t[1],p=new iu(lu(o,r,a)),s=0,i=a>0?r-4:r,d;for(d=0;d<i;d+=4)e=Ge[o.charCodeAt(d)]<<18|Ge[o.charCodeAt(d+1)]<<12|Ge[o.charCodeAt(d+2)]<<6|Ge[o.charCodeAt(d+3)],p[s++]=e>>16&255,p[s++]=e>>8&255,p[s++]=e&255;return a===2&&(e=Ge[o.charCodeAt(d)]<<2|Ge[o.charCodeAt(d+1)]>>4,p[s++]=e&255),a===1&&(e=Ge[o.charCodeAt(d)]<<10|Ge[o.charCodeAt(d+1)]<<4|Ge[o.charCodeAt(d+2)]>>2,p[s++]=e>>8&255,p[s++]=e&255),p}function du(o){return je[o>>18&63]+je[o>>12&63]+je[o>>6&63]+je[o&63]}function uu(o,e,t){for(var r,a=[],p=e;p<t;p+=3)r=(o[p]<<16&16711680)+(o[p+1]<<8&65280)+(o[p+2]&255),a.push(du(r));return a.join("")}function _u(o){for(var e,t=o.length,r=t%3,a=[],p=16383,s=0,i=t-r;s<i;s+=p)a.push(uu(o,s,s+p>i?i:s+p));return r===1?(e=o[t-1],a.push(je[e>>2]+je[e<<4&63]+"==")):r===2&&(e=(o[t-2]<<8)+o[t-1],a.push(je[e>>10]+je[e>>4&63]+je[e<<2&63]+"=")),a.join("")}});var Wp=mr(Sn=>{n();Sn.read=function(o,e,t,r,a){var p,s,i=a*8-r-1,d=(1<<i)-1,_=d>>1,u=-7,f=t?a-1:0,g=t?-1:1,y=o[e+f];for(f+=g,p=y&(1<<-u)-1,y>>=-u,u+=i;u>0;p=p*256+o[e+f],f+=g,u-=8);for(s=p&(1<<-u)-1,p>>=-u,u+=r;u>0;s=s*256+o[e+f],f+=g,u-=8);if(p===0)p=1-_;else{if(p===d)return s?NaN:(y?-1:1)*(1/0);s=s+Math.pow(2,r),p=p-_}return(y?-1:1)*s*Math.pow(2,p-r)};Sn.write=function(o,e,t,r,a,p){var s,i,d,_=p*8-a-1,u=(1<<_)-1,f=u>>1,g=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=r?0:p-1,x=r?1:-1,T=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(i=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-s))<1&&(s--,d*=2),s+f>=1?e+=g/d:e+=g*Math.pow(2,1-f),e*d>=2&&(s++,d/=2),s+f>=u?(i=0,s=u):s+f>=1?(i=(e*d-1)*Math.pow(2,a),s=s+f):(i=e*Math.pow(2,f-1)*Math.pow(2,a),s=0));a>=8;o[t+y]=i&255,y+=x,i/=256,a-=8);for(s=s<<a|i,_+=a;_>0;o[t+y]=s&255,y+=x,s/=256,_-=8);o[t+y-x]|=T*128}});var es=mr(nt=>{"use strict";n();var wn=Op(),rt=Wp(),qp=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;nt.Buffer=h;nt.SlowBuffer=xu;nt.INSPECT_MAX_BYTES=50;var _r=2147483647;nt.kMaxLength=_r;h.TYPED_ARRAY_SUPPORT=fu();!h.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function fu(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(t){return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.buffer}});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.byteOffset}});function so(o){if(o>_r)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,h.prototype),e}function h(o,e,t){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return An(o)}return Rp(o,e,t)}h.poolSize=8192;function Rp(o,e,t){if(typeof o=="string")return yu(o,e);if(ArrayBuffer.isView(o))return bu(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(Je(o,ArrayBuffer)||o&&Je(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Je(o,SharedArrayBuffer)||o&&Je(o.buffer,SharedArrayBuffer)))return En(o,e,t);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=o.valueOf&&o.valueOf();if(r!=null&&r!==o)return h.from(r,e,t);var a=vu(o);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return h.from(o[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}h.from=function(o,e,t){return Rp(o,e,t)};Object.setPrototypeOf(h.prototype,Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function Zp(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function gu(o,e,t){return Zp(o),o<=0?so(o):e!==void 0?typeof t=="string"?so(o).fill(e,t):so(o).fill(e):so(o)}h.alloc=function(o,e,t){return gu(o,e,t)};function An(o){return Zp(o),so(o<0?0:Nn(o)|0)}h.allocUnsafe=function(o){return An(o)};h.allocUnsafeSlow=function(o){return An(o)};function yu(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=Hp(o,e)|0,r=so(t),a=r.write(o,e);return a!==t&&(r=r.slice(0,a)),r}function Cn(o){for(var e=o.length<0?0:Nn(o.length)|0,t=so(e),r=0;r<e;r+=1)t[r]=o[r]&255;return t}function bu(o){if(Je(o,Uint8Array)){var e=new Uint8Array(o);return En(e.buffer,e.byteOffset,e.byteLength)}return Cn(o)}function En(o,e,t){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return e===void 0&&t===void 0?r=new Uint8Array(o):t===void 0?r=new Uint8Array(o,e):r=new Uint8Array(o,e,t),Object.setPrototypeOf(r,h.prototype),r}function vu(o){if(h.isBuffer(o)){var e=Nn(o.length)|0,t=so(e);return t.length===0||o.copy(t,0,0,e),t}if(o.length!==void 0)return typeof o.length!="number"||Fn(o.length)?so(0):Cn(o);if(o.type==="Buffer"&&Array.isArray(o.data))return Cn(o.data)}function Nn(o){if(o>=_r)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+_r.toString(16)+" bytes");return o|0}function xu(o){return+o!=o&&(o=0),h.alloc(+o)}h.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==h.prototype};h.compare=function(e,t){if(Je(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),Je(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,a=t.length,p=0,s=Math.min(r,a);p<s;++p)if(e[p]!==t[p]){r=e[p],a=t[p];break}return r<a?-1:a<r?1:0};h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return h.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var a=h.allocUnsafe(t),p=0;for(r=0;r<e.length;++r){var s=e[r];if(Je(s,Uint8Array))p+s.length>a.length?h.from(s).copy(a,p):Uint8Array.prototype.set.call(a,s,p);else if(h.isBuffer(s))s.copy(a,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=s.length}return a};function Hp(o,e){if(h.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||Je(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var t=o.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return In(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Qp(o).length;default:if(a)return r?-1:In(o).length;e=(""+e).toLowerCase(),a=!0}}h.byteLength=Hp;function hu(o,e,t){var r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return Fu(this,e,t);case"utf8":case"utf-8":return Xp(this,e,t);case"ascii":return Au(this,e,t);case"latin1":case"binary":return Nu(this,e,t);case"base64":return Eu(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Lu(this,e,t);default:if(r)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),r=!0}}h.prototype._isBuffer=!0;function Bo(o,e,t){var r=o[e];o[e]=o[t],o[t]=r}h.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)Bo(this,t,t+1);return this};h.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)Bo(this,t,t+3),Bo(this,t+1,t+2);return this};h.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)Bo(this,t,t+7),Bo(this,t+1,t+6),Bo(this,t+2,t+5),Bo(this,t+3,t+4);return this};h.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Xp(this,0,e):hu.apply(this,arguments)};h.prototype.toLocaleString=h.prototype.toString;h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:h.compare(this,e)===0};h.prototype.inspect=function(){var e="",t=nt.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};qp&&(h.prototype[qp]=h.prototype.inspect);h.prototype.compare=function(e,t,r,a,p){if(Je(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),r===void 0&&(r=e?e.length:0),a===void 0&&(a=0),p===void 0&&(p=this.length),t<0||r>e.length||a<0||p>this.length)throw new RangeError("out of range index");if(a>=p&&t>=r)return 0;if(a>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,a>>>=0,p>>>=0,this===e)return 0;for(var s=p-a,i=r-t,d=Math.min(s,i),_=this.slice(a,p),u=e.slice(t,r),f=0;f<d;++f)if(_[f]!==u[f]){s=_[f],i=u[f];break}return s<i?-1:i<s?1:0};function Kp(o,e,t,r,a){if(o.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Fn(t)&&(t=a?0:o.length-1),t<0&&(t=o.length+t),t>=o.length){if(a)return-1;t=o.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof e=="string"&&(e=h.from(e,r)),h.isBuffer(e))return e.length===0?-1:zp(o,e,t,r,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(o,e,t):Uint8Array.prototype.lastIndexOf.call(o,e,t):zp(o,[e],t,r,a);throw new TypeError("val must be string, number or Buffer")}function zp(o,e,t,r,a){var p=1,s=o.length,i=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(o.length<2||e.length<2)return-1;p=2,s/=2,i/=2,t/=2}function d(y,x){return p===1?y[x]:y.readUInt16BE(x*p)}var _;if(a){var u=-1;for(_=t;_<s;_++)if(d(o,_)===d(e,u===-1?0:_-u)){if(u===-1&&(u=_),_-u+1===i)return u*p}else u!==-1&&(_-=_-u),u=-1}else for(t+i>s&&(t=s-i),_=t;_>=0;_--){for(var f=!0,g=0;g<i;g++)if(d(o,_+g)!==d(e,g)){f=!1;break}if(f)return _}return-1}h.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1};h.prototype.indexOf=function(e,t,r){return Kp(this,e,t,r,!0)};h.prototype.lastIndexOf=function(e,t,r){return Kp(this,e,t,r,!1)};function Tu(o,e,t,r){t=Number(t)||0;var a=o.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var p=e.length;r>p/2&&(r=p/2);for(var s=0;s<r;++s){var i=parseInt(e.substr(s*2,2),16);if(Fn(i))return s;o[t+s]=i}return s}function ku(o,e,t,r){return fr(In(e,o.length-t),o,t,r)}function Su(o,e,t,r){return fr(Gu(e),o,t,r)}function wu(o,e,t,r){return fr(Qp(e),o,t,r)}function Cu(o,e,t,r){return fr(Bu(e,o.length-t),o,t,r)}h.prototype.write=function(e,t,r,a){if(t===void 0)a="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")a=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var s=!1;;)switch(a){case"hex":return Tu(this,e,t,r);case"utf8":case"utf-8":return ku(this,e,t,r);case"ascii":case"latin1":case"binary":return Su(this,e,t,r);case"base64":return wu(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Cu(this,e,t,r);default:if(s)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),s=!0}};h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Eu(o,e,t){return e===0&&t===o.length?wn.fromByteArray(o):wn.fromByteArray(o.slice(e,t))}function Xp(o,e,t){t=Math.min(o.length,t);for(var r=[],a=e;a<t;){var p=o[a],s=null,i=p>239?4:p>223?3:p>191?2:1;if(a+i<=t){var d,_,u,f;switch(i){case 1:p<128&&(s=p);break;case 2:d=o[a+1],(d&192)===128&&(f=(p&31)<<6|d&63,f>127&&(s=f));break;case 3:d=o[a+1],_=o[a+2],(d&192)===128&&(_&192)===128&&(f=(p&15)<<12|(d&63)<<6|_&63,f>2047&&(f<55296||f>57343)&&(s=f));break;case 4:d=o[a+1],_=o[a+2],u=o[a+3],(d&192)===128&&(_&192)===128&&(u&192)===128&&(f=(p&15)<<18|(d&63)<<12|(_&63)<<6|u&63,f>65535&&f<1114112&&(s=f))}}s===null?(s=65533,i=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|s&1023),r.push(s),a+=i}return Iu(r)}var $p=4096;function Iu(o){var e=o.length;if(e<=$p)return String.fromCharCode.apply(String,o);for(var t="",r=0;r<e;)t+=String.fromCharCode.apply(String,o.slice(r,r+=$p));return t}function Au(o,e,t){var r="";t=Math.min(o.length,t);for(var a=e;a<t;++a)r+=String.fromCharCode(o[a]&127);return r}function Nu(o,e,t){var r="";t=Math.min(o.length,t);for(var a=e;a<t;++a)r+=String.fromCharCode(o[a]);return r}function Fu(o,e,t){var r=o.length;(!e||e<0)&&(e=0),(!t||t<0||t>r)&&(t=r);for(var a="",p=e;p<t;++p)a+=Vu[o[p]];return a}function Lu(o,e,t){for(var r=o.slice(e,t),a="",p=0;p<r.length-1;p+=2)a+=String.fromCharCode(r[p]+r[p+1]*256);return a}h.prototype.slice=function(e,t){var r=this.length;e=~~e,t=t===void 0?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);var a=this.subarray(e,t);return Object.setPrototypeOf(a,h.prototype),a};function de(o,e,t){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>t)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||de(e,t,this.length);for(var a=this[e],p=1,s=0;++s<t&&(p*=256);)a+=this[e+s]*p;return a};h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||de(e,t,this.length);for(var a=this[e+--t],p=1;t>0&&(p*=256);)a+=this[e+--t]*p;return a};h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e=e>>>0,t||de(e,1,this.length),this[e]};h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||de(e,2,this.length),this[e]|this[e+1]<<8};h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||de(e,2,this.length),this[e]<<8|this[e+1]};h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||de(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||de(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};h.prototype.readIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||de(e,t,this.length);for(var a=this[e],p=1,s=0;++s<t&&(p*=256);)a+=this[e+s]*p;return p*=128,a>=p&&(a-=Math.pow(2,8*t)),a};h.prototype.readIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||de(e,t,this.length);for(var a=t,p=1,s=this[e+--a];a>0&&(p*=256);)s+=this[e+--a]*p;return p*=128,s>=p&&(s-=Math.pow(2,8*t)),s};h.prototype.readInt8=function(e,t){return e=e>>>0,t||de(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};h.prototype.readInt16LE=function(e,t){e=e>>>0,t||de(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};h.prototype.readInt16BE=function(e,t){e=e>>>0,t||de(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};h.prototype.readInt32LE=function(e,t){return e=e>>>0,t||de(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};h.prototype.readInt32BE=function(e,t){return e=e>>>0,t||de(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};h.prototype.readFloatLE=function(e,t){return e=e>>>0,t||de(e,4,this.length),rt.read(this,e,!0,23,4)};h.prototype.readFloatBE=function(e,t){return e=e>>>0,t||de(e,4,this.length),rt.read(this,e,!1,23,4)};h.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||de(e,8,this.length),rt.read(this,e,!0,52,8)};h.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||de(e,8,this.length),rt.read(this,e,!1,52,8)};function Fe(o,e,t,r,a,p){if(!h.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<p)throw new RangeError('"value" argument is out of bounds');if(t+r>o.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,r,a){if(e=+e,t=t>>>0,r=r>>>0,!a){var p=Math.pow(2,8*r)-1;Fe(this,e,t,r,p,0)}var s=1,i=0;for(this[t]=e&255;++i<r&&(s*=256);)this[t+i]=e/s&255;return t+r};h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,r,a){if(e=+e,t=t>>>0,r=r>>>0,!a){var p=Math.pow(2,8*r)-1;Fe(this,e,t,r,p,0)}var s=r-1,i=1;for(this[t+s]=e&255;--s>=0&&(i*=256);)this[t+s]=e/i&255;return t+r};h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,r){return e=+e,t=t>>>0,r||Fe(this,e,t,1,255,0),this[t]=e&255,t+1};h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||Fe(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||Fe(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||Fe(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||Fe(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};h.prototype.writeIntLE=function(e,t,r,a){if(e=+e,t=t>>>0,!a){var p=Math.pow(2,8*r-1);Fe(this,e,t,r,p-1,-p)}var s=0,i=1,d=0;for(this[t]=e&255;++s<r&&(i*=256);)e<0&&d===0&&this[t+s-1]!==0&&(d=1),this[t+s]=(e/i>>0)-d&255;return t+r};h.prototype.writeIntBE=function(e,t,r,a){if(e=+e,t=t>>>0,!a){var p=Math.pow(2,8*r-1);Fe(this,e,t,r,p-1,-p)}var s=r-1,i=1,d=0;for(this[t+s]=e&255;--s>=0&&(i*=256);)e<0&&d===0&&this[t+s+1]!==0&&(d=1),this[t+s]=(e/i>>0)-d&255;return t+r};h.prototype.writeInt8=function(e,t,r){return e=+e,t=t>>>0,r||Fe(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};h.prototype.writeInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||Fe(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};h.prototype.writeInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||Fe(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};h.prototype.writeInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||Fe(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};h.prototype.writeInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||Fe(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function jp(o,e,t,r,a,p){if(t+r>o.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Jp(o,e,t,r,a){return e=+e,t=t>>>0,a||jp(o,e,t,4,34028234663852886e22,-34028234663852886e22),rt.write(o,e,t,r,23,4),t+4}h.prototype.writeFloatLE=function(e,t,r){return Jp(this,e,t,!0,r)};h.prototype.writeFloatBE=function(e,t,r){return Jp(this,e,t,!1,r)};function Yp(o,e,t,r,a){return e=+e,t=t>>>0,a||jp(o,e,t,8,17976931348623157e292,-17976931348623157e292),rt.write(o,e,t,r,52,8),t+8}h.prototype.writeDoubleLE=function(e,t,r){return Yp(this,e,t,!0,r)};h.prototype.writeDoubleBE=function(e,t,r){return Yp(this,e,t,!1,r)};h.prototype.copy=function(e,t,r,a){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<r&&(a=r),a===r||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-r&&(a=e.length-t+r);var p=a-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,a):Uint8Array.prototype.set.call(e,this.subarray(r,a),t),p};h.prototype.fill=function(e,t,r,a){if(typeof e=="string"){if(typeof t=="string"?(a=t,t=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!h.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){var p=e.charCodeAt(0);(a==="utf8"&&p<128||a==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<r;++s)this[s]=e;else{var i=h.isBuffer(e)?e:h.from(e,a),d=i.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<r-t;++s)this[s+t]=i[s%d]}return this};var Pu=/[^+/0-9A-Za-z-_]/g;function Du(o){if(o=o.split("=")[0],o=o.trim().replace(Pu,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function In(o,e){e=e||1/0;for(var t,r=o.length,a=null,p=[],s=0;s<r;++s){if(t=o.charCodeAt(s),t>55295&&t<57344){if(!a){if(t>56319){(e-=3)>-1&&p.push(239,191,189);continue}else if(s+1===r){(e-=3)>-1&&p.push(239,191,189);continue}a=t;continue}if(t<56320){(e-=3)>-1&&p.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(e-=3)>-1&&p.push(239,191,189);if(a=null,t<128){if((e-=1)<0)break;p.push(t)}else if(t<2048){if((e-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Gu(o){for(var e=[],t=0;t<o.length;++t)e.push(o.charCodeAt(t)&255);return e}function Bu(o,e){for(var t,r,a,p=[],s=0;s<o.length&&!((e-=2)<0);++s)t=o.charCodeAt(s),r=t>>8,a=t%256,p.push(a),p.push(r);return p}function Qp(o){return wn.toByteArray(Du(o))}function fr(o,e,t,r){for(var a=0;a<r&&!(a+t>=e.length||a>=o.length);++a)e[a+t]=o[a];return a}function Je(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function Fn(o){return o!==o}var Vu=function(){for(var o="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)e[r+a]=o[t]+o[a];return e}()});var as=mr((Mf,ns)=>{n();var te=ns.exports={},Ye,Qe;function Ln(){throw new Error("setTimeout has not been defined")}function Pn(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Ye=setTimeout:Ye=Ln}catch(o){Ye=Ln}try{typeof clearTimeout=="function"?Qe=clearTimeout:Qe=Pn}catch(o){Qe=Pn}})();function os(o){if(Ye===setTimeout)return setTimeout(o,0);if((Ye===Ln||!Ye)&&setTimeout)return Ye=setTimeout,setTimeout(o,0);try{return Ye(o,0)}catch(e){try{return Ye.call(null,o,0)}catch(t){return Ye.call(this,o,0)}}}function Uu(o){if(Qe===clearTimeout)return clearTimeout(o);if((Qe===Pn||!Qe)&&clearTimeout)return Qe=clearTimeout,clearTimeout(o);try{return Qe(o)}catch(e){try{return Qe.call(null,o)}catch(t){return Qe.call(this,o)}}}var io=[],at=!1,Vo,gr=-1;function Mu(){!at||!Vo||(at=!1,Vo.length?io=Vo.concat(io):gr=-1,io.length&&ts())}function ts(){if(!at){var o=os(Mu);at=!0;for(var e=io.length;e;){for(Vo=io,io=[];++gr<e;)Vo&&Vo[gr].run();gr=-1,e=io.length}Vo=null,at=!1,Uu(o)}}te.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];io.push(new rs(o,e)),io.length===1&&!at&&os(ts)};function rs(o,e){this.fun=o,this.array=e}rs.prototype.run=function(){this.fun.apply(null,this.array)};te.title="browser";te.browser=!0;te.env={};te.argv=[];te.version="";te.versions={};function co(){}te.on=co;te.addListener=co;te.once=co;te.off=co;te.removeListener=co;te.removeAllListeners=co;te.emit=co;te.prependListener=co;te.prependOnceListener=co;te.listeners=function(o){return[]};te.binding=function(o){throw new Error("process.binding is not supported")};te.cwd=function(){return"/"};te.chdir=function(o){throw new Error("process.chdir is not supported")};te.umask=function(){return 0}});var c,l,Of,n=Tn(()=>{c=b(es()),l=b(as()),Of=function(o){function e(){var r=this||self;return delete o.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var t=__magic__;return t}(Object)});var jt={};dr(jt,{default:()=>D_});var Xr,P_,D_,Jt=Tn(()=>{"use strict";n();Xr=b(require("react")),P_=o=>Xr.createElement("svg",v({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},o),Xr.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Xr.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),D_=P_});var nl={};dr(nl,{default:()=>W_});var Yr,O_,W_,al=Tn(()=>{"use strict";n();Yr=b(require("react")),O_=o=>Yr.createElement("svg",v({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},o),Yr.createElement("g",null,Yr.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),W_=O_});var Df={};dr(Df,{AccountContext:()=>Yn,AccountContextProvider:()=>Qn,AmountSelect:()=>wp,AmountSelectInput:()=>Cp,AmountSlider:()=>Fp,AppInfoContextProvider:()=>$a,BURN_NFT_GAS_LIMIT:()=>Mn,CAN_TRANSFER_MESSAGE:()=>Dn,Confirm:()=>yo,ConfirmScreen:()=>ep,Data:()=>Np,FeeAccordion:()=>_p,Form:()=>Lf,FormContext:()=>ya,FormContextProvider:()=>ba,FormDataTestIdsEnum:()=>J,GAS_LIMIT_DELTA:()=>Bn,GasLimit:()=>cp,GasPrice:()=>mp,HighlightText:()=>pr,InfoDust:()=>Xa,Loader:()=>N_,MAX_GAS_LIMIT:()=>yr,MAX_NFT_GAS_LIMIT:()=>Un,MIN_DUST:()=>Uo,MIN_NFT_GAS_LIMIT:()=>Vn,NFTCanTransferWarning:()=>Lp,NetworkContext:()=>va,NetworkContextProvider:()=>xa,NftEnumType:()=>X.NftEnumType,Receiver:()=>ap,ReceiverContext:()=>Va,ReceiverContextProvider:()=>Ua,SFTAmount:()=>pp,SelectToken:()=>tf,SendFormContainer:()=>Pf,SendFormContext:()=>qa,SendFormContextProvider:()=>za,TOKEN_GAS_LIMIT:()=>Be,TokensContext:()=>ka,TokensContextProvider:()=>Sa,TransactionTypeEnum:()=>pe,TransferDataEnum:()=>Wo,ValuesEnum:()=>se,WREWAWarning:()=>Pp,WREWA_ID:()=>On,WREWA_MESSAGE:()=>Gn,ZERO:()=>N,calculateFeeInFiat:()=>Ut,calculateGasLimit:()=>Ze,calculateNftGasLimit:()=>Re,computeInitGasLimit:()=>Ot,computeNftDataField:()=>Er,computeTokenDataField:()=>Ls,delegationContractDataByEnvironment:()=>is,fetchAllTokens:()=>Hn,fetchTokens:()=>_s,formattedConfigGasPrice:()=>Pe,generateTransaction:()=>Mt,getAccountToken:()=>Rn,getAllowedReceivers:()=>Kn,getApiAddressForChainID:()=>Wn,getApiConfig:()=>ee,getDataField:()=>aa,getDelegationDataForChainId:()=>Pt,getEconomicsInfo:()=>zn,getEntireBalance:()=>sa,getEntireTokenBalance:()=>Ir,getEnvironmentForChainId:()=>Mo,getGasLimit:()=>qt,getGlobalNftByIdentifier:()=>jn,getGuardedAccountGasLimit:()=>Ee,getInitialErrors:()=>_a,getInitialValues:()=>Ra,getNetworkConfigForChainId:()=>Lt,getNftByAddressAndIdentifier:()=>Gt,getParsedGasPrice:()=>mo,getRemainingPages:()=>Hu,getScamAddressData:()=>qn,getToken:()=>Zn,getTokenDetails:()=>st,getTokens:()=>us,getTokensCount:()=>zu,getTransactionCost:()=>Jn,getTxType:()=>zo,getValidationSchema:()=>Ko,getWrewaIdForChainId:()=>Ft,isNftOrMultiDcdtTx:()=>ga,maxAcceptedGasPrice:()=>lt,searchNft:()=>kt,setApiConfig:()=>Oo,showMax:()=>Ca,useAccountContext:()=>ve,useComputeGasLimit:()=>m_,useFetchGasLimit:()=>Ci,useFetchKnownAddresses:()=>La,useFormContext:()=>re,useGetInitialValues:()=>b_,useNetworkConfigContext:()=>me,useReceiverContext:()=>Xo,useScamError:()=>Ga,useSendFormContext:()=>$,useTokensContext:()=>_o,useVerifyScamAddress:()=>Da,validateGasLimitAmount:()=>uo,validateReceivers:()=>x_,validateSignTransactions:()=>E_,verifyInvalid:()=>fa});module.exports=tt(Df);n();n();var Ce=b(require("react")),uc=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var cs=b(require("axios"));n();n();n();var ss=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var ps=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var Dn="Token can only be transfered to one of the following addresses:",Gn="WREWA is not REWA! It can not be sent to exchanges. It can not be staked or delegated. It can not be used as transaction fee.";n();var J=(A=>(A.loader="loader",A.sendBtn="sendBtn",A.amountLabel="amountLabel",A.tokenIdLabel="tokenIdLabel",A.maxBtn="maxBtn",A.amountError="amountError",A.tokenIdError="tokenIdError",A.tokenName="tokenName",A.receiverScam="receiverScam",A.receiverUsernameAddress="receiverUsernameAddress",A.sendTrxBtn="sendTrxBtn",A.cancelTrxBtn="cancelTrxBtn",A.confirmReceiver="confirmReceiver",A.confirmReceiverUsername="confirmReceiverUsername",A.confirmScamReport="confirmScamReport",A.confirmScCall="confirmScCall",A.confirmFee="confirmFee",A.confirmScreen="confirmScreen",A.confirmData="confirmData",A.confirmAmount="confirmAmount",A.confirmUsdValue="confirmUsdValue",A.returnToWalletBtn="returnToWalletBtn",A.infoDust="infoDust",A.enableAdvancedMode="enableAdvancedMode",A.confirmAdvancedMode="confirmAdvancedMode",A.canTransferWarning="canTransferWarning",A.tokenPreview="token-preview",A.tokenPreviewName="token-preview-name",A.tokenPreviewIdentifier="token-preview-identifier",A.tokenPriceUsdValue="token-price-usd-value",A.tokenSelectInput="tokenSelectInput",A.dataError="dataError",A.feeLimit="feeLimit",A.gasCostLoadingSpinner="gasCostLoadingSpinner",A.feeInFiat="feeInFiat",A.gasLimitResetBtn="gasLimitResetBtn",A.receiverLabel="receiverLabel",A.receiverError="receiverError",A.gasLimitError="gasLimitError",A.guardianScreen="guardianScreen",A))(J||{});var yr="600000000",Bn=10,Be="500000",Vn=75e4,Un=1e6,Mn=2e5,Uo="5000000000000000",N="0",On="WREWA-bd4d79";var Ou={D:"devnet",T:"testnet",1:"mainnet"},Wu={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function Mo(o){return Ou[o]}function Ft(o){return Wu[o]||On}function Wn(o){let e=Mo(o),t=ps.fallbackNetworkConfigurations[e].apiAddress;if(!t)throw"Could not extract api address for environment, check if you have a valid chainID";return t}function Lt(o){return S(this,null,function*(){let e=Wn(o);return yield(0,ss.getServerConfiguration)(e)})}n();var is={mainnet:{delegationContract:"drt1qqqqqqqqqqqqqpgqxwakt2g7u9atsnr03gqcgmhcv38pt7mkd94q8vqld4",delegationContractData:{minGasLimit:"75000000"}},devnet:{delegationContract:"drt1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqeyzkqc",delegationContractData:{minGasLimit:"75000000"}},testnet:{delegationContract:"drt1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqeyzkqc",delegationContractData:{minGasLimit:"75000000"}}};function Pt(o){let e=Mo(o);return e?is[e]:null}var br={value:null};function Oo(o){return br.value={baseURL:o.apiAddress,timeout:Number(o.apiTimeout)},br.value}function ee(o){return S(this,null,function*(){if(br.value!=null)return br.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),o!=null){let t=yield Lt(o);return Oo(t)}let e="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(e),e})}function qn(o,e){return S(this,null,function*(){let t=e||(yield ee()),{data:r}=yield cs.default.get(`/accounts/${o}`,t);return r})}n();n();var ls=b(require("axios"));function zn(){return S(this,null,function*(){try{let o=yield ee(),{data:e}=yield ls.default.get("economics",o);return e}catch(o){return console.error("err fetching economics info",o),null}})}n();n();var lo=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),ms=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),vr=b(require("axios")),ds=b(require("lodash/uniqBy"));var qu=1e3,$n=100;function us(a){return S(this,arguments,function*({address:o,size:e,from:t,search:r}){let p=new URLSearchParams(w(v(v({},t!=null&&e!=null?{from:String(t),size:String(e)}:{}),r?{search:r}:{}),{includeMetaDCDT:"true"})).toString(),s=yield ee();return vr.default.get(`/${lo.ACCOUNTS_ENDPOINT}/${o}/${lo.TOKENS_ENDPOINT}?${p}`,s)})}function zu(t){return S(this,arguments,function*({address:o,search:e}){let r=new URLSearchParams(w(v({},e?{search:e}:{}),{includeMetaDCDT:"true"})).toString(),a=yield ee();return vr.default.get(`/${lo.ACCOUNTS_ENDPOINT}/${o}/${lo.TOKENS_ENDPOINT}/count?${r}`,a)})}function Rn(o,e){return S(this,null,function*(){let{address:t,token:r}=o,a=e||(yield ee());return vr.default.get(`/${lo.ACCOUNTS_ENDPOINT}/${t}/${lo.TOKENS_ENDPOINT}/${r}`,a)})}function Zn(o,e){return S(this,null,function*(){return(0,ms.getPersistedToken)(`${e==null?void 0:e.baseURL}/${lo.TOKENS_ENDPOINT}/${o}`)})}function _s(a){return S(this,arguments,function*({address:o,page:e=1,search:t,size:r}){let p={address:o,search:t};r!=null&&(p.from=(e-1)*$n,p.size=$n);let{data:s}=yield us(p);return s})}function Hn(o){return S(this,null,function*(){let e=[],t=!0,r=1;for(;t;)try{let a=yield _s({address:o,size:qu,page:r});if(a==null||(a==null?void 0:a.length)===0){t=!1;break}let p=a.map(s=>v({},s));if(e.push(...p),a.length!=$n){t=!1;break}r++}catch(a){console.log(a),t=!1}return(0,ds.default)(e,a=>a.identifier)})}n();var fs=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),gs=b(require("axios"));n();n();n();var X=require("@terradharitri/sdk-dapp/types/tokens.types");var pe=(p=>(p.REWA="REWA",p.DCDT="DCDT",p.MetaDCDT="MetaDCDT",p.NonFungibleDCDT="NonFungibleDCDT",p.SemiFungibleDCDT="SemiFungibleDCDT",p))(pe||{}),Wo=(a=>(a.DCDTNFTTransfer="DCDTNFTTransfer",a.DCDTNFTCreate="DCDTNFTCreate",a.DCDTNFTBurn="DCDTNFTBurn",a.MultiDCDTNFTTransfer="MultiDCDTNFTTransfer",a))(Wo||{});n();var se=(_=>(_.receiver="receiver",_.gasPrice="gasPrice",_.data="data",_.tokenId="tokenId",_.amount="amount",_.gasLimit="gasLimit",_.receiverUsername="receiverUsername",_.rawReceiverUsername="rawReceiverUsername",_.senderUsername="senderUsername",_))(se||{});n();n();function Kn(o,e){return S(this,null,function*(){if(o.type!==X.NftEnumType.MetaDCDT)return null;let t=e||(yield ee());try{let{data:r}=yield gs.default.get(`/${fs.COLLECTIONS_ENDPOINT}/${o.collection}`,t);return(r==null?void 0:r.canTransfer)===!1?r==null?void 0:r.roles.map(({address:s,canTransfer:i})=>i?s:"").filter(s=>Boolean(s)):null}catch(r){return console.error(`Unable to get canTransfer information for collection ${o.collection}`,r),null}})}n();var Dt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Xn=b(require("axios"));function Gt(r,a){return S(this,arguments,function*({address:o,identifier:e},t){try{let p=t||(yield ee()),{data:s}=yield Xn.default.get(`/${Dt.ACCOUNTS_ENDPOINT}/${o}/${Dt.NFTS_ENDPOINT}/${e}`,p);return s||null}catch(p){return null}})}function jn(o,e){return S(this,null,function*(){try{let t=e||(yield ee()),{data:r}=yield Xn.default.get(`/${Dt.NFTS_ENDPOINT}/${o}`,t);return r||null}catch(t){return null}})}n();n();var ys=b(require("axios"));function Jn(o){return S(this,null,function*(){try{let e=yield ee(),{data:t}=yield ys.default.post("/transaction/cost",o,e);return{data:t,success:!0}}catch(e){return console.error(e),{success:!1}}})}n();var pt=b(require("react")),Yn=(0,pt.createContext)({});function Qn({children:o,value:e}){return pt.default.createElement(Yn.Provider,{value:e},o)}function ve(){return(0,pt.useContext)(Yn)}n();n();var he=b(require("react")),Mi=require("@terradharitri/sdk-dapp/constants/index"),Oi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),zr=b(require("bignumber.js")),Wi=require("formik");n();n();n();var Bt=require("bech32"),$u=o=>{let e=Bt.bech32.toWords(c.Buffer.from(o,"hex"));return Bt.bech32.encode("drt",e)},Ru=o=>{let e=Bt.bech32.decode(o,256);return c.Buffer.from(Bt.bech32.fromWords(e.words)).toString("hex")},bs={encode:$u,decode:Ru};n();n();var qo=({initialValues:o,gasLimit:e,touched:t})=>o.gasLimit!==e&&t.gasLimit;n();var xe=(o,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(o);n();var xr=o=>!["REWA","DCDT"].includes(o);n();var vs=o=>Boolean(o==null?void 0:o.startsWith("drt1"));n();var xs=require("@terradharitri/sdk-dapp/constants"),hs=require("@terradharitri/sdk-dapp/utils/account/getAccount");var hr=o=>S(void 0,null,function*(){let e=o.txType==="REWA"?o.amount:xs.ZERO,t=xr(o.txType),r=yield(0,hs.getAccount)(o.receiver),a=r==null?void 0:r.username,p=t?o.senderUsername:a,s=w(v({},o),{amount:e,receiverUsername:p});return delete s.rawReceiverUsername,s});n();n();var ea=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),Ts=({nft:o,skipDescription:e})=>{var T,k;let{name:t,metadata:r,media:a,isNsfw:p,scamInfo:s,verified:i}=o,d="Scam - ",{isSuspicious:_,message:u}=(0,ea.getScamFlag)({verified:i,message:t,isNsfw:p,scamInfo:s,messagePrefix:d});if(!(r!=null&&r.description)||e){let E=_?"placeholder":(T=a==null?void 0:a[0])==null?void 0:T.thumbnailUrl;return{isSuspicious:_,name:t||u,thumbnail:E,description:""}}let{message:f,isSuspicious:g}=(0,ea.getScamFlag)({message:r.description,messagePrefix:d,verified:i}),y=_||g,x=y?"placeholder":(k=a==null?void 0:a[0])==null?void 0:k.thumbnailUrl;return{isSuspicious:y,name:t||u,thumbnail:x,description:f||r.description}};n();var Zu=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var Tr=b(require("anchorme")),oa=o=>o.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),ks=(o,e)=>{if(e){let t=`[Message hidden due to suspicious content - ${e.info}]`;if(o.length>1e3)return{output:t,stringWithLinks:o,found:!0};let r=oa(o.normalize("NFKC")),a=Tr.default.list(r),p=[];if(a.length>0){let s=t;a.forEach((i,d)=>{let{string:_}=i,u="",f="",g=_;for(let y=0;y<s.length;y++){let x=s.slice(y),[T]=Tr.default.list(oa(x));T&&_===T.string&&(u=s.substring(0,y))}for(let y=t.length;y>0;y--){let x=s.slice(0,y),[T]=Tr.default.list(oa(x));T&&_===T.string&&(f=s.substring(y))}p.push(u),p.push(g),s=f,d===a.length-1&&p.push(f)})}else p.push(o);return{output:t,stringWithLinks:p.join(""),found:!0}}else return{output:o,stringWithLinks:"",found:!1}};n();function Ss({docStyle:o}){let e={hoverColor:o.getPropertyValue("--border-color"),primaryColor:o.getPropertyValue("--primary"),bgColor:o.getPropertyValue("--card-bg"),mutedColor:o.getPropertyValue("--muted"),blackColor:o.getPropertyValue("--black")};return{valueContainer:()=>({padding:"0.125rem 0 0.125rem 0.2rem",lineHeight:"1.5",fontSize:"0.8125rem",maxWidth:"85%",display:"flex"}),control:(t,r)=>w(v({},t),{minHeight:"0",flexWrap:"nowrap",backgroundColor:r.isDisabled?"#e9ecef":"transparent",borderColor:r.isDisabled?e.hoverColor:r.isFocused?e.primaryColor:e.blackColor,boxShadow:r.isFocused?`0 0 0 0.2rem #${e.primaryColor.replace("#","").trim()}33`:null,"&:hover":{borderColor:r.isFocused?e.primaryColor:"#b0b0b0"}}),input:t=>w(v({},t),{paddingLeft:"0.4rem",marginLeft:"0",marginRight:"0"}),indicatorSeparator:t=>w(v({},t),{marginTop:"0.3rem",marginBottom:"0.3rem"}),indicatorsContainer:t=>w(v({},t),{zIndex:"0"}),dropdownIndicator:t=>w(v({},t),{padding:"0 0.4rem"}),multiValue:t=>w(v({},t),{backgroundColor:e.hoverColor,borderRadius:"4px"}),multiValueRemove:t=>w(v({},t),{cursor:"pointer"}),multiValueLebel:t=>w(v({},t),{lineHeight:"1.5"}),placeholder:t=>w(v({},t),{marginLeft:"0",lineHeight:"2"}),option:(t,{isFocused:r,isSelected:a})=>w(v({},t),{fontSize:"0.8125rem",cursor:"pointer",align:"left",backgroundColor:a?e.primaryColor:r?e.hoverColor:"transparent"}),menu:t=>w(v({},t),{marginTop:"0.2rem",zIndex:"5"})}}n();var ta=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ie=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),ra=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Y=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();var Ie=b(require("react")),fi=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),gi=require("formik");n();n();var Nr=require("@terradharitri/sdk-dapp/constants/index"),zs=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ar=b(require("bignumber.js"));n();n();var Vt=require("@terradharitri/sdk-dapp/constants/index");function Ut({feeLimit:o,rewaPriceInUsd:e}){let t=(0,ie.formatAmount)({input:o,decimals:Vt.DECIMALS,digits:Vt.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,ra.getUsdValue)({amount:t,usd:e,decimals:Vt.DIGITS})}`}n();var ws=require("@terradharitri/sdk-dapp/constants/index");var Re=(o="")=>{let e=Vn+o.length*ws.GAS_PER_DATA_BYTE;return o.startsWith("DCDTNFTBurn")?Mn.toString():String(Math.max(e,Un))};n();var kr=require("@terradharitri/sdk-dapp/constants/index"),na=b(require("bignumber.js"));n();var Cs=require("@terradharitri/sdk-dapp/constants/index");function Ee(o=!1){return o?Cs.EXTRA_GAS_LIMIT_GUARDED_TX:0}var Ze=({data:o,isGuarded:e})=>{let t=new na.default(kr.GAS_LIMIT),r=new na.default(kr.GAS_PER_DATA_BYTE),a=o?r.times(c.Buffer.from(o).length):0,p=Ee(e);return t.plus(a).plus(p).toString(10)};n();var Es=require("@terradharitri/sdk-dapp/constants/index");function st({tokens:o,tokenId:e}){let t=o.find(({identifier:p})=>p===e),r=t?t.decimals:Es.DECIMALS,a=(t==null?void 0:t.balance)||N;return w(v({},t),{decimals:r,identifier:(t==null?void 0:t.identifier)||"",name:(t==null?void 0:t.name)||"",ticker:(t==null?void 0:t.ticker)||"",balance:a})}var it=st;n();n();var He=require("@terradharitri/sdk-core"),Is=require("@terradharitri/sdk-dapp/constants/index"),As=b(require("bignumber.js"));function Sr({amount:o,data:e,nonce:t,receiver:r,receiverUsername:a,sender:p,senderUsername:s,gasPrice:i,gasLimit:d,chainId:_}){let u=new As.default((0,Y.parseAmount)(o));return new He.Transaction({nonce:t,value:He.TokenPayment.rewaFromBigInteger(u.toString(10)),sender:new He.Address(p),receiver:new He.Address(r),gasPrice:parseInt(i),gasLimit:parseInt(d),senderUsername:s,receiverUsername:a,data:new He.TransactionPayload(e),chainID:_,version:new He.TransactionVersion(Is.VERSION)})}n();function mo(o){return isNaN(Number(o))||o===""?(0,Y.parseAmount)("0"):(0,Y.parseAmount)(o)}function Mt(o){return S(this,null,function*(){let{address:e,balance:t,chainId:r,nonce:a,values:p}=o,{amount:s,receiver:i,data:d,gasLimit:_,gasPrice:u,nft:f,receiverUsername:g,senderUsername:y}=p,x=Boolean(f)?e:i;try{return Sr({balance:t,amount:String(s),gasLimit:String(_),gasPrice:mo(u),data:d.trim(),receiver:x,receiverUsername:g,senderUsername:y,sender:e,nonce:a,chainId:r})}catch(T){throw console.log("Prepare transaction error",T),T}})}n();var Ns=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Hu=({count:o,maxCount:e})=>{if(o!==void 0&&(0,Ns.stringIsInteger)(o.toString())){let t=e%o>0?1:0;return Array.from(Array(Math.floor(o/e)+t).keys()).filter(p=>p!==0).map(p=>p+1)}else return[]};n();var Fs=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");function zo({nft:o,tokenId:e}){let{isDcdt:t,isNft:r,isRewa:a}=(0,Fs.getIdentifierType)(e);return a?"REWA":(o==null?void 0:o.type)===X.NftEnumType.NonFungibleDCDT?"NonFungibleDCDT":(o==null?void 0:o.type)===X.NftEnumType.SemiFungibleDCDT?"SemiFungibleDCDT":(o==null?void 0:o.type)===X.NftEnumType.MetaDCDT||r?"MetaDCDT":t?"DCDT":"REWA"}n();var wr=b(require("bignumber.js"));var Cr=o=>o.length%2===0?o:`0${o}`,Ls=({amount:o,decimals:e,tokenId:t})=>{let r=Boolean(o)?o:N,a=Cr(c.Buffer.from(t).toString("hex")),p=Cr(new wr.default((0,Y.parseAmount)(r,e)).toString(16));return`DCDTTransfer@${a}@${p}`},Er=({nft:o,amount:e,receiver:t,errors:r})=>{if(!(o&&e&&t&&!r))return"";try{let p="DCDTNFTTransfer",s=(o==null?void 0:o.type)===X.NftEnumType.MetaDCDT?(0,Y.parseAmount)(e,o.decimals):e;return p+=`@${c.Buffer.from(String(o.collection)).toString("hex")}`,p+=`@${Cr(new wr.default(String(o.nonce)).toString(16))}`,p+=`@${Cr(new wr.default(s).toString(16))}`,p+=`@${bs.decode(t)}`,p}catch(p){return""}},aa=({txType:o,values:e,nft:t,amountError:r,receiverError:a})=>{let{tokens:p,tokenId:s,amount:i,receiver:d}=e;if(p&&o==="DCDT"&&!r){let{decimals:_}=it({tokens:p,tokenId:s});return Ls({amount:i,tokenId:s,decimals:_})}return o!=="REWA"?Er({nft:t,amount:i,receiver:d,errors:Boolean(r||a)}):e.data};n();var Gs=require("@terradharitri/sdk-dapp/constants/index"),Bs=require("@terradharitri/sdk-dapp/utils/smartContracts"),Vs=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),$o=b(require("bignumber.js"));n();var Ps=b(require("bignumber.js"));var pa=s=>S(void 0,[s],function*({balance:o,address:e,isGuarded:t,nonce:r,values:a,chainId:p}){var M,O,q;let{amount:i,receiver:d,data:_,gasLimit:u,gasPrice:f}=a,y=Sr({balance:o,amount:String(i),gasLimit:String(u),gasPrice:mo(f),data:_.trim(),receiver:d,sender:e,nonce:r,chainId:p}).toPlainObject(),{data:x,success:T}=yield Jn(w(v({},y),{sender:e})),k=Number((M=x==null?void 0:x.data)==null?void 0:M.txGasUnits),E=(O=x==null?void 0:x.data)==null?void 0:O.returnMessage;if(!Boolean(T&&(x==null?void 0:x.code)==="successful"&&k&&k!==0))return{gasLimit:u,gasLimitCostError:(q=x==null?void 0:x.data)==null?void 0:q.returnMessage};if(!E)return{gasLimit:new Ps.default(k).times(Bn).dividedToIntegerBy(100).plus(k).toString(10)};let F=Ze({data:a.data?a.data.trim():"",isGuarded:t});return{gasLimit:String(k)===N?F:String(k)}}),Ds=pa;var Ot=y=>S(void 0,[y],function*({computedTokenId:o,receiver:e,isInternal:t,balance:r,address:a,isGuarded:p,nonce:s,amount:i,data:d,gasLimit:_,gasPrice:u,delegationContractData:f,chainId:g}){var U;let x=Ee(p),T=f==null?void 0:f.delegationContract,k=(U=f==null?void 0:f.delegationContractData.minGasLimit)!=null?U:N;if(!new $o.default(_).isNaN()&&new $o.default(_).isGreaterThan(N))return{initGasLimit:_};if((0,Bs.isContract)(e)&&!t){let{gasLimit:M,gasLimitCostError:O}=yield Ds({balance:r,address:a,nonce:s,values:{amount:i,receiver:e,data:d,gasLimit:_,gasPrice:u},chainId:g});return{initGasLimit:e===T?new $o.default(M).plus(k).plus(x).toString():M,initGasLimitError:O}}if(d.length>0)return{initGasLimit:Ze({data:d.trim(),isGuarded:p})};let{isDcdt:L,isNft:F}=(0,Vs.getIdentifierType)(o);return L?{initGasLimit:new $o.default(Be).plus(x).toString()}:F?{initGasLimit:new $o.default(Re()).plus(x).toString()}:{initGasLimit:new $o.default(Gs.GAS_LIMIT).plus(x).toString()}});n();var ct=require("@terradharitri/sdk-dapp/constants/index"),Ws=b(require("bignumber.js"));var Us,Ms,Os,Pe=(0,ie.formatAmount)({input:String((Us=ct.GAS_PRICE)!=null?Us:1e9),decimals:(Ms=ct.DECIMALS)!=null?Ms:18,showLastNonZeroDecimal:!0,digits:(Os=ct.DIGITS)!=null?Os:4}),lt=new Ws.default(Pe).times(10).toString(10);n();var wo=require("@terradharitri/sdk-dapp/constants/index"),Wt=b(require("bignumber.js"));function sa({balance:o=N,gasLimit:e=N,gasPrice:t,decimals:r,digits:a,data:p="",chainId:s}){let i=new Wt.default(o),d=new Wt.default(Uo),_=new Wt.default((0,ta.calculateFeeLimit)({gasPrice:t,gasLimit:e,data:p,chainId:s,gasPerDataByte:String(wo.GAS_PER_DATA_BYTE),gasPriceModifier:String(wo.GAS_PRICE_MODIFIER)})),u=i.minus(_),f=u.minus(d),g=u.isGreaterThanOrEqualTo(0)?(0,ie.formatAmount)({input:u.toString(10),decimals:r,digits:a,showLastNonZeroDecimal:!0,addCommas:!1}):N,y=f.isGreaterThanOrEqualTo(0)?(0,ie.formatAmount)({input:f.toString(10),decimals:r,digits:a,showLastNonZeroDecimal:!0,addCommas:!1}):g;return{entireBalance:g,entireBalanceMinusDust:y,parsedEntireBalance:u.isGreaterThan(0)?u.toString(10):N}}function Ir({balance:o=N,decimals:e=wo.DECIMALS,digits:t=wo.DIGITS}){let r=new Wt.default(o);if(r.isGreaterThanOrEqualTo(0)){let a=r.toString(10);return(0,ie.formatAmount)({input:a,decimals:e,digits:t>e?e:t,showLastNonZeroDecimal:!0,addCommas:!1})}return N}n();var qs=b(require("bignumber.js"));function qt({txType:o,data:e="",isGuarded:t}){let r=Ee(t),a=Re();return o==="DCDT"&&(a=Be),o==="REWA"&&(a=Ze({data:e.trim()})),new qs.default(a).plus(r).toString(10)}var uo=({amount:o,balance:e,gasPrice:t,gasLimit:r,data:a,chainId:p})=>{let s=(0,Y.parseAmount)(o.toString()),i=new Ar.default(s),d=new Ar.default(e),_=new Ar.default((0,zs.calculateFeeLimit)({gasPrice:mo(t),gasLimit:r,data:a,chainId:p,gasPerDataByte:String(Nr.GAS_PER_DATA_BYTE),gasPriceModifier:String(Nr.GAS_PRICE_MODIFIER)}));return d.isGreaterThanOrEqualTo(i.plus(_))};n();n();var ft=require("yup");n();var Fr=require("@terradharitri/sdk-dapp/constants/ledger.constants"),$s=b(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Lr=require("yup"),Ku=(0,Lr.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:t}=this.parent;return!(t&&e&&e.length&&!t.ledgerDataActive)}),Xu=(0,Lr.string)().test({name:"hashSign",test:function(e){let{ledger:t,isGuarded:r}=this.parent;if(t){let{ledgerWithHashSign:a,ledgerWithGuardians:p}=(0,$s.default)(t.version);if(e&&e.length>300&&!a)return this.createError({message:`Data too long. You need at least DharitrI app version ${Fr.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(r&&!p)return this.createError({message:`You need at least DharitrI app version ${Fr.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),ju=[Ku,Xu],Ju=ju.reduce((o,e)=>o.concat(e),(0,Lr.string)()),Rs=Ju;n();var Zs=require("@terradharitri/sdk-dapp/constants/index"),Hs=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ia=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),mt=require("yup");var Yu=o=>{let e=(0,mt.string)().required(o.required),t=(0,mt.string)().test("decimalFormat",o.maxDecimalsAllowed(Zs.DECIMALS),s=>(0,Hs.maxDecimals)(String(s))),r=(0,mt.string)().test("funds",o.insufficientFunds,function(s){if(s&&(0,ia.stringIsFloat)(s)){let{gasLimit:i,data:d,gasPrice:_,balance:u,chainId:f}=this.parent;return uo({amount:s,balance:u,gasLimit:i,gasPrice:_,data:d,chainId:f})}return!0}),a=(0,mt.string)().test("isValidNumber",o.invalidNumber,s=>Boolean(s&&(0,ia.stringIsFloat)(s)));return[e,a,t,r].reduce((s,i)=>s.concat(i),(0,mt.string)())},Ks=Yu;n();var js=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),la=b(require("bignumber.js")),zt=require("yup");n();var Xs=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ca=b(require("bignumber.js")),Pr=require("yup");var dt=o=>{let e=(0,Pr.string)().required(o.required),t=(0,Pr.string)().test("isValidInteger",o.invalidNumber,a=>{let p=a&&(0,Xs.stringIsInteger)(a);return Boolean(p)}),r=(0,Pr.string)().test("maximum",o.tooHighGasLimit(yr),a=>{let p=new ca.default(String(a)),s=new ca.default(yr),i=a&&s.comparedTo(p)>=0;return Boolean(i)});return[e,t,r]};var Qu=o=>{let e=(0,zt.string)().required(o.required),t=(0,zt.string)().test("funds",o.insufficientFunds,function(s){let{data:i,gasPrice:d,amount:_,balance:u,chainId:f,ignoreTokenBalance:g}=this.parent;return g?!0:_&&(0,js.stringIsFloat)(_)&&s!=null?uo({amount:_,balance:u,gasLimit:s,gasPrice:d,data:i,chainId:f}):!0}),r=(0,zt.string)().test({name:"minValueData",test:function(p){let s=this.parent,{data:i,ignoreTokenBalance:d,isGuarded:_}=s;if(d)return!0;let u=Ze({data:i?i.trim():"",isGuarded:_});if(p){let f=new la.default(p),g=new la.default(u);if(!(p&&f.isGreaterThanOrEqualTo(g)))return this.createError({message:o.tooLowGasLimit(u),path:"gasLimit"})}return!0}});return[e,...dt(o),t,r].reduce((p,s)=>p.concat(s),(0,zt.string)())},Js=Qu;n();var Ys=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Qs=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Dr=b(require("bignumber.js")),Ro=require("yup");var e_=o=>{let e=(0,Ro.string)().required(o.required),t=(0,Ro.string)().test({name:"decimalFormat",test:function(i){let{tokenId:d,tokens:_}=this.parent;if(_){let{decimals:u}=it({tokens:_,tokenId:d});return(0,Ys.maxDecimals)(String(i),u)?!0:this.createError({message:o.maxDecimalsAllowed(u),path:"amount"})}return!0}}),r=(0,Ro.string)().test("tokenBalance",o.insufficientFunds,function(d){let{ignoreTokenBalance:_,tokens:u}=this.parent;if(d!==void 0&&!_&&u){let{decimals:f,balance:g}=it({tokens:u,tokenId:this.parent.tokenId}),y=(0,Y.parseAmount)(d.toString(),f),x=new Dr.default(y);return new Dr.default(g).comparedTo(x)>=0}return!0}),a=(0,Ro.string)().test("greaterThanZero",o.cannotBeZero,function(d){let{tokens:_,ignoreTokenBalance:u}=this.parent;if(!u&&d!=null&&_){let{decimals:f}=it({tokens:_,tokenId:this.parent.tokenId}),g=(0,Y.parseAmount)(d.toString(),f);return new Dr.default(g).isGreaterThan(0)}return!0}),p=(0,Ro.string)().test("isValidNumber",o.invalidNumber,i=>Boolean(i&&(0,Qs.stringIsFloat)(i)));return[e,t,r,a,p].reduce((i,d)=>i.concat(d),(0,Ro.string)())},ei=e_;n();var ma=b(require("bignumber.js")),$t=require("yup");var o_=o=>{let e=(0,$t.string)().required(o.required),t=(0,$t.string)().test("minValue",o.tooLowGasLimit(Be),function(s){let i=this.parent,{ignoreTokenBalance:d,isGuarded:_}=i;if(d)return!0;let u=new ma.default(s),f=new ma.default(Be).plus(Ee(_));return s&&u.isGreaterThanOrEqualTo(f)}),r=(0,$t.string)().test("funds",o.insufficientFunds,function(s){let{data:i,gasPrice:d,ignoreTokenBalance:_,balance:u,chainId:f}=this.parent;return s&&!_?uo({amount:N,balance:u,gasLimit:s,gasPrice:d,data:i,chainId:f}):!0});return[e,...dt(o),r,t].reduce((p,s)=>p.concat(s),(0,$t.string)())},oi=o_;n();var ti=require("@terradharitri/sdk-dapp/constants/index"),ri=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ni=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Rt=b(require("bignumber.js")),Zo=require("yup");var t_=o=>{let e=(0,Zo.string)().required(o.required),t=(0,Zo.string)().test("decimalFormat",o.maxDecimalsAllowed(ti.DECIMALS),i=>(0,ri.maxDecimals)(String(i))),r=(0,Zo.string)().test("minimum",o.tooLowGasPrice(Pe),i=>{let d=new Rt.default(String(i)),_=new Rt.default(Pe),u=i&&d.isGreaterThanOrEqualTo(_);return Boolean(u)}),a=(0,Zo.string)().test("maximum",o.tooHighGasPrice(lt),i=>{let d=new Rt.default(String(i)),_=new Rt.default(lt),u=i&&d.isLessThanOrEqualTo(_);return Boolean(u)}),p=(0,Zo.string)().test("isValidNumber",o.invalidNumber,i=>Boolean(i&&(0,ni.stringIsFloat)(i)));return[e,t,r,a,p].reduce((i,d)=>i.concat(d),(0,Zo.string)())},ai=t_;n();var pi=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),si=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ii=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ut=b(require("bignumber.js")),Ho=require("yup");var r_=o=>{let e=(0,Ho.string)().required(o.required),t=(0,Ho.string)().test({name:"formatDecimals",test:function(d){let{nft:_,txType:u}=this.parent;return u!=="MetaDCDT"||(0,pi.maxDecimals)(String(d),_==null?void 0:_.decimals)?!0:this.createError({message:o.maxDecimalsAllowed(_==null?void 0:_.decimals),path:"amount"})}}),r=(0,Ho.string)().test("balance",o.insufficientFunds,function(d){let{txType:_,nft:u}=this.parent;if(!d)return!0;if(_==="MetaDCDT"){let f=(0,Y.parseAmount)(d,u==null?void 0:u.decimals),g=new ut.default(f);return new ut.default((u==null?void 0:u.balance)||N).isGreaterThanOrEqualTo(g)}if(_==="SemiFungibleDCDT"){let f=new ut.default(d);return new ut.default((u==null?void 0:u.balance)||N).isGreaterThanOrEqualTo(f)}return!0}),a=(0,Ho.string)().test("nonZero",o.cannotBeZero,function(d){let _=this.parent,{ignoreTokenBalance:u}=_;return!d||u?!0:!new ut.default(d).isZero()}),p=(0,Ho.string)().test("isValidNumber",o.invalidNumber,function(d){let{nft:_}=this.parent;return(_==null?void 0:_.type)===X.NftEnumType.MetaDCDT?Boolean(d&&(0,si.stringIsFloat)(d)):Boolean(d&&(0,ii.stringIsInteger)(d))});return[e,p,r,t,a].reduce((i,d)=>i.concat(d),(0,Ho.string)())},ci=r_;n();var da=b(require("bignumber.js")),Zt=require("yup");var n_=o=>{let e=(0,Zt.string)().required(o.required),t=(0,Zt.string)().test({name:"minValueData",test:function(p){let s=this.parent,{data:i,ignoreTokenBalance:d,isGuarded:_}=s;if(d)return!0;let u=Re(i?i.trim():"");if(p){let f=new da.default(p),g=new da.default(u).plus(Ee(_));if(!(p&&f.isGreaterThanOrEqualTo(g)))return this.createError({message:o.tooLowGasLimit(g.toString()),path:"gasLimit"})}return!0}}),r=(0,Zt.string)().test("funds",o.insufficientFunds,function(s){let{data:i,gasPrice:d,balance:_,chainId:u,ignoreTokenBalance:f}=this.parent;return s&&!f?uo({amount:N,balance:_,gasLimit:s,gasPrice:d,data:i,chainId:u}):!0});return[e,...dt(o),r,t].reduce((p,s)=>p.concat(s),(0,Zt.string)())},li=n_;n();var mi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),_t=require("yup");var a_=o=>{let e=(0,_t.string)().required(o.required),t=(0,_t.string)().test("addressIsValid",o.invalidAddress,s=>Boolean(s&&(0,mi.addressIsValid)(s))),r=(0,_t.string)().test("sameAddress",o.sameAsOwnerAddress,function(i){let{ignoreTokenBalance:d,txType:_,readonly:u,address:f,isBurn:g}=this.parent;return xr(_)&&!d&&!u&&!g?f!==i:!0}),a=(0,_t.string)().test("canTransfer",o.receiverNotAllowed,function(i){let{nft:d,txType:_,ignoreTokenBalance:u,address:f}=this.parent,g="MetaDCDT"===_,y=u,x=d==null?void 0:d.allowedReceivers;return!i||!g||y||x==null||x.includes(f)?!0:x.includes(i)});return[e,t,r,a].reduce((s,i)=>s.concat(i),(0,_t.string)())},di=a_;n();var ui=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ua=require("yup"),p_=o=>[(0,ua.string)().test("invalidHerotag",o.invalidHerotag,function(a){let{receiver:p}=this.parent;if((p==null?void 0:p.startsWith("drt1"))||!a&&!p)return!0;let d=a&&(0,ui.addressIsValid)(p);return Boolean(d)})].reduce((r,a)=>r.concat(a),(0,ua.string)()),_i=p_;var Ko=o=>(0,ft.object)().shape({receiver:di(o),receiverUsername:_i(o),tokenId:(0,ft.string)().required(o.required),gasPrice:ai(o),data:Rs,amount:(0,ft.string)().when(["txType"],function(t){switch(t){case"DCDT":return ei(o);case"REWA":return Ks(o);default:return ci(o)}}),gasLimit:(0,ft.string)().when(["txType"],function(t){switch(t){case"DCDT":return oi(o);case"REWA":return Js(o);default:return li(o)}})});var _a=({prefilledForm:o,initialValues:e,errorMessages:t})=>{if(!o||!e)return{};try{return Ko(t).validateSync(e),{}}catch(r){let{path:a,message:p}=r;return{[String(a)]:p}}};n();var fa=({shouldValidateForm:o,errors:e,touched:t})=>r=>Boolean(e[r]&&(t[r]||o));n();var ga=o=>Object.values(Wo).some(e=>o.startsWith(e));var ya=(0,Ie.createContext)({});function ba({children:o,value:e}){let{skipToConfirm:t}=e,[r,a]=(0,Ie.useState)(Boolean(t)),[p,s]=(0,Ie.useState)(!1),[i,d]=(0,Ie.useState)(Date.now()),{values:_,errors:u,touched:f,validateForm:g,setFieldTouched:y,setErrors:x,isValid:T,handleSubmit:k}=(0,gi.useFormikContext)(),E=(0,Ie.useCallback)(e.onCloseForm,[]),{isDcdt:L,isNft:F,isRewa:U}=(0,fi.getIdentifierType)(_.tokenId),M=(0,Ie.useCallback)(fa({shouldValidateForm:r,errors:u,touched:f}),[r,u,f]),O=(0,Ie.useCallback)(()=>S(this,null,function*(){a(!0),Object.values(se).forEach(W=>{y(W,!0)});let V=yield g();if(Object.keys(V).length===0){e.setIsFormSubmitted(!0);return}u.gasLimit||V.gasPrice?(x(V),d(Date.now())):y("gasLimit",!1)}),[u,g]),q=(0,Ie.useCallback)(()=>{p?s(!1):e.setIsFormSubmitted(!1)},[p]),C=w(v({},e),{checkInvalid:M,isRewaTransaction:U,isDcdtTransaction:L,isNftTransaction:F,shouldValidateForm:r,areValidatedValuesReady:Boolean(e.isFormSubmitted||t)&&T,isGuardianScreenVisible:p,setIsGuardianScreenVisible:s,isFormValid:T,renderKey:i,txType:_.txType,onValidateForm:O,onInvalidateForm:q,onCloseForm:E,onSubmitForm:k});return Ie.default.createElement(ya.Provider,{value:C},o)}function re(){return(0,Ie.useContext)(ya)}n();n();var ue=b(require("react")),vi=require("formik"),xi=b(require("lodash/uniqBy"));n();n();var eo=b(require("react"));var va=(0,eo.createContext)({});function xa({children:o,value:{networkConfig:e}}){let[t,r]=(0,eo.useState)(null);(0,eo.useEffect)(()=>{a()},[e]);function a(){let p=Pt(e.id);r(p)}return eo.default.createElement(va.Provider,{value:{networkConfig:e,delegationContractData:t}},o)}function me(){return(0,eo.useContext)(va)}n();n();var Br=require("react"),yi=require("@terradharitri/sdk-dapp/constants/index");var Gr=require("@terradharitri/sdk-dapp/types/enums.types");function Vr(){let{networkConfig:o}=me(),[e,t]=(0,Br.useState)(0);function r(){return S(this,null,function*(){let a=yield zn(),p=(a==null?void 0:a.price)||0;t(p)})}return(0,Br.useEffect)(()=>{![Gr.EnvironmentsEnum.mainnet,Gr.EnvironmentsEnum.testnet,Gr.EnvironmentsEnum.devnet].includes(o==null?void 0:o.id)||r()},[o==null?void 0:o.id]),{rewaLabel:o.rewaLabel,rewaPriceInUsd:e,digits:yi.DIGITS}}n();var Ur={},Mr=o=>S(void 0,null,function*(){if(!o)return null;if(o.collection in Ur)return Ur[o.collection];let e=yield Kn(o);return Ur[o.collection]=e,Ur[o.collection]});var ka=(0,ue.createContext)({}),bi="tokenId",ha="nft",s_="tokens",i_="txType",Ta=[];function Sa({children:o,value:e}){let[t,r]=(0,ue.useState)(!0),{values:{tokenId:a,tokens:p,nft:s},errors:{tokenId:i},setFieldValue:d}=(0,vi.useFormikContext)(),{address:_,balance:u}=ve(),{checkInvalid:f}=re(),{networkConfig:{decimals:g}}=me(),y=(0,ue.useRef)(!1),{rewaPriceInUsd:x,digits:T,rewaLabel:k}=Vr(),E=p||Ta,L=(0,ue.useCallback)((C=!0)=>S(this,null,function*(){if(r(C),y.current)return;y.current=!0;let V=yield Hn(_),P=p!=null?p:[],W=(0,xi.default)([...P,...V],Z=>Z.identifier);d(s_,W),Ta=W,y.current=!1,r(!1)}),[_]),F=(0,ue.useCallback)(C=>{d(bi,C,!1)},[]);(0,ue.useEffect)(()=>(L(!1),()=>{Ta=[]}),[]);let U=()=>S(this,null,function*(){let C=zo({nft:s,tokenId:a});if(d(i_,C),C==="SemiFungibleDCDT"||C==="NonFungibleDCDT")return;let V=(O==null?void 0:O.find(P=>P.identifier===a))||s;if(C==="MetaDCDT"&&V){let P=V;d(ha,P);let W=yield Mr(P);P=w(v({},P),{allowedReceivers:W}),d(ha,P)}else d(ha,void 0)}),M=f(bi),O=[{name:"DharitrI eGold",identifier:k,balance:u,decimals:Number(g),ticker:k,usdPrice:x},...E];(0,ue.useEffect)(()=>{U()},[a]);let q=(0,ue.useMemo)(()=>st({tokens:O||[],tokenId:a}),[a,p]);return ue.default.createElement(ka.Provider,{value:{nft:s||(e==null?void 0:e.initialNft),tokens:E,allAvailableTokens:O,areTokensLoading:t&&E.length===0,tokenIdError:i,tokenId:a,tokenDetails:q,rewaLabel:k,RewaIcon:e==null?void 0:e.RewaIcon,rewaPriceInUsd:x,digits:T,isTokenIdInvalid:M,getTokens:L,onChangeTokenId:F}},o)}function _o(){return(0,ue.useContext)(ka)}n();n();var bt=require("@terradharitri/sdk-dapp/constants/index"),Vi=require("formik");n();n();var _e=b(require("react")),qr=require("@terradharitri/sdk-dapp/constants/index"),Fi=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Li=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Aa=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Pi=b(require("bignumber.js")),Di=require("formik");n();n();n();n();var wa=b(require("bignumber.js"));function Ca({amount:o="",available:e,readonly:t=!1,entireBalanceMinusDust:r}){let a=new wa.default(o),s=new wa.default(r).isGreaterThan(a),i=!o,d=xe("amount",t);return(i||s)&&e!==N&&!d}function hi({nft:o,amount:e,readonly:t,maxAmountAvailable:r,maxAmountMinusDust:a,txType:p}){switch(p){case"REWA":return Ca({amount:e,entireBalanceMinusDust:a,readonly:t,available:r});case"DCDT":return e!==r&&!t&&r!==N;default:return o!=null&&e!==(o==null?void 0:o.balance)&&!t}}n();var Ea=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ht=b(require("bignumber.js"));var Kt=(o,e)=>{let t=(0,Ea.stringIsFloat)(String(o))?o:N,r=(0,Ea.stringIsFloat)(String(e))?new Ht.default(e):new Ht.default(N),a=(0,Ht.default)(100).dividedBy(r.dividedBy(t)).toNumber();return Ht.default.minimum(a,100).toNumber()};n();function Or({values:o,errors:e,touched:t}){let r=Boolean(e["amount"]&&t["amount"]);return o.txType==="REWA"?o.amount!=N?r:!1:r}n();var Xt=require("react"),Ti=require("@terradharitri/sdk-dapp/constants/index"),ki=require("@terradharitri/sdk-dapp/utils/smartContracts"),Si=b(require("bignumber.js")),wi=require("formik");n();var Wr=require("react");function c_(o,e){let[t,r]=(0,Wr.useState)(o);return(0,Wr.useEffect)(()=>{let p=setTimeout(()=>r(o),e);return()=>clearTimeout(p)},[o]),t}var gt=c_;var Ia=500;function Ci(o){let{networkConfig:{chainId:e}}=me(),{prefilledForm:t}=re(),r=(0,wi.useFormikContext)(),{balance:a,address:p,nonce:s}=ve(),{values:i,initialValues:d,touched:_,errors:{gasLimit:u,amount:f},setFieldValue:g}=r,{data:y,amount:x,gasLimit:T}=i,k=gt(y,Ia),E=gt(x,Ia),L=gt(T,Ia),[F,U]=(0,Xt.useState)(!1),[M,O]=(0,Xt.useState)(o),q=()=>S(this,null,function*(){let C=u||f,V=k.length>0,P=new Si.default(E).isGreaterThanOrEqualTo(0),W=qo({initialValues:d,gasLimit:T,touched:_}),Z=e!==Ti.MAINNET_CHAIN_ID||!1;if(!t&&(0,ki.isContract)(i.receiver)&&Z&&!W&&!C&&V&&P){U(!0);try{let{gasLimit:B,gasLimitCostError:z}=yield pa({balance:a,address:p,nonce:s,values:i,chainId:e});U(!1),O(z),g("gasLimit",B,!0)}catch(B){U(!1),console.error(B)}}});return(0,Xt.useEffect)(()=>{q()},[k,E,L,i.receiver,t]),{gasCostLoading:F,gasCostError:M}}var Ei=Ci;n();n();var Ii=require("@terradharitri/sdk-dapp/constants/index"),Ai=b(require("bignumber.js"));var Ni=({isNftTransaction:o,isDcdtTransaction:e,data:t,isGuarded:r})=>{let a=Ee(r),p=Ii.GAS_LIMIT.toString();return o&&(p=Re(t)),e&&(p=Be),new Ai.default(p).plus(a).toString(10)};var Gi=(0,_e.createContext)({});function Bi({children:o,initGasLimitError:e}){let t=(0,Di.useFormikContext)(),{values:r,touched:a,errors:{gasPrice:p,gasLimit:s},setFieldValue:i,setFieldTouched:d,initialValues:_}=t,{gasPrice:u,gasLimit:f,data:g,tokenId:y,txType:x,isGuarded:T,receiver:k,amount:E}=r,L=Ee(T),{checkInvalid:F,isNftTransaction:U,isDcdtTransaction:M,prefilledForm:O,isRewaTransaction:q}=re(),{networkConfig:{chainId:C}}=me(),{gasCostLoading:V,gasCostError:P}=Ei(e),W=Ni({isNftTransaction:U,isDcdtTransaction:M,data:g,isGuarded:T}),H=!Or({values:r,errors:t.errors,touched:a})&&F("gasLimit"),B=F("gasPrice"),z=(0,_e.useCallback)((A,be=!1)=>{var et;let At=typeof A=="string"?A:(et=A==null?void 0:A.target)==null?void 0:et.value;i("gasPrice",At,be)},[]),K=(0,_e.useCallback)((A,be=!1)=>{var et;let At=typeof A=="string"?A:(et=A==null?void 0:A.target)==null?void 0:et.value;i("gasLimit",At,be)},[]),le=(0,_e.useCallback)(()=>{i("gasPrice",Pe)},[]),we=(0,_e.useCallback)(()=>{i("gasLimit",W)},[U]),ge=(0,_e.useCallback)(()=>{d("gasPrice",!0)},[]),ye=(0,_e.useCallback)(()=>{d("gasLimit",!0)},[]),R=Boolean(p)||Boolean(s),Le=(0,_e.useMemo)(()=>{let A=!(0,Aa.stringIsInteger)(f),be=!(0,Li.stringIsFloat)(u);if(A||be)return N;let At=qo({initialValues:_,gasLimit:f,touched:a}),ou=!O&&!At&&q?g.trim():"",Dp=(0,Fi.calculateFeeLimit)({gasLimit:f,gasPrice:(0,Y.parseAmount)(u),data:ou,chainId:C,gasPerDataByte:String(qr.GAS_PER_DATA_BYTE),gasPriceModifier:String(qr.GAS_PRICE_MODIFIER)});return(0,Aa.stringIsInteger)(Dp)?Dp:N},[R,u,f,C,O,q,a.gasLimit,g,k,E]);(0,_e.useEffect)(()=>{let A=qo({initialValues:_,gasLimit:f,touched:a});!O&&U&&!A&&K(new Pi.default(Re()).plus(L).toString())},[U,a]),(0,_e.useEffect)(()=>{O||K(qt({txType:x,data:g,isGuarded:T}),!0)},[y,x]);let po={gasPrice:u,gasLimit:f,gasCostLoading:V,feeLimit:Le,defaultGasLimit:W,gasPriceError:p,gasLimitError:s,gasCostError:P,hasErrors:R,isGasLimitInvalid:H,isGasPriceInvalid:B,onChangeGasLimit:K,onChangeGasPrice:z,onBlurGasPrice:ge,onBlurGasLimit:ye,onResetGasPrice:le,onResetGasLimit:we};return _e.default.createElement(Gi.Provider,{value:po},o)}function yt(){return(0,_e.useContext)(Gi)}function Ui(){let{values:o}=(0,Vi.useFormikContext)(),{balance:e}=ve(),{networkConfig:{chainId:t}}=me(),{nft:r,tokens:a}=_o(),{isDcdtTransaction:p,isNftTransaction:s,isRewaTransaction:i}=re(),{gasLimit:d,gasPrice:_}=yt(),{tokenId:u}=o,f=null;s&&r&&(f=Ir({balance:r.balance,decimals:r.type===X.NftEnumType.MetaDCDT?r.decimals:0,digits:bt.DIGITS}));let g=null;if(p){let{decimals:L,balance:F}=st({tokens:a,tokenId:u});g=Ir({balance:F,decimals:L,digits:bt.DIGITS})}let y=N,x=e;if(e&&i){let{entireBalance:L,entireBalanceMinusDust:F}=sa({balance:e,gasPrice:mo(_),gasLimit:d,decimals:bt.DECIMALS,digits:bt.DIGITS,chainId:t});y=L,x=F}let k=i?y:r&&f?f:g;return{maxAmountAvailable:k||N,maxAmountMinusDust:(i?x:k)||N}}var qi=(0,he.createContext)({});function zi({children:o}){let{values:e,errors:t,touched:r,handleBlur:a,setFieldValue:p,setFieldError:s,setFieldTouched:i}=(0,Wi.useFormikContext)(),{readonly:d,uiOptions:_}=re(),{maxAmountAvailable:u,maxAmountMinusDust:f}=Ui(),[g,y]=(0,he.useState)(Kt(e.amount,f)),[x,T]=(0,he.useState)(!1),{nft:k}=_o(),E=_!=null&&_.showAmountSlider?!1:hi({nft:k,amount:e.amount,readonly:d,maxAmountAvailable:u,maxAmountMinusDust:f,txType:e.txType});function L(){T(!1)}let F=(0,he.useCallback)((P,W=!0)=>{if(new zr.default(f).isZero()||!(0,Oi.stringIsFloat)(P.toString())){y(0);return}let H=new zr.default(f).times(P).dividedBy(100),B=(0,ie.formatAmount)({input:(0,Y.parseAmount)(String(H)),digits:Mi.DIGITS,showLastNonZeroDecimal:P>=100});if(W&&p("amount",B),P<0){y(0);return}if(P>100){y(100);return}y(P)},[f,p]),U=(0,he.useCallback)((P,W=!0)=>{var H;let Z=typeof P=="string"?P:(H=P==null?void 0:P.target)==null?void 0:H.value;return i("amount",!0),F(Kt(Z,f),!1),p("amount",Z,W)},[p,F,f]),M=(0,he.useCallback)(P=>s("amount",P),[s]),O=(0,he.useCallback)(()=>{i("amount",!0)},[a]),q=(0,he.useCallback)(()=>(T(!0),U(f||e.amount)),[f]);(0,he.useEffect)(()=>{(0,zr.default)(f).isGreaterThan(0)&&F(Kt(e.amount,f),!1)},[Kt,f]);let C=Or({values:e,errors:t,touched:r}),V={amount:e.amount,error:t.amount,isInvalid:C,maxAmountAvailable:u,maxAmountMinusDust:f,isMaxButtonVisible:E,isMaxClicked:x,amountRange:g,onFocus:L,onBlur:O,onChange:U,onMaxClicked:q,onSetError:M,onSetAmountPercentage:F};return he.default.createElement(qi.Provider,{value:V},o)}function $i(){return(0,he.useContext)(qi)}n();n();var Ve=b(require("react")),Ri=require("formik");var Zi=(0,Ve.createContext)({});function Hi({children:o}){let{values:e,errors:t,touched:r,setFieldValue:a,handleBlur:p,setFieldTouched:s,initialValues:i}=(0,Ri.useFormikContext)(),{checkInvalid:d,prefilledForm:_,isRewaTransaction:u}=re(),{nft:f}=_o(),{receiver:g,txType:y,amount:x,tokenId:T,isAdvancedModeEnabled:k,gasLimit:E}=e,{onChangeGasLimit:L}=yt(),{isGuarded:F}=ve(),U=d("data"),M=(V,P=!1)=>{var H;let W=typeof V=="string"?V:(H=V==null?void 0:V.target)==null?void 0:H.value,Z=qo({initialValues:i,gasLimit:E,touched:r});if(a("data",W,P),!_&&!Z&&u){let B=Ze({data:W,isGuarded:F});L(B)}},O=(0,Ve.useCallback)(()=>{s("data",!0)},[p]),q=(0,Ve.useCallback)(()=>{M("")},[]);(0,Ve.useEffect)(()=>{if(!_){let V=y!=="DCDT"?t.receiver:"",P=aa({txType:y,values:e,nft:f,amountError:Boolean(t.amount),receiverError:V});M(P)}},[x,g,_,f,t.receiver,t.amount,y]),(0,Ve.useEffect)(()=>{!_&&u&&M("")},[T,u]);let C={data:e.data,dataError:t.data,isDataInvalid:U,onChange:M,onBlur:O,onReset:q,isAdvancedModeEnabled:k};return Ve.default.createElement(Zi.Provider,{value:C},o)}function Ki(){return(0,Ve.useContext)(Zi)}n();n();var Ke=b(require("react")),ec=require("formik");n();n();n();var $r=require("react"),ji=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Ji=b(require("lodash/uniqBy"));n();n();var Na=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Fa=require("@terradharitri/sdk-dapp/utils"),Xi=o=>o.reduce((e,t)=>{var f,g;let r=(f=t.receiverAssets)==null?void 0:f.name,a=(g=t.senderAssets)==null?void 0:g.name,p=(0,Na.trimUsernameDomain)(r),s=(0,Na.trimUsernameDomain)(a),i=(0,Fa.isContract)(t.receiver),d=(0,Fa.isContract)(t.sender),_={address:t.receiver,username:i?void 0:p,rawUsername:i?void 0:r},u={address:t.sender,username:d?void 0:s,rawUsername:d?void 0:a};return t?[...e,_,u]:e},[]);function La(){let{address:o}=ve(),[e,t]=(0,$r.useState)(null);function r(){return S(this,null,function*(){try{let a=yield ee(),{data:p}=yield(0,ji.getTransactions)({sender:o,receiver:o,transactionSize:50,apiAddress:a.baseURL,apiTimeout:a.timeout,withUsername:!0}),s=Xi(p),i=(0,Ji.default)(s,d=>d.address);t(i)}catch(a){console.error("Unable to fetch transactions",a),t([])}})}return(0,$r.useEffect)(()=>{r()},[]),e}n();var Qi=require("react");n();var Pa=require("react"),Yi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");function Da(o){let[e,t]=(0,Pa.useState)({}),[r,a]=(0,Pa.useState)(!1);return{verifiedAddresses:e,verifyScamAddress:d=>S(this,[d],function*({address:s,addressToVerify:i=""}){let _=s!==i,u=!(i in e);if(_&&(0,Yi.addressIsValid)(i)&&u&&!r){a(!0);try{let f=yield qn(i,o);t(g=>v(v({},g),f.scamInfo?{[i]:f.scamInfo}:{}))}catch(f){console.error("Unable to find address",f)}a(!1)}}),fetchingScamAddress:r}}function Ga(o){var s;let{address:e}=ve(),{verifiedAddresses:t,verifyScamAddress:r,fetchingScamAddress:a}=Da(),p=(s=t[o])==null?void 0:s.info;return(0,Qi.useEffect)(()=>{o&&r({address:e,addressToVerify:o})},[o]),{scamError:p,fetchingScamAddress:a}}var Va=(0,Ke.createContext)({}),Ba="receiver";function Ua({children:o}){let{values:{receiver:e},errors:{receiver:t},setFieldValue:r,setFieldTouched:a}=(0,ec.useFormikContext)(),{checkInvalid:p}=re(),[s,i]=(0,Ke.useState)(e),{scamError:d,fetchingScamAddress:_}=Ga(e),u=La(),f=(0,Ke.useCallback)((x,T=!1)=>{r(Ba,x,T)},[]),g=(0,Ke.useCallback)(()=>{a(Ba,!0)},[]),y={receiver:e,receiverError:t,receiverInputValue:s,setReceiverInputValue:x=>i(x),isReceiverInvalid:p(Ba),scamError:d,fetchingScamAddress:_,knownAddresses:u,onChangeReceiver:f,onBlurReceiver:g};return Ke.default.createElement(Va.Provider,{value:y},o)}function Xo(){return(0,Ke.useContext)(Va)}n();n();var vt=b(require("react")),lc=require("formik");n();n();var Rr=({knownAddresses:o,inputValue:e,key:t})=>!o||!e?!1:o.some(a=>{var p;return Boolean((p=a[t])==null?void 0:p.startsWith(e))});n();n();n();var sc=require("react"),ic=require("@terradharitri/sdk-dapp/utils");n();var Oa=require("react"),Wa=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var oc=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),tc=b(require("axios"));function rc(o,e){return S(this,null,function*(){var t;try{let r=e||(yield ee()),{request:a,data:p}=yield tc.default.get(`usernames/${o}`,r);if(!(a!=null&&a.responseURL))return null;let[,s]=(t=a.responseURL.split("/accounts/"))!=null?t:[],i=s!=null?s:p.address;return(0,oc.addressIsValid)(i)?p:null}catch(r){return null}})}n();var nc=b(require("axios"));function ac(o,e){return S(this,null,function*(){try{let{data:t}=yield nc.default.get(`${e}/accounts/${o}`);if(t!=null)return t}catch(t){console.error("error fetching numbat account")}return null})}var Ma={};function pc(o){let[e,t]=(0,Oa.useState)(!1),[r,a]=(0,Oa.useState)(Ma);return{usernameAccounts:r,fetchUsernameAccount:i=>S(this,null,function*(){if(!(i in r||e)){t(!0);try{let _=yield rc(i,o),u=_==null?void 0:_.username;a(f=>{var y;let g=w(v({},f),{[i]:{address:(y=_==null?void 0:_.address)!=null?y:"",username:u?String((0,Wa.trimUsernameDomain)(u)):"",rawUsername:u!=null?u:""}});return Ma=g,g})}catch(_){a(u=>w(v({},u),{[i]:null}))}t(!1)}}),fetchUsernameByAddress:i=>S(this,null,function*(){if(!(Object.values(r).find(_=>_&&_.address===i)||e)){t(!0);try{let _=o||(yield ee()),u=yield ac(i,_.baseURL),f=u==null?void 0:u.address,g=u==null?void 0:u.username,y=(0,Wa.trimUsernameDomain)(g);if(!f||!y)return;a(x=>{let T=w(v({},x),{[y]:{address:f,username:String(y),rawUsername:g!=null?g:""}});return Ma=T,T})}catch(_){console.error(_)}t(!1)}}),fetchingUsernameAccount:e}}var cc=({shouldSkipSearch:o=!1,searchPatternToLookFor:e})=>{let{fetchUsernameAccount:t,fetchUsernameByAddress:r,fetchingUsernameAccount:a,usernameAccounts:p}=pc(),s=(0,ic.addressIsValid)(e);return(0,sc.useEffect)(()=>{if(!(!e||o)){if(s){r(e);return}t(e)}},[e,s]),{fetchingUsernameAccount:a,usernameAccounts:p}};var mc=(0,vt.createContext)({}),l_=1e3;function dc({children:o}){var k;let{values:{receiverUsername:e},errors:{receiverUsername:t}}=(0,lc.useFormikContext)(),{receiverInputValue:r,knownAddresses:a}=Xo(),p=vs(r),s=gt(r,l_),i=a==null?void 0:a.some(E=>E.username===r),{usernameAccounts:d}=cc({shouldSkipSearch:Boolean(i),searchPatternToLookFor:s}),_=(k=d[r])==null?void 0:k.username,u=r!==s&&_!==null,f=Rr({key:"username",knownAddresses:a,inputValue:r}),g=!u&&_===void 0&&r,y=Boolean(g&&!p&&!f),T={showUsernameError:Boolean(r&&s&&!u&&!g&&!_&&!p),isUsernameLoading:y,isUsernameDebouncing:u,usernameIsAmongKnown:f,receiverUsername:e,receiverUsernameError:t,isReceiverUsernameInvalid:Boolean(t),usernameAccounts:d,searchQueryIsAddress:p};return vt.default.createElement(mc.Provider,{value:T},o)}function xt(){return(0,vt.useContext)(mc)}n();var ht=b(require("react"));var qa=(0,ht.createContext)({});function za({children:o}){let e=ve(),t=re(),r=_o(),a=$i(),p=yt(),s=Ki(),i=Xo(),d=xt();return ht.default.createElement(qa.Provider,{value:{accountInfo:e,formInfo:t,tokensInfo:r,gasInfo:p,dataFieldInfo:s,receiverInfo:i,receiverUsernameInfo:d,amountInfo:a}},o)}function $(){return(0,ht.useContext)(qa)}function $a({accountInfo:o,formInfo:e,tokensInfo:t,networkConfig:r,children:a,Loader:p,initGasLimitError:s}){let[i,d]=(0,Ce.useState)();function _(){return S(this,null,function*(){let u=!r.skipFetchFromServer,{chainId:f}=r,g=Mo(f),y=uc.fallbackNetworkConfigurations[g]||{};if(u){let T=yield Lt(f);if(T){let k=v(v(v({},y),T),r);Oo(k),d(k);return}}let x=v(v({},y),r);Oo(x),d(x)})}return(0,Ce.useEffect)(()=>{_()},[r]),i?Ce.default.createElement(xa,{value:{networkConfig:i}},Ce.default.createElement(Qn,{value:o},Ce.default.createElement(ba,{value:e},Ce.default.createElement(Sa,{value:t},Ce.default.createElement(Ua,null,Ce.default.createElement(dc,null,Ce.default.createElement(Bi,{initGasLimitError:s},Ce.default.createElement(Hi,null,Ce.default.createElement(zi,null,Ce.default.createElement(za,null,a)))))))))):p!=null?Ce.default.createElement(p,null):null}n();n();function m_(){let{balance:o,address:e,nonce:t,isGuarded:r}=ve(),{networkConfig:a,delegationContractData:p}=me(),s=$(),{receiverInfo:{receiver:i},amountInfo:{amount:d},gasInfo:{gasLimit:_,gasPrice:u},dataFieldInfo:{data:f}}=s,g=["mainnet","testnet"].includes(a.id),y={receiver:i,isInternal:g,balance:o,address:e,isGuarded:r,nonce:t,amount:d,data:f,gasLimit:_,gasPrice:u,delegationContractData:p,chainId:a.id,rewaLabel:a.rewaLabel};return function(T){return S(this,null,function*(){let{initGasLimit:k,initGasLimitError:E}=yield Ot(w(v({},y),{computedTokenId:T}));return{initGasLimit:k,initGasLimitError:E}})}}n();var Zr=require("react");n();n();var Lc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var _c=require("@terradharitri/sdk-dapp/constants/index");var d_="1",fc=({computedNft:o,amount:e})=>{var a,p,s;if(((a=o==null?void 0:o.nft)==null?void 0:a.type)===X.NftEnumType.NonFungibleDCDT)return d_;let t=((p=o==null?void 0:o.nft)==null?void 0:p.type)===X.NftEnumType.MetaDCDT,r=(o==null?void 0:o.quantity)||e;return t&&r?(0,ie.formatAmount)({input:r,decimals:(s=o==null?void 0:o.nft)==null?void 0:s.decimals,showLastNonZeroDecimal:!0,addCommas:!1,digits:_c.DIGITS}):r};n();function gc(o){let{computedNft:e,data:t,amount:r,receiver:a}=o,p=e==null?void 0:e.nft,s=p?Er({nft:p,amount:r,receiver:a,errors:!1}):"";return t||s}n();var yc=o=>S(void 0,null,function*(){let p=o,{configValues:e}=p,t=ot(p,["configValues"]),r=Pt(o.chainId),a=w(v(v({isInternal:["1","T"].includes(o.chainId)},t),e),{delegationContractData:r});return Ot(a)});n();var Tt=require("@terradharitri/sdk-dapp/constants/index");var bc=o=>o!=null&&o!==N?o:(0,ie.formatAmount)({input:String(Tt.GAS_PRICE),decimals:Tt.DECIMALS,showLastNonZeroDecimal:!0,digits:Tt.DIGITS});n();var Ic=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var vc=require("@terradharitri/sdk-dapp/types/tokens.types"),xc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");function hc(o,e){return S(this,null,function*(){let{address:t,identifier:r}=o,{isNft:a}=(0,xc.getIdentifierType)(r);if(!a)return null;try{let p=yield Gt({address:t,identifier:r},e);if((p==null?void 0:p.type)===vc.NftEnumType.MetaDCDT){let s=yield Mr(p);p=w(v({},p),{allowedReceivers:s})}return p}catch(p){console.log(p)}return null})}n();var Cc=require("@terradharitri/sdk-core"),Ec=b(require("bignumber.js"));n();var Tc=require("@terradharitri/sdk-core"),kc=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Sc=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");var u_=o=>o.split("@").map((p,s)=>[2,3].includes(s)?p:(0,Sc.decodePart)(p)),wc=({data:o,nft:e,address:t})=>{let r=o==null?void 0:o.startsWith("DCDTNFTBurn"),a=o==null?void 0:o.startsWith("DCDTNFTTransfer");if((r||a)&&o.includes("@"))try{let[,s,i,d,_]=e?["DCDTNFTTransfer",e.collection,e.nonce,e.quantity,e.receiver]:u_(o),u=r&&!_?t:_,f=[s,i,d,u].every(y=>y),g=(0,kc.addressIsValid)(new Tc.Address(u).bech32());if(f&&g)return{collection:s,nonce:i,quantity:d,receiver:u}}catch(s){console.error("Could not extract NFT from data:",s);return}};var __=(o,e)=>S(void 0,null,function*(){let{address:t,identifier:r}=o;try{return yield Gt({address:t,identifier:r},e)}catch(a){return yield jn(r,e)}}),kt=(o,e)=>S(void 0,null,function*(){let{address:t,nft:r}=o,a=wc(o);try{if(a){let{collection:p,nonce:s,quantity:i,receiver:d}=a,_=`${p}-${s}`,u=yield __({identifier:_,address:t},e);if(u)return{receiver:new Cc.Address(d).bech32(),nft:u,quantity:r?i:new Ec.default(i,16).toString(10)}}}catch(p){console.log(p)}return null});var f_={receiver:"",quantity:""},Ac=r=>S(void 0,[r],function*({data:o,address:e,identifier:t}){if(o)return yield kt({data:o,address:e});let{isNft:a}=(0,Ic.getIdentifierType)(t);if(t&&a){let p=yield hc({identifier:t,address:e});return p?w(v({},f_),{nft:p}):null}return null});n();var Nc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");function g_(o,e){return S(this,null,function*(){let{address:t,identifier:r}=o;try{let{data:a}=yield Rn({address:t,token:r},e);return a}catch(a){console.log(a)}return null})}function Fc(o){let{identifier:e,address:t}=o,{isDcdt:r}=(0,Nc.getIdentifierType)(e);return e&&r?g_({address:t,identifier:e}):null}function y_(){let o=new URLSearchParams(window.location.search);return Object.fromEntries(o).token}function Ra(o){return S(this,null,function*(){let{address:e,rewaLabel:t,configValues:{receiver:r,receiverUsername:a,amount:p,gasPrice:s,data:i,tokenId:d},networkConfig:_}=o,u=y_(),f=d||u,g=f||t;_&&Oo(_);let[y,x,T]=yield Promise.all([Ac({data:i,address:e,identifier:f}),Fc({identifier:f,address:e}),yc(w(v({},o),{computedTokenId:g}))]),{initGasLimit:k,initGasLimitError:E}=T,L={receiver:r,receiverUsername:a,amount:fc({computedNft:y,amount:p}),tokenId:g,gasLimit:k,gasPrice:bc(s),data:gc({computedNft:y,data:i,receiver:r,amount:p})},{isDcdt:F}=(0,Lc.getIdentifierType)(f);return{initialValues:L,nft:y==null?void 0:y.nft,gasLimitCostError:E,computedTokens:x?[x]:[],computedTokenId:g,tokenFound:F?Boolean(x):!0}})}n();function b_(o){let[e,t]=(0,Zr.useState)(null);function r(){return S(this,null,function*(){let a=yield Ra(o);t(a)})}return(0,Zr.useEffect)(()=>{r()},[]),e}n();n();var Dc=require("@terradharitri/sdk-core"),Za=require("@terradharitri/sdk-dapp/utils/smartContracts");n();var Pc=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");function v_({address:o,tx:e}){let t=ga(String(e.data))&&!(0,Pc.addressIsValid)(String(e.receiver))?o:String(e.receiver);return w(v({},e),{receiver:t})}var Hr=v_;function x_({transactions:o,txsDataTokens:e,isMainnet:t,address:r,whitelistedReceivers:a=[]}){if(t)try{let p=o.map(u=>Hr({address:r,tx:u})),s=p.length===0||p.every(({receiver:u})=>u===r||(0,Za.isContract)(u)||a.includes(u)),i=e?Object.values(e).filter(({receiver:u})=>Boolean(u)).map(({receiver:u})=>new Dc.Address(u).bech32()):[],d=i.length>0?i.every(u=>{let f=Boolean(u)&&a.includes(u);return u==null||u===r||(0,Za.isContract)(u)||f}):!0,_=s&&d;return _}catch(p){return console.error("Unable to check whitelisted receivers",p),!1}else return!0}n();var Ka=require("@terradharitri/sdk-dapp/models/newTransaction"),qc=require("@terradharitri/sdk-dapp/utils/transactions/getTokenFromData"),zc=require("@terradharitri/sdk-dapp/utils/transactions/parseMultiDcdtTransferData");n();n();var Ha=require("@terradharitri/sdk-dapp/constants/index");var St={insufficientFunds:"Insufficient funds",invalidAddress:"Invalid address",invalidGasPrice:"Invalid gas price",invalidNumber:"Invalid number",invalidFeePerDataByte:"Invalid fee per data byte",cannotBeZero:"Cannot be zero",required:"Required",amountTooSmall:"Amount too small",sameAsOwnerAddress:"Same as owner address",receiverNotAllowed:"Receiver not allowed",invalidHerotag:"Invalid herotag",tooLowGasLimit:(o=Ha.GAS_LIMIT)=>`Gas limit must be greater or equal to ${o}`,tooHighGasLimit:(o=Ha.GAS_LIMIT)=>`Gas limit must be lower than ${o}`,tooLowGasPrice:(o=Pe)=>`Gas price must be greater or equal to ${o}`,tooHighGasPrice:(o=lt)=>`Gas price must be lower or equal to ${o}`,maxDecimalsAllowed:o=>`Maximum ${o} decimals allowed`};n();n();function Gc(o){let{txsDataTokens:e,dataId:t,rewaLabel:r}=o,a=e==null?void 0:e[t];return a||{tokenId:r,amount:"",type:"",nonce:"",receiver:""}}n();var h_="nftTransaction";function Bc(o,e){return S(this,null,function*(){let{type:t,nonce:r,amount:a,receiver:p,tokenId:s,data:i,address:d}=o;if(t===h_){let _={collection:s,nonce:r,quantity:a,receiver:p};return yield kt({data:`${"DCDTNFTTransfer"}@`,nft:_,address:d},e)}else return yield kt({data:i,address:d},e)})}n();var T_="dcdtTransaction",k_="scCall";function Vc(o){let{type:e,rewaLabel:t,tokenId:r,nftFound:a}=o;return(!e||[k_,T_].includes(e))&&r!==t&&a===!1?r:""}n();function Uc(r,a){return S(this,arguments,function*({tokenId:o,parsedTokenAmount:e},t){try{if(!o)return{tokenData:null,tokenAmount:N,tokenFound:!1};let p=yield Zn(o,t),{decimals:s}=p,i=(0,ie.formatAmount)({input:e,decimals:s,digits:s,addCommas:!1,showLastNonZeroDecimal:!0});return{tokenData:p,tokenAmount:i,tokenFound:!Array.isArray(p)&&p.identifier===o}}catch(p){return{tokenData:null,tokenAmount:N,tokenFound:!1}}})}n();var Co=require("@terradharitri/sdk-dapp/constants/index"),Mc=require("@terradharitri/sdk-dapp/utils/transactions/isTokenTransfer");function Oc(o){let{tx:e,tokenId:t,rewaLabel:r,tokenFound:a,tokenAmount:p}=o,s=e.transaction.toPlainObject(),{receiver:i,receiverUsername:d,senderUsername:_}=s,f=Boolean(t&&(0,Mc.isTokenTransfer)({tokenId:t,erdLabel:r}))?Be:N;return{receiver:i,amount:a?p:(0,ie.formatAmount)({input:s.value?s.value:N,decimals:Co.DECIMALS,digits:Co.DIGITS,showLastNonZeroDecimal:!0,addCommas:!1}),tokenId:a?t:r,gasLimit:String(s.gasLimit.valueOf()||f),gasPrice:(0,ie.formatAmount)({input:String(s.gasPrice.valueOf()||Co.GAS_PRICE),decimals:Co.DECIMALS,digits:Co.DIGITS,showLastNonZeroDecimal:!0,addCommas:!1}),receiverUsername:d,senderUsername:_,data:String(s.data),nonce:s.nonce.valueOf().toString()}}n();var Wc=d=>S(void 0,[d],function*({tx:o,txsDataTokens:e,rewaLabel:t,address:r,balance:a,chainId:p,ledger:s,apiConfig:i}){let _=o.transaction.getData().toString(),u=String(_||o.multiTxData),{amount:f,tokenId:g,type:y,receiver:x,nonce:T}=Gc({txsDataTokens:e,dataId:u,rewaLabel:t}),k=yield Bc({type:String(y),nonce:String(T),address:r,amount:f,receiver:x,tokenId:g,data:_},i),E=Vc({type:y,rewaLabel:t,tokenId:g,nftFound:Boolean(k)}),{tokenData:L,tokenAmount:F,tokenFound:U}=yield Uc({tokenId:E,parsedTokenAmount:f},i),M=Oc({tx:o,tokenId:g,rewaLabel:t,tokenFound:U,tokenAmount:F}),O={};try{let q=w(v({},M),{txType:zo({nft:k==null?void 0:k.nft,tokenId:g}),address:r,balance:a,chainId:p,ignoreTokenBalance:!0,nft:k==null?void 0:k.nft,tokens:L?[L]:[],ledger:s});Ko(St).validateSync(q)}catch(q){let{path:C,message:V}=q;O={[String(C)]:String(V)}}return O});function S_(o){let{transaction:e,transactionIndex:t,trx:r}=o;return{newTx:w(v({},e),{transaction:(0,Ka.newTransaction)(e),multiTxData:r.data,transactionIndex:t}),txsData:{[r.data]:{tokenId:r.token||"",amount:r.amount||"",type:r.type,nonce:r.nonce||"",multiTxData:r.data,receiver:r.receiver}}}}function w_(o){let{extractedTxs:e,address:t,chainId:r}=o,a={},p=[];return e.forEach((s,i)=>{let d=Hr({address:t,tx:s}),_=(0,zc.parseMultiDcdtTransferData)(d.data);if(_.length>0)_.forEach(u=>{let{newTx:f,txsData:g}=S_({trx:u,transaction:d,transactionIndex:i});a=v(v({},a),g),p.push(f)});else{let{tokenId:u,amount:f}=(0,qc.getTokenFromData)(d.data);u&&d.data&&(a=w(v({},a),{[d.data]:{tokenId:u,amount:f,receiver:d.receiver}})),p.push(w(v({},d),{transactionIndex:i,transaction:(0,Ka.newTransaction)(w(v({},d),{chainID:r}))}))}}),{allTransactions:p,txsDataTokens:a}}function C_(o){return S(this,null,function*(){let{address:e,rewaLabel:t,balance:r,chainId:a,apiConfig:p,allTransactions:s,txsDataTokens:i}=o,d={},_=s.map(f=>Wc({tx:f,txsDataTokens:i,address:e,rewaLabel:t,balance:r,chainId:a,apiConfig:p})),u=yield Promise.all(_);for(let f of u)d=v(v({},d),f);return d})}function E_(o){return S(this,null,function*(){let{extractedTxs:e}=o;if(e&&e.length>0){let{allTransactions:t,txsDataTokens:r}=w_(o),a=yield C_(w(v({},o),{allTransactions:t,txsDataTokens:r}));return{txsDataTokens:r,errors:a,parsedTransactions:t}}return null})}n();n();n();var wt=b(require("react")),$c=require("@fortawesome/free-solid-svg-icons"),Rc=require("@fortawesome/react-fontawesome"),Zc=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Hc=require("react-tooltip"),zS=require("react-tooltip/dist/react-tooltip.css");n();var I_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(I_));var Kr={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"};var Xa=({rewaLabel:o})=>wt.default.createElement("div",{className:Kr.infoDust},wt.default.createElement(Hc.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:Kr.infoDustTooltip},"A minimal amount of"," ",wt.default.createElement(Zc.FormatAmount,{rewaLabel:o,value:Uo,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),wt.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:Kr.infoDustTrigger},wt.default.createElement(Rc.FontAwesomeIcon,{icon:$c.faInfoCircle,className:"i-icon"})));n();n();var ja=b(require("react")),Xc=require("@terradharitri/sdk-dapp/UI/Loader/index");n();var A_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(A_));var Kc={loader:"dapp-core-component__styles-module__loader"};var N_=()=>ja.default.createElement("div",{className:Kc.loader},ja.default.createElement(Xc.Loader,null));n();n();var Q=b(require("react")),xn=require("@terradharitri/sdk-core/out"),Jd=b(require("classnames")),Yd=require("formik");n();var F_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(F_));var I={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};n();n();var tr=b(require("react")),Cl=b(require("classnames"));n();n();n();var Te=b(require("react")),Sl=require("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");n();var hl=require("react");n();n();var fo=b(require("react")),Jr=require("@terradharitri/sdk-dapp/constants/index"),Ya=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Yc=require("@terradharitri/sdk-dapp/UI/UsdValue/index");n();n();var oo=b(require("react")),jc=require("@fortawesome/free-solid-svg-icons"),Jc=require("@fortawesome/react-fontawesome"),Ja=b(require("classnames"));n();var L_=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(L_));var Eo={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"};var G_=(Jt(),tt(jt)).default,jr=o=>{let{avatar:e,type:t}=o;return t==="NonFungibleDCDT"?oo.default.createElement("div",{className:(0,Ja.default)(Eo.tokenAvatar,Eo.tokenAvatarNFT)},"NFT"):t==="SemiFungibleDCDT"?oo.default.createElement("div",{className:(0,Ja.default)(Eo.tokenAvatar,Eo.tokenAvatarSFT)},"SFT"):t==="REWA"?oo.default.createElement("div",{className:Eo.tokenAvatar},o.RewaIcon?oo.default.createElement(o.RewaIcon,null):oo.default.createElement(G_,null)):e?oo.default.createElement("div",{className:Eo.tokenAvatar},oo.default.createElement("img",{src:e})):oo.default.createElement("div",{className:Eo.tokenAvatar},oo.default.createElement(Jc.FontAwesomeIcon,{icon:jc.faDiamond}))};n();var B_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(B_));var Yt={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Qc=({label:o="Amount",amount:e,txType:t,tokenDecimals:r,tokenId:a,rewaLabel:p,rewaPriceInUsd:s,nft:i,tokenAvatar:d})=>{let _=(i==null?void 0:i.decimals)||0,u=t==="DCDT",f=t==="MetaDCDT",g=t==="NonFungibleDCDT",y=f?(0,Y.parseAmount)(e,i==null?void 0:i.decimals):e,x=Boolean(i&&e),T=a.split("-")[0],k=u?r:Jr.DECIMALS,E=x?fo.default.createElement(Ya.FormatAmount,{rewaLabel:p,value:y,decimals:_,digits:t==="MetaDCDT"?Jr.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):fo.default.createElement(Ya.FormatAmount,{rewaLabel:p,value:(0,Y.parseAmount)(e,k),showLabel:!1,decimals:k,showLastNonZeroDecimal:!0,token:u?T:p,"data-testid":"confirmAmount"});return g?null:fo.default.createElement("div",{className:Yt.amount},fo.default.createElement("span",{className:I.label},o),fo.default.createElement("div",{className:Yt.token},fo.default.createElement(jr,{type:t,avatar:d}),fo.default.createElement("div",{className:Yt.value},E," ",T)),!u&&fo.default.createElement(Yc.UsdValue,{amount:e,usd:s,"data-testid":"confirmUsdValue",className:Yt.price}))};n();n();var ne=b(require("react")),el=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");n();var V_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(V_));var Qt={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"};var U_=(o,e)=>[...o.matchAll(new RegExp(e,"gi"))].map(t=>t.index),ol=({label:o="Data",scCallLabel:e="SC Call",data:t,highlight:r,isScCall:a})=>{let p=ne.default.createElement(ne.default.Fragment,null,t),[s,...i]=r&&a?r.split("@"):[];if(t&&r&&U_(t,r).length===1)switch(!0){case t.startsWith(r):{let[,d]=t.split(r);p=ne.default.createElement(ne.default.Fragment,null,r,ne.default.createElement("span",null,d));break}case t.endsWith(r):{let[d]=t.split(r);p=ne.default.createElement(ne.default.Fragment,null,ne.default.createElement("span",null,d),r);break}default:{let[d,_]=t.split(r);p=ne.default.createElement(ne.default.Fragment,null,ne.default.createElement("span",null,d),r,ne.default.createElement("span",null,_));break}}return ne.default.createElement(ne.default.Fragment,null,s&&ne.default.createElement("div",{className:Qt.data},ne.default.createElement("span",{className:I.label},e),ne.default.createElement("div",{"data-testid":"confirmScCall",className:Qt.value},[(0,el.decodePart)(s),...i].join("@"))),ne.default.createElement("div",{className:Qt.data},ne.default.createElement("span",{className:I.label},o),ne.default.createElement("div",{"data-testid":"confirmData",className:Qt.value},t?p:"N/A")))};n();n();var Io=b(require("react")),tl=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");n();var M_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(M_));var er={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var rl=({rewaPriceInUsd:o,label:e="Fee",feeLimit:t,rewaLabel:r})=>Io.default.createElement("div",{className:er.fee},Io.default.createElement("span",{className:I.label},e),Io.default.createElement("div",{className:er.token},Io.default.createElement(jr,{type:"REWA"}),Io.default.createElement("div",{className:er.value},Io.default.createElement(tl.FormatAmount,{rewaLabel:r,value:t,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),t!==N&&Io.default.createElement("span",{className:er.price},Ut({feeLimit:t,rewaPriceInUsd:o})));n();n();var De=b(require("react")),pl=require("@fortawesome/free-solid-svg-icons"),sl=require("@fortawesome/react-fontawesome"),il=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),cl=require("@terradharitri/sdk-dapp/UI/CopyButton"),ll=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),ml=require("@terradharitri/sdk-dapp/UI/Trim"),dl=b(require("classnames"));n();var{default:go}=(al(),tt(nl));n();var q_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(q_));var Xe={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"};var ul=({label:o="Receiver",receiver:e,scamReport:t,receiverUsername:r})=>{let a=Boolean(r),p=r!=null?r:e;return De.default.createElement("div",{className:Xe.confirmReceiver},De.default.createElement("span",{className:I.label},o),De.default.createElement("span",{className:(0,dl.default)(Xe.value,{[Xe.shrunk]:a}),"data-testid":"confirmReceiver"},a&&De.default.createElement(go,{className:Xe.icon}),p,a&&De.default.createElement(ll.ExplorerLink,{page:`/${il.ACCOUNTS_ENDPOINT}/${e}`,className:Xe.explorer})),a&&De.default.createElement("span",{className:Xe.subValue},De.default.createElement(ml.Trim,{text:e,className:Xe.subValueTrim}),De.default.createElement(cl.CopyButton,{text:e,className:Xe.subValueCopy})),t&&De.default.createElement("div",{className:Xe.scam},De.default.createElement("span",null,De.default.createElement(sl.FontAwesomeIcon,{icon:pl.faExclamationTriangle,className:Xe.icon}),De.default.createElement("small",{"data-testid":"confirmScamReport"},t))))};n();n();var Ao=b(require("react"));n();n();var ce=b(require("react")),_l=require("@fortawesome/free-solid-svg-icons"),fl=require("@fortawesome/react-fontawesome"),gl=b(require("@terradharitri/sdk-dapp/constants/index")),yl=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),bl=b(require("classnames"));n();var z_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(z_));var jo={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};var $_=(Jt(),tt(jt)).default,or=({RewaIcon:o,inDropdown:e=!1,isRewa:t,nftTokenDetails:r,nftType:a,token:p})=>{var E,L;let{name:s,identifier:i,balance:d,decimals:_}=p,u=((E=p.assets)==null?void 0:E.svgUrl)||((L=p.assets)==null?void 0:L.pngUrl)||"",f=u?28:20,[g,y]=(0,ce.useState)(s);(0,ce.useEffect)(()=>{var U;((U=r==null?void 0:r.uris)==null?void 0:U.some(M=>{let O=c.Buffer.from(String(M),"base64").toString(),{found:q}=ks(O,r==null?void 0:r.scamInfo);return q}))||y(s)},[s]);let x=ce.default.createElement(fl.FontAwesomeIcon,{icon:_l.faDiamond});a==X.NftEnumType.NonFungibleDCDT&&(x=ce.default.createElement("div",{className:"nft-type","data-testid":`${i}-type-nft`},"NFT")),a===X.NftEnumType.SemiFungibleDCDT&&(x=ce.default.createElement("div",{className:"nft-type","data-testid":`${i}-type-sft`},"SFT"));let T=!e&&a!==X.NftEnumType.NonFungibleDCDT,k=ce.default.createElement("div",{className:jo.tokenElementCircle},x);return u&&(k=ce.default.createElement("img",{className:jo.tokenElementCircle,src:u,alt:s,height:f})),t&&(k=ce.default.createElement("div",{className:jo.tokenElementCircle},o?ce.default.createElement(o,{height:36}):ce.default.createElement($_,{height:36}))),ce.default.createElement("div",{className:(0,bl.default)(I.value,jo.tokenElement)},ce.default.createElement("div",{className:jo.tokenElementWrapper},k),ce.default.createElement("div",{"data-testid":"tokenName"},ce.default.createElement("span",{"data-testid":`${i}-element`},ce.default.createElement("span",null,g)," ",ce.default.createElement("span",{className:jo.tokenElementIdentifier},i)),T&&ce.default.createElement(yl.FormatAmount,{rewaLabel:i,value:d||N,digits:a===X.NftEnumType.SemiFungibleDCDT?0:gl.DIGITS,token:i,showLabel:!1,decimals:_,"data-testid":`${i}-balance`})))};n();var R_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(R_));var vl={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"};var xl=({RewaIcon:o,rewaLabel:e,isDcdtTransaction:t,nft:r,tokenAvatar:a,tokenId:p,tokenIdError:s})=>{var d;let i=(r==null?void 0:r.name)||"";return Ao.default.createElement("div",{className:vl.token},Ao.default.createElement("span",{className:I.label},r?Ao.default.createElement("span",null,r==null?void 0:r.name," "):"","Token"),Ao.default.createElement("div",null,r?Ao.default.createElement(or,{inDropdown:!0,token:{name:r==null?void 0:r.name,identifier:r==null?void 0:r.identifier,decimals:0,balance:N,ticker:"",assets:{svgUrl:((d=r==null?void 0:r.assets)==null?void 0:d.svgUrl)||""}}}):Ao.default.createElement(or,{inDropdown:!0,token:{name:t?i:"DharitrI eGold",identifier:t?p:e,decimals:0,balance:N,ticker:"",assets:{svgUrl:a||""}},isRewa:p===e,RewaIcon:o})),s&&Ao.default.createElement("div",{className:I.error},s))};var yo=class extends hl.Component{render(){return null}};yo.Receiver=ul,yo.Amount=Qc,yo.Fee=rl,yo.Data=ol,yo.Token=xl;var Qr=yo;n();n();var bo=b(require("react")),Qa=b(require("classnames"));n();var Z_=`.dapp-core-component__styles-module__preview {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Z_));var Ue={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"};var en=o=>{let u=o,{txType:e,onClick:t,identifier:r}=u,a=ot(u,["txType","onClick","identifier"]),{name:p,thumbnail:s}=Ts({nft:a}),i=["NonFungibleDCDT","SemiFungibleDCDT"].includes(e),d=e==="NonFungibleDCDT"?"NFT":"SFT",_=f=>{f.preventDefault(),t&&t(f,Object.assign(a,{identifier:r}))};return i?bo.default.createElement("div",{onClick:_,"data-testid":"token-preview",className:(0,Qa.default)(Ue.preview,{[Ue.clickable]:Boolean(t)})},bo.default.createElement("img",{src:s,className:Ue.image}),bo.default.createElement("div",{className:Ue.content},bo.default.createElement("div",{className:Ue.left},bo.default.createElement("div",{"data-testid":"token-preview-name",className:Ue.name},p),bo.default.createElement("div",{"data-testid":"token-preview-identifier",className:Ue.identifier},r)),bo.default.createElement("div",{className:Ue.right},bo.default.createElement("div",{className:(0,Qa.default)(Ue.badge,{[Ue.nft]:e==="NonFungibleDCDT",[Ue.sft]:e==="SemiFungibleDCDT"})},d)))):null};n();var H_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(H_));var vo={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};n();n();var on=require("@terradharitri/sdk-dapp/types/enums.types"),Tl=({providerType:o,hasGuardianScreen:e})=>e?"Confirm & Continue":o===on.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":o===on.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":o===on.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";n();var kl=({receiverAddress:o,knownAddresses:e,existingReceiverUsername:t})=>{if(t)return t;let r=e==null?void 0:e.find(a=>a.address===o);return r==null?void 0:r.username};var wl=({isConfirmCloseBtnVisible:o=!0,providerType:e})=>{var ge;let{setIsGuardianScreenVisible:t}=re(),{receiverUsernameInfo:{receiverUsername:r},receiverInfo:{scamError:a,receiver:p,knownAddresses:s},formInfo:i,gasInfo:{gasCostError:d,feeLimit:_},accountInfo:{isGuarded:u},dataFieldInfo:{data:f},amountInfo:g,tokensInfo:y}=$(),{tokenId:x,tokenDetails:T,nft:k,rewaPriceInUsd:E,rewaLabel:L}=y,{readonly:F,onCloseForm:U,onInvalidateForm:M,onPreviewClick:O,onSubmitForm:q,txType:C,hasGuardianScreen:V}=i,P=()=>{t(!0)},[W,Z]=(0,Te.useState)(!1),H=C==="NonFungibleDCDT",B=Tl({providerType:e,hasGuardianScreen:V}),z=ye=>{ye.preventDefault(),F?U():M()},K=()=>{if(u&&V)return P();Z(!0),q()},le=!["REWA","DCDT","MetaDCDT"].includes(C),we=kl({knownAddresses:s,receiverAddress:p,existingReceiverUsername:r});return Te.default.createElement("div",{className:vo.summary},Te.default.createElement("div",{className:vo.fields},le&&k&&Te.default.createElement(en,v({onClick:O,txType:C},k)),Te.default.createElement(Sl.ConfirmReceiver,{amount:g.amount,scamReport:a!=null?a:null,receiver:p,receiverUsername:we}),Te.default.createElement("div",{className:vo.columns},!H&&Te.default.createElement("div",{className:vo.column},Te.default.createElement(Qr.Amount,{txType:C,tokenId:x,tokenDecimals:T.decimals,amount:String(g.amount),nft:k,rewaPriceInUsd:E,rewaLabel:L,tokenLabel:T.name,tokenAvatar:((ge=T.assets)==null?void 0:ge.svgUrl)||""})),Te.default.createElement("div",{className:vo.column},Te.default.createElement(Qr.Fee,{rewaLabel:L,rewaPriceInUsd:E,feeLimit:_}))),Te.default.createElement(Qr.Data,{data:f}),d&&Te.default.createElement("p",{className:I.error},d)),Te.default.createElement("div",{className:vo.buttons},Te.default.createElement("button",{className:I.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:W,onClick:K},B),o&&Te.default.createElement("button",{className:I.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:z},F?"Close":"Back")))};var ep=o=>{let{formInfo:{setHasGuardianScreen:e}}=$();return(0,tr.useEffect)(()=>{o.hasGuardianScreen&&e(!0)},[]),tr.default.createElement("div",{className:(0,Cl.default)(vo.confirm,o.className),"data-testid":"confirmScreen"},tr.default.createElement(wl,v({},o)))};n();n();n();var j=b(require("react")),an=require("@fortawesome/free-solid-svg-icons"),np=require("@fortawesome/react-fontawesome"),nn=b(require("classnames")),_m=require("formik"),fm=b(require("react-select"));n();n();var El=b(require("react")),Il=require("react-select");n();var K_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(K_));var D={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};var Al=o=>El.default.createElement(Il.components.Control,w(v({},o),{className:D.receiverSelectControl}));n();n();var rr=b(require("react")),Gl=require("@fortawesome/free-solid-svg-icons"),Bl=require("@fortawesome/react-fontawesome"),Vl=b(require("classnames")),Ul=require("react-select");n();n();var Ct=(o,e)=>{let t=e.toLowerCase(),r=o.label.toLowerCase(),a=o.value.toLowerCase();return e?r.includes(t)||a.includes(t):!0};n();var Nl=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Fl=require("@terradharitri/sdk-dapp/utils"),op=o=>o?o.filter(r=>(0,Fl.addressIsValid)(r.address)).map(r=>{let a=r.username?String((0,Nl.trimUsernameDomain)(r.username)):r.address;return{value:r.address,label:a}}):[];n();var Ll=({setOption:o,setAllValues:e})=>(r,a)=>{["input-blur","menu-close"].includes(a.action)||(e(r),r||o(null))};n();var Pl=({setInputValue:o,setOption:e,changeAndBlurInput:t})=>a=>{!a||(e(a),t(a.value),a.value!==a.label?o(a.label):o(a.value))};n();var Dl=({options:o,usernameAccounts:e,knownAddresses:t,setFieldValue:r,setInputValue:a,setOption:p})=>i=>{var T,k,E,L;let d=o.find(F=>F.value===i&&F.value!==F.label),_=d==null?void 0:d.label,u,f,g=(T=e[i])==null?void 0:T.username;g&&(_=g,u=g,f=(k=e[i])==null?void 0:k.rawUsername);let y=t.find(F=>F.address===i);y!=null&&y.username&&(_=y==null?void 0:y.username,u=y==null?void 0:y.username,f=y==null?void 0:y.rawUsername);let x=_!=null?_:i;a(x),p({value:i,label:x}),r("receiver",(L=(E=e[i])==null?void 0:E.address)!=null?L:i),r("receiverUsername",u),r("rawReceiverUsername",f)};var Ml=o=>{let{selectProps:e,isDisabled:t,options:r}=o,{menuIsOpen:a,value:p,isLoading:s}=e,i=(0,rr.useMemo)(()=>r.find(f=>{let g=f,y=p;return y?Ct(g,y.label):null}),[p,r]),d=r.length===0&&!s,_=Boolean(p)&&!i,u=t||d||_;return s?rr.default.createElement(Bl.FontAwesomeIcon,{icon:Gl.faSpinner,spin:!0,className:D.receiverSelectSpinner}):rr.default.createElement(Ul.components.DropdownIndicator,w(v({},o),{className:(0,Vl.default)(D.receiverSelectIndicator,{[D.expanded]:a,[D.hidden]:u})}))};n();n();var Wl=b(require("react")),ql=require("@terradharitri/sdk-dapp/utils"),zl=b(require("classnames")),$l=require("react-select");n();n();var Ol=(o,e)=>{let t=o.current;if(!t||!t.state.focusedOption)return!1;let r=t.state.focusedOption,a=r.label.toLowerCase(),p=r.value.toLowerCase(),s=a!==p,i=s&&a.startsWith(e.toLowerCase());return s&&!e?!0:i};var Rl=o=>e=>{let{selectProps:t,value:r}=e,{inputValue:a,menuIsOpen:p}=t,{receiverUsernameInfo:{receiverUsername:s}}=$(),i=Ol(o,a),d=(0,ql.addressIsValid)(String(r)),_=Boolean(s)||i,u=d&&p||!d&&a;return Wl.default.createElement($l.components.Input,w(v({},e),{"data-testid":"receiver",className:(0,zl.default)(D.receiverSelectInput,{[D.visible]:u,[D.spaced]:_})}))};n();n();var Zl=b(require("react")),Hl=require("react-select");var Kl=o=>Zl.default.createElement(Hl.components.Menu,w(v({},o),{className:D.receiverSelectMenu}));n();n();var ke=b(require("react")),tn=require("@terradharitri/sdk-dapp/UI/Trim"),nr=b(require("classnames")),Xl=require("react-select");var jl=o=>{let{selectProps:e,focusedOption:t}=o,{value:r,inputValue:a}=e,p=t,s=p?p.label.toLowerCase():null,i=p&&p.label!==p.value,u=(s&&(!r||r&&a)?s.startsWith(a.toLowerCase()):!1)&&p?p.label.replace(p.label.substring(0,a.length),a):null,f=u&&!a,g=u&&a.length<u.length/2,y=u&&Boolean(a)&&g,x=u&&Boolean(a);return ke.default.createElement(ke.default.Fragment,null,y&&!i&&ke.default.createElement("div",{className:(0,nr.default)(D.receiverSelectAutocomplete,D.receiverSelectAutocompleteUntrimmed)},u),x&&i&&ke.default.createElement("div",{className:(0,nr.default)(D.receiverSelectAutocomplete,D.receiverSelectAutocompleteUsername)},ke.default.createElement(go,{className:D.receiverSelectAutocompleteIcon}),u,ke.default.createElement("span",{className:D.receiverSelectAutocompleteWrapper},"(",ke.default.createElement(tn.Trim,{text:p.value}),")")),f&&ke.default.createElement("span",{className:(0,nr.default)(D.receiverSelectAutocomplete,{[D.receiverSelectAutocompleteUsername]:i})},i?ke.default.createElement(ke.default.Fragment,null,ke.default.createElement("span",null,ke.default.createElement(go,{className:(0,nr.default)(D.receiverSelectAutocompleteIcon,D.receiverSelectAutocompleteIconMuted)}),p.label),ke.default.createElement("span",{className:D.receiverSelectAutocompleteWrapper},"(",ke.default.createElement(tn.Trim,{text:p.value}),")")):ke.default.createElement(tn.Trim,{text:u})),ke.default.createElement(Xl.components.MenuList,w(v({},o),{className:D.receiverSelectList})))};n();n();var to=b(require("react")),tp=require("@terradharitri/sdk-dapp/UI/Trim"),Yl=b(require("classnames")),Ql=require("react-select");n();n();var ar=b(require("react"));n();var X_=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(X_));var Jl={highlight:"dapp-core-component__styles-modules__highlight"};var pr=({highlight:o,text:e=""})=>{let t=e.split(" "),r=o.toLowerCase(),a=new RegExp(`(${r})`,"gi"),p=t.map(s=>s.split(a).filter(i=>i));return ar.default.createElement("span",{className:Jl.highlight},p.map((s,i)=>{let d=`${s}-${i}`;return ar.default.createElement("span",{key:d},s.map((_,u)=>{let f=_.toLowerCase()===r,g=r&&f,y=`${_}-${u}`;return g?ar.default.createElement("strong",{key:y},_):ar.default.createElement("span",{key:y},_)}))}))};var em=o=>{let{isFocused:e,data:t,selectProps:r}=o,{inputValue:a}=r,p=t,s=p.value!==p.label;return to.default.createElement(Ql.components.Option,w(v({},o),{className:(0,Yl.default)(D.receiverSelectOption,{[D.focused]:e})}),s?to.default.createElement(to.default.Fragment,null,to.default.createElement("span",{className:D.receiverSelectOptionUsername},to.default.createElement(go,{className:D.receiverSelectOptionUsernameIcon}),to.default.createElement(pr,{text:p.label,highlight:a})),to.default.createElement("span",{className:D.receiverSelectOptionNameWrapper},"(",to.default.createElement(tp.Trim,{text:p.value,className:D.receiverSelectOptionName}),")")):to.default.createElement(tp.Trim,{text:p.value,className:D.receiverSelectOptionName}))};n();n();var om=b(require("react")),tm=b(require("classnames")),rm=require("react-select");var nm=o=>{let{selectProps:e,isFocused:t,className:r}=o,{menuIsOpen:a}=e;return om.default.createElement(rm.components.SelectContainer,w(v({},o),{className:(0,tm.default)(r,{[D.expanded]:a,[D.focused]:t&&a})}))};n();n();var ro=b(require("react")),rp=require("@terradharitri/sdk-dapp/UI/Trim"),am=require("@terradharitri/sdk-dapp/utils"),pm=b(require("classnames")),sm=require("react-select");var im=o=>{let{selectProps:e,isDisabled:t}=o,{value:r,menuIsOpen:a}=e,p=r,{receiverInfo:{receiver:s},receiverUsernameInfo:{receiverUsername:i}}=$(),d=i!=null?i:p&&p.value!==p.label,_=p?{value:s!=null?s:p.value,label:p.label}:null,u=_&&(d||!d&&!a)&&(0,am.addressIsValid)(_.value);return ro.default.createElement(sm.components.ValueContainer,w(v({},o),{className:D.receiverSelectValue}),u&&ro.default.createElement("span",{className:(0,pm.default)(D.receiverSelectSingle,{[D.disabled]:t})},d?ro.default.createElement(ro.default.Fragment,null,ro.default.createElement("span",{className:D.receiverSelectSingleUsername},ro.default.createElement(go,{className:D.receiverSelectSingleUsernameIcon}),_.label),ro.default.createElement("span",{className:D.receiverSelectSingleTrimWrapper},"(",ro.default.createElement(rp.Trim,{text:_.value,className:D.receiverSelectSingleTrim}),")")):ro.default.createElement(rp.Trim,{text:_.value,className:D.receiverSelectSingleTrim})),o.children)};n();n();var cm=require("formik");var rn=()=>{let{receiverInfo:{receiverError:o,isReceiverInvalid:e},receiverUsernameInfo:{receiverUsernameError:t,isReceiverUsernameInvalid:r,receiverUsername:a}}=$(),{touched:{receiver:p}}=(0,cm.useFormikContext)(),s=e&&p||r;return a!=null&&a.startsWith("drt1")?{isInvalid:e,receiverErrorDataTestId:"receiverError",error:o}:{isInvalid:s,receiverErrorDataTestId:r?"receiverUsernameError":"receiverError",error:r?t:o}};n();n();var mm=require("@terradharitri/sdk-dapp/utils"),dm=require("formik");n();n();var lm=({knownAddresses:o,inputValue:e})=>!o||!e?!1:o.filter(r=>{var i;let a=(i=r.username)!=null?i:r.address,p=r.address;return Ct({label:a,value:p,data:{label:a,value:p}},e)}).length>0;var um=({menuIsOpen:o})=>{let{isInvalid:e}=rn(),{values:{nft:t}}=(0,dm.useFormikContext)(),{showUsernameError:r,isUsernameLoading:a,isUsernameDebouncing:p,usernameIsAmongKnown:s,searchQueryIsAddress:i}=xt(),{receiverInputValue:d,knownAddresses:_}=Xo(),u=Rr({key:"address",knownAddresses:_,inputValue:d}),f=lm({inputValue:d,knownAddresses:_}),g=i&&(!u||!o)&&!(0,mm.addressIsValid)(d),y=Boolean(r&&!(o&&u)&&!(o&&s));return{isAddressError:g||(t?e:!1),isUsernameError:y,isRequiredError:e&&!y&&!a&&!p&&!g&&!f&&!d,isReceiverDropdownOpened:d&&f&&o}};var ap=o=>{let e=(0,j.useRef)(null),{className:t}=o,{setFieldValue:r}=(0,_m.useFormikContext)(),{receiverInfo:{scamError:a,fetchingScamAddress:p,receiverInputValue:s,setReceiverInputValue:i,knownAddresses:d,receiver:_,onBlurReceiver:u,onChangeReceiver:f},receiverUsernameInfo:{receiverUsername:g},formInfo:{readonly:y}}=$(),[x,T]=(0,j.useState)(!1),[k,E]=(0,j.useState)(_?{label:_,value:_}:null),{receiverErrorDataTestId:L,error:F}=rn(),{isAddressError:U,isUsernameError:M,isRequiredError:O,isReceiverDropdownOpened:q}=um({menuIsOpen:x}),{usernameAccounts:C,isUsernameLoading:V}=xt(),P=()=>{u(new Event("blur"));let R=d==null?void 0:d.find(Le=>Le.username===s&&Le.address===_);R&&(r("receiver",R.address),r("receiverUsername",R.username),r("rawReceiverUsername",R.rawUsername))},W=d==null?void 0:d.find(R=>R.username===s&&R.address===_),Z=(0,j.useMemo)(()=>op(d),[d]),H=W?op([W]):Z,B=Dl({setFieldValue:r,setInputValue:i,setOption:E,options:H,knownAddresses:d!=null?d:[],usernameAccounts:C}),z=(0,j.useCallback)(Ll({setAllValues:B,setOption:E}),[]),K=(0,j.useCallback)(R=>{f(R?R.trim():""),setTimeout(P)},[]),le=Pl({changeAndBlurInput:K,setOption:E,setInputValue:i}),we=(0,j.useMemo)(()=>Rl(e),[e]);(0,j.useEffect)(()=>{if(!_)return;let R=Object.keys(C).find(Le=>{var po;return((po=C[Le])==null?void 0:po.address)===_});B(R!=null?R:_),R&&i(R)},[C,_]);let ge=U||M||O,ye=ge&&!x;return j.default.createElement("div",{className:(0,nn.default)(D.receiver,t)},j.default.createElement("div",{className:I.label,"data-testid":"receiverLabel","data-loading":p},"Receiver"),j.default.createElement(fm.default,{value:k,onInputChange:z,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:xe("receiver",y),options:H,filterOption:Ct,noOptionsMessage:()=>null,onChange:le,onBlur:P,isMulti:!1,ref:e,inputValue:s,onMenuClose:()=>T(!1),onMenuOpen:()=>T(!0),components:{Menu:Kl,Input:we,Control:Al,ValueContainer:im,DropdownIndicator:Ml,SelectContainer:nm,MenuList:jl,Option:em,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,nn.default)(D.receiverSelectContainer,{[D.opened]:q,[D.invalid]:ge||a})}),ye&&j.default.createElement("div",{"data-testid":L,className:I.error},F),V&&j.default.createElement("div",{className:D.loading},"Loading..."),g&&j.default.createElement("span",{className:D.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",j.default.createElement(np.FontAwesomeIcon,{icon:an.faCheck,className:D.foundIcon})),a&&j.default.createElement("div",{"data-testid":"receiverScam",className:(0,nn.default)(I.error,I.scam)},j.default.createElement("span",null,j.default.createElement(np.FontAwesomeIcon,{icon:an.faExclamationTriangle}),j.default.createElement("small",null,a))))};n();n();var Me=b(require("react")),gm=b(require("bignumber.js")),pn=b(require("classnames"));n();var j_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(j_));var No={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"};var pp=o=>{let{className:e}=o,{formInfo:{readonly:t},amountInfo:r,tokensInfo:a}=$(),{amount:p,error:s,onFocus:i,onBlur:d,onChange:_,isInvalid:u,onMaxClicked:f,maxAmountAvailable:g,isMaxButtonVisible:y}=r,{nft:x}=a,T=x!=null&&x.balance?new gm.default(x.balance).isGreaterThan(0):!1,k=E=>{E.preventDefault(),f()};return Me.default.createElement("div",{className:(0,pn.default)(No.amount,e)},Me.default.createElement("div",{className:No.label},Me.default.createElement("label",{htmlFor:"amount",className:I.label},"Amount"),T&&x&&Me.default.createElement("div",{"data-value":`${g} ${x.identifier}`,className:(0,pn.default)(No.balance,e)},Me.default.createElement("span",null,"Available:")," ",Me.default.createElement("span",{"data-testid":`available-${x.identifier}`,className:No.available},Me.default.createElement("span",{className:No.amount},g)," ",x.ticker))),Me.default.createElement("div",{className:No.wrapper},Me.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:p,disabled:xe("amount",t),onFocus:i,onBlur:d,onChange:_,autoComplete:"off",className:(0,pn.default)(I.input,{[I.invalid]:u,[I.disabled]:xe("amount",t)})}),y&&Me.default.createElement("a",{href:"/","data-testid":"maxBtn",className:No.max,onClick:k,onMouseDown:E=>{E.preventDefault()}},"Max")),u&&Me.default.createElement("div",{className:I.error,"data-testid":"amountError"},s))};n();n();var Ae=b(require("react")),cn=require("@fortawesome/free-solid-svg-icons"),dp=require("@fortawesome/react-fontawesome"),Fm=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),up=b(require("classnames")),Lm=b(require("react-collapsed"));n();var ho=b(require("react")),hm=require("@fortawesome/free-solid-svg-icons"),Tm=require("@fortawesome/react-fontawesome"),km=b(require("bignumber.js")),ip=b(require("classnames")),Sm=require("react-number-format");n();n();var Fo=require("@terradharitri/sdk-dapp/constants/index"),ym=require("@terradharitri/sdk-dapp/utils/validation"),xo=b(require("bignumber.js")),bm=(o,e)=>{let t=e!=null?e:Fo.DIGITS;if((0,ym.stringIsFloat)(o)){if(new xo.default(o).isZero())return"0";let a=new xo.default(o).toFormat(t);return a=parseFloat(a)>0?a:new xo.default(o).toFormat(Fo.DIGITS),a=parseFloat(a)>0?a:new xo.default(o).toFormat(Fo.DIGITS+2),a=parseFloat(a)>0?a:new xo.default(o).toFormat(Fo.DIGITS+4),a=parseFloat(a)>0?a:new xo.default(o).toFormat(Fo.DIGITS+6),a=parseFloat(a)>0?a:new xo.default(o).toFormat(Fo.DIGITS+10),parseFloat(a)>0?a:new xo.default(o).toFormat(Fo.DIGITS+14)}return"0"};n();var sp=o=>o.replace(/,/g,"");n();var sn=require("react"),J_={value:"",count:0},vm=(o,e)=>{let[t,r]=(0,sn.useState)(J_);return(0,sn.useEffect)(()=>{let p=setTimeout(()=>{r(o)},e);return()=>clearTimeout(p)},[o.count]),t};n();var xm=b(require("bignumber.js")),Et=o=>{let[e,t]=o.split(""),r=new xm.default(e).isZero();return Boolean(r&&t&&!(t==="."))};n();var Y_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Y_));var fe={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"};var cp=()=>{let{formInfo:o,gasInfo:e}=$(),{readonly:t}=o,{defaultGasLimit:r,onResetGasLimit:a,onChangeGasLimit:p,onBlurGasLimit:s,gasLimit:i,gasLimitError:d,isGasLimitInvalid:_}=e,u=T=>{T.preventDefault(),a()},f=({value:T,floatValue:k})=>(!k||!(0,km.default)(k).isNaN())&&!Et(T),g=T=>{p(T.value,!0)},y=i!==r&&!t,x=xe("gasLimit",t);return ho.default.createElement("div",{className:fe.gas},ho.default.createElement("label",{className:I.label,htmlFor:"gasLimit"},"Gas Limit"),ho.default.createElement("div",{className:fe.wrapper},ho.default.createElement(Sm.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:x,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:s,onValueChange:g,required:!0,isAllowed:f,thousandSeparator:",",thousandsGroupStyle:"thousand",value:i,valueIsNumericString:!0,allowNegative:!1,className:(0,ip.default)(I.input,fe.input,{[I.disabled]:x,[I.invalid]:_,[fe.spaced]:y})}),y&&ho.default.createElement("div",{className:fe.actions},ho.default.createElement("div",{onClick:u,"data-testid":"gasLimitResetBtn",className:(0,ip.default)(fe.action,{[fe.disabled]:x})},ho.default.createElement(Tm.FontAwesomeIcon,{icon:hm.faUndo,className:fe.icon}))),_&&ho.default.createElement("div",{className:I.error,"data-testid":`${"gasLimit"}Error`},d)))};n();n();var To=b(require("react")),wm=require("@fortawesome/free-solid-svg-icons"),Cm=require("@fortawesome/react-fontawesome"),Em=b(require("bignumber.js")),lp=b(require("classnames")),Im=require("react-number-format");var mp=()=>{let{networkConfig:o}=me(),{gasInfo:e,formInfo:t}=$(),{readonly:r}=t,{rewaLabel:a}=o,{gasPrice:p,gasPriceError:s,isGasPriceInvalid:i,onChangeGasPrice:d,onBlurGasPrice:_,onResetGasPrice:u}=e,f=p!==Pe&&!r,g=xe("gasPrice",r),y=({value:k,floatValue:E})=>(!E||!(0,Em.default)(E).isNaN())&&!Et(k),x=k=>{k.preventDefault(),u()},T=k=>{d(k.value,!0)};return To.default.createElement("div",{className:fe.gas},To.default.createElement("label",{className:I.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),To.default.createElement("div",{className:fe.wrapper},To.default.createElement(Im.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:g,id:"gasPrice",inputMode:"decimal",isAllowed:y,name:"gasPrice",onBlur:_,onValueChange:T,required:!0,suffix:` ${a}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:p,valueIsNumericString:!0,allowNegative:!1,className:(0,lp.default)(I.input,fe.input,{[I.disabled]:g,[I.invalid]:i,[fe.spaced]:f})}),f&&To.default.createElement("div",{className:fe.actions},To.default.createElement("div",{onClick:x,className:(0,lp.default)(fe.action,{[fe.disabled]:g})},To.default.createElement(Cm.FontAwesomeIcon,{icon:wm.faUndo,className:fe.icon})))),i&&To.default.createElement("div",{className:I.error,"data-testid":`${"gasPrice"}Error`},s))};n();var Am=b(require("react"));n();var Q_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Q_));var no={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"};var Nm=({feeLimit:o,rewaPriceInUsd:e})=>o===N?null:Am.default.createElement("span",{className:no.fiat,"data-testid":"feeInFiat"},"(",Ut({feeLimit:o,rewaPriceInUsd:e}),")");var _p=({className:o})=>{let{gasInfo:e,tokensInfo:t}=$(),{feeLimit:r,gasCostLoading:a,gasPriceError:p,gasLimitError:s}=e,{rewaPriceInUsd:i,rewaLabel:d}=t,[_,u]=(0,Ae.useState)(Boolean(p||s)),{getCollapseProps:f,getToggleProps:g}=(0,Lm.default)({isExpanded:_}),y=()=>{u(x=>!x)};return Ae.default.createElement("div",{className:(0,up.default)(no.fee,o)},Ae.default.createElement("label",{className:I.label},"Fee"),Ae.default.createElement("div",v({className:no.trigger},g({onClick:y})),Ae.default.createElement("span",{className:no.limit,"data-testid":"feeLimit"},Ae.default.createElement(Fm.FormatAmount,{value:r,showLastNonZeroDecimal:!0,rewaLabel:d})),a&&Ae.default.createElement(dp.FontAwesomeIcon,{icon:cn.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),Ae.default.createElement(Nm,{rewaPriceInUsd:i,feeLimit:r}),Ae.default.createElement(dp.FontAwesomeIcon,{icon:cn.faChevronRight,className:(0,up.default)(no.arrow,{[no.active]:_})})),Ae.default.createElement("div",v({className:no.expandable},f()),Ae.default.createElement("div",{className:no.content},Ae.default.createElement(mp,null),Ae.default.createElement(cp,null))))};n();n();var ko=b(require("react")),Pm=b(require("@terradharitri/sdk-dapp/constants/index")),Dm=b(require("classnames")),ln=b(require("react-select"));n();var ef=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ef));var fp={selectTokenContainer:"dapp-core-component__styles-module__selectTokenContainer"};var of=o=>ko.default.createElement("div",{className:`token-option ${o.isSelected?"is-selected":""}`,"data-testid":`${o.value}-option`},ko.default.createElement(ln.components.Option,v({},o))),tf=({className:o,label:e})=>{let{formInfo:t,accountInfo:r,tokensInfo:a}=$(),{readonly:p}=t,{balance:s}=r,{getTokens:i,areTokensLoading:d,tokens:_,tokenId:u,rewaLabel:f,RewaIcon:g,tokenIdError:y,onChangeTokenId:x,isTokenIdInvalid:T}=a,k=({token:C})=>ko.default.createElement(or,{inDropdown:!0,token:C,isRewa:C.identifier===f,RewaIcon:g}),L=[{name:"DharitrI eGold",identifier:f,balance:s,decimals:Pm.DECIMALS,ticker:""},..._].map(C=>({value:C.identifier,label:C.name,assets:C.assets,token:C}));function F(){return S(this,null,function*(){yield i()})}let U=C=>{C&&x(C.value)},M=({value:C,label:V},P)=>{if(Boolean(P)){let W=P.trim().toLowerCase(),Z=H=>H.toLowerCase().indexOf(W)>-1;return Z(C)||Z(V)}return!0},O=window.getComputedStyle(document.documentElement),q=Ss({docStyle:O});return ko.default.createElement("div",{className:(0,Dm.default)(fp.selectTokenContainer,o)},e&&ko.default.createElement("label",{htmlFor:"tokenId","data-testid":"tokenIdLabel",className:fp.selectTokenLabel},e),ko.default.createElement(ln.default,{className:"selectToken",classNamePrefix:"selectToken",components:{Option:of},filterOption:M,formatOptionLabel:k,inputId:"tokenId",isDisabled:xe("tokenId",p),isLoading:d,name:"tokenId",onChange:U,onMenuOpen:F,openMenuOnFocus:!0,options:L,styles:o?{}:q,value:L.find(({value:C})=>C===u)||void 0}),T&&ko.default.createElement("div",{className:I.error,"data-testid":"tokenIdError"},ko.default.createElement("small",null,y)))};n();n();var We=b(require("react")),gn=b(require("classnames"));n();var rf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rf));var ao={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};n();n();n();var oe=b(require("react")),Bm=require("@terradharitri/sdk-dapp/utils/validation"),mn=b(require("bignumber.js")),gp=b(require("classnames")),Vm=require("react-number-format");n();var nf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(nf));var sr={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};var af=500,Gm=1e13,pf=({"data-testid":o,InfoDustComponent:e,disabled:t,handleBlur:r,handleChange:a,name:p,onDebounceChange:s,onFocus:i,onKeyDown:d,placeholder:_,required:u,usdPrice:f,value:g,usdValue:y,className:x,autoFocus:T,suffix:k})=>{let E=(0,oe.useRef)(null),[L,F]=(0,oe.useState)(),[U,M]=(0,oe.useState)(!1),[O,q]=(0,oe.useState)({value:g,count:0}),[C,V]=(0,oe.useState)(),P=vm(O,af),W=B=>{B.stopPropagation(),M(!0);let z=sp(B.target.value),K=(0,mn.default)(z).isLessThanOrEqualTo(Gm);if((z===""||K)&&(F(z),B.target.value=z,a(B),s)){let le={value:z,count:O.count+1};q(le)}},Z=()=>{if(y)return V(`$${y}`);if(!f||!g)return V(void 0);let B=sp(g);if(!(g!==""&&(0,Bm.stringIsFloat)(B))||B==="")return V(void 0);let K=bm(new mn.default(B).times(f!=null?f:0).toString(10),2);V(`$${K}`)},H=({value:B,floatValue:z})=>(!z||(0,mn.default)(z).isLessThanOrEqualTo(Gm))&&!Et(B);return(0,oe.useEffect)(()=>{s&&U&&(M(!1),s(P.value))},[P]),(0,oe.useEffect)(Z,[g,y,f]),(0,oe.useEffect)(()=>{g!==L&&F(g)},[g]),oe.default.createElement("div",{ref:E,className:(0,gp.default)(sr.amountHolder,{[sr.showUsdValue]:Boolean(C)},x)},oe.default.createElement(Vm.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":o||p,decimalSeparator:".",disabled:Boolean(t),id:p,inputMode:"decimal",isAllowed:H,name:p,onBlur:r,onChange:W,onFocus:i,onKeyDown:d,placeholder:_,required:u,thousandSeparator:",",thousandsGroupStyle:"thousand",value:L,suffix:k,valueIsNumericString:!0,allowNegative:!1,autoFocus:T,className:(0,gp.default)(I.input,sr.amountInput,{[I.disabled]:Boolean(t)})}),C&&oe.default.createElement("span",{className:sr.amountHolderUsd},oe.default.createElement("small",{"data-testid":`tokenPrice_${f}`},C!=="$0"?oe.default.createElement(oe.default.Fragment,null,"\u2248 "):oe.default.createElement(oe.default.Fragment,null),C),e))},Um=(0,oe.memo)(pf,(o,e)=>o.value===e.value&&o.usdPrice===e.usdPrice&&o.className===e.className&&o.disabled===e.disabled&&o.usdValue===e.usdValue);n();n();var yp=b(require("react"));var Mm=({rewaLabel:o,amount:e,maxAmountMinusDust:t,isMaxClicked:r,tokenId:a})=>e===t&&r&&a===o?yp.default.createElement("span",{style:{marginLeft:"0.2rem"}},yp.default.createElement(Xa,{rewaLabel:o})):null;n();n();var $m=b(require("react")),Rm=require("@terradharitri/sdk-dapp/constants"),vp=b(require("bignumber.js")),Zm=b(require("classnames"));n();var bp=b(require("bignumber.js"));var Om=o=>{let e=new bp.default(o!=null?o:"0"),t=new bp.default(Uo),r=e.minus(t);return r.isGreaterThan(0)?r.toString(10):"0"};n();var sf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sf));var Wm={max:"dapp-core-component__maxButton-module__max"};n();var Lo=require("@terradharitri/sdk-dapp/constants"),qm=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),zm=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),It=({amount:o="0",decimals:e=0,digits:t=Lo.DIGITS,addCommas:r=!1,showLastNonZeroDecimal:a=!1})=>{if(o==null||!(0,zm.stringIsInteger)(o))return"0";let p=i=>(0,qm.formatAmount)({input:o,digits:i,decimals:e,addCommas:r,showLastNonZeroDecimal:a}),s=p(t);return s=parseFloat(s)>0?s:p(Lo.DIGITS),s=parseFloat(s)>0?s:p(Lo.DIGITS+2),s=parseFloat(s)>0?s:p(Lo.DIGITS+4),s=parseFloat(s)>0?s:p(Lo.DIGITS+6),s=parseFloat(s)>0?s:p(Lo.DIGITS+10),parseFloat(s)>0?s:p(Lo.DIGITS+14)};var Hm=({token:o,rewaLabel:e,inputAmount:t,className:r,onMaxClick:a})=>{var u;let p=(o==null?void 0:o.identifier)===e,s=(u=o==null?void 0:o.balance)!=null?u:"0";if(s==="0")return null;let i=It({amount:p?Om(s):s,decimals:(o==null?void 0:o.decimals)||Rm.DECIMALS}),d=new vp.default(t).isEqualTo(new vp.default(i)),_=f=>{f.preventDefault(),a==null||a(i)};return d?null:$m.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,Zm.default)(Wm.max,r),onClick:_,onMouseDown:f=>{f.preventDefault()}},"Max")};n();n();var Oe=b(require("react")),Ed=b(require("classnames")),Id=b(require("react-select"));var Sp={};dr(Sp,{Control:()=>_f,IndicatorsContainer:()=>gf,Input:()=>mf,Menu:()=>uf,MenuList:()=>df,DharitrIIcon:()=>Sd,Placeholder:()=>ff,SmallLoader:()=>cf,ValueComponent:()=>gd,getOption:()=>Tp,getSingleValue:()=>kp,getValueContainer:()=>hp});n();n();var xp=b(require("react")),Km=require("@fortawesome/free-solid-svg-icons"),Xm=require("@fortawesome/react-fontawesome"),cf=({show:o,color:e})=>o?xp.default.createElement("div",{className:"d-flex"},xp.default.createElement(Xm.FontAwesomeIcon,{icon:Km.faSpinner,className:`fa-spin fast-spin ${e||"text-primary"}`})):null;n();n();var jm=b(require("react")),Jm=require("react-select");n();var lf=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(lf));var G={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var mf=o=>jm.default.createElement(Jm.components.Input,w(v({},o),{className:G.dropdown,"data-testid":"tokenSelectInput"}));n();var Ym=b(require("react")),Qm=require("react-select");var df=o=>{let r=o,{rx:e}=r,t=ot(r,["rx"]);return Ym.default.createElement(Qm.components.MenuList,w(v({},t),{className:G.list}))};n();var dn=b(require("react")),ed=require("@fortawesome/free-solid-svg-icons"),od=require("@fortawesome/react-fontawesome"),td=require("react-select");var uf=o=>dn.default.createElement(td.components.Menu,w(v({},o),{className:G.menu}),o.selectProps.isLoading?dn.default.createElement("div",{className:G.loading},dn.default.createElement(od.FontAwesomeIcon,{icon:ed.faCircleNotch,className:"fa-spin",size:"lg"})):o.children);n();var rd=b(require("react")),nd=require("react-select");var _f=o=>rd.default.createElement(nd.components.Control,w(v({},o),{className:G.control}));n();var ad=b(require("react")),pd=b(require("classnames")),sd=require("react-select");var ff=o=>ad.default.createElement(sd.components.Placeholder,w(v({},o),{className:(0,pd.default)(G.placeholder,{[G.focused]:o.isFocused})}));n();var id=b(require("react")),cd=b(require("classnames")),ld=require("react-select");var gf=o=>id.default.createElement(ld.components.IndicatorsContainer,w(v({},o),{className:(0,cd.default)(G.indicator,{[G.expanded]:o.selectProps.menuIsOpen})}));n();var Ne=b(require("react")),md=require("@fortawesome/free-solid-svg-icons"),dd=require("@fortawesome/react-fontawesome"),ud=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),_d=b(require("classnames")),fd=require("react-select");var yf=(Jt(),tt(jt)).default,gd=({RewaIcon:o,tokenId:e,icon:t})=>{let{isRewa:r}=(0,ud.getIdentifierType)(e);return r?Ne.default.createElement("span",{className:G.asset},o?Ne.default.createElement(o,{className:G.diamond}):Ne.default.createElement(yf,{className:G.diamond})):t?Ne.default.createElement("img",{src:t,className:G.asset}):Ne.default.createElement(dd.FontAwesomeIcon,{icon:md.faDiamond,className:G.asset})},bf=({children:o})=>Ne.default.createElement("div",{className:G.wrapper},o),hp=(o,e,t)=>r=>{var u,f;let{selectProps:a,isDisabled:p,children:s}=r,i=a.value,d=(f=(u=i==null?void 0:i.assets)==null?void 0:u.svgUrl)!=null?f:null,_=(0,Ne.useMemo)(()=>{let g=String(i==null?void 0:i.token.usdPrice);return g!=null&&g.includes("$")?i==null?void 0:i.token.usdPrice:`$${i==null?void 0:i.token.usdPrice}`},[i==null?void 0:i.token.usdPrice]);return Ne.default.createElement(fd.components.ValueContainer,w(v({},r),{className:G.container}),Ne.default.createElement("div",{className:(0,_d.default)(G.icon,e)},Ne.default.createElement(gd,{RewaIcon:t,rewaLabel:o,icon:d,isDisabled:p,tokenId:i==null?void 0:i.value})),Ne.default.createElement("div",{className:G.payload},Ne.default.createElement(bf,null,s,(i==null?void 0:i.token.usdPrice)&&Ne.default.createElement("small",{className:G.price},_))))};n();var ae=b(require("react")),yd=require("@fortawesome/free-solid-svg-icons"),bd=require("@fortawesome/react-fontawesome"),vd=require("@terradharitri/sdk-dapp/constants"),xd=require("@terradharitri/sdk-dapp/UI/UsdValue"),hd=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Td=b(require("classnames")),kd=require("react-select");var{default:Sd}=(Jt(),tt(jt)),Tp=({RewaIcon:o,TokenTickerIcon:e,showBalanceUsdValue:t,showTokenPrice:r})=>a=>{var k,E,L,F;let{data:p,isSelected:s,isFocused:i,isDisabled:d,selectProps:_}=a,u=p,{isRewa:f}=(0,hd.getIdentifierType)(u.value),g=u.token.assets?u.token.assets.svgUrl:null,y=It({amount:u.token.balance,decimals:u.token.decimals||vd.DECIMALS,addCommas:!0}),x=(E=(k=u.token)==null?void 0:k.usdPrice)==null?void 0:E.toString(),T=(F=(L=u.token)==null?void 0:L.valueUSD)==null?void 0:F.toString();return ae.default.createElement("div",{"data-testid":`${a.value}-option`},ae.default.createElement(kd.components.Option,w(v({},a),{className:(0,Td.default)(G.option,{[G.selected]:s||i,[G.disabled]:d})}),ae.default.createElement("div",{className:G.image},f?ae.default.createElement("span",{className:G.icon},o?ae.default.createElement(o,null):ae.default.createElement(Sd,null)):g?ae.default.createElement("img",{src:g,className:G.icon}):ae.default.createElement("span",{className:G.icon},ae.default.createElement(bd.FontAwesomeIcon,{icon:yd.faDiamond,className:G.diamond}))),ae.default.createElement("div",{className:G.info},ae.default.createElement("div",{className:G.left},ae.default.createElement("div",{className:G.ticker},ae.default.createElement("span",{className:G.value},_.inputValue?ae.default.createElement(pr,{text:u.token.ticker,highlight:_.inputValue}):u.token.ticker),e&&ae.default.createElement(e,{token:u.token})),r&&ae.default.createElement("small",{className:G.price},x)),ae.default.createElement("div",{className:G.right},ae.default.createElement("span",{className:G.value},y),t&&T&&ae.default.createElement(xd.UsdValue,{usd:1,decimals:4,amount:T,"data-testid":"token-price-usd-value",className:G.price,addEqualSign:!1}))),ae.default.createElement("div",{className:G.children},a.children)))};n();var un=b(require("react")),wd=b(require("classnames")),Cd=require("react-select");var kp=o=>e=>{let{selectProps:t,children:r}=e,a=t.value;return un.default.createElement(Cd.components.SingleValue,w(v({},e),{className:(0,wd.default)(G.single,{[G.focused]:e.selectProps.menuIsOpen})}),un.default.createElement("div",{className:G.ticker},r,o&&un.default.createElement(o,{token:a==null?void 0:a.token})))};var{Menu:vf,Control:xf,Input:hf,MenuList:Tf,IndicatorsContainer:kf,Placeholder:Sf}=Sp,Ad=o=>{let{name:e,options:t,isLoading:r=!1,className:a="",noOptionsMessage:p="No Tokens",disabledOption:s,rewaLabel:i,RewaIcon:d,disabled:_,value:u,onBlur:f,onFocus:g,onChange:y,onMenuOpen:x,chainId:T,wrapperClassName:k="",showTokenPrice:E=!1,showBalanceUsdValue:L=!1,selectedTokenIconClassName:F,TokenTickerIcon:U}=o,M=(0,Oe.useRef)(null),O=[i,Ft(T)],q=(0,Oe.useMemo)(()=>Tp({rewaLabel:i,RewaIcon:d,showTokenPrice:E,showBalanceUsdValue:L,TokenTickerIcon:U}),[]),C=(0,Oe.useMemo)(()=>hp(i,F,d),[]),V=(0,Oe.useMemo)(()=>kp(U),[]);(0,Oe.useEffect)(()=>{let B=t.find(K=>K.value===(u==null?void 0:u.value)),z=(B==null?void 0:B.token.balance)===(u==null?void 0:u.token.balance);!B||z||y(B)},[t]);let W=B=>O.includes(B),Z=B=>{var ge;let z=B.value===(s==null?void 0:s.value),K=W(B.value),le=W((ge=s==null?void 0:s.value)!=null?ge:"");return z||K&&le},H=(B,z)=>{let K=B.data.token.ticker?B.data.token.ticker.toLowerCase().includes(z.toLowerCase()):!1,le=B.data.token.name.toLowerCase().includes(z.toLowerCase());return Boolean(z)?K||le:!0};return Oe.default.createElement("div",{"data-testid":`${e}Select`,className:`${k} ${r?"select-holder-loading":""}`},Oe.default.createElement("label",{htmlFor:e,"data-testid":"tokenIdLabel",className:G.label},"Token"),Oe.default.createElement(Id.default,{ref:M,inputId:e,name:e,options:t,openMenuOnFocus:!0,isDisabled:_,isLoading:r,value:u,isOptionDisabled:Z,onBlur:f,filterOption:H,onFocus:g,onChange:B=>{y(B),M&&M.current!==null&&M.current.blur()},isSearchable:o.isSearchable,maxMenuHeight:260,onMenuOpen:x,noOptionsMessage:()=>p,className:(0,Ed.default)(G.select,a,{[G.disabled]:o.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:vf,Control:xf,Input:hf,MenuList:Tf,IndicatorsContainer:kf,ValueContainer:C,Placeholder:Sf,Option:q,SingleValue:V}}))};n();n();var Nd=b(require("react")),Fd=b(require("classnames"));var Ld=({hasErrors:o,className:e,error:t,"data-testid":r})=>o?Nd.default.createElement("div",{className:(0,Fd.default)(I.error,e),"data-testid":r},t):null;n();n();var fn=b(require("react")),Pd=b(require("classnames"));n();var wf=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wf));var _n={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"};var Dd=({label:o,value:e,className:t,token:r,"data-testid":a,"data-value":p})=>fn.default.createElement("div",{"data-testid":a,"data-value":p,className:(0,Pd.default)(_n.balance,t)},fn.default.createElement("span",{className:_n.label},o,": "),fn.default.createElement("span",{className:_n.value},e)," ",r==null?void 0:r.ticker);var wp=({className:o,label:e,name:t,wrapperControlsClassName:r,tokenSelectProps:a,tokenBalanceProps:p,amountInputProps:s,amountErrorProps:i,maxButtonProps:d,readonly:_})=>We.default.createElement("div",{className:(0,gn.default)(ao.amount,o)},We.default.createElement("div",{className:ao.label},e&&We.default.createElement("label",{htmlFor:t,className:I.label,"data-testid":"amountLabel"},e),We.default.createElement(Dd,v({},p))),We.default.createElement("div",{className:(0,gn.default)(ao.wrapper,r,{[ao.error]:s.isInvalid||a.isInvalid||i.hasErrors,[ao.disabled]:_})},We.default.createElement(Um,v({},s)),We.default.createElement("div",{className:(0,gn.default)(ao.interaction,d.wrapperClassName)},d.isMaxButtonVisible&&We.default.createElement(Hm,v({},d)),We.default.createElement("div",{className:ao.select},We.default.createElement(Ad,v({},a))))),We.default.createElement(Ld,v({},i)));n();var ir=b(require("react")),Gd=require("@terradharitri/sdk-dapp/constants"),Bd=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");var Cp=()=>{var po,A;let{checkInvalid:o}=re(),{tokensInfo:e,amountInfo:t,formInfo:r}=$(),{readonly:a}=r,{networkConfig:{rewaLabel:p,chainId:s}}=me(),{rewaPriceInUsd:i}=Vr(),{amount:d,onBlur:_,onChange:u,onMaxClicked:f,error:g,isInvalid:y,onFocus:x,maxAmountAvailable:T,isMaxClicked:k,isMaxButtonVisible:E,maxAmountMinusDust:L}=t,{allAvailableTokens:F,areTokensLoading:U,getTokens:M,isTokenIdInvalid:O,RewaIcon:q,nft:C,onChangeTokenId:V,tokenDetails:P,tokenId:W,tokenIdError:Z}=e,H=F.map(be=>({value:be.identifier,label:String(be.ticker),assets:be.assets,token:be})),{isRewa:B}=(0,Bd.getIdentifierType)(W),z=H.find(({value:be})=>be===W),K={id:"tokenId",value:z,name:"tokenId",isLoading:U,options:H,isSearchable:!0,onChange:be=>{be&&(V(be.value),u(""))},onMenuOpen:M,disabled:xe("tokenId",a),error:Z,isInvalid:O,rewaLabel:p,chainId:s,RewaIcon:q},le=(0,ir.useMemo)(()=>ir.default.createElement(Mm,{amount:d,rewaLabel:p,maxAmountMinusDust:L,tokenId:W,isMaxClicked:k}),[d,p,L,W,k]),we={name:"amount",required:!0,value:d,placeholder:"Amount",handleBlur:_,"data-testid":"amount",handleChange:u,onFocus:x,usdPrice:B?i:void 0,error:g,isInvalid:y,InfoDustComponent:le},ge={token:P,inputAmount:d,onMaxClick:f,isMaxClicked:k,isMaxButtonVisible:E},ye=o("amount")&&!we.value,R={hasErrors:we.isInvalid||K.isInvalid||ye,error:we.error||K.error,className:I.error,"data-testid":we.error?`${"amount"}Error`:`${"tokenId"}Error`},Le={"data-testid":`available-${(po=C==null?void 0:C.identifier)!=null?po:W}`,"data-value":`${T} ${(A=C==null?void 0:C.identifier)!=null?A:W}`,label:"Available",token:z==null?void 0:z.token,value:It({amount:P.balance,decimals:P.decimals||Gd.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(C==null?void 0:C.type)===X.NftEnumType.NonFungibleDCDT?null:ir.default.createElement(wp,{name:"tokenId",amountErrorProps:R,tokenSelectProps:K,amountInputProps:we,tokenBalanceProps:Le,maxButtonProps:ge,label:"Amount",readonly:a})};n();n();var Po=b(require("react")),Ap=b(require("classnames"));n();n();n();var qe=b(require("react")),bn=require("@fortawesome/free-solid-svg-icons"),Ep=require("@fortawesome/react-fontawesome"),Vd=require("formik");n();n();var yn=()=>{let{formInfo:{isRewaTransaction:o,readonly:e},dataFieldInfo:{isAdvancedModeEnabled:t}}=$();return t?!1:!o||xe("data",e)};n();var Cf=`.dapp-core-component__styles-module__advanced {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cf));var cr={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"};var Ud=()=>{let{formInfo:{readonly:o,isRewaTransaction:e}}=$(),{setFieldValue:t,values:r}=(0,Vd.useFormikContext)(),[a,p]=(0,qe.useState)(!1),[s,i]=(0,qe.useState)(!1),d=yn(),_=!a&&!o&&d&&Boolean(r.data),u=()=>{p(!0),t("isAdvancedModeEnabled",!0)},f=()=>{i(!0),setTimeout(()=>{i(!1)},5e3)};return(0,qe.useEffect)(()=>{!e&&a&&p(!1)},[e,r.amount]),_?s?qe.default.createElement("div",{className:cr.advanced,"data-testid":"confirmAdvancedMode",onClick:u},qe.default.createElement(Ep.FontAwesomeIcon,{icon:bn.faCheck,className:"i-icon"}),qe.default.createElement("span",{className:cr.advancedText},"Confirm")):qe.default.createElement("div",{"data-testid":"enableAdvancedMode",className:cr.advanced,onClick:f},qe.default.createElement(Ep.FontAwesomeIcon,{icon:bn.faScrewdriverWrench,className:"i-icon"}),qe.default.createElement("span",{className:cr.advancedText},"Advanced")):null};n();var Ef=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ef));var Ip={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"};var Np=({className:o})=>{let{dataFieldInfo:{data:e,dataError:t,isDataInvalid:r,onChange:a,onBlur:p}}=$(),s=yn();return Po.default.createElement("div",{className:(0,Ap.default)(Ip.data,o)},Po.default.createElement("div",{className:ao.label},Po.default.createElement("label",{htmlFor:"data",className:I.label},"Data"),Po.default.createElement(Ud,null)),Po.default.createElement("div",{className:Ip.wrapper},Po.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:s,"data-testid":"data",value:e,onBlur:p,onChange:a,spellCheck:"false",placeholder:"Add transaction data",className:(0,Ap.default)(I.textarea,{[I.invalid]:r,[I.disabled]:s})})),r&&Po.default.createElement("div",{className:I.error,"data-testid":"dataError"},t))};n();n();n();var So=b(require("react")),Do=b(require("classnames"));n();var If=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(If));var Se={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"};var Fp=({disabled:o,percentageValue:e=0,onPercentageChange:t,className:r})=>{let a=[0,25,50,75,100],p="amountSlider";return So.default.createElement("div",{className:(0,Do.default)(Se.amountSlider,r)},So.default.createElement("div",{className:Se.amountSliderRange},So.default.createElement("input",{name:p,id:p,"data-testid":p,type:"range",disabled:o,min:0,max:100,value:String(e),className:(0,Do.default)(Se.amountSliderInput,{[Se.disabled]:o}),onChange:s=>{t(Number(s.target.value))}}),So.default.createElement("div",{style:{width:`${e}%`},className:(0,Do.default)(Se.amountSliderCompletion,{[Se.disabled]:o})}),a.map(s=>So.default.createElement("span",{onClick:()=>t(s),key:`breakpoint-${s}`,style:{left:`${s}%`},className:(0,Do.default)(Se.amountSliderBreakpoint,{[Se.completed]:s<=e,[Se.disabled]:o})})),a.map(s=>So.default.createElement("span",{style:{left:`${s}%`},key:`breakpoint-${s}`,onClick:()=>t(s),className:(0,Do.default)(Se.amountSliderPercentage,{[Se.exact]:s===e,[Se.disabled]:o})},s,"%")),So.default.createElement("span",{style:{left:`${e}%`},className:(0,Do.default)(Se.amountSliderThumb,{[Se.disabled]:o})},So.default.createElement("strong",{className:(0,Do.default)(Se.amountSliderThumbPercentage,{[Se.hidden]:a.includes(e)})},Math.round(e),"%"))))};n();n();var $e=b(require("react")),Md=require("@fortawesome/free-solid-svg-icons"),Od=require("@fortawesome/react-fontawesome"),Wd=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),qd=require("@terradharitri/sdk-dapp/UI/CopyButton"),zd=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),$d=require("@terradharitri/sdk-dapp/UI/Trim"),Rd=b(require("classnames")),Zd=require("formik");n();var Af=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Af));var ze={"can-transfer-warning":"dapp-core-component__styles-module__can-transfer-warning",canTransferWarning:"dapp-core-component__styles-module__can-transfer-warning","can-transfer-warning-heading":"dapp-core-component__styles-module__can-transfer-warning-heading",canTransferWarningHeading:"dapp-core-component__styles-module__can-transfer-warning-heading","can-transfer-warning-icon":"dapp-core-component__styles-module__can-transfer-warning-icon",canTransferWarningIcon:"dapp-core-component__styles-module__can-transfer-warning-icon","can-transfer-warning-label":"dapp-core-component__styles-module__can-transfer-warning-label",canTransferWarningLabel:"dapp-core-component__styles-module__can-transfer-warning-label","can-transfer-warning-addresses":"dapp-core-component__styles-module__can-transfer-warning-addresses",canTransferWarningAddresses:"dapp-core-component__styles-module__can-transfer-warning-addresses","can-transfer-warning-address":"dapp-core-component__styles-module__can-transfer-warning-address",canTransferWarningAddress:"dapp-core-component__styles-module__can-transfer-warning-address","can-transfer-warning-address-explorer":"dapp-core-component__styles-module__can-transfer-warning-address-explorer",canTransferWarningAddressExplorer:"dapp-core-component__styles-module__can-transfer-warning-address-explorer","can-transfer-warning-address-copy":"dapp-core-component__styles-module__can-transfer-warning-address-copy",canTransferWarningAddressCopy:"dapp-core-component__styles-module__can-transfer-warning-address-copy"};var Lp=o=>{let{className:e}=o,{values:{nft:t,address:r}}=(0,Zd.useFormikContext)();return!(t!=null&&t.allowedReceivers)||t.allowedReceivers.includes(r)?null:$e.default.createElement("div",{className:(0,Rd.default)(ze.canTransferWarning,e),"data-testid":"canTransferWarning"},$e.default.createElement("div",{className:ze.canTransferWarningHeading},$e.default.createElement(Od.FontAwesomeIcon,{icon:Md.faExclamationTriangle,className:ze.canTransferWarningIcon,size:"lg"}),$e.default.createElement("div",{className:ze.canTransferWarningTitle},$e.default.createElement("div",{className:ze.canTransferWarningLabel},"Warning!"),$e.default.createElement("div",{className:ze.canTransferWarningMessage},Dn))),$e.default.createElement("div",{className:ze.canTransferWarningAddresses},t.allowedReceivers.map(a=>$e.default.createElement("div",{className:ze.canTransferWarningAddress,key:a},$e.default.createElement($d.Trim,{text:a,className:ze.canTransferWarningAddressTrim}),$e.default.createElement(qd.CopyButton,{text:a,className:ze.canTransferWarningAddressCopy}),$e.default.createElement(zd.ExplorerLink,{page:`/${Wd.ACCOUNTS_ENDPOINT}/${a}`,className:ze.canTransferWarningAddressExplorer})))))};n();n();var Yo=b(require("react")),Hd=require("@fortawesome/free-solid-svg-icons"),Kd=require("@fortawesome/react-fontawesome"),Xd=b(require("classnames"));n();var Nf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nf));var Jo={"wrewa-warning":"dapp-core-component__styles-module__wrewa-warning",wrewaWarning:"dapp-core-component__styles-module__wrewa-warning","wrewa-warning-heading":"dapp-core-component__styles-module__wrewa-warning-heading",wrewaWarningHeading:"dapp-core-component__styles-module__wrewa-warning-heading","wrewa-warning-icon":"dapp-core-component__styles-module__wrewa-warning-icon",wrewaWarningIcon:"dapp-core-component__styles-module__wrewa-warning-icon","wrewa-warning-label":"dapp-core-component__styles-module__wrewa-warning-label",wrewaWarningLabel:"dapp-core-component__styles-module__wrewa-warning-label"};var Pp=o=>{let{tokenId:e,className:t}=o,{networkConfig:{chainId:r}}=me();return Ft(r)!==e?null:Yo.default.createElement("div",{className:(0,Xd.default)(Jo.wrewaWarning,t)},Yo.default.createElement("div",{className:Jo.wrewaWarningHeading},Yo.default.createElement(Kd.FontAwesomeIcon,{icon:Hd.faExclamationTriangle,className:Jo.wrewaWarningIcon,size:"lg"}),Yo.default.createElement("div",{className:Jo.wrewaWarningTitle},Yo.default.createElement("div",{className:Jo.wrewaWarningLabel},"Warning!"),Yo.default.createElement("div",{className:Jo.wrewaWarningMessage},Gn))))};n();var Ff=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ff));var vn={form:"dapp-core-component__form-module__form",formFieldset:"dapp-core-component__form-module__formFieldset",formWrapper:"dapp-core-component__form-module__formWrapper","form-buttons":"dapp-core-component__form-module__form-buttons",formButtons:"dapp-core-component__form-module__form-buttons"};n();n();var jd=o=>{var e,t;return((e=o.nft)==null?void 0:e.type)===X.NftEnumType.NonFungibleDCDT?"NFT":((t=o.nft)==null?void 0:t.type)===X.NftEnumType.SemiFungibleDCDT?"SFT":o.tokenDetails.ticker};var Lf=({className:o,GuardianScreen:e})=>{let{formInfo:t,accountInfo:r,amountInfo:a,tokensInfo:p}=$(),{values:s}=(0,Yd.useFormikContext)(),{txType:i,tokenId:d,address:_,balance:u,chainId:f,ledger:g}=s,{nft:y}=p,[x,T]=(0,Q.useState)(),{amountRange:k,onSetAmountPercentage:E}=a,{renderKey:L,onValidateForm:F,onInvalidateForm:U,onCloseForm:M,onSubmitForm:O,onPreviewClick:q,areValidatedValuesReady:C,isGuardianScreenVisible:V,uiOptions:P,readonly:W,setGuardedTransaction:Z,setHasGuardianScreen:H}=t,B=()=>S(void 0,null,function*(){if(!C)return;let ye=yield hr(s);try{let R=yield Mt({address:_,balance:u,chainId:f,nonce:r.nonce,values:ye});R.setVersion(xn.TransactionVersion.withTxOptions());let Le=v({guarded:!0},g?{hashSign:!0}:{});R.setOptions(xn.TransactionOptions.withOptions(Le)),T({0:R})}catch(R){T({})}});(0,Q.useEffect)(()=>{B()},[s,C]),(0,Q.useEffect)(()=>{H(Boolean(e))},[]),(0,Q.useEffect)(()=>{if(!x)return;let ye=x[0];ye&&Z(ye)},[x]);let z=ye=>{ye.preventDefault(),M()},K=i==="NonFungibleDCDT",le=i==="SemiFungibleDCDT",ge={onSignTransaction:()=>S(void 0,null,function*(){setTimeout(()=>{O()})}),onPrev:U,address:_,title:"",className:o,signedTransactions:x,setSignedTransactions:T,signStepInnerClasses:{}};return e&&V?Q.default.createElement(e,v({},ge)):C?Q.default.createElement(ep,{providerType:r.providerType}):Q.default.createElement("form",{key:L,onSubmit:F,className:(0,Jd.default)(vn.form,o)},Q.default.createElement("fieldset",{className:vn.formFieldset},(K||le)&&y&&Q.default.createElement(en,v({onClick:q,txType:i},y)),Q.default.createElement(ap,null),le?Q.default.createElement(pp,null):Q.default.createElement(Cp,null),(P==null?void 0:P.showAmountSlider)&&!K&&Q.default.createElement(Fp,{onPercentageChange:E,percentageValue:k,disabled:Boolean(W)}),Q.default.createElement(Pp,{tokenId:d}),Q.default.createElement(Lp,null),Q.default.createElement(_p,null),Q.default.createElement(Np,null)),Q.default.createElement("div",{className:vn.formButtons},Q.default.createElement("button",{type:"button",id:"sendBtn","data-testid":"sendBtn",onClick:F,className:I.buttonSend},"Send ",jd(p)),Q.default.createElement("button",{type:"button",id:"closeButton","data-testid":"returnToWalletBtn",onClick:z,className:I.buttonText},"Cancel")))};n();n();var Qo=b(require("react")),Qd=require("@terradharitri/sdk-dapp/constants/index"),eu=require("formik");function Pf(o){var z,K,le,we,ge,ye,R,Le;let{initialValues:e,onFormSubmit:t,formInfo:r,children:a,accountInfo:p,tokensInfo:s,initGasLimitError:i,networkConfig:d,enableReinitialize:_=!0,Loader:u,errorMessageTranslations:f=St,shouldGenerateTransactionOnSubmit:g=!0}=o,{address:y,balance:x,username:T}=p,{chainId:k}=d,[E,L]=(0,Qo.useState)(Boolean(o.formInfo.skipToConfirm)),[F,U]=(0,Qo.useState)(),[M,O]=(0,Qo.useState)(!1),q=_a({initialValues:e,prefilledForm:r.prefilledForm,errorMessages:St});function C(po){return S(this,null,function*(){let A=yield hr(po),be=g?F!=null?F:yield Mt({address:y,balance:x,chainId:k,nonce:p.nonce,values:A}):null;return t(A,be,L)})}let V=(e==null?void 0:e.tokenId)||(d==null?void 0:d.rewaLabel)||Qd.fallbackNetworkConfigurations.mainnet.rewaLabel,P=Ko(v(v({},f),St)),W=(z=e==null?void 0:e.data)!=null?z:"",Z=(K=e==null?void 0:e.txType)!=null?K:zo({nft:s==null?void 0:s.initialNft,tokenId:V}),H=(le=e==null?void 0:e.gasLimit)!=null?le:qt({txType:Z,data:W,isGuarded:p.isGuarded}),B={address:(we=e==null?void 0:e.address)!=null?we:y,amount:(ge=e==null?void 0:e.amount)!=null?ge:N,balance:(e==null?void 0:e.balance)||x,chainId:(e==null?void 0:e.chainId)||d.chainId,code:"",data:W,gasLimit:H,gasPrice:(ye=e==null?void 0:e.gasPrice)!=null?ye:Pe,isBurn:r.isBurn,isGuarded:(R=e==null?void 0:e.isGuarded)!=null?R:p.isGuarded,ledger:e==null?void 0:e.ledger,nft:s==null?void 0:s.initialNft,receiver:(Le=e==null?void 0:e.receiver)!=null?Le:"",receiverUsername:e==null?void 0:e.receiverUsername,senderUsername:T,tokenId:V,tokens:s==null?void 0:s.initialTokens,txType:Z};return Qo.default.createElement(eu.Formik,{initialValues:B,enableReinitialize:_,onSubmit:C,initialErrors:q,validationSchema:P},Qo.default.createElement($a,{initGasLimitError:i,accountInfo:p,formInfo:w(v({},r),{isFormSubmitted:E,setIsFormSubmitted:L,setGuardedTransaction:U,hasGuardianScreen:M,setHasGuardianScreen:O}),networkConfig:d,tokensInfo:s,Loader:u},a))}0&&(module.exports={AccountContext,AccountContextProvider,AmountSelect,AmountSelectInput,AmountSlider,AppInfoContextProvider,BURN_NFT_GAS_LIMIT,CAN_TRANSFER_MESSAGE,Confirm,ConfirmScreen,Data,FeeAccordion,Form,FormContext,FormContextProvider,FormDataTestIdsEnum,GAS_LIMIT_DELTA,GasLimit,GasPrice,HighlightText,InfoDust,Loader,MAX_GAS_LIMIT,MAX_NFT_GAS_LIMIT,MIN_DUST,MIN_NFT_GAS_LIMIT,NFTCanTransferWarning,NetworkContext,NetworkContextProvider,NftEnumType,Receiver,ReceiverContext,ReceiverContextProvider,SFTAmount,SelectToken,SendFormContainer,SendFormContext,SendFormContextProvider,TOKEN_GAS_LIMIT,TokensContext,TokensContextProvider,TransactionTypeEnum,TransferDataEnum,ValuesEnum,WREWAWarning,WREWA_ID,WREWA_MESSAGE,ZERO,calculateFeeInFiat,calculateGasLimit,calculateNftGasLimit,computeInitGasLimit,computeNftDataField,computeTokenDataField,delegationContractDataByEnvironment,fetchAllTokens,fetchTokens,formattedConfigGasPrice,generateTransaction,getAccountToken,getAllowedReceivers,getApiAddressForChainID,getApiConfig,getDataField,getDelegationDataForChainId,getEconomicsInfo,getEntireBalance,getEntireTokenBalance,getEnvironmentForChainId,getGasLimit,getGlobalNftByIdentifier,getGuardedAccountGasLimit,getInitialErrors,getInitialValues,getNetworkConfigForChainId,getNftByAddressAndIdentifier,getParsedGasPrice,getRemainingPages,getScamAddressData,getToken,getTokenDetails,getTokens,getTokensCount,getTransactionCost,getTxType,getValidationSchema,getWrewaIdForChainId,isNftOrMultiDcdtTx,maxAcceptedGasPrice,searchNft,setApiConfig,showMax,useAccountContext,useComputeGasLimit,useFetchGasLimit,useFetchKnownAddresses,useFormContext,useGetInitialValues,useNetworkConfigContext,useReceiverContext,useScamError,useSendFormContext,useTokensContext,useVerifyScamAddress,validateGasLimitAmount,validateReceivers,validateSignTransactions,verifyInvalid});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
