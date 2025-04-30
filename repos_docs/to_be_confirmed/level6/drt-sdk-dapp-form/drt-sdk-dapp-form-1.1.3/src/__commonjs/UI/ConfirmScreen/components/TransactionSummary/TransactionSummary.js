"use strict";var Eo=Object.create;var Ae=Object.defineProperty;var wo=Object.getOwnPropertyDescriptor;var Co=Object.getOwnPropertyNames,Be=Object.getOwnPropertySymbols,Ao=Object.getPrototypeOf,sr=Object.prototype.hasOwnProperty,Mr=Object.prototype.propertyIsEnumerable;var Vr=(t,e,r)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,N=(t,e)=>{for(var r in e||(e={}))sr.call(e,r)&&Vr(t,r,e[r]);if(Be)for(var r of Be(e))Mr.call(e,r)&&Vr(t,r,e[r]);return t};var Rr=(t,e)=>{var r={};for(var o in t)sr.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&Be)for(var o of Be(t))e.indexOf(o)<0&&Mr.call(t,o)&&(r[o]=t[o]);return r};var pr=(t,e)=>()=>(t&&(e=t(t=0)),e);var De=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),cr=(t,e)=>{for(var r in e)Ae(t,r,{get:e[r],enumerable:!0})},qr=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Co(e))!sr.call(t,i)&&i!==r&&Ae(t,i,{get:()=>e[i],enumerable:!(o=wo(e,i))||o.enumerable});return t};var u=(t,e,r)=>(r=t!=null?Eo(Ao(t)):{},qr(e||!t||!t.__esModule?Ae(r,"default",{value:t,enumerable:!0}):r,t)),Ue=t=>qr(Ae({},"__esModule",{value:!0}),t);var Wr=De(Ve=>{"use strict";n();Ve.byteLength=So;Ve.toByteArray=No;Ve.fromByteArray=Po;var R=[],B=[],ko=typeof Uint8Array!="undefined"?Uint8Array:Array,mr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ne=0,Or=mr.length;ne<Or;++ne)R[ne]=mr[ne],B[mr.charCodeAt(ne)]=ne;var ne,Or;B["-".charCodeAt(0)]=62;B["_".charCodeAt(0)]=63;function $r(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var o=r===e?0:4-r%4;return[r,o]}function So(t){var e=$r(t),r=e[0],o=e[1];return(r+o)*3/4-o}function Io(t,e,r){return(e+r)*3/4-r}function No(t){var e,r=$r(t),o=r[0],i=r[1],a=new ko(Io(t,o,i)),m=0,d=i>0?o-4:o,f;for(f=0;f<d;f+=4)e=B[t.charCodeAt(f)]<<18|B[t.charCodeAt(f+1)]<<12|B[t.charCodeAt(f+2)]<<6|B[t.charCodeAt(f+3)],a[m++]=e>>16&255,a[m++]=e>>8&255,a[m++]=e&255;return i===2&&(e=B[t.charCodeAt(f)]<<2|B[t.charCodeAt(f+1)]>>4,a[m++]=e&255),i===1&&(e=B[t.charCodeAt(f)]<<10|B[t.charCodeAt(f+1)]<<4|B[t.charCodeAt(f+2)]>>2,a[m++]=e>>8&255,a[m++]=e&255),a}function Lo(t){return R[t>>18&63]+R[t>>12&63]+R[t>>6&63]+R[t&63]}function Fo(t,e,r){for(var o,i=[],a=e;a<r;a+=3)o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(t[a+2]&255),i.push(Lo(o));return i.join("")}function Po(t){for(var e,r=t.length,o=r%3,i=[],a=16383,m=0,d=r-o;m<d;m+=a)i.push(Fo(t,m,m+a>d?d:m+a));return o===1?(e=t[r-1],i.push(R[e>>2]+R[e<<4&63]+"==")):o===2&&(e=(t[r-2]<<8)+t[r-1],i.push(R[e>>10]+R[e>>4&63]+R[e<<2&63]+"=")),i.join("")}});var zr=De(lr=>{n();lr.read=function(t,e,r,o,i){var a,m,d=i*8-o-1,f=(1<<d)-1,x=f>>1,g=-7,y=r?i-1:0,h=r?-1:1,b=t[e+y];for(y+=h,a=b&(1<<-g)-1,b>>=-g,g+=d;g>0;a=a*256+t[e+y],y+=h,g-=8);for(m=a&(1<<-g)-1,a>>=-g,g+=o;g>0;m=m*256+t[e+y],y+=h,g-=8);if(a===0)a=1-x;else{if(a===f)return m?NaN:(b?-1:1)*(1/0);m=m+Math.pow(2,o),a=a-x}return(b?-1:1)*m*Math.pow(2,a-o)};lr.write=function(t,e,r,o,i,a){var m,d,f,x=a*8-i-1,g=(1<<x)-1,y=g>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=o?0:a-1,w=o?1:-1,A=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(d=isNaN(e)?1:0,m=g):(m=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-m))<1&&(m--,f*=2),m+y>=1?e+=h/f:e+=h*Math.pow(2,1-y),e*f>=2&&(m++,f/=2),m+y>=g?(d=0,m=g):m+y>=1?(d=(e*f-1)*Math.pow(2,i),m=m+y):(d=e*Math.pow(2,y-1)*Math.pow(2,i),m=0));i>=8;t[r+b]=d&255,b+=w,d/=256,i-=8);for(m=m<<i|d,x+=i;x>0;t[r+b]=m&255,b+=w,m/=256,x-=8);t[r+b-w]|=A*128}});var nt=De(ge=>{"use strict";n();var dr=Wr(),ue=zr(),Zr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ge.Buffer=l;ge.SlowBuffer=Mo;ge.INSPECT_MAX_BYTES=50;var Me=2147483647;ge.kMaxLength=Me;l.TYPED_ARRAY_SUPPORT=Go();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Go(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(r){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function K(t){if(t>Me)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,l.prototype),e}function l(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return yr(t)}return Hr(t,e,r)}l.poolSize=8192;function Hr(t,e,r){if(typeof t=="string")return Do(t,e);if(ArrayBuffer.isView(t))return Uo(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(q(t,ArrayBuffer)||t&&q(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(q(t,SharedArrayBuffer)||t&&q(t.buffer,SharedArrayBuffer)))return ur(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=t.valueOf&&t.valueOf();if(o!=null&&o!==t)return l.from(o,e,r);var i=Vo(t);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return l.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}l.from=function(t,e,r){return Hr(t,e,r)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function jr(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Bo(t,e,r){return jr(t),t<=0?K(t):e!==void 0?typeof r=="string"?K(t).fill(e,r):K(t).fill(e):K(t)}l.alloc=function(t,e,r){return Bo(t,e,r)};function yr(t){return jr(t),K(t<0?0:xr(t)|0)}l.allocUnsafe=function(t){return yr(t)};l.allocUnsafeSlow=function(t){return yr(t)};function Do(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!l.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=Jr(t,e)|0,o=K(r),i=o.write(t,e);return i!==r&&(o=o.slice(0,i)),o}function fr(t){for(var e=t.length<0?0:xr(t.length)|0,r=K(e),o=0;o<e;o+=1)r[o]=t[o]&255;return r}function Uo(t){if(q(t,Uint8Array)){var e=new Uint8Array(t);return ur(e.buffer,e.byteOffset,e.byteLength)}return fr(t)}function ur(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return e===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,e):o=new Uint8Array(t,e,r),Object.setPrototypeOf(o,l.prototype),o}function Vo(t){if(l.isBuffer(t)){var e=xr(t.length)|0,r=K(e);return r.length===0||t.copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||br(t.length)?K(0):fr(t);if(t.type==="Buffer"&&Array.isArray(t.data))return fr(t.data)}function xr(t){if(t>=Me)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Me.toString(16)+" bytes");return t|0}function Mo(t){return+t!=t&&(t=0),l.alloc(+t)}l.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==l.prototype};l.compare=function(e,r){if(q(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),q(r,Uint8Array)&&(r=l.from(r,r.offset,r.byteLength)),!l.isBuffer(e)||!l.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var o=e.length,i=r.length,a=0,m=Math.min(o,i);a<m;++a)if(e[a]!==r[a]){o=e[a],i=r[a];break}return o<i?-1:i<o?1:0};l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return l.alloc(0);var o;if(r===void 0)for(r=0,o=0;o<e.length;++o)r+=e[o].length;var i=l.allocUnsafe(r),a=0;for(o=0;o<e.length;++o){var m=e[o];if(q(m,Uint8Array))a+m.length>i.length?l.from(m).copy(i,a):Uint8Array.prototype.set.call(i,m,a);else if(l.isBuffer(m))m.copy(i,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=m.length}return i};function Jr(t,e){if(l.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||q(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return gr(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return ot(t).length;default:if(i)return o?-1:gr(t).length;e=(""+e).toLowerCase(),i=!0}}l.byteLength=Jr;function Ro(t,e,r){var o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return jo(this,e,r);case"utf8":case"utf-8":return Qr(this,e,r);case"ascii":return Xo(this,e,r);case"latin1":case"binary":return Ho(this,e,r);case"base64":return Zo(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Jo(this,e,r);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}l.prototype._isBuffer=!0;function ie(t,e,r){var o=t[e];t[e]=t[r],t[r]=o}l.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)ie(this,r,r+1);return this};l.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)ie(this,r,r+3),ie(this,r+1,r+2);return this};l.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)ie(this,r,r+7),ie(this,r+1,r+6),ie(this,r+2,r+5),ie(this,r+3,r+4);return this};l.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Qr(this,0,e):Ro.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:l.compare(this,e)===0};l.prototype.inspect=function(){var e="",r=ge.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"};Zr&&(l.prototype[Zr]=l.prototype.inspect);l.prototype.compare=function(e,r,o,i,a){if(q(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),o===void 0&&(o=e?e.length:0),i===void 0&&(i=0),a===void 0&&(a=this.length),r<0||o>e.length||i<0||a>this.length)throw new RangeError("out of range index");if(i>=a&&r>=o)return 0;if(i>=a)return-1;if(r>=o)return 1;if(r>>>=0,o>>>=0,i>>>=0,a>>>=0,this===e)return 0;for(var m=a-i,d=o-r,f=Math.min(m,d),x=this.slice(i,a),g=e.slice(r,o),y=0;y<f;++y)if(x[y]!==g[y]){m=x[y],d=g[y];break}return m<d?-1:d<m?1:0};function Yr(t,e,r,o,i){if(t.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,br(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=l.from(e,o)),l.isBuffer(e))return e.length===0?-1:Kr(t,e,r,o,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):Kr(t,[e],r,o,i);throw new TypeError("val must be string, number or Buffer")}function Kr(t,e,r,o,i){var a=1,m=t.length,d=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(t.length<2||e.length<2)return-1;a=2,m/=2,d/=2,r/=2}function f(b,w){return a===1?b[w]:b.readUInt16BE(w*a)}var x;if(i){var g=-1;for(x=r;x<m;x++)if(f(t,x)===f(e,g===-1?0:x-g)){if(g===-1&&(g=x),x-g+1===d)return g*a}else g!==-1&&(x-=x-g),g=-1}else for(r+d>m&&(r=m-d),x=r;x>=0;x--){for(var y=!0,h=0;h<d;h++)if(f(t,x+h)!==f(e,h)){y=!1;break}if(y)return x}return-1}l.prototype.includes=function(e,r,o){return this.indexOf(e,r,o)!==-1};l.prototype.indexOf=function(e,r,o){return Yr(this,e,r,o,!0)};l.prototype.lastIndexOf=function(e,r,o){return Yr(this,e,r,o,!1)};function qo(t,e,r,o){r=Number(r)||0;var i=t.length-r;o?(o=Number(o),o>i&&(o=i)):o=i;var a=e.length;o>a/2&&(o=a/2);for(var m=0;m<o;++m){var d=parseInt(e.substr(m*2,2),16);if(br(d))return m;t[r+m]=d}return m}function Oo(t,e,r,o){return Re(gr(e,t.length-r),t,r,o)}function $o(t,e,r,o){return Re(en(e),t,r,o)}function Wo(t,e,r,o){return Re(ot(e),t,r,o)}function zo(t,e,r,o){return Re(rn(e,t.length-r),t,r,o)}l.prototype.write=function(e,r,o,i){if(r===void 0)i="utf8",o=this.length,r=0;else if(o===void 0&&typeof r=="string")i=r,o=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(o)?(o=o>>>0,i===void 0&&(i="utf8")):(i=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-r;if((o===void 0||o>a)&&(o=a),e.length>0&&(o<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var m=!1;;)switch(i){case"hex":return qo(this,e,r,o);case"utf8":case"utf-8":return Oo(this,e,r,o);case"ascii":case"latin1":case"binary":return $o(this,e,r,o);case"base64":return Wo(this,e,r,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return zo(this,e,r,o);default:if(m)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Zo(t,e,r){return e===0&&r===t.length?dr.fromByteArray(t):dr.fromByteArray(t.slice(e,r))}function Qr(t,e,r){r=Math.min(t.length,r);for(var o=[],i=e;i<r;){var a=t[i],m=null,d=a>239?4:a>223?3:a>191?2:1;if(i+d<=r){var f,x,g,y;switch(d){case 1:a<128&&(m=a);break;case 2:f=t[i+1],(f&192)===128&&(y=(a&31)<<6|f&63,y>127&&(m=y));break;case 3:f=t[i+1],x=t[i+2],(f&192)===128&&(x&192)===128&&(y=(a&15)<<12|(f&63)<<6|x&63,y>2047&&(y<55296||y>57343)&&(m=y));break;case 4:f=t[i+1],x=t[i+2],g=t[i+3],(f&192)===128&&(x&192)===128&&(g&192)===128&&(y=(a&15)<<18|(f&63)<<12|(x&63)<<6|g&63,y>65535&&y<1114112&&(m=y))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),i+=d}return Ko(o)}var Xr=4096;function Ko(t){var e=t.length;if(e<=Xr)return String.fromCharCode.apply(String,t);for(var r="",o=0;o<e;)r+=String.fromCharCode.apply(String,t.slice(o,o+=Xr));return r}function Xo(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]&127);return o}function Ho(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]);return o}function jo(t,e,r){var o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);for(var i="",a=e;a<r;++a)i+=tn[t[a]];return i}function Jo(t,e,r){for(var o=t.slice(e,r),i="",a=0;a<o.length-1;a+=2)i+=String.fromCharCode(o[a]+o[a+1]*256);return i}l.prototype.slice=function(e,r){var o=this.length;e=~~e,r=r===void 0?o:~~r,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),r<0?(r+=o,r<0&&(r=0)):r>o&&(r=o),r<e&&(r=e);var i=this.subarray(e,r);return Object.setPrototypeOf(i,l.prototype),i};function k(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||k(e,r,this.length);for(var i=this[e],a=1,m=0;++m<r&&(a*=256);)i+=this[e+m]*a;return i};l.prototype.readUintBE=l.prototype.readUIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||k(e,r,this.length);for(var i=this[e+--r],a=1;r>0&&(a*=256);)i+=this[e+--r]*a;return i};l.prototype.readUint8=l.prototype.readUInt8=function(e,r){return e=e>>>0,r||k(e,1,this.length),this[e]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||k(e,2,this.length),this[e]|this[e+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||k(e,2,this.length),this[e]<<8|this[e+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||k(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||k(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};l.prototype.readIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||k(e,r,this.length);for(var i=this[e],a=1,m=0;++m<r&&(a*=256);)i+=this[e+m]*a;return a*=128,i>=a&&(i-=Math.pow(2,8*r)),i};l.prototype.readIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||k(e,r,this.length);for(var i=r,a=1,m=this[e+--i];i>0&&(a*=256);)m+=this[e+--i]*a;return a*=128,m>=a&&(m-=Math.pow(2,8*r)),m};l.prototype.readInt8=function(e,r){return e=e>>>0,r||k(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};l.prototype.readInt16LE=function(e,r){e=e>>>0,r||k(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o};l.prototype.readInt16BE=function(e,r){e=e>>>0,r||k(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o};l.prototype.readInt32LE=function(e,r){return e=e>>>0,r||k(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};l.prototype.readInt32BE=function(e,r){return e=e>>>0,r||k(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};l.prototype.readFloatLE=function(e,r){return e=e>>>0,r||k(e,4,this.length),ue.read(this,e,!0,23,4)};l.prototype.readFloatBE=function(e,r){return e=e>>>0,r||k(e,4,this.length),ue.read(this,e,!1,23,4)};l.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||k(e,8,this.length),ue.read(this,e,!0,52,8)};l.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||k(e,8,this.length),ue.read(this,e,!1,52,8)};function F(t,e,r,o,i,a){if(!l.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<a)throw new RangeError('"value" argument is out of bounds');if(r+o>t.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var a=Math.pow(2,8*o)-1;F(this,e,r,o,a,0)}var m=1,d=0;for(this[r]=e&255;++d<o&&(m*=256);)this[r+d]=e/m&255;return r+o};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var a=Math.pow(2,8*o)-1;F(this,e,r,o,a,0)}var m=o-1,d=1;for(this[r+m]=e&255;--m>=0&&(d*=256);)this[r+m]=e/d&255;return r+o};l.prototype.writeUint8=l.prototype.writeUInt8=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,1,255,0),this[r]=e&255,r+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};l.prototype.writeIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var a=Math.pow(2,8*o-1);F(this,e,r,o,a-1,-a)}var m=0,d=1,f=0;for(this[r]=e&255;++m<o&&(d*=256);)e<0&&f===0&&this[r+m-1]!==0&&(f=1),this[r+m]=(e/d>>0)-f&255;return r+o};l.prototype.writeIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var a=Math.pow(2,8*o-1);F(this,e,r,o,a-1,-a)}var m=o-1,d=1,f=0;for(this[r+m]=e&255;--m>=0&&(d*=256);)e<0&&f===0&&this[r+m+1]!==0&&(f=1),this[r+m]=(e/d>>0)-f&255;return r+o};l.prototype.writeInt8=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1};l.prototype.writeInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};l.prototype.writeInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};l.prototype.writeInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};l.prototype.writeInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function et(t,e,r,o,i,a){if(r+o>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function rt(t,e,r,o,i){return e=+e,r=r>>>0,i||et(t,e,r,4,34028234663852886e22,-34028234663852886e22),ue.write(t,e,r,o,23,4),r+4}l.prototype.writeFloatLE=function(e,r,o){return rt(this,e,r,!0,o)};l.prototype.writeFloatBE=function(e,r,o){return rt(this,e,r,!1,o)};function tt(t,e,r,o,i){return e=+e,r=r>>>0,i||et(t,e,r,8,17976931348623157e292,-17976931348623157e292),ue.write(t,e,r,o,52,8),r+8}l.prototype.writeDoubleLE=function(e,r,o){return tt(this,e,r,!0,o)};l.prototype.writeDoubleBE=function(e,r,o){return tt(this,e,r,!1,o)};l.prototype.copy=function(e,r,o,i){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!i&&i!==0&&(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<o&&(i=o),i===o||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-o&&(i=e.length-r+o);var a=i-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,o,i):Uint8Array.prototype.set.call(e,this.subarray(o,i),r),a};l.prototype.fill=function(e,r,o,i){if(typeof e=="string"){if(typeof r=="string"?(i=r,r=0,o=this.length):typeof o=="string"&&(i=o,o=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!l.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){var a=e.charCodeAt(0);(i==="utf8"&&a<128||i==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<o)throw new RangeError("Out of range index");if(o<=r)return this;r=r>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var m;if(typeof e=="number")for(m=r;m<o;++m)this[m]=e;else{var d=l.isBuffer(e)?e:l.from(e,i),f=d.length;if(f===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(m=0;m<o-r;++m)this[m+r]=d[m%f]}return this};var Yo=/[^+/0-9A-Za-z-_]/g;function Qo(t){if(t=t.split("=")[0],t=t.trim().replace(Yo,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function gr(t,e){e=e||1/0;for(var r,o=t.length,i=null,a=[],m=0;m<o;++m){if(r=t.charCodeAt(m),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(m+1===o){(e-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&a.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;a.push(r)}else if(r<2048){if((e-=2)<0)break;a.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;a.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return a}function en(t){for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r)&255);return e}function rn(t,e){for(var r,o,i,a=[],m=0;m<t.length&&!((e-=2)<0);++m)r=t.charCodeAt(m),o=r>>8,i=r%256,a.push(i),a.push(o);return a}function ot(t){return dr.toByteArray(Qo(t))}function Re(t,e,r,o){for(var i=0;i<o&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function q(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function br(t){return t!==t}var tn=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var o=r*16,i=0;i<16;++i)e[o+i]=t[r]+t[i];return e}()});var ct=De((Wa,pt)=>{n();var _=pt.exports={},O,$;function hr(){throw new Error("setTimeout has not been defined")}function Tr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?O=setTimeout:O=hr}catch(t){O=hr}try{typeof clearTimeout=="function"?$=clearTimeout:$=Tr}catch(t){$=Tr}})();function it(t){if(O===setTimeout)return setTimeout(t,0);if((O===hr||!O)&&setTimeout)return O=setTimeout,setTimeout(t,0);try{return O(t,0)}catch(e){try{return O.call(null,t,0)}catch(r){return O.call(this,t,0)}}}function on(t){if($===clearTimeout)return clearTimeout(t);if(($===Tr||!$)&&clearTimeout)return $=clearTimeout,clearTimeout(t);try{return $(t)}catch(e){try{return $.call(null,t)}catch(r){return $.call(this,t)}}}var X=[],ye=!1,ae,qe=-1;function nn(){!ye||!ae||(ye=!1,ae.length?X=ae.concat(X):qe=-1,X.length&&at())}function at(){if(!ye){var t=it(nn);ye=!0;for(var e=X.length;e;){for(ae=X,X=[];++qe<e;)ae&&ae[qe].run();qe=-1,e=X.length}ae=null,ye=!1,on(t)}}_.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];X.push(new st(t,e)),X.length===1&&!ye&&it(at)};function st(t,e){this.fun=t,this.array=e}st.prototype.run=function(){this.fun.apply(null,this.array)};_.title="browser";_.browser=!0;_.env={};_.argv=[];_.version="";_.versions={};function H(){}_.on=H;_.addListener=H;_.once=H;_.off=H;_.removeListener=H;_.removeAllListeners=H;_.emit=H;_.prependListener=H;_.prependOnceListener=H;_.listeners=function(t){return[]};_.binding=function(t){throw new Error("process.binding is not supported")};_.cwd=function(){return"/"};_.chdir=function(t){throw new Error("process.chdir is not supported")};_.umask=function(){return 0}});var s,p,za,n=pr(()=>{s=u(nt()),p=u(ct()),za=function(t){function e(){var o=this||self;return delete t.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object)});var Nr={};cr(Nr,{default:()=>wa});var Je,Ea,wa,Lr=pr(()=>{"use strict";n();Je=u(require("react")),Ea=t=>Je.createElement("svg",N({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),Je.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Je.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),wa=Ea});var $t={};cr($t,{default:()=>La});var er,Na,La,Wt=pr(()=>{"use strict";n();er=u(require("react")),Na=t=>er.createElement("svg",N({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},t),er.createElement("g",null,er.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),La=Na});var Ma={};cr(Ma,{TransactionSummary:()=>Va});module.exports=Ue(Ma);n();var I=u(require("react")),lo=require("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");n();var an=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(an));var S={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};n();n();var Ir=u(require("react")),_a=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var mn=u(require("axios"));n();n();n();var pn=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var sn=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var v="0";n();n();n();var ln=u(require("axios"));n();n();var lt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),dn=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),fn=u(require("axios")),un=u(require("lodash/uniqBy"));n();var gn=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),yn=u(require("axios"));n();n();n();var V=require("@terradharitri/sdk-dapp/types/tokens.types");n();n();n();n();var dt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),xn=u(require("axios"));n();n();var bn=u(require("axios"));n();var Oe=u(require("react")),ap=(0,Oe.createContext)({});n();n();var le=u(require("react")),Yi=require("@terradharitri/sdk-dapp/constants/index"),Qi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ea=u(require("bignumber.js")),ra=require("formik");n();n();n();var hn=require("bech32");n();n();n();n();n();n();var _n=require("@terradharitri/sdk-dapp/constants"),vn=require("@terradharitri/sdk-dapp/utils/account/getAccount");n();n();var _r=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),ft=({nft:t,skipDescription:e})=>{var A,P;let{name:r,metadata:o,media:i,isNsfw:a,scamInfo:m,verified:d}=t,f="Scam - ",{isSuspicious:x,message:g}=(0,_r.getScamFlag)({verified:d,message:r,isNsfw:a,scamInfo:m,messagePrefix:f});if(!(o!=null&&o.description)||e){let Z=x?"placeholder":(A=i==null?void 0:i[0])==null?void 0:A.thumbnailUrl;return{isSuspicious:x,name:r||g,thumbnail:Z,description:""}}let{message:y,isSuspicious:h}=(0,_r.getScamFlag)({message:o.description,messagePrefix:f,verified:d}),b=x||h,w=b?"placeholder":(P=i==null?void 0:i[0])==null?void 0:P.thumbnailUrl;return{isSuspicious:b,name:r||g,thumbnail:w,description:y||o.description}};n();var En=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var $e=u(require("anchorme")),vr=t=>t.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),ut=(t,e)=>{if(e){let r=`[Message hidden due to suspicious content - ${e.info}]`;if(t.length>1e3)return{output:r,stringWithLinks:t,found:!0};let o=vr(t.normalize("NFKC")),i=$e.default.list(o),a=[];if(i.length>0){let m=r;i.forEach((d,f)=>{let{string:x}=d,g="",y="",h=x;for(let b=0;b<m.length;b++){let w=m.slice(b),[A]=$e.default.list(vr(w));A&&x===A.string&&(g=m.substring(0,b))}for(let b=r.length;b>0;b--){let w=m.slice(0,b),[A]=$e.default.list(vr(w));A&&x===A.string&&(y=m.substring(b))}a.push(g),a.push(h),m=y,f===i.length-1&&a.push(y)})}else a.push(t);return{output:r,stringWithLinks:a.join(""),found:!0}}else return{output:t,stringWithLinks:"",found:!1}};n();n();var gt=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),pe=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Er=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),D=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();var ce=u(require("react")),ki=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Si=require("formik");n();n();var vt=require("@terradharitri/sdk-dapp/constants/index"),Wn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),zn=u(require("bignumber.js"));n();n();var ke=require("@terradharitri/sdk-dapp/constants/index");function yt({feeLimit:t,rewaPriceInUsd:e}){let r=(0,pe.formatAmount)({input:t,decimals:ke.DECIMALS,digits:ke.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,Er.getUsdValue)({amount:r,usd:e,decimals:ke.DIGITS})}`}n();var Cn=require("@terradharitri/sdk-dapp/constants/index");n();var xt=require("@terradharitri/sdk-dapp/constants/index"),kn=u(require("bignumber.js"));n();var An=require("@terradharitri/sdk-dapp/constants/index");n();var Sn=require("@terradharitri/sdk-dapp/constants/index");n();n();var Se=require("@terradharitri/sdk-core"),In=require("@terradharitri/sdk-dapp/constants/index"),Nn=u(require("bignumber.js"));n();n();var Fn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");n();var Pn=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var Bn=u(require("bignumber.js"));n();var Un=require("@terradharitri/sdk-dapp/constants/index"),Vn=require("@terradharitri/sdk-dapp/utils/smartContracts"),Mn=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Rn=u(require("bignumber.js"));n();var Dn=u(require("bignumber.js"));n();var be=require("@terradharitri/sdk-dapp/constants/index"),_t=u(require("bignumber.js"));var bt,ht,Tt,Ar=(0,pe.formatAmount)({input:String((bt=be.GAS_PRICE)!=null?bt:1e9),decimals:(ht=be.DECIMALS)!=null?ht:18,showLastNonZeroDecimal:!0,digits:(Tt=be.DIGITS)!=null?Tt:4}),qn=new _t.default(Ar).times(10).toString(10);n();var Ze=require("@terradharitri/sdk-dapp/constants/index"),On=u(require("bignumber.js"));n();var $n=u(require("bignumber.js"));n();n();var Ct=require("yup");n();var Ke=require("@terradharitri/sdk-dapp/constants/ledger.constants"),Et=u(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Xe=require("yup"),Zn=(0,Xe.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:r}=this.parent;return!(r&&e&&e.length&&!r.ledgerDataActive)}),Kn=(0,Xe.string)().test({name:"hashSign",test:function(e){let{ledger:r,isGuarded:o}=this.parent;if(r){let{ledgerWithHashSign:i,ledgerWithGuardians:a}=(0,Et.default)(r.version);if(e&&e.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${Ke.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(o&&!a)return this.createError({message:`You need at least DharitrI app version ${Ke.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Xn=[Zn,Kn],mm=Xn.reduce((t,e)=>t.concat(e),(0,Xe.string)());n();var Hn=require("@terradharitri/sdk-dapp/constants/index"),jn=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Jn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Yn=require("yup");n();var ti=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),oi=u(require("bignumber.js")),ni=require("yup");n();var Qn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ei=u(require("bignumber.js")),ri=require("yup");n();var ii=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ai=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),si=u(require("bignumber.js")),pi=require("yup");n();var ci=u(require("bignumber.js")),mi=require("yup");n();var li=require("@terradharitri/sdk-dapp/constants/index"),di=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),fi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ui=u(require("bignumber.js")),gi=require("yup");n();var yi=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),xi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),bi=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),hi=u(require("bignumber.js")),Ti=require("yup");n();var _i=u(require("bignumber.js")),vi=require("yup");n();var Ei=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),wi=require("yup");n();var Ci=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ai=require("yup");n();n();var Ii=(0,ce.createContext)({});function W(){return(0,ce.useContext)(Ii)}n();n();var j=u(require("react")),Pi=require("formik"),Gi=u(require("lodash/uniqBy"));n();n();var Te=u(require("react"));var ql=(0,Te.createContext)({});n();n();var At=require("react"),Ni=require("@terradharitri/sdk-dapp/constants/index");var Li=require("@terradharitri/sdk-dapp/types/enums.types");n();var xd=(0,j.createContext)({});n();n();var Ft=require("@terradharitri/sdk-dapp/constants/index"),Ji=require("formik");n();n();var me=u(require("react")),Nt=require("@terradharitri/sdk-dapp/constants/index"),Zi=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ki=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Xi=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Hi=u(require("bignumber.js")),ji=require("formik");n();n();n();n();var Bi=u(require("bignumber.js"));n();var Di=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ui=u(require("bignumber.js"));n();n();var It=require("react"),Mi=require("@terradharitri/sdk-dapp/constants/index"),Ri=require("@terradharitri/sdk-dapp/utils/smartContracts"),qi=u(require("bignumber.js")),Oi=require("formik");n();var kt=require("react");n();n();var $i=require("@terradharitri/sdk-dapp/constants/index"),Wi=u(require("bignumber.js"));var wf=(0,me.createContext)({});var eu=(0,le.createContext)({});n();n();var ve=u(require("react")),ta=require("formik");var gu=(0,ve.createContext)({});n();n();var Ee=u(require("react")),ma=require("formik");n();n();n();var Pt=require("react"),ia=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),aa=u(require("lodash/uniqBy"));n();n();var oa=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),na=require("@terradharitri/sdk-dapp/utils");n();var ca=require("react");n();var sa=require("react"),pa=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var zu=(0,Ee.createContext)({});n();n();var je=u(require("react")),ha=require("formik");n();n();n();n();n();var ya=require("react"),xa=require("@terradharitri/sdk-dapp/utils");n();var ua=require("react"),ga=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var la=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),da=u(require("axios"));n();var fa=u(require("axios"));var Sg=(0,je.createContext)({});n();var Ie=u(require("react"));var Ta=(0,Ie.createContext)({});function Gt(){return(0,Ie.useContext)(Ta)}n();var so=require("react");n();n();var J=u(require("react")),Qe=require("@terradharitri/sdk-dapp/constants/index"),Pr=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Ut=require("@terradharitri/sdk-dapp/UI/UsdValue/index");n();n();var z=u(require("react")),Bt=require("@fortawesome/free-solid-svg-icons"),Dt=require("@fortawesome/react-fontawesome"),Fr=u(require("classnames"));n();var va=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(va));var ee={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"};var Ca=(Lr(),Ue(Nr)).default,Ye=t=>{let{avatar:e,type:r}=t;return r==="NonFungibleDCDT"?z.default.createElement("div",{className:(0,Fr.default)(ee.tokenAvatar,ee.tokenAvatarNFT)},"NFT"):r==="SemiFungibleDCDT"?z.default.createElement("div",{className:(0,Fr.default)(ee.tokenAvatar,ee.tokenAvatarSFT)},"SFT"):r==="REWA"?z.default.createElement("div",{className:ee.tokenAvatar},t.RewaIcon?z.default.createElement(t.RewaIcon,null):z.default.createElement(Ca,null)):e?z.default.createElement("div",{className:ee.tokenAvatar},z.default.createElement("img",{src:e})):z.default.createElement("div",{className:ee.tokenAvatar},z.default.createElement(Dt.FontAwesomeIcon,{icon:Bt.faDiamond}))};n();var Aa=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Aa));var Ne={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Vt=({label:t="Amount",amount:e,txType:r,tokenDecimals:o,tokenId:i,rewaLabel:a,rewaPriceInUsd:m,nft:d,tokenAvatar:f})=>{let x=(d==null?void 0:d.decimals)||0,g=r==="DCDT",y=r==="MetaDCDT",h=r==="NonFungibleDCDT",b=y?(0,D.parseAmount)(e,d==null?void 0:d.decimals):e,w=Boolean(d&&e),A=i.split("-")[0],P=g?o:Qe.DECIMALS,Z=w?J.default.createElement(Pr.FormatAmount,{rewaLabel:a,value:b,decimals:x,digits:r==="MetaDCDT"?Qe.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):J.default.createElement(Pr.FormatAmount,{rewaLabel:a,value:(0,D.parseAmount)(e,P),showLabel:!1,decimals:P,showLastNonZeroDecimal:!0,token:g?A:a,"data-testid":"confirmAmount"});return h?null:J.default.createElement("div",{className:Ne.amount},J.default.createElement("span",{className:S.label},t),J.default.createElement("div",{className:Ne.token},J.default.createElement(Ye,{type:r,avatar:f}),J.default.createElement("div",{className:Ne.value},Z," ",A)),!g&&J.default.createElement(Ut.UsdValue,{amount:e,usd:m,"data-testid":"confirmUsdValue",className:Ne.price}))};n();n();var E=u(require("react")),Mt=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");n();var ka=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ka));var Le={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"};var Sa=(t,e)=>[...t.matchAll(new RegExp(e,"gi"))].map(r=>r.index),Rt=({label:t="Data",scCallLabel:e="SC Call",data:r,highlight:o,isScCall:i})=>{let a=E.default.createElement(E.default.Fragment,null,r),[m,...d]=o&&i?o.split("@"):[];if(r&&o&&Sa(r,o).length===1)switch(!0){case r.startsWith(o):{let[,f]=r.split(o);a=E.default.createElement(E.default.Fragment,null,o,E.default.createElement("span",null,f));break}case r.endsWith(o):{let[f]=r.split(o);a=E.default.createElement(E.default.Fragment,null,E.default.createElement("span",null,f),o);break}default:{let[f,x]=r.split(o);a=E.default.createElement(E.default.Fragment,null,E.default.createElement("span",null,f),o,E.default.createElement("span",null,x));break}}return E.default.createElement(E.default.Fragment,null,m&&E.default.createElement("div",{className:Le.data},E.default.createElement("span",{className:S.label},e),E.default.createElement("div",{"data-testid":"confirmScCall",className:Le.value},[(0,Mt.decodePart)(m),...d].join("@"))),E.default.createElement("div",{className:Le.data},E.default.createElement("span",{className:S.label},t),E.default.createElement("div",{"data-testid":"confirmData",className:Le.value},r?a:"N/A")))};n();n();var re=u(require("react")),qt=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");n();var Ia=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ia));var Fe={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Ot=({rewaPriceInUsd:t,label:e="Fee",feeLimit:r,rewaLabel:o})=>re.default.createElement("div",{className:Fe.fee},re.default.createElement("span",{className:S.label},e),re.default.createElement("div",{className:Fe.token},re.default.createElement(Ye,{type:"REWA"}),re.default.createElement("div",{className:Fe.value},re.default.createElement(qt.FormatAmount,{rewaLabel:o,value:r,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),r!==v&&re.default.createElement("span",{className:Fe.price},yt({feeLimit:r,rewaPriceInUsd:t})));n();n();var G=u(require("react")),Zt=require("@fortawesome/free-solid-svg-icons"),Kt=require("@fortawesome/react-fontawesome"),Xt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ht=require("@terradharitri/sdk-dapp/UI/CopyButton"),jt=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),Jt=require("@terradharitri/sdk-dapp/UI/Trim"),Yt=u(require("classnames"));n();var{default:zt}=(Wt(),Ue($t));n();var Fa=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fa));var M={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"};var Qt=({label:t="Receiver",receiver:e,scamReport:r,receiverUsername:o})=>{let i=Boolean(o),a=o!=null?o:e;return G.default.createElement("div",{className:M.confirmReceiver},G.default.createElement("span",{className:S.label},t),G.default.createElement("span",{className:(0,Yt.default)(M.value,{[M.shrunk]:i}),"data-testid":"confirmReceiver"},i&&G.default.createElement(zt,{className:M.icon}),a,i&&G.default.createElement(jt.ExplorerLink,{page:`/${Xt.ACCOUNTS_ENDPOINT}/${e}`,className:M.explorer})),i&&G.default.createElement("span",{className:M.subValue},G.default.createElement(Jt.Trim,{text:e,className:M.subValueTrim}),G.default.createElement(Ht.CopyButton,{text:e,className:M.subValueCopy})),r&&G.default.createElement("div",{className:M.scam},G.default.createElement("span",null,G.default.createElement(Kt.FontAwesomeIcon,{icon:Zt.faExclamationTriangle,className:M.icon}),G.default.createElement("small",{"data-testid":"confirmScamReport"},r))))};n();n();var te=u(require("react"));n();n();var C=u(require("react")),eo=require("@fortawesome/free-solid-svg-icons"),ro=require("@fortawesome/react-fontawesome"),to=u(require("@terradharitri/sdk-dapp/constants/index")),oo=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),no=u(require("classnames"));n();var Pa=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pa));var de={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};var Ga=(Lr(),Ue(Nr)).default,Gr=({RewaIcon:t,inDropdown:e=!1,isRewa:r,nftTokenDetails:o,nftType:i,token:a})=>{var Z,Ce;let{name:m,identifier:d,balance:f,decimals:x}=a,g=((Z=a.assets)==null?void 0:Z.svgUrl)||((Ce=a.assets)==null?void 0:Ce.pngUrl)||"",y=g?28:20,[h,b]=(0,C.useState)(m);(0,C.useEffect)(()=>{var Pe;((Pe=o==null?void 0:o.uris)==null?void 0:Pe.some(nr=>{let ir=s.Buffer.from(String(nr),"base64").toString(),{found:ar}=ut(ir,o==null?void 0:o.scamInfo);return ar}))||b(m)},[m]);let w=C.default.createElement(ro.FontAwesomeIcon,{icon:eo.faDiamond});i==V.NftEnumType.NonFungibleDCDT&&(w=C.default.createElement("div",{className:"nft-type","data-testid":`${d}-type-nft`},"NFT")),i===V.NftEnumType.SemiFungibleDCDT&&(w=C.default.createElement("div",{className:"nft-type","data-testid":`${d}-type-sft`},"SFT"));let A=!e&&i!==V.NftEnumType.NonFungibleDCDT,P=C.default.createElement("div",{className:de.tokenElementCircle},w);return g&&(P=C.default.createElement("img",{className:de.tokenElementCircle,src:g,alt:m,height:y})),r&&(P=C.default.createElement("div",{className:de.tokenElementCircle},t?C.default.createElement(t,{height:36}):C.default.createElement(Ga,{height:36}))),C.default.createElement("div",{className:(0,no.default)(S.value,de.tokenElement)},C.default.createElement("div",{className:de.tokenElementWrapper},P),C.default.createElement("div",{"data-testid":"tokenName"},C.default.createElement("span",{"data-testid":`${d}-element`},C.default.createElement("span",null,h)," ",C.default.createElement("span",{className:de.tokenElementIdentifier},d)),A&&C.default.createElement(oo.FormatAmount,{rewaLabel:d,value:f||v,digits:i===V.NftEnumType.SemiFungibleDCDT?0:to.DIGITS,token:d,showLabel:!1,decimals:x,"data-testid":`${d}-balance`})))};n();var Ba=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ba));var io={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"};var ao=({RewaIcon:t,rewaLabel:e,isDcdtTransaction:r,nft:o,tokenAvatar:i,tokenId:a,tokenIdError:m})=>{var f;let d=(o==null?void 0:o.name)||"";return te.default.createElement("div",{className:io.token},te.default.createElement("span",{className:S.label},o?te.default.createElement("span",null,o==null?void 0:o.name," "):"","Token"),te.default.createElement("div",null,o?te.default.createElement(Gr,{inDropdown:!0,token:{name:o==null?void 0:o.name,identifier:o==null?void 0:o.identifier,decimals:0,balance:v,ticker:"",assets:{svgUrl:((f=o==null?void 0:o.assets)==null?void 0:f.svgUrl)||""}}}):te.default.createElement(Gr,{inDropdown:!0,token:{name:r?d:"DharitrI eGold",identifier:r?a:e,decimals:0,balance:v,ticker:"",assets:{svgUrl:i||""}},isRewa:a===e,RewaIcon:t})),m&&te.default.createElement("div",{className:S.error},m))};var oe=class extends so.Component{render(){return null}};oe.Receiver=Qt,oe.Amount=Vt,oe.Fee=Ot,oe.Data=Rt,oe.Token=ao;var rr=oe;n();n();var Y=u(require("react")),Br=u(require("classnames"));n();var Da=`.dapp-core-component__styles-module__preview {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Da));var U={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"};var po=t=>{let g=t,{txType:e,onClick:r,identifier:o}=g,i=Rr(g,["txType","onClick","identifier"]),{name:a,thumbnail:m}=ft({nft:i}),d=["NonFungibleDCDT","SemiFungibleDCDT"].includes(e),f=e==="NonFungibleDCDT"?"NFT":"SFT",x=y=>{y.preventDefault(),r&&r(y,Object.assign(i,{identifier:o}))};return d?Y.default.createElement("div",{onClick:x,"data-testid":"token-preview",className:(0,Br.default)(U.preview,{[U.clickable]:Boolean(r)})},Y.default.createElement("img",{src:m,className:U.image}),Y.default.createElement("div",{className:U.content},Y.default.createElement("div",{className:U.left},Y.default.createElement("div",{"data-testid":"token-preview-name",className:U.name},a),Y.default.createElement("div",{"data-testid":"token-preview-identifier",className:U.identifier},o)),Y.default.createElement("div",{className:U.right},Y.default.createElement("div",{className:(0,Br.default)(U.badge,{[U.nft]:e==="NonFungibleDCDT",[U.sft]:e==="SemiFungibleDCDT"})},f)))):null};n();var Ua=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ua));var fe={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};n();n();var tr=require("@terradharitri/sdk-dapp/types/enums.types"),co=({providerType:t,hasGuardianScreen:e})=>e?"Confirm & Continue":t===tr.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":t===tr.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":t===tr.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";n();var mo=({receiverAddress:t,knownAddresses:e,existingReceiverUsername:r})=>{if(r)return r;let o=e==null?void 0:e.find(i=>i.address===t);return o==null?void 0:o.username};var Va=({isConfirmCloseBtnVisible:t=!0,providerType:e})=>{var Ur;let{setIsGuardianScreenVisible:r}=W(),{receiverUsernameInfo:{receiverUsername:o},receiverInfo:{scamError:i,receiver:a,knownAddresses:m},formInfo:d,gasInfo:{gasCostError:f,feeLimit:x},accountInfo:{isGuarded:g},dataFieldInfo:{data:y},amountInfo:h,tokensInfo:b}=Gt(),{tokenId:w,tokenDetails:A,nft:P,rewaPriceInUsd:Z,rewaLabel:Ce}=b,{readonly:or,onCloseForm:Pe,onInvalidateForm:nr,onPreviewClick:ir,onSubmitForm:ar,txType:Ge,hasGuardianScreen:Dr}=d,fo=()=>{r(!0)},[uo,go]=(0,I.useState)(!1),yo=Ge==="NonFungibleDCDT",xo=co({providerType:e,hasGuardianScreen:Dr}),bo=vo=>{vo.preventDefault(),or?Pe():nr()},ho=()=>{if(g&&Dr)return fo();go(!0),ar()},To=!["REWA","DCDT","MetaDCDT"].includes(Ge),_o=mo({knownAddresses:m,receiverAddress:a,existingReceiverUsername:o});return I.default.createElement("div",{className:fe.summary},I.default.createElement("div",{className:fe.fields},To&&P&&I.default.createElement(po,N({onClick:ir,txType:Ge},P)),I.default.createElement(lo.ConfirmReceiver,{amount:h.amount,scamReport:i!=null?i:null,receiver:a,receiverUsername:_o}),I.default.createElement("div",{className:fe.columns},!yo&&I.default.createElement("div",{className:fe.column},I.default.createElement(rr.Amount,{txType:Ge,tokenId:w,tokenDecimals:A.decimals,amount:String(h.amount),nft:P,rewaPriceInUsd:Z,rewaLabel:Ce,tokenLabel:A.name,tokenAvatar:((Ur=A.assets)==null?void 0:Ur.svgUrl)||""})),I.default.createElement("div",{className:fe.column},I.default.createElement(rr.Fee,{rewaLabel:Ce,rewaPriceInUsd:Z,feeLimit:x}))),I.default.createElement(rr.Data,{data:y}),f&&I.default.createElement("p",{className:S.error},f)),I.default.createElement("div",{className:fe.buttons},I.default.createElement("button",{className:S.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:uo,onClick:ho},xo),t&&I.default.createElement("button",{className:S.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:bo},or?"Close":"Back")))};0&&(module.exports={TransactionSummary});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=TransactionSummary.js.map
