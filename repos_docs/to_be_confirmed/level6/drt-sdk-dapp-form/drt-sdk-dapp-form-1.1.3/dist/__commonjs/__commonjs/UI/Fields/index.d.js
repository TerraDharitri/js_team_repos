"use strict";var Ji=Object.create;var Ot=Object.defineProperty;var Ki=Object.getOwnPropertyDescriptor;var Qi=Object.getOwnPropertyNames;var el=Object.getPrototypeOf,rl=Object.prototype.hasOwnProperty;var tl=(p,i)=>()=>(p&&(i=p(p=0)),i);var He=(p,i)=>()=>(i||p((i={exports:{}}).exports,i),i.exports);var Qr=(p,i,a,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of Qi(i))!rl.call(p,s)&&s!==a&&Ot(p,s,{get:()=>i[s],enumerable:!(u=Ki(i,s))||u.enumerable});return p},$=(p,i,a)=>(Qr(p,i,"default"),a&&Qr(a,i,"default")),er=(p,i,a)=>(a=p!=null?Ji(el(p)):{},Qr(i||!p||!p.__esModule?Ot(a,"default",{value:p,enumerable:!0}):a,p)),ol=p=>Qr(Ot({},"__esModule",{value:!0}),p);var No=He(et=>{"use strict";ye();et.byteLength=al;et.toByteArray=ll;et.fromByteArray=ul;var ar=[],Qe=[],nl=typeof Uint8Array!="undefined"?Uint8Array:Array,Nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ir=0,Lo=Nt.length;Ir<Lo;++Ir)ar[Ir]=Nt[Ir],Qe[Nt.charCodeAt(Ir)]=Ir;var Ir,Lo;Qe["-".charCodeAt(0)]=62;Qe["_".charCodeAt(0)]=63;function Oo(p){var i=p.length;if(i%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var a=p.indexOf("=");a===-1&&(a=i);var u=a===i?0:4-a%4;return[a,u]}function al(p){var i=Oo(p),a=i[0],u=i[1];return(a+u)*3/4-u}function il(p,i,a){return(i+a)*3/4-a}function ll(p){var i,a=Oo(p),u=a[0],s=a[1],_=new nl(il(p,u,s)),d=0,n=s>0?u-4:u,w;for(w=0;w<n;w+=4)i=Qe[p.charCodeAt(w)]<<18|Qe[p.charCodeAt(w+1)]<<12|Qe[p.charCodeAt(w+2)]<<6|Qe[p.charCodeAt(w+3)],_[d++]=i>>16&255,_[d++]=i>>8&255,_[d++]=i&255;return s===2&&(i=Qe[p.charCodeAt(w)]<<2|Qe[p.charCodeAt(w+1)]>>4,_[d++]=i&255),s===1&&(i=Qe[p.charCodeAt(w)]<<10|Qe[p.charCodeAt(w+1)]<<4|Qe[p.charCodeAt(w+2)]>>2,_[d++]=i>>8&255,_[d++]=i&255),_}function pl(p){return ar[p>>18&63]+ar[p>>12&63]+ar[p>>6&63]+ar[p&63]}function cl(p,i,a){for(var u,s=[],_=i;_<a;_+=3)u=(p[_]<<16&16711680)+(p[_+1]<<8&65280)+(p[_+2]&255),s.push(pl(u));return s.join("")}function ul(p){for(var i,a=p.length,u=a%3,s=[],_=16383,d=0,n=a-u;d<n;d+=_)s.push(cl(p,d,d+_>n?n:d+_));return u===1?(i=p[a-1],s.push(ar[i>>2]+ar[i<<4&63]+"==")):u===2&&(i=(p[a-2]<<8)+p[a-1],s.push(ar[i>>10]+ar[i>>4&63]+ar[i<<2&63]+"=")),s.join("")}});var Ro=He(Rt=>{ye();Rt.read=function(p,i,a,u,s){var _,d,n=s*8-u-1,w=(1<<n)-1,y=w>>1,q=-7,b=a?s-1:0,E=a?-1:1,B=p[i+b];for(b+=E,_=B&(1<<-q)-1,B>>=-q,q+=n;q>0;_=_*256+p[i+b],b+=E,q-=8);for(d=_&(1<<-q)-1,_>>=-q,q+=u;q>0;d=d*256+p[i+b],b+=E,q-=8);if(_===0)_=1-y;else{if(_===w)return d?NaN:(B?-1:1)*(1/0);d=d+Math.pow(2,u),_=_-y}return(B?-1:1)*d*Math.pow(2,_-u)};Rt.write=function(p,i,a,u,s,_){var d,n,w,y=_*8-s-1,q=(1<<y)-1,b=q>>1,E=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,B=u?0:_-1,f=u?1:-1,g=i<0||i===0&&1/i<0?1:0;for(i=Math.abs(i),isNaN(i)||i===1/0?(n=isNaN(i)?1:0,d=q):(d=Math.floor(Math.log(i)/Math.LN2),i*(w=Math.pow(2,-d))<1&&(d--,w*=2),d+b>=1?i+=E/w:i+=E*Math.pow(2,1-b),i*w>=2&&(d++,w/=2),d+b>=q?(n=0,d=q):d+b>=1?(n=(i*w-1)*Math.pow(2,s),d=d+b):(n=i*Math.pow(2,b-1)*Math.pow(2,s),d=0));s>=8;p[a+B]=n&255,B+=f,n/=256,s-=8);for(d=d<<s|n,y+=s;y>0;p[a+B]=d&255,B+=f,d/=256,y-=8);p[a+B-f]|=g*128}});var Zo=He(Fr=>{"use strict";ye();var Mt=No(),Dr=Ro(),Mo=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Fr.Buffer=W;Fr.SlowBuffer=hl;Fr.INSPECT_MAX_BYTES=50;var rt=2147483647;Fr.kMaxLength=rt;W.TYPED_ARRAY_SUPPORT=sl();!W.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function sl(){try{var p=new Uint8Array(1),i={foo:function(){return 42}};return Object.setPrototypeOf(i,Uint8Array.prototype),Object.setPrototypeOf(p,i),p.foo()===42}catch(a){return!1}}Object.defineProperty(W.prototype,"parent",{enumerable:!0,get:function(){if(!!W.isBuffer(this))return this.buffer}});Object.defineProperty(W.prototype,"offset",{enumerable:!0,get:function(){if(!!W.isBuffer(this))return this.byteOffset}});function cr(p){if(p>rt)throw new RangeError('The value "'+p+'" is invalid for option "size"');var i=new Uint8Array(p);return Object.setPrototypeOf(i,W.prototype),i}function W(p,i,a){if(typeof p=="number"){if(typeof i=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return jt(p)}return Fo(p,i,a)}W.poolSize=8192;function Fo(p,i,a){if(typeof p=="string")return fl(p,i);if(ArrayBuffer.isView(p))return ml(p);if(p==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p);if(ir(p,ArrayBuffer)||p&&ir(p.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ir(p,SharedArrayBuffer)||p&&ir(p.buffer,SharedArrayBuffer)))return Dt(p,i,a);if(typeof p=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var u=p.valueOf&&p.valueOf();if(u!=null&&u!==p)return W.from(u,i,a);var s=_l(p);if(s)return s;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof p[Symbol.toPrimitive]=="function")return W.from(p[Symbol.toPrimitive]("string"),i,a);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p)}W.from=function(p,i,a){return Fo(p,i,a)};Object.setPrototypeOf(W.prototype,Uint8Array.prototype);Object.setPrototypeOf(W,Uint8Array);function jo(p){if(typeof p!="number")throw new TypeError('"size" argument must be of type number');if(p<0)throw new RangeError('The value "'+p+'" is invalid for option "size"')}function dl(p,i,a){return jo(p),p<=0?cr(p):i!==void 0?typeof a=="string"?cr(p).fill(i,a):cr(p).fill(i):cr(p)}W.alloc=function(p,i,a){return dl(p,i,a)};function jt(p){return jo(p),cr(p<0?0:zt(p)|0)}W.allocUnsafe=function(p){return jt(p)};W.allocUnsafeSlow=function(p){return jt(p)};function fl(p,i){if((typeof i!="string"||i==="")&&(i="utf8"),!W.isEncoding(i))throw new TypeError("Unknown encoding: "+i);var a=zo(p,i)|0,u=cr(a),s=u.write(p,i);return s!==a&&(u=u.slice(0,s)),u}function Pt(p){for(var i=p.length<0?0:zt(p.length)|0,a=cr(i),u=0;u<i;u+=1)a[u]=p[u]&255;return a}function ml(p){if(ir(p,Uint8Array)){var i=new Uint8Array(p);return Dt(i.buffer,i.byteOffset,i.byteLength)}return Pt(p)}function Dt(p,i,a){if(i<0||p.byteLength<i)throw new RangeError('"offset" is outside of buffer bounds');if(p.byteLength<i+(a||0))throw new RangeError('"length" is outside of buffer bounds');var u;return i===void 0&&a===void 0?u=new Uint8Array(p):a===void 0?u=new Uint8Array(p,i):u=new Uint8Array(p,i,a),Object.setPrototypeOf(u,W.prototype),u}function _l(p){if(W.isBuffer(p)){var i=zt(p.length)|0,a=cr(i);return a.length===0||p.copy(a,0,0,i),a}if(p.length!==void 0)return typeof p.length!="number"||Gt(p.length)?cr(0):Pt(p);if(p.type==="Buffer"&&Array.isArray(p.data))return Pt(p.data)}function zt(p){if(p>=rt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+rt.toString(16)+" bytes");return p|0}function hl(p){return+p!=p&&(p=0),W.alloc(+p)}W.isBuffer=function(i){return i!=null&&i._isBuffer===!0&&i!==W.prototype};W.compare=function(i,a){if(ir(i,Uint8Array)&&(i=W.from(i,i.offset,i.byteLength)),ir(a,Uint8Array)&&(a=W.from(a,a.offset,a.byteLength)),!W.isBuffer(i)||!W.isBuffer(a))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(i===a)return 0;for(var u=i.length,s=a.length,_=0,d=Math.min(u,s);_<d;++_)if(i[_]!==a[_]){u=i[_],s=a[_];break}return u<s?-1:s<u?1:0};W.isEncoding=function(i){switch(String(i).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};W.concat=function(i,a){if(!Array.isArray(i))throw new TypeError('"list" argument must be an Array of Buffers');if(i.length===0)return W.alloc(0);var u;if(a===void 0)for(a=0,u=0;u<i.length;++u)a+=i[u].length;var s=W.allocUnsafe(a),_=0;for(u=0;u<i.length;++u){var d=i[u];if(ir(d,Uint8Array))_+d.length>s.length?W.from(d).copy(s,_):Uint8Array.prototype.set.call(s,d,_);else if(W.isBuffer(d))d.copy(s,_);else throw new TypeError('"list" argument must be an Array of Buffers');_+=d.length}return s};function zo(p,i){if(W.isBuffer(p))return p.length;if(ArrayBuffer.isView(p)||ir(p,ArrayBuffer))return p.byteLength;if(typeof p!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof p);var a=p.length,u=arguments.length>2&&arguments[2]===!0;if(!u&&a===0)return 0;for(var s=!1;;)switch(i){case"ascii":case"latin1":case"binary":return a;case"utf8":case"utf-8":return Ft(p).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a*2;case"hex":return a>>>1;case"base64":return Ho(p).length;default:if(s)return u?-1:Ft(p).length;i=(""+i).toLowerCase(),s=!0}}W.byteLength=zo;function gl(p,i,a){var u=!1;if((i===void 0||i<0)&&(i=0),i>this.length||((a===void 0||a>this.length)&&(a=this.length),a<=0)||(a>>>=0,i>>>=0,a<=i))return"";for(p||(p="utf8");;)switch(p){case"hex":return Al(this,i,a);case"utf8":case"utf-8":return Vo(this,i,a);case"ascii":return Sl(this,i,a);case"latin1":case"binary":return kl(this,i,a);case"base64":return xl(this,i,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bl(this,i,a);default:if(u)throw new TypeError("Unknown encoding: "+p);p=(p+"").toLowerCase(),u=!0}}W.prototype._isBuffer=!0;function Tr(p,i,a){var u=p[i];p[i]=p[a],p[a]=u}W.prototype.swap16=function(){var i=this.length;if(i%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var a=0;a<i;a+=2)Tr(this,a,a+1);return this};W.prototype.swap32=function(){var i=this.length;if(i%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var a=0;a<i;a+=4)Tr(this,a,a+3),Tr(this,a+1,a+2);return this};W.prototype.swap64=function(){var i=this.length;if(i%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var a=0;a<i;a+=8)Tr(this,a,a+7),Tr(this,a+1,a+6),Tr(this,a+2,a+5),Tr(this,a+3,a+4);return this};W.prototype.toString=function(){var i=this.length;return i===0?"":arguments.length===0?Vo(this,0,i):gl.apply(this,arguments)};W.prototype.toLocaleString=W.prototype.toString;W.prototype.equals=function(i){if(!W.isBuffer(i))throw new TypeError("Argument must be a Buffer");return this===i?!0:W.compare(this,i)===0};W.prototype.inspect=function(){var i="",a=Fr.INSPECT_MAX_BYTES;return i=this.toString("hex",0,a).replace(/(.{2})/g,"$1 ").trim(),this.length>a&&(i+=" ... "),"<Buffer "+i+">"};Mo&&(W.prototype[Mo]=W.prototype.inspect);W.prototype.compare=function(i,a,u,s,_){if(ir(i,Uint8Array)&&(i=W.from(i,i.offset,i.byteLength)),!W.isBuffer(i))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof i);if(a===void 0&&(a=0),u===void 0&&(u=i?i.length:0),s===void 0&&(s=0),_===void 0&&(_=this.length),a<0||u>i.length||s<0||_>this.length)throw new RangeError("out of range index");if(s>=_&&a>=u)return 0;if(s>=_)return-1;if(a>=u)return 1;if(a>>>=0,u>>>=0,s>>>=0,_>>>=0,this===i)return 0;for(var d=_-s,n=u-a,w=Math.min(d,n),y=this.slice(s,_),q=i.slice(a,u),b=0;b<w;++b)if(y[b]!==q[b]){d=y[b],n=q[b];break}return d<n?-1:n<d?1:0};function Go(p,i,a,u,s){if(p.length===0)return-1;if(typeof a=="string"?(u=a,a=0):a>2147483647?a=2147483647:a<-2147483648&&(a=-2147483648),a=+a,Gt(a)&&(a=s?0:p.length-1),a<0&&(a=p.length+a),a>=p.length){if(s)return-1;a=p.length-1}else if(a<0)if(s)a=0;else return-1;if(typeof i=="string"&&(i=W.from(i,u)),W.isBuffer(i))return i.length===0?-1:Po(p,i,a,u,s);if(typeof i=="number")return i=i&255,typeof Uint8Array.prototype.indexOf=="function"?s?Uint8Array.prototype.indexOf.call(p,i,a):Uint8Array.prototype.lastIndexOf.call(p,i,a):Po(p,[i],a,u,s);throw new TypeError("val must be string, number or Buffer")}function Po(p,i,a,u,s){var _=1,d=p.length,n=i.length;if(u!==void 0&&(u=String(u).toLowerCase(),u==="ucs2"||u==="ucs-2"||u==="utf16le"||u==="utf-16le")){if(p.length<2||i.length<2)return-1;_=2,d/=2,n/=2,a/=2}function w(B,f){return _===1?B[f]:B.readUInt16BE(f*_)}var y;if(s){var q=-1;for(y=a;y<d;y++)if(w(p,y)===w(i,q===-1?0:y-q)){if(q===-1&&(q=y),y-q+1===n)return q*_}else q!==-1&&(y-=y-q),q=-1}else for(a+n>d&&(a=d-n),y=a;y>=0;y--){for(var b=!0,E=0;E<n;E++)if(w(p,y+E)!==w(i,E)){b=!1;break}if(b)return y}return-1}W.prototype.includes=function(i,a,u){return this.indexOf(i,a,u)!==-1};W.prototype.indexOf=function(i,a,u){return Go(this,i,a,u,!0)};W.prototype.lastIndexOf=function(i,a,u){return Go(this,i,a,u,!1)};function vl(p,i,a,u){a=Number(a)||0;var s=p.length-a;u?(u=Number(u),u>s&&(u=s)):u=s;var _=i.length;u>_/2&&(u=_/2);for(var d=0;d<u;++d){var n=parseInt(i.substr(d*2,2),16);if(Gt(n))return d;p[a+d]=n}return d}function bl(p,i,a,u){return tt(Ft(i,p.length-a),p,a,u)}function yl(p,i,a,u){return tt(Ul(i),p,a,u)}function wl(p,i,a,u){return tt(Ho(i),p,a,u)}function El(p,i,a,u){return tt(Cl(i,p.length-a),p,a,u)}W.prototype.write=function(i,a,u,s){if(a===void 0)s="utf8",u=this.length,a=0;else if(u===void 0&&typeof a=="string")s=a,u=this.length,a=0;else if(isFinite(a))a=a>>>0,isFinite(u)?(u=u>>>0,s===void 0&&(s="utf8")):(s=u,u=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var _=this.length-a;if((u===void 0||u>_)&&(u=_),i.length>0&&(u<0||a<0)||a>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");for(var d=!1;;)switch(s){case"hex":return vl(this,i,a,u);case"utf8":case"utf-8":return bl(this,i,a,u);case"ascii":case"latin1":case"binary":return yl(this,i,a,u);case"base64":return wl(this,i,a,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return El(this,i,a,u);default:if(d)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),d=!0}};W.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function xl(p,i,a){return i===0&&a===p.length?Mt.fromByteArray(p):Mt.fromByteArray(p.slice(i,a))}function Vo(p,i,a){a=Math.min(p.length,a);for(var u=[],s=i;s<a;){var _=p[s],d=null,n=_>239?4:_>223?3:_>191?2:1;if(s+n<=a){var w,y,q,b;switch(n){case 1:_<128&&(d=_);break;case 2:w=p[s+1],(w&192)===128&&(b=(_&31)<<6|w&63,b>127&&(d=b));break;case 3:w=p[s+1],y=p[s+2],(w&192)===128&&(y&192)===128&&(b=(_&15)<<12|(w&63)<<6|y&63,b>2047&&(b<55296||b>57343)&&(d=b));break;case 4:w=p[s+1],y=p[s+2],q=p[s+3],(w&192)===128&&(y&192)===128&&(q&192)===128&&(b=(_&15)<<18|(w&63)<<12|(y&63)<<6|q&63,b>65535&&b<1114112&&(d=b))}}d===null?(d=65533,n=1):d>65535&&(d-=65536,u.push(d>>>10&1023|55296),d=56320|d&1023),u.push(d),s+=n}return ql(u)}var Do=4096;function ql(p){var i=p.length;if(i<=Do)return String.fromCharCode.apply(String,p);for(var a="",u=0;u<i;)a+=String.fromCharCode.apply(String,p.slice(u,u+=Do));return a}function Sl(p,i,a){var u="";a=Math.min(p.length,a);for(var s=i;s<a;++s)u+=String.fromCharCode(p[s]&127);return u}function kl(p,i,a){var u="";a=Math.min(p.length,a);for(var s=i;s<a;++s)u+=String.fromCharCode(p[s]);return u}function Al(p,i,a){var u=p.length;(!i||i<0)&&(i=0),(!a||a<0||a>u)&&(a=u);for(var s="",_=i;_<a;++_)s+=Ll[p[_]];return s}function Bl(p,i,a){for(var u=p.slice(i,a),s="",_=0;_<u.length-1;_+=2)s+=String.fromCharCode(u[_]+u[_+1]*256);return s}W.prototype.slice=function(i,a){var u=this.length;i=~~i,a=a===void 0?u:~~a,i<0?(i+=u,i<0&&(i=0)):i>u&&(i=u),a<0?(a+=u,a<0&&(a=0)):a>u&&(a=u),a<i&&(a=i);var s=this.subarray(i,a);return Object.setPrototypeOf(s,W.prototype),s};function Le(p,i,a){if(p%1!==0||p<0)throw new RangeError("offset is not uint");if(p+i>a)throw new RangeError("Trying to access beyond buffer length")}W.prototype.readUintLE=W.prototype.readUIntLE=function(i,a,u){i=i>>>0,a=a>>>0,u||Le(i,a,this.length);for(var s=this[i],_=1,d=0;++d<a&&(_*=256);)s+=this[i+d]*_;return s};W.prototype.readUintBE=W.prototype.readUIntBE=function(i,a,u){i=i>>>0,a=a>>>0,u||Le(i,a,this.length);for(var s=this[i+--a],_=1;a>0&&(_*=256);)s+=this[i+--a]*_;return s};W.prototype.readUint8=W.prototype.readUInt8=function(i,a){return i=i>>>0,a||Le(i,1,this.length),this[i]};W.prototype.readUint16LE=W.prototype.readUInt16LE=function(i,a){return i=i>>>0,a||Le(i,2,this.length),this[i]|this[i+1]<<8};W.prototype.readUint16BE=W.prototype.readUInt16BE=function(i,a){return i=i>>>0,a||Le(i,2,this.length),this[i]<<8|this[i+1]};W.prototype.readUint32LE=W.prototype.readUInt32LE=function(i,a){return i=i>>>0,a||Le(i,4,this.length),(this[i]|this[i+1]<<8|this[i+2]<<16)+this[i+3]*16777216};W.prototype.readUint32BE=W.prototype.readUInt32BE=function(i,a){return i=i>>>0,a||Le(i,4,this.length),this[i]*16777216+(this[i+1]<<16|this[i+2]<<8|this[i+3])};W.prototype.readIntLE=function(i,a,u){i=i>>>0,a=a>>>0,u||Le(i,a,this.length);for(var s=this[i],_=1,d=0;++d<a&&(_*=256);)s+=this[i+d]*_;return _*=128,s>=_&&(s-=Math.pow(2,8*a)),s};W.prototype.readIntBE=function(i,a,u){i=i>>>0,a=a>>>0,u||Le(i,a,this.length);for(var s=a,_=1,d=this[i+--s];s>0&&(_*=256);)d+=this[i+--s]*_;return _*=128,d>=_&&(d-=Math.pow(2,8*a)),d};W.prototype.readInt8=function(i,a){return i=i>>>0,a||Le(i,1,this.length),this[i]&128?(255-this[i]+1)*-1:this[i]};W.prototype.readInt16LE=function(i,a){i=i>>>0,a||Le(i,2,this.length);var u=this[i]|this[i+1]<<8;return u&32768?u|4294901760:u};W.prototype.readInt16BE=function(i,a){i=i>>>0,a||Le(i,2,this.length);var u=this[i+1]|this[i]<<8;return u&32768?u|4294901760:u};W.prototype.readInt32LE=function(i,a){return i=i>>>0,a||Le(i,4,this.length),this[i]|this[i+1]<<8|this[i+2]<<16|this[i+3]<<24};W.prototype.readInt32BE=function(i,a){return i=i>>>0,a||Le(i,4,this.length),this[i]<<24|this[i+1]<<16|this[i+2]<<8|this[i+3]};W.prototype.readFloatLE=function(i,a){return i=i>>>0,a||Le(i,4,this.length),Dr.read(this,i,!0,23,4)};W.prototype.readFloatBE=function(i,a){return i=i>>>0,a||Le(i,4,this.length),Dr.read(this,i,!1,23,4)};W.prototype.readDoubleLE=function(i,a){return i=i>>>0,a||Le(i,8,this.length),Dr.read(this,i,!0,52,8)};W.prototype.readDoubleBE=function(i,a){return i=i>>>0,a||Le(i,8,this.length),Dr.read(this,i,!1,52,8)};function $e(p,i,a,u,s,_){if(!W.isBuffer(p))throw new TypeError('"buffer" argument must be a Buffer instance');if(i>s||i<_)throw new RangeError('"value" argument is out of bounds');if(a+u>p.length)throw new RangeError("Index out of range")}W.prototype.writeUintLE=W.prototype.writeUIntLE=function(i,a,u,s){if(i=+i,a=a>>>0,u=u>>>0,!s){var _=Math.pow(2,8*u)-1;$e(this,i,a,u,_,0)}var d=1,n=0;for(this[a]=i&255;++n<u&&(d*=256);)this[a+n]=i/d&255;return a+u};W.prototype.writeUintBE=W.prototype.writeUIntBE=function(i,a,u,s){if(i=+i,a=a>>>0,u=u>>>0,!s){var _=Math.pow(2,8*u)-1;$e(this,i,a,u,_,0)}var d=u-1,n=1;for(this[a+d]=i&255;--d>=0&&(n*=256);)this[a+d]=i/n&255;return a+u};W.prototype.writeUint8=W.prototype.writeUInt8=function(i,a,u){return i=+i,a=a>>>0,u||$e(this,i,a,1,255,0),this[a]=i&255,a+1};W.prototype.writeUint16LE=W.prototype.writeUInt16LE=function(i,a,u){return i=+i,a=a>>>0,u||$e(this,i,a,2,65535,0),this[a]=i&255,this[a+1]=i>>>8,a+2};W.prototype.writeUint16BE=W.prototype.writeUInt16BE=function(i,a,u){return i=+i,a=a>>>0,u||$e(this,i,a,2,65535,0),this[a]=i>>>8,this[a+1]=i&255,a+2};W.prototype.writeUint32LE=W.prototype.writeUInt32LE=function(i,a,u){return i=+i,a=a>>>0,u||$e(this,i,a,4,4294967295,0),this[a+3]=i>>>24,this[a+2]=i>>>16,this[a+1]=i>>>8,this[a]=i&255,a+4};W.prototype.writeUint32BE=W.prototype.writeUInt32BE=function(i,a,u){return i=+i,a=a>>>0,u||$e(this,i,a,4,4294967295,0),this[a]=i>>>24,this[a+1]=i>>>16,this[a+2]=i>>>8,this[a+3]=i&255,a+4};W.prototype.writeIntLE=function(i,a,u,s){if(i=+i,a=a>>>0,!s){var _=Math.pow(2,8*u-1);$e(this,i,a,u,_-1,-_)}var d=0,n=1,w=0;for(this[a]=i&255;++d<u&&(n*=256);)i<0&&w===0&&this[a+d-1]!==0&&(w=1),this[a+d]=(i/n>>0)-w&255;return a+u};W.prototype.writeIntBE=function(i,a,u,s){if(i=+i,a=a>>>0,!s){var _=Math.pow(2,8*u-1);$e(this,i,a,u,_-1,-_)}var d=u-1,n=1,w=0;for(this[a+d]=i&255;--d>=0&&(n*=256);)i<0&&w===0&&this[a+d+1]!==0&&(w=1),this[a+d]=(i/n>>0)-w&255;return a+u};W.prototype.writeInt8=function(i,a,u){return i=+i,a=a>>>0,u||$e(this,i,a,1,127,-128),i<0&&(i=255+i+1),this[a]=i&255,a+1};W.prototype.writeInt16LE=function(i,a,u){return i=+i,a=a>>>0,u||$e(this,i,a,2,32767,-32768),this[a]=i&255,this[a+1]=i>>>8,a+2};W.prototype.writeInt16BE=function(i,a,u){return i=+i,a=a>>>0,u||$e(this,i,a,2,32767,-32768),this[a]=i>>>8,this[a+1]=i&255,a+2};W.prototype.writeInt32LE=function(i,a,u){return i=+i,a=a>>>0,u||$e(this,i,a,4,2147483647,-2147483648),this[a]=i&255,this[a+1]=i>>>8,this[a+2]=i>>>16,this[a+3]=i>>>24,a+4};W.prototype.writeInt32BE=function(i,a,u){return i=+i,a=a>>>0,u||$e(this,i,a,4,2147483647,-2147483648),i<0&&(i=4294967295+i+1),this[a]=i>>>24,this[a+1]=i>>>16,this[a+2]=i>>>8,this[a+3]=i&255,a+4};function Wo(p,i,a,u,s,_){if(a+u>p.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("Index out of range")}function Yo(p,i,a,u,s){return i=+i,a=a>>>0,s||Wo(p,i,a,4,34028234663852886e22,-34028234663852886e22),Dr.write(p,i,a,u,23,4),a+4}W.prototype.writeFloatLE=function(i,a,u){return Yo(this,i,a,!0,u)};W.prototype.writeFloatBE=function(i,a,u){return Yo(this,i,a,!1,u)};function $o(p,i,a,u,s){return i=+i,a=a>>>0,s||Wo(p,i,a,8,17976931348623157e292,-17976931348623157e292),Dr.write(p,i,a,u,52,8),a+8}W.prototype.writeDoubleLE=function(i,a,u){return $o(this,i,a,!0,u)};W.prototype.writeDoubleBE=function(i,a,u){return $o(this,i,a,!1,u)};W.prototype.copy=function(i,a,u,s){if(!W.isBuffer(i))throw new TypeError("argument should be a Buffer");if(u||(u=0),!s&&s!==0&&(s=this.length),a>=i.length&&(a=i.length),a||(a=0),s>0&&s<u&&(s=u),s===u||i.length===0||this.length===0)return 0;if(a<0)throw new RangeError("targetStart out of bounds");if(u<0||u>=this.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),i.length-a<s-u&&(s=i.length-a+u);var _=s-u;return this===i&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(a,u,s):Uint8Array.prototype.set.call(i,this.subarray(u,s),a),_};W.prototype.fill=function(i,a,u,s){if(typeof i=="string"){if(typeof a=="string"?(s=a,a=0,u=this.length):typeof u=="string"&&(s=u,u=this.length),s!==void 0&&typeof s!="string")throw new TypeError("encoding must be a string");if(typeof s=="string"&&!W.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(i.length===1){var _=i.charCodeAt(0);(s==="utf8"&&_<128||s==="latin1")&&(i=_)}}else typeof i=="number"?i=i&255:typeof i=="boolean"&&(i=Number(i));if(a<0||this.length<a||this.length<u)throw new RangeError("Out of range index");if(u<=a)return this;a=a>>>0,u=u===void 0?this.length:u>>>0,i||(i=0);var d;if(typeof i=="number")for(d=a;d<u;++d)this[d]=i;else{var n=W.isBuffer(i)?i:W.from(i,s),w=n.length;if(w===0)throw new TypeError('The value "'+i+'" is invalid for argument "value"');for(d=0;d<u-a;++d)this[d+a]=n[d%w]}return this};var Il=/[^+/0-9A-Za-z-_]/g;function Tl(p){if(p=p.split("=")[0],p=p.trim().replace(Il,""),p.length<2)return"";for(;p.length%4!==0;)p=p+"=";return p}function Ft(p,i){i=i||1/0;for(var a,u=p.length,s=null,_=[],d=0;d<u;++d){if(a=p.charCodeAt(d),a>55295&&a<57344){if(!s){if(a>56319){(i-=3)>-1&&_.push(239,191,189);continue}else if(d+1===u){(i-=3)>-1&&_.push(239,191,189);continue}s=a;continue}if(a<56320){(i-=3)>-1&&_.push(239,191,189),s=a;continue}a=(s-55296<<10|a-56320)+65536}else s&&(i-=3)>-1&&_.push(239,191,189);if(s=null,a<128){if((i-=1)<0)break;_.push(a)}else if(a<2048){if((i-=2)<0)break;_.push(a>>6|192,a&63|128)}else if(a<65536){if((i-=3)<0)break;_.push(a>>12|224,a>>6&63|128,a&63|128)}else if(a<1114112){if((i-=4)<0)break;_.push(a>>18|240,a>>12&63|128,a>>6&63|128,a&63|128)}else throw new Error("Invalid code point")}return _}function Ul(p){for(var i=[],a=0;a<p.length;++a)i.push(p.charCodeAt(a)&255);return i}function Cl(p,i){for(var a,u,s,_=[],d=0;d<p.length&&!((i-=2)<0);++d)a=p.charCodeAt(d),u=a>>8,s=a%256,_.push(s),_.push(u);return _}function Ho(p){return Mt.toByteArray(Tl(p))}function tt(p,i,a,u){for(var s=0;s<u&&!(s+a>=i.length||s>=p.length);++s)i[s+a]=p[s];return s}function ir(p,i){return p instanceof i||p!=null&&p.constructor!=null&&p.constructor.name!=null&&p.constructor.name===i.name}function Gt(p){return p!==p}var Ll=function(){for(var p="0123456789abcdef",i=new Array(256),a=0;a<16;++a)for(var u=a*16,s=0;s<16;++s)i[u+s]=p[a]+p[s];return i}()});var en=He((sg,Qo)=>{ye();var Te=Qo.exports={},lr,pr;function Vt(){throw new Error("setTimeout has not been defined")}function Wt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?lr=setTimeout:lr=Vt}catch(p){lr=Vt}try{typeof clearTimeout=="function"?pr=clearTimeout:pr=Wt}catch(p){pr=Wt}})();function Xo(p){if(lr===setTimeout)return setTimeout(p,0);if((lr===Vt||!lr)&&setTimeout)return lr=setTimeout,setTimeout(p,0);try{return lr(p,0)}catch(i){try{return lr.call(null,p,0)}catch(a){return lr.call(this,p,0)}}}function Ol(p){if(pr===clearTimeout)return clearTimeout(p);if((pr===Wt||!pr)&&clearTimeout)return pr=clearTimeout,clearTimeout(p);try{return pr(p)}catch(i){try{return pr.call(null,p)}catch(a){return pr.call(this,p)}}}var ur=[],jr=!1,Ur,ot=-1;function Nl(){!jr||!Ur||(jr=!1,Ur.length?ur=Ur.concat(ur):ot=-1,ur.length&&Jo())}function Jo(){if(!jr){var p=Xo(Nl);jr=!0;for(var i=ur.length;i;){for(Ur=ur,ur=[];++ot<i;)Ur&&Ur[ot].run();ot=-1,i=ur.length}Ur=null,jr=!1,Ol(p)}}Te.nextTick=function(p){var i=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)i[a-1]=arguments[a];ur.push(new Ko(p,i)),ur.length===1&&!jr&&Xo(Jo)};function Ko(p,i){this.fun=p,this.array=i}Ko.prototype.run=function(){this.fun.apply(null,this.array)};Te.title="browser";Te.browser=!0;Te.env={};Te.argv=[];Te.version="";Te.versions={};function sr(){}Te.on=sr;Te.addListener=sr;Te.once=sr;Te.off=sr;Te.removeListener=sr;Te.removeAllListeners=sr;Te.emit=sr;Te.prependListener=sr;Te.prependOnceListener=sr;Te.listeners=function(p){return[]};Te.binding=function(p){throw new Error("process.binding is not supported")};Te.cwd=function(){return"/"};Te.chdir=function(p){throw new Error("process.chdir is not supported")};Te.umask=function(){return 0}});var We,Ye,dg,ye=tl(()=>{We=er(Zo()),Ye=er(en()),dg=function(p){function i(){var u=this||self;return delete p.prototype.__magic__,u}if(typeof globalThis=="object")return globalThis;if(this)return i();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:i});var a=__magic__;return a}(Object)});var Bn=He((Vv,An)=>{"use strict";ye();var Rl=Object.create,Gr=Object.defineProperty,Ml=Object.defineProperties,Pl=Object.getOwnPropertyDescriptor,Dl=Object.getOwnPropertyDescriptors,Fl=Object.getOwnPropertyNames,rn=Object.getOwnPropertySymbols,jl=Object.getPrototypeOf,mn=Object.prototype.hasOwnProperty,zl=Object.prototype.propertyIsEnumerable,tn=(p,i,a)=>i in p?Gr(p,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):p[i]=a,mr=(p,i)=>{for(var a in i||(i={}))mn.call(i,a)&&tn(p,a,i[a]);if(rn)for(var a of rn(i))zl.call(i,a)&&tn(p,a,i[a]);return p},gr=(p,i)=>Ml(p,Dl(i)),_n=(p,i)=>()=>(p&&(i=p(p=0)),i),ct=(p,i)=>()=>(i||p((i={exports:{}}).exports,i),i.exports),hn=(p,i)=>{for(var a in i)Gr(p,a,{get:i[a],enumerable:!0})},gn=(p,i,a,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of Fl(i))!mn.call(p,s)&&s!==a&&Gr(p,s,{get:()=>i[s],enumerable:!(u=Pl(i,s))||u.enumerable});return p},X=(p,i,a)=>(a=p!=null?Rl(jl(p)):{},gn(i||!p||!p.__esModule?Gr(a,"default",{value:p,enumerable:!0}):a,p)),vn=p=>gn(Gr({},"__esModule",{value:!0}),p),Gl=ct(p=>{"use strict";C(),p.byteLength=w,p.toByteArray=q,p.fromByteArray=B;var i=[],a=[],u=typeof Uint8Array!="undefined"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,d=s.length;_<d;++_)i[_]=s[_],a[s.charCodeAt(_)]=_;var _,d;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63;function n(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=f.indexOf("=");v===-1&&(v=g);var h=v===g?0:4-v%4;return[v,h]}function w(f){var g=n(f),v=g[0],h=g[1];return(v+h)*3/4-h}function y(f,g,v){return(g+v)*3/4-v}function q(f){var g,v=n(f),h=v[0],S=v[1],x=new u(y(f,h,S)),N=0,P=S>0?h-4:h,O;for(O=0;O<P;O+=4)g=a[f.charCodeAt(O)]<<18|a[f.charCodeAt(O+1)]<<12|a[f.charCodeAt(O+2)]<<6|a[f.charCodeAt(O+3)],x[N++]=g>>16&255,x[N++]=g>>8&255,x[N++]=g&255;return S===2&&(g=a[f.charCodeAt(O)]<<2|a[f.charCodeAt(O+1)]>>4,x[N++]=g&255),S===1&&(g=a[f.charCodeAt(O)]<<10|a[f.charCodeAt(O+1)]<<4|a[f.charCodeAt(O+2)]>>2,x[N++]=g>>8&255,x[N++]=g&255),x}function b(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function E(f,g,v){for(var h,S=[],x=g;x<v;x+=3)h=(f[x]<<16&16711680)+(f[x+1]<<8&65280)+(f[x+2]&255),S.push(b(h));return S.join("")}function B(f){for(var g,v=f.length,h=v%3,S=[],x=16383,N=0,P=v-h;N<P;N+=x)S.push(E(f,N,N+x>P?P:N+x));return h===1?(g=f[v-1],S.push(i[g>>2]+i[g<<4&63]+"==")):h===2&&(g=(f[v-2]<<8)+f[v-1],S.push(i[g>>10]+i[g>>4&63]+i[g<<2&63]+"=")),S.join("")}}),Vl=ct(p=>{C(),p.read=function(i,a,u,s,_){var d,n,w=_*8-s-1,y=(1<<w)-1,q=y>>1,b=-7,E=u?_-1:0,B=u?-1:1,f=i[a+E];for(E+=B,d=f&(1<<-b)-1,f>>=-b,b+=w;b>0;d=d*256+i[a+E],E+=B,b-=8);for(n=d&(1<<-b)-1,d>>=-b,b+=s;b>0;n=n*256+i[a+E],E+=B,b-=8);if(d===0)d=1-q;else{if(d===y)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,s),d=d-q}return(f?-1:1)*n*Math.pow(2,d-s)},p.write=function(i,a,u,s,_,d){var n,w,y,q=d*8-_-1,b=(1<<q)-1,E=b>>1,B=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=s?0:d-1,g=s?1:-1,v=a<0||a===0&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(w=isNaN(a)?1:0,n=b):(n=Math.floor(Math.log(a)/Math.LN2),a*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+E>=1?a+=B/y:a+=B*Math.pow(2,1-E),a*y>=2&&(n++,y/=2),n+E>=b?(w=0,n=b):n+E>=1?(w=(a*y-1)*Math.pow(2,_),n=n+E):(w=a*Math.pow(2,E-1)*Math.pow(2,_),n=0));_>=8;i[u+f]=w&255,f+=g,w/=256,_-=8);for(n=n<<_|w,q+=_;q>0;i[u+f]=n&255,f+=g,n/=256,q-=8);i[u+f-g]|=v*128}}),Wl=ct(p=>{"use strict";C();var i=Gl(),a=Vl(),u=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=n,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var s=2147483647;p.kMaxLength=s,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function d(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return w(e,r,t)}n.poolSize=8192;function w(e,r,t){if(typeof e=="string")return E(e,r);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var l=v(e);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return w(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function q(e,r,t){return y(e),e<=0?d(e):r!==void 0?typeof t=="string"?d(e).fill(r,t):d(e).fill(r):d(e)}n.alloc=function(e,r,t){return q(e,r,t)};function b(e){return y(e),d(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return b(e)},n.allocUnsafeSlow=function(e){return b(e)};function E(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=x(e,r)|0,o=d(t),l=o.write(e,r);return l!==t&&(o=o.slice(0,l)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=d(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function f(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function v(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=d(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?d(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,l=0,c=Math.min(t,o);l<c;++l)if(e[l]!==r[l]){t=e[l],o=r[l];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),l=0;for(t=0;t<e.length;++t){var c=e[t];if(H(c,Uint8Array))l+c.length>o.length?n.from(c).copy(o,l):Uint8Array.prototype.set.call(o,c,l);else if(n.isBuffer(c))c.copy(o,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=c.length}return o};function x(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var l=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return qe(e).length;default:if(l)return o?-1:fe(e).length;r=(""+r).toLowerCase(),l=!0}}n.byteLength=x;function N(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return xe(this,r,t);case"latin1":case"binary":return Be(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function P(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)P(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)P(this,r,r+3),P(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)P(this,r,r+7),P(this,r+1,r+6),P(this,r+2,r+5),P(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):N.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},u&&(n.prototype[u]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,l){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),l===void 0&&(l=this.length),r<0||t>e.length||o<0||l>this.length)throw new RangeError("out of range index");if(o>=l&&r>=t)return 0;if(o>=l)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,l>>>=0,this===e)return 0;for(var c=l-o,m=t-r,k=Math.min(c,m),L=this.slice(o,l),A=e.slice(r,t),T=0;T<k;++T)if(L[T]!==A[T]){c=L[T],m=A[T];break}return c<m?-1:m<c?1:0};function O(e,r,t,o,l){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=l?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(l)return-1;t=e.length-1}else if(t<0)if(l)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,l);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,l);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,l){var c=1,m=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;c=2,m/=2,k/=2,t/=2}function L(Se,ke){return c===1?Se[ke]:Se.readUInt16BE(ke*c)}var A;if(l){var T=-1;for(A=t;A<m;A++)if(L(e,A)===L(r,T===-1?0:A-T)){if(T===-1&&(T=A),A-T+1===k)return T*c}else T!==-1&&(A-=A-T),T=-1}else for(t+k>m&&(t=m-k),A=t;A>=0;A--){for(var R=!0,ce=0;ce<k;ce++)if(L(e,A+ce)!==L(r,ce)){R=!1;break}if(R)return A}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return O(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return O(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var l=e.length-t;o?(o=Number(o),o>l&&(o=l)):o=l;var c=r.length;o>c/2&&(o=c/2);for(var m=0;m<o;++m){var k=parseInt(r.substr(m*2,2),16);if(me(k))return m;e[t+m]=k}return m}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Re(r),e,t,o)}function ve(e,r,t,o){return pe(qe(r),e,t,o)}function be(e,r,t,o){return pe(Me(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-r;if((t===void 0||t>l)&&(t=l),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var c=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return ve(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return be(this,e,r,t);default:if(c)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),c=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],l=r;l<t;){var c=e[l],m=null,k=c>239?4:c>223?3:c>191?2:1;if(l+k<=t){var L,A,T,R;switch(k){case 1:c<128&&(m=c);break;case 2:L=e[l+1],(L&192)===128&&(R=(c&31)<<6|L&63,R>127&&(m=R));break;case 3:L=e[l+1],A=e[l+2],(L&192)===128&&(A&192)===128&&(R=(c&15)<<12|(L&63)<<6|A&63,R>2047&&(R<55296||R>57343)&&(m=R));break;case 4:L=e[l+1],A=e[l+2],T=e[l+3],(L&192)===128&&(A&192)===128&&(T&192)===128&&(R=(c&15)<<18|(L&63)<<12|(A&63)<<6|T&63,R>65535&&R<1114112&&(m=R))}}m===null?(m=65533,k=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),l+=k}return Ee(o)}var ae=4096;function Ee(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function xe(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]&127);return o}function Be(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var l="",c=r;c<t;++c)l+=Pe[e[c]];return l}function Ae(e,r,t){for(var o=e.slice(r,t),l="",c=0;c<o.length-1;c+=2)l+=String.fromCharCode(o[c]+o[c+1]*256);return l}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function I(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e+--r],l=1;r>0&&(l*=256);)o+=this[e+--r]*l;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return l*=128,o>=l&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=r,l=1,c=this[e+--o];o>0&&(l*=256);)c+=this[e+--o]*l;return l*=128,c>=l&&(c-=Math.pow(2,8*r)),c},n.prototype.readInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!1,52,8)};function D(e,r,t,o,l,c){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>l||r<c)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=1,m=0;for(this[r]=e&255;++m<t&&(c*=256);)this[r+m]=e/c&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=t-1,m=1;for(this[r+c]=e&255;--c>=0&&(m*=256);)this[r+c]=e/m&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=0,m=1,k=0;for(this[r]=e&255;++c<t&&(m*=256);)e<0&&k===0&&this[r+c-1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=t-1,m=1,k=0;for(this[r+c]=e&255;--c>=0&&(m*=256);)e<0&&k===0&&this[r+c+1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,l,c){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function we(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),a.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return we(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return we(this,e,r,!1,t)};function se(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),a.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var l=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),l},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var l=e.charCodeAt(0);(o==="utf8"&&l<128||o==="latin1")&&(e=l)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var c;if(typeof e=="number")for(c=r;c<t;++c)this[c]=e;else{var m=n.isBuffer(e)?e:n.from(e,o),k=m.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<t-r;++c)this[c+r]=m[c%k]}return this};var Oe=/[^+/0-9A-Za-z-_]/g;function Ne(e){if(e=e.split("=")[0],e=e.trim().replace(Oe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,l=null,c=[],m=0;m<o;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!l){if(t>56319){(r-=3)>-1&&c.push(239,191,189);continue}else if(m+1===o){(r-=3)>-1&&c.push(239,191,189);continue}l=t;continue}if(t<56320){(r-=3)>-1&&c.push(239,191,189),l=t;continue}t=(l-55296<<10|t-56320)+65536}else l&&(r-=3)>-1&&c.push(239,191,189);if(l=null,t<128){if((r-=1)<0)break;c.push(t)}else if(t<2048){if((r-=2)<0)break;c.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;c.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;c.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return c}function Re(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Me(e,r){for(var t,o,l,c=[],m=0;m<e.length&&!((r-=2)<0);++m)t=e.charCodeAt(m),o=t>>8,l=t%256,c.push(l),c.push(o);return c}function qe(e){return i.toByteArray(Ne(e))}function pe(e,r,t,o){for(var l=0;l<o&&!(l+t>=r.length||l>=e.length);++l)r[l+t]=e[l];return l}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Pe=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,l=0;l<16;++l)r[o+l]=e[t]+e[l];return r}()}),Yl=ct((p,i)=>{C();var a=i.exports={},u,s;function _(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?u=setTimeout:u=_}catch(h){u=_}try{typeof clearTimeout=="function"?s=clearTimeout:s=d}catch(h){s=d}})();function n(h){if(u===setTimeout)return setTimeout(h,0);if((u===_||!u)&&setTimeout)return u=setTimeout,setTimeout(h,0);try{return u(h,0)}catch(S){try{return u.call(null,h,0)}catch(x){return u.call(this,h,0)}}}function w(h){if(s===clearTimeout)return clearTimeout(h);if((s===d||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(h);try{return s(h)}catch(S){try{return s.call(null,h)}catch(x){return s.call(this,h)}}}var y=[],q=!1,b,E=-1;function B(){!q||!b||(q=!1,b.length?y=b.concat(y):E=-1,y.length&&f())}function f(){if(!q){var h=n(B);q=!0;for(var S=y.length;S;){for(b=y,y=[];++E<S;)b&&b[E].run();E=-1,S=y.length}b=null,q=!1,w(h)}}a.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)S[x-1]=arguments[x];y.push(new g(h,S)),y.length===1&&!q&&n(f)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={};function v(){}a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(h){return[]},a.binding=function(h){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(h){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}),$l,Hl,Zl,C=_n(()=>{$l=X(Wl()),Hl=X(Yl()),Zl=function(p){function i(){var u=this||self;return delete p.prototype.__magic__,u}if(typeof globalThis=="object")return globalThis;if(this)return i();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:i});var a=__magic__;return a}(Object)}),bn={};hn(bn,{default:()=>yn});var nt,on,yn,Xl=_n(()=>{"use strict";C(),nt=X(require("react")),on=p=>nt.createElement("svg",mr({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},p),nt.createElement("g",null,nt.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),yn=on}),wn={};hn(wn,{Receiver:()=>uc});An.exports=vn(wn);C();C();var Ce=X(require("react")),nn=require("@fortawesome/free-solid-svg-icons"),an=require("@fortawesome/react-fontawesome"),Yt=X(require("classnames")),Jl=require("formik"),Kl=X(require("react-select"));C();var Ql=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ql));var at={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};C();C();C();var En=X(require("react")),mg=require("formik");C();C();var xn=X(require("react")),_g=require("formik");C();C();var ep=X(require("react")),hg=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),gg=require("formik");C();C();C();var vg=require("@terradharitri/sdk-dapp/types/tokens.types");C();C();C();C();C();var bg=require("@terradharitri/sdk-dapp/constants/index"),yg=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),wg=X(require("bignumber.js"));C();C();C();var Eg=require("bech32");C();C();C();var rp=(p,i)=>typeof i=="boolean"?i:Array.isArray(i)&&i.includes(p);C();C();C();var xg=require("@terradharitri/sdk-dapp/constants"),qg=require("@terradharitri/sdk-dapp/utils/account/getAccount");C();C();var Sg=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");C();var kg=require("@terradharitri/sdk-dapp/utils/buildUrlParams");C();var Ag=X(require("anchorme"));C();C();var Bg=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),tp=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Ig=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Tg=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");C();C();var Ug=require("@terradharitri/sdk-dapp/constants/index");C();var Cg=require("@terradharitri/sdk-dapp/constants/index");C();C();C();var Lg=require("@terradharitri/sdk-dapp/constants/index"),Og=X(require("bignumber.js"));C();var Ng=require("@terradharitri/sdk-dapp/constants/index");C();var Rg=require("@terradharitri/sdk-dapp/constants/index");C();C();var Mg=require("@terradharitri/sdk-core"),Pg=require("@terradharitri/sdk-dapp/constants/index"),Dg=X(require("bignumber.js"));C();C();var Fg=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");C();var jg=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");C();var zg=X(require("bignumber.js"));C();var Gg=require("@terradharitri/sdk-dapp/constants/index"),Vg=require("@terradharitri/sdk-dapp/utils/smartContracts"),Wg=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Yg=X(require("bignumber.js"));C();var $g=X(require("bignumber.js"));C();C();var Hg=X(require("axios"));C();C();C();var Zg=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");C();var Xg=require("@terradharitri/sdk-dapp/constants/index");C();C();C();var $t=require("@terradharitri/sdk-dapp/constants/index"),op=X(require("bignumber.js")),ln,pn,cn,np=(0,tp.formatAmount)({input:String((ln=$t.GAS_PRICE)!=null?ln:1e9),decimals:(pn=$t.DECIMALS)!=null?pn:18,showLastNonZeroDecimal:!0,digits:(cn=$t.DIGITS)!=null?cn:4}),Jg=new op.default(np).times(10).toString(10);C();var Kg=require("@terradharitri/sdk-dapp/constants/index"),Qg=X(require("bignumber.js"));C();var e0=X(require("bignumber.js"));C();C();var r0=require("yup");C();var un=require("@terradharitri/sdk-dapp/constants/ledger.constants"),ap=X(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Xt=require("yup"),ip=(0,Xt.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(p){let{ledger:i}=this.parent;return!(i&&p&&p.length&&!i.ledgerDataActive)}),lp=(0,Xt.string)().test({name:"hashSign",test:function(p){let{ledger:i,isGuarded:a}=this.parent;if(i){let{ledgerWithHashSign:u,ledgerWithGuardians:s}=(0,ap.default)(i.version);if(p&&p.length>300&&!u)return this.createError({message:`Data too long. You need at least DharitrI app version ${un.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(a&&!s)return this.createError({message:`You need at least DharitrI app version ${un.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),pp=[ip,lp],t0=pp.reduce((p,i)=>p.concat(i),(0,Xt.string)());C();var o0=require("@terradharitri/sdk-dapp/constants/index"),n0=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),a0=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),i0=require("yup");C();var l0=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),p0=X(require("bignumber.js")),c0=require("yup");C();var u0=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),s0=X(require("bignumber.js")),d0=require("yup");C();var f0=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),m0=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),_0=X(require("bignumber.js")),h0=require("yup");C();var g0=X(require("bignumber.js")),v0=require("yup");C();var b0=require("@terradharitri/sdk-dapp/constants/index"),y0=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),w0=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),E0=X(require("bignumber.js")),x0=require("yup");C();var q0=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),S0=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),k0=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),A0=X(require("bignumber.js")),B0=require("yup");C();var I0=X(require("bignumber.js")),T0=require("yup");C();var U0=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),C0=require("yup");C();var L0=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),O0=require("yup");C();C();var N0=(0,ep.createContext)({});C();C();C();var R0=require("react"),M0=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),P0=X(require("lodash/uniqBy"));C();C();C();var D0=X(require("axios"));C();C();var F0=X(require("axios"));C();C();var j0=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),z0=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),G0=X(require("axios")),V0=X(require("lodash/uniqBy"));C();var W0=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Y0=X(require("axios"));C();var $0=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),H0=X(require("axios"));C();var cp=X(require("react")),Z0=(0,cp.createContext)({});C();C();var X0=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),J0=require("@terradharitri/sdk-dapp/utils");C();var K0=require("react");C();var Q0=require("react"),ev=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),up=(0,xn.createContext)({});function sp(){return(0,xn.useContext)(up)}C();var rv=require("react");C();C();var dp=({knownAddresses:p,inputValue:i,key:a})=>!p||!i?!1:p.some(u=>{var s;return Boolean((s=u[a])==null?void 0:s.startsWith(i))});C();C();C();var tv=require("react"),ov=require("@terradharitri/sdk-dapp/utils");C();var nv=require("react"),av=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");C();C();var iv=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),lv=X(require("axios"));C();var pv=X(require("axios")),fp=(0,En.createContext)({});function qn(){return(0,En.useContext)(fp)}C();var Sn=X(require("react"));C();C();var mp=X(require("react")),cv=require("@terradharitri/sdk-dapp/constants/index"),uv=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),sv=X(require("bignumber.js")),dv=require("formik");C();C();var _p=X(require("react")),fv=require("formik"),mv=X(require("lodash/uniqBy"));C();C();var hp=X(require("react")),_v=(0,hp.createContext)({});C();C();var hv=require("react"),gv=require("@terradharitri/sdk-dapp/constants/index"),vv=require("@terradharitri/sdk-dapp/types/enums.types");C();var bv=(0,_p.createContext)({});C();C();var yv=require("@terradharitri/sdk-dapp/constants/index"),wv=require("formik");C();C();var gp=X(require("react")),Ev=require("@terradharitri/sdk-dapp/constants/index"),xv=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),qv=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Sv=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),kv=X(require("bignumber.js")),Av=require("formik");C();C();C();C();var Bv=X(require("bignumber.js"));C();var Iv=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Tv=X(require("bignumber.js"));C();C();var Uv=require("react"),Cv=require("@terradharitri/sdk-dapp/constants/index"),Lv=require("@terradharitri/sdk-dapp/utils/smartContracts"),Ov=X(require("bignumber.js")),Nv=require("formik");C();C();var Rv=require("@terradharitri/sdk-dapp/constants/index"),Mv=X(require("bignumber.js")),Pv=(0,gp.createContext)({}),Dv=(0,mp.createContext)({});C();C();var vp=X(require("react")),Fv=require("formik"),jv=(0,vp.createContext)({}),bp=(0,Sn.createContext)({});function ut(){return(0,Sn.useContext)(bp)}C();C();var yp=X(require("react")),wp=require("react-select");C();var Ep=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ep));var le={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"},xp=p=>yp.default.createElement(wp.components.Control,gr(mr({},p),{className:le.receiverSelectControl}));C();C();var Ht=X(require("react")),qp=require("@fortawesome/free-solid-svg-icons"),Sp=require("@fortawesome/react-fontawesome"),kp=X(require("classnames")),Ap=require("react-select");C();C();var Jt=(p,i)=>{let a=i.toLowerCase(),u=p.label.toLowerCase(),s=p.value.toLowerCase();return i?u.includes(a)||s.includes(a):!0};C();var Bp=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Ip=require("@terradharitri/sdk-dapp/utils"),sn=p=>p?p.filter(i=>(0,Ip.addressIsValid)(i.address)).map(i=>{let a=i.username?String((0,Bp.trimUsernameDomain)(i.username)):i.address;return{value:i.address,label:a}}):[];C();var Tp=({setOption:p,setAllValues:i})=>(a,u)=>{["input-blur","menu-close"].includes(u.action)||(i(a),a||p(null))};C();var Up=({setInputValue:p,setOption:i,changeAndBlurInput:a})=>u=>{!u||(i(u),a(u.value),u.value!==u.label?p(u.label):p(u.value))};C();var Cp=({options:p,usernameAccounts:i,knownAddresses:a,setFieldValue:u,setInputValue:s,setOption:_})=>d=>{var n,w,y,q;let b=p.find(S=>S.value===d&&S.value!==S.label),E=b==null?void 0:b.label,B,f,g=(n=i[d])==null?void 0:n.username;g&&(E=g,B=g,f=(w=i[d])==null?void 0:w.rawUsername);let v=a.find(S=>S.address===d);v!=null&&v.username&&(E=v==null?void 0:v.username,B=v==null?void 0:v.username,f=v==null?void 0:v.rawUsername);let h=E!=null?E:d;s(h),_({value:d,label:h}),u("receiver",(q=(y=i[d])==null?void 0:y.address)!=null?q:d),u("receiverUsername",B),u("rawReceiverUsername",f)},Lp=p=>{let{selectProps:i,isDisabled:a,options:u}=p,{menuIsOpen:s,value:_,isLoading:d}=i,n=(0,Ht.useMemo)(()=>u.find(b=>{let E=b,B=_;return B?Jt(E,B.label):null}),[_,u]),w=u.length===0&&!d,y=Boolean(_)&&!n,q=a||w||y;return d?Ht.default.createElement(Sp.FontAwesomeIcon,{icon:qp.faSpinner,spin:!0,className:le.receiverSelectSpinner}):Ht.default.createElement(Ap.components.DropdownIndicator,gr(mr({},p),{className:(0,kp.default)(le.receiverSelectIndicator,{[le.expanded]:s,[le.hidden]:q})}))};C();C();var Op=X(require("react")),Np=require("@terradharitri/sdk-dapp/utils"),Rp=X(require("classnames")),Mp=require("react-select");C();var zv=X(require("react")),Gv=require("@terradharitri/sdk-dapp/constants/index");C();C();var Pp=(p,i)=>{let a=p.current;if(!a||!a.state.focusedOption)return!1;let u=a.state.focusedOption,s=u.label.toLowerCase(),_=u.value.toLowerCase(),d=s!==_,n=d&&s.startsWith(i.toLowerCase());return d&&!i?!0:n},Dp=p=>i=>{let{selectProps:a,value:u}=i,{inputValue:s,menuIsOpen:_}=a,{receiverUsernameInfo:{receiverUsername:d}}=ut(),n=Pp(p,s),w=(0,Np.addressIsValid)(String(u)),y=Boolean(d)||n,q=w&&_||!w&&s;return Op.default.createElement(Mp.components.Input,gr(mr({},i),{"data-testid":"receiver",className:(0,Rp.default)(le.receiverSelectInput,{[le.visible]:q,[le.spaced]:y})}))};C();C();var Fp=X(require("react")),jp=require("react-select"),zp=p=>Fp.default.createElement(jp.components.Menu,gr(mr({},p),{className:le.receiverSelectMenu}));C();C();var je=X(require("react")),Zt=require("@terradharitri/sdk-dapp/UI/Trim"),it=X(require("classnames")),Gp=require("react-select");C();var{default:pt}=(Xl(),vn(bn)),Vp=p=>{let{selectProps:i,focusedOption:a}=p,{value:u,inputValue:s}=i,_=a,d=_?_.label.toLowerCase():null,n=_&&_.label!==_.value,w=(d&&(!u||u&&s)?d.startsWith(s.toLowerCase()):!1)&&_?_.label.replace(_.label.substring(0,s.length),s):null,y=w&&!s,q=w&&s.length<w.length/2,b=w&&Boolean(s)&&q,E=w&&Boolean(s);return je.default.createElement(je.default.Fragment,null,b&&!n&&je.default.createElement("div",{className:(0,it.default)(le.receiverSelectAutocomplete,le.receiverSelectAutocompleteUntrimmed)},w),E&&n&&je.default.createElement("div",{className:(0,it.default)(le.receiverSelectAutocomplete,le.receiverSelectAutocompleteUsername)},je.default.createElement(pt,{className:le.receiverSelectAutocompleteIcon}),w,je.default.createElement("span",{className:le.receiverSelectAutocompleteWrapper},"(",je.default.createElement(Zt.Trim,{text:_.value}),")")),y&&je.default.createElement("span",{className:(0,it.default)(le.receiverSelectAutocomplete,{[le.receiverSelectAutocompleteUsername]:n})},n?je.default.createElement(je.default.Fragment,null,je.default.createElement("span",null,je.default.createElement(pt,{className:(0,it.default)(le.receiverSelectAutocompleteIcon,le.receiverSelectAutocompleteIconMuted)}),_.label),je.default.createElement("span",{className:le.receiverSelectAutocompleteWrapper},"(",je.default.createElement(Zt.Trim,{text:_.value}),")")):je.default.createElement(Zt.Trim,{text:w})),je.default.createElement(Gp.components.MenuList,gr(mr({},p),{className:le.receiverSelectList})))};C();C();var dr=X(require("react")),dn=require("@terradharitri/sdk-dapp/UI/Trim"),Wp=X(require("classnames")),Yp=require("react-select");C();C();var lt=X(require("react"));C();var $p=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($p));var Hp={highlight:"dapp-core-component__styles-modules__highlight"},Zp=({highlight:p,text:i=""})=>{let a=i.split(" "),u=p.toLowerCase(),s=new RegExp(`(${u})`,"gi"),_=a.map(d=>d.split(s).filter(n=>n));return lt.default.createElement("span",{className:Hp.highlight},_.map((d,n)=>{let w=`${d}-${n}`;return lt.default.createElement("span",{key:w},d.map((y,q)=>{let b=y.toLowerCase()===u,E=u&&b,B=`${y}-${q}`;return E?lt.default.createElement("strong",{key:B},y):lt.default.createElement("span",{key:B},y)}))}))},Xp=p=>{let{isFocused:i,data:a,selectProps:u}=p,{inputValue:s}=u,_=a,d=_.value!==_.label;return dr.default.createElement(Yp.components.Option,gr(mr({},p),{className:(0,Wp.default)(le.receiverSelectOption,{[le.focused]:i})}),d?dr.default.createElement(dr.default.Fragment,null,dr.default.createElement("span",{className:le.receiverSelectOptionUsername},dr.default.createElement(pt,{className:le.receiverSelectOptionUsernameIcon}),dr.default.createElement(Zp,{text:_.label,highlight:s})),dr.default.createElement("span",{className:le.receiverSelectOptionNameWrapper},"(",dr.default.createElement(dn.Trim,{text:_.value,className:le.receiverSelectOptionName}),")")):dr.default.createElement(dn.Trim,{text:_.value,className:le.receiverSelectOptionName}))};C();C();var Jp=X(require("react")),Kp=X(require("classnames")),Qp=require("react-select"),ec=p=>{let{selectProps:i,isFocused:a,className:u}=p,{menuIsOpen:s}=i;return Jp.default.createElement(Qp.components.SelectContainer,gr(mr({},p),{className:(0,Kp.default)(u,{[le.expanded]:s,[le.focused]:a&&s})}))};C();C();var fr=X(require("react")),fn=require("@terradharitri/sdk-dapp/UI/Trim"),rc=require("@terradharitri/sdk-dapp/utils"),tc=X(require("classnames")),oc=require("react-select"),nc=p=>{let{selectProps:i,isDisabled:a}=p,{value:u,menuIsOpen:s}=i,_=u,{receiverInfo:{receiver:d},receiverUsernameInfo:{receiverUsername:n}}=ut(),w=n!=null?n:_&&_.value!==_.label,y=_?{value:d!=null?d:_.value,label:_.label}:null,q=y&&(w||!w&&!s)&&(0,rc.addressIsValid)(y.value);return fr.default.createElement(oc.components.ValueContainer,gr(mr({},p),{className:le.receiverSelectValue}),q&&fr.default.createElement("span",{className:(0,tc.default)(le.receiverSelectSingle,{[le.disabled]:a})},w?fr.default.createElement(fr.default.Fragment,null,fr.default.createElement("span",{className:le.receiverSelectSingleUsername},fr.default.createElement(pt,{className:le.receiverSelectSingleUsernameIcon}),y.label),fr.default.createElement("span",{className:le.receiverSelectSingleTrimWrapper},"(",fr.default.createElement(fn.Trim,{text:y.value,className:le.receiverSelectSingleTrim}),")")):fr.default.createElement(fn.Trim,{text:y.value,className:le.receiverSelectSingleTrim})),p.children)};C();C();var ac=require("formik"),kn=()=>{let{receiverInfo:{receiverError:p,isReceiverInvalid:i},receiverUsernameInfo:{receiverUsernameError:a,isReceiverUsernameInvalid:u,receiverUsername:s}}=ut(),{touched:{receiver:_}}=(0,ac.useFormikContext)(),d=i&&_||u;return s!=null&&s.startsWith("drt1")?{isInvalid:i,receiverErrorDataTestId:"receiverError",error:p}:{isInvalid:d,receiverErrorDataTestId:u?"receiverUsernameError":"receiverError",error:u?a:p}};C();C();var ic=require("@terradharitri/sdk-dapp/utils"),lc=require("formik");C();C();var pc=({knownAddresses:p,inputValue:i})=>!p||!i?!1:p.filter(a=>{var u;let s=(u=a.username)!=null?u:a.address,_=a.address;return Jt({label:s,value:_,data:{label:s,value:_}},i)}).length>0,cc=({menuIsOpen:p})=>{let{isInvalid:i}=kn(),{values:{nft:a}}=(0,lc.useFormikContext)(),{showUsernameError:u,isUsernameLoading:s,isUsernameDebouncing:_,usernameIsAmongKnown:d,searchQueryIsAddress:n}=qn(),{receiverInputValue:w,knownAddresses:y}=sp(),q=dp({key:"address",knownAddresses:y,inputValue:w}),b=pc({inputValue:w,knownAddresses:y}),E=n&&(!q||!p)&&!(0,ic.addressIsValid)(w),B=Boolean(u&&!(p&&q)&&!(p&&d));return{isAddressError:E||(a?i:!1),isUsernameError:B,isRequiredError:i&&!B&&!s&&!_&&!E&&!b&&!w,isReceiverDropdownOpened:w&&b&&p}},uc=p=>{let i=(0,Ce.useRef)(null),{className:a}=p,{setFieldValue:u}=(0,Jl.useFormikContext)(),{receiverInfo:{scamError:s,fetchingScamAddress:_,receiverInputValue:d,setReceiverInputValue:n,knownAddresses:w,receiver:y,onBlurReceiver:q,onChangeReceiver:b},receiverUsernameInfo:{receiverUsername:E},formInfo:{readonly:B}}=ut(),[f,g]=(0,Ce.useState)(!1),[v,h]=(0,Ce.useState)(y?{label:y,value:y}:null),{receiverErrorDataTestId:S,error:x}=kn(),{isAddressError:N,isUsernameError:P,isRequiredError:O,isReceiverDropdownOpened:ne}=cc({menuIsOpen:f}),{usernameAccounts:_e,isUsernameLoading:he}=qn(),de=()=>{q(new Event("blur"));let I=w==null?void 0:w.find(D=>D.username===d&&D.address===y);I&&(u("receiver",I.address),u("receiverUsername",I.username),u("rawReceiverUsername",I.rawUsername))},ve=w==null?void 0:w.find(I=>I.username===d&&I.address===y),be=(0,Ce.useMemo)(()=>sn(w),[w]),ie=ve?sn([ve]):be,re=Cp({setFieldValue:u,setInputValue:n,setOption:h,options:ie,knownAddresses:w!=null?w:[],usernameAccounts:_e}),ae=(0,Ce.useCallback)(Tp({setAllValues:re,setOption:h}),[]),Ee=(0,Ce.useCallback)(I=>{b(I?I.trim():""),setTimeout(de)},[]),xe=Up({changeAndBlurInput:Ee,setOption:h,setInputValue:n}),Be=(0,Ce.useMemo)(()=>Dp(i),[i]);(0,Ce.useEffect)(()=>{if(!y)return;let I=Object.keys(_e).find(D=>{var ge;return((ge=_e[D])==null?void 0:ge.address)===y});re(I!=null?I:y),I&&n(I)},[_e,y]);let Ie=N||P||O,Ae=Ie&&!f;return Ce.default.createElement("div",{className:(0,Yt.default)(le.receiver,a)},Ce.default.createElement("div",{className:at.label,"data-testid":"receiverLabel","data-loading":_},"Receiver"),Ce.default.createElement(Kl.default,{value:v,onInputChange:ae,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:rp("receiver",B),options:ie,filterOption:Jt,noOptionsMessage:()=>null,onChange:xe,onBlur:de,isMulti:!1,ref:i,inputValue:d,onMenuClose:()=>g(!1),onMenuOpen:()=>g(!0),components:{Menu:zp,Input:Be,Control:xp,ValueContainer:nc,DropdownIndicator:Lp,SelectContainer:ec,MenuList:Vp,Option:Xp,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,Yt.default)(le.receiverSelectContainer,{[le.opened]:ne,[le.invalid]:Ie||s})}),Ae&&Ce.default.createElement("div",{"data-testid":S,className:at.error},x),he&&Ce.default.createElement("div",{className:le.loading},"Loading..."),E&&Ce.default.createElement("span",{className:le.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",Ce.default.createElement(an.FontAwesomeIcon,{icon:nn.faCheck,className:le.foundIcon})),s&&Ce.default.createElement("div",{"data-testid":"receiverScam",className:(0,Yt.default)(at.error,at.scam)},Ce.default.createElement("span",null,Ce.default.createElement(an.FontAwesomeIcon,{icon:nn.faExclamationTriangle}),Ce.default.createElement("small",null,s))))};});var Pn=He((x1,Mn)=>{"use strict";ye();var sc=Object.create,st=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,fc=Object.getOwnPropertyNames,mc=Object.getPrototypeOf,_c=Object.prototype.hasOwnProperty,hc=(p,i)=>()=>(p&&(i=p(p=0)),i),dt=(p,i)=>()=>(i||p((i={exports:{}}).exports,i),i.exports),gc=(p,i)=>{for(var a in i)st(p,a,{get:i[a],enumerable:!0})},On=(p,i,a,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of fc(i))!_c.call(p,s)&&s!==a&&st(p,s,{get:()=>i[s],enumerable:!(u=dc(i,s))||u.enumerable});return p},te=(p,i,a)=>(a=p!=null?sc(mc(p)):{},On(i||!p||!p.__esModule?st(a,"default",{value:p,enumerable:!0}):a,p)),vc=p=>On(st({},"__esModule",{value:!0}),p),bc=dt(p=>{"use strict";V(),p.byteLength=w,p.toByteArray=q,p.fromByteArray=B;var i=[],a=[],u=typeof Uint8Array!="undefined"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,d=s.length;_<d;++_)i[_]=s[_],a[s.charCodeAt(_)]=_;var _,d;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63;function n(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=f.indexOf("=");v===-1&&(v=g);var h=v===g?0:4-v%4;return[v,h]}function w(f){var g=n(f),v=g[0],h=g[1];return(v+h)*3/4-h}function y(f,g,v){return(g+v)*3/4-v}function q(f){var g,v=n(f),h=v[0],S=v[1],x=new u(y(f,h,S)),N=0,P=S>0?h-4:h,O;for(O=0;O<P;O+=4)g=a[f.charCodeAt(O)]<<18|a[f.charCodeAt(O+1)]<<12|a[f.charCodeAt(O+2)]<<6|a[f.charCodeAt(O+3)],x[N++]=g>>16&255,x[N++]=g>>8&255,x[N++]=g&255;return S===2&&(g=a[f.charCodeAt(O)]<<2|a[f.charCodeAt(O+1)]>>4,x[N++]=g&255),S===1&&(g=a[f.charCodeAt(O)]<<10|a[f.charCodeAt(O+1)]<<4|a[f.charCodeAt(O+2)]>>2,x[N++]=g>>8&255,x[N++]=g&255),x}function b(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function E(f,g,v){for(var h,S=[],x=g;x<v;x+=3)h=(f[x]<<16&16711680)+(f[x+1]<<8&65280)+(f[x+2]&255),S.push(b(h));return S.join("")}function B(f){for(var g,v=f.length,h=v%3,S=[],x=16383,N=0,P=v-h;N<P;N+=x)S.push(E(f,N,N+x>P?P:N+x));return h===1?(g=f[v-1],S.push(i[g>>2]+i[g<<4&63]+"==")):h===2&&(g=(f[v-2]<<8)+f[v-1],S.push(i[g>>10]+i[g>>4&63]+i[g<<2&63]+"=")),S.join("")}}),yc=dt(p=>{V(),p.read=function(i,a,u,s,_){var d,n,w=_*8-s-1,y=(1<<w)-1,q=y>>1,b=-7,E=u?_-1:0,B=u?-1:1,f=i[a+E];for(E+=B,d=f&(1<<-b)-1,f>>=-b,b+=w;b>0;d=d*256+i[a+E],E+=B,b-=8);for(n=d&(1<<-b)-1,d>>=-b,b+=s;b>0;n=n*256+i[a+E],E+=B,b-=8);if(d===0)d=1-q;else{if(d===y)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,s),d=d-q}return(f?-1:1)*n*Math.pow(2,d-s)},p.write=function(i,a,u,s,_,d){var n,w,y,q=d*8-_-1,b=(1<<q)-1,E=b>>1,B=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=s?0:d-1,g=s?1:-1,v=a<0||a===0&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(w=isNaN(a)?1:0,n=b):(n=Math.floor(Math.log(a)/Math.LN2),a*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+E>=1?a+=B/y:a+=B*Math.pow(2,1-E),a*y>=2&&(n++,y/=2),n+E>=b?(w=0,n=b):n+E>=1?(w=(a*y-1)*Math.pow(2,_),n=n+E):(w=a*Math.pow(2,E-1)*Math.pow(2,_),n=0));_>=8;i[u+f]=w&255,f+=g,w/=256,_-=8);for(n=n<<_|w,q+=_;q>0;i[u+f]=n&255,f+=g,n/=256,q-=8);i[u+f-g]|=v*128}}),wc=dt(p=>{"use strict";V();var i=bc(),a=yc(),u=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=n,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var s=2147483647;p.kMaxLength=s,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function d(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return w(e,r,t)}n.poolSize=8192;function w(e,r,t){if(typeof e=="string")return E(e,r);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var l=v(e);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return w(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function q(e,r,t){return y(e),e<=0?d(e):r!==void 0?typeof t=="string"?d(e).fill(r,t):d(e).fill(r):d(e)}n.alloc=function(e,r,t){return q(e,r,t)};function b(e){return y(e),d(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return b(e)},n.allocUnsafeSlow=function(e){return b(e)};function E(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=x(e,r)|0,o=d(t),l=o.write(e,r);return l!==t&&(o=o.slice(0,l)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=d(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function f(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function v(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=d(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?d(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,l=0,c=Math.min(t,o);l<c;++l)if(e[l]!==r[l]){t=e[l],o=r[l];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),l=0;for(t=0;t<e.length;++t){var c=e[t];if(H(c,Uint8Array))l+c.length>o.length?n.from(c).copy(o,l):Uint8Array.prototype.set.call(o,c,l);else if(n.isBuffer(c))c.copy(o,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=c.length}return o};function x(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var l=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return qe(e).length;default:if(l)return o?-1:fe(e).length;r=(""+r).toLowerCase(),l=!0}}n.byteLength=x;function N(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return xe(this,r,t);case"latin1":case"binary":return Be(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function P(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)P(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)P(this,r,r+3),P(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)P(this,r,r+7),P(this,r+1,r+6),P(this,r+2,r+5),P(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):N.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},u&&(n.prototype[u]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,l){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),l===void 0&&(l=this.length),r<0||t>e.length||o<0||l>this.length)throw new RangeError("out of range index");if(o>=l&&r>=t)return 0;if(o>=l)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,l>>>=0,this===e)return 0;for(var c=l-o,m=t-r,k=Math.min(c,m),L=this.slice(o,l),A=e.slice(r,t),T=0;T<k;++T)if(L[T]!==A[T]){c=L[T],m=A[T];break}return c<m?-1:m<c?1:0};function O(e,r,t,o,l){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=l?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(l)return-1;t=e.length-1}else if(t<0)if(l)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,l);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,l);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,l){var c=1,m=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;c=2,m/=2,k/=2,t/=2}function L(Se,ke){return c===1?Se[ke]:Se.readUInt16BE(ke*c)}var A;if(l){var T=-1;for(A=t;A<m;A++)if(L(e,A)===L(r,T===-1?0:A-T)){if(T===-1&&(T=A),A-T+1===k)return T*c}else T!==-1&&(A-=A-T),T=-1}else for(t+k>m&&(t=m-k),A=t;A>=0;A--){for(var R=!0,ce=0;ce<k;ce++)if(L(e,A+ce)!==L(r,ce)){R=!1;break}if(R)return A}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return O(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return O(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var l=e.length-t;o?(o=Number(o),o>l&&(o=l)):o=l;var c=r.length;o>c/2&&(o=c/2);for(var m=0;m<o;++m){var k=parseInt(r.substr(m*2,2),16);if(me(k))return m;e[t+m]=k}return m}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Re(r),e,t,o)}function ve(e,r,t,o){return pe(qe(r),e,t,o)}function be(e,r,t,o){return pe(Me(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-r;if((t===void 0||t>l)&&(t=l),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var c=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return ve(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return be(this,e,r,t);default:if(c)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),c=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],l=r;l<t;){var c=e[l],m=null,k=c>239?4:c>223?3:c>191?2:1;if(l+k<=t){var L,A,T,R;switch(k){case 1:c<128&&(m=c);break;case 2:L=e[l+1],(L&192)===128&&(R=(c&31)<<6|L&63,R>127&&(m=R));break;case 3:L=e[l+1],A=e[l+2],(L&192)===128&&(A&192)===128&&(R=(c&15)<<12|(L&63)<<6|A&63,R>2047&&(R<55296||R>57343)&&(m=R));break;case 4:L=e[l+1],A=e[l+2],T=e[l+3],(L&192)===128&&(A&192)===128&&(T&192)===128&&(R=(c&15)<<18|(L&63)<<12|(A&63)<<6|T&63,R>65535&&R<1114112&&(m=R))}}m===null?(m=65533,k=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),l+=k}return Ee(o)}var ae=4096;function Ee(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function xe(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]&127);return o}function Be(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var l="",c=r;c<t;++c)l+=Pe[e[c]];return l}function Ae(e,r,t){for(var o=e.slice(r,t),l="",c=0;c<o.length-1;c+=2)l+=String.fromCharCode(o[c]+o[c+1]*256);return l}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function I(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e+--r],l=1;r>0&&(l*=256);)o+=this[e+--r]*l;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return l*=128,o>=l&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=r,l=1,c=this[e+--o];o>0&&(l*=256);)c+=this[e+--o]*l;return l*=128,c>=l&&(c-=Math.pow(2,8*r)),c},n.prototype.readInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!1,52,8)};function D(e,r,t,o,l,c){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>l||r<c)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=1,m=0;for(this[r]=e&255;++m<t&&(c*=256);)this[r+m]=e/c&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=t-1,m=1;for(this[r+c]=e&255;--c>=0&&(m*=256);)this[r+c]=e/m&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=0,m=1,k=0;for(this[r]=e&255;++c<t&&(m*=256);)e<0&&k===0&&this[r+c-1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=t-1,m=1,k=0;for(this[r+c]=e&255;--c>=0&&(m*=256);)e<0&&k===0&&this[r+c+1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,l,c){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function we(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),a.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return we(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return we(this,e,r,!1,t)};function se(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),a.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var l=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),l},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var l=e.charCodeAt(0);(o==="utf8"&&l<128||o==="latin1")&&(e=l)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var c;if(typeof e=="number")for(c=r;c<t;++c)this[c]=e;else{var m=n.isBuffer(e)?e:n.from(e,o),k=m.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<t-r;++c)this[c+r]=m[c%k]}return this};var Oe=/[^+/0-9A-Za-z-_]/g;function Ne(e){if(e=e.split("=")[0],e=e.trim().replace(Oe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,l=null,c=[],m=0;m<o;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!l){if(t>56319){(r-=3)>-1&&c.push(239,191,189);continue}else if(m+1===o){(r-=3)>-1&&c.push(239,191,189);continue}l=t;continue}if(t<56320){(r-=3)>-1&&c.push(239,191,189),l=t;continue}t=(l-55296<<10|t-56320)+65536}else l&&(r-=3)>-1&&c.push(239,191,189);if(l=null,t<128){if((r-=1)<0)break;c.push(t)}else if(t<2048){if((r-=2)<0)break;c.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;c.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;c.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return c}function Re(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Me(e,r){for(var t,o,l,c=[],m=0;m<e.length&&!((r-=2)<0);++m)t=e.charCodeAt(m),o=t>>8,l=t%256,c.push(l),c.push(o);return c}function qe(e){return i.toByteArray(Ne(e))}function pe(e,r,t,o){for(var l=0;l<o&&!(l+t>=r.length||l>=e.length);++l)r[l+t]=e[l];return l}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Pe=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,l=0;l<16;++l)r[o+l]=e[t]+e[l];return r}()}),Ec=dt((p,i)=>{V();var a=i.exports={},u,s;function _(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?u=setTimeout:u=_}catch(h){u=_}try{typeof clearTimeout=="function"?s=clearTimeout:s=d}catch(h){s=d}})();function n(h){if(u===setTimeout)return setTimeout(h,0);if((u===_||!u)&&setTimeout)return u=setTimeout,setTimeout(h,0);try{return u(h,0)}catch(S){try{return u.call(null,h,0)}catch(x){return u.call(this,h,0)}}}function w(h){if(s===clearTimeout)return clearTimeout(h);if((s===d||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(h);try{return s(h)}catch(S){try{return s.call(null,h)}catch(x){return s.call(this,h)}}}var y=[],q=!1,b,E=-1;function B(){!q||!b||(q=!1,b.length?y=b.concat(y):E=-1,y.length&&f())}function f(){if(!q){var h=n(B);q=!0;for(var S=y.length;S;){for(b=y,y=[];++E<S;)b&&b[E].run();E=-1,S=y.length}b=null,q=!1,w(h)}}a.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)S[x-1]=arguments[x];y.push(new g(h,S)),y.length===1&&!q&&n(f)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={};function v(){}a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(h){return[]},a.binding=function(h){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(h){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}),xc,qc,Sc,V=hc(()=>{xc=te(wc()),qc=te(Ec()),Sc=function(p){function i(){var u=this||self;return delete p.prototype.__magic__,u}if(typeof globalThis=="object")return globalThis;if(this)return i();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:i});var a=__magic__;return a}(Object)}),Nn={};gc(Nn,{SFTAmount:()=>$c});Mn.exports=vc(Nn);V();V();var rr=te(require("react")),kc=te(require("bignumber.js")),Kt=te(require("classnames"));V();var Ac=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ac));var Vr={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};V();V();var Wv=te(require("react")),Yv=require("@terradharitri/sdk-dapp/constants/index");V();V();V();var $v=te(require("axios"));V();V();V();var Hv=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");V();var Zv=require("@terradharitri/sdk-dapp/constants/index");V();V();V();V();V();V();var Xv=te(require("axios"));V();V();var Jv=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Kv=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Qv=te(require("axios")),eb=te(require("lodash/uniqBy"));V();var rb=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),tb=te(require("axios"));V();V();V();var ob=require("@terradharitri/sdk-dapp/types/tokens.types");V();V();V();V();var nb=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),ab=te(require("axios"));V();V();var ib=te(require("axios"));V();var Bc=te(require("react")),lb=(0,Bc.createContext)({});V();V();var Ic=te(require("react")),pb=require("@terradharitri/sdk-dapp/constants/index"),cb=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ub=te(require("bignumber.js")),sb=require("formik");V();V();V();var db=require("bech32");V();V();V();var In=(p,i)=>typeof i=="boolean"?i:Array.isArray(i)&&i.includes(p);V();V();V();var fb=require("@terradharitri/sdk-dapp/constants"),mb=require("@terradharitri/sdk-dapp/utils/account/getAccount");V();V();var _b=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");V();var hb=require("@terradharitri/sdk-dapp/utils/buildUrlParams");V();var gb=te(require("anchorme"));V();V();var vb=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Tc=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),bb=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),yb=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");V();V();var Uc=te(require("react")),wb=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Eb=require("formik");V();V();var xb=require("@terradharitri/sdk-dapp/constants/index"),qb=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Sb=te(require("bignumber.js"));V();V();var kb=require("@terradharitri/sdk-dapp/constants/index");V();var Ab=require("@terradharitri/sdk-dapp/constants/index");V();var Bb=require("@terradharitri/sdk-dapp/constants/index"),Ib=te(require("bignumber.js"));V();var Tb=require("@terradharitri/sdk-dapp/constants/index");V();var Ub=require("@terradharitri/sdk-dapp/constants/index");V();V();var Cb=require("@terradharitri/sdk-core"),Lb=require("@terradharitri/sdk-dapp/constants/index"),Ob=te(require("bignumber.js"));V();V();var Nb=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");V();var Rb=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");V();var Mb=te(require("bignumber.js"));V();var Pb=require("@terradharitri/sdk-dapp/constants/index"),Db=require("@terradharitri/sdk-dapp/utils/smartContracts"),Fb=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),jb=te(require("bignumber.js"));V();var zb=te(require("bignumber.js"));V();var Qt=require("@terradharitri/sdk-dapp/constants/index"),Cc=te(require("bignumber.js")),Tn,Un,Cn,Lc=(0,Tc.formatAmount)({input:String((Tn=Qt.GAS_PRICE)!=null?Tn:1e9),decimals:(Un=Qt.DECIMALS)!=null?Un:18,showLastNonZeroDecimal:!0,digits:(Cn=Qt.DIGITS)!=null?Cn:4}),Gb=new Cc.default(Lc).times(10).toString(10);V();var Vb=require("@terradharitri/sdk-dapp/constants/index"),Wb=te(require("bignumber.js"));V();var Yb=te(require("bignumber.js"));V();V();var $b=require("yup");V();var Ln=require("@terradharitri/sdk-dapp/constants/ledger.constants"),Oc=te(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),eo=require("yup"),Nc=(0,eo.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(p){let{ledger:i}=this.parent;return!(i&&p&&p.length&&!i.ledgerDataActive)}),Rc=(0,eo.string)().test({name:"hashSign",test:function(p){let{ledger:i,isGuarded:a}=this.parent;if(i){let{ledgerWithHashSign:u,ledgerWithGuardians:s}=(0,Oc.default)(i.version);if(p&&p.length>300&&!u)return this.createError({message:`Data too long. You need at least DharitrI app version ${Ln.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(a&&!s)return this.createError({message:`You need at least DharitrI app version ${Ln.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Mc=[Nc,Rc],Hb=Mc.reduce((p,i)=>p.concat(i),(0,eo.string)());V();var Zb=require("@terradharitri/sdk-dapp/constants/index"),Xb=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Jb=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Kb=require("yup");V();var Qb=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ey=te(require("bignumber.js")),ry=require("yup");V();var ty=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),oy=te(require("bignumber.js")),ny=require("yup");V();var ay=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),iy=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ly=te(require("bignumber.js")),py=require("yup");V();var cy=te(require("bignumber.js")),uy=require("yup");V();var sy=require("@terradharitri/sdk-dapp/constants/index"),dy=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),fy=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),my=te(require("bignumber.js")),_y=require("yup");V();var hy=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),gy=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),vy=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),by=te(require("bignumber.js")),yy=require("yup");V();var wy=te(require("bignumber.js")),Ey=require("yup");V();var xy=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),qy=require("yup");V();var Sy=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ky=require("yup");V();V();var Ay=(0,Uc.createContext)({});V();V();var Pc=te(require("react")),By=require("formik"),Iy=te(require("lodash/uniqBy"));V();V();var Dc=te(require("react")),Ty=(0,Dc.createContext)({});V();V();var Uy=require("react"),Cy=require("@terradharitri/sdk-dapp/constants/index"),Ly=require("@terradharitri/sdk-dapp/types/enums.types");V();var Oy=(0,Pc.createContext)({});V();V();var Ny=require("@terradharitri/sdk-dapp/constants/index"),Ry=require("formik");V();V();var Fc=te(require("react")),My=require("@terradharitri/sdk-dapp/constants/index"),Py=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Dy=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Fy=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),jy=te(require("bignumber.js")),zy=require("formik");V();V();V();V();var Gy=te(require("bignumber.js"));V();var Vy=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Wy=te(require("bignumber.js"));V();V();var Yy=require("react"),$y=require("@terradharitri/sdk-dapp/constants/index"),Hy=require("@terradharitri/sdk-dapp/utils/smartContracts"),Zy=te(require("bignumber.js")),Xy=require("formik");V();var Jy=require("react");V();V();var Ky=require("@terradharitri/sdk-dapp/constants/index"),Qy=te(require("bignumber.js")),e1=(0,Fc.createContext)({}),r1=(0,Ic.createContext)({});V();V();var jc=te(require("react")),t1=require("formik"),o1=(0,jc.createContext)({});V();V();var zc=te(require("react")),n1=require("formik");V();V();V();var a1=require("react"),i1=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),l1=te(require("lodash/uniqBy"));V();V();var p1=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),c1=require("@terradharitri/sdk-dapp/utils");V();var u1=require("react");V();var s1=require("react"),d1=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),f1=(0,zc.createContext)({});V();V();var Gc=te(require("react")),m1=require("formik");V();V();V();V();V();var _1=require("react"),h1=require("@terradharitri/sdk-dapp/utils");V();var g1=require("react"),v1=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");V();V();var b1=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),y1=te(require("axios"));V();var w1=te(require("axios")),E1=(0,Gc.createContext)({});V();var Rn=te(require("react")),Vc=(0,Rn.createContext)({});function Wc(){return(0,Rn.useContext)(Vc)}V();var Yc=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yc));var Cr={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"},$c=p=>{let{className:i}=p,{formInfo:{readonly:a},amountInfo:u,tokensInfo:s}=Wc(),{amount:_,error:d,onFocus:n,onBlur:w,onChange:y,isInvalid:q,onMaxClicked:b,maxAmountAvailable:E,isMaxButtonVisible:B}=u,{nft:f}=s,g=f!=null&&f.balance?new kc.default(f.balance).isGreaterThan(0):!1,v=h=>{h.preventDefault(),b()};return rr.default.createElement("div",{className:(0,Kt.default)(Cr.amount,i)},rr.default.createElement("div",{className:Cr.label},rr.default.createElement("label",{htmlFor:"amount",className:Vr.label},"Amount"),g&&f&&rr.default.createElement("div",{"data-value":`${E} ${f.identifier}`,className:(0,Kt.default)(Cr.balance,i)},rr.default.createElement("span",null,"Available:")," ",rr.default.createElement("span",{"data-testid":`available-${f.identifier}`,className:Cr.available},rr.default.createElement("span",{className:Cr.amount},E)," ",f.ticker))),rr.default.createElement("div",{className:Cr.wrapper},rr.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:_,disabled:In("amount",a),onFocus:n,onBlur:w,onChange:y,autoComplete:"off",className:(0,Kt.default)(Vr.input,{[Vr.invalid]:q,[Vr.disabled]:In("amount",a)})}),B&&rr.default.createElement("a",{href:"/","data-testid":"maxBtn",className:Cr.max,onClick:v,onMouseDown:h=>{h.preventDefault()}},"Max")),q&&rr.default.createElement("div",{className:Vr.error,"data-testid":"amountError"},d))};});var la=He((o6,ia)=>{"use strict";ye();var Hc=Object.create,Wr=Object.defineProperty,Zc=Object.getOwnPropertyDescriptor,Xc=Object.getOwnPropertyNames,Dn=Object.getOwnPropertySymbols,Jc=Object.getPrototypeOf,Jn=Object.prototype.hasOwnProperty,Kc=Object.prototype.propertyIsEnumerable,Fn=(p,i,a)=>i in p?Wr(p,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):p[i]=a,jn=(p,i)=>{for(var a in i||(i={}))Jn.call(i,a)&&Fn(p,a,i[a]);if(Dn)for(var a of Dn(i))Kc.call(i,a)&&Fn(p,a,i[a]);return p},Qc=(p,i)=>()=>(p&&(i=p(p=0)),i),ft=(p,i)=>()=>(i||p((i={exports:{}}).exports,i),i.exports),eu=(p,i)=>{for(var a in i)Wr(p,a,{get:i[a],enumerable:!0})},Kn=(p,i,a,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of Xc(i))!Jn.call(p,s)&&s!==a&&Wr(p,s,{get:()=>i[s],enumerable:!(u=Zc(i,s))||u.enumerable});return p},J=(p,i,a)=>(a=p!=null?Hc(Jc(p)):{},Kn(i||!p||!p.__esModule?Wr(a,"default",{value:p,enumerable:!0}):a,p)),ru=p=>Kn(Wr({},"__esModule",{value:!0}),p),tu=ft(p=>{"use strict";M(),p.byteLength=w,p.toByteArray=q,p.fromByteArray=B;var i=[],a=[],u=typeof Uint8Array!="undefined"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,d=s.length;_<d;++_)i[_]=s[_],a[s.charCodeAt(_)]=_;var _,d;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63;function n(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=f.indexOf("=");v===-1&&(v=g);var h=v===g?0:4-v%4;return[v,h]}function w(f){var g=n(f),v=g[0],h=g[1];return(v+h)*3/4-h}function y(f,g,v){return(g+v)*3/4-v}function q(f){var g,v=n(f),h=v[0],S=v[1],x=new u(y(f,h,S)),N=0,P=S>0?h-4:h,O;for(O=0;O<P;O+=4)g=a[f.charCodeAt(O)]<<18|a[f.charCodeAt(O+1)]<<12|a[f.charCodeAt(O+2)]<<6|a[f.charCodeAt(O+3)],x[N++]=g>>16&255,x[N++]=g>>8&255,x[N++]=g&255;return S===2&&(g=a[f.charCodeAt(O)]<<2|a[f.charCodeAt(O+1)]>>4,x[N++]=g&255),S===1&&(g=a[f.charCodeAt(O)]<<10|a[f.charCodeAt(O+1)]<<4|a[f.charCodeAt(O+2)]>>2,x[N++]=g>>8&255,x[N++]=g&255),x}function b(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function E(f,g,v){for(var h,S=[],x=g;x<v;x+=3)h=(f[x]<<16&16711680)+(f[x+1]<<8&65280)+(f[x+2]&255),S.push(b(h));return S.join("")}function B(f){for(var g,v=f.length,h=v%3,S=[],x=16383,N=0,P=v-h;N<P;N+=x)S.push(E(f,N,N+x>P?P:N+x));return h===1?(g=f[v-1],S.push(i[g>>2]+i[g<<4&63]+"==")):h===2&&(g=(f[v-2]<<8)+f[v-1],S.push(i[g>>10]+i[g>>4&63]+i[g<<2&63]+"=")),S.join("")}}),ou=ft(p=>{M(),p.read=function(i,a,u,s,_){var d,n,w=_*8-s-1,y=(1<<w)-1,q=y>>1,b=-7,E=u?_-1:0,B=u?-1:1,f=i[a+E];for(E+=B,d=f&(1<<-b)-1,f>>=-b,b+=w;b>0;d=d*256+i[a+E],E+=B,b-=8);for(n=d&(1<<-b)-1,d>>=-b,b+=s;b>0;n=n*256+i[a+E],E+=B,b-=8);if(d===0)d=1-q;else{if(d===y)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,s),d=d-q}return(f?-1:1)*n*Math.pow(2,d-s)},p.write=function(i,a,u,s,_,d){var n,w,y,q=d*8-_-1,b=(1<<q)-1,E=b>>1,B=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=s?0:d-1,g=s?1:-1,v=a<0||a===0&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(w=isNaN(a)?1:0,n=b):(n=Math.floor(Math.log(a)/Math.LN2),a*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+E>=1?a+=B/y:a+=B*Math.pow(2,1-E),a*y>=2&&(n++,y/=2),n+E>=b?(w=0,n=b):n+E>=1?(w=(a*y-1)*Math.pow(2,_),n=n+E):(w=a*Math.pow(2,E-1)*Math.pow(2,_),n=0));_>=8;i[u+f]=w&255,f+=g,w/=256,_-=8);for(n=n<<_|w,q+=_;q>0;i[u+f]=n&255,f+=g,n/=256,q-=8);i[u+f-g]|=v*128}}),nu=ft(p=>{"use strict";M();var i=tu(),a=ou(),u=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=n,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var s=2147483647;p.kMaxLength=s,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function d(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return w(e,r,t)}n.poolSize=8192;function w(e,r,t){if(typeof e=="string")return E(e,r);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var l=v(e);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return w(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function q(e,r,t){return y(e),e<=0?d(e):r!==void 0?typeof t=="string"?d(e).fill(r,t):d(e).fill(r):d(e)}n.alloc=function(e,r,t){return q(e,r,t)};function b(e){return y(e),d(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return b(e)},n.allocUnsafeSlow=function(e){return b(e)};function E(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=x(e,r)|0,o=d(t),l=o.write(e,r);return l!==t&&(o=o.slice(0,l)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=d(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function f(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function v(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=d(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?d(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,l=0,c=Math.min(t,o);l<c;++l)if(e[l]!==r[l]){t=e[l],o=r[l];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),l=0;for(t=0;t<e.length;++t){var c=e[t];if(H(c,Uint8Array))l+c.length>o.length?n.from(c).copy(o,l):Uint8Array.prototype.set.call(o,c,l);else if(n.isBuffer(c))c.copy(o,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=c.length}return o};function x(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var l=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return qe(e).length;default:if(l)return o?-1:fe(e).length;r=(""+r).toLowerCase(),l=!0}}n.byteLength=x;function N(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return xe(this,r,t);case"latin1":case"binary":return Be(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function P(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)P(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)P(this,r,r+3),P(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)P(this,r,r+7),P(this,r+1,r+6),P(this,r+2,r+5),P(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):N.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},u&&(n.prototype[u]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,l){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),l===void 0&&(l=this.length),r<0||t>e.length||o<0||l>this.length)throw new RangeError("out of range index");if(o>=l&&r>=t)return 0;if(o>=l)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,l>>>=0,this===e)return 0;for(var c=l-o,m=t-r,k=Math.min(c,m),L=this.slice(o,l),A=e.slice(r,t),T=0;T<k;++T)if(L[T]!==A[T]){c=L[T],m=A[T];break}return c<m?-1:m<c?1:0};function O(e,r,t,o,l){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=l?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(l)return-1;t=e.length-1}else if(t<0)if(l)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,l);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,l);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,l){var c=1,m=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;c=2,m/=2,k/=2,t/=2}function L(Se,ke){return c===1?Se[ke]:Se.readUInt16BE(ke*c)}var A;if(l){var T=-1;for(A=t;A<m;A++)if(L(e,A)===L(r,T===-1?0:A-T)){if(T===-1&&(T=A),A-T+1===k)return T*c}else T!==-1&&(A-=A-T),T=-1}else for(t+k>m&&(t=m-k),A=t;A>=0;A--){for(var R=!0,ce=0;ce<k;ce++)if(L(e,A+ce)!==L(r,ce)){R=!1;break}if(R)return A}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return O(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return O(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var l=e.length-t;o?(o=Number(o),o>l&&(o=l)):o=l;var c=r.length;o>c/2&&(o=c/2);for(var m=0;m<o;++m){var k=parseInt(r.substr(m*2,2),16);if(me(k))return m;e[t+m]=k}return m}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Re(r),e,t,o)}function ve(e,r,t,o){return pe(qe(r),e,t,o)}function be(e,r,t,o){return pe(Me(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-r;if((t===void 0||t>l)&&(t=l),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var c=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return ve(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return be(this,e,r,t);default:if(c)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),c=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],l=r;l<t;){var c=e[l],m=null,k=c>239?4:c>223?3:c>191?2:1;if(l+k<=t){var L,A,T,R;switch(k){case 1:c<128&&(m=c);break;case 2:L=e[l+1],(L&192)===128&&(R=(c&31)<<6|L&63,R>127&&(m=R));break;case 3:L=e[l+1],A=e[l+2],(L&192)===128&&(A&192)===128&&(R=(c&15)<<12|(L&63)<<6|A&63,R>2047&&(R<55296||R>57343)&&(m=R));break;case 4:L=e[l+1],A=e[l+2],T=e[l+3],(L&192)===128&&(A&192)===128&&(T&192)===128&&(R=(c&15)<<18|(L&63)<<12|(A&63)<<6|T&63,R>65535&&R<1114112&&(m=R))}}m===null?(m=65533,k=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),l+=k}return Ee(o)}var ae=4096;function Ee(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function xe(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]&127);return o}function Be(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var l="",c=r;c<t;++c)l+=Pe[e[c]];return l}function Ae(e,r,t){for(var o=e.slice(r,t),l="",c=0;c<o.length-1;c+=2)l+=String.fromCharCode(o[c]+o[c+1]*256);return l}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function I(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e+--r],l=1;r>0&&(l*=256);)o+=this[e+--r]*l;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return l*=128,o>=l&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=r,l=1,c=this[e+--o];o>0&&(l*=256);)c+=this[e+--o]*l;return l*=128,c>=l&&(c-=Math.pow(2,8*r)),c},n.prototype.readInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!1,52,8)};function D(e,r,t,o,l,c){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>l||r<c)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=1,m=0;for(this[r]=e&255;++m<t&&(c*=256);)this[r+m]=e/c&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=t-1,m=1;for(this[r+c]=e&255;--c>=0&&(m*=256);)this[r+c]=e/m&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=0,m=1,k=0;for(this[r]=e&255;++c<t&&(m*=256);)e<0&&k===0&&this[r+c-1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=t-1,m=1,k=0;for(this[r+c]=e&255;--c>=0&&(m*=256);)e<0&&k===0&&this[r+c+1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,l,c){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function we(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),a.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return we(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return we(this,e,r,!1,t)};function se(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),a.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var l=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),l},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var l=e.charCodeAt(0);(o==="utf8"&&l<128||o==="latin1")&&(e=l)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var c;if(typeof e=="number")for(c=r;c<t;++c)this[c]=e;else{var m=n.isBuffer(e)?e:n.from(e,o),k=m.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<t-r;++c)this[c+r]=m[c%k]}return this};var Oe=/[^+/0-9A-Za-z-_]/g;function Ne(e){if(e=e.split("=")[0],e=e.trim().replace(Oe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,l=null,c=[],m=0;m<o;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!l){if(t>56319){(r-=3)>-1&&c.push(239,191,189);continue}else if(m+1===o){(r-=3)>-1&&c.push(239,191,189);continue}l=t;continue}if(t<56320){(r-=3)>-1&&c.push(239,191,189),l=t;continue}t=(l-55296<<10|t-56320)+65536}else l&&(r-=3)>-1&&c.push(239,191,189);if(l=null,t<128){if((r-=1)<0)break;c.push(t)}else if(t<2048){if((r-=2)<0)break;c.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;c.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;c.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return c}function Re(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Me(e,r){for(var t,o,l,c=[],m=0;m<e.length&&!((r-=2)<0);++m)t=e.charCodeAt(m),o=t>>8,l=t%256,c.push(l),c.push(o);return c}function qe(e){return i.toByteArray(Ne(e))}function pe(e,r,t,o){for(var l=0;l<o&&!(l+t>=r.length||l>=e.length);++l)r[l+t]=e[l];return l}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Pe=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,l=0;l<16;++l)r[o+l]=e[t]+e[l];return r}()}),au=ft((p,i)=>{M();var a=i.exports={},u,s;function _(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?u=setTimeout:u=_}catch(h){u=_}try{typeof clearTimeout=="function"?s=clearTimeout:s=d}catch(h){s=d}})();function n(h){if(u===setTimeout)return setTimeout(h,0);if((u===_||!u)&&setTimeout)return u=setTimeout,setTimeout(h,0);try{return u(h,0)}catch(S){try{return u.call(null,h,0)}catch(x){return u.call(this,h,0)}}}function w(h){if(s===clearTimeout)return clearTimeout(h);if((s===d||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(h);try{return s(h)}catch(S){try{return s.call(null,h)}catch(x){return s.call(this,h)}}}var y=[],q=!1,b,E=-1;function B(){!q||!b||(q=!1,b.length?y=b.concat(y):E=-1,y.length&&f())}function f(){if(!q){var h=n(B);q=!0;for(var S=y.length;S;){for(b=y,y=[];++E<S;)b&&b[E].run();E=-1,S=y.length}b=null,q=!1,w(h)}}a.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)S[x-1]=arguments[x];y.push(new g(h,S)),y.length===1&&!q&&n(f)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={};function v(){}a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(h){return[]},a.binding=function(h){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(h){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}),iu,lu,pu,M=Qc(()=>{iu=J(nu()),lu=J(au()),pu=function(p){function i(){var u=this||self;return delete p.prototype.__magic__,u}if(typeof globalThis=="object")return globalThis;if(this)return i();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:i});var a=__magic__;return a}(Object)}),Qn={};eu(Qn,{FeeAccordion:()=>Yu});ia.exports=ru(Qn);M();M();var Xe=J(require("react")),zn=require("@fortawesome/free-solid-svg-icons"),Gn=require("@fortawesome/react-fontawesome"),cu=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Vn=J(require("classnames")),uu=J(require("react-collapsed"));M();var su=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(su));var tr={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};M();M();var ea=J(require("react"));M();var du=J(require("react")),q1=(0,du.createContext)({});M();M();var fu=J(require("react")),S1=require("@terradharitri/sdk-dapp/constants/index"),k1=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),A1=J(require("bignumber.js")),B1=require("formik");M();M();M();var I1=require("bech32");M();M();M();var ra=(p,i)=>typeof i=="boolean"?i:Array.isArray(i)&&i.includes(p);M();M();var T1=require("@terradharitri/sdk-dapp/types/tokens.types");M();M();var U1=require("@terradharitri/sdk-dapp/constants"),C1=require("@terradharitri/sdk-dapp/utils/account/getAccount");M();M();var L1=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");M();var O1=require("@terradharitri/sdk-dapp/utils/buildUrlParams");M();var N1=J(require("anchorme"));M();M();var R1=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ta=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),mu=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),M1=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");M();M();M();M();M();M();M();var _u=J(require("react")),P1=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),D1=require("formik");M();M();var F1=require("@terradharitri/sdk-dapp/constants/index"),j1=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),z1=J(require("bignumber.js"));M();M();var ro=require("@terradharitri/sdk-dapp/constants/index");function hu({feeLimit:p,rewaPriceInUsd:i}){let a=(0,ta.formatAmount)({input:p,decimals:ro.DECIMALS,digits:ro.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,mu.getUsdValue)({amount:a,usd:i,decimals:ro.DIGITS})}`}M();var G1=require("@terradharitri/sdk-dapp/constants/index");M();M();var gu="0";M();var V1=require("@terradharitri/sdk-dapp/constants/index"),W1=J(require("bignumber.js"));M();var Y1=require("@terradharitri/sdk-dapp/constants/index");M();var $1=require("@terradharitri/sdk-dapp/constants/index");M();M();var H1=require("@terradharitri/sdk-core"),Z1=require("@terradharitri/sdk-dapp/constants/index"),X1=J(require("bignumber.js"));M();M();var J1=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");M();var K1=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");M();var Q1=J(require("bignumber.js"));M();var e2=require("@terradharitri/sdk-dapp/constants/index"),r2=require("@terradharitri/sdk-dapp/utils/smartContracts"),t2=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),o2=J(require("bignumber.js"));M();var n2=J(require("bignumber.js"));M();M();var a2=J(require("axios"));M();M();M();var i2=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");M();var l2=require("@terradharitri/sdk-dapp/constants/index");M();M();M();var to=require("@terradharitri/sdk-dapp/constants/index"),vu=J(require("bignumber.js")),Wn,Yn,$n,oa=(0,ta.formatAmount)({input:String((Wn=to.GAS_PRICE)!=null?Wn:1e9),decimals:(Yn=to.DECIMALS)!=null?Yn:18,showLastNonZeroDecimal:!0,digits:($n=to.DIGITS)!=null?$n:4}),p2=new vu.default(oa).times(10).toString(10);M();var c2=require("@terradharitri/sdk-dapp/constants/index"),u2=J(require("bignumber.js"));M();var s2=J(require("bignumber.js"));M();M();var d2=require("yup");M();var Hn=require("@terradharitri/sdk-dapp/constants/ledger.constants"),bu=J(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),oo=require("yup"),yu=(0,oo.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(p){let{ledger:i}=this.parent;return!(i&&p&&p.length&&!i.ledgerDataActive)}),wu=(0,oo.string)().test({name:"hashSign",test:function(p){let{ledger:i,isGuarded:a}=this.parent;if(i){let{ledgerWithHashSign:u,ledgerWithGuardians:s}=(0,bu.default)(i.version);if(p&&p.length>300&&!u)return this.createError({message:`Data too long. You need at least DharitrI app version ${Hn.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(a&&!s)return this.createError({message:`You need at least DharitrI app version ${Hn.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Eu=[yu,wu],f2=Eu.reduce((p,i)=>p.concat(i),(0,oo.string)());M();var m2=require("@terradharitri/sdk-dapp/constants/index"),_2=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),h2=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),g2=require("yup");M();var v2=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),b2=J(require("bignumber.js")),y2=require("yup");M();var w2=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),E2=J(require("bignumber.js")),x2=require("yup");M();var q2=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),S2=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),k2=J(require("bignumber.js")),A2=require("yup");M();var B2=J(require("bignumber.js")),I2=require("yup");M();var T2=require("@terradharitri/sdk-dapp/constants/index"),U2=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),C2=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),L2=J(require("bignumber.js")),O2=require("yup");M();var N2=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),R2=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),M2=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),P2=J(require("bignumber.js")),D2=require("yup");M();var F2=J(require("bignumber.js")),j2=require("yup");M();var z2=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),G2=require("yup");M();var V2=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),W2=require("yup");M();M();var Y2=(0,_u.createContext)({});M();M();var xu=J(require("react")),$2=require("formik"),H2=J(require("lodash/uniqBy"));M();M();M();var Z2=J(require("axios"));M();M();var X2=J(require("axios"));M();M();var J2=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),K2=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Q2=J(require("axios")),ew=J(require("lodash/uniqBy"));M();var rw=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),tw=J(require("axios"));M();var ow=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),nw=J(require("axios"));M();M();var na=J(require("react")),qu=(0,na.createContext)({});function Su(){return(0,na.useContext)(qu)}M();M();var aw=require("react"),iw=require("@terradharitri/sdk-dapp/constants/index"),lw=require("@terradharitri/sdk-dapp/types/enums.types");M();var pw=(0,xu.createContext)({});M();M();var cw=require("@terradharitri/sdk-dapp/constants/index"),uw=require("formik");M();M();var ku=J(require("react")),sw=require("@terradharitri/sdk-dapp/constants/index"),dw=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),fw=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),mw=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),_w=J(require("bignumber.js")),hw=require("formik");M();M();M();M();var gw=J(require("bignumber.js"));M();var vw=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),bw=J(require("bignumber.js"));M();M();var yw=require("react"),ww=require("@terradharitri/sdk-dapp/constants/index"),Ew=require("@terradharitri/sdk-dapp/utils/smartContracts"),xw=J(require("bignumber.js")),qw=require("formik");M();var Sw=require("react");M();M();var kw=require("@terradharitri/sdk-dapp/constants/index"),Aw=J(require("bignumber.js")),Bw=(0,ku.createContext)({}),Iw=(0,fu.createContext)({});M();M();var Au=J(require("react")),Tw=require("formik"),Uw=(0,Au.createContext)({});M();M();var Bu=J(require("react")),Cw=require("formik");M();M();M();var Lw=require("react"),Ow=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Nw=J(require("lodash/uniqBy"));M();M();var Rw=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Mw=require("@terradharitri/sdk-dapp/utils");M();var Pw=require("react");M();var Dw=require("react"),Fw=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),jw=(0,Bu.createContext)({});M();M();var Iu=J(require("react")),zw=require("formik");M();M();M();M();M();var Gw=require("react"),Vw=require("@terradharitri/sdk-dapp/utils");M();var Ww=require("react"),Yw=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");M();M();var $w=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Hw=J(require("axios"));M();var Zw=J(require("axios")),Xw=(0,Iu.createContext)({}),Tu=(0,ea.createContext)({});function no(){return(0,ea.useContext)(Tu)}M();var vr=J(require("react")),Uu=require("@fortawesome/free-solid-svg-icons"),Cu=require("@fortawesome/react-fontawesome"),Lu=J(require("bignumber.js")),Zn=J(require("classnames")),Ou=require("react-number-format");M();M();var Jw=require("@terradharitri/sdk-dapp/constants/index"),Kw=require("@terradharitri/sdk-dapp/utils/validation"),Qw=J(require("bignumber.js"));M();M();var e6=require("react");M();var Nu=J(require("bignumber.js")),aa=p=>{let[i,a]=p.split(""),u=new Nu.default(i).isZero();return Boolean(u&&a&&a!==".")};M();var Ru=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ru));var ze={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},Mu=()=>{let{formInfo:p,gasInfo:i}=no(),{readonly:a}=p,{defaultGasLimit:u,onResetGasLimit:s,onChangeGasLimit:_,onBlurGasLimit:d,gasLimit:n,gasLimitError:w,isGasLimitInvalid:y}=i,q=g=>{g.preventDefault(),s()},b=({value:g,floatValue:v})=>(!v||!(0,Lu.default)(v).isNaN())&&!aa(g),E=g=>{_(g.value,!0)},B=n!==u&&!a,f=ra("gasLimit",a);return vr.default.createElement("div",{className:ze.gas},vr.default.createElement("label",{className:tr.label,htmlFor:"gasLimit"},"Gas Limit"),vr.default.createElement("div",{className:ze.wrapper},vr.default.createElement(Ou.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:f,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:d,onValueChange:E,required:!0,isAllowed:b,thousandSeparator:",",thousandsGroupStyle:"thousand",value:n,valueIsNumericString:!0,allowNegative:!1,className:(0,Zn.default)(tr.input,ze.input,{[tr.disabled]:f,[tr.invalid]:y,[ze.spaced]:B})}),B&&vr.default.createElement("div",{className:ze.actions},vr.default.createElement("div",{onClick:q,"data-testid":"gasLimitResetBtn",className:(0,Zn.default)(ze.action,{[ze.disabled]:f})},vr.default.createElement(Cu.FontAwesomeIcon,{icon:Uu.faUndo,className:ze.icon}))),y&&vr.default.createElement("div",{className:tr.error,"data-testid":"gasLimitError"},w)))};M();M();var br=J(require("react")),Pu=require("@fortawesome/free-solid-svg-icons"),Du=require("@fortawesome/react-fontawesome"),Fu=J(require("bignumber.js")),Xn=J(require("classnames")),ju=require("react-number-format");M();var r6=J(require("react")),t6=require("@terradharitri/sdk-dapp/constants/index"),zu=()=>{let{networkConfig:p}=Su(),{gasInfo:i,formInfo:a}=no(),{readonly:u}=a,{rewaLabel:s}=p,{gasPrice:_,gasPriceError:d,isGasPriceInvalid:n,onChangeGasPrice:w,onBlurGasPrice:y,onResetGasPrice:q}=i,b=_!==oa&&!u,E=ra("gasPrice",u),B=({value:v,floatValue:h})=>(!h||!(0,Fu.default)(h).isNaN())&&!aa(v),f=v=>{v.preventDefault(),q()},g=v=>{w(v.value,!0)};return br.default.createElement("div",{className:ze.gas},br.default.createElement("label",{className:tr.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),br.default.createElement("div",{className:ze.wrapper},br.default.createElement(ju.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:E,id:"gasPrice",inputMode:"decimal",isAllowed:B,name:"gasPrice",onBlur:y,onValueChange:g,required:!0,suffix:` ${s}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:_,valueIsNumericString:!0,allowNegative:!1,className:(0,Xn.default)(tr.input,ze.input,{[tr.disabled]:E,[tr.invalid]:n,[ze.spaced]:b})}),b&&br.default.createElement("div",{className:ze.actions},br.default.createElement("div",{onClick:f,className:(0,Xn.default)(ze.action,{[ze.disabled]:E})},br.default.createElement(Du.FontAwesomeIcon,{icon:Pu.faUndo,className:ze.icon})))),n&&br.default.createElement("div",{className:tr.error,"data-testid":"gasPriceError"},d))};M();var Gu=J(require("react"));M();var Vu=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vu));var yr={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"},Wu=({feeLimit:p,rewaPriceInUsd:i})=>p===gu?null:Gu.default.createElement("span",{className:yr.fiat,"data-testid":"feeInFiat"},"(",hu({feeLimit:p,rewaPriceInUsd:i}),")"),Yu=({className:p})=>{let{gasInfo:i,tokensInfo:a}=no(),{feeLimit:u,gasCostLoading:s,gasPriceError:_,gasLimitError:d}=i,{rewaPriceInUsd:n,rewaLabel:w}=a,[y,q]=(0,Xe.useState)(Boolean(_||d)),{getCollapseProps:b,getToggleProps:E}=(0,uu.default)({isExpanded:y}),B=()=>{q(f=>!f)};return Xe.default.createElement("div",{className:(0,Vn.default)(yr.fee,p)},Xe.default.createElement("label",{className:tr.label},"Fee"),Xe.default.createElement("div",jn({className:yr.trigger},E({onClick:B})),Xe.default.createElement("span",{className:yr.limit,"data-testid":"feeLimit"},Xe.default.createElement(cu.FormatAmount,{value:u,showLastNonZeroDecimal:!0,rewaLabel:w})),s&&Xe.default.createElement(Gn.FontAwesomeIcon,{icon:zn.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),Xe.default.createElement(Wu,{rewaPriceInUsd:n,feeLimit:u}),Xe.default.createElement(Gn.FontAwesomeIcon,{icon:zn.faChevronRight,className:(0,Vn.default)(yr.arrow,{[yr.active]:y})})),Xe.default.createElement("div",jn({className:yr.expandable},b()),Xe.default.createElement("div",{className:yr.content},Xe.default.createElement(zu,null),Xe.default.createElement(Mu,null))))};});var Ia=He((C5,Ba)=>{"use strict";ye();var $u=Object.create,Yr=Object.defineProperty,Hu=Object.defineProperties,Zu=Object.getOwnPropertyDescriptor,Xu=Object.getOwnPropertyDescriptors,Ju=Object.getOwnPropertyNames,pa=Object.getOwnPropertySymbols,Ku=Object.getPrototypeOf,ha=Object.prototype.hasOwnProperty,Qu=Object.prototype.propertyIsEnumerable,ca=(p,i,a)=>i in p?Yr(p,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):p[i]=a,Je=(p,i)=>{for(var a in i||(i={}))ha.call(i,a)&&ca(p,a,i[a]);if(pa)for(var a of pa(i))Qu.call(i,a)&&ca(p,a,i[a]);return p},or=(p,i)=>Hu(p,Xu(i)),ga=(p,i)=>()=>(p&&(i=p(p=0)),i),ht=(p,i)=>()=>(i||p((i={exports:{}}).exports,i),i.exports),va=(p,i)=>{for(var a in i)Yr(p,a,{get:i[a],enumerable:!0})},ba=(p,i,a,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of Ju(i))!ha.call(p,s)&&s!==a&&Yr(p,s,{get:()=>i[s],enumerable:!(u=Zu(i,s))||u.enumerable});return p},K=(p,i,a)=>(a=p!=null?$u(Ku(p)):{},ba(i||!p||!p.__esModule?Yr(a,"default",{value:p,enumerable:!0}):a,p)),ya=p=>ba(Yr({},"__esModule",{value:!0}),p),es=(p,i,a)=>new Promise((u,s)=>{var _=w=>{try{n(a.next(w))}catch(y){s(y)}},d=w=>{try{n(a.throw(w))}catch(y){s(y)}},n=w=>w.done?u(w.value):Promise.resolve(w.value).then(_,d);n((a=a.apply(p,i)).next())}),rs=ht(p=>{"use strict";G(),p.byteLength=w,p.toByteArray=q,p.fromByteArray=B;var i=[],a=[],u=typeof Uint8Array!="undefined"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,d=s.length;_<d;++_)i[_]=s[_],a[s.charCodeAt(_)]=_;var _,d;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63;function n(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=f.indexOf("=");v===-1&&(v=g);var h=v===g?0:4-v%4;return[v,h]}function w(f){var g=n(f),v=g[0],h=g[1];return(v+h)*3/4-h}function y(f,g,v){return(g+v)*3/4-v}function q(f){var g,v=n(f),h=v[0],S=v[1],x=new u(y(f,h,S)),N=0,P=S>0?h-4:h,O;for(O=0;O<P;O+=4)g=a[f.charCodeAt(O)]<<18|a[f.charCodeAt(O+1)]<<12|a[f.charCodeAt(O+2)]<<6|a[f.charCodeAt(O+3)],x[N++]=g>>16&255,x[N++]=g>>8&255,x[N++]=g&255;return S===2&&(g=a[f.charCodeAt(O)]<<2|a[f.charCodeAt(O+1)]>>4,x[N++]=g&255),S===1&&(g=a[f.charCodeAt(O)]<<10|a[f.charCodeAt(O+1)]<<4|a[f.charCodeAt(O+2)]>>2,x[N++]=g>>8&255,x[N++]=g&255),x}function b(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function E(f,g,v){for(var h,S=[],x=g;x<v;x+=3)h=(f[x]<<16&16711680)+(f[x+1]<<8&65280)+(f[x+2]&255),S.push(b(h));return S.join("")}function B(f){for(var g,v=f.length,h=v%3,S=[],x=16383,N=0,P=v-h;N<P;N+=x)S.push(E(f,N,N+x>P?P:N+x));return h===1?(g=f[v-1],S.push(i[g>>2]+i[g<<4&63]+"==")):h===2&&(g=(f[v-2]<<8)+f[v-1],S.push(i[g>>10]+i[g>>4&63]+i[g<<2&63]+"=")),S.join("")}}),ts=ht(p=>{G(),p.read=function(i,a,u,s,_){var d,n,w=_*8-s-1,y=(1<<w)-1,q=y>>1,b=-7,E=u?_-1:0,B=u?-1:1,f=i[a+E];for(E+=B,d=f&(1<<-b)-1,f>>=-b,b+=w;b>0;d=d*256+i[a+E],E+=B,b-=8);for(n=d&(1<<-b)-1,d>>=-b,b+=s;b>0;n=n*256+i[a+E],E+=B,b-=8);if(d===0)d=1-q;else{if(d===y)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,s),d=d-q}return(f?-1:1)*n*Math.pow(2,d-s)},p.write=function(i,a,u,s,_,d){var n,w,y,q=d*8-_-1,b=(1<<q)-1,E=b>>1,B=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=s?0:d-1,g=s?1:-1,v=a<0||a===0&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(w=isNaN(a)?1:0,n=b):(n=Math.floor(Math.log(a)/Math.LN2),a*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+E>=1?a+=B/y:a+=B*Math.pow(2,1-E),a*y>=2&&(n++,y/=2),n+E>=b?(w=0,n=b):n+E>=1?(w=(a*y-1)*Math.pow(2,_),n=n+E):(w=a*Math.pow(2,E-1)*Math.pow(2,_),n=0));_>=8;i[u+f]=w&255,f+=g,w/=256,_-=8);for(n=n<<_|w,q+=_;q>0;i[u+f]=n&255,f+=g,n/=256,q-=8);i[u+f-g]|=v*128}}),os=ht(p=>{"use strict";G();var i=rs(),a=ts(),u=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=n,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var s=2147483647;p.kMaxLength=s,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function d(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return w(e,r,t)}n.poolSize=8192;function w(e,r,t){if(typeof e=="string")return E(e,r);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var l=v(e);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return w(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function q(e,r,t){return y(e),e<=0?d(e):r!==void 0?typeof t=="string"?d(e).fill(r,t):d(e).fill(r):d(e)}n.alloc=function(e,r,t){return q(e,r,t)};function b(e){return y(e),d(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return b(e)},n.allocUnsafeSlow=function(e){return b(e)};function E(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=x(e,r)|0,o=d(t),l=o.write(e,r);return l!==t&&(o=o.slice(0,l)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=d(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function f(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function v(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=d(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?d(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,l=0,c=Math.min(t,o);l<c;++l)if(e[l]!==r[l]){t=e[l],o=r[l];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),l=0;for(t=0;t<e.length;++t){var c=e[t];if(H(c,Uint8Array))l+c.length>o.length?n.from(c).copy(o,l):Uint8Array.prototype.set.call(o,c,l);else if(n.isBuffer(c))c.copy(o,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=c.length}return o};function x(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var l=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return qe(e).length;default:if(l)return o?-1:fe(e).length;r=(""+r).toLowerCase(),l=!0}}n.byteLength=x;function N(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return xe(this,r,t);case"latin1":case"binary":return Be(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function P(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)P(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)P(this,r,r+3),P(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)P(this,r,r+7),P(this,r+1,r+6),P(this,r+2,r+5),P(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):N.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},u&&(n.prototype[u]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,l){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),l===void 0&&(l=this.length),r<0||t>e.length||o<0||l>this.length)throw new RangeError("out of range index");if(o>=l&&r>=t)return 0;if(o>=l)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,l>>>=0,this===e)return 0;for(var c=l-o,m=t-r,k=Math.min(c,m),L=this.slice(o,l),A=e.slice(r,t),T=0;T<k;++T)if(L[T]!==A[T]){c=L[T],m=A[T];break}return c<m?-1:m<c?1:0};function O(e,r,t,o,l){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=l?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(l)return-1;t=e.length-1}else if(t<0)if(l)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,l);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,l);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,l){var c=1,m=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;c=2,m/=2,k/=2,t/=2}function L(Se,ke){return c===1?Se[ke]:Se.readUInt16BE(ke*c)}var A;if(l){var T=-1;for(A=t;A<m;A++)if(L(e,A)===L(r,T===-1?0:A-T)){if(T===-1&&(T=A),A-T+1===k)return T*c}else T!==-1&&(A-=A-T),T=-1}else for(t+k>m&&(t=m-k),A=t;A>=0;A--){for(var R=!0,ce=0;ce<k;ce++)if(L(e,A+ce)!==L(r,ce)){R=!1;break}if(R)return A}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return O(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return O(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var l=e.length-t;o?(o=Number(o),o>l&&(o=l)):o=l;var c=r.length;o>c/2&&(o=c/2);for(var m=0;m<o;++m){var k=parseInt(r.substr(m*2,2),16);if(me(k))return m;e[t+m]=k}return m}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Re(r),e,t,o)}function ve(e,r,t,o){return pe(qe(r),e,t,o)}function be(e,r,t,o){return pe(Me(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-r;if((t===void 0||t>l)&&(t=l),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var c=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return ve(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return be(this,e,r,t);default:if(c)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),c=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],l=r;l<t;){var c=e[l],m=null,k=c>239?4:c>223?3:c>191?2:1;if(l+k<=t){var L,A,T,R;switch(k){case 1:c<128&&(m=c);break;case 2:L=e[l+1],(L&192)===128&&(R=(c&31)<<6|L&63,R>127&&(m=R));break;case 3:L=e[l+1],A=e[l+2],(L&192)===128&&(A&192)===128&&(R=(c&15)<<12|(L&63)<<6|A&63,R>2047&&(R<55296||R>57343)&&(m=R));break;case 4:L=e[l+1],A=e[l+2],T=e[l+3],(L&192)===128&&(A&192)===128&&(T&192)===128&&(R=(c&15)<<18|(L&63)<<12|(A&63)<<6|T&63,R>65535&&R<1114112&&(m=R))}}m===null?(m=65533,k=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),l+=k}return Ee(o)}var ae=4096;function Ee(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function xe(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]&127);return o}function Be(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var l="",c=r;c<t;++c)l+=Pe[e[c]];return l}function Ae(e,r,t){for(var o=e.slice(r,t),l="",c=0;c<o.length-1;c+=2)l+=String.fromCharCode(o[c]+o[c+1]*256);return l}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function I(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e+--r],l=1;r>0&&(l*=256);)o+=this[e+--r]*l;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return l*=128,o>=l&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=r,l=1,c=this[e+--o];o>0&&(l*=256);)c+=this[e+--o]*l;return l*=128,c>=l&&(c-=Math.pow(2,8*r)),c},n.prototype.readInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!1,52,8)};function D(e,r,t,o,l,c){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>l||r<c)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=1,m=0;for(this[r]=e&255;++m<t&&(c*=256);)this[r+m]=e/c&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=t-1,m=1;for(this[r+c]=e&255;--c>=0&&(m*=256);)this[r+c]=e/m&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=0,m=1,k=0;for(this[r]=e&255;++c<t&&(m*=256);)e<0&&k===0&&this[r+c-1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=t-1,m=1,k=0;for(this[r+c]=e&255;--c>=0&&(m*=256);)e<0&&k===0&&this[r+c+1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,l,c){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function we(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),a.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return we(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return we(this,e,r,!1,t)};function se(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),a.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var l=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),l},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var l=e.charCodeAt(0);(o==="utf8"&&l<128||o==="latin1")&&(e=l)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var c;if(typeof e=="number")for(c=r;c<t;++c)this[c]=e;else{var m=n.isBuffer(e)?e:n.from(e,o),k=m.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<t-r;++c)this[c+r]=m[c%k]}return this};var Oe=/[^+/0-9A-Za-z-_]/g;function Ne(e){if(e=e.split("=")[0],e=e.trim().replace(Oe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,l=null,c=[],m=0;m<o;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!l){if(t>56319){(r-=3)>-1&&c.push(239,191,189);continue}else if(m+1===o){(r-=3)>-1&&c.push(239,191,189);continue}l=t;continue}if(t<56320){(r-=3)>-1&&c.push(239,191,189),l=t;continue}t=(l-55296<<10|t-56320)+65536}else l&&(r-=3)>-1&&c.push(239,191,189);if(l=null,t<128){if((r-=1)<0)break;c.push(t)}else if(t<2048){if((r-=2)<0)break;c.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;c.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;c.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return c}function Re(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Me(e,r){for(var t,o,l,c=[],m=0;m<e.length&&!((r-=2)<0);++m)t=e.charCodeAt(m),o=t>>8,l=t%256,c.push(l),c.push(o);return c}function qe(e){return i.toByteArray(Ne(e))}function pe(e,r,t,o){for(var l=0;l<o&&!(l+t>=r.length||l>=e.length);++l)r[l+t]=e[l];return l}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Pe=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,l=0;l<16;++l)r[o+l]=e[t]+e[l];return r}()}),ns=ht((p,i)=>{G();var a=i.exports={},u,s;function _(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?u=setTimeout:u=_}catch(h){u=_}try{typeof clearTimeout=="function"?s=clearTimeout:s=d}catch(h){s=d}})();function n(h){if(u===setTimeout)return setTimeout(h,0);if((u===_||!u)&&setTimeout)return u=setTimeout,setTimeout(h,0);try{return u(h,0)}catch(S){try{return u.call(null,h,0)}catch(x){return u.call(this,h,0)}}}function w(h){if(s===clearTimeout)return clearTimeout(h);if((s===d||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(h);try{return s(h)}catch(S){try{return s.call(null,h)}catch(x){return s.call(this,h)}}}var y=[],q=!1,b,E=-1;function B(){!q||!b||(q=!1,b.length?y=b.concat(y):E=-1,y.length&&f())}function f(){if(!q){var h=n(B);q=!0;for(var S=y.length;S;){for(b=y,y=[];++E<S;)b&&b[E].run();E=-1,S=y.length}b=null,q=!1,w(h)}}a.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)S[x-1]=arguments[x];y.push(new g(h,S)),y.length===1&&!q&&n(f)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={};function v(){}a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(h){return[]},a.binding=function(h){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(h){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}),wa,as,is,G=ga(()=>{wa=K(os()),as=K(ns()),is=function(p){function i(){var u=this||self;return delete p.prototype.__magic__,u}if(typeof globalThis=="object")return globalThis;if(this)return i();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:i});var a=__magic__;return a}(Object)}),Ea={};va(Ea,{default:()=>xa});var mt,ua,xa,ls=ga(()=>{"use strict";G(),mt=K(require("react")),ua=p=>mt.createElement("svg",Je({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},p),mt.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),mt.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),xa=ua}),qa={};va(qa,{SelectToken:()=>Gs});Ba.exports=ya(qa);G();G();var wr=K(require("react")),ps=K(require("@terradharitri/sdk-dapp/constants/index")),cs=K(require("classnames")),Sa=K(require("react-select"));G();var us=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(us));var ka={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};G();G();var Aa=K(require("react"));G();var ss=K(require("react")),n6=(0,ss.createContext)({});G();G();var ds=K(require("react")),a6=require("@terradharitri/sdk-dapp/constants/index"),i6=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),l6=K(require("bignumber.js")),p6=require("formik");G();G();G();var c6=require("bech32");G();G();G();var fs=(p,i)=>typeof i=="boolean"?i:Array.isArray(i)&&i.includes(p);G();G();var _t=require("@terradharitri/sdk-dapp/types/tokens.types");G();G();var u6=require("@terradharitri/sdk-dapp/constants"),s6=require("@terradharitri/sdk-dapp/utils/account/getAccount");G();G();var d6=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");G();var f6=require("@terradharitri/sdk-dapp/utils/buildUrlParams");G();var ao=K(require("anchorme")),io=p=>p.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),ms=(p,i)=>{if(i){let a=`[Message hidden due to suspicious content - ${i.info}]`;if(p.length>1e3)return{output:a,stringWithLinks:p,found:!0};let u=io(p.normalize("NFKC")),s=ao.default.list(u),_=[];if(s.length>0){let d=a;s.forEach((n,w)=>{let{string:y}=n,q="",b="",E=y;for(let B=0;B<d.length;B++){let f=d.slice(B),[g]=ao.default.list(io(f));g&&y===g.string&&(q=d.substring(0,B))}for(let B=a.length;B>0;B--){let f=d.slice(0,B),[g]=ao.default.list(io(f));g&&y===g.string&&(b=d.substring(B))}_.push(q),_.push(E),d=b,w===s.length-1&&_.push(b)})}else _.push(p);return{output:a,stringWithLinks:_.join(""),found:!0}}else return{output:p,stringWithLinks:"",found:!1}};G();function _s({docStyle:p}){let i={hoverColor:p.getPropertyValue("--border-color"),primaryColor:p.getPropertyValue("--primary"),bgColor:p.getPropertyValue("--card-bg"),mutedColor:p.getPropertyValue("--muted"),blackColor:p.getPropertyValue("--black")};return{valueContainer:()=>({padding:"0.125rem 0 0.125rem 0.2rem",lineHeight:"1.5",fontSize:"0.8125rem",maxWidth:"85%",display:"flex"}),control:(a,u)=>or(Je({},a),{minHeight:"0",flexWrap:"nowrap",backgroundColor:u.isDisabled?"#e9ecef":"transparent",borderColor:u.isDisabled?i.hoverColor:u.isFocused?i.primaryColor:i.blackColor,boxShadow:u.isFocused?`0 0 0 0.2rem #${i.primaryColor.replace("#","").trim()}33`:null,"&:hover":{borderColor:u.isFocused?i.primaryColor:"#b0b0b0"}}),input:a=>or(Je({},a),{paddingLeft:"0.4rem",marginLeft:"0",marginRight:"0"}),indicatorSeparator:a=>or(Je({},a),{marginTop:"0.3rem",marginBottom:"0.3rem"}),indicatorsContainer:a=>or(Je({},a),{zIndex:"0"}),dropdownIndicator:a=>or(Je({},a),{padding:"0 0.4rem"}),multiValue:a=>or(Je({},a),{backgroundColor:i.hoverColor,borderRadius:"4px"}),multiValueRemove:a=>or(Je({},a),{cursor:"pointer"}),multiValueLebel:a=>or(Je({},a),{lineHeight:"1.5"}),placeholder:a=>or(Je({},a),{marginLeft:"0",lineHeight:"2"}),option:(a,{isFocused:u,isSelected:s})=>or(Je({},a),{fontSize:"0.8125rem",cursor:"pointer",align:"left",backgroundColor:s?i.primaryColor:u?i.hoverColor:"transparent"}),menu:a=>or(Je({},a),{marginTop:"0.2rem",zIndex:"5"})}}G();var m6=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),hs=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),_6=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),h6=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");G();G();G();G();G();G();G();var gs=K(require("react")),g6=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),v6=require("formik");G();G();var b6=require("@terradharitri/sdk-dapp/constants/index"),y6=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),w6=K(require("bignumber.js"));G();G();var E6=require("@terradharitri/sdk-dapp/constants/index");G();var x6=require("@terradharitri/sdk-dapp/constants/index");G();G();var vs="0";G();var q6=require("@terradharitri/sdk-dapp/constants/index"),S6=K(require("bignumber.js"));G();var k6=require("@terradharitri/sdk-dapp/constants/index");G();var A6=require("@terradharitri/sdk-dapp/constants/index");G();G();var B6=require("@terradharitri/sdk-core"),I6=require("@terradharitri/sdk-dapp/constants/index"),T6=K(require("bignumber.js"));G();G();var U6=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");G();var C6=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");G();var L6=K(require("bignumber.js"));G();var O6=require("@terradharitri/sdk-dapp/constants/index"),N6=require("@terradharitri/sdk-dapp/utils/smartContracts"),R6=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),M6=K(require("bignumber.js"));G();var P6=K(require("bignumber.js"));G();G();var D6=K(require("axios"));G();G();G();var F6=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");G();var j6=require("@terradharitri/sdk-dapp/constants/index");G();G();G();var lo=require("@terradharitri/sdk-dapp/constants/index"),bs=K(require("bignumber.js")),sa,da,fa,ys=(0,hs.formatAmount)({input:String((sa=lo.GAS_PRICE)!=null?sa:1e9),decimals:(da=lo.DECIMALS)!=null?da:18,showLastNonZeroDecimal:!0,digits:(fa=lo.DIGITS)!=null?fa:4}),z6=new bs.default(ys).times(10).toString(10);G();var G6=require("@terradharitri/sdk-dapp/constants/index"),V6=K(require("bignumber.js"));G();var W6=K(require("bignumber.js"));G();G();var Y6=require("yup");G();var ma=require("@terradharitri/sdk-dapp/constants/ledger.constants"),ws=K(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),po=require("yup"),Es=(0,po.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(p){let{ledger:i}=this.parent;return!(i&&p&&p.length&&!i.ledgerDataActive)}),xs=(0,po.string)().test({name:"hashSign",test:function(p){let{ledger:i,isGuarded:a}=this.parent;if(i){let{ledgerWithHashSign:u,ledgerWithGuardians:s}=(0,ws.default)(i.version);if(p&&p.length>300&&!u)return this.createError({message:`Data too long. You need at least DharitrI app version ${ma.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(a&&!s)return this.createError({message:`You need at least DharitrI app version ${ma.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),qs=[Es,xs],$6=qs.reduce((p,i)=>p.concat(i),(0,po.string)());G();var H6=require("@terradharitri/sdk-dapp/constants/index"),Z6=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),X6=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),J6=require("yup");G();var K6=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Q6=K(require("bignumber.js")),e8=require("yup");G();var r8=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),t8=K(require("bignumber.js")),o8=require("yup");G();var n8=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),a8=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),i8=K(require("bignumber.js")),l8=require("yup");G();var p8=K(require("bignumber.js")),c8=require("yup");G();var u8=require("@terradharitri/sdk-dapp/constants/index"),s8=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),d8=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),f8=K(require("bignumber.js")),m8=require("yup");G();var _8=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),h8=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),g8=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),v8=K(require("bignumber.js")),b8=require("yup");G();var y8=K(require("bignumber.js")),w8=require("yup");G();var E8=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),x8=require("yup");G();var q8=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),S8=require("yup");G();G();var k8=(0,gs.createContext)({});G();G();var Ss=K(require("react")),A8=require("formik"),B8=K(require("lodash/uniqBy"));G();G();G();var I8=K(require("axios"));G();G();var T8=K(require("axios"));G();G();var U8=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),C8=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),L8=K(require("axios")),O8=K(require("lodash/uniqBy"));G();var N8=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),R8=K(require("axios"));G();var M8=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),P8=K(require("axios"));G();G();var ks=K(require("react")),D8=(0,ks.createContext)({});G();G();var F8=require("react"),j8=require("@terradharitri/sdk-dapp/constants/index"),z8=require("@terradharitri/sdk-dapp/types/enums.types");G();var G8=(0,Ss.createContext)({});G();G();var V8=require("@terradharitri/sdk-dapp/constants/index"),W8=require("formik");G();G();var As=K(require("react")),Y8=require("@terradharitri/sdk-dapp/constants/index"),$8=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),H8=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Z8=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),X8=K(require("bignumber.js")),J8=require("formik");G();G();G();G();var K8=K(require("bignumber.js"));G();var Q8=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),e5=K(require("bignumber.js"));G();G();var r5=require("react"),t5=require("@terradharitri/sdk-dapp/constants/index"),o5=require("@terradharitri/sdk-dapp/utils/smartContracts"),n5=K(require("bignumber.js")),a5=require("formik");G();var i5=require("react");G();G();var l5=require("@terradharitri/sdk-dapp/constants/index"),p5=K(require("bignumber.js")),c5=(0,As.createContext)({}),u5=(0,ds.createContext)({});G();G();var Bs=K(require("react")),s5=require("formik"),d5=(0,Bs.createContext)({});G();G();var Is=K(require("react")),f5=require("formik");G();G();G();var m5=require("react"),_5=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),h5=K(require("lodash/uniqBy"));G();G();var g5=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),v5=require("@terradharitri/sdk-dapp/utils");G();var b5=require("react");G();var y5=require("react"),w5=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),E5=(0,Is.createContext)({});G();G();var Ts=K(require("react")),x5=require("formik");G();G();G();G();G();var q5=require("react"),S5=require("@terradharitri/sdk-dapp/utils");G();var k5=require("react"),A5=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");G();G();var B5=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),I5=K(require("axios"));G();var T5=K(require("axios")),U5=(0,Ts.createContext)({}),Us=(0,Aa.createContext)({});function Cs(){return(0,Aa.useContext)(Us)}G();var Ls=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ls));var _a={selectTokenContainer:"dapp-core-component__styles-module__selectTokenContainer"};G();G();var De=K(require("react")),Os=require("@fortawesome/free-solid-svg-icons"),Ns=require("@fortawesome/react-fontawesome"),Rs=K(require("@terradharitri/sdk-dapp/constants/index")),Ms=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Ps=K(require("classnames"));G();var Ds=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ds));var zr={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},Fs=(ls(),ya(Ea)).default,js=({RewaIcon:p,inDropdown:i=!1,isRewa:a,nftTokenDetails:u,nftType:s,token:_})=>{var d,n;let{name:w,identifier:y,balance:q,decimals:b}=_,E=((d=_.assets)==null?void 0:d.svgUrl)||((n=_.assets)==null?void 0:n.pngUrl)||"",B=E?28:20,[f,g]=(0,De.useState)(w);(0,De.useEffect)(()=>{var x;(x=u==null?void 0:u.uris)!=null&&x.some(N=>{let P=wa.Buffer.from(String(N),"base64").toString(),{found:O}=ms(P,u==null?void 0:u.scamInfo);return O})||g(w)},[w]);let v=De.default.createElement(Ns.FontAwesomeIcon,{icon:Os.faDiamond});s==_t.NftEnumType.NonFungibleDCDT&&(v=De.default.createElement("div",{className:"nft-type","data-testid":`${y}-type-nft`},"NFT")),s===_t.NftEnumType.SemiFungibleDCDT&&(v=De.default.createElement("div",{className:"nft-type","data-testid":`${y}-type-sft`},"SFT"));let h=!i&&s!==_t.NftEnumType.NonFungibleDCDT,S=De.default.createElement("div",{className:zr.tokenElementCircle},v);return E&&(S=De.default.createElement("img",{className:zr.tokenElementCircle,src:E,alt:w,height:B})),a&&(S=De.default.createElement("div",{className:zr.tokenElementCircle},p?De.default.createElement(p,{height:36}):De.default.createElement(Fs,{height:36}))),De.default.createElement("div",{className:(0,Ps.default)(ka.value,zr.tokenElement)},De.default.createElement("div",{className:zr.tokenElementWrapper},S),De.default.createElement("div",{"data-testid":"tokenName"},De.default.createElement("span",{"data-testid":`${y}-element`},De.default.createElement("span",null,f)," ",De.default.createElement("span",{className:zr.tokenElementIdentifier},y)),h&&De.default.createElement(Ms.FormatAmount,{rewaLabel:y,value:q||vs,digits:s===_t.NftEnumType.SemiFungibleDCDT?0:Rs.DIGITS,token:y,showLabel:!1,decimals:b,"data-testid":`${y}-balance`})))},zs=p=>wr.default.createElement("div",{className:`token-option ${p.isSelected?"is-selected":""}`,"data-testid":`${p.value}-option`},wr.default.createElement(Sa.components.Option,Je({},p))),Gs=({className:p,label:i})=>{let{formInfo:a,accountInfo:u,tokensInfo:s}=Cs(),{readonly:_}=a,{balance:d}=u,{getTokens:n,areTokensLoading:w,tokens:y,tokenId:q,rewaLabel:b,RewaIcon:E,tokenIdError:B,onChangeTokenId:f,isTokenIdInvalid:g}=s,v=({token:ne})=>wr.default.createElement(js,{inDropdown:!0,token:ne,isRewa:ne.identifier===b,RewaIcon:E}),h=[{name:"DharitrI eGold",identifier:b,balance:d,decimals:ps.DECIMALS,ticker:""},...y].map(ne=>({value:ne.identifier,label:ne.name,assets:ne.assets,token:ne}));function S(){return es(this,null,function*(){yield n()})}let x=ne=>{ne&&f(ne.value)},N=({value:ne,label:_e},he)=>{if(Boolean(he)){let de=he.trim().toLowerCase(),ve=be=>be.toLowerCase().indexOf(de)>-1;return ve(ne)||ve(_e)}return!0},P=window.getComputedStyle(document.documentElement),O=_s({docStyle:P});return wr.default.createElement("div",{className:(0,cs.default)(_a.selectTokenContainer,p)},i&&wr.default.createElement("label",{htmlFor:"tokenId","data-testid":"tokenIdLabel",className:_a.selectTokenLabel},i),wr.default.createElement(Sa.default,{className:"selectToken",classNamePrefix:"selectToken",components:{Option:zs},filterOption:N,formatOptionLabel:v,inputId:"tokenId",isDisabled:fs("tokenId",_),isLoading:w,name:"tokenId",onChange:x,onMenuOpen:S,openMenuOnFocus:!0,options:h,styles:p?{}:O,value:h.find(({value:ne})=>ne===q)||void 0}),g&&wr.default.createElement("div",{className:ka.error,"data-testid":"tokenIdError"},wr.default.createElement("small",null,B)))};});var ui=He((o3,ci)=>{"use strict";ye();var Vs=Object.create,Zr=Object.defineProperty,Ws=Object.defineProperties,Ys=Object.getOwnPropertyDescriptor,$s=Object.getOwnPropertyDescriptors,Hs=Object.getOwnPropertyNames,yt=Object.getOwnPropertySymbols,Zs=Object.getPrototypeOf,yo=Object.prototype.hasOwnProperty,Wa=Object.prototype.propertyIsEnumerable,Ta=(p,i,a)=>i in p?Zr(p,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):p[i]=a,Ve=(p,i)=>{for(var a in i||(i={}))yo.call(i,a)&&Ta(p,a,i[a]);if(yt)for(var a of yt(i))Wa.call(i,a)&&Ta(p,a,i[a]);return p},_r=(p,i)=>Ws(p,$s(i)),Xs=(p,i)=>{var a={};for(var u in p)yo.call(p,u)&&i.indexOf(u)<0&&(a[u]=p[u]);if(p!=null&&yt)for(var u of yt(p))i.indexOf(u)<0&&Wa.call(p,u)&&(a[u]=p[u]);return a},Ya=(p,i)=>()=>(p&&(i=p(p=0)),i),Et=(p,i)=>()=>(i||p((i={exports:{}}).exports,i),i.exports),wo=(p,i)=>{for(var a in i)Zr(p,a,{get:i[a],enumerable:!0})},$a=(p,i,a,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of Hs(i))!yo.call(p,s)&&s!==a&&Zr(p,s,{get:()=>i[s],enumerable:!(u=Ys(i,s))||u.enumerable});return p},Z=(p,i,a)=>(a=p!=null?Vs(Zs(p)):{},$a(i||!p||!p.__esModule?Zr(a,"default",{value:p,enumerable:!0}):a,p)),Eo=p=>$a(Zr({},"__esModule",{value:!0}),p),xt=(p,i,a)=>new Promise((u,s)=>{var _=w=>{try{n(a.next(w))}catch(y){s(y)}},d=w=>{try{n(a.throw(w))}catch(y){s(y)}},n=w=>w.done?u(w.value):Promise.resolve(w.value).then(_,d);n((a=a.apply(p,i)).next())}),Js=Et(p=>{"use strict";U(),p.byteLength=w,p.toByteArray=q,p.fromByteArray=B;var i=[],a=[],u=typeof Uint8Array!="undefined"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,d=s.length;_<d;++_)i[_]=s[_],a[s.charCodeAt(_)]=_;var _,d;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63;function n(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=f.indexOf("=");v===-1&&(v=g);var h=v===g?0:4-v%4;return[v,h]}function w(f){var g=n(f),v=g[0],h=g[1];return(v+h)*3/4-h}function y(f,g,v){return(g+v)*3/4-v}function q(f){var g,v=n(f),h=v[0],S=v[1],x=new u(y(f,h,S)),N=0,P=S>0?h-4:h,O;for(O=0;O<P;O+=4)g=a[f.charCodeAt(O)]<<18|a[f.charCodeAt(O+1)]<<12|a[f.charCodeAt(O+2)]<<6|a[f.charCodeAt(O+3)],x[N++]=g>>16&255,x[N++]=g>>8&255,x[N++]=g&255;return S===2&&(g=a[f.charCodeAt(O)]<<2|a[f.charCodeAt(O+1)]>>4,x[N++]=g&255),S===1&&(g=a[f.charCodeAt(O)]<<10|a[f.charCodeAt(O+1)]<<4|a[f.charCodeAt(O+2)]>>2,x[N++]=g>>8&255,x[N++]=g&255),x}function b(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function E(f,g,v){for(var h,S=[],x=g;x<v;x+=3)h=(f[x]<<16&16711680)+(f[x+1]<<8&65280)+(f[x+2]&255),S.push(b(h));return S.join("")}function B(f){for(var g,v=f.length,h=v%3,S=[],x=16383,N=0,P=v-h;N<P;N+=x)S.push(E(f,N,N+x>P?P:N+x));return h===1?(g=f[v-1],S.push(i[g>>2]+i[g<<4&63]+"==")):h===2&&(g=(f[v-2]<<8)+f[v-1],S.push(i[g>>10]+i[g>>4&63]+i[g<<2&63]+"=")),S.join("")}}),Ks=Et(p=>{U(),p.read=function(i,a,u,s,_){var d,n,w=_*8-s-1,y=(1<<w)-1,q=y>>1,b=-7,E=u?_-1:0,B=u?-1:1,f=i[a+E];for(E+=B,d=f&(1<<-b)-1,f>>=-b,b+=w;b>0;d=d*256+i[a+E],E+=B,b-=8);for(n=d&(1<<-b)-1,d>>=-b,b+=s;b>0;n=n*256+i[a+E],E+=B,b-=8);if(d===0)d=1-q;else{if(d===y)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,s),d=d-q}return(f?-1:1)*n*Math.pow(2,d-s)},p.write=function(i,a,u,s,_,d){var n,w,y,q=d*8-_-1,b=(1<<q)-1,E=b>>1,B=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=s?0:d-1,g=s?1:-1,v=a<0||a===0&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(w=isNaN(a)?1:0,n=b):(n=Math.floor(Math.log(a)/Math.LN2),a*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+E>=1?a+=B/y:a+=B*Math.pow(2,1-E),a*y>=2&&(n++,y/=2),n+E>=b?(w=0,n=b):n+E>=1?(w=(a*y-1)*Math.pow(2,_),n=n+E):(w=a*Math.pow(2,E-1)*Math.pow(2,_),n=0));_>=8;i[u+f]=w&255,f+=g,w/=256,_-=8);for(n=n<<_|w,q+=_;q>0;i[u+f]=n&255,f+=g,n/=256,q-=8);i[u+f-g]|=v*128}}),Qs=Et(p=>{"use strict";U();var i=Js(),a=Ks(),u=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=n,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var s=2147483647;p.kMaxLength=s,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function d(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return w(e,r,t)}n.poolSize=8192;function w(e,r,t){if(typeof e=="string")return E(e,r);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var l=v(e);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return w(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function q(e,r,t){return y(e),e<=0?d(e):r!==void 0?typeof t=="string"?d(e).fill(r,t):d(e).fill(r):d(e)}n.alloc=function(e,r,t){return q(e,r,t)};function b(e){return y(e),d(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return b(e)},n.allocUnsafeSlow=function(e){return b(e)};function E(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=x(e,r)|0,o=d(t),l=o.write(e,r);return l!==t&&(o=o.slice(0,l)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=d(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function f(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function v(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=d(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?d(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,l=0,c=Math.min(t,o);l<c;++l)if(e[l]!==r[l]){t=e[l],o=r[l];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),l=0;for(t=0;t<e.length;++t){var c=e[t];if(H(c,Uint8Array))l+c.length>o.length?n.from(c).copy(o,l):Uint8Array.prototype.set.call(o,c,l);else if(n.isBuffer(c))c.copy(o,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=c.length}return o};function x(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var l=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return qe(e).length;default:if(l)return o?-1:fe(e).length;r=(""+r).toLowerCase(),l=!0}}n.byteLength=x;function N(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return xe(this,r,t);case"latin1":case"binary":return Be(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function P(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)P(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)P(this,r,r+3),P(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)P(this,r,r+7),P(this,r+1,r+6),P(this,r+2,r+5),P(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):N.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},u&&(n.prototype[u]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,l){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),l===void 0&&(l=this.length),r<0||t>e.length||o<0||l>this.length)throw new RangeError("out of range index");if(o>=l&&r>=t)return 0;if(o>=l)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,l>>>=0,this===e)return 0;for(var c=l-o,m=t-r,k=Math.min(c,m),L=this.slice(o,l),A=e.slice(r,t),T=0;T<k;++T)if(L[T]!==A[T]){c=L[T],m=A[T];break}return c<m?-1:m<c?1:0};function O(e,r,t,o,l){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=l?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(l)return-1;t=e.length-1}else if(t<0)if(l)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,l);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,l);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,l){var c=1,m=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;c=2,m/=2,k/=2,t/=2}function L(Se,ke){return c===1?Se[ke]:Se.readUInt16BE(ke*c)}var A;if(l){var T=-1;for(A=t;A<m;A++)if(L(e,A)===L(r,T===-1?0:A-T)){if(T===-1&&(T=A),A-T+1===k)return T*c}else T!==-1&&(A-=A-T),T=-1}else for(t+k>m&&(t=m-k),A=t;A>=0;A--){for(var R=!0,ce=0;ce<k;ce++)if(L(e,A+ce)!==L(r,ce)){R=!1;break}if(R)return A}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return O(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return O(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var l=e.length-t;o?(o=Number(o),o>l&&(o=l)):o=l;var c=r.length;o>c/2&&(o=c/2);for(var m=0;m<o;++m){var k=parseInt(r.substr(m*2,2),16);if(me(k))return m;e[t+m]=k}return m}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Re(r),e,t,o)}function ve(e,r,t,o){return pe(qe(r),e,t,o)}function be(e,r,t,o){return pe(Me(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-r;if((t===void 0||t>l)&&(t=l),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var c=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return ve(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return be(this,e,r,t);default:if(c)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),c=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],l=r;l<t;){var c=e[l],m=null,k=c>239?4:c>223?3:c>191?2:1;if(l+k<=t){var L,A,T,R;switch(k){case 1:c<128&&(m=c);break;case 2:L=e[l+1],(L&192)===128&&(R=(c&31)<<6|L&63,R>127&&(m=R));break;case 3:L=e[l+1],A=e[l+2],(L&192)===128&&(A&192)===128&&(R=(c&15)<<12|(L&63)<<6|A&63,R>2047&&(R<55296||R>57343)&&(m=R));break;case 4:L=e[l+1],A=e[l+2],T=e[l+3],(L&192)===128&&(A&192)===128&&(T&192)===128&&(R=(c&15)<<18|(L&63)<<12|(A&63)<<6|T&63,R>65535&&R<1114112&&(m=R))}}m===null?(m=65533,k=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),l+=k}return Ee(o)}var ae=4096;function Ee(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function xe(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]&127);return o}function Be(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var l="",c=r;c<t;++c)l+=Pe[e[c]];return l}function Ae(e,r,t){for(var o=e.slice(r,t),l="",c=0;c<o.length-1;c+=2)l+=String.fromCharCode(o[c]+o[c+1]*256);return l}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function I(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e+--r],l=1;r>0&&(l*=256);)o+=this[e+--r]*l;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return l*=128,o>=l&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=r,l=1,c=this[e+--o];o>0&&(l*=256);)c+=this[e+--o]*l;return l*=128,c>=l&&(c-=Math.pow(2,8*r)),c},n.prototype.readInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!1,52,8)};function D(e,r,t,o,l,c){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>l||r<c)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=1,m=0;for(this[r]=e&255;++m<t&&(c*=256);)this[r+m]=e/c&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=t-1,m=1;for(this[r+c]=e&255;--c>=0&&(m*=256);)this[r+c]=e/m&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=0,m=1,k=0;for(this[r]=e&255;++c<t&&(m*=256);)e<0&&k===0&&this[r+c-1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=t-1,m=1,k=0;for(this[r+c]=e&255;--c>=0&&(m*=256);)e<0&&k===0&&this[r+c+1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,l,c){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function we(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),a.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return we(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return we(this,e,r,!1,t)};function se(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),a.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var l=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),l},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var l=e.charCodeAt(0);(o==="utf8"&&l<128||o==="latin1")&&(e=l)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var c;if(typeof e=="number")for(c=r;c<t;++c)this[c]=e;else{var m=n.isBuffer(e)?e:n.from(e,o),k=m.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<t-r;++c)this[c+r]=m[c%k]}return this};var Oe=/[^+/0-9A-Za-z-_]/g;function Ne(e){if(e=e.split("=")[0],e=e.trim().replace(Oe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,l=null,c=[],m=0;m<o;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!l){if(t>56319){(r-=3)>-1&&c.push(239,191,189);continue}else if(m+1===o){(r-=3)>-1&&c.push(239,191,189);continue}l=t;continue}if(t<56320){(r-=3)>-1&&c.push(239,191,189),l=t;continue}t=(l-55296<<10|t-56320)+65536}else l&&(r-=3)>-1&&c.push(239,191,189);if(l=null,t<128){if((r-=1)<0)break;c.push(t)}else if(t<2048){if((r-=2)<0)break;c.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;c.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;c.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return c}function Re(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Me(e,r){for(var t,o,l,c=[],m=0;m<e.length&&!((r-=2)<0);++m)t=e.charCodeAt(m),o=t>>8,l=t%256,c.push(l),c.push(o);return c}function qe(e){return i.toByteArray(Ne(e))}function pe(e,r,t,o){for(var l=0;l<o&&!(l+t>=r.length||l>=e.length);++l)r[l+t]=e[l];return l}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Pe=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,l=0;l<16;++l)r[o+l]=e[t]+e[l];return r}()}),ed=Et((p,i)=>{U();var a=i.exports={},u,s;function _(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?u=setTimeout:u=_}catch(h){u=_}try{typeof clearTimeout=="function"?s=clearTimeout:s=d}catch(h){s=d}})();function n(h){if(u===setTimeout)return setTimeout(h,0);if((u===_||!u)&&setTimeout)return u=setTimeout,setTimeout(h,0);try{return u(h,0)}catch(S){try{return u.call(null,h,0)}catch(x){return u.call(this,h,0)}}}function w(h){if(s===clearTimeout)return clearTimeout(h);if((s===d||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(h);try{return s(h)}catch(S){try{return s.call(null,h)}catch(x){return s.call(this,h)}}}var y=[],q=!1,b,E=-1;function B(){!q||!b||(q=!1,b.length?y=b.concat(y):E=-1,y.length&&f())}function f(){if(!q){var h=n(B);q=!0;for(var S=y.length;S;){for(b=y,y=[];++E<S;)b&&b[E].run();E=-1,S=y.length}b=null,q=!1,w(h)}}a.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)S[x-1]=arguments[x];y.push(new g(h,S)),y.length===1&&!q&&n(f)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={};function v(){}a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(h){return[]},a.binding=function(h){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(h){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}),rd,td,od,U=Ya(()=>{rd=Z(Qs()),td=Z(ed()),od=function(p){function i(){var u=this||self;return delete p.prototype.__magic__,u}if(typeof globalThis=="object")return globalThis;if(this)return i();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:i});var a=__magic__;return a}(Object)}),xo={};wo(xo,{default:()=>Ha});var gt,Ua,Ha,Za=Ya(()=>{"use strict";U(),gt=Z(require("react")),Ua=p=>gt.createElement("svg",Ve({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},p),gt.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),gt.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Ha=Ua}),Xa={};wo(Xa,{AmountSelect:()=>ni,AmountSelectInput:()=>qm});ci.exports=Eo(Xa);U();U();var nr=Z(require("react")),co=Z(require("classnames"));U();var nd=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(nd));var Hr={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};U();U();var ad=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ad));var Lr={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};U();U();U();var Fe=Z(require("react")),id=require("@terradharitri/sdk-dapp/utils/validation"),uo=Z(require("bignumber.js")),Ca=Z(require("classnames")),ld=require("react-number-format");U();var pd=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pd));var vt={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};U();U();var Or=require("@terradharitri/sdk-dapp/constants/index"),cd=require("@terradharitri/sdk-dapp/utils/validation"),Er=Z(require("bignumber.js")),ud=(p,i)=>{let a=i!=null?i:Or.DIGITS;if((0,cd.stringIsFloat)(p)){if(new Er.default(p).isZero())return"0";let u=new Er.default(p).toFormat(a);return u=parseFloat(u)>0?u:new Er.default(p).toFormat(Or.DIGITS),u=parseFloat(u)>0?u:new Er.default(p).toFormat(Or.DIGITS+2),u=parseFloat(u)>0?u:new Er.default(p).toFormat(Or.DIGITS+4),u=parseFloat(u)>0?u:new Er.default(p).toFormat(Or.DIGITS+6),u=parseFloat(u)>0?u:new Er.default(p).toFormat(Or.DIGITS+10),parseFloat(u)>0?u:new Er.default(p).toFormat(Or.DIGITS+14)}return"0"};U();var La=p=>p.replace(/,/g,"");U();var Oa=require("react"),sd={value:"",count:0},dd=(p,i)=>{let[a,u]=(0,Oa.useState)(sd);return(0,Oa.useEffect)(()=>{let s=setTimeout(()=>{u(p)},i);return()=>clearTimeout(s)},[p.count]),a};U();var fd=Z(require("bignumber.js")),md=p=>{let[i,a]=p.split(""),u=new fd.default(i).isZero();return Boolean(u&&a&&a!==".")},_d=500,Na=1e13,hd=({"data-testid":p,InfoDustComponent:i,disabled:a,handleBlur:u,handleChange:s,name:_,onDebounceChange:d,onFocus:n,onKeyDown:w,placeholder:y,required:q,usdPrice:b,value:E,usdValue:B,className:f,autoFocus:g,suffix:v})=>{let h=(0,Fe.useRef)(null),[S,x]=(0,Fe.useState)(),[N,P]=(0,Fe.useState)(!1),[O,ne]=(0,Fe.useState)({value:E,count:0}),[_e,he]=(0,Fe.useState)(),de=dd(O,_d),ve=re=>{re.stopPropagation(),P(!0);let ae=La(re.target.value),Ee=(0,uo.default)(ae).isLessThanOrEqualTo(Na);if((ae===""||Ee)&&(x(ae),re.target.value=ae,s(re),d)){let xe={value:ae,count:O.count+1};ne(xe)}},be=()=>{if(B)return he(`$${B}`);if(!b||!E)return he(void 0);let re=La(E);if(!(E!==""&&(0,id.stringIsFloat)(re))||re==="")return he(void 0);let ae=ud(new uo.default(re).times(b!=null?b:0).toString(10),2);he(`$${ae}`)},ie=({value:re,floatValue:ae})=>(!ae||(0,uo.default)(ae).isLessThanOrEqualTo(Na))&&!md(re);return(0,Fe.useEffect)(()=>{d&&N&&(P(!1),d(de.value))},[de]),(0,Fe.useEffect)(be,[E,B,b]),(0,Fe.useEffect)(()=>{E!==S&&x(E)},[E]),Fe.default.createElement("div",{ref:h,className:(0,Ca.default)(vt.amountHolder,{[vt.showUsdValue]:Boolean(_e)},f)},Fe.default.createElement(ld.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":p||_,decimalSeparator:".",disabled:Boolean(a),id:_,inputMode:"decimal",isAllowed:ie,name:_,onBlur:u,onChange:ve,onFocus:n,onKeyDown:w,placeholder:y,required:q,thousandSeparator:",",thousandsGroupStyle:"thousand",value:S,suffix:v,valueIsNumericString:!0,allowNegative:!1,autoFocus:g,className:(0,Ca.default)(Hr.input,vt.amountInput,{[Hr.disabled]:Boolean(a)})}),_e&&Fe.default.createElement("span",{className:vt.amountHolderUsd},Fe.default.createElement("small",{"data-testid":`tokenPrice_${b}`},_e!=="$0"?Fe.default.createElement(Fe.default.Fragment,null,"\u2248 "):Fe.default.createElement(Fe.default.Fragment,null),_e),i))},gd=(0,Fe.memo)(hd,(p,i)=>p.value===i.value&&p.usdPrice===i.usdPrice&&p.className===i.className&&p.disabled===i.disabled&&p.usdValue===i.usdValue);U();U();var Ra=Z(require("react"));U();U();var $r=Z(require("react")),vd=require("@fortawesome/free-solid-svg-icons"),bd=require("@fortawesome/react-fontawesome"),yd=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),wd=require("react-tooltip"),L5=require("react-tooltip/dist/react-tooltip.css");U();U();var Ja="5000000000000000",Ed="WREWA-bd4d79";U();var xd=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xd));var so={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},qd=({rewaLabel:p})=>$r.default.createElement("div",{className:so.infoDust},$r.default.createElement(wd.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:so.infoDustTooltip},"A minimal amount of"," ",$r.default.createElement(yd.FormatAmount,{rewaLabel:p,value:Ja,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),$r.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:so.infoDustTrigger},$r.default.createElement(bd.FontAwesomeIcon,{icon:vd.faInfoCircle,className:"i-icon"}))),Sd=({rewaLabel:p,amount:i,maxAmountMinusDust:a,isMaxClicked:u,tokenId:s})=>i===a&&u&&s===p?Ra.default.createElement("span",{style:{marginLeft:"0.2rem"}},Ra.default.createElement(qd,{rewaLabel:p})):null;U();U();var kd=Z(require("react")),Ad=require("@terradharitri/sdk-dapp/constants"),Ma=Z(require("bignumber.js")),Bd=Z(require("classnames"));U();var Pa=Z(require("bignumber.js")),Id=p=>{let i=new Pa.default(p!=null?p:"0"),a=new Pa.default(Ja),u=i.minus(a);return u.isGreaterThan(0)?u.toString(10):"0"};U();var Td=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Td));var Ud={max:"dapp-core-component__maxButton-module__max"};U();var Nr=require("@terradharitri/sdk-dapp/constants"),Cd=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Ld=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),qo=({amount:p="0",decimals:i=0,digits:a=Nr.DIGITS,addCommas:u=!1,showLastNonZeroDecimal:s=!1})=>{if(p==null||!(0,Ld.stringIsInteger)(p))return"0";let _=n=>(0,Cd.formatAmount)({input:p,digits:n,decimals:i,addCommas:u,showLastNonZeroDecimal:s}),d=_(a);return d=parseFloat(d)>0?d:_(Nr.DIGITS),d=parseFloat(d)>0?d:_(Nr.DIGITS+2),d=parseFloat(d)>0?d:_(Nr.DIGITS+4),d=parseFloat(d)>0?d:_(Nr.DIGITS+6),d=parseFloat(d)>0?d:_(Nr.DIGITS+10),parseFloat(d)>0?d:_(Nr.DIGITS+14)},Od=({token:p,rewaLabel:i,inputAmount:a,className:u,onMaxClick:s})=>{var _;let d=(p==null?void 0:p.identifier)===i,n=(_=p==null?void 0:p.balance)!=null?_:"0";if(n==="0")return null;let w=qo({amount:d?Id(n):n,decimals:(p==null?void 0:p.decimals)||Ad.DECIMALS}),y=new Ma.default(a).isEqualTo(new Ma.default(w)),q=b=>{b.preventDefault(),s==null||s(w)};return y?null:kd.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,Bd.default)(Ud.max,u),onClick:q,onMouseDown:b=>{b.preventDefault()}},"Max")};U();U();var xr=Z(require("react")),Nd=Z(require("classnames")),Rd=Z(require("react-select"));U();var Md={D:"devnet",T:"testnet",1:"mainnet"},Pd={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function Dd(p){return Md[p]}function Fd(p){return Pd[p]||Ed}var Ka={};wo(Ka,{Control:()=>of,IndicatorsContainer:()=>df,Input:()=>$d,Menu:()=>ef,MenuList:()=>Xd,DharitrIIcon:()=>ri,Placeholder:()=>pf,SmallLoader:()=>Gd,ValueComponent:()=>Qa,getOption:()=>ti,getSingleValue:()=>oi,getValueContainer:()=>ei});U();U();var Da=Z(require("react")),jd=require("@fortawesome/free-solid-svg-icons"),zd=require("@fortawesome/react-fontawesome"),Gd=({show:p,color:i})=>p?Da.default.createElement("div",{className:"d-flex"},Da.default.createElement(zd.FontAwesomeIcon,{icon:jd.faSpinner,className:`fa-spin fast-spin ${i||"text-primary"}`})):null;U();U();var Vd=Z(require("react")),Wd=require("react-select");U();var Yd=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yd));var ue={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},$d=p=>Vd.default.createElement(Wd.components.Input,_r(Ve({},p),{className:ue.dropdown,"data-testid":"tokenSelectInput"}));U();var Hd=Z(require("react")),Zd=require("react-select"),Xd=p=>{let i=p,{rx:a}=i,u=Xs(i,["rx"]);return Hd.default.createElement(Zd.components.MenuList,_r(Ve({},u),{className:ue.list}))};U();var fo=Z(require("react")),Jd=require("@fortawesome/free-solid-svg-icons"),Kd=require("@fortawesome/react-fontawesome"),Qd=require("react-select"),ef=p=>fo.default.createElement(Qd.components.Menu,_r(Ve({},p),{className:ue.menu}),p.selectProps.isLoading?fo.default.createElement("div",{className:ue.loading},fo.default.createElement(Kd.FontAwesomeIcon,{icon:Jd.faCircleNotch,className:"fa-spin",size:"lg"})):p.children);U();var rf=Z(require("react")),tf=require("react-select"),of=p=>rf.default.createElement(tf.components.Control,_r(Ve({},p),{className:ue.control}));U();var nf=Z(require("react")),af=Z(require("classnames")),lf=require("react-select"),pf=p=>nf.default.createElement(lf.components.Placeholder,_r(Ve({},p),{className:(0,af.default)(ue.placeholder,{[ue.focused]:p.isFocused})}));U();var cf=Z(require("react")),uf=Z(require("classnames")),sf=require("react-select"),df=p=>cf.default.createElement(sf.components.IndicatorsContainer,_r(Ve({},p),{className:(0,uf.default)(ue.indicator,{[ue.expanded]:p.selectProps.menuIsOpen})}));U();var Ke=Z(require("react")),ff=require("@fortawesome/free-solid-svg-icons"),mf=require("@fortawesome/react-fontawesome"),_f=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),hf=Z(require("classnames")),gf=require("react-select"),vf=(Za(),Eo(xo)).default,Qa=({RewaIcon:p,tokenId:i,icon:a})=>{let{isRewa:u}=(0,_f.getIdentifierType)(i);return u?Ke.default.createElement("span",{className:ue.asset},p?Ke.default.createElement(p,{className:ue.diamond}):Ke.default.createElement(vf,{className:ue.diamond})):a?Ke.default.createElement("img",{src:a,className:ue.asset}):Ke.default.createElement(mf.FontAwesomeIcon,{icon:ff.faDiamond,className:ue.asset})},bf=({children:p})=>Ke.default.createElement("div",{className:ue.wrapper},p),ei=(p,i,a)=>u=>{var s,_;let{selectProps:d,isDisabled:n,children:w}=u,y=d.value,q=(_=(s=y==null?void 0:y.assets)==null?void 0:s.svgUrl)!=null?_:null,b=(0,Ke.useMemo)(()=>{let E=String(y==null?void 0:y.token.usdPrice);return E!=null&&E.includes("$")?y==null?void 0:y.token.usdPrice:`$${y==null?void 0:y.token.usdPrice}`},[y==null?void 0:y.token.usdPrice]);return Ke.default.createElement(gf.components.ValueContainer,_r(Ve({},u),{className:ue.container}),Ke.default.createElement("div",{className:(0,hf.default)(ue.icon,i)},Ke.default.createElement(Qa,{RewaIcon:a,rewaLabel:p,icon:q,isDisabled:n,tokenId:y==null?void 0:y.value})),Ke.default.createElement("div",{className:ue.payload},Ke.default.createElement(bf,null,w,(y==null?void 0:y.token.usdPrice)&&Ke.default.createElement("small",{className:ue.price},b))))};U();var Ue=Z(require("react")),yf=require("@fortawesome/free-solid-svg-icons"),wf=require("@fortawesome/react-fontawesome"),Ef=require("@terradharitri/sdk-dapp/constants"),xf=require("@terradharitri/sdk-dapp/UI/UsdValue"),qf=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Sf=Z(require("classnames")),kf=require("react-select");U();U();var bt=Z(require("react"));U();var Af=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Af));var Bf={highlight:"dapp-core-component__styles-modules__highlight"},If=({highlight:p,text:i=""})=>{let a=i.split(" "),u=p.toLowerCase(),s=new RegExp(`(${u})`,"gi"),_=a.map(d=>d.split(s).filter(n=>n));return bt.default.createElement("span",{className:Bf.highlight},_.map((d,n)=>{let w=`${d}-${n}`;return bt.default.createElement("span",{key:w},d.map((y,q)=>{let b=y.toLowerCase()===u,E=u&&b,B=`${y}-${q}`;return E?bt.default.createElement("strong",{key:B},y):bt.default.createElement("span",{key:B},y)}))}))},{default:ri}=(Za(),Eo(xo)),ti=({RewaIcon:p,TokenTickerIcon:i,showBalanceUsdValue:a,showTokenPrice:u})=>s=>{var _,d,n,w;let{data:y,isSelected:q,isFocused:b,isDisabled:E,selectProps:B}=s,f=y,{isRewa:g}=(0,qf.getIdentifierType)(f.value),v=f.token.assets?f.token.assets.svgUrl:null,h=qo({amount:f.token.balance,decimals:f.token.decimals||Ef.DECIMALS,addCommas:!0}),S=(d=(_=f.token)==null?void 0:_.usdPrice)==null?void 0:d.toString(),x=(w=(n=f.token)==null?void 0:n.valueUSD)==null?void 0:w.toString();return Ue.default.createElement("div",{"data-testid":`${s.value}-option`},Ue.default.createElement(kf.components.Option,_r(Ve({},s),{className:(0,Sf.default)(ue.option,{[ue.selected]:q||b,[ue.disabled]:E})}),Ue.default.createElement("div",{className:ue.image},g?Ue.default.createElement("span",{className:ue.icon},p?Ue.default.createElement(p,null):Ue.default.createElement(ri,null)):v?Ue.default.createElement("img",{src:v,className:ue.icon}):Ue.default.createElement("span",{className:ue.icon},Ue.default.createElement(wf.FontAwesomeIcon,{icon:yf.faDiamond,className:ue.diamond}))),Ue.default.createElement("div",{className:ue.info},Ue.default.createElement("div",{className:ue.left},Ue.default.createElement("div",{className:ue.ticker},Ue.default.createElement("span",{className:ue.value},B.inputValue?Ue.default.createElement(If,{text:f.token.ticker,highlight:B.inputValue}):f.token.ticker),i&&Ue.default.createElement(i,{token:f.token})),u&&Ue.default.createElement("small",{className:ue.price},S)),Ue.default.createElement("div",{className:ue.right},Ue.default.createElement("span",{className:ue.value},h),a&&x&&Ue.default.createElement(xf.UsdValue,{usd:1,decimals:4,amount:x,"data-testid":"token-price-usd-value",className:ue.price,addEqualSign:!1}))),Ue.default.createElement("div",{className:ue.children},s.children)))};U();var mo=Z(require("react")),Tf=Z(require("classnames")),Uf=require("react-select"),oi=p=>i=>{let{selectProps:a,children:u}=i,s=a.value;return mo.default.createElement(Uf.components.SingleValue,_r(Ve({},i),{className:(0,Tf.default)(ue.single,{[ue.focused]:i.selectProps.menuIsOpen})}),mo.default.createElement("div",{className:ue.ticker},u,p&&mo.default.createElement(p,{token:s==null?void 0:s.token})))},{Menu:Cf,Control:Lf,Input:Of,MenuList:Nf,IndicatorsContainer:Rf,Placeholder:Mf}=Ka,Pf=p=>{let{name:i,options:a,isLoading:u=!1,className:s="",noOptionsMessage:_="No Tokens",disabledOption:d,rewaLabel:n,RewaIcon:w,disabled:y,value:q,onBlur:b,onFocus:E,onChange:B,onMenuOpen:f,chainId:g,wrapperClassName:v="",showTokenPrice:h=!1,showBalanceUsdValue:S=!1,selectedTokenIconClassName:x,TokenTickerIcon:N}=p,P=(0,xr.useRef)(null),O=[n,Fd(g)],ne=(0,xr.useMemo)(()=>ti({rewaLabel:n,RewaIcon:w,showTokenPrice:h,showBalanceUsdValue:S,TokenTickerIcon:N}),[]),_e=(0,xr.useMemo)(()=>ei(n,x,w),[]),he=(0,xr.useMemo)(()=>oi(N),[]);(0,xr.useEffect)(()=>{let ie=a.find(ae=>ae.value===(q==null?void 0:q.value)),re=(ie==null?void 0:ie.token.balance)===(q==null?void 0:q.token.balance);!ie||re||B(ie)},[a]);let de=ie=>O.includes(ie),ve=ie=>{var re;let ae=ie.value===(d==null?void 0:d.value),Ee=de(ie.value),xe=de((re=d==null?void 0:d.value)!=null?re:"");return ae||Ee&&xe},be=(ie,re)=>{let ae=ie.data.token.ticker?ie.data.token.ticker.toLowerCase().includes(re.toLowerCase()):!1,Ee=ie.data.token.name.toLowerCase().includes(re.toLowerCase());return Boolean(re)?ae||Ee:!0};return xr.default.createElement("div",{"data-testid":`${i}Select`,className:`${v} ${u?"select-holder-loading":""}`},xr.default.createElement("label",{htmlFor:i,"data-testid":"tokenIdLabel",className:ue.label},"Token"),xr.default.createElement(Rd.default,{ref:P,inputId:i,name:i,options:a,openMenuOnFocus:!0,isDisabled:y,isLoading:u,value:q,isOptionDisabled:ve,onBlur:b,filterOption:be,onFocus:E,onChange:ie=>{B(ie),P&&P.current!==null&&P.current.blur()},isSearchable:p.isSearchable,maxMenuHeight:260,onMenuOpen:f,noOptionsMessage:()=>_,className:(0,Nd.default)(ue.select,s,{[ue.disabled]:p.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:Cf,Control:Lf,Input:Of,MenuList:Nf,IndicatorsContainer:Rf,ValueContainer:_e,Placeholder:Mf,Option:ne,SingleValue:he}}))};U();U();var Df=Z(require("react")),Ff=Z(require("classnames")),jf=({hasErrors:p,className:i,error:a,"data-testid":u})=>p?Df.default.createElement("div",{className:(0,Ff.default)(Hr.error,i),"data-testid":u},a):null;U();U();var _o=Z(require("react")),zf=Z(require("classnames"));U();var Gf=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gf));var ho={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"},Vf=({label:p,value:i,className:a,token:u,"data-testid":s,"data-value":_})=>_o.default.createElement("div",{"data-testid":s,"data-value":_,className:(0,zf.default)(ho.balance,a)},_o.default.createElement("span",{className:ho.label},p,": "),_o.default.createElement("span",{className:ho.value},i)," ",u==null?void 0:u.ticker),ni=({className:p,label:i,name:a,wrapperControlsClassName:u,tokenSelectProps:s,tokenBalanceProps:_,amountInputProps:d,amountErrorProps:n,maxButtonProps:w,readonly:y})=>nr.default.createElement("div",{className:(0,co.default)(Lr.amount,p)},nr.default.createElement("div",{className:Lr.label},i&&nr.default.createElement("label",{htmlFor:a,className:Hr.label,"data-testid":"amountLabel"},i),nr.default.createElement(Vf,Ve({},_))),nr.default.createElement("div",{className:(0,co.default)(Lr.wrapper,u,{[Lr.error]:d.isInvalid||s.isInvalid||n.hasErrors,[Lr.disabled]:y})},nr.default.createElement(gd,Ve({},d)),nr.default.createElement("div",{className:(0,co.default)(Lr.interaction,w.wrapperClassName)},w.isMaxButtonVisible&&nr.default.createElement(Od,Ve({},w)),nr.default.createElement("div",{className:Lr.select},nr.default.createElement(Pf,Ve({},s))))),nr.default.createElement(jf,Ve({},n)));U();var go=Z(require("react")),Wf=require("@terradharitri/sdk-dapp/constants"),Yf=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");U();var O5=Z(require("react")),N5=require("@terradharitri/sdk-dapp/constants/index");U();U();U();var R5=Z(require("axios"));U();U();U();var $f=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");U();var Hf=require("@terradharitri/sdk-dapp/constants/index");function Zf(p){let i=Dd(p),a=Hf.fallbackNetworkConfigurations[i].apiAddress;if(!a)throw"Could not extract api address for environment, check if you have a valid chainID";return a}function Xf(p){return xt(this,null,function*(){let i=Zf(p);return yield(0,$f.getServerConfiguration)(i)})}U();var wt={value:null};function Jf(p){return wt.value={baseURL:p.apiAddress,timeout:Number(p.apiTimeout)},wt.value}function Kf(p){return xt(this,null,function*(){if(wt.value!=null)return wt.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),p!=null){let a=yield Xf(p);return Jf(a)}let i="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(i),i})}U();U();var Qf=Z(require("axios"));function em(){return xt(this,null,function*(){try{let p=yield Kf(),{data:i}=yield Qf.default.get("economics",p);return i}catch(p){return console.error("err fetching economics info",p),null}})}U();U();var M5=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),P5=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),D5=Z(require("axios")),F5=Z(require("lodash/uniqBy"));U();var j5=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),z5=Z(require("axios"));U();U();U();var rm=require("@terradharitri/sdk-dapp/types/tokens.types");U();U();U();U();var G5=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),V5=Z(require("axios"));U();U();var W5=Z(require("axios"));U();var tm=Z(require("react")),Y5=(0,tm.createContext)({});U();U();var om=Z(require("react")),$5=require("@terradharitri/sdk-dapp/constants/index"),H5=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Z5=Z(require("bignumber.js")),X5=require("formik");U();U();U();var J5=require("bech32");U();U();U();var nm=(p,i)=>typeof i=="boolean"?i:Array.isArray(i)&&i.includes(p);U();U();U();var K5=require("@terradharitri/sdk-dapp/constants"),Q5=require("@terradharitri/sdk-dapp/utils/account/getAccount");U();U();var e4=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");U();var r4=require("@terradharitri/sdk-dapp/utils/buildUrlParams");U();var t4=Z(require("anchorme"));U();U();var o4=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),am=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),n4=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),a4=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");U();U();var ai=Z(require("react")),i4=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),l4=require("formik");U();U();var p4=require("@terradharitri/sdk-dapp/constants/index"),c4=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),u4=Z(require("bignumber.js"));U();U();var s4=require("@terradharitri/sdk-dapp/constants/index");U();var d4=require("@terradharitri/sdk-dapp/constants/index");U();var f4=require("@terradharitri/sdk-dapp/constants/index"),m4=Z(require("bignumber.js"));U();var _4=require("@terradharitri/sdk-dapp/constants/index");U();var h4=require("@terradharitri/sdk-dapp/constants/index");U();U();var g4=require("@terradharitri/sdk-core"),v4=require("@terradharitri/sdk-dapp/constants/index"),b4=Z(require("bignumber.js"));U();U();var y4=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");U();var w4=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");U();var E4=Z(require("bignumber.js"));U();var x4=require("@terradharitri/sdk-dapp/constants/index"),q4=require("@terradharitri/sdk-dapp/utils/smartContracts"),S4=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),k4=Z(require("bignumber.js"));U();var A4=Z(require("bignumber.js"));U();var vo=require("@terradharitri/sdk-dapp/constants/index"),im=Z(require("bignumber.js")),Fa,ja,za,lm=(0,am.formatAmount)({input:String((Fa=vo.GAS_PRICE)!=null?Fa:1e9),decimals:(ja=vo.DECIMALS)!=null?ja:18,showLastNonZeroDecimal:!0,digits:(za=vo.DIGITS)!=null?za:4}),B4=new im.default(lm).times(10).toString(10);U();var I4=require("@terradharitri/sdk-dapp/constants/index"),T4=Z(require("bignumber.js"));U();var U4=Z(require("bignumber.js"));U();U();var C4=require("yup");U();var Ga=require("@terradharitri/sdk-dapp/constants/ledger.constants"),pm=Z(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),So=require("yup"),cm=(0,So.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(p){let{ledger:i}=this.parent;return!(i&&p&&p.length&&!i.ledgerDataActive)}),um=(0,So.string)().test({name:"hashSign",test:function(p){let{ledger:i,isGuarded:a}=this.parent;if(i){let{ledgerWithHashSign:u,ledgerWithGuardians:s}=(0,pm.default)(i.version);if(p&&p.length>300&&!u)return this.createError({message:`Data too long. You need at least DharitrI app version ${Ga.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(a&&!s)return this.createError({message:`You need at least DharitrI app version ${Ga.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),sm=[cm,um],L4=sm.reduce((p,i)=>p.concat(i),(0,So.string)());U();var O4=require("@terradharitri/sdk-dapp/constants/index"),N4=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),R4=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),M4=require("yup");U();var P4=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),D4=Z(require("bignumber.js")),F4=require("yup");U();var j4=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),z4=Z(require("bignumber.js")),G4=require("yup");U();var V4=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),W4=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Y4=Z(require("bignumber.js")),$4=require("yup");U();var H4=Z(require("bignumber.js")),Z4=require("yup");U();var X4=require("@terradharitri/sdk-dapp/constants/index"),J4=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),K4=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Q4=Z(require("bignumber.js")),eE=require("yup");U();var rE=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),tE=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),oE=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),nE=Z(require("bignumber.js")),aE=require("yup");U();var iE=Z(require("bignumber.js")),lE=require("yup");U();var pE=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),cE=require("yup");U();var uE=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),sE=require("yup");U();U();var dm=(0,ai.createContext)({});function fm(){return(0,ai.useContext)(dm)}U();U();var mm=Z(require("react")),dE=require("formik"),fE=Z(require("lodash/uniqBy"));U();U();var ii=Z(require("react")),_m=(0,ii.createContext)({});function li(){return(0,ii.useContext)(_m)}U();U();var Va=require("react"),hm=require("@terradharitri/sdk-dapp/constants/index"),bo=require("@terradharitri/sdk-dapp/types/enums.types");function gm(){let{networkConfig:p}=li(),[i,a]=(0,Va.useState)(0);function u(){return xt(this,null,function*(){let s=yield em(),_=(s==null?void 0:s.price)||0;a(_)})}return(0,Va.useEffect)(()=>{![bo.EnvironmentsEnum.mainnet,bo.EnvironmentsEnum.testnet,bo.EnvironmentsEnum.devnet].includes(p==null?void 0:p.id)||u()},[p==null?void 0:p.id]),{rewaLabel:p.rewaLabel,rewaPriceInUsd:i,digits:hm.DIGITS}}U();var mE=(0,mm.createContext)({});U();U();var _E=require("@terradharitri/sdk-dapp/constants/index"),hE=require("formik");U();U();var vm=Z(require("react")),gE=require("@terradharitri/sdk-dapp/constants/index"),vE=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),bE=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),yE=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),wE=Z(require("bignumber.js")),EE=require("formik");U();U();U();U();var xE=Z(require("bignumber.js"));U();var qE=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),SE=Z(require("bignumber.js"));U();U();var kE=require("react"),AE=require("@terradharitri/sdk-dapp/constants/index"),BE=require("@terradharitri/sdk-dapp/utils/smartContracts"),IE=Z(require("bignumber.js")),TE=require("formik");U();var UE=require("react");U();U();var CE=require("@terradharitri/sdk-dapp/constants/index"),LE=Z(require("bignumber.js")),OE=(0,vm.createContext)({}),NE=(0,om.createContext)({});U();U();var bm=Z(require("react")),RE=require("formik"),ME=(0,bm.createContext)({});U();U();var ym=Z(require("react")),PE=require("formik");U();U();U();var DE=require("react"),FE=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),jE=Z(require("lodash/uniqBy"));U();U();var zE=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),GE=require("@terradharitri/sdk-dapp/utils");U();var VE=require("react");U();var WE=require("react"),YE=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),$E=(0,ym.createContext)({});U();U();var wm=Z(require("react")),HE=require("formik");U();U();U();U();U();var ZE=require("react"),XE=require("@terradharitri/sdk-dapp/utils");U();var JE=require("react"),KE=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");U();U();var QE=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),e3=Z(require("axios"));U();var r3=Z(require("axios")),t3=(0,wm.createContext)({});U();var pi=Z(require("react")),Em=(0,pi.createContext)({});function xm(){return(0,pi.useContext)(Em)}var qm=()=>{var p,i;let{checkInvalid:a}=fm(),{tokensInfo:u,amountInfo:s,formInfo:_}=xm(),{readonly:d}=_,{networkConfig:{rewaLabel:n,chainId:w}}=li(),{rewaPriceInUsd:y}=gm(),{amount:q,onBlur:b,onChange:E,onMaxClicked:B,error:f,isInvalid:g,onFocus:v,maxAmountAvailable:h,isMaxClicked:S,isMaxButtonVisible:x,maxAmountMinusDust:N}=s,{allAvailableTokens:P,areTokensLoading:O,getTokens:ne,isTokenIdInvalid:_e,RewaIcon:he,nft:de,onChangeTokenId:ve,tokenDetails:be,tokenId:ie,tokenIdError:re}=u,ae=P.map(se=>({value:se.identifier,label:String(se.ticker),assets:se.assets,token:se})),{isRewa:Ee}=(0,Yf.getIdentifierType)(ie),xe=ae.find(({value:se})=>se===ie),Be={id:"tokenId",value:xe,name:"tokenId",isLoading:O,options:ae,isSearchable:!0,onChange:se=>{se&&(ve(se.value),E(""))},onMenuOpen:ne,disabled:nm("tokenId",d),error:re,isInvalid:_e,rewaLabel:n,chainId:w,RewaIcon:he},Ie=(0,go.useMemo)(()=>go.default.createElement(Sd,{amount:q,rewaLabel:n,maxAmountMinusDust:N,tokenId:ie,isMaxClicked:S}),[q,n,N,ie,S]),Ae={name:"amount",required:!0,value:q,placeholder:"Amount",handleBlur:b,"data-testid":"amount",handleChange:E,onFocus:v,usdPrice:Ee?y:void 0,error:f,isInvalid:g,InfoDustComponent:Ie},I={token:be,inputAmount:q,onMaxClick:B,isMaxClicked:S,isMaxButtonVisible:x},D=a("amount")&&!Ae.value,ge={hasErrors:Ae.isInvalid||Be.isInvalid||D,error:Ae.error||Be.error,className:Hr.error,"data-testid":Ae.error?"amountError":"tokenIdError"},we={"data-testid":`available-${(p=de==null?void 0:de.identifier)!=null?p:ie}`,"data-value":`${h} ${(i=de==null?void 0:de.identifier)!=null?i:ie}`,label:"Available",token:xe==null?void 0:xe.token,value:qo({amount:be.balance,decimals:be.decimals||Wf.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(de==null?void 0:de.type)===rm.NftEnumType.NonFungibleDCDT?null:go.default.createElement(ni,{name:"tokenId",amountErrorProps:ge,tokenSelectProps:Be,amountInputProps:Ae,tokenBalanceProps:we,maxButtonProps:I,label:"Amount",readonly:d})};});var qi=He((Rq,xi)=>{"use strict";ye();var Sm=Object.create,St=Object.defineProperty,km=Object.getOwnPropertyDescriptor,Am=Object.getOwnPropertyNames,Bm=Object.getPrototypeOf,Im=Object.prototype.hasOwnProperty,Tm=(p,i)=>()=>(p&&(i=p(p=0)),i),kt=(p,i)=>()=>(i||p((i={exports:{}}).exports,i),i.exports),Um=(p,i)=>{for(var a in i)St(p,a,{get:i[a],enumerable:!0})},bi=(p,i,a,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of Am(i))!Im.call(p,s)&&s!==a&&St(p,s,{get:()=>i[s],enumerable:!(u=km(i,s))||u.enumerable});return p},oe=(p,i,a)=>(a=p!=null?Sm(Bm(p)):{},bi(i||!p||!p.__esModule?St(a,"default",{value:p,enumerable:!0}):a,p)),Cm=p=>bi(St({},"__esModule",{value:!0}),p),Lm=kt(p=>{"use strict";F(),p.byteLength=w,p.toByteArray=q,p.fromByteArray=B;var i=[],a=[],u=typeof Uint8Array!="undefined"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,d=s.length;_<d;++_)i[_]=s[_],a[s.charCodeAt(_)]=_;var _,d;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63;function n(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=f.indexOf("=");v===-1&&(v=g);var h=v===g?0:4-v%4;return[v,h]}function w(f){var g=n(f),v=g[0],h=g[1];return(v+h)*3/4-h}function y(f,g,v){return(g+v)*3/4-v}function q(f){var g,v=n(f),h=v[0],S=v[1],x=new u(y(f,h,S)),N=0,P=S>0?h-4:h,O;for(O=0;O<P;O+=4)g=a[f.charCodeAt(O)]<<18|a[f.charCodeAt(O+1)]<<12|a[f.charCodeAt(O+2)]<<6|a[f.charCodeAt(O+3)],x[N++]=g>>16&255,x[N++]=g>>8&255,x[N++]=g&255;return S===2&&(g=a[f.charCodeAt(O)]<<2|a[f.charCodeAt(O+1)]>>4,x[N++]=g&255),S===1&&(g=a[f.charCodeAt(O)]<<10|a[f.charCodeAt(O+1)]<<4|a[f.charCodeAt(O+2)]>>2,x[N++]=g>>8&255,x[N++]=g&255),x}function b(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function E(f,g,v){for(var h,S=[],x=g;x<v;x+=3)h=(f[x]<<16&16711680)+(f[x+1]<<8&65280)+(f[x+2]&255),S.push(b(h));return S.join("")}function B(f){for(var g,v=f.length,h=v%3,S=[],x=16383,N=0,P=v-h;N<P;N+=x)S.push(E(f,N,N+x>P?P:N+x));return h===1?(g=f[v-1],S.push(i[g>>2]+i[g<<4&63]+"==")):h===2&&(g=(f[v-2]<<8)+f[v-1],S.push(i[g>>10]+i[g>>4&63]+i[g<<2&63]+"=")),S.join("")}}),Om=kt(p=>{F(),p.read=function(i,a,u,s,_){var d,n,w=_*8-s-1,y=(1<<w)-1,q=y>>1,b=-7,E=u?_-1:0,B=u?-1:1,f=i[a+E];for(E+=B,d=f&(1<<-b)-1,f>>=-b,b+=w;b>0;d=d*256+i[a+E],E+=B,b-=8);for(n=d&(1<<-b)-1,d>>=-b,b+=s;b>0;n=n*256+i[a+E],E+=B,b-=8);if(d===0)d=1-q;else{if(d===y)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,s),d=d-q}return(f?-1:1)*n*Math.pow(2,d-s)},p.write=function(i,a,u,s,_,d){var n,w,y,q=d*8-_-1,b=(1<<q)-1,E=b>>1,B=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=s?0:d-1,g=s?1:-1,v=a<0||a===0&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(w=isNaN(a)?1:0,n=b):(n=Math.floor(Math.log(a)/Math.LN2),a*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+E>=1?a+=B/y:a+=B*Math.pow(2,1-E),a*y>=2&&(n++,y/=2),n+E>=b?(w=0,n=b):n+E>=1?(w=(a*y-1)*Math.pow(2,_),n=n+E):(w=a*Math.pow(2,E-1)*Math.pow(2,_),n=0));_>=8;i[u+f]=w&255,f+=g,w/=256,_-=8);for(n=n<<_|w,q+=_;q>0;i[u+f]=n&255,f+=g,n/=256,q-=8);i[u+f-g]|=v*128}}),Nm=kt(p=>{"use strict";F();var i=Lm(),a=Om(),u=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=n,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var s=2147483647;p.kMaxLength=s,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function d(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return w(e,r,t)}n.poolSize=8192;function w(e,r,t){if(typeof e=="string")return E(e,r);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var l=v(e);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return w(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function q(e,r,t){return y(e),e<=0?d(e):r!==void 0?typeof t=="string"?d(e).fill(r,t):d(e).fill(r):d(e)}n.alloc=function(e,r,t){return q(e,r,t)};function b(e){return y(e),d(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return b(e)},n.allocUnsafeSlow=function(e){return b(e)};function E(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=x(e,r)|0,o=d(t),l=o.write(e,r);return l!==t&&(o=o.slice(0,l)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=d(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function f(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function v(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=d(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?d(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,l=0,c=Math.min(t,o);l<c;++l)if(e[l]!==r[l]){t=e[l],o=r[l];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),l=0;for(t=0;t<e.length;++t){var c=e[t];if(H(c,Uint8Array))l+c.length>o.length?n.from(c).copy(o,l):Uint8Array.prototype.set.call(o,c,l);else if(n.isBuffer(c))c.copy(o,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=c.length}return o};function x(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var l=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return qe(e).length;default:if(l)return o?-1:fe(e).length;r=(""+r).toLowerCase(),l=!0}}n.byteLength=x;function N(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return xe(this,r,t);case"latin1":case"binary":return Be(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function P(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)P(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)P(this,r,r+3),P(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)P(this,r,r+7),P(this,r+1,r+6),P(this,r+2,r+5),P(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):N.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},u&&(n.prototype[u]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,l){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),l===void 0&&(l=this.length),r<0||t>e.length||o<0||l>this.length)throw new RangeError("out of range index");if(o>=l&&r>=t)return 0;if(o>=l)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,l>>>=0,this===e)return 0;for(var c=l-o,m=t-r,k=Math.min(c,m),L=this.slice(o,l),A=e.slice(r,t),T=0;T<k;++T)if(L[T]!==A[T]){c=L[T],m=A[T];break}return c<m?-1:m<c?1:0};function O(e,r,t,o,l){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=l?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(l)return-1;t=e.length-1}else if(t<0)if(l)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,l);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,l);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,l){var c=1,m=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;c=2,m/=2,k/=2,t/=2}function L(Se,ke){return c===1?Se[ke]:Se.readUInt16BE(ke*c)}var A;if(l){var T=-1;for(A=t;A<m;A++)if(L(e,A)===L(r,T===-1?0:A-T)){if(T===-1&&(T=A),A-T+1===k)return T*c}else T!==-1&&(A-=A-T),T=-1}else for(t+k>m&&(t=m-k),A=t;A>=0;A--){for(var R=!0,ce=0;ce<k;ce++)if(L(e,A+ce)!==L(r,ce)){R=!1;break}if(R)return A}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return O(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return O(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var l=e.length-t;o?(o=Number(o),o>l&&(o=l)):o=l;var c=r.length;o>c/2&&(o=c/2);for(var m=0;m<o;++m){var k=parseInt(r.substr(m*2,2),16);if(me(k))return m;e[t+m]=k}return m}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Re(r),e,t,o)}function ve(e,r,t,o){return pe(qe(r),e,t,o)}function be(e,r,t,o){return pe(Me(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-r;if((t===void 0||t>l)&&(t=l),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var c=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return ve(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return be(this,e,r,t);default:if(c)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),c=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],l=r;l<t;){var c=e[l],m=null,k=c>239?4:c>223?3:c>191?2:1;if(l+k<=t){var L,A,T,R;switch(k){case 1:c<128&&(m=c);break;case 2:L=e[l+1],(L&192)===128&&(R=(c&31)<<6|L&63,R>127&&(m=R));break;case 3:L=e[l+1],A=e[l+2],(L&192)===128&&(A&192)===128&&(R=(c&15)<<12|(L&63)<<6|A&63,R>2047&&(R<55296||R>57343)&&(m=R));break;case 4:L=e[l+1],A=e[l+2],T=e[l+3],(L&192)===128&&(A&192)===128&&(T&192)===128&&(R=(c&15)<<18|(L&63)<<12|(A&63)<<6|T&63,R>65535&&R<1114112&&(m=R))}}m===null?(m=65533,k=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),l+=k}return Ee(o)}var ae=4096;function Ee(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function xe(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]&127);return o}function Be(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var l="",c=r;c<t;++c)l+=Pe[e[c]];return l}function Ae(e,r,t){for(var o=e.slice(r,t),l="",c=0;c<o.length-1;c+=2)l+=String.fromCharCode(o[c]+o[c+1]*256);return l}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function I(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e+--r],l=1;r>0&&(l*=256);)o+=this[e+--r]*l;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return l*=128,o>=l&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=r,l=1,c=this[e+--o];o>0&&(l*=256);)c+=this[e+--o]*l;return l*=128,c>=l&&(c-=Math.pow(2,8*r)),c},n.prototype.readInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!1,52,8)};function D(e,r,t,o,l,c){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>l||r<c)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=1,m=0;for(this[r]=e&255;++m<t&&(c*=256);)this[r+m]=e/c&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=t-1,m=1;for(this[r+c]=e&255;--c>=0&&(m*=256);)this[r+c]=e/m&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=0,m=1,k=0;for(this[r]=e&255;++c<t&&(m*=256);)e<0&&k===0&&this[r+c-1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=t-1,m=1,k=0;for(this[r+c]=e&255;--c>=0&&(m*=256);)e<0&&k===0&&this[r+c+1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,l,c){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function we(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),a.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return we(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return we(this,e,r,!1,t)};function se(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),a.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var l=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),l},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var l=e.charCodeAt(0);(o==="utf8"&&l<128||o==="latin1")&&(e=l)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var c;if(typeof e=="number")for(c=r;c<t;++c)this[c]=e;else{var m=n.isBuffer(e)?e:n.from(e,o),k=m.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<t-r;++c)this[c+r]=m[c%k]}return this};var Oe=/[^+/0-9A-Za-z-_]/g;function Ne(e){if(e=e.split("=")[0],e=e.trim().replace(Oe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,l=null,c=[],m=0;m<o;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!l){if(t>56319){(r-=3)>-1&&c.push(239,191,189);continue}else if(m+1===o){(r-=3)>-1&&c.push(239,191,189);continue}l=t;continue}if(t<56320){(r-=3)>-1&&c.push(239,191,189),l=t;continue}t=(l-55296<<10|t-56320)+65536}else l&&(r-=3)>-1&&c.push(239,191,189);if(l=null,t<128){if((r-=1)<0)break;c.push(t)}else if(t<2048){if((r-=2)<0)break;c.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;c.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;c.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return c}function Re(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Me(e,r){for(var t,o,l,c=[],m=0;m<e.length&&!((r-=2)<0);++m)t=e.charCodeAt(m),o=t>>8,l=t%256,c.push(l),c.push(o);return c}function qe(e){return i.toByteArray(Ne(e))}function pe(e,r,t,o){for(var l=0;l<o&&!(l+t>=r.length||l>=e.length);++l)r[l+t]=e[l];return l}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Pe=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,l=0;l<16;++l)r[o+l]=e[t]+e[l];return r}()}),Rm=kt((p,i)=>{F();var a=i.exports={},u,s;function _(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?u=setTimeout:u=_}catch(h){u=_}try{typeof clearTimeout=="function"?s=clearTimeout:s=d}catch(h){s=d}})();function n(h){if(u===setTimeout)return setTimeout(h,0);if((u===_||!u)&&setTimeout)return u=setTimeout,setTimeout(h,0);try{return u(h,0)}catch(S){try{return u.call(null,h,0)}catch(x){return u.call(this,h,0)}}}function w(h){if(s===clearTimeout)return clearTimeout(h);if((s===d||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(h);try{return s(h)}catch(S){try{return s.call(null,h)}catch(x){return s.call(this,h)}}}var y=[],q=!1,b,E=-1;function B(){!q||!b||(q=!1,b.length?y=b.concat(y):E=-1,y.length&&f())}function f(){if(!q){var h=n(B);q=!0;for(var S=y.length;S;){for(b=y,y=[];++E<S;)b&&b[E].run();E=-1,S=y.length}b=null,q=!1,w(h)}}a.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)S[x-1]=arguments[x];y.push(new g(h,S)),y.length===1&&!q&&n(f)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={};function v(){}a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(h){return[]},a.binding=function(h){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(h){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}),Mm,Pm,Dm,F=Tm(()=>{Mm=oe(Nm()),Pm=oe(Rm()),Dm=function(p){function i(){var u=this||self;return delete p.prototype.__magic__,u}if(typeof globalThis=="object")return globalThis;if(this)return i();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:i});var a=__magic__;return a}(Object)}),yi={};Um(yi,{Data:()=>s_});xi.exports=Cm(yi);F();F();var Rr=oe(require("react")),si=oe(require("classnames"));F();var Fm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fm));var Xr={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};F();F();var wi=oe(require("react"));F();var jm=oe(require("react")),n3=(0,jm.createContext)({});F();F();var zm=oe(require("react")),a3=require("@terradharitri/sdk-dapp/constants/index"),i3=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),l3=oe(require("bignumber.js")),p3=require("formik");F();F();F();var c3=require("bech32");F();F();F();var Gm=(p,i)=>typeof i=="boolean"?i:Array.isArray(i)&&i.includes(p);F();F();var u3=require("@terradharitri/sdk-dapp/types/tokens.types");F();F();var s3=require("@terradharitri/sdk-dapp/constants"),d3=require("@terradharitri/sdk-dapp/utils/account/getAccount");F();F();var f3=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");F();var m3=require("@terradharitri/sdk-dapp/utils/buildUrlParams");F();var _3=oe(require("anchorme"));F();F();var h3=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Vm=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),g3=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),v3=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");F();F();F();F();F();F();F();var Wm=oe(require("react")),b3=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),y3=require("formik");F();F();var w3=require("@terradharitri/sdk-dapp/constants/index"),E3=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),x3=oe(require("bignumber.js"));F();F();var q3=require("@terradharitri/sdk-dapp/constants/index");F();var S3=require("@terradharitri/sdk-dapp/constants/index");F();F();F();var k3=require("@terradharitri/sdk-dapp/constants/index"),A3=oe(require("bignumber.js"));F();var B3=require("@terradharitri/sdk-dapp/constants/index");F();var I3=require("@terradharitri/sdk-dapp/constants/index");F();F();var T3=require("@terradharitri/sdk-core"),U3=require("@terradharitri/sdk-dapp/constants/index"),C3=oe(require("bignumber.js"));F();F();var L3=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");F();var O3=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");F();var N3=oe(require("bignumber.js"));F();var R3=require("@terradharitri/sdk-dapp/constants/index"),M3=require("@terradharitri/sdk-dapp/utils/smartContracts"),P3=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),D3=oe(require("bignumber.js"));F();var F3=oe(require("bignumber.js"));F();F();var j3=oe(require("axios"));F();F();F();var z3=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");F();var G3=require("@terradharitri/sdk-dapp/constants/index");F();F();F();var ko=require("@terradharitri/sdk-dapp/constants/index"),Ym=oe(require("bignumber.js")),di,fi,mi,$m=(0,Vm.formatAmount)({input:String((di=ko.GAS_PRICE)!=null?di:1e9),decimals:(fi=ko.DECIMALS)!=null?fi:18,showLastNonZeroDecimal:!0,digits:(mi=ko.DIGITS)!=null?mi:4}),V3=new Ym.default($m).times(10).toString(10);F();var W3=require("@terradharitri/sdk-dapp/constants/index"),Y3=oe(require("bignumber.js"));F();var $3=oe(require("bignumber.js"));F();F();var H3=require("yup");F();var _i=require("@terradharitri/sdk-dapp/constants/ledger.constants"),Hm=oe(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Ao=require("yup"),Zm=(0,Ao.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(p){let{ledger:i}=this.parent;return!(i&&p&&p.length&&!i.ledgerDataActive)}),Xm=(0,Ao.string)().test({name:"hashSign",test:function(p){let{ledger:i,isGuarded:a}=this.parent;if(i){let{ledgerWithHashSign:u,ledgerWithGuardians:s}=(0,Hm.default)(i.version);if(p&&p.length>300&&!u)return this.createError({message:`Data too long. You need at least DharitrI app version ${_i.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(a&&!s)return this.createError({message:`You need at least DharitrI app version ${_i.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Jm=[Zm,Xm],Z3=Jm.reduce((p,i)=>p.concat(i),(0,Ao.string)());F();var X3=require("@terradharitri/sdk-dapp/constants/index"),J3=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),K3=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Q3=require("yup");F();var ex=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),rx=oe(require("bignumber.js")),tx=require("yup");F();var ox=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),nx=oe(require("bignumber.js")),ax=require("yup");F();var ix=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),lx=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),px=oe(require("bignumber.js")),cx=require("yup");F();var ux=oe(require("bignumber.js")),sx=require("yup");F();var dx=require("@terradharitri/sdk-dapp/constants/index"),fx=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),mx=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),_x=oe(require("bignumber.js")),hx=require("yup");F();var gx=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),vx=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),bx=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),yx=oe(require("bignumber.js")),wx=require("yup");F();var Ex=oe(require("bignumber.js")),xx=require("yup");F();var qx=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Sx=require("yup");F();var kx=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ax=require("yup");F();F();var Bx=(0,Wm.createContext)({});F();F();var Km=oe(require("react")),Ix=require("formik"),Tx=oe(require("lodash/uniqBy"));F();F();F();var Ux=oe(require("axios"));F();F();var Cx=oe(require("axios"));F();F();var Lx=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ox=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Nx=oe(require("axios")),Rx=oe(require("lodash/uniqBy"));F();var Mx=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Px=oe(require("axios"));F();var Dx=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Fx=oe(require("axios"));F();F();var Qm=oe(require("react")),jx=(0,Qm.createContext)({});F();F();var zx=require("react"),Gx=require("@terradharitri/sdk-dapp/constants/index"),Vx=require("@terradharitri/sdk-dapp/types/enums.types");F();var Wx=(0,Km.createContext)({});F();F();var Yx=require("@terradharitri/sdk-dapp/constants/index"),$x=require("formik");F();F();var e_=oe(require("react")),Hx=require("@terradharitri/sdk-dapp/constants/index"),Zx=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Xx=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Jx=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Kx=oe(require("bignumber.js")),Qx=require("formik");F();F();F();F();var eq=oe(require("bignumber.js"));F();var rq=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),tq=oe(require("bignumber.js"));F();F();var oq=require("react"),nq=require("@terradharitri/sdk-dapp/constants/index"),aq=require("@terradharitri/sdk-dapp/utils/smartContracts"),iq=oe(require("bignumber.js")),lq=require("formik");F();var pq=require("react");F();F();var cq=require("@terradharitri/sdk-dapp/constants/index"),uq=oe(require("bignumber.js")),sq=(0,e_.createContext)({}),dq=(0,zm.createContext)({});F();F();var r_=oe(require("react")),fq=require("formik"),mq=(0,r_.createContext)({});F();F();var t_=oe(require("react")),_q=require("formik");F();F();F();var hq=require("react"),gq=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),vq=oe(require("lodash/uniqBy"));F();F();var bq=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),yq=require("@terradharitri/sdk-dapp/utils");F();var wq=require("react");F();var Eq=require("react"),xq=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),qq=(0,t_.createContext)({});F();F();var o_=oe(require("react")),Sq=require("formik");F();F();F();F();F();var kq=require("react"),Aq=require("@terradharitri/sdk-dapp/utils");F();var Bq=require("react"),Iq=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");F();F();var Tq=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Uq=oe(require("axios"));F();var Cq=oe(require("axios")),Lq=(0,o_.createContext)({}),n_=(0,wi.createContext)({});function Bo(){return(0,wi.useContext)(n_)}F();var a_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(a_));var i_={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};F();F();F();var hr=oe(require("react")),hi=require("@fortawesome/free-solid-svg-icons"),gi=require("@fortawesome/react-fontawesome"),l_=require("formik");F();F();F();var Oq=oe(require("react")),Nq=require("@terradharitri/sdk-dapp/constants/index"),Ei=()=>{let{formInfo:{isRewaTransaction:p,readonly:i},dataFieldInfo:{isAdvancedModeEnabled:a}}=Bo();return a?!1:!p||Gm("data",i)};F();var p_=`.dapp-core-component__styles-module__advanced {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(p_));var qt={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"},c_=()=>{let{formInfo:{readonly:p,isRewaTransaction:i}}=Bo(),{setFieldValue:a,values:u}=(0,l_.useFormikContext)(),[s,_]=(0,hr.useState)(!1),[d,n]=(0,hr.useState)(!1),w=Ei(),y=!s&&!p&&w&&Boolean(u.data),q=()=>{_(!0),a("isAdvancedModeEnabled",!0)},b=()=>{n(!0),setTimeout(()=>{n(!1)},5e3)};return(0,hr.useEffect)(()=>{!i&&s&&_(!1)},[i,u.amount]),y?d?hr.default.createElement("div",{className:qt.advanced,"data-testid":"confirmAdvancedMode",onClick:q},hr.default.createElement(gi.FontAwesomeIcon,{icon:hi.faCheck,className:"i-icon"}),hr.default.createElement("span",{className:qt.advancedText},"Confirm")):hr.default.createElement("div",{"data-testid":"enableAdvancedMode",className:qt.advanced,onClick:b},hr.default.createElement(gi.FontAwesomeIcon,{icon:hi.faScrewdriverWrench,className:"i-icon"}),hr.default.createElement("span",{className:qt.advancedText},"Advanced")):null};F();var u_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(u_));var vi={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"},s_=({className:p})=>{let{dataFieldInfo:{data:i,dataError:a,isDataInvalid:u,onChange:s,onBlur:_}}=Bo(),d=Ei();return Rr.default.createElement("div",{className:(0,si.default)(vi.data,p)},Rr.default.createElement("div",{className:i_.label},Rr.default.createElement("label",{htmlFor:"data",className:Xr.label},"Data"),Rr.default.createElement(c_,null)),Rr.default.createElement("div",{className:vi.wrapper},Rr.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:d,"data-testid":"data",value:i,onBlur:_,onChange:s,spellCheck:"false",placeholder:"Add transaction data",className:(0,si.default)(Xr.textarea,{[Xr.invalid]:u,[Xr.disabled]:d})})),u&&Rr.default.createElement("div",{className:Xr.error,"data-testid":"dataError"},a))};});var Oi=He((gA,Li)=>{"use strict";ye();var d_=Object.create,At=Object.defineProperty,f_=Object.getOwnPropertyDescriptor,m_=Object.getOwnPropertyNames,__=Object.getPrototypeOf,h_=Object.prototype.hasOwnProperty,g_=(p,i)=>()=>(p&&(i=p(p=0)),i),Bt=(p,i)=>()=>(i||p((i={exports:{}}).exports,i),i.exports),v_=(p,i)=>{for(var a in i)At(p,a,{get:i[a],enumerable:!0})},Ti=(p,i,a,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of m_(i))!h_.call(p,s)&&s!==a&&At(p,s,{get:()=>i[s],enumerable:!(u=f_(i,s))||u.enumerable});return p},ee=(p,i,a)=>(a=p!=null?d_(__(p)):{},Ti(i||!p||!p.__esModule?At(a,"default",{value:p,enumerable:!0}):a,p)),b_=p=>Ti(At({},"__esModule",{value:!0}),p),y_=Bt(p=>{"use strict";z(),p.byteLength=w,p.toByteArray=q,p.fromByteArray=B;var i=[],a=[],u=typeof Uint8Array!="undefined"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,d=s.length;_<d;++_)i[_]=s[_],a[s.charCodeAt(_)]=_;var _,d;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63;function n(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=f.indexOf("=");v===-1&&(v=g);var h=v===g?0:4-v%4;return[v,h]}function w(f){var g=n(f),v=g[0],h=g[1];return(v+h)*3/4-h}function y(f,g,v){return(g+v)*3/4-v}function q(f){var g,v=n(f),h=v[0],S=v[1],x=new u(y(f,h,S)),N=0,P=S>0?h-4:h,O;for(O=0;O<P;O+=4)g=a[f.charCodeAt(O)]<<18|a[f.charCodeAt(O+1)]<<12|a[f.charCodeAt(O+2)]<<6|a[f.charCodeAt(O+3)],x[N++]=g>>16&255,x[N++]=g>>8&255,x[N++]=g&255;return S===2&&(g=a[f.charCodeAt(O)]<<2|a[f.charCodeAt(O+1)]>>4,x[N++]=g&255),S===1&&(g=a[f.charCodeAt(O)]<<10|a[f.charCodeAt(O+1)]<<4|a[f.charCodeAt(O+2)]>>2,x[N++]=g>>8&255,x[N++]=g&255),x}function b(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function E(f,g,v){for(var h,S=[],x=g;x<v;x+=3)h=(f[x]<<16&16711680)+(f[x+1]<<8&65280)+(f[x+2]&255),S.push(b(h));return S.join("")}function B(f){for(var g,v=f.length,h=v%3,S=[],x=16383,N=0,P=v-h;N<P;N+=x)S.push(E(f,N,N+x>P?P:N+x));return h===1?(g=f[v-1],S.push(i[g>>2]+i[g<<4&63]+"==")):h===2&&(g=(f[v-2]<<8)+f[v-1],S.push(i[g>>10]+i[g>>4&63]+i[g<<2&63]+"=")),S.join("")}}),w_=Bt(p=>{z(),p.read=function(i,a,u,s,_){var d,n,w=_*8-s-1,y=(1<<w)-1,q=y>>1,b=-7,E=u?_-1:0,B=u?-1:1,f=i[a+E];for(E+=B,d=f&(1<<-b)-1,f>>=-b,b+=w;b>0;d=d*256+i[a+E],E+=B,b-=8);for(n=d&(1<<-b)-1,d>>=-b,b+=s;b>0;n=n*256+i[a+E],E+=B,b-=8);if(d===0)d=1-q;else{if(d===y)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,s),d=d-q}return(f?-1:1)*n*Math.pow(2,d-s)},p.write=function(i,a,u,s,_,d){var n,w,y,q=d*8-_-1,b=(1<<q)-1,E=b>>1,B=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=s?0:d-1,g=s?1:-1,v=a<0||a===0&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(w=isNaN(a)?1:0,n=b):(n=Math.floor(Math.log(a)/Math.LN2),a*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+E>=1?a+=B/y:a+=B*Math.pow(2,1-E),a*y>=2&&(n++,y/=2),n+E>=b?(w=0,n=b):n+E>=1?(w=(a*y-1)*Math.pow(2,_),n=n+E):(w=a*Math.pow(2,E-1)*Math.pow(2,_),n=0));_>=8;i[u+f]=w&255,f+=g,w/=256,_-=8);for(n=n<<_|w,q+=_;q>0;i[u+f]=n&255,f+=g,n/=256,q-=8);i[u+f-g]|=v*128}}),E_=Bt(p=>{"use strict";z();var i=y_(),a=w_(),u=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=n,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var s=2147483647;p.kMaxLength=s,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function d(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return w(e,r,t)}n.poolSize=8192;function w(e,r,t){if(typeof e=="string")return E(e,r);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var l=v(e);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return w(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function q(e,r,t){return y(e),e<=0?d(e):r!==void 0?typeof t=="string"?d(e).fill(r,t):d(e).fill(r):d(e)}n.alloc=function(e,r,t){return q(e,r,t)};function b(e){return y(e),d(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return b(e)},n.allocUnsafeSlow=function(e){return b(e)};function E(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=x(e,r)|0,o=d(t),l=o.write(e,r);return l!==t&&(o=o.slice(0,l)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=d(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function f(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function v(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=d(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?d(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,l=0,c=Math.min(t,o);l<c;++l)if(e[l]!==r[l]){t=e[l],o=r[l];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),l=0;for(t=0;t<e.length;++t){var c=e[t];if(H(c,Uint8Array))l+c.length>o.length?n.from(c).copy(o,l):Uint8Array.prototype.set.call(o,c,l);else if(n.isBuffer(c))c.copy(o,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=c.length}return o};function x(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var l=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return qe(e).length;default:if(l)return o?-1:fe(e).length;r=(""+r).toLowerCase(),l=!0}}n.byteLength=x;function N(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return xe(this,r,t);case"latin1":case"binary":return Be(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function P(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)P(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)P(this,r,r+3),P(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)P(this,r,r+7),P(this,r+1,r+6),P(this,r+2,r+5),P(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):N.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},u&&(n.prototype[u]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,l){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),l===void 0&&(l=this.length),r<0||t>e.length||o<0||l>this.length)throw new RangeError("out of range index");if(o>=l&&r>=t)return 0;if(o>=l)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,l>>>=0,this===e)return 0;for(var c=l-o,m=t-r,k=Math.min(c,m),L=this.slice(o,l),A=e.slice(r,t),T=0;T<k;++T)if(L[T]!==A[T]){c=L[T],m=A[T];break}return c<m?-1:m<c?1:0};function O(e,r,t,o,l){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=l?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(l)return-1;t=e.length-1}else if(t<0)if(l)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,l);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,l);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,l){var c=1,m=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;c=2,m/=2,k/=2,t/=2}function L(Se,ke){return c===1?Se[ke]:Se.readUInt16BE(ke*c)}var A;if(l){var T=-1;for(A=t;A<m;A++)if(L(e,A)===L(r,T===-1?0:A-T)){if(T===-1&&(T=A),A-T+1===k)return T*c}else T!==-1&&(A-=A-T),T=-1}else for(t+k>m&&(t=m-k),A=t;A>=0;A--){for(var R=!0,ce=0;ce<k;ce++)if(L(e,A+ce)!==L(r,ce)){R=!1;break}if(R)return A}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return O(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return O(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var l=e.length-t;o?(o=Number(o),o>l&&(o=l)):o=l;var c=r.length;o>c/2&&(o=c/2);for(var m=0;m<o;++m){var k=parseInt(r.substr(m*2,2),16);if(me(k))return m;e[t+m]=k}return m}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Re(r),e,t,o)}function ve(e,r,t,o){return pe(qe(r),e,t,o)}function be(e,r,t,o){return pe(Me(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-r;if((t===void 0||t>l)&&(t=l),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var c=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return ve(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return be(this,e,r,t);default:if(c)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),c=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],l=r;l<t;){var c=e[l],m=null,k=c>239?4:c>223?3:c>191?2:1;if(l+k<=t){var L,A,T,R;switch(k){case 1:c<128&&(m=c);break;case 2:L=e[l+1],(L&192)===128&&(R=(c&31)<<6|L&63,R>127&&(m=R));break;case 3:L=e[l+1],A=e[l+2],(L&192)===128&&(A&192)===128&&(R=(c&15)<<12|(L&63)<<6|A&63,R>2047&&(R<55296||R>57343)&&(m=R));break;case 4:L=e[l+1],A=e[l+2],T=e[l+3],(L&192)===128&&(A&192)===128&&(T&192)===128&&(R=(c&15)<<18|(L&63)<<12|(A&63)<<6|T&63,R>65535&&R<1114112&&(m=R))}}m===null?(m=65533,k=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),l+=k}return Ee(o)}var ae=4096;function Ee(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function xe(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]&127);return o}function Be(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var l="",c=r;c<t;++c)l+=Pe[e[c]];return l}function Ae(e,r,t){for(var o=e.slice(r,t),l="",c=0;c<o.length-1;c+=2)l+=String.fromCharCode(o[c]+o[c+1]*256);return l}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function I(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e+--r],l=1;r>0&&(l*=256);)o+=this[e+--r]*l;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return l*=128,o>=l&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=r,l=1,c=this[e+--o];o>0&&(l*=256);)c+=this[e+--o]*l;return l*=128,c>=l&&(c-=Math.pow(2,8*r)),c},n.prototype.readInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!1,52,8)};function D(e,r,t,o,l,c){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>l||r<c)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=1,m=0;for(this[r]=e&255;++m<t&&(c*=256);)this[r+m]=e/c&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=t-1,m=1;for(this[r+c]=e&255;--c>=0&&(m*=256);)this[r+c]=e/m&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=0,m=1,k=0;for(this[r]=e&255;++c<t&&(m*=256);)e<0&&k===0&&this[r+c-1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=t-1,m=1,k=0;for(this[r+c]=e&255;--c>=0&&(m*=256);)e<0&&k===0&&this[r+c+1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,l,c){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function we(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),a.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return we(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return we(this,e,r,!1,t)};function se(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),a.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var l=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),l},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var l=e.charCodeAt(0);(o==="utf8"&&l<128||o==="latin1")&&(e=l)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var c;if(typeof e=="number")for(c=r;c<t;++c)this[c]=e;else{var m=n.isBuffer(e)?e:n.from(e,o),k=m.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<t-r;++c)this[c+r]=m[c%k]}return this};var Oe=/[^+/0-9A-Za-z-_]/g;function Ne(e){if(e=e.split("=")[0],e=e.trim().replace(Oe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,l=null,c=[],m=0;m<o;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!l){if(t>56319){(r-=3)>-1&&c.push(239,191,189);continue}else if(m+1===o){(r-=3)>-1&&c.push(239,191,189);continue}l=t;continue}if(t<56320){(r-=3)>-1&&c.push(239,191,189),l=t;continue}t=(l-55296<<10|t-56320)+65536}else l&&(r-=3)>-1&&c.push(239,191,189);if(l=null,t<128){if((r-=1)<0)break;c.push(t)}else if(t<2048){if((r-=2)<0)break;c.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;c.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;c.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return c}function Re(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Me(e,r){for(var t,o,l,c=[],m=0;m<e.length&&!((r-=2)<0);++m)t=e.charCodeAt(m),o=t>>8,l=t%256,c.push(l),c.push(o);return c}function qe(e){return i.toByteArray(Ne(e))}function pe(e,r,t,o){for(var l=0;l<o&&!(l+t>=r.length||l>=e.length);++l)r[l+t]=e[l];return l}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Pe=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,l=0;l<16;++l)r[o+l]=e[t]+e[l];return r}()}),x_=Bt((p,i)=>{z();var a=i.exports={},u,s;function _(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?u=setTimeout:u=_}catch(h){u=_}try{typeof clearTimeout=="function"?s=clearTimeout:s=d}catch(h){s=d}})();function n(h){if(u===setTimeout)return setTimeout(h,0);if((u===_||!u)&&setTimeout)return u=setTimeout,setTimeout(h,0);try{return u(h,0)}catch(S){try{return u.call(null,h,0)}catch(x){return u.call(this,h,0)}}}function w(h){if(s===clearTimeout)return clearTimeout(h);if((s===d||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(h);try{return s(h)}catch(S){try{return s.call(null,h)}catch(x){return s.call(this,h)}}}var y=[],q=!1,b,E=-1;function B(){!q||!b||(q=!1,b.length?y=b.concat(y):E=-1,y.length&&f())}function f(){if(!q){var h=n(B);q=!0;for(var S=y.length;S;){for(b=y,y=[];++E<S;)b&&b[E].run();E=-1,S=y.length}b=null,q=!1,w(h)}}a.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)S[x-1]=arguments[x];y.push(new g(h,S)),y.length===1&&!q&&n(f)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={};function v(){}a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(h){return[]},a.binding=function(h){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(h){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}),q_,S_,k_,z=g_(()=>{q_=ee(E_()),S_=ee(x_()),k_=function(p){function i(){var u=this||self;return delete p.prototype.__magic__,u}if(typeof globalThis=="object")return globalThis;if(this)return i();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:i});var a=__magic__;return a}(Object)}),Ui={};v_(Ui,{GasLimit:()=>eh});Li.exports=b_(Ui);z();z();var qr=ee(require("react")),A_=require("@fortawesome/free-solid-svg-icons"),B_=require("@fortawesome/react-fontawesome"),I_=ee(require("bignumber.js")),Si=ee(require("classnames")),T_=require("react-number-format");z();var U_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(U_));var Jr={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};z();z();var Ci=ee(require("react"));z();var C_=ee(require("react")),Mq=(0,C_.createContext)({});z();z();var L_=ee(require("react")),Pq=require("@terradharitri/sdk-dapp/constants/index"),Dq=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Fq=ee(require("bignumber.js")),jq=require("formik");z();z();z();var zq=require("bech32");z();z();z();var O_=(p,i)=>typeof i=="boolean"?i:Array.isArray(i)&&i.includes(p);z();z();var Gq=require("@terradharitri/sdk-dapp/types/tokens.types");z();z();var Vq=require("@terradharitri/sdk-dapp/constants"),Wq=require("@terradharitri/sdk-dapp/utils/account/getAccount");z();z();var Yq=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");z();var $q=require("@terradharitri/sdk-dapp/utils/buildUrlParams");z();var Hq=ee(require("anchorme"));z();z();var Zq=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),N_=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Xq=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Jq=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");z();z();z();z();z();z();z();var R_=ee(require("react")),Kq=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Qq=require("formik");z();z();var eS=require("@terradharitri/sdk-dapp/constants/index"),rS=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),tS=ee(require("bignumber.js"));z();z();var oS=require("@terradharitri/sdk-dapp/constants/index");z();var nS=require("@terradharitri/sdk-dapp/constants/index");z();z();z();var aS=require("@terradharitri/sdk-dapp/constants/index"),iS=ee(require("bignumber.js"));z();var lS=require("@terradharitri/sdk-dapp/constants/index");z();var pS=require("@terradharitri/sdk-dapp/constants/index");z();z();var cS=require("@terradharitri/sdk-core"),uS=require("@terradharitri/sdk-dapp/constants/index"),sS=ee(require("bignumber.js"));z();z();var dS=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");z();var fS=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");z();var mS=ee(require("bignumber.js"));z();var _S=require("@terradharitri/sdk-dapp/constants/index"),hS=require("@terradharitri/sdk-dapp/utils/smartContracts"),gS=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),vS=ee(require("bignumber.js"));z();var bS=ee(require("bignumber.js"));z();z();var yS=ee(require("axios"));z();z();z();var wS=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");z();var ES=require("@terradharitri/sdk-dapp/constants/index");z();z();z();var Io=require("@terradharitri/sdk-dapp/constants/index"),M_=ee(require("bignumber.js")),ki,Ai,Bi,P_=(0,N_.formatAmount)({input:String((ki=Io.GAS_PRICE)!=null?ki:1e9),decimals:(Ai=Io.DECIMALS)!=null?Ai:18,showLastNonZeroDecimal:!0,digits:(Bi=Io.DIGITS)!=null?Bi:4}),xS=new M_.default(P_).times(10).toString(10);z();var qS=require("@terradharitri/sdk-dapp/constants/index"),SS=ee(require("bignumber.js"));z();var kS=ee(require("bignumber.js"));z();z();var AS=require("yup");z();var Ii=require("@terradharitri/sdk-dapp/constants/ledger.constants"),D_=ee(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),To=require("yup"),F_=(0,To.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(p){let{ledger:i}=this.parent;return!(i&&p&&p.length&&!i.ledgerDataActive)}),j_=(0,To.string)().test({name:"hashSign",test:function(p){let{ledger:i,isGuarded:a}=this.parent;if(i){let{ledgerWithHashSign:u,ledgerWithGuardians:s}=(0,D_.default)(i.version);if(p&&p.length>300&&!u)return this.createError({message:`Data too long. You need at least DharitrI app version ${Ii.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(a&&!s)return this.createError({message:`You need at least DharitrI app version ${Ii.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),z_=[F_,j_],BS=z_.reduce((p,i)=>p.concat(i),(0,To.string)());z();var IS=require("@terradharitri/sdk-dapp/constants/index"),TS=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),US=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),CS=require("yup");z();var LS=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),OS=ee(require("bignumber.js")),NS=require("yup");z();var RS=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),MS=ee(require("bignumber.js")),PS=require("yup");z();var DS=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),FS=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),jS=ee(require("bignumber.js")),zS=require("yup");z();var GS=ee(require("bignumber.js")),VS=require("yup");z();var WS=require("@terradharitri/sdk-dapp/constants/index"),YS=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),$S=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),HS=ee(require("bignumber.js")),ZS=require("yup");z();var XS=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),JS=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),KS=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),QS=ee(require("bignumber.js")),ek=require("yup");z();var rk=ee(require("bignumber.js")),tk=require("yup");z();var ok=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),nk=require("yup");z();var ak=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ik=require("yup");z();z();var lk=(0,R_.createContext)({});z();z();var G_=ee(require("react")),pk=require("formik"),ck=ee(require("lodash/uniqBy"));z();z();z();var uk=ee(require("axios"));z();z();var sk=ee(require("axios"));z();z();var dk=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),fk=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),mk=ee(require("axios")),_k=ee(require("lodash/uniqBy"));z();var hk=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),gk=ee(require("axios"));z();var vk=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),bk=ee(require("axios"));z();z();var V_=ee(require("react")),yk=(0,V_.createContext)({});z();z();var wk=require("react"),Ek=require("@terradharitri/sdk-dapp/constants/index"),xk=require("@terradharitri/sdk-dapp/types/enums.types");z();var qk=(0,G_.createContext)({});z();z();var Sk=require("@terradharitri/sdk-dapp/constants/index"),kk=require("formik");z();z();var W_=ee(require("react")),Ak=require("@terradharitri/sdk-dapp/constants/index"),Bk=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ik=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Tk=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Uk=ee(require("bignumber.js")),Ck=require("formik");z();z();z();z();var Lk=ee(require("bignumber.js"));z();var Ok=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Nk=ee(require("bignumber.js"));z();z();var Rk=require("react"),Mk=require("@terradharitri/sdk-dapp/constants/index"),Pk=require("@terradharitri/sdk-dapp/utils/smartContracts"),Dk=ee(require("bignumber.js")),Fk=require("formik");z();var jk=require("react");z();z();var zk=require("@terradharitri/sdk-dapp/constants/index"),Gk=ee(require("bignumber.js")),Vk=(0,W_.createContext)({}),Wk=(0,L_.createContext)({});z();z();var Y_=ee(require("react")),Yk=require("formik"),$k=(0,Y_.createContext)({});z();z();var $_=ee(require("react")),Hk=require("formik");z();z();z();var Zk=require("react"),Xk=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Jk=ee(require("lodash/uniqBy"));z();z();var Kk=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Qk=require("@terradharitri/sdk-dapp/utils");z();var eA=require("react");z();var rA=require("react"),tA=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),oA=(0,$_.createContext)({});z();z();var H_=ee(require("react")),nA=require("formik");z();z();z();z();z();var aA=require("react"),iA=require("@terradharitri/sdk-dapp/utils");z();var lA=require("react"),pA=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");z();z();var cA=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),uA=ee(require("axios"));z();var sA=ee(require("axios")),dA=(0,H_.createContext)({}),Z_=(0,Ci.createContext)({});function X_(){return(0,Ci.useContext)(Z_)}z();z();var fA=require("@terradharitri/sdk-dapp/constants/index"),mA=require("@terradharitri/sdk-dapp/utils/validation"),_A=ee(require("bignumber.js"));z();z();var hA=require("react");z();var J_=ee(require("bignumber.js")),K_=p=>{let[i,a]=p.split(""),u=new J_.default(i).isZero();return Boolean(u&&a&&a!==".")};z();var Q_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Q_));var Sr={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},eh=()=>{let{formInfo:p,gasInfo:i}=X_(),{readonly:a}=p,{defaultGasLimit:u,onResetGasLimit:s,onChangeGasLimit:_,onBlurGasLimit:d,gasLimit:n,gasLimitError:w,isGasLimitInvalid:y}=i,q=g=>{g.preventDefault(),s()},b=({value:g,floatValue:v})=>(!v||!(0,I_.default)(v).isNaN())&&!K_(g),E=g=>{_(g.value,!0)},B=n!==u&&!a,f=O_("gasLimit",a);return qr.default.createElement("div",{className:Sr.gas},qr.default.createElement("label",{className:Jr.label,htmlFor:"gasLimit"},"Gas Limit"),qr.default.createElement("div",{className:Sr.wrapper},qr.default.createElement(T_.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:f,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:d,onValueChange:E,required:!0,isAllowed:b,thousandSeparator:",",thousandsGroupStyle:"thousand",value:n,valueIsNumericString:!0,allowNegative:!1,className:(0,Si.default)(Jr.input,Sr.input,{[Jr.disabled]:f,[Jr.invalid]:y,[Sr.spaced]:B})}),B&&qr.default.createElement("div",{className:Sr.actions},qr.default.createElement("div",{onClick:q,"data-testid":"gasLimitResetBtn",className:(0,Si.default)(Sr.action,{[Sr.disabled]:f})},qr.default.createElement(B_.FontAwesomeIcon,{icon:A_.faUndo,className:Sr.icon}))),y&&qr.default.createElement("div",{className:Jr.error,"data-testid":"gasLimitError"},w)))};});var Yi=He((QI,Wi)=>{"use strict";ye();var rh=Object.create,It=Object.defineProperty,th=Object.getOwnPropertyDescriptor,oh=Object.getOwnPropertyNames,nh=Object.getPrototypeOf,ah=Object.prototype.hasOwnProperty,ih=(p,i)=>()=>(p&&(i=p(p=0)),i),Tt=(p,i)=>()=>(i||p((i={exports:{}}).exports,i),i.exports),lh=(p,i)=>{for(var a in i)It(p,a,{get:i[a],enumerable:!0})},Fi=(p,i,a,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of oh(i))!ah.call(p,s)&&s!==a&&It(p,s,{get:()=>i[s],enumerable:!(u=th(i,s))||u.enumerable});return p},Q=(p,i,a)=>(a=p!=null?rh(nh(p)):{},Fi(i||!p||!p.__esModule?It(a,"default",{value:p,enumerable:!0}):a,p)),ph=p=>Fi(It({},"__esModule",{value:!0}),p),ch=Tt(p=>{"use strict";j(),p.byteLength=w,p.toByteArray=q,p.fromByteArray=B;var i=[],a=[],u=typeof Uint8Array!="undefined"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,d=s.length;_<d;++_)i[_]=s[_],a[s.charCodeAt(_)]=_;var _,d;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63;function n(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=f.indexOf("=");v===-1&&(v=g);var h=v===g?0:4-v%4;return[v,h]}function w(f){var g=n(f),v=g[0],h=g[1];return(v+h)*3/4-h}function y(f,g,v){return(g+v)*3/4-v}function q(f){var g,v=n(f),h=v[0],S=v[1],x=new u(y(f,h,S)),N=0,P=S>0?h-4:h,O;for(O=0;O<P;O+=4)g=a[f.charCodeAt(O)]<<18|a[f.charCodeAt(O+1)]<<12|a[f.charCodeAt(O+2)]<<6|a[f.charCodeAt(O+3)],x[N++]=g>>16&255,x[N++]=g>>8&255,x[N++]=g&255;return S===2&&(g=a[f.charCodeAt(O)]<<2|a[f.charCodeAt(O+1)]>>4,x[N++]=g&255),S===1&&(g=a[f.charCodeAt(O)]<<10|a[f.charCodeAt(O+1)]<<4|a[f.charCodeAt(O+2)]>>2,x[N++]=g>>8&255,x[N++]=g&255),x}function b(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function E(f,g,v){for(var h,S=[],x=g;x<v;x+=3)h=(f[x]<<16&16711680)+(f[x+1]<<8&65280)+(f[x+2]&255),S.push(b(h));return S.join("")}function B(f){for(var g,v=f.length,h=v%3,S=[],x=16383,N=0,P=v-h;N<P;N+=x)S.push(E(f,N,N+x>P?P:N+x));return h===1?(g=f[v-1],S.push(i[g>>2]+i[g<<4&63]+"==")):h===2&&(g=(f[v-2]<<8)+f[v-1],S.push(i[g>>10]+i[g>>4&63]+i[g<<2&63]+"=")),S.join("")}}),uh=Tt(p=>{j(),p.read=function(i,a,u,s,_){var d,n,w=_*8-s-1,y=(1<<w)-1,q=y>>1,b=-7,E=u?_-1:0,B=u?-1:1,f=i[a+E];for(E+=B,d=f&(1<<-b)-1,f>>=-b,b+=w;b>0;d=d*256+i[a+E],E+=B,b-=8);for(n=d&(1<<-b)-1,d>>=-b,b+=s;b>0;n=n*256+i[a+E],E+=B,b-=8);if(d===0)d=1-q;else{if(d===y)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,s),d=d-q}return(f?-1:1)*n*Math.pow(2,d-s)},p.write=function(i,a,u,s,_,d){var n,w,y,q=d*8-_-1,b=(1<<q)-1,E=b>>1,B=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=s?0:d-1,g=s?1:-1,v=a<0||a===0&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(w=isNaN(a)?1:0,n=b):(n=Math.floor(Math.log(a)/Math.LN2),a*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+E>=1?a+=B/y:a+=B*Math.pow(2,1-E),a*y>=2&&(n++,y/=2),n+E>=b?(w=0,n=b):n+E>=1?(w=(a*y-1)*Math.pow(2,_),n=n+E):(w=a*Math.pow(2,E-1)*Math.pow(2,_),n=0));_>=8;i[u+f]=w&255,f+=g,w/=256,_-=8);for(n=n<<_|w,q+=_;q>0;i[u+f]=n&255,f+=g,n/=256,q-=8);i[u+f-g]|=v*128}}),sh=Tt(p=>{"use strict";j();var i=ch(),a=uh(),u=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=n,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var s=2147483647;p.kMaxLength=s,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function d(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return w(e,r,t)}n.poolSize=8192;function w(e,r,t){if(typeof e=="string")return E(e,r);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var l=v(e);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return w(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function q(e,r,t){return y(e),e<=0?d(e):r!==void 0?typeof t=="string"?d(e).fill(r,t):d(e).fill(r):d(e)}n.alloc=function(e,r,t){return q(e,r,t)};function b(e){return y(e),d(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return b(e)},n.allocUnsafeSlow=function(e){return b(e)};function E(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=x(e,r)|0,o=d(t),l=o.write(e,r);return l!==t&&(o=o.slice(0,l)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=d(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function f(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function v(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=d(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?d(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,l=0,c=Math.min(t,o);l<c;++l)if(e[l]!==r[l]){t=e[l],o=r[l];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),l=0;for(t=0;t<e.length;++t){var c=e[t];if(H(c,Uint8Array))l+c.length>o.length?n.from(c).copy(o,l):Uint8Array.prototype.set.call(o,c,l);else if(n.isBuffer(c))c.copy(o,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=c.length}return o};function x(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var l=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return qe(e).length;default:if(l)return o?-1:fe(e).length;r=(""+r).toLowerCase(),l=!0}}n.byteLength=x;function N(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return xe(this,r,t);case"latin1":case"binary":return Be(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function P(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)P(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)P(this,r,r+3),P(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)P(this,r,r+7),P(this,r+1,r+6),P(this,r+2,r+5),P(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):N.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},u&&(n.prototype[u]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,l){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),l===void 0&&(l=this.length),r<0||t>e.length||o<0||l>this.length)throw new RangeError("out of range index");if(o>=l&&r>=t)return 0;if(o>=l)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,l>>>=0,this===e)return 0;for(var c=l-o,m=t-r,k=Math.min(c,m),L=this.slice(o,l),A=e.slice(r,t),T=0;T<k;++T)if(L[T]!==A[T]){c=L[T],m=A[T];break}return c<m?-1:m<c?1:0};function O(e,r,t,o,l){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=l?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(l)return-1;t=e.length-1}else if(t<0)if(l)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,l);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,l);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,l){var c=1,m=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;c=2,m/=2,k/=2,t/=2}function L(Se,ke){return c===1?Se[ke]:Se.readUInt16BE(ke*c)}var A;if(l){var T=-1;for(A=t;A<m;A++)if(L(e,A)===L(r,T===-1?0:A-T)){if(T===-1&&(T=A),A-T+1===k)return T*c}else T!==-1&&(A-=A-T),T=-1}else for(t+k>m&&(t=m-k),A=t;A>=0;A--){for(var R=!0,ce=0;ce<k;ce++)if(L(e,A+ce)!==L(r,ce)){R=!1;break}if(R)return A}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return O(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return O(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var l=e.length-t;o?(o=Number(o),o>l&&(o=l)):o=l;var c=r.length;o>c/2&&(o=c/2);for(var m=0;m<o;++m){var k=parseInt(r.substr(m*2,2),16);if(me(k))return m;e[t+m]=k}return m}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Re(r),e,t,o)}function ve(e,r,t,o){return pe(qe(r),e,t,o)}function be(e,r,t,o){return pe(Me(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-r;if((t===void 0||t>l)&&(t=l),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var c=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return ve(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return be(this,e,r,t);default:if(c)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),c=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],l=r;l<t;){var c=e[l],m=null,k=c>239?4:c>223?3:c>191?2:1;if(l+k<=t){var L,A,T,R;switch(k){case 1:c<128&&(m=c);break;case 2:L=e[l+1],(L&192)===128&&(R=(c&31)<<6|L&63,R>127&&(m=R));break;case 3:L=e[l+1],A=e[l+2],(L&192)===128&&(A&192)===128&&(R=(c&15)<<12|(L&63)<<6|A&63,R>2047&&(R<55296||R>57343)&&(m=R));break;case 4:L=e[l+1],A=e[l+2],T=e[l+3],(L&192)===128&&(A&192)===128&&(T&192)===128&&(R=(c&15)<<18|(L&63)<<12|(A&63)<<6|T&63,R>65535&&R<1114112&&(m=R))}}m===null?(m=65533,k=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),l+=k}return Ee(o)}var ae=4096;function Ee(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function xe(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]&127);return o}function Be(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var l="",c=r;c<t;++c)l+=Pe[e[c]];return l}function Ae(e,r,t){for(var o=e.slice(r,t),l="",c=0;c<o.length-1;c+=2)l+=String.fromCharCode(o[c]+o[c+1]*256);return l}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function I(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e+--r],l=1;r>0&&(l*=256);)o+=this[e+--r]*l;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return l*=128,o>=l&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=r,l=1,c=this[e+--o];o>0&&(l*=256);)c+=this[e+--o]*l;return l*=128,c>=l&&(c-=Math.pow(2,8*r)),c},n.prototype.readInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!1,52,8)};function D(e,r,t,o,l,c){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>l||r<c)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=1,m=0;for(this[r]=e&255;++m<t&&(c*=256);)this[r+m]=e/c&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=t-1,m=1;for(this[r+c]=e&255;--c>=0&&(m*=256);)this[r+c]=e/m&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=0,m=1,k=0;for(this[r]=e&255;++c<t&&(m*=256);)e<0&&k===0&&this[r+c-1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=t-1,m=1,k=0;for(this[r+c]=e&255;--c>=0&&(m*=256);)e<0&&k===0&&this[r+c+1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,l,c){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function we(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),a.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return we(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return we(this,e,r,!1,t)};function se(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),a.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var l=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),l},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var l=e.charCodeAt(0);(o==="utf8"&&l<128||o==="latin1")&&(e=l)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var c;if(typeof e=="number")for(c=r;c<t;++c)this[c]=e;else{var m=n.isBuffer(e)?e:n.from(e,o),k=m.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<t-r;++c)this[c+r]=m[c%k]}return this};var Oe=/[^+/0-9A-Za-z-_]/g;function Ne(e){if(e=e.split("=")[0],e=e.trim().replace(Oe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,l=null,c=[],m=0;m<o;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!l){if(t>56319){(r-=3)>-1&&c.push(239,191,189);continue}else if(m+1===o){(r-=3)>-1&&c.push(239,191,189);continue}l=t;continue}if(t<56320){(r-=3)>-1&&c.push(239,191,189),l=t;continue}t=(l-55296<<10|t-56320)+65536}else l&&(r-=3)>-1&&c.push(239,191,189);if(l=null,t<128){if((r-=1)<0)break;c.push(t)}else if(t<2048){if((r-=2)<0)break;c.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;c.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;c.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return c}function Re(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Me(e,r){for(var t,o,l,c=[],m=0;m<e.length&&!((r-=2)<0);++m)t=e.charCodeAt(m),o=t>>8,l=t%256,c.push(l),c.push(o);return c}function qe(e){return i.toByteArray(Ne(e))}function pe(e,r,t,o){for(var l=0;l<o&&!(l+t>=r.length||l>=e.length);++l)r[l+t]=e[l];return l}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Pe=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,l=0;l<16;++l)r[o+l]=e[t]+e[l];return r}()}),dh=Tt((p,i)=>{j();var a=i.exports={},u,s;function _(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?u=setTimeout:u=_}catch(h){u=_}try{typeof clearTimeout=="function"?s=clearTimeout:s=d}catch(h){s=d}})();function n(h){if(u===setTimeout)return setTimeout(h,0);if((u===_||!u)&&setTimeout)return u=setTimeout,setTimeout(h,0);try{return u(h,0)}catch(S){try{return u.call(null,h,0)}catch(x){return u.call(this,h,0)}}}function w(h){if(s===clearTimeout)return clearTimeout(h);if((s===d||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(h);try{return s(h)}catch(S){try{return s.call(null,h)}catch(x){return s.call(this,h)}}}var y=[],q=!1,b,E=-1;function B(){!q||!b||(q=!1,b.length?y=b.concat(y):E=-1,y.length&&f())}function f(){if(!q){var h=n(B);q=!0;for(var S=y.length;S;){for(b=y,y=[];++E<S;)b&&b[E].run();E=-1,S=y.length}b=null,q=!1,w(h)}}a.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)S[x-1]=arguments[x];y.push(new g(h,S)),y.length===1&&!q&&n(f)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={};function v(){}a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(h){return[]},a.binding=function(h){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(h){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}),fh,mh,_h,j=ih(()=>{fh=Q(sh()),mh=Q(dh()),_h=function(p){function i(){var u=this||self;return delete p.prototype.__magic__,u}if(typeof globalThis=="object")return globalThis;if(this)return i();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:i});var a=__magic__;return a}(Object)}),ji={};lh(ji,{GasPrice:()=>Gh});Wi.exports=ph(ji);j();j();var kr=Q(require("react")),hh=require("@fortawesome/free-solid-svg-icons"),gh=require("@fortawesome/react-fontawesome"),vh=Q(require("bignumber.js")),Ni=Q(require("classnames")),bh=require("react-number-format");j();var yh=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(yh));var Kr={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};j();var vA=Q(require("react")),bA=require("@terradharitri/sdk-dapp/constants/index");j();j();j();var yA=Q(require("axios"));j();j();j();var wA=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");j();var EA=require("@terradharitri/sdk-dapp/constants/index");j();j();j();j();j();j();j();var xA=Q(require("axios"));j();j();var qA=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),SA=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),kA=Q(require("axios")),AA=Q(require("lodash/uniqBy"));j();var BA=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),IA=Q(require("axios"));j();j();j();var TA=require("@terradharitri/sdk-dapp/types/tokens.types");j();j();j();j();var UA=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),CA=Q(require("axios"));j();j();var LA=Q(require("axios"));j();var wh=Q(require("react")),OA=(0,wh.createContext)({});j();j();var Eh=Q(require("react")),NA=require("@terradharitri/sdk-dapp/constants/index"),RA=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),MA=Q(require("bignumber.js")),PA=require("formik");j();j();j();var DA=require("bech32");j();j();j();var xh=(p,i)=>typeof i=="boolean"?i:Array.isArray(i)&&i.includes(p);j();j();j();var FA=require("@terradharitri/sdk-dapp/constants"),jA=require("@terradharitri/sdk-dapp/utils/account/getAccount");j();j();var zA=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");j();var GA=require("@terradharitri/sdk-dapp/utils/buildUrlParams");j();var VA=Q(require("anchorme"));j();j();var WA=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),qh=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),YA=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),$A=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");j();j();var Sh=Q(require("react")),HA=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),ZA=require("formik");j();j();var XA=require("@terradharitri/sdk-dapp/constants/index"),JA=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),KA=Q(require("bignumber.js"));j();j();var QA=require("@terradharitri/sdk-dapp/constants/index");j();var eB=require("@terradharitri/sdk-dapp/constants/index");j();var rB=require("@terradharitri/sdk-dapp/constants/index"),tB=Q(require("bignumber.js"));j();var oB=require("@terradharitri/sdk-dapp/constants/index");j();var nB=require("@terradharitri/sdk-dapp/constants/index");j();j();var aB=require("@terradharitri/sdk-core"),iB=require("@terradharitri/sdk-dapp/constants/index"),lB=Q(require("bignumber.js"));j();j();var pB=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");j();var cB=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");j();var uB=Q(require("bignumber.js"));j();var sB=require("@terradharitri/sdk-dapp/constants/index"),dB=require("@terradharitri/sdk-dapp/utils/smartContracts"),fB=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),mB=Q(require("bignumber.js"));j();var _B=Q(require("bignumber.js"));j();var Uo=require("@terradharitri/sdk-dapp/constants/index"),kh=Q(require("bignumber.js")),Ri,Mi,Pi,zi=(0,qh.formatAmount)({input:String((Ri=Uo.GAS_PRICE)!=null?Ri:1e9),decimals:(Mi=Uo.DECIMALS)!=null?Mi:18,showLastNonZeroDecimal:!0,digits:(Pi=Uo.DIGITS)!=null?Pi:4}),hB=new kh.default(zi).times(10).toString(10);j();var gB=require("@terradharitri/sdk-dapp/constants/index"),vB=Q(require("bignumber.js"));j();var bB=Q(require("bignumber.js"));j();j();var yB=require("yup");j();var Di=require("@terradharitri/sdk-dapp/constants/ledger.constants"),Ah=Q(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Co=require("yup"),Bh=(0,Co.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(p){let{ledger:i}=this.parent;return!(i&&p&&p.length&&!i.ledgerDataActive)}),Ih=(0,Co.string)().test({name:"hashSign",test:function(p){let{ledger:i,isGuarded:a}=this.parent;if(i){let{ledgerWithHashSign:u,ledgerWithGuardians:s}=(0,Ah.default)(i.version);if(p&&p.length>300&&!u)return this.createError({message:`Data too long. You need at least DharitrI app version ${Di.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(a&&!s)return this.createError({message:`You need at least DharitrI app version ${Di.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Th=[Bh,Ih],wB=Th.reduce((p,i)=>p.concat(i),(0,Co.string)());j();var EB=require("@terradharitri/sdk-dapp/constants/index"),xB=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),qB=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),SB=require("yup");j();var kB=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),AB=Q(require("bignumber.js")),BB=require("yup");j();var IB=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),TB=Q(require("bignumber.js")),UB=require("yup");j();var CB=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),LB=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),OB=Q(require("bignumber.js")),NB=require("yup");j();var RB=Q(require("bignumber.js")),MB=require("yup");j();var PB=require("@terradharitri/sdk-dapp/constants/index"),DB=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),FB=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),jB=Q(require("bignumber.js")),zB=require("yup");j();var GB=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),VB=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),WB=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),YB=Q(require("bignumber.js")),$B=require("yup");j();var HB=Q(require("bignumber.js")),ZB=require("yup");j();var XB=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),JB=require("yup");j();var KB=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),QB=require("yup");j();j();var eI=(0,Sh.createContext)({});j();j();var Uh=Q(require("react")),rI=require("formik"),tI=Q(require("lodash/uniqBy"));j();j();var Gi=Q(require("react")),Ch=(0,Gi.createContext)({});function Lh(){return(0,Gi.useContext)(Ch)}j();j();var oI=require("react"),nI=require("@terradharitri/sdk-dapp/constants/index"),aI=require("@terradharitri/sdk-dapp/types/enums.types");j();var iI=(0,Uh.createContext)({});j();j();var lI=require("@terradharitri/sdk-dapp/constants/index"),pI=require("formik");j();j();var Oh=Q(require("react")),cI=require("@terradharitri/sdk-dapp/constants/index"),uI=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),sI=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),dI=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),fI=Q(require("bignumber.js")),mI=require("formik");j();j();j();j();var _I=Q(require("bignumber.js"));j();var hI=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),gI=Q(require("bignumber.js"));j();j();var vI=require("react"),bI=require("@terradharitri/sdk-dapp/constants/index"),yI=require("@terradharitri/sdk-dapp/utils/smartContracts"),wI=Q(require("bignumber.js")),EI=require("formik");j();var xI=require("react");j();j();var qI=require("@terradharitri/sdk-dapp/constants/index"),SI=Q(require("bignumber.js")),kI=(0,Oh.createContext)({}),AI=(0,Eh.createContext)({});j();j();var Nh=Q(require("react")),BI=require("formik"),II=(0,Nh.createContext)({});j();j();var Rh=Q(require("react")),TI=require("formik");j();j();j();var UI=require("react"),CI=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),LI=Q(require("lodash/uniqBy"));j();j();var OI=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),NI=require("@terradharitri/sdk-dapp/utils");j();var RI=require("react");j();var MI=require("react"),PI=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),DI=(0,Rh.createContext)({});j();j();var Mh=Q(require("react")),FI=require("formik");j();j();j();j();j();var jI=require("react"),zI=require("@terradharitri/sdk-dapp/utils");j();var GI=require("react"),VI=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");j();j();var WI=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),YI=Q(require("axios"));j();var $I=Q(require("axios")),HI=(0,Mh.createContext)({});j();var Vi=Q(require("react")),Ph=(0,Vi.createContext)({});function Dh(){return(0,Vi.useContext)(Ph)}j();j();var ZI=require("@terradharitri/sdk-dapp/constants/index"),XI=require("@terradharitri/sdk-dapp/utils/validation"),JI=Q(require("bignumber.js"));j();j();var KI=require("react");j();var Fh=Q(require("bignumber.js")),jh=p=>{let[i,a]=p.split(""),u=new Fh.default(i).isZero();return Boolean(u&&a&&a!==".")};j();var zh=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zh));var Ar={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},Gh=()=>{let{networkConfig:p}=Lh(),{gasInfo:i,formInfo:a}=Dh(),{readonly:u}=a,{rewaLabel:s}=p,{gasPrice:_,gasPriceError:d,isGasPriceInvalid:n,onChangeGasPrice:w,onBlurGasPrice:y,onResetGasPrice:q}=i,b=_!==zi&&!u,E=xh("gasPrice",u),B=({value:v,floatValue:h})=>(!h||!(0,vh.default)(h).isNaN())&&!jh(v),f=v=>{v.preventDefault(),q()},g=v=>{w(v.value,!0)};return kr.default.createElement("div",{className:Ar.gas},kr.default.createElement("label",{className:Kr.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),kr.default.createElement("div",{className:Ar.wrapper},kr.default.createElement(bh.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:E,id:"gasPrice",inputMode:"decimal",isAllowed:B,name:"gasPrice",onBlur:y,onValueChange:g,required:!0,suffix:` ${s}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:_,valueIsNumericString:!0,allowNegative:!1,className:(0,Ni.default)(Kr.input,Ar.input,{[Kr.disabled]:E,[Kr.invalid]:n,[Ar.spaced]:b})}),b&&kr.default.createElement("div",{className:Ar.actions},kr.default.createElement("div",{onClick:f,className:(0,Ni.default)(Ar.action,{[Ar.disabled]:E})},kr.default.createElement(gh.FontAwesomeIcon,{icon:hh.faUndo,className:Ar.icon})))),n&&kr.default.createElement("div",{className:Kr.error,"data-testid":"gasPriceError"},d))};});var Xi=He((e9,Zi)=>{"use strict";ye();var Vh=Object.create,Ct=Object.defineProperty,Wh=Object.getOwnPropertyDescriptor,Yh=Object.getOwnPropertyNames,$h=Object.getPrototypeOf,Hh=Object.prototype.hasOwnProperty,Zh=(p,i)=>()=>(p&&(i=p(p=0)),i),Lt=(p,i)=>()=>(i||p((i={exports:{}}).exports,i),i.exports),Xh=(p,i)=>{for(var a in i)Ct(p,a,{get:i[a],enumerable:!0})},$i=(p,i,a,u)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of Yh(i))!Hh.call(p,s)&&s!==a&&Ct(p,s,{get:()=>i[s],enumerable:!(u=Wh(i,s))||u.enumerable});return p},Ut=(p,i,a)=>(a=p!=null?Vh($h(p)):{},$i(i||!p||!p.__esModule?Ct(a,"default",{value:p,enumerable:!0}):a,p)),Jh=p=>$i(Ct({},"__esModule",{value:!0}),p),Kh=Lt(p=>{"use strict";Pr(),p.byteLength=w,p.toByteArray=q,p.fromByteArray=B;var i=[],a=[],u=typeof Uint8Array!="undefined"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,d=s.length;_<d;++_)i[_]=s[_],a[s.charCodeAt(_)]=_;var _,d;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63;function n(f){var g=f.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=f.indexOf("=");v===-1&&(v=g);var h=v===g?0:4-v%4;return[v,h]}function w(f){var g=n(f),v=g[0],h=g[1];return(v+h)*3/4-h}function y(f,g,v){return(g+v)*3/4-v}function q(f){var g,v=n(f),h=v[0],S=v[1],x=new u(y(f,h,S)),N=0,P=S>0?h-4:h,O;for(O=0;O<P;O+=4)g=a[f.charCodeAt(O)]<<18|a[f.charCodeAt(O+1)]<<12|a[f.charCodeAt(O+2)]<<6|a[f.charCodeAt(O+3)],x[N++]=g>>16&255,x[N++]=g>>8&255,x[N++]=g&255;return S===2&&(g=a[f.charCodeAt(O)]<<2|a[f.charCodeAt(O+1)]>>4,x[N++]=g&255),S===1&&(g=a[f.charCodeAt(O)]<<10|a[f.charCodeAt(O+1)]<<4|a[f.charCodeAt(O+2)]>>2,x[N++]=g>>8&255,x[N++]=g&255),x}function b(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function E(f,g,v){for(var h,S=[],x=g;x<v;x+=3)h=(f[x]<<16&16711680)+(f[x+1]<<8&65280)+(f[x+2]&255),S.push(b(h));return S.join("")}function B(f){for(var g,v=f.length,h=v%3,S=[],x=16383,N=0,P=v-h;N<P;N+=x)S.push(E(f,N,N+x>P?P:N+x));return h===1?(g=f[v-1],S.push(i[g>>2]+i[g<<4&63]+"==")):h===2&&(g=(f[v-2]<<8)+f[v-1],S.push(i[g>>10]+i[g>>4&63]+i[g<<2&63]+"=")),S.join("")}}),Qh=Lt(p=>{Pr(),p.read=function(i,a,u,s,_){var d,n,w=_*8-s-1,y=(1<<w)-1,q=y>>1,b=-7,E=u?_-1:0,B=u?-1:1,f=i[a+E];for(E+=B,d=f&(1<<-b)-1,f>>=-b,b+=w;b>0;d=d*256+i[a+E],E+=B,b-=8);for(n=d&(1<<-b)-1,d>>=-b,b+=s;b>0;n=n*256+i[a+E],E+=B,b-=8);if(d===0)d=1-q;else{if(d===y)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,s),d=d-q}return(f?-1:1)*n*Math.pow(2,d-s)},p.write=function(i,a,u,s,_,d){var n,w,y,q=d*8-_-1,b=(1<<q)-1,E=b>>1,B=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=s?0:d-1,g=s?1:-1,v=a<0||a===0&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(w=isNaN(a)?1:0,n=b):(n=Math.floor(Math.log(a)/Math.LN2),a*(y=Math.pow(2,-n))<1&&(n--,y*=2),n+E>=1?a+=B/y:a+=B*Math.pow(2,1-E),a*y>=2&&(n++,y/=2),n+E>=b?(w=0,n=b):n+E>=1?(w=(a*y-1)*Math.pow(2,_),n=n+E):(w=a*Math.pow(2,E-1)*Math.pow(2,_),n=0));_>=8;i[u+f]=w&255,f+=g,w/=256,_-=8);for(n=n<<_|w,q+=_;q>0;i[u+f]=n&255,f+=g,n/=256,q-=8);i[u+f-g]|=v*128}}),eg=Lt(p=>{"use strict";Pr();var i=Kh(),a=Qh(),u=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=n,p.SlowBuffer=S,p.INSPECT_MAX_BYTES=50;var s=2147483647;p.kMaxLength=s,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function d(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return w(e,r,t)}n.poolSize=8192;function w(e,r,t){if(typeof e=="string")return E(e,r);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var l=v(e);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return w(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function y(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function q(e,r,t){return y(e),e<=0?d(e):r!==void 0?typeof t=="string"?d(e).fill(r,t):d(e).fill(r):d(e)}n.alloc=function(e,r,t){return q(e,r,t)};function b(e){return y(e),d(e<0?0:h(e)|0)}n.allocUnsafe=function(e){return b(e)},n.allocUnsafeSlow=function(e){return b(e)};function E(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=x(e,r)|0,o=d(t),l=o.write(e,r);return l!==t&&(o=o.slice(0,l)),o}function B(e){for(var r=e.length<0?0:h(e.length)|0,t=d(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function f(e){if(H(e,Uint8Array)){var r=new Uint8Array(e);return g(r.buffer,r.byteOffset,r.byteLength)}return B(e)}function g(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function v(e){if(n.isBuffer(e)){var r=h(e.length)|0,t=d(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||me(e.length)?d(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function h(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),H(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,l=0,c=Math.min(t,o);l<c;++l)if(e[l]!==r[l]){t=e[l],o=r[l];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),l=0;for(t=0;t<e.length;++t){var c=e[t];if(H(c,Uint8Array))l+c.length>o.length?n.from(c).copy(o,l):Uint8Array.prototype.set.call(o,c,l);else if(n.isBuffer(c))c.copy(o,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=c.length}return o};function x(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var l=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return qe(e).length;default:if(l)return o?-1:fe(e).length;r=(""+r).toLowerCase(),l=!0}}n.byteLength=x;function N(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return re(this,r,t);case"ascii":return xe(this,r,t);case"latin1":case"binary":return Be(this,r,t);case"base64":return ie(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function P(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)P(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)P(this,r,r+3),P(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)P(this,r,r+7),P(this,r+1,r+6),P(this,r+2,r+5),P(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):N.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=p.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},u&&(n.prototype[u]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,l){if(H(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),l===void 0&&(l=this.length),r<0||t>e.length||o<0||l>this.length)throw new RangeError("out of range index");if(o>=l&&r>=t)return 0;if(o>=l)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,l>>>=0,this===e)return 0;for(var c=l-o,m=t-r,k=Math.min(c,m),L=this.slice(o,l),A=e.slice(r,t),T=0;T<k;++T)if(L[T]!==A[T]){c=L[T],m=A[T];break}return c<m?-1:m<c?1:0};function O(e,r,t,o,l){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,me(t)&&(t=l?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(l)return-1;t=e.length-1}else if(t<0)if(l)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:ne(e,r,t,o,l);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ne(e,[r],t,o,l);throw new TypeError("val must be string, number or Buffer")}function ne(e,r,t,o,l){var c=1,m=e.length,k=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;c=2,m/=2,k/=2,t/=2}function L(Se,ke){return c===1?Se[ke]:Se.readUInt16BE(ke*c)}var A;if(l){var T=-1;for(A=t;A<m;A++)if(L(e,A)===L(r,T===-1?0:A-T)){if(T===-1&&(T=A),A-T+1===k)return T*c}else T!==-1&&(A-=A-T),T=-1}else for(t+k>m&&(t=m-k),A=t;A>=0;A--){for(var R=!0,ce=0;ce<k;ce++)if(L(e,A+ce)!==L(r,ce)){R=!1;break}if(R)return A}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return O(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return O(this,e,r,t,!1)};function _e(e,r,t,o){t=Number(t)||0;var l=e.length-t;o?(o=Number(o),o>l&&(o=l)):o=l;var c=r.length;o>c/2&&(o=c/2);for(var m=0;m<o;++m){var k=parseInt(r.substr(m*2,2),16);if(me(k))return m;e[t+m]=k}return m}function he(e,r,t,o){return pe(fe(r,e.length-t),e,t,o)}function de(e,r,t,o){return pe(Re(r),e,t,o)}function ve(e,r,t,o){return pe(qe(r),e,t,o)}function be(e,r,t,o){return pe(Me(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-r;if((t===void 0||t>l)&&(t=l),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var c=!1;;)switch(o){case"hex":return _e(this,e,r,t);case"utf8":case"utf-8":return he(this,e,r,t);case"ascii":case"latin1":case"binary":return de(this,e,r,t);case"base64":return ve(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return be(this,e,r,t);default:if(c)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),c=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ie(e,r,t){return r===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(r,t))}function re(e,r,t){t=Math.min(e.length,t);for(var o=[],l=r;l<t;){var c=e[l],m=null,k=c>239?4:c>223?3:c>191?2:1;if(l+k<=t){var L,A,T,R;switch(k){case 1:c<128&&(m=c);break;case 2:L=e[l+1],(L&192)===128&&(R=(c&31)<<6|L&63,R>127&&(m=R));break;case 3:L=e[l+1],A=e[l+2],(L&192)===128&&(A&192)===128&&(R=(c&15)<<12|(L&63)<<6|A&63,R>2047&&(R<55296||R>57343)&&(m=R));break;case 4:L=e[l+1],A=e[l+2],T=e[l+3],(L&192)===128&&(A&192)===128&&(T&192)===128&&(R=(c&15)<<18|(L&63)<<12|(A&63)<<6|T&63,R>65535&&R<1114112&&(m=R))}}m===null?(m=65533,k=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),l+=k}return Ee(o)}var ae=4096;function Ee(e){var r=e.length;if(r<=ae)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ae));return t}function xe(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]&127);return o}function Be(e,r,t){var o="";t=Math.min(e.length,t);for(var l=r;l<t;++l)o+=String.fromCharCode(e[l]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var l="",c=r;c<t;++c)l+=Pe[e[c]];return l}function Ae(e,r,t){for(var o=e.slice(r,t),l="",c=0;c<o.length-1;c+=2)l+=String.fromCharCode(o[c]+o[c+1]*256);return l}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function I(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e+--r],l=1;r>0&&(l*=256);)o+=this[e+--r]*l;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||I(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=this[e],l=1,c=0;++c<r&&(l*=256);)o+=this[e+c]*l;return l*=128,o>=l&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||I(e,r,this.length);for(var o=r,l=1,c=this[e+--o];o>0&&(l*=256);)c+=this[e+--o]*l;return l*=128,c>=l&&(c-=Math.pow(2,8*r)),c},n.prototype.readInt8=function(e,r){return e=e>>>0,r||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||I(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||I(e,4,this.length),a.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||I(e,8,this.length),a.read(this,e,!1,52,8)};function D(e,r,t,o,l,c){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>l||r<c)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=1,m=0;for(this[r]=e&255;++m<t&&(c*=256);)this[r+m]=e/c&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var l=Math.pow(2,8*t)-1;D(this,e,r,t,l,0)}var c=t-1,m=1;for(this[r+c]=e&255;--c>=0&&(m*=256);)this[r+c]=e/m&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=0,m=1,k=0;for(this[r]=e&255;++c<t&&(m*=256);)e<0&&k===0&&this[r+c-1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var l=Math.pow(2,8*t-1);D(this,e,r,t,l-1,-l)}var c=t-1,m=1,k=0;for(this[r+c]=e&255;--c>=0&&(m*=256);)e<0&&k===0&&this[r+c+1]!==0&&(k=1),this[r+c]=(e/m>>0)-k&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ge(e,r,t,o,l,c){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function we(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,4,34028234663852886e22,-34028234663852886e22),a.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return we(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return we(this,e,r,!1,t)};function se(e,r,t,o,l){return r=+r,t=t>>>0,l||ge(e,r,t,8,17976931348623157e292,-17976931348623157e292),a.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return se(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return se(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var l=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),l},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var l=e.charCodeAt(0);(o==="utf8"&&l<128||o==="latin1")&&(e=l)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var c;if(typeof e=="number")for(c=r;c<t;++c)this[c]=e;else{var m=n.isBuffer(e)?e:n.from(e,o),k=m.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<t-r;++c)this[c+r]=m[c%k]}return this};var Oe=/[^+/0-9A-Za-z-_]/g;function Ne(e){if(e=e.split("=")[0],e=e.trim().replace(Oe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function fe(e,r){r=r||1/0;for(var t,o=e.length,l=null,c=[],m=0;m<o;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!l){if(t>56319){(r-=3)>-1&&c.push(239,191,189);continue}else if(m+1===o){(r-=3)>-1&&c.push(239,191,189);continue}l=t;continue}if(t<56320){(r-=3)>-1&&c.push(239,191,189),l=t;continue}t=(l-55296<<10|t-56320)+65536}else l&&(r-=3)>-1&&c.push(239,191,189);if(l=null,t<128){if((r-=1)<0)break;c.push(t)}else if(t<2048){if((r-=2)<0)break;c.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;c.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;c.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return c}function Re(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Me(e,r){for(var t,o,l,c=[],m=0;m<e.length&&!((r-=2)<0);++m)t=e.charCodeAt(m),o=t>>8,l=t%256,c.push(l),c.push(o);return c}function qe(e){return i.toByteArray(Ne(e))}function pe(e,r,t,o){for(var l=0;l<o&&!(l+t>=r.length||l>=e.length);++l)r[l+t]=e[l];return l}function H(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function me(e){return e!==e}var Pe=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,l=0;l<16;++l)r[o+l]=e[t]+e[l];return r}()}),rg=Lt((p,i)=>{Pr();var a=i.exports={},u,s;function _(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?u=setTimeout:u=_}catch(h){u=_}try{typeof clearTimeout=="function"?s=clearTimeout:s=d}catch(h){s=d}})();function n(h){if(u===setTimeout)return setTimeout(h,0);if((u===_||!u)&&setTimeout)return u=setTimeout,setTimeout(h,0);try{return u(h,0)}catch(S){try{return u.call(null,h,0)}catch(x){return u.call(this,h,0)}}}function w(h){if(s===clearTimeout)return clearTimeout(h);if((s===d||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(h);try{return s(h)}catch(S){try{return s.call(null,h)}catch(x){return s.call(this,h)}}}var y=[],q=!1,b,E=-1;function B(){!q||!b||(q=!1,b.length?y=b.concat(y):E=-1,y.length&&f())}function f(){if(!q){var h=n(B);q=!0;for(var S=y.length;S;){for(b=y,y=[];++E<S;)b&&b[E].run();E=-1,S=y.length}b=null,q=!1,w(h)}}a.nextTick=function(h){var S=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)S[x-1]=arguments[x];y.push(new g(h,S)),y.length===1&&!q&&n(f)};function g(h,S){this.fun=h,this.array=S}g.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={};function v(){}a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(h){return[]},a.binding=function(h){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(h){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}),tg,og,ng,Pr=Zh(()=>{tg=Ut(eg()),og=Ut(rg()),ng=function(p){function i(){var u=this||self;return delete p.prototype.__magic__,u}if(typeof globalThis=="object")return globalThis;if(this)return i();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:i});var a=__magic__;return a}(Object)}),Hi={};Xh(Hi,{AmountSlider:()=>ig});Zi.exports=Jh(Hi);Pr();Pr();var Br=Ut(require("react")),Mr=Ut(require("classnames"));Pr();var ag=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ag));var Ge={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"},ig=({disabled:p,percentageValue:i=0,onPercentageChange:a,className:u})=>{let s=[0,25,50,75,100],_="amountSlider";return Br.default.createElement("div",{className:(0,Mr.default)(Ge.amountSlider,u)},Br.default.createElement("div",{className:Ge.amountSliderRange},Br.default.createElement("input",{name:_,id:_,"data-testid":_,type:"range",disabled:p,min:0,max:100,value:String(i),className:(0,Mr.default)(Ge.amountSliderInput,{[Ge.disabled]:p}),onChange:d=>{a(Number(d.target.value))}}),Br.default.createElement("div",{style:{width:`${i}%`},className:(0,Mr.default)(Ge.amountSliderCompletion,{[Ge.disabled]:p})}),s.map(d=>Br.default.createElement("span",{onClick:()=>a(d),key:`breakpoint-${d}`,style:{left:`${d}%`},className:(0,Mr.default)(Ge.amountSliderBreakpoint,{[Ge.completed]:d<=i,[Ge.disabled]:p})})),s.map(d=>Br.default.createElement("span",{style:{left:`${d}%`},key:`breakpoint-${d}`,onClick:()=>a(d),className:(0,Mr.default)(Ge.amountSliderPercentage,{[Ge.exact]:d===i,[Ge.disabled]:p})},d,"%")),Br.default.createElement("span",{style:{left:`${i}%`},className:(0,Mr.default)(Ge.amountSliderThumb,{[Ge.disabled]:p})},Br.default.createElement("strong",{className:(0,Mr.default)(Ge.amountSliderThumbPercentage,{[Ge.hidden]:s.includes(i)})},Math.round(i),"%"))))};});var Y={};module.exports=ol(Y);ye();$(Y,er(Bn()),module.exports);$(Y,er(Pn()),module.exports);$(Y,er(la()),module.exports);$(Y,er(Ia()),module.exports);$(Y,er(ui()),module.exports);$(Y,er(qi()),module.exports);$(Y,er(Oi()),module.exports);$(Y,er(Yi()),module.exports);$(Y,er(Xi()),module.exports);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
