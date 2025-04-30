"use strict";var Ps=Object.create;var Pn=Object.defineProperty;var js=Object.getOwnPropertyDescriptor;var zs=Object.getOwnPropertyNames;var Ws=Object.getPrototypeOf,Vs=Object.prototype.hasOwnProperty;var Gs=(p,l)=>()=>(p&&(l=p(p=0)),l);var dt=(p,l)=>()=>(l||p((l={exports:{}}).exports,l),l.exports);var qr=(p,l,r,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let d of zs(l))!Vs.call(p,d)&&d!==r&&Pn(p,d,{get:()=>l[d],enumerable:!(i=js(l,d))||i.enumerable});return p},G=(p,l,r)=>(qr(p,l,"default"),r&&qr(r,l,"default")),xt=(p,l,r)=>(r=p!=null?Ps(Ws(p)):{},qr(l||!p||!p.__esModule?Pn(r,"default",{value:p,enumerable:!0}):r,p)),$s=p=>qr(Pn({},"__esModule",{value:!0}),p);var El=dt(Cr=>{"use strict";Se();Cr.byteLength=Hs;Cr.toByteArray=Xs;Cr.fromByteArray=Qs;var Ut=[],vt=[],Ys=typeof Uint8Array!="undefined"?Uint8Array:Array,jn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(So=0,wl=jn.length;So<wl;++So)Ut[So]=jn[So],vt[jn.charCodeAt(So)]=So;var So,wl;vt["-".charCodeAt(0)]=62;vt["_".charCodeAt(0)]=63;function xl(p){var l=p.length;if(l%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=p.indexOf("=");r===-1&&(r=l);var i=r===l?0:4-r%4;return[r,i]}function Hs(p){var l=xl(p),r=l[0],i=l[1];return(r+i)*3/4-i}function Zs(p,l,r){return(l+r)*3/4-r}function Xs(p){var l,r=xl(p),i=r[0],d=r[1],m=new Ys(Zs(p,i,d)),u=0,a=d>0?i-4:i,y;for(y=0;y<a;y+=4)l=vt[p.charCodeAt(y)]<<18|vt[p.charCodeAt(y+1)]<<12|vt[p.charCodeAt(y+2)]<<6|vt[p.charCodeAt(y+3)],m[u++]=l>>16&255,m[u++]=l>>8&255,m[u++]=l&255;return d===2&&(l=vt[p.charCodeAt(y)]<<2|vt[p.charCodeAt(y+1)]>>4,m[u++]=l&255),d===1&&(l=vt[p.charCodeAt(y)]<<10|vt[p.charCodeAt(y+1)]<<4|vt[p.charCodeAt(y+2)]>>2,m[u++]=l>>8&255,m[u++]=l&255),m}function Ks(p){return Ut[p>>18&63]+Ut[p>>12&63]+Ut[p>>6&63]+Ut[p&63]}function Js(p,l,r){for(var i,d=[],m=l;m<r;m+=3)i=(p[m]<<16&16711680)+(p[m+1]<<8&65280)+(p[m+2]&255),d.push(Ks(i));return d.join("")}function Qs(p){for(var l,r=p.length,i=r%3,d=[],m=16383,u=0,a=r-i;u<a;u+=m)d.push(Js(p,u,u+m>a?a:u+m));return i===1?(l=p[r-1],d.push(Ut[l>>2]+Ut[l<<4&63]+"==")):i===2&&(l=(p[r-2]<<8)+p[r-1],d.push(Ut[l>>10]+Ut[l>>4&63]+Ut[l<<2&63]+"=")),d.join("")}});var kl=dt(zn=>{Se();zn.read=function(p,l,r,i,d){var m,u,a=d*8-i-1,y=(1<<a)-1,_=y>>1,E=-7,b=r?d-1:0,x=r?-1:1,A=p[l+b];for(b+=x,m=A&(1<<-E)-1,A>>=-E,E+=a;E>0;m=m*256+p[l+b],b+=x,E-=8);for(u=m&(1<<-E)-1,m>>=-E,E+=i;E>0;u=u*256+p[l+b],b+=x,E-=8);if(m===0)m=1-_;else{if(m===y)return u?NaN:(A?-1:1)*(1/0);u=u+Math.pow(2,i),m=m-_}return(A?-1:1)*u*Math.pow(2,m-i)};zn.write=function(p,l,r,i,d,m){var u,a,y,_=m*8-d-1,E=(1<<_)-1,b=E>>1,x=d===23?Math.pow(2,-24)-Math.pow(2,-77):0,A=i?0:m-1,f=i?1:-1,g=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(a=isNaN(l)?1:0,u=E):(u=Math.floor(Math.log(l)/Math.LN2),l*(y=Math.pow(2,-u))<1&&(u--,y*=2),u+b>=1?l+=x/y:l+=x*Math.pow(2,1-b),l*y>=2&&(u++,y/=2),u+b>=E?(a=0,u=E):u+b>=1?(a=(l*y-1)*Math.pow(2,d),u=u+b):(a=l*Math.pow(2,b-1)*Math.pow(2,d),u=0));d>=8;p[r+A]=a&255,A+=f,a/=256,d-=8);for(u=u<<d|a,_+=d;_>0;p[r+A]=u&255,A+=f,u/=256,_-=8);p[r+A-f]|=g*128}});var Dl=dt(tr=>{"use strict";Se();var Wn=El(),er=kl(),Sl=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;tr.Buffer=W;tr.SlowBuffer=ad;tr.INSPECT_MAX_BYTES=50;var Nr=2147483647;tr.kMaxLength=Nr;W.TYPED_ARRAY_SUPPORT=ed();!W.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ed(){try{var p=new Uint8Array(1),l={foo:function(){return 42}};return Object.setPrototypeOf(l,Uint8Array.prototype),Object.setPrototypeOf(p,l),p.foo()===42}catch(r){return!1}}Object.defineProperty(W.prototype,"parent",{enumerable:!0,get:function(){if(!!W.isBuffer(this))return this.buffer}});Object.defineProperty(W.prototype,"offset",{enumerable:!0,get:function(){if(!!W.isBuffer(this))return this.byteOffset}});function Wt(p){if(p>Nr)throw new RangeError('The value "'+p+'" is invalid for option "size"');var l=new Uint8Array(p);return Object.setPrototypeOf(l,W.prototype),l}function W(p,l,r){if(typeof p=="number"){if(typeof l=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Yn(p)}return Il(p,l,r)}W.poolSize=8192;function Il(p,l,r){if(typeof p=="string")return od(p,l);if(ArrayBuffer.isView(p))return rd(p);if(p==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p);if(Rt(p,ArrayBuffer)||p&&Rt(p.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Rt(p,SharedArrayBuffer)||p&&Rt(p.buffer,SharedArrayBuffer)))return Gn(p,l,r);if(typeof p=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var i=p.valueOf&&p.valueOf();if(i!=null&&i!==p)return W.from(i,l,r);var d=nd(p);if(d)return d;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof p[Symbol.toPrimitive]=="function")return W.from(p[Symbol.toPrimitive]("string"),l,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p)}W.from=function(p,l,r){return Il(p,l,r)};Object.setPrototypeOf(W.prototype,Uint8Array.prototype);Object.setPrototypeOf(W,Uint8Array);function ql(p){if(typeof p!="number")throw new TypeError('"size" argument must be of type number');if(p<0)throw new RangeError('The value "'+p+'" is invalid for option "size"')}function td(p,l,r){return ql(p),p<=0?Wt(p):l!==void 0?typeof r=="string"?Wt(p).fill(l,r):Wt(p).fill(l):Wt(p)}W.alloc=function(p,l,r){return td(p,l,r)};function Yn(p){return ql(p),Wt(p<0?0:Hn(p)|0)}W.allocUnsafe=function(p){return Yn(p)};W.allocUnsafeSlow=function(p){return Yn(p)};function od(p,l){if((typeof l!="string"||l==="")&&(l="utf8"),!W.isEncoding(l))throw new TypeError("Unknown encoding: "+l);var r=Cl(p,l)|0,i=Wt(r),d=i.write(p,l);return d!==r&&(i=i.slice(0,d)),i}function Vn(p){for(var l=p.length<0?0:Hn(p.length)|0,r=Wt(l),i=0;i<l;i+=1)r[i]=p[i]&255;return r}function rd(p){if(Rt(p,Uint8Array)){var l=new Uint8Array(p);return Gn(l.buffer,l.byteOffset,l.byteLength)}return Vn(p)}function Gn(p,l,r){if(l<0||p.byteLength<l)throw new RangeError('"offset" is outside of buffer bounds');if(p.byteLength<l+(r||0))throw new RangeError('"length" is outside of buffer bounds');var i;return l===void 0&&r===void 0?i=new Uint8Array(p):r===void 0?i=new Uint8Array(p,l):i=new Uint8Array(p,l,r),Object.setPrototypeOf(i,W.prototype),i}function nd(p){if(W.isBuffer(p)){var l=Hn(p.length)|0,r=Wt(l);return r.length===0||p.copy(r,0,0,l),r}if(p.length!==void 0)return typeof p.length!="number"||Zn(p.length)?Wt(0):Vn(p);if(p.type==="Buffer"&&Array.isArray(p.data))return Vn(p.data)}function Hn(p){if(p>=Nr)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Nr.toString(16)+" bytes");return p|0}function ad(p){return+p!=p&&(p=0),W.alloc(+p)}W.isBuffer=function(l){return l!=null&&l._isBuffer===!0&&l!==W.prototype};W.compare=function(l,r){if(Rt(l,Uint8Array)&&(l=W.from(l,l.offset,l.byteLength)),Rt(r,Uint8Array)&&(r=W.from(r,r.offset,r.byteLength)),!W.isBuffer(l)||!W.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(l===r)return 0;for(var i=l.length,d=r.length,m=0,u=Math.min(i,d);m<u;++m)if(l[m]!==r[m]){i=l[m],d=r[m];break}return i<d?-1:d<i?1:0};W.isEncoding=function(l){switch(String(l).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};W.concat=function(l,r){if(!Array.isArray(l))throw new TypeError('"list" argument must be an Array of Buffers');if(l.length===0)return W.alloc(0);var i;if(r===void 0)for(r=0,i=0;i<l.length;++i)r+=l[i].length;var d=W.allocUnsafe(r),m=0;for(i=0;i<l.length;++i){var u=l[i];if(Rt(u,Uint8Array))m+u.length>d.length?W.from(u).copy(d,m):Uint8Array.prototype.set.call(d,u,m);else if(W.isBuffer(u))u.copy(d,m);else throw new TypeError('"list" argument must be an Array of Buffers');m+=u.length}return d};function Cl(p,l){if(W.isBuffer(p))return p.length;if(ArrayBuffer.isView(p)||Rt(p,ArrayBuffer))return p.byteLength;if(typeof p!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof p);var r=p.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&r===0)return 0;for(var d=!1;;)switch(l){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return $n(p).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return Ol(p).length;default:if(d)return i?-1:$n(p).length;l=(""+l).toLowerCase(),d=!0}}W.byteLength=Cl;function ld(p,l,r){var i=!1;if((l===void 0||l<0)&&(l=0),l>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,l>>>=0,r<=l))return"";for(p||(p="utf8");;)switch(p){case"hex":return hd(this,l,r);case"utf8":case"utf-8":return Bl(this,l,r);case"ascii":return fd(this,l,r);case"latin1":case"binary":return _d(this,l,r);case"base64":return ud(this,l,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gd(this,l,r);default:if(i)throw new TypeError("Unknown encoding: "+p);p=(p+"").toLowerCase(),i=!0}}W.prototype._isBuffer=!0;function Ao(p,l,r){var i=p[l];p[l]=p[r],p[r]=i}W.prototype.swap16=function(){var l=this.length;if(l%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<l;r+=2)Ao(this,r,r+1);return this};W.prototype.swap32=function(){var l=this.length;if(l%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<l;r+=4)Ao(this,r,r+3),Ao(this,r+1,r+2);return this};W.prototype.swap64=function(){var l=this.length;if(l%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<l;r+=8)Ao(this,r,r+7),Ao(this,r+1,r+6),Ao(this,r+2,r+5),Ao(this,r+3,r+4);return this};W.prototype.toString=function(){var l=this.length;return l===0?"":arguments.length===0?Bl(this,0,l):ld.apply(this,arguments)};W.prototype.toLocaleString=W.prototype.toString;W.prototype.equals=function(l){if(!W.isBuffer(l))throw new TypeError("Argument must be a Buffer");return this===l?!0:W.compare(this,l)===0};W.prototype.inspect=function(){var l="",r=tr.INSPECT_MAX_BYTES;return l=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(l+=" ... "),"<Buffer "+l+">"};Sl&&(W.prototype[Sl]=W.prototype.inspect);W.prototype.compare=function(l,r,i,d,m){if(Rt(l,Uint8Array)&&(l=W.from(l,l.offset,l.byteLength)),!W.isBuffer(l))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof l);if(r===void 0&&(r=0),i===void 0&&(i=l?l.length:0),d===void 0&&(d=0),m===void 0&&(m=this.length),r<0||i>l.length||d<0||m>this.length)throw new RangeError("out of range index");if(d>=m&&r>=i)return 0;if(d>=m)return-1;if(r>=i)return 1;if(r>>>=0,i>>>=0,d>>>=0,m>>>=0,this===l)return 0;for(var u=m-d,a=i-r,y=Math.min(u,a),_=this.slice(d,m),E=l.slice(r,i),b=0;b<y;++b)if(_[b]!==E[b]){u=_[b],a=E[b];break}return u<a?-1:a<u?1:0};function Nl(p,l,r,i,d){if(p.length===0)return-1;if(typeof r=="string"?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Zn(r)&&(r=d?0:p.length-1),r<0&&(r=p.length+r),r>=p.length){if(d)return-1;r=p.length-1}else if(r<0)if(d)r=0;else return-1;if(typeof l=="string"&&(l=W.from(l,i)),W.isBuffer(l))return l.length===0?-1:Al(p,l,r,i,d);if(typeof l=="number")return l=l&255,typeof Uint8Array.prototype.indexOf=="function"?d?Uint8Array.prototype.indexOf.call(p,l,r):Uint8Array.prototype.lastIndexOf.call(p,l,r):Al(p,[l],r,i,d);throw new TypeError("val must be string, number or Buffer")}function Al(p,l,r,i,d){var m=1,u=p.length,a=l.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(p.length<2||l.length<2)return-1;m=2,u/=2,a/=2,r/=2}function y(A,f){return m===1?A[f]:A.readUInt16BE(f*m)}var _;if(d){var E=-1;for(_=r;_<u;_++)if(y(p,_)===y(l,E===-1?0:_-E)){if(E===-1&&(E=_),_-E+1===a)return E*m}else E!==-1&&(_-=_-E),E=-1}else for(r+a>u&&(r=u-a),_=r;_>=0;_--){for(var b=!0,x=0;x<a;x++)if(y(p,_+x)!==y(l,x)){b=!1;break}if(b)return _}return-1}W.prototype.includes=function(l,r,i){return this.indexOf(l,r,i)!==-1};W.prototype.indexOf=function(l,r,i){return Nl(this,l,r,i,!0)};W.prototype.lastIndexOf=function(l,r,i){return Nl(this,l,r,i,!1)};function pd(p,l,r,i){r=Number(r)||0;var d=p.length-r;i?(i=Number(i),i>d&&(i=d)):i=d;var m=l.length;i>m/2&&(i=m/2);for(var u=0;u<i;++u){var a=parseInt(l.substr(u*2,2),16);if(Zn(a))return u;p[r+u]=a}return u}function cd(p,l,r,i){return Br($n(l,p.length-r),p,r,i)}function id(p,l,r,i){return Br(yd(l),p,r,i)}function sd(p,l,r,i){return Br(Ol(l),p,r,i)}function dd(p,l,r,i){return Br(wd(l,p.length-r),p,r,i)}W.prototype.write=function(l,r,i,d){if(r===void 0)d="utf8",i=this.length,r=0;else if(i===void 0&&typeof r=="string")d=r,i=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(i)?(i=i>>>0,d===void 0&&(d="utf8")):(d=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var m=this.length-r;if((i===void 0||i>m)&&(i=m),l.length>0&&(i<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");d||(d="utf8");for(var u=!1;;)switch(d){case"hex":return pd(this,l,r,i);case"utf8":case"utf-8":return cd(this,l,r,i);case"ascii":case"latin1":case"binary":return id(this,l,r,i);case"base64":return sd(this,l,r,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return dd(this,l,r,i);default:if(u)throw new TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase(),u=!0}};W.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ud(p,l,r){return l===0&&r===p.length?Wn.fromByteArray(p):Wn.fromByteArray(p.slice(l,r))}function Bl(p,l,r){r=Math.min(p.length,r);for(var i=[],d=l;d<r;){var m=p[d],u=null,a=m>239?4:m>223?3:m>191?2:1;if(d+a<=r){var y,_,E,b;switch(a){case 1:m<128&&(u=m);break;case 2:y=p[d+1],(y&192)===128&&(b=(m&31)<<6|y&63,b>127&&(u=b));break;case 3:y=p[d+1],_=p[d+2],(y&192)===128&&(_&192)===128&&(b=(m&15)<<12|(y&63)<<6|_&63,b>2047&&(b<55296||b>57343)&&(u=b));break;case 4:y=p[d+1],_=p[d+2],E=p[d+3],(y&192)===128&&(_&192)===128&&(E&192)===128&&(b=(m&15)<<18|(y&63)<<12|(_&63)<<6|E&63,b>65535&&b<1114112&&(u=b))}}u===null?(u=65533,a=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),d+=a}return md(i)}var Tl=4096;function md(p){var l=p.length;if(l<=Tl)return String.fromCharCode.apply(String,p);for(var r="",i=0;i<l;)r+=String.fromCharCode.apply(String,p.slice(i,i+=Tl));return r}function fd(p,l,r){var i="";r=Math.min(p.length,r);for(var d=l;d<r;++d)i+=String.fromCharCode(p[d]&127);return i}function _d(p,l,r){var i="";r=Math.min(p.length,r);for(var d=l;d<r;++d)i+=String.fromCharCode(p[d]);return i}function hd(p,l,r){var i=p.length;(!l||l<0)&&(l=0),(!r||r<0||r>i)&&(r=i);for(var d="",m=l;m<r;++m)d+=xd[p[m]];return d}function gd(p,l,r){for(var i=p.slice(l,r),d="",m=0;m<i.length-1;m+=2)d+=String.fromCharCode(i[m]+i[m+1]*256);return d}W.prototype.slice=function(l,r){var i=this.length;l=~~l,r=r===void 0?i:~~r,l<0?(l+=i,l<0&&(l=0)):l>i&&(l=i),r<0?(r+=i,r<0&&(r=0)):r>i&&(r=i),r<l&&(r=l);var d=this.subarray(l,r);return Object.setPrototypeOf(d,W.prototype),d};function Pe(p,l,r){if(p%1!==0||p<0)throw new RangeError("offset is not uint");if(p+l>r)throw new RangeError("Trying to access beyond buffer length")}W.prototype.readUintLE=W.prototype.readUIntLE=function(l,r,i){l=l>>>0,r=r>>>0,i||Pe(l,r,this.length);for(var d=this[l],m=1,u=0;++u<r&&(m*=256);)d+=this[l+u]*m;return d};W.prototype.readUintBE=W.prototype.readUIntBE=function(l,r,i){l=l>>>0,r=r>>>0,i||Pe(l,r,this.length);for(var d=this[l+--r],m=1;r>0&&(m*=256);)d+=this[l+--r]*m;return d};W.prototype.readUint8=W.prototype.readUInt8=function(l,r){return l=l>>>0,r||Pe(l,1,this.length),this[l]};W.prototype.readUint16LE=W.prototype.readUInt16LE=function(l,r){return l=l>>>0,r||Pe(l,2,this.length),this[l]|this[l+1]<<8};W.prototype.readUint16BE=W.prototype.readUInt16BE=function(l,r){return l=l>>>0,r||Pe(l,2,this.length),this[l]<<8|this[l+1]};W.prototype.readUint32LE=W.prototype.readUInt32LE=function(l,r){return l=l>>>0,r||Pe(l,4,this.length),(this[l]|this[l+1]<<8|this[l+2]<<16)+this[l+3]*16777216};W.prototype.readUint32BE=W.prototype.readUInt32BE=function(l,r){return l=l>>>0,r||Pe(l,4,this.length),this[l]*16777216+(this[l+1]<<16|this[l+2]<<8|this[l+3])};W.prototype.readIntLE=function(l,r,i){l=l>>>0,r=r>>>0,i||Pe(l,r,this.length);for(var d=this[l],m=1,u=0;++u<r&&(m*=256);)d+=this[l+u]*m;return m*=128,d>=m&&(d-=Math.pow(2,8*r)),d};W.prototype.readIntBE=function(l,r,i){l=l>>>0,r=r>>>0,i||Pe(l,r,this.length);for(var d=r,m=1,u=this[l+--d];d>0&&(m*=256);)u+=this[l+--d]*m;return m*=128,u>=m&&(u-=Math.pow(2,8*r)),u};W.prototype.readInt8=function(l,r){return l=l>>>0,r||Pe(l,1,this.length),this[l]&128?(255-this[l]+1)*-1:this[l]};W.prototype.readInt16LE=function(l,r){l=l>>>0,r||Pe(l,2,this.length);var i=this[l]|this[l+1]<<8;return i&32768?i|4294901760:i};W.prototype.readInt16BE=function(l,r){l=l>>>0,r||Pe(l,2,this.length);var i=this[l+1]|this[l]<<8;return i&32768?i|4294901760:i};W.prototype.readInt32LE=function(l,r){return l=l>>>0,r||Pe(l,4,this.length),this[l]|this[l+1]<<8|this[l+2]<<16|this[l+3]<<24};W.prototype.readInt32BE=function(l,r){return l=l>>>0,r||Pe(l,4,this.length),this[l]<<24|this[l+1]<<16|this[l+2]<<8|this[l+3]};W.prototype.readFloatLE=function(l,r){return l=l>>>0,r||Pe(l,4,this.length),er.read(this,l,!0,23,4)};W.prototype.readFloatBE=function(l,r){return l=l>>>0,r||Pe(l,4,this.length),er.read(this,l,!1,23,4)};W.prototype.readDoubleLE=function(l,r){return l=l>>>0,r||Pe(l,8,this.length),er.read(this,l,!0,52,8)};W.prototype.readDoubleBE=function(l,r){return l=l>>>0,r||Pe(l,8,this.length),er.read(this,l,!1,52,8)};function st(p,l,r,i,d,m){if(!W.isBuffer(p))throw new TypeError('"buffer" argument must be a Buffer instance');if(l>d||l<m)throw new RangeError('"value" argument is out of bounds');if(r+i>p.length)throw new RangeError("Index out of range")}W.prototype.writeUintLE=W.prototype.writeUIntLE=function(l,r,i,d){if(l=+l,r=r>>>0,i=i>>>0,!d){var m=Math.pow(2,8*i)-1;st(this,l,r,i,m,0)}var u=1,a=0;for(this[r]=l&255;++a<i&&(u*=256);)this[r+a]=l/u&255;return r+i};W.prototype.writeUintBE=W.prototype.writeUIntBE=function(l,r,i,d){if(l=+l,r=r>>>0,i=i>>>0,!d){var m=Math.pow(2,8*i)-1;st(this,l,r,i,m,0)}var u=i-1,a=1;for(this[r+u]=l&255;--u>=0&&(a*=256);)this[r+u]=l/a&255;return r+i};W.prototype.writeUint8=W.prototype.writeUInt8=function(l,r,i){return l=+l,r=r>>>0,i||st(this,l,r,1,255,0),this[r]=l&255,r+1};W.prototype.writeUint16LE=W.prototype.writeUInt16LE=function(l,r,i){return l=+l,r=r>>>0,i||st(this,l,r,2,65535,0),this[r]=l&255,this[r+1]=l>>>8,r+2};W.prototype.writeUint16BE=W.prototype.writeUInt16BE=function(l,r,i){return l=+l,r=r>>>0,i||st(this,l,r,2,65535,0),this[r]=l>>>8,this[r+1]=l&255,r+2};W.prototype.writeUint32LE=W.prototype.writeUInt32LE=function(l,r,i){return l=+l,r=r>>>0,i||st(this,l,r,4,4294967295,0),this[r+3]=l>>>24,this[r+2]=l>>>16,this[r+1]=l>>>8,this[r]=l&255,r+4};W.prototype.writeUint32BE=W.prototype.writeUInt32BE=function(l,r,i){return l=+l,r=r>>>0,i||st(this,l,r,4,4294967295,0),this[r]=l>>>24,this[r+1]=l>>>16,this[r+2]=l>>>8,this[r+3]=l&255,r+4};W.prototype.writeIntLE=function(l,r,i,d){if(l=+l,r=r>>>0,!d){var m=Math.pow(2,8*i-1);st(this,l,r,i,m-1,-m)}var u=0,a=1,y=0;for(this[r]=l&255;++u<i&&(a*=256);)l<0&&y===0&&this[r+u-1]!==0&&(y=1),this[r+u]=(l/a>>0)-y&255;return r+i};W.prototype.writeIntBE=function(l,r,i,d){if(l=+l,r=r>>>0,!d){var m=Math.pow(2,8*i-1);st(this,l,r,i,m-1,-m)}var u=i-1,a=1,y=0;for(this[r+u]=l&255;--u>=0&&(a*=256);)l<0&&y===0&&this[r+u+1]!==0&&(y=1),this[r+u]=(l/a>>0)-y&255;return r+i};W.prototype.writeInt8=function(l,r,i){return l=+l,r=r>>>0,i||st(this,l,r,1,127,-128),l<0&&(l=255+l+1),this[r]=l&255,r+1};W.prototype.writeInt16LE=function(l,r,i){return l=+l,r=r>>>0,i||st(this,l,r,2,32767,-32768),this[r]=l&255,this[r+1]=l>>>8,r+2};W.prototype.writeInt16BE=function(l,r,i){return l=+l,r=r>>>0,i||st(this,l,r,2,32767,-32768),this[r]=l>>>8,this[r+1]=l&255,r+2};W.prototype.writeInt32LE=function(l,r,i){return l=+l,r=r>>>0,i||st(this,l,r,4,2147483647,-2147483648),this[r]=l&255,this[r+1]=l>>>8,this[r+2]=l>>>16,this[r+3]=l>>>24,r+4};W.prototype.writeInt32BE=function(l,r,i){return l=+l,r=r>>>0,i||st(this,l,r,4,2147483647,-2147483648),l<0&&(l=4294967295+l+1),this[r]=l>>>24,this[r+1]=l>>>16,this[r+2]=l>>>8,this[r+3]=l&255,r+4};function Ll(p,l,r,i,d,m){if(r+i>p.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function Ul(p,l,r,i,d){return l=+l,r=r>>>0,d||Ll(p,l,r,4,34028234663852886e22,-34028234663852886e22),er.write(p,l,r,i,23,4),r+4}W.prototype.writeFloatLE=function(l,r,i){return Ul(this,l,r,!0,i)};W.prototype.writeFloatBE=function(l,r,i){return Ul(this,l,r,!1,i)};function Rl(p,l,r,i,d){return l=+l,r=r>>>0,d||Ll(p,l,r,8,17976931348623157e292,-17976931348623157e292),er.write(p,l,r,i,52,8),r+8}W.prototype.writeDoubleLE=function(l,r,i){return Rl(this,l,r,!0,i)};W.prototype.writeDoubleBE=function(l,r,i){return Rl(this,l,r,!1,i)};W.prototype.copy=function(l,r,i,d){if(!W.isBuffer(l))throw new TypeError("argument should be a Buffer");if(i||(i=0),!d&&d!==0&&(d=this.length),r>=l.length&&(r=l.length),r||(r=0),d>0&&d<i&&(d=i),d===i||l.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(d<0)throw new RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length),l.length-r<d-i&&(d=l.length-r+i);var m=d-i;return this===l&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,i,d):Uint8Array.prototype.set.call(l,this.subarray(i,d),r),m};W.prototype.fill=function(l,r,i,d){if(typeof l=="string"){if(typeof r=="string"?(d=r,r=0,i=this.length):typeof i=="string"&&(d=i,i=this.length),d!==void 0&&typeof d!="string")throw new TypeError("encoding must be a string");if(typeof d=="string"&&!W.isEncoding(d))throw new TypeError("Unknown encoding: "+d);if(l.length===1){var m=l.charCodeAt(0);(d==="utf8"&&m<128||d==="latin1")&&(l=m)}}else typeof l=="number"?l=l&255:typeof l=="boolean"&&(l=Number(l));if(r<0||this.length<r||this.length<i)throw new RangeError("Out of range index");if(i<=r)return this;r=r>>>0,i=i===void 0?this.length:i>>>0,l||(l=0);var u;if(typeof l=="number")for(u=r;u<i;++u)this[u]=l;else{var a=W.isBuffer(l)?l:W.from(l,d),y=a.length;if(y===0)throw new TypeError('The value "'+l+'" is invalid for argument "value"');for(u=0;u<i-r;++u)this[u+r]=a[u%y]}return this};var vd=/[^+/0-9A-Za-z-_]/g;function bd(p){if(p=p.split("=")[0],p=p.trim().replace(vd,""),p.length<2)return"";for(;p.length%4!==0;)p=p+"=";return p}function $n(p,l){l=l||1/0;for(var r,i=p.length,d=null,m=[],u=0;u<i;++u){if(r=p.charCodeAt(u),r>55295&&r<57344){if(!d){if(r>56319){(l-=3)>-1&&m.push(239,191,189);continue}else if(u+1===i){(l-=3)>-1&&m.push(239,191,189);continue}d=r;continue}if(r<56320){(l-=3)>-1&&m.push(239,191,189),d=r;continue}r=(d-55296<<10|r-56320)+65536}else d&&(l-=3)>-1&&m.push(239,191,189);if(d=null,r<128){if((l-=1)<0)break;m.push(r)}else if(r<2048){if((l-=2)<0)break;m.push(r>>6|192,r&63|128)}else if(r<65536){if((l-=3)<0)break;m.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((l-=4)<0)break;m.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return m}function yd(p){for(var l=[],r=0;r<p.length;++r)l.push(p.charCodeAt(r)&255);return l}function wd(p,l){for(var r,i,d,m=[],u=0;u<p.length&&!((l-=2)<0);++u)r=p.charCodeAt(u),i=r>>8,d=r%256,m.push(d),m.push(i);return m}function Ol(p){return Wn.toByteArray(bd(p))}function Br(p,l,r,i){for(var d=0;d<i&&!(d+r>=l.length||d>=p.length);++d)l[d+r]=p[d];return d}function Rt(p,l){return p instanceof l||p!=null&&p.constructor!=null&&p.constructor.name!=null&&p.constructor.name===l.name}function Zn(p){return p!==p}var xd=function(){for(var p="0123456789abcdef",l=new Array(256),r=0;r<16;++r)for(var i=r*16,d=0;d<16;++d)l[i+d]=p[r]+p[d];return l}()});var zl=dt((M4,jl)=>{Se();var Ne=jl.exports={},Ot,Dt;function Xn(){throw new Error("setTimeout has not been defined")}function Kn(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Ot=setTimeout:Ot=Xn}catch(p){Ot=Xn}try{typeof clearTimeout=="function"?Dt=clearTimeout:Dt=Kn}catch(p){Dt=Kn}})();function Fl(p){if(Ot===setTimeout)return setTimeout(p,0);if((Ot===Xn||!Ot)&&setTimeout)return Ot=setTimeout,setTimeout(p,0);try{return Ot(p,0)}catch(l){try{return Ot.call(null,p,0)}catch(r){return Ot.call(this,p,0)}}}function Ed(p){if(Dt===clearTimeout)return clearTimeout(p);if((Dt===Kn||!Dt)&&clearTimeout)return Dt=clearTimeout,clearTimeout(p);try{return Dt(p)}catch(l){try{return Dt.call(null,p)}catch(r){return Dt.call(this,p)}}}var Vt=[],or=!1,To,Lr=-1;function kd(){!or||!To||(or=!1,To.length?Vt=To.concat(Vt):Lr=-1,Vt.length&&Ml())}function Ml(){if(!or){var p=Fl(kd);or=!0;for(var l=Vt.length;l;){for(To=Vt,Vt=[];++Lr<l;)To&&To[Lr].run();Lr=-1,l=Vt.length}To=null,or=!1,Ed(p)}}Ne.nextTick=function(p){var l=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)l[r-1]=arguments[r];Vt.push(new Pl(p,l)),Vt.length===1&&!or&&Fl(Ml)};function Pl(p,l){this.fun=p,this.array=l}Pl.prototype.run=function(){this.fun.apply(null,this.array)};Ne.title="browser";Ne.browser=!0;Ne.env={};Ne.argv=[];Ne.version="";Ne.versions={};function Gt(){}Ne.on=Gt;Ne.addListener=Gt;Ne.once=Gt;Ne.off=Gt;Ne.removeListener=Gt;Ne.removeAllListeners=Gt;Ne.emit=Gt;Ne.prependListener=Gt;Ne.prependOnceListener=Gt;Ne.listeners=function(p){return[]};Ne.binding=function(p){throw new Error("process.binding is not supported")};Ne.cwd=function(){return"/"};Ne.chdir=function(p){throw new Error("process.chdir is not supported")};Ne.umask=function(){return 0}});var ct,it,P4,Se=Gs(()=>{ct=xt(Dl()),it=xt(zl()),P4=function(p){function l(){var i=this||self;return delete p.prototype.__magic__,i}if(typeof globalThis=="object")return globalThis;if(this)return l();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:l});var r=__magic__;return r}(Object)});var $l=dt((W4,Gl)=>{"use strict";Se();var Sd=Object.create,Ur=Object.defineProperty,Ad=Object.getOwnPropertyDescriptor,Td=Object.getOwnPropertyNames,Id=Object.getPrototypeOf,qd=Object.prototype.hasOwnProperty,Cd=(p,l)=>()=>(p&&(l=p(p=0)),l),Rr=(p,l)=>()=>(l||p((l={exports:{}}).exports,l),l.exports),Nd=(p,l)=>{for(var r in l)Ur(p,r,{get:l[r],enumerable:!0})},Wl=(p,l,r,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let d of Td(l))!qd.call(p,d)&&d!==r&&Ur(p,d,{get:()=>l[d],enumerable:!(i=Ad(l,d))||i.enumerable});return p},Qn=(p,l,r)=>(r=p!=null?Sd(Id(p)):{},Wl(l||!p||!p.__esModule?Ur(r,"default",{value:p,enumerable:!0}):r,p)),Bd=p=>Wl(Ur({},"__esModule",{value:!0}),p),Ld=Rr(p=>{"use strict";Ft(),p.byteLength=y,p.toByteArray=E,p.fromByteArray=A;var l=[],r=[],i=typeof Uint8Array!="undefined"?Uint8Array:Array,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(m=0,u=d.length;m<u;++m)l[m]=d[m],r[d.charCodeAt(m)]=m;var m,u;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function a(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=f.indexOf("=");w===-1&&(w=g);var v=w===g?0:4-w%4;return[w,v]}function y(f){var g=a(f),w=g[0],v=g[1];return(w+v)*3/4-v}function _(f,g,w){return(g+w)*3/4-w}function E(f){var g,w=a(f),v=w[0],S=w[1],k=new i(_(f,v,S)),U=0,O=S>0?v-4:v,L;for(L=0;L<O;L+=4)g=r[f.charCodeAt(L)]<<18|r[f.charCodeAt(L+1)]<<12|r[f.charCodeAt(L+2)]<<6|r[f.charCodeAt(L+3)],k[U++]=g>>16&255,k[U++]=g>>8&255,k[U++]=g&255;return S===2&&(g=r[f.charCodeAt(L)]<<2|r[f.charCodeAt(L+1)]>>4,k[U++]=g&255),S===1&&(g=r[f.charCodeAt(L)]<<10|r[f.charCodeAt(L+1)]<<4|r[f.charCodeAt(L+2)]>>2,k[U++]=g>>8&255,k[U++]=g&255),k}function b(f){return l[f>>18&63]+l[f>>12&63]+l[f>>6&63]+l[f&63]}function x(f,g,w){for(var v,S=[],k=g;k<w;k+=3)v=(f[k]<<16&16711680)+(f[k+1]<<8&65280)+(f[k+2]&255),S.push(b(v));return S.join("")}function A(f){for(var g,w=f.length,v=w%3,S=[],k=16383,U=0,O=w-v;U<O;U+=k)S.push(x(f,U,U+k>O?O:U+k));return v===1?(g=f[w-1],S.push(l[g>>2]+l[g<<4&63]+"==")):v===2&&(g=(f[w-2]<<8)+f[w-1],S.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),S.join("")}}),Ud=Rr(p=>{Ft(),p.read=function(l,r,i,d,m){var u,a,y=m*8-d-1,_=(1<<y)-1,E=_>>1,b=-7,x=i?m-1:0,A=i?-1:1,f=l[r+x];for(x+=A,u=f&(1<<-b)-1,f>>=-b,b+=y;b>0;u=u*256+l[r+x],x+=A,b-=8);for(a=u&(1<<-b)-1,u>>=-b,b+=d;b>0;a=a*256+l[r+x],x+=A,b-=8);if(u===0)u=1-E;else{if(u===_)return a?NaN:(f?-1:1)*(1/0);a=a+Math.pow(2,d),u=u-E}return(f?-1:1)*a*Math.pow(2,u-d)},p.write=function(l,r,i,d,m,u){var a,y,_,E=u*8-m-1,b=(1<<E)-1,x=b>>1,A=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=d?0:u-1,g=d?1:-1,w=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(y=isNaN(r)?1:0,a=b):(a=Math.floor(Math.log(r)/Math.LN2),r*(_=Math.pow(2,-a))<1&&(a--,_*=2),a+x>=1?r+=A/_:r+=A*Math.pow(2,1-x),r*_>=2&&(a++,_/=2),a+x>=b?(y=0,a=b):a+x>=1?(y=(r*_-1)*Math.pow(2,m),a=a+x):(y=r*Math.pow(2,x-1)*Math.pow(2,m),a=0));m>=8;l[i+f]=y&255,f+=g,y/=256,m-=8);for(a=a<<m|y,E+=m;E>0;l[i+f]=a&255,f+=g,a/=256,E-=8);l[i+f-g]|=w*128}}),Rd=Rr(p=>{"use strict";Ft();var l=Ld(),r=Ud(),i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=a,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var d=2147483647;p.kMaxLength=d,a.TYPED_ARRAY_SUPPORT=m(),!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function m(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function u(e){if(e>d)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return y(e,t,o)}a.poolSize=8192;function y(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return a.from(n,t,o);var c=w(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,t,o){return y(e,t,o)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function _(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function E(e,t,o){return _(e),e<=0?u(e):t!==void 0?typeof o=="string"?u(e).fill(t,o):u(e).fill(t):u(e)}a.alloc=function(e,t,o){return E(e,t,o)};function b(e){return _(e),u(e<0?0:v(e)|0)}a.allocUnsafe=function(e){return b(e)},a.allocUnsafeSlow=function(e){return b(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=k(e,t)|0,n=u(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function A(e){for(var t=e.length<0?0:v(e.length)|0,o=u(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function f(e){if($(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return A(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,a.prototype),n}function w(e){if(a.isBuffer(e)){var t=v(e.length)|0,o=u(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?u(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function v(e){if(e>=d)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+d.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==a.prototype},a.compare=function(e,t){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),$(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,s=Math.min(o,n);c<s;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return a.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=a.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var s=e[o];if($(s,Uint8Array))c+s.length>n.length?a.from(s).copy(n,c):Uint8Array.prototype.set.call(n,s,c);else if(a.isBuffer(s))s.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=s.length}return n};function k(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Te(e).length;default:if(c)return n?-1:ye(e).length;t=(""+t).toLowerCase(),c=!0}}a.byteLength=k;function U(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,t,o);case"utf8":case"utf-8":return Y(this,t,o);case"ascii":return ie(this,t,o);case"latin1":case"binary":return be(this,t,o);case"base64":return H(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}a.prototype._isBuffer=!0;function O(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):U.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:a.compare(this,e)===0},a.prototype.inspect=function(){var e="",t=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(e,t,o,n,c){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var s=c-n,h=o-t,q=Math.min(s,h),D=this.slice(n,c),C=e.slice(t,o),B=0;B<q;++B)if(D[B]!==C[B]){s=D[B],h=C[B];break}return s<h?-1:h<s?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,we(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=a.from(t,n)),a.isBuffer(t))return t.length===0?-1:J(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):J(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function J(e,t,o,n,c){var s=1,h=e.length,q=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;s=2,h/=2,q/=2,o/=2}function D(Ie,qe){return s===1?Ie[qe]:Ie.readUInt16BE(qe*s)}var C;if(c){var B=-1;for(C=o;C<h;C++)if(D(e,C)===D(t,B===-1?0:C-B)){if(B===-1&&(B=C),C-B+1===q)return B*s}else B!==-1&&(C-=C-B),B=-1}else for(o+q>h&&(o=h-q),C=o;C>=0;C--){for(var P=!0,de=0;de<q;de++)if(D(e,C+de)!==D(t,de)){P=!1;break}if(P)return C}return-1}a.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},a.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},a.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function ee(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var s=t.length;n>s/2&&(n=s/2);for(var h=0;h<n;++h){var q=parseInt(t.substr(h*2,2),16);if(we(q))return h;e[o+h]=q}return h}function te(e,t,o,n){return se(ye(t,e.length-o),e,o,n)}function Q(e,t,o,n){return se(Ve(t),e,o,n)}function pe(e,t,o,n){return se(Te(t),e,o,n)}function ne(e,t,o,n){return se(Ge(t,e.length-o),e,o,n)}a.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return ee(this,e,t,o);case"utf8":case"utf-8":return te(this,e,t,o);case"ascii":case"latin1":case"binary":return Q(this,e,t,o);case"base64":return pe(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,t,o);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function Y(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var s=e[c],h=null,q=s>239?4:s>223?3:s>191?2:1;if(c+q<=o){var D,C,B,P;switch(q){case 1:s<128&&(h=s);break;case 2:D=e[c+1],(D&192)===128&&(P=(s&31)<<6|D&63,P>127&&(h=P));break;case 3:D=e[c+1],C=e[c+2],(D&192)===128&&(C&192)===128&&(P=(s&15)<<12|(D&63)<<6|C&63,P>2047&&(P<55296||P>57343)&&(h=P));break;case 4:D=e[c+1],C=e[c+2],B=e[c+3],(D&192)===128&&(C&192)===128&&(B&192)===128&&(P=(s&15)<<18|(D&63)<<12|(C&63)<<6|B&63,P>65535&&P<1114112&&(h=P))}}h===null?(h=65533,q=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),c+=q}return ce(n)}var X=4096;function ce(e){var t=e.length;if(t<=X)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=X));return o}function ie(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function be(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function he(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",s=t;s<o;++s)c+=$e[e[s]];return c}function me(e,t,o){for(var n=e.slice(t,o),c="",s=0;s<n.length-1;s+=2)c+=String.fromCharCode(n[s]+n[s+1]*256);return c}a.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n};function N(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=t,c=1,s=this[e+--n];n>0&&(c*=256);)s+=this[e+--n]*c;return c*=128,s>=c&&(s-=Math.pow(2,8*t)),s},a.prototype.readInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},a.prototype.readInt16LE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},a.prototype.readInt16BE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},a.prototype.readInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!1,52,8)};function F(e,t,o,n,c,s){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<s)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=1,h=0;for(this[t]=e&255;++h<o&&(s*=256);)this[t+h]=e/s&255;return t+o},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=o-1,h=1;for(this[t+s]=e&255;--s>=0&&(h*=256);)this[t+s]=e/h&255;return t+o},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,255,0),this[t]=e&255,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},a.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=0,h=1,q=0;for(this[t]=e&255;++s<o&&(h*=256);)e<0&&q===0&&this[t+s-1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=o-1,h=1,q=0;for(this[t+s]=e&255;--s>=0&&(h*=256);)e<0&&q===0&&this[t+s+1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},a.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ve(e,t,o,n,c,s){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ke(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,4,34028234663852886e22,-34028234663852886e22),r.write(e,t,o,n,23,4),o+4}a.prototype.writeFloatLE=function(e,t,o){return ke(this,e,t,!0,o)},a.prototype.writeFloatBE=function(e,t,o){return ke(this,e,t,!1,o)};function re(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,8,17976931348623157e292,-17976931348623157e292),r.write(e,t,o,n,52,8),o+8}a.prototype.writeDoubleLE=function(e,t,o){return re(this,e,t,!0,o)},a.prototype.writeDoubleBE=function(e,t,o){return re(this,e,t,!1,o)},a.prototype.copy=function(e,t,o,n){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},a.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<o;++s)this[s]=e;else{var h=a.isBuffer(e)?e:a.from(e,n),q=h.length;if(q===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<o-t;++s)this[s+t]=h[s%q]}return this};var ze=/[^+/0-9A-Za-z-_]/g;function We(e){if(e=e.split("=")[0],e=e.trim().replace(ze,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,t){t=t||1/0;for(var o,n=e.length,c=null,s=[],h=0;h<n;++h){if(o=e.charCodeAt(h),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&s.push(239,191,189);continue}else if(h+1===n){(t-=3)>-1&&s.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&s.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&s.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;s.push(o)}else if(o<2048){if((t-=2)<0)break;s.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;s.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;s.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return s}function Ve(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function Ge(e,t){for(var o,n,c,s=[],h=0;h<e.length&&!((t-=2)<0);++h)o=e.charCodeAt(h),n=o>>8,c=o%256,s.push(c),s.push(n);return s}function Te(e){return l.toByteArray(We(e))}function se(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function $(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function we(e){return e!==e}var $e=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),Od=Rr((p,l)=>{Ft();var r=l.exports={},i,d;function m(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=m}catch(v){i=m}try{typeof clearTimeout=="function"?d=clearTimeout:d=u}catch(v){d=u}})();function a(v){if(i===setTimeout)return setTimeout(v,0);if((i===m||!i)&&setTimeout)return i=setTimeout,setTimeout(v,0);try{return i(v,0)}catch(S){try{return i.call(null,v,0)}catch(k){return i.call(this,v,0)}}}function y(v){if(d===clearTimeout)return clearTimeout(v);if((d===u||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(v);try{return d(v)}catch(S){try{return d.call(null,v)}catch(k){return d.call(this,v)}}}var _=[],E=!1,b,x=-1;function A(){!E||!b||(E=!1,b.length?_=b.concat(_):x=-1,_.length&&f())}function f(){if(!E){var v=a(A);E=!0;for(var S=_.length;S;){for(b=_,_=[];++x<S;)b&&b[x].run();x=-1,S=_.length}b=null,E=!1,y(v)}}r.nextTick=function(v){var S=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)S[k-1]=arguments[k];_.push(new g(v,S)),_.length===1&&!E&&a(f)};function g(v,S){this.fun=v,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function w(){}r.on=w,r.addListener=w,r.once=w,r.off=w,r.removeListener=w,r.removeAllListeners=w,r.emit=w,r.prependListener=w,r.prependOnceListener=w,r.listeners=function(v){return[]},r.binding=function(v){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(v){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),Dd,Fd,Md,Ft=Cd(()=>{Dd=Qn(Rd()),Fd=Qn(Od()),Md=function(p){function l(){var i=this||self;return delete p.prototype.__magic__,i}if(typeof globalThis=="object")return globalThis;if(this)return l();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:l});var r=__magic__;return r}(Object)}),Vl={};Nd(Vl,{InfoDust:()=>$d});Gl.exports=Bd(Vl);Ft();Ft();var _r=Qn(require("react")),Pd=require("@fortawesome/free-solid-svg-icons"),jd=require("@fortawesome/react-fontawesome"),zd=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Wd=require("react-tooltip"),z4=require("react-tooltip/dist/react-tooltip.css");Ft();Ft();Ft();var Vd="5000000000000000";Ft();var Gd=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gd));var Jn={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},$d=({rewaLabel:p})=>_r.default.createElement("div",{className:Jn.infoDust},_r.default.createElement(Wd.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:Jn.infoDustTooltip},"A minimal amount of"," ",_r.default.createElement(zd.FormatAmount,{rewaLabel:p,value:Vd,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),_r.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:Jn.infoDustTrigger},_r.default.createElement(jd.FontAwesomeIcon,{icon:Pd.faInfoCircle,className:"i-icon"})));});var Kl=dt((V4,Xl)=>{"use strict";Se();var Yd=Object.create,Or=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,Zd=Object.getOwnPropertyNames,Xd=Object.getPrototypeOf,Kd=Object.prototype.hasOwnProperty,Jd=(p,l)=>()=>(p&&(l=p(p=0)),l),Dr=(p,l)=>()=>(l||p((l={exports:{}}).exports,l),l.exports),Qd=(p,l)=>{for(var r in l)Or(p,r,{get:l[r],enumerable:!0})},Hl=(p,l,r,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let d of Zd(l))!Kd.call(p,d)&&d!==r&&Or(p,d,{get:()=>l[d],enumerable:!(i=Hd(l,d))||i.enumerable});return p},ea=(p,l,r)=>(r=p!=null?Yd(Xd(p)):{},Hl(l||!p||!p.__esModule?Or(r,"default",{value:p,enumerable:!0}):r,p)),eu=p=>Hl(Or({},"__esModule",{value:!0}),p),tu=Dr(p=>{"use strict";Io(),p.byteLength=y,p.toByteArray=E,p.fromByteArray=A;var l=[],r=[],i=typeof Uint8Array!="undefined"?Uint8Array:Array,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(m=0,u=d.length;m<u;++m)l[m]=d[m],r[d.charCodeAt(m)]=m;var m,u;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function a(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=f.indexOf("=");w===-1&&(w=g);var v=w===g?0:4-w%4;return[w,v]}function y(f){var g=a(f),w=g[0],v=g[1];return(w+v)*3/4-v}function _(f,g,w){return(g+w)*3/4-w}function E(f){var g,w=a(f),v=w[0],S=w[1],k=new i(_(f,v,S)),U=0,O=S>0?v-4:v,L;for(L=0;L<O;L+=4)g=r[f.charCodeAt(L)]<<18|r[f.charCodeAt(L+1)]<<12|r[f.charCodeAt(L+2)]<<6|r[f.charCodeAt(L+3)],k[U++]=g>>16&255,k[U++]=g>>8&255,k[U++]=g&255;return S===2&&(g=r[f.charCodeAt(L)]<<2|r[f.charCodeAt(L+1)]>>4,k[U++]=g&255),S===1&&(g=r[f.charCodeAt(L)]<<10|r[f.charCodeAt(L+1)]<<4|r[f.charCodeAt(L+2)]>>2,k[U++]=g>>8&255,k[U++]=g&255),k}function b(f){return l[f>>18&63]+l[f>>12&63]+l[f>>6&63]+l[f&63]}function x(f,g,w){for(var v,S=[],k=g;k<w;k+=3)v=(f[k]<<16&16711680)+(f[k+1]<<8&65280)+(f[k+2]&255),S.push(b(v));return S.join("")}function A(f){for(var g,w=f.length,v=w%3,S=[],k=16383,U=0,O=w-v;U<O;U+=k)S.push(x(f,U,U+k>O?O:U+k));return v===1?(g=f[w-1],S.push(l[g>>2]+l[g<<4&63]+"==")):v===2&&(g=(f[w-2]<<8)+f[w-1],S.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),S.join("")}}),ou=Dr(p=>{Io(),p.read=function(l,r,i,d,m){var u,a,y=m*8-d-1,_=(1<<y)-1,E=_>>1,b=-7,x=i?m-1:0,A=i?-1:1,f=l[r+x];for(x+=A,u=f&(1<<-b)-1,f>>=-b,b+=y;b>0;u=u*256+l[r+x],x+=A,b-=8);for(a=u&(1<<-b)-1,u>>=-b,b+=d;b>0;a=a*256+l[r+x],x+=A,b-=8);if(u===0)u=1-E;else{if(u===_)return a?NaN:(f?-1:1)*(1/0);a=a+Math.pow(2,d),u=u-E}return(f?-1:1)*a*Math.pow(2,u-d)},p.write=function(l,r,i,d,m,u){var a,y,_,E=u*8-m-1,b=(1<<E)-1,x=b>>1,A=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=d?0:u-1,g=d?1:-1,w=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(y=isNaN(r)?1:0,a=b):(a=Math.floor(Math.log(r)/Math.LN2),r*(_=Math.pow(2,-a))<1&&(a--,_*=2),a+x>=1?r+=A/_:r+=A*Math.pow(2,1-x),r*_>=2&&(a++,_/=2),a+x>=b?(y=0,a=b):a+x>=1?(y=(r*_-1)*Math.pow(2,m),a=a+x):(y=r*Math.pow(2,x-1)*Math.pow(2,m),a=0));m>=8;l[i+f]=y&255,f+=g,y/=256,m-=8);for(a=a<<m|y,E+=m;E>0;l[i+f]=a&255,f+=g,a/=256,E-=8);l[i+f-g]|=w*128}}),ru=Dr(p=>{"use strict";Io();var l=tu(),r=ou(),i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=a,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var d=2147483647;p.kMaxLength=d,a.TYPED_ARRAY_SUPPORT=m(),!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function m(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function u(e){if(e>d)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return y(e,t,o)}a.poolSize=8192;function y(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return a.from(n,t,o);var c=w(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,t,o){return y(e,t,o)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function _(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function E(e,t,o){return _(e),e<=0?u(e):t!==void 0?typeof o=="string"?u(e).fill(t,o):u(e).fill(t):u(e)}a.alloc=function(e,t,o){return E(e,t,o)};function b(e){return _(e),u(e<0?0:v(e)|0)}a.allocUnsafe=function(e){return b(e)},a.allocUnsafeSlow=function(e){return b(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=k(e,t)|0,n=u(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function A(e){for(var t=e.length<0?0:v(e.length)|0,o=u(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function f(e){if($(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return A(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,a.prototype),n}function w(e){if(a.isBuffer(e)){var t=v(e.length)|0,o=u(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?u(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function v(e){if(e>=d)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+d.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==a.prototype},a.compare=function(e,t){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),$(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,s=Math.min(o,n);c<s;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return a.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=a.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var s=e[o];if($(s,Uint8Array))c+s.length>n.length?a.from(s).copy(n,c):Uint8Array.prototype.set.call(n,s,c);else if(a.isBuffer(s))s.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=s.length}return n};function k(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Te(e).length;default:if(c)return n?-1:ye(e).length;t=(""+t).toLowerCase(),c=!0}}a.byteLength=k;function U(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,t,o);case"utf8":case"utf-8":return Y(this,t,o);case"ascii":return ie(this,t,o);case"latin1":case"binary":return be(this,t,o);case"base64":return H(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}a.prototype._isBuffer=!0;function O(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):U.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:a.compare(this,e)===0},a.prototype.inspect=function(){var e="",t=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(e,t,o,n,c){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var s=c-n,h=o-t,q=Math.min(s,h),D=this.slice(n,c),C=e.slice(t,o),B=0;B<q;++B)if(D[B]!==C[B]){s=D[B],h=C[B];break}return s<h?-1:h<s?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,we(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=a.from(t,n)),a.isBuffer(t))return t.length===0?-1:J(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):J(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function J(e,t,o,n,c){var s=1,h=e.length,q=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;s=2,h/=2,q/=2,o/=2}function D(Ie,qe){return s===1?Ie[qe]:Ie.readUInt16BE(qe*s)}var C;if(c){var B=-1;for(C=o;C<h;C++)if(D(e,C)===D(t,B===-1?0:C-B)){if(B===-1&&(B=C),C-B+1===q)return B*s}else B!==-1&&(C-=C-B),B=-1}else for(o+q>h&&(o=h-q),C=o;C>=0;C--){for(var P=!0,de=0;de<q;de++)if(D(e,C+de)!==D(t,de)){P=!1;break}if(P)return C}return-1}a.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},a.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},a.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function ee(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var s=t.length;n>s/2&&(n=s/2);for(var h=0;h<n;++h){var q=parseInt(t.substr(h*2,2),16);if(we(q))return h;e[o+h]=q}return h}function te(e,t,o,n){return se(ye(t,e.length-o),e,o,n)}function Q(e,t,o,n){return se(Ve(t),e,o,n)}function pe(e,t,o,n){return se(Te(t),e,o,n)}function ne(e,t,o,n){return se(Ge(t,e.length-o),e,o,n)}a.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return ee(this,e,t,o);case"utf8":case"utf-8":return te(this,e,t,o);case"ascii":case"latin1":case"binary":return Q(this,e,t,o);case"base64":return pe(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,t,o);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function Y(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var s=e[c],h=null,q=s>239?4:s>223?3:s>191?2:1;if(c+q<=o){var D,C,B,P;switch(q){case 1:s<128&&(h=s);break;case 2:D=e[c+1],(D&192)===128&&(P=(s&31)<<6|D&63,P>127&&(h=P));break;case 3:D=e[c+1],C=e[c+2],(D&192)===128&&(C&192)===128&&(P=(s&15)<<12|(D&63)<<6|C&63,P>2047&&(P<55296||P>57343)&&(h=P));break;case 4:D=e[c+1],C=e[c+2],B=e[c+3],(D&192)===128&&(C&192)===128&&(B&192)===128&&(P=(s&15)<<18|(D&63)<<12|(C&63)<<6|B&63,P>65535&&P<1114112&&(h=P))}}h===null?(h=65533,q=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),c+=q}return ce(n)}var X=4096;function ce(e){var t=e.length;if(t<=X)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=X));return o}function ie(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function be(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function he(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",s=t;s<o;++s)c+=$e[e[s]];return c}function me(e,t,o){for(var n=e.slice(t,o),c="",s=0;s<n.length-1;s+=2)c+=String.fromCharCode(n[s]+n[s+1]*256);return c}a.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n};function N(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=t,c=1,s=this[e+--n];n>0&&(c*=256);)s+=this[e+--n]*c;return c*=128,s>=c&&(s-=Math.pow(2,8*t)),s},a.prototype.readInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},a.prototype.readInt16LE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},a.prototype.readInt16BE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},a.prototype.readInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!1,52,8)};function F(e,t,o,n,c,s){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<s)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=1,h=0;for(this[t]=e&255;++h<o&&(s*=256);)this[t+h]=e/s&255;return t+o},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=o-1,h=1;for(this[t+s]=e&255;--s>=0&&(h*=256);)this[t+s]=e/h&255;return t+o},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,255,0),this[t]=e&255,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},a.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=0,h=1,q=0;for(this[t]=e&255;++s<o&&(h*=256);)e<0&&q===0&&this[t+s-1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=o-1,h=1,q=0;for(this[t+s]=e&255;--s>=0&&(h*=256);)e<0&&q===0&&this[t+s+1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},a.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ve(e,t,o,n,c,s){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ke(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,4,34028234663852886e22,-34028234663852886e22),r.write(e,t,o,n,23,4),o+4}a.prototype.writeFloatLE=function(e,t,o){return ke(this,e,t,!0,o)},a.prototype.writeFloatBE=function(e,t,o){return ke(this,e,t,!1,o)};function re(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,8,17976931348623157e292,-17976931348623157e292),r.write(e,t,o,n,52,8),o+8}a.prototype.writeDoubleLE=function(e,t,o){return re(this,e,t,!0,o)},a.prototype.writeDoubleBE=function(e,t,o){return re(this,e,t,!1,o)},a.prototype.copy=function(e,t,o,n){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},a.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<o;++s)this[s]=e;else{var h=a.isBuffer(e)?e:a.from(e,n),q=h.length;if(q===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<o-t;++s)this[s+t]=h[s%q]}return this};var ze=/[^+/0-9A-Za-z-_]/g;function We(e){if(e=e.split("=")[0],e=e.trim().replace(ze,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,t){t=t||1/0;for(var o,n=e.length,c=null,s=[],h=0;h<n;++h){if(o=e.charCodeAt(h),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&s.push(239,191,189);continue}else if(h+1===n){(t-=3)>-1&&s.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&s.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&s.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;s.push(o)}else if(o<2048){if((t-=2)<0)break;s.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;s.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;s.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return s}function Ve(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function Ge(e,t){for(var o,n,c,s=[],h=0;h<e.length&&!((t-=2)<0);++h)o=e.charCodeAt(h),n=o>>8,c=o%256,s.push(c),s.push(n);return s}function Te(e){return l.toByteArray(We(e))}function se(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function $(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function we(e){return e!==e}var $e=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),nu=Dr((p,l)=>{Io();var r=l.exports={},i,d;function m(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=m}catch(v){i=m}try{typeof clearTimeout=="function"?d=clearTimeout:d=u}catch(v){d=u}})();function a(v){if(i===setTimeout)return setTimeout(v,0);if((i===m||!i)&&setTimeout)return i=setTimeout,setTimeout(v,0);try{return i(v,0)}catch(S){try{return i.call(null,v,0)}catch(k){return i.call(this,v,0)}}}function y(v){if(d===clearTimeout)return clearTimeout(v);if((d===u||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(v);try{return d(v)}catch(S){try{return d.call(null,v)}catch(k){return d.call(this,v)}}}var _=[],E=!1,b,x=-1;function A(){!E||!b||(E=!1,b.length?_=b.concat(_):x=-1,_.length&&f())}function f(){if(!E){var v=a(A);E=!0;for(var S=_.length;S;){for(b=_,_=[];++x<S;)b&&b[x].run();x=-1,S=_.length}b=null,E=!1,y(v)}}r.nextTick=function(v){var S=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)S[k-1]=arguments[k];_.push(new g(v,S)),_.length===1&&!E&&a(f)};function g(v,S){this.fun=v,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function w(){}r.on=w,r.addListener=w,r.once=w,r.off=w,r.removeListener=w,r.removeAllListeners=w,r.emit=w,r.prependListener=w,r.prependOnceListener=w,r.listeners=function(v){return[]},r.binding=function(v){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(v){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),au,lu,pu,Io=Jd(()=>{au=ea(ru()),lu=ea(nu()),pu=function(p){function l(){var i=this||self;return delete p.prototype.__magic__,i}if(typeof globalThis=="object")return globalThis;if(this)return l();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:l});var r=__magic__;return r}(Object)}),Zl={};Qd(Zl,{Loader:()=>du});Xl.exports=eu(Zl);Io();Io();var Yl=ea(require("react")),cu=require("@terradharitri/sdk-dapp/UI/Loader/index");Io();var iu=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(iu));var su={loader:"dapp-core-component__styles-module__loader"},du=()=>Yl.default.createElement("div",{className:su.loader},Yl.default.createElement(cu.Loader,null));});var mc=dt((pE,uc)=>{"use strict";Se();var uu=Object.create,yr=Object.defineProperty,mu=Object.defineProperties,fu=Object.getOwnPropertyDescriptor,_u=Object.getOwnPropertyDescriptors,hu=Object.getOwnPropertyNames,Yr=Object.getOwnPropertySymbols,gu=Object.getPrototypeOf,xa=Object.prototype.hasOwnProperty,Rp=Object.prototype.propertyIsEnumerable,Jl=(p,l,r)=>l in p?yr(p,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):p[l]=r,xe=(p,l)=>{for(var r in l||(l={}))xa.call(l,r)&&Jl(p,r,l[r]);if(Yr)for(var r of Yr(l))Rp.call(l,r)&&Jl(p,r,l[r]);return p},je=(p,l)=>mu(p,_u(l)),Op=(p,l)=>{var r={};for(var i in p)xa.call(p,i)&&l.indexOf(i)<0&&(r[i]=p[i]);if(p!=null&&Yr)for(var i of Yr(p))l.indexOf(i)<0&&Rp.call(p,i)&&(r[i]=p[i]);return r},Ea=(p,l)=>()=>(p&&(l=p(p=0)),l),Zr=(p,l)=>()=>(l||p((l={exports:{}}).exports,l),l.exports),Xr=(p,l)=>{for(var r in l)yr(p,r,{get:l[r],enumerable:!0})},Dp=(p,l,r,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let d of hu(l))!xa.call(p,d)&&d!==r&&yr(p,d,{get:()=>l[d],enumerable:!(i=fu(l,d))||i.enumerable});return p},M=(p,l,r)=>(r=p!=null?uu(gu(p)):{},Dp(l||!p||!p.__esModule?yr(r,"default",{value:p,enumerable:!0}):r,p)),cr=p=>Dp(yr({},"__esModule",{value:!0}),p),so=(p,l,r)=>new Promise((i,d)=>{var m=y=>{try{a(r.next(y))}catch(_){d(_)}},u=y=>{try{a(r.throw(y))}catch(_){d(_)}},a=y=>y.done?i(y.value):Promise.resolve(y.value).then(m,u);a((r=r.apply(p,l)).next())}),vu=Zr(p=>{"use strict";T(),p.byteLength=y,p.toByteArray=E,p.fromByteArray=A;var l=[],r=[],i=typeof Uint8Array!="undefined"?Uint8Array:Array,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(m=0,u=d.length;m<u;++m)l[m]=d[m],r[d.charCodeAt(m)]=m;var m,u;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function a(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=f.indexOf("=");w===-1&&(w=g);var v=w===g?0:4-w%4;return[w,v]}function y(f){var g=a(f),w=g[0],v=g[1];return(w+v)*3/4-v}function _(f,g,w){return(g+w)*3/4-w}function E(f){var g,w=a(f),v=w[0],S=w[1],k=new i(_(f,v,S)),U=0,O=S>0?v-4:v,L;for(L=0;L<O;L+=4)g=r[f.charCodeAt(L)]<<18|r[f.charCodeAt(L+1)]<<12|r[f.charCodeAt(L+2)]<<6|r[f.charCodeAt(L+3)],k[U++]=g>>16&255,k[U++]=g>>8&255,k[U++]=g&255;return S===2&&(g=r[f.charCodeAt(L)]<<2|r[f.charCodeAt(L+1)]>>4,k[U++]=g&255),S===1&&(g=r[f.charCodeAt(L)]<<10|r[f.charCodeAt(L+1)]<<4|r[f.charCodeAt(L+2)]>>2,k[U++]=g>>8&255,k[U++]=g&255),k}function b(f){return l[f>>18&63]+l[f>>12&63]+l[f>>6&63]+l[f&63]}function x(f,g,w){for(var v,S=[],k=g;k<w;k+=3)v=(f[k]<<16&16711680)+(f[k+1]<<8&65280)+(f[k+2]&255),S.push(b(v));return S.join("")}function A(f){for(var g,w=f.length,v=w%3,S=[],k=16383,U=0,O=w-v;U<O;U+=k)S.push(x(f,U,U+k>O?O:U+k));return v===1?(g=f[w-1],S.push(l[g>>2]+l[g<<4&63]+"==")):v===2&&(g=(f[w-2]<<8)+f[w-1],S.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),S.join("")}}),bu=Zr(p=>{T(),p.read=function(l,r,i,d,m){var u,a,y=m*8-d-1,_=(1<<y)-1,E=_>>1,b=-7,x=i?m-1:0,A=i?-1:1,f=l[r+x];for(x+=A,u=f&(1<<-b)-1,f>>=-b,b+=y;b>0;u=u*256+l[r+x],x+=A,b-=8);for(a=u&(1<<-b)-1,u>>=-b,b+=d;b>0;a=a*256+l[r+x],x+=A,b-=8);if(u===0)u=1-E;else{if(u===_)return a?NaN:(f?-1:1)*(1/0);a=a+Math.pow(2,d),u=u-E}return(f?-1:1)*a*Math.pow(2,u-d)},p.write=function(l,r,i,d,m,u){var a,y,_,E=u*8-m-1,b=(1<<E)-1,x=b>>1,A=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=d?0:u-1,g=d?1:-1,w=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(y=isNaN(r)?1:0,a=b):(a=Math.floor(Math.log(r)/Math.LN2),r*(_=Math.pow(2,-a))<1&&(a--,_*=2),a+x>=1?r+=A/_:r+=A*Math.pow(2,1-x),r*_>=2&&(a++,_/=2),a+x>=b?(y=0,a=b):a+x>=1?(y=(r*_-1)*Math.pow(2,m),a=a+x):(y=r*Math.pow(2,x-1)*Math.pow(2,m),a=0));m>=8;l[i+f]=y&255,f+=g,y/=256,m-=8);for(a=a<<m|y,E+=m;E>0;l[i+f]=a&255,f+=g,a/=256,E-=8);l[i+f-g]|=w*128}}),yu=Zr(p=>{"use strict";T();var l=vu(),r=bu(),i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=a,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var d=2147483647;p.kMaxLength=d,a.TYPED_ARRAY_SUPPORT=m(),!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function m(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function u(e){if(e>d)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return y(e,t,o)}a.poolSize=8192;function y(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return a.from(n,t,o);var c=w(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,t,o){return y(e,t,o)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function _(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function E(e,t,o){return _(e),e<=0?u(e):t!==void 0?typeof o=="string"?u(e).fill(t,o):u(e).fill(t):u(e)}a.alloc=function(e,t,o){return E(e,t,o)};function b(e){return _(e),u(e<0?0:v(e)|0)}a.allocUnsafe=function(e){return b(e)},a.allocUnsafeSlow=function(e){return b(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=k(e,t)|0,n=u(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function A(e){for(var t=e.length<0?0:v(e.length)|0,o=u(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function f(e){if($(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return A(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,a.prototype),n}function w(e){if(a.isBuffer(e)){var t=v(e.length)|0,o=u(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?u(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function v(e){if(e>=d)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+d.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==a.prototype},a.compare=function(e,t){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),$(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,s=Math.min(o,n);c<s;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return a.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=a.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var s=e[o];if($(s,Uint8Array))c+s.length>n.length?a.from(s).copy(n,c):Uint8Array.prototype.set.call(n,s,c);else if(a.isBuffer(s))s.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=s.length}return n};function k(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Te(e).length;default:if(c)return n?-1:ye(e).length;t=(""+t).toLowerCase(),c=!0}}a.byteLength=k;function U(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,t,o);case"utf8":case"utf-8":return Y(this,t,o);case"ascii":return ie(this,t,o);case"latin1":case"binary":return be(this,t,o);case"base64":return H(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}a.prototype._isBuffer=!0;function O(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):U.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:a.compare(this,e)===0},a.prototype.inspect=function(){var e="",t=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(e,t,o,n,c){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var s=c-n,h=o-t,q=Math.min(s,h),D=this.slice(n,c),C=e.slice(t,o),B=0;B<q;++B)if(D[B]!==C[B]){s=D[B],h=C[B];break}return s<h?-1:h<s?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,we(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=a.from(t,n)),a.isBuffer(t))return t.length===0?-1:J(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):J(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function J(e,t,o,n,c){var s=1,h=e.length,q=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;s=2,h/=2,q/=2,o/=2}function D(Ie,qe){return s===1?Ie[qe]:Ie.readUInt16BE(qe*s)}var C;if(c){var B=-1;for(C=o;C<h;C++)if(D(e,C)===D(t,B===-1?0:C-B)){if(B===-1&&(B=C),C-B+1===q)return B*s}else B!==-1&&(C-=C-B),B=-1}else for(o+q>h&&(o=h-q),C=o;C>=0;C--){for(var P=!0,de=0;de<q;de++)if(D(e,C+de)!==D(t,de)){P=!1;break}if(P)return C}return-1}a.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},a.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},a.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function ee(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var s=t.length;n>s/2&&(n=s/2);for(var h=0;h<n;++h){var q=parseInt(t.substr(h*2,2),16);if(we(q))return h;e[o+h]=q}return h}function te(e,t,o,n){return se(ye(t,e.length-o),e,o,n)}function Q(e,t,o,n){return se(Ve(t),e,o,n)}function pe(e,t,o,n){return se(Te(t),e,o,n)}function ne(e,t,o,n){return se(Ge(t,e.length-o),e,o,n)}a.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return ee(this,e,t,o);case"utf8":case"utf-8":return te(this,e,t,o);case"ascii":case"latin1":case"binary":return Q(this,e,t,o);case"base64":return pe(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,t,o);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function Y(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var s=e[c],h=null,q=s>239?4:s>223?3:s>191?2:1;if(c+q<=o){var D,C,B,P;switch(q){case 1:s<128&&(h=s);break;case 2:D=e[c+1],(D&192)===128&&(P=(s&31)<<6|D&63,P>127&&(h=P));break;case 3:D=e[c+1],C=e[c+2],(D&192)===128&&(C&192)===128&&(P=(s&15)<<12|(D&63)<<6|C&63,P>2047&&(P<55296||P>57343)&&(h=P));break;case 4:D=e[c+1],C=e[c+2],B=e[c+3],(D&192)===128&&(C&192)===128&&(B&192)===128&&(P=(s&15)<<18|(D&63)<<12|(C&63)<<6|B&63,P>65535&&P<1114112&&(h=P))}}h===null?(h=65533,q=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),c+=q}return ce(n)}var X=4096;function ce(e){var t=e.length;if(t<=X)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=X));return o}function ie(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function be(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function he(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",s=t;s<o;++s)c+=$e[e[s]];return c}function me(e,t,o){for(var n=e.slice(t,o),c="",s=0;s<n.length-1;s+=2)c+=String.fromCharCode(n[s]+n[s+1]*256);return c}a.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n};function N(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=t,c=1,s=this[e+--n];n>0&&(c*=256);)s+=this[e+--n]*c;return c*=128,s>=c&&(s-=Math.pow(2,8*t)),s},a.prototype.readInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},a.prototype.readInt16LE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},a.prototype.readInt16BE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},a.prototype.readInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!1,52,8)};function F(e,t,o,n,c,s){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<s)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=1,h=0;for(this[t]=e&255;++h<o&&(s*=256);)this[t+h]=e/s&255;return t+o},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=o-1,h=1;for(this[t+s]=e&255;--s>=0&&(h*=256);)this[t+s]=e/h&255;return t+o},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,255,0),this[t]=e&255,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},a.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=0,h=1,q=0;for(this[t]=e&255;++s<o&&(h*=256);)e<0&&q===0&&this[t+s-1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=o-1,h=1,q=0;for(this[t+s]=e&255;--s>=0&&(h*=256);)e<0&&q===0&&this[t+s+1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},a.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ve(e,t,o,n,c,s){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ke(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,4,34028234663852886e22,-34028234663852886e22),r.write(e,t,o,n,23,4),o+4}a.prototype.writeFloatLE=function(e,t,o){return ke(this,e,t,!0,o)},a.prototype.writeFloatBE=function(e,t,o){return ke(this,e,t,!1,o)};function re(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,8,17976931348623157e292,-17976931348623157e292),r.write(e,t,o,n,52,8),o+8}a.prototype.writeDoubleLE=function(e,t,o){return re(this,e,t,!0,o)},a.prototype.writeDoubleBE=function(e,t,o){return re(this,e,t,!1,o)},a.prototype.copy=function(e,t,o,n){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},a.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<o;++s)this[s]=e;else{var h=a.isBuffer(e)?e:a.from(e,n),q=h.length;if(q===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<o-t;++s)this[s+t]=h[s%q]}return this};var ze=/[^+/0-9A-Za-z-_]/g;function We(e){if(e=e.split("=")[0],e=e.trim().replace(ze,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,t){t=t||1/0;for(var o,n=e.length,c=null,s=[],h=0;h<n;++h){if(o=e.charCodeAt(h),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&s.push(239,191,189);continue}else if(h+1===n){(t-=3)>-1&&s.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&s.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&s.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;s.push(o)}else if(o<2048){if((t-=2)<0)break;s.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;s.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;s.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return s}function Ve(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function Ge(e,t){for(var o,n,c,s=[],h=0;h<e.length&&!((t-=2)<0);++h)o=e.charCodeAt(h),n=o>>8,c=o%256,s.push(c),s.push(n);return s}function Te(e){return l.toByteArray(We(e))}function se(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function $(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function we(e){return e!==e}var $e=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),wu=Zr((p,l)=>{T();var r=l.exports={},i,d;function m(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=m}catch(v){i=m}try{typeof clearTimeout=="function"?d=clearTimeout:d=u}catch(v){d=u}})();function a(v){if(i===setTimeout)return setTimeout(v,0);if((i===m||!i)&&setTimeout)return i=setTimeout,setTimeout(v,0);try{return i(v,0)}catch(S){try{return i.call(null,v,0)}catch(k){return i.call(this,v,0)}}}function y(v){if(d===clearTimeout)return clearTimeout(v);if((d===u||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(v);try{return d(v)}catch(S){try{return d.call(null,v)}catch(k){return d.call(this,v)}}}var _=[],E=!1,b,x=-1;function A(){!E||!b||(E=!1,b.length?_=b.concat(_):x=-1,_.length&&f())}function f(){if(!E){var v=a(A);E=!0;for(var S=_.length;S;){for(b=_,_=[];++x<S;)b&&b[x].run();x=-1,S=_.length}b=null,E=!1,y(v)}}r.nextTick=function(v){var S=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)S[k-1]=arguments[k];_.push(new g(v,S)),_.length===1&&!E&&a(f)};function g(v,S){this.fun=v,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function w(){}r.on=w,r.addListener=w,r.once=w,r.off=w,r.removeListener=w,r.removeAllListeners=w,r.emit=w,r.prependListener=w,r.prependOnceListener=w,r.listeners=function(v){return[]},r.binding=function(v){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(v){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),Fp,xu,Eu,T=Ea(()=>{Fp=M(yu()),xu=M(wu()),Eu=function(p){function l(){var i=this||self;return delete p.prototype.__magic__,i}if(typeof globalThis=="object")return globalThis;if(this)return l();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:l});var r=__magic__;return r}(Object)}),wr={};Xr(wr,{default:()=>Mp});var Fr,Ql,Mp,Kr=Ea(()=>{"use strict";T(),Fr=M(require("react")),Ql=p=>Fr.createElement("svg",xe({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},p),Fr.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Fr.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Mp=Ql}),Pp={};Xr(Pp,{default:()=>jp});var Mr,ep,jp,ku=Ea(()=>{"use strict";T(),Mr=M(require("react")),ep=p=>Mr.createElement("svg",xe({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},p),Mr.createElement("g",null,Mr.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),jp=ep}),zp={};Xr(zp,{Form:()=>Sg});uc.exports=cr(zp);T();T();var Be=M(require("react")),tp=require("@terradharitri/sdk-core/out"),Su=M(require("classnames")),Au=require("formik");T();var Tu=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Tu));var ue={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};T();T();var Wp=M(require("react"));T();var Iu=M(require("react")),G4=(0,Iu.createContext)({});T();T();var qu=M(require("react")),$4=require("@terradharitri/sdk-dapp/constants/index"),Y4=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),H4=M(require("bignumber.js")),Z4=require("formik");T();T();T();var X4=require("bech32");T();T();T();var Mo=(p,l)=>typeof l=="boolean"?l:Array.isArray(l)&&l.includes(p);T();T();var Fo=require("@terradharitri/sdk-dapp/types/tokens.types"),Cu=p=>!["REWA","DCDT"].includes(p);T();T();var Nu=require("@terradharitri/sdk-dapp/constants"),Bu=require("@terradharitri/sdk-dapp/utils/account/getAccount"),Lu=p=>so(void 0,null,function*(){let l=p.txType==="REWA"?p.amount:Nu.ZERO,r=Cu(p.txType),i=yield(0,Bu.getAccount)(p.receiver),d=i==null?void 0:i.username,m=r?p.senderUsername:d,u=je(xe({},p),{amount:l,receiverUsername:m});return delete u.rawReceiverUsername,u});T();T();var op=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),Uu=({nft:p,skipDescription:l})=>{var r,i;let{name:d,metadata:m,media:u,isNsfw:a,scamInfo:y,verified:_}=p,E="Scam - ",{isSuspicious:b,message:x}=(0,op.getScamFlag)({verified:_,message:d,isNsfw:a,scamInfo:y,messagePrefix:E});if(!(m!=null&&m.description)||l){let v=b?"placeholder":(r=u==null?void 0:u[0])==null?void 0:r.thumbnailUrl;return{isSuspicious:b,name:d||x,thumbnail:v,description:""}}let{message:A,isSuspicious:f}=(0,op.getScamFlag)({message:m.description,messagePrefix:E,verified:_}),g=b||f,w=g?"placeholder":(i=u==null?void 0:u[0])==null?void 0:i.thumbnailUrl;return{isSuspicious:g,name:d||x,thumbnail:w,description:A||m.description}};T();var K4=require("@terradharitri/sdk-dapp/utils/buildUrlParams");T();var ta=M(require("anchorme")),oa=p=>p.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Ru=(p,l)=>{if(l){let r=`[Message hidden due to suspicious content - ${l.info}]`;if(p.length>1e3)return{output:r,stringWithLinks:p,found:!0};let i=oa(p.normalize("NFKC")),d=ta.default.list(i),m=[];if(d.length>0){let u=r;d.forEach((a,y)=>{let{string:_}=a,E="",b="",x=_;for(let A=0;A<u.length;A++){let f=u.slice(A),[g]=ta.default.list(oa(f));g&&_===g.string&&(E=u.substring(0,A))}for(let A=r.length;A>0;A--){let f=u.slice(0,A),[g]=ta.default.list(oa(f));g&&_===g.string&&(b=u.substring(A))}m.push(E),m.push(x),u=b,y===d.length-1&&m.push(b)})}else m.push(p);return{output:r,stringWithLinks:m.join(""),found:!0}}else return{output:p,stringWithLinks:"",found:!1}};T();T();var J4=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Vp=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Ou=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),gr=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");T();T();T();T();T();T();T();var Gp=M(require("react")),Q4=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),e6=require("formik");T();T();var t6=require("@terradharitri/sdk-dapp/constants/index"),o6=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),r6=M(require("bignumber.js"));T();T();var ra=require("@terradharitri/sdk-dapp/constants/index");function $p({feeLimit:p,rewaPriceInUsd:l}){let r=(0,Vp.formatAmount)({input:p,decimals:ra.DECIMALS,digits:ra.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,Ou.getUsdValue)({amount:r,usd:l,decimals:ra.DIGITS})}`}T();var n6=require("@terradharitri/sdk-dapp/constants/index");T();T();var Du="Token can only be transfered to one of the following addresses:",Fu="WREWA is not REWA! It can not be sent to exchanges. It can not be staked or delegated. It can not be used as transaction fee.",Yp="5000000000000000",vr="0",Mu="WREWA-bd4d79";T();var a6=require("@terradharitri/sdk-dapp/constants/index"),l6=M(require("bignumber.js"));T();var p6=require("@terradharitri/sdk-dapp/constants/index");T();var c6=require("@terradharitri/sdk-dapp/constants/index");T();T();var rr=require("@terradharitri/sdk-core"),Pu=require("@terradharitri/sdk-dapp/constants/index"),ju=M(require("bignumber.js"));function zu({amount:p,data:l,nonce:r,receiver:i,receiverUsername:d,sender:m,senderUsername:u,gasPrice:a,gasLimit:y,chainId:_}){let E=new ju.default((0,gr.parseAmount)(p));return new rr.Transaction({nonce:r,value:rr.TokenPayment.rewaFromBigInteger(E.toString(10)),sender:new rr.Address(m),receiver:new rr.Address(i),gasPrice:parseInt(a),gasLimit:parseInt(y),senderUsername:u,receiverUsername:d,data:new rr.TransactionPayload(l),chainID:_,version:new rr.TransactionVersion(Pu.VERSION)})}T();function Wu(p){return isNaN(Number(p))||p===""?(0,gr.parseAmount)("0"):(0,gr.parseAmount)(p)}function Vu(p){return so(this,null,function*(){let{address:l,balance:r,chainId:i,nonce:d,values:m}=p,{amount:u,receiver:a,data:y,gasLimit:_,gasPrice:E,nft:b,receiverUsername:x,senderUsername:A}=m,f=Boolean(b)?l:a;try{return zu({balance:r,amount:String(u),gasLimit:String(_),gasPrice:Wu(E),data:y.trim(),receiver:f,receiverUsername:x,senderUsername:A,sender:l,nonce:d,chainId:i})}catch(g){throw console.log("Prepare transaction error",g),g}})}T();var i6=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");T();var s6=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");T();var d6=M(require("bignumber.js"));T();var u6=require("@terradharitri/sdk-dapp/constants/index"),m6=require("@terradharitri/sdk-dapp/utils/smartContracts"),f6=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),_6=M(require("bignumber.js"));T();var h6=M(require("bignumber.js"));T();T();var g6=M(require("axios"));T();T();T();var Gu=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");T();var $u=require("@terradharitri/sdk-dapp/constants/index");T();var Yu={D:"devnet",T:"testnet",1:"mainnet"},Hu={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function Zu(p){return Yu[p]}function Hp(p){return Hu[p]||Mu}function Xu(p){let l=Zu(p),r=$u.fallbackNetworkConfigurations[l].apiAddress;if(!r)throw"Could not extract api address for environment, check if you have a valid chainID";return r}function Ku(p){return so(this,null,function*(){let l=Xu(p);return yield(0,Gu.getServerConfiguration)(l)})}T();var Hr={value:null};function Ju(p){return Hr.value={baseURL:p.apiAddress,timeout:Number(p.apiTimeout)},Hr.value}function Qu(p){return so(this,null,function*(){if(Hr.value!=null)return Hr.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),p!=null){let r=yield Ku(p);return Ju(r)}let l="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(l),l})}T();var na=require("@terradharitri/sdk-dapp/constants/index"),em=M(require("bignumber.js")),rp,np,ap,Zp=(0,Vp.formatAmount)({input:String((rp=na.GAS_PRICE)!=null?rp:1e9),decimals:(np=na.DECIMALS)!=null?np:18,showLastNonZeroDecimal:!0,digits:(ap=na.DIGITS)!=null?ap:4}),v6=new em.default(Zp).times(10).toString(10);T();var b6=require("@terradharitri/sdk-dapp/constants/index"),y6=M(require("bignumber.js"));T();var w6=M(require("bignumber.js"));T();T();var x6=require("yup");T();var lp=require("@terradharitri/sdk-dapp/constants/ledger.constants"),tm=M(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),ka=require("yup"),om=(0,ka.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(p){let{ledger:l}=this.parent;return!(l&&p&&p.length&&!l.ledgerDataActive)}),rm=(0,ka.string)().test({name:"hashSign",test:function(p){let{ledger:l,isGuarded:r}=this.parent;if(l){let{ledgerWithHashSign:i,ledgerWithGuardians:d}=(0,tm.default)(l.version);if(p&&p.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${lp.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(r&&!d)return this.createError({message:`You need at least DharitrI app version ${lp.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),nm=[om,rm],E6=nm.reduce((p,l)=>p.concat(l),(0,ka.string)());T();var k6=require("@terradharitri/sdk-dapp/constants/index"),S6=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),A6=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),T6=require("yup");T();var I6=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),q6=M(require("bignumber.js")),C6=require("yup");T();var N6=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),B6=M(require("bignumber.js")),L6=require("yup");T();var U6=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),R6=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),O6=M(require("bignumber.js")),D6=require("yup");T();var F6=M(require("bignumber.js")),M6=require("yup");T();var P6=require("@terradharitri/sdk-dapp/constants/index"),j6=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),z6=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),W6=M(require("bignumber.js")),V6=require("yup");T();var G6=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),$6=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Y6=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),H6=M(require("bignumber.js")),Z6=require("yup");T();var X6=M(require("bignumber.js")),K6=require("yup");T();var J6=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Q6=require("yup");T();var ex=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),tx=require("yup");T();T();var am=(0,Gp.createContext)({});function Xp(){return(0,Gp.useContext)(am)}T();T();var lm=M(require("react")),ox=require("formik"),rx=M(require("lodash/uniqBy"));T();T();T();var nx=M(require("axios"));T();T();var pm=M(require("axios"));function cm(){return so(this,null,function*(){try{let p=yield Qu(),{data:l}=yield pm.default.get("economics",p);return l}catch(p){return console.error("err fetching economics info",p),null}})}T();T();var ax=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),lx=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),px=M(require("axios")),cx=M(require("lodash/uniqBy"));T();var ix=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),sx=M(require("axios"));T();var dx=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),ux=M(require("axios"));T();T();var Kp=M(require("react")),im=(0,Kp.createContext)({});function Jr(){return(0,Kp.useContext)(im)}T();T();var pp=require("react"),sm=require("@terradharitri/sdk-dapp/constants/index"),aa=require("@terradharitri/sdk-dapp/types/enums.types");function dm(){let{networkConfig:p}=Jr(),[l,r]=(0,pp.useState)(0);function i(){return so(this,null,function*(){let d=yield cm(),m=(d==null?void 0:d.price)||0;r(m)})}return(0,pp.useEffect)(()=>{![aa.EnvironmentsEnum.mainnet,aa.EnvironmentsEnum.testnet,aa.EnvironmentsEnum.devnet].includes(p==null?void 0:p.id)||i()},[p==null?void 0:p.id]),{rewaLabel:p.rewaLabel,rewaPriceInUsd:l,digits:sm.DIGITS}}T();var mx=(0,lm.createContext)({});T();T();var fx=require("@terradharitri/sdk-dapp/constants/index"),_x=require("formik");T();T();var um=M(require("react")),hx=require("@terradharitri/sdk-dapp/constants/index"),gx=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),vx=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),bx=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),yx=M(require("bignumber.js")),wx=require("formik");T();T();T();T();var xx=M(require("bignumber.js"));T();var Ex=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),kx=M(require("bignumber.js"));T();T();var Sx=require("react"),Ax=require("@terradharitri/sdk-dapp/constants/index"),Tx=require("@terradharitri/sdk-dapp/utils/smartContracts"),Ix=M(require("bignumber.js")),qx=require("formik");T();var Cx=require("react");T();T();var Nx=require("@terradharitri/sdk-dapp/constants/index"),Bx=M(require("bignumber.js")),Lx=(0,um.createContext)({}),Ux=(0,qu.createContext)({});T();T();var mm=M(require("react")),Rx=require("formik"),Ox=(0,mm.createContext)({});T();T();var Jp=M(require("react")),Dx=require("formik");T();T();T();var Fx=require("react"),Mx=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Px=M(require("lodash/uniqBy"));T();T();var jx=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),zx=require("@terradharitri/sdk-dapp/utils");T();var Wx=require("react");T();var Vx=require("react"),Gx=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),fm=(0,Jp.createContext)({});function _m(){return(0,Jp.useContext)(fm)}T();T();var Qp=M(require("react")),$x=require("formik");T();T();var hm=({knownAddresses:p,inputValue:l,key:r})=>!p||!l?!1:p.some(i=>{var d;return Boolean((d=i[r])==null?void 0:d.startsWith(l))});T();T();T();var Yx=require("react"),Hx=require("@terradharitri/sdk-dapp/utils");T();var Zx=require("react"),Xx=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");T();T();var Kx=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Jx=M(require("axios"));T();var Qx=M(require("axios")),gm=(0,Qp.createContext)({});function ec(){return(0,Qp.useContext)(gm)}var vm=(0,Wp.createContext)({});function lt(){return(0,Wp.useContext)(vm)}T();T();var la=M(require("react")),bm=M(require("classnames"));T();T();T();var at=M(require("react")),ym=require("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");T();var eE=M(require("react")),tE=require("@terradharitri/sdk-dapp/constants/index");T();var wm=require("react");T();T();var to=M(require("react")),cp=require("@terradharitri/sdk-dapp/constants/index"),ip=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),xm=require("@terradharitri/sdk-dapp/UI/UsdValue/index");T();T();var $t=M(require("react")),Em=require("@fortawesome/free-solid-svg-icons"),km=require("@fortawesome/react-fontawesome"),sp=M(require("classnames"));T();var Sm=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sm));var qo={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"},Am=(Kr(),cr(wr)).default,tc=p=>{let{avatar:l,type:r}=p;return r==="NonFungibleDCDT"?$t.default.createElement("div",{className:(0,sp.default)(qo.tokenAvatar,qo.tokenAvatarNFT)},"NFT"):r==="SemiFungibleDCDT"?$t.default.createElement("div",{className:(0,sp.default)(qo.tokenAvatar,qo.tokenAvatarSFT)},"SFT"):r==="REWA"?$t.default.createElement("div",{className:qo.tokenAvatar},p.RewaIcon?$t.default.createElement(p.RewaIcon,null):$t.default.createElement(Am,null)):l?$t.default.createElement("div",{className:qo.tokenAvatar},$t.default.createElement("img",{src:l})):$t.default.createElement("div",{className:qo.tokenAvatar},$t.default.createElement(km.FontAwesomeIcon,{icon:Em.faDiamond}))};T();var Tm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Tm));var Pr={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},Im=({label:p="Amount",amount:l,txType:r,tokenDecimals:i,tokenId:d,rewaLabel:m,rewaPriceInUsd:u,nft:a,tokenAvatar:y})=>{let _=(a==null?void 0:a.decimals)||0,E=r==="DCDT",b=r==="MetaDCDT",x=r==="NonFungibleDCDT",A=b?(0,gr.parseAmount)(l,a==null?void 0:a.decimals):l,f=Boolean(a&&l),g=d.split("-")[0],w=E?i:cp.DECIMALS,v=f?to.default.createElement(ip.FormatAmount,{rewaLabel:m,value:A,decimals:_,digits:r==="MetaDCDT"?cp.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):to.default.createElement(ip.FormatAmount,{rewaLabel:m,value:(0,gr.parseAmount)(l,w),showLabel:!1,decimals:w,showLastNonZeroDecimal:!0,token:E?g:m,"data-testid":"confirmAmount"});return x?null:to.default.createElement("div",{className:Pr.amount},to.default.createElement("span",{className:ue.label},p),to.default.createElement("div",{className:Pr.token},to.default.createElement(tc,{type:r,avatar:y}),to.default.createElement("div",{className:Pr.value},v," ",g)),!E&&to.default.createElement(xm.UsdValue,{amount:l,usd:u,"data-testid":"confirmUsdValue",className:Pr.price}))};T();T();var Le=M(require("react")),qm=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");T();var Cm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cm));var jr={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"},Nm=(p,l)=>[...p.matchAll(new RegExp(l,"gi"))].map(r=>r.index),Bm=({label:p="Data",scCallLabel:l="SC Call",data:r,highlight:i,isScCall:d})=>{let m=Le.default.createElement(Le.default.Fragment,null,r),[u,...a]=i&&d?i.split("@"):[];if(r&&i&&Nm(r,i).length===1)switch(!0){case r.startsWith(i):{let[,y]=r.split(i);m=Le.default.createElement(Le.default.Fragment,null,i,Le.default.createElement("span",null,y));break}case r.endsWith(i):{let[y]=r.split(i);m=Le.default.createElement(Le.default.Fragment,null,Le.default.createElement("span",null,y),i);break}default:{let[y,_]=r.split(i);m=Le.default.createElement(Le.default.Fragment,null,Le.default.createElement("span",null,y),i,Le.default.createElement("span",null,_));break}}return Le.default.createElement(Le.default.Fragment,null,u&&Le.default.createElement("div",{className:jr.data},Le.default.createElement("span",{className:ue.label},l),Le.default.createElement("div",{"data-testid":"confirmScCall",className:jr.value},[(0,qm.decodePart)(u),...a].join("@"))),Le.default.createElement("div",{className:jr.data},Le.default.createElement("span",{className:ue.label},p),Le.default.createElement("div",{"data-testid":"confirmData",className:jr.value},r?m:"N/A")))};T();T();var Co=M(require("react")),Lm=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");T();var Um=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Um));var zr={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},Rm=({rewaPriceInUsd:p,label:l="Fee",feeLimit:r,rewaLabel:i})=>Co.default.createElement("div",{className:zr.fee},Co.default.createElement("span",{className:ue.label},l),Co.default.createElement("div",{className:zr.token},Co.default.createElement(tc,{type:"REWA"}),Co.default.createElement("div",{className:zr.value},Co.default.createElement(Lm.FormatAmount,{rewaLabel:i,value:r,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),r!==vr&&Co.default.createElement("span",{className:zr.price},$p({feeLimit:r,rewaPriceInUsd:p})));T();T();var bt=M(require("react")),Om=require("@fortawesome/free-solid-svg-icons"),Dm=require("@fortawesome/react-fontawesome"),Fm=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Mm=require("@terradharitri/sdk-dapp/UI/CopyButton"),Pm=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),jm=require("@terradharitri/sdk-dapp/UI/Trim"),zm=M(require("classnames"));T();var{default:br}=(ku(),cr(Pp));T();var Wm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wm));var Mt={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"},Vm=({label:p="Receiver",receiver:l,scamReport:r,receiverUsername:i})=>{let d=Boolean(i),m=i!=null?i:l;return bt.default.createElement("div",{className:Mt.confirmReceiver},bt.default.createElement("span",{className:ue.label},p),bt.default.createElement("span",{className:(0,zm.default)(Mt.value,{[Mt.shrunk]:d}),"data-testid":"confirmReceiver"},d&&bt.default.createElement(br,{className:Mt.icon}),m,d&&bt.default.createElement(Pm.ExplorerLink,{page:`/${Fm.ACCOUNTS_ENDPOINT}/${l}`,className:Mt.explorer})),d&&bt.default.createElement("span",{className:Mt.subValue},bt.default.createElement(jm.Trim,{text:l,className:Mt.subValueTrim}),bt.default.createElement(Mm.CopyButton,{text:l,className:Mt.subValueCopy})),r&&bt.default.createElement("div",{className:Mt.scam},bt.default.createElement("span",null,bt.default.createElement(Dm.FontAwesomeIcon,{icon:Om.faExclamationTriangle,className:Mt.icon}),bt.default.createElement("small",{"data-testid":"confirmScamReport"},r))))};T();T();var No=M(require("react"));T();T();var Ye=M(require("react")),Gm=require("@fortawesome/free-solid-svg-icons"),$m=require("@fortawesome/react-fontawesome"),Ym=M(require("@terradharitri/sdk-dapp/constants/index")),Hm=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Zm=M(require("classnames"));T();var Xm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xm));var nr={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},Km=(Kr(),cr(wr)).default,dp=({RewaIcon:p,inDropdown:l=!1,isRewa:r,nftTokenDetails:i,nftType:d,token:m})=>{var u,a;let{name:y,identifier:_,balance:E,decimals:b}=m,x=((u=m.assets)==null?void 0:u.svgUrl)||((a=m.assets)==null?void 0:a.pngUrl)||"",A=x?28:20,[f,g]=(0,Ye.useState)(y);(0,Ye.useEffect)(()=>{var k;(k=i==null?void 0:i.uris)!=null&&k.some(U=>{let O=Fp.Buffer.from(String(U),"base64").toString(),{found:L}=Ru(O,i==null?void 0:i.scamInfo);return L})||g(y)},[y]);let w=Ye.default.createElement($m.FontAwesomeIcon,{icon:Gm.faDiamond});d==Fo.NftEnumType.NonFungibleDCDT&&(w=Ye.default.createElement("div",{className:"nft-type","data-testid":`${_}-type-nft`},"NFT")),d===Fo.NftEnumType.SemiFungibleDCDT&&(w=Ye.default.createElement("div",{className:"nft-type","data-testid":`${_}-type-sft`},"SFT"));let v=!l&&d!==Fo.NftEnumType.NonFungibleDCDT,S=Ye.default.createElement("div",{className:nr.tokenElementCircle},w);return x&&(S=Ye.default.createElement("img",{className:nr.tokenElementCircle,src:x,alt:y,height:A})),r&&(S=Ye.default.createElement("div",{className:nr.tokenElementCircle},p?Ye.default.createElement(p,{height:36}):Ye.default.createElement(Km,{height:36}))),Ye.default.createElement("div",{className:(0,Zm.default)(ue.value,nr.tokenElement)},Ye.default.createElement("div",{className:nr.tokenElementWrapper},S),Ye.default.createElement("div",{"data-testid":"tokenName"},Ye.default.createElement("span",{"data-testid":`${_}-element`},Ye.default.createElement("span",null,f)," ",Ye.default.createElement("span",{className:nr.tokenElementIdentifier},_)),v&&Ye.default.createElement(Hm.FormatAmount,{rewaLabel:_,value:E||vr,digits:d===Fo.NftEnumType.SemiFungibleDCDT?0:Ym.DIGITS,token:_,showLabel:!1,decimals:b,"data-testid":`${_}-balance`})))};T();var Jm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jm));var Qm={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"},ef=({RewaIcon:p,rewaLabel:l,isDcdtTransaction:r,nft:i,tokenAvatar:d,tokenId:m,tokenIdError:u})=>{var a;let y=(i==null?void 0:i.name)||"";return No.default.createElement("div",{className:Qm.token},No.default.createElement("span",{className:ue.label},i?No.default.createElement("span",null,i==null?void 0:i.name," "):"","Token"),No.default.createElement("div",null,i?No.default.createElement(dp,{inDropdown:!0,token:{name:i==null?void 0:i.name,identifier:i==null?void 0:i.identifier,decimals:0,balance:vr,ticker:"",assets:{svgUrl:((a=i==null?void 0:i.assets)==null?void 0:a.svgUrl)||""}}}):No.default.createElement(dp,{inDropdown:!0,token:{name:r?y:"DharitrI eGold",identifier:r?m:l,decimals:0,balance:vr,ticker:"",assets:{svgUrl:d||""}},isRewa:m===l,RewaIcon:p})),u&&No.default.createElement("div",{className:ue.error},u))},pr=class extends wm.Component{render(){return null}};pr.Receiver=Vm,pr.Amount=Im,pr.Fee=Rm,pr.Data=Bm,pr.Token=ef;var pa=pr;T();T();var oo=M(require("react")),up=M(require("classnames"));T();var tf=`.dapp-core-component__styles-module__preview {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(tf));var Et={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"},oc=p=>{let l=p,{txType:r,onClick:i,identifier:d}=l,m=Op(l,["txType","onClick","identifier"]),{name:u,thumbnail:a}=Uu({nft:m}),y=["NonFungibleDCDT","SemiFungibleDCDT"].includes(r),_=r==="NonFungibleDCDT"?"NFT":"SFT",E=b=>{b.preventDefault(),i&&i(b,Object.assign(m,{identifier:d}))};return y?oo.default.createElement("div",{onClick:E,"data-testid":"token-preview",className:(0,up.default)(Et.preview,{[Et.clickable]:Boolean(i)})},oo.default.createElement("img",{src:a,className:Et.image}),oo.default.createElement("div",{className:Et.content},oo.default.createElement("div",{className:Et.left},oo.default.createElement("div",{"data-testid":"token-preview-name",className:Et.name},u),oo.default.createElement("div",{"data-testid":"token-preview-identifier",className:Et.identifier},d)),oo.default.createElement("div",{className:Et.right},oo.default.createElement("div",{className:(0,up.default)(Et.badge,{[Et.nft]:r==="NonFungibleDCDT",[Et.sft]:r==="SemiFungibleDCDT"})},_)))):null};T();var of=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(of));var Do={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};T();T();var ca=require("@terradharitri/sdk-dapp/types/enums.types"),rf=({providerType:p,hasGuardianScreen:l})=>l?"Confirm & Continue":p===ca.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":p===ca.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":p===ca.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";T();var nf=({receiverAddress:p,knownAddresses:l,existingReceiverUsername:r})=>{if(r)return r;let i=l==null?void 0:l.find(d=>d.address===p);return i==null?void 0:i.username},af=({isConfirmCloseBtnVisible:p=!0,providerType:l})=>{var r;let{setIsGuardianScreenVisible:i}=Xp(),{receiverUsernameInfo:{receiverUsername:d},receiverInfo:{scamError:m,receiver:u,knownAddresses:a},formInfo:y,gasInfo:{gasCostError:_,feeLimit:E},accountInfo:{isGuarded:b},dataFieldInfo:{data:x},amountInfo:A,tokensInfo:f}=lt(),{tokenId:g,tokenDetails:w,nft:v,rewaPriceInUsd:S,rewaLabel:k}=f,{readonly:U,onCloseForm:O,onInvalidateForm:L,onPreviewClick:J,onSubmitForm:ee,txType:te,hasGuardianScreen:Q}=y,pe=()=>{i(!0)},[ne,H]=(0,at.useState)(!1),Y=te==="NonFungibleDCDT",X=rf({providerType:l,hasGuardianScreen:Q}),ce=me=>{me.preventDefault(),U?O():L()},ie=()=>{if(b&&Q)return pe();H(!0),ee()},be=!["REWA","DCDT","MetaDCDT"].includes(te),he=nf({knownAddresses:a,receiverAddress:u,existingReceiverUsername:d});return at.default.createElement("div",{className:Do.summary},at.default.createElement("div",{className:Do.fields},be&&v&&at.default.createElement(oc,xe({onClick:J,txType:te},v)),at.default.createElement(ym.ConfirmReceiver,{amount:A.amount,scamReport:m!=null?m:null,receiver:u,receiverUsername:he}),at.default.createElement("div",{className:Do.columns},!Y&&at.default.createElement("div",{className:Do.column},at.default.createElement(pa.Amount,{txType:te,tokenId:g,tokenDecimals:w.decimals,amount:String(A.amount),nft:v,rewaPriceInUsd:S,rewaLabel:k,tokenLabel:w.name,tokenAvatar:((r=w.assets)==null?void 0:r.svgUrl)||""})),at.default.createElement("div",{className:Do.column},at.default.createElement(pa.Fee,{rewaLabel:k,rewaPriceInUsd:S,feeLimit:E}))),at.default.createElement(pa.Data,{data:x}),_&&at.default.createElement("p",{className:ue.error},_)),at.default.createElement("div",{className:Do.buttons},at.default.createElement("button",{className:ue.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:ne,onClick:ie},X),p&&at.default.createElement("button",{className:ue.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:ce},U?"Close":"Back")))},lf=p=>{let{formInfo:{setHasGuardianScreen:l}}=lt();return(0,la.useEffect)(()=>{p.hasGuardianScreen&&l(!0)},[]),la.default.createElement("div",{className:(0,bm.default)(Do.confirm,p.className),"data-testid":"confirmScreen"},la.default.createElement(af,xe({},p)))};T();T();T();var Fe=M(require("react")),mp=require("@fortawesome/free-solid-svg-icons"),fp=require("@fortawesome/react-fontawesome"),ia=M(require("classnames")),pf=require("formik"),cf=M(require("react-select"));T();T();var sf=M(require("react")),df=require("react-select");T();var uf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(uf));var ae={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"},mf=p=>sf.default.createElement(df.components.Control,je(xe({},p),{className:ae.receiverSelectControl}));T();T();var sa=M(require("react")),ff=require("@fortawesome/free-solid-svg-icons"),_f=require("@fortawesome/react-fontawesome"),hf=M(require("classnames")),gf=require("react-select");T();T();var Sa=(p,l)=>{let r=l.toLowerCase(),i=p.label.toLowerCase(),d=p.value.toLowerCase();return l?i.includes(r)||d.includes(r):!0};T();var vf=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),bf=require("@terradharitri/sdk-dapp/utils"),_p=p=>p?p.filter(l=>(0,bf.addressIsValid)(l.address)).map(l=>{let r=l.username?String((0,vf.trimUsernameDomain)(l.username)):l.address;return{value:l.address,label:r}}):[];T();var yf=({setOption:p,setAllValues:l})=>(r,i)=>{["input-blur","menu-close"].includes(i.action)||(l(r),r||p(null))};T();var wf=({setInputValue:p,setOption:l,changeAndBlurInput:r})=>i=>{!i||(l(i),r(i.value),i.value!==i.label?p(i.label):p(i.value))};T();var xf=({options:p,usernameAccounts:l,knownAddresses:r,setFieldValue:i,setInputValue:d,setOption:m})=>u=>{var a,y,_,E;let b=p.find(S=>S.value===u&&S.value!==S.label),x=b==null?void 0:b.label,A,f,g=(a=l[u])==null?void 0:a.username;g&&(x=g,A=g,f=(y=l[u])==null?void 0:y.rawUsername);let w=r.find(S=>S.address===u);w!=null&&w.username&&(x=w==null?void 0:w.username,A=w==null?void 0:w.username,f=w==null?void 0:w.rawUsername);let v=x!=null?x:u;d(v),m({value:u,label:v}),i("receiver",(E=(_=l[u])==null?void 0:_.address)!=null?E:u),i("receiverUsername",A),i("rawReceiverUsername",f)},Ef=p=>{let{selectProps:l,isDisabled:r,options:i}=p,{menuIsOpen:d,value:m,isLoading:u}=l,a=(0,sa.useMemo)(()=>i.find(b=>{let x=b,A=m;return A?Sa(x,A.label):null}),[m,i]),y=i.length===0&&!u,_=Boolean(m)&&!a,E=r||y||_;return u?sa.default.createElement(_f.FontAwesomeIcon,{icon:ff.faSpinner,spin:!0,className:ae.receiverSelectSpinner}):sa.default.createElement(gf.components.DropdownIndicator,je(xe({},p),{className:(0,hf.default)(ae.receiverSelectIndicator,{[ae.expanded]:d,[ae.hidden]:E})}))};T();T();var kf=M(require("react")),Sf=require("@terradharitri/sdk-dapp/utils"),Af=M(require("classnames")),Tf=require("react-select");T();T();var If=(p,l)=>{let r=p.current;if(!r||!r.state.focusedOption)return!1;let i=r.state.focusedOption,d=i.label.toLowerCase(),m=i.value.toLowerCase(),u=d!==m,a=u&&d.startsWith(l.toLowerCase());return u&&!l?!0:a},qf=p=>l=>{let{selectProps:r,value:i}=l,{inputValue:d,menuIsOpen:m}=r,{receiverUsernameInfo:{receiverUsername:u}}=lt(),a=If(p,d),y=(0,Sf.addressIsValid)(String(i)),_=Boolean(u)||a,E=y&&m||!y&&d;return kf.default.createElement(Tf.components.Input,je(xe({},l),{"data-testid":"receiver",className:(0,Af.default)(ae.receiverSelectInput,{[ae.visible]:E,[ae.spaced]:_})}))};T();T();var Cf=M(require("react")),Nf=require("react-select"),Bf=p=>Cf.default.createElement(Nf.components.Menu,je(xe({},p),{className:ae.receiverSelectMenu}));T();T();var Qe=M(require("react")),da=require("@terradharitri/sdk-dapp/UI/Trim"),Wr=M(require("classnames")),Lf=require("react-select"),Uf=p=>{let{selectProps:l,focusedOption:r}=p,{value:i,inputValue:d}=l,m=r,u=m?m.label.toLowerCase():null,a=m&&m.label!==m.value,y=(u&&(!i||i&&d)?u.startsWith(d.toLowerCase()):!1)&&m?m.label.replace(m.label.substring(0,d.length),d):null,_=y&&!d,E=y&&d.length<y.length/2,b=y&&Boolean(d)&&E,x=y&&Boolean(d);return Qe.default.createElement(Qe.default.Fragment,null,b&&!a&&Qe.default.createElement("div",{className:(0,Wr.default)(ae.receiverSelectAutocomplete,ae.receiverSelectAutocompleteUntrimmed)},y),x&&a&&Qe.default.createElement("div",{className:(0,Wr.default)(ae.receiverSelectAutocomplete,ae.receiverSelectAutocompleteUsername)},Qe.default.createElement(br,{className:ae.receiverSelectAutocompleteIcon}),y,Qe.default.createElement("span",{className:ae.receiverSelectAutocompleteWrapper},"(",Qe.default.createElement(da.Trim,{text:m.value}),")")),_&&Qe.default.createElement("span",{className:(0,Wr.default)(ae.receiverSelectAutocomplete,{[ae.receiverSelectAutocompleteUsername]:a})},a?Qe.default.createElement(Qe.default.Fragment,null,Qe.default.createElement("span",null,Qe.default.createElement(br,{className:(0,Wr.default)(ae.receiverSelectAutocompleteIcon,ae.receiverSelectAutocompleteIconMuted)}),m.label),Qe.default.createElement("span",{className:ae.receiverSelectAutocompleteWrapper},"(",Qe.default.createElement(da.Trim,{text:m.value}),")")):Qe.default.createElement(da.Trim,{text:y})),Qe.default.createElement(Lf.components.MenuList,je(xe({},p),{className:ae.receiverSelectList})))};T();T();var Yt=M(require("react")),hp=require("@terradharitri/sdk-dapp/UI/Trim"),Rf=M(require("classnames")),Of=require("react-select");T();T();var Vr=M(require("react"));T();var Df=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Df));var Ff={highlight:"dapp-core-component__styles-modules__highlight"},rc=({highlight:p,text:l=""})=>{let r=l.split(" "),i=p.toLowerCase(),d=new RegExp(`(${i})`,"gi"),m=r.map(u=>u.split(d).filter(a=>a));return Vr.default.createElement("span",{className:Ff.highlight},m.map((u,a)=>{let y=`${u}-${a}`;return Vr.default.createElement("span",{key:y},u.map((_,E)=>{let b=_.toLowerCase()===i,x=i&&b,A=`${_}-${E}`;return x?Vr.default.createElement("strong",{key:A},_):Vr.default.createElement("span",{key:A},_)}))}))},Mf=p=>{let{isFocused:l,data:r,selectProps:i}=p,{inputValue:d}=i,m=r,u=m.value!==m.label;return Yt.default.createElement(Of.components.Option,je(xe({},p),{className:(0,Rf.default)(ae.receiverSelectOption,{[ae.focused]:l})}),u?Yt.default.createElement(Yt.default.Fragment,null,Yt.default.createElement("span",{className:ae.receiverSelectOptionUsername},Yt.default.createElement(br,{className:ae.receiverSelectOptionUsernameIcon}),Yt.default.createElement(rc,{text:m.label,highlight:d})),Yt.default.createElement("span",{className:ae.receiverSelectOptionNameWrapper},"(",Yt.default.createElement(hp.Trim,{text:m.value,className:ae.receiverSelectOptionName}),")")):Yt.default.createElement(hp.Trim,{text:m.value,className:ae.receiverSelectOptionName}))};T();T();var Pf=M(require("react")),jf=M(require("classnames")),zf=require("react-select"),Wf=p=>{let{selectProps:l,isFocused:r,className:i}=p,{menuIsOpen:d}=l;return Pf.default.createElement(zf.components.SelectContainer,je(xe({},p),{className:(0,jf.default)(i,{[ae.expanded]:d,[ae.focused]:r&&d})}))};T();T();var Ht=M(require("react")),gp=require("@terradharitri/sdk-dapp/UI/Trim"),Vf=require("@terradharitri/sdk-dapp/utils"),Gf=M(require("classnames")),$f=require("react-select"),Yf=p=>{let{selectProps:l,isDisabled:r}=p,{value:i,menuIsOpen:d}=l,m=i,{receiverInfo:{receiver:u},receiverUsernameInfo:{receiverUsername:a}}=lt(),y=a!=null?a:m&&m.value!==m.label,_=m?{value:u!=null?u:m.value,label:m.label}:null,E=_&&(y||!y&&!d)&&(0,Vf.addressIsValid)(_.value);return Ht.default.createElement($f.components.ValueContainer,je(xe({},p),{className:ae.receiverSelectValue}),E&&Ht.default.createElement("span",{className:(0,Gf.default)(ae.receiverSelectSingle,{[ae.disabled]:r})},y?Ht.default.createElement(Ht.default.Fragment,null,Ht.default.createElement("span",{className:ae.receiverSelectSingleUsername},Ht.default.createElement(br,{className:ae.receiverSelectSingleUsernameIcon}),_.label),Ht.default.createElement("span",{className:ae.receiverSelectSingleTrimWrapper},"(",Ht.default.createElement(gp.Trim,{text:_.value,className:ae.receiverSelectSingleTrim}),")")):Ht.default.createElement(gp.Trim,{text:_.value,className:ae.receiverSelectSingleTrim})),p.children)};T();T();var Hf=require("formik"),nc=()=>{let{receiverInfo:{receiverError:p,isReceiverInvalid:l},receiverUsernameInfo:{receiverUsernameError:r,isReceiverUsernameInvalid:i,receiverUsername:d}}=lt(),{touched:{receiver:m}}=(0,Hf.useFormikContext)(),u=l&&m||i;return d!=null&&d.startsWith("drt1")?{isInvalid:l,receiverErrorDataTestId:"receiverError",error:p}:{isInvalid:u,receiverErrorDataTestId:i?"receiverUsernameError":"receiverError",error:i?r:p}};T();T();var Zf=require("@terradharitri/sdk-dapp/utils"),Xf=require("formik");T();T();var Kf=({knownAddresses:p,inputValue:l})=>!p||!l?!1:p.filter(r=>{var i;let d=(i=r.username)!=null?i:r.address,m=r.address;return Sa({label:d,value:m,data:{label:d,value:m}},l)}).length>0,Jf=({menuIsOpen:p})=>{let{isInvalid:l}=nc(),{values:{nft:r}}=(0,Xf.useFormikContext)(),{showUsernameError:i,isUsernameLoading:d,isUsernameDebouncing:m,usernameIsAmongKnown:u,searchQueryIsAddress:a}=ec(),{receiverInputValue:y,knownAddresses:_}=_m(),E=hm({key:"address",knownAddresses:_,inputValue:y}),b=Kf({inputValue:y,knownAddresses:_}),x=a&&(!E||!p)&&!(0,Zf.addressIsValid)(y),A=Boolean(i&&!(p&&E)&&!(p&&u));return{isAddressError:x||(r?l:!1),isUsernameError:A,isRequiredError:l&&!A&&!d&&!m&&!x&&!b&&!y,isReceiverDropdownOpened:y&&b&&p}},Qf=p=>{let l=(0,Fe.useRef)(null),{className:r}=p,{setFieldValue:i}=(0,pf.useFormikContext)(),{receiverInfo:{scamError:d,fetchingScamAddress:m,receiverInputValue:u,setReceiverInputValue:a,knownAddresses:y,receiver:_,onBlurReceiver:E,onChangeReceiver:b},receiverUsernameInfo:{receiverUsername:x},formInfo:{readonly:A}}=lt(),[f,g]=(0,Fe.useState)(!1),[w,v]=(0,Fe.useState)(_?{label:_,value:_}:null),{receiverErrorDataTestId:S,error:k}=nc(),{isAddressError:U,isUsernameError:O,isRequiredError:L,isReceiverDropdownOpened:J}=Jf({menuIsOpen:f}),{usernameAccounts:ee,isUsernameLoading:te}=ec(),Q=()=>{E(new Event("blur"));let N=y==null?void 0:y.find(F=>F.username===u&&F.address===_);N&&(i("receiver",N.address),i("receiverUsername",N.username),i("rawReceiverUsername",N.rawUsername))},pe=y==null?void 0:y.find(N=>N.username===u&&N.address===_),ne=(0,Fe.useMemo)(()=>_p(y),[y]),H=pe?_p([pe]):ne,Y=xf({setFieldValue:i,setInputValue:a,setOption:v,options:H,knownAddresses:y!=null?y:[],usernameAccounts:ee}),X=(0,Fe.useCallback)(yf({setAllValues:Y,setOption:v}),[]),ce=(0,Fe.useCallback)(N=>{b(N?N.trim():""),setTimeout(Q)},[]),ie=wf({changeAndBlurInput:ce,setOption:v,setInputValue:a}),be=(0,Fe.useMemo)(()=>qf(l),[l]);(0,Fe.useEffect)(()=>{if(!_)return;let N=Object.keys(ee).find(F=>{var ve;return((ve=ee[F])==null?void 0:ve.address)===_});Y(N!=null?N:_),N&&a(N)},[ee,_]);let he=U||O||L,me=he&&!f;return Fe.default.createElement("div",{className:(0,ia.default)(ae.receiver,r)},Fe.default.createElement("div",{className:ue.label,"data-testid":"receiverLabel","data-loading":m},"Receiver"),Fe.default.createElement(cf.default,{value:w,onInputChange:X,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:Mo("receiver",A),options:H,filterOption:Sa,noOptionsMessage:()=>null,onChange:ie,onBlur:Q,isMulti:!1,ref:l,inputValue:u,onMenuClose:()=>g(!1),onMenuOpen:()=>g(!0),components:{Menu:Bf,Input:be,Control:mf,ValueContainer:Yf,DropdownIndicator:Ef,SelectContainer:Wf,MenuList:Uf,Option:Mf,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,ia.default)(ae.receiverSelectContainer,{[ae.opened]:J,[ae.invalid]:he||d})}),me&&Fe.default.createElement("div",{"data-testid":S,className:ue.error},k),te&&Fe.default.createElement("div",{className:ae.loading},"Loading..."),x&&Fe.default.createElement("span",{className:ae.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",Fe.default.createElement(fp.FontAwesomeIcon,{icon:mp.faCheck,className:ae.foundIcon})),d&&Fe.default.createElement("div",{"data-testid":"receiverScam",className:(0,ia.default)(ue.error,ue.scam)},Fe.default.createElement("span",null,Fe.default.createElement(fp.FontAwesomeIcon,{icon:mp.faExclamationTriangle}),Fe.default.createElement("small",null,d))))};T();T();var kt=M(require("react")),e_=M(require("bignumber.js")),ua=M(require("classnames"));T();var t_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(t_));var Bo={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"},o_=p=>{let{className:l}=p,{formInfo:{readonly:r},amountInfo:i,tokensInfo:d}=lt(),{amount:m,error:u,onFocus:a,onBlur:y,onChange:_,isInvalid:E,onMaxClicked:b,maxAmountAvailable:x,isMaxButtonVisible:A}=i,{nft:f}=d,g=f!=null&&f.balance?new e_.default(f.balance).isGreaterThan(0):!1,w=v=>{v.preventDefault(),b()};return kt.default.createElement("div",{className:(0,ua.default)(Bo.amount,l)},kt.default.createElement("div",{className:Bo.label},kt.default.createElement("label",{htmlFor:"amount",className:ue.label},"Amount"),g&&f&&kt.default.createElement("div",{"data-value":`${x} ${f.identifier}`,className:(0,ua.default)(Bo.balance,l)},kt.default.createElement("span",null,"Available:")," ",kt.default.createElement("span",{"data-testid":`available-${f.identifier}`,className:Bo.available},kt.default.createElement("span",{className:Bo.amount},x)," ",f.ticker))),kt.default.createElement("div",{className:Bo.wrapper},kt.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:m,disabled:Mo("amount",r),onFocus:a,onBlur:y,onChange:_,autoComplete:"off",className:(0,ua.default)(ue.input,{[ue.invalid]:E,[ue.disabled]:Mo("amount",r)})}),A&&kt.default.createElement("a",{href:"/","data-testid":"maxBtn",className:Bo.max,onClick:w,onMouseDown:v=>{v.preventDefault()}},"Max")),E&&kt.default.createElement("div",{className:ue.error,"data-testid":"amountError"},u))};T();T();var mt=M(require("react")),vp=require("@fortawesome/free-solid-svg-icons"),bp=require("@fortawesome/react-fontawesome"),r_=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),yp=M(require("classnames")),n_=M(require("react-collapsed"));T();var ro=M(require("react")),a_=require("@fortawesome/free-solid-svg-icons"),l_=require("@fortawesome/react-fontawesome"),p_=M(require("bignumber.js")),wp=M(require("classnames")),c_=require("react-number-format");T();T();var Lo=require("@terradharitri/sdk-dapp/constants/index"),i_=require("@terradharitri/sdk-dapp/utils/validation"),no=M(require("bignumber.js")),s_=(p,l)=>{let r=l!=null?l:Lo.DIGITS;if((0,i_.stringIsFloat)(p)){if(new no.default(p).isZero())return"0";let i=new no.default(p).toFormat(r);return i=parseFloat(i)>0?i:new no.default(p).toFormat(Lo.DIGITS),i=parseFloat(i)>0?i:new no.default(p).toFormat(Lo.DIGITS+2),i=parseFloat(i)>0?i:new no.default(p).toFormat(Lo.DIGITS+4),i=parseFloat(i)>0?i:new no.default(p).toFormat(Lo.DIGITS+6),i=parseFloat(i)>0?i:new no.default(p).toFormat(Lo.DIGITS+10),parseFloat(i)>0?i:new no.default(p).toFormat(Lo.DIGITS+14)}return"0"};T();var xp=p=>p.replace(/,/g,"");T();var Ep=require("react"),d_={value:"",count:0},u_=(p,l)=>{let[r,i]=(0,Ep.useState)(d_);return(0,Ep.useEffect)(()=>{let d=setTimeout(()=>{i(p)},l);return()=>clearTimeout(d)},[p.count]),r};T();var m_=M(require("bignumber.js")),Aa=p=>{let[l,r]=p.split(""),i=new m_.default(l).isZero();return Boolean(i&&r&&r!==".")};T();var f_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(f_));var tt={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},__=()=>{let{formInfo:p,gasInfo:l}=lt(),{readonly:r}=p,{defaultGasLimit:i,onResetGasLimit:d,onChangeGasLimit:m,onBlurGasLimit:u,gasLimit:a,gasLimitError:y,isGasLimitInvalid:_}=l,E=g=>{g.preventDefault(),d()},b=({value:g,floatValue:w})=>(!w||!(0,p_.default)(w).isNaN())&&!Aa(g),x=g=>{m(g.value,!0)},A=a!==i&&!r,f=Mo("gasLimit",r);return ro.default.createElement("div",{className:tt.gas},ro.default.createElement("label",{className:ue.label,htmlFor:"gasLimit"},"Gas Limit"),ro.default.createElement("div",{className:tt.wrapper},ro.default.createElement(c_.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:f,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:u,onValueChange:x,required:!0,isAllowed:b,thousandSeparator:",",thousandsGroupStyle:"thousand",value:a,valueIsNumericString:!0,allowNegative:!1,className:(0,wp.default)(ue.input,tt.input,{[ue.disabled]:f,[ue.invalid]:_,[tt.spaced]:A})}),A&&ro.default.createElement("div",{className:tt.actions},ro.default.createElement("div",{onClick:E,"data-testid":"gasLimitResetBtn",className:(0,wp.default)(tt.action,{[tt.disabled]:f})},ro.default.createElement(l_.FontAwesomeIcon,{icon:a_.faUndo,className:tt.icon}))),_&&ro.default.createElement("div",{className:ue.error,"data-testid":"gasLimitError"},y)))};T();T();var ao=M(require("react")),h_=require("@fortawesome/free-solid-svg-icons"),g_=require("@fortawesome/react-fontawesome"),v_=M(require("bignumber.js")),kp=M(require("classnames")),b_=require("react-number-format"),y_=()=>{let{networkConfig:p}=Jr(),{gasInfo:l,formInfo:r}=lt(),{readonly:i}=r,{rewaLabel:d}=p,{gasPrice:m,gasPriceError:u,isGasPriceInvalid:a,onChangeGasPrice:y,onBlurGasPrice:_,onResetGasPrice:E}=l,b=m!==Zp&&!i,x=Mo("gasPrice",i),A=({value:w,floatValue:v})=>(!v||!(0,v_.default)(v).isNaN())&&!Aa(w),f=w=>{w.preventDefault(),E()},g=w=>{y(w.value,!0)};return ao.default.createElement("div",{className:tt.gas},ao.default.createElement("label",{className:ue.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),ao.default.createElement("div",{className:tt.wrapper},ao.default.createElement(b_.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:x,id:"gasPrice",inputMode:"decimal",isAllowed:A,name:"gasPrice",onBlur:_,onValueChange:g,required:!0,suffix:` ${d}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:m,valueIsNumericString:!0,allowNegative:!1,className:(0,kp.default)(ue.input,tt.input,{[ue.disabled]:x,[ue.invalid]:a,[tt.spaced]:b})}),b&&ao.default.createElement("div",{className:tt.actions},ao.default.createElement("div",{onClick:f,className:(0,kp.default)(tt.action,{[tt.disabled]:x})},ao.default.createElement(g_.FontAwesomeIcon,{icon:h_.faUndo,className:tt.icon})))),a&&ao.default.createElement("div",{className:ue.error,"data-testid":"gasPriceError"},u))};T();var w_=M(require("react"));T();var x_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(x_));var co={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"},E_=({feeLimit:p,rewaPriceInUsd:l})=>p===vr?null:w_.default.createElement("span",{className:co.fiat,"data-testid":"feeInFiat"},"(",$p({feeLimit:p,rewaPriceInUsd:l}),")"),k_=({className:p})=>{let{gasInfo:l,tokensInfo:r}=lt(),{feeLimit:i,gasCostLoading:d,gasPriceError:m,gasLimitError:u}=l,{rewaPriceInUsd:a,rewaLabel:y}=r,[_,E]=(0,mt.useState)(Boolean(m||u)),{getCollapseProps:b,getToggleProps:x}=(0,n_.default)({isExpanded:_}),A=()=>{E(f=>!f)};return mt.default.createElement("div",{className:(0,yp.default)(co.fee,p)},mt.default.createElement("label",{className:ue.label},"Fee"),mt.default.createElement("div",xe({className:co.trigger},x({onClick:A})),mt.default.createElement("span",{className:co.limit,"data-testid":"feeLimit"},mt.default.createElement(r_.FormatAmount,{value:i,showLastNonZeroDecimal:!0,rewaLabel:y})),d&&mt.default.createElement(bp.FontAwesomeIcon,{icon:vp.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),mt.default.createElement(E_,{rewaPriceInUsd:a,feeLimit:i}),mt.default.createElement(bp.FontAwesomeIcon,{icon:vp.faChevronRight,className:(0,yp.default)(co.arrow,{[co.active]:_})})),mt.default.createElement("div",xe({className:co.expandable},b()),mt.default.createElement("div",{className:co.content},mt.default.createElement(y_,null),mt.default.createElement(__,null))))};T();T();var oE=M(require("react")),rE=M(require("@terradharitri/sdk-dapp/constants/index")),nE=M(require("classnames")),aE=M(require("react-select"));T();var S_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(S_));T();T();var St=M(require("react")),ma=M(require("classnames"));T();var A_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(A_));var io={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};T();T();T();var He=M(require("react")),T_=require("@terradharitri/sdk-dapp/utils/validation"),fa=M(require("bignumber.js")),Sp=M(require("classnames")),I_=require("react-number-format");T();var q_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(q_));var Gr={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"},C_=500,Ap=1e13,N_=({"data-testid":p,InfoDustComponent:l,disabled:r,handleBlur:i,handleChange:d,name:m,onDebounceChange:u,onFocus:a,onKeyDown:y,placeholder:_,required:E,usdPrice:b,value:x,usdValue:A,className:f,autoFocus:g,suffix:w})=>{let v=(0,He.useRef)(null),[S,k]=(0,He.useState)(),[U,O]=(0,He.useState)(!1),[L,J]=(0,He.useState)({value:x,count:0}),[ee,te]=(0,He.useState)(),Q=u_(L,C_),pe=Y=>{Y.stopPropagation(),O(!0);let X=xp(Y.target.value),ce=(0,fa.default)(X).isLessThanOrEqualTo(Ap);if((X===""||ce)&&(k(X),Y.target.value=X,d(Y),u)){let ie={value:X,count:L.count+1};J(ie)}},ne=()=>{if(A)return te(`$${A}`);if(!b||!x)return te(void 0);let Y=xp(x);if(!(x!==""&&(0,T_.stringIsFloat)(Y))||Y==="")return te(void 0);let X=s_(new fa.default(Y).times(b!=null?b:0).toString(10),2);te(`$${X}`)},H=({value:Y,floatValue:X})=>(!X||(0,fa.default)(X).isLessThanOrEqualTo(Ap))&&!Aa(Y);return(0,He.useEffect)(()=>{u&&U&&(O(!1),u(Q.value))},[Q]),(0,He.useEffect)(ne,[x,A,b]),(0,He.useEffect)(()=>{x!==S&&k(x)},[x]),He.default.createElement("div",{ref:v,className:(0,Sp.default)(Gr.amountHolder,{[Gr.showUsdValue]:Boolean(ee)},f)},He.default.createElement(I_.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":p||m,decimalSeparator:".",disabled:Boolean(r),id:m,inputMode:"decimal",isAllowed:H,name:m,onBlur:i,onChange:pe,onFocus:a,onKeyDown:y,placeholder:_,required:E,thousandSeparator:",",thousandsGroupStyle:"thousand",value:S,suffix:w,valueIsNumericString:!0,allowNegative:!1,autoFocus:g,className:(0,Sp.default)(ue.input,Gr.amountInput,{[ue.disabled]:Boolean(r)})}),ee&&He.default.createElement("span",{className:Gr.amountHolderUsd},He.default.createElement("small",{"data-testid":`tokenPrice_${b}`},ee!=="$0"?He.default.createElement(He.default.Fragment,null,"\u2248 "):He.default.createElement(He.default.Fragment,null),ee),l))},B_=(0,He.memo)(N_,(p,l)=>p.value===l.value&&p.usdPrice===l.usdPrice&&p.className===l.className&&p.disabled===l.disabled&&p.usdValue===l.usdValue);T();T();var Tp=M(require("react"));T();T();var hr=M(require("react")),L_=require("@fortawesome/free-solid-svg-icons"),U_=require("@fortawesome/react-fontawesome"),R_=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),O_=require("react-tooltip"),lE=require("react-tooltip/dist/react-tooltip.css");T();var D_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(D_));var _a={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},F_=({rewaLabel:p})=>hr.default.createElement("div",{className:_a.infoDust},hr.default.createElement(O_.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:_a.infoDustTooltip},"A minimal amount of"," ",hr.default.createElement(R_.FormatAmount,{rewaLabel:p,value:Yp,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),hr.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:_a.infoDustTrigger},hr.default.createElement(U_.FontAwesomeIcon,{icon:L_.faInfoCircle,className:"i-icon"}))),M_=({rewaLabel:p,amount:l,maxAmountMinusDust:r,isMaxClicked:i,tokenId:d})=>l===r&&i&&d===p?Tp.default.createElement("span",{style:{marginLeft:"0.2rem"}},Tp.default.createElement(F_,{rewaLabel:p})):null;T();T();var P_=M(require("react")),j_=require("@terradharitri/sdk-dapp/constants"),Ip=M(require("bignumber.js")),z_=M(require("classnames"));T();var qp=M(require("bignumber.js")),W_=p=>{let l=new qp.default(p!=null?p:"0"),r=new qp.default(Yp),i=l.minus(r);return i.isGreaterThan(0)?i.toString(10):"0"};T();var V_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(V_));var G_={max:"dapp-core-component__maxButton-module__max"};T();var Uo=require("@terradharitri/sdk-dapp/constants"),$_=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Y_=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ta=({amount:p="0",decimals:l=0,digits:r=Uo.DIGITS,addCommas:i=!1,showLastNonZeroDecimal:d=!1})=>{if(p==null||!(0,Y_.stringIsInteger)(p))return"0";let m=a=>(0,$_.formatAmount)({input:p,digits:a,decimals:l,addCommas:i,showLastNonZeroDecimal:d}),u=m(r);return u=parseFloat(u)>0?u:m(Uo.DIGITS),u=parseFloat(u)>0?u:m(Uo.DIGITS+2),u=parseFloat(u)>0?u:m(Uo.DIGITS+4),u=parseFloat(u)>0?u:m(Uo.DIGITS+6),u=parseFloat(u)>0?u:m(Uo.DIGITS+10),parseFloat(u)>0?u:m(Uo.DIGITS+14)},H_=({token:p,rewaLabel:l,inputAmount:r,className:i,onMaxClick:d})=>{var m;let u=(p==null?void 0:p.identifier)===l,a=(m=p==null?void 0:p.balance)!=null?m:"0";if(a==="0")return null;let y=Ta({amount:u?W_(a):a,decimals:(p==null?void 0:p.decimals)||j_.DECIMALS}),_=new Ip.default(r).isEqualTo(new Ip.default(y)),E=b=>{b.preventDefault(),d==null||d(y)};return _?null:P_.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,z_.default)(G_.max,i),onClick:E,onMouseDown:b=>{b.preventDefault()}},"Max")};T();T();var lo=M(require("react")),Z_=M(require("classnames")),X_=M(require("react-select")),ac={};Xr(ac,{Control:()=>mh,IndicatorsContainer:()=>wh,Input:()=>rh,Menu:()=>sh,MenuList:()=>lh,DharitrIIcon:()=>cc,Placeholder:()=>gh,SmallLoader:()=>Q_,ValueComponent:()=>lc,getOption:()=>ic,getSingleValue:()=>sc,getValueContainer:()=>pc});T();T();var Cp=M(require("react")),K_=require("@fortawesome/free-solid-svg-icons"),J_=require("@fortawesome/react-fontawesome"),Q_=({show:p,color:l})=>p?Cp.default.createElement("div",{className:"d-flex"},Cp.default.createElement(J_.FontAwesomeIcon,{icon:K_.faSpinner,className:`fa-spin fast-spin ${l||"text-primary"}`})):null;T();T();var eh=M(require("react")),th=require("react-select");T();var oh=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(oh));var fe={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},rh=p=>eh.default.createElement(th.components.Input,je(xe({},p),{className:fe.dropdown,"data-testid":"tokenSelectInput"}));T();var nh=M(require("react")),ah=require("react-select"),lh=p=>{let l=p,{rx:r}=l,i=Op(l,["rx"]);return nh.default.createElement(ah.components.MenuList,je(xe({},i),{className:fe.list}))};T();var ha=M(require("react")),ph=require("@fortawesome/free-solid-svg-icons"),ch=require("@fortawesome/react-fontawesome"),ih=require("react-select"),sh=p=>ha.default.createElement(ih.components.Menu,je(xe({},p),{className:fe.menu}),p.selectProps.isLoading?ha.default.createElement("div",{className:fe.loading},ha.default.createElement(ch.FontAwesomeIcon,{icon:ph.faCircleNotch,className:"fa-spin",size:"lg"})):p.children);T();var dh=M(require("react")),uh=require("react-select"),mh=p=>dh.default.createElement(uh.components.Control,je(xe({},p),{className:fe.control}));T();var fh=M(require("react")),_h=M(require("classnames")),hh=require("react-select"),gh=p=>fh.default.createElement(hh.components.Placeholder,je(xe({},p),{className:(0,_h.default)(fe.placeholder,{[fe.focused]:p.isFocused})}));T();var vh=M(require("react")),bh=M(require("classnames")),yh=require("react-select"),wh=p=>vh.default.createElement(yh.components.IndicatorsContainer,je(xe({},p),{className:(0,bh.default)(fe.indicator,{[fe.expanded]:p.selectProps.menuIsOpen})}));T();var ft=M(require("react")),xh=require("@fortawesome/free-solid-svg-icons"),Eh=require("@fortawesome/react-fontawesome"),kh=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Sh=M(require("classnames")),Ah=require("react-select"),Th=(Kr(),cr(wr)).default,lc=({RewaIcon:p,tokenId:l,icon:r})=>{let{isRewa:i}=(0,kh.getIdentifierType)(l);return i?ft.default.createElement("span",{className:fe.asset},p?ft.default.createElement(p,{className:fe.diamond}):ft.default.createElement(Th,{className:fe.diamond})):r?ft.default.createElement("img",{src:r,className:fe.asset}):ft.default.createElement(Eh.FontAwesomeIcon,{icon:xh.faDiamond,className:fe.asset})},Ih=({children:p})=>ft.default.createElement("div",{className:fe.wrapper},p),pc=(p,l,r)=>i=>{var d,m;let{selectProps:u,isDisabled:a,children:y}=i,_=u.value,E=(m=(d=_==null?void 0:_.assets)==null?void 0:d.svgUrl)!=null?m:null,b=(0,ft.useMemo)(()=>{let x=String(_==null?void 0:_.token.usdPrice);return x!=null&&x.includes("$")?_==null?void 0:_.token.usdPrice:`$${_==null?void 0:_.token.usdPrice}`},[_==null?void 0:_.token.usdPrice]);return ft.default.createElement(Ah.components.ValueContainer,je(xe({},i),{className:fe.container}),ft.default.createElement("div",{className:(0,Sh.default)(fe.icon,l)},ft.default.createElement(lc,{RewaIcon:r,rewaLabel:p,icon:E,isDisabled:a,tokenId:_==null?void 0:_.value})),ft.default.createElement("div",{className:fe.payload},ft.default.createElement(Ih,null,y,(_==null?void 0:_.token.usdPrice)&&ft.default.createElement("small",{className:fe.price},b))))};T();var Ue=M(require("react")),qh=require("@fortawesome/free-solid-svg-icons"),Ch=require("@fortawesome/react-fontawesome"),Nh=require("@terradharitri/sdk-dapp/constants"),Bh=require("@terradharitri/sdk-dapp/UI/UsdValue"),Lh=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Uh=M(require("classnames")),Rh=require("react-select"),{default:cc}=(Kr(),cr(wr)),ic=({RewaIcon:p,TokenTickerIcon:l,showBalanceUsdValue:r,showTokenPrice:i})=>d=>{var m,u,a,y;let{data:_,isSelected:E,isFocused:b,isDisabled:x,selectProps:A}=d,f=_,{isRewa:g}=(0,Lh.getIdentifierType)(f.value),w=f.token.assets?f.token.assets.svgUrl:null,v=Ta({amount:f.token.balance,decimals:f.token.decimals||Nh.DECIMALS,addCommas:!0}),S=(u=(m=f.token)==null?void 0:m.usdPrice)==null?void 0:u.toString(),k=(y=(a=f.token)==null?void 0:a.valueUSD)==null?void 0:y.toString();return Ue.default.createElement("div",{"data-testid":`${d.value}-option`},Ue.default.createElement(Rh.components.Option,je(xe({},d),{className:(0,Uh.default)(fe.option,{[fe.selected]:E||b,[fe.disabled]:x})}),Ue.default.createElement("div",{className:fe.image},g?Ue.default.createElement("span",{className:fe.icon},p?Ue.default.createElement(p,null):Ue.default.createElement(cc,null)):w?Ue.default.createElement("img",{src:w,className:fe.icon}):Ue.default.createElement("span",{className:fe.icon},Ue.default.createElement(Ch.FontAwesomeIcon,{icon:qh.faDiamond,className:fe.diamond}))),Ue.default.createElement("div",{className:fe.info},Ue.default.createElement("div",{className:fe.left},Ue.default.createElement("div",{className:fe.ticker},Ue.default.createElement("span",{className:fe.value},A.inputValue?Ue.default.createElement(rc,{text:f.token.ticker,highlight:A.inputValue}):f.token.ticker),l&&Ue.default.createElement(l,{token:f.token})),i&&Ue.default.createElement("small",{className:fe.price},S)),Ue.default.createElement("div",{className:fe.right},Ue.default.createElement("span",{className:fe.value},v),r&&k&&Ue.default.createElement(Bh.UsdValue,{usd:1,decimals:4,amount:k,"data-testid":"token-price-usd-value",className:fe.price,addEqualSign:!1}))),Ue.default.createElement("div",{className:fe.children},d.children)))};T();var ga=M(require("react")),Oh=M(require("classnames")),Dh=require("react-select"),sc=p=>l=>{let{selectProps:r,children:i}=l,d=r.value;return ga.default.createElement(Dh.components.SingleValue,je(xe({},l),{className:(0,Oh.default)(fe.single,{[fe.focused]:l.selectProps.menuIsOpen})}),ga.default.createElement("div",{className:fe.ticker},i,p&&ga.default.createElement(p,{token:d==null?void 0:d.token})))},{Menu:Fh,Control:Mh,Input:Ph,MenuList:jh,IndicatorsContainer:zh,Placeholder:Wh}=ac,Vh=p=>{let{name:l,options:r,isLoading:i=!1,className:d="",noOptionsMessage:m="No Tokens",disabledOption:u,rewaLabel:a,RewaIcon:y,disabled:_,value:E,onBlur:b,onFocus:x,onChange:A,onMenuOpen:f,chainId:g,wrapperClassName:w="",showTokenPrice:v=!1,showBalanceUsdValue:S=!1,selectedTokenIconClassName:k,TokenTickerIcon:U}=p,O=(0,lo.useRef)(null),L=[a,Hp(g)],J=(0,lo.useMemo)(()=>ic({rewaLabel:a,RewaIcon:y,showTokenPrice:v,showBalanceUsdValue:S,TokenTickerIcon:U}),[]),ee=(0,lo.useMemo)(()=>pc(a,k,y),[]),te=(0,lo.useMemo)(()=>sc(U),[]);(0,lo.useEffect)(()=>{let H=r.find(X=>X.value===(E==null?void 0:E.value)),Y=(H==null?void 0:H.token.balance)===(E==null?void 0:E.token.balance);!H||Y||A(H)},[r]);let Q=H=>L.includes(H),pe=H=>{var Y;let X=H.value===(u==null?void 0:u.value),ce=Q(H.value),ie=Q((Y=u==null?void 0:u.value)!=null?Y:"");return X||ce&&ie},ne=(H,Y)=>{let X=H.data.token.ticker?H.data.token.ticker.toLowerCase().includes(Y.toLowerCase()):!1,ce=H.data.token.name.toLowerCase().includes(Y.toLowerCase());return Boolean(Y)?X||ce:!0};return lo.default.createElement("div",{"data-testid":`${l}Select`,className:`${w} ${i?"select-holder-loading":""}`},lo.default.createElement("label",{htmlFor:l,"data-testid":"tokenIdLabel",className:fe.label},"Token"),lo.default.createElement(X_.default,{ref:O,inputId:l,name:l,options:r,openMenuOnFocus:!0,isDisabled:_,isLoading:i,value:E,isOptionDisabled:pe,onBlur:b,filterOption:ne,onFocus:x,onChange:H=>{A(H),O&&O.current!==null&&O.current.blur()},isSearchable:p.isSearchable,maxMenuHeight:260,onMenuOpen:f,noOptionsMessage:()=>m,className:(0,Z_.default)(fe.select,d,{[fe.disabled]:p.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:Fh,Control:Mh,Input:Ph,MenuList:jh,IndicatorsContainer:zh,ValueContainer:ee,Placeholder:Wh,Option:J,SingleValue:te}}))};T();T();var Gh=M(require("react")),$h=M(require("classnames")),Yh=({hasErrors:p,className:l,error:r,"data-testid":i})=>p?Gh.default.createElement("div",{className:(0,$h.default)(ue.error,l),"data-testid":i},r):null;T();T();var va=M(require("react")),Hh=M(require("classnames"));T();var Zh=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zh));var ba={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"},Xh=({label:p,value:l,className:r,token:i,"data-testid":d,"data-value":m})=>va.default.createElement("div",{"data-testid":d,"data-value":m,className:(0,Hh.default)(ba.balance,r)},va.default.createElement("span",{className:ba.label},p,": "),va.default.createElement("span",{className:ba.value},l)," ",i==null?void 0:i.ticker),Kh=({className:p,label:l,name:r,wrapperControlsClassName:i,tokenSelectProps:d,tokenBalanceProps:m,amountInputProps:u,amountErrorProps:a,maxButtonProps:y,readonly:_})=>St.default.createElement("div",{className:(0,ma.default)(io.amount,p)},St.default.createElement("div",{className:io.label},l&&St.default.createElement("label",{htmlFor:r,className:ue.label,"data-testid":"amountLabel"},l),St.default.createElement(Xh,xe({},m))),St.default.createElement("div",{className:(0,ma.default)(io.wrapper,i,{[io.error]:u.isInvalid||d.isInvalid||a.hasErrors,[io.disabled]:_})},St.default.createElement(B_,xe({},u)),St.default.createElement("div",{className:(0,ma.default)(io.interaction,y.wrapperClassName)},y.isMaxButtonVisible&&St.default.createElement(H_,xe({},y)),St.default.createElement("div",{className:io.select},St.default.createElement(Vh,xe({},d))))),St.default.createElement(Yh,xe({},a)));T();var ya=M(require("react")),Jh=require("@terradharitri/sdk-dapp/constants"),Qh=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),eg=()=>{var p,l;let{checkInvalid:r}=Xp(),{tokensInfo:i,amountInfo:d,formInfo:m}=lt(),{readonly:u}=m,{networkConfig:{rewaLabel:a,chainId:y}}=Jr(),{rewaPriceInUsd:_}=dm(),{amount:E,onBlur:b,onChange:x,onMaxClicked:A,error:f,isInvalid:g,onFocus:w,maxAmountAvailable:v,isMaxClicked:S,isMaxButtonVisible:k,maxAmountMinusDust:U}=d,{allAvailableTokens:O,areTokensLoading:L,getTokens:J,isTokenIdInvalid:ee,RewaIcon:te,nft:Q,onChangeTokenId:pe,tokenDetails:ne,tokenId:H,tokenIdError:Y}=i,X=O.map(re=>({value:re.identifier,label:String(re.ticker),assets:re.assets,token:re})),{isRewa:ce}=(0,Qh.getIdentifierType)(H),ie=X.find(({value:re})=>re===H),be={id:"tokenId",value:ie,name:"tokenId",isLoading:L,options:X,isSearchable:!0,onChange:re=>{re&&(pe(re.value),x(""))},onMenuOpen:J,disabled:Mo("tokenId",u),error:Y,isInvalid:ee,rewaLabel:a,chainId:y,RewaIcon:te},he=(0,ya.useMemo)(()=>ya.default.createElement(M_,{amount:E,rewaLabel:a,maxAmountMinusDust:U,tokenId:H,isMaxClicked:S}),[E,a,U,H,S]),me={name:"amount",required:!0,value:E,placeholder:"Amount",handleBlur:b,"data-testid":"amount",handleChange:x,onFocus:w,usdPrice:ce?_:void 0,error:f,isInvalid:g,InfoDustComponent:he},N={token:ne,inputAmount:E,onMaxClick:A,isMaxClicked:S,isMaxButtonVisible:k},F=r("amount")&&!me.value,ve={hasErrors:me.isInvalid||be.isInvalid||F,error:me.error||be.error,className:ue.error,"data-testid":me.error?"amountError":"tokenIdError"},ke={"data-testid":`available-${(p=Q==null?void 0:Q.identifier)!=null?p:H}`,"data-value":`${v} ${(l=Q==null?void 0:Q.identifier)!=null?l:H}`,label:"Available",token:ie==null?void 0:ie.token,value:Ta({amount:ne.balance,decimals:ne.decimals||Jh.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(Q==null?void 0:Q.type)===Fo.NftEnumType.NonFungibleDCDT?null:ya.default.createElement(Kh,{name:"tokenId",amountErrorProps:ve,tokenSelectProps:be,amountInputProps:me,tokenBalanceProps:ke,maxButtonProps:N,label:"Amount",readonly:u})};T();T();var Ro=M(require("react")),Np=M(require("classnames"));T();T();T();var Zt=M(require("react")),Bp=require("@fortawesome/free-solid-svg-icons"),Lp=require("@fortawesome/react-fontawesome"),tg=require("formik");T();T();var dc=()=>{let{formInfo:{isRewaTransaction:p,readonly:l},dataFieldInfo:{isAdvancedModeEnabled:r}}=lt();return r?!1:!p||Mo("data",l)};T();var og=`.dapp-core-component__styles-module__advanced {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(og));var $r={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"},rg=()=>{let{formInfo:{readonly:p,isRewaTransaction:l}}=lt(),{setFieldValue:r,values:i}=(0,tg.useFormikContext)(),[d,m]=(0,Zt.useState)(!1),[u,a]=(0,Zt.useState)(!1),y=dc(),_=!d&&!p&&y&&Boolean(i.data),E=()=>{m(!0),r("isAdvancedModeEnabled",!0)},b=()=>{a(!0),setTimeout(()=>{a(!1)},5e3)};return(0,Zt.useEffect)(()=>{!l&&d&&m(!1)},[l,i.amount]),_?u?Zt.default.createElement("div",{className:$r.advanced,"data-testid":"confirmAdvancedMode",onClick:E},Zt.default.createElement(Lp.FontAwesomeIcon,{icon:Bp.faCheck,className:"i-icon"}),Zt.default.createElement("span",{className:$r.advancedText},"Confirm")):Zt.default.createElement("div",{"data-testid":"enableAdvancedMode",className:$r.advanced,onClick:b},Zt.default.createElement(Lp.FontAwesomeIcon,{icon:Bp.faScrewdriverWrench,className:"i-icon"}),Zt.default.createElement("span",{className:$r.advancedText},"Advanced")):null};T();var ng=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ng));var Up={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"},ag=({className:p})=>{let{dataFieldInfo:{data:l,dataError:r,isDataInvalid:i,onChange:d,onBlur:m}}=lt(),u=dc();return Ro.default.createElement("div",{className:(0,Np.default)(Up.data,p)},Ro.default.createElement("div",{className:io.label},Ro.default.createElement("label",{htmlFor:"data",className:ue.label},"Data"),Ro.default.createElement(rg,null)),Ro.default.createElement("div",{className:Up.wrapper},Ro.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:u,"data-testid":"data",value:l,onBlur:m,onChange:d,spellCheck:"false",placeholder:"Add transaction data",className:(0,Np.default)(ue.textarea,{[ue.invalid]:i,[ue.disabled]:u})})),i&&Ro.default.createElement("div",{className:ue.error,"data-testid":"dataError"},r))};T();T();T();var po=M(require("react")),Oo=M(require("classnames"));T();var lg=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(lg));var et={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"},pg=({disabled:p,percentageValue:l=0,onPercentageChange:r,className:i})=>{let d=[0,25,50,75,100],m="amountSlider";return po.default.createElement("div",{className:(0,Oo.default)(et.amountSlider,i)},po.default.createElement("div",{className:et.amountSliderRange},po.default.createElement("input",{name:m,id:m,"data-testid":m,type:"range",disabled:p,min:0,max:100,value:String(l),className:(0,Oo.default)(et.amountSliderInput,{[et.disabled]:p}),onChange:u=>{r(Number(u.target.value))}}),po.default.createElement("div",{style:{width:`${l}%`},className:(0,Oo.default)(et.amountSliderCompletion,{[et.disabled]:p})}),d.map(u=>po.default.createElement("span",{onClick:()=>r(u),key:`breakpoint-${u}`,style:{left:`${u}%`},className:(0,Oo.default)(et.amountSliderBreakpoint,{[et.completed]:u<=l,[et.disabled]:p})})),d.map(u=>po.default.createElement("span",{style:{left:`${u}%`},key:`breakpoint-${u}`,onClick:()=>r(u),className:(0,Oo.default)(et.amountSliderPercentage,{[et.exact]:u===l,[et.disabled]:p})},u,"%")),po.default.createElement("span",{style:{left:`${l}%`},className:(0,Oo.default)(et.amountSliderThumb,{[et.disabled]:p})},po.default.createElement("strong",{className:(0,Oo.default)(et.amountSliderThumbPercentage,{[et.hidden]:d.includes(l)})},Math.round(l),"%"))))};T();T();var At=M(require("react")),cg=require("@fortawesome/free-solid-svg-icons"),ig=require("@fortawesome/react-fontawesome"),sg=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),dg=require("@terradharitri/sdk-dapp/UI/CopyButton"),ug=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),mg=require("@terradharitri/sdk-dapp/UI/Trim"),fg=M(require("classnames")),_g=require("formik");T();var hg=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hg));var Tt={"can-transfer-warning":"dapp-core-component__styles-module__can-transfer-warning",canTransferWarning:"dapp-core-component__styles-module__can-transfer-warning","can-transfer-warning-heading":"dapp-core-component__styles-module__can-transfer-warning-heading",canTransferWarningHeading:"dapp-core-component__styles-module__can-transfer-warning-heading","can-transfer-warning-icon":"dapp-core-component__styles-module__can-transfer-warning-icon",canTransferWarningIcon:"dapp-core-component__styles-module__can-transfer-warning-icon","can-transfer-warning-label":"dapp-core-component__styles-module__can-transfer-warning-label",canTransferWarningLabel:"dapp-core-component__styles-module__can-transfer-warning-label","can-transfer-warning-addresses":"dapp-core-component__styles-module__can-transfer-warning-addresses",canTransferWarningAddresses:"dapp-core-component__styles-module__can-transfer-warning-addresses","can-transfer-warning-address":"dapp-core-component__styles-module__can-transfer-warning-address",canTransferWarningAddress:"dapp-core-component__styles-module__can-transfer-warning-address","can-transfer-warning-address-explorer":"dapp-core-component__styles-module__can-transfer-warning-address-explorer",canTransferWarningAddressExplorer:"dapp-core-component__styles-module__can-transfer-warning-address-explorer","can-transfer-warning-address-copy":"dapp-core-component__styles-module__can-transfer-warning-address-copy",canTransferWarningAddressCopy:"dapp-core-component__styles-module__can-transfer-warning-address-copy"},gg=p=>{let{className:l}=p,{values:{nft:r,address:i}}=(0,_g.useFormikContext)();return!(r!=null&&r.allowedReceivers)||r.allowedReceivers.includes(i)?null:At.default.createElement("div",{className:(0,fg.default)(Tt.canTransferWarning,l),"data-testid":"canTransferWarning"},At.default.createElement("div",{className:Tt.canTransferWarningHeading},At.default.createElement(ig.FontAwesomeIcon,{icon:cg.faExclamationTriangle,className:Tt.canTransferWarningIcon,size:"lg"}),At.default.createElement("div",{className:Tt.canTransferWarningTitle},At.default.createElement("div",{className:Tt.canTransferWarningLabel},"Warning!"),At.default.createElement("div",{className:Tt.canTransferWarningMessage},Du))),At.default.createElement("div",{className:Tt.canTransferWarningAddresses},r.allowedReceivers.map(d=>At.default.createElement("div",{className:Tt.canTransferWarningAddress,key:d},At.default.createElement(mg.Trim,{text:d,className:Tt.canTransferWarningAddressTrim}),At.default.createElement(dg.CopyButton,{text:d,className:Tt.canTransferWarningAddressCopy}),At.default.createElement(ug.ExplorerLink,{page:`/${sg.ACCOUNTS_ENDPOINT}/${d}`,className:Tt.canTransferWarningAddressExplorer})))))};T();T();var ar=M(require("react")),vg=require("@fortawesome/free-solid-svg-icons"),bg=require("@fortawesome/react-fontawesome"),yg=M(require("classnames"));T();var wg=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wg));var lr={"wrewa-warning":"dapp-core-component__styles-module__wrewa-warning",wrewaWarning:"dapp-core-component__styles-module__wrewa-warning","wrewa-warning-heading":"dapp-core-component__styles-module__wrewa-warning-heading",wrewaWarningHeading:"dapp-core-component__styles-module__wrewa-warning-heading","wrewa-warning-icon":"dapp-core-component__styles-module__wrewa-warning-icon",wrewaWarningIcon:"dapp-core-component__styles-module__wrewa-warning-icon","wrewa-warning-label":"dapp-core-component__styles-module__wrewa-warning-label",wrewaWarningLabel:"dapp-core-component__styles-module__wrewa-warning-label"},xg=p=>{let{tokenId:l,className:r}=p,{networkConfig:{chainId:i}}=Jr();return Hp(i)!==l?null:ar.default.createElement("div",{className:(0,yg.default)(lr.wrewaWarning,r)},ar.default.createElement("div",{className:lr.wrewaWarningHeading},ar.default.createElement(bg.FontAwesomeIcon,{icon:vg.faExclamationTriangle,className:lr.wrewaWarningIcon,size:"lg"}),ar.default.createElement("div",{className:lr.wrewaWarningTitle},ar.default.createElement("div",{className:lr.wrewaWarningLabel},"Warning!"),ar.default.createElement("div",{className:lr.wrewaWarningMessage},Fu))))};T();var Eg=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Eg));var wa={form:"dapp-core-component__form-module__form",formFieldset:"dapp-core-component__form-module__formFieldset",formWrapper:"dapp-core-component__form-module__formWrapper","form-buttons":"dapp-core-component__form-module__form-buttons",formButtons:"dapp-core-component__form-module__form-buttons"};T();T();var kg=p=>{var l,r;return((l=p.nft)==null?void 0:l.type)===Fo.NftEnumType.NonFungibleDCDT?"NFT":((r=p.nft)==null?void 0:r.type)===Fo.NftEnumType.SemiFungibleDCDT?"SFT":p.tokenDetails.ticker},Sg=({className:p,GuardianScreen:l})=>{let{formInfo:r,accountInfo:i,amountInfo:d,tokensInfo:m}=lt(),{values:u}=(0,Au.useFormikContext)(),{txType:a,tokenId:y,address:_,balance:E,chainId:b,ledger:x}=u,{nft:A}=m,[f,g]=(0,Be.useState)(),{amountRange:w,onSetAmountPercentage:v}=d,{renderKey:S,onValidateForm:k,onInvalidateForm:U,onCloseForm:O,onSubmitForm:L,onPreviewClick:J,areValidatedValuesReady:ee,isGuardianScreenVisible:te,uiOptions:Q,readonly:pe,setGuardedTransaction:ne,setHasGuardianScreen:H}=r,Y=()=>so(void 0,null,function*(){if(!ee)return;let he=yield Lu(u);try{let me=yield Vu({address:_,balance:E,chainId:b,nonce:i.nonce,values:he});me.setVersion(tp.TransactionVersion.withTxOptions());let N=xe({guarded:!0},x?{hashSign:!0}:{});me.setOptions(tp.TransactionOptions.withOptions(N)),g({0:me})}catch(me){g({})}});(0,Be.useEffect)(()=>{Y()},[u,ee]),(0,Be.useEffect)(()=>{H(Boolean(l))},[]),(0,Be.useEffect)(()=>{if(!f)return;let he=f[0];he&&ne(he)},[f]);let X=he=>{he.preventDefault(),O()},ce=a==="NonFungibleDCDT",ie=a==="SemiFungibleDCDT",be={onSignTransaction:()=>so(void 0,null,function*(){setTimeout(()=>{L()})}),onPrev:U,address:_,title:"",className:p,signedTransactions:f,setSignedTransactions:g,signStepInnerClasses:{}};return l&&te?Be.default.createElement(l,xe({},be)):ee?Be.default.createElement(lf,{providerType:i.providerType}):Be.default.createElement("form",{key:S,onSubmit:k,className:(0,Su.default)(wa.form,p)},Be.default.createElement("fieldset",{className:wa.formFieldset},(ce||ie)&&A&&Be.default.createElement(oc,xe({onClick:J,txType:a},A)),Be.default.createElement(Qf,null),ie?Be.default.createElement(o_,null):Be.default.createElement(eg,null),(Q==null?void 0:Q.showAmountSlider)&&!ce&&Be.default.createElement(pg,{onPercentageChange:v,percentageValue:w,disabled:Boolean(pe)}),Be.default.createElement(xg,{tokenId:y}),Be.default.createElement(gg,null),Be.default.createElement(k_,null),Be.default.createElement(ag,null)),Be.default.createElement("div",{className:wa.formButtons},Be.default.createElement("button",{type:"button",id:"sendBtn","data-testid":"sendBtn",onClick:k,className:ue.buttonSend},"Send ",kg(m)),Be.default.createElement("button",{type:"button",id:"closeButton","data-testid":"returnToWalletBtn",onClick:X,className:ue.buttonText},"Cancel")))};});var xi=dt((Ik,wi)=>{"use strict";Se();var Ag=Object.create,kr=Object.defineProperty,Tg=Object.defineProperties,Ig=Object.getOwnPropertyDescriptor,qg=Object.getOwnPropertyDescriptors,Cg=Object.getOwnPropertyNames,an=Object.getOwnPropertySymbols,Ng=Object.getPrototypeOf,Ga=Object.prototype.hasOwnProperty,Gc=Object.prototype.propertyIsEnumerable,fc=(p,l,r)=>l in p?kr(p,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):p[l]=r,ge=(p,l)=>{for(var r in l||(l={}))Ga.call(l,r)&&fc(p,r,l[r]);if(an)for(var r of an(l))Gc.call(l,r)&&fc(p,r,l[r]);return p},Ae=(p,l)=>Tg(p,qg(l)),Bg=(p,l)=>{var r={};for(var i in p)Ga.call(p,i)&&l.indexOf(i)<0&&(r[i]=p[i]);if(p!=null&&an)for(var i of an(p))l.indexOf(i)<0&&Gc.call(p,i)&&(r[i]=p[i]);return r},$a=(p,l)=>()=>(p&&(l=p(p=0)),l),cn=(p,l)=>()=>(l||p((l={exports:{}}).exports,l),l.exports),sn=(p,l)=>{for(var r in l)kr(p,r,{get:l[r],enumerable:!0})},$c=(p,l,r,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let d of Cg(l))!Ga.call(p,d)&&d!==r&&kr(p,d,{get:()=>l[d],enumerable:!(i=Ig(l,d))||i.enumerable});return p},z=(p,l,r)=>(r=p!=null?Ag(Ng(p)):{},$c(l||!p||!p.__esModule?kr(r,"default",{value:p,enumerable:!0}):r,p)),Sr=p=>$c(kr({},"__esModule",{value:!0}),p),Ar=(p,l,r)=>new Promise((i,d)=>{var m=y=>{try{a(r.next(y))}catch(_){d(_)}},u=y=>{try{a(r.throw(y))}catch(_){d(_)}},a=y=>y.done?i(y.value):Promise.resolve(y.value).then(m,u);a((r=r.apply(p,l)).next())}),Lg=cn(p=>{"use strict";I(),p.byteLength=y,p.toByteArray=E,p.fromByteArray=A;var l=[],r=[],i=typeof Uint8Array!="undefined"?Uint8Array:Array,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(m=0,u=d.length;m<u;++m)l[m]=d[m],r[d.charCodeAt(m)]=m;var m,u;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function a(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=f.indexOf("=");w===-1&&(w=g);var v=w===g?0:4-w%4;return[w,v]}function y(f){var g=a(f),w=g[0],v=g[1];return(w+v)*3/4-v}function _(f,g,w){return(g+w)*3/4-w}function E(f){var g,w=a(f),v=w[0],S=w[1],k=new i(_(f,v,S)),U=0,O=S>0?v-4:v,L;for(L=0;L<O;L+=4)g=r[f.charCodeAt(L)]<<18|r[f.charCodeAt(L+1)]<<12|r[f.charCodeAt(L+2)]<<6|r[f.charCodeAt(L+3)],k[U++]=g>>16&255,k[U++]=g>>8&255,k[U++]=g&255;return S===2&&(g=r[f.charCodeAt(L)]<<2|r[f.charCodeAt(L+1)]>>4,k[U++]=g&255),S===1&&(g=r[f.charCodeAt(L)]<<10|r[f.charCodeAt(L+1)]<<4|r[f.charCodeAt(L+2)]>>2,k[U++]=g>>8&255,k[U++]=g&255),k}function b(f){return l[f>>18&63]+l[f>>12&63]+l[f>>6&63]+l[f&63]}function x(f,g,w){for(var v,S=[],k=g;k<w;k+=3)v=(f[k]<<16&16711680)+(f[k+1]<<8&65280)+(f[k+2]&255),S.push(b(v));return S.join("")}function A(f){for(var g,w=f.length,v=w%3,S=[],k=16383,U=0,O=w-v;U<O;U+=k)S.push(x(f,U,U+k>O?O:U+k));return v===1?(g=f[w-1],S.push(l[g>>2]+l[g<<4&63]+"==")):v===2&&(g=(f[w-2]<<8)+f[w-1],S.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),S.join("")}}),Ug=cn(p=>{I(),p.read=function(l,r,i,d,m){var u,a,y=m*8-d-1,_=(1<<y)-1,E=_>>1,b=-7,x=i?m-1:0,A=i?-1:1,f=l[r+x];for(x+=A,u=f&(1<<-b)-1,f>>=-b,b+=y;b>0;u=u*256+l[r+x],x+=A,b-=8);for(a=u&(1<<-b)-1,u>>=-b,b+=d;b>0;a=a*256+l[r+x],x+=A,b-=8);if(u===0)u=1-E;else{if(u===_)return a?NaN:(f?-1:1)*(1/0);a=a+Math.pow(2,d),u=u-E}return(f?-1:1)*a*Math.pow(2,u-d)},p.write=function(l,r,i,d,m,u){var a,y,_,E=u*8-m-1,b=(1<<E)-1,x=b>>1,A=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=d?0:u-1,g=d?1:-1,w=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(y=isNaN(r)?1:0,a=b):(a=Math.floor(Math.log(r)/Math.LN2),r*(_=Math.pow(2,-a))<1&&(a--,_*=2),a+x>=1?r+=A/_:r+=A*Math.pow(2,1-x),r*_>=2&&(a++,_/=2),a+x>=b?(y=0,a=b):a+x>=1?(y=(r*_-1)*Math.pow(2,m),a=a+x):(y=r*Math.pow(2,x-1)*Math.pow(2,m),a=0));m>=8;l[i+f]=y&255,f+=g,y/=256,m-=8);for(a=a<<m|y,E+=m;E>0;l[i+f]=a&255,f+=g,a/=256,E-=8);l[i+f-g]|=w*128}}),Rg=cn(p=>{"use strict";I();var l=Lg(),r=Ug(),i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=a,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var d=2147483647;p.kMaxLength=d,a.TYPED_ARRAY_SUPPORT=m(),!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function m(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function u(e){if(e>d)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return y(e,t,o)}a.poolSize=8192;function y(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return a.from(n,t,o);var c=w(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,t,o){return y(e,t,o)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function _(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function E(e,t,o){return _(e),e<=0?u(e):t!==void 0?typeof o=="string"?u(e).fill(t,o):u(e).fill(t):u(e)}a.alloc=function(e,t,o){return E(e,t,o)};function b(e){return _(e),u(e<0?0:v(e)|0)}a.allocUnsafe=function(e){return b(e)},a.allocUnsafeSlow=function(e){return b(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=k(e,t)|0,n=u(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function A(e){for(var t=e.length<0?0:v(e.length)|0,o=u(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function f(e){if($(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return A(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,a.prototype),n}function w(e){if(a.isBuffer(e)){var t=v(e.length)|0,o=u(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?u(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function v(e){if(e>=d)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+d.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==a.prototype},a.compare=function(e,t){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),$(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,s=Math.min(o,n);c<s;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return a.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=a.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var s=e[o];if($(s,Uint8Array))c+s.length>n.length?a.from(s).copy(n,c):Uint8Array.prototype.set.call(n,s,c);else if(a.isBuffer(s))s.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=s.length}return n};function k(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Te(e).length;default:if(c)return n?-1:ye(e).length;t=(""+t).toLowerCase(),c=!0}}a.byteLength=k;function U(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,t,o);case"utf8":case"utf-8":return Y(this,t,o);case"ascii":return ie(this,t,o);case"latin1":case"binary":return be(this,t,o);case"base64":return H(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}a.prototype._isBuffer=!0;function O(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):U.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:a.compare(this,e)===0},a.prototype.inspect=function(){var e="",t=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(e,t,o,n,c){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var s=c-n,h=o-t,q=Math.min(s,h),D=this.slice(n,c),C=e.slice(t,o),B=0;B<q;++B)if(D[B]!==C[B]){s=D[B],h=C[B];break}return s<h?-1:h<s?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,we(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=a.from(t,n)),a.isBuffer(t))return t.length===0?-1:J(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):J(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function J(e,t,o,n,c){var s=1,h=e.length,q=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;s=2,h/=2,q/=2,o/=2}function D(Ie,qe){return s===1?Ie[qe]:Ie.readUInt16BE(qe*s)}var C;if(c){var B=-1;for(C=o;C<h;C++)if(D(e,C)===D(t,B===-1?0:C-B)){if(B===-1&&(B=C),C-B+1===q)return B*s}else B!==-1&&(C-=C-B),B=-1}else for(o+q>h&&(o=h-q),C=o;C>=0;C--){for(var P=!0,de=0;de<q;de++)if(D(e,C+de)!==D(t,de)){P=!1;break}if(P)return C}return-1}a.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},a.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},a.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function ee(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var s=t.length;n>s/2&&(n=s/2);for(var h=0;h<n;++h){var q=parseInt(t.substr(h*2,2),16);if(we(q))return h;e[o+h]=q}return h}function te(e,t,o,n){return se(ye(t,e.length-o),e,o,n)}function Q(e,t,o,n){return se(Ve(t),e,o,n)}function pe(e,t,o,n){return se(Te(t),e,o,n)}function ne(e,t,o,n){return se(Ge(t,e.length-o),e,o,n)}a.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return ee(this,e,t,o);case"utf8":case"utf-8":return te(this,e,t,o);case"ascii":case"latin1":case"binary":return Q(this,e,t,o);case"base64":return pe(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,t,o);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function Y(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var s=e[c],h=null,q=s>239?4:s>223?3:s>191?2:1;if(c+q<=o){var D,C,B,P;switch(q){case 1:s<128&&(h=s);break;case 2:D=e[c+1],(D&192)===128&&(P=(s&31)<<6|D&63,P>127&&(h=P));break;case 3:D=e[c+1],C=e[c+2],(D&192)===128&&(C&192)===128&&(P=(s&15)<<12|(D&63)<<6|C&63,P>2047&&(P<55296||P>57343)&&(h=P));break;case 4:D=e[c+1],C=e[c+2],B=e[c+3],(D&192)===128&&(C&192)===128&&(B&192)===128&&(P=(s&15)<<18|(D&63)<<12|(C&63)<<6|B&63,P>65535&&P<1114112&&(h=P))}}h===null?(h=65533,q=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),c+=q}return ce(n)}var X=4096;function ce(e){var t=e.length;if(t<=X)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=X));return o}function ie(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function be(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function he(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",s=t;s<o;++s)c+=$e[e[s]];return c}function me(e,t,o){for(var n=e.slice(t,o),c="",s=0;s<n.length-1;s+=2)c+=String.fromCharCode(n[s]+n[s+1]*256);return c}a.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n};function N(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=t,c=1,s=this[e+--n];n>0&&(c*=256);)s+=this[e+--n]*c;return c*=128,s>=c&&(s-=Math.pow(2,8*t)),s},a.prototype.readInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},a.prototype.readInt16LE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},a.prototype.readInt16BE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},a.prototype.readInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!1,52,8)};function F(e,t,o,n,c,s){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<s)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=1,h=0;for(this[t]=e&255;++h<o&&(s*=256);)this[t+h]=e/s&255;return t+o},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=o-1,h=1;for(this[t+s]=e&255;--s>=0&&(h*=256);)this[t+s]=e/h&255;return t+o},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,255,0),this[t]=e&255,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},a.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=0,h=1,q=0;for(this[t]=e&255;++s<o&&(h*=256);)e<0&&q===0&&this[t+s-1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=o-1,h=1,q=0;for(this[t+s]=e&255;--s>=0&&(h*=256);)e<0&&q===0&&this[t+s+1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},a.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ve(e,t,o,n,c,s){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ke(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,4,34028234663852886e22,-34028234663852886e22),r.write(e,t,o,n,23,4),o+4}a.prototype.writeFloatLE=function(e,t,o){return ke(this,e,t,!0,o)},a.prototype.writeFloatBE=function(e,t,o){return ke(this,e,t,!1,o)};function re(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,8,17976931348623157e292,-17976931348623157e292),r.write(e,t,o,n,52,8),o+8}a.prototype.writeDoubleLE=function(e,t,o){return re(this,e,t,!0,o)},a.prototype.writeDoubleBE=function(e,t,o){return re(this,e,t,!1,o)},a.prototype.copy=function(e,t,o,n){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},a.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<o;++s)this[s]=e;else{var h=a.isBuffer(e)?e:a.from(e,n),q=h.length;if(q===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<o-t;++s)this[s+t]=h[s%q]}return this};var ze=/[^+/0-9A-Za-z-_]/g;function We(e){if(e=e.split("=")[0],e=e.trim().replace(ze,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,t){t=t||1/0;for(var o,n=e.length,c=null,s=[],h=0;h<n;++h){if(o=e.charCodeAt(h),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&s.push(239,191,189);continue}else if(h+1===n){(t-=3)>-1&&s.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&s.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&s.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;s.push(o)}else if(o<2048){if((t-=2)<0)break;s.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;s.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;s.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return s}function Ve(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function Ge(e,t){for(var o,n,c,s=[],h=0;h<e.length&&!((t-=2)<0);++h)o=e.charCodeAt(h),n=o>>8,c=o%256,s.push(c),s.push(n);return s}function Te(e){return l.toByteArray(We(e))}function se(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function $(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function we(e){return e!==e}var $e=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),Og=cn((p,l)=>{I();var r=l.exports={},i,d;function m(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=m}catch(v){i=m}try{typeof clearTimeout=="function"?d=clearTimeout:d=u}catch(v){d=u}})();function a(v){if(i===setTimeout)return setTimeout(v,0);if((i===m||!i)&&setTimeout)return i=setTimeout,setTimeout(v,0);try{return i(v,0)}catch(S){try{return i.call(null,v,0)}catch(k){return i.call(this,v,0)}}}function y(v){if(d===clearTimeout)return clearTimeout(v);if((d===u||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(v);try{return d(v)}catch(S){try{return d.call(null,v)}catch(k){return d.call(this,v)}}}var _=[],E=!1,b,x=-1;function A(){!E||!b||(E=!1,b.length?_=b.concat(_):x=-1,_.length&&f())}function f(){if(!E){var v=a(A);E=!0;for(var S=_.length;S;){for(b=_,_=[];++x<S;)b&&b[x].run();x=-1,S=_.length}b=null,E=!1,y(v)}}r.nextTick=function(v){var S=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)S[k-1]=arguments[k];_.push(new g(v,S)),_.length===1&&!E&&a(f)};function g(v,S){this.fun=v,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function w(){}r.on=w,r.addListener=w,r.once=w,r.off=w,r.removeListener=w,r.removeAllListeners=w,r.emit=w,r.prependListener=w,r.prependOnceListener=w,r.listeners=function(v){return[]},r.binding=function(v){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(v){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),Yc,Dg,Fg,I=$a(()=>{Yc=z(Rg()),Dg=z(Og()),Fg=function(p){function l(){var i=this||self;return delete p.prototype.__magic__,i}if(typeof globalThis=="object")return globalThis;if(this)return l();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:l});var r=__magic__;return r}(Object)}),Hc={};sn(Hc,{default:()=>Zc});var Qr,_c,Zc,Mg=$a(()=>{"use strict";I(),Qr=z(require("react")),_c=p=>Qr.createElement("svg",ge({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},p),Qr.createElement("g",null,Qr.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Zc=_c}),dn={};sn(dn,{default:()=>Xc});var en,hc,Xc,Ya=$a(()=>{"use strict";I(),en=z(require("react")),hc=p=>en.createElement("svg",ge({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},p),en.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),en.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Xc=hc}),Kc={};sn(Kc,{AmountSelect:()=>bi,AmountSelectInput:()=>S0,AmountSlider:()=>B0,Data:()=>C0,FeeAccordion:()=>Fb,GasLimit:()=>si,GasPrice:()=>di,Receiver:()=>_b,SFTAmount:()=>vb,SelectToken:()=>Kb});wi.exports=Sr(Kc);I();I();I();var Me=z(require("react")),gc=require("@fortawesome/free-solid-svg-icons"),vc=require("@fortawesome/react-fontawesome"),Ia=z(require("classnames")),Pg=require("formik"),jg=z(require("react-select"));I();var zg=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zg));var Ee={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};I();I();I();var Jc=z(require("react")),iE=require("formik");I();I();var Qc=z(require("react")),sE=require("formik");I();I();var ei=z(require("react")),dE=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),uE=require("formik");I();I();I();var Er=require("@terradharitri/sdk-dapp/types/tokens.types");I();I();I();I();I();var mE=require("@terradharitri/sdk-dapp/constants/index"),fE=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),_E=z(require("bignumber.js"));I();I();I();var hE=require("bech32");I();I();I();var yo=(p,l)=>typeof l=="boolean"?l:Array.isArray(l)&&l.includes(p);I();I();I();var gE=require("@terradharitri/sdk-dapp/constants"),vE=require("@terradharitri/sdk-dapp/utils/account/getAccount");I();I();var bE=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");I();var yE=require("@terradharitri/sdk-dapp/utils/buildUrlParams");I();var qa=z(require("anchorme")),Ca=p=>p.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Wg=(p,l)=>{if(l){let r=`[Message hidden due to suspicious content - ${l.info}]`;if(p.length>1e3)return{output:r,stringWithLinks:p,found:!0};let i=Ca(p.normalize("NFKC")),d=qa.default.list(i),m=[];if(d.length>0){let u=r;d.forEach((a,y)=>{let{string:_}=a,E="",b="",x=_;for(let A=0;A<u.length;A++){let f=u.slice(A),[g]=qa.default.list(Ca(f));g&&_===g.string&&(E=u.substring(0,A))}for(let A=r.length;A>0;A--){let f=u.slice(0,A),[g]=qa.default.list(Ca(f));g&&_===g.string&&(b=u.substring(A))}m.push(E),m.push(x),u=b,y===d.length-1&&m.push(b)})}else m.push(p);return{output:r,stringWithLinks:m.join(""),found:!0}}else return{output:p,stringWithLinks:"",found:!1}};I();function Vg({docStyle:p}){let l={hoverColor:p.getPropertyValue("--border-color"),primaryColor:p.getPropertyValue("--primary"),bgColor:p.getPropertyValue("--card-bg"),mutedColor:p.getPropertyValue("--muted"),blackColor:p.getPropertyValue("--black")};return{valueContainer:()=>({padding:"0.125rem 0 0.125rem 0.2rem",lineHeight:"1.5",fontSize:"0.8125rem",maxWidth:"85%",display:"flex"}),control:(r,i)=>Ae(ge({},r),{minHeight:"0",flexWrap:"nowrap",backgroundColor:i.isDisabled?"#e9ecef":"transparent",borderColor:i.isDisabled?l.hoverColor:i.isFocused?l.primaryColor:l.blackColor,boxShadow:i.isFocused?`0 0 0 0.2rem #${l.primaryColor.replace("#","").trim()}33`:null,"&:hover":{borderColor:i.isFocused?l.primaryColor:"#b0b0b0"}}),input:r=>Ae(ge({},r),{paddingLeft:"0.4rem",marginLeft:"0",marginRight:"0"}),indicatorSeparator:r=>Ae(ge({},r),{marginTop:"0.3rem",marginBottom:"0.3rem"}),indicatorsContainer:r=>Ae(ge({},r),{zIndex:"0"}),dropdownIndicator:r=>Ae(ge({},r),{padding:"0 0.4rem"}),multiValue:r=>Ae(ge({},r),{backgroundColor:l.hoverColor,borderRadius:"4px"}),multiValueRemove:r=>Ae(ge({},r),{cursor:"pointer"}),multiValueLebel:r=>Ae(ge({},r),{lineHeight:"1.5"}),placeholder:r=>Ae(ge({},r),{marginLeft:"0",lineHeight:"2"}),option:(r,{isFocused:i,isSelected:d})=>Ae(ge({},r),{fontSize:"0.8125rem",cursor:"pointer",align:"left",backgroundColor:d?l.primaryColor:i?l.hoverColor:"transparent"}),menu:r=>Ae(ge({},r),{marginTop:"0.2rem",zIndex:"5"})}}I();var wE=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ti=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Gg=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),xE=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");I();I();var Na=require("@terradharitri/sdk-dapp/constants/index");function $g({feeLimit:p,rewaPriceInUsd:l}){let r=(0,ti.formatAmount)({input:p,decimals:Na.DECIMALS,digits:Na.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,Gg.getUsdValue)({amount:r,usd:l,decimals:Na.DIGITS})}`}I();var EE=require("@terradharitri/sdk-dapp/constants/index");I();I();var oi="5000000000000000",ri="0",Yg="WREWA-bd4d79";I();var kE=require("@terradharitri/sdk-dapp/constants/index"),SE=z(require("bignumber.js"));I();var AE=require("@terradharitri/sdk-dapp/constants/index");I();var TE=require("@terradharitri/sdk-dapp/constants/index");I();I();var IE=require("@terradharitri/sdk-core"),qE=require("@terradharitri/sdk-dapp/constants/index"),CE=z(require("bignumber.js"));I();I();var NE=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");I();var BE=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");I();var LE=z(require("bignumber.js"));I();var UE=require("@terradharitri/sdk-dapp/constants/index"),RE=require("@terradharitri/sdk-dapp/utils/smartContracts"),OE=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),DE=z(require("bignumber.js"));I();var FE=z(require("bignumber.js"));I();I();var ME=z(require("axios"));I();I();I();var Hg=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");I();var Zg=require("@terradharitri/sdk-dapp/constants/index");I();var Xg={D:"devnet",T:"testnet",1:"mainnet"},Kg={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function Jg(p){return Xg[p]}function Qg(p){return Kg[p]||Yg}function ev(p){let l=Jg(p),r=Zg.fallbackNetworkConfigurations[l].apiAddress;if(!r)throw"Could not extract api address for environment, check if you have a valid chainID";return r}function tv(p){return Ar(this,null,function*(){let l=ev(p);return yield(0,Hg.getServerConfiguration)(l)})}I();var ln={value:null};function ov(p){return ln.value={baseURL:p.apiAddress,timeout:Number(p.apiTimeout)},ln.value}function rv(p){return Ar(this,null,function*(){if(ln.value!=null)return ln.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),p!=null){let r=yield tv(p);return ov(r)}let l="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(l),l})}I();var Ba=require("@terradharitri/sdk-dapp/constants/index"),nv=z(require("bignumber.js")),bc,yc,wc,ni=(0,ti.formatAmount)({input:String((bc=Ba.GAS_PRICE)!=null?bc:1e9),decimals:(yc=Ba.DECIMALS)!=null?yc:18,showLastNonZeroDecimal:!0,digits:(wc=Ba.DIGITS)!=null?wc:4}),PE=new nv.default(ni).times(10).toString(10);I();var jE=require("@terradharitri/sdk-dapp/constants/index"),zE=z(require("bignumber.js"));I();var WE=z(require("bignumber.js"));I();I();var VE=require("yup");I();var xc=require("@terradharitri/sdk-dapp/constants/ledger.constants"),av=z(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Ha=require("yup"),lv=(0,Ha.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(p){let{ledger:l}=this.parent;return!(l&&p&&p.length&&!l.ledgerDataActive)}),pv=(0,Ha.string)().test({name:"hashSign",test:function(p){let{ledger:l,isGuarded:r}=this.parent;if(l){let{ledgerWithHashSign:i,ledgerWithGuardians:d}=(0,av.default)(l.version);if(p&&p.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${xc.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(r&&!d)return this.createError({message:`You need at least DharitrI app version ${xc.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),cv=[lv,pv],GE=cv.reduce((p,l)=>p.concat(l),(0,Ha.string)());I();var $E=require("@terradharitri/sdk-dapp/constants/index"),YE=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),HE=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ZE=require("yup");I();var XE=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),KE=z(require("bignumber.js")),JE=require("yup");I();var QE=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),e5=z(require("bignumber.js")),t5=require("yup");I();var o5=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),r5=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),n5=z(require("bignumber.js")),a5=require("yup");I();var l5=z(require("bignumber.js")),p5=require("yup");I();var c5=require("@terradharitri/sdk-dapp/constants/index"),i5=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),s5=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),d5=z(require("bignumber.js")),u5=require("yup");I();var m5=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),f5=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),_5=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),h5=z(require("bignumber.js")),g5=require("yup");I();var v5=z(require("bignumber.js")),b5=require("yup");I();var y5=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),w5=require("yup");I();var x5=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),E5=require("yup");I();I();var iv=(0,ei.createContext)({});function sv(){return(0,ei.useContext)(iv)}I();I();I();var k5=require("react"),S5=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),A5=z(require("lodash/uniqBy"));I();I();I();var T5=z(require("axios"));I();I();var dv=z(require("axios"));function uv(){return Ar(this,null,function*(){try{let p=yield rv(),{data:l}=yield dv.default.get("economics",p);return l}catch(p){return console.error("err fetching economics info",p),null}})}I();I();var I5=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),q5=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),C5=z(require("axios")),N5=z(require("lodash/uniqBy"));I();var B5=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),L5=z(require("axios"));I();var U5=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),R5=z(require("axios"));I();var mv=z(require("react")),O5=(0,mv.createContext)({});I();I();var D5=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),F5=require("@terradharitri/sdk-dapp/utils");I();var M5=require("react");I();var P5=require("react"),j5=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),fv=(0,Qc.createContext)({});function _v(){return(0,Qc.useContext)(fv)}I();var z5=require("react");I();I();var hv=({knownAddresses:p,inputValue:l,key:r})=>!p||!l?!1:p.some(i=>{var d;return Boolean((d=i[r])==null?void 0:d.startsWith(l))});I();I();I();var W5=require("react"),V5=require("@terradharitri/sdk-dapp/utils");I();var G5=require("react"),$5=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");I();I();var Y5=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),H5=z(require("axios"));I();var Z5=z(require("axios")),gv=(0,Jc.createContext)({});function ai(){return(0,Jc.useContext)(gv)}I();var li=z(require("react"));I();I();var vv=z(require("react")),X5=require("@terradharitri/sdk-dapp/constants/index"),K5=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),J5=z(require("bignumber.js")),Q5=require("formik");I();I();var bv=z(require("react")),ek=require("formik"),tk=z(require("lodash/uniqBy"));I();I();var pi=z(require("react")),yv=(0,pi.createContext)({});function Za(){return(0,pi.useContext)(yv)}I();I();var Ec=require("react"),wv=require("@terradharitri/sdk-dapp/constants/index"),La=require("@terradharitri/sdk-dapp/types/enums.types");function xv(){let{networkConfig:p}=Za(),[l,r]=(0,Ec.useState)(0);function i(){return Ar(this,null,function*(){let d=yield uv(),m=(d==null?void 0:d.price)||0;r(m)})}return(0,Ec.useEffect)(()=>{![La.EnvironmentsEnum.mainnet,La.EnvironmentsEnum.testnet,La.EnvironmentsEnum.devnet].includes(p==null?void 0:p.id)||i()},[p==null?void 0:p.id]),{rewaLabel:p.rewaLabel,rewaPriceInUsd:l,digits:wv.DIGITS}}I();var ok=(0,bv.createContext)({});I();I();var rk=require("@terradharitri/sdk-dapp/constants/index"),nk=require("formik");I();I();var Ev=z(require("react")),ak=require("@terradharitri/sdk-dapp/constants/index"),lk=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),pk=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ck=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ik=z(require("bignumber.js")),sk=require("formik");I();I();I();I();var dk=z(require("bignumber.js"));I();var uk=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),mk=z(require("bignumber.js"));I();I();var fk=require("react"),_k=require("@terradharitri/sdk-dapp/constants/index"),hk=require("@terradharitri/sdk-dapp/utils/smartContracts"),gk=z(require("bignumber.js")),vk=require("formik");I();I();var bk=require("@terradharitri/sdk-dapp/constants/index"),yk=z(require("bignumber.js")),wk=(0,Ev.createContext)({}),xk=(0,vv.createContext)({});I();I();var kv=z(require("react")),Ek=require("formik"),kk=(0,kv.createContext)({}),Sv=(0,li.createContext)({});function gt(){return(0,li.useContext)(Sv)}I();I();var Av=z(require("react")),Tv=require("react-select");I();var Iv=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Iv));var le={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"},qv=p=>Av.default.createElement(Tv.components.Control,Ae(ge({},p),{className:le.receiverSelectControl}));I();I();var Ua=z(require("react")),Cv=require("@fortawesome/free-solid-svg-icons"),Nv=require("@fortawesome/react-fontawesome"),Bv=z(require("classnames")),Lv=require("react-select");I();I();var Xa=(p,l)=>{let r=l.toLowerCase(),i=p.label.toLowerCase(),d=p.value.toLowerCase();return l?i.includes(r)||d.includes(r):!0};I();var Uv=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Rv=require("@terradharitri/sdk-dapp/utils"),kc=p=>p?p.filter(l=>(0,Rv.addressIsValid)(l.address)).map(l=>{let r=l.username?String((0,Uv.trimUsernameDomain)(l.username)):l.address;return{value:l.address,label:r}}):[];I();var Ov=({setOption:p,setAllValues:l})=>(r,i)=>{["input-blur","menu-close"].includes(i.action)||(l(r),r||p(null))};I();var Dv=({setInputValue:p,setOption:l,changeAndBlurInput:r})=>i=>{!i||(l(i),r(i.value),i.value!==i.label?p(i.label):p(i.value))};I();var Fv=({options:p,usernameAccounts:l,knownAddresses:r,setFieldValue:i,setInputValue:d,setOption:m})=>u=>{var a,y,_,E;let b=p.find(S=>S.value===u&&S.value!==S.label),x=b==null?void 0:b.label,A,f,g=(a=l[u])==null?void 0:a.username;g&&(x=g,A=g,f=(y=l[u])==null?void 0:y.rawUsername);let w=r.find(S=>S.address===u);w!=null&&w.username&&(x=w==null?void 0:w.username,A=w==null?void 0:w.username,f=w==null?void 0:w.rawUsername);let v=x!=null?x:u;d(v),m({value:u,label:v}),i("receiver",(E=(_=l[u])==null?void 0:_.address)!=null?E:u),i("receiverUsername",A),i("rawReceiverUsername",f)},Mv=p=>{let{selectProps:l,isDisabled:r,options:i}=p,{menuIsOpen:d,value:m,isLoading:u}=l,a=(0,Ua.useMemo)(()=>i.find(b=>{let x=b,A=m;return A?Xa(x,A.label):null}),[m,i]),y=i.length===0&&!u,_=Boolean(m)&&!a,E=r||y||_;return u?Ua.default.createElement(Nv.FontAwesomeIcon,{icon:Cv.faSpinner,spin:!0,className:le.receiverSelectSpinner}):Ua.default.createElement(Lv.components.DropdownIndicator,Ae(ge({},p),{className:(0,Bv.default)(le.receiverSelectIndicator,{[le.expanded]:d,[le.hidden]:E})}))};I();I();var Pv=z(require("react")),jv=require("@terradharitri/sdk-dapp/utils"),zv=z(require("classnames")),Wv=require("react-select");I();var Sk=z(require("react")),Ak=require("@terradharitri/sdk-dapp/constants/index");I();I();var Vv=(p,l)=>{let r=p.current;if(!r||!r.state.focusedOption)return!1;let i=r.state.focusedOption,d=i.label.toLowerCase(),m=i.value.toLowerCase(),u=d!==m,a=u&&d.startsWith(l.toLowerCase());return u&&!l?!0:a},Gv=p=>l=>{let{selectProps:r,value:i}=l,{inputValue:d,menuIsOpen:m}=r,{receiverUsernameInfo:{receiverUsername:u}}=gt(),a=Vv(p,d),y=(0,jv.addressIsValid)(String(i)),_=Boolean(u)||a,E=y&&m||!y&&d;return Pv.default.createElement(Wv.components.Input,Ae(ge({},l),{"data-testid":"receiver",className:(0,zv.default)(le.receiverSelectInput,{[le.visible]:E,[le.spaced]:_})}))};I();I();var $v=z(require("react")),Yv=require("react-select"),Hv=p=>$v.default.createElement(Yv.components.Menu,Ae(ge({},p),{className:le.receiverSelectMenu}));I();I();var ot=z(require("react")),Ra=require("@terradharitri/sdk-dapp/UI/Trim"),tn=z(require("classnames")),Zv=require("react-select");I();var{default:pn}=(Mg(),Sr(Hc)),Xv=p=>{let{selectProps:l,focusedOption:r}=p,{value:i,inputValue:d}=l,m=r,u=m?m.label.toLowerCase():null,a=m&&m.label!==m.value,y=(u&&(!i||i&&d)?u.startsWith(d.toLowerCase()):!1)&&m?m.label.replace(m.label.substring(0,d.length),d):null,_=y&&!d,E=y&&d.length<y.length/2,b=y&&Boolean(d)&&E,x=y&&Boolean(d);return ot.default.createElement(ot.default.Fragment,null,b&&!a&&ot.default.createElement("div",{className:(0,tn.default)(le.receiverSelectAutocomplete,le.receiverSelectAutocompleteUntrimmed)},y),x&&a&&ot.default.createElement("div",{className:(0,tn.default)(le.receiverSelectAutocomplete,le.receiverSelectAutocompleteUsername)},ot.default.createElement(pn,{className:le.receiverSelectAutocompleteIcon}),y,ot.default.createElement("span",{className:le.receiverSelectAutocompleteWrapper},"(",ot.default.createElement(Ra.Trim,{text:m.value}),")")),_&&ot.default.createElement("span",{className:(0,tn.default)(le.receiverSelectAutocomplete,{[le.receiverSelectAutocompleteUsername]:a})},a?ot.default.createElement(ot.default.Fragment,null,ot.default.createElement("span",null,ot.default.createElement(pn,{className:(0,tn.default)(le.receiverSelectAutocompleteIcon,le.receiverSelectAutocompleteIconMuted)}),m.label),ot.default.createElement("span",{className:le.receiverSelectAutocompleteWrapper},"(",ot.default.createElement(Ra.Trim,{text:m.value}),")")):ot.default.createElement(Ra.Trim,{text:y})),ot.default.createElement(Zv.components.MenuList,Ae(ge({},p),{className:le.receiverSelectList})))};I();I();var Xt=z(require("react")),Sc=require("@terradharitri/sdk-dapp/UI/Trim"),Kv=z(require("classnames")),Jv=require("react-select");I();I();var on=z(require("react"));I();var Qv=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Qv));var eb={highlight:"dapp-core-component__styles-modules__highlight"},ci=({highlight:p,text:l=""})=>{let r=l.split(" "),i=p.toLowerCase(),d=new RegExp(`(${i})`,"gi"),m=r.map(u=>u.split(d).filter(a=>a));return on.default.createElement("span",{className:eb.highlight},m.map((u,a)=>{let y=`${u}-${a}`;return on.default.createElement("span",{key:y},u.map((_,E)=>{let b=_.toLowerCase()===i,x=i&&b,A=`${_}-${E}`;return x?on.default.createElement("strong",{key:A},_):on.default.createElement("span",{key:A},_)}))}))},tb=p=>{let{isFocused:l,data:r,selectProps:i}=p,{inputValue:d}=i,m=r,u=m.value!==m.label;return Xt.default.createElement(Jv.components.Option,Ae(ge({},p),{className:(0,Kv.default)(le.receiverSelectOption,{[le.focused]:l})}),u?Xt.default.createElement(Xt.default.Fragment,null,Xt.default.createElement("span",{className:le.receiverSelectOptionUsername},Xt.default.createElement(pn,{className:le.receiverSelectOptionUsernameIcon}),Xt.default.createElement(ci,{text:m.label,highlight:d})),Xt.default.createElement("span",{className:le.receiverSelectOptionNameWrapper},"(",Xt.default.createElement(Sc.Trim,{text:m.value,className:le.receiverSelectOptionName}),")")):Xt.default.createElement(Sc.Trim,{text:m.value,className:le.receiverSelectOptionName}))};I();I();var ob=z(require("react")),rb=z(require("classnames")),nb=require("react-select"),ab=p=>{let{selectProps:l,isFocused:r,className:i}=p,{menuIsOpen:d}=l;return ob.default.createElement(nb.components.SelectContainer,Ae(ge({},p),{className:(0,rb.default)(i,{[le.expanded]:d,[le.focused]:r&&d})}))};I();I();var Kt=z(require("react")),Ac=require("@terradharitri/sdk-dapp/UI/Trim"),lb=require("@terradharitri/sdk-dapp/utils"),pb=z(require("classnames")),cb=require("react-select"),ib=p=>{let{selectProps:l,isDisabled:r}=p,{value:i,menuIsOpen:d}=l,m=i,{receiverInfo:{receiver:u},receiverUsernameInfo:{receiverUsername:a}}=gt(),y=a!=null?a:m&&m.value!==m.label,_=m?{value:u!=null?u:m.value,label:m.label}:null,E=_&&(y||!y&&!d)&&(0,lb.addressIsValid)(_.value);return Kt.default.createElement(cb.components.ValueContainer,Ae(ge({},p),{className:le.receiverSelectValue}),E&&Kt.default.createElement("span",{className:(0,pb.default)(le.receiverSelectSingle,{[le.disabled]:r})},y?Kt.default.createElement(Kt.default.Fragment,null,Kt.default.createElement("span",{className:le.receiverSelectSingleUsername},Kt.default.createElement(pn,{className:le.receiverSelectSingleUsernameIcon}),_.label),Kt.default.createElement("span",{className:le.receiverSelectSingleTrimWrapper},"(",Kt.default.createElement(Ac.Trim,{text:_.value,className:le.receiverSelectSingleTrim}),")")):Kt.default.createElement(Ac.Trim,{text:_.value,className:le.receiverSelectSingleTrim})),p.children)};I();I();var sb=require("formik"),ii=()=>{let{receiverInfo:{receiverError:p,isReceiverInvalid:l},receiverUsernameInfo:{receiverUsernameError:r,isReceiverUsernameInvalid:i,receiverUsername:d}}=gt(),{touched:{receiver:m}}=(0,sb.useFormikContext)(),u=l&&m||i;return d!=null&&d.startsWith("drt1")?{isInvalid:l,receiverErrorDataTestId:"receiverError",error:p}:{isInvalid:u,receiverErrorDataTestId:i?"receiverUsernameError":"receiverError",error:i?r:p}};I();I();var db=require("@terradharitri/sdk-dapp/utils"),ub=require("formik");I();I();var mb=({knownAddresses:p,inputValue:l})=>!p||!l?!1:p.filter(r=>{var i;let d=(i=r.username)!=null?i:r.address,m=r.address;return Xa({label:d,value:m,data:{label:d,value:m}},l)}).length>0,fb=({menuIsOpen:p})=>{let{isInvalid:l}=ii(),{values:{nft:r}}=(0,ub.useFormikContext)(),{showUsernameError:i,isUsernameLoading:d,isUsernameDebouncing:m,usernameIsAmongKnown:u,searchQueryIsAddress:a}=ai(),{receiverInputValue:y,knownAddresses:_}=_v(),E=hv({key:"address",knownAddresses:_,inputValue:y}),b=mb({inputValue:y,knownAddresses:_}),x=a&&(!E||!p)&&!(0,db.addressIsValid)(y),A=Boolean(i&&!(p&&E)&&!(p&&u));return{isAddressError:x||(r?l:!1),isUsernameError:A,isRequiredError:l&&!A&&!d&&!m&&!x&&!b&&!y,isReceiverDropdownOpened:y&&b&&p}},_b=p=>{let l=(0,Me.useRef)(null),{className:r}=p,{setFieldValue:i}=(0,Pg.useFormikContext)(),{receiverInfo:{scamError:d,fetchingScamAddress:m,receiverInputValue:u,setReceiverInputValue:a,knownAddresses:y,receiver:_,onBlurReceiver:E,onChangeReceiver:b},receiverUsernameInfo:{receiverUsername:x},formInfo:{readonly:A}}=gt(),[f,g]=(0,Me.useState)(!1),[w,v]=(0,Me.useState)(_?{label:_,value:_}:null),{receiverErrorDataTestId:S,error:k}=ii(),{isAddressError:U,isUsernameError:O,isRequiredError:L,isReceiverDropdownOpened:J}=fb({menuIsOpen:f}),{usernameAccounts:ee,isUsernameLoading:te}=ai(),Q=()=>{E(new Event("blur"));let N=y==null?void 0:y.find(F=>F.username===u&&F.address===_);N&&(i("receiver",N.address),i("receiverUsername",N.username),i("rawReceiverUsername",N.rawUsername))},pe=y==null?void 0:y.find(N=>N.username===u&&N.address===_),ne=(0,Me.useMemo)(()=>kc(y),[y]),H=pe?kc([pe]):ne,Y=Fv({setFieldValue:i,setInputValue:a,setOption:v,options:H,knownAddresses:y!=null?y:[],usernameAccounts:ee}),X=(0,Me.useCallback)(Ov({setAllValues:Y,setOption:v}),[]),ce=(0,Me.useCallback)(N=>{b(N?N.trim():""),setTimeout(Q)},[]),ie=Dv({changeAndBlurInput:ce,setOption:v,setInputValue:a}),be=(0,Me.useMemo)(()=>Gv(l),[l]);(0,Me.useEffect)(()=>{if(!_)return;let N=Object.keys(ee).find(F=>{var ve;return((ve=ee[F])==null?void 0:ve.address)===_});Y(N!=null?N:_),N&&a(N)},[ee,_]);let he=U||O||L,me=he&&!f;return Me.default.createElement("div",{className:(0,Ia.default)(le.receiver,r)},Me.default.createElement("div",{className:Ee.label,"data-testid":"receiverLabel","data-loading":m},"Receiver"),Me.default.createElement(jg.default,{value:w,onInputChange:X,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:yo("receiver",A),options:H,filterOption:Xa,noOptionsMessage:()=>null,onChange:ie,onBlur:Q,isMulti:!1,ref:l,inputValue:u,onMenuClose:()=>g(!1),onMenuOpen:()=>g(!0),components:{Menu:Hv,Input:be,Control:qv,ValueContainer:ib,DropdownIndicator:Mv,SelectContainer:ab,MenuList:Xv,Option:tb,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,Ia.default)(le.receiverSelectContainer,{[le.opened]:J,[le.invalid]:he||d})}),me&&Me.default.createElement("div",{"data-testid":S,className:Ee.error},k),te&&Me.default.createElement("div",{className:le.loading},"Loading..."),x&&Me.default.createElement("span",{className:le.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",Me.default.createElement(vc.FontAwesomeIcon,{icon:gc.faCheck,className:le.foundIcon})),d&&Me.default.createElement("div",{"data-testid":"receiverScam",className:(0,Ia.default)(Ee.error,Ee.scam)},Me.default.createElement("span",null,Me.default.createElement(vc.FontAwesomeIcon,{icon:gc.faExclamationTriangle}),Me.default.createElement("small",null,d))))};I();I();var It=z(require("react")),hb=z(require("bignumber.js")),Oa=z(require("classnames"));I();var gb=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gb));var Po={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"},vb=p=>{let{className:l}=p,{formInfo:{readonly:r},amountInfo:i,tokensInfo:d}=gt(),{amount:m,error:u,onFocus:a,onBlur:y,onChange:_,isInvalid:E,onMaxClicked:b,maxAmountAvailable:x,isMaxButtonVisible:A}=i,{nft:f}=d,g=f!=null&&f.balance?new hb.default(f.balance).isGreaterThan(0):!1,w=v=>{v.preventDefault(),b()};return It.default.createElement("div",{className:(0,Oa.default)(Po.amount,l)},It.default.createElement("div",{className:Po.label},It.default.createElement("label",{htmlFor:"amount",className:Ee.label},"Amount"),g&&f&&It.default.createElement("div",{"data-value":`${x} ${f.identifier}`,className:(0,Oa.default)(Po.balance,l)},It.default.createElement("span",null,"Available:")," ",It.default.createElement("span",{"data-testid":`available-${f.identifier}`,className:Po.available},It.default.createElement("span",{className:Po.amount},x)," ",f.ticker))),It.default.createElement("div",{className:Po.wrapper},It.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:m,disabled:yo("amount",r),onFocus:a,onBlur:y,onChange:_,autoComplete:"off",className:(0,Oa.default)(Ee.input,{[Ee.invalid]:E,[Ee.disabled]:yo("amount",r)})}),A&&It.default.createElement("a",{href:"/","data-testid":"maxBtn",className:Po.max,onClick:w,onMouseDown:v=>{v.preventDefault()}},"Max")),E&&It.default.createElement("div",{className:Ee.error,"data-testid":"amountError"},u))};I();I();var _t=z(require("react")),Tc=require("@fortawesome/free-solid-svg-icons"),Ic=require("@fortawesome/react-fontawesome"),bb=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),qc=z(require("classnames")),yb=z(require("react-collapsed"));I();var uo=z(require("react")),wb=require("@fortawesome/free-solid-svg-icons"),xb=require("@fortawesome/react-fontawesome"),Eb=z(require("bignumber.js")),Cc=z(require("classnames")),kb=require("react-number-format");I();I();var jo=require("@terradharitri/sdk-dapp/constants/index"),Sb=require("@terradharitri/sdk-dapp/utils/validation"),mo=z(require("bignumber.js")),Ab=(p,l)=>{let r=l!=null?l:jo.DIGITS;if((0,Sb.stringIsFloat)(p)){if(new mo.default(p).isZero())return"0";let i=new mo.default(p).toFormat(r);return i=parseFloat(i)>0?i:new mo.default(p).toFormat(jo.DIGITS),i=parseFloat(i)>0?i:new mo.default(p).toFormat(jo.DIGITS+2),i=parseFloat(i)>0?i:new mo.default(p).toFormat(jo.DIGITS+4),i=parseFloat(i)>0?i:new mo.default(p).toFormat(jo.DIGITS+6),i=parseFloat(i)>0?i:new mo.default(p).toFormat(jo.DIGITS+10),parseFloat(i)>0?i:new mo.default(p).toFormat(jo.DIGITS+14)}return"0"};I();var Nc=p=>p.replace(/,/g,"");I();var Bc=require("react"),Tb={value:"",count:0},Ib=(p,l)=>{let[r,i]=(0,Bc.useState)(Tb);return(0,Bc.useEffect)(()=>{let d=setTimeout(()=>{i(p)},l);return()=>clearTimeout(d)},[p.count]),r};I();var qb=z(require("bignumber.js")),Ka=p=>{let[l,r]=p.split(""),i=new qb.default(l).isZero();return Boolean(i&&r&&r!==".")};I();var Cb=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cb));var nt={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},si=()=>{let{formInfo:p,gasInfo:l}=gt(),{readonly:r}=p,{defaultGasLimit:i,onResetGasLimit:d,onChangeGasLimit:m,onBlurGasLimit:u,gasLimit:a,gasLimitError:y,isGasLimitInvalid:_}=l,E=g=>{g.preventDefault(),d()},b=({value:g,floatValue:w})=>(!w||!(0,Eb.default)(w).isNaN())&&!Ka(g),x=g=>{m(g.value,!0)},A=a!==i&&!r,f=yo("gasLimit",r);return uo.default.createElement("div",{className:nt.gas},uo.default.createElement("label",{className:Ee.label,htmlFor:"gasLimit"},"Gas Limit"),uo.default.createElement("div",{className:nt.wrapper},uo.default.createElement(kb.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:f,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:u,onValueChange:x,required:!0,isAllowed:b,thousandSeparator:",",thousandsGroupStyle:"thousand",value:a,valueIsNumericString:!0,allowNegative:!1,className:(0,Cc.default)(Ee.input,nt.input,{[Ee.disabled]:f,[Ee.invalid]:_,[nt.spaced]:A})}),A&&uo.default.createElement("div",{className:nt.actions},uo.default.createElement("div",{onClick:E,"data-testid":"gasLimitResetBtn",className:(0,Cc.default)(nt.action,{[nt.disabled]:f})},uo.default.createElement(xb.FontAwesomeIcon,{icon:wb.faUndo,className:nt.icon}))),_&&uo.default.createElement("div",{className:Ee.error,"data-testid":"gasLimitError"},y)))};I();I();var fo=z(require("react")),Nb=require("@fortawesome/free-solid-svg-icons"),Bb=require("@fortawesome/react-fontawesome"),Lb=z(require("bignumber.js")),Lc=z(require("classnames")),Ub=require("react-number-format"),di=()=>{let{networkConfig:p}=Za(),{gasInfo:l,formInfo:r}=gt(),{readonly:i}=r,{rewaLabel:d}=p,{gasPrice:m,gasPriceError:u,isGasPriceInvalid:a,onChangeGasPrice:y,onBlurGasPrice:_,onResetGasPrice:E}=l,b=m!==ni&&!i,x=yo("gasPrice",i),A=({value:w,floatValue:v})=>(!v||!(0,Lb.default)(v).isNaN())&&!Ka(w),f=w=>{w.preventDefault(),E()},g=w=>{y(w.value,!0)};return fo.default.createElement("div",{className:nt.gas},fo.default.createElement("label",{className:Ee.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),fo.default.createElement("div",{className:nt.wrapper},fo.default.createElement(Ub.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:x,id:"gasPrice",inputMode:"decimal",isAllowed:A,name:"gasPrice",onBlur:_,onValueChange:g,required:!0,suffix:` ${d}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:m,valueIsNumericString:!0,allowNegative:!1,className:(0,Lc.default)(Ee.input,nt.input,{[Ee.disabled]:x,[Ee.invalid]:a,[nt.spaced]:b})}),b&&fo.default.createElement("div",{className:nt.actions},fo.default.createElement("div",{onClick:f,className:(0,Lc.default)(nt.action,{[nt.disabled]:x})},fo.default.createElement(Bb.FontAwesomeIcon,{icon:Nb.faUndo,className:nt.icon})))),a&&fo.default.createElement("div",{className:Ee.error,"data-testid":"gasPriceError"},u))};I();var Rb=z(require("react"));I();var Ob=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ob));var go={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"},Db=({feeLimit:p,rewaPriceInUsd:l})=>p===ri?null:Rb.default.createElement("span",{className:go.fiat,"data-testid":"feeInFiat"},"(",$g({feeLimit:p,rewaPriceInUsd:l}),")"),Fb=({className:p})=>{let{gasInfo:l,tokensInfo:r}=gt(),{feeLimit:i,gasCostLoading:d,gasPriceError:m,gasLimitError:u}=l,{rewaPriceInUsd:a,rewaLabel:y}=r,[_,E]=(0,_t.useState)(Boolean(m||u)),{getCollapseProps:b,getToggleProps:x}=(0,yb.default)({isExpanded:_}),A=()=>{E(f=>!f)};return _t.default.createElement("div",{className:(0,qc.default)(go.fee,p)},_t.default.createElement("label",{className:Ee.label},"Fee"),_t.default.createElement("div",ge({className:go.trigger},x({onClick:A})),_t.default.createElement("span",{className:go.limit,"data-testid":"feeLimit"},_t.default.createElement(bb.FormatAmount,{value:i,showLastNonZeroDecimal:!0,rewaLabel:y})),d&&_t.default.createElement(Ic.FontAwesomeIcon,{icon:Tc.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),_t.default.createElement(Db,{rewaPriceInUsd:a,feeLimit:i}),_t.default.createElement(Ic.FontAwesomeIcon,{icon:Tc.faChevronRight,className:(0,qc.default)(go.arrow,{[go.active]:_})})),_t.default.createElement("div",ge({className:go.expandable},b()),_t.default.createElement("div",{className:go.content},_t.default.createElement(di,null),_t.default.createElement(si,null))))};I();I();var bo=z(require("react")),Mb=z(require("@terradharitri/sdk-dapp/constants/index")),Pb=z(require("classnames")),ui=z(require("react-select"));I();var jb=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jb));var Uc={selectTokenContainer:"dapp-core-component__styles-module__selectTokenContainer"};I();I();var Ze=z(require("react")),zb=require("@fortawesome/free-solid-svg-icons"),Wb=require("@fortawesome/react-fontawesome"),Vb=z(require("@terradharitri/sdk-dapp/constants/index")),Gb=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),$b=z(require("classnames"));I();var Yb=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yb));var ir={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},Hb=(Ya(),Sr(dn)).default,Zb=({RewaIcon:p,inDropdown:l=!1,isRewa:r,nftTokenDetails:i,nftType:d,token:m})=>{var u,a;let{name:y,identifier:_,balance:E,decimals:b}=m,x=((u=m.assets)==null?void 0:u.svgUrl)||((a=m.assets)==null?void 0:a.pngUrl)||"",A=x?28:20,[f,g]=(0,Ze.useState)(y);(0,Ze.useEffect)(()=>{var k;(k=i==null?void 0:i.uris)!=null&&k.some(U=>{let O=Yc.Buffer.from(String(U),"base64").toString(),{found:L}=Wg(O,i==null?void 0:i.scamInfo);return L})||g(y)},[y]);let w=Ze.default.createElement(Wb.FontAwesomeIcon,{icon:zb.faDiamond});d==Er.NftEnumType.NonFungibleDCDT&&(w=Ze.default.createElement("div",{className:"nft-type","data-testid":`${_}-type-nft`},"NFT")),d===Er.NftEnumType.SemiFungibleDCDT&&(w=Ze.default.createElement("div",{className:"nft-type","data-testid":`${_}-type-sft`},"SFT"));let v=!l&&d!==Er.NftEnumType.NonFungibleDCDT,S=Ze.default.createElement("div",{className:ir.tokenElementCircle},w);return x&&(S=Ze.default.createElement("img",{className:ir.tokenElementCircle,src:x,alt:y,height:A})),r&&(S=Ze.default.createElement("div",{className:ir.tokenElementCircle},p?Ze.default.createElement(p,{height:36}):Ze.default.createElement(Hb,{height:36}))),Ze.default.createElement("div",{className:(0,$b.default)(Ee.value,ir.tokenElement)},Ze.default.createElement("div",{className:ir.tokenElementWrapper},S),Ze.default.createElement("div",{"data-testid":"tokenName"},Ze.default.createElement("span",{"data-testid":`${_}-element`},Ze.default.createElement("span",null,f)," ",Ze.default.createElement("span",{className:ir.tokenElementIdentifier},_)),v&&Ze.default.createElement(Gb.FormatAmount,{rewaLabel:_,value:E||ri,digits:d===Er.NftEnumType.SemiFungibleDCDT?0:Vb.DIGITS,token:_,showLabel:!1,decimals:b,"data-testid":`${_}-balance`})))},Xb=p=>bo.default.createElement("div",{className:`token-option ${p.isSelected?"is-selected":""}`,"data-testid":`${p.value}-option`},bo.default.createElement(ui.components.Option,ge({},p))),Kb=({className:p,label:l})=>{let{formInfo:r,accountInfo:i,tokensInfo:d}=gt(),{readonly:m}=r,{balance:u}=i,{getTokens:a,areTokensLoading:y,tokens:_,tokenId:E,rewaLabel:b,RewaIcon:x,tokenIdError:A,onChangeTokenId:f,isTokenIdInvalid:g}=d,w=({token:J})=>bo.default.createElement(Zb,{inDropdown:!0,token:J,isRewa:J.identifier===b,RewaIcon:x}),v=[{name:"DharitrI eGold",identifier:b,balance:u,decimals:Mb.DECIMALS,ticker:""},..._].map(J=>({value:J.identifier,label:J.name,assets:J.assets,token:J}));function S(){return Ar(this,null,function*(){yield a()})}let k=J=>{J&&f(J.value)},U=({value:J,label:ee},te)=>{if(Boolean(te)){let Q=te.trim().toLowerCase(),pe=ne=>ne.toLowerCase().indexOf(Q)>-1;return pe(J)||pe(ee)}return!0},O=window.getComputedStyle(document.documentElement),L=Vg({docStyle:O});return bo.default.createElement("div",{className:(0,Pb.default)(Uc.selectTokenContainer,p)},l&&bo.default.createElement("label",{htmlFor:"tokenId","data-testid":"tokenIdLabel",className:Uc.selectTokenLabel},l),bo.default.createElement(ui.default,{className:"selectToken",classNamePrefix:"selectToken",components:{Option:Xb},filterOption:U,formatOptionLabel:w,inputId:"tokenId",isDisabled:yo("tokenId",m),isLoading:y,name:"tokenId",onChange:k,onMenuOpen:S,openMenuOnFocus:!0,options:v,styles:p?{}:L,value:v.find(({value:J})=>J===E)||void 0}),g&&bo.default.createElement("div",{className:Ee.error,"data-testid":"tokenIdError"},bo.default.createElement("small",null,A)))};I();I();var qt=z(require("react")),Da=z(require("classnames"));I();var Jb=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jb));var vo={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};I();I();I();var Xe=z(require("react")),Qb=require("@terradharitri/sdk-dapp/utils/validation"),Fa=z(require("bignumber.js")),Rc=z(require("classnames")),ey=require("react-number-format");I();var ty=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ty));var rn={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"},oy=500,Oc=1e13,ry=({"data-testid":p,InfoDustComponent:l,disabled:r,handleBlur:i,handleChange:d,name:m,onDebounceChange:u,onFocus:a,onKeyDown:y,placeholder:_,required:E,usdPrice:b,value:x,usdValue:A,className:f,autoFocus:g,suffix:w})=>{let v=(0,Xe.useRef)(null),[S,k]=(0,Xe.useState)(),[U,O]=(0,Xe.useState)(!1),[L,J]=(0,Xe.useState)({value:x,count:0}),[ee,te]=(0,Xe.useState)(),Q=Ib(L,oy),pe=Y=>{Y.stopPropagation(),O(!0);let X=Nc(Y.target.value),ce=(0,Fa.default)(X).isLessThanOrEqualTo(Oc);if((X===""||ce)&&(k(X),Y.target.value=X,d(Y),u)){let ie={value:X,count:L.count+1};J(ie)}},ne=()=>{if(A)return te(`$${A}`);if(!b||!x)return te(void 0);let Y=Nc(x);if(!(x!==""&&(0,Qb.stringIsFloat)(Y))||Y==="")return te(void 0);let X=Ab(new Fa.default(Y).times(b!=null?b:0).toString(10),2);te(`$${X}`)},H=({value:Y,floatValue:X})=>(!X||(0,Fa.default)(X).isLessThanOrEqualTo(Oc))&&!Ka(Y);return(0,Xe.useEffect)(()=>{u&&U&&(O(!1),u(Q.value))},[Q]),(0,Xe.useEffect)(ne,[x,A,b]),(0,Xe.useEffect)(()=>{x!==S&&k(x)},[x]),Xe.default.createElement("div",{ref:v,className:(0,Rc.default)(rn.amountHolder,{[rn.showUsdValue]:Boolean(ee)},f)},Xe.default.createElement(ey.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":p||m,decimalSeparator:".",disabled:Boolean(r),id:m,inputMode:"decimal",isAllowed:H,name:m,onBlur:i,onChange:pe,onFocus:a,onKeyDown:y,placeholder:_,required:E,thousandSeparator:",",thousandsGroupStyle:"thousand",value:S,suffix:w,valueIsNumericString:!0,allowNegative:!1,autoFocus:g,className:(0,Rc.default)(Ee.input,rn.amountInput,{[Ee.disabled]:Boolean(r)})}),ee&&Xe.default.createElement("span",{className:rn.amountHolderUsd},Xe.default.createElement("small",{"data-testid":`tokenPrice_${b}`},ee!=="$0"?Xe.default.createElement(Xe.default.Fragment,null,"\u2248 "):Xe.default.createElement(Xe.default.Fragment,null),ee),l))},ny=(0,Xe.memo)(ry,(p,l)=>p.value===l.value&&p.usdPrice===l.usdPrice&&p.className===l.className&&p.disabled===l.disabled&&p.usdValue===l.usdValue);I();I();var Dc=z(require("react"));I();I();var xr=z(require("react")),ay=require("@fortawesome/free-solid-svg-icons"),ly=require("@fortawesome/react-fontawesome"),py=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),cy=require("react-tooltip"),Tk=require("react-tooltip/dist/react-tooltip.css");I();var iy=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(iy));var Ma={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},sy=({rewaLabel:p})=>xr.default.createElement("div",{className:Ma.infoDust},xr.default.createElement(cy.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:Ma.infoDustTooltip},"A minimal amount of"," ",xr.default.createElement(py.FormatAmount,{rewaLabel:p,value:oi,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),xr.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:Ma.infoDustTrigger},xr.default.createElement(ly.FontAwesomeIcon,{icon:ay.faInfoCircle,className:"i-icon"}))),dy=({rewaLabel:p,amount:l,maxAmountMinusDust:r,isMaxClicked:i,tokenId:d})=>l===r&&i&&d===p?Dc.default.createElement("span",{style:{marginLeft:"0.2rem"}},Dc.default.createElement(sy,{rewaLabel:p})):null;I();I();var uy=z(require("react")),my=require("@terradharitri/sdk-dapp/constants"),Fc=z(require("bignumber.js")),fy=z(require("classnames"));I();var Mc=z(require("bignumber.js")),_y=p=>{let l=new Mc.default(p!=null?p:"0"),r=new Mc.default(oi),i=l.minus(r);return i.isGreaterThan(0)?i.toString(10):"0"};I();var hy=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hy));var gy={max:"dapp-core-component__maxButton-module__max"};I();var zo=require("@terradharitri/sdk-dapp/constants"),vy=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),by=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ja=({amount:p="0",decimals:l=0,digits:r=zo.DIGITS,addCommas:i=!1,showLastNonZeroDecimal:d=!1})=>{if(p==null||!(0,by.stringIsInteger)(p))return"0";let m=a=>(0,vy.formatAmount)({input:p,digits:a,decimals:l,addCommas:i,showLastNonZeroDecimal:d}),u=m(r);return u=parseFloat(u)>0?u:m(zo.DIGITS),u=parseFloat(u)>0?u:m(zo.DIGITS+2),u=parseFloat(u)>0?u:m(zo.DIGITS+4),u=parseFloat(u)>0?u:m(zo.DIGITS+6),u=parseFloat(u)>0?u:m(zo.DIGITS+10),parseFloat(u)>0?u:m(zo.DIGITS+14)},yy=({token:p,rewaLabel:l,inputAmount:r,className:i,onMaxClick:d})=>{var m;let u=(p==null?void 0:p.identifier)===l,a=(m=p==null?void 0:p.balance)!=null?m:"0";if(a==="0")return null;let y=Ja({amount:u?_y(a):a,decimals:(p==null?void 0:p.decimals)||my.DECIMALS}),_=new Fc.default(r).isEqualTo(new Fc.default(y)),E=b=>{b.preventDefault(),d==null||d(y)};return _?null:uy.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,fy.default)(gy.max,i),onClick:E,onMouseDown:b=>{b.preventDefault()}},"Max")};I();I();var _o=z(require("react")),wy=z(require("classnames")),xy=z(require("react-select")),mi={};sn(mi,{Control:()=>My,IndicatorsContainer:()=>Yy,Input:()=>qy,Menu:()=>Oy,MenuList:()=>By,DharitrIIcon:()=>hi,Placeholder:()=>Wy,SmallLoader:()=>Sy,ValueComponent:()=>fi,getOption:()=>gi,getSingleValue:()=>vi,getValueContainer:()=>_i});I();I();var Pc=z(require("react")),Ey=require("@fortawesome/free-solid-svg-icons"),ky=require("@fortawesome/react-fontawesome"),Sy=({show:p,color:l})=>p?Pc.default.createElement("div",{className:"d-flex"},Pc.default.createElement(ky.FontAwesomeIcon,{icon:Ey.faSpinner,className:`fa-spin fast-spin ${l||"text-primary"}`})):null;I();I();var Ay=z(require("react")),Ty=require("react-select");I();var Iy=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Iy));var _e={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},qy=p=>Ay.default.createElement(Ty.components.Input,Ae(ge({},p),{className:_e.dropdown,"data-testid":"tokenSelectInput"}));I();var Cy=z(require("react")),Ny=require("react-select"),By=p=>{let l=p,{rx:r}=l,i=Bg(l,["rx"]);return Cy.default.createElement(Ny.components.MenuList,Ae(ge({},i),{className:_e.list}))};I();var Pa=z(require("react")),Ly=require("@fortawesome/free-solid-svg-icons"),Uy=require("@fortawesome/react-fontawesome"),Ry=require("react-select"),Oy=p=>Pa.default.createElement(Ry.components.Menu,Ae(ge({},p),{className:_e.menu}),p.selectProps.isLoading?Pa.default.createElement("div",{className:_e.loading},Pa.default.createElement(Uy.FontAwesomeIcon,{icon:Ly.faCircleNotch,className:"fa-spin",size:"lg"})):p.children);I();var Dy=z(require("react")),Fy=require("react-select"),My=p=>Dy.default.createElement(Fy.components.Control,Ae(ge({},p),{className:_e.control}));I();var Py=z(require("react")),jy=z(require("classnames")),zy=require("react-select"),Wy=p=>Py.default.createElement(zy.components.Placeholder,Ae(ge({},p),{className:(0,jy.default)(_e.placeholder,{[_e.focused]:p.isFocused})}));I();var Vy=z(require("react")),Gy=z(require("classnames")),$y=require("react-select"),Yy=p=>Vy.default.createElement($y.components.IndicatorsContainer,Ae(ge({},p),{className:(0,Gy.default)(_e.indicator,{[_e.expanded]:p.selectProps.menuIsOpen})}));I();var ht=z(require("react")),Hy=require("@fortawesome/free-solid-svg-icons"),Zy=require("@fortawesome/react-fontawesome"),Xy=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ky=z(require("classnames")),Jy=require("react-select"),Qy=(Ya(),Sr(dn)).default,fi=({RewaIcon:p,tokenId:l,icon:r})=>{let{isRewa:i}=(0,Xy.getIdentifierType)(l);return i?ht.default.createElement("span",{className:_e.asset},p?ht.default.createElement(p,{className:_e.diamond}):ht.default.createElement(Qy,{className:_e.diamond})):r?ht.default.createElement("img",{src:r,className:_e.asset}):ht.default.createElement(Zy.FontAwesomeIcon,{icon:Hy.faDiamond,className:_e.asset})},e0=({children:p})=>ht.default.createElement("div",{className:_e.wrapper},p),_i=(p,l,r)=>i=>{var d,m;let{selectProps:u,isDisabled:a,children:y}=i,_=u.value,E=(m=(d=_==null?void 0:_.assets)==null?void 0:d.svgUrl)!=null?m:null,b=(0,ht.useMemo)(()=>{let x=String(_==null?void 0:_.token.usdPrice);return x!=null&&x.includes("$")?_==null?void 0:_.token.usdPrice:`$${_==null?void 0:_.token.usdPrice}`},[_==null?void 0:_.token.usdPrice]);return ht.default.createElement(Jy.components.ValueContainer,Ae(ge({},i),{className:_e.container}),ht.default.createElement("div",{className:(0,Ky.default)(_e.icon,l)},ht.default.createElement(fi,{RewaIcon:r,rewaLabel:p,icon:E,isDisabled:a,tokenId:_==null?void 0:_.value})),ht.default.createElement("div",{className:_e.payload},ht.default.createElement(e0,null,y,(_==null?void 0:_.token.usdPrice)&&ht.default.createElement("small",{className:_e.price},b))))};I();var Re=z(require("react")),t0=require("@fortawesome/free-solid-svg-icons"),o0=require("@fortawesome/react-fontawesome"),r0=require("@terradharitri/sdk-dapp/constants"),n0=require("@terradharitri/sdk-dapp/UI/UsdValue"),a0=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),l0=z(require("classnames")),p0=require("react-select"),{default:hi}=(Ya(),Sr(dn)),gi=({RewaIcon:p,TokenTickerIcon:l,showBalanceUsdValue:r,showTokenPrice:i})=>d=>{var m,u,a,y;let{data:_,isSelected:E,isFocused:b,isDisabled:x,selectProps:A}=d,f=_,{isRewa:g}=(0,a0.getIdentifierType)(f.value),w=f.token.assets?f.token.assets.svgUrl:null,v=Ja({amount:f.token.balance,decimals:f.token.decimals||r0.DECIMALS,addCommas:!0}),S=(u=(m=f.token)==null?void 0:m.usdPrice)==null?void 0:u.toString(),k=(y=(a=f.token)==null?void 0:a.valueUSD)==null?void 0:y.toString();return Re.default.createElement("div",{"data-testid":`${d.value}-option`},Re.default.createElement(p0.components.Option,Ae(ge({},d),{className:(0,l0.default)(_e.option,{[_e.selected]:E||b,[_e.disabled]:x})}),Re.default.createElement("div",{className:_e.image},g?Re.default.createElement("span",{className:_e.icon},p?Re.default.createElement(p,null):Re.default.createElement(hi,null)):w?Re.default.createElement("img",{src:w,className:_e.icon}):Re.default.createElement("span",{className:_e.icon},Re.default.createElement(o0.FontAwesomeIcon,{icon:t0.faDiamond,className:_e.diamond}))),Re.default.createElement("div",{className:_e.info},Re.default.createElement("div",{className:_e.left},Re.default.createElement("div",{className:_e.ticker},Re.default.createElement("span",{className:_e.value},A.inputValue?Re.default.createElement(ci,{text:f.token.ticker,highlight:A.inputValue}):f.token.ticker),l&&Re.default.createElement(l,{token:f.token})),i&&Re.default.createElement("small",{className:_e.price},S)),Re.default.createElement("div",{className:_e.right},Re.default.createElement("span",{className:_e.value},v),r&&k&&Re.default.createElement(n0.UsdValue,{usd:1,decimals:4,amount:k,"data-testid":"token-price-usd-value",className:_e.price,addEqualSign:!1}))),Re.default.createElement("div",{className:_e.children},d.children)))};I();var ja=z(require("react")),c0=z(require("classnames")),i0=require("react-select"),vi=p=>l=>{let{selectProps:r,children:i}=l,d=r.value;return ja.default.createElement(i0.components.SingleValue,Ae(ge({},l),{className:(0,c0.default)(_e.single,{[_e.focused]:l.selectProps.menuIsOpen})}),ja.default.createElement("div",{className:_e.ticker},i,p&&ja.default.createElement(p,{token:d==null?void 0:d.token})))},{Menu:s0,Control:d0,Input:u0,MenuList:m0,IndicatorsContainer:f0,Placeholder:_0}=mi,h0=p=>{let{name:l,options:r,isLoading:i=!1,className:d="",noOptionsMessage:m="No Tokens",disabledOption:u,rewaLabel:a,RewaIcon:y,disabled:_,value:E,onBlur:b,onFocus:x,onChange:A,onMenuOpen:f,chainId:g,wrapperClassName:w="",showTokenPrice:v=!1,showBalanceUsdValue:S=!1,selectedTokenIconClassName:k,TokenTickerIcon:U}=p,O=(0,_o.useRef)(null),L=[a,Qg(g)],J=(0,_o.useMemo)(()=>gi({rewaLabel:a,RewaIcon:y,showTokenPrice:v,showBalanceUsdValue:S,TokenTickerIcon:U}),[]),ee=(0,_o.useMemo)(()=>_i(a,k,y),[]),te=(0,_o.useMemo)(()=>vi(U),[]);(0,_o.useEffect)(()=>{let H=r.find(X=>X.value===(E==null?void 0:E.value)),Y=(H==null?void 0:H.token.balance)===(E==null?void 0:E.token.balance);!H||Y||A(H)},[r]);let Q=H=>L.includes(H),pe=H=>{var Y;let X=H.value===(u==null?void 0:u.value),ce=Q(H.value),ie=Q((Y=u==null?void 0:u.value)!=null?Y:"");return X||ce&&ie},ne=(H,Y)=>{let X=H.data.token.ticker?H.data.token.ticker.toLowerCase().includes(Y.toLowerCase()):!1,ce=H.data.token.name.toLowerCase().includes(Y.toLowerCase());return Boolean(Y)?X||ce:!0};return _o.default.createElement("div",{"data-testid":`${l}Select`,className:`${w} ${i?"select-holder-loading":""}`},_o.default.createElement("label",{htmlFor:l,"data-testid":"tokenIdLabel",className:_e.label},"Token"),_o.default.createElement(xy.default,{ref:O,inputId:l,name:l,options:r,openMenuOnFocus:!0,isDisabled:_,isLoading:i,value:E,isOptionDisabled:pe,onBlur:b,filterOption:ne,onFocus:x,onChange:H=>{A(H),O&&O.current!==null&&O.current.blur()},isSearchable:p.isSearchable,maxMenuHeight:260,onMenuOpen:f,noOptionsMessage:()=>m,className:(0,wy.default)(_e.select,d,{[_e.disabled]:p.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:s0,Control:d0,Input:u0,MenuList:m0,IndicatorsContainer:f0,ValueContainer:ee,Placeholder:_0,Option:J,SingleValue:te}}))};I();I();var g0=z(require("react")),v0=z(require("classnames")),b0=({hasErrors:p,className:l,error:r,"data-testid":i})=>p?g0.default.createElement("div",{className:(0,v0.default)(Ee.error,l),"data-testid":i},r):null;I();I();var za=z(require("react")),y0=z(require("classnames"));I();var w0=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(w0));var Wa={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"},x0=({label:p,value:l,className:r,token:i,"data-testid":d,"data-value":m})=>za.default.createElement("div",{"data-testid":d,"data-value":m,className:(0,y0.default)(Wa.balance,r)},za.default.createElement("span",{className:Wa.label},p,": "),za.default.createElement("span",{className:Wa.value},l)," ",i==null?void 0:i.ticker),bi=({className:p,label:l,name:r,wrapperControlsClassName:i,tokenSelectProps:d,tokenBalanceProps:m,amountInputProps:u,amountErrorProps:a,maxButtonProps:y,readonly:_})=>qt.default.createElement("div",{className:(0,Da.default)(vo.amount,p)},qt.default.createElement("div",{className:vo.label},l&&qt.default.createElement("label",{htmlFor:r,className:Ee.label,"data-testid":"amountLabel"},l),qt.default.createElement(x0,ge({},m))),qt.default.createElement("div",{className:(0,Da.default)(vo.wrapper,i,{[vo.error]:u.isInvalid||d.isInvalid||a.hasErrors,[vo.disabled]:_})},qt.default.createElement(ny,ge({},u)),qt.default.createElement("div",{className:(0,Da.default)(vo.interaction,y.wrapperClassName)},y.isMaxButtonVisible&&qt.default.createElement(yy,ge({},y)),qt.default.createElement("div",{className:vo.select},qt.default.createElement(h0,ge({},d))))),qt.default.createElement(b0,ge({},a)));I();var Va=z(require("react")),E0=require("@terradharitri/sdk-dapp/constants"),k0=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),S0=()=>{var p,l;let{checkInvalid:r}=sv(),{tokensInfo:i,amountInfo:d,formInfo:m}=gt(),{readonly:u}=m,{networkConfig:{rewaLabel:a,chainId:y}}=Za(),{rewaPriceInUsd:_}=xv(),{amount:E,onBlur:b,onChange:x,onMaxClicked:A,error:f,isInvalid:g,onFocus:w,maxAmountAvailable:v,isMaxClicked:S,isMaxButtonVisible:k,maxAmountMinusDust:U}=d,{allAvailableTokens:O,areTokensLoading:L,getTokens:J,isTokenIdInvalid:ee,RewaIcon:te,nft:Q,onChangeTokenId:pe,tokenDetails:ne,tokenId:H,tokenIdError:Y}=i,X=O.map(re=>({value:re.identifier,label:String(re.ticker),assets:re.assets,token:re})),{isRewa:ce}=(0,k0.getIdentifierType)(H),ie=X.find(({value:re})=>re===H),be={id:"tokenId",value:ie,name:"tokenId",isLoading:L,options:X,isSearchable:!0,onChange:re=>{re&&(pe(re.value),x(""))},onMenuOpen:J,disabled:yo("tokenId",u),error:Y,isInvalid:ee,rewaLabel:a,chainId:y,RewaIcon:te},he=(0,Va.useMemo)(()=>Va.default.createElement(dy,{amount:E,rewaLabel:a,maxAmountMinusDust:U,tokenId:H,isMaxClicked:S}),[E,a,U,H,S]),me={name:"amount",required:!0,value:E,placeholder:"Amount",handleBlur:b,"data-testid":"amount",handleChange:x,onFocus:w,usdPrice:ce?_:void 0,error:f,isInvalid:g,InfoDustComponent:he},N={token:ne,inputAmount:E,onMaxClick:A,isMaxClicked:S,isMaxButtonVisible:k},F=r("amount")&&!me.value,ve={hasErrors:me.isInvalid||be.isInvalid||F,error:me.error||be.error,className:Ee.error,"data-testid":me.error?"amountError":"tokenIdError"},ke={"data-testid":`available-${(p=Q==null?void 0:Q.identifier)!=null?p:H}`,"data-value":`${v} ${(l=Q==null?void 0:Q.identifier)!=null?l:H}`,label:"Available",token:ie==null?void 0:ie.token,value:Ja({amount:ne.balance,decimals:ne.decimals||E0.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(Q==null?void 0:Q.type)===Er.NftEnumType.NonFungibleDCDT?null:Va.default.createElement(bi,{name:"tokenId",amountErrorProps:ve,tokenSelectProps:be,amountInputProps:me,tokenBalanceProps:ke,maxButtonProps:N,label:"Amount",readonly:u})};I();I();var Wo=z(require("react")),jc=z(require("classnames"));I();I();I();var Jt=z(require("react")),zc=require("@fortawesome/free-solid-svg-icons"),Wc=require("@fortawesome/react-fontawesome"),A0=require("formik");I();I();var yi=()=>{let{formInfo:{isRewaTransaction:p,readonly:l},dataFieldInfo:{isAdvancedModeEnabled:r}}=gt();return r?!1:!p||yo("data",l)};I();var T0=`.dapp-core-component__styles-module__advanced {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(T0));var nn={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"},I0=()=>{let{formInfo:{readonly:p,isRewaTransaction:l}}=gt(),{setFieldValue:r,values:i}=(0,A0.useFormikContext)(),[d,m]=(0,Jt.useState)(!1),[u,a]=(0,Jt.useState)(!1),y=yi(),_=!d&&!p&&y&&Boolean(i.data),E=()=>{m(!0),r("isAdvancedModeEnabled",!0)},b=()=>{a(!0),setTimeout(()=>{a(!1)},5e3)};return(0,Jt.useEffect)(()=>{!l&&d&&m(!1)},[l,i.amount]),_?u?Jt.default.createElement("div",{className:nn.advanced,"data-testid":"confirmAdvancedMode",onClick:E},Jt.default.createElement(Wc.FontAwesomeIcon,{icon:zc.faCheck,className:"i-icon"}),Jt.default.createElement("span",{className:nn.advancedText},"Confirm")):Jt.default.createElement("div",{"data-testid":"enableAdvancedMode",className:nn.advanced,onClick:b},Jt.default.createElement(Wc.FontAwesomeIcon,{icon:zc.faScrewdriverWrench,className:"i-icon"}),Jt.default.createElement("span",{className:nn.advancedText},"Advanced")):null};I();var q0=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(q0));var Vc={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"},C0=({className:p})=>{let{dataFieldInfo:{data:l,dataError:r,isDataInvalid:i,onChange:d,onBlur:m}}=gt(),u=yi();return Wo.default.createElement("div",{className:(0,jc.default)(Vc.data,p)},Wo.default.createElement("div",{className:vo.label},Wo.default.createElement("label",{htmlFor:"data",className:Ee.label},"Data"),Wo.default.createElement(I0,null)),Wo.default.createElement("div",{className:Vc.wrapper},Wo.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:u,"data-testid":"data",value:l,onBlur:m,onChange:d,spellCheck:"false",placeholder:"Add transaction data",className:(0,jc.default)(Ee.textarea,{[Ee.invalid]:i,[Ee.disabled]:u})})),i&&Wo.default.createElement("div",{className:Ee.error,"data-testid":"dataError"},r))};I();I();I();var ho=z(require("react")),Vo=z(require("classnames"));I();var N0=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(N0));var rt={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"},B0=({disabled:p,percentageValue:l=0,onPercentageChange:r,className:i})=>{let d=[0,25,50,75,100],m="amountSlider";return ho.default.createElement("div",{className:(0,Vo.default)(rt.amountSlider,i)},ho.default.createElement("div",{className:rt.amountSliderRange},ho.default.createElement("input",{name:m,id:m,"data-testid":m,type:"range",disabled:p,min:0,max:100,value:String(l),className:(0,Vo.default)(rt.amountSliderInput,{[rt.disabled]:p}),onChange:u=>{r(Number(u.target.value))}}),ho.default.createElement("div",{style:{width:`${l}%`},className:(0,Vo.default)(rt.amountSliderCompletion,{[rt.disabled]:p})}),d.map(u=>ho.default.createElement("span",{onClick:()=>r(u),key:`breakpoint-${u}`,style:{left:`${u}%`},className:(0,Vo.default)(rt.amountSliderBreakpoint,{[rt.completed]:u<=l,[rt.disabled]:p})})),d.map(u=>ho.default.createElement("span",{style:{left:`${u}%`},key:`breakpoint-${u}`,onClick:()=>r(u),className:(0,Vo.default)(rt.amountSliderPercentage,{[rt.exact]:u===l,[rt.disabled]:p})},u,"%")),ho.default.createElement("span",{style:{left:`${l}%`},className:(0,Vo.default)(rt.amountSliderThumb,{[rt.disabled]:p})},ho.default.createElement("strong",{className:(0,Vo.default)(rt.amountSliderThumbPercentage,{[rt.hidden]:d.includes(l)})},Math.round(l),"%"))))};});var Yi=dt((n3,$i)=>{"use strict";Se();var L0=Object.create,Tr=Object.defineProperty,U0=Object.getOwnPropertyDescriptor,R0=Object.getOwnPropertyNames,Ei=Object.getOwnPropertySymbols,O0=Object.getPrototypeOf,Ri=Object.prototype.hasOwnProperty,D0=Object.prototype.propertyIsEnumerable,ki=(p,l,r)=>l in p?Tr(p,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):p[l]=r,Oi=(p,l)=>{for(var r in l||(l={}))Ri.call(l,r)&&ki(p,r,l[r]);if(Ei)for(var r of Ei(l))D0.call(l,r)&&ki(p,r,l[r]);return p},rl=(p,l)=>()=>(p&&(l=p(p=0)),l),bn=(p,l)=>()=>(l||p((l={exports:{}}).exports,l),l.exports),nl=(p,l)=>{for(var r in l)Tr(p,r,{get:l[r],enumerable:!0})},Di=(p,l,r,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let d of R0(l))!Ri.call(p,d)&&d!==r&&Tr(p,d,{get:()=>l[d],enumerable:!(i=U0(l,d))||i.enumerable});return p},Ce=(p,l,r)=>(r=p!=null?L0(O0(p)):{},Di(l||!p||!p.__esModule?Tr(r,"default",{value:p,enumerable:!0}):r,p)),yn=p=>Di(Tr({},"__esModule",{value:!0}),p),F0=bn(p=>{"use strict";Z(),p.byteLength=y,p.toByteArray=E,p.fromByteArray=A;var l=[],r=[],i=typeof Uint8Array!="undefined"?Uint8Array:Array,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(m=0,u=d.length;m<u;++m)l[m]=d[m],r[d.charCodeAt(m)]=m;var m,u;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function a(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=f.indexOf("=");w===-1&&(w=g);var v=w===g?0:4-w%4;return[w,v]}function y(f){var g=a(f),w=g[0],v=g[1];return(w+v)*3/4-v}function _(f,g,w){return(g+w)*3/4-w}function E(f){var g,w=a(f),v=w[0],S=w[1],k=new i(_(f,v,S)),U=0,O=S>0?v-4:v,L;for(L=0;L<O;L+=4)g=r[f.charCodeAt(L)]<<18|r[f.charCodeAt(L+1)]<<12|r[f.charCodeAt(L+2)]<<6|r[f.charCodeAt(L+3)],k[U++]=g>>16&255,k[U++]=g>>8&255,k[U++]=g&255;return S===2&&(g=r[f.charCodeAt(L)]<<2|r[f.charCodeAt(L+1)]>>4,k[U++]=g&255),S===1&&(g=r[f.charCodeAt(L)]<<10|r[f.charCodeAt(L+1)]<<4|r[f.charCodeAt(L+2)]>>2,k[U++]=g>>8&255,k[U++]=g&255),k}function b(f){return l[f>>18&63]+l[f>>12&63]+l[f>>6&63]+l[f&63]}function x(f,g,w){for(var v,S=[],k=g;k<w;k+=3)v=(f[k]<<16&16711680)+(f[k+1]<<8&65280)+(f[k+2]&255),S.push(b(v));return S.join("")}function A(f){for(var g,w=f.length,v=w%3,S=[],k=16383,U=0,O=w-v;U<O;U+=k)S.push(x(f,U,U+k>O?O:U+k));return v===1?(g=f[w-1],S.push(l[g>>2]+l[g<<4&63]+"==")):v===2&&(g=(f[w-2]<<8)+f[w-1],S.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),S.join("")}}),M0=bn(p=>{Z(),p.read=function(l,r,i,d,m){var u,a,y=m*8-d-1,_=(1<<y)-1,E=_>>1,b=-7,x=i?m-1:0,A=i?-1:1,f=l[r+x];for(x+=A,u=f&(1<<-b)-1,f>>=-b,b+=y;b>0;u=u*256+l[r+x],x+=A,b-=8);for(a=u&(1<<-b)-1,u>>=-b,b+=d;b>0;a=a*256+l[r+x],x+=A,b-=8);if(u===0)u=1-E;else{if(u===_)return a?NaN:(f?-1:1)*(1/0);a=a+Math.pow(2,d),u=u-E}return(f?-1:1)*a*Math.pow(2,u-d)},p.write=function(l,r,i,d,m,u){var a,y,_,E=u*8-m-1,b=(1<<E)-1,x=b>>1,A=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=d?0:u-1,g=d?1:-1,w=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(y=isNaN(r)?1:0,a=b):(a=Math.floor(Math.log(r)/Math.LN2),r*(_=Math.pow(2,-a))<1&&(a--,_*=2),a+x>=1?r+=A/_:r+=A*Math.pow(2,1-x),r*_>=2&&(a++,_/=2),a+x>=b?(y=0,a=b):a+x>=1?(y=(r*_-1)*Math.pow(2,m),a=a+x):(y=r*Math.pow(2,x-1)*Math.pow(2,m),a=0));m>=8;l[i+f]=y&255,f+=g,y/=256,m-=8);for(a=a<<m|y,E+=m;E>0;l[i+f]=a&255,f+=g,a/=256,E-=8);l[i+f-g]|=w*128}}),P0=bn(p=>{"use strict";Z();var l=F0(),r=M0(),i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=a,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var d=2147483647;p.kMaxLength=d,a.TYPED_ARRAY_SUPPORT=m(),!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function m(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function u(e){if(e>d)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return y(e,t,o)}a.poolSize=8192;function y(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return a.from(n,t,o);var c=w(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,t,o){return y(e,t,o)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function _(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function E(e,t,o){return _(e),e<=0?u(e):t!==void 0?typeof o=="string"?u(e).fill(t,o):u(e).fill(t):u(e)}a.alloc=function(e,t,o){return E(e,t,o)};function b(e){return _(e),u(e<0?0:v(e)|0)}a.allocUnsafe=function(e){return b(e)},a.allocUnsafeSlow=function(e){return b(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=k(e,t)|0,n=u(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function A(e){for(var t=e.length<0?0:v(e.length)|0,o=u(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function f(e){if($(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return A(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,a.prototype),n}function w(e){if(a.isBuffer(e)){var t=v(e.length)|0,o=u(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?u(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function v(e){if(e>=d)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+d.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==a.prototype},a.compare=function(e,t){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),$(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,s=Math.min(o,n);c<s;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return a.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=a.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var s=e[o];if($(s,Uint8Array))c+s.length>n.length?a.from(s).copy(n,c):Uint8Array.prototype.set.call(n,s,c);else if(a.isBuffer(s))s.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=s.length}return n};function k(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Te(e).length;default:if(c)return n?-1:ye(e).length;t=(""+t).toLowerCase(),c=!0}}a.byteLength=k;function U(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,t,o);case"utf8":case"utf-8":return Y(this,t,o);case"ascii":return ie(this,t,o);case"latin1":case"binary":return be(this,t,o);case"base64":return H(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}a.prototype._isBuffer=!0;function O(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):U.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:a.compare(this,e)===0},a.prototype.inspect=function(){var e="",t=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(e,t,o,n,c){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var s=c-n,h=o-t,q=Math.min(s,h),D=this.slice(n,c),C=e.slice(t,o),B=0;B<q;++B)if(D[B]!==C[B]){s=D[B],h=C[B];break}return s<h?-1:h<s?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,we(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=a.from(t,n)),a.isBuffer(t))return t.length===0?-1:J(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):J(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function J(e,t,o,n,c){var s=1,h=e.length,q=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;s=2,h/=2,q/=2,o/=2}function D(Ie,qe){return s===1?Ie[qe]:Ie.readUInt16BE(qe*s)}var C;if(c){var B=-1;for(C=o;C<h;C++)if(D(e,C)===D(t,B===-1?0:C-B)){if(B===-1&&(B=C),C-B+1===q)return B*s}else B!==-1&&(C-=C-B),B=-1}else for(o+q>h&&(o=h-q),C=o;C>=0;C--){for(var P=!0,de=0;de<q;de++)if(D(e,C+de)!==D(t,de)){P=!1;break}if(P)return C}return-1}a.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},a.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},a.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function ee(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var s=t.length;n>s/2&&(n=s/2);for(var h=0;h<n;++h){var q=parseInt(t.substr(h*2,2),16);if(we(q))return h;e[o+h]=q}return h}function te(e,t,o,n){return se(ye(t,e.length-o),e,o,n)}function Q(e,t,o,n){return se(Ve(t),e,o,n)}function pe(e,t,o,n){return se(Te(t),e,o,n)}function ne(e,t,o,n){return se(Ge(t,e.length-o),e,o,n)}a.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return ee(this,e,t,o);case"utf8":case"utf-8":return te(this,e,t,o);case"ascii":case"latin1":case"binary":return Q(this,e,t,o);case"base64":return pe(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,t,o);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function Y(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var s=e[c],h=null,q=s>239?4:s>223?3:s>191?2:1;if(c+q<=o){var D,C,B,P;switch(q){case 1:s<128&&(h=s);break;case 2:D=e[c+1],(D&192)===128&&(P=(s&31)<<6|D&63,P>127&&(h=P));break;case 3:D=e[c+1],C=e[c+2],(D&192)===128&&(C&192)===128&&(P=(s&15)<<12|(D&63)<<6|C&63,P>2047&&(P<55296||P>57343)&&(h=P));break;case 4:D=e[c+1],C=e[c+2],B=e[c+3],(D&192)===128&&(C&192)===128&&(B&192)===128&&(P=(s&15)<<18|(D&63)<<12|(C&63)<<6|B&63,P>65535&&P<1114112&&(h=P))}}h===null?(h=65533,q=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),c+=q}return ce(n)}var X=4096;function ce(e){var t=e.length;if(t<=X)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=X));return o}function ie(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function be(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function he(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",s=t;s<o;++s)c+=$e[e[s]];return c}function me(e,t,o){for(var n=e.slice(t,o),c="",s=0;s<n.length-1;s+=2)c+=String.fromCharCode(n[s]+n[s+1]*256);return c}a.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n};function N(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=t,c=1,s=this[e+--n];n>0&&(c*=256);)s+=this[e+--n]*c;return c*=128,s>=c&&(s-=Math.pow(2,8*t)),s},a.prototype.readInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},a.prototype.readInt16LE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},a.prototype.readInt16BE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},a.prototype.readInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!1,52,8)};function F(e,t,o,n,c,s){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<s)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=1,h=0;for(this[t]=e&255;++h<o&&(s*=256);)this[t+h]=e/s&255;return t+o},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=o-1,h=1;for(this[t+s]=e&255;--s>=0&&(h*=256);)this[t+s]=e/h&255;return t+o},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,255,0),this[t]=e&255,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},a.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=0,h=1,q=0;for(this[t]=e&255;++s<o&&(h*=256);)e<0&&q===0&&this[t+s-1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=o-1,h=1,q=0;for(this[t+s]=e&255;--s>=0&&(h*=256);)e<0&&q===0&&this[t+s+1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},a.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ve(e,t,o,n,c,s){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ke(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,4,34028234663852886e22,-34028234663852886e22),r.write(e,t,o,n,23,4),o+4}a.prototype.writeFloatLE=function(e,t,o){return ke(this,e,t,!0,o)},a.prototype.writeFloatBE=function(e,t,o){return ke(this,e,t,!1,o)};function re(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,8,17976931348623157e292,-17976931348623157e292),r.write(e,t,o,n,52,8),o+8}a.prototype.writeDoubleLE=function(e,t,o){return re(this,e,t,!0,o)},a.prototype.writeDoubleBE=function(e,t,o){return re(this,e,t,!1,o)},a.prototype.copy=function(e,t,o,n){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},a.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<o;++s)this[s]=e;else{var h=a.isBuffer(e)?e:a.from(e,n),q=h.length;if(q===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<o-t;++s)this[s+t]=h[s%q]}return this};var ze=/[^+/0-9A-Za-z-_]/g;function We(e){if(e=e.split("=")[0],e=e.trim().replace(ze,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,t){t=t||1/0;for(var o,n=e.length,c=null,s=[],h=0;h<n;++h){if(o=e.charCodeAt(h),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&s.push(239,191,189);continue}else if(h+1===n){(t-=3)>-1&&s.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&s.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&s.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;s.push(o)}else if(o<2048){if((t-=2)<0)break;s.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;s.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;s.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return s}function Ve(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function Ge(e,t){for(var o,n,c,s=[],h=0;h<e.length&&!((t-=2)<0);++h)o=e.charCodeAt(h),n=o>>8,c=o%256,s.push(c),s.push(n);return s}function Te(e){return l.toByteArray(We(e))}function se(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function $(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function we(e){return e!==e}var $e=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),j0=bn((p,l)=>{Z();var r=l.exports={},i,d;function m(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=m}catch(v){i=m}try{typeof clearTimeout=="function"?d=clearTimeout:d=u}catch(v){d=u}})();function a(v){if(i===setTimeout)return setTimeout(v,0);if((i===m||!i)&&setTimeout)return i=setTimeout,setTimeout(v,0);try{return i(v,0)}catch(S){try{return i.call(null,v,0)}catch(k){return i.call(this,v,0)}}}function y(v){if(d===clearTimeout)return clearTimeout(v);if((d===u||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(v);try{return d(v)}catch(S){try{return d.call(null,v)}catch(k){return d.call(this,v)}}}var _=[],E=!1,b,x=-1;function A(){!E||!b||(E=!1,b.length?_=b.concat(_):x=-1,_.length&&f())}function f(){if(!E){var v=a(A);E=!0;for(var S=_.length;S;){for(b=_,_=[];++x<S;)b&&b[x].run();x=-1,S=_.length}b=null,E=!1,y(v)}}r.nextTick=function(v){var S=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)S[k-1]=arguments[k];_.push(new g(v,S)),_.length===1&&!E&&a(f)};function g(v,S){this.fun=v,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function w(){}r.on=w,r.addListener=w,r.once=w,r.off=w,r.removeListener=w,r.removeAllListeners=w,r.emit=w,r.prependListener=w,r.prependOnceListener=w,r.listeners=function(v){return[]},r.binding=function(v){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(v){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),Fi,z0,W0,Z=rl(()=>{Fi=Ce(P0()),z0=Ce(j0()),W0=function(p){function l(){var i=this||self;return delete p.prototype.__magic__,i}if(typeof globalThis=="object")return globalThis;if(this)return l();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:l});var r=__magic__;return r}(Object)}),al={};nl(al,{default:()=>Mi});var un,Si,Mi,Pi=rl(()=>{"use strict";Z(),un=Ce(require("react")),Si=p=>un.createElement("svg",Oi({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},p),un.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),un.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Mi=Si}),ji={};nl(ji,{default:()=>zi});var mn,Ai,zi,V0=rl(()=>{"use strict";Z(),mn=Ce(require("react")),Ai=p=>mn.createElement("svg",Oi({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},p),mn.createElement("g",null,mn.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),zi=Ai}),Wi={};nl(Wi,{Confirm:()=>Ho,default:()=>B1});$i.exports=yn(Wi);Z();var G0=require("react");Z();Z();var wo=Ce(require("react")),Ti=require("@terradharitri/sdk-dapp/constants/index"),Ii=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),$0=require("@terradharitri/sdk-dapp/UI/UsdValue/index");Z();var Y0=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Y0));var xo={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};Z();Z();Z();Z();var qk=require("bech32");Z();Z();Z();Z();Z();var fn=require("@terradharitri/sdk-dapp/types/tokens.types");Z();Z();var Ck=require("@terradharitri/sdk-dapp/constants"),Nk=require("@terradharitri/sdk-dapp/utils/account/getAccount");Z();Z();var Bk=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");Z();var Lk=require("@terradharitri/sdk-dapp/utils/buildUrlParams");Z();var Qa=Ce(require("anchorme")),el=p=>p.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),H0=(p,l)=>{if(l){let r=`[Message hidden due to suspicious content - ${l.info}]`;if(p.length>1e3)return{output:r,stringWithLinks:p,found:!0};let i=el(p.normalize("NFKC")),d=Qa.default.list(i),m=[];if(d.length>0){let u=r;d.forEach((a,y)=>{let{string:_}=a,E="",b="",x=_;for(let A=0;A<u.length;A++){let f=u.slice(A),[g]=Qa.default.list(el(f));g&&_===g.string&&(E=u.substring(0,A))}for(let A=r.length;A>0;A--){let f=u.slice(0,A),[g]=Qa.default.list(el(f));g&&_===g.string&&(b=u.substring(A))}m.push(E),m.push(x),u=b,y===d.length-1&&m.push(b)})}else m.push(p);return{output:r,stringWithLinks:m.join(""),found:!0}}else return{output:p,stringWithLinks:"",found:!1}};Z();Z();var Uk=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Vi=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Z0=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),qi=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");Z();Z();Z();Z();Z();Z();Z();var Qt=Ce(require("react")),X0=require("@fortawesome/free-solid-svg-icons"),K0=require("@fortawesome/react-fontawesome"),Ci=Ce(require("classnames"));Z();var J0=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(J0));var Go={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"},Q0=(Pi(),yn(al)).default,Gi=p=>{let{avatar:l,type:r}=p;return r==="NonFungibleDCDT"?Qt.default.createElement("div",{className:(0,Ci.default)(Go.tokenAvatar,Go.tokenAvatarNFT)},"NFT"):r==="SemiFungibleDCDT"?Qt.default.createElement("div",{className:(0,Ci.default)(Go.tokenAvatar,Go.tokenAvatarSFT)},"SFT"):r==="REWA"?Qt.default.createElement("div",{className:Go.tokenAvatar},p.RewaIcon?Qt.default.createElement(p.RewaIcon,null):Qt.default.createElement(Q0,null)):l?Qt.default.createElement("div",{className:Go.tokenAvatar},Qt.default.createElement("img",{src:l})):Qt.default.createElement("div",{className:Go.tokenAvatar},Qt.default.createElement(K0.FontAwesomeIcon,{icon:X0.faDiamond}))};Z();var e1=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(e1));var _n={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},t1=({label:p="Amount",amount:l,txType:r,tokenDecimals:i,tokenId:d,rewaLabel:m,rewaPriceInUsd:u,nft:a,tokenAvatar:y})=>{let _=(a==null?void 0:a.decimals)||0,E=r==="DCDT",b=r==="MetaDCDT",x=r==="NonFungibleDCDT",A=b?(0,qi.parseAmount)(l,a==null?void 0:a.decimals):l,f=Boolean(a&&l),g=d.split("-")[0],w=E?i:Ti.DECIMALS,v=f?wo.default.createElement(Ii.FormatAmount,{rewaLabel:m,value:A,decimals:_,digits:r==="MetaDCDT"?Ti.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):wo.default.createElement(Ii.FormatAmount,{rewaLabel:m,value:(0,qi.parseAmount)(l,w),showLabel:!1,decimals:w,showLastNonZeroDecimal:!0,token:E?g:m,"data-testid":"confirmAmount"});return x?null:wo.default.createElement("div",{className:_n.amount},wo.default.createElement("span",{className:xo.label},p),wo.default.createElement("div",{className:_n.token},wo.default.createElement(Gi,{type:r,avatar:y}),wo.default.createElement("div",{className:_n.value},v," ",g)),!E&&wo.default.createElement($0.UsdValue,{amount:l,usd:u,"data-testid":"confirmUsdValue",className:_n.price}))};Z();Z();var Oe=Ce(require("react")),o1=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");Z();var r1=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(r1));var hn={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"},n1=(p,l)=>[...p.matchAll(new RegExp(l,"gi"))].map(r=>r.index),a1=({label:p="Data",scCallLabel:l="SC Call",data:r,highlight:i,isScCall:d})=>{let m=Oe.default.createElement(Oe.default.Fragment,null,r),[u,...a]=i&&d?i.split("@"):[];if(r&&i&&n1(r,i).length===1)switch(!0){case r.startsWith(i):{let[,y]=r.split(i);m=Oe.default.createElement(Oe.default.Fragment,null,i,Oe.default.createElement("span",null,y));break}case r.endsWith(i):{let[y]=r.split(i);m=Oe.default.createElement(Oe.default.Fragment,null,Oe.default.createElement("span",null,y),i);break}default:{let[y,_]=r.split(i);m=Oe.default.createElement(Oe.default.Fragment,null,Oe.default.createElement("span",null,y),i,Oe.default.createElement("span",null,_));break}}return Oe.default.createElement(Oe.default.Fragment,null,u&&Oe.default.createElement("div",{className:hn.data},Oe.default.createElement("span",{className:xo.label},l),Oe.default.createElement("div",{"data-testid":"confirmScCall",className:hn.value},[(0,o1.decodePart)(u),...a].join("@"))),Oe.default.createElement("div",{className:hn.data},Oe.default.createElement("span",{className:xo.label},p),Oe.default.createElement("div",{"data-testid":"confirmData",className:hn.value},r?m:"N/A")))};Z();Z();var $o=Ce(require("react")),l1=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");Z();Z();var vn="0";Z();Z();var tl=require("@terradharitri/sdk-dapp/constants/index");function p1({feeLimit:p,rewaPriceInUsd:l}){let r=(0,Vi.formatAmount)({input:p,decimals:tl.DECIMALS,digits:tl.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,Z0.getUsdValue)({amount:r,usd:l,decimals:tl.DIGITS})}`}Z();var Rk=require("@terradharitri/sdk-dapp/constants/index");Z();var Ok=require("@terradharitri/sdk-dapp/constants/index"),Dk=Ce(require("bignumber.js"));Z();var Fk=require("@terradharitri/sdk-dapp/constants/index");Z();var Mk=require("@terradharitri/sdk-dapp/constants/index");Z();Z();var Pk=require("@terradharitri/sdk-core"),jk=require("@terradharitri/sdk-dapp/constants/index"),zk=Ce(require("bignumber.js"));Z();Z();var Wk=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");Z();var Vk=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");Z();var Gk=Ce(require("bignumber.js"));Z();var $k=require("@terradharitri/sdk-dapp/constants/index"),Yk=require("@terradharitri/sdk-dapp/utils/smartContracts"),Hk=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Zk=Ce(require("bignumber.js"));Z();var Xk=Ce(require("bignumber.js"));Z();Z();var Kk=Ce(require("axios"));Z();Z();Z();var Jk=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");Z();var Qk=require("@terradharitri/sdk-dapp/constants/index");Z();Z();Z();var ol=require("@terradharitri/sdk-dapp/constants/index"),c1=Ce(require("bignumber.js")),Ni,Bi,Li,i1=(0,Vi.formatAmount)({input:String((Ni=ol.GAS_PRICE)!=null?Ni:1e9),decimals:(Bi=ol.DECIMALS)!=null?Bi:18,showLastNonZeroDecimal:!0,digits:(Li=ol.DIGITS)!=null?Li:4}),e3=new c1.default(i1).times(10).toString(10);Z();var t3=require("@terradharitri/sdk-dapp/constants/index"),o3=Ce(require("bignumber.js"));Z();var r3=Ce(require("bignumber.js"));Z();var s1=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(s1));var gn={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},d1=({rewaPriceInUsd:p,label:l="Fee",feeLimit:r,rewaLabel:i})=>$o.default.createElement("div",{className:gn.fee},$o.default.createElement("span",{className:xo.label},l),$o.default.createElement("div",{className:gn.token},$o.default.createElement(Gi,{type:"REWA"}),$o.default.createElement("div",{className:gn.value},$o.default.createElement(l1.FormatAmount,{rewaLabel:i,value:r,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),r!==vn&&$o.default.createElement("span",{className:gn.price},p1({feeLimit:r,rewaPriceInUsd:p})));Z();Z();var yt=Ce(require("react")),u1=require("@fortawesome/free-solid-svg-icons"),m1=require("@fortawesome/react-fontawesome"),f1=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),_1=require("@terradharitri/sdk-dapp/UI/CopyButton"),h1=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),g1=require("@terradharitri/sdk-dapp/UI/Trim"),v1=Ce(require("classnames"));Z();var{default:b1}=(V0(),yn(ji));Z();var y1=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(y1));var Pt={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"},w1=({label:p="Receiver",receiver:l,scamReport:r,receiverUsername:i})=>{let d=Boolean(i),m=i!=null?i:l;return yt.default.createElement("div",{className:Pt.confirmReceiver},yt.default.createElement("span",{className:xo.label},p),yt.default.createElement("span",{className:(0,v1.default)(Pt.value,{[Pt.shrunk]:d}),"data-testid":"confirmReceiver"},d&&yt.default.createElement(b1,{className:Pt.icon}),m,d&&yt.default.createElement(h1.ExplorerLink,{page:`/${f1.ACCOUNTS_ENDPOINT}/${l}`,className:Pt.explorer})),d&&yt.default.createElement("span",{className:Pt.subValue},yt.default.createElement(g1.Trim,{text:l,className:Pt.subValueTrim}),yt.default.createElement(_1.CopyButton,{text:l,className:Pt.subValueCopy})),r&&yt.default.createElement("div",{className:Pt.scam},yt.default.createElement("span",null,yt.default.createElement(m1.FontAwesomeIcon,{icon:u1.faExclamationTriangle,className:Pt.icon}),yt.default.createElement("small",{"data-testid":"confirmScamReport"},r))))};Z();Z();var Yo=Ce(require("react"));Z();Z();var Ke=Ce(require("react")),x1=require("@fortawesome/free-solid-svg-icons"),E1=require("@fortawesome/react-fontawesome"),k1=Ce(require("@terradharitri/sdk-dapp/constants/index")),S1=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),A1=Ce(require("classnames"));Z();var T1=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(T1));var sr={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},I1=(Pi(),yn(al)).default,Ui=({RewaIcon:p,inDropdown:l=!1,isRewa:r,nftTokenDetails:i,nftType:d,token:m})=>{var u,a;let{name:y,identifier:_,balance:E,decimals:b}=m,x=((u=m.assets)==null?void 0:u.svgUrl)||((a=m.assets)==null?void 0:a.pngUrl)||"",A=x?28:20,[f,g]=(0,Ke.useState)(y);(0,Ke.useEffect)(()=>{var k;(k=i==null?void 0:i.uris)!=null&&k.some(U=>{let O=Fi.Buffer.from(String(U),"base64").toString(),{found:L}=H0(O,i==null?void 0:i.scamInfo);return L})||g(y)},[y]);let w=Ke.default.createElement(E1.FontAwesomeIcon,{icon:x1.faDiamond});d==fn.NftEnumType.NonFungibleDCDT&&(w=Ke.default.createElement("div",{className:"nft-type","data-testid":`${_}-type-nft`},"NFT")),d===fn.NftEnumType.SemiFungibleDCDT&&(w=Ke.default.createElement("div",{className:"nft-type","data-testid":`${_}-type-sft`},"SFT"));let v=!l&&d!==fn.NftEnumType.NonFungibleDCDT,S=Ke.default.createElement("div",{className:sr.tokenElementCircle},w);return x&&(S=Ke.default.createElement("img",{className:sr.tokenElementCircle,src:x,alt:y,height:A})),r&&(S=Ke.default.createElement("div",{className:sr.tokenElementCircle},p?Ke.default.createElement(p,{height:36}):Ke.default.createElement(I1,{height:36}))),Ke.default.createElement("div",{className:(0,A1.default)(xo.value,sr.tokenElement)},Ke.default.createElement("div",{className:sr.tokenElementWrapper},S),Ke.default.createElement("div",{"data-testid":"tokenName"},Ke.default.createElement("span",{"data-testid":`${_}-element`},Ke.default.createElement("span",null,f)," ",Ke.default.createElement("span",{className:sr.tokenElementIdentifier},_)),v&&Ke.default.createElement(S1.FormatAmount,{rewaLabel:_,value:E||vn,digits:d===fn.NftEnumType.SemiFungibleDCDT?0:k1.DIGITS,token:_,showLabel:!1,decimals:b,"data-testid":`${_}-balance`})))};Z();var q1=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(q1));var C1={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"},N1=({RewaIcon:p,rewaLabel:l,isDcdtTransaction:r,nft:i,tokenAvatar:d,tokenId:m,tokenIdError:u})=>{var a;let y=(i==null?void 0:i.name)||"";return Yo.default.createElement("div",{className:C1.token},Yo.default.createElement("span",{className:xo.label},i?Yo.default.createElement("span",null,i==null?void 0:i.name," "):"","Token"),Yo.default.createElement("div",null,i?Yo.default.createElement(Ui,{inDropdown:!0,token:{name:i==null?void 0:i.name,identifier:i==null?void 0:i.identifier,decimals:0,balance:vn,ticker:"",assets:{svgUrl:((a=i==null?void 0:i.assets)==null?void 0:a.svgUrl)||""}}}):Yo.default.createElement(Ui,{inDropdown:!0,token:{name:r?y:"DharitrI eGold",identifier:r?m:l,decimals:0,balance:vn,ticker:"",assets:{svgUrl:d||""}},isRewa:m===l,RewaIcon:p})),u&&Yo.default.createElement("div",{className:xo.error},u))},Ho=class extends G0.Component{render(){return null}};Ho.Receiver=w1,Ho.Amount=t1,Ho.Fee=d1,Ho.Data=a1,Ho.Token=N1;var B1=Ho;});var xs=dt((NS,ws)=>{"use strict";Se();var L1=Object.create,Ir=Object.defineProperty,U1=Object.getOwnPropertyDescriptor,R1=Object.getOwnPropertyNames,Tn=Object.getOwnPropertySymbols,O1=Object.getPrototypeOf,ml=Object.prototype.hasOwnProperty,cs=Object.prototype.propertyIsEnumerable,Hi=(p,l,r)=>l in p?Ir(p,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):p[l]=r,qn=(p,l)=>{for(var r in l||(l={}))ml.call(l,r)&&Hi(p,r,l[r]);if(Tn)for(var r of Tn(l))cs.call(l,r)&&Hi(p,r,l[r]);return p},D1=(p,l)=>{var r={};for(var i in p)ml.call(p,i)&&l.indexOf(i)<0&&(r[i]=p[i]);if(p!=null&&Tn)for(var i of Tn(p))l.indexOf(i)<0&&cs.call(p,i)&&(r[i]=p[i]);return r},fl=(p,l)=>()=>(p&&(l=p(p=0)),l),Cn=(p,l)=>()=>(l||p((l={exports:{}}).exports,l),l.exports),_l=(p,l)=>{for(var r in l)Ir(p,r,{get:l[r],enumerable:!0})},is=(p,l,r,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let d of R1(l))!ml.call(p,d)&&d!==r&&Ir(p,d,{get:()=>l[d],enumerable:!(i=U1(l,d))||i.enumerable});return p},K=(p,l,r)=>(r=p!=null?L1(O1(p)):{},is(l||!p||!p.__esModule?Ir(r,"default",{value:p,enumerable:!0}):r,p)),Nn=p=>is(Ir({},"__esModule",{value:!0}),p),F1=Cn(p=>{"use strict";R(),p.byteLength=y,p.toByteArray=E,p.fromByteArray=A;var l=[],r=[],i=typeof Uint8Array!="undefined"?Uint8Array:Array,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(m=0,u=d.length;m<u;++m)l[m]=d[m],r[d.charCodeAt(m)]=m;var m,u;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function a(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=f.indexOf("=");w===-1&&(w=g);var v=w===g?0:4-w%4;return[w,v]}function y(f){var g=a(f),w=g[0],v=g[1];return(w+v)*3/4-v}function _(f,g,w){return(g+w)*3/4-w}function E(f){var g,w=a(f),v=w[0],S=w[1],k=new i(_(f,v,S)),U=0,O=S>0?v-4:v,L;for(L=0;L<O;L+=4)g=r[f.charCodeAt(L)]<<18|r[f.charCodeAt(L+1)]<<12|r[f.charCodeAt(L+2)]<<6|r[f.charCodeAt(L+3)],k[U++]=g>>16&255,k[U++]=g>>8&255,k[U++]=g&255;return S===2&&(g=r[f.charCodeAt(L)]<<2|r[f.charCodeAt(L+1)]>>4,k[U++]=g&255),S===1&&(g=r[f.charCodeAt(L)]<<10|r[f.charCodeAt(L+1)]<<4|r[f.charCodeAt(L+2)]>>2,k[U++]=g>>8&255,k[U++]=g&255),k}function b(f){return l[f>>18&63]+l[f>>12&63]+l[f>>6&63]+l[f&63]}function x(f,g,w){for(var v,S=[],k=g;k<w;k+=3)v=(f[k]<<16&16711680)+(f[k+1]<<8&65280)+(f[k+2]&255),S.push(b(v));return S.join("")}function A(f){for(var g,w=f.length,v=w%3,S=[],k=16383,U=0,O=w-v;U<O;U+=k)S.push(x(f,U,U+k>O?O:U+k));return v===1?(g=f[w-1],S.push(l[g>>2]+l[g<<4&63]+"==")):v===2&&(g=(f[w-2]<<8)+f[w-1],S.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),S.join("")}}),M1=Cn(p=>{R(),p.read=function(l,r,i,d,m){var u,a,y=m*8-d-1,_=(1<<y)-1,E=_>>1,b=-7,x=i?m-1:0,A=i?-1:1,f=l[r+x];for(x+=A,u=f&(1<<-b)-1,f>>=-b,b+=y;b>0;u=u*256+l[r+x],x+=A,b-=8);for(a=u&(1<<-b)-1,u>>=-b,b+=d;b>0;a=a*256+l[r+x],x+=A,b-=8);if(u===0)u=1-E;else{if(u===_)return a?NaN:(f?-1:1)*(1/0);a=a+Math.pow(2,d),u=u-E}return(f?-1:1)*a*Math.pow(2,u-d)},p.write=function(l,r,i,d,m,u){var a,y,_,E=u*8-m-1,b=(1<<E)-1,x=b>>1,A=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=d?0:u-1,g=d?1:-1,w=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(y=isNaN(r)?1:0,a=b):(a=Math.floor(Math.log(r)/Math.LN2),r*(_=Math.pow(2,-a))<1&&(a--,_*=2),a+x>=1?r+=A/_:r+=A*Math.pow(2,1-x),r*_>=2&&(a++,_/=2),a+x>=b?(y=0,a=b):a+x>=1?(y=(r*_-1)*Math.pow(2,m),a=a+x):(y=r*Math.pow(2,x-1)*Math.pow(2,m),a=0));m>=8;l[i+f]=y&255,f+=g,y/=256,m-=8);for(a=a<<m|y,E+=m;E>0;l[i+f]=a&255,f+=g,a/=256,E-=8);l[i+f-g]|=w*128}}),P1=Cn(p=>{"use strict";R();var l=F1(),r=M1(),i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=a,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var d=2147483647;p.kMaxLength=d,a.TYPED_ARRAY_SUPPORT=m(),!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function m(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function u(e){if(e>d)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return y(e,t,o)}a.poolSize=8192;function y(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return a.from(n,t,o);var c=w(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,t,o){return y(e,t,o)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function _(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function E(e,t,o){return _(e),e<=0?u(e):t!==void 0?typeof o=="string"?u(e).fill(t,o):u(e).fill(t):u(e)}a.alloc=function(e,t,o){return E(e,t,o)};function b(e){return _(e),u(e<0?0:v(e)|0)}a.allocUnsafe=function(e){return b(e)},a.allocUnsafeSlow=function(e){return b(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=k(e,t)|0,n=u(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function A(e){for(var t=e.length<0?0:v(e.length)|0,o=u(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function f(e){if($(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return A(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,a.prototype),n}function w(e){if(a.isBuffer(e)){var t=v(e.length)|0,o=u(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?u(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function v(e){if(e>=d)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+d.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==a.prototype},a.compare=function(e,t){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),$(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,s=Math.min(o,n);c<s;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return a.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=a.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var s=e[o];if($(s,Uint8Array))c+s.length>n.length?a.from(s).copy(n,c):Uint8Array.prototype.set.call(n,s,c);else if(a.isBuffer(s))s.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=s.length}return n};function k(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Te(e).length;default:if(c)return n?-1:ye(e).length;t=(""+t).toLowerCase(),c=!0}}a.byteLength=k;function U(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,t,o);case"utf8":case"utf-8":return Y(this,t,o);case"ascii":return ie(this,t,o);case"latin1":case"binary":return be(this,t,o);case"base64":return H(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}a.prototype._isBuffer=!0;function O(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):U.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:a.compare(this,e)===0},a.prototype.inspect=function(){var e="",t=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(e,t,o,n,c){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var s=c-n,h=o-t,q=Math.min(s,h),D=this.slice(n,c),C=e.slice(t,o),B=0;B<q;++B)if(D[B]!==C[B]){s=D[B],h=C[B];break}return s<h?-1:h<s?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,we(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=a.from(t,n)),a.isBuffer(t))return t.length===0?-1:J(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):J(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function J(e,t,o,n,c){var s=1,h=e.length,q=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;s=2,h/=2,q/=2,o/=2}function D(Ie,qe){return s===1?Ie[qe]:Ie.readUInt16BE(qe*s)}var C;if(c){var B=-1;for(C=o;C<h;C++)if(D(e,C)===D(t,B===-1?0:C-B)){if(B===-1&&(B=C),C-B+1===q)return B*s}else B!==-1&&(C-=C-B),B=-1}else for(o+q>h&&(o=h-q),C=o;C>=0;C--){for(var P=!0,de=0;de<q;de++)if(D(e,C+de)!==D(t,de)){P=!1;break}if(P)return C}return-1}a.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},a.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},a.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function ee(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var s=t.length;n>s/2&&(n=s/2);for(var h=0;h<n;++h){var q=parseInt(t.substr(h*2,2),16);if(we(q))return h;e[o+h]=q}return h}function te(e,t,o,n){return se(ye(t,e.length-o),e,o,n)}function Q(e,t,o,n){return se(Ve(t),e,o,n)}function pe(e,t,o,n){return se(Te(t),e,o,n)}function ne(e,t,o,n){return se(Ge(t,e.length-o),e,o,n)}a.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return ee(this,e,t,o);case"utf8":case"utf-8":return te(this,e,t,o);case"ascii":case"latin1":case"binary":return Q(this,e,t,o);case"base64":return pe(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,t,o);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function Y(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var s=e[c],h=null,q=s>239?4:s>223?3:s>191?2:1;if(c+q<=o){var D,C,B,P;switch(q){case 1:s<128&&(h=s);break;case 2:D=e[c+1],(D&192)===128&&(P=(s&31)<<6|D&63,P>127&&(h=P));break;case 3:D=e[c+1],C=e[c+2],(D&192)===128&&(C&192)===128&&(P=(s&15)<<12|(D&63)<<6|C&63,P>2047&&(P<55296||P>57343)&&(h=P));break;case 4:D=e[c+1],C=e[c+2],B=e[c+3],(D&192)===128&&(C&192)===128&&(B&192)===128&&(P=(s&15)<<18|(D&63)<<12|(C&63)<<6|B&63,P>65535&&P<1114112&&(h=P))}}h===null?(h=65533,q=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),c+=q}return ce(n)}var X=4096;function ce(e){var t=e.length;if(t<=X)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=X));return o}function ie(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function be(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function he(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",s=t;s<o;++s)c+=$e[e[s]];return c}function me(e,t,o){for(var n=e.slice(t,o),c="",s=0;s<n.length-1;s+=2)c+=String.fromCharCode(n[s]+n[s+1]*256);return c}a.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n};function N(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=t,c=1,s=this[e+--n];n>0&&(c*=256);)s+=this[e+--n]*c;return c*=128,s>=c&&(s-=Math.pow(2,8*t)),s},a.prototype.readInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},a.prototype.readInt16LE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},a.prototype.readInt16BE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},a.prototype.readInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!1,52,8)};function F(e,t,o,n,c,s){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<s)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=1,h=0;for(this[t]=e&255;++h<o&&(s*=256);)this[t+h]=e/s&255;return t+o},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=o-1,h=1;for(this[t+s]=e&255;--s>=0&&(h*=256);)this[t+s]=e/h&255;return t+o},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,255,0),this[t]=e&255,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},a.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=0,h=1,q=0;for(this[t]=e&255;++s<o&&(h*=256);)e<0&&q===0&&this[t+s-1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=o-1,h=1,q=0;for(this[t+s]=e&255;--s>=0&&(h*=256);)e<0&&q===0&&this[t+s+1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},a.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ve(e,t,o,n,c,s){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ke(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,4,34028234663852886e22,-34028234663852886e22),r.write(e,t,o,n,23,4),o+4}a.prototype.writeFloatLE=function(e,t,o){return ke(this,e,t,!0,o)},a.prototype.writeFloatBE=function(e,t,o){return ke(this,e,t,!1,o)};function re(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,8,17976931348623157e292,-17976931348623157e292),r.write(e,t,o,n,52,8),o+8}a.prototype.writeDoubleLE=function(e,t,o){return re(this,e,t,!0,o)},a.prototype.writeDoubleBE=function(e,t,o){return re(this,e,t,!1,o)},a.prototype.copy=function(e,t,o,n){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},a.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<o;++s)this[s]=e;else{var h=a.isBuffer(e)?e:a.from(e,n),q=h.length;if(q===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<o-t;++s)this[s+t]=h[s%q]}return this};var ze=/[^+/0-9A-Za-z-_]/g;function We(e){if(e=e.split("=")[0],e=e.trim().replace(ze,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,t){t=t||1/0;for(var o,n=e.length,c=null,s=[],h=0;h<n;++h){if(o=e.charCodeAt(h),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&s.push(239,191,189);continue}else if(h+1===n){(t-=3)>-1&&s.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&s.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&s.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;s.push(o)}else if(o<2048){if((t-=2)<0)break;s.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;s.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;s.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return s}function Ve(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function Ge(e,t){for(var o,n,c,s=[],h=0;h<e.length&&!((t-=2)<0);++h)o=e.charCodeAt(h),n=o>>8,c=o%256,s.push(c),s.push(n);return s}function Te(e){return l.toByteArray(We(e))}function se(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function $(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function we(e){return e!==e}var $e=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),j1=Cn((p,l)=>{R();var r=l.exports={},i,d;function m(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=m}catch(v){i=m}try{typeof clearTimeout=="function"?d=clearTimeout:d=u}catch(v){d=u}})();function a(v){if(i===setTimeout)return setTimeout(v,0);if((i===m||!i)&&setTimeout)return i=setTimeout,setTimeout(v,0);try{return i(v,0)}catch(S){try{return i.call(null,v,0)}catch(k){return i.call(this,v,0)}}}function y(v){if(d===clearTimeout)return clearTimeout(v);if((d===u||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(v);try{return d(v)}catch(S){try{return d.call(null,v)}catch(k){return d.call(this,v)}}}var _=[],E=!1,b,x=-1;function A(){!E||!b||(E=!1,b.length?_=b.concat(_):x=-1,_.length&&f())}function f(){if(!E){var v=a(A);E=!0;for(var S=_.length;S;){for(b=_,_=[];++x<S;)b&&b[x].run();x=-1,S=_.length}b=null,E=!1,y(v)}}r.nextTick=function(v){var S=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)S[k-1]=arguments[k];_.push(new g(v,S)),_.length===1&&!E&&a(f)};function g(v,S){this.fun=v,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function w(){}r.on=w,r.addListener=w,r.once=w,r.off=w,r.removeListener=w,r.removeAllListeners=w,r.emit=w,r.prependListener=w,r.prependOnceListener=w,r.listeners=function(v){return[]},r.binding=function(v){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(v){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),ss,z1,W1,R=fl(()=>{ss=K(P1()),z1=K(j1()),W1=function(p){function l(){var i=this||self;return delete p.prototype.__magic__,i}if(typeof globalThis=="object")return globalThis;if(this)return l();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:l});var r=__magic__;return r}(Object)}),hl={};_l(hl,{default:()=>ds});var wn,Zi,ds,us=fl(()=>{"use strict";R(),wn=K(require("react")),Zi=p=>wn.createElement("svg",qn({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},p),wn.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),wn.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),ds=Zi}),ms={};_l(ms,{default:()=>fs});var xn,Xi,fs,V1=fl(()=>{"use strict";R(),xn=K(require("react")),Xi=p=>xn.createElement("svg",qn({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},p),xn.createElement("g",null,xn.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),fs=Xi}),_s={};_l(_s,{ConfirmScreen:()=>ow});ws.exports=Nn(_s);R();R();var ll=K(require("react")),G1=K(require("classnames"));R();R();var hs=K(require("react"));R();var $1=K(require("react")),l3=(0,$1.createContext)({});R();R();var Y1=K(require("react")),p3=require("@terradharitri/sdk-dapp/constants/index"),c3=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),i3=K(require("bignumber.js")),s3=require("formik");R();R();R();var d3=require("bech32");R();R();R();R();R();var En=require("@terradharitri/sdk-dapp/types/tokens.types");R();R();var u3=require("@terradharitri/sdk-dapp/constants"),m3=require("@terradharitri/sdk-dapp/utils/account/getAccount");R();R();var Ki=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),H1=({nft:p,skipDescription:l})=>{var r,i;let{name:d,metadata:m,media:u,isNsfw:a,scamInfo:y,verified:_}=p,E="Scam - ",{isSuspicious:b,message:x}=(0,Ki.getScamFlag)({verified:_,message:d,isNsfw:a,scamInfo:y,messagePrefix:E});if(!(m!=null&&m.description)||l){let v=b?"placeholder":(r=u==null?void 0:u[0])==null?void 0:r.thumbnailUrl;return{isSuspicious:b,name:d||x,thumbnail:v,description:""}}let{message:A,isSuspicious:f}=(0,Ki.getScamFlag)({message:m.description,messagePrefix:E,verified:_}),g=b||f,w=g?"placeholder":(i=u==null?void 0:u[0])==null?void 0:i.thumbnailUrl;return{isSuspicious:g,name:d||x,thumbnail:w,description:A||m.description}};R();var f3=require("@terradharitri/sdk-dapp/utils/buildUrlParams");R();var pl=K(require("anchorme")),cl=p=>p.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Z1=(p,l)=>{if(l){let r=`[Message hidden due to suspicious content - ${l.info}]`;if(p.length>1e3)return{output:r,stringWithLinks:p,found:!0};let i=cl(p.normalize("NFKC")),d=pl.default.list(i),m=[];if(d.length>0){let u=r;d.forEach((a,y)=>{let{string:_}=a,E="",b="",x=_;for(let A=0;A<u.length;A++){let f=u.slice(A),[g]=pl.default.list(cl(f));g&&_===g.string&&(E=u.substring(0,A))}for(let A=r.length;A>0;A--){let f=u.slice(0,A),[g]=pl.default.list(cl(f));g&&_===g.string&&(b=u.substring(A))}m.push(E),m.push(x),u=b,y===d.length-1&&m.push(b)})}else m.push(p);return{output:r,stringWithLinks:m.join(""),found:!0}}else return{output:p,stringWithLinks:"",found:!1}};R();R();var _3=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),gs=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),X1=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Ji=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");R();R();R();R();R();R();R();var vs=K(require("react")),h3=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),g3=require("formik");R();R();var v3=require("@terradharitri/sdk-dapp/constants/index"),b3=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),y3=K(require("bignumber.js"));R();R();var il=require("@terradharitri/sdk-dapp/constants/index");function K1({feeLimit:p,rewaPriceInUsd:l}){let r=(0,gs.formatAmount)({input:p,decimals:il.DECIMALS,digits:il.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,X1.getUsdValue)({amount:r,usd:l,decimals:il.DIGITS})}`}R();var w3=require("@terradharitri/sdk-dapp/constants/index");R();R();var In="0";R();var x3=require("@terradharitri/sdk-dapp/constants/index"),E3=K(require("bignumber.js"));R();var k3=require("@terradharitri/sdk-dapp/constants/index");R();var S3=require("@terradharitri/sdk-dapp/constants/index");R();R();var A3=require("@terradharitri/sdk-core"),T3=require("@terradharitri/sdk-dapp/constants/index"),I3=K(require("bignumber.js"));R();R();var q3=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");R();var C3=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");R();var N3=K(require("bignumber.js"));R();var B3=require("@terradharitri/sdk-dapp/constants/index"),L3=require("@terradharitri/sdk-dapp/utils/smartContracts"),U3=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),R3=K(require("bignumber.js"));R();var O3=K(require("bignumber.js"));R();R();var D3=K(require("axios"));R();R();R();var F3=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");R();var M3=require("@terradharitri/sdk-dapp/constants/index");R();R();R();var sl=require("@terradharitri/sdk-dapp/constants/index"),J1=K(require("bignumber.js")),Qi,es,ts,Q1=(0,gs.formatAmount)({input:String((Qi=sl.GAS_PRICE)!=null?Qi:1e9),decimals:(es=sl.DECIMALS)!=null?es:18,showLastNonZeroDecimal:!0,digits:(ts=sl.DIGITS)!=null?ts:4}),P3=new J1.default(Q1).times(10).toString(10);R();var j3=require("@terradharitri/sdk-dapp/constants/index"),z3=K(require("bignumber.js"));R();var W3=K(require("bignumber.js"));R();R();var V3=require("yup");R();var os=require("@terradharitri/sdk-dapp/constants/ledger.constants"),e2=K(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),gl=require("yup"),t2=(0,gl.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(p){let{ledger:l}=this.parent;return!(l&&p&&p.length&&!l.ledgerDataActive)}),o2=(0,gl.string)().test({name:"hashSign",test:function(p){let{ledger:l,isGuarded:r}=this.parent;if(l){let{ledgerWithHashSign:i,ledgerWithGuardians:d}=(0,e2.default)(l.version);if(p&&p.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${os.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(r&&!d)return this.createError({message:`You need at least DharitrI app version ${os.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),r2=[t2,o2],G3=r2.reduce((p,l)=>p.concat(l),(0,gl.string)());R();var $3=require("@terradharitri/sdk-dapp/constants/index"),Y3=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),H3=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Z3=require("yup");R();var X3=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),K3=K(require("bignumber.js")),J3=require("yup");R();var Q3=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),e8=K(require("bignumber.js")),t8=require("yup");R();var o8=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),r8=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),n8=K(require("bignumber.js")),a8=require("yup");R();var l8=K(require("bignumber.js")),p8=require("yup");R();var c8=require("@terradharitri/sdk-dapp/constants/index"),i8=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),s8=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),d8=K(require("bignumber.js")),u8=require("yup");R();var m8=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),f8=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),_8=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),h8=K(require("bignumber.js")),g8=require("yup");R();var v8=K(require("bignumber.js")),b8=require("yup");R();var y8=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),w8=require("yup");R();var x8=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),E8=require("yup");R();R();var n2=(0,vs.createContext)({});function a2(){return(0,vs.useContext)(n2)}R();R();var l2=K(require("react")),k8=require("formik"),S8=K(require("lodash/uniqBy"));R();R();R();var A8=K(require("axios"));R();R();var T8=K(require("axios"));R();R();var I8=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),q8=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),C8=K(require("axios")),N8=K(require("lodash/uniqBy"));R();var B8=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),L8=K(require("axios"));R();var U8=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),R8=K(require("axios"));R();R();var p2=K(require("react")),O8=(0,p2.createContext)({});R();R();var D8=require("react"),F8=require("@terradharitri/sdk-dapp/constants/index"),M8=require("@terradharitri/sdk-dapp/types/enums.types");R();var P8=(0,l2.createContext)({});R();R();var j8=require("@terradharitri/sdk-dapp/constants/index"),z8=require("formik");R();R();var c2=K(require("react")),W8=require("@terradharitri/sdk-dapp/constants/index"),V8=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),G8=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),$8=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Y8=K(require("bignumber.js")),H8=require("formik");R();R();R();R();var Z8=K(require("bignumber.js"));R();var X8=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),K8=K(require("bignumber.js"));R();R();var J8=require("react"),Q8=require("@terradharitri/sdk-dapp/constants/index"),eS=require("@terradharitri/sdk-dapp/utils/smartContracts"),tS=K(require("bignumber.js")),oS=require("formik");R();var rS=require("react");R();R();var nS=require("@terradharitri/sdk-dapp/constants/index"),aS=K(require("bignumber.js")),lS=(0,c2.createContext)({}),pS=(0,Y1.createContext)({});R();R();var i2=K(require("react")),cS=require("formik"),iS=(0,i2.createContext)({});R();R();var s2=K(require("react")),sS=require("formik");R();R();R();var dS=require("react"),uS=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),mS=K(require("lodash/uniqBy"));R();R();var fS=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),_S=require("@terradharitri/sdk-dapp/utils");R();var hS=require("react");R();var gS=require("react"),vS=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),bS=(0,s2.createContext)({});R();R();var d2=K(require("react")),yS=require("formik");R();R();R();R();R();var wS=require("react"),xS=require("@terradharitri/sdk-dapp/utils");R();var ES=require("react"),kS=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");R();R();var SS=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),AS=K(require("axios"));R();var TS=K(require("axios")),IS=(0,d2.createContext)({}),u2=(0,hs.createContext)({});function bs(){return(0,hs.useContext)(u2)}R();R();R();var pt=K(require("react")),m2=require("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");R();var f2=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(f2));var Nt={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};R();var qS=K(require("react")),CS=require("@terradharitri/sdk-dapp/constants/index");R();var _2=require("react");R();R();var Eo=K(require("react")),rs=require("@terradharitri/sdk-dapp/constants/index"),ns=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),h2=require("@terradharitri/sdk-dapp/UI/UsdValue/index");R();R();var eo=K(require("react")),g2=require("@fortawesome/free-solid-svg-icons"),v2=require("@fortawesome/react-fontawesome"),as=K(require("classnames"));R();var b2=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(b2));var Zo={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"},y2=(us(),Nn(hl)).default,ys=p=>{let{avatar:l,type:r}=p;return r==="NonFungibleDCDT"?eo.default.createElement("div",{className:(0,as.default)(Zo.tokenAvatar,Zo.tokenAvatarNFT)},"NFT"):r==="SemiFungibleDCDT"?eo.default.createElement("div",{className:(0,as.default)(Zo.tokenAvatar,Zo.tokenAvatarSFT)},"SFT"):r==="REWA"?eo.default.createElement("div",{className:Zo.tokenAvatar},p.RewaIcon?eo.default.createElement(p.RewaIcon,null):eo.default.createElement(y2,null)):l?eo.default.createElement("div",{className:Zo.tokenAvatar},eo.default.createElement("img",{src:l})):eo.default.createElement("div",{className:Zo.tokenAvatar},eo.default.createElement(v2.FontAwesomeIcon,{icon:g2.faDiamond}))};R();var w2=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(w2));var kn={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},x2=({label:p="Amount",amount:l,txType:r,tokenDecimals:i,tokenId:d,rewaLabel:m,rewaPriceInUsd:u,nft:a,tokenAvatar:y})=>{let _=(a==null?void 0:a.decimals)||0,E=r==="DCDT",b=r==="MetaDCDT",x=r==="NonFungibleDCDT",A=b?(0,Ji.parseAmount)(l,a==null?void 0:a.decimals):l,f=Boolean(a&&l),g=d.split("-")[0],w=E?i:rs.DECIMALS,v=f?Eo.default.createElement(ns.FormatAmount,{rewaLabel:m,value:A,decimals:_,digits:r==="MetaDCDT"?rs.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):Eo.default.createElement(ns.FormatAmount,{rewaLabel:m,value:(0,Ji.parseAmount)(l,w),showLabel:!1,decimals:w,showLastNonZeroDecimal:!0,token:E?g:m,"data-testid":"confirmAmount"});return x?null:Eo.default.createElement("div",{className:kn.amount},Eo.default.createElement("span",{className:Nt.label},p),Eo.default.createElement("div",{className:kn.token},Eo.default.createElement(ys,{type:r,avatar:y}),Eo.default.createElement("div",{className:kn.value},v," ",g)),!E&&Eo.default.createElement(h2.UsdValue,{amount:l,usd:u,"data-testid":"confirmUsdValue",className:kn.price}))};R();R();var De=K(require("react")),E2=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");R();var k2=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(k2));var Sn={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"},S2=(p,l)=>[...p.matchAll(new RegExp(l,"gi"))].map(r=>r.index),A2=({label:p="Data",scCallLabel:l="SC Call",data:r,highlight:i,isScCall:d})=>{let m=De.default.createElement(De.default.Fragment,null,r),[u,...a]=i&&d?i.split("@"):[];if(r&&i&&S2(r,i).length===1)switch(!0){case r.startsWith(i):{let[,y]=r.split(i);m=De.default.createElement(De.default.Fragment,null,i,De.default.createElement("span",null,y));break}case r.endsWith(i):{let[y]=r.split(i);m=De.default.createElement(De.default.Fragment,null,De.default.createElement("span",null,y),i);break}default:{let[y,_]=r.split(i);m=De.default.createElement(De.default.Fragment,null,De.default.createElement("span",null,y),i,De.default.createElement("span",null,_));break}}return De.default.createElement(De.default.Fragment,null,u&&De.default.createElement("div",{className:Sn.data},De.default.createElement("span",{className:Nt.label},l),De.default.createElement("div",{"data-testid":"confirmScCall",className:Sn.value},[(0,E2.decodePart)(u),...a].join("@"))),De.default.createElement("div",{className:Sn.data},De.default.createElement("span",{className:Nt.label},p),De.default.createElement("div",{"data-testid":"confirmData",className:Sn.value},r?m:"N/A")))};R();R();var Xo=K(require("react")),T2=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");R();var I2=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(I2));var An={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},q2=({rewaPriceInUsd:p,label:l="Fee",feeLimit:r,rewaLabel:i})=>Xo.default.createElement("div",{className:An.fee},Xo.default.createElement("span",{className:Nt.label},l),Xo.default.createElement("div",{className:An.token},Xo.default.createElement(ys,{type:"REWA"}),Xo.default.createElement("div",{className:An.value},Xo.default.createElement(T2.FormatAmount,{rewaLabel:i,value:r,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),r!==In&&Xo.default.createElement("span",{className:An.price},K1({feeLimit:r,rewaPriceInUsd:p})));R();R();var wt=K(require("react")),C2=require("@fortawesome/free-solid-svg-icons"),N2=require("@fortawesome/react-fontawesome"),B2=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),L2=require("@terradharitri/sdk-dapp/UI/CopyButton"),U2=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),R2=require("@terradharitri/sdk-dapp/UI/Trim"),O2=K(require("classnames"));R();var{default:D2}=(V1(),Nn(ms));R();var F2=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(F2));var jt={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"},M2=({label:p="Receiver",receiver:l,scamReport:r,receiverUsername:i})=>{let d=Boolean(i),m=i!=null?i:l;return wt.default.createElement("div",{className:jt.confirmReceiver},wt.default.createElement("span",{className:Nt.label},p),wt.default.createElement("span",{className:(0,O2.default)(jt.value,{[jt.shrunk]:d}),"data-testid":"confirmReceiver"},d&&wt.default.createElement(D2,{className:jt.icon}),m,d&&wt.default.createElement(U2.ExplorerLink,{page:`/${B2.ACCOUNTS_ENDPOINT}/${l}`,className:jt.explorer})),d&&wt.default.createElement("span",{className:jt.subValue},wt.default.createElement(R2.Trim,{text:l,className:jt.subValueTrim}),wt.default.createElement(L2.CopyButton,{text:l,className:jt.subValueCopy})),r&&wt.default.createElement("div",{className:jt.scam},wt.default.createElement("span",null,wt.default.createElement(N2.FontAwesomeIcon,{icon:C2.faExclamationTriangle,className:jt.icon}),wt.default.createElement("small",{"data-testid":"confirmScamReport"},r))))};R();R();var Ko=K(require("react"));R();R();var Je=K(require("react")),P2=require("@fortawesome/free-solid-svg-icons"),j2=require("@fortawesome/react-fontawesome"),z2=K(require("@terradharitri/sdk-dapp/constants/index")),W2=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),V2=K(require("classnames"));R();var G2=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(G2));var dr={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},$2=(us(),Nn(hl)).default,ls=({RewaIcon:p,inDropdown:l=!1,isRewa:r,nftTokenDetails:i,nftType:d,token:m})=>{var u,a;let{name:y,identifier:_,balance:E,decimals:b}=m,x=((u=m.assets)==null?void 0:u.svgUrl)||((a=m.assets)==null?void 0:a.pngUrl)||"",A=x?28:20,[f,g]=(0,Je.useState)(y);(0,Je.useEffect)(()=>{var k;(k=i==null?void 0:i.uris)!=null&&k.some(U=>{let O=ss.Buffer.from(String(U),"base64").toString(),{found:L}=Z1(O,i==null?void 0:i.scamInfo);return L})||g(y)},[y]);let w=Je.default.createElement(j2.FontAwesomeIcon,{icon:P2.faDiamond});d==En.NftEnumType.NonFungibleDCDT&&(w=Je.default.createElement("div",{className:"nft-type","data-testid":`${_}-type-nft`},"NFT")),d===En.NftEnumType.SemiFungibleDCDT&&(w=Je.default.createElement("div",{className:"nft-type","data-testid":`${_}-type-sft`},"SFT"));let v=!l&&d!==En.NftEnumType.NonFungibleDCDT,S=Je.default.createElement("div",{className:dr.tokenElementCircle},w);return x&&(S=Je.default.createElement("img",{className:dr.tokenElementCircle,src:x,alt:y,height:A})),r&&(S=Je.default.createElement("div",{className:dr.tokenElementCircle},p?Je.default.createElement(p,{height:36}):Je.default.createElement($2,{height:36}))),Je.default.createElement("div",{className:(0,V2.default)(Nt.value,dr.tokenElement)},Je.default.createElement("div",{className:dr.tokenElementWrapper},S),Je.default.createElement("div",{"data-testid":"tokenName"},Je.default.createElement("span",{"data-testid":`${_}-element`},Je.default.createElement("span",null,f)," ",Je.default.createElement("span",{className:dr.tokenElementIdentifier},_)),v&&Je.default.createElement(W2.FormatAmount,{rewaLabel:_,value:E||In,digits:d===En.NftEnumType.SemiFungibleDCDT?0:z2.DIGITS,token:_,showLabel:!1,decimals:b,"data-testid":`${_}-balance`})))};R();var Y2=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Y2));var H2={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"},Z2=({RewaIcon:p,rewaLabel:l,isDcdtTransaction:r,nft:i,tokenAvatar:d,tokenId:m,tokenIdError:u})=>{var a;let y=(i==null?void 0:i.name)||"";return Ko.default.createElement("div",{className:H2.token},Ko.default.createElement("span",{className:Nt.label},i?Ko.default.createElement("span",null,i==null?void 0:i.name," "):"","Token"),Ko.default.createElement("div",null,i?Ko.default.createElement(ls,{inDropdown:!0,token:{name:i==null?void 0:i.name,identifier:i==null?void 0:i.identifier,decimals:0,balance:In,ticker:"",assets:{svgUrl:((a=i==null?void 0:i.assets)==null?void 0:a.svgUrl)||""}}}):Ko.default.createElement(ls,{inDropdown:!0,token:{name:r?y:"DharitrI eGold",identifier:r?m:l,decimals:0,balance:In,ticker:"",assets:{svgUrl:d||""}},isRewa:m===l,RewaIcon:p})),u&&Ko.default.createElement("div",{className:Nt.error},u))},ur=class extends _2.Component{render(){return null}};ur.Receiver=M2,ur.Amount=x2,ur.Fee=q2,ur.Data=A2,ur.Token=Z2;var dl=ur;R();R();var ko=K(require("react")),ps=K(require("classnames"));R();var X2=`.dapp-core-component__styles-module__preview {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(X2));var Ct={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"},K2=p=>{let l=p,{txType:r,onClick:i,identifier:d}=l,m=D1(l,["txType","onClick","identifier"]),{name:u,thumbnail:a}=H1({nft:m}),y=["NonFungibleDCDT","SemiFungibleDCDT"].includes(r),_=r==="NonFungibleDCDT"?"NFT":"SFT",E=b=>{b.preventDefault(),i&&i(b,Object.assign(m,{identifier:d}))};return y?ko.default.createElement("div",{onClick:E,"data-testid":"token-preview",className:(0,ps.default)(Ct.preview,{[Ct.clickable]:Boolean(i)})},ko.default.createElement("img",{src:a,className:Ct.image}),ko.default.createElement("div",{className:Ct.content},ko.default.createElement("div",{className:Ct.left},ko.default.createElement("div",{"data-testid":"token-preview-name",className:Ct.name},u),ko.default.createElement("div",{"data-testid":"token-preview-identifier",className:Ct.identifier},d)),ko.default.createElement("div",{className:Ct.right},ko.default.createElement("div",{className:(0,ps.default)(Ct.badge,{[Ct.nft]:r==="NonFungibleDCDT",[Ct.sft]:r==="SemiFungibleDCDT"})},_)))):null};R();var J2=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(J2));var Jo={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};R();R();var ul=require("@terradharitri/sdk-dapp/types/enums.types"),Q2=({providerType:p,hasGuardianScreen:l})=>l?"Confirm & Continue":p===ul.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":p===ul.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":p===ul.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";R();var ew=({receiverAddress:p,knownAddresses:l,existingReceiverUsername:r})=>{if(r)return r;let i=l==null?void 0:l.find(d=>d.address===p);return i==null?void 0:i.username},tw=({isConfirmCloseBtnVisible:p=!0,providerType:l})=>{var r;let{setIsGuardianScreenVisible:i}=a2(),{receiverUsernameInfo:{receiverUsername:d},receiverInfo:{scamError:m,receiver:u,knownAddresses:a},formInfo:y,gasInfo:{gasCostError:_,feeLimit:E},accountInfo:{isGuarded:b},dataFieldInfo:{data:x},amountInfo:A,tokensInfo:f}=bs(),{tokenId:g,tokenDetails:w,nft:v,rewaPriceInUsd:S,rewaLabel:k}=f,{readonly:U,onCloseForm:O,onInvalidateForm:L,onPreviewClick:J,onSubmitForm:ee,txType:te,hasGuardianScreen:Q}=y,pe=()=>{i(!0)},[ne,H]=(0,pt.useState)(!1),Y=te==="NonFungibleDCDT",X=Q2({providerType:l,hasGuardianScreen:Q}),ce=me=>{me.preventDefault(),U?O():L()},ie=()=>{if(b&&Q)return pe();H(!0),ee()},be=!["REWA","DCDT","MetaDCDT"].includes(te),he=ew({knownAddresses:a,receiverAddress:u,existingReceiverUsername:d});return pt.default.createElement("div",{className:Jo.summary},pt.default.createElement("div",{className:Jo.fields},be&&v&&pt.default.createElement(K2,qn({onClick:J,txType:te},v)),pt.default.createElement(m2.ConfirmReceiver,{amount:A.amount,scamReport:m!=null?m:null,receiver:u,receiverUsername:he}),pt.default.createElement("div",{className:Jo.columns},!Y&&pt.default.createElement("div",{className:Jo.column},pt.default.createElement(dl.Amount,{txType:te,tokenId:g,tokenDecimals:w.decimals,amount:String(A.amount),nft:v,rewaPriceInUsd:S,rewaLabel:k,tokenLabel:w.name,tokenAvatar:((r=w.assets)==null?void 0:r.svgUrl)||""})),pt.default.createElement("div",{className:Jo.column},pt.default.createElement(dl.Fee,{rewaLabel:k,rewaPriceInUsd:S,feeLimit:E}))),pt.default.createElement(dl.Data,{data:x}),_&&pt.default.createElement("p",{className:Nt.error},_)),pt.default.createElement("div",{className:Jo.buttons},pt.default.createElement("button",{className:Nt.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:ne,onClick:ie},X),p&&pt.default.createElement("button",{className:Nt.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:ce},U?"Close":"Back")))},ow=p=>{let{formInfo:{setHasGuardianScreen:l}}=bs();return(0,ll.useEffect)(()=>{p.hasGuardianScreen&&l(!0)},[]),ll.default.createElement("div",{className:(0,G1.default)(Jo.confirm,p.className),"data-testid":"confirmScreen"},ll.default.createElement(tw,qn({},p)))};});var As=dt((LS,Ss)=>{"use strict";Se();var rw=Object.create,Ln=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,aw=Object.getOwnPropertyNames,lw=Object.getPrototypeOf,pw=Object.prototype.hasOwnProperty,cw=(p,l)=>()=>(p&&(l=p(p=0)),l),Un=(p,l)=>()=>(l||p((l={exports:{}}).exports,l),l.exports),iw=(p,l)=>{for(var r in l)Ln(p,r,{get:l[r],enumerable:!0})},Es=(p,l,r,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let d of aw(l))!pw.call(p,d)&&d!==r&&Ln(p,d,{get:()=>l[d],enumerable:!(i=nw(l,d))||i.enumerable});return p},Bn=(p,l,r)=>(r=p!=null?rw(lw(p)):{},Es(l||!p||!p.__esModule?Ln(r,"default",{value:p,enumerable:!0}):r,p)),sw=p=>Es(Ln({},"__esModule",{value:!0}),p),dw=Un(p=>{"use strict";zt(),p.byteLength=y,p.toByteArray=E,p.fromByteArray=A;var l=[],r=[],i=typeof Uint8Array!="undefined"?Uint8Array:Array,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(m=0,u=d.length;m<u;++m)l[m]=d[m],r[d.charCodeAt(m)]=m;var m,u;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function a(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=f.indexOf("=");w===-1&&(w=g);var v=w===g?0:4-w%4;return[w,v]}function y(f){var g=a(f),w=g[0],v=g[1];return(w+v)*3/4-v}function _(f,g,w){return(g+w)*3/4-w}function E(f){var g,w=a(f),v=w[0],S=w[1],k=new i(_(f,v,S)),U=0,O=S>0?v-4:v,L;for(L=0;L<O;L+=4)g=r[f.charCodeAt(L)]<<18|r[f.charCodeAt(L+1)]<<12|r[f.charCodeAt(L+2)]<<6|r[f.charCodeAt(L+3)],k[U++]=g>>16&255,k[U++]=g>>8&255,k[U++]=g&255;return S===2&&(g=r[f.charCodeAt(L)]<<2|r[f.charCodeAt(L+1)]>>4,k[U++]=g&255),S===1&&(g=r[f.charCodeAt(L)]<<10|r[f.charCodeAt(L+1)]<<4|r[f.charCodeAt(L+2)]>>2,k[U++]=g>>8&255,k[U++]=g&255),k}function b(f){return l[f>>18&63]+l[f>>12&63]+l[f>>6&63]+l[f&63]}function x(f,g,w){for(var v,S=[],k=g;k<w;k+=3)v=(f[k]<<16&16711680)+(f[k+1]<<8&65280)+(f[k+2]&255),S.push(b(v));return S.join("")}function A(f){for(var g,w=f.length,v=w%3,S=[],k=16383,U=0,O=w-v;U<O;U+=k)S.push(x(f,U,U+k>O?O:U+k));return v===1?(g=f[w-1],S.push(l[g>>2]+l[g<<4&63]+"==")):v===2&&(g=(f[w-2]<<8)+f[w-1],S.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),S.join("")}}),uw=Un(p=>{zt(),p.read=function(l,r,i,d,m){var u,a,y=m*8-d-1,_=(1<<y)-1,E=_>>1,b=-7,x=i?m-1:0,A=i?-1:1,f=l[r+x];for(x+=A,u=f&(1<<-b)-1,f>>=-b,b+=y;b>0;u=u*256+l[r+x],x+=A,b-=8);for(a=u&(1<<-b)-1,u>>=-b,b+=d;b>0;a=a*256+l[r+x],x+=A,b-=8);if(u===0)u=1-E;else{if(u===_)return a?NaN:(f?-1:1)*(1/0);a=a+Math.pow(2,d),u=u-E}return(f?-1:1)*a*Math.pow(2,u-d)},p.write=function(l,r,i,d,m,u){var a,y,_,E=u*8-m-1,b=(1<<E)-1,x=b>>1,A=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=d?0:u-1,g=d?1:-1,w=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(y=isNaN(r)?1:0,a=b):(a=Math.floor(Math.log(r)/Math.LN2),r*(_=Math.pow(2,-a))<1&&(a--,_*=2),a+x>=1?r+=A/_:r+=A*Math.pow(2,1-x),r*_>=2&&(a++,_/=2),a+x>=b?(y=0,a=b):a+x>=1?(y=(r*_-1)*Math.pow(2,m),a=a+x):(y=r*Math.pow(2,x-1)*Math.pow(2,m),a=0));m>=8;l[i+f]=y&255,f+=g,y/=256,m-=8);for(a=a<<m|y,E+=m;E>0;l[i+f]=a&255,f+=g,a/=256,E-=8);l[i+f-g]|=w*128}}),mw=Un(p=>{"use strict";zt();var l=dw(),r=uw(),i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=a,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var d=2147483647;p.kMaxLength=d,a.TYPED_ARRAY_SUPPORT=m(),!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function m(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function u(e){if(e>d)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return y(e,t,o)}a.poolSize=8192;function y(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return a.from(n,t,o);var c=w(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,t,o){return y(e,t,o)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function _(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function E(e,t,o){return _(e),e<=0?u(e):t!==void 0?typeof o=="string"?u(e).fill(t,o):u(e).fill(t):u(e)}a.alloc=function(e,t,o){return E(e,t,o)};function b(e){return _(e),u(e<0?0:v(e)|0)}a.allocUnsafe=function(e){return b(e)},a.allocUnsafeSlow=function(e){return b(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=k(e,t)|0,n=u(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function A(e){for(var t=e.length<0?0:v(e.length)|0,o=u(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function f(e){if($(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return A(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,a.prototype),n}function w(e){if(a.isBuffer(e)){var t=v(e.length)|0,o=u(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?u(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function v(e){if(e>=d)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+d.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==a.prototype},a.compare=function(e,t){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),$(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,s=Math.min(o,n);c<s;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return a.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=a.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var s=e[o];if($(s,Uint8Array))c+s.length>n.length?a.from(s).copy(n,c):Uint8Array.prototype.set.call(n,s,c);else if(a.isBuffer(s))s.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=s.length}return n};function k(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Te(e).length;default:if(c)return n?-1:ye(e).length;t=(""+t).toLowerCase(),c=!0}}a.byteLength=k;function U(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,t,o);case"utf8":case"utf-8":return Y(this,t,o);case"ascii":return ie(this,t,o);case"latin1":case"binary":return be(this,t,o);case"base64":return H(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}a.prototype._isBuffer=!0;function O(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):U.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:a.compare(this,e)===0},a.prototype.inspect=function(){var e="",t=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(e,t,o,n,c){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var s=c-n,h=o-t,q=Math.min(s,h),D=this.slice(n,c),C=e.slice(t,o),B=0;B<q;++B)if(D[B]!==C[B]){s=D[B],h=C[B];break}return s<h?-1:h<s?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,we(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=a.from(t,n)),a.isBuffer(t))return t.length===0?-1:J(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):J(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function J(e,t,o,n,c){var s=1,h=e.length,q=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;s=2,h/=2,q/=2,o/=2}function D(Ie,qe){return s===1?Ie[qe]:Ie.readUInt16BE(qe*s)}var C;if(c){var B=-1;for(C=o;C<h;C++)if(D(e,C)===D(t,B===-1?0:C-B)){if(B===-1&&(B=C),C-B+1===q)return B*s}else B!==-1&&(C-=C-B),B=-1}else for(o+q>h&&(o=h-q),C=o;C>=0;C--){for(var P=!0,de=0;de<q;de++)if(D(e,C+de)!==D(t,de)){P=!1;break}if(P)return C}return-1}a.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},a.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},a.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function ee(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var s=t.length;n>s/2&&(n=s/2);for(var h=0;h<n;++h){var q=parseInt(t.substr(h*2,2),16);if(we(q))return h;e[o+h]=q}return h}function te(e,t,o,n){return se(ye(t,e.length-o),e,o,n)}function Q(e,t,o,n){return se(Ve(t),e,o,n)}function pe(e,t,o,n){return se(Te(t),e,o,n)}function ne(e,t,o,n){return se(Ge(t,e.length-o),e,o,n)}a.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return ee(this,e,t,o);case"utf8":case"utf-8":return te(this,e,t,o);case"ascii":case"latin1":case"binary":return Q(this,e,t,o);case"base64":return pe(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,t,o);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function Y(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var s=e[c],h=null,q=s>239?4:s>223?3:s>191?2:1;if(c+q<=o){var D,C,B,P;switch(q){case 1:s<128&&(h=s);break;case 2:D=e[c+1],(D&192)===128&&(P=(s&31)<<6|D&63,P>127&&(h=P));break;case 3:D=e[c+1],C=e[c+2],(D&192)===128&&(C&192)===128&&(P=(s&15)<<12|(D&63)<<6|C&63,P>2047&&(P<55296||P>57343)&&(h=P));break;case 4:D=e[c+1],C=e[c+2],B=e[c+3],(D&192)===128&&(C&192)===128&&(B&192)===128&&(P=(s&15)<<18|(D&63)<<12|(C&63)<<6|B&63,P>65535&&P<1114112&&(h=P))}}h===null?(h=65533,q=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),c+=q}return ce(n)}var X=4096;function ce(e){var t=e.length;if(t<=X)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=X));return o}function ie(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function be(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function he(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",s=t;s<o;++s)c+=$e[e[s]];return c}function me(e,t,o){for(var n=e.slice(t,o),c="",s=0;s<n.length-1;s+=2)c+=String.fromCharCode(n[s]+n[s+1]*256);return c}a.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n};function N(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=t,c=1,s=this[e+--n];n>0&&(c*=256);)s+=this[e+--n]*c;return c*=128,s>=c&&(s-=Math.pow(2,8*t)),s},a.prototype.readInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},a.prototype.readInt16LE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},a.prototype.readInt16BE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},a.prototype.readInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!1,52,8)};function F(e,t,o,n,c,s){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<s)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=1,h=0;for(this[t]=e&255;++h<o&&(s*=256);)this[t+h]=e/s&255;return t+o},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=o-1,h=1;for(this[t+s]=e&255;--s>=0&&(h*=256);)this[t+s]=e/h&255;return t+o},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,255,0),this[t]=e&255,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},a.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=0,h=1,q=0;for(this[t]=e&255;++s<o&&(h*=256);)e<0&&q===0&&this[t+s-1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=o-1,h=1,q=0;for(this[t+s]=e&255;--s>=0&&(h*=256);)e<0&&q===0&&this[t+s+1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},a.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ve(e,t,o,n,c,s){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ke(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,4,34028234663852886e22,-34028234663852886e22),r.write(e,t,o,n,23,4),o+4}a.prototype.writeFloatLE=function(e,t,o){return ke(this,e,t,!0,o)},a.prototype.writeFloatBE=function(e,t,o){return ke(this,e,t,!1,o)};function re(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,8,17976931348623157e292,-17976931348623157e292),r.write(e,t,o,n,52,8),o+8}a.prototype.writeDoubleLE=function(e,t,o){return re(this,e,t,!0,o)},a.prototype.writeDoubleBE=function(e,t,o){return re(this,e,t,!1,o)},a.prototype.copy=function(e,t,o,n){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},a.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<o;++s)this[s]=e;else{var h=a.isBuffer(e)?e:a.from(e,n),q=h.length;if(q===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<o-t;++s)this[s+t]=h[s%q]}return this};var ze=/[^+/0-9A-Za-z-_]/g;function We(e){if(e=e.split("=")[0],e=e.trim().replace(ze,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,t){t=t||1/0;for(var o,n=e.length,c=null,s=[],h=0;h<n;++h){if(o=e.charCodeAt(h),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&s.push(239,191,189);continue}else if(h+1===n){(t-=3)>-1&&s.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&s.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&s.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;s.push(o)}else if(o<2048){if((t-=2)<0)break;s.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;s.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;s.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return s}function Ve(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function Ge(e,t){for(var o,n,c,s=[],h=0;h<e.length&&!((t-=2)<0);++h)o=e.charCodeAt(h),n=o>>8,c=o%256,s.push(c),s.push(n);return s}function Te(e){return l.toByteArray(We(e))}function se(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function $(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function we(e){return e!==e}var $e=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),fw=Un((p,l)=>{zt();var r=l.exports={},i,d;function m(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=m}catch(v){i=m}try{typeof clearTimeout=="function"?d=clearTimeout:d=u}catch(v){d=u}})();function a(v){if(i===setTimeout)return setTimeout(v,0);if((i===m||!i)&&setTimeout)return i=setTimeout,setTimeout(v,0);try{return i(v,0)}catch(S){try{return i.call(null,v,0)}catch(k){return i.call(this,v,0)}}}function y(v){if(d===clearTimeout)return clearTimeout(v);if((d===u||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(v);try{return d(v)}catch(S){try{return d.call(null,v)}catch(k){return d.call(this,v)}}}var _=[],E=!1,b,x=-1;function A(){!E||!b||(E=!1,b.length?_=b.concat(_):x=-1,_.length&&f())}function f(){if(!E){var v=a(A);E=!0;for(var S=_.length;S;){for(b=_,_=[];++x<S;)b&&b[x].run();x=-1,S=_.length}b=null,E=!1,y(v)}}r.nextTick=function(v){var S=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)S[k-1]=arguments[k];_.push(new g(v,S)),_.length===1&&!E&&a(f)};function g(v,S){this.fun=v,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function w(){}r.on=w,r.addListener=w,r.once=w,r.off=w,r.removeListener=w,r.removeAllListeners=w,r.emit=w,r.prependListener=w,r.prependOnceListener=w,r.listeners=function(v){return[]},r.binding=function(v){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(v){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),_w,hw,gw,zt=cw(()=>{_w=Bn(mw()),hw=Bn(fw()),gw=function(p){function l(){var i=this||self;return delete p.prototype.__magic__,i}if(typeof globalThis=="object")return globalThis;if(this)return l();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:l});var r=__magic__;return r}(Object)}),ks={};iw(ks,{NFTCanTransferWarning:()=>Iw});Ss.exports=sw(ks);zt();zt();var Bt=Bn(require("react")),vw=require("@fortawesome/free-solid-svg-icons"),bw=require("@fortawesome/react-fontawesome"),yw=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),ww=require("@terradharitri/sdk-dapp/UI/CopyButton"),xw=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),Ew=require("@terradharitri/sdk-dapp/UI/Trim"),kw=Bn(require("classnames")),Sw=require("formik");zt();zt();var Aw="Token can only be transfered to one of the following addresses:";zt();zt();var Tw=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Tw));var Lt={"can-transfer-warning":"dapp-core-component__styles-module__can-transfer-warning",canTransferWarning:"dapp-core-component__styles-module__can-transfer-warning","can-transfer-warning-heading":"dapp-core-component__styles-module__can-transfer-warning-heading",canTransferWarningHeading:"dapp-core-component__styles-module__can-transfer-warning-heading","can-transfer-warning-icon":"dapp-core-component__styles-module__can-transfer-warning-icon",canTransferWarningIcon:"dapp-core-component__styles-module__can-transfer-warning-icon","can-transfer-warning-label":"dapp-core-component__styles-module__can-transfer-warning-label",canTransferWarningLabel:"dapp-core-component__styles-module__can-transfer-warning-label","can-transfer-warning-addresses":"dapp-core-component__styles-module__can-transfer-warning-addresses",canTransferWarningAddresses:"dapp-core-component__styles-module__can-transfer-warning-addresses","can-transfer-warning-address":"dapp-core-component__styles-module__can-transfer-warning-address",canTransferWarningAddress:"dapp-core-component__styles-module__can-transfer-warning-address","can-transfer-warning-address-explorer":"dapp-core-component__styles-module__can-transfer-warning-address-explorer",canTransferWarningAddressExplorer:"dapp-core-component__styles-module__can-transfer-warning-address-explorer","can-transfer-warning-address-copy":"dapp-core-component__styles-module__can-transfer-warning-address-copy",canTransferWarningAddressCopy:"dapp-core-component__styles-module__can-transfer-warning-address-copy"},Iw=p=>{let{className:l}=p,{values:{nft:r,address:i}}=(0,Sw.useFormikContext)();return!(r!=null&&r.allowedReceivers)||r.allowedReceivers.includes(i)?null:Bt.default.createElement("div",{className:(0,kw.default)(Lt.canTransferWarning,l),"data-testid":"canTransferWarning"},Bt.default.createElement("div",{className:Lt.canTransferWarningHeading},Bt.default.createElement(bw.FontAwesomeIcon,{icon:vw.faExclamationTriangle,className:Lt.canTransferWarningIcon,size:"lg"}),Bt.default.createElement("div",{className:Lt.canTransferWarningTitle},Bt.default.createElement("div",{className:Lt.canTransferWarningLabel},"Warning!"),Bt.default.createElement("div",{className:Lt.canTransferWarningMessage},Aw))),Bt.default.createElement("div",{className:Lt.canTransferWarningAddresses},r.allowedReceivers.map(d=>Bt.default.createElement("div",{className:Lt.canTransferWarningAddress,key:d},Bt.default.createElement(Ew.Trim,{text:d,className:Lt.canTransferWarningAddressTrim}),Bt.default.createElement(ww.CopyButton,{text:d,className:Lt.canTransferWarningAddressCopy}),Bt.default.createElement(xw.ExplorerLink,{page:`/${yw.ACCOUNTS_ENDPOINT}/${d}`,className:Lt.canTransferWarningAddressExplorer})))))};});var Rs=dt((uT,Us)=>{"use strict";Se();var qw=Object.create,Rn=Object.defineProperty,Cw=Object.getOwnPropertyDescriptor,Nw=Object.getOwnPropertyNames,Bw=Object.getPrototypeOf,Lw=Object.prototype.hasOwnProperty,Uw=(p,l)=>()=>(p&&(l=p(p=0)),l),On=(p,l)=>()=>(l||p((l={exports:{}}).exports,l),l.exports),Rw=(p,l)=>{for(var r in l)Rn(p,r,{get:l[r],enumerable:!0})},Ns=(p,l,r,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let d of Nw(l))!Lw.call(p,d)&&d!==r&&Rn(p,d,{get:()=>l[d],enumerable:!(i=Cw(l,d))||i.enumerable});return p},oe=(p,l,r)=>(r=p!=null?qw(Bw(p)):{},Ns(l||!p||!p.__esModule?Rn(r,"default",{value:p,enumerable:!0}):r,p)),Ow=p=>Ns(Rn({},"__esModule",{value:!0}),p),Dw=On(p=>{"use strict";j(),p.byteLength=y,p.toByteArray=E,p.fromByteArray=A;var l=[],r=[],i=typeof Uint8Array!="undefined"?Uint8Array:Array,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(m=0,u=d.length;m<u;++m)l[m]=d[m],r[d.charCodeAt(m)]=m;var m,u;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function a(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=f.indexOf("=");w===-1&&(w=g);var v=w===g?0:4-w%4;return[w,v]}function y(f){var g=a(f),w=g[0],v=g[1];return(w+v)*3/4-v}function _(f,g,w){return(g+w)*3/4-w}function E(f){var g,w=a(f),v=w[0],S=w[1],k=new i(_(f,v,S)),U=0,O=S>0?v-4:v,L;for(L=0;L<O;L+=4)g=r[f.charCodeAt(L)]<<18|r[f.charCodeAt(L+1)]<<12|r[f.charCodeAt(L+2)]<<6|r[f.charCodeAt(L+3)],k[U++]=g>>16&255,k[U++]=g>>8&255,k[U++]=g&255;return S===2&&(g=r[f.charCodeAt(L)]<<2|r[f.charCodeAt(L+1)]>>4,k[U++]=g&255),S===1&&(g=r[f.charCodeAt(L)]<<10|r[f.charCodeAt(L+1)]<<4|r[f.charCodeAt(L+2)]>>2,k[U++]=g>>8&255,k[U++]=g&255),k}function b(f){return l[f>>18&63]+l[f>>12&63]+l[f>>6&63]+l[f&63]}function x(f,g,w){for(var v,S=[],k=g;k<w;k+=3)v=(f[k]<<16&16711680)+(f[k+1]<<8&65280)+(f[k+2]&255),S.push(b(v));return S.join("")}function A(f){for(var g,w=f.length,v=w%3,S=[],k=16383,U=0,O=w-v;U<O;U+=k)S.push(x(f,U,U+k>O?O:U+k));return v===1?(g=f[w-1],S.push(l[g>>2]+l[g<<4&63]+"==")):v===2&&(g=(f[w-2]<<8)+f[w-1],S.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),S.join("")}}),Fw=On(p=>{j(),p.read=function(l,r,i,d,m){var u,a,y=m*8-d-1,_=(1<<y)-1,E=_>>1,b=-7,x=i?m-1:0,A=i?-1:1,f=l[r+x];for(x+=A,u=f&(1<<-b)-1,f>>=-b,b+=y;b>0;u=u*256+l[r+x],x+=A,b-=8);for(a=u&(1<<-b)-1,u>>=-b,b+=d;b>0;a=a*256+l[r+x],x+=A,b-=8);if(u===0)u=1-E;else{if(u===_)return a?NaN:(f?-1:1)*(1/0);a=a+Math.pow(2,d),u=u-E}return(f?-1:1)*a*Math.pow(2,u-d)},p.write=function(l,r,i,d,m,u){var a,y,_,E=u*8-m-1,b=(1<<E)-1,x=b>>1,A=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=d?0:u-1,g=d?1:-1,w=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(y=isNaN(r)?1:0,a=b):(a=Math.floor(Math.log(r)/Math.LN2),r*(_=Math.pow(2,-a))<1&&(a--,_*=2),a+x>=1?r+=A/_:r+=A*Math.pow(2,1-x),r*_>=2&&(a++,_/=2),a+x>=b?(y=0,a=b):a+x>=1?(y=(r*_-1)*Math.pow(2,m),a=a+x):(y=r*Math.pow(2,x-1)*Math.pow(2,m),a=0));m>=8;l[i+f]=y&255,f+=g,y/=256,m-=8);for(a=a<<m|y,E+=m;E>0;l[i+f]=a&255,f+=g,a/=256,E-=8);l[i+f-g]|=w*128}}),Mw=On(p=>{"use strict";j();var l=Dw(),r=Fw(),i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=a,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var d=2147483647;p.kMaxLength=d,a.TYPED_ARRAY_SUPPORT=m(),!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function m(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function u(e){if(e>d)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return y(e,t,o)}a.poolSize=8192;function y(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return a.from(n,t,o);var c=w(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,t,o){return y(e,t,o)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function _(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function E(e,t,o){return _(e),e<=0?u(e):t!==void 0?typeof o=="string"?u(e).fill(t,o):u(e).fill(t):u(e)}a.alloc=function(e,t,o){return E(e,t,o)};function b(e){return _(e),u(e<0?0:v(e)|0)}a.allocUnsafe=function(e){return b(e)},a.allocUnsafeSlow=function(e){return b(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=k(e,t)|0,n=u(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function A(e){for(var t=e.length<0?0:v(e.length)|0,o=u(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function f(e){if($(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return A(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,a.prototype),n}function w(e){if(a.isBuffer(e)){var t=v(e.length)|0,o=u(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?u(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function v(e){if(e>=d)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+d.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==a.prototype},a.compare=function(e,t){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),$(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,s=Math.min(o,n);c<s;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return a.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=a.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var s=e[o];if($(s,Uint8Array))c+s.length>n.length?a.from(s).copy(n,c):Uint8Array.prototype.set.call(n,s,c);else if(a.isBuffer(s))s.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=s.length}return n};function k(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Te(e).length;default:if(c)return n?-1:ye(e).length;t=(""+t).toLowerCase(),c=!0}}a.byteLength=k;function U(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,t,o);case"utf8":case"utf-8":return Y(this,t,o);case"ascii":return ie(this,t,o);case"latin1":case"binary":return be(this,t,o);case"base64":return H(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}a.prototype._isBuffer=!0;function O(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):U.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:a.compare(this,e)===0},a.prototype.inspect=function(){var e="",t=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(e,t,o,n,c){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var s=c-n,h=o-t,q=Math.min(s,h),D=this.slice(n,c),C=e.slice(t,o),B=0;B<q;++B)if(D[B]!==C[B]){s=D[B],h=C[B];break}return s<h?-1:h<s?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,we(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=a.from(t,n)),a.isBuffer(t))return t.length===0?-1:J(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):J(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function J(e,t,o,n,c){var s=1,h=e.length,q=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;s=2,h/=2,q/=2,o/=2}function D(Ie,qe){return s===1?Ie[qe]:Ie.readUInt16BE(qe*s)}var C;if(c){var B=-1;for(C=o;C<h;C++)if(D(e,C)===D(t,B===-1?0:C-B)){if(B===-1&&(B=C),C-B+1===q)return B*s}else B!==-1&&(C-=C-B),B=-1}else for(o+q>h&&(o=h-q),C=o;C>=0;C--){for(var P=!0,de=0;de<q;de++)if(D(e,C+de)!==D(t,de)){P=!1;break}if(P)return C}return-1}a.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},a.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},a.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function ee(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var s=t.length;n>s/2&&(n=s/2);for(var h=0;h<n;++h){var q=parseInt(t.substr(h*2,2),16);if(we(q))return h;e[o+h]=q}return h}function te(e,t,o,n){return se(ye(t,e.length-o),e,o,n)}function Q(e,t,o,n){return se(Ve(t),e,o,n)}function pe(e,t,o,n){return se(Te(t),e,o,n)}function ne(e,t,o,n){return se(Ge(t,e.length-o),e,o,n)}a.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return ee(this,e,t,o);case"utf8":case"utf-8":return te(this,e,t,o);case"ascii":case"latin1":case"binary":return Q(this,e,t,o);case"base64":return pe(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,t,o);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function Y(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var s=e[c],h=null,q=s>239?4:s>223?3:s>191?2:1;if(c+q<=o){var D,C,B,P;switch(q){case 1:s<128&&(h=s);break;case 2:D=e[c+1],(D&192)===128&&(P=(s&31)<<6|D&63,P>127&&(h=P));break;case 3:D=e[c+1],C=e[c+2],(D&192)===128&&(C&192)===128&&(P=(s&15)<<12|(D&63)<<6|C&63,P>2047&&(P<55296||P>57343)&&(h=P));break;case 4:D=e[c+1],C=e[c+2],B=e[c+3],(D&192)===128&&(C&192)===128&&(B&192)===128&&(P=(s&15)<<18|(D&63)<<12|(C&63)<<6|B&63,P>65535&&P<1114112&&(h=P))}}h===null?(h=65533,q=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),c+=q}return ce(n)}var X=4096;function ce(e){var t=e.length;if(t<=X)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=X));return o}function ie(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function be(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function he(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",s=t;s<o;++s)c+=$e[e[s]];return c}function me(e,t,o){for(var n=e.slice(t,o),c="",s=0;s<n.length-1;s+=2)c+=String.fromCharCode(n[s]+n[s+1]*256);return c}a.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n};function N(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=t,c=1,s=this[e+--n];n>0&&(c*=256);)s+=this[e+--n]*c;return c*=128,s>=c&&(s-=Math.pow(2,8*t)),s},a.prototype.readInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},a.prototype.readInt16LE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},a.prototype.readInt16BE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},a.prototype.readInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!1,52,8)};function F(e,t,o,n,c,s){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<s)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=1,h=0;for(this[t]=e&255;++h<o&&(s*=256);)this[t+h]=e/s&255;return t+o},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=o-1,h=1;for(this[t+s]=e&255;--s>=0&&(h*=256);)this[t+s]=e/h&255;return t+o},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,255,0),this[t]=e&255,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},a.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=0,h=1,q=0;for(this[t]=e&255;++s<o&&(h*=256);)e<0&&q===0&&this[t+s-1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=o-1,h=1,q=0;for(this[t+s]=e&255;--s>=0&&(h*=256);)e<0&&q===0&&this[t+s+1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},a.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ve(e,t,o,n,c,s){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ke(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,4,34028234663852886e22,-34028234663852886e22),r.write(e,t,o,n,23,4),o+4}a.prototype.writeFloatLE=function(e,t,o){return ke(this,e,t,!0,o)},a.prototype.writeFloatBE=function(e,t,o){return ke(this,e,t,!1,o)};function re(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,8,17976931348623157e292,-17976931348623157e292),r.write(e,t,o,n,52,8),o+8}a.prototype.writeDoubleLE=function(e,t,o){return re(this,e,t,!0,o)},a.prototype.writeDoubleBE=function(e,t,o){return re(this,e,t,!1,o)},a.prototype.copy=function(e,t,o,n){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},a.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<o;++s)this[s]=e;else{var h=a.isBuffer(e)?e:a.from(e,n),q=h.length;if(q===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<o-t;++s)this[s+t]=h[s%q]}return this};var ze=/[^+/0-9A-Za-z-_]/g;function We(e){if(e=e.split("=")[0],e=e.trim().replace(ze,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,t){t=t||1/0;for(var o,n=e.length,c=null,s=[],h=0;h<n;++h){if(o=e.charCodeAt(h),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&s.push(239,191,189);continue}else if(h+1===n){(t-=3)>-1&&s.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&s.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&s.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;s.push(o)}else if(o<2048){if((t-=2)<0)break;s.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;s.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;s.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return s}function Ve(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function Ge(e,t){for(var o,n,c,s=[],h=0;h<e.length&&!((t-=2)<0);++h)o=e.charCodeAt(h),n=o>>8,c=o%256,s.push(c),s.push(n);return s}function Te(e){return l.toByteArray(We(e))}function se(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function $(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function we(e){return e!==e}var $e=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),Pw=On((p,l)=>{j();var r=l.exports={},i,d;function m(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=m}catch(v){i=m}try{typeof clearTimeout=="function"?d=clearTimeout:d=u}catch(v){d=u}})();function a(v){if(i===setTimeout)return setTimeout(v,0);if((i===m||!i)&&setTimeout)return i=setTimeout,setTimeout(v,0);try{return i(v,0)}catch(S){try{return i.call(null,v,0)}catch(k){return i.call(this,v,0)}}}function y(v){if(d===clearTimeout)return clearTimeout(v);if((d===u||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(v);try{return d(v)}catch(S){try{return d.call(null,v)}catch(k){return d.call(this,v)}}}var _=[],E=!1,b,x=-1;function A(){!E||!b||(E=!1,b.length?_=b.concat(_):x=-1,_.length&&f())}function f(){if(!E){var v=a(A);E=!0;for(var S=_.length;S;){for(b=_,_=[];++x<S;)b&&b[x].run();x=-1,S=_.length}b=null,E=!1,y(v)}}r.nextTick=function(v){var S=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)S[k-1]=arguments[k];_.push(new g(v,S)),_.length===1&&!E&&a(f)};function g(v,S){this.fun=v,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function w(){}r.on=w,r.addListener=w,r.once=w,r.off=w,r.removeListener=w,r.removeAllListeners=w,r.emit=w,r.prependListener=w,r.prependOnceListener=w,r.listeners=function(v){return[]},r.binding=function(v){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(v){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),jw,zw,Ww,j=Uw(()=>{jw=oe(Mw()),zw=oe(Pw()),Ww=function(p){function l(){var i=this||self;return delete p.prototype.__magic__,i}if(typeof globalThis=="object")return globalThis;if(this)return l();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:l});var r=__magic__;return r}(Object)}),Bs={};Rw(Bs,{WREWAWarning:()=>h4});Us.exports=Ow(Bs);j();j();var mr=oe(require("react")),Vw=require("@fortawesome/free-solid-svg-icons"),Gw=require("@fortawesome/react-fontawesome"),$w=oe(require("classnames"));j();j();j();var US=oe(require("axios"));j();j();j();var RS=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");j();var OS=require("@terradharitri/sdk-dapp/constants/index");j();j();j();var Yw="WREWA is not REWA! It can not be sent to exchanges. It can not be staked or delegated. It can not be used as transaction fee.";j();var Hw="WREWA-bd4d79",Zw={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function Xw(p){return Zw[p]||Hw}j();j();j();var DS=oe(require("axios"));j();j();var FS=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),MS=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),PS=oe(require("axios")),jS=oe(require("lodash/uniqBy"));j();var zS=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),WS=oe(require("axios"));j();j();j();var VS=require("@terradharitri/sdk-dapp/types/tokens.types");j();j();j();j();var GS=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),$S=oe(require("axios"));j();j();var YS=oe(require("axios"));j();var HS=oe(require("react")),ZS=require("@terradharitri/sdk-dapp/constants/index");j();var Kw=oe(require("react")),XS=(0,Kw.createContext)({});j();j();var Jw=oe(require("react")),KS=require("@terradharitri/sdk-dapp/constants/index"),JS=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),QS=oe(require("bignumber.js")),e9=require("formik");j();j();j();var t9=require("bech32");j();j();j();j();j();j();var o9=require("@terradharitri/sdk-dapp/constants"),r9=require("@terradharitri/sdk-dapp/utils/account/getAccount");j();j();var n9=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");j();var a9=require("@terradharitri/sdk-dapp/utils/buildUrlParams");j();var l9=oe(require("anchorme"));j();j();var p9=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Qw=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),c9=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),i9=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");j();j();var e4=oe(require("react")),s9=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),d9=require("formik");j();j();var u9=require("@terradharitri/sdk-dapp/constants/index"),m9=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),f9=oe(require("bignumber.js"));j();j();var _9=require("@terradharitri/sdk-dapp/constants/index");j();var h9=require("@terradharitri/sdk-dapp/constants/index");j();var g9=require("@terradharitri/sdk-dapp/constants/index"),v9=oe(require("bignumber.js"));j();var b9=require("@terradharitri/sdk-dapp/constants/index");j();var y9=require("@terradharitri/sdk-dapp/constants/index");j();j();var w9=require("@terradharitri/sdk-core"),x9=require("@terradharitri/sdk-dapp/constants/index"),E9=oe(require("bignumber.js"));j();j();var k9=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");j();var S9=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");j();var A9=oe(require("bignumber.js"));j();var T9=require("@terradharitri/sdk-dapp/constants/index"),I9=require("@terradharitri/sdk-dapp/utils/smartContracts"),q9=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),C9=oe(require("bignumber.js"));j();var N9=oe(require("bignumber.js"));j();var vl=require("@terradharitri/sdk-dapp/constants/index"),t4=oe(require("bignumber.js")),Ts,Is,qs,o4=(0,Qw.formatAmount)({input:String((Ts=vl.GAS_PRICE)!=null?Ts:1e9),decimals:(Is=vl.DECIMALS)!=null?Is:18,showLastNonZeroDecimal:!0,digits:(qs=vl.DIGITS)!=null?qs:4}),B9=new t4.default(o4).times(10).toString(10);j();var L9=require("@terradharitri/sdk-dapp/constants/index"),U9=oe(require("bignumber.js"));j();var R9=oe(require("bignumber.js"));j();j();var O9=require("yup");j();var Cs=require("@terradharitri/sdk-dapp/constants/ledger.constants"),r4=oe(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),bl=require("yup"),n4=(0,bl.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(p){let{ledger:l}=this.parent;return!(l&&p&&p.length&&!l.ledgerDataActive)}),a4=(0,bl.string)().test({name:"hashSign",test:function(p){let{ledger:l,isGuarded:r}=this.parent;if(l){let{ledgerWithHashSign:i,ledgerWithGuardians:d}=(0,r4.default)(l.version);if(p&&p.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${Cs.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(r&&!d)return this.createError({message:`You need at least DharitrI app version ${Cs.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),l4=[n4,a4],D9=l4.reduce((p,l)=>p.concat(l),(0,bl.string)());j();var F9=require("@terradharitri/sdk-dapp/constants/index"),M9=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),P9=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),j9=require("yup");j();var z9=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),W9=oe(require("bignumber.js")),V9=require("yup");j();var G9=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),$9=oe(require("bignumber.js")),Y9=require("yup");j();var H9=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Z9=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),X9=oe(require("bignumber.js")),K9=require("yup");j();var J9=oe(require("bignumber.js")),Q9=require("yup");j();var eA=require("@terradharitri/sdk-dapp/constants/index"),tA=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),oA=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),rA=oe(require("bignumber.js")),nA=require("yup");j();var aA=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),lA=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),pA=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),cA=oe(require("bignumber.js")),iA=require("yup");j();var sA=oe(require("bignumber.js")),dA=require("yup");j();var uA=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),mA=require("yup");j();var fA=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),_A=require("yup");j();j();var hA=(0,e4.createContext)({});j();j();var p4=oe(require("react")),gA=require("formik"),vA=oe(require("lodash/uniqBy"));j();j();var Ls=oe(require("react")),c4=(0,Ls.createContext)({});function i4(){return(0,Ls.useContext)(c4)}j();j();var bA=require("react"),yA=require("@terradharitri/sdk-dapp/constants/index"),wA=require("@terradharitri/sdk-dapp/types/enums.types");j();var xA=(0,p4.createContext)({});j();j();var EA=require("@terradharitri/sdk-dapp/constants/index"),kA=require("formik");j();j();var s4=oe(require("react")),SA=require("@terradharitri/sdk-dapp/constants/index"),AA=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),TA=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),IA=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),qA=oe(require("bignumber.js")),CA=require("formik");j();j();j();j();var NA=oe(require("bignumber.js"));j();var BA=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),LA=oe(require("bignumber.js"));j();j();var UA=require("react"),RA=require("@terradharitri/sdk-dapp/constants/index"),OA=require("@terradharitri/sdk-dapp/utils/smartContracts"),DA=oe(require("bignumber.js")),FA=require("formik");j();var MA=require("react");j();j();var PA=require("@terradharitri/sdk-dapp/constants/index"),jA=oe(require("bignumber.js")),zA=(0,s4.createContext)({}),WA=(0,Jw.createContext)({});j();j();var d4=oe(require("react")),VA=require("formik"),GA=(0,d4.createContext)({});j();j();var u4=oe(require("react")),$A=require("formik");j();j();j();var YA=require("react"),HA=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),ZA=oe(require("lodash/uniqBy"));j();j();var XA=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),KA=require("@terradharitri/sdk-dapp/utils");j();var JA=require("react");j();var QA=require("react"),eT=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),tT=(0,u4.createContext)({});j();j();var m4=oe(require("react")),oT=require("formik");j();j();j();j();j();var rT=require("react"),nT=require("@terradharitri/sdk-dapp/utils");j();var aT=require("react"),lT=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");j();j();var pT=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),cT=oe(require("axios"));j();var iT=oe(require("axios")),sT=(0,m4.createContext)({});j();var f4=oe(require("react")),dT=(0,f4.createContext)({});j();var _4=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_4));var fr={"wrewa-warning":"dapp-core-component__styles-module__wrewa-warning",wrewaWarning:"dapp-core-component__styles-module__wrewa-warning","wrewa-warning-heading":"dapp-core-component__styles-module__wrewa-warning-heading",wrewaWarningHeading:"dapp-core-component__styles-module__wrewa-warning-heading","wrewa-warning-icon":"dapp-core-component__styles-module__wrewa-warning-icon",wrewaWarningIcon:"dapp-core-component__styles-module__wrewa-warning-icon","wrewa-warning-label":"dapp-core-component__styles-module__wrewa-warning-label",wrewaWarningLabel:"dapp-core-component__styles-module__wrewa-warning-label"},h4=p=>{let{tokenId:l,className:r}=p,{networkConfig:{chainId:i}}=i4();return Xw(i)!==l?null:mr.default.createElement("div",{className:(0,$w.default)(fr.wrewaWarning,r)},mr.default.createElement("div",{className:fr.wrewaWarningHeading},mr.default.createElement(Gw.FontAwesomeIcon,{icon:Vw.faExclamationTriangle,className:fr.wrewaWarningIcon,size:"lg"}),mr.default.createElement("div",{className:fr.wrewaWarningTitle},mr.default.createElement("div",{className:fr.wrewaWarningLabel},"Warning!"),mr.default.createElement("div",{className:fr.wrewaWarningMessage},Yw))))};});var Ms=dt((mT,Fs)=>{"use strict";Se();var g4=Object.create,Fn=Object.defineProperty,v4=Object.getOwnPropertyDescriptor,b4=Object.getOwnPropertyNames,y4=Object.getPrototypeOf,w4=Object.prototype.hasOwnProperty,x4=(p,l)=>()=>(p&&(l=p(p=0)),l),Mn=(p,l)=>()=>(l||p((l={exports:{}}).exports,l),l.exports),E4=(p,l)=>{for(var r in l)Fn(p,r,{get:l[r],enumerable:!0})},Os=(p,l,r,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let d of b4(l))!w4.call(p,d)&&d!==r&&Fn(p,d,{get:()=>l[d],enumerable:!(i=v4(l,d))||i.enumerable});return p},yl=(p,l,r)=>(r=p!=null?g4(y4(p)):{},Os(l||!p||!p.__esModule?Fn(r,"default",{value:p,enumerable:!0}):r,p)),k4=p=>Os(Fn({},"__esModule",{value:!0}),p),S4=Mn(p=>{"use strict";Qo(),p.byteLength=y,p.toByteArray=E,p.fromByteArray=A;var l=[],r=[],i=typeof Uint8Array!="undefined"?Uint8Array:Array,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(m=0,u=d.length;m<u;++m)l[m]=d[m],r[d.charCodeAt(m)]=m;var m,u;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function a(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=f.indexOf("=");w===-1&&(w=g);var v=w===g?0:4-w%4;return[w,v]}function y(f){var g=a(f),w=g[0],v=g[1];return(w+v)*3/4-v}function _(f,g,w){return(g+w)*3/4-w}function E(f){var g,w=a(f),v=w[0],S=w[1],k=new i(_(f,v,S)),U=0,O=S>0?v-4:v,L;for(L=0;L<O;L+=4)g=r[f.charCodeAt(L)]<<18|r[f.charCodeAt(L+1)]<<12|r[f.charCodeAt(L+2)]<<6|r[f.charCodeAt(L+3)],k[U++]=g>>16&255,k[U++]=g>>8&255,k[U++]=g&255;return S===2&&(g=r[f.charCodeAt(L)]<<2|r[f.charCodeAt(L+1)]>>4,k[U++]=g&255),S===1&&(g=r[f.charCodeAt(L)]<<10|r[f.charCodeAt(L+1)]<<4|r[f.charCodeAt(L+2)]>>2,k[U++]=g>>8&255,k[U++]=g&255),k}function b(f){return l[f>>18&63]+l[f>>12&63]+l[f>>6&63]+l[f&63]}function x(f,g,w){for(var v,S=[],k=g;k<w;k+=3)v=(f[k]<<16&16711680)+(f[k+1]<<8&65280)+(f[k+2]&255),S.push(b(v));return S.join("")}function A(f){for(var g,w=f.length,v=w%3,S=[],k=16383,U=0,O=w-v;U<O;U+=k)S.push(x(f,U,U+k>O?O:U+k));return v===1?(g=f[w-1],S.push(l[g>>2]+l[g<<4&63]+"==")):v===2&&(g=(f[w-2]<<8)+f[w-1],S.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),S.join("")}}),A4=Mn(p=>{Qo(),p.read=function(l,r,i,d,m){var u,a,y=m*8-d-1,_=(1<<y)-1,E=_>>1,b=-7,x=i?m-1:0,A=i?-1:1,f=l[r+x];for(x+=A,u=f&(1<<-b)-1,f>>=-b,b+=y;b>0;u=u*256+l[r+x],x+=A,b-=8);for(a=u&(1<<-b)-1,u>>=-b,b+=d;b>0;a=a*256+l[r+x],x+=A,b-=8);if(u===0)u=1-E;else{if(u===_)return a?NaN:(f?-1:1)*(1/0);a=a+Math.pow(2,d),u=u-E}return(f?-1:1)*a*Math.pow(2,u-d)},p.write=function(l,r,i,d,m,u){var a,y,_,E=u*8-m-1,b=(1<<E)-1,x=b>>1,A=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=d?0:u-1,g=d?1:-1,w=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(y=isNaN(r)?1:0,a=b):(a=Math.floor(Math.log(r)/Math.LN2),r*(_=Math.pow(2,-a))<1&&(a--,_*=2),a+x>=1?r+=A/_:r+=A*Math.pow(2,1-x),r*_>=2&&(a++,_/=2),a+x>=b?(y=0,a=b):a+x>=1?(y=(r*_-1)*Math.pow(2,m),a=a+x):(y=r*Math.pow(2,x-1)*Math.pow(2,m),a=0));m>=8;l[i+f]=y&255,f+=g,y/=256,m-=8);for(a=a<<m|y,E+=m;E>0;l[i+f]=a&255,f+=g,a/=256,E-=8);l[i+f-g]|=w*128}}),T4=Mn(p=>{"use strict";Qo();var l=S4(),r=A4(),i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=a,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var d=2147483647;p.kMaxLength=d,a.TYPED_ARRAY_SUPPORT=m(),!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function m(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function u(e){if(e>d)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return y(e,t,o)}a.poolSize=8192;function y(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return a.from(n,t,o);var c=w(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,t,o){return y(e,t,o)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function _(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function E(e,t,o){return _(e),e<=0?u(e):t!==void 0?typeof o=="string"?u(e).fill(t,o):u(e).fill(t):u(e)}a.alloc=function(e,t,o){return E(e,t,o)};function b(e){return _(e),u(e<0?0:v(e)|0)}a.allocUnsafe=function(e){return b(e)},a.allocUnsafeSlow=function(e){return b(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=k(e,t)|0,n=u(o),c=n.write(e,t);return c!==o&&(n=n.slice(0,c)),n}function A(e){for(var t=e.length<0?0:v(e.length)|0,o=u(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function f(e){if($(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return A(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,a.prototype),n}function w(e){if(a.isBuffer(e)){var t=v(e.length)|0,o=u(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?u(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function v(e){if(e>=d)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+d.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==a.prototype},a.compare=function(e,t){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),$(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,c=0,s=Math.min(o,n);c<s;++c)if(e[c]!==t[c]){o=e[c],n=t[c];break}return o<n?-1:n<o?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return a.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=a.allocUnsafe(t),c=0;for(o=0;o<e.length;++o){var s=e[o];if($(s,Uint8Array))c+s.length>n.length?a.from(s).copy(n,c):Uint8Array.prototype.set.call(n,s,c);else if(a.isBuffer(s))s.copy(n,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=s.length}return n};function k(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var c=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Te(e).length;default:if(c)return n?-1:ye(e).length;t=(""+t).toLowerCase(),c=!0}}a.byteLength=k;function U(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,t,o);case"utf8":case"utf-8":return Y(this,t,o);case"ascii":return ie(this,t,o);case"latin1":case"binary":return be(this,t,o);case"base64":return H(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}a.prototype._isBuffer=!0;function O(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):U.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:a.compare(this,e)===0},a.prototype.inspect=function(){var e="",t=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(e,t,o,n,c){if($(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),c===void 0&&(c=this.length),t<0||o>e.length||n<0||c>this.length)throw new RangeError("out of range index");if(n>=c&&t>=o)return 0;if(n>=c)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,c>>>=0,this===e)return 0;for(var s=c-n,h=o-t,q=Math.min(s,h),D=this.slice(n,c),C=e.slice(t,o),B=0;B<q;++B)if(D[B]!==C[B]){s=D[B],h=C[B];break}return s<h?-1:h<s?1:0};function L(e,t,o,n,c){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,we(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof t=="string"&&(t=a.from(t,n)),a.isBuffer(t))return t.length===0?-1:J(e,t,o,n,c);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):J(e,[t],o,n,c);throw new TypeError("val must be string, number or Buffer")}function J(e,t,o,n,c){var s=1,h=e.length,q=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;s=2,h/=2,q/=2,o/=2}function D(Ie,qe){return s===1?Ie[qe]:Ie.readUInt16BE(qe*s)}var C;if(c){var B=-1;for(C=o;C<h;C++)if(D(e,C)===D(t,B===-1?0:C-B)){if(B===-1&&(B=C),C-B+1===q)return B*s}else B!==-1&&(C-=C-B),B=-1}else for(o+q>h&&(o=h-q),C=o;C>=0;C--){for(var P=!0,de=0;de<q;de++)if(D(e,C+de)!==D(t,de)){P=!1;break}if(P)return C}return-1}a.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},a.prototype.indexOf=function(e,t,o){return L(this,e,t,o,!0)},a.prototype.lastIndexOf=function(e,t,o){return L(this,e,t,o,!1)};function ee(e,t,o,n){o=Number(o)||0;var c=e.length-o;n?(n=Number(n),n>c&&(n=c)):n=c;var s=t.length;n>s/2&&(n=s/2);for(var h=0;h<n;++h){var q=parseInt(t.substr(h*2,2),16);if(we(q))return h;e[o+h]=q}return h}function te(e,t,o,n){return se(ye(t,e.length-o),e,o,n)}function Q(e,t,o,n){return se(Ve(t),e,o,n)}function pe(e,t,o,n){return se(Te(t),e,o,n)}function ne(e,t,o,n){return se(Ge(t,e.length-o),e,o,n)}a.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-t;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return ee(this,e,t,o);case"utf8":case"utf-8":return te(this,e,t,o);case"ascii":case"latin1":case"binary":return Q(this,e,t,o);case"base64":return pe(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,t,o);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function Y(e,t,o){o=Math.min(e.length,o);for(var n=[],c=t;c<o;){var s=e[c],h=null,q=s>239?4:s>223?3:s>191?2:1;if(c+q<=o){var D,C,B,P;switch(q){case 1:s<128&&(h=s);break;case 2:D=e[c+1],(D&192)===128&&(P=(s&31)<<6|D&63,P>127&&(h=P));break;case 3:D=e[c+1],C=e[c+2],(D&192)===128&&(C&192)===128&&(P=(s&15)<<12|(D&63)<<6|C&63,P>2047&&(P<55296||P>57343)&&(h=P));break;case 4:D=e[c+1],C=e[c+2],B=e[c+3],(D&192)===128&&(C&192)===128&&(B&192)===128&&(P=(s&15)<<18|(D&63)<<12|(C&63)<<6|B&63,P>65535&&P<1114112&&(h=P))}}h===null?(h=65533,q=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),c+=q}return ce(n)}var X=4096;function ce(e){var t=e.length;if(t<=X)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=X));return o}function ie(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]&127);return n}function be(e,t,o){var n="";o=Math.min(e.length,o);for(var c=t;c<o;++c)n+=String.fromCharCode(e[c]);return n}function he(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var c="",s=t;s<o;++s)c+=$e[e[s]];return c}function me(e,t,o){for(var n=e.slice(t,o),c="",s=0;s<n.length-1;s+=2)c+=String.fromCharCode(n[s]+n[s+1]*256);return c}a.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n};function N(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e+--t],c=1;t>0&&(c*=256);)n+=this[e+--t]*c;return n},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||N(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=this[e],c=1,s=0;++s<t&&(c*=256);)n+=this[e+s]*c;return c*=128,n>=c&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||N(e,t,this.length);for(var n=t,c=1,s=this[e+--n];n>0&&(c*=256);)s+=this[e+--n]*c;return c*=128,s>=c&&(s-=Math.pow(2,8*t)),s},a.prototype.readInt8=function(e,t){return e=e>>>0,t||N(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},a.prototype.readInt16LE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},a.prototype.readInt16BE=function(e,t){e=e>>>0,t||N(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},a.prototype.readInt32LE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e=e>>>0,t||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e=e>>>0,t||N(e,4,this.length),r.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||N(e,8,this.length),r.read(this,e,!1,52,8)};function F(e,t,o,n,c,s){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>c||t<s)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=1,h=0;for(this[t]=e&255;++h<o&&(s*=256);)this[t+h]=e/s&255;return t+o},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var c=Math.pow(2,8*o)-1;F(this,e,t,o,c,0)}var s=o-1,h=1;for(this[t+s]=e&255;--s>=0&&(h*=256);)this[t+s]=e/h&255;return t+o},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,255,0),this[t]=e&255,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},a.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=0,h=1,q=0;for(this[t]=e&255;++s<o&&(h*=256);)e<0&&q===0&&this[t+s-1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var c=Math.pow(2,8*o-1);F(this,e,t,o,c-1,-c)}var s=o-1,h=1,q=0;for(this[t+s]=e&255;--s>=0&&(h*=256);)e<0&&q===0&&this[t+s+1]!==0&&(q=1),this[t+s]=(e/h>>0)-q&255;return t+o},a.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},a.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},a.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ve(e,t,o,n,c,s){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ke(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,4,34028234663852886e22,-34028234663852886e22),r.write(e,t,o,n,23,4),o+4}a.prototype.writeFloatLE=function(e,t,o){return ke(this,e,t,!0,o)},a.prototype.writeFloatBE=function(e,t,o){return ke(this,e,t,!1,o)};function re(e,t,o,n,c){return t=+t,o=o>>>0,c||ve(e,t,o,8,17976931348623157e292,-17976931348623157e292),r.write(e,t,o,n,52,8),o+8}a.prototype.writeDoubleLE=function(e,t,o){return re(this,e,t,!0,o)},a.prototype.writeDoubleBE=function(e,t,o){return re(this,e,t,!1,o)},a.prototype.copy=function(e,t,o,n){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var c=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),c},a.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var c=e.charCodeAt(0);(n==="utf8"&&c<128||n==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<o;++s)this[s]=e;else{var h=a.isBuffer(e)?e:a.from(e,n),q=h.length;if(q===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<o-t;++s)this[s+t]=h[s%q]}return this};var ze=/[^+/0-9A-Za-z-_]/g;function We(e){if(e=e.split("=")[0],e=e.trim().replace(ze,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,t){t=t||1/0;for(var o,n=e.length,c=null,s=[],h=0;h<n;++h){if(o=e.charCodeAt(h),o>55295&&o<57344){if(!c){if(o>56319){(t-=3)>-1&&s.push(239,191,189);continue}else if(h+1===n){(t-=3)>-1&&s.push(239,191,189);continue}c=o;continue}if(o<56320){(t-=3)>-1&&s.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(t-=3)>-1&&s.push(239,191,189);if(c=null,o<128){if((t-=1)<0)break;s.push(o)}else if(o<2048){if((t-=2)<0)break;s.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;s.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;s.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return s}function Ve(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function Ge(e,t){for(var o,n,c,s=[],h=0;h<e.length&&!((t-=2)<0);++h)o=e.charCodeAt(h),n=o>>8,c=o%256,s.push(c),s.push(n);return s}function Te(e){return l.toByteArray(We(e))}function se(e,t,o,n){for(var c=0;c<n&&!(c+o>=t.length||c>=e.length);++c)t[c+o]=e[c];return c}function $(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function we(e){return e!==e}var $e=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,c=0;c<16;++c)t[n+c]=e[o]+e[c];return t}()}),I4=Mn((p,l)=>{Qo();var r=l.exports={},i,d;function m(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=m}catch(v){i=m}try{typeof clearTimeout=="function"?d=clearTimeout:d=u}catch(v){d=u}})();function a(v){if(i===setTimeout)return setTimeout(v,0);if((i===m||!i)&&setTimeout)return i=setTimeout,setTimeout(v,0);try{return i(v,0)}catch(S){try{return i.call(null,v,0)}catch(k){return i.call(this,v,0)}}}function y(v){if(d===clearTimeout)return clearTimeout(v);if((d===u||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(v);try{return d(v)}catch(S){try{return d.call(null,v)}catch(k){return d.call(this,v)}}}var _=[],E=!1,b,x=-1;function A(){!E||!b||(E=!1,b.length?_=b.concat(_):x=-1,_.length&&f())}function f(){if(!E){var v=a(A);E=!0;for(var S=_.length;S;){for(b=_,_=[];++x<S;)b&&b[x].run();x=-1,S=_.length}b=null,E=!1,y(v)}}r.nextTick=function(v){var S=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)S[k-1]=arguments[k];_.push(new g(v,S)),_.length===1&&!E&&a(f)};function g(v,S){this.fun=v,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function w(){}r.on=w,r.addListener=w,r.once=w,r.off=w,r.removeListener=w,r.removeAllListeners=w,r.emit=w,r.prependListener=w,r.prependOnceListener=w,r.listeners=function(v){return[]},r.binding=function(v){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(v){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),q4,C4,N4,Qo=x4(()=>{q4=yl(T4()),C4=yl(I4()),N4=function(p){function l(){var i=this||self;return delete p.prototype.__magic__,i}if(typeof globalThis=="object")return globalThis;if(this)return l();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:l});var r=__magic__;return r}(Object)}),Ds={};E4(Ds,{HighlightText:()=>U4});Fs.exports=k4(Ds);Qo();Qo();var Dn=yl(require("react"));Qo();var B4=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(B4));var L4={highlight:"dapp-core-component__styles-modules__highlight"},U4=({highlight:p,text:l=""})=>{let r=l.split(" "),i=p.toLowerCase(),d=new RegExp(`(${i})`,"gi"),m=r.map(u=>u.split(d).filter(a=>a));return Dn.default.createElement("span",{className:L4.highlight},m.map((u,a)=>{let y=`${u}-${a}`;return Dn.default.createElement("span",{key:y},u.map((_,E)=>{let b=_.toLowerCase()===i,x=i&&b,A=`${_}-${E}`;return x?Dn.default.createElement("strong",{key:A},_):Dn.default.createElement("span",{key:A},_)}))}))};});var V={};module.exports=$s(V);Se();G(V,xt($l()),module.exports);G(V,xt(Kl()),module.exports);G(V,xt(mc()),module.exports);G(V,xt(xi()),module.exports);G(V,xt(Yi()),module.exports);G(V,xt(xs()),module.exports);G(V,xt(As()),module.exports);G(V,xt(Rs()),module.exports);G(V,xt(Ms()),module.exports);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
