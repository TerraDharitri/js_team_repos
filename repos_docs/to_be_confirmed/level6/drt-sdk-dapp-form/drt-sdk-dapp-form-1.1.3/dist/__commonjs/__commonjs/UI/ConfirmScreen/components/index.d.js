"use strict";var Ot=Object.create;var pr=Object.defineProperty;var Pt=Object.getOwnPropertyDescriptor;var zt=Object.getOwnPropertyNames;var Wt=Object.getPrototypeOf,jt=Object.prototype.hasOwnProperty;var Vt=(o,e)=>()=>(o&&(e=o(o=0)),e);var Ae=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var Se=(o,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let p of zt(e))!jt.call(o,p)&&p!==r&&pr(o,p,{get:()=>e[p],enumerable:!(a=Pt(e,p))||a.enumerable});return o},Ne=(o,e,r)=>(Se(o,e,"default"),r&&Se(r,e,"default")),lr=(o,e,r)=>(r=o!=null?Ot(Wt(o)):{},Se(e||!o||!o.__esModule?pr(r,"default",{value:o,enumerable:!0}):r,o)),Gt=o=>Se(pr({},"__esModule",{value:!0}),o);var Pr=Ae(De=>{"use strict";Y();De.byteLength=Zt;De.toByteArray=Ht;De.fromByteArray=Kt;var K=[],Z=[],Yt=typeof Uint8Array!="undefined"?Uint8Array:Array,ur="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ue=0,Mr=ur.length;ue<Mr;++ue)K[ue]=ur[ue],Z[ur.charCodeAt(ue)]=ue;var ue,Mr;Z["-".charCodeAt(0)]=62;Z["_".charCodeAt(0)]=63;function Or(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=o.indexOf("=");r===-1&&(r=e);var a=r===e?0:4-r%4;return[r,a]}function Zt(o){var e=Or(o),r=e[0],a=e[1];return(r+a)*3/4-a}function $t(o,e,r){return(e+r)*3/4-r}function Ht(o){var e,r=Or(o),a=r[0],p=r[1],u=new Yt($t(o,a,p)),c=0,l=p>0?a-4:a,_;for(_=0;_<l;_+=4)e=Z[o.charCodeAt(_)]<<18|Z[o.charCodeAt(_+1)]<<12|Z[o.charCodeAt(_+2)]<<6|Z[o.charCodeAt(_+3)],u[c++]=e>>16&255,u[c++]=e>>8&255,u[c++]=e&255;return p===2&&(e=Z[o.charCodeAt(_)]<<2|Z[o.charCodeAt(_+1)]>>4,u[c++]=e&255),p===1&&(e=Z[o.charCodeAt(_)]<<10|Z[o.charCodeAt(_+1)]<<4|Z[o.charCodeAt(_+2)]>>2,u[c++]=e>>8&255,u[c++]=e&255),u}function Xt(o){return K[o>>18&63]+K[o>>12&63]+K[o>>6&63]+K[o&63]}function Jt(o,e,r){for(var a,p=[],u=e;u<r;u+=3)a=(o[u]<<16&16711680)+(o[u+1]<<8&65280)+(o[u+2]&255),p.push(Xt(a));return p.join("")}function Kt(o){for(var e,r=o.length,a=r%3,p=[],u=16383,c=0,l=r-a;c<l;c+=u)p.push(Jt(o,c,c+u>l?l:c+u));return a===1?(e=o[r-1],p.push(K[e>>2]+K[e<<4&63]+"==")):a===2&&(e=(o[r-2]<<8)+o[r-1],p.push(K[e>>10]+K[e>>4&63]+K[e<<2&63]+"=")),p.join("")}});var zr=Ae(cr=>{Y();cr.read=function(o,e,r,a,p){var u,c,l=p*8-a-1,_=(1<<l)-1,g=_>>1,y=-7,b=r?p-1:0,T=r?-1:1,B=o[e+b];for(b+=T,u=B&(1<<-y)-1,B>>=-y,y+=l;y>0;u=u*256+o[e+b],b+=T,y-=8);for(c=u&(1<<-y)-1,u>>=-y,y+=a;y>0;c=c*256+o[e+b],b+=T,y-=8);if(u===0)u=1-g;else{if(u===_)return c?NaN:(B?-1:1)*(1/0);c=c+Math.pow(2,a),u=u-g}return(B?-1:1)*c*Math.pow(2,u-a)};cr.write=function(o,e,r,a,p,u){var c,l,_,g=u*8-p-1,y=(1<<g)-1,b=y>>1,T=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,B=a?0:u-1,v=a?1:-1,x=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,c=y):(c=Math.floor(Math.log(e)/Math.LN2),e*(_=Math.pow(2,-c))<1&&(c--,_*=2),c+b>=1?e+=T/_:e+=T*Math.pow(2,1-b),e*_>=2&&(c++,_/=2),c+b>=y?(l=0,c=y):c+b>=1?(l=(e*_-1)*Math.pow(2,p),c=c+b):(l=e*Math.pow(2,b-1)*Math.pow(2,p),c=0));p>=8;o[r+B]=l&255,B+=v,l/=256,p-=8);for(c=c<<p|l,g+=p;g>0;o[r+B]=c&255,B+=v,c/=256,g-=8);o[r+B-v]|=x*128}});var et=Ae(ye=>{"use strict";Y();var fr=Pr(),ge=zr(),Wr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ye.Buffer=m;ye.SlowBuffer=no;ye.INSPECT_MAX_BYTES=50;var Re=2147483647;ye.kMaxLength=Re;m.TYPED_ARRAY_SUPPORT=Qt();!m.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Qt(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(r){return!1}}Object.defineProperty(m.prototype,"parent",{enumerable:!0,get:function(){if(!!m.isBuffer(this))return this.buffer}});Object.defineProperty(m.prototype,"offset",{enumerable:!0,get:function(){if(!!m.isBuffer(this))return this.byteOffset}});function oe(o){if(o>Re)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,m.prototype),e}function m(o,e,r){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return hr(o)}return Gr(o,e,r)}m.poolSize=8192;function Gr(o,e,r){if(typeof o=="string")return ro(o,e);if(ArrayBuffer.isView(o))return to(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(Q(o,ArrayBuffer)||o&&Q(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Q(o,SharedArrayBuffer)||o&&Q(o.buffer,SharedArrayBuffer)))return dr(o,e,r);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var a=o.valueOf&&o.valueOf();if(a!=null&&a!==o)return m.from(a,e,r);var p=oo(o);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return m.from(o[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}m.from=function(o,e,r){return Gr(o,e,r)};Object.setPrototypeOf(m.prototype,Uint8Array.prototype);Object.setPrototypeOf(m,Uint8Array);function Yr(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function eo(o,e,r){return Yr(o),o<=0?oe(o):e!==void 0?typeof r=="string"?oe(o).fill(e,r):oe(o).fill(e):oe(o)}m.alloc=function(o,e,r){return eo(o,e,r)};function hr(o){return Yr(o),oe(o<0?0:_r(o)|0)}m.allocUnsafe=function(o){return hr(o)};m.allocUnsafeSlow=function(o){return hr(o)};function ro(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!m.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=Zr(o,e)|0,a=oe(r),p=a.write(o,e);return p!==r&&(a=a.slice(0,p)),a}function sr(o){for(var e=o.length<0?0:_r(o.length)|0,r=oe(e),a=0;a<e;a+=1)r[a]=o[a]&255;return r}function to(o){if(Q(o,Uint8Array)){var e=new Uint8Array(o);return dr(e.buffer,e.byteOffset,e.byteLength)}return sr(o)}function dr(o,e,r){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var a;return e===void 0&&r===void 0?a=new Uint8Array(o):r===void 0?a=new Uint8Array(o,e):a=new Uint8Array(o,e,r),Object.setPrototypeOf(a,m.prototype),a}function oo(o){if(m.isBuffer(o)){var e=_r(o.length)|0,r=oe(e);return r.length===0||o.copy(r,0,0,e),r}if(o.length!==void 0)return typeof o.length!="number"||br(o.length)?oe(0):sr(o);if(o.type==="Buffer"&&Array.isArray(o.data))return sr(o.data)}function _r(o){if(o>=Re)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Re.toString(16)+" bytes");return o|0}function no(o){return+o!=o&&(o=0),m.alloc(+o)}m.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==m.prototype};m.compare=function(e,r){if(Q(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),Q(r,Uint8Array)&&(r=m.from(r,r.offset,r.byteLength)),!m.isBuffer(e)||!m.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var a=e.length,p=r.length,u=0,c=Math.min(a,p);u<c;++u)if(e[u]!==r[u]){a=e[u],p=r[u];break}return a<p?-1:p<a?1:0};m.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};m.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return m.alloc(0);var a;if(r===void 0)for(r=0,a=0;a<e.length;++a)r+=e[a].length;var p=m.allocUnsafe(r),u=0;for(a=0;a<e.length;++a){var c=e[a];if(Q(c,Uint8Array))u+c.length>p.length?m.from(c).copy(p,u):Uint8Array.prototype.set.call(p,c,u);else if(m.isBuffer(c))c.copy(p,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=c.length}return p};function Zr(o,e){if(m.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||Q(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var r=o.length,a=arguments.length>2&&arguments[2]===!0;if(!a&&r===0)return 0;for(var p=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return mr(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return Qr(o).length;default:if(p)return a?-1:mr(o).length;e=(""+e).toLowerCase(),p=!0}}m.byteLength=Zr;function ao(o,e,r){var a=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return _o(this,e,r);case"utf8":case"utf-8":return Hr(this,e,r);case"ascii":return mo(this,e,r);case"latin1":case"binary":return ho(this,e,r);case"base64":return fo(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return bo(this,e,r);default:if(a)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),a=!0}}m.prototype._isBuffer=!0;function ce(o,e,r){var a=o[e];o[e]=o[r],o[r]=a}m.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)ce(this,r,r+1);return this};m.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)ce(this,r,r+3),ce(this,r+1,r+2);return this};m.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)ce(this,r,r+7),ce(this,r+1,r+6),ce(this,r+2,r+5),ce(this,r+3,r+4);return this};m.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Hr(this,0,e):ao.apply(this,arguments)};m.prototype.toLocaleString=m.prototype.toString;m.prototype.equals=function(e){if(!m.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:m.compare(this,e)===0};m.prototype.inspect=function(){var e="",r=ye.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"};Wr&&(m.prototype[Wr]=m.prototype.inspect);m.prototype.compare=function(e,r,a,p,u){if(Q(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),!m.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),a===void 0&&(a=e?e.length:0),p===void 0&&(p=0),u===void 0&&(u=this.length),r<0||a>e.length||p<0||u>this.length)throw new RangeError("out of range index");if(p>=u&&r>=a)return 0;if(p>=u)return-1;if(r>=a)return 1;if(r>>>=0,a>>>=0,p>>>=0,u>>>=0,this===e)return 0;for(var c=u-p,l=a-r,_=Math.min(c,l),g=this.slice(p,u),y=e.slice(r,a),b=0;b<_;++b)if(g[b]!==y[b]){c=g[b],l=y[b];break}return c<l?-1:l<c?1:0};function $r(o,e,r,a,p){if(o.length===0)return-1;if(typeof r=="string"?(a=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,br(r)&&(r=p?0:o.length-1),r<0&&(r=o.length+r),r>=o.length){if(p)return-1;r=o.length-1}else if(r<0)if(p)r=0;else return-1;if(typeof e=="string"&&(e=m.from(e,a)),m.isBuffer(e))return e.length===0?-1:jr(o,e,r,a,p);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(o,e,r):Uint8Array.prototype.lastIndexOf.call(o,e,r):jr(o,[e],r,a,p);throw new TypeError("val must be string, number or Buffer")}function jr(o,e,r,a,p){var u=1,c=o.length,l=e.length;if(a!==void 0&&(a=String(a).toLowerCase(),a==="ucs2"||a==="ucs-2"||a==="utf16le"||a==="utf-16le")){if(o.length<2||e.length<2)return-1;u=2,c/=2,l/=2,r/=2}function _(B,v){return u===1?B[v]:B.readUInt16BE(v*u)}var g;if(p){var y=-1;for(g=r;g<c;g++)if(_(o,g)===_(e,y===-1?0:g-y)){if(y===-1&&(y=g),g-y+1===l)return y*u}else y!==-1&&(g-=g-y),y=-1}else for(r+l>c&&(r=c-l),g=r;g>=0;g--){for(var b=!0,T=0;T<l;T++)if(_(o,g+T)!==_(e,T)){b=!1;break}if(b)return g}return-1}m.prototype.includes=function(e,r,a){return this.indexOf(e,r,a)!==-1};m.prototype.indexOf=function(e,r,a){return $r(this,e,r,a,!0)};m.prototype.lastIndexOf=function(e,r,a){return $r(this,e,r,a,!1)};function io(o,e,r,a){r=Number(r)||0;var p=o.length-r;a?(a=Number(a),a>p&&(a=p)):a=p;var u=e.length;a>u/2&&(a=u/2);for(var c=0;c<a;++c){var l=parseInt(e.substr(c*2,2),16);if(br(l))return c;o[r+c]=l}return c}function po(o,e,r,a){return Me(mr(e,o.length-r),o,r,a)}function lo(o,e,r,a){return Me(vo(e),o,r,a)}function uo(o,e,r,a){return Me(Qr(e),o,r,a)}function co(o,e,r,a){return Me(wo(e,o.length-r),o,r,a)}m.prototype.write=function(e,r,a,p){if(r===void 0)p="utf8",a=this.length,r=0;else if(a===void 0&&typeof r=="string")p=r,a=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(a)?(a=a>>>0,p===void 0&&(p="utf8")):(p=a,a=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var u=this.length-r;if((a===void 0||a>u)&&(a=u),e.length>0&&(a<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");for(var c=!1;;)switch(p){case"hex":return io(this,e,r,a);case"utf8":case"utf-8":return po(this,e,r,a);case"ascii":case"latin1":case"binary":return lo(this,e,r,a);case"base64":return uo(this,e,r,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return co(this,e,r,a);default:if(c)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),c=!0}};m.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function fo(o,e,r){return e===0&&r===o.length?fr.fromByteArray(o):fr.fromByteArray(o.slice(e,r))}function Hr(o,e,r){r=Math.min(o.length,r);for(var a=[],p=e;p<r;){var u=o[p],c=null,l=u>239?4:u>223?3:u>191?2:1;if(p+l<=r){var _,g,y,b;switch(l){case 1:u<128&&(c=u);break;case 2:_=o[p+1],(_&192)===128&&(b=(u&31)<<6|_&63,b>127&&(c=b));break;case 3:_=o[p+1],g=o[p+2],(_&192)===128&&(g&192)===128&&(b=(u&15)<<12|(_&63)<<6|g&63,b>2047&&(b<55296||b>57343)&&(c=b));break;case 4:_=o[p+1],g=o[p+2],y=o[p+3],(_&192)===128&&(g&192)===128&&(y&192)===128&&(b=(u&15)<<18|(_&63)<<12|(g&63)<<6|y&63,b>65535&&b<1114112&&(c=b))}}c===null?(c=65533,l=1):c>65535&&(c-=65536,a.push(c>>>10&1023|55296),c=56320|c&1023),a.push(c),p+=l}return so(a)}var Vr=4096;function so(o){var e=o.length;if(e<=Vr)return String.fromCharCode.apply(String,o);for(var r="",a=0;a<e;)r+=String.fromCharCode.apply(String,o.slice(a,a+=Vr));return r}function mo(o,e,r){var a="";r=Math.min(o.length,r);for(var p=e;p<r;++p)a+=String.fromCharCode(o[p]&127);return a}function ho(o,e,r){var a="";r=Math.min(o.length,r);for(var p=e;p<r;++p)a+=String.fromCharCode(o[p]);return a}function _o(o,e,r){var a=o.length;(!e||e<0)&&(e=0),(!r||r<0||r>a)&&(r=a);for(var p="",u=e;u<r;++u)p+=xo[o[u]];return p}function bo(o,e,r){for(var a=o.slice(e,r),p="",u=0;u<a.length-1;u+=2)p+=String.fromCharCode(a[u]+a[u+1]*256);return p}m.prototype.slice=function(e,r){var a=this.length;e=~~e,r=r===void 0?a:~~r,e<0?(e+=a,e<0&&(e=0)):e>a&&(e=a),r<0?(r+=a,r<0&&(r=0)):r>a&&(r=a),r<e&&(r=e);var p=this.subarray(e,r);return Object.setPrototypeOf(p,m.prototype),p};function M(o,e,r){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>r)throw new RangeError("Trying to access beyond buffer length")}m.prototype.readUintLE=m.prototype.readUIntLE=function(e,r,a){e=e>>>0,r=r>>>0,a||M(e,r,this.length);for(var p=this[e],u=1,c=0;++c<r&&(u*=256);)p+=this[e+c]*u;return p};m.prototype.readUintBE=m.prototype.readUIntBE=function(e,r,a){e=e>>>0,r=r>>>0,a||M(e,r,this.length);for(var p=this[e+--r],u=1;r>0&&(u*=256);)p+=this[e+--r]*u;return p};m.prototype.readUint8=m.prototype.readUInt8=function(e,r){return e=e>>>0,r||M(e,1,this.length),this[e]};m.prototype.readUint16LE=m.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||M(e,2,this.length),this[e]|this[e+1]<<8};m.prototype.readUint16BE=m.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||M(e,2,this.length),this[e]<<8|this[e+1]};m.prototype.readUint32LE=m.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||M(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};m.prototype.readUint32BE=m.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||M(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};m.prototype.readIntLE=function(e,r,a){e=e>>>0,r=r>>>0,a||M(e,r,this.length);for(var p=this[e],u=1,c=0;++c<r&&(u*=256);)p+=this[e+c]*u;return u*=128,p>=u&&(p-=Math.pow(2,8*r)),p};m.prototype.readIntBE=function(e,r,a){e=e>>>0,r=r>>>0,a||M(e,r,this.length);for(var p=r,u=1,c=this[e+--p];p>0&&(u*=256);)c+=this[e+--p]*u;return u*=128,c>=u&&(c-=Math.pow(2,8*r)),c};m.prototype.readInt8=function(e,r){return e=e>>>0,r||M(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};m.prototype.readInt16LE=function(e,r){e=e>>>0,r||M(e,2,this.length);var a=this[e]|this[e+1]<<8;return a&32768?a|4294901760:a};m.prototype.readInt16BE=function(e,r){e=e>>>0,r||M(e,2,this.length);var a=this[e+1]|this[e]<<8;return a&32768?a|4294901760:a};m.prototype.readInt32LE=function(e,r){return e=e>>>0,r||M(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};m.prototype.readInt32BE=function(e,r){return e=e>>>0,r||M(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};m.prototype.readFloatLE=function(e,r){return e=e>>>0,r||M(e,4,this.length),ge.read(this,e,!0,23,4)};m.prototype.readFloatBE=function(e,r){return e=e>>>0,r||M(e,4,this.length),ge.read(this,e,!1,23,4)};m.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||M(e,8,this.length),ge.read(this,e,!0,52,8)};m.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||M(e,8,this.length),ge.read(this,e,!1,52,8)};function G(o,e,r,a,p,u){if(!m.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>p||e<u)throw new RangeError('"value" argument is out of bounds');if(r+a>o.length)throw new RangeError("Index out of range")}m.prototype.writeUintLE=m.prototype.writeUIntLE=function(e,r,a,p){if(e=+e,r=r>>>0,a=a>>>0,!p){var u=Math.pow(2,8*a)-1;G(this,e,r,a,u,0)}var c=1,l=0;for(this[r]=e&255;++l<a&&(c*=256);)this[r+l]=e/c&255;return r+a};m.prototype.writeUintBE=m.prototype.writeUIntBE=function(e,r,a,p){if(e=+e,r=r>>>0,a=a>>>0,!p){var u=Math.pow(2,8*a)-1;G(this,e,r,a,u,0)}var c=a-1,l=1;for(this[r+c]=e&255;--c>=0&&(l*=256);)this[r+c]=e/l&255;return r+a};m.prototype.writeUint8=m.prototype.writeUInt8=function(e,r,a){return e=+e,r=r>>>0,a||G(this,e,r,1,255,0),this[r]=e&255,r+1};m.prototype.writeUint16LE=m.prototype.writeUInt16LE=function(e,r,a){return e=+e,r=r>>>0,a||G(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};m.prototype.writeUint16BE=m.prototype.writeUInt16BE=function(e,r,a){return e=+e,r=r>>>0,a||G(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2};m.prototype.writeUint32LE=m.prototype.writeUInt32LE=function(e,r,a){return e=+e,r=r>>>0,a||G(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4};m.prototype.writeUint32BE=m.prototype.writeUInt32BE=function(e,r,a){return e=+e,r=r>>>0,a||G(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};m.prototype.writeIntLE=function(e,r,a,p){if(e=+e,r=r>>>0,!p){var u=Math.pow(2,8*a-1);G(this,e,r,a,u-1,-u)}var c=0,l=1,_=0;for(this[r]=e&255;++c<a&&(l*=256);)e<0&&_===0&&this[r+c-1]!==0&&(_=1),this[r+c]=(e/l>>0)-_&255;return r+a};m.prototype.writeIntBE=function(e,r,a,p){if(e=+e,r=r>>>0,!p){var u=Math.pow(2,8*a-1);G(this,e,r,a,u-1,-u)}var c=a-1,l=1,_=0;for(this[r+c]=e&255;--c>=0&&(l*=256);)e<0&&_===0&&this[r+c+1]!==0&&(_=1),this[r+c]=(e/l>>0)-_&255;return r+a};m.prototype.writeInt8=function(e,r,a){return e=+e,r=r>>>0,a||G(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1};m.prototype.writeInt16LE=function(e,r,a){return e=+e,r=r>>>0,a||G(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};m.prototype.writeInt16BE=function(e,r,a){return e=+e,r=r>>>0,a||G(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};m.prototype.writeInt32LE=function(e,r,a){return e=+e,r=r>>>0,a||G(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};m.prototype.writeInt32BE=function(e,r,a){return e=+e,r=r>>>0,a||G(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function Xr(o,e,r,a,p,u){if(r+a>o.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function Jr(o,e,r,a,p){return e=+e,r=r>>>0,p||Xr(o,e,r,4,34028234663852886e22,-34028234663852886e22),ge.write(o,e,r,a,23,4),r+4}m.prototype.writeFloatLE=function(e,r,a){return Jr(this,e,r,!0,a)};m.prototype.writeFloatBE=function(e,r,a){return Jr(this,e,r,!1,a)};function Kr(o,e,r,a,p){return e=+e,r=r>>>0,p||Xr(o,e,r,8,17976931348623157e292,-17976931348623157e292),ge.write(o,e,r,a,52,8),r+8}m.prototype.writeDoubleLE=function(e,r,a){return Kr(this,e,r,!0,a)};m.prototype.writeDoubleBE=function(e,r,a){return Kr(this,e,r,!1,a)};m.prototype.copy=function(e,r,a,p){if(!m.isBuffer(e))throw new TypeError("argument should be a Buffer");if(a||(a=0),!p&&p!==0&&(p=this.length),r>=e.length&&(r=e.length),r||(r=0),p>0&&p<a&&(p=a),p===a||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(a<0||a>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),e.length-r<p-a&&(p=e.length-r+a);var u=p-a;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,a,p):Uint8Array.prototype.set.call(e,this.subarray(a,p),r),u};m.prototype.fill=function(e,r,a,p){if(typeof e=="string"){if(typeof r=="string"?(p=r,r=0,a=this.length):typeof a=="string"&&(p=a,a=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!m.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(e.length===1){var u=e.charCodeAt(0);(p==="utf8"&&u<128||p==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<a)throw new RangeError("Out of range index");if(a<=r)return this;r=r>>>0,a=a===void 0?this.length:a>>>0,e||(e=0);var c;if(typeof e=="number")for(c=r;c<a;++c)this[c]=e;else{var l=m.isBuffer(e)?e:m.from(e,p),_=l.length;if(_===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<a-r;++c)this[c+r]=l[c%_]}return this};var go=/[^+/0-9A-Za-z-_]/g;function yo(o){if(o=o.split("=")[0],o=o.trim().replace(go,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function mr(o,e){e=e||1/0;for(var r,a=o.length,p=null,u=[],c=0;c<a;++c){if(r=o.charCodeAt(c),r>55295&&r<57344){if(!p){if(r>56319){(e-=3)>-1&&u.push(239,191,189);continue}else if(c+1===a){(e-=3)>-1&&u.push(239,191,189);continue}p=r;continue}if(r<56320){(e-=3)>-1&&u.push(239,191,189),p=r;continue}r=(p-55296<<10|r-56320)+65536}else p&&(e-=3)>-1&&u.push(239,191,189);if(p=null,r<128){if((e-=1)<0)break;u.push(r)}else if(r<2048){if((e-=2)<0)break;u.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;u.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;u.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return u}function vo(o){for(var e=[],r=0;r<o.length;++r)e.push(o.charCodeAt(r)&255);return e}function wo(o,e){for(var r,a,p,u=[],c=0;c<o.length&&!((e-=2)<0);++c)r=o.charCodeAt(c),a=r>>8,p=r%256,u.push(p),u.push(a);return u}function Qr(o){return fr.toByteArray(yo(o))}function Me(o,e,r,a){for(var p=0;p<a&&!(p+r>=e.length||p>=o.length);++p)e[p+r]=o[p];return p}function Q(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function br(o){return o!==o}var xo=function(){for(var o="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var a=r*16,p=0;p<16;++p)e[a+p]=o[r]+o[p];return e}()});var at=Ae((Qn,nt)=>{Y();var U=nt.exports={},ee,re;function gr(){throw new Error("setTimeout has not been defined")}function yr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ee=setTimeout:ee=gr}catch(o){ee=gr}try{typeof clearTimeout=="function"?re=clearTimeout:re=yr}catch(o){re=yr}})();function rt(o){if(ee===setTimeout)return setTimeout(o,0);if((ee===gr||!ee)&&setTimeout)return ee=setTimeout,setTimeout(o,0);try{return ee(o,0)}catch(e){try{return ee.call(null,o,0)}catch(r){return ee.call(this,o,0)}}}function Eo(o){if(re===clearTimeout)return clearTimeout(o);if((re===yr||!re)&&clearTimeout)return re=clearTimeout,clearTimeout(o);try{return re(o)}catch(e){try{return re.call(null,o)}catch(r){return re.call(this,o)}}}var ne=[],ve=!1,fe,Oe=-1;function Ao(){!ve||!fe||(ve=!1,fe.length?ne=fe.concat(ne):Oe=-1,ne.length&&tt())}function tt(){if(!ve){var o=rt(Ao);ve=!0;for(var e=ne.length;e;){for(fe=ne,ne=[];++Oe<e;)fe&&fe[Oe].run();Oe=-1,e=ne.length}fe=null,ve=!1,Eo(o)}}U.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];ne.push(new ot(o,e)),ne.length===1&&!ve&&rt(tt)};function ot(o,e){this.fun=o,this.array=e}ot.prototype.run=function(){this.fun.apply(null,this.array)};U.title="browser";U.browser=!0;U.env={};U.argv=[];U.version="";U.versions={};function ae(){}U.on=ae;U.addListener=ae;U.once=ae;U.off=ae;U.removeListener=ae;U.removeAllListeners=ae;U.emit=ae;U.prependListener=ae;U.prependOnceListener=ae;U.listeners=function(o){return[]};U.binding=function(o){throw new Error("process.binding is not supported")};U.cwd=function(){return"/"};U.chdir=function(o){throw new Error("process.chdir is not supported")};U.umask=function(){return 0}});var _e,be,ea,Y=Vt(()=>{_e=lr(et()),be=lr(at()),ea=function(o){function e(){var a=this||self;return delete o.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object)});var Lt=Ae((Bp,Ut)=>{"use strict";Y();var ko=Object.create,Te=Object.defineProperty,To=Object.getOwnPropertyDescriptor,Bo=Object.getOwnPropertyNames,Ye=Object.getOwnPropertySymbols,qo=Object.getPrototypeOf,Tr=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,it=(o,e,r)=>e in o?Te(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,Br=(o,e)=>{for(var r in e||(e={}))Tr.call(e,r)&&it(o,r,e[r]);if(Ye)for(var r of Ye(e))vt.call(e,r)&&it(o,r,e[r]);return o},Io=(o,e)=>{var r={};for(var a in o)Tr.call(o,a)&&e.indexOf(a)<0&&(r[a]=o[a]);if(o!=null&&Ye)for(var a of Ye(o))e.indexOf(a)<0&&vt.call(o,a)&&(r[a]=o[a]);return r},qr=(o,e)=>()=>(o&&(e=o(o=0)),e),$e=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),Ir=(o,e)=>{for(var r in e)Te(o,r,{get:e[r],enumerable:!0})},wt=(o,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let p of Bo(e))!Tr.call(o,p)&&p!==r&&Te(o,p,{get:()=>e[p],enumerable:!(a=To(e,p))||a.enumerable});return o},w=(o,e,r)=>(r=o!=null?ko(qo(o)):{},wt(e||!o||!o.__esModule?Te(r,"default",{value:o,enumerable:!0}):r,o)),He=o=>wt(Te({},"__esModule",{value:!0}),o),Co=$e(o=>{"use strict";s(),o.byteLength=_,o.toByteArray=y,o.fromByteArray=B;var e=[],r=[],a=typeof Uint8Array!="undefined"?Uint8Array:Array,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(u=0,c=p.length;u<c;++u)e[u]=p[u],r[p.charCodeAt(u)]=u;var u,c;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function l(v){var x=v.length;if(x%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var k=v.indexOf("=");k===-1&&(k=x);var A=k===x?0:4-k%4;return[k,A]}function _(v){var x=l(v),k=x[0],A=x[1];return(k+A)*3/4-A}function g(v,x,k){return(x+k)*3/4-k}function y(v){var x,k=l(v),A=k[0],I=k[1],q=new a(g(v,A,I)),N=0,O=I>0?A-4:A,D;for(D=0;D<O;D+=4)x=r[v.charCodeAt(D)]<<18|r[v.charCodeAt(D+1)]<<12|r[v.charCodeAt(D+2)]<<6|r[v.charCodeAt(D+3)],q[N++]=x>>16&255,q[N++]=x>>8&255,q[N++]=x&255;return I===2&&(x=r[v.charCodeAt(D)]<<2|r[v.charCodeAt(D+1)]>>4,q[N++]=x&255),I===1&&(x=r[v.charCodeAt(D)]<<10|r[v.charCodeAt(D+1)]<<4|r[v.charCodeAt(D+2)]>>2,q[N++]=x>>8&255,q[N++]=x&255),q}function b(v){return e[v>>18&63]+e[v>>12&63]+e[v>>6&63]+e[v&63]}function T(v,x,k){for(var A,I=[],q=x;q<k;q+=3)A=(v[q]<<16&16711680)+(v[q+1]<<8&65280)+(v[q+2]&255),I.push(b(A));return I.join("")}function B(v){for(var x,k=v.length,A=k%3,I=[],q=16383,N=0,O=k-A;N<O;N+=q)I.push(T(v,N,N+q>O?O:N+q));return A===1?(x=v[k-1],I.push(e[x>>2]+e[x<<4&63]+"==")):A===2&&(x=(v[k-2]<<8)+v[k-1],I.push(e[x>>10]+e[x>>4&63]+e[x<<2&63]+"=")),I.join("")}}),Fo=$e(o=>{s(),o.read=function(e,r,a,p,u){var c,l,_=u*8-p-1,g=(1<<_)-1,y=g>>1,b=-7,T=a?u-1:0,B=a?-1:1,v=e[r+T];for(T+=B,c=v&(1<<-b)-1,v>>=-b,b+=_;b>0;c=c*256+e[r+T],T+=B,b-=8);for(l=c&(1<<-b)-1,c>>=-b,b+=p;b>0;l=l*256+e[r+T],T+=B,b-=8);if(c===0)c=1-y;else{if(c===g)return l?NaN:(v?-1:1)*(1/0);l=l+Math.pow(2,p),c=c-y}return(v?-1:1)*l*Math.pow(2,c-p)},o.write=function(e,r,a,p,u,c){var l,_,g,y=c*8-u-1,b=(1<<y)-1,T=b>>1,B=u===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=p?0:c-1,x=p?1:-1,k=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(_=isNaN(r)?1:0,l=b):(l=Math.floor(Math.log(r)/Math.LN2),r*(g=Math.pow(2,-l))<1&&(l--,g*=2),l+T>=1?r+=B/g:r+=B*Math.pow(2,1-T),r*g>=2&&(l++,g/=2),l+T>=b?(_=0,l=b):l+T>=1?(_=(r*g-1)*Math.pow(2,u),l=l+T):(_=r*Math.pow(2,T-1)*Math.pow(2,u),l=0));u>=8;e[a+v]=_&255,v+=x,_/=256,u-=8);for(l=l<<u|_,y+=u;y>0;e[a+v]=l&255,v+=x,l/=256,y-=8);e[a+v-x]|=k*128}}),Uo=$e(o=>{"use strict";s();var e=Co(),r=Fo(),a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;o.Buffer=l,o.SlowBuffer=I,o.INSPECT_MAX_BYTES=50;var p=2147483647;o.kMaxLength=p,l.TYPED_ARRAY_SUPPORT=u(),!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function u(){try{var t=new Uint8Array(1),n={foo:function(){return 42}};return Object.setPrototypeOf(n,Uint8Array.prototype),Object.setPrototypeOf(t,n),t.foo()===42}catch(i){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}});function c(t){if(t>p)throw new RangeError('The value "'+t+'" is invalid for option "size"');var n=new Uint8Array(t);return Object.setPrototypeOf(n,l.prototype),n}function l(t,n,i){if(typeof t=="number"){if(typeof n=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(t)}return _(t,n,i)}l.poolSize=8192;function _(t,n,i){if(typeof t=="string")return T(t,n);if(ArrayBuffer.isView(t))return v(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(J(t,ArrayBuffer)||t&&J(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(J(t,SharedArrayBuffer)||t&&J(t.buffer,SharedArrayBuffer)))return x(t,n,i);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var f=t.valueOf&&t.valueOf();if(f!=null&&f!==t)return l.from(f,n,i);var d=k(t);if(d)return d;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return l.from(t[Symbol.toPrimitive]("string"),n,i);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}l.from=function(t,n,i){return _(t,n,i)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array);function g(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function y(t,n,i){return g(t),t<=0?c(t):n!==void 0?typeof i=="string"?c(t).fill(n,i):c(t).fill(n):c(t)}l.alloc=function(t,n,i){return y(t,n,i)};function b(t){return g(t),c(t<0?0:A(t)|0)}l.allocUnsafe=function(t){return b(t)},l.allocUnsafeSlow=function(t){return b(t)};function T(t,n){if((typeof n!="string"||n==="")&&(n="utf8"),!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n);var i=q(t,n)|0,f=c(i),d=f.write(t,n);return d!==i&&(f=f.slice(0,d)),f}function B(t){for(var n=t.length<0?0:A(t.length)|0,i=c(n),f=0;f<n;f+=1)i[f]=t[f]&255;return i}function v(t){if(J(t,Uint8Array)){var n=new Uint8Array(t);return x(n.buffer,n.byteOffset,n.byteLength)}return B(t)}function x(t,n,i){if(n<0||t.byteLength<n)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<n+(i||0))throw new RangeError('"length" is outside of buffer bounds');var f;return n===void 0&&i===void 0?f=new Uint8Array(t):i===void 0?f=new Uint8Array(t,n):f=new Uint8Array(t,n,i),Object.setPrototypeOf(f,l.prototype),f}function k(t){if(l.isBuffer(t)){var n=A(t.length)|0,i=c(n);return i.length===0||t.copy(i,0,0,n),i}if(t.length!==void 0)return typeof t.length!="number"||ir(t.length)?c(0):B(t);if(t.type==="Buffer"&&Array.isArray(t.data))return B(t.data)}function A(t){if(t>=p)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+p.toString(16)+" bytes");return t|0}function I(t){return+t!=t&&(t=0),l.alloc(+t)}l.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==l.prototype},l.compare=function(t,n){if(J(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),J(n,Uint8Array)&&(n=l.from(n,n.offset,n.byteLength)),!l.isBuffer(t)||!l.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===n)return 0;for(var i=t.length,f=n.length,d=0,h=Math.min(i,f);d<h;++d)if(t[d]!==n[d]){i=t[d],f=n[d];break}return i<f?-1:f<i?1:0},l.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(t,n){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return l.alloc(0);var i;if(n===void 0)for(n=0,i=0;i<t.length;++i)n+=t[i].length;var f=l.allocUnsafe(n),d=0;for(i=0;i<t.length;++i){var h=t[i];if(J(h,Uint8Array))d+h.length>f.length?l.from(h).copy(f,d):Uint8Array.prototype.set.call(f,h,d);else if(l.isBuffer(h))h.copy(f,d);else throw new TypeError('"list" argument must be an Array of Buffers');d+=h.length}return f};function q(t,n){if(l.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||J(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var i=t.length,f=arguments.length>2&&arguments[2]===!0;if(!f&&i===0)return 0;for(var d=!1;;)switch(n){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return ar(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i*2;case"hex":return i>>>1;case"base64":return Nr(t).length;default:if(d)return f?-1:ar(t).length;n=(""+n).toLowerCase(),d=!0}}l.byteLength=q;function N(t,n,i){var f=!1;if((n===void 0||n<0)&&(n=0),n>this.length||((i===void 0||i>this.length)&&(i=this.length),i<=0)||(i>>>=0,n>>>=0,i<=n))return"";for(t||(t="utf8");;)switch(t){case"hex":return or(this,n,i);case"utf8":case"utf-8":return Ce(this,n,i);case"ascii":return rr(this,n,i);case"latin1":case"binary":return tr(this,n,i);case"base64":return Qe(this,n,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return nr(this,n,i);default:if(f)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),f=!0}}l.prototype._isBuffer=!0;function O(t,n,i){var f=t[n];t[n]=t[i],t[i]=f}l.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<t;n+=2)O(this,n,n+1);return this},l.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<t;n+=4)O(this,n,n+3),O(this,n+1,n+2);return this},l.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<t;n+=8)O(this,n,n+7),O(this,n+1,n+6),O(this,n+2,n+5),O(this,n+3,n+4);return this},l.prototype.toString=function(){var t=this.length;return t===0?"":arguments.length===0?Ce(this,0,t):N.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(t){if(!l.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:l.compare(this,t)===0},l.prototype.inspect=function(){var t="",n=o.INSPECT_MAX_BYTES;return t=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(t+=" ... "),"<Buffer "+t+">"},a&&(l.prototype[a]=l.prototype.inspect),l.prototype.compare=function(t,n,i,f,d){if(J(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(n===void 0&&(n=0),i===void 0&&(i=t?t.length:0),f===void 0&&(f=0),d===void 0&&(d=this.length),n<0||i>t.length||f<0||d>this.length)throw new RangeError("out of range index");if(f>=d&&n>=i)return 0;if(f>=d)return-1;if(n>=i)return 1;if(n>>>=0,i>>>=0,f>>>=0,d>>>=0,this===t)return 0;for(var h=d-f,E=i-n,C=Math.min(h,E),P=this.slice(f,d),F=t.slice(n,i),L=0;L<C;++L)if(P[L]!==F[L]){h=P[L],E=F[L];break}return h<E?-1:E<h?1:0};function D(t,n,i,f,d){if(t.length===0)return-1;if(typeof i=="string"?(f=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),i=+i,ir(i)&&(i=d?0:t.length-1),i<0&&(i=t.length+i),i>=t.length){if(d)return-1;i=t.length-1}else if(i<0)if(d)i=0;else return-1;if(typeof n=="string"&&(n=l.from(n,f)),l.isBuffer(n))return n.length===0?-1:qe(t,n,i,f,d);if(typeof n=="number")return n=n&255,typeof Uint8Array.prototype.indexOf=="function"?d?Uint8Array.prototype.indexOf.call(t,n,i):Uint8Array.prototype.lastIndexOf.call(t,n,i):qe(t,[n],i,f,d);throw new TypeError("val must be string, number or Buffer")}function qe(t,n,i,f,d){var h=1,E=t.length,C=n.length;if(f!==void 0&&(f=String(f).toLowerCase(),f==="ucs2"||f==="ucs-2"||f==="utf16le"||f==="utf-16le")){if(t.length<2||n.length<2)return-1;h=2,E/=2,C/=2,i/=2}function P(Dr,Rr){return h===1?Dr[Rr]:Dr.readUInt16BE(Rr*h)}var F;if(d){var L=-1;for(F=i;F<E;F++)if(P(t,F)===P(n,L===-1?0:F-L)){if(L===-1&&(L=F),F-L+1===C)return L*h}else L!==-1&&(F-=F-L),L=-1}else for(i+C>E&&(i=E-C),F=i;F>=0;F--){for(var W=!0,Le=0;Le<C;Le++)if(P(t,F+Le)!==P(n,Le)){W=!1;break}if(W)return F}return-1}l.prototype.includes=function(t,n,i){return this.indexOf(t,n,i)!==-1},l.prototype.indexOf=function(t,n,i){return D(this,t,n,i,!0)},l.prototype.lastIndexOf=function(t,n,i){return D(this,t,n,i,!1)};function Xe(t,n,i,f){i=Number(i)||0;var d=t.length-i;f?(f=Number(f),f>d&&(f=d)):f=d;var h=n.length;f>h/2&&(f=h/2);for(var E=0;E<f;++E){var C=parseInt(n.substr(E*2,2),16);if(ir(C))return E;t[i+E]=C}return E}function he(t,n,i,f){return Ue(ar(n,t.length-i),t,i,f)}function Ie(t,n,i,f){return Ue(Dt(n),t,i,f)}function Je(t,n,i,f){return Ue(Nr(n),t,i,f)}function Ke(t,n,i,f){return Ue(Rt(n,t.length-i),t,i,f)}l.prototype.write=function(t,n,i,f){if(n===void 0)f="utf8",i=this.length,n=0;else if(i===void 0&&typeof n=="string")f=n,i=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(i)?(i=i>>>0,f===void 0&&(f="utf8")):(f=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var d=this.length-n;if((i===void 0||i>d)&&(i=d),t.length>0&&(i<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");f||(f="utf8");for(var h=!1;;)switch(f){case"hex":return Xe(this,t,n,i);case"utf8":case"utf-8":return he(this,t,n,i);case"ascii":case"latin1":case"binary":return Ie(this,t,n,i);case"base64":return Je(this,t,n,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ke(this,t,n,i);default:if(h)throw new TypeError("Unknown encoding: "+f);f=(""+f).toLowerCase(),h=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Qe(t,n,i){return n===0&&i===t.length?e.fromByteArray(t):e.fromByteArray(t.slice(n,i))}function Ce(t,n,i){i=Math.min(t.length,i);for(var f=[],d=n;d<i;){var h=t[d],E=null,C=h>239?4:h>223?3:h>191?2:1;if(d+C<=i){var P,F,L,W;switch(C){case 1:h<128&&(E=h);break;case 2:P=t[d+1],(P&192)===128&&(W=(h&31)<<6|P&63,W>127&&(E=W));break;case 3:P=t[d+1],F=t[d+2],(P&192)===128&&(F&192)===128&&(W=(h&15)<<12|(P&63)<<6|F&63,W>2047&&(W<55296||W>57343)&&(E=W));break;case 4:P=t[d+1],F=t[d+2],L=t[d+3],(P&192)===128&&(F&192)===128&&(L&192)===128&&(W=(h&15)<<18|(P&63)<<12|(F&63)<<6|L&63,W>65535&&W<1114112&&(E=W))}}E===null?(E=65533,C=1):E>65535&&(E-=65536,f.push(E>>>10&1023|55296),E=56320|E&1023),f.push(E),d+=C}return er(f)}var Fe=4096;function er(t){var n=t.length;if(n<=Fe)return String.fromCharCode.apply(String,t);for(var i="",f=0;f<n;)i+=String.fromCharCode.apply(String,t.slice(f,f+=Fe));return i}function rr(t,n,i){var f="";i=Math.min(t.length,i);for(var d=n;d<i;++d)f+=String.fromCharCode(t[d]&127);return f}function tr(t,n,i){var f="";i=Math.min(t.length,i);for(var d=n;d<i;++d)f+=String.fromCharCode(t[d]);return f}function or(t,n,i){var f=t.length;(!n||n<0)&&(n=0),(!i||i<0||i>f)&&(i=f);for(var d="",h=n;h<i;++h)d+=Mt[t[h]];return d}function nr(t,n,i){for(var f=t.slice(n,i),d="",h=0;h<f.length-1;h+=2)d+=String.fromCharCode(f[h]+f[h+1]*256);return d}l.prototype.slice=function(t,n){var i=this.length;t=~~t,n=n===void 0?i:~~n,t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),n<0?(n+=i,n<0&&(n=0)):n>i&&(n=i),n<t&&(n=t);var f=this.subarray(t,n);return Object.setPrototypeOf(f,l.prototype),f};function R(t,n,i){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+n>i)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(t,n,i){t=t>>>0,n=n>>>0,i||R(t,n,this.length);for(var f=this[t],d=1,h=0;++h<n&&(d*=256);)f+=this[t+h]*d;return f},l.prototype.readUintBE=l.prototype.readUIntBE=function(t,n,i){t=t>>>0,n=n>>>0,i||R(t,n,this.length);for(var f=this[t+--n],d=1;n>0&&(d*=256);)f+=this[t+--n]*d;return f},l.prototype.readUint8=l.prototype.readUInt8=function(t,n){return t=t>>>0,n||R(t,1,this.length),this[t]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(t,n){return t=t>>>0,n||R(t,2,this.length),this[t]|this[t+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(t,n){return t=t>>>0,n||R(t,2,this.length),this[t]<<8|this[t+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(t,n){return t=t>>>0,n||R(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(t,n){return t=t>>>0,n||R(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},l.prototype.readIntLE=function(t,n,i){t=t>>>0,n=n>>>0,i||R(t,n,this.length);for(var f=this[t],d=1,h=0;++h<n&&(d*=256);)f+=this[t+h]*d;return d*=128,f>=d&&(f-=Math.pow(2,8*n)),f},l.prototype.readIntBE=function(t,n,i){t=t>>>0,n=n>>>0,i||R(t,n,this.length);for(var f=n,d=1,h=this[t+--f];f>0&&(d*=256);)h+=this[t+--f]*d;return d*=128,h>=d&&(h-=Math.pow(2,8*n)),h},l.prototype.readInt8=function(t,n){return t=t>>>0,n||R(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},l.prototype.readInt16LE=function(t,n){t=t>>>0,n||R(t,2,this.length);var i=this[t]|this[t+1]<<8;return i&32768?i|4294901760:i},l.prototype.readInt16BE=function(t,n){t=t>>>0,n||R(t,2,this.length);var i=this[t+1]|this[t]<<8;return i&32768?i|4294901760:i},l.prototype.readInt32LE=function(t,n){return t=t>>>0,n||R(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},l.prototype.readInt32BE=function(t,n){return t=t>>>0,n||R(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},l.prototype.readFloatLE=function(t,n){return t=t>>>0,n||R(t,4,this.length),r.read(this,t,!0,23,4)},l.prototype.readFloatBE=function(t,n){return t=t>>>0,n||R(t,4,this.length),r.read(this,t,!1,23,4)},l.prototype.readDoubleLE=function(t,n){return t=t>>>0,n||R(t,8,this.length),r.read(this,t,!0,52,8)},l.prototype.readDoubleBE=function(t,n){return t=t>>>0,n||R(t,8,this.length),r.read(this,t,!1,52,8)};function V(t,n,i,f,d,h){if(!l.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(n>d||n<h)throw new RangeError('"value" argument is out of bounds');if(i+f>t.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(t,n,i,f){if(t=+t,n=n>>>0,i=i>>>0,!f){var d=Math.pow(2,8*i)-1;V(this,t,n,i,d,0)}var h=1,E=0;for(this[n]=t&255;++E<i&&(h*=256);)this[n+E]=t/h&255;return n+i},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(t,n,i,f){if(t=+t,n=n>>>0,i=i>>>0,!f){var d=Math.pow(2,8*i)-1;V(this,t,n,i,d,0)}var h=i-1,E=1;for(this[n+h]=t&255;--h>=0&&(E*=256);)this[n+h]=t/E&255;return n+i},l.prototype.writeUint8=l.prototype.writeUInt8=function(t,n,i){return t=+t,n=n>>>0,i||V(this,t,n,1,255,0),this[n]=t&255,n+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(t,n,i){return t=+t,n=n>>>0,i||V(this,t,n,2,65535,0),this[n]=t&255,this[n+1]=t>>>8,n+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(t,n,i){return t=+t,n=n>>>0,i||V(this,t,n,2,65535,0),this[n]=t>>>8,this[n+1]=t&255,n+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(t,n,i){return t=+t,n=n>>>0,i||V(this,t,n,4,4294967295,0),this[n+3]=t>>>24,this[n+2]=t>>>16,this[n+1]=t>>>8,this[n]=t&255,n+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(t,n,i){return t=+t,n=n>>>0,i||V(this,t,n,4,4294967295,0),this[n]=t>>>24,this[n+1]=t>>>16,this[n+2]=t>>>8,this[n+3]=t&255,n+4},l.prototype.writeIntLE=function(t,n,i,f){if(t=+t,n=n>>>0,!f){var d=Math.pow(2,8*i-1);V(this,t,n,i,d-1,-d)}var h=0,E=1,C=0;for(this[n]=t&255;++h<i&&(E*=256);)t<0&&C===0&&this[n+h-1]!==0&&(C=1),this[n+h]=(t/E>>0)-C&255;return n+i},l.prototype.writeIntBE=function(t,n,i,f){if(t=+t,n=n>>>0,!f){var d=Math.pow(2,8*i-1);V(this,t,n,i,d-1,-d)}var h=i-1,E=1,C=0;for(this[n+h]=t&255;--h>=0&&(E*=256);)t<0&&C===0&&this[n+h+1]!==0&&(C=1),this[n+h]=(t/E>>0)-C&255;return n+i},l.prototype.writeInt8=function(t,n,i){return t=+t,n=n>>>0,i||V(this,t,n,1,127,-128),t<0&&(t=255+t+1),this[n]=t&255,n+1},l.prototype.writeInt16LE=function(t,n,i){return t=+t,n=n>>>0,i||V(this,t,n,2,32767,-32768),this[n]=t&255,this[n+1]=t>>>8,n+2},l.prototype.writeInt16BE=function(t,n,i){return t=+t,n=n>>>0,i||V(this,t,n,2,32767,-32768),this[n]=t>>>8,this[n+1]=t&255,n+2},l.prototype.writeInt32LE=function(t,n,i){return t=+t,n=n>>>0,i||V(this,t,n,4,2147483647,-2147483648),this[n]=t&255,this[n+1]=t>>>8,this[n+2]=t>>>16,this[n+3]=t>>>24,n+4},l.prototype.writeInt32BE=function(t,n,i){return t=+t,n=n>>>0,i||V(this,t,n,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[n]=t>>>24,this[n+1]=t>>>16,this[n+2]=t>>>8,this[n+3]=t&255,n+4};function Ur(t,n,i,f,d,h){if(i+f>t.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function Lr(t,n,i,f,d){return n=+n,i=i>>>0,d||Ur(t,n,i,4,34028234663852886e22,-34028234663852886e22),r.write(t,n,i,f,23,4),i+4}l.prototype.writeFloatLE=function(t,n,i){return Lr(this,t,n,!0,i)},l.prototype.writeFloatBE=function(t,n,i){return Lr(this,t,n,!1,i)};function Sr(t,n,i,f,d){return n=+n,i=i>>>0,d||Ur(t,n,i,8,17976931348623157e292,-17976931348623157e292),r.write(t,n,i,f,52,8),i+8}l.prototype.writeDoubleLE=function(t,n,i){return Sr(this,t,n,!0,i)},l.prototype.writeDoubleBE=function(t,n,i){return Sr(this,t,n,!1,i)},l.prototype.copy=function(t,n,i,f){if(!l.isBuffer(t))throw new TypeError("argument should be a Buffer");if(i||(i=0),!f&&f!==0&&(f=this.length),n>=t.length&&(n=t.length),n||(n=0),f>0&&f<i&&(f=i),f===i||t.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(f<0)throw new RangeError("sourceEnd out of bounds");f>this.length&&(f=this.length),t.length-n<f-i&&(f=t.length-n+i);var d=f-i;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,i,f):Uint8Array.prototype.set.call(t,this.subarray(i,f),n),d},l.prototype.fill=function(t,n,i,f){if(typeof t=="string"){if(typeof n=="string"?(f=n,n=0,i=this.length):typeof i=="string"&&(f=i,i=this.length),f!==void 0&&typeof f!="string")throw new TypeError("encoding must be a string");if(typeof f=="string"&&!l.isEncoding(f))throw new TypeError("Unknown encoding: "+f);if(t.length===1){var d=t.charCodeAt(0);(f==="utf8"&&d<128||f==="latin1")&&(t=d)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(n<0||this.length<n||this.length<i)throw new RangeError("Out of range index");if(i<=n)return this;n=n>>>0,i=i===void 0?this.length:i>>>0,t||(t=0);var h;if(typeof t=="number")for(h=n;h<i;++h)this[h]=t;else{var E=l.isBuffer(t)?t:l.from(t,f),C=E.length;if(C===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(h=0;h<i-n;++h)this[h+n]=E[h%C]}return this};var St=/[^+/0-9A-Za-z-_]/g;function Nt(t){if(t=t.split("=")[0],t=t.trim().replace(St,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function ar(t,n){n=n||1/0;for(var i,f=t.length,d=null,h=[],E=0;E<f;++E){if(i=t.charCodeAt(E),i>55295&&i<57344){if(!d){if(i>56319){(n-=3)>-1&&h.push(239,191,189);continue}else if(E+1===f){(n-=3)>-1&&h.push(239,191,189);continue}d=i;continue}if(i<56320){(n-=3)>-1&&h.push(239,191,189),d=i;continue}i=(d-55296<<10|i-56320)+65536}else d&&(n-=3)>-1&&h.push(239,191,189);if(d=null,i<128){if((n-=1)<0)break;h.push(i)}else if(i<2048){if((n-=2)<0)break;h.push(i>>6|192,i&63|128)}else if(i<65536){if((n-=3)<0)break;h.push(i>>12|224,i>>6&63|128,i&63|128)}else if(i<1114112){if((n-=4)<0)break;h.push(i>>18|240,i>>12&63|128,i>>6&63|128,i&63|128)}else throw new Error("Invalid code point")}return h}function Dt(t){for(var n=[],i=0;i<t.length;++i)n.push(t.charCodeAt(i)&255);return n}function Rt(t,n){for(var i,f,d,h=[],E=0;E<t.length&&!((n-=2)<0);++E)i=t.charCodeAt(E),f=i>>8,d=i%256,h.push(d),h.push(f);return h}function Nr(t){return e.toByteArray(Nt(t))}function Ue(t,n,i,f){for(var d=0;d<f&&!(d+i>=n.length||d>=t.length);++d)n[d+i]=t[d];return d}function J(t,n){return t instanceof n||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===n.name}function ir(t){return t!==t}var Mt=function(){for(var t="0123456789abcdef",n=new Array(256),i=0;i<16;++i)for(var f=i*16,d=0;d<16;++d)n[f+d]=t[i]+t[d];return n}()}),Lo=$e((o,e)=>{s();var r=e.exports={},a,p;function u(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=u}catch(A){a=u}try{typeof clearTimeout=="function"?p=clearTimeout:p=c}catch(A){p=c}})();function l(A){if(a===setTimeout)return setTimeout(A,0);if((a===u||!a)&&setTimeout)return a=setTimeout,setTimeout(A,0);try{return a(A,0)}catch(I){try{return a.call(null,A,0)}catch(q){return a.call(this,A,0)}}}function _(A){if(p===clearTimeout)return clearTimeout(A);if((p===c||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(A);try{return p(A)}catch(I){try{return p.call(null,A)}catch(q){return p.call(this,A)}}}var g=[],y=!1,b,T=-1;function B(){!y||!b||(y=!1,b.length?g=b.concat(g):T=-1,g.length&&v())}function v(){if(!y){var A=l(B);y=!0;for(var I=g.length;I;){for(b=g,g=[];++T<I;)b&&b[T].run();T=-1,I=g.length}b=null,y=!1,_(A)}}r.nextTick=function(A){var I=new Array(arguments.length-1);if(arguments.length>1)for(var q=1;q<arguments.length;q++)I[q-1]=arguments[q];g.push(new x(A,I)),g.length===1&&!y&&l(v)};function x(A,I){this.fun=A,this.array=I}x.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function k(){}r.on=k,r.addListener=k,r.once=k,r.off=k,r.removeListener=k,r.removeAllListeners=k,r.emit=k,r.prependListener=k,r.prependOnceListener=k,r.listeners=function(A){return[]},r.binding=function(A){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(A){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),xt,So,No,s=qr(()=>{xt=w(Uo()),So=w(Lo()),No=function(o){function e(){var a=this||self;return delete o.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object)}),Cr={};Ir(Cr,{default:()=>Et});var Pe,pt,Et,At=qr(()=>{"use strict";s(),Pe=w(require("react")),pt=o=>Pe.createElement("svg",Br({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},o),Pe.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Pe.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Et=pt}),kt={};Ir(kt,{default:()=>Tt});var ze,lt,Tt,Do=qr(()=>{"use strict";s(),ze=w(require("react")),lt=o=>ze.createElement("svg",Br({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},o),ze.createElement("g",null,ze.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Tt=lt}),Bt={};Ir(Bt,{TransactionSummary:()=>$n});Ut.exports=He(Bt);s();s();var j=w(require("react")),Ro=require("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");s();var Mo=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Mo));var X={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};s();s();var ta=w(require("react")),oa=require("@terradharitri/sdk-dapp/constants/index");s();s();s();var na=w(require("axios"));s();s();s();var aa=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");s();var ia=require("@terradharitri/sdk-dapp/constants/index");s();s();s();var Ze="0";s();s();s();var pa=w(require("axios"));s();s();var la=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),ua=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),ca=w(require("axios")),fa=w(require("lodash/uniqBy"));s();var sa=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),da=w(require("axios"));s();s();s();var We=require("@terradharitri/sdk-dapp/types/tokens.types");s();s();s();s();var ma=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),ha=w(require("axios"));s();s();var _a=w(require("axios"));s();var Oo=w(require("react")),ba=(0,Oo.createContext)({});s();s();var Po=w(require("react")),ga=require("@terradharitri/sdk-dapp/constants/index"),ya=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),va=w(require("bignumber.js")),wa=require("formik");s();s();s();var xa=require("bech32");s();s();s();s();s();s();var Ea=require("@terradharitri/sdk-dapp/constants"),Aa=require("@terradharitri/sdk-dapp/utils/account/getAccount");s();s();var ut=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),zo=({nft:o,skipDescription:e})=>{var r,a;let{name:p,metadata:u,media:c,isNsfw:l,scamInfo:_,verified:g}=o,y="Scam - ",{isSuspicious:b,message:T}=(0,ut.getScamFlag)({verified:g,message:p,isNsfw:l,scamInfo:_,messagePrefix:y});if(!(u!=null&&u.description)||e){let A=b?"placeholder":(r=c==null?void 0:c[0])==null?void 0:r.thumbnailUrl;return{isSuspicious:b,name:p||T,thumbnail:A,description:""}}let{message:B,isSuspicious:v}=(0,ut.getScamFlag)({message:u.description,messagePrefix:y,verified:g}),x=b||v,k=x?"placeholder":(a=c==null?void 0:c[0])==null?void 0:a.thumbnailUrl;return{isSuspicious:x,name:p||T,thumbnail:k,description:B||u.description}};s();var ka=require("@terradharitri/sdk-dapp/utils/buildUrlParams");s();var vr=w(require("anchorme")),wr=o=>o.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Wo=(o,e)=>{if(e){let r=`[Message hidden due to suspicious content - ${e.info}]`;if(o.length>1e3)return{output:r,stringWithLinks:o,found:!0};let a=wr(o.normalize("NFKC")),p=vr.default.list(a),u=[];if(p.length>0){let c=r;p.forEach((l,_)=>{let{string:g}=l,y="",b="",T=g;for(let B=0;B<c.length;B++){let v=c.slice(B),[x]=vr.default.list(wr(v));x&&g===x.string&&(y=c.substring(0,B))}for(let B=r.length;B>0;B--){let v=c.slice(0,B),[x]=vr.default.list(wr(v));x&&g===x.string&&(b=c.substring(B))}u.push(y),u.push(T),c=b,_===p.length-1&&u.push(b)})}else u.push(o);return{output:r,stringWithLinks:u.join(""),found:!0}}else return{output:o,stringWithLinks:"",found:!1}};s();s();var Ta=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),qt=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),jo=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),ct=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");s();s();var It=w(require("react")),Ba=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),qa=require("formik");s();s();var Ia=require("@terradharitri/sdk-dapp/constants/index"),Ca=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Fa=w(require("bignumber.js"));s();s();var xr=require("@terradharitri/sdk-dapp/constants/index");function Vo({feeLimit:o,rewaPriceInUsd:e}){let r=(0,qt.formatAmount)({input:o,decimals:xr.DECIMALS,digits:xr.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,jo.getUsdValue)({amount:r,usd:e,decimals:xr.DIGITS})}`}s();var Ua=require("@terradharitri/sdk-dapp/constants/index");s();var La=require("@terradharitri/sdk-dapp/constants/index"),Sa=w(require("bignumber.js"));s();var Na=require("@terradharitri/sdk-dapp/constants/index");s();var Da=require("@terradharitri/sdk-dapp/constants/index");s();s();var Ra=require("@terradharitri/sdk-core"),Ma=require("@terradharitri/sdk-dapp/constants/index"),Oa=w(require("bignumber.js"));s();s();var Pa=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");s();var za=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");s();var Wa=w(require("bignumber.js"));s();var ja=require("@terradharitri/sdk-dapp/constants/index"),Va=require("@terradharitri/sdk-dapp/utils/smartContracts"),Ga=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ya=w(require("bignumber.js"));s();var Za=w(require("bignumber.js"));s();var Er=require("@terradharitri/sdk-dapp/constants/index"),Go=w(require("bignumber.js")),ft,st,dt,Yo=(0,qt.formatAmount)({input:String((ft=Er.GAS_PRICE)!=null?ft:1e9),decimals:(st=Er.DECIMALS)!=null?st:18,showLastNonZeroDecimal:!0,digits:(dt=Er.DIGITS)!=null?dt:4}),$a=new Go.default(Yo).times(10).toString(10);s();var Ha=require("@terradharitri/sdk-dapp/constants/index"),Xa=w(require("bignumber.js"));s();var Ja=w(require("bignumber.js"));s();s();var Ka=require("yup");s();var mt=require("@terradharitri/sdk-dapp/constants/ledger.constants"),Zo=w(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Fr=require("yup"),$o=(0,Fr.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(o){let{ledger:e}=this.parent;return!(e&&o&&o.length&&!e.ledgerDataActive)}),Ho=(0,Fr.string)().test({name:"hashSign",test:function(o){let{ledger:e,isGuarded:r}=this.parent;if(e){let{ledgerWithHashSign:a,ledgerWithGuardians:p}=(0,Zo.default)(e.version);if(o&&o.length>300&&!a)return this.createError({message:`Data too long. You need at least DharitrI app version ${mt.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(r&&!p)return this.createError({message:`You need at least DharitrI app version ${mt.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Xo=[$o,Ho],Qa=Xo.reduce((o,e)=>o.concat(e),(0,Fr.string)());s();var ei=require("@terradharitri/sdk-dapp/constants/index"),ri=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ti=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),oi=require("yup");s();var ni=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ai=w(require("bignumber.js")),ii=require("yup");s();var pi=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),li=w(require("bignumber.js")),ui=require("yup");s();var ci=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),fi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),si=w(require("bignumber.js")),di=require("yup");s();var mi=w(require("bignumber.js")),hi=require("yup");s();var _i=require("@terradharitri/sdk-dapp/constants/index"),bi=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),gi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),yi=w(require("bignumber.js")),vi=require("yup");s();var wi=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),xi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ei=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ai=w(require("bignumber.js")),ki=require("yup");s();var Ti=w(require("bignumber.js")),Bi=require("yup");s();var qi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ii=require("yup");s();var Ci=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Fi=require("yup");s();s();var Jo=(0,It.createContext)({});function Ko(){return(0,It.useContext)(Jo)}s();s();var Qo=w(require("react")),Ui=require("formik"),Li=w(require("lodash/uniqBy"));s();s();var en=w(require("react")),Si=(0,en.createContext)({});s();s();var Ni=require("react"),Di=require("@terradharitri/sdk-dapp/constants/index"),Ri=require("@terradharitri/sdk-dapp/types/enums.types");s();var Mi=(0,Qo.createContext)({});s();s();var Oi=require("@terradharitri/sdk-dapp/constants/index"),Pi=require("formik");s();s();var rn=w(require("react")),zi=require("@terradharitri/sdk-dapp/constants/index"),Wi=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ji=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Vi=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Gi=w(require("bignumber.js")),Yi=require("formik");s();s();s();s();var Zi=w(require("bignumber.js"));s();var $i=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Hi=w(require("bignumber.js"));s();s();var Xi=require("react"),Ji=require("@terradharitri/sdk-dapp/constants/index"),Ki=require("@terradharitri/sdk-dapp/utils/smartContracts"),Qi=w(require("bignumber.js")),ep=require("formik");s();var rp=require("react");s();s();var tp=require("@terradharitri/sdk-dapp/constants/index"),op=w(require("bignumber.js")),np=(0,rn.createContext)({}),ap=(0,Po.createContext)({});s();s();var tn=w(require("react")),ip=require("formik"),pp=(0,tn.createContext)({});s();s();var on=w(require("react")),lp=require("formik");s();s();s();var up=require("react"),cp=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),fp=w(require("lodash/uniqBy"));s();s();var sp=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),dp=require("@terradharitri/sdk-dapp/utils");s();var mp=require("react");s();var hp=require("react"),_p=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),bp=(0,on.createContext)({});s();s();var nn=w(require("react")),gp=require("formik");s();s();s();s();s();var yp=require("react"),vp=require("@terradharitri/sdk-dapp/utils");s();var wp=require("react"),xp=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");s();s();var Ep=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ap=w(require("axios"));s();var kp=w(require("axios")),Tp=(0,nn.createContext)({});s();var Ct=w(require("react")),an=(0,Ct.createContext)({});function pn(){return(0,Ct.useContext)(an)}s();var ln=require("react");s();s();var pe=w(require("react")),ht=require("@terradharitri/sdk-dapp/constants/index"),_t=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),un=require("@terradharitri/sdk-dapp/UI/UsdValue/index");s();s();var ie=w(require("react")),cn=require("@fortawesome/free-solid-svg-icons"),fn=require("@fortawesome/react-fontawesome"),bt=w(require("classnames"));s();var sn=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sn));var se={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"},dn=(At(),He(Cr)).default,Ft=o=>{let{avatar:e,type:r}=o;return r==="NonFungibleDCDT"?ie.default.createElement("div",{className:(0,bt.default)(se.tokenAvatar,se.tokenAvatarNFT)},"NFT"):r==="SemiFungibleDCDT"?ie.default.createElement("div",{className:(0,bt.default)(se.tokenAvatar,se.tokenAvatarSFT)},"SFT"):r==="REWA"?ie.default.createElement("div",{className:se.tokenAvatar},o.RewaIcon?ie.default.createElement(o.RewaIcon,null):ie.default.createElement(dn,null)):e?ie.default.createElement("div",{className:se.tokenAvatar},ie.default.createElement("img",{src:e})):ie.default.createElement("div",{className:se.tokenAvatar},ie.default.createElement(fn.FontAwesomeIcon,{icon:cn.faDiamond}))};s();var mn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(mn));var je={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},hn=({label:o="Amount",amount:e,txType:r,tokenDecimals:a,tokenId:p,rewaLabel:u,rewaPriceInUsd:c,nft:l,tokenAvatar:_})=>{let g=(l==null?void 0:l.decimals)||0,y=r==="DCDT",b=r==="MetaDCDT",T=r==="NonFungibleDCDT",B=b?(0,ct.parseAmount)(e,l==null?void 0:l.decimals):e,v=Boolean(l&&e),x=p.split("-")[0],k=y?a:ht.DECIMALS,A=v?pe.default.createElement(_t.FormatAmount,{rewaLabel:u,value:B,decimals:g,digits:r==="MetaDCDT"?ht.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):pe.default.createElement(_t.FormatAmount,{rewaLabel:u,value:(0,ct.parseAmount)(e,k),showLabel:!1,decimals:k,showLastNonZeroDecimal:!0,token:y?x:u,"data-testid":"confirmAmount"});return T?null:pe.default.createElement("div",{className:je.amount},pe.default.createElement("span",{className:X.label},o),pe.default.createElement("div",{className:je.token},pe.default.createElement(Ft,{type:r,avatar:_}),pe.default.createElement("div",{className:je.value},A," ",x)),!y&&pe.default.createElement(un.UsdValue,{amount:e,usd:c,"data-testid":"confirmUsdValue",className:je.price}))};s();s();var S=w(require("react")),_n=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");s();var bn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bn));var Ve={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"},gn=(o,e)=>[...o.matchAll(new RegExp(e,"gi"))].map(r=>r.index),yn=({label:o="Data",scCallLabel:e="SC Call",data:r,highlight:a,isScCall:p})=>{let u=S.default.createElement(S.default.Fragment,null,r),[c,...l]=a&&p?a.split("@"):[];if(r&&a&&gn(r,a).length===1)switch(!0){case r.startsWith(a):{let[,_]=r.split(a);u=S.default.createElement(S.default.Fragment,null,a,S.default.createElement("span",null,_));break}case r.endsWith(a):{let[_]=r.split(a);u=S.default.createElement(S.default.Fragment,null,S.default.createElement("span",null,_),a);break}default:{let[_,g]=r.split(a);u=S.default.createElement(S.default.Fragment,null,S.default.createElement("span",null,_),a,S.default.createElement("span",null,g));break}}return S.default.createElement(S.default.Fragment,null,c&&S.default.createElement("div",{className:Ve.data},S.default.createElement("span",{className:X.label},e),S.default.createElement("div",{"data-testid":"confirmScCall",className:Ve.value},[(0,_n.decodePart)(c),...l].join("@"))),S.default.createElement("div",{className:Ve.data},S.default.createElement("span",{className:X.label},o),S.default.createElement("div",{"data-testid":"confirmData",className:Ve.value},r?u:"N/A")))};s();s();var de=w(require("react")),vn=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");s();var wn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wn));var Ge={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},xn=({rewaPriceInUsd:o,label:e="Fee",feeLimit:r,rewaLabel:a})=>de.default.createElement("div",{className:Ge.fee},de.default.createElement("span",{className:X.label},e),de.default.createElement("div",{className:Ge.token},de.default.createElement(Ft,{type:"REWA"}),de.default.createElement("div",{className:Ge.value},de.default.createElement(vn.FormatAmount,{rewaLabel:a,value:r,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),r!==Ze&&de.default.createElement("span",{className:Ge.price},Vo({feeLimit:r,rewaPriceInUsd:o})));s();s();var $=w(require("react")),En=require("@fortawesome/free-solid-svg-icons"),An=require("@fortawesome/react-fontawesome"),kn=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Tn=require("@terradharitri/sdk-dapp/UI/CopyButton"),Bn=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),qn=require("@terradharitri/sdk-dapp/UI/Trim"),In=w(require("classnames"));s();var{default:Cn}=(Do(),He(kt));s();var Fn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fn));var te={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"},Un=({label:o="Receiver",receiver:e,scamReport:r,receiverUsername:a})=>{let p=Boolean(a),u=a!=null?a:e;return $.default.createElement("div",{className:te.confirmReceiver},$.default.createElement("span",{className:X.label},o),$.default.createElement("span",{className:(0,In.default)(te.value,{[te.shrunk]:p}),"data-testid":"confirmReceiver"},p&&$.default.createElement(Cn,{className:te.icon}),u,p&&$.default.createElement(Bn.ExplorerLink,{page:`/${kn.ACCOUNTS_ENDPOINT}/${e}`,className:te.explorer})),p&&$.default.createElement("span",{className:te.subValue},$.default.createElement(qn.Trim,{text:e,className:te.subValueTrim}),$.default.createElement(Tn.CopyButton,{text:e,className:te.subValueCopy})),r&&$.default.createElement("div",{className:te.scam},$.default.createElement("span",null,$.default.createElement(An.FontAwesomeIcon,{icon:En.faExclamationTriangle,className:te.icon}),$.default.createElement("small",{"data-testid":"confirmScamReport"},r))))};s();s();var me=w(require("react"));s();s();var z=w(require("react")),Ln=require("@fortawesome/free-solid-svg-icons"),Sn=require("@fortawesome/react-fontawesome"),Nn=w(require("@terradharitri/sdk-dapp/constants/index")),Dn=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Rn=w(require("classnames"));s();var Mn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Mn));var we={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},On=(At(),He(Cr)).default,gt=({RewaIcon:o,inDropdown:e=!1,isRewa:r,nftTokenDetails:a,nftType:p,token:u})=>{var c,l;let{name:_,identifier:g,balance:y,decimals:b}=u,T=((c=u.assets)==null?void 0:c.svgUrl)||((l=u.assets)==null?void 0:l.pngUrl)||"",B=T?28:20,[v,x]=(0,z.useState)(_);(0,z.useEffect)(()=>{var q;(q=a==null?void 0:a.uris)!=null&&q.some(N=>{let O=xt.Buffer.from(String(N),"base64").toString(),{found:D}=Wo(O,a==null?void 0:a.scamInfo);return D})||x(_)},[_]);let k=z.default.createElement(Sn.FontAwesomeIcon,{icon:Ln.faDiamond});p==We.NftEnumType.NonFungibleDCDT&&(k=z.default.createElement("div",{className:"nft-type","data-testid":`${g}-type-nft`},"NFT")),p===We.NftEnumType.SemiFungibleDCDT&&(k=z.default.createElement("div",{className:"nft-type","data-testid":`${g}-type-sft`},"SFT"));let A=!e&&p!==We.NftEnumType.NonFungibleDCDT,I=z.default.createElement("div",{className:we.tokenElementCircle},k);return T&&(I=z.default.createElement("img",{className:we.tokenElementCircle,src:T,alt:_,height:B})),r&&(I=z.default.createElement("div",{className:we.tokenElementCircle},o?z.default.createElement(o,{height:36}):z.default.createElement(On,{height:36}))),z.default.createElement("div",{className:(0,Rn.default)(X.value,we.tokenElement)},z.default.createElement("div",{className:we.tokenElementWrapper},I),z.default.createElement("div",{"data-testid":"tokenName"},z.default.createElement("span",{"data-testid":`${g}-element`},z.default.createElement("span",null,v)," ",z.default.createElement("span",{className:we.tokenElementIdentifier},g)),A&&z.default.createElement(Dn.FormatAmount,{rewaLabel:g,value:y||Ze,digits:p===We.NftEnumType.SemiFungibleDCDT?0:Nn.DIGITS,token:g,showLabel:!1,decimals:b,"data-testid":`${g}-balance`})))};s();var Pn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pn));var zn={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"},Wn=({RewaIcon:o,rewaLabel:e,isDcdtTransaction:r,nft:a,tokenAvatar:p,tokenId:u,tokenIdError:c})=>{var l;let _=(a==null?void 0:a.name)||"";return me.default.createElement("div",{className:zn.token},me.default.createElement("span",{className:X.label},a?me.default.createElement("span",null,a==null?void 0:a.name," "):"","Token"),me.default.createElement("div",null,a?me.default.createElement(gt,{inDropdown:!0,token:{name:a==null?void 0:a.name,identifier:a==null?void 0:a.identifier,decimals:0,balance:Ze,ticker:"",assets:{svgUrl:((l=a==null?void 0:a.assets)==null?void 0:l.svgUrl)||""}}}):me.default.createElement(gt,{inDropdown:!0,token:{name:r?_:"DharitrI eGold",identifier:r?u:e,decimals:0,balance:Ze,ticker:"",assets:{svgUrl:p||""}},isRewa:u===e,RewaIcon:o})),c&&me.default.createElement("div",{className:X.error},c))},Ee=class extends ln.Component{render(){return null}};Ee.Receiver=Un,Ee.Amount=hn,Ee.Fee=xn,Ee.Data=yn,Ee.Token=Wn;var Ar=Ee;s();s();var le=w(require("react")),yt=w(require("classnames"));s();var jn=`.dapp-core-component__styles-module__preview {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jn));var H={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"},Vn=o=>{let e=o,{txType:r,onClick:a,identifier:p}=e,u=Io(e,["txType","onClick","identifier"]),{name:c,thumbnail:l}=zo({nft:u}),_=["NonFungibleDCDT","SemiFungibleDCDT"].includes(r),g=r==="NonFungibleDCDT"?"NFT":"SFT",y=b=>{b.preventDefault(),a&&a(b,Object.assign(u,{identifier:p}))};return _?le.default.createElement("div",{onClick:y,"data-testid":"token-preview",className:(0,yt.default)(H.preview,{[H.clickable]:Boolean(a)})},le.default.createElement("img",{src:l,className:H.image}),le.default.createElement("div",{className:H.content},le.default.createElement("div",{className:H.left},le.default.createElement("div",{"data-testid":"token-preview-name",className:H.name},c),le.default.createElement("div",{"data-testid":"token-preview-identifier",className:H.identifier},p)),le.default.createElement("div",{className:H.right},le.default.createElement("div",{className:(0,yt.default)(H.badge,{[H.nft]:r==="NonFungibleDCDT",[H.sft]:r==="SemiFungibleDCDT"})},g)))):null};s();var Gn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gn));var xe={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};s();s();var kr=require("@terradharitri/sdk-dapp/types/enums.types"),Yn=({providerType:o,hasGuardianScreen:e})=>e?"Confirm & Continue":o===kr.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":o===kr.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":o===kr.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";s();var Zn=({receiverAddress:o,knownAddresses:e,existingReceiverUsername:r})=>{if(r)return r;let a=e==null?void 0:e.find(p=>p.address===o);return a==null?void 0:a.username},$n=({isConfirmCloseBtnVisible:o=!0,providerType:e})=>{var r;let{setIsGuardianScreenVisible:a}=Ko(),{receiverUsernameInfo:{receiverUsername:p},receiverInfo:{scamError:u,receiver:c,knownAddresses:l},formInfo:_,gasInfo:{gasCostError:g,feeLimit:y},accountInfo:{isGuarded:b},dataFieldInfo:{data:T},amountInfo:B,tokensInfo:v}=pn(),{tokenId:x,tokenDetails:k,nft:A,rewaPriceInUsd:I,rewaLabel:q}=v,{readonly:N,onCloseForm:O,onInvalidateForm:D,onPreviewClick:qe,onSubmitForm:Xe,txType:he,hasGuardianScreen:Ie}=_,Je=()=>{a(!0)},[Ke,Qe]=(0,j.useState)(!1),Ce=he==="NonFungibleDCDT",Fe=Yn({providerType:e,hasGuardianScreen:Ie}),er=nr=>{nr.preventDefault(),N?O():D()},rr=()=>{if(b&&Ie)return Je();Qe(!0),Xe()},tr=!["REWA","DCDT","MetaDCDT"].includes(he),or=Zn({knownAddresses:l,receiverAddress:c,existingReceiverUsername:p});return j.default.createElement("div",{className:xe.summary},j.default.createElement("div",{className:xe.fields},tr&&A&&j.default.createElement(Vn,Br({onClick:qe,txType:he},A)),j.default.createElement(Ro.ConfirmReceiver,{amount:B.amount,scamReport:u!=null?u:null,receiver:c,receiverUsername:or}),j.default.createElement("div",{className:xe.columns},!Ce&&j.default.createElement("div",{className:xe.column},j.default.createElement(Ar.Amount,{txType:he,tokenId:x,tokenDecimals:k.decimals,amount:String(B.amount),nft:A,rewaPriceInUsd:I,rewaLabel:q,tokenLabel:k.name,tokenAvatar:((r=k.assets)==null?void 0:r.svgUrl)||""})),j.default.createElement("div",{className:xe.column},j.default.createElement(Ar.Fee,{rewaLabel:q,rewaPriceInUsd:I,feeLimit:y}))),j.default.createElement(Ar.Data,{data:T}),g&&j.default.createElement("p",{className:X.error},g)),j.default.createElement("div",{className:xe.buttons},j.default.createElement("button",{className:X.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:Ke,onClick:rr},Fe),o&&j.default.createElement("button",{className:X.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:er},N?"Close":"Back")))};});var Be={};module.exports=Gt(Be);Y();Ne(Be,lr(Lt()),module.exports);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
