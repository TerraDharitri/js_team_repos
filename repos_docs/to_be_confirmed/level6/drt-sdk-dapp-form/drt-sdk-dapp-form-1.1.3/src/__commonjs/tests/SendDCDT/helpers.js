"use strict";var eu=Object.create;var It=Object.defineProperty,ou=Object.defineProperties,tu=Object.getOwnPropertyDescriptor,ru=Object.getOwnPropertyDescriptors,nu=Object.getOwnPropertyNames,tr=Object.getOwnPropertySymbols,au=Object.getPrototypeOf,Tn=Object.prototype.hasOwnProperty,Oa=Object.prototype.propertyIsEnumerable;var Ma=(o,e,t)=>e in o?It(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,x=(o,e)=>{for(var t in e||(e={}))Tn.call(e,t)&&Ma(o,t,e[t]);if(tr)for(var t of tr(e))Oa.call(e,t)&&Ma(o,t,e[t]);return o},w=(o,e)=>ou(o,ru(e));var jo=(o,e)=>{var t={};for(var r in o)Tn.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&tr)for(var r of tr(o))e.indexOf(r)<0&&Oa.call(o,r)&&(t[r]=o[r]);return t};var kn=(o,e)=>()=>(o&&(e=o(o=0)),e);var rr=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),nr=(o,e)=>{for(var t in e)It(o,t,{get:e[t],enumerable:!0})},qa=(o,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of nu(e))!Tn.call(o,a)&&a!==t&&It(o,a,{get:()=>e[a],enumerable:!(r=tu(e,a))||r.enumerable});return o};var g=(o,e,t)=>(t=o!=null?eu(au(o)):{},qa(e||!o||!o.__esModule?It(t,"default",{value:o,enumerable:!0}):t,o)),Jo=o=>qa(It({},"__esModule",{value:!0}),o);var S=(o,e,t)=>new Promise((r,a)=>{var p=d=>{try{i(t.next(d))}catch(u){a(u)}},s=d=>{try{i(t.throw(d))}catch(u){a(u)}},i=d=>d.done?r(d.value):Promise.resolve(d.value).then(p,s);i((t=t.apply(o,e)).next())});var za=rr(ar=>{"use strict";n();ar.byteLength=su;ar.toByteArray=cu;ar.fromByteArray=du;var Ze=[],De=[],pu=typeof Uint8Array!="undefined"?Uint8Array:Array,Sn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Do=0,Wa=Sn.length;Do<Wa;++Do)Ze[Do]=Sn[Do],De[Sn.charCodeAt(Do)]=Do;var Do,Wa;De["-".charCodeAt(0)]=62;De["_".charCodeAt(0)]=63;function $a(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=o.indexOf("=");t===-1&&(t=e);var r=t===e?0:4-t%4;return[t,r]}function su(o){var e=$a(o),t=e[0],r=e[1];return(t+r)*3/4-r}function iu(o,e,t){return(e+t)*3/4-t}function cu(o){var e,t=$a(o),r=t[0],a=t[1],p=new pu(iu(o,r,a)),s=0,i=a>0?r-4:r,d;for(d=0;d<i;d+=4)e=De[o.charCodeAt(d)]<<18|De[o.charCodeAt(d+1)]<<12|De[o.charCodeAt(d+2)]<<6|De[o.charCodeAt(d+3)],p[s++]=e>>16&255,p[s++]=e>>8&255,p[s++]=e&255;return a===2&&(e=De[o.charCodeAt(d)]<<2|De[o.charCodeAt(d+1)]>>4,p[s++]=e&255),a===1&&(e=De[o.charCodeAt(d)]<<10|De[o.charCodeAt(d+1)]<<4|De[o.charCodeAt(d+2)]>>2,p[s++]=e>>8&255,p[s++]=e&255),p}function lu(o){return Ze[o>>18&63]+Ze[o>>12&63]+Ze[o>>6&63]+Ze[o&63]}function mu(o,e,t){for(var r,a=[],p=e;p<t;p+=3)r=(o[p]<<16&16711680)+(o[p+1]<<8&65280)+(o[p+2]&255),a.push(lu(r));return a.join("")}function du(o){for(var e,t=o.length,r=t%3,a=[],p=16383,s=0,i=t-r;s<i;s+=p)a.push(mu(o,s,s+p>i?i:s+p));return r===1?(e=o[t-1],a.push(Ze[e>>2]+Ze[e<<4&63]+"==")):r===2&&(e=(o[t-2]<<8)+o[t-1],a.push(Ze[e>>10]+Ze[e>>4&63]+Ze[e<<2&63]+"=")),a.join("")}});var Ra=rr(wn=>{n();wn.read=function(o,e,t,r,a){var p,s,i=a*8-r-1,d=(1<<i)-1,u=d>>1,_=-7,f=t?a-1:0,y=t?-1:1,b=o[e+f];for(f+=y,p=b&(1<<-_)-1,b>>=-_,_+=i;_>0;p=p*256+o[e+f],f+=y,_-=8);for(s=p&(1<<-_)-1,p>>=-_,_+=r;_>0;s=s*256+o[e+f],f+=y,_-=8);if(p===0)p=1-u;else{if(p===d)return s?NaN:(b?-1:1)*(1/0);s=s+Math.pow(2,r),p=p-u}return(b?-1:1)*s*Math.pow(2,p-r)};wn.write=function(o,e,t,r,a,p){var s,i,d,u=p*8-a-1,_=(1<<u)-1,f=_>>1,y=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=r?0:p-1,v=r?1:-1,T=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(i=isNaN(e)?1:0,s=_):(s=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-s))<1&&(s--,d*=2),s+f>=1?e+=y/d:e+=y*Math.pow(2,1-f),e*d>=2&&(s++,d/=2),s+f>=_?(i=0,s=_):s+f>=1?(i=(e*d-1)*Math.pow(2,a),s=s+f):(i=e*Math.pow(2,f-1)*Math.pow(2,a),s=0));a>=8;o[t+b]=i&255,b+=v,i/=256,a-=8);for(s=s<<a|i,u+=a;u>0;o[t+b]=s&255,b+=v,s/=256,u-=8);o[t+b-v]|=T*128}});var np=rr(Qo=>{"use strict";n();var Cn=za(),Yo=Ra(),Ha=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Qo.Buffer=h;Qo.SlowBuffer=bu;Qo.INSPECT_MAX_BYTES=50;var pr=2147483647;Qo.kMaxLength=pr;h.TYPED_ARRAY_SUPPORT=uu();!h.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function uu(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(t){return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.buffer}});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.byteOffset}});function po(o){if(o>pr)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,h.prototype),e}function h(o,e,t){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Nn(o)}return Xa(o,e,t)}h.poolSize=8192;function Xa(o,e,t){if(typeof o=="string")return fu(o,e);if(ArrayBuffer.isView(o))return gu(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(Ke(o,ArrayBuffer)||o&&Ke(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Ke(o,SharedArrayBuffer)||o&&Ke(o.buffer,SharedArrayBuffer)))return In(o,e,t);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=o.valueOf&&o.valueOf();if(r!=null&&r!==o)return h.from(r,e,t);var a=yu(o);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return h.from(o[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}h.from=function(o,e,t){return Xa(o,e,t)};Object.setPrototypeOf(h.prototype,Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function ja(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function _u(o,e,t){return ja(o),o<=0?po(o):e!==void 0?typeof t=="string"?po(o).fill(e,t):po(o).fill(e):po(o)}h.alloc=function(o,e,t){return _u(o,e,t)};function Nn(o){return ja(o),po(o<0?0:Fn(o)|0)}h.allocUnsafe=function(o){return Nn(o)};h.allocUnsafeSlow=function(o){return Nn(o)};function fu(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=Ja(o,e)|0,r=po(t),a=r.write(o,e);return a!==t&&(r=r.slice(0,a)),r}function En(o){for(var e=o.length<0?0:Fn(o.length)|0,t=po(e),r=0;r<e;r+=1)t[r]=o[r]&255;return t}function gu(o){if(Ke(o,Uint8Array)){var e=new Uint8Array(o);return In(e.buffer,e.byteOffset,e.byteLength)}return En(o)}function In(o,e,t){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return e===void 0&&t===void 0?r=new Uint8Array(o):t===void 0?r=new Uint8Array(o,e):r=new Uint8Array(o,e,t),Object.setPrototypeOf(r,h.prototype),r}function yu(o){if(h.isBuffer(o)){var e=Fn(o.length)|0,t=po(e);return t.length===0||o.copy(t,0,0,e),t}if(o.length!==void 0)return typeof o.length!="number"||Pn(o.length)?po(0):En(o);if(o.type==="Buffer"&&Array.isArray(o.data))return En(o.data)}function Fn(o){if(o>=pr)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+pr.toString(16)+" bytes");return o|0}function bu(o){return+o!=o&&(o=0),h.alloc(+o)}h.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==h.prototype};h.compare=function(e,t){if(Ke(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),Ke(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,a=t.length,p=0,s=Math.min(r,a);p<s;++p)if(e[p]!==t[p]){r=e[p],a=t[p];break}return r<a?-1:a<r?1:0};h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return h.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var a=h.allocUnsafe(t),p=0;for(r=0;r<e.length;++r){var s=e[r];if(Ke(s,Uint8Array))p+s.length>a.length?h.from(s).copy(a,p):Uint8Array.prototype.set.call(a,s,p);else if(h.isBuffer(s))s.copy(a,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=s.length}return a};function Ja(o,e){if(h.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||Ke(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var t=o.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return An(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return rp(o).length;default:if(a)return r?-1:An(o).length;e=(""+e).toLowerCase(),a=!0}}h.byteLength=Ja;function vu(o,e,t){var r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return Au(this,e,t);case"utf8":case"utf-8":return Qa(this,e,t);case"ascii":return Eu(this,e,t);case"latin1":case"binary":return Iu(this,e,t);case"base64":return wu(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Nu(this,e,t);default:if(r)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),r=!0}}h.prototype._isBuffer=!0;function Go(o,e,t){var r=o[e];o[e]=o[t],o[t]=r}h.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)Go(this,t,t+1);return this};h.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)Go(this,t,t+3),Go(this,t+1,t+2);return this};h.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)Go(this,t,t+7),Go(this,t+1,t+6),Go(this,t+2,t+5),Go(this,t+3,t+4);return this};h.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Qa(this,0,e):vu.apply(this,arguments)};h.prototype.toLocaleString=h.prototype.toString;h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:h.compare(this,e)===0};h.prototype.inspect=function(){var e="",t=Qo.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};Ha&&(h.prototype[Ha]=h.prototype.inspect);h.prototype.compare=function(e,t,r,a,p){if(Ke(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),r===void 0&&(r=e?e.length:0),a===void 0&&(a=0),p===void 0&&(p=this.length),t<0||r>e.length||a<0||p>this.length)throw new RangeError("out of range index");if(a>=p&&t>=r)return 0;if(a>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,a>>>=0,p>>>=0,this===e)return 0;for(var s=p-a,i=r-t,d=Math.min(s,i),u=this.slice(a,p),_=e.slice(t,r),f=0;f<d;++f)if(u[f]!==_[f]){s=u[f],i=_[f];break}return s<i?-1:i<s?1:0};function Ya(o,e,t,r,a){if(o.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Pn(t)&&(t=a?0:o.length-1),t<0&&(t=o.length+t),t>=o.length){if(a)return-1;t=o.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof e=="string"&&(e=h.from(e,r)),h.isBuffer(e))return e.length===0?-1:Za(o,e,t,r,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(o,e,t):Uint8Array.prototype.lastIndexOf.call(o,e,t):Za(o,[e],t,r,a);throw new TypeError("val must be string, number or Buffer")}function Za(o,e,t,r,a){var p=1,s=o.length,i=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(o.length<2||e.length<2)return-1;p=2,s/=2,i/=2,t/=2}function d(b,v){return p===1?b[v]:b.readUInt16BE(v*p)}var u;if(a){var _=-1;for(u=t;u<s;u++)if(d(o,u)===d(e,_===-1?0:u-_)){if(_===-1&&(_=u),u-_+1===i)return _*p}else _!==-1&&(u-=u-_),_=-1}else for(t+i>s&&(t=s-i),u=t;u>=0;u--){for(var f=!0,y=0;y<i;y++)if(d(o,u+y)!==d(e,y)){f=!1;break}if(f)return u}return-1}h.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1};h.prototype.indexOf=function(e,t,r){return Ya(this,e,t,r,!0)};h.prototype.lastIndexOf=function(e,t,r){return Ya(this,e,t,r,!1)};function hu(o,e,t,r){t=Number(t)||0;var a=o.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var p=e.length;r>p/2&&(r=p/2);for(var s=0;s<r;++s){var i=parseInt(e.substr(s*2,2),16);if(Pn(i))return s;o[t+s]=i}return s}function xu(o,e,t,r){return sr(An(e,o.length-t),o,t,r)}function Tu(o,e,t,r){return sr(Lu(e),o,t,r)}function ku(o,e,t,r){return sr(rp(e),o,t,r)}function Su(o,e,t,r){return sr(Du(e,o.length-t),o,t,r)}h.prototype.write=function(e,t,r,a){if(t===void 0)a="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")a=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var s=!1;;)switch(a){case"hex":return hu(this,e,t,r);case"utf8":case"utf-8":return xu(this,e,t,r);case"ascii":case"latin1":case"binary":return Tu(this,e,t,r);case"base64":return ku(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Su(this,e,t,r);default:if(s)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),s=!0}};h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function wu(o,e,t){return e===0&&t===o.length?Cn.fromByteArray(o):Cn.fromByteArray(o.slice(e,t))}function Qa(o,e,t){t=Math.min(o.length,t);for(var r=[],a=e;a<t;){var p=o[a],s=null,i=p>239?4:p>223?3:p>191?2:1;if(a+i<=t){var d,u,_,f;switch(i){case 1:p<128&&(s=p);break;case 2:d=o[a+1],(d&192)===128&&(f=(p&31)<<6|d&63,f>127&&(s=f));break;case 3:d=o[a+1],u=o[a+2],(d&192)===128&&(u&192)===128&&(f=(p&15)<<12|(d&63)<<6|u&63,f>2047&&(f<55296||f>57343)&&(s=f));break;case 4:d=o[a+1],u=o[a+2],_=o[a+3],(d&192)===128&&(u&192)===128&&(_&192)===128&&(f=(p&15)<<18|(d&63)<<12|(u&63)<<6|_&63,f>65535&&f<1114112&&(s=f))}}s===null?(s=65533,i=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|s&1023),r.push(s),a+=i}return Cu(r)}var Ka=4096;function Cu(o){var e=o.length;if(e<=Ka)return String.fromCharCode.apply(String,o);for(var t="",r=0;r<e;)t+=String.fromCharCode.apply(String,o.slice(r,r+=Ka));return t}function Eu(o,e,t){var r="";t=Math.min(o.length,t);for(var a=e;a<t;++a)r+=String.fromCharCode(o[a]&127);return r}function Iu(o,e,t){var r="";t=Math.min(o.length,t);for(var a=e;a<t;++a)r+=String.fromCharCode(o[a]);return r}function Au(o,e,t){var r=o.length;(!e||e<0)&&(e=0),(!t||t<0||t>r)&&(t=r);for(var a="",p=e;p<t;++p)a+=Gu[o[p]];return a}function Nu(o,e,t){for(var r=o.slice(e,t),a="",p=0;p<r.length-1;p+=2)a+=String.fromCharCode(r[p]+r[p+1]*256);return a}h.prototype.slice=function(e,t){var r=this.length;e=~~e,t=t===void 0?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);var a=this.subarray(e,t);return Object.setPrototypeOf(a,h.prototype),a};function ce(o,e,t){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>t)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||ce(e,t,this.length);for(var a=this[e],p=1,s=0;++s<t&&(p*=256);)a+=this[e+s]*p;return a};h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||ce(e,t,this.length);for(var a=this[e+--t],p=1;t>0&&(p*=256);)a+=this[e+--t]*p;return a};h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e=e>>>0,t||ce(e,1,this.length),this[e]};h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ce(e,2,this.length),this[e]|this[e+1]<<8};h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ce(e,2,this.length),this[e]<<8|this[e+1]};h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};h.prototype.readIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||ce(e,t,this.length);for(var a=this[e],p=1,s=0;++s<t&&(p*=256);)a+=this[e+s]*p;return p*=128,a>=p&&(a-=Math.pow(2,8*t)),a};h.prototype.readIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||ce(e,t,this.length);for(var a=t,p=1,s=this[e+--a];a>0&&(p*=256);)s+=this[e+--a]*p;return p*=128,s>=p&&(s-=Math.pow(2,8*t)),s};h.prototype.readInt8=function(e,t){return e=e>>>0,t||ce(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};h.prototype.readInt16LE=function(e,t){e=e>>>0,t||ce(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};h.prototype.readInt16BE=function(e,t){e=e>>>0,t||ce(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};h.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};h.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};h.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),Yo.read(this,e,!0,23,4)};h.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ce(e,4,this.length),Yo.read(this,e,!1,23,4)};h.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ce(e,8,this.length),Yo.read(this,e,!0,52,8)};h.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ce(e,8,this.length),Yo.read(this,e,!1,52,8)};function Ae(o,e,t,r,a,p){if(!h.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<p)throw new RangeError('"value" argument is out of bounds');if(t+r>o.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,r,a){if(e=+e,t=t>>>0,r=r>>>0,!a){var p=Math.pow(2,8*r)-1;Ae(this,e,t,r,p,0)}var s=1,i=0;for(this[t]=e&255;++i<r&&(s*=256);)this[t+i]=e/s&255;return t+r};h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,r,a){if(e=+e,t=t>>>0,r=r>>>0,!a){var p=Math.pow(2,8*r)-1;Ae(this,e,t,r,p,0)}var s=r-1,i=1;for(this[t+s]=e&255;--s>=0&&(i*=256);)this[t+s]=e/i&255;return t+r};h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,1,255,0),this[t]=e&255,t+1};h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};h.prototype.writeIntLE=function(e,t,r,a){if(e=+e,t=t>>>0,!a){var p=Math.pow(2,8*r-1);Ae(this,e,t,r,p-1,-p)}var s=0,i=1,d=0;for(this[t]=e&255;++s<r&&(i*=256);)e<0&&d===0&&this[t+s-1]!==0&&(d=1),this[t+s]=(e/i>>0)-d&255;return t+r};h.prototype.writeIntBE=function(e,t,r,a){if(e=+e,t=t>>>0,!a){var p=Math.pow(2,8*r-1);Ae(this,e,t,r,p-1,-p)}var s=r-1,i=1,d=0;for(this[t+s]=e&255;--s>=0&&(i*=256);)e<0&&d===0&&this[t+s+1]!==0&&(d=1),this[t+s]=(e/i>>0)-d&255;return t+r};h.prototype.writeInt8=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};h.prototype.writeInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};h.prototype.writeInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};h.prototype.writeInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};h.prototype.writeInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||Ae(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ep(o,e,t,r,a,p){if(t+r>o.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function op(o,e,t,r,a){return e=+e,t=t>>>0,a||ep(o,e,t,4,34028234663852886e22,-34028234663852886e22),Yo.write(o,e,t,r,23,4),t+4}h.prototype.writeFloatLE=function(e,t,r){return op(this,e,t,!0,r)};h.prototype.writeFloatBE=function(e,t,r){return op(this,e,t,!1,r)};function tp(o,e,t,r,a){return e=+e,t=t>>>0,a||ep(o,e,t,8,17976931348623157e292,-17976931348623157e292),Yo.write(o,e,t,r,52,8),t+8}h.prototype.writeDoubleLE=function(e,t,r){return tp(this,e,t,!0,r)};h.prototype.writeDoubleBE=function(e,t,r){return tp(this,e,t,!1,r)};h.prototype.copy=function(e,t,r,a){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<r&&(a=r),a===r||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-r&&(a=e.length-t+r);var p=a-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,a):Uint8Array.prototype.set.call(e,this.subarray(r,a),t),p};h.prototype.fill=function(e,t,r,a){if(typeof e=="string"){if(typeof t=="string"?(a=t,t=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!h.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){var p=e.charCodeAt(0);(a==="utf8"&&p<128||a==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<r;++s)this[s]=e;else{var i=h.isBuffer(e)?e:h.from(e,a),d=i.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<r-t;++s)this[s+t]=i[s%d]}return this};var Fu=/[^+/0-9A-Za-z-_]/g;function Pu(o){if(o=o.split("=")[0],o=o.trim().replace(Fu,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function An(o,e){e=e||1/0;for(var t,r=o.length,a=null,p=[],s=0;s<r;++s){if(t=o.charCodeAt(s),t>55295&&t<57344){if(!a){if(t>56319){(e-=3)>-1&&p.push(239,191,189);continue}else if(s+1===r){(e-=3)>-1&&p.push(239,191,189);continue}a=t;continue}if(t<56320){(e-=3)>-1&&p.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(e-=3)>-1&&p.push(239,191,189);if(a=null,t<128){if((e-=1)<0)break;p.push(t)}else if(t<2048){if((e-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Lu(o){for(var e=[],t=0;t<o.length;++t)e.push(o.charCodeAt(t)&255);return e}function Du(o,e){for(var t,r,a,p=[],s=0;s<o.length&&!((e-=2)<0);++s)t=o.charCodeAt(s),r=t>>8,a=t%256,p.push(a),p.push(r);return p}function rp(o){return Cn.toByteArray(Pu(o))}function sr(o,e,t,r){for(var a=0;a<r&&!(a+t>=e.length||a>=o.length);++a)e[a+t]=o[a];return a}function Ke(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function Pn(o){return o!==o}var Gu=function(){for(var o="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)e[r+a]=o[t]+o[a];return e}()});var cp=rr((Gf,ip)=>{n();var oe=ip.exports={},Xe,je;function Ln(){throw new Error("setTimeout has not been defined")}function Dn(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Xe=setTimeout:Xe=Ln}catch(o){Xe=Ln}try{typeof clearTimeout=="function"?je=clearTimeout:je=Dn}catch(o){je=Dn}})();function ap(o){if(Xe===setTimeout)return setTimeout(o,0);if((Xe===Ln||!Xe)&&setTimeout)return Xe=setTimeout,setTimeout(o,0);try{return Xe(o,0)}catch(e){try{return Xe.call(null,o,0)}catch(t){return Xe.call(this,o,0)}}}function Bu(o){if(je===clearTimeout)return clearTimeout(o);if((je===Dn||!je)&&clearTimeout)return je=clearTimeout,clearTimeout(o);try{return je(o)}catch(e){try{return je.call(null,o)}catch(t){return je.call(this,o)}}}var so=[],et=!1,Bo,ir=-1;function Vu(){!et||!Bo||(et=!1,Bo.length?so=Bo.concat(so):ir=-1,so.length&&pp())}function pp(){if(!et){var o=ap(Vu);et=!0;for(var e=so.length;e;){for(Bo=so,so=[];++ir<e;)Bo&&Bo[ir].run();ir=-1,e=so.length}Bo=null,et=!1,Bu(o)}}oe.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];so.push(new sp(o,e)),so.length===1&&!et&&ap(pp)};function sp(o,e){this.fun=o,this.array=e}sp.prototype.run=function(){this.fun.apply(null,this.array)};oe.title="browser";oe.browser=!0;oe.env={};oe.argv=[];oe.version="";oe.versions={};function io(){}oe.on=io;oe.addListener=io;oe.once=io;oe.off=io;oe.removeListener=io;oe.removeAllListeners=io;oe.emit=io;oe.prependListener=io;oe.prependOnceListener=io;oe.listeners=function(o){return[]};oe.binding=function(o){throw new Error("process.binding is not supported")};oe.cwd=function(){return"/"};oe.chdir=function(o){throw new Error("process.chdir is not supported")};oe.umask=function(){return 0}});var c,l,Bf,n=kn(()=>{c=g(np()),l=g(cp()),Bf=function(o){function e(){var r=this||self;return delete o.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var t=__magic__;return t}(Object)});var $t={};nr($t,{default:()=>S_});var zr,k_,S_,zt=kn(()=>{"use strict";n();zr=g(require("react")),k_=o=>zr.createElement("svg",x({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},o),zr.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),zr.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),S_=k_});var Pc={};nr(Pc,{default:()=>F_});var Zr,N_,F_,Lc=kn(()=>{"use strict";n();Zr=g(require("react")),N_=o=>Zr.createElement("svg",x({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},o),Zr.createElement("g",null,Zr.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),F_=N_});var Nf={};nr(Nf,{beforAllTokens:()=>Cf,queries:()=>or.queries,setupDcdtServer:()=>Af,twoToken:()=>xn,useAmountInput:()=>Ef,useGasLimitInput:()=>If});module.exports=Jo(Nf);n();var or=require("@testing-library/react");n();n();var lp=require("@terradharitri/sdk-dapp/constants/index"),mp=require("@terradharitri/sdk-dapp/types/enums.types"),Vo="drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c",vo=lp.fallbackNetworkConfigurations[mp.EnvironmentsEnum.testnet],dp="drt1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqeyzkqc";n();var ho=require("msw"),up=require("msw/node");var Uo=o=>(e,t,r)=>t(r.status(200),r.json(o)),Uu=[...["tokens","nfts","sfts"].map(o=>ho.rest.get(`${vo.apiAddress}/accounts/${Vo}/${o}`,Uo([]))),ho.rest.get(`${vo.apiAddress}/accounts/${dp}`,Uo({})),ho.rest.get(`${vo.apiAddress}/economics`,Uo({totalSupply:20431908,circulatingSupply:19101908,staked:5562989,price:58.14,marketCap:1110584931,apr:.350951,topUpApr:.150087,baseApr:.413132})),ho.rest.get(`${vo.apiAddress}/transactions`,Uo([]))],Gn=(0,up.setupServer)(...Uu);n();n();var Kd=g(require("react")),Xd=require("@testing-library/react");n();var Ko=g(require("react")),Rd=require("@terradharitri/sdk-dapp/constants/network"),hn=require("@terradharitri/sdk-dapp/types/enums.types"),Hd=require("@terradharitri/sdk-dapp/UI/Loader");n();n();n();var zo=g(require("react")),Qi=require("@terradharitri/sdk-dapp/constants/index"),ec=require("formik");n();n();var _p="Token can only be transfered to one of the following addresses:",fp="WREWA is not REWA! It can not be sent to exchanges. It can not be staked or delegated. It can not be used as transaction fee.";var Bn="600000000",gp=10,co="500000",yp=75e4,bp=1e6,vp=2e5,ot="5000000000000000",L="0",hp="WREWA-bd4d79";n();var Se=g(require("react")),Ji=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var Sp=g(require("axios"));n();n();n();var kp=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var xp=require("@terradharitri/sdk-dapp/constants/index");n();var Mu={D:"devnet",T:"testnet",1:"mainnet"},Ou={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function tt(o){return Mu[o]}function cr(o){return Ou[o]||hp}function Tp(o){let e=tt(o),t=xp.fallbackNetworkConfigurations[e].apiAddress;if(!t)throw"Could not extract api address for environment, check if you have a valid chainID";return t}function lr(o){return S(this,null,function*(){let e=Tp(o);return yield(0,kp.getServerConfiguration)(e)})}n();var qu={mainnet:{delegationContract:"drt1qqqqqqqqqqqqqpgqxwakt2g7u9atsnr03gqcgmhcv38pt7mkd94q8vqld4",delegationContractData:{minGasLimit:"75000000"}},devnet:{delegationContract:"drt1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqeyzkqc",delegationContractData:{minGasLimit:"75000000"}},testnet:{delegationContract:"drt1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqeyzkqc",delegationContractData:{minGasLimit:"75000000"}}};function mr(o){let e=tt(o);return e?qu[e]:null}var dr={value:null};function rt(o){return dr.value={baseURL:o.apiAddress,timeout:Number(o.apiTimeout)},dr.value}function ne(o){return S(this,null,function*(){if(dr.value!=null)return dr.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),o!=null){let t=yield lr(o);return rt(t)}let e="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(e),e})}function wp(o,e){return S(this,null,function*(){let t=e||(yield ne()),{data:r}=yield Sp.default.get(`/accounts/${o}`,t);return r})}n();n();var Cp=g(require("axios"));function Ep(){return S(this,null,function*(){try{let o=yield ne(),{data:e}=yield Cp.default.get("economics",o);return e}catch(o){return console.error("err fetching economics info",o),null}})}n();n();var nt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Wu=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Un=g(require("axios")),Ip=g(require("lodash/uniqBy"));var $u=1e3,Vn=100;function zu(a){return S(this,arguments,function*({address:o,size:e,from:t,search:r}){let p=new URLSearchParams(w(x(x({},t!=null&&e!=null?{from:String(t),size:String(e)}:{}),r?{search:r}:{}),{includeMetaDCDT:"true"})).toString(),s=yield ne();return Un.default.get(`/${nt.ACCOUNTS_ENDPOINT}/${o}/${nt.TOKENS_ENDPOINT}?${p}`,s)})}function Ap(o,e){return S(this,null,function*(){let{address:t,token:r}=o,a=e||(yield ne());return Un.default.get(`/${nt.ACCOUNTS_ENDPOINT}/${t}/${nt.TOKENS_ENDPOINT}/${r}`,a)})}function Ru(a){return S(this,arguments,function*({address:o,page:e=1,search:t,size:r}){let p={address:o,search:t};r!=null&&(p.from=(e-1)*Vn,p.size=Vn);let{data:s}=yield zu(p);return s})}function Np(o){return S(this,null,function*(){let e=[],t=!0,r=1;for(;t;)try{let a=yield Ru({address:o,size:$u,page:r});if(a==null||(a==null?void 0:a.length)===0){t=!1;break}let p=a.map(s=>x({},s));if(e.push(...p),a.length!=Vn){t=!1;break}r++}catch(a){console.log(a),t=!1}return(0,Ip.default)(e,a=>a.identifier)})}n();var Fp=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Pp=g(require("axios"));n();n();n();var Z=require("@terradharitri/sdk-dapp/types/tokens.types");n();var ae=(u=>(u.receiver="receiver",u.gasPrice="gasPrice",u.data="data",u.tokenId="tokenId",u.amount="amount",u.gasLimit="gasLimit",u.receiverUsername="receiverUsername",u.rawReceiverUsername="rawReceiverUsername",u.senderUsername="senderUsername",u))(ae||{});n();n();function Lp(o,e){return S(this,null,function*(){if(o.type!==Z.NftEnumType.MetaDCDT)return null;let t=e||(yield ne());try{let{data:r}=yield Pp.default.get(`/${Fp.COLLECTIONS_ENDPOINT}/${o.collection}`,t);return(r==null?void 0:r.canTransfer)===!1?r==null?void 0:r.roles.map(({address:s,canTransfer:i})=>i?s:"").filter(s=>Boolean(s)):null}catch(r){return console.error(`Unable to get canTransfer information for collection ${o.collection}`,r),null}})}n();var At=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Mn=g(require("axios"));function ur(r,a){return S(this,arguments,function*({address:o,identifier:e},t){try{let p=t||(yield ne()),{data:s}=yield Mn.default.get(`/${At.ACCOUNTS_ENDPOINT}/${o}/${At.NFTS_ENDPOINT}/${e}`,p);return s||null}catch(p){return null}})}function Dp(o,e){return S(this,null,function*(){try{let t=e||(yield ne()),{data:r}=yield Mn.default.get(`/${At.NFTS_ENDPOINT}/${o}`,t);return r||null}catch(t){return null}})}n();n();var Gp=g(require("axios"));function Bp(o){return S(this,null,function*(){try{let e=yield ne(),{data:t}=yield Gp.default.post("/transaction/cost",o,e);return{data:t,success:!0}}catch(e){return console.error(e),{success:!1}}})}n();var at=g(require("react")),Vp=(0,at.createContext)({});function Up({children:o,value:e}){return at.default.createElement(Vp.Provider,{value:e},o)}function Ne(){return(0,at.useContext)(Vp)}n();n();var ye=g(require("react")),gi=require("@terradharitri/sdk-dapp/constants/index"),yi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Mr=g(require("bignumber.js")),bi=require("formik");n();n();n();var Nt=require("bech32"),Hu=o=>{let e=Nt.bech32.toWords(c.Buffer.from(o,"hex"));return Nt.bech32.encode("drt",e)},Zu=o=>{let e=Nt.bech32.decode(o,256);return c.Buffer.from(Nt.bech32.fromWords(e.words)).toString("hex")},Mp={encode:Hu,decode:Zu};n();n();var Mo=({initialValues:o,gasLimit:e,touched:t})=>o.gasLimit!==e&&t.gasLimit;n();var Te=(o,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(o);n();var _r=o=>!["REWA","DCDT"].includes(o);n();var Op=o=>Boolean(o==null?void 0:o.startsWith("drt1"));n();var qp=require("@terradharitri/sdk-dapp/constants"),Wp=require("@terradharitri/sdk-dapp/utils/account/getAccount");var fr=o=>S(void 0,null,function*(){let e=o.txType==="REWA"?o.amount:qp.ZERO,t=_r(o.txType),r=yield(0,Wp.getAccount)(o.receiver),a=r==null?void 0:r.username,p=t?o.senderUsername:a,s=w(x({},o),{amount:e,receiverUsername:p});return delete s.rawReceiverUsername,s});n();n();var On=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),$p=({nft:o,skipDescription:e})=>{var T,k;let{name:t,metadata:r,media:a,isNsfw:p,scamInfo:s,verified:i}=o,d="Scam - ",{isSuspicious:u,message:_}=(0,On.getScamFlag)({verified:i,message:t,isNsfw:p,scamInfo:s,messagePrefix:d});if(!(r!=null&&r.description)||e){let C=u?"placeholder":(T=a==null?void 0:a[0])==null?void 0:T.thumbnailUrl;return{isSuspicious:u,name:t||_,thumbnail:C,description:""}}let{message:f,isSuspicious:y}=(0,On.getScamFlag)({message:r.description,messagePrefix:d,verified:i}),b=u||y,v=b?"placeholder":(k=a==null?void 0:a[0])==null?void 0:k.thumbnailUrl;return{isSuspicious:b,name:t||_,thumbnail:v,description:f||r.description}};n();var Ku=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var gr=g(require("anchorme")),qn=o=>o.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),zp=(o,e)=>{if(e){let t=`[Message hidden due to suspicious content - ${e.info}]`;if(o.length>1e3)return{output:t,stringWithLinks:o,found:!0};let r=qn(o.normalize("NFKC")),a=gr.default.list(r),p=[];if(a.length>0){let s=t;a.forEach((i,d)=>{let{string:u}=i,_="",f="",y=u;for(let b=0;b<s.length;b++){let v=s.slice(b),[T]=gr.default.list(qn(v));T&&u===T.string&&(_=s.substring(0,b))}for(let b=t.length;b>0;b--){let v=s.slice(0,b),[T]=gr.default.list(qn(v));T&&u===T.string&&(f=s.substring(b))}p.push(_),p.push(y),s=f,d===a.length-1&&p.push(f)})}else p.push(o);return{output:t,stringWithLinks:p.join(""),found:!0}}else return{output:o,stringWithLinks:"",found:!1}};n();n();var Wn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),we=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),$n=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),j=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();var Ce=g(require("react")),Os=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),qs=require("formik");n();n();var wr=require("@terradharitri/sdk-dapp/constants/index"),ds=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Sr=g(require("bignumber.js"));n();n();var Ft=require("@terradharitri/sdk-dapp/constants/index");function yr({feeLimit:o,rewaPriceInUsd:e}){let t=(0,we.formatAmount)({input:o,decimals:Ft.DECIMALS,digits:Ft.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,$n.getUsdValue)({amount:t,usd:e,decimals:Ft.DIGITS})}`}n();var Hp=require("@terradharitri/sdk-dapp/constants/index");var Je=(o="")=>{let e=yp+o.length*Hp.GAS_PER_DATA_BYTE;return o.startsWith("DCDTNFTBurn")?vp.toString():String(Math.max(e,bp))};n();var br=require("@terradharitri/sdk-dapp/constants/index"),zn=g(require("bignumber.js"));n();var Zp=require("@terradharitri/sdk-dapp/constants/index");function Fe(o=!1){return o?Zp.EXTRA_GAS_LIMIT_GUARDED_TX:0}var Ye=({data:o,isGuarded:e})=>{let t=new zn.default(br.GAS_LIMIT),r=new zn.default(br.GAS_PER_DATA_BYTE),a=o?r.times(c.Buffer.from(o).length):0,p=Fe(e);return t.plus(a).plus(p).toString(10)};n();var Kp=require("@terradharitri/sdk-dapp/constants/index");function Pt({tokens:o,tokenId:e}){let t=o.find(({identifier:p})=>p===e),r=t?t.decimals:Kp.DECIMALS,a=(t==null?void 0:t.balance)||L;return w(x({},t),{decimals:r,identifier:(t==null?void 0:t.identifier)||"",name:(t==null?void 0:t.name)||"",ticker:(t==null?void 0:t.ticker)||"",balance:a})}var pt=Pt;n();n();var ze=require("@terradharitri/sdk-core"),Xp=require("@terradharitri/sdk-dapp/constants/index"),jp=g(require("bignumber.js"));function vr({amount:o,data:e,nonce:t,receiver:r,receiverUsername:a,sender:p,senderUsername:s,gasPrice:i,gasLimit:d,chainId:u}){let _=new jp.default((0,j.parseAmount)(o));return new ze.Transaction({nonce:t,value:ze.TokenPayment.rewaFromBigInteger(_.toString(10)),sender:new ze.Address(p),receiver:new ze.Address(r),gasPrice:parseInt(i),gasLimit:parseInt(d),senderUsername:s,receiverUsername:a,data:new ze.TransactionPayload(e),chainID:u,version:new ze.TransactionVersion(Xp.VERSION)})}n();function xo(o){return isNaN(Number(o))||o===""?(0,j.parseAmount)("0"):(0,j.parseAmount)(o)}function hr(o){return S(this,null,function*(){let{address:e,balance:t,chainId:r,nonce:a,values:p}=o,{amount:s,receiver:i,data:d,gasLimit:u,gasPrice:_,nft:f,receiverUsername:y,senderUsername:b}=p,v=Boolean(f)?e:i;try{return vr({balance:t,amount:String(s),gasLimit:String(u),gasPrice:xo(_),data:d.trim(),receiver:v,receiverUsername:y,senderUsername:b,sender:e,nonce:a,chainId:r})}catch(T){throw console.log("Prepare transaction error",T),T}})}n();var Xu=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");n();var Jp=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");function Lt({nft:o,tokenId:e}){let{isDcdt:t,isNft:r,isRewa:a}=(0,Jp.getIdentifierType)(e);return a?"REWA":(o==null?void 0:o.type)===Z.NftEnumType.NonFungibleDCDT?"NonFungibleDCDT":(o==null?void 0:o.type)===Z.NftEnumType.SemiFungibleDCDT?"SemiFungibleDCDT":(o==null?void 0:o.type)===Z.NftEnumType.MetaDCDT||r?"MetaDCDT":t?"DCDT":"REWA"}var Yp=Lt;n();var xr=g(require("bignumber.js"));var Tr=o=>o.length%2===0?o:`0${o}`,ju=({amount:o,decimals:e,tokenId:t})=>{let r=Boolean(o)?o:L,a=Tr(c.Buffer.from(t).toString("hex")),p=Tr(new xr.default((0,j.parseAmount)(r,e)).toString(16));return`DCDTTransfer@${a}@${p}`},Rn=({nft:o,amount:e,receiver:t,errors:r})=>{if(!(o&&e&&t&&!r))return"";try{let p="DCDTNFTTransfer",s=(o==null?void 0:o.type)===Z.NftEnumType.MetaDCDT?(0,j.parseAmount)(e,o.decimals):e;return p+=`@${c.Buffer.from(String(o.collection)).toString("hex")}`,p+=`@${Tr(new xr.default(String(o.nonce)).toString(16))}`,p+=`@${Tr(new xr.default(s).toString(16))}`,p+=`@${Mp.decode(t)}`,p}catch(p){return""}},Qp=({txType:o,values:e,nft:t,amountError:r,receiverError:a})=>{let{tokens:p,tokenId:s,amount:i,receiver:d}=e;if(p&&o==="DCDT"&&!r){let{decimals:u}=pt({tokens:p,tokenId:s});return ju({amount:i,tokenId:s,decimals:u})}return o!=="REWA"?Rn({nft:t,amount:i,receiver:d,errors:Boolean(r||a)}):e.data};n();var ts=require("@terradharitri/sdk-dapp/constants/index"),rs=require("@terradharitri/sdk-dapp/utils/smartContracts"),ns=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Oo=g(require("bignumber.js"));n();var es=g(require("bignumber.js"));var Hn=s=>S(void 0,[s],function*({balance:o,address:e,isGuarded:t,nonce:r,values:a,chainId:p}){var U,M,W;let{amount:i,receiver:d,data:u,gasLimit:_,gasPrice:f}=a,b=vr({balance:o,amount:String(i),gasLimit:String(_),gasPrice:xo(f),data:u.trim(),receiver:d,sender:e,nonce:r,chainId:p}).toPlainObject(),{data:v,success:T}=yield Bp(w(x({},b),{sender:e})),k=Number((U=v==null?void 0:v.data)==null?void 0:U.txGasUnits),C=(M=v==null?void 0:v.data)==null?void 0:M.returnMessage;if(!Boolean(T&&(v==null?void 0:v.code)==="successful"&&k&&k!==0))return{gasLimit:_,gasLimitCostError:(W=v==null?void 0:v.data)==null?void 0:W.returnMessage};if(!C)return{gasLimit:new es.default(k).times(gp).dividedToIntegerBy(100).plus(k).toString(10)};let I=Ye({data:a.data?a.data.trim():"",isGuarded:t});return{gasLimit:String(k)===L?I:String(k)}}),os=Hn;var as=b=>S(void 0,[b],function*({computedTokenId:o,receiver:e,isInternal:t,balance:r,address:a,isGuarded:p,nonce:s,amount:i,data:d,gasLimit:u,gasPrice:_,delegationContractData:f,chainId:y}){var V;let v=Fe(p),T=f==null?void 0:f.delegationContract,k=(V=f==null?void 0:f.delegationContractData.minGasLimit)!=null?V:L;if(!new Oo.default(u).isNaN()&&new Oo.default(u).isGreaterThan(L))return{initGasLimit:u};if((0,rs.isContract)(e)&&!t){let{gasLimit:U,gasLimitCostError:M}=yield os({balance:r,address:a,nonce:s,values:{amount:i,receiver:e,data:d,gasLimit:u,gasPrice:_},chainId:y});return{initGasLimit:e===T?new Oo.default(U).plus(k).plus(v).toString():U,initGasLimitError:M}}if(d.length>0)return{initGasLimit:Ye({data:d.trim(),isGuarded:p})};let{isDcdt:A,isNft:I}=(0,ns.getIdentifierType)(o);return A?{initGasLimit:new Oo.default(co).plus(v).toString()}:I?{initGasLimit:new Oo.default(Je()).plus(v).toString()}:{initGasLimit:new Oo.default(ts.GAS_LIMIT).plus(v).toString()}});n();var st=require("@terradharitri/sdk-dapp/constants/index"),cs=g(require("bignumber.js"));var ps,ss,is,Ge=(0,we.formatAmount)({input:String((ps=st.GAS_PRICE)!=null?ps:1e9),decimals:(ss=st.DECIMALS)!=null?ss:18,showLastNonZeroDecimal:!0,digits:(is=st.DIGITS)!=null?is:4}),Dt=new cs.default(Ge).times(10).toString(10);n();var To=require("@terradharitri/sdk-dapp/constants/index"),Gt=g(require("bignumber.js"));function ls({balance:o=L,gasLimit:e=L,gasPrice:t,decimals:r,digits:a,data:p="",chainId:s}){let i=new Gt.default(o),d=new Gt.default(ot),u=new Gt.default((0,Wn.calculateFeeLimit)({gasPrice:t,gasLimit:e,data:p,chainId:s,gasPerDataByte:String(To.GAS_PER_DATA_BYTE),gasPriceModifier:String(To.GAS_PRICE_MODIFIER)})),_=i.minus(u),f=_.minus(d),y=_.isGreaterThanOrEqualTo(0)?(0,we.formatAmount)({input:_.toString(10),decimals:r,digits:a,showLastNonZeroDecimal:!0,addCommas:!1}):L,b=f.isGreaterThanOrEqualTo(0)?(0,we.formatAmount)({input:f.toString(10),decimals:r,digits:a,showLastNonZeroDecimal:!0,addCommas:!1}):y;return{entireBalance:y,entireBalanceMinusDust:b,parsedEntireBalance:_.isGreaterThan(0)?_.toString(10):L}}function Zn({balance:o=L,decimals:e=To.DECIMALS,digits:t=To.DIGITS}){let r=new Gt.default(o);if(r.isGreaterThanOrEqualTo(0)){let a=r.toString(10);return(0,we.formatAmount)({input:a,decimals:e,digits:t>e?e:t,showLastNonZeroDecimal:!0,addCommas:!1})}return L}n();var ms=g(require("bignumber.js"));function kr({txType:o,data:e="",isGuarded:t}){let r=Fe(t),a=Je();return o==="DCDT"&&(a=co),o==="REWA"&&(a=Ye({data:e.trim()})),new ms.default(a).plus(r).toString(10)}var ko=({amount:o,balance:e,gasPrice:t,gasLimit:r,data:a,chainId:p})=>{let s=(0,j.parseAmount)(o.toString()),i=new Sr.default(s),d=new Sr.default(e),u=new Sr.default((0,ds.calculateFeeLimit)({gasPrice:xo(t),gasLimit:r,data:a,chainId:p,gasPerDataByte:String(wr.GAS_PER_DATA_BYTE),gasPriceModifier:String(wr.GAS_PRICE_MODIFIER)}));return d.isGreaterThanOrEqualTo(i.plus(u))};n();n();var dt=require("yup");n();var Cr=require("@terradharitri/sdk-dapp/constants/ledger.constants"),us=g(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Er=require("yup"),Ju=(0,Er.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:t}=this.parent;return!(t&&e&&e.length&&!t.ledgerDataActive)}),Yu=(0,Er.string)().test({name:"hashSign",test:function(e){let{ledger:t,isGuarded:r}=this.parent;if(t){let{ledgerWithHashSign:a,ledgerWithGuardians:p}=(0,us.default)(t.version);if(e&&e.length>300&&!a)return this.createError({message:`Data too long. You need at least DharitrI app version ${Cr.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(r&&!p)return this.createError({message:`You need at least DharitrI app version ${Cr.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Qu=[Ju,Yu],e_=Qu.reduce((o,e)=>o.concat(e),(0,Er.string)()),_s=e_;n();var fs=require("@terradharitri/sdk-dapp/constants/index"),gs=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Kn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),it=require("yup");var o_=o=>{let e=(0,it.string)().required(o.required),t=(0,it.string)().test("decimalFormat",o.maxDecimalsAllowed(fs.DECIMALS),s=>(0,gs.maxDecimals)(String(s))),r=(0,it.string)().test("funds",o.insufficientFunds,function(s){if(s&&(0,Kn.stringIsFloat)(s)){let{gasLimit:i,data:d,gasPrice:u,balance:_,chainId:f}=this.parent;return ko({amount:s,balance:_,gasLimit:i,gasPrice:u,data:d,chainId:f})}return!0}),a=(0,it.string)().test("isValidNumber",o.invalidNumber,s=>Boolean(s&&(0,Kn.stringIsFloat)(s)));return[e,a,t,r].reduce((s,i)=>s.concat(i),(0,it.string)())},ys=o_;n();var vs=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),jn=g(require("bignumber.js")),Bt=require("yup");n();var bs=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Xn=g(require("bignumber.js")),Ir=require("yup");var ct=o=>{let e=(0,Ir.string)().required(o.required),t=(0,Ir.string)().test("isValidInteger",o.invalidNumber,a=>{let p=a&&(0,bs.stringIsInteger)(a);return Boolean(p)}),r=(0,Ir.string)().test("maximum",o.tooHighGasLimit(Bn),a=>{let p=new Xn.default(String(a)),s=new Xn.default(Bn),i=a&&s.comparedTo(p)>=0;return Boolean(i)});return[e,t,r]};var t_=o=>{let e=(0,Bt.string)().required(o.required),t=(0,Bt.string)().test("funds",o.insufficientFunds,function(s){let{data:i,gasPrice:d,amount:u,balance:_,chainId:f,ignoreTokenBalance:y}=this.parent;return y?!0:u&&(0,vs.stringIsFloat)(u)&&s!=null?ko({amount:u,balance:_,gasLimit:s,gasPrice:d,data:i,chainId:f}):!0}),r=(0,Bt.string)().test({name:"minValueData",test:function(p){let s=this.parent,{data:i,ignoreTokenBalance:d,isGuarded:u}=s;if(d)return!0;let _=Ye({data:i?i.trim():"",isGuarded:u});if(p){let f=new jn.default(p),y=new jn.default(_);if(!(p&&f.isGreaterThanOrEqualTo(y)))return this.createError({message:o.tooLowGasLimit(_),path:"gasLimit"})}return!0}});return[e,...ct(o),t,r].reduce((p,s)=>p.concat(s),(0,Bt.string)())},hs=t_;n();var xs=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ts=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ar=g(require("bignumber.js")),qo=require("yup");var r_=o=>{let e=(0,qo.string)().required(o.required),t=(0,qo.string)().test({name:"decimalFormat",test:function(i){let{tokenId:d,tokens:u}=this.parent;if(u){let{decimals:_}=pt({tokens:u,tokenId:d});return(0,xs.maxDecimals)(String(i),_)?!0:this.createError({message:o.maxDecimalsAllowed(_),path:"amount"})}return!0}}),r=(0,qo.string)().test("tokenBalance",o.insufficientFunds,function(d){let{ignoreTokenBalance:u,tokens:_}=this.parent;if(d!==void 0&&!u&&_){let{decimals:f,balance:y}=pt({tokens:_,tokenId:this.parent.tokenId}),b=(0,j.parseAmount)(d.toString(),f),v=new Ar.default(b);return new Ar.default(y).comparedTo(v)>=0}return!0}),a=(0,qo.string)().test("greaterThanZero",o.cannotBeZero,function(d){let{tokens:u,ignoreTokenBalance:_}=this.parent;if(!_&&d!=null&&u){let{decimals:f}=pt({tokens:u,tokenId:this.parent.tokenId}),y=(0,j.parseAmount)(d.toString(),f);return new Ar.default(y).isGreaterThan(0)}return!0}),p=(0,qo.string)().test("isValidNumber",o.invalidNumber,i=>Boolean(i&&(0,Ts.stringIsFloat)(i)));return[e,t,r,a,p].reduce((i,d)=>i.concat(d),(0,qo.string)())},ks=r_;n();var Jn=g(require("bignumber.js")),Vt=require("yup");var n_=o=>{let e=(0,Vt.string)().required(o.required),t=(0,Vt.string)().test("minValue",o.tooLowGasLimit(co),function(s){let i=this.parent,{ignoreTokenBalance:d,isGuarded:u}=i;if(d)return!0;let _=new Jn.default(s),f=new Jn.default(co).plus(Fe(u));return s&&_.isGreaterThanOrEqualTo(f)}),r=(0,Vt.string)().test("funds",o.insufficientFunds,function(s){let{data:i,gasPrice:d,ignoreTokenBalance:u,balance:_,chainId:f}=this.parent;return s&&!u?ko({amount:L,balance:_,gasLimit:s,gasPrice:d,data:i,chainId:f}):!0});return[e,...ct(o),r,t].reduce((p,s)=>p.concat(s),(0,Vt.string)())},Ss=n_;n();var ws=require("@terradharitri/sdk-dapp/constants/index"),Cs=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Es=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ut=g(require("bignumber.js")),Wo=require("yup");var a_=o=>{let e=(0,Wo.string)().required(o.required),t=(0,Wo.string)().test("decimalFormat",o.maxDecimalsAllowed(ws.DECIMALS),i=>(0,Cs.maxDecimals)(String(i))),r=(0,Wo.string)().test("minimum",o.tooLowGasPrice(Ge),i=>{let d=new Ut.default(String(i)),u=new Ut.default(Ge),_=i&&d.isGreaterThanOrEqualTo(u);return Boolean(_)}),a=(0,Wo.string)().test("maximum",o.tooHighGasPrice(Dt),i=>{let d=new Ut.default(String(i)),u=new Ut.default(Dt),_=i&&d.isLessThanOrEqualTo(u);return Boolean(_)}),p=(0,Wo.string)().test("isValidNumber",o.invalidNumber,i=>Boolean(i&&(0,Es.stringIsFloat)(i)));return[e,t,r,a,p].reduce((i,d)=>i.concat(d),(0,Wo.string)())},Is=a_;n();var As=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ns=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Fs=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),lt=g(require("bignumber.js")),$o=require("yup");var p_=o=>{let e=(0,$o.string)().required(o.required),t=(0,$o.string)().test({name:"formatDecimals",test:function(d){let{nft:u,txType:_}=this.parent;return _!=="MetaDCDT"||(0,As.maxDecimals)(String(d),u==null?void 0:u.decimals)?!0:this.createError({message:o.maxDecimalsAllowed(u==null?void 0:u.decimals),path:"amount"})}}),r=(0,$o.string)().test("balance",o.insufficientFunds,function(d){let{txType:u,nft:_}=this.parent;if(!d)return!0;if(u==="MetaDCDT"){let f=(0,j.parseAmount)(d,_==null?void 0:_.decimals),y=new lt.default(f);return new lt.default((_==null?void 0:_.balance)||L).isGreaterThanOrEqualTo(y)}if(u==="SemiFungibleDCDT"){let f=new lt.default(d);return new lt.default((_==null?void 0:_.balance)||L).isGreaterThanOrEqualTo(f)}return!0}),a=(0,$o.string)().test("nonZero",o.cannotBeZero,function(d){let u=this.parent,{ignoreTokenBalance:_}=u;return!d||_?!0:!new lt.default(d).isZero()}),p=(0,$o.string)().test("isValidNumber",o.invalidNumber,function(d){let{nft:u}=this.parent;return(u==null?void 0:u.type)===Z.NftEnumType.MetaDCDT?Boolean(d&&(0,Ns.stringIsFloat)(d)):Boolean(d&&(0,Fs.stringIsInteger)(d))});return[e,p,r,t,a].reduce((i,d)=>i.concat(d),(0,$o.string)())},Ps=p_;n();var Yn=g(require("bignumber.js")),Mt=require("yup");var s_=o=>{let e=(0,Mt.string)().required(o.required),t=(0,Mt.string)().test({name:"minValueData",test:function(p){let s=this.parent,{data:i,ignoreTokenBalance:d,isGuarded:u}=s;if(d)return!0;let _=Je(i?i.trim():"");if(p){let f=new Yn.default(p),y=new Yn.default(_).plus(Fe(u));if(!(p&&f.isGreaterThanOrEqualTo(y)))return this.createError({message:o.tooLowGasLimit(y.toString()),path:"gasLimit"})}return!0}}),r=(0,Mt.string)().test("funds",o.insufficientFunds,function(s){let{data:i,gasPrice:d,balance:u,chainId:_,ignoreTokenBalance:f}=this.parent;return s&&!f?ko({amount:L,balance:u,gasLimit:s,gasPrice:d,data:i,chainId:_}):!0});return[e,...ct(o),r,t].reduce((p,s)=>p.concat(s),(0,Mt.string)())},Ls=s_;n();var Ds=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),mt=require("yup");var i_=o=>{let e=(0,mt.string)().required(o.required),t=(0,mt.string)().test("addressIsValid",o.invalidAddress,s=>Boolean(s&&(0,Ds.addressIsValid)(s))),r=(0,mt.string)().test("sameAddress",o.sameAsOwnerAddress,function(i){let{ignoreTokenBalance:d,txType:u,readonly:_,address:f,isBurn:y}=this.parent;return _r(u)&&!d&&!_&&!y?f!==i:!0}),a=(0,mt.string)().test("canTransfer",o.receiverNotAllowed,function(i){let{nft:d,txType:u,ignoreTokenBalance:_,address:f}=this.parent,y="MetaDCDT"===u,b=_,v=d==null?void 0:d.allowedReceivers;return!i||!y||b||v==null||v.includes(f)?!0:v.includes(i)});return[e,t,r,a].reduce((s,i)=>s.concat(i),(0,mt.string)())},Gs=i_;n();var Bs=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Qn=require("yup"),c_=o=>[(0,Qn.string)().test("invalidHerotag",o.invalidHerotag,function(a){let{receiver:p}=this.parent;if((p==null?void 0:p.startsWith("drt1"))||!a&&!p)return!0;let d=a&&(0,Bs.addressIsValid)(p);return Boolean(d)})].reduce((r,a)=>r.concat(a),(0,Qn.string)()),Vs=c_;var Nr=o=>(0,dt.object)().shape({receiver:Gs(o),receiverUsername:Vs(o),tokenId:(0,dt.string)().required(o.required),gasPrice:Is(o),data:_s,amount:(0,dt.string)().when(["txType"],function(t){switch(t){case"DCDT":return ks(o);case"REWA":return ys(o);default:return Ps(o)}}),gasLimit:(0,dt.string)().when(["txType"],function(t){switch(t){case"DCDT":return Ss(o);case"REWA":return hs(o);default:return Ls(o)}})});var Us=({prefilledForm:o,initialValues:e,errorMessages:t})=>{if(!o||!e)return{};try{return Nr(t).validateSync(e),{}}catch(r){let{path:a,message:p}=r;return{[String(a)]:p}}};n();var Ms=({shouldValidateForm:o,errors:e,touched:t})=>r=>Boolean(e[r]&&(t[r]||o));n();var Ws=(0,Ce.createContext)({});function $s({children:o,value:e}){let{skipToConfirm:t}=e,[r,a]=(0,Ce.useState)(Boolean(t)),[p,s]=(0,Ce.useState)(!1),[i,d]=(0,Ce.useState)(Date.now()),{values:u,errors:_,touched:f,validateForm:y,setFieldTouched:b,setErrors:v,isValid:T,handleSubmit:k}=(0,qs.useFormikContext)(),C=(0,Ce.useCallback)(e.onCloseForm,[]),{isDcdt:A,isNft:I,isRewa:V}=(0,Os.getIdentifierType)(u.tokenId),U=(0,Ce.useCallback)(Ms({shouldValidateForm:r,errors:_,touched:f}),[r,_,f]),M=(0,Ce.useCallback)(()=>S(this,null,function*(){a(!0),Object.values(ae).forEach(O=>{b(O,!0)});let B=yield y();if(Object.keys(B).length===0){e.setIsFormSubmitted(!0);return}_.gasLimit||B.gasPrice?(v(B),d(Date.now())):b("gasLimit",!1)}),[_,y]),W=(0,Ce.useCallback)(()=>{p?s(!1):e.setIsFormSubmitted(!1)},[p]),N=w(x({},e),{checkInvalid:U,isRewaTransaction:V,isDcdtTransaction:A,isNftTransaction:I,shouldValidateForm:r,areValidatedValuesReady:Boolean(e.isFormSubmitted||t)&&T,isGuardianScreenVisible:p,setIsGuardianScreenVisible:s,isFormValid:T,renderKey:i,txType:u.txType,onValidateForm:M,onInvalidateForm:W,onCloseForm:C,onSubmitForm:k});return Ce.default.createElement(Ws.Provider,{value:N},o)}function pe(){return(0,Ce.useContext)(Ws)}n();n();var le=g(require("react")),Ks=require("formik"),Xs=g(require("lodash/uniqBy"));n();n();var Qe=g(require("react"));var zs=(0,Qe.createContext)({});function Rs({children:o,value:{networkConfig:e}}){let[t,r]=(0,Qe.useState)(null);(0,Qe.useEffect)(()=>{a()},[e]);function a(){let p=mr(e.id);r(p)}return Qe.default.createElement(zs.Provider,{value:{networkConfig:e,delegationContractData:t}},o)}function ke(){return(0,Qe.useContext)(zs)}n();n();var Pr=require("react"),Hs=require("@terradharitri/sdk-dapp/constants/index");var Fr=require("@terradharitri/sdk-dapp/types/enums.types");function Lr(){let{networkConfig:o}=ke(),[e,t]=(0,Pr.useState)(0);function r(){return S(this,null,function*(){let a=yield Ep(),p=(a==null?void 0:a.price)||0;t(p)})}return(0,Pr.useEffect)(()=>{![Fr.EnvironmentsEnum.mainnet,Fr.EnvironmentsEnum.testnet,Fr.EnvironmentsEnum.devnet].includes(o==null?void 0:o.id)||r()},[o==null?void 0:o.id]),{rewaLabel:o.rewaLabel,rewaPriceInUsd:e,digits:Hs.DIGITS}}n();var Dr={},Gr=o=>S(void 0,null,function*(){if(!o)return null;if(o.collection in Dr)return Dr[o.collection];let e=yield Lp(o);return Dr[o.collection]=e,Dr[o.collection]});var js=(0,le.createContext)({}),Zs="tokenId",ea="nft",l_="tokens",m_="txType",oa=[];function Js({children:o,value:e}){let[t,r]=(0,le.useState)(!0),{values:{tokenId:a,tokens:p,nft:s},errors:{tokenId:i},setFieldValue:d}=(0,Ks.useFormikContext)(),{address:u,balance:_}=Ne(),{checkInvalid:f}=pe(),{networkConfig:{decimals:y}}=ke(),b=(0,le.useRef)(!1),{rewaPriceInUsd:v,digits:T,rewaLabel:k}=Lr(),C=p||oa,A=(0,le.useCallback)((N=!0)=>S(this,null,function*(){if(r(N),b.current)return;b.current=!0;let B=yield Np(u),P=p!=null?p:[],O=(0,Xs.default)([...P,...B],K=>K.identifier);d(l_,O),oa=O,b.current=!1,r(!1)}),[u]),I=(0,le.useCallback)(N=>{d(Zs,N,!1)},[]);(0,le.useEffect)(()=>(A(!1),()=>{oa=[]}),[]);let V=()=>S(this,null,function*(){let N=Lt({nft:s,tokenId:a});if(d(m_,N),N==="SemiFungibleDCDT"||N==="NonFungibleDCDT")return;let B=(M==null?void 0:M.find(P=>P.identifier===a))||s;if(N==="MetaDCDT"&&B){let P=B;d(ea,P);let O=yield Gr(P);P=w(x({},P),{allowedReceivers:O}),d(ea,P)}else d(ea,void 0)}),U=f(Zs),M=[{name:"DharitrI eGold",identifier:k,balance:_,decimals:Number(y),ticker:k,usdPrice:v},...C];(0,le.useEffect)(()=>{V()},[a]);let W=(0,le.useMemo)(()=>Pt({tokens:M||[],tokenId:a}),[a,p]);return le.default.createElement(js.Provider,{value:{nft:s||(e==null?void 0:e.initialNft),tokens:C,allAvailableTokens:M,areTokensLoading:t&&C.length===0,tokenIdError:i,tokenId:a,tokenDetails:W,rewaLabel:k,RewaIcon:e==null?void 0:e.RewaIcon,rewaPriceInUsd:v,digits:T,isTokenIdInvalid:U,getTokens:A,onChangeTokenId:I}},o)}function So(){return(0,le.useContext)(js)}n();n();var ft=require("@terradharitri/sdk-dapp/constants/index"),_i=require("formik");n();n();var me=g(require("react")),Ur=require("@terradharitri/sdk-dapp/constants/index"),ii=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ci=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),aa=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),li=g(require("bignumber.js")),mi=require("formik");n();n();n();n();var ta=g(require("bignumber.js"));function Ys({amount:o="",available:e,readonly:t=!1,entireBalanceMinusDust:r}){let a=new ta.default(o),s=new ta.default(r).isGreaterThan(a),i=!o,d=Te("amount",t);return(i||s)&&e!==L&&!d}function Qs({nft:o,amount:e,readonly:t,maxAmountAvailable:r,maxAmountMinusDust:a,txType:p}){switch(p){case"REWA":return Ys({amount:e,entireBalanceMinusDust:a,readonly:t,available:r});case"DCDT":return e!==r&&!t&&r!==L;default:return o!=null&&e!==(o==null?void 0:o.balance)&&!t}}n();var ra=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ot=g(require("bignumber.js"));var qt=(o,e)=>{let t=(0,ra.stringIsFloat)(String(o))?o:L,r=(0,ra.stringIsFloat)(String(e))?new Ot.default(e):new Ot.default(L),a=(0,Ot.default)(100).dividedBy(r.dividedBy(t)).toNumber();return Ot.default.minimum(a,100).toNumber()};n();function Br({values:o,errors:e,touched:t}){let r=Boolean(e["amount"]&&t["amount"]);return o.txType==="REWA"?o.amount!=L?r:!1:r}n();var Wt=require("react"),ei=require("@terradharitri/sdk-dapp/constants/index"),oi=require("@terradharitri/sdk-dapp/utils/smartContracts"),ti=g(require("bignumber.js")),ri=require("formik");n();var Vr=require("react");function d_(o,e){let[t,r]=(0,Vr.useState)(o);return(0,Vr.useEffect)(()=>{let p=setTimeout(()=>r(o),e);return()=>clearTimeout(p)},[o]),t}var ut=d_;var na=500;function u_(o){let{networkConfig:{chainId:e}}=ke(),{prefilledForm:t}=pe(),r=(0,ri.useFormikContext)(),{balance:a,address:p,nonce:s}=Ne(),{values:i,initialValues:d,touched:u,errors:{gasLimit:_,amount:f},setFieldValue:y}=r,{data:b,amount:v,gasLimit:T}=i,k=ut(b,na),C=ut(v,na),A=ut(T,na),[I,V]=(0,Wt.useState)(!1),[U,M]=(0,Wt.useState)(o),W=()=>S(this,null,function*(){let N=_||f,B=k.length>0,P=new ti.default(C).isGreaterThanOrEqualTo(0),O=Mo({initialValues:d,gasLimit:T,touched:u}),K=e!==ei.MAINNET_CHAIN_ID||!1;if(!t&&(0,oi.isContract)(i.receiver)&&K&&!O&&!N&&B&&P){V(!0);try{let{gasLimit:G,gasLimitCostError:q}=yield Hn({balance:a,address:p,nonce:s,values:i,chainId:e});V(!1),M(q),y("gasLimit",G,!0)}catch(G){V(!1),console.error(G)}}});return(0,Wt.useEffect)(()=>{W()},[k,C,A,i.receiver,t]),{gasCostLoading:I,gasCostError:U}}var ni=u_;n();n();var ai=require("@terradharitri/sdk-dapp/constants/index"),pi=g(require("bignumber.js"));var si=({isNftTransaction:o,isDcdtTransaction:e,data:t,isGuarded:r})=>{let a=Fe(r),p=ai.GAS_LIMIT.toString();return o&&(p=Je(t)),e&&(p=co),new pi.default(p).plus(a).toString(10)};var di=(0,me.createContext)({});function ui({children:o,initGasLimitError:e}){let t=(0,mi.useFormikContext)(),{values:r,touched:a,errors:{gasPrice:p,gasLimit:s},setFieldValue:i,setFieldTouched:d,initialValues:u}=t,{gasPrice:_,gasLimit:f,data:y,tokenId:b,txType:v,isGuarded:T,receiver:k,amount:C}=r,A=Fe(T),{checkInvalid:I,isNftTransaction:V,isDcdtTransaction:U,prefilledForm:M,isRewaTransaction:W}=pe(),{networkConfig:{chainId:N}}=ke(),{gasCostLoading:B,gasCostError:P}=ni(e),O=si({isNftTransaction:V,isDcdtTransaction:U,data:y,isGuarded:T}),H=!Br({values:r,errors:t.errors,touched:a})&&I("gasLimit"),G=I("gasPrice"),q=(0,me.useCallback)((ee,fe=!1)=>{var Xo;let Et=typeof ee=="string"?ee:(Xo=ee==null?void 0:ee.target)==null?void 0:Xo.value;i("gasPrice",Et,fe)},[]),R=(0,me.useCallback)((ee,fe=!1)=>{var Xo;let Et=typeof ee=="string"?ee:(Xo=ee==null?void 0:ee.target)==null?void 0:Xo.value;i("gasLimit",Et,fe)},[]),ie=(0,me.useCallback)(()=>{i("gasPrice",Ge)},[]),xe=(0,me.useCallback)(()=>{i("gasLimit",O)},[V]),ue=(0,me.useCallback)(()=>{d("gasPrice",!0)},[]),_e=(0,me.useCallback)(()=>{d("gasLimit",!0)},[]),z=Boolean(p)||Boolean(s),Pe=(0,me.useMemo)(()=>{let ee=!(0,aa.stringIsInteger)(f),fe=!(0,ci.stringIsFloat)(_);if(ee||fe)return L;let Et=Mo({initialValues:u,gasLimit:f,touched:a}),Qd=!M&&!Et&&W?y.trim():"",Ua=(0,ii.calculateFeeLimit)({gasLimit:f,gasPrice:(0,j.parseAmount)(_),data:Qd,chainId:N,gasPerDataByte:String(Ur.GAS_PER_DATA_BYTE),gasPriceModifier:String(Ur.GAS_PRICE_MODIFIER)});return(0,aa.stringIsInteger)(Ua)?Ua:L},[z,_,f,N,M,W,a.gasLimit,y,k,C]);(0,me.useEffect)(()=>{let ee=Mo({initialValues:u,gasLimit:f,touched:a});!M&&V&&!ee&&R(new li.default(Je()).plus(A).toString())},[V,a]),(0,me.useEffect)(()=>{M||R(kr({txType:v,data:y,isGuarded:T}),!0)},[b,v]);let ao={gasPrice:_,gasLimit:f,gasCostLoading:B,feeLimit:Pe,defaultGasLimit:O,gasPriceError:p,gasLimitError:s,gasCostError:P,hasErrors:z,isGasLimitInvalid:H,isGasPriceInvalid:G,onChangeGasLimit:R,onChangeGasPrice:q,onBlurGasPrice:ue,onBlurGasLimit:_e,onResetGasPrice:ie,onResetGasLimit:xe};return me.default.createElement(di.Provider,{value:ao},o)}function _t(){return(0,me.useContext)(di)}function fi(){let{values:o}=(0,_i.useFormikContext)(),{balance:e}=Ne(),{networkConfig:{chainId:t}}=ke(),{nft:r,tokens:a}=So(),{isDcdtTransaction:p,isNftTransaction:s,isRewaTransaction:i}=pe(),{gasLimit:d,gasPrice:u}=_t(),{tokenId:_}=o,f=null;s&&r&&(f=Zn({balance:r.balance,decimals:r.type===Z.NftEnumType.MetaDCDT?r.decimals:0,digits:ft.DIGITS}));let y=null;if(p){let{decimals:A,balance:I}=Pt({tokens:a,tokenId:_});y=Zn({balance:I,decimals:A,digits:ft.DIGITS})}let b=L,v=e;if(e&&i){let{entireBalance:A,entireBalanceMinusDust:I}=ls({balance:e,gasPrice:xo(u),gasLimit:d,decimals:ft.DECIMALS,digits:ft.DIGITS,chainId:t});b=A,v=I}let k=i?b:r&&f?f:y;return{maxAmountAvailable:k||L,maxAmountMinusDust:(i?v:k)||L}}var vi=(0,ye.createContext)({});function hi({children:o}){let{values:e,errors:t,touched:r,handleBlur:a,setFieldValue:p,setFieldError:s,setFieldTouched:i}=(0,bi.useFormikContext)(),{readonly:d,uiOptions:u}=pe(),{maxAmountAvailable:_,maxAmountMinusDust:f}=fi(),[y,b]=(0,ye.useState)(qt(e.amount,f)),[v,T]=(0,ye.useState)(!1),{nft:k}=So(),C=u!=null&&u.showAmountSlider?!1:Qs({nft:k,amount:e.amount,readonly:d,maxAmountAvailable:_,maxAmountMinusDust:f,txType:e.txType});function A(){T(!1)}let I=(0,ye.useCallback)((P,O=!0)=>{if(new Mr.default(f).isZero()||!(0,yi.stringIsFloat)(P.toString())){b(0);return}let H=new Mr.default(f).times(P).dividedBy(100),G=(0,we.formatAmount)({input:(0,j.parseAmount)(String(H)),digits:gi.DIGITS,showLastNonZeroDecimal:P>=100});if(O&&p("amount",G),P<0){b(0);return}if(P>100){b(100);return}b(P)},[f,p]),V=(0,ye.useCallback)((P,O=!0)=>{var H;let K=typeof P=="string"?P:(H=P==null?void 0:P.target)==null?void 0:H.value;return i("amount",!0),I(qt(K,f),!1),p("amount",K,O)},[p,I,f]),U=(0,ye.useCallback)(P=>s("amount",P),[s]),M=(0,ye.useCallback)(()=>{i("amount",!0)},[a]),W=(0,ye.useCallback)(()=>(T(!0),V(f||e.amount)),[f]);(0,ye.useEffect)(()=>{(0,Mr.default)(f).isGreaterThan(0)&&I(qt(e.amount,f),!1)},[qt,f]);let N=Br({values:e,errors:t,touched:r}),B={amount:e.amount,error:t.amount,isInvalid:N,maxAmountAvailable:_,maxAmountMinusDust:f,isMaxButtonVisible:C,isMaxClicked:v,amountRange:y,onFocus:A,onBlur:M,onChange:V,onMaxClicked:W,onSetError:U,onSetAmountPercentage:I};return ye.default.createElement(vi.Provider,{value:B},o)}function xi(){return(0,ye.useContext)(vi)}n();n();var Be=g(require("react")),Ti=require("formik");var ki=(0,Be.createContext)({});function Si({children:o}){let{values:e,errors:t,touched:r,setFieldValue:a,handleBlur:p,setFieldTouched:s,initialValues:i}=(0,Ti.useFormikContext)(),{checkInvalid:d,prefilledForm:u,isRewaTransaction:_}=pe(),{nft:f}=So(),{receiver:y,txType:b,amount:v,tokenId:T,isAdvancedModeEnabled:k,gasLimit:C}=e,{onChangeGasLimit:A}=_t(),{isGuarded:I}=Ne(),V=d("data"),U=(B,P=!1)=>{var H;let O=typeof B=="string"?B:(H=B==null?void 0:B.target)==null?void 0:H.value,K=Mo({initialValues:i,gasLimit:C,touched:r});if(a("data",O,P),!u&&!K&&_){let G=Ye({data:O,isGuarded:I});A(G)}},M=(0,Be.useCallback)(()=>{s("data",!0)},[p]),W=(0,Be.useCallback)(()=>{U("")},[]);(0,Be.useEffect)(()=>{if(!u){let B=b!=="DCDT"?t.receiver:"",P=Qp({txType:b,values:e,nft:f,amountError:Boolean(t.amount),receiverError:B});U(P)}},[v,y,u,f,t.receiver,t.amount,b]),(0,Be.useEffect)(()=>{!u&&_&&U("")},[T,_]);let N={data:e.data,dataError:t.data,isDataInvalid:V,onChange:U,onBlur:M,onReset:W,isAdvancedModeEnabled:k};return Be.default.createElement(ki.Provider,{value:N},o)}function wi(){return(0,Be.useContext)(ki)}n();n();var Re=g(require("react")),Di=require("formik");n();n();n();var Or=require("react"),Ei=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Ii=g(require("lodash/uniqBy"));n();n();var pa=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),sa=require("@terradharitri/sdk-dapp/utils"),Ci=o=>o.reduce((e,t)=>{var f,y;let r=(f=t.receiverAssets)==null?void 0:f.name,a=(y=t.senderAssets)==null?void 0:y.name,p=(0,pa.trimUsernameDomain)(r),s=(0,pa.trimUsernameDomain)(a),i=(0,sa.isContract)(t.receiver),d=(0,sa.isContract)(t.sender),u={address:t.receiver,username:i?void 0:p,rawUsername:i?void 0:r},_={address:t.sender,username:d?void 0:s,rawUsername:d?void 0:a};return t?[...e,u,_]:e},[]);function Ai(){let{address:o}=Ne(),[e,t]=(0,Or.useState)(null);function r(){return S(this,null,function*(){try{let a=yield ne(),{data:p}=yield(0,Ei.getTransactions)({sender:o,receiver:o,transactionSize:50,apiAddress:a.baseURL,apiTimeout:a.timeout,withUsername:!0}),s=Ci(p),i=(0,Ii.default)(s,d=>d.address);t(i)}catch(a){console.error("Unable to fetch transactions",a),t([])}})}return(0,Or.useEffect)(()=>{r()},[]),e}n();var Pi=require("react");n();var ia=require("react"),Ni=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");function Fi(o){let[e,t]=(0,ia.useState)({}),[r,a]=(0,ia.useState)(!1);return{verifiedAddresses:e,verifyScamAddress:d=>S(this,[d],function*({address:s,addressToVerify:i=""}){let u=s!==i,_=!(i in e);if(u&&(0,Ni.addressIsValid)(i)&&_&&!r){a(!0);try{let f=yield wp(i,o);t(y=>x(x({},y),f.scamInfo?{[i]:f.scamInfo}:{}))}catch(f){console.error("Unable to find address",f)}a(!1)}}),fetchingScamAddress:r}}function Li(o){var s;let{address:e}=Ne(),{verifiedAddresses:t,verifyScamAddress:r,fetchingScamAddress:a}=Fi(),p=(s=t[o])==null?void 0:s.info;return(0,Pi.useEffect)(()=>{o&&r({address:e,addressToVerify:o})},[o]),{scamError:p,fetchingScamAddress:a}}var Gi=(0,Re.createContext)({}),ca="receiver";function Bi({children:o}){let{values:{receiver:e},errors:{receiver:t},setFieldValue:r,setFieldTouched:a}=(0,Di.useFormikContext)(),{checkInvalid:p}=pe(),[s,i]=(0,Re.useState)(e),{scamError:d,fetchingScamAddress:u}=Li(e),_=Ai(),f=(0,Re.useCallback)((v,T=!1)=>{r(ca,v,T)},[]),y=(0,Re.useCallback)(()=>{a(ca,!0)},[]),b={receiver:e,receiverError:t,receiverInputValue:s,setReceiverInputValue:v=>i(v),isReceiverInvalid:p(ca),scamError:d,fetchingScamAddress:u,knownAddresses:_,onChangeReceiver:f,onBlurReceiver:y};return Re.default.createElement(Gi.Provider,{value:b},o)}function gt(){return(0,Re.useContext)(Gi)}n();n();var yt=g(require("react")),Hi=require("formik");n();n();var qr=({knownAddresses:o,inputValue:e,key:t})=>!o||!e?!1:o.some(a=>{var p;return Boolean((p=a[t])==null?void 0:p.startsWith(e))});n();n();n();var $i=require("react"),zi=require("@terradharitri/sdk-dapp/utils");n();var ma=require("react"),da=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var Vi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ui=g(require("axios"));function Mi(o,e){return S(this,null,function*(){var t;try{let r=e||(yield ne()),{request:a,data:p}=yield Ui.default.get(`usernames/${o}`,r);if(!(a!=null&&a.responseURL))return null;let[,s]=(t=a.responseURL.split("/accounts/"))!=null?t:[],i=s!=null?s:p.address;return(0,Vi.addressIsValid)(i)?p:null}catch(r){return null}})}n();var Oi=g(require("axios"));function qi(o,e){return S(this,null,function*(){try{let{data:t}=yield Oi.default.get(`${e}/accounts/${o}`);if(t!=null)return t}catch(t){console.error("error fetching numbat account")}return null})}var la={};function Wi(o){let[e,t]=(0,ma.useState)(!1),[r,a]=(0,ma.useState)(la);return{usernameAccounts:r,fetchUsernameAccount:i=>S(this,null,function*(){if(!(i in r||e)){t(!0);try{let u=yield Mi(i,o),_=u==null?void 0:u.username;a(f=>{var b;let y=w(x({},f),{[i]:{address:(b=u==null?void 0:u.address)!=null?b:"",username:_?String((0,da.trimUsernameDomain)(_)):"",rawUsername:_!=null?_:""}});return la=y,y})}catch(u){a(_=>w(x({},_),{[i]:null}))}t(!1)}}),fetchUsernameByAddress:i=>S(this,null,function*(){if(!(Object.values(r).find(u=>u&&u.address===i)||e)){t(!0);try{let u=o||(yield ne()),_=yield qi(i,u.baseURL),f=_==null?void 0:_.address,y=_==null?void 0:_.username,b=(0,da.trimUsernameDomain)(y);if(!f||!b)return;a(v=>{let T=w(x({},v),{[b]:{address:f,username:String(b),rawUsername:y!=null?y:""}});return la=T,T})}catch(u){console.error(u)}t(!1)}}),fetchingUsernameAccount:e}}var Ri=({shouldSkipSearch:o=!1,searchPatternToLookFor:e})=>{let{fetchUsernameAccount:t,fetchUsernameByAddress:r,fetchingUsernameAccount:a,usernameAccounts:p}=Wi(),s=(0,zi.addressIsValid)(e);return(0,$i.useEffect)(()=>{if(!(!e||o)){if(s){r(e);return}t(e)}},[e,s]),{fetchingUsernameAccount:a,usernameAccounts:p}};var Zi=(0,yt.createContext)({}),__=1e3;function Ki({children:o}){var k;let{values:{receiverUsername:e},errors:{receiverUsername:t}}=(0,Hi.useFormikContext)(),{receiverInputValue:r,knownAddresses:a}=gt(),p=Op(r),s=ut(r,__),i=a==null?void 0:a.some(C=>C.username===r),{usernameAccounts:d}=Ri({shouldSkipSearch:Boolean(i),searchPatternToLookFor:s}),u=(k=d[r])==null?void 0:k.username,_=r!==s&&u!==null,f=qr({key:"username",knownAddresses:a,inputValue:r}),y=!_&&u===void 0&&r,b=Boolean(y&&!p&&!f),T={showUsernameError:Boolean(r&&s&&!_&&!y&&!u&&!p),isUsernameLoading:b,isUsernameDebouncing:_,usernameIsAmongKnown:f,receiverUsername:e,receiverUsernameError:t,isReceiverUsernameInvalid:Boolean(t),usernameAccounts:d,searchQueryIsAddress:p};return yt.default.createElement(Zi.Provider,{value:T},o)}function bt(){return(0,yt.useContext)(Zi)}n();var vt=g(require("react"));var Xi=(0,vt.createContext)({});function ji({children:o}){let e=Ne(),t=pe(),r=So(),a=xi(),p=_t(),s=wi(),i=gt(),d=bt();return vt.default.createElement(Xi.Provider,{value:{accountInfo:e,formInfo:t,tokensInfo:r,gasInfo:p,dataFieldInfo:s,receiverInfo:i,receiverUsernameInfo:d,amountInfo:a}},o)}function $(){return(0,vt.useContext)(Xi)}function Yi({accountInfo:o,formInfo:e,tokensInfo:t,networkConfig:r,children:a,Loader:p,initGasLimitError:s}){let[i,d]=(0,Se.useState)();function u(){return S(this,null,function*(){let _=!r.skipFetchFromServer,{chainId:f}=r,y=tt(f),b=Ji.fallbackNetworkConfigurations[y]||{};if(_){let T=yield lr(f);if(T){let k=x(x(x({},b),T),r);rt(k),d(k);return}}let v=x(x({},b),r);rt(v),d(v)})}return(0,Se.useEffect)(()=>{u()},[r]),i?Se.default.createElement(Rs,{value:{networkConfig:i}},Se.default.createElement(Up,{value:o},Se.default.createElement($s,{value:e},Se.default.createElement(Js,{value:t},Se.default.createElement(Bi,null,Se.default.createElement(Ki,null,Se.default.createElement(ui,{initGasLimitError:s},Se.default.createElement(Si,null,Se.default.createElement(hi,null,Se.default.createElement(ji,null,a)))))))))):p!=null?Se.default.createElement(p,null):null}n();var ua=require("@terradharitri/sdk-dapp/constants/index");var Wr={insufficientFunds:"Insufficient funds",invalidAddress:"Invalid address",invalidGasPrice:"Invalid gas price",invalidNumber:"Invalid number",invalidFeePerDataByte:"Invalid fee per data byte",cannotBeZero:"Cannot be zero",required:"Required",amountTooSmall:"Amount too small",sameAsOwnerAddress:"Same as owner address",receiverNotAllowed:"Receiver not allowed",invalidHerotag:"Invalid herotag",tooLowGasLimit:(o=ua.GAS_LIMIT)=>`Gas limit must be greater or equal to ${o}`,tooHighGasLimit:(o=ua.GAS_LIMIT)=>`Gas limit must be lower than ${o}`,tooLowGasPrice:(o=Ge)=>`Gas price must be greater or equal to ${o}`,tooHighGasPrice:(o=Dt)=>`Gas price must be lower or equal to ${o}`,maxDecimalsAllowed:o=>`Maximum ${o} decimals allowed`};function oc(o){var q,R,ie,xe,ue,_e,z,Pe;let{initialValues:e,onFormSubmit:t,formInfo:r,children:a,accountInfo:p,tokensInfo:s,initGasLimitError:i,networkConfig:d,enableReinitialize:u=!0,Loader:_,errorMessageTranslations:f=Wr,shouldGenerateTransactionOnSubmit:y=!0}=o,{address:b,balance:v,username:T}=p,{chainId:k}=d,[C,A]=(0,zo.useState)(Boolean(o.formInfo.skipToConfirm)),[I,V]=(0,zo.useState)(),[U,M]=(0,zo.useState)(!1),W=Us({initialValues:e,prefilledForm:r.prefilledForm,errorMessages:Wr});function N(ao){return S(this,null,function*(){let ee=yield fr(ao),fe=y?I!=null?I:yield hr({address:b,balance:v,chainId:k,nonce:p.nonce,values:ee}):null;return t(ee,fe,A)})}let B=(e==null?void 0:e.tokenId)||(d==null?void 0:d.rewaLabel)||Qi.fallbackNetworkConfigurations.mainnet.rewaLabel,P=Nr(x(x({},f),Wr)),O=(q=e==null?void 0:e.data)!=null?q:"",K=(R=e==null?void 0:e.txType)!=null?R:Lt({nft:s==null?void 0:s.initialNft,tokenId:B}),H=(ie=e==null?void 0:e.gasLimit)!=null?ie:kr({txType:K,data:O,isGuarded:p.isGuarded}),G={address:(xe=e==null?void 0:e.address)!=null?xe:b,amount:(ue=e==null?void 0:e.amount)!=null?ue:L,balance:(e==null?void 0:e.balance)||v,chainId:(e==null?void 0:e.chainId)||d.chainId,code:"",data:O,gasLimit:H,gasPrice:(_e=e==null?void 0:e.gasPrice)!=null?_e:Ge,isBurn:r.isBurn,isGuarded:(z=e==null?void 0:e.isGuarded)!=null?z:p.isGuarded,ledger:e==null?void 0:e.ledger,nft:s==null?void 0:s.initialNft,receiver:(Pe=e==null?void 0:e.receiver)!=null?Pe:"",receiverUsername:e==null?void 0:e.receiverUsername,senderUsername:T,tokenId:B,tokens:s==null?void 0:s.initialTokens,txType:K};return zo.default.createElement(ec.Formik,{initialValues:G,enableReinitialize:u,onSubmit:N,initialErrors:W,validationSchema:P},zo.default.createElement(Yi,{initGasLimitError:i,accountInfo:p,formInfo:w(x({},r),{isFormSubmitted:C,setIsFormSubmitted:A,setGuardedTransaction:V,hasGuardianScreen:U,setHasGuardianScreen:M}),networkConfig:d,tokensInfo:s,Loader:_},a))}n();var $r=require("react");n();n();var xc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var tc=require("@terradharitri/sdk-dapp/constants/index");var f_="1",rc=({computedNft:o,amount:e})=>{var a,p,s;if(((a=o==null?void 0:o.nft)==null?void 0:a.type)===Z.NftEnumType.NonFungibleDCDT)return f_;let t=((p=o==null?void 0:o.nft)==null?void 0:p.type)===Z.NftEnumType.MetaDCDT,r=(o==null?void 0:o.quantity)||e;return t&&r?(0,we.formatAmount)({input:r,decimals:(s=o==null?void 0:o.nft)==null?void 0:s.decimals,showLastNonZeroDecimal:!0,addCommas:!1,digits:tc.DIGITS}):r};n();function nc(o){let{computedNft:e,data:t,amount:r,receiver:a}=o,p=e==null?void 0:e.nft,s=p?Rn({nft:p,amount:r,receiver:a,errors:!1}):"";return t||s}n();var ac=o=>S(void 0,null,function*(){let p=o,{configValues:e}=p,t=jo(p,["configValues"]),r=mr(o.chainId),a=w(x(x({isInternal:["1","T"].includes(o.chainId)},t),e),{delegationContractData:r});return as(a)});n();var ht=require("@terradharitri/sdk-dapp/constants/index");var pc=o=>o!=null&&o!==L?o:(0,we.formatAmount)({input:String(ht.GAS_PRICE),decimals:ht.DECIMALS,showLastNonZeroDecimal:!0,digits:ht.DIGITS});n();var yc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var sc=require("@terradharitri/sdk-dapp/types/tokens.types"),ic=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");function cc(o,e){return S(this,null,function*(){let{address:t,identifier:r}=o,{isNft:a}=(0,ic.getIdentifierType)(r);if(!a)return null;try{let p=yield ur({address:t,identifier:r},e);if((p==null?void 0:p.type)===sc.NftEnumType.MetaDCDT){let s=yield Gr(p);p=w(x({},p),{allowedReceivers:s})}return p}catch(p){console.log(p)}return null})}n();var _c=require("@terradharitri/sdk-core"),fc=g(require("bignumber.js"));n();var lc=require("@terradharitri/sdk-core"),mc=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),dc=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");var g_=o=>o.split("@").map((p,s)=>[2,3].includes(s)?p:(0,dc.decodePart)(p)),uc=({data:o,nft:e,address:t})=>{let r=o==null?void 0:o.startsWith("DCDTNFTBurn"),a=o==null?void 0:o.startsWith("DCDTNFTTransfer");if((r||a)&&o.includes("@"))try{let[,s,i,d,u]=e?["DCDTNFTTransfer",e.collection,e.nonce,e.quantity,e.receiver]:g_(o),_=r&&!u?t:u,f=[s,i,d,_].every(b=>b),y=(0,mc.addressIsValid)(new lc.Address(_).bech32());if(f&&y)return{collection:s,nonce:i,quantity:d,receiver:_}}catch(s){console.error("Could not extract NFT from data:",s);return}};var y_=(o,e)=>S(void 0,null,function*(){let{address:t,identifier:r}=o;try{return yield ur({address:t,identifier:r},e)}catch(a){return yield Dp(r,e)}}),gc=(o,e)=>S(void 0,null,function*(){let{address:t,nft:r}=o,a=uc(o);try{if(a){let{collection:p,nonce:s,quantity:i,receiver:d}=a,u=`${p}-${s}`,_=yield y_({identifier:u,address:t},e);if(_)return{receiver:new _c.Address(d).bech32(),nft:_,quantity:r?i:new fc.default(i,16).toString(10)}}}catch(p){console.log(p)}return null});var b_={receiver:"",quantity:""},bc=r=>S(void 0,[r],function*({data:o,address:e,identifier:t}){if(o)return yield gc({data:o,address:e});let{isNft:a}=(0,yc.getIdentifierType)(t);if(t&&a){let p=yield cc({identifier:t,address:e});return p?w(x({},b_),{nft:p}):null}return null});n();var vc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");function v_(o,e){return S(this,null,function*(){let{address:t,identifier:r}=o;try{let{data:a}=yield Ap({address:t,token:r},e);return a}catch(a){console.log(a)}return null})}function hc(o){let{identifier:e,address:t}=o,{isDcdt:r}=(0,vc.getIdentifierType)(e);return e&&r?v_({address:t,identifier:e}):null}function h_(){let o=new URLSearchParams(window.location.search);return Object.fromEntries(o).token}function Tc(o){return S(this,null,function*(){let{address:e,rewaLabel:t,configValues:{receiver:r,receiverUsername:a,amount:p,gasPrice:s,data:i,tokenId:d},networkConfig:u}=o,_=h_(),f=d||_,y=f||t;u&&rt(u);let[b,v,T]=yield Promise.all([bc({data:i,address:e,identifier:f}),hc({identifier:f,address:e}),ac(w(x({},o),{computedTokenId:y}))]),{initGasLimit:k,initGasLimitError:C}=T,A={receiver:r,receiverUsername:a,amount:rc({computedNft:b,amount:p}),tokenId:y,gasLimit:k,gasPrice:pc(s),data:nc({computedNft:b,data:i,receiver:r,amount:p})},{isDcdt:I}=(0,xc.getIdentifierType)(f);return{initialValues:A,nft:b==null?void 0:b.nft,gasLimitCostError:C,computedTokens:v?[v]:[],computedTokenId:y,tokenFound:I?Boolean(v):!0}})}n();function kc(o){let[e,t]=(0,$r.useState)(null);function r(){return S(this,null,function*(){let a=yield Tc(o);t(a)})}return(0,$r.useEffect)(()=>{r()},[]),e}n();n();var Y=g(require("react")),yn=require("@terradharitri/sdk-core/out"),qd=g(require("classnames")),Wd=require("formik");n();var x_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(x_));var E={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};n();n();var Kt=g(require("react")),el=g(require("classnames"));n();n();n();var be=g(require("react")),Yc=require("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");n();var Xc=require("react");n();n();var lo=g(require("react")),Hr=require("@terradharitri/sdk-dapp/constants/index"),fa=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Cc=require("@terradharitri/sdk-dapp/UI/UsdValue/index");n();n();var eo=g(require("react")),Sc=require("@fortawesome/free-solid-svg-icons"),wc=require("@fortawesome/react-fontawesome"),_a=g(require("classnames"));n();var T_=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(T_));var wo={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"};var w_=(zt(),Jo($t)).default,Rr=o=>{let{avatar:e,type:t}=o;return t==="NonFungibleDCDT"?eo.default.createElement("div",{className:(0,_a.default)(wo.tokenAvatar,wo.tokenAvatarNFT)},"NFT"):t==="SemiFungibleDCDT"?eo.default.createElement("div",{className:(0,_a.default)(wo.tokenAvatar,wo.tokenAvatarSFT)},"SFT"):t==="REWA"?eo.default.createElement("div",{className:wo.tokenAvatar},o.RewaIcon?eo.default.createElement(o.RewaIcon,null):eo.default.createElement(w_,null)):e?eo.default.createElement("div",{className:wo.tokenAvatar},eo.default.createElement("img",{src:e})):eo.default.createElement("div",{className:wo.tokenAvatar},eo.default.createElement(wc.FontAwesomeIcon,{icon:Sc.faDiamond}))};n();var C_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(C_));var Rt={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Ec=({label:o="Amount",amount:e,txType:t,tokenDecimals:r,tokenId:a,rewaLabel:p,rewaPriceInUsd:s,nft:i,tokenAvatar:d})=>{let u=(i==null?void 0:i.decimals)||0,_=t==="DCDT",f=t==="MetaDCDT",y=t==="NonFungibleDCDT",b=f?(0,j.parseAmount)(e,i==null?void 0:i.decimals):e,v=Boolean(i&&e),T=a.split("-")[0],k=_?r:Hr.DECIMALS,C=v?lo.default.createElement(fa.FormatAmount,{rewaLabel:p,value:b,decimals:u,digits:t==="MetaDCDT"?Hr.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):lo.default.createElement(fa.FormatAmount,{rewaLabel:p,value:(0,j.parseAmount)(e,k),showLabel:!1,decimals:k,showLastNonZeroDecimal:!0,token:_?T:p,"data-testid":"confirmAmount"});return y?null:lo.default.createElement("div",{className:Rt.amount},lo.default.createElement("span",{className:E.label},o),lo.default.createElement("div",{className:Rt.token},lo.default.createElement(Rr,{type:t,avatar:d}),lo.default.createElement("div",{className:Rt.value},C," ",T)),!_&&lo.default.createElement(Cc.UsdValue,{amount:e,usd:s,"data-testid":"confirmUsdValue",className:Rt.price}))};n();n();var te=g(require("react")),Ic=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");n();var E_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(E_));var Ht={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"};var I_=(o,e)=>[...o.matchAll(new RegExp(e,"gi"))].map(t=>t.index),Ac=({label:o="Data",scCallLabel:e="SC Call",data:t,highlight:r,isScCall:a})=>{let p=te.default.createElement(te.default.Fragment,null,t),[s,...i]=r&&a?r.split("@"):[];if(t&&r&&I_(t,r).length===1)switch(!0){case t.startsWith(r):{let[,d]=t.split(r);p=te.default.createElement(te.default.Fragment,null,r,te.default.createElement("span",null,d));break}case t.endsWith(r):{let[d]=t.split(r);p=te.default.createElement(te.default.Fragment,null,te.default.createElement("span",null,d),r);break}default:{let[d,u]=t.split(r);p=te.default.createElement(te.default.Fragment,null,te.default.createElement("span",null,d),r,te.default.createElement("span",null,u));break}}return te.default.createElement(te.default.Fragment,null,s&&te.default.createElement("div",{className:Ht.data},te.default.createElement("span",{className:E.label},e),te.default.createElement("div",{"data-testid":"confirmScCall",className:Ht.value},[(0,Ic.decodePart)(s),...i].join("@"))),te.default.createElement("div",{className:Ht.data},te.default.createElement("span",{className:E.label},o),te.default.createElement("div",{"data-testid":"confirmData",className:Ht.value},t?p:"N/A")))};n();n();var Co=g(require("react")),Nc=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");n();var A_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(A_));var Zt={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Fc=({rewaPriceInUsd:o,label:e="Fee",feeLimit:t,rewaLabel:r})=>Co.default.createElement("div",{className:Zt.fee},Co.default.createElement("span",{className:E.label},e),Co.default.createElement("div",{className:Zt.token},Co.default.createElement(Rr,{type:"REWA"}),Co.default.createElement("div",{className:Zt.value},Co.default.createElement(Nc.FormatAmount,{rewaLabel:r,value:t,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),t!==L&&Co.default.createElement("span",{className:Zt.price},yr({feeLimit:t,rewaPriceInUsd:o})));n();n();var Le=g(require("react")),Dc=require("@fortawesome/free-solid-svg-icons"),Gc=require("@fortawesome/react-fontawesome"),Bc=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Vc=require("@terradharitri/sdk-dapp/UI/CopyButton"),Uc=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),Mc=require("@terradharitri/sdk-dapp/UI/Trim"),Oc=g(require("classnames"));n();var{default:mo}=(Lc(),Jo(Pc));n();var P_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(P_));var He={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"};var qc=({label:o="Receiver",receiver:e,scamReport:t,receiverUsername:r})=>{let a=Boolean(r),p=r!=null?r:e;return Le.default.createElement("div",{className:He.confirmReceiver},Le.default.createElement("span",{className:E.label},o),Le.default.createElement("span",{className:(0,Oc.default)(He.value,{[He.shrunk]:a}),"data-testid":"confirmReceiver"},a&&Le.default.createElement(mo,{className:He.icon}),p,a&&Le.default.createElement(Uc.ExplorerLink,{page:`/${Bc.ACCOUNTS_ENDPOINT}/${e}`,className:He.explorer})),a&&Le.default.createElement("span",{className:He.subValue},Le.default.createElement(Mc.Trim,{text:e,className:He.subValueTrim}),Le.default.createElement(Vc.CopyButton,{text:e,className:He.subValueCopy})),t&&Le.default.createElement("div",{className:He.scam},Le.default.createElement("span",null,Le.default.createElement(Gc.FontAwesomeIcon,{icon:Dc.faExclamationTriangle,className:He.icon}),Le.default.createElement("small",{"data-testid":"confirmScamReport"},t))))};n();n();var Eo=g(require("react"));n();n();var se=g(require("react")),Wc=require("@fortawesome/free-solid-svg-icons"),$c=require("@fortawesome/react-fontawesome"),zc=g(require("@terradharitri/sdk-dapp/constants/index")),Rc=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Hc=g(require("classnames"));n();var L_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(L_));var Ro={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};var D_=(zt(),Jo($t)).default,Kr=({RewaIcon:o,inDropdown:e=!1,isRewa:t,nftTokenDetails:r,nftType:a,token:p})=>{var C,A;let{name:s,identifier:i,balance:d,decimals:u}=p,_=((C=p.assets)==null?void 0:C.svgUrl)||((A=p.assets)==null?void 0:A.pngUrl)||"",f=_?28:20,[y,b]=(0,se.useState)(s);(0,se.useEffect)(()=>{var V;((V=r==null?void 0:r.uris)==null?void 0:V.some(U=>{let M=c.Buffer.from(String(U),"base64").toString(),{found:W}=zp(M,r==null?void 0:r.scamInfo);return W}))||b(s)},[s]);let v=se.default.createElement($c.FontAwesomeIcon,{icon:Wc.faDiamond});a==Z.NftEnumType.NonFungibleDCDT&&(v=se.default.createElement("div",{className:"nft-type","data-testid":`${i}-type-nft`},"NFT")),a===Z.NftEnumType.SemiFungibleDCDT&&(v=se.default.createElement("div",{className:"nft-type","data-testid":`${i}-type-sft`},"SFT"));let T=!e&&a!==Z.NftEnumType.NonFungibleDCDT,k=se.default.createElement("div",{className:Ro.tokenElementCircle},v);return _&&(k=se.default.createElement("img",{className:Ro.tokenElementCircle,src:_,alt:s,height:f})),t&&(k=se.default.createElement("div",{className:Ro.tokenElementCircle},o?se.default.createElement(o,{height:36}):se.default.createElement(D_,{height:36}))),se.default.createElement("div",{className:(0,Hc.default)(E.value,Ro.tokenElement)},se.default.createElement("div",{className:Ro.tokenElementWrapper},k),se.default.createElement("div",{"data-testid":"tokenName"},se.default.createElement("span",{"data-testid":`${i}-element`},se.default.createElement("span",null,y)," ",se.default.createElement("span",{className:Ro.tokenElementIdentifier},i)),T&&se.default.createElement(Rc.FormatAmount,{rewaLabel:i,value:d||L,digits:a===Z.NftEnumType.SemiFungibleDCDT?0:zc.DIGITS,token:i,showLabel:!1,decimals:u,"data-testid":`${i}-balance`})))};n();var G_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(G_));var Zc={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"};var Kc=({RewaIcon:o,rewaLabel:e,isDcdtTransaction:t,nft:r,tokenAvatar:a,tokenId:p,tokenIdError:s})=>{var d;let i=(r==null?void 0:r.name)||"";return Eo.default.createElement("div",{className:Zc.token},Eo.default.createElement("span",{className:E.label},r?Eo.default.createElement("span",null,r==null?void 0:r.name," "):"","Token"),Eo.default.createElement("div",null,r?Eo.default.createElement(Kr,{inDropdown:!0,token:{name:r==null?void 0:r.name,identifier:r==null?void 0:r.identifier,decimals:0,balance:L,ticker:"",assets:{svgUrl:((d=r==null?void 0:r.assets)==null?void 0:d.svgUrl)||""}}}):Eo.default.createElement(Kr,{inDropdown:!0,token:{name:t?i:"DharitrI eGold",identifier:t?p:e,decimals:0,balance:L,ticker:"",assets:{svgUrl:a||""}},isRewa:p===e,RewaIcon:o})),s&&Eo.default.createElement("div",{className:E.error},s))};var Io=class extends Xc.Component{render(){return null}};Io.Receiver=qc,Io.Amount=Ec,Io.Fee=Fc,Io.Data=Ac,Io.Token=Kc;var Xr=Io;n();n();var uo=g(require("react")),ga=g(require("classnames"));n();var B_=`.dapp-core-component__styles-module__preview {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(B_));var Ve={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"};var jr=o=>{let _=o,{txType:e,onClick:t,identifier:r}=_,a=jo(_,["txType","onClick","identifier"]),{name:p,thumbnail:s}=$p({nft:a}),i=["NonFungibleDCDT","SemiFungibleDCDT"].includes(e),d=e==="NonFungibleDCDT"?"NFT":"SFT",u=f=>{f.preventDefault(),t&&t(f,Object.assign(a,{identifier:r}))};return i?uo.default.createElement("div",{onClick:u,"data-testid":"token-preview",className:(0,ga.default)(Ve.preview,{[Ve.clickable]:Boolean(t)})},uo.default.createElement("img",{src:s,className:Ve.image}),uo.default.createElement("div",{className:Ve.content},uo.default.createElement("div",{className:Ve.left},uo.default.createElement("div",{"data-testid":"token-preview-name",className:Ve.name},p),uo.default.createElement("div",{"data-testid":"token-preview-identifier",className:Ve.identifier},r)),uo.default.createElement("div",{className:Ve.right},uo.default.createElement("div",{className:(0,ga.default)(Ve.badge,{[Ve.nft]:e==="NonFungibleDCDT",[Ve.sft]:e==="SemiFungibleDCDT"})},d)))):null};n();var V_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(V_));var _o={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};n();n();var Jr=require("@terradharitri/sdk-dapp/types/enums.types"),jc=({providerType:o,hasGuardianScreen:e})=>e?"Confirm & Continue":o===Jr.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":o===Jr.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":o===Jr.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";n();var Jc=({receiverAddress:o,knownAddresses:e,existingReceiverUsername:t})=>{if(t)return t;let r=e==null?void 0:e.find(a=>a.address===o);return r==null?void 0:r.username};var Qc=({isConfirmCloseBtnVisible:o=!0,providerType:e})=>{var ue;let{setIsGuardianScreenVisible:t}=pe(),{receiverUsernameInfo:{receiverUsername:r},receiverInfo:{scamError:a,receiver:p,knownAddresses:s},formInfo:i,gasInfo:{gasCostError:d,feeLimit:u},accountInfo:{isGuarded:_},dataFieldInfo:{data:f},amountInfo:y,tokensInfo:b}=$(),{tokenId:v,tokenDetails:T,nft:k,rewaPriceInUsd:C,rewaLabel:A}=b,{readonly:I,onCloseForm:V,onInvalidateForm:U,onPreviewClick:M,onSubmitForm:W,txType:N,hasGuardianScreen:B}=i,P=()=>{t(!0)},[O,K]=(0,be.useState)(!1),H=N==="NonFungibleDCDT",G=jc({providerType:e,hasGuardianScreen:B}),q=_e=>{_e.preventDefault(),I?V():U()},R=()=>{if(_&&B)return P();K(!0),W()},ie=!["REWA","DCDT","MetaDCDT"].includes(N),xe=Jc({knownAddresses:s,receiverAddress:p,existingReceiverUsername:r});return be.default.createElement("div",{className:_o.summary},be.default.createElement("div",{className:_o.fields},ie&&k&&be.default.createElement(jr,x({onClick:M,txType:N},k)),be.default.createElement(Yc.ConfirmReceiver,{amount:y.amount,scamReport:a!=null?a:null,receiver:p,receiverUsername:xe}),be.default.createElement("div",{className:_o.columns},!H&&be.default.createElement("div",{className:_o.column},be.default.createElement(Xr.Amount,{txType:N,tokenId:v,tokenDecimals:T.decimals,amount:String(y.amount),nft:k,rewaPriceInUsd:C,rewaLabel:A,tokenLabel:T.name,tokenAvatar:((ue=T.assets)==null?void 0:ue.svgUrl)||""})),be.default.createElement("div",{className:_o.column},be.default.createElement(Xr.Fee,{rewaLabel:A,rewaPriceInUsd:C,feeLimit:u}))),be.default.createElement(Xr.Data,{data:f}),d&&be.default.createElement("p",{className:E.error},d)),be.default.createElement("div",{className:_o.buttons},be.default.createElement("button",{className:E.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:O,onClick:R},G),o&&be.default.createElement("button",{className:E.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:q},I?"Close":"Back")))};var ol=o=>{let{formInfo:{setHasGuardianScreen:e}}=$();return(0,Kt.useEffect)(()=>{o.hasGuardianScreen&&e(!0)},[]),Kt.default.createElement("div",{className:(0,el.default)(_o.confirm,o.className),"data-testid":"confirmScreen"},Kt.default.createElement(Qc,x({},o)))};n();n();n();var X=g(require("react")),tn=require("@fortawesome/free-solid-svg-icons"),ha=require("@fortawesome/react-fontawesome"),on=g(require("classnames")),$l=require("formik"),zl=g(require("react-select"));n();n();var tl=g(require("react")),rl=require("react-select");n();var U_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(U_));var F={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};var nl=o=>tl.default.createElement(rl.components.Control,w(x({},o),{className:F.receiverSelectControl}));n();n();var Xt=g(require("react")),ll=require("@fortawesome/free-solid-svg-icons"),ml=require("@fortawesome/react-fontawesome"),dl=g(require("classnames")),ul=require("react-select");n();n();var xt=(o,e)=>{let t=e.toLowerCase(),r=o.label.toLowerCase(),a=o.value.toLowerCase();return e?r.includes(t)||a.includes(t):!0};n();var al=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),pl=require("@terradharitri/sdk-dapp/utils"),ya=o=>o?o.filter(r=>(0,pl.addressIsValid)(r.address)).map(r=>{let a=r.username?String((0,al.trimUsernameDomain)(r.username)):r.address;return{value:r.address,label:a}}):[];n();var sl=({setOption:o,setAllValues:e})=>(r,a)=>{["input-blur","menu-close"].includes(a.action)||(e(r),r||o(null))};n();var il=({setInputValue:o,setOption:e,changeAndBlurInput:t})=>a=>{!a||(e(a),t(a.value),a.value!==a.label?o(a.label):o(a.value))};n();var cl=({options:o,usernameAccounts:e,knownAddresses:t,setFieldValue:r,setInputValue:a,setOption:p})=>i=>{var T,k,C,A;let d=o.find(I=>I.value===i&&I.value!==I.label),u=d==null?void 0:d.label,_,f,y=(T=e[i])==null?void 0:T.username;y&&(u=y,_=y,f=(k=e[i])==null?void 0:k.rawUsername);let b=t.find(I=>I.address===i);b!=null&&b.username&&(u=b==null?void 0:b.username,_=b==null?void 0:b.username,f=b==null?void 0:b.rawUsername);let v=u!=null?u:i;a(v),p({value:i,label:v}),r("receiver",(A=(C=e[i])==null?void 0:C.address)!=null?A:i),r("receiverUsername",_),r("rawReceiverUsername",f)};var _l=o=>{let{selectProps:e,isDisabled:t,options:r}=o,{menuIsOpen:a,value:p,isLoading:s}=e,i=(0,Xt.useMemo)(()=>r.find(f=>{let y=f,b=p;return b?xt(y,b.label):null}),[p,r]),d=r.length===0&&!s,u=Boolean(p)&&!i,_=t||d||u;return s?Xt.default.createElement(ml.FontAwesomeIcon,{icon:ll.faSpinner,spin:!0,className:F.receiverSelectSpinner}):Xt.default.createElement(ul.components.DropdownIndicator,w(x({},o),{className:(0,dl.default)(F.receiverSelectIndicator,{[F.expanded]:a,[F.hidden]:_})}))};n();n();var gl=g(require("react")),yl=require("@terradharitri/sdk-dapp/utils"),bl=g(require("classnames")),vl=require("react-select");n();n();var fl=(o,e)=>{let t=o.current;if(!t||!t.state.focusedOption)return!1;let r=t.state.focusedOption,a=r.label.toLowerCase(),p=r.value.toLowerCase(),s=a!==p,i=s&&a.startsWith(e.toLowerCase());return s&&!e?!0:i};var hl=o=>e=>{let{selectProps:t,value:r}=e,{inputValue:a,menuIsOpen:p}=t,{receiverUsernameInfo:{receiverUsername:s}}=$(),i=fl(o,a),d=(0,yl.addressIsValid)(String(r)),u=Boolean(s)||i,_=d&&p||!d&&a;return gl.default.createElement(vl.components.Input,w(x({},e),{"data-testid":"receiver",className:(0,bl.default)(F.receiverSelectInput,{[F.visible]:_,[F.spaced]:u})}))};n();n();var xl=g(require("react")),Tl=require("react-select");var kl=o=>xl.default.createElement(Tl.components.Menu,w(x({},o),{className:F.receiverSelectMenu}));n();n();var ve=g(require("react")),Yr=require("@terradharitri/sdk-dapp/UI/Trim"),jt=g(require("classnames")),Sl=require("react-select");var wl=o=>{let{selectProps:e,focusedOption:t}=o,{value:r,inputValue:a}=e,p=t,s=p?p.label.toLowerCase():null,i=p&&p.label!==p.value,_=(s&&(!r||r&&a)?s.startsWith(a.toLowerCase()):!1)&&p?p.label.replace(p.label.substring(0,a.length),a):null,f=_&&!a,y=_&&a.length<_.length/2,b=_&&Boolean(a)&&y,v=_&&Boolean(a);return ve.default.createElement(ve.default.Fragment,null,b&&!i&&ve.default.createElement("div",{className:(0,jt.default)(F.receiverSelectAutocomplete,F.receiverSelectAutocompleteUntrimmed)},_),v&&i&&ve.default.createElement("div",{className:(0,jt.default)(F.receiverSelectAutocomplete,F.receiverSelectAutocompleteUsername)},ve.default.createElement(mo,{className:F.receiverSelectAutocompleteIcon}),_,ve.default.createElement("span",{className:F.receiverSelectAutocompleteWrapper},"(",ve.default.createElement(Yr.Trim,{text:p.value}),")")),f&&ve.default.createElement("span",{className:(0,jt.default)(F.receiverSelectAutocomplete,{[F.receiverSelectAutocompleteUsername]:i})},i?ve.default.createElement(ve.default.Fragment,null,ve.default.createElement("span",null,ve.default.createElement(mo,{className:(0,jt.default)(F.receiverSelectAutocompleteIcon,F.receiverSelectAutocompleteIconMuted)}),p.label),ve.default.createElement("span",{className:F.receiverSelectAutocompleteWrapper},"(",ve.default.createElement(Yr.Trim,{text:p.value}),")")):ve.default.createElement(Yr.Trim,{text:_})),ve.default.createElement(Sl.components.MenuList,w(x({},o),{className:F.receiverSelectList})))};n();n();var oo=g(require("react")),ba=require("@terradharitri/sdk-dapp/UI/Trim"),El=g(require("classnames")),Il=require("react-select");n();n();var Jt=g(require("react"));n();var M_=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(M_));var Cl={highlight:"dapp-core-component__styles-modules__highlight"};var Qr=({highlight:o,text:e=""})=>{let t=e.split(" "),r=o.toLowerCase(),a=new RegExp(`(${r})`,"gi"),p=t.map(s=>s.split(a).filter(i=>i));return Jt.default.createElement("span",{className:Cl.highlight},p.map((s,i)=>{let d=`${s}-${i}`;return Jt.default.createElement("span",{key:d},s.map((u,_)=>{let f=u.toLowerCase()===r,y=r&&f,b=`${u}-${_}`;return y?Jt.default.createElement("strong",{key:b},u):Jt.default.createElement("span",{key:b},u)}))}))};var Al=o=>{let{isFocused:e,data:t,selectProps:r}=o,{inputValue:a}=r,p=t,s=p.value!==p.label;return oo.default.createElement(Il.components.Option,w(x({},o),{className:(0,El.default)(F.receiverSelectOption,{[F.focused]:e})}),s?oo.default.createElement(oo.default.Fragment,null,oo.default.createElement("span",{className:F.receiverSelectOptionUsername},oo.default.createElement(mo,{className:F.receiverSelectOptionUsernameIcon}),oo.default.createElement(Qr,{text:p.label,highlight:a})),oo.default.createElement("span",{className:F.receiverSelectOptionNameWrapper},"(",oo.default.createElement(ba.Trim,{text:p.value,className:F.receiverSelectOptionName}),")")):oo.default.createElement(ba.Trim,{text:p.value,className:F.receiverSelectOptionName}))};n();n();var Nl=g(require("react")),Fl=g(require("classnames")),Pl=require("react-select");var Ll=o=>{let{selectProps:e,isFocused:t,className:r}=o,{menuIsOpen:a}=e;return Nl.default.createElement(Pl.components.SelectContainer,w(x({},o),{className:(0,Fl.default)(r,{[F.expanded]:a,[F.focused]:t&&a})}))};n();n();var to=g(require("react")),va=require("@terradharitri/sdk-dapp/UI/Trim"),Dl=require("@terradharitri/sdk-dapp/utils"),Gl=g(require("classnames")),Bl=require("react-select");var Vl=o=>{let{selectProps:e,isDisabled:t}=o,{value:r,menuIsOpen:a}=e,p=r,{receiverInfo:{receiver:s},receiverUsernameInfo:{receiverUsername:i}}=$(),d=i!=null?i:p&&p.value!==p.label,u=p?{value:s!=null?s:p.value,label:p.label}:null,_=u&&(d||!d&&!a)&&(0,Dl.addressIsValid)(u.value);return to.default.createElement(Bl.components.ValueContainer,w(x({},o),{className:F.receiverSelectValue}),_&&to.default.createElement("span",{className:(0,Gl.default)(F.receiverSelectSingle,{[F.disabled]:t})},d?to.default.createElement(to.default.Fragment,null,to.default.createElement("span",{className:F.receiverSelectSingleUsername},to.default.createElement(mo,{className:F.receiverSelectSingleUsernameIcon}),u.label),to.default.createElement("span",{className:F.receiverSelectSingleTrimWrapper},"(",to.default.createElement(va.Trim,{text:u.value,className:F.receiverSelectSingleTrim}),")")):to.default.createElement(va.Trim,{text:u.value,className:F.receiverSelectSingleTrim})),o.children)};n();n();var Ul=require("formik");var en=()=>{let{receiverInfo:{receiverError:o,isReceiverInvalid:e},receiverUsernameInfo:{receiverUsernameError:t,isReceiverUsernameInvalid:r,receiverUsername:a}}=$(),{touched:{receiver:p}}=(0,Ul.useFormikContext)(),s=e&&p||r;return a!=null&&a.startsWith("drt1")?{isInvalid:e,receiverErrorDataTestId:"receiverError",error:o}:{isInvalid:s,receiverErrorDataTestId:r?"receiverUsernameError":"receiverError",error:r?t:o}};n();n();var Ol=require("@terradharitri/sdk-dapp/utils"),ql=require("formik");n();n();var Ml=({knownAddresses:o,inputValue:e})=>!o||!e?!1:o.filter(r=>{var i;let a=(i=r.username)!=null?i:r.address,p=r.address;return xt({label:a,value:p,data:{label:a,value:p}},e)}).length>0;var Wl=({menuIsOpen:o})=>{let{isInvalid:e}=en(),{values:{nft:t}}=(0,ql.useFormikContext)(),{showUsernameError:r,isUsernameLoading:a,isUsernameDebouncing:p,usernameIsAmongKnown:s,searchQueryIsAddress:i}=bt(),{receiverInputValue:d,knownAddresses:u}=gt(),_=qr({key:"address",knownAddresses:u,inputValue:d}),f=Ml({inputValue:d,knownAddresses:u}),y=i&&(!_||!o)&&!(0,Ol.addressIsValid)(d),b=Boolean(r&&!(o&&_)&&!(o&&s));return{isAddressError:y||(t?e:!1),isUsernameError:b,isRequiredError:e&&!b&&!a&&!p&&!y&&!f&&!d,isReceiverDropdownOpened:d&&f&&o}};var Rl=o=>{let e=(0,X.useRef)(null),{className:t}=o,{setFieldValue:r}=(0,$l.useFormikContext)(),{receiverInfo:{scamError:a,fetchingScamAddress:p,receiverInputValue:s,setReceiverInputValue:i,knownAddresses:d,receiver:u,onBlurReceiver:_,onChangeReceiver:f},receiverUsernameInfo:{receiverUsername:y},formInfo:{readonly:b}}=$(),[v,T]=(0,X.useState)(!1),[k,C]=(0,X.useState)(u?{label:u,value:u}:null),{receiverErrorDataTestId:A,error:I}=en(),{isAddressError:V,isUsernameError:U,isRequiredError:M,isReceiverDropdownOpened:W}=Wl({menuIsOpen:v}),{usernameAccounts:N,isUsernameLoading:B}=bt(),P=()=>{_(new Event("blur"));let z=d==null?void 0:d.find(Pe=>Pe.username===s&&Pe.address===u);z&&(r("receiver",z.address),r("receiverUsername",z.username),r("rawReceiverUsername",z.rawUsername))},O=d==null?void 0:d.find(z=>z.username===s&&z.address===u),K=(0,X.useMemo)(()=>ya(d),[d]),H=O?ya([O]):K,G=cl({setFieldValue:r,setInputValue:i,setOption:C,options:H,knownAddresses:d!=null?d:[],usernameAccounts:N}),q=(0,X.useCallback)(sl({setAllValues:G,setOption:C}),[]),R=(0,X.useCallback)(z=>{f(z?z.trim():""),setTimeout(P)},[]),ie=il({changeAndBlurInput:R,setOption:C,setInputValue:i}),xe=(0,X.useMemo)(()=>hl(e),[e]);(0,X.useEffect)(()=>{if(!u)return;let z=Object.keys(N).find(Pe=>{var ao;return((ao=N[Pe])==null?void 0:ao.address)===u});G(z!=null?z:u),z&&i(z)},[N,u]);let ue=V||U||M,_e=ue&&!v;return X.default.createElement("div",{className:(0,on.default)(F.receiver,t)},X.default.createElement("div",{className:E.label,"data-testid":"receiverLabel","data-loading":p},"Receiver"),X.default.createElement(zl.default,{value:k,onInputChange:q,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:Te("receiver",b),options:H,filterOption:xt,noOptionsMessage:()=>null,onChange:ie,onBlur:P,isMulti:!1,ref:e,inputValue:s,onMenuClose:()=>T(!1),onMenuOpen:()=>T(!0),components:{Menu:kl,Input:xe,Control:nl,ValueContainer:Vl,DropdownIndicator:_l,SelectContainer:Ll,MenuList:wl,Option:Al,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,on.default)(F.receiverSelectContainer,{[F.opened]:W,[F.invalid]:ue||a})}),_e&&X.default.createElement("div",{"data-testid":A,className:E.error},I),B&&X.default.createElement("div",{className:F.loading},"Loading..."),y&&X.default.createElement("span",{className:F.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",X.default.createElement(ha.FontAwesomeIcon,{icon:tn.faCheck,className:F.foundIcon})),a&&X.default.createElement("div",{"data-testid":"receiverScam",className:(0,on.default)(E.error,E.scam)},X.default.createElement("span",null,X.default.createElement(ha.FontAwesomeIcon,{icon:tn.faExclamationTriangle}),X.default.createElement("small",null,a))))};n();n();var Ue=g(require("react")),Hl=g(require("bignumber.js")),rn=g(require("classnames"));n();var O_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(O_));var Ao={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"};var Zl=o=>{let{className:e}=o,{formInfo:{readonly:t},amountInfo:r,tokensInfo:a}=$(),{amount:p,error:s,onFocus:i,onBlur:d,onChange:u,isInvalid:_,onMaxClicked:f,maxAmountAvailable:y,isMaxButtonVisible:b}=r,{nft:v}=a,T=v!=null&&v.balance?new Hl.default(v.balance).isGreaterThan(0):!1,k=C=>{C.preventDefault(),f()};return Ue.default.createElement("div",{className:(0,rn.default)(Ao.amount,e)},Ue.default.createElement("div",{className:Ao.label},Ue.default.createElement("label",{htmlFor:"amount",className:E.label},"Amount"),T&&v&&Ue.default.createElement("div",{"data-value":`${y} ${v.identifier}`,className:(0,rn.default)(Ao.balance,e)},Ue.default.createElement("span",null,"Available:")," ",Ue.default.createElement("span",{"data-testid":`available-${v.identifier}`,className:Ao.available},Ue.default.createElement("span",{className:Ao.amount},y)," ",v.ticker))),Ue.default.createElement("div",{className:Ao.wrapper},Ue.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:p,disabled:Te("amount",t),onFocus:i,onBlur:d,onChange:u,autoComplete:"off",className:(0,rn.default)(E.input,{[E.invalid]:_,[E.disabled]:Te("amount",t)})}),b&&Ue.default.createElement("a",{href:"/","data-testid":"maxBtn",className:Ao.max,onClick:k,onMouseDown:C=>{C.preventDefault()}},"Max")),_&&Ue.default.createElement("div",{className:E.error,"data-testid":"amountError"},s))};n();n();var Ee=g(require("react")),an=require("@fortawesome/free-solid-svg-icons"),Sa=require("@fortawesome/react-fontawesome"),lm=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),wa=g(require("classnames")),mm=g(require("react-collapsed"));n();var go=g(require("react")),Yl=require("@fortawesome/free-solid-svg-icons"),Ql=require("@fortawesome/react-fontawesome"),em=g(require("bignumber.js")),Ta=g(require("classnames")),om=require("react-number-format");n();n();var No=require("@terradharitri/sdk-dapp/constants/index"),Kl=require("@terradharitri/sdk-dapp/utils/validation"),fo=g(require("bignumber.js")),Xl=(o,e)=>{let t=e!=null?e:No.DIGITS;if((0,Kl.stringIsFloat)(o)){if(new fo.default(o).isZero())return"0";let a=new fo.default(o).toFormat(t);return a=parseFloat(a)>0?a:new fo.default(o).toFormat(No.DIGITS),a=parseFloat(a)>0?a:new fo.default(o).toFormat(No.DIGITS+2),a=parseFloat(a)>0?a:new fo.default(o).toFormat(No.DIGITS+4),a=parseFloat(a)>0?a:new fo.default(o).toFormat(No.DIGITS+6),a=parseFloat(a)>0?a:new fo.default(o).toFormat(No.DIGITS+10),parseFloat(a)>0?a:new fo.default(o).toFormat(No.DIGITS+14)}return"0"};n();var xa=o=>o.replace(/,/g,"");n();var nn=require("react"),q_={value:"",count:0},jl=(o,e)=>{let[t,r]=(0,nn.useState)(q_);return(0,nn.useEffect)(()=>{let p=setTimeout(()=>{r(o)},e);return()=>clearTimeout(p)},[o.count]),t};n();var Jl=g(require("bignumber.js")),Tt=o=>{let[e,t]=o.split(""),r=new Jl.default(e).isZero();return Boolean(r&&t&&!(t==="."))};n();var W_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(W_));var de={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"};var tm=()=>{let{formInfo:o,gasInfo:e}=$(),{readonly:t}=o,{defaultGasLimit:r,onResetGasLimit:a,onChangeGasLimit:p,onBlurGasLimit:s,gasLimit:i,gasLimitError:d,isGasLimitInvalid:u}=e,_=T=>{T.preventDefault(),a()},f=({value:T,floatValue:k})=>(!k||!(0,em.default)(k).isNaN())&&!Tt(T),y=T=>{p(T.value,!0)},b=i!==r&&!t,v=Te("gasLimit",t);return go.default.createElement("div",{className:de.gas},go.default.createElement("label",{className:E.label,htmlFor:"gasLimit"},"Gas Limit"),go.default.createElement("div",{className:de.wrapper},go.default.createElement(om.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:v,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:s,onValueChange:y,required:!0,isAllowed:f,thousandSeparator:",",thousandsGroupStyle:"thousand",value:i,valueIsNumericString:!0,allowNegative:!1,className:(0,Ta.default)(E.input,de.input,{[E.disabled]:v,[E.invalid]:u,[de.spaced]:b})}),b&&go.default.createElement("div",{className:de.actions},go.default.createElement("div",{onClick:_,"data-testid":"gasLimitResetBtn",className:(0,Ta.default)(de.action,{[de.disabled]:v})},go.default.createElement(Ql.FontAwesomeIcon,{icon:Yl.faUndo,className:de.icon}))),u&&go.default.createElement("div",{className:E.error,"data-testid":`${"gasLimit"}Error`},d)))};n();n();var yo=g(require("react")),rm=require("@fortawesome/free-solid-svg-icons"),nm=require("@fortawesome/react-fontawesome"),am=g(require("bignumber.js")),ka=g(require("classnames")),pm=require("react-number-format");var sm=()=>{let{networkConfig:o}=ke(),{gasInfo:e,formInfo:t}=$(),{readonly:r}=t,{rewaLabel:a}=o,{gasPrice:p,gasPriceError:s,isGasPriceInvalid:i,onChangeGasPrice:d,onBlurGasPrice:u,onResetGasPrice:_}=e,f=p!==Ge&&!r,y=Te("gasPrice",r),b=({value:k,floatValue:C})=>(!C||!(0,am.default)(C).isNaN())&&!Tt(k),v=k=>{k.preventDefault(),_()},T=k=>{d(k.value,!0)};return yo.default.createElement("div",{className:de.gas},yo.default.createElement("label",{className:E.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),yo.default.createElement("div",{className:de.wrapper},yo.default.createElement(pm.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:y,id:"gasPrice",inputMode:"decimal",isAllowed:b,name:"gasPrice",onBlur:u,onValueChange:T,required:!0,suffix:` ${a}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:p,valueIsNumericString:!0,allowNegative:!1,className:(0,ka.default)(E.input,de.input,{[E.disabled]:y,[E.invalid]:i,[de.spaced]:f})}),f&&yo.default.createElement("div",{className:de.actions},yo.default.createElement("div",{onClick:v,className:(0,ka.default)(de.action,{[de.disabled]:y})},yo.default.createElement(nm.FontAwesomeIcon,{icon:rm.faUndo,className:de.icon})))),i&&yo.default.createElement("div",{className:E.error,"data-testid":`${"gasPrice"}Error`},s))};n();var im=g(require("react"));n();var $_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($_));var ro={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"};var cm=({feeLimit:o,rewaPriceInUsd:e})=>o===L?null:im.default.createElement("span",{className:ro.fiat,"data-testid":"feeInFiat"},"(",yr({feeLimit:o,rewaPriceInUsd:e}),")");var dm=({className:o})=>{let{gasInfo:e,tokensInfo:t}=$(),{feeLimit:r,gasCostLoading:a,gasPriceError:p,gasLimitError:s}=e,{rewaPriceInUsd:i,rewaLabel:d}=t,[u,_]=(0,Ee.useState)(Boolean(p||s)),{getCollapseProps:f,getToggleProps:y}=(0,mm.default)({isExpanded:u}),b=()=>{_(v=>!v)};return Ee.default.createElement("div",{className:(0,wa.default)(ro.fee,o)},Ee.default.createElement("label",{className:E.label},"Fee"),Ee.default.createElement("div",x({className:ro.trigger},y({onClick:b})),Ee.default.createElement("span",{className:ro.limit,"data-testid":"feeLimit"},Ee.default.createElement(lm.FormatAmount,{value:r,showLastNonZeroDecimal:!0,rewaLabel:d})),a&&Ee.default.createElement(Sa.FontAwesomeIcon,{icon:an.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),Ee.default.createElement(cm,{rewaPriceInUsd:i,feeLimit:r}),Ee.default.createElement(Sa.FontAwesomeIcon,{icon:an.faChevronRight,className:(0,wa.default)(ro.arrow,{[ro.active]:u})})),Ee.default.createElement("div",x({className:ro.expandable},f()),Ee.default.createElement("div",{className:ro.content},Ee.default.createElement(sm,null),Ee.default.createElement(tm,null))))};n();n();var R_=g(require("react")),H_=g(require("@terradharitri/sdk-dapp/constants/index")),Z_=g(require("classnames")),um=g(require("react-select"));n();var z_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(z_));n();n();var Oe=g(require("react")),un=g(require("classnames"));n();var K_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(K_));var no={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};n();n();n();var Q=g(require("react")),fm=require("@terradharitri/sdk-dapp/utils/validation"),pn=g(require("bignumber.js")),Ca=g(require("classnames")),gm=require("react-number-format");n();var X_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(X_));var Yt={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};var j_=500,_m=1e13,J_=({"data-testid":o,InfoDustComponent:e,disabled:t,handleBlur:r,handleChange:a,name:p,onDebounceChange:s,onFocus:i,onKeyDown:d,placeholder:u,required:_,usdPrice:f,value:y,usdValue:b,className:v,autoFocus:T,suffix:k})=>{let C=(0,Q.useRef)(null),[A,I]=(0,Q.useState)(),[V,U]=(0,Q.useState)(!1),[M,W]=(0,Q.useState)({value:y,count:0}),[N,B]=(0,Q.useState)(),P=jl(M,j_),O=G=>{G.stopPropagation(),U(!0);let q=xa(G.target.value),R=(0,pn.default)(q).isLessThanOrEqualTo(_m);if((q===""||R)&&(I(q),G.target.value=q,a(G),s)){let ie={value:q,count:M.count+1};W(ie)}},K=()=>{if(b)return B(`$${b}`);if(!f||!y)return B(void 0);let G=xa(y);if(!(y!==""&&(0,fm.stringIsFloat)(G))||G==="")return B(void 0);let R=Xl(new pn.default(G).times(f!=null?f:0).toString(10),2);B(`$${R}`)},H=({value:G,floatValue:q})=>(!q||(0,pn.default)(q).isLessThanOrEqualTo(_m))&&!Tt(G);return(0,Q.useEffect)(()=>{s&&V&&(U(!1),s(P.value))},[P]),(0,Q.useEffect)(K,[y,b,f]),(0,Q.useEffect)(()=>{y!==A&&I(y)},[y]),Q.default.createElement("div",{ref:C,className:(0,Ca.default)(Yt.amountHolder,{[Yt.showUsdValue]:Boolean(N)},v)},Q.default.createElement(gm.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":o||p,decimalSeparator:".",disabled:Boolean(t),id:p,inputMode:"decimal",isAllowed:H,name:p,onBlur:r,onChange:O,onFocus:i,onKeyDown:d,placeholder:u,required:_,thousandSeparator:",",thousandsGroupStyle:"thousand",value:A,suffix:k,valueIsNumericString:!0,allowNegative:!1,autoFocus:T,className:(0,Ca.default)(E.input,Yt.amountInput,{[E.disabled]:Boolean(t)})}),N&&Q.default.createElement("span",{className:Yt.amountHolderUsd},Q.default.createElement("small",{"data-testid":`tokenPrice_${f}`},N!=="$0"?Q.default.createElement(Q.default.Fragment,null,"\u2248 "):Q.default.createElement(Q.default.Fragment,null),N),e))},ym=(0,Q.memo)(J_,(o,e)=>o.value===e.value&&o.usdPrice===e.usdPrice&&o.className===e.className&&o.disabled===e.disabled&&o.usdValue===e.usdValue);n();n();var Ea=g(require("react"));n();n();var kt=g(require("react")),bm=require("@fortawesome/free-solid-svg-icons"),vm=require("@fortawesome/react-fontawesome"),hm=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),xm=require("react-tooltip"),J2=require("react-tooltip/dist/react-tooltip.css");n();var Y_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Y_));var sn={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"};var Tm=({rewaLabel:o})=>kt.default.createElement("div",{className:sn.infoDust},kt.default.createElement(xm.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:sn.infoDustTooltip},"A minimal amount of"," ",kt.default.createElement(hm.FormatAmount,{rewaLabel:o,value:ot,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),kt.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:sn.infoDustTrigger},kt.default.createElement(vm.FontAwesomeIcon,{icon:bm.faInfoCircle,className:"i-icon"})));var km=({rewaLabel:o,amount:e,maxAmountMinusDust:t,isMaxClicked:r,tokenId:a})=>e===t&&r&&a===o?Ea.default.createElement("span",{style:{marginLeft:"0.2rem"}},Ea.default.createElement(Tm,{rewaLabel:o})):null;n();n();var Im=g(require("react")),Am=require("@terradharitri/sdk-dapp/constants"),Aa=g(require("bignumber.js")),Nm=g(require("classnames"));n();var Ia=g(require("bignumber.js"));var Sm=o=>{let e=new Ia.default(o!=null?o:"0"),t=new Ia.default(ot),r=e.minus(t);return r.isGreaterThan(0)?r.toString(10):"0"};n();var Q_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Q_));var wm={max:"dapp-core-component__maxButton-module__max"};n();var Fo=require("@terradharitri/sdk-dapp/constants"),Cm=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Em=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),St=({amount:o="0",decimals:e=0,digits:t=Fo.DIGITS,addCommas:r=!1,showLastNonZeroDecimal:a=!1})=>{if(o==null||!(0,Em.stringIsInteger)(o))return"0";let p=i=>(0,Cm.formatAmount)({input:o,digits:i,decimals:e,addCommas:r,showLastNonZeroDecimal:a}),s=p(t);return s=parseFloat(s)>0?s:p(Fo.DIGITS),s=parseFloat(s)>0?s:p(Fo.DIGITS+2),s=parseFloat(s)>0?s:p(Fo.DIGITS+4),s=parseFloat(s)>0?s:p(Fo.DIGITS+6),s=parseFloat(s)>0?s:p(Fo.DIGITS+10),parseFloat(s)>0?s:p(Fo.DIGITS+14)};var Fm=({token:o,rewaLabel:e,inputAmount:t,className:r,onMaxClick:a})=>{var _;let p=(o==null?void 0:o.identifier)===e,s=(_=o==null?void 0:o.balance)!=null?_:"0";if(s==="0")return null;let i=St({amount:p?Sm(s):s,decimals:(o==null?void 0:o.decimals)||Am.DECIMALS}),d=new Aa.default(t).isEqualTo(new Aa.default(i)),u=f=>{f.preventDefault(),a==null||a(i)};return d?null:Im.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,Nm.default)(wm.max,r),onClick:u,onMouseDown:f=>{f.preventDefault()}},"Max")};n();n();var Me=g(require("react")),md=g(require("classnames")),dd=g(require("react-select"));var Da={};nr(Da,{Control:()=>af,IndicatorsContainer:()=>sf,Input:()=>tf,Menu:()=>nf,MenuList:()=>rf,DharitrIIcon:()=>id,Placeholder:()=>pf,SmallLoader:()=>ef,ValueComponent:()=>ed,getOption:()=>Pa,getSingleValue:()=>La,getValueContainer:()=>Fa});n();n();var Na=g(require("react")),Pm=require("@fortawesome/free-solid-svg-icons"),Lm=require("@fortawesome/react-fontawesome"),ef=({show:o,color:e})=>o?Na.default.createElement("div",{className:"d-flex"},Na.default.createElement(Lm.FontAwesomeIcon,{icon:Pm.faSpinner,className:`fa-spin fast-spin ${e||"text-primary"}`})):null;n();n();var Dm=g(require("react")),Gm=require("react-select");n();var of=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(of));var D={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var tf=o=>Dm.default.createElement(Gm.components.Input,w(x({},o),{className:D.dropdown,"data-testid":"tokenSelectInput"}));n();var Bm=g(require("react")),Vm=require("react-select");var rf=o=>{let r=o,{rx:e}=r,t=jo(r,["rx"]);return Bm.default.createElement(Vm.components.MenuList,w(x({},t),{className:D.list}))};n();var cn=g(require("react")),Um=require("@fortawesome/free-solid-svg-icons"),Mm=require("@fortawesome/react-fontawesome"),Om=require("react-select");var nf=o=>cn.default.createElement(Om.components.Menu,w(x({},o),{className:D.menu}),o.selectProps.isLoading?cn.default.createElement("div",{className:D.loading},cn.default.createElement(Mm.FontAwesomeIcon,{icon:Um.faCircleNotch,className:"fa-spin",size:"lg"})):o.children);n();var qm=g(require("react")),Wm=require("react-select");var af=o=>qm.default.createElement(Wm.components.Control,w(x({},o),{className:D.control}));n();var $m=g(require("react")),zm=g(require("classnames")),Rm=require("react-select");var pf=o=>$m.default.createElement(Rm.components.Placeholder,w(x({},o),{className:(0,zm.default)(D.placeholder,{[D.focused]:o.isFocused})}));n();var Hm=g(require("react")),Zm=g(require("classnames")),Km=require("react-select");var sf=o=>Hm.default.createElement(Km.components.IndicatorsContainer,w(x({},o),{className:(0,Zm.default)(D.indicator,{[D.expanded]:o.selectProps.menuIsOpen})}));n();var Ie=g(require("react")),Xm=require("@fortawesome/free-solid-svg-icons"),jm=require("@fortawesome/react-fontawesome"),Jm=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ym=g(require("classnames")),Qm=require("react-select");var cf=(zt(),Jo($t)).default,ed=({RewaIcon:o,tokenId:e,icon:t})=>{let{isRewa:r}=(0,Jm.getIdentifierType)(e);return r?Ie.default.createElement("span",{className:D.asset},o?Ie.default.createElement(o,{className:D.diamond}):Ie.default.createElement(cf,{className:D.diamond})):t?Ie.default.createElement("img",{src:t,className:D.asset}):Ie.default.createElement(jm.FontAwesomeIcon,{icon:Xm.faDiamond,className:D.asset})},lf=({children:o})=>Ie.default.createElement("div",{className:D.wrapper},o),Fa=(o,e,t)=>r=>{var _,f;let{selectProps:a,isDisabled:p,children:s}=r,i=a.value,d=(f=(_=i==null?void 0:i.assets)==null?void 0:_.svgUrl)!=null?f:null,u=(0,Ie.useMemo)(()=>{let y=String(i==null?void 0:i.token.usdPrice);return y!=null&&y.includes("$")?i==null?void 0:i.token.usdPrice:`$${i==null?void 0:i.token.usdPrice}`},[i==null?void 0:i.token.usdPrice]);return Ie.default.createElement(Qm.components.ValueContainer,w(x({},r),{className:D.container}),Ie.default.createElement("div",{className:(0,Ym.default)(D.icon,e)},Ie.default.createElement(ed,{RewaIcon:t,rewaLabel:o,icon:d,isDisabled:p,tokenId:i==null?void 0:i.value})),Ie.default.createElement("div",{className:D.payload},Ie.default.createElement(lf,null,s,(i==null?void 0:i.token.usdPrice)&&Ie.default.createElement("small",{className:D.price},u))))};n();var re=g(require("react")),od=require("@fortawesome/free-solid-svg-icons"),td=require("@fortawesome/react-fontawesome"),rd=require("@terradharitri/sdk-dapp/constants"),nd=require("@terradharitri/sdk-dapp/UI/UsdValue"),ad=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),pd=g(require("classnames")),sd=require("react-select");var{default:id}=(zt(),Jo($t)),Pa=({RewaIcon:o,TokenTickerIcon:e,showBalanceUsdValue:t,showTokenPrice:r})=>a=>{var k,C,A,I;let{data:p,isSelected:s,isFocused:i,isDisabled:d,selectProps:u}=a,_=p,{isRewa:f}=(0,ad.getIdentifierType)(_.value),y=_.token.assets?_.token.assets.svgUrl:null,b=St({amount:_.token.balance,decimals:_.token.decimals||rd.DECIMALS,addCommas:!0}),v=(C=(k=_.token)==null?void 0:k.usdPrice)==null?void 0:C.toString(),T=(I=(A=_.token)==null?void 0:A.valueUSD)==null?void 0:I.toString();return re.default.createElement("div",{"data-testid":`${a.value}-option`},re.default.createElement(sd.components.Option,w(x({},a),{className:(0,pd.default)(D.option,{[D.selected]:s||i,[D.disabled]:d})}),re.default.createElement("div",{className:D.image},f?re.default.createElement("span",{className:D.icon},o?re.default.createElement(o,null):re.default.createElement(id,null)):y?re.default.createElement("img",{src:y,className:D.icon}):re.default.createElement("span",{className:D.icon},re.default.createElement(td.FontAwesomeIcon,{icon:od.faDiamond,className:D.diamond}))),re.default.createElement("div",{className:D.info},re.default.createElement("div",{className:D.left},re.default.createElement("div",{className:D.ticker},re.default.createElement("span",{className:D.value},u.inputValue?re.default.createElement(Qr,{text:_.token.ticker,highlight:u.inputValue}):_.token.ticker),e&&re.default.createElement(e,{token:_.token})),r&&re.default.createElement("small",{className:D.price},v)),re.default.createElement("div",{className:D.right},re.default.createElement("span",{className:D.value},b),t&&T&&re.default.createElement(nd.UsdValue,{usd:1,decimals:4,amount:T,"data-testid":"token-price-usd-value",className:D.price,addEqualSign:!1}))),re.default.createElement("div",{className:D.children},a.children)))};n();var ln=g(require("react")),cd=g(require("classnames")),ld=require("react-select");var La=o=>e=>{let{selectProps:t,children:r}=e,a=t.value;return ln.default.createElement(ld.components.SingleValue,w(x({},e),{className:(0,cd.default)(D.single,{[D.focused]:e.selectProps.menuIsOpen})}),ln.default.createElement("div",{className:D.ticker},r,o&&ln.default.createElement(o,{token:a==null?void 0:a.token})))};var{Menu:mf,Control:df,Input:uf,MenuList:_f,IndicatorsContainer:ff,Placeholder:gf}=Da,ud=o=>{let{name:e,options:t,isLoading:r=!1,className:a="",noOptionsMessage:p="No Tokens",disabledOption:s,rewaLabel:i,RewaIcon:d,disabled:u,value:_,onBlur:f,onFocus:y,onChange:b,onMenuOpen:v,chainId:T,wrapperClassName:k="",showTokenPrice:C=!1,showBalanceUsdValue:A=!1,selectedTokenIconClassName:I,TokenTickerIcon:V}=o,U=(0,Me.useRef)(null),M=[i,cr(T)],W=(0,Me.useMemo)(()=>Pa({rewaLabel:i,RewaIcon:d,showTokenPrice:C,showBalanceUsdValue:A,TokenTickerIcon:V}),[]),N=(0,Me.useMemo)(()=>Fa(i,I,d),[]),B=(0,Me.useMemo)(()=>La(V),[]);(0,Me.useEffect)(()=>{let G=t.find(R=>R.value===(_==null?void 0:_.value)),q=(G==null?void 0:G.token.balance)===(_==null?void 0:_.token.balance);!G||q||b(G)},[t]);let O=G=>M.includes(G),K=G=>{var ue;let q=G.value===(s==null?void 0:s.value),R=O(G.value),ie=O((ue=s==null?void 0:s.value)!=null?ue:"");return q||R&&ie},H=(G,q)=>{let R=G.data.token.ticker?G.data.token.ticker.toLowerCase().includes(q.toLowerCase()):!1,ie=G.data.token.name.toLowerCase().includes(q.toLowerCase());return Boolean(q)?R||ie:!0};return Me.default.createElement("div",{"data-testid":`${e}Select`,className:`${k} ${r?"select-holder-loading":""}`},Me.default.createElement("label",{htmlFor:e,"data-testid":"tokenIdLabel",className:D.label},"Token"),Me.default.createElement(dd.default,{ref:U,inputId:e,name:e,options:t,openMenuOnFocus:!0,isDisabled:u,isLoading:r,value:_,isOptionDisabled:K,onBlur:f,filterOption:H,onFocus:y,onChange:G=>{b(G),U&&U.current!==null&&U.current.blur()},isSearchable:o.isSearchable,maxMenuHeight:260,onMenuOpen:v,noOptionsMessage:()=>p,className:(0,md.default)(D.select,a,{[D.disabled]:o.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:mf,Control:df,Input:uf,MenuList:_f,IndicatorsContainer:ff,ValueContainer:N,Placeholder:gf,Option:W,SingleValue:B}}))};n();n();var _d=g(require("react")),fd=g(require("classnames"));var gd=({hasErrors:o,className:e,error:t,"data-testid":r})=>o?_d.default.createElement("div",{className:(0,fd.default)(E.error,e),"data-testid":r},t):null;n();n();var dn=g(require("react")),yd=g(require("classnames"));n();var yf=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(yf));var mn={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"};var bd=({label:o,value:e,className:t,token:r,"data-testid":a,"data-value":p})=>dn.default.createElement("div",{"data-testid":a,"data-value":p,className:(0,yd.default)(mn.balance,t)},dn.default.createElement("span",{className:mn.label},o,": "),dn.default.createElement("span",{className:mn.value},e)," ",r==null?void 0:r.ticker);var vd=({className:o,label:e,name:t,wrapperControlsClassName:r,tokenSelectProps:a,tokenBalanceProps:p,amountInputProps:s,amountErrorProps:i,maxButtonProps:d,readonly:u})=>Oe.default.createElement("div",{className:(0,un.default)(no.amount,o)},Oe.default.createElement("div",{className:no.label},e&&Oe.default.createElement("label",{htmlFor:t,className:E.label,"data-testid":"amountLabel"},e),Oe.default.createElement(bd,x({},p))),Oe.default.createElement("div",{className:(0,un.default)(no.wrapper,r,{[no.error]:s.isInvalid||a.isInvalid||i.hasErrors,[no.disabled]:u})},Oe.default.createElement(ym,x({},s)),Oe.default.createElement("div",{className:(0,un.default)(no.interaction,d.wrapperClassName)},d.isMaxButtonVisible&&Oe.default.createElement(Fm,x({},d)),Oe.default.createElement("div",{className:no.select},Oe.default.createElement(ud,x({},a))))),Oe.default.createElement(gd,x({},i)));n();var Qt=g(require("react")),hd=require("@terradharitri/sdk-dapp/constants"),xd=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");var Td=()=>{var ao,ee;let{checkInvalid:o}=pe(),{tokensInfo:e,amountInfo:t,formInfo:r}=$(),{readonly:a}=r,{networkConfig:{rewaLabel:p,chainId:s}}=ke(),{rewaPriceInUsd:i}=Lr(),{amount:d,onBlur:u,onChange:_,onMaxClicked:f,error:y,isInvalid:b,onFocus:v,maxAmountAvailable:T,isMaxClicked:k,isMaxButtonVisible:C,maxAmountMinusDust:A}=t,{allAvailableTokens:I,areTokensLoading:V,getTokens:U,isTokenIdInvalid:M,RewaIcon:W,nft:N,onChangeTokenId:B,tokenDetails:P,tokenId:O,tokenIdError:K}=e,H=I.map(fe=>({value:fe.identifier,label:String(fe.ticker),assets:fe.assets,token:fe})),{isRewa:G}=(0,xd.getIdentifierType)(O),q=H.find(({value:fe})=>fe===O),R={id:"tokenId",value:q,name:"tokenId",isLoading:V,options:H,isSearchable:!0,onChange:fe=>{fe&&(B(fe.value),_(""))},onMenuOpen:U,disabled:Te("tokenId",a),error:K,isInvalid:M,rewaLabel:p,chainId:s,RewaIcon:W},ie=(0,Qt.useMemo)(()=>Qt.default.createElement(km,{amount:d,rewaLabel:p,maxAmountMinusDust:A,tokenId:O,isMaxClicked:k}),[d,p,A,O,k]),xe={name:"amount",required:!0,value:d,placeholder:"Amount",handleBlur:u,"data-testid":"amount",handleChange:_,onFocus:v,usdPrice:G?i:void 0,error:y,isInvalid:b,InfoDustComponent:ie},ue={token:P,inputAmount:d,onMaxClick:f,isMaxClicked:k,isMaxButtonVisible:C},_e=o("amount")&&!xe.value,z={hasErrors:xe.isInvalid||R.isInvalid||_e,error:xe.error||R.error,className:E.error,"data-testid":xe.error?`${"amount"}Error`:`${"tokenId"}Error`},Pe={"data-testid":`available-${(ao=N==null?void 0:N.identifier)!=null?ao:O}`,"data-value":`${T} ${(ee=N==null?void 0:N.identifier)!=null?ee:O}`,label:"Available",token:q==null?void 0:q.token,value:St({amount:P.balance,decimals:P.decimals||hd.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(N==null?void 0:N.type)===Z.NftEnumType.NonFungibleDCDT?null:Qt.default.createElement(vd,{name:"tokenId",amountErrorProps:z,tokenSelectProps:R,amountInputProps:xe,tokenBalanceProps:Pe,maxButtonProps:ue,label:"Amount",readonly:a})};n();n();var Po=g(require("react")),Va=g(require("classnames"));n();n();n();var qe=g(require("react")),fn=require("@fortawesome/free-solid-svg-icons"),Ga=require("@fortawesome/react-fontawesome"),kd=require("formik");n();n();var _n=()=>{let{formInfo:{isRewaTransaction:o,readonly:e},dataFieldInfo:{isAdvancedModeEnabled:t}}=$();return t?!1:!o||Te("data",e)};n();var bf=`.dapp-core-component__styles-module__advanced {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bf));var er={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"};var Sd=()=>{let{formInfo:{readonly:o,isRewaTransaction:e}}=$(),{setFieldValue:t,values:r}=(0,kd.useFormikContext)(),[a,p]=(0,qe.useState)(!1),[s,i]=(0,qe.useState)(!1),d=_n(),u=!a&&!o&&d&&Boolean(r.data),_=()=>{p(!0),t("isAdvancedModeEnabled",!0)},f=()=>{i(!0),setTimeout(()=>{i(!1)},5e3)};return(0,qe.useEffect)(()=>{!e&&a&&p(!1)},[e,r.amount]),u?s?qe.default.createElement("div",{className:er.advanced,"data-testid":"confirmAdvancedMode",onClick:_},qe.default.createElement(Ga.FontAwesomeIcon,{icon:fn.faCheck,className:"i-icon"}),qe.default.createElement("span",{className:er.advancedText},"Confirm")):qe.default.createElement("div",{"data-testid":"enableAdvancedMode",className:er.advanced,onClick:f},qe.default.createElement(Ga.FontAwesomeIcon,{icon:fn.faScrewdriverWrench,className:"i-icon"}),qe.default.createElement("span",{className:er.advancedText},"Advanced")):null};n();var vf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vf));var Ba={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"};var wd=({className:o})=>{let{dataFieldInfo:{data:e,dataError:t,isDataInvalid:r,onChange:a,onBlur:p}}=$(),s=_n();return Po.default.createElement("div",{className:(0,Va.default)(Ba.data,o)},Po.default.createElement("div",{className:no.label},Po.default.createElement("label",{htmlFor:"data",className:E.label},"Data"),Po.default.createElement(Sd,null)),Po.default.createElement("div",{className:Ba.wrapper},Po.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:s,"data-testid":"data",value:e,onBlur:p,onChange:a,spellCheck:"false",placeholder:"Add transaction data",className:(0,Va.default)(E.textarea,{[E.invalid]:r,[E.disabled]:s})})),r&&Po.default.createElement("div",{className:E.error,"data-testid":"dataError"},t))};n();n();n();var bo=g(require("react")),Lo=g(require("classnames"));n();var hf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hf));var he={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"};var Cd=({disabled:o,percentageValue:e=0,onPercentageChange:t,className:r})=>{let a=[0,25,50,75,100],p="amountSlider";return bo.default.createElement("div",{className:(0,Lo.default)(he.amountSlider,r)},bo.default.createElement("div",{className:he.amountSliderRange},bo.default.createElement("input",{name:p,id:p,"data-testid":p,type:"range",disabled:o,min:0,max:100,value:String(e),className:(0,Lo.default)(he.amountSliderInput,{[he.disabled]:o}),onChange:s=>{t(Number(s.target.value))}}),bo.default.createElement("div",{style:{width:`${e}%`},className:(0,Lo.default)(he.amountSliderCompletion,{[he.disabled]:o})}),a.map(s=>bo.default.createElement("span",{onClick:()=>t(s),key:`breakpoint-${s}`,style:{left:`${s}%`},className:(0,Lo.default)(he.amountSliderBreakpoint,{[he.completed]:s<=e,[he.disabled]:o})})),a.map(s=>bo.default.createElement("span",{style:{left:`${s}%`},key:`breakpoint-${s}`,onClick:()=>t(s),className:(0,Lo.default)(he.amountSliderPercentage,{[he.exact]:s===e,[he.disabled]:o})},s,"%")),bo.default.createElement("span",{style:{left:`${e}%`},className:(0,Lo.default)(he.amountSliderThumb,{[he.disabled]:o})},bo.default.createElement("strong",{className:(0,Lo.default)(he.amountSliderThumbPercentage,{[he.hidden]:a.includes(e)})},Math.round(e),"%"))))};n();n();var $e=g(require("react")),Ed=require("@fortawesome/free-solid-svg-icons"),Id=require("@fortawesome/react-fontawesome"),Ad=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Nd=require("@terradharitri/sdk-dapp/UI/CopyButton"),Fd=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),Pd=require("@terradharitri/sdk-dapp/UI/Trim"),Ld=g(require("classnames")),Dd=require("formik");n();var xf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xf));var We={"can-transfer-warning":"dapp-core-component__styles-module__can-transfer-warning",canTransferWarning:"dapp-core-component__styles-module__can-transfer-warning","can-transfer-warning-heading":"dapp-core-component__styles-module__can-transfer-warning-heading",canTransferWarningHeading:"dapp-core-component__styles-module__can-transfer-warning-heading","can-transfer-warning-icon":"dapp-core-component__styles-module__can-transfer-warning-icon",canTransferWarningIcon:"dapp-core-component__styles-module__can-transfer-warning-icon","can-transfer-warning-label":"dapp-core-component__styles-module__can-transfer-warning-label",canTransferWarningLabel:"dapp-core-component__styles-module__can-transfer-warning-label","can-transfer-warning-addresses":"dapp-core-component__styles-module__can-transfer-warning-addresses",canTransferWarningAddresses:"dapp-core-component__styles-module__can-transfer-warning-addresses","can-transfer-warning-address":"dapp-core-component__styles-module__can-transfer-warning-address",canTransferWarningAddress:"dapp-core-component__styles-module__can-transfer-warning-address","can-transfer-warning-address-explorer":"dapp-core-component__styles-module__can-transfer-warning-address-explorer",canTransferWarningAddressExplorer:"dapp-core-component__styles-module__can-transfer-warning-address-explorer","can-transfer-warning-address-copy":"dapp-core-component__styles-module__can-transfer-warning-address-copy",canTransferWarningAddressCopy:"dapp-core-component__styles-module__can-transfer-warning-address-copy"};var Gd=o=>{let{className:e}=o,{values:{nft:t,address:r}}=(0,Dd.useFormikContext)();return!(t!=null&&t.allowedReceivers)||t.allowedReceivers.includes(r)?null:$e.default.createElement("div",{className:(0,Ld.default)(We.canTransferWarning,e),"data-testid":"canTransferWarning"},$e.default.createElement("div",{className:We.canTransferWarningHeading},$e.default.createElement(Id.FontAwesomeIcon,{icon:Ed.faExclamationTriangle,className:We.canTransferWarningIcon,size:"lg"}),$e.default.createElement("div",{className:We.canTransferWarningTitle},$e.default.createElement("div",{className:We.canTransferWarningLabel},"Warning!"),$e.default.createElement("div",{className:We.canTransferWarningMessage},_p))),$e.default.createElement("div",{className:We.canTransferWarningAddresses},t.allowedReceivers.map(a=>$e.default.createElement("div",{className:We.canTransferWarningAddress,key:a},$e.default.createElement(Pd.Trim,{text:a,className:We.canTransferWarningAddressTrim}),$e.default.createElement(Nd.CopyButton,{text:a,className:We.canTransferWarningAddressCopy}),$e.default.createElement(Fd.ExplorerLink,{page:`/${Ad.ACCOUNTS_ENDPOINT}/${a}`,className:We.canTransferWarningAddressExplorer})))))};n();n();var Zo=g(require("react")),Bd=require("@fortawesome/free-solid-svg-icons"),Vd=require("@fortawesome/react-fontawesome"),Ud=g(require("classnames"));n();var Tf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Tf));var Ho={"wrewa-warning":"dapp-core-component__styles-module__wrewa-warning",wrewaWarning:"dapp-core-component__styles-module__wrewa-warning","wrewa-warning-heading":"dapp-core-component__styles-module__wrewa-warning-heading",wrewaWarningHeading:"dapp-core-component__styles-module__wrewa-warning-heading","wrewa-warning-icon":"dapp-core-component__styles-module__wrewa-warning-icon",wrewaWarningIcon:"dapp-core-component__styles-module__wrewa-warning-icon","wrewa-warning-label":"dapp-core-component__styles-module__wrewa-warning-label",wrewaWarningLabel:"dapp-core-component__styles-module__wrewa-warning-label"};var Md=o=>{let{tokenId:e,className:t}=o,{networkConfig:{chainId:r}}=ke();return cr(r)!==e?null:Zo.default.createElement("div",{className:(0,Ud.default)(Ho.wrewaWarning,t)},Zo.default.createElement("div",{className:Ho.wrewaWarningHeading},Zo.default.createElement(Vd.FontAwesomeIcon,{icon:Bd.faExclamationTriangle,className:Ho.wrewaWarningIcon,size:"lg"}),Zo.default.createElement("div",{className:Ho.wrewaWarningTitle},Zo.default.createElement("div",{className:Ho.wrewaWarningLabel},"Warning!"),Zo.default.createElement("div",{className:Ho.wrewaWarningMessage},fp))))};n();var kf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kf));var gn={form:"dapp-core-component__form-module__form",formFieldset:"dapp-core-component__form-module__formFieldset",formWrapper:"dapp-core-component__form-module__formWrapper","form-buttons":"dapp-core-component__form-module__form-buttons",formButtons:"dapp-core-component__form-module__form-buttons"};n();n();var Od=o=>{var e,t;return((e=o.nft)==null?void 0:e.type)===Z.NftEnumType.NonFungibleDCDT?"NFT":((t=o.nft)==null?void 0:t.type)===Z.NftEnumType.SemiFungibleDCDT?"SFT":o.tokenDetails.ticker};var $d=({className:o,GuardianScreen:e})=>{let{formInfo:t,accountInfo:r,amountInfo:a,tokensInfo:p}=$(),{values:s}=(0,Wd.useFormikContext)(),{txType:i,tokenId:d,address:u,balance:_,chainId:f,ledger:y}=s,{nft:b}=p,[v,T]=(0,Y.useState)(),{amountRange:k,onSetAmountPercentage:C}=a,{renderKey:A,onValidateForm:I,onInvalidateForm:V,onCloseForm:U,onSubmitForm:M,onPreviewClick:W,areValidatedValuesReady:N,isGuardianScreenVisible:B,uiOptions:P,readonly:O,setGuardedTransaction:K,setHasGuardianScreen:H}=t,G=()=>S(void 0,null,function*(){if(!N)return;let _e=yield fr(s);try{let z=yield hr({address:u,balance:_,chainId:f,nonce:r.nonce,values:_e});z.setVersion(yn.TransactionVersion.withTxOptions());let Pe=x({guarded:!0},y?{hashSign:!0}:{});z.setOptions(yn.TransactionOptions.withOptions(Pe)),T({0:z})}catch(z){T({})}});(0,Y.useEffect)(()=>{G()},[s,N]),(0,Y.useEffect)(()=>{H(Boolean(e))},[]),(0,Y.useEffect)(()=>{if(!v)return;let _e=v[0];_e&&K(_e)},[v]);let q=_e=>{_e.preventDefault(),U()},R=i==="NonFungibleDCDT",ie=i==="SemiFungibleDCDT",ue={onSignTransaction:()=>S(void 0,null,function*(){setTimeout(()=>{M()})}),onPrev:V,address:u,title:"",className:o,signedTransactions:v,setSignedTransactions:T,signStepInnerClasses:{}};return e&&B?Y.default.createElement(e,x({},ue)):N?Y.default.createElement(ol,{providerType:r.providerType}):Y.default.createElement("form",{key:A,onSubmit:I,className:(0,qd.default)(gn.form,o)},Y.default.createElement("fieldset",{className:gn.formFieldset},(R||ie)&&b&&Y.default.createElement(jr,x({onClick:W,txType:i},b)),Y.default.createElement(Rl,null),ie?Y.default.createElement(Zl,null):Y.default.createElement(Td,null),(P==null?void 0:P.showAmountSlider)&&!R&&Y.default.createElement(Cd,{onPercentageChange:C,percentageValue:k,disabled:Boolean(O)}),Y.default.createElement(Md,{tokenId:d}),Y.default.createElement(Gd,null),Y.default.createElement(dm,null),Y.default.createElement(wd,null)),Y.default.createElement("div",{className:gn.formButtons},Y.default.createElement("button",{type:"button",id:"sendBtn","data-testid":"sendBtn",onClick:I,className:E.buttonSend},"Send ",Od(p)),Y.default.createElement("button",{type:"button",id:"closeButton","data-testid":"returnToWalletBtn",onClick:q,className:E.buttonText},"Cancel")))};n();var wt=require("@terradharitri/sdk-dapp/constants/index"),zd=require("@terradharitri/sdk-dapp/types/enums.types");var Sf=wt.fallbackNetworkConfigurations[zd.EnvironmentsEnum.testnet],Ct={rewaLabel:wt.TESTNET_REWA_LABEL,address:Vo,chainId:wt.TESTNET_CHAIN_ID,balance:"812350000000000000",nonce:0,networkConfig:Sf};n();var bn=require("@terradharitri/sdk-dapp/constants/index"),vn={receiver:"",amount:"",tokenId:bn.TESTNET_REWA_LABEL,gasLimit:String(bn.GAS_LIMIT),gasPrice:"0.000000001",data:""};var wf=Rd.fallbackNetworkConfigurations[hn.EnvironmentsEnum.testnet],Zd=({formConfigValues:o=vn,balance:e=Ct.balance,address:t=Ct.address,chainId:r=Ct.chainId,ledger:a,isGuarded:p,GuardianScreen:s})=>{var C;let i=kc(w(x({configValues:o},Ct),{balance:e,address:t})),[d,u]=(0,Ko.useState)(Boolean(s)),[_,f]=(0,Ko.useState)(Boolean(o.skipToConfirm));if(!i)return Ko.default.createElement(Hd.Loader,{"data-testid":"loader"});let y=o,{nft:b,gasLimitCostError:v}=i,T=x(w(x({},y),{tokenId:String(y.tokenId),txType:Yp({nft:b,tokenId:String(y.tokenId)}),address:t,chainId:r,balance:e}),a?{ledger:x({},a)}:{}),k={networkConfig:w(x({},wf),{skipFetchFromServer:!0}),initGasLimitError:v,initialValues:T,onFormSubmit:()=>"log submit",accountInfo:{address:t,isGuarded:p,nonce:Ct.nonce,balance:e,providerType:hn.LoginMethodsEnum.extra},formInfo:{prefilledForm:!1,skipToConfirm:!1,readonly:!1,isFormSubmitted:_,setIsFormSubmitted:f,onCloseForm:()=>"",setGuardedTransaction:A=>{console.log(A)},setHasGuardianScreen:u,hasGuardianScreen:d},tokensInfo:{initialNft:b,initialTokens:(C=i==null?void 0:i.computedTokens.map(A=>{var I;return w(x({},A),{ledgerSignature:((I=A.assets)==null?void 0:I.ledgerSignature)||"",decimals:A.decimals})}))!=null?C:[]}};return Ko.default.createElement(oc,x({},k),Ko.default.createElement($d,{GuardianScreen:s}))};var jd=o=>(0,Xd.render)(Kd.default.createElement(Zd,x({},o)));n();n();var Jd=require("@testing-library/react");var Cf=o=>jd(x({formConfigValues:w(x({},vn),{gasLimit:"500000",tokenId:"TWO-824e70"})},o?{balance:o}:{})),xn={identifier:"TWO-824e70",name:"TwoTToken",ticker:"Two",decimals:2,balance:"100000"},Yd=o=>e=>t=>S(void 0,null,function*(){let a=yield e.findByTestId(o),p={target:{value:t}};return or.fireEvent.change(a,p),or.fireEvent.blur(a),a}),Ef=Yd("amount"),If=Yd("gasLimit"),Af=()=>{Gn.use(ho.rest.get(`${vo.apiAddress}/accounts/${Vo}/tokens/${xn.identifier}`,Uo(xn))),Gn.use(ho.rest.get(`${vo.apiAddress}/accounts/${Vo}/tokens`,Uo([xn])))};0&&(module.exports={beforAllTokens,queries,setupDcdtServer,twoToken,useAmountInput,useGasLimitInput});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=helpers.js.map
