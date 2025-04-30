"use strict";var Ao=Object.create;var Ae=Object.defineProperty;var ko=Object.getOwnPropertyDescriptor;var So=Object.getOwnPropertyNames,De=Object.getOwnPropertySymbols,Io=Object.getPrototypeOf,cr=Object.prototype.hasOwnProperty,qr=Object.prototype.propertyIsEnumerable;var Rr=(t,e,r)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,k=(t,e)=>{for(var r in e||(e={}))cr.call(e,r)&&Rr(t,r,e[r]);if(De)for(var r of De(e))qr.call(e,r)&&Rr(t,r,e[r]);return t};var Or=(t,e)=>{var r={};for(var o in t)cr.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&De)for(var o of De(t))e.indexOf(o)<0&&qr.call(t,o)&&(r[o]=t[o]);return r};var mr=(t,e)=>()=>(t&&(e=t(t=0)),e);var Ue=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),lr=(t,e)=>{for(var r in e)Ae(t,r,{get:e[r],enumerable:!0})},$r=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of So(e))!cr.call(t,i)&&i!==r&&Ae(t,i,{get:()=>e[i],enumerable:!(o=ko(e,i))||o.enumerable});return t};var u=(t,e,r)=>(r=t!=null?Ao(Io(t)):{},$r(e||!t||!t.__esModule?Ae(r,"default",{value:t,enumerable:!0}):r,t)),Ve=t=>$r(Ae({},"__esModule",{value:!0}),t);var Zr=Ue(Me=>{"use strict";n();Me.byteLength=Lo;Me.toByteArray=Po;Me.fromByteArray=Do;var R=[],B=[],No=typeof Uint8Array!="undefined"?Uint8Array:Array,dr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ie=0,Wr=dr.length;ie<Wr;++ie)R[ie]=dr[ie],B[dr.charCodeAt(ie)]=ie;var ie,Wr;B["-".charCodeAt(0)]=62;B["_".charCodeAt(0)]=63;function zr(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var o=r===e?0:4-r%4;return[r,o]}function Lo(t){var e=zr(t),r=e[0],o=e[1];return(r+o)*3/4-o}function Fo(t,e,r){return(e+r)*3/4-r}function Po(t){var e,r=zr(t),o=r[0],i=r[1],c=new No(Fo(t,o,i)),m=0,d=i>0?o-4:o,f;for(f=0;f<d;f+=4)e=B[t.charCodeAt(f)]<<18|B[t.charCodeAt(f+1)]<<12|B[t.charCodeAt(f+2)]<<6|B[t.charCodeAt(f+3)],c[m++]=e>>16&255,c[m++]=e>>8&255,c[m++]=e&255;return i===2&&(e=B[t.charCodeAt(f)]<<2|B[t.charCodeAt(f+1)]>>4,c[m++]=e&255),i===1&&(e=B[t.charCodeAt(f)]<<10|B[t.charCodeAt(f+1)]<<4|B[t.charCodeAt(f+2)]>>2,c[m++]=e>>8&255,c[m++]=e&255),c}function Go(t){return R[t>>18&63]+R[t>>12&63]+R[t>>6&63]+R[t&63]}function Bo(t,e,r){for(var o,i=[],c=e;c<r;c+=3)o=(t[c]<<16&16711680)+(t[c+1]<<8&65280)+(t[c+2]&255),i.push(Go(o));return i.join("")}function Do(t){for(var e,r=t.length,o=r%3,i=[],c=16383,m=0,d=r-o;m<d;m+=c)i.push(Bo(t,m,m+c>d?d:m+c));return o===1?(e=t[r-1],i.push(R[e>>2]+R[e<<4&63]+"==")):o===2&&(e=(t[r-2]<<8)+t[r-1],i.push(R[e>>10]+R[e>>4&63]+R[e<<2&63]+"=")),i.join("")}});var Kr=Ue(fr=>{n();fr.read=function(t,e,r,o,i){var c,m,d=i*8-o-1,f=(1<<d)-1,x=f>>1,g=-7,y=r?i-1:0,h=r?-1:1,b=t[e+y];for(y+=h,c=b&(1<<-g)-1,b>>=-g,g+=d;g>0;c=c*256+t[e+y],y+=h,g-=8);for(m=c&(1<<-g)-1,c>>=-g,g+=o;g>0;m=m*256+t[e+y],y+=h,g-=8);if(c===0)c=1-x;else{if(c===f)return m?NaN:(b?-1:1)*(1/0);m=m+Math.pow(2,o),c=c-x}return(b?-1:1)*m*Math.pow(2,c-o)};fr.write=function(t,e,r,o,i,c){var m,d,f,x=c*8-i-1,g=(1<<x)-1,y=g>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=o?0:c-1,w=o?1:-1,A=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(d=isNaN(e)?1:0,m=g):(m=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-m))<1&&(m--,f*=2),m+y>=1?e+=h/f:e+=h*Math.pow(2,1-y),e*f>=2&&(m++,f/=2),m+y>=g?(d=0,m=g):m+y>=1?(d=(e*f-1)*Math.pow(2,i),m=m+y):(d=e*Math.pow(2,y-1)*Math.pow(2,i),m=0));i>=8;t[r+b]=d&255,b+=w,d/=256,i-=8);for(m=m<<i|d,x+=i;x>0;t[r+b]=m&255,b+=w,m/=256,x-=8);t[r+b-w]|=A*128}});var at=Ue(ye=>{"use strict";n();var ur=Zr(),ge=Kr(),Xr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ye.Buffer=l;ye.SlowBuffer=Oo;ye.INSPECT_MAX_BYTES=50;var Re=2147483647;ye.kMaxLength=Re;l.TYPED_ARRAY_SUPPORT=Uo();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Uo(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(r){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function K(t){if(t>Re)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,l.prototype),e}function l(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return br(t)}return Jr(t,e,r)}l.poolSize=8192;function Jr(t,e,r){if(typeof t=="string")return Mo(t,e);if(ArrayBuffer.isView(t))return Ro(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(q(t,ArrayBuffer)||t&&q(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(q(t,SharedArrayBuffer)||t&&q(t.buffer,SharedArrayBuffer)))return yr(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=t.valueOf&&t.valueOf();if(o!=null&&o!==t)return l.from(o,e,r);var i=qo(t);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return l.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}l.from=function(t,e,r){return Jr(t,e,r)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function Yr(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Vo(t,e,r){return Yr(t),t<=0?K(t):e!==void 0?typeof r=="string"?K(t).fill(e,r):K(t).fill(e):K(t)}l.alloc=function(t,e,r){return Vo(t,e,r)};function br(t){return Yr(t),K(t<0?0:hr(t)|0)}l.allocUnsafe=function(t){return br(t)};l.allocUnsafeSlow=function(t){return br(t)};function Mo(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!l.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=Qr(t,e)|0,o=K(r),i=o.write(t,e);return i!==r&&(o=o.slice(0,i)),o}function gr(t){for(var e=t.length<0?0:hr(t.length)|0,r=K(e),o=0;o<e;o+=1)r[o]=t[o]&255;return r}function Ro(t){if(q(t,Uint8Array)){var e=new Uint8Array(t);return yr(e.buffer,e.byteOffset,e.byteLength)}return gr(t)}function yr(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return e===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,e):o=new Uint8Array(t,e,r),Object.setPrototypeOf(o,l.prototype),o}function qo(t){if(l.isBuffer(t)){var e=hr(t.length)|0,r=K(e);return r.length===0||t.copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||Tr(t.length)?K(0):gr(t);if(t.type==="Buffer"&&Array.isArray(t.data))return gr(t.data)}function hr(t){if(t>=Re)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Re.toString(16)+" bytes");return t|0}function Oo(t){return+t!=t&&(t=0),l.alloc(+t)}l.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==l.prototype};l.compare=function(e,r){if(q(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),q(r,Uint8Array)&&(r=l.from(r,r.offset,r.byteLength)),!l.isBuffer(e)||!l.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var o=e.length,i=r.length,c=0,m=Math.min(o,i);c<m;++c)if(e[c]!==r[c]){o=e[c],i=r[c];break}return o<i?-1:i<o?1:0};l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return l.alloc(0);var o;if(r===void 0)for(r=0,o=0;o<e.length;++o)r+=e[o].length;var i=l.allocUnsafe(r),c=0;for(o=0;o<e.length;++o){var m=e[o];if(q(m,Uint8Array))c+m.length>i.length?l.from(m).copy(i,c):Uint8Array.prototype.set.call(i,m,c);else if(l.isBuffer(m))m.copy(i,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=m.length}return i};function Qr(t,e){if(l.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||q(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return xr(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return it(t).length;default:if(i)return o?-1:xr(t).length;e=(""+e).toLowerCase(),i=!0}}l.byteLength=Qr;function $o(t,e,r){var o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return Qo(this,e,r);case"utf8":case"utf-8":return rt(this,e,r);case"ascii":return Jo(this,e,r);case"latin1":case"binary":return Yo(this,e,r);case"base64":return Ho(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return en(this,e,r);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}l.prototype._isBuffer=!0;function ae(t,e,r){var o=t[e];t[e]=t[r],t[r]=o}l.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)ae(this,r,r+1);return this};l.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)ae(this,r,r+3),ae(this,r+1,r+2);return this};l.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)ae(this,r,r+7),ae(this,r+1,r+6),ae(this,r+2,r+5),ae(this,r+3,r+4);return this};l.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?rt(this,0,e):$o.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:l.compare(this,e)===0};l.prototype.inspect=function(){var e="",r=ye.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"};Xr&&(l.prototype[Xr]=l.prototype.inspect);l.prototype.compare=function(e,r,o,i,c){if(q(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),o===void 0&&(o=e?e.length:0),i===void 0&&(i=0),c===void 0&&(c=this.length),r<0||o>e.length||i<0||c>this.length)throw new RangeError("out of range index");if(i>=c&&r>=o)return 0;if(i>=c)return-1;if(r>=o)return 1;if(r>>>=0,o>>>=0,i>>>=0,c>>>=0,this===e)return 0;for(var m=c-i,d=o-r,f=Math.min(m,d),x=this.slice(i,c),g=e.slice(r,o),y=0;y<f;++y)if(x[y]!==g[y]){m=x[y],d=g[y];break}return m<d?-1:d<m?1:0};function et(t,e,r,o,i){if(t.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Tr(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=l.from(e,o)),l.isBuffer(e))return e.length===0?-1:Hr(t,e,r,o,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):Hr(t,[e],r,o,i);throw new TypeError("val must be string, number or Buffer")}function Hr(t,e,r,o,i){var c=1,m=t.length,d=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(t.length<2||e.length<2)return-1;c=2,m/=2,d/=2,r/=2}function f(b,w){return c===1?b[w]:b.readUInt16BE(w*c)}var x;if(i){var g=-1;for(x=r;x<m;x++)if(f(t,x)===f(e,g===-1?0:x-g)){if(g===-1&&(g=x),x-g+1===d)return g*c}else g!==-1&&(x-=x-g),g=-1}else for(r+d>m&&(r=m-d),x=r;x>=0;x--){for(var y=!0,h=0;h<d;h++)if(f(t,x+h)!==f(e,h)){y=!1;break}if(y)return x}return-1}l.prototype.includes=function(e,r,o){return this.indexOf(e,r,o)!==-1};l.prototype.indexOf=function(e,r,o){return et(this,e,r,o,!0)};l.prototype.lastIndexOf=function(e,r,o){return et(this,e,r,o,!1)};function Wo(t,e,r,o){r=Number(r)||0;var i=t.length-r;o?(o=Number(o),o>i&&(o=i)):o=i;var c=e.length;o>c/2&&(o=c/2);for(var m=0;m<o;++m){var d=parseInt(e.substr(m*2,2),16);if(Tr(d))return m;t[r+m]=d}return m}function zo(t,e,r,o){return qe(xr(e,t.length-r),t,r,o)}function Zo(t,e,r,o){return qe(on(e),t,r,o)}function Ko(t,e,r,o){return qe(it(e),t,r,o)}function Xo(t,e,r,o){return qe(nn(e,t.length-r),t,r,o)}l.prototype.write=function(e,r,o,i){if(r===void 0)i="utf8",o=this.length,r=0;else if(o===void 0&&typeof r=="string")i=r,o=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(o)?(o=o>>>0,i===void 0&&(i="utf8")):(i=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-r;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var m=!1;;)switch(i){case"hex":return Wo(this,e,r,o);case"utf8":case"utf-8":return zo(this,e,r,o);case"ascii":case"latin1":case"binary":return Zo(this,e,r,o);case"base64":return Ko(this,e,r,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Xo(this,e,r,o);default:if(m)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ho(t,e,r){return e===0&&r===t.length?ur.fromByteArray(t):ur.fromByteArray(t.slice(e,r))}function rt(t,e,r){r=Math.min(t.length,r);for(var o=[],i=e;i<r;){var c=t[i],m=null,d=c>239?4:c>223?3:c>191?2:1;if(i+d<=r){var f,x,g,y;switch(d){case 1:c<128&&(m=c);break;case 2:f=t[i+1],(f&192)===128&&(y=(c&31)<<6|f&63,y>127&&(m=y));break;case 3:f=t[i+1],x=t[i+2],(f&192)===128&&(x&192)===128&&(y=(c&15)<<12|(f&63)<<6|x&63,y>2047&&(y<55296||y>57343)&&(m=y));break;case 4:f=t[i+1],x=t[i+2],g=t[i+3],(f&192)===128&&(x&192)===128&&(g&192)===128&&(y=(c&15)<<18|(f&63)<<12|(x&63)<<6|g&63,y>65535&&y<1114112&&(m=y))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),i+=d}return jo(o)}var jr=4096;function jo(t){var e=t.length;if(e<=jr)return String.fromCharCode.apply(String,t);for(var r="",o=0;o<e;)r+=String.fromCharCode.apply(String,t.slice(o,o+=jr));return r}function Jo(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]&127);return o}function Yo(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]);return o}function Qo(t,e,r){var o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);for(var i="",c=e;c<r;++c)i+=an[t[c]];return i}function en(t,e,r){for(var o=t.slice(e,r),i="",c=0;c<o.length-1;c+=2)i+=String.fromCharCode(o[c]+o[c+1]*256);return i}l.prototype.slice=function(e,r){var o=this.length;e=~~e,r=r===void 0?o:~~r,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),r<0?(r+=o,r<0&&(r=0)):r>o&&(r=o),r<e&&(r=e);var i=this.subarray(e,r);return Object.setPrototypeOf(i,l.prototype),i};function S(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||S(e,r,this.length);for(var i=this[e],c=1,m=0;++m<r&&(c*=256);)i+=this[e+m]*c;return i};l.prototype.readUintBE=l.prototype.readUIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||S(e,r,this.length);for(var i=this[e+--r],c=1;r>0&&(c*=256);)i+=this[e+--r]*c;return i};l.prototype.readUint8=l.prototype.readUInt8=function(e,r){return e=e>>>0,r||S(e,1,this.length),this[e]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||S(e,2,this.length),this[e]|this[e+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||S(e,2,this.length),this[e]<<8|this[e+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||S(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||S(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};l.prototype.readIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||S(e,r,this.length);for(var i=this[e],c=1,m=0;++m<r&&(c*=256);)i+=this[e+m]*c;return c*=128,i>=c&&(i-=Math.pow(2,8*r)),i};l.prototype.readIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||S(e,r,this.length);for(var i=r,c=1,m=this[e+--i];i>0&&(c*=256);)m+=this[e+--i]*c;return c*=128,m>=c&&(m-=Math.pow(2,8*r)),m};l.prototype.readInt8=function(e,r){return e=e>>>0,r||S(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};l.prototype.readInt16LE=function(e,r){e=e>>>0,r||S(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o};l.prototype.readInt16BE=function(e,r){e=e>>>0,r||S(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o};l.prototype.readInt32LE=function(e,r){return e=e>>>0,r||S(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};l.prototype.readInt32BE=function(e,r){return e=e>>>0,r||S(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};l.prototype.readFloatLE=function(e,r){return e=e>>>0,r||S(e,4,this.length),ge.read(this,e,!0,23,4)};l.prototype.readFloatBE=function(e,r){return e=e>>>0,r||S(e,4,this.length),ge.read(this,e,!1,23,4)};l.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||S(e,8,this.length),ge.read(this,e,!0,52,8)};l.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||S(e,8,this.length),ge.read(this,e,!1,52,8)};function F(t,e,r,o,i,c){if(!l.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<c)throw new RangeError('"value" argument is out of bounds');if(r+o>t.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var c=Math.pow(2,8*o)-1;F(this,e,r,o,c,0)}var m=1,d=0;for(this[r]=e&255;++d<o&&(m*=256);)this[r+d]=e/m&255;return r+o};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var c=Math.pow(2,8*o)-1;F(this,e,r,o,c,0)}var m=o-1,d=1;for(this[r+m]=e&255;--m>=0&&(d*=256);)this[r+m]=e/d&255;return r+o};l.prototype.writeUint8=l.prototype.writeUInt8=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,1,255,0),this[r]=e&255,r+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};l.prototype.writeIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var c=Math.pow(2,8*o-1);F(this,e,r,o,c-1,-c)}var m=0,d=1,f=0;for(this[r]=e&255;++m<o&&(d*=256);)e<0&&f===0&&this[r+m-1]!==0&&(f=1),this[r+m]=(e/d>>0)-f&255;return r+o};l.prototype.writeIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var c=Math.pow(2,8*o-1);F(this,e,r,o,c-1,-c)}var m=o-1,d=1,f=0;for(this[r+m]=e&255;--m>=0&&(d*=256);)e<0&&f===0&&this[r+m+1]!==0&&(f=1),this[r+m]=(e/d>>0)-f&255;return r+o};l.prototype.writeInt8=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1};l.prototype.writeInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};l.prototype.writeInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};l.prototype.writeInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};l.prototype.writeInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||F(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function tt(t,e,r,o,i,c){if(r+o>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function ot(t,e,r,o,i){return e=+e,r=r>>>0,i||tt(t,e,r,4,34028234663852886e22,-34028234663852886e22),ge.write(t,e,r,o,23,4),r+4}l.prototype.writeFloatLE=function(e,r,o){return ot(this,e,r,!0,o)};l.prototype.writeFloatBE=function(e,r,o){return ot(this,e,r,!1,o)};function nt(t,e,r,o,i){return e=+e,r=r>>>0,i||tt(t,e,r,8,17976931348623157e292,-17976931348623157e292),ge.write(t,e,r,o,52,8),r+8}l.prototype.writeDoubleLE=function(e,r,o){return nt(this,e,r,!0,o)};l.prototype.writeDoubleBE=function(e,r,o){return nt(this,e,r,!1,o)};l.prototype.copy=function(e,r,o,i){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!i&&i!==0&&(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<o&&(i=o),i===o||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-o&&(i=e.length-r+o);var c=i-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,o,i):Uint8Array.prototype.set.call(e,this.subarray(o,i),r),c};l.prototype.fill=function(e,r,o,i){if(typeof e=="string"){if(typeof r=="string"?(i=r,r=0,o=this.length):typeof o=="string"&&(i=o,o=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!l.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){var c=e.charCodeAt(0);(i==="utf8"&&c<128||i==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<o)throw new RangeError("Out of range index");if(o<=r)return this;r=r>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var m;if(typeof e=="number")for(m=r;m<o;++m)this[m]=e;else{var d=l.isBuffer(e)?e:l.from(e,i),f=d.length;if(f===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(m=0;m<o-r;++m)this[m+r]=d[m%f]}return this};var rn=/[^+/0-9A-Za-z-_]/g;function tn(t){if(t=t.split("=")[0],t=t.trim().replace(rn,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function xr(t,e){e=e||1/0;for(var r,o=t.length,i=null,c=[],m=0;m<o;++m){if(r=t.charCodeAt(m),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&c.push(239,191,189);continue}else if(m+1===o){(e-=3)>-1&&c.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&c.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&c.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;c.push(r)}else if(r<2048){if((e-=2)<0)break;c.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;c.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;c.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return c}function on(t){for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r)&255);return e}function nn(t,e){for(var r,o,i,c=[],m=0;m<t.length&&!((e-=2)<0);++m)r=t.charCodeAt(m),o=r>>8,i=r%256,c.push(i),c.push(o);return c}function it(t){return ur.toByteArray(tn(t))}function qe(t,e,r,o){for(var i=0;i<o&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function q(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Tr(t){return t!==t}var an=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var o=r*16,i=0;i<16;++i)e[o+i]=t[r]+t[i];return e}()});var lt=Ue((Ka,mt)=>{n();var _=mt.exports={},O,$;function _r(){throw new Error("setTimeout has not been defined")}function vr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?O=setTimeout:O=_r}catch(t){O=_r}try{typeof clearTimeout=="function"?$=clearTimeout:$=vr}catch(t){$=vr}})();function st(t){if(O===setTimeout)return setTimeout(t,0);if((O===_r||!O)&&setTimeout)return O=setTimeout,setTimeout(t,0);try{return O(t,0)}catch(e){try{return O.call(null,t,0)}catch(r){return O.call(this,t,0)}}}function sn(t){if($===clearTimeout)return clearTimeout(t);if(($===vr||!$)&&clearTimeout)return $=clearTimeout,clearTimeout(t);try{return $(t)}catch(e){try{return $.call(null,t)}catch(r){return $.call(this,t)}}}var X=[],xe=!1,se,Oe=-1;function pn(){!xe||!se||(xe=!1,se.length?X=se.concat(X):Oe=-1,X.length&&pt())}function pt(){if(!xe){var t=st(pn);xe=!0;for(var e=X.length;e;){for(se=X,X=[];++Oe<e;)se&&se[Oe].run();Oe=-1,e=X.length}se=null,xe=!1,sn(t)}}_.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];X.push(new ct(t,e)),X.length===1&&!xe&&st(pt)};function ct(t,e){this.fun=t,this.array=e}ct.prototype.run=function(){this.fun.apply(null,this.array)};_.title="browser";_.browser=!0;_.env={};_.argv=[];_.version="";_.versions={};function H(){}_.on=H;_.addListener=H;_.once=H;_.off=H;_.removeListener=H;_.removeAllListeners=H;_.emit=H;_.prependListener=H;_.prependOnceListener=H;_.listeners=function(t){return[]};_.binding=function(t){throw new Error("process.binding is not supported")};_.cwd=function(){return"/"};_.chdir=function(t){throw new Error("process.chdir is not supported")};_.umask=function(){return 0}});var a,s,Xa,n=mr(()=>{a=u(at()),s=u(lt()),Xa=function(t){function e(){var o=this||self;return delete t.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object)});var Fr={};lr(Fr,{default:()=>ka});var Qe,Aa,ka,Pr=mr(()=>{"use strict";n();Qe=u(require("react")),Aa=t=>Qe.createElement("svg",k({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),Qe.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Qe.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),ka=Aa});var Wt={};lr(Wt,{default:()=>Ga});var tr,Pa,Ga,zt=mr(()=>{"use strict";n();tr=u(require("react")),Pa=t=>tr.createElement("svg",k({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},t),tr.createElement("g",null,tr.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Ga=Pa});var Oa={};lr(Oa,{ConfirmScreen:()=>qa});module.exports=Ve(Oa);n();n();var Pe=u(require("react")),go=u(require("classnames"));n();n();var Ie=u(require("react"));n();var $e=u(require("react")),Ya=(0,$e.createContext)({});n();n();var de=u(require("react")),ea=require("@terradharitri/sdk-dapp/constants/index"),ra=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ta=u(require("bignumber.js")),oa=require("formik");n();n();n();var cn=require("bech32");n();n();n();n();n();var V=require("@terradharitri/sdk-dapp/types/tokens.types");n();n();var ln=require("@terradharitri/sdk-dapp/constants"),dn=require("@terradharitri/sdk-dapp/utils/account/getAccount");n();n();var Er=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),dt=({nft:t,skipDescription:e})=>{var A,P;let{name:r,metadata:o,media:i,isNsfw:c,scamInfo:m,verified:d}=t,f="Scam - ",{isSuspicious:x,message:g}=(0,Er.getScamFlag)({verified:d,message:r,isNsfw:c,scamInfo:m,messagePrefix:f});if(!(o!=null&&o.description)||e){let Z=x?"placeholder":(A=i==null?void 0:i[0])==null?void 0:A.thumbnailUrl;return{isSuspicious:x,name:r||g,thumbnail:Z,description:""}}let{message:y,isSuspicious:h}=(0,Er.getScamFlag)({message:o.description,messagePrefix:f,verified:d}),b=x||h,w=b?"placeholder":(P=i==null?void 0:i[0])==null?void 0:P.thumbnailUrl;return{isSuspicious:b,name:r||g,thumbnail:w,description:y||o.description}};n();var fn=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var We=u(require("anchorme")),wr=t=>t.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),ft=(t,e)=>{if(e){let r=`[Message hidden due to suspicious content - ${e.info}]`;if(t.length>1e3)return{output:r,stringWithLinks:t,found:!0};let o=wr(t.normalize("NFKC")),i=We.default.list(o),c=[];if(i.length>0){let m=r;i.forEach((d,f)=>{let{string:x}=d,g="",y="",h=x;for(let b=0;b<m.length;b++){let w=m.slice(b),[A]=We.default.list(wr(w));A&&x===A.string&&(g=m.substring(0,b))}for(let b=r.length;b>0;b--){let w=m.slice(0,b),[A]=We.default.list(wr(w));A&&x===A.string&&(y=m.substring(b))}c.push(g),c.push(h),m=y,f===i.length-1&&c.push(y)})}else c.push(t);return{output:r,stringWithLinks:c.join(""),found:!0}}else return{output:t,stringWithLinks:"",found:!1}};n();n();var ut=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ce=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Cr=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),D=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();n();n();n();n();n();var me=u(require("react")),_i=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),vi=require("formik");n();n();var vt=require("@terradharitri/sdk-dapp/constants/index"),Vn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Mn=u(require("bignumber.js"));n();n();var ke=require("@terradharitri/sdk-dapp/constants/index");function gt({feeLimit:t,rewaPriceInUsd:e}){let r=(0,ce.formatAmount)({input:t,decimals:ke.DECIMALS,digits:ke.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,Cr.getUsdValue)({amount:r,usd:e,decimals:ke.DIGITS})}`}n();var gn=require("@terradharitri/sdk-dapp/constants/index");n();n();var v="0";n();var yt=require("@terradharitri/sdk-dapp/constants/index"),xn=u(require("bignumber.js"));n();var yn=require("@terradharitri/sdk-dapp/constants/index");n();var bn=require("@terradharitri/sdk-dapp/constants/index");n();n();var Se=require("@terradharitri/sdk-core"),hn=require("@terradharitri/sdk-dapp/constants/index"),Tn=u(require("bignumber.js"));n();n();var vn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");n();var En=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var Cn=u(require("bignumber.js"));n();var Ln=require("@terradharitri/sdk-dapp/constants/index"),Fn=require("@terradharitri/sdk-dapp/utils/smartContracts"),Pn=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Gn=u(require("bignumber.js"));n();var Nn=u(require("bignumber.js"));n();n();var In=u(require("axios"));n();n();n();var kn=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var An=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var he=require("@terradharitri/sdk-dapp/constants/index"),_t=u(require("bignumber.js"));var bt,ht,Tt,Sr=(0,ce.formatAmount)({input:String((bt=he.GAS_PRICE)!=null?bt:1e9),decimals:(ht=he.DECIMALS)!=null?ht:18,showLastNonZeroDecimal:!0,digits:(Tt=he.DIGITS)!=null?Tt:4}),Bn=new _t.default(Sr).times(10).toString(10);n();var Ke=require("@terradharitri/sdk-dapp/constants/index"),Dn=u(require("bignumber.js"));n();var Un=u(require("bignumber.js"));n();n();var Ct=require("yup");n();var Xe=require("@terradharitri/sdk-dapp/constants/ledger.constants"),Et=u(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),He=require("yup"),Rn=(0,He.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:r}=this.parent;return!(r&&e&&e.length&&!r.ledgerDataActive)}),qn=(0,He.string)().test({name:"hashSign",test:function(e){let{ledger:r,isGuarded:o}=this.parent;if(r){let{ledgerWithHashSign:i,ledgerWithGuardians:c}=(0,Et.default)(r.version);if(e&&e.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${Xe.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(o&&!c)return this.createError({message:`You need at least DharitrI app version ${Xe.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),On=[Rn,qn],Bc=On.reduce((t,e)=>t.concat(e),(0,He.string)());n();var $n=require("@terradharitri/sdk-dapp/constants/index"),Wn=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),zn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Zn=require("yup");n();var jn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Jn=u(require("bignumber.js")),Yn=require("yup");n();var Kn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Xn=u(require("bignumber.js")),Hn=require("yup");n();var Qn=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ei=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ri=u(require("bignumber.js")),ti=require("yup");n();var oi=u(require("bignumber.js")),ni=require("yup");n();var ii=require("@terradharitri/sdk-dapp/constants/index"),ai=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),si=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),pi=u(require("bignumber.js")),ci=require("yup");n();var mi=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),li=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),di=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),fi=u(require("bignumber.js")),ui=require("yup");n();var gi=u(require("bignumber.js")),yi=require("yup");n();var xi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),bi=require("yup");n();var hi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ti=require("yup");n();n();var Ei=(0,me.createContext)({});function W(){return(0,me.useContext)(Ei)}n();n();var j=u(require("react")),Bi=require("formik"),Di=u(require("lodash/uniqBy"));n();n();n();var wi=u(require("axios"));n();n();var Ci=u(require("axios"));n();n();var At=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ai=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),ki=u(require("axios")),Si=u(require("lodash/uniqBy"));n();var Ii=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ni=u(require("axios"));n();var kt=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Li=u(require("axios"));n();n();var _e=u(require("react"));var $l=(0,_e.createContext)({});n();n();var St=require("react"),Fi=require("@terradharitri/sdk-dapp/constants/index");var Pi=require("@terradharitri/sdk-dapp/types/enums.types");n();var hd=(0,j.createContext)({});n();n();var Gt=require("@terradharitri/sdk-dapp/constants/index"),Qi=require("formik");n();n();var le=u(require("react")),Ft=require("@terradharitri/sdk-dapp/constants/index"),Xi=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Hi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ji=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ji=u(require("bignumber.js")),Yi=require("formik");n();n();n();n();var Ui=u(require("bignumber.js"));n();var Vi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Mi=u(require("bignumber.js"));n();n();var Lt=require("react"),qi=require("@terradharitri/sdk-dapp/constants/index"),Oi=require("@terradharitri/sdk-dapp/utils/smartContracts"),$i=u(require("bignumber.js")),Wi=require("formik");n();var It=require("react");n();n();var zi=require("@terradharitri/sdk-dapp/constants/index"),Zi=u(require("bignumber.js"));var Af=(0,le.createContext)({});var tu=(0,de.createContext)({});n();n();var Ee=u(require("react")),na=require("formik");var xu=(0,Ee.createContext)({});n();n();var we=u(require("react")),da=require("formik");n();n();n();var Bt=require("react"),sa=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),pa=u(require("lodash/uniqBy"));n();n();var ia=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),aa=require("@terradharitri/sdk-dapp/utils");n();var la=require("react");n();var ca=require("react"),ma=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var Ku=(0,we.createContext)({});n();n();var Je=u(require("react")),_a=require("formik");n();n();n();n();n();var ba=require("react"),ha=require("@terradharitri/sdk-dapp/utils");n();var ya=require("react"),xa=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var fa=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ua=u(require("axios"));n();var ga=u(require("axios"));var Ng=(0,Je.createContext)({});var va=(0,Ie.createContext)({});function Ye(){return(0,Ie.useContext)(va)}n();n();n();var N=u(require("react")),fo=require("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");n();var Ea=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ea));var I={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};n();var Lr=u(require("react")),wa=require("@terradharitri/sdk-dapp/constants/index");n();var po=require("react");n();n();var J=u(require("react")),rr=require("@terradharitri/sdk-dapp/constants/index"),Br=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Vt=require("@terradharitri/sdk-dapp/UI/UsdValue/index");n();n();var z=u(require("react")),Dt=require("@fortawesome/free-solid-svg-icons"),Ut=require("@fortawesome/react-fontawesome"),Gr=u(require("classnames"));n();var Ca=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ca));var re={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"};var Sa=(Pr(),Ve(Fr)).default,er=t=>{let{avatar:e,type:r}=t;return r==="NonFungibleDCDT"?z.default.createElement("div",{className:(0,Gr.default)(re.tokenAvatar,re.tokenAvatarNFT)},"NFT"):r==="SemiFungibleDCDT"?z.default.createElement("div",{className:(0,Gr.default)(re.tokenAvatar,re.tokenAvatarSFT)},"SFT"):r==="REWA"?z.default.createElement("div",{className:re.tokenAvatar},t.RewaIcon?z.default.createElement(t.RewaIcon,null):z.default.createElement(Sa,null)):e?z.default.createElement("div",{className:re.tokenAvatar},z.default.createElement("img",{src:e})):z.default.createElement("div",{className:re.tokenAvatar},z.default.createElement(Ut.FontAwesomeIcon,{icon:Dt.faDiamond}))};n();var Ia=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ia));var Ne={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Mt=({label:t="Amount",amount:e,txType:r,tokenDecimals:o,tokenId:i,rewaLabel:c,rewaPriceInUsd:m,nft:d,tokenAvatar:f})=>{let x=(d==null?void 0:d.decimals)||0,g=r==="DCDT",y=r==="MetaDCDT",h=r==="NonFungibleDCDT",b=y?(0,D.parseAmount)(e,d==null?void 0:d.decimals):e,w=Boolean(d&&e),A=i.split("-")[0],P=g?o:rr.DECIMALS,Z=w?J.default.createElement(Br.FormatAmount,{rewaLabel:c,value:b,decimals:x,digits:r==="MetaDCDT"?rr.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):J.default.createElement(Br.FormatAmount,{rewaLabel:c,value:(0,D.parseAmount)(e,P),showLabel:!1,decimals:P,showLastNonZeroDecimal:!0,token:g?A:c,"data-testid":"confirmAmount"});return h?null:J.default.createElement("div",{className:Ne.amount},J.default.createElement("span",{className:I.label},t),J.default.createElement("div",{className:Ne.token},J.default.createElement(er,{type:r,avatar:f}),J.default.createElement("div",{className:Ne.value},Z," ",A)),!g&&J.default.createElement(Vt.UsdValue,{amount:e,usd:m,"data-testid":"confirmUsdValue",className:Ne.price}))};n();n();var E=u(require("react")),Rt=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");n();var Na=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Na));var Le={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"};var La=(t,e)=>[...t.matchAll(new RegExp(e,"gi"))].map(r=>r.index),qt=({label:t="Data",scCallLabel:e="SC Call",data:r,highlight:o,isScCall:i})=>{let c=E.default.createElement(E.default.Fragment,null,r),[m,...d]=o&&i?o.split("@"):[];if(r&&o&&La(r,o).length===1)switch(!0){case r.startsWith(o):{let[,f]=r.split(o);c=E.default.createElement(E.default.Fragment,null,o,E.default.createElement("span",null,f));break}case r.endsWith(o):{let[f]=r.split(o);c=E.default.createElement(E.default.Fragment,null,E.default.createElement("span",null,f),o);break}default:{let[f,x]=r.split(o);c=E.default.createElement(E.default.Fragment,null,E.default.createElement("span",null,f),o,E.default.createElement("span",null,x));break}}return E.default.createElement(E.default.Fragment,null,m&&E.default.createElement("div",{className:Le.data},E.default.createElement("span",{className:I.label},e),E.default.createElement("div",{"data-testid":"confirmScCall",className:Le.value},[(0,Rt.decodePart)(m),...d].join("@"))),E.default.createElement("div",{className:Le.data},E.default.createElement("span",{className:I.label},t),E.default.createElement("div",{"data-testid":"confirmData",className:Le.value},r?c:"N/A")))};n();n();var te=u(require("react")),Ot=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");n();var Fa=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fa));var Fe={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var $t=({rewaPriceInUsd:t,label:e="Fee",feeLimit:r,rewaLabel:o})=>te.default.createElement("div",{className:Fe.fee},te.default.createElement("span",{className:I.label},e),te.default.createElement("div",{className:Fe.token},te.default.createElement(er,{type:"REWA"}),te.default.createElement("div",{className:Fe.value},te.default.createElement(Ot.FormatAmount,{rewaLabel:o,value:r,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),r!==v&&te.default.createElement("span",{className:Fe.price},gt({feeLimit:r,rewaPriceInUsd:t})));n();n();var G=u(require("react")),Kt=require("@fortawesome/free-solid-svg-icons"),Xt=require("@fortawesome/react-fontawesome"),Ht=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),jt=require("@terradharitri/sdk-dapp/UI/CopyButton"),Jt=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),Yt=require("@terradharitri/sdk-dapp/UI/Trim"),Qt=u(require("classnames"));n();var{default:Zt}=(zt(),Ve(Wt));n();var Ba=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ba));var M={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"};var eo=({label:t="Receiver",receiver:e,scamReport:r,receiverUsername:o})=>{let i=Boolean(o),c=o!=null?o:e;return G.default.createElement("div",{className:M.confirmReceiver},G.default.createElement("span",{className:I.label},t),G.default.createElement("span",{className:(0,Qt.default)(M.value,{[M.shrunk]:i}),"data-testid":"confirmReceiver"},i&&G.default.createElement(Zt,{className:M.icon}),c,i&&G.default.createElement(Jt.ExplorerLink,{page:`/${Ht.ACCOUNTS_ENDPOINT}/${e}`,className:M.explorer})),i&&G.default.createElement("span",{className:M.subValue},G.default.createElement(Yt.Trim,{text:e,className:M.subValueTrim}),G.default.createElement(jt.CopyButton,{text:e,className:M.subValueCopy})),r&&G.default.createElement("div",{className:M.scam},G.default.createElement("span",null,G.default.createElement(Xt.FontAwesomeIcon,{icon:Kt.faExclamationTriangle,className:M.icon}),G.default.createElement("small",{"data-testid":"confirmScamReport"},r))))};n();n();var oe=u(require("react"));n();n();var C=u(require("react")),ro=require("@fortawesome/free-solid-svg-icons"),to=require("@fortawesome/react-fontawesome"),oo=u(require("@terradharitri/sdk-dapp/constants/index")),no=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),io=u(require("classnames"));n();var Da=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Da));var ue={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};var Ua=(Pr(),Ve(Fr)).default,Dr=({RewaIcon:t,inDropdown:e=!1,isRewa:r,nftTokenDetails:o,nftType:i,token:c})=>{var Z,Ce;let{name:m,identifier:d,balance:f,decimals:x}=c,g=((Z=c.assets)==null?void 0:Z.svgUrl)||((Ce=c.assets)==null?void 0:Ce.pngUrl)||"",y=g?28:20,[h,b]=(0,C.useState)(m);(0,C.useEffect)(()=>{var Ge;((Ge=o==null?void 0:o.uris)==null?void 0:Ge.some(ar=>{let sr=a.Buffer.from(String(ar),"base64").toString(),{found:pr}=ft(sr,o==null?void 0:o.scamInfo);return pr}))||b(m)},[m]);let w=C.default.createElement(to.FontAwesomeIcon,{icon:ro.faDiamond});i==V.NftEnumType.NonFungibleDCDT&&(w=C.default.createElement("div",{className:"nft-type","data-testid":`${d}-type-nft`},"NFT")),i===V.NftEnumType.SemiFungibleDCDT&&(w=C.default.createElement("div",{className:"nft-type","data-testid":`${d}-type-sft`},"SFT"));let A=!e&&i!==V.NftEnumType.NonFungibleDCDT,P=C.default.createElement("div",{className:ue.tokenElementCircle},w);return g&&(P=C.default.createElement("img",{className:ue.tokenElementCircle,src:g,alt:m,height:y})),r&&(P=C.default.createElement("div",{className:ue.tokenElementCircle},t?C.default.createElement(t,{height:36}):C.default.createElement(Ua,{height:36}))),C.default.createElement("div",{className:(0,io.default)(I.value,ue.tokenElement)},C.default.createElement("div",{className:ue.tokenElementWrapper},P),C.default.createElement("div",{"data-testid":"tokenName"},C.default.createElement("span",{"data-testid":`${d}-element`},C.default.createElement("span",null,h)," ",C.default.createElement("span",{className:ue.tokenElementIdentifier},d)),A&&C.default.createElement(no.FormatAmount,{rewaLabel:d,value:f||v,digits:i===V.NftEnumType.SemiFungibleDCDT?0:oo.DIGITS,token:d,showLabel:!1,decimals:x,"data-testid":`${d}-balance`})))};n();var Va=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Va));var ao={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"};var so=({RewaIcon:t,rewaLabel:e,isDcdtTransaction:r,nft:o,tokenAvatar:i,tokenId:c,tokenIdError:m})=>{var f;let d=(o==null?void 0:o.name)||"";return oe.default.createElement("div",{className:ao.token},oe.default.createElement("span",{className:I.label},o?oe.default.createElement("span",null,o==null?void 0:o.name," "):"","Token"),oe.default.createElement("div",null,o?oe.default.createElement(Dr,{inDropdown:!0,token:{name:o==null?void 0:o.name,identifier:o==null?void 0:o.identifier,decimals:0,balance:v,ticker:"",assets:{svgUrl:((f=o==null?void 0:o.assets)==null?void 0:f.svgUrl)||""}}}):oe.default.createElement(Dr,{inDropdown:!0,token:{name:r?d:"DharitrI eGold",identifier:r?c:e,decimals:0,balance:v,ticker:"",assets:{svgUrl:i||""}},isRewa:c===e,RewaIcon:t})),m&&oe.default.createElement("div",{className:I.error},m))};var ne=class extends po.Component{render(){return null}};ne.Receiver=eo,ne.Amount=Mt,ne.Fee=$t,ne.Data=qt,ne.Token=so;var or=ne;n();n();var Y=u(require("react")),Ur=u(require("classnames"));n();var Ma=`.dapp-core-component__styles-module__preview {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ma));var U={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"};var co=t=>{let g=t,{txType:e,onClick:r,identifier:o}=g,i=Or(g,["txType","onClick","identifier"]),{name:c,thumbnail:m}=dt({nft:i}),d=["NonFungibleDCDT","SemiFungibleDCDT"].includes(e),f=e==="NonFungibleDCDT"?"NFT":"SFT",x=y=>{y.preventDefault(),r&&r(y,Object.assign(i,{identifier:o}))};return d?Y.default.createElement("div",{onClick:x,"data-testid":"token-preview",className:(0,Ur.default)(U.preview,{[U.clickable]:Boolean(r)})},Y.default.createElement("img",{src:m,className:U.image}),Y.default.createElement("div",{className:U.content},Y.default.createElement("div",{className:U.left},Y.default.createElement("div",{"data-testid":"token-preview-name",className:U.name},c),Y.default.createElement("div",{"data-testid":"token-preview-identifier",className:U.identifier},o)),Y.default.createElement("div",{className:U.right},Y.default.createElement("div",{className:(0,Ur.default)(U.badge,{[U.nft]:e==="NonFungibleDCDT",[U.sft]:e==="SemiFungibleDCDT"})},f)))):null};n();var Ra=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ra));var Q={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};n();n();var nr=require("@terradharitri/sdk-dapp/types/enums.types"),mo=({providerType:t,hasGuardianScreen:e})=>e?"Confirm & Continue":t===nr.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":t===nr.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":t===nr.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";n();var lo=({receiverAddress:t,knownAddresses:e,existingReceiverUsername:r})=>{if(r)return r;let o=e==null?void 0:e.find(i=>i.address===t);return o==null?void 0:o.username};var uo=({isConfirmCloseBtnVisible:t=!0,providerType:e})=>{var Mr;let{setIsGuardianScreenVisible:r}=W(),{receiverUsernameInfo:{receiverUsername:o},receiverInfo:{scamError:i,receiver:c,knownAddresses:m},formInfo:d,gasInfo:{gasCostError:f,feeLimit:x},accountInfo:{isGuarded:g},dataFieldInfo:{data:y},amountInfo:h,tokensInfo:b}=Ye(),{tokenId:w,tokenDetails:A,nft:P,rewaPriceInUsd:Z,rewaLabel:Ce}=b,{readonly:ir,onCloseForm:Ge,onInvalidateForm:ar,onPreviewClick:sr,onSubmitForm:pr,txType:Be,hasGuardianScreen:Vr}=d,yo=()=>{r(!0)},[xo,bo]=(0,N.useState)(!1),ho=Be==="NonFungibleDCDT",To=mo({providerType:e,hasGuardianScreen:Vr}),_o=Co=>{Co.preventDefault(),ir?Ge():ar()},vo=()=>{if(g&&Vr)return yo();bo(!0),pr()},Eo=!["REWA","DCDT","MetaDCDT"].includes(Be),wo=lo({knownAddresses:m,receiverAddress:c,existingReceiverUsername:o});return N.default.createElement("div",{className:Q.summary},N.default.createElement("div",{className:Q.fields},Eo&&P&&N.default.createElement(co,k({onClick:sr,txType:Be},P)),N.default.createElement(fo.ConfirmReceiver,{amount:h.amount,scamReport:i!=null?i:null,receiver:c,receiverUsername:wo}),N.default.createElement("div",{className:Q.columns},!ho&&N.default.createElement("div",{className:Q.column},N.default.createElement(or.Amount,{txType:Be,tokenId:w,tokenDecimals:A.decimals,amount:String(h.amount),nft:P,rewaPriceInUsd:Z,rewaLabel:Ce,tokenLabel:A.name,tokenAvatar:((Mr=A.assets)==null?void 0:Mr.svgUrl)||""})),N.default.createElement("div",{className:Q.column},N.default.createElement(or.Fee,{rewaLabel:Ce,rewaPriceInUsd:Z,feeLimit:x}))),N.default.createElement(or.Data,{data:y}),f&&N.default.createElement("p",{className:I.error},f)),N.default.createElement("div",{className:Q.buttons},N.default.createElement("button",{className:I.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:xo,onClick:vo},To),t&&N.default.createElement("button",{className:I.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:_o},ir?"Close":"Back")))};var qa=t=>{let{formInfo:{setHasGuardianScreen:e}}=Ye();return(0,Pe.useEffect)(()=>{t.hasGuardianScreen&&e(!0)},[]),Pe.default.createElement("div",{className:(0,go.default)(Q.confirm,t.className),"data-testid":"confirmScreen"},Pe.default.createElement(uo,k({},t)))};0&&(module.exports={ConfirmScreen});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
