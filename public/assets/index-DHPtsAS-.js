(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const vc="170",ei={ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mf=0,Jc=1,bf=2,sd=1,wf=2,Kn=3,zn=0,Ke=1,In=2,bi=0,ni=1,Je=2,Qc=3,th=4,Ef=5,Yi=100,Tf=101,Af=102,Rf=103,Cf=104,Pf=200,Df=201,Lf=202,If=203,Sl=204,Ml=205,Uf=206,Nf=207,Ff=208,Of=209,kf=210,Bf=211,zf=212,Hf=213,Gf=214,bl=0,wl=1,El=2,$s=3,Tl=4,Al=5,Rl=6,Cl=7,_c=0,Vf=1,Wf=2,wi=0,Xf=1,$f=2,qf=3,Yf=4,jf=5,Zf=6,Kf=7,rd=300,qs=301,Ys=302,Ya=303,Pl=304,co=306,ri=1e3,Ie=1001,Dl=1002,we=1003,Jf=1004,Zr=1005,_e=1006,yo=1007,Qi=1008,An=1009,ad=1010,od=1011,Fr=1012,yc=1013,ss=1014,Tn=1015,rs=1016,xc=1017,Sc=1018,js=1020,ld=35902,cd=1021,hd=1022,Be=1023,ud=1024,dd=1025,Gs=1026,Zs=1027,Mc=1028,bc=1029,fd=1030,wc=1031,Ec=1033,za=33776,Ha=33777,Ga=33778,Va=33779,Ll=35840,Il=35841,Ul=35842,Nl=35843,Fl=36196,Ol=37492,kl=37496,Bl=37808,zl=37809,Hl=37810,Gl=37811,Vl=37812,Wl=37813,Xl=37814,$l=37815,ql=37816,Yl=37817,jl=37818,Zl=37819,Kl=37820,Jl=37821,Wa=36492,Ql=36494,tc=36495,pd=36283,ec=36284,nc=36285,ic=36286,Qf=3200,tp=3201,md=0,ep=1,yi="",xe="srgb",ir="srgb-linear",ho="linear",ie="srgb",us=7680,eh=519,np=512,ip=513,sp=514,gd=515,rp=516,ap=517,op=518,lp=519,ja=35044,ve=35048,nh="300 es",ti=2e3,Za=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ih=1234567;const Er=Math.PI/180,Or=180/Math.PI;function ii(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function Tc(i,t){return(i%t+t)%t}function cp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function hp(i,t,e){return i!==t?(e-i)/(t-i):0}function Tr(i,t,e){return(1-e)*i+e*t}function up(i,t,e,n){return Tr(i,t,1-Math.exp(-e*n))}function dp(i,t=1){return t-Math.abs(Tc(i,t*2)-t)}function fp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function pp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function mp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function gp(i,t){return i+Math.random()*(t-i)}function vp(i){return i*(.5-Math.random())}function _p(i){i!==void 0&&(ih=i);let t=ih+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yp(i){return i*Er}function xp(i){return i*Or}function Sp(i){return(i&i-1)===0&&i!==0}function Mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wp(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Hr={DEG2RAD:Er,RAD2DEG:Or,generateUUID:ii,clamp:Ce,euclideanModulo:Tc,mapLinear:cp,inverseLerp:hp,lerp:Tr,damp:up,pingpong:dp,smoothstep:fp,smootherstep:pp,randInt:mp,randFloat:gp,randFloatSpread:vp,seededRandom:_p,degToRad:yp,radToDeg:xp,isPowerOfTwo:Sp,ceilPowerOfTwo:Mp,floorPowerOfTwo:bp,setQuaternionFromProperEuler:wp,normalize:ee,denormalize:En};class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,s,r,a,o,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],b=s[1],x=s[4],y=s[7],D=s[2],R=s[5],A=s[8];return r[0]=a*v+o*b+l*D,r[3]=a*m+o*x+l*R,r[6]=a*f+o*y+l*A,r[1]=c*v+h*b+u*D,r[4]=c*m+h*x+u*R,r[7]=c*f+h*y+u*A,r[2]=d*v+p*b+g*D,r[5]=d*m+p*x+g*R,r[8]=d*f+p*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xo.makeScale(t,e)),this}rotate(t){return this.premultiply(xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xo=new Ut;function vd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ep(){const i=kr("canvas");return i.style.display="block",i}const sh={};function xr(i){i in sh||(sh[i]=!0,console.warn(i))}function Tp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ap(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=Vs(i.r),i.g=Vs(i.g),i.b=Vs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?ho:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const rh=[.64,.33,.3,.6,.15,.06],ah=[.2126,.7152,.0722],oh=[.3127,.329],lh=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[ir]:{primaries:rh,whitePoint:oh,transfer:ho,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:ah,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:rh,whitePoint:oh,transfer:ie,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:ah,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}});let ds;class Cp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=kr("canvas")),ds.width=t.width,ds.height=t.height;const n=ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=kr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pp=0;class _d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(So(s[a].image)):r.push(So(s[a]))}else r=So(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function So(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dp=0;class Ue extends as{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Ie,s=Ie,r=_e,a=Qi,o=Be,l=An,c=Ue.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=ii(),this.name="",this.source=new _d(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ri:t.x=t.x-Math.floor(t.x);break;case Ie:t.x=t.x<0?0:1;break;case Dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ri:t.y=t.y-Math.floor(t.y);break;case Ie:t.y=t.y<0?0:1;break;case Dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=rd;Ue.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(p+1)/2,D=(f+1)/2,R=(h+d)/4,A=(u+v)/4,P=(g+m)/4;return x>y&&x>D?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=A/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=P/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=P/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lp extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _d(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Lp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yd extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=Ie,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ip extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=Ie,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*v,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const D=Math.sqrt(x),R=Math.atan2(D,f*b);m=Math.sin(m*R)/D,o=Math.sin(o*R)/D}const y=o*b;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,u=u*m+v*y,m===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new T,hh=new Ei;class Pi{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Jr.subVectors(this.max,cr),fs.subVectors(t.a,cr),ps.subVectors(t.b,cr),ms.subVectors(t.c,cr),hi.subVectors(ps,fs),ui.subVectors(ms,ps),Oi.subVectors(fs,ms);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Oi.z,Oi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Oi.z,0,-Oi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Oi.y,Oi.x,0];return!bo(e,fs,ps,ms,Jr)||(e=[1,0,0,0,1,0,0,0,1],!bo(e,fs,ps,ms,Jr))?!1:(Qr.crossVectors(hi,ui),e=[Qr.x,Qr.y,Qr.z],bo(e,fs,ps,ms,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $n=[new T,new T,new T,new T,new T,new T,new T,new T],vn=new T,Kr=new Pi,fs=new T,ps=new T,ms=new T,hi=new T,ui=new T,Oi=new T,cr=new T,Jr=new T,Qr=new T,ki=new T;function bo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ki.fromArray(i,r);const o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Up=new Pi,hr=new T,wo=new T;class os{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Up.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(wo)),this.expandByPoint(hr.copy(t.center).sub(wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new T,Eo=new T,ta=new T,di=new T,To=new T,ea=new T,Ao=new T;class Gr{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Eo.copy(t).add(e).multiplyScalar(.5),ta.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Eo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ta),o=di.dot(this.direction),l=-di.dot(ta),c=di.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Eo).addScaledVector(ta,d),p}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){To.subVectors(e,t),ea.subVectors(n,t),Ao.crossVectors(To,ea);let a=this.direction.dot(Ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,t);const l=o*this.direction.dot(ea.crossVectors(di,ea));if(l<0)return null;const c=o*this.direction.dot(To.cross(di));if(c<0||l+c>a)return null;const h=-o*di.dot(Ao);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,v,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),a=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Np,t,Fp)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),fi.crossVectors(n,tn),fi.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),fi.crossVectors(n,tn)),fi.normalize(),na.crossVectors(tn,fi),s[0]=fi.x,s[4]=na.x,s[8]=tn.x,s[1]=fi.y,s[5]=na.y,s[9]=tn.y,s[2]=fi.z,s[6]=na.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],b=n[3],x=n[7],y=n[11],D=n[15],R=s[0],A=s[4],P=s[8],w=s[12],M=s[1],C=s[5],H=s[9],O=s[13],W=s[2],$=s[6],G=s[10],Y=s[14],B=s[3],K=s[7],st=s[11],ft=s[15];return r[0]=a*R+o*M+l*W+c*B,r[4]=a*A+o*C+l*$+c*K,r[8]=a*P+o*H+l*G+c*st,r[12]=a*w+o*O+l*Y+c*ft,r[1]=h*R+u*M+d*W+p*B,r[5]=h*A+u*C+d*$+p*K,r[9]=h*P+u*H+d*G+p*st,r[13]=h*w+u*O+d*Y+p*ft,r[2]=g*R+v*M+m*W+f*B,r[6]=g*A+v*C+m*$+f*K,r[10]=g*P+v*H+m*G+f*st,r[14]=g*w+v*O+m*Y+f*ft,r[3]=b*R+x*M+y*W+D*B,r[7]=b*A+x*C+y*$+D*K,r[11]=b*P+x*H+y*G+D*st,r[15]=b*w+x*O+y*Y+D*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+v*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],b=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,x=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,y=h*v*c-g*u*c+g*o*p-a*v*p-h*o*f+a*u*f,D=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,R=e*b+n*x+s*y+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=b*A,t[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*A,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*f+n*l*f)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*A,t[4]=x*A,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*A,t[8]=y*A,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*f-e*u*f)*A,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*f+e*o*f)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=D*A,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,v=a*h,m=a*u,f=o*u,b=l*c,x=l*h,y=l*u,D=n.x,R=n.y,A=n.z;return s[0]=(1-(v+f))*D,s[1]=(p+y)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(d+f))*R,s[6]=(m+b)*R,s[7]=0,s[8]=(g+x)*A,s[9]=(m-b)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=gs.set(s[0],s[1],s[2]).length();const a=gs.set(s[4],s[5],s[6]).length(),o=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);const c=1/r,h=1/a,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ti){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===ti)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Za)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ti){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h;let g,v;if(o===ti)g=(a+r)*u,v=-2*u;else if(o===Za)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gs=new T,_n=new ae,Np=new T(0,0,0),Fp=new T(1,1,1),fi=new T,na=new T,tn=new T,uh=new ae,dh=new Ei;class Gn{constructor(t=0,e=0,n=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Ac{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Op=0;const fh=new T,vs=new Ei,Yn=new ae,ia=new T,ur=new T,kp=new T,Bp=new Ei,ph=new T(1,0,0),mh=new T(0,1,0),gh=new T(0,0,1),vh={type:"added"},zp={type:"removed"},_s={type:"childadded",child:null},Ro={type:"childremoved",child:null};class Ee extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new T,e=new Gn,n=new Ei,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ut}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return fh.copy(t).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ia.copy(t):ia.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(ur,ia,this.up):Yn.lookAt(ia,ur,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(Yn),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zp),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,kp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new T(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new T,jn=new T,Co=new T,Zn=new T,ys=new T,xs=new T,_h=new T,Po=new T,Do=new T,Lo=new T,Io=new re,Uo=new re,No=new re;class pn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),jn.subVectors(n,e),Co.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(jn),l=yn.dot(Co),c=jn.dot(jn),h=jn.dot(Co),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Io.setScalar(0),Uo.setScalar(0),No.setScalar(0),Io.fromBufferAttribute(t,e),Uo.fromBufferAttribute(t,n),No.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Io,r.x),a.addScaledVector(Uo,r.y),a.addScaledVector(No,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),jn.subVectors(t,e),yn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),yn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ys.subVectors(s,n),xs.subVectors(r,n),Po.subVectors(t,n);const l=ys.dot(Po),c=xs.dot(Po);if(l<=0&&c<=0)return e.copy(n);Do.subVectors(t,s);const h=ys.dot(Do),u=xs.dot(Do);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ys,a);Lo.subVectors(t,r);const p=ys.dot(Lo),g=xs.dot(Lo);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(xs,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return _h.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(_h,o);const f=1/(m+v+d);return a=v*f,o=d*f,e.copy(n).addScaledVector(ys,a).addScaledVector(xs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Tc(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fo(a,r,t+1/3),this.g=Fo(a,r,t),this.b=Fo(a,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const n=xd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return jt.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Ce(Oe.r*255,0,255))*65536+Math.round(Ce(Oe.g*255,0,255))*256+Math.round(Ce(Oe.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=xe){jt.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(sa);const n=Tr(pi.h,sa.h,e),s=Tr(pi.s,sa.s,e),r=Tr(pi.l,sa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Ct;Ct.NAMES=xd;let Hp=0;class Di extends as{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=ii(),this.name="",this.blending=ni,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=Ml,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ml&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ve extends Di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ra=Gp();function Gp(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Vp(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ce(i,-65504,65504),ra.floatView[0]=i;const t=ra.uint32View[0],e=t>>23&511;return ra.baseTable[e]+((t&8388607)>>ra.shiftTable[e])}const Sd={toHalfFloat:Vp},Se=new T,aa=new xt;class Pt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ja,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ja&&(t.usage=this.usage),t}}class Md extends Pt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bd extends Pt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends Pt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Wp=0;const ln=new ae,Oo=new Ee,Ss=new T,en=new Pi,dr=new Pi,Re=new T;class Et extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vd(t)?bd:Md)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(en.min,dr.min),en.expandByPoint(Re),Re.addVectors(en.max,dr.max),en.expandByPoint(Re)):(en.expandByPoint(dr.min),en.expandByPoint(dr.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(Ss.fromBufferAttribute(t,c),Re.add(Ss)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new T,l[P]=new T;const c=new T,h=new T,u=new T,d=new xt,p=new xt,g=new xt,v=new T,m=new T;function f(P,w,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(v),o[w].add(v),o[M].add(v),l[P].add(m),l[w].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,w=b.length;P<w;++P){const M=b[P],C=M.start,H=M.count;for(let O=C,W=C+H;O<W;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new T,y=new T,D=new T,R=new T;function A(P){D.fromBufferAttribute(s,P),R.copy(D);const w=o[P];x.copy(w),x.sub(D.multiplyScalar(D.dot(w))).normalize(),y.crossVectors(R,w);const C=y.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,C)}for(let P=0,w=b.length;P<w;++P){const M=b[P],C=M.start,H=M.count;for(let O=C,W=C+H;O<W;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Et,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yh=new ae,Bi=new Gr,oa=new os,xh=new T,la=new T,ca=new T,ha=new T,ko=new T,ua=new T,Sh=new T,da=new T;class Ht extends Ee{constructor(t=new Et,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ko.fromBufferAttribute(u,t),a?ua.addScaledVector(ko,h):ua.addScaledVector(ko.sub(e),h))}e.add(ua)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(oa.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(oa,xh)===null||Bi.origin.distanceToSquared(xh)>(t.far-t.near)**2))&&(yh.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,D=x;y<D;y+=3){const R=o.getX(y),A=o.getX(y+1),P=o.getX(y+2);s=fa(this,f,t,n,c,h,u,R,A,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const b=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=fa(this,a,t,n,c,h,u,b,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,D=x;y<D;y+=3){const R=y,A=y+1,P=y+2;s=fa(this,f,t,n,c,h,u,R,A,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const b=m,x=m+1,y=m+2;s=fa(this,a,t,n,c,h,u,b,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Xp(i,t,e,n,s,r,a,o){let l;if(t.side===Ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===zn,o),l===null)return null;da.copy(o),da.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(da);return c<e.near||c>e.far?null:{distance:c,point:da.clone(),object:i}}function fa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,la),i.getVertexPosition(l,ca),i.getVertexPosition(c,ha);const h=Xp(i,t,e,n,la,ca,ha,Sh);if(h){const u=new T;pn.getBarycoord(Sh,la,ca,ha,u),s&&(h.uv=pn.getInterpolatedAttribute(s,o,l,c,u,new xt)),r&&(h.uv1=pn.getInterpolatedAttribute(r,o,l,c,u,new xt)),a&&(h.normal=pn.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};pn.getNormal(la,ca,ha,d.normal),h.face=d,h.barycoord=u}return h}class Vr extends Et{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function g(v,m,f,b,x,y,D,R,A,P,w){const M=y/A,C=D/P,H=y/2,O=D/2,W=R/2,$=A+1,G=P+1;let Y=0,B=0;const K=new T;for(let st=0;st<G;st++){const ft=st*C-O;for(let Dt=0;Dt<$;Dt++){const Vt=Dt*M-H;K[v]=Vt*b,K[m]=ft*x,K[f]=W,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[f]=R>0?1:-1,h.push(K.x,K.y,K.z),u.push(Dt/A),u.push(1-st/P),Y+=1}}for(let st=0;st<P;st++)for(let ft=0;ft<A;ft++){const Dt=d+ft+$*st,Vt=d+ft+$*(st+1),X=d+(ft+1)+$*(st+1),Q=d+(ft+1)+$*st;l.push(Dt,Vt,Q),l.push(Vt,X,Q),B+=6}o.addGroup(p,B,w),p+=B,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ks(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=Ks(i[e]);for(const s in n)t[s]=n[s]}return t}function $p(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Rc={clone:Ks,merge:He};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ne extends Di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ks(t.uniforms),this.uniformsGroups=$p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ed extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new T,Mh=new xt,bh=new xt;class dn extends Ed{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Mh,bh),e.subVectors(bh,Mh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,bs=1;class jp extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Ms,bs,t,e);s.layers=this.layers,this.add(s);const r=new dn(Ms,bs,t,e);r.layers=this.layers,this.add(r);const a=new dn(Ms,bs,t,e);a.layers=this.layers,this.add(a);const o=new dn(Ms,bs,t,e);o.layers=this.layers,this.add(o);const l=new dn(Ms,bs,t,e);l.layers=this.layers,this.add(l);const c=new dn(Ms,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cc extends Ue{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zp extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vr(5,5,5),r=new ne({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:bi});r.uniforms.tEquirect.value=e;const a=new Ht(s,r),o=e.minFilter;return e.minFilter===Qi&&(e.minFilter=_e),new jp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Bo=new T,Kp=new T,Jp=new Ut;class _i{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Bo.subVectors(n,e).cross(Kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jp.getNormalMatrix(t),s=this.coplanarPoint(Bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new os,pa=new T;class Pc{constructor(t=new _i,e=new _i,n=new _i,s=new _i,r=new _i,a=new _i){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],b=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-p,y-f).normalize(),n[1].setComponents(l+r,d+c,m+p,y+f).normalize(),n[2].setComponents(l+a,d+h,m+g,y+b).normalize(),n[3].setComponents(l-a,d-h,m-g,y-b).normalize(),n[4].setComponents(l-o,d-u,m-v,y-x).normalize(),e===ti)n[5].setComponents(l+o,d+u,m+v,y+x).normalize();else if(e===Za)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(pa.x=s.normal.x>0?t.max.x:t.min.x,pa.y=s.normal.y>0?t.max.y:t.min.y,pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Td(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Qp(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ti extends Et{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const b=f*d-a;for(let x=0;x<c;x++){const y=x*u-r;g.push(y,-b,0),v.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const x=b+c*f,y=b+c*(f+1),D=b+1+c*(f+1),R=b+1+c*f;p.push(x,y,R),p.push(y,D,R)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.widthSegments,t.heightSegments)}}var tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
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
#endif`,nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
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
#endif`,om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lm=`#ifdef USE_BATCHING
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
#endif`,cm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fm=`#ifdef USE_IRIDESCENCE
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
#endif`,pm=`#ifdef USE_BUMPMAP
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bm=`#define PI 3.141592653589793
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
} // validated`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Em=`vec3 transformedNormal = objectNormal;
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
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xm=`uniform bool receiveShadow;
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
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
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
#endif`,Jm=`struct PhysicalMaterial {
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
}`,Qm=`
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c0=`#if defined( USE_POINTS_UV )
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
#endif`,h0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
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
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M0=`#ifdef USE_NORMALMAP
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
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k0=`float getShadowMask() {
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
}`,B0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tg=`uniform sampler2D t2D;
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`#include <common>
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
}`,ag=`#if DEPTH_PACKING == 3200
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
}`,og=`#define DISTANCE
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
}`,lg=`#define DISTANCE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`uniform float scale;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define LAMBERT
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
}`,vg=`#define MATCAP
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
}`,_g=`#define MATCAP
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
}`,yg=`#define NORMAL
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
}`,xg=`#define NORMAL
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
}`,Sg=`#define PHONG
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
}`,Mg=`#define PHONG
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
}`,bg=`#define STANDARD
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
}`,wg=`#define STANDARD
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
}`,Eg=`#define TOON
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
}`,Tg=`#define TOON
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
}`,Ag=`uniform float size;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Pg=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:tm,alphahash_pars_fragment:em,alphamap_fragment:nm,alphamap_pars_fragment:im,alphatest_fragment:sm,alphatest_pars_fragment:rm,aomap_fragment:am,aomap_pars_fragment:om,batching_pars_vertex:lm,batching_vertex:cm,begin_vertex:hm,beginnormal_vertex:um,bsdfs:dm,iridescence_fragment:fm,bumpmap_pars_fragment:pm,clipping_planes_fragment:mm,clipping_planes_pars_fragment:gm,clipping_planes_pars_vertex:vm,clipping_planes_vertex:_m,color_fragment:ym,color_pars_fragment:xm,color_pars_vertex:Sm,color_vertex:Mm,common:bm,cube_uv_reflection_fragment:wm,defaultnormal_vertex:Em,displacementmap_pars_vertex:Tm,displacementmap_vertex:Am,emissivemap_fragment:Rm,emissivemap_pars_fragment:Cm,colorspace_fragment:Pm,colorspace_pars_fragment:Dm,envmap_fragment:Lm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Um,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:$m,envmap_vertex:Fm,fog_vertex:Om,fog_pars_vertex:km,fog_fragment:Bm,fog_pars_fragment:zm,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Wm,lights_pars_begin:Xm,lights_toon_fragment:qm,lights_toon_pars_fragment:Ym,lights_phong_fragment:jm,lights_phong_pars_fragment:Zm,lights_physical_fragment:Km,lights_physical_pars_fragment:Jm,lights_fragment_begin:Qm,lights_fragment_maps:t0,lights_fragment_end:e0,logdepthbuf_fragment:n0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:r0,map_fragment:a0,map_pars_fragment:o0,map_particle_fragment:l0,map_particle_pars_fragment:c0,metalnessmap_fragment:h0,metalnessmap_pars_fragment:u0,morphinstance_vertex:d0,morphcolor_vertex:f0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:v0,normal_fragment_maps:_0,normal_pars_fragment:y0,normal_pars_vertex:x0,normal_vertex:S0,normalmap_pars_fragment:M0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:E0,iridescence_pars_fragment:T0,opaque_fragment:A0,packing:R0,premultiplied_alpha_fragment:C0,project_vertex:P0,dithering_fragment:D0,dithering_pars_fragment:L0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:F0,shadowmap_vertex:O0,shadowmask_pars_fragment:k0,skinbase_vertex:B0,skinning_pars_vertex:z0,skinning_vertex:H0,skinnormal_vertex:G0,specularmap_fragment:V0,specularmap_pars_fragment:W0,tonemapping_fragment:X0,tonemapping_pars_fragment:$0,transmission_fragment:q0,transmission_pars_fragment:Y0,uv_pars_fragment:j0,uv_pars_vertex:Z0,uv_vertex:K0,worldpos_vertex:J0,background_vert:Q0,background_frag:tg,backgroundCube_vert:eg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:sg,depth_vert:rg,depth_frag:ag,distanceRGBA_vert:og,distanceRGBA_frag:lg,equirect_vert:cg,equirect_frag:hg,linedashed_vert:ug,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:vg,meshmatcap_frag:_g,meshnormal_vert:yg,meshnormal_frag:xg,meshphong_vert:Sg,meshphong_frag:Mg,meshphysical_vert:bg,meshphysical_frag:wg,meshtoon_vert:Eg,meshtoon_frag:Tg,points_vert:Ag,points_frag:Rg,shadow_vert:Cg,shadow_frag:Pg,sprite_vert:Dg,sprite_frag:Lg},nt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Ze={basic:{uniforms:He([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:He([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:He([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:He([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:He([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:He([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:He([nt.points,nt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:He([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:He([nt.common,nt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:He([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:He([nt.sprite,nt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:He([nt.common,nt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:He([nt.lights,nt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ze.physical={uniforms:He([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ma={r:0,b:0,g:0},Hi=new Gn,Ig=new ae;function Ug(i,t,e,n,s,r,a){const o=new Ct(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function v(b){let x=!1;const y=g(b);y===null?f(o,l):y&&y.isColor&&(f(y,1),x=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===co)?(h===void 0&&(h=new Ht(new Vr(1,1,1),new ne({name:"BackgroundCubeMaterial",uniforms:Ks(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(x.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Hi)),h.material.toneMapped=jt.getTransfer(y.colorSpace)!==ie,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ht(new Ti(2,2),new ne({name:"BackgroundMaterial",uniforms:Ks(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=jt.getTransfer(y.colorSpace)!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,x){b.getRGB(ma,wd(i)),n.buffers.color.setClear(ma.r,ma.g,ma.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:v,addToRenderList:m}}function Ng(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,C,H,O,W){let $=!1;const G=u(O,H,C);r!==G&&(r=G,c(r.object)),$=p(M,O,H,W),$&&g(M,O,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(M,C,H,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,H){const O=H.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let $=W[C.id];$===void 0&&($={},W[C.id]=$);let G=$[O];return G===void 0&&(G=d(l()),$[O]=G),G}function d(M){const C=[],H=[],O=[];for(let W=0;W<e;W++)C[W]=0,H[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,C,H,O){const W=r.attributes,$=C.attributes;let G=0;const Y=H.getAttributes();for(const B in Y)if(Y[B].location>=0){const st=W[B];let ft=$[B];if(ft===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),st===void 0||st.attribute!==ft||ft&&st.data!==ft.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function g(M,C,H,O){const W={},$=C.attributes;let G=0;const Y=H.getAttributes();for(const B in Y)if(Y[B].location>=0){let st=$[B];st===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(st=M.instanceColor));const ft={};ft.attribute=st,st&&st.data&&(ft.data=st.data),W[B]=ft,G++}r.attributes=W,r.attributesNum=G,r.index=O}function v(){const M=r.newAttributes;for(let C=0,H=M.length;C<H;C++)M[C]=0}function m(M){f(M,0)}function f(M,C){const H=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;H[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),W[M]!==C&&(i.vertexAttribDivisor(M,C),W[M]=C)}function b(){const M=r.newAttributes,C=r.enabledAttributes;for(let H=0,O=C.length;H<O;H++)C[H]!==M[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function x(M,C,H,O,W,$,G){G===!0?i.vertexAttribIPointer(M,C,H,W,$):i.vertexAttribPointer(M,C,H,O,W,$)}function y(M,C,H,O){v();const W=O.attributes,$=H.getAttributes(),G=C.defaultAttributeValues;for(const Y in $){const B=$[Y];if(B.location>=0){let K=W[Y];if(K===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const st=K.normalized,ft=K.itemSize,Dt=t.get(K);if(Dt===void 0)continue;const Vt=Dt.buffer,X=Dt.type,Q=Dt.bytesPerElement,pt=X===i.INT||X===i.UNSIGNED_INT||K.gpuType===yc;if(K.isInterleavedBufferAttribute){const it=K.data,St=it.stride,Tt=K.offset;if(it.isInstancedInterleavedBuffer){for(let Bt=0;Bt<B.locationSize;Bt++)f(B.location+Bt,it.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Bt=0;Bt<B.locationSize;Bt++)m(B.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let Bt=0;Bt<B.locationSize;Bt++)x(B.location+Bt,ft/B.locationSize,X,st,St*Q,(Tt+ft/B.locationSize*Bt)*Q,pt)}else{if(K.isInstancedBufferAttribute){for(let it=0;it<B.locationSize;it++)f(B.location+it,K.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let it=0;it<B.locationSize;it++)m(B.location+it);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let it=0;it<B.locationSize;it++)x(B.location+it,ft/B.locationSize,X,st,ft*Q,ft/B.locationSize*it*Q,pt)}}else if(G!==void 0){const st=G[Y];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(B.location,st);break;case 3:i.vertexAttrib3fv(B.location,st);break;case 4:i.vertexAttrib4fv(B.location,st);break;default:i.vertexAttrib1fv(B.location,st)}}}}b()}function D(){P();for(const M in n){const C=n[M];for(const H in C){const O=C[H];for(const W in O)h(O[W].object),delete O[W];delete C[H]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const H in C){const O=C[H];for(const W in O)h(O[W].object),delete O[W];delete C[H]}delete n[M.id]}function A(M){for(const C in n){const H=n[C];if(H[M.id]===void 0)continue;const O=H[M.id];for(const W in O)h(O[W].object),delete O[W];delete H[M.id]}}function P(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Fg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Og(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Be&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==An&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:D,maxSamples:R}}function kg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new _i,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,x=b*4;let y=f.clippingState||null;l.value=y,y=h(g,d,x,p);for(let D=0;D!==x;++D)y[D]=e[D];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==v;++x,y+=4)a.copy(u[x]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Bg(i){let t=new WeakMap;function e(a,o){return o===Ya?a.mapping=qs:o===Pl&&(a.mapping=Ys),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ya||o===Pl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zp(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Js extends Ed{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fs=4,wh=[.125,.215,.35,.446,.526,.582],ji=20,zo=new Js,Eh=new Ct;let Ho=null,Go=0,Vo=0,Wo=!1;const Xi=(1+Math.sqrt(5))/2,ws=1/Xi,Th=[new T(-Xi,ws,0),new T(Xi,ws,0),new T(-ws,0,Xi),new T(ws,0,Xi),new T(0,Xi,-ws),new T(0,Xi,ws),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Ah{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ho,Go,Vo),this._renderer.xr.enabled=Wo,t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_e,minFilter:_e,generateMipmaps:!1,type:rs,format:Be,colorSpace:ir,depthBuffer:!1},s=Rh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Hg(r,t,e)}return s}_compileMaterial(t){const e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,n,s){const o=new dn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Eh),h.toneMapping=wi,h.autoClear=!1;const p=new Ve({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new Ht(new Vr,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Eh),v=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;ga(s,b*x,f>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qs||t.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ga(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,zo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Th[(s-r-1)%Th.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ht(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ji-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const f=[];let b=0;for(let A=0;A<ji;++A){const P=A/v,w=Math.exp(-P*P/2);f.push(w),A===0?b+=w:A<m&&(b+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[s],D=3*y*(s>x-Fs?s-x+Fs:0),R=4*(this._cubeSize-y);ga(e,D,R,3*y,2*y),l.setRenderTarget(e),l.render(u,zo)}}function zg(i){const t=[],e=[],n=[];let s=i;const r=i-Fs+1+wh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Fs?l=wh[a-i+Fs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,b=new Float32Array(v*g*p),x=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,P=R>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];b.set(w,v*g*R),x.set(d,m*g*R);const M=[R,R,R,R,R,R];y.set(M,f*g*R)}const D=new Et;D.setAttribute("position",new Pt(b,v)),D.setAttribute("uv",new Pt(x,m)),D.setAttribute("faceIndex",new Pt(y,f)),t.push(D),s>Fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rh(i,t,e){const n=new Hn(i,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hg(i,t,e){const n=new Float32Array(ji),s=new T(0,1,0);return new ne({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Ch(){return new ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Ph(){return new ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function Gg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ya||l===Pl,h=l===qs||l===Ys;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ah(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ah(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Vg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&xr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Wg(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let x=0,y=b.length;x<y;x+=3){const D=b[x+0],R=b[x+1],A=b[x+2];d.push(D,R,R,A,A,D)}}else if(g!==void 0){const b=g.array;v=g.version;for(let x=0,y=b.length/3-1;x<y;x+=3){const D=x+0,R=x+1,A=x+2;d.push(D,R,R,A,A,D)}}else return;const m=new(vd(d)?bd:Md)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Xg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*v[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $g(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qg(i,t,e){const n=new WeakMap,s=new re;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let D=o.attributes.position.count*y,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const A=new Float32Array(D*R*4*u),P=new yd(A,D,R,u);P.type=Tn,P.needsUpdate=!0;const w=y*4;for(let C=0;C<u;C++){const H=f[C],O=b[C],W=x[C],$=D*R*4*C;for(let G=0;G<H.count;G++){const Y=G*w;g===!0&&(s.fromBufferAttribute(H,G),A[$+Y+0]=s.x,A[$+Y+1]=s.y,A[$+Y+2]=s.z,A[$+Y+3]=0),v===!0&&(s.fromBufferAttribute(O,G),A[$+Y+4]=s.x,A[$+Y+5]=s.y,A[$+Y+6]=s.z,A[$+Y+7]=0),m===!0&&(s.fromBufferAttribute(W,G),A[$+Y+8]=s.x,A[$+Y+9]=s.y,A[$+Y+10]=s.z,A[$+Y+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new xt(D,R)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Yg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Ad extends Ue{constructor(t,e,n,s,r,a,o,l,c,h=Gs){if(h!==Gs&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gs&&(n=ss),n===void 0&&h===Zs&&(n=js),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:we,this.minFilter=l!==void 0?l:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Rd=new Ue,Dh=new Ad(1,1),Cd=new yd,Pd=new Ip,Dd=new Cc,Lh=[],Ih=[],Uh=new Float32Array(16),Nh=new Float32Array(9),Fh=new Float32Array(4);function sr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function uo(i,t){let e=Ih[t];e===void 0&&(e=new Int32Array(t),Ih[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Qg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),Ae(e,n)}}function tv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Nh.set(n),i.uniformMatrix3fv(this.addr,!1,Nh),Ae(e,n)}}function ev(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Uh.set(n),i.uniformMatrix4fv(this.addr,!1,Uh),Ae(e,n)}}function nv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function iv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function sv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function rv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function av(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function lv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function cv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function hv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dh.compareFunction=gd,r=Dh):r=Rd,e.setTexture2D(t||r,s)}function uv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Pd,s)}function dv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dd,s)}function fv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cd,s)}function pv(i){switch(i){case 5126:return jg;case 35664:return Zg;case 35665:return Kg;case 35666:return Jg;case 35674:return Qg;case 35675:return tv;case 35676:return ev;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return av;case 36294:return ov;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}function mv(i,t){i.uniform1fv(this.addr,t)}function gv(i,t){const e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function vv(i,t){const e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function _v(i,t){const e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function yv(i,t){const e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xv(i,t){const e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sv(i,t){const e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Mv(i,t){i.uniform1iv(this.addr,t)}function bv(i,t){i.uniform2iv(this.addr,t)}function wv(i,t){i.uniform3iv(this.addr,t)}function Ev(i,t){i.uniform4iv(this.addr,t)}function Tv(i,t){i.uniform1uiv(this.addr,t)}function Av(i,t){i.uniform2uiv(this.addr,t)}function Rv(i,t){i.uniform3uiv(this.addr,t)}function Cv(i,t){i.uniform4uiv(this.addr,t)}function Pv(i,t,e){const n=this.cache,s=t.length,r=uo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Rd,r[a])}function Dv(i,t,e){const n=this.cache,s=t.length,r=uo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Pd,r[a])}function Lv(i,t,e){const n=this.cache,s=t.length,r=uo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Dd,r[a])}function Iv(i,t,e){const n=this.cache,s=t.length,r=uo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Cd,r[a])}function Uv(i){switch(i){case 5126:return mv;case 35664:return gv;case 35665:return vv;case 35666:return _v;case 35674:return yv;case 35675:return xv;case 35676:return Sv;case 5124:case 35670:return Mv;case 35667:case 35671:return bv;case 35668:case 35672:return wv;case 35669:case 35673:return Ev;case 5125:return Tv;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Iv}}class Nv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pv(e.type)}}class Fv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Uv(e.type)}}class Ov{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function Oh(i,t){i.seq.push(t),i.map[t.id]=t}function kv(i,t,e){const n=i.name,s=n.length;for(Xo.lastIndex=0;;){const r=Xo.exec(n),a=Xo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Oh(e,c===void 0?new Nv(o,i,t):new Fv(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ov(o),Oh(e,u)),e=u}}}class Xa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);kv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function kh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Bv=37297;let zv=0;function Hv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Bh=new Ut;function Gv(i){jt._getMatrix(Bh,jt.workingColorSpace,i);const t=`mat3( ${Bh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case ho:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Hv(i.getShaderSource(t),a)}else return s}function Vv(i,t){const e=Gv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wv(i,t){let e;switch(t){case Xf:e="Linear";break;case $f:e="Reinhard";break;case qf:e="Cineon";break;case Yf:e="ACESFilmic";break;case Zf:e="AgX";break;case Kf:e="Neutral";break;case jf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const va=new T;function Xv(){jt.getLuminanceCoefficients(va);const i=va.x.toFixed(4),t=va.y.toFixed(4),e=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $v(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function qv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Sr(i){return i!==""}function Hh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(jv,Kv)}const Zv=new Map;function Kv(i,t){let e=Ot[t];if(e===void 0){const n=Zv.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sc(e)}const Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(i){return i.replace(Jv,Qv)}function Qv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function t_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function e_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Ys:t="ENVMAP_TYPE_CUBE";break;case co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ys&&(t="ENVMAP_MODE_REFRACTION"),t}function i_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _c:t="ENVMAP_BLENDING_MULTIPLY";break;case Vf:t="ENVMAP_BLENDING_MIX";break;case Wf:t="ENVMAP_BLENDING_ADD";break}return t}function s_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function r_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=t_(e),c=e_(e),h=n_(e),u=i_(e),d=s_(e),p=$v(e),g=qv(r),v=s.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),f.length>0&&(f+=`
`)):(m=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),f=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Ot.tonemapping_pars_fragment:"",e.toneMapping!==wi?Wv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Vv("linearToOutputTexel",e.outputColorSpace),Xv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),a=sc(a),a=Hh(a,e),a=Gh(a,e),o=sc(o),o=Hh(o,e),o=Gh(o,e),a=Vh(a),o=Vh(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=b+m+a,y=b+f+o,D=kh(s,s.VERTEX_SHADER,x),R=kh(s,s.FRAGMENT_SHADER,y);s.attachShader(v,D),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(C){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(R).trim();let $=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,R);else{const Y=zh(s,D,"vertex"),B=zh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+Y+`
`+B)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||W==="")&&(G=!1);G&&(C.diagnostics={runnable:$,programLog:H,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(D),s.deleteShader(R),P=new Xa(s,v),w=Yv(s,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Bv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=R,this}let a_=0;class o_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new l_(t),e.set(t,n)),n}}class l_{constructor(t){this.id=a_++,this.code=t,this.usedTimes=0}}function c_(i,t,e,n,s,r,a){const o=new Ac,l=new o_,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,C,H,O){const W=H.fog,$=O.geometry,G=w.isMeshStandardMaterial?H.environment:null,Y=(w.isMeshStandardMaterial?e:t).get(w.envMap||G),B=Y&&Y.mapping===co?Y.image.height:null,K=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const st=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ft=st!==void 0?st.length:0;let Dt=0;$.morphAttributes.position!==void 0&&(Dt=1),$.morphAttributes.normal!==void 0&&(Dt=2),$.morphAttributes.color!==void 0&&(Dt=3);let Vt,X,Q,pt;if(K){const te=Ze[K];Vt=te.vertexShader,X=te.fragmentShader}else Vt=w.vertexShader,X=w.fragmentShader,l.update(w),Q=l.getVertexShaderID(w),pt=l.getFragmentShaderID(w);const it=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Tt=O.isInstancedMesh===!0,Bt=O.isBatchedMesh===!0,oe=!!w.map,Gt=!!w.matcap,ge=!!Y,N=!!w.aoMap,an=!!w.lightMap,Wt=!!w.bumpMap,Xt=!!w.normalMap,bt=!!w.displacementMap,he=!!w.emissiveMap,Mt=!!w.metalnessMap,E=!!w.roughnessMap,_=w.anisotropy>0,F=w.clearcoat>0,j=w.dispersion>0,J=w.iridescence>0,q=w.sheen>0,_t=w.transmission>0,at=_&&!!w.anisotropyMap,ht=F&&!!w.clearcoatMap,Yt=F&&!!w.clearcoatNormalMap,tt=F&&!!w.clearcoatRoughnessMap,ut=J&&!!w.iridescenceMap,wt=J&&!!w.iridescenceThicknessMap,At=q&&!!w.sheenColorMap,dt=q&&!!w.sheenRoughnessMap,$t=!!w.specularMap,Ft=!!w.specularColorMap,le=!!w.specularIntensityMap,L=_t&&!!w.transmissionMap,rt=_t&&!!w.thicknessMap,V=!!w.gradientMap,Z=!!w.alphaMap,ct=w.alphaTest>0,ot=!!w.alphaHash,Lt=!!w.extensions;let ye=wi;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ye=i.toneMapping);const Ne={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:Vt,fragmentShader:X,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&O._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&O.instanceColor!==null,instancingMorph:Tt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ir,alphaToCoverage:!!w.alphaToCoverage,map:oe,matcap:Gt,envMap:ge,envMapMode:ge&&Y.mapping,envMapCubeUVHeight:B,aoMap:N,lightMap:an,bumpMap:Wt,normalMap:Xt,displacementMap:d&&bt,emissiveMap:he,normalMapObjectSpace:Xt&&w.normalMapType===ep,normalMapTangentSpace:Xt&&w.normalMapType===md,metalnessMap:Mt,roughnessMap:E,anisotropy:_,anisotropyMap:at,clearcoat:F,clearcoatMap:ht,clearcoatNormalMap:Yt,clearcoatRoughnessMap:tt,dispersion:j,iridescence:J,iridescenceMap:ut,iridescenceThicknessMap:wt,sheen:q,sheenColorMap:At,sheenRoughnessMap:dt,specularMap:$t,specularColorMap:Ft,specularIntensityMap:le,transmission:_t,transmissionMap:L,thicknessMap:rt,gradientMap:V,opaque:w.transparent===!1&&w.blending===ni&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:ot,combine:w.combine,mapUv:oe&&v(w.map.channel),aoMapUv:N&&v(w.aoMap.channel),lightMapUv:an&&v(w.lightMap.channel),bumpMapUv:Wt&&v(w.bumpMap.channel),normalMapUv:Xt&&v(w.normalMap.channel),displacementMapUv:bt&&v(w.displacementMap.channel),emissiveMapUv:he&&v(w.emissiveMap.channel),metalnessMapUv:Mt&&v(w.metalnessMap.channel),roughnessMapUv:E&&v(w.roughnessMap.channel),anisotropyMapUv:at&&v(w.anisotropyMap.channel),clearcoatMapUv:ht&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:dt&&v(w.sheenRoughnessMap.channel),specularMapUv:$t&&v(w.specularMap.channel),specularColorMapUv:Ft&&v(w.specularColorMap.channel),specularIntensityMapUv:le&&v(w.specularIntensityMap.channel),transmissionMapUv:L&&v(w.transmissionMap.channel),thicknessMapUv:rt&&v(w.thicknessMap.channel),alphaMapUv:Z&&v(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Xt||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(oe||Z),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:oe&&w.map.isVideoTexture===!0&&jt.getTransfer(w.map.colorSpace)===ie,decodeVideoTextureEmissive:he&&w.emissiveMap.isVideoTexture===!0&&jt.getTransfer(w.emissiveMap.colorSpace)===ie,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===In,flipSided:w.side===Ke,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Lt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&w.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function f(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)M.push(C),M.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(b(M,w),x(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function b(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){const M=g[w.type];let C;if(M){const H=Ze[M];C=Rc.clone(H.uniforms)}else C=w.uniforms;return C}function D(w,M){let C;for(let H=0,O=h.length;H<O;H++){const W=h[H];if(W.cacheKey===M){C=W,++C.usedTimes;break}}return C===void 0&&(C=new r_(i,M,w,r),h.push(C)),C}function R(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:D,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:P}}function h_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function u_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $h(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function o(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||u_),n.length>1&&n.sort(d||Xh),s.length>1&&s.sort(d||Xh)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function d_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new $h,i.set(n,[a])):s>=r.length?(a=new $h,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function f_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ct};break;case"SpotLight":e={position:new T,direction:new T,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function p_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let m_=0;function g_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v_(i){const t=new f_,e=p_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new ae,a=new ae;function o(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,b=0,x=0,y=0,D=0,R=0,A=0;c.sort(g_);for(let w=0,M=c.length;w<M;w++){const C=c[w],H=C.color,O=C.intensity,W=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*O,u+=H.g*O,d+=H.b*O;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],O);A++}else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,B=e.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=C.shadow.matrix,b++}n.directional[p]=G,p++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(H).multiplyScalar(O),G.distance=W,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[v]=G;const Y=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,Y.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[v]=Y.matrix,C.castShadow){const B=e.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=$,y++}v++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(H).multiplyScalar(O),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const Y=C.shadow,B=e.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,x++}n.point[g]=G,g++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(O),G.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==b||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==D||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=b,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=D,P.numLightProbes=A,n.version=m_++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const x=c[f];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function qh(i){const t=new v_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function __(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new qh(i),t.set(s,[o])):r>=a.length?(o=new qh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class y_ extends Di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class x_ extends Di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
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
}`;function b_(i,t,e){let n=new Pc;const s=new xt,r=new xt,a=new re,o=new y_({depthPacking:tp}),l=new x_,c={},h=e.maxTextureSize,u={[zn]:Ke,[Ke]:zn,[In]:In},d=new ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:S_,fragmentShader:M_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sd;let f=this.type;this.render=function(R,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),H=i.state;H.setBlending(bi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const O=f!==Kn&&this.type===Kn,W=f===Kn&&this.type!==Kn;for(let $=0,G=R.length;$<G;$++){const Y=R[$],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const K=B.getFrameExtents();if(s.multiply(K),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,B.mapSize.y=r.y)),B.map===null||O===!0||W===!0){const ft=this.type!==Kn?{minFilter:we,magFilter:we}:{};B.map!==null&&B.map.dispose(),B.map=new Hn(s.x,s.y,ft),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const st=B.getViewportCount();for(let ft=0;ft<st;ft++){const Dt=B.getViewport(ft);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),H.viewport(a),B.updateMatrices(Y,ft),n=B.getFrustum(),y(A,P,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Kn&&b(B,P),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,C)};function b(R,A){const P=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Hn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,P,p,v,null)}function x(R,A,P,w){let M=null;const C=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,O=A.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let $=W[O];$===void 0&&($=M.clone(),W[O]=$,A.addEventListener("dispose",D)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Kn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=P}return M}function y(R,A,P,w,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Kn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const O=t.update(R),W=R.material;if(Array.isArray(W)){const $=O.groups;for(let G=0,Y=$.length;G<Y;G++){const B=$[G],K=W[B.materialIndex];if(K&&K.visible){const st=x(R,K,w,M);R.onBeforeShadow(i,R,A,P,O,st,B),i.renderBufferDirect(P,null,O,st,R,B),R.onAfterShadow(i,R,A,P,O,st,B)}}}else if(W.visible){const $=x(R,W,w,M);R.onBeforeShadow(i,R,A,P,O,$,null),i.renderBufferDirect(P,null,O,$,R,null),R.onAfterShadow(i,R,A,P,O,$,null)}}const H=R.children;for(let O=0,W=H.length;O<W;O++)y(H[O],A,P,w,M)}function D(R){R.target.removeEventListener("dispose",D);for(const P in c){const w=c[P],M=R.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const w_={[bl]:wl,[El]:Rl,[Tl]:Cl,[$s]:Al,[wl]:bl,[Rl]:El,[Cl]:Tl,[Al]:$s};function E_(i,t){function e(){let L=!1;const rt=new re;let V=null;const Z=new re(0,0,0,0);return{setMask:function(ct){V!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){L=ct},setClear:function(ct,ot,Lt,ye,Ne){Ne===!0&&(ct*=ye,ot*=ye,Lt*=ye),rt.set(ct,ot,Lt,ye),Z.equals(rt)===!1&&(i.clearColor(ct,ot,Lt,ye),Z.copy(rt))},reset:function(){L=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,rt=!1,V=null,Z=null,ct=null;return{setReversed:function(ot){if(rt!==ot){const Lt=t.get("EXT_clip_control");rt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ye=ct;ct=null,this.setClear(ye)}rt=ot},getReversed:function(){return rt},setTest:function(ot){ot?it(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(ot){V!==ot&&!L&&(i.depthMask(ot),V=ot)},setFunc:function(ot){if(rt&&(ot=w_[ot]),Z!==ot){switch(ot){case bl:i.depthFunc(i.NEVER);break;case wl:i.depthFunc(i.ALWAYS);break;case El:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Tl:i.depthFunc(i.EQUAL);break;case Al:i.depthFunc(i.GEQUAL);break;case Rl:i.depthFunc(i.GREATER);break;case Cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ot}},setLocked:function(ot){L=ot},setClear:function(ot){ct!==ot&&(rt&&(ot=1-ot),i.clearDepth(ot),ct=ot)},reset:function(){L=!1,V=null,Z=null,ct=null,rt=!1}}}function s(){let L=!1,rt=null,V=null,Z=null,ct=null,ot=null,Lt=null,ye=null,Ne=null;return{setTest:function(te){L||(te?it(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(te){rt!==te&&!L&&(i.stencilMask(te),rt=te)},setFunc:function(te,mn,Wn){(V!==te||Z!==mn||ct!==Wn)&&(i.stencilFunc(te,mn,Wn),V=te,Z=mn,ct=Wn)},setOp:function(te,mn,Wn){(ot!==te||Lt!==mn||ye!==Wn)&&(i.stencilOp(te,mn,Wn),ot=te,Lt=mn,ye=Wn)},setLocked:function(te){L=te},setClear:function(te){Ne!==te&&(i.clearStencil(te),Ne=te)},reset:function(){L=!1,rt=null,V=null,Z=null,ct=null,ot=null,Lt=null,ye=null,Ne=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,b=null,x=null,y=null,D=null,R=null,A=new Ct(0,0,0),P=0,w=!1,M=null,C=null,H=null,O=null,W=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=Y>=2);let K=null,st={};const ft=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Vt=new re().fromArray(ft),X=new re().fromArray(Dt);function Q(L,rt,V,Z){const ct=new Uint8Array(4),ot=i.createTexture();i.bindTexture(L,ot),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<V;Lt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(rt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ot}const pt={};pt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc($s),Wt(!1),Xt(Jc),it(i.CULL_FACE),N(bi);function it(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function St(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Tt(L,rt){return u[L]!==rt?(i.bindFramebuffer(L,rt),u[L]=rt,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function Bt(L,rt){let V=p,Z=!1;if(L){V=d.get(rt),V===void 0&&(V=[],d.set(rt,V));const ct=L.textures;if(V.length!==ct.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Lt=ct.length;ot<Lt;ot++)V[ot]=i.COLOR_ATTACHMENT0+ot;V.length=ct.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function oe(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Gt={[Yi]:i.FUNC_ADD,[Tf]:i.FUNC_SUBTRACT,[Af]:i.FUNC_REVERSE_SUBTRACT};Gt[Rf]=i.MIN,Gt[Cf]=i.MAX;const ge={[Pf]:i.ZERO,[Df]:i.ONE,[Lf]:i.SRC_COLOR,[Sl]:i.SRC_ALPHA,[kf]:i.SRC_ALPHA_SATURATE,[Ff]:i.DST_COLOR,[Uf]:i.DST_ALPHA,[If]:i.ONE_MINUS_SRC_COLOR,[Ml]:i.ONE_MINUS_SRC_ALPHA,[Of]:i.ONE_MINUS_DST_COLOR,[Nf]:i.ONE_MINUS_DST_ALPHA,[Bf]:i.CONSTANT_COLOR,[zf]:i.ONE_MINUS_CONSTANT_COLOR,[Hf]:i.CONSTANT_ALPHA,[Gf]:i.ONE_MINUS_CONSTANT_ALPHA};function N(L,rt,V,Z,ct,ot,Lt,ye,Ne,te){if(L===bi){v===!0&&(St(i.BLEND),v=!1);return}if(v===!1&&(it(i.BLEND),v=!0),L!==Ef){if(L!==m||te!==w){if((f!==Yi||y!==Yi)&&(i.blendEquation(i.FUNC_ADD),f=Yi,y=Yi),te)switch(L){case ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Je:i.blendFunc(i.ONE,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Je:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case th:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,x=null,D=null,R=null,A.set(0,0,0),P=0,m=L,w=te}return}ct=ct||rt,ot=ot||V,Lt=Lt||Z,(rt!==f||ct!==y)&&(i.blendEquationSeparate(Gt[rt],Gt[ct]),f=rt,y=ct),(V!==b||Z!==x||ot!==D||Lt!==R)&&(i.blendFuncSeparate(ge[V],ge[Z],ge[ot],ge[Lt]),b=V,x=Z,D=ot,R=Lt),(ye.equals(A)===!1||Ne!==P)&&(i.blendColor(ye.r,ye.g,ye.b,Ne),A.copy(ye),P=Ne),m=L,w=!1}function an(L,rt){L.side===In?St(i.CULL_FACE):it(i.CULL_FACE);let V=L.side===Ke;rt&&(V=!V),Wt(V),L.blending===ni&&L.transparent===!1?N(bi):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),he(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function Xt(L){L!==Mf?(it(i.CULL_FACE),L!==C&&(L===Jc?i.cullFace(i.BACK):L===bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),C=L}function bt(L){L!==H&&(G&&i.lineWidth(L),H=L)}function he(L,rt,V){L?(it(i.POLYGON_OFFSET_FILL),(O!==rt||W!==V)&&(i.polygonOffset(rt,V),O=rt,W=V)):St(i.POLYGON_OFFSET_FILL)}function Mt(L){L?it(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function E(L){L===void 0&&(L=i.TEXTURE0+$-1),K!==L&&(i.activeTexture(L),K=L)}function _(L,rt,V){V===void 0&&(K===null?V=i.TEXTURE0+$-1:V=K);let Z=st[V];Z===void 0&&(Z={type:void 0,texture:void 0},st[V]=Z),(Z.type!==L||Z.texture!==rt)&&(K!==V&&(i.activeTexture(V),K=V),i.bindTexture(L,rt||pt[L]),Z.type=L,Z.texture=rt)}function F(){const L=st[K];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(L){Vt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Vt.copy(L))}function dt(L){X.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function $t(L,rt){let V=c.get(rt);V===void 0&&(V=new WeakMap,c.set(rt,V));let Z=V.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(rt,L.name),V.set(L,Z))}function Ft(L,rt){const Z=c.get(rt).get(L);l.get(rt)!==Z&&(i.uniformBlockBinding(rt,Z,L.__bindingPointIndex),l.set(rt,Z))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,st={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,b=null,x=null,y=null,D=null,R=null,A=new Ct(0,0,0),P=0,w=!1,M=null,C=null,H=null,O=null,W=null,Vt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:St,bindFramebuffer:Tt,drawBuffers:Bt,useProgram:oe,setBlending:N,setMaterial:an,setFlipSided:Wt,setCullFace:Xt,setLineWidth:bt,setPolygonOffset:he,setScissorTest:Mt,activeTexture:E,bindTexture:_,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:ut,texImage3D:wt,updateUBOMapping:$t,uniformBlockBinding:Ft,texStorage2D:Yt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:_t,compressedTexSubImage2D:at,compressedTexSubImage3D:ht,scissor:At,viewport:dt,reset:le}}function Yh(i,t,e,n){const s=T_(n);switch(e){case cd:return i*t;case ud:return i*t;case dd:return i*t*2;case Mc:return i*t/s.components*s.byteLength;case bc:return i*t/s.components*s.byteLength;case fd:return i*t*2/s.components*s.byteLength;case wc:return i*t*2/s.components*s.byteLength;case hd:return i*t*3/s.components*s.byteLength;case Be:return i*t*4/s.components*s.byteLength;case Ec:return i*t*4/s.components*s.byteLength;case za:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Il:case Nl:return Math.max(i,16)*Math.max(t,8)/4;case Ll:case Ul:return Math.max(i,8)*Math.max(t,8)/2;case Fl:case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wa:case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pd:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*8;case nc:case ic:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function T_(i){switch(i){case An:case ad:return{byteLength:1,components:1};case Fr:case od:case rs:return{byteLength:2,components:1};case xc:case Sc:return{byteLength:2,components:4};case ss:case yc:case Tn:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function A_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):kr("canvas")}function v(E,_,F){let j=1;const J=Mt(E);if((J.width>F||J.height>F)&&(j=F/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(j*J.width),_t=Math.floor(j*J.height);u===void 0&&(u=g(q,_t));const at=_?g(q,_t):u;return at.width=q,at.height=_t,at.getContext("2d").drawImage(E,0,0,q,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+_t+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(E,_,F,j,J=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=_;if(_===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),_===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),_===i.RGBA){const _t=J?ho:jt.getTransfer(j);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=_t===ie?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(E,_){let F;return E?_===null||_===ss||_===js?F=i.DEPTH24_STENCIL8:_===Tn?F=i.DEPTH32F_STENCIL8:_===Fr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ss||_===js?F=i.DEPTH_COMPONENT24:_===Tn?F=i.DEPTH_COMPONENT32F:_===Fr&&(F=i.DEPTH_COMPONENT16),F}function D(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==we&&E.minFilter!==_e?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function R(E){const _=E.target;_.removeEventListener("dispose",R),P(_),_.isVideoTexture&&h.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),M(_)}function P(E){const _=n.get(E);if(_.__webglInit===void 0)return;const F=E.source,j=d.get(F);if(j){const J=j[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(E),Object.keys(j).length===0&&d.delete(F)}n.remove(E)}function w(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const F=E.source,j=d.get(F);delete j[_.__cacheKey],a.memory.textures--}function M(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let J=0;J<_.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[j][J]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let j=0,J=F.length;j<J;j++){const q=n.get(F[j]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(F[j])}n.remove(E)}let C=0;function H(){C=0}function O(){const E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function $(E,_){const F=n.get(E);if(E.isVideoTexture&&bt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,E,_);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function G(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){X(F,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Y(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){X(F,E,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function B(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Q(F,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const K={[ri]:i.REPEAT,[Ie]:i.CLAMP_TO_EDGE,[Dl]:i.MIRRORED_REPEAT},st={[we]:i.NEAREST,[Jf]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[_e]:i.LINEAR,[yo]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},ft={[np]:i.NEVER,[lp]:i.ALWAYS,[ip]:i.LESS,[gd]:i.LEQUAL,[sp]:i.EQUAL,[op]:i.GEQUAL,[rp]:i.GREATER,[ap]:i.NOTEQUAL};function Dt(E,_){if(_.type===Tn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===_e||_.magFilter===yo||_.magFilter===Zr||_.magFilter===Qi||_.minFilter===_e||_.minFilter===yo||_.minFilter===Zr||_.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,K[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,K[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,K[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,st[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,st[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ft[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===we||_.minFilter!==Zr&&_.minFilter!==Qi||_.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Vt(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",R));const j=_.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const q=W(_);if(q!==E.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[q].usedTimes++;const _t=J[E.__cacheKey];_t!==void 0&&(J[E.__cacheKey].usedTimes--,_t.usedTimes===0&&w(_)),E.__cacheKey=q,E.__webglTexture=J[q].texture}return F}function X(E,_,F){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);const J=Vt(E,_),q=_.source;e.bindTexture(j,E.__webglTexture,i.TEXTURE0+F);const _t=n.get(q);if(q.version!==_t.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const at=jt.getPrimaries(jt.workingColorSpace),ht=_.colorSpace===yi?null:jt.getPrimaries(_.colorSpace),Yt=_.colorSpace===yi||at===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let tt=v(_.image,!1,s.maxTextureSize);tt=he(_,tt);const ut=r.convert(_.format,_.colorSpace),wt=r.convert(_.type);let At=x(_.internalFormat,ut,wt,_.colorSpace,_.isVideoTexture);Dt(j,_);let dt;const $t=_.mipmaps,Ft=_.isVideoTexture!==!0,le=_t.__version===void 0||J===!0,L=q.dataReady,rt=D(_,tt);if(_.isDepthTexture)At=y(_.format===Zs,_.type),le&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,At,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,At,tt.width,tt.height,0,ut,wt,null));else if(_.isDataTexture)if($t.length>0){Ft&&le&&e.texStorage2D(i.TEXTURE_2D,rt,At,$t[0].width,$t[0].height);for(let V=0,Z=$t.length;V<Z;V++)dt=$t[V],Ft?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,dt.width,dt.height,ut,wt,dt.data):e.texImage2D(i.TEXTURE_2D,V,At,dt.width,dt.height,0,ut,wt,dt.data);_.generateMipmaps=!1}else Ft?(le&&e.texStorage2D(i.TEXTURE_2D,rt,At,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,ut,wt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,At,tt.width,tt.height,0,ut,wt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,At,$t[0].width,$t[0].height,tt.depth);for(let V=0,Z=$t.length;V<Z;V++)if(dt=$t[V],_.format!==Be)if(ut!==null)if(Ft){if(L)if(_.layerUpdates.size>0){const ct=Yh(dt.width,dt.height,_.format,_.type);for(const ot of _.layerUpdates){const Lt=dt.data.subarray(ot*ct/dt.data.BYTES_PER_ELEMENT,(ot+1)*ct/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ot,dt.width,dt.height,1,ut,Lt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,dt.width,dt.height,tt.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,At,dt.width,dt.height,tt.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,dt.width,dt.height,tt.depth,ut,wt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,At,dt.width,dt.height,tt.depth,0,ut,wt,dt.data)}else{Ft&&le&&e.texStorage2D(i.TEXTURE_2D,rt,At,$t[0].width,$t[0].height);for(let V=0,Z=$t.length;V<Z;V++)dt=$t[V],_.format!==Be?ut!==null?Ft?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,At,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,dt.width,dt.height,ut,wt,dt.data):e.texImage2D(i.TEXTURE_2D,V,At,dt.width,dt.height,0,ut,wt,dt.data)}else if(_.isDataArrayTexture)if(Ft){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,At,tt.width,tt.height,tt.depth),L)if(_.layerUpdates.size>0){const V=Yh(tt.width,tt.height,_.format,_.type);for(const Z of _.layerUpdates){const ct=tt.data.subarray(Z*V/tt.data.BYTES_PER_ELEMENT,(Z+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,ut,wt,ct)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,wt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,tt.width,tt.height,tt.depth,0,ut,wt,tt.data);else if(_.isData3DTexture)Ft?(le&&e.texStorage3D(i.TEXTURE_3D,rt,At,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,wt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,At,tt.width,tt.height,tt.depth,0,ut,wt,tt.data);else if(_.isFramebufferTexture){if(le)if(Ft)e.texStorage2D(i.TEXTURE_2D,rt,At,tt.width,tt.height);else{let V=tt.width,Z=tt.height;for(let ct=0;ct<rt;ct++)e.texImage2D(i.TEXTURE_2D,ct,At,V,Z,0,ut,wt,null),V>>=1,Z>>=1}}else if($t.length>0){if(Ft&&le){const V=Mt($t[0]);e.texStorage2D(i.TEXTURE_2D,rt,At,V.width,V.height)}for(let V=0,Z=$t.length;V<Z;V++)dt=$t[V],Ft?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ut,wt,dt):e.texImage2D(i.TEXTURE_2D,V,At,ut,wt,dt);_.generateMipmaps=!1}else if(Ft){if(le){const V=Mt(tt);e.texStorage2D(i.TEXTURE_2D,rt,At,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,wt,tt)}else e.texImage2D(i.TEXTURE_2D,0,At,ut,wt,tt);m(_)&&f(j),_t.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Q(E,_,F){if(_.image.length!==6)return;const j=Vt(E,_),J=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const q=n.get(J);if(J.version!==q.__version||j===!0){e.activeTexture(i.TEXTURE0+F);const _t=jt.getPrimaries(jt.workingColorSpace),at=_.colorSpace===yi?null:jt.getPrimaries(_.colorSpace),ht=_.colorSpace===yi||_t===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Yt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!Yt&&!tt?ut[Z]=v(_.image[Z],!0,s.maxCubemapSize):ut[Z]=tt?_.image[Z].image:_.image[Z],ut[Z]=he(_,ut[Z]);const wt=ut[0],At=r.convert(_.format,_.colorSpace),dt=r.convert(_.type),$t=x(_.internalFormat,At,dt,_.colorSpace),Ft=_.isVideoTexture!==!0,le=q.__version===void 0||j===!0,L=J.dataReady;let rt=D(_,wt);Dt(i.TEXTURE_CUBE_MAP,_);let V;if(Yt){Ft&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,$t,wt.width,wt.height);for(let Z=0;Z<6;Z++){V=ut[Z].mipmaps;for(let ct=0;ct<V.length;ct++){const ot=V[ct];_.format!==Be?At!==null?Ft?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,ot.width,ot.height,At,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,$t,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,ot.width,ot.height,At,dt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,$t,ot.width,ot.height,0,At,dt,ot.data)}}}else{if(V=_.mipmaps,Ft&&le){V.length>0&&rt++;const Z=Mt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,$t,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ut[Z].width,ut[Z].height,At,dt,ut[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$t,ut[Z].width,ut[Z].height,0,At,dt,ut[Z].data);for(let ct=0;ct<V.length;ct++){const Lt=V[ct].image[Z].image;Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Lt.width,Lt.height,At,dt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,$t,Lt.width,Lt.height,0,At,dt,Lt.data)}}else{Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,dt,ut[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$t,At,dt,ut[Z]);for(let ct=0;ct<V.length;ct++){const ot=V[ct];Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,At,dt,ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,$t,At,dt,ot.image[Z])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),q.__version=J.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function pt(E,_,F,j,J,q){const _t=r.convert(F.format,F.colorSpace),at=r.convert(F.type),ht=x(F.internalFormat,_t,at,F.colorSpace),Yt=n.get(_),tt=n.get(F);if(tt.__renderTarget=_,!Yt.__hasExternalTextures){const ut=Math.max(1,_.width>>q),wt=Math.max(1,_.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,q,ht,ut,wt,_.depth,0,_t,at,null):e.texImage2D(J,q,ht,ut,wt,0,_t,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,tt.__webglTexture,0,Wt(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,tt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(E,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const j=_.depthTexture,J=j&&j.isDepthTexture?j.type:null,q=y(_.stencilBuffer,J),_t=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Wt(_);Xt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,q,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,E)}else{const j=_.textures;for(let J=0;J<j.length;J++){const q=j[J],_t=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ht=x(q.internalFormat,_t,at,q.colorSpace),Yt=Wt(_);F&&Xt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,ht,_.width,_.height):Xt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,ht,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ht,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const J=j.__webglTexture,q=Wt(_);if(_.depthTexture.format===Gs)Xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(_.depthTexture.format===Zs)Xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Tt(E){const _=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=j}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");St(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),it(_.__webglDepthbuffer[j],E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),it(_.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(E,_,F){const j=n.get(E);_!==void 0&&pt(j.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Tt(E)}function oe(E){const _=E.texture,F=n.get(E),j=n.get(_);E.addEventListener("dispose",A);const J=E.textures,q=E.isWebGLCubeRenderTarget===!0,_t=J.length>1;if(_t||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ht=0;ht<_.mipmaps.length;ht++)F.__webglFramebuffer[at][ht]=i.createFramebuffer()}else F.__webglFramebuffer[at]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)F.__webglFramebuffer[at]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(_t)for(let at=0,ht=J.length;at<ht;at++){const Yt=n.get(J[at]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Xt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const ht=J[at];F.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const Yt=r.convert(ht.format,ht.colorSpace),tt=r.convert(ht.type),ut=x(ht.internalFormat,Yt,tt,ht.colorSpace,E.isXRRenderTarget===!0),wt=Wt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ut,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,F.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),it(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)pt(F.__webglFramebuffer[at][ht],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else pt(F.__webglFramebuffer[at],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let at=0,ht=J.length;at<ht;at++){const Yt=J[at],tt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Dt(i.TEXTURE_2D,Yt),pt(F.__webglFramebuffer,E,Yt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Yt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),Dt(at,_),_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)pt(F.__webglFramebuffer[ht],E,_,i.COLOR_ATTACHMENT0,at,ht);else pt(F.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,at,0);m(_)&&f(at),e.unbindTexture()}E.depthBuffer&&Tt(E)}function Gt(E){const _=E.textures;for(let F=0,j=_.length;F<j;F++){const J=_[F];if(m(J)){const q=b(E),_t=n.get(J).__webglTexture;e.bindTexture(q,_t),f(q),e.unbindTexture()}}}const ge=[],N=[];function an(E){if(E.samples>0){if(Xt(E)===!1){const _=E.textures,F=E.width,j=E.height;let J=i.COLOR_BUFFER_BIT;const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(E),at=_.length>1;if(at)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const Yt=n.get(_[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,J,i.NEAREST),l===!0&&(ge.length=0,N.length=0,ge.push(i.COLOR_ATTACHMENT0+ht),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ge.push(q),N.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const Yt=n.get(_[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Wt(E){return Math.min(s.maxSamples,E.samples)}function Xt(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function bt(E){const _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function he(E,_){const F=E.colorSpace,j=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==ir&&F!==yi&&(jt.getTransfer(F)===ie?(j!==Be||J!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=Bt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Xt}function R_(i,t){function e(n,s=yi){let r;const a=jt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ad)return i.BYTE;if(n===od)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===ss)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===rs)return i.HALF_FLOAT;if(n===cd)return i.ALPHA;if(n===hd)return i.RGB;if(n===Be)return i.RGBA;if(n===ud)return i.LUMINANCE;if(n===dd)return i.LUMINANCE_ALPHA;if(n===Gs)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===Mc)return i.RED;if(n===bc)return i.RED_INTEGER;if(n===fd)return i.RG;if(n===wc)return i.RG_INTEGER;if(n===Ec)return i.RGBA_INTEGER;if(n===za||n===Ha||n===Ga||n===Va)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Il||n===Ul||n===Nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fl||n===Ol||n===kl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fl||n===Ol)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bl||n===zl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===$l||n===ql||n===Yl||n===jl||n===Zl||n===Kl||n===Jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$l)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Ql||n===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wa)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pd||n===ec||n===nc||n===ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class C_ extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P_={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(P_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`;class I_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ne({vertexShader:D_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U_ extends as{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new I_,m=e.getContextAttributes();let f=null,b=null;const x=[],y=[],D=new xt;let R=null;const A=new dn;A.viewport=new re;const P=new dn;P.viewport=new re;const w=[A,P],M=new C_;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=x[X];return Q===void 0&&(Q=new $o,x[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=x[X];return Q===void 0&&(Q=new $o,x[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=x[X];return Q===void 0&&(Q=new $o,x[X]=Q),Q.getHandSpace()};function O(X){const Q=y.indexOf(X.inputSource);if(Q===-1)return;const pt=x[Q];pt!==void 0&&(pt.update(X.inputSource,X.frame,c||a),pt.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",$);for(let X=0;X<x.length;X++){const Q=y[X];Q!==null&&(y[X]=null,x[X].disconnect(Q))}C=null,H=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,b=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Hn(p.framebufferWidth,p.framebufferHeight,{format:Be,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,pt=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Zs:Gs,pt=m.stencil?js:ss);const St={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Hn(d.textureWidth,d.textureHeight,{format:Be,type:An,depthTexture:new Ad(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(X){for(let Q=0;Q<X.removed.length;Q++){const pt=X.removed[Q],it=y.indexOf(pt);it>=0&&(y[it]=null,x[it].disconnect(pt))}for(let Q=0;Q<X.added.length;Q++){const pt=X.added[Q];let it=y.indexOf(pt);if(it===-1){for(let Tt=0;Tt<x.length;Tt++)if(Tt>=y.length){y.push(pt),it=Tt;break}else if(y[Tt]===null){y[Tt]=pt,it=Tt;break}if(it===-1)break}const St=x[it];St&&St.connect(pt)}}const G=new T,Y=new T;function B(X,Q,pt){G.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(pt.matrixWorld);const it=G.distanceTo(Y),St=Q.projectionMatrix.elements,Tt=pt.projectionMatrix.elements,Bt=St[14]/(St[10]-1),oe=St[14]/(St[10]+1),Gt=(St[9]+1)/St[5],ge=(St[9]-1)/St[5],N=(St[8]-1)/St[0],an=(Tt[8]+1)/Tt[0],Wt=Bt*N,Xt=Bt*an,bt=it/(-N+an),he=bt*-N;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(he),X.translateZ(bt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),St[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Mt=Bt+bt,E=oe+bt,_=Wt-he,F=Xt+(it-he),j=Gt*oe/E*Mt,J=ge*oe/E*Mt;X.projectionMatrix.makePerspective(_,F,j,J,Mt,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function K(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,pt=X.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(pt=v.depthFar)),M.near=P.near=A.near=Q,M.far=P.far=A.far=pt,(C!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,H=M.far),A.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const it=X.parent,St=M.cameras;K(M,it);for(let Tt=0;Tt<St.length;Tt++)K(St[Tt],it);St.length===2?B(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),st(X,M,it)};function st(X,Q,pt){pt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(pt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Or*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ft=null;function Dt(X,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let it=!1;pt.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let Tt=0;Tt<pt.length;Tt++){const Bt=pt[Tt];let oe=null;if(p!==null)oe=p.getViewport(Bt);else{const ge=u.getViewSubImage(d,Bt);oe=ge.viewport,Tt===0&&(t.setRenderTargetTextures(b,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(b))}let Gt=w[Tt];Gt===void 0&&(Gt=new dn,Gt.layers.enable(Tt),Gt.viewport=new re,w[Tt]=Gt),Gt.matrix.fromArray(Bt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Bt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(oe.x,oe.y,oe.width,oe.height),Tt===0&&(M.matrix.copy(Gt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(Gt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){const Tt=u.getDepthInformation(pt[0]);Tt&&Tt.isValid&&Tt.texture&&v.init(t,Tt,s.renderState)}}for(let pt=0;pt<x.length;pt++){const it=y[pt],St=x[pt];it!==null&&St!==void 0&&St.update(it,Q,c||a)}ft&&ft(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Vt=new Td;Vt.setAnimationLoop(Dt),this.setAnimationLoop=function(X){ft=X},this.dispose=function(){}}}const Gi=new Gn,N_=new ae;function F_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,wd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),x=b.envMap,y=b.envMapRotation;x&&(m.envMap.value=x,Gi.copy(y),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(Gi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ke&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const y=x.program;n.uniformBlockBinding(b,y)}function c(b,x){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));const D=x.program;n.updateUBOMapping(b,D);const R=t.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function h(b){const x=u();b.__bindingPointIndex=x;const y=i.createBuffer(),D=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=s[b.id],y=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,A=y.length;R<A;R++){const P=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,M=P.length;w<M;w++){const C=P[w];if(p(C,R,w,D)===!0){const H=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let $=0;$<O.length;$++){const G=O[$],Y=v(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+W,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,x,y,D){const R=b.value,A=x+"_"+y;if(D[A]===void 0)return typeof R=="number"||typeof R=="boolean"?D[A]=R:D[A]=R.clone(),!0;{const P=D[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return D[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(b){const x=b.uniforms;let y=0;const D=16;for(let A=0,P=x.length;A<P;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,C=w.length;M<C;M++){const H=w[M],O=Array.isArray(H.value)?H.value:[H.value];for(let W=0,$=O.length;W<$;W++){const G=O[W],Y=v(G),B=y%D,K=B%Y.boundary,st=B+K;y+=K,st!==0&&D-st<Y.storage&&(y+=D-st),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=Y.storage}}}const R=y%D;return R>0&&(y+=D-R),b.__size=y,b.__cache={},this}function v(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class k_{constructor(t={}){const{canvas:e=Ep(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=wi,this.toneMappingExposure=1;const y=this;let D=!1,R=0,A=0,P=null,w=-1,M=null;const C=new re,H=new re;let O=null;const W=new Ct(0);let $=0,G=e.width,Y=e.height,B=1,K=null,st=null;const ft=new re(0,0,G,Y),Dt=new re(0,0,G,Y);let Vt=!1;const X=new Pc;let Q=!1,pt=!1;const it=new ae,St=new ae,Tt=new T,Bt=new re,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ge(){return P===null?B:1}let N=n;function an(S,I){return e.getContext(S,I)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){const I="webgl2";if(N=an(I,S),N===null)throw an(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Wt,Xt,bt,he,Mt,E,_,F,j,J,q,_t,at,ht,Yt,tt,ut,wt,At,dt,$t,Ft,le,L;function rt(){Wt=new Vg(N),Wt.init(),Ft=new R_(N,Wt),Xt=new Og(N,Wt,t,Ft),bt=new E_(N,Wt),Xt.reverseDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),he=new $g(N),Mt=new h_,E=new A_(N,Wt,bt,Mt,Xt,Ft,he),_=new Bg(y),F=new Gg(y),j=new Qp(N),le=new Ng(N,j),J=new Wg(N,j,he,le),q=new Yg(N,J,j,he),At=new qg(N,Xt,E),tt=new kg(Mt),_t=new c_(y,_,F,Wt,Xt,le,tt),at=new F_(y,Mt),ht=new d_,Yt=new __(Wt),wt=new Ug(y,_,F,bt,q,p,l),ut=new b_(y,q,Xt),L=new O_(N,he,Xt,bt),dt=new Fg(N,Wt,he),$t=new Xg(N,Wt,he),he.programs=_t.programs,y.capabilities=Xt,y.extensions=Wt,y.properties=Mt,y.renderLists=ht,y.shadowMap=ut,y.state=bt,y.info=he}rt();const V=new U_(y,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Wt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Wt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(G,Y,!1))},this.getSize=function(S){return S.set(G,Y)},this.setSize=function(S,I,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,Y=I,e.width=Math.floor(S*B),e.height=Math.floor(I*B),k===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(G*B,Y*B).floor()},this.setDrawingBufferSize=function(S,I,k){G=S,Y=I,B=k,e.width=Math.floor(S*k),e.height=Math.floor(I*k),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(ft)},this.setViewport=function(S,I,k,z){S.isVector4?ft.set(S.x,S.y,S.z,S.w):ft.set(S,I,k,z),bt.viewport(C.copy(ft).multiplyScalar(B).round())},this.getScissor=function(S){return S.copy(Dt)},this.setScissor=function(S,I,k,z){S.isVector4?Dt.set(S.x,S.y,S.z,S.w):Dt.set(S,I,k,z),bt.scissor(H.copy(Dt).multiplyScalar(B).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(S){bt.setScissorTest(Vt=S)},this.setOpaqueSort=function(S){K=S},this.setTransparentSort=function(S){st=S},this.getClearColor=function(S){return S.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(S=!0,I=!0,k=!0){let z=0;if(S){let U=!1;if(P!==null){const et=P.texture.format;U=et===Ec||et===wc||et===bc}if(U){const et=P.texture.type,lt=et===An||et===ss||et===Fr||et===js||et===xc||et===Sc,mt=wt.getClearColor(),gt=wt.getClearAlpha(),Rt=mt.r,It=mt.g,vt=mt.b;lt?(g[0]=Rt,g[1]=It,g[2]=vt,g[3]=gt,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Rt,v[1]=It,v[2]=vt,v[3]=gt,N.clearBufferiv(N.COLOR,0,v))}else z|=N.COLOR_BUFFER_BIT}I&&(z|=N.DEPTH_BUFFER_BIT),k&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ht.dispose(),Yt.dispose(),Mt.dispose(),_.dispose(),F.dispose(),q.dispose(),le.dispose(),L.dispose(),_t.dispose(),V.dispose(),V.removeEventListener("sessionstart",Wc),V.removeEventListener("sessionend",Xc),Fi.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const S=he.autoReset,I=ut.enabled,k=ut.autoUpdate,z=ut.needsUpdate,U=ut.type;rt(),he.autoReset=S,ut.enabled=I,ut.autoUpdate=k,ut.needsUpdate=z,ut.type=U}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Lt(S){const I=S.target;I.removeEventListener("dispose",Lt),ye(I)}function ye(S){Ne(S),Mt.remove(S)}function Ne(S){const I=Mt.get(S).programs;I!==void 0&&(I.forEach(function(k){_t.releaseProgram(k)}),S.isShaderMaterial&&_t.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,k,z,U,et){I===null&&(I=oe);const lt=U.isMesh&&U.matrixWorld.determinant()<0,mt=yf(S,I,k,z,U);bt.setMaterial(z,lt);let gt=k.index,Rt=1;if(z.wireframe===!0){if(gt=J.getWireframeAttribute(k),gt===void 0)return;Rt=2}const It=k.drawRange,vt=k.attributes.position;let Zt=It.start*Rt,ce=(It.start+It.count)*Rt;et!==null&&(Zt=Math.max(Zt,et.start*Rt),ce=Math.min(ce,(et.start+et.count)*Rt)),gt!==null?(Zt=Math.max(Zt,0),ce=Math.min(ce,gt.count)):vt!=null&&(Zt=Math.max(Zt,0),ce=Math.min(ce,vt.count));const ue=ce-Zt;if(ue<0||ue===1/0)return;le.setup(U,z,mt,k,gt);let qe,Jt=dt;if(gt!==null&&(qe=j.get(gt),Jt=$t,Jt.setIndex(qe)),U.isMesh)z.wireframe===!0?(bt.setLineWidth(z.wireframeLinewidth*ge()),Jt.setMode(N.LINES)):Jt.setMode(N.TRIANGLES);else if(U.isLine){let yt=z.linewidth;yt===void 0&&(yt=1),bt.setLineWidth(yt*ge()),U.isLineSegments?Jt.setMode(N.LINES):U.isLineLoop?Jt.setMode(N.LINE_LOOP):Jt.setMode(N.LINE_STRIP)}else U.isPoints?Jt.setMode(N.POINTS):U.isSprite&&Jt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const yt=U._multiDrawStarts,Xn=U._multiDrawCounts,Qt=U._multiDrawCount,gn=gt?j.get(gt).bytesPerElement:1,hs=Mt.get(z).currentProgram.getUniforms();for(let Qe=0;Qe<Qt;Qe++)hs.setValue(N,"_gl_DrawID",Qe),Jt.render(yt[Qe]/gn,Xn[Qe])}else if(U.isInstancedMesh)Jt.renderInstances(Zt,ue,U.count);else if(k.isInstancedBufferGeometry){const yt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Xn=Math.min(k.instanceCount,yt);Jt.renderInstances(Zt,ue,Xn)}else Jt.render(Zt,ue)};function te(S,I,k){S.transparent===!0&&S.side===In&&S.forceSinglePass===!1?(S.side=Ke,S.needsUpdate=!0,jr(S,I,k),S.side=zn,S.needsUpdate=!0,jr(S,I,k),S.side=In):jr(S,I,k)}this.compile=function(S,I,k=null){k===null&&(k=S),f=Yt.get(k),f.init(I),x.push(f),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),S!==k&&S.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const z=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){const mt=et[lt];te(mt,k,U),z.add(mt)}else te(et,k,U),z.add(et)}),x.pop(),f=null,z},this.compileAsync=function(S,I,k=null){const z=this.compile(S,I,k);return new Promise(U=>{function et(){if(z.forEach(function(lt){Mt.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){U(S);return}setTimeout(et,10)}Wt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let mn=null;function Wn(S){mn&&mn(S)}function Wc(){Fi.stop()}function Xc(){Fi.start()}const Fi=new Td;Fi.setAnimationLoop(Wn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(S){mn=S,V.setAnimationLoop(S),S===null?Fi.stop():Fi.start()},V.addEventListener("sessionstart",Wc),V.addEventListener("sessionend",Xc),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,I,P),f=Yt.get(S,x.length),f.init(I),x.push(f),St.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(St),pt=this.localClippingEnabled,Q=tt.init(this.clippingPlanes,pt),m=ht.get(S,b.length),m.init(),b.push(m),V.enabled===!0&&V.isPresenting===!0){const et=y.xr.getDepthSensingMesh();et!==null&&_o(et,I,-1/0,y.sortObjects)}_o(S,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(K,st),Gt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Gt&&wt.addToRenderList(m,S),this.info.render.frame++,Q===!0&&tt.beginShadows();const k=f.state.shadowsArray;ut.render(k,S,I),Q===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(f.setupLights(),I.isArrayCamera){const et=I.cameras;if(U.length>0)for(let lt=0,mt=et.length;lt<mt;lt++){const gt=et[lt];qc(z,U,S,gt)}Gt&&wt.render(S);for(let lt=0,mt=et.length;lt<mt;lt++){const gt=et[lt];$c(m,S,gt,gt.viewport)}}else U.length>0&&qc(z,U,S,I),Gt&&wt.render(S),$c(m,S,I);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(y,S,I),le.resetDefaultState(),w=-1,M=null,x.pop(),x.length>0?(f=x[x.length-1],Q===!0&&tt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function _o(S,I,k,z){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){z&&Bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(St);const lt=q.update(S),mt=S.material;mt.visible&&m.push(S,lt,mt,k,Bt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const lt=q.update(S),mt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Bt.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Bt.copy(lt.boundingSphere.center)),Bt.applyMatrix4(S.matrixWorld).applyMatrix4(St)),Array.isArray(mt)){const gt=lt.groups;for(let Rt=0,It=gt.length;Rt<It;Rt++){const vt=gt[Rt],Zt=mt[vt.materialIndex];Zt&&Zt.visible&&m.push(S,lt,Zt,k,Bt.z,vt)}}else mt.visible&&m.push(S,lt,mt,k,Bt.z,null)}}const et=S.children;for(let lt=0,mt=et.length;lt<mt;lt++)_o(et[lt],I,k,z)}function $c(S,I,k,z){const U=S.opaque,et=S.transmissive,lt=S.transparent;f.setupLightsView(k),Q===!0&&tt.setGlobalState(y.clippingPlanes,k),z&&bt.viewport(C.copy(z)),U.length>0&&Yr(U,I,k),et.length>0&&Yr(et,I,k),lt.length>0&&Yr(lt,I,k),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function qc(S,I,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Hn(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?rs:An,minFilter:Qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const et=f.state.transmissionRenderTarget[z.id],lt=z.viewport||C;et.setSize(lt.z,lt.w);const mt=y.getRenderTarget();y.setRenderTarget(et),y.getClearColor(W),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),Gt&&wt.render(k);const gt=y.toneMapping;y.toneMapping=wi;const Rt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),Q===!0&&tt.setGlobalState(y.clippingPlanes,z),Yr(S,k,z),E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let vt=0,Zt=I.length;vt<Zt;vt++){const ce=I[vt],ue=ce.object,qe=ce.geometry,Jt=ce.material,yt=ce.group;if(Jt.side===In&&ue.layers.test(z.layers)){const Xn=Jt.side;Jt.side=Ke,Jt.needsUpdate=!0,Yc(ue,k,z,qe,Jt,yt),Jt.side=Xn,Jt.needsUpdate=!0,It=!0}}It===!0&&(E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et))}y.setRenderTarget(mt),y.setClearColor(W,$),Rt!==void 0&&(z.viewport=Rt),y.toneMapping=gt}function Yr(S,I,k){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,et=S.length;U<et;U++){const lt=S[U],mt=lt.object,gt=lt.geometry,Rt=z===null?lt.material:z,It=lt.group;mt.layers.test(k.layers)&&Yc(mt,I,k,gt,Rt,It)}}function Yc(S,I,k,z,U,et){S.onBeforeRender(y,I,k,z,U,et),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(y,I,k,z,S,et),U.transparent===!0&&U.side===In&&U.forceSinglePass===!1?(U.side=Ke,U.needsUpdate=!0,y.renderBufferDirect(k,I,z,U,S,et),U.side=zn,U.needsUpdate=!0,y.renderBufferDirect(k,I,z,U,S,et),U.side=In):y.renderBufferDirect(k,I,z,U,S,et),S.onAfterRender(y,I,k,z,U,et)}function jr(S,I,k){I.isScene!==!0&&(I=oe);const z=Mt.get(S),U=f.state.lights,et=f.state.shadowsArray,lt=U.state.version,mt=_t.getParameters(S,U.state,et,I,k),gt=_t.getProgramCacheKey(mt);let Rt=z.programs;z.environment=S.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(S.isMeshStandardMaterial?F:_).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Rt===void 0&&(S.addEventListener("dispose",Lt),Rt=new Map,z.programs=Rt);let It=Rt.get(gt);if(It!==void 0){if(z.currentProgram===It&&z.lightsStateVersion===lt)return Zc(S,mt),It}else mt.uniforms=_t.getUniforms(S),S.onBeforeCompile(mt,y),It=_t.acquireProgram(mt,gt),Rt.set(gt,It),z.uniforms=mt.uniforms;const vt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(vt.clippingPlanes=tt.uniform),Zc(S,mt),z.needsLights=Sf(S),z.lightsStateVersion=lt,z.needsLights&&(vt.ambientLightColor.value=U.state.ambient,vt.lightProbe.value=U.state.probe,vt.directionalLights.value=U.state.directional,vt.directionalLightShadows.value=U.state.directionalShadow,vt.spotLights.value=U.state.spot,vt.spotLightShadows.value=U.state.spotShadow,vt.rectAreaLights.value=U.state.rectArea,vt.ltc_1.value=U.state.rectAreaLTC1,vt.ltc_2.value=U.state.rectAreaLTC2,vt.pointLights.value=U.state.point,vt.pointLightShadows.value=U.state.pointShadow,vt.hemisphereLights.value=U.state.hemi,vt.directionalShadowMap.value=U.state.directionalShadowMap,vt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,vt.spotShadowMap.value=U.state.spotShadowMap,vt.spotLightMatrix.value=U.state.spotLightMatrix,vt.spotLightMap.value=U.state.spotLightMap,vt.pointShadowMap.value=U.state.pointShadowMap,vt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=It,z.uniformsList=null,It}function jc(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Xa.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Zc(S,I){const k=Mt.get(S);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function yf(S,I,k,z,U){I.isScene!==!0&&(I=oe),E.resetTextureUnits();const et=I.fog,lt=z.isMeshStandardMaterial?I.environment:null,mt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ir,gt=(z.isMeshStandardMaterial?F:_).get(z.envMap||lt),Rt=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,It=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),vt=!!k.morphAttributes.position,Zt=!!k.morphAttributes.normal,ce=!!k.morphAttributes.color;let ue=wi;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ue=y.toneMapping);const qe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Jt=qe!==void 0?qe.length:0,yt=Mt.get(z),Xn=f.state.lights;if(Q===!0&&(pt===!0||S!==M)){const on=S===M&&z.id===w;tt.setState(z,S,on)}let Qt=!1;z.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Xn.state.version||yt.outputColorSpace!==mt||U.isBatchedMesh&&yt.batching===!1||!U.isBatchedMesh&&yt.batching===!0||U.isBatchedMesh&&yt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&yt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&yt.instancing===!1||!U.isInstancedMesh&&yt.instancing===!0||U.isSkinnedMesh&&yt.skinning===!1||!U.isSkinnedMesh&&yt.skinning===!0||U.isInstancedMesh&&yt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&yt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&yt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&yt.instancingMorph===!1&&U.morphTexture!==null||yt.envMap!==gt||z.fog===!0&&yt.fog!==et||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==tt.numPlanes||yt.numIntersection!==tt.numIntersection)||yt.vertexAlphas!==Rt||yt.vertexTangents!==It||yt.morphTargets!==vt||yt.morphNormals!==Zt||yt.morphColors!==ce||yt.toneMapping!==ue||yt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,yt.__version=z.version);let gn=yt.currentProgram;Qt===!0&&(gn=jr(z,I,U));let hs=!1,Qe=!1,or=!1;const de=gn.getUniforms(),Rn=yt.uniforms;if(bt.useProgram(gn.program)&&(hs=!0,Qe=!0,or=!0),z.id!==w&&(w=z.id,Qe=!0),hs||M!==S){bt.buffers.depth.getReversed()?(it.copy(S.projectionMatrix),Ap(it),Rp(it),de.setValue(N,"projectionMatrix",it)):de.setValue(N,"projectionMatrix",S.projectionMatrix),de.setValue(N,"viewMatrix",S.matrixWorldInverse);const li=de.map.cameraPosition;li!==void 0&&li.setValue(N,Tt.setFromMatrixPosition(S.matrixWorld)),Xt.logarithmicDepthBuffer&&de.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&de.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Qe=!0,or=!0)}if(U.isSkinnedMesh){de.setOptional(N,U,"bindMatrix"),de.setOptional(N,U,"bindMatrixInverse");const on=U.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),de.setValue(N,"boneTexture",on.boneTexture,E))}U.isBatchedMesh&&(de.setOptional(N,U,"batchingTexture"),de.setValue(N,"batchingTexture",U._matricesTexture,E),de.setOptional(N,U,"batchingIdTexture"),de.setValue(N,"batchingIdTexture",U._indirectTexture,E),de.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&de.setValue(N,"batchingColorTexture",U._colorsTexture,E));const lr=k.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&At.update(U,k,gn),(Qe||yt.receiveShadow!==U.receiveShadow)&&(yt.receiveShadow=U.receiveShadow,de.setValue(N,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Rn.envMap.value=gt,Rn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Rn.envMapIntensity.value=I.environmentIntensity),Qe&&(de.setValue(N,"toneMappingExposure",y.toneMappingExposure),yt.needsLights&&xf(Rn,or),et&&z.fog===!0&&at.refreshFogUniforms(Rn,et),at.refreshMaterialUniforms(Rn,z,B,Y,f.state.transmissionRenderTarget[S.id]),Xa.upload(N,jc(yt),Rn,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Xa.upload(N,jc(yt),Rn,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&de.setValue(N,"center",U.center),de.setValue(N,"modelViewMatrix",U.modelViewMatrix),de.setValue(N,"normalMatrix",U.normalMatrix),de.setValue(N,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const on=z.uniformsGroups;for(let li=0,ci=on.length;li<ci;li++){const Kc=on[li];L.update(Kc,gn),L.bind(Kc,gn)}}return gn}function xf(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Sf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,I,k){Mt.get(S.texture).__webglTexture=I,Mt.get(S.depthTexture).__webglTexture=k;const z=Mt.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const k=Mt.get(S);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,k=0){P=S,R=I,A=k;let z=!0,U=null,et=!1,lt=!1;if(S){const gt=Mt.get(S);if(gt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(gt.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(gt.__hasExternalTextures)E.rebindTextures(S,Mt.get(S.texture).__webglTexture,Mt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const vt=S.depthTexture;if(gt.__boundDepthTexture!==vt){if(vt!==null&&Mt.has(vt)&&(S.width!==vt.image.width||S.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const It=Mt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[I])?U=It[I][k]:U=It[I],et=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?U=Mt.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[k]:U=It,C.copy(S.viewport),H.copy(S.scissor),O=S.scissorTest}else C.copy(ft).multiplyScalar(B).floor(),H.copy(Dt).multiplyScalar(B).floor(),O=Vt;if(bt.bindFramebuffer(N.FRAMEBUFFER,U)&&z&&bt.drawBuffers(S,U),bt.viewport(C),bt.scissor(H),bt.setScissorTest(O),et){const gt=Mt.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,k)}else if(lt){const gt=Mt.get(S.texture),Rt=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,gt.__webglTexture,k||0,Rt)}w=-1},this.readRenderTargetPixels=function(S,I,k,z,U,et,lt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){bt.bindFramebuffer(N.FRAMEBUFFER,mt);try{const gt=S.texture,Rt=gt.format,It=gt.type;if(!Xt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-z&&k>=0&&k<=S.height-U&&N.readPixels(I,k,z,U,Ft.convert(Rt),Ft.convert(It),et)}finally{const gt=P!==null?Mt.get(P).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(S,I,k,z,U,et,lt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){const gt=S.texture,Rt=gt.format,It=gt.type;if(!Xt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-z&&k>=0&&k<=S.height-U){bt.bindFramebuffer(N.FRAMEBUFFER,mt);const vt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.bufferData(N.PIXEL_PACK_BUFFER,et.byteLength,N.STREAM_READ),N.readPixels(I,k,z,U,Ft.convert(Rt),Ft.convert(It),0);const Zt=P!==null?Mt.get(P).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,Zt);const ce=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Tp(N,ce,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,et),N.deleteBuffer(vt),N.deleteSync(ce),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,I=null,k=0){S.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const z=Math.pow(2,-k),U=Math.floor(S.image.width*z),et=Math.floor(S.image.height*z),lt=I!==null?I.x:0,mt=I!==null?I.y:0;E.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,lt,mt,U,et),bt.unbindTexture()},this.copyTextureToTexture=function(S,I,k=null,z=null,U=0){S.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],I=arguments[2],U=arguments[3]||0,k=null);let et,lt,mt,gt,Rt,It,vt,Zt,ce;const ue=S.isCompressedTexture?S.mipmaps[U]:S.image;k!==null?(et=k.max.x-k.min.x,lt=k.max.y-k.min.y,mt=k.isBox3?k.max.z-k.min.z:1,gt=k.min.x,Rt=k.min.y,It=k.isBox3?k.min.z:0):(et=ue.width,lt=ue.height,mt=ue.depth||1,gt=0,Rt=0,It=0),z!==null?(vt=z.x,Zt=z.y,ce=z.z):(vt=0,Zt=0,ce=0);const qe=Ft.convert(I.format),Jt=Ft.convert(I.type);let yt;I.isData3DTexture?(E.setTexture3D(I,0),yt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(E.setTexture2DArray(I,0),yt=N.TEXTURE_2D_ARRAY):(E.setTexture2D(I,0),yt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const Xn=N.getParameter(N.UNPACK_ROW_LENGTH),Qt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),gn=N.getParameter(N.UNPACK_SKIP_PIXELS),hs=N.getParameter(N.UNPACK_SKIP_ROWS),Qe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ue.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Rt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,It);const or=S.isDataArrayTexture||S.isData3DTexture,de=I.isDataArrayTexture||I.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Rn=Mt.get(S),lr=Mt.get(I),on=Mt.get(Rn.__renderTarget),li=Mt.get(lr.__renderTarget);bt.bindFramebuffer(N.READ_FRAMEBUFFER,on.__webglFramebuffer),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ci=0;ci<mt;ci++)or&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(S).__webglTexture,U,It+ci),S.isDepthTexture?(de&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(I).__webglTexture,U,ce+ci),N.blitFramebuffer(gt,Rt,et,lt,vt,Zt,et,lt,N.DEPTH_BUFFER_BIT,N.NEAREST)):de?N.copyTexSubImage3D(yt,U,vt,Zt,ce+ci,gt,Rt,et,lt):N.copyTexSubImage2D(yt,U,vt,Zt,ce+ci,gt,Rt,et,lt);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else de?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(yt,U,vt,Zt,ce,et,lt,mt,qe,Jt,ue.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(yt,U,vt,Zt,ce,et,lt,mt,qe,ue.data):N.texSubImage3D(yt,U,vt,Zt,ce,et,lt,mt,qe,Jt,ue):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,vt,Zt,et,lt,qe,Jt,ue.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,vt,Zt,ue.width,ue.height,qe,ue.data):N.texSubImage2D(N.TEXTURE_2D,U,vt,Zt,et,lt,qe,Jt,ue);N.pixelStorei(N.UNPACK_ROW_LENGTH,Xn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gn),N.pixelStorei(N.UNPACK_SKIP_ROWS,hs),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe),U===0&&I.generateMipmaps&&N.generateMipmap(yt),bt.unbindTexture()},this.copyTextureToTexture3D=function(S,I,k=null,z=null,U=0){return S.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,S=arguments[2],I=arguments[3],U=arguments[4]||0),xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,I,k,z,U)},this.initRenderTarget=function(S){Mt.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),bt.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,bt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class Ka extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ld{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ja,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new T;class Fn{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ja extends Di{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Es;const fr=new T,Ts=new T,As=new T,Rs=new xt,pr=new xt,Id=new ae,_a=new T,mr=new T,ya=new T,jh=new xt,qo=new xt,Zh=new xt;class rc extends Ee{constructor(t=new Ja){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new Et;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ld(e,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Fn(n,3,0,!1)),Es.setAttribute("uv",new Fn(n,2,3,!1))}this.geometry=Es,this.material=t,this.center=new xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),Id.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;xa(_a.set(-.5,-.5,0),As,a,Ts,s,r),xa(mr.set(.5,-.5,0),As,a,Ts,s,r),xa(ya.set(.5,.5,0),As,a,Ts,s,r),jh.set(0,0),qo.set(1,0),Zh.set(1,1);let o=t.ray.intersectTriangle(_a,mr,ya,!1,fr);if(o===null&&(xa(mr.set(-.5,.5,0),As,a,Ts,s,r),qo.set(0,1),o=t.ray.intersectTriangle(_a,ya,mr,!1,fr),o===null))return;const l=t.ray.origin.distanceTo(fr);l<t.near||l>t.far||e.push({distance:l,point:fr.clone(),uv:pn.getInterpolation(fr,_a,mr,ya,jh,qo,Zh,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xa(i,t,e,n,s,r){Rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(pr.x=r*Rs.x-s*Rs.y,pr.y=s*Rs.x+r*Rs.y):pr.copy(Rs),i.copy(t),i.x+=pr.x,i.y+=pr.y,i.applyMatrix4(Id)}class fo extends Ue{constructor(t=null,e=1,n=1,s,r,a,o,l,c=we,h=we,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai extends Di{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qa=new T,to=new T,Kh=new ae,gr=new Gr,Sa=new os,Yo=new T,Jh=new T;class Lc extends Ee{constructor(t=new Et,e=new Ai){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Qa.fromBufferAttribute(e,s-1),to.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Qa.distanceTo(to);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,t.ray.intersectsSphere(Sa)===!1)return;Kh.copy(s).invert(),gr.copy(t.ray).applyMatrix4(Kh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),b=h.getX(v+1),x=Ma(this,t,gr,l,f,b);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=Ma(this,t,gr,l,v,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const f=Ma(this,t,gr,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Ma(this,t,gr,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ma(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Qa.fromBufferAttribute(a,s),to.fromBufferAttribute(a,r),e.distanceSqToSegment(Qa,to,Yo,Jh)>n)return;Yo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Yo);if(!(l<t.near||l>t.far))return{distance:l,point:Jh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Qh=new T,tu=new T;class ts extends Lc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Qh.fromBufferAttribute(e,s),tu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qh.distanceTo(tu);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ud extends Di{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const eu=new ae,ac=new Gr,ba=new os,wa=new T;class $e extends Ee{constructor(t=new Et,e=new Ud){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,t.ray.intersectsSphere(ba)===!1)return;eu.copy(s).invert(),ac.copy(t.ray).applyMatrix4(eu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);wa.fromBufferAttribute(u,m),nu(wa,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,v=p;g<v;g++)wa.fromBufferAttribute(u,g),nu(wa,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nu(i,t,e,n,s,r,a){const o=ac.distanceSqToPoint(i);if(o<e){const l=new T;ac.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ws extends Ue{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qs extends Et{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new T,h=new xt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class po extends Et{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const v=[],m=n/2;let f=0;b(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(p,2));function b(){const y=new T,D=new T;let R=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const w=[],M=P/r,C=M*(e-t)+t;for(let H=0;H<=s;H++){const O=H/s,W=O*l+o,$=Math.sin(W),G=Math.cos(W);D.x=C*$,D.y=-M*n+m,D.z=C*G,u.push(D.x,D.y,D.z),y.set($,A,G).normalize(),d.push(y.x,y.y,y.z),p.push(O,1-M),w.push(g++)}v.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){const M=v[w][P],C=v[w+1][P],H=v[w+1][P+1],O=v[w][P+1];(t>0||w!==0)&&(h.push(M,C,O),R+=3),(e>0||w!==r-1)&&(h.push(C,H,O),R+=3)}c.addGroup(f,R,0),f+=R}function x(y){const D=g,R=new xt,A=new T;let P=0;const w=y===!0?t:e,M=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const C=g;for(let H=0;H<=s;H++){const W=H/s*l+o,$=Math.cos(W),G=Math.sin(W);A.x=w*G,A.y=m*M,A.z=w*$,u.push(A.x,A.y,A.z),d.push(0,M,0),R.x=$*.5+.5,R.y=G*.5*M+.5,p.push(R.x,R.y),g++}for(let H=0;H<s;H++){const O=D+H,W=C+H;y===!0?h.push(W,W+1,O):h.push(W+1,W,O),P+=3}c.addGroup(f,P,y===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ic extends Et{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new T,g=new xt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let f=0;f<n;f++){const b=f+m,x=b,y=b+n+1,D=b+n+2,R=b+1;o.push(x,y,R),o.push(y,D,R)}}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ic(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class rn extends Et{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new T,d=new T,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const b=[],x=f/n;let y=0;f===0&&a===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let D=0;D<=e;D++){const R=D/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+y,1-x),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){const x=h[f][b+1],y=h[f][b],D=h[f+1][b],R=h[f+1][b+1];(f!==0||a>0)&&p.push(x,y,R),(f!==n-1||l<Math.PI)&&p.push(y,D,R)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Uc extends Et{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,b=(s+1)*p+g;a.push(v,m,b),a.push(m,f,b)}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class B_ extends Et{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new T,r=new T;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,p=u.count;for(let g=d,v=d+p;g<v;g+=3)for(let m=0;m<3;m++){const f=o.getX(g+m),b=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,b),iu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),iu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new qt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function iu(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class Nd extends Di{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Ct(16777215),this.specular=new Ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const su={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class z_{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const H_=new z_;class mo{constructor(t){this.manager=t!==void 0?t:H_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}mo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Fd extends mo{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=su.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=kr("img");function l(){h(),su.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class G_ extends mo{constructor(t){super(t)}load(t,e,n,s){const r=new Cc;r.colorSpace=xe;const a=new Fd(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return r}}class go extends mo{constructor(t){super(t)}load(t,e,n,s){const r=new Ue,a=new Fd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Od extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const jo=new ae,ru=new T,au=new T;class V_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pc,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(ru),au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(au),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class W_ extends V_{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X_ extends Od{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new W_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $_ extends Od{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class q_ extends Et{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class oc extends Ld{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const ou=new ae;class Y_{constructor(t,e,n=0,s=1/0){this.ray=new Gr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ac,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ou.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(t,e=!0,n=[]){return lc(t,this,n,e),n.sort(lu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)lc(t[s],this,n,e);return n.sort(lu),n}}function lu(i,t){return i.distance-t.distance}function lc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)lc(r[a],t,e,!0)}}class cu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const hu=new T,Ea=new T;class j_{constructor(t=new T,e=new T){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){hu.subVectors(t,this.start),Ea.subVectors(this.end,this.start);const n=Ea.dot(Ea);let r=Ea.dot(hu)/n;return e&&(r=Ce(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Z_ extends as{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);const K_=23.44*Math.PI/180;class J_{mesh;earth;nightOverlay;sunDirUniform;phongMaterial;flatMaterial;terminatorEnabled=!0;nightLightsEnabled=!0;constructor(){const t=new go,e=t.load("textures/earth_daymap_2k.jpg"),n=t.load("textures/earth_nightmap_2k.jpg"),s=t.load("textures/earth_normal_2048.jpg"),r=t.load("textures/earth_specular_2048.jpg");e.colorSpace=xe,n.colorSpace=xe;const a=new rn(1,128,64);this.phongMaterial=new Nd({map:e,normalMap:s,normalScale:new xt(.85,.85),specularMap:r,specular:new Ct(3364215),shininess:18}),this.flatMaterial=new Ve({map:e,color:12303291}),this.earth=new Ht(a,this.phongMaterial),this.sunDirUniform={value:new T(1,0,0)};const o=new ne({uniforms:{uMap:{value:n},uSunDirection:this.sunDirUniform,uIntensity:{value:1.6}},vertexShader:`
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
      `,transparent:!0,blending:Je,depthWrite:!1}),l=new rn(1.0008,128,64);this.nightOverlay=new Ht(l,o),this.mesh=new Kt,this.mesh.rotation.z=K_,this.mesh.add(this.earth),this.mesh.add(this.nightOverlay)}setSunDirection(t){this.sunDirUniform.value.copy(t)}setRotationY(t){this.earth.rotation.y=t,this.nightOverlay.rotation.y=t}setTerminatorVisible(t){this.terminatorEnabled=t,this.earth.material=t?this.phongMaterial:this.flatMaterial,this.updateNightOverlay()}setNightLightsVisible(t){this.nightLightsEnabled=t,this.updateNightOverlay()}updateNightOverlay(){this.nightOverlay.visible=this.terminatorEnabled&&this.nightLightsEnabled}attachToEarth(t){this.earth.add(t)}worldToLatLon(t){const e=this.earth.worldToLocal(t.clone()).normalize(),n=Math.asin(Math.max(-1,Math.min(1,e.y)))*180/Math.PI,s=Math.atan2(-e.z,e.x)*180/Math.PI;return{lat:n,lon:s}}get earthMesh(){return this.earth}}class Q_{mesh;constructor(t=8e3,e=28e3){const n=new Float32Array(t*3),s=new Float32Array(t);for(let o=0;o<t;o++){const l=Math.random(),c=Math.random(),h=2*Math.PI*l,u=Math.acos(2*c-1);n[o*3]=e*Math.sin(u)*Math.cos(h),n[o*3+1]=e*Math.sin(u)*Math.sin(h),n[o*3+2]=e*Math.cos(u),s[o]=1+Math.random()*2}const r=new Et;r.setAttribute("position",new Pt(n,3));const a=new Ud({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.9});this.mesh=new $e(r,a)}}async function ty(i="lo"){const t=["px","nx","py","ny","pz","nz"].map(s=>`textures/starmap_${s}.jpg`);if(await uu(t[0])){const s=await ey(t);if(s)return console.log("[earth-clock] skybox loaded (6-face cubemap)"),s}const n=i==="hi"?["textures/8k_stars_milky_way.jpg","textures/starmap.jpg","textures/2k_stars_milky_way.jpg"]:["textures/2k_stars_milky_way.jpg","textures/starmap.jpg","textures/8k_stars_milky_way.jpg"];for(const s of n){if(!await uu(s))continue;const r=await ny(s);if(r)return console.log(`[earth-clock] skybox loaded (equirectangular: ${s})`),r}return console.warn("[earth-clock] no skybox texture found in textures/; using procedural Points starfield. To upgrade: download NASA's 'Deep Star Map 2020' (8K equirectangular) from https://svs.gsfc.nasa.gov/4851/ and save it as frontend/public/textures/starmap.jpg."),null}async function uu(i){try{return(await fetch(i,{method:"HEAD"})).ok}catch{return!1}}function ey(i){return new Promise(t=>{new G_().load(i,e=>{e.colorSpace=xe,t(e)},void 0,()=>t(null))})}function ny(i){return new Promise(t=>{new go().load(i,e=>{e.mapping=Ya,e.colorSpace=xe,t(e)},void 0,()=>t(null))})}class iy{mesh;sunDirUniform;material;constructor(t=1,e=.018){this.sunDirUniform={value:new T(1,0,0)};const n=new rn(t+e,96,48);this.material=new ne({uniforms:{uSunDirection:this.sunDirUniform,uColorDay:{value:new Ct(8961023)},uColorTwilight:{value:new Ct(16750950)},uPower:{value:3.2},uIntensity:{value:1.4}},vertexShader:`
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
      `,transparent:!0,blending:Je,depthWrite:!1,side:zn}),this.mesh=new Ht(n,this.material)}setSunDirection(t){this.sunDirUniform.value.copy(t)}setPower(t){this.material.uniforms.uPower.value=t}setIntensity(t){this.material.uniforms.uIntensity.value=t}}const sy=.273,du=.95;class ry{mesh;material;defaultEmissive=new Ct(16777215);umbralTint=new Ct(9052176);_scratchColor=new Ct;constructor(){const e=new go().load("textures/moon_1024.jpg");e.colorSpace=xe;const n=new rn(sy,64,32);this.material=new Nd({map:e,shininess:2,specular:0,emissive:16777215,emissiveMap:e,emissiveIntensity:du}),this.mesh=new Ht(n,this.material)}setPosition(t){this.mesh.position.copy(t)}setEclipseShadow(t,e=1){const n=Math.max(0,Math.min(1,t)),s=e>=1?.82:e>0?.82*e:.1;this.material.emissiveIntensity=du*(1-s*n),this._scratchColor.copy(this.defaultEmissive).lerp(this.umbralTint,s*n),this.material.emissive.copy(this._scratchColor)}}class Ar{mesh;disc;corona;static R_SUN_IN_R_EARTH=696e3/6371;static AU_IN_R_EARTH=149597870/6371;constructor(){this.mesh=new Kt;const t=new rn(Ar.R_SUN_IN_R_EARTH,48,24),e=new Ve({color:16766285});this.disc=new Ht(t,e),this.disc.frustumCulled=!1,this.mesh.add(this.disc);const n=ay(256),s=new Ja({map:n,color:16777215,transparent:!0,blending:Je,depthWrite:!1,depthTest:!0});this.corona=new rc(s);const r=Ar.R_SUN_IN_R_EARTH*8;this.corona.scale.set(r,r,1),this.corona.frustumCulled=!1,this.mesh.add(this.corona)}setSunDirection(t){this.mesh.position.copy(t).normalize().multiplyScalar(Ar.AU_IN_R_EARTH)}}function ay(i){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255, 255, 240, 1.00)"),n.addColorStop(.06,"rgba(255, 245, 200, 1.00)"),n.addColorStop(.14,"rgba(255, 220, 130, 0.90)"),n.addColorStop(.28,"rgba(255, 190,  90, 0.55)"),n.addColorStop(.5,"rgba(255, 150,  60, 0.25)"),n.addColorStop(.75,"rgba(255, 120,  40, 0.10)"),n.addColorStop(1,"rgba(255, 100,  30, 0.00)"),e.fillStyle=n,e.fillRect(0,0,i,i);const s=new Ws(t);return s.needsUpdate=!0,s}const oy=new Js(-1,1,1,-1,0,1);class ly extends Et{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const cy=new ly;class hy{constructor(t){this._mesh=new Ht(cy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,oy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class uy{constructor(t,e,n){this.variables=[],this.currentTextureIndex=0;let s=Tn;const r={passThruTexture:{value:null}},a=c(u(),r),o=new hy(a);this.setDataType=function(d){return s=d,this},this.addVariable=function(d,p,g){const v=this.createShaderMaterial(p),m={name:d,initialValueTexture:g,material:v,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:we,magFilter:we};return this.variables.push(m),m},this.setVariableDependencies=function(d,p){d.dependencies=p},this.init=function(){if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let d=0;d<this.variables.length;d++){const p=this.variables[d];p.renderTargets[0]=this.createRenderTarget(t,e,p.wrapS,p.wrapT,p.minFilter,p.magFilter),p.renderTargets[1]=this.createRenderTarget(t,e,p.wrapS,p.wrapT,p.minFilter,p.magFilter),this.renderTexture(p.initialValueTexture,p.renderTargets[0]),this.renderTexture(p.initialValueTexture,p.renderTargets[1]);const g=p.material,v=g.uniforms;if(p.dependencies!==null)for(let m=0;m<p.dependencies.length;m++){const f=p.dependencies[m];if(f.name!==p.name){let b=!1;for(let x=0;x<this.variables.length;x++)if(f.name===this.variables[x].name){b=!0;break}if(!b)return"Variable dependency not found. Variable="+p.name+", dependency="+f.name}v[f.name]={value:null},g.fragmentShader=`
uniform sampler2D `+f.name+`;
`+g.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const d=this.currentTextureIndex,p=this.currentTextureIndex===0?1:0;for(let g=0,v=this.variables.length;g<v;g++){const m=this.variables[g];if(m.dependencies!==null){const f=m.material.uniforms;for(let b=0,x=m.dependencies.length;b<x;b++){const y=m.dependencies[b];f[y.name].value=y.renderTargets[d].texture}}this.doRenderTarget(m.material,m.renderTargets[p])}this.currentTextureIndex=p},this.getCurrentRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){o.dispose();const d=this.variables;for(let p=0;p<d.length;p++){const g=d[p];g.initialValueTexture&&g.initialValueTexture.dispose();const v=g.renderTargets;for(let m=0;m<v.length;m++)v[m].dispose()}};function l(d){d.defines.resolution="vec2( "+t.toFixed(1)+", "+e.toFixed(1)+" )"}this.addResolutionDefine=l;function c(d,p){p=p||{};const g=new ne({name:"GPUComputationShader",uniforms:p,vertexShader:h(),fragmentShader:d});return l(g),g}this.createShaderMaterial=c,this.createRenderTarget=function(d,p,g,v,m,f){return d=d||t,p=p||e,g=g||Ie,v=v||Ie,m=m||we,f=f||we,new Hn(d,p,{wrapS:g,wrapT:v,minFilter:m,magFilter:f,format:Be,type:s,depthBuffer:!1})},this.createTexture=function(){const d=new Float32Array(t*e*4),p=new fo(d,t,e,Be,Tn);return p.needsUpdate=!0,p},this.renderTexture=function(d,p){r.passThruTexture.value=d,this.doRenderTarget(a,p),r.passThruTexture.value=null},this.doRenderTarget=function(d,p){const g=n.getRenderTarget(),v=n.xr.enabled,m=n.shadowMap.autoUpdate;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,o.material=d,n.setRenderTarget(p),o.render(n),o.material=a,n.xr.enabled=v,n.shadowMap.autoUpdate=m,n.setRenderTarget(g)};function h(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function u(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const dy=23.44*Math.PI/180;class fy{mesh;flatMesh;points;gpu;positionVar;renderMaterial;flatRenderMaterial;constructor(t,e=65536){const n=Math.ceil(Math.sqrt(e)),s=n*n;this.gpu=new uy(n,n,t);const r=this.gpu.createTexture(),a=r.image.data;for(let p=0;p<s;p++)a[p*4]=(Math.random()-.5)*360,a[p*4+1]=(Math.random()-.5)*160,a[p*4+2]=Math.random(),a[p*4+3]=1;const o=`
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
    `;this.positionVar=this.gpu.addVariable("texturePosition",o,r),this.gpu.setVariableDependencies(this.positionVar,[this.positionVar]),this.positionVar.wrapS=Ie,this.positionVar.wrapT=Ie,this.positionVar.minFilter=we,this.positionVar.magFilter=we;const l=this.positionVar.material.uniforms;l.uWindTexture={value:this.createMockWindTexture()},l.uDt={value:1/60},l.uSpeed={value:.12},l.uTime={value:0},l.uRespawnRate={value:.1};const c=this.gpu.init();c&&console.error("[Particles] GPUComputationRenderer init error:",c);const h=new Float32Array(s*3),u=new Float32Array(s*2);for(let p=0;p<s;p++){const g=p%n,v=Math.floor(p/n);u[p*2]=(g+.5)/n,u[p*2+1]=(v+.5)/n}const d=new Et;d.setAttribute("position",new Pt(h,3)),d.setAttribute("lookupUV",new Pt(u,2)),this.renderMaterial=new ne({uniforms:{uTexturePosition:{value:null},uPointSize:{value:1.5},uAlpha:{value:.25}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Je}),this.points=new $e(d,this.renderMaterial),this.mesh=new Kt,this.mesh.rotation.z=dy,this.mesh.add(this.points),this.flatRenderMaterial=new ne({uniforms:{uTexturePosition:{value:null},uPointSize:{value:1.7},uAlpha:{value:.18}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Je}),this.flatMesh=new $e(d,this.flatRenderMaterial)}createMockWindTexture(){const e=new Uint16Array(64),n=Sd.toHalfFloat,s=n(10),r=n(1);for(let o=0;o<16;o++)e[o*4]=s,e[o*4+1]=0,e[o*4+2]=0,e[o*4+3]=r;const a=new fo(e,4,4,Be,rs);return a.wrapS=ri,a.wrapT=Ie,a.magFilter=_e,a.minFilter=_e,a.needsUpdate=!0,a}setWindTexture(t){const e=this.positionVar.material.uniforms.uWindTexture.value;e&&e.dispose(),this.positionVar.material.uniforms.uWindTexture.value=t}setRotationY(t){this.points.rotation.y=t}setSpeed(t){this.positionVar.material.uniforms.uSpeed.value=t}setPointSize(t){this.renderMaterial.uniforms.uPointSize.value=t,this.flatRenderMaterial.uniforms.uPointSize.value=t}setAlpha(t){this.renderMaterial.uniforms.uAlpha.value=t,this.flatRenderMaterial.uniforms.uAlpha.value=t}update(t,e){const n=this.positionVar.material.uniforms;n.uDt.value=Math.min(t,1/30),n.uTime.value=e,this.gpu.compute();const s=this.gpu.getCurrentRenderTarget(this.positionVar).texture;this.renderMaterial.uniforms.uTexturePosition.value=s,this.flatRenderMaterial.uniforms.uTexturePosition.value=s}dispose(){this.gpu.dispose(),this.renderMaterial.dispose(),this.flatRenderMaterial.dispose(),this.points.geometry.dispose()}}const py=23.44*Math.PI/180;class Os{mesh;flatMesh;rtA;rtB;current;particleScene;fadeScene;trailCamera;fadeMaterial;compositeMaterial;flatCompositeMaterial;fadeQuadCam;compositeSphere;static TRAIL_WIDTH=2048;static TRAIL_HEIGHT=1024;constructor(t){const e={depthBuffer:!1,stencilBuffer:!1,type:An,format:Be,minFilter:_e,magFilter:_e,wrapS:ri,wrapT:Ie};this.rtA=new Hn(Os.TRAIL_WIDTH,Os.TRAIL_HEIGHT,e),this.rtB=new Hn(Os.TRAIL_WIDTH,Os.TRAIL_HEIGHT,e),this.current=this.rtA,this.trailCamera=new Js(-1,1,.5,-.5,0,10),this.trailCamera.position.set(0,0,1),this.particleScene=new Ka,this.particleScene.add(t),this.fadeMaterial=new ne({uniforms:{uPrev:{value:null},uFade:{value:.992}},vertexShader:`
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
      `,depthTest:!1,depthWrite:!1}),this.fadeQuadCam=new Js(-1,1,1,-1,0,1),this.fadeScene=new Ka,this.fadeScene.add(new Ht(new Ti(2,2),this.fadeMaterial)),this.compositeMaterial=new ne({uniforms:{uTrails:{value:null},uOpacity:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Je}),this.compositeSphere=new Ht(new rn(1.006,96,48),this.compositeMaterial),this.compositeSphere.renderOrder=3,this.mesh=new Kt,this.mesh.rotation.z=py,this.mesh.add(this.compositeSphere),this.flatCompositeMaterial=new ne({uniforms:{uTrails:this.compositeMaterial.uniforms.uTrails,uOpacity:this.compositeMaterial.uniforms.uOpacity},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Je}),this.flatMesh=new Ht(new Ti(2,1),this.flatCompositeMaterial),this.flatMesh.position.z=.005}step(t){const e=this.current===this.rtA?this.rtB:this.rtA,n=t.autoClear;t.autoClear=!1,this.fadeMaterial.uniforms.uPrev.value=this.current.texture,t.setRenderTarget(e),t.setClearColor(0,0),t.clear(!0,!1,!1),t.render(this.fadeScene,this.fadeQuadCam),t.render(this.particleScene,this.trailCamera),t.setRenderTarget(null),t.autoClear=n,this.compositeMaterial.uniforms.uTrails.value=e.texture,this.current=e}setRotationY(t){this.compositeSphere.rotation.y=t}setVisible(t){this.mesh.visible=t,this.flatMesh.visible=t}setFade(t){this.fadeMaterial.uniforms.uFade.value=t}setOpacity(t){this.compositeMaterial.uniforms.uOpacity.value=t}setIntensity(t){switch(t){case"subtle":this.fadeMaterial.uniforms.uFade.value=.98,this.compositeMaterial.uniforms.uOpacity.value=.35;break;case"standard":this.fadeMaterial.uniforms.uFade.value=.99,this.compositeMaterial.uniforms.uOpacity.value=.65;break;case"bold":this.fadeMaterial.uniforms.uFade.value=.992,this.compositeMaterial.uniforms.uOpacity.value=1;break}}resize(t,e){}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.fadeMaterial.dispose(),this.compositeMaterial.dispose(),this.flatCompositeMaterial.dispose()}}const my=23.44*Math.PI/180;class gy{mesh;flatMesh;lines;material;flatMaterial;constructor(){const t=new Et;t.setAttribute("position",new qt([],3)),this.material=new Ai({color:13161704,transparent:!0,opacity:.35,depthWrite:!1}),this.lines=new ts(t,this.material),this.mesh=new Kt,this.mesh.rotation.z=my,this.mesh.add(this.lines);const e=new Et;e.setAttribute("position",new qt([],3)),this.flatMaterial=new Ai({color:11583712,transparent:!0,opacity:.55,depthWrite:!1}),this.flatMesh=new ts(e,this.flatMaterial)}loadFromTopology(t,e,n=1.002){const s=t.objects[e];if(!s)throw new Error(`Coastlines: object "${e}" not in topology`);const{scale:r,translate:a}=t.transform,o=m=>{const f=m<0,b=t.arcs[f?~m:m];let x=0,y=0;const D=[];for(const[R,A]of b)x+=R,y+=A,D.push([x*r[0]+a[0],y*r[1]+a[1]]);return f?D.reverse():D},l=(m,f,b)=>{const x=m*Math.PI/180,y=f*Math.PI/180,D=Math.cos(y);b[0]=n*D*Math.cos(x),b[1]=n*Math.sin(y),b[2]=-n*D*Math.sin(x)},c=[],h=[],u=[0,0,0],d=[0,0,0],p=m=>{let f=[];for(const b of m){const x=o(b);f.length===0?f=x:f.push(...x.slice(1))}for(let b=1;b<f.length;b++){const x=f[b-1][0],y=f[b-1][1],D=f[b][0],R=f[b][1];l(x,y,u),l(D,R,d),c.push(u[0],u[1],u[2],d[0],d[1],d[2]),!(Math.abs(D-x)>180)&&h.push(x/180,y/180,0,D/180,R/180,0)}};for(const m of s.geometries)if(m.type==="LineString")p(m.arcs);else if(m.type==="MultiLineString")for(const f of m.arcs)p(f);const g=new Et;g.setAttribute("position",new qt(c,3)),this.lines.geometry.dispose(),this.lines.geometry=g;const v=new Et;v.setAttribute("position",new qt(h,3)),this.flatMesh.geometry.dispose(),this.flatMesh.geometry=v}setRotationY(t){this.lines.rotation.y=t}setOpacity(t){this.material.opacity=t}setColor(t){this.material.color.setHex(t)}}const fu=new Pi,Ta=new T;class ks extends q_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new qt(t,3)),this.setAttribute("uv",new qt(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new oc(e,6,1);return this.setAttribute("instanceStart",new Fn(n,3,0)),this.setAttribute("instanceEnd",new Fn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new oc(e,6,1);return this.setAttribute("instanceColorStart",new Fn(n,3,0)),this.setAttribute("instanceColorEnd",new Fn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new B_(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),fu.setFromBufferAttribute(e),this.boundingBox.union(fu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ta.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ta)),Ta.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ta));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}nt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new xt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ze.line={uniforms:Rc.merge([nt.common,nt.fog,nt.line]),vertexShader:`
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
		`};class eo extends ne{static get type(){return"LineMaterial"}constructor(t){super({uniforms:Rc.clone(Ze.line.uniforms),vertexShader:Ze.line.vertexShader,fragmentShader:Ze.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Zo=new re,pu=new T,mu=new T,Pe=new re,De=new re,Cn=new re,Ko=new T,Jo=new ae,Le=new j_,gu=new T,Aa=new Pi,Ra=new os,Pn=new re;let Un,is;function vu(i,t,e){return Pn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Pn.multiplyScalar(1/Pn.w),Pn.x=is/e.width,Pn.y=is/e.height,Pn.applyMatrix4(i.projectionMatrixInverse),Pn.multiplyScalar(1/Pn.w),Math.abs(Math.max(Pn.x,Pn.y))}function vy(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Le.start.fromBufferAttribute(s,o),Le.end.fromBufferAttribute(r,o),Le.applyMatrix4(e);const c=new T,h=new T;Un.distanceSqToSegment(Le.start,Le.end,h,c),h.distanceTo(c)<is*.5&&t.push({point:h,pointOnLine:c,distance:Un.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function _y(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;Un.at(1,Cn),Cn.w=1,Cn.applyMatrix4(t.matrixWorldInverse),Cn.applyMatrix4(n),Cn.multiplyScalar(1/Cn.w),Cn.x*=r.x/2,Cn.y*=r.y/2,Cn.z=0,Ko.copy(Cn),Jo.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,p=h;d<p;d++){if(Pe.fromBufferAttribute(l,d),De.fromBufferAttribute(c,d),Pe.w=1,De.w=1,Pe.applyMatrix4(Jo),De.applyMatrix4(Jo),Pe.z>u&&De.z>u)continue;if(Pe.z>u){const x=Pe.z-De.z,y=(Pe.z-u)/x;Pe.lerp(De,y)}else if(De.z>u){const x=De.z-Pe.z,y=(De.z-u)/x;De.lerp(Pe,y)}Pe.applyMatrix4(n),De.applyMatrix4(n),Pe.multiplyScalar(1/Pe.w),De.multiplyScalar(1/De.w),Pe.x*=r.x/2,Pe.y*=r.y/2,De.x*=r.x/2,De.y*=r.y/2,Le.start.copy(Pe),Le.start.z=0,Le.end.copy(De),Le.end.z=0;const v=Le.closestPointToPointParameter(Ko,!0);Le.at(v,gu);const m=Hr.lerp(Pe.z,De.z,v),f=m>=-1&&m<=1,b=Ko.distanceTo(gu)<is*.5;if(f&&b){Le.start.fromBufferAttribute(l,d),Le.end.fromBufferAttribute(c,d),Le.start.applyMatrix4(a),Le.end.applyMatrix4(a);const x=new T,y=new T;Un.distanceSqToSegment(Le.start,Le.end,y,x),e.push({point:y,pointOnLine:x,distance:Un.origin.distanceTo(y),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class Rr extends Ht{constructor(t=new ks,e=new eo({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)pu.fromBufferAttribute(e,a),mu.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+pu.distanceTo(mu);const r=new oc(s,2,1);return t.setAttribute("instanceDistanceStart",new Fn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Fn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Un=t.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;is=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Ra.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=is*.5;else{const u=Math.max(s.near,Ra.distanceToPoint(Un.origin));c=vu(s,u,l.resolution)}if(Ra.radius+=c,Un.intersectsSphere(Ra)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Aa.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=is*.5;else{const u=Math.max(s.near,Aa.distanceToPoint(Un.origin));h=vu(s,u,l.resolution)}Aa.expandByScalar(h),Un.intersectsBox(Aa)!==!1&&(n?vy(this,e):_y(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Zo),this.material.uniforms.resolution.value.set(Zo.z,Zo.w))}}const yy=23.44*Math.PI/180;class xy{mesh;flatMesh;lines;material;flatMaterial;constructor(){const t=new ks;this.material=new eo({color:14252605,linewidth:2,transparent:!0,opacity:.55,depthWrite:!1}),this.lines=new Rr(t,this.material),this.mesh=new Kt,this.mesh.rotation.z=yy,this.mesh.add(this.lines);const e=new ks;this.flatMaterial=new eo({color:14715469,linewidth:2.5,transparent:!0,opacity:.7,depthWrite:!1}),this.flatMesh=new Rr(e,this.flatMaterial)}load(t,e=1.0018){const n=(h,u,d)=>{const p=h*Math.PI/180,g=u*Math.PI/180,v=Math.cos(g);d[0]=e*v*Math.cos(p),d[1]=e*Math.sin(g),d[2]=-e*v*Math.sin(p)},s=[],r=[],a=[0,0,0],o=[0,0,0];for(const h of t.lines)for(let u=1;u<h.length;u++){const[d,p]=h[u-1],[g,v]=h[u];n(d,p,a),n(g,v,o),s.push(a[0],a[1],a[2],o[0],o[1],o[2]),!(Math.abs(g-d)>180)&&r.push(d/180,p/180,0,g/180,v/180,0)}const l=new ks;l.setPositions(s),this.lines.geometry.dispose(),this.lines.geometry=l;const c=new ks;c.setPositions(r),this.flatMesh.geometry.dispose(),this.flatMesh.geometry=c}setResolution(t,e){this.material.resolution.set(t,e),this.flatMaterial.resolution.set(t,e)}setRotationY(t){this.lines.rotation.y=t}}const Sy=23.44*Math.PI/180;class Zi{mesh;flatMesh;points;material;posAttr;flatPosAttr;eruptingAttr;hashAttr;idToIndex=new Map;static MAX_POINTS=1500;RADIUS=1.0016;constructor(){const t=new Et,e=new Float32Array(Zi.MAX_POINTS*3),n=new Float32Array(Zi.MAX_POINTS),s=new Float32Array(Zi.MAX_POINTS);this.posAttr=new Pt(e,3),this.eruptingAttr=new Pt(n,1),this.hashAttr=new Pt(s,1),this.posAttr.setUsage(ve),this.eruptingAttr.setUsage(ve),this.hashAttr.setUsage(ja),t.setAttribute("position",this.posAttr),t.setAttribute("aErupting",this.eruptingAttr),t.setAttribute("aHash",this.hashAttr),t.setDrawRange(0,0);const r=new Et,a=new Float32Array(Zi.MAX_POINTS*3);this.flatPosAttr=new Pt(a,3),this.flatPosAttr.setUsage(ve),r.setAttribute("position",this.flatPosAttr),r.setAttribute("aErupting",this.eruptingAttr),r.setAttribute("aHash",this.hashAttr),r.setDrawRange(0,0),this.material=new ne({uniforms:{uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1}),this.points=new $e(t,this.material),this.mesh=new Kt,this.mesh.rotation.z=Sy,this.mesh.add(this.points),this.flatMesh=new $e(r,this.material)}load(t){const e=this.RADIUS,n=Math.min(t.volcanoes.length,Zi.MAX_POINTS),s=this.posAttr.array,r=this.hashAttr.array,a=this.flatPosAttr.array;this.idToIndex.clear();for(let o=0;o<n;o++){const l=t.volcanoes[o];this.idToIndex.set(l.id,o);const c=l.lon*Math.PI/180,h=l.lat*Math.PI/180,u=Math.cos(h);s[o*3+0]=e*u*Math.cos(c),s[o*3+1]=e*Math.sin(h),s[o*3+2]=-e*u*Math.sin(c),a[o*3+0]=l.lon/180,a[o*3+1]=l.lat/180,a[o*3+2]=.001,r[o]=Math.abs(Math.sin(l.lat*12.9898+l.lon*78.233))*43758.5453%1}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.hashAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,n),this.flatMesh.geometry.setDrawRange(0,n)}setErupting(t){const e=this.eruptingAttr.array;e.fill(0);for(const n of t){const s=this.idToIndex.get(n);s!==void 0&&(e[s]=1)}this.eruptingAttr.needsUpdate=!0}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}}const My=23.44*Math.PI/180,Ca=1.003,by=1.13,wy=1.001,Pa=.0042,Ey=.012,Ty=.002,Da=Array.from({length:24},(i,t)=>({utcOffset:t-11,centerLon:(t-11)*15,centerLat:0})),_u=Array.from({length:24},(i,t)=>(t-11)*15),Ay="https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_time_zones.geojson";function vr(i,t,e){const n=i*(Math.PI/180),s=t*(Math.PI/180),r=Math.cos(s);return new T(e*r*Math.cos(n),e*Math.sin(s),-e*r*Math.sin(n))}function Ry(i){const e=String(i??"0").replace("−","-").replace("–","-").match(/^([+-]?\d+)(?::(\d+))?$/);if(!e)return 0;const n=parseInt(e[1],10),s=e[2]?parseInt(e[2],10):0;return n+(n<0?-s/60:s/60)}function Cy(i){const t=i>=0?"+":"−",e=Math.abs(i),n=Math.floor(e),s=Math.round((e-n)*60);return`${t}${n}:${String(s).padStart(2,"0")}`}function Py(i){const t=i>=0?"+":"−",e=Math.abs(i),n=Math.floor(e),s=Math.round((e-n)*60);return s===0?`UTC${t}${n}`:`UTC${t}${n}:${String(s).padStart(2,"0")}`}function kd(i){const t=(i+12)%26;return Math.round(t*137.508%360)}function Dy(i){return`hsl(${kd(i)}, 72%, 55%)`}function yu(i){const t=new Map;for(const e of i){const n=e.utcOffset;t.has(n)||t.set(n,[]),t.get(n).push(e)}return Array.from(t.entries()).sort(([e],[n])=>e-n).map(([e,n])=>{const s=e*15,r=n.reduce((a,o)=>Math.abs(o.centerLon-s)<Math.abs(a.centerLon-s)?o:a);return{utcOffset:e,centerLon:r.centerLon,centerLat:0,ianaName:r.ianaName}})}function Qo(i,t){if(i.ianaName)try{const n=new Date(t),s=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:i.ianaName,year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(n).filter(c=>c.type!=="literal").map(c=>[c.type,parseInt(c.value)])),r=s.hour===24?0:s.hour,a=s.minute,l=(Date.UTC(s.year,s.month-1,s.day,r,a)-n.getTime())/36e5;return{h:r,m:a,effectiveOffsetH:Math.round(l*4)/4}}catch{}const e=new Date(t+i.utcOffset*36e5);return{h:e.getUTCHours(),m:e.getUTCMinutes(),effectiveOffsetH:i.utcOffset}}function xu(i,t,e,n,s,r){i.clearRect(0,0,t,e);const a=3,o=Math.round(e*.2);i.fillStyle=`hsla(${r}, 55%, 11%, 0.88)`,i.beginPath(),i.moveTo(a+o,a),i.lineTo(t-a-o,a),i.arcTo(t-a,a,t-a,a+o,o),i.lineTo(t-a,e-a-o),i.arcTo(t-a,e-a,t-a-o,e-a,o),i.lineTo(a+o,e-a),i.arcTo(a,e-a,a,e-a-o,o),i.lineTo(a,a+o),i.arcTo(a,a,a+o,a,o),i.closePath(),i.fill(),i.strokeStyle=`hsla(${r}, 65%, 58%, 0.85)`,i.lineWidth=1.5,i.stroke(),i.textAlign="center",i.font=`bold ${Math.round(e*.3)}px system-ui,sans-serif`,i.fillStyle=`hsla(${r}, 75%, 82%, 1.0)`,i.textBaseline="alphabetic",i.fillText(n,t/2,a+Math.round(e*.42)),i.font=`bold ${Math.round(e*.46)}px system-ui,sans-serif`,i.fillStyle="rgba(235, 248, 255, 1.0)",i.fillText(s,t/2,e-a-Math.round(e*.1))}function Ly(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){const a=e[s][0],o=e[s][1],l=e[r][0],c=e[r][1];o>t!=c>t&&i<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}class Mn{mesh;flatMesh;rotGroup;linesHost3D;linesHostFlat;sprites3D=[];spritesFlat=[];canvases3D=[];canvasesFlat=[];textures3D=[];texturesFlat=[];zones=Da.slice();labelZones=Da.slice();displayMode="nominal";relativeMode=!1;_referenceIana=null;lastMinute=-1;lastUpdateWall=0;static MIN_UPDATE_MS=80;lastEffectiveSig="";overlayCanvas=null;overlayTex=null;overlaySphere=null;overlayPlane=null;static LW3=192;static LH3=78;static LWF=96;static LHF=42;resolutionWidth=typeof window<"u"?window.innerWidth:1;resolutionHeight=typeof window<"u"?window.innerHeight:1;constructor(){this.mesh=new Kt,this.mesh.rotation.z=My,this.rotGroup=new Kt,this.linesHost3D=new Kt,this.rotGroup.add(this.linesHost3D),this.mesh.add(this.rotGroup),this.flatMesh=new Kt,this.linesHostFlat=new Kt,this.flatMesh.add(this.linesHostFlat),this.buildNominalGeometry(),this.buildSprites(this.zones)}buildNominalGeometry(){this.clearLinesHost(this.linesHost3D),this.clearLinesHost(this.linesHostFlat);const t=[],e=[],n=40,s=-78,r=78,a=new Set(_u);a.add(-180);for(const o of _u)for(let l=0;l<n;l++){const c=s+(r-s)*l/n,h=s+(r-s)*(l+1)/n,u=vr(o,c,Ca),d=vr(o,h,Ca);t.push(u.x,u.y,u.z,d.x,d.y,d.z)}for(const o of a)for(let l=0;l<n;l++){const c=s+(r-s)*l/n,h=s+(r-s)*(l+1)/n;e.push(o/180,c/180,Pa,o/180,h/180,Pa)}this.addLineSegments(this.linesHost3D,t,6724044,.5,1.5),this.addLineSegments(this.linesHostFlat,e,6724044,.65,2)}buildPoliticalGeometry(t){this.clearLinesHost(this.linesHost3D),this.clearLinesHost(this.linesHostFlat);const e=[],n=[];for(const s of t.zones)for(const r of s.rings)for(let a=0;a<r.length-1;a++){const[o,l]=r[a],[c,h]=r[a+1];if(Math.abs(c-o)>180)continue;const u=vr(o,l,Ca),d=vr(c,h,Ca);e.push(u.x,u.y,u.z,d.x,d.y,d.z),n.push(o/180,l/180,Pa,c/180,h/180,Pa)}this.addLineSegments(this.linesHost3D,e,6724044,.5,1.5),this.addLineSegments(this.linesHostFlat,n,6724044,.65,2)}addLineSegments(t,e,n,s,r){const a=new ks;a.setPositions(e);const o=new eo({color:n,linewidth:r,transparent:!0,opacity:s,depthWrite:!1});o.resolution.set(this.resolutionWidth,this.resolutionHeight),t.add(new Rr(a,o))}setResolution(t,e){this.resolutionWidth=t,this.resolutionHeight=e;for(const n of[this.linesHost3D,this.linesHostFlat])for(const s of n.children)s instanceof Rr&&s.material.resolution.set(t,e)}clearLinesHost(t){const e=t.children.filter(n=>n instanceof Rr);for(const n of e){const s=n;s.geometry?.dispose(),s.material?.dispose(),t.remove(n)}}buildColorOverlay(t,e){this.overlayCanvas||(this.overlayCanvas=document.createElement("canvas"),this.overlayCanvas.width=2048,this.overlayCanvas.height=1024);const r=this.overlayCanvas.getContext("2d");r.clearRect(0,0,2048,1024);for(const a of t.zones){let o=a.utcOffset;if(e!==void 0&&a.tzid)try{o=Qo({ianaName:a.tzid,utcOffset:a.utcOffset,centerLon:a.centLon,centerLat:0},e).effectiveOffsetH}catch{}r.fillStyle=Dy(o);for(const l of a.rings){if(l.length<3)continue;const c=d=>(d+180)/360*2048,h=d=>(90-d)/180*1024;r.beginPath();let u=l[0][0];r.moveTo(c(l[0][0]),h(l[0][1]));for(let d=1;d<l.length;d++){const[p,g]=l[d];Math.abs(p-u)>180?(r.closePath(),r.fill(),r.beginPath(),r.moveTo(c(p),h(g))):r.lineTo(c(p),h(g)),u=p}r.closePath(),r.fill("evenodd")}}if(this.overlayTex?this.overlayTex.needsUpdate=!0:(this.overlayTex=new Ws(this.overlayCanvas),this.overlayTex.generateMipmaps=!1,this.overlayTex.minFilter=_e),this.overlaySphere){const a=this.overlaySphere.material;a.map=this.overlayTex,a.needsUpdate=!0}else{const a=new rn(wy,64,32),o=new Ve({map:this.overlayTex,transparent:!0,opacity:.52,depthWrite:!1,depthTest:!1,blending:ni,side:zn});this.overlaySphere=new Ht(a,o),this.rotGroup.add(this.overlaySphere)}if(this.overlayPlane){const a=this.overlayPlane.material;a.map=this.overlayTex,a.needsUpdate=!0}else{const a=new Ti(2,1),o=new Ve({map:this.overlayTex,transparent:!0,opacity:.52,depthWrite:!1,depthTest:!1,blending:ni});this.overlayPlane=new Ht(a,o),this.overlayPlane.position.z=Ty,this.flatMesh.add(this.overlayPlane)}}clearColorOverlay(){this.overlaySphere&&(this.rotGroup.remove(this.overlaySphere),this.overlaySphere.material.dispose(),this.overlaySphere.geometry.dispose(),this.overlaySphere=null),this.overlayPlane&&(this.flatMesh.remove(this.overlayPlane),this.overlayPlane.material.dispose(),this.overlayPlane.geometry.dispose(),this.overlayPlane=null),this.overlayTex?.dispose(),this.overlayTex=null}buildSprites(t){this.labelZones=t;for(const h of this.sprites3D)this.rotGroup.remove(h);for(const h of this.spritesFlat)this.flatMesh.remove(h);this.sprites3D.length=0,this.spritesFlat.length=0;const e=Mn.LW3,n=Mn.LH3,s=Mn.LWF,r=Mn.LHF;for(;this.canvases3D.length<t.length;){const h=document.createElement("canvas");h.width=e,h.height=n,this.canvases3D.push(h),this.textures3D.push(new Ws(h))}for(;this.canvasesFlat.length<t.length;){const h=document.createElement("canvas");h.width=s,h.height=r,this.canvasesFlat.push(h),this.texturesFlat.push(new Ws(h))}const a=.09,o=e/n,l=.032,c=s/r;for(let h=0;h<t.length;h++){const u=t[h],d=new Ja({map:this.textures3D[h],transparent:!0,depthWrite:!1,depthTest:!0}),p=new rc(d);p.position.copy(vr(u.centerLon,0,by)),p.scale.set(a*o,a,1),this.rotGroup.add(p),this.sprites3D.push(p);const g=Math.max(-.96,Math.min(.96,u.centerLon/180)),v=new Ja({map:this.texturesFlat[h],transparent:!0,depthWrite:!1,depthTest:!1}),m=new rc(v);m.position.set(g,0,Ey),m.scale.set(l*c,l,1),this.flatMesh.add(m),this.spritesFlat.push(m)}this.lastMinute=-1}update(t){const e=performance.now();if(e-this.lastUpdateWall<Mn.MIN_UPDATE_MS)return;const n=new Date(t).getUTCHours()*60+new Date(t).getUTCMinutes();if(n===this.lastMinute)return;this.lastMinute=n,this.lastUpdateWall=e;let s;this._referenceIana?s=Qo({ianaName:this._referenceIana,utcOffset:0,centerLon:0,centerLat:0},t).effectiveOffsetH:s=-new Date().getTimezoneOffset()/60;const r=Mn.LW3,a=Mn.LH3,o=Mn.LWF,l=Mn.LHF,c=[];this.labelZones.forEach((u,d)=>{const{h:p,m:g,effectiveOffsetH:v}=Qo(u,t),m=`${String(p).padStart(2,"0")}:${String(g).padStart(2,"0")}`,f=kd(v);c.push(Math.round(v*4));let b,x;if(this.relativeMode){const y=v-s;x=Cy(y),b=m}else b=Py(v),x=m;this.canvases3D[d]&&(xu(this.canvases3D[d].getContext("2d"),r,a,b,x,f),this.textures3D[d].needsUpdate=!0),this.canvasesFlat[d]&&(xu(this.canvasesFlat[d].getContext("2d"),o,l,b,x,f),this.texturesFlat[d].needsUpdate=!0)});const h=c.join(",");h!==this.lastEffectiveSig&&(this.lastEffectiveSig=h,this.politicalData&&this.displayMode==="political"&&this.buildColorOverlay(this.politicalData,t))}setRotationY(t){this.rotGroup.rotation.y=t}setDisplayMode(t){t!==this.displayMode&&(this.displayMode=t,t==="political"?this.loadPoliticalData():(this.zones=Da.slice(),this.buildNominalGeometry(),this.buildSprites(this.zones),this.clearColorOverlay()))}setRelativeMode(t){t!==this.relativeMode&&(this.relativeMode=t,this.lastMinute=-1)}setReferenceZone(t){t!==this._referenceIana&&(this._referenceIana=t,this.lastMinute=-1)}get dataLoaded(){return this.politicalLoaded}loadForLookup(){this.politicalLoaded||this.loadPoliticalData()}findZoneAt(t,e){if(this.politicalData){for(const s of this.politicalData.zones)for(const r of s.rings)if(Ly(e,t,r))return{ianaName:s.tzid,utcOffset:s.utcOffset}}return{ianaName:"",utcOffset:Math.max(-12,Math.min(14,Math.round(e/15)))}}politicalLoaded=!1;politicalZones=[];politicalData;async loadPoliticalData(){if(this.politicalLoaded){this.zones=this.politicalZones,this.politicalData&&(this.buildPoliticalGeometry(this.politicalData),this.buildColorOverlay(this.politicalData)),this.buildSprites(yu(this.politicalZones));return}let t=null;if(!t)try{const e=await fetch("/data/timezone-bounds.json");e.ok&&(t=await e.json())}catch{}if(!t)try{const e=await fetch(Ay);if(e.ok){const n=await e.json();t=this.processRawGeoJSON(n)}}catch(e){console.warn("[TimezoneLayer] CDN fetch failed:",e)}if(!t){console.warn("[TimezoneLayer] No political timezone data found — falling back to nominal mode.\nTo enable: run `node build-timezone-bounds.mjs` (generates public/data/timezone-bounds.json)."),this.displayMode="nominal",this.zones=Da.slice(),this.buildNominalGeometry(),this.buildSprites(this.zones);return}this.politicalData=t,this.politicalZones=t.zones.map(e=>({utcOffset:e.utcOffset,centerLon:e.centLon,centerLat:e.centLat,ianaName:e.tzid||void 0})),this.politicalLoaded=!0,this.zones=this.politicalZones,this.buildPoliticalGeometry(t),this.buildColorOverlay(t,Date.now()),this.buildSprites(yu(this.politicalZones))}processRawGeoJSON(t){const e=[];for(const n of t.features??[]){const s=n.properties??{},r=s.TZID??s.tzid??s.tz_name1st??s.name??"",a=s.time_zone??s.UTC_OFFSET??s.utc_offset??s.zone??"0",o=Ry(a),l=n.geometry;if(!l)continue;const c=l.type==="Polygon"?[l.coordinates]:l.type==="MultiPolygon"?l.coordinates:[];if(!c.length)continue;let h=0,u=0,d=0;for(const g of c){const v=g[0];if(!v?.length)continue;const m=v.reduce((x,y)=>x+y[0],0)/v.length,f=v.reduce((x,y)=>x+y[1],0)/v.length;let b=0;for(let x=0;x<v.length-1;x++)b+=Math.abs(v[x][0]*v[x+1][1]-v[x+1][0]*v[x][1]);b/=2,b>h&&(h=b,u=m,d=f)}const p=c.flatMap(g=>g);e.push({tzid:r||(o>=0?`UTC+${o}`:`UTC${o}`),utcOffset:o,centLon:Math.round(u*100)/100,centLat:Math.round(d*100)/100,rings:p})}return{version:1,zones:e}}}function Bd(i,t,e){const{width:n,height:s,data:r}=i;if(r.length!==n*s)throw new Error(`scalarGridToByteTexture: data length ${r.length} ≠ width*height ${n*s}`);const a=Math.max(e-t,1e-6),o=new Uint8Array(r.length);for(let c=0;c<r.length;c++){const h=(r[c]-t)/a;o[c]=Math.round(Math.max(0,Math.min(1,h))*255)}const l=new fo(o,n,s,Mc,An);return l.wrapS=ri,l.wrapT=Ie,l.minFilter=_e,l.magFilter=_e,l.generateMipmaps=!1,l.needsUpdate=!0,l}const Iy=23.44*Math.PI/180;class Uy{mesh;cloudSphere;material;sunDirUniform;currentScalarTexture=null;constructor(t=1.003){const e=new rn(t,128,64);this.sunDirUniform={value:new T(1,0,0)},this.material=new ne({uniforms:{uMap:{value:null},uScalar:{value:null},uMode:{value:0},uSunDirection:{value:this.sunDirUniform.value},uThreshold:{value:.5},uSoftness:{value:.3},uOpacity:{value:.85},uNightFade:{value:.1},uNightFloor:{value:.25},uTerminator:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1}),this.cloudSphere=new Ht(e,this.material),this.cloudSphere.renderOrder=2,this.mesh=new Kt,this.mesh.rotation.z=Iy,this.mesh.add(this.cloudSphere)}setTexture(t){this.material.uniforms.uMap.value=t,this.material.uniforms.uMode.value=0}setScalarField(t,e,n){const s=Bd(t,e,n);this.currentScalarTexture&&this.currentScalarTexture.dispose(),this.material.uniforms.uScalar.value=s,this.material.uniforms.uMode.value=1,this.currentScalarTexture=s}setSunDirection(t){this.sunDirUniform.value.copy(t)}setRotationY(t){this.cloudSphere.rotation.y=t}setTerminatorEnabled(t){this.material.uniforms.uTerminator.value=t?1:0}setThreshold(t){this.material.uniforms.uThreshold.value=t}setSoftness(t){this.material.uniforms.uSoftness.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}setNightFloor(t){this.material.uniforms.uNightFloor.value=t}}const Ny=23.44*Math.PI/180;class Bs{mesh;flatMesh;points;material;flatMaterial;posAttr;flatPosAttr;probAttr;sunDirUniform;timeUniform;static MAX_POINTS=7e4;RADIUS=1.008;constructor(){const t=new Et,e=new Float32Array(Bs.MAX_POINTS*3),n=new Float32Array(Bs.MAX_POINTS);this.posAttr=new Pt(e,3),this.probAttr=new Pt(n,1),this.posAttr.setUsage(ve),this.probAttr.setUsage(ve),t.setAttribute("position",this.posAttr),t.setAttribute("aProbability",this.probAttr),t.setDrawRange(0,0);const s=new Et,r=new Float32Array(Bs.MAX_POINTS*3);this.flatPosAttr=new Pt(r,3),this.flatPosAttr.setUsage(ve),s.setAttribute("position",this.flatPosAttr),s.setAttribute("aProbability",this.probAttr),s.setDrawRange(0,0),this.sunDirUniform={value:new T(1,0,0)},this.timeUniform={value:0},this.material=new ne({uniforms:{uSunDirection:{value:this.sunDirUniform.value},uTime:{value:this.timeUniform.value},uOpacity:{value:1},uTerminator:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Je}),this.points=new $e(t,this.material),this.points.renderOrder=4,this.mesh=new Kt,this.mesh.rotation.z=Ny,this.mesh.add(this.points),this.flatMaterial=new ne({uniforms:{uTime:this.material.uniforms.uTime,uOpacity:this.material.uniforms.uOpacity},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Je}),this.flatMesh=new $e(s,this.flatMaterial),this.flatMesh.position.z=.004}update(t){const e=this.RADIUS,n=Math.min(t.pointCount,Bs.MAX_POINTS),s=this.posAttr.array,r=this.flatPosAttr.array,a=this.probAttr.array;for(let o=0;o<n;o++){const l=t.data[o*3+0],c=t.data[o*3+1],h=t.data[o*3+2],u=l*Math.PI/180,d=c*Math.PI/180,p=Math.cos(d);s[o*3+0]=e*p*Math.cos(u),s[o*3+1]=e*Math.sin(d),s[o*3+2]=-e*p*Math.sin(u),r[o*3+0]=l/180,r[o*3+1]=c/180,r[o*3+2]=.004,a[o]=h}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.probAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,n),this.flatMesh.geometry.setDrawRange(0,n)}setSunDirection(t){this.sunDirUniform.value.copy(t)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.timeUniform.value=t,this.material.uniforms.uTime.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}setTerminatorEnabled(t){this.material.uniforms.uTerminator.value=t?1:0}}const Fy=23.44*Math.PI/180;class Ki{mesh;flatMesh;points;material;posAttr;flatPosAttr;frpAttr;hashAttr;static MAX_POINTS=6e4;RADIUS=1.0015;constructor(){const t=new Et,e=new Float32Array(Ki.MAX_POINTS*3),n=new Float32Array(Ki.MAX_POINTS),s=new Float32Array(Ki.MAX_POINTS);this.posAttr=new Pt(e,3),this.frpAttr=new Pt(n,1),this.hashAttr=new Pt(s,1),this.posAttr.setUsage(ve),this.frpAttr.setUsage(ve),this.hashAttr.setUsage(ve),t.setAttribute("position",this.posAttr),t.setAttribute("aFrp",this.frpAttr),t.setAttribute("aHash",this.hashAttr),t.setDrawRange(0,0);const r=new Et,a=new Float32Array(Ki.MAX_POINTS*3);this.flatPosAttr=new Pt(a,3),this.flatPosAttr.setUsage(ve),r.setAttribute("position",this.flatPosAttr),r.setAttribute("aFrp",this.frpAttr),r.setAttribute("aHash",this.hashAttr),r.setDrawRange(0,0),this.material=new ne({uniforms:{uTime:{value:0},uOpacity:{value:1},uSizeBoost:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Je}),this.points=new $e(t,this.material),this.mesh=new Kt,this.mesh.rotation.z=Fy,this.mesh.add(this.points),this.flatMesh=new $e(r,this.material)}update(t){const e=this.RADIUS,n=Math.min(t.detections.length,Ki.MAX_POINTS),s=this.posAttr.array,r=this.frpAttr.array,a=this.hashAttr.array,o=this.flatPosAttr.array;for(let l=0;l<n;l++){const c=t.detections[l],h=c.lon*Math.PI/180,u=c.lat*Math.PI/180,d=Math.cos(u);s[l*3+0]=e*d*Math.cos(h),s[l*3+1]=e*Math.sin(u),s[l*3+2]=-e*d*Math.sin(h),o[l*3+0]=c.lon/180,o[l*3+1]=c.lat/180,o[l*3+2]=.001,r[l]=c.frp,a[l]=Math.abs(Math.sin(c.lat*12.9898+c.lon*78.233))*43758.5453%1}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.frpAttr.needsUpdate=!0,this.hashAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,n),this.flatMesh.geometry.setDrawRange(0,n)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}setSizeBoost(t){this.material.uniforms.uSizeBoost.value=t}}const Oy=23.44*Math.PI/180;class Jn{mesh;flatMesh;points;material;posAttr;flatPosAttr;magAttr;depthAttr;timeAttr;hashAttr;static MAX_POINTS=2e4;RADIUS=1.0017;constructor(){const t=new Et,e=new Float32Array(Jn.MAX_POINTS*3),n=new Float32Array(Jn.MAX_POINTS),s=new Float32Array(Jn.MAX_POINTS),r=new Float32Array(Jn.MAX_POINTS),a=new Float32Array(Jn.MAX_POINTS);this.posAttr=new Pt(e,3),this.magAttr=new Pt(n,1),this.depthAttr=new Pt(s,1),this.timeAttr=new Pt(r,1),this.hashAttr=new Pt(a,1),this.posAttr.setUsage(ve),this.magAttr.setUsage(ve),this.depthAttr.setUsage(ve),this.timeAttr.setUsage(ve),this.hashAttr.setUsage(ve),t.setAttribute("position",this.posAttr),t.setAttribute("aMag",this.magAttr),t.setAttribute("aDepthKm",this.depthAttr),t.setAttribute("aEventTime",this.timeAttr),t.setAttribute("aHash",this.hashAttr),t.setDrawRange(0,0);const o=new Et,l=new Float32Array(Jn.MAX_POINTS*3);this.flatPosAttr=new Pt(l,3),this.flatPosAttr.setUsage(ve),o.setAttribute("position",this.flatPosAttr),o.setAttribute("aMag",this.magAttr),o.setAttribute("aDepthKm",this.depthAttr),o.setAttribute("aEventTime",this.timeAttr),o.setAttribute("aHash",this.hashAttr),o.setDrawRange(0,0),this.material=new ne({uniforms:{uTime:{value:0},uNow:{value:Date.now()},uOpacity:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Je}),this.points=new $e(t,this.material),this.mesh=new Kt,this.mesh.rotation.z=Oy,this.mesh.add(this.points),this.flatMesh=new $e(o,this.material)}update(t){const e=this.RADIUS,n=Math.min(t.events.length,Jn.MAX_POINTS),s=this.posAttr.array,r=this.magAttr.array,a=this.depthAttr.array,o=this.timeAttr.array,l=this.hashAttr.array,c=this.flatPosAttr.array;for(let h=0;h<n;h++){const u=t.events[h],d=u.lon*Math.PI/180,p=u.lat*Math.PI/180,g=Math.cos(p);s[h*3+0]=e*g*Math.cos(d),s[h*3+1]=e*Math.sin(p),s[h*3+2]=-e*g*Math.sin(d),c[h*3+0]=u.lon/180,c[h*3+1]=u.lat/180,c[h*3+2]=.001,r[h]=u.mag,a[h]=u.depthKm,o[h]=u.timeMs,l[h]=Math.abs(Math.sin(u.lat*12.9898+u.lon*78.233))*43758.5453%1}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.magAttr.needsUpdate=!0,this.depthAttr.needsUpdate=!0,this.timeAttr.needsUpdate=!0,this.hashAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,n),this.flatMesh.geometry.setDrawRange(0,n)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}setNow(t){this.material.uniforms.uNow.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}}const ky=23.44*Math.PI/180;class Ji{mesh;flatMesh;points;material;posAttr;flatPosAttr;intensityAttr;hashAttr;static MAX_STORMS=64;RADIUS=1.012;constructor(){const t=new Et,e=new Float32Array(Ji.MAX_STORMS*3),n=new Float32Array(Ji.MAX_STORMS),s=new Float32Array(Ji.MAX_STORMS);this.posAttr=new Pt(e,3),this.intensityAttr=new Pt(n,1),this.hashAttr=new Pt(s,1),this.posAttr.setUsage(ve),this.intensityAttr.setUsage(ve),this.hashAttr.setUsage(ve),t.setAttribute("position",this.posAttr),t.setAttribute("aIntensity",this.intensityAttr),t.setAttribute("aHash",this.hashAttr),t.setDrawRange(0,0);const r=new Et,a=new Float32Array(Ji.MAX_STORMS*3);this.flatPosAttr=new Pt(a,3),this.flatPosAttr.setUsage(ve),r.setAttribute("position",this.flatPosAttr),r.setAttribute("aIntensity",this.intensityAttr),r.setAttribute("aHash",this.hashAttr),r.setDrawRange(0,0),this.material=new ne({uniforms:{uTime:{value:0},uOpacity:{value:.95}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:ni}),this.points=new $e(t,this.material),this.mesh=new Kt,this.mesh.rotation.z=ky,this.mesh.add(this.points),this.flatMesh=new $e(r,this.material)}update(t){const e=this.RADIUS,n=Math.min(t.storms.length,Ji.MAX_STORMS),s=this.posAttr.array,r=this.flatPosAttr.array,a=this.intensityAttr.array,o=this.hashAttr.array;for(let l=0;l<n;l++){const c=t.storms[l],h=c.lon*Math.PI/180,u=c.lat*Math.PI/180,d=Math.cos(u);s[l*3+0]=e*d*Math.cos(h),s[l*3+1]=e*Math.sin(u),s[l*3+2]=-e*d*Math.sin(h),r[l*3+0]=c.lon/180,r[l*3+1]=c.lat/180,r[l*3+2]=.002,a[l]=c.intensityKt,o[l]=Math.abs(By(c.id))%1}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.intensityAttr.needsUpdate=!0,this.hashAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,n),this.flatMesh.geometry.setDrawRange(0,n)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}}function By(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)|0;return Math.abs(Math.sin(t*1e-4))*1e3}const zy=23.44*Math.PI/180;class no{mesh;flatMesh;bestTrackLines;forecastLines;coneMesh;bestTrackLinesFlat;forecastLinesFlat;coneMeshFlat;RADIUS=1.013;static FLAT_Z_CONE=.0025;static FLAT_Z_LINE=.003;constructor(){const t=new Ai({color:13625087,transparent:!0,opacity:.85,depthWrite:!1});this.bestTrackLines=new ts(new Et,t),this.bestTrackLinesFlat=new ts(new Et,t);const e=new Ai({color:16773280,transparent:!0,opacity:.85,depthWrite:!1});this.forecastLines=new ts(new Et,e),this.forecastLinesFlat=new ts(new Et,e);const n=new Ve({color:16773280,transparent:!0,opacity:.18,depthWrite:!1,side:In});this.coneMesh=new Ht(new Et,n),this.coneMeshFlat=new Ht(new Et,n),this.mesh=new Kt,this.mesh.rotation.z=zy,this.mesh.add(this.coneMesh),this.mesh.add(this.bestTrackLines),this.mesh.add(this.forecastLines),this.flatMesh=new Kt,this.flatMesh.add(this.coneMeshFlat),this.flatMesh.add(this.bestTrackLinesFlat),this.flatMesh.add(this.forecastLinesFlat)}update(t){const e=[],n=[],s=[],r=[],a=[],o=[],l=[],c=[],h=this.RADIUS,u=(v,m)=>{const f=v*Math.PI/180,b=m*Math.PI/180,x=Math.cos(b);return[h*x*Math.cos(f),h*Math.sin(b),-h*x*Math.sin(f)]},d=v=>(m,f)=>[m/180,f/180,v],p=d(no.FLAT_Z_LINE),g=d(no.FLAT_Z_CONE);for(const v of t)v.bestTrack&&(La(v.bestTrack,e,u),La(v.bestTrack,a,p)),v.forecastTrack&&(La(v.forecastTrack,n,u),La(v.forecastTrack,o,p)),v.forecastCone&&(Su(v.forecastCone,s,r,u),Su(v.forecastCone,l,c,g));Cs(this.bestTrackLines.geometry,"position",new Float32Array(e),3),Cs(this.forecastLines.geometry,"position",new Float32Array(n),3),Cs(this.coneMesh.geometry,"position",new Float32Array(s),3),this.coneMesh.geometry.setIndex(r.length?r:null),this.coneMesh.geometry.computeBoundingSphere(),Cs(this.bestTrackLinesFlat.geometry,"position",new Float32Array(a),3),Cs(this.forecastLinesFlat.geometry,"position",new Float32Array(o),3),Cs(this.coneMeshFlat.geometry,"position",new Float32Array(l),3),this.coneMeshFlat.geometry.setIndex(c.length?c:null),this.coneMeshFlat.geometry.computeBoundingSphere()}setRotationY(t){this.bestTrackLines.rotation.y=t,this.forecastLines.rotation.y=t,this.coneMesh.rotation.y=t}setOpacity(t){this.bestTrackLines.material.opacity=t,this.forecastLines.material.opacity=t,this.coneMesh.material.opacity=.18*t}}function La(i,t,e){for(const n of i)if(!(n.type!=="line"||n.coords.length<2))for(let s=0;s<n.coords.length-1;s++){const r=e(n.coords[s][0],n.coords[s][1]),a=e(n.coords[s+1][0],n.coords[s+1][1]);t.push(r[0],r[1],r[2],a[0],a[1],a[2])}}function Su(i,t,e,n){for(const s of i){if(s.type!=="polygon"||s.coords.length<3)continue;const r=t.length/3;for(const[a,o]of s.coords){const l=n(a,o);t.push(l[0],l[1],l[2])}for(let a=1;a<s.coords.length-1;a++)e.push(r,r+a,r+a+1)}}function Cs(i,t,e,n){const s=i.getAttribute(t);s&&s.array.length===e.length?(s.array.set(e),s.needsUpdate=!0):i.setAttribute(t,new Pt(e,n))}const Hy=23.44*Math.PI/180;class Cr{mesh;shell;shellMat;pathLine;pathMat;inner;static UMBRA_ANGULAR_RADIUS=.023;static PENUMBRA_ANGULAR_RADIUS=.47;constructor(){this.inner=new Kt;const t=new rn(1.001,96,48);this.shellMat=new ne({uniforms:{uShadowDir:{value:new T(1,0,0)},uHasShadow:{value:0},uUmbraCosCutoff:{value:Math.cos(Cr.UMBRA_ANGULAR_RADIUS)},uPenumbraCosCutoff:{value:Math.cos(Cr.PENUMBRA_ANGULAR_RADIUS)},uMaxDim:{value:.85}},vertexShader:`
        varying vec3 vNormal;
        void main() {
          // The sphere's vertex positions are already unit-length normals in local space.
          vNormal = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3  uShadowDir;
        uniform float uHasShadow;
        uniform float uUmbraCosCutoff;
        uniform float uPenumbraCosCutoff;
        uniform float uMaxDim;
        varying vec3 vNormal;
        void main() {
          if (uHasShadow < 0.5) discard;
          float cosAng = dot(normalize(vNormal), normalize(uShadowDir));
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

          gl_FragColor = vec4(color, dim);
        }
      `,transparent:!0,depthWrite:!1}),this.shell=new Ht(t,this.shellMat),this.shell.renderOrder=-1,this.inner.add(this.shell),this.pathMat=new Ai({color:16750899,transparent:!0,opacity:.9,depthWrite:!1}),this.pathLine=new Lc(new Et,this.pathMat),this.pathLine.renderOrder=2,this.inner.add(this.pathLine),this.mesh=new Kt,this.mesh.rotation.z=Hy,this.mesh.add(this.inner),this.mesh.visible=!1}setLiveShadow(t){if(!t){this.shellMat.uniforms.uHasShadow.value=0;return}this.shellMat.uniforms.uShadowDir.value.copy(t).normalize(),this.shellMat.uniforms.uHasShadow.value=1}static PATH_SUBDIVISIONS_PER_SEGMENT=24;setPath(t){if(t.length===0){this.pathLine.geometry.setAttribute("position",new Pt(new Float32Array(0),3));return}const e=1.0015,n=Cr.PATH_SUBDIVISIONS_PER_SEGMENT,s=t.length-1,r=t.length===1?1:s*n+1,a=new Float32Array(r*3),o=new T,l=new T,c=new T;let h=0;const u=p=>{a[h*3]=p.x*e,a[h*3+1]=p.y*e,a[h*3+2]=p.z*e,h++};if(t.length===1)o.copy(t[0]).normalize(),u(o);else{for(let p=0;p<s;p++){o.copy(t[p]).normalize(),l.copy(t[p+1]).normalize();const g=Hr.clamp(o.dot(l),-1,1),v=Math.acos(g),m=Math.sin(v);for(let f=0;f<n;f++){const b=f/n;if(m<1e-6)c.copy(o).lerp(l,b).normalize();else{const x=Math.sin((1-b)*v)/m,y=Math.sin(b*v)/m;c.set(o.x*x+l.x*y,o.y*x+l.y*y,o.z*x+l.z*y),c.normalize()}u(c)}}l.copy(t[s]).normalize(),u(l)}const d=new Et;d.setAttribute("position",new Pt(a,3)),d.computeBoundingSphere(),this.pathLine.geometry.dispose(),this.pathLine.geometry=d}setRotationY(t){this.inner.rotation.y=t}setPathVisible(t){this.pathLine.visible=t}}const Gy=23.44*Math.PI/180;class hn{mesh;flatMesh;points;material;posAttr;flatPosAttr;spawnAttr;polarityAttr;writeIndex=0;filled=!1;static MAX_STRIKES=1024;static LIFETIME=.6;RADIUS=1.002;constructor(){const t=new Et,e=new Float32Array(hn.MAX_STRIKES*3),n=new Float32Array(hn.MAX_STRIKES),s=new Float32Array(hn.MAX_STRIKES);n.fill(-1e9),this.posAttr=new Pt(e,3),this.spawnAttr=new Pt(n,1),this.polarityAttr=new Pt(s,1),this.posAttr.setUsage(ve),this.spawnAttr.setUsage(ve),this.polarityAttr.setUsage(ve),t.setAttribute("position",this.posAttr),t.setAttribute("aSpawn",this.spawnAttr),t.setAttribute("aPolarity",this.polarityAttr),t.setDrawRange(0,hn.MAX_STRIKES);const r=new Et,a=new Float32Array(hn.MAX_STRIKES*3);this.flatPosAttr=new Pt(a,3),this.flatPosAttr.setUsage(ve),r.setAttribute("position",this.flatPosAttr),r.setAttribute("aSpawn",this.spawnAttr),r.setAttribute("aPolarity",this.polarityAttr),r.setDrawRange(0,hn.MAX_STRIKES),this.material=new ne({uniforms:{uTime:{value:0},uLifetime:{value:hn.LIFETIME},uOpacity:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Je}),this.points=new $e(t,this.material),this.mesh=new Kt,this.mesh.rotation.z=Gy,this.mesh.add(this.points),this.flatMesh=new $e(r,this.material)}addStrike(t,e){const n=this.RADIUS,s=t.lon*Math.PI/180,r=t.lat*Math.PI/180,a=Math.cos(r),o=this.writeIndex,l=this.posAttr.array,c=this.flatPosAttr.array,h=this.spawnAttr.array,u=this.polarityAttr.array;l[o*3+0]=n*a*Math.cos(s),l[o*3+1]=n*Math.sin(r),l[o*3+2]=-n*a*Math.sin(s),c[o*3+0]=t.lon/180,c[o*3+1]=t.lat/180,c[o*3+2]=.003,h[o]=e,u[o]=t.polarity,this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.spawnAttr.needsUpdate=!0,this.polarityAttr.needsUpdate=!0,this.writeIndex=(this.writeIndex+1)%hn.MAX_STRIKES,this.writeIndex===0&&(this.filled=!0)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}liveStrikeCount(t){const e=this.spawnAttr.array;let n=0;const s=this.filled?hn.MAX_STRIKES:this.writeIndex;for(let r=0;r<s;r++)t-e[r]<hn.LIFETIME&&n++;return n}}const Vy=23.44*Math.PI/180,Wy={temperature:0,humidity:1,pressure:2,water:3,cloud:4};class Xy{mesh;sphere;material;currentTexture=null;constructor(t=1.006){const e=new rn(t,96,48);this.material=new ne({uniforms:{uMap:{value:null},uHasData:{value:0},uPalette:{value:0},uOpacity:{value:.65}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1}),this.sphere=new Ht(e,this.material),this.sphere.renderOrder=1,this.mesh=new Kt,this.mesh.rotation.z=Vy,this.mesh.add(this.sphere),this.mesh.visible=!1}setData(t,e,n,s){const r=Bd(t,e,n),a=this.material.uniforms.uMap.value;a&&a.dispose(),this.material.uniforms.uMap.value=r,this.material.uniforms.uHasData.value=1,this.material.uniforms.uPalette.value=Wy[s],this.currentTexture=r}setRotationY(t){this.sphere.rotation.y=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}hasData(){return this.currentTexture!==null}}class Pr{mesh;flatMesh;sunBeam;moonBeam;sunDot;moonDot;moonPhaseMat;static SUN_COLOR=16763972;static MOON_COLOR=13162736;constructor(){this.mesh=new Kt,this.flatMesh=new Kt,this.sunBeam=bu(Pr.SUN_COLOR,.7),this.moonBeam=bu(Pr.MOON_COLOR,.55),this.mesh.add(this.sunBeam,this.moonBeam),this.sunDot=jy(Pr.SUN_COLOR,.95),this.flatMesh.add(this.sunDot),this.moonPhaseMat=Zy(),this.moonDot=new Ht(new Qs(zd,32),this.moonPhaseMat),this.moonDot.position.z=.01,this.flatMesh.add(this.moonDot)}setSunDirection(t){Eu(this.sunBeam,t)}setMoonPosition(t){Eu(this.moonBeam,t)}setSubSolar(t,e){this.sunDot.position.set(e/180,t/180,.01)}setSubLunar(t,e){this.moonDot.position.set(e/180,t/180,.01)}setMoonPhase(t,e){this.moonPhaseMat.uniforms.uIllumFraction.value=Hr.clamp(t,0,1),this.moonPhaseMat.uniforms.uTerminatorXSign.value=e?1:-1}setVisible(t){this.mesh.visible=t,this.flatMesh.visible=t}setSunBeamVisible(t){this.sunBeam.visible=t}setMoonBeamVisible(t){this.moonBeam.visible=t}setSunDotVisible(t){this.sunDot.visible=t}setMoonDotVisible(t){this.moonDot.visible=t}}const Mu=.6,$y=.018,qy=.006,zd=.036;function bu(i,t){const e=new po(qy,$y,Mu,16);e.translate(0,Mu/2,0);const n=new Ve({color:i,transparent:!0,opacity:t,depthWrite:!1}),s=new Ht(e,n);return s.frustumCulled=!1,s}const Yy=new T(0,1,0),wu=new Ei,tl=new T;function Eu(i,t){const e=t.length();e<1e-6||(tl.copy(t).divideScalar(e),i.position.copy(tl),wu.setFromUnitVectors(Yy,tl),i.quaternion.copy(wu))}function jy(i,t){const e=new Qs(zd,24),n=new Ve({color:i,transparent:!0,opacity:t,depthWrite:!1});return new Ht(e,n)}function Zy(){return new ne({uniforms:{uIllumFraction:{value:.5},uTerminatorXSign:{value:1},uLitColor:{value:new Ct(15920861)},uShadowColor:{value:new Ct(2106408)}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1})}const Tu={type:"change"},Nc={type:"start"},Hd={type:"end"},Ia=new Gr,Au=new _i,Ky=Math.cos(70*Hr.DEG2RAD),Me=new T,Ye=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},el=1e-6;class Gd extends Z_{constructor(t,e=null){super(t,e),this.state=se.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.DOLLY,RIGHT:ei.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Ei,this._lastTargetPosition=new T,this._quat=new Ei().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cu,this._sphericalDelta=new cu,this._scale=1,this._panOffset=new T,this._rotateStart=new xt,this._rotateEnd=new xt,this._rotateDelta=new xt,this._panStart=new xt,this._panEnd=new xt,this._panDelta=new xt,this._dollyStart=new xt,this._dollyEnd=new xt,this._dollyDelta=new xt,this._dollyDirection=new T,this._mouse=new xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qy.bind(this),this._onPointerDown=Jy.bind(this),this._onPointerUp=tx.bind(this),this._onContextMenu=ox.bind(this),this._onMouseWheel=ix.bind(this),this._onKeyDown=sx.bind(this),this._onTouchStart=rx.bind(this),this._onTouchMove=ax.bind(this),this._onMouseDown=ex.bind(this),this._onMouseMove=nx.bind(this),this._interceptControlDown=lx.bind(this),this._interceptControlUp=cx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tu),this.update(),this.state=se.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ye:n>Math.PI&&(n-=Ye),s<-Math.PI?s+=Ye:s>Math.PI&&(s-=Ye),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Me.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new T(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ia.origin.copy(this.object.position),Ia.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ia.direction))<Ky?this.object.lookAt(this.target):(Au.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ia.intersectPlane(Au,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>el||8*(1-this._lastQuaternion.dot(this.object.quaternion))>el||this._lastTargetPosition.distanceToSquared(this.target)>el?(this.dispatchEvent(Tu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ye/60*this.autoRotateSpeed*t:Ye/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Me.copy(s).sub(this.target);let r=Me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ye*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ye*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ye*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ye*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Jy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Qy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function tx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hd),this.state=se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ex(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case ei.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case ei.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Nc)}function nx(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ix(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(Nc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hd))}function sx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function rx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case Mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Nc)}function ax(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function ox(i){this.enabled!==!1&&i.preventDefault()}function lx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class hx extends Gd{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:ei.PAN,MIDDLE:ei.DOLLY,RIGHT:ei.ROTATE},this.touches={ONE:Mi.PAN,TWO:Mi.DOLLY_ROTATE}}}const ux=.9,dx=20,fx=1;class Vd{scene;camera;mainMesh;material;terminatorGeom;terminatorLines;controls=null;baseFrustum={left:-1,right:1,top:.5,bottom:-.5};constructor(){this.scene=new Ka,this.scene.background=new Ct(5),this.camera=new Js(-1,1,.5,-.5,0,10),this.camera.position.set(0,0,1),this.camera.lookAt(0,0,0);const t=new go,e=t.load("textures/earth_daymap_2k.jpg"),n=t.load("textures/earth_nightmap_2k.jpg");e.colorSpace=xe,n.colorSpace=xe,this.material=new ne({uniforms:{uDay:{value:e},uNight:{value:n},uClouds:{value:null},uHasClouds:{value:0},uGeoSunDir:{value:new T(1,0,0)},uShowClouds:{value:1},uShowNightLights:{value:1},uShowTerminator:{value:1},uCloudThreshold:{value:.5},uCloudSoftness:{value:.3},uCloudOpacity:{value:.85},uCloudNightFloor:{value:.25},uTwilightWidth:{value:.1},uNightDimFloor:{value:.18}},vertexShader:`
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
      `});const s=new Ti(2,1);this.mainMesh=new Ht(s,this.material),this.scene.add(this.mainMesh);for(const l of[-2,2]){const c=new Ht(s,this.material);c.position.x=l,this.scene.add(c)}const r=361,a=new Float32Array(r*3);this.terminatorGeom=new Et,this.terminatorGeom.setAttribute("position",new Pt(a,3));const o=new Ai({color:16777215,transparent:!0,opacity:.4,depthWrite:!1});this.terminatorLines=[0,-2,2].map(l=>{const c=new Lc(this.terminatorGeom,o);return c.position.x=l,c.renderOrder=2,c.frustumCulled=!1,this.scene.add(c),c})}resize(t,e){const n=t/e;n>2?this.baseFrustum={left:-.5*n,right:.5*n,top:.5,bottom:-.5}:this.baseFrustum={left:-1,right:1,top:1/n,bottom:-1/n},this.camera.left=this.baseFrustum.left,this.camera.right=this.baseFrustum.right,this.camera.top=this.baseFrustum.top,this.camera.bottom=this.baseFrustum.bottom,this.camera.updateProjectionMatrix()}enableControls(t){this.controls||(this.controls=new hx(this.camera,t),this.controls.enableRotate=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.18,this.controls.screenSpacePanning=!0,this.controls.zoomToCursor=!0,this.controls.minZoom=ux,this.controls.maxZoom=dx,t.addEventListener("dblclick",this.resetView)),this.controls.connect(),this.controls.enabled=!0}disableControls(){this.controls&&(this.controls.enabled=!1)}update(){if(!this.controls||!this.controls.enabled)return;this.controls.update();const t=this.baseFrustum.top/this.camera.zoom;let e=!1;if(t>=.5)this.controls.target.y!==0&&(this.controls.target.y=0,this.camera.position.y=0,e=!0);else{const n=.5-t;this.controls.target.y>n&&(this.controls.target.y=n,this.camera.position.y=n,e=!0),this.controls.target.y<-n&&(this.controls.target.y=-n,this.camera.position.y=-n,e=!0)}e&&this.controls.update()}resetView=()=>{this.camera.position.set(0,0,1),this.camera.zoom=fx,this.camera.updateProjectionMatrix(),this.controls&&(this.controls.target.set(0,0,0),this.controls.update())};static wrapWorldX(t){return((t+1)%2+2)%2-1}setSubSolar(t,e){const n=t*Math.PI/180,s=e*Math.PI/180,r=Math.cos(n);this.material.uniforms.uGeoSunDir.value.set(r*Math.cos(s),Math.sin(n),-r*Math.sin(s)),this._updateTerminatorLine(n,s)}_updateTerminatorLine(t,e){const n=this.terminatorGeom.attributes.position,s=n.array,r=361,a=Math.sin(t),o=Math.cos(t);for(let l=0;l<r;l++){const c=-180+360*l/(r-1),h=c*Math.PI/180,u=Math.atan2(-o*Math.cos(h-e),a);s[l*3]=c/180,s[l*3+1]=u/Math.PI,s[l*3+2]=.005}n.needsUpdate=!0,this.terminatorGeom.computeBoundingSphere()}setCloudTexture(t){this.material.uniforms.uClouds.value=t,this.material.uniforms.uHasClouds.value=t?1:0}setTerminatorEnabled(t){this.material.uniforms.uShowTerminator.value=t?1:0;for(const e of this.terminatorLines)e.visible=t}setNightLightsVisible(t){this.material.uniforms.uShowNightLights.value=t?1:0}setCloudsVisible(t){this.material.uniforms.uShowClouds.value=t?1:0}}const px=new T(0,1,0),Vi=16765770;class mx{meshGlobe;meshFlat;latDeg=0;lonDeg=0;constructor(){this.meshGlobe=new Kt,this.meshGlobe.visible=!1;const t=new Uc(.022,.003,12,40),e=new Ve({color:Vi,transparent:!0,opacity:.95}),n=new Ht(t,e);n.rotation.x=Math.PI/2,n.position.y=.001,this.meshGlobe.add(n);const s=new Qs(.008,24),r=new Ve({color:Vi,transparent:!0,opacity:.9}),a=new Ht(s,r);a.rotation.x=-Math.PI/2,a.position.y=.002,this.meshGlobe.add(a);const o=.055,l=new po(.0025,.0025,o,12),c=new Ve({color:Vi,transparent:!0,opacity:.9}),h=new Ht(l,c);h.position.y=o/2,this.meshGlobe.add(h);const u=new rn(.006,16,12),d=new Ve({color:Vi,transparent:!0,opacity:.95}),p=new Ht(u,d);p.position.y=o+.005,this.meshGlobe.add(p),this.meshFlat=new Kt,this.meshFlat.visible=!1;const g=new Ic(.015,.019,32),v=new Ve({color:Vi,transparent:!0,opacity:.9}),m=new Ht(g,v);m.position.z=.001,this.meshFlat.add(m);const f=.004,b=.025,x=new Et;x.setAttribute("position",new qt([-b,0,.001,-f,0,.001,f,0,.001,b,0,.001,0,-b,.001,0,-f,.001,0,f,.001,0,b,.001],3));const y=new Ai({color:Vi,transparent:!0,opacity:.95}),D=new ts(x,y);this.meshFlat.add(D);const R=new Qs(.0015,16),A=new Ve({color:Vi,transparent:!0,opacity:.95}),P=new Ht(R,A);P.position.z=.002,this.meshFlat.add(P)}setLocation(t,e){this.latDeg=t,this.lonDeg=e;const n=t*Math.PI/180,s=e*Math.PI/180,r=Math.cos(n),a=r*Math.cos(s),o=Math.sin(n),l=-r*Math.sin(s);this.meshGlobe.position.set(a,o,l);const c=new T(a,o,l).normalize();this.meshGlobe.quaternion.setFromUnitVectors(px,c),this.meshFlat.position.x=e/180,this.meshFlat.position.y=t/180}setVisible(t){this.meshGlobe.visible=t,this.meshFlat.visible=t}isVisible(){return this.meshGlobe.visible}get location(){return{lat:this.latDeg,lon:this.lonDeg}}}const gx="0.3.0",vx={windSubtle:"subtle",windStandard:"standard",windBold:"bold"},ai="orrery.menu.v1",cc={clock:!0,clockLocal:!1,tzNominal:!1,tzPolitical:!1,tzRelative:!1,fires:!0,lightning:!0,hurricanes:!0,tracks:!0,aurora:!0,windSubtle:!0,windStandard:!1,windBold:!1,cloudsViirs:!0,cloudsGfs:!1,cloudsGoes:!1,mslp:!1,temp:!1,rh:!1,tpw:!1,tcw:!1,coastlines:!0,nightLights:!0,earthquakes:!0,plates:!0,volcanoes:!0,terminator:!0,atmosphere:!0,hands:!0,eclipse:!1,map:!1,orbit:!1,skyboxHi:!1,data:!1,location:!1},_x={aurora:!1,fires:!1,lightning:!1,tracks:!1,nightLights:!1};function yx(){const t=typeof window<"u"&&window.matchMedia("(max-width: 600px)").matches?{...cc,..._x}:{...cc};try{JSON.parse(localStorage.getItem("orrery.clock.v1")??"null")?.zone==="local"&&(t.clockLocal=!0)}catch{}return t}const nl={clock:"Time",clockLocal:"UTC/Local",tzNominal:"Meridians",tzPolitical:"Time Zones",tzRelative:"±Hours",fires:"Fires",lightning:"Lightning",hurricanes:"Hurricanes",tracks:"Storm tracks",aurora:"Aurora",windSubtle:"Subtle",windStandard:"Standard",windBold:"Bold",cloudsViirs:"VIIRS",cloudsGfs:"GFS",cloudsGoes:"GOES",mslp:"Pressure",temp:"Temperature",rh:"Humidity",tpw:"Moisture",tcw:"Cloud water",coastlines:"Coastlines",nightLights:"Night lights",earthquakes:"Earthquakes",plates:"Plates",volcanoes:"Volcanoes",terminator:"Day/night",atmosphere:"Atmosphere",hands:"Beams",eclipse:"Eclipse",map:"Flat map",orbit:"Auto-spin",skyboxHi:"Hi-res sky",data:"Data",location:"Location"},xx={clock:"Show / hide the top-left time display and time-travel controls (⏱)",clockLocal:"Show the clock in your browser's local timezone instead of UTC",tzNominal:"Nominal UTC hour meridian boundaries (every 15°) — geometrically regular, no DST. Labels show current local time at each zone centre.",tzPolitical:"Real political timezone boundaries from /data/timezone-bounds.json. DST-correct via IANA/Intl. Falls back to nominal if data absent.",tzRelative:"Swap labels from absolute HH:MM to hours offset relative to your local timezone (+2h, −3h…). Requires Meridians or Time Zones to be active.",aurora:"Aurora oval probability (NOAA SWPC Ovation, refreshed 5 min)",fires:"Active wildfires from satellite thermal detections (NASA FIRMS, last 24 h)",hurricanes:"Active tropical cyclones (NOAA NHC, refreshed 15 min)",tracks:"Past track + 5-day forecast track + uncertainty cone for each active storm",lightning:"Real-time lightning strikes from the Blitzortung community network",windSubtle:"Wind — subtle: short streaks, dim composite. Doesn't compete with other layers.",windStandard:"Wind — standard: moderate streaks, mid brightness.",windBold:"Wind — bold: long, bright streaks. The signature earth.nullschool look.",cloudsViirs:"VIIRS true-colour daily mosaic (NASA GIBS) — photographic, can have swath gaps on partial days",cloudsGfs:"GFS cloud cover (NOAA, 6 h refresh) — model forecast, no coverage gaps, animates with time-warp.",cloudsGoes:"GOES + Himawari + MSG geostationary composite — coming soon",mslp:"Mean sea level pressure (MSLP) — highs and lows drive weather systems",temp:"2 m air temperature (Temp) — kelvin internally, displayed via colour ramp",rh:"2 m relative humidity (RH) — 0 to 100 % of saturation",tpw:"Total precipitable water (TPW, mm) — atmospheric water vapour column",tcw:"Total cloud water (TCW, kg/m²) — liquid + ice in the atmospheric column",coastlines:"Natural Earth 50 m coastlines",nightLights:"City lights on the night side (Solar System Scope)",earthquakes:"Earthquakes past 7 days (USGS, refreshed 15 min) — sized by magnitude, coloured by depth (shallow red → deep blue)",plates:"Tectonic plate boundaries (Peter Bird's PB2002 dataset) — static, effectively fixed on human timescales",volcanoes:"~1,200 Holocene volcanoes (Smithsonian Global Volcanism Program) — hot pulsing markers show ones currently cross-referenced against active FIRMS thermal detections",terminator:"Day/night shading — sun-direction lighting + city-lights overlay",atmosphere:"Atmospheric rim glow with day-twilight gradient",hands:"Sun and moon beams — a gold gnomon pointing at the sun, a silver one at the moon, plus paired sun + moon dots on the flat map. Under time-warp the sun beam sweeps one rotation per simulated day.",eclipse:"Live umbra + penumbra discs and path-of-totality; opens the eclipse-catalogue panel for selecting an event and jumping to it",map:"Equirectangular flat-map view — drag to pan, wheel to zoom (centred on cursor), double-click to reset",orbit:"Gentle auto-rotation around Earth (pauses on user input)",skyboxHi:"Upgrade the starfield to NASA's 8K Deep Star Map (~1.9 MB). Sharper Milky Way when zoomed out; takes a couple of seconds to load.",data:"Top-right panel — every live data layer with its source, freshness, and refresh cadence.",location:"Click anywhere on the globe (or flat map) to pin a spot and read its coordinates, place name, and true solar time."},$i=["mslp","temp","rh","tpw","tcw"],qi=["cloudsViirs","cloudsGfs","cloudsGoes"],Ns=["windSubtle","windStandard","windBold"],Ua=["tzNominal","tzPolitical"],Sx=[{label:"Clock",keys:["clock","clockLocal","tzNominal","tzPolitical","tzRelative"]},{label:"Weather",keys:["fires","lightning","hurricanes","tracks","aurora"]},{label:"Wind",keys:Ns},{label:"Clouds",keys:qi},{label:"Overlay",keys:$i},{label:"Geography",keys:["coastlines","nightLights"]},{label:"Geology",keys:["earthquakes","plates","volcanoes"]},{label:"Astro",keys:["terminator","atmosphere","hands","eclipse"]},{label:"View",keys:["map","orbit","skyboxHi","data","location"]}];class Mx{state;layers;panels;buttons={};panel;open;overlayChangeHandler=null;cloudsChangeHandler=null;findMoonHandler=null;skyboxHiResHandler=null;constructor(t,e,n={}){this.layers=e,this.panels=n,this.state={...yx(),...bx()},this.open=wx(),Ax();const s=document.createElement("div");s.id="orrery-ui",s.innerHTML=`
      <div class="orrery-brand-row">
        <span class="orrery-brand" id="orrery-brand" title="Click for options · weather layers · clock · location · eclipses">earth-clock</span>
        <span class="orrery-version" title="package.json version">v${gx}</span>
      </div>
      <div class="orrery-menu${this.open?"":" collapsed"}" id="orrery-menu">
        <div id="orrery-menu-categories"></div>
        <p class="orrery-meta">
          <a href="/about/">about</a> · <a href="/about/kids/">about for kids</a> · <a href="https://onemonkey.org/eclipses-equinoxes-and-everyday-awe-telling-the-time-on-spaceship-earth/" target="_blank" rel="noopener">blog</a> · <a href="https://github.com/infantlab/earth-clock" target="_blank" rel="noopener">source code</a> · <a href="mailto:caspar@onemonkey.org">feedback</a>
        </p>
      </div>
    `,t.appendChild(s),this.panel=s.querySelector("#orrery-menu"),s.querySelector("#orrery-brand").addEventListener("click",()=>{this.toggleOpen(),this.dismissOnboardingHint()}),this.maybeShowOnboardingHint(s);const a=s.querySelector("#orrery-menu-categories");for(const o of Sx){const l=document.createElement("p");l.innerHTML=`<span class="orrery-label">${o.label}</span><span class="orrery-buttons"></span>`;const c=l.querySelector(".orrery-buttons");if(o.keys.forEach((h,u)=>{u>0&&c.appendChild(document.createTextNode(" · "));const d=document.createElement("span");d.className="orrery-tb",d.textContent=nl[h],d.title=xx[h]??`Toggle ${nl[h]}`,d.addEventListener("click",()=>this.toggle(h)),c.appendChild(d),this.buttons[h]=d}),o.label==="Astro"){c.appendChild(document.createTextNode(" · "));const h=document.createElement("span");h.className="orrery-tb orrery-action",h.textContent="Find moon",h.title="Reposition the camera along the moon's direction so both Earth and moon sit in frame",h.addEventListener("click",()=>{this.findMoonHandler?.(),this.collapseIfMobile()}),c.appendChild(h)}a.appendChild(l)}this.applyAll()}isWindVisible(){return this.activeWindIntensity()!==null&&this.liveFreshnessOk}liveFreshnessOk=!0;setLiveFreshnessOk(t){this.liveFreshnessOk!==t&&(this.liveFreshnessOk=t,this.applyAll())}activeWindIntensity(){for(const t of Ns)if(this.state[t])return t;return null}isMapMode(){return this.state.map}isLocationActive(){return this.state.location}isAutoOrbit(){return this.state.orbit}isSkyboxHiRes(){return this.state.skyboxHi}activeOverlay(){for(const t of $i)if(this.state[t])return t;return null}activeCloudSource(){for(const t of qi)if(this.state[t])return t;return null}activeTzMode(){return this.state.tzNominal?"nominal":this.state.tzPolitical?"political":null}onOverlayChange(t){this.overlayChangeHandler=t}onCloudsChange(t){this.cloudsChangeHandler=t}onFindMoon(t){this.findMoonHandler=t}onSkyboxHiResChange(t){this.skyboxHiResHandler=t}setLayer(t,e){if(!(t in cc))return;const n=t;if(this.state[n]!==e){if(this.state[n]=e,e){const s=$i.includes(n)?$i:qi.includes(n)?qi:Ns.includes(n)?Ns:Ua.includes(n)?Ua:null;if(s)for(const r of s)r!==n&&this.state[r]&&(this.state[r]=!1,this.apply(r))}this.apply(n),Ru(this.state)}}toggle(t){const e=this.state[t];this.state[t]=!e;const n=$i.includes(t)?$i:qi.includes(t)?qi:Ns.includes(t)?Ns:Ua.includes(t)?Ua:null;if(n&&this.state[t])for(const s of n)s!==t&&this.state[s]&&(this.state[s]=!1,this.apply(s));this.apply(t),Ru(this.state),$i.includes(t)&&this.overlayChangeHandler?.(this.activeOverlay()),qi.includes(t)&&this.cloudsChangeHandler?.(this.activeCloudSource()),t==="skyboxHi"&&this.skyboxHiResHandler?.(this.state.skyboxHi),this.collapseIfMobile()}collapseIfMobile(){window.matchMedia("(max-width: 600px)").matches&&this.open&&(this.open=!1,this.panel.classList.add("collapsed"),Cu(!1))}toggleOpen(){this.open=!this.open,this.panel.classList.toggle("collapsed",!this.open),Cu(this.open)}onboardingHint=null;maybeShowOnboardingHint(t){if(Ex())return;const e=document.createElement("div");e.className="orrery-onboarding-hint",e.innerHTML=`
      <span>Click <strong>earth-clock</strong> for layers · clock · location · eclipses</span>
      <span class="orrery-onboarding-arrow">↓</span>
    `,t.appendChild(e),this.onboardingHint=e,setTimeout(()=>this.dismissOnboardingHint(),7e3)}dismissOnboardingHint(){if(!this.onboardingHint)return;this.onboardingHint.classList.add("orrery-onboarding-dismissed"),Tx(!0);const t=this.onboardingHint;this.onboardingHint=null,setTimeout(()=>t.remove(),600)}applyAll(){Object.keys(nl).forEach(t=>this.apply(t))}apply(t){const e=this.state[t],n=this.liveFreshnessOk,{globe:s,atmosphere:r,coastlines:a,plates:o,volcanoes:l,clouds:c,aurora:h,fires:u,earthquakes:d,hurricanes:p,hurricaneTracks:g,lightning:v,overlay:m,radiusVectors:f,eclipse:b,flatMap:x,trails:y,timezoneLayer:D}=this.layers;switch(t){case"cloudsViirs":case"cloudsGfs":case"cloudsGoes":{const A=this.activeCloudSource()!==null&&n;c.mesh.visible=A,x.setCloudsVisible(A);break}case"aurora":h.mesh.visible=e&&n,h.flatMesh.visible=e&&n;break;case"fires":u.mesh.visible=e&&n,u.flatMesh.visible=e&&n;break;case"earthquakes":d.mesh.visible=e&&n,d.flatMesh.visible=e&&n;break;case"hurricanes":p.mesh.visible=e&&n,p.flatMesh.visible=e&&n;break;case"tracks":g.mesh.visible=e&&n,g.flatMesh.visible=e&&n;break;case"eclipse":b.mesh.visible=e,this.panels.eclipse?.setVisible(e);break;case"lightning":v.mesh.visible=e&&n,v.flatMesh.visible=e&&n;break;case"mslp":case"temp":case"rh":case"tpw":case"tcw":m.mesh.visible=this.activeOverlay()!==null&&n;break;case"coastlines":a.mesh.visible=e,a.flatMesh.visible=e;break;case"plates":o.mesh.visible=e,o.flatMesh.visible=e;break;case"volcanoes":l.mesh.visible=e,l.flatMesh.visible=e;break;case"tzNominal":case"tzPolitical":{const A=this.activeTzMode(),P=A!==null;P&&D.setDisplayMode(A),D.mesh.visible=P,D.flatMesh.visible=P;break}case"tzRelative":D.setRelativeMode(e);break;case"atmosphere":r.mesh.visible=e&&!this.state.map;break;case"hands":f.setSunBeamVisible(e),f.setMoonBeamVisible(e),f.setSunDotVisible(e),f.setMoonDotVisible(e);break;case"terminator":s.setTerminatorVisible(e),c.setTerminatorEnabled(e),h.setTerminatorEnabled(e),x.setTerminatorEnabled(e);break;case"nightLights":s.setNightLightsVisible(e),x.setNightLightsVisible(e);break;case"windSubtle":case"windStandard":case"windBold":{const A=this.activeWindIntensity();A&&y.setIntensity(vx[A]);break}case"clockLocal":this.panels.clock?.setZone(e?"local":"utc");break;case"skyboxHi":break;case"map":{r.mesh.visible=this.state.atmosphere&&!e;const A=["atmosphere","orbit","skyboxHi"];for(const P of A)this.buttons[P]?.classList.toggle("map-inactive",e);break}case"orbit":break;case"clock":this.panels.clock?.setVisible(e);break;case"data":this.panels.data?.setVisible(e);break;case"location":this.panels.location?.setVisible(e);break}const R=this.buttons[t];R&&R.classList.toggle("highlighted",e)}}function bx(){try{const i=localStorage.getItem(ai);return i?JSON.parse(i).layers??{}:{}}catch{return{}}}function Ru(i){try{const t=localStorage.getItem(ai),e=t?JSON.parse(t):{};e.layers=i,localStorage.setItem(ai,JSON.stringify(e))}catch{}}function wx(){try{const i=localStorage.getItem(ai);return i?!!JSON.parse(i).open:!1}catch{return!1}}function Cu(i){try{const t=localStorage.getItem(ai),e=t?JSON.parse(t):{};e.open=i,localStorage.setItem(ai,JSON.stringify(e))}catch{}}function Ex(){try{const i=localStorage.getItem(ai);return i?!!JSON.parse(i).onboarded:!1}catch{return!1}}function Tx(i){try{const t=localStorage.getItem(ai),e=t?JSON.parse(t):{};e.onboarded=i,localStorage.setItem(ai,JSON.stringify(e))}catch{}}let Pu=!1;function Ax(){if(Pu)return;Pu=!0;const i=`
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
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}class Rx{info(t,e){this.log(t,e,"info")}warn(t,e){this.log(t,e,"warn")}pending(t,e){this.log(t,e,"pending")}log(t,e,n){const s=n==="warn"?"warn":n==="pending"?"…":"✓";n==="warn"?console.warn(`[orrery] ${s} ${t}: ${e}`):console.log(`[orrery] ${s} ${t}: ${e}`)}}class Cx{rows=new Map;subscribers=new Set;orderIndex=new Map;report(t,e){this.rows.set(t,e),this.subscribers.forEach(n=>n())}get(t){return this.rows.get(t)}setOrder(t){this.orderIndex.clear(),t.forEach((e,n)=>this.orderIndex.set(e,n)),this.subscribers.forEach(e=>e())}entries(){const t=Number.MAX_SAFE_INTEGER;return Array.from(this.rows.entries()).sort((e,n)=>{const s=this.orderIndex.get(e[0])??t,r=this.orderIndex.get(n[0])??t;return s!==r?s-r:e[0].localeCompare(n[0])})}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}}const Px={wind:"https://nomads.ncep.noaa.gov/",mslp:"https://nomads.ncep.noaa.gov/",temp:"https://nomads.ncep.noaa.gov/",rh:"https://nomads.ncep.noaa.gov/",tpw:"https://nomads.ncep.noaa.gov/",tcw:"https://nomads.ncep.noaa.gov/","gfs-clouds":"https://nomads.ncep.noaa.gov/",aurora:"https://www.swpc.noaa.gov/products/aurora-30-minute-forecast",kp:"https://www.swpc.noaa.gov/products/planetary-k-index",hurricanes:"https://www.nhc.noaa.gov/","storm-tracks":"https://www.nhc.noaa.gov/",viirs:"https://gibs.earthdata.nasa.gov/",fires:"https://firms.modaps.eosdis.nasa.gov/",lightning:"https://www.blitzortung.org/","day map":"https://www.solarsystemscope.com/textures/","night map":"https://www.solarsystemscope.com/textures/",moon:"https://astrogeology.usgs.gov/",coastlines:"https://www.naturalearthdata.com/",eclipse:"https://eclipse.gsfc.nasa.gov/SEcat5/SE2021-2030.html"};class Dx{root;body;registry;ageTimer;closeHandler=null;constructor(t,e){Ox(),this.registry=e,this.root=document.createElement("div"),this.root.id="orrery-data",this.root.classList.add("hidden"),this.root.innerHTML=`
      <div class="orrery-data-titlebar">
        <span class="orrery-data-title">data</span>
        <span class="orrery-data-close" id="orrery-data-close" title="Close panel">✕</span>
      </div>
      <div class="orrery-data-rows" id="orrery-data-rows"></div>
    `,t.appendChild(this.root),this.body=this.root.querySelector("#orrery-data-rows"),this.root.querySelector("#orrery-data-close").addEventListener("click",()=>this.closeHandler?.()),e.subscribe(()=>this.render()),this.ageTimer=window.setInterval(()=>this.render(),15e3),this.render()}onClose(t){this.closeHandler=t}setVisible(t){this.root.classList.toggle("hidden",!t),t&&this.render()}destroy(){window.clearInterval(this.ageTimer),this.root.remove()}render(){const t=Date.now(),e=this.registry.entries();if(!e.length){this.body.innerHTML='<div class="orrery-data-empty">no data yet</div>';return}const n=e.map(([s,r])=>this.renderRow(s,r,t));this.body.innerHTML=n.join("")}renderRow(t,e,n){const s=Lx(e,n),r=Ix(e,n),a=Px[t],o=a?`<a class="orrery-data-source-link" href="${Fx(a)}" target="_blank" rel="noopener">${Ps(e.source)} ↗</a>`:`<span class="orrery-data-source-link">${Ps(e.source)}</span>`,l=e.error?Ps(e.error):e.detail?Ps(e.detail):"";return`<div class="orrery-data-row ${s.cls}"><span class="orrery-data-status">${s.mark}</span><span class="orrery-data-key">${Ps(t)}</span><span class="orrery-data-source">${o}</span><span class="orrery-data-detail">${l}</span><span class="orrery-data-age">${Ps(r)}</span></div>`}}function Lx(i,t){return i.error?{mark:"✗",cls:"err"}:i.bundled?{mark:"●",cls:"static"}:i.fetched?Ux(i,t)?{mark:"●",cls:"stale"}:{mark:"✓",cls:"ok"}:{mark:"⋯",cls:"pending"}}function Ix(i,t){return i.error?"fetch failed":i.bundled?"bundled":i.fetched?Nx(t-i.fetched.getTime()):"fetching…"}function Ux(i,t){return!i.fetched||i.bundled||!i.refreshSeconds?!1:t-i.fetched.getTime()>i.refreshSeconds*2*1e3}function Nx(i){const t=Math.floor(i/1e3);if(t<60)return`${t}s ago`;const e=Math.floor(t/60);if(e<60)return`${e}m ago`;const n=Math.floor(e/60);return n<48?`${n}h ago`:`${Math.floor(n/24)}d ago`}function Ps(i){return i.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t])}function Fx(i){return i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}let Du=!1;function Ox(){if(Du)return;Du=!0;const i=`
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
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}const tr="orrery.clock.v1",es=[-10080,-1440,-720,-480,-240,-120,-60,-1,0,1,60,120,240,480,720,1440,10080],kx=60;class Bx{root;timeEl;dateEl;zoneEl;expandBtn;controlsEl;warpReadoutEl;pauseBtn;staleCaptionEl;staleDateEl;zone;expanded;warpBeforePause=kx;lastTimeStr="";lastDateStr="";lastZoneStr="";lastWarpStr="";lastPauseLabel="";lastStaleDateStr="";callbacks;constructor(t,e={}){qx(),this.callbacks=e,this.zone=Wx(),this.expanded=$x(),this.root=document.createElement("div"),this.root.id="orrery-clock",this.root.innerHTML=`
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
    `,t.appendChild(this.root),this.timeEl=this.root.querySelector("#orrery-clock-time"),this.dateEl=this.root.querySelector("#orrery-clock-date"),this.zoneEl=this.root.querySelector("#orrery-clock-zone"),this.expandBtn=this.root.querySelector("#orrery-clock-expand"),this.controlsEl=this.root.querySelector("#orrery-clock-controls"),this.warpReadoutEl=this.root.querySelector("#orrery-clock-warp"),this.pauseBtn=this.root.querySelector("#orrery-clock-pause"),this.staleCaptionEl=this.root.querySelector("#orrery-clock-stale"),this.staleDateEl=this.root.querySelector("#orrery-clock-stale-date");const n=this.root.querySelector("#orrery-clock-close");this.expandBtn.addEventListener("click",()=>{this.expanded=!this.expanded,Iu(this.expanded),this.refreshExpandState()}),this.refreshExpandState(),n.addEventListener("click",()=>this.callbacks.onClose?.()),this.root.querySelector("#orrery-clock-slower").addEventListener("click",()=>{const s=window.__orreryTimeWarp??1,r=Gx(s);s!==0&&(this.warpBeforePause=s),window.__orreryTimeWarp=r}),this.root.querySelector("#orrery-clock-faster").addEventListener("click",()=>{const s=window.__orreryTimeWarp??1,r=Hx(s);s!==0&&(this.warpBeforePause=s),window.__orreryTimeWarp=r}),this.root.querySelector("#orrery-clock-reset").addEventListener("click",()=>{window.__orreryTimeWarp=1,this.callbacks.onSnapToLive?.()}),this.pauseBtn.addEventListener("click",()=>{const s=window.__orreryTimeWarp??1;s===0?window.__orreryTimeWarp=this.warpBeforePause||1:(this.warpBeforePause=s,window.__orreryTimeWarp=0)})}setVisible(t){this.root.classList.toggle("hidden",!t)}setZone(t){this.zone!==t&&(this.zone=t,Xx(t),this.lastTimeStr=this.lastDateStr=this.lastZoneStr="")}setControlsExpanded(t){this.expanded!==t&&(this.expanded=t,Iu(this.expanded),this.refreshExpandState())}setLiveDataStale(t,e){if(this.staleCaptionEl.classList.toggle("hidden",!t),t&&e){const n=e.toISOString().slice(0,10);n!==this.lastStaleDateStr&&(this.staleDateEl.textContent=n,this.lastStaleDateStr=n)}}refreshExpandState(){this.controlsEl.classList.toggle("hidden",!this.expanded),this.expandBtn.classList.toggle("active",this.expanded)}setTime(t){let e,n,s;this.zone==="utc"?(e=`${Dn(t.getUTCHours())}:${Dn(t.getUTCMinutes())}:${Dn(t.getUTCSeconds())}`,n=`${t.getUTCFullYear()}-${Dn(t.getUTCMonth()+1)}-${Dn(t.getUTCDate())}  ${Lu(t.getUTCDay())}`,s="UTC"):(e=`${Dn(t.getHours())}:${Dn(t.getMinutes())}:${Dn(t.getSeconds())}`,n=`${t.getFullYear()}-${Dn(t.getMonth()+1)}-${Dn(t.getDate())}  ${Lu(t.getDay())}`,s=Vx(t)),e!==this.lastTimeStr&&(this.timeEl.textContent=e,this.lastTimeStr=e),n!==this.lastDateStr&&(this.dateEl.textContent=n,this.lastDateStr=n),s!==this.lastZoneStr&&(this.zoneEl.textContent=s,this.lastZoneStr=s);const r=window.__orreryTimeWarp??1,a=r===0?"paused":`× ${zx(r)}`;a!==this.lastWarpStr&&(this.warpReadoutEl.textContent=a,this.warpReadoutEl.classList.toggle("warped",r!==1),this.expandBtn.classList.toggle("warped",r!==1),this.lastWarpStr=a);const o=r===0?"▶":"⏸";o!==this.lastPauseLabel&&(this.pauseBtn.textContent=o,this.pauseBtn.title=r===0?"Resume":"Pause",this.lastPauseLabel=o)}}function zx(i){return Math.abs(i)>=1e3?`${(i/1e3).toFixed(1)}k`:Number.isInteger(i)?String(i):i.toFixed(2).replace(/\.?0+$/,"")}function Hx(i){for(const t of es)if(t>i)return t;return es[es.length-1]}function Gx(i){for(let t=es.length-1;t>=0;t--)if(es[t]<i)return es[t];return es[0]}function Dn(i){return i<10?`0${i}`:`${i}`}function Lu(i){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][i]}function Vx(i){try{const t=Intl.DateTimeFormat().resolvedOptions().timeZone,e=t?.includes("/")?t.split("/").slice(-1)[0].replace(/_/g," "):t||"local",s=new Intl.DateTimeFormat([],{timeZone:t,timeZoneName:"short"}).formatToParts(i).find(r=>r.type==="timeZoneName")?.value??"";return s?`${e} ${s}`:e}catch{return"local"}}function Wx(){try{const i=localStorage.getItem(tr);return i&&JSON.parse(i).zone==="local"?"local":"utc"}catch{return"utc"}}function Xx(i){try{const t=localStorage.getItem(tr),e=t?JSON.parse(t):{};e.zone=i,localStorage.setItem(tr,JSON.stringify(e))}catch{}}function $x(){try{const i=localStorage.getItem(tr);return i?!!JSON.parse(i).expanded:!1}catch{return!1}}function Iu(i){try{const t=localStorage.getItem(tr),e=t?JSON.parse(t):{};e.expanded=i,localStorage.setItem(tr,JSON.stringify(e))}catch{}}let Uu=!1;function qx(){if(Uu)return;Uu=!0;const i=`
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
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}class Yx{root;placeEl;coordsEl;localRowEl;localEl;solarEl;currentRowEl;sunRowEl;moonRowEl;sunCoordsEl;moonCoordsEl;geoButton;geoStatus;lat=null;lon=null;source=null;pinnedIanaName=null;pinnedUtcOffset=0;clearHandler=null;geoHandler=null;sunBeamHandler=null;moonBeamHandler=null;lastSunStr="";lastMoonStr="";lastLocalStr="";lastSolarStr="";constructor(t){jx();const e=typeof navigator<"u"&&"geolocation"in navigator;this.root=document.createElement("div"),this.root.id="orrery-location",this.root.classList.add("hidden"),this.root.innerHTML=`
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
    `,t.appendChild(this.root),this.placeEl=this.root.querySelector("#orrery-loc-place"),this.coordsEl=this.root.querySelector("#orrery-loc-coords"),this.localRowEl=this.root.querySelector("#orrery-loc-row-local"),this.localEl=this.root.querySelector("#orrery-loc-local"),this.solarEl=this.root.querySelector("#orrery-loc-solar"),this.currentRowEl=this.root.querySelector("#orrery-loc-row-current"),this.sunRowEl=this.root.querySelector("#orrery-loc-row-sun"),this.moonRowEl=this.root.querySelector("#orrery-loc-row-moon"),this.sunCoordsEl=this.root.querySelector("#orrery-loc-sun-coords"),this.moonCoordsEl=this.root.querySelector("#orrery-loc-moon-coords"),this.geoButton=this.root.querySelector("#orrery-loc-geo"),this.geoStatus=this.root.querySelector("#orrery-loc-geostatus"),this.root.querySelector("#orrery-loc-clear").addEventListener("click",()=>this.clearHandler?.()),this.geoButton?.addEventListener("click",()=>this.requestGeolocation());const s=r=>a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),r())};this.sunRowEl.addEventListener("click",()=>this.sunBeamHandler?.()),this.sunRowEl.addEventListener("keydown",s(()=>this.sunBeamHandler?.())),this.moonRowEl.addEventListener("click",()=>this.moonBeamHandler?.()),this.moonRowEl.addEventListener("keydown",s(()=>this.moonBeamHandler?.()))}onSunBeam(t){this.sunBeamHandler=t}onMoonBeam(t){this.moonBeamHandler=t}onClear(t){this.clearHandler=t}onGeolocate(t){this.geoHandler=t}setBeamCoords(t,e){const n=`${il(t.lat)}, ${sl(t.lon)}`,s=`${il(e.lat)}, ${sl(e.lon)}`;n!==this.lastSunStr&&(this.sunCoordsEl.textContent=n,this.lastSunStr=n),s!==this.lastMoonStr&&(this.moonCoordsEl.textContent=s,this.lastMoonStr=s)}setVisible(t){this.root.classList.toggle("hidden",!t)}setLocation(t,e,n){this.lat=t,this.lon=e,this.source=n,this.coordsEl.textContent=`${il(t)}, ${sl(e)}`,this.placeEl.textContent="looking up…",this.refreshSelection()}setPlaceName(t){this.placeEl.textContent=t??"—"}setPinnedZone(t,e=0){this.pinnedIanaName=t||null,this.pinnedUtcOffset=e,this.localRowEl.classList.toggle("hidden",this.lat===null),this.lastLocalStr=""}setNow(t){if(this.lat===null||this.lon===null)return;let e="";if(this.pinnedIanaName)try{const l=new Intl.DateTimeFormat("en-GB",{timeZone:this.pinnedIanaName,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(t),c=Object.fromEntries(l.filter(d=>d.type!=="literal").map(d=>[d.type,d.value])),u=new Intl.DateTimeFormat([],{timeZone:this.pinnedIanaName,timeZoneName:"short"}).formatToParts(t).find(d=>d.type==="timeZoneName")?.value??"";e=`${c.hour}:${c.minute}:${c.second}${u?`  ${u}`:""}`}catch{}if(!e){const l=t.getTime()+this.pinnedUtcOffset*36e5,c=new Date(l);e=`${Ds(c.getUTCHours())}:${Ds(c.getUTCMinutes())}:${Ds(c.getUTCSeconds())}`}e!==this.lastLocalStr&&(this.localEl.textContent=e,this.lastLocalStr=e);const n=(t.getUTCHours()+t.getUTCMinutes()/60+t.getUTCSeconds()/3600+this.lon/15+24)%24,s=Math.floor(n),r=Math.floor((n-s)*60),a=Math.floor(((n-s)*60-r)*60),o=`${Ds(s)}:${Ds(r)}:${Ds(a)}`;o!==this.lastSolarStr&&(this.solarEl.textContent=o,this.lastSolarStr=o)}reset(){this.lat=this.lon=null,this.source=null,this.pinnedIanaName=null,this.placeEl.textContent="click the globe to drop a pin",this.coordsEl.textContent="—",this.localEl.textContent="—",this.solarEl.textContent="—",this.localRowEl.classList.add("hidden"),this.lastLocalStr="",this.lastSolarStr="",this.geoStatus&&(this.geoStatus.textContent=""),this.refreshSelection()}refreshSelection(){this.currentRowEl.classList.toggle("selected",this.source==="click"||this.source==="geolocation"),this.sunRowEl.classList.toggle("selected",this.source==="sun"),this.moonRowEl.classList.toggle("selected",this.source==="moon")}requestGeolocation(){!navigator.geolocation||!this.geoButton||!this.geoStatus||(this.geoButton.disabled=!0,this.geoStatus.textContent="asking browser…",navigator.geolocation.getCurrentPosition(t=>{this.geoButton.disabled=!1,this.geoStatus.textContent="",this.geoHandler?.(t.coords.latitude,t.coords.longitude)},t=>{this.geoButton.disabled=!1,this.geoStatus.textContent=t.code===t.PERMISSION_DENIED?"permission denied":t.code===t.POSITION_UNAVAILABLE?"position unavailable":t.code===t.TIMEOUT?"timed out":"unavailable"},{enableHighAccuracy:!1,timeout:1e4,maximumAge:300*1e3}))}}function Ds(i){return i<10?`0${i}`:`${i}`}function il(i){return`${Math.abs(i).toFixed(2)}°${i>=0?"N":"S"}`}function sl(i){return`${Math.abs(i).toFixed(2)}°${i>=0?"E":"W"}`}let Nu=!1;function jx(){if(Nu)return;Nu=!0;const i=`
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
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}const Mr=56,rl=Mr/.2666,Zx=5,Fu=3e4,Ou=5*6e4;class Kx{root;moonCircle;magnitudeEl;statusEl;placeEl;labelEl;solarSvg;lunarSvg;moonBloodCircle;scrubRoot;scrubInput;scrubMarker;scrubRelEl;playBtn;callbacks;lastMagnitudeStr="";lastStatusStr="";lastMoonR=-1;lastMoonX=NaN;lastMoonY=NaN;lastRelStr="";lastPauseLabel="";lastBloodOpacity=-1;mode="solar";scrubStartMs=0;scrubEndMs=0;scrubPeakMs=0;isDragging=!1;constructor(t,e={}){Jx(),this.callbacks=e,this.root=document.createElement("div"),this.root.id="orrery-sundisc",this.root.classList.add("hidden");const n=Mr*1.8;this.root.innerHTML=`
      <div class="orrery-sundisc-title">
        <span class="orrery-sundisc-label" id="orrery-sundisc-label">sky from</span>
        <span class="orrery-sundisc-place" id="orrery-sundisc-place">—</span>
        <span class="orrery-sundisc-close" id="orrery-sundisc-close" title="Close eclipse view (closes both panels)">✕</span>
      </div>
      <!-- Solar view: sun's gold disc + moon's dark disc at observer-view offset. -->
      <svg id="orrery-sundisc-svg-solar" viewBox="${-n} ${-n} ${2*n} ${2*n}" width="${2*n}" height="${2*n}">
        <defs>
          <radialGradient id="orrery-sundisc-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stop-color="#fff4c2"/>
            <stop offset="70%" stop-color="#ffcc44"/>
            <stop offset="100%" stop-color="#cc8800"/>
          </radialGradient>
        </defs>
        <circle id="orrery-sundisc-sun"
                cx="0" cy="0" r="${Mr}"
                fill="url(#orrery-sundisc-grad)"/>
        <circle id="orrery-sundisc-moon"
                cx="0" cy="0" r="0"
                fill="#0a0e16" stroke="#1a1f2a" stroke-width="0.5"/>
      </svg>
      <!-- Lunar view: moon's disc dimming + tinting toward copper as Earth's
           shadow deepens. Two stacked circles (gray base + copper overlay
           cross-fading on fraction) mirror the same trick the 3D Moon mesh
           uses with emissive intensity + tint. -->
      <svg id="orrery-sundisc-svg-lunar" class="hidden" viewBox="${-n} ${-n} ${2*n} ${2*n}" width="${2*n}" height="${2*n}">
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
        <circle id="orrery-sundisc-moondisc-base"   cx="0" cy="0" r="${Mr}" fill="url(#orrery-sundisc-moongrad)"/>
        <circle id="orrery-sundisc-moondisc-blood"  cx="0" cy="0" r="${Mr}" fill="url(#orrery-sundisc-bloodgrad)" opacity="0"/>
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
    `,t.appendChild(this.root),this.moonCircle=this.root.querySelector("#orrery-sundisc-moon"),this.magnitudeEl=this.root.querySelector("#orrery-sundisc-mag"),this.statusEl=this.root.querySelector("#orrery-sundisc-status"),this.placeEl=this.root.querySelector("#orrery-sundisc-place"),this.labelEl=this.root.querySelector("#orrery-sundisc-label"),this.solarSvg=this.root.querySelector("#orrery-sundisc-svg-solar"),this.lunarSvg=this.root.querySelector("#orrery-sundisc-svg-lunar"),this.moonBloodCircle=this.root.querySelector("#orrery-sundisc-moondisc-blood"),this.scrubRoot=this.root.querySelector("#orrery-sundisc-scrub"),this.scrubInput=this.root.querySelector("#orrery-sundisc-scrub-input"),this.scrubMarker=this.root.querySelector("#orrery-sundisc-scrub-marker"),this.scrubRelEl=this.root.querySelector("#orrery-sundisc-scrub-rel"),this.playBtn=this.root.querySelector("#orrery-sundisc-play"),this.scrubInput.addEventListener("pointerdown",()=>{this.isDragging=!0}),window.addEventListener("pointerup",()=>{this.isDragging=!1}),window.addEventListener("pointercancel",()=>{this.isDragging=!1}),this.scrubInput.addEventListener("input",()=>{const s=this.scrubStartMs+this.scrubInput.valueAsNumber;this.callbacks.onScrubTo?.(s)}),this.root.querySelector("#orrery-sundisc-rev").addEventListener("click",()=>{this.callbacks.onStep?.(-Fu)}),this.root.querySelector("#orrery-sundisc-ff").addEventListener("click",()=>{this.callbacks.onStep?.(Fu)}),this.playBtn.addEventListener("click",()=>{this.callbacks.onPlayPause?.()}),this.root.querySelector("#orrery-sundisc-close").addEventListener("click",()=>{this.callbacks.onClose?.()})}setVisible(t){this.root.classList.toggle("hidden",!t)}setScrubControlsVisible(t){this.scrubRoot.classList.toggle("hidden",!t)}setMode(t){this.mode!==t&&(this.mode=t,this.solarSvg.classList.toggle("hidden",t!=="solar"),this.lunarSvg.classList.toggle("hidden",t!=="lunar"),this.labelEl.textContent=t==="lunar"?"the moon":"sky from",t==="lunar"&&(this.placeEl.textContent=""))}setLunarFraction(t){if(this.mode!=="lunar")return;const e=Math.max(0,Math.min(1,t));e!==this.lastBloodOpacity&&(this.moonBloodCircle.setAttribute("opacity",e.toFixed(3)),this.lastBloodOpacity=e)}setLunarReadout(t,e){t!==this.lastMagnitudeStr&&(this.magnitudeEl.textContent=t,this.lastMagnitudeStr=t),e!==this.lastStatusStr&&(this.statusEl.textContent=e,this.lastStatusStr=e)}setEclipseWindow(t,e,n){this.scrubStartMs=t.getTime()-Ou,this.scrubEndMs=e.getTime()+Ou,this.scrubPeakMs=n.getTime();const s=this.scrubEndMs-this.scrubStartMs;this.scrubInput.max=String(s);const r=(this.scrubPeakMs-this.scrubStartMs)/s;this.scrubMarker.style.left=`${(r*100).toFixed(2)}%`}setSimulatedTime(t){if(this.isDragging||this.scrubEndMs<=this.scrubStartMs)return;const e=Math.max(this.scrubStartMs,Math.min(this.scrubEndMs,t));this.scrubInput.valueAsNumber=e-this.scrubStartMs;const n=Math.round((t-this.scrubPeakMs)/1e3),s=n<0?"−":"+",r=Math.abs(n),a=Math.floor(r/60),o=r%60,l=`T${s}${a}:${o.toString().padStart(2,"0")}`;l!==this.lastRelStr&&(this.scrubRelEl.textContent=l,this.lastRelStr=l)}setPlaying(t){const e=t?"⏸":"▶";e!==this.lastPauseLabel&&(this.playBtn.textContent=e,this.playBtn.title=t?"Pause":"Resume",this.lastPauseLabel=e)}setPlaceName(t){this.placeEl.textContent=t??"—"}update(t){if(!t.sunIsUp||t.angularSeparationDeg>Zx)return!1;const e=t.offsetEastDeg*rl,n=-t.offsetUpDeg*rl,s=t.moonApparentRadiusDeg*rl;e!==this.lastMoonX&&(this.moonCircle.setAttribute("cx",e.toFixed(2)),this.lastMoonX=e),n!==this.lastMoonY&&(this.moonCircle.setAttribute("cy",n.toFixed(2)),this.lastMoonY=n),s!==this.lastMoonR&&(this.moonCircle.setAttribute("r",s.toFixed(2)),this.lastMoonR=s);const r=t.magnitude;let a,o;return r<=0?(a="—",o=`${t.angularSeparationDeg.toFixed(2)}° apart`):r>=1?(a=`magnitude ${r.toFixed(3)}`,o=t.moonApparentRadiusDeg>t.sunApparentRadiusDeg?"total":"annular peak"):(a=`magnitude ${r.toFixed(3)}`,o=`${(r*100).toFixed(1)}% obscured`),a!==this.lastMagnitudeStr&&(this.magnitudeEl.textContent=a,this.lastMagnitudeStr=a),o!==this.lastStatusStr&&(this.statusEl.textContent=o,this.lastStatusStr=o),!0}}let ku=!1;function Jx(){if(ku)return;ku=!0;const i=`
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
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}const Qx={temperature:{stops:["#1a1a8c","#1aa6f2","#73d966","#f2d933","#d92626"]},humidity:{stops:["#b38c4d","#ccbf73","#8cbf66","#4d99bf","#264da6"]},pressure:{stops:["#7340a6","#4d8cd9","#8cd98c","#f2d959","#d94d33"]},water:{stops:["#d9d9cc","#a6ccd9","#4da6d9","#3366d9","#1a3399"]},cloud:{stops:["#333338","#737380","#b3b8c7","#e0ebfa","#a6d9ff"]}},hc=240,Bu=10;class tS{root;labelEl;minEl;midEl;maxEl;stopEls;lastSpec=null;constructor(t){eS(),this.root=document.createElement("div"),this.root.id="orrery-scalekey",this.root.classList.add("hidden"),this.root.innerHTML=`
      <div class="orrery-scalekey-label" id="orrery-scalekey-label">—</div>
      <svg id="orrery-scalekey-svg" width="${hc}" height="${Bu}">
        <defs>
          <linearGradient id="orrery-scalekey-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#000"/>
            <stop offset="25%"  stop-color="#000"/>
            <stop offset="50%"  stop-color="#000"/>
            <stop offset="75%"  stop-color="#000"/>
            <stop offset="100%" stop-color="#000"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${hc}" height="${Bu}"
              fill="url(#orrery-scalekey-grad)" rx="2" ry="2"/>
      </svg>
      <div class="orrery-scalekey-ticks">
        <span class="orrery-scalekey-min" id="orrery-scalekey-min">—</span>
        <span class="orrery-scalekey-mid" id="orrery-scalekey-mid">—</span>
        <span class="orrery-scalekey-max" id="orrery-scalekey-max">—</span>
      </div>
    `,t.appendChild(this.root),this.labelEl=this.root.querySelector("#orrery-scalekey-label"),this.minEl=this.root.querySelector("#orrery-scalekey-min"),this.midEl=this.root.querySelector("#orrery-scalekey-mid"),this.maxEl=this.root.querySelector("#orrery-scalekey-max"),this.stopEls=Array.from(this.root.querySelectorAll("#orrery-scalekey-grad stop"))}setVisible(t){this.root.classList.toggle("hidden",!t)}update(t){if(this.lastSpec&&this.lastSpec.label===t.label&&this.lastSpec.palette===t.palette&&this.lastSpec.displayMin===t.displayMin&&this.lastSpec.displayMid===t.displayMid&&this.lastSpec.displayMax===t.displayMax)return;this.lastSpec={...t},this.labelEl.textContent=t.label,this.minEl.textContent=t.displayMin,this.midEl.textContent=t.displayMid,this.maxEl.textContent=t.displayMax;const e=Qx[t.palette].stops;for(let n=0;n<5;n++)this.stopEls[n].setAttribute("stop-color",e[n])}}let zu=!1;function eS(){if(zu)return;zu=!0;const i=`
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
      width: ${hc}px;
      margin: 4px auto 0;
      font-size: 10px;
      color: #8a93a7;
    }
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}const nS=Date.UTC(2e3,0,1,12,0,0),Na=Math.PI/180;function Wd(i){return(i.getTime()-nS)/864e5}function Xd(i){const t=Wd(i),e=(280.46+.9856474*t)*Na,n=(357.528+.9856003*t)*Na,s=e+(1.915*Math.sin(n)+.02*Math.sin(2*n))*Na,r=(23.439-4e-7*t)*Na,a=Math.atan2(Math.cos(r)*Math.sin(s),Math.cos(s)),o=Math.asin(Math.sin(r)*Math.sin(s));return{ra:a,dec:o}}function $d(i){let e=18.697374558+24.06570982441908*Wd(i);return e=(e%24+24)%24,e*Math.PI/12}function qd(i,t=new T){const{ra:e,dec:n}=Xd(i);return t.set(Math.cos(n)*Math.cos(e),Math.sin(n),-Math.cos(n)*Math.sin(e))}function er(i){return $d(i)}const bn=Math.PI/180,io=23.44*bn,Hu=new T(-Math.sin(io),Math.cos(io),0),al=Math.asin(696e3/149597870)/bn,iS=1738/6378.14,ol=new T,Ls=new T,Fa=new T,ll=new T,cl=new T,_r=new T,yr=new T;function sS(i,t,e,n,s){const r=i*bn,a=t*bn,o=Math.cos(r),l=o*Math.cos(a),c=Math.sin(r),h=-o*Math.sin(a),u=er(e),d=Math.cos(u),p=Math.sin(u),g=l*d+h*p,v=c,m=-l*p+h*d,f=Math.cos(io),b=Math.sin(io);ol.set(g*f-v*b,g*b+v*f,m),Ls.copy(ol).normalize();const x=Ls.dot(Hu);Fa.copy(Hu).addScaledVector(Ls,-x).normalize(),ll.crossVectors(Ls,Fa),yr.copy(n).normalize();const y=yr.dot(Ls),D=Math.asin(hl(y,-1,1))/bn,R=yr.dot(ll),A=yr.dot(Fa);let P=Math.atan2(R,A)/bn;P<0&&(P+=360),cl.copy(s).sub(ol);const w=cl.length();_r.copy(cl).divideScalar(w);const M=_r.dot(Ls),C=Math.asin(hl(M,-1,1))/bn,H=_r.dot(ll),O=_r.dot(Fa);let W=Math.atan2(H,O)/bn;W<0&&(W+=360);const $=hl(yr.dot(_r),-1,1),G=Math.acos($)/bn,Y=Math.asin(iS/w)/bn,B=(al+Y-G)/(2*al);let K=W-P;K>180&&(K-=360),K<-180&&(K+=360);const st=K*Math.cos(D*bn),ft=C-D;return{sunAltitudeDeg:D,sunAzimuthDeg:P,moonAltitudeDeg:C,moonAzimuthDeg:W,angularSeparationDeg:G,sunApparentRadiusDeg:al,moonApparentRadiusDeg:Y,magnitude:B,offsetEastDeg:st,offsetUpDeg:ft,sunIsUp:D>0}}function hl(i,t,e){return i<t?t:i>e?e:i}const so=[{id:"20260812",name:"Spain total solar eclipse (2026)",region:"Iceland → Greenland → northern Spain",type:"total",peakUtc:new Date("2026-08-12T17:46:00Z"),startUtc:new Date("2026-08-12T15:34:00Z"),endUtc:new Date("2026-08-12T19:58:00Z"),maxTotalitySec:134},{id:"20270802",name:"Long-duration total solar eclipse over Spain & North Africa (2027)",region:"Atlantic → Gibraltar → Spain → Egypt → Saudi Arabia",type:"total",peakUtc:new Date("2027-08-02T10:07:00Z"),startUtc:new Date("2027-08-02T07:30:00Z"),endUtc:new Date("2027-08-02T12:43:00Z"),maxTotalitySec:384},{id:"20280722",name:"Australia & New Zealand total solar eclipse (2028)",region:"Indian Ocean → central Australia → Sydney → New Zealand",type:"total",peakUtc:new Date("2028-07-22T02:56:00Z"),startUtc:new Date("2028-07-22T00:30:00Z"),endUtc:new Date("2028-07-22T05:23:00Z"),maxTotalitySec:310},{id:"20240408",name:"North American total solar eclipse (2024)",region:"Mexico → Texas → Indianapolis → Ohio → eastern Canada",type:"total",peakUtc:new Date("2024-04-08T18:18:00Z"),startUtc:new Date("2024-04-08T15:42:00Z"),endUtc:new Date("2024-04-08T20:52:00Z"),maxTotalitySec:268}];function rS(i=new Date){return so.filter(e=>e.endUtc.getTime()>i.getTime()).sort((e,n)=>e.peakUtc.getTime()-n.peakUtc.getTime())[0]??null}const aS=[{id:"20260303",name:"Total lunar eclipse (2026)",region:"Pacific · Asia · Australia · Americas (Pacific Rim)",type:"total",startUtc:new Date("2026-03-03T08:39:00Z"),peakUtc:new Date("2026-03-03T11:33:00Z"),endUtc:new Date("2026-03-03T14:28:00Z"),umbralMagnitude:1.151,totalitySec:3480},{id:"20260828",name:"Partial lunar eclipse (2026)",region:"Americas · Europe · Africa · west Asia",type:"partial",startUtc:new Date("2026-08-28T02:39:00Z"),peakUtc:new Date("2026-08-28T04:54:00Z"),endUtc:new Date("2026-08-28T07:38:00Z"),umbralMagnitude:.929,totalitySec:0},{id:"20280112",name:"Partial lunar eclipse (2028)",region:"Asia · Australia · Pacific",type:"partial",startUtc:new Date("2028-01-12T01:43:00Z"),peakUtc:new Date("2028-01-12T04:13:00Z"),endUtc:new Date("2028-01-12T06:42:00Z"),umbralMagnitude:.733,totalitySec:0},{id:"20281231",name:"Total lunar eclipse (2028)",region:"Europe · Africa · Asia · Americas",type:"total",startUtc:new Date("2028-12-31T14:08:00Z"),peakUtc:new Date("2028-12-31T16:53:00Z"),endUtc:new Date("2028-12-31T19:39:00Z"),umbralMagnitude:1.25,totalitySec:4260},{id:"20290626",name:"Total lunar eclipse (2029) — deep totality",region:"Americas · Europe · Africa",type:"total",startUtc:new Date("2029-06-26T00:33:00Z"),peakUtc:new Date("2029-06-26T03:23:00Z"),endUtc:new Date("2029-06-26T06:13:00Z"),umbralMagnitude:1.844,totalitySec:6120},{id:"20291220",name:"Total lunar eclipse (2029)",region:"Americas · Europe · Africa",type:"total",startUtc:new Date("2029-12-20T19:54:00Z"),peakUtc:new Date("2029-12-20T22:42:00Z"),endUtc:new Date("2029-12-21T01:31:00Z"),umbralMagnitude:1.118,totalitySec:3240}];function oS(i,t){const e=t.getTime(),n=i.startUtc.getTime(),s=i.peakUtc.getTime(),r=i.endUtc.getTime();return e<=n||e>=r?0:e<=s?(e-n)/(s-n):(r-e)/(r-s)}class lS{root;solarListEl;lunarListEl;solarTabBtn;lunarTabBtn;callbacks;solarSorted;lunarSorted;solarRowEls=new Map;lunarRowEls=new Map;selectedSolarId=null;selectedLunarId=null;activeTab="solar";constructor(t,e={}){cS(),this.callbacks=e,this.solarSorted=[...so].sort((s,r)=>s.peakUtc.getTime()-r.peakUtc.getTime()),this.lunarSorted=[...aS].sort((s,r)=>s.peakUtc.getTime()-r.peakUtc.getTime()),this.root=document.createElement("div"),this.root.id="orrery-eclipse",this.root.classList.add("hidden"),this.root.innerHTML=`
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
    `,t.appendChild(this.root),this.solarListEl=this.root.querySelector("#orrery-ecl-list-solar"),this.lunarListEl=this.root.querySelector("#orrery-ecl-list-lunar"),this.solarTabBtn=this.root.querySelector("#orrery-ecl-tab-solar"),this.lunarTabBtn=this.root.querySelector("#orrery-ecl-tab-lunar"),this.root.querySelector("#orrery-ecl-close").addEventListener("click",()=>this.callbacks.onClose?.()),this.solarTabBtn.addEventListener("click",()=>this.setActiveTab("solar")),this.lunarTabBtn.addEventListener("click",()=>this.setActiveTab("lunar")),this.renderSolarList(),this.renderLunarList()}setVisible(t){this.root.classList.toggle("hidden",!t)}setSelected(t,e){if(t==="solar"){if(this.selectedSolarId===e)return;this.selectedSolarId!==null&&this.solarRowEls.get(this.selectedSolarId)?.classList.remove("selected"),this.selectedSolarId=e,e!==null&&this.solarRowEls.get(e)?.classList.add("selected")}else{if(this.selectedLunarId===e)return;this.selectedLunarId!==null&&this.lunarRowEls.get(this.selectedLunarId)?.classList.remove("selected"),this.selectedLunarId=e,e!==null&&this.lunarRowEls.get(e)?.classList.add("selected")}}getActiveTab(){return this.activeTab}setActiveTab(t){this.activeTab!==t&&(this.activeTab=t,this.solarTabBtn.classList.toggle("active",t==="solar"),this.lunarTabBtn.classList.toggle("active",t==="lunar"),this.solarListEl.classList.toggle("hidden",t!=="solar"),this.lunarListEl.classList.toggle("hidden",t!=="lunar"),this.callbacks.onTabChange?.(t))}renderSolarList(){const t=Date.now();this.solarListEl.innerHTML="",this.solarRowEls.clear();for(const e of this.solarSorted){const n=document.createElement("div");n.className="orrery-ecl-item",e.endUtc.getTime()<t&&n.classList.add("past"),n.setAttribute("role","button"),n.setAttribute("tabindex","0"),n.title="Click to jump to T−1m and start at 60× warp";const s=e.peakUtc.toISOString().slice(0,16).replace("T"," ")+"Z",r=e.maxTotalitySec>=60?`${Math.floor(e.maxTotalitySec/60)}m ${e.maxTotalitySec%60}s`:`${e.maxTotalitySec}s`;n.innerHTML=`
        <div class="orrery-ecl-line1">
          <span class="orrery-ecl-jump">▶</span>
          <span class="orrery-ecl-name">${Oa(e.name)}</span>
        </div>
        <div class="orrery-ecl-line2">
          <span class="orrery-ecl-peak">${s}</span>
          <span class="orrery-ecl-type">${e.type}</span>
          <span class="orrery-ecl-dur">max ${r}</span>
        </div>
        <div class="orrery-ecl-line3">${Oa(e.region)}</div>
      `,n.addEventListener("click",()=>this.callbacks.onJumpSolar?.(e)),n.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this.callbacks.onJumpSolar?.(e))}),this.solarListEl.appendChild(n),this.solarRowEls.set(e.id,n)}this.selectedSolarId!==null&&this.solarRowEls.get(this.selectedSolarId)?.classList.add("selected")}renderLunarList(){const t=Date.now();this.lunarListEl.innerHTML="",this.lunarRowEls.clear();for(const e of this.lunarSorted){const n=document.createElement("div");n.className="orrery-ecl-item",e.endUtc.getTime()<t&&n.classList.add("past"),n.setAttribute("role","button"),n.setAttribute("tabindex","0"),n.title="Click to jump to T−1m and start at 60× warp";const s=e.peakUtc.toISOString().slice(0,16).replace("T"," ")+"Z",r=e.type==="total"?`tot ${Math.floor(e.totalitySec/60)}m ${e.totalitySec%60}s`:`mag ${e.umbralMagnitude.toFixed(2)}`;n.innerHTML=`
        <div class="orrery-ecl-line1">
          <span class="orrery-ecl-jump">▶</span>
          <span class="orrery-ecl-name">${Oa(e.name)}</span>
        </div>
        <div class="orrery-ecl-line2">
          <span class="orrery-ecl-peak">${s}</span>
          <span class="orrery-ecl-type">${e.type}</span>
          <span class="orrery-ecl-dur">${r}</span>
        </div>
        <div class="orrery-ecl-line3">${Oa(e.region)}</div>
      `,n.addEventListener("click",()=>this.callbacks.onJumpLunar?.(e)),n.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this.callbacks.onJumpLunar?.(e))}),this.lunarListEl.appendChild(n),this.lunarRowEls.set(e.id,n)}this.selectedLunarId!==null&&this.lunarRowEls.get(this.selectedLunarId)?.classList.add("selected")}}function Oa(i){return i.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}let Gu=!1;function cS(){if(Gu)return;Gu=!0;const i=`
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
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}const hS={temp:"current-temp-surface-level-gfs-1.0.json",relative_humidity:"current-relative_humidity-surface-level-gfs-1.0.json",air_density:"current-air_density-surface-level-gfs-1.0.json",total_precipitable_water:"current-total_precipitable_water-gfs-1.0.json",total_cloud_water:"current-total_cloud_water-gfs-1.0.json",total_cloud_cover:"current-total_cloud_cover-gfs-1.0.json",mean_sea_level_pressure:"current-mean_sea_level_pressure-gfs-1.0.json"};class uS{baseUrl;constructor(t="/data"){this.baseUrl=t}async getWindGrid(t){const e=`${this.baseUrl}/weather/current/current-wind-surface-level-gfs-1.0.json`,n=await fetch(e);if(!n.ok)throw new Error(`Wind fetch failed: ${n.status} ${n.statusText}`);const s=await n.json(),r=s.find(b=>b.header.parameterNumber===2),a=s.find(b=>b.header.parameterNumber===3);if(!r||!a)throw new Error("Wind JSON missing U or V record");const{nx:o,ny:l,lo1:c,la1:h,dx:u,dy:d,refTime:p,forecastTime:g}=r.header,v=ul(r.data),m=ul(a.data);if(v.length!==o*l)throw new Error(`Wind data length ${v.length} ≠ nx*ny ${o*l}`);const f=new Date(p);return f.setUTCHours(f.getUTCHours()+(g??0)),{width:o,height:l,lo1:c,la1:h,dx:u,dy:d,u:v,v:m,validTime:f}}async getScalar(t,e){const n=hS[t];if(!n)throw new Error(`Unknown scalar overlay type: ${t}`);const s=`${this.baseUrl}/weather/current/${n}`,r=await fetch(s);if(!r.ok)throw new Error(`Scalar ${t} fetch failed: ${r.status} ${r.statusText}`);const a=await r.json();if(!a.length)throw new Error(`Scalar ${t}: empty records`);const o=a[0],{nx:l,ny:c,lo1:h,la1:u,dx:d,dy:p,refTime:g,forecastTime:v}=o.header,m=ul(o.data);if(m.length!==l*c)throw new Error(`Scalar ${t} data length ${m.length} ≠ nx*ny ${l*c}`);const f=new Date(g);return f.setUTCHours(f.getUTCHours()+(v??0)),{width:l,height:c,lo1:h,la1:u,dx:d,dy:p,data:m,validTime:f,parameterName:o.header.parameterNumberName??t,parameterUnit:o.header.parameterUnit??""}}}function ul(i){const t=new Float32Array(i.length);for(let e=0;e<i.length;e++){const n=i[e];t[e]=n==null||!Number.isFinite(n)?0:n}return t}const dS="https://services.swpc.noaa.gov/json/ovation_aurora_latest.json";async function fS(){const i=await fetch(dS);if(!i.ok)throw new Error(`aurora fetch failed: ${i.status}`);const t=await i.json(),e=t.coordinates,n=new Float32Array(e.length*3);let s=0;for(let r=0;r<e.length;r++)n[r*3+0]=e[r][0],n[r*3+1]=e[r][1],n[r*3+2]=e[r][2],e[r][2]>s&&(s=e[r][2]);return{forecastTime:new Date(t["Forecast Time"]),data:n,pointCount:e.length,maxProbability:s}}const pS="https://services.swpc.noaa.gov/json/planetary_k_index_1m.json";async function mS(){const i=await fetch(pS);if(!i.ok)throw new Error(`Kp fetch failed: ${i.status}`);const t=await i.json();if(!Array.isArray(t)||t.length===0)throw new Error("Kp: empty response");const e=t[t.length-1],n=parseFloat(e.kp_index??e.estimated_kp??e.kp);if(!Number.isFinite(n))throw new Error(`Kp: could not parse value from ${JSON.stringify(e)}`);return{time:new Date(e.time_tag),kp:n}}function gS(i){return i<2?"very quiet":i<3?"quiet":i<4?"unsettled":i<5?"active":i<6?"minor storm (G1)":i<7?"moderate storm (G2)":i<8?"strong storm (G3)":i<9?"severe storm (G4)":"extreme storm (G5)"}function vS(i){const t=[[0,67],[1,64],[2,62],[3,60],[4,57],[5,55],[6,52],[7,49],[8,46],[9,43]],e=Math.max(0,Math.min(9,i));for(let n=0;n<t.length-1;n++){const[s,r]=t[n],[a,o]=t[n+1];if(e>=s&&e<=a){const l=(e-s)/(a-s);return Math.round(r+l*(o-r))}}return 67}const _S="https://firms.modaps.eosdis.nasa.gov/api/area/csv";async function yS(i={}){const t="6d854011ed51a0bc164b2bf60000b738",e=i.source??"VIIRS_SNPP_NRT",n=i.days??1,s=`${_S}/${t}/${e}/world/${n}`,r=await fetch(s);if(!r.ok)throw new Error(`FIRMS fetch failed: ${r.status}`);const a=await r.text();if(a.startsWith("Invalid")||a.startsWith("No fire"))throw new Error(`FIRMS returned: ${a.slice(0,200)}`);const o=a.split(/\r?\n/);if(o.length<2)return{detections:[],fetchedAt:new Date};const l=o[0].split(",").map(v=>v.trim()),c=l.indexOf("latitude"),h=l.indexOf("longitude"),u=l.indexOf("frp"),d=l.indexOf("bright_ti4"),p=l.indexOf("daynight");if(c<0||h<0)throw new Error(`FIRMS: unexpected CSV header: ${o[0].slice(0,200)}`);const g=[];for(let v=1;v<o.length;v++){const m=o[v];if(!m)continue;const f=m.split(","),b=parseFloat(f[c]),x=parseFloat(f[h]);!Number.isFinite(b)||!Number.isFinite(x)||g.push({lat:b,lon:x,frp:u>=0&&parseFloat(f[u])||0,brightTi4:d>=0&&parseFloat(f[d])||0,daynight:p>=0?f[p]:""})}return{detections:g,fetchedAt:new Date}}const xS=6371;function SS(i,t,e=20){const n=new Set;if(i.length===0)return n;for(const s of t){const r=Math.cos(s.lat*Math.PI/180);for(const a of i){const o=(a.lat-s.lat)*Math.PI/180,l=(a.lon-s.lon)*Math.PI/180*r;if(xS*Math.sqrt(o*o+l*l)<=e){n.add(s.id);break}}}return n}async function MS(){const i=await fetch("/data/earthquakes/current.json");if(!i.ok)throw new Error(`Earthquakes fetch failed: ${i.status}`);return{events:((await i.json()).events??[]).filter(n=>Number.isFinite(n.lat)&&Number.isFinite(n.lon)).map(n=>({lat:n.lat,lon:n.lon,mag:typeof n.mag=="number"?n.mag:0,depthKm:typeof n.depthKm=="number"?n.depthKm:0,timeMs:n.timeMs,place:n.place??""})),fetchedAt:new Date}}const bS="/proxy/nhc/CurrentStorms.json";async function wS(){const i=await fetch(bS);if(!i.ok)throw new Error(`NHC fetch failed: ${i.status}`);const t=await i.json(),e=Array.isArray(t.activeStorms)?t.activeStorms:[],n=[];for(const s of e){const r=Vu(s.latitudeNumeric,s.latitude),a=Vu(s.longitudeNumeric,s.longitude);!Number.isFinite(r)||!Number.isFinite(a)||n.push({id:String(s.id??""),name:String(s.name??""),classification:String(s.classification??""),intensityKt:parseFloat(s.intensity)||0,pressureMb:parseFloat(s.pressure)||0,lat:r,lon:a,movementDir:parseFloat(s.movementDir)||NaN,movementSpeedKt:parseFloat(s.movementSpeed)||0,lastUpdate:String(s.lastUpdate??""),forecastConeKmz:dl(s.forecastCone),forecastTrackKmz:dl(s.forecastTrack),bestTrackKmz:dl(s.bestTrack)})}return{storms:n,fetchedAt:new Date}}function dl(i){if(i&&typeof i=="object"&&"kmzFile"in i){const t=i.kmzFile;if(typeof t=="string"&&t.length>0)return t}}function Vu(i,t){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"){const e=parseFloat(i);if(Number.isFinite(e))return e}if(typeof t=="string"){const e=t.trim().match(/^(-?\d+(?:\.\d+)?)\s*([NSEW])?$/i);if(e){const n=parseFloat(e[1]),s=e[2]?.toUpperCase();return s==="S"||s==="W"?-n:n}}return NaN}var nn=Uint8Array,zs=Uint16Array,ES=Int32Array,Yd=new nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),jd=new nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),TS=new nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Zd=function(i,t){for(var e=new zs(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var s=new ES(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)s[r]=r-e[n]<<5|n;return{b:e,r:s}},Kd=Zd(Yd,2),Jd=Kd.b,AS=Kd.r;Jd[28]=258,AS[258]=28;var RS=Zd(jd,0),CS=RS.b,uc=new zs(32768);for(var fe=0;fe<32768;++fe){var gi=(fe&43690)>>1|(fe&21845)<<1;gi=(gi&52428)>>2|(gi&13107)<<2,gi=(gi&61680)>>4|(gi&3855)<<4,uc[fe]=((gi&65280)>>8|(gi&255)<<8)>>1}var Dr=(function(i,t,e){for(var n=i.length,s=0,r=new zs(t);s<n;++s)i[s]&&++r[i[s]-1];var a=new zs(t);for(s=1;s<t;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(e){o=new zs(1<<t);var l=15-t;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],h=t-i[s],u=a[i[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[uc[u]>>l]=c}else for(o=new zs(n),s=0;s<n;++s)i[s]&&(o[s]=uc[a[i[s]-1]++]>>15-i[s]);return o}),Wr=new nn(288);for(var fe=0;fe<144;++fe)Wr[fe]=8;for(var fe=144;fe<256;++fe)Wr[fe]=9;for(var fe=256;fe<280;++fe)Wr[fe]=7;for(var fe=280;fe<288;++fe)Wr[fe]=8;var Qd=new nn(32);for(var fe=0;fe<32;++fe)Qd[fe]=5;var PS=Dr(Wr,9,1),DS=Dr(Qd,5,1),fl=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},xn=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},pl=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},LS=function(i){return(i+7)/8|0},Fc=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new nn(i.subarray(t,e))},IS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],un=function(i,t,e){var n=new Error(t||IS[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,un),!e)throw n;return n},US=function(i,t,e,n){var s=i.length,r=n?n.length:0;if(!s||t.f&&!t.l)return e||new nn(0);var a=!e,o=a||t.i!=2,l=t.i;a&&(e=new nn(s*3));var c=function(oe){var Gt=e.length;if(oe>Gt){var ge=new nn(Math.max(Gt*2,oe));ge.set(e),e=ge}},h=t.f||0,u=t.p||0,d=t.b||0,p=t.l,g=t.d,v=t.m,m=t.n,f=s*8;do{if(!p){h=xn(i,u,1);var b=xn(i,u+1,3);if(u+=3,b)if(b==1)p=PS,g=DS,v=9,m=5;else if(b==2){var R=xn(i,u,31)+257,A=xn(i,u+10,15)+4,P=R+xn(i,u+5,31)+1;u+=14;for(var w=new nn(P),M=new nn(19),C=0;C<A;++C)M[TS[C]]=xn(i,u+C*3,7);u+=A*3;for(var H=fl(M),O=(1<<H)-1,W=Dr(M,H,1),C=0;C<P;){var $=W[xn(i,u,O)];u+=$&15;var x=$>>4;if(x<16)w[C++]=x;else{var G=0,Y=0;for(x==16?(Y=3+xn(i,u,3),u+=2,G=w[C-1]):x==17?(Y=3+xn(i,u,7),u+=3):x==18&&(Y=11+xn(i,u,127),u+=7);Y--;)w[C++]=G}}var B=w.subarray(0,R),K=w.subarray(R);v=fl(B),m=fl(K),p=Dr(B,v,1),g=Dr(K,m,1)}else un(1);else{var x=LS(u)+4,y=i[x-4]|i[x-3]<<8,D=x+y;if(D>s){l&&un(0);break}o&&c(d+y),e.set(i.subarray(x,D),d),t.b=d+=y,t.p=u=D*8,t.f=h;continue}if(u>f){l&&un(0);break}}o&&c(d+131072);for(var st=(1<<v)-1,ft=(1<<m)-1,Dt=u;;Dt=u){var G=p[pl(i,u)&st],Vt=G>>4;if(u+=G&15,u>f){l&&un(0);break}if(G||un(2),Vt<256)e[d++]=Vt;else if(Vt==256){Dt=u,p=null;break}else{var X=Vt-254;if(Vt>264){var C=Vt-257,Q=Yd[C];X=xn(i,u,(1<<Q)-1)+Jd[C],u+=Q}var pt=g[pl(i,u)&ft],it=pt>>4;pt||un(3),u+=pt&15;var K=CS[it];if(it>3){var Q=jd[it];K+=pl(i,u)&(1<<Q)-1,u+=Q}if(u>f){l&&un(0);break}o&&c(d+131072);var St=d+X;if(d<K){var Tt=r-K,Bt=Math.min(K,St);for(Tt+d<0&&un(3);d<Bt;++d)e[d]=n[Tt+d]}for(;d<St;++d)e[d]=e[d-K]}}t.l=p,t.p=Dt,t.b=d,t.f=h,p&&(h=1,t.m=v,t.d=g,t.n=m)}while(!h);return d!=e.length&&a?Fc(e,0,d):e.subarray(0,d)},NS=new nn(0),Nn=function(i,t){return i[t]|i[t+1]<<8},wn=function(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24)>>>0},ml=function(i,t){return wn(i,t)+wn(i,t+4)*4294967296};function FS(i,t){return US(i,{i:2},t&&t.out,t&&t.dictionary)}var dc=typeof TextDecoder<"u"&&new TextDecoder,OS=0;try{dc.decode(NS,{stream:!0}),OS=1}catch{}var kS=function(i){for(var t="",e=0;;){var n=i[e++],s=(n>127)+(n>223)+(n>239);if(e+s>i.length)return{s:t,r:Fc(i,e-1)};s?s==3?(n=((n&15)<<18|(i[e++]&63)<<12|(i[e++]&63)<<6|i[e++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):s&1?t+=String.fromCharCode((n&31)<<6|i[e++]&63):t+=String.fromCharCode((n&15)<<12|(i[e++]&63)<<6|i[e++]&63):t+=String.fromCharCode(n)}};function tf(i,t){if(t){for(var e="",n=0;n<i.length;n+=16384)e+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return e}else{if(dc)return dc.decode(i);var s=kS(i),r=s.s,e=s.r;return e.length&&un(8),r}}var BS=function(i,t){return t+30+Nn(i,t+26)+Nn(i,t+28)},zS=function(i,t,e){var n=Nn(i,t+28),s=tf(i.subarray(t+46,t+46+n),!(Nn(i,t+8)&2048)),r=t+46+n,a=wn(i,t+20),o=e&&a==4294967295?HS(i,r):[a,wn(i,t+24),wn(i,t+42)],l=o[0],c=o[1],h=o[2];return[Nn(i,t+10),l,c,s,r+Nn(i,t+30)+Nn(i,t+32),h]},HS=function(i,t){for(;Nn(i,t)!=1;t+=4+Nn(i,t+2));return[ml(i,t+12),ml(i,t+4),ml(i,t+20)]};function GS(i,t){for(var e={},n=i.length-22;wn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&un(13);var s=Nn(i,n+8);if(!s)return{};var r=wn(i,n+16),a=r==4294967295||s==65535;if(a){var o=wn(i,n-12);a=wn(i,o)==101075792,a&&(s=wn(i,o+32),r=wn(i,o+48))}for(var l=0;l<s;++l){var c=zS(i,r,a),h=c[0],u=c[1],d=c[2],p=c[3],g=c[4],v=c[5],m=BS(i,v);r=g,h?h==8?e[p]=FS(i.subarray(m,m+u),{out:new nn(d)}):un(14,"unknown compression type "+h):e[p]=Fc(i,m,m+u)}return e}async function VS(i){const t=await fetch(i);if(!t.ok)throw new Error(`KMZ fetch failed: ${t.status} ${i}`);const e=new Uint8Array(await t.arrayBuffer());return WS(e)}function WS(i){const t=GS(i),e=Object.keys(t).find(s=>s.toLowerCase().endsWith(".kml"));if(!e)throw new Error("KMZ contains no .kml file");const n=tf(t[e]);return XS(n)}function XS(i){const t=new DOMParser().parseFromString(i,"application/xml");if(t.querySelector("parsererror"))throw new Error("KML XML parse error");const e=[],n=t.getElementsByTagName("Placemark");for(let s=0;s<n.length;s++){const r=n[s],a=r.getElementsByTagName("name")[0]?.textContent??void 0,o=r.getElementsByTagName("LineString");for(let c=0;c<o.length;c++){const h=Wu(o[c].getElementsByTagName("coordinates")[0]);h.length&&e.push({type:"line",coords:h,name:a})}const l=r.getElementsByTagName("Polygon");for(let c=0;c<l.length;c++){const u=l[c].getElementsByTagName("outerBoundaryIs")[0]?.getElementsByTagName("LinearRing")[0],d=Wu(u?.getElementsByTagName("coordinates")[0]);d.length&&e.push({type:"polygon",coords:d,name:a})}}return e}function Wu(i){if(!i)return[];const t=i.textContent??"",e=[],n=t.trim().split(/\s+/);for(const s of n){const r=s.split(",");if(r.length<2)continue;const a=parseFloat(r[0]),o=parseFloat(r[1]);Number.isFinite(a)&&Number.isFinite(o)&&e.push([a,o])}return e}function $S(i){return i&&i.replace(/^https?:\/\/(?:www\.)?nhc\.noaa\.gov\/?/i,"/proxy/nhc/")}const qS="/proxy/geocode/reverse",YS=1100,gl=1,vl=4e3;let Xu=0;async function jS(i,t){const e=Date.now();if(e-Xu<YS)return{status:"rate-limited"};Xu=e;const n=new URLSearchParams({format:"json",lat:i.toFixed(5),lon:t.toFixed(5),zoom:"10",addressdetails:"1"}),s=`${qS}?${n.toString()}`;for(let r=0;r<=gl;r++){let a;try{a=await fetch(s,{headers:{"Accept-Language":"en"}})}catch(o){if(console.warn(`[earth-clock] geocoder fetch failed (attempt ${r+1}):`,o),r<gl){await $u(vl);continue}return{status:"unavailable"}}if(a.ok){const o=await a.json().catch(()=>null);if(!o||!o.display_name)return{status:"no-name"};const l=o.address??{},c=l.city??l.town??l.village??l.hamlet??l.suburb??l.county??l.state??l.country??"",h=l.country??"";return{status:"ok",place:{short:c&&h&&c!==h?`${c}, ${h}`:c||h||o.display_name.split(",")[0],full:o.display_name,lat:parseFloat(o.lat),lon:parseFloat(o.lon)}}}if(a.status>=500&&r<gl){console.warn(`[earth-clock] geocoder ${a.status} (attempt ${r+1}), retrying in ${vl} ms`),await $u(vl);continue}return console.warn(`[earth-clock] geocoder gave up: HTTP ${a.status}`),{status:"unavailable"}}return{status:"unavailable"}}function $u(i){return new Promise(t=>setTimeout(t,i))}const ZS=Date.UTC(2e3,0,1,12,0,0),Sn=Math.PI/180,KS=6378.14;function JS(i){return(i.getTime()-ZS)/(864e5*36525)}function vi(i){const t=i-360*Math.floor(i/360);return t>=0?t:t+360}const fc=[[0,0,1,0,6288774,-20905355],[2,0,-1,0,1274027,-3699111],[2,0,0,0,658314,-2955968],[0,0,2,0,213618,-569925],[0,1,0,0,-185116,48888],[0,0,0,2,-114332,-3149],[2,0,-2,0,58793,246158],[2,-1,-1,0,57066,-152138],[2,0,1,0,53322,-170733],[2,-1,0,0,45758,-204586],[0,1,-1,0,-40923,-129620],[1,0,0,0,-34720,108743],[0,1,1,0,-30383,104755],[2,0,0,-2,15327,10321],[0,0,1,2,-12528,0],[0,0,1,-2,10980,79661],[4,0,-1,0,10675,-34782],[0,0,3,0,10034,-23210],[4,0,-2,0,8548,-21636],[2,1,-1,0,-7888,24208],[2,1,0,0,-6766,30824],[1,0,-1,0,-5163,-8379],[1,1,0,0,4987,-16675],[2,-1,1,0,4036,-12831],[2,0,2,0,3994,-10445],[4,0,0,0,3861,-11650],[2,0,-3,0,3665,14403],[0,1,-2,0,-2689,-7003],[2,0,-1,2,-2602,0],[2,-1,-2,0,2390,10056],[1,0,1,0,-2348,6322],[2,-2,0,0,2236,-9884],[0,1,2,0,-2120,5751],[0,2,0,0,-2069,0]],qu=fc.map(i=>Math.abs(i[1])),pc=[[0,0,0,1,5128122],[0,0,1,1,280602],[0,0,1,-1,277693],[2,0,0,-1,173237],[2,0,-1,1,55413],[2,0,-1,-1,46271],[2,0,0,1,32573],[0,0,2,1,17198],[2,0,1,-1,9266],[0,0,2,-1,8822],[2,-1,0,-1,8216],[2,0,-2,-1,4324],[2,0,1,1,4200],[2,1,0,-1,-3359],[2,-1,-1,1,2463],[2,-1,0,1,2211],[2,-1,-1,-1,2065],[0,1,-1,-1,-1870],[4,0,-1,-1,1828],[0,1,0,1,-1794],[0,0,0,3,-1749],[0,1,-1,1,-1565],[1,0,0,1,-1491],[0,1,1,1,-1475],[0,1,1,-1,-1410],[0,1,0,-1,-1344],[1,0,0,-1,-1335],[0,0,3,1,1107],[4,0,0,-1,1021],[4,0,-1,1,833]],Yu=pc.map(i=>Math.abs(i[1]));function ef(i){const t=JS(i),e=vi(218.3164477+481267.88123421*t-.0015786*t*t+t*t*t/538841-t*t*t*t/65194e3),n=vi(297.8501921+445267.1114034*t-.0018819*t*t+t*t*t/545868-t*t*t*t/113065e3),s=vi(357.5291092+35999.0502909*t-1536e-7*t*t+t*t*t/2449e4),r=vi(134.9633964+477198.8675055*t+.0087414*t*t+t*t*t/69699-t*t*t*t/14712e3),a=vi(93.272095+483202.0175233*t-.0036539*t*t-t*t*t/3526e3+t*t*t*t/86331e4),o=1-.002516*t-74e-7*t*t,l=o*o,c=n*Sn,h=s*Sn,u=r*Sn,d=a*Sn;let p=0,g=0;for(let B=0;B<fc.length;B++){const K=fc[B],st=K[0]*c+K[1]*h+K[2]*u+K[3]*d,ft=qu[B]===0?1:qu[B]===1?o:l;p+=K[4]*ft*Math.sin(st),g+=K[5]*ft*Math.cos(st)}let v=0;for(let B=0;B<pc.length;B++){const K=pc[B],st=K[0]*c+K[1]*h+K[2]*u+K[3]*d,ft=Yu[B]===0?1:Yu[B]===1?o:l;v+=K[4]*ft*Math.sin(st)}const m=vi(119.75+131.849*t)*Sn,f=vi(53.09+479264.29*t)*Sn,b=vi(313.45+481266.484*t)*Sn,x=e*Sn;p+=3958*Math.sin(m)+1962*Math.sin(x-d)+318*Math.sin(f),v+=-2235*Math.sin(x)+382*Math.sin(b)+175*Math.sin(m-d)+175*Math.sin(m+d)+127*Math.sin(x-u)-115*Math.sin(x+u);const y=(e+p/1e6)*Sn,D=v/1e6*Sn,A=(385000.56+g/1e3)/KS,P=(23.4392911-.0130042*t)*Sn,w=Math.cos(D),M=Math.cos(y)*w,C=Math.sin(y)*w,H=Math.sin(D),O=M,W=C*Math.cos(P)-H*Math.sin(P),$=C*Math.sin(P)+H*Math.cos(P),G=Math.atan2(W,O),Y=Math.asin($);return{ra:G,dec:Y,distance:A}}function nf(i,t=new T){const{ra:e,dec:n,distance:s}=ef(i);return t.set(s*Math.cos(n)*Math.cos(e),s*Math.sin(n),-s*Math.cos(n)*Math.sin(e))}const QS=696e3/6371,tM=149597870/6371,eM=1738/6371,ju=1.5;function sf(i){const t=new T,e=new T;qd(i,t),nf(i,e);const n=t.clone().negate(),s=e.dot(e),r=e.dot(n);if(r*r-(s-ju*ju)<0)return{hasShadow:!1,surfacePoint:new T,magnitude:0};if(-r<=0)return{hasShadow:!1,surfacePoint:new T,magnitude:0};const o=r*r-(s-1);let l;if(o>=0){const p=-r-Math.sqrt(o);l=e.clone().add(n.clone().multiplyScalar(p))}else l=e.clone().normalize();const c=l.distanceTo(e),h=eM/c,u=QS/tM,d=h/u;return{hasShadow:!0,surfacePoint:l,magnitude:d}}function nM(i,t,e=30,n=.95){const s=[],r=e*1e3;let a=0,o=null,l=0,c=0;for(let h=i.getTime();h<=t.getTime();h+=r){l++;const u=new Date(h),d=sf(u);d.hasShadow&&(c++,d.magnitude>a&&(a=d.magnitude,o=u),d.magnitude>=n&&s.push({time:u,worldPoint:d.surfacePoint,magnitude:d.magnitude}))}return console.log(`[earth-clock] eclipse path: ${s.length}/${l} samples passed mag≥${n} (shadow hit Earth in ${c}; max magnitude ${a.toFixed(4)}${o?` at ${o.toISOString()}`:""})`),s}const iM={20260812:{id:"20260812",source:"NASA GSFC — Espenak/Meeus SE2026Aug12T predictions",waypoints:[{utc:new Date("2026-08-12T17:01:00Z"),lat:78,lon:105,magnitude:1},{utc:new Date("2026-08-12T17:15:00Z"),lat:74,lon:35,magnitude:1.02},{utc:new Date("2026-08-12T17:30:00Z"),lat:70,lon:-8,magnitude:1.03},{utc:new Date("2026-08-12T17:46:42Z"),lat:64.83,lon:-25.25,magnitude:1.039},{utc:new Date("2026-08-12T18:00:00Z"),lat:58,lon:-22,magnitude:1.035},{utc:new Date("2026-08-12T18:15:00Z"),lat:50,lon:-15,magnitude:1.025},{utc:new Date("2026-08-12T18:30:00Z"),lat:42,lon:-3,magnitude:1.015},{utc:new Date("2026-08-12T18:45:00Z"),lat:33,lon:8,magnitude:1.005},{utc:new Date("2026-08-12T19:00:00Z"),lat:22,lon:25,magnitude:1}]},20270802:{id:"20270802",source:"NASA GSFC — Espenak/Meeus SE2027Aug02T predictions",waypoints:[{utc:new Date("2027-08-02T07:32:00Z"),lat:37,lon:-30,magnitude:1},{utc:new Date("2027-08-02T08:00:00Z"),lat:35,lon:-15,magnitude:1.03},{utc:new Date("2027-08-02T08:30:00Z"),lat:34,lon:-5,magnitude:1.05},{utc:new Date("2027-08-02T09:00:00Z"),lat:32,lon:5,magnitude:1.06},{utc:new Date("2027-08-02T09:30:00Z"),lat:28,lon:20,magnitude:1.07},{utc:new Date("2027-08-02T10:07:00Z"),lat:25.6,lon:33.5,magnitude:1.079},{utc:new Date("2027-08-02T10:30:00Z"),lat:22,lon:43,magnitude:1.07},{utc:new Date("2027-08-02T11:00:00Z"),lat:18,lon:50,magnitude:1.05},{utc:new Date("2027-08-02T11:30:00Z"),lat:12,lon:60,magnitude:1}]},20280722:{id:"20280722",source:"NASA GSFC — Espenak/Meeus SE2028Jul22T predictions (approximate)",waypoints:[{utc:new Date("2028-07-22T01:14:00Z"),lat:-52,lon:95,magnitude:1},{utc:new Date("2028-07-22T01:30:00Z"),lat:-45,lon:100,magnitude:1.02},{utc:new Date("2028-07-22T02:00:00Z"),lat:-32,lon:110,magnitude:1.04},{utc:new Date("2028-07-22T02:30:00Z"),lat:-22,lon:119,magnitude:1.05},{utc:new Date("2028-07-22T02:56:40Z"),lat:-15.7,lon:126.7,magnitude:1.056},{utc:new Date("2028-07-22T03:00:00Z"),lat:-16,lon:128,magnitude:1.056},{utc:new Date("2028-07-22T03:30:00Z"),lat:-22,lon:138,magnitude:1.05},{utc:new Date("2028-07-22T04:00:00Z"),lat:-33.9,lon:151.2,magnitude:1.04},{utc:new Date("2028-07-22T04:15:00Z"),lat:-41,lon:162,magnitude:1.03},{utc:new Date("2028-07-22T04:30:00Z"),lat:-47,lon:174,magnitude:1.01},{utc:new Date("2028-07-22T04:39:00Z"),lat:-49,lon:180,magnitude:1}]},20240408:{id:"20240408",source:"NASA GSFC — Espenak/Meeus SE2024Apr08T predictions",waypoints:[{utc:new Date("2024-04-08T16:39:00Z"),lat:8,lon:-149,magnitude:1},{utc:new Date("2024-04-08T17:30:00Z"),lat:15,lon:-129,magnitude:1.03},{utc:new Date("2024-04-08T18:00:00Z"),lat:19,lon:-116,magnitude:1.05},{utc:new Date("2024-04-08T18:10:00Z"),lat:23.2,lon:-106.4,magnitude:1.056},{utc:new Date("2024-04-08T18:17:18Z"),lat:25.3,lon:-104.1,magnitude:1.0566},{utc:new Date("2024-04-08T18:30:00Z"),lat:29,lon:-100.7,magnitude:1.056},{utc:new Date("2024-04-08T18:35:00Z"),lat:30.3,lon:-97.7,magnitude:1.055},{utc:new Date("2024-04-08T18:50:00Z"),lat:35,lon:-93.5,magnitude:1.054},{utc:new Date("2024-04-08T19:00:00Z"),lat:38,lon:-88.5,magnitude:1.052},{utc:new Date("2024-04-08T19:05:00Z"),lat:39.8,lon:-86.2,magnitude:1.05},{utc:new Date("2024-04-08T19:15:00Z"),lat:42.5,lon:-80,magnitude:1.045},{utc:new Date("2024-04-08T19:25:00Z"),lat:45.5,lon:-73,magnitude:1.04},{utc:new Date("2024-04-08T19:35:00Z"),lat:48,lon:-66,magnitude:1.025},{utc:new Date("2024-04-08T19:55:00Z"),lat:52,lon:-50,magnitude:1}]}};function sM(i){return iM[i]}function rM(i,t){const e=t.getTime(),n=i.waypoints;if(n.length===0||e<n[0].utc.getTime()||e>n[n.length-1].utc.getTime())return null;for(let s=1;s<n.length;s++){const r=n[s-1],a=n[s],o=r.utc.getTime(),l=a.utc.getTime();if(e<o||e>l)continue;const c=(e-o)/(l-o),h=r.lat+(a.lat-r.lat)*c;let u=a.lon-r.lon;u>180&&(u-=360),u<-180&&(u+=360);let d=r.lon+u*c;d>180&&(d-=360),d<-180&&(d+=360);const p=r.magnitude??1,g=a.magnitude??1,v=p+(g-p)*c;return{lat:h,lon:d,magnitude:v}}return null}const aM="wss://ws1.blitzortung.org/",oM=5e3;class lM{constructor(t={}){this.events=t}events;ws=null;reconnectTimer=null;stopped=!1;strikeCount=0;lastStrike=null;connectedSince=null;start(){this.ws||this.stopped||(this.stopped=!1,this.connect())}stop(){this.stopped=!0,this.reconnectTimer!==null&&(window.clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws&&(this.ws.close(),this.ws=null)}get stats(){return{count:this.strikeCount,last:this.lastStrike,connectedSince:this.connectedSince}}connect(){this.events.onStatus?.("connecting");try{this.ws=new WebSocket(aM)}catch(t){this.events.onStatus?.("error",t instanceof Error?t.message:String(t)),this.scheduleReconnect();return}this.ws.onopen=()=>{try{this.ws?.send(JSON.stringify({a:111}))}catch{}this.connectedSince=new Date,this.events.onStatus?.("connected")},this.ws.onmessage=t=>{if(typeof t.data!="string")return;let e;try{e=cM(t.data)}catch{return}let n;try{n=JSON.parse(e)}catch{return}const s=ka(n.lat),r=ka(n.lon);if(!Number.isFinite(s)||!Number.isFinite(r))return;const a=ka(n.time),o=Number.isFinite(a)?a>1e15?a/1e6:a>1e12?a/1e3:a:Date.now(),l={time:new Date(o),lat:s,lon:r,polarity:ka(n.pol)||0};this.strikeCount++,this.lastStrike=l.time,this.events.onStrike?.(l)},this.ws.onerror=()=>{this.events.onStatus?.("error","WebSocket error")},this.ws.onclose=()=>{this.connectedSince=null,this.ws=null,this.events.onStatus?.("disconnected"),this.stopped||this.scheduleReconnect()}}scheduleReconnect(){this.reconnectTimer!==null||this.stopped||(this.reconnectTimer=window.setTimeout(()=>{this.reconnectTimer=null,this.connect()},oM))}}function ka(i){if(typeof i=="number")return i;if(typeof i=="string"){const t=parseFloat(i);return Number.isFinite(t)?t:NaN}return NaN}function cM(i){if(i.length===0)return"";const t={},e=i.split("");let n=e[0],s=n,r=256;for(let a=1;a<e.length;a++){const o=e[a].charCodeAt(0);let l;o<256?l=e[a]:l=t[o]??n+n.charAt(0),s+=l,t[r++]=n+l.charAt(0),n=l}return s}function hM(i){const{width:t,height:e,u:n,v:s}=i,r=new Uint16Array(t*e*4),a=Sd.toHalfFloat,o=a(1);for(let c=0;c<t*e;c++)r[c*4]=a(n[c]),r[c*4+1]=a(s[c]),r[c*4+3]=o;const l=new fo(r,t,e,Be,rs);return l.wrapS=ri,l.wrapT=Ie,l.minFilter=_e,l.magFilter=_e,l.generateMipmaps=!1,l.needsUpdate=!0,l}const uM="https://gibs.earthdata.nasa.gov/wmts/epsg4326/best",dM={"250m":[[2,1],[3,2],[5,3],[10,5],[20,10],[40,20],[80,40],[160,80],[320,160]],"500m":[[2,1],[3,2],[5,3],[10,5],[20,10],[40,20],[80,40],[160,80]],"1km":[[2,1],[3,2],[5,3],[10,5],[20,10],[40,20],[80,40]],"2km":[[2,1],[3,2],[5,3],[10,5],[20,10],[40,20]]};async function fM(i){const{layer:t,date:e,tileMatrixSet:n,zoom:s,ext:r}=i,a=dM[n];if(!a)throw new Error(`GIBS loader: unknown TileMatrixSet "${n}" — add its matrix dims to MATRIX_DIMS`);if(s<0||s>=a.length)throw new Error(`GIBS loader: zoom ${s} out of range for TileMatrixSet "${n}" (max ${a.length-1})`);const[o,l]=a[s],c=512,h=e.toISOString().slice(0,10),u=document.createElement("canvas");u.width=o*c,u.height=l*c;const d=u.getContext("2d");if(!d)throw new Error("GIBS loader: cannot get 2D canvas context");const p=[];for(let D=0;D<l;D++)for(let R=0;R<o;R++){const A=`${uM}/${t}/default/${h}/${n}/${s}/${D}/${R}.${r}`;p.push(pM(A,d,R*c,D*c))}await Promise.all(p);const g=4,v=.3,m=32,f=16;let b=0;for(let D=0;D<f;D++)for(let R=0;R<m;R++){const A=Math.floor((R+.5)*u.width/m),P=Math.floor((D+.5)*u.height/f),w=d.getImageData(A,P,1,1).data;.299*w[0]+.587*w[1]+.114*w[2]<g&&b++}const x=b/(m*f);if(x>v)throw new Error(`GIBS mosaic incomplete: ${(x*100).toFixed(1)}% no-data pixels (date ${h})`);const y=new Ws(u);return y.wrapS=ri,y.wrapT=Ie,y.colorSpace=xe,y.minFilter=_e,y.magFilter=_e,y.generateMipmaps=!1,y.needsUpdate=!0,y}function pM(i,t,e,n){return new Promise((s,r)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>{t.drawImage(a,e,n),s()},a.onerror=()=>r(new Error(`GIBS tile failed to load: ${i}`)),a.src=i})}function mM(i=new Date){const t=new Date(i);return t.setUTCDate(t.getUTCDate()-2),t}async function gM(i){const t=i.startDate??mM(),e=i.maxDaysBack??7;let n=null;for(let s=0;s<=e;s++){const r=new Date(t);r.setUTCDate(r.getUTCDate()-s);try{return{texture:await fM({...i,date:r}),date:r}}catch(a){n=a instanceof Error?a:new Error(String(a)),i.onAttempt?.(r,n)}}throw n??new Error("GIBS fetch failed for every fallback date")}function vM(){const i=[],t=[55,60,65,70,75,80];for(const n of t)for(let s=-180;s<180;s+=.5)i.push(s,n,100),i.push(s,-n,90);const e=new Float32Array(i);return{forecastTime:new Date,data:e,pointCount:i.length/3,maxProbability:100}}function _M(){return{detections:[["California",36.5,-119.5,200],["Amazon",-5,-60,150],["Siberia",65,115,300],["Australia",-33,148,250],["Canada-BC",55,-123,180],["Greece",38.5,22,90],["Congo",-2,23,60],["Indonesia",-1.5,115,140]].flatMap(([e,n,s,r])=>{const a=[];for(let o=0;o<30;o++){const l=(Math.random()-.5)*2.5,c=(Math.random()-.5)*2.5;a.push({lat:n+l,lon:s+c,frp:r*(.4+.6*Math.random()),brightTi4:320+Math.random()*40,daynight:"D"})}return a}),fetchedAt:new Date}}function yM(){return{storms:[["DEBUG-AL01","Athena (test)","MH",115,18.5,-55],["DEBUG-AL02","Boreas (test)","HU",90,28,-78],["DEBUG-EP01","Calypso (test)","TS",55,15,-110],["DEBUG-WP01","Daiyu (test)","TY",105,16,132],["DEBUG-WP02","Erebus (test)","STY",145,13,152],["DEBUG-IO01","Fanindra (test)","TS",48,-12,65],["DEBUG-SH01","Galene (test)","MH",120,-18,95]].map(([t,e,n,s,r,a])=>({id:t,name:e,classification:n,intensityKt:s,pressureMb:Math.round(1010-s*.6),lat:r,lon:a,movementDir:280,movementSpeedKt:12,lastUpdate:new Date().toISOString()})),fetchedAt:new Date}}function xM(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");n.fillStyle="#103050",n.fillRect(0,0,1024,512),n.globalAlpha=.9;for(let r=0;r<400;r++){const a=(Math.random()-.5)*90,l=((Math.random()-.5)*360+180)/360*1024,c=(90-a)/180*512,h=8+Math.random()*30,u=n.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(255,255,255,0.95)"),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.beginPath(),n.arc(l,c,h,0,Math.PI*2),n.fill()}const s=new Ws(e);return s.wrapS=ri,s.wrapT=Ie,s.colorSpace=xe,s.minFilter=_e,s.magFilter=_e,s.generateMipmaps=!1,s.needsUpdate=!0,s}function SM(i){const t=new dn(45,i,.05,3e4);return t.position.set(0,0,3.2),t}function MM(i,t){const e=new Gd(i,t);return e.enableDamping=!0,e.dampingFactor=.08,e.rotateSpeed=.5,e.minDistance=1.4,e.maxDistance=25e3,e.enablePan=!1,e.autoRotate=!1,e.autoRotateSpeed=.4,e}const bM=document.getElementById("app"),We=new k_({antialias:!0});We.setPixelRatio(window.devicePixelRatio);We.setSize(window.innerWidth,window.innerHeight);bM.appendChild(We.domElement);const me=new Ka,rf=new Q_;me.add(rf.mesh);let Zu=0;async function Oc(i){const t=++Zu,e=await ty(i);if(!e)return;if(t!==Zu){e.dispose();return}const n=me.background;n!==e&&(me.background=e,rf.mesh.visible=!1,n?.dispose?.())}Oc("lo");const Vn=new J_;me.add(Vn.mesh);const vo=new iy;me.add(vo.mesh);const Lr=new ry;me.add(Lr.mesh);const rr=new gy;me.add(rr.mesh);const Li=new xy;Li.setResolution(window.innerWidth,window.innerHeight);me.add(Li.mesh);const Ii=new Zi;me.add(Ii.mesh);const Xe=new Mn;Xe.setResolution(window.innerWidth,window.innerHeight);me.add(Xe.mesh);const Ge=new Uy(1.003);me.add(Ge.mesh);const oi=new Bs;me.add(oi.mesh);const Ui=new Ki;me.add(Ui.mesh);const Ri=new Jn;me.add(Ri.mesh);const Ni=new Ji;me.add(Ni.mesh);const ls=new hn;me.add(ls.mesh);const cs=new no;me.add(cs.mesh);const On=new Cr;me.add(On.mesh);const ro=23.44*Math.PI/180,Ku=new T(0,0,1);function af(i,t,e){const n=Math.cos(-ro),s=Math.sin(-ro),r=i.x*n-i.y*s,a=i.x*s+i.y*n,o=i.z,l=er(t),c=Math.cos(-l),h=Math.sin(-l);return e.x=r*c+o*h,e.y=a,e.z=-r*h+o*c,e}const Xr=new Xy(1.006);me.add(Xr.mesh);const xi=new Pr;me.add(xi.mesh);const pe=new Vd;pe.resize(window.innerWidth,window.innerHeight);const ao=new mx;Vn.attachToEarth(ao.meshGlobe);pe.scene.add(ao.meshFlat);pe.scene.add(rr.flatMesh);pe.scene.add(Li.flatMesh);pe.scene.add(Ii.flatMesh);pe.scene.add(Xe.flatMesh);pe.scene.add(Ui.flatMesh);pe.scene.add(Ri.flatMesh);pe.scene.add(Ni.flatMesh);pe.scene.add(ls.flatMesh);pe.scene.add(oi.flatMesh);pe.scene.add(cs.flatMesh);pe.scene.add(xi.flatMesh);const $r=new fy(We,65536),Ci=new Os($r.flatMesh);me.add(Ci.mesh);pe.scene.add(Ci.flatMesh);const kc=new X_(16777215,1.4);kc.position.set(50,0,0);me.add(kc);me.add(new $_(1054756,.35));const Bc=new Ar;me.add(Bc.mesh);const Bn=SM(window.innerWidth/window.innerHeight);{const i=20*Math.PI/180,e=er(new Date)+i;Bn.position.set(Math.cos(e)*3.2,.3,-Math.sin(e)*3.2)}const Hs=MM(Bn,We.domElement);window.addEventListener("resize",()=>{Bn.aspect=window.innerWidth/window.innerHeight,Bn.updateProjectionMatrix(),We.setSize(window.innerWidth,window.innerHeight),Ci.resize(window.innerWidth,window.innerHeight),pe.resize(window.innerWidth,window.innerHeight),Li.setResolution(window.innerWidth,window.innerHeight),Xe.setResolution(window.innerWidth,window.innerHeight)});const cn=new T,Qn=new T,_l=new T,Ju=new T,Ir={lat:0,lon:0},Ur={lat:0,lon:0};let ke=Date.now(),Qu=performance.now(),td=null;window.__orrery={particles:$r,globe:Vn,atmosphere:vo,trails:Ci,coastlines:rr,plates:Li,volcanoes:Ii,clouds:Ge,aurora:oi,fires:Ui,earthquakes:Ri,hurricanes:Ni,hurricaneTracks:cs,lightning:ls,overlay:Xr,eclipse:On,sun:Bc,useTestData:RM,useLiveData:CM,findMoon:hf,jumpToEclipse:i=>{const t=i?so.find(e=>e.id===i):Xs??null;if(!t){console.warn(`[earth-clock] jumpToEclipse: ${i?`id "${i}" not found`:"no upcoming eclipse"}; available ids: ${so.map(e=>e.id).join(", ")}`);return}cf(t)}};const wM=["wind","fires","lightning","hurricanes","storm-tracks","aurora","kp","viirs","gfs-clouds","mslp","temp","rh","tpw","tcw","coastlines","day map","night map","earthquakes","plates","volcanoes","moon","eclipse"],kt=new Cx;kt.setOrder(wM);kt.report("day map",{source:"Solar System Scope · 2k_earth_daymap.jpg",bundled:!0});kt.report("night map",{source:"Solar System Scope · 2k_earth_nightmap.jpg",bundled:!0});kt.report("moon",{source:"NASA / USGS · moon_1024.jpg",bundled:!0});const Nt=new Rx,EM=[["wind","NOAA GFS · surface wind","fetching surface wind…"],["fires","NASA FIRMS · VIIRS S-NPP NRT","fetching FIRMS detections…"],["earthquakes","USGS · earthquake feed (past week)","fetching earthquake feed…"],["lightning","Blitzortung · community WebSocket","connecting to Blitzortung…"],["hurricanes","NHC · CurrentStorms.json","fetching active storms…"],["aurora","NOAA SWPC · Ovation aurora forecast","fetching SWPC Ovation…"],["kp","NOAA SWPC · planetary K-index","fetching SWPC K-index…"],["viirs","NASA GIBS · VIIRS NOAA-20 True Color","fetching VIIRS mosaic…"],["gfs-clouds","NOAA GFS · cloud cover","fetching GFS cloud cover…"],["mslp","NOAA GFS · MSLP","fetching MSLP…"],["temp","NOAA GFS · 2 m temperature","fetching temperature…"],["rh","NOAA GFS · 2 m relative humidity","fetching RH…"],["tpw","NOAA GFS · total precipitable water","fetching TPW…"],["tcw","NOAA GFS · total cloud water","fetching TCW…"],["coastlines","Natural Earth · 50 m physical","fetching coastlines…"],["plates","PB2002 (Bird 2003) · tectonicplates","fetching plate boundaries…"],["volcanoes","Smithsonian GVP · Volcanoes of the World","fetching volcano list…"]];for(const[i,t,e]of EM)kt.report(i,{source:t,detail:e});const of=new Dx(document.body,kt);of.onClose(()=>{zt.setLayer("data",!1)});const Br=new Bx(document.body,{onSnapToLive:()=>{ke=Date.now()},onClose:()=>{zt.setLayer("clock",!1)}}),sn=new Yx(document.body);let yl=1;const be=new Kx(document.body,{onScrubTo:i=>{ke=i,window.__orreryTimeWarp!==0&&(yl=window.__orreryTimeWarp??1,window.__orreryTimeWarp=0)},onStep:i=>{ke+=i},onPlayPause:()=>{const i=window.__orreryTimeWarp??1;i===0?window.__orreryTimeWarp=yl||1:(yl=i,window.__orreryTimeWarp=0)},onClose:()=>lf()});function lf(){qr(null),fn=null,zt.setLayer("eclipse",!1),ke=Date.now(),window.__orreryTimeWarp=1}const Ln={lat:0,lon:0,visible:!1},nr=new lS(document.body,{onJumpSolar:i=>{cf(i),window.matchMedia("(max-width: 600px)").matches&&setTimeout(()=>nr.setVisible(!1),0)},onJumpLunar:i=>{AM(i),window.matchMedia("(max-width: 600px)").matches&&setTimeout(()=>nr.setVisible(!1),0)},onTabChange:i=>{i==="lunar"?qr(null):fn=null,be.setMode(i)},onClose:()=>lf()}),zt=new Mx(document.body,{globe:Vn,atmosphere:vo,moon:Lr,coastlines:rr,plates:Li,volcanoes:Ii,timezoneLayer:Xe,clouds:Ge,aurora:oi,fires:Ui,earthquakes:Ri,hurricanes:Ni,hurricaneTracks:cs,lightning:ls,overlay:Xr,radiusVectors:xi,eclipse:On,flatMap:pe,trails:Ci},{data:of,clock:Br,location:sn,eclipse:nr});zt.onFindMoon(()=>hf());zt.onSkyboxHiResChange(i=>{Oc(i?"hi":"lo")});zt.isSkyboxHiRes()&&Oc("hi");sn.onClear(()=>{Xe.setReferenceZone(null),zt.setLayer("location",!1)});sn.onGeolocate((i,t)=>{ar(i,t,"geolocation")});sn.onSunBeam(()=>ar(Ir.lat,Ir.lon,"sun"));sn.onMoonBeam(()=>ar(Ur.lat,Ur.lon,"moon"));function ar(i,t,e){ao.setLocation(i,t),ao.setVisible(!0),sn.setLocation(i,t,e),Ln.lat=i,Ln.lon=t,Ln.visible=!0,Xe.loadForLookup();const n=Xe.findZoneAt(i,t);sn.setPinnedZone(n.ianaName||null,n.utcOffset),Xe.setReferenceZone(n.ianaName||null),be.setPlaceName(`${i.toFixed(2)}°, ${t.toFixed(2)}°`),console.log(`[earth-clock] pinned via ${e}: ${i.toFixed(2)}, ${t.toFixed(2)}`),jS(i,t).then(s=>{switch(s.status){case"ok":sn.setPlaceName(s.place.short),be.setPlaceName(s.place.short);break;case"no-name":sn.setPlaceName(null);break;case"unavailable":sn.setPlaceName("geocoder unavailable");break}})}const oo=new Y_,Si=new xt,TM=5;let br=null;We.domElement.addEventListener("pointerdown",i=>{br={x:i.clientX,y:i.clientY}});We.domElement.addEventListener("click",i=>{if(!zt.isLocationActive())return;if(br){const s=i.clientX-br.x,r=i.clientY-br.y;if(br=null,Math.hypot(s,r)>TM)return}const t=We.domElement.getBoundingClientRect();Si.x=(i.clientX-t.left)/t.width*2-1,Si.y=-((i.clientY-t.top)/t.height)*2+1;let e,n;if(zt.isMapMode()){const s=new T(Si.x,Si.y,0).unproject(pe.camera);if(Math.abs(s.y)>.5)return;n=Vd.wrapWorldX(s.x)*180,e=s.y*180}else{oo.setFromCamera(Si,Bn);const s=oo.intersectObject(Vn.earthMesh,!1);if(!s.length)return;({lat:e,lon:n}=Vn.worldToLatLon(s[0].point))}ar(e,n,"click")});We.domElement.addEventListener("dblclick",i=>{if(zt.isMapMode())return;const t=We.domElement.getBoundingClientRect();Si.x=(i.clientX-t.left)/t.width*2-1,Si.y=-((i.clientY-t.top)/t.height)*2+1,oo.setFromCamera(Si,Bn);const e=oo.intersectObject(Vn.earthMesh,!1);if(!e.length)return;const{lat:n,lon:s}=Vn.worldToLatLon(e[0].point);ar(n,s,"click"),zt.setLayer("location",!0)});function cf(i){if(qr(i),fn=null,be.setMode("solar"),ke=i.startUtc.getTime()-6e4,window.__orreryTimeWarp=60,zt.setLayer("eclipse",!0),zt.setLayer("clock",!0),Br.setControlsExpanded(!0),!Ln.visible&&kn){const t=kn.waypoints.reduce((e,n)=>(n.magnitude??0)>(e.magnitude??0)?n:e,kn.waypoints[0]);ar(t.lat,t.lon,"click")}console.log(`[earth-clock] jumped to T-1m of ${i.name} (peak ${i.peakUtc.toISOString()}). Set window.__orreryTimeWarp = 1 to stop the warp.`)}function AM(i){fn=i,qr(null),nr.setSelected("lunar",i.id),be.setMode("lunar"),be.setEclipseWindow(i.startUtc,i.endUtc,i.peakUtc),ke=i.startUtc.getTime()-6e4,window.__orreryTimeWarp=60,zt.setLayer("eclipse",!0),zt.setLayer("clock",!0),Br.setControlsExpanded(!0),console.log(`[earth-clock] jumped to T-1m of ${i.name} (peak ${i.peakUtc.toISOString()}). Set window.__orreryTimeWarp = 1 to stop the warp.`)}function hf(){if(Qn.lengthSq()<.01){console.warn("[orrery] findMoon: moon position not yet computed");return}const i=Math.min(Qn.length()*1.5,199);Bn.position.copy(Qn).normalize().multiplyScalar(i),Hs.target.set(0,0,0),Hs.update(),console.log(`[orrery] find moon: camera repositioned to ${i.toFixed(1)} r along moon direction`)}let $a=null;function RM(){console.log("[orrery] debug: loading fixture data"),$a=zt.activeCloudSource();const i=vM(),t=_M(),e=yM();oi.update(i),Ui.update(t),Ni.update(e);const n=xM();Ge.setTexture(n),pe.setCloudTexture(n),zt.setLayer("cloudsViirs",!0),zt.setLayer("aurora",!0),zt.setLayer("fires",!0),zt.setLayer("hurricanes",!0),Nt.info("clouds","fixture: procedural noise (1024×512)"),Nt.info("aurora",`fixture: ${i.pointCount} pts in 6 bands ±55°…±80°`),Nt.info("fires",`fixture: ${t.detections.length} pts across 8 known fire zones`),Nt.info("hurricanes",`fixture: ${e.storms.length} storms in every basin`)}function CM(){console.log("[orrery] debug: restoring live data"),vf(),zc(),Hc(),Gc(),Vc(),$a&&$a!==zt.activeCloudSource()&&zt.setLayer($a,!0),zr()}const lo=new uS;lo.getWindGrid(new Date).then(i=>{$r.setWindTexture(hM(i)),Nt.info("wind",`${i.width}×${i.height}, valid ${i.validTime.toISOString().slice(0,16)}Z`),kt.report("wind",{source:"NOAA GFS surface (via earth-clock weather-service)",fetched:new Date,detail:`valid ${i.validTime.toISOString().slice(0,13)}Z`,refreshSeconds:6*3600})}).catch(i=>{Nt.warn("wind",`load failed: ${i.message??i}`),kt.report("wind",{source:"NOAA GFS surface",error:String(i.message??i)})});const mc={mslp:{type:"mean_sea_level_pressure",registryKey:"mslp",sourceLabel:"NOAA GFS · MSLP",vmin:96e3,vmax:104e3,palette:"pressure",label:"Atmospheric pressure",format:i=>`${Math.round(i/100)} hPa`},temp:{type:"temp",registryKey:"temp",sourceLabel:"NOAA GFS · 2 m temperature",vmin:240,vmax:310,palette:"temperature",label:"Temperature at 2 m",format:i=>`${Math.round(i-273.15)} °C`},rh:{type:"relative_humidity",registryKey:"rh",sourceLabel:"NOAA GFS · 2 m relative humidity",vmin:0,vmax:100,palette:"humidity",label:"Relative humidity at 2 m",format:i=>`${Math.round(i)}%`},tpw:{type:"total_precipitable_water",registryKey:"tpw",sourceLabel:"NOAA GFS · total precipitable water",vmin:0,vmax:70,palette:"water",label:"Total precipitable water",format:i=>`${Math.round(i)} mm`},tcw:{type:"total_cloud_water",registryKey:"tcw",sourceLabel:"NOAA GFS · total cloud water",vmin:0,vmax:2,palette:"cloud",label:"Total cloud water",format:i=>`${i.toFixed(1)} kg/m²`}},uf={};Object.keys(mc).forEach(i=>{const t=mc[i];lo.getScalar(t.type,new Date).then(e=>{uf[i]=e;const n=e.validTime.toISOString().slice(0,13);Nt.info(t.registryKey,`${e.width}×${e.height}, valid ${n}Z`),kt.report(t.registryKey,{source:t.sourceLabel,fetched:new Date,detail:`valid ${n}Z`,refreshSeconds:6*3600}),zt.activeOverlay()===i&&df()}).catch(e=>{Nt.warn(t.registryKey,`load failed: ${e.message??e} — run \`npm run weather-service\` from the repo root`),kt.report(t.registryKey,{source:t.sourceLabel,error:String(e.message??e)})})});const gc=new tS(document.body);function df(){const i=zt.activeOverlay();if(!i)return;const t=uf[i],e=mc[i];!t||!e||(Xr.setData(t,e.vmin,e.vmax,e.palette),gc.update({label:e.label,palette:e.palette,displayMin:e.format(e.vmin),displayMid:e.format((e.vmin+e.vmax)/2),displayMax:e.format(e.vmax)}),gc.setVisible(!0))}zt.onOverlayChange(i=>{i?df():gc.setVisible(!1)});let je=null;async function PM(){Nt.pending("gfs-clouds","fetching GFS cloud cover…");try{const i=await lo.getScalar("total_cloud_cover",new Date),t=i.validTime.toISOString().slice(0,13);je={grid:i,vmin:0,vmax:100,sourceLabel:"NOAA GFS · total cloud cover (TCDC)",detail:`TCDC valid ${t}Z`},Nt.info("gfs-clouds",`${i.width}×${i.height}, TCDC valid ${t}Z`),kt.report("gfs-clouds",{source:je.sourceLabel,fetched:new Date,detail:je.detail,refreshSeconds:6*3600}),zt.activeCloudSource()==="cloudsGfs"&&zr();return}catch(i){Nt.pending("gfs-clouds",`TCDC unavailable (${i.message?.split(":")[0]??"error"}); trying TCW fallback…`)}try{const i=await lo.getScalar("total_cloud_water",new Date),t=i.validTime.toISOString().slice(0,13);je={grid:i,vmin:0,vmax:1,sourceLabel:"NOAA GFS · total cloud water (TCW)",detail:`TCW fallback, valid ${t}Z — add :TCDC: pattern + restart weather-service for native cover`},Nt.info("gfs-clouds",`${i.width}×${i.height}, TCW fallback valid ${t}Z`),kt.report("gfs-clouds",{source:je.sourceLabel,fetched:new Date,detail:je.detail,refreshSeconds:6*3600}),zt.activeCloudSource()==="cloudsGfs"&&zr()}catch(i){Nt.warn("gfs-clouds",`both TCDC and TCW failed: ${i.message??i} — run \`npm run weather-service\` from the repo root`),kt.report("gfs-clouds",{source:"NOAA GFS · cloud cover",error:String(i.message??i)})}}PM();let ns=null,ed=!1;function zr(){const i=zt.activeCloudSource();if(!i){Ge.mesh.visible=!1;return}Ge.mesh.visible=!0,i==="cloudsViirs"?ns?Ge.setTexture(ns):Ge.mesh.visible=!1:i==="cloudsGfs"?je?Ge.setScalarField(je.grid,je.vmin,je.vmax):Ge.mesh.visible=!1:i==="cloudsGoes"&&(ed||(ed=!0,console.warn("[orrery] GOES geostationary composite not yet implemented — falling back to whichever source has data")),ns?Ge.setTexture(ns):je?Ge.setScalarField(je.grid,je.vmin,je.vmax):Ge.mesh.visible=!1)}zt.onCloudsChange(()=>zr());fetch("/data/earth-topo.json").then(i=>i.ok?i.json():Promise.reject(new Error(`HTTP ${i.status}`))).then(i=>{rr.loadFromTopology(i,"coastline_50m"),Nt.info("coastlines","Natural Earth 50 m loaded"),kt.report("coastlines",{source:"Natural Earth · 50 m physical",bundled:!0})}).catch(i=>{Nt.warn("coastlines",`load failed: ${i.message??i}`),kt.report("coastlines",{source:"Natural Earth 50 m",error:String(i.message??i)})});fetch("/data/plates.json").then(i=>i.ok?i.json():Promise.reject(new Error(`HTTP ${i.status}`))).then(i=>{Li.load(i),Nt.info("plates",`PB2002 loaded (${i.lines.length} boundary lines)`),kt.report("plates",{source:"PB2002 (Bird 2003) · tectonicplates",bundled:!0})}).catch(i=>{Nt.warn("plates",`load failed: ${i.message??i}`),kt.report("plates",{source:"PB2002 tectonic plates",error:String(i.message??i)})});let qa=[],ff=[];function pf(){if(qa.length===0)return;const i=SS(ff,qa);Ii.setErupting(i),Nt.info("volcanoes",`${i.size} erupting (FIRMS cross-ref, ${qa.length} known volcanoes)`)}fetch("/data/volcanoes.json").then(i=>i.ok?i.json():Promise.reject(new Error(`HTTP ${i.status}`))).then(i=>{Ii.load(i),qa=i.volcanoes,pf(),Nt.info("volcanoes",`GVP loaded (${i.volcanoes.length} volcanoes)`),kt.report("volcanoes",{source:"Smithsonian GVP · Volcanoes of the World",bundled:!0})}).catch(i=>{Nt.warn("volcanoes",`load failed: ${i.message??i}`),kt.report("volcanoes",{source:"Smithsonian GVP",error:String(i.message??i)})});function zc(){fS().then(i=>{oi.update(i);const t=i.forecastTime.toISOString().slice(11,16),e=i.maxProbability<5?"very quiet":i.maxProbability<15?"quiet":i.maxProbability<30?"moderate":i.maxProbability<50?"active":i.maxProbability<75?"storm":"severe";Nt.info("aurora",`${i.pointCount} pts, fc ${t}Z, max ${i.maxProbability}% (${e})`),kt.report("aurora",{source:"NOAA SWPC · Ovation aurora forecast",fetched:new Date,detail:`fc ${t}Z · peak ${i.maxProbability}% (${e})`,refreshSeconds:300})}).catch(i=>{Nt.warn("aurora",`load failed: ${i.message??i}`),kt.report("aurora",{source:"NOAA SWPC Ovation",error:String(i.message??i)})})}zc();setInterval(zc,300*1e3);function mf(){mS().then(i=>{const t=gS(i.kp),e=vS(i.kp);Nt.info("kp",`Kp ${i.kp.toFixed(1)} (${t}), aurora visible above ~${e}° mag-lat`),kt.report("kp",{source:"NOAA SWPC · planetary K-index",fetched:new Date,detail:`Kp ${i.kp.toFixed(1)} (${t}) · visible above ~${e}°`,refreshSeconds:60})}).catch(i=>{Nt.warn("kp",`load failed: ${i.message??i}`),kt.report("kp",{source:"NOAA SWPC planetary K-index",error:String(i.message??i)})})}mf();setInterval(mf,300*1e3);function Hc(){yS().then(i=>{Ui.update(i),ff=i.detections,pf(),Nt.info("fires",`${i.detections.length} detections`),kt.report("fires",{source:"NASA FIRMS · VIIRS S-NPP NRT",fetched:new Date,detail:`${i.detections.length} detections · last 24 h`,refreshSeconds:3600})}).catch(i=>{Nt.warn("fires",`load failed: ${i.message??i}`),kt.report("fires",{source:"NASA FIRMS VIIRS",error:String(i.message??i)})})}Hc();setInterval(Hc,3600*1e3);function Gc(){MS().then(i=>{Ri.update(i),Nt.info("earthquakes",`${i.events.length} events`),kt.report("earthquakes",{source:"USGS · earthquake feed (past week)",fetched:new Date,detail:`${i.events.length} events · last 7 days`,refreshSeconds:900})}).catch(i=>{Nt.warn("earthquakes",`load failed: ${i.message??i}`),kt.report("earthquakes",{source:"USGS earthquake feed",error:String(i.message??i)})})}Gc();setInterval(Gc,900*1e3);function Vc(){wS().then(i=>{if(Ni.update(i),i.storms.length){const t=i.storms.map(e=>`${e.name||e.id} ${e.intensityKt}kt`).join(", ");Nt.info("hurricanes",`${i.storms.length} active: ${t}`),kt.report("hurricanes",{source:"NHC · CurrentStorms.json",fetched:new Date,detail:`${i.storms.length} active`,refreshSeconds:900}),IM(i.storms)}else Nt.info("hurricanes","no active storms (off-season)"),kt.report("hurricanes",{source:"NHC · CurrentStorms.json",fetched:new Date,detail:"no active storms (off-season)",refreshSeconds:900}),cs.update([])}).catch(i=>{Nt.warn("hurricanes",`load failed: ${i.message??i}`),kt.report("hurricanes",{source:"NHC CurrentStorms.json",error:String(i.message??i)})})}Vc();setInterval(Vc,900*1e3);function gf(i,t,e=new T){const n=i*Math.PI/180,s=t*Math.PI/180,r=Math.cos(n);return e.set(r*Math.cos(s),Math.sin(n),-r*Math.sin(s))}let Xs=null,kn,fn=null;const DM=24*3600*1e3,LM=22*3600*1e3;let Wi=!0,nd=!1,xl=null;const Is=new T;function qr(i){if(Xs=i,kn=i?sM(i.id):void 0,nr.setSelected("solar",i?.id??null),i&&be.setEclipseWindow(i.startUtc,i.endUtc,i.peakUtc),!i){On.setPath([]),kt.report("eclipse",{source:"NASA eclipse catalog · bundled",detail:"no upcoming eclipse in catalog",bundled:!0});return}let t,e;kn?(t=kn.waypoints.map(r=>gf(r.lat,r.lon)),e="NASA centerline"):(t=nM(i.startUtc,i.endUtc,30).map(a=>{const o=new T;return af(a.worldPoint,a.time,o),o}),e="astronomical fallback (Schlyter)"),On.setPath(t);const n=i.peakUtc.toISOString().slice(0,16)+"Z";console.log(`[earth-clock] eclipse loaded: ${i.name} · peak ${n} · ${t.length} path points · source: ${e} · (${i.region})`);const s=kn?"NASA centerline · bundled":"NASA eclipse catalog · bundled";t.length===0?kt.report("eclipse",{source:s,error:`${i.name} · no path samples (runtime lunar model below threshold)`}):kt.report("eclipse",{source:s,fetched:new Date,detail:`${i.name} · ${n}`,bundled:!0})}qr(rS(new Date));const Us=new T;let Ba=!1;async function IM(i){const t=await Promise.all(i.map(async n=>{const s={stormId:n.id},r=async c=>{if(c)try{return await VS($S(c))}catch(h){Nt.warn(`tracks:${n.id}`,`KMZ failed: ${h.message}`);return}},[a,o,l]=await Promise.all([r(n.bestTrackKmz),r(n.forecastTrackKmz),r(n.forecastConeKmz)]);return a&&(s.bestTrack=a),o&&(s.forecastTrack=o),l&&(s.forecastCone=l),s}));cs.update(t);const e=t.reduce((n,s)=>n+(s.bestTrack?.length??0)+(s.forecastTrack?.length??0)+(s.forecastCone?.length??0),0);e>0&&(Nt.info("hurricane-tracks",`${t.length} storms, ${e} geometry parts`),kt.report("storm-tracks",{source:"NHC · per-storm KMZ (track + cone)",fetched:new Date,detail:`${t.length} storms · ${e} geometry parts`,refreshSeconds:900}))}const wr=[],Nr=new lM({onStrike:i=>{ls.addStrike(i,performance.now()/1e3);const t=performance.now();for(wr.push(t);wr.length&&t-wr[0]>6e4;)wr.shift()},onStatus:(i,t)=>{const e=Nr.stats;i==="connected"?(Nt.info("lightning","Blitzortung connected"),kt.report("lightning",{source:"Blitzortung · community WebSocket",fetched:new Date,detail:"connected · waiting for strikes",refreshSeconds:60})):i==="disconnected"?(Nt.warn("lightning","disconnected — reconnecting in 5 s"),kt.report("lightning",{source:"Blitzortung · community WebSocket",error:`disconnected (received ${e.count} strikes)`})):i==="error"?(Nt.warn("lightning",t??"WebSocket error"),kt.report("lightning",{source:"Blitzortung · community WebSocket",error:t??"WebSocket error"})):Nt.pending("lightning","connecting to Blitzortung…")}});Nr.start();setInterval(()=>{if(!Nr.stats.connectedSince)return;const i=wr.length;kt.report("lightning",{source:"Blitzortung · community WebSocket",fetched:Nr.stats.last??new Date,detail:`${i} strikes/min · ${Nr.stats.count} total`,refreshSeconds:60})},1e3);function vf(){Nt.pending("clouds","fetching VIIRS mosaic…"),gM({layer:"VIIRS_NOAA20_CorrectedReflectance_TrueColor",tileMatrixSet:"250m",zoom:3,ext:"jpg",onAttempt:(i,t)=>{const e=i.toISOString().slice(0,10);Nt.warn("clouds",`${e} incomplete (${t.message.split(":").slice(-1)[0].trim()}); trying older`)}}).then(({texture:i,date:t})=>{const e=t.toISOString().slice(0,10);ns&&ns.dispose(),ns=i,zt.activeCloudSource()==="cloudsViirs"&&zr(),pe.setCloudTexture(i),Nt.info("viirs",`VIIRS NOAA-20 ${e}`),kt.report("viirs",{source:"NASA GIBS · VIIRS NOAA-20 True Color",fetched:new Date,detail:e,refreshSeconds:24*3600})}).catch(i=>{Nt.warn("viirs",`load failed: ${i.message??i}`),kt.report("viirs",{source:"NASA GIBS VIIRS NOAA-20",error:String(i.message??i)})})}vf();function UM(){const i=new Date(ke);qd(i,cn),nf(i,Qn),cn.applyAxisAngle(Ku,ro),Qn.applyAxisAngle(Ku,ro),kc.position.copy(cn).multiplyScalar(50),Bc.setSunDirection(cn),Vn.setSunDirection(cn),Vn.setRotationY(er(i)),vo.setSunDirection(cn);const t=Xd(i),e=ef(i),n=180/Math.PI,s=$d(i)*n,r=t.dec*n,a=id(t.ra*n-s),o=e.dec*n,l=id(e.ra*n-s);pe.setSubSolar(r,a),Lr.setPosition(Qn),Ir.lat=r,Ir.lon=a,Ur.lat=o,Ur.lon=l,sn.setBeamCoords(Ir,Ur),xi.setSunDirection(cn),xi.setMoonPosition(Qn),xi.setSubSolar(r,a),xi.setSubLunar(o,l),_l.copy(Qn).normalize();const h=(1-Hr.clamp(cn.dot(_l),-1,1))*.5;Ju.crossVectors(cn,_l),xi.setMoonPhase(h,Ju.y>0);const u=er(i);if($r.setRotationY(u),Ci.setRotationY(u),rr.setRotationY(u),Li.setRotationY(u),Ii.setRotationY(u),Xe.setRotationY(u),Xe.update(ke),Ge.setRotationY(u),Ge.setSunDirection(cn),Ui.setRotationY(u),Ri.setRotationY(u),Ni.setRotationY(u),cs.setRotationY(u),ls.setRotationY(u),Xr.setRotationY(u),On.setRotationY(u),Xs){const m=ke>=Xs.startUtc.getTime()-864e5&&ke<=Xs.endUtc.getTime()+864e5;On.setPathVisible(m)}let d=null,p=null,g=1;if(kn){const v=rM(kn,i);v&&(d=v.lat,p=v.lon,g=v.magnitude)}else{const v=sf(i);v.hasShadow&&(af(v.surfacePoint,i,Us),d=Math.asin(Us.y)*180/Math.PI,p=Math.atan2(-Us.z,Us.x)*180/Math.PI,g=v.magnitude)}if(d!==null&&p!==null?(gf(d,p,Us),On.setLiveShadow(Us),Ba||(Ba=!0,console.log(`[earth-clock] eclipse live shadow ON at ${i.toISOString()} · magnitude ${g.toFixed(3)} · geographic (${d.toFixed(2)}, ${p.toFixed(2)}) · source: ${kn?"NASA centerline":"astronomical"}`))):(On.setLiveShadow(null),Ba&&(Ba=!1,console.log(`[earth-clock] eclipse live shadow OFF at ${i.toISOString()}`))),oi.setRotationY(u),oi.setSunDirection(cn),fn){const v=oS(fn,i);Lr.setEclipseShadow(v,fn.umbralMagnitude),be.setLunarFraction(v);const m=fn.peakUtc.getTime(),f=fn.umbralMagnitude,b=v>0?`magnitude ${f.toFixed(3)}`:"—";let x;v<=0?x=fn.type:v>=.98?x=f>1?"totality":"deepest":ke<m?x=`approaching · ${(v*100).toFixed(0)}%`:x=`receding · ${(v*100).toFixed(0)}%`,be.setLunarReadout(b,x)}else Lr.setEclipseShadow(0),be.setLunarFraction(0)}function id(i){return((i+180)%360+360)%360-180}function _f(i){const t=i-Qu;Qu=i;const e=window.__orreryTimeWarp??1;ke+=t*e;const n=new Date(ke);if(UM(),Br.setTime(n),Xe.dataLoaded!==nd&&(nd=Xe.dataLoaded,Ln.visible)){const u=Xe.findZoneAt(Ln.lat,Ln.lon);sn.setPinnedZone(u.ianaName||null,u.utcOffset),Xe.setReferenceZone(u.ianaName||null)}sn.setNow(n);const s=Math.abs(ke-Date.now());Wi&&s>DM&&(Wi=!1),!Wi&&s<LM&&(Wi=!0),zt.setLiveFreshnessOk(Wi),Br.setLiveDataStale(!Wi,Wi?null:n);const r=Xs!==null&&On.mesh.visible;if(nr.getActiveTab()==="lunar")be.setVisible(fn!==null),be.setScrubControlsVisible(fn!==null);else if(Ln.visible){const u=sS(Ln.lat,Ln.lon,n,cn,Qn),d=be.update(u);be.setVisible(d||r),be.setScrubControlsVisible(r)}else be.setVisible(!1),be.setScrubControlsVisible(!1);be.setSimulatedTime(ke),be.setPlaying((window.__orreryTimeWarp??1)!==0),$r.update(t/1e3,i/1e3),oi.setTime(i/1e3),Ui.setTime(i/1e3),Ri.setTime(i/1e3),Ri.setNow(Date.now()),Ii.setTime(i/1e3),Ni.setTime(i/1e3),ls.setTime(i/1e3);const o=er(new Date(ke)),l=window.__orreryTimeWarp??1;if(!zt.isAutoOrbit()&&!zt.isMapMode()&&xl!==null&&l!==0){const u=o-xl;if(u!==0){Is.subVectors(Bn.position,Hs.target);const d=Math.cos(u),p=Math.sin(u),g=Is.x,v=Is.z;Is.x=g*d+v*p,Is.z=-g*p+v*d,Bn.position.addVectors(Hs.target,Is)}}xl=o,Hs.autoRotate=zt.isAutoOrbit(),Hs.update();const c=zt.isMapMode();c!==td&&(c?pe.enableControls(We.domElement):pe.disableControls(),td=c);const h=zt.isWindVisible();Ci.setVisible(h),h&&Ci.step(We),zt.isMapMode()?(pe.update(),We.render(pe.scene,pe.camera)):We.render(me,Bn),requestAnimationFrame(_f)}requestAnimationFrame(_f);
//# sourceMappingURL=index-DHPtsAS-.js.map
