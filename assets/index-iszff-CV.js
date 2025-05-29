function KE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hy={exports:{}},Ml={},dy={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),GE=Symbol.for("react.portal"),QE=Symbol.for("react.fragment"),YE=Symbol.for("react.strict_mode"),XE=Symbol.for("react.profiler"),JE=Symbol.for("react.provider"),ZE=Symbol.for("react.context"),e1=Symbol.for("react.forward_ref"),t1=Symbol.for("react.suspense"),n1=Symbol.for("react.memo"),r1=Symbol.for("react.lazy"),_p=Symbol.iterator;function i1(t){return t===null||typeof t!="object"?null:(t=_p&&t[_p]||t["@@iterator"],typeof t=="function"?t:null)}var fy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},py=Object.assign,my={};function xi(t,e,n){this.props=t,this.context=e,this.refs=my,this.updater=n||fy}xi.prototype.isReactComponent={};xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gy(){}gy.prototype=xi.prototype;function ld(t,e,n){this.props=t,this.context=e,this.refs=my,this.updater=n||fy}var ud=ld.prototype=new gy;ud.constructor=ld;py(ud,xi.prototype);ud.isPureReactComponent=!0;var wp=Array.isArray,yy=Object.prototype.hasOwnProperty,cd={current:null},vy={key:!0,ref:!0,__self:!0,__source:!0};function _y(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yy.call(e,r)&&!vy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:go,type:t,key:s,ref:o,props:i,_owner:cd.current}}function s1(t,e){return{$$typeof:go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===go}function o1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ep=/\/+/g;function bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?o1(""+t.key):e.toString(36)}function pa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case go:case GE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bu(o,0):r,wp(i)?(n="",t!=null&&(n=t.replace(Ep,"$&/")+"/"),pa(i,e,n,"",function(u){return u})):i!=null&&(hd(i)&&(i=s1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ep,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",wp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+bu(s,a);o+=pa(s,e,n,l,i)}else if(l=i1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+bu(s,a++),o+=pa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function jo(t,e,n){if(t==null)return t;var r=[],i=0;return pa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function a1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},ma={transition:null},l1={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:ma,ReactCurrentOwner:cd};H.Children={map:jo,forEach:function(t,e,n){jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jo(t,function(){e++}),e},toArray:function(t){return jo(t,function(e){return e})||[]},only:function(t){if(!hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=xi;H.Fragment=QE;H.Profiler=XE;H.PureComponent=ld;H.StrictMode=YE;H.Suspense=t1;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l1;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=py({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)yy.call(e,l)&&!vy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:go,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:ZE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:JE,_context:t},t.Consumer=t};H.createElement=_y;H.createFactory=function(t){var e=_y.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:e1,render:t}};H.isValidElement=hd;H.lazy=function(t){return{$$typeof:r1,_payload:{_status:-1,_result:t},_init:a1}};H.memo=function(t,e){return{$$typeof:n1,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=ma.transition;ma.transition={};try{t()}finally{ma.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Xe.current.useCallback(t,e)};H.useContext=function(t){return Xe.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};H.useEffect=function(t,e){return Xe.current.useEffect(t,e)};H.useId=function(){return Xe.current.useId()};H.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Xe.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};H.useRef=function(t){return Xe.current.useRef(t)};H.useState=function(t){return Xe.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Xe.current.useTransition()};H.version="18.2.0";dy.exports=H;var T=dy.exports;const tn=qE(T),u1=KE({__proto__:null,default:tn},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1=T,h1=Symbol.for("react.element"),d1=Symbol.for("react.fragment"),f1=Object.prototype.hasOwnProperty,p1=c1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m1={key:!0,ref:!0,__self:!0,__source:!0};function wy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)f1.call(e,r)&&!m1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:h1,type:t,key:s,ref:o,props:i,_owner:p1.current}}Ml.Fragment=d1;Ml.jsx=wy;Ml.jsxs=wy;hy.exports=Ml;var y=hy.exports,Nc={},Ey={exports:{}},ct={},Ty={exports:{}},Iy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,j){var B=x.length;x.push(j);e:for(;0<B;){var de=B-1>>>1,Te=x[de];if(0<i(Te,j))x[de]=j,x[B]=Te,B=de;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var j=x[0],B=x.pop();if(B!==j){x[0]=B;e:for(var de=0,Te=x.length,$o=Te>>>1;de<$o;){var nr=2*(de+1)-1,Mu=x[nr],rr=nr+1,Uo=x[rr];if(0>i(Mu,B))rr<Te&&0>i(Uo,Mu)?(x[de]=Uo,x[rr]=B,de=rr):(x[de]=Mu,x[nr]=B,de=nr);else if(rr<Te&&0>i(Uo,B))x[de]=Uo,x[rr]=B,de=rr;else break e}}return j}function i(x,j){var B=x.sortIndex-j.sortIndex;return B!==0?B:x.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(x){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=x)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function E(x){if(_=!1,g(x),!v)if(n(l)!==null)v=!0,Vu(A);else{var j=n(u);j!==null&&Lu(E,j.startTime-x)}}function A(x,j){v=!1,_&&(_=!1,p(O),O=-1),m=!0;var B=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||x&&!Et());){var de=h.callback;if(typeof de=="function"){h.callback=null,d=h.priorityLevel;var Te=de(h.expirationTime<=j);j=t.unstable_now(),typeof Te=="function"?h.callback=Te:h===n(l)&&r(l),g(j)}else r(l);h=n(l)}if(h!==null)var $o=!0;else{var nr=n(u);nr!==null&&Lu(E,nr.startTime-j),$o=!1}return $o}finally{h=null,d=B,m=!1}}var R=!1,N=null,O=-1,J=5,z=-1;function Et(){return!(t.unstable_now()-z<J)}function Ki(){if(N!==null){var x=t.unstable_now();z=x;var j=!0;try{j=N(!0,x)}finally{j?qi():(R=!1,N=null)}}else R=!1}var qi;if(typeof f=="function")qi=function(){f(Ki)};else if(typeof MessageChannel<"u"){var vp=new MessageChannel,HE=vp.port2;vp.port1.onmessage=Ki,qi=function(){HE.postMessage(null)}}else qi=function(){w(Ki,0)};function Vu(x){N=x,R||(R=!0,qi())}function Lu(x,j){O=w(function(){x(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,Vu(A))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var B=d;d=j;try{return x()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,j){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var B=d;d=x;try{return j()}finally{d=B}},t.unstable_scheduleCallback=function(x,j,B){var de=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?de+B:de):B=de,x){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=B+Te,x={id:c++,callback:j,priorityLevel:x,startTime:B,expirationTime:Te,sortIndex:-1},B>de?(x.sortIndex=B,e(u,x),n(l)===null&&x===n(u)&&(_?(p(O),O=-1):_=!0,Lu(E,B-de))):(x.sortIndex=Te,e(l,x),v||m||(v=!0,Vu(A))),x},t.unstable_shouldYield=Et,t.unstable_wrapCallback=function(x){var j=d;return function(){var B=d;d=j;try{return x.apply(this,arguments)}finally{d=B}}}})(Iy);Ty.exports=Iy;var g1=Ty.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy=T,lt=g1;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cy=new Set,Ds={};function kr(t,e){fi(t,e),fi(t+"Capture",e)}function fi(t,e){for(Ds[t]=e,t=0;t<e.length;t++)Cy.add(e[t])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=Object.prototype.hasOwnProperty,y1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tp={},Ip={};function v1(t){return Dc.call(Ip,t)?!0:Dc.call(Tp,t)?!1:y1.test(t)?Ip[t]=!0:(Tp[t]=!0,!1)}function _1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w1(t,e,n,r){if(e===null||typeof e>"u"||_1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Je(t,5,!1,t.toLowerCase(),null,!1,!1)});var dd=/[\-:]([a-z])/g;function fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dd,fd);Oe[e]=new Je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dd,fd);Oe[e]=new Je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dd,fd);Oe[e]=new Je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Je(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Je(t,1,!1,t.toLowerCase(),null,!0,!0)});function pd(t,e,n,r){var i=Oe.hasOwnProperty(e)?Oe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(w1(e,n,i,r)&&(n=null),r||i===null?v1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pn=Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),jr=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),md=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),Ay=Symbol.for("react.provider"),Py=Symbol.for("react.context"),gd=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Lc=Symbol.for("react.suspense_list"),yd=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),Ry=Symbol.for("react.offscreen"),Sp=Symbol.iterator;function Gi(t){return t===null||typeof t!="object"?null:(t=Sp&&t[Sp]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,Fu;function is(t){if(Fu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fu=e&&e[1]||""}return`
`+Fu+t}var $u=!1;function Uu(t,e){if(!t||$u)return"";$u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?is(t):""}function E1(t){switch(t.tag){case 5:return is(t.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return t=Uu(t.type,!1),t;case 11:return t=Uu(t.type.render,!1),t;case 1:return t=Uu(t.type,!0),t;default:return""}}function Mc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zr:return"Fragment";case jr:return"Portal";case Oc:return"Profiler";case md:return"StrictMode";case Vc:return"Suspense";case Lc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Py:return(t.displayName||"Context")+".Consumer";case Ay:return(t._context.displayName||"Context")+".Provider";case gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yd:return e=t.displayName||null,e!==null?e:Mc(t.type)||"Memo";case _n:e=t._payload,t=t._init;try{return Mc(t(e))}catch{}}return null}function T1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mc(e);case 8:return e===md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ky(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I1(t){var e=ky(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bo(t){t._valueTracker||(t._valueTracker=I1(t))}function xy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ky(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bc(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ny(t,e){e=e.checked,e!=null&&pd(t,"checked",e,!1)}function Fc(t,e){Ny(t,e);var n=Hn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$c(t,e.type,n):e.hasOwnProperty("defaultValue")&&$c(t,e.type,Hn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ap(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $c(t,e,n){(e!=="number"||ba(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function ti(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(ss(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hn(n)}}function Dy(t,e){var n=Hn(e.value),r=Hn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Rp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Oy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Oy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wo,Vy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Os(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S1=["Webkit","ms","Moz","O"];Object.keys(gs).forEach(function(t){S1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gs[e]=gs[t]})});function Ly(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gs.hasOwnProperty(t)&&gs[t]?(""+e).trim():e+"px"}function My(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ly(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var C1=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zc(t,e){if(e){if(C1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Bc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wc=null;function vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hc=null,ni=null,ri=null;function kp(t){if(t=_o(t)){if(typeof Hc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=jl(e),Hc(t.stateNode,t.type,e))}}function by(t){ni?ri?ri.push(t):ri=[t]:ni=t}function Fy(){if(ni){var t=ni,e=ri;if(ri=ni=null,kp(t),e)for(t=0;t<e.length;t++)kp(e[t])}}function $y(t,e){return t(e)}function Uy(){}var ju=!1;function jy(t,e,n){if(ju)return t(e,n);ju=!0;try{return $y(t,e,n)}finally{ju=!1,(ni!==null||ri!==null)&&(Uy(),Fy())}}function Vs(t,e){var n=t.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Kc=!1;if(rn)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{Kc=!1}function A1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ys=!1,Fa=null,$a=!1,qc=null,P1={onError:function(t){ys=!0,Fa=t}};function R1(t,e,n,r,i,s,o,a,l){ys=!1,Fa=null,A1.apply(P1,arguments)}function k1(t,e,n,r,i,s,o,a,l){if(R1.apply(this,arguments),ys){if(ys){var u=Fa;ys=!1,Fa=null}else throw Error(S(198));$a||($a=!0,qc=u)}}function xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xp(t){if(xr(t)!==t)throw Error(S(188))}function x1(t){var e=t.alternate;if(!e){if(e=xr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xp(i),t;if(s===r)return xp(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function By(t){return t=x1(t),t!==null?Wy(t):null}function Wy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wy(t);if(e!==null)return e;t=t.sibling}return null}var Hy=lt.unstable_scheduleCallback,Np=lt.unstable_cancelCallback,N1=lt.unstable_shouldYield,D1=lt.unstable_requestPaint,fe=lt.unstable_now,O1=lt.unstable_getCurrentPriorityLevel,_d=lt.unstable_ImmediatePriority,Ky=lt.unstable_UserBlockingPriority,Ua=lt.unstable_NormalPriority,V1=lt.unstable_LowPriority,qy=lt.unstable_IdlePriority,bl=null,Ft=null;function L1(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:F1,M1=Math.log,b1=Math.LN2;function F1(t){return t>>>=0,t===0?32:31-(M1(t)/b1|0)|0}var Ho=64,Ko=4194304;function os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=os(a):(s&=o,s!==0&&(r=os(s)))}else o=n&~i,o!==0?r=os(o):s!==0&&(r=os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pt(e),i=1<<n,r|=t[n],e&=~i;return r}function $1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Pt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=$1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gy(){var t=Ho;return Ho<<=1,!(Ho&4194240)&&(Ho=64),t}function zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pt(e),t[e]=n}function j1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Pt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function wd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Qy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yy,Ed,Xy,Jy,Zy,Qc=!1,qo=[],Dn=null,On=null,Vn=null,Ls=new Map,Ms=new Map,En=[],z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dp(t,e){switch(t){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Ls.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ms.delete(e.pointerId)}}function Yi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_o(e),e!==null&&Ed(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function B1(t,e,n,r,i){switch(e){case"focusin":return Dn=Yi(Dn,t,e,n,r,i),!0;case"dragenter":return On=Yi(On,t,e,n,r,i),!0;case"mouseover":return Vn=Yi(Vn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ls.set(s,Yi(Ls.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ms.set(s,Yi(Ms.get(s)||null,t,e,n,r,i)),!0}return!1}function ev(t){var e=ar(t.target);if(e!==null){var n=xr(e);if(n!==null){if(e=n.tag,e===13){if(e=zy(n),e!==null){t.blockedOn=e,Zy(t.priority,function(){Xy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ga(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wc=r,n.target.dispatchEvent(r),Wc=null}else return e=_o(n),e!==null&&Ed(e),t.blockedOn=n,!1;e.shift()}return!0}function Op(t,e,n){ga(t)&&n.delete(e)}function W1(){Qc=!1,Dn!==null&&ga(Dn)&&(Dn=null),On!==null&&ga(On)&&(On=null),Vn!==null&&ga(Vn)&&(Vn=null),Ls.forEach(Op),Ms.forEach(Op)}function Xi(t,e){t.blockedOn===e&&(t.blockedOn=null,Qc||(Qc=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,W1)))}function bs(t){function e(i){return Xi(i,t)}if(0<qo.length){Xi(qo[0],t);for(var n=1;n<qo.length;n++){var r=qo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dn!==null&&Xi(Dn,t),On!==null&&Xi(On,t),Vn!==null&&Xi(Vn,t),Ls.forEach(e),Ms.forEach(e),n=0;n<En.length;n++)r=En[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)ev(n),n.blockedOn===null&&En.shift()}var ii=pn.ReactCurrentBatchConfig,za=!0;function H1(t,e,n,r){var i=Y,s=ii.transition;ii.transition=null;try{Y=1,Td(t,e,n,r)}finally{Y=i,ii.transition=s}}function K1(t,e,n,r){var i=Y,s=ii.transition;ii.transition=null;try{Y=4,Td(t,e,n,r)}finally{Y=i,ii.transition=s}}function Td(t,e,n,r){if(za){var i=Yc(t,e,n,r);if(i===null)Ju(t,e,r,Ba,n),Dp(t,r);else if(B1(i,t,e,n,r))r.stopPropagation();else if(Dp(t,r),e&4&&-1<z1.indexOf(t)){for(;i!==null;){var s=_o(i);if(s!==null&&Yy(s),s=Yc(t,e,n,r),s===null&&Ju(t,e,r,Ba,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ju(t,e,r,null,n)}}var Ba=null;function Yc(t,e,n,r){if(Ba=null,t=vd(r),t=ar(t),t!==null)if(e=xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ba=t,null}function tv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O1()){case _d:return 1;case Ky:return 4;case Ua:case V1:return 16;case qy:return 536870912;default:return 16}default:return 16}}var Rn=null,Id=null,ya=null;function nv(){if(ya)return ya;var t,e=Id,n=e.length,r,i="value"in Rn?Rn.value:Rn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ya=i.slice(t,1<r?1-r:void 0)}function va(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function Vp(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Go:Vp,this.isPropagationStopped=Vp,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),e}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=ht(Ni),vo=le({},Ni,{view:0,detail:0}),q1=ht(vo),Bu,Wu,Ji,Fl=le({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ji&&(Ji&&t.type==="mousemove"?(Bu=t.screenX-Ji.screenX,Wu=t.screenY-Ji.screenY):Wu=Bu=0,Ji=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),Lp=ht(Fl),G1=le({},Fl,{dataTransfer:0}),Q1=ht(G1),Y1=le({},vo,{relatedTarget:0}),Hu=ht(Y1),X1=le({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),J1=ht(X1),Z1=le({},Ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eT=ht(Z1),tT=le({},Ni,{data:0}),Mp=ht(tT),nT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iT[t])?!!e[t]:!1}function Cd(){return sT}var oT=le({},vo,{key:function(t){if(t.key){var e=nT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(t){return t.type==="keypress"?va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),aT=ht(oT),lT=le({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=ht(lT),uT=le({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),cT=ht(uT),hT=le({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),dT=ht(hT),fT=le({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pT=ht(fT),mT=[9,13,27,32],Ad=rn&&"CompositionEvent"in window,vs=null;rn&&"documentMode"in document&&(vs=document.documentMode);var gT=rn&&"TextEvent"in window&&!vs,rv=rn&&(!Ad||vs&&8<vs&&11>=vs),Fp=" ",$p=!1;function iv(t,e){switch(t){case"keyup":return mT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function yT(t,e){switch(t){case"compositionend":return sv(e);case"keypress":return e.which!==32?null:($p=!0,Fp);case"textInput":return t=e.data,t===Fp&&$p?null:t;default:return null}}function vT(t,e){if(Br)return t==="compositionend"||!Ad&&iv(t,e)?(t=nv(),ya=Id=Rn=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rv&&e.locale!=="ko"?null:e.data;default:return null}}var _T={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_T[t.type]:e==="textarea"}function ov(t,e,n,r){by(r),e=Wa(e,"onChange"),0<e.length&&(n=new Sd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _s=null,Fs=null;function wT(t){yv(t,0)}function $l(t){var e=Kr(t);if(xy(e))return t}function ET(t,e){if(t==="change")return e}var av=!1;if(rn){var Ku;if(rn){var qu="oninput"in document;if(!qu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),qu=typeof jp.oninput=="function"}Ku=qu}else Ku=!1;av=Ku&&(!document.documentMode||9<document.documentMode)}function zp(){_s&&(_s.detachEvent("onpropertychange",lv),Fs=_s=null)}function lv(t){if(t.propertyName==="value"&&$l(Fs)){var e=[];ov(e,Fs,t,vd(t)),jy(wT,e)}}function TT(t,e,n){t==="focusin"?(zp(),_s=e,Fs=n,_s.attachEvent("onpropertychange",lv)):t==="focusout"&&zp()}function IT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(Fs)}function ST(t,e){if(t==="click")return $l(e)}function CT(t,e){if(t==="input"||t==="change")return $l(e)}function AT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:AT;function $s(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dc.call(e,i)||!kt(t[i],e[i]))return!1}return!0}function Bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wp(t,e){var n=Bp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cv(){for(var t=window,e=ba();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ba(t.document)}return e}function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PT(t){var e=cv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&uv(n.ownerDocument.documentElement,n)){if(r!==null&&Pd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Wp(n,s);var o=Wp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var RT=rn&&"documentMode"in document&&11>=document.documentMode,Wr=null,Xc=null,ws=null,Jc=!1;function Hp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jc||Wr==null||Wr!==ba(r)||(r=Wr,"selectionStart"in r&&Pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ws&&$s(ws,r)||(ws=r,r=Wa(Xc,"onSelect"),0<r.length&&(e=new Sd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wr)))}function Qo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hr={animationend:Qo("Animation","AnimationEnd"),animationiteration:Qo("Animation","AnimationIteration"),animationstart:Qo("Animation","AnimationStart"),transitionend:Qo("Transition","TransitionEnd")},Gu={},hv={};rn&&(hv=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function Ul(t){if(Gu[t])return Gu[t];if(!Hr[t])return t;var e=Hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hv)return Gu[t]=e[n];return t}var dv=Ul("animationend"),fv=Ul("animationiteration"),pv=Ul("animationstart"),mv=Ul("transitionend"),gv=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(t,e){gv.set(t,e),kr(e,[t])}for(var Qu=0;Qu<Kp.length;Qu++){var Yu=Kp[Qu],kT=Yu.toLowerCase(),xT=Yu[0].toUpperCase()+Yu.slice(1);Yn(kT,"on"+xT)}Yn(dv,"onAnimationEnd");Yn(fv,"onAnimationIteration");Yn(pv,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(mv,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NT=new Set("cancel close invalid load scroll toggle".split(" ").concat(as));function qp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,k1(r,e,void 0,t),t.currentTarget=null}function yv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;qp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;qp(i,a,u),s=l}}}if($a)throw t=qc,$a=!1,qc=null,t}function ee(t,e){var n=e[rh];n===void 0&&(n=e[rh]=new Set);var r=t+"__bubble";n.has(r)||(vv(e,t,2,!1),n.add(r))}function Xu(t,e,n){var r=0;e&&(r|=4),vv(n,t,r,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function Us(t){if(!t[Yo]){t[Yo]=!0,Cy.forEach(function(n){n!=="selectionchange"&&(NT.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,Xu("selectionchange",!1,e))}}function vv(t,e,n,r){switch(tv(e)){case 1:var i=H1;break;case 4:i=K1;break;default:i=Td}n=i.bind(null,e,n,t),i=void 0,!Kc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ju(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ar(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}jy(function(){var u=s,c=vd(n),h=[];e:{var d=gv.get(t);if(d!==void 0){var m=Sd,v=t;switch(t){case"keypress":if(va(n)===0)break e;case"keydown":case"keyup":m=aT;break;case"focusin":v="focus",m=Hu;break;case"focusout":v="blur",m=Hu;break;case"beforeblur":case"afterblur":m=Hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Q1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=cT;break;case dv:case fv:case pv:m=J1;break;case mv:m=dT;break;case"scroll":m=q1;break;case"wheel":m=pT;break;case"copy":case"cut":case"paste":m=eT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=bp}var _=(e&4)!==0,w=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=Vs(f,p),E!=null&&_.push(js(f,E,g)))),w)break;f=f.return}0<_.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Wc&&(v=n.relatedTarget||n.fromElement)&&(ar(v)||v[sn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?ar(v):null,v!==null&&(w=xr(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=Lp,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=bp,E="onPointerLeave",p="onPointerEnter",f="pointer"),w=m==null?d:Kr(m),g=v==null?d:Kr(v),d=new _(E,f+"leave",m,n,c),d.target=w,d.relatedTarget=g,E=null,ar(c)===u&&(_=new _(p,f+"enter",v,n,c),_.target=g,_.relatedTarget=w,E=_),w=E,m&&v)t:{for(_=m,p=v,f=0,g=_;g;g=br(g))f++;for(g=0,E=p;E;E=br(E))g++;for(;0<f-g;)_=br(_),f--;for(;0<g-f;)p=br(p),g--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=br(_),p=br(p)}_=null}else _=null;m!==null&&Gp(h,d,m,_,!1),v!==null&&w!==null&&Gp(h,w,v,_,!0)}}e:{if(d=u?Kr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var A=ET;else if(Up(d))if(av)A=CT;else{A=IT;var R=TT}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=ST);if(A&&(A=A(t,u))){ov(h,A,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&$c(d,"number",d.value)}switch(R=u?Kr(u):window,t){case"focusin":(Up(R)||R.contentEditable==="true")&&(Wr=R,Xc=u,ws=null);break;case"focusout":ws=Xc=Wr=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Hp(h,n,c);break;case"selectionchange":if(RT)break;case"keydown":case"keyup":Hp(h,n,c)}var N;if(Ad)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Br?iv(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(rv&&n.locale!=="ko"&&(Br||O!=="onCompositionStart"?O==="onCompositionEnd"&&Br&&(N=nv()):(Rn=c,Id="value"in Rn?Rn.value:Rn.textContent,Br=!0)),R=Wa(u,O),0<R.length&&(O=new Mp(O,t,null,n,c),h.push({event:O,listeners:R}),N?O.data=N:(N=sv(n),N!==null&&(O.data=N)))),(N=gT?yT(t,n):vT(t,n))&&(u=Wa(u,"onBeforeInput"),0<u.length&&(c=new Mp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}yv(h,e)})}function js(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vs(t,n),s!=null&&r.unshift(js(t,s,i)),s=Vs(t,e),s!=null&&r.push(js(t,s,i))),t=t.return}return r}function br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Vs(n,s),l!=null&&o.unshift(js(n,l,a))):i||(l=Vs(n,s),l!=null&&o.push(js(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var DT=/\r\n?/g,OT=/\u0000|\uFFFD/g;function Qp(t){return(typeof t=="string"?t:""+t).replace(DT,`
`).replace(OT,"")}function Xo(t,e,n){if(e=Qp(e),Qp(t)!==e&&n)throw Error(S(425))}function Ha(){}var Zc=null,eh=null;function th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nh=typeof setTimeout=="function"?setTimeout:void 0,VT=typeof clearTimeout=="function"?clearTimeout:void 0,Yp=typeof Promise=="function"?Promise:void 0,LT=typeof queueMicrotask=="function"?queueMicrotask:typeof Yp<"u"?function(t){return Yp.resolve(null).then(t).catch(MT)}:nh;function MT(t){setTimeout(function(){throw t})}function Zu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),bs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bs(e)}function Ln(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Di=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Di,zs="__reactProps$"+Di,sn="__reactContainer$"+Di,rh="__reactEvents$"+Di,bT="__reactListeners$"+Di,FT="__reactHandles$"+Di;function ar(t){var e=t[Vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sn]||n[Vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xp(t);t!==null;){if(n=t[Vt])return n;t=Xp(t)}return e}t=n,n=t.parentNode}return null}function _o(t){return t=t[Vt]||t[sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function jl(t){return t[zs]||null}var ih=[],qr=-1;function Xn(t){return{current:t}}function ne(t){0>qr||(t.current=ih[qr],ih[qr]=null,qr--)}function Z(t,e){qr++,ih[qr]=t.current,t.current=e}var Kn={},We=Xn(Kn),tt=Xn(!1),vr=Kn;function pi(t,e){var n=t.type.contextTypes;if(!n)return Kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function Ka(){ne(tt),ne(We)}function Jp(t,e,n){if(We.current!==Kn)throw Error(S(168));Z(We,e),Z(tt,n)}function _v(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,T1(t)||"Unknown",i));return le({},n,r)}function qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kn,vr=We.current,Z(We,t),Z(tt,tt.current),!0}function Zp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=_v(t,e,vr),r.__reactInternalMemoizedMergedChildContext=t,ne(tt),ne(We),Z(We,t)):ne(tt),Z(tt,n)}var Qt=null,zl=!1,ec=!1;function wv(t){Qt===null?Qt=[t]:Qt.push(t)}function $T(t){zl=!0,wv(t)}function Jn(){if(!ec&&Qt!==null){ec=!0;var t=0,e=Y;try{var n=Qt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qt=null,zl=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(t+1)),Hy(_d,Jn),i}finally{Y=e,ec=!1}}return null}var Gr=[],Qr=0,Ga=null,Qa=0,dt=[],ft=0,_r=null,Yt=1,Xt="";function ir(t,e){Gr[Qr++]=Qa,Gr[Qr++]=Ga,Ga=t,Qa=e}function Ev(t,e,n){dt[ft++]=Yt,dt[ft++]=Xt,dt[ft++]=_r,_r=t;var r=Yt;t=Xt;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var s=32-Pt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Pt(e)+i|n<<i|r,Xt=s+t}else Yt=1<<s|n<<i|r,Xt=t}function Rd(t){t.return!==null&&(ir(t,1),Ev(t,1,0))}function kd(t){for(;t===Ga;)Ga=Gr[--Qr],Gr[Qr]=null,Qa=Gr[--Qr],Gr[Qr]=null;for(;t===_r;)_r=dt[--ft],dt[ft]=null,Xt=dt[--ft],dt[ft]=null,Yt=dt[--ft],dt[ft]=null}var at=null,st=null,ie=!1,Ct=null;function Tv(t,e){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function em(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,at=t,st=Ln(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,at=t,st=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_r!==null?{id:Yt,overflow:Xt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,at=t,st=null,!0):!1;default:return!1}}function sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function oh(t){if(ie){var e=st;if(e){var n=e;if(!em(t,e)){if(sh(t))throw Error(S(418));e=Ln(n.nextSibling);var r=at;e&&em(t,e)?Tv(r,n):(t.flags=t.flags&-4097|2,ie=!1,at=t)}}else{if(sh(t))throw Error(S(418));t.flags=t.flags&-4097|2,ie=!1,at=t}}}function tm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;at=t}function Jo(t){if(t!==at)return!1;if(!ie)return tm(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!th(t.type,t.memoizedProps)),e&&(e=st)){if(sh(t))throw Iv(),Error(S(418));for(;e;)Tv(t,e),e=Ln(e.nextSibling)}if(tm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){st=Ln(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}st=null}}else st=at?Ln(t.stateNode.nextSibling):null;return!0}function Iv(){for(var t=st;t;)t=Ln(t.nextSibling)}function mi(){st=at=null,ie=!1}function xd(t){Ct===null?Ct=[t]:Ct.push(t)}var UT=pn.ReactCurrentBatchConfig;function It(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ya=Xn(null),Xa=null,Yr=null,Nd=null;function Dd(){Nd=Yr=Xa=null}function Od(t){var e=Ya.current;ne(Ya),t._currentValue=e}function ah(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function si(t,e){Xa=t,Nd=Yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(et=!0),t.firstContext=null)}function _t(t){var e=t._currentValue;if(Nd!==t)if(t={context:t,memoizedValue:e,next:null},Yr===null){if(Xa===null)throw Error(S(308));Yr=t,Xa.dependencies={lanes:0,firstContext:t}}else Yr=Yr.next=t;return e}var lr=null;function Vd(t){lr===null?lr=[t]:lr.push(t)}function Sv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Vd(e)):(n.next=i.next,i.next=n),e.interleaved=n,on(t,r)}function on(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wn=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,on(t,n)}return i=r.interleaved,i===null?(e.next=e,Vd(r)):(e.next=i.next,i.next=e),r.interleaved=e,on(t,n)}function _a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wd(t,n)}}function nm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ja(t,e,n,r){var i=t.updateQueue;wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=le({},h,d);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=h}}function rm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Av=new Sy.Component().refs;function lh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bl={isMounted:function(t){return(t=t._reactInternals)?xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Fn(t),s=nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Mn(t,s,i),e!==null&&(Rt(e,t,i,r),_a(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Fn(t),s=nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mn(t,s,i),e!==null&&(Rt(e,t,i,r),_a(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),r=Fn(t),i=nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Mn(t,i,r),e!==null&&(Rt(e,t,r,n),_a(e,t,r))}};function im(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$s(n,r)||!$s(i,s):!0}function Pv(t,e,n){var r=!1,i=Kn,s=e.contextType;return typeof s=="object"&&s!==null?s=_t(s):(i=nt(e)?vr:We.current,r=e.contextTypes,s=(r=r!=null)?pi(t,i):Kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bl.enqueueReplaceState(e,e.state,null)}function uh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Av,Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_t(s):(s=nt(e)?vr:We.current,i.context=pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Bl.enqueueReplaceState(i,i.state,null),Ja(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Av&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Zo(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function om(t){var e=t._init;return e(t._payload)}function Rv(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=$n(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,E){return f===null||f.tag!==6?(f=ac(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,E){var A=g.type;return A===zr?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===_n&&om(A)===f.type)?(E=i(f,g.props),E.ref=Zi(p,f,g),E.return=p,E):(E=Ca(g.type,g.key,g.props,null,p.mode,E),E.ref=Zi(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=lc(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,A){return f===null||f.tag!==7?(f=pr(g,p.mode,E,A),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ac(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case zo:return g=Ca(f.type,f.key,f.props,null,p.mode,g),g.ref=Zi(p,null,f),g.return=p,g;case jr:return f=lc(f,p.mode,g),f.return=p,f;case _n:var E=f._init;return h(p,E(f._payload),g)}if(ss(f)||Gi(f))return f=pr(f,p.mode,g,null),f.return=p,f;Zo(p,f)}return null}function d(p,f,g,E){var A=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:a(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zo:return g.key===A?l(p,f,g,E):null;case jr:return g.key===A?u(p,f,g,E):null;case _n:return A=g._init,d(p,f,A(g._payload),E)}if(ss(g)||Gi(g))return A!==null?null:c(p,f,g,E,null);Zo(p,g)}return null}function m(p,f,g,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,a(f,p,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case zo:return p=p.get(E.key===null?g:E.key)||null,l(f,p,E,A);case jr:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,A);case _n:var R=E._init;return m(p,f,g,R(E._payload),A)}if(ss(E)||Gi(E))return p=p.get(g)||null,c(f,p,E,A,null);Zo(f,E)}return null}function v(p,f,g,E){for(var A=null,R=null,N=f,O=f=0,J=null;N!==null&&O<g.length;O++){N.index>O?(J=N,N=null):J=N.sibling;var z=d(p,N,g[O],E);if(z===null){N===null&&(N=J);break}t&&N&&z.alternate===null&&e(p,N),f=s(z,f,O),R===null?A=z:R.sibling=z,R=z,N=J}if(O===g.length)return n(p,N),ie&&ir(p,O),A;if(N===null){for(;O<g.length;O++)N=h(p,g[O],E),N!==null&&(f=s(N,f,O),R===null?A=N:R.sibling=N,R=N);return ie&&ir(p,O),A}for(N=r(p,N);O<g.length;O++)J=m(N,p,O,g[O],E),J!==null&&(t&&J.alternate!==null&&N.delete(J.key===null?O:J.key),f=s(J,f,O),R===null?A=J:R.sibling=J,R=J);return t&&N.forEach(function(Et){return e(p,Et)}),ie&&ir(p,O),A}function _(p,f,g,E){var A=Gi(g);if(typeof A!="function")throw Error(S(150));if(g=A.call(g),g==null)throw Error(S(151));for(var R=A=null,N=f,O=f=0,J=null,z=g.next();N!==null&&!z.done;O++,z=g.next()){N.index>O?(J=N,N=null):J=N.sibling;var Et=d(p,N,z.value,E);if(Et===null){N===null&&(N=J);break}t&&N&&Et.alternate===null&&e(p,N),f=s(Et,f,O),R===null?A=Et:R.sibling=Et,R=Et,N=J}if(z.done)return n(p,N),ie&&ir(p,O),A;if(N===null){for(;!z.done;O++,z=g.next())z=h(p,z.value,E),z!==null&&(f=s(z,f,O),R===null?A=z:R.sibling=z,R=z);return ie&&ir(p,O),A}for(N=r(p,N);!z.done;O++,z=g.next())z=m(N,p,O,z.value,E),z!==null&&(t&&z.alternate!==null&&N.delete(z.key===null?O:z.key),f=s(z,f,O),R===null?A=z:R.sibling=z,R=z);return t&&N.forEach(function(Ki){return e(p,Ki)}),ie&&ir(p,O),A}function w(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===zr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case zo:e:{for(var A=g.key,R=f;R!==null;){if(R.key===A){if(A=g.type,A===zr){if(R.tag===7){n(p,R.sibling),f=i(R,g.props.children),f.return=p,p=f;break e}}else if(R.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===_n&&om(A)===R.type){n(p,R.sibling),f=i(R,g.props),f.ref=Zi(p,R,g),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}g.type===zr?(f=pr(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=Ca(g.type,g.key,g.props,null,p.mode,E),E.ref=Zi(p,f,g),E.return=p,p=E)}return o(p);case jr:e:{for(R=g.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=lc(g,p.mode,E),f.return=p,p=f}return o(p);case _n:return R=g._init,w(p,f,R(g._payload),E)}if(ss(g))return v(p,f,g,E);if(Gi(g))return _(p,f,g,E);Zo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=ac(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return w}var gi=Rv(!0),kv=Rv(!1),wo={},$t=Xn(wo),Bs=Xn(wo),Ws=Xn(wo);function ur(t){if(t===wo)throw Error(S(174));return t}function Md(t,e){switch(Z(Ws,e),Z(Bs,t),Z($t,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jc(e,t)}ne($t),Z($t,e)}function yi(){ne($t),ne(Bs),ne(Ws)}function xv(t){ur(Ws.current);var e=ur($t.current),n=jc(e,t.type);e!==n&&(Z(Bs,t),Z($t,n))}function bd(t){Bs.current===t&&(ne($t),ne(Bs))}var oe=Xn(0);function Za(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tc=[];function Fd(){for(var t=0;t<tc.length;t++)tc[t]._workInProgressVersionPrimary=null;tc.length=0}var wa=pn.ReactCurrentDispatcher,nc=pn.ReactCurrentBatchConfig,wr=0,ae=null,ve=null,Se=null,el=!1,Es=!1,Hs=0,jT=0;function Ve(){throw Error(S(321))}function $d(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function Ud(t,e,n,r,i,s){if(wr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wa.current=t===null||t.memoizedState===null?HT:KT,t=n(r,i),Es){s=0;do{if(Es=!1,Hs=0,25<=s)throw Error(S(301));s+=1,Se=ve=null,e.updateQueue=null,wa.current=qT,t=n(r,i)}while(Es)}if(wa.current=tl,e=ve!==null&&ve.next!==null,wr=0,Se=ve=ae=null,el=!1,e)throw Error(S(300));return t}function jd(){var t=Hs!==0;return Hs=0,t}function Ot(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ae.memoizedState=Se=t:Se=Se.next=t,Se}function wt(){if(ve===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Se===null?ae.memoizedState:Se.next;if(e!==null)Se=e,ve=t;else{if(t===null)throw Error(S(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Se===null?ae.memoizedState=Se=t:Se=Se.next=t}return Se}function Ks(t,e){return typeof e=="function"?e(t):e}function rc(t){var e=wt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((wr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,Er|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,kt(r,e.memoizedState)||(et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,Er|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ic(t){var e=wt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||(et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Nv(){}function Dv(t,e){var n=ae,r=wt(),i=e(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,et=!0),r=r.queue,zd(Lv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,qs(9,Vv.bind(null,n,r,i,e),void 0,null),Ce===null)throw Error(S(349));wr&30||Ov(n,e,i)}return i}function Ov(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vv(t,e,n,r){e.value=n,e.getSnapshot=r,Mv(e)&&bv(t)}function Lv(t,e,n){return n(function(){Mv(e)&&bv(t)})}function Mv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function bv(t){var e=on(t,1);e!==null&&Rt(e,t,1,-1)}function am(t){var e=Ot();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:t},e.queue=t,t=t.dispatch=WT.bind(null,ae,t),[e.memoizedState,t]}function qs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fv(){return wt().memoizedState}function Ea(t,e,n,r){var i=Ot();ae.flags|=t,i.memoizedState=qs(1|e,n,void 0,r===void 0?null:r)}function Wl(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&$d(r,o.deps)){i.memoizedState=qs(e,n,s,r);return}}ae.flags|=t,i.memoizedState=qs(1|e,n,s,r)}function lm(t,e){return Ea(8390656,8,t,e)}function zd(t,e){return Wl(2048,8,t,e)}function $v(t,e){return Wl(4,2,t,e)}function Uv(t,e){return Wl(4,4,t,e)}function jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zv(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,jv.bind(null,e,t),n)}function Bd(){}function Bv(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$d(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wv(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$d(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hv(t,e,n){return wr&21?(kt(n,e)||(n=Gy(),ae.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n)}function zT(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=nc.transition;nc.transition={};try{t(!1),e()}finally{Y=n,nc.transition=r}}function Kv(){return wt().memoizedState}function BT(t,e,n){var r=Fn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qv(t))Gv(e,n);else if(n=Sv(t,e,n,r),n!==null){var i=Qe();Rt(n,t,r,i),Qv(n,e,r)}}function WT(t,e,n){var r=Fn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qv(t))Gv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kt(a,o)){var l=e.interleaved;l===null?(i.next=i,Vd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Sv(t,e,i,r),n!==null&&(i=Qe(),Rt(n,t,r,i),Qv(n,e,r))}}function qv(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function Gv(t,e){Es=el=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wd(t,n)}}var tl={readContext:_t,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},HT={readContext:_t,useCallback:function(t,e){return Ot().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ea(4194308,4,jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ea(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ea(4,2,t,e)},useMemo:function(t,e){var n=Ot();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ot();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=BT.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Ot();return t={current:t},e.memoizedState=t},useState:am,useDebugValue:Bd,useDeferredValue:function(t){return Ot().memoizedState=t},useTransition:function(){var t=am(!1),e=t[0];return t=zT.bind(null,t[1]),Ot().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Ot();if(ie){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Ce===null)throw Error(S(349));wr&30||Ov(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lm(Lv.bind(null,r,s,t),[t]),r.flags|=2048,qs(9,Vv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ot(),e=Ce.identifierPrefix;if(ie){var n=Xt,r=Yt;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Hs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KT={readContext:_t,useCallback:Bv,useContext:_t,useEffect:zd,useImperativeHandle:zv,useInsertionEffect:$v,useLayoutEffect:Uv,useMemo:Wv,useReducer:rc,useRef:Fv,useState:function(){return rc(Ks)},useDebugValue:Bd,useDeferredValue:function(t){var e=wt();return Hv(e,ve.memoizedState,t)},useTransition:function(){var t=rc(Ks)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Nv,useSyncExternalStore:Dv,useId:Kv,unstable_isNewReconciler:!1},qT={readContext:_t,useCallback:Bv,useContext:_t,useEffect:zd,useImperativeHandle:zv,useInsertionEffect:$v,useLayoutEffect:Uv,useMemo:Wv,useReducer:ic,useRef:Fv,useState:function(){return ic(Ks)},useDebugValue:Bd,useDeferredValue:function(t){var e=wt();return ve===null?e.memoizedState=t:Hv(e,ve.memoizedState,t)},useTransition:function(){var t=ic(Ks)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Nv,useSyncExternalStore:Dv,useId:Kv,unstable_isNewReconciler:!1};function vi(t,e){try{var n="",r=e;do n+=E1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ch(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GT=typeof WeakMap=="function"?WeakMap:Map;function Yv(t,e,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){rl||(rl=!0,wh=r),ch(t,e)},n}function Xv(t,e,n){n=nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ch(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ch(t,e),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function um(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new GT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lI.bind(null,t,e,n),e.then(t,t))}function cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nn(-1,1),e.tag=2,Mn(n,e,1))),n.lanes|=1),t)}var QT=pn.ReactCurrentOwner,et=!1;function qe(t,e,n,r){e.child=t===null?kv(e,null,n,r):gi(e,t.child,n,r)}function dm(t,e,n,r,i){n=n.render;var s=e.ref;return si(e,i),r=Ud(t,e,n,r,s,i),n=jd(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,an(t,e,i)):(ie&&n&&Rd(e),e.flags|=1,qe(t,e,r,i),e.child)}function fm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jv(t,e,s,r,i)):(t=Ca(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$s,n(o,r)&&t.ref===e.ref)return an(t,e,i)}return e.flags|=1,t=$n(s,r),t.ref=e.ref,t.return=e,e.child=t}function Jv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($s(s,r)&&t.ref===e.ref)if(et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(et=!0);else return e.lanes=t.lanes,an(t,e,i)}return hh(t,e,n,r,i)}function Zv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Jr,it),it|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(Jr,it),it|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Jr,it),it|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(Jr,it),it|=r;return qe(t,e,i,n),e.child}function e_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hh(t,e,n,r,i){var s=nt(n)?vr:We.current;return s=pi(e,s),si(e,i),n=Ud(t,e,n,r,s,i),r=jd(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,an(t,e,i)):(ie&&r&&Rd(e),e.flags|=1,qe(t,e,n,i),e.child)}function pm(t,e,n,r,i){if(nt(n)){var s=!0;qa(e)}else s=!1;if(si(e,i),e.stateNode===null)Ta(t,e),Pv(e,n,r),uh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=nt(n)?vr:We.current,u=pi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&sm(e,o,r,u),wn=!1;var d=e.memoizedState;o.state=d,Ja(e,r,o,i),l=e.memoizedState,a!==r||d!==l||tt.current||wn?(typeof c=="function"&&(lh(e,n,c,r),l=e.memoizedState),(a=wn||im(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Cv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:It(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_t(l):(l=nt(n)?vr:We.current,l=pi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&sm(e,o,r,l),wn=!1,d=e.memoizedState,o.state=d,Ja(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||tt.current||wn?(typeof m=="function"&&(lh(e,n,m,r),v=e.memoizedState),(u=wn||im(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return dh(t,e,n,r,s,i)}function dh(t,e,n,r,i,s){e_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Zp(e,n,!1),an(t,e,s);r=e.stateNode,QT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gi(e,t.child,null,s),e.child=gi(e,null,a,s)):qe(t,e,a,s),e.memoizedState=r.state,i&&Zp(e,n,!0),e.child}function t_(t){var e=t.stateNode;e.pendingContext?Jp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jp(t,e.context,!1),Md(t,e.containerInfo)}function mm(t,e,n,r,i){return mi(),xd(i),e.flags|=256,qe(t,e,n,r),e.child}var fh={dehydrated:null,treeContext:null,retryLane:0};function ph(t){return{baseLanes:t,cachePool:null,transitions:null}}function n_(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(oe,i&1),t===null)return oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ql(o,r,0,null),t=pr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ph(n),e.memoizedState=fh,t):Wd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return YT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=$n(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$n(a,s):(s=pr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ph(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fh,r}return s=t.child,t=s.sibling,r=$n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wd(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ea(t,e,n,r){return r!==null&&xd(r),gi(e,t.child,null,n),t=Wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sc(Error(S(422))),ea(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ql({mode:"visible",children:r.children},i,0,null),s=pr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gi(e,t.child,null,o),e.child.memoizedState=ph(o),e.memoizedState=fh,s);if(!(e.mode&1))return ea(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=sc(s,r,void 0),ea(t,e,o,r)}if(a=(o&t.childLanes)!==0,et||a){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,on(t,i),Rt(r,t,i,-1))}return Yd(),r=sc(Error(S(421))),ea(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=uI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,st=Ln(i.nextSibling),at=e,ie=!0,Ct=null,t!==null&&(dt[ft++]=Yt,dt[ft++]=Xt,dt[ft++]=_r,Yt=t.id,Xt=t.overflow,_r=e),e=Wd(e,r.children),e.flags|=4096,e)}function gm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ah(t.return,e,n)}function oc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function r_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qe(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gm(t,n,e);else if(t.tag===19)gm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Za(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),oc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Za(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}oc(e,!0,n,null,s);break;case"together":oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ta(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function an(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=$n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XT(t,e,n){switch(e.tag){case 3:t_(e),mi();break;case 5:xv(e);break;case 1:nt(e.type)&&qa(e);break;case 4:Md(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(Ya,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?n_(t,e,n):(Z(oe,oe.current&1),t=an(t,e,n),t!==null?t.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return r_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Zv(t,e,n)}return an(t,e,n)}var i_,mh,s_,o_;i_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mh=function(){};s_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ur($t.current);var s=null;switch(n){case"input":i=bc(t,i),r=bc(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Uc(t,i),r=Uc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ha)}zc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ds.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ds.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};o_=function(t,e,n,r){n!==r&&(e.flags|=4)};function es(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Le(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function JT(t,e,n){var r=e.pendingProps;switch(kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(e),null;case 1:return nt(e.type)&&Ka(),Le(e),null;case 3:return r=e.stateNode,yi(),ne(tt),ne(We),Fd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ct!==null&&(Ih(Ct),Ct=null))),mh(t,e),Le(e),null;case 5:bd(e);var i=ur(Ws.current);if(n=e.type,t!==null&&e.stateNode!=null)s_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Le(e),null}if(t=ur($t.current),Jo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Vt]=e,r[zs]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<as.length;i++)ee(as[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Cp(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Pp(r,s),ee("invalid",r)}zc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,a,t),i=["children",""+a]):Ds.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":Bo(r),Ap(r,s,!0);break;case"textarea":Bo(r),Rp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ha)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Oy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Vt]=e,t[zs]=r,i_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<as.length;i++)ee(as[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Cp(t,r),i=bc(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Pp(t,r),i=Uc(t,r),ee("invalid",t);break;default:i=r}zc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?My(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Os(t,l):typeof l=="number"&&Os(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ds.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&pd(t,s,l,o))}switch(n){case"input":Bo(t),Ap(t,r,!1);break;case"textarea":Bo(t),Rp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ti(t,!!r.multiple,s,!1):r.defaultValue!=null&&ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Le(e),null;case 6:if(t&&e.stateNode!=null)o_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=ur(Ws.current),ur($t.current),Jo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Vt]=e,(s=r.nodeValue!==n)&&(t=at,t!==null))switch(t.tag){case 3:Xo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=e,e.stateNode=r}return Le(e),null;case 13:if(ne(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&st!==null&&e.mode&1&&!(e.flags&128))Iv(),mi(),e.flags|=98560,s=!1;else if(s=Jo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Vt]=e}else mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Le(e),s=!1}else Ct!==null&&(Ih(Ct),Ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?we===0&&(we=3):Yd())),e.updateQueue!==null&&(e.flags|=4),Le(e),null);case 4:return yi(),mh(t,e),t===null&&Us(e.stateNode.containerInfo),Le(e),null;case 10:return Od(e.type._context),Le(e),null;case 17:return nt(e.type)&&Ka(),Le(e),null;case 19:if(ne(oe),s=e.memoizedState,s===null)return Le(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)es(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Za(t),o!==null){for(e.flags|=128,es(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>_i&&(e.flags|=128,r=!0,es(s,!1),e.lanes=4194304)}else{if(!r)if(t=Za(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Le(e),null}else 2*fe()-s.renderingStartTime>_i&&n!==1073741824&&(e.flags|=128,r=!0,es(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),e):(Le(e),null);case 22:case 23:return Qd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?it&1073741824&&(Le(e),e.subtreeFlags&6&&(e.flags|=8192)):Le(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function ZT(t,e){switch(kd(e),e.tag){case 1:return nt(e.type)&&Ka(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yi(),ne(tt),ne(We),Fd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bd(e),null;case 13:if(ne(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(oe),null;case 4:return yi(),null;case 10:return Od(e.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var ta=!1,Fe=!1,eI=typeof WeakSet=="function"?WeakSet:Set,k=null;function Xr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function gh(t,e,n){try{n()}catch(r){ce(t,e,r)}}var ym=!1;function tI(t,e){if(Zc=za,t=cv(),Pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(eh={focusedElem:t,selectionRange:n},za=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,w=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:It(e.type,_),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){ce(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return v=ym,ym=!1,v}function Ts(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gh(e,n,s)}i=i.next}while(i!==r)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function a_(t){var e=t.alternate;e!==null&&(t.alternate=null,a_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vt],delete e[zs],delete e[rh],delete e[bT],delete e[FT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function l_(t){return t.tag===5||t.tag===3||t.tag===4}function vm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ha));else if(r!==4&&(t=t.child,t!==null))for(vh(t,e,n),t=t.sibling;t!==null;)vh(t,e,n),t=t.sibling}function _h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}var Re=null,St=!1;function yn(t,e,n){for(n=n.child;n!==null;)u_(t,e,n),n=n.sibling}function u_(t,e,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:Fe||Xr(n,e);case 6:var r=Re,i=St;Re=null,yn(t,e,n),Re=r,St=i,Re!==null&&(St?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(St?(t=Re,n=n.stateNode,t.nodeType===8?Zu(t.parentNode,n):t.nodeType===1&&Zu(t,n),bs(t)):Zu(Re,n.stateNode));break;case 4:r=Re,i=St,Re=n.stateNode.containerInfo,St=!0,yn(t,e,n),Re=r,St=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gh(n,e,o),i=i.next}while(i!==r)}yn(t,e,n);break;case 1:if(!Fe&&(Xr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}yn(t,e,n);break;case 21:yn(t,e,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,yn(t,e,n),Fe=r):yn(t,e,n);break;default:yn(t,e,n)}}function _m(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eI),e.forEach(function(r){var i=cI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,St=!1;break e;case 3:Re=a.stateNode.containerInfo,St=!0;break e;case 4:Re=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Re===null)throw Error(S(160));u_(s,o,i),Re=null,St=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)c_(e,t),e=e.sibling}function c_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tt(e,t),Dt(t),r&4){try{Ts(3,t,t.return),Hl(3,t)}catch(_){ce(t,t.return,_)}try{Ts(5,t,t.return)}catch(_){ce(t,t.return,_)}}break;case 1:Tt(e,t),Dt(t),r&512&&n!==null&&Xr(n,n.return);break;case 5:if(Tt(e,t),Dt(t),r&512&&n!==null&&Xr(n,n.return),t.flags&32){var i=t.stateNode;try{Os(i,"")}catch(_){ce(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ny(i,s),Bc(a,o);var u=Bc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?My(i,h):c==="dangerouslySetInnerHTML"?Vy(i,h):c==="children"?Os(i,h):pd(i,c,h,u)}switch(a){case"input":Fc(i,s);break;case"textarea":Dy(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ti(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?ti(i,!!s.multiple,s.defaultValue,!0):ti(i,!!s.multiple,s.multiple?[]:"",!1))}i[zs]=s}catch(_){ce(t,t.return,_)}}break;case 6:if(Tt(e,t),Dt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ce(t,t.return,_)}}break;case 3:if(Tt(e,t),Dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bs(e.containerInfo)}catch(_){ce(t,t.return,_)}break;case 4:Tt(e,t),Dt(t);break;case 13:Tt(e,t),Dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qd=fe())),r&4&&_m(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Fe=(u=Fe)||c,Tt(e,t),Fe=u):Tt(e,t),Dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(k=t,c=t.child;c!==null;){for(h=k=c;k!==null;){switch(d=k,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ts(4,d,d.return);break;case 1:Xr(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){ce(r,n,_)}}break;case 5:Xr(d,d.return);break;case 22:if(d.memoizedState!==null){Em(h);continue}}m!==null?(m.return=d,k=m):Em(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ly("display",o))}catch(_){ce(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){ce(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tt(e,t),Dt(t),r&4&&_m(t);break;case 21:break;default:Tt(e,t),Dt(t)}}function Dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(l_(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Os(i,""),r.flags&=-33);var s=vm(t);_h(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=vm(t);vh(t,a,o);break;default:throw Error(S(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nI(t,e,n){k=t,h_(t)}function h_(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ta;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Fe;a=ta;var u=Fe;if(ta=o,(Fe=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?Tm(i):l!==null?(l.return=o,k=l):Tm(i);for(;s!==null;)k=s,h_(s),s=s.sibling;k=i,ta=a,Fe=u}wm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):wm(t)}}function wm(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fe||Hl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:It(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&bs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Fe||e.flags&512&&yh(e)}catch(d){ce(e,e.return,d)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Em(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Tm(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{yh(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{yh(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var rI=Math.ceil,nl=pn.ReactCurrentDispatcher,Hd=pn.ReactCurrentOwner,yt=pn.ReactCurrentBatchConfig,q=0,Ce=null,ye=null,Ne=0,it=0,Jr=Xn(0),we=0,Gs=null,Er=0,Kl=0,Kd=0,Is=null,Ze=null,qd=0,_i=1/0,Gt=null,rl=!1,wh=null,bn=null,na=!1,kn=null,il=0,Ss=0,Eh=null,Ia=-1,Sa=0;function Qe(){return q&6?fe():Ia!==-1?Ia:Ia=fe()}function Fn(t){return t.mode&1?q&2&&Ne!==0?Ne&-Ne:UT.transition!==null?(Sa===0&&(Sa=Gy()),Sa):(t=Y,t!==0||(t=window.event,t=t===void 0?16:tv(t.type)),t):1}function Rt(t,e,n,r){if(50<Ss)throw Ss=0,Eh=null,Error(S(185));yo(t,n,r),(!(q&2)||t!==Ce)&&(t===Ce&&(!(q&2)&&(Kl|=n),we===4&&Tn(t,Ne)),rt(t,r),n===1&&q===0&&!(e.mode&1)&&(_i=fe()+500,zl&&Jn()))}function rt(t,e){var n=t.callbackNode;U1(t,e);var r=ja(t,t===Ce?Ne:0);if(r===0)n!==null&&Np(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Np(n),e===1)t.tag===0?$T(Im.bind(null,t)):wv(Im.bind(null,t)),LT(function(){!(q&6)&&Jn()}),n=null;else{switch(Qy(r)){case 1:n=_d;break;case 4:n=Ky;break;case 16:n=Ua;break;case 536870912:n=qy;break;default:n=Ua}n=__(n,d_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function d_(t,e){if(Ia=-1,Sa=0,q&6)throw Error(S(327));var n=t.callbackNode;if(oi()&&t.callbackNode!==n)return null;var r=ja(t,t===Ce?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=sl(t,r);else{e=r;var i=q;q|=2;var s=p_();(Ce!==t||Ne!==e)&&(Gt=null,_i=fe()+500,fr(t,e));do try{oI();break}catch(a){f_(t,a)}while(!0);Dd(),nl.current=s,q=i,ye!==null?e=0:(Ce=null,Ne=0,e=we)}if(e!==0){if(e===2&&(i=Gc(t),i!==0&&(r=i,e=Th(t,i))),e===1)throw n=Gs,fr(t,0),Tn(t,r),rt(t,fe()),n;if(e===6)Tn(t,r);else{if(i=t.current.alternate,!(r&30)&&!iI(i)&&(e=sl(t,r),e===2&&(s=Gc(t),s!==0&&(r=s,e=Th(t,s))),e===1))throw n=Gs,fr(t,0),Tn(t,r),rt(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:sr(t,Ze,Gt);break;case 3:if(Tn(t,r),(r&130023424)===r&&(e=qd+500-fe(),10<e)){if(ja(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=nh(sr.bind(null,t,Ze,Gt),e);break}sr(t,Ze,Gt);break;case 4:if(Tn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Pt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rI(r/1960))-r,10<r){t.timeoutHandle=nh(sr.bind(null,t,Ze,Gt),r);break}sr(t,Ze,Gt);break;case 5:sr(t,Ze,Gt);break;default:throw Error(S(329))}}}return rt(t,fe()),t.callbackNode===n?d_.bind(null,t):null}function Th(t,e){var n=Is;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=sl(t,e),t!==2&&(e=Ze,Ze=n,e!==null&&Ih(e)),t}function Ih(t){Ze===null?Ze=t:Ze.push.apply(Ze,t)}function iI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tn(t,e){for(e&=~Kd,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pt(e),r=1<<n;t[n]=-1,e&=~r}}function Im(t){if(q&6)throw Error(S(327));oi();var e=ja(t,0);if(!(e&1))return rt(t,fe()),null;var n=sl(t,e);if(t.tag!==0&&n===2){var r=Gc(t);r!==0&&(e=r,n=Th(t,r))}if(n===1)throw n=Gs,fr(t,0),Tn(t,e),rt(t,fe()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,sr(t,Ze,Gt),rt(t,fe()),null}function Gd(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(_i=fe()+500,zl&&Jn())}}function Tr(t){kn!==null&&kn.tag===0&&!(q&6)&&oi();var e=q;q|=1;var n=yt.transition,r=Y;try{if(yt.transition=null,Y=1,t)return t()}finally{Y=r,yt.transition=n,q=e,!(q&6)&&Jn()}}function Qd(){it=Jr.current,ne(Jr)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VT(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(kd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ka();break;case 3:yi(),ne(tt),ne(We),Fd();break;case 5:bd(r);break;case 4:yi();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:Od(r.type._context);break;case 22:case 23:Qd()}n=n.return}if(Ce=t,ye=t=$n(t.current,null),Ne=it=e,we=0,Gs=null,Kd=Kl=Er=0,Ze=Is=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}lr=null}return t}function f_(t,e){do{var n=ye;try{if(Dd(),wa.current=tl,el){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}el=!1}if(wr=0,Se=ve=ae=null,Es=!1,Hs=0,Hd.current=null,n===null||n.return===null){we=1,Gs=e,ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=cm(o);if(m!==null){m.flags&=-257,hm(m,o,a,s,e),m.mode&1&&um(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){um(s,u,e),Yd();break e}l=Error(S(426))}}else if(ie&&a.mode&1){var w=cm(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),hm(w,o,a,s,e),xd(vi(l,a));break e}}s=l=vi(l,a),we!==4&&(we=2),Is===null?Is=[s]:Is.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Yv(s,l,e);nm(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(bn===null||!bn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Xv(s,a,e);nm(s,E);break e}}s=s.return}while(s!==null)}g_(n)}catch(A){e=A,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function p_(){var t=nl.current;return nl.current=tl,t===null?tl:t}function Yd(){(we===0||we===3||we===2)&&(we=4),Ce===null||!(Er&268435455)&&!(Kl&268435455)||Tn(Ce,Ne)}function sl(t,e){var n=q;q|=2;var r=p_();(Ce!==t||Ne!==e)&&(Gt=null,fr(t,e));do try{sI();break}catch(i){f_(t,i)}while(!0);if(Dd(),q=n,nl.current=r,ye!==null)throw Error(S(261));return Ce=null,Ne=0,we}function sI(){for(;ye!==null;)m_(ye)}function oI(){for(;ye!==null&&!N1();)m_(ye)}function m_(t){var e=v_(t.alternate,t,it);t.memoizedProps=t.pendingProps,e===null?g_(t):ye=e,Hd.current=null}function g_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZT(n,e),n!==null){n.flags&=32767,ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ye=null;return}}else if(n=JT(n,e,it),n!==null){ye=n;return}if(e=e.sibling,e!==null){ye=e;return}ye=e=t}while(e!==null);we===0&&(we=5)}function sr(t,e,n){var r=Y,i=yt.transition;try{yt.transition=null,Y=1,aI(t,e,n,r)}finally{yt.transition=i,Y=r}return null}function aI(t,e,n,r){do oi();while(kn!==null);if(q&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(j1(t,s),t===Ce&&(ye=Ce=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||na||(na=!0,__(Ua,function(){return oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=Y;Y=1;var a=q;q|=4,Hd.current=null,tI(t,n),c_(n,t),PT(eh),za=!!Zc,eh=Zc=null,t.current=n,nI(n),D1(),q=a,Y=o,yt.transition=s}else t.current=n;if(na&&(na=!1,kn=t,il=i),s=t.pendingLanes,s===0&&(bn=null),L1(n.stateNode),rt(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rl)throw rl=!1,t=wh,wh=null,t;return il&1&&t.tag!==0&&oi(),s=t.pendingLanes,s&1?t===Eh?Ss++:(Ss=0,Eh=t):Ss=0,Jn(),null}function oi(){if(kn!==null){var t=Qy(il),e=yt.transition,n=Y;try{if(yt.transition=null,Y=16>t?16:t,kn===null)var r=!1;else{if(t=kn,kn=null,il=0,q&6)throw Error(S(331));var i=q;for(q|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:Ts(8,c,s)}var h=c.child;if(h!==null)h.return=c,k=h;else for(;k!==null;){c=k;var d=c.sibling,m=c.return;if(a_(c),c===u){k=null;break}if(d!==null){d.return=m,k=d;break}k=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ts(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,k=g;else e:for(o=f;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hl(9,a)}}catch(A){ce(a,a.return,A)}if(a===o){k=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,k=E;break e}k=a.return}}if(q=i,Jn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(bl,t)}catch{}r=!0}return r}finally{Y=n,yt.transition=e}}return!1}function Sm(t,e,n){e=vi(n,e),e=Yv(t,e,1),t=Mn(t,e,1),e=Qe(),t!==null&&(yo(t,1,e),rt(t,e))}function ce(t,e,n){if(t.tag===3)Sm(t,t,n);else for(;e!==null;){if(e.tag===3){Sm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){t=vi(n,t),t=Xv(e,t,1),e=Mn(e,t,1),t=Qe(),e!==null&&(yo(e,1,t),rt(e,t));break}}e=e.return}}function lI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(Ne&n)===n&&(we===4||we===3&&(Ne&130023424)===Ne&&500>fe()-qd?fr(t,0):Kd|=n),rt(t,e)}function y_(t,e){e===0&&(t.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var n=Qe();t=on(t,e),t!==null&&(yo(t,e,n),rt(t,n))}function uI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),y_(t,n)}function cI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),y_(t,n)}var v_;v_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return et=!1,XT(t,e,n);et=!!(t.flags&131072)}else et=!1,ie&&e.flags&1048576&&Ev(e,Qa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ta(t,e),t=e.pendingProps;var i=pi(e,We.current);si(e,n),i=Ud(null,e,r,t,i,n);var s=jd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,qa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ld(e),i.updater=Bl,e.stateNode=i,i._reactInternals=e,uh(e,r,t,n),e=dh(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Rd(e),qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ta(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dI(r),t=It(r,t),i){case 0:e=hh(null,e,r,t,n);break e;case 1:e=pm(null,e,r,t,n);break e;case 11:e=dm(null,e,r,t,n);break e;case 14:e=fm(null,e,r,It(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),hh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),pm(t,e,r,i,n);case 3:e:{if(t_(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Cv(t,e),Ja(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vi(Error(S(423)),e),e=mm(t,e,r,n,i);break e}else if(r!==i){i=vi(Error(S(424)),e),e=mm(t,e,r,n,i);break e}else for(st=Ln(e.stateNode.containerInfo.firstChild),at=e,ie=!0,Ct=null,n=kv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){e=an(t,e,n);break e}qe(t,e,r,n)}e=e.child}return e;case 5:return xv(e),t===null&&oh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,th(r,i)?o=null:s!==null&&th(r,s)&&(e.flags|=32),e_(t,e),qe(t,e,o,n),e.child;case 6:return t===null&&oh(e),null;case 13:return n_(t,e,n);case 4:return Md(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gi(e,null,r,n):qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),dm(t,e,r,i,n);case 7:return qe(t,e,e.pendingProps,n),e.child;case 8:return qe(t,e,e.pendingProps.children,n),e.child;case 12:return qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(Ya,r._currentValue),r._currentValue=o,s!==null)if(kt(s.value,o)){if(s.children===i.children&&!tt.current){e=an(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=nn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ah(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ah(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,si(e,n),i=_t(i),r=r(i),e.flags|=1,qe(t,e,r,n),e.child;case 14:return r=e.type,i=It(r,e.pendingProps),i=It(r.type,i),fm(t,e,r,i,n);case 15:return Jv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),Ta(t,e),e.tag=1,nt(r)?(t=!0,qa(e)):t=!1,si(e,n),Pv(e,r,i),uh(e,r,i,n),dh(null,e,r,!0,t,n);case 19:return r_(t,e,n);case 22:return Zv(t,e,n)}throw Error(S(156,e.tag))};function __(t,e){return Hy(t,e)}function hI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(t,e,n,r){return new hI(t,e,n,r)}function Xd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dI(t){if(typeof t=="function")return Xd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gd)return 11;if(t===yd)return 14}return 2}function $n(t,e){var n=t.alternate;return n===null?(n=gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ca(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zr:return pr(n.children,i,s,e);case md:o=8,i|=8;break;case Oc:return t=gt(12,n,e,i|2),t.elementType=Oc,t.lanes=s,t;case Vc:return t=gt(13,n,e,i),t.elementType=Vc,t.lanes=s,t;case Lc:return t=gt(19,n,e,i),t.elementType=Lc,t.lanes=s,t;case Ry:return ql(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ay:o=10;break e;case Py:o=9;break e;case gd:o=11;break e;case yd:o=14;break e;case _n:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pr(t,e,n,r){return t=gt(7,t,r,e),t.lanes=n,t}function ql(t,e,n,r){return t=gt(22,t,r,e),t.elementType=Ry,t.lanes=n,t.stateNode={isHidden:!1},t}function ac(t,e,n){return t=gt(6,t,null,e),t.lanes=n,t}function lc(t,e,n){return e=gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zu(0),this.expirationTimes=zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jd(t,e,n,r,i,s,o,a,l){return t=new fI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function pI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function w_(t){if(!t)return Kn;t=t._reactInternals;e:{if(xr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(nt(n))return _v(t,n,e)}return e}function E_(t,e,n,r,i,s,o,a,l){return t=Jd(n,r,!0,t,i,s,o,a,l),t.context=w_(null),n=t.current,r=Qe(),i=Fn(n),s=nn(r,i),s.callback=e??null,Mn(n,s,i),t.current.lanes=i,yo(t,i,r),rt(t,r),t}function Gl(t,e,n,r){var i=e.current,s=Qe(),o=Fn(i);return n=w_(n),e.context===null?e.context=n:e.pendingContext=n,e=nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Mn(i,e,o),t!==null&&(Rt(t,i,o,s),_a(t,i,o)),o}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zd(t,e){Cm(t,e),(t=t.alternate)&&Cm(t,e)}function mI(){return null}var T_=typeof reportError=="function"?reportError:function(t){console.error(t)};function ef(t){this._internalRoot=t}Ql.prototype.render=ef.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Gl(t,e,null,null)};Ql.prototype.unmount=ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){Gl(null,t,null,null)}),e[sn]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<En.length&&e!==0&&e<En[n].priority;n++);En.splice(n,0,t),n===0&&ev(t)}};function tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Am(){}function gI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ol(o);s.call(u)}}var o=E_(e,r,t,0,null,!1,!1,"",Am);return t._reactRootContainer=o,t[sn]=o.current,Us(t.nodeType===8?t.parentNode:t),Tr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ol(l);a.call(u)}}var l=Jd(t,0,!1,null,null,!1,!1,"",Am);return t._reactRootContainer=l,t[sn]=l.current,Us(t.nodeType===8?t.parentNode:t),Tr(function(){Gl(e,l,n,r)}),l}function Xl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ol(o);a.call(l)}}Gl(e,o,t,i)}else o=gI(n,e,t,i,r);return ol(o)}Yy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=os(e.pendingLanes);n!==0&&(wd(e,n|1),rt(e,fe()),!(q&6)&&(_i=fe()+500,Jn()))}break;case 13:Tr(function(){var r=on(t,1);if(r!==null){var i=Qe();Rt(r,t,1,i)}}),Zd(t,1)}};Ed=function(t){if(t.tag===13){var e=on(t,134217728);if(e!==null){var n=Qe();Rt(e,t,134217728,n)}Zd(t,134217728)}};Xy=function(t){if(t.tag===13){var e=Fn(t),n=on(t,e);if(n!==null){var r=Qe();Rt(n,t,e,r)}Zd(t,e)}};Jy=function(){return Y};Zy=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Hc=function(t,e,n){switch(e){case"input":if(Fc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=jl(r);if(!i)throw Error(S(90));xy(r),Fc(r,i)}}}break;case"textarea":Dy(t,n);break;case"select":e=n.value,e!=null&&ti(t,!!n.multiple,e,!1)}};$y=Gd;Uy=Tr;var yI={usingClientEntryPoint:!1,Events:[_o,Kr,jl,by,Fy,Gd]},ts={findFiberByHostInstance:ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vI={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=By(t),t===null?null:t.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||mI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{bl=ra.inject(vI),Ft=ra}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yI;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tf(e))throw Error(S(200));return pI(t,e,null,n)};ct.createRoot=function(t,e){if(!tf(t))throw Error(S(299));var n=!1,r="",i=T_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Jd(t,1,!1,null,null,n,!1,r,i),t[sn]=e.current,Us(t.nodeType===8?t.parentNode:t),new ef(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=By(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return Tr(t)};ct.hydrate=function(t,e,n){if(!Yl(e))throw Error(S(200));return Xl(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!tf(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=T_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=E_(e,null,t,1,n??null,i,!1,s,o),t[sn]=e.current,Us(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ql(e)};ct.render=function(t,e,n){if(!Yl(e))throw Error(S(200));return Xl(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!Yl(t))throw Error(S(40));return t._reactRootContainer?(Tr(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[sn]=null})}),!0):!1};ct.unstable_batchedUpdates=Gd;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Xl(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";function I_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I_)}catch(t){console.error(t)}}I_(),Ey.exports=ct;var _I=Ey.exports,Pm=_I;Nc.createRoot=Pm.createRoot,Nc.hydrateRoot=Pm.hydrateRoot;var Rm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},C_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(S_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new EI;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TI=function(t){const e=S_(t);return C_.encodeByteArray(e,!0)},al=function(t){return TI(t).replace(/\./g,"")},A_=function(t){try{return C_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=()=>II().__FIREBASE_DEFAULTS__,CI=()=>{if(typeof process>"u"||typeof Rm>"u")return;const t=Rm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&A_(t[1]);return e&&JSON.parse(e)},nf=()=>{try{return SI()||CI()||AI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},P_=t=>{var e,n;return(n=(e=nf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PI=t=>{const e=P_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},R_=()=>{var t;return(t=nf())===null||t===void 0?void 0:t.config},k_=t=>{var e;return(e=nf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[al(JSON.stringify(n)),al(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function NI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function DI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OI(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VI(){try{return typeof indexedDB=="object"}catch{return!1}}function LI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MI,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eo.prototype.create)}}class Eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?bI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mn(i,a,r)}}function bI(t,e){return t.replace(FI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const FI=/\{\$([^}]+)}/g;function $I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ll(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(km(s)&&km(o)){if(!ll(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function km(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function us(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function UI(t,e){const n=new jI(t,e);return n.subscribe.bind(n)}class jI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=uc),i.error===void 0&&(i.error=uc),i.complete===void 0&&(i.complete=uc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HI(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WI(t){return t===or?void 0:t}function HI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const qI={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},GI=G.INFO,QI={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},YI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=QI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rf{constructor(e){this.name=e,this._logLevel=GI,this._logHandler=YI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const XI=(t,e)=>e.some(n=>t instanceof n);let xm,Nm;function JI(){return xm||(xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZI(){return Nm||(Nm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const x_=new WeakMap,Sh=new WeakMap,N_=new WeakMap,cc=new WeakMap,sf=new WeakMap;function eS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&x_.set(n,t)}).catch(()=>{}),sf.set(e,t),e}function tS(t){if(Sh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sh.set(t,e)}let Ch={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||N_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nS(t){Ch=t(Ch)}function rS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hc(this),e,...n);return N_.set(r,e.sort?e.sort():[e]),Un(r)}:ZI().includes(t)?function(...e){return t.apply(hc(this),e),Un(x_.get(this))}:function(...e){return Un(t.apply(hc(this),e))}}function iS(t){return typeof t=="function"?rS(t):(t instanceof IDBTransaction&&tS(t),XI(t,JI())?new Proxy(t,Ch):t)}function Un(t){if(t instanceof IDBRequest)return eS(t);if(cc.has(t))return cc.get(t);const e=iS(t);return e!==t&&(cc.set(t,e),sf.set(e,t)),e}const hc=t=>sf.get(t);function sS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Un(o.result),l.oldVersion,l.newVersion,Un(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const oS=["get","getKey","getAll","getAllKeys","count"],aS=["put","add","delete","clear"],dc=new Map;function Dm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dc.get(e))return dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=aS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return dc.set(e,s),s}nS(t=>({...t,get:(e,n,r)=>Dm(e,n)||t.get(e,n,r),has:(e,n)=>!!Dm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ah="@firebase/app",Om="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new rf("@firebase/app"),cS="@firebase/app-compat",hS="@firebase/analytics-compat",dS="@firebase/analytics",fS="@firebase/app-check-compat",pS="@firebase/app-check",mS="@firebase/auth",gS="@firebase/auth-compat",yS="@firebase/database",vS="@firebase/database-compat",_S="@firebase/functions",wS="@firebase/functions-compat",ES="@firebase/installations",TS="@firebase/installations-compat",IS="@firebase/messaging",SS="@firebase/messaging-compat",CS="@firebase/performance",AS="@firebase/performance-compat",PS="@firebase/remote-config",RS="@firebase/remote-config-compat",kS="@firebase/storage",xS="@firebase/storage-compat",NS="@firebase/firestore",DS="@firebase/firestore-compat",OS="firebase",VS="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="[DEFAULT]",LS={[Ah]:"fire-core",[cS]:"fire-core-compat",[dS]:"fire-analytics",[hS]:"fire-analytics-compat",[pS]:"fire-app-check",[fS]:"fire-app-check-compat",[mS]:"fire-auth",[gS]:"fire-auth-compat",[yS]:"fire-rtdb",[vS]:"fire-rtdb-compat",[_S]:"fire-fn",[wS]:"fire-fn-compat",[ES]:"fire-iid",[TS]:"fire-iid-compat",[IS]:"fire-fcm",[SS]:"fire-fcm-compat",[CS]:"fire-perf",[AS]:"fire-perf-compat",[PS]:"fire-rc",[RS]:"fire-rc-compat",[kS]:"fire-gcs",[xS]:"fire-gcs-compat",[NS]:"fire-fst",[DS]:"fire-fst-compat","fire-js":"fire-js",[OS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Map,Rh=new Map;function MS(t,e){try{t.container.addComponent(e)}catch(n){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wi(t){const e=t.name;if(Rh.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;Rh.set(e,t);for(const n of ul.values())MS(n,t);return!0}function of(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jn=new Eo("app","Firebase",bS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=VS;function D_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ph,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jn.create("bad-app-name",{appName:String(i)});if(n||(n=R_()),!n)throw jn.create("no-options");const s=ul.get(i);if(s){if(ll(n,s.options)&&ll(r,s.config))return s;throw jn.create("duplicate-app",{appName:i})}const o=new KI(i);for(const l of Rh.values())o.addComponent(l);const a=new FS(n,r,o);return ul.set(i,a),a}function O_(t=Ph){const e=ul.get(t);if(!e&&t===Ph&&R_())return D_();if(!e)throw jn.create("no-app",{appName:t});return e}function zn(t,e,n){var r;let i=(r=LS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(a.join(" "));return}wi(new Ir(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="firebase-heartbeat-database",US=1,Qs="firebase-heartbeat-store";let fc=null;function V_(){return fc||(fc=sS($S,US,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qs)}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),fc}async function jS(t){try{return await(await V_()).transaction(Qs).objectStore(Qs).get(L_(t))}catch(e){if(e instanceof mn)Sr.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(n.message)}}}async function Vm(t,e){try{const r=(await V_()).transaction(Qs,"readwrite");await r.objectStore(Qs).put(e,L_(t)),await r.done}catch(n){if(n instanceof mn)Sr.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sr.warn(r.message)}}}function L_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=1024,BS=30*24*60*60*1e3;class WS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=BS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lm(),{heartbeatsToSend:n,unsentEntries:r}=HS(this._heartbeatsCache.heartbeats),i=al(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lm(){return new Date().toISOString().substring(0,10)}function HS(t,e=zS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VI()?LI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mm(t){return al(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t){wi(new Ir("platform-logger",e=>new lS(e),"PRIVATE")),wi(new Ir("heartbeat",e=>new WS(e),"PRIVATE")),zn(Ah,Om,t),zn(Ah,Om,"esm2017"),zn("fire-js","")}qS("");function af(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bm(t){return t!==void 0&&t.enterprise!==void 0}class GS{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function M_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QS=M_,b_=new Eo("auth","Firebase",M_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new rf("@firebase/auth");function YS(t,...e){cl.logLevel<=G.WARN&&cl.warn(`Auth (${Oi}): ${t}`,...e)}function Aa(t,...e){cl.logLevel<=G.ERROR&&cl.error(`Auth (${Oi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,...e){throw lf(t,...e)}function Ut(t,...e){return lf(t,...e)}function XS(t,e,n){const r=Object.assign(Object.assign({},QS()),{[e]:n});return new Eo("auth","Firebase",r).create(e,{appName:t.name})}function lf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return b_.create(t,...e)}function M(t,e,...n){if(!t)throw lf(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function ln(t,e){t||Jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JS(){return Fm()==="http:"||Fm()==="https:"}function Fm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JS()||NI()||"connection"in navigator)?navigator.onLine:!0}function eC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,ln(n>e,"Short delay should be less than long delay!"),this.isMobile=xI()||DI()}get(){return ZS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new Io(3e4,6e4);function Vi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nr(t,e,n,r,i={}){return $_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=To(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),F_.fetch()(U_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function $_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tC),e);try{const i=new rC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ia(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ia(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ia(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw XS(t,c,u);xt(t,c)}}catch(i){if(i instanceof mn)throw i;xt(t,"network-request-failed",{message:String(i)})}}async function Jl(t,e,n,r,i={}){const s=await Nr(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?uf(t.config,i):`${t.config.apiScheme}://${i}`}class rC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),nC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ut(t,e,r);return i.customData._tokenResponse=n,i}async function iC(t,e){return Nr(t,"GET","/v2/recaptchaConfig",Vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function oC(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aC(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),i=cf(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Cs(pc(i.auth_time)),issuedAtTime:Cs(pc(i.iat)),expirationTime:Cs(pc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pc(t){return Number(t)*1e3}function cf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=A_(n);return i?JSON.parse(i):(Aa("Failed to decode base64 JWT payload"),null)}catch(i){return Aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lC(t){const e=cf(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&uC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cs(this.lastLoginAt),this.creationTime=Cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ys(t,oC(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fC(s.providerUserInfo):[],a=dC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new j_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function hC(t){const e=Ye(t);await hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fC(t){return t.map(e=>{var{providerId:n}=e,r=af(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e){const n=await $_(t,{},async()=>{const r=To({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=U_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",F_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await pC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Xs;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xs,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new j_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aC(this,e)}reload(){return hC(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ys(this,sC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:A,providerData:R,stsTokenManager:N}=n;M(g&&N,e,"internal-error");const O=Xs.fromJSON(this.name,N);M(typeof g=="string",e,"internal-error"),vn(h,e.name),vn(d,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof A=="boolean",e,"internal-error"),vn(m,e.name),vn(v,e.name),vn(_,e.name),vn(w,e.name),vn(p,e.name),vn(f,e.name);const J=new mr({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:A,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:O,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(J.providerData=R.map(z=>Object.assign({},z))),w&&(J._redirectEventId=w),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Xs;i.updateFromServerResponse(n);const s=new mr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new Map;function Zt(t){ln(t instanceof Function,"Expected a class definition");let e=$m.get(t);return e?(ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$m.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z_.type="NONE";const Um=z_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ai(Zt(Um),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Zt(Um);const o=Pa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=mr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ai(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ai(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(q_(e))return"Blackberry";if(G_(e))return"Webos";if(hf(e))return"Safari";if((e.includes("chrome/")||W_(e))&&!e.includes("edge/"))return"Chrome";if(K_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function B_(t=He()){return/firefox\//i.test(t)}function hf(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function W_(t=He()){return/crios\//i.test(t)}function H_(t=He()){return/iemobile/i.test(t)}function K_(t=He()){return/android/i.test(t)}function q_(t=He()){return/blackberry/i.test(t)}function G_(t=He()){return/webos/i.test(t)}function Zl(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mC(t=He()){var e;return Zl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gC(){return OI()&&document.documentMode===10}function Q_(t=He()){return Zl(t)||K_(t)||G_(t)||q_(t)||/windows phone/i.test(t)||H_(t)}function yC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e=[]){let n;switch(t){case"Browser":n=jm(He());break;case"Worker":n=`${jm(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e={}){return Nr(t,"GET","/v2/passwordPolicy",Vi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=6;class EC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zm(this),this.idTokenSubscription=new zm(this),this.beforeStateQueue=new vC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _C(this),n=new EC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Li(t){return Ye(t)}class zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=UI(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function X_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",IC().appendChild(r)})}function SC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const CC="https://www.google.com/recaptcha/enterprise.js?render=",AC="recaptcha-enterprise",PC="NO_RECAPTCHA";class RC{constructor(e){this.type=AC,this.auth=Li(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{iC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new GS(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;bm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(PC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&bm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}X_(CC+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Bm(t,e,n,r=!1){const i=new RC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(t,e){const n=of(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ll(s,e??{}))return i;xt(i,"already-initialized")}return n.initialize({options:e})}function xC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NC(t,e,n){const r=Li(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=J_(e),{host:o,port:a}=DC(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),OC()}function J_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DC(t){const e=J_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wm(o)}}}function Wm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function VC(t,e){return Nr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(t,e){return Jl(t,"POST","/v1/accounts:signInWithPassword",Vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(t,e){return Jl(t,"POST","/v1/accounts:signInWithEmailLink",Vi(t,e))}async function MC(t,e){return Jl(t,"POST","/v1/accounts:signInWithEmailLink",Vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends df{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Js(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Js(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Bm(e,r,"signInWithPassword");return mc(e,i)}else return mc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Bm(e,r,"signInWithPassword");return mc(e,s)}else return Promise.reject(i)});case"emailLink":return LC(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return VC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return MC(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e){return Jl(t,"POST","/v1/accounts:signInWithIdp",Vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="http://localhost";class Cr extends df{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=af(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:bC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=To(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $C(t){const e=ls(us(t)).link,n=e?ls(us(e)).deep_link_id:null,r=ls(us(t)).deep_link_id;return(r?ls(us(r)).link:null)||r||n||e||t}class ff{constructor(e){var n,r,i,s,o,a;const l=ls(us(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=FC((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$C(e);try{return new ff(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.providerId=Mi.PROVIDER_ID}static credential(e,n){return Js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ff.parseLink(n);return M(r,"argument-error"),Js._fromEmailAndCode(e,r.code,r.tenantId)}}Mi.PROVIDER_ID="password";Mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Z_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends So{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends So{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends So{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends So{constructor(){super("twitter.com")}static credential(e,n){return Cr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return An.credential(n,r)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mr._fromIdTokenResponse(e,r,i),o=Hm(r);return new Ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hm(r);return new Ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dl(e,n,r,i)}}function e0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dl._fromErrorAndOperation(t,s,e,r):s})}async function UC(t,e,n=!1){const r=await Ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ys(t,e0(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=cf(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e,n=!1){const r="signIn",i=await e0(t,r,e),s=await Ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function zC(t,e){return t0(Li(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t){const e=Li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function WC(t,e,n){return zC(Ye(t),Mi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&BC(t),r})}function HC(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function KC(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function qC(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function GC(t){return Ye(t).signOut()}const fl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fl,"1"),this.storage.removeItem(fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(){const t=He();return hf(t)||Zl(t)}const YC=1e3,XC=10;class r0 extends n0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QC()&&yC(),this.fallbackToPolling=Q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}r0.type="LOCAL";const JC=r0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0 extends n0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}i0.type="SESSION";const s0=i0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new eu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ZC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=pf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function tA(t){jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function nA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iA(){return o0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="firebaseLocalStorageDb",sA=1,pl="firebaseLocalStorage",l0="fbase_key";class Co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tu(t,e){return t.transaction([pl],e?"readwrite":"readonly").objectStore(pl)}function oA(){const t=indexedDB.deleteDatabase(a0);return new Co(t).toPromise()}function xh(){const t=indexedDB.open(a0,sA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pl,{keyPath:l0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pl)?e(r):(r.close(),await oA(),e(await xh()))})})}async function Km(t,e,n){const r=tu(t,!0).put({[l0]:e,value:n});return new Co(r).toPromise()}async function aA(t,e){const n=tu(t,!1).get(e),r=await new Co(n).toPromise();return r===void 0?null:r.value}function qm(t,e){const n=tu(t,!0).delete(e);return new Co(n).toPromise()}const lA=800,uA=3;class u0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eu._getInstance(iA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nA(),!this.activeServiceWorker)return;this.sender=new eA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xh();return await Km(e,fl,"1"),await qm(e,fl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Km(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tu(i,!1).getAll();return new Co(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u0.type="LOCAL";const cA=u0;new Io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t,e){return e?Zt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf extends df{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dA(t){return t0(t.auth,new mf(t),t.bypassAuthState)}function fA(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),jC(n,new mf(t),t.bypassAuthState)}async function pA(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),UC(n,new mf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dA;case"linkViaPopup":case"linkViaRedirect":return pA;case"reauthViaPopup":case"reauthViaRedirect":return fA;default:xt(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=new Io(2e3,1e4);class Zr extends c0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=pf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mA.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="pendingRedirect",Ra=new Map;class yA extends c0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const r=await vA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vA(t,e){const n=EA(e),r=wA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _A(t,e){Ra.set(t._key(),e)}function wA(t){return Zt(t._redirectPersistence)}function EA(t){return Pa(gA,t.config.apiKey,t.name)}async function TA(t,e,n=!1){const r=Li(t),i=hA(r,e),o=await new yA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=10*60*1e3;class SA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!h0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gm(e))}saveEventToCache(e){this.cachedEventUids.add(Gm(e)),this.lastProcessedEventTime=Date.now()}}function Gm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function h0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RA=/^https?/;async function kA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AA(t);for(const n of e)try{if(xA(n))return}catch{}xt(t,"unauthorized-domain")}function xA(t){const e=kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RA.test(n))return!1;if(PA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=new Io(3e4,6e4);function Qm(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DA(t){return new Promise((e,n)=>{var r,i,s;function o(){Qm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qm(),n(Ut(t,"network-request-failed"))},timeout:NA.get()})}if(!((i=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=jt().gapi)===null||s===void 0)&&s.load)o();else{const a=SC("iframefcb");return jt()[a]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},X_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ka=null,e})}let ka=null;function OA(t){return ka=ka||DA(t),ka}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=new Io(5e3,15e3),LA="__/auth/iframe",MA="emulator/auth/iframe",bA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $A(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uf(e,MA):`https://${t.config.authDomain}/${LA}`,r={apiKey:e.apiKey,appName:t.name,v:Oi},i=FA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${To(r).slice(1)}`}async function UA(t){const e=await OA(t),n=jt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:$A(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),a=jt().setTimeout(()=>{s(o)},VA.get());function l(){jt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zA=500,BA=600,WA="_blank",HA="http://localhost";class Ym{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KA(t,e,n,r=zA,i=BA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=He().toLowerCase();n&&(a=W_(u)?WA:n),B_(u)&&(e=e||HA,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(mC(u)&&a!=="_self")return qA(e||"",a),new Ym(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new Ym(h)}function qA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="__/auth/handler",QA="emulator/auth/handler",YA=encodeURIComponent("fac");async function Xm(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Oi,eventId:i};if(e instanceof Z_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$I(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries({}))o[c]=h}if(e instanceof So){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${YA}=${encodeURIComponent(l)}`:"";return`${XA(t)}?${To(a).slice(1)}${u}`}function XA({config:t}){return t.emulator?uf(t,QA):`https://${t.authDomain}/${GA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="webStorageSupport";class JA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=s0,this._completeRedirectFn=TA,this._overrideRedirectResult=_A}async _openPopup(e,n,r,i){var s;ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Xm(e,n,r,kh(),i);return KA(e,o,pf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xm(e,n,r,kh(),i);return tA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UA(e),r=new SA(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gc,{type:gc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gc];o!==void 0&&n(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Q_()||hf()||Zl()}}const ZA=JA;var Jm="@firebase/auth",Zm="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nP(t){wi(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y_(t)},u=new TC(r,i,s,l);return xC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wi(new Ir("auth-internal",e=>{const n=Li(e.getProvider("auth").getImmediate());return(r=>new eP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(Jm,Zm,tP(t)),zn(Jm,Zm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=5*60,iP=k_("authIdTokenMaxAge")||rP;let eg=null;const sP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iP)return;const i=n==null?void 0:n.token;eg!==i&&(eg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oP(t=O_()){const e=of(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kC(t,{popupRedirectResolver:ZA,persistence:[cA,JC,s0]}),r=k_("authTokenSyncURL");if(r){const s=sP(r);KC(n,s,()=>s(n.currentUser)),HC(n,o=>s(o))}const i=P_("auth");return i&&NC(n,`http://${i}`),n}nP("Browser");var aP="firebase",lP="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn(aP,lP,"app");var uP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,gf=gf||{},F=uP||self;function nu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ru(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function cP(t){return Object.prototype.hasOwnProperty.call(t,yc)&&t[yc]||(t[yc]=++hP)}var yc="closure_uid_"+(1e9*Math.random()>>>0),hP=0;function dP(t,e,n){return t.call.apply(t.bind,arguments)}function fP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=dP:je=fP,je.apply(null,arguments)}function sa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Zn(){this.s=this.s,this.o=this.o}var pP=0;Zn.prototype.s=!1;Zn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),pP!=0)&&cP(this)};Zn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const d0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function tg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(nu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var mP=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",()=>{},e),F.removeEventListener("test",()=>{},e)}catch{}return t}();function Zs(t){return/^[\s\xa0]*$/.test(t)}function iu(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function Lt(t){return iu().indexOf(t)!=-1}function vf(t){return vf[" "](t),t}vf[" "]=function(){};function gP(t,e){var n=uR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var yP=Lt("Opera"),Ti=Lt("Trident")||Lt("MSIE"),f0=Lt("Edge"),Nh=f0||Ti,p0=Lt("Gecko")&&!(iu().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),vP=iu().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function m0(){var t=F.document;return t?t.documentMode:void 0}var Dh;e:{var vc="",_c=function(){var t=iu();if(p0)return/rv:([^\);]+)(\)|;)/.exec(t);if(f0)return/Edge\/([\d\.]+)/.exec(t);if(Ti)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(vP)return/WebKit\/(\S+)/.exec(t);if(yP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_c&&(vc=_c?_c[1]:""),Ti){var wc=m0();if(wc!=null&&wc>parseFloat(vc)){Dh=String(wc);break e}}Dh=vc}var Oh;if(F.document&&Ti){var ng=m0();Oh=ng||parseInt(Dh,10)||void 0}else Oh=void 0;var _P=Oh;function eo(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(p0){e:{try{vf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:wP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&eo.$.h.call(this)}}Pe(eo,ze);var wP={2:"touch",3:"pen",4:"mouse"};eo.prototype.h=function(){eo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var su="closure_listenable_"+(1e6*Math.random()|0),EP=0;function TP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++EP,this.fa=this.ia=!1}function ou(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function _f(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function IP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function g0(t){const e={};for(const n in t)e[n]=t[n];return e}const rg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<rg.length;s++)n=rg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function au(t){this.src=t,this.g={},this.h=0}au.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Lh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new TP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Vh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=d0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ou(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Lh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var wf="closure_lm_"+(1e6*Math.random()|0),Ec={};function v0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)v0(t,e[s],n,r,i);return null}return n=E0(n),t&&t[su]?t.O(e,n,ru(r)?!!r.capture:!!r,i):SP(t,e,n,!1,r,i)}function SP(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ru(i)?!!i.capture:!!i,a=Tf(t);if(a||(t[wf]=a=new au(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=CP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)mP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(w0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CP(){function t(n){return e.call(t.src,t.listener,n)}const e=AP;return t}function _0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)_0(t,e[s],n,r,i);else r=ru(r)?!!r.capture:!!r,n=E0(n),t&&t[su]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Lh(s,n,r,i),-1<n&&(ou(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Tf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Lh(e,n,r,i)),(n=-1<t?e[t]:null)&&Ef(n))}function Ef(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[su])Vh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(w0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tf(e))?(Vh(n,t),n.h==0&&(n.src=null,e[wf]=null)):ou(t)}}}function w0(t){return t in Ec?Ec[t]:Ec[t]="on"+t}function AP(t,e){if(t.fa)t=!0;else{e=new eo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ef(t),t=n.call(r,e)}return t}function Tf(t){return t=t[wf],t instanceof au?t:null}var Tc="__closure_events_fn_"+(1e9*Math.random()>>>0);function E0(t){return typeof t=="function"?t:(t[Tc]||(t[Tc]=function(e){return t.handleEvent(e)}),t[Tc])}function Ae(){Zn.call(this),this.i=new au(this),this.S=this,this.J=null}Pe(Ae,Zn);Ae.prototype[su]=!0;Ae.prototype.removeEventListener=function(t,e,n,r){_0(this,t,e,n,r)};function De(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),y0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=oa(o,r,!0,e)&&i}if(o=e.g=t,i=oa(o,r,!0,e)&&i,i=oa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=oa(o,r,!1,e)&&i}Ae.prototype.N=function(){if(Ae.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ou(n[r]);delete t.g[e],t.h--}}this.J=null};Ae.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ae.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function oa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Vh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var If=F.JSON.stringify;class PP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function RP(){var t=Sf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kP{constructor(){this.h=this.g=null}add(e,n){const r=T0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var T0=new PP(()=>new xP,t=>t.reset());class xP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function DP(t){F.setTimeout(()=>{throw t},0)}let to,no=!1,Sf=new kP,I0=()=>{const t=F.Promise.resolve(void 0);to=()=>{t.then(OP)}};var OP=()=>{for(var t;t=RP();){try{t.h.call(t.g)}catch(n){DP(n)}var e=T0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}no=!1};function lu(t,e){Ae.call(this),this.h=t||1,this.g=e||F,this.j=je(this.qb,this),this.l=Date.now()}Pe(lu,Ae);P=lu.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),De(this,"tick"),this.ga&&(Cf(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){lu.$.N.call(this),Cf(this),delete this.g};function Af(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function S0(t){t.g=Af(()=>{t.g=null,t.i&&(t.i=!1,S0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class VP extends Zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:S0(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ro(t){Zn.call(this),this.h=t,this.g={}}Pe(ro,Zn);var ig=[];function C0(t,e,n,r){Array.isArray(n)||(n&&(ig[0]=n.toString()),n=ig);for(var i=0;i<n.length;i++){var s=v0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function A0(t){_f(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ef(e)},t),t.g={}}ro.prototype.N=function(){ro.$.N.call(this),A0(this)};ro.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function uu(){this.g=!0}uu.prototype.Ea=function(){this.g=!1};function LP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function MP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ei(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+FP(t,n)+(r?" "+r:"")})}function bP(t,e){t.info(function(){return"TIMEOUT: "+e})}uu.prototype.info=function(){};function FP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return If(n)}catch{return e}}var Dr={},sg=null;function cu(){return sg=sg||new Ae}Dr.Ta="serverreachability";function P0(t){ze.call(this,Dr.Ta,t)}Pe(P0,ze);function io(t){const e=cu();De(e,new P0(e))}Dr.STAT_EVENT="statevent";function R0(t,e){ze.call(this,Dr.STAT_EVENT,t),this.stat=e}Pe(R0,ze);function Ge(t){const e=cu();De(e,new R0(e,t))}Dr.Ua="timingevent";function k0(t,e){ze.call(this,Dr.Ua,t),this.size=e}Pe(k0,ze);function Ao(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var hu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},x0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Pf(){}Pf.prototype.h=null;function og(t){return t.h||(t.h=t.i())}function N0(){}var Po={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Rf(){ze.call(this,"d")}Pe(Rf,ze);function kf(){ze.call(this,"c")}Pe(kf,ze);var Mh;function du(){}Pe(du,Pf);du.prototype.g=function(){return new XMLHttpRequest};du.prototype.i=function(){return{}};Mh=new du;function Ro(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ro(this),this.P=$P,t=Nh?125:void 0,this.V=new lu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new D0}function D0(){this.i=null,this.g="",this.h=!1}var $P=45e3,bh={},ml={};P=Ro.prototype;P.setTimeout=function(t){this.P=t};function Fh(t,e,n){t.L=1,t.v=pu(un(e)),t.s=n,t.S=!0,O0(t,null)}function O0(t,e){t.G=Date.now(),ko(t),t.A=un(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),j0(n.i,"t",r),t.C=0,n=t.l.J,t.h=new D0,t.g=lw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new VP(je(t.Pa,t,t.g),t.O)),C0(t.U,t.g,"readystatechange",t.nb),e=t.I?g0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),io(),LP(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&Mt(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const c=Mt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Nh||this.g&&(this.h.h||this.g.ja()||cg(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?io(3):io(2)),fu(this);var n=this.g.da();this.ca=n;t:if(V0(this)){var r=cg(this.g);t="";var i=r.length,s=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),As(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,MP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zs(a)){var u=a;break t}}u=null}if(n=u)ei(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$h(this,n);else{this.i=!1,this.o=3,Ge(12),cr(this),As(this);break e}}this.S?(L0(this,c,o),Nh&&this.i&&c==3&&(C0(this.U,this.V,"tick",this.mb),this.V.start())):(ei(this.j,this.m,o,null),$h(this,o)),c==4&&cr(this),this.i&&!this.J&&(c==4?iw(this.l,this):(this.i=!1,ko(this)))}else oR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),cr(this),As(this)}}}catch{}finally{}};function V0(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function L0(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=UP(t,n),i==ml){e==4&&(t.o=4,Ge(14),r=!1),ei(t.j,t.m,null,"[Incomplete Response]");break}else if(i==bh){t.o=4,Ge(15),ei(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ei(t.j,t.m,i,null),$h(t,i);V0(t)&&i!=ml&&i!=bh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ge(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Lf(e),e.M=!0,Ge(11))):(ei(t.j,t.m,n,"[Invalid Chunked Response]"),cr(t),As(t))}P.mb=function(){if(this.g){var t=Mt(this.g),e=this.g.ja();this.C<e.length&&(fu(this),L0(this,t,e),this.i&&t!=4&&ko(this))}};function UP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ml:(n=Number(e.substring(n,r)),isNaN(n)?bh:(r+=1,r+n>e.length?ml:(e=e.slice(r,r+n),t.C=r+n,e)))}P.cancel=function(){this.J=!0,cr(this)};function ko(t){t.Y=Date.now()+t.P,M0(t,t.P)}function M0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ao(je(t.lb,t),e)}function fu(t){t.B&&(F.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(bP(this.j,this.A),this.L!=2&&(io(),Ge(17)),cr(this),this.o=2,As(this)):M0(this,this.Y-t)};function As(t){t.l.H==0||t.J||iw(t.l,t)}function cr(t){fu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Cf(t.V),A0(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function $h(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Uh(n.i,t))){if(!t.K&&Uh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)vl(n),vu(n);else break e;Vf(n),Ge(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ao(je(n.ib,n),6e3));if(1>=W0(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else hr(n,11)}else if((t.K||n.g==t)&&vl(n),!Zs(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(xf(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,te(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=aw(r,r.J?r.pa:null,r.Y),o.K){H0(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(fu(a),ko(a)),r.g=o}else nw(r);0<n.j.length&&_u(n)}else u[0]!="stop"&&u[0]!="close"||hr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?hr(n,7):Of(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}io(4)}catch{}}function jP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(nu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function zP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(nu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function b0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(nu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=zP(t),r=jP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var F0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function gr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof gr){this.h=t.h,gl(this,t.j),this.s=t.s,this.g=t.g,yl(this,t.m),this.l=t.l;var e=t.i,n=new so;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ag(this,n),this.o=t.o}else t&&(e=String(t).match(F0))?(this.h=!1,gl(this,e[1]||"",!0),this.s=cs(e[2]||""),this.g=cs(e[3]||"",!0),yl(this,e[4]),this.l=cs(e[5]||"",!0),ag(this,e[6]||"",!0),this.o=cs(e[7]||"")):(this.h=!1,this.i=new so(null,this.h))}gr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hs(e,lg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(hs(e,lg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(hs(n,n.charAt(0)=="/"?KP:HP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hs(n,GP)),t.join("")};function un(t){return new gr(t)}function gl(t,e,n){t.j=n?cs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ag(t,e,n){e instanceof so?(t.i=e,QP(t.i,t.h)):(n||(e=hs(e,qP)),t.i=new so(e,t.h))}function te(t,e,n){t.i.set(e,n)}function pu(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function cs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,WP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function WP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var lg=/[#\/\?@]/g,HP=/[#\?:]/g,KP=/[#\?]/g,qP=/[#\?@]/g,GP=/#/g;function so(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function er(t){t.g||(t.g=new Map,t.h=0,t.i&&BP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=so.prototype;P.add=function(t,e){er(this),this.i=null,t=bi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $0(t,e){er(t),e=bi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function U0(t,e){return er(t),e=bi(t,e),t.g.has(e)}P.forEach=function(t,e){er(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.ta=function(){er(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){er(this);let e=[];if(typeof t=="string")U0(this,t)&&(e=e.concat(this.g.get(bi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return er(this),this.i=null,t=bi(this,t),U0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function j0(t,e,n){$0(t,e),0<n.length&&(t.i=null,t.g.set(bi(t,e),yf(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function bi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function QP(t,e){e&&!t.j&&(er(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&($0(this,r),j0(this,i,n))},t)),t.j=e}var YP=class{constructor(t,e){this.g=t,this.map=e}};function z0(t){this.l=t||XP,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var XP=10;function B0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function W0(t){return t.h?1:t.g?t.g.size:0}function Uh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xf(t,e){t.g?t.g.add(e):t.h=e}function H0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}z0.prototype.cancel=function(){if(this.i=K0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function K0(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return yf(t.i)}var JP=class{stringify(t){return F.JSON.stringify(t,void 0)}parse(t){return F.JSON.parse(t,void 0)}};function ZP(){this.g=new JP}function eR(t,e,n){const r=n||"";try{b0(t,function(i,s){let o=i;ru(i)&&(o=If(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function tR(t,e){const n=new uu;if(F.Image){const r=new Image;r.onload=sa(aa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=sa(aa,n,r,"TestLoadImage: error",!1,e),r.onabort=sa(aa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=sa(aa,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function aa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function mu(t){this.l=t.fc||null,this.j=t.ob||!1}Pe(mu,Pf);mu.prototype.g=function(){return new gu(this.l,this.j)};mu.prototype.i=function(t){return function(){return t}}({});function gu(t,e){Ae.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Nf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(gu,Ae);var Nf=0;P=gu.prototype;P.open=function(t,e){if(this.readyState!=Nf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,oo(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xo(this)),this.readyState=Nf};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,oo(this)),this.g&&(this.readyState=3,oo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;q0(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function q0(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xo(this):oo(this),this.readyState==3&&q0(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,xo(this))};P.Ya=function(t){this.g&&(this.response=t,xo(this))};P.ka=function(){this.g&&xo(this)};function xo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,oo(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function oo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nR=F.JSON.parse;function he(t){Ae.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=G0,this.L=this.M=!1}Pe(he,Ae);var G0="",rR=/^https?$/i,iR=["POST","PUT"];P=he.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Mh.g(),this.C=this.u?og(this.u):og(Mh),this.g.onreadystatechange=je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){ug(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=d0(iR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{X0(this),0<this.B&&((this.L=sR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.ua,this)):this.A=Af(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ug(this,s)}};function sR(t){return Ti&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof gf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function ug(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Q0(t),yu(t)}function Q0(t){t.F||(t.F=!0,De(t,"complete"),De(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),yu(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yu(this,!0)),he.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?Y0(this):this.kb())};P.kb=function(){Y0(this)};function Y0(t){if(t.h&&typeof gf<"u"&&(!t.C[1]||Mt(t)!=4||t.da()!=2)){if(t.v&&Mt(t)==4)Af(t.La,0,t);else if(De(t,"readystatechange"),Mt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(F0)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!rR.test(i?i.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var s=2<Mt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Q0(t)}}finally{yu(t)}}}}function yu(t,e){if(t.g){X0(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function X0(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function Mt(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nR(e)}};function cg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case G0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function oR(t){const e={};t=(t.g&&2<=Mt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Zs(t[r]))continue;var n=NP(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}IP(e,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function J0(t){let e="";return _f(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Df(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=J0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):te(t,e,n))}function ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Z0(t){this.Ga=0,this.j=[],this.l=new uu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ns("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ns("baseRetryDelayMs",5e3,t),this.hb=ns("retryDelaySeedMs",1e4,t),this.eb=ns("forwardChannelMaxRetries",2,t),this.xa=ns("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new z0(t&&t.concurrentRequestLimit),this.Ja=new ZP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=Z0.prototype;P.ra=8;P.H=1;function Of(t){if(ew(t),t.H==3){var e=t.W++,n=un(t.I);if(te(n,"SID",t.K),te(n,"RID",e),te(n,"TYPE","terminate"),No(t,n),e=new Ro(t,t.l,e),e.L=2,e.v=pu(un(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=lw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ko(e)}ow(t)}function vu(t){t.g&&(Lf(t),t.g.cancel(),t.g=null)}function ew(t){vu(t),t.u&&(F.clearTimeout(t.u),t.u=null),vl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function _u(t){if(!B0(t.i)&&!t.m){t.m=!0;var e=t.Na;to||I0(),no||(to(),no=!0),Sf.add(e,t),t.C=0}}function aR(t,e){return W0(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ao(je(t.Na,t,e),sw(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ro(this,this.l,t);let s=this.s;if(this.U&&(s?(s=g0(s),y0(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tw(this,i,e),n=un(this.I),te(n,"RID",t),te(n,"CVER",22),this.F&&te(n,"X-HTTP-Session-Id",this.F),No(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(J0(s)))+"&"+e:this.o&&Df(n,this.o,s)),xf(this.i,i),this.bb&&te(n,"TYPE","init"),this.P?(te(n,"$req",e),te(n,"SID","null"),i.aa=!0,Fh(i,n,null)):Fh(i,n,e),this.H=2}}else this.H==3&&(t?hg(this,t):this.j.length==0||B0(this.i)||hg(this))};function hg(t,e){var n;e?n=e.m:n=t.W++;const r=un(t.I);te(r,"SID",t.K),te(r,"RID",n),te(r,"AID",t.V),No(t,r),t.o&&t.s&&Df(r,t.o,t.s),n=new Ro(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=tw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),xf(t.i,n),Fh(n,r,e)}function No(t,e){t.na&&_f(t.na,function(n,r){te(e,r,n)}),t.h&&b0({},function(n,r){te(e,r,n)})}function tw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?je(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{eR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function nw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;to||I0(),no||(to(),no=!0),Sf.add(e,t),t.A=0}}function Vf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ao(je(t.Ma,t),sw(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,rw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ao(je(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ge(10),vu(this),rw(this))};function Lf(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function rw(t){t.g=new Ro(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=un(t.wa);te(e,"RID","rpc"),te(e,"SID",t.K),te(e,"AID",t.V),te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&te(e,"TO",t.qa),te(e,"TYPE","xmlhttp"),No(t,e),t.o&&t.s&&Df(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=pu(un(e)),n.s=null,n.S=!0,O0(n,t)}P.ib=function(){this.v!=null&&(this.v=null,vu(this),Vf(this),Ge(19))};function vl(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function iw(t,e){var n=null;if(t.g==e){vl(t),Lf(t),t.g=null;var r=2}else if(Uh(t.i,e))n=e.F,H0(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=cu(),De(r,new k0(r,n)),_u(t)}else nw(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&aR(t,e)||r==2&&Vf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:hr(t,5);break;case 4:hr(t,10);break;case 3:hr(t,6);break;default:hr(t,2)}}}function sw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function hr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=je(t.pb,t);n||(n=new gr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||gl(n,"https"),pu(n)),tR(n.toString(),r)}else Ge(2);t.H=0,t.h&&t.h.za(e),ow(t),ew(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ge(2)):(this.l.info("Failed to ping google.com"),Ge(1))};function ow(t){if(t.H=0,t.ma=[],t.h){const e=K0(t.i);(e.length!=0||t.j.length!=0)&&(tg(t.ma,e),tg(t.ma,t.j),t.i.i.length=0,yf(t.j),t.j.length=0),t.h.ya()}}function aw(t,e,n){var r=n instanceof gr?un(n):new gr(n);if(r.g!="")e&&(r.g=e+"."+r.g),yl(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new gr(null);r&&gl(s,r),e&&(s.g=e),i&&yl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&te(r,n,e),te(r,"VER",t.ra),No(t,r),r}function lw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new he(new mu({ob:!0})):new he(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function uw(){}P=uw.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function _l(){if(Ti&&!(10<=Number(_P)))throw Error("Environmental error: no available transport.")}_l.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Ae.call(this),this.g=new Z0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Zs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fi(this)}Pe(ut,Ae);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ge(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=aw(t,null,t.Y),_u(t)};ut.prototype.close=function(){Of(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=If(t),t=n);e.j.push(new YP(e.fb++,t)),e.H==3&&_u(e)};ut.prototype.N=function(){this.g.h=null,delete this.j,Of(this.g),delete this.g,ut.$.N.call(this)};function cw(t){Rf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(cw,Rf);function hw(){kf.call(this),this.status=1}Pe(hw,kf);function Fi(t){this.g=t}Pe(Fi,uw);Fi.prototype.Ba=function(){De(this.g,"a")};Fi.prototype.Aa=function(t){De(this.g,new cw(t))};Fi.prototype.za=function(t){De(this.g,new hw)};Fi.prototype.ya=function(){De(this.g,"b")};function lR(){this.blockSize=-1}function Nt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Pe(Nt,lR);Nt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ic(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Nt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ic(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ic(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ic(this,r),i=0;break}}this.h=i,this.i+=e};Nt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function X(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var uR={};function Mf(t){return-128<=t&&128>t?gP(t,function(e){return new X([e|0],0>e?-1:0)}):new X([t|0],0>t?-1:0)}function bt(t){if(isNaN(t)||!isFinite(t))return ui;if(0>t)return xe(bt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=jh;return new X(e,0)}function dw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return xe(dw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=bt(Math.pow(e,8)),r=ui,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=bt(Math.pow(e,s)),r=r.R(s).add(bt(o))):(r=r.R(n),r=r.add(bt(o)))}return r}var jh=4294967296,ui=Mf(0),zh=Mf(1),dg=Mf(16777216);P=X.prototype;P.ea=function(){if(pt(this))return-xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:jh+r)*e,e*=jh}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(en(this))return"0";if(pt(this))return"-"+xe(this).toString(t);for(var e=bt(Math.pow(t,6)),n=this,r="";;){var i=El(n,e).g;n=wl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,en(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function en(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function pt(t){return t.h==-1}P.X=function(t){return t=wl(this,t),pt(t)?-1:en(t)?0:1};function xe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new X(n,~t.h).add(zh)}P.abs=function(){return pt(this)?xe(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new X(n,n[n.length-1]&-2147483648?-1:0)};function wl(t,e){return t.add(xe(e))}P.R=function(t){if(en(this)||en(t))return ui;if(pt(this))return pt(t)?xe(this).R(xe(t)):xe(xe(this).R(t));if(pt(t))return xe(this.R(xe(t)));if(0>this.X(dg)&&0>t.X(dg))return bt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,la(n,2*r+2*i),n[2*r+2*i+1]+=s*l,la(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,la(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,la(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new X(n,0)};function la(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function rs(t,e){this.g=t,this.h=e}function El(t,e){if(en(e))throw Error("division by zero");if(en(t))return new rs(ui,ui);if(pt(t))return e=El(xe(t),e),new rs(xe(e.g),xe(e.h));if(pt(e))return e=El(t,xe(e)),new rs(xe(e.g),e.h);if(30<t.g.length){if(pt(t)||pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=zh,r=e;0>=r.X(t);)n=fg(n),r=fg(r);var i=Fr(n,1),s=Fr(r,1);for(r=Fr(r,2),n=Fr(n,2);!en(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Fr(r,1),n=Fr(n,1)}return e=wl(t,i.R(e)),new rs(i,e)}for(i=ui;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=bt(n),o=s.R(e);pt(o)||0<o.X(t);)n-=r,s=bt(n),o=s.R(e);en(s)&&(s=zh),i=i.add(s),t=wl(t,o)}return new rs(i,t)}P.gb=function(t){return El(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new X(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new X(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new X(n,this.h^t.h)};function fg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new X(n,t.h)}function Fr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new X(i,t.h)}_l.prototype.createWebChannel=_l.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;hu.NO_ERROR=0;hu.TIMEOUT=8;hu.HTTP_ERROR=6;x0.COMPLETE="complete";N0.EventType=Po;Po.OPEN="a";Po.CLOSE="b";Po.ERROR="c";Po.MESSAGE="d";Ae.prototype.listen=Ae.prototype.O;he.prototype.listenOnce=he.prototype.P;he.prototype.getLastError=he.prototype.Sa;he.prototype.getLastErrorCode=he.prototype.Ia;he.prototype.getStatus=he.prototype.da;he.prototype.getResponseJson=he.prototype.Wa;he.prototype.getResponseText=he.prototype.ja;he.prototype.send=he.prototype.ha;he.prototype.setWithCredentials=he.prototype.Oa;Nt.prototype.digest=Nt.prototype.l;Nt.prototype.reset=Nt.prototype.reset;Nt.prototype.update=Nt.prototype.j;X.prototype.add=X.prototype.add;X.prototype.multiply=X.prototype.R;X.prototype.modulo=X.prototype.gb;X.prototype.compare=X.prototype.X;X.prototype.toNumber=X.prototype.ea;X.prototype.toString=X.prototype.toString;X.prototype.getBits=X.prototype.D;X.fromNumber=bt;X.fromString=dw;var cR=function(){return new _l},hR=function(){return cu()},Sc=hu,dR=x0,fR=Dr,pg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ua=N0,pR=he,mR=Nt,ci=X;const mg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new rf("@firebase/firestore");function gg(){return Ar.logLevel}function D(t,...e){if(Ar.logLevel<=G.DEBUG){const n=e.map(bf);Ar.debug(`Firestore (${$i}): ${t}`,...n)}}function cn(t,...e){if(Ar.logLevel<=G.ERROR){const n=e.map(bf);Ar.error(`Firestore (${$i}): ${t}`,...n)}}function Ii(t,...e){if(Ar.logLevel<=G.WARN){const n=e.map(bf);Ar.warn(`Firestore (${$i}): ${t}`,...n)}}function bf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${$i}) INTERNAL ASSERTION FAILED: `+t;throw cn(e),new Error(e)}function re(t,e){t||b()}function U(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(be.UNAUTHENTICATED))}shutdown(){}}class yR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vR{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new fw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new be(e)}}class _R{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _R(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ER{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.R=n.token,new ER(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=IR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function Si(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ee(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new Ee(0,0))}static max(){return new $(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ao.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ao?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends ao{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const SR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends ao{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return SR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(se.fromString(e))}static fromName(e){return new L(se.fromString(e).popFirst(5))}static empty(){return new L(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new se(e.slice()))}}function CR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new qn(i,L.empty(),e)}function AR(t){return new qn(t.readTime,t.key,-1)}class qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qn($.min(),L.empty(),-1)}static max(){return new qn($.max(),L.empty(),-1)}}function PR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==RR)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Oo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ff.ae=-1;function wu(t){return t==null}function Tl(t){return t===0&&1/t==-1/0}function xR(t){return typeof t=="number"&&Number.isInteger(t)&&!Tl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ca(this.root,e,this.comparator,!0)}}class ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ke.RED,this.left=i??ke.EMPTY,this.right=s??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vg(this.data.getIterator())}getIteratorFrom(e){return new vg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class vg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new At([])}unionWith(e){let n=new Be(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Si(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new gw("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const NR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(t){if(re(!!t),typeof t=="string"){let e=0;const n=NR.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Uf(t){const e=t.mapValue.fields.__previous_value__;return $f(e)?Uf(e):e}function lo(t){const e=Gn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class uo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new uo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof uo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$f(t)?4:OR(t)?9007199254740991:10:b()}function Wt(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lo(t).isEqual(lo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Gn(i.timestampValue),a=Gn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Pr(i.bytesValue).isEqual(Pr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ge(i.geoPointValue.latitude)===ge(s.geoPointValue.latitude)&&ge(i.geoPointValue.longitude)===ge(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ge(i.integerValue)===ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ge(i.doubleValue),a=ge(s.doubleValue);return o===a?Tl(o)===Tl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Si(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(yg(o)!==yg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Wt(o[l],a[l])))return!1;return!0}(t,e);default:return b()}}function co(t,e){return(t.values||[]).find(n=>Wt(n,e))!==void 0}function Ci(t,e){if(t===e)return 0;const n=Rr(t),r=Rr(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ge(s.integerValue||s.doubleValue),l=ge(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return _g(t.timestampValue,e.timestampValue);case 4:return _g(lo(t),lo(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Pr(s),l=Pr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Q(a[u],l[u]);if(c!==0)return c}return Q(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Q(ge(s.latitude),ge(o.latitude));return a!==0?a:Q(ge(s.longitude),ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ci(a[u],l[u]);if(c)return c}return Q(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ha.mapValue&&o===ha.mapValue)return 0;if(s===ha.mapValue)return 1;if(o===ha.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Q(l[h],c[h]);if(d!==0)return d;const m=Ci(a[l[h]],u[c[h]]);if(m!==0)return m}return Q(l.length,c.length)}(t.mapValue,e.mapValue);default:throw b()}}function _g(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=Gn(t),r=Gn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function Ai(t){return Bh(t)}function Bh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Gn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return L.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Bh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Bh(n.fields[o])}`;return i+"}"}(t.mapValue):b()}function Wh(t){return!!t&&"integerValue"in t}function jf(t){return!!t&&"arrayValue"in t}function wg(t){return!!t&&"nullValue"in t}function Eg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xa(t){return!!t&&"mapValue"in t}function Ps(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ps(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ps(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ps(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ps(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(Ps(this.value))}}function yw(t){const e=[];return Ui(t.fields,(n,r)=>{const i=new Ue([n]);if(xa(r)){const s=yw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $e(e,0,$.min(),$.min(),$.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new $e(e,1,n,$.min(),r,i,0)}static newNoDocument(e,n){return new $e(e,2,n,$.min(),$.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,$.min(),$.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n){this.position=e,this.inclusive=n}}function Tg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Ci(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ig(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n="asc"){this.field=e,this.dir=n}}function VR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{}class _e extends vw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MR(e,n,r):n==="array-contains"?new $R(e,r):n==="in"?new UR(e,r):n==="not-in"?new jR(e,r):n==="array-contains-any"?new zR(e,r):new _e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bR(e,r):new FR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ci(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(Ci(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ht extends vw{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Ht(e,n)}matches(e){return _w(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function _w(t){return t.op==="and"}function ww(t){return LR(t)&&_w(t)}function LR(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function Hh(t){if(t instanceof _e)return t.field.canonicalString()+t.op.toString()+Ai(t.value);if(ww(t))return t.filters.map(e=>Hh(e)).join(",");{const e=t.filters.map(n=>Hh(n)).join(",");return`${t.op}(${e})`}}function Ew(t,e){return t instanceof _e?function(r,i){return i instanceof _e&&r.op===i.op&&r.field.isEqual(i.field)&&Wt(r.value,i.value)}(t,e):t instanceof Ht?function(r,i){return i instanceof Ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Ew(o,i.filters[a]),!0):!1}(t,e):void b()}function Tw(t){return t instanceof _e?function(n){return`${n.field.canonicalString()} ${n.op} ${Ai(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(Tw).join(" ,")+"}"}(t):"Filter"}class MR extends _e{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class bR extends _e{constructor(e,n){super(e,"in",n),this.keys=Iw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FR extends _e{constructor(e,n){super(e,"not-in",n),this.keys=Iw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Iw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class $R extends _e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jf(n)&&co(n.arrayValue,this.value)}}class UR extends _e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&co(this.value.arrayValue,n)}}class jR extends _e{constructor(e,n){super(e,"not-in",n)}matches(e){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!co(this.value.arrayValue,n)}}class zR extends _e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>co(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Sg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BR(t,e,n,r,i,s,o)}function zf(t){const e=U(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ai(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ai(r)).join(",")),e.he=n}return e.he}function Bf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ew(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ig(t.startAt,e.startAt)&&Ig(t.endAt,e.endAt)}function Kh(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function WR(t,e,n,r,i,s,o,a){return new Eu(t,e,n,r,i,s,o,a)}function Wf(t){return new Eu(t)}function Cg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HR(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function KR(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function qR(t){return t.collectionGroup!==null}function ks(t){const e=U(t);if(e.Pe===null){e.Pe=[];const n=KR(e),r=HR(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Rs(n)),e.Pe.push(new Rs(Ue.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Rs(Ue.keyField(),s))}}}return e.Pe}function hn(t){const e=U(t);return e.Ie||(e.Ie=GR(e,ks(t))),e.Ie}function GR(t,e){if(t.limitType==="F")return Sg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Rs(i.field,s)});const n=t.endAt?new Il(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Il(t.startAt.position,t.startAt.inclusive):null;return Sg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qh(t,e,n){return new Eu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tu(t,e){return Bf(hn(t),hn(e))&&t.limitType===e.limitType}function Sw(t){return`${zf(hn(t))}|lt:${t.limitType}`}function Gh(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Tw(i)).join(", ")}]`),wu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ai(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ai(i)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function Iu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ks(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Tg(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ks(r),i)||r.endAt&&!function(o,a,l){const u=Tg(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ks(r),i))}(t,e)}function QR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cw(t){return(e,n)=>{let r=!1;for(const i of ks(t)){const s=YR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function YR(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ci(l,u):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return mw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=new ue(L.comparator);function dn(){return XR}const Aw=new ue(L.comparator);function ds(...t){let e=Aw;for(const n of t)e=e.insert(n.key,n);return e}function Pw(t){let e=Aw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function dr(){return xs()}function Rw(){return xs()}function xs(){return new ji(t=>t.toString(),(t,e)=>t.isEqual(e))}const JR=new ue(L.comparator),ZR=new Be(L.comparator);function W(...t){let e=ZR;for(const n of t)e=e.add(n);return e}const ek=new Be(Q);function tk(){return ek}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tl(e)?"-0":e}}function xw(t){return{integerValue:""+t}}function nk(t,e){return xR(e)?xw(e):kw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this._=void 0}}function rk(t,e,n){return t instanceof Sl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$f(s)&&(s=Uf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ho?Dw(t,e):t instanceof fo?Ow(t,e):function(i,s){const o=Nw(i,s),a=Ag(o)+Ag(i.Ee);return Wh(o)&&Wh(i.Ee)?xw(a):kw(i.serializer,a)}(t,e)}function ik(t,e,n){return t instanceof ho?Dw(t,e):t instanceof fo?Ow(t,e):n}function Nw(t,e){return t instanceof Cl?function(r){return Wh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Sl extends Su{}class ho extends Su{constructor(e){super(),this.elements=e}}function Dw(t,e){const n=Vw(e);for(const r of t.elements)n.some(i=>Wt(i,r))||n.push(r);return{arrayValue:{values:n}}}class fo extends Su{constructor(e){super(),this.elements=e}}function Ow(t,e){let n=Vw(e);for(const r of t.elements)n=n.filter(i=>!Wt(i,r));return{arrayValue:{values:n}}}class Cl extends Su{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Ag(t){return ge(t.integerValue||t.doubleValue)}function Vw(t){return jf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ho&&i instanceof ho||r instanceof fo&&i instanceof fo?Si(r.elements,i.elements,Wt):r instanceof Cl&&i instanceof Cl?Wt(r.Ee,i.Ee):r instanceof Sl&&i instanceof Sl}(t.transform,e.transform)}class ok{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Na(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cu{}function Lw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hf(t.key,zt.none()):new Vo(t.key,t.data,zt.none());{const n=t.data,r=mt.empty();let i=new Be(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Or(t.key,r,new At(i.toArray()),zt.none())}}function ak(t,e,n){t instanceof Vo?function(i,s,o){const a=i.value.clone(),l=Rg(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(i,s,o){if(!Na(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Rg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Mw(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ns(t,e,n,r){return t instanceof Vo?function(s,o,a,l){if(!Na(s.precondition,o))return a;const u=s.value.clone(),c=kg(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(s,o,a,l){if(!Na(s.precondition,o))return a;const u=kg(s.fieldTransforms,l,o),c=o.data;return c.setAll(Mw(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Na(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function lk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Nw(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function Pg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Si(r,i,(s,o)=>sk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vo extends Cu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends Cu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Mw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rg(t,e,n){const r=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ik(o,a,n[i]))}return r}function kg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rk(s,o,e))}return r}class Hf extends Cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uk extends Cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ak(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ns(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ns(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Rw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Lw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&Si(this.mutations,e.mutations,(n,r)=>Pg(n,r))&&Si(this.baseMutations,e.baseMutations,(n,r)=>Pg(n,r))}}class Kf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){re(e.mutations.length===r.length);let i=function(){return JR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,K;function fk(t){switch(t){default:return b();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function bw(t){if(t===void 0)return cn("GRPC error has no .code"),I.UNKNOWN;switch(t){case me.OK:return I.OK;case me.CANCELLED:return I.CANCELLED;case me.UNKNOWN:return I.UNKNOWN;case me.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case me.INTERNAL:return I.INTERNAL;case me.UNAVAILABLE:return I.UNAVAILABLE;case me.UNAUTHENTICATED:return I.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case me.NOT_FOUND:return I.NOT_FOUND;case me.ALREADY_EXISTS:return I.ALREADY_EXISTS;case me.PERMISSION_DENIED:return I.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case me.ABORTED:return I.ABORTED;case me.OUT_OF_RANGE:return I.OUT_OF_RANGE;case me.UNIMPLEMENTED:return I.UNIMPLEMENTED;case me.DATA_LOSS:return I.DATA_LOSS;default:return b()}}(K=me||(me={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=new ci([4294967295,4294967295],0);function xg(t){const e=pk().encode(t),n=new mR;return n.update(e),new Uint8Array(n.digest())}function Ng(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ci([n,r],0),new ci([i,s],0)]}class qf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fs(`Invalid padding: ${n}`);if(r<0)throw new fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=ci.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(ci.fromNumber(r)));return i.compare(mk)===1&&(i=new ci([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=xg(e),[r,i]=Ng(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new qf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=xg(e),[r,i]=Ng(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Au($.min(),i,new ue(Q),dn(),W())}}class Lo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Lo(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class Fw{constructor(e,n){this.targetId=e,this.ye=n}}class $w{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Dg{constructor(){this.we=0,this.Se=Vg(),this.be=Ke.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=W(),n=W(),r=W();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new Lo(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=Vg()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class gk{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=dn(),this.Ue=Og(),this.We=new ue(Q)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Kh(s))if(r===0){const o=new L(s.path);this.je(n,o,$e.newNoDocument(o,$.min()))}else re(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Pr(r).toUint8Array()}catch(l){if(l instanceof gw)return Ii("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new qf(o,i,s)}catch(l){return Ii(l instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Kh(a.target)){const l=new L(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,$e.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=W();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Au(e,n,this.We,this.$e,r);return this.$e=dn(),this.Ue=Og(),this.We=new ue(Q),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Dg,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Be(Q),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Dg),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Og(){return new ue(L.comparator)}function Vg(){return new ue(L.comparator)}const yk={asc:"ASCENDING",desc:"DESCENDING"},vk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_k={and:"AND",or:"OR"};class wk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qh(t,e){return t.useProto3Json||wu(e)?e:{value:e}}function Al(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ek(t,e){return Al(t,e.toTimestamp())}function Bt(t){return re(!!t),$.fromTimestamp(function(n){const r=Gn(n);return new Ee(r.seconds,r.nanos)}(t))}function Gf(t,e){return function(r){return new se(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function jw(t){const e=se.fromString(t);return re(Hw(e)),e}function Yh(t,e){return Gf(t.databaseId,e.path)}function Cc(t,e){const n=jw(e);if(n.get(1)!==t.databaseId.projectId)throw new V(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(zw(n))}function Xh(t,e){return Gf(t.databaseId,e)}function Tk(t){const e=jw(t);return e.length===4?se.emptyPath():zw(e)}function Jh(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zw(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lg(t,e,n){return{name:Yh(t,e),fields:n.value.mapValue.fields}}function Ik(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(re(c===void 0||typeof c=="string"),Ke.fromBase64String(c||"")):(re(c===void 0||c instanceof Uint8Array),Ke.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?I.UNKNOWN:bw(u.code);return new V(c,u.message||"")}(o);n=new $w(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cc(t,r.document.name),s=Bt(r.document.updateTime),o=r.document.createTime?Bt(r.document.createTime):$.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=$e.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Da(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cc(t,r.document),s=r.readTime?Bt(r.readTime):$.min(),o=$e.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Da([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cc(t,r.document),s=r.removedTargetIds||[];n=new Da([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new dk(i,s),a=r.targetId;n=new Fw(a,o)}}return n}function Sk(t,e){let n;if(e instanceof Vo)n={update:Lg(t,e.key,e.value)};else if(e instanceof Hf)n={delete:Yh(t,e.key)};else if(e instanceof Or)n={update:Lg(t,e.key,e.data),updateMask:Ok(e.fieldMask)};else{if(!(e instanceof uk))return b();n={verify:Yh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Sl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Cl)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ek(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:b()}(t,e.precondition)),n}function Ck(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Bt(i.updateTime):Bt(s);return o.isEqual($.min())&&(o=Bt(s)),new ok(o,i.transformResults||[])}(n,e))):[]}function Ak(t,e){return{documents:[Xh(t,e.path)]}}function Pk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Xh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Ww(Ht.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:$r(h.field),direction:xk(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Qh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Rk(t){let e=Tk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=Bw(h);return d instanceof Ht&&ww(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Rs(Ur(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,wu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new Il(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new Il(m,d)}(n.endAt)),WR(e,i,o,s,a,"F",l,u)}function kk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ur(n.unaryFilter.field);return _e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ur(n.unaryFilter.field);return _e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ur(n.unaryFilter.field);return _e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ur(n.unaryFilter.field);return _e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(n){return _e.create(Ur(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(r=>Bw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return b()}}(n.compositeFilter.op))}(t):b()}function xk(t){return yk[t]}function Nk(t){return vk[t]}function Dk(t){return _k[t]}function $r(t){return{fieldPath:t.canonicalString()}}function Ur(t){return Ue.fromServerFormat(t.fieldPath)}function Ww(t){return t instanceof _e?function(n){if(n.op==="=="){if(Eg(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NAN"}};if(wg(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Eg(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NAN"}};if(wg(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(n.field),op:Nk(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const r=n.getFilters().map(i=>Ww(i));return r.length===1?r[0]:{compositeFilter:{op:Dk(n.op),filters:r}}}(t):b()}function Ok(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n,r,i,s=$.min(),o=$.min(),a=Ke.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.ht=e}}function Lk(t){const e=Rk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this._n=new bk}addToCollectionParentIndex(e,n){return this._n.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(qn.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class bk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Pi(0)}static Bn(){return new Pi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(){this.changes=new ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ns(r.mutation,i,At.empty(),Ee.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=dr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ds();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=dn();const o=xs(),a=function(){return xs()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Or)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ns(c.mutation,u,c.mutation.getFieldMask(),Ee.now())):o.set(u.key,At.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new $k(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=xs();let i=new ue((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||At.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Rw();c.forEach(d=>{if(!s.has(d)){const m=Lw(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return L.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(dr());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:Pw(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=ds();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ds();return this.indexManager.getCollectionParents(e,i).next(o=>C.forEach(o,a=>{const l=function(c,h){return new Eu(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,$e.newInvalidDocument(u)))});let o=ds();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ns(u.mutation,l,At.empty(),Ee.now()),Iu(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return C.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Bt(i.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Lk(i.bundledQuery),readTime:Bt(i.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.overlays=new ue(L.comparator),this.hr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dr();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=dr(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=dr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=dr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hk(n,r));let s=this.hr.get(n);s===void 0&&(s=W(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.Pr=new Be(Ie.Ir),this.Tr=new Be(Ie.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ie(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ie(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new L(new se([])),r=new Ie(n,e),i=new Ie(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new L(new se([])),r=new Ie(n,e),i=new Ie(n,e+1);let s=W();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ie(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return L.comparator(e.key,n.key)||Q(e.pr,n.pr)}static Er(e,n){return Q(e.pr,n.pr)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Be(Ie.Ir)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ck(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(Q);return n.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),C.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new L(s),0);let a=new Be(Q);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),C.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return C.forEach(n.mutations,i=>{const s=new Ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ie(n,0),i=this.wr.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.Cr=e,this.docs=function(){return new ue(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let r=dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$e.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=dn();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||PR(AR(c),r)<=0||(i.has(c.key)||Iu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}Fr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Hk(this)}getSize(e){return C.resolve(this.size)}}class Hk extends Fk{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.persistence=e,this.Mr=new ji(n=>zf(n),Bf),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Qf,this.targetCount=0,this.Br=Pi.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),C.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Pi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.qn(n),C.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Ff(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Kk(this),this.indexManager=new Mk,this.remoteDocumentCache=function(i){return new Wk(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Vk(n),this.$r=new jk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Bk(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new Gk(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return C.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class Gk extends kR{constructor(e){super(),this.currentSequenceNumber=e}}class Yf{constructor(e){this.persistence=e,this.zr=new Qf,this.jr=null}static Hr(e){return new Yf(e)}get Jr(){if(this.jr)return this.jr;throw b()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),C.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,r=>{const i=L.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return C.or([()=>C.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Wi(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.zi(e,n))}Wi(e,n){if(Cg(n))return C.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=qh(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.Hi(n,u,o,l.readTime)?this.Wi(e,qh(n,null,"F")):this.Ji(e,u,n,l)}))})))}Gi(e,n,r,i){return Cg(n)||i.isEqual($.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.Hi(n,o,r,i)?this.zi(e,n):(gg()<=G.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gh(n)),this.Ji(e,o,n,CR(i,-1)))})}ji(e,n){let r=new Be(Cw(e));return n.forEach((i,s)=>{Iu(e,s)&&(r=r.add(s))}),r}Hi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(e,n){return gg()<=G.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Gh(n)),this.Ui.getDocumentsMatchingQuery(e,n,qn.min())}Ji(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,r,i){this.persistence=e,this.Yi=n,this.serializer=i,this.Zi=new ue(Q),this.Xi=new ji(s=>zf(s),Bf),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Uk(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function Xk(t,e,n,r){return new Yk(t,e,n,r)}async function Kw(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Jk(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let m=C.resolve();return d.forEach(v=>{m=m.next(()=>c.getEntry(l,v)).next(_=>{const w=u.docVersions.get(v);re(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=W();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function qw(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function Zk(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Ke.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(_,w,p){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,m,c)&&a.push(n.Qr.updateTargetData(s,m))});let l=dn(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(ex(s,o,e.documentUpdates).next(c=>{l=c.ss,u=c.os})),!r.isEqual($.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Zi=i,s))}function ex(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=dn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ss:o,os:i}})}function tx(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nx(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Zh(t,e,n){const r=U(t),i=r.Zi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Oo(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(i.target)}function Mg(t,e,n){const r=U(t);let i=$.min(),s=W();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=U(l),d=h.Xi.get(c);return d!==void 0?C.resolve(h.Zi.get(d)):h.Qr.getTargetData(u,c)}(r,o,hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?s:W())).next(a=>(rx(r,QR(e),a),{documents:a,_s:s})))}function rx(t,e,n){let r=t.es.get(e)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.es.set(e,r)}class bg{constructor(){this.activeTargetIds=tk()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ix{constructor(){this.Ys=new bg,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new bg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{Xs(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da=null;function Ac(){return da===null?da=function(){return 268435456+Math.round(2147483648*Math.random())}():da++,"0x"+da.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class lx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(n,r,i,s,o){const a=Ac(),l=this.po(n,r);D("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(u,s,o),this.wo(n,l,u,i).then(c=>(D("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ii("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}So(n,r,i,s,o,a){return this.fo(n,r,i,s,o)}yo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$i}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}po(n,r){const i=ox[n];return`${this.Ao}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,i){const s=Ac();return new Promise((o,a)=>{const l=new pR;l.setWithCredentials(!0),l.listenOnce(dR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Sc.NO_ERROR:const c=l.getResponseJson();D(Me,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Sc.TIMEOUT:D(Me,`RPC '${e}' ${s} timed out`),a(new V(I.DEADLINE_EXCEEDED,"Request time out"));break;case Sc.HTTP_ERROR:const h=l.getStatus();if(D(Me,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(w){const p=w.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(p)>=0?p:I.UNKNOWN}(m.status);a(new V(v,m.message))}else a(new V(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(I.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{D(Me,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);D(Me,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}bo(e,n,r){const i=Ac(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cR(),a=hR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.yo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");D(Me,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const v=new ax({_o:w=>{m?D(Me,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(D(Me,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),D(Me,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},ao:()=>h.close()}),_=(w,p,f)=>{w.listen(p,g=>{try{f(g)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,ua.EventType.OPEN,()=>{m||D(Me,`RPC '${e}' stream ${i} transport opened.`)}),_(h,ua.EventType.CLOSE,()=>{m||(m=!0,D(Me,`RPC '${e}' stream ${i} transport closed`),v.To())}),_(h,ua.EventType.ERROR,w=>{m||(m=!0,Ii(Me,`RPC '${e}' stream ${i} transport errored:`,w),v.To(new V(I.UNAVAILABLE,"The operation could not be completed")))}),_(h,ua.EventType.MESSAGE,w=>{var p;if(!m){const f=w.data[0];re(!!f);const g=f,E=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(E){D(Me,`RPC '${e}' stream ${i} received error:`,E);const A=E.status;let R=function(J){const z=me[J];if(z!==void 0)return bw(z)}(A),N=E.message;R===void 0&&(R=I.INTERNAL,N="Unknown error status: "+A+" with message "+E.message),m=!0,v.To(new V(R,N)),h.close()}else D(Me,`RPC '${e}' stream ${i} received:`,f),v.Eo(f)}}),_(a,fR.STAT_EVENT,w=>{w.stat===pg.PROXY?D(Me,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===pg.NOPROXY&&D(Me,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Io()},0),v}}function Pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){return new wk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new Gw(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(cn(n.toString()),cn("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===n&&this.n_(r,i)},r=>{e(()=>{const i=new V(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ux extends Qw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=Ik(this.serializer,e),r=function(s){if(!("targetChange"in s))return $.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?Bt(o.readTime):$.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=Jh(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Kh(l)?{documents:Ak(s,l)}:{query:Pk(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Uw(s,o.resumeToken);const u=Qh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo($.min())>0){a.readTime=Al(s,o.snapshotVersion.toTimestamp());const u=Qh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=kk(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=Jh(this.serializer),n.removeTarget=e,this.Yo(n)}}class cx extends Qw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=Ck(e.writeResults,e.commitTime),r=Bt(e.commitTime);return this.listener.l_(r,n)}return re(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=Jh(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Sk(this.serializer,r))};this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new V(I.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(I.UNKNOWN,i.toString())})}So(e,n,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(I.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class dx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(cn(n),this.R_=!1):D("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{Vr(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=U(l);u.S_.add(4),await Mo(u),u.v_.set("Unknown"),u.S_.delete(4),await Ru(u)}(this))})}),this.v_=new dx(r,i)}}async function Ru(t){if(Vr(t))for(const e of t.b_)await e(!0)}async function Mo(t){for(const e of t.b_)await e(!1)}function Yw(t,e){const n=U(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),ep(n)?Zf(n):zi(n).Go()&&Jf(n,e))}function Xw(t,e){const n=U(t),r=zi(n);n.w_.delete(e),r.Go()&&Jw(n,e),n.w_.size===0&&(r.Go()?r.Ho():Vr(n)&&n.v_.set("Unknown"))}function Jf(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zi(t).o_(e)}function Jw(t,e){t.C_.Le(e),zi(t).__(e)}function Zf(t){t.C_=new gk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),zi(t).start(),t.v_.V_()}function ep(t){return Vr(t)&&!zi(t).Wo()&&t.w_.size>0}function Vr(t){return U(t).S_.size===0}function Zw(t){t.C_=void 0}async function px(t){t.w_.forEach((e,n)=>{Jf(t,e)})}async function mx(t,e){Zw(t),ep(t)?(t.v_.g_(e),Zf(t)):t.v_.set("Unknown")}async function gx(t,e,n){if(t.v_.set("Online"),e instanceof $w&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pl(t,r)}else if(e instanceof Da?t.C_.Ge(e):e instanceof Fw?t.C_.Xe(e):t.C_.He(e),!n.isEqual($.min()))try{const r=await qw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.w_.get(u);c&&s.w_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.w_.get(l);if(!c)return;s.w_.set(l,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),Jw(s,l);const h=new xn(c.target,l,u,c.sequenceNumber);Jf(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Pl(t,r)}}async function Pl(t,e,n){if(!Oo(e))throw e;t.S_.add(1),await Mo(t),t.v_.set("Offline"),n||(n=()=>qw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await Ru(t)})}function eE(t,e){return e().catch(n=>Pl(t,n,e))}async function ku(t){const e=U(t),n=Qn(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;yx(e);)try{const i=await tx(e.localStore,r);if(i===null){e.y_.length===0&&n.Ho();break}r=i.batchId,vx(e,i)}catch(i){await Pl(e,i)}tE(e)&&nE(e)}function yx(t){return Vr(t)&&t.y_.length<10}function vx(t,e){t.y_.push(e);const n=Qn(t);n.Go()&&n.u_&&n.c_(e.mutations)}function tE(t){return Vr(t)&&!Qn(t).Wo()&&t.y_.length>0}function nE(t){Qn(t).start()}async function _x(t){Qn(t).P_()}async function wx(t){const e=Qn(t);for(const n of t.y_)e.c_(n.mutations)}async function Ex(t,e,n){const r=t.y_.shift(),i=Kf.from(r,e,n);await eE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ku(t)}async function Tx(t,e){e&&Qn(t).u_&&await async function(r,i){if(function(o){return fk(o)&&o!==I.ABORTED}(i.code)){const s=r.y_.shift();Qn(r).jo(),await eE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ku(r)}}(t,e),tE(t)&&nE(t)}async function $g(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Vr(n);n.S_.add(3),await Mo(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await Ru(n)}async function Ix(t,e){const n=U(t);e?(n.S_.delete(2),await Ru(n)):e||(n.S_.add(2),await Mo(n),n.v_.set("Unknown"))}function zi(t){return t.F_||(t.F_=function(n,r,i){const s=U(n);return s.T_(),new ux(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:px.bind(null,t),lo:mx.bind(null,t),s_:gx.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),ep(t)?Zf(t):t.v_.set("Unknown")):(await t.F_.stop(),Zw(t))})),t.F_}function Qn(t){return t.M_||(t.M_=function(n,r,i){const s=U(n);return s.T_(),new cx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:_x.bind(null,t),lo:Tx.bind(null,t),h_:wx.bind(null,t),l_:Ex.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await ku(t)):(await t.M_.stop(),t.y_.length>0&&(D("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new tp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function np(t,e){if(cn("AsyncQueue",`${e}: ${t}`),Oo(t))return new V(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=ds(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new hi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new hi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.x_=new ue(L.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):b():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ri{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ri(e,n,hi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(){this.N_=void 0,this.listeners=[]}}class Cx{constructor(){this.queries=new ji(e=>Sw(e),Tu),this.onlineState="Unknown",this.B_=new Set}}async function Ax(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Sx),i)try{s.N_=await n.onListen(r)}catch(o){const a=np(o,`Initialization of query '${Gh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.L_(n.onlineState),s.N_&&e.k_(s.N_)&&rp(n)}async function Px(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Rx(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&rp(n)}function kx(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function rp(t){t.B_.forEach(e=>{e.next()})}class xx{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ri(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=Ri.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.key=e}}class iE{constructor(e){this.key=e}}class Nx{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=W(),this.mutatedKeys=W(),this.ia=Cw(e),this.sa=new hi(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new Ug,i=n?n.sa:this.sa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Iu(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let w=!1;d&&m?d.data.isEqual(m.data)?v!==_&&(r.track({type:3,doc:m}),w=!0):this.ua(d,m)||(r.track({type:2,doc:m}),w=!0,(l&&this.ia(m,l)>0||u&&this.ia(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),w=!0):d&&!m&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const s=e.aa.O_();s.sort((u,c)=>function(d,m){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return v(d)-v(m)}(u.type,c.type)||this.ia(u.doc,c.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,l=a!==this.na;return this.na=a,s.length!==0||l?{snapshot:new Ri(this.query,e.sa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new Ug,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=W(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new iE(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new rE(r))}),n}Ia(e){this.ta=e._s,this.ra=W();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return Ri.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class Dx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ox{constructor(e){this.key=e,this.Ea=!1}}class Vx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new ji(a=>Sw(a),Tu),this.Ra=new Map,this.Va=new Set,this.ma=new ue(L.comparator),this.fa=new Map,this.ga=new Qf,this.pa={},this.ya=new Map,this.wa=Pi.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function Lx(t,e){const n=Hx(t);let r,i;const s=n.Aa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await nx(n.localStore,hn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Mx(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Yw(n.remoteStore,o)}return i}async function Mx(t,e,n,r,i){t.ba=(h,d,m)=>async function(_,w,p,f){let g=w.view._a(p);g.Hi&&(g=await Mg(_.localStore,w.query,!1).then(({documents:R})=>w.view._a(R,g)));const E=f&&f.targetChanges.get(w.targetId),A=w.view.applyChanges(g,_.isPrimaryClient,E);return zg(_,w.targetId,A.ha),A.snapshot}(t,h,d,m);const s=await Mg(t.localStore,e,!0),o=new Nx(e,s._s),a=o._a(s.documents),l=Lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);zg(t,n,u.ha);const c=new Dx(e,n,o);return t.Aa.set(e,c),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),u.snapshot}async function bx(t,e){const n=U(t),r=n.Aa.get(e),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter(s=>!Tu(s,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Xw(n.remoteStore,r.targetId),ed(n,r.targetId)}).catch(Do)):(ed(n,r.targetId),await Zh(n.localStore,r.targetId,!0))}async function Fx(t,e,n){const r=Kx(t);try{const i=await function(o,a){const l=U(o),u=Ee.now(),c=a.reduce((m,v)=>m.add(v.key),W());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=dn(),_=W();return l.ts.getEntries(m,c).next(w=>{v=w,v.forEach((p,f)=>{f.isValidDocument()||(_=_.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,v)).next(w=>{h=w;const p=[];for(const f of a){const g=lk(f,h.get(f.key).overlayedDocument);g!=null&&p.push(new Or(f.key,g,yw(g.value.mapValue),zt.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,p,a)}).next(w=>{d=w;const p=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(m,w.batchId,p)})}).then(()=>({batchId:d.batchId,changes:Pw(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.pa[o.currentUser.toKey()];u||(u=new ue(Q)),u=u.insert(a,l),o.pa[o.currentUser.toKey()]=u}(r,i.batchId,n),await bo(r,i.changes),await ku(r.remoteStore)}catch(i){const s=np(i,"Failed to persist write");n.reject(s)}}async function sE(t,e){const n=U(t);try{const r=await Zk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fa.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?re(o.Ea):i.removedDocuments.size>0&&(re(o.Ea),o.Ea=!1))}),await bo(n,r,e)}catch(r){await Do(r)}}function jg(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=U(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.L_(a)&&(u=!0)}),u&&rp(l)}(r.eventManager,e),i.length&&r.da.s_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $x(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fa.get(e),s=i&&i.key;if(s){let o=new ue(L.comparator);o=o.insert(s,$e.newNoDocument(s,$.min()));const a=W().add(s),l=new Au($.min(),new Map,new ue(Q),o,a);await sE(r,l),r.ma=r.ma.remove(s),r.fa.delete(e),ip(r)}else await Zh(r.localStore,e,!1).then(()=>ed(r,e,n)).catch(Do)}async function Ux(t,e){const n=U(t),r=e.batch.batchId;try{const i=await Jk(n.localStore,e);aE(n,r,null),oE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bo(n,i)}catch(i){await Do(i)}}async function jx(t,e,n){const r=U(t);try{const i=await function(o,a){const l=U(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(re(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);aE(r,e,n),oE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bo(r,i)}catch(i){await Do(i)}}function oE(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function aE(t,e,n){const r=U(t);let i=r.pa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pa[r.currentUser.toKey()]=i}}function ed(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||lE(t,r)})}function lE(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(Xw(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),ip(t))}function zg(t,e,n){for(const r of n)r instanceof rE?(t.ga.addReference(r.key,e),zx(t,r)):r instanceof iE?(D("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||lE(t,r.key)):b()}function zx(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(D("SyncEngine","New document in limbo: "+n),t.Va.add(r),ip(t))}function ip(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new L(se.fromString(e)),r=t.wa.next();t.fa.set(r,new Ox(n)),t.ma=t.ma.insert(n,r),Yw(t.remoteStore,new xn(hn(Wf(n.path)),r,"TargetPurposeLimboResolution",Ff.ae))}}async function bo(t,e,n){const r=U(t),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,l)=>{o.push(r.ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Xf.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.da.s_(i),await async function(l,u){const c=U(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(u,d=>C.forEach(d.qi,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>C.forEach(d.Qi,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Oo(h))throw h;D("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.Zi.get(d),v=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(v);c.Zi=c.Zi.insert(d,_)}}}(r.localStore,s))}async function Bx(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await Kw(n.localStore,e);n.currentUser=e,function(s,o){s.ya.forEach(a=>{a.forEach(l=>{l.reject(new V(I.CANCELLED,o))})}),s.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bo(n,r.rs)}}function Wx(t,e){const n=U(t),r=n.fa.get(e);if(r&&r.Ea)return W().add(r.key);{let i=W();const s=n.Ra.get(e);if(!s)return i;for(const o of s){const a=n.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}function Hx(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$x.bind(null,e),e.da.s_=Rx.bind(null,e.eventManager),e.da.Da=kx.bind(null,e.eventManager),e}function Kx(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ux.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jx.bind(null,e),e}class Bg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Xk(this.persistence,new Qk,e.initialUser,this.serializer)}createPersistence(e){return new qk(Yf.Hr,this.serializer)}createSharedClientState(e){return new ix}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bx.bind(null,this.syncEngine),await Ix(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Cx}()}createDatastore(e){const n=Pu(e.databaseInfo.databaseId),r=function(s){return new lx(s)}(e.databaseInfo);return function(s,o,a,l){return new hx(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new fx(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>jg(this.syncEngine,n,0),function(){return Fg.v()?new Fg:new sx}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new Vx(i,s,o,a,l,u);return c&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=U(n);D("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await Mo(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):cn("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=pw.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=np(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rc(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Kw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Xx(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>$g(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>$g(e.remoteStore,s)),t._onlineComponents=e}function Yx(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Xx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Yx(n))throw n;Ii("Error using user provided cache. Falling back to memory cache: "+n),await Rc(t,new Bg)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Rc(t,new Bg);return t._offlineComponents}async function uE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Wg(t,t._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Wg(t,new qx))),t._onlineComponents}function Jx(t){return uE(t).then(e=>e.syncEngine)}async function Hg(t){const e=await uE(t),n=e.eventManager;return n.onListen=Lx.bind(null,e.syncEngine),n.onUnlisten=bx.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t,e,n){if(!n)throw new V(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Zx(t,e,n,r){if(e===!0&&r===!0)throw new V(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qg(t){if(!L.isDocumentKey(t))throw new V(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gg(t){if(L.isDocumentKey(t))throw new V(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function di(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sp(t);throw new V(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gR;switch(r.type){case"firstParty":return new wR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kg.get(n);r&&(D("ComponentProvider","Removing Datastore"),Kg.delete(n),r.terminate())}(this),Promise.resolve()}}function eN(t,e,n,r={}){var i;const s=(t=di(t,xu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=be.MOCK_USER;else{a=kI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new V(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new be(u)}t._authCredentials=new yR(new fw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nu(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Bn extends Nu{constructor(e,n,r){super(e,n,Wf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new L(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function dE(t,e,...n){if(t=Ye(t),hE("collection","path",e),t instanceof xu){const r=se.fromString(e,...n);return Gg(r),new Bn(t,null,r)}{if(!(t instanceof vt||t instanceof Bn))throw new V(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return Gg(r),new Bn(t.firestore,null,r)}}function fE(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=pw.V()),hE("doc","path",e),t instanceof xu){const r=se.fromString(e,...n);return qg(r),new vt(t,null,new L(r))}{if(!(t instanceof vt||t instanceof Bn))throw new V(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return qg(r),new vt(t.firestore,t instanceof Bn?t.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new Gw(this,"async_queue_retry"),this.tu=()=>{const n=Pc();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=Pc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new yr;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!Oo(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const i=tp.createAndSchedule(this,e,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&b()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function Yg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class po extends xu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new tN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mE(this),this._firestoreClient.terminate()}}function nN(t,e){const n=typeof t=="object"?t:O_(),r=typeof t=="string"?t:"(default)",i=of(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=PI("firestore");s&&eN(i,...s)}return i}function pE(t){return t._firestoreClient||mE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mE(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new DR(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,cE(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Qx(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ki(Ke.fromBase64String(e))}catch(n){throw new V(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ki(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=/^__.*__$/;class iN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vo(e,this.data,n,this.fieldTransforms)}}function yE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class lp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.cu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new lp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.Tu(e),i}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.cu(),i}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return Rl(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(yE(this.lu)&&rN.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class sN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pu(e)}mu(e,n,r,i=!1){return new lp({lu:e,methodName:n,Vu:r,path:Ue.emptyPath(),Iu:!1,Ru:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oN(t){const e=t._freezeSettings(),n=Pu(t._databaseId);return new sN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aN(t,e,n,r,i,s={}){const o=t.mu(s.merge||s.mergeFields?2:0,e,n,i);EE("Data must be an object, but it was:",o,r);const a=_E(r,o);let l,u;if(s.merge)l=new At(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=lN(e,h,n);if(!o.contains(d))throw new V(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);cN(c,d)||c.push(d)}l=new At(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new iN(new mt(a),l,u)}function vE(t,e){if(wE(t=Ye(t)))return EE("Unsupported field value:",e,t),_E(t,e);if(t instanceof gE)return function(r,i){if(!yE(i.lu))throw i.Au(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Au(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=vE(a,i.du(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ee.fromDate(r);return{timestampValue:Al(i.serializer,s)}}if(r instanceof Ee){const s=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Al(i.serializer,s)}}if(r instanceof ap)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ki)return{bytesValue:Uw(i.serializer,r._byteString)};if(r instanceof vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gf(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Au(`Unsupported field value: ${sp(r)}`)}(t,e)}function _E(t,e){const n={};return mw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(t,(r,i)=>{const s=vE(i,e.Pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function wE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof ap||t instanceof ki||t instanceof vt||t instanceof gE)}function EE(t,e,n){if(!wE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=sp(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function lN(t,e,n){if((e=Ye(e))instanceof op)return e._internalPath;if(typeof e=="string")return TE(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const uN=new RegExp("[~\\*/\\[\\]]");function TE(t,e,n){if(e.search(uN)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new op(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new V(I.INVALID_ARGUMENT,a+t+l)}function cN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(SE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hN extends IE{data(){return super.data()}}function SE(t,e){return typeof e=="string"?TE(t,e):e instanceof op?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fN{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ap(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Uf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(lo(e));default:return null}}convertTimestamp(e){const n=Gn(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);re(Hw(r));const i=new uo(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||cn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class CE extends IE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(SE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Oa extends CE{data(e={}){return super.data(e)}}class mN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ps(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Oa(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Oa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ps(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Oa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ps(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:gN(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}class AE extends fN{constructor(e){super(),this.firestore=e}convertBytes(e){return new ki(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function yN(t){return PE(di(t.firestore,po),[new Hf(t._key,zt.none())])}function vN(t,e){const n=di(t.firestore,po),r=fE(t),i=pN(t.converter,e);return PE(n,[aN(oN(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function _N(t,...e){var n,r,i;t=Ye(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Yg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Yg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof vt)u=di(t.firestore,po),c=Wf(t._key.path),l={next:h=>{e[o]&&e[o](wN(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=di(t,Nu);u=di(h.firestore,po),c=h._query;const d=new AE(u);l={next:m=>{e[o]&&e[o](new mN(u,d,h,m))},error:e[o+1],complete:e[o+2]},dN(t._query)}return function(d,m,v,_){const w=new Gx(_),p=new xx(m,w,v);return d.asyncQueue.enqueueAndForget(async()=>Ax(await Hg(d),p)),()=>{w.Ma(),d.asyncQueue.enqueueAndForget(async()=>Px(await Hg(d),p))}}(pE(u),c,a,l)}function PE(t,e){return function(r,i){const s=new yr;return r.asyncQueue.enqueueAndForget(async()=>Fx(await Jx(r),i,s)),s.promise}(pE(t),e)}function wN(t,e,n){const r=n.docs.get(e._key),i=new AE(t);return new CE(t,i,e._key,r,new ps(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){$i=i})(Oi),wi(new Ir("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new po(new vR(r.getProvider("auth-internal")),new TR(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zn(mg,"4.1.2",e),zn(mg,"4.1.2","esm2017")})();const EN={apiKey:"AIzaSyCOtVwlnAdGDJY0o8SRHHdLJwaotRaaN4s",authDomain:"admin-mkt-5436e.firebaseapp.com",projectId:"admin-mkt-5436e",storageBucket:"admin-mkt-5436e.appspot.com",messagingSenderId:"899521384256",appId:"1:899521384256:web:0f20f354eb2d369eb4b4a5"},RE=D_(EN),td=oP(RE),up=nN(RE),kE=T.createContext(),TN=({children:t})=>{const[e,n]=T.useState(null),[r,i]=T.useState(!0),[s,o]=T.useState(!0);T.useEffect(()=>{const l=qC(td,u=>{n(u),i(!1),o(!1)});return()=>l()},[]);const a=()=>GC(td);return y.jsx(kE.Provider,{value:{user:e,loading:r,loadingAuth:s,logout:a},children:t})},cp=()=>T.useContext(kE);/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mo.apply(this,arguments)}var Nn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nn||(Nn={}));const Xg="popstate";function IN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return nd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:kl(i)}return CN(e,n,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function hp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SN(){return Math.random().toString(36).substr(2,8)}function Jg(t,e){return{usr:t.state,key:t.key,idx:e}}function nd(t,e,n,r){return n===void 0&&(n=null),mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bi(e):e,{state:n,key:e&&e.key||r||SN()})}function kl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Bi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function CN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Nn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(mo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Nn.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:p})}function d(w,p){a=Nn.Push;let f=nd(_.location,w,p);u=c()+1;let g=Jg(f,u),E=_.createHref(f);try{o.pushState(g,"",E)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function m(w,p){a=Nn.Replace;let f=nd(_.location,w,p);u=c();let g=Jg(f,u),E=_.createHref(f);o.replaceState(g,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function v(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:kl(w);return pe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Xg,h),l=w,()=>{i.removeEventListener(Xg,h),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let p=v(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(w){return o.go(w)}};return _}var Zg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zg||(Zg={}));function AN(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Bi(e):e,i=dp(r.pathname||"/",n);if(i==null)return null;let s=xE(t);PN(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=MN(s[a],$N(i));return o}function xE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Wn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:VN(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of NE(s.path))i(s,o,l)}),e}function NE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=NE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function PN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const RN=/^:\w+$/,kN=3,xN=2,NN=1,DN=10,ON=-2,ey=t=>t==="*";function VN(t,e){let n=t.split("/"),r=n.length;return n.some(ey)&&(r+=ON),e&&(r+=xN),n.filter(i=>!ey(i)).reduce((i,s)=>i+(RN.test(s)?kN:s===""?NN:DN),r)}function LN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function MN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=bN({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Wn([i,c.pathname]),pathnameBase:BN(Wn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Wn([i,c.pathnameBase]))}return s}function bN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=FN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=UN(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function FN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),hp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function $N(t){try{return decodeURI(t)}catch(e){return hp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function UN(t,e){try{return decodeURIComponent(t)}catch(n){return hp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function dp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function jN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Bi(t):t;return{pathname:n?n.startsWith("/")?n:zN(n,e):e,search:WN(r),hash:HN(i)}}function zN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function pp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Bi(t):(i=mo({},t),pe(!i.pathname||!i.pathname.includes("?"),kc("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),kc("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),kc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=jN(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Wn=t=>t.join("/").replace(/\/\/+/g,"/"),BN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),WN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,HN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function KN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const DE=["post","put","patch","delete"];new Set(DE);const qN=["get",...DE];new Set(qN);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xl.apply(this,arguments)}const mp=T.createContext(null),OE=T.createContext(null),Lr=T.createContext(null),Du=T.createContext(null),gn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),VE=T.createContext(null);function GN(t,e){let{relative:n}=e===void 0?{}:e;Wi()||pe(!1);let{basename:r,navigator:i}=T.useContext(Lr),{hash:s,pathname:o,search:a}=yp(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Wn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Wi(){return T.useContext(Du)!=null}function Hi(){return Wi()||pe(!1),T.useContext(Du).location}function LE(t){T.useContext(Lr).static||T.useLayoutEffect(t)}function gp(){let{isDataRoute:t}=T.useContext(gn);return t?uD():QN()}function QN(){Wi()||pe(!1);let t=T.useContext(mp),{basename:e,navigator:n}=T.useContext(Lr),{matches:r}=T.useContext(gn),{pathname:i}=Hi(),s=JSON.stringify(fp(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return LE(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=pp(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Wn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const YN=T.createContext(null);function XN(t){let e=T.useContext(gn).outlet;return e&&T.createElement(YN.Provider,{value:t},e)}function yp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=T.useContext(gn),{pathname:i}=Hi(),s=JSON.stringify(fp(r).map(o=>o.pathnameBase));return T.useMemo(()=>pp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function JN(t,e){return ZN(t,e)}function ZN(t,e,n){Wi()||pe(!1);let{navigator:r}=T.useContext(Lr),{matches:i}=T.useContext(gn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Hi(),u;if(e){var c;let _=typeof e=="string"?Bi(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||pe(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=AN(t,{pathname:d}),v=iD(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Wn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Wn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?T.createElement(Du.Provider,{value:{location:xl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Nn.Pop}},v):v}function eD(){let t=lD(),e=KN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,null)}const tD=T.createElement(eD,null);class nD extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?T.createElement(gn.Provider,{value:this.props.routeContext},T.createElement(VE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rD(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(mp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(gn.Provider,{value:e},r)}function iD(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||pe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||tD);let d=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=h:l.route.Component?v=T.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,T.createElement(rD,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(nD,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var ME=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ME||{}),Nl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Nl||{});function sD(t){let e=T.useContext(mp);return e||pe(!1),e}function oD(t){let e=T.useContext(OE);return e||pe(!1),e}function aD(t){let e=T.useContext(gn);return e||pe(!1),e}function bE(t){let e=aD(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function lD(){var t;let e=T.useContext(VE),n=oD(Nl.UseRouteError),r=bE(Nl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function uD(){let{router:t}=sD(ME.UseNavigateStable),e=bE(Nl.UseNavigateStable),n=T.useRef(!1);return LE(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,xl({fromRouteId:e},s)))},[t,e])}function FE(t){let{to:e,replace:n,state:r,relative:i}=t;Wi()||pe(!1);let{matches:s}=T.useContext(gn),{pathname:o}=Hi(),a=gp(),l=pp(e,fp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return T.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function cD(t){return XN(t.context)}function ms(t){pe(!1)}function hD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Nn.Pop,navigator:s,static:o=!1}=t;Wi()&&pe(!1);let a=e.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Bi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,v=T.useMemo(()=>{let _=dp(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return v==null?null:T.createElement(Lr.Provider,{value:l},T.createElement(Du.Provider,{children:n,value:v}))}function dD(t){let{children:e,location:n}=t;return JN(rd(e),n)}new Promise(()=>{});function rd(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,rd(r.props.children,s));return}r.type!==ms&&pe(!1),!r.props.index||!r.props.children||pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=rd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dl(){return Dl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dl.apply(this,arguments)}function $E(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function fD(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pD(t,e){return t.button===0&&(!e||e==="_self")&&!fD(t)}const mD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],gD=["aria-current","caseSensitive","className","end","style","to","children"],yD="startTransition",ty=u1[yD];function vD(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=IN({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(h=>{u&&ty?ty(()=>l(h)):l(h)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(hD,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const _D=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ED=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=$E(e,mD),{basename:d}=T.useContext(Lr),m,v=!1;if(typeof u=="string"&&wD.test(u)&&(m=u,_D))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=dp(g.pathname,d);g.origin===f.origin&&E!=null?u=E+g.search+g.hash:v=!0}catch{}let _=GN(u,{relative:i}),w=TD(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||w(f)}return T.createElement("a",Dl({},h,{href:m||_,onClick:v||s?r:p,ref:n,target:l}))}),xc=T.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=$E(e,gD),h=yp(l,{relative:c.relative}),d=Hi(),m=T.useContext(OE),{navigator:v}=T.useContext(Lr),_=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,w=d.pathname,p=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(w=w.toLowerCase(),p=p?p.toLowerCase():null,_=_.toLowerCase());let f=w===_||!o&&w.startsWith(_)&&w.charAt(_.length)==="/",g=p!=null&&(p===_||!o&&p.startsWith(_)&&p.charAt(_.length)==="/"),E=f?r:void 0,A;typeof s=="function"?A=s({isActive:f,isPending:g}):A=[s,f?"active":null,g?"pending":null].filter(Boolean).join(" ");let R=typeof a=="function"?a({isActive:f,isPending:g}):a;return T.createElement(ED,Dl({},c,{"aria-current":E,className:A,ref:n,style:R,to:l}),typeof u=="function"?u({isActive:f,isPending:g}):u)});var ny;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(ny||(ny={}));var ry;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ry||(ry={}));function TD(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=gp(),l=Hi(),u=yp(t,{relative:o});return T.useCallback(c=>{if(pD(c,n)){c.preventDefault();let h=r!==void 0?r:kl(l)===kl(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var UE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},iy=tn.createContext&&tn.createContext(UE),ID=["attr","size","title"];function SD(t,e){if(t==null)return{};var n=CD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function CD(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Ol(){return Ol=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ol.apply(this,arguments)}function sy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Vl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sy(Object(n),!0).forEach(function(r){AD(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function AD(t,e,n){return e=PD(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function PD(t){var e=RD(t,"string");return typeof e=="symbol"?e:e+""}function RD(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function jE(t){return t&&t.map((e,n)=>tn.createElement(e.tag,Vl({key:n},e.attr),jE(e.child)))}function Kt(t){return e=>tn.createElement(kD,Ol({attr:Vl({},t.attr)},e),jE(t.child))}function kD(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=SD(t,ID),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),tn.createElement("svg",Ol({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Vl(Vl({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&tn.createElement("title",null,s),t.children)};return iy!==void 0?tn.createElement(iy.Consumer,null,n=>e(n)):e(UE)}function xD(t){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(t)}function ND(t){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(t)}function DD(t){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(t)}function OD(t){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function VD(t){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(t)}function LD(t){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function MD(t){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"},child:[]},{tag:"polyline",attr:{points:"10 17 15 12 10 7"},child:[]},{tag:"line",attr:{x1:"15",y1:"12",x2:"3",y2:"12"},child:[]}]})(t)}function bD(t){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(t)}function FD(t){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(t)}function $D(t){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(t)}const UD=(t={})=>{const[e,n]=T.useState(t);return{data:e,setter:i=>{const{name:s,value:o}=i.target;n(a=>({...a,[s]:o}))},setData:n}},jD=async({email:t,password:e})=>{try{return{success:!0,user:(await WC(td,t,e)).user}}catch(n){return{success:!1,error:n.message}}},zD=()=>{const[t,e]=T.useState(null),[n,r]=T.useState(!1);return{login:async s=>{r(!0),e(null);const o=await jD(s);return o.success||e(o.error),r(!1),o},loading:n,error:t}};function BD(){const{data:t,setter:e}=UD({email:"",password:""}),{login:n,loading:r,error:i}=zD(),s=gp(),[o,a]=T.useState(!1),l=async u=>{u.preventDefault(),(await n(t)).success&&s("/dashboard")};return y.jsx("section",{className:"flex items-center justify-center min-h-screen bg-gray-50 px-4",children:y.jsxs("form",{onSubmit:l,className:"w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md",children:[y.jsx("h1",{className:"text-3xl text-center font-bold uppercase text-blu-ar-950",children:"Iniciar Sesión"}),y.jsxs("div",{className:"flex flex-col relative",children:[y.jsx("label",{htmlFor:"email",className:"font-medium text-blu-ar-950 mb-1",children:"Usuario"}),y.jsxs("div",{className:"flex items-center border-2 border-blu-ar-100 rounded-md p-2 focus-within:ring-2 focus-within:ring-lemon-ar-600",children:[y.jsx(FD,{className:"text-gray-500 mr-2"}),y.jsx("input",{id:"email",type:"email",name:"email",placeholder:"example@email.com",onChange:e,required:!0,className:"w-full outline-none bg-transparent text-blu-ar-950"})]})]}),y.jsxs("div",{className:"flex flex-col relative",children:[y.jsx("label",{htmlFor:"password",className:"font-medium text-blu-ar-950 mb-1",children:"Contraseña"}),y.jsxs("div",{className:"flex items-center border-2 border-blu-ar-100 rounded-md p-2 focus-within:ring-2 focus-within:ring-lemon-ar-600",children:[y.jsx(LD,{className:"text-gray-500 mr-2"}),y.jsx("input",{id:"password",type:o?"text":"password",name:"password",placeholder:"••••••",onChange:e,required:!0,className:"w-full outline-none bg-transparent text-blu-ar-950"}),y.jsx("button",{type:"button",onClick:()=>a(u=>!u),className:"text-gray-500 ml-2 focus:outline-none",tabIndex:-1,children:o?y.jsx(DD,{}):y.jsx(OD,{})})]})]}),y.jsx("button",{type:"submit",disabled:r,className:`w-full bg-blu-ar-100 text-blu-ar-950 font-semibold rounded-md p-2 uppercase transition hover:bg-lemon-ar-600 hover:text-blu-ar-700 hover:shadow-md ${r?"opacity-50 cursor-not-allowed":""}`,children:r?"Accediendo...":"Acceder"}),i&&y.jsx("p",{className:"text-red-600 text-sm text-center mt-2",children:i})]})})}function WD(){const[t,e]=T.useState([]),[n,r]=T.useState(!0),[i,s]=T.useState(null);return T.useEffect(()=>{const o=_N(dE(up,"tickets"),a=>{const l=a.docs.map(u=>({id:u.id,...u.data()}));e(l),r(!1)},a=>{s(a.message),r(!1)});return()=>o()},[]),{tickets:t,isLoading:n,error:i}}let HD={data:""},KD=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||HD,qD=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,GD=/\/\*[^]*?\*\/|  +/g,oy=/\n+/g,Pn=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Pn(o,s):s+"{"+Pn(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Pn(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Pn.p?Pn.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},qt={},zE=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+zE(t[n]);return e}return t},QD=(t,e,n,r,i)=>{let s=zE(t),o=qt[s]||(qt[s]=(l=>{let u=0,c=11;for(;u<l.length;)c=101*c+l.charCodeAt(u++)>>>0;return"go"+c})(s));if(!qt[o]){let l=s!==t?t:(u=>{let c,h,d=[{}];for(;c=qD.exec(u.replace(GD,""));)c[4]?d.shift():c[3]?(h=c[3].replace(oy," ").trim(),d.unshift(d[0][h]=d[0][h]||{})):d[0][c[1]]=c[2].replace(oy," ").trim();return d[0]})(t);qt[o]=Pn(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&qt.g?qt.g:null;return n&&(qt.g=qt[o]),((l,u,c,h)=>{h?u.data=u.data.replace(h,l):u.data.indexOf(l)===-1&&(u.data=c?l+u.data:u.data+l)})(qt[o],e,r,a),o},YD=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Pn(a,""):a===!1?"":a}return r+i+(o??"")},"");function Ou(t){let e=this||{},n=t.call?t(e.p):t;return QD(n.unshift?n.raw?YD(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,KD(e.target),e.g,e.o,e.k)}let BE,id,sd;Ou.bind({g:1});let fn=Ou.bind({k:1});function XD(t,e,n,r){Pn.p=e,BE=t,id=n,sd=r}function tr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:id&&id()},a),n.o=/ *go\d+/.test(l),a.className=Ou.apply(n,r)+(l?" "+l:"");let u=t;return t[0]&&(u=a.as||t,delete a.as),sd&&u[0]&&sd(a),BE(u,a)}return i}}var JD=t=>typeof t=="function",Ll=(t,e)=>JD(t)?t(e):t,ZD=(()=>{let t=0;return()=>(++t).toString()})(),WE=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),eO=20,Va=new Map,tO=1e3,ay=t=>{if(Va.has(t))return;let e=setTimeout(()=>{Va.delete(t),Mr({type:4,toastId:t})},tO);Va.set(t,e)},nO=t=>{let e=Va.get(t);e&&clearTimeout(e)},od=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,eO)};case 1:return e.toast.id&&nO(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?od(t,{type:1,toast:n}):od(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?ay(r):t.toasts.forEach(s=>{ay(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},La=[],Ma={toasts:[],pausedAt:void 0},Mr=t=>{Ma=od(Ma,t),La.forEach(e=>{e(Ma)})},rO={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},iO=(t={})=>{let[e,n]=T.useState(Ma);T.useEffect(()=>(La.push(n),()=>{let i=La.indexOf(n);i>-1&&La.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||rO[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},sO=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||ZD()}),Fo=t=>(e,n)=>{let r=sO(e,t,n);return Mr({type:2,toast:r}),r.id},ot=(t,e)=>Fo("blank")(t,e);ot.error=Fo("error");ot.success=Fo("success");ot.loading=Fo("loading");ot.custom=Fo("custom");ot.dismiss=t=>{Mr({type:3,toastId:t})};ot.remove=t=>Mr({type:4,toastId:t});ot.promise=(t,e,n)=>{let r=ot.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(ot.success(Ll(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{ot.error(Ll(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var oO=(t,e)=>{Mr({type:1,toast:{id:t,height:e}})},aO=()=>{Mr({type:5,time:Date.now()})},lO=t=>{let{toasts:e,pausedAt:n}=iO(t);T.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&ot.dismiss(a.id);return}return setTimeout(()=>ot.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=T.useCallback(()=>{n&&Mr({type:6,time:Date.now()})},[n]),i=T.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},c=e.filter(m=>(m.position||u)===(s.position||u)&&m.height),h=c.findIndex(m=>m.id===s.id),d=c.filter((m,v)=>v<h&&m.visible).length;return c.filter(m=>m.visible).slice(...a?[d+1]:[0,d]).reduce((m,v)=>m+(v.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:oO,startPause:aO,endPause:r,calculateOffset:i}}},uO=fn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,cO=fn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,hO=fn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,dO=tr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${uO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${cO} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${hO} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,fO=fn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,pO=tr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${fO} 1s linear infinite;
`,mO=fn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,gO=fn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,yO=tr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${mO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${gO} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,vO=tr("div")`
  position: absolute;
`,_O=tr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,wO=fn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,EO=tr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${wO} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,TO=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?T.createElement(EO,null,e):e:n==="blank"?null:T.createElement(_O,null,T.createElement(pO,{...r}),n!=="loading"&&T.createElement(vO,null,n==="error"?T.createElement(dO,{...r}):T.createElement(yO,{...r})))},IO=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,SO=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,CO="0%{opacity:0;} 100%{opacity:1;}",AO="0%{opacity:1;} 100%{opacity:0;}",PO=tr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,RO=tr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,kO=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=WE()?[CO,AO]:[IO(n),SO(n)];return{animation:e?`${fn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${fn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},xO=T.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?kO(t.position||e||"top-center",t.visible):{opacity:0},s=T.createElement(TO,{toast:t}),o=T.createElement(RO,{...t.ariaProps},Ll(t.message,t));return T.createElement(PO,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):T.createElement(T.Fragment,null,s,o))});XD(T.createElement);var NO=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=T.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return T.createElement("div",{ref:s,className:e,style:n},i)},DO=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:WE()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},OO=Ou`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,fa=16,VO=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=lO(n);return T.createElement("div",{style:{position:"fixed",zIndex:9999,top:fa,left:fa,right:fa,bottom:fa,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let c=u.position||e,h=l.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),d=DO(c,h);return T.createElement(NO,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?OO:"",style:d},u.type==="custom"?Ll(u.message,u):i?i(u):T.createElement(xO,{toast:u,position:c}))}))},ad=ot;function LO(){return{toast:ad,notify:e=>ad(e)}}function MO(){const{notify:t}=LO();return{copyCMD:n=>{const{server:r,profile:i,codes:s,uptime:o}=n,a=o||"01:00:00",l=document.createElement("textarea");l.textContent=`/ip hotspot user 
`,s.forEach(({code:c})=>{l.textContent+=`add name="${c}" server="${r}" profile="${i}" limit-uptime="${a}" 
`});var u=l.textContent;navigator.clipboard.writeText(u).then(()=>{console.log("Se ah copiado el codigo de la terminal mikrotik en el portapapeles sadisfactoriamente!"),t("Se ah copiado el codigo de la terminal mikrotik en el portapapeles sadisfactoriamente!")}).catch(c=>{console.log("Something went wrong",c)})}}}function bO(){const[t,e]=T.useState(null),n=()=>{if(!t)return;console.log(t);const s=document.getElementById("root"),o=document.createElement("div");o.id="print",o.className="min-h-screen bg-slate-100 text-slate-900";const a=document.createElement("h2");a.className="text-2xl font-bold text-center mb-4",a.textContent="Configuracion Registrada";const l=document.createElement("div");l.className="grid grid-cols-4 gap-2 text-center py-3";const u=document.createElement("h4");u.textContent="Servidor: ";const c=document.createElement("i");c.className="font-semibold",c.textContent=t.server,u.appendChild(c);const h=document.createElement("h4");h.textContent="Perfil: ";const d=document.createElement("i");d.className="font-semibold",d.textContent=t.profile,h.appendChild(d);const m=document.createElement("h4");m.textContent="Tiempo: ";const v=document.createElement("i");v.className="font-semibold",v.textContent=t.uptime,m.appendChild(v);const _=document.createElement("h4");_.textContent="Cantidad: ";const w=document.createElement("i");w.className="font-semibold",w.textContent=t.codes.length,_.appendChild(w),l.appendChild(u),l.appendChild(h),l.appendChild(m),l.appendChild(_);const p=document.createElement("div");p.className="grid gap-4";const f=document.createElement("h4");f.className="font-semibold uppercase indent-2",f.textContent="Codigos:";const g=document.createElement("ul");g.className="grid gap-2 grid-cols-6",t.codes&&t.codes.forEach(({code:E})=>{const A=document.createElement("li");A.className="bg-slate-800 text-3xl font-semibold list-none text-center p-2",A.textContent=E,g.appendChild(A)}),p.appendChild(f),p.appendChild(g),o.appendChild(a),o.appendChild(l),o.appendChild(p),s.appendChild(o)},r=()=>{const s=document.getElementById("print");s&&s.remove()};return T.useEffect(()=>(window.addEventListener("beforeprint",n),window.addEventListener("afterprint",r),()=>{window.removeEventListener("beforeprint",n),window.removeEventListener("afterprint",r)}),[n,t]),{printPDF:s=>{e(s),setTimeout(()=>{const o=window;o.document.title=`Perfil ${s.profile} - tickets ${s.codes.length} - ${s.id} - Fecha ${s.date} - ${s.zeller}`,o.print()},1e3)}}}const FO=(t,e,n)=>{T.useEffect(()=>{const r=document.querySelector(e);if(!r)return;const i=setTimeout(()=>{r.classList.remove("animacion")},n);return()=>clearTimeout(i)},t)};function $O({ticket:t,isActive:e,onPrint:n,onCopy:r,onDelete:i}){var s,o;return y.jsxs("li",{className:`p-4 rounded-md ${e?"bg-lemon-ar-400":"bg-white"} shadow-md hover:shadow-lg transition`,tabIndex:0,children:[y.jsxs("div",{className:"flex flex-col gap-2 text-sm md:text-base",children:[y.jsxs("div",{className:"flex flex-wrap justify-between items-center",children:[y.jsxs("div",{className:"space-x-1",children:[y.jsxs("span",{children:[y.jsx("strong",{children:"ID:"})," ",(s=t.id)==null?void 0:s.slice(0,4)]}),y.jsxs("span",{children:[y.jsx("strong",{children:"Perfil:"})," ",t.profile??"N/A"]})]}),y.jsxs("span",{children:[y.jsx("strong",{children:"Tickets:"})," ",((o=t.codes)==null?void 0:o.length)??0]})]}),y.jsxs("div",{className:"flex flex-wrap justify-between items-center",children:[y.jsxs("span",{className:"capitalize",children:[y.jsx("strong",{children:"Vendedor:"})," ",t.zeller??"Desconocido"]}),y.jsxs("span",{children:[y.jsx("strong",{children:"Fecha:"})," ",t.date??"Sin fecha"]})]})]}),y.jsxs("div",{className:"flex justify-end flex-wrap gap-2 mt-4",children:[y.jsx("button",{onClick:n,className:"border-2 border-blu-ar-800 text-blu-ar-800 hover:bg-blu-ar-800 hover:text-lemon-ar-300 hover:text-white rounded-md px-4 py-1 text-xs md:text-sm uppercase","aria-label":"Imprimir ticket",children:"Imprimir"}),y.jsx("button",{onClick:r,className:"border-2 border-blu-ar-800 text-blu-ar-800 hover:bg-blu-ar-800 hover:text-lemon-ar-300 rounded-md px-4 py-1 text-xs md:text-sm uppercase","aria-label":"Copiar comando CMD",children:"CMD"}),y.jsx("button",{onClick:i,className:"border-2 border-red-600 text-red-600 hover:bg-red-800 hover:text-blu-ar-50 rounded-md px-4 py-1 text-xs md:text-sm uppercase","aria-label":"Copiar comando CMD",children:"Eliminar"})]})]},t.id)}const UO=async t=>{try{return await yN(fE(up,"tickets",t)),{error:!1,message:`Documento con ID ${t} eliminado correctamente.`}}catch(e){return{error:!0,message:"Error al eliminar el documento:",error:e}}},ly=t=>{if(!t)return new Date(0);const[e,n,r]=t.split("/").map(Number);return new Date(r,n-1,e)};function jO(){const{tickets:t,isLoading:e,error:n}=WD(),{printPDF:r}=bO(),{copyCMD:i}=MO(),[s,o]=T.useState(()=>localStorage.getItem("itemId")),[a,l]=T.useState("fecha"),[u,c]=T.useState("asc"),h=()=>{c(v=>v==="asc"?"desc":"asc")};T.useEffect(()=>{const v=()=>{o(localStorage.getItem("itemId"))};return window.addEventListener("storage",v),()=>window.removeEventListener("storage",v)},[]),FO([t],".animacion",6e3);const d=T.useMemo(()=>t?[...t].sort((v,_)=>{var p,f;let w=0;switch(a){case"zeller":w=((p=v.zeller)==null?void 0:p.localeCompare(_.zeller))??0;break;case"fecha":w=ly(v.date).getTime()-ly(_.date).getTime();break;case"profile":w=((f=v.profile)==null?void 0:f.localeCompare(_.profile))??0;break;default:w=0}return u==="asc"?w:-w}):[],[t,a,u]),m=async v=>{window.confirm(`¿Eliminar ticket de ${v.zeller}?`)&&ad.promise(UO(v.id),{loading:"Eliminando...",success:w=>w.message,error:w=>w.message||"Error al eliminar el ticket"}).then(w=>{setTickets(p=>p.filter(f=>f.id!==v.id))})};return e?y.jsx("header",{className:"py-24 text-center",children:y.jsx("h1",{className:"text-4xl font-bold text-blu-ar-800 uppercase",children:"Cargando..."})}):n?y.jsx("p",{className:"text-center text-red-500",children:n}):y.jsxs(y.Fragment,{children:[y.jsxs("header",{className:"px-4 py-12 md:py-20 text-center",children:[y.jsx("h1",{className:"text-3xl md:text-5xl font-bold text-blu-ar-800 uppercase mb-4",children:"Registro de Tickets"}),y.jsx("p",{className:"text-base md:text-lg text-gray-700 max-w-2xl mx-auto",children:"Bienvenido a la administración de tickets MikroTik. Registra y gestiona tus tickets de forma sencilla."})]}),y.jsxs("section",{className:"px-4 md:px-8 max-w-6xl mx-auto",children:[y.jsxs("div",{className:"flex flex-row items-center justify-between gap-4 mb-6",children:[y.jsx("h2",{className:"text-lg md:text-2xl font-bold uppercase text-center md:text-left",children:"Lista de Códigos"}),y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("label",{htmlFor:"sort",className:"text-sm md:text-base font-medium",children:"Filtrar por:"}),y.jsxs("select",{id:"sort",value:a,onChange:v=>l(v.target.value),className:"border rounded px-2 py-1 text-sm",children:[y.jsx("option",{value:"zeller",children:"Vendedor"}),y.jsx("option",{value:"fecha",children:"Fecha"}),y.jsx("option",{value:"profile",children:"Perfil"})]}),y.jsx("button",{onClick:h,title:u==="asc"?"Orden ascendente":"Orden descendente",className:"flex items-center justify-center p-1 border rounded hover:bg-gray-100",children:u==="asc"?y.jsx(ND,{size:20}):y.jsx(xD,{size:20})})]})]}),y.jsx("ul",{className:"flex flex-col gap-4",children:d.map(v=>y.jsx($O,{ticket:v,isActive:v.id===s,onPrint:()=>r(v),onCopy:()=>i(v),onDelete:()=>m(v)},v.id))})]})]})}function uy({children:t}){const{user:e,loadingAuth:n}=cp();return n?y.jsx("p",{className:"text-center mt-10",children:"Cargando..."}):e?t:y.jsx(FE,{to:"/"})}function zO({children:t}){const{user:e,loadingAuth:n}=cp();return n?y.jsx("p",{className:"text-center mt-10",children:"Cargando..."}):e?y.jsx(FE,{to:"/dashboard"}):t}function BO(t){return y.jsxs("svg",{width:"36",height:"48",viewBox:"0 0 244 201",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("g",{filter:"url(#filter0_d_520_15)",children:y.jsx("path",{d:"M74.4681 36H53.5319L4 162H28.5106L64.2553 62.965L99.4894 162H124L74.4681 36Z",fill:"white"})}),y.jsx("g",{filter:"url(#filter1_d_520_15)",children:y.jsx("path",{d:"M140 11C140 9.89544 140.895 9 142 9H144C145.105 9 146 9.89543 146 11V187C146 188.105 145.105 189 144 189H142C140.895 189 140 188.105 140 187V11Z",fill:"#F1D00A"})}),y.jsx("g",{filter:"url(#filter2_d_520_15)",children:y.jsx("path",{d:"M162 54.1401V36H193.5C206.5 36 231.4 49.0412 231 73.751C230.6 98.4607 216.167 107.253 208 108.56L238 162H213L187.5 113.463H162V95.323H192.5C198.667 94.5058 210.7 89.0475 209.5 73.751C208.3 58.4545 197.667 54.3035 192.5 54.1401H162Z",fill:"white"})}),y.jsxs("defs",{children:[y.jsxs("filter",{id:"filter0_d_520_15",x:"0",y:"36",width:"128",height:"134",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[y.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),y.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),y.jsx("feOffset",{dy:"4"}),y.jsx("feGaussianBlur",{stdDeviation:"2"}),y.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),y.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),y.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_520_15"}),y.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_520_15",result:"shape"})]}),y.jsxs("filter",{id:"filter1_d_520_15",x:"132",y:"5",width:"22",height:"196",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[y.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),y.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),y.jsx("feOffset",{dy:"4"}),y.jsx("feGaussianBlur",{stdDeviation:"4"}),y.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),y.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"}),y.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_520_15"}),y.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_520_15",result:"shape"})]}),y.jsxs("filter",{id:"filter2_d_520_15",x:"158",y:"36",width:"84",height:"134",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[y.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),y.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),y.jsx("feOffset",{dy:"4"}),y.jsx("feGaussianBlur",{stdDeviation:"2"}),y.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),y.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),y.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_520_15"}),y.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_520_15",result:"shape"})]})]})]})}function WO(){const{user:t,logout:e}=cp(),n=({isActive:r})=>`flex items-center gap-2 px-3 py-2 rounded transition-all uppercase font-semibold text-sm ${r?"bg-lemon-ar-600 text-blu-ar-700 shadow-sm shadow-lemon-ar-600":"hover:bg-lemon-ar-600 hover:text-blu-ar-700 hover:shadow-sm hover:shadow-lemon-ar-600"}`;return y.jsxs("nav",{className:"w-full sticky flex items-center justify-between bg-blu-ar-700 text-lemon-ar-50 shadow-md py-2 px-6 z-50",children:[y.jsx("span",{className:"font-bold uppercase text-lg",children:y.jsx(BO,{})}),y.jsx("div",{className:"flex items-center gap-4",children:t?y.jsxs(y.Fragment,{children:[y.jsxs(xc,{to:"/dashboard",end:!0,className:n,children:[y.jsx(VD,{className:"text-lg"}),y.jsx("span",{className:"hidden md:block",children:"Inicio"})]}),y.jsxs(xc,{to:"/crear-tickets",className:n,children:[y.jsx($D,{className:"text-lg"}),y.jsx("span",{className:"hidden md:block",children:"Crear Tickets"})]}),y.jsxs("button",{onClick:e,className:"flex items-center gap-1 px-3 py-2 rounded uppercase font-semibold text-sm hover:bg-lemon-ar-600 hover:text-blu-ar-700 hover:shadow-sm hover:shadow-lemon-ar-600 transition-all",children:[y.jsx(bD,{className:"text-lg"}),y.jsx("span",{className:"hidden md:block",children:"Salir"})]})]}):y.jsxs(xc,{to:"/",end:!0,className:n,children:[y.jsx(MD,{className:"text-lg"}),"Iniciar sesión"]})})]})}const HO=()=>y.jsx("footer",{className:"w-full flex items-center justify-center max-w-3xl mx-auto pt-6 pb-8 px-6 mt-16",children:y.jsx("p",{children:"© 2024 A|R System. Todos los derechos reservados."})});function KO(){return y.jsxs("div",{className:"min-h-screen flex flex-col text-blu-ar-950 print:hidden",children:[y.jsx(WO,{}),y.jsxs("main",{className:"flex-grow w-full px-6 lg:px-16 mx-auto",children:[y.jsx(cD,{}),y.jsx(VO,{position:"bottom-center"})]}),y.jsx(HO,{})]})}function qO(){const t="abcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let n=0;n<6;n++){const r=Math.floor(Math.random()*t.length);e+=t.charAt(r)}return e}function GO(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getFullYear());return`${e}/${n}/${r}`}const QO=t=>{const e=[];for(let n=0;n<t;n++){const r=qO();e.push({code:r,status:!1})}return e};function YO(){const[t,e]=T.useState(null),n=i=>{const{server:s,profile:o,title:a,acount:l,uptime:u,zeller:c}=Object.fromEntries(new window.FormData(i)),h=s||"Wifi Por Hora",d=o||"1hr",m=a||"Wifi Por Hora",v=l||84,_=u||"01:00:00",w=c||"adrianfer";let p;return(!s||!o||!a)&&(p="Existe un input vacio; Asignaremos los valores predeterminados"),{server:h,profile:d,uptime:_,title:m,acount:v,zeller:w,message:p}};return{tickets:t,register:i=>{i.preventDefault();const{server:s,profile:o,title:a,uptime:l,acount:u,zeller:c,message:h}=n(i.target);h&&console.log(h);const d=QO(u),m={server:s,profile:o,uptime:l,title:a,zeller:c,codes:d,date:GO()};e(m)}}}const XO="tickets",JO=async t=>{try{return{id:(await vN(dE(up,XO),t)).id,error:!1}}catch(e){return{error:!0,message:"Error adding document:"+e}}};function ZO(){let t="";return{saveOfTickets:async n=>{try{const r=await JO(n);r.error||(t="Se ha guardado los nuevos tickets...",localStorage.setItem("itemId",r.id),setTimeout(()=>{window.location.href="/Admin-MKT/"},1500)),t=r.message}catch(r){return console.error("Error al guardar el documento:",r),t="Error al guardar el documento:"+r}},message:t}}const cy=[{label:"84 tickets",value:84},{label:"276 tickets",value:276},{label:"468 tickets",value:468},{label:"948 tickets",value:948}],e2=()=>{const[t,e]=T.useState(cy[3].value),n=r=>{e(r)};return y.jsxs("div",{className:"grid gap-3 max-w-md px-1 md:px-4",children:[y.jsx("h4",{className:"font-semibold",children:"Cantidad de tickets:"}),y.jsx("div",{className:"flex flex-wrap items-center justify-around",children:cy.map(r=>y.jsxs("div",{className:"flex gap-1",children:[y.jsx("input",{type:"radio",value:r.value,checked:t===r.value,name:"acount",id:r.value,onChange:()=>n(r.value)}),y.jsx("label",{htmlFor:r.value,children:r.label})]},r.value))})]})},t2=()=>{var r;const{tickets:t,register:e}=YO(),{saveOfTickets:n}=ZO();return y.jsxs(y.Fragment,{children:[y.jsxs("header",{className:"max-w-5xl py-20 md:py-24 mx-auto text-center",children:[y.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl text-blu-ar-800 font-bold uppercase mb-4",children:"Configuración de Tickets"}),y.jsx("p",{className:"text-lg max-w-2xl mx-auto text-gray-700 opacity-80",children:"Bienvenido a la página de administración de tickets MikroTik. Aquí puedes registrar y gestionar los tickets relacionados con tu red."})]}),t?y.jsxs("section",{className:"grid gap-6 max-w-5xl mx-auto px-4",children:[y.jsx("h2",{className:"text-2xl font-bold text-center uppercase text-blu-ar-700",children:"Configuración Registrada"}),y.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base text-center",children:[y.jsxs("p",{children:[y.jsx("strong",{children:"Servidor:"})," ",t.server]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Perfil:"})," ",t.profile]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Tiempo:"})," ",t.uptime]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Cantidad:"})," ",t.codes.length]})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"font-semibold uppercase mb-2",children:"Códigos"}),y.jsx("ul",{className:"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2",children:(r=t.codes)==null?void 0:r.map(({code:i})=>y.jsx("li",{className:"bg-slate-100 text-center py-2 px-3 rounded shadow text-sm font-mono",children:i},i))})]}),y.jsx("button",{type:"button",onClick:()=>n(t),className:"btn-primary",children:"Guardar"})]}):y.jsxs("form",{onSubmit:e,className:"grid gap-6 max-w-3xl mx-auto px-4",children:[y.jsxs("fieldset",{className:"grid gap-4",children:[y.jsx("legend",{className:"text-xl font-semibold uppercase text-blu-ar-700",children:"Datos del Ticket"}),y.jsxs("div",{className:"flex flex-col",children:[y.jsx("label",{htmlFor:"zeller",className:"font-semibold",children:"Vendedor"}),y.jsx("input",{id:"zeller",name:"zeller",type:"text",placeholder:"Adrianfer",required:!0,className:"input-style"})]}),y.jsxs("div",{className:"flex flex-col",children:[y.jsx("label",{htmlFor:"server",className:"font-semibold",children:"Servidor"}),y.jsx("input",{id:"server",name:"server",type:"text",placeholder:"Wifi Por Hora",required:!0,className:"input-style"})]}),y.jsxs("div",{className:"flex flex-col",children:[y.jsx("label",{htmlFor:"title",className:"font-semibold",children:"Título"}),y.jsx("input",{id:"title",name:"title",type:"text",placeholder:"Wifi Por Hora",required:!0,className:"input-style"})]}),y.jsxs("div",{className:"flex flex-col",children:[y.jsx("label",{htmlFor:"profile",className:"font-semibold",children:"Perfil"}),y.jsx("input",{id:"profile",name:"profile",type:"text",placeholder:"1hr",required:!0,className:"input-style"})]}),y.jsxs("div",{className:"flex flex-col",children:[y.jsx("label",{htmlFor:"uptime",className:"font-semibold",children:"Tiempo"}),y.jsx("input",{id:"uptime",name:"uptime",type:"text",placeholder:"01:00:00",required:!0,className:"input-style"})]})]}),y.jsx(e2,{}),y.jsx("button",{type:"submit",className:"btn-primary",children:"Registrar"})]})]})},n2=()=>y.jsx(vD,{basename:"/Admin-MKT",children:y.jsx(dD,{children:y.jsxs(ms,{path:"/",element:y.jsx(KO,{}),children:[y.jsx(ms,{index:!0,element:y.jsx(zO,{children:y.jsx(BD,{})})}),y.jsx(ms,{path:"dashboard",element:y.jsx(uy,{children:y.jsx(jO,{})})}),y.jsx(ms,{path:"crear-tickets",element:y.jsx(uy,{children:y.jsx(t2,{})})})]})})});function r2(){return y.jsx(TN,{children:y.jsx(n2,{})})}Nc.createRoot(document.getElementById("root")).render(y.jsx(tn.StrictMode,{children:y.jsx(r2,{})}));
