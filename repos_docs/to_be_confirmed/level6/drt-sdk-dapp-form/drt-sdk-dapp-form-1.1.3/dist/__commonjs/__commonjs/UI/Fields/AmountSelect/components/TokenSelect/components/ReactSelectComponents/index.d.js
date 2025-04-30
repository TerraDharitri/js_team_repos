"use strict";var Gn=Object.create;var Lt=Object.defineProperty;var $n=Object.getOwnPropertyDescriptor;var Hn=Object.getOwnPropertyNames;var Jn=Object.getPrototypeOf,Kn=Object.prototype.hasOwnProperty;var Qn=(_,l)=>()=>(_&&(l=_(_=0)),l);var xe=(_,l)=>()=>(l||_((l={exports:{}}).exports,l),l.exports);var at=(_,l,c,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of Hn(l))!Kn.call(_,u)&&u!==c&&Lt(_,u,{get:()=>l[u],enumerable:!(a=$n(l,u))||a.enumerable});return _},F=(_,l,c)=>(at(_,l,"default"),c&&at(c,l,"default")),Te=(_,l,c)=>(c=_!=null?Gn(Jn(_)):{},at(l||!_||!_.__esModule?Lt(c,"default",{value:_,enumerable:!0}):c,_)),er=_=>at(Lt({},"__esModule",{value:!0}),_);var Qt=xe(ut=>{"use strict";X();ut.byteLength=or;ut.toByteArray=rr;ut.fromByteArray=lr;var Ie=[],Be=[],tr=typeof Uint8Array!="undefined"?Uint8Array:Array,Ot="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ne=0,Jt=Ot.length;Ne<Jt;++Ne)Ie[Ne]=Ot[Ne],Be[Ot.charCodeAt(Ne)]=Ne;var Ne,Jt;Be["-".charCodeAt(0)]=62;Be["_".charCodeAt(0)]=63;function Kt(_){var l=_.length;if(l%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=_.indexOf("=");c===-1&&(c=l);var a=c===l?0:4-c%4;return[c,a]}function or(_){var l=Kt(_),c=l[0],a=l[1];return(c+a)*3/4-a}function nr(_,l,c){return(l+c)*3/4-c}function rr(_){var l,c=Kt(_),a=c[0],u=c[1],h=new tr(nr(_,a,u)),s=0,r=u>0?a-4:a,A;for(A=0;A<r;A+=4)l=Be[_.charCodeAt(A)]<<18|Be[_.charCodeAt(A+1)]<<12|Be[_.charCodeAt(A+2)]<<6|Be[_.charCodeAt(A+3)],h[s++]=l>>16&255,h[s++]=l>>8&255,h[s++]=l&255;return u===2&&(l=Be[_.charCodeAt(A)]<<2|Be[_.charCodeAt(A+1)]>>4,h[s++]=l&255),u===1&&(l=Be[_.charCodeAt(A)]<<10|Be[_.charCodeAt(A+1)]<<4|Be[_.charCodeAt(A+2)]>>2,h[s++]=l>>8&255,h[s++]=l&255),h}function cr(_){return Ie[_>>18&63]+Ie[_>>12&63]+Ie[_>>6&63]+Ie[_&63]}function pr(_,l,c){for(var a,u=[],h=l;h<c;h+=3)a=(_[h]<<16&16711680)+(_[h+1]<<8&65280)+(_[h+2]&255),u.push(cr(a));return u.join("")}function lr(_){for(var l,c=_.length,a=c%3,u=[],h=16383,s=0,r=c-a;s<r;s+=h)u.push(pr(_,s,s+h>r?r:s+h));return a===1?(l=_[c-1],u.push(Ie[l>>2]+Ie[l<<4&63]+"==")):a===2&&(l=(_[c-2]<<8)+_[c-1],u.push(Ie[l>>10]+Ie[l>>4&63]+Ie[l<<2&63]+"=")),u.join("")}});var eo=xe(Ct=>{X();Ct.read=function(_,l,c,a,u){var h,s,r=u*8-a-1,A=(1<<r)-1,S=A>>1,B=-7,k=c?u-1:0,x=c?-1:1,L=_[l+k];for(k+=x,h=L&(1<<-B)-1,L>>=-B,B+=r;B>0;h=h*256+_[l+k],k+=x,B-=8);for(s=h&(1<<-B)-1,h>>=-B,B+=a;B>0;s=s*256+_[l+k],k+=x,B-=8);if(h===0)h=1-S;else{if(h===A)return s?NaN:(L?-1:1)*(1/0);s=s+Math.pow(2,a),h=h-S}return(L?-1:1)*s*Math.pow(2,h-a)};Ct.write=function(_,l,c,a,u,h){var s,r,A,S=h*8-u-1,B=(1<<S)-1,k=B>>1,x=u===23?Math.pow(2,-24)-Math.pow(2,-77):0,L=a?0:h-1,m=a?1:-1,g=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(r=isNaN(l)?1:0,s=B):(s=Math.floor(Math.log(l)/Math.LN2),l*(A=Math.pow(2,-s))<1&&(s--,A*=2),s+k>=1?l+=x/A:l+=x*Math.pow(2,1-k),l*A>=2&&(s++,A/=2),s+k>=B?(r=0,s=B):s+k>=1?(r=(l*A-1)*Math.pow(2,u),s=s+k):(r=l*Math.pow(2,k-1)*Math.pow(2,u),s=0));u>=8;_[c+L]=r&255,L+=m,r/=256,u-=8);for(s=s<<u|r,S+=u;S>0;_[c+L]=s&255,L+=m,s/=256,S-=8);_[c+L-m]|=g*128}});var so=xe(Xe=>{"use strict";X();var Rt=Qt(),Ve=eo(),to=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Xe.Buffer=P;Xe.SlowBuffer=mr;Xe.INSPECT_MAX_BYTES=50;var dt=2147483647;Xe.kMaxLength=dt;P.TYPED_ARRAY_SUPPORT=ir();!P.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ir(){try{var _=new Uint8Array(1),l={foo:function(){return 42}};return Object.setPrototypeOf(l,Uint8Array.prototype),Object.setPrototypeOf(_,l),_.foo()===42}catch(c){return!1}}Object.defineProperty(P.prototype,"parent",{enumerable:!0,get:function(){if(!!P.isBuffer(this))return this.buffer}});Object.defineProperty(P.prototype,"offset",{enumerable:!0,get:function(){if(!!P.isBuffer(this))return this.byteOffset}});function Me(_){if(_>dt)throw new RangeError('The value "'+_+'" is invalid for option "size"');var l=new Uint8Array(_);return Object.setPrototypeOf(l,P.prototype),l}function P(_,l,c){if(typeof _=="number"){if(typeof l=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Nt(_)}return ro(_,l,c)}P.poolSize=8192;function ro(_,l,c){if(typeof _=="string")return ar(_,l);if(ArrayBuffer.isView(_))return ur(_);if(_==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof _);if(Le(_,ArrayBuffer)||_&&Le(_.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Le(_,SharedArrayBuffer)||_&&Le(_.buffer,SharedArrayBuffer)))return jt(_,l,c);if(typeof _=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var a=_.valueOf&&_.valueOf();if(a!=null&&a!==_)return P.from(a,l,c);var u=dr(_);if(u)return u;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof _[Symbol.toPrimitive]=="function")return P.from(_[Symbol.toPrimitive]("string"),l,c);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof _)}P.from=function(_,l,c){return ro(_,l,c)};Object.setPrototypeOf(P.prototype,Uint8Array.prototype);Object.setPrototypeOf(P,Uint8Array);function co(_){if(typeof _!="number")throw new TypeError('"size" argument must be of type number');if(_<0)throw new RangeError('The value "'+_+'" is invalid for option "size"')}function _r(_,l,c){return co(_),_<=0?Me(_):l!==void 0?typeof c=="string"?Me(_).fill(l,c):Me(_).fill(l):Me(_)}P.alloc=function(_,l,c){return _r(_,l,c)};function Nt(_){return co(_),Me(_<0?0:Ft(_)|0)}P.allocUnsafe=function(_){return Nt(_)};P.allocUnsafeSlow=function(_){return Nt(_)};function ar(_,l){if((typeof l!="string"||l==="")&&(l="utf8"),!P.isEncoding(l))throw new TypeError("Unknown encoding: "+l);var c=po(_,l)|0,a=Me(c),u=a.write(_,l);return u!==c&&(a=a.slice(0,u)),a}function Mt(_){for(var l=_.length<0?0:Ft(_.length)|0,c=Me(l),a=0;a<l;a+=1)c[a]=_[a]&255;return c}function ur(_){if(Le(_,Uint8Array)){var l=new Uint8Array(_);return jt(l.buffer,l.byteOffset,l.byteLength)}return Mt(_)}function jt(_,l,c){if(l<0||_.byteLength<l)throw new RangeError('"offset" is outside of buffer bounds');if(_.byteLength<l+(c||0))throw new RangeError('"length" is outside of buffer bounds');var a;return l===void 0&&c===void 0?a=new Uint8Array(_):c===void 0?a=new Uint8Array(_,l):a=new Uint8Array(_,l,c),Object.setPrototypeOf(a,P.prototype),a}function dr(_){if(P.isBuffer(_)){var l=Ft(_.length)|0,c=Me(l);return c.length===0||_.copy(c,0,0,l),c}if(_.length!==void 0)return typeof _.length!="number"||zt(_.length)?Me(0):Mt(_);if(_.type==="Buffer"&&Array.isArray(_.data))return Mt(_.data)}function Ft(_){if(_>=dt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+dt.toString(16)+" bytes");return _|0}function mr(_){return+_!=_&&(_=0),P.alloc(+_)}P.isBuffer=function(l){return l!=null&&l._isBuffer===!0&&l!==P.prototype};P.compare=function(l,c){if(Le(l,Uint8Array)&&(l=P.from(l,l.offset,l.byteLength)),Le(c,Uint8Array)&&(c=P.from(c,c.offset,c.byteLength)),!P.isBuffer(l)||!P.isBuffer(c))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(l===c)return 0;for(var a=l.length,u=c.length,h=0,s=Math.min(a,u);h<s;++h)if(l[h]!==c[h]){a=l[h],u=c[h];break}return a<u?-1:u<a?1:0};P.isEncoding=function(l){switch(String(l).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};P.concat=function(l,c){if(!Array.isArray(l))throw new TypeError('"list" argument must be an Array of Buffers');if(l.length===0)return P.alloc(0);var a;if(c===void 0)for(c=0,a=0;a<l.length;++a)c+=l[a].length;var u=P.allocUnsafe(c),h=0;for(a=0;a<l.length;++a){var s=l[a];if(Le(s,Uint8Array))h+s.length>u.length?P.from(s).copy(u,h):Uint8Array.prototype.set.call(u,s,h);else if(P.isBuffer(s))s.copy(u,h);else throw new TypeError('"list" argument must be an Array of Buffers');h+=s.length}return u};function po(_,l){if(P.isBuffer(_))return _.length;if(ArrayBuffer.isView(_)||Le(_,ArrayBuffer))return _.byteLength;if(typeof _!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof _);var c=_.length,a=arguments.length>2&&arguments[2]===!0;if(!a&&c===0)return 0;for(var u=!1;;)switch(l){case"ascii":case"latin1":case"binary":return c;case"utf8":case"utf-8":return Pt(_).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c*2;case"hex":return c>>>1;case"base64":return mo(_).length;default:if(u)return a?-1:Pt(_).length;l=(""+l).toLowerCase(),u=!0}}P.byteLength=po;function sr(_,l,c){var a=!1;if((l===void 0||l<0)&&(l=0),l>this.length||((c===void 0||c>this.length)&&(c=this.length),c<=0)||(c>>>=0,l>>>=0,c<=l))return"";for(_||(_="utf8");;)switch(_){case"hex":return xr(this,l,c);case"utf8":case"utf-8":return io(this,l,c);case"ascii":return vr(this,l,c);case"latin1":case"binary":return br(this,l,c);case"base64":return Sr(this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Er(this,l,c);default:if(a)throw new TypeError("Unknown encoding: "+_);_=(_+"").toLowerCase(),a=!0}}P.prototype._isBuffer=!0;function Fe(_,l,c){var a=_[l];_[l]=_[c],_[c]=a}P.prototype.swap16=function(){var l=this.length;if(l%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var c=0;c<l;c+=2)Fe(this,c,c+1);return this};P.prototype.swap32=function(){var l=this.length;if(l%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var c=0;c<l;c+=4)Fe(this,c,c+3),Fe(this,c+1,c+2);return this};P.prototype.swap64=function(){var l=this.length;if(l%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var c=0;c<l;c+=8)Fe(this,c,c+7),Fe(this,c+1,c+6),Fe(this,c+2,c+5),Fe(this,c+3,c+4);return this};P.prototype.toString=function(){var l=this.length;return l===0?"":arguments.length===0?io(this,0,l):sr.apply(this,arguments)};P.prototype.toLocaleString=P.prototype.toString;P.prototype.equals=function(l){if(!P.isBuffer(l))throw new TypeError("Argument must be a Buffer");return this===l?!0:P.compare(this,l)===0};P.prototype.inspect=function(){var l="",c=Xe.INSPECT_MAX_BYTES;return l=this.toString("hex",0,c).replace(/(.{2})/g,"$1 ").trim(),this.length>c&&(l+=" ... "),"<Buffer "+l+">"};to&&(P.prototype[to]=P.prototype.inspect);P.prototype.compare=function(l,c,a,u,h){if(Le(l,Uint8Array)&&(l=P.from(l,l.offset,l.byteLength)),!P.isBuffer(l))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof l);if(c===void 0&&(c=0),a===void 0&&(a=l?l.length:0),u===void 0&&(u=0),h===void 0&&(h=this.length),c<0||a>l.length||u<0||h>this.length)throw new RangeError("out of range index");if(u>=h&&c>=a)return 0;if(u>=h)return-1;if(c>=a)return 1;if(c>>>=0,a>>>=0,u>>>=0,h>>>=0,this===l)return 0;for(var s=h-u,r=a-c,A=Math.min(s,r),S=this.slice(u,h),B=l.slice(c,a),k=0;k<A;++k)if(S[k]!==B[k]){s=S[k],r=B[k];break}return s<r?-1:r<s?1:0};function lo(_,l,c,a,u){if(_.length===0)return-1;if(typeof c=="string"?(a=c,c=0):c>2147483647?c=2147483647:c<-2147483648&&(c=-2147483648),c=+c,zt(c)&&(c=u?0:_.length-1),c<0&&(c=_.length+c),c>=_.length){if(u)return-1;c=_.length-1}else if(c<0)if(u)c=0;else return-1;if(typeof l=="string"&&(l=P.from(l,a)),P.isBuffer(l))return l.length===0?-1:oo(_,l,c,a,u);if(typeof l=="number")return l=l&255,typeof Uint8Array.prototype.indexOf=="function"?u?Uint8Array.prototype.indexOf.call(_,l,c):Uint8Array.prototype.lastIndexOf.call(_,l,c):oo(_,[l],c,a,u);throw new TypeError("val must be string, number or Buffer")}function oo(_,l,c,a,u){var h=1,s=_.length,r=l.length;if(a!==void 0&&(a=String(a).toLowerCase(),a==="ucs2"||a==="ucs-2"||a==="utf16le"||a==="utf-16le")){if(_.length<2||l.length<2)return-1;h=2,s/=2,r/=2,c/=2}function A(L,m){return h===1?L[m]:L.readUInt16BE(m*h)}var S;if(u){var B=-1;for(S=c;S<s;S++)if(A(_,S)===A(l,B===-1?0:S-B)){if(B===-1&&(B=S),S-B+1===r)return B*h}else B!==-1&&(S-=S-B),B=-1}else for(c+r>s&&(c=s-r),S=c;S>=0;S--){for(var k=!0,x=0;x<r;x++)if(A(_,S+x)!==A(l,x)){k=!1;break}if(k)return S}return-1}P.prototype.includes=function(l,c,a){return this.indexOf(l,c,a)!==-1};P.prototype.indexOf=function(l,c,a){return lo(this,l,c,a,!0)};P.prototype.lastIndexOf=function(l,c,a){return lo(this,l,c,a,!1)};function fr(_,l,c,a){c=Number(c)||0;var u=_.length-c;a?(a=Number(a),a>u&&(a=u)):a=u;var h=l.length;a>h/2&&(a=h/2);for(var s=0;s<a;++s){var r=parseInt(l.substr(s*2,2),16);if(zt(r))return s;_[c+s]=r}return s}function hr(_,l,c,a){return mt(Pt(l,_.length-c),_,c,a)}function gr(_,l,c,a){return mt(Ur(l),_,c,a)}function yr(_,l,c,a){return mt(mo(l),_,c,a)}function kr(_,l,c,a){return mt(Tr(l,_.length-c),_,c,a)}P.prototype.write=function(l,c,a,u){if(c===void 0)u="utf8",a=this.length,c=0;else if(a===void 0&&typeof c=="string")u=c,a=this.length,c=0;else if(isFinite(c))c=c>>>0,isFinite(a)?(a=a>>>0,u===void 0&&(u="utf8")):(u=a,a=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var h=this.length-c;if((a===void 0||a>h)&&(a=h),l.length>0&&(a<0||c<0)||c>this.length)throw new RangeError("Attempt to write outside buffer bounds");u||(u="utf8");for(var s=!1;;)switch(u){case"hex":return fr(this,l,c,a);case"utf8":case"utf-8":return hr(this,l,c,a);case"ascii":case"latin1":case"binary":return gr(this,l,c,a);case"base64":return yr(this,l,c,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return kr(this,l,c,a);default:if(s)throw new TypeError("Unknown encoding: "+u);u=(""+u).toLowerCase(),s=!0}};P.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Sr(_,l,c){return l===0&&c===_.length?Rt.fromByteArray(_):Rt.fromByteArray(_.slice(l,c))}function io(_,l,c){c=Math.min(_.length,c);for(var a=[],u=l;u<c;){var h=_[u],s=null,r=h>239?4:h>223?3:h>191?2:1;if(u+r<=c){var A,S,B,k;switch(r){case 1:h<128&&(s=h);break;case 2:A=_[u+1],(A&192)===128&&(k=(h&31)<<6|A&63,k>127&&(s=k));break;case 3:A=_[u+1],S=_[u+2],(A&192)===128&&(S&192)===128&&(k=(h&15)<<12|(A&63)<<6|S&63,k>2047&&(k<55296||k>57343)&&(s=k));break;case 4:A=_[u+1],S=_[u+2],B=_[u+3],(A&192)===128&&(S&192)===128&&(B&192)===128&&(k=(h&15)<<18|(A&63)<<12|(S&63)<<6|B&63,k>65535&&k<1114112&&(s=k))}}s===null?(s=65533,r=1):s>65535&&(s-=65536,a.push(s>>>10&1023|55296),s=56320|s&1023),a.push(s),u+=r}return wr(a)}var no=4096;function wr(_){var l=_.length;if(l<=no)return String.fromCharCode.apply(String,_);for(var c="",a=0;a<l;)c+=String.fromCharCode.apply(String,_.slice(a,a+=no));return c}function vr(_,l,c){var a="";c=Math.min(_.length,c);for(var u=l;u<c;++u)a+=String.fromCharCode(_[u]&127);return a}function br(_,l,c){var a="";c=Math.min(_.length,c);for(var u=l;u<c;++u)a+=String.fromCharCode(_[u]);return a}function xr(_,l,c){var a=_.length;(!l||l<0)&&(l=0),(!c||c<0||c>a)&&(c=a);for(var u="",h=l;h<c;++h)u+=Ir[_[h]];return u}function Er(_,l,c){for(var a=_.slice(l,c),u="",h=0;h<a.length-1;h+=2)u+=String.fromCharCode(a[h]+a[h+1]*256);return u}P.prototype.slice=function(l,c){var a=this.length;l=~~l,c=c===void 0?a:~~c,l<0?(l+=a,l<0&&(l=0)):l>a&&(l=a),c<0?(c+=a,c<0&&(c=0)):c>a&&(c=a),c<l&&(c=l);var u=this.subarray(l,c);return Object.setPrototypeOf(u,P.prototype),u};function ne(_,l,c){if(_%1!==0||_<0)throw new RangeError("offset is not uint");if(_+l>c)throw new RangeError("Trying to access beyond buffer length")}P.prototype.readUintLE=P.prototype.readUIntLE=function(l,c,a){l=l>>>0,c=c>>>0,a||ne(l,c,this.length);for(var u=this[l],h=1,s=0;++s<c&&(h*=256);)u+=this[l+s]*h;return u};P.prototype.readUintBE=P.prototype.readUIntBE=function(l,c,a){l=l>>>0,c=c>>>0,a||ne(l,c,this.length);for(var u=this[l+--c],h=1;c>0&&(h*=256);)u+=this[l+--c]*h;return u};P.prototype.readUint8=P.prototype.readUInt8=function(l,c){return l=l>>>0,c||ne(l,1,this.length),this[l]};P.prototype.readUint16LE=P.prototype.readUInt16LE=function(l,c){return l=l>>>0,c||ne(l,2,this.length),this[l]|this[l+1]<<8};P.prototype.readUint16BE=P.prototype.readUInt16BE=function(l,c){return l=l>>>0,c||ne(l,2,this.length),this[l]<<8|this[l+1]};P.prototype.readUint32LE=P.prototype.readUInt32LE=function(l,c){return l=l>>>0,c||ne(l,4,this.length),(this[l]|this[l+1]<<8|this[l+2]<<16)+this[l+3]*16777216};P.prototype.readUint32BE=P.prototype.readUInt32BE=function(l,c){return l=l>>>0,c||ne(l,4,this.length),this[l]*16777216+(this[l+1]<<16|this[l+2]<<8|this[l+3])};P.prototype.readIntLE=function(l,c,a){l=l>>>0,c=c>>>0,a||ne(l,c,this.length);for(var u=this[l],h=1,s=0;++s<c&&(h*=256);)u+=this[l+s]*h;return h*=128,u>=h&&(u-=Math.pow(2,8*c)),u};P.prototype.readIntBE=function(l,c,a){l=l>>>0,c=c>>>0,a||ne(l,c,this.length);for(var u=c,h=1,s=this[l+--u];u>0&&(h*=256);)s+=this[l+--u]*h;return h*=128,s>=h&&(s-=Math.pow(2,8*c)),s};P.prototype.readInt8=function(l,c){return l=l>>>0,c||ne(l,1,this.length),this[l]&128?(255-this[l]+1)*-1:this[l]};P.prototype.readInt16LE=function(l,c){l=l>>>0,c||ne(l,2,this.length);var a=this[l]|this[l+1]<<8;return a&32768?a|4294901760:a};P.prototype.readInt16BE=function(l,c){l=l>>>0,c||ne(l,2,this.length);var a=this[l+1]|this[l]<<8;return a&32768?a|4294901760:a};P.prototype.readInt32LE=function(l,c){return l=l>>>0,c||ne(l,4,this.length),this[l]|this[l+1]<<8|this[l+2]<<16|this[l+3]<<24};P.prototype.readInt32BE=function(l,c){return l=l>>>0,c||ne(l,4,this.length),this[l]<<24|this[l+1]<<16|this[l+2]<<8|this[l+3]};P.prototype.readFloatLE=function(l,c){return l=l>>>0,c||ne(l,4,this.length),Ve.read(this,l,!0,23,4)};P.prototype.readFloatBE=function(l,c){return l=l>>>0,c||ne(l,4,this.length),Ve.read(this,l,!1,23,4)};P.prototype.readDoubleLE=function(l,c){return l=l>>>0,c||ne(l,8,this.length),Ve.read(this,l,!0,52,8)};P.prototype.readDoubleBE=function(l,c){return l=l>>>0,c||ne(l,8,this.length),Ve.read(this,l,!1,52,8)};function be(_,l,c,a,u,h){if(!P.isBuffer(_))throw new TypeError('"buffer" argument must be a Buffer instance');if(l>u||l<h)throw new RangeError('"value" argument is out of bounds');if(c+a>_.length)throw new RangeError("Index out of range")}P.prototype.writeUintLE=P.prototype.writeUIntLE=function(l,c,a,u){if(l=+l,c=c>>>0,a=a>>>0,!u){var h=Math.pow(2,8*a)-1;be(this,l,c,a,h,0)}var s=1,r=0;for(this[c]=l&255;++r<a&&(s*=256);)this[c+r]=l/s&255;return c+a};P.prototype.writeUintBE=P.prototype.writeUIntBE=function(l,c,a,u){if(l=+l,c=c>>>0,a=a>>>0,!u){var h=Math.pow(2,8*a)-1;be(this,l,c,a,h,0)}var s=a-1,r=1;for(this[c+s]=l&255;--s>=0&&(r*=256);)this[c+s]=l/r&255;return c+a};P.prototype.writeUint8=P.prototype.writeUInt8=function(l,c,a){return l=+l,c=c>>>0,a||be(this,l,c,1,255,0),this[c]=l&255,c+1};P.prototype.writeUint16LE=P.prototype.writeUInt16LE=function(l,c,a){return l=+l,c=c>>>0,a||be(this,l,c,2,65535,0),this[c]=l&255,this[c+1]=l>>>8,c+2};P.prototype.writeUint16BE=P.prototype.writeUInt16BE=function(l,c,a){return l=+l,c=c>>>0,a||be(this,l,c,2,65535,0),this[c]=l>>>8,this[c+1]=l&255,c+2};P.prototype.writeUint32LE=P.prototype.writeUInt32LE=function(l,c,a){return l=+l,c=c>>>0,a||be(this,l,c,4,4294967295,0),this[c+3]=l>>>24,this[c+2]=l>>>16,this[c+1]=l>>>8,this[c]=l&255,c+4};P.prototype.writeUint32BE=P.prototype.writeUInt32BE=function(l,c,a){return l=+l,c=c>>>0,a||be(this,l,c,4,4294967295,0),this[c]=l>>>24,this[c+1]=l>>>16,this[c+2]=l>>>8,this[c+3]=l&255,c+4};P.prototype.writeIntLE=function(l,c,a,u){if(l=+l,c=c>>>0,!u){var h=Math.pow(2,8*a-1);be(this,l,c,a,h-1,-h)}var s=0,r=1,A=0;for(this[c]=l&255;++s<a&&(r*=256);)l<0&&A===0&&this[c+s-1]!==0&&(A=1),this[c+s]=(l/r>>0)-A&255;return c+a};P.prototype.writeIntBE=function(l,c,a,u){if(l=+l,c=c>>>0,!u){var h=Math.pow(2,8*a-1);be(this,l,c,a,h-1,-h)}var s=a-1,r=1,A=0;for(this[c+s]=l&255;--s>=0&&(r*=256);)l<0&&A===0&&this[c+s+1]!==0&&(A=1),this[c+s]=(l/r>>0)-A&255;return c+a};P.prototype.writeInt8=function(l,c,a){return l=+l,c=c>>>0,a||be(this,l,c,1,127,-128),l<0&&(l=255+l+1),this[c]=l&255,c+1};P.prototype.writeInt16LE=function(l,c,a){return l=+l,c=c>>>0,a||be(this,l,c,2,32767,-32768),this[c]=l&255,this[c+1]=l>>>8,c+2};P.prototype.writeInt16BE=function(l,c,a){return l=+l,c=c>>>0,a||be(this,l,c,2,32767,-32768),this[c]=l>>>8,this[c+1]=l&255,c+2};P.prototype.writeInt32LE=function(l,c,a){return l=+l,c=c>>>0,a||be(this,l,c,4,2147483647,-2147483648),this[c]=l&255,this[c+1]=l>>>8,this[c+2]=l>>>16,this[c+3]=l>>>24,c+4};P.prototype.writeInt32BE=function(l,c,a){return l=+l,c=c>>>0,a||be(this,l,c,4,2147483647,-2147483648),l<0&&(l=4294967295+l+1),this[c]=l>>>24,this[c+1]=l>>>16,this[c+2]=l>>>8,this[c+3]=l&255,c+4};function _o(_,l,c,a,u,h){if(c+a>_.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("Index out of range")}function ao(_,l,c,a,u){return l=+l,c=c>>>0,u||_o(_,l,c,4,34028234663852886e22,-34028234663852886e22),Ve.write(_,l,c,a,23,4),c+4}P.prototype.writeFloatLE=function(l,c,a){return ao(this,l,c,!0,a)};P.prototype.writeFloatBE=function(l,c,a){return ao(this,l,c,!1,a)};function uo(_,l,c,a,u){return l=+l,c=c>>>0,u||_o(_,l,c,8,17976931348623157e292,-17976931348623157e292),Ve.write(_,l,c,a,52,8),c+8}P.prototype.writeDoubleLE=function(l,c,a){return uo(this,l,c,!0,a)};P.prototype.writeDoubleBE=function(l,c,a){return uo(this,l,c,!1,a)};P.prototype.copy=function(l,c,a,u){if(!P.isBuffer(l))throw new TypeError("argument should be a Buffer");if(a||(a=0),!u&&u!==0&&(u=this.length),c>=l.length&&(c=l.length),c||(c=0),u>0&&u<a&&(u=a),u===a||l.length===0||this.length===0)return 0;if(c<0)throw new RangeError("targetStart out of bounds");if(a<0||a>=this.length)throw new RangeError("Index out of range");if(u<0)throw new RangeError("sourceEnd out of bounds");u>this.length&&(u=this.length),l.length-c<u-a&&(u=l.length-c+a);var h=u-a;return this===l&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(c,a,u):Uint8Array.prototype.set.call(l,this.subarray(a,u),c),h};P.prototype.fill=function(l,c,a,u){if(typeof l=="string"){if(typeof c=="string"?(u=c,c=0,a=this.length):typeof a=="string"&&(u=a,a=this.length),u!==void 0&&typeof u!="string")throw new TypeError("encoding must be a string");if(typeof u=="string"&&!P.isEncoding(u))throw new TypeError("Unknown encoding: "+u);if(l.length===1){var h=l.charCodeAt(0);(u==="utf8"&&h<128||u==="latin1")&&(l=h)}}else typeof l=="number"?l=l&255:typeof l=="boolean"&&(l=Number(l));if(c<0||this.length<c||this.length<a)throw new RangeError("Out of range index");if(a<=c)return this;c=c>>>0,a=a===void 0?this.length:a>>>0,l||(l=0);var s;if(typeof l=="number")for(s=c;s<a;++s)this[s]=l;else{var r=P.isBuffer(l)?l:P.from(l,u),A=r.length;if(A===0)throw new TypeError('The value "'+l+'" is invalid for argument "value"');for(s=0;s<a-c;++s)this[s+c]=r[s%A]}return this};var Ar=/[^+/0-9A-Za-z-_]/g;function Br(_){if(_=_.split("=")[0],_=_.trim().replace(Ar,""),_.length<2)return"";for(;_.length%4!==0;)_=_+"=";return _}function Pt(_,l){l=l||1/0;for(var c,a=_.length,u=null,h=[],s=0;s<a;++s){if(c=_.charCodeAt(s),c>55295&&c<57344){if(!u){if(c>56319){(l-=3)>-1&&h.push(239,191,189);continue}else if(s+1===a){(l-=3)>-1&&h.push(239,191,189);continue}u=c;continue}if(c<56320){(l-=3)>-1&&h.push(239,191,189),u=c;continue}c=(u-55296<<10|c-56320)+65536}else u&&(l-=3)>-1&&h.push(239,191,189);if(u=null,c<128){if((l-=1)<0)break;h.push(c)}else if(c<2048){if((l-=2)<0)break;h.push(c>>6|192,c&63|128)}else if(c<65536){if((l-=3)<0)break;h.push(c>>12|224,c>>6&63|128,c&63|128)}else if(c<1114112){if((l-=4)<0)break;h.push(c>>18|240,c>>12&63|128,c>>6&63|128,c&63|128)}else throw new Error("Invalid code point")}return h}function Ur(_){for(var l=[],c=0;c<_.length;++c)l.push(_.charCodeAt(c)&255);return l}function Tr(_,l){for(var c,a,u,h=[],s=0;s<_.length&&!((l-=2)<0);++s)c=_.charCodeAt(s),a=c>>8,u=c%256,h.push(u),h.push(a);return h}function mo(_){return Rt.toByteArray(Br(_))}function mt(_,l,c,a){for(var u=0;u<a&&!(u+c>=l.length||u>=_.length);++u)l[u+c]=_[u];return u}function Le(_,l){return _ instanceof l||_!=null&&_.constructor!=null&&_.constructor.name!=null&&_.constructor.name===l.name}function zt(_){return _!==_}var Ir=function(){for(var _="0123456789abcdef",l=new Array(256),c=0;c<16;++c)for(var a=c*16,u=0;u<16;++u)l[a+u]=_[c]+_[u];return l}()});var ko=xe((Vi,yo)=>{X();var te=yo.exports={},Oe,Ce;function Dt(){throw new Error("setTimeout has not been defined")}function qt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Oe=setTimeout:Oe=Dt}catch(_){Oe=Dt}try{typeof clearTimeout=="function"?Ce=clearTimeout:Ce=qt}catch(_){Ce=qt}})();function fo(_){if(Oe===setTimeout)return setTimeout(_,0);if((Oe===Dt||!Oe)&&setTimeout)return Oe=setTimeout,setTimeout(_,0);try{return Oe(_,0)}catch(l){try{return Oe.call(null,_,0)}catch(c){return Oe.call(this,_,0)}}}function Lr(_){if(Ce===clearTimeout)return clearTimeout(_);if((Ce===qt||!Ce)&&clearTimeout)return Ce=clearTimeout,clearTimeout(_);try{return Ce(_)}catch(l){try{return Ce.call(null,_)}catch(c){return Ce.call(this,_)}}}var je=[],Ze=!1,ze,st=-1;function Or(){!Ze||!ze||(Ze=!1,ze.length?je=ze.concat(je):st=-1,je.length&&ho())}function ho(){if(!Ze){var _=fo(Or);Ze=!0;for(var l=je.length;l;){for(ze=je,je=[];++st<l;)ze&&ze[st].run();st=-1,l=je.length}ze=null,Ze=!1,Lr(_)}}te.nextTick=function(_){var l=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)l[c-1]=arguments[c];je.push(new go(_,l)),je.length===1&&!Ze&&fo(ho)};function go(_,l){this.fun=_,this.array=l}go.prototype.run=function(){this.fun.apply(null,this.array)};te.title="browser";te.browser=!0;te.env={};te.argv=[];te.version="";te.versions={};function Pe(){}te.on=Pe;te.addListener=Pe;te.once=Pe;te.off=Pe;te.removeListener=Pe;te.removeAllListeners=Pe;te.emit=Pe;te.prependListener=Pe;te.prependOnceListener=Pe;te.listeners=function(_){return[]};te.binding=function(_){throw new Error("process.binding is not supported")};te.cwd=function(){return"/"};te.chdir=function(_){throw new Error("process.chdir is not supported")};te.umask=function(){return 0}});var we,ve,Xi,X=Qn(()=>{we=Te(so()),ve=Te(ko()),Xi=function(_){function l(){var a=this||self;return delete _.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return l();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:l});var c=__magic__;return c}(Object)});var Ao=xe((Wi,Eo)=>{"use strict";X();var Cr=Object.create,et=Object.defineProperty,Rr=Object.defineProperties,Mr=Object.getOwnPropertyDescriptor,jr=Object.getOwnPropertyDescriptors,Pr=Object.getOwnPropertyNames,So=Object.getOwnPropertySymbols,Nr=Object.getPrototypeOf,vo=Object.prototype.hasOwnProperty,Fr=Object.prototype.propertyIsEnumerable,wo=(_,l,c)=>l in _?et(_,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):_[l]=c,zr=(_,l)=>{for(var c in l||(l={}))vo.call(l,c)&&wo(_,c,l[c]);if(So)for(var c of So(l))Fr.call(l,c)&&wo(_,c,l[c]);return _},Dr=(_,l)=>Rr(_,jr(l)),qr=(_,l)=>()=>(_&&(l=_(_=0)),l),ft=(_,l)=>()=>(l||_((l={exports:{}}).exports,l),l.exports),Yr=(_,l)=>{for(var c in l)et(_,c,{get:l[c],enumerable:!0})},bo=(_,l,c,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of Pr(l))!vo.call(_,u)&&u!==c&&et(_,u,{get:()=>l[u],enumerable:!(a=Mr(l,u))||a.enumerable});return _},Yt=(_,l,c)=>(c=_!=null?Cr(Nr(_)):{},bo(l||!_||!_.__esModule?et(c,"default",{value:_,enumerable:!0}):c,_)),Vr=_=>bo(et({},"__esModule",{value:!0}),_),Xr=ft(_=>{"use strict";De(),_.byteLength=A,_.toByteArray=B,_.fromByteArray=L;var l=[],c=[],a=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(h=0,s=u.length;h<s;++h)l[h]=u[h],c[u.charCodeAt(h)]=h;var h,s;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63;function r(m){var g=m.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=m.indexOf("=");y===-1&&(y=g);var f=y===g?0:4-y%4;return[y,f]}function A(m){var g=r(m),y=g[0],f=g[1];return(y+f)*3/4-f}function S(m,g,y){return(g+y)*3/4-y}function B(m){var g,y=r(m),f=y[0],b=y[1],w=new a(S(m,f,b)),R=0,j=b>0?f-4:f,O;for(O=0;O<j;O+=4)g=c[m.charCodeAt(O)]<<18|c[m.charCodeAt(O+1)]<<12|c[m.charCodeAt(O+2)]<<6|c[m.charCodeAt(O+3)],w[R++]=g>>16&255,w[R++]=g>>8&255,w[R++]=g&255;return b===2&&(g=c[m.charCodeAt(O)]<<2|c[m.charCodeAt(O+1)]>>4,w[R++]=g&255),b===1&&(g=c[m.charCodeAt(O)]<<10|c[m.charCodeAt(O+1)]<<4|c[m.charCodeAt(O+2)]>>2,w[R++]=g>>8&255,w[R++]=g&255),w}function k(m){return l[m>>18&63]+l[m>>12&63]+l[m>>6&63]+l[m&63]}function x(m,g,y){for(var f,b=[],w=g;w<y;w+=3)f=(m[w]<<16&16711680)+(m[w+1]<<8&65280)+(m[w+2]&255),b.push(k(f));return b.join("")}function L(m){for(var g,y=m.length,f=y%3,b=[],w=16383,R=0,j=y-f;R<j;R+=w)b.push(x(m,R,R+w>j?j:R+w));return f===1?(g=m[y-1],b.push(l[g>>2]+l[g<<4&63]+"==")):f===2&&(g=(m[y-2]<<8)+m[y-1],b.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),b.join("")}}),Zr=ft(_=>{De(),_.read=function(l,c,a,u,h){var s,r,A=h*8-u-1,S=(1<<A)-1,B=S>>1,k=-7,x=a?h-1:0,L=a?-1:1,m=l[c+x];for(x+=L,s=m&(1<<-k)-1,m>>=-k,k+=A;k>0;s=s*256+l[c+x],x+=L,k-=8);for(r=s&(1<<-k)-1,s>>=-k,k+=u;k>0;r=r*256+l[c+x],x+=L,k-=8);if(s===0)s=1-B;else{if(s===S)return r?NaN:(m?-1:1)*(1/0);r=r+Math.pow(2,u),s=s-B}return(m?-1:1)*r*Math.pow(2,s-u)},_.write=function(l,c,a,u,h,s){var r,A,S,B=s*8-h-1,k=(1<<B)-1,x=k>>1,L=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=u?0:s-1,g=u?1:-1,y=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(A=isNaN(c)?1:0,r=k):(r=Math.floor(Math.log(c)/Math.LN2),c*(S=Math.pow(2,-r))<1&&(r--,S*=2),r+x>=1?c+=L/S:c+=L*Math.pow(2,1-x),c*S>=2&&(r++,S/=2),r+x>=k?(A=0,r=k):r+x>=1?(A=(c*S-1)*Math.pow(2,h),r=r+x):(A=c*Math.pow(2,x-1)*Math.pow(2,h),r=0));h>=8;l[a+m]=A&255,m+=g,A/=256,h-=8);for(r=r<<h|A,B+=h;B>0;l[a+m]=r&255,m+=g,r/=256,B-=8);l[a+m-g]|=y*128}}),Wr=ft(_=>{"use strict";De();var l=Xr(),c=Zr(),a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=b,_.INSPECT_MAX_BYTES=50;var u=2147483647;_.kMaxLength=u,r.TYPED_ARRAY_SUPPORT=h(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function s(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return A(e,t,o)}r.poolSize=8192;function A(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var p=y(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return A(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function S(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return S(e),e<=0?s(e):t!==void 0?typeof o=="string"?s(e).fill(t,o):s(e).fill(t):s(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return S(e),s(e<0?0:f(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=w(e,t)|0,n=s(o),p=n.write(e,t);return p!==o&&(n=n.slice(0,p)),n}function L(e){for(var t=e.length<0?0:f(e.length)|0,o=s(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function m(e){if(z(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return L(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function y(e){if(r.isBuffer(e)){var t=f(e.length)|0,o=s(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?s(0):L(e);if(e.type==="Buffer"&&Array.isArray(e.data))return L(e.data)}function f(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function b(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,p=0,i=Math.min(o,n);p<i;++p)if(e[p]!==t[p]){o=e[p],n=t[p];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),p=0;for(o=0;o<e.length;++o){var i=e[o];if(z(i,Uint8Array))p+i.length>n.length?r.from(i).copy(n,p):Uint8Array.prototype.set.call(n,i,p);else if(r.isBuffer(i))i.copy(n,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=i.length}return n};function w(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var p=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return K(e).length;default:if(p)return n?-1:Y(e).length;t=(""+t).toLowerCase(),p=!0}}r.byteLength=w;function R(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return me(this,t,o);case"utf8":case"utf-8":return W(this,t,o);case"ascii":return ue(this,t,o);case"latin1":case"binary":return de(this,t,o);case"base64":return _e(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return se(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function j(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)j(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)j(this,t,t+3),j(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)j(this,t,t+7),j(this,t+1,t+6),j(this,t+2,t+5),j(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?W(this,0,e):R.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(r.prototype[a]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,p){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),p===void 0&&(p=this.length),t<0||o>e.length||n<0||p>this.length)throw new RangeError("out of range index");if(n>=p&&t>=o)return 0;if(n>=p)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,p>>>=0,this===e)return 0;for(var i=p-n,d=o-t,v=Math.min(i,d),I=this.slice(n,p),E=e.slice(t,o),U=0;U<v;++U)if(I[U]!==E[U]){i=I[U],d=E[U];break}return i<d?-1:d<i?1:0};function O(e,t,o,n,p){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=p?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(p)return-1;o=e.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:Z(e,t,o,n,p);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):Z(e,[t],o,n,p);throw new TypeError("val must be string, number or Buffer")}function Z(e,t,o,n,p){var i=1,d=e.length,v=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,d/=2,v/=2,o/=2}function I(Q,ee){return i===1?Q[ee]:Q.readUInt16BE(ee*i)}var E;if(p){var U=-1;for(E=o;E<d;E++)if(I(e,E)===I(t,U===-1?0:E-U)){if(U===-1&&(U=E),E-U+1===v)return U*i}else U!==-1&&(E-=E-U),U=-1}else for(o+v>d&&(o=d-v),E=o;E>=0;E--){for(var C=!0,q=0;q<v;q++)if(I(e,E+q)!==I(t,q)){C=!1;break}if(C)return E}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return O(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return O(this,e,t,o,!1)};function re(e,t,o,n){o=Number(o)||0;var p=e.length-o;n?(n=Number(n),n>p&&(n=p)):n=p;var i=t.length;n>i/2&&(n=i/2);for(var d=0;d<n;++d){var v=parseInt(t.substr(d*2,2),16);if(V(v))return d;e[o+d]=v}return d}function ce(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function pe(e,t,o,n){return D(ge(t),e,o,n)}function le(e,t,o,n){return D(K(t),e,o,n)}function ie(e,t,o,n){return D(ye(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((o===void 0||o>p)&&(o=p),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return re(this,e,t,o);case"utf8":case"utf-8":return ce(this,e,t,o);case"ascii":case"latin1":case"binary":return pe(this,e,t,o);case"base64":return le(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,e,t,o);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _e(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function W(e,t,o){o=Math.min(e.length,o);for(var n=[],p=t;p<o;){var i=e[p],d=null,v=i>239?4:i>223?3:i>191?2:1;if(p+v<=o){var I,E,U,C;switch(v){case 1:i<128&&(d=i);break;case 2:I=e[p+1],(I&192)===128&&(C=(i&31)<<6|I&63,C>127&&(d=C));break;case 3:I=e[p+1],E=e[p+2],(I&192)===128&&(E&192)===128&&(C=(i&15)<<12|(I&63)<<6|E&63,C>2047&&(C<55296||C>57343)&&(d=C));break;case 4:I=e[p+1],E=e[p+2],U=e[p+3],(I&192)===128&&(E&192)===128&&(U&192)===128&&(C=(i&15)<<18|(I&63)<<12|(E&63)<<6|U&63,C>65535&&C<1114112&&(d=C))}}d===null?(d=65533,v=1):d>65535&&(d-=65536,n.push(d>>>10&1023|55296),d=56320|d&1023),n.push(d),p+=v}return ae(n)}var G=4096;function ae(e){var t=e.length;if(t<=G)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=G));return o}function ue(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]&127);return n}function de(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]);return n}function me(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var p="",i=t;i<o;++i)p+=ke[e[i]];return p}function se(e,t,o){for(var n=e.slice(t,o),p="",i=0;i<n.length-1;i+=2)p+=String.fromCharCode(n[i]+n[i+1]*256);return p}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function T(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e+--t],p=1;t>0&&(p*=256);)n+=this[e+--t]*p;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return p*=128,n>=p&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=t,p=1,i=this[e+--n];n>0&&(p*=256);)i+=this[e+--n]*p;return p*=128,i>=p&&(i-=Math.pow(2,8*t)),i},r.prototype.readInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!1,52,8)};function M(e,t,o,n,p,i){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>p||t<i)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=1,d=0;for(this[t]=e&255;++d<o&&(i*=256);)this[t+d]=e/i&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=o-1,d=1;for(this[t+i]=e&255;--i>=0&&(d*=256);)this[t+i]=e/d&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=0,d=1,v=0;for(this[t]=e&255;++i<o&&(d*=256);)e<0&&v===0&&this[t+i-1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=o-1,d=1,v=0;for(this[t+i]=e&255;--i>=0&&(d*=256);)e<0&&v===0&&this[t+i+1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,p,i){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function H(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),c.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return H(this,e,t,!1,o)};function J(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),c.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return J(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return J(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var p=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),p},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var p=e.charCodeAt(0);(n==="utf8"&&p<128||n==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<o;++i)this[i]=e;else{var d=r.isBuffer(e)?e:r.from(e,n),v=d.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<o-t;++i)this[i+t]=d[i%v]}return this};var fe=/[^+/0-9A-Za-z-_]/g;function he(e){if(e=e.split("=")[0],e=e.trim().replace(fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,p=null,i=[],d=0;d<n;++d){if(o=e.charCodeAt(d),o>55295&&o<57344){if(!p){if(o>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(d+1===n){(t-=3)>-1&&i.push(239,191,189);continue}p=o;continue}if(o<56320){(t-=3)>-1&&i.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(t-=3)>-1&&i.push(239,191,189);if(p=null,o<128){if((t-=1)<0)break;i.push(o)}else if(o<2048){if((t-=2)<0)break;i.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;i.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;i.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return i}function ge(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function ye(e,t){for(var o,n,p,i=[],d=0;d<e.length&&!((t-=2)<0);++d)o=e.charCodeAt(d),n=o>>8,p=o%256,i.push(p),i.push(n);return i}function K(e){return l.toByteArray(he(e))}function D(e,t,o,n){for(var p=0;p<n&&!(p+o>=t.length||p>=e.length);++p)t[p+o]=e[p];return p}function z(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ke=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,p=0;p<16;++p)t[n+p]=e[o]+e[p];return t}()}),Gr=ft((_,l)=>{De();var c=l.exports={},a,u;function h(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=h}catch(f){a=h}try{typeof clearTimeout=="function"?u=clearTimeout:u=s}catch(f){u=s}})();function r(f){if(a===setTimeout)return setTimeout(f,0);if((a===h||!a)&&setTimeout)return a=setTimeout,setTimeout(f,0);try{return a(f,0)}catch(b){try{return a.call(null,f,0)}catch(w){return a.call(this,f,0)}}}function A(f){if(u===clearTimeout)return clearTimeout(f);if((u===s||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(f);try{return u(f)}catch(b){try{return u.call(null,f)}catch(w){return u.call(this,f)}}}var S=[],B=!1,k,x=-1;function L(){!B||!k||(B=!1,k.length?S=k.concat(S):x=-1,S.length&&m())}function m(){if(!B){var f=r(L);B=!0;for(var b=S.length;b;){for(k=S,S=[];++x<b;)k&&k[x].run();x=-1,b=S.length}k=null,B=!1,A(f)}}c.nextTick=function(f){var b=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)b[w-1]=arguments[w];S.push(new g(f,b)),S.length===1&&!B&&r(m)};function g(f,b){this.fun=f,this.array=b}g.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function y(){}c.on=y,c.addListener=y,c.once=y,c.off=y,c.removeListener=y,c.removeAllListeners=y,c.emit=y,c.prependListener=y,c.prependOnceListener=y,c.listeners=function(f){return[]},c.binding=function(f){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(f){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}}),$r,Hr,Jr,De=qr(()=>{$r=Yt(Wr()),Hr=Yt(Gr()),Jr=function(_){function l(){var a=this||self;return delete _.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return l();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:l});var c=__magic__;return c}(Object)}),xo={};Yr(xo,{Input:()=>oc});Eo.exports=Vr(xo);De();var Kr=Yt(require("react")),Qr=require("react-select");De();De();var ec=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ec));var tc={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},oc=_=>Kr.default.createElement(Qr.components.Input,Dr(zr({},_),{className:tc.dropdown,"data-testid":"tokenSelectInput"}));});var Oo=xe((Gi,Lo)=>{"use strict";X();var nc=Object.create,tt=Object.defineProperty,rc=Object.defineProperties,cc=Object.getOwnPropertyDescriptor,pc=Object.getOwnPropertyDescriptors,lc=Object.getOwnPropertyNames,ht=Object.getOwnPropertySymbols,ic=Object.getPrototypeOf,Xt=Object.prototype.hasOwnProperty,Uo=Object.prototype.propertyIsEnumerable,Bo=(_,l,c)=>l in _?tt(_,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):_[l]=c,_c=(_,l)=>{for(var c in l||(l={}))Xt.call(l,c)&&Bo(_,c,l[c]);if(ht)for(var c of ht(l))Uo.call(l,c)&&Bo(_,c,l[c]);return _},ac=(_,l)=>rc(_,pc(l)),uc=(_,l)=>{var c={};for(var a in _)Xt.call(_,a)&&l.indexOf(a)<0&&(c[a]=_[a]);if(_!=null&&ht)for(var a of ht(_))l.indexOf(a)<0&&Uo.call(_,a)&&(c[a]=_[a]);return c},dc=(_,l)=>()=>(_&&(l=_(_=0)),l),gt=(_,l)=>()=>(l||_((l={exports:{}}).exports,l),l.exports),mc=(_,l)=>{for(var c in l)tt(_,c,{get:l[c],enumerable:!0})},To=(_,l,c,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of lc(l))!Xt.call(_,u)&&u!==c&&tt(_,u,{get:()=>l[u],enumerable:!(a=cc(l,u))||a.enumerable});return _},Vt=(_,l,c)=>(c=_!=null?nc(ic(_)):{},To(l||!_||!_.__esModule?tt(c,"default",{value:_,enumerable:!0}):c,_)),sc=_=>To(tt({},"__esModule",{value:!0}),_),fc=gt(_=>{"use strict";We(),_.byteLength=A,_.toByteArray=B,_.fromByteArray=L;var l=[],c=[],a=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(h=0,s=u.length;h<s;++h)l[h]=u[h],c[u.charCodeAt(h)]=h;var h,s;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63;function r(m){var g=m.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=m.indexOf("=");y===-1&&(y=g);var f=y===g?0:4-y%4;return[y,f]}function A(m){var g=r(m),y=g[0],f=g[1];return(y+f)*3/4-f}function S(m,g,y){return(g+y)*3/4-y}function B(m){var g,y=r(m),f=y[0],b=y[1],w=new a(S(m,f,b)),R=0,j=b>0?f-4:f,O;for(O=0;O<j;O+=4)g=c[m.charCodeAt(O)]<<18|c[m.charCodeAt(O+1)]<<12|c[m.charCodeAt(O+2)]<<6|c[m.charCodeAt(O+3)],w[R++]=g>>16&255,w[R++]=g>>8&255,w[R++]=g&255;return b===2&&(g=c[m.charCodeAt(O)]<<2|c[m.charCodeAt(O+1)]>>4,w[R++]=g&255),b===1&&(g=c[m.charCodeAt(O)]<<10|c[m.charCodeAt(O+1)]<<4|c[m.charCodeAt(O+2)]>>2,w[R++]=g>>8&255,w[R++]=g&255),w}function k(m){return l[m>>18&63]+l[m>>12&63]+l[m>>6&63]+l[m&63]}function x(m,g,y){for(var f,b=[],w=g;w<y;w+=3)f=(m[w]<<16&16711680)+(m[w+1]<<8&65280)+(m[w+2]&255),b.push(k(f));return b.join("")}function L(m){for(var g,y=m.length,f=y%3,b=[],w=16383,R=0,j=y-f;R<j;R+=w)b.push(x(m,R,R+w>j?j:R+w));return f===1?(g=m[y-1],b.push(l[g>>2]+l[g<<4&63]+"==")):f===2&&(g=(m[y-2]<<8)+m[y-1],b.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),b.join("")}}),hc=gt(_=>{We(),_.read=function(l,c,a,u,h){var s,r,A=h*8-u-1,S=(1<<A)-1,B=S>>1,k=-7,x=a?h-1:0,L=a?-1:1,m=l[c+x];for(x+=L,s=m&(1<<-k)-1,m>>=-k,k+=A;k>0;s=s*256+l[c+x],x+=L,k-=8);for(r=s&(1<<-k)-1,s>>=-k,k+=u;k>0;r=r*256+l[c+x],x+=L,k-=8);if(s===0)s=1-B;else{if(s===S)return r?NaN:(m?-1:1)*(1/0);r=r+Math.pow(2,u),s=s-B}return(m?-1:1)*r*Math.pow(2,s-u)},_.write=function(l,c,a,u,h,s){var r,A,S,B=s*8-h-1,k=(1<<B)-1,x=k>>1,L=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=u?0:s-1,g=u?1:-1,y=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(A=isNaN(c)?1:0,r=k):(r=Math.floor(Math.log(c)/Math.LN2),c*(S=Math.pow(2,-r))<1&&(r--,S*=2),r+x>=1?c+=L/S:c+=L*Math.pow(2,1-x),c*S>=2&&(r++,S/=2),r+x>=k?(A=0,r=k):r+x>=1?(A=(c*S-1)*Math.pow(2,h),r=r+x):(A=c*Math.pow(2,x-1)*Math.pow(2,h),r=0));h>=8;l[a+m]=A&255,m+=g,A/=256,h-=8);for(r=r<<h|A,B+=h;B>0;l[a+m]=r&255,m+=g,r/=256,B-=8);l[a+m-g]|=y*128}}),gc=gt(_=>{"use strict";We();var l=fc(),c=hc(),a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=b,_.INSPECT_MAX_BYTES=50;var u=2147483647;_.kMaxLength=u,r.TYPED_ARRAY_SUPPORT=h(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function s(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return A(e,t,o)}r.poolSize=8192;function A(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var p=y(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return A(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function S(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return S(e),e<=0?s(e):t!==void 0?typeof o=="string"?s(e).fill(t,o):s(e).fill(t):s(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return S(e),s(e<0?0:f(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=w(e,t)|0,n=s(o),p=n.write(e,t);return p!==o&&(n=n.slice(0,p)),n}function L(e){for(var t=e.length<0?0:f(e.length)|0,o=s(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function m(e){if(z(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return L(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function y(e){if(r.isBuffer(e)){var t=f(e.length)|0,o=s(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?s(0):L(e);if(e.type==="Buffer"&&Array.isArray(e.data))return L(e.data)}function f(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function b(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,p=0,i=Math.min(o,n);p<i;++p)if(e[p]!==t[p]){o=e[p],n=t[p];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),p=0;for(o=0;o<e.length;++o){var i=e[o];if(z(i,Uint8Array))p+i.length>n.length?r.from(i).copy(n,p):Uint8Array.prototype.set.call(n,i,p);else if(r.isBuffer(i))i.copy(n,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=i.length}return n};function w(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var p=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return K(e).length;default:if(p)return n?-1:Y(e).length;t=(""+t).toLowerCase(),p=!0}}r.byteLength=w;function R(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return me(this,t,o);case"utf8":case"utf-8":return W(this,t,o);case"ascii":return ue(this,t,o);case"latin1":case"binary":return de(this,t,o);case"base64":return _e(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return se(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function j(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)j(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)j(this,t,t+3),j(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)j(this,t,t+7),j(this,t+1,t+6),j(this,t+2,t+5),j(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?W(this,0,e):R.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(r.prototype[a]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,p){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),p===void 0&&(p=this.length),t<0||o>e.length||n<0||p>this.length)throw new RangeError("out of range index");if(n>=p&&t>=o)return 0;if(n>=p)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,p>>>=0,this===e)return 0;for(var i=p-n,d=o-t,v=Math.min(i,d),I=this.slice(n,p),E=e.slice(t,o),U=0;U<v;++U)if(I[U]!==E[U]){i=I[U],d=E[U];break}return i<d?-1:d<i?1:0};function O(e,t,o,n,p){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=p?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(p)return-1;o=e.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:Z(e,t,o,n,p);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):Z(e,[t],o,n,p);throw new TypeError("val must be string, number or Buffer")}function Z(e,t,o,n,p){var i=1,d=e.length,v=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,d/=2,v/=2,o/=2}function I(Q,ee){return i===1?Q[ee]:Q.readUInt16BE(ee*i)}var E;if(p){var U=-1;for(E=o;E<d;E++)if(I(e,E)===I(t,U===-1?0:E-U)){if(U===-1&&(U=E),E-U+1===v)return U*i}else U!==-1&&(E-=E-U),U=-1}else for(o+v>d&&(o=d-v),E=o;E>=0;E--){for(var C=!0,q=0;q<v;q++)if(I(e,E+q)!==I(t,q)){C=!1;break}if(C)return E}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return O(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return O(this,e,t,o,!1)};function re(e,t,o,n){o=Number(o)||0;var p=e.length-o;n?(n=Number(n),n>p&&(n=p)):n=p;var i=t.length;n>i/2&&(n=i/2);for(var d=0;d<n;++d){var v=parseInt(t.substr(d*2,2),16);if(V(v))return d;e[o+d]=v}return d}function ce(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function pe(e,t,o,n){return D(ge(t),e,o,n)}function le(e,t,o,n){return D(K(t),e,o,n)}function ie(e,t,o,n){return D(ye(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((o===void 0||o>p)&&(o=p),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return re(this,e,t,o);case"utf8":case"utf-8":return ce(this,e,t,o);case"ascii":case"latin1":case"binary":return pe(this,e,t,o);case"base64":return le(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,e,t,o);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _e(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function W(e,t,o){o=Math.min(e.length,o);for(var n=[],p=t;p<o;){var i=e[p],d=null,v=i>239?4:i>223?3:i>191?2:1;if(p+v<=o){var I,E,U,C;switch(v){case 1:i<128&&(d=i);break;case 2:I=e[p+1],(I&192)===128&&(C=(i&31)<<6|I&63,C>127&&(d=C));break;case 3:I=e[p+1],E=e[p+2],(I&192)===128&&(E&192)===128&&(C=(i&15)<<12|(I&63)<<6|E&63,C>2047&&(C<55296||C>57343)&&(d=C));break;case 4:I=e[p+1],E=e[p+2],U=e[p+3],(I&192)===128&&(E&192)===128&&(U&192)===128&&(C=(i&15)<<18|(I&63)<<12|(E&63)<<6|U&63,C>65535&&C<1114112&&(d=C))}}d===null?(d=65533,v=1):d>65535&&(d-=65536,n.push(d>>>10&1023|55296),d=56320|d&1023),n.push(d),p+=v}return ae(n)}var G=4096;function ae(e){var t=e.length;if(t<=G)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=G));return o}function ue(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]&127);return n}function de(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]);return n}function me(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var p="",i=t;i<o;++i)p+=ke[e[i]];return p}function se(e,t,o){for(var n=e.slice(t,o),p="",i=0;i<n.length-1;i+=2)p+=String.fromCharCode(n[i]+n[i+1]*256);return p}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function T(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e+--t],p=1;t>0&&(p*=256);)n+=this[e+--t]*p;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return p*=128,n>=p&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=t,p=1,i=this[e+--n];n>0&&(p*=256);)i+=this[e+--n]*p;return p*=128,i>=p&&(i-=Math.pow(2,8*t)),i},r.prototype.readInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!1,52,8)};function M(e,t,o,n,p,i){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>p||t<i)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=1,d=0;for(this[t]=e&255;++d<o&&(i*=256);)this[t+d]=e/i&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=o-1,d=1;for(this[t+i]=e&255;--i>=0&&(d*=256);)this[t+i]=e/d&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=0,d=1,v=0;for(this[t]=e&255;++i<o&&(d*=256);)e<0&&v===0&&this[t+i-1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=o-1,d=1,v=0;for(this[t+i]=e&255;--i>=0&&(d*=256);)e<0&&v===0&&this[t+i+1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,p,i){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function H(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),c.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return H(this,e,t,!1,o)};function J(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),c.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return J(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return J(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var p=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),p},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var p=e.charCodeAt(0);(n==="utf8"&&p<128||n==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<o;++i)this[i]=e;else{var d=r.isBuffer(e)?e:r.from(e,n),v=d.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<o-t;++i)this[i+t]=d[i%v]}return this};var fe=/[^+/0-9A-Za-z-_]/g;function he(e){if(e=e.split("=")[0],e=e.trim().replace(fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,p=null,i=[],d=0;d<n;++d){if(o=e.charCodeAt(d),o>55295&&o<57344){if(!p){if(o>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(d+1===n){(t-=3)>-1&&i.push(239,191,189);continue}p=o;continue}if(o<56320){(t-=3)>-1&&i.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(t-=3)>-1&&i.push(239,191,189);if(p=null,o<128){if((t-=1)<0)break;i.push(o)}else if(o<2048){if((t-=2)<0)break;i.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;i.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;i.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return i}function ge(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function ye(e,t){for(var o,n,p,i=[],d=0;d<e.length&&!((t-=2)<0);++d)o=e.charCodeAt(d),n=o>>8,p=o%256,i.push(p),i.push(n);return i}function K(e){return l.toByteArray(he(e))}function D(e,t,o,n){for(var p=0;p<n&&!(p+o>=t.length||p>=e.length);++p)t[p+o]=e[p];return p}function z(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ke=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,p=0;p<16;++p)t[n+p]=e[o]+e[p];return t}()}),yc=gt((_,l)=>{We();var c=l.exports={},a,u;function h(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=h}catch(f){a=h}try{typeof clearTimeout=="function"?u=clearTimeout:u=s}catch(f){u=s}})();function r(f){if(a===setTimeout)return setTimeout(f,0);if((a===h||!a)&&setTimeout)return a=setTimeout,setTimeout(f,0);try{return a(f,0)}catch(b){try{return a.call(null,f,0)}catch(w){return a.call(this,f,0)}}}function A(f){if(u===clearTimeout)return clearTimeout(f);if((u===s||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(f);try{return u(f)}catch(b){try{return u.call(null,f)}catch(w){return u.call(this,f)}}}var S=[],B=!1,k,x=-1;function L(){!B||!k||(B=!1,k.length?S=k.concat(S):x=-1,S.length&&m())}function m(){if(!B){var f=r(L);B=!0;for(var b=S.length;b;){for(k=S,S=[];++x<b;)k&&k[x].run();x=-1,b=S.length}k=null,B=!1,A(f)}}c.nextTick=function(f){var b=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)b[w-1]=arguments[w];S.push(new g(f,b)),S.length===1&&!B&&r(m)};function g(f,b){this.fun=f,this.array=b}g.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function y(){}c.on=y,c.addListener=y,c.once=y,c.off=y,c.removeListener=y,c.removeAllListeners=y,c.emit=y,c.prependListener=y,c.prependOnceListener=y,c.listeners=function(f){return[]},c.binding=function(f){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(f){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}}),kc,Sc,wc,We=dc(()=>{kc=Vt(gc()),Sc=Vt(yc()),wc=function(_){function l(){var a=this||self;return delete _.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return l();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:l});var c=__magic__;return c}(Object)}),Io={};mc(Io,{MenuList:()=>Ac});Lo.exports=sc(Io);We();var vc=Vt(require("react")),bc=require("react-select");We();var xc=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xc));var Ec={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Ac=_=>{let l=_,{rx:c}=l,a=uc(l,["rx"]);return vc.default.createElement(bc.components.MenuList,ac(_c({},a),{className:Ec.list}))};});var zo=xe(($i,Fo)=>{"use strict";X();var Bc=Object.create,ot=Object.defineProperty,Uc=Object.defineProperties,Tc=Object.getOwnPropertyDescriptor,Ic=Object.getOwnPropertyDescriptors,Lc=Object.getOwnPropertyNames,Co=Object.getOwnPropertySymbols,Oc=Object.getPrototypeOf,jo=Object.prototype.hasOwnProperty,Cc=Object.prototype.propertyIsEnumerable,Ro=(_,l,c)=>l in _?ot(_,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):_[l]=c,Rc=(_,l)=>{for(var c in l||(l={}))jo.call(l,c)&&Ro(_,c,l[c]);if(Co)for(var c of Co(l))Cc.call(l,c)&&Ro(_,c,l[c]);return _},Mc=(_,l)=>Uc(_,Ic(l)),jc=(_,l)=>()=>(_&&(l=_(_=0)),l),yt=(_,l)=>()=>(l||_((l={exports:{}}).exports,l),l.exports),Pc=(_,l)=>{for(var c in l)ot(_,c,{get:l[c],enumerable:!0})},Po=(_,l,c,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of Lc(l))!jo.call(_,u)&&u!==c&&ot(_,u,{get:()=>l[u],enumerable:!(a=Tc(l,u))||a.enumerable});return _},Wt=(_,l,c)=>(c=_!=null?Bc(Oc(_)):{},Po(l||!_||!_.__esModule?ot(c,"default",{value:_,enumerable:!0}):c,_)),Nc=_=>Po(ot({},"__esModule",{value:!0}),_),Fc=yt(_=>{"use strict";Ge(),_.byteLength=A,_.toByteArray=B,_.fromByteArray=L;var l=[],c=[],a=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(h=0,s=u.length;h<s;++h)l[h]=u[h],c[u.charCodeAt(h)]=h;var h,s;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63;function r(m){var g=m.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=m.indexOf("=");y===-1&&(y=g);var f=y===g?0:4-y%4;return[y,f]}function A(m){var g=r(m),y=g[0],f=g[1];return(y+f)*3/4-f}function S(m,g,y){return(g+y)*3/4-y}function B(m){var g,y=r(m),f=y[0],b=y[1],w=new a(S(m,f,b)),R=0,j=b>0?f-4:f,O;for(O=0;O<j;O+=4)g=c[m.charCodeAt(O)]<<18|c[m.charCodeAt(O+1)]<<12|c[m.charCodeAt(O+2)]<<6|c[m.charCodeAt(O+3)],w[R++]=g>>16&255,w[R++]=g>>8&255,w[R++]=g&255;return b===2&&(g=c[m.charCodeAt(O)]<<2|c[m.charCodeAt(O+1)]>>4,w[R++]=g&255),b===1&&(g=c[m.charCodeAt(O)]<<10|c[m.charCodeAt(O+1)]<<4|c[m.charCodeAt(O+2)]>>2,w[R++]=g>>8&255,w[R++]=g&255),w}function k(m){return l[m>>18&63]+l[m>>12&63]+l[m>>6&63]+l[m&63]}function x(m,g,y){for(var f,b=[],w=g;w<y;w+=3)f=(m[w]<<16&16711680)+(m[w+1]<<8&65280)+(m[w+2]&255),b.push(k(f));return b.join("")}function L(m){for(var g,y=m.length,f=y%3,b=[],w=16383,R=0,j=y-f;R<j;R+=w)b.push(x(m,R,R+w>j?j:R+w));return f===1?(g=m[y-1],b.push(l[g>>2]+l[g<<4&63]+"==")):f===2&&(g=(m[y-2]<<8)+m[y-1],b.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),b.join("")}}),zc=yt(_=>{Ge(),_.read=function(l,c,a,u,h){var s,r,A=h*8-u-1,S=(1<<A)-1,B=S>>1,k=-7,x=a?h-1:0,L=a?-1:1,m=l[c+x];for(x+=L,s=m&(1<<-k)-1,m>>=-k,k+=A;k>0;s=s*256+l[c+x],x+=L,k-=8);for(r=s&(1<<-k)-1,s>>=-k,k+=u;k>0;r=r*256+l[c+x],x+=L,k-=8);if(s===0)s=1-B;else{if(s===S)return r?NaN:(m?-1:1)*(1/0);r=r+Math.pow(2,u),s=s-B}return(m?-1:1)*r*Math.pow(2,s-u)},_.write=function(l,c,a,u,h,s){var r,A,S,B=s*8-h-1,k=(1<<B)-1,x=k>>1,L=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=u?0:s-1,g=u?1:-1,y=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(A=isNaN(c)?1:0,r=k):(r=Math.floor(Math.log(c)/Math.LN2),c*(S=Math.pow(2,-r))<1&&(r--,S*=2),r+x>=1?c+=L/S:c+=L*Math.pow(2,1-x),c*S>=2&&(r++,S/=2),r+x>=k?(A=0,r=k):r+x>=1?(A=(c*S-1)*Math.pow(2,h),r=r+x):(A=c*Math.pow(2,x-1)*Math.pow(2,h),r=0));h>=8;l[a+m]=A&255,m+=g,A/=256,h-=8);for(r=r<<h|A,B+=h;B>0;l[a+m]=r&255,m+=g,r/=256,B-=8);l[a+m-g]|=y*128}}),Dc=yt(_=>{"use strict";Ge();var l=Fc(),c=zc(),a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=b,_.INSPECT_MAX_BYTES=50;var u=2147483647;_.kMaxLength=u,r.TYPED_ARRAY_SUPPORT=h(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function s(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return A(e,t,o)}r.poolSize=8192;function A(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var p=y(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return A(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function S(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return S(e),e<=0?s(e):t!==void 0?typeof o=="string"?s(e).fill(t,o):s(e).fill(t):s(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return S(e),s(e<0?0:f(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=w(e,t)|0,n=s(o),p=n.write(e,t);return p!==o&&(n=n.slice(0,p)),n}function L(e){for(var t=e.length<0?0:f(e.length)|0,o=s(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function m(e){if(z(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return L(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function y(e){if(r.isBuffer(e)){var t=f(e.length)|0,o=s(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?s(0):L(e);if(e.type==="Buffer"&&Array.isArray(e.data))return L(e.data)}function f(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function b(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,p=0,i=Math.min(o,n);p<i;++p)if(e[p]!==t[p]){o=e[p],n=t[p];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),p=0;for(o=0;o<e.length;++o){var i=e[o];if(z(i,Uint8Array))p+i.length>n.length?r.from(i).copy(n,p):Uint8Array.prototype.set.call(n,i,p);else if(r.isBuffer(i))i.copy(n,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=i.length}return n};function w(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var p=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return K(e).length;default:if(p)return n?-1:Y(e).length;t=(""+t).toLowerCase(),p=!0}}r.byteLength=w;function R(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return me(this,t,o);case"utf8":case"utf-8":return W(this,t,o);case"ascii":return ue(this,t,o);case"latin1":case"binary":return de(this,t,o);case"base64":return _e(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return se(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function j(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)j(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)j(this,t,t+3),j(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)j(this,t,t+7),j(this,t+1,t+6),j(this,t+2,t+5),j(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?W(this,0,e):R.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(r.prototype[a]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,p){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),p===void 0&&(p=this.length),t<0||o>e.length||n<0||p>this.length)throw new RangeError("out of range index");if(n>=p&&t>=o)return 0;if(n>=p)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,p>>>=0,this===e)return 0;for(var i=p-n,d=o-t,v=Math.min(i,d),I=this.slice(n,p),E=e.slice(t,o),U=0;U<v;++U)if(I[U]!==E[U]){i=I[U],d=E[U];break}return i<d?-1:d<i?1:0};function O(e,t,o,n,p){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=p?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(p)return-1;o=e.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:Z(e,t,o,n,p);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):Z(e,[t],o,n,p);throw new TypeError("val must be string, number or Buffer")}function Z(e,t,o,n,p){var i=1,d=e.length,v=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,d/=2,v/=2,o/=2}function I(Q,ee){return i===1?Q[ee]:Q.readUInt16BE(ee*i)}var E;if(p){var U=-1;for(E=o;E<d;E++)if(I(e,E)===I(t,U===-1?0:E-U)){if(U===-1&&(U=E),E-U+1===v)return U*i}else U!==-1&&(E-=E-U),U=-1}else for(o+v>d&&(o=d-v),E=o;E>=0;E--){for(var C=!0,q=0;q<v;q++)if(I(e,E+q)!==I(t,q)){C=!1;break}if(C)return E}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return O(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return O(this,e,t,o,!1)};function re(e,t,o,n){o=Number(o)||0;var p=e.length-o;n?(n=Number(n),n>p&&(n=p)):n=p;var i=t.length;n>i/2&&(n=i/2);for(var d=0;d<n;++d){var v=parseInt(t.substr(d*2,2),16);if(V(v))return d;e[o+d]=v}return d}function ce(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function pe(e,t,o,n){return D(ge(t),e,o,n)}function le(e,t,o,n){return D(K(t),e,o,n)}function ie(e,t,o,n){return D(ye(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((o===void 0||o>p)&&(o=p),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return re(this,e,t,o);case"utf8":case"utf-8":return ce(this,e,t,o);case"ascii":case"latin1":case"binary":return pe(this,e,t,o);case"base64":return le(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,e,t,o);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _e(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function W(e,t,o){o=Math.min(e.length,o);for(var n=[],p=t;p<o;){var i=e[p],d=null,v=i>239?4:i>223?3:i>191?2:1;if(p+v<=o){var I,E,U,C;switch(v){case 1:i<128&&(d=i);break;case 2:I=e[p+1],(I&192)===128&&(C=(i&31)<<6|I&63,C>127&&(d=C));break;case 3:I=e[p+1],E=e[p+2],(I&192)===128&&(E&192)===128&&(C=(i&15)<<12|(I&63)<<6|E&63,C>2047&&(C<55296||C>57343)&&(d=C));break;case 4:I=e[p+1],E=e[p+2],U=e[p+3],(I&192)===128&&(E&192)===128&&(U&192)===128&&(C=(i&15)<<18|(I&63)<<12|(E&63)<<6|U&63,C>65535&&C<1114112&&(d=C))}}d===null?(d=65533,v=1):d>65535&&(d-=65536,n.push(d>>>10&1023|55296),d=56320|d&1023),n.push(d),p+=v}return ae(n)}var G=4096;function ae(e){var t=e.length;if(t<=G)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=G));return o}function ue(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]&127);return n}function de(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]);return n}function me(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var p="",i=t;i<o;++i)p+=ke[e[i]];return p}function se(e,t,o){for(var n=e.slice(t,o),p="",i=0;i<n.length-1;i+=2)p+=String.fromCharCode(n[i]+n[i+1]*256);return p}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function T(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e+--t],p=1;t>0&&(p*=256);)n+=this[e+--t]*p;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return p*=128,n>=p&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=t,p=1,i=this[e+--n];n>0&&(p*=256);)i+=this[e+--n]*p;return p*=128,i>=p&&(i-=Math.pow(2,8*t)),i},r.prototype.readInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!1,52,8)};function M(e,t,o,n,p,i){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>p||t<i)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=1,d=0;for(this[t]=e&255;++d<o&&(i*=256);)this[t+d]=e/i&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=o-1,d=1;for(this[t+i]=e&255;--i>=0&&(d*=256);)this[t+i]=e/d&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=0,d=1,v=0;for(this[t]=e&255;++i<o&&(d*=256);)e<0&&v===0&&this[t+i-1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=o-1,d=1,v=0;for(this[t+i]=e&255;--i>=0&&(d*=256);)e<0&&v===0&&this[t+i+1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,p,i){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function H(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),c.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return H(this,e,t,!1,o)};function J(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),c.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return J(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return J(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var p=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),p},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var p=e.charCodeAt(0);(n==="utf8"&&p<128||n==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<o;++i)this[i]=e;else{var d=r.isBuffer(e)?e:r.from(e,n),v=d.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<o-t;++i)this[i+t]=d[i%v]}return this};var fe=/[^+/0-9A-Za-z-_]/g;function he(e){if(e=e.split("=")[0],e=e.trim().replace(fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,p=null,i=[],d=0;d<n;++d){if(o=e.charCodeAt(d),o>55295&&o<57344){if(!p){if(o>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(d+1===n){(t-=3)>-1&&i.push(239,191,189);continue}p=o;continue}if(o<56320){(t-=3)>-1&&i.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(t-=3)>-1&&i.push(239,191,189);if(p=null,o<128){if((t-=1)<0)break;i.push(o)}else if(o<2048){if((t-=2)<0)break;i.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;i.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;i.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return i}function ge(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function ye(e,t){for(var o,n,p,i=[],d=0;d<e.length&&!((t-=2)<0);++d)o=e.charCodeAt(d),n=o>>8,p=o%256,i.push(p),i.push(n);return i}function K(e){return l.toByteArray(he(e))}function D(e,t,o,n){for(var p=0;p<n&&!(p+o>=t.length||p>=e.length);++p)t[p+o]=e[p];return p}function z(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ke=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,p=0;p<16;++p)t[n+p]=e[o]+e[p];return t}()}),qc=yt((_,l)=>{Ge();var c=l.exports={},a,u;function h(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=h}catch(f){a=h}try{typeof clearTimeout=="function"?u=clearTimeout:u=s}catch(f){u=s}})();function r(f){if(a===setTimeout)return setTimeout(f,0);if((a===h||!a)&&setTimeout)return a=setTimeout,setTimeout(f,0);try{return a(f,0)}catch(b){try{return a.call(null,f,0)}catch(w){return a.call(this,f,0)}}}function A(f){if(u===clearTimeout)return clearTimeout(f);if((u===s||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(f);try{return u(f)}catch(b){try{return u.call(null,f)}catch(w){return u.call(this,f)}}}var S=[],B=!1,k,x=-1;function L(){!B||!k||(B=!1,k.length?S=k.concat(S):x=-1,S.length&&m())}function m(){if(!B){var f=r(L);B=!0;for(var b=S.length;b;){for(k=S,S=[];++x<b;)k&&k[x].run();x=-1,b=S.length}k=null,B=!1,A(f)}}c.nextTick=function(f){var b=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)b[w-1]=arguments[w];S.push(new g(f,b)),S.length===1&&!B&&r(m)};function g(f,b){this.fun=f,this.array=b}g.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function y(){}c.on=y,c.addListener=y,c.once=y,c.off=y,c.removeListener=y,c.removeAllListeners=y,c.emit=y,c.prependListener=y,c.prependOnceListener=y,c.listeners=function(f){return[]},c.binding=function(f){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(f){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}}),Yc,Vc,Xc,Ge=jc(()=>{Yc=Wt(Dc()),Vc=Wt(qc()),Xc=function(_){function l(){var a=this||self;return delete _.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return l();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:l});var c=__magic__;return c}(Object)}),No={};Pc(No,{Menu:()=>Hc});Fo.exports=Nc(No);Ge();var Zt=Wt(require("react")),Zc=require("@fortawesome/free-solid-svg-icons"),Wc=require("@fortawesome/react-fontawesome"),Gc=require("react-select");Ge();var $c=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($c));var Mo={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Hc=_=>Zt.default.createElement(Gc.components.Menu,Mc(Rc({},_),{className:Mo.menu}),_.selectProps.isLoading?Zt.default.createElement("div",{className:Mo.loading},Zt.default.createElement(Wc.FontAwesomeIcon,{icon:Zc.faCircleNotch,className:"fa-spin",size:"lg"})):_.children);});var Wo=xe((Hi,Zo)=>{"use strict";X();var Jc=Object.create,nt=Object.defineProperty,Kc=Object.defineProperties,Qc=Object.getOwnPropertyDescriptor,ep=Object.getOwnPropertyDescriptors,tp=Object.getOwnPropertyNames,Do=Object.getOwnPropertySymbols,op=Object.getPrototypeOf,Yo=Object.prototype.hasOwnProperty,np=Object.prototype.propertyIsEnumerable,qo=(_,l,c)=>l in _?nt(_,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):_[l]=c,rp=(_,l)=>{for(var c in l||(l={}))Yo.call(l,c)&&qo(_,c,l[c]);if(Do)for(var c of Do(l))np.call(l,c)&&qo(_,c,l[c]);return _},cp=(_,l)=>Kc(_,ep(l)),pp=(_,l)=>()=>(_&&(l=_(_=0)),l),kt=(_,l)=>()=>(l||_((l={exports:{}}).exports,l),l.exports),lp=(_,l)=>{for(var c in l)nt(_,c,{get:l[c],enumerable:!0})},Vo=(_,l,c,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of tp(l))!Yo.call(_,u)&&u!==c&&nt(_,u,{get:()=>l[u],enumerable:!(a=Qc(l,u))||a.enumerable});return _},Gt=(_,l,c)=>(c=_!=null?Jc(op(_)):{},Vo(l||!_||!_.__esModule?nt(c,"default",{value:_,enumerable:!0}):c,_)),ip=_=>Vo(nt({},"__esModule",{value:!0}),_),_p=kt(_=>{"use strict";$e(),_.byteLength=A,_.toByteArray=B,_.fromByteArray=L;var l=[],c=[],a=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(h=0,s=u.length;h<s;++h)l[h]=u[h],c[u.charCodeAt(h)]=h;var h,s;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63;function r(m){var g=m.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=m.indexOf("=");y===-1&&(y=g);var f=y===g?0:4-y%4;return[y,f]}function A(m){var g=r(m),y=g[0],f=g[1];return(y+f)*3/4-f}function S(m,g,y){return(g+y)*3/4-y}function B(m){var g,y=r(m),f=y[0],b=y[1],w=new a(S(m,f,b)),R=0,j=b>0?f-4:f,O;for(O=0;O<j;O+=4)g=c[m.charCodeAt(O)]<<18|c[m.charCodeAt(O+1)]<<12|c[m.charCodeAt(O+2)]<<6|c[m.charCodeAt(O+3)],w[R++]=g>>16&255,w[R++]=g>>8&255,w[R++]=g&255;return b===2&&(g=c[m.charCodeAt(O)]<<2|c[m.charCodeAt(O+1)]>>4,w[R++]=g&255),b===1&&(g=c[m.charCodeAt(O)]<<10|c[m.charCodeAt(O+1)]<<4|c[m.charCodeAt(O+2)]>>2,w[R++]=g>>8&255,w[R++]=g&255),w}function k(m){return l[m>>18&63]+l[m>>12&63]+l[m>>6&63]+l[m&63]}function x(m,g,y){for(var f,b=[],w=g;w<y;w+=3)f=(m[w]<<16&16711680)+(m[w+1]<<8&65280)+(m[w+2]&255),b.push(k(f));return b.join("")}function L(m){for(var g,y=m.length,f=y%3,b=[],w=16383,R=0,j=y-f;R<j;R+=w)b.push(x(m,R,R+w>j?j:R+w));return f===1?(g=m[y-1],b.push(l[g>>2]+l[g<<4&63]+"==")):f===2&&(g=(m[y-2]<<8)+m[y-1],b.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),b.join("")}}),ap=kt(_=>{$e(),_.read=function(l,c,a,u,h){var s,r,A=h*8-u-1,S=(1<<A)-1,B=S>>1,k=-7,x=a?h-1:0,L=a?-1:1,m=l[c+x];for(x+=L,s=m&(1<<-k)-1,m>>=-k,k+=A;k>0;s=s*256+l[c+x],x+=L,k-=8);for(r=s&(1<<-k)-1,s>>=-k,k+=u;k>0;r=r*256+l[c+x],x+=L,k-=8);if(s===0)s=1-B;else{if(s===S)return r?NaN:(m?-1:1)*(1/0);r=r+Math.pow(2,u),s=s-B}return(m?-1:1)*r*Math.pow(2,s-u)},_.write=function(l,c,a,u,h,s){var r,A,S,B=s*8-h-1,k=(1<<B)-1,x=k>>1,L=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=u?0:s-1,g=u?1:-1,y=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(A=isNaN(c)?1:0,r=k):(r=Math.floor(Math.log(c)/Math.LN2),c*(S=Math.pow(2,-r))<1&&(r--,S*=2),r+x>=1?c+=L/S:c+=L*Math.pow(2,1-x),c*S>=2&&(r++,S/=2),r+x>=k?(A=0,r=k):r+x>=1?(A=(c*S-1)*Math.pow(2,h),r=r+x):(A=c*Math.pow(2,x-1)*Math.pow(2,h),r=0));h>=8;l[a+m]=A&255,m+=g,A/=256,h-=8);for(r=r<<h|A,B+=h;B>0;l[a+m]=r&255,m+=g,r/=256,B-=8);l[a+m-g]|=y*128}}),up=kt(_=>{"use strict";$e();var l=_p(),c=ap(),a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=b,_.INSPECT_MAX_BYTES=50;var u=2147483647;_.kMaxLength=u,r.TYPED_ARRAY_SUPPORT=h(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function s(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return A(e,t,o)}r.poolSize=8192;function A(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var p=y(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return A(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function S(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return S(e),e<=0?s(e):t!==void 0?typeof o=="string"?s(e).fill(t,o):s(e).fill(t):s(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return S(e),s(e<0?0:f(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=w(e,t)|0,n=s(o),p=n.write(e,t);return p!==o&&(n=n.slice(0,p)),n}function L(e){for(var t=e.length<0?0:f(e.length)|0,o=s(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function m(e){if(z(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return L(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function y(e){if(r.isBuffer(e)){var t=f(e.length)|0,o=s(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?s(0):L(e);if(e.type==="Buffer"&&Array.isArray(e.data))return L(e.data)}function f(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function b(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,p=0,i=Math.min(o,n);p<i;++p)if(e[p]!==t[p]){o=e[p],n=t[p];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),p=0;for(o=0;o<e.length;++o){var i=e[o];if(z(i,Uint8Array))p+i.length>n.length?r.from(i).copy(n,p):Uint8Array.prototype.set.call(n,i,p);else if(r.isBuffer(i))i.copy(n,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=i.length}return n};function w(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var p=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return K(e).length;default:if(p)return n?-1:Y(e).length;t=(""+t).toLowerCase(),p=!0}}r.byteLength=w;function R(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return me(this,t,o);case"utf8":case"utf-8":return W(this,t,o);case"ascii":return ue(this,t,o);case"latin1":case"binary":return de(this,t,o);case"base64":return _e(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return se(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function j(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)j(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)j(this,t,t+3),j(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)j(this,t,t+7),j(this,t+1,t+6),j(this,t+2,t+5),j(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?W(this,0,e):R.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(r.prototype[a]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,p){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),p===void 0&&(p=this.length),t<0||o>e.length||n<0||p>this.length)throw new RangeError("out of range index");if(n>=p&&t>=o)return 0;if(n>=p)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,p>>>=0,this===e)return 0;for(var i=p-n,d=o-t,v=Math.min(i,d),I=this.slice(n,p),E=e.slice(t,o),U=0;U<v;++U)if(I[U]!==E[U]){i=I[U],d=E[U];break}return i<d?-1:d<i?1:0};function O(e,t,o,n,p){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=p?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(p)return-1;o=e.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:Z(e,t,o,n,p);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):Z(e,[t],o,n,p);throw new TypeError("val must be string, number or Buffer")}function Z(e,t,o,n,p){var i=1,d=e.length,v=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,d/=2,v/=2,o/=2}function I(Q,ee){return i===1?Q[ee]:Q.readUInt16BE(ee*i)}var E;if(p){var U=-1;for(E=o;E<d;E++)if(I(e,E)===I(t,U===-1?0:E-U)){if(U===-1&&(U=E),E-U+1===v)return U*i}else U!==-1&&(E-=E-U),U=-1}else for(o+v>d&&(o=d-v),E=o;E>=0;E--){for(var C=!0,q=0;q<v;q++)if(I(e,E+q)!==I(t,q)){C=!1;break}if(C)return E}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return O(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return O(this,e,t,o,!1)};function re(e,t,o,n){o=Number(o)||0;var p=e.length-o;n?(n=Number(n),n>p&&(n=p)):n=p;var i=t.length;n>i/2&&(n=i/2);for(var d=0;d<n;++d){var v=parseInt(t.substr(d*2,2),16);if(V(v))return d;e[o+d]=v}return d}function ce(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function pe(e,t,o,n){return D(ge(t),e,o,n)}function le(e,t,o,n){return D(K(t),e,o,n)}function ie(e,t,o,n){return D(ye(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((o===void 0||o>p)&&(o=p),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return re(this,e,t,o);case"utf8":case"utf-8":return ce(this,e,t,o);case"ascii":case"latin1":case"binary":return pe(this,e,t,o);case"base64":return le(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,e,t,o);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _e(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function W(e,t,o){o=Math.min(e.length,o);for(var n=[],p=t;p<o;){var i=e[p],d=null,v=i>239?4:i>223?3:i>191?2:1;if(p+v<=o){var I,E,U,C;switch(v){case 1:i<128&&(d=i);break;case 2:I=e[p+1],(I&192)===128&&(C=(i&31)<<6|I&63,C>127&&(d=C));break;case 3:I=e[p+1],E=e[p+2],(I&192)===128&&(E&192)===128&&(C=(i&15)<<12|(I&63)<<6|E&63,C>2047&&(C<55296||C>57343)&&(d=C));break;case 4:I=e[p+1],E=e[p+2],U=e[p+3],(I&192)===128&&(E&192)===128&&(U&192)===128&&(C=(i&15)<<18|(I&63)<<12|(E&63)<<6|U&63,C>65535&&C<1114112&&(d=C))}}d===null?(d=65533,v=1):d>65535&&(d-=65536,n.push(d>>>10&1023|55296),d=56320|d&1023),n.push(d),p+=v}return ae(n)}var G=4096;function ae(e){var t=e.length;if(t<=G)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=G));return o}function ue(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]&127);return n}function de(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]);return n}function me(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var p="",i=t;i<o;++i)p+=ke[e[i]];return p}function se(e,t,o){for(var n=e.slice(t,o),p="",i=0;i<n.length-1;i+=2)p+=String.fromCharCode(n[i]+n[i+1]*256);return p}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function T(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e+--t],p=1;t>0&&(p*=256);)n+=this[e+--t]*p;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return p*=128,n>=p&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=t,p=1,i=this[e+--n];n>0&&(p*=256);)i+=this[e+--n]*p;return p*=128,i>=p&&(i-=Math.pow(2,8*t)),i},r.prototype.readInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!1,52,8)};function M(e,t,o,n,p,i){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>p||t<i)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=1,d=0;for(this[t]=e&255;++d<o&&(i*=256);)this[t+d]=e/i&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=o-1,d=1;for(this[t+i]=e&255;--i>=0&&(d*=256);)this[t+i]=e/d&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=0,d=1,v=0;for(this[t]=e&255;++i<o&&(d*=256);)e<0&&v===0&&this[t+i-1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=o-1,d=1,v=0;for(this[t+i]=e&255;--i>=0&&(d*=256);)e<0&&v===0&&this[t+i+1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,p,i){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function H(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),c.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return H(this,e,t,!1,o)};function J(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),c.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return J(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return J(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var p=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),p},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var p=e.charCodeAt(0);(n==="utf8"&&p<128||n==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<o;++i)this[i]=e;else{var d=r.isBuffer(e)?e:r.from(e,n),v=d.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<o-t;++i)this[i+t]=d[i%v]}return this};var fe=/[^+/0-9A-Za-z-_]/g;function he(e){if(e=e.split("=")[0],e=e.trim().replace(fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,p=null,i=[],d=0;d<n;++d){if(o=e.charCodeAt(d),o>55295&&o<57344){if(!p){if(o>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(d+1===n){(t-=3)>-1&&i.push(239,191,189);continue}p=o;continue}if(o<56320){(t-=3)>-1&&i.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(t-=3)>-1&&i.push(239,191,189);if(p=null,o<128){if((t-=1)<0)break;i.push(o)}else if(o<2048){if((t-=2)<0)break;i.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;i.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;i.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return i}function ge(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function ye(e,t){for(var o,n,p,i=[],d=0;d<e.length&&!((t-=2)<0);++d)o=e.charCodeAt(d),n=o>>8,p=o%256,i.push(p),i.push(n);return i}function K(e){return l.toByteArray(he(e))}function D(e,t,o,n){for(var p=0;p<n&&!(p+o>=t.length||p>=e.length);++p)t[p+o]=e[p];return p}function z(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ke=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,p=0;p<16;++p)t[n+p]=e[o]+e[p];return t}()}),dp=kt((_,l)=>{$e();var c=l.exports={},a,u;function h(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=h}catch(f){a=h}try{typeof clearTimeout=="function"?u=clearTimeout:u=s}catch(f){u=s}})();function r(f){if(a===setTimeout)return setTimeout(f,0);if((a===h||!a)&&setTimeout)return a=setTimeout,setTimeout(f,0);try{return a(f,0)}catch(b){try{return a.call(null,f,0)}catch(w){return a.call(this,f,0)}}}function A(f){if(u===clearTimeout)return clearTimeout(f);if((u===s||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(f);try{return u(f)}catch(b){try{return u.call(null,f)}catch(w){return u.call(this,f)}}}var S=[],B=!1,k,x=-1;function L(){!B||!k||(B=!1,k.length?S=k.concat(S):x=-1,S.length&&m())}function m(){if(!B){var f=r(L);B=!0;for(var b=S.length;b;){for(k=S,S=[];++x<b;)k&&k[x].run();x=-1,b=S.length}k=null,B=!1,A(f)}}c.nextTick=function(f){var b=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)b[w-1]=arguments[w];S.push(new g(f,b)),S.length===1&&!B&&r(m)};function g(f,b){this.fun=f,this.array=b}g.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function y(){}c.on=y,c.addListener=y,c.once=y,c.off=y,c.removeListener=y,c.removeAllListeners=y,c.emit=y,c.prependListener=y,c.prependOnceListener=y,c.listeners=function(f){return[]},c.binding=function(f){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(f){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}}),mp,sp,fp,$e=pp(()=>{mp=Gt(up()),sp=Gt(dp()),fp=function(_){function l(){var a=this||self;return delete _.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return l();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:l});var c=__magic__;return c}(Object)}),Xo={};lp(Xo,{Control:()=>Sp});Zo.exports=ip(Xo);$e();var hp=Gt(require("react")),gp=require("react-select");$e();var yp=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(yp));var kp={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Sp=_=>hp.default.createElement(gp.components.Control,cp(rp({},_),{className:kp.control}));});var tn=xe((Ji,en)=>{"use strict";X();var wp=Object.create,rt=Object.defineProperty,vp=Object.defineProperties,bp=Object.getOwnPropertyDescriptor,xp=Object.getOwnPropertyDescriptors,Ep=Object.getOwnPropertyNames,Go=Object.getOwnPropertySymbols,Ap=Object.getPrototypeOf,Jo=Object.prototype.hasOwnProperty,Bp=Object.prototype.propertyIsEnumerable,$o=(_,l,c)=>l in _?rt(_,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):_[l]=c,Up=(_,l)=>{for(var c in l||(l={}))Jo.call(l,c)&&$o(_,c,l[c]);if(Go)for(var c of Go(l))Bp.call(l,c)&&$o(_,c,l[c]);return _},Tp=(_,l)=>vp(_,xp(l)),Ip=(_,l)=>()=>(_&&(l=_(_=0)),l),wt=(_,l)=>()=>(l||_((l={exports:{}}).exports,l),l.exports),Lp=(_,l)=>{for(var c in l)rt(_,c,{get:l[c],enumerable:!0})},Ko=(_,l,c,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of Ep(l))!Jo.call(_,u)&&u!==c&&rt(_,u,{get:()=>l[u],enumerable:!(a=bp(l,u))||a.enumerable});return _},St=(_,l,c)=>(c=_!=null?wp(Ap(_)):{},Ko(l||!_||!_.__esModule?rt(c,"default",{value:_,enumerable:!0}):c,_)),Op=_=>Ko(rt({},"__esModule",{value:!0}),_),Cp=wt(_=>{"use strict";He(),_.byteLength=A,_.toByteArray=B,_.fromByteArray=L;var l=[],c=[],a=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(h=0,s=u.length;h<s;++h)l[h]=u[h],c[u.charCodeAt(h)]=h;var h,s;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63;function r(m){var g=m.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=m.indexOf("=");y===-1&&(y=g);var f=y===g?0:4-y%4;return[y,f]}function A(m){var g=r(m),y=g[0],f=g[1];return(y+f)*3/4-f}function S(m,g,y){return(g+y)*3/4-y}function B(m){var g,y=r(m),f=y[0],b=y[1],w=new a(S(m,f,b)),R=0,j=b>0?f-4:f,O;for(O=0;O<j;O+=4)g=c[m.charCodeAt(O)]<<18|c[m.charCodeAt(O+1)]<<12|c[m.charCodeAt(O+2)]<<6|c[m.charCodeAt(O+3)],w[R++]=g>>16&255,w[R++]=g>>8&255,w[R++]=g&255;return b===2&&(g=c[m.charCodeAt(O)]<<2|c[m.charCodeAt(O+1)]>>4,w[R++]=g&255),b===1&&(g=c[m.charCodeAt(O)]<<10|c[m.charCodeAt(O+1)]<<4|c[m.charCodeAt(O+2)]>>2,w[R++]=g>>8&255,w[R++]=g&255),w}function k(m){return l[m>>18&63]+l[m>>12&63]+l[m>>6&63]+l[m&63]}function x(m,g,y){for(var f,b=[],w=g;w<y;w+=3)f=(m[w]<<16&16711680)+(m[w+1]<<8&65280)+(m[w+2]&255),b.push(k(f));return b.join("")}function L(m){for(var g,y=m.length,f=y%3,b=[],w=16383,R=0,j=y-f;R<j;R+=w)b.push(x(m,R,R+w>j?j:R+w));return f===1?(g=m[y-1],b.push(l[g>>2]+l[g<<4&63]+"==")):f===2&&(g=(m[y-2]<<8)+m[y-1],b.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),b.join("")}}),Rp=wt(_=>{He(),_.read=function(l,c,a,u,h){var s,r,A=h*8-u-1,S=(1<<A)-1,B=S>>1,k=-7,x=a?h-1:0,L=a?-1:1,m=l[c+x];for(x+=L,s=m&(1<<-k)-1,m>>=-k,k+=A;k>0;s=s*256+l[c+x],x+=L,k-=8);for(r=s&(1<<-k)-1,s>>=-k,k+=u;k>0;r=r*256+l[c+x],x+=L,k-=8);if(s===0)s=1-B;else{if(s===S)return r?NaN:(m?-1:1)*(1/0);r=r+Math.pow(2,u),s=s-B}return(m?-1:1)*r*Math.pow(2,s-u)},_.write=function(l,c,a,u,h,s){var r,A,S,B=s*8-h-1,k=(1<<B)-1,x=k>>1,L=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=u?0:s-1,g=u?1:-1,y=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(A=isNaN(c)?1:0,r=k):(r=Math.floor(Math.log(c)/Math.LN2),c*(S=Math.pow(2,-r))<1&&(r--,S*=2),r+x>=1?c+=L/S:c+=L*Math.pow(2,1-x),c*S>=2&&(r++,S/=2),r+x>=k?(A=0,r=k):r+x>=1?(A=(c*S-1)*Math.pow(2,h),r=r+x):(A=c*Math.pow(2,x-1)*Math.pow(2,h),r=0));h>=8;l[a+m]=A&255,m+=g,A/=256,h-=8);for(r=r<<h|A,B+=h;B>0;l[a+m]=r&255,m+=g,r/=256,B-=8);l[a+m-g]|=y*128}}),Mp=wt(_=>{"use strict";He();var l=Cp(),c=Rp(),a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=b,_.INSPECT_MAX_BYTES=50;var u=2147483647;_.kMaxLength=u,r.TYPED_ARRAY_SUPPORT=h(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function s(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return A(e,t,o)}r.poolSize=8192;function A(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var p=y(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return A(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function S(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return S(e),e<=0?s(e):t!==void 0?typeof o=="string"?s(e).fill(t,o):s(e).fill(t):s(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return S(e),s(e<0?0:f(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=w(e,t)|0,n=s(o),p=n.write(e,t);return p!==o&&(n=n.slice(0,p)),n}function L(e){for(var t=e.length<0?0:f(e.length)|0,o=s(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function m(e){if(z(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return L(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function y(e){if(r.isBuffer(e)){var t=f(e.length)|0,o=s(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?s(0):L(e);if(e.type==="Buffer"&&Array.isArray(e.data))return L(e.data)}function f(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function b(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,p=0,i=Math.min(o,n);p<i;++p)if(e[p]!==t[p]){o=e[p],n=t[p];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),p=0;for(o=0;o<e.length;++o){var i=e[o];if(z(i,Uint8Array))p+i.length>n.length?r.from(i).copy(n,p):Uint8Array.prototype.set.call(n,i,p);else if(r.isBuffer(i))i.copy(n,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=i.length}return n};function w(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var p=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return K(e).length;default:if(p)return n?-1:Y(e).length;t=(""+t).toLowerCase(),p=!0}}r.byteLength=w;function R(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return me(this,t,o);case"utf8":case"utf-8":return W(this,t,o);case"ascii":return ue(this,t,o);case"latin1":case"binary":return de(this,t,o);case"base64":return _e(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return se(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function j(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)j(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)j(this,t,t+3),j(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)j(this,t,t+7),j(this,t+1,t+6),j(this,t+2,t+5),j(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?W(this,0,e):R.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(r.prototype[a]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,p){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),p===void 0&&(p=this.length),t<0||o>e.length||n<0||p>this.length)throw new RangeError("out of range index");if(n>=p&&t>=o)return 0;if(n>=p)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,p>>>=0,this===e)return 0;for(var i=p-n,d=o-t,v=Math.min(i,d),I=this.slice(n,p),E=e.slice(t,o),U=0;U<v;++U)if(I[U]!==E[U]){i=I[U],d=E[U];break}return i<d?-1:d<i?1:0};function O(e,t,o,n,p){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=p?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(p)return-1;o=e.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:Z(e,t,o,n,p);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):Z(e,[t],o,n,p);throw new TypeError("val must be string, number or Buffer")}function Z(e,t,o,n,p){var i=1,d=e.length,v=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,d/=2,v/=2,o/=2}function I(Q,ee){return i===1?Q[ee]:Q.readUInt16BE(ee*i)}var E;if(p){var U=-1;for(E=o;E<d;E++)if(I(e,E)===I(t,U===-1?0:E-U)){if(U===-1&&(U=E),E-U+1===v)return U*i}else U!==-1&&(E-=E-U),U=-1}else for(o+v>d&&(o=d-v),E=o;E>=0;E--){for(var C=!0,q=0;q<v;q++)if(I(e,E+q)!==I(t,q)){C=!1;break}if(C)return E}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return O(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return O(this,e,t,o,!1)};function re(e,t,o,n){o=Number(o)||0;var p=e.length-o;n?(n=Number(n),n>p&&(n=p)):n=p;var i=t.length;n>i/2&&(n=i/2);for(var d=0;d<n;++d){var v=parseInt(t.substr(d*2,2),16);if(V(v))return d;e[o+d]=v}return d}function ce(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function pe(e,t,o,n){return D(ge(t),e,o,n)}function le(e,t,o,n){return D(K(t),e,o,n)}function ie(e,t,o,n){return D(ye(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((o===void 0||o>p)&&(o=p),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return re(this,e,t,o);case"utf8":case"utf-8":return ce(this,e,t,o);case"ascii":case"latin1":case"binary":return pe(this,e,t,o);case"base64":return le(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,e,t,o);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _e(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function W(e,t,o){o=Math.min(e.length,o);for(var n=[],p=t;p<o;){var i=e[p],d=null,v=i>239?4:i>223?3:i>191?2:1;if(p+v<=o){var I,E,U,C;switch(v){case 1:i<128&&(d=i);break;case 2:I=e[p+1],(I&192)===128&&(C=(i&31)<<6|I&63,C>127&&(d=C));break;case 3:I=e[p+1],E=e[p+2],(I&192)===128&&(E&192)===128&&(C=(i&15)<<12|(I&63)<<6|E&63,C>2047&&(C<55296||C>57343)&&(d=C));break;case 4:I=e[p+1],E=e[p+2],U=e[p+3],(I&192)===128&&(E&192)===128&&(U&192)===128&&(C=(i&15)<<18|(I&63)<<12|(E&63)<<6|U&63,C>65535&&C<1114112&&(d=C))}}d===null?(d=65533,v=1):d>65535&&(d-=65536,n.push(d>>>10&1023|55296),d=56320|d&1023),n.push(d),p+=v}return ae(n)}var G=4096;function ae(e){var t=e.length;if(t<=G)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=G));return o}function ue(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]&127);return n}function de(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]);return n}function me(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var p="",i=t;i<o;++i)p+=ke[e[i]];return p}function se(e,t,o){for(var n=e.slice(t,o),p="",i=0;i<n.length-1;i+=2)p+=String.fromCharCode(n[i]+n[i+1]*256);return p}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function T(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e+--t],p=1;t>0&&(p*=256);)n+=this[e+--t]*p;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return p*=128,n>=p&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=t,p=1,i=this[e+--n];n>0&&(p*=256);)i+=this[e+--n]*p;return p*=128,i>=p&&(i-=Math.pow(2,8*t)),i},r.prototype.readInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!1,52,8)};function M(e,t,o,n,p,i){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>p||t<i)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=1,d=0;for(this[t]=e&255;++d<o&&(i*=256);)this[t+d]=e/i&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=o-1,d=1;for(this[t+i]=e&255;--i>=0&&(d*=256);)this[t+i]=e/d&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=0,d=1,v=0;for(this[t]=e&255;++i<o&&(d*=256);)e<0&&v===0&&this[t+i-1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=o-1,d=1,v=0;for(this[t+i]=e&255;--i>=0&&(d*=256);)e<0&&v===0&&this[t+i+1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,p,i){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function H(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),c.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return H(this,e,t,!1,o)};function J(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),c.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return J(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return J(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var p=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),p},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var p=e.charCodeAt(0);(n==="utf8"&&p<128||n==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<o;++i)this[i]=e;else{var d=r.isBuffer(e)?e:r.from(e,n),v=d.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<o-t;++i)this[i+t]=d[i%v]}return this};var fe=/[^+/0-9A-Za-z-_]/g;function he(e){if(e=e.split("=")[0],e=e.trim().replace(fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,p=null,i=[],d=0;d<n;++d){if(o=e.charCodeAt(d),o>55295&&o<57344){if(!p){if(o>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(d+1===n){(t-=3)>-1&&i.push(239,191,189);continue}p=o;continue}if(o<56320){(t-=3)>-1&&i.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(t-=3)>-1&&i.push(239,191,189);if(p=null,o<128){if((t-=1)<0)break;i.push(o)}else if(o<2048){if((t-=2)<0)break;i.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;i.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;i.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return i}function ge(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function ye(e,t){for(var o,n,p,i=[],d=0;d<e.length&&!((t-=2)<0);++d)o=e.charCodeAt(d),n=o>>8,p=o%256,i.push(p),i.push(n);return i}function K(e){return l.toByteArray(he(e))}function D(e,t,o,n){for(var p=0;p<n&&!(p+o>=t.length||p>=e.length);++p)t[p+o]=e[p];return p}function z(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ke=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,p=0;p<16;++p)t[n+p]=e[o]+e[p];return t}()}),jp=wt((_,l)=>{He();var c=l.exports={},a,u;function h(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=h}catch(f){a=h}try{typeof clearTimeout=="function"?u=clearTimeout:u=s}catch(f){u=s}})();function r(f){if(a===setTimeout)return setTimeout(f,0);if((a===h||!a)&&setTimeout)return a=setTimeout,setTimeout(f,0);try{return a(f,0)}catch(b){try{return a.call(null,f,0)}catch(w){return a.call(this,f,0)}}}function A(f){if(u===clearTimeout)return clearTimeout(f);if((u===s||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(f);try{return u(f)}catch(b){try{return u.call(null,f)}catch(w){return u.call(this,f)}}}var S=[],B=!1,k,x=-1;function L(){!B||!k||(B=!1,k.length?S=k.concat(S):x=-1,S.length&&m())}function m(){if(!B){var f=r(L);B=!0;for(var b=S.length;b;){for(k=S,S=[];++x<b;)k&&k[x].run();x=-1,b=S.length}k=null,B=!1,A(f)}}c.nextTick=function(f){var b=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)b[w-1]=arguments[w];S.push(new g(f,b)),S.length===1&&!B&&r(m)};function g(f,b){this.fun=f,this.array=b}g.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function y(){}c.on=y,c.addListener=y,c.once=y,c.off=y,c.removeListener=y,c.removeAllListeners=y,c.emit=y,c.prependListener=y,c.prependOnceListener=y,c.listeners=function(f){return[]},c.binding=function(f){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(f){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}}),Pp,Np,Fp,He=Ip(()=>{Pp=St(Mp()),Np=St(jp()),Fp=function(_){function l(){var a=this||self;return delete _.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return l();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:l});var c=__magic__;return c}(Object)}),Qo={};Lp(Qo,{Placeholder:()=>Vp});en.exports=Op(Qo);He();var zp=St(require("react")),Dp=St(require("classnames")),qp=require("react-select");He();var Yp=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yp));var Ho={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Vp=_=>zp.default.createElement(qp.components.Placeholder,Tp(Up({},_),{className:(0,Dp.default)(Ho.placeholder,{[Ho.focused]:_.isFocused})}));});var an=xe((Ki,_n)=>{"use strict";X();var Xp=Object.create,ct=Object.defineProperty,Zp=Object.defineProperties,Wp=Object.getOwnPropertyDescriptor,Gp=Object.getOwnPropertyDescriptors,$p=Object.getOwnPropertyNames,on=Object.getOwnPropertySymbols,Hp=Object.getPrototypeOf,cn=Object.prototype.hasOwnProperty,Jp=Object.prototype.propertyIsEnumerable,nn=(_,l,c)=>l in _?ct(_,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):_[l]=c,Kp=(_,l)=>{for(var c in l||(l={}))cn.call(l,c)&&nn(_,c,l[c]);if(on)for(var c of on(l))Jp.call(l,c)&&nn(_,c,l[c]);return _},Qp=(_,l)=>Zp(_,Gp(l)),el=(_,l)=>()=>(_&&(l=_(_=0)),l),bt=(_,l)=>()=>(l||_((l={exports:{}}).exports,l),l.exports),tl=(_,l)=>{for(var c in l)ct(_,c,{get:l[c],enumerable:!0})},pn=(_,l,c,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of $p(l))!cn.call(_,u)&&u!==c&&ct(_,u,{get:()=>l[u],enumerable:!(a=Wp(l,u))||a.enumerable});return _},vt=(_,l,c)=>(c=_!=null?Xp(Hp(_)):{},pn(l||!_||!_.__esModule?ct(c,"default",{value:_,enumerable:!0}):c,_)),ol=_=>pn(ct({},"__esModule",{value:!0}),_),nl=bt(_=>{"use strict";Je(),_.byteLength=A,_.toByteArray=B,_.fromByteArray=L;var l=[],c=[],a=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(h=0,s=u.length;h<s;++h)l[h]=u[h],c[u.charCodeAt(h)]=h;var h,s;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63;function r(m){var g=m.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=m.indexOf("=");y===-1&&(y=g);var f=y===g?0:4-y%4;return[y,f]}function A(m){var g=r(m),y=g[0],f=g[1];return(y+f)*3/4-f}function S(m,g,y){return(g+y)*3/4-y}function B(m){var g,y=r(m),f=y[0],b=y[1],w=new a(S(m,f,b)),R=0,j=b>0?f-4:f,O;for(O=0;O<j;O+=4)g=c[m.charCodeAt(O)]<<18|c[m.charCodeAt(O+1)]<<12|c[m.charCodeAt(O+2)]<<6|c[m.charCodeAt(O+3)],w[R++]=g>>16&255,w[R++]=g>>8&255,w[R++]=g&255;return b===2&&(g=c[m.charCodeAt(O)]<<2|c[m.charCodeAt(O+1)]>>4,w[R++]=g&255),b===1&&(g=c[m.charCodeAt(O)]<<10|c[m.charCodeAt(O+1)]<<4|c[m.charCodeAt(O+2)]>>2,w[R++]=g>>8&255,w[R++]=g&255),w}function k(m){return l[m>>18&63]+l[m>>12&63]+l[m>>6&63]+l[m&63]}function x(m,g,y){for(var f,b=[],w=g;w<y;w+=3)f=(m[w]<<16&16711680)+(m[w+1]<<8&65280)+(m[w+2]&255),b.push(k(f));return b.join("")}function L(m){for(var g,y=m.length,f=y%3,b=[],w=16383,R=0,j=y-f;R<j;R+=w)b.push(x(m,R,R+w>j?j:R+w));return f===1?(g=m[y-1],b.push(l[g>>2]+l[g<<4&63]+"==")):f===2&&(g=(m[y-2]<<8)+m[y-1],b.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),b.join("")}}),rl=bt(_=>{Je(),_.read=function(l,c,a,u,h){var s,r,A=h*8-u-1,S=(1<<A)-1,B=S>>1,k=-7,x=a?h-1:0,L=a?-1:1,m=l[c+x];for(x+=L,s=m&(1<<-k)-1,m>>=-k,k+=A;k>0;s=s*256+l[c+x],x+=L,k-=8);for(r=s&(1<<-k)-1,s>>=-k,k+=u;k>0;r=r*256+l[c+x],x+=L,k-=8);if(s===0)s=1-B;else{if(s===S)return r?NaN:(m?-1:1)*(1/0);r=r+Math.pow(2,u),s=s-B}return(m?-1:1)*r*Math.pow(2,s-u)},_.write=function(l,c,a,u,h,s){var r,A,S,B=s*8-h-1,k=(1<<B)-1,x=k>>1,L=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=u?0:s-1,g=u?1:-1,y=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(A=isNaN(c)?1:0,r=k):(r=Math.floor(Math.log(c)/Math.LN2),c*(S=Math.pow(2,-r))<1&&(r--,S*=2),r+x>=1?c+=L/S:c+=L*Math.pow(2,1-x),c*S>=2&&(r++,S/=2),r+x>=k?(A=0,r=k):r+x>=1?(A=(c*S-1)*Math.pow(2,h),r=r+x):(A=c*Math.pow(2,x-1)*Math.pow(2,h),r=0));h>=8;l[a+m]=A&255,m+=g,A/=256,h-=8);for(r=r<<h|A,B+=h;B>0;l[a+m]=r&255,m+=g,r/=256,B-=8);l[a+m-g]|=y*128}}),cl=bt(_=>{"use strict";Je();var l=nl(),c=rl(),a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=b,_.INSPECT_MAX_BYTES=50;var u=2147483647;_.kMaxLength=u,r.TYPED_ARRAY_SUPPORT=h(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function s(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return A(e,t,o)}r.poolSize=8192;function A(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var p=y(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return A(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function S(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return S(e),e<=0?s(e):t!==void 0?typeof o=="string"?s(e).fill(t,o):s(e).fill(t):s(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return S(e),s(e<0?0:f(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=w(e,t)|0,n=s(o),p=n.write(e,t);return p!==o&&(n=n.slice(0,p)),n}function L(e){for(var t=e.length<0?0:f(e.length)|0,o=s(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function m(e){if(z(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return L(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function y(e){if(r.isBuffer(e)){var t=f(e.length)|0,o=s(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?s(0):L(e);if(e.type==="Buffer"&&Array.isArray(e.data))return L(e.data)}function f(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function b(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,p=0,i=Math.min(o,n);p<i;++p)if(e[p]!==t[p]){o=e[p],n=t[p];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),p=0;for(o=0;o<e.length;++o){var i=e[o];if(z(i,Uint8Array))p+i.length>n.length?r.from(i).copy(n,p):Uint8Array.prototype.set.call(n,i,p);else if(r.isBuffer(i))i.copy(n,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=i.length}return n};function w(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var p=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return K(e).length;default:if(p)return n?-1:Y(e).length;t=(""+t).toLowerCase(),p=!0}}r.byteLength=w;function R(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return me(this,t,o);case"utf8":case"utf-8":return W(this,t,o);case"ascii":return ue(this,t,o);case"latin1":case"binary":return de(this,t,o);case"base64":return _e(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return se(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function j(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)j(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)j(this,t,t+3),j(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)j(this,t,t+7),j(this,t+1,t+6),j(this,t+2,t+5),j(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?W(this,0,e):R.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(r.prototype[a]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,p){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),p===void 0&&(p=this.length),t<0||o>e.length||n<0||p>this.length)throw new RangeError("out of range index");if(n>=p&&t>=o)return 0;if(n>=p)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,p>>>=0,this===e)return 0;for(var i=p-n,d=o-t,v=Math.min(i,d),I=this.slice(n,p),E=e.slice(t,o),U=0;U<v;++U)if(I[U]!==E[U]){i=I[U],d=E[U];break}return i<d?-1:d<i?1:0};function O(e,t,o,n,p){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=p?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(p)return-1;o=e.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:Z(e,t,o,n,p);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):Z(e,[t],o,n,p);throw new TypeError("val must be string, number or Buffer")}function Z(e,t,o,n,p){var i=1,d=e.length,v=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,d/=2,v/=2,o/=2}function I(Q,ee){return i===1?Q[ee]:Q.readUInt16BE(ee*i)}var E;if(p){var U=-1;for(E=o;E<d;E++)if(I(e,E)===I(t,U===-1?0:E-U)){if(U===-1&&(U=E),E-U+1===v)return U*i}else U!==-1&&(E-=E-U),U=-1}else for(o+v>d&&(o=d-v),E=o;E>=0;E--){for(var C=!0,q=0;q<v;q++)if(I(e,E+q)!==I(t,q)){C=!1;break}if(C)return E}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return O(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return O(this,e,t,o,!1)};function re(e,t,o,n){o=Number(o)||0;var p=e.length-o;n?(n=Number(n),n>p&&(n=p)):n=p;var i=t.length;n>i/2&&(n=i/2);for(var d=0;d<n;++d){var v=parseInt(t.substr(d*2,2),16);if(V(v))return d;e[o+d]=v}return d}function ce(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function pe(e,t,o,n){return D(ge(t),e,o,n)}function le(e,t,o,n){return D(K(t),e,o,n)}function ie(e,t,o,n){return D(ye(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((o===void 0||o>p)&&(o=p),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return re(this,e,t,o);case"utf8":case"utf-8":return ce(this,e,t,o);case"ascii":case"latin1":case"binary":return pe(this,e,t,o);case"base64":return le(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,e,t,o);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _e(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function W(e,t,o){o=Math.min(e.length,o);for(var n=[],p=t;p<o;){var i=e[p],d=null,v=i>239?4:i>223?3:i>191?2:1;if(p+v<=o){var I,E,U,C;switch(v){case 1:i<128&&(d=i);break;case 2:I=e[p+1],(I&192)===128&&(C=(i&31)<<6|I&63,C>127&&(d=C));break;case 3:I=e[p+1],E=e[p+2],(I&192)===128&&(E&192)===128&&(C=(i&15)<<12|(I&63)<<6|E&63,C>2047&&(C<55296||C>57343)&&(d=C));break;case 4:I=e[p+1],E=e[p+2],U=e[p+3],(I&192)===128&&(E&192)===128&&(U&192)===128&&(C=(i&15)<<18|(I&63)<<12|(E&63)<<6|U&63,C>65535&&C<1114112&&(d=C))}}d===null?(d=65533,v=1):d>65535&&(d-=65536,n.push(d>>>10&1023|55296),d=56320|d&1023),n.push(d),p+=v}return ae(n)}var G=4096;function ae(e){var t=e.length;if(t<=G)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=G));return o}function ue(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]&127);return n}function de(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]);return n}function me(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var p="",i=t;i<o;++i)p+=ke[e[i]];return p}function se(e,t,o){for(var n=e.slice(t,o),p="",i=0;i<n.length-1;i+=2)p+=String.fromCharCode(n[i]+n[i+1]*256);return p}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function T(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e+--t],p=1;t>0&&(p*=256);)n+=this[e+--t]*p;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return p*=128,n>=p&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=t,p=1,i=this[e+--n];n>0&&(p*=256);)i+=this[e+--n]*p;return p*=128,i>=p&&(i-=Math.pow(2,8*t)),i},r.prototype.readInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!1,52,8)};function M(e,t,o,n,p,i){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>p||t<i)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=1,d=0;for(this[t]=e&255;++d<o&&(i*=256);)this[t+d]=e/i&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=o-1,d=1;for(this[t+i]=e&255;--i>=0&&(d*=256);)this[t+i]=e/d&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=0,d=1,v=0;for(this[t]=e&255;++i<o&&(d*=256);)e<0&&v===0&&this[t+i-1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=o-1,d=1,v=0;for(this[t+i]=e&255;--i>=0&&(d*=256);)e<0&&v===0&&this[t+i+1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,p,i){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function H(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),c.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return H(this,e,t,!1,o)};function J(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),c.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return J(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return J(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var p=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),p},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var p=e.charCodeAt(0);(n==="utf8"&&p<128||n==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<o;++i)this[i]=e;else{var d=r.isBuffer(e)?e:r.from(e,n),v=d.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<o-t;++i)this[i+t]=d[i%v]}return this};var fe=/[^+/0-9A-Za-z-_]/g;function he(e){if(e=e.split("=")[0],e=e.trim().replace(fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,p=null,i=[],d=0;d<n;++d){if(o=e.charCodeAt(d),o>55295&&o<57344){if(!p){if(o>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(d+1===n){(t-=3)>-1&&i.push(239,191,189);continue}p=o;continue}if(o<56320){(t-=3)>-1&&i.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(t-=3)>-1&&i.push(239,191,189);if(p=null,o<128){if((t-=1)<0)break;i.push(o)}else if(o<2048){if((t-=2)<0)break;i.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;i.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;i.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return i}function ge(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function ye(e,t){for(var o,n,p,i=[],d=0;d<e.length&&!((t-=2)<0);++d)o=e.charCodeAt(d),n=o>>8,p=o%256,i.push(p),i.push(n);return i}function K(e){return l.toByteArray(he(e))}function D(e,t,o,n){for(var p=0;p<n&&!(p+o>=t.length||p>=e.length);++p)t[p+o]=e[p];return p}function z(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ke=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,p=0;p<16;++p)t[n+p]=e[o]+e[p];return t}()}),pl=bt((_,l)=>{Je();var c=l.exports={},a,u;function h(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=h}catch(f){a=h}try{typeof clearTimeout=="function"?u=clearTimeout:u=s}catch(f){u=s}})();function r(f){if(a===setTimeout)return setTimeout(f,0);if((a===h||!a)&&setTimeout)return a=setTimeout,setTimeout(f,0);try{return a(f,0)}catch(b){try{return a.call(null,f,0)}catch(w){return a.call(this,f,0)}}}function A(f){if(u===clearTimeout)return clearTimeout(f);if((u===s||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(f);try{return u(f)}catch(b){try{return u.call(null,f)}catch(w){return u.call(this,f)}}}var S=[],B=!1,k,x=-1;function L(){!B||!k||(B=!1,k.length?S=k.concat(S):x=-1,S.length&&m())}function m(){if(!B){var f=r(L);B=!0;for(var b=S.length;b;){for(k=S,S=[];++x<b;)k&&k[x].run();x=-1,b=S.length}k=null,B=!1,A(f)}}c.nextTick=function(f){var b=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)b[w-1]=arguments[w];S.push(new g(f,b)),S.length===1&&!B&&r(m)};function g(f,b){this.fun=f,this.array=b}g.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function y(){}c.on=y,c.addListener=y,c.once=y,c.off=y,c.removeListener=y,c.removeAllListeners=y,c.emit=y,c.prependListener=y,c.prependOnceListener=y,c.listeners=function(f){return[]},c.binding=function(f){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(f){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}}),ll,il,_l,Je=el(()=>{ll=vt(cl()),il=vt(pl()),_l=function(_){function l(){var a=this||self;return delete _.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return l();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:l});var c=__magic__;return c}(Object)}),ln={};tl(ln,{IndicatorsContainer:()=>sl});_n.exports=ol(ln);Je();var al=vt(require("react")),ul=vt(require("classnames")),dl=require("react-select");Je();var ml=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ml));var rn={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},sl=_=>al.default.createElement(dl.components.IndicatorsContainer,Qp(Kp({},_),{className:(0,ul.default)(rn.indicator,{[rn.expanded]:_.selectProps.menuIsOpen})}));});var En=xe((Qi,xn)=>{"use strict";X();var fl=Object.create,lt=Object.defineProperty,hl=Object.defineProperties,gl=Object.getOwnPropertyDescriptor,yl=Object.getOwnPropertyDescriptors,kl=Object.getOwnPropertyNames,un=Object.getOwnPropertySymbols,Sl=Object.getPrototypeOf,sn=Object.prototype.hasOwnProperty,wl=Object.prototype.propertyIsEnumerable,dn=(_,l,c)=>l in _?lt(_,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):_[l]=c,fn=(_,l)=>{for(var c in l||(l={}))sn.call(l,c)&&dn(_,c,l[c]);if(un)for(var c of un(l))wl.call(l,c)&&dn(_,c,l[c]);return _},vl=(_,l)=>hl(_,yl(l)),hn=(_,l)=>()=>(_&&(l=_(_=0)),l),Et=(_,l)=>()=>(l||_((l={exports:{}}).exports,l),l.exports),gn=(_,l)=>{for(var c in l)lt(_,c,{get:l[c],enumerable:!0})},yn=(_,l,c,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of kl(l))!sn.call(_,u)&&u!==c&&lt(_,u,{get:()=>l[u],enumerable:!(a=gl(l,u))||a.enumerable});return _},pt=(_,l,c)=>(c=_!=null?fl(Sl(_)):{},yn(l||!_||!_.__esModule?lt(c,"default",{value:_,enumerable:!0}):c,_)),kn=_=>yn(lt({},"__esModule",{value:!0}),_),bl=Et(_=>{"use strict";qe(),_.byteLength=A,_.toByteArray=B,_.fromByteArray=L;var l=[],c=[],a=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(h=0,s=u.length;h<s;++h)l[h]=u[h],c[u.charCodeAt(h)]=h;var h,s;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63;function r(m){var g=m.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=m.indexOf("=");y===-1&&(y=g);var f=y===g?0:4-y%4;return[y,f]}function A(m){var g=r(m),y=g[0],f=g[1];return(y+f)*3/4-f}function S(m,g,y){return(g+y)*3/4-y}function B(m){var g,y=r(m),f=y[0],b=y[1],w=new a(S(m,f,b)),R=0,j=b>0?f-4:f,O;for(O=0;O<j;O+=4)g=c[m.charCodeAt(O)]<<18|c[m.charCodeAt(O+1)]<<12|c[m.charCodeAt(O+2)]<<6|c[m.charCodeAt(O+3)],w[R++]=g>>16&255,w[R++]=g>>8&255,w[R++]=g&255;return b===2&&(g=c[m.charCodeAt(O)]<<2|c[m.charCodeAt(O+1)]>>4,w[R++]=g&255),b===1&&(g=c[m.charCodeAt(O)]<<10|c[m.charCodeAt(O+1)]<<4|c[m.charCodeAt(O+2)]>>2,w[R++]=g>>8&255,w[R++]=g&255),w}function k(m){return l[m>>18&63]+l[m>>12&63]+l[m>>6&63]+l[m&63]}function x(m,g,y){for(var f,b=[],w=g;w<y;w+=3)f=(m[w]<<16&16711680)+(m[w+1]<<8&65280)+(m[w+2]&255),b.push(k(f));return b.join("")}function L(m){for(var g,y=m.length,f=y%3,b=[],w=16383,R=0,j=y-f;R<j;R+=w)b.push(x(m,R,R+w>j?j:R+w));return f===1?(g=m[y-1],b.push(l[g>>2]+l[g<<4&63]+"==")):f===2&&(g=(m[y-2]<<8)+m[y-1],b.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),b.join("")}}),xl=Et(_=>{qe(),_.read=function(l,c,a,u,h){var s,r,A=h*8-u-1,S=(1<<A)-1,B=S>>1,k=-7,x=a?h-1:0,L=a?-1:1,m=l[c+x];for(x+=L,s=m&(1<<-k)-1,m>>=-k,k+=A;k>0;s=s*256+l[c+x],x+=L,k-=8);for(r=s&(1<<-k)-1,s>>=-k,k+=u;k>0;r=r*256+l[c+x],x+=L,k-=8);if(s===0)s=1-B;else{if(s===S)return r?NaN:(m?-1:1)*(1/0);r=r+Math.pow(2,u),s=s-B}return(m?-1:1)*r*Math.pow(2,s-u)},_.write=function(l,c,a,u,h,s){var r,A,S,B=s*8-h-1,k=(1<<B)-1,x=k>>1,L=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=u?0:s-1,g=u?1:-1,y=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(A=isNaN(c)?1:0,r=k):(r=Math.floor(Math.log(c)/Math.LN2),c*(S=Math.pow(2,-r))<1&&(r--,S*=2),r+x>=1?c+=L/S:c+=L*Math.pow(2,1-x),c*S>=2&&(r++,S/=2),r+x>=k?(A=0,r=k):r+x>=1?(A=(c*S-1)*Math.pow(2,h),r=r+x):(A=c*Math.pow(2,x-1)*Math.pow(2,h),r=0));h>=8;l[a+m]=A&255,m+=g,A/=256,h-=8);for(r=r<<h|A,B+=h;B>0;l[a+m]=r&255,m+=g,r/=256,B-=8);l[a+m-g]|=y*128}}),El=Et(_=>{"use strict";qe();var l=bl(),c=xl(),a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=b,_.INSPECT_MAX_BYTES=50;var u=2147483647;_.kMaxLength=u,r.TYPED_ARRAY_SUPPORT=h(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function s(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return A(e,t,o)}r.poolSize=8192;function A(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var p=y(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return A(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function S(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return S(e),e<=0?s(e):t!==void 0?typeof o=="string"?s(e).fill(t,o):s(e).fill(t):s(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return S(e),s(e<0?0:f(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=w(e,t)|0,n=s(o),p=n.write(e,t);return p!==o&&(n=n.slice(0,p)),n}function L(e){for(var t=e.length<0?0:f(e.length)|0,o=s(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function m(e){if(z(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return L(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function y(e){if(r.isBuffer(e)){var t=f(e.length)|0,o=s(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?s(0):L(e);if(e.type==="Buffer"&&Array.isArray(e.data))return L(e.data)}function f(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function b(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,p=0,i=Math.min(o,n);p<i;++p)if(e[p]!==t[p]){o=e[p],n=t[p];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),p=0;for(o=0;o<e.length;++o){var i=e[o];if(z(i,Uint8Array))p+i.length>n.length?r.from(i).copy(n,p):Uint8Array.prototype.set.call(n,i,p);else if(r.isBuffer(i))i.copy(n,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=i.length}return n};function w(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var p=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return K(e).length;default:if(p)return n?-1:Y(e).length;t=(""+t).toLowerCase(),p=!0}}r.byteLength=w;function R(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return me(this,t,o);case"utf8":case"utf-8":return W(this,t,o);case"ascii":return ue(this,t,o);case"latin1":case"binary":return de(this,t,o);case"base64":return _e(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return se(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function j(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)j(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)j(this,t,t+3),j(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)j(this,t,t+7),j(this,t+1,t+6),j(this,t+2,t+5),j(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?W(this,0,e):R.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(r.prototype[a]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,p){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),p===void 0&&(p=this.length),t<0||o>e.length||n<0||p>this.length)throw new RangeError("out of range index");if(n>=p&&t>=o)return 0;if(n>=p)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,p>>>=0,this===e)return 0;for(var i=p-n,d=o-t,v=Math.min(i,d),I=this.slice(n,p),E=e.slice(t,o),U=0;U<v;++U)if(I[U]!==E[U]){i=I[U],d=E[U];break}return i<d?-1:d<i?1:0};function O(e,t,o,n,p){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=p?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(p)return-1;o=e.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:Z(e,t,o,n,p);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):Z(e,[t],o,n,p);throw new TypeError("val must be string, number or Buffer")}function Z(e,t,o,n,p){var i=1,d=e.length,v=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,d/=2,v/=2,o/=2}function I(Q,ee){return i===1?Q[ee]:Q.readUInt16BE(ee*i)}var E;if(p){var U=-1;for(E=o;E<d;E++)if(I(e,E)===I(t,U===-1?0:E-U)){if(U===-1&&(U=E),E-U+1===v)return U*i}else U!==-1&&(E-=E-U),U=-1}else for(o+v>d&&(o=d-v),E=o;E>=0;E--){for(var C=!0,q=0;q<v;q++)if(I(e,E+q)!==I(t,q)){C=!1;break}if(C)return E}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return O(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return O(this,e,t,o,!1)};function re(e,t,o,n){o=Number(o)||0;var p=e.length-o;n?(n=Number(n),n>p&&(n=p)):n=p;var i=t.length;n>i/2&&(n=i/2);for(var d=0;d<n;++d){var v=parseInt(t.substr(d*2,2),16);if(V(v))return d;e[o+d]=v}return d}function ce(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function pe(e,t,o,n){return D(ge(t),e,o,n)}function le(e,t,o,n){return D(K(t),e,o,n)}function ie(e,t,o,n){return D(ye(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((o===void 0||o>p)&&(o=p),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return re(this,e,t,o);case"utf8":case"utf-8":return ce(this,e,t,o);case"ascii":case"latin1":case"binary":return pe(this,e,t,o);case"base64":return le(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,e,t,o);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _e(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function W(e,t,o){o=Math.min(e.length,o);for(var n=[],p=t;p<o;){var i=e[p],d=null,v=i>239?4:i>223?3:i>191?2:1;if(p+v<=o){var I,E,U,C;switch(v){case 1:i<128&&(d=i);break;case 2:I=e[p+1],(I&192)===128&&(C=(i&31)<<6|I&63,C>127&&(d=C));break;case 3:I=e[p+1],E=e[p+2],(I&192)===128&&(E&192)===128&&(C=(i&15)<<12|(I&63)<<6|E&63,C>2047&&(C<55296||C>57343)&&(d=C));break;case 4:I=e[p+1],E=e[p+2],U=e[p+3],(I&192)===128&&(E&192)===128&&(U&192)===128&&(C=(i&15)<<18|(I&63)<<12|(E&63)<<6|U&63,C>65535&&C<1114112&&(d=C))}}d===null?(d=65533,v=1):d>65535&&(d-=65536,n.push(d>>>10&1023|55296),d=56320|d&1023),n.push(d),p+=v}return ae(n)}var G=4096;function ae(e){var t=e.length;if(t<=G)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=G));return o}function ue(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]&127);return n}function de(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]);return n}function me(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var p="",i=t;i<o;++i)p+=ke[e[i]];return p}function se(e,t,o){for(var n=e.slice(t,o),p="",i=0;i<n.length-1;i+=2)p+=String.fromCharCode(n[i]+n[i+1]*256);return p}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function T(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e+--t],p=1;t>0&&(p*=256);)n+=this[e+--t]*p;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return p*=128,n>=p&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=t,p=1,i=this[e+--n];n>0&&(p*=256);)i+=this[e+--n]*p;return p*=128,i>=p&&(i-=Math.pow(2,8*t)),i},r.prototype.readInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!1,52,8)};function M(e,t,o,n,p,i){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>p||t<i)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=1,d=0;for(this[t]=e&255;++d<o&&(i*=256);)this[t+d]=e/i&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=o-1,d=1;for(this[t+i]=e&255;--i>=0&&(d*=256);)this[t+i]=e/d&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=0,d=1,v=0;for(this[t]=e&255;++i<o&&(d*=256);)e<0&&v===0&&this[t+i-1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=o-1,d=1,v=0;for(this[t+i]=e&255;--i>=0&&(d*=256);)e<0&&v===0&&this[t+i+1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,p,i){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function H(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),c.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return H(this,e,t,!1,o)};function J(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),c.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return J(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return J(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var p=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),p},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var p=e.charCodeAt(0);(n==="utf8"&&p<128||n==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<o;++i)this[i]=e;else{var d=r.isBuffer(e)?e:r.from(e,n),v=d.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<o-t;++i)this[i+t]=d[i%v]}return this};var fe=/[^+/0-9A-Za-z-_]/g;function he(e){if(e=e.split("=")[0],e=e.trim().replace(fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,p=null,i=[],d=0;d<n;++d){if(o=e.charCodeAt(d),o>55295&&o<57344){if(!p){if(o>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(d+1===n){(t-=3)>-1&&i.push(239,191,189);continue}p=o;continue}if(o<56320){(t-=3)>-1&&i.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(t-=3)>-1&&i.push(239,191,189);if(p=null,o<128){if((t-=1)<0)break;i.push(o)}else if(o<2048){if((t-=2)<0)break;i.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;i.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;i.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return i}function ge(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function ye(e,t){for(var o,n,p,i=[],d=0;d<e.length&&!((t-=2)<0);++d)o=e.charCodeAt(d),n=o>>8,p=o%256,i.push(p),i.push(n);return i}function K(e){return l.toByteArray(he(e))}function D(e,t,o,n){for(var p=0;p<n&&!(p+o>=t.length||p>=e.length);++p)t[p+o]=e[p];return p}function z(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ke=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,p=0;p<16;++p)t[n+p]=e[o]+e[p];return t}()}),Al=Et((_,l)=>{qe();var c=l.exports={},a,u;function h(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=h}catch(f){a=h}try{typeof clearTimeout=="function"?u=clearTimeout:u=s}catch(f){u=s}})();function r(f){if(a===setTimeout)return setTimeout(f,0);if((a===h||!a)&&setTimeout)return a=setTimeout,setTimeout(f,0);try{return a(f,0)}catch(b){try{return a.call(null,f,0)}catch(w){return a.call(this,f,0)}}}function A(f){if(u===clearTimeout)return clearTimeout(f);if((u===s||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(f);try{return u(f)}catch(b){try{return u.call(null,f)}catch(w){return u.call(this,f)}}}var S=[],B=!1,k,x=-1;function L(){!B||!k||(B=!1,k.length?S=k.concat(S):x=-1,S.length&&m())}function m(){if(!B){var f=r(L);B=!0;for(var b=S.length;b;){for(k=S,S=[];++x<b;)k&&k[x].run();x=-1,b=S.length}k=null,B=!1,A(f)}}c.nextTick=function(f){var b=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)b[w-1]=arguments[w];S.push(new g(f,b)),S.length===1&&!B&&r(m)};function g(f,b){this.fun=f,this.array=b}g.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function y(){}c.on=y,c.addListener=y,c.once=y,c.off=y,c.removeListener=y,c.removeAllListeners=y,c.emit=y,c.prependListener=y,c.prependOnceListener=y,c.listeners=function(f){return[]},c.binding=function(f){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(f){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}}),Bl,Ul,Tl,qe=hn(()=>{Bl=pt(El()),Ul=pt(Al()),Tl=function(_){function l(){var a=this||self;return delete _.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return l();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:l});var c=__magic__;return c}(Object)}),Sn={};gn(Sn,{default:()=>wn});var xt,mn,wn,Il=hn(()=>{"use strict";qe(),xt=pt(require("react")),mn=_=>xt.createElement("svg",fn({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},_),xt.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),xt.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),wn=mn}),vn={};gn(vn,{ValueComponent:()=>bn,getValueContainer:()=>Fl});xn.exports=kn(vn);qe();var Ae=pt(require("react")),Ll=require("@fortawesome/free-solid-svg-icons"),Ol=require("@fortawesome/react-fontawesome"),Cl=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Rl=pt(require("classnames")),Ml=require("react-select");qe();var jl=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jl));var Re={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Pl=(Il(),kn(Sn)).default,bn=({RewaIcon:_,tokenId:l,icon:c})=>{let{isRewa:a}=(0,Cl.getIdentifierType)(l);return a?Ae.default.createElement("span",{className:Re.asset},_?Ae.default.createElement(_,{className:Re.diamond}):Ae.default.createElement(Pl,{className:Re.diamond})):c?Ae.default.createElement("img",{src:c,className:Re.asset}):Ae.default.createElement(Ol.FontAwesomeIcon,{icon:Ll.faDiamond,className:Re.asset})},Nl=({children:_})=>Ae.default.createElement("div",{className:Re.wrapper},_),Fl=(_,l,c)=>a=>{var u,h;let{selectProps:s,isDisabled:r,children:A}=a,S=s.value,B=(h=(u=S==null?void 0:S.assets)==null?void 0:u.svgUrl)!=null?h:null,k=(0,Ae.useMemo)(()=>{let x=String(S==null?void 0:S.token.usdPrice);return x!=null&&x.includes("$")?S==null?void 0:S.token.usdPrice:`$${S==null?void 0:S.token.usdPrice}`},[S==null?void 0:S.token.usdPrice]);return Ae.default.createElement(Ml.components.ValueContainer,vl(fn({},a),{className:Re.container}),Ae.default.createElement("div",{className:(0,Rl.default)(Re.icon,l)},Ae.default.createElement(bn,{RewaIcon:c,rewaLabel:_,icon:B,isDisabled:r,tokenId:S==null?void 0:S.value})),Ae.default.createElement("div",{className:Re.payload},Ae.default.createElement(Nl,null,A,(S==null?void 0:S.token.usdPrice)&&Ae.default.createElement("small",{className:Re.price},k))))};});var zn=xe((e_,Fn)=>{"use strict";X();var zl=Object.create,it=Object.defineProperty,Dl=Object.defineProperties,ql=Object.getOwnPropertyDescriptor,Yl=Object.getOwnPropertyDescriptors,Vl=Object.getOwnPropertyNames,An=Object.getOwnPropertySymbols,Xl=Object.getPrototypeOf,Tn=Object.prototype.hasOwnProperty,Zl=Object.prototype.propertyIsEnumerable,Bn=(_,l,c)=>l in _?it(_,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):_[l]=c,In=(_,l)=>{for(var c in l||(l={}))Tn.call(l,c)&&Bn(_,c,l[c]);if(An)for(var c of An(l))Zl.call(l,c)&&Bn(_,c,l[c]);return _},Wl=(_,l)=>Dl(_,Yl(l)),Ln=(_,l)=>()=>(_&&(l=_(_=0)),l),Ut=(_,l)=>()=>(l||_((l={exports:{}}).exports,l),l.exports),On=(_,l)=>{for(var c in l)it(_,c,{get:l[c],enumerable:!0})},Cn=(_,l,c,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of Vl(l))!Tn.call(_,u)&&u!==c&&it(_,u,{get:()=>l[u],enumerable:!(a=ql(l,u))||a.enumerable});return _},Ke=(_,l,c)=>(c=_!=null?zl(Xl(_)):{},Cn(l||!_||!_.__esModule?it(c,"default",{value:_,enumerable:!0}):c,_)),Rn=_=>Cn(it({},"__esModule",{value:!0}),_),Gl=Ut(_=>{"use strict";Ue(),_.byteLength=A,_.toByteArray=B,_.fromByteArray=L;var l=[],c=[],a=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(h=0,s=u.length;h<s;++h)l[h]=u[h],c[u.charCodeAt(h)]=h;var h,s;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63;function r(m){var g=m.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=m.indexOf("=");y===-1&&(y=g);var f=y===g?0:4-y%4;return[y,f]}function A(m){var g=r(m),y=g[0],f=g[1];return(y+f)*3/4-f}function S(m,g,y){return(g+y)*3/4-y}function B(m){var g,y=r(m),f=y[0],b=y[1],w=new a(S(m,f,b)),R=0,j=b>0?f-4:f,O;for(O=0;O<j;O+=4)g=c[m.charCodeAt(O)]<<18|c[m.charCodeAt(O+1)]<<12|c[m.charCodeAt(O+2)]<<6|c[m.charCodeAt(O+3)],w[R++]=g>>16&255,w[R++]=g>>8&255,w[R++]=g&255;return b===2&&(g=c[m.charCodeAt(O)]<<2|c[m.charCodeAt(O+1)]>>4,w[R++]=g&255),b===1&&(g=c[m.charCodeAt(O)]<<10|c[m.charCodeAt(O+1)]<<4|c[m.charCodeAt(O+2)]>>2,w[R++]=g>>8&255,w[R++]=g&255),w}function k(m){return l[m>>18&63]+l[m>>12&63]+l[m>>6&63]+l[m&63]}function x(m,g,y){for(var f,b=[],w=g;w<y;w+=3)f=(m[w]<<16&16711680)+(m[w+1]<<8&65280)+(m[w+2]&255),b.push(k(f));return b.join("")}function L(m){for(var g,y=m.length,f=y%3,b=[],w=16383,R=0,j=y-f;R<j;R+=w)b.push(x(m,R,R+w>j?j:R+w));return f===1?(g=m[y-1],b.push(l[g>>2]+l[g<<4&63]+"==")):f===2&&(g=(m[y-2]<<8)+m[y-1],b.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),b.join("")}}),$l=Ut(_=>{Ue(),_.read=function(l,c,a,u,h){var s,r,A=h*8-u-1,S=(1<<A)-1,B=S>>1,k=-7,x=a?h-1:0,L=a?-1:1,m=l[c+x];for(x+=L,s=m&(1<<-k)-1,m>>=-k,k+=A;k>0;s=s*256+l[c+x],x+=L,k-=8);for(r=s&(1<<-k)-1,s>>=-k,k+=u;k>0;r=r*256+l[c+x],x+=L,k-=8);if(s===0)s=1-B;else{if(s===S)return r?NaN:(m?-1:1)*(1/0);r=r+Math.pow(2,u),s=s-B}return(m?-1:1)*r*Math.pow(2,s-u)},_.write=function(l,c,a,u,h,s){var r,A,S,B=s*8-h-1,k=(1<<B)-1,x=k>>1,L=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=u?0:s-1,g=u?1:-1,y=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(A=isNaN(c)?1:0,r=k):(r=Math.floor(Math.log(c)/Math.LN2),c*(S=Math.pow(2,-r))<1&&(r--,S*=2),r+x>=1?c+=L/S:c+=L*Math.pow(2,1-x),c*S>=2&&(r++,S/=2),r+x>=k?(A=0,r=k):r+x>=1?(A=(c*S-1)*Math.pow(2,h),r=r+x):(A=c*Math.pow(2,x-1)*Math.pow(2,h),r=0));h>=8;l[a+m]=A&255,m+=g,A/=256,h-=8);for(r=r<<h|A,B+=h;B>0;l[a+m]=r&255,m+=g,r/=256,B-=8);l[a+m-g]|=y*128}}),Hl=Ut(_=>{"use strict";Ue();var l=Gl(),c=$l(),a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=b,_.INSPECT_MAX_BYTES=50;var u=2147483647;_.kMaxLength=u,r.TYPED_ARRAY_SUPPORT=h(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function s(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return A(e,t,o)}r.poolSize=8192;function A(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var p=y(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return A(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function S(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return S(e),e<=0?s(e):t!==void 0?typeof o=="string"?s(e).fill(t,o):s(e).fill(t):s(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return S(e),s(e<0?0:f(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=w(e,t)|0,n=s(o),p=n.write(e,t);return p!==o&&(n=n.slice(0,p)),n}function L(e){for(var t=e.length<0?0:f(e.length)|0,o=s(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function m(e){if(z(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return L(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function y(e){if(r.isBuffer(e)){var t=f(e.length)|0,o=s(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?s(0):L(e);if(e.type==="Buffer"&&Array.isArray(e.data))return L(e.data)}function f(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function b(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,p=0,i=Math.min(o,n);p<i;++p)if(e[p]!==t[p]){o=e[p],n=t[p];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),p=0;for(o=0;o<e.length;++o){var i=e[o];if(z(i,Uint8Array))p+i.length>n.length?r.from(i).copy(n,p):Uint8Array.prototype.set.call(n,i,p);else if(r.isBuffer(i))i.copy(n,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=i.length}return n};function w(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var p=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return K(e).length;default:if(p)return n?-1:Y(e).length;t=(""+t).toLowerCase(),p=!0}}r.byteLength=w;function R(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return me(this,t,o);case"utf8":case"utf-8":return W(this,t,o);case"ascii":return ue(this,t,o);case"latin1":case"binary":return de(this,t,o);case"base64":return _e(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return se(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function j(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)j(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)j(this,t,t+3),j(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)j(this,t,t+7),j(this,t+1,t+6),j(this,t+2,t+5),j(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?W(this,0,e):R.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(r.prototype[a]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,p){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),p===void 0&&(p=this.length),t<0||o>e.length||n<0||p>this.length)throw new RangeError("out of range index");if(n>=p&&t>=o)return 0;if(n>=p)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,p>>>=0,this===e)return 0;for(var i=p-n,d=o-t,v=Math.min(i,d),I=this.slice(n,p),E=e.slice(t,o),U=0;U<v;++U)if(I[U]!==E[U]){i=I[U],d=E[U];break}return i<d?-1:d<i?1:0};function O(e,t,o,n,p){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=p?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(p)return-1;o=e.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:Z(e,t,o,n,p);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):Z(e,[t],o,n,p);throw new TypeError("val must be string, number or Buffer")}function Z(e,t,o,n,p){var i=1,d=e.length,v=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,d/=2,v/=2,o/=2}function I(Q,ee){return i===1?Q[ee]:Q.readUInt16BE(ee*i)}var E;if(p){var U=-1;for(E=o;E<d;E++)if(I(e,E)===I(t,U===-1?0:E-U)){if(U===-1&&(U=E),E-U+1===v)return U*i}else U!==-1&&(E-=E-U),U=-1}else for(o+v>d&&(o=d-v),E=o;E>=0;E--){for(var C=!0,q=0;q<v;q++)if(I(e,E+q)!==I(t,q)){C=!1;break}if(C)return E}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return O(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return O(this,e,t,o,!1)};function re(e,t,o,n){o=Number(o)||0;var p=e.length-o;n?(n=Number(n),n>p&&(n=p)):n=p;var i=t.length;n>i/2&&(n=i/2);for(var d=0;d<n;++d){var v=parseInt(t.substr(d*2,2),16);if(V(v))return d;e[o+d]=v}return d}function ce(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function pe(e,t,o,n){return D(ge(t),e,o,n)}function le(e,t,o,n){return D(K(t),e,o,n)}function ie(e,t,o,n){return D(ye(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((o===void 0||o>p)&&(o=p),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return re(this,e,t,o);case"utf8":case"utf-8":return ce(this,e,t,o);case"ascii":case"latin1":case"binary":return pe(this,e,t,o);case"base64":return le(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,e,t,o);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _e(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function W(e,t,o){o=Math.min(e.length,o);for(var n=[],p=t;p<o;){var i=e[p],d=null,v=i>239?4:i>223?3:i>191?2:1;if(p+v<=o){var I,E,U,C;switch(v){case 1:i<128&&(d=i);break;case 2:I=e[p+1],(I&192)===128&&(C=(i&31)<<6|I&63,C>127&&(d=C));break;case 3:I=e[p+1],E=e[p+2],(I&192)===128&&(E&192)===128&&(C=(i&15)<<12|(I&63)<<6|E&63,C>2047&&(C<55296||C>57343)&&(d=C));break;case 4:I=e[p+1],E=e[p+2],U=e[p+3],(I&192)===128&&(E&192)===128&&(U&192)===128&&(C=(i&15)<<18|(I&63)<<12|(E&63)<<6|U&63,C>65535&&C<1114112&&(d=C))}}d===null?(d=65533,v=1):d>65535&&(d-=65536,n.push(d>>>10&1023|55296),d=56320|d&1023),n.push(d),p+=v}return ae(n)}var G=4096;function ae(e){var t=e.length;if(t<=G)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=G));return o}function ue(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]&127);return n}function de(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]);return n}function me(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var p="",i=t;i<o;++i)p+=ke[e[i]];return p}function se(e,t,o){for(var n=e.slice(t,o),p="",i=0;i<n.length-1;i+=2)p+=String.fromCharCode(n[i]+n[i+1]*256);return p}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function T(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e+--t],p=1;t>0&&(p*=256);)n+=this[e+--t]*p;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return p*=128,n>=p&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=t,p=1,i=this[e+--n];n>0&&(p*=256);)i+=this[e+--n]*p;return p*=128,i>=p&&(i-=Math.pow(2,8*t)),i},r.prototype.readInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!1,52,8)};function M(e,t,o,n,p,i){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>p||t<i)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=1,d=0;for(this[t]=e&255;++d<o&&(i*=256);)this[t+d]=e/i&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=o-1,d=1;for(this[t+i]=e&255;--i>=0&&(d*=256);)this[t+i]=e/d&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=0,d=1,v=0;for(this[t]=e&255;++i<o&&(d*=256);)e<0&&v===0&&this[t+i-1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=o-1,d=1,v=0;for(this[t+i]=e&255;--i>=0&&(d*=256);)e<0&&v===0&&this[t+i+1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,p,i){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function H(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),c.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return H(this,e,t,!1,o)};function J(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),c.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return J(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return J(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var p=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),p},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var p=e.charCodeAt(0);(n==="utf8"&&p<128||n==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<o;++i)this[i]=e;else{var d=r.isBuffer(e)?e:r.from(e,n),v=d.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<o-t;++i)this[i+t]=d[i%v]}return this};var fe=/[^+/0-9A-Za-z-_]/g;function he(e){if(e=e.split("=")[0],e=e.trim().replace(fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,p=null,i=[],d=0;d<n;++d){if(o=e.charCodeAt(d),o>55295&&o<57344){if(!p){if(o>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(d+1===n){(t-=3)>-1&&i.push(239,191,189);continue}p=o;continue}if(o<56320){(t-=3)>-1&&i.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(t-=3)>-1&&i.push(239,191,189);if(p=null,o<128){if((t-=1)<0)break;i.push(o)}else if(o<2048){if((t-=2)<0)break;i.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;i.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;i.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return i}function ge(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function ye(e,t){for(var o,n,p,i=[],d=0;d<e.length&&!((t-=2)<0);++d)o=e.charCodeAt(d),n=o>>8,p=o%256,i.push(p),i.push(n);return i}function K(e){return l.toByteArray(he(e))}function D(e,t,o,n){for(var p=0;p<n&&!(p+o>=t.length||p>=e.length);++p)t[p+o]=e[p];return p}function z(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ke=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,p=0;p<16;++p)t[n+p]=e[o]+e[p];return t}()}),Jl=Ut((_,l)=>{Ue();var c=l.exports={},a,u;function h(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=h}catch(f){a=h}try{typeof clearTimeout=="function"?u=clearTimeout:u=s}catch(f){u=s}})();function r(f){if(a===setTimeout)return setTimeout(f,0);if((a===h||!a)&&setTimeout)return a=setTimeout,setTimeout(f,0);try{return a(f,0)}catch(b){try{return a.call(null,f,0)}catch(w){return a.call(this,f,0)}}}function A(f){if(u===clearTimeout)return clearTimeout(f);if((u===s||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(f);try{return u(f)}catch(b){try{return u.call(null,f)}catch(w){return u.call(this,f)}}}var S=[],B=!1,k,x=-1;function L(){!B||!k||(B=!1,k.length?S=k.concat(S):x=-1,S.length&&m())}function m(){if(!B){var f=r(L);B=!0;for(var b=S.length;b;){for(k=S,S=[];++x<b;)k&&k[x].run();x=-1,b=S.length}k=null,B=!1,A(f)}}c.nextTick=function(f){var b=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)b[w-1]=arguments[w];S.push(new g(f,b)),S.length===1&&!B&&r(m)};function g(f,b){this.fun=f,this.array=b}g.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function y(){}c.on=y,c.addListener=y,c.once=y,c.off=y,c.removeListener=y,c.removeAllListeners=y,c.emit=y,c.prependListener=y,c.prependOnceListener=y,c.listeners=function(f){return[]},c.binding=function(f){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(f){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}}),Kl,Ql,ei,Ue=Ln(()=>{Kl=Ke(Hl()),Ql=Ke(Jl()),ei=function(_){function l(){var a=this||self;return delete _.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return l();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:l});var c=__magic__;return c}(Object)}),Mn={};On(Mn,{default:()=>jn});var At,Un,jn,ti=Ln(()=>{"use strict";Ue(),At=Ke(require("react")),Un=_=>At.createElement("svg",In({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},_),At.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),At.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),jn=Un}),Pn={};On(Pn,{DharitrIIcon:()=>Nn,getOption:()=>hi});Fn.exports=Rn(Pn);Ue();var oe=Ke(require("react")),oi=require("@fortawesome/free-solid-svg-icons"),ni=require("@fortawesome/react-fontawesome"),ri=require("@terradharitri/sdk-dapp/constants"),ci=require("@terradharitri/sdk-dapp/UI/UsdValue"),pi=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),li=Ke(require("classnames")),ii=require("react-select");Ue();Ue();Ue();var Bt=Ke(require("react"));Ue();var _i=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_i));var ai={highlight:"dapp-core-component__styles-modules__highlight"},ui=({highlight:_,text:l=""})=>{let c=l.split(" "),a=_.toLowerCase(),u=new RegExp(`(${a})`,"gi"),h=c.map(s=>s.split(u).filter(r=>r));return Bt.default.createElement("span",{className:ai.highlight},h.map((s,r)=>{let A=`${s}-${r}`;return Bt.default.createElement("span",{key:A},s.map((S,B)=>{let k=S.toLowerCase()===a,x=a&&k,L=`${S}-${B}`;return x?Bt.default.createElement("strong",{key:L},S):Bt.default.createElement("span",{key:L},S)}))}))};Ue();var Ye=require("@terradharitri/sdk-dapp/constants"),di=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),mi=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),si=({amount:_="0",decimals:l=0,digits:c=Ye.DIGITS,addCommas:a=!1,showLastNonZeroDecimal:u=!1})=>{if(_==null||!(0,mi.stringIsInteger)(_))return"0";let h=r=>(0,di.formatAmount)({input:_,digits:r,decimals:l,addCommas:a,showLastNonZeroDecimal:u}),s=h(c);return s=parseFloat(s)>0?s:h(Ye.DIGITS),s=parseFloat(s)>0?s:h(Ye.DIGITS+2),s=parseFloat(s)>0?s:h(Ye.DIGITS+4),s=parseFloat(s)>0?s:h(Ye.DIGITS+6),s=parseFloat(s)>0?s:h(Ye.DIGITS+10),parseFloat(s)>0?s:h(Ye.DIGITS+14)};Ue();var fi=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fi));var Se={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},{default:Nn}=(ti(),Rn(Mn)),hi=({RewaIcon:_,TokenTickerIcon:l,showBalanceUsdValue:c,showTokenPrice:a})=>u=>{var h,s,r,A;let{data:S,isSelected:B,isFocused:k,isDisabled:x,selectProps:L}=u,m=S,{isRewa:g}=(0,pi.getIdentifierType)(m.value),y=m.token.assets?m.token.assets.svgUrl:null,f=si({amount:m.token.balance,decimals:m.token.decimals||ri.DECIMALS,addCommas:!0}),b=(s=(h=m.token)==null?void 0:h.usdPrice)==null?void 0:s.toString(),w=(A=(r=m.token)==null?void 0:r.valueUSD)==null?void 0:A.toString();return oe.default.createElement("div",{"data-testid":`${u.value}-option`},oe.default.createElement(ii.components.Option,Wl(In({},u),{className:(0,li.default)(Se.option,{[Se.selected]:B||k,[Se.disabled]:x})}),oe.default.createElement("div",{className:Se.image},g?oe.default.createElement("span",{className:Se.icon},_?oe.default.createElement(_,null):oe.default.createElement(Nn,null)):y?oe.default.createElement("img",{src:y,className:Se.icon}):oe.default.createElement("span",{className:Se.icon},oe.default.createElement(ni.FontAwesomeIcon,{icon:oi.faDiamond,className:Se.diamond}))),oe.default.createElement("div",{className:Se.info},oe.default.createElement("div",{className:Se.left},oe.default.createElement("div",{className:Se.ticker},oe.default.createElement("span",{className:Se.value},L.inputValue?oe.default.createElement(ui,{text:m.token.ticker,highlight:L.inputValue}):m.token.ticker),l&&oe.default.createElement(l,{token:m.token})),a&&oe.default.createElement("small",{className:Se.price},b)),oe.default.createElement("div",{className:Se.right},oe.default.createElement("span",{className:Se.value},f),c&&w&&oe.default.createElement(ci.UsdValue,{usd:1,decimals:4,amount:w,"data-testid":"token-price-usd-value",className:Se.price,addEqualSign:!1}))),oe.default.createElement("div",{className:Se.children},u.children)))};});var Wn=xe((t_,Zn)=>{"use strict";X();var gi=Object.create,_t=Object.defineProperty,yi=Object.defineProperties,ki=Object.getOwnPropertyDescriptor,Si=Object.getOwnPropertyDescriptors,wi=Object.getOwnPropertyNames,Dn=Object.getOwnPropertySymbols,vi=Object.getPrototypeOf,Yn=Object.prototype.hasOwnProperty,bi=Object.prototype.propertyIsEnumerable,qn=(_,l,c)=>l in _?_t(_,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):_[l]=c,xi=(_,l)=>{for(var c in l||(l={}))Yn.call(l,c)&&qn(_,c,l[c]);if(Dn)for(var c of Dn(l))bi.call(l,c)&&qn(_,c,l[c]);return _},Ei=(_,l)=>yi(_,Si(l)),Ai=(_,l)=>()=>(_&&(l=_(_=0)),l),It=(_,l)=>()=>(l||_((l={exports:{}}).exports,l),l.exports),Bi=(_,l)=>{for(var c in l)_t(_,c,{get:l[c],enumerable:!0})},Vn=(_,l,c,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of wi(l))!Yn.call(_,u)&&u!==c&&_t(_,u,{get:()=>l[u],enumerable:!(a=ki(l,u))||a.enumerable});return _},Tt=(_,l,c)=>(c=_!=null?gi(vi(_)):{},Vn(l||!_||!_.__esModule?_t(c,"default",{value:_,enumerable:!0}):c,_)),Ui=_=>Vn(_t({},"__esModule",{value:!0}),_),Ti=It(_=>{"use strict";Qe(),_.byteLength=A,_.toByteArray=B,_.fromByteArray=L;var l=[],c=[],a=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(h=0,s=u.length;h<s;++h)l[h]=u[h],c[u.charCodeAt(h)]=h;var h,s;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63;function r(m){var g=m.length;if(g%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=m.indexOf("=");y===-1&&(y=g);var f=y===g?0:4-y%4;return[y,f]}function A(m){var g=r(m),y=g[0],f=g[1];return(y+f)*3/4-f}function S(m,g,y){return(g+y)*3/4-y}function B(m){var g,y=r(m),f=y[0],b=y[1],w=new a(S(m,f,b)),R=0,j=b>0?f-4:f,O;for(O=0;O<j;O+=4)g=c[m.charCodeAt(O)]<<18|c[m.charCodeAt(O+1)]<<12|c[m.charCodeAt(O+2)]<<6|c[m.charCodeAt(O+3)],w[R++]=g>>16&255,w[R++]=g>>8&255,w[R++]=g&255;return b===2&&(g=c[m.charCodeAt(O)]<<2|c[m.charCodeAt(O+1)]>>4,w[R++]=g&255),b===1&&(g=c[m.charCodeAt(O)]<<10|c[m.charCodeAt(O+1)]<<4|c[m.charCodeAt(O+2)]>>2,w[R++]=g>>8&255,w[R++]=g&255),w}function k(m){return l[m>>18&63]+l[m>>12&63]+l[m>>6&63]+l[m&63]}function x(m,g,y){for(var f,b=[],w=g;w<y;w+=3)f=(m[w]<<16&16711680)+(m[w+1]<<8&65280)+(m[w+2]&255),b.push(k(f));return b.join("")}function L(m){for(var g,y=m.length,f=y%3,b=[],w=16383,R=0,j=y-f;R<j;R+=w)b.push(x(m,R,R+w>j?j:R+w));return f===1?(g=m[y-1],b.push(l[g>>2]+l[g<<4&63]+"==")):f===2&&(g=(m[y-2]<<8)+m[y-1],b.push(l[g>>10]+l[g>>4&63]+l[g<<2&63]+"=")),b.join("")}}),Ii=It(_=>{Qe(),_.read=function(l,c,a,u,h){var s,r,A=h*8-u-1,S=(1<<A)-1,B=S>>1,k=-7,x=a?h-1:0,L=a?-1:1,m=l[c+x];for(x+=L,s=m&(1<<-k)-1,m>>=-k,k+=A;k>0;s=s*256+l[c+x],x+=L,k-=8);for(r=s&(1<<-k)-1,s>>=-k,k+=u;k>0;r=r*256+l[c+x],x+=L,k-=8);if(s===0)s=1-B;else{if(s===S)return r?NaN:(m?-1:1)*(1/0);r=r+Math.pow(2,u),s=s-B}return(m?-1:1)*r*Math.pow(2,s-u)},_.write=function(l,c,a,u,h,s){var r,A,S,B=s*8-h-1,k=(1<<B)-1,x=k>>1,L=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=u?0:s-1,g=u?1:-1,y=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(A=isNaN(c)?1:0,r=k):(r=Math.floor(Math.log(c)/Math.LN2),c*(S=Math.pow(2,-r))<1&&(r--,S*=2),r+x>=1?c+=L/S:c+=L*Math.pow(2,1-x),c*S>=2&&(r++,S/=2),r+x>=k?(A=0,r=k):r+x>=1?(A=(c*S-1)*Math.pow(2,h),r=r+x):(A=c*Math.pow(2,x-1)*Math.pow(2,h),r=0));h>=8;l[a+m]=A&255,m+=g,A/=256,h-=8);for(r=r<<h|A,B+=h;B>0;l[a+m]=r&255,m+=g,r/=256,B-=8);l[a+m-g]|=y*128}}),Li=It(_=>{"use strict";Qe();var l=Ti(),c=Ii(),a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=r,_.SlowBuffer=b,_.INSPECT_MAX_BYTES=50;var u=2147483647;_.kMaxLength=u,r.TYPED_ARRAY_SUPPORT=h(),!r.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(o){return!1}}Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}});function s(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,r.prototype),t}function r(e,t,o){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return A(e,t,o)}r.poolSize=8192;function A(e,t,o){if(typeof e=="string")return x(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return g(e,t,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return r.from(n,t,o);var p=y(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return r.from(e[Symbol.toPrimitive]("string"),t,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}r.from=function(e,t,o){return A(e,t,o)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array);function S(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function B(e,t,o){return S(e),e<=0?s(e):t!==void 0?typeof o=="string"?s(e).fill(t,o):s(e).fill(t):s(e)}r.alloc=function(e,t,o){return B(e,t,o)};function k(e){return S(e),s(e<0?0:f(e)|0)}r.allocUnsafe=function(e){return k(e)},r.allocUnsafeSlow=function(e){return k(e)};function x(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!r.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var o=w(e,t)|0,n=s(o),p=n.write(e,t);return p!==o&&(n=n.slice(0,p)),n}function L(e){for(var t=e.length<0?0:f(e.length)|0,o=s(t),n=0;n<t;n+=1)o[n]=e[n]&255;return o}function m(e){if(z(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return L(e)}function g(e,t,o){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&o===void 0?n=new Uint8Array(e):o===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,o),Object.setPrototypeOf(n,r.prototype),n}function y(e){if(r.isBuffer(e)){var t=f(e.length)|0,o=s(t);return o.length===0||e.copy(o,0,0,t),o}if(e.length!==void 0)return typeof e.length!="number"||V(e.length)?s(0):L(e);if(e.type==="Buffer"&&Array.isArray(e.data))return L(e.data)}function f(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function b(e){return+e!=e&&(e=0),r.alloc(+e)}r.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==r.prototype},r.compare=function(e,t){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var o=e.length,n=t.length,p=0,i=Math.min(o,n);p<i;++p)if(e[p]!==t[p]){o=e[p],n=t[p];break}return o<n?-1:n<o?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return r.alloc(0);var o;if(t===void 0)for(t=0,o=0;o<e.length;++o)t+=e[o].length;var n=r.allocUnsafe(t),p=0;for(o=0;o<e.length;++o){var i=e[o];if(z(i,Uint8Array))p+i.length>n.length?r.from(i).copy(n,p):Uint8Array.prototype.set.call(n,i,p);else if(r.isBuffer(i))i.copy(n,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=i.length}return n};function w(e,t){if(r.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var p=!1;;)switch(t){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return K(e).length;default:if(p)return n?-1:Y(e).length;t=(""+t).toLowerCase(),p=!0}}r.byteLength=w;function R(e,t,o){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,t>>>=0,o<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return me(this,t,o);case"utf8":case"utf-8":return W(this,t,o);case"ascii":return ue(this,t,o);case"latin1":case"binary":return de(this,t,o);case"base64":return _e(this,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return se(this,t,o);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}r.prototype._isBuffer=!0;function j(e,t,o){var n=e[t];e[t]=e[o],e[o]=n}r.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)j(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)j(this,t,t+3),j(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)j(this,t,t+7),j(this,t+1,t+6),j(this,t+2,t+5),j(this,t+3,t+4);return this},r.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?W(this,0,e):R.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:r.compare(this,e)===0},r.prototype.inspect=function(){var e="",t=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(r.prototype[a]=r.prototype.inspect),r.prototype.compare=function(e,t,o,n,p){if(z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),o===void 0&&(o=e?e.length:0),n===void 0&&(n=0),p===void 0&&(p=this.length),t<0||o>e.length||n<0||p>this.length)throw new RangeError("out of range index");if(n>=p&&t>=o)return 0;if(n>=p)return-1;if(t>=o)return 1;if(t>>>=0,o>>>=0,n>>>=0,p>>>=0,this===e)return 0;for(var i=p-n,d=o-t,v=Math.min(i,d),I=this.slice(n,p),E=e.slice(t,o),U=0;U<v;++U)if(I[U]!==E[U]){i=I[U],d=E[U];break}return i<d?-1:d<i?1:0};function O(e,t,o,n,p){if(e.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,V(o)&&(o=p?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(p)return-1;o=e.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof t=="string"&&(t=r.from(t,n)),r.isBuffer(t))return t.length===0?-1:Z(e,t,o,n,p);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,t,o):Uint8Array.prototype.lastIndexOf.call(e,t,o):Z(e,[t],o,n,p);throw new TypeError("val must be string, number or Buffer")}function Z(e,t,o,n,p){var i=1,d=e.length,v=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,d/=2,v/=2,o/=2}function I(Q,ee){return i===1?Q[ee]:Q.readUInt16BE(ee*i)}var E;if(p){var U=-1;for(E=o;E<d;E++)if(I(e,E)===I(t,U===-1?0:E-U)){if(U===-1&&(U=E),E-U+1===v)return U*i}else U!==-1&&(E-=E-U),U=-1}else for(o+v>d&&(o=d-v),E=o;E>=0;E--){for(var C=!0,q=0;q<v;q++)if(I(e,E+q)!==I(t,q)){C=!1;break}if(C)return E}return-1}r.prototype.includes=function(e,t,o){return this.indexOf(e,t,o)!==-1},r.prototype.indexOf=function(e,t,o){return O(this,e,t,o,!0)},r.prototype.lastIndexOf=function(e,t,o){return O(this,e,t,o,!1)};function re(e,t,o,n){o=Number(o)||0;var p=e.length-o;n?(n=Number(n),n>p&&(n=p)):n=p;var i=t.length;n>i/2&&(n=i/2);for(var d=0;d<n;++d){var v=parseInt(t.substr(d*2,2),16);if(V(v))return d;e[o+d]=v}return d}function ce(e,t,o,n){return D(Y(t,e.length-o),e,o,n)}function pe(e,t,o,n){return D(ge(t),e,o,n)}function le(e,t,o,n){return D(K(t),e,o,n)}function ie(e,t,o,n){return D(ye(t,e.length-o),e,o,n)}r.prototype.write=function(e,t,o,n){if(t===void 0)n="utf8",o=this.length,t=0;else if(o===void 0&&typeof t=="string")n=t,o=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((o===void 0||o>p)&&(o=p),e.length>0&&(o<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return re(this,e,t,o);case"utf8":case"utf-8":return ce(this,e,t,o);case"ascii":case"latin1":case"binary":return pe(this,e,t,o);case"base64":return le(this,e,t,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,e,t,o);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _e(e,t,o){return t===0&&o===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,o))}function W(e,t,o){o=Math.min(e.length,o);for(var n=[],p=t;p<o;){var i=e[p],d=null,v=i>239?4:i>223?3:i>191?2:1;if(p+v<=o){var I,E,U,C;switch(v){case 1:i<128&&(d=i);break;case 2:I=e[p+1],(I&192)===128&&(C=(i&31)<<6|I&63,C>127&&(d=C));break;case 3:I=e[p+1],E=e[p+2],(I&192)===128&&(E&192)===128&&(C=(i&15)<<12|(I&63)<<6|E&63,C>2047&&(C<55296||C>57343)&&(d=C));break;case 4:I=e[p+1],E=e[p+2],U=e[p+3],(I&192)===128&&(E&192)===128&&(U&192)===128&&(C=(i&15)<<18|(I&63)<<12|(E&63)<<6|U&63,C>65535&&C<1114112&&(d=C))}}d===null?(d=65533,v=1):d>65535&&(d-=65536,n.push(d>>>10&1023|55296),d=56320|d&1023),n.push(d),p+=v}return ae(n)}var G=4096;function ae(e){var t=e.length;if(t<=G)return String.fromCharCode.apply(String,e);for(var o="",n=0;n<t;)o+=String.fromCharCode.apply(String,e.slice(n,n+=G));return o}function ue(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]&127);return n}function de(e,t,o){var n="";o=Math.min(e.length,o);for(var p=t;p<o;++p)n+=String.fromCharCode(e[p]);return n}function me(e,t,o){var n=e.length;(!t||t<0)&&(t=0),(!o||o<0||o>n)&&(o=n);for(var p="",i=t;i<o;++i)p+=ke[e[i]];return p}function se(e,t,o){for(var n=e.slice(t,o),p="",i=0;i<n.length-1;i+=2)p+=String.fromCharCode(n[i]+n[i+1]*256);return p}r.prototype.slice=function(e,t){var o=this.length;e=~~e,t=t===void 0?o:~~t,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,r.prototype),n};function T(e,t,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>o)throw new RangeError("Trying to access beyond buffer length")}r.prototype.readUintLE=r.prototype.readUIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e+--t],p=1;t>0&&(p*=256);)n+=this[e+--t]*p;return n},r.prototype.readUint8=r.prototype.readUInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||T(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=this[e],p=1,i=0;++i<t&&(p*=256);)n+=this[e+i]*p;return p*=128,n>=p&&(n-=Math.pow(2,8*t)),n},r.prototype.readIntBE=function(e,t,o){e=e>>>0,t=t>>>0,o||T(e,t,this.length);for(var n=t,p=1,i=this[e+--n];n>0&&(p*=256);)i+=this[e+--n]*p;return p*=128,i>=p&&(i-=Math.pow(2,8*t)),i},r.prototype.readInt8=function(e,t){return e=e>>>0,t||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},r.prototype.readInt16LE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o},r.prototype.readInt16BE=function(e,t){e=e>>>0,t||T(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o},r.prototype.readInt32LE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return e=e>>>0,t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return e=e>>>0,t||T(e,4,this.length),c.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||T(e,8,this.length),c.read(this,e,!1,52,8)};function M(e,t,o,n,p,i){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>p||t<i)throw new RangeError('"value" argument is out of bounds');if(o+n>e.length)throw new RangeError("Index out of range")}r.prototype.writeUintLE=r.prototype.writeUIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=1,d=0;for(this[t]=e&255;++d<o&&(i*=256);)this[t+d]=e/i&255;return t+o},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,o=o>>>0,!n){var p=Math.pow(2,8*o)-1;M(this,e,t,o,p,0)}var i=o-1,d=1;for(this[t+i]=e&255;--i>=0&&(d*=256);)this[t+i]=e/d&255;return t+o},r.prototype.writeUint8=r.prototype.writeUInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,255,0),this[t]=e&255,t+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},r.prototype.writeIntLE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=0,d=1,v=0;for(this[t]=e&255;++i<o&&(d*=256);)e<0&&v===0&&this[t+i-1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeIntBE=function(e,t,o,n){if(e=+e,t=t>>>0,!n){var p=Math.pow(2,8*o-1);M(this,e,t,o,p-1,-p)}var i=o-1,d=1,v=0;for(this[t+i]=e&255;--i>=0&&(d*=256);)e<0&&v===0&&this[t+i+1]!==0&&(v=1),this[t+i]=(e/d>>0)-v&255;return t+o},r.prototype.writeInt8=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},r.prototype.writeInt16LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},r.prototype.writeInt16BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},r.prototype.writeInt32LE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},r.prototype.writeInt32BE=function(e,t,o){return e=+e,t=t>>>0,o||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function $(e,t,o,n,p,i){if(o+n>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function H(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,4,34028234663852886e22,-34028234663852886e22),c.write(e,t,o,n,23,4),o+4}r.prototype.writeFloatLE=function(e,t,o){return H(this,e,t,!0,o)},r.prototype.writeFloatBE=function(e,t,o){return H(this,e,t,!1,o)};function J(e,t,o,n,p){return t=+t,o=o>>>0,p||$(e,t,o,8,17976931348623157e292,-17976931348623157e292),c.write(e,t,o,n,52,8),o+8}r.prototype.writeDoubleLE=function(e,t,o){return J(this,e,t,!0,o)},r.prototype.writeDoubleBE=function(e,t,o){return J(this,e,t,!1,o)},r.prototype.copy=function(e,t,o,n){if(!r.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<o&&(n=o),n===o||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-o&&(n=e.length-t+o);var p=n-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,o,n):Uint8Array.prototype.set.call(e,this.subarray(o,n),t),p},r.prototype.fill=function(e,t,o,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!r.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var p=e.charCodeAt(0);(n==="utf8"&&p<128||n==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<o)throw new RangeError("Out of range index");if(o<=t)return this;t=t>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var i;if(typeof e=="number")for(i=t;i<o;++i)this[i]=e;else{var d=r.isBuffer(e)?e:r.from(e,n),v=d.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<o-t;++i)this[i+t]=d[i%v]}return this};var fe=/[^+/0-9A-Za-z-_]/g;function he(e){if(e=e.split("=")[0],e=e.trim().replace(fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Y(e,t){t=t||1/0;for(var o,n=e.length,p=null,i=[],d=0;d<n;++d){if(o=e.charCodeAt(d),o>55295&&o<57344){if(!p){if(o>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(d+1===n){(t-=3)>-1&&i.push(239,191,189);continue}p=o;continue}if(o<56320){(t-=3)>-1&&i.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(t-=3)>-1&&i.push(239,191,189);if(p=null,o<128){if((t-=1)<0)break;i.push(o)}else if(o<2048){if((t-=2)<0)break;i.push(o>>6|192,o&63|128)}else if(o<65536){if((t-=3)<0)break;i.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((t-=4)<0)break;i.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return i}function ge(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o)&255);return t}function ye(e,t){for(var o,n,p,i=[],d=0;d<e.length&&!((t-=2)<0);++d)o=e.charCodeAt(d),n=o>>8,p=o%256,i.push(p),i.push(n);return i}function K(e){return l.toByteArray(he(e))}function D(e,t,o,n){for(var p=0;p<n&&!(p+o>=t.length||p>=e.length);++p)t[p+o]=e[p];return p}function z(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function V(e){return e!==e}var ke=function(){for(var e="0123456789abcdef",t=new Array(256),o=0;o<16;++o)for(var n=o*16,p=0;p<16;++p)t[n+p]=e[o]+e[p];return t}()}),Oi=It((_,l)=>{Qe();var c=l.exports={},a,u;function h(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=h}catch(f){a=h}try{typeof clearTimeout=="function"?u=clearTimeout:u=s}catch(f){u=s}})();function r(f){if(a===setTimeout)return setTimeout(f,0);if((a===h||!a)&&setTimeout)return a=setTimeout,setTimeout(f,0);try{return a(f,0)}catch(b){try{return a.call(null,f,0)}catch(w){return a.call(this,f,0)}}}function A(f){if(u===clearTimeout)return clearTimeout(f);if((u===s||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(f);try{return u(f)}catch(b){try{return u.call(null,f)}catch(w){return u.call(this,f)}}}var S=[],B=!1,k,x=-1;function L(){!B||!k||(B=!1,k.length?S=k.concat(S):x=-1,S.length&&m())}function m(){if(!B){var f=r(L);B=!0;for(var b=S.length;b;){for(k=S,S=[];++x<b;)k&&k[x].run();x=-1,b=S.length}k=null,B=!1,A(f)}}c.nextTick=function(f){var b=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)b[w-1]=arguments[w];S.push(new g(f,b)),S.length===1&&!B&&r(m)};function g(f,b){this.fun=f,this.array=b}g.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function y(){}c.on=y,c.addListener=y,c.once=y,c.off=y,c.removeListener=y,c.removeAllListeners=y,c.emit=y,c.prependListener=y,c.prependOnceListener=y,c.listeners=function(f){return[]},c.binding=function(f){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(f){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}}),Ci,Ri,Mi,Qe=Ai(()=>{Ci=Tt(Li()),Ri=Tt(Oi()),Mi=function(_){function l(){var a=this||self;return delete _.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return l();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:l});var c=__magic__;return c}(Object)}),Xn={};Bi(Xn,{getSingleValue:()=>Fi});Zn.exports=Ui(Xn);Qe();var $t=Tt(require("react")),ji=Tt(require("classnames")),Pi=require("react-select");Qe();var Ni=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ni));var Ht={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Fi=_=>l=>{let{selectProps:c,children:a}=l,u=c.value;return $t.default.createElement(Pi.components.SingleValue,Ei(xi({},l),{className:(0,ji.default)(Ht.single,{[Ht.focused]:l.selectProps.menuIsOpen})}),$t.default.createElement("div",{className:Ht.ticker},a,_&&$t.default.createElement(_,{token:u==null?void 0:u.token})))};});var N={};module.exports=er(N);X();F(N,Te(Ao()),module.exports);F(N,Te(Oo()),module.exports);F(N,Te(zo()),module.exports);F(N,Te(Wo()),module.exports);F(N,Te(tn()),module.exports);F(N,Te(an()),module.exports);F(N,Te(En()),module.exports);F(N,Te(zn()),module.exports);F(N,Te(Wn()),module.exports);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
