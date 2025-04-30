"use strict";var Wp=Object.create;var yo=Object.defineProperty,zp=Object.defineProperties,Kp=Object.getOwnPropertyDescriptor,Zp=Object.getOwnPropertyDescriptors,Hp=Object.getOwnPropertyNames,Fo=Object.getOwnPropertySymbols,Xp=Object.getPrototypeOf,ht=Object.prototype.hasOwnProperty,gr=Object.prototype.propertyIsEnumerable;var fr=(t,e,o)=>e in t?yo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,b=(t,e)=>{for(var o in e||(e={}))ht.call(e,o)&&fr(t,o,e[o]);if(Fo)for(var o of Fo(e))gr.call(e,o)&&fr(t,o,e[o]);return t},T=(t,e)=>zp(t,Zp(e));var yr=(t,e)=>{var o={};for(var n in t)ht.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&Fo)for(var n of Fo(t))e.indexOf(n)<0&&gr.call(t,n)&&(o[n]=t[n]);return o};var xt=(t,e)=>()=>(t&&(e=t(t=0)),e);var Po=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Do=(t,e)=>{for(var o in e)yo(t,o,{get:e[o],enumerable:!0})},vr=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Hp(e))!ht.call(t,a)&&a!==o&&yo(t,a,{get:()=>e[a],enumerable:!(n=Kp(e,a))||n.enumerable});return t};var u=(t,e,o)=>(o=t!=null?Wp(Xp(t)):{},vr(e||!t||!t.__esModule?yo(o,"default",{value:t,enumerable:!0}):o,t)),vo=t=>vr(yo({},"__esModule",{value:!0}),t);var N=(t,e,o)=>new Promise((n,a)=>{var p=d=>{try{m(o.next(d))}catch(g){a(g)}},i=d=>{try{m(o.throw(d))}catch(g){a(g)}},m=d=>d.done?n(d.value):Promise.resolve(d.value).then(p,i);m((o=o.apply(t,e)).next())});var xr=Po(Bo=>{"use strict";r();Bo.byteLength=Yp;Bo.toByteArray=Qp;Bo.fromByteArray=tc;var ge=[],pe=[],jp=typeof Uint8Array!="undefined"?Uint8Array:Array,Tt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ke=0,br=Tt.length;Ke<br;++Ke)ge[Ke]=Tt[Ke],pe[Tt.charCodeAt(Ke)]=Ke;var Ke,br;pe["-".charCodeAt(0)]=62;pe["_".charCodeAt(0)]=63;function hr(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function Yp(t){var e=hr(t),o=e[0],n=e[1];return(o+n)*3/4-n}function Jp(t,e,o){return(e+o)*3/4-o}function Qp(t){var e,o=hr(t),n=o[0],a=o[1],p=new jp(Jp(t,n,a)),i=0,m=a>0?n-4:n,d;for(d=0;d<m;d+=4)e=pe[t.charCodeAt(d)]<<18|pe[t.charCodeAt(d+1)]<<12|pe[t.charCodeAt(d+2)]<<6|pe[t.charCodeAt(d+3)],p[i++]=e>>16&255,p[i++]=e>>8&255,p[i++]=e&255;return a===2&&(e=pe[t.charCodeAt(d)]<<2|pe[t.charCodeAt(d+1)]>>4,p[i++]=e&255),a===1&&(e=pe[t.charCodeAt(d)]<<10|pe[t.charCodeAt(d+1)]<<4|pe[t.charCodeAt(d+2)]>>2,p[i++]=e>>8&255,p[i++]=e&255),p}function ec(t){return ge[t>>18&63]+ge[t>>12&63]+ge[t>>6&63]+ge[t&63]}function oc(t,e,o){for(var n,a=[],p=e;p<o;p+=3)n=(t[p]<<16&16711680)+(t[p+1]<<8&65280)+(t[p+2]&255),a.push(ec(n));return a.join("")}function tc(t){for(var e,o=t.length,n=o%3,a=[],p=16383,i=0,m=o-n;i<m;i+=p)a.push(oc(t,i,i+p>m?m:i+p));return n===1?(e=t[o-1],a.push(ge[e>>2]+ge[e<<4&63]+"==")):n===2&&(e=(t[o-2]<<8)+t[o-1],a.push(ge[e>>10]+ge[e>>4&63]+ge[e<<2&63]+"=")),a.join("")}});var Tr=Po(St=>{r();St.read=function(t,e,o,n,a){var p,i,m=a*8-n-1,d=(1<<m)-1,g=d>>1,f=-7,y=o?a-1:0,h=o?-1:1,v=t[e+y];for(y+=h,p=v&(1<<-f)-1,v>>=-f,f+=m;f>0;p=p*256+t[e+y],y+=h,f-=8);for(i=p&(1<<-f)-1,p>>=-f,f+=n;f>0;i=i*256+t[e+y],y+=h,f-=8);if(p===0)p=1-g;else{if(p===d)return i?NaN:(v?-1:1)*(1/0);i=i+Math.pow(2,n),p=p-g}return(v?-1:1)*i*Math.pow(2,p-n)};St.write=function(t,e,o,n,a,p){var i,m,d,g=p*8-a-1,f=(1<<g)-1,y=f>>1,h=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=n?0:p-1,k=n?1:-1,E=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(m=isNaN(e)?1:0,i=f):(i=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-i))<1&&(i--,d*=2),i+y>=1?e+=h/d:e+=h*Math.pow(2,1-y),e*d>=2&&(i++,d/=2),i+y>=f?(m=0,i=f):i+y>=1?(m=(e*d-1)*Math.pow(2,a),i=i+y):(m=e*Math.pow(2,y-1)*Math.pow(2,a),i=0));a>=8;t[o+v]=m&255,v+=k,m/=256,a-=8);for(i=i<<a|m,g+=a;g>0;t[o+v]=i&255,v+=k,i/=256,g-=8);t[o+v-k]|=E*128}});var Br=Po(ao=>{"use strict";r();var kt=xr(),no=Tr(),Sr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ao.Buffer=_;ao.SlowBuffer=sc;ao.INSPECT_MAX_BYTES=50;var Go=2147483647;ao.kMaxLength=Go;_.TYPED_ARRAY_SUPPORT=rc();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function rc(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(o){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function Ae(t){if(t>Go)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,_.prototype),e}function _(t,e,o){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return It(t)}return Er(t,e,o)}_.poolSize=8192;function Er(t,e,o){if(typeof t=="string")return ac(t,e);if(ArrayBuffer.isView(t))return pc(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(ye(t,ArrayBuffer)||t&&ye(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ye(t,SharedArrayBuffer)||t&&ye(t.buffer,SharedArrayBuffer)))return Et(t,e,o);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return _.from(n,e,o);var a=cc(t);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return _.from(t[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}_.from=function(t,e,o){return Er(t,e,o)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function Cr(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function nc(t,e,o){return Cr(t),t<=0?Ae(t):e!==void 0?typeof o=="string"?Ae(t).fill(e,o):Ae(t).fill(e):Ae(t)}_.alloc=function(t,e,o){return nc(t,e,o)};function It(t){return Cr(t),Ae(t<0?0:At(t)|0)}_.allocUnsafe=function(t){return It(t)};_.allocUnsafeSlow=function(t){return It(t)};function ac(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!_.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=Ir(t,e)|0,n=Ae(o),a=n.write(t,e);return a!==o&&(n=n.slice(0,a)),n}function wt(t){for(var e=t.length<0?0:At(t.length)|0,o=Ae(e),n=0;n<e;n+=1)o[n]=t[n]&255;return o}function pc(t){if(ye(t,Uint8Array)){var e=new Uint8Array(t);return Et(e.buffer,e.byteOffset,e.byteLength)}return wt(t)}function Et(t,e,o){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(t):o===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,o),Object.setPrototypeOf(n,_.prototype),n}function cc(t){if(_.isBuffer(t)){var e=At(t.length)|0,o=Ae(e);return o.length===0||t.copy(o,0,0,e),o}if(t.length!==void 0)return typeof t.length!="number"||Nt(t.length)?Ae(0):wt(t);if(t.type==="Buffer"&&Array.isArray(t.data))return wt(t.data)}function At(t){if(t>=Go)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Go.toString(16)+" bytes");return t|0}function sc(t){return+t!=t&&(t=0),_.alloc(+t)}_.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==_.prototype};_.compare=function(e,o){if(ye(e,Uint8Array)&&(e=_.from(e,e.offset,e.byteLength)),ye(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(e)||!_.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,a=o.length,p=0,i=Math.min(n,a);p<i;++p)if(e[p]!==o[p]){n=e[p],a=o[p];break}return n<a?-1:a<n?1:0};_.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return _.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var a=_.allocUnsafe(o),p=0;for(n=0;n<e.length;++n){var i=e[n];if(ye(i,Uint8Array))p+i.length>a.length?_.from(i).copy(a,p):Uint8Array.prototype.set.call(a,i,p);else if(_.isBuffer(i))i.copy(a,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=i.length}return a};function Ir(t,e){if(_.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||ye(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var o=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Ct(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Dr(t).length;default:if(a)return n?-1:Ct(t).length;e=(""+e).toLowerCase(),a=!0}}_.byteLength=Ir;function ic(t,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return bc(this,e,o);case"utf8":case"utf-8":return Nr(this,e,o);case"ascii":return yc(this,e,o);case"latin1":case"binary":return vc(this,e,o);case"base64":return fc(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return hc(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}_.prototype._isBuffer=!0;function Ze(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}_.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)Ze(this,o,o+1);return this};_.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)Ze(this,o,o+3),Ze(this,o+1,o+2);return this};_.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)Ze(this,o,o+7),Ze(this,o+1,o+6),Ze(this,o+2,o+5),Ze(this,o+3,o+4);return this};_.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Nr(this,0,e):ic.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(e){if(!_.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:_.compare(this,e)===0};_.prototype.inspect=function(){var e="",o=ao.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};Sr&&(_.prototype[Sr]=_.prototype.inspect);_.prototype.compare=function(e,o,n,a,p){if(ye(e,Uint8Array)&&(e=_.from(e,e.offset,e.byteLength)),!_.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),a===void 0&&(a=0),p===void 0&&(p=this.length),o<0||n>e.length||a<0||p>this.length)throw new RangeError("out of range index");if(a>=p&&o>=n)return 0;if(a>=p)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,a>>>=0,p>>>=0,this===e)return 0;for(var i=p-a,m=n-o,d=Math.min(i,m),g=this.slice(a,p),f=e.slice(o,n),y=0;y<d;++y)if(g[y]!==f[y]){i=g[y],m=f[y];break}return i<m?-1:m<i?1:0};function Ar(t,e,o,n,a){if(t.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,Nt(o)&&(o=a?0:t.length-1),o<0&&(o=t.length+o),o>=t.length){if(a)return-1;o=t.length-1}else if(o<0)if(a)o=0;else return-1;if(typeof e=="string"&&(e=_.from(e,n)),_.isBuffer(e))return e.length===0?-1:kr(t,e,o,n,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(t,e,o):Uint8Array.prototype.lastIndexOf.call(t,e,o):kr(t,[e],o,n,a);throw new TypeError("val must be string, number or Buffer")}function kr(t,e,o,n,a){var p=1,i=t.length,m=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;p=2,i/=2,m/=2,o/=2}function d(v,k){return p===1?v[k]:v.readUInt16BE(k*p)}var g;if(a){var f=-1;for(g=o;g<i;g++)if(d(t,g)===d(e,f===-1?0:g-f)){if(f===-1&&(f=g),g-f+1===m)return f*p}else f!==-1&&(g-=g-f),f=-1}else for(o+m>i&&(o=i-m),g=o;g>=0;g--){for(var y=!0,h=0;h<m;h++)if(d(t,g+h)!==d(e,h)){y=!1;break}if(y)return g}return-1}_.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};_.prototype.indexOf=function(e,o,n){return Ar(this,e,o,n,!0)};_.prototype.lastIndexOf=function(e,o,n){return Ar(this,e,o,n,!1)};function lc(t,e,o,n){o=Number(o)||0;var a=t.length-o;n?(n=Number(n),n>a&&(n=a)):n=a;var p=e.length;n>p/2&&(n=p/2);for(var i=0;i<n;++i){var m=parseInt(e.substr(i*2,2),16);if(Nt(m))return i;t[o+i]=m}return i}function mc(t,e,o,n){return Vo(Ct(e,t.length-o),t,o,n)}function dc(t,e,o,n){return Vo(Sc(e),t,o,n)}function uc(t,e,o,n){return Vo(Dr(e),t,o,n)}function _c(t,e,o,n){return Vo(kc(e,t.length-o),t,o,n)}_.prototype.write=function(e,o,n,a){if(o===void 0)a="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")a=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,a===void 0&&(a="utf8")):(a=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-o;if((n===void 0||n>p)&&(n=p),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var i=!1;;)switch(a){case"hex":return lc(this,e,o,n);case"utf8":case"utf-8":return mc(this,e,o,n);case"ascii":case"latin1":case"binary":return dc(this,e,o,n);case"base64":return uc(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _c(this,e,o,n);default:if(i)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),i=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function fc(t,e,o){return e===0&&o===t.length?kt.fromByteArray(t):kt.fromByteArray(t.slice(e,o))}function Nr(t,e,o){o=Math.min(t.length,o);for(var n=[],a=e;a<o;){var p=t[a],i=null,m=p>239?4:p>223?3:p>191?2:1;if(a+m<=o){var d,g,f,y;switch(m){case 1:p<128&&(i=p);break;case 2:d=t[a+1],(d&192)===128&&(y=(p&31)<<6|d&63,y>127&&(i=y));break;case 3:d=t[a+1],g=t[a+2],(d&192)===128&&(g&192)===128&&(y=(p&15)<<12|(d&63)<<6|g&63,y>2047&&(y<55296||y>57343)&&(i=y));break;case 4:d=t[a+1],g=t[a+2],f=t[a+3],(d&192)===128&&(g&192)===128&&(f&192)===128&&(y=(p&15)<<18|(d&63)<<12|(g&63)<<6|f&63,y>65535&&y<1114112&&(i=y))}}i===null?(i=65533,m=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|i&1023),n.push(i),a+=m}return gc(n)}var wr=4096;function gc(t){var e=t.length;if(e<=wr)return String.fromCharCode.apply(String,t);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,t.slice(n,n+=wr));return o}function yc(t,e,o){var n="";o=Math.min(t.length,o);for(var a=e;a<o;++a)n+=String.fromCharCode(t[a]&127);return n}function vc(t,e,o){var n="";o=Math.min(t.length,o);for(var a=e;a<o;++a)n+=String.fromCharCode(t[a]);return n}function bc(t,e,o){var n=t.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var a="",p=e;p<o;++p)a+=wc[t[p]];return a}function hc(t,e,o){for(var n=t.slice(e,o),a="",p=0;p<n.length-1;p+=2)a+=String.fromCharCode(n[p]+n[p+1]*256);return a}_.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var a=this.subarray(e,o);return Object.setPrototypeOf(a,_.prototype),a};function R(t,e,o){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>o)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||R(e,o,this.length);for(var a=this[e],p=1,i=0;++i<o&&(p*=256);)a+=this[e+i]*p;return a};_.prototype.readUintBE=_.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||R(e,o,this.length);for(var a=this[e+--o],p=1;o>0&&(p*=256);)a+=this[e+--o]*p;return a};_.prototype.readUint8=_.prototype.readUInt8=function(e,o){return e=e>>>0,o||R(e,1,this.length),this[e]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||R(e,2,this.length),this[e]|this[e+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||R(e,2,this.length),this[e]<<8|this[e+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||R(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||R(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};_.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||R(e,o,this.length);for(var a=this[e],p=1,i=0;++i<o&&(p*=256);)a+=this[e+i]*p;return p*=128,a>=p&&(a-=Math.pow(2,8*o)),a};_.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||R(e,o,this.length);for(var a=o,p=1,i=this[e+--a];a>0&&(p*=256);)i+=this[e+--a]*p;return p*=128,i>=p&&(i-=Math.pow(2,8*o)),i};_.prototype.readInt8=function(e,o){return e=e>>>0,o||R(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};_.prototype.readInt16LE=function(e,o){e=e>>>0,o||R(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};_.prototype.readInt16BE=function(e,o){e=e>>>0,o||R(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};_.prototype.readInt32LE=function(e,o){return e=e>>>0,o||R(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};_.prototype.readInt32BE=function(e,o){return e=e>>>0,o||R(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};_.prototype.readFloatLE=function(e,o){return e=e>>>0,o||R(e,4,this.length),no.read(this,e,!0,23,4)};_.prototype.readFloatBE=function(e,o){return e=e>>>0,o||R(e,4,this.length),no.read(this,e,!1,23,4)};_.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||R(e,8,this.length),no.read(this,e,!0,52,8)};_.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||R(e,8,this.length),no.read(this,e,!1,52,8)};function ee(t,e,o,n,a,p){if(!_.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<p)throw new RangeError('"value" argument is out of bounds');if(o+n>t.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(e,o,n,a){if(e=+e,o=o>>>0,n=n>>>0,!a){var p=Math.pow(2,8*n)-1;ee(this,e,o,n,p,0)}var i=1,m=0;for(this[o]=e&255;++m<n&&(i*=256);)this[o+m]=e/i&255;return o+n};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(e,o,n,a){if(e=+e,o=o>>>0,n=n>>>0,!a){var p=Math.pow(2,8*n)-1;ee(this,e,o,n,p,0)}var i=n-1,m=1;for(this[o+i]=e&255;--i>=0&&(m*=256);)this[o+i]=e/m&255;return o+n};_.prototype.writeUint8=_.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||ee(this,e,o,1,255,0),this[o]=e&255,o+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||ee(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||ee(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||ee(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||ee(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};_.prototype.writeIntLE=function(e,o,n,a){if(e=+e,o=o>>>0,!a){var p=Math.pow(2,8*n-1);ee(this,e,o,n,p-1,-p)}var i=0,m=1,d=0;for(this[o]=e&255;++i<n&&(m*=256);)e<0&&d===0&&this[o+i-1]!==0&&(d=1),this[o+i]=(e/m>>0)-d&255;return o+n};_.prototype.writeIntBE=function(e,o,n,a){if(e=+e,o=o>>>0,!a){var p=Math.pow(2,8*n-1);ee(this,e,o,n,p-1,-p)}var i=n-1,m=1,d=0;for(this[o+i]=e&255;--i>=0&&(m*=256);)e<0&&d===0&&this[o+i+1]!==0&&(d=1),this[o+i]=(e/m>>0)-d&255;return o+n};_.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||ee(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};_.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||ee(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};_.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||ee(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};_.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||ee(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};_.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||ee(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function Lr(t,e,o,n,a,p){if(o+n>t.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function Fr(t,e,o,n,a){return e=+e,o=o>>>0,a||Lr(t,e,o,4,34028234663852886e22,-34028234663852886e22),no.write(t,e,o,n,23,4),o+4}_.prototype.writeFloatLE=function(e,o,n){return Fr(this,e,o,!0,n)};_.prototype.writeFloatBE=function(e,o,n){return Fr(this,e,o,!1,n)};function Pr(t,e,o,n,a){return e=+e,o=o>>>0,a||Lr(t,e,o,8,17976931348623157e292,-17976931348623157e292),no.write(t,e,o,n,52,8),o+8}_.prototype.writeDoubleLE=function(e,o,n){return Pr(this,e,o,!0,n)};_.prototype.writeDoubleBE=function(e,o,n){return Pr(this,e,o,!1,n)};_.prototype.copy=function(e,o,n,a){if(!_.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!a&&a!==0&&(a=this.length),o>=e.length&&(o=e.length),o||(o=0),a>0&&a<n&&(a=n),a===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-o<a-n&&(a=e.length-o+n);var p=a-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,a):Uint8Array.prototype.set.call(e,this.subarray(n,a),o),p};_.prototype.fill=function(e,o,n,a){if(typeof e=="string"){if(typeof o=="string"?(a=o,o=0,n=this.length):typeof n=="string"&&(a=n,n=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!_.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){var p=e.charCodeAt(0);(a==="utf8"&&p<128||a==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var i;if(typeof e=="number")for(i=o;i<n;++i)this[i]=e;else{var m=_.isBuffer(e)?e:_.from(e,a),d=m.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-o;++i)this[i+o]=m[i%d]}return this};var xc=/[^+/0-9A-Za-z-_]/g;function Tc(t){if(t=t.split("=")[0],t=t.trim().replace(xc,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function Ct(t,e){e=e||1/0;for(var o,n=t.length,a=null,p=[],i=0;i<n;++i){if(o=t.charCodeAt(i),o>55295&&o<57344){if(!a){if(o>56319){(e-=3)>-1&&p.push(239,191,189);continue}else if(i+1===n){(e-=3)>-1&&p.push(239,191,189);continue}a=o;continue}if(o<56320){(e-=3)>-1&&p.push(239,191,189),a=o;continue}o=(a-55296<<10|o-56320)+65536}else a&&(e-=3)>-1&&p.push(239,191,189);if(a=null,o<128){if((e-=1)<0)break;p.push(o)}else if(o<2048){if((e-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function Sc(t){for(var e=[],o=0;o<t.length;++o)e.push(t.charCodeAt(o)&255);return e}function kc(t,e){for(var o,n,a,p=[],i=0;i<t.length&&!((e-=2)<0);++i)o=t.charCodeAt(i),n=o>>8,a=o%256,p.push(a),p.push(n);return p}function Dr(t){return kt.toByteArray(Tc(t))}function Vo(t,e,o,n){for(var a=0;a<n&&!(a+o>=e.length||a>=t.length);++a)e[a+o]=t[a];return a}function ye(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Nt(t){return t!==t}var wc=function(){for(var t="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,a=0;a<16;++a)e[n+a]=t[o]+t[a];return e}()});var Or=Po((ql,Mr)=>{r();var V=Mr.exports={},ve,be;function Lt(){throw new Error("setTimeout has not been defined")}function Ft(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ve=setTimeout:ve=Lt}catch(t){ve=Lt}try{typeof clearTimeout=="function"?be=clearTimeout:be=Ft}catch(t){be=Ft}})();function Gr(t){if(ve===setTimeout)return setTimeout(t,0);if((ve===Lt||!ve)&&setTimeout)return ve=setTimeout,setTimeout(t,0);try{return ve(t,0)}catch(e){try{return ve.call(null,t,0)}catch(o){return ve.call(this,t,0)}}}function Ec(t){if(be===clearTimeout)return clearTimeout(t);if((be===Ft||!be)&&clearTimeout)return be=clearTimeout,clearTimeout(t);try{return be(t)}catch(e){try{return be.call(null,t)}catch(o){return be.call(this,t)}}}var Ne=[],po=!1,He,Uo=-1;function Cc(){!po||!He||(po=!1,He.length?Ne=He.concat(Ne):Uo=-1,Ne.length&&Vr())}function Vr(){if(!po){var t=Gr(Cc);po=!0;for(var e=Ne.length;e;){for(He=Ne,Ne=[];++Uo<e;)He&&He[Uo].run();Uo=-1,e=Ne.length}He=null,po=!1,Ec(t)}}V.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];Ne.push(new Ur(t,e)),Ne.length===1&&!po&&Gr(Vr)};function Ur(t,e){this.fun=t,this.array=e}Ur.prototype.run=function(){this.fun.apply(null,this.array)};V.title="browser";V.browser=!0;V.env={};V.argv=[];V.version="";V.versions={};function Le(){}V.on=Le;V.addListener=Le;V.once=Le;V.off=Le;V.removeListener=Le;V.removeAllListeners=Le;V.emit=Le;V.prependListener=Le;V.prependOnceListener=Le;V.listeners=function(t){return[]};V.binding=function(t){throw new Error("process.binding is not supported")};V.cwd=function(){return"/"};V.chdir=function(t){throw new Error("process.chdir is not supported")};V.umask=function(){return 0}});var c,s,Rl,r=xt(()=>{c=u(Br()),s=u(Or()),Rl=function(t){function e(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var qn={};Do(qn,{default:()=>zi});var Yo,Wi,zi,Rn=xt(()=>{"use strict";r();Yo=u(require("react")),Wi=t=>Yo.createElement("svg",b({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},t),Yo.createElement("g",null,Yo.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),zi=Wi});var ct={};Do(ct,{default:()=>rl});var pt,tl,rl,st=xt(()=>{"use strict";r();pt=u(require("react")),tl=t=>pt.createElement("svg",b({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),pt.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),pt.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),rl=tl});var Gl={};Do(Gl,{AmountSelect:()=>lr,AmountSelectInput:()=>Nl,AmountSlider:()=>Bl,Data:()=>Pl,FeeAccordion:()=>Qi,GasLimit:()=>Xt,GasPrice:()=>Yt,Receiver:()=>Zi,SFTAmount:()=>Xi,SelectToken:()=>pl});module.exports=vo(Gl);r();r();r();var P=u(require("react")),tt=require("@fortawesome/free-solid-svg-icons"),Kt=require("@fortawesome/react-fontawesome"),ot=u(require("classnames")),sa=require("formik"),ia=u(require("react-select"));r();var Ic=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ic));var w={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};r();r();r();var So=u(require("react")),_i=require("formik");r();r();var Ye=u(require("react")),ni=require("formik");r();r();var je=u(require("react")),qs=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Rs=require("formik");r();r();r();var re=require("@terradharitri/sdk-dapp/types/tokens.types");r();r();r();r();r();var tn=require("@terradharitri/sdk-dapp/constants/index"),ns=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),as=u(require("bignumber.js"));r();r();r();var Ac=require("bech32");r();r();r();var X=(t,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(t);r();r();r();var Lc=require("@terradharitri/sdk-dapp/constants"),Fc=require("@terradharitri/sdk-dapp/utils/account/getAccount");r();r();var Pc=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");r();var Dc=require("@terradharitri/sdk-dapp/utils/buildUrlParams");r();var Mo=u(require("anchorme")),Pt=t=>t.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),qr=(t,e)=>{if(e){let o=`[Message hidden due to suspicious content - ${e.info}]`;if(t.length>1e3)return{output:o,stringWithLinks:t,found:!0};let n=Pt(t.normalize("NFKC")),a=Mo.default.list(n),p=[];if(a.length>0){let i=o;a.forEach((m,d)=>{let{string:g}=m,f="",y="",h=g;for(let v=0;v<i.length;v++){let k=i.slice(v),[E]=Mo.default.list(Pt(k));E&&g===E.string&&(f=i.substring(0,v))}for(let v=o.length;v>0;v--){let k=i.slice(0,v),[E]=Mo.default.list(Pt(k));E&&g===E.string&&(y=i.substring(v))}p.push(f),p.push(h),i=y,d===a.length-1&&p.push(y)})}else p.push(t);return{output:o,stringWithLinks:p.join(""),found:!0}}else return{output:t,stringWithLinks:"",found:!1}};r();function Rr({docStyle:t}){let e={hoverColor:t.getPropertyValue("--border-color"),primaryColor:t.getPropertyValue("--primary"),bgColor:t.getPropertyValue("--card-bg"),mutedColor:t.getPropertyValue("--muted"),blackColor:t.getPropertyValue("--black")};return{valueContainer:()=>({padding:"0.125rem 0 0.125rem 0.2rem",lineHeight:"1.5",fontSize:"0.8125rem",maxWidth:"85%",display:"flex"}),control:(o,n)=>T(b({},o),{minHeight:"0",flexWrap:"nowrap",backgroundColor:n.isDisabled?"#e9ecef":"transparent",borderColor:n.isDisabled?e.hoverColor:n.isFocused?e.primaryColor:e.blackColor,boxShadow:n.isFocused?`0 0 0 0.2rem #${e.primaryColor.replace("#","").trim()}33`:null,"&:hover":{borderColor:n.isFocused?e.primaryColor:"#b0b0b0"}}),input:o=>T(b({},o),{paddingLeft:"0.4rem",marginLeft:"0",marginRight:"0"}),indicatorSeparator:o=>T(b({},o),{marginTop:"0.3rem",marginBottom:"0.3rem"}),indicatorsContainer:o=>T(b({},o),{zIndex:"0"}),dropdownIndicator:o=>T(b({},o),{padding:"0 0.4rem"}),multiValue:o=>T(b({},o),{backgroundColor:e.hoverColor,borderRadius:"4px"}),multiValueRemove:o=>T(b({},o),{cursor:"pointer"}),multiValueLebel:o=>T(b({},o),{lineHeight:"1.5"}),placeholder:o=>T(b({},o),{marginLeft:"0",lineHeight:"2"}),option:(o,{isFocused:n,isSelected:a})=>T(b({},o),{fontSize:"0.8125rem",cursor:"pointer",align:"left",backgroundColor:a?e.primaryColor:n?e.hoverColor:"transparent"}),menu:o=>T(b({},o),{marginTop:"0.2rem",zIndex:"5"})}}r();var $r=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Xe=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Dt=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Fe=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");r();r();var bo=require("@terradharitri/sdk-dapp/constants/index");function Wr({feeLimit:t,rewaPriceInUsd:e}){let o=(0,Xe.formatAmount)({input:t,decimals:bo.DECIMALS,digits:bo.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,Dt.getUsdValue)({amount:o,usd:e,decimals:bo.DIGITS})}`}r();var Gc=require("@terradharitri/sdk-dapp/constants/index");r();r();var ho="5000000000000000",$="0",zr="WREWA-bd4d79";r();var Kr=require("@terradharitri/sdk-dapp/constants/index"),Uc=u(require("bignumber.js"));r();var Vc=require("@terradharitri/sdk-dapp/constants/index");r();var Mc=require("@terradharitri/sdk-dapp/constants/index");r();r();var xo=require("@terradharitri/sdk-core"),Oc=require("@terradharitri/sdk-dapp/constants/index"),qc=u(require("bignumber.js"));r();r();var $c=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");r();var Wc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");r();var Kc=u(require("bignumber.js"));r();var Yc=require("@terradharitri/sdk-dapp/constants/index"),Jc=require("@terradharitri/sdk-dapp/utils/smartContracts"),Qc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),es=u(require("bignumber.js"));r();var jc=u(require("bignumber.js"));r();r();var Xc=u(require("axios"));r();r();r();var jr=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");r();var Hr=require("@terradharitri/sdk-dapp/constants/index");r();var Zc={D:"devnet",T:"testnet",1:"mainnet"},Hc={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function Oo(t){return Zc[t]}function Zr(t){return Hc[t]||zr}function Xr(t){let e=Oo(t),o=Hr.fallbackNetworkConfigurations[e].apiAddress;if(!o)throw"Could not extract api address for environment, check if you have a valid chainID";return o}function Gt(t){return N(this,null,function*(){let e=Xr(t);return yield(0,jr.getServerConfiguration)(e)})}r();var qo={value:null};function Yr(t){return qo.value={baseURL:t.apiAddress,timeout:Number(t.apiTimeout)},qo.value}function he(t){return N(this,null,function*(){if(qo.value!=null)return qo.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),t!=null){let o=yield Gt(t);return Yr(o)}let e="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(e),e})}r();var so=require("@terradharitri/sdk-dapp/constants/index"),on=u(require("bignumber.js"));var Jr,Qr,en,To=(0,Xe.formatAmount)({input:String((Jr=so.GAS_PRICE)!=null?Jr:1e9),decimals:(Qr=so.DECIMALS)!=null?Qr:18,showLastNonZeroDecimal:!0,digits:(en=so.DIGITS)!=null?en:4}),os=new on.default(To).times(10).toString(10);r();var Wo=require("@terradharitri/sdk-dapp/constants/index"),ts=u(require("bignumber.js"));r();var rs=u(require("bignumber.js"));r();r();var an=require("yup");r();var zo=require("@terradharitri/sdk-dapp/constants/ledger.constants"),rn=u(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Ko=require("yup"),ps=(0,Ko.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:o}=this.parent;return!(o&&e&&e.length&&!o.ledgerDataActive)}),cs=(0,Ko.string)().test({name:"hashSign",test:function(e){let{ledger:o,isGuarded:n}=this.parent;if(o){let{ledgerWithHashSign:a,ledgerWithGuardians:p}=(0,rn.default)(o.version);if(e&&e.length>300&&!a)return this.createError({message:`Data too long. You need at least DharitrI app version ${zo.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(n&&!p)return this.createError({message:`You need at least DharitrI app version ${zo.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),ss=[ps,cs],ku=ss.reduce((t,e)=>t.concat(e),(0,Ko.string)());r();var is=require("@terradharitri/sdk-dapp/constants/index"),ls=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ms=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ds=require("yup");r();var gs=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ys=u(require("bignumber.js")),vs=require("yup");r();var us=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),_s=u(require("bignumber.js")),fs=require("yup");r();var bs=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),hs=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),xs=u(require("bignumber.js")),Ts=require("yup");r();var Ss=u(require("bignumber.js")),ks=require("yup");r();var ws=require("@terradharitri/sdk-dapp/constants/index"),Es=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Cs=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Is=u(require("bignumber.js")),As=require("yup");r();var Ns=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ls=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Fs=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ps=u(require("bignumber.js")),Ds=require("yup");r();var Bs=u(require("bignumber.js")),Gs=require("yup");r();var Vs=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Us=require("yup");r();var Ms=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Os=require("yup");r();r();var $s=(0,je.createContext)({});function xe(){return(0,je.useContext)($s)}r();r();r();var mn=require("react"),Qs=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),ei=u(require("lodash/uniqBy"));r();r();r();var Ws=u(require("axios"));r();r();var pn=u(require("axios"));function cn(){return N(this,null,function*(){try{let t=yield he(),{data:e}=yield pn.default.get("economics",t);return e}catch(t){return console.error("err fetching economics info",t),null}})}r();r();var sn=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),zs=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Ks=u(require("axios")),Zs=u(require("lodash/uniqBy"));r();var Hs=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Xs=u(require("axios"));r();var ln=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),js=u(require("axios"));r();var Zo=u(require("react")),Lf=(0,Zo.createContext)({});r();r();var Ys=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Js=require("@terradharitri/sdk-dapp/utils");r();var ri=require("react");r();var oi=require("react"),ti=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var ai=(0,Ye.createContext)({});function Ho(){return(0,Ye.useContext)(ai)}r();var dn=require("react");r();r();var Mt=({knownAddresses:t,inputValue:e,key:o})=>!t||!e?!1:t.some(a=>{var p;return Boolean((p=a[o])==null?void 0:p.startsWith(e))});r();r();r();var mi=require("react"),di=require("@terradharitri/sdk-dapp/utils");r();var ii=require("react"),li=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");r();r();var pi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ci=u(require("axios"));r();var si=u(require("axios"));var fi=(0,So.createContext)({});function ko(){return(0,So.useContext)(fi)}r();var wo=u(require("react"));r();r();var eo=u(require("react")),Gi=require("@terradharitri/sdk-dapp/constants/index"),Vi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ui=u(require("bignumber.js")),Mi=require("formik");r();r();var Pe=u(require("react")),vi=require("formik"),bi=u(require("lodash/uniqBy"));r();r();var Je=u(require("react"));var gi=(0,Je.createContext)({});function Te(){return(0,Je.useContext)(gi)}r();r();var jo=require("react"),un=require("@terradharitri/sdk-dapp/constants/index");var Xo=require("@terradharitri/sdk-dapp/types/enums.types");function Ot(){let{networkConfig:t}=Te(),[e,o]=(0,jo.useState)(0);function n(){return N(this,null,function*(){let a=yield cn(),p=(a==null?void 0:a.price)||0;o(p)})}return(0,jo.useEffect)(()=>{![Xo.EnvironmentsEnum.mainnet,Xo.EnvironmentsEnum.testnet,Xo.EnvironmentsEnum.devnet].includes(t==null?void 0:t.id)||n()},[t==null?void 0:t.id]),{rewaLabel:t.rewaLabel,rewaPriceInUsd:e,digits:un.DIGITS}}r();var hy=(0,Pe.createContext)({});r();r();var vn=require("@terradharitri/sdk-dapp/constants/index"),Bi=require("formik");r();r();var Qe=u(require("react")),gn=require("@terradharitri/sdk-dapp/constants/index"),Ni=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Li=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Fi=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Pi=u(require("bignumber.js")),Di=require("formik");r();r();r();r();var hi=u(require("bignumber.js"));r();var xi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ti=u(require("bignumber.js"));r();r();var fn=require("react"),Si=require("@terradharitri/sdk-dapp/constants/index"),ki=require("@terradharitri/sdk-dapp/utils/smartContracts"),wi=u(require("bignumber.js")),Ei=require("formik");r();r();var Ci=require("@terradharitri/sdk-dapp/constants/index"),Ii=u(require("bignumber.js"));var kv=(0,Qe.createContext)({});var eb=(0,eo.createContext)({});r();r();var lo=u(require("react")),Oi=require("formik");var fb=(0,lo.createContext)({});var qi=(0,wo.createContext)({});function F(){return(0,wo.useContext)(qi)}r();r();var bn=u(require("react")),hn=require("react-select");r();var Ri=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ri));var x={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};var xn=t=>bn.default.createElement(hn.components.Control,T(b({},t),{className:x.receiverSelectControl}));r();r();var Eo=u(require("react")),Cn=require("@fortawesome/free-solid-svg-icons"),In=require("@fortawesome/react-fontawesome"),An=u(require("classnames")),Nn=require("react-select");r();r();var mo=(t,e)=>{let o=e.toLowerCase(),n=t.label.toLowerCase(),a=t.value.toLowerCase();return e?n.includes(o)||a.includes(o):!0};r();var Tn=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Sn=require("@terradharitri/sdk-dapp/utils"),Rt=t=>t?t.filter(n=>(0,Sn.addressIsValid)(n.address)).map(n=>{let a=n.username?String((0,Tn.trimUsernameDomain)(n.username)):n.address;return{value:n.address,label:a}}):[];r();var kn=({setOption:t,setAllValues:e})=>(n,a)=>{["input-blur","menu-close"].includes(a.action)||(e(n),n||t(null))};r();var wn=({setInputValue:t,setOption:e,changeAndBlurInput:o})=>a=>{!a||(e(a),o(a.value),a.value!==a.label?t(a.label):t(a.value))};r();var En=({options:t,usernameAccounts:e,knownAddresses:o,setFieldValue:n,setInputValue:a,setOption:p})=>m=>{var E,I,L,B;let d=t.find(M=>M.value===m&&M.value!==M.label),g=d==null?void 0:d.label,f,y,h=(E=e[m])==null?void 0:E.username;h&&(g=h,f=h,y=(I=e[m])==null?void 0:I.rawUsername);let v=o.find(M=>M.address===m);v!=null&&v.username&&(g=v==null?void 0:v.username,f=v==null?void 0:v.username,y=v==null?void 0:v.rawUsername);let k=g!=null?g:m;a(k),p({value:m,label:k}),n("receiver",(B=(L=e[m])==null?void 0:L.address)!=null?B:m),n("receiverUsername",f),n("rawReceiverUsername",y)};var Ln=t=>{let{selectProps:e,isDisabled:o,options:n}=t,{menuIsOpen:a,value:p,isLoading:i}=e,m=(0,Eo.useMemo)(()=>n.find(y=>{let h=y,v=p;return v?mo(h,v.label):null}),[p,n]),d=n.length===0&&!i,g=Boolean(p)&&!m,f=o||d||g;return i?Eo.default.createElement(In.FontAwesomeIcon,{icon:Cn.faSpinner,spin:!0,className:x.receiverSelectSpinner}):Eo.default.createElement(Nn.components.DropdownIndicator,T(b({},t),{className:(0,An.default)(x.receiverSelectIndicator,{[x.expanded]:a,[x.hidden]:f})}))};r();r();var Pn=u(require("react")),Dn=require("@terradharitri/sdk-dapp/utils"),Bn=u(require("classnames")),Gn=require("react-select");r();var $t=u(require("react")),$i=require("@terradharitri/sdk-dapp/constants/index");r();r();var Fn=(t,e)=>{let o=t.current;if(!o||!o.state.focusedOption)return!1;let n=o.state.focusedOption,a=n.label.toLowerCase(),p=n.value.toLowerCase(),i=a!==p,m=i&&a.startsWith(e.toLowerCase());return i&&!e?!0:m};var Vn=t=>e=>{let{selectProps:o,value:n}=e,{inputValue:a,menuIsOpen:p}=o,{receiverUsernameInfo:{receiverUsername:i}}=F(),m=Fn(t,a),d=(0,Dn.addressIsValid)(String(n)),g=Boolean(i)||m,f=d&&p||!d&&a;return Pn.default.createElement(Gn.components.Input,T(b({},e),{"data-testid":"receiver",className:(0,Bn.default)(x.receiverSelectInput,{[x.visible]:f,[x.spaced]:g})}))};r();r();var Un=u(require("react")),Mn=require("react-select");var On=t=>Un.default.createElement(Mn.components.Menu,T(b({},t),{className:x.receiverSelectMenu}));r();r();var z=u(require("react")),Jo=require("@terradharitri/sdk-dapp/UI/Trim"),Co=u(require("classnames")),$n=require("react-select");r();var{default:oo}=(Rn(),vo(qn));var Wn=t=>{let{selectProps:e,focusedOption:o}=t,{value:n,inputValue:a}=e,p=o,i=p?p.label.toLowerCase():null,m=p&&p.label!==p.value,f=(i&&(!n||n&&a)?i.startsWith(a.toLowerCase()):!1)&&p?p.label.replace(p.label.substring(0,a.length),a):null,y=f&&!a,h=f&&a.length<f.length/2,v=f&&Boolean(a)&&h,k=f&&Boolean(a);return z.default.createElement(z.default.Fragment,null,v&&!m&&z.default.createElement("div",{className:(0,Co.default)(x.receiverSelectAutocomplete,x.receiverSelectAutocompleteUntrimmed)},f),k&&m&&z.default.createElement("div",{className:(0,Co.default)(x.receiverSelectAutocomplete,x.receiverSelectAutocompleteUsername)},z.default.createElement(oo,{className:x.receiverSelectAutocompleteIcon}),f,z.default.createElement("span",{className:x.receiverSelectAutocompleteWrapper},"(",z.default.createElement(Jo.Trim,{text:p.value}),")")),y&&z.default.createElement("span",{className:(0,Co.default)(x.receiverSelectAutocomplete,{[x.receiverSelectAutocompleteUsername]:m})},m?z.default.createElement(z.default.Fragment,null,z.default.createElement("span",null,z.default.createElement(oo,{className:(0,Co.default)(x.receiverSelectAutocompleteIcon,x.receiverSelectAutocompleteIconMuted)}),p.label),z.default.createElement("span",{className:x.receiverSelectAutocompleteWrapper},"(",z.default.createElement(Jo.Trim,{text:p.value}),")")):z.default.createElement(Jo.Trim,{text:f})),z.default.createElement($n.components.MenuList,T(b({},t),{className:x.receiverSelectList})))};r();r();var Se=u(require("react")),Wt=require("@terradharitri/sdk-dapp/UI/Trim"),Kn=u(require("classnames")),Zn=require("react-select");r();r();var Io=u(require("react"));r();var Ki=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ki));var zn={highlight:"dapp-core-component__styles-modules__highlight"};var Qo=({highlight:t,text:e=""})=>{let o=e.split(" "),n=t.toLowerCase(),a=new RegExp(`(${n})`,"gi"),p=o.map(i=>i.split(a).filter(m=>m));return Io.default.createElement("span",{className:zn.highlight},p.map((i,m)=>{let d=`${i}-${m}`;return Io.default.createElement("span",{key:d},i.map((g,f)=>{let y=g.toLowerCase()===n,h=n&&y,v=`${g}-${f}`;return h?Io.default.createElement("strong",{key:v},g):Io.default.createElement("span",{key:v},g)}))}))};var Hn=t=>{let{isFocused:e,data:o,selectProps:n}=t,{inputValue:a}=n,p=o,i=p.value!==p.label;return Se.default.createElement(Zn.components.Option,T(b({},t),{className:(0,Kn.default)(x.receiverSelectOption,{[x.focused]:e})}),i?Se.default.createElement(Se.default.Fragment,null,Se.default.createElement("span",{className:x.receiverSelectOptionUsername},Se.default.createElement(oo,{className:x.receiverSelectOptionUsernameIcon}),Se.default.createElement(Qo,{text:p.label,highlight:a})),Se.default.createElement("span",{className:x.receiverSelectOptionNameWrapper},"(",Se.default.createElement(Wt.Trim,{text:p.value,className:x.receiverSelectOptionName}),")")):Se.default.createElement(Wt.Trim,{text:p.value,className:x.receiverSelectOptionName}))};r();r();var Xn=u(require("react")),jn=u(require("classnames")),Yn=require("react-select");var Jn=t=>{let{selectProps:e,isFocused:o,className:n}=t,{menuIsOpen:a}=e;return Xn.default.createElement(Yn.components.SelectContainer,T(b({},t),{className:(0,jn.default)(n,{[x.expanded]:a,[x.focused]:o&&a})}))};r();r();var ke=u(require("react")),zt=require("@terradharitri/sdk-dapp/UI/Trim"),Qn=require("@terradharitri/sdk-dapp/utils"),ea=u(require("classnames")),oa=require("react-select");var ta=t=>{let{selectProps:e,isDisabled:o}=t,{value:n,menuIsOpen:a}=e,p=n,{receiverInfo:{receiver:i},receiverUsernameInfo:{receiverUsername:m}}=F(),d=m!=null?m:p&&p.value!==p.label,g=p?{value:i!=null?i:p.value,label:p.label}:null,f=g&&(d||!d&&!a)&&(0,Qn.addressIsValid)(g.value);return ke.default.createElement(oa.components.ValueContainer,T(b({},t),{className:x.receiverSelectValue}),f&&ke.default.createElement("span",{className:(0,ea.default)(x.receiverSelectSingle,{[x.disabled]:o})},d?ke.default.createElement(ke.default.Fragment,null,ke.default.createElement("span",{className:x.receiverSelectSingleUsername},ke.default.createElement(oo,{className:x.receiverSelectSingleUsernameIcon}),g.label),ke.default.createElement("span",{className:x.receiverSelectSingleTrimWrapper},"(",ke.default.createElement(zt.Trim,{text:g.value,className:x.receiverSelectSingleTrim}),")")):ke.default.createElement(zt.Trim,{text:g.value,className:x.receiverSelectSingleTrim})),t.children)};r();r();var ra=require("formik");var et=()=>{let{receiverInfo:{receiverError:t,isReceiverInvalid:e},receiverUsernameInfo:{receiverUsernameError:o,isReceiverUsernameInvalid:n,receiverUsername:a}}=F(),{touched:{receiver:p}}=(0,ra.useFormikContext)(),i=e&&p||n;return a!=null&&a.startsWith("drt1")?{isInvalid:e,receiverErrorDataTestId:"receiverError",error:t}:{isInvalid:i,receiverErrorDataTestId:n?"receiverUsernameError":"receiverError",error:n?o:t}};r();r();var aa=require("@terradharitri/sdk-dapp/utils"),pa=require("formik");r();r();var na=({knownAddresses:t,inputValue:e})=>!t||!e?!1:t.filter(n=>{var m;let a=(m=n.username)!=null?m:n.address,p=n.address;return mo({label:a,value:p,data:{label:a,value:p}},e)}).length>0;var ca=({menuIsOpen:t})=>{let{isInvalid:e}=et(),{values:{nft:o}}=(0,pa.useFormikContext)(),{showUsernameError:n,isUsernameLoading:a,isUsernameDebouncing:p,usernameIsAmongKnown:i,searchQueryIsAddress:m}=ko(),{receiverInputValue:d,knownAddresses:g}=Ho(),f=Mt({key:"address",knownAddresses:g,inputValue:d}),y=na({inputValue:d,knownAddresses:g}),h=m&&(!f||!t)&&!(0,aa.addressIsValid)(d),v=Boolean(n&&!(t&&f)&&!(t&&i));return{isAddressError:h||(o?e:!1),isUsernameError:v,isRequiredError:e&&!v&&!a&&!p&&!h&&!y&&!d,isReceiverDropdownOpened:d&&y&&t}};var Zi=t=>{let e=(0,P.useRef)(null),{className:o}=t,{setFieldValue:n}=(0,sa.useFormikContext)(),{receiverInfo:{scamError:a,fetchingScamAddress:p,receiverInputValue:i,setReceiverInputValue:m,knownAddresses:d,receiver:g,onBlurReceiver:f,onChangeReceiver:y},receiverUsernameInfo:{receiverUsername:h},formInfo:{readonly:v}}=F(),[k,E]=(0,P.useState)(!1),[I,L]=(0,P.useState)(g?{label:g,value:g}:null),{receiverErrorDataTestId:B,error:M}=et(),{isAddressError:oe,isUsernameError:Y,isRequiredError:ne,isReceiverDropdownOpened:de}=ca({menuIsOpen:k}),{usernameAccounts:C,isUsernameLoading:ae}=ko(),te=()=>{f(new Event("blur"));let q=d==null?void 0:d.find(ro=>ro.username===i&&ro.address===g);q&&(n("receiver",q.address),n("receiverUsername",q.username),n("rawReceiverUsername",q.rawUsername))},Z=d==null?void 0:d.find(q=>q.username===i&&q.address===g),fe=(0,P.useMemo)(()=>Rt(d),[d]),ue=Z?Rt([Z]):fe,A=En({setFieldValue:n,setInputValue:m,setOption:L,options:ue,knownAddresses:d!=null?d:[],usernameAccounts:C}),D=(0,P.useCallback)(kn({setAllValues:A,setOption:L}),[]),H=(0,P.useCallback)(q=>{y(q?q.trim():""),setTimeout(te)},[]),Ce=wn({changeAndBlurInput:H,setOption:L,setInputValue:m}),Me=(0,P.useMemo)(()=>Vn(e),[e]);(0,P.useEffect)(()=>{if(!g)return;let q=Object.keys(C).find(ro=>{var go;return((go=C[ro])==null?void 0:go.address)===g});A(q!=null?q:g),q&&m(q)},[C,g]);let ze=oe||Y||ne,bt=ze&&!k;return P.default.createElement("div",{className:(0,ot.default)(x.receiver,o)},P.default.createElement("div",{className:w.label,"data-testid":"receiverLabel","data-loading":p},"Receiver"),P.default.createElement(ia.default,{value:I,onInputChange:D,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:X("receiver",v),options:ue,filterOption:mo,noOptionsMessage:()=>null,onChange:Ce,onBlur:te,isMulti:!1,ref:e,inputValue:i,onMenuClose:()=>E(!1),onMenuOpen:()=>E(!0),components:{Menu:On,Input:Me,Control:xn,ValueContainer:ta,DropdownIndicator:Ln,SelectContainer:Jn,MenuList:Wn,Option:Hn,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,ot.default)(x.receiverSelectContainer,{[x.opened]:de,[x.invalid]:ze||a})}),bt&&P.default.createElement("div",{"data-testid":B,className:w.error},M),ae&&P.default.createElement("div",{className:x.loading},"Loading..."),h&&P.default.createElement("span",{className:x.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",P.default.createElement(Kt.FontAwesomeIcon,{icon:tt.faCheck,className:x.foundIcon})),a&&P.default.createElement("div",{"data-testid":"receiverScam",className:(0,ot.default)(w.error,w.scam)},P.default.createElement("span",null,P.default.createElement(Kt.FontAwesomeIcon,{icon:tt.faExclamationTriangle}),P.default.createElement("small",null,a))))};r();r();var se=u(require("react")),la=u(require("bignumber.js")),rt=u(require("classnames"));r();var Hi=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hi));var Oe={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"};var Xi=t=>{let{className:e}=t,{formInfo:{readonly:o},amountInfo:n,tokensInfo:a}=F(),{amount:p,error:i,onFocus:m,onBlur:d,onChange:g,isInvalid:f,onMaxClicked:y,maxAmountAvailable:h,isMaxButtonVisible:v}=n,{nft:k}=a,E=k!=null&&k.balance?new la.default(k.balance).isGreaterThan(0):!1,I=L=>{L.preventDefault(),y()};return se.default.createElement("div",{className:(0,rt.default)(Oe.amount,e)},se.default.createElement("div",{className:Oe.label},se.default.createElement("label",{htmlFor:"amount",className:w.label},"Amount"),E&&k&&se.default.createElement("div",{"data-value":`${h} ${k.identifier}`,className:(0,rt.default)(Oe.balance,e)},se.default.createElement("span",null,"Available:")," ",se.default.createElement("span",{"data-testid":`available-${k.identifier}`,className:Oe.available},se.default.createElement("span",{className:Oe.amount},h)," ",k.ticker))),se.default.createElement("div",{className:Oe.wrapper},se.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:p,disabled:X("amount",o),onFocus:m,onBlur:d,onChange:g,autoComplete:"off",className:(0,rt.default)(w.input,{[w.invalid]:f,[w.disabled]:X("amount",o)})}),v&&se.default.createElement("a",{href:"/","data-testid":"maxBtn",className:Oe.max,onClick:I,onMouseDown:L=>{L.preventDefault()}},"Max")),f&&se.default.createElement("div",{className:w.error,"data-testid":"amountError"},i))};r();r();var J=u(require("react")),at=require("@fortawesome/free-solid-svg-icons"),Jt=require("@fortawesome/react-fontawesome"),wa=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Qt=u(require("classnames")),Ea=u(require("react-collapsed"));r();var Be=u(require("react")),fa=require("@fortawesome/free-solid-svg-icons"),ga=require("@fortawesome/react-fontawesome"),ya=u(require("bignumber.js")),Ht=u(require("classnames")),va=require("react-number-format");r();r();var qe=require("@terradharitri/sdk-dapp/constants/index"),ma=require("@terradharitri/sdk-dapp/utils/validation"),De=u(require("bignumber.js")),da=(t,e)=>{let o=e!=null?e:qe.DIGITS;if((0,ma.stringIsFloat)(t)){if(new De.default(t).isZero())return"0";let a=new De.default(t).toFormat(o);return a=parseFloat(a)>0?a:new De.default(t).toFormat(qe.DIGITS),a=parseFloat(a)>0?a:new De.default(t).toFormat(qe.DIGITS+2),a=parseFloat(a)>0?a:new De.default(t).toFormat(qe.DIGITS+4),a=parseFloat(a)>0?a:new De.default(t).toFormat(qe.DIGITS+6),a=parseFloat(a)>0?a:new De.default(t).toFormat(qe.DIGITS+10),parseFloat(a)>0?a:new De.default(t).toFormat(qe.DIGITS+14)}return"0"};r();var Zt=t=>t.replace(/,/g,"");r();var nt=require("react"),ji={value:"",count:0},ua=(t,e)=>{let[o,n]=(0,nt.useState)(ji);return(0,nt.useEffect)(()=>{let p=setTimeout(()=>{n(t)},e);return()=>clearTimeout(p)},[t.count]),o};r();var _a=u(require("bignumber.js")),uo=t=>{let[e,o]=t.split(""),n=new _a.default(e).isZero();return Boolean(n&&o&&!(o==="."))};r();var Yi=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yi));var W={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"};var Xt=()=>{let{formInfo:t,gasInfo:e}=F(),{readonly:o}=t,{defaultGasLimit:n,onResetGasLimit:a,onChangeGasLimit:p,onBlurGasLimit:i,gasLimit:m,gasLimitError:d,isGasLimitInvalid:g}=e,f=E=>{E.preventDefault(),a()},y=({value:E,floatValue:I})=>(!I||!(0,ya.default)(I).isNaN())&&!uo(E),h=E=>{p(E.value,!0)},v=m!==n&&!o,k=X("gasLimit",o);return Be.default.createElement("div",{className:W.gas},Be.default.createElement("label",{className:w.label,htmlFor:"gasLimit"},"Gas Limit"),Be.default.createElement("div",{className:W.wrapper},Be.default.createElement(va.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:k,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:i,onValueChange:h,required:!0,isAllowed:y,thousandSeparator:",",thousandsGroupStyle:"thousand",value:m,valueIsNumericString:!0,allowNegative:!1,className:(0,Ht.default)(w.input,W.input,{[w.disabled]:k,[w.invalid]:g,[W.spaced]:v})}),v&&Be.default.createElement("div",{className:W.actions},Be.default.createElement("div",{onClick:f,"data-testid":"gasLimitResetBtn",className:(0,Ht.default)(W.action,{[W.disabled]:k})},Be.default.createElement(ga.FontAwesomeIcon,{icon:fa.faUndo,className:W.icon}))),g&&Be.default.createElement("div",{className:w.error,"data-testid":`${"gasLimit"}Error`},d)))};r();r();var Ge=u(require("react")),ba=require("@fortawesome/free-solid-svg-icons"),ha=require("@fortawesome/react-fontawesome"),xa=u(require("bignumber.js")),jt=u(require("classnames")),Ta=require("react-number-format");var Yt=()=>{let{networkConfig:t}=Te(),{gasInfo:e,formInfo:o}=F(),{readonly:n}=o,{rewaLabel:a}=t,{gasPrice:p,gasPriceError:i,isGasPriceInvalid:m,onChangeGasPrice:d,onBlurGasPrice:g,onResetGasPrice:f}=e,y=p!==To&&!n,h=X("gasPrice",n),v=({value:I,floatValue:L})=>(!L||!(0,xa.default)(L).isNaN())&&!uo(I),k=I=>{I.preventDefault(),f()},E=I=>{d(I.value,!0)};return Ge.default.createElement("div",{className:W.gas},Ge.default.createElement("label",{className:w.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),Ge.default.createElement("div",{className:W.wrapper},Ge.default.createElement(Ta.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:h,id:"gasPrice",inputMode:"decimal",isAllowed:v,name:"gasPrice",onBlur:g,onValueChange:E,required:!0,suffix:` ${a}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:p,valueIsNumericString:!0,allowNegative:!1,className:(0,jt.default)(w.input,W.input,{[w.disabled]:h,[w.invalid]:m,[W.spaced]:y})}),y&&Ge.default.createElement("div",{className:W.actions},Ge.default.createElement("div",{onClick:k,className:(0,jt.default)(W.action,{[W.disabled]:h})},Ge.default.createElement(ha.FontAwesomeIcon,{icon:ba.faUndo,className:W.icon})))),m&&Ge.default.createElement("div",{className:w.error,"data-testid":`${"gasPrice"}Error`},i))};r();var Sa=u(require("react"));r();var Ji=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ji));var we={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"};var ka=({feeLimit:t,rewaPriceInUsd:e})=>t===$?null:Sa.default.createElement("span",{className:we.fiat,"data-testid":"feeInFiat"},"(",Wr({feeLimit:t,rewaPriceInUsd:e}),")");var Qi=({className:t})=>{let{gasInfo:e,tokensInfo:o}=F(),{feeLimit:n,gasCostLoading:a,gasPriceError:p,gasLimitError:i}=e,{rewaPriceInUsd:m,rewaLabel:d}=o,[g,f]=(0,J.useState)(Boolean(p||i)),{getCollapseProps:y,getToggleProps:h}=(0,Ea.default)({isExpanded:g}),v=()=>{f(k=>!k)};return J.default.createElement("div",{className:(0,Qt.default)(we.fee,t)},J.default.createElement("label",{className:w.label},"Fee"),J.default.createElement("div",b({className:we.trigger},h({onClick:v})),J.default.createElement("span",{className:we.limit,"data-testid":"feeLimit"},J.default.createElement(wa.FormatAmount,{value:n,showLastNonZeroDecimal:!0,rewaLabel:d})),a&&J.default.createElement(Jt.FontAwesomeIcon,{icon:at.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),J.default.createElement(ka,{rewaPriceInUsd:m,feeLimit:n}),J.default.createElement(Jt.FontAwesomeIcon,{icon:at.faChevronRight,className:(0,Qt.default)(we.arrow,{[we.active]:g})})),J.default.createElement("div",b({className:we.expandable},y()),J.default.createElement("div",{className:we.content},J.default.createElement(Yt,null),J.default.createElement(Xt,null))))};r();r();var Ve=u(require("react")),Pa=u(require("@terradharitri/sdk-dapp/constants/index")),Da=u(require("classnames")),it=u(require("react-select"));r();var el=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(el));var er={selectTokenContainer:"dapp-core-component__styles-module__selectTokenContainer"};r();r();var O=u(require("react")),Ca=require("@fortawesome/free-solid-svg-icons"),Ia=require("@fortawesome/react-fontawesome"),Aa=u(require("@terradharitri/sdk-dapp/constants/index")),Na=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),La=u(require("classnames"));r();var ol=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ol));var to={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};var nl=(st(),vo(ct)).default,Fa=({RewaIcon:t,inDropdown:e=!1,isRewa:o,nftTokenDetails:n,nftType:a,token:p})=>{var L,B;let{name:i,identifier:m,balance:d,decimals:g}=p,f=((L=p.assets)==null?void 0:L.svgUrl)||((B=p.assets)==null?void 0:B.pngUrl)||"",y=f?28:20,[h,v]=(0,O.useState)(i);(0,O.useEffect)(()=>{var oe;((oe=n==null?void 0:n.uris)==null?void 0:oe.some(Y=>{let ne=c.Buffer.from(String(Y),"base64").toString(),{found:de}=qr(ne,n==null?void 0:n.scamInfo);return de}))||v(i)},[i]);let k=O.default.createElement(Ia.FontAwesomeIcon,{icon:Ca.faDiamond});a==re.NftEnumType.NonFungibleDCDT&&(k=O.default.createElement("div",{className:"nft-type","data-testid":`${m}-type-nft`},"NFT")),a===re.NftEnumType.SemiFungibleDCDT&&(k=O.default.createElement("div",{className:"nft-type","data-testid":`${m}-type-sft`},"SFT"));let E=!e&&a!==re.NftEnumType.NonFungibleDCDT,I=O.default.createElement("div",{className:to.tokenElementCircle},k);return f&&(I=O.default.createElement("img",{className:to.tokenElementCircle,src:f,alt:i,height:y})),o&&(I=O.default.createElement("div",{className:to.tokenElementCircle},t?O.default.createElement(t,{height:36}):O.default.createElement(nl,{height:36}))),O.default.createElement("div",{className:(0,La.default)(w.value,to.tokenElement)},O.default.createElement("div",{className:to.tokenElementWrapper},I),O.default.createElement("div",{"data-testid":"tokenName"},O.default.createElement("span",{"data-testid":`${m}-element`},O.default.createElement("span",null,h)," ",O.default.createElement("span",{className:to.tokenElementIdentifier},m)),E&&O.default.createElement(Na.FormatAmount,{rewaLabel:m,value:d||$,digits:a===re.NftEnumType.SemiFungibleDCDT?0:Aa.DIGITS,token:m,showLabel:!1,decimals:g,"data-testid":`${m}-balance`})))};var al=t=>Ve.default.createElement("div",{className:`token-option ${t.isSelected?"is-selected":""}`,"data-testid":`${t.value}-option`},Ve.default.createElement(it.components.Option,b({},t))),pl=({className:t,label:e})=>{let{formInfo:o,accountInfo:n,tokensInfo:a}=F(),{readonly:p}=o,{balance:i}=n,{getTokens:m,areTokensLoading:d,tokens:g,tokenId:f,rewaLabel:y,RewaIcon:h,tokenIdError:v,onChangeTokenId:k,isTokenIdInvalid:E}=a,I=({token:C})=>Ve.default.createElement(Fa,{inDropdown:!0,token:C,isRewa:C.identifier===y,RewaIcon:h}),B=[{name:"DharitrI eGold",identifier:y,balance:i,decimals:Pa.DECIMALS,ticker:""},...g].map(C=>({value:C.identifier,label:C.name,assets:C.assets,token:C}));function M(){return N(this,null,function*(){yield m()})}let oe=C=>{C&&k(C.value)},Y=({value:C,label:ae},te)=>{if(Boolean(te)){let Z=te.trim().toLowerCase(),fe=ue=>ue.toLowerCase().indexOf(Z)>-1;return fe(C)||fe(ae)}return!0},ne=window.getComputedStyle(document.documentElement),de=Rr({docStyle:ne});return Ve.default.createElement("div",{className:(0,Da.default)(er.selectTokenContainer,t)},e&&Ve.default.createElement("label",{htmlFor:"tokenId","data-testid":"tokenIdLabel",className:er.selectTokenLabel},e),Ve.default.createElement(it.default,{className:"selectToken",classNamePrefix:"selectToken",components:{Option:al},filterOption:Y,formatOptionLabel:I,inputId:"tokenId",isDisabled:X("tokenId",p),isLoading:d,name:"tokenId",onChange:oe,onMenuOpen:M,openMenuOnFocus:!0,options:B,styles:t?{}:de,value:B.find(({value:C})=>C===f)||void 0}),E&&Ve.default.createElement("div",{className:w.error,"data-testid":"tokenIdError"},Ve.default.createElement("small",null,v)))};r();r();var le=u(require("react")),gt=u(require("classnames"));r();var cl=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cl));var Ee={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};r();r();r();var G=u(require("react")),Ga=require("@terradharitri/sdk-dapp/utils/validation"),lt=u(require("bignumber.js")),or=u(require("classnames")),Va=require("react-number-format");r();var sl=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sl));var Ao={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};var il=500,Ba=1e13,ll=({"data-testid":t,InfoDustComponent:e,disabled:o,handleBlur:n,handleChange:a,name:p,onDebounceChange:i,onFocus:m,onKeyDown:d,placeholder:g,required:f,usdPrice:y,value:h,usdValue:v,className:k,autoFocus:E,suffix:I})=>{let L=(0,G.useRef)(null),[B,M]=(0,G.useState)(),[oe,Y]=(0,G.useState)(!1),[ne,de]=(0,G.useState)({value:h,count:0}),[C,ae]=(0,G.useState)(),te=ua(ne,il),Z=A=>{A.stopPropagation(),Y(!0);let D=Zt(A.target.value),H=(0,lt.default)(D).isLessThanOrEqualTo(Ba);if((D===""||H)&&(M(D),A.target.value=D,a(A),i)){let Ce={value:D,count:ne.count+1};de(Ce)}},fe=()=>{if(v)return ae(`$${v}`);if(!y||!h)return ae(void 0);let A=Zt(h);if(!(h!==""&&(0,Ga.stringIsFloat)(A))||A==="")return ae(void 0);let H=da(new lt.default(A).times(y!=null?y:0).toString(10),2);ae(`$${H}`)},ue=({value:A,floatValue:D})=>(!D||(0,lt.default)(D).isLessThanOrEqualTo(Ba))&&!uo(A);return(0,G.useEffect)(()=>{i&&oe&&(Y(!1),i(te.value))},[te]),(0,G.useEffect)(fe,[h,v,y]),(0,G.useEffect)(()=>{h!==B&&M(h)},[h]),G.default.createElement("div",{ref:L,className:(0,or.default)(Ao.amountHolder,{[Ao.showUsdValue]:Boolean(C)},k)},G.default.createElement(Va.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":t||p,decimalSeparator:".",disabled:Boolean(o),id:p,inputMode:"decimal",isAllowed:ue,name:p,onBlur:n,onChange:Z,onFocus:m,onKeyDown:d,placeholder:g,required:f,thousandSeparator:",",thousandsGroupStyle:"thousand",value:B,suffix:I,valueIsNumericString:!0,allowNegative:!1,autoFocus:E,className:(0,or.default)(w.input,Ao.amountInput,{[w.disabled]:Boolean(o)})}),C&&G.default.createElement("span",{className:Ao.amountHolderUsd},G.default.createElement("small",{"data-testid":`tokenPrice_${y}`},C!=="$0"?G.default.createElement(G.default.Fragment,null,"\u2248 "):G.default.createElement(G.default.Fragment,null),C),e))},Ua=(0,G.memo)(ll,(t,e)=>t.value===e.value&&t.usdPrice===e.usdPrice&&t.className===e.className&&t.disabled===e.disabled&&t.usdValue===e.usdValue);r();r();var tr=u(require("react"));r();r();var _o=u(require("react")),Ma=require("@fortawesome/free-solid-svg-icons"),Oa=require("@fortawesome/react-fontawesome"),qa=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Ra=require("react-tooltip"),nS=require("react-tooltip/dist/react-tooltip.css");r();var ml=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ml));var mt={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"};var $a=({rewaLabel:t})=>_o.default.createElement("div",{className:mt.infoDust},_o.default.createElement(Ra.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:mt.infoDustTooltip},"A minimal amount of"," ",_o.default.createElement(qa.FormatAmount,{rewaLabel:t,value:ho,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),_o.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:mt.infoDustTrigger},_o.default.createElement(Oa.FontAwesomeIcon,{icon:Ma.faInfoCircle,className:"i-icon"})));var Wa=({rewaLabel:t,amount:e,maxAmountMinusDust:o,isMaxClicked:n,tokenId:a})=>e===o&&n&&a===t?tr.default.createElement("span",{style:{marginLeft:"0.2rem"}},tr.default.createElement($a,{rewaLabel:t})):null;r();r();var Xa=u(require("react")),ja=require("@terradharitri/sdk-dapp/constants"),nr=u(require("bignumber.js")),Ya=u(require("classnames"));r();var rr=u(require("bignumber.js"));var za=t=>{let e=new rr.default(t!=null?t:"0"),o=new rr.default(ho),n=e.minus(o);return n.isGreaterThan(0)?n.toString(10):"0"};r();var dl=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dl));var Ka={max:"dapp-core-component__maxButton-module__max"};r();var Re=require("@terradharitri/sdk-dapp/constants"),Za=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Ha=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),fo=({amount:t="0",decimals:e=0,digits:o=Re.DIGITS,addCommas:n=!1,showLastNonZeroDecimal:a=!1})=>{if(t==null||!(0,Ha.stringIsInteger)(t))return"0";let p=m=>(0,Za.formatAmount)({input:t,digits:m,decimals:e,addCommas:n,showLastNonZeroDecimal:a}),i=p(o);return i=parseFloat(i)>0?i:p(Re.DIGITS),i=parseFloat(i)>0?i:p(Re.DIGITS+2),i=parseFloat(i)>0?i:p(Re.DIGITS+4),i=parseFloat(i)>0?i:p(Re.DIGITS+6),i=parseFloat(i)>0?i:p(Re.DIGITS+10),parseFloat(i)>0?i:p(Re.DIGITS+14)};var Ja=({token:t,rewaLabel:e,inputAmount:o,className:n,onMaxClick:a})=>{var f;let p=(t==null?void 0:t.identifier)===e,i=(f=t==null?void 0:t.balance)!=null?f:"0";if(i==="0")return null;let m=fo({amount:p?za(i):i,decimals:(t==null?void 0:t.decimals)||ja.DECIMALS}),d=new nr.default(o).isEqualTo(new nr.default(m)),g=y=>{y.preventDefault(),a==null||a(m)};return d?null:Xa.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,Ya.default)(Ka.max,n),onClick:g,onMouseDown:y=>{y.preventDefault()}},"Max")};r();r();var ie=u(require("react")),Fp=u(require("classnames")),Pp=u(require("react-select"));var ir={};Do(ir,{Control:()=>vl,IndicatorsContainer:()=>hl,Input:()=>fl,Menu:()=>yl,MenuList:()=>gl,DharitrIIcon:()=>Ap,Placeholder:()=>bl,SmallLoader:()=>ul,ValueComponent:()=>xp,getOption:()=>cr,getSingleValue:()=>sr,getValueContainer:()=>pr});r();r();var ar=u(require("react")),Qa=require("@fortawesome/free-solid-svg-icons"),ep=require("@fortawesome/react-fontawesome"),ul=({show:t,color:e})=>t?ar.default.createElement("div",{className:"d-flex"},ar.default.createElement(ep.FontAwesomeIcon,{icon:Qa.faSpinner,className:`fa-spin fast-spin ${e||"text-primary"}`})):null;r();r();var op=u(require("react")),tp=require("react-select");r();var _l=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_l));var S={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var fl=t=>op.default.createElement(tp.components.Input,T(b({},t),{className:S.dropdown,"data-testid":"tokenSelectInput"}));r();var rp=u(require("react")),np=require("react-select");var gl=t=>{let n=t,{rx:e}=n,o=yr(n,["rx"]);return rp.default.createElement(np.components.MenuList,T(b({},o),{className:S.list}))};r();var dt=u(require("react")),ap=require("@fortawesome/free-solid-svg-icons"),pp=require("@fortawesome/react-fontawesome"),cp=require("react-select");var yl=t=>dt.default.createElement(cp.components.Menu,T(b({},t),{className:S.menu}),t.selectProps.isLoading?dt.default.createElement("div",{className:S.loading},dt.default.createElement(pp.FontAwesomeIcon,{icon:ap.faCircleNotch,className:"fa-spin",size:"lg"})):t.children);r();var sp=u(require("react")),ip=require("react-select");var vl=t=>sp.default.createElement(ip.components.Control,T(b({},t),{className:S.control}));r();var lp=u(require("react")),mp=u(require("classnames")),dp=require("react-select");var bl=t=>lp.default.createElement(dp.components.Placeholder,T(b({},t),{className:(0,mp.default)(S.placeholder,{[S.focused]:t.isFocused})}));r();var up=u(require("react")),_p=u(require("classnames")),fp=require("react-select");var hl=t=>up.default.createElement(fp.components.IndicatorsContainer,T(b({},t),{className:(0,_p.default)(S.indicator,{[S.expanded]:t.selectProps.menuIsOpen})}));r();var Q=u(require("react")),gp=require("@fortawesome/free-solid-svg-icons"),yp=require("@fortawesome/react-fontawesome"),vp=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),bp=u(require("classnames")),hp=require("react-select");var xl=(st(),vo(ct)).default,xp=({RewaIcon:t,tokenId:e,icon:o})=>{let{isRewa:n}=(0,vp.getIdentifierType)(e);return n?Q.default.createElement("span",{className:S.asset},t?Q.default.createElement(t,{className:S.diamond}):Q.default.createElement(xl,{className:S.diamond})):o?Q.default.createElement("img",{src:o,className:S.asset}):Q.default.createElement(yp.FontAwesomeIcon,{icon:gp.faDiamond,className:S.asset})},Tl=({children:t})=>Q.default.createElement("div",{className:S.wrapper},t),pr=(t,e,o)=>n=>{var f,y;let{selectProps:a,isDisabled:p,children:i}=n,m=a.value,d=(y=(f=m==null?void 0:m.assets)==null?void 0:f.svgUrl)!=null?y:null,g=(0,Q.useMemo)(()=>{let h=String(m==null?void 0:m.token.usdPrice);return h!=null&&h.includes("$")?m==null?void 0:m.token.usdPrice:`$${m==null?void 0:m.token.usdPrice}`},[m==null?void 0:m.token.usdPrice]);return Q.default.createElement(hp.components.ValueContainer,T(b({},n),{className:S.container}),Q.default.createElement("div",{className:(0,bp.default)(S.icon,e)},Q.default.createElement(xp,{RewaIcon:o,rewaLabel:t,icon:d,isDisabled:p,tokenId:m==null?void 0:m.value})),Q.default.createElement("div",{className:S.payload},Q.default.createElement(Tl,null,i,(m==null?void 0:m.token.usdPrice)&&Q.default.createElement("small",{className:S.price},g))))};r();var U=u(require("react")),Tp=require("@fortawesome/free-solid-svg-icons"),Sp=require("@fortawesome/react-fontawesome"),kp=require("@terradharitri/sdk-dapp/constants"),wp=require("@terradharitri/sdk-dapp/UI/UsdValue"),Ep=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Cp=u(require("classnames")),Ip=require("react-select");var{default:Ap}=(st(),vo(ct)),cr=({RewaIcon:t,TokenTickerIcon:e,showBalanceUsdValue:o,showTokenPrice:n})=>a=>{var I,L,B,M;let{data:p,isSelected:i,isFocused:m,isDisabled:d,selectProps:g}=a,f=p,{isRewa:y}=(0,Ep.getIdentifierType)(f.value),h=f.token.assets?f.token.assets.svgUrl:null,v=fo({amount:f.token.balance,decimals:f.token.decimals||kp.DECIMALS,addCommas:!0}),k=(L=(I=f.token)==null?void 0:I.usdPrice)==null?void 0:L.toString(),E=(M=(B=f.token)==null?void 0:B.valueUSD)==null?void 0:M.toString();return U.default.createElement("div",{"data-testid":`${a.value}-option`},U.default.createElement(Ip.components.Option,T(b({},a),{className:(0,Cp.default)(S.option,{[S.selected]:i||m,[S.disabled]:d})}),U.default.createElement("div",{className:S.image},y?U.default.createElement("span",{className:S.icon},t?U.default.createElement(t,null):U.default.createElement(Ap,null)):h?U.default.createElement("img",{src:h,className:S.icon}):U.default.createElement("span",{className:S.icon},U.default.createElement(Sp.FontAwesomeIcon,{icon:Tp.faDiamond,className:S.diamond}))),U.default.createElement("div",{className:S.info},U.default.createElement("div",{className:S.left},U.default.createElement("div",{className:S.ticker},U.default.createElement("span",{className:S.value},g.inputValue?U.default.createElement(Qo,{text:f.token.ticker,highlight:g.inputValue}):f.token.ticker),e&&U.default.createElement(e,{token:f.token})),n&&U.default.createElement("small",{className:S.price},k)),U.default.createElement("div",{className:S.right},U.default.createElement("span",{className:S.value},v),o&&E&&U.default.createElement(wp.UsdValue,{usd:1,decimals:4,amount:E,"data-testid":"token-price-usd-value",className:S.price,addEqualSign:!1}))),U.default.createElement("div",{className:S.children},a.children)))};r();var ut=u(require("react")),Np=u(require("classnames")),Lp=require("react-select");var sr=t=>e=>{let{selectProps:o,children:n}=e,a=o.value;return ut.default.createElement(Lp.components.SingleValue,T(b({},e),{className:(0,Np.default)(S.single,{[S.focused]:e.selectProps.menuIsOpen})}),ut.default.createElement("div",{className:S.ticker},n,t&&ut.default.createElement(t,{token:a==null?void 0:a.token})))};var{Menu:Sl,Control:kl,Input:wl,MenuList:El,IndicatorsContainer:Cl,Placeholder:Il}=ir,Dp=t=>{let{name:e,options:o,isLoading:n=!1,className:a="",noOptionsMessage:p="No Tokens",disabledOption:i,rewaLabel:m,RewaIcon:d,disabled:g,value:f,onBlur:y,onFocus:h,onChange:v,onMenuOpen:k,chainId:E,wrapperClassName:I="",showTokenPrice:L=!1,showBalanceUsdValue:B=!1,selectedTokenIconClassName:M,TokenTickerIcon:oe}=t,Y=(0,ie.useRef)(null),ne=[m,Zr(E)],de=(0,ie.useMemo)(()=>cr({rewaLabel:m,RewaIcon:d,showTokenPrice:L,showBalanceUsdValue:B,TokenTickerIcon:oe}),[]),C=(0,ie.useMemo)(()=>pr(m,M,d),[]),ae=(0,ie.useMemo)(()=>sr(oe),[]);(0,ie.useEffect)(()=>{let A=o.find(H=>H.value===(f==null?void 0:f.value)),D=(A==null?void 0:A.token.balance)===(f==null?void 0:f.token.balance);!A||D||v(A)},[o]);let Z=A=>ne.includes(A),fe=A=>{var ze;let D=A.value===(i==null?void 0:i.value),H=Z(A.value),Ce=Z((ze=i==null?void 0:i.value)!=null?ze:"");return D||H&&Ce},ue=(A,D)=>{let H=A.data.token.ticker?A.data.token.ticker.toLowerCase().includes(D.toLowerCase()):!1,Ce=A.data.token.name.toLowerCase().includes(D.toLowerCase());return Boolean(D)?H||Ce:!0};return ie.default.createElement("div",{"data-testid":`${e}Select`,className:`${I} ${n?"select-holder-loading":""}`},ie.default.createElement("label",{htmlFor:e,"data-testid":"tokenIdLabel",className:S.label},"Token"),ie.default.createElement(Pp.default,{ref:Y,inputId:e,name:e,options:o,openMenuOnFocus:!0,isDisabled:g,isLoading:n,value:f,isOptionDisabled:fe,onBlur:y,filterOption:ue,onFocus:h,onChange:A=>{v(A),Y&&Y.current!==null&&Y.current.blur()},isSearchable:t.isSearchable,maxMenuHeight:260,onMenuOpen:k,noOptionsMessage:()=>p,className:(0,Fp.default)(S.select,a,{[S.disabled]:t.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:Sl,Control:kl,Input:wl,MenuList:El,IndicatorsContainer:Cl,ValueContainer:C,Placeholder:Il,Option:de,SingleValue:ae}}))};r();r();var Bp=u(require("react")),Gp=u(require("classnames"));var Vp=({hasErrors:t,className:e,error:o,"data-testid":n})=>t?Bp.default.createElement("div",{className:(0,Gp.default)(w.error,e),"data-testid":n},o):null;r();r();var ft=u(require("react")),Up=u(require("classnames"));r();var Al=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Al));var _t={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"};var Mp=({label:t,value:e,className:o,token:n,"data-testid":a,"data-value":p})=>ft.default.createElement("div",{"data-testid":a,"data-value":p,className:(0,Up.default)(_t.balance,o)},ft.default.createElement("span",{className:_t.label},t,": "),ft.default.createElement("span",{className:_t.value},e)," ",n==null?void 0:n.ticker);var lr=({className:t,label:e,name:o,wrapperControlsClassName:n,tokenSelectProps:a,tokenBalanceProps:p,amountInputProps:i,amountErrorProps:m,maxButtonProps:d,readonly:g})=>le.default.createElement("div",{className:(0,gt.default)(Ee.amount,t)},le.default.createElement("div",{className:Ee.label},e&&le.default.createElement("label",{htmlFor:o,className:w.label,"data-testid":"amountLabel"},e),le.default.createElement(Mp,b({},p))),le.default.createElement("div",{className:(0,gt.default)(Ee.wrapper,n,{[Ee.error]:i.isInvalid||a.isInvalid||m.hasErrors,[Ee.disabled]:g})},le.default.createElement(Ua,b({},i)),le.default.createElement("div",{className:(0,gt.default)(Ee.interaction,d.wrapperClassName)},d.isMaxButtonVisible&&le.default.createElement(Ja,b({},d)),le.default.createElement("div",{className:Ee.select},le.default.createElement(Dp,b({},a))))),le.default.createElement(Vp,b({},m)));r();var No=u(require("react")),Op=require("@terradharitri/sdk-dapp/constants"),qp=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");var Nl=()=>{var go,_r;let{checkInvalid:t}=xe(),{tokensInfo:e,amountInfo:o,formInfo:n}=F(),{readonly:a}=n,{networkConfig:{rewaLabel:p,chainId:i}}=Te(),{rewaPriceInUsd:m}=Ot(),{amount:d,onBlur:g,onChange:f,onMaxClicked:y,error:h,isInvalid:v,onFocus:k,maxAmountAvailable:E,isMaxClicked:I,isMaxButtonVisible:L,maxAmountMinusDust:B}=o,{allAvailableTokens:M,areTokensLoading:oe,getTokens:Y,isTokenIdInvalid:ne,RewaIcon:de,nft:C,onChangeTokenId:ae,tokenDetails:te,tokenId:Z,tokenIdError:fe}=e,ue=M.map(Ie=>({value:Ie.identifier,label:String(Ie.ticker),assets:Ie.assets,token:Ie})),{isRewa:A}=(0,qp.getIdentifierType)(Z),D=ue.find(({value:Ie})=>Ie===Z),H={id:"tokenId",value:D,name:"tokenId",isLoading:oe,options:ue,isSearchable:!0,onChange:Ie=>{Ie&&(ae(Ie.value),f(""))},onMenuOpen:Y,disabled:X("tokenId",a),error:fe,isInvalid:ne,rewaLabel:p,chainId:i,RewaIcon:de},Ce=(0,No.useMemo)(()=>No.default.createElement(Wa,{amount:d,rewaLabel:p,maxAmountMinusDust:B,tokenId:Z,isMaxClicked:I}),[d,p,B,Z,I]),Me={name:"amount",required:!0,value:d,placeholder:"Amount",handleBlur:g,"data-testid":"amount",handleChange:f,onFocus:k,usdPrice:A?m:void 0,error:h,isInvalid:v,InfoDustComponent:Ce},ze={token:te,inputAmount:d,onMaxClick:y,isMaxClicked:I,isMaxButtonVisible:L},bt=t("amount")&&!Me.value,q={hasErrors:Me.isInvalid||H.isInvalid||bt,error:Me.error||H.error,className:w.error,"data-testid":Me.error?`${"amount"}Error`:`${"tokenId"}Error`},ro={"data-testid":`available-${(go=C==null?void 0:C.identifier)!=null?go:Z}`,"data-value":`${E} ${(_r=C==null?void 0:C.identifier)!=null?_r:Z}`,label:"Available",token:D==null?void 0:D.token,value:fo({amount:te.balance,decimals:te.decimals||Op.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(C==null?void 0:C.type)===re.NftEnumType.NonFungibleDCDT?null:No.default.createElement(lr,{name:"tokenId",amountErrorProps:q,tokenSelectProps:H,amountInputProps:Me,tokenBalanceProps:ro,maxButtonProps:ze,label:"Amount",readonly:a})};r();r();var $e=u(require("react")),ur=u(require("classnames"));r();r();r();var me=u(require("react")),vt=require("@fortawesome/free-solid-svg-icons"),mr=require("@fortawesome/react-fontawesome"),Rp=require("formik");r();r();var yt=()=>{let{formInfo:{isRewaTransaction:t,readonly:e},dataFieldInfo:{isAdvancedModeEnabled:o}}=F();return o?!1:!t||X("data",e)};r();var Ll=`.dapp-core-component__styles-module__advanced {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ll));var Lo={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"};var $p=()=>{let{formInfo:{readonly:t,isRewaTransaction:e}}=F(),{setFieldValue:o,values:n}=(0,Rp.useFormikContext)(),[a,p]=(0,me.useState)(!1),[i,m]=(0,me.useState)(!1),d=yt(),g=!a&&!t&&d&&Boolean(n.data),f=()=>{p(!0),o("isAdvancedModeEnabled",!0)},y=()=>{m(!0),setTimeout(()=>{m(!1)},5e3)};return(0,me.useEffect)(()=>{!e&&a&&p(!1)},[e,n.amount]),g?i?me.default.createElement("div",{className:Lo.advanced,"data-testid":"confirmAdvancedMode",onClick:f},me.default.createElement(mr.FontAwesomeIcon,{icon:vt.faCheck,className:"i-icon"}),me.default.createElement("span",{className:Lo.advancedText},"Confirm")):me.default.createElement("div",{"data-testid":"enableAdvancedMode",className:Lo.advanced,onClick:y},me.default.createElement(mr.FontAwesomeIcon,{icon:vt.faScrewdriverWrench,className:"i-icon"}),me.default.createElement("span",{className:Lo.advancedText},"Advanced")):null};r();var Fl=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fl));var dr={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"};var Pl=({className:t})=>{let{dataFieldInfo:{data:e,dataError:o,isDataInvalid:n,onChange:a,onBlur:p}}=F(),i=yt();return $e.default.createElement("div",{className:(0,ur.default)(dr.data,t)},$e.default.createElement("div",{className:Ee.label},$e.default.createElement("label",{htmlFor:"data",className:w.label},"Data"),$e.default.createElement($p,null)),$e.default.createElement("div",{className:dr.wrapper},$e.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:i,"data-testid":"data",value:e,onBlur:p,onChange:a,spellCheck:"false",placeholder:"Add transaction data",className:(0,ur.default)(w.textarea,{[w.invalid]:n,[w.disabled]:i})})),n&&$e.default.createElement("div",{className:w.error,"data-testid":"dataError"},o))};r();r();r();var Ue=u(require("react")),We=u(require("classnames"));r();var Dl=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Dl));var K={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"};var Bl=({disabled:t,percentageValue:e=0,onPercentageChange:o,className:n})=>{let a=[0,25,50,75,100],p="amountSlider";return Ue.default.createElement("div",{className:(0,We.default)(K.amountSlider,n)},Ue.default.createElement("div",{className:K.amountSliderRange},Ue.default.createElement("input",{name:p,id:p,"data-testid":p,type:"range",disabled:t,min:0,max:100,value:String(e),className:(0,We.default)(K.amountSliderInput,{[K.disabled]:t}),onChange:i=>{o(Number(i.target.value))}}),Ue.default.createElement("div",{style:{width:`${e}%`},className:(0,We.default)(K.amountSliderCompletion,{[K.disabled]:t})}),a.map(i=>Ue.default.createElement("span",{onClick:()=>o(i),key:`breakpoint-${i}`,style:{left:`${i}%`},className:(0,We.default)(K.amountSliderBreakpoint,{[K.completed]:i<=e,[K.disabled]:t})})),a.map(i=>Ue.default.createElement("span",{style:{left:`${i}%`},key:`breakpoint-${i}`,onClick:()=>o(i),className:(0,We.default)(K.amountSliderPercentage,{[K.exact]:i===e,[K.disabled]:t})},i,"%")),Ue.default.createElement("span",{style:{left:`${e}%`},className:(0,We.default)(K.amountSliderThumb,{[K.disabled]:t})},Ue.default.createElement("strong",{className:(0,We.default)(K.amountSliderThumbPercentage,{[K.hidden]:a.includes(e)})},Math.round(e),"%"))))};0&&(module.exports={AmountSelect,AmountSelectInput,AmountSlider,Data,FeeAccordion,GasLimit,GasPrice,Receiver,SFTAmount,SelectToken});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
