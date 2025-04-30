"use strict";var bt=Object.create;var Je=Object.defineProperty;var wt=Object.getOwnPropertyDescriptor;var xt=Object.getOwnPropertyNames;var Et=Object.getPrototypeOf,At=Object.prototype.hasOwnProperty;var It=(o,e)=>()=>(o&&(e=o(o=0)),e);var ye=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var Se=(o,e,r,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of xt(e))!At.call(o,i)&&i!==r&&Je(o,i,{get:()=>e[i],enumerable:!(c=wt(e,i))||c.enumerable});return o},Te=(o,e,r)=>(Se(o,e,"default"),r&&Se(r,e,"default")),Ke=(o,e,r)=>(r=o!=null?bt(Et(o)):{},Se(e||!o||!o.__esModule?Je(r,"default",{value:o,enumerable:!0}):r,o)),qt=o=>Se(Je({},"__esModule",{value:!0}),o);var xr=ye(Fe=>{"use strict";G();Fe.byteLength=Ut;Fe.toByteArray=Tt;Fe.fromByteArray=Lt;var Z=[],H=[],Bt=typeof Uint8Array!="undefined"?Uint8Array:Array,Qe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(le=0,br=Qe.length;le<br;++le)Z[le]=Qe[le],H[Qe.charCodeAt(le)]=le;var le,br;H["-".charCodeAt(0)]=62;H["_".charCodeAt(0)]=63;function wr(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=o.indexOf("=");r===-1&&(r=e);var c=r===e?0:4-r%4;return[r,c]}function Ut(o){var e=wr(o),r=e[0],c=e[1];return(r+c)*3/4-c}function St(o,e,r){return(e+r)*3/4-r}function Tt(o){var e,r=wr(o),c=r[0],i=r[1],s=new Bt(St(o,c,i)),a=0,p=i>0?c-4:c,f;for(f=0;f<p;f+=4)e=H[o.charCodeAt(f)]<<18|H[o.charCodeAt(f+1)]<<12|H[o.charCodeAt(f+2)]<<6|H[o.charCodeAt(f+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=e&255;return i===2&&(e=H[o.charCodeAt(f)]<<2|H[o.charCodeAt(f+1)]>>4,s[a++]=e&255),i===1&&(e=H[o.charCodeAt(f)]<<10|H[o.charCodeAt(f+1)]<<4|H[o.charCodeAt(f+2)]>>2,s[a++]=e>>8&255,s[a++]=e&255),s}function Ft(o){return Z[o>>18&63]+Z[o>>12&63]+Z[o>>6&63]+Z[o&63]}function Ct(o,e,r){for(var c,i=[],s=e;s<r;s+=3)c=(o[s]<<16&16711680)+(o[s+1]<<8&65280)+(o[s+2]&255),i.push(Ft(c));return i.join("")}function Lt(o){for(var e,r=o.length,c=r%3,i=[],s=16383,a=0,p=r-c;a<p;a+=s)i.push(Ct(o,a,a+s>p?p:a+s));return c===1?(e=o[r-1],i.push(Z[e>>2]+Z[e<<4&63]+"==")):c===2&&(e=(o[r-2]<<8)+o[r-1],i.push(Z[e>>10]+Z[e>>4&63]+Z[e<<2&63]+"=")),i.join("")}});var Er=ye(Xe=>{G();Xe.read=function(o,e,r,c,i){var s,a,p=i*8-c-1,f=(1<<p)-1,y=f>>1,g=-7,h=r?i-1:0,E=r?-1:1,U=o[e+h];for(h+=E,s=U&(1<<-g)-1,U>>=-g,g+=p;g>0;s=s*256+o[e+h],h+=E,g-=8);for(a=s&(1<<-g)-1,s>>=-g,g+=c;g>0;a=a*256+o[e+h],h+=E,g-=8);if(s===0)s=1-y;else{if(s===f)return a?NaN:(U?-1:1)*(1/0);a=a+Math.pow(2,c),s=s-y}return(U?-1:1)*a*Math.pow(2,s-c)};Xe.write=function(o,e,r,c,i,s){var a,p,f,y=s*8-i-1,g=(1<<y)-1,h=g>>1,E=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,U=c?0:s-1,w=c?1:-1,I=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(p=isNaN(e)?1:0,a=g):(a=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-a))<1&&(a--,f*=2),a+h>=1?e+=E/f:e+=E*Math.pow(2,1-h),e*f>=2&&(a++,f/=2),a+h>=g?(p=0,a=g):a+h>=1?(p=(e*f-1)*Math.pow(2,i),a=a+h):(p=e*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;o[r+U]=p&255,U+=w,p/=256,i-=8);for(a=a<<i|p,y+=i;y>0;o[r+U]=a&255,U+=w,a/=256,y-=8);o[r+U-w]|=I*128}});var Rr=ye(de=>{"use strict";G();var er=xr(),ue=Er(),Ar=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;de.Buffer=m;de.SlowBuffer=Dt;de.INSPECT_MAX_BYTES=50;var Ce=2147483647;de.kMaxLength=Ce;m.TYPED_ARRAY_SUPPORT=kt();!m.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function kt(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(r){return!1}}Object.defineProperty(m.prototype,"parent",{enumerable:!0,get:function(){if(!!m.isBuffer(this))return this.buffer}});Object.defineProperty(m.prototype,"offset",{enumerable:!0,get:function(){if(!!m.isBuffer(this))return this.byteOffset}});function X(o){if(o>Ce)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,m.prototype),e}function m(o,e,r){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return nr(o)}return Br(o,e,r)}m.poolSize=8192;function Br(o,e,r){if(typeof o=="string")return Rt(o,e);if(ArrayBuffer.isView(o))return Mt(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(J(o,ArrayBuffer)||o&&J(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(J(o,SharedArrayBuffer)||o&&J(o.buffer,SharedArrayBuffer)))return tr(o,e,r);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var c=o.valueOf&&o.valueOf();if(c!=null&&c!==o)return m.from(c,e,r);var i=Nt(o);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return m.from(o[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}m.from=function(o,e,r){return Br(o,e,r)};Object.setPrototypeOf(m.prototype,Uint8Array.prototype);Object.setPrototypeOf(m,Uint8Array);function Ur(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function Ot(o,e,r){return Ur(o),o<=0?X(o):e!==void 0?typeof r=="string"?X(o).fill(e,r):X(o).fill(e):X(o)}m.alloc=function(o,e,r){return Ot(o,e,r)};function nr(o){return Ur(o),X(o<0?0:cr(o)|0)}m.allocUnsafe=function(o){return nr(o)};m.allocUnsafeSlow=function(o){return nr(o)};function Rt(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!m.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=Sr(o,e)|0,c=X(r),i=c.write(o,e);return i!==r&&(c=c.slice(0,i)),c}function rr(o){for(var e=o.length<0?0:cr(o.length)|0,r=X(e),c=0;c<e;c+=1)r[c]=o[c]&255;return r}function Mt(o){if(J(o,Uint8Array)){var e=new Uint8Array(o);return tr(e.buffer,e.byteOffset,e.byteLength)}return rr(o)}function tr(o,e,r){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var c;return e===void 0&&r===void 0?c=new Uint8Array(o):r===void 0?c=new Uint8Array(o,e):c=new Uint8Array(o,e,r),Object.setPrototypeOf(c,m.prototype),c}function Nt(o){if(m.isBuffer(o)){var e=cr(o.length)|0,r=X(e);return r.length===0||o.copy(r,0,0,e),r}if(o.length!==void 0)return typeof o.length!="number"||lr(o.length)?X(0):rr(o);if(o.type==="Buffer"&&Array.isArray(o.data))return rr(o.data)}function cr(o){if(o>=Ce)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ce.toString(16)+" bytes");return o|0}function Dt(o){return+o!=o&&(o=0),m.alloc(+o)}m.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==m.prototype};m.compare=function(e,r){if(J(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),J(r,Uint8Array)&&(r=m.from(r,r.offset,r.byteLength)),!m.isBuffer(e)||!m.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var c=e.length,i=r.length,s=0,a=Math.min(c,i);s<a;++s)if(e[s]!==r[s]){c=e[s],i=r[s];break}return c<i?-1:i<c?1:0};m.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};m.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return m.alloc(0);var c;if(r===void 0)for(r=0,c=0;c<e.length;++c)r+=e[c].length;var i=m.allocUnsafe(r),s=0;for(c=0;c<e.length;++c){var a=e[c];if(J(a,Uint8Array))s+a.length>i.length?m.from(a).copy(i,s):Uint8Array.prototype.set.call(i,a,s);else if(m.isBuffer(a))a.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=a.length}return i};function Sr(o,e){if(m.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||J(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var r=o.length,c=arguments.length>2&&arguments[2]===!0;if(!c&&r===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return or(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return Or(o).length;default:if(i)return c?-1:or(o).length;e=(""+e).toLowerCase(),i=!0}}m.byteLength=Sr;function Pt(o,e,r){var c=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return Jt(this,e,r);case"utf8":case"utf-8":return Fr(this,e,r);case"ascii":return $t(this,e,r);case"latin1":case"binary":return Zt(this,e,r);case"base64":return Gt(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Kt(this,e,r);default:if(c)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),c=!0}}m.prototype._isBuffer=!0;function ie(o,e,r){var c=o[e];o[e]=o[r],o[r]=c}m.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)ie(this,r,r+1);return this};m.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)ie(this,r,r+3),ie(this,r+1,r+2);return this};m.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)ie(this,r,r+7),ie(this,r+1,r+6),ie(this,r+2,r+5),ie(this,r+3,r+4);return this};m.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Fr(this,0,e):Pt.apply(this,arguments)};m.prototype.toLocaleString=m.prototype.toString;m.prototype.equals=function(e){if(!m.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:m.compare(this,e)===0};m.prototype.inspect=function(){var e="",r=de.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"};Ar&&(m.prototype[Ar]=m.prototype.inspect);m.prototype.compare=function(e,r,c,i,s){if(J(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),!m.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),c===void 0&&(c=e?e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),r<0||c>e.length||i<0||s>this.length)throw new RangeError("out of range index");if(i>=s&&r>=c)return 0;if(i>=s)return-1;if(r>=c)return 1;if(r>>>=0,c>>>=0,i>>>=0,s>>>=0,this===e)return 0;for(var a=s-i,p=c-r,f=Math.min(a,p),y=this.slice(i,s),g=e.slice(r,c),h=0;h<f;++h)if(y[h]!==g[h]){a=y[h],p=g[h];break}return a<p?-1:p<a?1:0};function Tr(o,e,r,c,i){if(o.length===0)return-1;if(typeof r=="string"?(c=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,lr(r)&&(r=i?0:o.length-1),r<0&&(r=o.length+r),r>=o.length){if(i)return-1;r=o.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=m.from(e,c)),m.isBuffer(e))return e.length===0?-1:Ir(o,e,r,c,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(o,e,r):Uint8Array.prototype.lastIndexOf.call(o,e,r):Ir(o,[e],r,c,i);throw new TypeError("val must be string, number or Buffer")}function Ir(o,e,r,c,i){var s=1,a=o.length,p=e.length;if(c!==void 0&&(c=String(c).toLowerCase(),c==="ucs2"||c==="ucs-2"||c==="utf16le"||c==="utf-16le")){if(o.length<2||e.length<2)return-1;s=2,a/=2,p/=2,r/=2}function f(U,w){return s===1?U[w]:U.readUInt16BE(w*s)}var y;if(i){var g=-1;for(y=r;y<a;y++)if(f(o,y)===f(e,g===-1?0:y-g)){if(g===-1&&(g=y),y-g+1===p)return g*s}else g!==-1&&(y-=y-g),g=-1}else for(r+p>a&&(r=a-p),y=r;y>=0;y--){for(var h=!0,E=0;E<p;E++)if(f(o,y+E)!==f(e,E)){h=!1;break}if(h)return y}return-1}m.prototype.includes=function(e,r,c){return this.indexOf(e,r,c)!==-1};m.prototype.indexOf=function(e,r,c){return Tr(this,e,r,c,!0)};m.prototype.lastIndexOf=function(e,r,c){return Tr(this,e,r,c,!1)};function zt(o,e,r,c){r=Number(r)||0;var i=o.length-r;c?(c=Number(c),c>i&&(c=i)):c=i;var s=e.length;c>s/2&&(c=s/2);for(var a=0;a<c;++a){var p=parseInt(e.substr(a*2,2),16);if(lr(p))return a;o[r+a]=p}return a}function Vt(o,e,r,c){return Le(or(e,o.length-r),o,r,c)}function jt(o,e,r,c){return Le(eo(e),o,r,c)}function Wt(o,e,r,c){return Le(Or(e),o,r,c)}function Yt(o,e,r,c){return Le(ro(e,o.length-r),o,r,c)}m.prototype.write=function(e,r,c,i){if(r===void 0)i="utf8",c=this.length,r=0;else if(c===void 0&&typeof r=="string")i=r,c=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(c)?(c=c>>>0,i===void 0&&(i="utf8")):(i=c,c=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var s=this.length-r;if((c===void 0||c>s)&&(c=s),e.length>0&&(c<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var a=!1;;)switch(i){case"hex":return zt(this,e,r,c);case"utf8":case"utf-8":return Vt(this,e,r,c);case"ascii":case"latin1":case"binary":return jt(this,e,r,c);case"base64":return Wt(this,e,r,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yt(this,e,r,c);default:if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}};m.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Gt(o,e,r){return e===0&&r===o.length?er.fromByteArray(o):er.fromByteArray(o.slice(e,r))}function Fr(o,e,r){r=Math.min(o.length,r);for(var c=[],i=e;i<r;){var s=o[i],a=null,p=s>239?4:s>223?3:s>191?2:1;if(i+p<=r){var f,y,g,h;switch(p){case 1:s<128&&(a=s);break;case 2:f=o[i+1],(f&192)===128&&(h=(s&31)<<6|f&63,h>127&&(a=h));break;case 3:f=o[i+1],y=o[i+2],(f&192)===128&&(y&192)===128&&(h=(s&15)<<12|(f&63)<<6|y&63,h>2047&&(h<55296||h>57343)&&(a=h));break;case 4:f=o[i+1],y=o[i+2],g=o[i+3],(f&192)===128&&(y&192)===128&&(g&192)===128&&(h=(s&15)<<18|(f&63)<<12|(y&63)<<6|g&63,h>65535&&h<1114112&&(a=h))}}a===null?(a=65533,p=1):a>65535&&(a-=65536,c.push(a>>>10&1023|55296),a=56320|a&1023),c.push(a),i+=p}return Ht(c)}var qr=4096;function Ht(o){var e=o.length;if(e<=qr)return String.fromCharCode.apply(String,o);for(var r="",c=0;c<e;)r+=String.fromCharCode.apply(String,o.slice(c,c+=qr));return r}function $t(o,e,r){var c="";r=Math.min(o.length,r);for(var i=e;i<r;++i)c+=String.fromCharCode(o[i]&127);return c}function Zt(o,e,r){var c="";r=Math.min(o.length,r);for(var i=e;i<r;++i)c+=String.fromCharCode(o[i]);return c}function Jt(o,e,r){var c=o.length;(!e||e<0)&&(e=0),(!r||r<0||r>c)&&(r=c);for(var i="",s=e;s<r;++s)i+=to[o[s]];return i}function Kt(o,e,r){for(var c=o.slice(e,r),i="",s=0;s<c.length-1;s+=2)i+=String.fromCharCode(c[s]+c[s+1]*256);return i}m.prototype.slice=function(e,r){var c=this.length;e=~~e,r=r===void 0?c:~~r,e<0?(e+=c,e<0&&(e=0)):e>c&&(e=c),r<0?(r+=c,r<0&&(r=0)):r>c&&(r=c),r<e&&(r=e);var i=this.subarray(e,r);return Object.setPrototypeOf(i,m.prototype),i};function N(o,e,r){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>r)throw new RangeError("Trying to access beyond buffer length")}m.prototype.readUintLE=m.prototype.readUIntLE=function(e,r,c){e=e>>>0,r=r>>>0,c||N(e,r,this.length);for(var i=this[e],s=1,a=0;++a<r&&(s*=256);)i+=this[e+a]*s;return i};m.prototype.readUintBE=m.prototype.readUIntBE=function(e,r,c){e=e>>>0,r=r>>>0,c||N(e,r,this.length);for(var i=this[e+--r],s=1;r>0&&(s*=256);)i+=this[e+--r]*s;return i};m.prototype.readUint8=m.prototype.readUInt8=function(e,r){return e=e>>>0,r||N(e,1,this.length),this[e]};m.prototype.readUint16LE=m.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||N(e,2,this.length),this[e]|this[e+1]<<8};m.prototype.readUint16BE=m.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||N(e,2,this.length),this[e]<<8|this[e+1]};m.prototype.readUint32LE=m.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};m.prototype.readUint32BE=m.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||N(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};m.prototype.readIntLE=function(e,r,c){e=e>>>0,r=r>>>0,c||N(e,r,this.length);for(var i=this[e],s=1,a=0;++a<r&&(s*=256);)i+=this[e+a]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*r)),i};m.prototype.readIntBE=function(e,r,c){e=e>>>0,r=r>>>0,c||N(e,r,this.length);for(var i=r,s=1,a=this[e+--i];i>0&&(s*=256);)a+=this[e+--i]*s;return s*=128,a>=s&&(a-=Math.pow(2,8*r)),a};m.prototype.readInt8=function(e,r){return e=e>>>0,r||N(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};m.prototype.readInt16LE=function(e,r){e=e>>>0,r||N(e,2,this.length);var c=this[e]|this[e+1]<<8;return c&32768?c|4294901760:c};m.prototype.readInt16BE=function(e,r){e=e>>>0,r||N(e,2,this.length);var c=this[e+1]|this[e]<<8;return c&32768?c|4294901760:c};m.prototype.readInt32LE=function(e,r){return e=e>>>0,r||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};m.prototype.readInt32BE=function(e,r){return e=e>>>0,r||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};m.prototype.readFloatLE=function(e,r){return e=e>>>0,r||N(e,4,this.length),ue.read(this,e,!0,23,4)};m.prototype.readFloatBE=function(e,r){return e=e>>>0,r||N(e,4,this.length),ue.read(this,e,!1,23,4)};m.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||N(e,8,this.length),ue.read(this,e,!0,52,8)};m.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||N(e,8,this.length),ue.read(this,e,!1,52,8)};function Y(o,e,r,c,i,s){if(!m.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(r+c>o.length)throw new RangeError("Index out of range")}m.prototype.writeUintLE=m.prototype.writeUIntLE=function(e,r,c,i){if(e=+e,r=r>>>0,c=c>>>0,!i){var s=Math.pow(2,8*c)-1;Y(this,e,r,c,s,0)}var a=1,p=0;for(this[r]=e&255;++p<c&&(a*=256);)this[r+p]=e/a&255;return r+c};m.prototype.writeUintBE=m.prototype.writeUIntBE=function(e,r,c,i){if(e=+e,r=r>>>0,c=c>>>0,!i){var s=Math.pow(2,8*c)-1;Y(this,e,r,c,s,0)}var a=c-1,p=1;for(this[r+a]=e&255;--a>=0&&(p*=256);)this[r+a]=e/p&255;return r+c};m.prototype.writeUint8=m.prototype.writeUInt8=function(e,r,c){return e=+e,r=r>>>0,c||Y(this,e,r,1,255,0),this[r]=e&255,r+1};m.prototype.writeUint16LE=m.prototype.writeUInt16LE=function(e,r,c){return e=+e,r=r>>>0,c||Y(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};m.prototype.writeUint16BE=m.prototype.writeUInt16BE=function(e,r,c){return e=+e,r=r>>>0,c||Y(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2};m.prototype.writeUint32LE=m.prototype.writeUInt32LE=function(e,r,c){return e=+e,r=r>>>0,c||Y(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4};m.prototype.writeUint32BE=m.prototype.writeUInt32BE=function(e,r,c){return e=+e,r=r>>>0,c||Y(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};m.prototype.writeIntLE=function(e,r,c,i){if(e=+e,r=r>>>0,!i){var s=Math.pow(2,8*c-1);Y(this,e,r,c,s-1,-s)}var a=0,p=1,f=0;for(this[r]=e&255;++a<c&&(p*=256);)e<0&&f===0&&this[r+a-1]!==0&&(f=1),this[r+a]=(e/p>>0)-f&255;return r+c};m.prototype.writeIntBE=function(e,r,c,i){if(e=+e,r=r>>>0,!i){var s=Math.pow(2,8*c-1);Y(this,e,r,c,s-1,-s)}var a=c-1,p=1,f=0;for(this[r+a]=e&255;--a>=0&&(p*=256);)e<0&&f===0&&this[r+a+1]!==0&&(f=1),this[r+a]=(e/p>>0)-f&255;return r+c};m.prototype.writeInt8=function(e,r,c){return e=+e,r=r>>>0,c||Y(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1};m.prototype.writeInt16LE=function(e,r,c){return e=+e,r=r>>>0,c||Y(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};m.prototype.writeInt16BE=function(e,r,c){return e=+e,r=r>>>0,c||Y(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};m.prototype.writeInt32LE=function(e,r,c){return e=+e,r=r>>>0,c||Y(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};m.prototype.writeInt32BE=function(e,r,c){return e=+e,r=r>>>0,c||Y(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function Cr(o,e,r,c,i,s){if(r+c>o.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function Lr(o,e,r,c,i){return e=+e,r=r>>>0,i||Cr(o,e,r,4,34028234663852886e22,-34028234663852886e22),ue.write(o,e,r,c,23,4),r+4}m.prototype.writeFloatLE=function(e,r,c){return Lr(this,e,r,!0,c)};m.prototype.writeFloatBE=function(e,r,c){return Lr(this,e,r,!1,c)};function kr(o,e,r,c,i){return e=+e,r=r>>>0,i||Cr(o,e,r,8,17976931348623157e292,-17976931348623157e292),ue.write(o,e,r,c,52,8),r+8}m.prototype.writeDoubleLE=function(e,r,c){return kr(this,e,r,!0,c)};m.prototype.writeDoubleBE=function(e,r,c){return kr(this,e,r,!1,c)};m.prototype.copy=function(e,r,c,i){if(!m.isBuffer(e))throw new TypeError("argument should be a Buffer");if(c||(c=0),!i&&i!==0&&(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<c&&(i=c),i===c||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-c&&(i=e.length-r+c);var s=i-c;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,c,i):Uint8Array.prototype.set.call(e,this.subarray(c,i),r),s};m.prototype.fill=function(e,r,c,i){if(typeof e=="string"){if(typeof r=="string"?(i=r,r=0,c=this.length):typeof c=="string"&&(i=c,c=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!m.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){var s=e.charCodeAt(0);(i==="utf8"&&s<128||i==="latin1")&&(e=s)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<c)throw new RangeError("Out of range index");if(c<=r)return this;r=r>>>0,c=c===void 0?this.length:c>>>0,e||(e=0);var a;if(typeof e=="number")for(a=r;a<c;++a)this[a]=e;else{var p=m.isBuffer(e)?e:m.from(e,i),f=p.length;if(f===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<c-r;++a)this[a+r]=p[a%f]}return this};var Qt=/[^+/0-9A-Za-z-_]/g;function Xt(o){if(o=o.split("=")[0],o=o.trim().replace(Qt,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function or(o,e){e=e||1/0;for(var r,c=o.length,i=null,s=[],a=0;a<c;++a){if(r=o.charCodeAt(a),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(a+1===c){(e-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;s.push(r)}else if(r<2048){if((e-=2)<0)break;s.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;s.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return s}function eo(o){for(var e=[],r=0;r<o.length;++r)e.push(o.charCodeAt(r)&255);return e}function ro(o,e){for(var r,c,i,s=[],a=0;a<o.length&&!((e-=2)<0);++a)r=o.charCodeAt(a),c=r>>8,i=r%256,s.push(i),s.push(c);return s}function Or(o){return er.toByteArray(Xt(o))}function Le(o,e,r,c){for(var i=0;i<c&&!(i+r>=e.length||i>=o.length);++i)e[i+r]=o[i];return i}function J(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function lr(o){return o!==o}var to=function(){for(var o="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var c=r*16,i=0;i<16;++i)e[c+i]=o[r]+o[i];return e}()});var zr=ye((Pn,Pr)=>{G();var k=Pr.exports={},K,Q;function ir(){throw new Error("setTimeout has not been defined")}function pr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?K=setTimeout:K=ir}catch(o){K=ir}try{typeof clearTimeout=="function"?Q=clearTimeout:Q=pr}catch(o){Q=pr}})();function Mr(o){if(K===setTimeout)return setTimeout(o,0);if((K===ir||!K)&&setTimeout)return K=setTimeout,setTimeout(o,0);try{return K(o,0)}catch(e){try{return K.call(null,o,0)}catch(r){return K.call(this,o,0)}}}function oo(o){if(Q===clearTimeout)return clearTimeout(o);if((Q===pr||!Q)&&clearTimeout)return Q=clearTimeout,clearTimeout(o);try{return Q(o)}catch(e){try{return Q.call(null,o)}catch(r){return Q.call(this,o)}}}var ee=[],me=!1,pe,ke=-1;function no(){!me||!pe||(me=!1,pe.length?ee=pe.concat(ee):ke=-1,ee.length&&Nr())}function Nr(){if(!me){var o=Mr(no);me=!0;for(var e=ee.length;e;){for(pe=ee,ee=[];++ke<e;)pe&&pe[ke].run();ke=-1,e=ee.length}pe=null,me=!1,oo(o)}}k.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];ee.push(new Dr(o,e)),ee.length===1&&!me&&Mr(Nr)};function Dr(o,e){this.fun=o,this.array=e}Dr.prototype.run=function(){this.fun.apply(null,this.array)};k.title="browser";k.browser=!0;k.env={};k.argv=[];k.version="";k.versions={};function re(){}k.on=re;k.addListener=re;k.once=re;k.off=re;k.removeListener=re;k.removeAllListeners=re;k.emit=re;k.prependListener=re;k.prependOnceListener=re;k.listeners=function(o){return[]};k.binding=function(o){throw new Error("process.binding is not supported")};k.cwd=function(){return"/"};k.chdir=function(o){throw new Error("process.chdir is not supported")};k.umask=function(){return 0}});var ae,_e,zn,G=It(()=>{ae=Ke(Rr()),_e=Ke(zr()),zn=function(o){function e(){var c=this||self;return delete o.prototype.__magic__,c}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object)});var mt=ye((gi,dt)=>{"use strict";G();var co=Object.create,ge=Object.defineProperty,lo=Object.defineProperties,io=Object.getOwnPropertyDescriptor,po=Object.getOwnPropertyDescriptors,so=Object.getOwnPropertyNames,Vr=Object.getOwnPropertySymbols,ao=Object.getPrototypeOf,et=Object.prototype.hasOwnProperty,_o=Object.prototype.propertyIsEnumerable,jr=(o,e,r)=>e in o?ge(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,ne=(o,e)=>{for(var r in e||(e={}))et.call(e,r)&&jr(o,r,e[r]);if(Vr)for(var r of Vr(e))_o.call(e,r)&&jr(o,r,e[r]);return o},ce=(o,e)=>lo(o,po(e)),rt=(o,e)=>()=>(o&&(e=o(o=0)),e),Pe=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),tt=(o,e)=>{for(var r in e)ge(o,r,{get:e[r],enumerable:!0})},ot=(o,e,r,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of so(e))!et.call(o,i)&&i!==r&&ge(o,i,{get:()=>e[i],enumerable:!(c=io(e,i))||c.enumerable});return o},b=(o,e,r)=>(r=o!=null?co(ao(o)):{},ot(e||!o||!o.__esModule?ge(r,"default",{value:o,enumerable:!0}):r,o)),nt=o=>ot(ge({},"__esModule",{value:!0}),o),uo=Pe(o=>{"use strict";u(),o.byteLength=f,o.toByteArray=g,o.fromByteArray=U;var e=[],r=[],c=typeof Uint8Array!="undefined"?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(s=0,a=i.length;s<a;++s)e[s]=i[s],r[i.charCodeAt(s)]=s;var s,a;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function p(w){var I=w.length;if(I%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var q=w.indexOf("=");q===-1&&(q=I);var A=q===I?0:4-q%4;return[q,A]}function f(w){var I=p(w),q=I[0],A=I[1];return(q+A)*3/4-A}function y(w,I,q){return(I+q)*3/4-q}function g(w){var I,q=p(w),A=q[0],T=q[1],F=new c(y(w,A,T)),z=0,j=T>0?A-4:A,D;for(D=0;D<j;D+=4)I=r[w.charCodeAt(D)]<<18|r[w.charCodeAt(D+1)]<<12|r[w.charCodeAt(D+2)]<<6|r[w.charCodeAt(D+3)],F[z++]=I>>16&255,F[z++]=I>>8&255,F[z++]=I&255;return T===2&&(I=r[w.charCodeAt(D)]<<2|r[w.charCodeAt(D+1)]>>4,F[z++]=I&255),T===1&&(I=r[w.charCodeAt(D)]<<10|r[w.charCodeAt(D+1)]<<4|r[w.charCodeAt(D+2)]>>2,F[z++]=I>>8&255,F[z++]=I&255),F}function h(w){return e[w>>18&63]+e[w>>12&63]+e[w>>6&63]+e[w&63]}function E(w,I,q){for(var A,T=[],F=I;F<q;F+=3)A=(w[F]<<16&16711680)+(w[F+1]<<8&65280)+(w[F+2]&255),T.push(h(A));return T.join("")}function U(w){for(var I,q=w.length,A=q%3,T=[],F=16383,z=0,j=q-A;z<j;z+=F)T.push(E(w,z,z+F>j?j:z+F));return A===1?(I=w[q-1],T.push(e[I>>2]+e[I<<4&63]+"==")):A===2&&(I=(w[q-2]<<8)+w[q-1],T.push(e[I>>10]+e[I>>4&63]+e[I<<2&63]+"=")),T.join("")}}),mo=Pe(o=>{u(),o.read=function(e,r,c,i,s){var a,p,f=s*8-i-1,y=(1<<f)-1,g=y>>1,h=-7,E=c?s-1:0,U=c?-1:1,w=e[r+E];for(E+=U,a=w&(1<<-h)-1,w>>=-h,h+=f;h>0;a=a*256+e[r+E],E+=U,h-=8);for(p=a&(1<<-h)-1,a>>=-h,h+=i;h>0;p=p*256+e[r+E],E+=U,h-=8);if(a===0)a=1-g;else{if(a===y)return p?NaN:(w?-1:1)*(1/0);p=p+Math.pow(2,i),a=a-g}return(w?-1:1)*p*Math.pow(2,a-i)},o.write=function(e,r,c,i,s,a){var p,f,y,g=a*8-s-1,h=(1<<g)-1,E=h>>1,U=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=i?0:a-1,I=i?1:-1,q=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,p=h):(p=Math.floor(Math.log(r)/Math.LN2),r*(y=Math.pow(2,-p))<1&&(p--,y*=2),p+E>=1?r+=U/y:r+=U*Math.pow(2,1-E),r*y>=2&&(p++,y/=2),p+E>=h?(f=0,p=h):p+E>=1?(f=(r*y-1)*Math.pow(2,s),p=p+E):(f=r*Math.pow(2,E-1)*Math.pow(2,s),p=0));s>=8;e[c+w]=f&255,w+=I,f/=256,s-=8);for(p=p<<s|f,g+=s;g>0;e[c+w]=p&255,w+=I,p/=256,g-=8);e[c+w-I]|=q*128}}),fo=Pe(o=>{"use strict";u();var e=uo(),r=mo(),c=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;o.Buffer=p,o.SlowBuffer=T,o.INSPECT_MAX_BYTES=50;var i=2147483647;o.kMaxLength=i,p.TYPED_ARRAY_SUPPORT=s(),!p.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function s(){try{var t=new Uint8Array(1),n={foo:function(){return 42}};return Object.setPrototypeOf(n,Uint8Array.prototype),Object.setPrototypeOf(t,n),t.foo()===42}catch(l){return!1}}Object.defineProperty(p.prototype,"parent",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.buffer}}),Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.byteOffset}});function a(t){if(t>i)throw new RangeError('The value "'+t+'" is invalid for option "size"');var n=new Uint8Array(t);return Object.setPrototypeOf(n,p.prototype),n}function p(t,n,l){if(typeof t=="number"){if(typeof n=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return h(t)}return f(t,n,l)}p.poolSize=8192;function f(t,n,l){if(typeof t=="string")return E(t,n);if(ArrayBuffer.isView(t))return w(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if($(t,ArrayBuffer)||t&&$(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(t,SharedArrayBuffer)||t&&$(t.buffer,SharedArrayBuffer)))return I(t,n,l);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var _=t.valueOf&&t.valueOf();if(_!=null&&_!==t)return p.from(_,n,l);var d=q(t);if(d)return d;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return p.from(t[Symbol.toPrimitive]("string"),n,l);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}p.from=function(t,n,l){return f(t,n,l)},Object.setPrototypeOf(p.prototype,Uint8Array.prototype),Object.setPrototypeOf(p,Uint8Array);function y(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function g(t,n,l){return y(t),t<=0?a(t):n!==void 0?typeof l=="string"?a(t).fill(n,l):a(t).fill(n):a(t)}p.alloc=function(t,n,l){return g(t,n,l)};function h(t){return y(t),a(t<0?0:A(t)|0)}p.allocUnsafe=function(t){return h(t)},p.allocUnsafeSlow=function(t){return h(t)};function E(t,n){if((typeof n!="string"||n==="")&&(n="utf8"),!p.isEncoding(n))throw new TypeError("Unknown encoding: "+n);var l=F(t,n)|0,_=a(l),d=_.write(t,n);return d!==l&&(_=_.slice(0,d)),_}function U(t){for(var n=t.length<0?0:A(t.length)|0,l=a(n),_=0;_<n;_+=1)l[_]=t[_]&255;return l}function w(t){if($(t,Uint8Array)){var n=new Uint8Array(t);return I(n.buffer,n.byteOffset,n.byteLength)}return U(t)}function I(t,n,l){if(n<0||t.byteLength<n)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<n+(l||0))throw new RangeError('"length" is outside of buffer bounds');var _;return n===void 0&&l===void 0?_=new Uint8Array(t):l===void 0?_=new Uint8Array(t,n):_=new Uint8Array(t,n,l),Object.setPrototypeOf(_,p.prototype),_}function q(t){if(p.isBuffer(t)){var n=A(t.length)|0,l=a(n);return l.length===0||t.copy(l,0,0,n),l}if(t.length!==void 0)return typeof t.length!="number"||Ze(t.length)?a(0):U(t);if(t.type==="Buffer"&&Array.isArray(t.data))return U(t.data)}function A(t){if(t>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return t|0}function T(t){return+t!=t&&(t=0),p.alloc(+t)}p.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==p.prototype},p.compare=function(t,n){if($(t,Uint8Array)&&(t=p.from(t,t.offset,t.byteLength)),$(n,Uint8Array)&&(n=p.from(n,n.offset,n.byteLength)),!p.isBuffer(t)||!p.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===n)return 0;for(var l=t.length,_=n.length,d=0,v=Math.min(l,_);d<v;++d)if(t[d]!==n[d]){l=t[d],_=n[d];break}return l<_?-1:_<l?1:0},p.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.concat=function(t,n){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return p.alloc(0);var l;if(n===void 0)for(n=0,l=0;l<t.length;++l)n+=t[l].length;var _=p.allocUnsafe(n),d=0;for(l=0;l<t.length;++l){var v=t[l];if($(v,Uint8Array))d+v.length>_.length?p.from(v).copy(_,d):Uint8Array.prototype.set.call(_,v,d);else if(p.isBuffer(v))v.copy(_,d);else throw new TypeError('"list" argument must be an Array of Buffers');d+=v.length}return _};function F(t,n){if(p.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||$(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var l=t.length,_=arguments.length>2&&arguments[2]===!0;if(!_&&l===0)return 0;for(var d=!1;;)switch(n){case"ascii":case"latin1":case"binary":return l;case"utf8":case"utf-8":return $e(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return l*2;case"hex":return l>>>1;case"base64":return yr(t).length;default:if(d)return _?-1:$e(t).length;n=(""+n).toLowerCase(),d=!0}}p.byteLength=F;function z(t,n,l){var _=!1;if((n===void 0||n<0)&&(n=0),n>this.length||((l===void 0||l>this.length)&&(l=this.length),l<=0)||(l>>>=0,n>>>=0,l<=n))return"";for(t||(t="utf8");;)switch(t){case"hex":return qe(this,n,l);case"utf8":case"utf-8":return fe(this,n,l);case"ascii":return Ye(this,n,l);case"latin1":case"binary":return Ge(this,n,l);case"base64":return Ae(this,n,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return He(this,n,l);default:if(_)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),_=!0}}p.prototype._isBuffer=!0;function j(t,n,l){var _=t[n];t[n]=t[l],t[l]=_}p.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<t;n+=2)j(this,n,n+1);return this},p.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<t;n+=4)j(this,n,n+3),j(this,n+1,n+2);return this},p.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<t;n+=8)j(this,n,n+7),j(this,n+1,n+6),j(this,n+2,n+5),j(this,n+3,n+4);return this},p.prototype.toString=function(){var t=this.length;return t===0?"":arguments.length===0?fe(this,0,t):z.apply(this,arguments)},p.prototype.toLocaleString=p.prototype.toString,p.prototype.equals=function(t){if(!p.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:p.compare(this,t)===0},p.prototype.inspect=function(){var t="",n=o.INSPECT_MAX_BYTES;return t=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(t+=" ... "),"<Buffer "+t+">"},c&&(p.prototype[c]=p.prototype.inspect),p.prototype.compare=function(t,n,l,_,d){if($(t,Uint8Array)&&(t=p.from(t,t.offset,t.byteLength)),!p.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(n===void 0&&(n=0),l===void 0&&(l=t?t.length:0),_===void 0&&(_=0),d===void 0&&(d=this.length),n<0||l>t.length||_<0||d>this.length)throw new RangeError("out of range index");if(_>=d&&n>=l)return 0;if(_>=d)return-1;if(n>=l)return 1;if(n>>>=0,l>>>=0,_>>>=0,d>>>=0,this===t)return 0;for(var v=d-_,x=l-n,C=Math.min(v,x),P=this.slice(_,d),L=t.slice(n,l),O=0;O<C;++O)if(P[O]!==L[O]){v=P[O],x=L[O];break}return v<x?-1:x<v?1:0};function D(t,n,l,_,d){if(t.length===0)return-1;if(typeof l=="string"?(_=l,l=0):l>2147483647?l=2147483647:l<-2147483648&&(l=-2147483648),l=+l,Ze(l)&&(l=d?0:t.length-1),l<0&&(l=t.length+l),l>=t.length){if(d)return-1;l=t.length-1}else if(l<0)if(d)l=0;else return-1;if(typeof n=="string"&&(n=p.from(n,_)),p.isBuffer(n))return n.length===0?-1:we(t,n,l,_,d);if(typeof n=="number")return n=n&255,typeof Uint8Array.prototype.indexOf=="function"?d?Uint8Array.prototype.indexOf.call(t,n,l):Uint8Array.prototype.lastIndexOf.call(t,n,l):we(t,[n],l,_,d);throw new TypeError("val must be string, number or Buffer")}function we(t,n,l,_,d){var v=1,x=t.length,C=n.length;if(_!==void 0&&(_=String(_).toLowerCase(),_==="ucs2"||_==="ucs-2"||_==="utf16le"||_==="utf-16le")){if(t.length<2||n.length<2)return-1;v=2,x/=2,C/=2,l/=2}function P(hr,gr){return v===1?hr[gr]:hr.readUInt16BE(gr*v)}var L;if(d){var O=-1;for(L=l;L<x;L++)if(P(t,L)===P(n,O===-1?0:L-O)){if(O===-1&&(O=L),L-O+1===C)return O*v}else O!==-1&&(L-=L-O),O=-1}else for(l+C>x&&(l=x-C),L=l;L>=0;L--){for(var W=!0,Ue=0;Ue<C;Ue++)if(P(t,L+Ue)!==P(n,Ue)){W=!1;break}if(W)return L}return-1}p.prototype.includes=function(t,n,l){return this.indexOf(t,n,l)!==-1},p.prototype.indexOf=function(t,n,l){return D(this,t,n,l,!0)},p.prototype.lastIndexOf=function(t,n,l){return D(this,t,n,l,!1)};function se(t,n,l,_){l=Number(l)||0;var d=t.length-l;_?(_=Number(_),_>d&&(_=d)):_=d;var v=n.length;_>v/2&&(_=v/2);for(var x=0;x<_;++x){var C=parseInt(n.substr(x*2,2),16);if(Ze(C))return x;t[l+x]=C}return x}function Ve(t,n,l,_){return Be($e(n,t.length-l),t,l,_)}function xe(t,n,l,_){return Be(yt(n),t,l,_)}function Ee(t,n,l,_){return Be(yr(n),t,l,_)}function je(t,n,l,_){return Be(ht(n,t.length-l),t,l,_)}p.prototype.write=function(t,n,l,_){if(n===void 0)_="utf8",l=this.length,n=0;else if(l===void 0&&typeof n=="string")_=n,l=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(l)?(l=l>>>0,_===void 0&&(_="utf8")):(_=l,l=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var d=this.length-n;if((l===void 0||l>d)&&(l=d),t.length>0&&(l<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");_||(_="utf8");for(var v=!1;;)switch(_){case"hex":return se(this,t,n,l);case"utf8":case"utf-8":return Ve(this,t,n,l);case"ascii":case"latin1":case"binary":return xe(this,t,n,l);case"base64":return Ee(this,t,n,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return je(this,t,n,l);default:if(v)throw new TypeError("Unknown encoding: "+_);_=(""+_).toLowerCase(),v=!0}},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ae(t,n,l){return n===0&&l===t.length?e.fromByteArray(t):e.fromByteArray(t.slice(n,l))}function fe(t,n,l){l=Math.min(t.length,l);for(var _=[],d=n;d<l;){var v=t[d],x=null,C=v>239?4:v>223?3:v>191?2:1;if(d+C<=l){var P,L,O,W;switch(C){case 1:v<128&&(x=v);break;case 2:P=t[d+1],(P&192)===128&&(W=(v&31)<<6|P&63,W>127&&(x=W));break;case 3:P=t[d+1],L=t[d+2],(P&192)===128&&(L&192)===128&&(W=(v&15)<<12|(P&63)<<6|L&63,W>2047&&(W<55296||W>57343)&&(x=W));break;case 4:P=t[d+1],L=t[d+2],O=t[d+3],(P&192)===128&&(L&192)===128&&(O&192)===128&&(W=(v&15)<<18|(P&63)<<12|(L&63)<<6|O&63,W>65535&&W<1114112&&(x=W))}}x===null?(x=65533,C=1):x>65535&&(x-=65536,_.push(x>>>10&1023|55296),x=56320|x&1023),_.push(x),d+=C}return We(_)}var Ie=4096;function We(t){var n=t.length;if(n<=Ie)return String.fromCharCode.apply(String,t);for(var l="",_=0;_<n;)l+=String.fromCharCode.apply(String,t.slice(_,_+=Ie));return l}function Ye(t,n,l){var _="";l=Math.min(t.length,l);for(var d=n;d<l;++d)_+=String.fromCharCode(t[d]&127);return _}function Ge(t,n,l){var _="";l=Math.min(t.length,l);for(var d=n;d<l;++d)_+=String.fromCharCode(t[d]);return _}function qe(t,n,l){var _=t.length;(!n||n<0)&&(n=0),(!l||l<0||l>_)&&(l=_);for(var d="",v=n;v<l;++v)d+=gt[t[v]];return d}function He(t,n,l){for(var _=t.slice(n,l),d="",v=0;v<_.length-1;v+=2)d+=String.fromCharCode(_[v]+_[v+1]*256);return d}p.prototype.slice=function(t,n){var l=this.length;t=~~t,n=n===void 0?l:~~n,t<0?(t+=l,t<0&&(t=0)):t>l&&(t=l),n<0?(n+=l,n<0&&(n=0)):n>l&&(n=l),n<t&&(n=t);var _=this.subarray(t,n);return Object.setPrototypeOf(_,p.prototype),_};function S(t,n,l){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+n>l)throw new RangeError("Trying to access beyond buffer length")}p.prototype.readUintLE=p.prototype.readUIntLE=function(t,n,l){t=t>>>0,n=n>>>0,l||S(t,n,this.length);for(var _=this[t],d=1,v=0;++v<n&&(d*=256);)_+=this[t+v]*d;return _},p.prototype.readUintBE=p.prototype.readUIntBE=function(t,n,l){t=t>>>0,n=n>>>0,l||S(t,n,this.length);for(var _=this[t+--n],d=1;n>0&&(d*=256);)_+=this[t+--n]*d;return _},p.prototype.readUint8=p.prototype.readUInt8=function(t,n){return t=t>>>0,n||S(t,1,this.length),this[t]},p.prototype.readUint16LE=p.prototype.readUInt16LE=function(t,n){return t=t>>>0,n||S(t,2,this.length),this[t]|this[t+1]<<8},p.prototype.readUint16BE=p.prototype.readUInt16BE=function(t,n){return t=t>>>0,n||S(t,2,this.length),this[t]<<8|this[t+1]},p.prototype.readUint32LE=p.prototype.readUInt32LE=function(t,n){return t=t>>>0,n||S(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},p.prototype.readUint32BE=p.prototype.readUInt32BE=function(t,n){return t=t>>>0,n||S(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},p.prototype.readIntLE=function(t,n,l){t=t>>>0,n=n>>>0,l||S(t,n,this.length);for(var _=this[t],d=1,v=0;++v<n&&(d*=256);)_+=this[t+v]*d;return d*=128,_>=d&&(_-=Math.pow(2,8*n)),_},p.prototype.readIntBE=function(t,n,l){t=t>>>0,n=n>>>0,l||S(t,n,this.length);for(var _=n,d=1,v=this[t+--_];_>0&&(d*=256);)v+=this[t+--_]*d;return d*=128,v>=d&&(v-=Math.pow(2,8*n)),v},p.prototype.readInt8=function(t,n){return t=t>>>0,n||S(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},p.prototype.readInt16LE=function(t,n){t=t>>>0,n||S(t,2,this.length);var l=this[t]|this[t+1]<<8;return l&32768?l|4294901760:l},p.prototype.readInt16BE=function(t,n){t=t>>>0,n||S(t,2,this.length);var l=this[t+1]|this[t]<<8;return l&32768?l|4294901760:l},p.prototype.readInt32LE=function(t,n){return t=t>>>0,n||S(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},p.prototype.readInt32BE=function(t,n){return t=t>>>0,n||S(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},p.prototype.readFloatLE=function(t,n){return t=t>>>0,n||S(t,4,this.length),r.read(this,t,!0,23,4)},p.prototype.readFloatBE=function(t,n){return t=t>>>0,n||S(t,4,this.length),r.read(this,t,!1,23,4)},p.prototype.readDoubleLE=function(t,n){return t=t>>>0,n||S(t,8,this.length),r.read(this,t,!0,52,8)},p.prototype.readDoubleBE=function(t,n){return t=t>>>0,n||S(t,8,this.length),r.read(this,t,!1,52,8)};function R(t,n,l,_,d,v){if(!p.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(n>d||n<v)throw new RangeError('"value" argument is out of bounds');if(l+_>t.length)throw new RangeError("Index out of range")}p.prototype.writeUintLE=p.prototype.writeUIntLE=function(t,n,l,_){if(t=+t,n=n>>>0,l=l>>>0,!_){var d=Math.pow(2,8*l)-1;R(this,t,n,l,d,0)}var v=1,x=0;for(this[n]=t&255;++x<l&&(v*=256);)this[n+x]=t/v&255;return n+l},p.prototype.writeUintBE=p.prototype.writeUIntBE=function(t,n,l,_){if(t=+t,n=n>>>0,l=l>>>0,!_){var d=Math.pow(2,8*l)-1;R(this,t,n,l,d,0)}var v=l-1,x=1;for(this[n+v]=t&255;--v>=0&&(x*=256);)this[n+v]=t/x&255;return n+l},p.prototype.writeUint8=p.prototype.writeUInt8=function(t,n,l){return t=+t,n=n>>>0,l||R(this,t,n,1,255,0),this[n]=t&255,n+1},p.prototype.writeUint16LE=p.prototype.writeUInt16LE=function(t,n,l){return t=+t,n=n>>>0,l||R(this,t,n,2,65535,0),this[n]=t&255,this[n+1]=t>>>8,n+2},p.prototype.writeUint16BE=p.prototype.writeUInt16BE=function(t,n,l){return t=+t,n=n>>>0,l||R(this,t,n,2,65535,0),this[n]=t>>>8,this[n+1]=t&255,n+2},p.prototype.writeUint32LE=p.prototype.writeUInt32LE=function(t,n,l){return t=+t,n=n>>>0,l||R(this,t,n,4,4294967295,0),this[n+3]=t>>>24,this[n+2]=t>>>16,this[n+1]=t>>>8,this[n]=t&255,n+4},p.prototype.writeUint32BE=p.prototype.writeUInt32BE=function(t,n,l){return t=+t,n=n>>>0,l||R(this,t,n,4,4294967295,0),this[n]=t>>>24,this[n+1]=t>>>16,this[n+2]=t>>>8,this[n+3]=t&255,n+4},p.prototype.writeIntLE=function(t,n,l,_){if(t=+t,n=n>>>0,!_){var d=Math.pow(2,8*l-1);R(this,t,n,l,d-1,-d)}var v=0,x=1,C=0;for(this[n]=t&255;++v<l&&(x*=256);)t<0&&C===0&&this[n+v-1]!==0&&(C=1),this[n+v]=(t/x>>0)-C&255;return n+l},p.prototype.writeIntBE=function(t,n,l,_){if(t=+t,n=n>>>0,!_){var d=Math.pow(2,8*l-1);R(this,t,n,l,d-1,-d)}var v=l-1,x=1,C=0;for(this[n+v]=t&255;--v>=0&&(x*=256);)t<0&&C===0&&this[n+v+1]!==0&&(C=1),this[n+v]=(t/x>>0)-C&255;return n+l},p.prototype.writeInt8=function(t,n,l){return t=+t,n=n>>>0,l||R(this,t,n,1,127,-128),t<0&&(t=255+t+1),this[n]=t&255,n+1},p.prototype.writeInt16LE=function(t,n,l){return t=+t,n=n>>>0,l||R(this,t,n,2,32767,-32768),this[n]=t&255,this[n+1]=t>>>8,n+2},p.prototype.writeInt16BE=function(t,n,l){return t=+t,n=n>>>0,l||R(this,t,n,2,32767,-32768),this[n]=t>>>8,this[n+1]=t&255,n+2},p.prototype.writeInt32LE=function(t,n,l){return t=+t,n=n>>>0,l||R(this,t,n,4,2147483647,-2147483648),this[n]=t&255,this[n+1]=t>>>8,this[n+2]=t>>>16,this[n+3]=t>>>24,n+4},p.prototype.writeInt32BE=function(t,n,l){return t=+t,n=n>>>0,l||R(this,t,n,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[n]=t>>>24,this[n+1]=t>>>16,this[n+2]=t>>>8,this[n+3]=t&255,n+4};function ve(t,n,l,_,d,v){if(l+_>t.length)throw new RangeError("Index out of range");if(l<0)throw new RangeError("Index out of range")}function fr(t,n,l,_,d){return n=+n,l=l>>>0,d||ve(t,n,l,4,34028234663852886e22,-34028234663852886e22),r.write(t,n,l,_,23,4),l+4}p.prototype.writeFloatLE=function(t,n,l){return fr(this,t,n,!0,l)},p.prototype.writeFloatBE=function(t,n,l){return fr(this,t,n,!1,l)};function vr(t,n,l,_,d){return n=+n,l=l>>>0,d||ve(t,n,l,8,17976931348623157e292,-17976931348623157e292),r.write(t,n,l,_,52,8),l+8}p.prototype.writeDoubleLE=function(t,n,l){return vr(this,t,n,!0,l)},p.prototype.writeDoubleBE=function(t,n,l){return vr(this,t,n,!1,l)},p.prototype.copy=function(t,n,l,_){if(!p.isBuffer(t))throw new TypeError("argument should be a Buffer");if(l||(l=0),!_&&_!==0&&(_=this.length),n>=t.length&&(n=t.length),n||(n=0),_>0&&_<l&&(_=l),_===l||t.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(l<0||l>=this.length)throw new RangeError("Index out of range");if(_<0)throw new RangeError("sourceEnd out of bounds");_>this.length&&(_=this.length),t.length-n<_-l&&(_=t.length-n+l);var d=_-l;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,l,_):Uint8Array.prototype.set.call(t,this.subarray(l,_),n),d},p.prototype.fill=function(t,n,l,_){if(typeof t=="string"){if(typeof n=="string"?(_=n,n=0,l=this.length):typeof l=="string"&&(_=l,l=this.length),_!==void 0&&typeof _!="string")throw new TypeError("encoding must be a string");if(typeof _=="string"&&!p.isEncoding(_))throw new TypeError("Unknown encoding: "+_);if(t.length===1){var d=t.charCodeAt(0);(_==="utf8"&&d<128||_==="latin1")&&(t=d)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(n<0||this.length<n||this.length<l)throw new RangeError("Out of range index");if(l<=n)return this;n=n>>>0,l=l===void 0?this.length:l>>>0,t||(t=0);var v;if(typeof t=="number")for(v=n;v<l;++v)this[v]=t;else{var x=p.isBuffer(t)?t:p.from(t,_),C=x.length;if(C===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(v=0;v<l-n;++v)this[v+n]=x[v%C]}return this};var ft=/[^+/0-9A-Za-z-_]/g;function vt(t){if(t=t.split("=")[0],t=t.trim().replace(ft,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function $e(t,n){n=n||1/0;for(var l,_=t.length,d=null,v=[],x=0;x<_;++x){if(l=t.charCodeAt(x),l>55295&&l<57344){if(!d){if(l>56319){(n-=3)>-1&&v.push(239,191,189);continue}else if(x+1===_){(n-=3)>-1&&v.push(239,191,189);continue}d=l;continue}if(l<56320){(n-=3)>-1&&v.push(239,191,189),d=l;continue}l=(d-55296<<10|l-56320)+65536}else d&&(n-=3)>-1&&v.push(239,191,189);if(d=null,l<128){if((n-=1)<0)break;v.push(l)}else if(l<2048){if((n-=2)<0)break;v.push(l>>6|192,l&63|128)}else if(l<65536){if((n-=3)<0)break;v.push(l>>12|224,l>>6&63|128,l&63|128)}else if(l<1114112){if((n-=4)<0)break;v.push(l>>18|240,l>>12&63|128,l>>6&63|128,l&63|128)}else throw new Error("Invalid code point")}return v}function yt(t){for(var n=[],l=0;l<t.length;++l)n.push(t.charCodeAt(l)&255);return n}function ht(t,n){for(var l,_,d,v=[],x=0;x<t.length&&!((n-=2)<0);++x)l=t.charCodeAt(x),_=l>>8,d=l%256,v.push(d),v.push(_);return v}function yr(t){return e.toByteArray(vt(t))}function Be(t,n,l,_){for(var d=0;d<_&&!(d+l>=n.length||d>=t.length);++d)n[d+l]=t[d];return d}function $(t,n){return t instanceof n||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===n.name}function Ze(t){return t!==t}var gt=function(){for(var t="0123456789abcdef",n=new Array(256),l=0;l<16;++l)for(var _=l*16,d=0;d<16;++d)n[_+d]=t[l]+t[d];return n}()}),vo=Pe((o,e)=>{u();var r=e.exports={},c,i;function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?c=setTimeout:c=s}catch(A){c=s}try{typeof clearTimeout=="function"?i=clearTimeout:i=a}catch(A){i=a}})();function p(A){if(c===setTimeout)return setTimeout(A,0);if((c===s||!c)&&setTimeout)return c=setTimeout,setTimeout(A,0);try{return c(A,0)}catch(T){try{return c.call(null,A,0)}catch(F){return c.call(this,A,0)}}}function f(A){if(i===clearTimeout)return clearTimeout(A);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(A);try{return i(A)}catch(T){try{return i.call(null,A)}catch(F){return i.call(this,A)}}}var y=[],g=!1,h,E=-1;function U(){!g||!h||(g=!1,h.length?y=h.concat(y):E=-1,y.length&&w())}function w(){if(!g){var A=p(U);g=!0;for(var T=y.length;T;){for(h=y,y=[];++E<T;)h&&h[E].run();E=-1,T=y.length}h=null,g=!1,f(A)}}r.nextTick=function(A){var T=new Array(arguments.length-1);if(arguments.length>1)for(var F=1;F<arguments.length;F++)T[F-1]=arguments[F];y.push(new I(A,T)),y.length===1&&!g&&p(w)};function I(A,T){this.fun=A,this.array=T}I.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function q(){}r.on=q,r.addListener=q,r.once=q,r.off=q,r.removeListener=q,r.removeAllListeners=q,r.emit=q,r.prependListener=q,r.prependOnceListener=q,r.listeners=function(A){return[]},r.binding=function(A){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(A){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),yo,ho,go,u=rt(()=>{yo=b(fo()),ho=b(vo()),go=function(o){function e(){var c=this||self;return delete o.prototype.__magic__,c}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object)}),ct={};tt(ct,{default:()=>lt});var Oe,Wr,lt,bo=rt(()=>{"use strict";u(),Oe=b(require("react")),Wr=o=>Oe.createElement("svg",ne({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},o),Oe.createElement("g",null,Oe.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),lt=Wr}),it={};tt(it,{Receiver:()=>On});dt.exports=nt(it);u();var M=b(require("react")),Yr=require("@fortawesome/free-solid-svg-icons"),Gr=require("@fortawesome/react-fontawesome"),sr=b(require("classnames")),wo=require("formik"),xo=b(require("react-select"));u();var Eo=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Eo));var Re={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};u();u();u();var pt=b(require("react")),jn=require("formik");u();u();var st=b(require("react")),Wn=require("formik");u();u();var Ao=b(require("react")),Yn=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Gn=require("formik");u();u();u();var Hn=require("@terradharitri/sdk-dapp/types/tokens.types");u();u();u();u();u();var $n=require("@terradharitri/sdk-dapp/constants/index"),Zn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Jn=b(require("bignumber.js"));u();u();u();var Kn=require("bech32");u();u();u();var Io=(o,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(o);u();u();u();var Qn=require("@terradharitri/sdk-dapp/constants"),Xn=require("@terradharitri/sdk-dapp/utils/account/getAccount");u();u();var ec=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");u();var rc=require("@terradharitri/sdk-dapp/utils/buildUrlParams");u();var tc=b(require("anchorme"));u();u();var oc=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),qo=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),nc=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),cc=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");u();u();var lc=require("@terradharitri/sdk-dapp/constants/index");u();var ic=require("@terradharitri/sdk-dapp/constants/index");u();u();u();var pc=require("@terradharitri/sdk-dapp/constants/index"),sc=b(require("bignumber.js"));u();var ac=require("@terradharitri/sdk-dapp/constants/index");u();var _c=require("@terradharitri/sdk-dapp/constants/index");u();u();var uc=require("@terradharitri/sdk-core"),dc=require("@terradharitri/sdk-dapp/constants/index"),mc=b(require("bignumber.js"));u();u();var fc=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");u();var vc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");u();var yc=b(require("bignumber.js"));u();var hc=require("@terradharitri/sdk-dapp/constants/index"),gc=require("@terradharitri/sdk-dapp/utils/smartContracts"),bc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),wc=b(require("bignumber.js"));u();var xc=b(require("bignumber.js"));u();u();var Ec=b(require("axios"));u();u();u();var Ac=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");u();var Ic=require("@terradharitri/sdk-dapp/constants/index");u();u();u();var ar=require("@terradharitri/sdk-dapp/constants/index"),Bo=b(require("bignumber.js")),Hr,$r,Zr,Uo=(0,qo.formatAmount)({input:String((Hr=ar.GAS_PRICE)!=null?Hr:1e9),decimals:($r=ar.DECIMALS)!=null?$r:18,showLastNonZeroDecimal:!0,digits:(Zr=ar.DIGITS)!=null?Zr:4}),qc=new Bo.default(Uo).times(10).toString(10);u();var Bc=require("@terradharitri/sdk-dapp/constants/index"),Uc=b(require("bignumber.js"));u();var Sc=b(require("bignumber.js"));u();u();var Tc=require("yup");u();var Jr=require("@terradharitri/sdk-dapp/constants/ledger.constants"),So=b(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),dr=require("yup"),To=(0,dr.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(o){let{ledger:e}=this.parent;return!(e&&o&&o.length&&!e.ledgerDataActive)}),Fo=(0,dr.string)().test({name:"hashSign",test:function(o){let{ledger:e,isGuarded:r}=this.parent;if(e){let{ledgerWithHashSign:c,ledgerWithGuardians:i}=(0,So.default)(e.version);if(o&&o.length>300&&!c)return this.createError({message:`Data too long. You need at least DharitrI app version ${Jr.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(r&&!i)return this.createError({message:`You need at least DharitrI app version ${Jr.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Co=[To,Fo],Fc=Co.reduce((o,e)=>o.concat(e),(0,dr.string)());u();var Cc=require("@terradharitri/sdk-dapp/constants/index"),Lc=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),kc=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Oc=require("yup");u();var Rc=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Mc=b(require("bignumber.js")),Nc=require("yup");u();var Dc=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Pc=b(require("bignumber.js")),zc=require("yup");u();var Vc=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),jc=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Wc=b(require("bignumber.js")),Yc=require("yup");u();var Gc=b(require("bignumber.js")),Hc=require("yup");u();var $c=require("@terradharitri/sdk-dapp/constants/index"),Zc=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Jc=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Kc=b(require("bignumber.js")),Qc=require("yup");u();var Xc=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),el=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),rl=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),tl=b(require("bignumber.js")),ol=require("yup");u();var nl=b(require("bignumber.js")),cl=require("yup");u();var ll=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),il=require("yup");u();var pl=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),sl=require("yup");u();u();var al=(0,Ao.createContext)({});u();u();u();var _l=require("react"),ul=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),dl=b(require("lodash/uniqBy"));u();u();u();var ml=b(require("axios"));u();u();var fl=b(require("axios"));u();u();var vl=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),yl=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),hl=b(require("axios")),gl=b(require("lodash/uniqBy"));u();var bl=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),wl=b(require("axios"));u();var xl=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),El=b(require("axios"));u();var Lo=b(require("react")),Al=(0,Lo.createContext)({});u();u();var Il=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),ql=require("@terradharitri/sdk-dapp/utils");u();var Bl=require("react");u();var Ul=require("react"),Sl=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ko=(0,st.createContext)({});function Oo(){return(0,st.useContext)(ko)}u();var Tl=require("react");u();u();var Ro=({knownAddresses:o,inputValue:e,key:r})=>!o||!e?!1:o.some(c=>{var i;return Boolean((i=c[r])==null?void 0:i.startsWith(e))});u();u();u();var Fl=require("react"),Cl=require("@terradharitri/sdk-dapp/utils");u();var Ll=require("react"),kl=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");u();u();var Ol=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Rl=b(require("axios"));u();var Ml=b(require("axios")),Mo=(0,pt.createContext)({});function at(){return(0,pt.useContext)(Mo)}u();var _t=b(require("react"));u();u();var No=b(require("react")),Nl=require("@terradharitri/sdk-dapp/constants/index"),Dl=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Pl=b(require("bignumber.js")),zl=require("formik");u();u();var Do=b(require("react")),Vl=require("formik"),jl=b(require("lodash/uniqBy"));u();u();var Po=b(require("react")),Wl=(0,Po.createContext)({});u();u();var Yl=require("react"),Gl=require("@terradharitri/sdk-dapp/constants/index"),Hl=require("@terradharitri/sdk-dapp/types/enums.types");u();var $l=(0,Do.createContext)({});u();u();var Zl=require("@terradharitri/sdk-dapp/constants/index"),Jl=require("formik");u();u();var zo=b(require("react")),Kl=require("@terradharitri/sdk-dapp/constants/index"),Ql=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Xl=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ei=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ri=b(require("bignumber.js")),ti=require("formik");u();u();u();u();var oi=b(require("bignumber.js"));u();var ni=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ci=b(require("bignumber.js"));u();u();var li=require("react"),ii=require("@terradharitri/sdk-dapp/constants/index"),pi=require("@terradharitri/sdk-dapp/utils/smartContracts"),si=b(require("bignumber.js")),ai=require("formik");u();u();var _i=require("@terradharitri/sdk-dapp/constants/index"),ui=b(require("bignumber.js")),di=(0,zo.createContext)({}),mi=(0,No.createContext)({});u();u();var Vo=b(require("react")),fi=require("formik"),vi=(0,Vo.createContext)({}),jo=(0,_t.createContext)({});function ze(){return(0,_t.useContext)(jo)}u();u();var Wo=b(require("react")),Yo=require("react-select");u();var Go=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Go));var B={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"},Ho=o=>Wo.default.createElement(Yo.components.Control,ce(ne({},o),{className:B.receiverSelectControl}));u();u();var _r=b(require("react")),$o=require("@fortawesome/free-solid-svg-icons"),Zo=require("@fortawesome/react-fontawesome"),Jo=b(require("classnames")),Ko=require("react-select");u();u();var mr=(o,e)=>{let r=e.toLowerCase(),c=o.label.toLowerCase(),i=o.value.toLowerCase();return e?c.includes(r)||i.includes(r):!0};u();var Qo=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Xo=require("@terradharitri/sdk-dapp/utils"),Kr=o=>o?o.filter(e=>(0,Xo.addressIsValid)(e.address)).map(e=>{let r=e.username?String((0,Qo.trimUsernameDomain)(e.username)):e.address;return{value:e.address,label:r}}):[];u();var en=({setOption:o,setAllValues:e})=>(r,c)=>{["input-blur","menu-close"].includes(c.action)||(e(r),r||o(null))};u();var rn=({setInputValue:o,setOption:e,changeAndBlurInput:r})=>c=>{!c||(e(c),r(c.value),c.value!==c.label?o(c.label):o(c.value))};u();var tn=({options:o,usernameAccounts:e,knownAddresses:r,setFieldValue:c,setInputValue:i,setOption:s})=>a=>{var p,f,y,g;let h=o.find(T=>T.value===a&&T.value!==T.label),E=h==null?void 0:h.label,U,w,I=(p=e[a])==null?void 0:p.username;I&&(E=I,U=I,w=(f=e[a])==null?void 0:f.rawUsername);let q=r.find(T=>T.address===a);q!=null&&q.username&&(E=q==null?void 0:q.username,U=q==null?void 0:q.username,w=q==null?void 0:q.rawUsername);let A=E!=null?E:a;i(A),s({value:a,label:A}),c("receiver",(g=(y=e[a])==null?void 0:y.address)!=null?g:a),c("receiverUsername",U),c("rawReceiverUsername",w)},on=o=>{let{selectProps:e,isDisabled:r,options:c}=o,{menuIsOpen:i,value:s,isLoading:a}=e,p=(0,_r.useMemo)(()=>c.find(h=>{let E=h,U=s;return U?mr(E,U.label):null}),[s,c]),f=c.length===0&&!a,y=Boolean(s)&&!p,g=r||f||y;return a?_r.default.createElement(Zo.FontAwesomeIcon,{icon:$o.faSpinner,spin:!0,className:B.receiverSelectSpinner}):_r.default.createElement(Ko.components.DropdownIndicator,ce(ne({},o),{className:(0,Jo.default)(B.receiverSelectIndicator,{[B.expanded]:i,[B.hidden]:g})}))};u();u();var nn=b(require("react")),cn=require("@terradharitri/sdk-dapp/utils"),ln=b(require("classnames")),pn=require("react-select");u();var yi=b(require("react")),hi=require("@terradharitri/sdk-dapp/constants/index");u();u();var sn=(o,e)=>{let r=o.current;if(!r||!r.state.focusedOption)return!1;let c=r.state.focusedOption,i=c.label.toLowerCase(),s=c.value.toLowerCase(),a=i!==s,p=a&&i.startsWith(e.toLowerCase());return a&&!e?!0:p},an=o=>e=>{let{selectProps:r,value:c}=e,{inputValue:i,menuIsOpen:s}=r,{receiverUsernameInfo:{receiverUsername:a}}=ze(),p=sn(o,i),f=(0,cn.addressIsValid)(String(c)),y=Boolean(a)||p,g=f&&s||!f&&i;return nn.default.createElement(pn.components.Input,ce(ne({},e),{"data-testid":"receiver",className:(0,ln.default)(B.receiverSelectInput,{[B.visible]:g,[B.spaced]:y})}))};u();u();var _n=b(require("react")),un=require("react-select"),dn=o=>_n.default.createElement(un.components.Menu,ce(ne({},o),{className:B.receiverSelectMenu}));u();u();var V=b(require("react")),ur=require("@terradharitri/sdk-dapp/UI/Trim"),Me=b(require("classnames")),mn=require("react-select");u();var{default:De}=(bo(),nt(ct)),fn=o=>{let{selectProps:e,focusedOption:r}=o,{value:c,inputValue:i}=e,s=r,a=s?s.label.toLowerCase():null,p=s&&s.label!==s.value,f=(a&&(!c||c&&i)?a.startsWith(i.toLowerCase()):!1)&&s?s.label.replace(s.label.substring(0,i.length),i):null,y=f&&!i,g=f&&i.length<f.length/2,h=f&&Boolean(i)&&g,E=f&&Boolean(i);return V.default.createElement(V.default.Fragment,null,h&&!p&&V.default.createElement("div",{className:(0,Me.default)(B.receiverSelectAutocomplete,B.receiverSelectAutocompleteUntrimmed)},f),E&&p&&V.default.createElement("div",{className:(0,Me.default)(B.receiverSelectAutocomplete,B.receiverSelectAutocompleteUsername)},V.default.createElement(De,{className:B.receiverSelectAutocompleteIcon}),f,V.default.createElement("span",{className:B.receiverSelectAutocompleteWrapper},"(",V.default.createElement(ur.Trim,{text:s.value}),")")),y&&V.default.createElement("span",{className:(0,Me.default)(B.receiverSelectAutocomplete,{[B.receiverSelectAutocompleteUsername]:p})},p?V.default.createElement(V.default.Fragment,null,V.default.createElement("span",null,V.default.createElement(De,{className:(0,Me.default)(B.receiverSelectAutocompleteIcon,B.receiverSelectAutocompleteIconMuted)}),s.label),V.default.createElement("span",{className:B.receiverSelectAutocompleteWrapper},"(",V.default.createElement(ur.Trim,{text:s.value}),")")):V.default.createElement(ur.Trim,{text:f})),V.default.createElement(mn.components.MenuList,ce(ne({},o),{className:B.receiverSelectList})))};u();u();var te=b(require("react")),Qr=require("@terradharitri/sdk-dapp/UI/Trim"),vn=b(require("classnames")),yn=require("react-select");u();u();var Ne=b(require("react"));u();var hn=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hn));var gn={highlight:"dapp-core-component__styles-modules__highlight"},bn=({highlight:o,text:e=""})=>{let r=e.split(" "),c=o.toLowerCase(),i=new RegExp(`(${c})`,"gi"),s=r.map(a=>a.split(i).filter(p=>p));return Ne.default.createElement("span",{className:gn.highlight},s.map((a,p)=>{let f=`${a}-${p}`;return Ne.default.createElement("span",{key:f},a.map((y,g)=>{let h=y.toLowerCase()===c,E=c&&h,U=`${y}-${g}`;return E?Ne.default.createElement("strong",{key:U},y):Ne.default.createElement("span",{key:U},y)}))}))},wn=o=>{let{isFocused:e,data:r,selectProps:c}=o,{inputValue:i}=c,s=r,a=s.value!==s.label;return te.default.createElement(yn.components.Option,ce(ne({},o),{className:(0,vn.default)(B.receiverSelectOption,{[B.focused]:e})}),a?te.default.createElement(te.default.Fragment,null,te.default.createElement("span",{className:B.receiverSelectOptionUsername},te.default.createElement(De,{className:B.receiverSelectOptionUsernameIcon}),te.default.createElement(bn,{text:s.label,highlight:i})),te.default.createElement("span",{className:B.receiverSelectOptionNameWrapper},"(",te.default.createElement(Qr.Trim,{text:s.value,className:B.receiverSelectOptionName}),")")):te.default.createElement(Qr.Trim,{text:s.value,className:B.receiverSelectOptionName}))};u();u();var xn=b(require("react")),En=b(require("classnames")),An=require("react-select"),In=o=>{let{selectProps:e,isFocused:r,className:c}=o,{menuIsOpen:i}=e;return xn.default.createElement(An.components.SelectContainer,ce(ne({},o),{className:(0,En.default)(c,{[B.expanded]:i,[B.focused]:r&&i})}))};u();u();var oe=b(require("react")),Xr=require("@terradharitri/sdk-dapp/UI/Trim"),qn=require("@terradharitri/sdk-dapp/utils"),Bn=b(require("classnames")),Un=require("react-select"),Sn=o=>{let{selectProps:e,isDisabled:r}=o,{value:c,menuIsOpen:i}=e,s=c,{receiverInfo:{receiver:a},receiverUsernameInfo:{receiverUsername:p}}=ze(),f=p!=null?p:s&&s.value!==s.label,y=s?{value:a!=null?a:s.value,label:s.label}:null,g=y&&(f||!f&&!i)&&(0,qn.addressIsValid)(y.value);return oe.default.createElement(Un.components.ValueContainer,ce(ne({},o),{className:B.receiverSelectValue}),g&&oe.default.createElement("span",{className:(0,Bn.default)(B.receiverSelectSingle,{[B.disabled]:r})},f?oe.default.createElement(oe.default.Fragment,null,oe.default.createElement("span",{className:B.receiverSelectSingleUsername},oe.default.createElement(De,{className:B.receiverSelectSingleUsernameIcon}),y.label),oe.default.createElement("span",{className:B.receiverSelectSingleTrimWrapper},"(",oe.default.createElement(Xr.Trim,{text:y.value,className:B.receiverSelectSingleTrim}),")")):oe.default.createElement(Xr.Trim,{text:y.value,className:B.receiverSelectSingleTrim})),o.children)};u();u();var Tn=require("formik"),ut=()=>{let{receiverInfo:{receiverError:o,isReceiverInvalid:e},receiverUsernameInfo:{receiverUsernameError:r,isReceiverUsernameInvalid:c,receiverUsername:i}}=ze(),{touched:{receiver:s}}=(0,Tn.useFormikContext)(),a=e&&s||c;return i!=null&&i.startsWith("drt1")?{isInvalid:e,receiverErrorDataTestId:"receiverError",error:o}:{isInvalid:a,receiverErrorDataTestId:c?"receiverUsernameError":"receiverError",error:c?r:o}};u();u();var Fn=require("@terradharitri/sdk-dapp/utils"),Cn=require("formik");u();u();var Ln=({knownAddresses:o,inputValue:e})=>!o||!e?!1:o.filter(r=>{var c;let i=(c=r.username)!=null?c:r.address,s=r.address;return mr({label:i,value:s,data:{label:i,value:s}},e)}).length>0,kn=({menuIsOpen:o})=>{let{isInvalid:e}=ut(),{values:{nft:r}}=(0,Cn.useFormikContext)(),{showUsernameError:c,isUsernameLoading:i,isUsernameDebouncing:s,usernameIsAmongKnown:a,searchQueryIsAddress:p}=at(),{receiverInputValue:f,knownAddresses:y}=Oo(),g=Ro({key:"address",knownAddresses:y,inputValue:f}),h=Ln({inputValue:f,knownAddresses:y}),E=p&&(!g||!o)&&!(0,Fn.addressIsValid)(f),U=Boolean(c&&!(o&&g)&&!(o&&a));return{isAddressError:E||(r?e:!1),isUsernameError:U,isRequiredError:e&&!U&&!i&&!s&&!E&&!h&&!f,isReceiverDropdownOpened:f&&h&&o}},On=o=>{let e=(0,M.useRef)(null),{className:r}=o,{setFieldValue:c}=(0,wo.useFormikContext)(),{receiverInfo:{scamError:i,fetchingScamAddress:s,receiverInputValue:a,setReceiverInputValue:p,knownAddresses:f,receiver:y,onBlurReceiver:g,onChangeReceiver:h},receiverUsernameInfo:{receiverUsername:E},formInfo:{readonly:U}}=ze(),[w,I]=(0,M.useState)(!1),[q,A]=(0,M.useState)(y?{label:y,value:y}:null),{receiverErrorDataTestId:T,error:F}=ut(),{isAddressError:z,isUsernameError:j,isRequiredError:D,isReceiverDropdownOpened:we}=kn({menuIsOpen:w}),{usernameAccounts:se,isUsernameLoading:Ve}=at(),xe=()=>{g(new Event("blur"));let S=f==null?void 0:f.find(R=>R.username===a&&R.address===y);S&&(c("receiver",S.address),c("receiverUsername",S.username),c("rawReceiverUsername",S.rawUsername))},Ee=f==null?void 0:f.find(S=>S.username===a&&S.address===y),je=(0,M.useMemo)(()=>Kr(f),[f]),Ae=Ee?Kr([Ee]):je,fe=tn({setFieldValue:c,setInputValue:p,setOption:A,options:Ae,knownAddresses:f!=null?f:[],usernameAccounts:se}),Ie=(0,M.useCallback)(en({setAllValues:fe,setOption:A}),[]),We=(0,M.useCallback)(S=>{h(S?S.trim():""),setTimeout(xe)},[]),Ye=rn({changeAndBlurInput:We,setOption:A,setInputValue:p}),Ge=(0,M.useMemo)(()=>an(e),[e]);(0,M.useEffect)(()=>{if(!y)return;let S=Object.keys(se).find(R=>{var ve;return((ve=se[R])==null?void 0:ve.address)===y});fe(S!=null?S:y),S&&p(S)},[se,y]);let qe=z||j||D,He=qe&&!w;return M.default.createElement("div",{className:(0,sr.default)(B.receiver,r)},M.default.createElement("div",{className:Re.label,"data-testid":"receiverLabel","data-loading":s},"Receiver"),M.default.createElement(xo.default,{value:q,onInputChange:Ie,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:Io("receiver",U),options:Ae,filterOption:mr,noOptionsMessage:()=>null,onChange:Ye,onBlur:xe,isMulti:!1,ref:e,inputValue:a,onMenuClose:()=>I(!1),onMenuOpen:()=>I(!0),components:{Menu:dn,Input:Ge,Control:Ho,ValueContainer:Sn,DropdownIndicator:on,SelectContainer:In,MenuList:fn,Option:wn,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,sr.default)(B.receiverSelectContainer,{[B.opened]:we,[B.invalid]:qe||i})}),He&&M.default.createElement("div",{"data-testid":T,className:Re.error},F),Ve&&M.default.createElement("div",{className:B.loading},"Loading..."),E&&M.default.createElement("span",{className:B.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",M.default.createElement(Gr.FontAwesomeIcon,{icon:Yr.faCheck,className:B.foundIcon})),i&&M.default.createElement("div",{"data-testid":"receiverScam",className:(0,sr.default)(Re.error,Re.scam)},M.default.createElement("span",null,M.default.createElement(Gr.FontAwesomeIcon,{icon:Yr.faExclamationTriangle}),M.default.createElement("small",null,i))))};});var be={};module.exports=qt(be);G();Te(be,Ke(mt()),module.exports);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
