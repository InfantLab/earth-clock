(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Fl="170",Gn={ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wd=0,mc=1,Ed=2,cu=1,Td=2,Bn=3,$n=0,We=1,En=2,ui=0,ki=1,Ze=2,gc=3,_c=4,Ad=5,Pi=100,Rd=101,Cd=102,Pd=103,Dd=104,Ld=200,Id=201,Ud=202,Nd=203,Ho=204,Go=205,Fd=206,Od=207,kd=208,Bd=209,zd=210,Hd=211,Gd=212,Vd=213,Wd=214,Vo=0,Wo=1,Xo=2,Tr=3,$o=4,qo=5,Yo=6,jo=7,Ol=0,Xd=1,$d=2,di=0,qd=1,Yd=2,jd=3,Zd=4,Kd=5,Jd=6,Qd=7,hu=300,Ar=301,Rr=302,_a=303,Zo=304,Pa=306,qn=1e3,Ce=1001,Ko=1002,be=1003,tf=1004,Rs=1005,_e=1006,Ha=1007,Ui=1008,yn=1009,uu=1010,du=1011,ds=1012,kl=1013,zi=1014,vn=1015,Vi=1016,Bl=1017,zl=1018,Cr=1020,fu=35902,pu=1021,mu=1022,Ue=1023,gu=1024,_u=1025,br=1026,Pr=1027,Hl=1028,Gl=1029,vu=1030,Vl=1031,Wl=1033,ha=33776,ua=33777,da=33778,fa=33779,Jo=35840,Qo=35841,tl=35842,el=35843,nl=36196,il=37492,rl=37496,sl=37808,al=37809,ol=37810,ll=37811,cl=37812,hl=37813,ul=37814,dl=37815,fl=37816,pl=37817,ml=37818,gl=37819,_l=37820,vl=37821,pa=36492,xl=36494,yl=36495,xu=36283,Sl=36284,Ml=36285,bl=36286,ef=3200,nf=3201,yu=0,rf=1,oi="",me="srgb",Nr="srgb-linear",Da="linear",ee="srgb",Yi=7680,vc=519,sf=512,af=513,of=514,Su=515,lf=516,cf=517,hf=518,uf=519,wl=35044,Be=35048,xc="300 es",Hn=2e3,va=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yc=1234567;const ns=Math.PI/180,fs=180/Math.PI;function Vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Xl(i,t){return(i%t+t)%t}function df(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function ff(i,t,e){return i!==t?(e-i)/(t-i):0}function is(i,t,e){return(1-e)*i+e*t}function pf(i,t,e,n){return is(i,t,1-Math.exp(-e*n))}function mf(i,t=1){return t-Math.abs(Xl(i,t*2)-t)}function gf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _f(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xf(i,t){return i+Math.random()*(t-i)}function yf(i){return i*(.5-Math.random())}function Sf(i){i!==void 0&&(yc=i);let t=yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mf(i){return i*ns}function bf(i){return i*fs}function wf(i){return(i&i-1)===0&&i!==0}function Ef(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Af(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),d=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const La={DEG2RAD:ns,RAD2DEG:fs,generateUUID:Vn,clamp:Re,euclideanModulo:Xl,mapLinear:df,inverseLerp:ff,lerp:is,damp:pf,pingpong:mf,smoothstep:gf,smootherstep:_f,randInt:vf,randFloat:xf,randFloatSpread:yf,seededRandom:Sf,degToRad:Mf,radToDeg:bf,isPowerOfTwo:wf,ceilPowerOfTwo:Ef,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:Af,normalize:te,denormalize:gn};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,n,r,s,a,o,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=r[0],m=r[3],f=r[6],w=r[1],M=r[4],S=r[7],L=r[2],T=r[5],A=r[8];return s[0]=a*_+o*w+l*L,s[3]=a*m+o*M+l*T,s[6]=a*f+o*S+l*A,s[1]=c*_+h*w+u*L,s[4]=c*m+h*M+u*T,s[7]=c*f+h*S+u*A,s[2]=d*_+p*w+g*L,s[5]=d*m+p*M+g*T,s[8]=d*f+p*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=e*u+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(r*c-h*n)*_,t[2]=(o*n-r*a)*_,t[3]=d*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ga.makeScale(t,e)),this}rotate(t){return this.premultiply(Ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new Lt;function Mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rf(){const i=ps("canvas");return i.style.display="block",i}const Sc={};function Kr(i){i in Sc||(Sc[i]=!0,console.warn(i))}function Cf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Pf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Df(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=wr(i.r),i.g=wr(i.g),i.b=wr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?Da:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Mc=[.64,.33,.3,.6,.15,.06],bc=[.2126,.7152,.0722],wc=[.3127,.329],Ec=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Nr]:{primaries:Mc,whitePoint:wc,transfer:Da,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:bc,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:Mc,whitePoint:wc,transfer:ee,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:bc,outputColorSpaceConfig:{drawingBufferColorSpace:me}}});let ji;class Lf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=ps("canvas")),ji.width=t.width,ji.height=t.height;const n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ps("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let If=0;class bu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Va(r[a].image)):s.push(Va(r[a]))}else s=Va(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uf=0;class Pe extends Wi{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=Ce,r=Ce,s=_e,a=Ui,o=Ue,l=yn,c=Pe.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Vn(),this.name="",this.source=new bu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qn:t.x=t.x-Math.floor(t.x);break;case Ce:t.x=t.x<0?0:1;break;case Ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qn:t.y=t.y-Math.floor(t.y);break;case Ce:t.y=t.y<0?0:1;break;case Ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=hu;Pe.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,r=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(p+1)/2,L=(f+1)/2,T=(h+d)/4,A=(u+_)/4,P=(g+m)/4;return M>S&&M>L?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=T/n,s=A/n):S>L?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=T/r,s=P/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=A/s,r=P/s),this.set(n,r,s,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nf extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Pe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Nf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wu extends Pe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=be,this.minFilter=be,this.wrapR=Ce,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ff extends Pe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=be,this.minFilter=be,this.wrapR=Ce,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,w=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const L=Math.sqrt(M),T=Math.atan2(L,f*w);m=Math.sin(m*T)/L,o=Math.sin(o*T)/L}const S=o*w;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ac.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),h=2*(o*e-s*r),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new C,Ac=new fi;class vs{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),Ps.subVectors(this.max,Hr),Zi.subVectors(t.a,Hr),Ki.subVectors(t.b,Hr),Ji.subVectors(t.c,Hr),Jn.subVectors(Ki,Zi),Qn.subVectors(Ji,Ki),xi.subVectors(Zi,Ji);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-xi.z,xi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,xi.z,0,-xi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-xi.y,xi.x,0];return!Xa(e,Zi,Ki,Ji,Ps)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,Zi,Ki,Ji,Ps))?!1:(Ds.crossVectors(Jn,Qn),e=[Ds.x,Ds.y,Ds.z],Xa(e,Zi,Ki,Ji,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new C,new C,new C,new C,new C,new C,new C,new C],cn=new C,Cs=new vs,Zi=new C,Ki=new C,Ji=new C,Jn=new C,Qn=new C,xi=new C,Hr=new C,Ps=new C,Ds=new C,yi=new C;function Xa(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){yi.fromArray(i,s);const o=r.x*Math.abs(yi.x)+r.y*Math.abs(yi.y)+r.z*Math.abs(yi.z),l=t.dot(yi),c=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Of=new vs,Gr=new C,$a=new C;class xs{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Of.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);const e=Gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Gr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add($a)),this.expandByPoint(Gr.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new C,qa=new C,Ls=new C,ti=new C,Ya=new C,Is=new C,ja=new C;class ys{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){qa.copy(t).add(e).multiplyScalar(.5),Ls.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(qa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ls),o=ti.dot(this.direction),l=-ti.dot(Ls),c=ti.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qa).addScaledVector(Ls,d),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,r,s){Ya.subVectors(e,t),Is.subVectors(n,t),ja.crossVectors(Ya,Is);let a=this.direction.dot(ja),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,t);const l=o*this.direction.dot(Is.crossVectors(ti,Is));if(l<0)return null;const c=o*this.direction.dot(Ya.cross(ti));if(c<0||l+c>a)return null;const h=-o*ti.dot(ja);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,r,s,a,o,l,c,h,u,d,p,g,_,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,r,s,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Qi.setFromMatrixColumn(t,0).length(),s=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kf,t,Bf)}lookAt(t,e,n){const r=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ei.crossVectors(n,$e),ei.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ei.crossVectors(n,$e)),ei.normalize(),Us.crossVectors($e,ei),r[0]=ei.x,r[4]=Us.x,r[8]=$e.x,r[1]=ei.y,r[5]=Us.y,r[9]=$e.y,r[2]=ei.z,r[6]=Us.z,r[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],w=n[3],M=n[7],S=n[11],L=n[15],T=r[0],A=r[4],P=r[8],b=r[12],y=r[1],R=r[5],H=r[9],O=r[13],W=r[2],$=r[6],G=r[10],Y=r[14],B=r[3],K=r[7],rt=r[11],ft=r[15];return s[0]=a*T+o*y+l*W+c*B,s[4]=a*A+o*R+l*$+c*K,s[8]=a*P+o*H+l*G+c*rt,s[12]=a*b+o*O+l*Y+c*ft,s[1]=h*T+u*y+d*W+p*B,s[5]=h*A+u*R+d*$+p*K,s[9]=h*P+u*H+d*G+p*rt,s[13]=h*b+u*O+d*Y+p*ft,s[2]=g*T+_*y+m*W+f*B,s[6]=g*A+_*R+m*$+f*K,s[10]=g*P+_*H+m*G+f*rt,s[14]=g*b+_*O+m*Y+f*ft,s[3]=w*T+M*y+S*W+L*B,s[7]=w*A+M*R+S*$+L*K,s[11]=w*P+M*H+S*G+L*rt,s[15]=w*b+M*O+S*Y+L*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*p-n*l*p)+_*(+e*l*p-e*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+m*(+e*c*u-e*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+f*(-r*o*h-e*l*u+e*o*d+r*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],w=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,M=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,S=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,L=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=e*w+n*M+r*S+s*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=w*A,t[1]=(_*d*s-u*m*s-_*r*p+n*m*p+u*r*f-n*d*f)*A,t[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*f+n*l*f)*A,t[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*p-n*l*p)*A,t[4]=M*A,t[5]=(h*m*s-g*d*s+g*r*p-e*m*p-h*r*f+e*d*f)*A,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*f-e*l*f)*A,t[7]=(a*d*s-h*l*s+h*r*c-e*d*c-a*r*p+e*l*p)*A,t[8]=S*A,t[9]=(g*u*s-h*_*s-g*n*p+e*_*p+h*n*f-e*u*f)*A,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*f+e*o*f)*A,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=L*A,t[13]=(h*_*r-g*u*r+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*o*r-a*_*r-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*u*r-h*o*r+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,_=a*h,m=a*u,f=o*u,w=l*c,M=l*h,S=l*u,L=n.x,T=n.y,A=n.z;return r[0]=(1-(_+f))*L,r[1]=(p+S)*L,r[2]=(g-M)*L,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+f))*T,r[6]=(m+w)*T,r[7]=0,r[8]=(g+M)*A,r[9]=(m-w)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const a=Qi.set(r[4],r[5],r[6]).length(),o=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],hn.copy(this);const c=1/s,h=1/a,u=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Hn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r);let p,g;if(o===Hn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===va)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Hn){const l=this.elements,c=1/(e-t),h=1/(n-r),u=1/(a-s),d=(e+t)*c,p=(n+r)*h;let g,_;if(o===Hn)g=(a+s)*u,_=-2*u;else if(o===va)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new C,hn=new ae,kf=new C(0,0,0),Bf=new C(1,1,1),ei=new C,Us=new C,$e=new C,Rc=new ae,Cc=new fi;class Pn{constructor(t=0,e=0,n=0,r=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class $l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zf=0;const Pc=new C,tr=new fi,Fn=new ae,Ns=new C,Vr=new C,Hf=new C,Gf=new fi,Dc=new C(1,0,0),Lc=new C(0,1,0),Ic=new C(0,0,1),Uc={type:"added"},Vf={type:"removed"},er={type:"childadded",child:null},Za={type:"childremoved",child:null};class we extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new C,e=new Pn,n=new fi,r=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ae},normalMatrix:{value:new Lt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(Dc,t)}rotateY(t){return this.rotateOnAxis(Lc,t)}rotateZ(t){return this.rotateOnAxis(Ic,t)}translateOnAxis(t,e){return Pc.copy(t).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dc,t)}translateY(t){return this.translateOnAxis(Lc,t)}translateZ(t){return this.translateOnAxis(Ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Vr,Ns,this.up):Fn.lookAt(Ns,Vr,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(Fn),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uc),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vf),Za.child=t,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uc),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,Hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}we.DEFAULT_UP=new C(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new C,On=new C,Ka=new C,kn=new C,nr=new C,ir=new C,Nc=new C,Ja=new C,Qa=new C,to=new C,eo=new ge,no=new ge,io=new ge;class sn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){un.subVectors(r,e),On.subVectors(n,e),Ka.subVectors(t,e);const a=un.dot(un),o=un.dot(On),l=un.dot(Ka),c=On.dot(On),h=On.dot(Ka),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return eo.setScalar(0),no.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(t,e),no.fromBufferAttribute(t,n),io.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(eo,s.x),a.addScaledVector(no,s.y),a.addScaledVector(io,s.z),a}static isFrontFacing(t,e,n,r){return un.subVectors(n,e),On.subVectors(t,e),un.cross(On).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),On.subVectors(this.a,this.b),un.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;nr.subVectors(r,n),ir.subVectors(s,n),Ja.subVectors(t,n);const l=nr.dot(Ja),c=ir.dot(Ja);if(l<=0&&c<=0)return e.copy(n);Qa.subVectors(t,r);const h=nr.dot(Qa),u=ir.dot(Qa);if(h>=0&&u<=h)return e.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(nr,a);to.subVectors(t,s);const p=nr.dot(to),g=ir.dot(to);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ir,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Nc.subVectors(s,r),o=(u-h)/(u-h+(p-g)),e.copy(r).addScaledVector(Nc,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(nr,a).addScaledVector(ir,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function ro(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=qt.workingColorSpace){if(t=Xl(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ro(a,s,t+1/3),this.g=ro(a,s,t),this.b=ro(a,s,t-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(t,e=me){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){const n=Eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return qt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Re(Ie.r*255,0,255))*65536+Math.round(Re(Ie.g*255,0,255))*256+Math.round(Re(Ie.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,r=Ie.g,s=Ie.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=me){qt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,r=Ie.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(Fs);const n=is(ni.h,Fs.h,e),r=is(ni.s,Fs.s,e),s=is(ni.l,Fs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Rt;Rt.NAMES=Eu;let Wf=0;class mi extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Vn(),this.name="",this.blending=ki,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Go,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==Go&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ye extends mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Os=Xf();function Xf(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function $f(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Re(i,-65504,65504),Os.floatView[0]=i;const t=Os.uint32View[0],e=t>>23&511;return Os.baseTable[e]+((t&8388607)>>Os.shiftTable[e])}const Tu={toHalfFloat:$f},ye=new C,ks=new yt;class jt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wl,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wl&&(t.usage=this.usage),t}}class Au extends jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ru extends jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends jt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qf=0;const Qe=new ae,so=new we,rr=new C,qe=new vs,Wr=new vs,Ae=new C;class Ft extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mu(t)?Ru:Au)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Lt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(qe.min,Wr.min),qe.expandByPoint(Ae),Ae.addVectors(qe.max,Wr.max),qe.expandByPoint(Ae)):(qe.expandByPoint(Wr.min),qe.expandByPoint(Wr.max))}qe.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ae.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(t,c),Ae.add(rr)),r=Math.max(r,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;const c=new C,h=new C,u=new C,d=new yt,p=new yt,g=new yt,_=new C,m=new C;function f(P,b,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(_),o[b].add(_),o[y].add(_),l[P].add(m),l[b].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,b=w.length;P<b;++P){const y=w[P],R=y.start,H=y.count;for(let O=R,W=R+H;O<W;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const M=new C,S=new C,L=new C,T=new C;function A(P){L.fromBufferAttribute(r,P),T.copy(L);const b=o[P];M.copy(b),M.sub(L.multiplyScalar(L.dot(b))).normalize(),S.crossVectors(T,b);const R=S.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,R)}for(let P=0,b=w.length;P<b;++P){const y=w[P],R=y.start,H=y.count;for(let O=R,W=R+H;O<W;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new jt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ft,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new ae,Si=new ys,Bs=new xs,Oc=new C,zs=new C,Hs=new C,Gs=new C,ao=new C,Vs=new C,kc=new C,Ws=new C;class Vt extends we{constructor(t=new Ft,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(ao.fromBufferAttribute(u,t),a?Vs.addScaledVector(ao,h):Vs.addScaledVector(ao.sub(e),h))}e.add(Vs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),Si.copy(t.ray).recast(t.near),!(Bs.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Bs,Oc)===null||Si.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(Fc.copy(s).invert(),Si.copy(t.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,L=M;S<L;S+=3){const T=o.getX(S),A=o.getX(S+1),P=o.getX(S+2);r=Xs(this,f,t,n,c,h,u,T,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=o.getX(m),M=o.getX(m+1),S=o.getX(m+2);r=Xs(this,a,t,n,c,h,u,w,M,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,L=M;S<L;S+=3){const T=S,A=S+1,P=S+2;r=Xs(this,f,t,n,c,h,u,T,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=m,M=m+1,S=m+2;r=Xs(this,a,t,n,c,h,u,w,M,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Yf(i,t,e,n,r,s,a,o){let l;if(t.side===We?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===$n,o),l===null)return null;Ws.copy(o),Ws.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ws);return c<e.near||c>e.far?null:{distance:c,point:Ws.clone(),object:i}}function Xs(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,zs),i.getVertexPosition(l,Hs),i.getVertexPosition(c,Gs);const h=Yf(i,t,e,n,zs,Hs,Gs,kc);if(h){const u=new C;sn.getBarycoord(kc,zs,Hs,Gs,u),r&&(h.uv=sn.getInterpolatedAttribute(r,o,l,c,u,new yt)),s&&(h.uv1=sn.getInterpolatedAttribute(s,o,l,c,u,new yt)),a&&(h.normal=sn.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};sn.getNormal(zs,Hs,Gs,d.normal),h.face=d,h.barycoord=u}return h}class Ss extends Ft{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(_,m,f,w,M,S,L,T,A,P,b){const y=S/A,R=L/P,H=S/2,O=L/2,W=T/2,$=A+1,G=P+1;let Y=0,B=0;const K=new C;for(let rt=0;rt<G;rt++){const ft=rt*R-O;for(let Ct=0;Ct<$;Ct++){const Bt=Ct*y-H;K[_]=Bt*w,K[m]=ft*M,K[f]=W,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(Ct/A),u.push(1-rt/P),Y+=1}}for(let rt=0;rt<P;rt++)for(let ft=0;ft<A;ft++){const Ct=d+ft+$*rt,Bt=d+ft+$*(rt+1),X=d+(ft+1)+$*(rt+1),Q=d+(ft+1)+$*rt;l.push(Ct,Bt,Q),l.push(Bt,X,Q),B+=6}o.addGroup(p,B,b),p+=B,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=Dr(i[e]);for(const r in n)t[r]=n[r]}return t}function jf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Zf={clone:Dr,merge:Fe};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oe extends mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pu extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new C,Bc=new yt,zc=new yt;class rn extends Pu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Bc,zc),e.subVectors(zc,Bc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const sr=-90,ar=1;class Qf extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(sr,ar,t,e);r.layers=this.layers,this.add(r);const s=new rn(sr,ar,t,e);s.layers=this.layers,this.add(s);const a=new rn(sr,ar,t,e);a.layers=this.layers,this.add(a);const o=new rn(sr,ar,t,e);o.layers=this.layers,this.add(o);const l=new rn(sr,ar,t,e);l.layers=this.layers,this.add(l);const c=new rn(sr,ar,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ql extends Pe{constructor(t,e,n,r,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ar,super(t,e,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tp extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ql(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ss(5,5,5),s=new oe({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:ui});s.uniforms.tEquirect.value=e;const a=new Vt(r,s),o=e.minFilter;return e.minFilter===Ui&&(e.minFilter=_e),new Qf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const oo=new C,ep=new C,np=new Lt;class ai{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=oo.subVectors(n,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||np.getNormalMatrix(t),r=this.coplanarPoint(oo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new xs,$s=new C;class Yl{constructor(t=new ai,e=new ai,n=new ai,r=new ai,s=new ai,a=new ai){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],w=r[13],M=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,m-p,S-f).normalize(),n[1].setComponents(l+s,d+c,m+p,S+f).normalize(),n[2].setComponents(l+a,d+h,m+g,S+w).normalize(),n[3].setComponents(l-a,d-h,m-g,S-w).normalize(),n[4].setComponents(l-o,d-u,m-_,S-M).normalize(),e===Hn)n[5].setComponents(l+o,d+u,m+_,S+M).normalize();else if(e===va)n[5].setComponents(o,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if($s.x=r.normal.x>0?t.max.x:t.min.x,$s.y=r.normal.y>0?t.max.y:t.min.y,$s.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Du(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ip(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Hi extends Ft{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const w=f*d-a;for(let M=0;M<c;M++){const S=M*u-s;g.push(S,-w,0),_.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const M=w+c*f,S=w+c*(f+1),L=w+1+c*(f+1),T=w+1+c*f;p.push(M,S,T),p.push(S,L,T)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.width,t.height,t.widthSegments,t.heightSegments)}}var rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sp=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,vp=`#ifdef USE_BUMPMAP
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ap=`#define PI 3.141592653589793
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
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
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
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
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
#endif`,nm=`struct PhysicalMaterial {
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
}`,im=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,Sg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,bg=`#define NORMAL
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
}`,wg=`#define NORMAL
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
}`,Eg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define STANDARD
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Dg=`uniform float size;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:rp,alphahash_pars_fragment:sp,alphamap_fragment:ap,alphamap_pars_fragment:op,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:hp,aomap_pars_fragment:up,batching_pars_vertex:dp,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:_p,bumpmap_pars_fragment:vp,clipping_planes_fragment:xp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:Mp,color_fragment:bp,color_pars_fragment:wp,color_pars_vertex:Ep,color_vertex:Tp,common:Ap,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Dp,emissivemap_fragment:Lp,emissivemap_pars_fragment:Ip,colorspace_fragment:Up,colorspace_pars_fragment:Np,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:kp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:Zp,envmap_vertex:zp,fog_vertex:Hp,fog_pars_vertex:Gp,fog_fragment:Vp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:$p,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Yp,lights_pars_begin:jp,lights_toon_fragment:Kp,lights_toon_pars_fragment:Jp,lights_phong_fragment:Qp,lights_phong_pars_fragment:tm,lights_physical_fragment:em,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:rm,lights_fragment_end:sm,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:hm,map_pars_fragment:um,map_particle_fragment:dm,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:_m,morphnormal_vertex:vm,morphtarget_pars_vertex:xm,morphtarget_vertex:ym,normal_fragment_begin:Sm,normal_fragment_maps:Mm,normal_pars_fragment:bm,normal_pars_vertex:wm,normal_vertex:Em,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Pm,opaque_fragment:Dm,packing:Lm,premultiplied_alpha_fragment:Im,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:Fm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:zm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Gm,skinbase_vertex:Vm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:$m,specularmap_fragment:qm,specularmap_pars_fragment:Ym,tonemapping_fragment:jm,tonemapping_pars_fragment:Zm,transmission_fragment:Km,transmission_pars_fragment:Jm,uv_pars_fragment:Qm,uv_pars_vertex:tg,uv_vertex:eg,worldpos_vertex:ng,background_vert:ig,background_frag:rg,backgroundCube_vert:sg,backgroundCube_frag:ag,cube_vert:og,cube_frag:lg,depth_vert:cg,depth_frag:hg,distanceRGBA_vert:ug,distanceRGBA_frag:dg,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:_g,meshbasic_frag:vg,meshlambert_vert:xg,meshlambert_frag:yg,meshmatcap_vert:Sg,meshmatcap_frag:Mg,meshnormal_vert:bg,meshnormal_frag:wg,meshphong_vert:Eg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Rg,meshtoon_vert:Cg,meshtoon_frag:Pg,points_vert:Dg,points_frag:Lg,shadow_vert:Ig,shadow_frag:Ug,sprite_vert:Ng,sprite_frag:Fg},it={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},wn={basic:{uniforms:Fe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Fe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Fe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Fe([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Fe([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Fe([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Fe([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Fe([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Fe([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Fe([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Fe([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Fe([it.common,it.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Fe([it.lights,it.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};wn.physical={uniforms:Fe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const qs={r:0,b:0,g:0},bi=new Pn,Og=new ae;function kg(i,t,e,n,r,s,a){const o=new Rt(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?e:t).get(M)),M}function _(w){let M=!1;const S=g(w);S===null?f(o,l):S&&S.isColor&&(f(S,1),M=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===Pa)?(h===void 0&&(h=new Vt(new Ss(1,1,1),new oe({name:"BackgroundCubeMaterial",uniforms:Dr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),bi.copy(M.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(bi)),h.material.toneMapped=qt.getTransfer(S.colorSpace)!==ee,(u!==S||d!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Vt(new Hi(2,2),new oe({name:"BackgroundMaterial",uniforms:Dr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=qt.getTransfer(S.colorSpace)!==ee,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,M){w.getRGB(qs,Cu(i)),n.buffers.color.setClear(qs.r,qs.g,qs.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(w,M=1){o.set(w),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(o,l)},render:_,addToRenderList:m}}function Bg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(y,R,H,O,W){let $=!1;const G=u(O,H,R);s!==G&&(s=G,c(s.object)),$=p(y,O,H,W),$&&g(y,O,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(y,R,H,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,R,H){const O=H.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let $=W[R.id];$===void 0&&($={},W[R.id]=$);let G=$[O];return G===void 0&&(G=d(l()),$[O]=G),G}function d(y){const R=[],H=[],O=[];for(let W=0;W<e;W++)R[W]=0,H[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,R,H,O){const W=s.attributes,$=R.attributes;let G=0;const Y=H.getAttributes();for(const B in Y)if(Y[B].location>=0){const rt=W[B];let ft=$[B];if(ft===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),rt===void 0||rt.attribute!==ft||ft&&rt.data!==ft.data)return!0;G++}return s.attributesNum!==G||s.index!==O}function g(y,R,H,O){const W={},$=R.attributes;let G=0;const Y=H.getAttributes();for(const B in Y)if(Y[B].location>=0){let rt=$[B];rt===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor));const ft={};ft.attribute=rt,rt&&rt.data&&(ft.data=rt.data),W[B]=ft,G++}s.attributes=W,s.attributesNum=G,s.index=O}function _(){const y=s.newAttributes;for(let R=0,H=y.length;R<H;R++)y[R]=0}function m(y){f(y,0)}function f(y,R){const H=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;H[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),W[y]!==R&&(i.vertexAttribDivisor(y,R),W[y]=R)}function w(){const y=s.newAttributes,R=s.enabledAttributes;for(let H=0,O=R.length;H<O;H++)R[H]!==y[H]&&(i.disableVertexAttribArray(H),R[H]=0)}function M(y,R,H,O,W,$,G){G===!0?i.vertexAttribIPointer(y,R,H,W,$):i.vertexAttribPointer(y,R,H,O,W,$)}function S(y,R,H,O){_();const W=O.attributes,$=H.getAttributes(),G=R.defaultAttributeValues;for(const Y in $){const B=$[Y];if(B.location>=0){let K=W[Y];if(K===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const rt=K.normalized,ft=K.itemSize,Ct=t.get(K);if(Ct===void 0)continue;const Bt=Ct.buffer,X=Ct.type,Q=Ct.bytesPerElement,pt=X===i.INT||X===i.UNSIGNED_INT||K.gpuType===kl;if(K.isInterleavedBufferAttribute){const nt=K.data,St=nt.stride,Et=K.offset;if(nt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<B.locationSize;Nt++)f(B.location+Nt,nt.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Nt=0;Nt<B.locationSize;Nt++)m(B.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let Nt=0;Nt<B.locationSize;Nt++)M(B.location+Nt,ft/B.locationSize,X,rt,St*Q,(Et+ft/B.locationSize*Nt)*Q,pt)}else{if(K.isInstancedBufferAttribute){for(let nt=0;nt<B.locationSize;nt++)f(B.location+nt,K.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let nt=0;nt<B.locationSize;nt++)m(B.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let nt=0;nt<B.locationSize;nt++)M(B.location+nt,ft/B.locationSize,X,rt,ft*Q,ft/B.locationSize*nt*Q,pt)}}else if(G!==void 0){const rt=G[Y];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(B.location,rt);break;case 3:i.vertexAttrib3fv(B.location,rt);break;case 4:i.vertexAttrib4fv(B.location,rt);break;default:i.vertexAttrib1fv(B.location,rt)}}}}w()}function L(){P();for(const y in n){const R=n[y];for(const H in R){const O=R[H];for(const W in O)h(O[W].object),delete O[W];delete R[H]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const H in R){const O=R[H];for(const W in O)h(O[W].object),delete O[W];delete R[H]}delete n[y.id]}function A(y){for(const R in n){const H=n[R];if(H[y.id]===void 0)continue;const O=H[y.id];for(const W in O)h(O[W].object),delete O[W];delete H[y.id]}}function P(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function zg(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hg(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Ue&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==yn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:L,maxSamples:T}}function Gg(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ai,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||r;return r=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const w=s?0:n,M=w*4;let S=f.clippingState||null;l.value=S,S=h(g,d,M,p);for(let L=0;L!==M;++L)S[L]=e[L];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,S=p;M!==_;++M,S+=4)a.copy(u[M]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Vg(i){let t=new WeakMap;function e(a,o){return o===_a?a.mapping=Ar:o===Zo&&(a.mapping=Rr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_a||o===Zo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new tp(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Lr extends Pu{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vr=4,Hc=[.125,.215,.35,.446,.526,.582],Di=20,lo=new Lr,Gc=new Rt;let co=null,ho=0,uo=0,fo=!1;const Ai=(1+Math.sqrt(5))/2,or=1/Ai,Vc=[new C(-Ai,or,0),new C(Ai,or,0),new C(-or,0,Ai),new C(or,0,Ai),new C(0,Ai,-or),new C(0,Ai,or),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){co=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(co,ho,uo),this._renderer.xr.enabled=fo,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ar||t.mapping===Rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),co=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_e,minFilter:_e,generateMipmaps:!1,type:Vi,format:Ue,colorSpace:Nr,depthBuffer:!1},r=Xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(s)),this._blurMaterial=Xg(s,t,e)}return r}_compileMaterial(t){const e=new Vt(this._lodPlanes[0],t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,n,r){const o=new rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gc),h.toneMapping=di,h.autoClear=!1;const p=new Ye({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Vt(new Ss,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Gc),_=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):w===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const M=this._cubeSize;Ys(r,w*M,f>2?M:0,M,M),h.setRenderTarget(r),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ar||t.mapping===Rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,lo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vc[(r-s-1)%Vc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Vt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Di-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Di;m>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const f=[];let w=0;for(let A=0;A<Di;++A){const P=A/_,b=Math.exp(-P*P/2);f.push(b),A===0?w+=b:A<m&&(w+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const S=this._sizeLods[r],L=3*S*(r>M-vr?r-M+vr:0),T=4*(this._cubeSize-S);Ys(e,L,T,3*S,2*S),l.setRenderTarget(e),l.render(u,lo)}}function Wg(i){const t=[],e=[],n=[];let r=i;const s=i-vr+1+Hc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-vr?l=Hc[a-i+vr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,w=new Float32Array(_*g*p),M=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];w.set(b,_*g*T),M.set(d,m*g*T);const y=[T,T,T,T,T,T];S.set(y,f*g*T)}const L=new Ft;L.setAttribute("position",new jt(w,_)),L.setAttribute("uv",new jt(M,m)),L.setAttribute("faceIndex",new jt(S,f)),t.push(L),r>vr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xc(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Xg(i,t,e){const n=new Float32Array(Di),r=new C(0,1,0);return new oe({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function $c(){return new oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function qc(){return new oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function jl(){return`

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
	`}function $g(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_a||l===Zo,h=l===Ar||l===Rr;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Wc(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Wc(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function qg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Yg(i,t,e,n){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let M=0,S=w.length;M<S;M+=3){const L=w[M+0],T=w[M+1],A=w[M+2];d.push(L,T,T,A,A,L)}}else if(g!==void 0){const w=g.array;_=g.version;for(let M=0,S=w.length/3-1;M<S;M+=3){const L=M+0,T=M+1,A=M+2;d.push(L,T,T,A,A,L)}}else return;const m=new(Mu(d)?Ru:Au)(d,1);m.version=_;const f=s.get(u);f&&t.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function jg(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*_[w];e.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Kg(i,t,e){const n=new WeakMap,r=new ge;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let L=o.attributes.position.count*S,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*T*4*u),P=new wu(A,L,T,u);P.type=vn,P.needsUpdate=!0;const b=S*4;for(let R=0;R<u;R++){const H=f[R],O=w[R],W=M[R],$=L*T*4*R;for(let G=0;G<H.count;G++){const Y=G*b;g===!0&&(r.fromBufferAttribute(H,G),A[$+Y+0]=r.x,A[$+Y+1]=r.y,A[$+Y+2]=r.z,A[$+Y+3]=0),_===!0&&(r.fromBufferAttribute(O,G),A[$+Y+4]=r.x,A[$+Y+5]=r.y,A[$+Y+6]=r.z,A[$+Y+7]=0),m===!0&&(r.fromBufferAttribute(W,G),A[$+Y+8]=r.x,A[$+Y+9]=r.y,A[$+Y+10]=r.z,A[$+Y+11]=W.itemSize===4?r.w:1)}}d={count:u,texture:P,size:new yt(L,T)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Jg(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Lu extends Pe{constructor(t,e,n,r,s,a,o,l,c,h=br){if(h!==br&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===br&&(n=zi),n===void 0&&h===Pr&&(n=Cr),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Iu=new Pe,Yc=new Lu(1,1),Uu=new wu,Nu=new Ff,Fu=new ql,jc=[],Zc=[],Kc=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function Fr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=jc[r];if(s===void 0&&(s=new Float32Array(r),jc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ia(i,t){let e=Zc[t];e===void 0&&(e=new Int32Array(t),Zc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function i0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Qc.set(n),i.uniformMatrix2fv(this.addr,!1,Qc),Te(e,n)}}function r0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Jc.set(n),i.uniformMatrix3fv(this.addr,!1,Jc),Te(e,n)}}function s0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Kc.set(n),i.uniformMatrix4fv(this.addr,!1,Kc),Te(e,n)}}function a0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function h0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function p0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Yc.compareFunction=Su,s=Yc):s=Iu,e.setTexture2D(t||s,r)}function m0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Nu,r)}function g0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Fu,r)}function _0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Uu,r)}function v0(i){switch(i){case 5126:return Qg;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return r0;case 35676:return s0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}function x0(i,t){i.uniform1fv(this.addr,t)}function y0(i,t){const e=Fr(t,this.size,2);i.uniform2fv(this.addr,e)}function S0(i,t){const e=Fr(t,this.size,3);i.uniform3fv(this.addr,e)}function M0(i,t){const e=Fr(t,this.size,4);i.uniform4fv(this.addr,e)}function b0(i,t){const e=Fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function w0(i,t){const e=Fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E0(i,t){const e=Fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T0(i,t){i.uniform1iv(this.addr,t)}function A0(i,t){i.uniform2iv(this.addr,t)}function R0(i,t){i.uniform3iv(this.addr,t)}function C0(i,t){i.uniform4iv(this.addr,t)}function P0(i,t){i.uniform1uiv(this.addr,t)}function D0(i,t){i.uniform2uiv(this.addr,t)}function L0(i,t){i.uniform3uiv(this.addr,t)}function I0(i,t){i.uniform4uiv(this.addr,t)}function U0(i,t,e){const n=this.cache,r=t.length,s=Ia(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Iu,s[a])}function N0(i,t,e){const n=this.cache,r=t.length,s=Ia(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Nu,s[a])}function F0(i,t,e){const n=this.cache,r=t.length,s=Ia(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Fu,s[a])}function O0(i,t,e){const n=this.cache,r=t.length,s=Ia(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Uu,s[a])}function k0(i){switch(i){case 5126:return x0;case 35664:return y0;case 35665:return S0;case 35666:return M0;case 35674:return b0;case 35675:return w0;case 35676:return E0;case 5124:case 35670:return T0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return D0;case 36295:return L0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}class B0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=v0(e.type)}}class z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k0(e.type)}}class H0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function th(i,t){i.seq.push(t),i.map[t.id]=t}function G0(i,t,e){const n=i.name,r=n.length;for(po.lastIndex=0;;){const s=po.exec(n),a=po.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){th(e,c===void 0?new B0(o,i,t):new z0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new H0(o),th(e,u)),e=u}}}class ma{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);G0(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function eh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const V0=37297;let W0=0;function X0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const nh=new Lt;function $0(i){qt._getMatrix(nh,qt.workingColorSpace,i);const t=`mat3( ${nh.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Da:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ih(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+X0(i.getShaderSource(t),a)}else return r}function q0(i,t){const e=$0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Y0(i,t){let e;switch(t){case qd:e="Linear";break;case Yd:e="Reinhard";break;case jd:e="Cineon";break;case Zd:e="ACESFilmic";break;case Jd:e="AgX";break;case Qd:e="Neutral";break;case Kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const js=new C;function j0(){qt.getLuminanceCoefficients(js);const i=js.x.toFixed(4),t=js.y.toFixed(4),e=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function K0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Jr(i){return i!==""}function rh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(i){return i.replace(Q0,e_)}const t_=new Map;function e_(i,t){let e=Ut[t];if(e===void 0){const n=t_.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return El(e)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(i){return i.replace(n_,i_)}function i_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function oh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function r_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Td?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function s_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ar:case Rr:t="ENVMAP_TYPE_CUBE";break;case Pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Rr&&(t="ENVMAP_MODE_REFRACTION"),t}function o_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ol:t="ENVMAP_BLENDING_MULTIPLY";break;case Xd:t="ENVMAP_BLENDING_MIX";break;case $d:t="ENVMAP_BLENDING_ADD";break}return t}function l_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function c_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=r_(e),c=s_(e),h=a_(e),u=o_(e),d=l_(e),p=Z0(e),g=K0(s),_=r.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jr).join(`
`),f.length>0&&(f+=`
`)):(m=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),f=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Ut.tonemapping_pars_fragment:"",e.toneMapping!==di?Y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,q0("linearToOutputTexel",e.outputColorSpace),j0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jr).join(`
`)),a=El(a),a=rh(a,e),a=sh(a,e),o=El(o),o=rh(o,e),o=sh(o,e),a=ah(a),o=ah(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=w+m+a,S=w+f+o,L=eh(r,r.VERTEX_SHADER,M),T=eh(r,r.FRAGMENT_SHADER,S);r.attachShader(_,L),r.attachShader(_,T),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(L).trim(),W=r.getShaderInfoLog(T).trim();let $=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,T);else{const Y=ih(r,L,"vertex"),B=ih(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+Y+`
`+B)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||W==="")&&(G=!1);G&&(R.diagnostics={runnable:$,programLog:H,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(L),r.deleteShader(T),P=new ma(r,_),b=J0(r,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,V0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=W0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}let h_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new d_(t),e.set(t,n)),n}}class d_{constructor(t){this.id=h_++,this.code=t,this.usedTimes=0}}function f_(i,t,e,n,r,s,a){const o=new $l,l=new u_,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,R,H,O){const W=H.fog,$=O.geometry,G=b.isMeshStandardMaterial?H.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),B=Y&&Y.mapping===Pa?Y.image.height:null,K=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ft=rt!==void 0?rt.length:0;let Ct=0;$.morphAttributes.position!==void 0&&(Ct=1),$.morphAttributes.normal!==void 0&&(Ct=2),$.morphAttributes.color!==void 0&&(Ct=3);let Bt,X,Q,pt;if(K){const Qt=wn[K];Bt=Qt.vertexShader,X=Qt.fragmentShader}else Bt=b.vertexShader,X=b.fragmentShader,l.update(b),Q=l.getVertexShaderID(b),pt=l.getFragmentShaderID(b);const nt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Et=O.isInstancedMesh===!0,Nt=O.isBatchedMesh===!0,ie=!!b.map,kt=!!b.matcap,de=!!Y,N=!!b.aoMap,Ke=!!b.lightMap,zt=!!b.bumpMap,Ht=!!b.normalMap,bt=!!b.displacementMap,le=!!b.emissiveMap,Mt=!!b.metalnessMap,E=!!b.roughnessMap,v=b.anisotropy>0,F=b.clearcoat>0,j=b.dispersion>0,J=b.iridescence>0,q=b.sheen>0,vt=b.transmission>0,at=v&&!!b.anisotropyMap,ht=F&&!!b.clearcoatMap,$t=F&&!!b.clearcoatNormalMap,tt=F&&!!b.clearcoatRoughnessMap,ut=J&&!!b.iridescenceMap,wt=J&&!!b.iridescenceThicknessMap,Tt=q&&!!b.sheenColorMap,dt=q&&!!b.sheenRoughnessMap,Gt=!!b.specularMap,It=!!b.specularColorMap,re=!!b.specularIntensityMap,D=vt&&!!b.transmissionMap,st=vt&&!!b.thicknessMap,V=!!b.gradientMap,Z=!!b.alphaMap,ct=b.alphaTest>0,ot=!!b.alphaHash,Pt=!!b.extensions;let pe=di;b.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(pe=i.toneMapping);const De={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:Bt,fragmentShader:X,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:pt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&O._colorsTexture!==null,instancing:Et,instancingColor:Et&&O.instanceColor!==null,instancingMorph:Et&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Nr,alphaToCoverage:!!b.alphaToCoverage,map:ie,matcap:kt,envMap:de,envMapMode:de&&Y.mapping,envMapCubeUVHeight:B,aoMap:N,lightMap:Ke,bumpMap:zt,normalMap:Ht,displacementMap:d&&bt,emissiveMap:le,normalMapObjectSpace:Ht&&b.normalMapType===rf,normalMapTangentSpace:Ht&&b.normalMapType===yu,metalnessMap:Mt,roughnessMap:E,anisotropy:v,anisotropyMap:at,clearcoat:F,clearcoatMap:ht,clearcoatNormalMap:$t,clearcoatRoughnessMap:tt,dispersion:j,iridescence:J,iridescenceMap:ut,iridescenceThicknessMap:wt,sheen:q,sheenColorMap:Tt,sheenRoughnessMap:dt,specularMap:Gt,specularColorMap:It,specularIntensityMap:re,transmission:vt,transmissionMap:D,thicknessMap:st,gradientMap:V,opaque:b.transparent===!1&&b.blending===ki&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:ot,combine:b.combine,mapUv:ie&&_(b.map.channel),aoMapUv:N&&_(b.aoMap.channel),lightMapUv:Ke&&_(b.lightMap.channel),bumpMapUv:zt&&_(b.bumpMap.channel),normalMapUv:Ht&&_(b.normalMap.channel),displacementMapUv:bt&&_(b.displacementMap.channel),emissiveMapUv:le&&_(b.emissiveMap.channel),metalnessMapUv:Mt&&_(b.metalnessMap.channel),roughnessMapUv:E&&_(b.roughnessMap.channel),anisotropyMapUv:at&&_(b.anisotropyMap.channel),clearcoatMapUv:ht&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:$t&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(b.sheenRoughnessMap.channel),specularMapUv:Gt&&_(b.specularMap.channel),specularColorMapUv:It&&_(b.specularColorMap.channel),specularIntensityMapUv:re&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:st&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ht||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(ie||Z),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Ct,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:ie&&b.map.isVideoTexture===!0&&qt.getTransfer(b.map.colorSpace)===ee,decodeVideoTextureEmissive:le&&b.emissiveMap.isVideoTexture===!0&&qt.getTransfer(b.emissiveMap.colorSpace)===ee,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===En,flipSided:b.side===We,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&b.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function f(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)y.push(R),y.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(w(y,b),M(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function w(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function S(b){const y=g[b.type];let R;if(y){const H=wn[y];R=Zf.clone(H.uniforms)}else R=b.uniforms;return R}function L(b,y){let R;for(let H=0,O=h.length;H<O;H++){const W=h[H];if(W.cacheKey===y){R=W,++R.usedTimes;break}}return R===void 0&&(R=new c_(i,y,b,s),h.push(R)),R}function T(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function p_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function m_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function lh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ch(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||m_),n.length>1&&n.sort(d||lh),r.length>1&&r.sort(d||lh)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function g_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new ch,i.set(n,[a])):r>=s.length?(a=new ch,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function __(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Rt};break;case"SpotLight":e={position:new C,direction:new C,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function v_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let x_=0;function y_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function S_(i){const t=new __,e=v_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const r=new C,s=new ae,a=new ae;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,w=0,M=0,S=0,L=0,T=0,A=0;c.sort(y_);for(let b=0,y=c.length;b<y;b++){const R=c[b],H=R.color,O=R.intensity,W=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=H.r*O,u+=H.g*O,d+=H.b*O;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],O);A++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,B=e.get(R);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=R.shadow.matrix,w++}n.directional[p]=G,p++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(H).multiplyScalar(O),G.distance=W,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[_]=G;const Y=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,Y.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=Y.matrix,R.castShadow){const B=e.get(R);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=$,S++}_++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(H).multiplyScalar(O),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Y=R.shadow,B=e.get(R);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(O),G.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==w||P.numPointShadows!==M||P.numSpotShadows!==S||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=w,P.numPointShadows=M,P.numSpotShadows=S,P.numSpotMaps=L,P.numLightProbes=A,n.version=x_++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const M=c[f];if(M.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(M.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function hh(i){const t=new S_(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function M_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new hh(i),t.set(r,[o])):s>=a.length?(o=new hh(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class b_ extends mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class w_ extends mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`;function A_(i,t,e){let n=new Yl;const r=new yt,s=new yt,a=new ge,o=new b_({depthPacking:nf}),l=new w_,c={},h=e.maxTextureSize,u={[$n]:We,[We]:$n,[En]:En},d=new oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:E_,fragmentShader:T_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let f=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),H=i.state;H.setBlending(ui),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const O=f!==Bn&&this.type===Bn,W=f===Bn&&this.type!==Bn;for(let $=0,G=T.length;$<G;$++){const Y=T[$],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const K=B.getFrameExtents();if(r.multiply(K),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,B.mapSize.y=s.y)),B.map===null||O===!0||W===!0){const ft=this.type!==Bn?{minFilter:be,magFilter:be}:{};B.map!==null&&B.map.dispose(),B.map=new Cn(r.x,r.y,ft),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const rt=B.getViewportCount();for(let ft=0;ft<rt;ft++){const Ct=B.getViewport(ft);a.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),H.viewport(a),B.updateMatrices(Y,ft),n=B.getFrustum(),S(A,P,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Bn&&w(B,P),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,R)};function w(T,A){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Cn(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,P,p,_,null)}function M(T,A,P,b){let y=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)y=R;else if(y=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=y.uuid,O=A.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let $=W[O];$===void 0&&($=y.clone(),W[O]=$,A.addEventListener("dispose",L)),y=$}if(y.visible=A.visible,y.wireframe=A.wireframe,b===Bn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=i.properties.get(y);H.light=P}return y}function S(T,A,P,b,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const O=t.update(T),W=T.material;if(Array.isArray(W)){const $=O.groups;for(let G=0,Y=$.length;G<Y;G++){const B=$[G],K=W[B.materialIndex];if(K&&K.visible){const rt=M(T,K,b,y);T.onBeforeShadow(i,T,A,P,O,rt,B),i.renderBufferDirect(P,null,O,rt,T,B),T.onAfterShadow(i,T,A,P,O,rt,B)}}}else if(W.visible){const $=M(T,W,b,y);T.onBeforeShadow(i,T,A,P,O,$,null),i.renderBufferDirect(P,null,O,$,T,null),T.onAfterShadow(i,T,A,P,O,$,null)}}const H=T.children;for(let O=0,W=H.length;O<W;O++)S(H[O],A,P,b,y)}function L(T){T.target.removeEventListener("dispose",L);for(const P in c){const b=c[P],y=T.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const R_={[Vo]:Wo,[Xo]:Yo,[$o]:jo,[Tr]:qo,[Wo]:Vo,[Yo]:Xo,[jo]:$o,[qo]:Tr};function C_(i,t){function e(){let D=!1;const st=new ge;let V=null;const Z=new ge(0,0,0,0);return{setMask:function(ct){V!==ct&&!D&&(i.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){D=ct},setClear:function(ct,ot,Pt,pe,De){De===!0&&(ct*=pe,ot*=pe,Pt*=pe),st.set(ct,ot,Pt,pe),Z.equals(st)===!1&&(i.clearColor(ct,ot,Pt,pe),Z.copy(st))},reset:function(){D=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,V=null,Z=null,ct=null;return{setReversed:function(ot){if(st!==ot){const Pt=t.get("EXT_clip_control");st?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const pe=ct;ct=null,this.setClear(pe)}st=ot},getReversed:function(){return st},setTest:function(ot){ot?nt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(ot){V!==ot&&!D&&(i.depthMask(ot),V=ot)},setFunc:function(ot){if(st&&(ot=R_[ot]),Z!==ot){switch(ot){case Vo:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ot}},setLocked:function(ot){D=ot},setClear:function(ot){ct!==ot&&(st&&(ot=1-ot),i.clearDepth(ot),ct=ot)},reset:function(){D=!1,V=null,Z=null,ct=null,st=!1}}}function r(){let D=!1,st=null,V=null,Z=null,ct=null,ot=null,Pt=null,pe=null,De=null;return{setTest:function(Qt){D||(Qt?nt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Qt){st!==Qt&&!D&&(i.stencilMask(Qt),st=Qt)},setFunc:function(Qt,on,Ln){(V!==Qt||Z!==on||ct!==Ln)&&(i.stencilFunc(Qt,on,Ln),V=Qt,Z=on,ct=Ln)},setOp:function(Qt,on,Ln){(ot!==Qt||Pt!==on||pe!==Ln)&&(i.stencilOp(Qt,on,Ln),ot=Qt,Pt=on,pe=Ln)},setLocked:function(Qt){D=Qt},setClear:function(Qt){De!==Qt&&(i.clearStencil(Qt),De=Qt)},reset:function(){D=!1,st=null,V=null,Z=null,ct=null,ot=null,Pt=null,pe=null,De=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,M=null,S=null,L=null,T=null,A=new Rt(0,0,0),P=0,b=!1,y=null,R=null,H=null,O=null,W=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=Y>=2);let K=null,rt={};const ft=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),Bt=new ge().fromArray(ft),X=new ge().fromArray(Ct);function Q(D,st,V,Z){const ct=new Uint8Array(4),ot=i.createTexture();i.bindTexture(D,ot),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<V;Pt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(st+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ot}const pt={};pt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(Tr),zt(!1),Ht(mc),nt(i.CULL_FACE),N(ui);function nt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function St(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Et(D,st){return u[D]!==st?(i.bindFramebuffer(D,st),u[D]=st,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Nt(D,st){let V=p,Z=!1;if(D){V=d.get(st),V===void 0&&(V=[],d.set(st,V));const ct=D.textures;if(V.length!==ct.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Pt=ct.length;ot<Pt;ot++)V[ot]=i.COLOR_ATTACHMENT0+ot;V.length=ct.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function ie(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const kt={[Pi]:i.FUNC_ADD,[Rd]:i.FUNC_SUBTRACT,[Cd]:i.FUNC_REVERSE_SUBTRACT};kt[Pd]=i.MIN,kt[Dd]=i.MAX;const de={[Ld]:i.ZERO,[Id]:i.ONE,[Ud]:i.SRC_COLOR,[Ho]:i.SRC_ALPHA,[zd]:i.SRC_ALPHA_SATURATE,[kd]:i.DST_COLOR,[Fd]:i.DST_ALPHA,[Nd]:i.ONE_MINUS_SRC_COLOR,[Go]:i.ONE_MINUS_SRC_ALPHA,[Bd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[Hd]:i.CONSTANT_COLOR,[Gd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,st,V,Z,ct,ot,Pt,pe,De,Qt){if(D===ui){_===!0&&(St(i.BLEND),_=!1);return}if(_===!1&&(nt(i.BLEND),_=!0),D!==Ad){if(D!==m||Qt!==b){if((f!==Pi||S!==Pi)&&(i.blendEquation(i.FUNC_ADD),f=Pi,S=Pi),Qt)switch(D){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ze:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ze:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,M=null,L=null,T=null,A.set(0,0,0),P=0,m=D,b=Qt}return}ct=ct||st,ot=ot||V,Pt=Pt||Z,(st!==f||ct!==S)&&(i.blendEquationSeparate(kt[st],kt[ct]),f=st,S=ct),(V!==w||Z!==M||ot!==L||Pt!==T)&&(i.blendFuncSeparate(de[V],de[Z],de[ot],de[Pt]),w=V,M=Z,L=ot,T=Pt),(pe.equals(A)===!1||De!==P)&&(i.blendColor(pe.r,pe.g,pe.b,De),A.copy(pe),P=De),m=D,b=!1}function Ke(D,st){D.side===En?St(i.CULL_FACE):nt(i.CULL_FACE);let V=D.side===We;st&&(V=!V),zt(V),D.blending===ki&&D.transparent===!1?N(ui):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function Ht(D){D!==wd?(nt(i.CULL_FACE),D!==R&&(D===mc?i.cullFace(i.BACK):D===Ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),R=D}function bt(D){D!==H&&(G&&i.lineWidth(D),H=D)}function le(D,st,V){D?(nt(i.POLYGON_OFFSET_FILL),(O!==st||W!==V)&&(i.polygonOffset(st,V),O=st,W=V)):St(i.POLYGON_OFFSET_FILL)}function Mt(D){D?nt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+$-1),K!==D&&(i.activeTexture(D),K=D)}function v(D,st,V){V===void 0&&(K===null?V=i.TEXTURE0+$-1:V=K);let Z=rt[V];Z===void 0&&(Z={type:void 0,texture:void 0},rt[V]=Z),(Z.type!==D||Z.texture!==st)&&(K!==V&&(i.activeTexture(V),K=V),i.bindTexture(D,st||pt[D]),Z.type=D,Z.texture=st)}function F(){const D=rt[K];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(D){Bt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Bt.copy(D))}function dt(D){X.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Gt(D,st){let V=c.get(st);V===void 0&&(V=new WeakMap,c.set(st,V));let Z=V.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(st,D.name),V.set(D,Z))}function It(D,st){const Z=c.get(st).get(D);l.get(st)!==Z&&(i.uniformBlockBinding(st,Z,D.__bindingPointIndex),l.set(st,Z))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,rt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,M=null,S=null,L=null,T=null,A=new Rt(0,0,0),P=0,b=!1,y=null,R=null,H=null,O=null,W=null,Bt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:nt,disable:St,bindFramebuffer:Et,drawBuffers:Nt,useProgram:ie,setBlending:N,setMaterial:Ke,setFlipSided:zt,setCullFace:Ht,setLineWidth:bt,setPolygonOffset:le,setScissorTest:Mt,activeTexture:E,bindTexture:v,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:ut,texImage3D:wt,updateUBOMapping:Gt,uniformBlockBinding:It,texStorage2D:$t,texStorage3D:tt,texSubImage2D:q,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ht,scissor:Tt,viewport:dt,reset:re}}function uh(i,t,e,n){const r=P_(n);switch(e){case pu:return i*t;case gu:return i*t;case _u:return i*t*2;case Hl:return i*t/r.components*r.byteLength;case Gl:return i*t/r.components*r.byteLength;case vu:return i*t*2/r.components*r.byteLength;case Vl:return i*t*2/r.components*r.byteLength;case mu:return i*t*3/r.components*r.byteLength;case Ue:return i*t*4/r.components*r.byteLength;case Wl:return i*t*4/r.components*r.byteLength;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case da:case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:case el:return Math.max(i,16)*Math.max(t,8)/4;case Jo:case tl:return Math.max(i,8)*Math.max(t,8)/2;case nl:case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pa:case xl:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xu:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ml:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function P_(i){switch(i){case yn:case uu:return{byteLength:1,components:1};case ds:case du:case Vi:return{byteLength:2,components:1};case Bl:case zl:return{byteLength:2,components:4};case zi:case kl:case vn:return{byteLength:4,components:1};case fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function D_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return p?new OffscreenCanvas(E,v):ps("canvas")}function _(E,v,F){let j=1;const J=Mt(E);if((J.width>F||J.height>F)&&(j=F/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(j*J.width),vt=Math.floor(j*J.height);u===void 0&&(u=g(q,vt));const at=v?g(q,vt):u;return at.width=q,at.height=vt,at.getContext("2d").drawImage(E,0,0,q,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+vt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,v,F,j,J=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=v;if(v===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),v===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){const vt=J?Da:qt.getTransfer(j);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=vt===ee?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(E,v){let F;return E?v===null||v===zi||v===Cr?F=i.DEPTH24_STENCIL8:v===vn?F=i.DEPTH32F_STENCIL8:v===ds&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zi||v===Cr?F=i.DEPTH_COMPONENT24:v===vn?F=i.DEPTH_COMPONENT32F:v===ds&&(F=i.DEPTH_COMPONENT16),F}function L(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==be&&E.minFilter!==_e?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function T(E){const v=E.target;v.removeEventListener("dispose",T),P(v),v.isVideoTexture&&h.delete(v)}function A(E){const v=E.target;v.removeEventListener("dispose",A),y(v)}function P(E){const v=n.get(E);if(v.__webglInit===void 0)return;const F=E.source,j=d.get(F);if(j){const J=j[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(E),Object.keys(j).length===0&&d.delete(F)}n.remove(E)}function b(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const F=E.source,j=d.get(F);delete j[v.__cacheKey],a.memory.textures--}function y(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let J=0;J<v.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[j][J]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=E.textures;for(let j=0,J=F.length;j<J;j++){const q=n.get(F[j]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(F[j])}n.remove(E)}let R=0;function H(){R=0}function O(){const E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function W(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function $(E,v){const F=n.get(E);if(E.isVideoTexture&&bt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,E,v);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function G(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){X(F,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function Y(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){X(F,E,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function B(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Q(F,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const K={[qn]:i.REPEAT,[Ce]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},rt={[be]:i.NEAREST,[tf]:i.NEAREST_MIPMAP_NEAREST,[Rs]:i.NEAREST_MIPMAP_LINEAR,[_e]:i.LINEAR,[Ha]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},ft={[sf]:i.NEVER,[uf]:i.ALWAYS,[af]:i.LESS,[Su]:i.LEQUAL,[of]:i.EQUAL,[hf]:i.GEQUAL,[lf]:i.GREATER,[cf]:i.NOTEQUAL};function Ct(E,v){if(v.type===vn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===_e||v.magFilter===Ha||v.magFilter===Rs||v.magFilter===Ui||v.minFilter===_e||v.minFilter===Ha||v.minFilter===Rs||v.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,K[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,K[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,K[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,rt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,rt[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ft[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===be||v.minFilter!==Rs&&v.minFilter!==Ui||v.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Bt(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",T));const j=v.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const q=W(v);if(q!==E.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[q].usedTimes++;const vt=J[E.__cacheKey];vt!==void 0&&(J[E.__cacheKey].usedTimes--,vt.usedTimes===0&&b(v)),E.__cacheKey=q,E.__webglTexture=J[q].texture}return F}function X(E,v,F){let j=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=i.TEXTURE_3D);const J=Bt(E,v),q=v.source;e.bindTexture(j,E.__webglTexture,i.TEXTURE0+F);const vt=n.get(q);if(q.version!==vt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const at=qt.getPrimaries(qt.workingColorSpace),ht=v.colorSpace===oi?null:qt.getPrimaries(v.colorSpace),$t=v.colorSpace===oi||at===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let tt=_(v.image,!1,r.maxTextureSize);tt=le(v,tt);const ut=s.convert(v.format,v.colorSpace),wt=s.convert(v.type);let Tt=M(v.internalFormat,ut,wt,v.colorSpace,v.isVideoTexture);Ct(j,v);let dt;const Gt=v.mipmaps,It=v.isVideoTexture!==!0,re=vt.__version===void 0||J===!0,D=q.dataReady,st=L(v,tt);if(v.isDepthTexture)Tt=S(v.format===Pr,v.type),re&&(It?e.texStorage2D(i.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Tt,tt.width,tt.height,0,ut,wt,null));else if(v.isDataTexture)if(Gt.length>0){It&&re&&e.texStorage2D(i.TEXTURE_2D,st,Tt,Gt[0].width,Gt[0].height);for(let V=0,Z=Gt.length;V<Z;V++)dt=Gt[V],It?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,dt.width,dt.height,ut,wt,dt.data):e.texImage2D(i.TEXTURE_2D,V,Tt,dt.width,dt.height,0,ut,wt,dt.data);v.generateMipmaps=!1}else It?(re&&e.texStorage2D(i.TEXTURE_2D,st,Tt,tt.width,tt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,ut,wt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,tt.width,tt.height,0,ut,wt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){It&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Tt,Gt[0].width,Gt[0].height,tt.depth);for(let V=0,Z=Gt.length;V<Z;V++)if(dt=Gt[V],v.format!==Ue)if(ut!==null)if(It){if(D)if(v.layerUpdates.size>0){const ct=uh(dt.width,dt.height,v.format,v.type);for(const ot of v.layerUpdates){const Pt=dt.data.subarray(ot*ct/dt.data.BYTES_PER_ELEMENT,(ot+1)*ct/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ot,dt.width,dt.height,1,ut,Pt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,dt.width,dt.height,tt.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Tt,dt.width,dt.height,tt.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,dt.width,dt.height,tt.depth,ut,wt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Tt,dt.width,dt.height,tt.depth,0,ut,wt,dt.data)}else{It&&re&&e.texStorage2D(i.TEXTURE_2D,st,Tt,Gt[0].width,Gt[0].height);for(let V=0,Z=Gt.length;V<Z;V++)dt=Gt[V],v.format!==Ue?ut!==null?It?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Tt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,dt.width,dt.height,ut,wt,dt.data):e.texImage2D(i.TEXTURE_2D,V,Tt,dt.width,dt.height,0,ut,wt,dt.data)}else if(v.isDataArrayTexture)if(It){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Tt,tt.width,tt.height,tt.depth),D)if(v.layerUpdates.size>0){const V=uh(tt.width,tt.height,v.format,v.type);for(const Z of v.layerUpdates){const ct=tt.data.subarray(Z*V/tt.data.BYTES_PER_ELEMENT,(Z+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,ut,wt,ct)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,wt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,ut,wt,tt.data);else if(v.isData3DTexture)It?(re&&e.texStorage3D(i.TEXTURE_3D,st,Tt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,wt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,ut,wt,tt.data);else if(v.isFramebufferTexture){if(re)if(It)e.texStorage2D(i.TEXTURE_2D,st,Tt,tt.width,tt.height);else{let V=tt.width,Z=tt.height;for(let ct=0;ct<st;ct++)e.texImage2D(i.TEXTURE_2D,ct,Tt,V,Z,0,ut,wt,null),V>>=1,Z>>=1}}else if(Gt.length>0){if(It&&re){const V=Mt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,st,Tt,V.width,V.height)}for(let V=0,Z=Gt.length;V<Z;V++)dt=Gt[V],It?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ut,wt,dt):e.texImage2D(i.TEXTURE_2D,V,Tt,ut,wt,dt);v.generateMipmaps=!1}else if(It){if(re){const V=Mt(tt);e.texStorage2D(i.TEXTURE_2D,st,Tt,V.width,V.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,wt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Tt,ut,wt,tt);m(v)&&f(j),vt.__version=q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Q(E,v,F){if(v.image.length!==6)return;const j=Bt(E,v),J=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const q=n.get(J);if(J.version!==q.__version||j===!0){e.activeTexture(i.TEXTURE0+F);const vt=qt.getPrimaries(qt.workingColorSpace),at=v.colorSpace===oi?null:qt.getPrimaries(v.colorSpace),ht=v.colorSpace===oi||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const $t=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!$t&&!tt?ut[Z]=_(v.image[Z],!0,r.maxCubemapSize):ut[Z]=tt?v.image[Z].image:v.image[Z],ut[Z]=le(v,ut[Z]);const wt=ut[0],Tt=s.convert(v.format,v.colorSpace),dt=s.convert(v.type),Gt=M(v.internalFormat,Tt,dt,v.colorSpace),It=v.isVideoTexture!==!0,re=q.__version===void 0||j===!0,D=J.dataReady;let st=L(v,wt);Ct(i.TEXTURE_CUBE_MAP,v);let V;if($t){It&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Gt,wt.width,wt.height);for(let Z=0;Z<6;Z++){V=ut[Z].mipmaps;for(let ct=0;ct<V.length;ct++){const ot=V[ct];v.format!==Ue?Tt!==null?It?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,ot.width,ot.height,Tt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,Gt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,ot.width,ot.height,Tt,dt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,Gt,ot.width,ot.height,0,Tt,dt,ot.data)}}}else{if(V=v.mipmaps,It&&re){V.length>0&&st++;const Z=Mt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Gt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){It?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ut[Z].width,ut[Z].height,Tt,dt,ut[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,ut[Z].width,ut[Z].height,0,Tt,dt,ut[Z].data);for(let ct=0;ct<V.length;ct++){const Pt=V[ct].image[Z].image;It?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Pt.width,Pt.height,Tt,dt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,Gt,Pt.width,Pt.height,0,Tt,dt,Pt.data)}}else{It?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Tt,dt,ut[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,Tt,dt,ut[Z]);for(let ct=0;ct<V.length;ct++){const ot=V[ct];It?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Tt,dt,ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,Gt,Tt,dt,ot.image[Z])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),q.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function pt(E,v,F,j,J,q){const vt=s.convert(F.format,F.colorSpace),at=s.convert(F.type),ht=M(F.internalFormat,vt,at,F.colorSpace),$t=n.get(v),tt=n.get(F);if(tt.__renderTarget=v,!$t.__hasExternalTextures){const ut=Math.max(1,v.width>>q),wt=Math.max(1,v.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,q,ht,ut,wt,v.depth,0,vt,at,null):e.texImage2D(J,q,ht,ut,wt,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,tt.__webglTexture,0,zt(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,tt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(E,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const j=v.depthTexture,J=j&&j.isDepthTexture?j.type:null,q=S(v.stencilBuffer,J),vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=zt(v);Ht(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,q,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,E)}else{const j=v.textures;for(let J=0;J<j.length;J++){const q=j[J],vt=s.convert(q.format,q.colorSpace),at=s.convert(q.type),ht=M(q.internalFormat,vt,at,q.colorSpace),$t=zt(v);F&&Ht(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,ht,v.width,v.height):Ht(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,ht,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ht,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const J=j.__webglTexture,q=zt(v);if(v.depthTexture.format===br)Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===Pr)Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Et(E){const v=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=j}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");St(v.__webglFramebuffer,E)}else if(F){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=i.createRenderbuffer(),nt(v.__webglDepthbuffer[j],E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),nt(v.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(E,v,F){const j=n.get(E);v!==void 0&&pt(j.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Et(E)}function ie(E){const v=E.texture,F=n.get(E),j=n.get(v);E.addEventListener("dispose",A);const J=E.textures,q=E.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=v.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ht=0;ht<v.mipmaps.length;ht++)F.__webglFramebuffer[at][ht]=i.createFramebuffer()}else F.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)F.__webglFramebuffer[at]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ht=J.length;at<ht;at++){const $t=n.get(J[at]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Ht(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const ht=J[at];F.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const $t=s.convert(ht.format,ht.colorSpace),tt=s.convert(ht.type),ut=M(ht.internalFormat,$t,tt,ht.colorSpace,E.isXRRenderTarget===!0),wt=zt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ut,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,F.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)pt(F.__webglFramebuffer[at][ht],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else pt(F.__webglFramebuffer[at],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ht=J.length;at<ht;at++){const $t=J[at],tt=n.get($t);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Ct(i.TEXTURE_2D,$t),pt(F.__webglFramebuffer,E,$t,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m($t)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),Ct(at,v),v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)pt(F.__webglFramebuffer[ht],E,v,i.COLOR_ATTACHMENT0,at,ht);else pt(F.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,at,0);m(v)&&f(at),e.unbindTexture()}E.depthBuffer&&Et(E)}function kt(E){const v=E.textures;for(let F=0,j=v.length;F<j;F++){const J=v[F];if(m(J)){const q=w(E),vt=n.get(J).__webglTexture;e.bindTexture(q,vt),f(q),e.unbindTexture()}}}const de=[],N=[];function Ke(E){if(E.samples>0){if(Ht(E)===!1){const v=E.textures,F=E.width,j=E.height;let J=i.COLOR_BUFFER_BIT;const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(E),at=v.length>1;if(at)for(let ht=0;ht<v.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);const $t=n.get(v[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,J,i.NEAREST),l===!0&&(de.length=0,N.length=0,de.push(i.COLOR_ATTACHMENT0+ht),E.depthBuffer&&E.resolveDepthBuffer===!1&&(de.push(q),N.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ht=0;ht<v.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);const $t=n.get(v[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function zt(E){return Math.min(r.maxSamples,E.samples)}function Ht(E){const v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(E){const v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function le(E,v){const F=E.colorSpace,j=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Nr&&F!==oi&&(qt.getTransfer(F)===ee?(j!==Ue||J!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=Nt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Ht}function L_(i,t){function e(n,r=oi){let s;const a=qt.getTransfer(r);if(n===yn)return i.UNSIGNED_BYTE;if(n===Bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return i.BYTE;if(n===du)return i.SHORT;if(n===ds)return i.UNSIGNED_SHORT;if(n===kl)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===pu)return i.ALPHA;if(n===mu)return i.RGB;if(n===Ue)return i.RGBA;if(n===gu)return i.LUMINANCE;if(n===_u)return i.LUMINANCE_ALPHA;if(n===br)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===Gl)return i.RED_INTEGER;if(n===vu)return i.RG;if(n===Vl)return i.RG_INTEGER;if(n===Wl)return i.RGBA_INTEGER;if(n===ha||n===ua||n===da||n===fa)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Qo||n===tl||n===el)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===rl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nl||n===il)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===rl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===vl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===al)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ol)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pa||n===xl||n===yl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===pa)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xu||n===Sl||n===Ml||n===bl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===pa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class I_ extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fe extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U_={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
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

}`;class O_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Pe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new oe({vertexShader:N_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k_ extends Wi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new O_,m=e.getContextAttributes();let f=null,w=null;const M=[],S=[],L=new yt;let T=null;const A=new rn;A.viewport=new ge;const P=new rn;P.viewport=new ge;const b=[A,P],y=new I_;let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=M[X];return Q===void 0&&(Q=new mo,M[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=M[X];return Q===void 0&&(Q=new mo,M[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=M[X];return Q===void 0&&(Q=new mo,M[X]=Q),Q.getHandSpace()};function O(X){const Q=S.indexOf(X.inputSource);if(Q===-1)return;const pt=M[Q];pt!==void 0&&(pt.update(X.inputSource,X.frame,c||a),pt.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let X=0;X<M.length;X++){const Q=S[X];Q!==null&&(S[X]=null,M[X].disconnect(Q))}R=null,H=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,r=null,w=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Cn(p.framebufferWidth,p.framebufferHeight,{format:Ue,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,pt=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Pr:br,pt=m.stencil?Cr:zi);const St={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(St),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Cn(d.textureWidth,d.textureHeight,{format:Ue,type:yn,depthTexture:new Lu(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Bt.setContext(r),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(X){for(let Q=0;Q<X.removed.length;Q++){const pt=X.removed[Q],nt=S.indexOf(pt);nt>=0&&(S[nt]=null,M[nt].disconnect(pt))}for(let Q=0;Q<X.added.length;Q++){const pt=X.added[Q];let nt=S.indexOf(pt);if(nt===-1){for(let Et=0;Et<M.length;Et++)if(Et>=S.length){S.push(pt),nt=Et;break}else if(S[Et]===null){S[Et]=pt,nt=Et;break}if(nt===-1)break}const St=M[nt];St&&St.connect(pt)}}const G=new C,Y=new C;function B(X,Q,pt){G.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(pt.matrixWorld);const nt=G.distanceTo(Y),St=Q.projectionMatrix.elements,Et=pt.projectionMatrix.elements,Nt=St[14]/(St[10]-1),ie=St[14]/(St[10]+1),kt=(St[9]+1)/St[5],de=(St[9]-1)/St[5],N=(St[8]-1)/St[0],Ke=(Et[8]+1)/Et[0],zt=Nt*N,Ht=Nt*Ke,bt=nt/(-N+Ke),le=bt*-N;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(le),X.translateZ(bt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),St[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Mt=Nt+bt,E=ie+bt,v=zt-le,F=Ht+(nt-le),j=kt*ie/E*Mt,J=de*ie/E*Mt;X.projectionMatrix.makePerspective(v,F,j,J,Mt,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function K(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Q=X.near,pt=X.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(pt=_.depthFar)),y.near=P.near=A.near=Q,y.far=P.far=A.far=pt,(R!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,H=y.far),A.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,y.layers.mask=A.layers.mask|P.layers.mask;const nt=X.parent,St=y.cameras;K(y,nt);for(let Et=0;Et<St.length;Et++)K(St[Et],nt);St.length===2?B(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),rt(X,y,nt)};function rt(X,Q,pt){pt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(pt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=fs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ft=null;function Ct(X,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let nt=!1;pt.length!==y.cameras.length&&(y.cameras.length=0,nt=!0);for(let Et=0;Et<pt.length;Et++){const Nt=pt[Et];let ie=null;if(p!==null)ie=p.getViewport(Nt);else{const de=u.getViewSubImage(d,Nt);ie=de.viewport,Et===0&&(t.setRenderTargetTextures(w,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(w))}let kt=b[Et];kt===void 0&&(kt=new rn,kt.layers.enable(Et),kt.viewport=new ge,b[Et]=kt),kt.matrix.fromArray(Nt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Nt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ie.x,ie.y,ie.width,ie.height),Et===0&&(y.matrix.copy(kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),nt===!0&&y.cameras.push(kt)}const St=r.enabledFeatures;if(St&&St.includes("depth-sensing")){const Et=u.getDepthInformation(pt[0]);Et&&Et.isValid&&Et.texture&&_.init(t,Et,r.renderState)}}for(let pt=0;pt<M.length;pt++){const nt=S[pt],St=M[pt];nt!==null&&St!==void 0&&St.update(nt,Q,c||a)}ft&&ft(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Bt=new Du;Bt.setAnimationLoop(Ct),this.setAnimationLoop=function(X){ft=X},this.dispose=function(){}}}const wi=new Pn,B_=new ae;function z_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Cu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,w,M,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,w,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===We&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===We&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),M=w.envMap,S=w.envMapRotation;M&&(m.envMap.value=M,wi.copy(S),wi.x*=-1,wi.y*=-1,wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(wi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===We&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function H_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){const S=M.program;n.uniformBlockBinding(w,S)}function c(w,M){let S=r[w.id];S===void 0&&(g(w),S=h(w),r[w.id]=S,w.addEventListener("dispose",m));const L=M.program;n.updateUBOMapping(w,L);const T=t.render.frame;s[w.id]!==T&&(d(w),s[w.id]=T)}function h(w){const M=u();w.__bindingPointIndex=M;const S=i.createBuffer(),L=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const M=r[w.id],S=w.uniforms,L=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,A=S.length;T<A;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let b=0,y=P.length;b<y;b++){const R=P[b];if(p(R,T,b,L)===!0){const H=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let $=0;$<O.length;$++){const G=O[$],Y=_(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+W,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,M,S,L){const T=w.value,A=M+"_"+S;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{const P=L[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(w){const M=w.uniforms;let S=0;const L=16;for(let A=0,P=M.length;A<P;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,R=b.length;y<R;y++){const H=b[y],O=Array.isArray(H.value)?H.value:[H.value];for(let W=0,$=O.length;W<$;W++){const G=O[W],Y=_(G),B=S%L,K=B%Y.boundary,rt=B+K;S+=K,rt!==0&&L-rt<Y.storage&&(S+=L-rt),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=Y.storage}}}const T=S%L;return T>0&&(S+=L-T),w.__size=S,w.__cache={},this}function _(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class G_{constructor(t={}){const{canvas:e=Rf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const w=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=di,this.toneMappingExposure=1;const S=this;let L=!1,T=0,A=0,P=null,b=-1,y=null;const R=new ge,H=new ge;let O=null;const W=new Rt(0);let $=0,G=e.width,Y=e.height,B=1,K=null,rt=null;const ft=new ge(0,0,G,Y),Ct=new ge(0,0,G,Y);let Bt=!1;const X=new Yl;let Q=!1,pt=!1;const nt=new ae,St=new ae,Et=new C,Nt=new ge,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function de(){return P===null?B:1}let N=n;function Ke(x,I){return e.getContext(x,I)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fl}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){const I="webgl2";if(N=Ke(I,x),N===null)throw Ke(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let zt,Ht,bt,le,Mt,E,v,F,j,J,q,vt,at,ht,$t,tt,ut,wt,Tt,dt,Gt,It,re,D;function st(){zt=new qg(N),zt.init(),It=new L_(N,zt),Ht=new Hg(N,zt,t,It),bt=new C_(N,zt),Ht.reverseDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),le=new Zg(N),Mt=new p_,E=new D_(N,zt,bt,Mt,Ht,It,le),v=new Vg(S),F=new $g(S),j=new ip(N),re=new Bg(N,j),J=new Yg(N,j,le,re),q=new Jg(N,J,j,le),Tt=new Kg(N,Ht,E),tt=new Gg(Mt),vt=new f_(S,v,F,zt,Ht,re,tt),at=new z_(S,Mt),ht=new g_,$t=new M_(zt),wt=new kg(S,v,F,bt,q,p,l),ut=new A_(S,q,Ht),D=new H_(N,le,Ht,bt),dt=new zg(N,zt,le),Gt=new jg(N,zt,le),le.programs=vt.programs,S.capabilities=Ht,S.extensions=zt,S.properties=Mt,S.renderLists=ht,S.shadowMap=ut,S.state=bt,S.info=le}st();const V=new k_(S,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=zt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=zt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(x){x!==void 0&&(B=x,this.setSize(G,Y,!1))},this.getSize=function(x){return x.set(G,Y)},this.setSize=function(x,I,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,Y=I,e.width=Math.floor(x*B),e.height=Math.floor(I*B),k===!0&&(e.style.width=x+"px",e.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(G*B,Y*B).floor()},this.setDrawingBufferSize=function(x,I,k){G=x,Y=I,B=k,e.width=Math.floor(x*k),e.height=Math.floor(I*k),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(ft)},this.setViewport=function(x,I,k,z){x.isVector4?ft.set(x.x,x.y,x.z,x.w):ft.set(x,I,k,z),bt.viewport(R.copy(ft).multiplyScalar(B).round())},this.getScissor=function(x){return x.copy(Ct)},this.setScissor=function(x,I,k,z){x.isVector4?Ct.set(x.x,x.y,x.z,x.w):Ct.set(x,I,k,z),bt.scissor(H.copy(Ct).multiplyScalar(B).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(x){bt.setScissorTest(Bt=x)},this.setOpaqueSort=function(x){K=x},this.setTransparentSort=function(x){rt=x},this.getClearColor=function(x){return x.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(x=!0,I=!0,k=!0){let z=0;if(x){let U=!1;if(P!==null){const et=P.texture.format;U=et===Wl||et===Vl||et===Gl}if(U){const et=P.texture.type,lt=et===yn||et===zi||et===ds||et===Cr||et===Bl||et===zl,mt=wt.getClearColor(),gt=wt.getClearAlpha(),At=mt.r,Dt=mt.g,_t=mt.b;lt?(g[0]=At,g[1]=Dt,g[2]=_t,g[3]=gt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=At,_[1]=Dt,_[2]=_t,_[3]=gt,N.clearBufferiv(N.COLOR,0,_))}else z|=N.COLOR_BUFFER_BIT}I&&(z|=N.DEPTH_BUFFER_BIT),k&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ht.dispose(),$t.dispose(),Mt.dispose(),v.dispose(),F.dispose(),q.dispose(),re.dispose(),D.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",oc),V.removeEventListener("sessionend",lc),vi.stop()};function Z(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const x=le.autoReset,I=ut.enabled,k=ut.autoUpdate,z=ut.needsUpdate,U=ut.type;st(),le.autoReset=x,ut.enabled=I,ut.autoUpdate=k,ut.needsUpdate=z,ut.type=U}function ot(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Pt(x){const I=x.target;I.removeEventListener("dispose",Pt),pe(I)}function pe(x){De(x),Mt.remove(x)}function De(x){const I=Mt.get(x).programs;I!==void 0&&(I.forEach(function(k){vt.releaseProgram(k)}),x.isShaderMaterial&&vt.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,k,z,U,et){I===null&&(I=ie);const lt=U.isMesh&&U.matrixWorld.determinant()<0,mt=Sd(x,I,k,z,U);bt.setMaterial(z,lt);let gt=k.index,At=1;if(z.wireframe===!0){if(gt=J.getWireframeAttribute(k),gt===void 0)return;At=2}const Dt=k.drawRange,_t=k.attributes.position;let Yt=Dt.start*At,se=(Dt.start+Dt.count)*At;et!==null&&(Yt=Math.max(Yt,et.start*At),se=Math.min(se,(et.start+et.count)*At)),gt!==null?(Yt=Math.max(Yt,0),se=Math.min(se,gt.count)):_t!=null&&(Yt=Math.max(Yt,0),se=Math.min(se,_t.count));const ce=se-Yt;if(ce<0||ce===1/0)return;re.setup(U,z,mt,k,gt);let He,Kt=dt;if(gt!==null&&(He=j.get(gt),Kt=Gt,Kt.setIndex(He)),U.isMesh)z.wireframe===!0?(bt.setLineWidth(z.wireframeLinewidth*de()),Kt.setMode(N.LINES)):Kt.setMode(N.TRIANGLES);else if(U.isLine){let xt=z.linewidth;xt===void 0&&(xt=1),bt.setLineWidth(xt*de()),U.isLineSegments?Kt.setMode(N.LINES):U.isLineLoop?Kt.setMode(N.LINE_LOOP):Kt.setMode(N.LINE_STRIP)}else U.isPoints?Kt.setMode(N.POINTS):U.isSprite&&Kt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const xt=U._multiDrawStarts,In=U._multiDrawCounts,Jt=U._multiDrawCount,ln=gt?j.get(gt).bytesPerElement:1,qi=Mt.get(z).currentProgram.getUniforms();for(let Xe=0;Xe<Jt;Xe++)qi.setValue(N,"_gl_DrawID",Xe),Kt.render(xt[Xe]/ln,In[Xe])}else if(U.isInstancedMesh)Kt.renderInstances(Yt,ce,U.count);else if(k.isInstancedBufferGeometry){const xt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,In=Math.min(k.instanceCount,xt);Kt.renderInstances(Yt,ce,In)}else Kt.render(Yt,ce)};function Qt(x,I,k){x.transparent===!0&&x.side===En&&x.forceSinglePass===!1?(x.side=We,x.needsUpdate=!0,As(x,I,k),x.side=$n,x.needsUpdate=!0,As(x,I,k),x.side=En):As(x,I,k)}this.compile=function(x,I,k=null){k===null&&(k=x),f=$t.get(k),f.init(I),M.push(f),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),x!==k&&x.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const z=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){const mt=et[lt];Qt(mt,k,U),z.add(mt)}else Qt(et,k,U),z.add(et)}),M.pop(),f=null,z},this.compileAsync=function(x,I,k=null){const z=this.compile(x,I,k);return new Promise(U=>{function et(){if(z.forEach(function(lt){Mt.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){U(x);return}setTimeout(et,10)}zt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let on=null;function Ln(x){on&&on(x)}function oc(){vi.stop()}function lc(){vi.start()}const vi=new Du;vi.setAnimationLoop(Ln),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(x){on=x,V.setAnimationLoop(x),x===null?vi.stop():vi.start()},V.addEventListener("sessionstart",oc),V.addEventListener("sessionend",lc),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,I,P),f=$t.get(x,M.length),f.init(I),M.push(f),St.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(St),pt=this.localClippingEnabled,Q=tt.init(this.clippingPlanes,pt),m=ht.get(x,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){const et=S.xr.getDepthSensingMesh();et!==null&&za(et,I,-1/0,S.sortObjects)}za(x,I,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(K,rt),kt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,kt&&wt.addToRenderList(m,x),this.info.render.frame++,Q===!0&&tt.beginShadows();const k=f.state.shadowsArray;ut.render(k,x,I),Q===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(f.setupLights(),I.isArrayCamera){const et=I.cameras;if(U.length>0)for(let lt=0,mt=et.length;lt<mt;lt++){const gt=et[lt];hc(z,U,x,gt)}kt&&wt.render(x);for(let lt=0,mt=et.length;lt<mt;lt++){const gt=et[lt];cc(m,x,gt,gt.viewport)}}else U.length>0&&hc(z,U,x,I),kt&&wt.render(x),cc(m,x,I);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),x.isScene===!0&&x.onAfterRender(S,x,I),re.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],Q===!0&&tt.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function za(x,I,k,z){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||X.intersectsSprite(x)){z&&Nt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(St);const lt=q.update(x),mt=x.material;mt.visible&&m.push(x,lt,mt,k,Nt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||X.intersectsObject(x))){const lt=q.update(x),mt=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Nt.copy(x.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Nt.copy(lt.boundingSphere.center)),Nt.applyMatrix4(x.matrixWorld).applyMatrix4(St)),Array.isArray(mt)){const gt=lt.groups;for(let At=0,Dt=gt.length;At<Dt;At++){const _t=gt[At],Yt=mt[_t.materialIndex];Yt&&Yt.visible&&m.push(x,lt,Yt,k,Nt.z,_t)}}else mt.visible&&m.push(x,lt,mt,k,Nt.z,null)}}const et=x.children;for(let lt=0,mt=et.length;lt<mt;lt++)za(et[lt],I,k,z)}function cc(x,I,k,z){const U=x.opaque,et=x.transmissive,lt=x.transparent;f.setupLightsView(k),Q===!0&&tt.setGlobalState(S.clippingPlanes,k),z&&bt.viewport(R.copy(z)),U.length>0&&Ts(U,I,k),et.length>0&&Ts(et,I,k),lt.length>0&&Ts(lt,I,k),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function hc(x,I,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Cn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Vi:yn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const et=f.state.transmissionRenderTarget[z.id],lt=z.viewport||R;et.setSize(lt.z,lt.w);const mt=S.getRenderTarget();S.setRenderTarget(et),S.getClearColor(W),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),kt&&wt.render(k);const gt=S.toneMapping;S.toneMapping=di;const At=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),Q===!0&&tt.setGlobalState(S.clippingPlanes,z),Ts(x,k,z),E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let _t=0,Yt=I.length;_t<Yt;_t++){const se=I[_t],ce=se.object,He=se.geometry,Kt=se.material,xt=se.group;if(Kt.side===En&&ce.layers.test(z.layers)){const In=Kt.side;Kt.side=We,Kt.needsUpdate=!0,uc(ce,k,z,He,Kt,xt),Kt.side=In,Kt.needsUpdate=!0,Dt=!0}}Dt===!0&&(E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et))}S.setRenderTarget(mt),S.setClearColor(W,$),At!==void 0&&(z.viewport=At),S.toneMapping=gt}function Ts(x,I,k){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,et=x.length;U<et;U++){const lt=x[U],mt=lt.object,gt=lt.geometry,At=z===null?lt.material:z,Dt=lt.group;mt.layers.test(k.layers)&&uc(mt,I,k,gt,At,Dt)}}function uc(x,I,k,z,U,et){x.onBeforeRender(S,I,k,z,U,et),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(S,I,k,z,x,et),U.transparent===!0&&U.side===En&&U.forceSinglePass===!1?(U.side=We,U.needsUpdate=!0,S.renderBufferDirect(k,I,z,U,x,et),U.side=$n,U.needsUpdate=!0,S.renderBufferDirect(k,I,z,U,x,et),U.side=En):S.renderBufferDirect(k,I,z,U,x,et),x.onAfterRender(S,I,k,z,U,et)}function As(x,I,k){I.isScene!==!0&&(I=ie);const z=Mt.get(x),U=f.state.lights,et=f.state.shadowsArray,lt=U.state.version,mt=vt.getParameters(x,U.state,et,I,k),gt=vt.getProgramCacheKey(mt);let At=z.programs;z.environment=x.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(x.isMeshStandardMaterial?F:v).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,At===void 0&&(x.addEventListener("dispose",Pt),At=new Map,z.programs=At);let Dt=At.get(gt);if(Dt!==void 0){if(z.currentProgram===Dt&&z.lightsStateVersion===lt)return fc(x,mt),Dt}else mt.uniforms=vt.getUniforms(x),x.onBeforeCompile(mt,S),Dt=vt.acquireProgram(mt,gt),At.set(gt,Dt),z.uniforms=mt.uniforms;const _t=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(_t.clippingPlanes=tt.uniform),fc(x,mt),z.needsLights=bd(x),z.lightsStateVersion=lt,z.needsLights&&(_t.ambientLightColor.value=U.state.ambient,_t.lightProbe.value=U.state.probe,_t.directionalLights.value=U.state.directional,_t.directionalLightShadows.value=U.state.directionalShadow,_t.spotLights.value=U.state.spot,_t.spotLightShadows.value=U.state.spotShadow,_t.rectAreaLights.value=U.state.rectArea,_t.ltc_1.value=U.state.rectAreaLTC1,_t.ltc_2.value=U.state.rectAreaLTC2,_t.pointLights.value=U.state.point,_t.pointLightShadows.value=U.state.pointShadow,_t.hemisphereLights.value=U.state.hemi,_t.directionalShadowMap.value=U.state.directionalShadowMap,_t.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_t.spotShadowMap.value=U.state.spotShadowMap,_t.spotLightMatrix.value=U.state.spotLightMatrix,_t.spotLightMap.value=U.state.spotLightMap,_t.pointShadowMap.value=U.state.pointShadowMap,_t.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Dt,z.uniformsList=null,Dt}function dc(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=ma.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function fc(x,I){const k=Mt.get(x);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Sd(x,I,k,z,U){I.isScene!==!0&&(I=ie),E.resetTextureUnits();const et=I.fog,lt=z.isMeshStandardMaterial?I.environment:null,mt=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Nr,gt=(z.isMeshStandardMaterial?F:v).get(z.envMap||lt),At=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Dt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),_t=!!k.morphAttributes.position,Yt=!!k.morphAttributes.normal,se=!!k.morphAttributes.color;let ce=di;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ce=S.toneMapping);const He=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Kt=He!==void 0?He.length:0,xt=Mt.get(z),In=f.state.lights;if(Q===!0&&(pt===!0||x!==y)){const Je=x===y&&z.id===b;tt.setState(z,x,Je)}let Jt=!1;z.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==In.state.version||xt.outputColorSpace!==mt||U.isBatchedMesh&&xt.batching===!1||!U.isBatchedMesh&&xt.batching===!0||U.isBatchedMesh&&xt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&xt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&xt.instancing===!1||!U.isInstancedMesh&&xt.instancing===!0||U.isSkinnedMesh&&xt.skinning===!1||!U.isSkinnedMesh&&xt.skinning===!0||U.isInstancedMesh&&xt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&xt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&xt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&xt.instancingMorph===!1&&U.morphTexture!==null||xt.envMap!==gt||z.fog===!0&&xt.fog!==et||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==tt.numPlanes||xt.numIntersection!==tt.numIntersection)||xt.vertexAlphas!==At||xt.vertexTangents!==Dt||xt.morphTargets!==_t||xt.morphNormals!==Yt||xt.morphColors!==se||xt.toneMapping!==ce||xt.morphTargetsCount!==Kt)&&(Jt=!0):(Jt=!0,xt.__version=z.version);let ln=xt.currentProgram;Jt===!0&&(ln=As(z,I,U));let qi=!1,Xe=!1,Br=!1;const he=ln.getUniforms(),Mn=xt.uniforms;if(bt.useProgram(ln.program)&&(qi=!0,Xe=!0,Br=!0),z.id!==b&&(b=z.id,Xe=!0),qi||y!==x){bt.buffers.depth.getReversed()?(nt.copy(x.projectionMatrix),Pf(nt),Df(nt),he.setValue(N,"projectionMatrix",nt)):he.setValue(N,"projectionMatrix",x.projectionMatrix),he.setValue(N,"viewMatrix",x.matrixWorldInverse);const Zn=he.map.cameraPosition;Zn!==void 0&&Zn.setValue(N,Et.setFromMatrixPosition(x.matrixWorld)),Ht.logarithmicDepthBuffer&&he.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&he.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Xe=!0,Br=!0)}if(U.isSkinnedMesh){he.setOptional(N,U,"bindMatrix"),he.setOptional(N,U,"bindMatrixInverse");const Je=U.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),he.setValue(N,"boneTexture",Je.boneTexture,E))}U.isBatchedMesh&&(he.setOptional(N,U,"batchingTexture"),he.setValue(N,"batchingTexture",U._matricesTexture,E),he.setOptional(N,U,"batchingIdTexture"),he.setValue(N,"batchingIdTexture",U._indirectTexture,E),he.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&he.setValue(N,"batchingColorTexture",U._colorsTexture,E));const zr=k.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0)&&Tt.update(U,k,ln),(Xe||xt.receiveShadow!==U.receiveShadow)&&(xt.receiveShadow=U.receiveShadow,he.setValue(N,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Mn.envMap.value=gt,Mn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Mn.envMapIntensity.value=I.environmentIntensity),Xe&&(he.setValue(N,"toneMappingExposure",S.toneMappingExposure),xt.needsLights&&Md(Mn,Br),et&&z.fog===!0&&at.refreshFogUniforms(Mn,et),at.refreshMaterialUniforms(Mn,z,B,Y,f.state.transmissionRenderTarget[x.id]),ma.upload(N,dc(xt),Mn,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ma.upload(N,dc(xt),Mn,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&he.setValue(N,"center",U.center),he.setValue(N,"modelViewMatrix",U.modelViewMatrix),he.setValue(N,"normalMatrix",U.normalMatrix),he.setValue(N,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Je=z.uniformsGroups;for(let Zn=0,Kn=Je.length;Zn<Kn;Zn++){const pc=Je[Zn];D.update(pc,ln),D.bind(pc,ln)}}return ln}function Md(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function bd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(x,I,k){Mt.get(x.texture).__webglTexture=I,Mt.get(x.depthTexture).__webglTexture=k;const z=Mt.get(x);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,I){const k=Mt.get(x);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,k=0){P=x,T=I,A=k;let z=!0,U=null,et=!1,lt=!1;if(x){const gt=Mt.get(x);if(gt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(gt.__webglFramebuffer===void 0)E.setupRenderTarget(x);else if(gt.__hasExternalTextures)E.rebindTextures(x,Mt.get(x.texture).__webglTexture,Mt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const _t=x.depthTexture;if(gt.__boundDepthTexture!==_t){if(_t!==null&&Mt.has(_t)&&(x.width!==_t.image.width||x.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(x)}}const At=x.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(lt=!0);const Dt=Mt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Dt[I])?U=Dt[I][k]:U=Dt[I],et=!0):x.samples>0&&E.useMultisampledRTT(x)===!1?U=Mt.get(x).__webglMultisampledFramebuffer:Array.isArray(Dt)?U=Dt[k]:U=Dt,R.copy(x.viewport),H.copy(x.scissor),O=x.scissorTest}else R.copy(ft).multiplyScalar(B).floor(),H.copy(Ct).multiplyScalar(B).floor(),O=Bt;if(bt.bindFramebuffer(N.FRAMEBUFFER,U)&&z&&bt.drawBuffers(x,U),bt.viewport(R),bt.scissor(H),bt.setScissorTest(O),et){const gt=Mt.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,k)}else if(lt){const gt=Mt.get(x.texture),At=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,gt.__webglTexture,k||0,At)}b=-1},this.readRenderTargetPixels=function(x,I,k,z,U,et,lt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Mt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){bt.bindFramebuffer(N.FRAMEBUFFER,mt);try{const gt=x.texture,At=gt.format,Dt=gt.type;if(!Ht.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-z&&k>=0&&k<=x.height-U&&N.readPixels(I,k,z,U,It.convert(At),It.convert(Dt),et)}finally{const gt=P!==null?Mt.get(P).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(x,I,k,z,U,et,lt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Mt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){const gt=x.texture,At=gt.format,Dt=gt.type;if(!Ht.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=x.width-z&&k>=0&&k<=x.height-U){bt.bindFramebuffer(N.FRAMEBUFFER,mt);const _t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.bufferData(N.PIXEL_PACK_BUFFER,et.byteLength,N.STREAM_READ),N.readPixels(I,k,z,U,It.convert(At),It.convert(Dt),0);const Yt=P!==null?Mt.get(P).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,Yt);const se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Cf(N,se,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,et),N.deleteBuffer(_t),N.deleteSync(se),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,I=null,k=0){x.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,x=arguments[1]);const z=Math.pow(2,-k),U=Math.floor(x.image.width*z),et=Math.floor(x.image.height*z),lt=I!==null?I.x:0,mt=I!==null?I.y:0;E.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,lt,mt,U,et),bt.unbindTexture()},this.copyTextureToTexture=function(x,I,k=null,z=null,U=0){x.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,x=arguments[1],I=arguments[2],U=arguments[3]||0,k=null);let et,lt,mt,gt,At,Dt,_t,Yt,se;const ce=x.isCompressedTexture?x.mipmaps[U]:x.image;k!==null?(et=k.max.x-k.min.x,lt=k.max.y-k.min.y,mt=k.isBox3?k.max.z-k.min.z:1,gt=k.min.x,At=k.min.y,Dt=k.isBox3?k.min.z:0):(et=ce.width,lt=ce.height,mt=ce.depth||1,gt=0,At=0,Dt=0),z!==null?(_t=z.x,Yt=z.y,se=z.z):(_t=0,Yt=0,se=0);const He=It.convert(I.format),Kt=It.convert(I.type);let xt;I.isData3DTexture?(E.setTexture3D(I,0),xt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(E.setTexture2DArray(I,0),xt=N.TEXTURE_2D_ARRAY):(E.setTexture2D(I,0),xt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const In=N.getParameter(N.UNPACK_ROW_LENGTH),Jt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ln=N.getParameter(N.UNPACK_SKIP_PIXELS),qi=N.getParameter(N.UNPACK_SKIP_ROWS),Xe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ce.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gt),N.pixelStorei(N.UNPACK_SKIP_ROWS,At),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Dt);const Br=x.isDataArrayTexture||x.isData3DTexture,he=I.isDataArrayTexture||I.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const Mn=Mt.get(x),zr=Mt.get(I),Je=Mt.get(Mn.__renderTarget),Zn=Mt.get(zr.__renderTarget);bt.bindFramebuffer(N.READ_FRAMEBUFFER,Je.__webglFramebuffer),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Kn=0;Kn<mt;Kn++)Br&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(x).__webglTexture,U,Dt+Kn),x.isDepthTexture?(he&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(I).__webglTexture,U,se+Kn),N.blitFramebuffer(gt,At,et,lt,_t,Yt,et,lt,N.DEPTH_BUFFER_BIT,N.NEAREST)):he?N.copyTexSubImage3D(xt,U,_t,Yt,se+Kn,gt,At,et,lt):N.copyTexSubImage2D(xt,U,_t,Yt,se+Kn,gt,At,et,lt);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else he?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(xt,U,_t,Yt,se,et,lt,mt,He,Kt,ce.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(xt,U,_t,Yt,se,et,lt,mt,He,ce.data):N.texSubImage3D(xt,U,_t,Yt,se,et,lt,mt,He,Kt,ce):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_t,Yt,et,lt,He,Kt,ce.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_t,Yt,ce.width,ce.height,He,ce.data):N.texSubImage2D(N.TEXTURE_2D,U,_t,Yt,et,lt,He,Kt,ce);N.pixelStorei(N.UNPACK_ROW_LENGTH,In),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ln),N.pixelStorei(N.UNPACK_SKIP_ROWS,qi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xe),U===0&&I.generateMipmaps&&N.generateMipmap(xt),bt.unbindTexture()},this.copyTextureToTexture3D=function(x,I,k=null,z=null,U=0){return x.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,x=arguments[2],I=arguments[3],U=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,I,k,z,U)},this.initRenderTarget=function(x){Mt.get(x).__webglFramebuffer===void 0&&E.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),bt.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,bt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class xa extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class V_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wl,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new C;class ya{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new jt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ya(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ou extends mi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let lr;const Xr=new C,cr=new C,hr=new C,ur=new yt,$r=new yt,ku=new ae,Zs=new C,qr=new C,Ks=new C,dh=new yt,go=new yt,fh=new yt;class W_ extends we{constructor(t=new Ou){if(super(),this.isSprite=!0,this.type="Sprite",lr===void 0){lr=new Ft;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new V_(e,5);lr.setIndex([0,1,2,0,2,3]),lr.setAttribute("position",new ya(n,3,0,!1)),lr.setAttribute("uv",new ya(n,2,3,!1))}this.geometry=lr,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),ku.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-hr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Js(Zs.set(-.5,-.5,0),hr,a,cr,r,s),Js(qr.set(.5,-.5,0),hr,a,cr,r,s),Js(Ks.set(.5,.5,0),hr,a,cr,r,s),dh.set(0,0),go.set(1,0),fh.set(1,1);let o=t.ray.intersectTriangle(Zs,qr,Ks,!1,Xr);if(o===null&&(Js(qr.set(-.5,.5,0),hr,a,cr,r,s),go.set(0,1),o=t.ray.intersectTriangle(Zs,Ks,qr,!1,Xr),o===null))return;const l=t.ray.origin.distanceTo(Xr);l<t.near||l>t.far||e.push({distance:l,point:Xr.clone(),uv:sn.getInterpolation(Xr,Zs,qr,Ks,dh,go,fh,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Js(i,t,e,n,r,s){ur.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?($r.x=s*ur.x-r*ur.y,$r.y=r*ur.x+s*ur.y):$r.copy(ur),i.copy(t),i.x+=$r.x,i.y+=$r.y,i.applyMatrix4(ku)}class Ua extends Pe{constructor(t=null,e=1,n=1,r,s,a,o,l,c=be,h=be,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi extends mi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sa=new C,Ma=new C,ph=new ae,Yr=new ys,Qs=new xs,_o=new C,mh=new C;class Bu extends we{constructor(t=new Ft,e=new Gi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Sa.fromBufferAttribute(e,r-1),Ma.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Sa.distanceTo(Ma);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Qs.radius+=s,t.ray.intersectsSphere(Qs)===!1)return;ph.copy(r).invert(),Yr.copy(t.ray).applyMatrix4(ph);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),w=h.getX(_+1),M=ta(this,t,Yr,l,f,w);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=ta(this,t,Yr,l,_,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=ta(this,t,Yr,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=ta(this,t,Yr,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ta(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(Sa.fromBufferAttribute(a,r),Ma.fromBufferAttribute(a,s),e.distanceSqToSegment(Sa,Ma,_o,mh)>n)return;_o.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(_o);if(!(l<t.near||l>t.far))return{distance:l,point:mh.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const gh=new C,_h=new C;class Ni extends Bu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)gh.fromBufferAttribute(e,r),_h.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+gh.distanceTo(_h);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zu extends mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vh=new ae,Tl=new ys,ea=new xs,na=new C;class Sn extends we{constructor(t=new Ft,e=new zu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),ea.radius+=s,t.ray.intersectsSphere(ea)===!1)return;vh.copy(r).invert(),Tl.copy(t.ray).applyMatrix4(vh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);na.fromBufferAttribute(u,m),xh(na,m,l,r,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)na.fromBufferAttribute(u,g),xh(na,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xh(i,t,e,n,r,s,a){const o=Tl.distanceSqToPoint(i);if(o<e){const l=new C;Tl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Zl extends Pe{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ir extends Ft{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new C,h=new yt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Na extends Ft{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;w(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(p,2));function w(){const S=new C,L=new C;let T=0;const A=(e-t)/n;for(let P=0;P<=s;P++){const b=[],y=P/s,R=y*(e-t)+t;for(let H=0;H<=r;H++){const O=H/r,W=O*l+o,$=Math.sin(W),G=Math.cos(W);L.x=R*$,L.y=-y*n+m,L.z=R*G,u.push(L.x,L.y,L.z),S.set($,A,G).normalize(),d.push(S.x,S.y,S.z),p.push(O,1-y),b.push(g++)}_.push(b)}for(let P=0;P<r;P++)for(let b=0;b<s;b++){const y=_[b][P],R=_[b+1][P],H=_[b+1][P+1],O=_[b][P+1];(t>0||b!==0)&&(h.push(y,R,O),T+=3),(e>0||b!==s-1)&&(h.push(R,H,O),T+=3)}c.addGroup(f,T,0),f+=T}function M(S){const L=g,T=new yt,A=new C;let P=0;const b=S===!0?t:e,y=S===!0?1:-1;for(let H=1;H<=r;H++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const R=g;for(let H=0;H<=r;H++){const W=H/r*l+o,$=Math.cos(W),G=Math.sin(W);A.x=b*G,A.y=m*y,A.z=b*$,u.push(A.x,A.y,A.z),d.push(0,y,0),T.x=$*.5+.5,T.y=G*.5*y+.5,p.push(T.x,T.y),g++}for(let H=0;H<r;H++){const O=L+H,W=R+H;S===!0?h.push(W,W+1,O):h.push(W+1,W,O),P+=3}c.addGroup(f,P,S===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Na(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kl extends Ft{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/r,p=new C,g=new yt;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const f=s+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<r;_++){const m=_*(n+1);for(let f=0;f<n;f++){const w=f+m,M=w,S=w+n+1,L=w+n+2,T=w+1;o.push(M,S,T),o.push(S,L,T)}}this.setIndex(o),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class an extends Ft{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,d=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const w=[],M=f/n;let S=0;f===0&&a===0?S=.5/e:f===n&&l===Math.PI&&(S=-.5/e);for(let L=0;L<=e;L++){const T=L/e;u.x=-t*Math.cos(r+T*s)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(r+T*s)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+S,1-M),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){const M=h[f][w+1],S=h[f][w],L=h[f+1][w],T=h[f+1][w+1];(f!==0||a>0)&&p.push(M,S,T),(f!==n-1||l<Math.PI)&&p.push(S,L,T)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jl extends Ft{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,w=(r+1)*p+g;a.push(_,m,w),a.push(m,f,w)}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Hu extends mi{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const yh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class X_{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const $_=new X_;class Fa{constructor(t){this.manager=t!==void 0?t:$_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gu extends Fa{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=yh.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=ps("img");function l(){h(),yh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class q_ extends Fa{constructor(t){super(t)}load(t,e,n,r){const s=new ql;s.colorSpace=me;const a=new Gu(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,r)}for(let c=0;c<t.length;++c)l(c);return s}}class Oa extends Fa{constructor(t){super(t)}load(t,e,n,r){const s=new Pe,a=new Gu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Vu extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const vo=new ae,Sh=new C,Mh=new C;class Y_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yl,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),Mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mh),e.updateMatrixWorld(),vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class j_ extends Y_{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Z_ extends Vu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new j_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class K_ extends Vu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const bh=new ae;class J_{constructor(t,e,n=0,r=1/0){this.ray=new ys(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new $l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(t,e=!0,n=[]){return Al(t,this,n,e),n.sort(wh),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Al(t[r],this,n,e);return n.sort(wh),n}}function wh(i,t){return i.distance-t.distance}function Al(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Al(s[a],t,e,!0)}}class Eh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Q_ extends Wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);const tv=23.44*Math.PI/180;class ev{mesh;earth;nightOverlay;sunDirUniform;phongMaterial;flatMaterial;terminatorEnabled=!0;nightLightsEnabled=!0;constructor(){const t=new Oa,e=t.load("textures/earth_daymap_2k.jpg"),n=t.load("textures/earth_nightmap_2k.jpg"),r=t.load("textures/earth_normal_2048.jpg"),s=t.load("textures/earth_specular_2048.jpg");e.colorSpace=me,n.colorSpace=me;const a=new an(1,128,64);this.phongMaterial=new Hu({map:e,normalMap:r,normalScale:new yt(.85,.85),specularMap:s,specular:new Rt(3364215),shininess:18}),this.flatMaterial=new Ye({map:e,color:12303291}),this.earth=new Vt(a,this.phongMaterial),this.sunDirUniform={value:new C(1,0,0)};const o=new oe({uniforms:{uMap:{value:n},uSunDirection:this.sunDirUniform,uIntensity:{value:1.6}},vertexShader:`
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
      `,transparent:!0,blending:Ze,depthWrite:!1}),l=new an(1.0008,128,64);this.nightOverlay=new Vt(l,o),this.mesh=new fe,this.mesh.rotation.z=tv,this.mesh.add(this.earth),this.mesh.add(this.nightOverlay)}setSunDirection(t){this.sunDirUniform.value.copy(t)}setRotationY(t){this.earth.rotation.y=t,this.nightOverlay.rotation.y=t}setTerminatorVisible(t){this.terminatorEnabled=t,this.earth.material=t?this.phongMaterial:this.flatMaterial,this.updateNightOverlay()}setNightLightsVisible(t){this.nightLightsEnabled=t,this.updateNightOverlay()}updateNightOverlay(){this.nightOverlay.visible=this.terminatorEnabled&&this.nightLightsEnabled}attachToEarth(t){this.earth.add(t)}worldToLatLon(t){const e=this.earth.worldToLocal(t.clone()).normalize(),n=Math.asin(Math.max(-1,Math.min(1,e.y)))*180/Math.PI,r=Math.atan2(-e.z,e.x)*180/Math.PI;return{lat:n,lon:r}}get earthMesh(){return this.earth}}class nv{mesh;constructor(t=8e3,e=28e3){const n=new Float32Array(t*3),r=new Float32Array(t);for(let o=0;o<t;o++){const l=Math.random(),c=Math.random(),h=2*Math.PI*l,u=Math.acos(2*c-1);n[o*3]=e*Math.sin(u)*Math.cos(h),n[o*3+1]=e*Math.sin(u)*Math.sin(h),n[o*3+2]=e*Math.cos(u),r[o]=1+Math.random()*2}const s=new Ft;s.setAttribute("position",new jt(n,3));const a=new zu({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.9});this.mesh=new Sn(s,a)}}async function iv(i="lo"){const t=["px","nx","py","ny","pz","nz"].map(r=>`textures/starmap_${r}.jpg`);if(await Th(t[0])){const r=await rv(t);if(r)return console.log("[earth-clock] skybox loaded (6-face cubemap)"),r}const n=i==="hi"?["textures/8k_stars_milky_way.jpg","textures/starmap.jpg","textures/2k_stars_milky_way.jpg"]:["textures/2k_stars_milky_way.jpg","textures/starmap.jpg","textures/8k_stars_milky_way.jpg"];for(const r of n){if(!await Th(r))continue;const s=await sv(r);if(s)return console.log(`[earth-clock] skybox loaded (equirectangular: ${r})`),s}return console.warn("[earth-clock] no skybox texture found in textures/; using procedural Points starfield. To upgrade: download NASA's 'Deep Star Map 2020' (8K equirectangular) from https://svs.gsfc.nasa.gov/4851/ and save it as frontend/public/textures/starmap.jpg."),null}async function Th(i){try{return(await fetch(i,{method:"HEAD"})).ok}catch{return!1}}function rv(i){return new Promise(t=>{new q_().load(i,e=>{e.colorSpace=me,t(e)},void 0,()=>t(null))})}function sv(i){return new Promise(t=>{new Oa().load(i,e=>{e.mapping=_a,e.colorSpace=me,t(e)},void 0,()=>t(null))})}class av{mesh;sunDirUniform;material;constructor(t=1,e=.018){this.sunDirUniform={value:new C(1,0,0)};const n=new an(t+e,96,48);this.material=new oe({uniforms:{uSunDirection:this.sunDirUniform,uColorDay:{value:new Rt(8961023)},uColorTwilight:{value:new Rt(16750950)},uPower:{value:3.2},uIntensity:{value:1.4}},vertexShader:`
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
      `,transparent:!0,blending:Ze,depthWrite:!1,side:$n}),this.mesh=new Vt(n,this.material)}setSunDirection(t){this.sunDirUniform.value.copy(t)}setPower(t){this.material.uniforms.uPower.value=t}setIntensity(t){this.material.uniforms.uIntensity.value=t}}const ov=.273,Ah=.95;class lv{mesh;material;defaultEmissive=new Rt(16777215);umbralTint=new Rt(9052176);_scratchColor=new Rt;constructor(){const e=new Oa().load("textures/moon_1024.jpg");e.colorSpace=me;const n=new an(ov,64,32);this.material=new Hu({map:e,shininess:2,specular:0,emissive:16777215,emissiveMap:e,emissiveIntensity:Ah}),this.mesh=new Vt(n,this.material)}setPosition(t){this.mesh.position.copy(t)}setEclipseShadow(t){const e=Math.max(0,Math.min(1,t));this.material.emissiveIntensity=Ah*(1-.82*e),this._scratchColor.copy(this.defaultEmissive).lerp(this.umbralTint,e),this.material.emissive.copy(this._scratchColor)}}class rs{mesh;disc;corona;static R_SUN_IN_R_EARTH=696e3/6371;static AU_IN_R_EARTH=149597870/6371;constructor(){this.mesh=new fe;const t=new an(rs.R_SUN_IN_R_EARTH,48,24),e=new Ye({color:16766285});this.disc=new Vt(t,e),this.disc.frustumCulled=!1,this.mesh.add(this.disc);const n=cv(256),r=new Ou({map:n,color:16777215,transparent:!0,blending:Ze,depthWrite:!1,depthTest:!0});this.corona=new W_(r);const s=rs.R_SUN_IN_R_EARTH*8;this.corona.scale.set(s,s,1),this.corona.frustumCulled=!1,this.mesh.add(this.corona)}setSunDirection(t){this.mesh.position.copy(t).normalize().multiplyScalar(rs.AU_IN_R_EARTH)}}function cv(i){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255, 255, 240, 1.00)"),n.addColorStop(.06,"rgba(255, 245, 200, 1.00)"),n.addColorStop(.14,"rgba(255, 220, 130, 0.90)"),n.addColorStop(.28,"rgba(255, 190,  90, 0.55)"),n.addColorStop(.5,"rgba(255, 150,  60, 0.25)"),n.addColorStop(.75,"rgba(255, 120,  40, 0.10)"),n.addColorStop(1,"rgba(255, 100,  30, 0.00)"),e.fillStyle=n,e.fillRect(0,0,i,i);const r=new Zl(t);return r.needsUpdate=!0,r}const hv=new Lr(-1,1,1,-1,0,1);class uv extends Ft{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const dv=new uv;class fv{constructor(t){this._mesh=new Vt(dv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,hv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class pv{constructor(t,e,n){this.variables=[],this.currentTextureIndex=0;let r=vn;const s={passThruTexture:{value:null}},a=c(u(),s),o=new fv(a);this.setDataType=function(d){return r=d,this},this.addVariable=function(d,p,g){const _=this.createShaderMaterial(p),m={name:d,initialValueTexture:g,material:_,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:be,magFilter:be};return this.variables.push(m),m},this.setVariableDependencies=function(d,p){d.dependencies=p},this.init=function(){if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let d=0;d<this.variables.length;d++){const p=this.variables[d];p.renderTargets[0]=this.createRenderTarget(t,e,p.wrapS,p.wrapT,p.minFilter,p.magFilter),p.renderTargets[1]=this.createRenderTarget(t,e,p.wrapS,p.wrapT,p.minFilter,p.magFilter),this.renderTexture(p.initialValueTexture,p.renderTargets[0]),this.renderTexture(p.initialValueTexture,p.renderTargets[1]);const g=p.material,_=g.uniforms;if(p.dependencies!==null)for(let m=0;m<p.dependencies.length;m++){const f=p.dependencies[m];if(f.name!==p.name){let w=!1;for(let M=0;M<this.variables.length;M++)if(f.name===this.variables[M].name){w=!0;break}if(!w)return"Variable dependency not found. Variable="+p.name+", dependency="+f.name}_[f.name]={value:null},g.fragmentShader=`
uniform sampler2D `+f.name+`;
`+g.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const d=this.currentTextureIndex,p=this.currentTextureIndex===0?1:0;for(let g=0,_=this.variables.length;g<_;g++){const m=this.variables[g];if(m.dependencies!==null){const f=m.material.uniforms;for(let w=0,M=m.dependencies.length;w<M;w++){const S=m.dependencies[w];f[S.name].value=S.renderTargets[d].texture}}this.doRenderTarget(m.material,m.renderTargets[p])}this.currentTextureIndex=p},this.getCurrentRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){o.dispose();const d=this.variables;for(let p=0;p<d.length;p++){const g=d[p];g.initialValueTexture&&g.initialValueTexture.dispose();const _=g.renderTargets;for(let m=0;m<_.length;m++)_[m].dispose()}};function l(d){d.defines.resolution="vec2( "+t.toFixed(1)+", "+e.toFixed(1)+" )"}this.addResolutionDefine=l;function c(d,p){p=p||{};const g=new oe({name:"GPUComputationShader",uniforms:p,vertexShader:h(),fragmentShader:d});return l(g),g}this.createShaderMaterial=c,this.createRenderTarget=function(d,p,g,_,m,f){return d=d||t,p=p||e,g=g||Ce,_=_||Ce,m=m||be,f=f||be,new Cn(d,p,{wrapS:g,wrapT:_,minFilter:m,magFilter:f,format:Ue,type:r,depthBuffer:!1})},this.createTexture=function(){const d=new Float32Array(t*e*4),p=new Ua(d,t,e,Ue,vn);return p.needsUpdate=!0,p},this.renderTexture=function(d,p){s.passThruTexture.value=d,this.doRenderTarget(a,p),s.passThruTexture.value=null},this.doRenderTarget=function(d,p){const g=n.getRenderTarget(),_=n.xr.enabled,m=n.shadowMap.autoUpdate;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,o.material=d,n.setRenderTarget(p),o.render(n),o.material=a,n.xr.enabled=_,n.shadowMap.autoUpdate=m,n.setRenderTarget(g)};function h(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function u(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const mv=23.44*Math.PI/180;class gv{mesh;flatMesh;points;gpu;positionVar;renderMaterial;flatRenderMaterial;constructor(t,e=65536){const n=Math.ceil(Math.sqrt(e)),r=n*n;this.gpu=new pv(n,n,t);const s=this.gpu.createTexture(),a=s.image.data;for(let p=0;p<r;p++)a[p*4]=(Math.random()-.5)*360,a[p*4+1]=(Math.random()-.5)*160,a[p*4+2]=Math.random(),a[p*4+3]=1;const o=`
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
    `;this.positionVar=this.gpu.addVariable("texturePosition",o,s),this.gpu.setVariableDependencies(this.positionVar,[this.positionVar]),this.positionVar.wrapS=Ce,this.positionVar.wrapT=Ce,this.positionVar.minFilter=be,this.positionVar.magFilter=be;const l=this.positionVar.material.uniforms;l.uWindTexture={value:this.createMockWindTexture()},l.uDt={value:1/60},l.uSpeed={value:.12},l.uTime={value:0},l.uRespawnRate={value:.1};const c=this.gpu.init();c&&console.error("[Particles] GPUComputationRenderer init error:",c);const h=new Float32Array(r*3),u=new Float32Array(r*2);for(let p=0;p<r;p++){const g=p%n,_=Math.floor(p/n);u[p*2]=(g+.5)/n,u[p*2+1]=(_+.5)/n}const d=new Ft;d.setAttribute("position",new jt(h,3)),d.setAttribute("lookupUV",new jt(u,2)),this.renderMaterial=new oe({uniforms:{uTexturePosition:{value:null},uPointSize:{value:1.5},uAlpha:{value:.25}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Ze}),this.points=new Sn(d,this.renderMaterial),this.mesh=new fe,this.mesh.rotation.z=mv,this.mesh.add(this.points),this.flatRenderMaterial=new oe({uniforms:{uTexturePosition:{value:null},uPointSize:{value:1.7},uAlpha:{value:.18}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Ze}),this.flatMesh=new Sn(d,this.flatRenderMaterial)}createMockWindTexture(){const e=new Uint16Array(64),n=Tu.toHalfFloat,r=n(10),s=n(1);for(let o=0;o<16;o++)e[o*4]=r,e[o*4+1]=0,e[o*4+2]=0,e[o*4+3]=s;const a=new Ua(e,4,4,Ue,Vi);return a.wrapS=qn,a.wrapT=Ce,a.magFilter=_e,a.minFilter=_e,a.needsUpdate=!0,a}setWindTexture(t){const e=this.positionVar.material.uniforms.uWindTexture.value;e&&e.dispose(),this.positionVar.material.uniforms.uWindTexture.value=t}setRotationY(t){this.points.rotation.y=t}setSpeed(t){this.positionVar.material.uniforms.uSpeed.value=t}setPointSize(t){this.renderMaterial.uniforms.uPointSize.value=t,this.flatRenderMaterial.uniforms.uPointSize.value=t}setAlpha(t){this.renderMaterial.uniforms.uAlpha.value=t,this.flatRenderMaterial.uniforms.uAlpha.value=t}update(t,e){const n=this.positionVar.material.uniforms;n.uDt.value=Math.min(t,1/30),n.uTime.value=e,this.gpu.compute();const r=this.gpu.getCurrentRenderTarget(this.positionVar).texture;this.renderMaterial.uniforms.uTexturePosition.value=r,this.flatRenderMaterial.uniforms.uTexturePosition.value=r}dispose(){this.gpu.dispose(),this.renderMaterial.dispose(),this.flatRenderMaterial.dispose(),this.points.geometry.dispose()}}const _v=23.44*Math.PI/180;class xr{mesh;flatMesh;rtA;rtB;current;particleScene;fadeScene;trailCamera;fadeMaterial;compositeMaterial;flatCompositeMaterial;fadeQuadCam;compositeSphere;static TRAIL_WIDTH=2048;static TRAIL_HEIGHT=1024;constructor(t){const e={depthBuffer:!1,stencilBuffer:!1,type:yn,format:Ue,minFilter:_e,magFilter:_e,wrapS:qn,wrapT:Ce};this.rtA=new Cn(xr.TRAIL_WIDTH,xr.TRAIL_HEIGHT,e),this.rtB=new Cn(xr.TRAIL_WIDTH,xr.TRAIL_HEIGHT,e),this.current=this.rtA,this.trailCamera=new Lr(-1,1,.5,-.5,0,10),this.trailCamera.position.set(0,0,1),this.particleScene=new xa,this.particleScene.add(t),this.fadeMaterial=new oe({uniforms:{uPrev:{value:null},uFade:{value:.992}},vertexShader:`
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
      `,depthTest:!1,depthWrite:!1}),this.fadeQuadCam=new Lr(-1,1,1,-1,0,1),this.fadeScene=new xa,this.fadeScene.add(new Vt(new Hi(2,2),this.fadeMaterial)),this.compositeMaterial=new oe({uniforms:{uTrails:{value:null},uOpacity:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Ze}),this.compositeSphere=new Vt(new an(1.006,96,48),this.compositeMaterial),this.compositeSphere.renderOrder=3,this.mesh=new fe,this.mesh.rotation.z=_v,this.mesh.add(this.compositeSphere),this.flatCompositeMaterial=new oe({uniforms:{uTrails:this.compositeMaterial.uniforms.uTrails,uOpacity:this.compositeMaterial.uniforms.uOpacity},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Ze}),this.flatMesh=new Vt(new Hi(2,1),this.flatCompositeMaterial),this.flatMesh.position.z=.005}step(t){const e=this.current===this.rtA?this.rtB:this.rtA,n=t.autoClear;t.autoClear=!1,this.fadeMaterial.uniforms.uPrev.value=this.current.texture,t.setRenderTarget(e),t.setClearColor(0,0),t.clear(!0,!1,!1),t.render(this.fadeScene,this.fadeQuadCam),t.render(this.particleScene,this.trailCamera),t.setRenderTarget(null),t.autoClear=n,this.compositeMaterial.uniforms.uTrails.value=e.texture,this.current=e}setRotationY(t){this.compositeSphere.rotation.y=t}setVisible(t){this.mesh.visible=t,this.flatMesh.visible=t}setFade(t){this.fadeMaterial.uniforms.uFade.value=t}setOpacity(t){this.compositeMaterial.uniforms.uOpacity.value=t}setIntensity(t){switch(t){case"subtle":this.fadeMaterial.uniforms.uFade.value=.98,this.compositeMaterial.uniforms.uOpacity.value=.35;break;case"standard":this.fadeMaterial.uniforms.uFade.value=.99,this.compositeMaterial.uniforms.uOpacity.value=.65;break;case"bold":this.fadeMaterial.uniforms.uFade.value=.992,this.compositeMaterial.uniforms.uOpacity.value=1;break}}resize(t,e){}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.fadeMaterial.dispose(),this.compositeMaterial.dispose(),this.flatCompositeMaterial.dispose()}}const vv=23.44*Math.PI/180;class xv{mesh;flatMesh;lines;material;flatMaterial;constructor(){const t=new Ft;t.setAttribute("position",new Zt([],3)),this.material=new Gi({color:13161704,transparent:!0,opacity:.35,depthWrite:!1}),this.lines=new Ni(t,this.material),this.mesh=new fe,this.mesh.rotation.z=vv,this.mesh.add(this.lines);const e=new Ft;e.setAttribute("position",new Zt([],3)),this.flatMaterial=new Gi({color:11583712,transparent:!0,opacity:.55,depthWrite:!1}),this.flatMesh=new Ni(e,this.flatMaterial)}loadFromTopology(t,e,n=1.002){const r=t.objects[e];if(!r)throw new Error(`Coastlines: object "${e}" not in topology`);const{scale:s,translate:a}=t.transform,o=m=>{const f=m<0,w=t.arcs[f?~m:m];let M=0,S=0;const L=[];for(const[T,A]of w)M+=T,S+=A,L.push([M*s[0]+a[0],S*s[1]+a[1]]);return f?L.reverse():L},l=(m,f,w)=>{const M=m*Math.PI/180,S=f*Math.PI/180,L=Math.cos(S);w[0]=n*L*Math.cos(M),w[1]=n*Math.sin(S),w[2]=-n*L*Math.sin(M)},c=[],h=[],u=[0,0,0],d=[0,0,0],p=m=>{let f=[];for(const w of m){const M=o(w);f.length===0?f=M:f.push(...M.slice(1))}for(let w=1;w<f.length;w++){const M=f[w-1][0],S=f[w-1][1],L=f[w][0],T=f[w][1];l(M,S,u),l(L,T,d),c.push(u[0],u[1],u[2],d[0],d[1],d[2]),!(Math.abs(L-M)>180)&&h.push(M/180,S/180,0,L/180,T/180,0)}};for(const m of r.geometries)if(m.type==="LineString")p(m.arcs);else if(m.type==="MultiLineString")for(const f of m.arcs)p(f);const g=new Ft;g.setAttribute("position",new Zt(c,3)),this.lines.geometry.dispose(),this.lines.geometry=g;const _=new Ft;_.setAttribute("position",new Zt(h,3)),this.flatMesh.geometry.dispose(),this.flatMesh.geometry=_}setRotationY(t){this.lines.rotation.y=t}setOpacity(t){this.material.opacity=t}setColor(t){this.material.color.setHex(t)}}function Wu(i,t,e){const{width:n,height:r,data:s}=i;if(s.length!==n*r)throw new Error(`scalarGridToByteTexture: data length ${s.length} ≠ width*height ${n*r}`);const a=Math.max(e-t,1e-6),o=new Uint8Array(s.length);for(let c=0;c<s.length;c++){const h=(s[c]-t)/a;o[c]=Math.round(Math.max(0,Math.min(1,h))*255)}const l=new Ua(o,n,r,Hl,yn);return l.wrapS=qn,l.wrapT=Ce,l.minFilter=_e,l.magFilter=_e,l.generateMipmaps=!1,l.needsUpdate=!0,l}const yv=23.44*Math.PI/180;class Sv{mesh;cloudSphere;material;sunDirUniform;currentScalarTexture=null;constructor(t=1.003){const e=new an(t,128,64);this.sunDirUniform={value:new C(1,0,0)},this.material=new oe({uniforms:{uMap:{value:null},uScalar:{value:null},uMode:{value:0},uSunDirection:{value:this.sunDirUniform.value},uThreshold:{value:.5},uSoftness:{value:.3},uOpacity:{value:.85},uNightFade:{value:.1},uNightFloor:{value:.25},uTerminator:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1}),this.cloudSphere=new Vt(e,this.material),this.cloudSphere.renderOrder=2,this.mesh=new fe,this.mesh.rotation.z=yv,this.mesh.add(this.cloudSphere)}setTexture(t){this.material.uniforms.uMap.value=t,this.material.uniforms.uMode.value=0}setScalarField(t,e,n){const r=Wu(t,e,n);this.currentScalarTexture&&this.currentScalarTexture.dispose(),this.material.uniforms.uScalar.value=r,this.material.uniforms.uMode.value=1,this.currentScalarTexture=r}setSunDirection(t){this.sunDirUniform.value.copy(t)}setRotationY(t){this.cloudSphere.rotation.y=t}setTerminatorEnabled(t){this.material.uniforms.uTerminator.value=t?1:0}setThreshold(t){this.material.uniforms.uThreshold.value=t}setSoftness(t){this.material.uniforms.uSoftness.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}setNightFloor(t){this.material.uniforms.uNightFloor.value=t}}const Mv=23.44*Math.PI/180;class yr{mesh;flatMesh;points;material;flatMaterial;posAttr;flatPosAttr;probAttr;sunDirUniform;timeUniform;static MAX_POINTS=7e4;RADIUS=1.008;constructor(){const t=new Ft,e=new Float32Array(yr.MAX_POINTS*3),n=new Float32Array(yr.MAX_POINTS);this.posAttr=new jt(e,3),this.probAttr=new jt(n,1),this.posAttr.setUsage(Be),this.probAttr.setUsage(Be),t.setAttribute("position",this.posAttr),t.setAttribute("aProbability",this.probAttr),t.setDrawRange(0,0);const r=new Ft,s=new Float32Array(yr.MAX_POINTS*3);this.flatPosAttr=new jt(s,3),this.flatPosAttr.setUsage(Be),r.setAttribute("position",this.flatPosAttr),r.setAttribute("aProbability",this.probAttr),r.setDrawRange(0,0),this.sunDirUniform={value:new C(1,0,0)},this.timeUniform={value:0},this.material=new oe({uniforms:{uSunDirection:{value:this.sunDirUniform.value},uTime:{value:this.timeUniform.value},uOpacity:{value:1},uTerminator:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Ze}),this.points=new Sn(t,this.material),this.points.renderOrder=4,this.mesh=new fe,this.mesh.rotation.z=Mv,this.mesh.add(this.points),this.flatMaterial=new oe({uniforms:{uTime:this.material.uniforms.uTime,uOpacity:this.material.uniforms.uOpacity},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Ze}),this.flatMesh=new Sn(r,this.flatMaterial),this.flatMesh.position.z=.004}update(t){const e=this.RADIUS,n=Math.min(t.pointCount,yr.MAX_POINTS),r=this.posAttr.array,s=this.flatPosAttr.array,a=this.probAttr.array;for(let o=0;o<n;o++){const l=t.data[o*3+0],c=t.data[o*3+1],h=t.data[o*3+2],u=l*Math.PI/180,d=c*Math.PI/180,p=Math.cos(d);r[o*3+0]=e*p*Math.cos(u),r[o*3+1]=e*Math.sin(d),r[o*3+2]=-e*p*Math.sin(u),s[o*3+0]=l/180,s[o*3+1]=c/180,s[o*3+2]=.004,a[o]=h}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.probAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,n),this.flatMesh.geometry.setDrawRange(0,n)}setSunDirection(t){this.sunDirUniform.value.copy(t)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.timeUniform.value=t,this.material.uniforms.uTime.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}setTerminatorEnabled(t){this.material.uniforms.uTerminator.value=t?1:0}}const bv=23.44*Math.PI/180;class Li{mesh;flatMesh;points;material;posAttr;flatPosAttr;frpAttr;hashAttr;static MAX_POINTS=6e4;RADIUS=1.0015;constructor(){const t=new Ft,e=new Float32Array(Li.MAX_POINTS*3),n=new Float32Array(Li.MAX_POINTS),r=new Float32Array(Li.MAX_POINTS);this.posAttr=new jt(e,3),this.frpAttr=new jt(n,1),this.hashAttr=new jt(r,1),this.posAttr.setUsage(Be),this.frpAttr.setUsage(Be),this.hashAttr.setUsage(Be),t.setAttribute("position",this.posAttr),t.setAttribute("aFrp",this.frpAttr),t.setAttribute("aHash",this.hashAttr),t.setDrawRange(0,0);const s=new Ft,a=new Float32Array(Li.MAX_POINTS*3);this.flatPosAttr=new jt(a,3),this.flatPosAttr.setUsage(Be),s.setAttribute("position",this.flatPosAttr),s.setAttribute("aFrp",this.frpAttr),s.setAttribute("aHash",this.hashAttr),s.setDrawRange(0,0),this.material=new oe({uniforms:{uTime:{value:0},uOpacity:{value:1},uSizeBoost:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Ze}),this.points=new Sn(t,this.material),this.mesh=new fe,this.mesh.rotation.z=bv,this.mesh.add(this.points),this.flatMesh=new Sn(s,this.material)}update(t){const e=this.RADIUS,n=Math.min(t.detections.length,Li.MAX_POINTS),r=this.posAttr.array,s=this.frpAttr.array,a=this.hashAttr.array,o=this.flatPosAttr.array;for(let l=0;l<n;l++){const c=t.detections[l],h=c.lon*Math.PI/180,u=c.lat*Math.PI/180,d=Math.cos(u);r[l*3+0]=e*d*Math.cos(h),r[l*3+1]=e*Math.sin(u),r[l*3+2]=-e*d*Math.sin(h),o[l*3+0]=c.lon/180,o[l*3+1]=c.lat/180,o[l*3+2]=.001,s[l]=c.frp,a[l]=Math.abs(Math.sin(c.lat*12.9898+c.lon*78.233))*43758.5453%1}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.frpAttr.needsUpdate=!0,this.hashAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,n),this.flatMesh.geometry.setDrawRange(0,n)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}setSizeBoost(t){this.material.uniforms.uSizeBoost.value=t}}const wv=23.44*Math.PI/180;class Ii{mesh;flatMesh;points;material;posAttr;flatPosAttr;intensityAttr;hashAttr;static MAX_STORMS=64;RADIUS=1.012;constructor(){const t=new Ft,e=new Float32Array(Ii.MAX_STORMS*3),n=new Float32Array(Ii.MAX_STORMS),r=new Float32Array(Ii.MAX_STORMS);this.posAttr=new jt(e,3),this.intensityAttr=new jt(n,1),this.hashAttr=new jt(r,1),this.posAttr.setUsage(Be),this.intensityAttr.setUsage(Be),this.hashAttr.setUsage(Be),t.setAttribute("position",this.posAttr),t.setAttribute("aIntensity",this.intensityAttr),t.setAttribute("aHash",this.hashAttr),t.setDrawRange(0,0);const s=new Ft,a=new Float32Array(Ii.MAX_STORMS*3);this.flatPosAttr=new jt(a,3),this.flatPosAttr.setUsage(Be),s.setAttribute("position",this.flatPosAttr),s.setAttribute("aIntensity",this.intensityAttr),s.setAttribute("aHash",this.hashAttr),s.setDrawRange(0,0),this.material=new oe({uniforms:{uTime:{value:0},uOpacity:{value:.95}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:ki}),this.points=new Sn(t,this.material),this.mesh=new fe,this.mesh.rotation.z=wv,this.mesh.add(this.points),this.flatMesh=new Sn(s,this.material)}update(t){const e=this.RADIUS,n=Math.min(t.storms.length,Ii.MAX_STORMS),r=this.posAttr.array,s=this.flatPosAttr.array,a=this.intensityAttr.array,o=this.hashAttr.array;for(let l=0;l<n;l++){const c=t.storms[l],h=c.lon*Math.PI/180,u=c.lat*Math.PI/180,d=Math.cos(u);r[l*3+0]=e*d*Math.cos(h),r[l*3+1]=e*Math.sin(u),r[l*3+2]=-e*d*Math.sin(h),s[l*3+0]=c.lon/180,s[l*3+1]=c.lat/180,s[l*3+2]=.002,a[l]=c.intensityKt,o[l]=Math.abs(Ev(c.id))%1}this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.intensityAttr.needsUpdate=!0,this.hashAttr.needsUpdate=!0,this.points.geometry.setDrawRange(0,n),this.flatMesh.geometry.setDrawRange(0,n)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}}function Ev(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)|0;return Math.abs(Math.sin(t*1e-4))*1e3}const Tv=23.44*Math.PI/180;class ba{mesh;flatMesh;bestTrackLines;forecastLines;coneMesh;bestTrackLinesFlat;forecastLinesFlat;coneMeshFlat;RADIUS=1.013;static FLAT_Z_CONE=.0025;static FLAT_Z_LINE=.003;constructor(){const t=new Gi({color:13625087,transparent:!0,opacity:.85,depthWrite:!1});this.bestTrackLines=new Ni(new Ft,t),this.bestTrackLinesFlat=new Ni(new Ft,t);const e=new Gi({color:16773280,transparent:!0,opacity:.85,depthWrite:!1});this.forecastLines=new Ni(new Ft,e),this.forecastLinesFlat=new Ni(new Ft,e);const n=new Ye({color:16773280,transparent:!0,opacity:.18,depthWrite:!1,side:En});this.coneMesh=new Vt(new Ft,n),this.coneMeshFlat=new Vt(new Ft,n),this.mesh=new fe,this.mesh.rotation.z=Tv,this.mesh.add(this.coneMesh),this.mesh.add(this.bestTrackLines),this.mesh.add(this.forecastLines),this.flatMesh=new fe,this.flatMesh.add(this.coneMeshFlat),this.flatMesh.add(this.bestTrackLinesFlat),this.flatMesh.add(this.forecastLinesFlat)}update(t){const e=[],n=[],r=[],s=[],a=[],o=[],l=[],c=[],h=this.RADIUS,u=(_,m)=>{const f=_*Math.PI/180,w=m*Math.PI/180,M=Math.cos(w);return[h*M*Math.cos(f),h*Math.sin(w),-h*M*Math.sin(f)]},d=_=>(m,f)=>[m/180,f/180,_],p=d(ba.FLAT_Z_LINE),g=d(ba.FLAT_Z_CONE);for(const _ of t)_.bestTrack&&(ia(_.bestTrack,e,u),ia(_.bestTrack,a,p)),_.forecastTrack&&(ia(_.forecastTrack,n,u),ia(_.forecastTrack,o,p)),_.forecastCone&&(Rh(_.forecastCone,r,s,u),Rh(_.forecastCone,l,c,g));dr(this.bestTrackLines.geometry,"position",new Float32Array(e),3),dr(this.forecastLines.geometry,"position",new Float32Array(n),3),dr(this.coneMesh.geometry,"position",new Float32Array(r),3),this.coneMesh.geometry.setIndex(s.length?s:null),this.coneMesh.geometry.computeBoundingSphere(),dr(this.bestTrackLinesFlat.geometry,"position",new Float32Array(a),3),dr(this.forecastLinesFlat.geometry,"position",new Float32Array(o),3),dr(this.coneMeshFlat.geometry,"position",new Float32Array(l),3),this.coneMeshFlat.geometry.setIndex(c.length?c:null),this.coneMeshFlat.geometry.computeBoundingSphere()}setRotationY(t){this.bestTrackLines.rotation.y=t,this.forecastLines.rotation.y=t,this.coneMesh.rotation.y=t}setOpacity(t){this.bestTrackLines.material.opacity=t,this.forecastLines.material.opacity=t,this.coneMesh.material.opacity=.18*t}}function ia(i,t,e){for(const n of i)if(!(n.type!=="line"||n.coords.length<2))for(let r=0;r<n.coords.length-1;r++){const s=e(n.coords[r][0],n.coords[r][1]),a=e(n.coords[r+1][0],n.coords[r+1][1]);t.push(s[0],s[1],s[2],a[0],a[1],a[2])}}function Rh(i,t,e,n){for(const r of i){if(r.type!=="polygon"||r.coords.length<3)continue;const s=t.length/3;for(const[a,o]of r.coords){const l=n(a,o);t.push(l[0],l[1],l[2])}for(let a=1;a<r.coords.length-1;a++)e.push(s,s+a,s+a+1)}}function dr(i,t,e,n){const r=i.getAttribute(t);r&&r.array.length===e.length?(r.array.set(e),r.needsUpdate=!0):i.setAttribute(t,new jt(e,n))}const Av=23.44*Math.PI/180;class ss{mesh;shell;shellMat;pathLine;pathMat;inner;static UMBRA_ANGULAR_RADIUS=.023;static PENUMBRA_ANGULAR_RADIUS=.47;constructor(){this.inner=new fe;const t=new an(1.001,96,48);this.shellMat=new oe({uniforms:{uShadowDir:{value:new C(1,0,0)},uHasShadow:{value:0},uUmbraCosCutoff:{value:Math.cos(ss.UMBRA_ANGULAR_RADIUS)},uPenumbraCosCutoff:{value:Math.cos(ss.PENUMBRA_ANGULAR_RADIUS)},uMaxDim:{value:.85}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1}),this.shell=new Vt(t,this.shellMat),this.shell.renderOrder=-1,this.inner.add(this.shell),this.pathMat=new Gi({color:16750899,transparent:!0,opacity:.9,depthWrite:!1}),this.pathLine=new Bu(new Ft,this.pathMat),this.pathLine.renderOrder=2,this.inner.add(this.pathLine),this.mesh=new fe,this.mesh.rotation.z=Av,this.mesh.add(this.inner),this.mesh.visible=!1}setLiveShadow(t){if(!t){this.shellMat.uniforms.uHasShadow.value=0;return}this.shellMat.uniforms.uShadowDir.value.copy(t).normalize(),this.shellMat.uniforms.uHasShadow.value=1}static PATH_SUBDIVISIONS_PER_SEGMENT=24;setPath(t){if(t.length===0){this.pathLine.geometry.setAttribute("position",new jt(new Float32Array(0),3));return}const e=1.0015,n=ss.PATH_SUBDIVISIONS_PER_SEGMENT,r=t.length-1,s=t.length===1?1:r*n+1,a=new Float32Array(s*3),o=new C,l=new C,c=new C;let h=0;const u=p=>{a[h*3]=p.x*e,a[h*3+1]=p.y*e,a[h*3+2]=p.z*e,h++};if(t.length===1)o.copy(t[0]).normalize(),u(o);else{for(let p=0;p<r;p++){o.copy(t[p]).normalize(),l.copy(t[p+1]).normalize();const g=La.clamp(o.dot(l),-1,1),_=Math.acos(g),m=Math.sin(_);for(let f=0;f<n;f++){const w=f/n;if(m<1e-6)c.copy(o).lerp(l,w).normalize();else{const M=Math.sin((1-w)*_)/m,S=Math.sin(w*_)/m;c.set(o.x*M+l.x*S,o.y*M+l.y*S,o.z*M+l.z*S),c.normalize()}u(c)}}l.copy(t[r]).normalize(),u(l)}const d=new Ft;d.setAttribute("position",new jt(a,3)),d.computeBoundingSphere(),this.pathLine.geometry.dispose(),this.pathLine.geometry=d}setRotationY(t){this.inner.rotation.y=t}setPathVisible(t){this.pathLine.visible=t}}const Rv=23.44*Math.PI/180;class en{mesh;flatMesh;points;material;posAttr;flatPosAttr;spawnAttr;polarityAttr;writeIndex=0;filled=!1;static MAX_STRIKES=1024;static LIFETIME=.6;RADIUS=1.002;constructor(){const t=new Ft,e=new Float32Array(en.MAX_STRIKES*3),n=new Float32Array(en.MAX_STRIKES),r=new Float32Array(en.MAX_STRIKES);n.fill(-1e9),this.posAttr=new jt(e,3),this.spawnAttr=new jt(n,1),this.polarityAttr=new jt(r,1),this.posAttr.setUsage(Be),this.spawnAttr.setUsage(Be),this.polarityAttr.setUsage(Be),t.setAttribute("position",this.posAttr),t.setAttribute("aSpawn",this.spawnAttr),t.setAttribute("aPolarity",this.polarityAttr),t.setDrawRange(0,en.MAX_STRIKES);const s=new Ft,a=new Float32Array(en.MAX_STRIKES*3);this.flatPosAttr=new jt(a,3),this.flatPosAttr.setUsage(Be),s.setAttribute("position",this.flatPosAttr),s.setAttribute("aSpawn",this.spawnAttr),s.setAttribute("aPolarity",this.polarityAttr),s.setDrawRange(0,en.MAX_STRIKES),this.material=new oe({uniforms:{uTime:{value:0},uLifetime:{value:en.LIFETIME},uOpacity:{value:1}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Ze}),this.points=new Sn(t,this.material),this.mesh=new fe,this.mesh.rotation.z=Rv,this.mesh.add(this.points),this.flatMesh=new Sn(s,this.material)}addStrike(t,e){const n=this.RADIUS,r=t.lon*Math.PI/180,s=t.lat*Math.PI/180,a=Math.cos(s),o=this.writeIndex,l=this.posAttr.array,c=this.flatPosAttr.array,h=this.spawnAttr.array,u=this.polarityAttr.array;l[o*3+0]=n*a*Math.cos(r),l[o*3+1]=n*Math.sin(s),l[o*3+2]=-n*a*Math.sin(r),c[o*3+0]=t.lon/180,c[o*3+1]=t.lat/180,c[o*3+2]=.003,h[o]=e,u[o]=t.polarity,this.posAttr.needsUpdate=!0,this.flatPosAttr.needsUpdate=!0,this.spawnAttr.needsUpdate=!0,this.polarityAttr.needsUpdate=!0,this.writeIndex=(this.writeIndex+1)%en.MAX_STRIKES,this.writeIndex===0&&(this.filled=!0)}setRotationY(t){this.points.rotation.y=t}setTime(t){this.material.uniforms.uTime.value=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}liveStrikeCount(t){const e=this.spawnAttr.array;let n=0;const r=this.filled?en.MAX_STRIKES:this.writeIndex;for(let s=0;s<r;s++)t-e[s]<en.LIFETIME&&n++;return n}}const Cv=23.44*Math.PI/180,Pv={temperature:0,humidity:1,pressure:2,water:3,cloud:4};class Dv{mesh;sphere;material;currentTexture=null;constructor(t=1.006){const e=new an(t,96,48);this.material=new oe({uniforms:{uMap:{value:null},uHasData:{value:0},uPalette:{value:0},uOpacity:{value:.65}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1}),this.sphere=new Vt(e,this.material),this.sphere.renderOrder=1,this.mesh=new fe,this.mesh.rotation.z=Cv,this.mesh.add(this.sphere),this.mesh.visible=!1}setData(t,e,n,r){const s=Wu(t,e,n),a=this.material.uniforms.uMap.value;a&&a.dispose(),this.material.uniforms.uMap.value=s,this.material.uniforms.uHasData.value=1,this.material.uniforms.uPalette.value=Pv[r],this.currentTexture=s}setRotationY(t){this.sphere.rotation.y=t}setOpacity(t){this.material.uniforms.uOpacity.value=t}hasData(){return this.currentTexture!==null}}class as{mesh;flatMesh;sunBeam;moonBeam;sunDot;moonDot;moonPhaseMat;static SUN_COLOR=16763972;static MOON_COLOR=13162736;constructor(){this.mesh=new fe,this.flatMesh=new fe,this.sunBeam=Ph(as.SUN_COLOR,.7),this.moonBeam=Ph(as.MOON_COLOR,.55),this.mesh.add(this.sunBeam,this.moonBeam),this.sunDot=Nv(as.SUN_COLOR,.95),this.flatMesh.add(this.sunDot),this.moonPhaseMat=Fv(),this.moonDot=new Vt(new Ir(Xu,32),this.moonPhaseMat),this.moonDot.position.z=.01,this.flatMesh.add(this.moonDot)}setSunDirection(t){Lh(this.sunBeam,t)}setMoonPosition(t){Lh(this.moonBeam,t)}setSubSolar(t,e){this.sunDot.position.set(e/180,t/180,.01)}setSubLunar(t,e){this.moonDot.position.set(e/180,t/180,.01)}setMoonPhase(t,e){this.moonPhaseMat.uniforms.uIllumFraction.value=La.clamp(t,0,1),this.moonPhaseMat.uniforms.uTerminatorXSign.value=e?1:-1}setVisible(t){this.mesh.visible=t,this.flatMesh.visible=t}setSunBeamVisible(t){this.sunBeam.visible=t}setMoonBeamVisible(t){this.moonBeam.visible=t}setSunDotVisible(t){this.sunDot.visible=t}setMoonDotVisible(t){this.moonDot.visible=t}}const Ch=.6,Lv=.018,Iv=.006,Xu=.025;function Ph(i,t){const e=new Na(Iv,Lv,Ch,16);e.translate(0,Ch/2,0);const n=new Ye({color:i,transparent:!0,opacity:t,depthWrite:!1}),r=new Vt(e,n);return r.frustumCulled=!1,r}const Uv=new C(0,1,0),Dh=new fi,xo=new C;function Lh(i,t){const e=t.length();e<1e-6||(xo.copy(t).divideScalar(e),i.position.copy(xo),Dh.setFromUnitVectors(Uv,xo),i.quaternion.copy(Dh))}function Nv(i,t){const e=new Ir(Xu,24),n=new Ye({color:i,transparent:!0,opacity:t,depthWrite:!1});return new Vt(e,n)}function Fv(){return new oe({uniforms:{uIllumFraction:{value:.5},uTerminatorXSign:{value:1},uLitColor:{value:new Rt(15920861)},uShadowColor:{value:new Rt(2106408)}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1})}const Ih={type:"change"},Ql={type:"start"},$u={type:"end"},ra=new ys,Uh=new ai,Ov=Math.cos(70*La.DEG2RAD),Se=new C,Ge=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yo=1e-6;class qu extends Q_{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gn.ROTATE,MIDDLE:Gn.DOLLY,RIGHT:Gn.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new fi,this._lastTargetPosition=new C,this._quat=new fi().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Eh,this._sphericalDelta=new Eh,this._scale=1,this._panOffset=new C,this._rotateStart=new yt,this._rotateEnd=new yt,this._rotateDelta=new yt,this._panStart=new yt,this._panEnd=new yt,this._panDelta=new yt,this._dollyStart=new yt,this._dollyEnd=new yt,this._dollyDelta=new yt,this._dollyDirection=new C,this._mouse=new yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bv.bind(this),this._onPointerDown=kv.bind(this),this._onPointerUp=zv.bind(this),this._onContextMenu=qv.bind(this),this._onMouseWheel=Vv.bind(this),this._onKeyDown=Wv.bind(this),this._onTouchStart=Xv.bind(this),this._onTouchMove=$v.bind(this),this._onMouseDown=Hv.bind(this),this._onMouseMove=Gv.bind(this),this._interceptControlDown=Yv.bind(this),this._interceptControlUp=jv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ih),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;Se.copy(e).sub(this.target),Se.applyQuaternion(this._quat),this._spherical.setFromVector3(Se),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ge:n>Math.PI&&(n-=Ge),r<-Math.PI?r+=Ge:r>Math.PI&&(r-=Ge),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Se.setFromSpherical(this._spherical),Se.applyQuaternion(this._quatInverse),e.copy(this.target).add(Se),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Se.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ra.origin.copy(this.object.position),ra.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ra.direction))<Ov?this.object.lookAt(this.target):(Uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),ra.intersectPlane(Uh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>yo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yo||this._lastTargetPosition.distanceToSquared(this.target)>yo?(this.dispatchEvent(Ih),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ge/60*this.autoRotateSpeed*t:Ge/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Se.setFromMatrixColumn(e,0),Se.multiplyScalar(-t),this._panOffset.add(Se)}_panUp(t,e){this.screenSpacePanning===!0?Se.setFromMatrixColumn(e,1):(Se.setFromMatrixColumn(e,0),Se.crossVectors(this.object.up,Se)),Se.multiplyScalar(t),this._panOffset.add(Se)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Se.copy(r).sub(this.target);let s=Se.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function kv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Bv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function zv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($u),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Hv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case Gn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case Gn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Ql)}function Gv(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Vv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(Ql),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($u))}function Wv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Xv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Ql)}function $v(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function qv(i){this.enabled!==!1&&i.preventDefault()}function Yv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Zv extends qu{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Gn.PAN,MIDDLE:Gn.DOLLY,RIGHT:Gn.ROTATE},this.touches={ONE:hi.PAN,TWO:hi.DOLLY_ROTATE}}}const Kv=.9,Jv=20,Qv=1;class Yu{scene;camera;mainMesh;material;controls=null;baseFrustum={left:-1,right:1,top:.5,bottom:-.5};constructor(){this.scene=new xa,this.scene.background=new Rt(5),this.camera=new Lr(-1,1,.5,-.5,0,10),this.camera.position.set(0,0,1),this.camera.lookAt(0,0,0);const t=new Oa,e=t.load("textures/earth_daymap_2k.jpg"),n=t.load("textures/earth_nightmap_2k.jpg");e.colorSpace=me,n.colorSpace=me,this.material=new oe({uniforms:{uDay:{value:e},uNight:{value:n},uClouds:{value:null},uHasClouds:{value:0},uGeoSunDir:{value:new C(1,0,0)},uShowClouds:{value:1},uShowNightLights:{value:1},uShowTerminator:{value:1},uCloudThreshold:{value:.5},uCloudSoftness:{value:.3},uCloudOpacity:{value:.85},uCloudNightFloor:{value:.25},uTwilightWidth:{value:.1},uNightDimFloor:{value:.18}},vertexShader:`
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
      `});const r=new Hi(2,1);this.mainMesh=new Vt(r,this.material),this.scene.add(this.mainMesh);for(const s of[-2,2]){const a=new Vt(r,this.material);a.position.x=s,this.scene.add(a)}}resize(t,e){const n=t/e;n>2?this.baseFrustum={left:-.5*n,right:.5*n,top:.5,bottom:-.5}:this.baseFrustum={left:-1,right:1,top:1/n,bottom:-1/n},this.camera.left=this.baseFrustum.left,this.camera.right=this.baseFrustum.right,this.camera.top=this.baseFrustum.top,this.camera.bottom=this.baseFrustum.bottom,this.camera.updateProjectionMatrix()}enableControls(t){this.controls||(this.controls=new Zv(this.camera,t),this.controls.enableRotate=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.18,this.controls.screenSpacePanning=!0,this.controls.zoomToCursor=!0,this.controls.minZoom=Kv,this.controls.maxZoom=Jv,t.addEventListener("dblclick",this.resetView)),this.controls.connect(),this.controls.enabled=!0}disableControls(){this.controls&&(this.controls.enabled=!1)}update(){if(!this.controls||!this.controls.enabled)return;this.controls.update();const t=this.baseFrustum.top/this.camera.zoom;let e=!1;if(t>=.5)this.controls.target.y!==0&&(this.controls.target.y=0,this.camera.position.y=0,e=!0);else{const n=.5-t;this.controls.target.y>n&&(this.controls.target.y=n,this.camera.position.y=n,e=!0),this.controls.target.y<-n&&(this.controls.target.y=-n,this.camera.position.y=-n,e=!0)}e&&this.controls.update()}resetView=()=>{this.camera.position.set(0,0,1),this.camera.zoom=Qv,this.camera.updateProjectionMatrix(),this.controls&&(this.controls.target.set(0,0,0),this.controls.update())};static wrapWorldX(t){return((t+1)%2+2)%2-1}setSubSolar(t,e){const n=t*Math.PI/180,r=e*Math.PI/180,s=Math.cos(n);this.material.uniforms.uGeoSunDir.value.set(s*Math.cos(r),Math.sin(n),-s*Math.sin(r))}setCloudTexture(t){this.material.uniforms.uClouds.value=t,this.material.uniforms.uHasClouds.value=t?1:0}setTerminatorEnabled(t){this.material.uniforms.uShowTerminator.value=t?1:0}setNightLightsVisible(t){this.material.uniforms.uShowNightLights.value=t?1:0}setCloudsVisible(t){this.material.uniforms.uShowClouds.value=t?1:0}}const tx=new C(0,1,0),Ei=16765770;class ex{meshGlobe;meshFlat;latDeg=0;lonDeg=0;constructor(){this.meshGlobe=new fe,this.meshGlobe.visible=!1;const t=new Jl(.022,.003,12,40),e=new Ye({color:Ei,transparent:!0,opacity:.95}),n=new Vt(t,e);n.rotation.x=Math.PI/2,n.position.y=.001,this.meshGlobe.add(n);const r=new Ir(.008,24),s=new Ye({color:Ei,transparent:!0,opacity:.9}),a=new Vt(r,s);a.rotation.x=-Math.PI/2,a.position.y=.002,this.meshGlobe.add(a);const o=.055,l=new Na(.0025,.0025,o,12),c=new Ye({color:Ei,transparent:!0,opacity:.9}),h=new Vt(l,c);h.position.y=o/2,this.meshGlobe.add(h);const u=new an(.006,16,12),d=new Ye({color:Ei,transparent:!0,opacity:.95}),p=new Vt(u,d);p.position.y=o+.005,this.meshGlobe.add(p),this.meshFlat=new fe,this.meshFlat.visible=!1;const g=new Kl(.011,.013,32),_=new Ye({color:Ei,transparent:!0,opacity:.9}),m=new Vt(g,_);m.position.z=.001,this.meshFlat.add(m);const f=.003,w=.017,M=new Ft;M.setAttribute("position",new Zt([-w,0,.001,-f,0,.001,f,0,.001,w,0,.001,0,-w,.001,0,-f,.001,0,f,.001,0,w,.001],3));const S=new Gi({color:Ei,transparent:!0,opacity:.95}),L=new Ni(M,S);this.meshFlat.add(L);const T=new Ir(.0015,16),A=new Ye({color:Ei,transparent:!0,opacity:.95}),P=new Vt(T,A);P.position.z=.002,this.meshFlat.add(P)}setLocation(t,e){this.latDeg=t,this.lonDeg=e;const n=t*Math.PI/180,r=e*Math.PI/180,s=Math.cos(n),a=s*Math.cos(r),o=Math.sin(n),l=-s*Math.sin(r);this.meshGlobe.position.set(a,o,l);const c=new C(a,o,l).normalize();this.meshGlobe.quaternion.setFromUnitVectors(tx,c),this.meshFlat.position.x=e/180,this.meshFlat.position.y=t/180}setVisible(t){this.meshGlobe.visible=t,this.meshFlat.visible=t}isVisible(){return this.meshGlobe.visible}get location(){return{lat:this.latDeg,lon:this.lonDeg}}}const nx="0.2.2",ix={windSubtle:"subtle",windStandard:"standard",windBold:"bold"},Yn="orrery.menu.v1",Rl={fires:!0,lightning:!0,hurricanes:!0,tracks:!0,aurora:!0,windSubtle:!0,windStandard:!1,windBold:!1,cloudsViirs:!0,cloudsGfs:!1,cloudsGoes:!1,mslp:!1,temp:!1,rh:!1,tpw:!1,tcw:!1,coastlines:!0,nightLights:!0,terminator:!0,atmosphere:!0,hands:!0,eclipse:!1,skyboxHi:!1,map:!1,orbit:!1,clock:!0,data:!1,location:!1},rx={aurora:!1,fires:!1,lightning:!1,tracks:!1,nightLights:!1};function sx(){return typeof window<"u"&&window.matchMedia("(max-width: 600px)").matches?{...Rl,...rx}:{...Rl}}const So={fires:"Fires",lightning:"Lightning",hurricanes:"Hurricanes",tracks:"Storm tracks",aurora:"Aurora",windSubtle:"Subtle",windStandard:"Standard",windBold:"Bold",cloudsViirs:"VIIRS",cloudsGfs:"GFS",cloudsGoes:"GOES",mslp:"Pressure",temp:"Temperature",rh:"Humidity",tpw:"Moisture",tcw:"Cloud water",coastlines:"Coastlines",nightLights:"Night lights",terminator:"Day/night",atmosphere:"Atmosphere",hands:"Beams",eclipse:"Eclipse",skyboxHi:"Hi-res sky",map:"Flat map",orbit:"Auto-spin",clock:"Clock",data:"Data",location:"Location"},ax={aurora:"Aurora oval probability (NOAA SWPC Ovation, refreshed 5 min)",fires:"Active wildfires from satellite thermal detections (NASA FIRMS, last 24 h)",hurricanes:"Active tropical cyclones (NOAA NHC, refreshed 15 min)",tracks:"Past track + 5-day forecast track + uncertainty cone for each active storm",lightning:"Real-time lightning strikes from the Blitzortung community network",windSubtle:"Wind — subtle: short streaks, dim composite. Doesn't compete with other layers.",windStandard:"Wind — standard: moderate streaks, mid brightness.",windBold:"Wind — bold: long, bright streaks. The signature earth.nullschool look.",cloudsViirs:"VIIRS true-colour daily mosaic (NASA GIBS) — photographic, can have swath gaps on partial days",cloudsGfs:"GFS cloud cover (NOAA, 6 h refresh) — model forecast, no coverage gaps, animates with time-warp. Prefers TCDC; falls back to TCW until weather-service is re-run.",cloudsGoes:"GOES + Himawari + MSG geostationary composite — coming soon",mslp:"Mean sea level pressure (MSLP) — highs and lows drive weather systems",temp:"2 m air temperature (Temp) — kelvin internally, displayed via colour ramp",rh:"2 m relative humidity (RH) — 0 to 100 % of saturation",tpw:"Total precipitable water (TPW, mm) — atmospheric water vapour column",tcw:"Total cloud water (TCW, kg/m²) — liquid + ice in the atmospheric column",coastlines:"Natural Earth 50 m coastlines",nightLights:"City lights on the night side (Solar System Scope)",terminator:"Day/night shading — sun-direction lighting + city-lights overlay",atmosphere:"Atmospheric rim glow with day-twilight gradient",hands:"Sun and moon beams — a gold gnomon pointing at the sun, a silver one at the moon, plus paired sun + moon dots on the flat map. Under time-warp the sun beam sweeps one rotation per simulated day.",eclipse:"Live umbra + penumbra discs and path-of-totality; opens the eclipse-catalogue panel for selecting an event and jumping to it",skyboxHi:"Upgrade the starfield to NASA's 8K Deep Star Map (~1.9 MB). Sharper Milky Way detail when zoomed out; takes a couple of seconds to load. Default is 2K (~250 KB) for fast first paint.",map:"Equirectangular flat-map view — drag to pan, wheel to zoom (centred on cursor), double-click to reset",orbit:"Gentle auto-rotation around Earth (pauses on user input)",clock:"Top-left clock readout. Click the zone label to flip UTC ⇄ local. ⏱ reveals time-warp controls.",data:"Top-right panel — every live data layer with its source, freshness, and refresh cadence. Click a source name to open the originating organisation's page.",location:"Click anywhere on the globe (or flat map) to pin a spot and read its coordinates, place name (geocoded), and true solar time. The bottom-right panel shows the result."},Ri=["mslp","temp","rh","tpw","tcw"],Ci=["cloudsViirs","cloudsGfs","cloudsGoes"],_r=["windSubtle","windStandard","windBold"],ox=[{label:"Weather",keys:["fires","lightning","hurricanes","tracks","aurora"]},{label:"Wind",keys:_r},{label:"Clouds",keys:Ci},{label:"Overlay",keys:Ri},{label:"Geography",keys:["coastlines","nightLights"]},{label:"Astro",keys:["terminator","atmosphere","hands","eclipse"]},{label:"Astro²",keys:["skyboxHi"]},{label:"View",keys:["map","orbit","clock","data","location"]}];class lx{state;layers;panels;buttons={};panel;open;overlayChangeHandler=null;cloudsChangeHandler=null;findMoonHandler=null;skyboxHiResHandler=null;constructor(t,e,n={}){this.layers=e,this.panels=n,this.state={...sx(),...cx()},this.open=hx(),px();const r=document.createElement("div");r.id="orrery-ui",r.innerHTML=`
      <div class="orrery-brand-row">
        <span class="orrery-brand" id="orrery-brand" title="Click for options · weather layers · clock · location · eclipses">earth-clock</span>
        <span class="orrery-version" title="package.json version">v${nx}</span>
      </div>
      <div class="orrery-menu${this.open?"":" collapsed"}" id="orrery-menu">
        <div id="orrery-menu-categories"></div>
        <p class="orrery-meta">
          <a href="/about/">about</a> · <a href="https://github.com/infantlab/earth-clock" target="_blank" rel="noopener">source</a>
        </p>
      </div>
    `,t.appendChild(r),this.panel=r.querySelector("#orrery-menu"),r.querySelector("#orrery-brand").addEventListener("click",()=>{this.toggleOpen(),this.dismissOnboardingHint()}),this.maybeShowOnboardingHint(r);const a=r.querySelector("#orrery-menu-categories");for(const o of ox){const l=document.createElement("p");l.innerHTML=`<span class="orrery-label">${o.label}</span><span class="orrery-buttons"></span>`;const c=l.querySelector(".orrery-buttons");if(o.keys.forEach((h,u)=>{u>0&&c.appendChild(document.createTextNode(" · "));const d=document.createElement("span");d.className="orrery-tb",d.textContent=So[h],d.title=ax[h]??`Toggle ${So[h]}`,d.addEventListener("click",()=>this.toggle(h)),c.appendChild(d),this.buttons[h]=d}),o.label==="Astro"){c.appendChild(document.createTextNode(" · "));const h=document.createElement("span");h.className="orrery-tb orrery-action",h.textContent="Find moon",h.title="Reposition the camera along the moon's direction so both Earth and moon sit in frame",h.addEventListener("click",()=>this.findMoonHandler?.()),c.appendChild(h)}a.appendChild(l)}this.applyAll()}isWindVisible(){return this.activeWindIntensity()!==null&&this.liveFreshnessOk}liveFreshnessOk=!0;setLiveFreshnessOk(t){this.liveFreshnessOk!==t&&(this.liveFreshnessOk=t,this.applyAll())}activeWindIntensity(){for(const t of _r)if(this.state[t])return t;return null}isMapMode(){return this.state.map}isLocationActive(){return this.state.location}isAutoOrbit(){return this.state.orbit}isSkyboxHiRes(){return this.state.skyboxHi}activeOverlay(){for(const t of Ri)if(this.state[t])return t;return null}activeCloudSource(){for(const t of Ci)if(this.state[t])return t;return null}onOverlayChange(t){this.overlayChangeHandler=t}onCloudsChange(t){this.cloudsChangeHandler=t}onFindMoon(t){this.findMoonHandler=t}onSkyboxHiResChange(t){this.skyboxHiResHandler=t}setLayer(t,e){if(!(t in Rl))return;const n=t;if(this.state[n]!==e){if(this.state[n]=e,e){const r=Ri.includes(n)?Ri:Ci.includes(n)?Ci:_r.includes(n)?_r:null;if(r)for(const s of r)s!==n&&this.state[s]&&(this.state[s]=!1,this.apply(s))}this.apply(n),Nh(this.state)}}toggle(t){const e=this.state[t];this.state[t]=!e;const n=Ri.includes(t)?Ri:Ci.includes(t)?Ci:_r.includes(t)?_r:null;if(n&&this.state[t])for(const r of n)r!==t&&this.state[r]&&(this.state[r]=!1,this.apply(r));this.apply(t),Nh(this.state),Ri.includes(t)&&this.overlayChangeHandler?.(this.activeOverlay()),Ci.includes(t)&&this.cloudsChangeHandler?.(this.activeCloudSource()),t==="skyboxHi"&&this.skyboxHiResHandler?.(this.state.skyboxHi)}toggleOpen(){this.open=!this.open,this.panel.classList.toggle("collapsed",!this.open),ux(this.open)}onboardingHint=null;maybeShowOnboardingHint(t){if(dx())return;const e=document.createElement("div");e.className="orrery-onboarding-hint",e.innerHTML=`
      <span>Click <strong>earth-clock</strong> for layers · clock · location · eclipses</span>
      <span class="orrery-onboarding-arrow">↓</span>
    `,t.appendChild(e),this.onboardingHint=e,setTimeout(()=>this.dismissOnboardingHint(),7e3)}dismissOnboardingHint(){if(!this.onboardingHint)return;this.onboardingHint.classList.add("orrery-onboarding-dismissed"),fx(!0);const t=this.onboardingHint;this.onboardingHint=null,setTimeout(()=>t.remove(),600)}applyAll(){Object.keys(So).forEach(t=>this.apply(t))}apply(t){const e=this.state[t],n=this.liveFreshnessOk,{globe:r,atmosphere:s,coastlines:a,clouds:o,aurora:l,fires:c,hurricanes:h,hurricaneTracks:u,lightning:d,overlay:p,radiusVectors:g,eclipse:_,flatMap:m,trails:f}=this.layers;switch(t){case"cloudsViirs":case"cloudsGfs":case"cloudsGoes":{const M=this.activeCloudSource()!==null&&n;o.mesh.visible=M,m.setCloudsVisible(M);break}case"aurora":l.mesh.visible=e&&n,l.flatMesh.visible=e&&n;break;case"fires":c.mesh.visible=e&&n,c.flatMesh.visible=e&&n;break;case"hurricanes":h.mesh.visible=e&&n,h.flatMesh.visible=e&&n;break;case"tracks":u.mesh.visible=e&&n,u.flatMesh.visible=e&&n;break;case"eclipse":_.mesh.visible=e,this.panels.eclipse?.setVisible(e);break;case"lightning":d.mesh.visible=e&&n,d.flatMesh.visible=e&&n;break;case"mslp":case"temp":case"rh":case"tpw":case"tcw":p.mesh.visible=this.activeOverlay()!==null&&n;break;case"coastlines":a.mesh.visible=e,a.flatMesh.visible=e;break;case"atmosphere":s.mesh.visible=e;break;case"hands":g.setSunBeamVisible(e),g.setMoonBeamVisible(e),g.setSunDotVisible(e),g.setMoonDotVisible(e);break;case"terminator":r.setTerminatorVisible(e),o.setTerminatorEnabled(e),l.setTerminatorEnabled(e),m.setTerminatorEnabled(e);break;case"nightLights":r.setNightLightsVisible(e),m.setNightLightsVisible(e);break;case"windSubtle":case"windStandard":case"windBold":{const M=this.activeWindIntensity();M&&f.setIntensity(ix[M]);break}case"skyboxHi":break;case"map":break;case"orbit":break;case"clock":this.panels.clock?.setVisible(e);break;case"data":this.panels.data?.setVisible(e);break;case"location":this.panels.location?.setVisible(e);break}const w=this.buttons[t];w&&w.classList.toggle("highlighted",e)}}function cx(){try{const i=localStorage.getItem(Yn);return i?JSON.parse(i).layers??{}:{}}catch{return{}}}function Nh(i){try{const t=localStorage.getItem(Yn),e=t?JSON.parse(t):{};e.layers=i,localStorage.setItem(Yn,JSON.stringify(e))}catch{}}function hx(){try{const i=localStorage.getItem(Yn);return i?!!JSON.parse(i).open:!1}catch{return!1}}function ux(i){try{const t=localStorage.getItem(Yn),e=t?JSON.parse(t):{};e.open=i,localStorage.setItem(Yn,JSON.stringify(e))}catch{}}function dx(){try{const i=localStorage.getItem(Yn);return i?!!JSON.parse(i).onboarded:!1}catch{return!1}}function fx(i){try{const t=localStorage.getItem(Yn),e=t?JSON.parse(t):{};e.onboarded=i,localStorage.setItem(Yn,JSON.stringify(e))}catch{}}let Fh=!1;function px(){if(Fh)return;Fh=!0;const i=`
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
      /* Wide enough for "Geography" (the longest current label) to fit on one line
         without wrapping the trailing " | " separator onto a second line. */
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
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}class mx{info(t,e){this.log(t,e,"info")}warn(t,e){this.log(t,e,"warn")}pending(t,e){this.log(t,e,"pending")}log(t,e,n){const r=n==="warn"?"warn":n==="pending"?"…":"✓";n==="warn"?console.warn(`[orrery] ${r} ${t}: ${e}`):console.log(`[orrery] ${r} ${t}: ${e}`)}}class gx{rows=new Map;subscribers=new Set;orderIndex=new Map;report(t,e){this.rows.set(t,e),this.subscribers.forEach(n=>n())}get(t){return this.rows.get(t)}setOrder(t){this.orderIndex.clear(),t.forEach((e,n)=>this.orderIndex.set(e,n)),this.subscribers.forEach(e=>e())}entries(){const t=Number.MAX_SAFE_INTEGER;return Array.from(this.rows.entries()).sort((e,n)=>{const r=this.orderIndex.get(e[0])??t,s=this.orderIndex.get(n[0])??t;return r!==s?r-s:e[0].localeCompare(n[0])})}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}}const _x={wind:"https://nomads.ncep.noaa.gov/",mslp:"https://nomads.ncep.noaa.gov/",temp:"https://nomads.ncep.noaa.gov/",rh:"https://nomads.ncep.noaa.gov/",tpw:"https://nomads.ncep.noaa.gov/",tcw:"https://nomads.ncep.noaa.gov/","gfs-clouds":"https://nomads.ncep.noaa.gov/",aurora:"https://www.swpc.noaa.gov/products/aurora-30-minute-forecast",kp:"https://www.swpc.noaa.gov/products/planetary-k-index",hurricanes:"https://www.nhc.noaa.gov/","storm-tracks":"https://www.nhc.noaa.gov/",viirs:"https://gibs.earthdata.nasa.gov/",fires:"https://firms.modaps.eosdis.nasa.gov/",lightning:"https://www.blitzortung.org/","day map":"https://www.solarsystemscope.com/textures/","night map":"https://www.solarsystemscope.com/textures/",moon:"https://astrogeology.usgs.gov/",coastlines:"https://www.naturalearthdata.com/",eclipse:"https://eclipse.gsfc.nasa.gov/SEcat5/SE2021-2030.html"};class vx{root;body;registry;ageTimer;closeHandler=null;constructor(t,e){wx(),this.registry=e,this.root=document.createElement("div"),this.root.id="orrery-data",this.root.classList.add("hidden"),this.root.innerHTML=`
      <div class="orrery-data-titlebar">
        <span class="orrery-data-title">data</span>
        <span class="orrery-data-close" id="orrery-data-close" title="Close panel">✕</span>
      </div>
      <div class="orrery-data-rows" id="orrery-data-rows"></div>
    `,t.appendChild(this.root),this.body=this.root.querySelector("#orrery-data-rows"),this.root.querySelector("#orrery-data-close").addEventListener("click",()=>this.closeHandler?.()),e.subscribe(()=>this.render()),this.ageTimer=window.setInterval(()=>this.render(),15e3),this.render()}onClose(t){this.closeHandler=t}setVisible(t){this.root.classList.toggle("hidden",!t),t&&this.render()}destroy(){window.clearInterval(this.ageTimer),this.root.remove()}render(){const t=Date.now(),e=this.registry.entries();if(!e.length){this.body.innerHTML='<div class="orrery-data-empty">no data yet</div>';return}const n=e.map(([r,s])=>this.renderRow(r,s,t));this.body.innerHTML=n.join("")}renderRow(t,e,n){const r=xx(e,n),s=yx(e,n),a=_x[t],o=a?`<a class="orrery-data-source-link" href="${bx(a)}" target="_blank" rel="noopener">${fr(e.source)} ↗</a>`:`<span class="orrery-data-source-link">${fr(e.source)}</span>`,l=e.error?fr(e.error):e.detail?fr(e.detail):"";return`<div class="orrery-data-row ${r.cls}"><span class="orrery-data-status">${r.mark}</span><span class="orrery-data-key">${fr(t)}</span><span class="orrery-data-source">${o}</span><span class="orrery-data-detail">${l}</span><span class="orrery-data-age">${fr(s)}</span></div>`}}function xx(i,t){return i.error?{mark:"✗",cls:"err"}:i.bundled?{mark:"●",cls:"static"}:i.fetched?Sx(i,t)?{mark:"●",cls:"stale"}:{mark:"✓",cls:"ok"}:{mark:"⋯",cls:"pending"}}function yx(i,t){return i.error?"fetch failed":i.bundled?"bundled":i.fetched?Mx(t-i.fetched.getTime()):"fetching…"}function Sx(i,t){return!i.fetched||i.bundled||!i.refreshSeconds?!1:t-i.fetched.getTime()>i.refreshSeconds*2*1e3}function Mx(i){const t=Math.floor(i/1e3);if(t<60)return`${t}s ago`;const e=Math.floor(t/60);if(e<60)return`${e}m ago`;const n=Math.floor(e/60);return n<48?`${n}h ago`:`${Math.floor(n/24)}d ago`}function fr(i){return i.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t])}function bx(i){return i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}let Oh=!1;function wx(){if(Oh)return;Oh=!0;const i=`
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
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}const Ur="orrery.clock.v1",Fi=[-10080,-1440,-720,-480,-240,-120,-60,-1,0,1,60,120,240,480,720,1440,10080],Ex=60;class Tx{root;clickArea;timeEl;dateEl;zoneEl;expandBtn;controlsEl;warpReadoutEl;pauseBtn;staleCaptionEl;staleDateEl;zone;expanded;warpBeforePause=Ex;lastTimeStr="";lastDateStr="";lastZoneStr="";lastWarpStr="";lastPauseLabel="";lastStaleDateStr="";callbacks;constructor(t,e={}){Ux(),this.callbacks=e,this.zone=Dx(),this.expanded=Ix(),this.root=document.createElement("div"),this.root.id="orrery-clock",this.root.innerHTML=`
      <div class="orrery-clock-click" id="orrery-clock-click" title="Click to toggle UTC ⇄ Local">
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
    `,t.appendChild(this.root),this.clickArea=this.root.querySelector("#orrery-clock-click"),this.timeEl=this.root.querySelector("#orrery-clock-time"),this.dateEl=this.root.querySelector("#orrery-clock-date"),this.zoneEl=this.root.querySelector("#orrery-clock-zone"),this.expandBtn=this.root.querySelector("#orrery-clock-expand"),this.controlsEl=this.root.querySelector("#orrery-clock-controls"),this.warpReadoutEl=this.root.querySelector("#orrery-clock-warp"),this.pauseBtn=this.root.querySelector("#orrery-clock-pause"),this.staleCaptionEl=this.root.querySelector("#orrery-clock-stale"),this.staleDateEl=this.root.querySelector("#orrery-clock-stale-date");const n=this.root.querySelector("#orrery-clock-close");this.clickArea.addEventListener("click",r=>{r.target!==this.expandBtn&&r.target!==n&&(this.zone=this.zone==="utc"?"local":"utc",Lx(this.zone),this.lastTimeStr=this.lastDateStr=this.lastZoneStr="")}),this.expandBtn.addEventListener("click",()=>{this.expanded=!this.expanded,Bh(this.expanded),this.refreshExpandState()}),this.refreshExpandState(),n.addEventListener("click",()=>this.callbacks.onClose?.()),this.root.querySelector("#orrery-clock-slower").addEventListener("click",()=>{const r=window.__orreryTimeWarp??1,s=Cx(r);r!==0&&(this.warpBeforePause=r),window.__orreryTimeWarp=s}),this.root.querySelector("#orrery-clock-faster").addEventListener("click",()=>{const r=window.__orreryTimeWarp??1,s=Rx(r);r!==0&&(this.warpBeforePause=r),window.__orreryTimeWarp=s}),this.root.querySelector("#orrery-clock-reset").addEventListener("click",()=>{window.__orreryTimeWarp=1,this.callbacks.onSnapToLive?.()}),this.pauseBtn.addEventListener("click",()=>{const r=window.__orreryTimeWarp??1;r===0?window.__orreryTimeWarp=this.warpBeforePause||1:(this.warpBeforePause=r,window.__orreryTimeWarp=0)})}setVisible(t){this.root.classList.toggle("hidden",!t)}setControlsExpanded(t){this.expanded!==t&&(this.expanded=t,Bh(this.expanded),this.refreshExpandState())}setLiveDataStale(t,e){if(this.staleCaptionEl.classList.toggle("hidden",!t),t&&e){const n=e.toISOString().slice(0,10);n!==this.lastStaleDateStr&&(this.staleDateEl.textContent=n,this.lastStaleDateStr=n)}}refreshExpandState(){this.controlsEl.classList.toggle("hidden",!this.expanded),this.expandBtn.classList.toggle("active",this.expanded)}setTime(t){let e,n,r;this.zone==="utc"?(e=`${bn(t.getUTCHours())}:${bn(t.getUTCMinutes())}:${bn(t.getUTCSeconds())}`,n=`${t.getUTCFullYear()}-${bn(t.getUTCMonth()+1)}-${bn(t.getUTCDate())}  ${kh(t.getUTCDay())}`,r="UTC"):(e=`${bn(t.getHours())}:${bn(t.getMinutes())}:${bn(t.getSeconds())}`,n=`${t.getFullYear()}-${bn(t.getMonth()+1)}-${bn(t.getDate())}  ${kh(t.getDay())}`,r=Px()),e!==this.lastTimeStr&&(this.timeEl.textContent=e,this.lastTimeStr=e),n!==this.lastDateStr&&(this.dateEl.textContent=n,this.lastDateStr=n),r!==this.lastZoneStr&&(this.zoneEl.textContent=r,this.lastZoneStr=r);const s=window.__orreryTimeWarp??1,a=s===0?"paused":`× ${Ax(s)}`;a!==this.lastWarpStr&&(this.warpReadoutEl.textContent=a,this.warpReadoutEl.classList.toggle("warped",s!==1),this.expandBtn.classList.toggle("warped",s!==1),this.lastWarpStr=a);const o=s===0?"▶":"⏸";o!==this.lastPauseLabel&&(this.pauseBtn.textContent=o,this.pauseBtn.title=s===0?"Resume":"Pause",this.lastPauseLabel=o)}}function Ax(i){return Math.abs(i)>=1e3?`${(i/1e3).toFixed(1)}k`:Number.isInteger(i)?String(i):i.toFixed(2).replace(/\.?0+$/,"")}function Rx(i){for(const t of Fi)if(t>i)return t;return Fi[Fi.length-1]}function Cx(i){for(let t=Fi.length-1;t>=0;t--)if(Fi[t]<i)return Fi[t];return Fi[0]}function bn(i){return i<10?`0${i}`:`${i}`}function kh(i){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][i]}function Px(i){try{const t=Intl.DateTimeFormat().resolvedOptions().timeZone;return t&&t.includes("/")?t.split("/").slice(-1)[0].replace(/_/g," "):t||"local"}catch{return"local"}}function Dx(){try{const i=localStorage.getItem(Ur);return i&&JSON.parse(i).zone==="local"?"local":"utc"}catch{return"utc"}}function Lx(i){try{const t=localStorage.getItem(Ur),e=t?JSON.parse(t):{};e.zone=i,localStorage.setItem(Ur,JSON.stringify(e))}catch{}}function Ix(){try{const i=localStorage.getItem(Ur);return i?!!JSON.parse(i).expanded:!1}catch{return!1}}function Bh(i){try{const t=localStorage.getItem(Ur),e=t?JSON.parse(t):{};e.expanded=i,localStorage.setItem(Ur,JSON.stringify(e))}catch{}}let zh=!1;function Ux(){if(zh)return;zh=!0;const i=`
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
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}class Nx{root;placeEl;coordsEl;solarEl;currentRowEl;sunRowEl;moonRowEl;sunCoordsEl;moonCoordsEl;geoButton;geoStatus;lat=null;lon=null;source=null;clearHandler=null;geoHandler=null;sunBeamHandler=null;moonBeamHandler=null;lastSunStr="";lastMoonStr="";constructor(t){Fx();const e=typeof navigator<"u"&&"geolocation"in navigator;this.root=document.createElement("div"),this.root.id="orrery-location",this.root.classList.add("hidden"),this.root.innerHTML=`
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
        <div class="orrery-loc-line3">
          <span class="orrery-loc-solar-label">true solar time</span>
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
    `,t.appendChild(this.root),this.placeEl=this.root.querySelector("#orrery-loc-place"),this.coordsEl=this.root.querySelector("#orrery-loc-coords"),this.solarEl=this.root.querySelector("#orrery-loc-solar"),this.currentRowEl=this.root.querySelector("#orrery-loc-row-current"),this.sunRowEl=this.root.querySelector("#orrery-loc-row-sun"),this.moonRowEl=this.root.querySelector("#orrery-loc-row-moon"),this.sunCoordsEl=this.root.querySelector("#orrery-loc-sun-coords"),this.moonCoordsEl=this.root.querySelector("#orrery-loc-moon-coords"),this.geoButton=this.root.querySelector("#orrery-loc-geo"),this.geoStatus=this.root.querySelector("#orrery-loc-geostatus"),this.root.querySelector("#orrery-loc-clear").addEventListener("click",()=>this.clearHandler?.()),this.geoButton?.addEventListener("click",()=>this.requestGeolocation());const r=s=>a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),s())};this.sunRowEl.addEventListener("click",()=>this.sunBeamHandler?.()),this.sunRowEl.addEventListener("keydown",r(()=>this.sunBeamHandler?.())),this.moonRowEl.addEventListener("click",()=>this.moonBeamHandler?.()),this.moonRowEl.addEventListener("keydown",r(()=>this.moonBeamHandler?.()))}onSunBeam(t){this.sunBeamHandler=t}onMoonBeam(t){this.moonBeamHandler=t}onClear(t){this.clearHandler=t}onGeolocate(t){this.geoHandler=t}setBeamCoords(t,e){const n=`${bo(t.lat)}, ${wo(t.lon)}`,r=`${bo(e.lat)}, ${wo(e.lon)}`;n!==this.lastSunStr&&(this.sunCoordsEl.textContent=n,this.lastSunStr=n),r!==this.lastMoonStr&&(this.moonCoordsEl.textContent=r,this.lastMoonStr=r)}setVisible(t){this.root.classList.toggle("hidden",!t)}setLocation(t,e,n){this.lat=t,this.lon=e,this.source=n,this.coordsEl.textContent=`${bo(t)}, ${wo(e)}`,this.placeEl.textContent="looking up…",this.refreshSelection()}setPlaceName(t){this.placeEl.textContent=t??"—"}setNow(t){if(this.lat===null||this.lon===null)return;const e=(t.getUTCHours()+t.getUTCMinutes()/60+t.getUTCSeconds()/3600+this.lon/15+24)%24,n=Math.floor(e),r=Math.floor((e-n)*60),s=Math.floor(((e-n)*60-r)*60),a=`${Mo(n)}:${Mo(r)}:${Mo(s)}`;this.solarEl.textContent!==a&&(this.solarEl.textContent=a)}reset(){this.lat=this.lon=null,this.source=null,this.placeEl.textContent="click the globe to drop a pin",this.coordsEl.textContent="—",this.solarEl.textContent="—",this.geoStatus&&(this.geoStatus.textContent=""),this.refreshSelection()}refreshSelection(){this.currentRowEl.classList.toggle("selected",this.source==="click"||this.source==="geolocation"),this.sunRowEl.classList.toggle("selected",this.source==="sun"),this.moonRowEl.classList.toggle("selected",this.source==="moon")}requestGeolocation(){!navigator.geolocation||!this.geoButton||!this.geoStatus||(this.geoButton.disabled=!0,this.geoStatus.textContent="asking browser…",navigator.geolocation.getCurrentPosition(t=>{this.geoButton.disabled=!1,this.geoStatus.textContent="",this.geoHandler?.(t.coords.latitude,t.coords.longitude)},t=>{this.geoButton.disabled=!1,this.geoStatus.textContent=t.code===t.PERMISSION_DENIED?"permission denied":t.code===t.POSITION_UNAVAILABLE?"position unavailable":t.code===t.TIMEOUT?"timed out":"unavailable"},{enableHighAccuracy:!1,timeout:1e4,maximumAge:300*1e3}))}}function Mo(i){return i<10?`0${i}`:`${i}`}function bo(i){return`${Math.abs(i).toFixed(2)}°${i>=0?"N":"S"}`}function wo(i){return`${Math.abs(i).toFixed(2)}°${i>=0?"E":"W"}`}let Hh=!1;function Fx(){if(Hh)return;Hh=!0;const i=`
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
    .orrery-loc-solar-label { color: #6e7a90; font-size: 10px; letter-spacing: 0.04em; }
    .orrery-loc-solar-value { color: #cfd6e4; font-size: 11px; }

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
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}const Qr=56,Eo=Qr/.2666,Ox=5,Gh=3e4,Vh=5*6e4;class kx{root;moonCircle;magnitudeEl;statusEl;placeEl;labelEl;solarSvg;lunarSvg;moonBloodCircle;scrubRoot;scrubInput;scrubMarker;scrubRelEl;playBtn;callbacks;lastMagnitudeStr="";lastStatusStr="";lastMoonR=-1;lastMoonX=NaN;lastMoonY=NaN;lastRelStr="";lastPauseLabel="";lastBloodOpacity=-1;mode="solar";scrubStartMs=0;scrubEndMs=0;scrubPeakMs=0;isDragging=!1;constructor(t,e={}){Bx(),this.callbacks=e,this.root=document.createElement("div"),this.root.id="orrery-sundisc",this.root.classList.add("hidden");const n=Qr*1.8;this.root.innerHTML=`
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
                cx="0" cy="0" r="${Qr}"
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
        <circle id="orrery-sundisc-moondisc-base"   cx="0" cy="0" r="${Qr}" fill="url(#orrery-sundisc-moongrad)"/>
        <circle id="orrery-sundisc-moondisc-blood"  cx="0" cy="0" r="${Qr}" fill="url(#orrery-sundisc-bloodgrad)" opacity="0"/>
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
    `,t.appendChild(this.root),this.moonCircle=this.root.querySelector("#orrery-sundisc-moon"),this.magnitudeEl=this.root.querySelector("#orrery-sundisc-mag"),this.statusEl=this.root.querySelector("#orrery-sundisc-status"),this.placeEl=this.root.querySelector("#orrery-sundisc-place"),this.labelEl=this.root.querySelector("#orrery-sundisc-label"),this.solarSvg=this.root.querySelector("#orrery-sundisc-svg-solar"),this.lunarSvg=this.root.querySelector("#orrery-sundisc-svg-lunar"),this.moonBloodCircle=this.root.querySelector("#orrery-sundisc-moondisc-blood"),this.scrubRoot=this.root.querySelector("#orrery-sundisc-scrub"),this.scrubInput=this.root.querySelector("#orrery-sundisc-scrub-input"),this.scrubMarker=this.root.querySelector("#orrery-sundisc-scrub-marker"),this.scrubRelEl=this.root.querySelector("#orrery-sundisc-scrub-rel"),this.playBtn=this.root.querySelector("#orrery-sundisc-play"),this.scrubInput.addEventListener("pointerdown",()=>{this.isDragging=!0}),window.addEventListener("pointerup",()=>{this.isDragging=!1}),window.addEventListener("pointercancel",()=>{this.isDragging=!1}),this.scrubInput.addEventListener("input",()=>{const r=this.scrubStartMs+this.scrubInput.valueAsNumber;this.callbacks.onScrubTo?.(r)}),this.root.querySelector("#orrery-sundisc-rev").addEventListener("click",()=>{this.callbacks.onStep?.(-Gh)}),this.root.querySelector("#orrery-sundisc-ff").addEventListener("click",()=>{this.callbacks.onStep?.(Gh)}),this.playBtn.addEventListener("click",()=>{this.callbacks.onPlayPause?.()}),this.root.querySelector("#orrery-sundisc-close").addEventListener("click",()=>{this.callbacks.onClose?.()})}setVisible(t){this.root.classList.toggle("hidden",!t)}setScrubControlsVisible(t){this.scrubRoot.classList.toggle("hidden",!t)}setMode(t){this.mode!==t&&(this.mode=t,this.solarSvg.classList.toggle("hidden",t!=="solar"),this.lunarSvg.classList.toggle("hidden",t!=="lunar"),this.labelEl.textContent=t==="lunar"?"the moon":"sky from",t==="lunar"&&(this.placeEl.textContent=""))}setLunarFraction(t){if(this.mode!=="lunar")return;const e=Math.max(0,Math.min(1,t));e!==this.lastBloodOpacity&&(this.moonBloodCircle.setAttribute("opacity",e.toFixed(3)),this.lastBloodOpacity=e)}setLunarReadout(t,e){t!==this.lastMagnitudeStr&&(this.magnitudeEl.textContent=t,this.lastMagnitudeStr=t),e!==this.lastStatusStr&&(this.statusEl.textContent=e,this.lastStatusStr=e)}setEclipseWindow(t,e,n){this.scrubStartMs=t.getTime()-Vh,this.scrubEndMs=e.getTime()+Vh,this.scrubPeakMs=n.getTime();const r=this.scrubEndMs-this.scrubStartMs;this.scrubInput.max=String(r);const s=(this.scrubPeakMs-this.scrubStartMs)/r;this.scrubMarker.style.left=`${(s*100).toFixed(2)}%`}setSimulatedTime(t){if(this.isDragging||this.scrubEndMs<=this.scrubStartMs)return;const e=Math.max(this.scrubStartMs,Math.min(this.scrubEndMs,t));this.scrubInput.valueAsNumber=e-this.scrubStartMs;const n=Math.round((t-this.scrubPeakMs)/1e3),r=n<0?"−":"+",s=Math.abs(n),a=Math.floor(s/60),o=s%60,l=`T${r}${a}:${o.toString().padStart(2,"0")}`;l!==this.lastRelStr&&(this.scrubRelEl.textContent=l,this.lastRelStr=l)}setPlaying(t){const e=t?"⏸":"▶";e!==this.lastPauseLabel&&(this.playBtn.textContent=e,this.playBtn.title=t?"Pause":"Resume",this.lastPauseLabel=e)}setPlaceName(t){this.placeEl.textContent=t??"—"}update(t){if(!t.sunIsUp||t.angularSeparationDeg>Ox)return!1;const e=t.offsetEastDeg*Eo,n=-t.offsetUpDeg*Eo,r=t.moonApparentRadiusDeg*Eo;e!==this.lastMoonX&&(this.moonCircle.setAttribute("cx",e.toFixed(2)),this.lastMoonX=e),n!==this.lastMoonY&&(this.moonCircle.setAttribute("cy",n.toFixed(2)),this.lastMoonY=n),r!==this.lastMoonR&&(this.moonCircle.setAttribute("r",r.toFixed(2)),this.lastMoonR=r);const s=t.magnitude;let a,o;return s<=0?(a="—",o=`${t.angularSeparationDeg.toFixed(2)}° apart`):s>=1?(a=`magnitude ${s.toFixed(3)}`,o=t.moonApparentRadiusDeg>t.sunApparentRadiusDeg?"total":"annular peak"):(a=`magnitude ${s.toFixed(3)}`,o=`${(s*100).toFixed(1)}% obscured`),a!==this.lastMagnitudeStr&&(this.magnitudeEl.textContent=a,this.lastMagnitudeStr=a),o!==this.lastStatusStr&&(this.statusEl.textContent=o,this.lastStatusStr=o),!0}}let Wh=!1;function Bx(){if(Wh)return;Wh=!0;const i=`
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
        top: 56px; left: 8px; right: 8px;
        max-height: calc(100vh - 130px);
        overflow-y: auto;
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
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}const zx={temperature:{stops:["#1a1a8c","#1aa6f2","#73d966","#f2d933","#d92626"]},humidity:{stops:["#b38c4d","#ccbf73","#8cbf66","#4d99bf","#264da6"]},pressure:{stops:["#7340a6","#4d8cd9","#8cd98c","#f2d959","#d94d33"]},water:{stops:["#d9d9cc","#a6ccd9","#4da6d9","#3366d9","#1a3399"]},cloud:{stops:["#333338","#737380","#b3b8c7","#e0ebfa","#a6d9ff"]}},Cl=240,Xh=10;class Hx{root;labelEl;minEl;midEl;maxEl;stopEls;lastSpec=null;constructor(t){Gx(),this.root=document.createElement("div"),this.root.id="orrery-scalekey",this.root.classList.add("hidden"),this.root.innerHTML=`
      <div class="orrery-scalekey-label" id="orrery-scalekey-label">—</div>
      <svg id="orrery-scalekey-svg" width="${Cl}" height="${Xh}">
        <defs>
          <linearGradient id="orrery-scalekey-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#000"/>
            <stop offset="25%"  stop-color="#000"/>
            <stop offset="50%"  stop-color="#000"/>
            <stop offset="75%"  stop-color="#000"/>
            <stop offset="100%" stop-color="#000"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${Cl}" height="${Xh}"
              fill="url(#orrery-scalekey-grad)" rx="2" ry="2"/>
      </svg>
      <div class="orrery-scalekey-ticks">
        <span class="orrery-scalekey-min" id="orrery-scalekey-min">—</span>
        <span class="orrery-scalekey-mid" id="orrery-scalekey-mid">—</span>
        <span class="orrery-scalekey-max" id="orrery-scalekey-max">—</span>
      </div>
    `,t.appendChild(this.root),this.labelEl=this.root.querySelector("#orrery-scalekey-label"),this.minEl=this.root.querySelector("#orrery-scalekey-min"),this.midEl=this.root.querySelector("#orrery-scalekey-mid"),this.maxEl=this.root.querySelector("#orrery-scalekey-max"),this.stopEls=Array.from(this.root.querySelectorAll("#orrery-scalekey-grad stop"))}setVisible(t){this.root.classList.toggle("hidden",!t)}update(t){if(this.lastSpec&&this.lastSpec.label===t.label&&this.lastSpec.palette===t.palette&&this.lastSpec.displayMin===t.displayMin&&this.lastSpec.displayMid===t.displayMid&&this.lastSpec.displayMax===t.displayMax)return;this.lastSpec={...t},this.labelEl.textContent=t.label,this.minEl.textContent=t.displayMin,this.midEl.textContent=t.displayMid,this.maxEl.textContent=t.displayMax;const e=zx[t.palette].stops;for(let n=0;n<5;n++)this.stopEls[n].setAttribute("stop-color",e[n])}}let $h=!1;function Gx(){if($h)return;$h=!0;const i=`
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
      width: ${Cl}px;
      margin: 4px auto 0;
      font-size: 10px;
      color: #8a93a7;
    }
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}const Vx=Date.UTC(2e3,0,1,12,0,0),sa=Math.PI/180;function ju(i){return(i.getTime()-Vx)/864e5}function Zu(i){const t=ju(i),e=(280.46+.9856474*t)*sa,n=(357.528+.9856003*t)*sa,r=e+(1.915*Math.sin(n)+.02*Math.sin(2*n))*sa,s=(23.439-4e-7*t)*sa,a=Math.atan2(Math.cos(s)*Math.sin(r),Math.cos(r)),o=Math.asin(Math.sin(s)*Math.sin(r));return{ra:a,dec:o}}function Ku(i){let e=18.697374558+24.06570982441908*ju(i);return e=(e%24+24)%24,e*Math.PI/12}function Ju(i,t=new C){const{ra:e,dec:n}=Zu(i);return t.set(Math.cos(n)*Math.cos(e),Math.sin(n),-Math.cos(n)*Math.sin(e))}function ms(i){return Ku(i)}const pn=Math.PI/180,wa=23.44*pn,qh=new C(-Math.sin(wa),Math.cos(wa),0),To=Math.asin(696e3/149597870)/pn,Wx=1738/6378.14,Ao=new C,pr=new C,aa=new C,Ro=new C,Co=new C,jr=new C,Zr=new C;function Xx(i,t,e,n,r){const s=i*pn,a=t*pn,o=Math.cos(s),l=o*Math.cos(a),c=Math.sin(s),h=-o*Math.sin(a),u=ms(e),d=Math.cos(u),p=Math.sin(u),g=l*d+h*p,_=c,m=-l*p+h*d,f=Math.cos(wa),w=Math.sin(wa);Ao.set(g*f-_*w,g*w+_*f,m),pr.copy(Ao).normalize();const M=pr.dot(qh);aa.copy(qh).addScaledVector(pr,-M).normalize(),Ro.crossVectors(pr,aa),Zr.copy(n).normalize();const S=Zr.dot(pr),L=Math.asin(Po(S,-1,1))/pn,T=Zr.dot(Ro),A=Zr.dot(aa);let P=Math.atan2(T,A)/pn;P<0&&(P+=360),Co.copy(r).sub(Ao);const b=Co.length();jr.copy(Co).divideScalar(b);const y=jr.dot(pr),R=Math.asin(Po(y,-1,1))/pn,H=jr.dot(Ro),O=jr.dot(aa);let W=Math.atan2(H,O)/pn;W<0&&(W+=360);const $=Po(Zr.dot(jr),-1,1),G=Math.acos($)/pn,Y=Math.asin(Wx/b)/pn,B=(To+Y-G)/(2*To);let K=W-P;K>180&&(K-=360),K<-180&&(K+=360);const rt=K*Math.cos(L*pn),ft=R-L;return{sunAltitudeDeg:L,sunAzimuthDeg:P,moonAltitudeDeg:R,moonAzimuthDeg:W,angularSeparationDeg:G,sunApparentRadiusDeg:To,moonApparentRadiusDeg:Y,magnitude:B,offsetEastDeg:rt,offsetUpDeg:ft,sunIsUp:L>0}}function Po(i,t,e){return i<t?t:i>e?e:i}const Ea=[{id:"20260812",name:"Spain total solar eclipse (2026)",region:"Iceland → Greenland → northern Spain",type:"total",peakUtc:new Date("2026-08-12T17:46:00Z"),startUtc:new Date("2026-08-12T15:34:00Z"),endUtc:new Date("2026-08-12T19:58:00Z"),maxTotalitySec:134},{id:"20270802",name:"Long-duration total solar eclipse over Spain & North Africa (2027)",region:"Atlantic → Gibraltar → Spain → Egypt → Saudi Arabia",type:"total",peakUtc:new Date("2027-08-02T10:07:00Z"),startUtc:new Date("2027-08-02T07:30:00Z"),endUtc:new Date("2027-08-02T12:43:00Z"),maxTotalitySec:384},{id:"20280722",name:"Australia & New Zealand total solar eclipse (2028)",region:"Indian Ocean → central Australia → Sydney → New Zealand",type:"total",peakUtc:new Date("2028-07-22T02:56:00Z"),startUtc:new Date("2028-07-22T00:30:00Z"),endUtc:new Date("2028-07-22T05:23:00Z"),maxTotalitySec:310},{id:"20240408",name:"North American total solar eclipse (2024)",region:"Mexico → Texas → Indianapolis → Ohio → eastern Canada",type:"total",peakUtc:new Date("2024-04-08T18:18:00Z"),startUtc:new Date("2024-04-08T15:42:00Z"),endUtc:new Date("2024-04-08T20:52:00Z"),maxTotalitySec:268}];function $x(i=new Date){return Ea.filter(e=>e.endUtc.getTime()>i.getTime()).sort((e,n)=>e.peakUtc.getTime()-n.peakUtc.getTime())[0]??null}const qx=[{id:"20260303",name:"Total lunar eclipse (2026)",region:"Pacific · Asia · Australia · Americas (Pacific Rim)",type:"total",startUtc:new Date("2026-03-03T08:39:00Z"),peakUtc:new Date("2026-03-03T11:33:00Z"),endUtc:new Date("2026-03-03T14:28:00Z"),umbralMagnitude:1.151,totalitySec:3480},{id:"20260828",name:"Partial lunar eclipse (2026)",region:"Americas · Europe · Africa · west Asia",type:"partial",startUtc:new Date("2026-08-28T02:39:00Z"),peakUtc:new Date("2026-08-28T04:54:00Z"),endUtc:new Date("2026-08-28T07:38:00Z"),umbralMagnitude:.929,totalitySec:0},{id:"20280112",name:"Partial lunar eclipse (2028)",region:"Asia · Australia · Pacific",type:"partial",startUtc:new Date("2028-01-12T01:43:00Z"),peakUtc:new Date("2028-01-12T04:13:00Z"),endUtc:new Date("2028-01-12T06:42:00Z"),umbralMagnitude:.733,totalitySec:0},{id:"20281231",name:"Total lunar eclipse (2028)",region:"Europe · Africa · Asia · Americas",type:"total",startUtc:new Date("2028-12-31T14:08:00Z"),peakUtc:new Date("2028-12-31T16:53:00Z"),endUtc:new Date("2028-12-31T19:39:00Z"),umbralMagnitude:1.25,totalitySec:4260},{id:"20290626",name:"Total lunar eclipse (2029) — deep totality",region:"Americas · Europe · Africa",type:"total",startUtc:new Date("2029-06-26T00:33:00Z"),peakUtc:new Date("2029-06-26T03:23:00Z"),endUtc:new Date("2029-06-26T06:13:00Z"),umbralMagnitude:1.844,totalitySec:6120},{id:"20291220",name:"Total lunar eclipse (2029)",region:"Americas · Europe · Africa",type:"total",startUtc:new Date("2029-12-20T19:54:00Z"),peakUtc:new Date("2029-12-20T22:42:00Z"),endUtc:new Date("2029-12-21T01:31:00Z"),umbralMagnitude:1.118,totalitySec:3240}];function Yx(i,t){const e=t.getTime(),n=i.startUtc.getTime(),r=i.peakUtc.getTime(),s=i.endUtc.getTime();return e<=n||e>=s?0:e<=r?(e-n)/(r-n):(s-e)/(s-r)}class jx{root;solarListEl;lunarListEl;solarTabBtn;lunarTabBtn;callbacks;solarSorted;lunarSorted;solarRowEls=new Map;lunarRowEls=new Map;selectedSolarId=null;selectedLunarId=null;activeTab="solar";constructor(t,e={}){Zx(),this.callbacks=e,this.solarSorted=[...Ea].sort((r,s)=>r.peakUtc.getTime()-s.peakUtc.getTime()),this.lunarSorted=[...qx].sort((r,s)=>r.peakUtc.getTime()-s.peakUtc.getTime()),this.root=document.createElement("div"),this.root.id="orrery-eclipse",this.root.classList.add("hidden"),this.root.innerHTML=`
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
    `,t.appendChild(this.root),this.solarListEl=this.root.querySelector("#orrery-ecl-list-solar"),this.lunarListEl=this.root.querySelector("#orrery-ecl-list-lunar"),this.solarTabBtn=this.root.querySelector("#orrery-ecl-tab-solar"),this.lunarTabBtn=this.root.querySelector("#orrery-ecl-tab-lunar"),this.root.querySelector("#orrery-ecl-close").addEventListener("click",()=>this.callbacks.onClose?.()),this.solarTabBtn.addEventListener("click",()=>this.setActiveTab("solar")),this.lunarTabBtn.addEventListener("click",()=>this.setActiveTab("lunar")),this.renderSolarList(),this.renderLunarList()}setVisible(t){this.root.classList.toggle("hidden",!t)}setSelected(t,e){if(t==="solar"){if(this.selectedSolarId===e)return;this.selectedSolarId!==null&&this.solarRowEls.get(this.selectedSolarId)?.classList.remove("selected"),this.selectedSolarId=e,e!==null&&this.solarRowEls.get(e)?.classList.add("selected")}else{if(this.selectedLunarId===e)return;this.selectedLunarId!==null&&this.lunarRowEls.get(this.selectedLunarId)?.classList.remove("selected"),this.selectedLunarId=e,e!==null&&this.lunarRowEls.get(e)?.classList.add("selected")}}getActiveTab(){return this.activeTab}setActiveTab(t){this.activeTab!==t&&(this.activeTab=t,this.solarTabBtn.classList.toggle("active",t==="solar"),this.lunarTabBtn.classList.toggle("active",t==="lunar"),this.solarListEl.classList.toggle("hidden",t!=="solar"),this.lunarListEl.classList.toggle("hidden",t!=="lunar"),this.callbacks.onTabChange?.(t))}renderSolarList(){const t=Date.now();this.solarListEl.innerHTML="",this.solarRowEls.clear();for(const e of this.solarSorted){const n=document.createElement("div");n.className="orrery-ecl-item",e.endUtc.getTime()<t&&n.classList.add("past"),n.setAttribute("role","button"),n.setAttribute("tabindex","0"),n.title="Click to jump to T−1m and start at 60× warp";const r=e.peakUtc.toISOString().slice(0,16).replace("T"," ")+"Z",s=e.maxTotalitySec>=60?`${Math.floor(e.maxTotalitySec/60)}m ${e.maxTotalitySec%60}s`:`${e.maxTotalitySec}s`;n.innerHTML=`
        <div class="orrery-ecl-line1">
          <span class="orrery-ecl-jump">▶</span>
          <span class="orrery-ecl-name">${oa(e.name)}</span>
        </div>
        <div class="orrery-ecl-line2">
          <span class="orrery-ecl-peak">${r}</span>
          <span class="orrery-ecl-type">${e.type}</span>
          <span class="orrery-ecl-dur">max ${s}</span>
        </div>
        <div class="orrery-ecl-line3">${oa(e.region)}</div>
      `,n.addEventListener("click",()=>this.callbacks.onJumpSolar?.(e)),n.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this.callbacks.onJumpSolar?.(e))}),this.solarListEl.appendChild(n),this.solarRowEls.set(e.id,n)}this.selectedSolarId!==null&&this.solarRowEls.get(this.selectedSolarId)?.classList.add("selected")}renderLunarList(){const t=Date.now();this.lunarListEl.innerHTML="",this.lunarRowEls.clear();for(const e of this.lunarSorted){const n=document.createElement("div");n.className="orrery-ecl-item",e.endUtc.getTime()<t&&n.classList.add("past"),n.setAttribute("role","button"),n.setAttribute("tabindex","0"),n.title="Click to jump to T−1m and start at 60× warp";const r=e.peakUtc.toISOString().slice(0,16).replace("T"," ")+"Z",s=e.type==="total"?`tot ${Math.floor(e.totalitySec/60)}m ${e.totalitySec%60}s`:`mag ${e.umbralMagnitude.toFixed(2)}`;n.innerHTML=`
        <div class="orrery-ecl-line1">
          <span class="orrery-ecl-jump">▶</span>
          <span class="orrery-ecl-name">${oa(e.name)}</span>
        </div>
        <div class="orrery-ecl-line2">
          <span class="orrery-ecl-peak">${r}</span>
          <span class="orrery-ecl-type">${e.type}</span>
          <span class="orrery-ecl-dur">${s}</span>
        </div>
        <div class="orrery-ecl-line3">${oa(e.region)}</div>
      `,n.addEventListener("click",()=>this.callbacks.onJumpLunar?.(e)),n.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this.callbacks.onJumpLunar?.(e))}),this.lunarListEl.appendChild(n),this.lunarRowEls.set(e.id,n)}this.selectedLunarId!==null&&this.lunarRowEls.get(this.selectedLunarId)?.classList.add("selected")}}function oa(i){return i.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}let Yh=!1;function Zx(){if(Yh)return;Yh=!0;const i=`
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
  `,t=document.createElement("style");t.textContent=i,document.head.appendChild(t)}const Kx={temp:"current-temp-surface-level-gfs-1.0.json",relative_humidity:"current-relative_humidity-surface-level-gfs-1.0.json",air_density:"current-air_density-surface-level-gfs-1.0.json",total_precipitable_water:"current-total_precipitable_water-gfs-1.0.json",total_cloud_water:"current-total_cloud_water-gfs-1.0.json",total_cloud_cover:"current-total_cloud_cover-gfs-1.0.json",mean_sea_level_pressure:"current-mean_sea_level_pressure-gfs-1.0.json"};class Jx{baseUrl;constructor(t="/data"){this.baseUrl=t}async getWindGrid(t){const e=`${this.baseUrl}/weather/current/current-wind-surface-level-gfs-1.0.json`,n=await fetch(e);if(!n.ok)throw new Error(`Wind fetch failed: ${n.status} ${n.statusText}`);const r=await n.json(),s=r.find(w=>w.header.parameterNumber===2),a=r.find(w=>w.header.parameterNumber===3);if(!s||!a)throw new Error("Wind JSON missing U or V record");const{nx:o,ny:l,lo1:c,la1:h,dx:u,dy:d,refTime:p,forecastTime:g}=s.header,_=Do(s.data),m=Do(a.data);if(_.length!==o*l)throw new Error(`Wind data length ${_.length} ≠ nx*ny ${o*l}`);const f=new Date(p);return f.setUTCHours(f.getUTCHours()+(g??0)),{width:o,height:l,lo1:c,la1:h,dx:u,dy:d,u:_,v:m,validTime:f}}async getScalar(t,e){const n=Kx[t];if(!n)throw new Error(`Unknown scalar overlay type: ${t}`);const r=`${this.baseUrl}/weather/current/${n}`,s=await fetch(r);if(!s.ok)throw new Error(`Scalar ${t} fetch failed: ${s.status} ${s.statusText}`);const a=await s.json();if(!a.length)throw new Error(`Scalar ${t}: empty records`);const o=a[0],{nx:l,ny:c,lo1:h,la1:u,dx:d,dy:p,refTime:g,forecastTime:_}=o.header,m=Do(o.data);if(m.length!==l*c)throw new Error(`Scalar ${t} data length ${m.length} ≠ nx*ny ${l*c}`);const f=new Date(g);return f.setUTCHours(f.getUTCHours()+(_??0)),{width:l,height:c,lo1:h,la1:u,dx:d,dy:p,data:m,validTime:f,parameterName:o.header.parameterNumberName??t,parameterUnit:o.header.parameterUnit??""}}}function Do(i){const t=new Float32Array(i.length);for(let e=0;e<i.length;e++){const n=i[e];t[e]=n==null||!Number.isFinite(n)?0:n}return t}const Qx="https://services.swpc.noaa.gov/json/ovation_aurora_latest.json";async function ty(){const i=await fetch(Qx);if(!i.ok)throw new Error(`aurora fetch failed: ${i.status}`);const t=await i.json(),e=t.coordinates,n=new Float32Array(e.length*3);let r=0;for(let s=0;s<e.length;s++)n[s*3+0]=e[s][0],n[s*3+1]=e[s][1],n[s*3+2]=e[s][2],e[s][2]>r&&(r=e[s][2]);return{forecastTime:new Date(t["Forecast Time"]),data:n,pointCount:e.length,maxProbability:r}}const ey="https://services.swpc.noaa.gov/json/planetary_k_index_1m.json";async function ny(){const i=await fetch(ey);if(!i.ok)throw new Error(`Kp fetch failed: ${i.status}`);const t=await i.json();if(!Array.isArray(t)||t.length===0)throw new Error("Kp: empty response");const e=t[t.length-1],n=parseFloat(e.kp_index??e.estimated_kp??e.kp);if(!Number.isFinite(n))throw new Error(`Kp: could not parse value from ${JSON.stringify(e)}`);return{time:new Date(e.time_tag),kp:n}}function iy(i){return i<2?"very quiet":i<3?"quiet":i<4?"unsettled":i<5?"active":i<6?"minor storm (G1)":i<7?"moderate storm (G2)":i<8?"strong storm (G3)":i<9?"severe storm (G4)":"extreme storm (G5)"}function ry(i){const t=[[0,67],[1,64],[2,62],[3,60],[4,57],[5,55],[6,52],[7,49],[8,46],[9,43]],e=Math.max(0,Math.min(9,i));for(let n=0;n<t.length-1;n++){const[r,s]=t[n],[a,o]=t[n+1];if(e>=r&&e<=a){const l=(e-r)/(a-r);return Math.round(s+l*(o-s))}}return 67}const sy="https://firms.modaps.eosdis.nasa.gov/api/area/csv";async function ay(i={}){const t="6d854011ed51a0bc164b2bf60000b738",e=i.source??"VIIRS_SNPP_NRT",n=i.days??1,r=`${sy}/${t}/${e}/world/${n}`,s=await fetch(r);if(!s.ok)throw new Error(`FIRMS fetch failed: ${s.status}`);const a=await s.text();if(a.startsWith("Invalid")||a.startsWith("No fire"))throw new Error(`FIRMS returned: ${a.slice(0,200)}`);const o=a.split(/\r?\n/);if(o.length<2)return{detections:[],fetchedAt:new Date};const l=o[0].split(",").map(_=>_.trim()),c=l.indexOf("latitude"),h=l.indexOf("longitude"),u=l.indexOf("frp"),d=l.indexOf("bright_ti4"),p=l.indexOf("daynight");if(c<0||h<0)throw new Error(`FIRMS: unexpected CSV header: ${o[0].slice(0,200)}`);const g=[];for(let _=1;_<o.length;_++){const m=o[_];if(!m)continue;const f=m.split(","),w=parseFloat(f[c]),M=parseFloat(f[h]);!Number.isFinite(w)||!Number.isFinite(M)||g.push({lat:w,lon:M,frp:u>=0&&parseFloat(f[u])||0,brightTi4:d>=0&&parseFloat(f[d])||0,daynight:p>=0?f[p]:""})}return{detections:g,fetchedAt:new Date}}const oy="/proxy/nhc/CurrentStorms.json";async function ly(){const i=await fetch(oy);if(!i.ok)throw new Error(`NHC fetch failed: ${i.status}`);const t=await i.json(),e=Array.isArray(t.activeStorms)?t.activeStorms:[],n=[];for(const r of e){const s=jh(r.latitudeNumeric,r.latitude),a=jh(r.longitudeNumeric,r.longitude);!Number.isFinite(s)||!Number.isFinite(a)||n.push({id:String(r.id??""),name:String(r.name??""),classification:String(r.classification??""),intensityKt:parseFloat(r.intensity)||0,pressureMb:parseFloat(r.pressure)||0,lat:s,lon:a,movementDir:parseFloat(r.movementDir)||NaN,movementSpeedKt:parseFloat(r.movementSpeed)||0,lastUpdate:String(r.lastUpdate??""),forecastConeKmz:Lo(r.forecastCone),forecastTrackKmz:Lo(r.forecastTrack),bestTrackKmz:Lo(r.bestTrack)})}return{storms:n,fetchedAt:new Date}}function Lo(i){if(i&&typeof i=="object"&&"kmzFile"in i){const t=i.kmzFile;if(typeof t=="string"&&t.length>0)return t}}function jh(i,t){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"){const e=parseFloat(i);if(Number.isFinite(e))return e}if(typeof t=="string"){const e=t.trim().match(/^(-?\d+(?:\.\d+)?)\s*([NSEW])?$/i);if(e){const n=parseFloat(e[1]),r=e[2]?.toUpperCase();return r==="S"||r==="W"?-n:n}}return NaN}var je=Uint8Array,Sr=Uint16Array,cy=Int32Array,Qu=new je([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),td=new je([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),hy=new je([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ed=function(i,t){for(var e=new Sr(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var r=new cy(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)r[s]=s-e[n]<<5|n;return{b:e,r}},nd=ed(Qu,2),id=nd.b,uy=nd.r;id[28]=258,uy[258]=28;var dy=ed(td,0),fy=dy.b,Pl=new Sr(32768);for(var ue=0;ue<32768;++ue){var ri=(ue&43690)>>1|(ue&21845)<<1;ri=(ri&52428)>>2|(ri&13107)<<2,ri=(ri&61680)>>4|(ri&3855)<<4,Pl[ue]=((ri&65280)>>8|(ri&255)<<8)>>1}var os=(function(i,t,e){for(var n=i.length,r=0,s=new Sr(t);r<n;++r)i[r]&&++s[i[r]-1];var a=new Sr(t);for(r=1;r<t;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(e){o=new Sr(1<<t);var l=15-t;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],h=t-i[r],u=a[i[r]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[Pl[u]>>l]=c}else for(o=new Sr(n),r=0;r<n;++r)i[r]&&(o[r]=Pl[a[i[r]-1]++]>>15-i[r]);return o}),Ms=new je(288);for(var ue=0;ue<144;++ue)Ms[ue]=8;for(var ue=144;ue<256;++ue)Ms[ue]=9;for(var ue=256;ue<280;++ue)Ms[ue]=7;for(var ue=280;ue<288;++ue)Ms[ue]=8;var rd=new je(32);for(var ue=0;ue<32;++ue)rd[ue]=5;var py=os(Ms,9,1),my=os(rd,5,1),Io=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},dn=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},Uo=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},gy=function(i){return(i+7)/8|0},tc=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new je(i.subarray(t,e))},_y=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],nn=function(i,t,e){var n=new Error(t||_y[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,nn),!e)throw n;return n},vy=function(i,t,e,n){var r=i.length,s=n?n.length:0;if(!r||t.f&&!t.l)return e||new je(0);var a=!e,o=a||t.i!=2,l=t.i;a&&(e=new je(r*3));var c=function(ie){var kt=e.length;if(ie>kt){var de=new je(Math.max(kt*2,ie));de.set(e),e=de}},h=t.f||0,u=t.p||0,d=t.b||0,p=t.l,g=t.d,_=t.m,m=t.n,f=r*8;do{if(!p){h=dn(i,u,1);var w=dn(i,u+1,3);if(u+=3,w)if(w==1)p=py,g=my,_=9,m=5;else if(w==2){var T=dn(i,u,31)+257,A=dn(i,u+10,15)+4,P=T+dn(i,u+5,31)+1;u+=14;for(var b=new je(P),y=new je(19),R=0;R<A;++R)y[hy[R]]=dn(i,u+R*3,7);u+=A*3;for(var H=Io(y),O=(1<<H)-1,W=os(y,H,1),R=0;R<P;){var $=W[dn(i,u,O)];u+=$&15;var M=$>>4;if(M<16)b[R++]=M;else{var G=0,Y=0;for(M==16?(Y=3+dn(i,u,3),u+=2,G=b[R-1]):M==17?(Y=3+dn(i,u,7),u+=3):M==18&&(Y=11+dn(i,u,127),u+=7);Y--;)b[R++]=G}}var B=b.subarray(0,T),K=b.subarray(T);_=Io(B),m=Io(K),p=os(B,_,1),g=os(K,m,1)}else nn(1);else{var M=gy(u)+4,S=i[M-4]|i[M-3]<<8,L=M+S;if(L>r){l&&nn(0);break}o&&c(d+S),e.set(i.subarray(M,L),d),t.b=d+=S,t.p=u=L*8,t.f=h;continue}if(u>f){l&&nn(0);break}}o&&c(d+131072);for(var rt=(1<<_)-1,ft=(1<<m)-1,Ct=u;;Ct=u){var G=p[Uo(i,u)&rt],Bt=G>>4;if(u+=G&15,u>f){l&&nn(0);break}if(G||nn(2),Bt<256)e[d++]=Bt;else if(Bt==256){Ct=u,p=null;break}else{var X=Bt-254;if(Bt>264){var R=Bt-257,Q=Qu[R];X=dn(i,u,(1<<Q)-1)+id[R],u+=Q}var pt=g[Uo(i,u)&ft],nt=pt>>4;pt||nn(3),u+=pt&15;var K=fy[nt];if(nt>3){var Q=td[nt];K+=Uo(i,u)&(1<<Q)-1,u+=Q}if(u>f){l&&nn(0);break}o&&c(d+131072);var St=d+X;if(d<K){var Et=s-K,Nt=Math.min(K,St);for(Et+d<0&&nn(3);d<Nt;++d)e[d]=n[Et+d]}for(;d<St;++d)e[d]=e[d-K]}}t.l=p,t.p=Ct,t.b=d,t.f=h,p&&(h=1,t.m=_,t.d=g,t.n=m)}while(!h);return d!=e.length&&a?tc(e,0,d):e.subarray(0,d)},xy=new je(0),Tn=function(i,t){return i[t]|i[t+1]<<8},mn=function(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24)>>>0},No=function(i,t){return mn(i,t)+mn(i,t+4)*4294967296};function yy(i,t){return vy(i,{i:2},t&&t.out,t&&t.dictionary)}var Dl=typeof TextDecoder<"u"&&new TextDecoder,Sy=0;try{Dl.decode(xy,{stream:!0}),Sy=1}catch{}var My=function(i){for(var t="",e=0;;){var n=i[e++],r=(n>127)+(n>223)+(n>239);if(e+r>i.length)return{s:t,r:tc(i,e-1)};r?r==3?(n=((n&15)<<18|(i[e++]&63)<<12|(i[e++]&63)<<6|i[e++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?t+=String.fromCharCode((n&31)<<6|i[e++]&63):t+=String.fromCharCode((n&15)<<12|(i[e++]&63)<<6|i[e++]&63):t+=String.fromCharCode(n)}};function sd(i,t){if(t){for(var e="",n=0;n<i.length;n+=16384)e+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return e}else{if(Dl)return Dl.decode(i);var r=My(i),s=r.s,e=r.r;return e.length&&nn(8),s}}var by=function(i,t){return t+30+Tn(i,t+26)+Tn(i,t+28)},wy=function(i,t,e){var n=Tn(i,t+28),r=sd(i.subarray(t+46,t+46+n),!(Tn(i,t+8)&2048)),s=t+46+n,a=mn(i,t+20),o=e&&a==4294967295?Ey(i,s):[a,mn(i,t+24),mn(i,t+42)],l=o[0],c=o[1],h=o[2];return[Tn(i,t+10),l,c,r,s+Tn(i,t+30)+Tn(i,t+32),h]},Ey=function(i,t){for(;Tn(i,t)!=1;t+=4+Tn(i,t+2));return[No(i,t+12),No(i,t+4),No(i,t+20)]};function Ty(i,t){for(var e={},n=i.length-22;mn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&nn(13);var r=Tn(i,n+8);if(!r)return{};var s=mn(i,n+16),a=s==4294967295||r==65535;if(a){var o=mn(i,n-12);a=mn(i,o)==101075792,a&&(r=mn(i,o+32),s=mn(i,o+48))}for(var l=0;l<r;++l){var c=wy(i,s,a),h=c[0],u=c[1],d=c[2],p=c[3],g=c[4],_=c[5],m=by(i,_);s=g,h?h==8?e[p]=yy(i.subarray(m,m+u),{out:new je(d)}):nn(14,"unknown compression type "+h):e[p]=tc(i,m,m+u)}return e}async function Ay(i){const t=await fetch(i);if(!t.ok)throw new Error(`KMZ fetch failed: ${t.status} ${i}`);const e=new Uint8Array(await t.arrayBuffer());return Ry(e)}function Ry(i){const t=Ty(i),e=Object.keys(t).find(r=>r.toLowerCase().endsWith(".kml"));if(!e)throw new Error("KMZ contains no .kml file");const n=sd(t[e]);return Cy(n)}function Cy(i){const t=new DOMParser().parseFromString(i,"application/xml");if(t.querySelector("parsererror"))throw new Error("KML XML parse error");const e=[],n=t.getElementsByTagName("Placemark");for(let r=0;r<n.length;r++){const s=n[r],a=s.getElementsByTagName("name")[0]?.textContent??void 0,o=s.getElementsByTagName("LineString");for(let c=0;c<o.length;c++){const h=Zh(o[c].getElementsByTagName("coordinates")[0]);h.length&&e.push({type:"line",coords:h,name:a})}const l=s.getElementsByTagName("Polygon");for(let c=0;c<l.length;c++){const u=l[c].getElementsByTagName("outerBoundaryIs")[0]?.getElementsByTagName("LinearRing")[0],d=Zh(u?.getElementsByTagName("coordinates")[0]);d.length&&e.push({type:"polygon",coords:d,name:a})}}return e}function Zh(i){if(!i)return[];const t=i.textContent??"",e=[],n=t.trim().split(/\s+/);for(const r of n){const s=r.split(",");if(s.length<2)continue;const a=parseFloat(s[0]),o=parseFloat(s[1]);Number.isFinite(a)&&Number.isFinite(o)&&e.push([a,o])}return e}function Py(i){return i&&i.replace(/^https?:\/\/(?:www\.)?nhc\.noaa\.gov\/?/i,"/proxy/nhc/")}const Dy="/proxy/geocode/reverse",Ly=1100,Fo=1,Oo=4e3;let Kh=0;async function Iy(i,t){const e=Date.now();if(e-Kh<Ly)return{status:"rate-limited"};Kh=e;const n=new URLSearchParams({format:"jsonv2",lat:i.toFixed(5),lon:t.toFixed(5),zoom:"10",addressdetails:"1"}),r=`${Dy}?${n.toString()}`;for(let s=0;s<=Fo;s++){let a;try{a=await fetch(r,{headers:{"Accept-Language":"en"}})}catch(o){if(console.warn(`[earth-clock] geocoder fetch failed (attempt ${s+1}):`,o),s<Fo){await Jh(Oo);continue}return{status:"unavailable"}}if(a.ok){const o=await a.json().catch(()=>null);if(!o||!o.display_name)return{status:"no-name"};const l=o.address??{},c=l.city??l.town??l.village??l.hamlet??l.suburb??l.county??l.state??l.country??"",h=l.country??"";return{status:"ok",place:{short:c&&h&&c!==h?`${c}, ${h}`:c||h||o.display_name.split(",")[0],full:o.display_name,lat:parseFloat(o.lat),lon:parseFloat(o.lon)}}}if(a.status>=500&&s<Fo){console.warn(`[earth-clock] geocoder ${a.status} (attempt ${s+1}), retrying in ${Oo} ms`),await Jh(Oo);continue}return console.warn(`[earth-clock] geocoder gave up: HTTP ${a.status}`),{status:"unavailable"}}return{status:"unavailable"}}function Jh(i){return new Promise(t=>setTimeout(t,i))}const Uy=Date.UTC(2e3,0,1,12,0,0),fn=Math.PI/180,Ny=6378.14;function Fy(i){return(i.getTime()-Uy)/(864e5*36525)}function si(i){const t=i-360*Math.floor(i/360);return t>=0?t:t+360}const Ll=[[0,0,1,0,6288774,-20905355],[2,0,-1,0,1274027,-3699111],[2,0,0,0,658314,-2955968],[0,0,2,0,213618,-569925],[0,1,0,0,-185116,48888],[0,0,0,2,-114332,-3149],[2,0,-2,0,58793,246158],[2,-1,-1,0,57066,-152138],[2,0,1,0,53322,-170733],[2,-1,0,0,45758,-204586],[0,1,-1,0,-40923,-129620],[1,0,0,0,-34720,108743],[0,1,1,0,-30383,104755],[2,0,0,-2,15327,10321],[0,0,1,2,-12528,0],[0,0,1,-2,10980,79661],[4,0,-1,0,10675,-34782],[0,0,3,0,10034,-23210],[4,0,-2,0,8548,-21636],[2,1,-1,0,-7888,24208],[2,1,0,0,-6766,30824],[1,0,-1,0,-5163,-8379],[1,1,0,0,4987,-16675],[2,-1,1,0,4036,-12831],[2,0,2,0,3994,-10445],[4,0,0,0,3861,-11650],[2,0,-3,0,3665,14403],[0,1,-2,0,-2689,-7003],[2,0,-1,2,-2602,0],[2,-1,-2,0,2390,10056],[1,0,1,0,-2348,6322],[2,-2,0,0,2236,-9884],[0,1,2,0,-2120,5751],[0,2,0,0,-2069,0]],Qh=Ll.map(i=>Math.abs(i[1])),Il=[[0,0,0,1,5128122],[0,0,1,1,280602],[0,0,1,-1,277693],[2,0,0,-1,173237],[2,0,-1,1,55413],[2,0,-1,-1,46271],[2,0,0,1,32573],[0,0,2,1,17198],[2,0,1,-1,9266],[0,0,2,-1,8822],[2,-1,0,-1,8216],[2,0,-2,-1,4324],[2,0,1,1,4200],[2,1,0,-1,-3359],[2,-1,-1,1,2463],[2,-1,0,1,2211],[2,-1,-1,-1,2065],[0,1,-1,-1,-1870],[4,0,-1,-1,1828],[0,1,0,1,-1794],[0,0,0,3,-1749],[0,1,-1,1,-1565],[1,0,0,1,-1491],[0,1,1,1,-1475],[0,1,1,-1,-1410],[0,1,0,-1,-1344],[1,0,0,-1,-1335],[0,0,3,1,1107],[4,0,0,-1,1021],[4,0,-1,1,833]],tu=Il.map(i=>Math.abs(i[1]));function ad(i){const t=Fy(i),e=si(218.3164477+481267.88123421*t-.0015786*t*t+t*t*t/538841-t*t*t*t/65194e3),n=si(297.8501921+445267.1114034*t-.0018819*t*t+t*t*t/545868-t*t*t*t/113065e3),r=si(357.5291092+35999.0502909*t-1536e-7*t*t+t*t*t/2449e4),s=si(134.9633964+477198.8675055*t+.0087414*t*t+t*t*t/69699-t*t*t*t/14712e3),a=si(93.272095+483202.0175233*t-.0036539*t*t-t*t*t/3526e3+t*t*t*t/86331e4),o=1-.002516*t-74e-7*t*t,l=o*o,c=n*fn,h=r*fn,u=s*fn,d=a*fn;let p=0,g=0;for(let B=0;B<Ll.length;B++){const K=Ll[B],rt=K[0]*c+K[1]*h+K[2]*u+K[3]*d,ft=Qh[B]===0?1:Qh[B]===1?o:l;p+=K[4]*ft*Math.sin(rt),g+=K[5]*ft*Math.cos(rt)}let _=0;for(let B=0;B<Il.length;B++){const K=Il[B],rt=K[0]*c+K[1]*h+K[2]*u+K[3]*d,ft=tu[B]===0?1:tu[B]===1?o:l;_+=K[4]*ft*Math.sin(rt)}const m=si(119.75+131.849*t)*fn,f=si(53.09+479264.29*t)*fn,w=si(313.45+481266.484*t)*fn,M=e*fn;p+=3958*Math.sin(m)+1962*Math.sin(M-d)+318*Math.sin(f),_+=-2235*Math.sin(M)+382*Math.sin(w)+175*Math.sin(m-d)+175*Math.sin(m+d)+127*Math.sin(M-u)-115*Math.sin(M+u);const S=(e+p/1e6)*fn,L=_/1e6*fn,A=(385000.56+g/1e3)/Ny,P=(23.4392911-.0130042*t)*fn,b=Math.cos(L),y=Math.cos(S)*b,R=Math.sin(S)*b,H=Math.sin(L),O=y,W=R*Math.cos(P)-H*Math.sin(P),$=R*Math.sin(P)+H*Math.cos(P),G=Math.atan2(W,O),Y=Math.asin($);return{ra:G,dec:Y,distance:A}}function od(i,t=new C){const{ra:e,dec:n,distance:r}=ad(i);return t.set(r*Math.cos(n)*Math.cos(e),r*Math.sin(n),-r*Math.cos(n)*Math.sin(e))}const Oy=696e3/6371,ky=149597870/6371,By=1738/6371,eu=1.5;function ld(i){const t=new C,e=new C;Ju(i,t),od(i,e);const n=t.clone().negate(),r=e.dot(e),s=e.dot(n);if(s*s-(r-eu*eu)<0)return{hasShadow:!1,surfacePoint:new C,magnitude:0};if(-s<=0)return{hasShadow:!1,surfacePoint:new C,magnitude:0};const o=s*s-(r-1);let l;if(o>=0){const p=-s-Math.sqrt(o);l=e.clone().add(n.clone().multiplyScalar(p))}else l=e.clone().normalize();const c=l.distanceTo(e),h=By/c,u=Oy/ky,d=h/u;return{hasShadow:!0,surfacePoint:l,magnitude:d}}function zy(i,t,e=30,n=.95){const r=[],s=e*1e3;let a=0,o=null,l=0,c=0;for(let h=i.getTime();h<=t.getTime();h+=s){l++;const u=new Date(h),d=ld(u);d.hasShadow&&(c++,d.magnitude>a&&(a=d.magnitude,o=u),d.magnitude>=n&&r.push({time:u,worldPoint:d.surfacePoint,magnitude:d.magnitude}))}return console.log(`[earth-clock] eclipse path: ${r.length}/${l} samples passed mag≥${n} (shadow hit Earth in ${c}; max magnitude ${a.toFixed(4)}${o?` at ${o.toISOString()}`:""})`),r}const Hy={20260812:{id:"20260812",source:"NASA GSFC — Espenak/Meeus SE2026Aug12T predictions",waypoints:[{utc:new Date("2026-08-12T17:01:00Z"),lat:78,lon:105,magnitude:1},{utc:new Date("2026-08-12T17:15:00Z"),lat:74,lon:35,magnitude:1.02},{utc:new Date("2026-08-12T17:30:00Z"),lat:70,lon:-8,magnitude:1.03},{utc:new Date("2026-08-12T17:46:42Z"),lat:64.83,lon:-25.25,magnitude:1.039},{utc:new Date("2026-08-12T18:00:00Z"),lat:58,lon:-22,magnitude:1.035},{utc:new Date("2026-08-12T18:15:00Z"),lat:50,lon:-15,magnitude:1.025},{utc:new Date("2026-08-12T18:30:00Z"),lat:42,lon:-3,magnitude:1.015},{utc:new Date("2026-08-12T18:45:00Z"),lat:33,lon:8,magnitude:1.005},{utc:new Date("2026-08-12T19:00:00Z"),lat:22,lon:25,magnitude:1}]},20270802:{id:"20270802",source:"NASA GSFC — Espenak/Meeus SE2027Aug02T predictions",waypoints:[{utc:new Date("2027-08-02T07:32:00Z"),lat:37,lon:-30,magnitude:1},{utc:new Date("2027-08-02T08:00:00Z"),lat:35,lon:-15,magnitude:1.03},{utc:new Date("2027-08-02T08:30:00Z"),lat:34,lon:-5,magnitude:1.05},{utc:new Date("2027-08-02T09:00:00Z"),lat:32,lon:5,magnitude:1.06},{utc:new Date("2027-08-02T09:30:00Z"),lat:28,lon:20,magnitude:1.07},{utc:new Date("2027-08-02T10:07:00Z"),lat:25.6,lon:33.5,magnitude:1.079},{utc:new Date("2027-08-02T10:30:00Z"),lat:22,lon:43,magnitude:1.07},{utc:new Date("2027-08-02T11:00:00Z"),lat:18,lon:50,magnitude:1.05},{utc:new Date("2027-08-02T11:30:00Z"),lat:12,lon:60,magnitude:1}]},20280722:{id:"20280722",source:"NASA GSFC — Espenak/Meeus SE2028Jul22T predictions (approximate)",waypoints:[{utc:new Date("2028-07-22T01:14:00Z"),lat:-52,lon:95,magnitude:1},{utc:new Date("2028-07-22T01:30:00Z"),lat:-45,lon:100,magnitude:1.02},{utc:new Date("2028-07-22T02:00:00Z"),lat:-32,lon:110,magnitude:1.04},{utc:new Date("2028-07-22T02:30:00Z"),lat:-22,lon:119,magnitude:1.05},{utc:new Date("2028-07-22T02:56:40Z"),lat:-15.7,lon:126.7,magnitude:1.056},{utc:new Date("2028-07-22T03:00:00Z"),lat:-16,lon:128,magnitude:1.056},{utc:new Date("2028-07-22T03:30:00Z"),lat:-22,lon:138,magnitude:1.05},{utc:new Date("2028-07-22T04:00:00Z"),lat:-33.9,lon:151.2,magnitude:1.04},{utc:new Date("2028-07-22T04:15:00Z"),lat:-41,lon:162,magnitude:1.03},{utc:new Date("2028-07-22T04:30:00Z"),lat:-47,lon:174,magnitude:1.01},{utc:new Date("2028-07-22T04:39:00Z"),lat:-49,lon:180,magnitude:1}]},20240408:{id:"20240408",source:"NASA GSFC — Espenak/Meeus SE2024Apr08T predictions",waypoints:[{utc:new Date("2024-04-08T16:39:00Z"),lat:8,lon:-149,magnitude:1},{utc:new Date("2024-04-08T17:30:00Z"),lat:15,lon:-129,magnitude:1.03},{utc:new Date("2024-04-08T18:00:00Z"),lat:19,lon:-116,magnitude:1.05},{utc:new Date("2024-04-08T18:10:00Z"),lat:23.2,lon:-106.4,magnitude:1.056},{utc:new Date("2024-04-08T18:17:18Z"),lat:25.3,lon:-104.1,magnitude:1.0566},{utc:new Date("2024-04-08T18:30:00Z"),lat:29,lon:-100.7,magnitude:1.056},{utc:new Date("2024-04-08T18:35:00Z"),lat:30.3,lon:-97.7,magnitude:1.055},{utc:new Date("2024-04-08T18:50:00Z"),lat:35,lon:-93.5,magnitude:1.054},{utc:new Date("2024-04-08T19:00:00Z"),lat:38,lon:-88.5,magnitude:1.052},{utc:new Date("2024-04-08T19:05:00Z"),lat:39.8,lon:-86.2,magnitude:1.05},{utc:new Date("2024-04-08T19:15:00Z"),lat:42.5,lon:-80,magnitude:1.045},{utc:new Date("2024-04-08T19:25:00Z"),lat:45.5,lon:-73,magnitude:1.04},{utc:new Date("2024-04-08T19:35:00Z"),lat:48,lon:-66,magnitude:1.025},{utc:new Date("2024-04-08T19:55:00Z"),lat:52,lon:-50,magnitude:1}]}};function Gy(i){return Hy[i]}function Vy(i,t){const e=t.getTime(),n=i.waypoints;if(n.length===0||e<n[0].utc.getTime()||e>n[n.length-1].utc.getTime())return null;for(let r=1;r<n.length;r++){const s=n[r-1],a=n[r],o=s.utc.getTime(),l=a.utc.getTime();if(e<o||e>l)continue;const c=(e-o)/(l-o),h=s.lat+(a.lat-s.lat)*c;let u=a.lon-s.lon;u>180&&(u-=360),u<-180&&(u+=360);let d=s.lon+u*c;d>180&&(d-=360),d<-180&&(d+=360);const p=s.magnitude??1,g=a.magnitude??1,_=p+(g-p)*c;return{lat:h,lon:d,magnitude:_}}return null}const Wy="wss://ws1.blitzortung.org/",Xy=5e3;class $y{constructor(t={}){this.events=t}events;ws=null;reconnectTimer=null;stopped=!1;strikeCount=0;lastStrike=null;connectedSince=null;start(){this.ws||this.stopped||(this.stopped=!1,this.connect())}stop(){this.stopped=!0,this.reconnectTimer!==null&&(window.clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws&&(this.ws.close(),this.ws=null)}get stats(){return{count:this.strikeCount,last:this.lastStrike,connectedSince:this.connectedSince}}connect(){this.events.onStatus?.("connecting");try{this.ws=new WebSocket(Wy)}catch(t){this.events.onStatus?.("error",t instanceof Error?t.message:String(t)),this.scheduleReconnect();return}this.ws.onopen=()=>{try{this.ws?.send(JSON.stringify({a:111}))}catch{}this.connectedSince=new Date,this.events.onStatus?.("connected")},this.ws.onmessage=t=>{if(typeof t.data!="string")return;let e;try{e=qy(t.data)}catch{return}let n;try{n=JSON.parse(e)}catch{return}const r=la(n.lat),s=la(n.lon);if(!Number.isFinite(r)||!Number.isFinite(s))return;const a=la(n.time),o=Number.isFinite(a)?a>1e15?a/1e6:a>1e12?a/1e3:a:Date.now(),l={time:new Date(o),lat:r,lon:s,polarity:la(n.pol)||0};this.strikeCount++,this.lastStrike=l.time,this.events.onStrike?.(l)},this.ws.onerror=()=>{this.events.onStatus?.("error","WebSocket error")},this.ws.onclose=()=>{this.connectedSince=null,this.ws=null,this.events.onStatus?.("disconnected"),this.stopped||this.scheduleReconnect()}}scheduleReconnect(){this.reconnectTimer!==null||this.stopped||(this.reconnectTimer=window.setTimeout(()=>{this.reconnectTimer=null,this.connect()},Xy))}}function la(i){if(typeof i=="number")return i;if(typeof i=="string"){const t=parseFloat(i);return Number.isFinite(t)?t:NaN}return NaN}function qy(i){if(i.length===0)return"";const t={},e=i.split("");let n=e[0],r=n,s=256;for(let a=1;a<e.length;a++){const o=e[a].charCodeAt(0);let l;o<256?l=e[a]:l=t[o]??n+n.charAt(0),r+=l,t[s++]=n+l.charAt(0),n=l}return r}function Yy(i){const{width:t,height:e,u:n,v:r}=i,s=new Uint16Array(t*e*4),a=Tu.toHalfFloat,o=a(1);for(let c=0;c<t*e;c++)s[c*4]=a(n[c]),s[c*4+1]=a(r[c]),s[c*4+3]=o;const l=new Ua(s,t,e,Ue,Vi);return l.wrapS=qn,l.wrapT=Ce,l.minFilter=_e,l.magFilter=_e,l.generateMipmaps=!1,l.needsUpdate=!0,l}const jy="https://gibs.earthdata.nasa.gov/wmts/epsg4326/best",Zy={"250m":[[2,1],[3,2],[5,3],[10,5],[20,10],[40,20],[80,40],[160,80],[320,160]],"500m":[[2,1],[3,2],[5,3],[10,5],[20,10],[40,20],[80,40],[160,80]],"1km":[[2,1],[3,2],[5,3],[10,5],[20,10],[40,20],[80,40]],"2km":[[2,1],[3,2],[5,3],[10,5],[20,10],[40,20]]};async function Ky(i){const{layer:t,date:e,tileMatrixSet:n,zoom:r,ext:s}=i,a=Zy[n];if(!a)throw new Error(`GIBS loader: unknown TileMatrixSet "${n}" — add its matrix dims to MATRIX_DIMS`);if(r<0||r>=a.length)throw new Error(`GIBS loader: zoom ${r} out of range for TileMatrixSet "${n}" (max ${a.length-1})`);const[o,l]=a[r],c=512,h=e.toISOString().slice(0,10),u=document.createElement("canvas");u.width=o*c,u.height=l*c;const d=u.getContext("2d");if(!d)throw new Error("GIBS loader: cannot get 2D canvas context");const p=[];for(let L=0;L<l;L++)for(let T=0;T<o;T++){const A=`${jy}/${t}/default/${h}/${n}/${r}/${L}/${T}.${s}`;p.push(Jy(A,d,T*c,L*c))}await Promise.all(p);const g=4,_=.3,m=32,f=16;let w=0;for(let L=0;L<f;L++)for(let T=0;T<m;T++){const A=Math.floor((T+.5)*u.width/m),P=Math.floor((L+.5)*u.height/f),b=d.getImageData(A,P,1,1).data;.299*b[0]+.587*b[1]+.114*b[2]<g&&w++}const M=w/(m*f);if(M>_)throw new Error(`GIBS mosaic incomplete: ${(M*100).toFixed(1)}% no-data pixels (date ${h})`);const S=new Zl(u);return S.wrapS=qn,S.wrapT=Ce,S.colorSpace=me,S.minFilter=_e,S.magFilter=_e,S.generateMipmaps=!1,S.needsUpdate=!0,S}function Jy(i,t,e,n){return new Promise((r,s)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>{t.drawImage(a,e,n),r()},a.onerror=()=>s(new Error(`GIBS tile failed to load: ${i}`)),a.src=i})}function Qy(i=new Date){const t=new Date(i);return t.setUTCDate(t.getUTCDate()-2),t}async function tS(i){const t=i.startDate??Qy(),e=i.maxDaysBack??7;let n=null;for(let r=0;r<=e;r++){const s=new Date(t);s.setUTCDate(s.getUTCDate()-r);try{return{texture:await Ky({...i,date:s}),date:s}}catch(a){n=a instanceof Error?a:new Error(String(a)),i.onAttempt?.(s,n)}}throw n??new Error("GIBS fetch failed for every fallback date")}function eS(){const i=[],t=[55,60,65,70,75,80];for(const n of t)for(let r=-180;r<180;r+=.5)i.push(r,n,100),i.push(r,-n,90);const e=new Float32Array(i);return{forecastTime:new Date,data:e,pointCount:i.length/3,maxProbability:100}}function nS(){return{detections:[["California",36.5,-119.5,200],["Amazon",-5,-60,150],["Siberia",65,115,300],["Australia",-33,148,250],["Canada-BC",55,-123,180],["Greece",38.5,22,90],["Congo",-2,23,60],["Indonesia",-1.5,115,140]].flatMap(([e,n,r,s])=>{const a=[];for(let o=0;o<30;o++){const l=(Math.random()-.5)*2.5,c=(Math.random()-.5)*2.5;a.push({lat:n+l,lon:r+c,frp:s*(.4+.6*Math.random()),brightTi4:320+Math.random()*40,daynight:"D"})}return a}),fetchedAt:new Date}}function iS(){return{storms:[["DEBUG-AL01","Athena (test)","MH",115,18.5,-55],["DEBUG-AL02","Boreas (test)","HU",90,28,-78],["DEBUG-EP01","Calypso (test)","TS",55,15,-110],["DEBUG-WP01","Daiyu (test)","TY",105,16,132],["DEBUG-WP02","Erebus (test)","STY",145,13,152],["DEBUG-IO01","Fanindra (test)","TS",48,-12,65],["DEBUG-SH01","Galene (test)","MH",120,-18,95]].map(([t,e,n,r,s,a])=>({id:t,name:e,classification:n,intensityKt:r,pressureMb:Math.round(1010-r*.6),lat:s,lon:a,movementDir:280,movementSpeedKt:12,lastUpdate:new Date().toISOString()})),fetchedAt:new Date}}function rS(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");n.fillStyle="#103050",n.fillRect(0,0,1024,512),n.globalAlpha=.9;for(let s=0;s<400;s++){const a=(Math.random()-.5)*90,l=((Math.random()-.5)*360+180)/360*1024,c=(90-a)/180*512,h=8+Math.random()*30,u=n.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(255,255,255,0.95)"),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.beginPath(),n.arc(l,c,h,0,Math.PI*2),n.fill()}const r=new Zl(e);return r.wrapS=qn,r.wrapT=Ce,r.colorSpace=me,r.minFilter=_e,r.magFilter=_e,r.generateMipmaps=!1,r.needsUpdate=!0,r}function sS(i){const t=new rn(45,i,.05,3e4);return t.position.set(0,0,3.2),t}function aS(i,t){const e=new qu(i,t);return e.enableDamping=!0,e.dampingFactor=.08,e.rotateSpeed=.5,e.minDistance=1.4,e.maxDistance=25e3,e.enablePan=!1,e.autoRotate=!1,e.autoRotateSpeed=.4,e}const oS=document.getElementById("app"),ze=new G_({antialias:!0});ze.setPixelRatio(window.devicePixelRatio);ze.setSize(window.innerWidth,window.innerHeight);oS.appendChild(ze.domElement);const xe=new xa,cd=new nv;xe.add(cd.mesh);let nu=0;async function ec(i){const t=++nu,e=await iv(i);if(!e)return;if(t!==nu){e.dispose();return}const n=xe.background;n!==e&&(xe.background=e,cd.mesh.visible=!1,n?.dispose?.())}ec("lo");const Dn=new ev;xe.add(Dn.mesh);const ka=new av;xe.add(ka.mesh);const ls=new lv;xe.add(ls.mesh);const Or=new xv;xe.add(Or.mesh);const Oe=new Sv(1.003);xe.add(Oe.mesh);const jn=new yr;xe.add(jn.mesh);const gi=new Li;xe.add(gi.mesh);const _i=new Ii;xe.add(_i.mesh);const Xi=new en;xe.add(Xi.mesh);const $i=new ba;xe.add($i.mesh);const An=new ss;xe.add(An.mesh);const Ta=23.44*Math.PI/180,iu=new C(0,0,1);function hd(i,t,e){const n=Math.cos(-Ta),r=Math.sin(-Ta),s=i.x*n-i.y*r,a=i.x*r+i.y*n,o=i.z,l=ms(t),c=Math.cos(-l),h=Math.sin(-l);return e.x=s*c+o*h,e.y=a,e.z=-s*h+o*c,e}const bs=new Dv(1.006);xe.add(bs.mesh);const li=new as;xe.add(li.mesh);const ve=new Yu;ve.resize(window.innerWidth,window.innerHeight);const Aa=new ex;Dn.attachToEarth(Aa.meshGlobe);ve.scene.add(Aa.meshFlat);ve.scene.add(Or.flatMesh);ve.scene.add(gi.flatMesh);ve.scene.add(_i.flatMesh);ve.scene.add(Xi.flatMesh);ve.scene.add(jn.flatMesh);ve.scene.add($i.flatMesh);ve.scene.add(li.flatMesh);const ws=new gv(ze,65536),pi=new xr(ws.flatMesh);xe.add(pi.mesh);ve.scene.add(pi.flatMesh);const nc=new Z_(16777215,1.4);nc.position.set(50,0,0);xe.add(nc);xe.add(new K_(1054756,.35));const ic=new rs;xe.add(ic.mesh);const Xn=sS(window.innerWidth/window.innerHeight),Mr=aS(Xn,ze.domElement);window.addEventListener("resize",()=>{Xn.aspect=window.innerWidth/window.innerHeight,Xn.updateProjectionMatrix(),ze.setSize(window.innerWidth,window.innerHeight),pi.resize(window.innerWidth,window.innerHeight),ve.resize(window.innerWidth,window.innerHeight)});const tn=new C,zn=new C,ko=new C,ru=new C,cs={lat:0,lon:0},hs={lat:0,lon:0};let ke=Date.now(),su=performance.now(),au=null;window.__orrery={particles:ws,globe:Dn,atmosphere:ka,trails:pi,coastlines:Or,clouds:Oe,aurora:jn,fires:gi,hurricanes:_i,hurricaneTracks:$i,lightning:Xi,overlay:bs,eclipse:An,sun:ic,useTestData:dS,useLiveData:fS,findMoon:pd,jumpToEclipse:i=>{const t=i?Ea.find(e=>e.id===i):Er??null;if(!t){console.warn(`[earth-clock] jumpToEclipse: ${i?`id "${i}" not found`:"no upcoming eclipse"}; available ids: ${Ea.map(e=>e.id).join(", ")}`);return}fd(t)}};const lS=["wind","fires","lightning","hurricanes","storm-tracks","aurora","kp","viirs","gfs-clouds","mslp","temp","rh","tpw","tcw","coastlines","day map","night map","moon","eclipse"],Xt=new gx;Xt.setOrder(lS);Xt.report("day map",{source:"Solar System Scope · 2k_earth_daymap.jpg",bundled:!0});Xt.report("night map",{source:"Solar System Scope · 2k_earth_nightmap.jpg",bundled:!0});Xt.report("moon",{source:"NASA / USGS · moon_1024.jpg",bundled:!0});const Wt=new mx,cS=[["wind","NOAA GFS · surface wind","fetching surface wind…"],["fires","NASA FIRMS · VIIRS S-NPP NRT","fetching FIRMS detections…"],["lightning","Blitzortung · community WebSocket","connecting to Blitzortung…"],["hurricanes","NHC · CurrentStorms.json","fetching active storms…"],["aurora","NOAA SWPC · Ovation aurora forecast","fetching SWPC Ovation…"],["kp","NOAA SWPC · planetary K-index","fetching SWPC K-index…"],["viirs","NASA GIBS · VIIRS NOAA-20 True Color","fetching VIIRS mosaic…"],["gfs-clouds","NOAA GFS · cloud cover","fetching GFS cloud cover…"],["mslp","NOAA GFS · MSLP","fetching MSLP…"],["temp","NOAA GFS · 2 m temperature","fetching temperature…"],["rh","NOAA GFS · 2 m relative humidity","fetching RH…"],["tpw","NOAA GFS · total precipitable water","fetching TPW…"],["tcw","NOAA GFS · total cloud water","fetching TCW…"],["coastlines","Natural Earth · 50 m physical","fetching coastlines…"]];for(const[i,t,e]of cS)Xt.report(i,{source:t,detail:e});const ud=new vx(document.body,Xt);ud.onClose(()=>{Ot.setLayer("data",!1)});const gs=new Tx(document.body,{onSnapToLive:()=>{ke=Date.now()},onClose:()=>{Ot.setLayer("clock",!1)}}),xn=new Nx(document.body);let Bo=1;const Me=new kx(document.body,{onScrubTo:i=>{ke=i,window.__orreryTimeWarp!==0&&(Bo=window.__orreryTimeWarp??1,window.__orreryTimeWarp=0)},onStep:i=>{ke+=i},onPlayPause:()=>{const i=window.__orreryTimeWarp??1;i===0?window.__orreryTimeWarp=Bo||1:(Bo=i,window.__orreryTimeWarp=0)},onClose:()=>dd()});function dd(){Es(null),_n=null,Ot.setLayer("eclipse",!1),ke=Date.now(),window.__orreryTimeWarp=1}const Bi={lat:0,lon:0,visible:!1},Ba=new jx(document.body,{onJumpSolar:i=>fd(i),onJumpLunar:i=>uS(i),onTabChange:i=>{i==="lunar"?Es(null):_n=null,Me.setMode(i)},onClose:()=>dd()}),Ot=new lx(document.body,{globe:Dn,atmosphere:ka,moon:ls,coastlines:Or,clouds:Oe,aurora:jn,fires:gi,hurricanes:_i,hurricaneTracks:$i,lightning:Xi,overlay:bs,radiusVectors:li,eclipse:An,flatMap:ve,trails:pi},{data:ud,clock:gs,location:xn,eclipse:Ba});Ot.onFindMoon(()=>pd());Ot.onSkyboxHiResChange(i=>{ec(i?"hi":"lo")});Ot.isSkyboxHiRes()&&ec("hi");xn.onClear(()=>{Ot.setLayer("location",!1)});xn.onGeolocate((i,t)=>{kr(i,t,"geolocation")});xn.onSunBeam(()=>kr(cs.lat,cs.lon,"sun"));xn.onMoonBeam(()=>kr(hs.lat,hs.lon,"moon"));function kr(i,t,e){Aa.setLocation(i,t),Aa.setVisible(!0),xn.setLocation(i,t,e),Bi.lat=i,Bi.lon=t,Bi.visible=!0,Me.setPlaceName(`${i.toFixed(2)}°, ${t.toFixed(2)}°`),console.log(`[earth-clock] pinned via ${e}: ${i.toFixed(2)}, ${t.toFixed(2)}`),Iy(i,t).then(n=>{switch(n.status){case"ok":xn.setPlaceName(n.place.short),Me.setPlaceName(n.place.short);break;case"no-name":xn.setPlaceName(null);break;case"unavailable":xn.setPlaceName("geocoder unavailable");break}})}const Ra=new J_,ci=new yt,hS=5;let ts=null;ze.domElement.addEventListener("pointerdown",i=>{ts={x:i.clientX,y:i.clientY}});ze.domElement.addEventListener("click",i=>{if(!Ot.isLocationActive())return;if(ts){const r=i.clientX-ts.x,s=i.clientY-ts.y;if(ts=null,Math.hypot(r,s)>hS)return}const t=ze.domElement.getBoundingClientRect();ci.x=(i.clientX-t.left)/t.width*2-1,ci.y=-((i.clientY-t.top)/t.height)*2+1;let e,n;if(Ot.isMapMode()){const r=new C(ci.x,ci.y,0).unproject(ve.camera);if(Math.abs(r.y)>.5)return;n=Yu.wrapWorldX(r.x)*180,e=r.y*180}else{Ra.setFromCamera(ci,Xn);const r=Ra.intersectObject(Dn.earthMesh,!1);if(!r.length)return;({lat:e,lon:n}=Dn.worldToLatLon(r[0].point))}kr(e,n,"click")});ze.domElement.addEventListener("dblclick",i=>{if(Ot.isMapMode())return;const t=ze.domElement.getBoundingClientRect();ci.x=(i.clientX-t.left)/t.width*2-1,ci.y=-((i.clientY-t.top)/t.height)*2+1,Ra.setFromCamera(ci,Xn);const e=Ra.intersectObject(Dn.earthMesh,!1);if(!e.length)return;const{lat:n,lon:r}=Dn.worldToLatLon(e[0].point);kr(n,r,"click"),Ot.setLayer("location",!0)});function fd(i){if(Es(i),_n=null,Me.setMode("solar"),ke=i.startUtc.getTime()-6e4,window.__orreryTimeWarp=60,Ot.setLayer("eclipse",!0),Ot.setLayer("clock",!0),gs.setControlsExpanded(!0),!Bi.visible&&Rn){const t=Rn.waypoints.reduce((e,n)=>(n.magnitude??0)>(e.magnitude??0)?n:e,Rn.waypoints[0]);kr(t.lat,t.lon,"click")}console.log(`[earth-clock] jumped to T-1m of ${i.name} (peak ${i.peakUtc.toISOString()}). Set window.__orreryTimeWarp = 1 to stop the warp.`)}function uS(i){_n=i,Es(null),Ba.setSelected("lunar",i.id),Me.setMode("lunar"),Me.setEclipseWindow(i.startUtc,i.endUtc,i.peakUtc),ke=i.startUtc.getTime()-6e4,window.__orreryTimeWarp=60,Ot.setLayer("eclipse",!0),Ot.setLayer("clock",!0),gs.setControlsExpanded(!0),console.log(`[earth-clock] jumped to T-1m of ${i.name} (peak ${i.peakUtc.toISOString()}). Set window.__orreryTimeWarp = 1 to stop the warp.`)}function pd(){if(zn.lengthSq()<.01){console.warn("[orrery] findMoon: moon position not yet computed");return}const i=Math.min(zn.length()*1.5,199);Xn.position.copy(zn).normalize().multiplyScalar(i),Mr.target.set(0,0,0),Mr.update(),console.log(`[orrery] find moon: camera repositioned to ${i.toFixed(1)} r along moon direction`)}let ga=null;function dS(){console.log("[orrery] debug: loading fixture data"),ga=Ot.activeCloudSource();const i=eS(),t=nS(),e=iS();jn.update(i),gi.update(t),_i.update(e);const n=rS();Oe.setTexture(n),ve.setCloudTexture(n),Ot.setLayer("cloudsViirs",!0),Ot.setLayer("aurora",!0),Ot.setLayer("fires",!0),Ot.setLayer("hurricanes",!0),Wt.info("clouds","fixture: procedural noise (1024×512)"),Wt.info("aurora",`fixture: ${i.pointCount} pts in 6 bands ±55°…±80°`),Wt.info("fires",`fixture: ${t.detections.length} pts across 8 known fire zones`),Wt.info("hurricanes",`fixture: ${e.storms.length} storms in every basin`)}function fS(){console.log("[orrery] debug: restoring live data"),xd(),rc(),sc(),ac(),ga&&ga!==Ot.activeCloudSource()&&Ot.setLayer(ga,!0),_s()}const Ca=new Jx;Ca.getWindGrid(new Date).then(i=>{ws.setWindTexture(Yy(i)),Wt.info("wind",`${i.width}×${i.height}, valid ${i.validTime.toISOString().slice(0,16)}Z`),Xt.report("wind",{source:"NOAA GFS surface (via earth-clock weather-service)",fetched:new Date,detail:`valid ${i.validTime.toISOString().slice(0,13)}Z`,refreshSeconds:6*3600})}).catch(i=>{Wt.warn("wind",`load failed: ${i.message??i}`),Xt.report("wind",{source:"NOAA GFS surface",error:String(i.message??i)})});const Ul={mslp:{type:"mean_sea_level_pressure",registryKey:"mslp",sourceLabel:"NOAA GFS · MSLP",vmin:96e3,vmax:104e3,palette:"pressure",label:"Atmospheric pressure",format:i=>`${Math.round(i/100)} hPa`},temp:{type:"temp",registryKey:"temp",sourceLabel:"NOAA GFS · 2 m temperature",vmin:240,vmax:310,palette:"temperature",label:"Temperature at 2 m",format:i=>`${Math.round(i-273.15)} °C`},rh:{type:"relative_humidity",registryKey:"rh",sourceLabel:"NOAA GFS · 2 m relative humidity",vmin:0,vmax:100,palette:"humidity",label:"Relative humidity at 2 m",format:i=>`${Math.round(i)}%`},tpw:{type:"total_precipitable_water",registryKey:"tpw",sourceLabel:"NOAA GFS · total precipitable water",vmin:0,vmax:70,palette:"water",label:"Total precipitable water",format:i=>`${Math.round(i)} mm`},tcw:{type:"total_cloud_water",registryKey:"tcw",sourceLabel:"NOAA GFS · total cloud water",vmin:0,vmax:2,palette:"cloud",label:"Total cloud water",format:i=>`${i.toFixed(1)} kg/m²`}},md={};Object.keys(Ul).forEach(i=>{const t=Ul[i];Ca.getScalar(t.type,new Date).then(e=>{md[i]=e;const n=e.validTime.toISOString().slice(0,13);Wt.info(t.registryKey,`${e.width}×${e.height}, valid ${n}Z`),Xt.report(t.registryKey,{source:t.sourceLabel,fetched:new Date,detail:`valid ${n}Z`,refreshSeconds:6*3600}),Ot.activeOverlay()===i&&gd()}).catch(e=>{Wt.warn(t.registryKey,`load failed: ${e.message??e} — run \`npm run weather-service\` from the repo root`),Xt.report(t.registryKey,{source:t.sourceLabel,error:String(e.message??e)})})});const Nl=new Hx(document.body);function gd(){const i=Ot.activeOverlay();if(!i)return;const t=md[i],e=Ul[i];!t||!e||(bs.setData(t,e.vmin,e.vmax,e.palette),Nl.update({label:e.label,palette:e.palette,displayMin:e.format(e.vmin),displayMid:e.format((e.vmin+e.vmax)/2),displayMax:e.format(e.vmax)}),Nl.setVisible(!0))}Ot.onOverlayChange(i=>{i?gd():Nl.setVisible(!1)});let Ve=null;async function pS(){Wt.pending("gfs-clouds","fetching GFS cloud cover…");try{const i=await Ca.getScalar("total_cloud_cover",new Date),t=i.validTime.toISOString().slice(0,13);Ve={grid:i,vmin:0,vmax:100,sourceLabel:"NOAA GFS · total cloud cover (TCDC)",detail:`TCDC valid ${t}Z`},Wt.info("gfs-clouds",`${i.width}×${i.height}, TCDC valid ${t}Z`),Xt.report("gfs-clouds",{source:Ve.sourceLabel,fetched:new Date,detail:Ve.detail,refreshSeconds:6*3600}),Ot.activeCloudSource()==="cloudsGfs"&&_s();return}catch(i){Wt.pending("gfs-clouds",`TCDC unavailable (${i.message?.split(":")[0]??"error"}); trying TCW fallback…`)}try{const i=await Ca.getScalar("total_cloud_water",new Date),t=i.validTime.toISOString().slice(0,13);Ve={grid:i,vmin:0,vmax:1,sourceLabel:"NOAA GFS · total cloud water (TCW)",detail:`TCW fallback, valid ${t}Z — add :TCDC: pattern + restart weather-service for native cover`},Wt.info("gfs-clouds",`${i.width}×${i.height}, TCW fallback valid ${t}Z`),Xt.report("gfs-clouds",{source:Ve.sourceLabel,fetched:new Date,detail:Ve.detail,refreshSeconds:6*3600}),Ot.activeCloudSource()==="cloudsGfs"&&_s()}catch(i){Wt.warn("gfs-clouds",`both TCDC and TCW failed: ${i.message??i} — run \`npm run weather-service\` from the repo root`),Xt.report("gfs-clouds",{source:"NOAA GFS · cloud cover",error:String(i.message??i)})}}pS();let Oi=null,ou=!1;function _s(){const i=Ot.activeCloudSource();if(!i){Oe.mesh.visible=!1;return}Oe.mesh.visible=!0,i==="cloudsViirs"?Oi?Oe.setTexture(Oi):Oe.mesh.visible=!1:i==="cloudsGfs"?Ve?Oe.setScalarField(Ve.grid,Ve.vmin,Ve.vmax):Oe.mesh.visible=!1:i==="cloudsGoes"&&(ou||(ou=!0,console.warn("[orrery] GOES geostationary composite not yet implemented — falling back to whichever source has data")),Oi?Oe.setTexture(Oi):Ve?Oe.setScalarField(Ve.grid,Ve.vmin,Ve.vmax):Oe.mesh.visible=!1)}Ot.onCloudsChange(()=>_s());fetch("/data/earth-topo.json").then(i=>i.ok?i.json():Promise.reject(new Error(`HTTP ${i.status}`))).then(i=>{Or.loadFromTopology(i,"coastline_50m"),Wt.info("coastlines","Natural Earth 50 m loaded"),Xt.report("coastlines",{source:"Natural Earth · 50 m physical",bundled:!0})}).catch(i=>{Wt.warn("coastlines",`load failed: ${i.message??i}`),Xt.report("coastlines",{source:"Natural Earth 50 m",error:String(i.message??i)})});function rc(){ty().then(i=>{jn.update(i);const t=i.forecastTime.toISOString().slice(11,16),e=i.maxProbability<5?"very quiet":i.maxProbability<15?"quiet":i.maxProbability<30?"moderate":i.maxProbability<50?"active":i.maxProbability<75?"storm":"severe";Wt.info("aurora",`${i.pointCount} pts, fc ${t}Z, max ${i.maxProbability}% (${e})`),Xt.report("aurora",{source:"NOAA SWPC · Ovation aurora forecast",fetched:new Date,detail:`fc ${t}Z · peak ${i.maxProbability}% (${e})`,refreshSeconds:300})}).catch(i=>{Wt.warn("aurora",`load failed: ${i.message??i}`),Xt.report("aurora",{source:"NOAA SWPC Ovation",error:String(i.message??i)})})}rc();setInterval(rc,300*1e3);function _d(){ny().then(i=>{const t=iy(i.kp),e=ry(i.kp);Wt.info("kp",`Kp ${i.kp.toFixed(1)} (${t}), aurora visible above ~${e}° mag-lat`),Xt.report("kp",{source:"NOAA SWPC · planetary K-index",fetched:new Date,detail:`Kp ${i.kp.toFixed(1)} (${t}) · visible above ~${e}°`,refreshSeconds:60})}).catch(i=>{Wt.warn("kp",`load failed: ${i.message??i}`),Xt.report("kp",{source:"NOAA SWPC planetary K-index",error:String(i.message??i)})})}_d();setInterval(_d,300*1e3);function sc(){ay().then(i=>{gi.update(i),Wt.info("fires",`${i.detections.length} detections`),Xt.report("fires",{source:"NASA FIRMS · VIIRS S-NPP NRT",fetched:new Date,detail:`${i.detections.length} detections · last 24 h`,refreshSeconds:3600})}).catch(i=>{Wt.warn("fires",`load failed: ${i.message??i}`),Xt.report("fires",{source:"NASA FIRMS VIIRS",error:String(i.message??i)})})}sc();setInterval(sc,3600*1e3);function ac(){ly().then(i=>{if(_i.update(i),i.storms.length){const t=i.storms.map(e=>`${e.name||e.id} ${e.intensityKt}kt`).join(", ");Wt.info("hurricanes",`${i.storms.length} active: ${t}`),Xt.report("hurricanes",{source:"NHC · CurrentStorms.json",fetched:new Date,detail:`${i.storms.length} active`,refreshSeconds:900}),_S(i.storms)}else Wt.info("hurricanes","no active storms (off-season)"),Xt.report("hurricanes",{source:"NHC · CurrentStorms.json",fetched:new Date,detail:"no active storms (off-season)",refreshSeconds:900}),$i.update([])}).catch(i=>{Wt.warn("hurricanes",`load failed: ${i.message??i}`),Xt.report("hurricanes",{source:"NHC CurrentStorms.json",error:String(i.message??i)})})}ac();setInterval(ac,900*1e3);function vd(i,t,e=new C){const n=i*Math.PI/180,r=t*Math.PI/180,s=Math.cos(n);return e.set(s*Math.cos(r),Math.sin(n),-s*Math.sin(r))}let Er=null,Rn,_n=null;const mS=24*3600*1e3,gS=22*3600*1e3;let Ti=!0,zo=null;const mr=new C;function Es(i){if(Er=i,Rn=i?Gy(i.id):void 0,Ba.setSelected("solar",i?.id??null),i&&Me.setEclipseWindow(i.startUtc,i.endUtc,i.peakUtc),!i){An.setPath([]),Xt.report("eclipse",{source:"NASA eclipse catalog · bundled",detail:"no upcoming eclipse in catalog",bundled:!0});return}let t,e;Rn?(t=Rn.waypoints.map(s=>vd(s.lat,s.lon)),e="NASA centerline"):(t=zy(i.startUtc,i.endUtc,30).map(a=>{const o=new C;return hd(a.worldPoint,a.time,o),o}),e="astronomical fallback (Schlyter)"),An.setPath(t);const n=i.peakUtc.toISOString().slice(0,16)+"Z";console.log(`[earth-clock] eclipse loaded: ${i.name} · peak ${n} · ${t.length} path points · source: ${e} · (${i.region})`);const r=Rn?"NASA centerline · bundled":"NASA eclipse catalog · bundled";t.length===0?Xt.report("eclipse",{source:r,error:`${i.name} · no path samples (runtime lunar model below threshold)`}):Xt.report("eclipse",{source:r,fetched:new Date,detail:`${i.name} · ${n}`,bundled:!0})}Es($x(new Date));const gr=new C;let ca=!1;async function _S(i){const t=await Promise.all(i.map(async n=>{const r={stormId:n.id},s=async c=>{if(c)try{return await Ay(Py(c))}catch(h){Wt.warn(`tracks:${n.id}`,`KMZ failed: ${h.message}`);return}},[a,o,l]=await Promise.all([s(n.bestTrackKmz),s(n.forecastTrackKmz),s(n.forecastConeKmz)]);return a&&(r.bestTrack=a),o&&(r.forecastTrack=o),l&&(r.forecastCone=l),r}));$i.update(t);const e=t.reduce((n,r)=>n+(r.bestTrack?.length??0)+(r.forecastTrack?.length??0)+(r.forecastCone?.length??0),0);e>0&&(Wt.info("hurricane-tracks",`${t.length} storms, ${e} geometry parts`),Xt.report("storm-tracks",{source:"NHC · per-storm KMZ (track + cone)",fetched:new Date,detail:`${t.length} storms · ${e} geometry parts`,refreshSeconds:900}))}const es=[],us=new $y({onStrike:i=>{Xi.addStrike(i,performance.now()/1e3);const t=performance.now();for(es.push(t);es.length&&t-es[0]>6e4;)es.shift()},onStatus:(i,t)=>{const e=us.stats;i==="connected"?(Wt.info("lightning","Blitzortung connected"),Xt.report("lightning",{source:"Blitzortung · community WebSocket",fetched:new Date,detail:"connected · waiting for strikes",refreshSeconds:60})):i==="disconnected"?(Wt.warn("lightning","disconnected — reconnecting in 5 s"),Xt.report("lightning",{source:"Blitzortung · community WebSocket",error:`disconnected (received ${e.count} strikes)`})):i==="error"?(Wt.warn("lightning",t??"WebSocket error"),Xt.report("lightning",{source:"Blitzortung · community WebSocket",error:t??"WebSocket error"})):Wt.pending("lightning","connecting to Blitzortung…")}});us.start();setInterval(()=>{if(!us.stats.connectedSince)return;const i=es.length;Xt.report("lightning",{source:"Blitzortung · community WebSocket",fetched:us.stats.last??new Date,detail:`${i} strikes/min · ${us.stats.count} total`,refreshSeconds:60})},1e3);function xd(){Wt.pending("clouds","fetching VIIRS mosaic…"),tS({layer:"VIIRS_NOAA20_CorrectedReflectance_TrueColor",tileMatrixSet:"250m",zoom:3,ext:"jpg",onAttempt:(i,t)=>{const e=i.toISOString().slice(0,10);Wt.warn("clouds",`${e} incomplete (${t.message.split(":").slice(-1)[0].trim()}); trying older`)}}).then(({texture:i,date:t})=>{const e=t.toISOString().slice(0,10);Oi&&Oi.dispose(),Oi=i,Ot.activeCloudSource()==="cloudsViirs"&&_s(),ve.setCloudTexture(i),Wt.info("viirs",`VIIRS NOAA-20 ${e}`),Xt.report("viirs",{source:"NASA GIBS · VIIRS NOAA-20 True Color",fetched:new Date,detail:e,refreshSeconds:24*3600})}).catch(i=>{Wt.warn("viirs",`load failed: ${i.message??i}`),Xt.report("viirs",{source:"NASA GIBS VIIRS NOAA-20",error:String(i.message??i)})})}xd();function vS(){const i=new Date(ke);Ju(i,tn),od(i,zn),tn.applyAxisAngle(iu,Ta),zn.applyAxisAngle(iu,Ta),nc.position.copy(tn).multiplyScalar(50),ic.setSunDirection(tn),Dn.setSunDirection(tn),Dn.setRotationY(ms(i)),ka.setSunDirection(tn);const t=Zu(i),e=ad(i),n=180/Math.PI,r=Ku(i)*n,s=t.dec*n,a=lu(t.ra*n-r),o=e.dec*n,l=lu(e.ra*n-r);ve.setSubSolar(s,a),ls.setPosition(zn),cs.lat=s,cs.lon=a,hs.lat=o,hs.lon=l,xn.setBeamCoords(cs,hs),li.setSunDirection(tn),li.setMoonPosition(zn),li.setSubSolar(s,a),li.setSubLunar(o,l),ko.copy(zn).normalize();const h=(1-La.clamp(tn.dot(ko),-1,1))*.5;ru.crossVectors(tn,ko),li.setMoonPhase(h,ru.y>0);const u=ms(i);if(ws.setRotationY(u),pi.setRotationY(u),Or.setRotationY(u),Oe.setRotationY(u),Oe.setSunDirection(tn),gi.setRotationY(u),_i.setRotationY(u),$i.setRotationY(u),Xi.setRotationY(u),bs.setRotationY(u),An.setRotationY(u),Er){const m=ke>=Er.startUtc.getTime()-864e5&&ke<=Er.endUtc.getTime()+864e5;An.setPathVisible(m)}let d=null,p=null,g=1;if(Rn){const _=Vy(Rn,i);_&&(d=_.lat,p=_.lon,g=_.magnitude)}else{const _=ld(i);_.hasShadow&&(hd(_.surfacePoint,i,gr),d=Math.asin(gr.y)*180/Math.PI,p=Math.atan2(-gr.z,gr.x)*180/Math.PI,g=_.magnitude)}if(d!==null&&p!==null?(vd(d,p,gr),An.setLiveShadow(gr),ca||(ca=!0,console.log(`[earth-clock] eclipse live shadow ON at ${i.toISOString()} · magnitude ${g.toFixed(3)} · geographic (${d.toFixed(2)}, ${p.toFixed(2)}) · source: ${Rn?"NASA centerline":"astronomical"}`))):(An.setLiveShadow(null),ca&&(ca=!1,console.log(`[earth-clock] eclipse live shadow OFF at ${i.toISOString()}`))),jn.setRotationY(u),jn.setSunDirection(tn),_n){const _=Yx(_n,i);ls.setEclipseShadow(_),Me.setLunarFraction(_);const m=_n.peakUtc.getTime(),f=_n.umbralMagnitude,w=_>0?`magnitude ${f.toFixed(3)}`:"—";let M;_<=0?M=_n.type:_>=.98?M=f>1?"totality":"deepest":ke<m?M=`approaching · ${(_*100).toFixed(0)}%`:M=`receding · ${(_*100).toFixed(0)}%`,Me.setLunarReadout(w,M)}else ls.setEclipseShadow(0),Me.setLunarFraction(0)}function lu(i){return((i+180)%360+360)%360-180}function yd(i){const t=i-su;su=i;const e=window.__orreryTimeWarp??1;ke+=t*e;const n=new Date(ke);vS(),gs.setTime(n),xn.setNow(n);const r=Math.abs(ke-Date.now());Ti&&r>mS&&(Ti=!1),!Ti&&r<gS&&(Ti=!0),Ot.setLiveFreshnessOk(Ti),gs.setLiveDataStale(!Ti,Ti?null:n);const s=Er!==null&&An.mesh.visible;if(Ba.getActiveTab()==="lunar")Me.setVisible(_n!==null),Me.setScrubControlsVisible(_n!==null);else if(Bi.visible){const u=Xx(Bi.lat,Bi.lon,n,tn,zn),d=Me.update(u);Me.setVisible(d||s),Me.setScrubControlsVisible(s)}else Me.setVisible(!1),Me.setScrubControlsVisible(!1);Me.setSimulatedTime(ke),Me.setPlaying((window.__orreryTimeWarp??1)!==0),ws.update(t/1e3,i/1e3),jn.setTime(i/1e3),gi.setTime(i/1e3),_i.setTime(i/1e3),Xi.setTime(i/1e3);const o=ms(new Date(ke)),l=window.__orreryTimeWarp??1;if(!Ot.isAutoOrbit()&&!Ot.isMapMode()&&zo!==null&&l!==0){const u=o-zo;if(u!==0){mr.subVectors(Xn.position,Mr.target);const d=Math.cos(u),p=Math.sin(u),g=mr.x,_=mr.z;mr.x=g*d+_*p,mr.z=-g*p+_*d,Xn.position.addVectors(Mr.target,mr)}}zo=o,Mr.autoRotate=Ot.isAutoOrbit(),Mr.update();const c=Ot.isMapMode();c!==au&&(c?ve.enableControls(ze.domElement):ve.disableControls(),au=c);const h=Ot.isWindVisible();pi.setVisible(h),h&&pi.step(ze),Ot.isMapMode()?(ve.update(),ze.render(ve.scene,ve.camera)):ze.render(xe,Xn),requestAnimationFrame(yd)}requestAnimationFrame(yd);
//# sourceMappingURL=index-BcO7xLaF.js.map
