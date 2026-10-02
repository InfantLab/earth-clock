(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const qh="170",Ui={ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wm=0,Ru=1,$m=2,gp=1,Xm=2,bi=3,di=0,bn=1,ai=2,cs=0,Ni=1,Tn=2,Pu=3,Du=4,qm=5,Fs=100,jm=101,Ym=102,Zm=103,Km=104,Jm=200,Qm=201,t0=202,e0=203,Xc=204,qc=205,n0=206,i0=207,s0=208,r0=209,o0=210,a0=211,l0=212,c0=213,h0=214,jc=0,Yc=1,Zc=2,Br=3,Kc=4,Jc=5,Qc=6,th=7,jh=0,u0=1,d0=2,hs=0,f0=1,p0=2,m0=3,g0=4,v0=5,_0=6,y0=7,vp=300,Hr=301,Gr=302,ll=303,eh=304,wl=306,ki=1e3,Qe=1001,nh=1002,Oe=1003,x0=1004,na=1005,Ae=1006,Ll=1007,Hs=1008,ti=1009,_p=1010,yp=1011,ko=1012,Yh=1013,js=1014,Jn=1015,Ks=1016,Zh=1017,Kh=1018,Vr=1020,xp=35902,Sp=1021,Mp=1022,tn=1023,wp=1024,bp=1025,Fr=1026,Wr=1027,Jh=1028,Qh=1029,Ep=1030,tu=1031,eu=1033,Za=33776,Ka=33777,Ja=33778,Qa=33779,ih=35840,sh=35841,rh=35842,oh=35843,ah=36196,lh=37492,ch=37496,hh=37808,uh=37809,dh=37810,fh=37811,ph=37812,mh=37813,gh=37814,vh=37815,_h=37816,yh=37817,xh=37818,Sh=37819,Mh=37820,wh=37821,tl=36492,bh=36494,Eh=36495,Tp=36283,Th=36284,Ah=36285,Ch=36286,S0=3200,M0=3201,Ap=0,w0=1,rs="",be="srgb",Jr="srgb-linear",bl="linear",ve="srgb",sr=7680,Lu=519,b0=512,E0=513,T0=514,Cp=515,A0=516,C0=517,R0=518,P0=519,cl=35044,Ee=35048,Iu="300 es",Di=2e3,hl=2001;class Js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uu=1234567;const Ao=Math.PI/180,zo=180/Math.PI;function Fi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function $e(n,t,e){return Math.max(t,Math.min(e,n))}function nu(n,t){return(n%t+t)%t}function D0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function L0(n,t,e){return n!==t?(e-n)/(t-n):0}function Co(n,t,e){return(1-e)*n+e*t}function I0(n,t,e,i){return Co(n,t,1-Math.exp(-e*i))}function U0(n,t=1){return t-Math.abs(nu(n,t*2)-t)}function N0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function F0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function O0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function k0(n,t){return n+Math.random()*(t-n)}function z0(n){return n*(.5-Math.random())}function B0(n){n!==void 0&&(Uu=n);let t=Uu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function H0(n){return n*Ao}function G0(n){return n*zo}function V0(n){return(n&n-1)===0&&n!==0}function W0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function X0(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fs={DEG2RAD:Ao,RAD2DEG:zo,generateUUID:Fi,clamp:$e,euclideanModulo:nu,mapLinear:D0,inverseLerp:L0,lerp:Co,damp:I0,pingpong:U0,smoothstep:N0,smootherstep:F0,randInt:O0,randFloat:k0,randFloatSpread:z0,seededRandom:B0,degToRad:H0,radToDeg:G0,isPowerOfTwo:V0,ceilPowerOfTwo:W0,floorPowerOfTwo:$0,setQuaternionFromProperEuler:X0,normalize:me,denormalize:Yn};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,i,s,r,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],b=s[1],S=s[4],x=s[7],D=s[2],A=s[5],R=s[8];return r[0]=o*v+a*b+l*D,r[3]=o*m+a*S+l*A,r[6]=o*f+a*x+l*R,r[1]=c*v+h*b+u*D,r[4]=c*m+h*S+u*A,r[7]=c*f+h*x+u*R,r[2]=d*v+p*b+g*D,r[5]=d*m+p*S+g*A,r[8]=d*f+p*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Il.makeScale(t,e)),this}rotate(t){return this.premultiply(Il.makeRotation(-t)),this}translate(t,e){return this.premultiply(Il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Il=new Qt;function Rp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function q0(){const n=Bo("canvas");return n.style.display="block",n}const Nu={};function yo(n){n in Nu||(Nu[n]=!0,console.warn(n))}function j0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Y0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Z0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ce={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(n.r=Oi(n.r),n.g=Oi(n.g),n.b=Oi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(n.r=Or(n.r),n.g=Or(n.g),n.b=Or(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===rs?bl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Fu=[.64,.33,.3,.6,.15,.06],Ou=[.2126,.7152,.0722],ku=[.3127,.329],zu=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[Jr]:{primaries:Fu,whitePoint:ku,transfer:bl,toXYZ:zu,fromXYZ:Bu,luminanceCoefficients:Ou,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:Fu,whitePoint:ku,transfer:ve,toXYZ:zu,fromXYZ:Bu,luminanceCoefficients:Ou,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});let rr;class K0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rr===void 0&&(rr=Bo("canvas")),rr.width=t.width,rr.height=t.height;const i=rr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=rr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Oi(e[i]/255)*255):e[i]=Oi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let J0=0;class Pp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ul(s[o].image)):r.push(Ul(s[o]))}else r=Ul(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ul(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?K0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q0=0;class en extends Js{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,i=Qe,s=Qe,r=Ae,o=Hs,a=tn,l=ti,c=en.DEFAULT_ANISOTROPY,h=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Fi(),this.name="",this.source=new Pp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case Qe:t.x=t.x<0?0:1;break;case nh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case Qe:t.y=t.y<0?0:1;break;case nh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=vp;en.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,i=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(p+1)/2,D=(f+1)/2,A=(h+d)/4,R=(u+v)/4,L=(g+m)/4;return S>x&&S>D?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=R/i):x>D?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=L/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=R/r,s=L/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tg extends Js{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new en(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Pp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends tg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Dp extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eg extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*v,b=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const D=Math.sqrt(S),A=Math.atan2(D,f*b);m=Math.sin(m*A)/D,a=Math.sin(a*A)/D}const x=a*b;if(l=l*m+d*x,c=c*m+p*x,h=h*m+g*x,u=u*m+v*x,m===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Nl.copy(this).projectOnVector(t),this.sub(Nl)}reflect(t){return this.sub(Nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nl=new C,Hu=new zi;class vs{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(so),sa.subVectors(this.max,so),or.subVectors(t.a,so),ar.subVectors(t.b,so),lr.subVectors(t.c,so),ji.subVectors(ar,or),Yi.subVectors(lr,ar),bs.subVectors(or,lr);let e=[0,-ji.z,ji.y,0,-Yi.z,Yi.y,0,-bs.z,bs.y,ji.z,0,-ji.x,Yi.z,0,-Yi.x,bs.z,0,-bs.x,-ji.y,ji.x,0,-Yi.y,Yi.x,0,-bs.y,bs.x,0];return!Fl(e,or,ar,lr,sa)||(e=[1,0,0,0,1,0,0,0,1],!Fl(e,or,ar,lr,sa))?!1:(ra.crossVectors(ji,Yi),e=[ra.x,ra.y,ra.z],Fl(e,or,ar,lr,sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yi=[new C,new C,new C,new C,new C,new C,new C,new C],Hn=new C,ia=new vs,or=new C,ar=new C,lr=new C,ji=new C,Yi=new C,bs=new C,so=new C,sa=new C,ra=new C,Es=new C;function Fl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Es.fromArray(n,r);const a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),l=t.dot(Es),c=e.dot(Es),h=i.dot(Es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ng=new vs,ro=new C,Ol=new C;class Qs{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ng.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);const e=ro.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ro,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(Ol)),this.expandByPoint(ro.copy(t.center).sub(Ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new C,kl=new C,oa=new C,Zi=new C,zl=new C,aa=new C,Bl=new C;class qo{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){kl.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(kl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(oa),a=Zi.dot(this.direction),l=-Zi.dot(oa),c=Zi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(kl).addScaledVector(oa,d),p}intersectSphere(t,e){xi.subVectors(t.center,this.origin);const i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,i,s,r){zl.subVectors(e,t),aa.subVectors(i,t),Bl.crossVectors(zl,aa);let o=this.direction.dot(Bl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,t);const l=a*this.direction.dot(aa.crossVectors(Zi,aa));if(l<0)return null;const c=a*this.direction.dot(zl.cross(Zi));if(c<0||l+c>o)return null;const h=-a*Zi.dot(Bl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,i,s,r,o,a,l,c,h,u,d,p,g,v,m){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,p,g,v,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/cr.setFromMatrixColumn(t,0).length(),r=1/cr.setFromMatrixColumn(t,1).length(),o=1/cr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ig,t,sg)}lookAt(t,e,i){const s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Ki.crossVectors(i,An),Ki.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ki.crossVectors(i,An)),Ki.normalize(),la.crossVectors(An,Ki),s[0]=Ki.x,s[4]=la.x,s[8]=An.x,s[1]=Ki.y,s[5]=la.y,s[9]=An.y,s[2]=Ki.z,s[6]=la.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],b=i[3],S=i[7],x=i[11],D=i[15],A=s[0],R=s[4],L=s[8],E=s[12],M=s[1],P=s[5],O=s[9],B=s[13],W=s[2],Y=s[6],H=s[10],K=s[14],z=s[3],J=s[7],st=s[11],lt=s[15];return r[0]=o*A+a*M+l*W+c*z,r[4]=o*R+a*P+l*Y+c*J,r[8]=o*L+a*O+l*H+c*st,r[12]=o*E+a*B+l*K+c*lt,r[1]=h*A+u*M+d*W+p*z,r[5]=h*R+u*P+d*Y+p*J,r[9]=h*L+u*O+d*H+p*st,r[13]=h*E+u*B+d*K+p*lt,r[2]=g*A+v*M+m*W+f*z,r[6]=g*R+v*P+m*Y+f*J,r[10]=g*L+v*O+m*H+f*st,r[14]=g*E+v*B+m*K+f*lt,r[3]=b*A+S*M+x*W+D*z,r[7]=b*R+S*P+x*Y+D*J,r[11]=b*L+S*O+x*H+D*st,r[15]=b*E+S*B+x*K+D*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],b=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,S=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,x=h*v*c-g*u*c+g*a*p-o*v*p-h*a*f+o*u*f,D=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,A=e*b+i*S+s*x+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=b*R,t[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*R,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*f+i*l*f)*R,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*p-i*l*p)*R,t[4]=S*R,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*R,t[8]=x*R,t[9]=(g*u*r-h*v*r-g*i*p+e*v*p+h*i*f-e*u*f)*R,t[10]=(o*v*r-g*a*r+g*i*c-e*v*c-o*i*f+e*a*f)*R,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*p-e*a*p)*R,t[12]=D*R,t[13]=(h*v*s-g*u*s+g*i*d-e*v*d-h*i*m+e*u*m)*R,t[14]=(g*a*s-o*v*s-g*i*l+e*v*l+o*i*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,b=l*c,S=l*h,x=l*u,D=i.x,A=i.y,R=i.z;return s[0]=(1-(v+f))*D,s[1]=(p+x)*D,s[2]=(g-S)*D,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(d+f))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(g+S)*R,s[9]=(m-b)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=cr.set(s[0],s[1],s[2]).length();const o=cr.set(s[4],s[5],s[6]).length(),a=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);const c=1/r,h=1/o,u=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,e.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Di){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let p,g;if(a===Di)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===hl)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Di){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,p=(i+s)*h;let g,v;if(a===Di)g=(o+r)*u,v=-2*u;else if(a===hl)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const cr=new C,Gn=new Se,ig=new C(0,0,0),sg=new C(1,1,1),Ki=new C,la=new C,An=new C,Gu=new Se,Vu=new zi;class pi{constructor(t=0,e=0,i=0,s=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class iu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rg=0;const Wu=new C,hr=new zi,Si=new Se,ca=new C,oo=new C,og=new C,ag=new zi,$u=new C(1,0,0),Xu=new C(0,1,0),qu=new C(0,0,1),ju={type:"added"},lg={type:"removed"},ur={type:"childadded",child:null},Hl={type:"childremoved",child:null};class ke extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new C,e=new pi,i=new zi,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Qt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis($u,t)}rotateY(t){return this.rotateOnAxis(Xu,t)}rotateZ(t){return this.rotateOnAxis(qu,t)}translateOnAxis(t,e){return Wu.copy(t).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($u,t)}translateY(t){return this.translateOnAxis(Xu,t)}translateZ(t){return this.translateOnAxis(qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ca.copy(t):ca.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(oo,ca,this.up):Si.lookAt(ca,oo,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Si),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ju),ur.child=t,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lg),Hl.child=t,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ju),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,t,og),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,ag,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ke.DEFAULT_UP=new C(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new C,Mi=new C,Gl=new C,wi=new C,dr=new C,fr=new C,Yu=new C,Vl=new C,Wl=new C,$l=new C,Xl=new xe,ql=new xe,jl=new xe;class zn{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Vn.subVectors(t,e),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Vn.subVectors(s,e),Mi.subVectors(i,e),Gl.subVectors(t,e);const o=Vn.dot(Vn),a=Vn.dot(Mi),l=Vn.dot(Gl),c=Mi.dot(Mi),h=Mi.dot(Gl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Xl.setScalar(0),ql.setScalar(0),jl.setScalar(0),Xl.fromBufferAttribute(t,e),ql.fromBufferAttribute(t,i),jl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xl,r.x),o.addScaledVector(ql,r.y),o.addScaledVector(jl,r.z),o}static isFrontFacing(t,e,i,s){return Vn.subVectors(i,e),Mi.subVectors(t,e),Vn.cross(Mi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Vn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return zn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;dr.subVectors(s,i),fr.subVectors(r,i),Vl.subVectors(t,i);const l=dr.dot(Vl),c=fr.dot(Vl);if(l<=0&&c<=0)return e.copy(i);Wl.subVectors(t,s);const h=dr.dot(Wl),u=fr.dot(Wl);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(dr,o);$l.subVectors(t,r);const p=dr.dot($l),g=fr.dot($l);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(fr,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Yu.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Yu,a);const f=1/(m+v+d);return o=v*f,a=d*f,e.copy(i).addScaledVector(dr,o).addScaledVector(fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Yl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ce.workingColorSpace){if(t=nu(t,1),e=$e(e,0,1),i=$e(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Yl(o,r,t+1/3),this.g=Yl(o,r,t),this.b=Yl(o,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const i=Lp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Or(t.r),this.g=Or(t.g),this.b=Or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return ce.fromWorkingColorSpace(rn.copy(this),t),Math.round($e(rn.r*255,0,255))*65536+Math.round($e(rn.g*255,0,255))*256+Math.round($e(rn.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(rn.copy(this),e);const i=rn.r,s=rn.g,r=rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=be){ce.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,i=rn.g,s=rn.b;return t!==be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(ha);const i=Co(Ji.h,ha.h,e),s=Co(Ji.s,ha.s,e),r=Co(Ji.l,ha.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Wt;Wt.NAMES=Lp;let cg=0;class _s extends Js{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Fi(),this.name="",this.blending=Ni,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xc&&(i.blendSrc=this.blendSrc),this.blendDst!==qc&&(i.blendDst=this.blendDst),this.blendEquation!==Fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ke extends _s{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ua=hg();function hg(){const n=new ArrayBuffer(4),t=new Float32Array(n),e=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function ug(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=$e(n,-65504,65504),ua.floatView[0]=n;const t=ua.uint32View[0],e=t>>23&511;return ua.baseTable[e]+((t&8388607)>>ua.shiftTable[e])}const Ip={toHalfFloat:ug},Ie=new C,da=new Nt;class Kt{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cl,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),t}}class Up extends Kt{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Np extends Kt{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ne extends Kt{constructor(t,e,i){super(new Float32Array(t),e,i)}}let dg=0;const Nn=new Se,Zl=new ke,pr=new C,Cn=new vs,ao=new vs,We=new C;class Ot extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rp(t)?Np:Up)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,i){return Nn.makeTranslation(t,e,i),this.applyMatrix4(Nn),this}scale(t,e,i){return Nn.makeScale(t,e,i),this.applyMatrix4(Nn),this}lookAt(t){return Zl.lookAt(t),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ao.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(Cn.min,ao.min),Cn.expandByPoint(We),We.addVectors(Cn.max,ao.max),Cn.expandByPoint(We)):(Cn.expandByPoint(ao.min),Cn.expandByPoint(ao.max))}Cn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(t,c),We.add(pr)),s=Math.max(s,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new C,l[L]=new C;const c=new C,h=new C,u=new C,d=new Nt,p=new Nt,g=new Nt,v=new C,m=new C;function f(L,E,M){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(v),a[E].add(v),a[M].add(v),l[L].add(m),l[E].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,E=b.length;L<E;++L){const M=b[L],P=M.start,O=M.count;for(let B=P,W=P+O;B<W;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new C,x=new C,D=new C,A=new C;function R(L){D.fromBufferAttribute(s,L),A.copy(D);const E=a[L];S.copy(E),S.sub(D.multiplyScalar(D.dot(E))).normalize(),x.crossVectors(A,E);const P=x.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,P)}for(let L=0,E=b.length;L<E;++L){const M=b[L],P=M.start,O=M.count;for(let B=P,W=P+O;B<W;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Kt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ot,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zu=new Se,Ts=new qo,fa=new Qs,Ku=new C,pa=new C,ma=new C,ga=new C,Kl=new C,va=new C,Ju=new C,_a=new C;class Jt extends ke{constructor(t=new Ot,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Kl.fromBufferAttribute(u,t),o?va.addScaledVector(Kl,h):va.addScaledVector(Kl.sub(e),h))}e.add(va)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(r),Ts.copy(t.ray).recast(t.near),!(fa.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(fa,Ku)===null||Ts.origin.distanceToSquared(Ku)>(t.far-t.near)**2))&&(Zu.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(Zu),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,D=S;x<D;x+=3){const A=a.getX(x),R=a.getX(x+1),L=a.getX(x+2);s=ya(this,f,t,i,c,h,u,A,R,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const b=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=ya(this,o,t,i,c,h,u,b,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,D=S;x<D;x+=3){const A=x,R=x+1,L=x+2;s=ya(this,f,t,i,c,h,u,A,R,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const b=m,S=m+1,x=m+2;s=ya(this,o,t,i,c,h,u,b,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function fg(n,t,e,i,s,r,o,a){let l;if(t.side===bn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===di,a),l===null)return null;_a.copy(a),_a.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(_a);return c<e.near||c>e.far?null:{distance:c,point:_a.clone(),object:n}}function ya(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,pa),n.getVertexPosition(l,ma),n.getVertexPosition(c,ga);const h=fg(n,t,e,i,pa,ma,ga,Ju);if(h){const u=new C;zn.getBarycoord(Ju,pa,ma,ga,u),s&&(h.uv=zn.getInterpolatedAttribute(s,a,l,c,u,new Nt)),r&&(h.uv1=zn.getInterpolatedAttribute(r,a,l,c,u,new Nt)),o&&(h.normal=zn.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new C,materialIndex:0};zn.getNormal(pa,ma,ga,d.normal),h.face=d,h.barycoord=u}return h}class jo extends Ot{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(v,m,f,b,S,x,D,A,R,L,E){const M=x/R,P=D/L,O=x/2,B=D/2,W=A/2,Y=R+1,H=L+1;let K=0,z=0;const J=new C;for(let st=0;st<H;st++){const lt=st*P-B;for(let _t=0;_t<Y;_t++){const Rt=_t*M-O;J[v]=Rt*b,J[m]=lt*S,J[f]=W,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[f]=A>0?1:-1,h.push(J.x,J.y,J.z),u.push(_t/R),u.push(1-st/L),K+=1}}for(let st=0;st<L;st++)for(let lt=0;lt<R;lt++){const _t=d+lt+Y*st,Rt=d+lt+Y*(st+1),q=d+(lt+1)+Y*(st+1),X=d+(lt+1)+Y*st;l.push(_t,Rt,X),l.push(Rt,q,X),z+=6}a.addGroup(p,z,E),p+=z,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $r(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function cn(n){const t={};for(let e=0;e<n.length;e++){const i=$r(n[e]);for(const s in i)t[s]=i[s]}return t}function pg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Fp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const su={clone:$r,merge:cn};var mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class de extends _s{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$r(t.uniforms),this.uniformsGroups=pg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Op extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new C,Qu=new Nt,td=new Nt;class kn extends Op{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,Qu,td),e.subVectors(td,Qu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mr=-90,gr=1;class vg extends ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(mr,gr,t,e);s.layers=this.layers,this.add(s);const r=new kn(mr,gr,t,e);r.layers=this.layers,this.add(r);const o=new kn(mr,gr,t,e);o.layers=this.layers,this.add(o);const a=new kn(mr,gr,t,e);a.layers=this.layers,this.add(a);const l=new kn(mr,gr,t,e);l.layers=this.layers,this.add(l);const c=new kn(mr,gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ru extends en{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _g extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ru(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ae}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new jo(5,5,5),r=new de({name:"CubemapFromEquirect",uniforms:$r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:cs});r.uniforms.tEquirect.value=e;const o=new Jt(s,r),a=e.minFilter;return e.minFilter===Hs&&(e.minFilter=Ae),new vg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Jl=new C,yg=new C,xg=new Qt;class is{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Jl.subVectors(i,e).cross(yg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Jl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xg.getNormalMatrix(t),s=this.coplanarPoint(Jl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new Qs,xa=new C;class ou{constructor(t=new is,e=new is,i=new is,s=new is,r=new is,o=new is){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Di){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],b=s[13],S=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,m-p,x-f).normalize(),i[1].setComponents(l+r,d+c,m+p,x+f).normalize(),i[2].setComponents(l+o,d+h,m+g,x+b).normalize(),i[3].setComponents(l-o,d-h,m-g,x-b).normalize(),i[4].setComponents(l-a,d-u,m-v,x-S).normalize(),e===Di)i[5].setComponents(l+a,d+u,m+v,x+S).normalize();else if(e===hl)i[5].setComponents(a,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(xa.x=s.normal.x>0?t.max.x:t.min.x,xa.y=s.normal.y>0?t.max.y:t.min.y,xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Sg(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Bi extends Ot{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const b=f*d-o;for(let S=0;S<c;S++){const x=S*u-r;g.push(x,-b,0),v.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const S=b+c*f,x=b+c*(f+1),D=b+1+c*(f+1),A=b+1+c*f;p.push(S,x,A),p.push(x,D,A)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ug=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ng=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$g=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ev=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,x_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,G_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Mg,alphahash_pars_fragment:wg,alphamap_fragment:bg,alphamap_pars_fragment:Eg,alphatest_fragment:Tg,alphatest_pars_fragment:Ag,aomap_fragment:Cg,aomap_pars_fragment:Rg,batching_pars_vertex:Pg,batching_vertex:Dg,begin_vertex:Lg,beginnormal_vertex:Ig,bsdfs:Ug,iridescence_fragment:Ng,bumpmap_pars_fragment:Fg,clipping_planes_fragment:Og,clipping_planes_pars_fragment:kg,clipping_planes_pars_vertex:zg,clipping_planes_vertex:Bg,color_fragment:Hg,color_pars_fragment:Gg,color_pars_vertex:Vg,color_vertex:Wg,common:$g,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:qg,displacementmap_pars_vertex:jg,displacementmap_vertex:Yg,emissivemap_fragment:Zg,emissivemap_pars_fragment:Kg,colorspace_fragment:Jg,colorspace_pars_fragment:Qg,envmap_fragment:tv,envmap_common_pars_fragment:ev,envmap_pars_fragment:nv,envmap_pars_vertex:iv,envmap_physical_pars_fragment:pv,envmap_vertex:sv,fog_vertex:rv,fog_pars_vertex:ov,fog_fragment:av,fog_pars_fragment:lv,gradientmap_pars_fragment:cv,lightmap_pars_fragment:hv,lights_lambert_fragment:uv,lights_lambert_pars_fragment:dv,lights_pars_begin:fv,lights_toon_fragment:mv,lights_toon_pars_fragment:gv,lights_phong_fragment:vv,lights_phong_pars_fragment:_v,lights_physical_fragment:yv,lights_physical_pars_fragment:xv,lights_fragment_begin:Sv,lights_fragment_maps:Mv,lights_fragment_end:wv,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:Ev,logdepthbuf_pars_vertex:Tv,logdepthbuf_vertex:Av,map_fragment:Cv,map_pars_fragment:Rv,map_particle_fragment:Pv,map_particle_pars_fragment:Dv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Iv,morphinstance_vertex:Uv,morphcolor_vertex:Nv,morphnormal_vertex:Fv,morphtarget_pars_vertex:Ov,morphtarget_vertex:kv,normal_fragment_begin:zv,normal_fragment_maps:Bv,normal_pars_fragment:Hv,normal_pars_vertex:Gv,normal_vertex:Vv,normalmap_pars_fragment:Wv,clearcoat_normal_fragment_begin:$v,clearcoat_normal_fragment_maps:Xv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:jv,opaque_fragment:Yv,packing:Zv,premultiplied_alpha_fragment:Kv,project_vertex:Jv,dithering_fragment:Qv,dithering_pars_fragment:t_,roughnessmap_fragment:e_,roughnessmap_pars_fragment:n_,shadowmap_pars_fragment:i_,shadowmap_pars_vertex:s_,shadowmap_vertex:r_,shadowmask_pars_fragment:o_,skinbase_vertex:a_,skinning_pars_vertex:l_,skinning_vertex:c_,skinnormal_vertex:h_,specularmap_fragment:u_,specularmap_pars_fragment:d_,tonemapping_fragment:f_,tonemapping_pars_fragment:p_,transmission_fragment:m_,transmission_pars_fragment:g_,uv_pars_fragment:v_,uv_pars_vertex:__,uv_vertex:y_,worldpos_vertex:x_,background_vert:S_,background_frag:M_,backgroundCube_vert:w_,backgroundCube_frag:b_,cube_vert:E_,cube_frag:T_,depth_vert:A_,depth_frag:C_,distanceRGBA_vert:R_,distanceRGBA_frag:P_,equirect_vert:D_,equirect_frag:L_,linedashed_vert:I_,linedashed_frag:U_,meshbasic_vert:N_,meshbasic_frag:F_,meshlambert_vert:O_,meshlambert_frag:k_,meshmatcap_vert:z_,meshmatcap_frag:B_,meshnormal_vert:H_,meshnormal_frag:G_,meshphong_vert:V_,meshphong_frag:W_,meshphysical_vert:$_,meshphysical_frag:X_,meshtoon_vert:q_,meshtoon_frag:j_,points_vert:Y_,points_frag:Z_,shadow_vert:K_,shadow_frag:J_,sprite_vert:Q_,sprite_frag:ty},pt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},wn={basic:{uniforms:cn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:cn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:cn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:cn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:cn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:cn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:cn([pt.points,pt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:cn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:cn([pt.common,pt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:cn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:cn([pt.sprite,pt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:cn([pt.common,pt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:cn([pt.lights,pt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};wn.physical={uniforms:cn([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Sa={r:0,b:0,g:0},Cs=new pi,ey=new Se;function ny(n,t,e,i,s,r,o){const a=new Wt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function v(b){let S=!1;const x=g(b);x===null?f(a,l):x&&x.isColor&&(f(x,1),S=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===wl)?(h===void 0&&(h=new Jt(new jo(1,1,1),new de({name:"BackgroundCubeMaterial",uniforms:$r(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Cs.copy(S.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler(Cs)),h.material.toneMapped=ce.getTransfer(x.colorSpace)!==ve,(u!==x||d!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Jt(new Bi(2,2),new de({name:"BackgroundMaterial",uniforms:$r(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ce.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,S){b.getRGB(Sa,Fp(n)),i.buffers.color.setClear(Sa.r,Sa.g,Sa.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:v,addToRenderList:m}}function iy(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,P,O,B,W){let Y=!1;const H=u(B,O,P);r!==H&&(r=H,c(r.object)),Y=p(M,B,O,W),Y&&g(M,B,O,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(M,P,O,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,P,O){const B=O.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let Y=W[P.id];Y===void 0&&(Y={},W[P.id]=Y);let H=Y[B];return H===void 0&&(H=d(l()),Y[B]=H),H}function d(M){const P=[],O=[],B=[];for(let W=0;W<e;W++)P[W]=0,O[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,P,O,B){const W=r.attributes,Y=P.attributes;let H=0;const K=O.getAttributes();for(const z in K)if(K[z].location>=0){const st=W[z];let lt=Y[z];if(lt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),st===void 0||st.attribute!==lt||lt&&st.data!==lt.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function g(M,P,O,B){const W={},Y=P.attributes;let H=0;const K=O.getAttributes();for(const z in K)if(K[z].location>=0){let st=Y[z];st===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(st=M.instanceColor));const lt={};lt.attribute=st,st&&st.data&&(lt.data=st.data),W[z]=lt,H++}r.attributes=W,r.attributesNum=H,r.index=B}function v(){const M=r.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const O=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;O[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),W[M]!==P&&(n.vertexAttribDivisor(M,P),W[M]=P)}function b(){const M=r.newAttributes,P=r.enabledAttributes;for(let O=0,B=P.length;O<B;O++)P[O]!==M[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function S(M,P,O,B,W,Y,H){H===!0?n.vertexAttribIPointer(M,P,O,W,Y):n.vertexAttribPointer(M,P,O,B,W,Y)}function x(M,P,O,B){v();const W=B.attributes,Y=O.getAttributes(),H=P.defaultAttributeValues;for(const K in Y){const z=Y[K];if(z.location>=0){let J=W[K];if(J===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const st=J.normalized,lt=J.itemSize,_t=t.get(J);if(_t===void 0)continue;const Rt=_t.buffer,q=_t.type,X=_t.bytesPerElement,et=q===n.INT||q===n.UNSIGNED_INT||J.gpuType===Yh;if(J.isInterleavedBufferAttribute){const it=J.data,mt=it.stride,bt=J.offset;if(it.isInstancedInterleavedBuffer){for(let xt=0;xt<z.locationSize;xt++)f(z.location+xt,it.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let xt=0;xt<z.locationSize;xt++)m(z.location+xt);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let xt=0;xt<z.locationSize;xt++)S(z.location+xt,lt/z.locationSize,q,st,mt*X,(bt+lt/z.locationSize*xt)*X,et)}else{if(J.isInstancedBufferAttribute){for(let it=0;it<z.locationSize;it++)f(z.location+it,J.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let it=0;it<z.locationSize;it++)m(z.location+it);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let it=0;it<z.locationSize;it++)S(z.location+it,lt/z.locationSize,q,st,lt*X,lt/z.locationSize*it*X,et)}}else if(H!==void 0){const st=H[K];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(z.location,st);break;case 3:n.vertexAttrib3fv(z.location,st);break;case 4:n.vertexAttrib4fv(z.location,st);break;default:n.vertexAttrib1fv(z.location,st)}}}}b()}function D(){L();for(const M in i){const P=i[M];for(const O in P){const B=P[O];for(const W in B)h(B[W].object),delete B[W];delete P[O]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const O in P){const B=P[O];for(const W in B)h(B[W].object),delete B[W];delete P[O]}delete i[M.id]}function R(M){for(const P in i){const O=i[P];if(O[M.id]===void 0)continue;const B=O[M.id];for(const W in B)h(B[W].object),delete B[W];delete O[M.id]}}function L(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function sy(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ry(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==tn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===Ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ti&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Jn&&!L)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:D,maxSamples:A}}function oy(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new is,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:i,S=b*4;let x=f.clippingState||null;l.value=x,x=h(g,d,S,p);for(let D=0;D!==S;++D)x[D]=e[D];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,x=p;S!==v;++S,x+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function ay(n){let t=new WeakMap;function e(o,a){return a===ll?o.mapping=Hr:a===eh&&(o.mapping=Gr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ll||a===eh)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _g(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Xr extends Op{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Dr=4,ed=[.125,.215,.35,.446,.526,.582],Os=20,Ql=new Xr,nd=new Wt;let tc=null,ec=0,nc=0,ic=!1;const Is=(1+Math.sqrt(5))/2,vr=1/Is,id=[new C(-Is,vr,0),new C(Is,vr,0),new C(-vr,0,Is),new C(vr,0,Is),new C(0,Is,-vr),new C(0,Is,vr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class sd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tc,ec,nc),this._renderer.xr.enabled=ic,t.scissorTest=!1,Ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hr||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:Ks,format:tn,colorSpace:Jr,depthBuffer:!1},s=rd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(r)),this._blurMaterial=cy(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,Ql)}_sceneToCubeUV(t,e,i,s){const a=new kn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(nd),h.toneMapping=hs,h.autoClear=!1;const p=new Ke({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new Jt(new jo,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(nd),v=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const S=this._cubeSize;Ma(s,b*S,f>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Hr||t.mapping===Gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ma(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ql)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=id[(s-r-1)%id.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Os-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Os;m>Os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Os}`);const f=[];let b=0;for(let R=0;R<Os;++R){const L=R/v,E=Math.exp(-L*L/2);f.push(E),R===0?b+=E:R<m&&(b+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const x=this._sizeLods[s],D=3*x*(s>S-Dr?s-S+Dr:0),A=4*(this._cubeSize-x);Ma(e,D,A,3*x,2*x),l.setRenderTarget(e),l.render(u,Ql)}}function ly(n){const t=[],e=[],i=[];let s=n;const r=n-Dr+1+ed.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Dr?l=ed[o-n+Dr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,b=new Float32Array(v*g*p),S=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,L=A>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(E,v*g*A),S.set(d,m*g*A);const M=[A,A,A,A,A,A];x.set(M,f*g*A)}const D=new Ot;D.setAttribute("position",new Kt(b,v)),D.setAttribute("uv",new Kt(S,m)),D.setAttribute("faceIndex",new Kt(x,f)),t.push(D),s>Dr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rd(n,t,e){const i=new fi(n,t,e);return i.texture.mapping=wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function cy(n,t,e){const i=new Float32Array(Os),s=new C(0,1,0);return new de({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function od(){return new de({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function ad(){return new de({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ll||l===eh,h=l===Hr||l===Gr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new sd(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new sd(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function uy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&yo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dy(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let S=0,x=b.length;S<x;S+=3){const D=b[S+0],A=b[S+1],R=b[S+2];d.push(D,A,A,R,R,D)}}else if(g!==void 0){const b=g.array;v=g.version;for(let S=0,x=b.length/3-1;S<x;S+=3){const D=S+0,A=S+1,R=S+2;d.push(D,A,A,R,R,D)}}else return;const m=new(Rp(d)?Np:Up)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function fy(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*v[b];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function py(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function my(n,t,e){const i=new WeakMap,s=new xe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let D=a.attributes.position.count*x,A=1;D>t.maxTextureSize&&(A=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const R=new Float32Array(D*A*4*u),L=new Dp(R,D,A,u);L.type=Jn,L.needsUpdate=!0;const E=x*4;for(let P=0;P<u;P++){const O=f[P],B=b[P],W=S[P],Y=D*A*4*P;for(let H=0;H<O.count;H++){const K=H*E;g===!0&&(s.fromBufferAttribute(O,H),R[Y+K+0]=s.x,R[Y+K+1]=s.y,R[Y+K+2]=s.z,R[Y+K+3]=0),v===!0&&(s.fromBufferAttribute(B,H),R[Y+K+4]=s.x,R[Y+K+5]=s.y,R[Y+K+6]=s.z,R[Y+K+7]=0),m===!0&&(s.fromBufferAttribute(W,H),R[Y+K+8]=s.x,R[Y+K+9]=s.y,R[Y+K+10]=s.z,R[Y+K+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new Nt(D,A)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function gy(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class zp extends en{constructor(t,e,i,s,r,o,a,l,c,h=Fr){if(h!==Fr&&h!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Fr&&(i=js),i===void 0&&h===Wr&&(i=Vr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bp=new en,ld=new zp(1,1),Hp=new Dp,Gp=new eg,Vp=new ru,cd=[],hd=[],ud=new Float32Array(16),dd=new Float32Array(9),fd=new Float32Array(4);function Qr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=cd[s];if(r===void 0&&(r=new Float32Array(s),cd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function He(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function El(n,t){let e=hd[t];e===void 0&&(e=new Int32Array(t),hd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function _y(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),He(e,t)}}function yy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),He(e,t)}}function xy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),He(e,t)}}function Sy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Be(e,i))return;fd.set(i),n.uniformMatrix2fv(this.addr,!1,fd),He(e,i)}}function My(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Be(e,i))return;dd.set(i),n.uniformMatrix3fv(this.addr,!1,dd),He(e,i)}}function wy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Be(e,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),He(e,i)}}function by(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ey(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),He(e,t)}}function Ty(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),He(e,t)}}function Ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),He(e,t)}}function Cy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ry(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),He(e,t)}}function Py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),He(e,t)}}function Dy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),He(e,t)}}function Ly(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ld.compareFunction=Cp,r=ld):r=Bp,e.setTexture2D(t||r,s)}function Iy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Gp,s)}function Uy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Vp,s)}function Ny(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Hp,s)}function Fy(n){switch(n){case 5126:return vy;case 35664:return _y;case 35665:return yy;case 35666:return xy;case 35674:return Sy;case 35675:return My;case 35676:return wy;case 5124:case 35670:return by;case 35667:case 35671:return Ey;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Cy;case 36294:return Ry;case 36295:return Py;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Oy(n,t){n.uniform1fv(this.addr,t)}function ky(n,t){const e=Qr(t,this.size,2);n.uniform2fv(this.addr,e)}function zy(n,t){const e=Qr(t,this.size,3);n.uniform3fv(this.addr,e)}function By(n,t){const e=Qr(t,this.size,4);n.uniform4fv(this.addr,e)}function Hy(n,t){const e=Qr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Gy(n,t){const e=Qr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Vy(n,t){const e=Qr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Wy(n,t){n.uniform1iv(this.addr,t)}function $y(n,t){n.uniform2iv(this.addr,t)}function Xy(n,t){n.uniform3iv(this.addr,t)}function qy(n,t){n.uniform4iv(this.addr,t)}function jy(n,t){n.uniform1uiv(this.addr,t)}function Yy(n,t){n.uniform2uiv(this.addr,t)}function Zy(n,t){n.uniform3uiv(this.addr,t)}function Ky(n,t){n.uniform4uiv(this.addr,t)}function Jy(n,t,e){const i=this.cache,s=t.length,r=El(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Bp,r[o])}function Qy(n,t,e){const i=this.cache,s=t.length,r=El(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Gp,r[o])}function tx(n,t,e){const i=this.cache,s=t.length,r=El(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vp,r[o])}function ex(n,t,e){const i=this.cache,s=t.length,r=El(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hp,r[o])}function nx(n){switch(n){case 5126:return Oy;case 35664:return ky;case 35665:return zy;case 35666:return By;case 35674:return Hy;case 35675:return Gy;case 35676:return Vy;case 5124:case 35670:return Wy;case 35667:case 35671:return $y;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return jy;case 36294:return Yy;case 36295:return Zy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return ex}}class ix{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Fy(e.type)}}class sx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nx(e.type)}}class rx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function pd(n,t){n.seq.push(t),n.map[t.id]=t}function ox(n,t,e){const i=n.name,s=i.length;for(sc.lastIndex=0;;){const r=sc.exec(i),o=sc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pd(e,c===void 0?new ix(a,n,t):new sx(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new rx(a),pd(e,u)),e=u}}}class el{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ox(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function md(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const ax=37297;let lx=0;function cx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const gd=new Qt;function hx(n){ce._getMatrix(gd,ce.workingColorSpace,n);const t=`mat3( ${gd.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(n)){case bl:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function vd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+cx(n.getShaderSource(t),o)}else return s}function ux(n,t){const e=hx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dx(n,t){let e;switch(t){case f0:e="Linear";break;case p0:e="Reinhard";break;case m0:e="Cineon";break;case g0:e="ACESFilmic";break;case _0:e="AgX";break;case y0:e="Neutral";break;case v0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wa=new C;function fx(){ce.getLuminanceCoefficients(wa);const n=wa.x.toFixed(4),t=wa.y.toFixed(4),e=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function px(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function mx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function xo(n){return n!==""}function _d(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(n){return n.replace(vx,yx)}const _x=new Map;function yx(n,t){let e=ee[t];if(e===void 0){const i=_x.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rh(e)}const xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(n){return n.replace(xx,Sx)}function Sx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Mx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function wx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hr:case Gr:t="ENVMAP_TYPE_CUBE";break;case wl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bx(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Gr&&(t="ENVMAP_MODE_REFRACTION"),t}function Ex(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jh:t="ENVMAP_BLENDING_MULTIPLY";break;case u0:t="ENVMAP_BLENDING_MIX";break;case d0:t="ENVMAP_BLENDING_ADD";break}return t}function Tx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ax(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Mx(e),c=wx(e),h=bx(e),u=Ex(e),d=Tx(e),p=px(e),g=mx(r),v=s.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xo).join(`
`),f.length>0&&(f+=`
`)):(m=[Sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),f=[Sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hs?"#define TONE_MAPPING":"",e.toneMapping!==hs?ee.tonemapping_pars_fragment:"",e.toneMapping!==hs?dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,ux("linearToOutputTexel",e.outputColorSpace),fx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xo).join(`
`)),o=Rh(o),o=_d(o,e),o=yd(o,e),a=Rh(a),a=_d(a,e),a=yd(a,e),o=xd(o),a=xd(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=b+m+o,x=b+f+a,D=md(s,s.VERTEX_SHADER,S),A=md(s,s.FRAGMENT_SHADER,x);s.attachShader(v,D),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(A).trim();let Y=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,A);else{const K=vd(s,D,"vertex"),z=vd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+K+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||W==="")&&(H=!1);H&&(P.diagnostics={runnable:Y,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(D),s.deleteShader(A),L=new el(s,v),E=gx(s,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,ax)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=A,this}let Cx=0;class Rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Px(t),e.set(t,i)),i}}class Px{constructor(t){this.id=Cx++,this.code=t,this.usedTimes=0}}function Dx(n,t,e,i,s,r,o){const a=new iu,l=new Rx,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,O,B){const W=O.fog,Y=B.geometry,H=E.isMeshStandardMaterial?O.environment:null,K=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),z=K&&K.mapping===wl?K.image.height:null,J=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const st=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,lt=st!==void 0?st.length:0;let _t=0;Y.morphAttributes.position!==void 0&&(_t=1),Y.morphAttributes.normal!==void 0&&(_t=2),Y.morphAttributes.color!==void 0&&(_t=3);let Rt,q,X,et;if(J){const Yt=wn[J];Rt=Yt.vertexShader,q=Yt.fragmentShader}else Rt=E.vertexShader,q=E.fragmentShader,l.update(E),X=l.getVertexShaderID(E),et=l.getFragmentShaderID(E);const it=n.getRenderTarget(),mt=n.state.buffers.depth.getReversed(),bt=B.isInstancedMesh===!0,xt=B.isBatchedMesh===!0,qt=!!E.map,Ct=!!E.matcap,Ht=!!K,I=!!E.aoMap,jt=!!E.lightMap,Dt=!!E.bumpMap,St=!!E.normalMap,dt=!!E.displacementMap,Lt=!!E.emissiveMap,rt=!!E.metalnessMap,T=!!E.roughnessMap,y=E.anisotropy>0,k=E.clearcoat>0,j=E.dispersion>0,Q=E.iridescence>0,Z=E.sheen>0,gt=E.transmission>0,ot=y&&!!E.anisotropyMap,ht=k&&!!E.clearcoatMap,kt=k&&!!E.clearcoatNormalMap,nt=k&&!!E.clearcoatRoughnessMap,_=Q&&!!E.iridescenceMap,Mt=Q&&!!E.iridescenceThicknessMap,wt=Z&&!!E.sheenColorMap,vt=Z&&!!E.sheenRoughnessMap,zt=!!E.specularMap,Ut=!!E.specularColorMap,Vt=!!E.specularIntensityMap,U=gt&&!!E.transmissionMap,ut=gt&&!!E.thicknessMap,$=!!E.gradientMap,tt=!!E.alphaMap,ft=E.alphaTest>0,ct=!!E.alphaHash,It=!!E.extensions;let le=hs;E.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(le=n.toneMapping);const he={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:Rt,fragmentShader:q,defines:E.defines,customVertexShaderID:X,customFragmentShaderID:et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:xt,batchingColor:xt&&B._colorsTexture!==null,instancing:bt,instancingColor:bt&&B.instanceColor!==null,instancingMorph:bt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Jr,alphaToCoverage:!!E.alphaToCoverage,map:qt,matcap:Ct,envMap:Ht,envMapMode:Ht&&K.mapping,envMapCubeUVHeight:z,aoMap:I,lightMap:jt,bumpMap:Dt,normalMap:St,displacementMap:d&&dt,emissiveMap:Lt,normalMapObjectSpace:St&&E.normalMapType===w0,normalMapTangentSpace:St&&E.normalMapType===Ap,metalnessMap:rt,roughnessMap:T,anisotropy:y,anisotropyMap:ot,clearcoat:k,clearcoatMap:ht,clearcoatNormalMap:kt,clearcoatRoughnessMap:nt,dispersion:j,iridescence:Q,iridescenceMap:_,iridescenceThicknessMap:Mt,sheen:Z,sheenColorMap:wt,sheenRoughnessMap:vt,specularMap:zt,specularColorMap:Ut,specularIntensityMap:Vt,transmission:gt,transmissionMap:U,thicknessMap:ut,gradientMap:$,opaque:E.transparent===!1&&E.blending===Ni&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:ft,alphaHash:ct,combine:E.combine,mapUv:qt&&v(E.map.channel),aoMapUv:I&&v(E.aoMap.channel),lightMapUv:jt&&v(E.lightMap.channel),bumpMapUv:Dt&&v(E.bumpMap.channel),normalMapUv:St&&v(E.normalMap.channel),displacementMapUv:dt&&v(E.displacementMap.channel),emissiveMapUv:Lt&&v(E.emissiveMap.channel),metalnessMapUv:rt&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:ot&&v(E.anisotropyMap.channel),clearcoatMapUv:ht&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:kt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:vt&&v(E.sheenRoughnessMap.channel),specularMapUv:zt&&v(E.specularMap.channel),specularColorMapUv:Ut&&v(E.specularColorMap.channel),specularIntensityMapUv:Vt&&v(E.specularIntensityMap.channel),transmissionMapUv:U&&v(E.transmissionMap.channel),thicknessMapUv:ut&&v(E.thicknessMap.channel),alphaMapUv:tt&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(St||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(qt||tt),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:mt,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:_t,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:qt&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===ve,decodeVideoTextureEmissive:Lt&&E.emissiveMap.isVideoTexture===!0&&ce.getTransfer(E.emissiveMap.colorSpace)===ve,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ai,flipSided:E.side===bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:It&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&E.extensions.multiDraw===!0||xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(b(M,E),S(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const M=g[E.type];let P;if(M){const O=wn[M];P=su.clone(O.uniforms)}else P=E.uniforms;return P}function D(E,M){let P;for(let O=0,B=h.length;O<B;O++){const W=h[O];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Ax(n,M,E,r),h.push(P)),P}function A(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:D,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:L}}function Lx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ix(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Md(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function wd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,p,g,v,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function a(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Ix),i.length>1&&i.sort(d||Md),s.length>1&&s.sort(d||Md)}function h(){for(let u=t,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ux(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new wd,n.set(i,[o])):s>=r.length?(o=new wd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Nx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Wt};break;case"SpotLight":e={position:new C,direction:new C,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function Fx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Ox=0;function kx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function zx(n){const t=new Nx,e=Fx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const s=new C,r=new Se,o=new Se;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,b=0,S=0,x=0,D=0,A=0,R=0;c.sort(kx);for(let E=0,M=c.length;E<M;E++){const P=c[E],O=P.color,B=P.intensity,W=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],B);R++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,z=e.get(P);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(O).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[v]=H;const K=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,K.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[v]=K.matrix,P.castShadow){const z=e.get(P);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=Y,x++}v++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(O).multiplyScalar(B),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const K=P.shadow,z=e.get(P);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(B),H.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[f]=H,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==b||L.numPointShadows!==S||L.numSpotShadows!==x||L.numSpotMaps!==D||L.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=b,L.numPointShadows=S,L.numSpotShadows=x,L.numSpotMaps=D,L.numLightProbes=R,i.version=Ox++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const S=c[f];if(S.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function bd(n){const t=new zx(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Bx(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new bd(n),t.set(s,[a])):r>=o.length?(a=new bd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Hx extends _s{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=S0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gx extends _s{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $x(n,t,e){let i=new ou;const s=new Nt,r=new Nt,o=new xe,a=new Hx({depthPacking:M0}),l=new Gx,c={},h=e.maxTextureSize,u={[di]:bn,[bn]:di,[ai]:ai},d=new de({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Vx,fragmentShader:Wx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gp;let f=this.type;this.render=function(A,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(cs),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=f!==bi&&this.type===bi,W=f===bi&&this.type!==bi;for(let Y=0,H=A.length;Y<H;Y++){const K=A[Y],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const J=z.getFrameExtents();if(s.multiply(J),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,z.mapSize.y=r.y)),z.map===null||B===!0||W===!0){const lt=this.type!==bi?{minFilter:Oe,magFilter:Oe}:{};z.map!==null&&z.map.dispose(),z.map=new fi(s.x,s.y,lt),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const st=z.getViewportCount();for(let lt=0;lt<st;lt++){const _t=z.getViewport(lt);o.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),O.viewport(o),z.updateMatrices(K,lt),i=z.getFrustum(),x(R,L,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===bi&&b(z,L),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,P)};function b(A,R){const L=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,L,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,L,p,v,null)}function S(A,R,L,E){let M=null;const P=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=M.uuid,B=R.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let Y=W[B];Y===void 0&&(Y=M.clone(),W[B]=Y,R.addEventListener("dispose",D)),M=Y}if(M.visible=R.visible,M.wireframe=R.wireframe,E===bi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=L}return M}function x(A,R,L,E,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===bi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const B=t.update(A),W=A.material;if(Array.isArray(W)){const Y=B.groups;for(let H=0,K=Y.length;H<K;H++){const z=Y[H],J=W[z.materialIndex];if(J&&J.visible){const st=S(A,J,E,M);A.onBeforeShadow(n,A,R,L,B,st,z),n.renderBufferDirect(L,null,B,st,A,z),A.onAfterShadow(n,A,R,L,B,st,z)}}}else if(W.visible){const Y=S(A,W,E,M);A.onBeforeShadow(n,A,R,L,B,Y,null),n.renderBufferDirect(L,null,B,Y,A,null),A.onAfterShadow(n,A,R,L,B,Y,null)}}const O=A.children;for(let B=0,W=O.length;B<W;B++)x(O[B],R,L,E,M)}function D(A){A.target.removeEventListener("dispose",D);for(const L in c){const E=c[L],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Xx={[jc]:Yc,[Zc]:Qc,[Kc]:th,[Br]:Jc,[Yc]:jc,[Qc]:Zc,[th]:Kc,[Jc]:Br};function qx(n,t){function e(){let U=!1;const ut=new xe;let $=null;const tt=new xe(0,0,0,0);return{setMask:function(ft){$!==ft&&!U&&(n.colorMask(ft,ft,ft,ft),$=ft)},setLocked:function(ft){U=ft},setClear:function(ft,ct,It,le,he){he===!0&&(ft*=le,ct*=le,It*=le),ut.set(ft,ct,It,le),tt.equals(ut)===!1&&(n.clearColor(ft,ct,It,le),tt.copy(ut))},reset:function(){U=!1,$=null,tt.set(-1,0,0,0)}}}function i(){let U=!1,ut=!1,$=null,tt=null,ft=null;return{setReversed:function(ct){if(ut!==ct){const It=t.get("EXT_clip_control");ut?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const le=ft;ft=null,this.setClear(le)}ut=ct},getReversed:function(){return ut},setTest:function(ct){ct?it(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function(ct){$!==ct&&!U&&(n.depthMask(ct),$=ct)},setFunc:function(ct){if(ut&&(ct=Xx[ct]),tt!==ct){switch(ct){case jc:n.depthFunc(n.NEVER);break;case Yc:n.depthFunc(n.ALWAYS);break;case Zc:n.depthFunc(n.LESS);break;case Br:n.depthFunc(n.LEQUAL);break;case Kc:n.depthFunc(n.EQUAL);break;case Jc:n.depthFunc(n.GEQUAL);break;case Qc:n.depthFunc(n.GREATER);break;case th:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=ct}},setLocked:function(ct){U=ct},setClear:function(ct){ft!==ct&&(ut&&(ct=1-ct),n.clearDepth(ct),ft=ct)},reset:function(){U=!1,$=null,tt=null,ft=null,ut=!1}}}function s(){let U=!1,ut=null,$=null,tt=null,ft=null,ct=null,It=null,le=null,he=null;return{setTest:function(Yt){U||(Yt?it(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(Yt){ut!==Yt&&!U&&(n.stencilMask(Yt),ut=Yt)},setFunc:function(Yt,ye,Ft){($!==Yt||tt!==ye||ft!==Ft)&&(n.stencilFunc(Yt,ye,Ft),$=Yt,tt=ye,ft=Ft)},setOp:function(Yt,ye,Ft){(ct!==Yt||It!==ye||le!==Ft)&&(n.stencilOp(Yt,ye,Ft),ct=Yt,It=ye,le=Ft)},setLocked:function(Yt){U=Yt},setClear:function(Yt){he!==Yt&&(n.clearStencil(Yt),he=Yt)},reset:function(){U=!1,ut=null,$=null,tt=null,ft=null,ct=null,It=null,le=null,he=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,b=null,S=null,x=null,D=null,A=null,R=new Wt(0,0,0),L=0,E=!1,M=null,P=null,O=null,B=null,W=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=K>=2);let J=null,st={};const lt=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),Rt=new xe().fromArray(lt),q=new xe().fromArray(_t);function X(U,ut,$,tt){const ft=new Uint8Array(4),ct=n.createTexture();n.bindTexture(U,ct),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<$;It++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(ut+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return ct}const et={};et[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(n.DEPTH_TEST),o.setFunc(Br),Dt(!1),St(Ru),it(n.CULL_FACE),I(cs);function it(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function mt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function bt(U,ut){return u[U]!==ut?(n.bindFramebuffer(U,ut),u[U]=ut,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ut),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function xt(U,ut){let $=p,tt=!1;if(U){$=d.get(ut),$===void 0&&($=[],d.set(ut,$));const ft=U.textures;if($.length!==ft.length||$[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,It=ft.length;ct<It;ct++)$[ct]=n.COLOR_ATTACHMENT0+ct;$.length=ft.length,tt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,tt=!0);tt&&n.drawBuffers($)}function qt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const Ct={[Fs]:n.FUNC_ADD,[jm]:n.FUNC_SUBTRACT,[Ym]:n.FUNC_REVERSE_SUBTRACT};Ct[Zm]=n.MIN,Ct[Km]=n.MAX;const Ht={[Jm]:n.ZERO,[Qm]:n.ONE,[t0]:n.SRC_COLOR,[Xc]:n.SRC_ALPHA,[o0]:n.SRC_ALPHA_SATURATE,[s0]:n.DST_COLOR,[n0]:n.DST_ALPHA,[e0]:n.ONE_MINUS_SRC_COLOR,[qc]:n.ONE_MINUS_SRC_ALPHA,[r0]:n.ONE_MINUS_DST_COLOR,[i0]:n.ONE_MINUS_DST_ALPHA,[a0]:n.CONSTANT_COLOR,[l0]:n.ONE_MINUS_CONSTANT_COLOR,[c0]:n.CONSTANT_ALPHA,[h0]:n.ONE_MINUS_CONSTANT_ALPHA};function I(U,ut,$,tt,ft,ct,It,le,he,Yt){if(U===cs){v===!0&&(mt(n.BLEND),v=!1);return}if(v===!1&&(it(n.BLEND),v=!0),U!==qm){if(U!==m||Yt!==E){if((f!==Fs||x!==Fs)&&(n.blendEquation(n.FUNC_ADD),f=Fs,x=Fs),Yt)switch(U){case Ni:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tn:n.blendFunc(n.ONE,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ni:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Du:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,S=null,D=null,A=null,R.set(0,0,0),L=0,m=U,E=Yt}return}ft=ft||ut,ct=ct||$,It=It||tt,(ut!==f||ft!==x)&&(n.blendEquationSeparate(Ct[ut],Ct[ft]),f=ut,x=ft),($!==b||tt!==S||ct!==D||It!==A)&&(n.blendFuncSeparate(Ht[$],Ht[tt],Ht[ct],Ht[It]),b=$,S=tt,D=ct,A=It),(le.equals(R)===!1||he!==L)&&(n.blendColor(le.r,le.g,le.b,he),R.copy(le),L=he),m=U,E=!1}function jt(U,ut){U.side===ai?mt(n.CULL_FACE):it(n.CULL_FACE);let $=U.side===bn;ut&&($=!$),Dt($),U.blending===Ni&&U.transparent===!1?I(cs):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const tt=U.stencilWrite;a.setTest(tt),tt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function St(U){U!==Wm?(it(n.CULL_FACE),U!==P&&(U===Ru?n.cullFace(n.BACK):U===$m?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),P=U}function dt(U){U!==O&&(H&&n.lineWidth(U),O=U)}function Lt(U,ut,$){U?(it(n.POLYGON_OFFSET_FILL),(B!==ut||W!==$)&&(n.polygonOffset(ut,$),B=ut,W=$)):mt(n.POLYGON_OFFSET_FILL)}function rt(U){U?it(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function T(U){U===void 0&&(U=n.TEXTURE0+Y-1),J!==U&&(n.activeTexture(U),J=U)}function y(U,ut,$){$===void 0&&(J===null?$=n.TEXTURE0+Y-1:$=J);let tt=st[$];tt===void 0&&(tt={type:void 0,texture:void 0},st[$]=tt),(tt.type!==U||tt.texture!==ut)&&(J!==$&&(n.activeTexture($),J=$),n.bindTexture(U,ut||et[U]),tt.type=U,tt.texture=ut)}function k(){const U=st[J];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(U){Rt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Rt.copy(U))}function vt(U){q.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function zt(U,ut){let $=c.get(ut);$===void 0&&($=new WeakMap,c.set(ut,$));let tt=$.get(U);tt===void 0&&(tt=n.getUniformBlockIndex(ut,U.name),$.set(U,tt))}function Ut(U,ut){const tt=c.get(ut).get(U);l.get(ut)!==tt&&(n.uniformBlockBinding(ut,tt,U.__bindingPointIndex),l.set(ut,tt))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},J=null,st={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,b=null,S=null,x=null,D=null,A=null,R=new Wt(0,0,0),L=0,E=!1,M=null,P=null,O=null,B=null,W=null,Rt.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:mt,bindFramebuffer:bt,drawBuffers:xt,useProgram:qt,setBlending:I,setMaterial:jt,setFlipSided:Dt,setCullFace:St,setLineWidth:dt,setPolygonOffset:Lt,setScissorTest:rt,activeTexture:T,bindTexture:y,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:_,texImage3D:Mt,updateUBOMapping:zt,uniformBlockBinding:Ut,texStorage2D:kt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:gt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ht,scissor:wt,viewport:vt,reset:Vt}}function Ed(n,t,e,i){const s=jx(i);switch(e){case Sp:return n*t;case wp:return n*t;case bp:return n*t*2;case Jh:return n*t/s.components*s.byteLength;case Qh:return n*t/s.components*s.byteLength;case Ep:return n*t*2/s.components*s.byteLength;case tu:return n*t*2/s.components*s.byteLength;case Mp:return n*t*3/s.components*s.byteLength;case tn:return n*t*4/s.components*s.byteLength;case eu:return n*t*4/s.components*s.byteLength;case Za:case Ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ja:case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sh:case oh:return Math.max(n,16)*Math.max(t,8)/4;case ih:case rh:return Math.max(n,8)*Math.max(t,8)/2;case ah:case lh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ch:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case dh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ph:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case mh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case gh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case vh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _h:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case yh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case xh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case tl:case bh:case Eh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Tp:case Th:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ah:case Ch:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jx(n){switch(n){case ti:case _p:return{byteLength:1,components:1};case ko:case yp:case Ks:return{byteLength:2,components:1};case Zh:case Kh:return{byteLength:2,components:4};case js:case Yh:case Jn:return{byteLength:4,components:1};case xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Yx(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return p?new OffscreenCanvas(T,y):Bo("canvas")}function v(T,y,k){let j=1;const Q=rt(T);if((Q.width>k||Q.height>k)&&(j=k/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(j*Q.width),gt=Math.floor(j*Q.height);u===void 0&&(u=g(Z,gt));const ot=y?g(Z,gt):u;return ot.width=Z,ot.height=gt,ot.getContext("2d").drawImage(T,0,0,Z,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+gt+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){n.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,y,k,j,Q=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=y;if(y===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),y===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),k===n.UNSIGNED_INT&&(Z=n.RGB32UI),k===n.BYTE&&(Z=n.RGB8I),k===n.SHORT&&(Z=n.RGB16I),k===n.INT&&(Z=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),k===n.UNSIGNED_INT&&(Z=n.RGBA32UI),k===n.BYTE&&(Z=n.RGBA8I),k===n.SHORT&&(Z=n.RGBA16I),k===n.INT&&(Z=n.RGBA32I)),y===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),y===n.RGBA){const gt=Q?bl:ce.getTransfer(j);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=gt===ve?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(T,y){let k;return T?y===null||y===js||y===Vr?k=n.DEPTH24_STENCIL8:y===Jn?k=n.DEPTH32F_STENCIL8:y===ko&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===js||y===Vr?k=n.DEPTH_COMPONENT24:y===Jn?k=n.DEPTH_COMPONENT32F:y===ko&&(k=n.DEPTH_COMPONENT16),k}function D(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Oe&&T.minFilter!==Ae?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),L(y),y.isVideoTexture&&h.delete(y)}function R(T){const y=T.target;y.removeEventListener("dispose",R),M(y)}function L(T){const y=i.get(T);if(y.__webglInit===void 0)return;const k=T.source,j=d.get(k);if(j){const Q=j[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(T),Object.keys(j).length===0&&d.delete(k)}i.remove(T)}function E(T){const y=i.get(T);n.deleteTexture(y.__webglTexture);const k=T.source,j=d.get(k);delete j[y.__cacheKey],o.memory.textures--}function M(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let Q=0;Q<y.__webglFramebuffer[j].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[j][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=T.textures;for(let j=0,Q=k.length;j<Q;j++){const Z=i.get(k[j]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(k[j])}i.remove(T)}let P=0;function O(){P=0}function B(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function W(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Y(T,y){const k=i.get(T);if(T.isVideoTexture&&dt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,T,y);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function H(T,y){const k=i.get(T);if(T.version>0&&k.__version!==T.version){q(k,T,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function K(T,y){const k=i.get(T);if(T.version>0&&k.__version!==T.version){q(k,T,y);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function z(T,y){const k=i.get(T);if(T.version>0&&k.__version!==T.version){X(k,T,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}const J={[ki]:n.REPEAT,[Qe]:n.CLAMP_TO_EDGE,[nh]:n.MIRRORED_REPEAT},st={[Oe]:n.NEAREST,[x0]:n.NEAREST_MIPMAP_NEAREST,[na]:n.NEAREST_MIPMAP_LINEAR,[Ae]:n.LINEAR,[Ll]:n.LINEAR_MIPMAP_NEAREST,[Hs]:n.LINEAR_MIPMAP_LINEAR},lt={[b0]:n.NEVER,[P0]:n.ALWAYS,[E0]:n.LESS,[Cp]:n.LEQUAL,[T0]:n.EQUAL,[R0]:n.GEQUAL,[A0]:n.GREATER,[C0]:n.NOTEQUAL};function _t(T,y){if(y.type===Jn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ae||y.magFilter===Ll||y.magFilter===na||y.magFilter===Hs||y.minFilter===Ae||y.minFilter===Ll||y.minFilter===na||y.minFilter===Hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,J[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,J[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,J[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,st[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,lt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Oe||y.minFilter!==na&&y.minFilter!==Hs||y.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Rt(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const j=y.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const Z=W(y);if(Z!==T.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[Z].usedTimes++;const gt=Q[T.__cacheKey];gt!==void 0&&(Q[T.__cacheKey].usedTimes--,gt.usedTimes===0&&E(y)),T.__cacheKey=Z,T.__webglTexture=Q[Z].texture}return k}function q(T,y,k){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);const Q=Rt(T,y),Z=y.source;e.bindTexture(j,T.__webglTexture,n.TEXTURE0+k);const gt=i.get(Z);if(Z.version!==gt.__version||Q===!0){e.activeTexture(n.TEXTURE0+k);const ot=ce.getPrimaries(ce.workingColorSpace),ht=y.colorSpace===rs?null:ce.getPrimaries(y.colorSpace),kt=y.colorSpace===rs||ot===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let nt=v(y.image,!1,s.maxTextureSize);nt=Lt(y,nt);const _=r.convert(y.format,y.colorSpace),Mt=r.convert(y.type);let wt=S(y.internalFormat,_,Mt,y.colorSpace,y.isVideoTexture);_t(j,y);let vt;const zt=y.mipmaps,Ut=y.isVideoTexture!==!0,Vt=gt.__version===void 0||Q===!0,U=Z.dataReady,ut=D(y,nt);if(y.isDepthTexture)wt=x(y.format===Wr,y.type),Vt&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,wt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,wt,nt.width,nt.height,0,_,Mt,null));else if(y.isDataTexture)if(zt.length>0){Ut&&Vt&&e.texStorage2D(n.TEXTURE_2D,ut,wt,zt[0].width,zt[0].height);for(let $=0,tt=zt.length;$<tt;$++)vt=zt[$],Ut?U&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,vt.width,vt.height,_,Mt,vt.data):e.texImage2D(n.TEXTURE_2D,$,wt,vt.width,vt.height,0,_,Mt,vt.data);y.generateMipmaps=!1}else Ut?(Vt&&e.texStorage2D(n.TEXTURE_2D,ut,wt,nt.width,nt.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,_,Mt,nt.data)):e.texImage2D(n.TEXTURE_2D,0,wt,nt.width,nt.height,0,_,Mt,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ut&&Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,wt,zt[0].width,zt[0].height,nt.depth);for(let $=0,tt=zt.length;$<tt;$++)if(vt=zt[$],y.format!==tn)if(_!==null)if(Ut){if(U)if(y.layerUpdates.size>0){const ft=Ed(vt.width,vt.height,y.format,y.type);for(const ct of y.layerUpdates){const It=vt.data.subarray(ct*ft/vt.data.BYTES_PER_ELEMENT,(ct+1)*ft/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,ct,vt.width,vt.height,1,_,It)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,vt.width,vt.height,nt.depth,_,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,wt,vt.width,vt.height,nt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,vt.width,vt.height,nt.depth,_,Mt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,wt,vt.width,vt.height,nt.depth,0,_,Mt,vt.data)}else{Ut&&Vt&&e.texStorage2D(n.TEXTURE_2D,ut,wt,zt[0].width,zt[0].height);for(let $=0,tt=zt.length;$<tt;$++)vt=zt[$],y.format!==tn?_!==null?Ut?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,vt.width,vt.height,_,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,wt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?U&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,vt.width,vt.height,_,Mt,vt.data):e.texImage2D(n.TEXTURE_2D,$,wt,vt.width,vt.height,0,_,Mt,vt.data)}else if(y.isDataArrayTexture)if(Ut){if(Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,wt,nt.width,nt.height,nt.depth),U)if(y.layerUpdates.size>0){const $=Ed(nt.width,nt.height,y.format,y.type);for(const tt of y.layerUpdates){const ft=nt.data.subarray(tt*$/nt.data.BYTES_PER_ELEMENT,(tt+1)*$/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,nt.width,nt.height,1,_,Mt,ft)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,_,Mt,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,nt.width,nt.height,nt.depth,0,_,Mt,nt.data);else if(y.isData3DTexture)Ut?(Vt&&e.texStorage3D(n.TEXTURE_3D,ut,wt,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,_,Mt,nt.data)):e.texImage3D(n.TEXTURE_3D,0,wt,nt.width,nt.height,nt.depth,0,_,Mt,nt.data);else if(y.isFramebufferTexture){if(Vt)if(Ut)e.texStorage2D(n.TEXTURE_2D,ut,wt,nt.width,nt.height);else{let $=nt.width,tt=nt.height;for(let ft=0;ft<ut;ft++)e.texImage2D(n.TEXTURE_2D,ft,wt,$,tt,0,_,Mt,null),$>>=1,tt>>=1}}else if(zt.length>0){if(Ut&&Vt){const $=rt(zt[0]);e.texStorage2D(n.TEXTURE_2D,ut,wt,$.width,$.height)}for(let $=0,tt=zt.length;$<tt;$++)vt=zt[$],Ut?U&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,_,Mt,vt):e.texImage2D(n.TEXTURE_2D,$,wt,_,Mt,vt);y.generateMipmaps=!1}else if(Ut){if(Vt){const $=rt(nt);e.texStorage2D(n.TEXTURE_2D,ut,wt,$.width,$.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_,Mt,nt)}else e.texImage2D(n.TEXTURE_2D,0,wt,_,Mt,nt);m(y)&&f(j),gt.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function X(T,y,k){if(y.image.length!==6)return;const j=Rt(T,y),Q=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);const Z=i.get(Q);if(Q.version!==Z.__version||j===!0){e.activeTexture(n.TEXTURE0+k);const gt=ce.getPrimaries(ce.workingColorSpace),ot=y.colorSpace===rs?null:ce.getPrimaries(y.colorSpace),ht=y.colorSpace===rs||gt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const kt=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,_=[];for(let tt=0;tt<6;tt++)!kt&&!nt?_[tt]=v(y.image[tt],!0,s.maxCubemapSize):_[tt]=nt?y.image[tt].image:y.image[tt],_[tt]=Lt(y,_[tt]);const Mt=_[0],wt=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),zt=S(y.internalFormat,wt,vt,y.colorSpace),Ut=y.isVideoTexture!==!0,Vt=Z.__version===void 0||j===!0,U=Q.dataReady;let ut=D(y,Mt);_t(n.TEXTURE_CUBE_MAP,y);let $;if(kt){Ut&&Vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,zt,Mt.width,Mt.height);for(let tt=0;tt<6;tt++){$=_[tt].mipmaps;for(let ft=0;ft<$.length;ft++){const ct=$[ft];y.format!==tn?wt!==null?Ut?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,ct.width,ct.height,wt,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,zt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,ct.width,ct.height,wt,vt,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,zt,ct.width,ct.height,0,wt,vt,ct.data)}}}else{if($=y.mipmaps,Ut&&Vt){$.length>0&&ut++;const tt=rt(_[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,zt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(nt){Ut?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,_[tt].width,_[tt].height,wt,vt,_[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,zt,_[tt].width,_[tt].height,0,wt,vt,_[tt].data);for(let ft=0;ft<$.length;ft++){const It=$[ft].image[tt].image;Ut?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,It.width,It.height,wt,vt,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,zt,It.width,It.height,0,wt,vt,It.data)}}else{Ut?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt,vt,_[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,zt,wt,vt,_[tt]);for(let ft=0;ft<$.length;ft++){const ct=$[ft];Ut?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,wt,vt,ct.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,zt,wt,vt,ct.image[tt])}}}m(y)&&f(n.TEXTURE_CUBE_MAP),Z.__version=Q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function et(T,y,k,j,Q,Z){const gt=r.convert(k.format,k.colorSpace),ot=r.convert(k.type),ht=S(k.internalFormat,gt,ot,k.colorSpace),kt=i.get(y),nt=i.get(k);if(nt.__renderTarget=y,!kt.__hasExternalTextures){const _=Math.max(1,y.width>>Z),Mt=Math.max(1,y.height>>Z);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,ht,_,Mt,y.depth,0,gt,ot,null):e.texImage2D(Q,Z,ht,_,Mt,0,gt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),St(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Q,nt.__webglTexture,0,Dt(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Q,nt.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(T,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){const j=y.depthTexture,Q=j&&j.isDepthTexture?j.type:null,Z=x(y.stencilBuffer,Q),gt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=Dt(y);St(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,Z,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,Z,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Z,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,T)}else{const j=y.textures;for(let Q=0;Q<j.length;Q++){const Z=j[Q],gt=r.convert(Z.format,Z.colorSpace),ot=r.convert(Z.type),ht=S(Z.internalFormat,gt,ot,Z.colorSpace),kt=Dt(y);k&&St(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,ht,y.width,y.height):St(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,kt,ht,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ht,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const Q=j.__webglTexture,Z=Dt(y);if(y.depthTexture.format===Fr)St(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Wr)St(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function bt(T){const y=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=j}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");mt(y.__webglFramebuffer,T)}else if(k){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),it(y.__webglDepthbuffer[j],T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),it(y.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(T,y,k){const j=i.get(T);y!==void 0&&et(j.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&bt(T)}function qt(T){const y=T.texture,k=i.get(T),j=i.get(y);T.addEventListener("dispose",R);const Q=T.textures,Z=T.isWebGLCubeRenderTarget===!0,gt=Q.length>1;if(gt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ot]=[];for(let ht=0;ht<y.mipmaps.length;ht++)k.__webglFramebuffer[ot][ht]=n.createFramebuffer()}else k.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)k.__webglFramebuffer[ot]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(gt)for(let ot=0,ht=Q.length;ot<ht;ot++){const kt=i.get(Q[ot]);kt.__webglTexture===void 0&&(kt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&St(T)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const ht=Q[ot];k.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ot]);const kt=r.convert(ht.format,ht.colorSpace),nt=r.convert(ht.type),_=S(ht.internalFormat,kt,nt,ht.colorSpace,T.isXRRenderTarget===!0),Mt=Dt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,_,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,k.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),it(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),_t(n.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)et(k.__webglFramebuffer[ot][ht],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ht);else et(k.__webglFramebuffer[ot],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(y)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ot=0,ht=Q.length;ot<ht;ot++){const kt=Q[ot],nt=i.get(kt);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),_t(n.TEXTURE_2D,kt),et(k.__webglFramebuffer,T,kt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m(kt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,j.__webglTexture),_t(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)et(k.__webglFramebuffer[ht],T,y,n.COLOR_ATTACHMENT0,ot,ht);else et(k.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,ot,0);m(y)&&f(ot),e.unbindTexture()}T.depthBuffer&&bt(T)}function Ct(T){const y=T.textures;for(let k=0,j=y.length;k<j;k++){const Q=y[k];if(m(Q)){const Z=b(T),gt=i.get(Q).__webglTexture;e.bindTexture(Z,gt),f(Z),e.unbindTexture()}}}const Ht=[],I=[];function jt(T){if(T.samples>0){if(St(T)===!1){const y=T.textures,k=T.width,j=T.height;let Q=n.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(T),ot=y.length>1;if(ot)for(let ht=0;ht<y.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ht=0;ht<y.length;ht++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[ht]);const kt=i.get(y[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,kt,0)}n.blitFramebuffer(0,0,k,j,0,0,k,j,Q,n.NEAREST),l===!0&&(Ht.length=0,I.length=0,Ht.push(n.COLOR_ATTACHMENT0+ht),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ht.push(Z),I.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ht=0;ht<y.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,gt.__webglColorRenderbuffer[ht]);const kt=i.get(y[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Dt(T){return Math.min(s.maxSamples,T.samples)}function St(T){const y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function dt(T){const y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function Lt(T,y){const k=T.colorSpace,j=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Jr&&k!==rs&&(ce.getTransfer(k)===ve?(j!==tn||Q!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=z,this.rebindTextures=xt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=St}function Zx(n,t){function e(i,s=rs){let r;const o=ce.getTransfer(s);if(i===ti)return n.UNSIGNED_BYTE;if(i===Zh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_p)return n.BYTE;if(i===yp)return n.SHORT;if(i===ko)return n.UNSIGNED_SHORT;if(i===Yh)return n.INT;if(i===js)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===Ks)return n.HALF_FLOAT;if(i===Sp)return n.ALPHA;if(i===Mp)return n.RGB;if(i===tn)return n.RGBA;if(i===wp)return n.LUMINANCE;if(i===bp)return n.LUMINANCE_ALPHA;if(i===Fr)return n.DEPTH_COMPONENT;if(i===Wr)return n.DEPTH_STENCIL;if(i===Jh)return n.RED;if(i===Qh)return n.RED_INTEGER;if(i===Ep)return n.RG;if(i===tu)return n.RG_INTEGER;if(i===eu)return n.RGBA_INTEGER;if(i===Za||i===Ka||i===Ja||i===Qa)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ih||i===sh||i===rh||i===oh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ih)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ah||i===lh||i===ch)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ah||i===lh)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ch)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===vh||i===_h||i===yh||i===xh||i===Sh||i===Mh||i===wh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ph)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_h)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tl||i===bh||i===Eh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===tl)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tp||i===Th||i===Ah||i===Ch)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===tl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ah)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ch)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Kx extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ie extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jx={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ie;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new de({vertexShader:Qx,fragmentShader:tS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Bi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nS extends Js{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new eS,m=e.getContextAttributes();let f=null,b=null;const S=[],x=[],D=new Nt;let A=null;const R=new kn;R.viewport=new xe;const L=new kn;L.viewport=new xe;const E=[R,L],M=new Kx;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let X=S[q];return X===void 0&&(X=new rc,S[q]=X),X.getTargetRaySpace()},this.getControllerGrip=function(q){let X=S[q];return X===void 0&&(X=new rc,S[q]=X),X.getGripSpace()},this.getHand=function(q){let X=S[q];return X===void 0&&(X=new rc,S[q]=X),X.getHandSpace()};function B(q){const X=x.indexOf(q.inputSource);if(X===-1)return;const et=S[X];et!==void 0&&(et.update(q.inputSource,q.frame,c||o),et.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<S.length;q++){const X=x[q];X!==null&&(x[q]=null,S[q].disconnect(X))}P=null,O=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,b=null,Rt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new fi(p.framebufferWidth,p.framebufferHeight,{format:tn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,et=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=m.stencil?Wr:Fr,et=m.stencil?Vr:js);const mt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(mt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new fi(d.textureWidth,d.textureHeight,{format:tn,type:ti,depthTexture:new zp(d.textureWidth,d.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(q){for(let X=0;X<q.removed.length;X++){const et=q.removed[X],it=x.indexOf(et);it>=0&&(x[it]=null,S[it].disconnect(et))}for(let X=0;X<q.added.length;X++){const et=q.added[X];let it=x.indexOf(et);if(it===-1){for(let bt=0;bt<S.length;bt++)if(bt>=x.length){x.push(et),it=bt;break}else if(x[bt]===null){x[bt]=et,it=bt;break}if(it===-1)break}const mt=S[it];mt&&mt.connect(et)}}const H=new C,K=new C;function z(q,X,et){H.setFromMatrixPosition(X.matrixWorld),K.setFromMatrixPosition(et.matrixWorld);const it=H.distanceTo(K),mt=X.projectionMatrix.elements,bt=et.projectionMatrix.elements,xt=mt[14]/(mt[10]-1),qt=mt[14]/(mt[10]+1),Ct=(mt[9]+1)/mt[5],Ht=(mt[9]-1)/mt[5],I=(mt[8]-1)/mt[0],jt=(bt[8]+1)/bt[0],Dt=xt*I,St=xt*jt,dt=it/(-I+jt),Lt=dt*-I;if(X.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Lt),q.translateZ(dt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),mt[10]===-1)q.projectionMatrix.copy(X.projectionMatrix),q.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const rt=xt+dt,T=qt+dt,y=Dt-Lt,k=St+(it-Lt),j=Ct*qt/T*rt,Q=Ht*qt/T*rt;q.projectionMatrix.makePerspective(y,k,j,Q,rt,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,X){X===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(X.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let X=q.near,et=q.far;v.texture!==null&&(v.depthNear>0&&(X=v.depthNear),v.depthFar>0&&(et=v.depthFar)),M.near=L.near=R.near=X,M.far=L.far=R.far=et,(P!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,O=M.far),R.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const it=q.parent,mt=M.cameras;J(M,it);for(let bt=0;bt<mt.length;bt++)J(mt[bt],it);mt.length===2?z(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),st(q,M,it)};function st(q,X,et){et===null?q.matrix.copy(X.matrixWorld):(q.matrix.copy(et.matrixWorld),q.matrix.invert(),q.matrix.multiply(X.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(X.projectionMatrix),q.projectionMatrixInverse.copy(X.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let lt=null;function _t(q,X){if(h=X.getViewerPose(c||o),g=X,h!==null){const et=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let it=!1;et.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let bt=0;bt<et.length;bt++){const xt=et[bt];let qt=null;if(p!==null)qt=p.getViewport(xt);else{const Ht=u.getViewSubImage(d,xt);qt=Ht.viewport,bt===0&&(t.setRenderTargetTextures(b,Ht.colorTexture,d.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(b))}let Ct=E[bt];Ct===void 0&&(Ct=new kn,Ct.layers.enable(bt),Ct.viewport=new xe,E[bt]=Ct),Ct.matrix.fromArray(xt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(xt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(qt.x,qt.y,qt.width,qt.height),bt===0&&(M.matrix.copy(Ct.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(Ct)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const bt=u.getDepthInformation(et[0]);bt&&bt.isValid&&bt.texture&&v.init(t,bt,s.renderState)}}for(let et=0;et<S.length;et++){const it=x[et],mt=S[et];it!==null&&mt!==void 0&&mt.update(it,X,c||o)}lt&&lt(q,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}const Rt=new kp;Rt.setAnimationLoop(_t),this.setAnimationLoop=function(q){lt=q},this.dispose=function(){}}}const Rs=new pi,iS=new Se;function sS(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Fp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===bn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===bn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),S=b.envMap,x=b.envMapRotation;S&&(m.envMap.value=S,Rs.copy(x),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),m.envMapRotation.value.setFromMatrix4(iS.makeRotationFromEuler(Rs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rS(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const x=S.program;i.uniformBlockBinding(b,x)}function c(b,S){let x=s[b.id];x===void 0&&(g(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",m));const D=S.program;i.updateUBOMapping(b,D);const A=t.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function h(b){const S=u();b.__bindingPointIndex=S;const x=n.createBuffer(),D=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=s[b.id],x=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,R=x.length;A<R;A++){const L=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,M=L.length;E<M;E++){const P=L[E];if(p(P,A,E,D)===!0){const O=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let Y=0;Y<B.length;Y++){const H=B[Y],K=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,O+W,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,S,x,D){const A=b.value,R=S+"_"+x;if(D[R]===void 0)return typeof A=="number"||typeof A=="boolean"?D[R]=A:D[R]=A.clone(),!0;{const L=D[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return D[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(b){const S=b.uniforms;let x=0;const D=16;for(let R=0,L=S.length;R<L;R++){const E=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,P=E.length;M<P;M++){const O=E[M],B=Array.isArray(O.value)?O.value:[O.value];for(let W=0,Y=B.length;W<Y;W++){const H=B[W],K=v(H),z=x%D,J=z%K.boundary,st=z+J;x+=J,st!==0&&D-st<K.storage&&(x+=D-st),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=K.storage}}}const A=x%D;return A>0&&(x+=D-A),b.__size=x,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class oS{constructor(t={}){const{canvas:e=q0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=hs,this.toneMappingExposure=1;const x=this;let D=!1,A=0,R=0,L=null,E=-1,M=null;const P=new xe,O=new xe;let B=null;const W=new Wt(0);let Y=0,H=e.width,K=e.height,z=1,J=null,st=null;const lt=new xe(0,0,H,K),_t=new xe(0,0,H,K);let Rt=!1;const q=new ou;let X=!1,et=!1;const it=new Se,mt=new Se,bt=new C,xt=new xe,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Ht(){return L===null?z:1}let I=i;function jt(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qh}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ct,!1),I===null){const N="webgl2";if(I=jt(N,w),I===null)throw jt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Dt,St,dt,Lt,rt,T,y,k,j,Q,Z,gt,ot,ht,kt,nt,_,Mt,wt,vt,zt,Ut,Vt,U;function ut(){Dt=new uy(I),Dt.init(),Ut=new Zx(I,Dt),St=new ry(I,Dt,t,Ut),dt=new qx(I,Dt),St.reverseDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),Lt=new py(I),rt=new Lx,T=new Yx(I,Dt,dt,rt,St,Ut,Lt),y=new ay(x),k=new hy(x),j=new Sg(I),Vt=new iy(I,j),Q=new dy(I,j,Lt,Vt),Z=new gy(I,Q,j,Lt),wt=new my(I,St,T),nt=new oy(rt),gt=new Dx(x,y,k,Dt,St,Vt,nt),ot=new sS(x,rt),ht=new Ux,kt=new Bx(Dt),Mt=new ny(x,y,k,dt,Z,p,l),_=new $x(x,Z,St),U=new rS(I,Lt,St,dt),vt=new sy(I,Dt,Lt),zt=new fy(I,Dt,Lt),Lt.programs=gt.programs,x.capabilities=St,x.extensions=Dt,x.properties=rt,x.renderLists=ht,x.shadowMap=_,x.state=dt,x.info=Lt}ut();const $=new nS(x,I);this.xr=$,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(H,K,!1))},this.getSize=function(w){return w.set(H,K)},this.setSize=function(w,N,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,K=N,e.width=Math.floor(w*z),e.height=Math.floor(N*z),G===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(H*z,K*z).floor()},this.setDrawingBufferSize=function(w,N,G){H=w,K=N,z=G,e.width=Math.floor(w*G),e.height=Math.floor(N*G),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(lt)},this.setViewport=function(w,N,G,V){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,N,G,V),dt.viewport(P.copy(lt).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(_t)},this.setScissor=function(w,N,G,V){w.isVector4?_t.set(w.x,w.y,w.z,w.w):_t.set(w,N,G,V),dt.scissor(O.copy(_t).multiplyScalar(z).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(w){dt.setScissorTest(Rt=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(w=!0,N=!0,G=!0){let V=0;if(w){let F=!1;if(L!==null){const at=L.texture.format;F=at===eu||at===tu||at===Qh}if(F){const at=L.texture.type,yt=at===ti||at===js||at===ko||at===Vr||at===Zh||at===Kh,Tt=Mt.getClearColor(),Et=Mt.getClearAlpha(),Bt=Tt.r,$t=Tt.g,At=Tt.b;yt?(g[0]=Bt,g[1]=$t,g[2]=At,g[3]=Et,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Bt,v[1]=$t,v[2]=At,v[3]=Et,I.clearBufferiv(I.COLOR,0,v))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT),G&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ht.dispose(),kt.dispose(),rt.dispose(),y.dispose(),k.dispose(),Z.dispose(),Vt.dispose(),U.dispose(),gt.dispose(),$.dispose(),$.removeEventListener("sessionstart",De),$.removeEventListener("sessionend",Ne),Xe.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=Lt.autoReset,N=_.enabled,G=_.autoUpdate,V=_.needsUpdate,F=_.type;ut(),Lt.autoReset=w,_.enabled=N,_.autoUpdate=G,_.needsUpdate=V,_.type=F}function ct(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function It(w){const N=w.target;N.removeEventListener("dispose",It),le(N)}function le(w){he(w),rt.remove(w)}function he(w){const N=rt.get(w).programs;N!==void 0&&(N.forEach(function(G){gt.releaseProgram(G)}),w.isShaderMaterial&&gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,G,V,F,at){N===null&&(N=qt);const yt=F.isMesh&&F.matrixWorld.determinant()<0,Tt=_n(w,N,G,V,F);dt.setMaterial(V,yt);let Et=G.index,Bt=1;if(V.wireframe===!0){if(Et=Q.getWireframeAttribute(G),Et===void 0)return;Bt=2}const $t=G.drawRange,At=G.attributes.position;let te=$t.start*Bt,re=($t.start+$t.count)*Bt;at!==null&&(te=Math.max(te,at.start*Bt),re=Math.min(re,(at.start+at.count)*Bt)),Et!==null?(te=Math.max(te,0),re=Math.min(re,Et.count)):At!=null&&(te=Math.max(te,0),re=Math.min(re,At.count));const fe=re-te;if(fe<0||fe===1/0)return;Vt.setup(F,V,Tt,G,Et);let Ge,oe=vt;if(Et!==null&&(Ge=j.get(Et),oe=zt,oe.setIndex(Ge)),F.isMesh)V.wireframe===!0?(dt.setLineWidth(V.wireframeLinewidth*Ht()),oe.setMode(I.LINES)):oe.setMode(I.TRIANGLES);else if(F.isLine){let Pt=V.linewidth;Pt===void 0&&(Pt=1),dt.setLineWidth(Pt*Ht()),F.isLineSegments?oe.setMode(I.LINES):F.isLineLoop?oe.setMode(I.LINE_LOOP):oe.setMode(I.LINE_STRIP)}else F.isPoints?oe.setMode(I.POINTS):F.isSprite&&oe.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)oe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))oe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pt=F._multiDrawStarts,nn=F._multiDrawCounts,ae=F._multiDrawCount,an=Et?j.get(Et).bytesPerElement:1,Un=rt.get(V).currentProgram.getUniforms();for(let Ve=0;Ve<ae;Ve++)Un.setValue(I,"_gl_DrawID",Ve),oe.render(Pt[Ve]/an,nn[Ve])}else if(F.isInstancedMesh)oe.renderInstances(te,fe,F.count);else if(G.isInstancedBufferGeometry){const Pt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,nn=Math.min(G.instanceCount,Pt);oe.renderInstances(te,fe,nn)}else oe.render(te,fe)};function Yt(w,N,G){w.transparent===!0&&w.side===ai&&w.forceSinglePass===!1?(w.side=bn,w.needsUpdate=!0,gn(w,N,G),w.side=di,w.needsUpdate=!0,gn(w,N,G),w.side=ai):gn(w,N,G)}this.compile=function(w,N,G=null){G===null&&(G=w),f=kt.get(G),f.init(N),S.push(f),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),w!==G&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const V=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const at=F.material;if(at)if(Array.isArray(at))for(let yt=0;yt<at.length;yt++){const Tt=at[yt];Yt(Tt,G,F),V.add(Tt)}else Yt(at,G,F),V.add(at)}),S.pop(),f=null,V},this.compileAsync=function(w,N,G=null){const V=this.compile(w,N,G);return new Promise(F=>{function at(){if(V.forEach(function(yt){rt.get(yt).currentProgram.isReady()&&V.delete(yt)}),V.size===0){F(w);return}setTimeout(at,10)}Dt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ye=null;function Ft(w){ye&&ye(w)}function De(){Xe.stop()}function Ne(){Xe.start()}const Xe=new kp;Xe.setAnimationLoop(Ft),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(w){ye=w,$.setAnimationLoop(w),w===null?Xe.stop():Xe.start()},$.addEventListener("sessionstart",De),$.addEventListener("sessionend",Ne),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,L),f=kt.get(w,S.length),f.init(N),S.push(f),mt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(mt),et=this.localClippingEnabled,X=nt.init(this.clippingPlanes,et),m=ht.get(w,b.length),m.init(),b.push(m),$.enabled===!0&&$.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&se(at,N,-1/0,x.sortObjects)}se(w,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(J,st),Ct=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ct&&Mt.addToRenderList(m,w),this.info.render.frame++,X===!0&&nt.beginShadows();const G=f.state.shadowsArray;_.render(G,w,N),X===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const at=N.cameras;if(F.length>0)for(let yt=0,Tt=at.length;yt<Tt;yt++){const Et=at[yt];_i(V,F,w,Et)}Ct&&Mt.render(w);for(let yt=0,Tt=at.length;yt<Tt;yt++){const Et=at[yt];Wi(m,w,Et,Et.viewport)}}else F.length>0&&_i(V,F,w,N),Ct&&Mt.render(w),Wi(m,w,N);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(x,w,N),Vt.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],X===!0&&nt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function se(w,N,G,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){V&&xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(mt);const yt=Z.update(w),Tt=w.material;Tt.visible&&m.push(w,yt,Tt,G,xt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const yt=Z.update(w),Tt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),xt.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),xt.copy(yt.boundingSphere.center)),xt.applyMatrix4(w.matrixWorld).applyMatrix4(mt)),Array.isArray(Tt)){const Et=yt.groups;for(let Bt=0,$t=Et.length;Bt<$t;Bt++){const At=Et[Bt],te=Tt[At.materialIndex];te&&te.visible&&m.push(w,yt,te,G,xt.z,At)}}else Tt.visible&&m.push(w,yt,Tt,G,xt.z,null)}}const at=w.children;for(let yt=0,Tt=at.length;yt<Tt;yt++)se(at[yt],N,G,V)}function Wi(w,N,G,V){const F=w.opaque,at=w.transmissive,yt=w.transparent;f.setupLightsView(G),X===!0&&nt.setGlobalState(x.clippingPlanes,G),V&&dt.viewport(P.copy(V)),F.length>0&&ei(F,N,G),at.length>0&&ei(at,N,G),yt.length>0&&ei(yt,N,G),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function _i(w,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new fi(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?Ks:ti,minFilter:Hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const at=f.state.transmissionRenderTarget[V.id],yt=V.viewport||P;at.setSize(yt.z,yt.w);const Tt=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(W),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Ct&&Mt.render(G);const Et=x.toneMapping;x.toneMapping=hs;const Bt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),X===!0&&nt.setGlobalState(x.clippingPlanes,V),ei(w,G,V),T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let At=0,te=N.length;At<te;At++){const re=N[At],fe=re.object,Ge=re.geometry,oe=re.material,Pt=re.group;if(oe.side===ai&&fe.layers.test(V.layers)){const nn=oe.side;oe.side=bn,oe.needsUpdate=!0,$i(fe,G,V,Ge,oe,Pt),oe.side=nn,oe.needsUpdate=!0,$t=!0}}$t===!0&&(T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at))}x.setRenderTarget(Tt),x.setClearColor(W,Y),Bt!==void 0&&(V.viewport=Bt),x.toneMapping=Et}function ei(w,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,at=w.length;F<at;F++){const yt=w[F],Tt=yt.object,Et=yt.geometry,Bt=V===null?yt.material:V,$t=yt.group;Tt.layers.test(G.layers)&&$i(Tt,N,G,Et,Bt,$t)}}function $i(w,N,G,V,F,at){w.onBeforeRender(x,N,G,V,F,at),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,N,G,V,w,at),F.transparent===!0&&F.side===ai&&F.forceSinglePass===!1?(F.side=bn,F.needsUpdate=!0,x.renderBufferDirect(G,N,V,F,w,at),F.side=di,F.needsUpdate=!0,x.renderBufferDirect(G,N,V,F,w,at),F.side=ai):x.renderBufferDirect(G,N,V,F,w,at),w.onAfterRender(x,N,G,V,F,at)}function gn(w,N,G){N.isScene!==!0&&(N=qt);const V=rt.get(w),F=f.state.lights,at=f.state.shadowsArray,yt=F.state.version,Tt=gt.getParameters(w,F.state,at,N,G),Et=gt.getProgramCacheKey(Tt);let Bt=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?k:y).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Bt===void 0&&(w.addEventListener("dispose",It),Bt=new Map,V.programs=Bt);let $t=Bt.get(Et);if($t!==void 0){if(V.currentProgram===$t&&V.lightsStateVersion===yt)return Ce(w,Tt),$t}else Tt.uniforms=gt.getUniforms(w),w.onBeforeCompile(Tt,x),$t=gt.acquireProgram(Tt,Et),Bt.set(Et,$t),V.uniforms=Tt.uniforms;const At=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=nt.uniform),Ce(w,Tt),V.needsLights=qi(w),V.lightsStateVersion=yt,V.needsLights&&(At.ambientLightColor.value=F.state.ambient,At.lightProbe.value=F.state.probe,At.directionalLights.value=F.state.directional,At.directionalLightShadows.value=F.state.directionalShadow,At.spotLights.value=F.state.spot,At.spotLightShadows.value=F.state.spotShadow,At.rectAreaLights.value=F.state.rectArea,At.ltc_1.value=F.state.rectAreaLTC1,At.ltc_2.value=F.state.rectAreaLTC2,At.pointLights.value=F.state.point,At.pointLightShadows.value=F.state.pointShadow,At.hemisphereLights.value=F.state.hemi,At.directionalShadowMap.value=F.state.directionalShadowMap,At.directionalShadowMatrix.value=F.state.directionalShadowMatrix,At.spotShadowMap.value=F.state.spotShadowMap,At.spotLightMatrix.value=F.state.spotLightMatrix,At.spotLightMap.value=F.state.spotLightMap,At.pointShadowMap.value=F.state.pointShadowMap,At.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=$t,V.uniformsList=null,$t}function vn(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=el.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Ce(w,N){const G=rt.get(w);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function _n(w,N,G,V,F){N.isScene!==!0&&(N=qt),T.resetTextureUnits();const at=N.fog,yt=V.isMeshStandardMaterial?N.environment:null,Tt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Jr,Et=(V.isMeshStandardMaterial?k:y).get(V.envMap||yt),Bt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,$t=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!G.morphAttributes.position,te=!!G.morphAttributes.normal,re=!!G.morphAttributes.color;let fe=hs;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(fe=x.toneMapping);const Ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=Ge!==void 0?Ge.length:0,Pt=rt.get(V),nn=f.state.lights;if(X===!0&&(et===!0||w!==M)){const xn=w===M&&V.id===E;nt.setState(V,w,xn)}let ae=!1;V.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==nn.state.version||Pt.outputColorSpace!==Tt||F.isBatchedMesh&&Pt.batching===!1||!F.isBatchedMesh&&Pt.batching===!0||F.isBatchedMesh&&Pt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pt.instancing===!1||!F.isInstancedMesh&&Pt.instancing===!0||F.isSkinnedMesh&&Pt.skinning===!1||!F.isSkinnedMesh&&Pt.skinning===!0||F.isInstancedMesh&&Pt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pt.instancingMorph===!1&&F.morphTexture!==null||Pt.envMap!==Et||V.fog===!0&&Pt.fog!==at||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==nt.numPlanes||Pt.numIntersection!==nt.numIntersection)||Pt.vertexAlphas!==Bt||Pt.vertexTangents!==$t||Pt.morphTargets!==At||Pt.morphNormals!==te||Pt.morphColors!==re||Pt.toneMapping!==fe||Pt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Pt.__version=V.version);let an=Pt.currentProgram;ae===!0&&(an=gn(V,N,F));let Un=!1,Ve=!1,Bn=!1;const pe=an.getUniforms(),yn=Pt.uniforms;if(dt.useProgram(an.program)&&(Un=!0,Ve=!0,Bn=!0),V.id!==E&&(E=V.id,Ve=!0),Un||M!==w){dt.buffers.depth.getReversed()?(it.copy(w.projectionMatrix),Y0(it),Z0(it),pe.setValue(I,"projectionMatrix",it)):pe.setValue(I,"projectionMatrix",w.projectionMatrix),pe.setValue(I,"viewMatrix",w.matrixWorldInverse);const ni=pe.map.cameraPosition;ni!==void 0&&ni.setValue(I,bt.setFromMatrixPosition(w.matrixWorld)),St.logarithmicDepthBuffer&&pe.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ve=!0,Bn=!0)}if(F.isSkinnedMesh){pe.setOptional(I,F,"bindMatrix"),pe.setOptional(I,F,"bindMatrixInverse");const xn=F.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),pe.setValue(I,"boneTexture",xn.boneTexture,T))}F.isBatchedMesh&&(pe.setOptional(I,F,"batchingTexture"),pe.setValue(I,"batchingTexture",F._matricesTexture,T),pe.setOptional(I,F,"batchingIdTexture"),pe.setValue(I,"batchingIdTexture",F._indirectTexture,T),pe.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&pe.setValue(I,"batchingColorTexture",F._colorsTexture,T));const ws=G.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0)&&wt.update(F,G,an),(Ve||Pt.receiveShadow!==F.receiveShadow)&&(Pt.receiveShadow=F.receiveShadow,pe.setValue(I,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(yn.envMap.value=Et,yn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(yn.envMapIntensity.value=N.environmentIntensity),Ve&&(pe.setValue(I,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&Xi(yn,Bn),at&&V.fog===!0&&ot.refreshFogUniforms(yn,at),ot.refreshMaterialUniforms(yn,V,z,K,f.state.transmissionRenderTarget[w.id]),el.upload(I,vn(Pt),yn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(el.upload(I,vn(Pt),yn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(I,"center",F.center),pe.setValue(I,"modelViewMatrix",F.modelViewMatrix),pe.setValue(I,"normalMatrix",F.normalMatrix),pe.setValue(I,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const xn=V.uniformsGroups;for(let ni=0,ii=xn.length;ni<ii;ni++){const ea=xn[ni];U.update(ea,an),U.bind(ea,an)}}return an}function Xi(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function qi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,N,G){rt.get(w.texture).__webglTexture=N,rt.get(w.depthTexture).__webglTexture=G;const V=rt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const G=rt.get(w);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,G=0){L=w,A=N,R=G;let V=!0,F=null,at=!1,yt=!1;if(w){const Et=rt.get(w);if(Et.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(Et.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Et.__hasExternalTextures)T.rebindTextures(w,rt.get(w.texture).__webglTexture,rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const At=w.depthTexture;if(Et.__boundDepthTexture!==At){if(At!==null&&rt.has(At)&&(w.width!==At.image.width||w.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Bt=w.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(yt=!0);const $t=rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($t[N])?F=$t[N][G]:F=$t[N],at=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?F=rt.get(w).__webglMultisampledFramebuffer:Array.isArray($t)?F=$t[G]:F=$t,P.copy(w.viewport),O.copy(w.scissor),B=w.scissorTest}else P.copy(lt).multiplyScalar(z).floor(),O.copy(_t).multiplyScalar(z).floor(),B=Rt;if(dt.bindFramebuffer(I.FRAMEBUFFER,F)&&V&&dt.drawBuffers(w,F),dt.viewport(P),dt.scissor(O),dt.setScissorTest(B),at){const Et=rt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Et.__webglTexture,G)}else if(yt){const Et=rt.get(w.texture),Bt=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.__webglTexture,G||0,Bt)}E=-1},this.readRenderTargetPixels=function(w,N,G,V,F,at,yt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt){dt.bindFramebuffer(I.FRAMEBUFFER,Tt);try{const Et=w.texture,Bt=Et.format,$t=Et.type;if(!St.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&G>=0&&G<=w.height-F&&I.readPixels(N,G,V,F,Ut.convert(Bt),Ut.convert($t),at)}finally{const Et=L!==null?rt.get(L).__webglFramebuffer:null;dt.bindFramebuffer(I.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(w,N,G,V,F,at,yt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt){const Et=w.texture,Bt=Et.format,$t=Et.type;if(!St.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&G>=0&&G<=w.height-F){dt.bindFramebuffer(I.FRAMEBUFFER,Tt);const At=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,At),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),I.readPixels(N,G,V,F,Ut.convert(Bt),Ut.convert($t),0);const te=L!==null?rt.get(L).__webglFramebuffer:null;dt.bindFramebuffer(I.FRAMEBUFFER,te);const re=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await j0(I,re,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,At),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(At),I.deleteSync(re),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,G=0){w.isTexture!==!0&&(yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-G),F=Math.floor(w.image.width*V),at=Math.floor(w.image.height*V),yt=N!==null?N.x:0,Tt=N!==null?N.y:0;T.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,yt,Tt,F,at),dt.unbindTexture()},this.copyTextureToTexture=function(w,N,G=null,V=null,F=0){w.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,G=null);let at,yt,Tt,Et,Bt,$t,At,te,re;const fe=w.isCompressedTexture?w.mipmaps[F]:w.image;G!==null?(at=G.max.x-G.min.x,yt=G.max.y-G.min.y,Tt=G.isBox3?G.max.z-G.min.z:1,Et=G.min.x,Bt=G.min.y,$t=G.isBox3?G.min.z:0):(at=fe.width,yt=fe.height,Tt=fe.depth||1,Et=0,Bt=0,$t=0),V!==null?(At=V.x,te=V.y,re=V.z):(At=0,te=0,re=0);const Ge=Ut.convert(N.format),oe=Ut.convert(N.type);let Pt;N.isData3DTexture?(T.setTexture3D(N,0),Pt=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Pt=I.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Pt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const nn=I.getParameter(I.UNPACK_ROW_LENGTH),ae=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),Un=I.getParameter(I.UNPACK_SKIP_ROWS),Ve=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Et),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$t);const Bn=w.isDataArrayTexture||w.isData3DTexture,pe=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const yn=rt.get(w),ws=rt.get(N),xn=rt.get(yn.__renderTarget),ni=rt.get(ws.__renderTarget);dt.bindFramebuffer(I.READ_FRAMEBUFFER,xn.__webglFramebuffer),dt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<Tt;ii++)Bn&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rt.get(w).__webglTexture,F,$t+ii),w.isDepthTexture?(pe&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rt.get(N).__webglTexture,F,re+ii),I.blitFramebuffer(Et,Bt,at,yt,At,te,at,yt,I.DEPTH_BUFFER_BIT,I.NEAREST)):pe?I.copyTexSubImage3D(Pt,F,At,te,re+ii,Et,Bt,at,yt):I.copyTexSubImage2D(Pt,F,At,te,re+ii,Et,Bt,at,yt);dt.bindFramebuffer(I.READ_FRAMEBUFFER,null),dt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pe?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Pt,F,At,te,re,at,yt,Tt,Ge,oe,fe.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Pt,F,At,te,re,at,yt,Tt,Ge,fe.data):I.texSubImage3D(Pt,F,At,te,re,at,yt,Tt,Ge,oe,fe):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,At,te,at,yt,Ge,oe,fe.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,At,te,fe.width,fe.height,Ge,fe.data):I.texSubImage2D(I.TEXTURE_2D,F,At,te,at,yt,Ge,oe,fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,nn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ae),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,Un),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve),F===0&&N.generateMipmaps&&I.generateMipmap(Pt),dt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,G=null,V=null,F=0){return w.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,G,V,F)},this.initRenderTarget=function(w){rt.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),dt.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,dt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}class ul extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cl,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new C;class hi{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Kt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ys extends _s{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _r;const lo=new C,yr=new C,xr=new C,Sr=new Nt,co=new Nt,$p=new Se,ba=new C,ho=new C,Ea=new C,Td=new Nt,oc=new Nt,Ad=new Nt;class qr extends ke{constructor(t=new Ys){if(super(),this.isSprite=!0,this.type="Sprite",_r===void 0){_r=new Ot;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Wp(e,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new hi(i,3,0,!1)),_r.setAttribute("uv",new hi(i,2,3,!1))}this.geometry=_r,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),$p.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-xr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Ta(ba.set(-.5,-.5,0),xr,o,yr,s,r),Ta(ho.set(.5,-.5,0),xr,o,yr,s,r),Ta(Ea.set(.5,.5,0),xr,o,yr,s,r),Td.set(0,0),oc.set(1,0),Ad.set(1,1);let a=t.ray.intersectTriangle(ba,ho,Ea,!1,lo);if(a===null&&(Ta(ho.set(-.5,.5,0),xr,o,yr,s,r),oc.set(0,1),a=t.ray.intersectTriangle(ba,Ea,ho,!1,lo),a===null))return;const l=t.ray.origin.distanceTo(lo);l<t.near||l>t.far||e.push({distance:l,point:lo.clone(),uv:zn.getInterpolation(lo,ba,ho,Ea,Td,oc,Ad,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ta(n,t,e,i,s,r){Sr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(co.x=r*Sr.x-s*Sr.y,co.y=s*Sr.x+r*Sr.y):co.copy(Sr),n.copy(t),n.x+=co.x,n.y+=co.y,n.applyMatrix4($p)}class Yo extends en{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Oe,h=Oe,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi extends _s{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const dl=new C,fl=new C,Cd=new Se,uo=new qo,Aa=new Qs,ac=new C,Rd=new C;class Ho extends ke{constructor(t=new Ot,e=new mi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)dl.fromBufferAttribute(e,s-1),fl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=dl.distanceTo(fl);t.setAttribute("lineDistance",new ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,t.ray.intersectsSphere(Aa)===!1)return;Cd.copy(s).invert(),uo.copy(t.ray).applyMatrix4(Cd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),b=h.getX(v+1),S=Ca(this,t,uo,l,f,b);S&&e.push(S)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=Ca(this,t,uo,l,v,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=Ca(this,t,uo,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Ca(this,t,uo,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ca(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(dl.fromBufferAttribute(o,s),fl.fromBufferAttribute(o,r),e.distanceSqToSegment(dl,fl,ac,Rd)>i)return;ac.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ac);if(!(l<t.near||l>t.far))return{distance:l,point:Rd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Pd=new C,Dd=new C;class Li extends Ho{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Pd.fromBufferAttribute(e,s),Dd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pd.distanceTo(Dd);t.setAttribute("lineDistance",new ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xp extends _s{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ld=new Se,Ph=new qo,Ra=new Qs,Pa=new C;class mn extends ke{constructor(t=new Ot,e=new Xp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,t.ray.intersectsSphere(Ra)===!1)return;Ld.copy(s).invert(),Ph.copy(t.ray).applyMatrix4(Ld);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);Pa.fromBufferAttribute(u,m),Id(Pa,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,v=p;g<v;g++)Pa.fromBufferAttribute(u,g),Id(Pa,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Id(n,t,e,i,s,r,o){const a=Ph.distanceSqToPoint(n);if(a<e){const l=new C;Ph.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class us extends en{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jr extends Ot{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new Nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=i+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class to extends Ot{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const v=[],m=i/2;let f=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(p,2));function b(){const x=new C,D=new C;let A=0;const R=(e-t)/i;for(let L=0;L<=r;L++){const E=[],M=L/r,P=M*(e-t)+t;for(let O=0;O<=s;O++){const B=O/s,W=B*l+a,Y=Math.sin(W),H=Math.cos(W);D.x=P*Y,D.y=-M*i+m,D.z=P*H,u.push(D.x,D.y,D.z),x.set(Y,R,H).normalize(),d.push(x.x,x.y,x.z),p.push(B,1-M),E.push(g++)}v.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const M=v[E][L],P=v[E+1][L],O=v[E+1][L+1],B=v[E][L+1];(t>0||E!==0)&&(h.push(M,P,B),A+=3),(e>0||E!==r-1)&&(h.push(P,O,B),A+=3)}c.addGroup(f,A,0),f+=A}function S(x){const D=g,A=new Nt,R=new C;let L=0;const E=x===!0?t:e,M=x===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let O=0;O<=s;O++){const W=O/s*l+a,Y=Math.cos(W),H=Math.sin(W);R.x=E*H,R.y=m*M,R.z=E*Y,u.push(R.x,R.y,R.z),d.push(0,M,0),A.x=Y*.5+.5,A.y=H*.5*M+.5,p.push(A.x,A.y),g++}for(let O=0;O<s;O++){const B=D+O,W=P+O;x===!0?h.push(W,W+1,B):h.push(W+1,W,B),L+=3}c.addGroup(f,L,x===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lu extends to{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new lu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cu extends Ot{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new C,g=new Nt;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const f=r+m/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(i+1);for(let f=0;f<i;f++){const b=f+m,S=b,x=b+i+1,D=b+i+2,A=b+1;a.push(S,x,A),a.push(x,D,A)}}this.setIndex(a),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class In extends Ot{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new C,d=new C,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const b=[],S=f/i;let x=0;f===0&&o===0?x=.5/e:f===i&&l===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const A=D/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+x,1-S),b.push(c++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<e;b++){const S=h[f][b+1],x=h[f][b],D=h[f+1][b],A=h[f+1][b+1];(f!==0||o>0)&&p.push(S,x,A),(f!==i-1||l<Math.PI)&&p.push(x,D,A)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zo extends Ot{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,b=(s+1)*p+g;o.push(v,m,b),o.push(m,f,b)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class aS extends Ot{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new C,r=new C;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,p=u.count;for(let g=d,v=d+p;g<v;g+=3)for(let m=0;m<3;m++){const f=a.getX(g+m),b=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,b),Ud(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Ud(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ne(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Ud(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class qp extends _s{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Wt(16777215),this.specular=new Wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ap,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Nd={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class lS{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const cS=new lS;class Tl{constructor(t){this.manager=t!==void 0?t:cS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Tl.DEFAULT_MATERIAL_NAME="__DEFAULT";class jp extends Tl{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Nd.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Bo("img");function l(){h(),Nd.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class hS extends Tl{constructor(t){super(t)}load(t,e,i,s){const r=new ru;r.colorSpace=be;const o=new jp(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return r}}class Al extends Tl{constructor(t){super(t)}load(t,e,i,s){const r=new en,o=new jp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Yp extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const lc=new Se,Fd=new C,Od=new C;class uS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ou,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Fd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fd),Od.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Od),e.updateMatrixWorld(),lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class dS extends uS{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fS extends Yp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new dS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pS extends Yp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class mS extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Dh extends Wp{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const kd=new Se;class gS{constructor(t,e,i=0,s=1/0){this.ray=new qo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new iu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kd),this}intersectObject(t,e=!0,i=[]){return Lh(t,this,i,e),i.sort(zd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Lh(t[s],this,i,e);return i.sort(zd),i}}function zd(n,t){return n.distance-t.distance}function Lh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Lh(r[o],t,e,!0)}}class Bd{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos($e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Hd=new C,Da=new C;class vS{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Hd.subVectors(t,this.start),Da.subVectors(this.end,this.start);const i=Da.dot(Da);let r=Da.dot(Hd)/i;return e&&(r=$e(r,0,1)),r}closestPointToPoint(t,e,i){const s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class _S extends Js{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);const Gd=15e3,yS=3e4,xS=3;function So(n,t,e,i){let s=0;function r(){s++;let a=!1;const l=setTimeout(()=>{a||(a=!0,o(`timed out after ${Gd}ms`))},Gd);n.load(t,c=>{a||(a=!0,clearTimeout(l),i?.({fetched:new Date}),e(c))},void 0,c=>{a||(a=!0,clearTimeout(l),o(c instanceof Error?c.message:String(c)))})}function o(a){const l=Math.min(yS,1e3*Math.pow(2,s-1));console.warn(`[orrery] texture load attempt ${s} failed, retrying in ${l}ms: ${t} (${a})`),s>=xS?i?.({error:`slow/unreachable after ${s} attempts — retrying…`}):i?.({detail:`retrying (attempt ${s})…`}),setTimeout(r,l)}r()}function SS(){const n=new Yo(new Uint8Array([0,0,0,255]),1,1,tn);return n.needsUpdate=!0,n}const MS=23.44*Math.PI/180,Vd=3824235;class wS{mesh;earth;nightOverlay;sunDirUniform;phongMaterial;flatMaterial;terminatorEnabled=!0;nightLightsEnabled=!0;constructor(t={}){const e=new Al,i=new In(1,128,64);this.phongMaterial=new qp({color:Vd,specular:new Wt(3364215),shininess:18}),this.flatMaterial=new Ke({color:Vd}),this.earth=new Jt(i,this.phongMaterial),So(e,"textures/earth_daymap_2k.jpg",a=>{a.colorSpace=be,this.phongMaterial.color.set(16777215),this.phongMaterial.map=a,this.phongMaterial.needsUpdate=!0,this.flatMaterial.color.set(12303291),this.flatMaterial.map=a,this.flatMaterial.needsUpdate=!0},t.onDayStatus),So(e,"textures/earth_normal_2048.jpg",a=>{this.phongMaterial.normalMap=a,this.phongMaterial.normalScale=new Nt(.85,.85),this.phongMaterial.needsUpdate=!0}),So(e,"textures/earth_specular_2048.jpg",a=>{this.phongMaterial.specularMap=a,this.phongMaterial.needsUpdate=!0}),this.sunDirUniform={value:new C(1,0,0)};const s={uMap:{value:SS()},uSunDirection:this.sunDirUniform,uIntensity:{value:1.6}};So(e,"textures/earth_nightmap_2k.jpg",a=>{a.colorSpace=be,s.uMap.value=a},t.onNightStatus);const r=new de({uniforms:s,vertexShader:`
        varying vec3 vWorldNormal;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          // mat3(modelMatrix) excludes translation; for unit-scaled spheres this is a pure rotation
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        uniform vec3 uSunDirection;
        uniform float uIntensity;
        varying vec3 vWorldNormal;
        varying vec2 vUv;
        void main() {
          // Smooth night-side mask: fully on at NdotL <= -0.05, off at NdotL >= 0.05
          float ndotl = dot(vWorldNormal, normalize(uSunDirection));
          float nightSide = smoothstep(0.05, -0.05, ndotl);
          vec3 city = texture2D(uMap, vUv).rgb;
          gl_FragColor = vec4(city * nightSide * uIntensity, 1.0);
        }
      `,transparent:!0,blending:Tn,depthWrite:!1}),o=new In(1.0008,128,64);this.nightOverlay=new Jt(o,r),this.mesh=new ie,this.mesh.rotation.z=MS,this.mesh.add(this.earth),this.mesh.add(this.nightOverlay)}setSunDirection(t){this.sunDirUniform.value.copy(t)}setRotationY(t){this.earth.rotation.y=t,this.nightOverlay.rotation.y=t}setTerminatorVisible(t){this.terminatorEnabled=t,this.earth.material=t?this.phongMaterial:this.flatMaterial,this.updateNightOverlay()}setNightLightsVisible(t){this.nightLightsEnabled=t,this.updateNightOverlay()}updateNightOverlay(){this.nightOverlay.visible=this.terminatorEnabled&&this.nightLightsEnabled}attachToEarth(t){this.earth.add(t)}worldToLatLon(t){const e=this.earth.worldToLocal(t.clone()).normalize(),i=Math.asin(Math.max(-1,Math.min(1,e.y)))*180/Math.PI,s=Math.atan2(-e.z,e.x)*180/Math.PI;return{lat:i,lon:s}}get earthMesh(){return this.earth}}class bS{mesh;constructor(t=8e3,e=28e3){const i=new Float32Array(t*3),s=new Float32Array(t);for(let a=0;a<t;a++){const l=Math.random(),c=Math.random(),h=2*Math.PI*l,u=Math.acos(2*c-1);i[a*3]=e*Math.sin(u)*Math.cos(h),i[a*3+1]=e*Math.sin(u)*Math.sin(h),i[a*3+2]=e*Math.cos(u),s[a]=1+Math.random()*2}const r=new Ot;r.setAttribute("position",new Kt(i,3));const o=new Xp({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.9});this.mesh=new mn(r,o)}}async function ES(n="lo"){const t=["px","nx","py","ny","pz","nz"].map(s=>`textures/starmap_${s}.jpg`);if(await Wd(t[0])){const s=await TS(t);if(s)return console.log("[earth-clock] skybox loaded (6-face cubemap)"),s}const i=n==="hi"?["textures/8k_stars_milky_way.jpg","textures/starmap.jpg","textures/2k_stars_milky_way.jpg"]:["textures/2k_stars_milky_way.jpg","textures/starmap.jpg","textures/8k_stars_milky_way.jpg"];for(const s of i){if(!await Wd(s))continue;const r=await AS(s);if(r)return console.log(`[earth-clock] skybox loaded (equirectangular: ${s})`),r}return console.warn("[earth-clock] no skybox texture found in textures/; using procedural Points starfield. To upgrade: download NASA's 'Deep Star Map 2020' (8K equirectangular) from https://svs.gsfc.nasa.gov/4851/ and save it as frontend/public/textures/starmap.jpg."),null}async function Wd(n){try{return(await fetch(n,{method:"HEAD"})).ok}catch{return!1}}function TS(n){return new Promise(t=>{new hS().load(n,e=>{e.colorSpace=be,t(e)},void 0,()=>t(null))})}function AS(n){return new Promise(t=>{new Al().load(n,e=>{e.mapping=ll,e.colorSpace=be,t(e)},void 0,()=>t(null))})}class CS{mesh;sunDirUniform;material;constructor(t=1,e=.018){this.sunDirUniform={value:new C(1,0,0)};const i=new In(t+e,96,48);this.material=new de({uniforms:{uSunDirection:this.sunDirUniform,uColorDay:{value:new Wt(8961023)},uColorTwilight:{value:new Wt(16750950)},uPower:{value:3.2},uIntensity:{value:1.4}},vertexShader:`
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform vec3 uSunDirection;
        uniform vec3 uColorDay;
        uniform vec3 uColorTwilight;
        uniform float uPower;
        uniform float uIntensity;
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;

        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorldPos);
          float fresnel = pow(1.0 - max(0.0, dot(vWorldNormal, viewDir)), uPower);

          float sunDot = dot(vWorldNormal, normalize(uSunDirection));
          // Day: full atmosphere, twilight: warm at terminator, night: faint cool tint
          float daySide = smoothstep(-0.15, 0.20, sunDot);
          float twilight = smoothstep(0.30, -0.15, abs(sunDot - 0.05)); // bump near horizon
          vec3 col = mix(vec3(0.0), uColorDay, daySide);
          col += uColorTwilight * twilight * 0.6;

          // Keep a faint blue glow even on the night limb so Earth has a halo against the stars
          float nightFloor = smoothstep(-0.4, -0.1, sunDot) * 0.15;
          col += uColorDay * nightFloor;

          gl_FragColor = vec4(col * fresnel * uIntensity, fresnel);
        }
      `,transparent:!0,blending:Tn,depthWrite:!1,side:di}),this.mesh=new Jt(i,this.material)}setSunDirection(t){this.sunDirUniform.value.copy(t)}setPower(t){this.material.uniforms.uPower.value=t}setIntensity(t){this.material.uniforms.uIntensity.value=t}}const RS=.273,PS=8947848,$d=.95;class DS{mesh;material;defaultEmissive=new Wt(16777215);umbralTint=new Wt(9052176);_scratchColor=new Wt;constructor(t){const e=new Al,i=new In(RS,64,32);this.material=new qp({color:PS,shininess:2,specular:0,emissive:16777215,emissiveIntensity:$d}),this.mesh=new Jt(i,this.material),So(e,"textures/moon_1024.jpg",s=>{s.colorSpace=be,this.material.color.set(16777215),this.material.map=s,this.material.emissiveMap=s,this.material.needsUpdate=!0},t)}setPosition(t){this.mesh.position.copy(t)}setEclipseShadow(t,e=1){const i=Math.max(0,Math.min(1,t)),s=e>=1?.82:e>0?.82*e:.1;this.material.emissiveIntensity=$d*(1-s*i),this._scratchColor.copy(this.defaultEmissive).lerp(this.umbralTint,s*i),this.material.emissive.copy(this._scratchColor)}}class Ro{mesh;disc;corona;static R_SUN_IN_R_EARTH=696e3/6371;static AU_IN_R_EARTH=149597870/6371;constructor(){this.mesh=new ie;const t=new In(Ro.R_SUN_IN_R_EARTH,48,24),e=new Ke({color:16766285});this.disc=new Jt(t,e),this.disc.frustumCulled=!1,this.mesh.add(this.disc);const i=LS(256),s=new Ys({map:i,color:16777215,transparent:!0,blending:Tn,depthWrite:!1,depthTest:!0});this.corona=new qr(s);const r=Ro.R_SUN_IN_R_EARTH*8;this.corona.scale.set(r,r,1),this.corona.frustumCulled=!1,this.mesh.add(this.corona)}setSunDirection(t){this.mesh.position.copy(t).normalize().multiplyScalar(Ro.AU_IN_R_EARTH)}}function LS(n){const t=document.createElement("canvas");t.width=t.height=n;const e=t.getContext("2d"),i=e.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);i.addColorStop(0,"rgba(255, 255, 240, 1.00)"),i.addColorStop(.06,"rgba(255, 245, 200, 1.00)"),i.addColorStop(.14,"rgba(255, 220, 130, 0.90)"),i.addColorStop(.28,"rgba(255, 190,  90, 0.55)"),i.addColorStop(.5,"rgba(255, 150,  60, 0.25)"),i.addColorStop(.75,"rgba(255, 120,  40, 0.10)"),i.addColorStop(1,"rgba(255, 100,  30, 0.00)"),e.fillStyle=i,e.fillRect(0,0,n,n);const s=new us(t);return s.needsUpdate=!0,s}const IS=new Xr(-1,1,1,-1,0,1);class US extends Ot{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}}const NS=new US;class FS{constructor(t){this._mesh=new Jt(NS,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,IS)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class OS{constructor(t,e,i){this.variables=[],this.currentTextureIndex=0;let s=Jn;const r={passThruTexture:{value:null}},o=c(u(),r),a=new FS(o);this.setDataType=function(d){return s=d,this},this.addVariable=function(d,p,g){const v=this.createShaderMaterial(p),m={name:d,initialValueTexture:g,material:v,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Oe,magFilter:Oe};return this.variables.push(m),m},this.setVariableDependencies=function(d,p){d.dependencies=p},this.init=function(){if(i.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let d=0;d<this.variables.length;d++){const p=this.variables[d];p.renderTargets[0]=this.createRenderTarget(t,e,p.wrapS,p.wrapT,p.minFilter,p.magFilter),p.renderTargets[1]=this.createRenderTarget(t,e,p.wrapS,p.wrapT,p.minFilter,p.magFilter),this.renderTexture(p.initialValueTexture,p.renderTargets[0]),this.renderTexture(p.initialValueTexture,p.renderTargets[1]);const g=p.material,v=g.uniforms;if(p.dependencies!==null)for(let m=0;m<p.dependencies.length;m++){const f=p.dependencies[m];if(f.name!==p.name){let b=!1;for(let S=0;S<this.variables.length;S++)if(f.name===this.variables[S].name){b=!0;break}if(!b)return"Variable dependency not found. Variable="+p.name+", dependency="+f.name}v[f.name]={value:null},g.fragmentShader=`
uniform sampler2D `+f.name+`;
`+g.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const d=this.currentTextureIndex,p=this.currentTextureIndex===0?1:0;for(let g=0,v=this.variables.length;g<v;g++){const m=this.variables[g];if(m.dependencies!==null){const f=m.material.uniforms;for(let b=0,S=m.dependencies.length;b<S;b++){const x=m.dependencies[b];f[x.name].value=x.renderTargets[d].texture}}this.doRenderTarget(m.material,m.renderTargets[p])}this.currentTextureIndex=p},this.getCurrentRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){a.dispose();const d=this.variables;for(let p=0;p<d.length;p++){const g=d[p];g.initialValueTexture&&g.initialValueTexture.dispose();const v=g.renderTargets;for(let m=0;m<v.length;m++)v[m].dispose()}};function l(d){d.defines.resolution="vec2( "+t.toFixed(1)+", "+e.toFixed(1)+" )"}this.addResolutionDefine=l;function c(d,p){p=p||{};const g=new de({name:"GPUComputationShader",uniforms:p,vertexShader:h(),fragmentShader:d});return l(g),g}this.createShaderMaterial=c,this.createRenderTarget=function(d,p,g,v,m,f){return d=d||t,p=p||e,g=g||Qe,v=v||Qe,m=m||Oe,f=f||Oe,new fi(d,p,{wrapS:g,wrapT:v,minFilter:m,magFilter:f,format:tn,type:s,depthBuffer:!1})},this.createTexture=function(){const d=new Float32Array(t*e*4),p=new Yo(d,t,e,tn,Jn);return p.needsUpdate=!0,p},this.renderTexture=function(d,p){r.passThruTexture.value=d,this.doRenderTarget(o,p),r.passThruTexture.value=null},this.doRenderTarget=function(d,p){const g=i.getRenderTarget(),v=i.xr.enabled,m=i.shadowMap.autoUpdate;i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,a.material=d,i.setRenderTarget(p),a.render(i),a.material=o,i.xr.enabled=v,i.shadowMap.autoUpdate=m,i.setRenderTarget(g)};function h(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function u(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const kS=23.44*Math.PI/180;class zS{mesh;flatMesh;points;gpu;positionVar;renderMaterial;flatRenderMaterial;constructor(t,e=65536){const i=Math.ceil(Math.sqrt(e)),s=i*i;this.gpu=new OS(i,i,t);const r=this.gpu.createTexture(),o=r.image.data;for(let p=0;p<s;p++)o[p*4]=(Math.random()-.5)*360,o[p*4+1]=(Math.random()-.5)*160,o[p*4+2]=Math.random(),o[p*4+3]=1;const a=`
      uniform sampler2D uWindTexture; // R = u m/s east, G = v m/s north; stored as raw signed floats
      uniform float uDt;
      uniform float uSpeed;     // visual-speed multiplier (deg per (m/s * sec))
      uniform float uTime;
      uniform float uRespawnRate;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 state = texture2D(texturePosition, uv);
        float lon = state.x;
        float lat = state.y;
        float life = state.z;

        // Sample wind. Wind texture is laid out with lon 0..360 across x (origin at left),
        // lat +90..-90 down y (north on top). Particle lon ∈ [-180, 180].
        float lonNorm = mod(lon + 360.0, 360.0);
        vec2 windUv = vec2(lonNorm / 360.0, (90.0 - lat) / 180.0);
        vec4 windSample = texture2D(uWindTexture, windUv);
        float u = windSample.r;  // m/s east
        float v = windSample.g;  // m/s north

        // Advect. cos(lat) compensation keeps wind speed isotropic in m/s.
        float latRad = radians(lat);
        float cosLat = max(cos(latRad), 0.01);
        lon += u * uDt * uSpeed / cosLat;
        lat += v * uDt * uSpeed;

        // Wrap longitude, clamp latitude
        lon = mod(lon + 180.0, 360.0) - 180.0;
        lat = clamp(lat, -89.5, 89.5);

        // Age and respawn: lifetime grows by uRespawnRate * dt, respawn when it crosses 1.0.
        // The +hash term staggers respawns so they don't all fire together.
        life += uDt * uRespawnRate;
        float respawnRoll = hash(uv * (uTime + 1.0));
        if (life >= 1.0 || respawnRoll < uDt * uRespawnRate * 0.5) {
          lon = (hash(uv + vec2(uTime, 0.0)) - 0.5) * 360.0;
          lat = (hash(uv + vec2(0.0, uTime)) - 0.5) * 160.0;
          life = 0.0;
        }

        gl_FragColor = vec4(lon, lat, life, 1.0);
      }
    `;this.positionVar=this.gpu.addVariable("texturePosition",a,r),this.gpu.setVariableDependencies(this.positionVar,[this.positionVar]),this.positionVar.wrapS=Qe,this.positionVar.wrapT=Qe,this.positionVar.minFilter=Oe,this.positionVar.magFilter=Oe;const l=this.positionVar.material.uniforms;l.uWindTexture={value:this.createMockWindTexture()},l.uDt={value:1/60},l.uSpeed={value:.12},l.uTime={value:0},l.uRespawnRate={value:.1};const c=this.gpu.init();c&&console.error("[Particles] GPUComputationRenderer init error:",c);const h=new Float32Array(s*3),u=new Float32Array(s*2);for(let p=0;p<s;p++){const g=p%i,v=Math.floor(p/i);u[p*2]=(g+.5)/i,u[p*2+1]=(v+.5)/i}const d=new Ot;d.setAttribute("position",new Kt(h,3)),d.setAttribute("lookupUV",new Kt(u,2)),this.renderMaterial=new de({uniforms:{uTexturePosition:{value:null},uPointSize:{value:1.5},uAlpha:{value:.25}},vertexShader:`
        uniform sampler2D uTexturePosition;
        uniform float uPointSize;
        attribute vec2 lookupUV;
        varying float vLife;
        varying float vLimbFade;
        void main() {
          vec4 state = texture2D(uTexturePosition, lookupUV);
          float lon = radians(state.x);
          float lat = radians(state.y);
          vLife = state.z;
          float r = 1.005; // hover just above Earth's surface
          // Match Three.js SphereGeometry's equirectangular UVs: lon=0 lies on -Z, lon=+90E on +X
          float x =  r * cos(lat) * sin(lon);
          float y =  r * sin(lat);
          float z = -r * cos(lat) * cos(lon);

          // Hemisphere test using surface normal vs view direction.
          vec3 worldPos = (modelMatrix * vec4(x, y, z, 1.0)).xyz;
          vec3 worldNormal = normalize(worldPos);
          vec3 toCam = normalize(cameraPosition - worldPos);
          float facing = dot(worldNormal, toCam);
          if (facing < 0.0) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // off-screen
            return;
          }
          // Fade out near the limb so particles don't pile into a bright ring where their
          // screen-space velocity collapses (foreshortening at tangent).
          vLimbFade = smoothstep(0.0, 0.15, facing);

          vec4 mvPosition = modelViewMatrix * vec4(x, y, z, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = uPointSize;
        }
      `,fragmentShader:`
        uniform float uAlpha;
        varying float vLife;
        varying float vLimbFade;
        void main() {
          float lifeFade = smoothstep(0.0, 0.1, vLife) * (1.0 - smoothstep(0.85, 1.0, vLife));
          gl_FragColor = vec4(1.0, 1.0, 1.0, uAlpha * lifeFade * vLimbFade);
        }
      `,transparent:!0,depthWrite:!1,blending:Tn}),this.points=new mn(d,this.renderMaterial),this.mesh=new ie,this.mesh.rotation.z=kS,this.mesh.add(this.points),this.flatRenderMaterial=new de({uniforms:{uTexturePosition:{value:null},uPointSize:{value:1.7},uAlpha:{value:.18}},vertexShader:`
        uniform sampler2D uTexturePosition;
        uniform float uPointSize;
        attribute vec2 lookupUV;
        varying float vLife;
        void main() {
          vec4 state = texture2D(uTexturePosition, lookupUV);
          vLife = state.z;
          // (lon/180, lat/180) on the 2×1 plane. Identity model+view+projection lets the
          // ortho camera viewing (-1..+1, -0.5..+0.5) map this directly onto the trail
          // texture. No sphere-projection, no tilt, no hemisphere clip.
          float x = state.x / 180.0;
          float y = state.y / 180.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y, 0.0, 1.0);
          gl_PointSize = uPointSize;
        }
      `,fragmentShader:`
        uniform float uAlpha;
        varying float vLife;
        void main() {
          float lifeFade = smoothstep(0.0, 0.1, vLife) * (1.0 - smoothstep(0.85, 1.0, vLife));
          gl_FragColor = vec4(1.0, 1.0, 1.0, uAlpha * lifeFade);
        }
      `,transparent:!0,depthWrite:!1,blending:Tn}),this.flatMesh=new mn(d,this.flatRenderMaterial)}createMockWindTexture(){const e=new Uint16Array(64),i=Ip.toHalfFloat,s=i(10),r=i(1);for(let a=0;a<16;a++)e[a*4]=s,e[a*4+1]=0,e[a*4+2]=0,e[a*4+3]=r;const o=new Yo(e,4,4,tn,Ks);return o.wrapS=ki,o.wrapT=Qe,o.magFilter=Ae,o.minFilter=Ae,o.needsUpdate=!0,o}setWindTexture(t){const e=this.positionVar.material.uniforms.uWindTexture.value;e&&e.dispose(),this.positionVar.material.uniforms.uWindTexture.value=t}setRotationY(t){this.points.rotation.y=t}setSpeed(t){this.positionVar.material.uniforms.uSpeed.value=t}setPointSize(t){this.renderMaterial.uniforms.uPointSize.value=t,this.flatRenderMaterial.uniforms.uPointSize.value=t}setAlpha(t){this.renderMaterial.uniforms.uAlpha.value=t,this.flatRenderMaterial.uniforms.uAlpha.value=t}update(t,e){const i=this.positionVar.material.uniforms;i.uDt.value=Math.min(t,1/30),i.uTime.value=e,this.gpu.compute();const s=this.gpu.getCurrentRenderTarget(this.positionVar).texture;this.renderMaterial.uniforms.uTexturePosition.value=s,this.flatRenderMaterial.uniforms.uTexturePosition.value=s}dispose(){this.gpu.dispose(),this.renderMaterial.dispose(),this.flatRenderMaterial.dispose(),this.points.geometry.dispose()}}const BS=23.44*Math.PI/180;class Lr{mesh;flatMesh;rtA;rtB;current;particleScene;fadeScene;trailCamera;fadeMaterial;compositeMaterial;flatCompositeMaterial;fadeQuadCam;compositeSphere;static TRAIL_WIDTH=2048;static TRAIL_HEIGHT=1024;constructor(t){const e={depthBuffer:!1,stencilBuffer:!1,type:ti,format:tn,minFilter:Ae,magFilter:Ae,wrapS:ki,wrapT:Qe};this.rtA=new fi(Lr.TRAIL_WIDTH,Lr.TRAIL_HEIGHT,e),this.rtB=new fi(Lr.TRAIL_WIDTH,Lr.TRAIL_HEIGHT,e),this.current=this.rtA,this.trailCamera=new Xr(-1,1,.5,-.5,0,10),this.trailCamera.position.set(0,0,1),this.particleScene=new ul,this.particleScene.add(t),this.fadeMaterial=new de({uniforms:{uPrev:{value:null},uFade:{value:.992}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uPrev;
        uniform float uFade;
        varying vec2 vUv;
        void main() {
          vec4 c = texture2D(uPrev, vUv);
          gl_FragColor = vec4(c.rgb * uFade, c.a * uFade);
        }
      `,depthTest:!1,depthWrite:!1}),this.fadeQuadCam=new Xr(-1,1,1,-1,0,1),this.fadeScene=new ul,this.fadeScene.add(new Jt(new Bi(2,2),this.fadeMaterial)),this.compositeMaterial=new de({uniforms:{uTrails:{value:null},uOpacity:{value:1}},vertexShader:`
        varying vec3 vLocalNormal;
        void main() {
          // Per-fragment UV (computed in fragment shader from this normal) — avoids the
          // prime-meridian seam that a vUv with a +0.5 shift creates. See OverlayLayer
          // for the same approach applied to GFS scalar overlays.
          vLocalNormal = normalize(normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uTrails;
        uniform float uOpacity;
        varying vec3 vLocalNormal;
        const float PI = 3.14159265359;
        void main() {
          // Trail buffer was rendered with particles at world (lon/180, lat/180) on the
          // 2x1 plane via an ortho camera. That puts:
          //   lon=0  (Greenwich)  → texture u=0.5
          //   lon=±π (date line)  → texture u=0 or 1
          //   lat=+π/2 (N pole)   → texture v=1
          //   lat=-π/2 (S pole)   → texture v=0
          // Per-fragment formula: lat = asin(y), lon = atan2(-z, x).
          float lat = asin(clamp(vLocalNormal.y, -1.0, 1.0));
          float lon = atan(-vLocalNormal.z, vLocalNormal.x);
          float u = (lon + PI) / (2.0 * PI);
          float vv = (lat + 0.5 * PI) / PI;
          vec4 c = texture2D(uTrails, vec2(u, vv));
          // Trail texture is additive-accumulated white; alpha carries the trail density.
          gl_FragColor = vec4(c.rgb, c.a * uOpacity);
        }
      `,transparent:!0,depthWrite:!1,blending:Tn}),this.compositeSphere=new Jt(new In(1.006,96,48),this.compositeMaterial),this.compositeSphere.renderOrder=3,this.mesh=new ie,this.mesh.rotation.z=BS,this.mesh.add(this.compositeSphere),this.flatCompositeMaterial=new de({uniforms:{uTrails:this.compositeMaterial.uniforms.uTrails,uOpacity:this.compositeMaterial.uniforms.uOpacity},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uTrails;
        uniform float uOpacity;
        varying vec2 vUv;
        void main() {
          vec4 c = texture2D(uTrails, vUv);
          gl_FragColor = vec4(c.rgb, c.a * uOpacity);
        }
      `,transparent:!0,depthWrite:!1,blending:Tn}),this.flatMesh=new Jt(new Bi(2,1),this.flatCompositeMaterial),this.flatMesh.position.z=.005}step(t){const e=this.current===this.rtA?this.rtB:this.rtA,i=t.autoClear;t.autoClear=!1,this.fadeMaterial.uniforms.uPrev.value=this.current.texture,t.setRenderTarget(e),t.setClearColor(0,0),t.clear(!0,!1,!1),t.render(this.fadeScene,this.fadeQuadCam),t.render(this.particleScene,this.trailCamera),t.setRenderTarget(null),t.autoClear=i,this.compositeMaterial.uniforms.uTrails.value=e.texture,this.current=e}setRotationY(t){this.compositeSphere.rotation.y=t}setVisible(t){this.mesh.visible=t,this.flatMesh.visible=t}setFade(t){this.fadeMaterial.uniforms.uFade.value=t}setOpacity(t){this.compositeMaterial.uniforms.uOpacity.value=t}setIntensity(t){switch(t){case"subtle":this.fadeMaterial.uniforms.uFade.value=.98,this.compositeMaterial.uniforms.uOpacity.value=.35;break;case"standard":this.fadeMaterial.uniforms.uFade.value=.99,this.compositeMaterial.uniforms.uOpacity.value=.65;break;case"bold":this.fadeMaterial.uniforms.uFade.value=.992,this.compositeMaterial.uniforms.uOpacity.value=1;break}}resize(t,e){}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.fadeMaterial.dispose(),this.compositeMaterial.dispose(),this.flatCompositeMaterial.dispose()}}const HS=23.44*Math.PI/180;class GS{mesh;flatMesh;lines;material;flatMaterial;constructor(){const t=new Ot;t.setAttribute("position",new ne([],3)),this.material=new mi({color:13161704,transparent:!0,opacity:.35,depthWrite:!1}),this.lines=new Li(t,this.material),this.mesh=new ie,this.mesh.rotation.z=HS,this.mesh.add(this.lines);const e=new Ot;e.setAttribute("position",new ne([],3)),this.flatMaterial=new mi({color:11583712,transparent:!0,opacity:.55,depthWrite:!1}),this.flatMesh=new Li(e,this.flatMaterial)}loadFromTopology(t,e,i=1.002){const s=t.objects[e];if(!s)throw new Error(`Coastlines: object "${e}" not in topology`);const{scale:r,translate:o}=t.transform,a=m=>{const f=m<0,b=t.arcs[f?~m:m];let S=0,x=0;const D=[];for(const[A,R]of b)S+=A,x+=R,D.push([S*r[0]+o[0],x*r[1]+o[1]]);return f?D.reverse():D},l=(m,f,b)=>{const S=m*Math.PI/180,x=f*Math.PI/180,D=Math.cos(x);b[0]=i*D*Math.cos(S),b[1]=i*Math.sin(x),b[2]=-i*D*Math.sin(S)},c=[],h=[],u=[0,0,0],d=[0,0,0],p=m=>{let f=[];for(const b of m){const S=a(b);f.length===0?f=S:f.push(...S.slice(1))}for(let b=1;b<f.length;b++){const S=f[b-1][0],x=f[b-1][1],D=f[b][0],A=f[b][1];l(S,x,u),l(D,A,d),c.push(u[0],u[1],u[2],d[0],d[1],d[2]),!(Math.abs(D-S)>180)&&h.push(S/180,x/180,0,D/180,A/180,0)}};for(const m of s.geometries)if(m.type==="LineString")p(m.arcs);else if(m.type==="MultiLineString")for(const f of m.arcs)p(f);const g=new Ot;g.setAttribute("position",new ne(c,3)),this.lines.geometry.dispose(),this.lines.geometry=g;const v=new Ot;v.setAttribute("position",new ne(h,3)),this.flatMesh.geometry.dispose(),this.flatMesh.geometry=v}setRotationY(t){this.lines.rotation.y=t}setOpacity(t){this.material.opacity=t}setColor(t){this.material.color.setHex(t)}}const Xd=new vs,La=new C;class Ir extends mS{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new ne(t,3)),this.setAttribute("uv",new ne(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Dh(e,6,1);return this.setAttribute("instanceStart",new hi(i,3,0)),this.setAttribute("instanceEnd",new hi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Dh(e,6,1);return this.setAttribute("instanceColorStart",new hi(i,3,0)),this.setAttribute("instanceColorEnd",new hi(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new aS(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Xd.setFromBufferAttribute(e),this.boundingBox.union(Xd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)La.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(La)),La.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(La));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}pt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Nt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};wn.line={uniforms:su.merge([pt.common,pt.fog,pt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class pl extends de{static get type(){return"LineMaterial"}constructor(t){super({uniforms:su.clone(wn.line.uniforms),vertexShader:wn.line.vertexShader,fragmentShader:wn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const cc=new xe,qd=new C,jd=new C,qe=new xe,je=new xe,si=new xe,hc=new C,uc=new Se,Ze=new vS,Yd=new C,Ia=new vs,Ua=new Qs,ri=new xe;let li,qs;function Zd(n,t,e){return ri.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),ri.multiplyScalar(1/ri.w),ri.x=qs/e.width,ri.y=qs/e.height,ri.applyMatrix4(n.projectionMatrixInverse),ri.multiplyScalar(1/ri.w),Math.abs(Math.max(ri.x,ri.y))}function VS(n,t){const e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){Ze.start.fromBufferAttribute(s,a),Ze.end.fromBufferAttribute(r,a),Ze.applyMatrix4(e);const c=new C,h=new C;li.distanceSqToSegment(Ze.start,Ze.end,h,c),h.distanceTo(c)<qs*.5&&t.push({point:h,pointOnLine:c,distance:li.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function WS(n,t,e){const i=t.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-t.near;li.at(1,si),si.w=1,si.applyMatrix4(t.matrixWorldInverse),si.applyMatrix4(i),si.multiplyScalar(1/si.w),si.x*=r.x/2,si.y*=r.y/2,si.z=0,hc.copy(si),uc.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,p=h;d<p;d++){if(qe.fromBufferAttribute(l,d),je.fromBufferAttribute(c,d),qe.w=1,je.w=1,qe.applyMatrix4(uc),je.applyMatrix4(uc),qe.z>u&&je.z>u)continue;if(qe.z>u){const S=qe.z-je.z,x=(qe.z-u)/S;qe.lerp(je,x)}else if(je.z>u){const S=je.z-qe.z,x=(je.z-u)/S;je.lerp(qe,x)}qe.applyMatrix4(i),je.applyMatrix4(i),qe.multiplyScalar(1/qe.w),je.multiplyScalar(1/je.w),qe.x*=r.x/2,qe.y*=r.y/2,je.x*=r.x/2,je.y*=r.y/2,Ze.start.copy(qe),Ze.start.z=0,Ze.end.copy(je),Ze.end.z=0;const v=Ze.closestPointToPointParameter(hc,!0);Ze.at(v,Yd);const m=fs.lerp(qe.z,je.z,v),f=m>=-1&&m<=1,b=hc.distanceTo(Yd)<qs*.5;if(f&&b){Ze.start.fromBufferAttribute(l,d),Ze.end.fromBufferAttribute(c,d),Ze.start.applyMatrix4(o),Ze.end.applyMatrix4(o);const S=new C,x=new C;li.distanceSqToSegment(Ze.start,Ze.end,x,S),e.push({point:x,pointOnLine:S,distance:li.origin.distanceTo(x),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}class Po extends Jt{constructor(t=new Ir,e=new pl({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)qd.fromBufferAttribute(e,o),jd.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+qd.distanceTo(jd);const r=new Dh(s,2,1);return t.setAttribute("instanceDistanceStart",new hi(r,1,0)),t.setAttribute("instanceDistanceEnd",new hi(r,1,1)),this}raycast(t,e){const i=this.material.worldUnits,s=t.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;li=t.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;qs=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Ua.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=qs*.5;else{const u=Math.max(s.near,Ua.distanceToPoint(li.origin));c=Zd(s,u,l.resolution)}if(Ua.radius+=c,li.intersectsSphere(Ua)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ia.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=qs*.5;else{const u=Math.max(s.near,Ia.distanceToPoint(li.origin));h=Zd(s,u,l.resolution)}Ia.expandByScalar(h),li.intersectsBox(Ia)!==!1&&(i?VS(this,e):WS(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(cc),this.material.uniforms.resolution.value.set(cc.z,cc.w))}}const $S=23.44*Math.PI/180;class XS{mesh;flatMesh;lines;material;flatMaterial;constructor(){const t=new Ir;this.material=new pl({color:14252605,linewidth:2,transparent:!0,opacity:.55,depthWrite:!1}),this.lines=new Po(t,this.material),this.mesh=new ie,this.mesh.rotation.z=$S,this.mesh.add(this.lines);const e=new Ir;this.flatMaterial=new pl({color:14715469,linewidth:2.5,transparent:!0,opacity:.7,depthWrite:!1}),this.flatMesh=new Po(e,this.flatMaterial)}load(t,e=1.0018){const i=(h,u,d)=>{const p=h*Math.PI/180,g=u*Math.PI/180,v=Math.cos(g);d[0]=e*v*Math.cos(p),d[1]=e*Math.sin(g),d[2]=-e*v*Math.sin(p)},s=[],r=[],o=[0,0,0],a=[0,0,0];for(const h of t.lines)for(let u=1;u<h.length;u++){const[d,p]=h[u-1],[g,v]=h[u];i(d,p,o),i(g,v,a),s.push(o[0],o[1],o[2],a[0],a[1],a[2]),!(Math.abs(g-d)>180)&&r.push(d/180,p/180,0,g/180,v/180,0)}const l=new Ir;l.setPositions(s),this.lines.geometry.dispose(),this.lines.geometry=l;const c=new Ir;c.setPositions(r),this.flatMesh.geometry.dispose(),this.flatMesh.geometry=c}setResolution(t,e){this.material.resolution.set(t,e),this.flatMaterial.resolution.set(t,e)}setRotationY(t){this.lines.rotation.y=t}}const qS=23.44*Math.PI/180;class ks{mesh;flatMesh;points;material;posAttr;flatPosAttr;eruptingAttr;hashAttr;idToIndex=new Map;static MAX_POINTS=1500;RADIUS=1.0016;constructor(){const t=new Ot,e=new Float32Array(ks.MAX_POINTS*3),i=new Float32Array(ks.MAX_POINTS),s=new Float32Array(ks.MAX_POINTS);this.posAttr=new Kt(e,3),this.eruptingAttr=new Kt(i,1),this.hashAttr=new Kt(s,1),this.posAttr.setUsage(Ee),this.eruptingAttr.setUsage(Ee),this.hashAttr.setUsage(cl),t.setAttribute("position",this.posAttr),t.setAttribute("aErupting",this.eruptingAttr),t.setAttribute("aHash",this.hashAttr),t.setDrawRange(0,0);const r=new Ot,o=new Float32Array(ks.MAX_POINTS*3);this.flatPosAttr=new Kt(o,3),this.flatPosAttr.setUsage(Ee),r.setAttribute("position",this.flatPosAttr),r.setAttribute("aErupting",this.eruptingAttr),r.setAttribute("aHash",this.hashAttr),r.setDrawRange(0,0),this.material=new de({uniforms:{uTime:{value:0}},vertexShader:`
        attribute float aErupting;
        attribute float aHash;
        varying float vErupting;
        varying float vHash;
        void main() {
          vErupting = aErupting;
          vHash = aHash;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          // Floor raised from 5px — dormant markers were easy to lose against terrain
          // texture at default zoom (see ROADMAP "exaggerating subtle live events").
          gl_PointSize = mix(7.0, 12.0, aErupting);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying float vErupting;
        varying float vHash;

        // Point-in-triangle test (edge-function sign trick) so markers read as small
        // mountains rather than generic dots.
        float edge(vec2 a, vec2 b, vec2 p) {
          return (p.x - a.x) * (b.y - a.y) - (p.y - a.y) * (b.x - a.x);
        }
        void main() {
          vec2 p = gl_PointCoord;
          vec2 top = vec2(0.5, 0.12), left = vec2(0.12, 0.88), right = vec2(0.88, 0.88);
          float d1 = edge(top, left, p);
          float d2 = edge(left, right, p);
          float d3 = edge(right, top, p);
          bool hasNeg = (d1 < 0.0) || (d2 < 0.0) || (d3 < 0.0);
          bool hasPos = (d1 > 0.0) || (d2 > 0.0) || (d3 > 0.0);
          if (hasNeg && hasPos) discard;

          vec3 dormant = vec3(0.55, 0.45, 0.42);
          vec3 hot     = vec3(1.0, 0.45, 0.1);
          float flicker = 0.8 + 0.2 * sin(uTime * 4.0 + vHash * 31.4);
          vec3 col = mix(dormant, hot * flicker, vErupting);

          // Dark stroke near the triangle's edges — keeps markers legible against terrain
          // colours close to the dormant fill (muted rock tones blend into brown/green land).
          float edgeDist = min(d1, min(d2, d3));
          float stroke = 1.0 - smoothstep(0.0, 0.05, edgeDist);
          col = mix(col, vec3(0.05, 0.03, 0.02), stroke * 0.85);

          gl_FragColor = vec4(col, mix(0.7, 1.0, vErupting));
        }
      `,transparent:!0,depthWrite:!1}),this.points=new mn(t,this.material),this.mesh=new ie,this.mesh.rotation.z=qS,this.mesh.add(this.points),this.flatMesh=new mn(r,this.material)}load(t){const e=this.RADIUS,i=Math.min(t.volcanoes.length,ks.MAX_POINTS),s=this.posAttr.array,r=this.hashAttr.array,o=this.flatPosAttr.array;this.idToIndex.clear();for(let a=0;a<i;a++){const l=t.volcanoes[a];this.idToIndex.set(l.id,a);const c=l.lon*Math.PI/180,h=l.lat*Math.PI/180,u=Math.cos(h);s[a*3+0]=e*u*Math.cos(c),s[a*3+1]=e*Math.sin(h),s[a*3+2]=-e*u*Math.sin(c),o[a*3+0]=l.lon/180,o[a*3+1]=l.lat/180,o[a*3+2]=.001,r[a]=Math.abs(Math.sin(l.lat*12.9898+l.lon*78.233))*43758.5453%1}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.hashAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,i),this.flatMesh.geometry.setDrawRange(0,i)}setErupting(t){const e=this.eruptingAttr.array;e.fill(0);for(const i of t){const s=this.idToIndex.get(i);s!==void 0&&(e[s]=1)}this.eruptingAttr.needsUpdate=!0}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}}const jS=23.44*Math.PI/180,Na=1.003,YS=1.13,ZS=1.001,Fa=.0042,KS=.012,JS=.002,Oa=Array.from({length:24},(n,t)=>({utcOffset:t-11,centerLon:(t-11)*15,centerLat:0})),Kd=Array.from({length:24},(n,t)=>(t-11)*15),QS="https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_time_zones.geojson";function fo(n,t,e){const i=n*(Math.PI/180),s=t*(Math.PI/180),r=Math.cos(s);return new C(e*r*Math.cos(i),e*Math.sin(s),-e*r*Math.sin(i))}function tM(n){const e=String(n??"0").replace("−","-").replace("–","-").match(/^([+-]?\d+)(?::(\d+))?$/);if(!e)return 0;const i=parseInt(e[1],10),s=e[2]?parseInt(e[2],10):0;return i+(i<0?-s/60:s/60)}function eM(n){const t=n>=0?"+":"−",e=Math.abs(n),i=Math.floor(e),s=Math.round((e-i)*60);return`${t}${i}:${String(s).padStart(2,"0")}`}function nM(n){const t=n>=0?"+":"−",e=Math.abs(n),i=Math.floor(e),s=Math.round((e-i)*60);return s===0?`UTC${t}${i}`:`UTC${t}${i}:${String(s).padStart(2,"0")}`}function Zp(n){const t=(n+12)%26;return Math.round(t*137.508%360)}function iM(n){return`hsl(${Zp(n)}, 72%, 55%)`}function Jd(n){const t=new Map;for(const e of n){const i=e.utcOffset;t.has(i)||t.set(i,[]),t.get(i).push(e)}return Array.from(t.entries()).sort(([e],[i])=>e-i).map(([e,i])=>{const s=e*15,r=i.reduce((o,a)=>Math.abs(a.centerLon-s)<Math.abs(o.centerLon-s)?a:o);return{utcOffset:e,centerLon:r.centerLon,centerLat:0,ianaName:r.ianaName}})}function dc(n,t){if(n.ianaName)try{const i=new Date(t),s=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:n.ianaName,year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(i).filter(c=>c.type!=="literal").map(c=>[c.type,parseInt(c.value)])),r=s.hour===24?0:s.hour,o=s.minute,l=(Date.UTC(s.year,s.month-1,s.day,r,o)-i.getTime())/36e5;return{h:r,m:o,effectiveOffsetH:Math.round(l*4)/4}}catch{}const e=new Date(t+n.utcOffset*36e5);return{h:e.getUTCHours(),m:e.getUTCMinutes(),effectiveOffsetH:n.utcOffset}}function Qd(n,t,e,i,s,r){n.clearRect(0,0,t,e);const o=3,a=Math.round(e*.2);n.fillStyle=`hsla(${r}, 55%, 11%, 0.88)`,n.beginPath(),n.moveTo(o+a,o),n.lineTo(t-o-a,o),n.arcTo(t-o,o,t-o,o+a,a),n.lineTo(t-o,e-o-a),n.arcTo(t-o,e-o,t-o-a,e-o,a),n.lineTo(o+a,e-o),n.arcTo(o,e-o,o,e-o-a,a),n.lineTo(o,o+a),n.arcTo(o,o,o+a,o,a),n.closePath(),n.fill(),n.strokeStyle=`hsla(${r}, 65%, 58%, 0.85)`,n.lineWidth=1.5,n.stroke(),n.textAlign="center",n.font=`bold ${Math.round(e*.3)}px system-ui,sans-serif`,n.fillStyle=`hsla(${r}, 75%, 82%, 1.0)`,n.textBaseline="alphabetic",n.fillText(i,t/2,o+Math.round(e*.42)),n.font=`bold ${Math.round(e*.46)}px system-ui,sans-serif`,n.fillStyle="rgba(235, 248, 255, 1.0)",n.fillText(s,t/2,e-o-Math.round(e*.1))}function sM(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){const o=e[s][0],a=e[s][1],l=e[r][0],c=e[r][1];a>t!=c>t&&n<(l-o)*(t-a)/(c-a)+o&&(i=!i)}return i}class Xn{mesh;flatMesh;rotGroup;linesHost3D;linesHostFlat;sprites3D=[];spritesFlat=[];canvases3D=[];canvasesFlat=[];textures3D=[];texturesFlat=[];zones=Oa.slice();labelZones=Oa.slice();displayMode="nominal";relativeMode=!1;_referenceIana=null;lastMinute=-1;lastUpdateWall=0;static MIN_UPDATE_MS=80;lastEffectiveSig="";overlayCanvas=null;overlayTex=null;overlaySphere=null;overlayPlane=null;static LW3=192;static LH3=78;static LWF=96;static LHF=42;resolutionWidth=typeof window<"u"?window.innerWidth:1;resolutionHeight=typeof window<"u"?window.innerHeight:1;constructor(){this.mesh=new ie,this.mesh.rotation.z=jS,this.rotGroup=new ie,this.linesHost3D=new ie,this.rotGroup.add(this.linesHost3D),this.mesh.add(this.rotGroup),this.flatMesh=new ie,this.linesHostFlat=new ie,this.flatMesh.add(this.linesHostFlat),this.buildNominalGeometry(),this.buildSprites(this.zones)}buildNominalGeometry(){this.clearLinesHost(this.linesHost3D),this.clearLinesHost(this.linesHostFlat);const t=[],e=[],i=40,s=-78,r=78,o=new Set(Kd);o.add(-180);for(const a of Kd)for(let l=0;l<i;l++){const c=s+(r-s)*l/i,h=s+(r-s)*(l+1)/i,u=fo(a,c,Na),d=fo(a,h,Na);t.push(u.x,u.y,u.z,d.x,d.y,d.z)}for(const a of o)for(let l=0;l<i;l++){const c=s+(r-s)*l/i,h=s+(r-s)*(l+1)/i;e.push(a/180,c/180,Fa,a/180,h/180,Fa)}this.addLineSegments(this.linesHost3D,t,6724044,.5,1.5),this.addLineSegments(this.linesHostFlat,e,6724044,.65,2)}buildPoliticalGeometry(t){this.clearLinesHost(this.linesHost3D),this.clearLinesHost(this.linesHostFlat);const e=[],i=[];for(const s of t.zones)for(const r of s.rings)for(let o=0;o<r.length-1;o++){const[a,l]=r[o],[c,h]=r[o+1];if(Math.abs(c-a)>180)continue;const u=fo(a,l,Na),d=fo(c,h,Na);e.push(u.x,u.y,u.z,d.x,d.y,d.z),i.push(a/180,l/180,Fa,c/180,h/180,Fa)}this.addLineSegments(this.linesHost3D,e,6724044,.5,1.5),this.addLineSegments(this.linesHostFlat,i,6724044,.65,2)}addLineSegments(t,e,i,s,r){const o=new Ir;o.setPositions(e);const a=new pl({color:i,linewidth:r,transparent:!0,opacity:s,depthWrite:!1});a.resolution.set(this.resolutionWidth,this.resolutionHeight),t.add(new Po(o,a))}setResolution(t,e){this.resolutionWidth=t,this.resolutionHeight=e;for(const i of[this.linesHost3D,this.linesHostFlat])for(const s of i.children)s instanceof Po&&s.material.resolution.set(t,e)}clearLinesHost(t){const e=t.children.filter(i=>i instanceof Po);for(const i of e){const s=i;s.geometry?.dispose(),s.material?.dispose(),t.remove(i)}}buildColorOverlay(t,e){this.overlayCanvas||(this.overlayCanvas=document.createElement("canvas"),this.overlayCanvas.width=2048,this.overlayCanvas.height=1024);const r=this.overlayCanvas.getContext("2d");r.clearRect(0,0,2048,1024);for(const o of t.zones){let a=o.utcOffset;if(e!==void 0&&o.tzid)try{a=dc({ianaName:o.tzid,utcOffset:o.utcOffset,centerLon:o.centLon,centerLat:0},e).effectiveOffsetH}catch{}r.fillStyle=iM(a);for(const l of o.rings){if(l.length<3)continue;const c=d=>(d+180)/360*2048,h=d=>(90-d)/180*1024;r.beginPath();let u=l[0][0];r.moveTo(c(l[0][0]),h(l[0][1]));for(let d=1;d<l.length;d++){const[p,g]=l[d];Math.abs(p-u)>180?(r.closePath(),r.fill(),r.beginPath(),r.moveTo(c(p),h(g))):r.lineTo(c(p),h(g)),u=p}r.closePath(),r.fill("evenodd")}}if(this.overlayTex?this.overlayTex.needsUpdate=!0:(this.overlayTex=new us(this.overlayCanvas),this.overlayTex.generateMipmaps=!1,this.overlayTex.minFilter=Ae),this.overlaySphere){const o=this.overlaySphere.material;o.map=this.overlayTex,o.needsUpdate=!0}else{const o=new In(ZS,64,32),a=new Ke({map:this.overlayTex,transparent:!0,opacity:.52,depthWrite:!1,depthTest:!1,blending:Ni,side:di});this.overlaySphere=new Jt(o,a),this.rotGroup.add(this.overlaySphere)}if(this.overlayPlane){const o=this.overlayPlane.material;o.map=this.overlayTex,o.needsUpdate=!0}else{const o=new Bi(2,1),a=new Ke({map:this.overlayTex,transparent:!0,opacity:.52,depthWrite:!1,depthTest:!1,blending:Ni});this.overlayPlane=new Jt(o,a),this.overlayPlane.position.z=JS,this.flatMesh.add(this.overlayPlane)}}clearColorOverlay(){this.overlaySphere&&(this.rotGroup.remove(this.overlaySphere),this.overlaySphere.material.dispose(),this.overlaySphere.geometry.dispose(),this.overlaySphere=null),this.overlayPlane&&(this.flatMesh.remove(this.overlayPlane),this.overlayPlane.material.dispose(),this.overlayPlane.geometry.dispose(),this.overlayPlane=null),this.overlayTex?.dispose(),this.overlayTex=null}buildSprites(t){this.labelZones=t;for(const h of this.sprites3D)this.rotGroup.remove(h);for(const h of this.spritesFlat)this.flatMesh.remove(h);this.sprites3D.length=0,this.spritesFlat.length=0;const e=Xn.LW3,i=Xn.LH3,s=Xn.LWF,r=Xn.LHF;for(;this.canvases3D.length<t.length;){const h=document.createElement("canvas");h.width=e,h.height=i,this.canvases3D.push(h),this.textures3D.push(new us(h))}for(;this.canvasesFlat.length<t.length;){const h=document.createElement("canvas");h.width=s,h.height=r,this.canvasesFlat.push(h),this.texturesFlat.push(new us(h))}const o=.09,a=e/i,l=.032,c=s/r;for(let h=0;h<t.length;h++){const u=t[h],d=new Ys({map:this.textures3D[h],transparent:!0,depthWrite:!1,depthTest:!0}),p=new qr(d);p.position.copy(fo(u.centerLon,0,YS)),p.scale.set(o*a,o,1),this.rotGroup.add(p),this.sprites3D.push(p);const g=Math.max(-.96,Math.min(.96,u.centerLon/180)),v=new Ys({map:this.texturesFlat[h],transparent:!0,depthWrite:!1,depthTest:!1}),m=new qr(v);m.position.set(g,0,KS),m.scale.set(l*c,l,1),this.flatMesh.add(m),this.spritesFlat.push(m)}this.lastMinute=-1}update(t){const e=performance.now();if(e-this.lastUpdateWall<Xn.MIN_UPDATE_MS)return;const i=new Date(t).getUTCHours()*60+new Date(t).getUTCMinutes();if(i===this.lastMinute)return;this.lastMinute=i,this.lastUpdateWall=e;let s;this._referenceIana?s=dc({ianaName:this._referenceIana,utcOffset:0,centerLon:0,centerLat:0},t).effectiveOffsetH:s=-new Date().getTimezoneOffset()/60;const r=Xn.LW3,o=Xn.LH3,a=Xn.LWF,l=Xn.LHF,c=[];this.labelZones.forEach((u,d)=>{const{h:p,m:g,effectiveOffsetH:v}=dc(u,t),m=`${String(p).padStart(2,"0")}:${String(g).padStart(2,"0")}`,f=Zp(v);c.push(Math.round(v*4));let b,S;if(this.relativeMode){const x=v-s;S=eM(x),b=m}else b=nM(v),S=m;this.canvases3D[d]&&(Qd(this.canvases3D[d].getContext("2d"),r,o,b,S,f),this.textures3D[d].needsUpdate=!0),this.canvasesFlat[d]&&(Qd(this.canvasesFlat[d].getContext("2d"),a,l,b,S,f),this.texturesFlat[d].needsUpdate=!0)});const h=c.join(",");h!==this.lastEffectiveSig&&(this.lastEffectiveSig=h,this.politicalData&&this.displayMode==="political"&&this.buildColorOverlay(this.politicalData,t))}setRotationY(t){this.rotGroup.rotation.y=t}setDisplayMode(t){t!==this.displayMode&&(this.displayMode=t,t==="political"?this.loadPoliticalData():(this.zones=Oa.slice(),this.buildNominalGeometry(),this.buildSprites(this.zones),this.clearColorOverlay()))}setRelativeMode(t){t!==this.relativeMode&&(this.relativeMode=t,this.lastMinute=-1)}setReferenceZone(t){t!==this._referenceIana&&(this._referenceIana=t,this.lastMinute=-1)}get dataLoaded(){return this.politicalLoaded}loadForLookup(){this.politicalLoaded||this.loadPoliticalData()}findZoneAt(t,e){if(this.politicalData){for(const s of this.politicalData.zones)for(const r of s.rings)if(sM(e,t,r))return{ianaName:s.tzid,utcOffset:s.utcOffset}}return{ianaName:"",utcOffset:Math.max(-12,Math.min(14,Math.round(e/15)))}}politicalLoaded=!1;politicalZones=[];politicalData;async loadPoliticalData(){if(this.politicalLoaded){this.zones=this.politicalZones,this.politicalData&&(this.buildPoliticalGeometry(this.politicalData),this.buildColorOverlay(this.politicalData)),this.buildSprites(Jd(this.politicalZones));return}let t=null;if(!t)try{const e=await fetch("/data/timezone-bounds.json");e.ok&&(t=await e.json())}catch{}if(!t)try{const e=await fetch(QS);if(e.ok){const i=await e.json();t=this.processRawGeoJSON(i)}}catch(e){console.warn("[TimezoneLayer] CDN fetch failed:",e)}if(!t){console.warn("[TimezoneLayer] No political timezone data found — falling back to nominal mode.\nTo enable: run `node build-timezone-bounds.mjs` (generates public/data/timezone-bounds.json)."),this.displayMode="nominal",this.zones=Oa.slice(),this.buildNominalGeometry(),this.buildSprites(this.zones);return}this.politicalData=t,this.politicalZones=t.zones.map(e=>({utcOffset:e.utcOffset,centerLon:e.centLon,centerLat:e.centLat,ianaName:e.tzid||void 0})),this.politicalLoaded=!0,this.zones=this.politicalZones,this.buildPoliticalGeometry(t),this.buildColorOverlay(t,Date.now()),this.buildSprites(Jd(this.politicalZones))}processRawGeoJSON(t){const e=[];for(const i of t.features??[]){const s=i.properties??{},r=s.TZID??s.tzid??s.tz_name1st??s.name??"",o=s.time_zone??s.UTC_OFFSET??s.utc_offset??s.zone??"0",a=tM(o),l=i.geometry;if(!l)continue;const c=l.type==="Polygon"?[l.coordinates]:l.type==="MultiPolygon"?l.coordinates:[];if(!c.length)continue;let h=0,u=0,d=0;for(const g of c){const v=g[0];if(!v?.length)continue;const m=v.reduce((S,x)=>S+x[0],0)/v.length,f=v.reduce((S,x)=>S+x[1],0)/v.length;let b=0;for(let S=0;S<v.length-1;S++)b+=Math.abs(v[S][0]*v[S+1][1]-v[S+1][0]*v[S][1]);b/=2,b>h&&(h=b,u=m,d=f)}const p=c.flatMap(g=>g);e.push({tzid:r||(a>=0?`UTC+${a}`:`UTC${a}`),utcOffset:a,centLon:Math.round(u*100)/100,centLat:Math.round(d*100)/100,rings:p})}return{version:1,zones:e}}}function Kp(n,t,e){const{width:i,height:s,data:r}=n;if(r.length!==i*s)throw new Error(`scalarGridToByteTexture: data length ${r.length} ≠ width*height ${i*s}`);const o=Math.max(e-t,1e-6),a=new Uint8Array(r.length);for(let c=0;c<r.length;c++){const h=(r[c]-t)/o;a[c]=Math.round(Math.max(0,Math.min(1,h))*255)}const l=new Yo(a,i,s,Jh,ti);return l.wrapS=ki,l.wrapT=Qe,l.minFilter=Ae,l.magFilter=Ae,l.generateMipmaps=!1,l.needsUpdate=!0,l}const rM=23.44*Math.PI/180;class oM{mesh;cloudSphere;material;sunDirUniform;currentScalarTexture=null;constructor(t=1.003){const e=new In(t,128,64);this.sunDirUniform={value:new C(1,0,0)},this.material=new de({uniforms:{uMap:{value:null},uScalar:{value:null},uMode:{value:0},uSunDirection:{value:this.sunDirUniform.value},uThreshold:{value:.5},uSoftness:{value:.3},uOpacity:{value:.85},uNightFade:{value:.1},uNightFloor:{value:.25},uTerminator:{value:1}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorldNormal;
        varying vec3 vLocalNormal;
        void main() {
          vUv = uv;
          // World-space normal drives the sun-direction terminator mask; local-space normal
          // drives per-fragment UV when sampling the GFS scalar grid (which uses a different
          // longitude origin than the VIIRS texture, so we can't reuse the rasterised vUv).
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          vLocalNormal = normalize(normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        uniform sampler2D uScalar;
        uniform int   uMode;
        uniform vec3 uSunDirection;
        uniform float uThreshold;
        uniform float uSoftness;
        uniform float uOpacity;
        uniform float uNightFade;
        uniform float uNightFloor;
        uniform float uTerminator;
        varying vec2 vUv;
        varying vec3 vWorldNormal;
        varying vec3 vLocalNormal;
        const float PI = 3.14159265359;

        void main() {
          float cloudAlpha;
          vec3 cloudColor;

          if (uMode == 0) {
            // ---- True-color VIIRS mosaic ----
            vec4 c = texture2D(uMap, vUv);
            // BT.709 luminance — clouds are bright across all channels in true-color; ocean
            // is dark blue, land darker greens/browns. Luma cleanly separates them.
            float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
            cloudAlpha = smoothstep(uThreshold, uThreshold + uSoftness, luma);
            // Keep colour near-white rather than passing the raw tile RGB to avoid subtle
            // green/brown tinting from land features that survived the luma threshold.
            cloudColor = mix(c.rgb, vec3(1.0), 0.4);
          } else {
            // ---- GFS scalar cloud-cover grid (pre-normalised byte texture) ----
            // Per-fragment UV from local normal (avoids prime-meridian seam discontinuity).
            // Convention: x = cos(lat)·cos(lon), y = sin(lat), z = -cos(lat)·sin(lon).
            // GFS grid: first column at lon=0, first row at lat=+90.
            float lat = asin(clamp(vLocalNormal.y, -1.0, 1.0));
            float lon = atan(-vLocalNormal.z, vLocalNormal.x);
            float u = (lon < 0.0 ? lon + 2.0 * PI : lon) / (2.0 * PI);
            float vv = (0.5 * PI - lat) / PI;
            // Byte texture: value already normalised [0, 1] by scalarGridToByteTexture.
            cloudAlpha = texture2D(uScalar, vec2(u, vv)).r;
            cloudColor = vec3(1.0);
          }

          // Day → night brightness gradient. Clouds are physically there 24h, so they never
          // vanish — just dim toward a floor on the dark side. Alpha is untouched, so night
          // clouds correctly occlude city lights below them.
          float ndotl = dot(vWorldNormal, normalize(uSunDirection));
          float dayFactor = smoothstep(-uNightFade, uNightFade, ndotl);
          float brightness = mix(1.0, mix(uNightFloor, 1.0, dayFactor), uTerminator);

          gl_FragColor = vec4(cloudColor * brightness, cloudAlpha * uOpacity);
        }
      `,transparent:!0,depthWrite:!1}),this.cloudSphere=new Jt(e,this.material),this.cloudSphere.renderOrder=2,this.mesh=new ie,this.mesh.rotation.z=rM,this.mesh.add(this.cloudSphere)}setTexture(t){this.material.uniforms.uMap.value=t,this.material.uniforms.uMode.value=0}setScalarField(t,e,i){const s=Kp(t,e,i);this.currentScalarTexture&&this.currentScalarTexture.dispose(),this.material.uniforms.uScalar.value=s,this.material.uniforms.uMode.value=1,this.currentScalarTexture=s}setSunDirection(t){this.sunDirUniform.value.copy(t)}setRotationY(t){this.cloudSphere.rotation.y=t}setTerminatorEnabled(t){this.material.uniforms.uTerminator.value=t?1:0}setThreshold(t){this.material.uniforms.uThreshold.value=t}setSoftness(t){this.material.uniforms.uSoftness.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}setNightFloor(t){this.material.uniforms.uNightFloor.value=t}}const aM=23.44*Math.PI/180;class Ur{mesh;flatMesh;points;material;flatMaterial;posAttr;flatPosAttr;probAttr;sunDirUniform;timeUniform;static MAX_POINTS=7e4;RADIUS=1.008;constructor(){const t=new Ot,e=new Float32Array(Ur.MAX_POINTS*3),i=new Float32Array(Ur.MAX_POINTS);this.posAttr=new Kt(e,3),this.probAttr=new Kt(i,1),this.posAttr.setUsage(Ee),this.probAttr.setUsage(Ee),t.setAttribute("position",this.posAttr),t.setAttribute("aProbability",this.probAttr),t.setDrawRange(0,0);const s=new Ot,r=new Float32Array(Ur.MAX_POINTS*3);this.flatPosAttr=new Kt(r,3),this.flatPosAttr.setUsage(Ee),s.setAttribute("position",this.flatPosAttr),s.setAttribute("aProbability",this.probAttr),s.setDrawRange(0,0),this.sunDirUniform={value:new C(1,0,0)},this.timeUniform={value:0},this.material=new de({uniforms:{uSunDirection:{value:this.sunDirUniform.value},uTime:{value:this.timeUniform.value},uOpacity:{value:1},uTerminator:{value:1}},vertexShader:`
        attribute float aProbability;
        varying float vProb;
        varying vec3 vWorldPos;
        void main() {
          vProb = aProbability;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
          // Size: 3 px floor for dim cells, up to ~9 px for bright ones — large enough to
          // register as clear auroral dots, small enough that 65 k of them don't paint a haze.
          gl_PointSize = 3.0 + 6.0 * pow(aProbability / 100.0, 1.5);
        }
      `,fragmentShader:`
        uniform vec3 uSunDirection;
        uniform float uTime;
        uniform float uOpacity;
        uniform float uTerminator;
        varying float vProb;
        varying vec3 vWorldPos;

        // HSV → RGB (classic iq formula)
        vec3 hsv2rgb(vec3 c) {
          vec3 p = abs(fract(c.xxx + vec3(0.0,2.0/3.0,1.0/3.0)) * 6.0 - 3.0);
          return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
        }

        void main() {
          float p = vProb / 100.0;        // 0..1
          if (p < 0.02) discard;          // skip near-zero cells

          // Night-side mask: aurora is invisible in daylight — but only when the Terminator
          // master switch is on. With terminator off, aurora glows globally.
          float ndotl = dot(normalize(vWorldPos), normalize(uSunDirection));
          float nightMask = mix(1.0, smoothstep(0.10, -0.10, ndotl), uTerminator);
          if (nightMask < 0.01) discard;

          // Gentle shimmer — very low amplitude so it reads as faint auroral motion
          float shimmer = 1.0 + 0.08 * sin(uTime * 2.3 + vProb * 17.3);

          // Hue: 0.35 (green) at low prob → 0.55 (cyan) at mid → 0.85 (magenta) at high
          float hue = 0.35 + 0.50 * p;
          float sat = mix(0.6, 1.0, p);
          float val = mix(0.4, 1.0, p) * shimmer;
          vec3 col = hsv2rgb(vec3(hue, sat, val));

          // Opacity: quadratic so faint cells are nearly invisible, bright ones pop
          float alpha = pow(p, 1.8) * nightMask * uOpacity;

          // Soft disc for point
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          alpha *= smoothstep(0.5, 0.2, d);

          gl_FragColor = vec4(col, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Tn}),this.points=new mn(t,this.material),this.points.renderOrder=4,this.mesh=new ie,this.mesh.rotation.z=aM,this.mesh.add(this.points),this.flatMaterial=new de({uniforms:{uTime:this.material.uniforms.uTime,uOpacity:this.material.uniforms.uOpacity},vertexShader:`
        attribute float aProbability;
        varying float vProb;
        void main() {
          vProb = aProbability;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 3.0 + 6.0 * pow(aProbability / 100.0, 1.5);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uOpacity;
        varying float vProb;

        vec3 hsv2rgb(vec3 c) {
          vec3 p = abs(fract(c.xxx + vec3(0.0,2.0/3.0,1.0/3.0)) * 6.0 - 3.0);
          return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
        }

        void main() {
          float p = vProb / 100.0;
          if (p < 0.02) discard;
          float shimmer = 1.0 + 0.08 * sin(uTime * 2.3 + vProb * 17.3);
          float hue = 0.35 + 0.50 * p;
          float sat = mix(0.6, 1.0, p);
          float val = mix(0.4, 1.0, p) * shimmer;
          vec3 col = hsv2rgb(vec3(hue, sat, val));
          float alpha = pow(p, 1.8) * uOpacity;
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          alpha *= smoothstep(0.5, 0.2, d);
          gl_FragColor = vec4(col, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Tn}),this.flatMesh=new mn(s,this.flatMaterial),this.flatMesh.position.z=.004}update(t){const e=this.RADIUS,i=Math.min(t.pointCount,Ur.MAX_POINTS),s=this.posAttr.array,r=this.flatPosAttr.array,o=this.probAttr.array;for(let a=0;a<i;a++){const l=t.data[a*3+0],c=t.data[a*3+1],h=t.data[a*3+2],u=l*Math.PI/180,d=c*Math.PI/180,p=Math.cos(d);s[a*3+0]=e*p*Math.cos(u),s[a*3+1]=e*Math.sin(d),s[a*3+2]=-e*p*Math.sin(u),r[a*3+0]=l/180,r[a*3+1]=c/180,r[a*3+2]=.004,o[a]=h}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.probAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,i),this.flatMesh.geometry.setDrawRange(0,i)}setSunDirection(t){this.sunDirUniform.value.copy(t)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.timeUniform.value=t,this.material.uniforms.uTime.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}setKp(t){this.setOpacity(fs.clamp(.7+.1*t,.7,1.4))}setTerminatorEnabled(t){this.material.uniforms.uTerminator.value=t?1:0}}const lM=23.44*Math.PI/180;class zs{mesh;flatMesh;points;material;posAttr;flatPosAttr;frpAttr;hashAttr;static MAX_POINTS=6e4;RADIUS=1.0015;constructor(){const t=new Ot,e=new Float32Array(zs.MAX_POINTS*3),i=new Float32Array(zs.MAX_POINTS),s=new Float32Array(zs.MAX_POINTS);this.posAttr=new Kt(e,3),this.frpAttr=new Kt(i,1),this.hashAttr=new Kt(s,1),this.posAttr.setUsage(Ee),this.frpAttr.setUsage(Ee),this.hashAttr.setUsage(Ee),t.setAttribute("position",this.posAttr),t.setAttribute("aFrp",this.frpAttr),t.setAttribute("aHash",this.hashAttr),t.setDrawRange(0,0);const r=new Ot,o=new Float32Array(zs.MAX_POINTS*3);this.flatPosAttr=new Kt(o,3),this.flatPosAttr.setUsage(Ee),r.setAttribute("position",this.flatPosAttr),r.setAttribute("aFrp",this.frpAttr),r.setAttribute("aHash",this.hashAttr),r.setDrawRange(0,0),this.material=new de({uniforms:{uTime:{value:0},uOpacity:{value:1},uSizeBoost:{value:1}},vertexShader:`
        attribute float aFrp;
        attribute float aHash;
        uniform float uSizeBoost;
        varying float vFrp;
        varying float vHash;
        void main() {
          vFrp = aFrp;
          vHash = aHash;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          // Size scales with sqrt(FRP) — FRP spans many orders of magnitude, so a power
          // compression keeps the largest fires from dominating. Clamp to a sane range.
          float s = 2.0 + 6.0 * clamp(sqrt(aFrp) / 18.0, 0.0, 1.0);
          gl_PointSize = s * uSizeBoost;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uOpacity;
        varying float vFrp;
        varying float vHash;
        void main() {
          // Soft circular sprite with a hotter core
          vec2 q = gl_PointCoord - 0.5;
          float d = length(q);
          if (d > 0.5) discard;

          // FRP-driven intensity: 0..1 across the typical observed range (sqrt-compressed)
          float t = clamp(sqrt(vFrp) / 22.0, 0.0, 1.0);

          // Color ramp: deep red (cool) → orange (mid) → white-yellow (hot core)
          vec3 cold = vec3(0.85, 0.15, 0.05);
          vec3 mid  = vec3(1.00, 0.55, 0.10);
          vec3 hot  = vec3(1.00, 0.95, 0.70);
          vec3 col = mix(cold, mid, smoothstep(0.0, 0.55, t));
          col      = mix(col,  hot, smoothstep(0.50, 1.0,  t));

          // Hot core: brighten the centre of the sprite
          float core = smoothstep(0.45, 0.0, d);
          col = mix(col, vec3(1.0, 0.95, 0.85), core * 0.4 * t);

          // Flicker: higher-FRP fires flicker faster. Per-point hash decorrelates them.
          float freq = 6.0 + 8.0 * t;
          float flicker = 0.75 + 0.25 * sin(uTime * freq + vHash * 31.4);

          float falloff = smoothstep(0.5, 0.05, d);
          float alpha = falloff * flicker * uOpacity;

          gl_FragColor = vec4(col, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Tn}),this.points=new mn(t,this.material),this.mesh=new ie,this.mesh.rotation.z=lM,this.mesh.add(this.points),this.flatMesh=new mn(r,this.material)}update(t){const e=this.RADIUS,i=Math.min(t.detections.length,zs.MAX_POINTS),s=this.posAttr.array,r=this.frpAttr.array,o=this.hashAttr.array,a=this.flatPosAttr.array;for(let l=0;l<i;l++){const c=t.detections[l],h=c.lon*Math.PI/180,u=c.lat*Math.PI/180,d=Math.cos(u);s[l*3+0]=e*d*Math.cos(h),s[l*3+1]=e*Math.sin(u),s[l*3+2]=-e*d*Math.sin(h),a[l*3+0]=c.lon/180,a[l*3+1]=c.lat/180,a[l*3+2]=.001,r[l]=c.frp,o[l]=Math.abs(Math.sin(c.lat*12.9898+c.lon*78.233))*43758.5453%1}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.frpAttr.needsUpdate=!0,this.hashAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,i),this.flatMesh.geometry.setDrawRange(0,i)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}setSizeBoost(t){this.material.uniforms.uSizeBoost.value=t}}const cM=23.44*Math.PI/180;class Ei{mesh;flatMesh;points;material;posAttr;flatPosAttr;magAttr;depthAttr;timeAttr;hashAttr;static MAX_POINTS=2e4;RADIUS=1.0017;constructor(){const t=new Ot,e=new Float32Array(Ei.MAX_POINTS*3),i=new Float32Array(Ei.MAX_POINTS),s=new Float32Array(Ei.MAX_POINTS),r=new Float32Array(Ei.MAX_POINTS),o=new Float32Array(Ei.MAX_POINTS);this.posAttr=new Kt(e,3),this.magAttr=new Kt(i,1),this.depthAttr=new Kt(s,1),this.timeAttr=new Kt(r,1),this.hashAttr=new Kt(o,1),this.posAttr.setUsage(Ee),this.magAttr.setUsage(Ee),this.depthAttr.setUsage(Ee),this.timeAttr.setUsage(Ee),this.hashAttr.setUsage(Ee),t.setAttribute("position",this.posAttr),t.setAttribute("aMag",this.magAttr),t.setAttribute("aDepthKm",this.depthAttr),t.setAttribute("aEventTime",this.timeAttr),t.setAttribute("aHash",this.hashAttr),t.setDrawRange(0,0);const a=new Ot,l=new Float32Array(Ei.MAX_POINTS*3);this.flatPosAttr=new Kt(l,3),this.flatPosAttr.setUsage(Ee),a.setAttribute("position",this.flatPosAttr),a.setAttribute("aMag",this.magAttr),a.setAttribute("aDepthKm",this.depthAttr),a.setAttribute("aEventTime",this.timeAttr),a.setAttribute("aHash",this.hashAttr),a.setDrawRange(0,0),this.material=new de({uniforms:{uTime:{value:0},uNow:{value:Date.now()},uOpacity:{value:1}},vertexShader:`
        attribute float aMag;
        attribute float aDepthKm;
        attribute float aEventTime;
        attribute float aHash;
        uniform float uNow;
        varying float vMag;
        varying float vDepthKm;
        varying float vFade;
        varying float vAgeDays;
        varying float vHash;
        void main() {
          vMag = aMag;
          vDepthKm = aDepthKm;
          vHash = aHash;

          float ageMs = max(uNow - aEventTime, 0.0);
          vAgeDays = ageMs / 86400000.0;
          vFade = clamp(1.0 - vAgeDays / 7.0, 0.0, 1.0);

          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          // Magnitude is already log-scale (Richter/moment), so size scales linearly
          // with it rather than needing FireLayer's sqrt compression for raw-watt FRP.
          // Floor raised from 2px so the common M1-3 case doesn't disappear against
          // brighter layers (Fires) sharing the globe — see ROADMAP "exaggerating
          // subtle live events".
          float s = 4.0 + 10.0 * clamp((aMag - 1.0) / 7.0, 0.0, 1.0);
          gl_PointSize = s;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uOpacity;
        varying float vMag;
        varying float vDepthKm;
        varying float vFade;
        varying float vAgeDays;
        varying float vHash;
        void main() {
          // Soft circular sprite with a brighter core
          vec2 q = gl_PointCoord - 0.5;
          float d = length(q);
          if (d > 0.5) discard;

          // Depth-driven color ramp: shallow crust (red) -> mid crust (amber) -> deep
          // subduction-zone events (blue).
          float t = clamp(vDepthKm / 300.0, 0.0, 1.0);
          vec3 shallow = vec3(0.95, 0.20, 0.15);
          vec3 mid     = vec3(0.95, 0.65, 0.15);
          vec3 deep    = vec3(0.20, 0.40, 0.95);
          vec3 col = mix(shallow, mid, smoothstep(0.0, 0.35, t));
          col      = mix(col, deep, smoothstep(0.30, 1.0, t));

          float core = smoothstep(0.45, 0.0, d);
          col = mix(col, vec3(1.0, 0.95, 0.9), core * 0.35);

          // Events under a day old settle with a decaying pulse; older events sit steady.
          float pulseAmount = clamp(1.0 - vAgeDays, 0.0, 1.0);
          float pulse = 1.0 + 0.35 * pulseAmount * sin(uTime * 5.0 + vHash * 31.4);

          float falloff = smoothstep(0.5, 0.05, d);
          float alpha = falloff * vFade * uOpacity * pulse;

          gl_FragColor = vec4(col, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Tn}),this.points=new mn(t,this.material),this.mesh=new ie,this.mesh.rotation.z=cM,this.mesh.add(this.points),this.flatMesh=new mn(a,this.material)}update(t){const e=this.RADIUS,i=Math.min(t.events.length,Ei.MAX_POINTS),s=this.posAttr.array,r=this.magAttr.array,o=this.depthAttr.array,a=this.timeAttr.array,l=this.hashAttr.array,c=this.flatPosAttr.array;for(let h=0;h<i;h++){const u=t.events[h],d=u.lon*Math.PI/180,p=u.lat*Math.PI/180,g=Math.cos(p);s[h*3+0]=e*g*Math.cos(d),s[h*3+1]=e*Math.sin(p),s[h*3+2]=-e*g*Math.sin(d),c[h*3+0]=u.lon/180,c[h*3+1]=u.lat/180,c[h*3+2]=.001,r[h]=u.mag,o[h]=u.depthKm,a[h]=u.timeMs,l[h]=Math.abs(Math.sin(u.lat*12.9898+u.lon*78.233))*43758.5453%1}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.magAttr.needsUpdate=!0,this.depthAttr.needsUpdate=!0,this.timeAttr.needsUpdate=!0,this.hashAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,i),this.flatMesh.geometry.setDrawRange(0,i)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}setNow(t){this.material.uniforms.uNow.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}}const hM=23.44*Math.PI/180;class Bs{mesh;flatMesh;points;material;posAttr;flatPosAttr;intensityAttr;hashAttr;static MAX_STORMS=64;RADIUS=1.012;constructor(){const t=new Ot,e=new Float32Array(Bs.MAX_STORMS*3),i=new Float32Array(Bs.MAX_STORMS),s=new Float32Array(Bs.MAX_STORMS);this.posAttr=new Kt(e,3),this.intensityAttr=new Kt(i,1),this.hashAttr=new Kt(s,1),this.posAttr.setUsage(Ee),this.intensityAttr.setUsage(Ee),this.hashAttr.setUsage(Ee),t.setAttribute("position",this.posAttr),t.setAttribute("aIntensity",this.intensityAttr),t.setAttribute("aHash",this.hashAttr),t.setDrawRange(0,0);const r=new Ot,o=new Float32Array(Bs.MAX_STORMS*3);this.flatPosAttr=new Kt(o,3),this.flatPosAttr.setUsage(Ee),r.setAttribute("position",this.flatPosAttr),r.setAttribute("aIntensity",this.intensityAttr),r.setAttribute("aHash",this.hashAttr),r.setDrawRange(0,0),this.material=new de({uniforms:{uTime:{value:0},uOpacity:{value:.95}},vertexShader:`
        attribute float aIntensity;
        attribute float aHash;
        varying float vIntensity;
        varying float vHash;
        void main() {
          vIntensity = aIntensity;
          vHash = aHash;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          // Size: 32 px for a tropical depression up to ~80 px for Cat-5 (160 kt+).
          // Hurricanes are physically huge (500–1500 km eyewall-to-eyewall), so they read
          // best as prominent sprites that compete with the cloud layer for attention.
          float t = clamp(aIntensity / 160.0, 0.0, 1.0);
          gl_PointSize = 32.0 + 48.0 * t;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uOpacity;
        varying float vIntensity;
        varying float vHash;

        void main() {
          vec2 q = gl_PointCoord - 0.5;
          float r = length(q);
          if (r > 0.5) discard;
          float ang = atan(q.y, q.x);

          float t = clamp(vIntensity / 160.0, 0.0, 1.0);

          // Color ramp tuned to read against a bright daylit ocean: cyan-white (TD) →
          // yellow (TS) → orange (Cat1-2) → deep red (Cat3) → magenta (Cat4-5). Direct
          // RGB rather than HSV so the high-intensity end isn't a desaturated pink.
          vec3 cold = vec3(0.50, 0.95, 1.00);   // TD
          vec3 mid  = vec3(1.00, 0.85, 0.30);   // TS
          vec3 hot1 = vec3(1.00, 0.40, 0.10);   // Cat 1-2
          vec3 hot2 = vec3(1.00, 0.15, 0.25);   // Cat 3
          vec3 hot3 = vec3(0.95, 0.20, 0.70);   // Cat 4-5
          vec3 col = mix(cold, mid,  smoothstep(0.0, 0.30, t));
          col       = mix(col,  hot1, smoothstep(0.30, 0.55, t));
          col       = mix(col,  hot2, smoothstep(0.55, 0.75, t));
          col       = mix(col,  hot3, smoothstep(0.75, 1.0, t));

          // Pulse: faster as intensity rises. Decorrelated per storm by hash.
          float pulseFreq = 1.5 + 4.5 * t;
          float pulse = 0.85 + 0.15 * sin(uTime * pulseFreq + vHash * 31.4);

          // Bright white eye — much bigger than before so the storm is unmistakable.
          float eye = smoothstep(0.18, 0.0, r);
          col = mix(col, vec3(1.0, 0.98, 0.92), eye * 0.85);

          // Spiral arms — two-arm comma, rotating, brighter than the old version
          float spin = uTime * (0.6 + 0.4 * t) + vHash * 6.2831;
          float arms = 0.5 + 0.5 * cos(2.0 * (ang - spin) + 8.0 * r);
          float armMask = smoothstep(0.05, 0.30, r) * smoothstep(0.50, 0.20, r);

          // Outer ring — defines the storm's edge
          float ring = smoothstep(0.50, 0.46, r) - smoothstep(0.46, 0.36, r);
          ring = max(ring, 0.0);

          // Soft falloff so the disc isn't a hard circle
          float falloff = smoothstep(0.50, 0.0, r);

          // Alpha: opaque eye, semi-opaque body modulated by arms, ring. Pulse modulates everything.
          float bodyAlpha = (eye * 1.5 + arms * armMask * 0.75 + ring * 0.9) * falloff * pulse;
          float alpha = clamp(bodyAlpha, 0.0, 1.0) * uOpacity;

          gl_FragColor = vec4(col, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Ni}),this.points=new mn(t,this.material),this.mesh=new ie,this.mesh.rotation.z=hM,this.mesh.add(this.points),this.flatMesh=new mn(r,this.material)}update(t){const e=this.RADIUS,i=Math.min(t.storms.length,Bs.MAX_STORMS),s=this.posAttr.array,r=this.flatPosAttr.array,o=this.intensityAttr.array,a=this.hashAttr.array;for(let l=0;l<i;l++){const c=t.storms[l],h=c.lon*Math.PI/180,u=c.lat*Math.PI/180,d=Math.cos(u);s[l*3+0]=e*d*Math.cos(h),s[l*3+1]=e*Math.sin(u),s[l*3+2]=-e*d*Math.sin(h),r[l*3+0]=c.lon/180,r[l*3+1]=c.lat/180,r[l*3+2]=.002,o[l]=c.intensityKt,a[l]=Math.abs(uM(c.id))%1}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.intensityAttr.needsUpdate=!0,this.hashAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,i),this.flatMesh.geometry.setDrawRange(0,i)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}}function uM(n){let t=0;for(let e=0;e<n.length;e++)t=t*31+n.charCodeAt(e)|0;return Math.abs(Math.sin(t*1e-4))*1e3}const dM=23.44*Math.PI/180;class ml{mesh;flatMesh;bestTrackLines;forecastLines;coneMesh;bestTrackLinesFlat;forecastLinesFlat;coneMeshFlat;RADIUS=1.013;static FLAT_Z_CONE=.0025;static FLAT_Z_LINE=.003;constructor(){const t=new mi({color:13625087,transparent:!0,opacity:.85,depthWrite:!1});this.bestTrackLines=new Li(new Ot,t),this.bestTrackLinesFlat=new Li(new Ot,t);const e=new mi({color:16773280,transparent:!0,opacity:.85,depthWrite:!1});this.forecastLines=new Li(new Ot,e),this.forecastLinesFlat=new Li(new Ot,e);const i=new Ke({color:16773280,transparent:!0,opacity:.18,depthWrite:!1,side:ai});this.coneMesh=new Jt(new Ot,i),this.coneMeshFlat=new Jt(new Ot,i),this.mesh=new ie,this.mesh.rotation.z=dM,this.mesh.add(this.coneMesh),this.mesh.add(this.bestTrackLines),this.mesh.add(this.forecastLines),this.flatMesh=new ie,this.flatMesh.add(this.coneMeshFlat),this.flatMesh.add(this.bestTrackLinesFlat),this.flatMesh.add(this.forecastLinesFlat)}update(t){const e=[],i=[],s=[],r=[],o=[],a=[],l=[],c=[],h=this.RADIUS,u=(v,m)=>{const f=v*Math.PI/180,b=m*Math.PI/180,S=Math.cos(b);return[h*S*Math.cos(f),h*Math.sin(b),-h*S*Math.sin(f)]},d=v=>(m,f)=>[m/180,f/180,v],p=d(ml.FLAT_Z_LINE),g=d(ml.FLAT_Z_CONE);for(const v of t)v.bestTrack&&(ka(v.bestTrack,e,u),ka(v.bestTrack,o,p)),v.forecastTrack&&(ka(v.forecastTrack,i,u),ka(v.forecastTrack,a,p)),v.forecastCone&&(tf(v.forecastCone,s,r,u),tf(v.forecastCone,l,c,g));Mr(this.bestTrackLines.geometry,"position",new Float32Array(e),3),Mr(this.forecastLines.geometry,"position",new Float32Array(i),3),Mr(this.coneMesh.geometry,"position",new Float32Array(s),3),this.coneMesh.geometry.setIndex(r.length?r:null),this.coneMesh.geometry.computeBoundingSphere(),Mr(this.bestTrackLinesFlat.geometry,"position",new Float32Array(o),3),Mr(this.forecastLinesFlat.geometry,"position",new Float32Array(a),3),Mr(this.coneMeshFlat.geometry,"position",new Float32Array(l),3),this.coneMeshFlat.geometry.setIndex(c.length?c:null),this.coneMeshFlat.geometry.computeBoundingSphere()}setRotationY(t){this.bestTrackLines.rotation.y=t,this.forecastLines.rotation.y=t,this.coneMesh.rotation.y=t}setOpacity(t){this.bestTrackLines.material.opacity=t,this.forecastLines.material.opacity=t,this.coneMesh.material.opacity=.18*t}}function ka(n,t,e){for(const i of n)if(!(i.type!=="line"||i.coords.length<2))for(let s=0;s<i.coords.length-1;s++){const r=e(i.coords[s][0],i.coords[s][1]),o=e(i.coords[s+1][0],i.coords[s+1][1]);t.push(r[0],r[1],r[2],o[0],o[1],o[2])}}function tf(n,t,e,i){for(const s of n){if(s.type!=="polygon"||s.coords.length<3)continue;const r=t.length/3;for(const[o,a]of s.coords){const l=i(o,a);t.push(l[0],l[1],l[2])}for(let o=1;o<s.coords.length-1;o++)e.push(r,r+o,r+o+1)}}function Mr(n,t,e,i){const s=n.getAttribute(t);s&&s.array.length===e.length?(s.array.set(e),s.needsUpdate=!0):n.setAttribute(t,new Kt(e,i))}const fM=23.44*Math.PI/180,ef=`
  uniform vec3  uShadowDir;
  uniform float uHasShadow;
  uniform float uUmbraCosCutoff;
  uniform float uPenumbraCosCutoff;
  uniform float uMaxDim;

  vec4 shadowColorAt(vec3 surfaceNormal) {
    float cosAng = dot(normalize(surfaceNormal), normalize(uShadowDir));
    // cosAng = 1 at the shadow centre, cos(penumbra) at the penumbra edge.
    if (cosAng < uPenumbraCosCutoff) discard;

    // Dim ramp: solid uMaxDim inside the umbra, smooth fade out through the
    // penumbra to fully transparent at the penumbra edge. Same dark-blue tint
    // for the whole shadow — matches what you actually see during an eclipse
    // (deep dim that softens off, not two coloured regions).
    float dim;
    if (cosAng >= uUmbraCosCutoff) {
      dim = uMaxDim;
    } else {
      float t = (cosAng - uPenumbraCosCutoff) / (uUmbraCosCutoff - uPenumbraCosCutoff);
      dim = uMaxDim * smoothstep(0.0, 1.0, t);
    }
    vec3 color = vec3(0.0, 0.0, 0.05);

    // Diamond-ring at the umbra boundary — a thin, hard-edged warm outline
    // straddling the umbra/penumbra cutoff.
    //
    // CRITICAL: in cos-angle space the entire umbra interior only spans
    // 1 − cos(UMBRA_ANGULAR_RADIUS) ≈ 0.00026, so ringHalfWidth must be
    // *much* smaller than that or the band swallows the whole disc and the
    // umbra reads as solid orange. Mapping cos-distance back to surface
    // arc: at the umbra edge, sin(0.023) ≈ 0.023, so 1° on the surface
    // equals about 0.023 × π/180 = 4 × 10⁻⁴ rad → cos-distance ≈ 0.023 ×
    // 4 × 10⁻⁴ = ~10⁻⁵. Hence the values below: 0.0001 cos-half-width is
    // a ~0.5° band on each side of the boundary, ~1° total — visible but
    // narrow. AA is one-tenth of that for crisp edges.
    float ringDist      = abs(cosAng - uUmbraCosCutoff);
    float ringHalfWidth = 0.00006;    // ~0.3° per side → ~0.6° band total
    float ringEdgeAA    = 0.000010;   // crisp edges
    float ring = 1.0 - smoothstep(ringHalfWidth, ringHalfWidth + ringEdgeAA, ringDist);
    color = mix(color, vec3(1.0, 0.75, 0.30), ring * 0.9);

    return vec4(color, dim);
  }
`,pM=3e-4,mM=.0035;class Do{mesh;flatMesh;shell;shellMat;pathLine;pathMat;inner;flatPathGeom;flatPathLines;static UMBRA_ANGULAR_RADIUS=.023;static PENUMBRA_ANGULAR_RADIUS=.47;constructor(){this.inner=new ie;const t=new In(1.001,96,48),e={uShadowDir:{value:new C(1,0,0)},uHasShadow:{value:0},uUmbraCosCutoff:{value:Math.cos(Do.UMBRA_ANGULAR_RADIUS)},uPenumbraCosCutoff:{value:Math.cos(Do.PENUMBRA_ANGULAR_RADIUS)},uMaxDim:{value:.85}};this.shellMat=new de({uniforms:e,vertexShader:`
        varying vec3 vNormal;
        void main() {
          // The sphere's vertex positions are already unit-length normals in local space.
          vNormal = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        ${ef}
        void main() {
          if (uHasShadow < 0.5) discard;
          gl_FragColor = shadowColorAt(vNormal);
        }
      `,transparent:!0,depthWrite:!1}),this.shell=new Jt(t,this.shellMat),this.shell.renderOrder=-1,this.inner.add(this.shell),this.pathMat=new mi({color:16750899,transparent:!0,opacity:.9,depthWrite:!1}),this.pathLine=new Ho(new Ot,this.pathMat),this.pathLine.renderOrder=2,this.inner.add(this.pathLine),this.mesh=new ie,this.mesh.rotation.z=fM,this.mesh.add(this.inner),this.mesh.visible=!1,this.flatMesh=new ie;const i=new Bi(6,1),s=new de({uniforms:e,vertexShader:`
        varying vec2 vGeo;
        void main() {
          // Pass plane-local x/y straight through; the fragment shader turns them
          // into lon/lat. Using position (not uv) is what makes the wrap copies
          // work, since uv would restart at 0 on each copy.
          vGeo = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vGeo;
        ${ef}
        void main() {
          if (uHasShadow < 0.5) discard;
          // Plane spans x ∈ [−1, 1] → lon ∈ [−180°, 180°] and y ∈ [−0.5, 0.5] →
          // lat ∈ [−90°, 90°], so both are simply ·π to reach radians.
          float lon = vGeo.x * ${Math.PI};
          float lat = vGeo.y * ${Math.PI};
          float cosLat = cos(lat);
          // Same geographic convention as the rest of the app: Greenwich at +X,
          // +90°E at −Z (see EarthquakeLayer's position write-up).
          gl_FragColor = shadowColorAt(vec3(cosLat * cos(lon), sin(lat), -cosLat * sin(lon)));
        }
      `,transparent:!0,depthWrite:!1}),r=new Jt(i,s);r.position.z=pM,r.renderOrder=-1,this.flatMesh.add(r),this.flatPathGeom=new Ot,this.flatPathLines=[0,-2,2].map(o=>{const a=new Li(this.flatPathGeom,this.pathMat);return a.position.x=o,a.position.z=mM,a.renderOrder=2,a.frustumCulled=!1,a});for(const o of this.flatPathLines)this.flatMesh.add(o);this.flatMesh.visible=!1}setLiveShadow(t){if(!t){this.shellMat.uniforms.uHasShadow.value=0;return}this.shellMat.uniforms.uShadowDir.value.copy(t).normalize(),this.shellMat.uniforms.uHasShadow.value=1}static PATH_SUBDIVISIONS_PER_SEGMENT=24;setPath(t){if(t.length===0){this.pathLine.geometry.setAttribute("position",new Kt(new Float32Array(0),3)),this.setFlatPath([]);return}const e=1.0015,i=Do.PATH_SUBDIVISIONS_PER_SEGMENT,s=t.length-1,r=t.length===1?1:s*i+1,o=new Float32Array(r*3),a=new C,l=new C,c=new C,h=[];let u=0;const d=g=>{o[u*3]=g.x*e,o[u*3+1]=g.y*e,o[u*3+2]=g.z*e,u++,h.push(Math.atan2(-g.z,g.x)*180/Math.PI,Math.asin(fs.clamp(g.y,-1,1))*180/Math.PI)};if(t.length===1)a.copy(t[0]).normalize(),d(a);else{for(let g=0;g<s;g++){a.copy(t[g]).normalize(),l.copy(t[g+1]).normalize();const v=fs.clamp(a.dot(l),-1,1),m=Math.acos(v),f=Math.sin(m);for(let b=0;b<i;b++){const S=b/i;if(f<1e-6)c.copy(a).lerp(l,S).normalize();else{const x=Math.sin((1-S)*m)/f,D=Math.sin(S*m)/f;c.set(a.x*x+l.x*D,a.y*x+l.y*D,a.z*x+l.z*D),c.normalize()}d(c)}}l.copy(t[s]).normalize(),d(l)}const p=new Ot;p.setAttribute("position",new Kt(o,3)),p.computeBoundingSphere(),this.pathLine.geometry.dispose(),this.pathLine.geometry=p,this.setFlatPath(h)}setFlatPath(t){const e=t.length/2,i=[];for(let r=1;r<e;r++){const o=t[(r-1)*2],a=t[(r-1)*2+1],l=t[r*2],c=t[r*2+1];Math.abs(l-o)>180||i.push(o/180,a/180,0,l/180,c/180,0)}const s=new Ot;s.setAttribute("position",new ne(i,3)),s.computeBoundingSphere(),this.flatPathGeom.dispose(),this.flatPathGeom=s;for(const r of this.flatPathLines)r.geometry=s}setRotationY(t){this.inner.rotation.y=t}setPathVisible(t){this.pathLine.visible=t;for(const e of this.flatPathLines)e.visible=t}}const gM=23.44*Math.PI/180;class Fn{mesh;flatMesh;points;material;posAttr;flatPosAttr;spawnAttr;polarityAttr;writeIndex=0;filled=!1;static MAX_STRIKES=1024;static LIFETIME=.6;RADIUS=1.002;constructor(){const t=new Ot,e=new Float32Array(Fn.MAX_STRIKES*3),i=new Float32Array(Fn.MAX_STRIKES),s=new Float32Array(Fn.MAX_STRIKES);i.fill(-1e9),this.posAttr=new Kt(e,3),this.spawnAttr=new Kt(i,1),this.polarityAttr=new Kt(s,1),this.posAttr.setUsage(Ee),this.spawnAttr.setUsage(Ee),this.polarityAttr.setUsage(Ee),t.setAttribute("position",this.posAttr),t.setAttribute("aSpawn",this.spawnAttr),t.setAttribute("aPolarity",this.polarityAttr),t.setDrawRange(0,Fn.MAX_STRIKES);const r=new Ot,o=new Float32Array(Fn.MAX_STRIKES*3);this.flatPosAttr=new Kt(o,3),this.flatPosAttr.setUsage(Ee),r.setAttribute("position",this.flatPosAttr),r.setAttribute("aSpawn",this.spawnAttr),r.setAttribute("aPolarity",this.polarityAttr),r.setDrawRange(0,Fn.MAX_STRIKES),this.material=new de({uniforms:{uTime:{value:0},uLifetime:{value:Fn.LIFETIME},uOpacity:{value:1}},vertexShader:`
        attribute float aSpawn;
        attribute float aPolarity;
        uniform float uTime;
        uniform float uLifetime;
        varying float vAge01;
        varying float vPolarity;
        void main() {
          float age = uTime - aSpawn;
          vAge01 = clamp(age / uLifetime, 0.0, 1.0);
          vPolarity = aPolarity;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          // Size: pops to ~14 px on spawn, fades to ~5 px. Dead strikes shrink to ~0 so
          // even if alpha were misread they'd be invisible.
          float size = mix(14.0, 5.0, vAge01);
          if (vAge01 >= 1.0) size = 0.0;
          gl_PointSize = size;
        }
      `,fragmentShader:`
        varying float vAge01;
        varying float vPolarity;
        uniform float uOpacity;
        void main() {
          if (vAge01 >= 1.0) discard;

          vec2 q = gl_PointCoord - 0.5;
          float r = length(q);
          if (r > 0.5) discard;

          // Soft disc with a hot core. Tight gaussian-ish falloff so strikes look like
          // pinpoint flashes, not blobs.
          float falloff = exp(-r * r * 18.0);

          // Polarity tint: positive strikes lean warm white, negative lean cool blue-white.
          // Most strikes have polarity 0 (unknown) → render as neutral white-blue.
          vec3 cool = vec3(0.85, 0.95, 1.00);
          vec3 warm = vec3(1.00, 0.96, 0.88);
          vec3 col  = mix(cool, warm, smoothstep(0.0, 1.0, vPolarity * 0.5 + 0.5));

          // Age curve: fast bright spike then exponential decay. Initial flash is harsh,
          // tail is gentle — same shape as a real lightning return-stroke afterglow.
          float age = vAge01;
          float intensity = (age < 0.08)
            ? mix(0.6, 1.0, age / 0.08)     // sharp rise to peak
            : exp(-(age - 0.08) * 6.0);     // exponential fade

          float alpha = falloff * intensity * uOpacity;
          gl_FragColor = vec4(col, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Tn}),this.points=new mn(t,this.material),this.mesh=new ie,this.mesh.rotation.z=gM,this.mesh.add(this.points),this.flatMesh=new mn(r,this.material)}addStrike(t,e){const i=this.RADIUS,s=t.lon*Math.PI/180,r=t.lat*Math.PI/180,o=Math.cos(r),a=this.writeIndex,l=this.posAttr.array,c=this.flatPosAttr.array,h=this.spawnAttr.array,u=this.polarityAttr.array;l[a*3+0]=i*o*Math.cos(s),l[a*3+1]=i*Math.sin(r),l[a*3+2]=-i*o*Math.sin(s),c[a*3+0]=t.lon/180,c[a*3+1]=t.lat/180,c[a*3+2]=.003,h[a]=e,u[a]=t.polarity,this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.spawnAttr.needsUpdate=!0,this.polarityAttr.needsUpdate=!0,this.writeIndex=(this.writeIndex+1)%Fn.MAX_STRIKES,this.writeIndex===0&&(this.filled=!0)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}liveStrikeCount(t){const e=this.spawnAttr.array;let i=0;const s=this.filled?Fn.MAX_STRIKES:this.writeIndex;for(let r=0;r<s;r++)t-e[r]<Fn.LIFETIME&&i++;return i}}const vM=23.44*Math.PI/180,_M={temperature:0,humidity:1,pressure:2,water:3,cloud:4};class yM{mesh;sphere;material;currentTexture=null;constructor(t=1.006){const e=new In(t,96,48);this.material=new de({uniforms:{uMap:{value:null},uHasData:{value:0},uPalette:{value:0},uOpacity:{value:.65}},vertexShader:`
        varying vec3 vLocalNormal;
        void main() {
          // Local-frame surface normal — for a unit sphere centred at origin, this equals
          // the normalised vertex position. We compute the UV per-fragment from this in the
          // fragment shader rather than interpolating a vUv, because the prime-meridian
          // wrap-around (texture u=0 meets u=1 here) creates a discontinuity that the
          // rasterizer's linear vUv interpolation can't bridge — fragments straddling the
          // seam would sample the wrong half of the texture. The normal is continuous, so
          // computing UV from it per-pixel avoids the seam entirely.
          vLocalNormal = normalize(normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        uniform float uHasData;
        uniform int   uPalette;
        uniform float uOpacity;
        varying vec3 vLocalNormal;
        const float PI = 3.14159265359;

        // Five-stop colour palettes. Each row maps a normalised value t ∈ [0,1] to RGB.
        // Sample with linear interpolation between adjacent stops.
        vec3 sample5(vec3 c0, vec3 c1, vec3 c2, vec3 c3, vec3 c4, float t) {
          t = clamp(t, 0.0, 1.0);
          float seg = t * 4.0;
          int   i   = int(floor(seg));
          float f   = fract(seg);
          if (i == 0) return mix(c0, c1, f);
          if (i == 1) return mix(c1, c2, f);
          if (i == 2) return mix(c2, c3, f);
          return mix(c3, c4, f);
        }

        // Palette 0 — temperature: deep blue (cold) → cyan → green → yellow → red (hot)
        vec3 paletteTemp(float t) {
          return sample5(
            vec3(0.10, 0.10, 0.55),
            vec3(0.10, 0.65, 0.95),
            vec3(0.45, 0.85, 0.40),
            vec3(0.95, 0.85, 0.20),
            vec3(0.85, 0.15, 0.15),
            t
          );
        }
        // Palette 1 — humidity / aridity: tan (dry) → green → blue (wet)
        vec3 paletteHumidity(float t) {
          return sample5(
            vec3(0.70, 0.55, 0.30),
            vec3(0.80, 0.75, 0.45),
            vec3(0.55, 0.75, 0.40),
            vec3(0.30, 0.60, 0.75),
            vec3(0.15, 0.30, 0.65),
            t
          );
        }
        // Palette 2 — pressure: violet (low) → blue → cyan → yellow → red (high)
        vec3 palettePressure(float t) {
          return sample5(
            vec3(0.45, 0.25, 0.65),
            vec3(0.30, 0.55, 0.85),
            vec3(0.55, 0.85, 0.55),
            vec3(0.95, 0.85, 0.35),
            vec3(0.85, 0.30, 0.20),
            t
          );
        }
        // Palette 3 — water vapour: pale (dry) → mid-blue → deep blue (wet)
        vec3 paletteWater(float t) {
          return sample5(
            vec3(0.85, 0.85, 0.80),
            vec3(0.65, 0.80, 0.85),
            vec3(0.30, 0.65, 0.85),
            vec3(0.20, 0.40, 0.85),
            vec3(0.10, 0.20, 0.60),
            t
          );
        }
        // Palette 4 — cloud water: greys with a hint of blue at the high end
        vec3 paletteCloud(float t) {
          return sample5(
            vec3(0.20, 0.20, 0.22),
            vec3(0.45, 0.45, 0.50),
            vec3(0.70, 0.72, 0.78),
            vec3(0.88, 0.92, 0.98),
            vec3(0.65, 0.85, 1.00),
            t
          );
        }

        void main() {
          if (uHasData < 0.5) discard;
          // Per-fragment UV from the local-frame surface normal. Convention:
          //   x = cos(lat)·cos(lon),  y = sin(lat),  z = -cos(lat)·sin(lon)
          //   so lat = asin(y),  lon = atan2(-z, x)  (range -π..+π).
          // GFS grid: first column at lon=0, first row at lat=+90. So:
          //   u = (lon mod 2π) / 2π
          //   v = (π/2 − lat) / π   (v=0 north pole, v=1 south pole)
          float lat = asin(clamp(vLocalNormal.y, -1.0, 1.0));
          float lon = atan(-vLocalNormal.z, vLocalNormal.x);
          float u = (lon < 0.0 ? lon + 2.0 * PI : lon) / (2.0 * PI);
          float vv = (0.5 * PI - lat) / PI;
          // Byte texture is pre-normalised to [0, 1] — read .r directly as the
          // colour-ramp parameter, no shader-side vmin/vmax math.
          float t = texture2D(uMap, vec2(u, vv)).r;
          vec3 col;
          if      (uPalette == 0) col = paletteTemp(t);
          else if (uPalette == 1) col = paletteHumidity(t);
          else if (uPalette == 2) col = palettePressure(t);
          else if (uPalette == 3) col = paletteWater(t);
          else                    col = paletteCloud(t);

          gl_FragColor = vec4(col, uOpacity);
        }
      `,transparent:!0,depthWrite:!1}),this.sphere=new Jt(e,this.material),this.sphere.renderOrder=1,this.mesh=new ie,this.mesh.rotation.z=vM,this.mesh.add(this.sphere),this.mesh.visible=!1}setData(t,e,i,s){const r=Kp(t,e,i),o=this.material.uniforms.uMap.value;o&&o.dispose(),this.material.uniforms.uMap.value=r,this.material.uniforms.uHasData.value=1,this.material.uniforms.uPalette.value=_M[s],this.currentTexture=r}setRotationY(t){this.sphere.rotation.y=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}hasData(){return this.currentTexture!==null}}class ss{mesh;flatMesh;sunBeam;moonBeam;axis;sunDot;moonDot;moonPhaseMat;static SUN_COLOR=16763972;static MOON_COLOR=13162736;static AXIS_COLOR=3399935;constructor(){this.mesh=new ie,this.flatMesh=new ie,this.sunBeam=rf(ss.SUN_COLOR,.7),this.moonBeam=rf(ss.MOON_COLOR,.55),this.mesh.add(this.sunBeam,this.moonBeam),this.axis=TM(ss.AXIS_COLOR,.7),this.axis.add(of(ss.AXIS_COLOR,.5,hu),of(ss.SUN_COLOR,.6,EM)),this.mesh.add(this.axis),this.sunDot=AM(ss.SUN_COLOR,.95),this.flatMesh.add(this.sunDot),this.moonPhaseMat=CM(),this.moonDot=new Jt(new jr(Qp,32),this.moonPhaseMat),this.moonDot.position.z=.01,this.flatMesh.add(this.moonDot)}setSunDirection(t){cf(this.sunBeam,t)}setMoonPosition(t){cf(this.moonBeam,t)}setSubSolar(t,e){this.sunDot.position.set(e/180,t/180,.01)}setSubLunar(t,e){this.moonDot.position.set(e/180,t/180,.01)}setMoonPhase(t,e){this.moonPhaseMat.uniforms.uIllumFraction.value=fs.clamp(t,0,1),this.moonPhaseMat.uniforms.uTerminatorXSign.value=e?1:-1}setVisible(t){this.mesh.visible=t,this.flatMesh.visible=t}setSunBeamVisible(t){this.sunBeam.visible=t}setMoonBeamVisible(t){this.moonBeam.visible=t}setAxisBeamVisible(t){this.axis.visible=t}setSunDotVisible(t){this.sunDot.visible=t}setMoonDotVisible(t){this.moonDot.visible=t}}const nf=.6,xM=.018,SM=.006,Jp=.5,sf=.005,MM=1+Jp*.55,fc=.1,pc=.004,po=Math.PI*1.7,Ih=.09,Uh=23.44*Math.PI/180,wM=1.012,bM=.0025,EM=new C(0,Math.cos(Uh),Math.sin(Uh)),Qp=.036;function rf(n,t){const e=new to(SM,xM,nf,16);e.translate(0,nf/2,0);const i=new Ke({color:n,transparent:!0,opacity:t,depthWrite:!1}),s=new Jt(e,i);return s.frustumCulled=!1,s}function TM(n,t){const e=new ie;e.rotation.z=Uh;const i=new Ke({color:n,transparent:!0,opacity:t,depthWrite:!1}),s=1+Jp,r=new Jt(new to(sf,sf,2*s,12),i);r.frustumCulled=!1,e.add(r);const o=new ie;o.rotation.x=-Math.PI/2,o.position.y=MM,o.add(new Jt(new Zo(fc,pc,8,64,po),i));const a=new Jt(new lu(pc*4,pc*10,12),i);a.position.set(fc*Math.cos(po),fc*Math.sin(po),0),a.quaternion.setFromUnitVectors(hu,new C(-Math.sin(po),Math.cos(po),0)),o.add(a),e.add(o);const l=af("N",n);l.position.y=s+Ih*.7;const c=af("S",n);return c.position.y=-1.563,e.add(l,c),e}function of(n,t,e){const i=new Jt(new Zo(wM,bM,6,256),new Ke({color:n,transparent:!0,opacity:t,depthWrite:!1}));return i.quaternion.setFromUnitVectors(new C(0,0,1),e),i}function af(n,t){const i=document.createElement("canvas");i.width=i.height=64;const s=i.getContext("2d");s.font=`bold ${64*.8}px system-ui, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=`#${t.toString(16).padStart(6,"0")}`,s.fillText(n,64/2,64/2+64*.04);const r=new us(i);r.colorSpace=be;const o=new qr(new Ys({map:r,transparent:!0,depthWrite:!1}));return o.scale.set(Ih,Ih,1),o}const hu=new C(0,1,0),lf=new zi,mc=new C;function cf(n,t){const e=t.length();e<1e-6||(mc.copy(t).divideScalar(e),n.position.copy(mc),lf.setFromUnitVectors(hu,mc),n.quaternion.copy(lf))}function AM(n,t){const e=new jr(Qp,24),i=new Ke({color:n,transparent:!0,opacity:t,depthWrite:!1});return new Jt(e,i)}function CM(){return new de({uniforms:{uIllumFraction:{value:.5},uTerminatorXSign:{value:1},uLitColor:{value:new Wt(15920861)},uShadowColor:{value:new Wt(2106408)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uIllumFraction;
      uniform float uTerminatorXSign;
      uniform vec3  uLitColor;
      uniform vec3  uShadowColor;
      varying vec2 vUv;
      void main() {
        vec2 p = vUv * 2.0 - 1.0; // disc-local coords, [-1, 1]²
        float r = length(p);
        if (r > 1.0) discard;

        // Terminator x on the [-1, 1] disc at this y. Real moon's terminator is an
        // ellipse with the same y-extent as the disc and x-axis (1 − 2f) of the radius.
        float xTerm = (1.0 - 2.0 * uIllumFraction) * sqrt(max(0.0, 1.0 - p.y * p.y));

        // Lit if p.x · sign > xTerm · sign. Equivalent to comparing on the correct side.
        float pxSigned   = p.x   * uTerminatorXSign;
        float xTermSigned = xTerm * uTerminatorXSign;
        bool lit = pxSigned > xTermSigned;

        // Soft edge on the terminator so it doesn't alias at small sizes — 0.02 of the
        // disc width is ~half a pixel at typical screen sizes, fine.
        float blend = smoothstep(-0.02, 0.02, (pxSigned - xTermSigned));
        vec3 col = mix(uShadowColor, uLitColor, blend);

        // Anti-alias the disc edge.
        float edge = smoothstep(1.0, 0.97, r);
        gl_FragColor = vec4(col, edge * 0.92);
      }
    `,transparent:!0,depthWrite:!1})}const hf={type:"change"},uu={type:"start"},tm={type:"end"},za=new qo,uf=new is,RM=Math.cos(70*fs.DEG2RAD),Fe=new C,Sn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gc=1e-6;class em extends _S{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new zi,this._lastTargetPosition=new C,this._quat=new zi().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bd,this._sphericalDelta=new Bd,this._scale=1,this._panOffset=new C,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new C,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=DM.bind(this),this._onPointerDown=PM.bind(this),this._onPointerUp=LM.bind(this),this._onContextMenu=zM.bind(this),this._onMouseWheel=NM.bind(this),this._onKeyDown=FM.bind(this),this._onTouchStart=OM.bind(this),this._onTouchMove=kM.bind(this),this._onMouseDown=IM.bind(this),this._onMouseMove=UM.bind(this),this._interceptControlDown=BM.bind(this),this._interceptControlUp=HM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hf),this.update(),this.state=_e.NONE}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Fe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(za.origin.copy(this.object.position),za.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(za.direction))<RM?this.object.lookAt(this.target):(uf.setFromNormalAndCoplanarPoint(this.object.up,this.target),za.intersectPlane(uf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gc||this._lastTargetPosition.distanceToSquared(this.target)>gc?(this.dispatchEvent(hf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Sn/60*this.autoRotateSpeed*t:Sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Fe.copy(s).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function PM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function DM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function LM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tm),this.state=_e.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function IM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_e.DOLLY;break;case Ui.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_e.ROTATE}break;case Ui.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(uu)}function UM(n){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function NM(n){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(n.preventDefault(),this.dispatchEvent(uu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(tm))}function FM(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function OM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_e.TOUCH_ROTATE;break;case ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_e.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(uu)}function kM(n){switch(this._trackPointer(n),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_e.NONE}}function zM(n){this.enabled!==!1&&n.preventDefault()}function BM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function HM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class GM extends em{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Ui.PAN,MIDDLE:Ui.DOLLY,RIGHT:Ui.ROTATE},this.touches={ONE:ls.PAN,TWO:ls.DOLLY_ROTATE}}}const VM=.9,WM=20,$M=1;class nm{scene;camera;mainMesh;material;terminatorGeom;terminatorLines;controls=null;baseFrustum={left:-1,right:1,top:.5,bottom:-.5};constructor(){this.scene=new ul,this.scene.background=new Wt(5),this.camera=new Xr(-1,1,.5,-.5,0,10),this.camera.position.set(0,0,1),this.camera.lookAt(0,0,0);const t=new Al,e=t.load("textures/earth_daymap_2k.jpg"),i=t.load("textures/earth_nightmap_2k.jpg");e.colorSpace=be,i.colorSpace=be,this.material=new de({uniforms:{uDay:{value:e},uNight:{value:i},uClouds:{value:null},uHasClouds:{value:0},uGeoSunDir:{value:new C(1,0,0)},uShowClouds:{value:1},uShowNightLights:{value:1},uShowTerminator:{value:1},uCloudThreshold:{value:.5},uCloudSoftness:{value:.3},uCloudOpacity:{value:.85},uCloudNightFloor:{value:.25},uTwilightWidth:{value:.1},uNightDimFloor:{value:.18}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uDay;
        uniform sampler2D uNight;
        uniform sampler2D uClouds;
        uniform float     uHasClouds;
        uniform vec3      uGeoSunDir;
        uniform float     uShowClouds;
        uniform float     uShowNightLights;
        uniform float     uShowTerminator;
        uniform float     uCloudThreshold;
        uniform float     uCloudSoftness;
        uniform float     uCloudOpacity;
        uniform float     uCloudNightFloor;
        uniform float     uTwilightWidth;
        uniform float     uNightDimFloor;
        varying vec2 vUv;

        const float PI = 3.14159265359;

        void main() {
          // Pixel → (lon, lat). Plane v=0 is south, v=1 is north (matches texture orientation).
          float lon = (vUv.x - 0.5) * 2.0 * PI;   // -π..+π
          float lat = (vUv.y - 0.5) * PI;         // -π/2..+π/2
          float cosLat = cos(lat);

          // Geographic surface normal at this pixel — same convention as the 3D sphere.
          vec3 surfNorm = vec3(
             cosLat * cos(lon),
             sin(lat),
            -cosLat * sin(lon)
          );

          float ndotl = dot(surfNorm, normalize(uGeoSunDir));
          float dayFactor = smoothstep(-uTwilightWidth, uTwilightWidth, ndotl);

          // Day surface, dimmed on the night side (never to black — keeps the geography legible)
          vec3 day = texture2D(uDay, vUv).rgb;
          vec3 col;
          if (uShowTerminator > 0.5) {
            float bright = mix(uNightDimFloor, 1.0, dayFactor);
            col = day * bright;
            // Night lights bloom in over the dark side
            if (uShowNightLights > 0.5) {
              vec3 night = texture2D(uNight, vUv).rgb;
              col += night * (1.0 - dayFactor) * 1.6;
            }
          } else {
            col = day;
          }

          // Clouds — always visible (never erased on night side), dim toward floor at night.
          if (uShowClouds > 0.5 && uHasClouds > 0.5) {
            vec4 c = texture2D(uClouds, vUv);
            float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
            float cloudAlpha = smoothstep(uCloudThreshold, uCloudThreshold + uCloudSoftness, luma);
            float cloudBright = mix(1.0, mix(uCloudNightFloor, 1.0, dayFactor), uShowTerminator);
            vec3 cloudCol = mix(c.rgb, vec3(1.0), 0.4) * cloudBright;
            col = mix(col, cloudCol, cloudAlpha * uCloudOpacity);
          }

          gl_FragColor = vec4(col, 1.0);
        }
      `});const s=new Bi(2,1);this.mainMesh=new Jt(s,this.material),this.scene.add(this.mainMesh);for(const l of[-2,2]){const c=new Jt(s,this.material);c.position.x=l,this.scene.add(c)}const r=361,o=new Float32Array(r*3);this.terminatorGeom=new Ot,this.terminatorGeom.setAttribute("position",new Kt(o,3));const a=new mi({color:16777215,transparent:!0,opacity:.4,depthWrite:!1});this.terminatorLines=[0,-2,2].map(l=>{const c=new Ho(this.terminatorGeom,a);return c.position.x=l,c.renderOrder=2,c.frustumCulled=!1,this.scene.add(c),c})}resize(t,e){const i=t/e;i>2?this.baseFrustum={left:-.5*i,right:.5*i,top:.5,bottom:-.5}:this.baseFrustum={left:-1,right:1,top:1/i,bottom:-1/i},this.camera.left=this.baseFrustum.left,this.camera.right=this.baseFrustum.right,this.camera.top=this.baseFrustum.top,this.camera.bottom=this.baseFrustum.bottom,this.camera.updateProjectionMatrix()}enableControls(t){this.controls||(this.controls=new GM(this.camera,t),this.controls.enableRotate=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.18,this.controls.screenSpacePanning=!0,this.controls.zoomToCursor=!0,this.controls.minZoom=VM,this.controls.maxZoom=WM,t.addEventListener("dblclick",this.resetView)),this.controls.connect(),this.controls.enabled=!0}disableControls(){this.controls&&(this.controls.enabled=!1)}update(){if(!this.controls||!this.controls.enabled)return;this.controls.update();const t=this.baseFrustum.top/this.camera.zoom;let e=!1;if(t>=.5)this.controls.target.y!==0&&(this.controls.target.y=0,this.camera.position.y=0,e=!0);else{const i=.5-t;this.controls.target.y>i&&(this.controls.target.y=i,this.camera.position.y=i,e=!0),this.controls.target.y<-i&&(this.controls.target.y=-i,this.camera.position.y=-i,e=!0)}e&&this.controls.update()}resetView=()=>{this.camera.position.set(0,0,1),this.camera.zoom=$M,this.camera.updateProjectionMatrix(),this.controls&&(this.controls.target.set(0,0,0),this.controls.update())};static wrapWorldX(t){return((t+1)%2+2)%2-1}setSubSolar(t,e){const i=t*Math.PI/180,s=e*Math.PI/180,r=Math.cos(i);this.material.uniforms.uGeoSunDir.value.set(r*Math.cos(s),Math.sin(i),-r*Math.sin(s)),this._updateTerminatorLine(i,s)}_updateTerminatorLine(t,e){const i=this.terminatorGeom.attributes.position,s=i.array,r=361,o=Math.sin(t),a=Math.cos(t);for(let l=0;l<r;l++){const c=-180+360*l/(r-1),h=c*Math.PI/180,u=Math.atan2(-a*Math.cos(h-e),o);s[l*3]=c/180,s[l*3+1]=u/Math.PI,s[l*3+2]=.005}i.needsUpdate=!0,this.terminatorGeom.computeBoundingSphere()}setCloudTexture(t){this.material.uniforms.uClouds.value=t,this.material.uniforms.uHasClouds.value=t?1:0}setTerminatorEnabled(t){this.material.uniforms.uShowTerminator.value=t?1:0;for(const e of this.terminatorLines)e.visible=t}setNightLightsVisible(t){this.material.uniforms.uShowNightLights.value=t?1:0}setCloudsVisible(t){this.material.uniforms.uShowClouds.value=t?1:0}}const XM=new C(0,1,0),Ps=16765770;class qM{meshGlobe;meshFlat;latDeg=0;lonDeg=0;constructor(){this.meshGlobe=new ie,this.meshGlobe.visible=!1;const t=new Zo(.022,.003,12,40),e=new Ke({color:Ps,transparent:!0,opacity:.95}),i=new Jt(t,e);i.rotation.x=Math.PI/2,i.position.y=.001,this.meshGlobe.add(i);const s=new jr(.008,24),r=new Ke({color:Ps,transparent:!0,opacity:.9}),o=new Jt(s,r);o.rotation.x=-Math.PI/2,o.position.y=.002,this.meshGlobe.add(o);const a=.055,l=new to(.0025,.0025,a,12),c=new Ke({color:Ps,transparent:!0,opacity:.9}),h=new Jt(l,c);h.position.y=a/2,this.meshGlobe.add(h);const u=new In(.006,16,12),d=new Ke({color:Ps,transparent:!0,opacity:.95}),p=new Jt(u,d);p.position.y=a+.005,this.meshGlobe.add(p),this.meshFlat=new ie,this.meshFlat.visible=!1;const g=new cu(.015,.019,32),v=new Ke({color:Ps,transparent:!0,opacity:.9}),m=new Jt(g,v);m.position.z=.001,this.meshFlat.add(m);const f=.004,b=.025,S=new Ot;S.setAttribute("position",new ne([-b,0,.001,-f,0,.001,f,0,.001,b,0,.001,0,-b,.001,0,-f,.001,0,f,.001,0,b,.001],3));const x=new mi({color:Ps,transparent:!0,opacity:.95}),D=new Li(S,x);this.meshFlat.add(D);const A=new jr(.0015,16),R=new Ke({color:Ps,transparent:!0,opacity:.95}),L=new Jt(A,R);L.position.z=.002,this.meshFlat.add(L)}setLocation(t,e){this.latDeg=t,this.lonDeg=e;const i=t*Math.PI/180,s=e*Math.PI/180,r=Math.cos(i),o=r*Math.cos(s),a=Math.sin(i),l=-r*Math.sin(s);this.meshGlobe.position.set(o,a,l);const c=new C(o,a,l).normalize();this.meshGlobe.quaternion.setFromUnitVectors(XM,c),this.meshFlat.position.x=e/180,this.meshFlat.position.y=t/180}setVisible(t){this.meshGlobe.visible=t,this.meshFlat.visible=t}isVisible(){return this.meshGlobe.visible}get location(){return{lat:this.latDeg,lon:this.lonDeg}}}const jM="0.6.0",YM={windSubtle:"subtle",windStandard:"standard",windBold:"bold"},Hi="orrery.menu.v1",Nh={clock:!0,clockLocal:!1,tzNominal:!1,tzPolitical:!1,tzRelative:!1,fires:!0,lightning:!0,hurricanes:!0,tracks:!0,aurora:!0,windSubtle:!0,windStandard:!1,windBold:!1,cloudsViirs:!0,cloudsGfs:!1,cloudsGoes:!1,mslp:!1,temp:!1,rh:!1,tpw:!1,tcw:!1,coastlines:!0,nightLights:!0,earthquakes:!0,plates:!0,volcanoes:!0,terminator:!0,atmosphere:!0,hands:!0,eclipse:!1,iss:!0,tiangong:!0,satTracks:!0,satOrbits:!1,map:!1,orbit:!1,skyboxHi:!1,data:!1,location:!1},ZM={aurora:!1,fires:!1,lightning:!1,tracks:!1,nightLights:!1};function KM(){const t=typeof window<"u"&&window.matchMedia("(max-width: 600px)").matches?{...Nh,...ZM}:{...Nh};try{JSON.parse(localStorage.getItem("orrery.clock.v1")??"null")?.zone==="local"&&(t.clockLocal=!0)}catch{}return t}const vc={clock:"Time",clockLocal:"UTC/Local",tzNominal:"Meridians",tzPolitical:"Time Zones",tzRelative:"±Hours",fires:"Fires",lightning:"Lightning",hurricanes:"Hurricanes",tracks:"Storm tracks",aurora:"Aurora",windSubtle:"Subtle",windStandard:"Standard",windBold:"Bold",cloudsViirs:"VIIRS",cloudsGfs:"GFS",cloudsGoes:"GOES",mslp:"Pressure",temp:"Temperature",rh:"Humidity",tpw:"Moisture",tcw:"Cloud water",coastlines:"Coastlines",nightLights:"Night lights",earthquakes:"Earthquakes",plates:"Plates",volcanoes:"Volcanoes",terminator:"Day/night",atmosphere:"Atmosphere",hands:"Beams",eclipse:"Eclipse",iss:"ISS",tiangong:"Tiangong",satTracks:"Tracks",satOrbits:"Orbits",map:"Flat map",orbit:"Auto-spin",skyboxHi:"Hi-res sky",data:"Data",location:"Location"},JM={clock:"Show / hide the top-left time display and time-travel controls (⏱)",clockLocal:"Show the clock in your browser's local timezone instead of UTC",tzNominal:"Nominal UTC hour meridian boundaries (every 15°) — geometrically regular, no DST. Labels show current local time at each zone centre.",tzPolitical:"Real political timezone boundaries from /data/timezone-bounds.json. DST-correct via IANA/Intl. Falls back to nominal if data absent.",tzRelative:"Swap labels from absolute HH:MM to hours offset relative to your local timezone (+2h, −3h…). Requires Meridians or Time Zones to be active.",aurora:"Aurora oval probability (NOAA SWPC Ovation, refreshed 5 min), brightened or dimmed by the live Kp index",fires:"Active wildfires from satellite thermal detections (NASA FIRMS, last 24 h)",hurricanes:"Active tropical cyclones (NOAA NHC, refreshed 15 min)",tracks:"Past track + 5-day forecast track + uncertainty cone for each active storm",lightning:"Real-time lightning strikes from the Blitzortung community network",windSubtle:"Wind — subtle: short streaks, dim composite. Doesn't compete with other layers.",windStandard:"Wind — standard: moderate streaks, mid brightness.",windBold:"Wind — bold: long, bright streaks. The signature earth.nullschool look.",cloudsViirs:"VIIRS true-colour daily mosaic (NASA GIBS) — photographic, can have swath gaps on partial days",cloudsGfs:"GFS cloud cover (NOAA, 6 h refresh) — model forecast, no coverage gaps, animates with time-warp.",cloudsGoes:"GOES + Himawari + MSG geostationary composite — coming soon",mslp:"Mean sea level pressure (MSLP) — highs and lows drive weather systems",temp:"2 m air temperature (Temp) — kelvin internally, displayed via colour ramp",rh:"2 m relative humidity (RH) — 0 to 100 % of saturation",tpw:"Total precipitable water (TPW, mm) — atmospheric water vapour column",tcw:"Total cloud water (TCW, kg/m²) — liquid + ice in the atmospheric column",coastlines:"Natural Earth 50 m coastlines",nightLights:"City lights on the night side (Solar System Scope)",earthquakes:"Earthquakes past 7 days (USGS, refreshed 15 min) — sized by magnitude, coloured by depth (shallow red → deep blue)",plates:"Tectonic plate boundaries (Peter Bird's PB2002 dataset) — static, effectively fixed on human timescales",volcanoes:"~1,200 Holocene volcanoes (Smithsonian Global Volcanism Program) — hot pulsing markers show ones currently cross-referenced against active FIRMS thermal detections",terminator:"Day/night shading — sun-direction lighting + city-lights overlay",atmosphere:"Atmospheric rim glow with day-twilight gradient",hands:"Sun and moon beams — a gold gnomon pointing at the sun, a silver one at the moon, a cyan rod through the poles for Earth's spin axis with a spin-direction arrow, the equator (cyan) and ecliptic (gold) rings, plus paired sun + moon dots on the flat map. Under time-warp the sun beam sweeps one rotation per simulated day.",eclipse:"Live umbra + penumbra discs and path-of-totality; opens the eclipse-catalogue panel for selecting an event and jumping to it",iss:"International Space Station — live position from CelesTrak orbital elements (refreshed every few hours). Dims while it's in Earth's shadow. Click it for details.",tiangong:"China's Tiangong space station — live position from CelesTrak orbital elements. Click it for details.",satTracks:"Ground tracks — the path over the surface: half an orbit behind (faint), 1½ orbits ahead",satOrbits:"Orbit rings — each station's orbit in space. The ring stays put while Earth turns underneath it; that's why each pass crosses further west.",map:"Equirectangular flat-map view — drag to pan, wheel to zoom (centred on cursor), double-click to reset",orbit:"Gentle auto-rotation around Earth (pauses on user input)",skyboxHi:"Upgrade the starfield to NASA's 8K Deep Star Map (~1.9 MB). Sharper Milky Way when zoomed out; takes a couple of seconds to load.",data:"Top-right panel — every live data layer with its source, freshness, and refresh cadence.",location:"Click anywhere on the globe (or flat map) to pin a spot and read its coordinates, place name, and true solar time."},Us=["mslp","temp","rh","tpw","tcw"],Ns=["cloudsViirs","cloudsGfs","cloudsGoes"],Pr=["windSubtle","windStandard","windBold"],Ba=["tzNominal","tzPolitical"],QM=[{label:"Clock",keys:["clock","clockLocal","tzNominal","tzPolitical","tzRelative"]},{label:"Weather",keys:["fires","lightning","hurricanes","tracks","aurora"]},{label:"Wind",keys:Pr},{label:"Clouds",keys:Ns},{label:"Overlay",keys:Us},{label:"Geography",keys:["coastlines","nightLights"]},{label:"Geology",keys:["earthquakes","plates","volcanoes"]},{label:"Astro",keys:["terminator","atmosphere","hands","eclipse"]},{label:"Space",keys:["iss","tiangong","satTracks","satOrbits"]},{label:"View",keys:["map","orbit","skyboxHi","data","location"]}];class t1{state;layers;panels;buttons={};panel;open;overlayChangeHandler=null;cloudsChangeHandler=null;findMoonHandler=null;findIssHandler=null;showCrewHandler=null;skyboxHiResHandler=null;constructor(t,e,i={}){this.layers=e,this.panels=i,this.state={...KM(),...e1()},this.open=n1(),r1();const s=document.createElement("div");s.id="orrery-ui",s.innerHTML=`
      <div class="orrery-brand-row">
        <span class="orrery-brand" id="orrery-brand" title="Click for options · weather layers · clock · location · eclipses">earth-clock</span>
        <span class="orrery-version" title="package.json version">v${jM}</span>
      </div>
      <div class="orrery-menu${this.open?"":" collapsed"}" id="orrery-menu">
        <div id="orrery-menu-categories"></div>
        <p class="orrery-meta">
          <a href="/about/">about</a> · <a href="/about/kids/">about for kids</a> · <a href="https://onemonkey.org/eclipses-equinoxes-and-everyday-awe-telling-the-time-on-spaceship-earth/" target="_blank" rel="noopener">blog</a> · <a href="https://github.com/infantlab/earth-clock" target="_blank" rel="noopener">source code</a> · <a href="mailto:caspar@onemonkey.org">feedback</a>
        </p>
      </div>
    `,t.appendChild(s),this.panel=s.querySelector("#orrery-menu"),s.querySelector("#orrery-brand").addEventListener("click",()=>{this.toggleOpen(),this.dismissOnboardingHint()}),this.maybeShowOnboardingHint(s);const o=s.querySelector("#orrery-menu-categories");for(const a of QM){const l=document.createElement("p");l.innerHTML=`<span class="orrery-label">${a.label}</span><span class="orrery-buttons"></span>`;const c=l.querySelector(".orrery-buttons");if(a.keys.forEach((h,u)=>{u>0&&c.appendChild(document.createTextNode(" · "));const d=document.createElement("span");d.className="orrery-tb",d.textContent=vc[h],d.title=JM[h]??`Toggle ${vc[h]}`,d.addEventListener("click",()=>this.toggle(h)),c.appendChild(d),this.buttons[h]=d}),a.label==="Astro"){c.appendChild(document.createTextNode(" · "));const h=document.createElement("span");h.className="orrery-tb orrery-action",h.textContent="Find moon",h.title="Reposition the camera along the moon's direction so both Earth and moon sit in frame",h.addEventListener("click",()=>{this.findMoonHandler?.(),this.collapseIfMobile()}),c.appendChild(h)}if(a.label==="Space"){c.appendChild(document.createTextNode(" · "));const h=document.createElement("span");h.className="orrery-tb orrery-action",h.textContent="Find ISS",h.title="Turn the camera to look down on the International Space Station and open its info card",h.addEventListener("click",()=>{this.findIssHandler?.(),this.collapseIfMobile()}),c.appendChild(h),c.appendChild(document.createTextNode(" · "));const u=document.createElement("span");u.className="orrery-tb orrery-action",u.textContent="Who's up there?",u.title="Everyone in space right now, station by station, with links to the official mission sites",u.addEventListener("click",()=>{this.showCrewHandler?.(),this.collapseIfMobile()}),c.appendChild(u)}o.appendChild(l)}this.applyAll()}isWindVisible(){return this.activeWindIntensity()!==null&&this.liveFreshnessOk}liveFreshnessOk=!0;setLiveFreshnessOk(t){this.liveFreshnessOk!==t&&(this.liveFreshnessOk=t,this.applyAll())}activeWindIntensity(){for(const t of Pr)if(this.state[t])return t;return null}isMapMode(){return this.state.map}isLocationActive(){return this.state.location}isAutoOrbit(){return this.state.orbit}isSkyboxHiRes(){return this.state.skyboxHi}activeOverlay(){for(const t of Us)if(this.state[t])return t;return null}activeCloudSource(){for(const t of Ns)if(this.state[t])return t;return null}activeTzMode(){return this.state.tzNominal?"nominal":this.state.tzPolitical?"political":null}onOverlayChange(t){this.overlayChangeHandler=t}onCloudsChange(t){this.cloudsChangeHandler=t}onFindMoon(t){this.findMoonHandler=t}onFindIss(t){this.findIssHandler=t}onShowCrew(t){this.showCrewHandler=t}onSkyboxHiResChange(t){this.skyboxHiResHandler=t}setLayer(t,e){if(!(t in Nh))return;const i=t;if(this.state[i]!==e){if(this.state[i]=e,e){const s=Us.includes(i)?Us:Ns.includes(i)?Ns:Pr.includes(i)?Pr:Ba.includes(i)?Ba:null;if(s)for(const r of s)r!==i&&this.state[r]&&(this.state[r]=!1,this.apply(r))}this.apply(i),df(this.state)}}toggle(t){const e=this.state[t];this.state[t]=!e;const i=Us.includes(t)?Us:Ns.includes(t)?Ns:Pr.includes(t)?Pr:Ba.includes(t)?Ba:null;if(i&&this.state[t])for(const s of i)s!==t&&this.state[s]&&(this.state[s]=!1,this.apply(s));this.apply(t),df(this.state),Us.includes(t)&&this.overlayChangeHandler?.(this.activeOverlay()),Ns.includes(t)&&this.cloudsChangeHandler?.(this.activeCloudSource()),t==="skyboxHi"&&this.skyboxHiResHandler?.(this.state.skyboxHi),this.collapseIfMobile()}collapseIfMobile(){window.matchMedia("(max-width: 600px)").matches&&this.open&&(this.open=!1,this.panel.classList.add("collapsed"),ff(!1))}toggleOpen(){this.open=!this.open,this.panel.classList.toggle("collapsed",!this.open),ff(this.open)}onboardingHint=null;maybeShowOnboardingHint(t){if(i1())return;const e=document.createElement("div");e.className="orrery-onboarding-hint",e.innerHTML=`
      <span>Click <strong>earth-clock</strong> for layers · clock · location · eclipses</span>
      <span class="orrery-onboarding-arrow">↓</span>
    `,t.appendChild(e),this.onboardingHint=e,setTimeout(()=>this.dismissOnboardingHint(),7e3)}dismissOnboardingHint(){if(!this.onboardingHint)return;this.onboardingHint.classList.add("orrery-onboarding-dismissed"),s1(!0);const t=this.onboardingHint;this.onboardingHint=null,setTimeout(()=>t.remove(),600)}applyAll(){Object.keys(vc).forEach(t=>this.apply(t))}apply(t){const e=this.state[t],i=this.liveFreshnessOk,{globe:s,atmosphere:r,coastlines:o,plates:a,volcanoes:l,clouds:c,aurora:h,fires:u,earthquakes:d,hurricanes:p,hurricaneTracks:g,lightning:v,overlay:m,radiusVectors:f,eclipse:b,flatMap:S,trails:x,timezoneLayer:D,satellites:A}=this.layers;switch(t){case"iss":case"tiangong":A.setSatelliteVisible(t,e);break;case"satTracks":A.setTracksVisible(e);break;case"satOrbits":A.setOrbitsVisible(e);break;case"cloudsViirs":case"cloudsGfs":case"cloudsGoes":{const L=this.activeCloudSource()!==null&&i;c.mesh.visible=L,S.setCloudsVisible(L);break}case"aurora":h.mesh.visible=e&&i,h.flatMesh.visible=e&&i;break;case"fires":u.mesh.visible=e&&i,u.flatMesh.visible=e&&i;break;case"earthquakes":d.mesh.visible=e&&i,d.flatMesh.visible=e&&i;break;case"hurricanes":p.mesh.visible=e&&i,p.flatMesh.visible=e&&i;break;case"tracks":g.mesh.visible=e&&i,g.flatMesh.visible=e&&i;break;case"eclipse":b.mesh.visible=e,b.flatMesh.visible=e,this.panels.eclipse?.setVisible(e);break;case"lightning":v.mesh.visible=e&&i,v.flatMesh.visible=e&&i;break;case"mslp":case"temp":case"rh":case"tpw":case"tcw":m.mesh.visible=this.activeOverlay()!==null&&i;break;case"coastlines":o.mesh.visible=e,o.flatMesh.visible=e;break;case"plates":a.mesh.visible=e,a.flatMesh.visible=e;break;case"volcanoes":l.mesh.visible=e,l.flatMesh.visible=e;break;case"tzNominal":case"tzPolitical":{const L=this.activeTzMode(),E=L!==null;E&&D.setDisplayMode(L),D.mesh.visible=E,D.flatMesh.visible=E;break}case"tzRelative":D.setRelativeMode(e);break;case"atmosphere":r.mesh.visible=e&&!this.state.map;break;case"hands":f.setSunBeamVisible(e),f.setMoonBeamVisible(e),f.setAxisBeamVisible(e),f.setSunDotVisible(e),f.setMoonDotVisible(e);break;case"terminator":s.setTerminatorVisible(e),c.setTerminatorEnabled(e),h.setTerminatorEnabled(e),S.setTerminatorEnabled(e);break;case"nightLights":s.setNightLightsVisible(e),S.setNightLightsVisible(e);break;case"windSubtle":case"windStandard":case"windBold":{const L=this.activeWindIntensity();L&&x.setIntensity(YM[L]);break}case"clockLocal":this.panels.clock?.setZone(e?"local":"utc");break;case"skyboxHi":break;case"map":{r.mesh.visible=this.state.atmosphere&&!e;const L=["atmosphere","orbit","skyboxHi"];for(const E of L)this.buttons[E]?.classList.toggle("map-inactive",e);break}case"orbit":break;case"clock":this.panels.clock?.setVisible(e);break;case"data":this.panels.data?.setVisible(e);break;case"location":this.panels.location?.setVisible(e);break}const R=this.buttons[t];R&&R.classList.toggle("highlighted",e)}}function e1(){try{const n=localStorage.getItem(Hi);return n?JSON.parse(n).layers??{}:{}}catch{return{}}}function df(n){try{const t=localStorage.getItem(Hi),e=t?JSON.parse(t):{};e.layers=n,localStorage.setItem(Hi,JSON.stringify(e))}catch{}}function n1(){try{const n=localStorage.getItem(Hi);return n?!!JSON.parse(n).open:!1}catch{return!1}}function ff(n){try{const t=localStorage.getItem(Hi),e=t?JSON.parse(t):{};e.open=n,localStorage.setItem(Hi,JSON.stringify(e))}catch{}}function i1(){try{const n=localStorage.getItem(Hi);return n?!!JSON.parse(n).onboarded:!1}catch{return!1}}function s1(n){try{const t=localStorage.getItem(Hi),e=t?JSON.parse(t):{};e.onboarded=n,localStorage.setItem(Hi,JSON.stringify(e))}catch{}}let pf=!1;function r1(){if(pf)return;pf=!0;const n=`
    #orrery-ui {
      position: fixed; left: 16px; bottom: 16px;
      color: #cfd6e4; font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
      font-size: 13px; line-height: 1.55; letter-spacing: 0.02em;
      pointer-events: none;
      z-index: 10;
      user-select: none;
    }
    .orrery-brand-row { pointer-events: none; display: flex; align-items: baseline; gap: 8px; }
    .orrery-brand {
      display: inline-block;
      pointer-events: all;
      background: rgba(0, 0, 5, 0.55);
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 32px;
      letter-spacing: 0.08em;
      color: #c9d2e3;
      cursor: pointer;
      transition: color 125ms ease;
    }
    .orrery-brand:hover { color: #fff; }
    .orrery-version {
      font-size: 14px;
      color: #6e7a90;
      letter-spacing: 0.04em;
      pointer-events: all;
      user-select: text;
    }
    .orrery-menu {
      pointer-events: all;
      margin-top: 6px;
      background: rgba(5, 10, 30, 0.78);
      border-radius: 6px;
      padding: 8px 14px;
      max-width: 520px;
      max-height: 28rem;
      opacity: 1;
      overflow: hidden;
      transition: opacity 200ms ease, max-height 200ms ease,
                  padding 200ms ease, margin-top 200ms ease;
    }
    .orrery-menu.collapsed {
      max-height: 0; opacity: 0; padding-top: 0; padding-bottom: 0;
      margin-top: 0; pointer-events: none;
    }
    .orrery-menu p { margin: 4px 0; }
    .orrery-label {
      display: inline-block;
      /* Wide enough for "Geography" (longest label at 9 chars) to fit without
         wrapping the trailing " | " separator onto a second line. */
      width: 6.5em;
      color: #6e7a90;
      white-space: nowrap;
    }
    .orrery-label::after { content: " | "; color: #3d4658; }
    .orrery-tb {
      color: #7c869a;
      cursor: pointer;
      transition: color 125ms ease;
    }
    .orrery-tb:hover { color: #fff; }
    .orrery-tb.highlighted { color: #e2b42e; }
    /* 3D-only buttons greyed out while flat-map mode is active. State is preserved;
       clicking them still works and takes effect when the user returns to globe view. */
    .orrery-tb.map-inactive {
      opacity: 0.30;
      cursor: default;
    }
    /* Action buttons (e.g. "Find moon") don't toggle a persistent state. Style them
       in a slightly cooler shade than regular toggles to hint that they're a different
       kind of thing, but still part of the same row. */
    .orrery-tb.orrery-action {
      color: #9ab8e6;
      font-style: italic;
    }
    .orrery-tb.orrery-action:hover { color: #cfe0ff; }
    .orrery-meta { color: #555c6b; margin-top: 6px !important; font-size: 12px; }
    .orrery-meta a { color: #7c869a; text-decoration: none; }
    .orrery-meta a:hover { color: #fff; }

    /* ── Mobile: full-width bottom sheet ── */
    @media (max-width: 600px) {
      #orrery-ui {
        left: 0; right: 0; bottom: 0;
        display: flex; flex-direction: column-reverse;
        /* column-reverse: first DOM child (brand-row) renders at bottom as the handle,
           second DOM child (menu) renders above it as the sheet content */
        padding-bottom: env(safe-area-inset-bottom);
      }
      .orrery-brand-row {
        background: rgba(5, 10, 30, 0.9);
        border-top: 1px solid rgba(255,255,255,0.1);
        padding: 0;
        gap: 0;
        justify-content: center;
        pointer-events: all;
      }
      .orrery-brand {
        font-size: 18px; padding: 14px 20px;
        background: transparent; border-radius: 0;
        flex: 1; text-align: center;
      }
      .orrery-version {
        font-size: 10px; opacity: 0.45;
        margin-left: auto; padding-right: 14px;
        align-self: center;
      }
      .orrery-menu {
        max-width: none; margin-top: 0;
        border-radius: 12px 12px 0 0;
        padding-left: 0; padding-right: 0;
        max-height: 65vh;
      }
      .orrery-menu.collapsed {
        max-height: 0; margin-top: 0;
      }
      .orrery-menu p {
        min-height: 48px; display: flex; align-items: center;
        margin: 0; padding: 0 16px;
        border-bottom: 1px solid rgba(255,255,255,0.04);
      }
      .orrery-meta {
        margin-top: 0 !important; font-size: 11px;
      }
      /* Larger tap targets for toggle buttons */
      .orrery-tb {
        display: inline-flex; align-items: center;
        min-height: 44px; padding: 0 4px;
      }
    }

    /* First-visit onboarding hint — small amber callout above the wordmark.
       Fades in over 500 ms, holds for ~5 s, fades out over 500 ms. The
       wordmark's own click handler dismisses it early if the user discovers
       it on their own. Only shown once per browser via the orrery.onboarded
       localStorage flag. */
    .orrery-onboarding-hint {
      pointer-events: none;
      position: absolute;
      bottom: 84px; left: 16px;
      background: rgba(226, 180, 46, 0.95);
      color: #050a1e;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 13px;
      letter-spacing: 0.02em;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      max-width: 320px;
      animation: orrery-onboarding-cycle 7s ease-in-out forwards;
      z-index: 11;
    }
    .orrery-onboarding-hint strong { font-weight: 600; }
    .orrery-onboarding-arrow {
      font-size: 18px;
      line-height: 1;
      animation: orrery-onboarding-bounce 1.2s ease-in-out infinite;
    }
    .orrery-onboarding-hint.orrery-onboarding-dismissed {
      animation: orrery-onboarding-fadeout 500ms ease-in forwards;
    }
    @keyframes orrery-onboarding-cycle {
      0%   { opacity: 0; transform: translateY(8px); }
      8%   { opacity: 1; transform: translateY(0); }
      90%  { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-4px); }
    }
    @keyframes orrery-onboarding-fadeout {
      from { opacity: 1; }
      to   { opacity: 0; transform: translateY(-4px); }
    }
    @media (max-width: 600px) {
      .orrery-onboarding-hint { display: none; }
    }
    @keyframes orrery-onboarding-bounce {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(4px); }
    }
  `,t=document.createElement("style");t.textContent=n,document.head.appendChild(t)}class o1{info(t,e){this.log(t,e,"info")}warn(t,e){this.log(t,e,"warn")}pending(t,e){this.log(t,e,"pending")}log(t,e,i){const s=i==="warn"?"warn":i==="pending"?"…":"✓";i==="warn"?console.warn(`[orrery] ${s} ${t}: ${e}`):console.log(`[orrery] ${s} ${t}: ${e}`)}}class a1{rows=new Map;subscribers=new Set;orderIndex=new Map;report(t,e){this.rows.set(t,e),this.subscribers.forEach(i=>i())}get(t){return this.rows.get(t)}setOrder(t){this.orderIndex.clear(),t.forEach((e,i)=>this.orderIndex.set(e,i)),this.subscribers.forEach(e=>e())}entries(){const t=Number.MAX_SAFE_INTEGER;return Array.from(this.rows.entries()).sort((e,i)=>{const s=this.orderIndex.get(e[0])??t,r=this.orderIndex.get(i[0])??t;return s!==r?s-r:e[0].localeCompare(i[0])})}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}}const l1={wind:"https://nomads.ncep.noaa.gov/",mslp:"https://nomads.ncep.noaa.gov/",temp:"https://nomads.ncep.noaa.gov/",rh:"https://nomads.ncep.noaa.gov/",tpw:"https://nomads.ncep.noaa.gov/",tcw:"https://nomads.ncep.noaa.gov/","gfs-clouds":"https://nomads.ncep.noaa.gov/",aurora:"https://www.swpc.noaa.gov/products/aurora-30-minute-forecast",kp:"https://www.swpc.noaa.gov/products/planetary-k-index",hurricanes:"https://www.nhc.noaa.gov/","storm-tracks":"https://www.nhc.noaa.gov/",viirs:"https://gibs.earthdata.nasa.gov/",fires:"https://firms.modaps.eosdis.nasa.gov/",lightning:"https://www.blitzortung.org/","day map":"https://www.solarsystemscope.com/textures/","night map":"https://www.solarsystemscope.com/textures/",moon:"https://astrogeology.usgs.gov/",coastlines:"https://www.naturalearthdata.com/",eclipse:"https://eclipse.gsfc.nasa.gov/SEcat5/SE2021-2030.html"};class c1{root;body;registry;ageTimer;closeHandler=null;constructor(t,e){m1(),this.registry=e,this.root=document.createElement("div"),this.root.id="orrery-data",this.root.classList.add("hidden"),this.root.innerHTML=`
      <div class="orrery-data-titlebar">
        <span class="orrery-data-title">data</span>
        <span class="orrery-data-close" id="orrery-data-close" title="Close panel">✕</span>
      </div>
      <div class="orrery-data-rows" id="orrery-data-rows"></div>
    `,t.appendChild(this.root),this.body=this.root.querySelector("#orrery-data-rows"),this.root.querySelector("#orrery-data-close").addEventListener("click",()=>this.closeHandler?.()),e.subscribe(()=>this.render()),this.ageTimer=window.setInterval(()=>this.render(),15e3),this.render()}onClose(t){this.closeHandler=t}setVisible(t){this.root.classList.toggle("hidden",!t),t&&this.render()}isVisible(){return!this.root.classList.contains("hidden")}destroy(){window.clearInterval(this.ageTimer),this.root.remove()}render(){const t=Date.now(),e=this.registry.entries();if(!e.length){this.body.innerHTML='<div class="orrery-data-empty">no data yet</div>';return}const i=e.map(([s,r])=>this.renderRow(s,r,t));this.body.innerHTML=i.join("")}renderRow(t,e,i){const s=h1(e,i),r=u1(e,i),o=l1[t],a=o?`<a class="orrery-data-source-link" href="${p1(o)}" target="_blank" rel="noopener">${wr(e.source)} ↗</a>`:`<span class="orrery-data-source-link">${wr(e.source)}</span>`,l=e.error?wr(e.error):e.detail?wr(e.detail):"";return`<div class="orrery-data-row ${s.cls}"><span class="orrery-data-status">${s.mark}</span><span class="orrery-data-key">${wr(t)}</span><span class="orrery-data-source">${a}</span><span class="orrery-data-detail">${l}</span><span class="orrery-data-age">${wr(r)}</span></div>`}}function h1(n,t){return n.error?{mark:"✗",cls:"err"}:n.bundled?{mark:"●",cls:"static"}:n.fetched?d1(n,t)?{mark:"●",cls:"stale"}:{mark:"✓",cls:"ok"}:{mark:"⋯",cls:"pending"}}function u1(n,t){return n.error?"fetch failed":n.bundled?"bundled":n.fetched?f1(t-n.fetched.getTime()):"fetching…"}function d1(n,t){return!n.fetched||n.bundled||!n.refreshSeconds?!1:t-n.fetched.getTime()>n.refreshSeconds*2*1e3}function f1(n){const t=Math.floor(n/1e3);if(t<60)return`${t}s ago`;const e=Math.floor(t/60);if(e<60)return`${e}m ago`;const i=Math.floor(e/60);return i<48?`${i}h ago`:`${Math.floor(i/24)}d ago`}function wr(n){return n.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t])}function p1(n){return n.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}let mf=!1;function m1(){if(mf)return;mf=!0;const n=`
    #orrery-data {
      position: fixed; top: 16px; right: 16px;
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.55;
      padding: 10px 14px; border-radius: 6px;
      max-width: min(640px, 50vw);
      max-height: calc(100vh - 32px);
      overflow-y: auto;
      z-index: 10;
      pointer-events: all;
      user-select: text;
    }
    #orrery-data.hidden { display: none; }

    @media (max-width: 600px) {
      #orrery-data {
        top: 56px; left: 8px; right: 8px;
        max-width: none;
        max-height: calc(100vh - 130px);
        font-size: 11px;
      }
      /* Collapse to three columns: status | name | age — source and detail hidden */
      .orrery-data-row {
        grid-template-columns: 1.4em 1fr auto;
        gap: 0.4em;
      }
      .orrery-data-source { display: none; }
      .orrery-data-detail { display: none; }
    }
    /* Title bar: section name on the left, close-X on the right. Same pattern as
       LocationPanel so all info panels read the same. */
    .orrery-data-titlebar {
      display: flex; justify-content: space-between; align-items: baseline;
      margin-bottom: 6px;
    }
    .orrery-data-title {
      color: #6e7a90; letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .orrery-data-close {
      color: #6e7a90;
      cursor: pointer;
      transition: color 125ms ease;
      margin-left: 1em;
    }
    .orrery-data-close:hover { color: #ff7a7a; }
    .orrery-data-rows {
      display: flex; flex-direction: column; gap: 2px;
    }
    /* Five-column grid: status (narrow), key (fixed), source (flex), detail (flex), age (narrow). */
    .orrery-data-row {
      display: grid;
      grid-template-columns: 1.4em 8em minmax(7em, max-content) 1fr auto;
      gap: 0.6em;
      align-items: baseline;
    }
    .orrery-data-status  { text-align: center; }
    .orrery-data-row.ok      .orrery-data-status { color: #6dd58c; }
    .orrery-data-row.ok      .orrery-data-age    { color: #6dd58c; }
    .orrery-data-row.stale   .orrery-data-status { color: #e2b42e; }
    .orrery-data-row.stale   .orrery-data-age    { color: #e2b42e; }
    .orrery-data-row.err     .orrery-data-status { color: #ff7a7a; }
    .orrery-data-row.err     .orrery-data-age    { color: #ff7a7a; }
    .orrery-data-row.pending .orrery-data-status { color: #d8c46e; }
    .orrery-data-row.pending .orrery-data-age    { color: #6e7a90; }
    .orrery-data-row.static  .orrery-data-status { color: #6e7a90; }
    .orrery-data-row.static  .orrery-data-age    { color: #6e7a90; }
    .orrery-data-key {
      color: #cfd6e4;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .orrery-data-source { overflow: hidden; }
    .orrery-data-source-link {
      color: #a4b0c6;
      text-decoration: none;
      transition: color 125ms ease;
      white-space: nowrap;
    }
    a.orrery-data-source-link:hover { color: #fff; text-decoration: underline; }
    .orrery-data-detail {
      color: #8a93a7;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .orrery-data-row.err .orrery-data-detail { color: #ff9a9a; }
    .orrery-data-empty   { color: #6e7a90; }
  `,t=document.createElement("style");t.textContent=n,document.head.appendChild(t)}const Yr="orrery.clock.v1",Gs=[-10080,-1440,-720,-480,-240,-120,-60,-1,0,1,60,120,240,480,720,1440,10080],g1=60;class v1{root;timeEl;dateEl;zoneEl;expandBtn;controlsEl;warpReadoutEl;pauseBtn;staleCaptionEl;staleDateEl;zone;expanded;warpBeforePause=g1;lastTimeStr="";lastDateStr="";lastZoneStr="";lastWarpStr="";lastPauseLabel="";lastStaleDateStr="";callbacks;constructor(t,e={}){E1(),this.callbacks=e,this.zone=M1(),this.expanded=b1(),this.root=document.createElement("div"),this.root.id="orrery-clock",this.root.innerHTML=`
      <div class="orrery-clock-click" id="orrery-clock-click">
        <div class="orrery-clock-time" id="orrery-clock-time">--:--:--</div>
        <div class="orrery-clock-meta">
          <span class="orrery-clock-date" id="orrery-clock-date">—</span>
          <span class="orrery-clock-zone" id="orrery-clock-zone">UTC</span>
          <span class="orrery-clock-expand" id="orrery-clock-expand" title="Time controls">⏱</span>
          <span class="orrery-clock-close" id="orrery-clock-close" title="Close clock">✕</span>
        </div>
      </div>
      <div class="orrery-clock-controls hidden" id="orrery-clock-controls">
        <button class="orrery-clock-btn" id="orrery-clock-slower" title="Step backward through speeds: 10080× / 1440× / 720× / 480× / 240× / 120× / 60× / 1× / 0 / negatives (run time in reverse)">⏪</button>
        <button class="orrery-clock-btn" id="orrery-clock-pause"  title="Pause / play">⏸</button>
        <button class="orrery-clock-btn" id="orrery-clock-faster" title="Step forward through speeds: 0 / 1× / 60× / 120× / 240× / 480× / 720× / 1440× / 10080×">⏩</button>
        <button class="orrery-clock-btn" id="orrery-clock-reset"  title="Reset to real time — warp 1× and snap to now">↺</button>
        <span class="orrery-clock-warp" id="orrery-clock-warp">× 1</span>
      </div>
      <div class="orrery-clock-stale hidden" id="orrery-clock-stale" title="Live weather is hidden while simulated time is far from now — the data we have isn't valid for this date. Click ↺ above to snap back to real time.">
        live weather hidden · sim <span id="orrery-clock-stale-date">—</span>
      </div>
    `,t.appendChild(this.root),this.timeEl=this.root.querySelector("#orrery-clock-time"),this.dateEl=this.root.querySelector("#orrery-clock-date"),this.zoneEl=this.root.querySelector("#orrery-clock-zone"),this.expandBtn=this.root.querySelector("#orrery-clock-expand"),this.controlsEl=this.root.querySelector("#orrery-clock-controls"),this.warpReadoutEl=this.root.querySelector("#orrery-clock-warp"),this.pauseBtn=this.root.querySelector("#orrery-clock-pause"),this.staleCaptionEl=this.root.querySelector("#orrery-clock-stale"),this.staleDateEl=this.root.querySelector("#orrery-clock-stale-date");const i=this.root.querySelector("#orrery-clock-close");this.expandBtn.addEventListener("click",()=>{this.expanded=!this.expanded,vf(this.expanded),this.refreshExpandState()}),this.refreshExpandState(),i.addEventListener("click",()=>this.callbacks.onClose?.()),this.root.querySelector("#orrery-clock-slower").addEventListener("click",()=>{const s=window.__orreryTimeWarp??1,r=x1(s);s!==0&&(this.warpBeforePause=s),window.__orreryTimeWarp=r}),this.root.querySelector("#orrery-clock-faster").addEventListener("click",()=>{const s=window.__orreryTimeWarp??1,r=y1(s);s!==0&&(this.warpBeforePause=s),window.__orreryTimeWarp=r}),this.root.querySelector("#orrery-clock-reset").addEventListener("click",()=>{window.__orreryTimeWarp=1,this.callbacks.onSnapToLive?.()}),this.pauseBtn.addEventListener("click",()=>{const s=window.__orreryTimeWarp??1;s===0?window.__orreryTimeWarp=this.warpBeforePause||1:(this.warpBeforePause=s,window.__orreryTimeWarp=0)})}setVisible(t){this.root.classList.toggle("hidden",!t)}setZone(t){this.zone!==t&&(this.zone=t,w1(t),this.lastTimeStr=this.lastDateStr=this.lastZoneStr="")}setControlsExpanded(t){this.expanded!==t&&(this.expanded=t,vf(this.expanded),this.refreshExpandState())}setLiveDataStale(t,e){if(this.staleCaptionEl.classList.toggle("hidden",!t),t&&e){const i=e.toISOString().slice(0,10);i!==this.lastStaleDateStr&&(this.staleDateEl.textContent=i,this.lastStaleDateStr=i)}}refreshExpandState(){this.controlsEl.classList.toggle("hidden",!this.expanded),this.expandBtn.classList.toggle("active",this.expanded)}setTime(t){let e,i,s;this.zone==="utc"?(e=`${oi(t.getUTCHours())}:${oi(t.getUTCMinutes())}:${oi(t.getUTCSeconds())}`,i=`${t.getUTCFullYear()}-${oi(t.getUTCMonth()+1)}-${oi(t.getUTCDate())}  ${gf(t.getUTCDay())}`,s="UTC"):(e=`${oi(t.getHours())}:${oi(t.getMinutes())}:${oi(t.getSeconds())}`,i=`${t.getFullYear()}-${oi(t.getMonth()+1)}-${oi(t.getDate())}  ${gf(t.getDay())}`,s=S1(t)),e!==this.lastTimeStr&&(this.timeEl.textContent=e,this.lastTimeStr=e),i!==this.lastDateStr&&(this.dateEl.textContent=i,this.lastDateStr=i),s!==this.lastZoneStr&&(this.zoneEl.textContent=s,this.lastZoneStr=s);const r=window.__orreryTimeWarp??1,o=r===0?"paused":`× ${_1(r)}`;o!==this.lastWarpStr&&(this.warpReadoutEl.textContent=o,this.warpReadoutEl.classList.toggle("warped",r!==1),this.expandBtn.classList.toggle("warped",r!==1),this.lastWarpStr=o);const a=r===0?"▶":"⏸";a!==this.lastPauseLabel&&(this.pauseBtn.textContent=a,this.pauseBtn.title=r===0?"Resume":"Pause",this.lastPauseLabel=a)}}function _1(n){return Math.abs(n)>=1e3?`${(n/1e3).toFixed(1)}k`:Number.isInteger(n)?String(n):n.toFixed(2).replace(/\.?0+$/,"")}function y1(n){for(const t of Gs)if(t>n)return t;return Gs[Gs.length-1]}function x1(n){for(let t=Gs.length-1;t>=0;t--)if(Gs[t]<n)return Gs[t];return Gs[0]}function oi(n){return n<10?`0${n}`:`${n}`}function gf(n){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][n]}function S1(n){try{const t=Intl.DateTimeFormat().resolvedOptions().timeZone,e=t?.includes("/")?t.split("/").slice(-1)[0].replace(/_/g," "):t||"local",s=new Intl.DateTimeFormat([],{timeZone:t,timeZoneName:"short"}).formatToParts(n).find(r=>r.type==="timeZoneName")?.value??"";return s?`${e} ${s}`:e}catch{return"local"}}function M1(){try{const n=localStorage.getItem(Yr);return n&&JSON.parse(n).zone==="local"?"local":"utc"}catch{return"utc"}}function w1(n){try{const t=localStorage.getItem(Yr),e=t?JSON.parse(t):{};e.zone=n,localStorage.setItem(Yr,JSON.stringify(e))}catch{}}function b1(){try{const n=localStorage.getItem(Yr);return n?!!JSON.parse(n).expanded:!1}catch{return!1}}function vf(n){try{const t=localStorage.getItem(Yr),e=t?JSON.parse(t):{};e.expanded=n,localStorage.setItem(Yr,JSON.stringify(e))}catch{}}let _f=!1;function E1(){if(_f)return;_f=!0;const n=`
    #orrery-clock {
      position: fixed; top: 16px; left: 16px;
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      text-align: left;
      pointer-events: none;
      z-index: 9;
      user-select: none;
    }
    #orrery-clock.hidden { display: none; }

    /* ── Mobile: slim full-width top bar ── */
    @media (max-width: 600px) {
      #orrery-clock {
        top: 0; left: 0; right: 0;
        padding: 8px 14px;
        padding-top: max(8px, env(safe-area-inset-top));
        background: rgba(5, 10, 30, 0.82);
        border-bottom: 1px solid rgba(255,255,255,0.07);
        display: flex; flex-wrap: wrap; align-items: center; gap: 0 12px;
        pointer-events: all; /* capture full bar — prevents canvas input bleeding */
      }
      .orrery-clock-click {
        display: flex; flex-wrap: wrap; align-items: center; gap: 0 8px;
        flex: 1;
      }
      .orrery-clock-time { font-size: 22px; }
      .orrery-clock-meta { margin-top: 0; font-size: 11px; }
      .orrery-clock-controls { margin-top: 0; gap: 4px; }
      .orrery-clock-btn {
        min-width: 44px; min-height: 44px;
        font-size: 16px; padding: 10px;
      }
      .orrery-clock-close { display: none; } /* Menu toggle is the way on mobile */
      .orrery-clock-stale { width: 100%; font-size: 10px; margin-top: 2px; }
    }
    .orrery-clock-click {
      pointer-events: all;
      cursor: pointer;
      transition: color 125ms ease;
    }
    .orrery-clock-click:hover .orrery-clock-zone { color: #fff; }
    .orrery-clock-time {
      font-size: 32px; line-height: 1;
      letter-spacing: 0.04em;
      text-shadow: 0 1px 4px rgba(0,0,0,0.6);
    }
    .orrery-clock-meta {
      font-size: 12px;
      color: #8a93a7;
      margin-top: 4px;
      letter-spacing: 0.04em;
    }
    .orrery-clock-date { margin-right: 0.8em; }
    .orrery-clock-zone {
      color: #7c869a;
      margin-right: 0.6em;
      transition: color 125ms ease;
    }
    /* ⏱ disclosure icon — same colour as the zone label by default so it doesn't crowd
       the readout; flips amber when time-warp is active so the user is alerted even
       when the controls row is collapsed. */
    .orrery-clock-expand {
      pointer-events: all;
      cursor: pointer;
      color: #6e7a90;
      font-size: 13px;
      transition: color 125ms ease;
    }
    .orrery-clock-expand:hover           { color: #fff; }
    .orrery-clock-expand.active          { color: #cfd6e4; }
    .orrery-clock-expand.warped          { color: #e2b42e; }

    /* Matches the close-X pattern from LocationPanel (✕ in panel top-right that
       flips the relevant menu toggle off). Subtle by default, red on hover. */
    .orrery-clock-close {
      pointer-events: all;
      cursor: pointer;
      color: #6e7a90;
      font-size: 13px;
      margin-left: 0.5em;
      transition: color 125ms ease;
    }
    .orrery-clock-close:hover { color: #ff7a7a; }

    .orrery-clock-controls {
      pointer-events: all;
      display: flex; align-items: center; gap: 6px;
      margin-top: 6px;
      font-size: 12px;
      letter-spacing: 0.04em;
    }
    .orrery-clock-controls.hidden { display: none; }
    .orrery-clock-btn {
      background: rgba(255,255,255,0.06);
      color: #cfd6e4;
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 4px;
      padding: 2px 7px;
      font-family: inherit; font-size: 13px;
      line-height: 1;
      cursor: pointer;
      transition: background 125ms ease, color 125ms ease;
    }
    .orrery-clock-btn:hover { background: rgba(255,255,255,0.14); color: #fff; }
    .orrery-clock-warp {
      margin-left: 4px;
      color: #6e7a90;
      transition: color 125ms ease;
    }
    .orrery-clock-warp.warped { color: #e2b42e; }
    /* Stale-data caption: appears when simulated time is far from wall-clock now
       and the live weather layers have been hidden. Sits at the bottom of the
       Clock panel, dim grey so it doesn't compete with the time readout. */
    .orrery-clock-stale {
      margin-top: 6px;
      font-size: 11px;
      color: #6e7a90;
      font-style: italic;
      cursor: help;
    }
    .orrery-clock-stale.hidden { display: none; }
    #orrery-clock-stale-date { color: #8a93a7; font-style: normal; }
  `,t=document.createElement("style");t.textContent=n,document.head.appendChild(t)}class T1{root;placeEl;coordsEl;localRowEl;localEl;solarEl;currentRowEl;sunRowEl;moonRowEl;sunCoordsEl;moonCoordsEl;satRowEl;satNameEl;satWhenEl;satDetailEl;nextPassHandler=null;geoButton;geoStatus;lat=null;lon=null;source=null;pinnedIanaName=null;pinnedUtcOffset=0;clearHandler=null;geoHandler=null;sunBeamHandler=null;moonBeamHandler=null;lastSunStr="";lastMoonStr="";lastLocalStr="";lastSolarStr="";constructor(t){A1();const e=typeof navigator<"u"&&"geolocation"in navigator;this.root=document.createElement("div"),this.root.id="orrery-location",this.root.classList.add("hidden"),this.root.innerHTML=`
      <div class="orrery-loc-titlerow">
        <span class="orrery-loc-title">location</span>
        <span class="orrery-loc-clear" id="orrery-loc-clear" title="Close panel">✕</span>
      </div>

      <div class="orrery-loc-item current" id="orrery-loc-row-current" data-source="click">
        <div class="orrery-loc-line1">
          <span class="orrery-loc-icon" aria-hidden="true">📍</span>
          <span class="orrery-loc-name" id="orrery-loc-place">click the globe to drop a pin</span>
        </div>
        <div class="orrery-loc-line2">
          <span class="orrery-loc-coords" id="orrery-loc-coords">—</span>
        </div>
        <div class="orrery-loc-line3 hidden" id="orrery-loc-row-local">
          <span class="orrery-loc-local-label">local time</span>
          <span class="orrery-loc-local-value" id="orrery-loc-local">—</span>
        </div>
        <div class="orrery-loc-line3">
          <span class="orrery-loc-solar-label">solar time</span>
          <span class="orrery-loc-solar-value" id="orrery-loc-solar">—</span>
        </div>
      </div>

      <div class="orrery-loc-item sat hidden" id="orrery-loc-row-sat" role="button" tabindex="0"
           title="Open the station card with its upcoming visible passes">
        <div class="orrery-loc-line1">
          <span class="orrery-loc-icon" aria-hidden="true">🛰️</span>
          <span class="orrery-loc-name" id="orrery-loc-sat-name">next pass</span>
          <span class="orrery-loc-sublabel" id="orrery-loc-sat-when"></span>
        </div>
        <div class="orrery-loc-line2">
          <span class="orrery-loc-coords" id="orrery-loc-sat-detail"></span>
        </div>
      </div>

      <div class="orrery-loc-item sun" id="orrery-loc-row-sun" role="button" tabindex="0"
           title="Drop the pin where the sun is directly overhead right now">
        <div class="orrery-loc-line1">
          <span class="orrery-loc-icon" aria-hidden="true">☀️</span>
          <span class="orrery-loc-name">sub-solar</span>
          <span class="orrery-loc-sublabel">sun overhead</span>
        </div>
        <div class="orrery-loc-line2">
          <span class="orrery-loc-coords" id="orrery-loc-sun-coords">—</span>
        </div>
      </div>

      <div class="orrery-loc-item moon" id="orrery-loc-row-moon" role="button" tabindex="0"
           title="Drop the pin where the moon is directly overhead right now">
        <div class="orrery-loc-line1">
          <span class="orrery-loc-icon" aria-hidden="true">🌙</span>
          <span class="orrery-loc-name">sub-lunar</span>
          <span class="orrery-loc-sublabel">moon overhead</span>
        </div>
        <div class="orrery-loc-line2">
          <span class="orrery-loc-coords" id="orrery-loc-moon-coords">—</span>
        </div>
      </div>

      ${e?`
        <button class="orrery-loc-geo" id="orrery-loc-geo">use my location</button>
        <div class="orrery-loc-geostatus" id="orrery-loc-geostatus"></div>
      `:""}
    `,t.appendChild(this.root),this.placeEl=this.root.querySelector("#orrery-loc-place"),this.coordsEl=this.root.querySelector("#orrery-loc-coords"),this.localRowEl=this.root.querySelector("#orrery-loc-row-local"),this.localEl=this.root.querySelector("#orrery-loc-local"),this.solarEl=this.root.querySelector("#orrery-loc-solar"),this.currentRowEl=this.root.querySelector("#orrery-loc-row-current"),this.sunRowEl=this.root.querySelector("#orrery-loc-row-sun"),this.moonRowEl=this.root.querySelector("#orrery-loc-row-moon"),this.sunCoordsEl=this.root.querySelector("#orrery-loc-sun-coords"),this.moonCoordsEl=this.root.querySelector("#orrery-loc-moon-coords"),this.satRowEl=this.root.querySelector("#orrery-loc-row-sat"),this.satNameEl=this.root.querySelector("#orrery-loc-sat-name"),this.satWhenEl=this.root.querySelector("#orrery-loc-sat-when"),this.satDetailEl=this.root.querySelector("#orrery-loc-sat-detail"),this.geoButton=this.root.querySelector("#orrery-loc-geo"),this.geoStatus=this.root.querySelector("#orrery-loc-geostatus"),this.root.querySelector("#orrery-loc-clear").addEventListener("click",()=>this.clearHandler?.()),this.geoButton?.addEventListener("click",()=>this.requestGeolocation());const s=r=>o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),r())};this.sunRowEl.addEventListener("click",()=>this.sunBeamHandler?.()),this.sunRowEl.addEventListener("keydown",s(()=>this.sunBeamHandler?.())),this.moonRowEl.addEventListener("click",()=>this.moonBeamHandler?.()),this.moonRowEl.addEventListener("keydown",s(()=>this.moonBeamHandler?.())),this.satRowEl.addEventListener("click",()=>this.nextPassHandler?.()),this.satRowEl.addEventListener("keydown",s(()=>this.nextPassHandler?.()))}onNextPass(t){this.nextPassHandler=t}setNextPass(t){this.satRowEl.classList.toggle("hidden",!t),t&&(this.satNameEl.textContent=`${t.station} visible`,this.satWhenEl.textContent=t.when,this.satDetailEl.textContent=t.detail)}onSunBeam(t){this.sunBeamHandler=t}onMoonBeam(t){this.moonBeamHandler=t}onClear(t){this.clearHandler=t}onGeolocate(t){this.geoHandler=t}setBeamCoords(t,e){const i=`${_c(t.lat)}, ${yc(t.lon)}`,s=`${_c(e.lat)}, ${yc(e.lon)}`;i!==this.lastSunStr&&(this.sunCoordsEl.textContent=i,this.lastSunStr=i),s!==this.lastMoonStr&&(this.moonCoordsEl.textContent=s,this.lastMoonStr=s)}setVisible(t){this.root.classList.toggle("hidden",!t)}setLocation(t,e,i){this.lat=t,this.lon=e,this.source=i,this.coordsEl.textContent=`${_c(t)}, ${yc(e)}`,this.placeEl.textContent="looking up…",this.refreshSelection()}setPlaceName(t){this.placeEl.textContent=t??"—"}setPinnedZone(t,e=0){this.pinnedIanaName=t||null,this.pinnedUtcOffset=e,this.localRowEl.classList.toggle("hidden",this.lat===null),this.lastLocalStr=""}setNow(t){if(this.lat===null||this.lon===null)return;let e="";if(this.pinnedIanaName)try{const l=new Intl.DateTimeFormat("en-GB",{timeZone:this.pinnedIanaName,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(t),c=Object.fromEntries(l.filter(d=>d.type!=="literal").map(d=>[d.type,d.value])),u=new Intl.DateTimeFormat([],{timeZone:this.pinnedIanaName,timeZoneName:"short"}).formatToParts(t).find(d=>d.type==="timeZoneName")?.value??"";e=`${c.hour}:${c.minute}:${c.second}${u?`  ${u}`:""}`}catch{}if(!e){const l=t.getTime()+this.pinnedUtcOffset*36e5,c=new Date(l);e=`${br(c.getUTCHours())}:${br(c.getUTCMinutes())}:${br(c.getUTCSeconds())}`}e!==this.lastLocalStr&&(this.localEl.textContent=e,this.lastLocalStr=e);const i=(t.getUTCHours()+t.getUTCMinutes()/60+t.getUTCSeconds()/3600+this.lon/15+24)%24,s=Math.floor(i),r=Math.floor((i-s)*60),o=Math.floor(((i-s)*60-r)*60),a=`${br(s)}:${br(r)}:${br(o)}`;a!==this.lastSolarStr&&(this.solarEl.textContent=a,this.lastSolarStr=a)}reset(){this.lat=this.lon=null,this.source=null,this.pinnedIanaName=null,this.placeEl.textContent="click the globe to drop a pin",this.coordsEl.textContent="—",this.localEl.textContent="—",this.solarEl.textContent="—",this.localRowEl.classList.add("hidden"),this.lastLocalStr="",this.lastSolarStr="",this.geoStatus&&(this.geoStatus.textContent=""),this.refreshSelection()}refreshSelection(){this.currentRowEl.classList.toggle("selected",this.source==="click"||this.source==="geolocation"),this.sunRowEl.classList.toggle("selected",this.source==="sun"),this.moonRowEl.classList.toggle("selected",this.source==="moon")}requestGeolocation(){!navigator.geolocation||!this.geoButton||!this.geoStatus||(this.geoButton.disabled=!0,this.geoStatus.textContent="asking browser…",navigator.geolocation.getCurrentPosition(t=>{this.geoButton.disabled=!1,this.geoStatus.textContent="",this.geoHandler?.(t.coords.latitude,t.coords.longitude)},t=>{this.geoButton.disabled=!1,this.geoStatus.textContent=t.code===t.PERMISSION_DENIED?"permission denied":t.code===t.POSITION_UNAVAILABLE?"position unavailable":t.code===t.TIMEOUT?"timed out":"unavailable"},{enableHighAccuracy:!1,timeout:1e4,maximumAge:300*1e3}))}}function br(n){return n<10?`0${n}`:`${n}`}function _c(n){return`${Math.abs(n).toFixed(2)}°${n>=0?"N":"S"}`}function yc(n){return`${Math.abs(n).toFixed(2)}°${n>=0?"E":"W"}`}let yf=!1;function A1(){if(yf)return;yf=!0;const n=`
    #orrery-location {
      position: fixed; right: 16px; bottom: 16px;
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.45;
      padding: 10px 14px; border-radius: 6px;
      min-width: 240px;
      max-width: 300px;
      z-index: 10;
      pointer-events: all;
      user-select: text;
    }
    #orrery-location.hidden { display: none; }

    @media (max-width: 600px) {
      #orrery-location {
        left: 8px; right: 8px;
        min-width: 0; max-width: none;
        bottom: 56px; /* sit above the bottom-sheet handle bar */
        bottom: calc(56px + env(safe-area-inset-bottom));
      }
    }
    .orrery-loc-titlerow {
      display: flex; justify-content: space-between; align-items: baseline;
      margin-bottom: 6px;
    }
    .orrery-loc-title {
      color: #6e7a90; letter-spacing: 0.1em; text-transform: uppercase;
      font-size: 11px;
    }
    .orrery-loc-clear {
      color: #6e7a90; cursor: pointer; margin-left: 1em;
      transition: color 125ms ease;
    }
    .orrery-loc-clear:hover { color: #ff7a7a; }

    .orrery-loc-item {
      padding: 6px 8px;
      border-radius: 4px;
      border-left: 3px solid transparent;
      background: rgba(255,255,255,0.02);
      margin-bottom: 4px;
      transition: background 125ms ease, border-color 125ms ease;
    }
    .orrery-loc-item.current { border-left-color: rgba(110, 200, 120, 0.45); }
    .orrery-loc-item.sun     { border-left-color: rgba(255, 200, 60, 0.45); cursor: pointer; }
    .orrery-loc-item.sat     { border-left-color: rgba(143, 216, 255, 0.45); cursor: pointer; }
    .orrery-loc-item.sat:hover { background: rgba(255,255,255,0.07); }
    .orrery-loc-item.sat .orrery-loc-sublabel { color: #8fd8ff; }
    #orrery-location .hidden { display: none; }
    .orrery-loc-item.moon    { border-left-color: rgba(200, 215, 235, 0.45); cursor: pointer; }
    .orrery-loc-item.sun:hover,
    .orrery-loc-item.moon:hover { background: rgba(255,255,255,0.07); }
    .orrery-loc-item.sun:focus-visible,
    .orrery-loc-item.moon:focus-visible {
      outline: 1px solid rgba(226, 180, 46, 0.5); outline-offset: 1px;
    }
    /* Selected highlights — strong tint in the row-specific colour. */
    .orrery-loc-item.current.selected {
      background: rgba(110, 200, 120, 0.16);
      border-left-color: #6dd58c;
    }
    .orrery-loc-item.current.selected .orrery-loc-name { color: #c8f5d2; }
    .orrery-loc-item.sun.selected {
      background: rgba(255, 200, 60, 0.18);
      border-left-color: #ffcc44;
    }
    .orrery-loc-item.sun.selected .orrery-loc-name { color: #ffeab2; }
    .orrery-loc-item.moon.selected {
      background: rgba(200, 215, 235, 0.18);
      border-left-color: #c8d8f0;
    }
    .orrery-loc-item.moon.selected .orrery-loc-name { color: #e8eef8; }

    .orrery-loc-line1 {
      display: flex; align-items: baseline; gap: 6px;
    }
    .orrery-loc-icon {
      font-size: 14px; line-height: 1;
      /* Emoji rendering sizing — keep the icon vertically centred against the text */
      flex: 0 0 auto;
    }
    .orrery-loc-name {
      color: #cfd6e4; font-size: 12px;
    }
    .orrery-loc-sublabel {
      color: #6e7a90; font-size: 11px; letter-spacing: 0.04em;
      margin-left: auto;
    }
    .orrery-loc-line2 {
      margin-top: 2px;
      padding-left: 22px;
    }
    .orrery-loc-coords { color: #a4b0c6; font-size: 11px; }
    .orrery-loc-line3 {
      margin-top: 2px; padding-left: 22px;
      display: flex; gap: 8px; align-items: baseline;
    }
    .orrery-loc-local-label { color: #6e7a90; font-size: 10px; letter-spacing: 0.04em; }
    .orrery-loc-local-value { color: #e2c96a; font-size: 11px; font-weight: 600; }
    .orrery-loc-solar-label { color: #6e7a90; font-size: 10px; letter-spacing: 0.04em; }
    .orrery-loc-solar-value { color: #8a93a7; font-size: 11px; }

    .orrery-loc-geo {
      display: block; width: 100%;
      margin-top: 6px;
      background: rgba(255,255,255,0.06);
      color: #cfd6e4;
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 4px; padding: 5px 8px;
      font-family: inherit; font-size: 12px;
      cursor: pointer;
      transition: background 125ms ease, color 125ms ease;
    }
    .orrery-loc-geo:hover    { background: rgba(255,255,255,0.12); color: #fff; }
    .orrery-loc-geo:disabled { opacity: 0.5; cursor: progress; }
    .orrery-loc-geostatus {
      color: #8a93a7; font-size: 11px; margin-top: 4px; min-height: 1em;
    }
  `,t=document.createElement("style");t.textContent=n,document.head.appendChild(t)}const Mo=56,xc=Mo/.2666,C1=5,xf=3e4,Sf=5*6e4;class R1{root;moonCircle;magnitudeEl;statusEl;placeEl;labelEl;solarSvg;lunarSvg;moonBloodCircle;scrubRoot;scrubInput;scrubMarker;scrubRelEl;playBtn;callbacks;lastMagnitudeStr="";lastStatusStr="";lastMoonR=-1;lastMoonX=NaN;lastMoonY=NaN;lastRelStr="";lastPauseLabel="";lastBloodOpacity=-1;mode="solar";scrubStartMs=0;scrubEndMs=0;scrubPeakMs=0;isDragging=!1;constructor(t,e={}){P1(),this.callbacks=e,this.root=document.createElement("div"),this.root.id="orrery-sundisc",this.root.classList.add("hidden");const i=Mo*1.8;this.root.innerHTML=`
      <div class="orrery-sundisc-title">
        <span class="orrery-sundisc-label" id="orrery-sundisc-label">sky from</span>
        <span class="orrery-sundisc-place" id="orrery-sundisc-place">—</span>
        <span class="orrery-sundisc-close" id="orrery-sundisc-close" title="Close eclipse view (closes both panels)">✕</span>
      </div>
      <!-- Solar view: sun's gold disc + moon's dark disc at observer-view offset. -->
      <svg id="orrery-sundisc-svg-solar" viewBox="${-i} ${-i} ${2*i} ${2*i}" width="${2*i}" height="${2*i}">
        <defs>
          <radialGradient id="orrery-sundisc-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stop-color="#fff4c2"/>
            <stop offset="70%" stop-color="#ffcc44"/>
            <stop offset="100%" stop-color="#cc8800"/>
          </radialGradient>
        </defs>
        <circle id="orrery-sundisc-sun"
                cx="0" cy="0" r="${Mo}"
                fill="url(#orrery-sundisc-grad)"/>
        <circle id="orrery-sundisc-moon"
                cx="0" cy="0" r="0"
                fill="#0a0e16" stroke="#1a1f2a" stroke-width="0.5"/>
      </svg>
      <!-- Lunar view: moon's disc dimming + tinting toward copper as Earth's
           shadow deepens. Two stacked circles (gray base + copper overlay
           cross-fading on fraction) mirror the same trick the 3D Moon mesh
           uses with emissive intensity + tint. -->
      <svg id="orrery-sundisc-svg-lunar" class="hidden" viewBox="${-i} ${-i} ${2*i} ${2*i}" width="${2*i}" height="${2*i}">
        <defs>
          <radialGradient id="orrery-sundisc-moongrad" cx="48%" cy="42%" r="55%">
            <stop offset="0%"  stop-color="#e8e2d6"/>
            <stop offset="70%" stop-color="#aea69a"/>
            <stop offset="100%" stop-color="#6b6457"/>
          </radialGradient>
          <radialGradient id="orrery-sundisc-bloodgrad" cx="48%" cy="42%" r="55%">
            <stop offset="0%"  stop-color="#a83820"/>
            <stop offset="100%" stop-color="#5a1808"/>
          </radialGradient>
        </defs>
        <circle id="orrery-sundisc-moondisc-base"   cx="0" cy="0" r="${Mo}" fill="url(#orrery-sundisc-moongrad)"/>
        <circle id="orrery-sundisc-moondisc-blood"  cx="0" cy="0" r="${Mo}" fill="url(#orrery-sundisc-bloodgrad)" opacity="0"/>
      </svg>
      <div class="orrery-sundisc-readout">
        <span class="orrery-sundisc-magnitude" id="orrery-sundisc-mag">—</span>
        <span class="orrery-sundisc-status" id="orrery-sundisc-status">—</span>
      </div>
      <div class="orrery-sundisc-scrub hidden" id="orrery-sundisc-scrub">
        <div class="orrery-sundisc-scrub-bar">
          <div class="orrery-sundisc-scrub-marker" id="orrery-sundisc-scrub-marker" title="Greatest eclipse"></div>
          <input type="range" min="0" max="1000" value="0" step="1"
                 class="orrery-sundisc-scrub-input" id="orrery-sundisc-scrub-input"
                 title="Drag to scrub through the eclipse window"/>
        </div>
        <div class="orrery-sundisc-scrub-labels">
          <span>U1</span>
          <span id="orrery-sundisc-scrub-rel">T+0:00</span>
          <span>U4</span>
        </div>
        <div class="orrery-sundisc-scrub-controls">
          <button class="orrery-sundisc-scrub-btn" id="orrery-sundisc-rev"  title="Step 30 s earlier">⏪</button>
          <button class="orrery-sundisc-scrub-btn" id="orrery-sundisc-play" title="Pause / play">⏸</button>
          <button class="orrery-sundisc-scrub-btn" id="orrery-sundisc-ff"   title="Step 30 s later">⏩</button>
        </div>
      </div>
    `,t.appendChild(this.root),this.moonCircle=this.root.querySelector("#orrery-sundisc-moon"),this.magnitudeEl=this.root.querySelector("#orrery-sundisc-mag"),this.statusEl=this.root.querySelector("#orrery-sundisc-status"),this.placeEl=this.root.querySelector("#orrery-sundisc-place"),this.labelEl=this.root.querySelector("#orrery-sundisc-label"),this.solarSvg=this.root.querySelector("#orrery-sundisc-svg-solar"),this.lunarSvg=this.root.querySelector("#orrery-sundisc-svg-lunar"),this.moonBloodCircle=this.root.querySelector("#orrery-sundisc-moondisc-blood"),this.scrubRoot=this.root.querySelector("#orrery-sundisc-scrub"),this.scrubInput=this.root.querySelector("#orrery-sundisc-scrub-input"),this.scrubMarker=this.root.querySelector("#orrery-sundisc-scrub-marker"),this.scrubRelEl=this.root.querySelector("#orrery-sundisc-scrub-rel"),this.playBtn=this.root.querySelector("#orrery-sundisc-play"),this.scrubInput.addEventListener("pointerdown",()=>{this.isDragging=!0}),window.addEventListener("pointerup",()=>{this.isDragging=!1}),window.addEventListener("pointercancel",()=>{this.isDragging=!1}),this.scrubInput.addEventListener("input",()=>{const s=this.scrubStartMs+this.scrubInput.valueAsNumber;this.callbacks.onScrubTo?.(s)}),this.root.querySelector("#orrery-sundisc-rev").addEventListener("click",()=>{this.callbacks.onStep?.(-xf)}),this.root.querySelector("#orrery-sundisc-ff").addEventListener("click",()=>{this.callbacks.onStep?.(xf)}),this.playBtn.addEventListener("click",()=>{this.callbacks.onPlayPause?.()}),this.root.querySelector("#orrery-sundisc-close").addEventListener("click",()=>{this.callbacks.onClose?.()})}setVisible(t){this.root.classList.toggle("hidden",!t)}setScrubControlsVisible(t){this.scrubRoot.classList.toggle("hidden",!t)}setMode(t){this.mode!==t&&(this.mode=t,this.solarSvg.classList.toggle("hidden",t!=="solar"),this.lunarSvg.classList.toggle("hidden",t!=="lunar"),this.labelEl.textContent=t==="lunar"?"the moon":"sky from",t==="lunar"&&(this.placeEl.textContent=""))}setLunarFraction(t){if(this.mode!=="lunar")return;const e=Math.max(0,Math.min(1,t));e!==this.lastBloodOpacity&&(this.moonBloodCircle.setAttribute("opacity",e.toFixed(3)),this.lastBloodOpacity=e)}setLunarReadout(t,e){t!==this.lastMagnitudeStr&&(this.magnitudeEl.textContent=t,this.lastMagnitudeStr=t),e!==this.lastStatusStr&&(this.statusEl.textContent=e,this.lastStatusStr=e)}setEclipseWindow(t,e,i){this.scrubStartMs=t.getTime()-Sf,this.scrubEndMs=e.getTime()+Sf,this.scrubPeakMs=i.getTime();const s=this.scrubEndMs-this.scrubStartMs;this.scrubInput.max=String(s);const r=(this.scrubPeakMs-this.scrubStartMs)/s;this.scrubMarker.style.left=`${(r*100).toFixed(2)}%`}setSimulatedTime(t){if(this.isDragging||this.scrubEndMs<=this.scrubStartMs)return;const e=Math.max(this.scrubStartMs,Math.min(this.scrubEndMs,t));this.scrubInput.valueAsNumber=e-this.scrubStartMs;const i=Math.round((t-this.scrubPeakMs)/1e3),s=i<0?"−":"+",r=Math.abs(i),o=Math.floor(r/60),a=r%60,l=`T${s}${o}:${a.toString().padStart(2,"0")}`;l!==this.lastRelStr&&(this.scrubRelEl.textContent=l,this.lastRelStr=l)}setPlaying(t){const e=t?"⏸":"▶";e!==this.lastPauseLabel&&(this.playBtn.textContent=e,this.playBtn.title=t?"Pause":"Resume",this.lastPauseLabel=e)}setPlaceName(t){this.placeEl.textContent=t??"—"}update(t){if(!t.sunIsUp||t.angularSeparationDeg>C1)return!1;const e=t.offsetEastDeg*xc,i=-t.offsetUpDeg*xc,s=t.moonApparentRadiusDeg*xc;e!==this.lastMoonX&&(this.moonCircle.setAttribute("cx",e.toFixed(2)),this.lastMoonX=e),i!==this.lastMoonY&&(this.moonCircle.setAttribute("cy",i.toFixed(2)),this.lastMoonY=i),s!==this.lastMoonR&&(this.moonCircle.setAttribute("r",s.toFixed(2)),this.lastMoonR=s);const r=t.magnitude;let o,a;return r<=0?(o="—",a=`${t.angularSeparationDeg.toFixed(2)}° apart`):r>=1?(o=`magnitude ${r.toFixed(3)}`,a=t.moonApparentRadiusDeg>t.sunApparentRadiusDeg?"total":"annular peak"):(o=`magnitude ${r.toFixed(3)}`,a=`${(r*100).toFixed(1)}% obscured`),o!==this.lastMagnitudeStr&&(this.magnitudeEl.textContent=o,this.lastMagnitudeStr=o),a!==this.lastStatusStr&&(this.statusEl.textContent=a,this.lastStatusStr=a),!0}}let Mf=!1;function P1(){if(Mf)return;Mf=!0;const n=`
    #orrery-sundisc {
      position: fixed; top: 96px; left: 16px;
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.4;
      padding: 10px 14px; border-radius: 6px;
      z-index: 10;
      pointer-events: all;
      user-select: text;
    }
    #orrery-sundisc.hidden { display: none; }

    @media (max-width: 600px) {
      #orrery-sundisc {
        top: 56px; left: 8px; right: auto;
        max-width: 180px;
        max-height: calc(100vh - 130px);
        overflow-y: auto;
      }
      /* Scale the SVG disc down so it fits in the compact panel without
         dominating the screen. The viewBox is unchanged so circle positions
         remain correct — only the rendered size shrinks. */
      #orrery-sundisc-svg-solar,
      #orrery-sundisc-svg-lunar {
        width: 96px !important;
        height: 96px !important;
      }
      .orrery-sundisc-scrub-btn {
        width: 44px; height: 44px;
        font-size: 18px;
      }
    }
    .orrery-sundisc-title {
      display: flex; align-items: baseline; gap: 6px;
      margin-bottom: 6px;
    }
    .orrery-sundisc-label {
      color: #6e7a90; letter-spacing: 0.08em; text-transform: uppercase;
      font-size: 10px;
    }
    .orrery-sundisc-place { color: #cfd6e4; font-size: 12px; }
    /* Close ✕ in the title row — matches EclipsePanel + LocationPanel styling.
       Pushed to the far right via margin-left:auto so the label + place name
       still hug the left. Hover turns red to signal destructive (closes both
       eclipse panels). */
    .orrery-sundisc-close {
      color: #6e7a90;
      cursor: pointer;
      transition: color 125ms ease;
      margin-left: auto;
      font-size: 12px;
    }
    .orrery-sundisc-close:hover { color: #ff7a7a; }
    /* Both the solar and lunar SVG views share layout. Background tint subtly
       hints at the body being shown — warm for sun, cool for moon. */
    #orrery-sundisc-svg-solar, #orrery-sundisc-svg-lunar {
      display: block;
      margin: 4px auto;
      border-radius: 4px;
    }
    /* Solar background sits on a flat slate-blue base so the moon's near-black
       silhouette has contrast against it (otherwise the moon's unilluminated
       limb vanishes into the panel's dark chrome). Warm radial overlay still
       hints at the sun's halo where it pokes out from behind the moon. */
    #orrery-sundisc-svg-solar {
      background:
        radial-gradient(circle at center, rgba(255, 200, 100, 0.08), transparent 60%),
        rgba(70, 80, 100, 0.45);
    }
    #orrery-sundisc-svg-lunar { background: radial-gradient(circle at center, rgba(180, 200, 240, 0.04), transparent 60%); }
    #orrery-sundisc-svg-solar.hidden, #orrery-sundisc-svg-lunar.hidden { display: none; }
    .orrery-sundisc-readout {
      display: flex; flex-direction: column; align-items: center;
      gap: 1px; margin-top: 6px;
    }
    .orrery-sundisc-magnitude {
      color: #e2b42e; font-size: 12px; font-weight: 500;
    }
    .orrery-sundisc-status {
      color: #8a93a7; font-size: 11px;
    }
    /* Scrub block (visible only when a catalogued eclipse is loaded). Native
       <input type="range"> for the slider so dragging + keyboard arrow keys
       come for free. Greatest-eclipse marker absolutely-positioned over the
       track. Three video-style buttons below. */
    .orrery-sundisc-scrub {
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }
    .orrery-sundisc-scrub.hidden { display: none; }
    .orrery-sundisc-scrub-bar {
      position: relative;
      padding: 6px 0;
    }
    .orrery-sundisc-scrub-input {
      width: 100%;
      margin: 0;
      accent-color: #e2b42e;
      cursor: pointer;
      background: transparent;
      touch-action: none; /* prevent OrbitControls stealing the drag gesture */
    }
    .orrery-sundisc-scrub-marker {
      position: absolute;
      top: 50%;
      width: 10px; height: 10px;
      transform: translate(-50%, -50%) rotate(45deg);
      background: #e2b42e;
      pointer-events: none;
      box-shadow: 0 0 6px rgba(226, 180, 46, 0.6);
      z-index: 0;
    }
    .orrery-sundisc-scrub-labels {
      display: flex; justify-content: space-between;
      font-size: 10px; color: #6e7a90;
      letter-spacing: 0.05em;
      margin-top: -2px;
    }
    #orrery-sundisc-scrub-rel { color: #cfd6e4; font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; }
    .orrery-sundisc-scrub-controls {
      display: flex; justify-content: center; gap: 8px;
      margin-top: 6px;
    }
    .orrery-sundisc-scrub-btn {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #cfd6e4;
      font-size: 14px;
      width: 28px; height: 24px;
      border-radius: 4px;
      cursor: pointer;
      transition: background 125ms ease, color 125ms ease;
      padding: 0; line-height: 1;
    }
    .orrery-sundisc-scrub-btn:hover {
      background: rgba(226, 180, 46, 0.18);
      color: #fff;
    }
  `,t=document.createElement("style");t.textContent=n,document.head.appendChild(t)}const D1={temperature:{stops:["#1a1a8c","#1aa6f2","#73d966","#f2d933","#d92626"]},humidity:{stops:["#b38c4d","#ccbf73","#8cbf66","#4d99bf","#264da6"]},pressure:{stops:["#7340a6","#4d8cd9","#8cd98c","#f2d959","#d94d33"]},water:{stops:["#d9d9cc","#a6ccd9","#4da6d9","#3366d9","#1a3399"]},cloud:{stops:["#333338","#737380","#b3b8c7","#e0ebfa","#a6d9ff"]}},Fh=240,wf=10;class L1{root;labelEl;minEl;midEl;maxEl;stopEls;lastSpec=null;constructor(t){I1(),this.root=document.createElement("div"),this.root.id="orrery-scalekey",this.root.classList.add("hidden"),this.root.innerHTML=`
      <div class="orrery-scalekey-label" id="orrery-scalekey-label">—</div>
      <svg id="orrery-scalekey-svg" width="${Fh}" height="${wf}">
        <defs>
          <linearGradient id="orrery-scalekey-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#000"/>
            <stop offset="25%"  stop-color="#000"/>
            <stop offset="50%"  stop-color="#000"/>
            <stop offset="75%"  stop-color="#000"/>
            <stop offset="100%" stop-color="#000"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${Fh}" height="${wf}"
              fill="url(#orrery-scalekey-grad)" rx="2" ry="2"/>
      </svg>
      <div class="orrery-scalekey-ticks">
        <span class="orrery-scalekey-min" id="orrery-scalekey-min">—</span>
        <span class="orrery-scalekey-mid" id="orrery-scalekey-mid">—</span>
        <span class="orrery-scalekey-max" id="orrery-scalekey-max">—</span>
      </div>
    `,t.appendChild(this.root),this.labelEl=this.root.querySelector("#orrery-scalekey-label"),this.minEl=this.root.querySelector("#orrery-scalekey-min"),this.midEl=this.root.querySelector("#orrery-scalekey-mid"),this.maxEl=this.root.querySelector("#orrery-scalekey-max"),this.stopEls=Array.from(this.root.querySelectorAll("#orrery-scalekey-grad stop"))}setVisible(t){this.root.classList.toggle("hidden",!t)}update(t){if(this.lastSpec&&this.lastSpec.label===t.label&&this.lastSpec.palette===t.palette&&this.lastSpec.displayMin===t.displayMin&&this.lastSpec.displayMid===t.displayMid&&this.lastSpec.displayMax===t.displayMax)return;this.lastSpec={...t},this.labelEl.textContent=t.label,this.minEl.textContent=t.displayMin,this.midEl.textContent=t.displayMid,this.maxEl.textContent=t.displayMax;const e=D1[t.palette].stops;for(let i=0;i<5;i++)this.stopEls[i].setAttribute("stop-color",e[i])}}let bf=!1;function I1(){if(bf)return;bf=!0;const n=`
    #orrery-scalekey {
      position: fixed; left: 50%; bottom: 24px;
      transform: translateX(-50%);
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 11px; line-height: 1.4;
      padding: 8px 14px 6px; border-radius: 6px;
      z-index: 10;
      pointer-events: none;
      user-select: none;
      text-align: center;
    }
    #orrery-scalekey.hidden { display: none; }
    .orrery-scalekey-label {
      color: #cfd6e4; font-size: 12px;
      margin-bottom: 4px;
      letter-spacing: 0.02em;
    }
    #orrery-scalekey-svg {
      display: block; margin: 0 auto;
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
      border-radius: 2px;
    }
    .orrery-scalekey-ticks {
      display: flex; justify-content: space-between;
      width: ${Fh}px;
      margin: 4px auto 0;
      font-size: 10px;
      color: #8a93a7;
    }
  `,t=document.createElement("style");t.textContent=n,document.head.appendChild(t)}const U1=Date.UTC(2e3,0,1,12,0,0),Ha=Math.PI/180;function im(n){return(n.getTime()-U1)/864e5}function sm(n){const t=im(n),e=(280.46+.9856474*t)*Ha,i=(357.528+.9856003*t)*Ha,s=e+(1.915*Math.sin(i)+.02*Math.sin(2*i))*Ha,r=(23.439-4e-7*t)*Ha,o=Math.atan2(Math.cos(r)*Math.sin(s),Math.cos(s)),a=Math.asin(Math.sin(r)*Math.sin(s));return{ra:o,dec:a}}function ds(n){let e=18.697374558+24.06570982441908*im(n);return e=(e%24+24)%24,e*Math.PI/12}function Cl(n,t=new C){const{ra:e,dec:i}=sm(n);return t.set(Math.cos(i)*Math.cos(e),Math.sin(i),-Math.cos(i)*Math.sin(e))}function ps(n){return ds(n)}const qn=Math.PI/180,gl=23.44*qn,Ef=new C(-Math.sin(gl),Math.cos(gl),0),Sc=Math.asin(696e3/149597870)/qn,N1=1738/6378.14,Mc=new C,Er=new C,Ga=new C,wc=new C,bc=new C,mo=new C,go=new C;function F1(n,t,e,i,s){const r=n*qn,o=t*qn,a=Math.cos(r),l=a*Math.cos(o),c=Math.sin(r),h=-a*Math.sin(o),u=ps(e),d=Math.cos(u),p=Math.sin(u),g=l*d+h*p,v=c,m=-l*p+h*d,f=Math.cos(gl),b=Math.sin(gl);Mc.set(g*f-v*b,g*b+v*f,m),Er.copy(Mc).normalize();const S=Er.dot(Ef);Ga.copy(Ef).addScaledVector(Er,-S).normalize(),wc.crossVectors(Er,Ga),go.copy(i).normalize();const x=go.dot(Er),D=Math.asin(Ec(x,-1,1))/qn,A=go.dot(wc),R=go.dot(Ga);let L=Math.atan2(A,R)/qn;L<0&&(L+=360),bc.copy(s).sub(Mc);const E=bc.length();mo.copy(bc).divideScalar(E);const M=mo.dot(Er),P=Math.asin(Ec(M,-1,1))/qn,O=mo.dot(wc),B=mo.dot(Ga);let W=Math.atan2(O,B)/qn;W<0&&(W+=360);const Y=Ec(go.dot(mo),-1,1),H=Math.acos(Y)/qn,K=Math.asin(N1/E)/qn,z=(Sc+K-H)/(2*Sc);let J=W-L;J>180&&(J-=360),J<-180&&(J+=360);const st=J*Math.cos(D*qn),lt=P-D;return{sunAltitudeDeg:D,sunAzimuthDeg:L,moonAltitudeDeg:P,moonAzimuthDeg:W,angularSeparationDeg:H,sunApparentRadiusDeg:Sc,moonApparentRadiusDeg:K,magnitude:z,offsetEastDeg:st,offsetUpDeg:lt,sunIsUp:D>0}}function Ec(n,t,e){return n<t?t:n>e?e:n}const Zr=[{id:"20260812",name:"Spain total solar eclipse (2026)",region:"Iceland → Greenland → northern Spain",type:"total",peakUtc:new Date("2026-08-12T17:46:00Z"),startUtc:new Date("2026-08-12T15:34:00Z"),endUtc:new Date("2026-08-12T19:58:00Z"),maxTotalitySec:134},{id:"20270802",name:"Long-duration total solar eclipse over Spain & North Africa (2027)",region:"Atlantic → Gibraltar → Spain → Egypt → Saudi Arabia",type:"total",peakUtc:new Date("2027-08-02T10:07:00Z"),startUtc:new Date("2027-08-02T07:30:00Z"),endUtc:new Date("2027-08-02T12:43:00Z"),maxTotalitySec:384},{id:"20280722",name:"Australia & New Zealand total solar eclipse (2028)",region:"Indian Ocean → central Australia → Sydney → New Zealand",type:"total",peakUtc:new Date("2028-07-22T02:56:00Z"),startUtc:new Date("2028-07-22T00:30:00Z"),endUtc:new Date("2028-07-22T05:23:00Z"),maxTotalitySec:310},{id:"20240408",name:"North American total solar eclipse (2024)",region:"Mexico → Texas → Indianapolis → Ohio → eastern Canada",type:"total",peakUtc:new Date("2024-04-08T18:18:00Z"),startUtc:new Date("2024-04-08T15:42:00Z"),endUtc:new Date("2024-04-08T20:52:00Z"),maxTotalitySec:268}];function O1(n=new Date){return Zr.filter(e=>e.endUtc.getTime()>n.getTime()).sort((e,i)=>e.peakUtc.getTime()-i.peakUtc.getTime())[0]??null}function rm(n){return Zr.find(t=>t.id===n)}const du=[{id:"20260303",name:"Total lunar eclipse (2026)",region:"Pacific · Asia · Australia · Americas (Pacific Rim)",type:"total",startUtc:new Date("2026-03-03T08:39:00Z"),peakUtc:new Date("2026-03-03T11:33:00Z"),endUtc:new Date("2026-03-03T14:28:00Z"),umbralMagnitude:1.151,totalitySec:3480},{id:"20260828",name:"Partial lunar eclipse (2026)",region:"Americas · Europe · Africa · west Asia",type:"partial",startUtc:new Date("2026-08-28T02:39:00Z"),peakUtc:new Date("2026-08-28T04:54:00Z"),endUtc:new Date("2026-08-28T07:38:00Z"),umbralMagnitude:.929,totalitySec:0},{id:"20280112",name:"Partial lunar eclipse (2028)",region:"Asia · Australia · Pacific",type:"partial",startUtc:new Date("2028-01-12T01:43:00Z"),peakUtc:new Date("2028-01-12T04:13:00Z"),endUtc:new Date("2028-01-12T06:42:00Z"),umbralMagnitude:.733,totalitySec:0},{id:"20281231",name:"Total lunar eclipse (2028)",region:"Europe · Africa · Asia · Americas",type:"total",startUtc:new Date("2028-12-31T14:08:00Z"),peakUtc:new Date("2028-12-31T16:53:00Z"),endUtc:new Date("2028-12-31T19:39:00Z"),umbralMagnitude:1.25,totalitySec:4260},{id:"20290626",name:"Total lunar eclipse (2029) — deep totality",region:"Americas · Europe · Africa",type:"total",startUtc:new Date("2029-06-26T00:33:00Z"),peakUtc:new Date("2029-06-26T03:23:00Z"),endUtc:new Date("2029-06-26T06:13:00Z"),umbralMagnitude:1.844,totalitySec:6120},{id:"20291220",name:"Total lunar eclipse (2029)",region:"Americas · Europe · Africa",type:"total",startUtc:new Date("2029-12-20T19:54:00Z"),peakUtc:new Date("2029-12-20T22:42:00Z"),endUtc:new Date("2029-12-21T01:31:00Z"),umbralMagnitude:1.118,totalitySec:3240}];function om(n){return du.find(t=>t.id===n)}function k1(n,t){const e=t.getTime(),i=n.startUtc.getTime(),s=n.peakUtc.getTime(),r=n.endUtc.getTime();return e<=i||e>=r?0:e<=s?(e-i)/(s-i):(r-e)/(r-s)}class z1{root;solarListEl;lunarListEl;solarTabBtn;lunarTabBtn;callbacks;solarSorted;lunarSorted;solarRowEls=new Map;lunarRowEls=new Map;selectedSolarId=null;selectedLunarId=null;activeTab="solar";constructor(t,e={}){B1(),this.callbacks=e,this.solarSorted=[...Zr].sort((s,r)=>s.peakUtc.getTime()-r.peakUtc.getTime()),this.lunarSorted=[...du].sort((s,r)=>s.peakUtc.getTime()-r.peakUtc.getTime()),this.root=document.createElement("div"),this.root.id="orrery-eclipse",this.root.classList.add("hidden"),this.root.innerHTML=`
      <div class="orrery-ecl-row">
        <span class="orrery-ecl-title">eclipse</span>
        <span class="orrery-ecl-close" id="orrery-ecl-close" title="Close panel">✕</span>
      </div>
      <div class="orrery-ecl-tabs">
        <button class="orrery-ecl-tab active" id="orrery-ecl-tab-solar" data-tab="solar" title="Solar eclipses — moon's shadow on Earth">☀ Solar</button>
        <button class="orrery-ecl-tab"        id="orrery-ecl-tab-lunar" data-tab="lunar" title="Lunar eclipses — Earth's shadow on the moon">🌑 Lunar</button>
      </div>
      <div class="orrery-ecl-list" id="orrery-ecl-list-solar"></div>
      <div class="orrery-ecl-list hidden" id="orrery-ecl-list-lunar"></div>
      <div class="orrery-ecl-hint" id="orrery-ecl-hint">
        click a row to jump to T−1m at 60× warp
      </div>
    `,t.appendChild(this.root),this.solarListEl=this.root.querySelector("#orrery-ecl-list-solar"),this.lunarListEl=this.root.querySelector("#orrery-ecl-list-lunar"),this.solarTabBtn=this.root.querySelector("#orrery-ecl-tab-solar"),this.lunarTabBtn=this.root.querySelector("#orrery-ecl-tab-lunar"),this.root.querySelector("#orrery-ecl-close").addEventListener("click",()=>this.callbacks.onClose?.()),this.solarTabBtn.addEventListener("click",()=>this.setActiveTab("solar")),this.lunarTabBtn.addEventListener("click",()=>this.setActiveTab("lunar")),this.renderSolarList(),this.renderLunarList()}setVisible(t){this.root.classList.toggle("hidden",!t)}isVisible(){return!this.root.classList.contains("hidden")}showTab(t){this.setActiveTab(t)}setSelected(t,e){if(t==="solar"){if(this.selectedSolarId===e)return;this.selectedSolarId!==null&&this.solarRowEls.get(this.selectedSolarId)?.classList.remove("selected"),this.selectedSolarId=e,e!==null&&this.solarRowEls.get(e)?.classList.add("selected")}else{if(this.selectedLunarId===e)return;this.selectedLunarId!==null&&this.lunarRowEls.get(this.selectedLunarId)?.classList.remove("selected"),this.selectedLunarId=e,e!==null&&this.lunarRowEls.get(e)?.classList.add("selected")}}getActiveTab(){return this.activeTab}setActiveTab(t){this.activeTab!==t&&(this.activeTab=t,this.solarTabBtn.classList.toggle("active",t==="solar"),this.lunarTabBtn.classList.toggle("active",t==="lunar"),this.solarListEl.classList.toggle("hidden",t!=="solar"),this.lunarListEl.classList.toggle("hidden",t!=="lunar"),this.callbacks.onTabChange?.(t))}renderSolarList(){const t=Date.now();this.solarListEl.innerHTML="",this.solarRowEls.clear();for(const e of this.solarSorted){const i=document.createElement("div");i.className="orrery-ecl-item",e.endUtc.getTime()<t&&i.classList.add("past"),i.setAttribute("role","button"),i.setAttribute("tabindex","0"),i.title="Click to jump to T−1m and start at 60× warp";const s=e.peakUtc.toISOString().slice(0,16).replace("T"," ")+"Z",r=e.maxTotalitySec>=60?`${Math.floor(e.maxTotalitySec/60)}m ${e.maxTotalitySec%60}s`:`${e.maxTotalitySec}s`;i.innerHTML=`
        <div class="orrery-ecl-line1">
          <span class="orrery-ecl-jump">▶</span>
          <span class="orrery-ecl-name">${Va(e.name)}</span>
        </div>
        <div class="orrery-ecl-line2">
          <span class="orrery-ecl-peak">${s}</span>
          <span class="orrery-ecl-type">${e.type}</span>
          <span class="orrery-ecl-dur">max ${r}</span>
        </div>
        <div class="orrery-ecl-line3">${Va(e.region)}</div>
      `,i.addEventListener("click",()=>this.callbacks.onJumpSolar?.(e)),i.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this.callbacks.onJumpSolar?.(e))}),this.solarListEl.appendChild(i),this.solarRowEls.set(e.id,i)}this.selectedSolarId!==null&&this.solarRowEls.get(this.selectedSolarId)?.classList.add("selected")}renderLunarList(){const t=Date.now();this.lunarListEl.innerHTML="",this.lunarRowEls.clear();for(const e of this.lunarSorted){const i=document.createElement("div");i.className="orrery-ecl-item",e.endUtc.getTime()<t&&i.classList.add("past"),i.setAttribute("role","button"),i.setAttribute("tabindex","0"),i.title="Click to jump to T−1m and start at 60× warp";const s=e.peakUtc.toISOString().slice(0,16).replace("T"," ")+"Z",r=e.type==="total"?`tot ${Math.floor(e.totalitySec/60)}m ${e.totalitySec%60}s`:`mag ${e.umbralMagnitude.toFixed(2)}`;i.innerHTML=`
        <div class="orrery-ecl-line1">
          <span class="orrery-ecl-jump">▶</span>
          <span class="orrery-ecl-name">${Va(e.name)}</span>
        </div>
        <div class="orrery-ecl-line2">
          <span class="orrery-ecl-peak">${s}</span>
          <span class="orrery-ecl-type">${e.type}</span>
          <span class="orrery-ecl-dur">${r}</span>
        </div>
        <div class="orrery-ecl-line3">${Va(e.region)}</div>
      `,i.addEventListener("click",()=>this.callbacks.onJumpLunar?.(e)),i.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this.callbacks.onJumpLunar?.(e))}),this.lunarListEl.appendChild(i),this.lunarRowEls.set(e.id,i)}this.selectedLunarId!==null&&this.lunarRowEls.get(this.selectedLunarId)?.classList.add("selected")}}function Va(n){return n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}let Tf=!1;function B1(){if(Tf)return;Tf=!0;const n=`
    /* Sits in the top-right column. The eclipse catalogue is a browse-and-pick surface
       (not the focal eclipse playback panel — that's the SunDiscPanel on the top-left
       next to the Clock). Top-right keeps it out of the way of the time + observer
       column. Tucks under the DataPanel's compact title bar when DataPanel is open. */
    #orrery-eclipse {
      position: fixed; top: 96px; right: 16px;
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.5;
      padding: 10px 14px; border-radius: 6px;
      min-width: 220px;
      max-width: 280px;
      z-index: 10;
      pointer-events: all;
      user-select: text;
    }
    #orrery-eclipse.hidden { display: none; }

    @media (max-width: 600px) {
      #orrery-eclipse {
        top: 56px; left: 8px; right: 8px;
        min-width: 0; max-width: none;
        max-height: calc(60vh - 56px);
        overflow-y: auto;
      }
    }
    .orrery-ecl-row {
      display: flex; justify-content: space-between; align-items: baseline;
      margin-bottom: 6px;
    }
    .orrery-ecl-title {
      color: #6e7a90; letter-spacing: 0.1em;
      text-transform: uppercase;
      font-size: 11px;
    }
    .orrery-ecl-close {
      color: #6e7a90;
      cursor: pointer;
      transition: color 125ms ease;
      margin-left: 1em;
    }
    .orrery-ecl-close:hover { color: #ff7a7a; }
    /* Two-tab strip just below the title — ☀ Solar / 🌑 Lunar. Active tab gets
       a brighter background + amber underline; inactive sits flat. */
    .orrery-ecl-tabs {
      display: flex; gap: 4px;
      margin-bottom: 8px;
    }
    .orrery-ecl-tab {
      flex: 1;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      color: #8a93a7;
      font-size: 11px;
      padding: 4px 6px;
      border-radius: 4px;
      cursor: pointer;
      transition: background 125ms ease, color 125ms ease, border-color 125ms ease;
      font-family: inherit;
    }
    .orrery-ecl-tab:hover {
      background: rgba(255, 255, 255, 0.07);
      color: #cfd6e4;
    }
    .orrery-ecl-tab.active {
      background: rgba(226, 180, 46, 0.14);
      border-color: rgba(226, 180, 46, 0.4);
      color: #ffd76a;
    }
    .orrery-ecl-list {
      display: flex; flex-direction: column; gap: 4px;
    }
    .orrery-ecl-list.hidden { display: none; }
    /* Rows are full-row click targets. Default state is a faint background so the row
       reads as a button; hover brightens; selected gets a strong amber left border +
       brighter background so the user can tell at a glance which eclipse they're on. */
    .orrery-ecl-item {
      padding: 6px 8px;
      border-radius: 4px;
      cursor: pointer;
      border-left: 3px solid transparent;
      background: rgba(255,255,255,0.02);
      transition: background 125ms ease, border-color 125ms ease;
      user-select: text;
    }
    .orrery-ecl-item:hover {
      background: rgba(255,255,255,0.07);
    }
    .orrery-ecl-item:focus-visible {
      outline: 1px solid rgba(226, 180, 46, 0.5);
      outline-offset: 1px;
    }
    .orrery-ecl-item.past .orrery-ecl-name,
    .orrery-ecl-item.past .orrery-ecl-line2,
    .orrery-ecl-item.past .orrery-ecl-line3 {
      opacity: 0.6;
    }
    .orrery-ecl-item.selected {
      background: rgba(226, 180, 46, 0.14);
      border-left-color: #e2b42e;
    }
    .orrery-ecl-item.selected:hover {
      background: rgba(226, 180, 46, 0.20);
    }
    .orrery-ecl-item.selected .orrery-ecl-jump   { color: #ffd76a; }
    .orrery-ecl-item.selected .orrery-ecl-name   { color: #fff; }
    .orrery-ecl-item.selected .orrery-ecl-peak   { color: #f5e7b8; }
    .orrery-ecl-item.selected .orrery-ecl-line3  { color: #cdb98a; }
    .orrery-ecl-line1 {
      display: flex; align-items: baseline; gap: 6px;
      margin-bottom: 2px;
    }
    .orrery-ecl-jump {
      color: #e2b42e;
      font-size: 13px;
      transition: color 125ms ease;
    }
    .orrery-ecl-item:hover .orrery-ecl-jump { color: #fff; }
    .orrery-ecl-name { color: #cfd6e4; font-size: 12px; line-height: 1.35; }
    .orrery-ecl-line2 {
      display: flex; gap: 8px;
      font-size: 11px;
      color: #8a93a7;
    }
    .orrery-ecl-peak { color: #cfd6e4; }
    .orrery-ecl-type { color: #6e7a90; text-transform: uppercase; letter-spacing: 0.05em; }
    .orrery-ecl-dur { color: #8a93a7; }
    .orrery-ecl-line3 {
      font-size: 11px; color: #7c869a; margin-top: 2px;
    }
    .orrery-ecl-hint {
      color: #555c6b; font-size: 11px; font-style: italic;
      margin-top: 8px; text-align: center;
    }
  `,t=document.createElement("style");t.textContent=n,document.head.appendChild(t)}const am=24*3600*1e3,H1=21*am,G1=3*am;function V1(n){const t=n.getTime(),e=[];for(const i of Zr)Af(i,t,H1)&&e.push({kind:"solar",...Cf(i)});for(const i of du)Af(i,t,G1)&&e.push({kind:"lunar",...Cf(i)});return e.length?(e.sort((i,s)=>Math.abs(i.peakUtc.getTime()-t)-Math.abs(s.peakUtc.getTime()-t)),e[0]):null}function Af(n,t,e){return t>=n.startUtc.getTime()-e&&t<=n.endUtc.getTime()+e}function Cf(n){const{id:t,name:e,startUtc:i,peakUtc:s,endUtc:r}=n;return{id:t,name:e,startUtc:i,peakUtc:s,endUtc:r}}function W1(n,t){const e=t.getTime();return e>=n.startUtc.getTime()&&e<=n.endUtc.getTime()?"happening now":e<n.startUtc.getTime()?`in ${Rf(n.startUtc.getTime()-e)}`:`${Rf(e-n.endUtc.getTime())} ago`}function Rf(n){const t=Math.round(n/6e4);if(t<1)return"moments";if(t<60)return Tc(t,"minute");const e=Math.round(t/60);return e<24?Tc(e,"hour"):Tc(Math.round(e/24),"day")}function Tc(n,t){return`${n} ${t}${n===1?"":"s"}`}class $1{root;subEl;callbacks;timer;target=null;liveFired=new Set;lastSub="";previewNow=null;constructor(t,e={}){this.callbacks=e,X1(),this.root=document.createElement("div"),this.root.id="orrery-eclipse-badge",this.root.classList.add("hidden"),this.root.title="Eclipse coming up — open the eclipse catalogue",this.root.innerHTML=`
      <span class="orrery-ecb-word">Eclipse</span>
      <span class="orrery-ecb-sub" id="orrery-ecb-sub"></span>
    `,t.appendChild(this.root),this.subEl=this.root.querySelector("#orrery-ecb-sub"),this.root.addEventListener("click",()=>{this.target&&this.callbacks.onOpen?.(this.target)}),this.timer=window.setInterval(()=>this.update(),1e3),this.update()}preview(t){this.previewNow=t,this.update()}update(t=this.previewNow??new Date){const e=V1(t);if(this.target=e,!e){this.root.classList.add("hidden");return}const i=t.getTime()>=e.startUtc.getTime()&&t.getTime()<=e.endUtc.getTime();if(i&&!this.liveFired.has(e.id)&&(this.liveFired.add(e.id),this.callbacks.onLiveWindowOpen?.(e)),this.callbacks.isSuppressed?.()){this.root.classList.add("hidden");return}const s=W1(e,t);s!==this.lastSub&&(this.lastSub=s,this.subEl.textContent=s),this.subEl.classList.toggle("live",i),this.root.classList.remove("hidden")}destroy(){window.clearInterval(this.timer),this.root.remove()}}let Pf=!1;function X1(){if(Pf)return;Pf=!0;const n=`
    /* Mirrors the brand wordmark's treatment (same family, same plate, same
       #c9d2e3) so the two read as a matched pair across the top and bottom of
       the screen — but lighter and smaller, because the wordmark is the app's
       name and this is only a notice. */
    #orrery-eclipse-badge {
      position: fixed; top: 16px; right: 16px;
      display: flex; flex-direction: column; align-items: flex-end;
      background: rgba(0, 0, 5, 0.55);
      padding: 8px 16px; border-radius: 8px;
      font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
      z-index: 10;
      pointer-events: all;
      cursor: pointer;
      user-select: none;
    }
    #orrery-eclipse-badge.hidden { display: none; }
    .orrery-ecb-word {
      font-size: 20px;
      font-weight: 300;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #c9d2e3;
      transition: color 125ms ease;
      /* Uppercase + wide tracking leaves a trailing gap on the right edge;
         pull it back so the glyphs sit flush with the sub-line. */
      margin-right: -0.18em;
    }
    #orrery-eclipse-badge:hover .orrery-ecb-word { color: #fff; }
    .orrery-ecb-sub {
      font-size: 11px;
      letter-spacing: 0.04em;
      color: #6e7a90;
      margin-top: 1px;
    }
    .orrery-ecb-sub.live { color: #e0b050; }

    @media (max-width: 600px) {
      /* The Clock becomes a full-width bar pinned to top: 0 with pointer-events
         all, so the badge cannot live at the very top on mobile — it would cover
         the date/UTC text and steal taps from the bar. Drop to 56px, the same
         below-the-clock offset DataPanel and EclipsePanel use. Those two panels
         also start at 56px, but the badge yields to them via isSuppressed. */
      #orrery-eclipse-badge {
        top: 56px; right: 8px;
        padding: 6px 12px;
      }
      .orrery-ecb-word { font-size: 15px; letter-spacing: 0.14em; margin-right: -0.14em; }
      .orrery-ecb-sub { font-size: 10px; }
    }
  `,t=document.createElement("style");t.textContent=n,document.head.appendChild(t)}const q1={temp:"current-temp-surface-level-gfs-1.0.json",relative_humidity:"current-relative_humidity-surface-level-gfs-1.0.json",air_density:"current-air_density-surface-level-gfs-1.0.json",total_precipitable_water:"current-total_precipitable_water-gfs-1.0.json",total_cloud_water:"current-total_cloud_water-gfs-1.0.json",total_cloud_cover:"current-total_cloud_cover-gfs-1.0.json",mean_sea_level_pressure:"current-mean_sea_level_pressure-gfs-1.0.json"};class j1{baseUrl;constructor(t="/data"){this.baseUrl=t}async getWindGrid(t){const e=`${this.baseUrl}/weather/current/current-wind-surface-level-gfs-1.0.json`,i=await fetch(e);if(!i.ok)throw new Error(`Wind fetch failed: ${i.status} ${i.statusText}`);const s=await i.json(),r=s.find(b=>b.header.parameterNumber===2),o=s.find(b=>b.header.parameterNumber===3);if(!r||!o)throw new Error("Wind JSON missing U or V record");const{nx:a,ny:l,lo1:c,la1:h,dx:u,dy:d,refTime:p,forecastTime:g}=r.header,v=Ac(r.data),m=Ac(o.data);if(v.length!==a*l)throw new Error(`Wind data length ${v.length} ≠ nx*ny ${a*l}`);const f=new Date(p);return f.setUTCHours(f.getUTCHours()+(g??0)),{width:a,height:l,lo1:c,la1:h,dx:u,dy:d,u:v,v:m,validTime:f}}async getScalar(t,e){const i=q1[t];if(!i)throw new Error(`Unknown scalar overlay type: ${t}`);const s=`${this.baseUrl}/weather/current/${i}`,r=await fetch(s);if(!r.ok)throw new Error(`Scalar ${t} fetch failed: ${r.status} ${r.statusText}`);const o=await r.json();if(!o.length)throw new Error(`Scalar ${t}: empty records`);const a=o[0],{nx:l,ny:c,lo1:h,la1:u,dx:d,dy:p,refTime:g,forecastTime:v}=a.header,m=Ac(a.data);if(m.length!==l*c)throw new Error(`Scalar ${t} data length ${m.length} ≠ nx*ny ${l*c}`);const f=new Date(g);return f.setUTCHours(f.getUTCHours()+(v??0)),{width:l,height:c,lo1:h,la1:u,dx:d,dy:p,data:m,validTime:f,parameterName:a.header.parameterNumberName??t,parameterUnit:a.header.parameterUnit??""}}}function Ac(n){const t=new Float32Array(n.length);for(let e=0;e<n.length;e++){const i=n[e];t[e]=i==null||!Number.isFinite(i)?0:i}return t}const Y1="https://services.swpc.noaa.gov/json/ovation_aurora_latest.json";async function Z1(){const n=await fetch(Y1);if(!n.ok)throw new Error(`aurora fetch failed: ${n.status}`);const t=await n.json(),e=t.coordinates,i=new Float32Array(e.length*3);let s=0;for(let r=0;r<e.length;r++)i[r*3+0]=e[r][0],i[r*3+1]=e[r][1],i[r*3+2]=e[r][2],e[r][2]>s&&(s=e[r][2]);return{forecastTime:new Date(t["Forecast Time"]),data:i,pointCount:e.length,maxProbability:s}}const K1="https://services.swpc.noaa.gov/json/planetary_k_index_1m.json";async function J1(){const n=await fetch(K1);if(!n.ok)throw new Error(`Kp fetch failed: ${n.status}`);const t=await n.json();if(!Array.isArray(t)||t.length===0)throw new Error("Kp: empty response");const e=t[t.length-1],i=parseFloat(e.kp_index??e.estimated_kp??e.kp);if(!Number.isFinite(i))throw new Error(`Kp: could not parse value from ${JSON.stringify(e)}`);return{time:new Date(e.time_tag),kp:i}}function Q1(n){return n<2?"very quiet":n<3?"quiet":n<4?"unsettled":n<5?"active":n<6?"minor storm (G1)":n<7?"moderate storm (G2)":n<8?"strong storm (G3)":n<9?"severe storm (G4)":"extreme storm (G5)"}function tw(n){const t=[[0,67],[1,64],[2,62],[3,60],[4,57],[5,55],[6,52],[7,49],[8,46],[9,43]],e=Math.max(0,Math.min(9,n));for(let i=0;i<t.length-1;i++){const[s,r]=t[i],[o,a]=t[i+1];if(e>=s&&e<=o){const l=(e-s)/(o-s);return Math.round(r+l*(a-r))}}return 67}const ew="https://firms.modaps.eosdis.nasa.gov/api/area/csv";async function nw(n={}){const t="6d854011ed51a0bc164b2bf60000b738",e=n.source??"VIIRS_SNPP_NRT",i=n.days??1,s=`${ew}/${t}/${e}/world/${i}`,r=await fetch(s);if(!r.ok)throw new Error(`FIRMS fetch failed: ${r.status}`);const o=await r.text();if(o.startsWith("Invalid")||o.startsWith("No fire"))throw new Error(`FIRMS returned: ${o.slice(0,200)}`);const a=o.split(/\r?\n/);if(a.length<2)return{detections:[],fetchedAt:new Date};const l=a[0].split(",").map(v=>v.trim()),c=l.indexOf("latitude"),h=l.indexOf("longitude"),u=l.indexOf("frp"),d=l.indexOf("bright_ti4"),p=l.indexOf("daynight");if(c<0||h<0)throw new Error(`FIRMS: unexpected CSV header: ${a[0].slice(0,200)}`);const g=[];for(let v=1;v<a.length;v++){const m=a[v];if(!m)continue;const f=m.split(","),b=parseFloat(f[c]),S=parseFloat(f[h]);!Number.isFinite(b)||!Number.isFinite(S)||g.push({lat:b,lon:S,frp:u>=0&&parseFloat(f[u])||0,brightTi4:d>=0&&parseFloat(f[d])||0,daynight:p>=0?f[p]:""})}return{detections:g,fetchedAt:new Date}}const iw=6371;function sw(n,t,e=20){const i=new Set;if(n.length===0)return i;for(const s of t){const r=Math.cos(s.lat*Math.PI/180);for(const o of n){const a=(o.lat-s.lat)*Math.PI/180,l=(o.lon-s.lon)*Math.PI/180*r;if(iw*Math.sqrt(a*a+l*l)<=e){i.add(s.id);break}}}return i}async function rw(){const n=await fetch("/data/earthquakes/current.json");if(!n.ok)throw new Error(`Earthquakes fetch failed: ${n.status}`);return{events:((await n.json()).events??[]).filter(i=>Number.isFinite(i.lat)&&Number.isFinite(i.lon)).map(i=>({lat:i.lat,lon:i.lon,mag:typeof i.mag=="number"?i.mag:0,depthKm:typeof i.depthKm=="number"?i.depthKm:0,timeMs:i.timeMs,place:i.place??""})),fetchedAt:new Date}}async function ow(){let n;for(const[t,e]of[["/data/satellites/current.json",!1],["/data/satellites/fallback.json",!0]])try{const i=await fetch(t);if(!i.ok)throw new Error(`${t}: HTTP ${i.status}`);const s=await i.json(),r=new Map;for(const o of s.sats??[]){const a=Number(o?.NORAD_CAT_ID);Number.isFinite(a)&&typeof o.EPOCH=="string"&&r.set(a,o)}if(r.size===0)throw new Error(`${t}: no element sets`);return{byNorad:r,generated:s.generated?new Date(s.generated):null,fallback:e}}catch(i){n??=i}throw n}async function aw(){const n=await fetch("/data/satellites/crew.json");if(!n.ok)throw new Error(`crew.json: HTTP ${n.status}`);const t=await n.json();return{updated:t.updated??null,stations:t.stations??{}}}const Gi=Math.PI,Re=Gi*2,wo=Gi/180,lw=1440,cw=398600.8,Pn=6378.135,Ii=60/Math.sqrt(Pn*Pn*Pn/cw),Cc=Pn*Ii/60,hw=1/Ii,Vs=.001082616,uw=-253881e-11,dw=-165597e-11,Ws=uw/Vs,Go=2/3,Rc=1440/(2*Gi);function fw(n,t){const e=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(t);let s=1,r=0;for(;i>r+e[s-1]&&s<12;)r+=e[s-1],s+=1;const o=s,a=i-r;let l=(t-i)*24;const c=Math.floor(l);l=(l-c)*60;const h=Math.floor(l),u=(l-h)*60;return{mon:o,day:a,hr:c,minute:h,sec:u}}function Df(n,t,e,i,s,r,o=0){return 367*n-Math.floor(7*(n+Math.floor((t+9)/12))*.25)+Math.floor(275*t/9)+e+17210135e-1+((o/6e4+r/60+s)/60+i)/24}function fu(n,t,e,i,s,r,o=0){if(n instanceof Date){const a=n;return Df(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}return Df(n,t,e,i,s,r,o)}function lm(n,t){const{e3:e,ee2:i,peo:s,pgho:r,pho:o,pinco:a,plo:l,se2:c,se3:h,sgh2:u,sgh3:d,sgh4:p,sh2:g,sh3:v,si2:m,si3:f,sl2:b,sl3:S,sl4:x,t:D,xgh2:A,xgh3:R,xgh4:L,xh2:E,xh3:M,xi2:P,xi3:O,xl2:B,xl3:W,xl4:Y,zmol:H,zmos:K}=n,{init:z,opsmode:J}=t;let{ep:st,inclp:lt,nodep:_t,argpp:Rt,mp:q}=t,X,et,it,mt,bt,xt,qt,Ct,Ht,I,jt,Dt,St,dt,Lt,rt,T,y,k,j,Q;const Z=119459e-10,gt=.01675,ot=.00015835218,ht=.0549;Q=K+Z*D,z==="y"&&(Q=K),j=Q+2*gt*Math.sin(Q),T=Math.sin(j),I=.5*T*T-.25,jt=-.5*T*Math.cos(j);const kt=c*I+h*jt,nt=m*I+f*jt,_=b*I+S*jt+x*T,Mt=u*I+d*jt+p*T,wt=g*I+v*jt;Q=H+ot*D,z==="y"&&(Q=H),j=Q+2*ht*Math.sin(Q),T=Math.sin(j),I=.5*T*T-.25,jt=-.5*T*Math.cos(j);const vt=i*I+e*jt,zt=P*I+O*jt,Ut=B*I+W*jt+Y*T,Vt=A*I+R*jt+L*T,U=E*I+M*jt;return Dt=kt+vt,Lt=nt+zt,rt=_+Ut,St=Mt+Vt,dt=wt+U,z==="n"&&(Dt-=s,Lt-=a,rt-=l,St-=r,dt-=o,lt+=Lt,st+=Dt,mt=Math.sin(lt),it=Math.cos(lt),lt>=.2?(dt/=mt,St-=it*dt,Rt+=St,_t+=dt,q+=rt):(xt=Math.sin(_t),bt=Math.cos(_t),X=mt*xt,et=mt*bt,qt=dt*bt+Lt*it*xt,Ct=-dt*xt+Lt*it*bt,X+=qt,et+=Ct,_t%=Re,_t<0&&J==="a"&&(_t+=Re),y=q+Rt+it*_t,Ht=rt+St-Lt*_t*mt,y+=Ht,k=_t,_t=Math.atan2(X,et),_t<0&&J==="a"&&(_t+=Re),Math.abs(k-_t)>Gi&&(_t<k?_t+=Re:_t-=Re),q+=rt,Rt=y-q-it*_t)),{ep:st,inclp:lt,nodep:_t,argpp:Rt,mp:q}}function pw(n){const{epoch:t,ep:e,argpp:i,tc:s,inclp:r,nodep:o,np:a}=n;let l,c,h,u,d,p,g,v,m,f,b,S,x,D,A,R,L,E,M,P,O,B,W,Y,H,K,z,J,st,lt,_t,Rt,q,X,et,it,mt,bt,xt,qt,Ct,Ht,I,jt,Dt,St,dt,Lt,rt,T,y,k,j,Q,Z,gt,ot,ht,kt,nt,_,Mt,wt;const vt=.01675,zt=.0549,Ut=29864797e-13,Vt=47968065e-14,U=.39785416,ut=.91744867,$=.1945905,tt=-.98088458,ft=a,ct=e,It=Math.sin(o),le=Math.cos(o),he=Math.sin(i),Yt=Math.cos(i),ye=Math.sin(r),Ft=Math.cos(r),De=ct*ct,Ne=1-De,Xe=Math.sqrt(Ne),se=0,Wi=0,_i=0,ei=0,$i=0,gn=t+18261.5+s/1440,vn=(4.523602-.00092422029*gn)%Re,Ce=Math.sin(vn),_n=Math.cos(vn),Xi=.91375164-.03568096*_n,qi=Math.sqrt(1-Xi*Xi),w=.089683511*Ce/qi,N=Math.sqrt(1-w*w),G=5.8351514+.001944368*gn;let V=.39785416*Ce/qi;const F=N*_n+.91744867*w*Ce;V=Math.atan2(V,F),V+=G-vn;const at=Math.cos(V),yt=Math.sin(V);P=$,O=tt,Y=ut,H=U,B=le,W=It,b=Ut;const Tt=1/ft;let Et=0;for(;Et<2;)Et+=1,l=P*B+O*Y*W,h=-O*B+P*Y*W,g=-P*W+O*Y*B,v=O*H,m=O*W+P*Y*B,f=P*H,c=Ft*g+ye*v,u=Ft*m+ye*f,d=-ye*g+Ft*v,p=-ye*m+Ft*f,S=l*Yt+c*he,x=h*Yt+u*he,D=-l*he+c*Yt,A=-h*he+u*Yt,R=d*he,L=p*he,E=d*Yt,M=p*Yt,_=12*S*S-3*D*D,Mt=24*S*x-6*D*A,wt=12*x*x-3*A*A,k=3*(l*l+c*c)+_*De,j=6*(l*h+c*u)+Mt*De,Q=3*(h*h+u*u)+wt*De,Z=-6*l*d+De*(-24*S*E-6*D*R),gt=-6*(l*p+h*d)+De*(-24*(x*E+S*M)+-6*(D*L+A*R)),ot=-6*h*p+De*(-24*x*M-6*A*L),ht=6*c*d+De*(24*S*R-6*D*E),kt=6*(u*d+c*p)+De*(24*(x*R+S*L)-6*(A*E+D*M)),nt=6*u*p+De*(24*x*L-6*A*M),k=k+k+Ne*_,j=j+j+Ne*Mt,Q=Q+Q+Ne*wt,dt=b*Tt,St=-.5*dt/Xe,Lt=dt*Xe,Dt=-15*ct*Lt,rt=S*D+x*A,T=x*D+S*A,y=x*A-S*D,Et===1&&(K=Dt,z=St,J=dt,st=Lt,lt=rt,_t=T,Rt=y,q=k,X=j,et=Q,it=Z,mt=gt,bt=ot,xt=ht,qt=kt,Ct=nt,Ht=_,I=Mt,jt=wt,P=at,O=yt,Y=Xi,H=qi,B=N*le+w*It,W=It*N-le*w,b=Vt);const Bt=(4.7199672+(.2299715*gn-G))%Re,$t=(6.2565837+.017201977*gn)%Re,At=2*K*_t,te=2*K*Rt,re=2*z*mt,fe=2*z*(bt-it),Ge=-2*J*X,oe=-2*J*(et-q),Pt=-2*J*(-21-9*De)*vt,nn=2*st*I,ae=2*st*(jt-Ht),an=-18*st*vt,Un=-2*z*qt,Ve=-2*z*(Ct-xt),Bn=2*Dt*T,pe=2*Dt*y,yn=2*St*gt,ws=2*St*(ot-Z),xn=-2*dt*j,ni=-2*dt*(Q-k),ii=-2*dt*(-21-9*De)*zt,ea=2*Lt*Mt,Bm=2*Lt*(wt-_),Hm=-18*Lt*zt,Gm=-2*St*kt,Vm=-2*St*(nt-ht);return{snodm:It,cnodm:le,sinim:ye,cosim:Ft,sinomm:he,cosomm:Yt,day:gn,e3:pe,ee2:Bn,em:ct,emsq:De,gam:G,peo:se,pgho:ei,pho:$i,pinco:Wi,plo:_i,rtemsq:Xe,se2:At,se3:te,sgh2:nn,sgh3:ae,sgh4:an,sh2:Un,sh3:Ve,si2:re,si3:fe,sl2:Ge,sl3:oe,sl4:Pt,s1:Dt,s2:St,s3:dt,s4:Lt,s5:rt,s6:T,s7:y,ss1:K,ss2:z,ss3:J,ss4:st,ss5:lt,ss6:_t,ss7:Rt,sz1:q,sz2:X,sz3:et,sz11:it,sz12:mt,sz13:bt,sz21:xt,sz22:qt,sz23:Ct,sz31:Ht,sz32:I,sz33:jt,xgh2:ea,xgh3:Bm,xgh4:Hm,xh2:Gm,xh3:Vm,xi2:yn,xi3:ws,xl2:xn,xl3:ni,xl4:ii,nm:ft,z1:k,z2:j,z3:Q,z11:Z,z12:gt,z13:ot,z21:ht,z22:kt,z23:nt,z31:_,z32:Mt,z33:wt,zmol:Bt,zmos:$t}}function mw(n){const{cosim:t,argpo:e,s1:i,s2:s,s3:r,s4:o,s5:a,sinim:l,ss1:c,ss2:h,ss3:u,ss4:d,ss5:p,sz1:g,sz3:v,sz11:m,sz13:f,sz21:b,sz23:S,sz31:x,sz33:D,t:A,tc:R,gsto:L,mo:E,mdot:M,no:P,nodeo:O,nodedot:B,xpidot:W,z1:Y,z3:H,z11:K,z13:z,z21:J,z23:st,z31:lt,z33:_t,ecco:Rt,eccsq:q}=n;let{emsq:X,em:et,argpm:it,inclm:mt,mm:bt,nm:xt,nodem:qt,irez:Ct,atime:Ht,d2201:I,d2211:jt,d3210:Dt,d3222:St,d4410:dt,d4422:Lt,d5220:rt,d5232:T,d5421:y,d5433:k,dedt:j,didt:Q,dmdt:Z,dnodt:gt,domdt:ot,del1:ht,del2:kt,del3:nt,xfact:_,xlamo:Mt,xli:wt,xni:vt}=n,zt,Ut,Vt,U,ut,$,tt,ft,ct,It,le,he,Yt,ye,Ft,De,Ne,Xe,se,Wi,_i,ei,$i,gn,vn,Ce,_n,Xi,qi,w,N,G;const V=17891679e-13,F=21460748e-13,at=22123015e-14,yt=17891679e-13,Tt=73636953e-16,Et=21765803e-16,Bt=.0043752690880113,$t=37393792e-14,At=11428639e-14,te=.00015835218,re=119459e-10;Ct=0,xt<.0052359877&&xt>.0034906585&&(Ct=1),xt>=.00826&&xt<=.00924&&et>=.5&&(Ct=2);const fe=c*re*p,Ge=h*re*(m+f),oe=-re*u*(g+v-14-6*X),Pt=d*re*(x+D-6);let nn=-re*h*(b+S);(mt<.052359877||mt>Gi-.052359877)&&(nn=0),l!==0&&(nn/=l);const ae=Pt-t*nn;j=fe+i*te*a,Q=Ge+s*te*(K+z),Z=oe-te*r*(Y+H-14-6*X);const an=o*te*(lt+_t-6);let Un=-te*s*(J+st);(mt<.052359877||mt>Gi-.052359877)&&(Un=0),ot=ae+an,gt=nn,l!==0&&(ot-=t/l*Un,gt+=Un/l);const Ve=0,Bn=(L+R*Bt)%Re;if(et+=j*A,mt+=Q*A,it+=ot*A,qt+=gt*A,bt+=Z*A,Ct!==0){if(w=(xt/Ii)**Go,Ct===2){N=t*t;const pe=et;et=Rt;const yn=X;X=q,G=et*X,ye=-.306-(et-.64)*.44,et<=.65?(Ft=3.616-13.247*et+16.29*X,Ne=-19.302+117.39*et-228.419*X+156.591*G,Xe=-18.9068+109.7927*et-214.6334*X+146.5816*G,se=-41.122+242.694*et-471.094*X+313.953*G,Wi=-146.407+841.88*et-1629.014*X+1083.435*G,_i=-532.114+3017.977*et-5740.032*X+3708.276*G):(Ft=-72.099+331.819*et-508.738*X+266.724*G,Ne=-346.844+1582.851*et-2415.925*X+1246.113*G,Xe=-342.585+1554.908*et-2366.899*X+1215.972*G,se=-1052.797+4758.686*et-7193.992*X+3651.957*G,Wi=-3581.69+16178.11*et-24462.77*X+12422.52*G,et>.715?_i=-5149.66+29936.92*et-54087.36*X+31324.56*G:_i=1464.74-4664.75*et+3763.64*X),et<.7?(gn=-919.2277+4988.61*et-9064.77*X+5542.21*G,ei=-822.71072+4568.6173*et-8491.4146*X+5337.524*G,$i=-853.666+4690.25*et-8624.77*X+5341.4*G):(gn=-37995.78+161616.52*et-229838.2*X+109377.94*G,ei=-51752.104+218913.95*et-309468.16*X+146349.42*G,$i=-40023.88+170470.89*et-242699.48*X+115605.82*G),vn=l*l,zt=.75*(1+2*t+N),Ut=1.5*vn,U=1.875*l*(1-2*t-3*N),ut=-1.875*l*(1+2*t-3*N),tt=35*vn*zt,ft=39.375*vn*vn,ct=9.84375*l*(vn*(1-2*t-5*N)+.33333333*(-2+4*t+6*N)),It=l*(4.92187512*vn*(-2-4*t+10*N)+6.56250012*(1+2*t-3*N)),le=29.53125*l*(2-8*t+N*(-12+8*t+10*N)),he=29.53125*l*(-2-8*t+N*(12+8*t-10*N)),Xi=xt*xt,qi=w*w,_n=3*Xi*qi,Ce=_n*yt,I=Ce*zt*ye,jt=Ce*Ut*Ft,_n*=w,Ce=_n*$t,Dt=Ce*U*Ne,St=Ce*ut*Xe,_n*=w,Ce=2*_n*Tt,dt=Ce*tt*se,Lt=Ce*ft*Wi,_n*=w,Ce=_n*At,rt=Ce*ct*_i,T=Ce*It*$i,Ce=2*_n*Et,y=Ce*le*ei,k=Ce*he*gn,Mt=(E+O+O-(Bn+Bn))%Re,_=M+Z+2*(B+gt-Bt)-P,et=pe,X=yn}Ct===1&&(Yt=1+X*(-2.5+.8125*X),Ne=1+2*X,De=1+X*(-6+6.60937*X),zt=.75*(1+t)*(1+t),Vt=.9375*l*l*(1+3*t)-.75*(1+t),$=1+t,$=1.875*$*$*$,ht=3*xt*xt*w*w,kt=2*ht*zt*Yt*V,nt=3*ht*$*De*at*w,ht=ht*Vt*Ne*F*w,Mt=(E+O+e-Bn)%Re,_=M+W+Z+ot+gt-(P+Bt)),wt=Mt,vt=P,Ht=0,xt=P+Ve}return{em:et,argpm:it,inclm:mt,mm:bt,nm:xt,nodem:qt,irez:Ct,atime:Ht,d2201:I,d2211:jt,d3210:Dt,d3222:St,d4410:dt,d4422:Lt,d5220:rt,d5232:T,d5421:y,d5433:k,dedt:j,didt:Q,dmdt:Z,dndt:Ve,dnodt:gt,domdt:ot,del1:ht,del2:kt,del3:nt,xfact:_,xlamo:Mt,xli:wt,xni:vt}}function Lf(n){const t=(n-2451545)/36525;let e=-62e-7*t*t*t+.093104*t*t+(876600*3600+8640184812866e-6)*t+67310.54841;return e=e*wo/240%Re,e<0&&(e+=Re),e}function gw(n,t,e,i,s,r,o){return n instanceof Date?Lf(fu(n)):Lf(n)}function vw(n){const{ecco:t,epoch:e,inclo:i,opsmode:s}=n;let{no:r}=n;const o=t*t,a=1-o,l=Math.sqrt(a),c=Math.cos(i),h=c*c,u=(Ii/r)**Go,d=.75*Vs*(3*h-1)/(l*a);let p=d/(u*u);const g=u*(1-p*p-p*(1/3+134*p*p/81));p=d/(g*g),r/=1+p;const v=(Ii/r)**Go,m=Math.sin(i),f=v*a,b=1-5*h,S=-b-h-h,x=1/v,D=f*f,A=v*(1-t),R="n";let L;if(s==="a"){const E=e-7305,M=Math.floor(E+1e-8),P=E-M,O=.017202791694070362,B=1.7321343856509375,W=5075514194322695e-30,Y=O+Re;L=(B+O*M+Y*P+E*E*W)%Re,L<0&&(L+=Re)}else L=gw(e+24332815e-1);return{no:r,method:R,ainv:x,ao:v,con41:S,con42:b,cosio:c,cosio2:h,eccsq:o,omeosq:a,posq:D,rp:A,rteosq:l,sinio:m,gsto:L}}function _w(n){const{irez:t,d2201:e,d2211:i,d3210:s,d3222:r,d4410:o,d4422:a,d5220:l,d5232:c,d5421:h,d5433:u,dedt:d,del1:p,del2:g,del3:v,didt:m,dmdt:f,dnodt:b,domdt:S,argpo:x,argpdot:D,t:A,tc:R,gsto:L,xfact:E,xlamo:M,no:P}=n;let{atime:O,em:B,argpm:W,inclm:Y,xli:H,mm:K,xni:z,nodem:J,nm:st}=n;const lt=.13130908,_t=2.8843198,Rt=.37448087,q=5.7686396,X=.95240898,et=1.8014998,it=1.050833,mt=4.4108898,bt=.0043752690880113,xt=720,qt=-720,Ct=259200;let Ht,I,jt,Dt,St,dt,Lt,rt,T=0,y=0;const k=(L+R*bt)%Re;if(B+=d*A,Y+=m*A,W+=S*A,J+=b*A,K+=f*A,t!==0){(O===0||A*O<=0||Math.abs(A)<Math.abs(O))&&(O=0,z=P,H=M),A>0?Ht=xt:Ht=qt;let j=381;for(;j===381;)t!==2?(Lt=p*Math.sin(H-lt)+g*Math.sin(2*(H-_t))+v*Math.sin(3*(H-Rt)),St=z+E,dt=p*Math.cos(H-lt)+2*g*Math.cos(2*(H-_t))+3*v*Math.cos(3*(H-Rt)),dt*=St):(rt=x+D*O,jt=rt+rt,I=H+H,Lt=e*Math.sin(jt+H-q)+i*Math.sin(H-q)+s*Math.sin(rt+H-X)+r*Math.sin(-rt+H-X)+o*Math.sin(jt+I-et)+a*Math.sin(I-et)+l*Math.sin(rt+H-it)+c*Math.sin(-rt+H-it)+h*Math.sin(rt+I-mt)+u*Math.sin(-rt+I-mt),St=z+E,dt=e*Math.cos(jt+H-q)+i*Math.cos(H-q)+s*Math.cos(rt+H-X)+r*Math.cos(-rt+H-X)+l*Math.cos(rt+H-it)+c*Math.cos(-rt+H-it)+2*(o*Math.cos(jt+I-et)+a*Math.cos(I-et)+h*Math.cos(rt+I-mt)+u*Math.cos(-rt+I-mt)),dt*=St),Math.abs(A-O)>=xt?j=381:(y=A-O,j=0),j===381&&(H+=St*Ht+Lt*Ct,z+=Lt*Ht+dt*Ct,O+=Ht);st=z+Lt*y+dt*y*y*.5,Dt=H+St*y+Lt*y*y*.5,t!==1?(K=Dt-2*J+2*k,T=st-P):(K=Dt-J-W+k,T=st-P),st=P+T}return{atime:O,em:B,argpm:W,inclm:Y,xli:H,mm:K,xni:z,nodem:J,dndt:T,nm:st}}var Ti;(function(n){n[n.None=0]="None",n[n.MeanEccentricityOutOfRange=1]="MeanEccentricityOutOfRange",n[n.MeanMotionBelowZero=2]="MeanMotionBelowZero",n[n.PerturbedEccentricityOutOfRange=3]="PerturbedEccentricityOutOfRange",n[n.SemiLatusRectumBelowZero=4]="SemiLatusRectumBelowZero",n[n.Decayed=6]="Decayed"})(Ti||(Ti={}));function cm(n,t){let e,i,s,r,o,a,l,c,h,u,d,p,g,v,m,f,b,S,x,D,A,R,L,E,M,P,O;n.t=t,n.error=Ti.None;const W=n.mo+n.mdot*n.t,Y=n.argpo+n.argpdot*n.t,H=n.nodeo+n.nodedot*n.t;h=Y,A=W;const K=n.t*n.t;if(L=H+n.nodecf*K,b=1-n.cc1*n.t,S=n.bstar*n.cc4*n.t,x=n.t2cof*K,n.isimp!==1){l=n.omgcof*n.t;const ct=1+n.eta*Math.cos(W);a=n.xmcof*(ct*ct*ct-n.delmo),f=l+a,A=W+f,h=Y-f,p=K*n.t,g=p*n.t,b=b-n.d2*K-n.d3*p-n.d4*g,S+=n.bstar*n.cc5*(Math.sin(A)-n.sinmao),x=x+n.t3cof*p+g*(n.t4cof+n.t*n.t5cof)}n.tempa=b,R=n.no;let z=n.ecco;if(D=n.inclo,n.method==="d"){v=n.t;const ct={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:v,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:z,argpm:h,inclm:D,xli:n.xli,mm:A,xni:n.xni,nodem:L,nm:R};({em:z,argpm:h,inclm:D,mm:A,nodem:L,nm:R}=_w(ct))}if(R<=0)return n.error=Ti.MeanMotionBelowZero,null;const J=(Ii/R)**Go*b*b;if(R=Ii/J**1.5,z-=S,z>=1||z<-.001)return n.error=Ti.MeanEccentricityOutOfRange,null;z<1e-6&&(z=1e-6),A+=n.no*x,M=A+h+L,L%=Re,h%=Re,M%=Re,A=(M-h-L)%Re;const st={am:J,em:z,im:D,Om:L,om:h,mm:A,nm:R},lt=Math.sin(D),_t=Math.cos(D);let Rt=z;if(E=D,u=h,O=L,P=A,r=lt,s=_t,n.method==="d"){const ct={inclo:n.inclo,init:"n",ep:Rt,inclp:E,nodep:O,argpp:u,mp:P,opsmode:n.operationmode},It=lm(n,ct);if({ep:Rt,nodep:O,argpp:u,mp:P}=It,E=It.inclp,E<0&&(E=-E,O+=Gi,u-=Gi),Rt<0||Rt>1)return n.error=Ti.PerturbedEccentricityOutOfRange,null}n.method==="d"&&(r=Math.sin(E),s=Math.cos(E),n.aycof=-.5*Ws*r,Math.abs(s+1)>15e-13?n.xlcof=-.25*Ws*r*(3+5*s)/(1+s):n.xlcof=-.25*Ws*r*(3+5*s)/15e-13);const q=Rt*Math.cos(u);f=1/(J*(1-Rt*Rt));const X=Rt*Math.sin(u)+f*n.aycof,it=(P+u+O+f*n.xlcof*q-O)%Re;c=it,m=9999.9;let mt=1;for(;Math.abs(m)>=1e-12&&mt<=10;)i=Math.sin(c),e=Math.cos(c),m=1-e*q-i*X,m=(it-X*e+q*i-c)/m,Math.abs(m)>=.95&&(m>0?m=.95:m=-.95),c+=m,mt+=1;const bt=q*e+X*i,xt=q*i-X*e,qt=q*q+X*X,Ct=J*(1-qt);if(Ct<0)return n.error=Ti.SemiLatusRectumBelowZero,null;const Ht=J*(1-bt),I=Math.sqrt(J)*xt/Ht,jt=Math.sqrt(Ct)/Ht,Dt=Math.sqrt(1-qt);f=xt/(1+Dt);const St=J/Ht*(i-X-q*f),dt=J/Ht*(e-q+X*f);d=Math.atan2(St,dt);const Lt=(dt+dt)*St,rt=1-2*St*St;f=1/Ct;const T=.5*Vs*f,y=T*f;n.method==="d"&&(o=s*s,n.con41=3*o-1,n.x1mth2=1-o,n.x7thm1=7*o-1);const k=Ht*(1-1.5*y*Dt*n.con41)+.5*T*n.x1mth2*rt;if(k<1)return n.error=Ti.Decayed,null;d-=.25*y*n.x7thm1*Lt;const j=O+1.5*y*s*Lt,Q=E+1.5*y*s*r*rt,Z=I-R*T*n.x1mth2*Lt/Ii,gt=jt+R*T*(n.x1mth2*rt+1.5*n.con41)/Ii,ot=Math.sin(d),ht=Math.cos(d),kt=Math.sin(j),nt=Math.cos(j),_=Math.sin(Q),Mt=Math.cos(Q),wt=-kt*Mt,vt=nt*Mt,zt=wt*ot+nt*ht,Ut=vt*ot+kt*ht,Vt=_*ot,U=wt*ht-nt*ot,ut=vt*ht-kt*ot,$=_*ht,tt={x:k*zt*Pn,y:k*Ut*Pn,z:k*Vt*Pn},ft={x:(Z*zt+gt*U)*Cc,y:(Z*Ut+gt*ut)*Cc,z:(Z*Vt+gt*$)*Cc};return{position:tt,velocity:ft,meanElements:st}}function yw(n,t){const{opsmode:e,epoch:i,xbstar:s,xecco:r,xargpo:o,xinclo:a,xmo:l,xno:c,xnodeo:h}=t;let u,d,p,g,v,m,f,b,S,x,D,A,R,L,E,M,P,O,B,W,Y,H,K,z,J,st,lt,_t,Rt,q,X,et,it,mt,bt,xt,qt,Ct,Ht,I,jt,Dt,St,dt,Lt,rt,T,y,k,j,Q,Z,gt,ot,ht,kt;const nt=15e-13,_=n;_.isimp=0,_.method="n",_.aycof=0,_.con41=0,_.cc1=0,_.cc4=0,_.cc5=0,_.d2=0,_.d3=0,_.d4=0,_.delmo=0,_.eta=0,_.argpdot=0,_.omgcof=0,_.sinmao=0,_.t=0,_.t2cof=0,_.t3cof=0,_.t4cof=0,_.t5cof=0,_.x1mth2=0,_.x7thm1=0,_.mdot=0,_.nodedot=0,_.xlcof=0,_.xmcof=0,_.nodecf=0,_.irez=0,_.d2201=0,_.d2211=0,_.d3210=0,_.d3222=0,_.d4410=0,_.d4422=0,_.d5220=0,_.d5232=0,_.d5421=0,_.d5433=0,_.dedt=0,_.del1=0,_.del2=0,_.del3=0,_.didt=0,_.dmdt=0,_.dnodt=0,_.domdt=0,_.e3=0,_.ee2=0,_.peo=0,_.pgho=0,_.pho=0,_.pinco=0,_.plo=0,_.se2=0,_.se3=0,_.sgh2=0,_.sgh3=0,_.sgh4=0,_.sh2=0,_.sh3=0,_.si2=0,_.si3=0,_.sl2=0,_.sl3=0,_.sl4=0,_.gsto=0,_.xfact=0,_.xgh2=0,_.xgh3=0,_.xgh4=0,_.xh2=0,_.xh3=0,_.xi2=0,_.xi3=0,_.xl2=0,_.xl3=0,_.xl4=0,_.xlamo=0,_.zmol=0,_.zmos=0,_.atime=0,_.xli=0,_.xni=0,_.bstar=s,_.ecco=r,_.argpo=o,_.inclo=a,_.mo=l,_.no=c,_.nokozai=c,_.nodeo=h,_.operationmode=e;const Mt=78/Pn+1,wt=42/Pn,vt=wt*wt*wt*wt;_.init="y",_.t=0;const zt={ecco:_.ecco,epoch:i,inclo:_.inclo,no:_.no,method:_.method,opsmode:_.operationmode},Ut=vw(zt),{ao:Vt,con42:U,cosio:ut,cosio2:$,eccsq:tt,omeosq:ft,posq:ct,rp:It,rteosq:le,sinio:he}=Ut;if(_.no=Ut.no,_.con41=Ut.con41,_.gsto=Ut.gsto,_.a=(_.no*hw)**(-2/3),_.alta=_.a*(1+_.ecco)-1,_.altp=_.a*(1-_.ecco)-1,_.error=0,ft>=0||_.no>=0){if(_.isimp=0,It<220/Pn+1&&(_.isimp=1),lt=Mt,Y=vt,O=(It-1)*Pn,O<156){lt=O-78,O<98&&(lt=20);const ye=(120-lt)/Pn;Y=ye*ye*ye*ye,lt=lt/Pn+1}B=1/ct,rt=1/(Vt-lt),_.eta=Vt*_.ecco*rt,A=_.eta*_.eta,D=_.ecco*_.eta,W=Math.abs(1-A),m=Y*rt**4,f=m/W**3.5,g=f*_.no*(Vt*(1+1.5*A+D*(4+A))+.375*Vs*rt/W*_.con41*(8+3*A*(8+A))),_.cc1=_.bstar*g,v=0,_.ecco>1e-4&&(v=-2*m*rt*Ws*_.no*he/_.ecco),_.x1mth2=1-$,_.cc4=2*_.no*f*Vt*ft*(_.eta*(2+.5*A)+_.ecco*(.5+2*A)-Vs*rt/(Vt*W)*(-3*_.con41*(1-2*D+A*(1.5-.5*D))+.75*_.x1mth2*(2*A-D*(1+A))*Math.cos(2*_.argpo))),_.cc5=2*f*Vt*ft*(1+2.75*(A+D)+D*A),b=$*$,St=1.5*Vs*B*_.no,dt=.5*St*Vs*B,Lt=-.46875*dw*B*B*_.no,_.mdot=_.no+.5*St*le*_.con41+.0625*dt*le*(13-78*$+137*b),_.argpdot=-.5*St*U+.0625*dt*(7-114*$+395*b)+Lt*(3-36*$+49*b),y=-St*ut,_.nodedot=y+(.5*dt*(4-19*$)+2*Lt*(3-7*$))*ut,T=_.argpdot+_.nodedot,_.omgcof=_.bstar*v*Math.cos(_.argpo),_.xmcof=0,_.ecco>1e-4&&(_.xmcof=-Go*m*_.bstar/D),_.nodecf=3.5*ft*y*_.cc1,_.t2cof=1.5*_.cc1,Math.abs(ut+1)>15e-13?_.xlcof=-.25*Ws*he*(3+5*ut)/(1+ut):_.xlcof=-.25*Ws*he*(3+5*ut)/nt,_.aycof=-.5*Ws*he;const Yt=1+_.eta*Math.cos(_.mo);if(_.delmo=Yt*Yt*Yt,_.sinmao=Math.sin(_.mo),_.x7thm1=7*$-1,2*Gi/_.no>=225){_.method="d",_.isimp=1,jt=0,E=_.inclo;const ye={epoch:i,ep:_.ecco,argpp:_.argpo,tc:jt,inclp:_.inclo,nodep:_.nodeo,np:_.no,e3:_.e3,ee2:_.ee2,peo:_.peo,pgho:_.pgho,pho:_.pho,pinco:_.pinco,plo:_.plo,se2:_.se2,se3:_.se3,sgh2:_.sgh2,sgh3:_.sgh3,sgh4:_.sgh4,sh2:_.sh2,sh3:_.sh3,si2:_.si2,si3:_.si3,sl2:_.sl2,sl3:_.sl3,sl4:_.sl4,xgh2:_.xgh2,xgh3:_.xgh3,xgh4:_.xgh4,xh2:_.xh2,xh3:_.xh3,xi2:_.xi2,xi3:_.xi3,xl2:_.xl2,xl3:_.xl3,xl4:_.xl4,zmol:_.zmol,zmos:_.zmos},Ft=pw(ye);_.e3=Ft.e3,_.ee2=Ft.ee2,_.peo=Ft.peo,_.pgho=Ft.pgho,_.pho=Ft.pho,_.pinco=Ft.pinco,_.plo=Ft.plo,_.se2=Ft.se2,_.se3=Ft.se3,_.sgh2=Ft.sgh2,_.sgh3=Ft.sgh3,_.sgh4=Ft.sgh4,_.sh2=Ft.sh2,_.sh3=Ft.sh3,_.si2=Ft.si2,_.si3=Ft.si3,_.sl2=Ft.sl2,_.sl3=Ft.sl3,_.sl4=Ft.sl4,{sinim:d,cosim:u,em:S,emsq:x,s1:H,s2:K,s3:z,s4:J,s5:st,ss1:_t,ss2:Rt,ss3:q,ss4:X,ss5:et,sz1:it,sz3:mt,sz11:bt,sz13:xt,sz21:qt,sz23:Ct,sz31:Ht,sz33:I}=Ft,_.xgh2=Ft.xgh2,_.xgh3=Ft.xgh3,_.xgh4=Ft.xgh4,_.xh2=Ft.xh2,_.xh3=Ft.xh3,_.xi2=Ft.xi2,_.xi3=Ft.xi3,_.xl2=Ft.xl2,_.xl3=Ft.xl3,_.xl4=Ft.xl4,_.zmol=Ft.zmol,_.zmos=Ft.zmos,{nm:P,z1:k,z3:j,z11:Q,z13:Z,z21:gt,z23:ot,z31:ht,z33:kt}=Ft;const De={init:_.init,ep:_.ecco,inclp:_.inclo,nodep:_.nodeo,argpp:_.argpo,mp:_.mo,opsmode:_.operationmode},Ne=lm(_,De);_.ecco=Ne.ep,_.inclo=Ne.inclp,_.nodeo=Ne.nodep,_.argpo=Ne.argpp,_.mo=Ne.mp,R=0,L=0,M=0;const Xe={cosim:u,emsq:x,argpo:_.argpo,s1:H,s2:K,s3:z,s4:J,s5:st,sinim:d,ss1:_t,ss2:Rt,ss3:q,ss4:X,ss5:et,sz1:it,sz3:mt,sz11:bt,sz13:xt,sz21:qt,sz23:Ct,sz31:Ht,sz33:I,t:_.t,tc:jt,gsto:_.gsto,mo:_.mo,mdot:_.mdot,no:_.no,nodeo:_.nodeo,nodedot:_.nodedot,xpidot:T,z1:k,z3:j,z11:Q,z13:Z,z21:gt,z23:ot,z31:ht,z33:kt,ecco:_.ecco,eccsq:tt,em:S,argpm:R,inclm:E,mm:M,nm:P,nodem:L,irez:_.irez,atime:_.atime,d2201:_.d2201,d2211:_.d2211,d3210:_.d3210,d3222:_.d3222,d4410:_.d4410,d4422:_.d4422,d5220:_.d5220,d5232:_.d5232,d5421:_.d5421,d5433:_.d5433,dedt:_.dedt,didt:_.didt,dmdt:_.dmdt,dnodt:_.dnodt,domdt:_.domdt,del1:_.del1,del2:_.del2,del3:_.del3,xfact:_.xfact,xlamo:_.xlamo,xli:_.xli,xni:_.xni},se=mw(Xe);_.irez=se.irez,_.atime=se.atime,_.d2201=se.d2201,_.d2211=se.d2211,_.d3210=se.d3210,_.d3222=se.d3222,_.d4410=se.d4410,_.d4422=se.d4422,_.d5220=se.d5220,_.d5232=se.d5232,_.d5421=se.d5421,_.d5433=se.d5433,_.dedt=se.dedt,_.didt=se.didt,_.dmdt=se.dmdt,_.dnodt=se.dnodt,_.domdt=se.domdt,_.del1=se.del1,_.del2=se.del2,_.del3=se.del3,_.xfact=se.xfact,_.xlamo=se.xlamo,_.xli=se.xli,_.xni=se.xni}_.isimp!==1&&(p=_.cc1*_.cc1,_.d2=4*Vt*rt*p,Dt=_.d2*rt*_.cc1/3,_.d3=(17*Vt+lt)*Dt,_.d4=.5*Dt*Vt*rt*(221*Vt+31*lt)*_.cc1,_.t3cof=_.d2+2*p,_.t4cof=.25*(3*_.d3+_.cc1*(12*_.d2+10*p)),_.t5cof=.2*(3*_.d4+12*_.cc1*_.d3+6*_.d2*_.d2+15*p*(2*_.d2+p)))}cm(_,0),_.init="n"}function xw(n,t){yw(n,{opsmode:t,satn:n.satnum,epoch:n.jdsatepoch-24332815e-1,xbstar:n.bstar,xecco:n.ecco,xargpo:n.argpo,xinclo:n.inclo,xmo:n.mo,xno:n.no,xnodeo:n.nodeo})}function Sw(n,t="i"){const i=n.NORAD_CAT_ID.toString(),s=new Date(n.EPOCH.endsWith("Z")?n.EPOCH:`${n.EPOCH}Z`),r=s.getUTCFullYear(),o=Number(r.toString().slice(-2)),a=(s.valueOf()-new Date(Date.UTC(r,0,1,0,0,0)).valueOf())/(86400*1e3)+1;let l=Number(n.MEAN_MOTION_DOT),c=Number(n.MEAN_MOTION_DDOT);l/=Rc*1440,c/=Rc*1440*1440;const h=Number(n.BSTAR),u=Number(n.INCLINATION)*wo,d=Number(n.RA_OF_ASC_NODE)*wo,p=Number(n.ECCENTRICITY),g=Number(n.ARG_OF_PERICENTER)*wo,v=Number(n.MEAN_ANOMALY)*wo,m=Number(n.MEAN_MOTION)/Rc,f=fw(r,a),{mon:b,day:S,hr:x,minute:D,sec:A}=f,R=fu(r,b,S,x,D,A),L={error:0,satnum:i,epochyr:o,epochdays:a,ndot:l,nddot:c,bstar:h,inclo:u,nodeo:d,ecco:p,argpo:g,mo:v,no:m,jdsatepoch:R};return xw(L,t),L}const Mw=n=>n.tempa<=0;function ww(n,...t){const e=t.at(-1),i=typeof e=="object"&&!(e instanceof Date)?e:void 0,s=i?t.slice(0,-1):t,o=(fu(...s)-n.jdsatepoch)*lw,a=cm(n,o);return i?.communityDecayCheckEnabled&&a&&Mw(n)?(n.error=Ti.Decayed,null):a}const Zs=6378.137;function If(n,t=new C){return t.set(n.x,n.z,-n.y).divideScalar(Zs)}function Lo(n,t,e=new C){const i=Math.cos(t),s=Math.sin(t);return e.set(n.x*i-n.z*s,n.y,n.x*s+n.z*i)}function bw(n,t){const e=Lo(n,t,Tw),i=e.length();return{lat:Math.asin(e.y/i)*Uf,lon:Math.atan2(-e.z,e.x)*Uf,altKm:(i-1)*Zs}}function pu(n,t){const e=n.dot(t);return e>=0?!1:n.lengthSq()-e*e<1}function Ew(n,t,e){return e.up.copy(n).normalize(),e.forward.copy(t).addScaledVector(e.up,-t.dot(e.up)).normalize(),e.right.crossVectors(e.forward,e.up),e}const Uf=180/Math.PI,Tw=new C;class Aw{epoch;periodSec;satrec;constructor(t){if(this.satrec=Sw(t),this.satrec.error)throw new Error(`SGP4 init error ${this.satrec.error}`);const e=/[zZ]|[+-]\d\d:?\d\d$/.test(t.EPOCH)?t.EPOCH:t.EPOCH+"Z";this.epoch=new Date(e);const i=Number(t.MEAN_MOTION);this.periodSec=86400/i}stateAt(t,e,i){const s=ww(this.satrec,t);return s?(If(s.position,e),i&&If(s.velocity,i),Number.isFinite(e.x)):!1}}function Cw(n,t){const e=n.propagator;switch(e.kind){case"sgp4":{const i=t.get(e.noradId);if(!i)return{error:`no elements for NORAD ${e.noradId}`};try{return{propagator:new Aw(i)}}catch(s){return{error:`bad elements for NORAD ${e.noradId}: ${s.message}`}}}case"ephemeris":return{error:"ephemeris propagator not implemented yet"}}}const Nf=864e5;function kr(n,t){const e=Math.abs(t.getTime()-n.epoch.getTime());return e<3*Nf?"ok":e<14*Nf?"approximate":"unknown"}const Ff=23.44*Math.PI/180,Rw=new C(0,0,1),Pc=1.0045,Of=.5,Pw=1.5,Dw=30,kf=180,zf=30,Lw=5e3,Bf=.034,Iw=.045,Uw=1.35,Hf=18;class Nw{constructor(t){this.tracker=t,this.mesh.rotation.z=Ff,this.mesh.add(this.earthFixed),this.rebuildVisuals()}tracker;mesh=new ie;flatMesh=new ie;earthFixed=new ie;visuals=new Map;hidden=new Set;tracksOn=!0;orbitsOn=!1;markerStyle="silhouette";selectedId=null;ridingId=null;warp=1;sunDir=new C(1,0,0);textures=new Map;rebuildVisuals(){for(const t of this.visuals.values())this.disposeVisuals(t);this.visuals.clear();for(const t of this.tracker.all()){const e=new Wt(t.spec.colour),i=new qr(new Ys({map:this.markerTexture(t),sizeAttenuation:!1,transparent:!0,depthWrite:!1}));i.scale.setScalar(Bf),i.renderOrder=20;const s=new qr(new Ys({map:this.markerTexture(t),sizeAttenuation:!1,transparent:!0,depthWrite:!1,depthTest:!1}));s.renderOrder=20;const r=new Ho(new Ot,new mi({color:e,transparent:!0,opacity:.4,depthWrite:!1})),o=()=>new mi({vertexColors:!0,transparent:!0,depthWrite:!1}),a=new Ho(new Ot,o()),l=new Li(new Ot,o());for(const c of[r,a,l])c.frustumCulled=!1;this.mesh.add(i,r),this.earthFixed.add(a),this.flatMesh.add(l,s),this.visuals.set(t.spec.id,{tracked:t,marker:i,ring:r,track:a,flatMarker:s,flatTrack:l,pos:new C,vel:new C,lat:0,lon:0,placed:!1,inShadow:!1,age:"unknown",noseSign:1,lastRingBuild:NaN,lastTrackBuild:NaN})}}setSatelliteVisible(t,e){e?this.hidden.delete(t):this.hidden.add(t)}setTracksVisible(t){this.tracksOn=t}setOrbitsVisible(t){this.orbitsOn=t}isSatelliteVisible(t){return!this.hidden.has(t)}setMarkerStyle(t){if(t!==this.markerStyle){this.markerStyle=t;for(const e of this.visuals.values()){const i=this.markerTexture(e.tracked);e.marker.material.map=i,e.flatMarker.material.map=i,e.marker.material.needsUpdate=e.flatMarker.material.needsUpdate=!0}}}setSelected(t){this.selectedId=t}setRiding(t){this.ridingId=t}setSunDirection(t){this.sunDir.copy(t).applyAxisAngle(Rw,-Ff)}setRotationY(t){this.earthFixed.rotation.y=t}update(t,e,i,s,r){this.warp=Math.abs(e);const o=t.getTime(),a=ds(t);for(const l of this.visuals.values()){const c=l.tracked.propagator;l.placed=!!c&&c.stateAt(t,l.pos,l.vel),l.age=c?kr(c,t):"unknown";const h=l.placed&&l.age!=="unknown"&&!this.hidden.has(l.tracked.spec.id),u=h&&this.warp<=Lw;l.placed&&(Lo(l.pos,a,Ye),l.lat=Math.asin(Ye.y/Ye.length())*Tr,l.lon=Math.atan2(-Ye.z,Ye.x)*Tr,l.inShadow=pu(l.pos,this.sunDir));const d=(l.inShadow?.6:1)*(l.age==="approximate"?.6:1),p=l.tracked.spec.id===this.selectedId?Uw:1;l.marker.visible=u&&l.tracked.spec.id!==this.ridingId,l.flatMarker.visible=u,u&&(l.marker.position.copy(l.pos),l.marker.scale.setScalar(Bf*p),l.marker.material.opacity=d,l.marker.material.color.setScalar(l.inShadow?.75:1),l.marker.material.rotation=this.markerStyle==="emoji"?0:this.screenHeading(l,i,r),l.flatMarker.position.set(l.lon/180,l.lat/180,.004),l.flatMarker.scale.setScalar(Iw*p/s.zoom),l.flatMarker.material.opacity=d,l.flatMarker.material.color.setScalar(l.inShadow?.75:1),l.flatMarker.material.rotation=this.markerStyle==="emoji"?0:this.flatHeading(l,t)),l.ring.visible=h&&this.orbitsOn,l.ring.visible&&!(Math.abs(o-l.lastRingBuild)<zf*1e3)&&(this.buildRing(l,o),l.lastRingBuild=o);const g=u&&this.tracksOn;l.track.visible=g,l.flatTrack.visible=g,g&&!(Math.abs(o-l.lastTrackBuild)<zf*1e3)&&(this.buildTrack(l,o),l.lastTrackBuild=o)}}state(t){const e=this.visuals.get(t);return!e||!e.placed?null:{lat:e.lat,lon:e.lon,altKm:(e.pos.length()-1)*Zs,speedKms:e.vel.length()*Zs,inShadow:e.inShadow,age:e.age}}worldPosition(t,e,i){const s=this.visuals.get(t)?.tracked.propagator;return!s||kr(s,e)==="unknown"||!s.stateAt(e,i)?null:(this.mesh.updateMatrixWorld(),i.applyMatrix4(this.mesh.matrixWorld))}worldState(t,e,i,s){const r=this.visuals.get(t)?.tracked.propagator;return!r||kr(r,e)==="unknown"||!r.stateAt(e,i,s)?!1:(this.mesh.updateMatrixWorld(),i.applyMatrix4(this.mesh.matrixWorld),s.applyQuaternion(this.mesh.getWorldQuaternion(zw)),!0)}pickGlobe(t,e,i,s){let r=null,o=Hf;for(const[a,l]of this.visuals){if(!l.marker.visible||(l.marker.getWorldPosition(vo),kw(s.position,vo)))continue;const c=Gf(vo,s,t,e,i);c<o&&(o=c,r=a)}return r}pickFlat(t,e,i,s){let r=null,o=Hf;for(const[a,l]of this.visuals)if(l.flatMarker.visible)for(const c of[-2,0,2]){vo.copy(l.flatMarker.position).setX(l.flatMarker.position.x+c);const h=Gf(vo,s,t,e,i);h<o&&(o=h,r=a)}return r}buildRing(t,e){const i=t.tracked.propagator,s=i.periodSec*1e3,r=[];for(let o=0;o<=kf;o++){const a=e-s/2+s*o/kf;i.stateAt(new Date(a),ts)&&r.push(ts.x,ts.y,ts.z)}Dc(t.ring.geometry,r,3)}buildTrack(t,e){const i=t.tracked.propagator,s=i.periodSec,r=new Wt(t.tracked.spec.colour),o=[],a=[],l=[],c=[];let h=NaN,u=NaN,d=0;const p=-Of*s,g=Pw*s;for(let v=p;v<=g;v+=Dw){const m=new Date(e+v*1e3);if(!i.stateAt(m,ts))continue;Lo(ts,ds(m),Ye).normalize();const f=v<0?.4*(1+v/(Of*s)):.95-.6*(v/g);o.push(Ye.x*Pc,Ye.y*Pc,Ye.z*Pc),a.push(r.r,r.g,r.b,f);const b=Math.asin(Ye.y)*Tr,S=Math.atan2(-Ye.z,Ye.x)*Tr;Number.isFinite(h)&&Math.abs(S-h)<180&&(l.push(h/180,u/180,.003,S/180,b/180,.003),c.push(r.r,r.g,r.b,d,r.r,r.g,r.b,f)),h=S,u=b,d=f}Dc(t.track.geometry,o,3),t.track.geometry.setAttribute("color",new ne(a,4)),Dc(t.flatTrack.geometry,l,3),t.flatTrack.geometry.setAttribute("color",new ne(c,4))}screenHeading(t,e,i){this.mesh.updateMatrixWorld();const s=this.mesh.matrixWorld;Ri.copy(t.pos).applyMatrix4(s).project(e),Ar.copy(t.pos).addScaledVector(t.vel,20).applyMatrix4(s).project(e);const r=(Ar.x-Ri.x)*i.w,o=(Ar.y-Ri.y)*i.h;if(Lc.crossVectors(t.pos,t.vel).normalize().transformDirection(s),$s.copy(Lc).transformDirection(e.matrixWorldInverse),Math.hypot($s.x,$s.y)<.25)return r===0&&o===0?0:Math.atan2(o,r)-Math.PI/2;Ar.copy(t.pos).applyMatrix4(s).addScaledVector(Lc,.1).project(e);const a=(Ar.x-Ri.x)*i.w,c=-((Ar.y-Ri.y)*i.h),h=a;return(c*r+h*o)/(Math.hypot(c,h)*Math.hypot(r,o)||1)*t.noseSign<-.2&&(t.noseSign=-t.noseSign),Math.atan2(h*t.noseSign,c*t.noseSign)-Math.PI/2}flatHeading(t,e){const i=t.tracked.propagator,s=new Date(e.getTime()+2e4);if(!i.stateAt(s,ts))return 0;Lo(ts,ds(s),Ye);const r=Math.asin(Ye.y/Ye.length())*Tr;let a=Math.atan2(-Ye.z,Ye.x)*Tr-t.lon;return a>180?a-=360:a<-180&&(a+=360),Math.atan2(r-t.lat,a)-Math.PI/2}markerTexture(t){const e=`${t.spec.id}:${this.markerStyle}`;let i=this.textures.get(e);return i||(i=this.markerStyle==="emoji"?Ow(t.spec.emoji):Fw(t.spec.silhouette,t.spec.colour),this.textures.set(e,i)),i}disposeVisuals(t){for(const e of[t.marker,t.ring,t.track,t.flatMarker,t.flatTrack])e.removeFromParent(),e.geometry.dispose(),e.material.dispose()}}const Ci=128;function Fw(n,t){const e=document.createElement("canvas");e.width=e.height=Ci;const i=e.getContext("2d"),s=`#${t.toString(16).padStart(6,"0")}`,r=new Path2D(n),o=Ci*.62/24;return i.translate(Ci/2-12*o,Ci/2-12*o),i.scale(o,o),i.shadowColor=s,i.fillStyle=s,i.shadowBlur=22,i.fill(r),i.shadowBlur=9,i.fill(r),i.shadowBlur=0,i.fillStyle="rgba(255,255,255,0.92)",i.fill(r),hm(e)}function Ow(n){const t=document.createElement("canvas");t.width=t.height=Ci;const e=t.getContext("2d");return e.textAlign="center",e.textBaseline="middle",e.font=`${Ci*.7}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`,e.shadowColor="rgba(0,0,0,0.6)",e.shadowBlur=8,e.fillText(n,Ci/2,Ci/2+Ci*.04),hm(t)}function hm(n){const t=new us(n);return t.colorSpace=be,t}function Dc(n,t,e){n.setAttribute("position",new ne(t,e)),n.setDrawRange(0,t.length/e),n.computeBoundingSphere()}function kw(n,t){$s.subVectors(t,n);const e=$s.length();$s.divideScalar(e);const i=n.dot($s),s=n.lengthSq()-1,r=i*i-s;if(r<=0)return!1;const o=-i-Math.sqrt(r);return o>0&&o<e}function Gf(n,t,e,i,s){if(Ri.copy(n).project(t),Ri.z>1)return 1/0;const r=s.left+(Ri.x+1)/2*s.width,o=s.top+(1-Ri.y)/2*s.height;return Math.hypot(r-e,o-i)}const Tr=180/Math.PI,ts=new C,Ye=new C,vo=new C,zw=new zi,Ri=new C,Ar=new C,$s=new C,Lc=new C,nl=["cupola","horizon"],Bw=1/3;class Hw{constructor(t,e,i="horizon"){this.worldState=e,this.label=t,this.view=i}worldState;label;view;pos=new C;vel=new C;basis={up:new C,forward:new C,right:new C};look=new C;update(t,e,i,s){if(!this.worldState(t,this.pos,this.vel))return!1;const{up:r,forward:o}=Ew(this.pos,this.vel,this.basis);if(i.position.copy(this.pos),this.view==="cupola")i.up.copy(o),this.look.copy(r).negate();else{const a=Math.acos(Math.min(1,1/this.pos.length())),l=fs.degToRad(i.fov),c=a+l*(.5-Bw);i.up.copy(r),this.look.copy(o).multiplyScalar(Math.cos(c)).addScaledVector(r,-Math.sin(c))}return s.target.copy(this.pos).add(this.look),i.lookAt(s.target),!0}}const Vo=[{id:"iss",name:"International Space Station",shortName:"ISS",agency:"NASA · Roscosmos · ESA · JAXA · CSA",colour:9427199,crewed:!0,povCapable:!0,propagator:{kind:"sgp4",noradId:25544},officialUrl:"https://www.nasa.gov/international-space-station/",stdMagnitude:-1.8,silhouette:"M2 11.4h20v1.2H2zM2.4 3.5h2.6v7.3H2.4zM5.8 3.5h2.6v7.3H5.8zM2.4 13.2h2.6v7.3H2.4zM5.8 13.2h2.6v7.3H5.8zM15.6 3.5h2.6v7.3h-2.6zM19 3.5h2.6v7.3H19zM15.6 13.2h2.6v7.3h-2.6zM19 13.2h2.6v7.3H19zM11 5h2v14h-2zM9.6 8h4.8v1.6H9.6z",emoji:"🛰️",facts:["Crewed continuously since 2 November 2000.","About the size of a football pitch, and it laps Earth every ~92 minutes.","Its crew see about 16 sunrises and 16 sunsets every day."]},{id:"tiangong",name:"Tiangong space station",shortName:"Tiangong",agency:"CMSA (China)",colour:16743014,crewed:!0,povCapable:!0,propagator:{kind:"sgp4",noradId:48274},officialUrl:"https://en.cmse.gov.cn/",stdMagnitude:-.8,silhouette:"M11 7h2v14h-2zM3.5 8h17v2h-17zM0.8 3h2.8v12H0.8zM20.4 3h2.8v12h-2.8zM6.5 15.5h4v2h-4zM13.5 15.5h4v2h-4z",emoji:"🛰️",facts:["China's permanently crewed station, completed in 2022.",'Tiangong means "Heavenly Palace".',"Orbits a little lower and at a lower inclination (41.5°) than the ISS."]}],Gw={NASA:"https://www.nasa.gov/humans-in-space/astronauts/",ESA:"https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Astronauts",CSA:"https://www.asc-csa.gc.ca/eng/astronauts/",JAXA:"https://humans-in-space.jaxa.jp/en/",CMSA:"https://en.cmse.gov.cn/"};function Ko(n){return Vo.find(t=>t.id===n)}const Vf=30,Wf=5,Vw=2880,Ai=Math.PI/180;async function Ww(n,t,e,i={}){const s=i.days??5,r=(i.minElDeg??10)*Ai,o=i.stdMag??-1.8,a=new qw(t),l=e.getTime(),c=l+s*864e5,h=[];let u=null;(a.look(n,l)?.el??-1)>0&&(u=l-15*6e4);let d=0;for(let p=l;p<=c;p+=Vf*1e3){const g=a.look(n,p);if(!g)return h;if(g.el>0&&u===null&&(u=p-Vf*1e3),g.el<=0&&u!==null){const v=$w(a,n,u,p,r,o);v&&v.end.getTime()>l&&h.push(v),u=null}if(++d%Vw===0&&(await new Promise(v=>setTimeout(v,0)),i.cancelled?.()))return null}return h}function $w(n,t,e,i,s,r){let o=null,a=null,l=null,c=1/0,h=!1;for(let u=e;u<=i;u+=Wf*1e3){const d=n.sample(t,u);if(!d)continue;d.el>=s&&d.sunlit&&d.sunEl<-6*Ai?(o??=d,a=d,(!l||d.el>l.el)&&(l=d),c=Math.min(c,Xw(r,d.rangeKm,d.phase)),h=!1):a&&a.t===u-Wf*1e3&&!d.sunlit&&d.el>=s&&(h=!0)}return!o||!a||!l||a.t-o.t<6e4?null:{start:new Date(o.t),end:new Date(a.t),peak:new Date(l.t),maxElDeg:l.el/Ai,startAzDeg:o.az/Ai,endAzDeg:a.az/Ai,startElDeg:o.el/Ai,endElDeg:a.el/Ai,endsInShadow:h,mag:Math.round(c*10)/10}}function Xw(n,t,e){const i=Math.max(.001,Math.sin(e)+(Math.PI-e)*Math.cos(e));return n+5*Math.log10(t/1e3)-2.5*Math.log10(i)}class qw{pos=new C;east=new C;north=new C;up=new C;constructor(t){const e=.0033528106647474805,i=e*(2-e),s=t.lat*Ai,r=t.lon*Ai,o=(t.heightKm??0)/Zs,a=1/Math.sqrt(1-i*Math.sin(s)**2);this.pos.set((a+o)*Math.cos(s)*Math.cos(r),(a+o)*Math.cos(s)*Math.sin(r),(a*(1-i)+o)*Math.sin(s)),this.east.set(-Math.sin(r),Math.cos(r),0),this.north.set(-Math.sin(s)*Math.cos(r),-Math.sin(s)*Math.sin(r),Math.cos(s)),this.up.set(Math.cos(s)*Math.cos(r),Math.cos(s)*Math.sin(r),Math.sin(s))}look(t,e){const i=new Date(e);if(!t.stateAt(i,Ic))return null;$f(Ic,ds(i),Xf),Ds.subVectors(Xf,this.pos);const s=Ds.length();return{el:Math.asin(Ds.dot(this.up)/s),az:(Math.atan2(Ds.dot(this.east),Ds.dot(this.north))+2*Math.PI)%(2*Math.PI),rangeKm:s*Zs}}sample(t,e){const i=this.look(t,e);if(!i)return null;const s=new Date(e);Cl(s,Nc);const r=!pu(Ic,Nc);$f(Nc,ds(s),Uc);const o=-Uc.dot(Ds)/Ds.length();return{t:e,...i,sunlit:r,sunEl:Math.asin(Uc.dot(this.up)),phase:Math.acos(Math.max(-1,Math.min(1,o)))}}}function $f(n,t,e){return Lo(n,t,Wa),e.set(Wa.x,-Wa.z,Wa.y)}const jw=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function il(n){return jw[Math.round((n%360+360)%360/22.5)%16]}const Ic=new C,Wa=new C,Xf=new C,Ds=new C,Uc=new C,Nc=new C;function qf(n,t){const e=sl(n,{year:"numeric",month:"2-digit",day:"2-digit"},t,"en-CA"),[i,s,r]=e.split("-").map(Number);return Date.UTC(i,s-1,r)/864e5}function sl(n,t,e,i){try{return new Intl.DateTimeFormat(i,{...t,timeZone:e}).format(n)}catch{return new Intl.DateTimeFormat(i,t).format(n)}}function Oh(n,t,e){const i=sl(n,{hour:"2-digit",minute:"2-digit",hour12:!1},e),s=Number(i.slice(0,2)),r=qf(n,e)-qf(t,e);return r===0?`${s>=17?"Tonight":"Today"} ${i}`:r===1?`Tomorrow ${i}`:r<7?`${sl(n,{weekday:"short"},e)} ${i}`:`${sl(n,{day:"numeric",month:"short"},e)} ${i}`}function mu(n){const t=Math.max(1,Math.round((n.end.getTime()-n.start.getTime())/6e4)),e=n.endsInShadow?`fades ${il(n.endAzDeg)}`:il(n.endAzDeg),i=n.mag.toFixed(1).replace("-","−");return`${t} min · max ${Math.round(n.maxElDeg)}° · ${il(n.startAzDeg)} → ${e} · mag ${i}`}function Yw(n,t){return(()=>{try{return new Intl.DateTimeFormat("en-GB",{timeZone:t,timeZoneName:"short"}).formatToParts(n)}catch{return new Intl.DateTimeFormat("en-GB",{timeZoneName:"short"}).formatToParts(n)}})().find(i=>i.type==="timeZoneName")?.value??""}function Zw(n,t,e){const i=l=>l.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),s=`${t} visible from ${e}: ${mu(n)}. Appears in the ${il(n.startAzDeg)}, highest at ${Math.round(n.maxElDeg)}°. Predicted by earth-clock.onemonkey.org`,r=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//onemonkey//earth-clock//EN","BEGIN:VEVENT",`UID:${i(n.start)}-${t.replace(/\W/g,"")}@earth-clock.onemonkey.org`,`DTSTAMP:${i(new Date)}`,`DTSTART:${i(new Date(n.start.getTime()-2*6e4))}`,`DTEND:${i(n.end)}`,`SUMMARY:🛰️ ${t} passes over`,`DESCRIPTION:${s.replace(/[,;]/g,l=>"\\"+l)}`,"BEGIN:VALARM","TRIGGER:-PT10M","ACTION:DISPLAY",`DESCRIPTION:${t} in 10 minutes`,"END:VALARM","END:VEVENT","END:VCALENDAR"].join(`\r
`),o=URL.createObjectURL(new Blob([r],{type:"text/calendar"})),a=document.createElement("a");a.href=o,a.download=`${t.replace(/\W+/g,"-").toLowerCase()}-pass-${i(n.start).slice(0,13)}.ics`,a.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}class Kw{root;stationView;crewView;tabsEl;rideBtn;nameEl;agencyEl;placeEl;coordsEl;altEl;speedEl;lightEl;crewEl;factEl;ageEl;iconEl;passesEl;closeHandler=null;centreHandler=null;watchHandler=null;calendarHandler=null;pinHandler=null;crewHandler=null;showStationHandler=null;rideHandler=null;switchHandler=null;spec=null;view=null;factIndex=0;factTimer=null;lastPassesKey="";constructor(t){sb(),this.root=document.createElement("div"),this.root.id="orrery-sat",this.root.classList.add("hidden"),this.root.innerHTML=`
      <div class="orrery-sat-titlerow">
        <span class="orrery-sat-tabs" id="orrery-sat-tabs" role="tablist"></span>
        <span class="orrery-sat-close" id="orrery-sat-close" title="Close panel">✕</span>
      </div>
      <div id="orrery-sat-station">
        <div class="orrery-sat-head">
          <span class="orrery-sat-icon" id="orrery-sat-icon" aria-hidden="true"></span>
          <span class="orrery-sat-name" id="orrery-sat-name"></span>
        </div>
        <div class="orrery-sat-agency" id="orrery-sat-agency"></div>
        <div class="orrery-sat-place hidden" id="orrery-sat-place"></div>
        <div class="orrery-sat-grid">
          <span class="k">position</span><span class="v" id="orrery-sat-coords">—</span>
          <span class="k">altitude</span><span class="v" id="orrery-sat-alt">—</span>
          <span class="k">speed</span><span class="v" id="orrery-sat-speed">—</span>
          <span class="k">light</span><span class="v" id="orrery-sat-light">—</span>
          <span class="k crew">aboard</span><span class="v crew"><a href="#" class="orrery-sat-link" id="orrery-sat-crew" title="Who's in space right now">—</a></span>
        </div>
        <div class="orrery-sat-passes" id="orrery-sat-passes"></div>
        <div class="orrery-sat-fact" id="orrery-sat-fact"></div>
        <div class="orrery-sat-actions">
          <button class="orrery-sat-btn" id="orrery-sat-centre" title="Point the camera down at the station">centre view</button>
          <button class="orrery-sat-btn" id="orrery-sat-ride" title="Ride along — the view from the station. V switches view, Esc leaves.">ride along ▶</button>
        </div>
        <div class="orrery-sat-age" id="orrery-sat-age"></div>
      </div>
      <div id="orrery-sat-crewview" class="hidden"></div>
    `,t.appendChild(this.root);const e=i=>this.root.querySelector(`#${i}`);this.stationView=e("orrery-sat-station"),this.crewView=e("orrery-sat-crewview"),this.tabsEl=e("orrery-sat-tabs"),this.nameEl=e("orrery-sat-name"),this.agencyEl=e("orrery-sat-agency"),this.placeEl=e("orrery-sat-place"),this.coordsEl=e("orrery-sat-coords"),this.altEl=e("orrery-sat-alt"),this.speedEl=e("orrery-sat-speed"),this.lightEl=e("orrery-sat-light"),this.crewEl=e("orrery-sat-crew"),this.factEl=e("orrery-sat-fact"),this.ageEl=e("orrery-sat-age"),this.iconEl=e("orrery-sat-icon"),this.passesEl=e("orrery-sat-passes"),e("orrery-sat-close").addEventListener("click",()=>this.closeHandler?.()),e("orrery-sat-centre").addEventListener("click",()=>this.centreHandler?.()),this.crewEl.addEventListener("click",i=>{i.preventDefault(),this.crewHandler?.()}),this.rideBtn=e("orrery-sat-ride"),this.rideBtn.addEventListener("click",()=>this.rideHandler?.());for(const[i,s,r,o]of[...Vo.map(a=>[a.id,a.shortName,a.name,a.colour]),["crew","crew","Who's in space right now",Yf]]){const a=document.createElement("button");a.className="orrery-sat-tab",a.dataset.id=i,a.setAttribute("role","tab"),a.textContent=s,a.title=r,a.style.setProperty("--tab-accent",Jw(o)),a.addEventListener("click",()=>{a.classList.contains("active")||(i==="crew"?this.crewHandler?.():this.switchHandler?.(i))}),this.tabsEl.appendChild(a)}}onClose(t){this.closeHandler=t}onCentre(t){this.centreHandler=t}onWatchPass(t){this.watchHandler=t}onCalendar(t){this.calendarHandler=t}onRequestPin(t){this.pinHandler=t}onShowCrew(t){this.crewHandler=t}onShowStation(t){this.showStationHandler=t}onRide(t){this.rideHandler=t}onSwitch(t){this.switchHandler=t}setRiding(t){this.rideBtn.textContent=t?"leave ride ✕":"ride along ▶"}selectedId(){return this.view==="station"?this.spec?.id??null:null}isOpen(){return this.view!==null}show(t,e){this.spec=t,this.setView("station"),this.setActiveTab(t.id),this.rideBtn.classList.toggle("hidden",!t.povCapable),this.nameEl.textContent=t.name,this.agencyEl.innerHTML=hn(t.agency)+(t.officialUrl?` · <a class="orrery-sat-link" href="${t.officialUrl}" target="_blank" rel="noopener">official site ↗</a>`:""),this.iconEl.textContent=t.emoji,this.setAccent(t.colour),this.setPlace("");const i=t.crewed&&e!==null;for(const s of this.root.querySelectorAll(".crew"))s.classList.toggle("hidden",!i);i&&(this.crewEl.textContent=`${e.length===1?"1 person":`${e.length} people`} · who? ›`),this.lastPassesKey="",this.passesEl.innerHTML="",this.factIndex=0,this.showFact(),this.factTimer===null&&(this.factTimer=window.setInterval(()=>this.showFact(),12e3))}hide(){this.spec=null,this.setView(null),this.factTimer!==null&&(clearInterval(this.factTimer),this.factTimer=null)}setPlace(t){this.placeEl.textContent=t,this.placeEl.classList.toggle("hidden",!t)}update(t){if(this.view!=="station")return;if(this.restack(),!t||t.age==="unknown"){this.coordsEl.textContent=this.altEl.textContent=this.speedEl.textContent=this.lightEl.textContent="—",this.setPlace(jf),this.ageEl.textContent=t?`elements ${Zf(t.elementAgeHours)} — too far to trust`:"no orbital elements loaded";return}this.placeEl.textContent===jf&&this.setPlace(""),this.coordsEl.textContent=`${tb(t.lat)}, ${eb(t.lon)}`,this.altEl.textContent=`${Math.round(t.altKm)} km`,this.speedEl.textContent=`${t.speedKms.toFixed(2)} km/s · ${Math.round(t.speedKms*3600).toLocaleString()} km/h`;let e=t.inShadow?"🌑 in Earth's shadow":"☀️ in sunlight";if(t.nextChange){const i=Math.max(0,Math.round((t.nextChange.at.getTime()-t.now.getTime())/6e4));e+=` · ${t.nextChange.sunrise?"sunrise":"sunset"} in ${i} min`}this.lightEl.textContent=e,this.ageEl.textContent=`elements ${Zf(t.elementAgeHours)}${t.age==="approximate"?" · position approximate":""}`,this.ageEl.classList.toggle("warn",t.age==="approximate")}setPasses(t){if(this.view!=="station"||!this.spec)return;const e=this.spec.shortName;let i,s;switch(t.kind){case"no-pin":i="no-pin",s=`<a href="#" class="orrery-sat-invite" data-act="pin">📍 Drop a pin to see when the ${hn(e)} flies over you</a>`;break;case"computing":i=`computing:${t.place}`,s=`${this.passesHeader(t.place)}<div class="orrery-sat-note">working out passes…</div>`;break;case"unknown":i="unknown",s=`<div class="orrery-sat-note">Pass predictions need today's orbit — come back to the present to see them.</div>`;break;case"ready":{const r=t.passes.filter(a=>a.end>t.now).slice(0,3);i=`ready:${t.place}:${t.timeZone}:`+r.map(a=>a.start.getTime()).join(",")+`:${r.map(a=>a.start<=t.now?"live":Oh(a.start,t.now,t.timeZone)).join(",")}`;const o=r.length?Yw(r[0].start,t.timeZone):"";s=this.passesHeader(t.place,o),r.length||(s+=`<div class="orrery-sat-note">No visible passes in the next ${t.days} days. The ${hn(e)} is crossing your sky in daylight or in Earth's shadow. Visibility comes in spells of a week or two, so check back.</div>`),r.forEach((a,l)=>{const c=a.start<=t.now;s+=`
            <div class="orrery-sat-pass${c?" live":""}">
              <div class="when">${c?"🔭 Overhead now":hn(Oh(a.start,t.now,t.timeZone))}
                <span class="acts">
                  <a href="#" data-act="watch" data-i="${l}" title="Jump the clock to this pass and watch it fly over">▶ watch</a>
                  <a href="#" data-act="ics" data-i="${l}" title="Add to your calendar (.ics) with a 10-minute reminder">📅</a>
                </span>
              </div>
              <div class="detail">${hn(mu(a))}</div>
            </div>`}),this.currentPasses=r;break}}if(i!==this.lastPassesKey){this.lastPassesKey=i,this.passesEl.innerHTML=s;for(const r of this.passesEl.querySelectorAll("[data-act]"))r.addEventListener("click",o=>{o.preventDefault();const a=this.currentPasses[Number(r.dataset.i)];r.dataset.act==="pin"?this.pinHandler?.():r.dataset.act==="watch"&&a?this.watchHandler?.(a):r.dataset.act==="ics"&&a&&this.calendarHandler?.(a)});this.restack()}}currentPasses=[];passesHeader(t,e=""){return`<div class="orrery-sat-sub">visible from 📍 ${hn(t)}${e?` <span class="zone">${hn(e)}</span>`:""}</div>`}showCrew(t,e){if(this.spec=null,this.setView("crew"),this.setActiveTab("crew"),this.setAccent(Yf),!t){this.crewView.innerHTML=`<div class="orrery-sat-note">The crew list hasn't been filled in yet.</div>`;return}const i=e.filter(o=>o.crewed&&t.stations[o.id]);let r=`<div class="orrery-sat-crew-total"><b>${i.reduce((o,a)=>o+t.stations[a.id].length,0)}</b> people are off the planet right now</div>`;for(const o of i){const a=t.stations[o.id],l=`#${o.colour.toString(16).padStart(6,"0")}`;r+=`
        <div class="orrery-sat-crew-station" style="--st:${l}">
          <div class="hdr">
            <span>${o.emoji}</span>
            ${o.officialUrl?`<a class="name" href="${o.officialUrl}" target="_blank" rel="noopener" title="Official site">${hn(o.name)} ↗</a>`:`<span class="name">${hn(o.name)}</span>`}
            <span class="count">${a.length}</span>
          </div>
          <ul>${a.map(c=>`<li>${c.url?`<a href="${vl(c.url)}" target="_blank" rel="noopener">${hn(c.name)}</a>`:hn(c.name)} <span class="ag">${Qw(c.agency)}</span>${c.since?` <span class="since" title="Aboard since ${vl(c.since)}">${ib(c.since)}</span>`:""}</li>`).join("")}</ul>
          <a href="#" class="orrery-sat-link show" data-id="${o.id}">show on globe ›</a>
        </div>`}r+=`<div class="orrery-sat-age">crew list checked ${hn(nb(t.updated))}</div>`,this.crewView.innerHTML=r;for(const o of this.crewView.querySelectorAll("a.show"))o.addEventListener("click",a=>{a.preventDefault(),this.showStationHandler?.(o.dataset.id)})}setView(t){this.view=t,this.root.classList.toggle("hidden",t===null),this.stationView.classList.toggle("hidden",t!=="station"),this.crewView.classList.toggle("hidden",t!=="crew"),t&&this.restack()}setActiveTab(t){for(const e of this.tabsEl.querySelectorAll(".orrery-sat-tab")){const i=e.dataset.id===t;e.classList.toggle("active",i),e.setAttribute("aria-selected",String(i))}}setAccent(t){this.root.style.setProperty("--sat-accent",`#${t.toString(16).padStart(6,"0")}`)}showFact(){const t=this.spec?.facts??[];this.factEl.textContent=t.length?t[this.factIndex++%t.length]:""}restack(){const t=document.getElementById("orrery-location"),e=t&&!t.classList.contains("hidden")&&!window.matchMedia("(max-width: 600px)").matches;this.root.style.bottom=e?`${t.offsetHeight+28}px`:""}}const jf="orbit unknown this far from today",Yf=14862698;function Jw(n){return`#${n.toString(16).padStart(6,"0")}`}function Qw(n){const t=Gw[n];return t?`<a href="${vl(t)}" target="_blank" rel="noopener noreferrer" title="${vl(n)} astronauts">${hn(n)}</a>`:hn(n)}function tb(n){return`${Math.abs(n).toFixed(2)}°${n>=0?"N":"S"}`}function eb(n){return`${Math.abs(n).toFixed(2)}°${n>=0?"E":"W"}`}function Zf(n){const t=Math.abs(n),e=t<1?`${Math.round(t*60)} min`:t<48?`${Math.round(t)} h`:`${Math.round(t/24)} days`;return n>=0?`${e} old`:`${e} ahead`}function nb(n){if(!n)return"—";const t=new Date(n+"T12:00:00Z");return isNaN(t.getTime())?n:t.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}function ib(n){const t=new Date(n+"T12:00:00Z").getTime();return isNaN(t)?"":`day ${Math.max(1,Math.floor((Date.now()-t)/864e5)+1)}`}function hn(n){return n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function vl(n){return hn(n)}let Kf=!1;function sb(){if(Kf)return;Kf=!0;const n=`
    #orrery-sat {
      --sat-accent: #8fd8ff;
      position: fixed; right: 16px; bottom: 16px;
      background: rgba(5, 10, 30, 0.82);
      color: #cfd6e4;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px; line-height: 1.45;
      padding: 10px 14px; border-radius: 6px;
      border-left: 3px solid var(--sat-accent);
      min-width: 250px; max-width: 320px;
      max-height: calc(100vh - 32px); overflow-y: auto;
      z-index: 10;
      pointer-events: all;
      user-select: text;
    }
    #orrery-sat.hidden, #orrery-sat .hidden { display: none; }
    @media (max-width: 600px) {
      #orrery-sat {
        left: 8px; right: 8px; min-width: 0; max-width: none;
        bottom: calc(56px + env(safe-area-inset-bottom));
        max-height: 60vh;
      }
    }
    .orrery-sat-titlerow { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
    .orrery-sat-tabs { display: flex; }
    .orrery-sat-tab {
      background: none; border: none; border-bottom: 1px solid transparent;
      padding: 0 0 2px; margin-right: 12px;
      color: #6e7a90; font-family: inherit; font-size: 11px;
      letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer;
      transition: color 125ms ease;
    }
    .orrery-sat-tab:hover { color: #cfd6e4; }
    .orrery-sat-tab.active { color: var(--tab-accent); border-bottom-color: var(--tab-accent); cursor: default; }
    .orrery-sat-close { color: #6e7a90; cursor: pointer; margin-left: 1em; transition: color 125ms ease; }
    .orrery-sat-close:hover { color: #ff7a7a; }
    .orrery-sat-head { display: flex; align-items: baseline; gap: 6px; }
    .orrery-sat-icon { font-size: 14px; line-height: 1; }
    .orrery-sat-name { color: #fff; font-size: 13px; font-weight: 600; }
    .orrery-sat-agency { color: #6e7a90; font-size: 11px; padding-left: 22px; }
    .orrery-sat-link { color: var(--sat-accent); text-decoration: none; }
    .orrery-sat-link:hover { text-decoration: underline; }
    .orrery-sat-place { color: var(--sat-accent); margin: 6px 0 4px; }
    .orrery-sat-grid { display: grid; grid-template-columns: auto 1fr; column-gap: 10px; margin-top: 4px; }
    .orrery-sat-grid .k { color: #6e7a90; font-size: 11px; }
    .orrery-sat-grid .v { color: #cfd6e4; font-size: 11px; }
    .orrery-sat-passes { margin-top: 8px; }
    .orrery-sat-passes:empty { display: none; }
    .orrery-sat-sub { color: #6e7a90; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 3px; }
    .orrery-sat-sub .zone { text-transform: none; letter-spacing: 0; color: #56607a; }
    .orrery-sat-note { color: #8a93a7; font-size: 11px; }
    .orrery-sat-invite { color: #e2c96a; font-size: 11px; text-decoration: none; }
    .orrery-sat-invite:hover { text-decoration: underline; }
    .orrery-sat-pass {
      padding: 4px 6px; margin-bottom: 3px; border-radius: 4px;
      background: rgba(255,255,255,0.03); border-left: 2px solid var(--sat-accent);
    }
    .orrery-sat-pass.live { background: rgba(226, 201, 106, 0.14); border-left-color: #e2c96a; }
    .orrery-sat-pass .when { color: #fff; font-size: 12px; display: flex; justify-content: space-between; gap: 8px; }
    .orrery-sat-pass .acts a { color: var(--sat-accent); text-decoration: none; font-size: 11px; margin-left: 6px; }
    .orrery-sat-pass .acts a:hover { text-decoration: underline; }
    .orrery-sat-pass .detail { color: #a4b0c6; font-size: 10.5px; }
    .orrery-sat-fact { color: #a4b0c6; font-size: 11px; font-style: italic; margin-top: 6px; min-height: 1.4em; }
    .orrery-sat-actions { display: flex; gap: 6px; margin-top: 8px; }
    .orrery-sat-btn {
      flex: 1;
      background: rgba(255,255,255,0.06); color: #cfd6e4;
      border: 1px solid rgba(255,255,255,0.14); border-radius: 4px;
      padding: 4px 6px; font-family: inherit; font-size: 11px; cursor: pointer;
      transition: background 125ms ease, color 125ms ease;
    }
    .orrery-sat-btn:hover:not(:disabled) { background: rgba(255,255,255,0.12); color: #fff; }
    .orrery-sat-btn:disabled { opacity: 0.45; cursor: default; }
    .orrery-sat-age { color: #56607a; font-size: 10px; margin-top: 6px; }
    .orrery-sat-age.warn { color: #e2a84a; }
    .orrery-sat-crew-total { color: #cfd6e4; margin-bottom: 8px; }
    .orrery-sat-crew-total b { color: #e2c96a; font-size: 15px; }
    .orrery-sat-crew-station { border-left: 2px solid var(--st); padding: 2px 0 4px 8px; margin-bottom: 8px; }
    .orrery-sat-crew-station .hdr { display: flex; align-items: baseline; gap: 6px; }
    .orrery-sat-crew-station .name { color: var(--st); font-weight: 600; text-decoration: none; }
    .orrery-sat-crew-station a.name:hover { text-decoration: underline; }
    .orrery-sat-crew-station .count { margin-left: auto; color: #6e7a90; font-size: 11px; }
    .orrery-sat-crew-station ul { list-style: none; margin: 3px 0 3px; padding: 0; }
    .orrery-sat-crew-station li { font-size: 11px; color: #cfd6e4; }
    .orrery-sat-crew-station li a { color: #cfd6e4; }
    .orrery-sat-crew-station .ag, .orrery-sat-crew-station .ag a { color: #6e7a90; }
    .orrery-sat-crew-station .ag a { text-decoration: none; border-bottom: 1px dotted rgba(110,122,144,0.6); }
    .orrery-sat-crew-station .ag a:hover { color: #fff; border-bottom-color: #fff; }
    .orrery-sat-crew-station .since { color: #56607a; font-size: 10px; }
    .orrery-sat-crew-station .show { --sat-accent: var(--st); font-size: 11px; }
  `,t=document.createElement("style");t.textContent=n,document.head.appendChild(t)}class rb{tracked=Vo.map(t=>({spec:t,propagator:null,error:"loading"}));setElements(t){this.tracked=Vo.map(e=>{const i=Cw(e,t);return"propagator"in i?{spec:e,propagator:i.propagator}:{spec:e,propagator:null,error:i.error}})}all(){return this.tracked}get(t){return this.tracked.find(e=>e.spec.id===t)}summary(t){return this.tracked.map(e=>{if(!e.propagator)return`${e.spec.shortName}: ${e.error}`;const i=(t.getTime()-e.propagator.epoch.getTime())/36e5;return`${e.spec.shortName} epoch ${i>=0?"":"+"}${Math.abs(i).toFixed(0)} h ${i>=0?"old":"ahead"}`}).join(" · ")}nextShadowChange(t,e){const i=this.get(t)?.propagator;if(!i)return null;const s=l=>{const c=new Date(l);return i.stateAt(c,$a)?pu($a,Cl(c,ob)):null},r=e.getTime(),o=s(r);if(o===null)return null;let a=r;for(let l=r+15e3;l<=r+i.periodSec*1e3+15e3;l+=15e3){const c=s(l);if(c===null)return null;if(c!==o){for(;l-a>1e3;){const h=(a+l)/2;s(h)===o?a=h:l=h}return{at:new Date(l),sunrise:o}}a=l}return null}snapshot(t){const e=ds(t),i=[];for(const s of this.tracked){if(!s.propagator||!s.propagator.stateAt(t,$a,Jf))continue;const r=bw($a,e);i.push({id:s.spec.id,age:kr(s.propagator,t),lat:Xa(r.lat,3),lon:Xa(r.lon,3),altKm:Xa(r.altKm,1),speedKms:Xa(Jf.length()*Zs,3)})}return i}}const $a=new C,Jf=new C,ob=new C,Xa=(n,t)=>Math.round(n*10**t)/10**t,ab="/proxy/nhc/CurrentStorms.json";async function lb(){const n=await fetch(ab);if(!n.ok)throw new Error(`NHC fetch failed: ${n.status}`);const t=await n.json(),e=Array.isArray(t.activeStorms)?t.activeStorms:[],i=[];for(const s of e){const r=Qf(s.latitudeNumeric,s.latitude),o=Qf(s.longitudeNumeric,s.longitude);!Number.isFinite(r)||!Number.isFinite(o)||i.push({id:String(s.id??""),name:String(s.name??""),classification:String(s.classification??""),intensityKt:parseFloat(s.intensity)||0,pressureMb:parseFloat(s.pressure)||0,lat:r,lon:o,movementDir:parseFloat(s.movementDir)||NaN,movementSpeedKt:parseFloat(s.movementSpeed)||0,lastUpdate:String(s.lastUpdate??""),forecastConeKmz:Fc(s.forecastCone),forecastTrackKmz:Fc(s.forecastTrack),bestTrackKmz:Fc(s.bestTrack)})}return{storms:i,fetchedAt:new Date}}function Fc(n){if(n&&typeof n=="object"&&"kmzFile"in n){const t=n.kmzFile;if(typeof t=="string"&&t.length>0)return t}}function Qf(n,t){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n=="string"){const e=parseFloat(n);if(Number.isFinite(e))return e}if(typeof t=="string"){const e=t.trim().match(/^(-?\d+(?:\.\d+)?)\s*([NSEW])?$/i);if(e){const i=parseFloat(e[1]),s=e[2]?.toUpperCase();return s==="S"||s==="W"?-i:i}}return NaN}var Ln=Uint8Array,Nr=Uint16Array,cb=Int32Array,um=new Ln([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dm=new Ln([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),hb=new Ln([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),fm=function(n,t){for(var e=new Nr(31),i=0;i<31;++i)e[i]=t+=1<<n[i-1];for(var s=new cb(e[30]),i=1;i<30;++i)for(var r=e[i];r<e[i+1];++r)s[r]=r-e[i]<<5|i;return{b:e,r:s}},pm=fm(um,2),mm=pm.b,ub=pm.r;mm[28]=258,ub[258]=28;var db=fm(dm,0),fb=db.b,kh=new Nr(32768);for(var we=0;we<32768;++we){var es=(we&43690)>>1|(we&21845)<<1;es=(es&52428)>>2|(es&13107)<<2,es=(es&61680)>>4|(es&3855)<<4,kh[we]=((es&65280)>>8|(es&255)<<8)>>1}var Io=(function(n,t,e){for(var i=n.length,s=0,r=new Nr(t);s<i;++s)n[s]&&++r[n[s]-1];var o=new Nr(t);for(s=1;s<t;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(e){a=new Nr(1<<t);var l=15-t;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],h=t-n[s],u=o[n[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[kh[u]>>l]=c}else for(a=new Nr(i),s=0;s<i;++s)n[s]&&(a[s]=kh[o[n[s]-1]++]>>15-n[s]);return a}),Jo=new Ln(288);for(var we=0;we<144;++we)Jo[we]=8;for(var we=144;we<256;++we)Jo[we]=9;for(var we=256;we<280;++we)Jo[we]=7;for(var we=280;we<288;++we)Jo[we]=8;var gm=new Ln(32);for(var we=0;we<32;++we)gm[we]=5;var pb=Io(Jo,9,1),mb=Io(gm,5,1),Oc=function(n){for(var t=n[0],e=1;e<n.length;++e)n[e]>t&&(t=n[e]);return t},Wn=function(n,t,e){var i=t/8|0;return(n[i]|n[i+1]<<8)>>(t&7)&e},kc=function(n,t){var e=t/8|0;return(n[e]|n[e+1]<<8|n[e+2]<<16)>>(t&7)},gb=function(n){return(n+7)/8|0},gu=function(n,t,e){return(t==null||t<0)&&(t=0),(e==null||e>n.length)&&(e=n.length),new Ln(n.subarray(t,e))},vb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],On=function(n,t,e){var i=new Error(t||vb[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,On),!e)throw i;return i},_b=function(n,t,e,i){var s=n.length,r=i?i.length:0;if(!s||t.f&&!t.l)return e||new Ln(0);var o=!e,a=o||t.i!=2,l=t.i;o&&(e=new Ln(s*3));var c=function(qt){var Ct=e.length;if(qt>Ct){var Ht=new Ln(Math.max(Ct*2,qt));Ht.set(e),e=Ht}},h=t.f||0,u=t.p||0,d=t.b||0,p=t.l,g=t.d,v=t.m,m=t.n,f=s*8;do{if(!p){h=Wn(n,u,1);var b=Wn(n,u+1,3);if(u+=3,b)if(b==1)p=pb,g=mb,v=9,m=5;else if(b==2){var A=Wn(n,u,31)+257,R=Wn(n,u+10,15)+4,L=A+Wn(n,u+5,31)+1;u+=14;for(var E=new Ln(L),M=new Ln(19),P=0;P<R;++P)M[hb[P]]=Wn(n,u+P*3,7);u+=R*3;for(var O=Oc(M),B=(1<<O)-1,W=Io(M,O,1),P=0;P<L;){var Y=W[Wn(n,u,B)];u+=Y&15;var S=Y>>4;if(S<16)E[P++]=S;else{var H=0,K=0;for(S==16?(K=3+Wn(n,u,3),u+=2,H=E[P-1]):S==17?(K=3+Wn(n,u,7),u+=3):S==18&&(K=11+Wn(n,u,127),u+=7);K--;)E[P++]=H}}var z=E.subarray(0,A),J=E.subarray(A);v=Oc(z),m=Oc(J),p=Io(z,v,1),g=Io(J,m,1)}else On(1);else{var S=gb(u)+4,x=n[S-4]|n[S-3]<<8,D=S+x;if(D>s){l&&On(0);break}a&&c(d+x),e.set(n.subarray(S,D),d),t.b=d+=x,t.p=u=D*8,t.f=h;continue}if(u>f){l&&On(0);break}}a&&c(d+131072);for(var st=(1<<v)-1,lt=(1<<m)-1,_t=u;;_t=u){var H=p[kc(n,u)&st],Rt=H>>4;if(u+=H&15,u>f){l&&On(0);break}if(H||On(2),Rt<256)e[d++]=Rt;else if(Rt==256){_t=u,p=null;break}else{var q=Rt-254;if(Rt>264){var P=Rt-257,X=um[P];q=Wn(n,u,(1<<X)-1)+mm[P],u+=X}var et=g[kc(n,u)&lt],it=et>>4;et||On(3),u+=et&15;var J=fb[it];if(it>3){var X=dm[it];J+=kc(n,u)&(1<<X)-1,u+=X}if(u>f){l&&On(0);break}a&&c(d+131072);var mt=d+q;if(d<J){var bt=r-J,xt=Math.min(J,mt);for(bt+d<0&&On(3);d<xt;++d)e[d]=i[bt+d]}for(;d<mt;++d)e[d]=e[d-J]}}t.l=p,t.p=_t,t.b=d,t.f=h,p&&(h=1,t.m=v,t.d=g,t.n=m)}while(!h);return d!=e.length&&o?gu(e,0,d):e.subarray(0,d)},yb=new Ln(0),ci=function(n,t){return n[t]|n[t+1]<<8},jn=function(n,t){return(n[t]|n[t+1]<<8|n[t+2]<<16|n[t+3]<<24)>>>0},zc=function(n,t){return jn(n,t)+jn(n,t+4)*4294967296};function xb(n,t){return _b(n,{i:2},t&&t.out,t&&t.dictionary)}var zh=typeof TextDecoder<"u"&&new TextDecoder,Sb=0;try{zh.decode(yb,{stream:!0}),Sb=1}catch{}var Mb=function(n){for(var t="",e=0;;){var i=n[e++],s=(i>127)+(i>223)+(i>239);if(e+s>n.length)return{s:t,r:gu(n,e-1)};s?s==3?(i=((i&15)<<18|(n[e++]&63)<<12|(n[e++]&63)<<6|n[e++]&63)-65536,t+=String.fromCharCode(55296|i>>10,56320|i&1023)):s&1?t+=String.fromCharCode((i&31)<<6|n[e++]&63):t+=String.fromCharCode((i&15)<<12|(n[e++]&63)<<6|n[e++]&63):t+=String.fromCharCode(i)}};function vm(n,t){if(t){for(var e="",i=0;i<n.length;i+=16384)e+=String.fromCharCode.apply(null,n.subarray(i,i+16384));return e}else{if(zh)return zh.decode(n);var s=Mb(n),r=s.s,e=s.r;return e.length&&On(8),r}}var wb=function(n,t){return t+30+ci(n,t+26)+ci(n,t+28)},bb=function(n,t,e){var i=ci(n,t+28),s=vm(n.subarray(t+46,t+46+i),!(ci(n,t+8)&2048)),r=t+46+i,o=jn(n,t+20),a=e&&o==4294967295?Eb(n,r):[o,jn(n,t+24),jn(n,t+42)],l=a[0],c=a[1],h=a[2];return[ci(n,t+10),l,c,s,r+ci(n,t+30)+ci(n,t+32),h]},Eb=function(n,t){for(;ci(n,t)!=1;t+=4+ci(n,t+2));return[zc(n,t+12),zc(n,t+4),zc(n,t+20)]};function Tb(n,t){for(var e={},i=n.length-22;jn(n,i)!=101010256;--i)(!i||n.length-i>65558)&&On(13);var s=ci(n,i+8);if(!s)return{};var r=jn(n,i+16),o=r==4294967295||s==65535;if(o){var a=jn(n,i-12);o=jn(n,a)==101075792,o&&(s=jn(n,a+32),r=jn(n,a+48))}for(var l=0;l<s;++l){var c=bb(n,r,o),h=c[0],u=c[1],d=c[2],p=c[3],g=c[4],v=c[5],m=wb(n,v);r=g,h?h==8?e[p]=xb(n.subarray(m,m+u),{out:new Ln(d)}):On(14,"unknown compression type "+h):e[p]=gu(n,m,m+u)}return e}async function Ab(n){const t=await fetch(n);if(!t.ok)throw new Error(`KMZ fetch failed: ${t.status} ${n}`);const e=new Uint8Array(await t.arrayBuffer());return Cb(e)}function Cb(n){const t=Tb(n),e=Object.keys(t).find(s=>s.toLowerCase().endsWith(".kml"));if(!e)throw new Error("KMZ contains no .kml file");const i=vm(t[e]);return Rb(i)}function Rb(n){const t=new DOMParser().parseFromString(n,"application/xml");if(t.querySelector("parsererror"))throw new Error("KML XML parse error");const e=[],i=t.getElementsByTagName("Placemark");for(let s=0;s<i.length;s++){const r=i[s],o=r.getElementsByTagName("name")[0]?.textContent??void 0,a=r.getElementsByTagName("LineString");for(let c=0;c<a.length;c++){const h=tp(a[c].getElementsByTagName("coordinates")[0]);h.length&&e.push({type:"line",coords:h,name:o})}const l=r.getElementsByTagName("Polygon");for(let c=0;c<l.length;c++){const u=l[c].getElementsByTagName("outerBoundaryIs")[0]?.getElementsByTagName("LinearRing")[0],d=tp(u?.getElementsByTagName("coordinates")[0]);d.length&&e.push({type:"polygon",coords:d,name:o})}}return e}function tp(n){if(!n)return[];const t=n.textContent??"",e=[],i=t.trim().split(/\s+/);for(const s of i){const r=s.split(",");if(r.length<2)continue;const o=parseFloat(r[0]),a=parseFloat(r[1]);Number.isFinite(o)&&Number.isFinite(a)&&e.push([o,a])}return e}function Pb(n){return n&&n.replace(/^https?:\/\/(?:www\.)?nhc\.noaa\.gov\/?/i,"/proxy/nhc/")}const Db="/proxy/geocode/reverse",Lb=1100,Bc=1,Hc=4e3;let ep=0;async function _m(n,t){const e=Date.now();if(e-ep<Lb)return{status:"rate-limited"};ep=e;const i=new URLSearchParams({format:"json",lat:n.toFixed(5),lon:t.toFixed(5),zoom:"10",addressdetails:"1"}),s=`${Db}?${i.toString()}`;for(let r=0;r<=Bc;r++){let o;try{o=await fetch(s,{headers:{"Accept-Language":"en"}})}catch(a){if(console.warn(`[earth-clock] geocoder fetch failed (attempt ${r+1}):`,a),r<Bc){await np(Hc);continue}return{status:"unavailable"}}if(o.ok){const a=await o.json().catch(()=>null);if(!a||!a.display_name)return{status:"no-name"};const l=a.address??{},c=l.city??l.town??l.village??l.hamlet??l.suburb??l.county??l.state??l.country??"",h=l.country??"";return{status:"ok",place:{short:c&&h&&c!==h?`${c}, ${h}`:c||h||a.display_name.split(",")[0],full:a.display_name,lat:parseFloat(a.lat),lon:parseFloat(a.lon)}}}if(o.status>=500&&r<Bc){console.warn(`[earth-clock] geocoder ${o.status} (attempt ${r+1}), retrying in ${Hc} ms`),await np(Hc);continue}return console.warn(`[earth-clock] geocoder gave up: HTTP ${o.status}`),{status:"unavailable"}}return{status:"unavailable"}}function np(n){return new Promise(t=>setTimeout(t,n))}const Ib=Date.UTC(2e3,0,1,12,0,0),$n=Math.PI/180,Ub=6378.14;function Nb(n){return(n.getTime()-Ib)/(864e5*36525)}function ns(n){const t=n-360*Math.floor(n/360);return t>=0?t:t+360}const Bh=[[0,0,1,0,6288774,-20905355],[2,0,-1,0,1274027,-3699111],[2,0,0,0,658314,-2955968],[0,0,2,0,213618,-569925],[0,1,0,0,-185116,48888],[0,0,0,2,-114332,-3149],[2,0,-2,0,58793,246158],[2,-1,-1,0,57066,-152138],[2,0,1,0,53322,-170733],[2,-1,0,0,45758,-204586],[0,1,-1,0,-40923,-129620],[1,0,0,0,-34720,108743],[0,1,1,0,-30383,104755],[2,0,0,-2,15327,10321],[0,0,1,2,-12528,0],[0,0,1,-2,10980,79661],[4,0,-1,0,10675,-34782],[0,0,3,0,10034,-23210],[4,0,-2,0,8548,-21636],[2,1,-1,0,-7888,24208],[2,1,0,0,-6766,30824],[1,0,-1,0,-5163,-8379],[1,1,0,0,4987,-16675],[2,-1,1,0,4036,-12831],[2,0,2,0,3994,-10445],[4,0,0,0,3861,-11650],[2,0,-3,0,3665,14403],[0,1,-2,0,-2689,-7003],[2,0,-1,2,-2602,0],[2,-1,-2,0,2390,10056],[1,0,1,0,-2348,6322],[2,-2,0,0,2236,-9884],[0,1,2,0,-2120,5751],[0,2,0,0,-2069,0]],ip=Bh.map(n=>Math.abs(n[1])),Hh=[[0,0,0,1,5128122],[0,0,1,1,280602],[0,0,1,-1,277693],[2,0,0,-1,173237],[2,0,-1,1,55413],[2,0,-1,-1,46271],[2,0,0,1,32573],[0,0,2,1,17198],[2,0,1,-1,9266],[0,0,2,-1,8822],[2,-1,0,-1,8216],[2,0,-2,-1,4324],[2,0,1,1,4200],[2,1,0,-1,-3359],[2,-1,-1,1,2463],[2,-1,0,1,2211],[2,-1,-1,-1,2065],[0,1,-1,-1,-1870],[4,0,-1,-1,1828],[0,1,0,1,-1794],[0,0,0,3,-1749],[0,1,-1,1,-1565],[1,0,0,1,-1491],[0,1,1,1,-1475],[0,1,1,-1,-1410],[0,1,0,-1,-1344],[1,0,0,-1,-1335],[0,0,3,1,1107],[4,0,0,-1,1021],[4,0,-1,1,833]],sp=Hh.map(n=>Math.abs(n[1]));function ym(n){const t=Nb(n),e=ns(218.3164477+481267.88123421*t-.0015786*t*t+t*t*t/538841-t*t*t*t/65194e3),i=ns(297.8501921+445267.1114034*t-.0018819*t*t+t*t*t/545868-t*t*t*t/113065e3),s=ns(357.5291092+35999.0502909*t-1536e-7*t*t+t*t*t/2449e4),r=ns(134.9633964+477198.8675055*t+.0087414*t*t+t*t*t/69699-t*t*t*t/14712e3),o=ns(93.272095+483202.0175233*t-.0036539*t*t-t*t*t/3526e3+t*t*t*t/86331e4),a=1-.002516*t-74e-7*t*t,l=a*a,c=i*$n,h=s*$n,u=r*$n,d=o*$n;let p=0,g=0;for(let z=0;z<Bh.length;z++){const J=Bh[z],st=J[0]*c+J[1]*h+J[2]*u+J[3]*d,lt=ip[z]===0?1:ip[z]===1?a:l;p+=J[4]*lt*Math.sin(st),g+=J[5]*lt*Math.cos(st)}let v=0;for(let z=0;z<Hh.length;z++){const J=Hh[z],st=J[0]*c+J[1]*h+J[2]*u+J[3]*d,lt=sp[z]===0?1:sp[z]===1?a:l;v+=J[4]*lt*Math.sin(st)}const m=ns(119.75+131.849*t)*$n,f=ns(53.09+479264.29*t)*$n,b=ns(313.45+481266.484*t)*$n,S=e*$n;p+=3958*Math.sin(m)+1962*Math.sin(S-d)+318*Math.sin(f),v+=-2235*Math.sin(S)+382*Math.sin(b)+175*Math.sin(m-d)+175*Math.sin(m+d)+127*Math.sin(S-u)-115*Math.sin(S+u);const x=(e+p/1e6)*$n,D=v/1e6*$n,R=(385000.56+g/1e3)/Ub,L=(23.4392911-.0130042*t)*$n,E=Math.cos(D),M=Math.cos(x)*E,P=Math.sin(x)*E,O=Math.sin(D),B=M,W=P*Math.cos(L)-O*Math.sin(L),Y=P*Math.sin(L)+O*Math.cos(L),H=Math.atan2(W,B),K=Math.asin(Y);return{ra:H,dec:K,distance:R}}function xm(n,t=new C){const{ra:e,dec:i,distance:s}=ym(n);return t.set(s*Math.cos(i)*Math.cos(e),s*Math.sin(i),-s*Math.cos(i)*Math.sin(e))}const Fb=696e3/6371,Ob=149597870/6371,kb=1738/6371,rp=1.5;function Sm(n){const t=new C,e=new C;Cl(n,t),xm(n,e);const i=t.clone().negate(),s=e.dot(e),r=e.dot(i);if(r*r-(s-rp*rp)<0)return{hasShadow:!1,surfacePoint:new C,magnitude:0};if(-r<=0)return{hasShadow:!1,surfacePoint:new C,magnitude:0};const a=r*r-(s-1);let l;if(a>=0){const p=-r-Math.sqrt(a);l=e.clone().add(i.clone().multiplyScalar(p))}else l=e.clone().normalize();const c=l.distanceTo(e),h=kb/c,u=Fb/Ob,d=h/u;return{hasShadow:!0,surfacePoint:l,magnitude:d}}function zb(n,t,e=30,i=.95){const s=[],r=e*1e3;let o=0,a=null,l=0,c=0;for(let h=n.getTime();h<=t.getTime();h+=r){l++;const u=new Date(h),d=Sm(u);d.hasShadow&&(c++,d.magnitude>o&&(o=d.magnitude,a=u),d.magnitude>=i&&s.push({time:u,worldPoint:d.surfacePoint,magnitude:d.magnitude}))}return console.log(`[earth-clock] eclipse path: ${s.length}/${l} samples passed mag≥${i} (shadow hit Earth in ${c}; max magnitude ${o.toFixed(4)}${a?` at ${a.toISOString()}`:""})`),s}const Bb={20260812:{id:"20260812",source:"NASA GSFC — Espenak/Meeus SE2026Aug12T predictions",waypoints:[{utc:new Date("2026-08-12T17:01:00Z"),lat:78,lon:105,magnitude:1},{utc:new Date("2026-08-12T17:15:00Z"),lat:74,lon:35,magnitude:1.02},{utc:new Date("2026-08-12T17:30:00Z"),lat:70,lon:-8,magnitude:1.03},{utc:new Date("2026-08-12T17:46:42Z"),lat:64.83,lon:-25.25,magnitude:1.039},{utc:new Date("2026-08-12T18:00:00Z"),lat:58,lon:-22,magnitude:1.035},{utc:new Date("2026-08-12T18:15:00Z"),lat:50,lon:-15,magnitude:1.025},{utc:new Date("2026-08-12T18:30:00Z"),lat:42,lon:-3,magnitude:1.015},{utc:new Date("2026-08-12T18:45:00Z"),lat:33,lon:8,magnitude:1.005},{utc:new Date("2026-08-12T19:00:00Z"),lat:22,lon:25,magnitude:1}]},20270802:{id:"20270802",source:"NASA GSFC — Espenak/Meeus SE2027Aug02T predictions",waypoints:[{utc:new Date("2027-08-02T07:32:00Z"),lat:37,lon:-30,magnitude:1},{utc:new Date("2027-08-02T08:00:00Z"),lat:35,lon:-15,magnitude:1.03},{utc:new Date("2027-08-02T08:30:00Z"),lat:34,lon:-5,magnitude:1.05},{utc:new Date("2027-08-02T09:00:00Z"),lat:32,lon:5,magnitude:1.06},{utc:new Date("2027-08-02T09:30:00Z"),lat:28,lon:20,magnitude:1.07},{utc:new Date("2027-08-02T10:07:00Z"),lat:25.6,lon:33.5,magnitude:1.079},{utc:new Date("2027-08-02T10:30:00Z"),lat:22,lon:43,magnitude:1.07},{utc:new Date("2027-08-02T11:00:00Z"),lat:18,lon:50,magnitude:1.05},{utc:new Date("2027-08-02T11:30:00Z"),lat:12,lon:60,magnitude:1}]},20280722:{id:"20280722",source:"NASA GSFC — Espenak/Meeus SE2028Jul22T predictions (approximate)",waypoints:[{utc:new Date("2028-07-22T01:14:00Z"),lat:-52,lon:95,magnitude:1},{utc:new Date("2028-07-22T01:30:00Z"),lat:-45,lon:100,magnitude:1.02},{utc:new Date("2028-07-22T02:00:00Z"),lat:-32,lon:110,magnitude:1.04},{utc:new Date("2028-07-22T02:30:00Z"),lat:-22,lon:119,magnitude:1.05},{utc:new Date("2028-07-22T02:56:40Z"),lat:-15.7,lon:126.7,magnitude:1.056},{utc:new Date("2028-07-22T03:00:00Z"),lat:-16,lon:128,magnitude:1.056},{utc:new Date("2028-07-22T03:30:00Z"),lat:-22,lon:138,magnitude:1.05},{utc:new Date("2028-07-22T04:00:00Z"),lat:-33.9,lon:151.2,magnitude:1.04},{utc:new Date("2028-07-22T04:15:00Z"),lat:-41,lon:162,magnitude:1.03},{utc:new Date("2028-07-22T04:30:00Z"),lat:-47,lon:174,magnitude:1.01},{utc:new Date("2028-07-22T04:39:00Z"),lat:-49,lon:180,magnitude:1}]},20240408:{id:"20240408",source:"NASA GSFC — Espenak/Meeus SE2024Apr08T predictions",waypoints:[{utc:new Date("2024-04-08T16:39:00Z"),lat:8,lon:-149,magnitude:1},{utc:new Date("2024-04-08T17:30:00Z"),lat:15,lon:-129,magnitude:1.03},{utc:new Date("2024-04-08T18:00:00Z"),lat:19,lon:-116,magnitude:1.05},{utc:new Date("2024-04-08T18:10:00Z"),lat:23.2,lon:-106.4,magnitude:1.056},{utc:new Date("2024-04-08T18:17:18Z"),lat:25.3,lon:-104.1,magnitude:1.0566},{utc:new Date("2024-04-08T18:30:00Z"),lat:29,lon:-100.7,magnitude:1.056},{utc:new Date("2024-04-08T18:35:00Z"),lat:30.3,lon:-97.7,magnitude:1.055},{utc:new Date("2024-04-08T18:50:00Z"),lat:35,lon:-93.5,magnitude:1.054},{utc:new Date("2024-04-08T19:00:00Z"),lat:38,lon:-88.5,magnitude:1.052},{utc:new Date("2024-04-08T19:05:00Z"),lat:39.8,lon:-86.2,magnitude:1.05},{utc:new Date("2024-04-08T19:15:00Z"),lat:42.5,lon:-80,magnitude:1.045},{utc:new Date("2024-04-08T19:25:00Z"),lat:45.5,lon:-73,magnitude:1.04},{utc:new Date("2024-04-08T19:35:00Z"),lat:48,lon:-66,magnitude:1.025},{utc:new Date("2024-04-08T19:55:00Z"),lat:52,lon:-50,magnitude:1}]}};function Hb(n){return Bb[n]}function Gb(n,t){const e=t.getTime(),i=n.waypoints;if(i.length===0||e<i[0].utc.getTime()||e>i[i.length-1].utc.getTime())return null;for(let s=1;s<i.length;s++){const r=i[s-1],o=i[s],a=r.utc.getTime(),l=o.utc.getTime();if(e<a||e>l)continue;const c=(e-a)/(l-a),h=r.lat+(o.lat-r.lat)*c;let u=o.lon-r.lon;u>180&&(u-=360),u<-180&&(u+=360);let d=r.lon+u*c;d>180&&(d-=360),d<-180&&(d+=360);const p=r.magnitude??1,g=o.magnitude??1,v=p+(g-p)*c;return{lat:h,lon:d,magnitude:v}}return null}const Vb="wss://ws1.blitzortung.org/",Wb=5e3;class $b{constructor(t={}){this.events=t}events;ws=null;reconnectTimer=null;stopped=!1;strikeCount=0;lastStrike=null;connectedSince=null;start(){this.ws||this.stopped||(this.stopped=!1,this.connect())}stop(){this.stopped=!0,this.reconnectTimer!==null&&(window.clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws&&(this.ws.close(),this.ws=null)}get stats(){return{count:this.strikeCount,last:this.lastStrike,connectedSince:this.connectedSince}}connect(){this.events.onStatus?.("connecting");try{this.ws=new WebSocket(Vb)}catch(t){this.events.onStatus?.("error",t instanceof Error?t.message:String(t)),this.scheduleReconnect();return}this.ws.onopen=()=>{try{this.ws?.send(JSON.stringify({a:111}))}catch{}this.connectedSince=new Date,this.events.onStatus?.("connected")},this.ws.onmessage=t=>{if(typeof t.data!="string")return;let e;try{e=Xb(t.data)}catch{return}let i;try{i=JSON.parse(e)}catch{return}const s=qa(i.lat),r=qa(i.lon);if(!Number.isFinite(s)||!Number.isFinite(r))return;const o=qa(i.time),a=Number.isFinite(o)?o>1e15?o/1e6:o>1e12?o/1e3:o:Date.now(),l={time:new Date(a),lat:s,lon:r,polarity:qa(i.pol)||0};this.strikeCount++,this.lastStrike=l.time,this.events.onStrike?.(l)},this.ws.onerror=()=>{this.events.onStatus?.("error","WebSocket error")},this.ws.onclose=()=>{this.connectedSince=null,this.ws=null,this.events.onStatus?.("disconnected"),this.stopped||this.scheduleReconnect()}}scheduleReconnect(){this.reconnectTimer!==null||this.stopped||(this.reconnectTimer=window.setTimeout(()=>{this.reconnectTimer=null,this.connect()},Wb))}}function qa(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=parseFloat(n);return Number.isFinite(t)?t:NaN}return NaN}function Xb(n){if(n.length===0)return"";const t={},e=n.split("");let i=e[0],s=i,r=256;for(let o=1;o<e.length;o++){const a=e[o].charCodeAt(0);let l;a<256?l=e[o]:l=t[a]??i+i.charAt(0),s+=l,t[r++]=i+l.charAt(0),i=l}return s}function qb(n){const{width:t,height:e,u:i,v:s}=n,r=new Uint16Array(t*e*4),o=Ip.toHalfFloat,a=o(1);for(let c=0;c<t*e;c++)r[c*4]=o(i[c]),r[c*4+1]=o(s[c]),r[c*4+3]=a;const l=new Yo(r,t,e,tn,Ks);return l.wrapS=ki,l.wrapT=Qe,l.minFilter=Ae,l.magFilter=Ae,l.generateMipmaps=!1,l.needsUpdate=!0,l}const jb="https://gibs.earthdata.nasa.gov/wmts/epsg4326/best",Yb={"250m":[[2,1],[3,2],[5,3],[10,5],[20,10],[40,20],[80,40],[160,80],[320,160]],"500m":[[2,1],[3,2],[5,3],[10,5],[20,10],[40,20],[80,40],[160,80]],"1km":[[2,1],[3,2],[5,3],[10,5],[20,10],[40,20],[80,40]],"2km":[[2,1],[3,2],[5,3],[10,5],[20,10],[40,20]]};async function Zb(n){const{layer:t,date:e,tileMatrixSet:i,zoom:s,ext:r}=n,o=Yb[i];if(!o)throw new Error(`GIBS loader: unknown TileMatrixSet "${i}" — add its matrix dims to MATRIX_DIMS`);if(s<0||s>=o.length)throw new Error(`GIBS loader: zoom ${s} out of range for TileMatrixSet "${i}" (max ${o.length-1})`);const[a,l]=o[s],c=512,h=e.toISOString().slice(0,10),u=document.createElement("canvas");u.width=a*c,u.height=l*c;const d=u.getContext("2d");if(!d)throw new Error("GIBS loader: cannot get 2D canvas context");const p=[];for(let D=0;D<l;D++)for(let A=0;A<a;A++){const R=`${jb}/${t}/default/${h}/${i}/${s}/${D}/${A}.${r}`;p.push(Kb(R,d,A*c,D*c))}await Promise.all(p);const g=4,v=.3,m=32,f=16;let b=0;for(let D=0;D<f;D++)for(let A=0;A<m;A++){const R=Math.floor((A+.5)*u.width/m),L=Math.floor((D+.5)*u.height/f),E=d.getImageData(R,L,1,1).data;.299*E[0]+.587*E[1]+.114*E[2]<g&&b++}const S=b/(m*f);if(S>v)throw new Error(`GIBS mosaic incomplete: ${(S*100).toFixed(1)}% no-data pixels (date ${h})`);const x=new us(u);return x.wrapS=ki,x.wrapT=Qe,x.colorSpace=be,x.minFilter=Ae,x.magFilter=Ae,x.generateMipmaps=!1,x.needsUpdate=!0,x}function Kb(n,t,e,i){return new Promise((s,r)=>{const o=new Image;o.crossOrigin="anonymous",o.onload=()=>{t.drawImage(o,e,i),s()},o.onerror=()=>r(new Error(`GIBS tile failed to load: ${n}`)),o.src=n})}function Jb(n=new Date){const t=new Date(n);return t.setUTCDate(t.getUTCDate()-2),t}async function Qb(n){const t=n.startDate??Jb(),e=n.maxDaysBack??7;let i=null;for(let s=0;s<=e;s++){const r=new Date(t);r.setUTCDate(r.getUTCDate()-s);try{return{texture:await Zb({...n,date:r}),date:r}}catch(o){i=o instanceof Error?o:new Error(String(o)),n.onAttempt?.(r,i)}}throw i??new Error("GIBS fetch failed for every fallback date")}function tE(){const n=[],t=[55,60,65,70,75,80];for(const i of t)for(let s=-180;s<180;s+=.5)n.push(s,i,100),n.push(s,-i,90);const e=new Float32Array(n);return{forecastTime:new Date,data:e,pointCount:n.length/3,maxProbability:100}}function eE(){return{detections:[["California",36.5,-119.5,200],["Amazon",-5,-60,150],["Siberia",65,115,300],["Australia",-33,148,250],["Canada-BC",55,-123,180],["Greece",38.5,22,90],["Congo",-2,23,60],["Indonesia",-1.5,115,140]].flatMap(([e,i,s,r])=>{const o=[];for(let a=0;a<30;a++){const l=(Math.random()-.5)*2.5,c=(Math.random()-.5)*2.5;o.push({lat:i+l,lon:s+c,frp:r*(.4+.6*Math.random()),brightTi4:320+Math.random()*40,daynight:"D"})}return o}),fetchedAt:new Date}}function nE(){return{storms:[["DEBUG-AL01","Athena (test)","MH",115,18.5,-55],["DEBUG-AL02","Boreas (test)","HU",90,28,-78],["DEBUG-EP01","Calypso (test)","TS",55,15,-110],["DEBUG-WP01","Daiyu (test)","TY",105,16,132],["DEBUG-WP02","Erebus (test)","STY",145,13,152],["DEBUG-IO01","Fanindra (test)","TS",48,-12,65],["DEBUG-SH01","Galene (test)","MH",120,-18,95]].map(([t,e,i,s,r,o])=>({id:t,name:e,classification:i,intensityKt:s,pressureMb:Math.round(1010-s*.6),lat:r,lon:o,movementDir:280,movementSpeedKt:12,lastUpdate:new Date().toISOString()})),fetchedAt:new Date}}function iE(){const e=document.createElement("canvas");e.width=1024,e.height=512;const i=e.getContext("2d");i.fillStyle="#103050",i.fillRect(0,0,1024,512),i.globalAlpha=.9;for(let r=0;r<400;r++){const o=(Math.random()-.5)*90,l=((Math.random()-.5)*360+180)/360*1024,c=(90-o)/180*512,h=8+Math.random()*30,u=i.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(255,255,255,0.95)"),u.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=u,i.beginPath(),i.arc(l,c,h,0,Math.PI*2),i.fill()}const s=new us(e);return s.wrapS=ki,s.wrapT=Qe,s.colorSpace=be,s.minFilter=Ae,s.magFilter=Ae,s.generateMipmaps=!1,s.needsUpdate=!0,s}function sE(n){const t=new kn(45,n,.05,3e4);return t.position.set(0,0,3.2),t}function rE(n,t){const e=new em(n,t);return e.enableDamping=!0,e.dampingFactor=.08,e.rotateSpeed=.5,e.minDistance=1.4,e.maxDistance=25e3,e.enablePan=!1,e.autoRotate=!1,e.autoRotateSpeed=.4,e}const oE=document.getElementById("app"),fn=new oS({antialias:!0});fn.setPixelRatio(window.devicePixelRatio);fn.setSize(window.innerWidth,window.innerHeight);oE.appendChild(fn.domElement);const Me=new ul,Mm=new bS;Me.add(Mm.mesh);let op=0;async function vu(n){const t=++op,e=await ES(n);if(!e)return;if(t!==op){e.dispose();return}const i=Me.background;i!==e&&(Me.background=e,Mm.mesh.visible=!1,i?.dispose?.())}vu("lo");const gi=new wS({onDayStatus:n=>Xt.report("day map",{source:"Solar System Scope · 2k_earth_daymap.jpg",...n}),onNightStatus:n=>Xt.report("night map",{source:"Solar System Scope · 2k_earth_nightmap.jpg",...n})});Me.add(gi.mesh);const Rl=new CS;Me.add(Rl.mesh);const Uo=new DS(n=>Xt.report("moon",{source:"NASA / USGS · moon_1024.jpg",...n}));Me.add(Uo.mesh);const eo=new GS;Me.add(eo.mesh);const ys=new XS;ys.setResolution(window.innerWidth,window.innerHeight);Me.add(ys.mesh);const xs=new ks;Me.add(xs.mesh);const pn=new Xn;pn.setResolution(window.innerWidth,window.innerHeight);Me.add(pn.mesh);const un=new oM(1.003);Me.add(un.mesh);const vi=new Ur;Me.add(vi.mesh);const Ss=new zs;Me.add(Ss.mesh);const ms=new Ei;Me.add(ms.mesh);const Vi=new rb,ze=new Nw(Vi);Me.add(ze.mesh);new URLSearchParams(window.location.search).get("markers")==="emoji"&&ze.setMarkerStyle("emoji");const Ms=new Bs;Me.add(Ms.mesh);const tr=new Fn;Me.add(tr.mesh);const er=new ml;Me.add(er.mesh);const Qn=new Do;Me.add(Qn.mesh);const Wo=23.44*Math.PI/180,Gh=new C(0,0,1);function wm(n,t,e){const i=Math.cos(-Wo),s=Math.sin(-Wo),r=n.x*i-n.y*s,o=n.x*s+n.y*i,a=n.z,l=ps(t),c=Math.cos(-l),h=Math.sin(-l);return e.x=r*c+a*h,e.y=o,e.z=-r*h+a*c,e}const Qo=new yM(1.006);Me.add(Qo.mesh);const os=new ss;Me.add(os.mesh);const ge=new nm;ge.resize(window.innerWidth,window.innerHeight);const _l=new qM;gi.attachToEarth(_l.meshGlobe);ge.scene.add(_l.meshFlat);ge.scene.add(eo.flatMesh);ge.scene.add(ys.flatMesh);ge.scene.add(xs.flatMesh);ge.scene.add(pn.flatMesh);ge.scene.add(Ss.flatMesh);ge.scene.add(ms.flatMesh);ge.scene.add(Ms.flatMesh);ge.scene.add(tr.flatMesh);ge.scene.add(vi.flatMesh);ge.scene.add(er.flatMesh);ge.scene.add(os.flatMesh);ge.scene.add(Qn.flatMesh);ge.scene.add(ze.flatMesh);const ta=new zS(fn,65536),gs=new Lr(ta.flatMesh);Me.add(gs.mesh);ge.scene.add(gs.flatMesh);const _u=new fS(16777215,1.4);_u.position.set(50,0,0);Me.add(_u);Me.add(new pS(1054756,.35));const yu=new Ro;Me.add(yu.mesh);const Te=sE(window.innerWidth/window.innerHeight);{const n=20*Math.PI/180,e=ps(new Date)+n;Te.position.set(Math.cos(e)*3.2,.3,-Math.sin(e)*3.2)}const Je=rE(Te,fn.domElement);window.addEventListener("resize",()=>{Te.aspect=window.innerWidth/window.innerHeight,Te.updateProjectionMatrix(),fn.setSize(window.innerWidth,window.innerHeight),gs.resize(window.innerWidth,window.innerHeight),ge.resize(window.innerWidth,window.innerHeight),ys.setResolution(window.innerWidth,window.innerHeight),pn.setResolution(window.innerWidth,window.innerHeight)});const Rn=new C,Pi=new C,Gc=new C,ap=new C,No={lat:0,lon:0},Fo={lat:0,lon:0};let Pe=Date.now(),lp=performance.now(),cp=null;window.__orrery={particles:ta,globe:gi,atmosphere:Rl,trails:gs,coastlines:eo,plates:ys,volcanoes:xs,clouds:un,aurora:vi,fires:Ss,earthquakes:ms,hurricanes:Ms,hurricaneTracks:er,lightning:tr,overlay:Qo,eclipse:Qn,sun:yu,useTestData:hE,useLiveData:uE,findMoon:Tm,jumpToEclipse:n=>{const t=n?Zr.find(e=>e.id===n):zr??null;if(!t){console.warn(`[earth-clock] jumpToEclipse: ${n?`id "${n}" not found`:"no upcoming eclipse"}; available ids: ${Zr.map(e=>e.id).join(", ")}`);return}Su(t)},satelliteTracker:Vi,satelliteLayer:ze,satellites:()=>Vi.snapshot(new Date(Pe))};const aE=["wind","fires","lightning","hurricanes","storm-tracks","aurora","kp","viirs","gfs-clouds","mslp","temp","rh","tpw","tcw","coastlines","day map","night map","earthquakes","plates","volcanoes","moon","eclipse","satellites"],Xt=new a1;Xt.setOrder(aE);Xt.report("day map",{source:"Solar System Scope · 2k_earth_daymap.jpg"});Xt.report("night map",{source:"Solar System Scope · 2k_earth_nightmap.jpg"});Xt.report("moon",{source:"NASA / USGS · moon_1024.jpg"});const Zt=new o1,lE=[["wind","NOAA GFS · surface wind","fetching surface wind…"],["fires","NASA FIRMS · VIIRS S-NPP NRT","fetching FIRMS detections…"],["earthquakes","USGS · earthquake feed (past week)","fetching earthquake feed…"],["lightning","Blitzortung · community WebSocket","connecting to Blitzortung…"],["hurricanes","NHC · CurrentStorms.json","fetching active storms…"],["aurora","NOAA SWPC · Ovation aurora forecast","fetching SWPC Ovation…"],["kp","NOAA SWPC · planetary K-index","fetching SWPC K-index…"],["satellites","CelesTrak GP · orbital elements","fetching orbital elements…"],["viirs","NASA GIBS · VIIRS NOAA-20 True Color","fetching VIIRS mosaic…"],["gfs-clouds","NOAA GFS · cloud cover","fetching GFS cloud cover…"],["mslp","NOAA GFS · MSLP","fetching MSLP…"],["temp","NOAA GFS · 2 m temperature","fetching temperature…"],["rh","NOAA GFS · 2 m relative humidity","fetching RH…"],["tpw","NOAA GFS · total precipitable water","fetching TPW…"],["tcw","NOAA GFS · total cloud water","fetching TCW…"],["coastlines","Natural Earth · 50 m physical","fetching coastlines…"],["plates","PB2002 (Bird 2003) · tectonicplates","fetching plate boundaries…"],["volcanoes","Smithsonian GVP · Volcanoes of the World","fetching volcano list…"]];for(const[n,t,e]of lE)Xt.report(n,{source:t,detail:e});const xu=new c1(document.body,Xt);xu.onClose(()=>{Gt.setLayer("data",!1)});const Kr=new v1(document.body,{onSnapToLive:()=>{Pe=Date.now()},onClose:()=>{Gt.setLayer("clock",!1)}}),dn=new T1(document.body);let Vc=1;const Le=new R1(document.body,{onScrubTo:n=>{Pe=n,window.__orreryTimeWarp!==0&&(Vc=window.__orreryTimeWarp??1,window.__orreryTimeWarp=0)},onStep:n=>{Pe+=n},onPlayPause:()=>{const n=window.__orreryTimeWarp??1;n===0?window.__orreryTimeWarp=Vc||1:(Vc=n,window.__orreryTimeWarp=0)},onClose:()=>bm()});function bm(){io(null),Dn=null,Gt.setLayer("eclipse",!1),Pe=Date.now(),window.__orreryTimeWarp=1}const ue={lat:0,lon:0,visible:!1,place:"",zone:null},Zn=new z1(document.body,{onJumpSolar:n=>{Su(n),window.matchMedia("(max-width: 600px)").matches&&setTimeout(()=>Zn.setVisible(!1),0)},onJumpLunar:n=>{Em(n),window.matchMedia("(max-width: 600px)").matches&&setTimeout(()=>Zn.setVisible(!1),0)},onTabChange:n=>{n==="lunar"?io(null):Dn=null,Le.setMode(n)},onClose:()=>bm()}),Gt=new t1(document.body,{globe:gi,atmosphere:Rl,moon:Uo,coastlines:eo,plates:ys,volcanoes:xs,timezoneLayer:pn,clouds:un,aurora:vi,fires:Ss,earthquakes:ms,hurricanes:Ms,hurricaneTracks:er,lightning:tr,overlay:Qo,radiusVectors:os,eclipse:Qn,flatMap:ge,trails:gs,satellites:ze},{data:xu,clock:Kr,location:dn,eclipse:Zn});Gt.onFindMoon(()=>Tm());Gt.onFindIss(()=>{nr("iss"),Pl("iss")});Gt.onShowCrew(()=>Im());Gt.onSkyboxHiResChange(n=>{vu(n?"hi":"lo")});Gt.isSkyboxHiRes()&&vu("hi");dn.onClear(()=>{pn.setReferenceZone(null),Gt.setLayer("location",!1)});dn.onGeolocate((n,t)=>{no(n,t,"geolocation")});dn.onSunBeam(()=>no(No.lat,No.lon,"sun"));dn.onMoonBeam(()=>no(Fo.lat,Fo.lon,"moon"));function no(n,t,e){_l.setLocation(n,t),_l.setVisible(!0),dn.setLocation(n,t,e),ue.lat=n,ue.lon=t,ue.visible=!0,ue.place=`${Math.abs(n).toFixed(2)}°${n>=0?"N":"S"}, ${Math.abs(t).toFixed(2)}°${t>=0?"E":"W"}`,pn.loadForLookup();const i=pn.findZoneAt(n,t);dn.setPinnedZone(i.ianaName||null,i.utcOffset),ue.zone=i.ianaName||null,pn.setReferenceZone(i.ianaName||null),Le.setPlaceName(`${n.toFixed(2)}°, ${t.toFixed(2)}°`),console.log(`[earth-clock] pinned via ${e}: ${n.toFixed(2)}, ${t.toFixed(2)}`),_m(n,t).then(s=>{switch(s.status){case"ok":dn.setPlaceName(s.place.short),Le.setPlaceName(s.place.short),ue.lat===n&&ue.lon===t&&(ue.place=s.place.short);break;case"no-name":dn.setPlaceName(null);break;case"unavailable":dn.setPlaceName("geocoder unavailable");break}})}const yl=new gS,as=new Nt,cE=5;let bo=null;fn.domElement.addEventListener("pointerdown",n=>{bo={x:n.clientX,y:n.clientY}});fn.domElement.addEventListener("click",n=>{if(bo){const r=n.clientX-bo.x,o=n.clientY-bo.y;if(bo=null,Math.hypot(r,o)>cE)return}const t=fn.domElement.getBoundingClientRect(),e=Gt.isMapMode()?ze.pickFlat(n.clientX,n.clientY,t,ge.camera):ze.pickGlobe(n.clientX,n.clientY,t,Te);if(e){nr(e);return}if(!Gt.isLocationActive())return;as.x=(n.clientX-t.left)/t.width*2-1,as.y=-((n.clientY-t.top)/t.height)*2+1;let i,s;if(Gt.isMapMode()){const r=new C(as.x,as.y,0).unproject(ge.camera);if(Math.abs(r.y)>.5)return;s=nm.wrapWorldX(r.x)*180,i=r.y*180}else{yl.setFromCamera(as,Te);const r=yl.intersectObject(gi.earthMesh,!1);if(!r.length)return;({lat:i,lon:s}=gi.worldToLatLon(r[0].point))}no(i,s,"click")});fn.domElement.addEventListener("dblclick",n=>{if(Gt.isMapMode())return;const t=fn.domElement.getBoundingClientRect();as.x=(n.clientX-t.left)/t.width*2-1,as.y=-((n.clientY-t.top)/t.height)*2+1,yl.setFromCamera(as,Te);const e=yl.intersectObject(gi.earthMesh,!1);if(!e.length)return;const{lat:i,lon:s}=gi.worldToLatLon(e[0].point);no(i,s,"click"),Gt.setLayer("location",!0)});function Su(n){if(io(n),Dn=null,Le.setMode("solar"),Pe=n.startUtc.getTime()-6e4,window.__orreryTimeWarp=60,Gt.setLayer("eclipse",!0),Gt.setLayer("clock",!0),Kr.setControlsExpanded(!0),!ue.visible&&ui){const t=ui.waypoints.reduce((e,i)=>(i.magnitude??0)>(e.magnitude??0)?i:e,ui.waypoints[0]);no(t.lat,t.lon,"click")}console.log(`[earth-clock] jumped to T-1m of ${n.name} (peak ${n.peakUtc.toISOString()}). Set window.__orreryTimeWarp = 1 to stop the warp.`)}function Em(n){Dn=n,io(null),Zn.setSelected("lunar",n.id),Le.setMode("lunar"),Le.setEclipseWindow(n.startUtc,n.endUtc,n.peakUtc),Pe=n.startUtc.getTime()-6e4,window.__orreryTimeWarp=60,Gt.setLayer("eclipse",!0),Gt.setLayer("clock",!0),Kr.setControlsExpanded(!0),console.log(`[earth-clock] jumped to T-1m of ${n.name} (peak ${n.peakUtc.toISOString()}). Set window.__orreryTimeWarp = 1 to stop the warp.`)}function Tm(){if(Pi.lengthSq()<.01){console.warn("[orrery] findMoon: moon position not yet computed");return}const n=Math.min(Pi.length()*1.5,199);Te.position.copy(Pi).normalize().multiplyScalar(n),Je.target.set(0,0,0),Je.update(),console.log(`[orrery] find moon: camera repositioned to ${n.toFixed(1)} r along moon direction`)}let rl=null;function hE(){console.log("[orrery] debug: loading fixture data"),rl=Gt.activeCloudSource();const n=tE(),t=eE(),e=nE();vi.update(n),Ss.update(t),Ms.update(e);const i=iE();un.setTexture(i),ge.setCloudTexture(i),Gt.setLayer("cloudsViirs",!0),Gt.setLayer("aurora",!0),Gt.setLayer("fires",!0),Gt.setLayer("hurricanes",!0),Zt.info("clouds","fixture: procedural noise (1024×512)"),Zt.info("aurora",`fixture: ${n.pointCount} pts in 6 bands ±55°…±80°`),Zt.info("fires",`fixture: ${t.detections.length} pts across 8 known fire zones`),Zt.info("hurricanes",`fixture: ${e.storms.length} storms in every basin`)}function uE(){console.log("[orrery] debug: restoring live data"),km(),Mu(),wu(),bu(),Au(),rl&&rl!==Gt.activeCloudSource()&&Gt.setLayer(rl,!0),$o()}const xl=new j1;xl.getWindGrid(new Date).then(n=>{ta.setWindTexture(qb(n)),Zt.info("wind",`${n.width}×${n.height}, valid ${n.validTime.toISOString().slice(0,16)}Z`),Xt.report("wind",{source:"NOAA GFS surface (via earth-clock weather-service)",fetched:new Date,detail:`valid ${n.validTime.toISOString().slice(0,13)}Z`,refreshSeconds:6*3600})}).catch(n=>{Zt.warn("wind",`load failed: ${n.message??n}`),Xt.report("wind",{source:"NOAA GFS surface",error:String(n.message??n)})});const Vh={mslp:{type:"mean_sea_level_pressure",registryKey:"mslp",sourceLabel:"NOAA GFS · MSLP",vmin:96e3,vmax:104e3,palette:"pressure",label:"Atmospheric pressure",format:n=>`${Math.round(n/100)} hPa`},temp:{type:"temp",registryKey:"temp",sourceLabel:"NOAA GFS · 2 m temperature",vmin:240,vmax:310,palette:"temperature",label:"Temperature at 2 m",format:n=>`${Math.round(n-273.15)} °C`},rh:{type:"relative_humidity",registryKey:"rh",sourceLabel:"NOAA GFS · 2 m relative humidity",vmin:0,vmax:100,palette:"humidity",label:"Relative humidity at 2 m",format:n=>`${Math.round(n)}%`},tpw:{type:"total_precipitable_water",registryKey:"tpw",sourceLabel:"NOAA GFS · total precipitable water",vmin:0,vmax:70,palette:"water",label:"Total precipitable water",format:n=>`${Math.round(n)} mm`},tcw:{type:"total_cloud_water",registryKey:"tcw",sourceLabel:"NOAA GFS · total cloud water",vmin:0,vmax:2,palette:"cloud",label:"Total cloud water",format:n=>`${n.toFixed(1)} kg/m²`}},Am={};Object.keys(Vh).forEach(n=>{const t=Vh[n];xl.getScalar(t.type,new Date).then(e=>{Am[n]=e;const i=e.validTime.toISOString().slice(0,13);Zt.info(t.registryKey,`${e.width}×${e.height}, valid ${i}Z`),Xt.report(t.registryKey,{source:t.sourceLabel,fetched:new Date,detail:`valid ${i}Z`,refreshSeconds:6*3600}),Gt.activeOverlay()===n&&Cm()}).catch(e=>{Zt.warn(t.registryKey,`load failed: ${e.message??e} — run \`npm run weather-service\` from the repo root`),Xt.report(t.registryKey,{source:t.sourceLabel,error:String(e.message??e)})})});const Wh=new L1(document.body);function Cm(){const n=Gt.activeOverlay();if(!n)return;const t=Am[n],e=Vh[n];!t||!e||(Qo.setData(t,e.vmin,e.vmax,e.palette),Wh.update({label:e.label,palette:e.palette,displayMin:e.format(e.vmin),displayMid:e.format((e.vmin+e.vmax)/2),displayMax:e.format(e.vmax)}),Wh.setVisible(!0))}Gt.onOverlayChange(n=>{n?Cm():Wh.setVisible(!1)});let Mn=null;async function dE(){Zt.pending("gfs-clouds","fetching GFS cloud cover…");try{const n=await xl.getScalar("total_cloud_cover",new Date),t=n.validTime.toISOString().slice(0,13);Mn={grid:n,vmin:0,vmax:100,sourceLabel:"NOAA GFS · total cloud cover (TCDC)",detail:`TCDC valid ${t}Z`},Zt.info("gfs-clouds",`${n.width}×${n.height}, TCDC valid ${t}Z`),Xt.report("gfs-clouds",{source:Mn.sourceLabel,fetched:new Date,detail:Mn.detail,refreshSeconds:6*3600}),Gt.activeCloudSource()==="cloudsGfs"&&$o();return}catch(n){Zt.pending("gfs-clouds",`TCDC unavailable (${n.message?.split(":")[0]??"error"}); trying TCW fallback…`)}try{const n=await xl.getScalar("total_cloud_water",new Date),t=n.validTime.toISOString().slice(0,13);Mn={grid:n,vmin:0,vmax:1,sourceLabel:"NOAA GFS · total cloud water (TCW)",detail:`TCW fallback, valid ${t}Z — add :TCDC: pattern + restart weather-service for native cover`},Zt.info("gfs-clouds",`${n.width}×${n.height}, TCW fallback valid ${t}Z`),Xt.report("gfs-clouds",{source:Mn.sourceLabel,fetched:new Date,detail:Mn.detail,refreshSeconds:6*3600}),Gt.activeCloudSource()==="cloudsGfs"&&$o()}catch(n){Zt.warn("gfs-clouds",`both TCDC and TCW failed: ${n.message??n} — run \`npm run weather-service\` from the repo root`),Xt.report("gfs-clouds",{source:"NOAA GFS · cloud cover",error:String(n.message??n)})}}dE();let Xs=null,hp=!1;function $o(){const n=Gt.activeCloudSource();if(!n){un.mesh.visible=!1;return}un.mesh.visible=!0,n==="cloudsViirs"?Xs?un.setTexture(Xs):un.mesh.visible=!1:n==="cloudsGfs"?Mn?un.setScalarField(Mn.grid,Mn.vmin,Mn.vmax):un.mesh.visible=!1:n==="cloudsGoes"&&(hp||(hp=!0,console.warn("[orrery] GOES geostationary composite not yet implemented — falling back to whichever source has data")),Xs?un.setTexture(Xs):Mn?un.setScalarField(Mn.grid,Mn.vmin,Mn.vmax):un.mesh.visible=!1)}Gt.onCloudsChange(()=>$o());fetch("/data/earth-topo.json").then(n=>n.ok?n.json():Promise.reject(new Error(`HTTP ${n.status}`))).then(n=>{eo.loadFromTopology(n,"coastline_50m"),Zt.info("coastlines","Natural Earth 50 m loaded"),Xt.report("coastlines",{source:"Natural Earth · 50 m physical",bundled:!0})}).catch(n=>{Zt.warn("coastlines",`load failed: ${n.message??n}`),Xt.report("coastlines",{source:"Natural Earth 50 m",error:String(n.message??n)})});fetch("/data/plates.json").then(n=>n.ok?n.json():Promise.reject(new Error(`HTTP ${n.status}`))).then(n=>{ys.load(n),Zt.info("plates",`PB2002 loaded (${n.lines.length} boundary lines)`),Xt.report("plates",{source:"PB2002 (Bird 2003) · tectonicplates",bundled:!0})}).catch(n=>{Zt.warn("plates",`load failed: ${n.message??n}`),Xt.report("plates",{source:"PB2002 tectonic plates",error:String(n.message??n)})});let ol=[],Rm=[];function Pm(){if(ol.length===0)return;const n=sw(Rm,ol);xs.setErupting(n),Zt.info("volcanoes",`${n.size} erupting (FIRMS cross-ref, ${ol.length} known volcanoes)`)}fetch("/data/volcanoes.json").then(n=>n.ok?n.json():Promise.reject(new Error(`HTTP ${n.status}`))).then(n=>{xs.load(n),ol=n.volcanoes,Pm(),Zt.info("volcanoes",`GVP loaded (${n.volcanoes.length} volcanoes)`),Xt.report("volcanoes",{source:"Smithsonian GVP · Volcanoes of the World",bundled:!0})}).catch(n=>{Zt.warn("volcanoes",`load failed: ${n.message??n}`),Xt.report("volcanoes",{source:"Smithsonian GVP",error:String(n.message??n)})});function Mu(){Z1().then(n=>{vi.update(n);const t=n.forecastTime.toISOString().slice(11,16),e=n.maxProbability<5?"very quiet":n.maxProbability<15?"quiet":n.maxProbability<30?"moderate":n.maxProbability<50?"active":n.maxProbability<75?"storm":"severe";Zt.info("aurora",`${n.pointCount} pts, fc ${t}Z, max ${n.maxProbability}% (${e})`),Xt.report("aurora",{source:"NOAA SWPC · Ovation aurora forecast",fetched:new Date,detail:`fc ${t}Z · peak ${n.maxProbability}% (${e})`,refreshSeconds:300})}).catch(n=>{Zt.warn("aurora",`load failed: ${n.message??n}`),Xt.report("aurora",{source:"NOAA SWPC Ovation",error:String(n.message??n)})})}Mu();setInterval(Mu,300*1e3);function Dm(){J1().then(n=>{const t=Q1(n.kp),e=tw(n.kp);Zt.info("kp",`Kp ${n.kp.toFixed(1)} (${t}), aurora visible above ~${e}° mag-lat`),vi.setKp(n.kp),Xt.report("kp",{source:"NOAA SWPC · planetary K-index",fetched:new Date,detail:`Kp ${n.kp.toFixed(1)} (${t}) · visible above ~${e}°`,refreshSeconds:60})}).catch(n=>{Zt.warn("kp",`load failed: ${n.message??n}`),Xt.report("kp",{source:"NOAA SWPC planetary K-index",error:String(n.message??n)})})}Dm();setInterval(Dm,300*1e3);function wu(){nw().then(n=>{Ss.update(n),Rm=n.detections,Pm(),Zt.info("fires",`${n.detections.length} detections`),Xt.report("fires",{source:"NASA FIRMS · VIIRS S-NPP NRT",fetched:new Date,detail:`${n.detections.length} detections · last 24 h`,refreshSeconds:3600})}).catch(n=>{Zt.warn("fires",`load failed: ${n.message??n}`),Xt.report("fires",{source:"NASA FIRMS VIIRS",error:String(n.message??n)})})}wu();setInterval(wu,3600*1e3);function bu(){rw().then(n=>{ms.update(n),Zt.info("earthquakes",`${n.events.length} events`),Xt.report("earthquakes",{source:"USGS · earthquake feed (past week)",fetched:new Date,detail:`${n.events.length} events · last 7 days`,refreshSeconds:900})}).catch(n=>{Zt.warn("earthquakes",`load failed: ${n.message??n}`),Xt.report("earthquakes",{source:"USGS earthquake feed",error:String(n.message??n)})})}bu();setInterval(bu,900*1e3);function Lm(){ow().then(n=>{Vi.setElements(n.byNorad),ze.rebuildVisuals(),Eu=n.generated?.getTime()??Date.now(),Fm();const t=Vi.summary(new Date);Zt.info("satellites",t),Xt.report("satellites",{source:n.fallback?"CelesTrak GP · bundled snapshot":"CelesTrak GP · orbital elements",fetched:n.generated??new Date,detail:t,refreshSeconds:14400})}).catch(n=>{Zt.warn("satellites",`load failed: ${n.message??n}`),Xt.report("satellites",{source:"CelesTrak GP",error:String(n.message??n)})})}Lm();setInterval(Lm,3600*1e3);let Sl=null;aw().then(n=>{Sl=n.updated?n:null}).catch(n=>Zt.warn("satellites",`crew.json: ${n.message??n}`));const Ue=new Kw(document.body);let on=null,up=0,Eo=null,$h=0,Xh=0;function nr(n){on=n,ze.setSelected(n),Eo=null,$h=0,Xh=0;const t=n?Ko(n):void 0;if(!t){Ue.hide();return}Gt.setLayer(t.id,!0),Ue.show(t,Sl?Sl.stations[t.id]??[]:null),Ue.setRiding(En?.id===t.id)}Ue.onClose(()=>nr(null));Ue.onShowCrew(()=>Im());Ue.onShowStation(n=>{nr(n),Pl(n)});Ue.onRequestPin(()=>Gt.setLayer("location",!0));Ue.onCalendar(n=>{const t=on?Ko(on):void 0;t&&Zw(n,t.name,ue.place)});Ue.onWatchPass(n=>mE(n));dn.onNextPass(()=>{const n=Nm(new Date(Pe));n&&nr(n.id)});function Im(){on=null,ze.setSelected(null),Ue.showCrew(Sl,Vo)}const Um=10;let Eu=0,Kn=null,Wc=null,$c=0,dp=0;function Tu(){return`${ue.lat.toFixed(4)},${ue.lon.toFixed(4)}|${Eu}`}function fE(n){if(!ue.visible||!Eu)return;const t=Tu(),e=n.getTime();if(Kn&&Kn.key===t&&e>=Kn.from-36e5&&e<=Kn.from+864e5||Wc===t)return;Wc=t;const s=++$c,r={lat:ue.lat,lon:ue.lon};(async()=>{const o=new Map;for(const a of Vi.all()){if(!a.spec.crewed||!a.propagator||kr(a.propagator,n)==="unknown")continue;const l=await Ww(a.propagator,r,n,{days:Um,stdMag:a.spec.stdMagnitude,cancelled:()=>s!==$c});if(!l)return;o.set(a.spec.id,l)}s===$c&&(Kn={key:t,from:e,bySat:o},Wc=null)})()}function Nm(n){if(!Kn||Kn.key!==Tu())return null;let t=null;for(const[e,i]of Kn.bySat){const s=i.find(r=>r.end>n);s&&(!t||s.start<t.pass.start)&&(t={id:e,pass:s})}return t}function pE(n,t){if(t-dp<1e3)return;dp=t,fE(n);const e=Kn&&Kn.key===Tu()?Kn:null,i=ue.visible?Nm(n):null;if(dn.setNextPass(i?{station:Ko(i.id)?.shortName??i.id,when:i.pass.start<=n?"overhead now":Oh(i.pass.start,n,ue.zone??void 0),detail:mu(i.pass)}:null),!on)return;const s=Vi.get(on)?.propagator;let r;ue.visible?!s||kr(s,n)==="unknown"?r={kind:"unknown"}:e?r={kind:"ready",place:ue.place,days:Um,now:n,passes:e.bySat.get(on)??[],timeZone:ue.zone??void 0}:r={kind:"computing",place:ue.place}:r={kind:"no-pin"},Ue.setPasses(r)}function mE(n){if(ir(),Pe=n.start.getTime()-6e4,window.__orreryTimeWarp=10,Gt.setLayer("clock",!0),Kr.setControlsExpanded(!0),Gt.isMapMode())return;const t=new Date(Pe),e=Cu(ue.lat,ue.lon,Ml).applyAxisAngle(gE,ps(t)).applyAxisAngle(Gh,Wo);Te.position.copy(e).normalize().multiplyScalar(2.2),Je.target.set(0,0,0),Je.update(),al=ps(t)}const gE=new C(0,1,0);Ue.onCentre(()=>{on&&Pl(on)});Ue.onSwitch(n=>{const t=En?.path.view;nr(n),t&&Dl(n,t)});Ue.onRide(()=>{on&&(En?.id===on?ir():Dl(on))});function Pl(n){if(!Gt.isMapMode()){if(ir(),!ze.worldPosition(n,new Date(Pe),Ml)){console.warn(`[earth-clock] centre on ${n}: no position yet (orbital elements not loaded, or too far from today)`);return}Te.position.copy(Ml).normalize().multiplyScalar(2.4),Je.target.set(0,0,0),Je.update()}}const Ml=new C;function vE(n,t){if(!on||t-up<250)return;up=t;const e=on,i=ze.state(e),s=Vi.get(e)?.propagator;if(!i||!s){Ue.update(null);return}(t-$h>2e3||Eo&&Eo.at<n)&&(Eo=Vi.nextShadowChange(e,n),$h=t),Ue.update({...i,elementAgeHours:(n.getTime()-s.epoch.getTime())/36e5,nextChange:Eo,now:n}),i.age!=="unknown"&&t-Xh>6e4&&(Xh=t,_m(i.lat,i.lon).then(r=>{on===e&&(r.status==="ok"?Ue.setPlace(`over ${r.place.short}`):r.status==="no-name"&&Ue.setPlace("over the ocean"))}))}let Fm=()=>{};const Om=new Promise(n=>{Fm=n}),_o=new URLSearchParams(window.location.search).get("sat");_o&&Om.then(()=>{if(!Ko(_o)){console.warn(`[earth-clock] ?sat=${_o}: unknown satellite id`);return}nr(_o),Pl(_o)});const _E=5e-4,Xo=300;let En=null;function Dl(n,t="horizon"){const e=Ko(n);if(!e){console.warn(`[earth-clock] ride along: unknown satellite "${n}"`);return}if(Gt.isMapMode()){console.warn("[earth-clock] ride along: globe view only");return}if(!ze.worldPosition(n,new Date(Pe),Ml)){console.warn(`[earth-clock] ride along ${n}: no position (elements not loaded, or too far from today)`);return}En&&ir();const i=window.__orreryTimeWarp??1;En={id:n,path:new Hw(e.name,(s,r,o)=>ze.worldState(n,s,r,o),t),saved:{pos:Te.position.clone(),target:Je.target.clone(),up:Te.up.clone(),near:Te.near,warp:i}},Math.abs(i)>Xo&&(window.__orreryTimeWarp=Math.sign(i)*Xo),Je.enabled=!1,Je.autoRotate=!1,Te.near=_E,Te.updateProjectionMatrix(),ze.setRiding(n),Ue.setRiding(on===n)}function ir(){if(!En)return;const{saved:n}=En;En=null,Te.position.copy(n.pos),Te.up.copy(n.up),Je.target.copy(n.target),Te.near=n.near,Te.updateProjectionMatrix(),Math.abs(n.warp)>Xo&&(window.__orreryTimeWarp=n.warp),Je.enabled=!0,Je.update(),ze.setRiding(null),Ue.setRiding(!1)}window.__orrery.rideAlong=(n="iss",t)=>{n===null?ir():Dl(n,t)};window.addEventListener("keydown",n=>{!En||n.target instanceof HTMLInputElement||(n.key==="Escape"?ir():(n.key==="v"||n.key==="V")&&(En.path.view=nl[(nl.indexOf(En.path.view)+1)%nl.length]))});const fp=new URLSearchParams(window.location.search).get("view");if(fp){const[n,t]=fp.split("-");Om.then(()=>{Dl(n,nl.includes(t)?t:void 0)})}function Au(){lb().then(n=>{if(Ms.update(n),n.storms.length){const t=n.storms.map(e=>`${e.name||e.id} ${e.intensityKt}kt`).join(", ");Zt.info("hurricanes",`${n.storms.length} active: ${t}`),Xt.report("hurricanes",{source:"NHC · CurrentStorms.json",fetched:new Date,detail:`${n.storms.length} active`,refreshSeconds:900}),ME(n.storms)}else Zt.info("hurricanes","no active storms (off-season)"),Xt.report("hurricanes",{source:"NHC · CurrentStorms.json",fetched:new Date,detail:"no active storms (off-season)",refreshSeconds:900}),er.update([])}).catch(n=>{Zt.warn("hurricanes",`load failed: ${n.message??n}`),Xt.report("hurricanes",{source:"NHC CurrentStorms.json",error:String(n.message??n)})})}Au();setInterval(Au,900*1e3);function Cu(n,t,e=new C){const i=n*Math.PI/180,s=t*Math.PI/180,r=Math.cos(i);return e.set(r*Math.cos(s),Math.sin(i),-r*Math.sin(s))}let zr=null,ui,Dn=null;const yE=24*3600*1e3,xE=22*3600*1e3;let Ls=!0,pp=!1,al=null;const Cr=new C;function io(n){if(zr=n,ui=n?Hb(n.id):void 0,Zn.setSelected("solar",n?.id??null),n&&Le.setEclipseWindow(n.startUtc,n.endUtc,n.peakUtc),!n){Qn.setPath([]),Xt.report("eclipse",{source:"NASA eclipse catalog · bundled",detail:"no upcoming eclipse in catalog",bundled:!0});return}let t,e;ui?(t=ui.waypoints.map(r=>Cu(r.lat,r.lon)),e="NASA centerline"):(t=zb(n.startUtc,n.endUtc,30).map(o=>{const a=new C;return wm(o.worldPoint,o.time,a),a}),e="astronomical fallback (Schlyter)"),Qn.setPath(t);const i=n.peakUtc.toISOString().slice(0,16)+"Z";console.log(`[earth-clock] eclipse loaded: ${n.name} · peak ${i} · ${t.length} path points · source: ${e} · (${n.region})`);const s=ui?"NASA centerline · bundled":"NASA eclipse catalog · bundled";t.length===0?Xt.report("eclipse",{source:s,error:`${n.name} · no path samples (runtime lunar model below threshold)`}):Xt.report("eclipse",{source:s,fetched:new Date,detail:`${n.name} · ${i}`,bundled:!0})}io(O1(new Date));const SE=new $1(document.body,{onOpen:n=>{Gt.setLayer("eclipse",!0),Zn.showTab(n.kind),Zn.setVisible(!0),Zn.setSelected(n.kind,n.id)},onLiveWindowOpen:n=>{if(n.kind==="solar"){const t=rm(n.id);t&&io(t)}else{const t=om(n.id);t&&(Dn=t,Le.setMode("lunar"),Le.setEclipseWindow(t.startUtc,t.endUtc,t.peakUtc))}Gt.setLayer("eclipse",!0),Zn.setVisible(!1),console.log(`[earth-clock] ${n.name} is underway — eclipse layer enabled.`)},isSuppressed:()=>Zn.isVisible()||xu.isVisible()});window.__orrery.eclipseBadge=SE;const Rr=new C;let ja=!1;async function ME(n){const t=await Promise.all(n.map(async i=>{const s={stormId:i.id},r=async c=>{if(c)try{return await Ab(Pb(c))}catch(h){Zt.warn(`tracks:${i.id}`,`KMZ failed: ${h.message}`);return}},[o,a,l]=await Promise.all([r(i.bestTrackKmz),r(i.forecastTrackKmz),r(i.forecastConeKmz)]);return o&&(s.bestTrack=o),a&&(s.forecastTrack=a),l&&(s.forecastCone=l),s}));er.update(t);const e=t.reduce((i,s)=>i+(s.bestTrack?.length??0)+(s.forecastTrack?.length??0)+(s.forecastCone?.length??0),0);e>0&&(Zt.info("hurricane-tracks",`${t.length} storms, ${e} geometry parts`),Xt.report("storm-tracks",{source:"NHC · per-storm KMZ (track + cone)",fetched:new Date,detail:`${t.length} storms · ${e} geometry parts`,refreshSeconds:900}))}const To=[],Oo=new $b({onStrike:n=>{tr.addStrike(n,performance.now()/1e3);const t=performance.now();for(To.push(t);To.length&&t-To[0]>6e4;)To.shift()},onStatus:(n,t)=>{const e=Oo.stats;n==="connected"?(Zt.info("lightning","Blitzortung connected"),Xt.report("lightning",{source:"Blitzortung · community WebSocket",fetched:new Date,detail:"connected · waiting for strikes",refreshSeconds:60})):n==="disconnected"?(Zt.warn("lightning","disconnected — reconnecting in 5 s"),Xt.report("lightning",{source:"Blitzortung · community WebSocket",error:`disconnected (received ${e.count} strikes)`})):n==="error"?(Zt.warn("lightning",t??"WebSocket error"),Xt.report("lightning",{source:"Blitzortung · community WebSocket",error:t??"WebSocket error"})):Zt.pending("lightning","connecting to Blitzortung…")}});Oo.start();setInterval(()=>{if(!Oo.stats.connectedSince)return;const n=To.length;Xt.report("lightning",{source:"Blitzortung · community WebSocket",fetched:Oo.stats.last??new Date,detail:`${n} strikes/min · ${Oo.stats.count} total`,refreshSeconds:60})},1e3);function km(){Zt.pending("clouds","fetching VIIRS mosaic…"),Qb({layer:"VIIRS_NOAA20_CorrectedReflectance_TrueColor",tileMatrixSet:"250m",zoom:3,ext:"jpg",onAttempt:(n,t)=>{const e=n.toISOString().slice(0,10);Zt.warn("clouds",`${e} incomplete (${t.message.split(":").slice(-1)[0].trim()}); trying older`)}}).then(({texture:n,date:t})=>{const e=t.toISOString().slice(0,10);Xs&&Xs.dispose(),Xs=n,Gt.activeCloudSource()==="cloudsViirs"&&$o(),ge.setCloudTexture(n),Zt.info("viirs",`VIIRS NOAA-20 ${e}`),Xt.report("viirs",{source:"NASA GIBS · VIIRS NOAA-20 True Color",fetched:new Date,detail:e,refreshSeconds:24*3600})}).catch(n=>{Zt.warn("viirs",`load failed: ${n.message??n}`),Xt.report("viirs",{source:"NASA GIBS VIIRS NOAA-20",error:String(n.message??n)})})}km();function wE(){const n=new Date(Pe);Cl(n,Rn),xm(n,Pi),Rn.applyAxisAngle(Gh,Wo),Pi.applyAxisAngle(Gh,Wo),_u.position.copy(Rn).multiplyScalar(50),yu.setSunDirection(Rn),gi.setSunDirection(Rn),gi.setRotationY(ps(n)),Rl.setSunDirection(Rn);const t=sm(n),e=ym(n),i=180/Math.PI,s=ds(n)*i,r=t.dec*i,o=mp(t.ra*i-s),a=e.dec*i,l=mp(e.ra*i-s);ge.setSubSolar(r,o),Uo.setPosition(Pi),No.lat=r,No.lon=o,Fo.lat=a,Fo.lon=l,dn.setBeamCoords(No,Fo),os.setSunDirection(Rn),os.setMoonPosition(Pi),os.setSubSolar(r,o),os.setSubLunar(a,l),Gc.copy(Pi).normalize();const h=(1-fs.clamp(Rn.dot(Gc),-1,1))*.5;ap.crossVectors(Rn,Gc),os.setMoonPhase(h,ap.y>0);const u=ps(n);if(ta.setRotationY(u),gs.setRotationY(u),eo.setRotationY(u),ys.setRotationY(u),xs.setRotationY(u),pn.setRotationY(u),pn.update(Pe),un.setRotationY(u),un.setSunDirection(Rn),Ss.setRotationY(u),ms.setRotationY(u),Ms.setRotationY(u),er.setRotationY(u),tr.setRotationY(u),Qo.setRotationY(u),Qn.setRotationY(u),ze.setRotationY(u),ze.setSunDirection(Rn),zr){const m=Pe>=zr.startUtc.getTime()-864e5&&Pe<=zr.endUtc.getTime()+864e5;Qn.setPathVisible(m)}let d=null,p=null,g=1;if(ui){const v=Gb(ui,n);v&&(d=v.lat,p=v.lon,g=v.magnitude)}else{const v=Sm(n);v.hasShadow&&(wm(v.surfacePoint,n,Rr),d=Math.asin(Rr.y)*180/Math.PI,p=Math.atan2(-Rr.z,Rr.x)*180/Math.PI,g=v.magnitude)}if(d!==null&&p!==null?(Cu(d,p,Rr),Qn.setLiveShadow(Rr),ja||(ja=!0,console.log(`[earth-clock] eclipse live shadow ON at ${n.toISOString()} · magnitude ${g.toFixed(3)} · geographic (${d.toFixed(2)}, ${p.toFixed(2)}) · source: ${ui?"NASA centerline":"astronomical"}`))):(Qn.setLiveShadow(null),ja&&(ja=!1,console.log(`[earth-clock] eclipse live shadow OFF at ${n.toISOString()}`))),vi.setRotationY(u),vi.setSunDirection(Rn),Dn){const v=k1(Dn,n);Uo.setEclipseShadow(v,Dn.umbralMagnitude),Le.setLunarFraction(v);const m=Dn.peakUtc.getTime(),f=Dn.umbralMagnitude,b=v>0?`magnitude ${f.toFixed(3)}`:"—";let S;v<=0?S=Dn.type:v>=.98?S=f>1?"totality":"deepest":Pe<m?S=`approaching · ${(v*100).toFixed(0)}%`:S=`receding · ${(v*100).toFixed(0)}%`,Le.setLunarReadout(b,S)}else Uo.setEclipseShadow(0),Le.setLunarFraction(0)}function mp(n){return((n+180)%360+360)%360-180}function zm(n){const t=n-lp;lp=n;const e=window.__orreryTimeWarp??1;Pe+=t*e;const i=new Date(Pe);if(wE(),Kr.setTime(i),pn.dataLoaded!==pp&&(pp=pn.dataLoaded,ue.visible)){const u=pn.findZoneAt(ue.lat,ue.lon);dn.setPinnedZone(u.ianaName||null,u.utcOffset),pn.setReferenceZone(u.ianaName||null),ue.zone=u.ianaName||null}dn.setNow(i),ze.update(i,e,Te,ge.camera,{w:window.innerWidth,h:window.innerHeight}),vE(i,n),pE(i,n);const s=Math.abs(Pe-Date.now());Ls&&s>yE&&(Ls=!1),!Ls&&s<xE&&(Ls=!0),Gt.setLiveFreshnessOk(Ls),Kr.setLiveDataStale(!Ls,Ls?null:i);const r=zr!==null&&Qn.mesh.visible;if(Zn.getActiveTab()==="lunar")Le.setVisible(Dn!==null),Le.setScrubControlsVisible(Dn!==null);else if(ue.visible){const u=F1(ue.lat,ue.lon,i,Rn,Pi),d=Le.update(u);Le.setVisible(d||r),Le.setScrubControlsVisible(r)}else Le.setVisible(!1),Le.setScrubControlsVisible(!1);Le.setSimulatedTime(Pe),Le.setPlaying((window.__orreryTimeWarp??1)!==0),ta.update(t/1e3,n/1e3),vi.setTime(n/1e3),Ss.setTime(n/1e3),ms.setTime(n/1e3),ms.setNow(Date.now()),xs.setTime(n/1e3),Ms.setTime(n/1e3),tr.setTime(n/1e3);const a=ps(new Date(Pe)),l=window.__orreryTimeWarp??1;if(En)Math.abs(l)>Xo&&(window.__orreryTimeWarp=Math.sign(l)*Xo),(Gt.isMapMode()||!En.path.update(i,t/1e3,Te,Je))&&ir();else if(!Gt.isAutoOrbit()&&!Gt.isMapMode()&&al!==null&&l!==0){const u=a-al;if(u!==0){Cr.subVectors(Te.position,Je.target);const d=Math.cos(u),p=Math.sin(u),g=Cr.x,v=Cr.z;Cr.x=g*d+v*p,Cr.z=-g*p+v*d,Te.position.addVectors(Je.target,Cr)}}al=a,En||(Je.autoRotate=Gt.isAutoOrbit(),Je.update());const c=Gt.isMapMode();c!==cp&&(c?ge.enableControls(fn.domElement):ge.disableControls(),cp=c);const h=Gt.isWindVisible();gs.setVisible(h),h&&gs.step(fn),Gt.isMapMode()?(ge.update(),fn.render(ge.scene,ge.camera)):fn.render(Me,Te),requestAnimationFrame(zm)}const Ya=new URLSearchParams(window.location.search).get("eclipse");if(Ya){const n=rm(Ya),t=n?void 0:om(Ya);n?Su(n):t?Em(t):console.warn(`[earth-clock] ?eclipse=${Ya}: no solar or lunar eclipse with that id`)}requestAnimationFrame(zm);
//# sourceMappingURL=index-RZ6qnZbY.js.map
