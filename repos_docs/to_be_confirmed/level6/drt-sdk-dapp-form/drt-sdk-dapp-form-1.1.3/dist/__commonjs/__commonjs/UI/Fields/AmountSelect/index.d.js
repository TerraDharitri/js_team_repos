"use strict";var Wr=Object.create;var Mo=Object.defineProperty;var Zr=Object.getOwnPropertyDescriptor;var Hr=Object.getOwnPropertyNames;var Yr=Object.getPrototypeOf,Xr=Object.prototype.hasOwnProperty;var Jr=(n,t)=>()=>(n&&(t=n(n=0)),t);var Ke=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var mo=(n,t,r,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Hr(t))!Xr.call(n,i)&&i!==r&&Mo(n,i,{get:()=>t[i],enumerable:!(l=Zr(t,i))||l.enumerable});return n},ve=(n,t,r)=>(mo(n,t,"default"),r&&mo(r,t,"default")),so=(n,t,r)=>(r=n!=null?Wr(Yr(n)):{},mo(t||!n||!n.__esModule?Mo(r,"default",{value:n,enumerable:!0}):r,n)),Kr=n=>mo(Mo({},"__esModule",{value:!0}),n);var kt=Ke(_o=>{"use strict";ce();_o.byteLength=en;_o.toByteArray=tn;_o.fromByteArray=an;var ye=[],fe=[],Qr=typeof Uint8Array!="undefined"?Uint8Array:Array,Do="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ze=0,yt=Do.length;ze<yt;++ze)ye[ze]=Do[ze],fe[Do.charCodeAt(ze)]=ze;var ze,yt;fe["-".charCodeAt(0)]=62;fe["_".charCodeAt(0)]=63;function wt(n){var t=n.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=n.indexOf("=");r===-1&&(r=t);var l=r===t?0:4-r%4;return[r,l]}function en(n){var t=wt(n),r=t[0],l=t[1];return(r+l)*3/4-l}function on(n,t,r){return(t+r)*3/4-r}function tn(n){var t,r=wt(n),l=r[0],i=r[1],m=new Qr(on(n,l,i)),u=0,p=i>0?l-4:l,b;for(b=0;b<p;b+=4)t=fe[n.charCodeAt(b)]<<18|fe[n.charCodeAt(b+1)]<<12|fe[n.charCodeAt(b+2)]<<6|fe[n.charCodeAt(b+3)],m[u++]=t>>16&255,m[u++]=t>>8&255,m[u++]=t&255;return i===2&&(t=fe[n.charCodeAt(b)]<<2|fe[n.charCodeAt(b+1)]>>4,m[u++]=t&255),i===1&&(t=fe[n.charCodeAt(b)]<<10|fe[n.charCodeAt(b+1)]<<4|fe[n.charCodeAt(b+2)]>>2,m[u++]=t>>8&255,m[u++]=t&255),m}function rn(n){return ye[n>>18&63]+ye[n>>12&63]+ye[n>>6&63]+ye[n&63]}function nn(n,t,r){for(var l,i=[],m=t;m<r;m+=3)l=(n[m]<<16&16711680)+(n[m+1]<<8&65280)+(n[m+2]&255),i.push(rn(l));return i.join("")}function an(n){for(var t,r=n.length,l=r%3,i=[],m=16383,u=0,p=r-l;u<p;u+=m)i.push(nn(n,u,u+m>p?p:u+m));return l===1?(t=n[r-1],i.push(ye[t>>2]+ye[t<<4&63]+"==")):l===2&&(t=(n[r-2]<<8)+n[r-1],i.push(ye[t>>10]+ye[t>>4&63]+ye[t<<2&63]+"=")),i.join("")}});var St=Ke(Oo=>{ce();Oo.read=function(n,t,r,l,i){var m,u,p=i*8-l-1,b=(1<<p)-1,f=b>>1,y=-7,g=r?i-1:0,S=r?-1:1,A=n[t+g];for(g+=S,m=A&(1<<-y)-1,A>>=-y,y+=p;y>0;m=m*256+n[t+g],g+=S,y-=8);for(u=m&(1<<-y)-1,m>>=-y,y+=l;y>0;u=u*256+n[t+g],g+=S,y-=8);if(m===0)m=1-f;else{if(m===b)return u?NaN:(A?-1:1)*(1/0);u=u+Math.pow(2,l),m=m-f}return(A?-1:1)*u*Math.pow(2,m-l)};Oo.write=function(n,t,r,l,i,m){var u,p,b,f=m*8-i-1,y=(1<<f)-1,g=y>>1,S=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,A=l?0:m-1,h=l?1:-1,x=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(p=isNaN(t)?1:0,u=y):(u=Math.floor(Math.log(t)/Math.LN2),t*(b=Math.pow(2,-u))<1&&(u--,b*=2),u+g>=1?t+=S/b:t+=S*Math.pow(2,1-g),t*b>=2&&(u++,b/=2),u+g>=y?(p=0,u=y):u+g>=1?(p=(t*b-1)*Math.pow(2,i),u=u+g):(p=t*Math.pow(2,g-1)*Math.pow(2,i),u=0));i>=8;n[r+A]=p&255,A+=h,p/=256,i-=8);for(u=u<<i|p,f+=i;f>0;n[r+A]=u&255,A+=h,u/=256,f-=8);n[r+A-h]|=x*128}});var Mt=Ke(oo=>{"use strict";ce();var Po=kt(),eo=St(),xt=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;oo.Buffer=v;oo.SlowBuffer=mn;oo.INSPECT_MAX_BYTES=50;var fo=2147483647;oo.kMaxLength=fo;v.TYPED_ARRAY_SUPPORT=ln();!v.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ln(){try{var n=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(n,t),n.foo()===42}catch(r){return!1}}Object.defineProperty(v.prototype,"parent",{enumerable:!0,get:function(){if(!!v.isBuffer(this))return this.buffer}});Object.defineProperty(v.prototype,"offset",{enumerable:!0,get:function(){if(!!v.isBuffer(this))return this.byteOffset}});function qe(n){if(n>fo)throw new RangeError('The value "'+n+'" is invalid for option "size"');var t=new Uint8Array(n);return Object.setPrototypeOf(t,v.prototype),t}function v(n,t,r){if(typeof n=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return $o(n)}return qt(n,t,r)}v.poolSize=8192;function qt(n,t,r){if(typeof n=="string")return cn(n,t);if(ArrayBuffer.isView(n))return un(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(we(n,ArrayBuffer)||n&&we(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(we(n,SharedArrayBuffer)||n&&we(n.buffer,SharedArrayBuffer)))return zo(n,t,r);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var l=n.valueOf&&n.valueOf();if(l!=null&&l!==n)return v.from(l,t,r);var i=dn(n);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return v.from(n[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}v.from=function(n,t,r){return qt(n,t,r)};Object.setPrototypeOf(v.prototype,Uint8Array.prototype);Object.setPrototypeOf(v,Uint8Array);function At(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function pn(n,t,r){return At(n),n<=0?qe(n):t!==void 0?typeof r=="string"?qe(n).fill(t,r):qe(n).fill(t):qe(n)}v.alloc=function(n,t,r){return pn(n,t,r)};function $o(n){return At(n),qe(n<0?0:Vo(n)|0)}v.allocUnsafe=function(n){return $o(n)};v.allocUnsafeSlow=function(n){return $o(n)};function cn(n,t){if((typeof t!="string"||t==="")&&(t="utf8"),!v.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=Bt(n,t)|0,l=qe(r),i=l.write(n,t);return i!==r&&(l=l.slice(0,i)),l}function Ro(n){for(var t=n.length<0?0:Vo(n.length)|0,r=qe(t),l=0;l<t;l+=1)r[l]=n[l]&255;return r}function un(n){if(we(n,Uint8Array)){var t=new Uint8Array(n);return zo(t.buffer,t.byteOffset,t.byteLength)}return Ro(n)}function zo(n,t,r){if(t<0||n.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var l;return t===void 0&&r===void 0?l=new Uint8Array(n):r===void 0?l=new Uint8Array(n,t):l=new Uint8Array(n,t,r),Object.setPrototypeOf(l,v.prototype),l}function dn(n){if(v.isBuffer(n)){var t=Vo(n.length)|0,r=qe(t);return r.length===0||n.copy(r,0,0,t),r}if(n.length!==void 0)return typeof n.length!="number"||Go(n.length)?qe(0):Ro(n);if(n.type==="Buffer"&&Array.isArray(n.data))return Ro(n.data)}function Vo(n){if(n>=fo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+fo.toString(16)+" bytes");return n|0}function mn(n){return+n!=n&&(n=0),v.alloc(+n)}v.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==v.prototype};v.compare=function(t,r){if(we(t,Uint8Array)&&(t=v.from(t,t.offset,t.byteLength)),we(r,Uint8Array)&&(r=v.from(r,r.offset,r.byteLength)),!v.isBuffer(t)||!v.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===r)return 0;for(var l=t.length,i=r.length,m=0,u=Math.min(l,i);m<u;++m)if(t[m]!==r[m]){l=t[m],i=r[m];break}return l<i?-1:i<l?1:0};v.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};v.concat=function(t,r){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return v.alloc(0);var l;if(r===void 0)for(r=0,l=0;l<t.length;++l)r+=t[l].length;var i=v.allocUnsafe(r),m=0;for(l=0;l<t.length;++l){var u=t[l];if(we(u,Uint8Array))m+u.length>i.length?v.from(u).copy(i,m):Uint8Array.prototype.set.call(i,u,m);else if(v.isBuffer(u))u.copy(i,m);else throw new TypeError('"list" argument must be an Array of Buffers');m+=u.length}return i};function Bt(n,t){if(v.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||we(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);var r=n.length,l=arguments.length>2&&arguments[2]===!0;if(!l&&r===0)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return jo(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return Ft(n).length;default:if(i)return l?-1:jo(n).length;t=(""+t).toLowerCase(),i=!0}}v.byteLength=Bt;function sn(n,t,r){var l=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,t>>>=0,r<=t))return"";for(n||(n="utf8");;)switch(n){case"hex":return Sn(this,t,r);case"utf8":case"utf-8":return Ct(this,t,r);case"ascii":return wn(this,t,r);case"latin1":case"binary":return kn(this,t,r);case"base64":return vn(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xn(this,t,r);default:if(l)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),l=!0}}v.prototype._isBuffer=!0;function Ve(n,t,r){var l=n[t];n[t]=n[r],n[r]=l}v.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)Ve(this,r,r+1);return this};v.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)Ve(this,r,r+3),Ve(this,r+1,r+2);return this};v.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)Ve(this,r,r+7),Ve(this,r+1,r+6),Ve(this,r+2,r+5),Ve(this,r+3,r+4);return this};v.prototype.toString=function(){var t=this.length;return t===0?"":arguments.length===0?Ct(this,0,t):sn.apply(this,arguments)};v.prototype.toLocaleString=v.prototype.toString;v.prototype.equals=function(t){if(!v.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:v.compare(this,t)===0};v.prototype.inspect=function(){var t="",r=oo.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"};xt&&(v.prototype[xt]=v.prototype.inspect);v.prototype.compare=function(t,r,l,i,m){if(we(t,Uint8Array)&&(t=v.from(t,t.offset,t.byteLength)),!v.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(r===void 0&&(r=0),l===void 0&&(l=t?t.length:0),i===void 0&&(i=0),m===void 0&&(m=this.length),r<0||l>t.length||i<0||m>this.length)throw new RangeError("out of range index");if(i>=m&&r>=l)return 0;if(i>=m)return-1;if(r>=l)return 1;if(r>>>=0,l>>>=0,i>>>=0,m>>>=0,this===t)return 0;for(var u=m-i,p=l-r,b=Math.min(u,p),f=this.slice(i,m),y=t.slice(r,l),g=0;g<b;++g)if(f[g]!==y[g]){u=f[g],p=y[g];break}return u<p?-1:p<u?1:0};function Tt(n,t,r,l,i){if(n.length===0)return-1;if(typeof r=="string"?(l=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Go(r)&&(r=i?0:n.length-1),r<0&&(r=n.length+r),r>=n.length){if(i)return-1;r=n.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof t=="string"&&(t=v.from(t,l)),v.isBuffer(t))return t.length===0?-1:Et(n,t,r,l,i);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(n,t,r):Uint8Array.prototype.lastIndexOf.call(n,t,r):Et(n,[t],r,l,i);throw new TypeError("val must be string, number or Buffer")}function Et(n,t,r,l,i){var m=1,u=n.length,p=t.length;if(l!==void 0&&(l=String(l).toLowerCase(),l==="ucs2"||l==="ucs-2"||l==="utf16le"||l==="utf-16le")){if(n.length<2||t.length<2)return-1;m=2,u/=2,p/=2,r/=2}function b(A,h){return m===1?A[h]:A.readUInt16BE(h*m)}var f;if(i){var y=-1;for(f=r;f<u;f++)if(b(n,f)===b(t,y===-1?0:f-y)){if(y===-1&&(y=f),f-y+1===p)return y*m}else y!==-1&&(f-=f-y),y=-1}else for(r+p>u&&(r=u-p),f=r;f>=0;f--){for(var g=!0,S=0;S<p;S++)if(b(n,f+S)!==b(t,S)){g=!1;break}if(g)return f}return-1}v.prototype.includes=function(t,r,l){return this.indexOf(t,r,l)!==-1};v.prototype.indexOf=function(t,r,l){return Tt(this,t,r,l,!0)};v.prototype.lastIndexOf=function(t,r,l){return Tt(this,t,r,l,!1)};function _n(n,t,r,l){r=Number(r)||0;var i=n.length-r;l?(l=Number(l),l>i&&(l=i)):l=i;var m=t.length;l>m/2&&(l=m/2);for(var u=0;u<l;++u){var p=parseInt(t.substr(u*2,2),16);if(Go(p))return u;n[r+u]=p}return u}function fn(n,t,r,l){return ho(jo(t,n.length-r),n,r,l)}function hn(n,t,r,l){return ho(qn(t),n,r,l)}function bn(n,t,r,l){return ho(Ft(t),n,r,l)}function gn(n,t,r,l){return ho(An(t,n.length-r),n,r,l)}v.prototype.write=function(t,r,l,i){if(r===void 0)i="utf8",l=this.length,r=0;else if(l===void 0&&typeof r=="string")i=r,l=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(l)?(l=l>>>0,i===void 0&&(i="utf8")):(i=l,l=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var m=this.length-r;if((l===void 0||l>m)&&(l=m),t.length>0&&(l<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var u=!1;;)switch(i){case"hex":return _n(this,t,r,l);case"utf8":case"utf-8":return fn(this,t,r,l);case"ascii":case"latin1":case"binary":return hn(this,t,r,l);case"base64":return bn(this,t,r,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gn(this,t,r,l);default:if(u)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),u=!0}};v.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function vn(n,t,r){return t===0&&r===n.length?Po.fromByteArray(n):Po.fromByteArray(n.slice(t,r))}function Ct(n,t,r){r=Math.min(n.length,r);for(var l=[],i=t;i<r;){var m=n[i],u=null,p=m>239?4:m>223?3:m>191?2:1;if(i+p<=r){var b,f,y,g;switch(p){case 1:m<128&&(u=m);break;case 2:b=n[i+1],(b&192)===128&&(g=(m&31)<<6|b&63,g>127&&(u=g));break;case 3:b=n[i+1],f=n[i+2],(b&192)===128&&(f&192)===128&&(g=(m&15)<<12|(b&63)<<6|f&63,g>2047&&(g<55296||g>57343)&&(u=g));break;case 4:b=n[i+1],f=n[i+2],y=n[i+3],(b&192)===128&&(f&192)===128&&(y&192)===128&&(g=(m&15)<<18|(b&63)<<12|(f&63)<<6|y&63,g>65535&&g<1114112&&(u=g))}}u===null?(u=65533,p=1):u>65535&&(u-=65536,l.push(u>>>10&1023|55296),u=56320|u&1023),l.push(u),i+=p}return yn(l)}var It=4096;function yn(n){var t=n.length;if(t<=It)return String.fromCharCode.apply(String,n);for(var r="",l=0;l<t;)r+=String.fromCharCode.apply(String,n.slice(l,l+=It));return r}function wn(n,t,r){var l="";r=Math.min(n.length,r);for(var i=t;i<r;++i)l+=String.fromCharCode(n[i]&127);return l}function kn(n,t,r){var l="";r=Math.min(n.length,r);for(var i=t;i<r;++i)l+=String.fromCharCode(n[i]);return l}function Sn(n,t,r){var l=n.length;(!t||t<0)&&(t=0),(!r||r<0||r>l)&&(r=l);for(var i="",m=t;m<r;++m)i+=Bn[n[m]];return i}function xn(n,t,r){for(var l=n.slice(t,r),i="",m=0;m<l.length-1;m+=2)i+=String.fromCharCode(l[m]+l[m+1]*256);return i}v.prototype.slice=function(t,r){var l=this.length;t=~~t,r=r===void 0?l:~~r,t<0?(t+=l,t<0&&(t=0)):t>l&&(t=l),r<0?(r+=l,r<0&&(r=0)):r>l&&(r=l),r<t&&(r=t);var i=this.subarray(t,r);return Object.setPrototypeOf(i,v.prototype),i};function ee(n,t,r){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+t>r)throw new RangeError("Trying to access beyond buffer length")}v.prototype.readUintLE=v.prototype.readUIntLE=function(t,r,l){t=t>>>0,r=r>>>0,l||ee(t,r,this.length);for(var i=this[t],m=1,u=0;++u<r&&(m*=256);)i+=this[t+u]*m;return i};v.prototype.readUintBE=v.prototype.readUIntBE=function(t,r,l){t=t>>>0,r=r>>>0,l||ee(t,r,this.length);for(var i=this[t+--r],m=1;r>0&&(m*=256);)i+=this[t+--r]*m;return i};v.prototype.readUint8=v.prototype.readUInt8=function(t,r){return t=t>>>0,r||ee(t,1,this.length),this[t]};v.prototype.readUint16LE=v.prototype.readUInt16LE=function(t,r){return t=t>>>0,r||ee(t,2,this.length),this[t]|this[t+1]<<8};v.prototype.readUint16BE=v.prototype.readUInt16BE=function(t,r){return t=t>>>0,r||ee(t,2,this.length),this[t]<<8|this[t+1]};v.prototype.readUint32LE=v.prototype.readUInt32LE=function(t,r){return t=t>>>0,r||ee(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216};v.prototype.readUint32BE=v.prototype.readUInt32BE=function(t,r){return t=t>>>0,r||ee(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])};v.prototype.readIntLE=function(t,r,l){t=t>>>0,r=r>>>0,l||ee(t,r,this.length);for(var i=this[t],m=1,u=0;++u<r&&(m*=256);)i+=this[t+u]*m;return m*=128,i>=m&&(i-=Math.pow(2,8*r)),i};v.prototype.readIntBE=function(t,r,l){t=t>>>0,r=r>>>0,l||ee(t,r,this.length);for(var i=r,m=1,u=this[t+--i];i>0&&(m*=256);)u+=this[t+--i]*m;return m*=128,u>=m&&(u-=Math.pow(2,8*r)),u};v.prototype.readInt8=function(t,r){return t=t>>>0,r||ee(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]};v.prototype.readInt16LE=function(t,r){t=t>>>0,r||ee(t,2,this.length);var l=this[t]|this[t+1]<<8;return l&32768?l|4294901760:l};v.prototype.readInt16BE=function(t,r){t=t>>>0,r||ee(t,2,this.length);var l=this[t+1]|this[t]<<8;return l&32768?l|4294901760:l};v.prototype.readInt32LE=function(t,r){return t=t>>>0,r||ee(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24};v.prototype.readInt32BE=function(t,r){return t=t>>>0,r||ee(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]};v.prototype.readFloatLE=function(t,r){return t=t>>>0,r||ee(t,4,this.length),eo.read(this,t,!0,23,4)};v.prototype.readFloatBE=function(t,r){return t=t>>>0,r||ee(t,4,this.length),eo.read(this,t,!1,23,4)};v.prototype.readDoubleLE=function(t,r){return t=t>>>0,r||ee(t,8,this.length),eo.read(this,t,!0,52,8)};v.prototype.readDoubleBE=function(t,r){return t=t>>>0,r||ee(t,8,this.length),eo.read(this,t,!1,52,8)};function de(n,t,r,l,i,m){if(!v.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<m)throw new RangeError('"value" argument is out of bounds');if(r+l>n.length)throw new RangeError("Index out of range")}v.prototype.writeUintLE=v.prototype.writeUIntLE=function(t,r,l,i){if(t=+t,r=r>>>0,l=l>>>0,!i){var m=Math.pow(2,8*l)-1;de(this,t,r,l,m,0)}var u=1,p=0;for(this[r]=t&255;++p<l&&(u*=256);)this[r+p]=t/u&255;return r+l};v.prototype.writeUintBE=v.prototype.writeUIntBE=function(t,r,l,i){if(t=+t,r=r>>>0,l=l>>>0,!i){var m=Math.pow(2,8*l)-1;de(this,t,r,l,m,0)}var u=l-1,p=1;for(this[r+u]=t&255;--u>=0&&(p*=256);)this[r+u]=t/p&255;return r+l};v.prototype.writeUint8=v.prototype.writeUInt8=function(t,r,l){return t=+t,r=r>>>0,l||de(this,t,r,1,255,0),this[r]=t&255,r+1};v.prototype.writeUint16LE=v.prototype.writeUInt16LE=function(t,r,l){return t=+t,r=r>>>0,l||de(this,t,r,2,65535,0),this[r]=t&255,this[r+1]=t>>>8,r+2};v.prototype.writeUint16BE=v.prototype.writeUInt16BE=function(t,r,l){return t=+t,r=r>>>0,l||de(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=t&255,r+2};v.prototype.writeUint32LE=v.prototype.writeUInt32LE=function(t,r,l){return t=+t,r=r>>>0,l||de(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=t&255,r+4};v.prototype.writeUint32BE=v.prototype.writeUInt32BE=function(t,r,l){return t=+t,r=r>>>0,l||de(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=t&255,r+4};v.prototype.writeIntLE=function(t,r,l,i){if(t=+t,r=r>>>0,!i){var m=Math.pow(2,8*l-1);de(this,t,r,l,m-1,-m)}var u=0,p=1,b=0;for(this[r]=t&255;++u<l&&(p*=256);)t<0&&b===0&&this[r+u-1]!==0&&(b=1),this[r+u]=(t/p>>0)-b&255;return r+l};v.prototype.writeIntBE=function(t,r,l,i){if(t=+t,r=r>>>0,!i){var m=Math.pow(2,8*l-1);de(this,t,r,l,m-1,-m)}var u=l-1,p=1,b=0;for(this[r+u]=t&255;--u>=0&&(p*=256);)t<0&&b===0&&this[r+u+1]!==0&&(b=1),this[r+u]=(t/p>>0)-b&255;return r+l};v.prototype.writeInt8=function(t,r,l){return t=+t,r=r>>>0,l||de(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=t&255,r+1};v.prototype.writeInt16LE=function(t,r,l){return t=+t,r=r>>>0,l||de(this,t,r,2,32767,-32768),this[r]=t&255,this[r+1]=t>>>8,r+2};v.prototype.writeInt16BE=function(t,r,l){return t=+t,r=r>>>0,l||de(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=t&255,r+2};v.prototype.writeInt32LE=function(t,r,l){return t=+t,r=r>>>0,l||de(this,t,r,4,2147483647,-2147483648),this[r]=t&255,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4};v.prototype.writeInt32BE=function(t,r,l){return t=+t,r=r>>>0,l||de(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=t&255,r+4};function Ut(n,t,r,l,i,m){if(r+l>n.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function Lt(n,t,r,l,i){return t=+t,r=r>>>0,i||Ut(n,t,r,4,34028234663852886e22,-34028234663852886e22),eo.write(n,t,r,l,23,4),r+4}v.prototype.writeFloatLE=function(t,r,l){return Lt(this,t,r,!0,l)};v.prototype.writeFloatBE=function(t,r,l){return Lt(this,t,r,!1,l)};function Nt(n,t,r,l,i){return t=+t,r=r>>>0,i||Ut(n,t,r,8,17976931348623157e292,-17976931348623157e292),eo.write(n,t,r,l,52,8),r+8}v.prototype.writeDoubleLE=function(t,r,l){return Nt(this,t,r,!0,l)};v.prototype.writeDoubleBE=function(t,r,l){return Nt(this,t,r,!1,l)};v.prototype.copy=function(t,r,l,i){if(!v.isBuffer(t))throw new TypeError("argument should be a Buffer");if(l||(l=0),!i&&i!==0&&(i=this.length),r>=t.length&&(r=t.length),r||(r=0),i>0&&i<l&&(i=l),i===l||t.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(l<0||l>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-r<i-l&&(i=t.length-r+l);var m=i-l;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,l,i):Uint8Array.prototype.set.call(t,this.subarray(l,i),r),m};v.prototype.fill=function(t,r,l,i){if(typeof t=="string"){if(typeof r=="string"?(i=r,r=0,l=this.length):typeof l=="string"&&(i=l,l=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!v.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(t.length===1){var m=t.charCodeAt(0);(i==="utf8"&&m<128||i==="latin1")&&(t=m)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(r<0||this.length<r||this.length<l)throw new RangeError("Out of range index");if(l<=r)return this;r=r>>>0,l=l===void 0?this.length:l>>>0,t||(t=0);var u;if(typeof t=="number")for(u=r;u<l;++u)this[u]=t;else{var p=v.isBuffer(t)?t:v.from(t,i),b=p.length;if(b===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(u=0;u<l-r;++u)this[u+r]=p[u%b]}return this};var En=/[^+/0-9A-Za-z-_]/g;function In(n){if(n=n.split("=")[0],n=n.trim().replace(En,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function jo(n,t){t=t||1/0;for(var r,l=n.length,i=null,m=[],u=0;u<l;++u){if(r=n.charCodeAt(u),r>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&m.push(239,191,189);continue}else if(u+1===l){(t-=3)>-1&&m.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&m.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&m.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;m.push(r)}else if(r<2048){if((t-=2)<0)break;m.push(r>>6|192,r&63|128)}else if(r<65536){if((t-=3)<0)break;m.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((t-=4)<0)break;m.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return m}function qn(n){for(var t=[],r=0;r<n.length;++r)t.push(n.charCodeAt(r)&255);return t}function An(n,t){for(var r,l,i,m=[],u=0;u<n.length&&!((t-=2)<0);++u)r=n.charCodeAt(u),l=r>>8,i=r%256,m.push(i),m.push(l);return m}function Ft(n){return Po.toByteArray(In(n))}function ho(n,t,r,l){for(var i=0;i<l&&!(i+r>=t.length||i>=n.length);++i)t[i+r]=n[i];return i}function we(n,t){return n instanceof t||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===t.name}function Go(n){return n!==n}var Bn=function(){for(var n="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var l=r*16,i=0;i<16;++i)t[l+i]=n[r]+n[i];return t}()});var zt=Ke((di,Rt)=>{ce();var Y=Rt.exports={},ke,Se;function Wo(){throw new Error("setTimeout has not been defined")}function Zo(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ke=setTimeout:ke=Wo}catch(n){ke=Wo}try{typeof clearTimeout=="function"?Se=clearTimeout:Se=Zo}catch(n){Se=Zo}})();function Dt(n){if(ke===setTimeout)return setTimeout(n,0);if((ke===Wo||!ke)&&setTimeout)return ke=setTimeout,setTimeout(n,0);try{return ke(n,0)}catch(t){try{return ke.call(null,n,0)}catch(r){return ke.call(this,n,0)}}}function Tn(n){if(Se===clearTimeout)return clearTimeout(n);if((Se===Zo||!Se)&&clearTimeout)return Se=clearTimeout,clearTimeout(n);try{return Se(n)}catch(t){try{return Se.call(null,n)}catch(r){return Se.call(this,n)}}}var Ae=[],to=!1,Ge,bo=-1;function Cn(){!to||!Ge||(to=!1,Ge.length?Ae=Ge.concat(Ae):bo=-1,Ae.length&&Ot())}function Ot(){if(!to){var n=Dt(Cn);to=!0;for(var t=Ae.length;t;){for(Ge=Ae,Ae=[];++bo<t;)Ge&&Ge[bo].run();bo=-1,t=Ae.length}Ge=null,to=!1,Tn(n)}}Y.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];Ae.push(new Pt(n,t)),Ae.length===1&&!to&&Dt(Ot)};function Pt(n,t){this.fun=n,this.array=t}Pt.prototype.run=function(){this.fun.apply(null,this.array)};Y.title="browser";Y.browser=!0;Y.env={};Y.argv=[];Y.version="";Y.versions={};function Be(){}Y.on=Be;Y.addListener=Be;Y.once=Be;Y.off=Be;Y.removeListener=Be;Y.removeAllListeners=Be;Y.emit=Be;Y.prependListener=Be;Y.prependOnceListener=Be;Y.listeners=function(n){return[]};Y.binding=function(n){throw new Error("process.binding is not supported")};Y.cwd=function(){return"/"};Y.chdir=function(n){throw new Error("process.chdir is not supported")};Y.umask=function(){return 0}});var je,$e,mi,ce=Jr(()=>{je=so(Mt()),$e=so(zt()),mi=function(n){function t(){var l=this||self;return delete n.prototype.__magic__,l}if(typeof globalThis=="object")return globalThis;if(this)return t();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:t});var r=__magic__;return r}(Object)});var dr=Ke((wi,ur)=>{"use strict";ce();var Un=Object.create,po=Object.defineProperty,Ln=Object.defineProperties,Nn=Object.getOwnPropertyDescriptor,Fn=Object.getOwnPropertyDescriptors,Mn=Object.getOwnPropertyNames,wo=Object.getOwnPropertySymbols,Dn=Object.getPrototypeOf,et=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable,jt=(n,t,r)=>t in n?po(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,ie=(n,t)=>{for(var r in t||(t={}))et.call(t,r)&&jt(n,r,t[r]);if(wo)for(var r of wo(t))Jt.call(t,r)&&jt(n,r,t[r]);return n},Te=(n,t)=>Ln(n,Fn(t)),On=(n,t)=>{var r={};for(var l in n)et.call(n,l)&&t.indexOf(l)<0&&(r[l]=n[l]);if(n!=null&&wo)for(var l of wo(n))t.indexOf(l)<0&&Jt.call(n,l)&&(r[l]=n[l]);return r},Kt=(n,t)=>()=>(n&&(t=n(n=0)),t),So=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),ot=(n,t)=>{for(var r in t)po(n,r,{get:t[r],enumerable:!0})},Qt=(n,t,r,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Mn(t))!et.call(n,i)&&i!==r&&po(n,i,{get:()=>t[i],enumerable:!(l=Nn(t,i))||l.enumerable});return n},$=(n,t,r)=>(r=n!=null?Un(Dn(n)):{},Qt(t||!n||!n.__esModule?po(r,"default",{value:n,enumerable:!0}):r,n)),tt=n=>Qt(po({},"__esModule",{value:!0}),n),Pn=So(n=>{"use strict";T(),n.byteLength=b,n.toByteArray=y,n.fromByteArray=A;var t=[],r=[],l=typeof Uint8Array!="undefined"?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(m=0,u=i.length;m<u;++m)t[m]=i[m],r[i.charCodeAt(m)]=m;var m,u;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function p(h){var x=h.length;if(x%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var E=h.indexOf("=");E===-1&&(E=x);var k=E===x?0:4-E%4;return[E,k]}function b(h){var x=p(h),E=x[0],k=x[1];return(E+k)*3/4-k}function f(h,x,E){return(x+E)*3/4-E}function y(h){var x,E=p(h),k=E[0],B=E[1],q=new l(f(h,k,B)),D=0,F=B>0?k-4:k,M;for(M=0;M<F;M+=4)x=r[h.charCodeAt(M)]<<18|r[h.charCodeAt(M+1)]<<12|r[h.charCodeAt(M+2)]<<6|r[h.charCodeAt(M+3)],q[D++]=x>>16&255,q[D++]=x>>8&255,q[D++]=x&255;return B===2&&(x=r[h.charCodeAt(M)]<<2|r[h.charCodeAt(M+1)]>>4,q[D++]=x&255),B===1&&(x=r[h.charCodeAt(M)]<<10|r[h.charCodeAt(M+1)]<<4|r[h.charCodeAt(M+2)]>>2,q[D++]=x>>8&255,q[D++]=x&255),q}function g(h){return t[h>>18&63]+t[h>>12&63]+t[h>>6&63]+t[h&63]}function S(h,x,E){for(var k,B=[],q=x;q<E;q+=3)k=(h[q]<<16&16711680)+(h[q+1]<<8&65280)+(h[q+2]&255),B.push(g(k));return B.join("")}function A(h){for(var x,E=h.length,k=E%3,B=[],q=16383,D=0,F=E-k;D<F;D+=q)B.push(S(h,D,D+q>F?F:D+q));return k===1?(x=h[E-1],B.push(t[x>>2]+t[x<<4&63]+"==")):k===2&&(x=(h[E-2]<<8)+h[E-1],B.push(t[x>>10]+t[x>>4&63]+t[x<<2&63]+"=")),B.join("")}}),Rn=So(n=>{T(),n.read=function(t,r,l,i,m){var u,p,b=m*8-i-1,f=(1<<b)-1,y=f>>1,g=-7,S=l?m-1:0,A=l?-1:1,h=t[r+S];for(S+=A,u=h&(1<<-g)-1,h>>=-g,g+=b;g>0;u=u*256+t[r+S],S+=A,g-=8);for(p=u&(1<<-g)-1,u>>=-g,g+=i;g>0;p=p*256+t[r+S],S+=A,g-=8);if(u===0)u=1-y;else{if(u===f)return p?NaN:(h?-1:1)*(1/0);p=p+Math.pow(2,i),u=u-y}return(h?-1:1)*p*Math.pow(2,u-i)},n.write=function(t,r,l,i,m,u){var p,b,f,y=u*8-m-1,g=(1<<y)-1,S=g>>1,A=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,h=i?0:u-1,x=i?1:-1,E=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(b=isNaN(r)?1:0,p=g):(p=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-p))<1&&(p--,f*=2),p+S>=1?r+=A/f:r+=A*Math.pow(2,1-S),r*f>=2&&(p++,f/=2),p+S>=g?(b=0,p=g):p+S>=1?(b=(r*f-1)*Math.pow(2,m),p=p+S):(b=r*Math.pow(2,S-1)*Math.pow(2,m),p=0));m>=8;t[l+h]=b&255,h+=x,b/=256,m-=8);for(p=p<<m|b,y+=m;y>0;t[l+h]=p&255,h+=x,p/=256,y-=8);t[l+h-x]|=E*128}}),zn=So(n=>{"use strict";T();var t=Pn(),r=Rn(),l=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;n.Buffer=p,n.SlowBuffer=B,n.INSPECT_MAX_BYTES=50;var i=2147483647;n.kMaxLength=i,p.TYPED_ARRAY_SUPPORT=m(),!p.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function m(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(a){return!1}}Object.defineProperty(p.prototype,"parent",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.buffer}}),Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.byteOffset}});function u(e){if(e>i)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,p.prototype),o}function p(e,o,a){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return g(e)}return b(e,o,a)}p.poolSize=8192;function b(e,o,a){if(typeof e=="string")return S(e,o);if(ArrayBuffer.isView(e))return h(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return x(e,o,a);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var c=e.valueOf&&e.valueOf();if(c!=null&&c!==e)return p.from(c,o,a);var d=E(e);if(d)return d;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return p.from(e[Symbol.toPrimitive]("string"),o,a);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}p.from=function(e,o,a){return b(e,o,a)},Object.setPrototypeOf(p.prototype,Uint8Array.prototype),Object.setPrototypeOf(p,Uint8Array);function f(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function y(e,o,a){return f(e),e<=0?u(e):o!==void 0?typeof a=="string"?u(e).fill(o,a):u(e).fill(o):u(e)}p.alloc=function(e,o,a){return y(e,o,a)};function g(e){return f(e),u(e<0?0:k(e)|0)}p.allocUnsafe=function(e){return g(e)},p.allocUnsafeSlow=function(e){return g(e)};function S(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!p.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var a=q(e,o)|0,c=u(a),d=c.write(e,o);return d!==a&&(c=c.slice(0,d)),c}function A(e){for(var o=e.length<0?0:k(e.length)|0,a=u(o),c=0;c<o;c+=1)a[c]=e[c]&255;return a}function h(e){if(H(e,Uint8Array)){var o=new Uint8Array(e);return x(o.buffer,o.byteOffset,o.byteLength)}return A(e)}function x(e,o,a){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(a||0))throw new RangeError('"length" is outside of buffer bounds');var c;return o===void 0&&a===void 0?c=new Uint8Array(e):a===void 0?c=new Uint8Array(e,o):c=new Uint8Array(e,o,a),Object.setPrototypeOf(c,p.prototype),c}function E(e){if(p.isBuffer(e)){var o=k(e.length)|0,a=u(o);return a.length===0||e.copy(a,0,0,o),a}if(e.length!==void 0)return typeof e.length!="number"||Re(e.length)?u(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function k(e){if(e>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return e|0}function B(e){return+e!=e&&(e=0),p.alloc(+e)}p.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==p.prototype},p.compare=function(e,o){if(H(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),H(o,Uint8Array)&&(o=p.from(o,o.offset,o.byteLength)),!p.isBuffer(e)||!p.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var a=e.length,c=o.length,d=0,s=Math.min(a,c);d<s;++d)if(e[d]!==o[d]){a=e[d],c=o[d];break}return a<c?-1:c<a?1:0},p.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return p.alloc(0);var a;if(o===void 0)for(o=0,a=0;a<e.length;++a)o+=e[a].length;var c=p.allocUnsafe(o),d=0;for(a=0;a<e.length;++a){var s=e[a];if(H(s,Uint8Array))d+s.length>c.length?p.from(s).copy(c,d):Uint8Array.prototype.set.call(c,s,d);else if(p.isBuffer(s))s.copy(c,d);else throw new TypeError('"list" argument must be an Array of Buffers');d+=s.length}return c};function q(e,o){if(p.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var a=e.length,c=arguments.length>2&&arguments[2]===!0;if(!c&&a===0)return 0;for(var d=!1;;)switch(o){case"ascii":case"latin1":case"binary":return a;case"utf8":case"utf-8":return Pe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a*2;case"hex":return a>>>1;case"base64":return no(e).length;default:if(d)return c?-1:Pe(e).length;o=(""+o).toLowerCase(),d=!0}}p.byteLength=q;function D(e,o,a){var c=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((a===void 0||a>this.length)&&(a=this.length),a<=0)||(a>>>=0,o>>>=0,a<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return ro(this,o,a);case"utf8":case"utf-8":return L(this,o,a);case"ascii":return le(this,o,a);case"latin1":case"binary":return Me(this,o,a);case"base64":return N(this,o,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xe(this,o,a);default:if(c)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),c=!0}}p.prototype._isBuffer=!0;function F(e,o,a){var c=e[o];e[o]=e[a],e[a]=c}p.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)F(this,o,o+1);return this},p.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)F(this,o,o+3),F(this,o+1,o+2);return this},p.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)F(this,o,o+7),F(this,o+1,o+6),F(this,o+2,o+5),F(this,o+3,o+4);return this},p.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?L(this,0,e):D.apply(this,arguments)},p.prototype.toLocaleString=p.prototype.toString,p.prototype.equals=function(e){if(!p.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:p.compare(this,e)===0},p.prototype.inspect=function(){var e="",o=n.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},l&&(p.prototype[l]=p.prototype.inspect),p.prototype.compare=function(e,o,a,c,d){if(H(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),!p.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),a===void 0&&(a=e?e.length:0),c===void 0&&(c=0),d===void 0&&(d=this.length),o<0||a>e.length||c<0||d>this.length)throw new RangeError("out of range index");if(c>=d&&o>=a)return 0;if(c>=d)return-1;if(o>=a)return 1;if(o>>>=0,a>>>=0,c>>>=0,d>>>=0,this===e)return 0;for(var s=d-c,w=a-o,C=Math.min(s,w),V=this.slice(c,d),U=e.slice(o,a),z=0;z<C;++z)if(V[z]!==U[z]){s=V[z],w=U[z];break}return s<w?-1:w<s?1:0};function M(e,o,a,c,d){if(e.length===0)return-1;if(typeof a=="string"?(c=a,a=0):a>2147483647?a=2147483647:a<-2147483648&&(a=-2147483648),a=+a,Re(a)&&(a=d?0:e.length-1),a<0&&(a=e.length+a),a>=e.length){if(d)return-1;a=e.length-1}else if(a<0)if(d)a=0;else return-1;if(typeof o=="string"&&(o=p.from(o,c)),p.isBuffer(o))return o.length===0?-1:ne(e,o,a,c,d);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?d?Uint8Array.prototype.indexOf.call(e,o,a):Uint8Array.prototype.lastIndexOf.call(e,o,a):ne(e,[o],a,c,d);throw new TypeError("val must be string, number or Buffer")}function ne(e,o,a,c,d){var s=1,w=e.length,C=o.length;if(c!==void 0&&(c=String(c).toLowerCase(),c==="ucs2"||c==="ucs-2"||c==="utf16le"||c==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,w/=2,C/=2,a/=2}function V(ao,lo){return s===1?ao[lo]:ao.readUInt16BE(lo*s)}var U;if(d){var z=-1;for(U=a;U<w;U++)if(V(e,U)===V(o,z===-1?0:U-z)){if(z===-1&&(z=U),U-z+1===C)return z*s}else z!==-1&&(U-=U-z),z=-1}else for(a+C>w&&(a=w-C),U=a;U>=0;U--){for(var W=!0,Ie=0;Ie<C;Ie++)if(V(e,U+Ie)!==V(o,Ie)){W=!1;break}if(W)return U}return-1}p.prototype.includes=function(e,o,a){return this.indexOf(e,o,a)!==-1},p.prototype.indexOf=function(e,o,a){return M(this,e,o,a,!0)},p.prototype.lastIndexOf=function(e,o,a){return M(this,e,o,a,!1)};function K(e,o,a,c){a=Number(a)||0;var d=e.length-a;c?(c=Number(c),c>d&&(c=d)):c=d;var s=o.length;c>s/2&&(c=s/2);for(var w=0;w<c;++w){var C=parseInt(o.substr(w*2,2),16);if(Re(C))return w;e[a+w]=C}return w}function Q(e,o,a,c){return Ee(Pe(o,e.length-a),e,a,c)}function Z(e,o,a,c){return Ee(Lo(o),e,a,c)}function me(e,o,a,c){return Ee(no(o),e,a,c)}function ae(e,o,a,c){return Ee(No(o,e.length-a),e,a,c)}p.prototype.write=function(e,o,a,c){if(o===void 0)c="utf8",a=this.length,o=0;else if(a===void 0&&typeof o=="string")c=o,a=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(a)?(a=a>>>0,c===void 0&&(c="utf8")):(c=a,a=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var d=this.length-o;if((a===void 0||a>d)&&(a=d),e.length>0&&(a<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var s=!1;;)switch(c){case"hex":return K(this,e,o,a);case"utf8":case"utf-8":return Q(this,e,o,a);case"ascii":case"latin1":case"binary":return Z(this,e,o,a);case"base64":return me(this,e,o,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ae(this,e,o,a);default:if(s)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),s=!0}},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function N(e,o,a){return o===0&&a===e.length?t.fromByteArray(e):t.fromByteArray(e.slice(o,a))}function L(e,o,a){a=Math.min(e.length,a);for(var c=[],d=o;d<a;){var s=e[d],w=null,C=s>239?4:s>223?3:s>191?2:1;if(d+C<=a){var V,U,z,W;switch(C){case 1:s<128&&(w=s);break;case 2:V=e[d+1],(V&192)===128&&(W=(s&31)<<6|V&63,W>127&&(w=W));break;case 3:V=e[d+1],U=e[d+2],(V&192)===128&&(U&192)===128&&(W=(s&15)<<12|(V&63)<<6|U&63,W>2047&&(W<55296||W>57343)&&(w=W));break;case 4:V=e[d+1],U=e[d+2],z=e[d+3],(V&192)===128&&(U&192)===128&&(z&192)===128&&(W=(s&15)<<18|(V&63)<<12|(U&63)<<6|z&63,W>65535&&W<1114112&&(w=W))}}w===null?(w=65533,C=1):w>65535&&(w-=65536,c.push(w>>>10&1023|55296),w=56320|w&1023),c.push(w),d+=C}return oe(c)}var O=4096;function oe(e){var o=e.length;if(o<=O)return String.fromCharCode.apply(String,e);for(var a="",c=0;c<o;)a+=String.fromCharCode.apply(String,e.slice(c,c+=O));return a}function le(e,o,a){var c="";a=Math.min(e.length,a);for(var d=o;d<a;++d)c+=String.fromCharCode(e[d]&127);return c}function Me(e,o,a){var c="";a=Math.min(e.length,a);for(var d=o;d<a;++d)c+=String.fromCharCode(e[d]);return c}function ro(e,o,a){var c=e.length;(!o||o<0)&&(o=0),(!a||a<0||a>c)&&(a=c);for(var d="",s=o;s<a;++s)d+=Fo[e[s]];return d}function xe(e,o,a){for(var c=e.slice(o,a),d="",s=0;s<c.length-1;s+=2)d+=String.fromCharCode(c[s]+c[s+1]*256);return d}p.prototype.slice=function(e,o){var a=this.length;e=~~e,o=o===void 0?a:~~o,e<0?(e+=a,e<0&&(e=0)):e>a&&(e=a),o<0?(o+=a,o<0&&(o=0)):o>a&&(o=a),o<e&&(o=e);var c=this.subarray(e,o);return Object.setPrototypeOf(c,p.prototype),c};function j(e,o,a){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>a)throw new RangeError("Trying to access beyond buffer length")}p.prototype.readUintLE=p.prototype.readUIntLE=function(e,o,a){e=e>>>0,o=o>>>0,a||j(e,o,this.length);for(var c=this[e],d=1,s=0;++s<o&&(d*=256);)c+=this[e+s]*d;return c},p.prototype.readUintBE=p.prototype.readUIntBE=function(e,o,a){e=e>>>0,o=o>>>0,a||j(e,o,this.length);for(var c=this[e+--o],d=1;o>0&&(d*=256);)c+=this[e+--o]*d;return c},p.prototype.readUint8=p.prototype.readUInt8=function(e,o){return e=e>>>0,o||j(e,1,this.length),this[e]},p.prototype.readUint16LE=p.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||j(e,2,this.length),this[e]|this[e+1]<<8},p.prototype.readUint16BE=p.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||j(e,2,this.length),this[e]<<8|this[e+1]},p.prototype.readUint32LE=p.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||j(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},p.prototype.readUint32BE=p.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},p.prototype.readIntLE=function(e,o,a){e=e>>>0,o=o>>>0,a||j(e,o,this.length);for(var c=this[e],d=1,s=0;++s<o&&(d*=256);)c+=this[e+s]*d;return d*=128,c>=d&&(c-=Math.pow(2,8*o)),c},p.prototype.readIntBE=function(e,o,a){e=e>>>0,o=o>>>0,a||j(e,o,this.length);for(var c=o,d=1,s=this[e+--c];c>0&&(d*=256);)s+=this[e+--c]*d;return d*=128,s>=d&&(s-=Math.pow(2,8*o)),s},p.prototype.readInt8=function(e,o){return e=e>>>0,o||j(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},p.prototype.readInt16LE=function(e,o){e=e>>>0,o||j(e,2,this.length);var a=this[e]|this[e+1]<<8;return a&32768?a|4294901760:a},p.prototype.readInt16BE=function(e,o){e=e>>>0,o||j(e,2,this.length);var a=this[e+1]|this[e]<<8;return a&32768?a|4294901760:a},p.prototype.readInt32LE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},p.prototype.readInt32BE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},p.prototype.readFloatLE=function(e,o){return e=e>>>0,o||j(e,4,this.length),r.read(this,e,!0,23,4)},p.prototype.readFloatBE=function(e,o){return e=e>>>0,o||j(e,4,this.length),r.read(this,e,!1,23,4)},p.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||j(e,8,this.length),r.read(this,e,!0,52,8)},p.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||j(e,8,this.length),r.read(this,e,!1,52,8)};function G(e,o,a,c,d,s){if(!p.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>d||o<s)throw new RangeError('"value" argument is out of bounds');if(a+c>e.length)throw new RangeError("Index out of range")}p.prototype.writeUintLE=p.prototype.writeUIntLE=function(e,o,a,c){if(e=+e,o=o>>>0,a=a>>>0,!c){var d=Math.pow(2,8*a)-1;G(this,e,o,a,d,0)}var s=1,w=0;for(this[o]=e&255;++w<a&&(s*=256);)this[o+w]=e/s&255;return o+a},p.prototype.writeUintBE=p.prototype.writeUIntBE=function(e,o,a,c){if(e=+e,o=o>>>0,a=a>>>0,!c){var d=Math.pow(2,8*a)-1;G(this,e,o,a,d,0)}var s=a-1,w=1;for(this[o+s]=e&255;--s>=0&&(w*=256);)this[o+s]=e/w&255;return o+a},p.prototype.writeUint8=p.prototype.writeUInt8=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,1,255,0),this[o]=e&255,o+1},p.prototype.writeUint16LE=p.prototype.writeUInt16LE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},p.prototype.writeUint16BE=p.prototype.writeUInt16BE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},p.prototype.writeUint32LE=p.prototype.writeUInt32LE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},p.prototype.writeUint32BE=p.prototype.writeUInt32BE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},p.prototype.writeIntLE=function(e,o,a,c){if(e=+e,o=o>>>0,!c){var d=Math.pow(2,8*a-1);G(this,e,o,a,d-1,-d)}var s=0,w=1,C=0;for(this[o]=e&255;++s<a&&(w*=256);)e<0&&C===0&&this[o+s-1]!==0&&(C=1),this[o+s]=(e/w>>0)-C&255;return o+a},p.prototype.writeIntBE=function(e,o,a,c){if(e=+e,o=o>>>0,!c){var d=Math.pow(2,8*a-1);G(this,e,o,a,d-1,-d)}var s=a-1,w=1,C=0;for(this[o+s]=e&255;--s>=0&&(w*=256);)e<0&&C===0&&this[o+s+1]!==0&&(C=1),this[o+s]=(e/w>>0)-C&255;return o+a},p.prototype.writeInt8=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},p.prototype.writeInt16LE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},p.prototype.writeInt16BE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},p.prototype.writeInt32LE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},p.prototype.writeInt32BE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function De(e,o,a,c,d,s){if(a+c>e.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("Index out of range")}function Oe(e,o,a,c,d){return o=+o,a=a>>>0,d||De(e,o,a,4,34028234663852886e22,-34028234663852886e22),r.write(e,o,a,c,23,4),a+4}p.prototype.writeFloatLE=function(e,o,a){return Oe(this,e,o,!0,a)},p.prototype.writeFloatBE=function(e,o,a){return Oe(this,e,o,!1,a)};function pe(e,o,a,c,d){return o=+o,a=a>>>0,d||De(e,o,a,8,17976931348623157e292,-17976931348623157e292),r.write(e,o,a,c,52,8),a+8}p.prototype.writeDoubleLE=function(e,o,a){return pe(this,e,o,!0,a)},p.prototype.writeDoubleBE=function(e,o,a){return pe(this,e,o,!1,a)},p.prototype.copy=function(e,o,a,c){if(!p.isBuffer(e))throw new TypeError("argument should be a Buffer");if(a||(a=0),!c&&c!==0&&(c=this.length),o>=e.length&&(o=e.length),o||(o=0),c>0&&c<a&&(c=a),c===a||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(a<0||a>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),e.length-o<c-a&&(c=e.length-o+a);var d=c-a;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,a,c):Uint8Array.prototype.set.call(e,this.subarray(a,c),o),d},p.prototype.fill=function(e,o,a,c){if(typeof e=="string"){if(typeof o=="string"?(c=o,o=0,a=this.length):typeof a=="string"&&(c=a,a=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!p.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(e.length===1){var d=e.charCodeAt(0);(c==="utf8"&&d<128||c==="latin1")&&(e=d)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<a)throw new RangeError("Out of range index");if(a<=o)return this;o=o>>>0,a=a===void 0?this.length:a>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<a;++s)this[s]=e;else{var w=p.isBuffer(e)?e:p.from(e,c),C=w.length;if(C===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<a-o;++s)this[s+o]=w[s%C]}return this};var Co=/[^+/0-9A-Za-z-_]/g;function Uo(e){if(e=e.split("=")[0],e=e.trim().replace(Co,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Pe(e,o){o=o||1/0;for(var a,c=e.length,d=null,s=[],w=0;w<c;++w){if(a=e.charCodeAt(w),a>55295&&a<57344){if(!d){if(a>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(w+1===c){(o-=3)>-1&&s.push(239,191,189);continue}d=a;continue}if(a<56320){(o-=3)>-1&&s.push(239,191,189),d=a;continue}a=(d-55296<<10|a-56320)+65536}else d&&(o-=3)>-1&&s.push(239,191,189);if(d=null,a<128){if((o-=1)<0)break;s.push(a)}else if(a<2048){if((o-=2)<0)break;s.push(a>>6|192,a&63|128)}else if(a<65536){if((o-=3)<0)break;s.push(a>>12|224,a>>6&63|128,a&63|128)}else if(a<1114112){if((o-=4)<0)break;s.push(a>>18|240,a>>12&63|128,a>>6&63|128,a&63|128)}else throw new Error("Invalid code point")}return s}function Lo(e){for(var o=[],a=0;a<e.length;++a)o.push(e.charCodeAt(a)&255);return o}function No(e,o){for(var a,c,d,s=[],w=0;w<e.length&&!((o-=2)<0);++w)a=e.charCodeAt(w),c=a>>8,d=a%256,s.push(d),s.push(c);return s}function no(e){return t.toByteArray(Uo(e))}function Ee(e,o,a,c){for(var d=0;d<c&&!(d+a>=o.length||d>=e.length);++d)o[d+a]=e[d];return d}function H(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Re(e){return e!==e}var Fo=function(){for(var e="0123456789abcdef",o=new Array(256),a=0;a<16;++a)for(var c=a*16,d=0;d<16;++d)o[c+d]=e[a]+e[d];return o}()}),jn=So((n,t)=>{T();var r=t.exports={},l,i;function m(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?l=setTimeout:l=m}catch(k){l=m}try{typeof clearTimeout=="function"?i=clearTimeout:i=u}catch(k){i=u}})();function p(k){if(l===setTimeout)return setTimeout(k,0);if((l===m||!l)&&setTimeout)return l=setTimeout,setTimeout(k,0);try{return l(k,0)}catch(B){try{return l.call(null,k,0)}catch(q){return l.call(this,k,0)}}}function b(k){if(i===clearTimeout)return clearTimeout(k);if((i===u||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(k);try{return i(k)}catch(B){try{return i.call(null,k)}catch(q){return i.call(this,k)}}}var f=[],y=!1,g,S=-1;function A(){!y||!g||(y=!1,g.length?f=g.concat(f):S=-1,f.length&&h())}function h(){if(!y){var k=p(A);y=!0;for(var B=f.length;B;){for(g=f,f=[];++S<B;)g&&g[S].run();S=-1,B=f.length}g=null,y=!1,b(k)}}r.nextTick=function(k){var B=new Array(arguments.length-1);if(arguments.length>1)for(var q=1;q<arguments.length;q++)B[q-1]=arguments[q];f.push(new x(k,B)),f.length===1&&!y&&p(h)};function x(k,B){this.fun=k,this.array=B}x.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function E(){}r.on=E,r.addListener=E,r.once=E,r.off=E,r.removeListener=E,r.removeAllListeners=E,r.emit=E,r.prependListener=E,r.prependOnceListener=E,r.listeners=function(k){return[]},r.binding=function(k){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(k){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),$n,Vn,Gn,T=Kt(()=>{$n=$(zn()),Vn=$(jn()),Gn=function(n){function t(){var l=this||self;return delete n.prototype.__magic__,l}if(typeof globalThis=="object")return globalThis;if(this)return t();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:t});var r=__magic__;return r}(Object)}),rt={};ot(rt,{default:()=>er});var go,$t,er,or=Kt(()=>{"use strict";T(),go=$(require("react")),$t=n=>go.createElement("svg",ie({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},n),go.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),go.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),er=$t}),tr={};ot(tr,{AmountSelect:()=>El});ur.exports=tt(tr);T();var he=$(require("react")),Ho=$(require("classnames"));T();var Wn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wn));var ko={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};T();T();var Zn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zn));var We={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};T();T();T();var te=$(require("react")),Hn=require("@terradharitri/sdk-dapp/utils/validation"),Yo=$(require("bignumber.js")),Vt=$(require("classnames")),Yn=require("react-number-format");T();var Xn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xn));var vo={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};T();T();var Ze=require("@terradharitri/sdk-dapp/constants/index"),Jn=require("@terradharitri/sdk-dapp/utils/validation"),Ue=$(require("bignumber.js")),Kn=(n,t)=>{let r=t!=null?t:Ze.DIGITS;if((0,Jn.stringIsFloat)(n)){if(new Ue.default(n).isZero())return"0";let l=new Ue.default(n).toFormat(r);return l=parseFloat(l)>0?l:new Ue.default(n).toFormat(Ze.DIGITS),l=parseFloat(l)>0?l:new Ue.default(n).toFormat(Ze.DIGITS+2),l=parseFloat(l)>0?l:new Ue.default(n).toFormat(Ze.DIGITS+4),l=parseFloat(l)>0?l:new Ue.default(n).toFormat(Ze.DIGITS+6),l=parseFloat(l)>0?l:new Ue.default(n).toFormat(Ze.DIGITS+10),parseFloat(l)>0?l:new Ue.default(n).toFormat(Ze.DIGITS+14)}return"0"};T();var Gt=n=>n.replace(/,/g,"");T();var Wt=require("react"),Qn={value:"",count:0},ea=(n,t)=>{let[r,l]=(0,Wt.useState)(Qn);return(0,Wt.useEffect)(()=>{let i=setTimeout(()=>{l(n)},t);return()=>clearTimeout(i)},[n.count]),r};T();var oa=$(require("bignumber.js")),ta=n=>{let[t,r]=n.split(""),l=new oa.default(t).isZero();return Boolean(l&&r&&r!==".")},ra=500,Zt=1e13,na=({"data-testid":n,InfoDustComponent:t,disabled:r,handleBlur:l,handleChange:i,name:m,onDebounceChange:u,onFocus:p,onKeyDown:b,placeholder:f,required:y,usdPrice:g,value:S,usdValue:A,className:h,autoFocus:x,suffix:E})=>{let k=(0,te.useRef)(null),[B,q]=(0,te.useState)(),[D,F]=(0,te.useState)(!1),[M,ne]=(0,te.useState)({value:S,count:0}),[K,Q]=(0,te.useState)(),Z=ea(M,ra),me=L=>{L.stopPropagation(),F(!0);let O=Gt(L.target.value),oe=(0,Yo.default)(O).isLessThanOrEqualTo(Zt);if((O===""||oe)&&(q(O),L.target.value=O,i(L),u)){let le={value:O,count:M.count+1};ne(le)}},ae=()=>{if(A)return Q(`$${A}`);if(!g||!S)return Q(void 0);let L=Gt(S);if(!(S!==""&&(0,Hn.stringIsFloat)(L))||L==="")return Q(void 0);let O=Kn(new Yo.default(L).times(g!=null?g:0).toString(10),2);Q(`$${O}`)},N=({value:L,floatValue:O})=>(!O||(0,Yo.default)(O).isLessThanOrEqualTo(Zt))&&!ta(L);return(0,te.useEffect)(()=>{u&&D&&(F(!1),u(Z.value))},[Z]),(0,te.useEffect)(ae,[S,A,g]),(0,te.useEffect)(()=>{S!==B&&q(S)},[S]),te.default.createElement("div",{ref:k,className:(0,Vt.default)(vo.amountHolder,{[vo.showUsdValue]:Boolean(K)},h)},te.default.createElement(Yn.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":n||m,decimalSeparator:".",disabled:Boolean(r),id:m,inputMode:"decimal",isAllowed:N,name:m,onBlur:l,onChange:me,onFocus:p,onKeyDown:b,placeholder:f,required:y,thousandSeparator:",",thousandsGroupStyle:"thousand",value:B,suffix:E,valueIsNumericString:!0,allowNegative:!1,autoFocus:x,className:(0,Vt.default)(ko.input,vo.amountInput,{[ko.disabled]:Boolean(r)})}),K&&te.default.createElement("span",{className:vo.amountHolderUsd},te.default.createElement("small",{"data-testid":`tokenPrice_${g}`},K!=="$0"?te.default.createElement(te.default.Fragment,null,"\u2248 "):te.default.createElement(te.default.Fragment,null),K),t))},aa=(0,te.memo)(na,(n,t)=>n.value===t.value&&n.usdPrice===t.usdPrice&&n.className===t.className&&n.disabled===t.disabled&&n.usdValue===t.usdValue);T();T();var _i=$(require("react"));T();T();var fi=$(require("react")),hi=require("@fortawesome/free-solid-svg-icons"),bi=require("@fortawesome/react-fontawesome"),gi=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),vi=require("react-tooltip"),yi=require("react-tooltip/dist/react-tooltip.css");T();T();var la="5000000000000000",pa="WREWA-bd4d79";T();var ca=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ca));T();T();var ia=$(require("react")),ua=require("@terradharitri/sdk-dapp/constants"),Ht=$(require("bignumber.js")),da=$(require("classnames"));T();var Yt=$(require("bignumber.js")),ma=n=>{let t=new Yt.default(n!=null?n:"0"),r=new Yt.default(la),l=t.minus(r);return l.isGreaterThan(0)?l.toString(10):"0"};T();var sa=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sa));var _a={max:"dapp-core-component__maxButton-module__max"};T();var He=require("@terradharitri/sdk-dapp/constants"),fa=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),ha=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),rr=({amount:n="0",decimals:t=0,digits:r=He.DIGITS,addCommas:l=!1,showLastNonZeroDecimal:i=!1})=>{if(n==null||!(0,ha.stringIsInteger)(n))return"0";let m=p=>(0,fa.formatAmount)({input:n,digits:p,decimals:t,addCommas:l,showLastNonZeroDecimal:i}),u=m(r);return u=parseFloat(u)>0?u:m(He.DIGITS),u=parseFloat(u)>0?u:m(He.DIGITS+2),u=parseFloat(u)>0?u:m(He.DIGITS+4),u=parseFloat(u)>0?u:m(He.DIGITS+6),u=parseFloat(u)>0?u:m(He.DIGITS+10),parseFloat(u)>0?u:m(He.DIGITS+14)},ba=({token:n,rewaLabel:t,inputAmount:r,className:l,onMaxClick:i})=>{var m;let u=(n==null?void 0:n.identifier)===t,p=(m=n==null?void 0:n.balance)!=null?m:"0";if(p==="0")return null;let b=rr({amount:u?ma(p):p,decimals:(n==null?void 0:n.decimals)||ua.DECIMALS}),f=new Ht.default(r).isEqualTo(new Ht.default(b)),y=g=>{g.preventDefault(),i==null||i(b)};return f?null:ia.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,da.default)(_a.max,l),onClick:y,onMouseDown:g=>{g.preventDefault()}},"Max")};T();T();var Le=$(require("react")),ga=$(require("classnames")),va=$(require("react-select"));T();var ya={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function wa(n){return ya[n]||pa}var nr={};ot(nr,{Control:()=>Oa,IndicatorsContainer:()=>Wa,Input:()=>Aa,Menu:()=>Fa,MenuList:()=>Ca,DharitrIIcon:()=>pr,Placeholder:()=>ja,SmallLoader:()=>xa,ValueComponent:()=>ar,getOption:()=>cr,getSingleValue:()=>ir,getValueContainer:()=>lr});T();T();var Xt=$(require("react")),ka=require("@fortawesome/free-solid-svg-icons"),Sa=require("@fortawesome/react-fontawesome"),xa=({show:n,color:t})=>n?Xt.default.createElement("div",{className:"d-flex"},Xt.default.createElement(Sa.FontAwesomeIcon,{icon:ka.faSpinner,className:`fa-spin fast-spin ${t||"text-primary"}`})):null;T();T();var Ea=$(require("react")),Ia=require("react-select");T();var qa=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qa));var P={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},Aa=n=>Ea.default.createElement(Ia.components.Input,Te(ie({},n),{className:P.dropdown,"data-testid":"tokenSelectInput"}));T();var Ba=$(require("react")),Ta=require("react-select"),Ca=n=>{let t=n,{rx:r}=t,l=On(t,["rx"]);return Ba.default.createElement(Ta.components.MenuList,Te(ie({},l),{className:P.list}))};T();var Xo=$(require("react")),Ua=require("@fortawesome/free-solid-svg-icons"),La=require("@fortawesome/react-fontawesome"),Na=require("react-select"),Fa=n=>Xo.default.createElement(Na.components.Menu,Te(ie({},n),{className:P.menu}),n.selectProps.isLoading?Xo.default.createElement("div",{className:P.loading},Xo.default.createElement(La.FontAwesomeIcon,{icon:Ua.faCircleNotch,className:"fa-spin",size:"lg"})):n.children);T();var Ma=$(require("react")),Da=require("react-select"),Oa=n=>Ma.default.createElement(Da.components.Control,Te(ie({},n),{className:P.control}));T();var Pa=$(require("react")),Ra=$(require("classnames")),za=require("react-select"),ja=n=>Pa.default.createElement(za.components.Placeholder,Te(ie({},n),{className:(0,Ra.default)(P.placeholder,{[P.focused]:n.isFocused})}));T();var $a=$(require("react")),Va=$(require("classnames")),Ga=require("react-select"),Wa=n=>$a.default.createElement(Ga.components.IndicatorsContainer,Te(ie({},n),{className:(0,Va.default)(P.indicator,{[P.expanded]:n.selectProps.menuIsOpen})}));T();var se=$(require("react")),Za=require("@fortawesome/free-solid-svg-icons"),Ha=require("@fortawesome/react-fontawesome"),Ya=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Xa=$(require("classnames")),Ja=require("react-select"),Ka=(or(),tt(rt)).default,ar=({RewaIcon:n,tokenId:t,icon:r})=>{let{isRewa:l}=(0,Ya.getIdentifierType)(t);return l?se.default.createElement("span",{className:P.asset},n?se.default.createElement(n,{className:P.diamond}):se.default.createElement(Ka,{className:P.diamond})):r?se.default.createElement("img",{src:r,className:P.asset}):se.default.createElement(Ha.FontAwesomeIcon,{icon:Za.faDiamond,className:P.asset})},Qa=({children:n})=>se.default.createElement("div",{className:P.wrapper},n),lr=(n,t,r)=>l=>{var i,m;let{selectProps:u,isDisabled:p,children:b}=l,f=u.value,y=(m=(i=f==null?void 0:f.assets)==null?void 0:i.svgUrl)!=null?m:null,g=(0,se.useMemo)(()=>{let S=String(f==null?void 0:f.token.usdPrice);return S!=null&&S.includes("$")?f==null?void 0:f.token.usdPrice:`$${f==null?void 0:f.token.usdPrice}`},[f==null?void 0:f.token.usdPrice]);return se.default.createElement(Ja.components.ValueContainer,Te(ie({},l),{className:P.container}),se.default.createElement("div",{className:(0,Xa.default)(P.icon,t)},se.default.createElement(ar,{RewaIcon:r,rewaLabel:n,icon:y,isDisabled:p,tokenId:f==null?void 0:f.value})),se.default.createElement("div",{className:P.payload},se.default.createElement(Qa,null,b,(f==null?void 0:f.token.usdPrice)&&se.default.createElement("small",{className:P.price},g))))};T();var X=$(require("react")),el=require("@fortawesome/free-solid-svg-icons"),ol=require("@fortawesome/react-fontawesome"),tl=require("@terradharitri/sdk-dapp/constants"),rl=require("@terradharitri/sdk-dapp/UI/UsdValue"),nl=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),al=$(require("classnames")),ll=require("react-select");T();T();var yo=$(require("react"));T();var pl=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pl));var cl={highlight:"dapp-core-component__styles-modules__highlight"},il=({highlight:n,text:t=""})=>{let r=t.split(" "),l=n.toLowerCase(),i=new RegExp(`(${l})`,"gi"),m=r.map(u=>u.split(i).filter(p=>p));return yo.default.createElement("span",{className:cl.highlight},m.map((u,p)=>{let b=`${u}-${p}`;return yo.default.createElement("span",{key:b},u.map((f,y)=>{let g=f.toLowerCase()===l,S=l&&g,A=`${f}-${y}`;return S?yo.default.createElement("strong",{key:A},f):yo.default.createElement("span",{key:A},f)}))}))},{default:pr}=(or(),tt(rt)),cr=({RewaIcon:n,TokenTickerIcon:t,showBalanceUsdValue:r,showTokenPrice:l})=>i=>{var m,u,p,b;let{data:f,isSelected:y,isFocused:g,isDisabled:S,selectProps:A}=i,h=f,{isRewa:x}=(0,nl.getIdentifierType)(h.value),E=h.token.assets?h.token.assets.svgUrl:null,k=rr({amount:h.token.balance,decimals:h.token.decimals||tl.DECIMALS,addCommas:!0}),B=(u=(m=h.token)==null?void 0:m.usdPrice)==null?void 0:u.toString(),q=(b=(p=h.token)==null?void 0:p.valueUSD)==null?void 0:b.toString();return X.default.createElement("div",{"data-testid":`${i.value}-option`},X.default.createElement(ll.components.Option,Te(ie({},i),{className:(0,al.default)(P.option,{[P.selected]:y||g,[P.disabled]:S})}),X.default.createElement("div",{className:P.image},x?X.default.createElement("span",{className:P.icon},n?X.default.createElement(n,null):X.default.createElement(pr,null)):E?X.default.createElement("img",{src:E,className:P.icon}):X.default.createElement("span",{className:P.icon},X.default.createElement(ol.FontAwesomeIcon,{icon:el.faDiamond,className:P.diamond}))),X.default.createElement("div",{className:P.info},X.default.createElement("div",{className:P.left},X.default.createElement("div",{className:P.ticker},X.default.createElement("span",{className:P.value},A.inputValue?X.default.createElement(il,{text:h.token.ticker,highlight:A.inputValue}):h.token.ticker),t&&X.default.createElement(t,{token:h.token})),l&&X.default.createElement("small",{className:P.price},B)),X.default.createElement("div",{className:P.right},X.default.createElement("span",{className:P.value},k),r&&q&&X.default.createElement(rl.UsdValue,{usd:1,decimals:4,amount:q,"data-testid":"token-price-usd-value",className:P.price,addEqualSign:!1}))),X.default.createElement("div",{className:P.children},i.children)))};T();var Jo=$(require("react")),ul=$(require("classnames")),dl=require("react-select"),ir=n=>t=>{let{selectProps:r,children:l}=t,i=r.value;return Jo.default.createElement(dl.components.SingleValue,Te(ie({},t),{className:(0,ul.default)(P.single,{[P.focused]:t.selectProps.menuIsOpen})}),Jo.default.createElement("div",{className:P.ticker},l,n&&Jo.default.createElement(n,{token:i==null?void 0:i.token})))},{Menu:ml,Control:sl,Input:_l,MenuList:fl,IndicatorsContainer:hl,Placeholder:bl}=nr,gl=n=>{let{name:t,options:r,isLoading:l=!1,className:i="",noOptionsMessage:m="No Tokens",disabledOption:u,rewaLabel:p,RewaIcon:b,disabled:f,value:y,onBlur:g,onFocus:S,onChange:A,onMenuOpen:h,chainId:x,wrapperClassName:E="",showTokenPrice:k=!1,showBalanceUsdValue:B=!1,selectedTokenIconClassName:q,TokenTickerIcon:D}=n,F=(0,Le.useRef)(null),M=[p,wa(x)],ne=(0,Le.useMemo)(()=>cr({rewaLabel:p,RewaIcon:b,showTokenPrice:k,showBalanceUsdValue:B,TokenTickerIcon:D}),[]),K=(0,Le.useMemo)(()=>lr(p,q,b),[]),Q=(0,Le.useMemo)(()=>ir(D),[]);(0,Le.useEffect)(()=>{let N=r.find(O=>O.value===(y==null?void 0:y.value)),L=(N==null?void 0:N.token.balance)===(y==null?void 0:y.token.balance);!N||L||A(N)},[r]);let Z=N=>M.includes(N),me=N=>{var L;let O=N.value===(u==null?void 0:u.value),oe=Z(N.value),le=Z((L=u==null?void 0:u.value)!=null?L:"");return O||oe&&le},ae=(N,L)=>{let O=N.data.token.ticker?N.data.token.ticker.toLowerCase().includes(L.toLowerCase()):!1,oe=N.data.token.name.toLowerCase().includes(L.toLowerCase());return Boolean(L)?O||oe:!0};return Le.default.createElement("div",{"data-testid":`${t}Select`,className:`${E} ${l?"select-holder-loading":""}`},Le.default.createElement("label",{htmlFor:t,"data-testid":"tokenIdLabel",className:P.label},"Token"),Le.default.createElement(va.default,{ref:F,inputId:t,name:t,options:r,openMenuOnFocus:!0,isDisabled:f,isLoading:l,value:y,isOptionDisabled:me,onBlur:g,filterOption:ae,onFocus:S,onChange:N=>{A(N),F&&F.current!==null&&F.current.blur()},isSearchable:n.isSearchable,maxMenuHeight:260,onMenuOpen:h,noOptionsMessage:()=>m,className:(0,ga.default)(P.select,i,{[P.disabled]:n.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:ml,Control:sl,Input:_l,MenuList:fl,IndicatorsContainer:hl,ValueContainer:K,Placeholder:bl,Option:ne,SingleValue:Q}}))};T();T();var vl=$(require("react")),yl=$(require("classnames")),wl=({hasErrors:n,className:t,error:r,"data-testid":l})=>n?vl.default.createElement("div",{className:(0,yl.default)(ko.error,t),"data-testid":l},r):null;T();T();var Ko=$(require("react")),kl=$(require("classnames"));T();var Sl=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sl));var Qo={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"},xl=({label:n,value:t,className:r,token:l,"data-testid":i,"data-value":m})=>Ko.default.createElement("div",{"data-testid":i,"data-value":m,className:(0,kl.default)(Qo.balance,r)},Ko.default.createElement("span",{className:Qo.label},n,": "),Ko.default.createElement("span",{className:Qo.value},t)," ",l==null?void 0:l.ticker),El=({className:n,label:t,name:r,wrapperControlsClassName:l,tokenSelectProps:i,tokenBalanceProps:m,amountInputProps:u,amountErrorProps:p,maxButtonProps:b,readonly:f})=>he.default.createElement("div",{className:(0,Ho.default)(We.amount,n)},he.default.createElement("div",{className:We.label},t&&he.default.createElement("label",{htmlFor:r,className:ko.label,"data-testid":"amountLabel"},t),he.default.createElement(xl,ie({},m))),he.default.createElement("div",{className:(0,Ho.default)(We.wrapper,l,{[We.error]:u.isInvalid||i.isInvalid||p.hasErrors,[We.disabled]:f})},he.default.createElement(aa,ie({},u)),he.default.createElement("div",{className:(0,Ho.default)(We.interaction,b.wrapperClassName)},b.isMaxButtonVisible&&he.default.createElement(ba,ie({},b)),he.default.createElement("div",{className:We.select},he.default.createElement(gl,ie({},i))))),he.default.createElement(wl,ie({},p)));});var Gr=Ke((Wd,Vr)=>{"use strict";ce();var Il=Object.create,uo=Object.defineProperty,ql=Object.defineProperties,Al=Object.getOwnPropertyDescriptor,Bl=Object.getOwnPropertyDescriptors,Tl=Object.getOwnPropertyNames,qo=Object.getOwnPropertySymbols,Cl=Object.getPrototypeOf,_t=Object.prototype.hasOwnProperty,qr=Object.prototype.propertyIsEnumerable,mr=(n,t,r)=>t in n?uo(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,ue=(n,t)=>{for(var r in t||(t={}))_t.call(t,r)&&mr(n,r,t[r]);if(qo)for(var r of qo(t))qr.call(t,r)&&mr(n,r,t[r]);return n},Ce=(n,t)=>ql(n,Bl(t)),Ul=(n,t)=>{var r={};for(var l in n)_t.call(n,l)&&t.indexOf(l)<0&&(r[l]=n[l]);if(n!=null&&qo)for(var l of qo(n))t.indexOf(l)<0&&qr.call(n,l)&&(r[l]=n[l]);return r},Ar=(n,t)=>()=>(n&&(t=n(n=0)),t),Bo=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),ft=(n,t)=>{for(var r in t)uo(n,r,{get:t[r],enumerable:!0})},Br=(n,t,r,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Tl(t))!_t.call(n,i)&&i!==r&&uo(n,i,{get:()=>t[i],enumerable:!(l=Al(t,i))||l.enumerable});return n},I=(n,t,r)=>(r=n!=null?Il(Cl(n)):{},Br(t||!n||!n.__esModule?uo(r,"default",{value:n,enumerable:!0}):r,n)),ht=n=>Br(uo({},"__esModule",{value:!0}),n),To=(n,t,r)=>new Promise((l,i)=>{var m=b=>{try{p(r.next(b))}catch(f){i(f)}},u=b=>{try{p(r.throw(b))}catch(f){i(f)}},p=b=>b.done?l(b.value):Promise.resolve(b.value).then(m,u);p((r=r.apply(n,t)).next())}),Ll=Bo(n=>{"use strict";_(),n.byteLength=b,n.toByteArray=y,n.fromByteArray=A;var t=[],r=[],l=typeof Uint8Array!="undefined"?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(m=0,u=i.length;m<u;++m)t[m]=i[m],r[i.charCodeAt(m)]=m;var m,u;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63;function p(h){var x=h.length;if(x%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var E=h.indexOf("=");E===-1&&(E=x);var k=E===x?0:4-E%4;return[E,k]}function b(h){var x=p(h),E=x[0],k=x[1];return(E+k)*3/4-k}function f(h,x,E){return(x+E)*3/4-E}function y(h){var x,E=p(h),k=E[0],B=E[1],q=new l(f(h,k,B)),D=0,F=B>0?k-4:k,M;for(M=0;M<F;M+=4)x=r[h.charCodeAt(M)]<<18|r[h.charCodeAt(M+1)]<<12|r[h.charCodeAt(M+2)]<<6|r[h.charCodeAt(M+3)],q[D++]=x>>16&255,q[D++]=x>>8&255,q[D++]=x&255;return B===2&&(x=r[h.charCodeAt(M)]<<2|r[h.charCodeAt(M+1)]>>4,q[D++]=x&255),B===1&&(x=r[h.charCodeAt(M)]<<10|r[h.charCodeAt(M+1)]<<4|r[h.charCodeAt(M+2)]>>2,q[D++]=x>>8&255,q[D++]=x&255),q}function g(h){return t[h>>18&63]+t[h>>12&63]+t[h>>6&63]+t[h&63]}function S(h,x,E){for(var k,B=[],q=x;q<E;q+=3)k=(h[q]<<16&16711680)+(h[q+1]<<8&65280)+(h[q+2]&255),B.push(g(k));return B.join("")}function A(h){for(var x,E=h.length,k=E%3,B=[],q=16383,D=0,F=E-k;D<F;D+=q)B.push(S(h,D,D+q>F?F:D+q));return k===1?(x=h[E-1],B.push(t[x>>2]+t[x<<4&63]+"==")):k===2&&(x=(h[E-2]<<8)+h[E-1],B.push(t[x>>10]+t[x>>4&63]+t[x<<2&63]+"=")),B.join("")}}),Nl=Bo(n=>{_(),n.read=function(t,r,l,i,m){var u,p,b=m*8-i-1,f=(1<<b)-1,y=f>>1,g=-7,S=l?m-1:0,A=l?-1:1,h=t[r+S];for(S+=A,u=h&(1<<-g)-1,h>>=-g,g+=b;g>0;u=u*256+t[r+S],S+=A,g-=8);for(p=u&(1<<-g)-1,u>>=-g,g+=i;g>0;p=p*256+t[r+S],S+=A,g-=8);if(u===0)u=1-y;else{if(u===f)return p?NaN:(h?-1:1)*(1/0);p=p+Math.pow(2,i),u=u-y}return(h?-1:1)*p*Math.pow(2,u-i)},n.write=function(t,r,l,i,m,u){var p,b,f,y=u*8-m-1,g=(1<<y)-1,S=g>>1,A=m===23?Math.pow(2,-24)-Math.pow(2,-77):0,h=i?0:u-1,x=i?1:-1,E=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(b=isNaN(r)?1:0,p=g):(p=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-p))<1&&(p--,f*=2),p+S>=1?r+=A/f:r+=A*Math.pow(2,1-S),r*f>=2&&(p++,f/=2),p+S>=g?(b=0,p=g):p+S>=1?(b=(r*f-1)*Math.pow(2,m),p=p+S):(b=r*Math.pow(2,S-1)*Math.pow(2,m),p=0));m>=8;t[l+h]=b&255,h+=x,b/=256,m-=8);for(p=p<<m|b,y+=m;y>0;t[l+h]=p&255,h+=x,p/=256,y-=8);t[l+h-x]|=E*128}}),Fl=Bo(n=>{"use strict";_();var t=Ll(),r=Nl(),l=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;n.Buffer=p,n.SlowBuffer=B,n.INSPECT_MAX_BYTES=50;var i=2147483647;n.kMaxLength=i,p.TYPED_ARRAY_SUPPORT=m(),!p.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function m(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(a){return!1}}Object.defineProperty(p.prototype,"parent",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.buffer}}),Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.byteOffset}});function u(e){if(e>i)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,p.prototype),o}function p(e,o,a){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return g(e)}return b(e,o,a)}p.poolSize=8192;function b(e,o,a){if(typeof e=="string")return S(e,o);if(ArrayBuffer.isView(e))return h(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return x(e,o,a);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var c=e.valueOf&&e.valueOf();if(c!=null&&c!==e)return p.from(c,o,a);var d=E(e);if(d)return d;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return p.from(e[Symbol.toPrimitive]("string"),o,a);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}p.from=function(e,o,a){return b(e,o,a)},Object.setPrototypeOf(p.prototype,Uint8Array.prototype),Object.setPrototypeOf(p,Uint8Array);function f(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function y(e,o,a){return f(e),e<=0?u(e):o!==void 0?typeof a=="string"?u(e).fill(o,a):u(e).fill(o):u(e)}p.alloc=function(e,o,a){return y(e,o,a)};function g(e){return f(e),u(e<0?0:k(e)|0)}p.allocUnsafe=function(e){return g(e)},p.allocUnsafeSlow=function(e){return g(e)};function S(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!p.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var a=q(e,o)|0,c=u(a),d=c.write(e,o);return d!==a&&(c=c.slice(0,d)),c}function A(e){for(var o=e.length<0?0:k(e.length)|0,a=u(o),c=0;c<o;c+=1)a[c]=e[c]&255;return a}function h(e){if(H(e,Uint8Array)){var o=new Uint8Array(e);return x(o.buffer,o.byteOffset,o.byteLength)}return A(e)}function x(e,o,a){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(a||0))throw new RangeError('"length" is outside of buffer bounds');var c;return o===void 0&&a===void 0?c=new Uint8Array(e):a===void 0?c=new Uint8Array(e,o):c=new Uint8Array(e,o,a),Object.setPrototypeOf(c,p.prototype),c}function E(e){if(p.isBuffer(e)){var o=k(e.length)|0,a=u(o);return a.length===0||e.copy(a,0,0,o),a}if(e.length!==void 0)return typeof e.length!="number"||Re(e.length)?u(0):A(e);if(e.type==="Buffer"&&Array.isArray(e.data))return A(e.data)}function k(e){if(e>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return e|0}function B(e){return+e!=e&&(e=0),p.alloc(+e)}p.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==p.prototype},p.compare=function(e,o){if(H(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),H(o,Uint8Array)&&(o=p.from(o,o.offset,o.byteLength)),!p.isBuffer(e)||!p.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var a=e.length,c=o.length,d=0,s=Math.min(a,c);d<s;++d)if(e[d]!==o[d]){a=e[d],c=o[d];break}return a<c?-1:c<a?1:0},p.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return p.alloc(0);var a;if(o===void 0)for(o=0,a=0;a<e.length;++a)o+=e[a].length;var c=p.allocUnsafe(o),d=0;for(a=0;a<e.length;++a){var s=e[a];if(H(s,Uint8Array))d+s.length>c.length?p.from(s).copy(c,d):Uint8Array.prototype.set.call(c,s,d);else if(p.isBuffer(s))s.copy(c,d);else throw new TypeError('"list" argument must be an Array of Buffers');d+=s.length}return c};function q(e,o){if(p.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var a=e.length,c=arguments.length>2&&arguments[2]===!0;if(!c&&a===0)return 0;for(var d=!1;;)switch(o){case"ascii":case"latin1":case"binary":return a;case"utf8":case"utf-8":return Pe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a*2;case"hex":return a>>>1;case"base64":return no(e).length;default:if(d)return c?-1:Pe(e).length;o=(""+o).toLowerCase(),d=!0}}p.byteLength=q;function D(e,o,a){var c=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((a===void 0||a>this.length)&&(a=this.length),a<=0)||(a>>>=0,o>>>=0,a<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return ro(this,o,a);case"utf8":case"utf-8":return L(this,o,a);case"ascii":return le(this,o,a);case"latin1":case"binary":return Me(this,o,a);case"base64":return N(this,o,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xe(this,o,a);default:if(c)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),c=!0}}p.prototype._isBuffer=!0;function F(e,o,a){var c=e[o];e[o]=e[a],e[a]=c}p.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)F(this,o,o+1);return this},p.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)F(this,o,o+3),F(this,o+1,o+2);return this},p.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)F(this,o,o+7),F(this,o+1,o+6),F(this,o+2,o+5),F(this,o+3,o+4);return this},p.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?L(this,0,e):D.apply(this,arguments)},p.prototype.toLocaleString=p.prototype.toString,p.prototype.equals=function(e){if(!p.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:p.compare(this,e)===0},p.prototype.inspect=function(){var e="",o=n.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},l&&(p.prototype[l]=p.prototype.inspect),p.prototype.compare=function(e,o,a,c,d){if(H(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),!p.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),a===void 0&&(a=e?e.length:0),c===void 0&&(c=0),d===void 0&&(d=this.length),o<0||a>e.length||c<0||d>this.length)throw new RangeError("out of range index");if(c>=d&&o>=a)return 0;if(c>=d)return-1;if(o>=a)return 1;if(o>>>=0,a>>>=0,c>>>=0,d>>>=0,this===e)return 0;for(var s=d-c,w=a-o,C=Math.min(s,w),V=this.slice(c,d),U=e.slice(o,a),z=0;z<C;++z)if(V[z]!==U[z]){s=V[z],w=U[z];break}return s<w?-1:w<s?1:0};function M(e,o,a,c,d){if(e.length===0)return-1;if(typeof a=="string"?(c=a,a=0):a>2147483647?a=2147483647:a<-2147483648&&(a=-2147483648),a=+a,Re(a)&&(a=d?0:e.length-1),a<0&&(a=e.length+a),a>=e.length){if(d)return-1;a=e.length-1}else if(a<0)if(d)a=0;else return-1;if(typeof o=="string"&&(o=p.from(o,c)),p.isBuffer(o))return o.length===0?-1:ne(e,o,a,c,d);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?d?Uint8Array.prototype.indexOf.call(e,o,a):Uint8Array.prototype.lastIndexOf.call(e,o,a):ne(e,[o],a,c,d);throw new TypeError("val must be string, number or Buffer")}function ne(e,o,a,c,d){var s=1,w=e.length,C=o.length;if(c!==void 0&&(c=String(c).toLowerCase(),c==="ucs2"||c==="ucs-2"||c==="utf16le"||c==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,w/=2,C/=2,a/=2}function V(ao,lo){return s===1?ao[lo]:ao.readUInt16BE(lo*s)}var U;if(d){var z=-1;for(U=a;U<w;U++)if(V(e,U)===V(o,z===-1?0:U-z)){if(z===-1&&(z=U),U-z+1===C)return z*s}else z!==-1&&(U-=U-z),z=-1}else for(a+C>w&&(a=w-C),U=a;U>=0;U--){for(var W=!0,Ie=0;Ie<C;Ie++)if(V(e,U+Ie)!==V(o,Ie)){W=!1;break}if(W)return U}return-1}p.prototype.includes=function(e,o,a){return this.indexOf(e,o,a)!==-1},p.prototype.indexOf=function(e,o,a){return M(this,e,o,a,!0)},p.prototype.lastIndexOf=function(e,o,a){return M(this,e,o,a,!1)};function K(e,o,a,c){a=Number(a)||0;var d=e.length-a;c?(c=Number(c),c>d&&(c=d)):c=d;var s=o.length;c>s/2&&(c=s/2);for(var w=0;w<c;++w){var C=parseInt(o.substr(w*2,2),16);if(Re(C))return w;e[a+w]=C}return w}function Q(e,o,a,c){return Ee(Pe(o,e.length-a),e,a,c)}function Z(e,o,a,c){return Ee(Lo(o),e,a,c)}function me(e,o,a,c){return Ee(no(o),e,a,c)}function ae(e,o,a,c){return Ee(No(o,e.length-a),e,a,c)}p.prototype.write=function(e,o,a,c){if(o===void 0)c="utf8",a=this.length,o=0;else if(a===void 0&&typeof o=="string")c=o,a=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(a)?(a=a>>>0,c===void 0&&(c="utf8")):(c=a,a=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var d=this.length-o;if((a===void 0||a>d)&&(a=d),e.length>0&&(a<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var s=!1;;)switch(c){case"hex":return K(this,e,o,a);case"utf8":case"utf-8":return Q(this,e,o,a);case"ascii":case"latin1":case"binary":return Z(this,e,o,a);case"base64":return me(this,e,o,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ae(this,e,o,a);default:if(s)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),s=!0}},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function N(e,o,a){return o===0&&a===e.length?t.fromByteArray(e):t.fromByteArray(e.slice(o,a))}function L(e,o,a){a=Math.min(e.length,a);for(var c=[],d=o;d<a;){var s=e[d],w=null,C=s>239?4:s>223?3:s>191?2:1;if(d+C<=a){var V,U,z,W;switch(C){case 1:s<128&&(w=s);break;case 2:V=e[d+1],(V&192)===128&&(W=(s&31)<<6|V&63,W>127&&(w=W));break;case 3:V=e[d+1],U=e[d+2],(V&192)===128&&(U&192)===128&&(W=(s&15)<<12|(V&63)<<6|U&63,W>2047&&(W<55296||W>57343)&&(w=W));break;case 4:V=e[d+1],U=e[d+2],z=e[d+3],(V&192)===128&&(U&192)===128&&(z&192)===128&&(W=(s&15)<<18|(V&63)<<12|(U&63)<<6|z&63,W>65535&&W<1114112&&(w=W))}}w===null?(w=65533,C=1):w>65535&&(w-=65536,c.push(w>>>10&1023|55296),w=56320|w&1023),c.push(w),d+=C}return oe(c)}var O=4096;function oe(e){var o=e.length;if(o<=O)return String.fromCharCode.apply(String,e);for(var a="",c=0;c<o;)a+=String.fromCharCode.apply(String,e.slice(c,c+=O));return a}function le(e,o,a){var c="";a=Math.min(e.length,a);for(var d=o;d<a;++d)c+=String.fromCharCode(e[d]&127);return c}function Me(e,o,a){var c="";a=Math.min(e.length,a);for(var d=o;d<a;++d)c+=String.fromCharCode(e[d]);return c}function ro(e,o,a){var c=e.length;(!o||o<0)&&(o=0),(!a||a<0||a>c)&&(a=c);for(var d="",s=o;s<a;++s)d+=Fo[e[s]];return d}function xe(e,o,a){for(var c=e.slice(o,a),d="",s=0;s<c.length-1;s+=2)d+=String.fromCharCode(c[s]+c[s+1]*256);return d}p.prototype.slice=function(e,o){var a=this.length;e=~~e,o=o===void 0?a:~~o,e<0?(e+=a,e<0&&(e=0)):e>a&&(e=a),o<0?(o+=a,o<0&&(o=0)):o>a&&(o=a),o<e&&(o=e);var c=this.subarray(e,o);return Object.setPrototypeOf(c,p.prototype),c};function j(e,o,a){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>a)throw new RangeError("Trying to access beyond buffer length")}p.prototype.readUintLE=p.prototype.readUIntLE=function(e,o,a){e=e>>>0,o=o>>>0,a||j(e,o,this.length);for(var c=this[e],d=1,s=0;++s<o&&(d*=256);)c+=this[e+s]*d;return c},p.prototype.readUintBE=p.prototype.readUIntBE=function(e,o,a){e=e>>>0,o=o>>>0,a||j(e,o,this.length);for(var c=this[e+--o],d=1;o>0&&(d*=256);)c+=this[e+--o]*d;return c},p.prototype.readUint8=p.prototype.readUInt8=function(e,o){return e=e>>>0,o||j(e,1,this.length),this[e]},p.prototype.readUint16LE=p.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||j(e,2,this.length),this[e]|this[e+1]<<8},p.prototype.readUint16BE=p.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||j(e,2,this.length),this[e]<<8|this[e+1]},p.prototype.readUint32LE=p.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||j(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},p.prototype.readUint32BE=p.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},p.prototype.readIntLE=function(e,o,a){e=e>>>0,o=o>>>0,a||j(e,o,this.length);for(var c=this[e],d=1,s=0;++s<o&&(d*=256);)c+=this[e+s]*d;return d*=128,c>=d&&(c-=Math.pow(2,8*o)),c},p.prototype.readIntBE=function(e,o,a){e=e>>>0,o=o>>>0,a||j(e,o,this.length);for(var c=o,d=1,s=this[e+--c];c>0&&(d*=256);)s+=this[e+--c]*d;return d*=128,s>=d&&(s-=Math.pow(2,8*o)),s},p.prototype.readInt8=function(e,o){return e=e>>>0,o||j(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},p.prototype.readInt16LE=function(e,o){e=e>>>0,o||j(e,2,this.length);var a=this[e]|this[e+1]<<8;return a&32768?a|4294901760:a},p.prototype.readInt16BE=function(e,o){e=e>>>0,o||j(e,2,this.length);var a=this[e+1]|this[e]<<8;return a&32768?a|4294901760:a},p.prototype.readInt32LE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},p.prototype.readInt32BE=function(e,o){return e=e>>>0,o||j(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},p.prototype.readFloatLE=function(e,o){return e=e>>>0,o||j(e,4,this.length),r.read(this,e,!0,23,4)},p.prototype.readFloatBE=function(e,o){return e=e>>>0,o||j(e,4,this.length),r.read(this,e,!1,23,4)},p.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||j(e,8,this.length),r.read(this,e,!0,52,8)},p.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||j(e,8,this.length),r.read(this,e,!1,52,8)};function G(e,o,a,c,d,s){if(!p.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>d||o<s)throw new RangeError('"value" argument is out of bounds');if(a+c>e.length)throw new RangeError("Index out of range")}p.prototype.writeUintLE=p.prototype.writeUIntLE=function(e,o,a,c){if(e=+e,o=o>>>0,a=a>>>0,!c){var d=Math.pow(2,8*a)-1;G(this,e,o,a,d,0)}var s=1,w=0;for(this[o]=e&255;++w<a&&(s*=256);)this[o+w]=e/s&255;return o+a},p.prototype.writeUintBE=p.prototype.writeUIntBE=function(e,o,a,c){if(e=+e,o=o>>>0,a=a>>>0,!c){var d=Math.pow(2,8*a)-1;G(this,e,o,a,d,0)}var s=a-1,w=1;for(this[o+s]=e&255;--s>=0&&(w*=256);)this[o+s]=e/w&255;return o+a},p.prototype.writeUint8=p.prototype.writeUInt8=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,1,255,0),this[o]=e&255,o+1},p.prototype.writeUint16LE=p.prototype.writeUInt16LE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},p.prototype.writeUint16BE=p.prototype.writeUInt16BE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},p.prototype.writeUint32LE=p.prototype.writeUInt32LE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},p.prototype.writeUint32BE=p.prototype.writeUInt32BE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},p.prototype.writeIntLE=function(e,o,a,c){if(e=+e,o=o>>>0,!c){var d=Math.pow(2,8*a-1);G(this,e,o,a,d-1,-d)}var s=0,w=1,C=0;for(this[o]=e&255;++s<a&&(w*=256);)e<0&&C===0&&this[o+s-1]!==0&&(C=1),this[o+s]=(e/w>>0)-C&255;return o+a},p.prototype.writeIntBE=function(e,o,a,c){if(e=+e,o=o>>>0,!c){var d=Math.pow(2,8*a-1);G(this,e,o,a,d-1,-d)}var s=a-1,w=1,C=0;for(this[o+s]=e&255;--s>=0&&(w*=256);)e<0&&C===0&&this[o+s+1]!==0&&(C=1),this[o+s]=(e/w>>0)-C&255;return o+a},p.prototype.writeInt8=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},p.prototype.writeInt16LE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},p.prototype.writeInt16BE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},p.prototype.writeInt32LE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},p.prototype.writeInt32BE=function(e,o,a){return e=+e,o=o>>>0,a||G(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function De(e,o,a,c,d,s){if(a+c>e.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("Index out of range")}function Oe(e,o,a,c,d){return o=+o,a=a>>>0,d||De(e,o,a,4,34028234663852886e22,-34028234663852886e22),r.write(e,o,a,c,23,4),a+4}p.prototype.writeFloatLE=function(e,o,a){return Oe(this,e,o,!0,a)},p.prototype.writeFloatBE=function(e,o,a){return Oe(this,e,o,!1,a)};function pe(e,o,a,c,d){return o=+o,a=a>>>0,d||De(e,o,a,8,17976931348623157e292,-17976931348623157e292),r.write(e,o,a,c,52,8),a+8}p.prototype.writeDoubleLE=function(e,o,a){return pe(this,e,o,!0,a)},p.prototype.writeDoubleBE=function(e,o,a){return pe(this,e,o,!1,a)},p.prototype.copy=function(e,o,a,c){if(!p.isBuffer(e))throw new TypeError("argument should be a Buffer");if(a||(a=0),!c&&c!==0&&(c=this.length),o>=e.length&&(o=e.length),o||(o=0),c>0&&c<a&&(c=a),c===a||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(a<0||a>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),e.length-o<c-a&&(c=e.length-o+a);var d=c-a;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,a,c):Uint8Array.prototype.set.call(e,this.subarray(a,c),o),d},p.prototype.fill=function(e,o,a,c){if(typeof e=="string"){if(typeof o=="string"?(c=o,o=0,a=this.length):typeof a=="string"&&(c=a,a=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!p.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(e.length===1){var d=e.charCodeAt(0);(c==="utf8"&&d<128||c==="latin1")&&(e=d)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<a)throw new RangeError("Out of range index");if(a<=o)return this;o=o>>>0,a=a===void 0?this.length:a>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<a;++s)this[s]=e;else{var w=p.isBuffer(e)?e:p.from(e,c),C=w.length;if(C===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<a-o;++s)this[s+o]=w[s%C]}return this};var Co=/[^+/0-9A-Za-z-_]/g;function Uo(e){if(e=e.split("=")[0],e=e.trim().replace(Co,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Pe(e,o){o=o||1/0;for(var a,c=e.length,d=null,s=[],w=0;w<c;++w){if(a=e.charCodeAt(w),a>55295&&a<57344){if(!d){if(a>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(w+1===c){(o-=3)>-1&&s.push(239,191,189);continue}d=a;continue}if(a<56320){(o-=3)>-1&&s.push(239,191,189),d=a;continue}a=(d-55296<<10|a-56320)+65536}else d&&(o-=3)>-1&&s.push(239,191,189);if(d=null,a<128){if((o-=1)<0)break;s.push(a)}else if(a<2048){if((o-=2)<0)break;s.push(a>>6|192,a&63|128)}else if(a<65536){if((o-=3)<0)break;s.push(a>>12|224,a>>6&63|128,a&63|128)}else if(a<1114112){if((o-=4)<0)break;s.push(a>>18|240,a>>12&63|128,a>>6&63|128,a&63|128)}else throw new Error("Invalid code point")}return s}function Lo(e){for(var o=[],a=0;a<e.length;++a)o.push(e.charCodeAt(a)&255);return o}function No(e,o){for(var a,c,d,s=[],w=0;w<e.length&&!((o-=2)<0);++w)a=e.charCodeAt(w),c=a>>8,d=a%256,s.push(d),s.push(c);return s}function no(e){return t.toByteArray(Uo(e))}function Ee(e,o,a,c){for(var d=0;d<c&&!(d+a>=o.length||d>=e.length);++d)o[d+a]=e[d];return d}function H(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Re(e){return e!==e}var Fo=function(){for(var e="0123456789abcdef",o=new Array(256),a=0;a<16;++a)for(var c=a*16,d=0;d<16;++d)o[c+d]=e[a]+e[d];return o}()}),Ml=Bo((n,t)=>{_();var r=t.exports={},l,i;function m(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?l=setTimeout:l=m}catch(k){l=m}try{typeof clearTimeout=="function"?i=clearTimeout:i=u}catch(k){i=u}})();function p(k){if(l===setTimeout)return setTimeout(k,0);if((l===m||!l)&&setTimeout)return l=setTimeout,setTimeout(k,0);try{return l(k,0)}catch(B){try{return l.call(null,k,0)}catch(q){return l.call(this,k,0)}}}function b(k){if(i===clearTimeout)return clearTimeout(k);if((i===u||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(k);try{return i(k)}catch(B){try{return i.call(null,k)}catch(q){return i.call(this,k)}}}var f=[],y=!1,g,S=-1;function A(){!y||!g||(y=!1,g.length?f=g.concat(f):S=-1,f.length&&h())}function h(){if(!y){var k=p(A);y=!0;for(var B=f.length;B;){for(g=f,f=[];++S<B;)g&&g[S].run();S=-1,B=f.length}g=null,y=!1,b(k)}}r.nextTick=function(k){var B=new Array(arguments.length-1);if(arguments.length>1)for(var q=1;q<arguments.length;q++)B[q-1]=arguments[q];f.push(new x(k,B)),f.length===1&&!y&&p(h)};function x(k,B){this.fun=k,this.array=B}x.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function E(){}r.on=E,r.addListener=E,r.once=E,r.off=E,r.removeListener=E,r.removeAllListeners=E,r.emit=E,r.prependListener=E,r.prependOnceListener=E,r.listeners=function(k){return[]},r.binding=function(k){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(k){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}),Dl,Ol,Pl,_=Ar(()=>{Dl=I(Fl()),Ol=I(Ml()),Pl=function(n){function t(){var l=this||self;return delete n.prototype.__magic__,l}if(typeof globalThis=="object")return globalThis;if(this)return t();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:t});var r=__magic__;return r}(Object)}),bt={};ft(bt,{default:()=>Tr});var xo,sr,Tr,Cr=Ar(()=>{"use strict";_(),xo=I(require("react")),sr=n=>xo.createElement("svg",ue({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},n),xo.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),xo.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Tr=sr}),Ur={};ft(Ur,{AmountSelectInput:()=>li});Vr.exports=ht(Ur);_();var nt=I(require("react")),Rl=require("@terradharitri/sdk-dapp/constants"),zl=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");_();var jl=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jl));var io={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};_();var ki=I(require("react")),Si=require("@terradharitri/sdk-dapp/constants/index");_();_();_();var xi=I(require("axios"));_();_();_();var $l=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");_();var Vl=require("@terradharitri/sdk-dapp/constants/index");_();_();_();_();var Lr="5000000000000000",Gl="WREWA-bd4d79",Wl={D:"devnet",T:"testnet",1:"mainnet"},Zl={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function Hl(n){return Wl[n]}function Yl(n){return Zl[n]||Gl}function Xl(n){let t=Hl(n),r=Vl.fallbackNetworkConfigurations[t].apiAddress;if(!r)throw"Could not extract api address for environment, check if you have a valid chainID";return r}function Jl(n){return To(this,null,function*(){let t=Xl(n);return yield(0,$l.getServerConfiguration)(t)})}_();var Ao={value:null};function Kl(n){return Ao.value={baseURL:n.apiAddress,timeout:Number(n.apiTimeout)},Ao.value}function Ql(n){return To(this,null,function*(){if(Ao.value!=null)return Ao.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),n!=null){let r=yield Jl(n);return Kl(r)}let t="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(t),t})}_();_();var ep=I(require("axios"));function op(){return To(this,null,function*(){try{let n=yield Ql(),{data:t}=yield ep.default.get("economics",n);return t}catch(n){return console.error("err fetching economics info",n),null}})}_();_();var Ei=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ii=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),qi=I(require("axios")),Ai=I(require("lodash/uniqBy"));_();var Bi=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ti=I(require("axios"));_();_();_();var tp=require("@terradharitri/sdk-dapp/types/tokens.types");_();_();_();_();var Ci=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ui=I(require("axios"));_();_();var Li=I(require("axios"));_();var rp=I(require("react")),Ni=(0,rp.createContext)({});_();_();var np=I(require("react")),Fi=require("@terradharitri/sdk-dapp/constants/index"),Mi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Di=I(require("bignumber.js")),Oi=require("formik");_();_();_();var Pi=require("bech32");_();_();_();var ap=(n,t)=>typeof t=="boolean"?t:Array.isArray(t)&&t.includes(n);_();_();_();var Ri=require("@terradharitri/sdk-dapp/constants"),zi=require("@terradharitri/sdk-dapp/utils/account/getAccount");_();_();var ji=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");_();var $i=require("@terradharitri/sdk-dapp/utils/buildUrlParams");_();var Vi=I(require("anchorme"));_();_();var Gi=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),lp=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Wi=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Zi=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");_();_();var Nr=I(require("react")),Hi=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Yi=require("formik");_();_();var Xi=require("@terradharitri/sdk-dapp/constants/index"),Ji=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ki=I(require("bignumber.js"));_();_();var Qi=require("@terradharitri/sdk-dapp/constants/index");_();var eu=require("@terradharitri/sdk-dapp/constants/index");_();var ou=require("@terradharitri/sdk-dapp/constants/index"),tu=I(require("bignumber.js"));_();var ru=require("@terradharitri/sdk-dapp/constants/index");_();var nu=require("@terradharitri/sdk-dapp/constants/index");_();_();var au=require("@terradharitri/sdk-core"),lu=require("@terradharitri/sdk-dapp/constants/index"),pu=I(require("bignumber.js"));_();_();var cu=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");_();var iu=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");_();var uu=I(require("bignumber.js"));_();var du=require("@terradharitri/sdk-dapp/constants/index"),mu=require("@terradharitri/sdk-dapp/utils/smartContracts"),su=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),_u=I(require("bignumber.js"));_();var fu=I(require("bignumber.js"));_();var at=require("@terradharitri/sdk-dapp/constants/index"),pp=I(require("bignumber.js")),_r,fr,hr,cp=(0,lp.formatAmount)({input:String((_r=at.GAS_PRICE)!=null?_r:1e9),decimals:(fr=at.DECIMALS)!=null?fr:18,showLastNonZeroDecimal:!0,digits:(hr=at.DIGITS)!=null?hr:4}),hu=new pp.default(cp).times(10).toString(10);_();var bu=require("@terradharitri/sdk-dapp/constants/index"),gu=I(require("bignumber.js"));_();var vu=I(require("bignumber.js"));_();_();var yu=require("yup");_();var br=require("@terradharitri/sdk-dapp/constants/ledger.constants"),ip=I(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),gt=require("yup"),up=(0,gt.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(n){let{ledger:t}=this.parent;return!(t&&n&&n.length&&!t.ledgerDataActive)}),dp=(0,gt.string)().test({name:"hashSign",test:function(n){let{ledger:t,isGuarded:r}=this.parent;if(t){let{ledgerWithHashSign:l,ledgerWithGuardians:i}=(0,ip.default)(t.version);if(n&&n.length>300&&!l)return this.createError({message:`Data too long. You need at least DharitrI app version ${br.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(r&&!i)return this.createError({message:`You need at least DharitrI app version ${br.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),mp=[up,dp],wu=mp.reduce((n,t)=>n.concat(t),(0,gt.string)());_();var ku=require("@terradharitri/sdk-dapp/constants/index"),Su=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),xu=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Eu=require("yup");_();var Iu=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),qu=I(require("bignumber.js")),Au=require("yup");_();var Bu=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Tu=I(require("bignumber.js")),Cu=require("yup");_();var Uu=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Lu=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Nu=I(require("bignumber.js")),Fu=require("yup");_();var Mu=I(require("bignumber.js")),Du=require("yup");_();var Ou=require("@terradharitri/sdk-dapp/constants/index"),Pu=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ru=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),zu=I(require("bignumber.js")),ju=require("yup");_();var $u=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Vu=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Gu=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Wu=I(require("bignumber.js")),Zu=require("yup");_();var Hu=I(require("bignumber.js")),Yu=require("yup");_();var Xu=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ju=require("yup");_();var Ku=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Qu=require("yup");_();_();var sp=(0,Nr.createContext)({});function _p(){return(0,Nr.useContext)(sp)}_();_();var fp=I(require("react")),ed=require("formik"),od=I(require("lodash/uniqBy"));_();_();var Fr=I(require("react")),hp=(0,Fr.createContext)({});function Mr(){return(0,Fr.useContext)(hp)}_();_();var gr=require("react"),bp=require("@terradharitri/sdk-dapp/constants/index"),lt=require("@terradharitri/sdk-dapp/types/enums.types");function gp(){let{networkConfig:n}=Mr(),[t,r]=(0,gr.useState)(0);function l(){return To(this,null,function*(){let i=yield op(),m=(i==null?void 0:i.price)||0;r(m)})}return(0,gr.useEffect)(()=>{![lt.EnvironmentsEnum.mainnet,lt.EnvironmentsEnum.testnet,lt.EnvironmentsEnum.devnet].includes(n==null?void 0:n.id)||l()},[n==null?void 0:n.id]),{rewaLabel:n.rewaLabel,rewaPriceInUsd:t,digits:bp.DIGITS}}_();var td=(0,fp.createContext)({});_();_();var rd=require("@terradharitri/sdk-dapp/constants/index"),nd=require("formik");_();_();var vp=I(require("react")),ad=require("@terradharitri/sdk-dapp/constants/index"),ld=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),pd=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),cd=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),id=I(require("bignumber.js")),ud=require("formik");_();_();_();_();var dd=I(require("bignumber.js"));_();var md=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),sd=I(require("bignumber.js"));_();_();var _d=require("react"),fd=require("@terradharitri/sdk-dapp/constants/index"),hd=require("@terradharitri/sdk-dapp/utils/smartContracts"),bd=I(require("bignumber.js")),gd=require("formik");_();var vd=require("react");_();_();var yd=require("@terradharitri/sdk-dapp/constants/index"),wd=I(require("bignumber.js")),kd=(0,vp.createContext)({}),Sd=(0,np.createContext)({});_();_();var yp=I(require("react")),xd=require("formik"),Ed=(0,yp.createContext)({});_();_();var wp=I(require("react")),Id=require("formik");_();_();_();var qd=require("react"),Ad=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Bd=I(require("lodash/uniqBy"));_();_();var Td=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Cd=require("@terradharitri/sdk-dapp/utils");_();var Ud=require("react");_();var Ld=require("react"),Nd=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Fd=(0,wp.createContext)({});_();_();var kp=I(require("react")),Md=require("formik");_();_();_();_();_();var Dd=require("react"),Od=require("@terradharitri/sdk-dapp/utils");_();var Pd=require("react"),Rd=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");_();_();var zd=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),jd=I(require("axios"));_();var $d=I(require("axios")),Vd=(0,kp.createContext)({});_();var Dr=I(require("react")),Sp=(0,Dr.createContext)({});function xp(){return(0,Dr.useContext)(Sp)}_();var be=I(require("react")),pt=I(require("classnames"));_();var Ep=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ep));var Ye={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};_();_();_();var re=I(require("react")),Ip=require("@terradharitri/sdk-dapp/utils/validation"),ct=I(require("bignumber.js")),vr=I(require("classnames")),qp=require("react-number-format");_();var Ap=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ap));var Eo={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};_();_();var Xe=require("@terradharitri/sdk-dapp/constants/index"),Bp=require("@terradharitri/sdk-dapp/utils/validation"),Ne=I(require("bignumber.js")),Tp=(n,t)=>{let r=t!=null?t:Xe.DIGITS;if((0,Bp.stringIsFloat)(n)){if(new Ne.default(n).isZero())return"0";let l=new Ne.default(n).toFormat(r);return l=parseFloat(l)>0?l:new Ne.default(n).toFormat(Xe.DIGITS),l=parseFloat(l)>0?l:new Ne.default(n).toFormat(Xe.DIGITS+2),l=parseFloat(l)>0?l:new Ne.default(n).toFormat(Xe.DIGITS+4),l=parseFloat(l)>0?l:new Ne.default(n).toFormat(Xe.DIGITS+6),l=parseFloat(l)>0?l:new Ne.default(n).toFormat(Xe.DIGITS+10),parseFloat(l)>0?l:new Ne.default(n).toFormat(Xe.DIGITS+14)}return"0"};_();var yr=n=>n.replace(/,/g,"");_();var wr=require("react"),Cp={value:"",count:0},Up=(n,t)=>{let[r,l]=(0,wr.useState)(Cp);return(0,wr.useEffect)(()=>{let i=setTimeout(()=>{l(n)},t);return()=>clearTimeout(i)},[n.count]),r};_();var Lp=I(require("bignumber.js")),Np=n=>{let[t,r]=n.split(""),l=new Lp.default(t).isZero();return Boolean(l&&r&&r!==".")},Fp=500,kr=1e13,Mp=({"data-testid":n,InfoDustComponent:t,disabled:r,handleBlur:l,handleChange:i,name:m,onDebounceChange:u,onFocus:p,onKeyDown:b,placeholder:f,required:y,usdPrice:g,value:S,usdValue:A,className:h,autoFocus:x,suffix:E})=>{let k=(0,re.useRef)(null),[B,q]=(0,re.useState)(),[D,F]=(0,re.useState)(!1),[M,ne]=(0,re.useState)({value:S,count:0}),[K,Q]=(0,re.useState)(),Z=Up(M,Fp),me=L=>{L.stopPropagation(),F(!0);let O=yr(L.target.value),oe=(0,ct.default)(O).isLessThanOrEqualTo(kr);if((O===""||oe)&&(q(O),L.target.value=O,i(L),u)){let le={value:O,count:M.count+1};ne(le)}},ae=()=>{if(A)return Q(`$${A}`);if(!g||!S)return Q(void 0);let L=yr(S);if(!(S!==""&&(0,Ip.stringIsFloat)(L))||L==="")return Q(void 0);let O=Tp(new ct.default(L).times(g!=null?g:0).toString(10),2);Q(`$${O}`)},N=({value:L,floatValue:O})=>(!O||(0,ct.default)(O).isLessThanOrEqualTo(kr))&&!Np(L);return(0,re.useEffect)(()=>{u&&D&&(F(!1),u(Z.value))},[Z]),(0,re.useEffect)(ae,[S,A,g]),(0,re.useEffect)(()=>{S!==B&&q(S)},[S]),re.default.createElement("div",{ref:k,className:(0,vr.default)(Eo.amountHolder,{[Eo.showUsdValue]:Boolean(K)},h)},re.default.createElement(qp.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":n||m,decimalSeparator:".",disabled:Boolean(r),id:m,inputMode:"decimal",isAllowed:N,name:m,onBlur:l,onChange:me,onFocus:p,onKeyDown:b,placeholder:f,required:y,thousandSeparator:",",thousandsGroupStyle:"thousand",value:B,suffix:E,valueIsNumericString:!0,allowNegative:!1,autoFocus:x,className:(0,vr.default)(io.input,Eo.amountInput,{[io.disabled]:Boolean(r)})}),K&&re.default.createElement("span",{className:Eo.amountHolderUsd},re.default.createElement("small",{"data-testid":`tokenPrice_${g}`},K!=="$0"?re.default.createElement(re.default.Fragment,null,"\u2248 "):re.default.createElement(re.default.Fragment,null),K),t))},Dp=(0,re.memo)(Mp,(n,t)=>n.value===t.value&&n.usdPrice===t.usdPrice&&n.className===t.className&&n.disabled===t.disabled&&n.usdValue===t.usdValue);_();_();var Sr=I(require("react"));_();_();var co=I(require("react")),Op=require("@fortawesome/free-solid-svg-icons"),Pp=require("@fortawesome/react-fontawesome"),Rp=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),zp=require("react-tooltip"),Gd=require("react-tooltip/dist/react-tooltip.css");_();var jp=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jp));var it={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},$p=({rewaLabel:n})=>co.default.createElement("div",{className:it.infoDust},co.default.createElement(zp.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:it.infoDustTooltip},"A minimal amount of"," ",co.default.createElement(Rp.FormatAmount,{rewaLabel:n,value:Lr,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),co.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:it.infoDustTrigger},co.default.createElement(Pp.FontAwesomeIcon,{icon:Op.faInfoCircle,className:"i-icon"}))),Vp=({rewaLabel:n,amount:t,maxAmountMinusDust:r,isMaxClicked:l,tokenId:i})=>t===r&&l&&i===n?Sr.default.createElement("span",{style:{marginLeft:"0.2rem"}},Sr.default.createElement($p,{rewaLabel:n})):null;_();_();var Gp=I(require("react")),Wp=require("@terradharitri/sdk-dapp/constants"),xr=I(require("bignumber.js")),Zp=I(require("classnames"));_();var Er=I(require("bignumber.js")),Hp=n=>{let t=new Er.default(n!=null?n:"0"),r=new Er.default(Lr),l=t.minus(r);return l.isGreaterThan(0)?l.toString(10):"0"};_();var Yp=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yp));var Xp={max:"dapp-core-component__maxButton-module__max"};_();var Je=require("@terradharitri/sdk-dapp/constants"),Jp=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Kp=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),vt=({amount:n="0",decimals:t=0,digits:r=Je.DIGITS,addCommas:l=!1,showLastNonZeroDecimal:i=!1})=>{if(n==null||!(0,Kp.stringIsInteger)(n))return"0";let m=p=>(0,Jp.formatAmount)({input:n,digits:p,decimals:t,addCommas:l,showLastNonZeroDecimal:i}),u=m(r);return u=parseFloat(u)>0?u:m(Je.DIGITS),u=parseFloat(u)>0?u:m(Je.DIGITS+2),u=parseFloat(u)>0?u:m(Je.DIGITS+4),u=parseFloat(u)>0?u:m(Je.DIGITS+6),u=parseFloat(u)>0?u:m(Je.DIGITS+10),parseFloat(u)>0?u:m(Je.DIGITS+14)},Qp=({token:n,rewaLabel:t,inputAmount:r,className:l,onMaxClick:i})=>{var m;let u=(n==null?void 0:n.identifier)===t,p=(m=n==null?void 0:n.balance)!=null?m:"0";if(p==="0")return null;let b=vt({amount:u?Hp(p):p,decimals:(n==null?void 0:n.decimals)||Wp.DECIMALS}),f=new xr.default(r).isEqualTo(new xr.default(b)),y=g=>{g.preventDefault(),i==null||i(b)};return f?null:Gp.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,Zp.default)(Xp.max,l),onClick:y,onMouseDown:g=>{g.preventDefault()}},"Max")};_();_();var Fe=I(require("react")),ec=I(require("classnames")),oc=I(require("react-select")),Or={};ft(Or,{Control:()=>gc,IndicatorsContainer:()=>Ic,Input:()=>cc,Menu:()=>fc,MenuList:()=>dc,DharitrIIcon:()=>zr,Placeholder:()=>kc,SmallLoader:()=>nc,ValueComponent:()=>Pr,getOption:()=>jr,getSingleValue:()=>$r,getValueContainer:()=>Rr});_();_();var Ir=I(require("react")),tc=require("@fortawesome/free-solid-svg-icons"),rc=require("@fortawesome/react-fontawesome"),nc=({show:n,color:t})=>n?Ir.default.createElement("div",{className:"d-flex"},Ir.default.createElement(rc.FontAwesomeIcon,{icon:tc.faSpinner,className:`fa-spin fast-spin ${t||"text-primary"}`})):null;_();_();var ac=I(require("react")),lc=require("react-select");_();var pc=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pc));var R={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},cc=n=>ac.default.createElement(lc.components.Input,Ce(ue({},n),{className:R.dropdown,"data-testid":"tokenSelectInput"}));_();var ic=I(require("react")),uc=require("react-select"),dc=n=>{let t=n,{rx:r}=t,l=Ul(t,["rx"]);return ic.default.createElement(uc.components.MenuList,Ce(ue({},l),{className:R.list}))};_();var ut=I(require("react")),mc=require("@fortawesome/free-solid-svg-icons"),sc=require("@fortawesome/react-fontawesome"),_c=require("react-select"),fc=n=>ut.default.createElement(_c.components.Menu,Ce(ue({},n),{className:R.menu}),n.selectProps.isLoading?ut.default.createElement("div",{className:R.loading},ut.default.createElement(sc.FontAwesomeIcon,{icon:mc.faCircleNotch,className:"fa-spin",size:"lg"})):n.children);_();var hc=I(require("react")),bc=require("react-select"),gc=n=>hc.default.createElement(bc.components.Control,Ce(ue({},n),{className:R.control}));_();var vc=I(require("react")),yc=I(require("classnames")),wc=require("react-select"),kc=n=>vc.default.createElement(wc.components.Placeholder,Ce(ue({},n),{className:(0,yc.default)(R.placeholder,{[R.focused]:n.isFocused})}));_();var Sc=I(require("react")),xc=I(require("classnames")),Ec=require("react-select"),Ic=n=>Sc.default.createElement(Ec.components.IndicatorsContainer,Ce(ue({},n),{className:(0,xc.default)(R.indicator,{[R.expanded]:n.selectProps.menuIsOpen})}));_();var _e=I(require("react")),qc=require("@fortawesome/free-solid-svg-icons"),Ac=require("@fortawesome/react-fontawesome"),Bc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Tc=I(require("classnames")),Cc=require("react-select"),Uc=(Cr(),ht(bt)).default,Pr=({RewaIcon:n,tokenId:t,icon:r})=>{let{isRewa:l}=(0,Bc.getIdentifierType)(t);return l?_e.default.createElement("span",{className:R.asset},n?_e.default.createElement(n,{className:R.diamond}):_e.default.createElement(Uc,{className:R.diamond})):r?_e.default.createElement("img",{src:r,className:R.asset}):_e.default.createElement(Ac.FontAwesomeIcon,{icon:qc.faDiamond,className:R.asset})},Lc=({children:n})=>_e.default.createElement("div",{className:R.wrapper},n),Rr=(n,t,r)=>l=>{var i,m;let{selectProps:u,isDisabled:p,children:b}=l,f=u.value,y=(m=(i=f==null?void 0:f.assets)==null?void 0:i.svgUrl)!=null?m:null,g=(0,_e.useMemo)(()=>{let S=String(f==null?void 0:f.token.usdPrice);return S!=null&&S.includes("$")?f==null?void 0:f.token.usdPrice:`$${f==null?void 0:f.token.usdPrice}`},[f==null?void 0:f.token.usdPrice]);return _e.default.createElement(Cc.components.ValueContainer,Ce(ue({},l),{className:R.container}),_e.default.createElement("div",{className:(0,Tc.default)(R.icon,t)},_e.default.createElement(Pr,{RewaIcon:r,rewaLabel:n,icon:y,isDisabled:p,tokenId:f==null?void 0:f.value})),_e.default.createElement("div",{className:R.payload},_e.default.createElement(Lc,null,b,(f==null?void 0:f.token.usdPrice)&&_e.default.createElement("small",{className:R.price},g))))};_();var J=I(require("react")),Nc=require("@fortawesome/free-solid-svg-icons"),Fc=require("@fortawesome/react-fontawesome"),Mc=require("@terradharitri/sdk-dapp/constants"),Dc=require("@terradharitri/sdk-dapp/UI/UsdValue"),Oc=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Pc=I(require("classnames")),Rc=require("react-select");_();_();var Io=I(require("react"));_();var zc=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zc));var jc={highlight:"dapp-core-component__styles-modules__highlight"},$c=({highlight:n,text:t=""})=>{let r=t.split(" "),l=n.toLowerCase(),i=new RegExp(`(${l})`,"gi"),m=r.map(u=>u.split(i).filter(p=>p));return Io.default.createElement("span",{className:jc.highlight},m.map((u,p)=>{let b=`${u}-${p}`;return Io.default.createElement("span",{key:b},u.map((f,y)=>{let g=f.toLowerCase()===l,S=l&&g,A=`${f}-${y}`;return S?Io.default.createElement("strong",{key:A},f):Io.default.createElement("span",{key:A},f)}))}))},{default:zr}=(Cr(),ht(bt)),jr=({RewaIcon:n,TokenTickerIcon:t,showBalanceUsdValue:r,showTokenPrice:l})=>i=>{var m,u,p,b;let{data:f,isSelected:y,isFocused:g,isDisabled:S,selectProps:A}=i,h=f,{isRewa:x}=(0,Oc.getIdentifierType)(h.value),E=h.token.assets?h.token.assets.svgUrl:null,k=vt({amount:h.token.balance,decimals:h.token.decimals||Mc.DECIMALS,addCommas:!0}),B=(u=(m=h.token)==null?void 0:m.usdPrice)==null?void 0:u.toString(),q=(b=(p=h.token)==null?void 0:p.valueUSD)==null?void 0:b.toString();return J.default.createElement("div",{"data-testid":`${i.value}-option`},J.default.createElement(Rc.components.Option,Ce(ue({},i),{className:(0,Pc.default)(R.option,{[R.selected]:y||g,[R.disabled]:S})}),J.default.createElement("div",{className:R.image},x?J.default.createElement("span",{className:R.icon},n?J.default.createElement(n,null):J.default.createElement(zr,null)):E?J.default.createElement("img",{src:E,className:R.icon}):J.default.createElement("span",{className:R.icon},J.default.createElement(Fc.FontAwesomeIcon,{icon:Nc.faDiamond,className:R.diamond}))),J.default.createElement("div",{className:R.info},J.default.createElement("div",{className:R.left},J.default.createElement("div",{className:R.ticker},J.default.createElement("span",{className:R.value},A.inputValue?J.default.createElement($c,{text:h.token.ticker,highlight:A.inputValue}):h.token.ticker),t&&J.default.createElement(t,{token:h.token})),l&&J.default.createElement("small",{className:R.price},B)),J.default.createElement("div",{className:R.right},J.default.createElement("span",{className:R.value},k),r&&q&&J.default.createElement(Dc.UsdValue,{usd:1,decimals:4,amount:q,"data-testid":"token-price-usd-value",className:R.price,addEqualSign:!1}))),J.default.createElement("div",{className:R.children},i.children)))};_();var dt=I(require("react")),Vc=I(require("classnames")),Gc=require("react-select"),$r=n=>t=>{let{selectProps:r,children:l}=t,i=r.value;return dt.default.createElement(Gc.components.SingleValue,Ce(ue({},t),{className:(0,Vc.default)(R.single,{[R.focused]:t.selectProps.menuIsOpen})}),dt.default.createElement("div",{className:R.ticker},l,n&&dt.default.createElement(n,{token:i==null?void 0:i.token})))},{Menu:Wc,Control:Zc,Input:Hc,MenuList:Yc,IndicatorsContainer:Xc,Placeholder:Jc}=Or,Kc=n=>{let{name:t,options:r,isLoading:l=!1,className:i="",noOptionsMessage:m="No Tokens",disabledOption:u,rewaLabel:p,RewaIcon:b,disabled:f,value:y,onBlur:g,onFocus:S,onChange:A,onMenuOpen:h,chainId:x,wrapperClassName:E="",showTokenPrice:k=!1,showBalanceUsdValue:B=!1,selectedTokenIconClassName:q,TokenTickerIcon:D}=n,F=(0,Fe.useRef)(null),M=[p,Yl(x)],ne=(0,Fe.useMemo)(()=>jr({rewaLabel:p,RewaIcon:b,showTokenPrice:k,showBalanceUsdValue:B,TokenTickerIcon:D}),[]),K=(0,Fe.useMemo)(()=>Rr(p,q,b),[]),Q=(0,Fe.useMemo)(()=>$r(D),[]);(0,Fe.useEffect)(()=>{let N=r.find(O=>O.value===(y==null?void 0:y.value)),L=(N==null?void 0:N.token.balance)===(y==null?void 0:y.token.balance);!N||L||A(N)},[r]);let Z=N=>M.includes(N),me=N=>{var L;let O=N.value===(u==null?void 0:u.value),oe=Z(N.value),le=Z((L=u==null?void 0:u.value)!=null?L:"");return O||oe&&le},ae=(N,L)=>{let O=N.data.token.ticker?N.data.token.ticker.toLowerCase().includes(L.toLowerCase()):!1,oe=N.data.token.name.toLowerCase().includes(L.toLowerCase());return Boolean(L)?O||oe:!0};return Fe.default.createElement("div",{"data-testid":`${t}Select`,className:`${E} ${l?"select-holder-loading":""}`},Fe.default.createElement("label",{htmlFor:t,"data-testid":"tokenIdLabel",className:R.label},"Token"),Fe.default.createElement(oc.default,{ref:F,inputId:t,name:t,options:r,openMenuOnFocus:!0,isDisabled:f,isLoading:l,value:y,isOptionDisabled:me,onBlur:g,filterOption:ae,onFocus:S,onChange:N=>{A(N),F&&F.current!==null&&F.current.blur()},isSearchable:n.isSearchable,maxMenuHeight:260,onMenuOpen:h,noOptionsMessage:()=>m,className:(0,ec.default)(R.select,i,{[R.disabled]:n.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:Wc,Control:Zc,Input:Hc,MenuList:Yc,IndicatorsContainer:Xc,ValueContainer:K,Placeholder:Jc,Option:ne,SingleValue:Q}}))};_();_();var Qc=I(require("react")),ei=I(require("classnames")),oi=({hasErrors:n,className:t,error:r,"data-testid":l})=>n?Qc.default.createElement("div",{className:(0,ei.default)(io.error,t),"data-testid":l},r):null;_();_();var mt=I(require("react")),ti=I(require("classnames"));_();var ri=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ri));var st={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"},ni=({label:n,value:t,className:r,token:l,"data-testid":i,"data-value":m})=>mt.default.createElement("div",{"data-testid":i,"data-value":m,className:(0,ti.default)(st.balance,r)},mt.default.createElement("span",{className:st.label},n,": "),mt.default.createElement("span",{className:st.value},t)," ",l==null?void 0:l.ticker),ai=({className:n,label:t,name:r,wrapperControlsClassName:l,tokenSelectProps:i,tokenBalanceProps:m,amountInputProps:u,amountErrorProps:p,maxButtonProps:b,readonly:f})=>be.default.createElement("div",{className:(0,pt.default)(Ye.amount,n)},be.default.createElement("div",{className:Ye.label},t&&be.default.createElement("label",{htmlFor:r,className:io.label,"data-testid":"amountLabel"},t),be.default.createElement(ni,ue({},m))),be.default.createElement("div",{className:(0,pt.default)(Ye.wrapper,l,{[Ye.error]:u.isInvalid||i.isInvalid||p.hasErrors,[Ye.disabled]:f})},be.default.createElement(Dp,ue({},u)),be.default.createElement("div",{className:(0,pt.default)(Ye.interaction,b.wrapperClassName)},b.isMaxButtonVisible&&be.default.createElement(Qp,ue({},b)),be.default.createElement("div",{className:Ye.select},be.default.createElement(Kc,ue({},i))))),be.default.createElement(oi,ue({},p))),li=()=>{var n,t;let{checkInvalid:r}=_p(),{tokensInfo:l,amountInfo:i,formInfo:m}=xp(),{readonly:u}=m,{networkConfig:{rewaLabel:p,chainId:b}}=Mr(),{rewaPriceInUsd:f}=gp(),{amount:y,onBlur:g,onChange:S,onMaxClicked:A,error:h,isInvalid:x,onFocus:E,maxAmountAvailable:k,isMaxClicked:B,isMaxButtonVisible:q,maxAmountMinusDust:D}=i,{allAvailableTokens:F,areTokensLoading:M,getTokens:ne,isTokenIdInvalid:K,RewaIcon:Q,nft:Z,onChangeTokenId:me,tokenDetails:ae,tokenId:N,tokenIdError:L}=l,O=F.map(pe=>({value:pe.identifier,label:String(pe.ticker),assets:pe.assets,token:pe})),{isRewa:oe}=(0,zl.getIdentifierType)(N),le=O.find(({value:pe})=>pe===N),Me={id:"tokenId",value:le,name:"tokenId",isLoading:M,options:O,isSearchable:!0,onChange:pe=>{pe&&(me(pe.value),S(""))},onMenuOpen:ne,disabled:ap("tokenId",u),error:L,isInvalid:K,rewaLabel:p,chainId:b,RewaIcon:Q},ro=(0,nt.useMemo)(()=>nt.default.createElement(Vp,{amount:y,rewaLabel:p,maxAmountMinusDust:D,tokenId:N,isMaxClicked:B}),[y,p,D,N,B]),xe={name:"amount",required:!0,value:y,placeholder:"Amount",handleBlur:g,"data-testid":"amount",handleChange:S,onFocus:E,usdPrice:oe?f:void 0,error:h,isInvalid:x,InfoDustComponent:ro},j={token:ae,inputAmount:y,onMaxClick:A,isMaxClicked:B,isMaxButtonVisible:q},G=r("amount")&&!xe.value,De={hasErrors:xe.isInvalid||Me.isInvalid||G,error:xe.error||Me.error,className:io.error,"data-testid":xe.error?"amountError":"tokenIdError"},Oe={"data-testid":`available-${(n=Z==null?void 0:Z.identifier)!=null?n:N}`,"data-value":`${k} ${(t=Z==null?void 0:Z.identifier)!=null?t:N}`,label:"Available",token:le==null?void 0:le.token,value:vt({amount:ae.balance,decimals:ae.decimals||Rl.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(Z==null?void 0:Z.type)===tp.NftEnumType.NonFungibleDCDT?null:nt.default.createElement(ai,{name:"tokenId",amountErrorProps:De,tokenSelectProps:Me,amountInputProps:xe,tokenBalanceProps:Oe,maxButtonProps:j,label:"Amount",readonly:u})};});var ge={};module.exports=Kr(ge);ce();ve(ge,so(dr()),module.exports);ve(ge,so(Gr()),module.exports);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
