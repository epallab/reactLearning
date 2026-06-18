var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function T(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?T(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var T=new MessageChannel,ie=T.port2;T.port1.onmessage=re,w=function(){ie.postMessage(null)}}else w=function(){_(re,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),T=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case T:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(bu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=h({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=h({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(h({},Ln,{dataTransfer:0})),Bn=kn(h({},Mn,{relatedTarget:0})),Vn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Hn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=kn(h({},An,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=kn(h({},Mn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=kn(h({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=kn(h({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),Qn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=kn(h({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),er=kn(h({},An,{newState:0,oldState:0})),tr=[9,13,27,32],nr=yn&&`CompositionEvent`in window,rr=null;yn&&`documentMode`in document&&(rr=document.documentMode);var k=yn&&`TextEvent`in window&&!rr,ir=yn&&(!nr||rr&&8<rr&&11>=rr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!nr&&sr(e,t)?(e=Tn(),wn=Cn=Sn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Ed(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Gt(Dt(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(yn){var xr;if(yn){var A=`oninput`in document;if(!A){var j=document.createElement(`div`);j.setAttribute(`oninput`,`return;`),A=typeof j.oninput==`function`}xr=A}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function M(){hr&&(hr.detachEvent(`onpropertychange`,N),gr=hr=null)}function N(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,fn(e)),_n(_r,t)}}function Sr(e,t,n){e===`focusin`?(M(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,N)):e===`focusout`&&M()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function wr(e,t){if(e===`click`)return vr(t)}function Tr(e,t){if(e===`input`||e===`change`)return vr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var P=typeof Object.is==`function`?Object.is:Er;function F(e,t){if(P(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!P(e[i],t[i]))return!1}return!0}function Dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Or(e,t){var n=Dr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Dr(n)}}function kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ar(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Mr=yn&&`documentMode`in document&&11>=document.documentMode,Nr=null,Pr=null,Fr=null,Ir=!1;function Lr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ir||Nr==null||Nr!==Kt(r)||(r=Nr,`selectionStart`in r&&jr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&F(Fr,r)||(Fr=r,r=Ed(Pr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var zr={animationend:Rr(`Animation`,`AnimationEnd`),animationiteration:Rr(`Animation`,`AnimationIteration`),animationstart:Rr(`Animation`,`AnimationStart`),transitionrun:Rr(`Transition`,`TransitionRun`),transitionstart:Rr(`Transition`,`TransitionStart`),transitioncancel:Rr(`Transition`,`TransitionCancel`),transitionend:Rr(`Transition`,`TransitionEnd`)},Br={},Vr={};yn&&(Vr=document.createElement(`div`).style,`AnimationEvent`in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),`TransitionEvent`in window||delete zr.transitionend.transition);function Hr(e){if(Br[e])return Br[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vr)return Br[e]=t[n];return e}var Ur=Hr(`animationend`),Wr=Hr(`animationiteration`),Gr=Hr(`animationstart`),Kr=Hr(`transitionrun`),qr=Hr(`transitionstart`),Jr=Hr(`transitioncancel`),Yr=Hr(`transitionend`),Xr=new Map,Zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Zr.push(`scrollEnd`);function Qr(e,t){Xr.set(e,t),Mt(t,[e])}var $r=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ei=[],ti=0,ni=0;function ri(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var r=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ii(e,t,n,r){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),ci(e)}function oi(e,t){return ii(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)fi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case T:return e=di(31,n,t,a),e.elementType=T,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=di(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=di(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=di(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-qe(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var Ii=null,I=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(Ii=e.return;Ii;)switch(Ii.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Ii=Ii.return}}function Ui(e){if(e!==Ii)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&I&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else t===27?(t=I,Zd(e.type)?(e=lf,lf=null,I=e):I=t):I=Ii?cf(e.stateNode.nextSibling):null;return!0}function Wi(){I=Ii=null,L=!1}function Gi(){var e=Li;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=pe(null),Ji=null,Yi=null;function Xi(e,t,n){O(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,me(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;P(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!P(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=E.S;E.S=function(e,t){eu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=pe(null);function xa(){var e=ba.current;return e===null?K.pooledCache:e}function Sa(e,t){t===null?O(ba,ba.current):O(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=hi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case w:return t=Aa(t),f(e,t,n)}if(le(t)||oe(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===S)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Aa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===S)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Aa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===S)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&ji(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&ji(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Aa(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===S)return b(e,r,ia(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ii(e,r,t,n),ci(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=pe(null),to=pe(0);function no(e,t){e=Wl,O(to,e),O(eo,t),Wl=e|t.baseLanes}function ro(){O(to,Wl),O(eo,eo.current)}function io(){Wl=to.current,me(eo),me(to)}var ao=pe(null),oo=null;function so(e){var t=e.alternate;O(R,R.current&1),O(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){O(R,R.current),O(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(O(R,R.current),O(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){O(R,R.current),O(ao,ao.current)}function fo(e){me(ao),oo===e&&(oo=null),me(R)}var R=pe(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!P(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){E.H=zs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ta(e)&&(ic=!0))}function Eo(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function H(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===S)return ra(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),B,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!P(o,e.memoizedState)&&(ic=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);P(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=z,a=H(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!P((B||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||mo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!P(e,n)}catch{return!0}}function Go(e){var t=oi(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,B,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(L){var n=K.formState;if(n!==null){a:{var r=z;if(L){if(I){b:{for(var i=I,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,z,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),B,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=B;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(z.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return P(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=xs(e,n,r),P(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Fs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,va(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,ue,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ra(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ai(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,P(s,o))return ii(e,t,i,0),K===null&&ri(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ai(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var zs={readContext:ra,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:ra,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=jo();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(L){var n=Ai,r=ki;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),B.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return B===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!F(n,r)||!F(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){$r(e)}function Ys(e){console.error(e)}function Xs(e){$r(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ga(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(L)return t=ao.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=$s(e.stateNode,r,a),Ja(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(L&&s&&Ni(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?F:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(F(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(co(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ea(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,oi(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,I=cf(s.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return na(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ha||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ha||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Wi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ca()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(R.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(L){if(a?so(t):uo(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(so(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ea(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,I=cf(c.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(R,o),ac(e,t,r,n),r=L?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ta(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(R,R.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,L&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Xa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=xi(Error(i(424)),t),Ki(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=cf(e.firstChild),Ii=t,L=!0,Li=null,Ri=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Ii=t,Ri=!0,a=I,Zd(t.type)?(lf=a,I=cf(r.firstChild)):I=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=I)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,Ii=t,I=cf(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,Ii=t,I=null,e=!0)),e||Bi(t)),null;case 13:return Cc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=xa(),a===null&&(a=K,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ja=Da,Ta}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=he.current,Ui(t)?Vi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=he.current,Ui(t))Vi(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ii,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Zi(t.type),U(t),null;case 19:if(me(R),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return O(R,R.current&1|2),L&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return U(t),null}else 2*Fe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=R.current,O(R,a?n&1|2:n&1),L&&ji(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(R),null;case 4:return be(),null;case 10:return Zi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&me(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Vc(e,t){switch(Pi(t),t.tag){case 3:Zi(la),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:me(R);break;case 10:Zi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&me(ba);break;case 24:Zi(la)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Ar(e),jr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?pt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||L){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912;return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Fe(),10<a)){if(yu(r,t,Jl,!Vl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Ml(t,a,d);var m=(a&62914560)===a?$l-Fe():(a&4194048)===a?eu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!P(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Yi=Ji=null,Ao(e),Pa=null,Fa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=pi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ri(),n}function Cu(e,t){z=null,E.H=zs,t===wa||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,xi(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(J&4194048)===J?oo===null:(J&62914560)===J||J&536870912?e===oo:!1}function Tu(){var e=E.H;return E.H=zs,e===null?zs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ao.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,ri()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Fe()+500,Su(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,ri(),X):0}function ju(){for(;q!==null&&!Ne();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=mi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Yi=Ji=null,Ao(t),Pa=null,Fa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,xi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,xi(n,e.current)),q=null;return}t.flags&32768?(L||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ni,st(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Ar(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&kr(s.ownerDocument.documentElement,s)){if(c!==null&&jr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Or(s,h),v=Or(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=xi(n,t),t=$s(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=xi(n,e),n=ec(2),r=Ka(t,n,2),r!==null&&(tc(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Fe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=oi(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Zr.length;hd++){var gd=Zr[hd];Qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Qr(Ur,`onAnimationEnd`),Qr(Wr,`onAnimationIteration`),Qr(Gr,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(Kr,`onTransitionRun`),Qr(qr,`onTransitionStart`),Qr(Jr,`onTransitionCancel`),Qr(Yr,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=Xr.get(e);if(c!==void 0){var l=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Yn;break;case`focusin`:u=`focus`,l=Bn;break;case`focusout`:u=`blur`,l=Bn;break;case`beforeblur`:case`afterblur`:l=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Zn;break;case Ur:case Wr:case Gr:l=Vn;break;case Yr:l=Qn;break;case`scroll`:case`scrollend`:l=Nn;break;case`wheel`:l=$n;break;case`copy`:case`cut`:case`paste`:l=Hn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Xn;break;case`toggle`:case`beforetoggle`:l=er}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=yr;else if(pr(c))if(br)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=yr):v=wr;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(Nr=y,Pr=r,Fr=null);break;case`focusout`:Fr=Pr=Nr=null;break;case`mousedown`:Ir=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ir=!1,Lr(s,n,i);break;case`selectionchange`:if(Mr)break;case`keydown`:case`keyup`:Lr(s,n,i)}var b;if(nr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Un(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=k?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Un(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=vn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,kt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=li,e):li}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=oi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/reactLearning/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=v(t,n),t in y)return;y[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:_,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),ee=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,S=/^[\\/]{2}/;function C(e,t){return t+e.replace(/\\/g,`/`)}var te=`popstate`;function ne(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function re(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=ce(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),oe(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:se(t))}function r(e,t){T(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return le(t,n,r,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ie(){return Math.random().toString(36).substring(2,10)}function ae(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function oe(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ce(t):t,state:n,key:t&&t.key||r||ie(),mask:i}}function se({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ce(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function le(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ne(e)?e:oe(h.location,e,t);n&&n(r,e),l=u()+1;let d=ae(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ne(e)?e:oe(h.location,e,t);n&&n(r,e),l=u();let i=ae(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return E(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(te,d),c=e,()=>{i.removeEventListener(te,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function E(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),w(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:se(t);return i=i.replace(/ $/,`%20`),!n&&S.test(i)&&(i=r+i),new URL(i,r)}function D(e,t,n=`/`){return ue(e,t,n,!1)}function ue(e,t,n,r,i){let a=ke((typeof t==`string`?ce(t):t).pathname||`/`,n);if(a==null)return null;let o=i??fe(e),s=null,c=Oe(a);for(let e=0;s==null&&e<o.length;++e)s=we(o[e],c,r);return s}function de(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function fe(e){let t=pe(e);return O(t),t}function pe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Le([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),pe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Se(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=De(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of me(e.path))a(e,t,!0,n)}),t}function me(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=me(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function O(e){e.sort((e,t)=>e.score===t.score?Ce(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var he=/^:[\w-]+$/,ge=3,_e=2,ve=1,ye=10,be=-2,xe=e=>e===`*`;function Se(e,t){let n=e.split(`/`),r=n.length;return n.some(xe)&&(r+=be),t&&(r+=_e),n.filter(e=>!xe(e)).reduce((e,t)=>e+(he.test(t)?ge:t===``?ve:ye),r)}function Ce(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function we(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ee(u,l,s.matcher,s.compiledParams):Te(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Te({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Le([a,d.pathname]),pathnameBase:ze(Le([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Le([a,d.pathnameBase]))}return o}function Te(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=De(e.path,e.caseSensitive,e.end);return Ee(e,t,n,r)}function Ee(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function De(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Oe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ke(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ae(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ce(e):e,a;return n?(n=Ie(n),a=n.startsWith(`/`)?je(n.substring(1),`/`):je(n,t)):a=t,{pathname:a,search:Be(r),hash:Ve(i)}}function je(e,t){let n=Re(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Me(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ne(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pe(e){let t=Ne(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Fe(e,t,n,r=!1){let i;typeof e==`string`?i=ce(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Me(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Me(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Me(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ae(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ie=e=>e.replace(/[\\/]{2,}/g,`/`),Le=e=>Ie(e.join(`/`)),Re=e=>e.replace(/\/+$/,``),ze=e=>Re(e).replace(/^\/*/,`/`),Be=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ve=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,He=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ue(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function We(e){return Le(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ge=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ke(e,t){let n=e;if(typeof n!=`string`||!ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ge)try{let e=new URL(window.location.href),r=S.test(n)?new URL(C(n,e.protocol)):new URL(n),a=ke(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{T(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var qe=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(qe);var Je=[`GET`,...qe];new Set(Je);var Ye=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Xe(e){try{return Ye.includes(new URL(e).protocol)}catch{return!1}}var Ze=x.createContext(null);Ze.displayName=`DataRouter`;var Qe=x.createContext(null);Qe.displayName=`DataRouterState`;var $e=x.createContext(!1);function et(){return x.useContext($e)}var tt=x.createContext({isTransitioning:!1});tt.displayName=`ViewTransition`;var nt=x.createContext(new Map);nt.displayName=`Fetchers`;var rt=x.createContext(null);rt.displayName=`Await`;var it=x.createContext(null);it.displayName=`Navigation`;var at=x.createContext(null);at.displayName=`Location`;var ot=x.createContext({outlet:null,matches:[],isDataRoute:!1});ot.displayName=`Route`;var st=x.createContext(null);st.displayName=`RouteError`;var ct=`REACT_ROUTER_ERROR`,lt=`REDIRECT`,ut=`ROUTE_ERROR_RESPONSE`;function dt(e){if(e.startsWith(`${ct}:${lt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ft(e){if(e.startsWith(`${ct}:${ut}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new He(t.status,t.statusText,t.data)}catch{}}function pt(e,{relative:t}={}){w(mt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(it),{hash:i,pathname:a,search:o}=bt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Le([n,a])),r.createHref({pathname:s,search:o,hash:i})}function mt(){return x.useContext(at)!=null}function ht(){return w(mt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(at).location}var gt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function _t(e){x.useContext(it).static||x.useLayoutEffect(e)}function vt(){let{isDataRoute:e}=x.useContext(ot);return e?zt():yt()}function yt(){w(mt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Ze),{basename:t,navigator:n}=x.useContext(it),{matches:r}=x.useContext(ot),{pathname:i}=ht(),a=JSON.stringify(Pe(r)),o=x.useRef(!1);return _t(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(T(o.current,gt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Fe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Le([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function bt(e,{relative:t}={}){let{matches:n}=x.useContext(ot),{pathname:r}=ht(),i=JSON.stringify(Pe(n));return x.useMemo(()=>Fe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function xt(e,t){return St(e,t)}function St(e,t,n){w(mt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(it),{matches:i}=x.useContext(ot),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Vt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ht(),d;if(t){let e=typeof t==`string`?ce(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):D(e,{pathname:p});T(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),T(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=kt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Le([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Le([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(at.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Ct(){let e=Rt(),t=Ue(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var wt=x.createElement(Ct,null),Tt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ft(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(ot.Provider,{value:this.props.routeContext},x.createElement(st.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(Dt,{error:e},t):t}};Tt.contextType=$e;var Et=new WeakMap;function Dt({children:e,error:t}){let{basename:n}=x.useContext(it);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=dt(t.digest);if(e){let r=Et.get(t);if(r)throw r;let i=Ke(e.location,n),a=i.absoluteURL||i.to;if(Xe(a))throw Error(`Invalid redirect location`);if(Ge&&!Et.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Et.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Ot({routeContext:e,match:t,children:n}){let r=x.useContext(Ze);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(ot.Provider,{value:e},n)}function kt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:We(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||wt,o&&(s<0&&c===0?(Vt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(Ot,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(Tt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function At(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jt(e){let t=x.useContext(Ze);return w(t,At(e)),t}function Mt(e){let t=x.useContext(Qe);return w(t,At(e)),t}function Nt(e){let t=x.useContext(ot);return w(t,At(e)),t}function Pt(e){let t=Nt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ft(){return Pt(`useRouteId`)}function It(){let e=Mt(`useNavigation`);return x.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function Lt(){let{matches:e,loaderData:t}=Mt(`useMatches`);return x.useMemo(()=>e.map(e=>de(e,t)),[e,t])}function Rt(){let e=x.useContext(st),t=Mt(`useRouteError`),n=Pt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function zt(){let{router:e}=jt(`useNavigate`),t=Pt(`useNavigate`),n=x.useRef(!1);return _t(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{T(n.current,gt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Bt={};function Vt(e,t,n){!t&&!Bt[e]&&(Bt[e]=!0,T(!1,n))}x.memo(Ht);function Ht({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return St(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Ut(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Wt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!mt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ce(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=ke(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return T(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(it.Provider,{value:c},x.createElement(at.Provider,{children:t,value:h}))}function Gt({children:e,location:t}){return xt(Kt(e),t)}x.Component;function Kt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Kt(e.props.children,i));return}w(e.type===Ut,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Kt(e.props.children,i)),n.push(a)}),n}var qt=`get`,Jt=`application/x-www-form-urlencoded`;function Yt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Xt(e){return Yt(e)&&e.tagName.toLowerCase()===`button`}function Zt(e){return Yt(e)&&e.tagName.toLowerCase()===`form`}function Qt(e){return Yt(e)&&e.tagName.toLowerCase()===`input`}function $t(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function en(e,t){return e.button===0&&(!t||t===`_self`)&&!$t(e)}var tn=null;function nn(){if(tn===null)try{new FormData(document.createElement(`form`),0),tn=!1}catch{tn=!0}return tn}var rn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function an(e){return e!=null&&!rn.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jt}"`),null):e}function on(e,t){let n,r,i,a,o;if(Zt(e)){let o=e.getAttribute(`action`);r=o?ke(o,t):null,n=e.getAttribute(`method`)||qt,i=an(e.getAttribute(`enctype`))||Jt,a=new FormData(e)}else if(Xt(e)||Qt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?ke(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||qt,i=an(e.getAttribute(`formenctype`))||an(o.getAttribute(`enctype`))||Jt,a=new FormData(o,e),!nn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Yt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=qt,r=null,i=Jt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var sn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},cn=/[&><\u2028\u2029]/g;function ln(e){return e.replace(cn,e=>sn[e])}function un(e,t){if(e===!1||e==null)throw Error(t)}function dn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&ke(i.pathname,t)===`/`?i.pathname=`${Re(t)}/_root.${r}`:i.pathname=`${Re(i.pathname)}.${r}`,i}async function fn(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pn(e){return e!=null&&typeof e.page==`string`}function mn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function hn(e,t,n){return bn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await fn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(mn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function gn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function _n(e,t,{includeHydrateFallback:n}={}){return vn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function vn(e){return[...new Set(e)]}function yn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function bn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!pn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(yn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function xn(){let e=x.useContext(Ze);return un(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Sn(){let e=x.useContext(Qe);return un(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Cn=x.createContext(void 0);Cn.displayName=`FrameworkContext`;function wn(){let e=x.useContext(Cn);return un(e,`You must render this element inside a <HydratedRouter> element`),e}function Tn(e,t){let n=x.useContext(Cn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:En(s,p),onBlur:En(c,m),onMouseEnter:En(l,p),onMouseLeave:En(u,m),onTouchStart:En(d,p)}]:[a,f,{}]:[!1,f,{}]}function En(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Dn({page:e,...t}){let n=et(),{nonce:r}=wn(),{router:i}=xn(),a=x.useMemo(()=>D(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(kn,{page:e,matches:a,...t}):x.createElement(An,{page:e,matches:a,...t})):null}function On(e){let{manifest:t,routeModules:n}=wn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return hn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function kn({page:e,matches:t,...n}){let r=ht(),{future:i}=wn(),{basename:a}=xn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=dn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function An({page:e,matches:t,...n}){let r=ht(),{future:i,manifest:a,routeModules:o}=wn(),{basename:s}=xn(),{loaderData:c,matches:l}=Sn(),u=x.useMemo(()=>gn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>gn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=dn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>_n(d,a),[d,a]),m=On(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function jn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var Mn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Mn&&(window.__reactRouterVersion=`7.18.0`)}catch{}function Nn({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=re({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Wt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function Pn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(Wt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}Pn.displayName=`unstable_HistoryRouter`;var Fn=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(it),v=typeof l==`string`&&ee.test(l),y=Ke(l,h);l=y.to;let b=pt(l,{relative:r}),S=ht(),C=null;if(o){let e=Fe(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Le([h,e.pathname])),C=g.createHref(e)}let[te,ne,re]=Tn(n,p),w=Hn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function T(t){e&&e(t),t.defaultPrevented||w(t)}let ie=!(y.isExternal||i),ae=x.createElement(`a`,{...p,...re,href:(ie?C:void 0)||y.absoluteURL||b,onClick:ie?T:e,ref:jn(m,ne),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return te&&!v?x.createElement(x.Fragment,null,ae,x.createElement(Dn,{page:b})):ae});Fn.displayName=`Link`;var In=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=bt(a,{relative:c.relative}),d=ht(),f=x.useContext(Qe),{navigator:p,basename:m}=x.useContext(it),h=f!=null&&Qn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=ke(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,ee=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:ee,isTransitioning:h},C=b?e:void 0,te;te=typeof n==`function`?n(S):[n,b?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return x.createElement(Fn,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});In.displayName=`NavLink`;var Ln=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=qt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(it),g=Gn(),_=Kn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&ee.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Ln.displayName=`Form`;function Rn({getKey:e,storageKey:t,...n}){let r=x.useContext(Cn),{basename:i}=x.useContext(it),a=ht(),o=Lt();Xn({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Yn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${ln(JSON.stringify(t||qn))}, ${ln(JSON.stringify(s))})`}})}Rn.displayName=`ScrollRestoration`;function zn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bn(e){let t=x.useContext(Ze);return w(t,zn(e)),t}function Vn(e){let t=x.useContext(Qe);return w(t,zn(e)),t}function Hn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=vt(),d=ht(),f=bt(e,{relative:o});return x.useCallback(p=>{if(en(p,t)){p.preventDefault();let t=n===void 0?se(d)===se(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Un=0,Wn=()=>`__${String(++Un)}__`;function Gn(){let{router:e}=Bn(`useSubmit`),{basename:t}=x.useContext(it),n=Ft(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=on(e,t);a.navigate===!1?await r(a.fetcherKey||Wn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Kn(e,{relative:t}={}){let{basename:n}=x.useContext(it),r=x.useContext(ot);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...bt(e||`.`,{relative:t})},o=ht();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Le([n,a.pathname])),se(a)}var qn=`react-router-scroll-positions`,Jn={};function Yn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:ke(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Xn({getKey:e,storageKey:t}={}){let{router:n}=Bn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Vn(`useScrollRestoration`),{basename:a}=x.useContext(it),o=ht(),s=Lt(),c=It();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Zn(x.useCallback(()=>{if(c.state===`idle`){let t=Yn(o,s,a,e);Jn[t]=window.scrollY}try{sessionStorage.setItem(t||qn,JSON.stringify(Jn))}catch(e){T(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||qn);e&&(Jn=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Jn,()=>window.scrollY,e?(t,n)=>Yn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{T(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Zn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Qn(e,{relative:t}={}){let n=x.useContext(tt);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Bn(`useViewTransitionState`),i=bt(e,{relative:t});if(!n.isTransitioning)return!1;let a=ke(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ke(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Te(i.pathname,o)!=null||Te(i.pathname,a)!=null}var $n=g(),er=[{id:`chapter-1`,number:`01`,title:`Scalable Components`,sectionLabel:`Key Responsibilities`,subs:[{id:`atomic-design`,number:`1.1`,title:`Atomic Design`},{id:`scalable-component-example`,number:`1.2`,title:`Full Component Example`},{id:`react-server-components`,number:`1.3`,title:`React Server Components (RSC)`},{id:`advanced-prop-patterns`,number:`1.4`,title:`Advanced Prop Patterns`}]},{id:`chapter-2`,number:`02`,title:`API Integration & Data Flow`,subs:[{id:`use-api-hook`,number:`2.1`,title:`Custom Hook: useApi`},{id:`axios-interceptors`,number:`2.2`,title:`Axios Interceptors`},{id:`state-management-server-data`,number:`2.3`,title:`State Mgmt for Server Data`},{id:`websockets-real-time`,number:`2.4`,title:`WebSockets & Real-Time`}]},{id:`chapter-3`,number:`03`,title:`Clean & Reusable Code`,subs:[{id:`custom-hooks`,number:`3.1`,title:`Custom Hooks Pattern`},{id:`compound-components`,number:`3.2`,title:`Compound Components`},{id:`higher-order-components`,number:`3.3`,title:`Higher-Order Components`},{id:`dependency-injection-context`,number:`3.4`,title:`DI via Context`}]},{id:`chapter-4`,number:`04`,title:`Performance & Lazy Loading`,subs:[{id:`lazy-loading`,number:`4.1`,title:`React.lazy & Suspense`},{id:`memoization`,number:`4.2`,title:`Memoization Patterns`},{id:`virtualization`,number:`4.3`,title:`Virtualization & Large Lists`},{id:`concurrent-features`,number:`4.4`,title:`React 18 Concurrent Features`}]},{id:`collaborating-with-designers`,number:`05`,title:`UI/UX Collaboration`,sectionLabel:`Skills & Expertise`,subs:[{id:`design-tokens-theming`,number:`5.1`,title:`Design Tokens & Theming`},{id:`responsive-design`,number:`5.2`,title:`Responsive Design`},{id:`accessibility-first`,number:`5.3`,title:`Accessibility (a11y) First`},{id:`micro-animations`,number:`5.4`,title:`Micro-Animations`}]},{id:`version-control-git`,number:`06`,title:`Version Control (Git)`,subs:[{id:`git-branching-strategy`,number:`6.1`,title:`Branching Strategy`},{id:`conventional-commits`,number:`6.2`,title:`Conventional Commits`},{id:`automated-checks-cicd`,number:`6.3`,title:`Automated Checks (CI/CD)`},{id:`advanced-git-techniques`,number:`6.4`,title:`Advanced Git Techniques`}]},{id:`debugging-troubleshooting`,number:`07`,title:`Debugging & Upgrading`,subs:[{id:`react-devtools-profiler`,number:`7.1`,title:`DevTools & Profiler`},{id:`error-boundaries-logging`,number:`7.2`,title:`Error Boundaries`},{id:`upgrading-react`,number:`7.3`,title:`Upgrading React Versions`},{id:`end-to-end-testing`,number:`7.4`,title:`End-to-End Testing`}]},{id:`skills-expertise-deep-dive`,number:`08`,title:`Skills Deep Dive`,subs:[{id:`javascript-es6-mastery`,number:`8.1`,title:`JavaScript ES6+`},{id:`react-hooks-state-management`,number:`8.2`,title:`Hooks & State Mgmt`},{id:`build-tools`,number:`8.3`,title:`Build Tools`},{id:`testing-strategy`,number:`8.4`,title:`Testing Strategy`},{id:`typescript-basics`,number:`8.5`,title:`TypeScript Basics`}]},{id:`react-19-features`,number:`09`,title:`React 19 & The Future`,sectionLabel:`The Cutting Edge`,subs:[{id:`react-compiler`,number:`9.1`,title:`The React Compiler`},{id:`server-actions`,number:`9.2`,title:`Server Actions`},{id:`use-hook`,number:`9.3`,title:`The new "use" Hook`},{id:`document-metadata`,number:`9.4`,title:`Document Metadata`}]},{id:`important-dsa`,number:`10`,title:`Important DSA in JavaScript`,sectionLabel:`Interview Prep`,subs:[{id:`dsa-arrays`,number:`10.1`,title:`Arrays & Hashing`},{id:`dsa-two-pointers`,number:`10.2`,title:`Two Pointers`},{id:`dsa-sliding-window`,number:`10.3`,title:`Sliding Window`},{id:`dsa-stack`,number:`10.4`,title:`Stack`},{id:`dsa-binary-search`,number:`10.5`,title:`Binary Search`},{id:`dsa-linked-list`,number:`10.6`,title:`Linked List`},{id:`dsa-trees`,number:`10.7`,title:`Trees`},{id:`dsa-graphs`,number:`10.8`,title:`Graphs`},{id:`dsa-dp`,number:`10.9`,title:`Dynamic Programming`}]}],tr=[{id:`sb-chapter-1`,number:`01`,title:`Spring Boot Fundamentals`,sectionLabel:`Getting Started`,subs:[{id:`spring-boot-intro`,number:`1.1`,title:`What is Spring Boot?`},{id:`project-setup`,number:`1.2`,title:`Project Setup & Initializr`},{id:`project-structure`,number:`1.3`,title:`Project Structure`},{id:`application-properties`,number:`1.4`,title:`Configuration`}]},{id:`sb-chapter-2`,number:`02`,title:`Spring Core — IoC & DI`,subs:[{id:`ioc-container`,number:`2.1`,title:`IoC Container`},{id:`dependency-injection`,number:`2.2`,title:`Dependency Injection`},{id:`bean-lifecycle`,number:`2.3`,title:`Bean Scopes & Lifecycle`},{id:`spring-profiles`,number:`2.4`,title:`Profiles & Conditionals`}]},{id:`sb-chapter-3`,number:`03`,title:`Building REST APIs`,subs:[{id:`rest-controller`,number:`3.1`,title:`@RestController & Mapping`},{id:`request-response`,number:`3.2`,title:`Request, Response & DTOs`},{id:`content-negotiation`,number:`3.3`,title:`Content Negotiation`},{id:`api-versioning`,number:`3.4`,title:`API Versioning & Docs`}]},{id:`sb-chapter-4`,number:`04`,title:`Data Access with JPA`,sectionLabel:`Data & Security`,subs:[{id:`jpa-entities`,number:`4.1`,title:`JPA Entities & Relations`},{id:`repositories`,number:`4.2`,title:`Spring Data Repositories`},{id:`pagination-sorting`,number:`4.3`,title:`Pagination & Sorting`},{id:`transactions`,number:`4.4`,title:`Transactions & Auditing`}]},{id:`sb-chapter-5`,number:`05`,title:`Spring Security`,subs:[{id:`security-fundamentals`,number:`5.1`,title:`Security Fundamentals`},{id:`jwt-authentication`,number:`5.2`,title:`JWT Authentication`},{id:`role-based-access`,number:`5.3`,title:`Role-Based Access`},{id:`oauth2-cors`,number:`5.4`,title:`OAuth2 & CORS`}]},{id:`sb-chapter-6`,number:`06`,title:`Exception Handling & Validation`,subs:[{id:`global-exception-handling`,number:`6.1`,title:`Global Exception Handling`},{id:`bean-validation`,number:`6.2`,title:`Bean Validation (JSR 380)`},{id:`custom-validators`,number:`6.3`,title:`Custom Validators`},{id:`error-response-patterns`,number:`6.4`,title:`Error Response Patterns`}]},{id:`sb-chapter-7`,number:`07`,title:`Testing Spring Boot`,sectionLabel:`Quality & Architecture`,subs:[{id:`unit-testing`,number:`7.1`,title:`JUnit 5 & Mockito`},{id:`integration-testing`,number:`7.2`,title:`Integration Testing`},{id:`slice-testing`,number:`7.3`,title:`Slice Testing`},{id:`testcontainers`,number:`7.4`,title:`TestContainers`}]},{id:`sb-chapter-8`,number:`08`,title:`Microservices Architecture`,subs:[{id:`microservices-patterns`,number:`8.1`,title:`Design Patterns`},{id:`service-discovery`,number:`8.2`,title:`Service Discovery`},{id:`api-gateway`,number:`8.3`,title:`API Gateway`},{id:`circuit-breaker`,number:`8.4`,title:`Circuit Breaker`}]},{id:`sb-chapter-9`,number:`09`,title:`Messaging & Events`,sectionLabel:`Advanced Topics`,subs:[{id:`spring-events`,number:`9.1`,title:`Application Events`},{id:`kafka-integration`,number:`9.2`,title:`Apache Kafka`},{id:`rabbitmq-integration`,number:`9.3`,title:`RabbitMQ`},{id:`async-processing`,number:`9.4`,title:`Async & Scheduling`}]},{id:`sb-chapter-10`,number:`10`,title:`Caching & Performance`,subs:[{id:`spring-cache`,number:`10.1`,title:`Cache Abstraction`},{id:`redis-caching`,number:`10.2`,title:`Redis Caching`},{id:`performance-tuning`,number:`10.3`,title:`Performance Tuning`},{id:`actuator-monitoring`,number:`10.4`,title:`Actuator & Monitoring`}]},{id:`sb-chapter-11`,number:`11`,title:`Deployment & CI/CD`,subs:[{id:`docker-containerization`,number:`11.1`,title:`Docker`},{id:`kubernetes-deployment`,number:`11.2`,title:`Kubernetes`},{id:`cicd-pipelines`,number:`11.3`,title:`CI/CD Pipelines`},{id:`profiles-environments`,number:`11.4`,title:`Environment Config`}]},{id:`sb-chapter-12`,number:`12`,title:`Advanced & Interview Prep`,sectionLabel:`Interview Ready`,subs:[{id:`design-patterns`,number:`12.1`,title:`Design Patterns in Spring`},{id:`transaction-deep-dive`,number:`12.2`,title:`Transaction Propagation`},{id:`aop-aspects`,number:`12.3`,title:`AOP & Aspects`},{id:`interview-questions`,number:`12.4`,title:`Interview Questions`}]}],nr=[{id:`culture-fundamentals`,title:`Culture & Fundamentals`,subs:[{id:`what-is-devops`,title:`What is DevOps?`,icon:`💡`},{id:`agile-lean`,title:`Agile & Lean Principles`,icon:`🔄`},{id:`devops-lifecycle`,title:`The DevOps Lifecycle`,icon:`♾️`}]},{id:`linux-basics`,title:`Linux Basics & Shell`,subs:[{id:`linux-architecture`,title:`Linux Architecture`,icon:`🐧`},{id:`file-system`,title:`File System & Permissions`,icon:`📁`},{id:`shell-scripting`,title:`Bash Scripting`,icon:`📜`},{id:`networking-basics`,title:`Networking Basics`,icon:`🌐`}]},{id:`version-control`,title:`Git & Version Control`,subs:[{id:`git-internals`,title:`Git Internals`,icon:`🧠`},{id:`branching-strategies`,title:`Branching Strategies`,icon:`🌿`},{id:`advanced-git`,title:`Advanced Git (Rebase, Cherry-Pick)`,icon:`🍒`}]},{id:`docker`,title:`Containerization (Docker)`,subs:[{id:`containers-vs-vms`,title:`Containers vs VMs`,icon:`📦`},{id:`dockerfile`,title:`Writing Dockerfiles`,icon:`🐳`},{id:`docker-compose`,title:`Docker Compose`,icon:`🐙`},{id:`docker-networking`,title:`Volumes & Networking`,icon:`🔌`}]},{id:`kubernetes`,title:`Orchestration (Kubernetes)`,subs:[{id:`k8s-architecture`,title:`K8s Architecture`,icon:`☸️`},{id:`pods-deployments`,title:`Pods & Deployments`,icon:`🏗️`},{id:`services-ingress`,title:`Services & Ingress`,icon:`🚪`},{id:`config-secrets`,title:`ConfigMaps & Secrets`,icon:`🔐`}]},{id:`ci-cd`,title:`CI/CD Pipelines`,subs:[{id:`ci-cd-concepts`,title:`Continuous Integration & Deployment`,icon:`🚀`},{id:`github-actions`,title:`GitHub Actions`,icon:`🐙`},{id:`jenkins-overview`,title:`Jenkins Overview`,icon:`🤵`}]},{id:`iac`,title:`Infrastructure as Code`,subs:[{id:`iac-principles`,title:`IaC Principles`,icon:`🏗️`},{id:`terraform-basics`,title:`Terraform Basics`,icon:`🌍`},{id:`state-management`,title:`State Management`,icon:`💾`}]},{id:`cloud-providers`,title:`Cloud Providers (AWS)`,subs:[{id:`cloud-computing`,title:`Cloud Computing Models (IaaS, PaaS)`,icon:`☁️`},{id:`aws-core`,title:`Core AWS Services (EC2, S3, VPC)`,icon:`🔶`},{id:`serverless`,title:`Serverless (Lambda)`,icon:`⚡`}]},{id:`observability`,title:`Monitoring & Observability`,subs:[{id:`metrics-logs-traces`,title:`Metrics, Logs, and Traces`,icon:`📊`},{id:`prometheus-grafana`,title:`Prometheus & Grafana`,icon:`📈`},{id:`elk-stack`,title:`ELK Stack (Elasticsearch)`,icon:`🔍`}]}],rr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),k=o(((e,t)=>{t.exports=rr()}))(),ir=[{id:`frontend`,path:`/frontend`,title:`Frontend`,subtitle:`React.js Developer Guide`,description:`Master scalable React interfaces, API integration, state management, performance patterns, and modern React 19 features.`,icon:`react`,chapters:er.length,topics:er.reduce((e,t)=>e+(t.subs?.length||0),0),accent:`#61dafb`,accentGlow:`rgba(97, 218, 251, 0.35)`,gradient:`linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0c3a4a 100%)`,available:!0},{id:`backend`,path:`/backend`,title:`Backend`,subtitle:`Java Spring Boot Guide`,description:`Build production-grade REST APIs, master Spring Security, JPA, microservices, testing, and deploy with Docker & Kubernetes.`,icon:`spring`,chapters:tr.length,topics:tr.reduce((e,t)=>e+(t.subs?.length||0),0),accent:`#6db33f`,accentGlow:`rgba(109, 179, 63, 0.35)`,gradient:`linear-gradient(135deg, #0a1a0a 0%, #122210 50%, #1a3018 100%)`,available:!0},{id:`devops`,path:`/devops`,title:`DevOps`,subtitle:`Infrastructure & Ops Guide`,description:`CI/CD pipelines, containerization, orchestration, cloud platforms, monitoring, and infrastructure as code.`,icon:`devops`,chapters:nr.length,topics:nr.reduce((e,t)=>e+(t.subs?.length||0),0),accent:`#f59e0b`,accentGlow:`rgba(245, 158, 11, 0.35)`,gradient:`linear-gradient(135deg, #1a1408 0%, #2a1f0a 50%, #3a2a0c 100%)`,available:!0}];function ar(){return(0,k.jsxs)(`svg`,{viewBox:`0 0 100 100`,xmlns:`http://www.w3.org/2000/svg`,className:`hub-track-icon`,children:[(0,k.jsx)(`circle`,{cx:`50`,cy:`50`,r:`8`,fill:`#61DAFB`}),(0,k.jsx)(`ellipse`,{cx:`50`,cy:`50`,rx:`45`,ry:`18`,fill:`none`,stroke:`#61DAFB`,strokeWidth:`2`}),(0,k.jsx)(`ellipse`,{cx:`50`,cy:`50`,rx:`45`,ry:`18`,fill:`none`,stroke:`#61DAFB`,strokeWidth:`2`,transform:`rotate(60 50 50)`}),(0,k.jsx)(`ellipse`,{cx:`50`,cy:`50`,rx:`45`,ry:`18`,fill:`none`,stroke:`#61DAFB`,strokeWidth:`2`,transform:`rotate(120 50 50)`})]})}function or(){return(0,k.jsxs)(`svg`,{viewBox:`0 0 100 100`,xmlns:`http://www.w3.org/2000/svg`,className:`hub-track-icon`,children:[(0,k.jsx)(`circle`,{cx:`50`,cy:`50`,r:`42`,fill:`none`,stroke:`#6db33f`,strokeWidth:`3`}),(0,k.jsx)(`path`,{d:`M73 27c-1 14-10 26-22 32 8-2 16-8 20-16-6 12-18 20-32 22 18-2 30-16 34-38z`,fill:`#6db33f`}),(0,k.jsx)(`path`,{d:`M30 62c4 5 12 10 20 10s18-6 22-14c-6 10-16 16-26 16-6 0-12-4-16-12z`,fill:`#6db33f`}),(0,k.jsx)(`circle`,{cx:`30`,cy:`68`,r:`4`,fill:`#6db33f`})]})}function sr(){return(0,k.jsxs)(`svg`,{viewBox:`0 0 100 100`,xmlns:`http://www.w3.org/2000/svg`,className:`hub-track-icon`,children:[(0,k.jsx)(`circle`,{cx:`50`,cy:`50`,r:`18`,fill:`none`,stroke:`#f59e0b`,strokeWidth:`3`}),(0,k.jsx)(`path`,{d:`M50 28v-10M50 82v-10M72 50h10M18 50h10`,stroke:`#f59e0b`,strokeWidth:`3`,strokeLinecap:`round`}),(0,k.jsx)(`path`,{d:`M65.6 34.4l7-7M27.4 72.6l7-7M65.6 65.6l7 7M27.4 27.4l7 7`,stroke:`#f59e0b`,strokeWidth:`3`,strokeLinecap:`round`}),(0,k.jsx)(`circle`,{cx:`50`,cy:`50`,r:`6`,fill:`#f59e0b`})]})}var cr={react:ar,spring:or,devops:sr};function lr(){return(0,k.jsxs)(`div`,{className:`hub`,children:[(0,k.jsx)(`div`,{className:`hub-bg-grid`,"aria-hidden":`true`}),(0,k.jsx)(`div`,{className:`hub-bg-glow`,"aria-hidden":`true`}),(0,k.jsxs)(`header`,{className:`hub-header`,children:[(0,k.jsx)(`div`,{className:`hub-badge`,children:`Developer Learning Platform`}),(0,k.jsxs)(`h1`,{className:`hub-title`,children:[`Master the `,(0,k.jsx)(`span`,{className:`hub-title-gradient`,children:`Full Stack`})]}),(0,k.jsx)(`p`,{className:`hub-subtitle`,children:`Comprehensive, production-ready guides for frontend, backend, and DevOps. Pick a track and start building real-world skills.`})]}),(0,k.jsx)(`div`,{className:`hub-tracks`,children:ir.map(e=>{let t=cr[e.icon],n=(0,k.jsxs)(`div`,{className:`hub-card ${e.available?``:`hub-card-disabled`}`,style:{"--card-accent":e.accent,"--card-glow":e.accentGlow,background:e.gradient},children:[(0,k.jsx)(`div`,{className:`hub-card-shine`}),(0,k.jsxs)(`div`,{className:`hub-card-content`,children:[(0,k.jsxs)(`div`,{className:`hub-card-icon-row`,children:[(0,k.jsx)(t,{}),!e.available&&(0,k.jsx)(`span`,{className:`hub-card-badge-soon`,children:`Coming Soon`})]}),(0,k.jsx)(`h2`,{className:`hub-card-title`,children:e.title}),(0,k.jsx)(`p`,{className:`hub-card-subtitle`,children:e.subtitle}),(0,k.jsx)(`p`,{className:`hub-card-desc`,children:e.description}),e.available&&(0,k.jsxs)(`div`,{className:`hub-card-stats`,children:[(0,k.jsxs)(`div`,{className:`hub-card-stat`,children:[(0,k.jsx)(`span`,{className:`hub-card-stat-value`,children:e.chapters}),(0,k.jsx)(`span`,{children:`Chapters`})]}),(0,k.jsxs)(`div`,{className:`hub-card-stat`,children:[(0,k.jsx)(`span`,{className:`hub-card-stat-value`,children:e.topics}),(0,k.jsx)(`span`,{children:`Topics`})]})]}),(0,k.jsx)(`div`,{className:`hub-card-cta`,children:e.available?(0,k.jsxs)(k.Fragment,{children:[`Start Learning`,(0,k.jsx)(`svg`,{viewBox:`0 0 20 20`,"aria-hidden":`true`,children:(0,k.jsx)(`path`,{d:`M11 4l6 6-6 6M3 10h13`})})]}):`Notify Me`})]})]});return e.available?(0,k.jsx)(Fn,{to:e.path,className:`hub-card-link`,children:n},e.id):(0,k.jsx)(`div`,{className:`hub-card-link`,children:n},e.id)})}),(0,k.jsx)(`footer`,{className:`hub-footer`,children:(0,k.jsx)(`p`,{children:`Built for developers who ship. Updated June 2026.`})})]})}function ur(){return(0,k.jsxs)(`svg`,{viewBox:`0 0 100 100`,"aria-hidden":`true`,children:[(0,k.jsx)(`circle`,{cx:`50`,cy:`50`,r:`8`,fill:`#61DAFB`}),(0,k.jsx)(`ellipse`,{cx:`50`,cy:`50`,rx:`45`,ry:`18`,fill:`none`,stroke:`#61DAFB`,strokeWidth:`2.5`}),(0,k.jsx)(`ellipse`,{cx:`50`,cy:`50`,rx:`45`,ry:`18`,fill:`none`,stroke:`#61DAFB`,strokeWidth:`2.5`,transform:`rotate(60 50 50)`}),(0,k.jsx)(`ellipse`,{cx:`50`,cy:`50`,rx:`45`,ry:`18`,fill:`none`,stroke:`#61DAFB`,strokeWidth:`2.5`,transform:`rotate(120 50 50)`})]})}function dr(){return(0,k.jsxs)(`svg`,{viewBox:`0 0 100 100`,"aria-hidden":`true`,children:[(0,k.jsx)(`circle`,{cx:`50`,cy:`50`,r:`42`,fill:`none`,stroke:`#6db33f`,strokeWidth:`3`}),(0,k.jsx)(`path`,{d:`M73 27c-1 14-10 26-22 32 8-2 16-8 20-16-6 12-18 20-32 22 18-2 30-16 34-38z`,fill:`#6db33f`}),(0,k.jsx)(`path`,{d:`M30 62c4 5 12 10 20 10s18-6 22-14c-6 10-16 16-26 16-6 0-12-4-16-12z`,fill:`#6db33f`}),(0,k.jsx)(`circle`,{cx:`30`,cy:`68`,r:`4`,fill:`#6db33f`})]})}var fr={react:ur,spring:dr};function pr({chapters:e,activeId:t,isOpen:n,onToggle:r,isDark:i,onToggleTheme:a,brandConfig:o}){let s=(0,x.useCallback)((e,t)=>{e.preventDefault();let n=document.querySelector(`[data-section-id="${t}"]`);n&&(n.scrollIntoView({behavior:`smooth`,block:`start`}),window.history.replaceState(null,``,`#${t}`)),window.innerWidth<1024&&r()},[r]),c=fr[o?.icon]||ur,l=o?.accent||`#61dafb`;return(0,k.jsxs)(`nav`,{className:`sidebar ${n?`open`:``}`,style:{"--sidebar-accent":l},children:[(0,k.jsxs)(`div`,{className:`sidebar-brand`,children:[(0,k.jsx)(c,{}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`div`,{className:`sidebar-brand-text`,children:o?.title||`Developer Guide`}),(0,k.jsx)(`div`,{className:`sidebar-brand-sub`,children:o?.subtitle||`Comprehensive Guide`})]}),(0,k.jsx)(`button`,{className:`theme-toggle`,onClick:a,type:`button`,"aria-label":`Toggle dark mode`,children:i?(0,k.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,k.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,k.jsx)(`path`,{d:`M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41`})]}):(0,k.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,k.jsx)(`path`,{d:`M21 12.8A8.4 8.4 0 1111.2 3 6.6 6.6 0 0021 12.8z`})})})]}),(0,k.jsxs)(Fn,{to:`/`,className:`sidebar-back-hub`,onClick:()=>{window.innerWidth<1024&&r()},children:[(0,k.jsx)(`svg`,{viewBox:`0 0 20 20`,"aria-hidden":`true`,children:(0,k.jsx)(`path`,{d:`M9 16l-6-6 6-6M17 10H4`})}),`Back to Hub`]}),(0,k.jsx)(`div`,{className:`sidebar-nav`,children:e.map((e,n)=>(0,k.jsxs)(`div`,{children:[e.sectionLabel&&(0,k.jsxs)(k.Fragment,{children:[n>0&&(0,k.jsx)(`div`,{className:`sidebar-divider`}),(0,k.jsx)(`span`,{className:`sidebar-section-label`,children:e.sectionLabel})]}),!e.sectionLabel&&n>0&&(0,k.jsx)(`div`,{className:`sidebar-divider`}),(0,k.jsxs)(`a`,{href:`#${e.id}`,className:`sidebar-link ${t===e.id?`active`:``}`,onClick:t=>s(t,e.id),"aria-current":t===e.id?`location`:void 0,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&s(t,e.id)},children:[(0,k.jsx)(`span`,{className:`sb-num`,children:e.number}),(0,k.jsx)(`span`,{children:e.title})]}),e.subs&&e.subs.map(e=>(0,k.jsxs)(`a`,{href:`#${e.id}`,className:`sidebar-link sb-sub ${t===e.id?`active`:``}`,onClick:t=>s(t,e.id),"aria-current":t===e.id?`location`:void 0,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&s(t,e.id)},children:[(0,k.jsx)(`span`,{className:`sb-num`,children:e.number}),(0,k.jsx)(`span`,{children:e.title})]},e.id))]},e.id))})]})}function mr({children:e,chapters:t,brandConfig:n}){let[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(``),[s,c]=(0,x.useState)(0),[l,u]=(0,x.useState)(!1),[d,f]=(0,x.useState)(()=>localStorage.getItem(`theme`)===`dark`);(0,x.useEffect)(()=>{document.documentElement.setAttribute(`data-theme`,d?`dark`:`light`),localStorage.setItem(`theme`,d?`dark`:`light`)},[d]),(0,x.useEffect)(()=>(document.body.classList.toggle(`nav-open`,r),()=>document.body.classList.remove(`nav-open`)),[r]),(0,x.useEffect)(()=>{if(!r)return;let e=e=>{e.key===`Escape`&&i(!1)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[r]),(0,x.useEffect)(()=>{let e=()=>{let e=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight;c(t>0?e/t*100:0),u(e>600)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,x.useEffect)(()=>{let e=document.querySelectorAll(`[data-section-id]`),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&o(e.target.getAttribute(`data-section-id`))})},{rootMargin:`-80px 0px -70% 0px`,threshold:0});return e.forEach(e=>t.observe(e)),()=>t.disconnect()},[]),(0,x.useEffect)(()=>{if(!window.location.hash)return;let e=decodeURIComponent(window.location.hash.slice(1)),t=window.setTimeout(()=>{let t=document.getElementById(e);t&&t.scrollIntoView({block:`start`})},0);return()=>window.clearTimeout(t)},[]),(0,x.useEffect)(()=>{window.scrollTo(0,0)},[]);let p=(0,x.useCallback)(()=>{window.scrollTo({top:0,behavior:`smooth`})},[]),m=(0,x.useCallback)(()=>{i(e=>!e)},[]),h=(0,x.useCallback)(()=>{i(!1)},[]),g=(0,x.useCallback)(()=>{f(e=>!e)},[]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`a`,{className:`skip-link`,href:`#content`,children:`Skip to content`}),(0,k.jsx)(`div`,{className:`progress-bar`,style:{width:`${s}%`},role:`progressbar`,"aria-valuenow":Math.round(s),"aria-valuemin":0,"aria-valuemax":100,"aria-label":`Reading progress`}),(0,k.jsxs)(`button`,{className:`sidebar-toggle ${r?`active`:``}`,onClick:m,type:`button`,"aria-expanded":r,"aria-label":`Toggle navigation`,children:[(0,k.jsxs)(`svg`,{className:`menu-icon`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,k.jsx)(`line`,{x1:`3`,y1:`6`,x2:`21`,y2:`6`}),(0,k.jsx)(`line`,{x1:`3`,y1:`12`,x2:`21`,y2:`12`}),(0,k.jsx)(`line`,{x1:`3`,y1:`18`,x2:`21`,y2:`18`})]}),(0,k.jsxs)(`svg`,{className:`close-icon`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,k.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`}),(0,k.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`})]})]}),r&&(0,k.jsx)(`div`,{className:`sidebar-overlay`,onClick:h,"aria-hidden":`true`}),(0,k.jsx)(pr,{chapters:t,activeId:a,isOpen:r,onToggle:h,isDark:d,onToggleTheme:g,brandConfig:n}),(0,k.jsx)(`main`,{className:`main-content`,id:`content`,tabIndex:-1,children:e}),l&&(0,k.jsx)(`button`,{className:`back-to-top`,onClick:p,type:`button`,"aria-label":`Back to top`,children:(0,k.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,k.jsx)(`path`,{d:`M12 19V5M5 12l7-7 7 7`})})})]})}var hr={cyan:{logo:`react`,badgeBg:`rgba(97, 218, 251, 0.13)`,badgeBorder:`rgba(97, 218, 251, 0.28)`,badgeColor:`#b8f3ff`,btnBg:`#61dafb`,btnColor:`#07111f`,btnShadow:`rgba(97, 218, 251, 0.22)`,metaLabel:`React Ready`},green:{logo:`spring`,badgeBg:`rgba(109, 179, 63, 0.13)`,badgeBorder:`rgba(109, 179, 63, 0.28)`,badgeColor:`#c5e8a8`,btnBg:`#6db33f`,btnColor:`#0a1a0a`,btnShadow:`rgba(109, 179, 63, 0.22)`,metaLabel:`Production Ready`},amber:{logo:`spring`,badgeBg:`rgba(217, 119, 6, 0.13)`,badgeBorder:`rgba(217, 119, 6, 0.28)`,badgeColor:`#fcd34d`,btnBg:`#d97706`,btnColor:`#1c1917`,btnShadow:`rgba(217, 119, 6, 0.22)`,metaLabel:`Concept Ready`}};function gr(){return(0,k.jsxs)(`svg`,{className:`react-logo`,viewBox:`0 0 100 100`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,k.jsx)(`circle`,{cx:`50`,cy:`50`,r:`8`,fill:`#61DAFB`}),(0,k.jsx)(`ellipse`,{cx:`50`,cy:`50`,rx:`45`,ry:`18`,fill:`none`,stroke:`#61DAFB`,strokeWidth:`2`}),(0,k.jsx)(`ellipse`,{cx:`50`,cy:`50`,rx:`45`,ry:`18`,fill:`none`,stroke:`#61DAFB`,strokeWidth:`2`,transform:`rotate(60 50 50)`}),(0,k.jsx)(`ellipse`,{cx:`50`,cy:`50`,rx:`45`,ry:`18`,fill:`none`,stroke:`#61DAFB`,strokeWidth:`2`,transform:`rotate(120 50 50)`})]})}function _r(){return(0,k.jsxs)(`svg`,{className:`react-logo spring-logo`,viewBox:`0 0 100 100`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,k.jsx)(`circle`,{cx:`50`,cy:`50`,r:`42`,fill:`none`,stroke:`#6db33f`,strokeWidth:`3`}),(0,k.jsx)(`path`,{d:`M73 27c-1 14-10 26-22 32 8-2 16-8 20-16-6 12-18 20-32 22 18-2 30-16 34-38z`,fill:`#6db33f`}),(0,k.jsx)(`path`,{d:`M30 62c4 5 12 10 20 10s18-6 22-14c-6 10-16 16-26 16-6 0-12-4-16-12z`,fill:`#6db33f`}),(0,k.jsx)(`circle`,{cx:`30`,cy:`68`,r:`4`,fill:`#6db33f`})]})}var vr={react:gr,spring:_r};function yr({chapters:e,config:t}){let n=hr[t.accent]||hr.cyan,r=vr[n.logo]||gr,i=e.reduce((e,t)=>e+(t.subs?.length||0),0),a=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})};return(0,k.jsx)(`section`,{className:`cover-page`,id:`top`,style:{background:`${t.accent===`green`?`linear-gradient(115deg, rgba(8, 20, 10, 0.96) 0%, rgba(14, 32, 18, 0.92) 54%, rgba(22, 56, 28, 0.82) 100%)`:`linear-gradient(115deg, rgba(10, 17, 30, 0.96) 0%, rgba(16, 29, 45, 0.92) 54%, rgba(14, 62, 72, 0.82) 100%)`}, #101d2d`},children:(0,k.jsxs)(`div`,{className:`cover-content`,children:[(0,k.jsx)(r,{}),(0,k.jsx)(`div`,{className:`cover-badge`,style:{background:n.badgeBg,borderColor:n.badgeBorder,color:n.badgeColor},children:t.badge}),(0,k.jsx)(`h1`,{className:`cover-title`,children:t.title}),(0,k.jsx)(`p`,{className:`cover-subtitle`,children:t.subtitle}),(0,k.jsxs)(`div`,{className:`cover-actions`,"aria-label":`Guide shortcuts`,children:[(0,k.jsxs)(`button`,{type:`button`,className:`cover-action primary`,onClick:()=>a(t.firstChapterId),style:{background:n.btnBg,color:n.btnColor,boxShadow:`0 12px 30px ${n.btnShadow}`},children:[`Start reading`,(0,k.jsx)(`svg`,{viewBox:`0 0 20 20`,"aria-hidden":`true`,children:(0,k.jsx)(`path`,{d:`M11 4l6 6-6 6M3 10h13`})})]}),(0,k.jsx)(`button`,{type:`button`,className:`cover-action secondary`,onClick:()=>a(`table-of-contents`),children:`View contents`})]}),(0,k.jsxs)(`div`,{className:`cover-meta`,children:[(0,k.jsxs)(`div`,{className:`cover-meta-item`,children:[(0,k.jsx)(`span`,{className:`cover-meta-value`,children:e.length}),(0,k.jsx)(`span`,{children:`Chapters`})]}),(0,k.jsxs)(`div`,{className:`cover-meta-item`,children:[(0,k.jsx)(`span`,{className:`cover-meta-value`,children:i}),(0,k.jsx)(`span`,{children:`Topics`})]}),(0,k.jsxs)(`div`,{className:`cover-meta-item`,children:[(0,k.jsx)(`span`,{className:`cover-meta-value`,style:{color:n.btnBg},children:t.accent===`green`?`Java 21`:`19`}),(0,k.jsx)(`span`,{children:n.metaLabel})]})]})]})})}function br({chapters:e}){let t=e.reduce((e,t)=>e+(t.subs?.length||0),0),n=(e,t)=>{e.preventDefault();let n=document.getElementById(t);n&&(n.scrollIntoView({behavior:`smooth`,block:`start`}),window.history.replaceState(null,``,`#${t}`))};return(0,k.jsxs)(`nav`,{className:`toc`,id:`table-of-contents`,"aria-labelledby":`toc-title`,children:[(0,k.jsxs)(`div`,{className:`toc-heading`,children:[(0,k.jsxs)(`span`,{className:`toc-eyebrow`,children:[e.length,` chapters / `,t,` topics`]}),(0,k.jsx)(`h2`,{id:`toc-title`,children:`Table of Contents`})]}),(0,k.jsx)(`ul`,{className:`toc-list`,children:e.map(e=>(0,k.jsxs)(`li`,{children:[(0,k.jsxs)(`a`,{className:`toc-item`,href:`#${e.id}`,onClick:t=>n(t,e.id),children:[(0,k.jsx)(`span`,{className:`toc-number`,children:e.number}),(0,k.jsx)(`span`,{className:`toc-title`,children:e.fullTitle||e.title})]}),e.subs?.map(e=>(0,k.jsxs)(`a`,{className:`toc-item toc-sub`,href:`#${e.id}`,onClick:t=>n(t,e.id),children:[(0,k.jsx)(`span`,{className:`toc-number`,children:e.number}),(0,k.jsx)(`span`,{className:`toc-title`,children:e.fullTitle||e.title})]},e.id))]},e.id))})]})}function xr({chapters:e,trackName:t}){let n=e.reduce((e,t)=>e+(t.subs?.length||0),0);return(0,k.jsxs)(`footer`,{className:`doc-footer`,children:[(0,k.jsx)(`p`,{children:(0,k.jsxs)(`strong`,{children:[t,` - Comprehensive Guide`]})}),(0,k.jsxs)(`p`,{children:[e.length,` chapters, `,n,` focused topics, and production-ready examples.`]}),(0,k.jsx)(`p`,{children:`Generated June 2026`})]})}function A({id:e,number:t,title:n,theme:r=`blue`,children:i}){return(0,k.jsxs)(`div`,{className:`section theme-${r}`,id:e,"data-section-id":e,children:[(0,k.jsxs)(`div`,{className:`section-header`,children:[(0,k.jsxs)(`span`,{className:`section-number`,children:[`Chapter `,t]}),(0,k.jsx)(`h2`,{className:`section-title`,children:n})]}),i]})}function j({id:e,icon:t,iconBg:n,iconColor:r,title:i,children:a}){return(0,k.jsxs)(`div`,{id:e,className:`subsection`,"data-section-id":e,children:[(0,k.jsxs)(`h3`,{className:`subsection-title`,children:[(0,k.jsx)(`span`,{className:`icon`,style:{background:n,color:r},children:t}),i]}),a]})}function M({filename:e,language:t,children:n}){let[r,i]=(0,x.useState)(!1);return(0,k.jsxs)(`div`,{className:`code-block-wrapper`,children:[e&&(0,k.jsxs)(`div`,{className:`file-header`,children:[(0,k.jsx)(`span`,{className:`file-dot dot-red`}),(0,k.jsx)(`span`,{className:`file-dot dot-yellow`}),(0,k.jsx)(`span`,{className:`file-dot dot-green`}),(0,k.jsx)(`span`,{className:`file-name`,children:e}),(0,k.jsx)(`button`,{className:`copy-btn`,onClick:async()=>{let e=(typeof n==`string`?n:``).replace(/<[^>]*>/g,``);await navigator.clipboard.writeText(e),i(!0),setTimeout(()=>i(!1),2e3)},children:r?`✓ Copied`:`Copy`})]}),(0,k.jsxs)(`pre`,{className:e?`has-header`:``,children:[t&&(0,k.jsx)(`span`,{className:`lang-tag`,children:t}),typeof n==`string`&&n.includes(`<span class=`)?(0,k.jsx)(`code`,{dangerouslySetInnerHTML:{__html:n}}):(0,k.jsx)(`code`,{children:n})]})]})}function N({type:e=`note`,title:t,children:n}){return(0,k.jsxs)(`div`,{className:`info-box ${e}`,children:[t&&(0,k.jsx)(`div`,{className:`info-box-title`,children:t}),n]})}function Sr({title:e,children:t}){return(0,k.jsxs)(`div`,{className:`diagram-box`,children:[e&&(0,k.jsx)(`div`,{className:`diagram-title`,children:e}),t]})}function Cr({children:e,style:t}){return(0,k.jsx)(`div`,{className:`flow-row`,style:t,children:e})}function wr({children:e,variant:t,style:n}){return(0,k.jsx)(`div`,{className:`flow-box ${t||``}`,style:n,children:e})}function Tr({children:e=`→`}){return(0,k.jsx)(`span`,{className:`flow-arrow`,children:e})}var Er=()=>(0,k.jsxs)(A,{id:`chapter-1`,number:1,title:`Scalable Front-End Components with React.js`,theme:`blue`,children:[(0,k.jsx)(`p`,{children:`Building scalable front-end applications requires a deep understanding of component architecture. React's component model gives you the building blocks, but without a clear strategy, even a well-intentioned codebase can become a tangled mess of tightly coupled components, duplicated logic, and unpredictable rendering behavior. This chapter teaches you how to think in components — from atomic design principles to battle-tested folder structures — so your apps stay maintainable as they grow from prototype to production.`}),(0,k.jsx)(`h3`,{children:`Core Principles of Scalable Components`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Single Responsibility Principle (SRP):`}),` Each component should do one thing and do it well. If a component is handling form validation, API calls, and rendering UI, it's doing too much.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Composition over Configuration:`}),` Prefer composing small, focused components together rather than building monolithic components with dozens of props. Composition is more flexible and easier to test.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Controlled vs Uncontrolled:`}),` Decide early whether a component manages its own state (uncontrolled) or receives it via props (controlled). Controlled components are more predictable and testable.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Props API Design:`}),` Think of your component's props as its public API. It should be intuitive, well-documented, and backwards-compatible. Avoid boolean props when an enum would be clearer.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Presentational vs Container:`}),` Separate your UI rendering logic (presentational) from your data-fetching and state management logic (container). This makes components reusable across different data sources.`]})]}),(0,k.jsxs)(N,{type:`note`,title:`Real-World Impact`,children:[`Companies like `,(0,k.jsx)(`strong`,{children:`Airbnb`}),`, `,(0,k.jsx)(`strong`,{children:`Shopify`}),`, and `,(0,k.jsx)(`strong`,{children:`Netflix`}),` have open-sourced their component design systems. Airbnb's DLS (Design Language System) enforces consistent component patterns across 50+ teams. Shopify's Polaris provides reusable components that power thousands of merchant storefronts. These are proof that investing in component architecture pays off at scale.`]}),(0,k.jsxs)(j,{id:`atomic-design`,icon:`🧬`,iconBg:`#e8f0fe`,iconColor:`#1a73e8`,title:`1.1 Atomic Design & Component Architecture`,children:[(0,k.jsx)(`p`,{children:`Atomic Design is a methodology created by Brad Frost that breaks user interfaces down into five distinct levels. It provides a mental model for thinking about UI construction in a hierarchical, composable way — perfectly aligned with React's component model.`}),(0,k.jsx)(Sr,{children:(0,k.jsxs)(Cr,{children:[(0,k.jsx)(wr,{children:`Atoms`}),(0,k.jsx)(Tr,{}),(0,k.jsx)(wr,{children:`Molecules`}),(0,k.jsx)(Tr,{}),(0,k.jsx)(wr,{children:`Organisms`}),(0,k.jsx)(Tr,{}),(0,k.jsx)(wr,{children:`Templates`}),(0,k.jsx)(Tr,{}),(0,k.jsx)(wr,{children:`Pages`})]})}),(0,k.jsx)(`h4`,{children:`Understanding Each Level`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Atoms:`}),` The smallest building blocks — buttons, inputs, labels, icons. They can't be broken down further without losing meaning. In React, these are your base components like `,(0,k.jsx)(`code`,{children:`<Button>`}),`, `,(0,k.jsx)(`code`,{children:`<Input>`}),`, `,(0,k.jsx)(`code`,{children:`<Avatar>`}),`.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Molecules:`}),` Groups of atoms working together as a unit. A search form (input + button) or a labeled input (label + input + error text) are molecules. They have a single responsibility but are composed of multiple atoms.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Organisms:`}),` Complex UI sections made up of molecules and atoms. A navigation bar, a product card grid, or a comment section. Organisms form distinct sections of an interface.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Templates:`}),` Page-level layout structures that define where organisms are placed. Templates are concerned with layout and content structure, not actual data.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Pages:`}),` Specific instances of templates filled with real content and data. This is where your app connects to APIs and renders actual user-facing screens.`]})]}),(0,k.jsx)(N,{type:`tip`,title:`Co-locate Component Files`,children:`Keep your component's styles, tests, and stories next to the component file itself. This co-location pattern makes it easy to find everything related to a component and simplifies refactoring. When you delete a component, you delete the entire folder — no orphaned files.`}),(0,k.jsx)(M,{filename:`Recommended Folder Structure`,language:`bash`,children:`<span class="cm">src/</span>
├── <span class="fn">components/</span>
│   ├── <span class="fn">atoms/</span>
│   │   ├── <span class="fn">Button/</span>
│   │   │   ├── Button.jsx
│   │   │   ├── Button.module.css
│   │   │   ├── Button.test.jsx
│   │   │   └── index.js
│   │   ├── <span class="fn">Input/</span>
│   │   └── <span class="fn">Avatar/</span>
│   ├── <span class="fn">molecules/</span>
│   │   ├── <span class="fn">SearchBar/</span>
│   │   └── <span class="fn">FormField/</span>
│   ├── <span class="fn">organisms/</span>
│   │   ├── <span class="fn">Navbar/</span>
│   │   └── <span class="fn">ProductGrid/</span>
│   └── <span class="fn">templates/</span>
│       └── <span class="fn">DashboardLayout/</span>
├── <span class="fn">pages/</span>
│   ├── Home.jsx
│   └── Dashboard.jsx
├── <span class="fn">hooks/</span>
├── <span class="fn">utils/</span>
└── <span class="fn">services/</span>`})]}),(0,k.jsxs)(j,{id:`scalable-component-example`,icon:`🏗️`,iconBg:`#e8f0fe`,iconColor:`#1a73e8`,title:`1.2 Building a Scalable Component: Full Example`,children:[(0,k.jsx)(`p`,{children:`Let's build a production-quality Button component that demonstrates all the principles we've discussed. This button supports multiple variants, sizes, loading states, and icon placement.`}),(0,k.jsx)(`h4`,{children:`Key Design Decisions`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Variant prop (enum):`}),` Instead of boolean props like `,(0,k.jsx)(`code`,{children:`isPrimary`}),`,`,(0,k.jsx)(`code`,{children:`isSecondary`}),`, we use a single `,(0,k.jsx)(`code`,{children:`variant`}),` prop. This prevents invalid states (what happens if both are true?) and makes the API cleaner.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Polymorphic rendering:`}),` The `,(0,k.jsx)(`code`,{children:`as`}),` prop lets the button render as a different element (like an anchor tag) while keeping the same styles. This is essential for accessibility.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Forwarded refs:`}),` Using `,(0,k.jsx)(`code`,{children:`React.forwardRef`}),` ensures parent components can access the underlying DOM node for focus management, measurements, or animations.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Rest props spreading:`}),` The `,(0,k.jsx)(`code`,{children:`...rest`}),` pattern passes through any additional HTML attributes (like `,(0,k.jsx)(`code`,{children:`aria-label`}),`, `,(0,k.jsx)(`code`,{children:`data-testid`}),`) without explicitly defining them.`]})]}),(0,k.jsx)(M,{filename:`Button.jsx`,language:`jsx`,children:`<span class="kw">import</span> React <span class="kw">from</span> <span class="str">'react'</span>;
<span class="kw">import</span> styles <span class="kw">from</span> <span class="str">'./Button.module.css'</span>;

<span class="kw">const</span> <span class="fn">Button</span> <span class="op">=</span> React.<span class="fn">forwardRef</span>(({
  children,
  variant <span class="op">=</span> <span class="str">'primary'</span>,
  size <span class="op">=</span> <span class="str">'medium'</span>,
  isLoading <span class="op">=</span> <span class="bool">false</span>,
  disabled <span class="op">=</span> <span class="bool">false</span>,
  leftIcon,
  rightIcon,
  as: Component <span class="op">=</span> <span class="str">'button'</span>,
  className,
  ...rest
}, ref) <span class="kw">=&gt;</span> {
  <span class="kw">const</span> classNames <span class="op">=</span> [
    styles.button,
    styles[variant],
    styles[size],
    isLoading <span class="op">&amp;&amp;</span> styles.loading,
    className
  ].<span class="fn">filter</span>(<span class="fn">Boolean</span>).<span class="fn">join</span>(<span class="str">' '</span>);

  <span class="kw">return</span> (
    <span class="tag">&lt;Component</span>
      <span class="attr">ref</span><span class="op">=</span>{ref}
      <span class="attr">className</span><span class="op">=</span>{classNames}
      <span class="attr">disabled</span><span class="op">=</span>{disabled <span class="op">||</span> isLoading}
      {...rest}
    <span class="tag">&gt;</span>
      {isLoading <span class="op">&amp;&amp;</span> <span class="tag">&lt;span</span> <span class="attr">className</span><span class="op">=</span>{styles.spinner} <span class="tag">/&gt;</span>}
      {leftIcon <span class="op">&amp;&amp;</span> <span class="tag">&lt;span</span> <span class="attr">className</span><span class="op">=</span>{styles.icon}<span class="tag">&gt;</span>{leftIcon}<span class="tag">&lt;/span&gt;</span>}
      <span class="tag">&lt;span&gt;</span>{children}<span class="tag">&lt;/span&gt;</span>
      {rightIcon <span class="op">&amp;&amp;</span> <span class="tag">&lt;span</span> <span class="attr">className</span><span class="op">=</span>{styles.icon}<span class="tag">&gt;</span>{rightIcon}<span class="tag">&lt;/span&gt;</span>}
    <span class="tag">&lt;/Component&gt;</span>
  );
});

Button.displayName <span class="op">=</span> <span class="str">'Button'</span>;

<span class="kw">export default</span> Button;`}),(0,k.jsx)(M,{filename:`Button.module.css`,language:`css`,children:`<span class="fn">.button</span> {
  <span class="attr">display</span>: <span class="str">inline-flex</span>;
  <span class="attr">align-items</span>: <span class="str">center</span>;
  <span class="attr">justify-content</span>: <span class="str">center</span>;
  <span class="attr">gap</span>: <span class="num">0.5rem</span>;
  <span class="attr">border</span>: <span class="str">none</span>;
  <span class="attr">border-radius</span>: <span class="num">8px</span>;
  <span class="attr">font-weight</span>: <span class="num">600</span>;
  <span class="attr">cursor</span>: <span class="str">pointer</span>;
  <span class="attr">transition</span>: <span class="str">all 0.2s ease</span>;
}

<span class="fn">.primary</span>   { <span class="attr">background</span>: <span class="str">#2563eb</span>; <span class="attr">color</span>: <span class="str">white</span>; }
<span class="fn">.secondary</span> { <span class="attr">background</span>: <span class="str">#e2e8f0</span>; <span class="attr">color</span>: <span class="str">#1e293b</span>; }
<span class="fn">.danger</span>    { <span class="attr">background</span>: <span class="str">#dc2626</span>; <span class="attr">color</span>: <span class="str">white</span>; }
<span class="fn">.ghost</span>     { <span class="attr">background</span>: <span class="str">transparent</span>; <span class="attr">color</span>: <span class="str">#2563eb</span>; }

<span class="fn">.small</span>  { <span class="attr">padding</span>: <span class="num">0.375rem 0.75rem</span>; <span class="attr">font-size</span>: <span class="num">0.875rem</span>; }
<span class="fn">.medium</span> { <span class="attr">padding</span>: <span class="num">0.5rem 1rem</span>;    <span class="attr">font-size</span>: <span class="num">1rem</span>; }
<span class="fn">.large</span>  { <span class="attr">padding</span>: <span class="num">0.75rem 1.5rem</span>; <span class="attr">font-size</span>: <span class="num">1.125rem</span>; }

<span class="fn">.loading</span> { <span class="attr">opacity</span>: <span class="num">0.7</span>; <span class="attr">pointer-events</span>: <span class="str">none</span>; }

<span class="fn">.spinner</span> {
  <span class="attr">width</span>: <span class="num">1em</span>;
  <span class="attr">height</span>: <span class="num">1em</span>;
  <span class="attr">border</span>: <span class="str">2px solid currentColor</span>;
  <span class="attr">border-right-color</span>: <span class="str">transparent</span>;
  <span class="attr">border-radius</span>: <span class="num">50%</span>;
  <span class="attr">animation</span>: <span class="fn">spin</span> <span class="num">0.6s</span> <span class="str">linear infinite</span>;
}

<span class="fn">@keyframes</span> <span class="fn">spin</span> {
  <span class="kw">to</span> { <span class="attr">transform</span>: <span class="fn">rotate</span>(<span class="num">360deg</span>); }
}`}),(0,k.jsx)(M,{filename:`Usage Examples`,language:`jsx`,children:`<span class="cm">// Primary button</span>
<span class="tag">&lt;Button</span> <span class="attr">variant</span><span class="op">=</span><span class="str">"primary"</span><span class="tag">&gt;</span>Save Changes<span class="tag">&lt;/Button&gt;</span>

<span class="cm">// Loading state</span>
<span class="tag">&lt;Button</span> <span class="attr">isLoading</span><span class="tag">&gt;</span>Submitting...<span class="tag">&lt;/Button&gt;</span>

<span class="cm">// With icon</span>
<span class="tag">&lt;Button</span> <span class="attr">leftIcon</span><span class="op">=</span>{<span class="tag">&lt;PlusIcon /&gt;</span>} <span class="attr">variant</span><span class="op">=</span><span class="str">"secondary"</span><span class="tag">&gt;</span>Add Item<span class="tag">&lt;/Button&gt;</span>

<span class="cm">// As a link</span>
<span class="tag">&lt;Button</span> <span class="attr">as</span><span class="op">=</span><span class="str">"a"</span> <span class="attr">href</span><span class="op">=</span><span class="str">"/dashboard"</span> <span class="attr">variant</span><span class="op">=</span><span class="str">"ghost"</span><span class="tag">&gt;</span>Go to Dashboard<span class="tag">&lt;/Button&gt;</span>

<span class="cm">// Danger with confirmation</span>
<span class="tag">&lt;Button</span> <span class="attr">variant</span><span class="op">=</span><span class="str">"danger"</span> <span class="attr">size</span><span class="op">=</span><span class="str">"large"</span> <span class="attr">onClick</span><span class="op">=</span>{handleDelete}<span class="tag">&gt;</span>
  Delete Account
<span class="tag">&lt;/Button&gt;</span>`}),(0,k.jsxs)(N,{type:`tip`,title:`Barrel Exports`,children:[`Create an `,(0,k.jsx)(`code`,{children:`index.js`}),` file in each component folder that re-exports the component. This lets consumers import with cleaner paths: `,(0,k.jsx)(`code`,{children:`import Button from '@/components/atoms/Button'`}),`instead of `,(0,k.jsx)(`code`,{children:`import Button from '@/components/atoms/Button/Button'`}),`. It also gives you a single place to control what's publicly exposed from each module.`]})]}),(0,k.jsxs)(j,{id:`react-server-components`,icon:`☁️`,iconBg:`#e8f0fe`,iconColor:`#1a73e8`,title:`1.3 React Server Components (RSC)`,children:[(0,k.jsx)(`p`,{children:`React Server Components (RSC) represent a paradigm shift in how we build React applications. By rendering components exclusively on the server, RSCs eliminate the need to send heavy dependencies and bundle sizes to the client.`}),(0,k.jsx)(N,{type:`note`,title:`Client vs Server Components`,children:(0,k.jsxs)(`p`,{children:[`By default in modern frameworks like Next.js App Router, all components are Server Components. You only add the `,(0,k.jsx)(`code`,{children:`"use client"`}),` directive when you need interactivity (like `,(0,k.jsx)(`code`,{children:`onClick`}),`) or hooks (like `,(0,k.jsx)(`code`,{children:`useState`}),`).`]})})]}),(0,k.jsxs)(j,{id:`advanced-prop-patterns`,icon:`🎛️`,iconBg:`#e8f0fe`,iconColor:`#1a73e8`,title:`1.4 Advanced Prop Patterns`,children:[(0,k.jsx)(`p`,{children:`As components scale, passing basic primitive props isn't always enough. Two powerful patterns emerge for flexible composition:`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Render Props:`}),` Passing a function as a prop to share state logic without higher-order components.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Polymorphism:`}),` Using an `,(0,k.jsx)(`code`,{children:`as`}),` prop (like we did in the Button example) to dynamically change the underlying HTML element while maintaining styles.`]})]})]})]});function P({headers:e,children:t}){return(0,k.jsx)(`div`,{className:`table-wrapper`,children:(0,k.jsxs)(`table`,{children:[(0,k.jsx)(`thead`,{children:(0,k.jsx)(`tr`,{children:e.map((e,t)=>(0,k.jsx)(`th`,{children:e},t))})}),(0,k.jsx)(`tbody`,{children:t})]})})}function F({variant:e=`blue`,children:t}){return(0,k.jsx)(`span`,{className:`badge badge-${e}`,children:t})}var Dr=()=>(0,k.jsxs)(A,{id:`chapter-2`,number:2,title:`RESTful API Integration & Data Flow`,theme:`purple`,children:[(0,k.jsx)(`p`,{children:`Modern React applications rarely exist in isolation — they communicate with back-end services to fetch data, submit forms, and synchronize state. Seamless communication between your front-end and back-end is essential for building responsive, reliable user experiences. This chapter covers everything from REST fundamentals to production-grade API layers with interceptors, error handling, and caching strategies.`}),(0,k.jsx)(`h3`,{children:`What is REST?`}),(0,k.jsx)(`p`,{children:`REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use standard HTTP methods to perform CRUD operations on resources identified by URLs. Each request is stateless — the server doesn't remember previous requests, so every request must contain all the information needed to process it.`}),(0,k.jsx)(`h3`,{children:`HTTP Methods`}),(0,k.jsxs)(P,{headers:[`Method`,`Purpose`,`Has Body`,`Idempotent`],children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`GET`})}),(0,k.jsx)(`td`,{children:`Retrieve a resource or collection`}),(0,k.jsx)(`td`,{children:`No`}),(0,k.jsx)(`td`,{children:`Yes`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`POST`})}),(0,k.jsx)(`td`,{children:`Create a new resource`}),(0,k.jsx)(`td`,{children:`Yes`}),(0,k.jsx)(`td`,{children:`No`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`orange`,children:`PUT`})}),(0,k.jsx)(`td`,{children:`Replace an entire resource`}),(0,k.jsx)(`td`,{children:`Yes`}),(0,k.jsx)(`td`,{children:`Yes`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`yellow`,children:`PATCH`})}),(0,k.jsx)(`td`,{children:`Partially update a resource`}),(0,k.jsx)(`td`,{children:`Yes`}),(0,k.jsx)(`td`,{children:`No`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`red`,children:`DELETE`})}),(0,k.jsx)(`td`,{children:`Remove a resource`}),(0,k.jsx)(`td`,{children:`Rarely`}),(0,k.jsx)(`td`,{children:`Yes`})]})]}),(0,k.jsx)(`h3`,{children:`HTTP Status Codes`}),(0,k.jsxs)(P,{headers:[`Code`,`Name`,`Meaning`],children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`200`})}),(0,k.jsx)(`td`,{children:`OK`}),(0,k.jsx)(`td`,{children:`Request succeeded, response body contains data`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`201`})}),(0,k.jsx)(`td`,{children:`Created`}),(0,k.jsx)(`td`,{children:`Resource successfully created (typically after POST)`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`204`})}),(0,k.jsx)(`td`,{children:`No Content`}),(0,k.jsx)(`td`,{children:`Request succeeded, no response body (typical for DELETE)`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`orange`,children:`400`})}),(0,k.jsx)(`td`,{children:`Bad Request`}),(0,k.jsx)(`td`,{children:`Client sent invalid data (validation errors)`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`red`,children:`401`})}),(0,k.jsx)(`td`,{children:`Unauthorized`}),(0,k.jsx)(`td`,{children:`Authentication required or token expired`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`red`,children:`403`})}),(0,k.jsx)(`td`,{children:`Forbidden`}),(0,k.jsx)(`td`,{children:`Authenticated but lacks permission`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`orange`,children:`404`})}),(0,k.jsx)(`td`,{children:`Not Found`}),(0,k.jsx)(`td`,{children:`Resource doesn't exist at the given URL`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`yellow`,children:`429`})}),(0,k.jsx)(`td`,{children:`Too Many Requests`}),(0,k.jsx)(`td`,{children:`Rate limit exceeded, slow down`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`red`,children:`500`})}),(0,k.jsx)(`td`,{children:`Internal Server Error`}),(0,k.jsx)(`td`,{children:`Server-side error, not the client's fault`})]})]}),(0,k.jsxs)(N,{type:`important`,title:`API Layer Abstraction`,children:[`Never scatter `,(0,k.jsx)(`code`,{children:`fetch()`}),` or `,(0,k.jsx)(`code`,{children:`axios`}),` calls directly inside your components. Instead, create a dedicated API layer (`,(0,k.jsx)(`code`,{children:`services/api.js`}),`) that centralizes all HTTP communication. This gives you a single place to handle base URLs, authentication headers, error transformation, retry logic, and request/response logging. When the API changes, you update one file — not fifty components.`]}),(0,k.jsx)(`h3`,{children:`Frontend ↔ Backend Data Flow`}),(0,k.jsxs)(Sr,{children:[(0,k.jsxs)(Cr,{children:[(0,k.jsx)(wr,{children:`React Component`}),(0,k.jsx)(Tr,{}),(0,k.jsx)(wr,{children:`Custom Hook`}),(0,k.jsx)(Tr,{}),(0,k.jsx)(wr,{children:`API Service Layer`}),(0,k.jsx)(Tr,{}),(0,k.jsx)(wr,{children:`HTTP Client (Axios)`})]}),(0,k.jsxs)(Cr,{children:[(0,k.jsx)(wr,{children:`HTTP Client (Axios)`}),(0,k.jsx)(Tr,{}),(0,k.jsx)(wr,{children:`REST API Server`}),(0,k.jsx)(Tr,{}),(0,k.jsx)(wr,{children:`Database`})]})]}),(0,k.jsxs)(j,{id:`use-api-hook`,icon:`🔗`,iconBg:`#f3e8ff`,iconColor:`#7c3aed`,title:`2.1 Custom Hook: useApi`,children:[(0,k.jsxs)(`p`,{children:[`A well-designed API hook encapsulates the three fundamental states of any asynchronous operation: `,(0,k.jsx)(`strong`,{children:`loading`}),`, `,(0,k.jsx)(`strong`,{children:`data`}),`, and `,(0,k.jsx)(`strong`,{children:`error`}),`. This pattern eliminates boilerplate and ensures consistent handling across your application.`]}),(0,k.jsx)(`h4`,{children:`Three States of Async Operations`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Loading:`}),` The request is in flight. Show a spinner, skeleton, or placeholder content. Never leave the user staring at a blank screen.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Success (Data):`}),` The server responded with the expected data. Render your UI components with the received data.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Error:`}),` Something went wrong — network failure, server error, or invalid response. Show a meaningful error message with a retry option.`]})]}),(0,k.jsx)(`h4`,{children:`AbortController`}),(0,k.jsxs)(`p`,{children:[`The `,(0,k.jsx)(`code`,{children:`AbortController`}),` API lets you cancel in-flight HTTP requests. This is critical for preventing race conditions and memory leaks. If a user navigates away from a page before the API call completes, the request should be aborted — otherwise, the response will try to update state on an unmounted component. Our `,(0,k.jsx)(`code`,{children:`useApi`}),` hook integrates this automatically via the cleanup function in `,(0,k.jsx)(`code`,{children:`useEffect`}),`.`]}),(0,k.jsx)(M,{filename:`useApi.js`,language:`javascript`,children:`<span class="kw">import</span> { useState, useEffect, useCallback } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">export function</span> <span class="fn">useApi</span>(url, options <span class="op">=</span> {}) {
  <span class="kw">const</span> [data, setData] <span class="op">=</span> <span class="fn">useState</span>(<span class="bool">null</span>);
  <span class="kw">const</span> [error, setError] <span class="op">=</span> <span class="fn">useState</span>(<span class="bool">null</span>);
  <span class="kw">const</span> [loading, setLoading] <span class="op">=</span> <span class="fn">useState</span>(<span class="bool">true</span>);

  <span class="kw">const</span> {
    immediate <span class="op">=</span> <span class="bool">true</span>,
    method <span class="op">=</span> <span class="str">'GET'</span>,
    body <span class="op">=</span> <span class="bool">null</span>,
    headers <span class="op">=</span> {},
    transform <span class="op">=</span> (data) <span class="kw">=&gt;</span> data,
  } <span class="op">=</span> options;

  <span class="kw">const</span> <span class="fn">execute</span> <span class="op">=</span> <span class="fn">useCallback</span>(<span class="kw">async</span> (overrideUrl) <span class="kw">=&gt;</span> {
    <span class="kw">const</span> controller <span class="op">=</span> <span class="kw">new</span> <span class="fn">AbortController</span>();

    <span class="kw">try</span> {
      <span class="fn">setLoading</span>(<span class="bool">true</span>);
      <span class="fn">setError</span>(<span class="bool">null</span>);

      <span class="kw">const</span> response <span class="op">=</span> <span class="kw">await</span> <span class="fn">fetch</span>(overrideUrl <span class="op">||</span> url, {
        method,
        headers: {
          <span class="str">'Content-Type'</span>: <span class="str">'application/json'</span>,
          ...headers,
        },
        body: body <span class="op">?</span> JSON.<span class="fn">stringify</span>(body) <span class="op">:</span> <span class="bool">null</span>,
        signal: controller.signal,
      });

      <span class="kw">if</span> (<span class="op">!</span>response.ok) {
        <span class="kw">throw new</span> <span class="fn">Error</span>(<span class="str">\`HTTP error! status: \${response.status}\`</span>);
      }

      <span class="kw">const</span> json <span class="op">=</span> <span class="kw">await</span> response.<span class="fn">json</span>();
      <span class="kw">const</span> transformed <span class="op">=</span> <span class="fn">transform</span>(json);
      <span class="fn">setData</span>(transformed);
      <span class="kw">return</span> transformed;
    } <span class="kw">catch</span> (err) {
      <span class="kw">if</span> (err.name <span class="op">!==</span> <span class="str">'AbortError'</span>) {
        <span class="fn">setError</span>(err.message);
      }
    } <span class="kw">finally</span> {
      <span class="fn">setLoading</span>(<span class="bool">false</span>);
    }

    <span class="kw">return</span> () <span class="kw">=&gt;</span> controller.<span class="fn">abort</span>();
  }, [url, method, body, headers, transform]);

  <span class="fn">useEffect</span>(() <span class="kw">=&gt;</span> {
    <span class="kw">if</span> (immediate) {
      <span class="fn">execute</span>();
    }
  }, [immediate, execute]);

  <span class="kw">return</span> { data, error, loading, <span class="fn">refetch</span>: execute };
}`}),(0,k.jsx)(M,{filename:`UserList.jsx`,language:`jsx`,children:`<span class="kw">import</span> { useApi } <span class="kw">from</span> <span class="str">'../hooks/useApi'</span>;

<span class="kw">export default function</span> <span class="fn">UserList</span>() {
  <span class="kw">const</span> { data: users, loading, error, refetch } <span class="op">=</span> <span class="fn">useApi</span>(
    <span class="str">'/api/users'</span>,
    { transform: (res) <span class="kw">=&gt;</span> res.data }
  );

  <span class="kw">if</span> (loading) <span class="kw">return</span> <span class="tag">&lt;Spinner /&gt;</span>;
  <span class="kw">if</span> (error) <span class="kw">return</span> (
    <span class="tag">&lt;ErrorMessage</span> <span class="attr">message</span><span class="op">=</span>{error} <span class="attr">onRetry</span><span class="op">=</span>{refetch} <span class="tag">/&gt;</span>
  );

  <span class="kw">return</span> (
    <span class="tag">&lt;ul&gt;</span>
      {users.<span class="fn">map</span>((user) <span class="kw">=&gt;</span> (
        <span class="tag">&lt;li</span> <span class="attr">key</span><span class="op">=</span>{user.id}<span class="tag">&gt;</span>{user.name}<span class="tag">&lt;/li&gt;</span>
      ))}
    <span class="tag">&lt;/ul&gt;</span>
  );
}`})]}),(0,k.jsxs)(j,{id:`axios-interceptors`,icon:`🛡️`,iconBg:`#f3e8ff`,iconColor:`#7c3aed`,title:`2.2 Axios Interceptors & Error Handling`,children:[(0,k.jsxs)(`p`,{children:[`Axios interceptors let you intercept requests and responses before they are handled by`,(0,k.jsx)(`code`,{children:`then`}),` or `,(0,k.jsx)(`code`,{children:`catch`}),`. This is where you build your app's defensive layer — handling authentication, retrying failed requests, and transforming errors into user-friendly messages.`]}),(0,k.jsx)(`h4`,{children:`What Interceptors Handle`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Request Interceptors:`}),` Attach auth tokens, set default headers, log outgoing requests`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Response Interceptors:`}),` Transform responses, handle errors globally, refresh expired tokens`]})]}),(0,k.jsx)(`h4`,{children:`Token Refresh Flow`}),(0,k.jsxs)(`ol`,{children:[(0,k.jsx)(`li`,{children:`User's access token expires mid-session`}),(0,k.jsxs)(`li`,{children:[`API returns `,(0,k.jsx)(`code`,{children:`401 Unauthorized`})]}),(0,k.jsx)(`li`,{children:`Response interceptor catches the 401`}),(0,k.jsxs)(`li`,{children:[`Interceptor sends refresh token to `,(0,k.jsx)(`code`,{children:`/auth/refresh`}),` endpoint`]}),(0,k.jsx)(`li`,{children:`Server responds with a new access token`}),(0,k.jsx)(`li`,{children:`Interceptor retries the original failed request with the new token`}),(0,k.jsx)(`li`,{children:`User never notices the token expired — seamless experience`})]}),(0,k.jsx)(N,{type:`note`,title:`Why This is Powerful`,children:`Without interceptors, you'd need to add token refresh logic to every single API call in your app. With interceptors, you write it once and every request automatically benefits. This is the API layer abstraction principle in action.`}),(0,k.jsx)(M,{filename:`apiClient.js`,language:`javascript`,children:`<span class="kw">import</span> axios <span class="kw">from</span> <span class="str">'axios'</span>;

<span class="kw">const</span> apiClient <span class="op">=</span> axios.<span class="fn">create</span>({
  baseURL: <span class="str">'https://api.example.com/v1'</span>,
  timeout: <span class="num">10000</span>,
  headers: {
    <span class="str">'Content-Type'</span>: <span class="str">'application/json'</span>,
  },
});

<span class="cm">// ─── Request Interceptor ──────────────────────</span>
apiClient.interceptors.request.<span class="fn">use</span>(
  (config) <span class="kw">=&gt;</span> {
    <span class="kw">const</span> token <span class="op">=</span> localStorage.<span class="fn">getItem</span>(<span class="str">'accessToken'</span>);
    <span class="kw">if</span> (token) {
      config.headers.Authorization <span class="op">=</span> <span class="str">\`Bearer \${token}\`</span>;
    }
    <span class="kw">return</span> config;
  },
  (error) <span class="kw">=&gt;</span> Promise.<span class="fn">reject</span>(error)
);

<span class="cm">// ─── Response Interceptor ─────────────────────</span>
<span class="kw">let</span> isRefreshing <span class="op">=</span> <span class="bool">false</span>;
<span class="kw">let</span> failedQueue <span class="op">=</span> [];

<span class="kw">const</span> <span class="fn">processQueue</span> <span class="op">=</span> (error, token <span class="op">=</span> <span class="bool">null</span>) <span class="kw">=&gt;</span> {
  failedQueue.<span class="fn">forEach</span>(({ resolve, reject }) <span class="kw">=&gt;</span> {
    error <span class="op">?</span> <span class="fn">reject</span>(error) <span class="op">:</span> <span class="fn">resolve</span>(token);
  });
  failedQueue <span class="op">=</span> [];
};

apiClient.interceptors.response.<span class="fn">use</span>(
  (response) <span class="kw">=&gt;</span> response,
  <span class="kw">async</span> (error) <span class="kw">=&gt;</span> {
    <span class="kw">const</span> originalRequest <span class="op">=</span> error.config;

    <span class="kw">if</span> (error.response?.status <span class="op">===</span> <span class="num">401</span>
        <span class="op">&amp;&amp;</span> <span class="op">!</span>originalRequest._retry) {
      <span class="kw">if</span> (isRefreshing) {
        <span class="kw">return new</span> <span class="fn">Promise</span>((resolve, reject) <span class="kw">=&gt;</span> {
          failedQueue.<span class="fn">push</span>({ resolve, reject });
        }).<span class="fn">then</span>((token) <span class="kw">=&gt;</span> {
          originalRequest.headers.Authorization <span class="op">=</span> <span class="str">\`Bearer \${token}\`</span>;
          <span class="kw">return</span> <span class="fn">apiClient</span>(originalRequest);
        });
      }

      originalRequest._retry <span class="op">=</span> <span class="bool">true</span>;
      isRefreshing <span class="op">=</span> <span class="bool">true</span>;

      <span class="kw">try</span> {
        <span class="kw">const</span> refreshToken <span class="op">=</span> localStorage.<span class="fn">getItem</span>(<span class="str">'refreshToken'</span>);
        <span class="kw">const</span> { data } <span class="op">=</span> <span class="kw">await</span> axios.<span class="fn">post</span>(
          <span class="str">'/auth/refresh'</span>,
          { token: refreshToken }
        );

        localStorage.<span class="fn">setItem</span>(<span class="str">'accessToken'</span>, data.accessToken);
        <span class="fn">processQueue</span>(<span class="bool">null</span>, data.accessToken);

        originalRequest.headers.Authorization <span class="op">=</span>
          <span class="str">\`Bearer \${data.accessToken}\`</span>;
        <span class="kw">return</span> <span class="fn">apiClient</span>(originalRequest);
      } <span class="kw">catch</span> (refreshError) {
        <span class="fn">processQueue</span>(refreshError);
        localStorage.<span class="fn">removeItem</span>(<span class="str">'accessToken'</span>);
        localStorage.<span class="fn">removeItem</span>(<span class="str">'refreshToken'</span>);
        window.location.href <span class="op">=</span> <span class="str">'/login'</span>;
        <span class="kw">return</span> Promise.<span class="fn">reject</span>(refreshError);
      } <span class="kw">finally</span> {
        isRefreshing <span class="op">=</span> <span class="bool">false</span>;
      }
    }

    <span class="kw">return</span> Promise.<span class="fn">reject</span>(error);
  }
);

<span class="kw">export default</span> apiClient;`}),(0,k.jsxs)(N,{type:`warning`,title:`Security Note: localStorage Tokens`,children:[`Storing tokens in `,(0,k.jsx)(`code`,{children:`localStorage`}),` is convenient but vulnerable to XSS attacks. For production applications, consider using `,(0,k.jsx)(`code`,{children:`httpOnly`}),` cookies set by the server, which are not accessible via JavaScript. If you must use localStorage, ensure your app has robust XSS protection including Content Security Policy headers and input sanitization.`]})]}),(0,k.jsxs)(j,{id:`state-management-server-data`,icon:`🗄️`,iconBg:`#f3e8ff`,iconColor:`#7c3aed`,title:`2.3 State Management for Server Data`,children:[(0,k.jsxs)(`p`,{children:[`While custom hooks like `,(0,k.jsx)(`code`,{children:`useApi`}),` are great for understanding the fundamentals, production apps often rely on specialized libraries like React Query (TanStack Query) or SWR to manage server state.`]}),(0,k.jsx)(N,{type:`note`,title:`Server State vs Client State`,children:(0,k.jsxs)(`p`,{children:[`Server state is asynchronous, shared, and can become out of date. Client state is synchronous and local to the user's session (e.g., UI toggles). Libraries like React Query specifically handle the caching, deduplication, and background updates of `,(0,k.jsx)(`strong`,{children:`Server State`}),`.`]})})]}),(0,k.jsxs)(j,{id:`websockets-real-time`,icon:`⚡`,iconBg:`#f3e8ff`,iconColor:`#7c3aed`,title:`2.4 WebSockets & Real-Time Data`,children:[(0,k.jsx)(`p`,{children:`For applications that require live updates (chat apps, trading dashboards), REST polling is inefficient. WebSockets provide a persistent, bi-directional connection between the client and server.`}),(0,k.jsx)(M,{filename:`useWebSocket.js`,language:`javascript`,children:`<span class="kw">import</span> { useEffect, useRef } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">export function</span> <span class="fn">useWebSocket</span>(url, onMessage) {
  <span class="kw">const</span> ws <span class="op">=</span> <span class="fn">useRef</span>(<span class="bool">null</span>);

  <span class="fn">useEffect</span>(() <span class="kw">=&gt;</span> {
    ws.current <span class="op">=</span> <span class="kw">new</span> <span class="fn">WebSocket</span>(url);
    ws.current.onmessage <span class="op">=</span> (event) <span class="kw">=&gt;</span> <span class="fn">onMessage</span>(JSON.<span class="fn">parse</span>(event.data));

    <span class="kw">return</span> () <span class="kw">=&gt;</span> ws.current?.<span class="fn">close</span>();
  }, [url, onMessage]);
}`})]})]}),Or=()=>(0,k.jsxs)(A,{id:`chapter-3`,number:3,title:`Clean, Modular & Reusable Code`,theme:`green`,children:[(0,k.jsx)(`p`,{children:`Writing code that works is the baseline. Writing code that's clean, modular, and reusable is what separates junior developers from senior engineers. Clean code reads like well-written prose — its intent is clear, its structure is logical, and its patterns are consistent. This chapter covers the principles, patterns, and practical techniques that make React codebases a joy to work in, even as they scale to hundreds of components.`}),(0,k.jsx)(`h3`,{children:`Key Principles`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`DRY (Don't Repeat Yourself):`}),` If you find yourself writing the same logic in multiple places, extract it into a shared utility, custom hook, or component. But don't over-DRY — sometimes a little duplication is better than the wrong abstraction.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`SOLID Principles:`}),` Originally from OOP, these principles apply beautifully to React. Single Responsibility (one component = one job), Open/Closed (extend via composition, not modification), Liskov Substitution (components should be interchangeable), Interface Segregation (don't force components to depend on props they don't use), Dependency Inversion (depend on abstractions like hooks, not concrete implementations).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`AHA (Avoid Hasty Abstractions):`}),` Don't create an abstraction until you've seen the pattern at least three times. Premature abstraction creates more problems than duplication. Wait until the pattern is clear, then extract with confidence.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`File Naming Conventions:`}),` Use PascalCase for components (`,(0,k.jsx)(`code`,{children:`UserProfile.jsx`}),`), camelCase for hooks (`,(0,k.jsx)(`code`,{children:`useAuth.js`}),`), and kebab-case for utilities (`,(0,k.jsx)(`code`,{children:`format-date.js`}),`). Consistency in naming makes it easy to identify what a file contains at a glance.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Barrel Exports:`}),` Use `,(0,k.jsx)(`code`,{children:`index.js`}),` files to re-export related modules. This simplifies imports and gives you a clear public API for each module. But be careful — barrel files can hurt tree-shaking if not used thoughtfully.`]})]}),(0,k.jsx)(N,{type:`tip`,title:`The Litmus Test`,children:`Before creating an abstraction, ask yourself: "If I delete this abstraction, how many files do I need to update?" If the answer is less than three, the abstraction probably isn't worth it yet. Also ask: "Can a new team member understand this abstraction in under 5 minutes?" If not, simplify it.`}),(0,k.jsxs)(j,{id:`custom-hooks`,icon:`🪝`,iconBg:`#ecfdf5`,iconColor:`#059669`,title:`3.1 Custom Hooks Pattern`,children:[(0,k.jsxs)(`p`,{children:[`Custom hooks are the primary mechanism for extracting and reusing stateful logic in React. They let you share behavior between components without changing their structure. A custom hook is simply a function that starts with `,(0,k.jsx)(`code`,{children:`use`}),` and calls other hooks internally.`]}),(0,k.jsx)(`h4`,{children:`Rules of Hooks`}),(0,k.jsxs)(`ol`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Only call hooks at the top level`}),` — never inside loops, conditions, or nested functions. React relies on the order of hook calls to maintain state correctly.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Only call hooks from React functions`}),` — either functional components or other custom hooks. Never call hooks from regular JavaScript functions.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Name must start with "use"`}),` — this convention tells React's linter to enforce the rules of hooks on your custom function.`]})]}),(0,k.jsx)(`h4`,{children:`When to Create a Custom Hook`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[`You're duplicating the same `,(0,k.jsx)(`code`,{children:`useState`}),` + `,(0,k.jsx)(`code`,{children:`useEffect`}),` pattern across components`]}),(0,k.jsx)(`li`,{children:`A component has complex logic that obscures its rendering intent`}),(0,k.jsx)(`li`,{children:`You want to share behavior (not UI) between components`}),(0,k.jsx)(`li`,{children:`You need to encapsulate a subscription, timer, or external data source`})]}),(0,k.jsx)(M,{filename:`useDebounce.js`,language:`javascript`,children:`<span class="kw">import</span> { useState, useEffect } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">/**
 * Debounces a value by the specified delay.
 * Useful for search inputs, form validation, and
 * any scenario where you want to wait for the user
 * to stop typing before triggering an action.
 *
 * @param {any} value - The value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {any} The debounced value
 */</span>
<span class="kw">export function</span> <span class="fn">useDebounce</span>(value, delay <span class="op">=</span> <span class="num">300</span>) {
  <span class="kw">const</span> [debouncedValue, setDebouncedValue] <span class="op">=</span> <span class="fn">useState</span>(value);

  <span class="fn">useEffect</span>(() <span class="kw">=&gt;</span> {
    <span class="kw">const</span> timer <span class="op">=</span> <span class="fn">setTimeout</span>(() <span class="kw">=&gt;</span> {
      <span class="fn">setDebouncedValue</span>(value);
    }, delay);

    <span class="cm">// Cleanup: cancel timer if value changes</span>
    <span class="cm">// before delay expires</span>
    <span class="kw">return</span> () <span class="kw">=&gt;</span> <span class="fn">clearTimeout</span>(timer);
  }, [value, delay]);

  <span class="kw">return</span> debouncedValue;
}`}),(0,k.jsx)(M,{filename:`useLocalStorage.js`,language:`javascript`,children:`<span class="kw">import</span> { useState, useEffect } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">/**
 * Syncs state with localStorage. Automatically
 * persists state changes and hydrates on mount.
 * Handles JSON serialization and error recovery.
 *
 * @param {string} key - localStorage key
 * @param {any} initialValue - Default value
 * @returns {[any, Function]} State and setter
 */</span>
<span class="kw">export function</span> <span class="fn">useLocalStorage</span>(key, initialValue) {
  <span class="kw">const</span> [storedValue, setStoredValue] <span class="op">=</span> <span class="fn">useState</span>(() <span class="kw">=&gt;</span> {
    <span class="kw">try</span> {
      <span class="kw">const</span> item <span class="op">=</span> window.localStorage.<span class="fn">getItem</span>(key);
      <span class="kw">return</span> item <span class="op">?</span> JSON.<span class="fn">parse</span>(item) <span class="op">:</span> initialValue;
    } <span class="kw">catch</span> (error) {
      console.<span class="fn">warn</span>(
        <span class="str">\`Error reading localStorage key "\${key}":\`</span>,
        error
      );
      <span class="kw">return</span> initialValue;
    }
  });

  <span class="fn">useEffect</span>(() <span class="kw">=&gt;</span> {
    <span class="kw">try</span> {
      window.localStorage.<span class="fn">setItem</span>(
        key,
        JSON.<span class="fn">stringify</span>(storedValue)
      );
    } <span class="kw">catch</span> (error) {
      console.<span class="fn">warn</span>(
        <span class="str">\`Error setting localStorage key "\${key}":\`</span>,
        error
      );
    }
  }, [key, storedValue]);

  <span class="kw">return</span> [storedValue, setStoredValue];
}`}),(0,k.jsx)(M,{filename:`Usage: Search with Debounce`,language:`jsx`,children:`<span class="kw">import</span> { useState } <span class="kw">from</span> <span class="str">'react'</span>;
<span class="kw">import</span> { useDebounce } <span class="kw">from</span> <span class="str">'../hooks/useDebounce'</span>;
<span class="kw">import</span> { useApi } <span class="kw">from</span> <span class="str">'../hooks/useApi'</span>;

<span class="kw">export default function</span> <span class="fn">SearchUsers</span>() {
  <span class="kw">const</span> [query, setQuery] <span class="op">=</span> <span class="fn">useState</span>(<span class="str">''</span>);
  <span class="kw">const</span> debouncedQuery <span class="op">=</span> <span class="fn">useDebounce</span>(query, <span class="num">500</span>);

  <span class="kw">const</span> { data: results, loading } <span class="op">=</span> <span class="fn">useApi</span>(
    debouncedQuery
      <span class="op">?</span> <span class="str">\`/api/users?search=\${debouncedQuery}\`</span>
      <span class="op">:</span> <span class="bool">null</span>
  );

  <span class="kw">return</span> (
    <span class="tag">&lt;div&gt;</span>
      <span class="tag">&lt;input</span>
        <span class="attr">type</span><span class="op">=</span><span class="str">"search"</span>
        <span class="attr">value</span><span class="op">=</span>{query}
        <span class="attr">onChange</span><span class="op">=</span>{(e) <span class="kw">=&gt;</span> <span class="fn">setQuery</span>(e.target.value)}
        <span class="attr">placeholder</span><span class="op">=</span><span class="str">"Search users..."</span>
      <span class="tag">/&gt;</span>
      {loading <span class="op">&amp;&amp;</span> <span class="tag">&lt;Spinner /&gt;</span>}
      {results<span class="op">?.</span><span class="fn">map</span>((user) <span class="kw">=&gt;</span> (
        <span class="tag">&lt;UserCard</span> <span class="attr">key</span><span class="op">=</span>{user.id} <span class="attr">user</span><span class="op">=</span>{user} <span class="tag">/&gt;</span>
      ))}
    <span class="tag">&lt;/div&gt;</span>
  );
}`})]}),(0,k.jsxs)(j,{id:`compound-components`,icon:`🧩`,iconBg:`#ecfdf5`,iconColor:`#059669`,title:`3.2 Compound Component Pattern`,children:[(0,k.jsxs)(`p`,{children:[`The Compound Component pattern lets you create components that work together to form a complete UI element, while giving the consumer full control over rendering order and structure. Think of it like the `,(0,k.jsx)(`code`,{children:`<select>`}),` and `,(0,k.jsx)(`code`,{children:`<option>`}),`relationship in HTML — they're separate elements but they share implicit state.`]}),(0,k.jsx)(`p`,{children:`This pattern is ideal for components like accordions, tabs, dropdowns, and menus where the parent manages shared state and the children consume it via React Context. The consumer gets a flexible API without needing to wire up state management manually.`}),(0,k.jsx)(M,{filename:`Accordion.jsx`,language:`jsx`,children:`<span class="kw">import</span> { createContext, useContext, useState } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">// ─── Shared Context ──────────────────────────</span>
<span class="kw">const</span> AccordionContext <span class="op">=</span> <span class="fn">createContext</span>();

<span class="kw">function</span> <span class="fn">useAccordionContext</span>() {
  <span class="kw">const</span> context <span class="op">=</span> <span class="fn">useContext</span>(AccordionContext);
  <span class="kw">if</span> (<span class="op">!</span>context) {
    <span class="kw">throw new</span> <span class="fn">Error</span>(
      <span class="str">'Accordion compound components must be used '</span> <span class="op">+</span>
      <span class="str">'within &lt;Accordion&gt;'</span>
    );
  }
  <span class="kw">return</span> context;
}

<span class="cm">// ─── Parent Component ────────────────────────</span>
<span class="kw">function</span> <span class="fn">Accordion</span>({ children, defaultOpen <span class="op">=</span> <span class="bool">null</span> }) {
  <span class="kw">const</span> [openItem, setOpenItem] <span class="op">=</span> <span class="fn">useState</span>(defaultOpen);

  <span class="kw">const</span> <span class="fn">toggle</span> <span class="op">=</span> (id) <span class="kw">=&gt;</span> {
    <span class="fn">setOpenItem</span>((prev) <span class="kw">=&gt;</span> prev <span class="op">===</span> id <span class="op">?</span> <span class="bool">null</span> <span class="op">:</span> id);
  };

  <span class="kw">return</span> (
    <span class="tag">&lt;AccordionContext.Provider</span>
      <span class="attr">value</span><span class="op">=</span>{{ openItem, toggle }}
    <span class="tag">&gt;</span>
      <span class="tag">&lt;div</span> <span class="attr">className</span><span class="op">=</span><span class="str">"accordion"</span><span class="tag">&gt;</span>
        {children}
      <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;/AccordionContext.Provider&gt;</span>
  );
}

<span class="cm">// ─── Item Component ──────────────────────────</span>
<span class="kw">function</span> <span class="fn">Item</span>({ id, children }) {
  <span class="kw">return</span> (
    <span class="tag">&lt;div</span> <span class="attr">className</span><span class="op">=</span><span class="str">"accordion-item"</span><span class="tag">&gt;</span>
      {children}
    <span class="tag">&lt;/div&gt;</span>
  );
}

<span class="cm">// ─── Trigger Component ───────────────────────</span>
<span class="kw">function</span> <span class="fn">Trigger</span>({ id, children }) {
  <span class="kw">const</span> { openItem, toggle } <span class="op">=</span> <span class="fn">useAccordionContext</span>();
  <span class="kw">const</span> isOpen <span class="op">=</span> openItem <span class="op">===</span> id;

  <span class="kw">return</span> (
    <span class="tag">&lt;button</span>
      <span class="attr">className</span><span class="op">=</span><span class="str">"accordion-trigger"</span>
      <span class="attr">onClick</span><span class="op">=</span>{() <span class="kw">=&gt;</span> <span class="fn">toggle</span>(id)}
      <span class="attr">aria-expanded</span><span class="op">=</span>{isOpen}
    <span class="tag">&gt;</span>
      {children}
      <span class="tag">&lt;span&gt;</span>{isOpen <span class="op">?</span> <span class="str">'−'</span> <span class="op">:</span> <span class="str">'+'</span>}<span class="tag">&lt;/span&gt;</span>
    <span class="tag">&lt;/button&gt;</span>
  );
}

<span class="cm">// ─── Content Component ───────────────────────</span>
<span class="kw">function</span> <span class="fn">Content</span>({ id, children }) {
  <span class="kw">const</span> { openItem } <span class="op">=</span> <span class="fn">useAccordionContext</span>();

  <span class="kw">if</span> (openItem <span class="op">!==</span> id) <span class="kw">return</span> <span class="bool">null</span>;

  <span class="kw">return</span> (
    <span class="tag">&lt;div</span>
      <span class="attr">className</span><span class="op">=</span><span class="str">"accordion-content"</span>
      <span class="attr">role</span><span class="op">=</span><span class="str">"region"</span>
    <span class="tag">&gt;</span>
      {children}
    <span class="tag">&lt;/div&gt;</span>
  );
}

<span class="cm">// ─── Attach sub-components ───────────────────</span>
Accordion.Item <span class="op">=</span> Item;
Accordion.Trigger <span class="op">=</span> Trigger;
Accordion.Content <span class="op">=</span> Content;

<span class="kw">export default</span> Accordion;

<span class="cm">// ─── Usage ───────────────────────────────────</span>
<span class="cm">// &lt;Accordion defaultOpen="faq-1"&gt;</span>
<span class="cm">//   &lt;Accordion.Item id="faq-1"&gt;</span>
<span class="cm">//     &lt;Accordion.Trigger id="faq-1"&gt;</span>
<span class="cm">//       What is React?</span>
<span class="cm">//     &lt;/Accordion.Trigger&gt;</span>
<span class="cm">//     &lt;Accordion.Content id="faq-1"&gt;</span>
<span class="cm">//       React is a JavaScript library...</span>
<span class="cm">//     &lt;/Accordion.Content&gt;</span>
<span class="cm">//   &lt;/Accordion.Item&gt;</span>
<span class="cm">// &lt;/Accordion&gt;</span>`})]}),(0,k.jsxs)(j,{id:`higher-order-components`,icon:`🔄`,iconBg:`#ecfdf5`,iconColor:`#059669`,title:`3.3 Higher-Order Components (HOCs)`,children:[(0,k.jsx)(`p`,{children:`Before Hooks were introduced in React 16.8, Higher-Order Components (HOCs) were the primary way to reuse component logic. An HOC is a function that takes a component and returns a new component, wrapping it with additional props or behavior.`}),(0,k.jsx)(M,{filename:`withAuth.jsx`,language:`jsx`,children:`export function withAuth(WrappedComponent) {
  return function ProtectedRoute(props) {
    const isAuthenticated = useAuth();
    if (!isAuthenticated) return <Redirect to="/login" />;
    return <WrappedComponent {...props} />;
  };
}`}),(0,k.jsx)(N,{type:`warning`,title:`HOCs vs Hooks`,children:(0,k.jsx)(`p`,{children:`While HOCs are still supported, Custom Hooks are generally preferred today because they avoid "wrapper hell" (deeply nested component trees) and make it clearer where state is coming from. Use HOCs primarily for routing guards or legacy class components.`})})]}),(0,k.jsxs)(j,{id:`dependency-injection-context`,icon:`💉`,iconBg:`#ecfdf5`,iconColor:`#059669`,title:`3.4 Dependency Injection via Context`,children:[(0,k.jsx)(`p`,{children:`React Context is often viewed merely as a state management tool, but it's fundamentally a Dependency Injection (DI) system. You can use Context to inject services (like logging, analytics, or API clients) deep into your component tree without prop drilling.`}),(0,k.jsx)(`p`,{children:`This makes your components highly testable, as you can easily wrap them in a mock provider during unit testing.`})]})]}),kr=()=>(0,k.jsxs)(A,{id:`chapter-4`,number:4,title:`Performance Optimization & Lazy Loading`,theme:`orange`,children:[(0,k.jsx)(`p`,{children:`Performance isn't a feature — it's a requirement. Users expect your application to load instantly, respond immediately to interactions, and never stutter during animations. A slow app loses users: studies show that 53% of mobile users abandon sites that take longer than 3 seconds to load. This chapter covers how React's rendering model works under the hood, how to measure performance with Core Web Vitals, and the specific techniques — code splitting, memoization, and lazy loading — that keep your app fast at any scale.`}),(0,k.jsx)(`h3`,{children:`Core Web Vitals`}),(0,k.jsxs)(P,{headers:[`Metric`,`Full Name`,`Good Target`,`What It Measures`],children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`LCP`})}),(0,k.jsx)(`td`,{children:`Largest Contentful Paint`}),(0,k.jsx)(`td`,{children:`≤ 2.5s`}),(0,k.jsx)(`td`,{children:`Time until the largest visible element (image, text block) is rendered. Measures perceived load speed.`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`FID`})}),(0,k.jsx)(`td`,{children:`First Input Delay`}),(0,k.jsx)(`td`,{children:`≤ 100ms`}),(0,k.jsx)(`td`,{children:`Time from first user interaction (click, tap) to the browser's response. Measures interactivity responsiveness.`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`orange`,children:`CLS`})}),(0,k.jsx)(`td`,{children:`Cumulative Layout Shift`}),(0,k.jsx)(`td`,{children:`≤ 0.1`}),(0,k.jsx)(`td`,{children:`Measures visual stability — how much elements shift during page load. Low scores mean a stable layout.`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`purple`,children:`TTI`})}),(0,k.jsx)(`td`,{children:`Time to Interactive`}),(0,k.jsx)(`td`,{children:`≤ 3.8s`}),(0,k.jsx)(`td`,{children:`Time until the page is fully interactive and responds to user input without delay.`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`red`,children:`TBT`})}),(0,k.jsx)(`td`,{children:`Total Blocking Time`}),(0,k.jsx)(`td`,{children:`≤ 200ms`}),(0,k.jsx)(`td`,{children:`Total time the main thread was blocked by long tasks (>50ms) between FCP and TTI.`})]})]}),(0,k.jsx)(`h3`,{children:`How React's Rendering Model Works`}),(0,k.jsx)(`p`,{children:`React uses a Virtual DOM — a lightweight JavaScript representation of the actual DOM. When state changes, React creates a new Virtual DOM tree, diffs it against the previous one (reconciliation), and applies only the minimal set of changes to the real DOM. This process has three phases:`}),(0,k.jsxs)(`ol`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Trigger:`}),` A state update is triggered (via `,(0,k.jsx)(`code`,{children:`setState`}),`,`,(0,k.jsx)(`code`,{children:`useReducer dispatch`}),`, or a parent re-render).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Render:`}),` React calls your component function to compute the new JSX output. This is pure computation — no DOM manipulation happens here.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Commit:`}),` React compares the new Virtual DOM with the previous one and applies the differences to the actual DOM. This is the only phase that touches the browser.`]})]}),(0,k.jsx)(N,{type:`warning`,title:`Common Performance Anti-Patterns`,children:(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Creating objects/arrays inside render:`}),` Every render creates a new reference, causing child components to re-render unnecessarily.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Inline function definitions in JSX:`}),` `,(0,k.jsx)(`code`,{children:`onClick={() => handleClick(id)}`}),` creates a new function on every render.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Not using keys properly:`}),` Using array index as key causes React to remount components instead of reordering them.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Unnecessary state:`}),` Derived data should be computed during render, not stored in state. If you can calculate it from existing state or props, don't add another `,(0,k.jsx)(`code`,{children:`useState`}),`.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Context overuse:`}),` Putting too much data in a single Context causes every consumer to re-render when any value changes.`]})]})}),(0,k.jsxs)(j,{id:`lazy-loading`,icon:`⚡`,iconBg:`#fff7ed`,iconColor:`#ea580c`,title:`4.1 React.lazy, Suspense & Code Splitting`,children:[(0,k.jsxs)(`p`,{children:[`Code splitting is the technique of breaking your JavaScript bundle into smaller chunks that are loaded on demand. Instead of loading your entire application upfront (which could be several megabytes), you load only what the user needs for the current view. React provides built-in support for code splitting via `,(0,k.jsx)(`code`,{children:`React.lazy`}),` and `,(0,k.jsx)(`code`,{children:`Suspense`}),`.`]}),(0,k.jsx)(`h4`,{children:`How It Works Under the Hood`}),(0,k.jsxs)(`ol`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`code`,{children:`React.lazy()`}),` takes a function that calls a dynamic `,(0,k.jsx)(`code`,{children:`import()`}),` — this tells your bundler (Vite, Webpack) to create a separate chunk for that module.`]}),(0,k.jsxs)(`li`,{children:[`When the lazy component is first rendered, React triggers the dynamic import and shows the`,(0,k.jsx)(`code`,{children:`Suspense`}),` fallback while the chunk is downloading.`]}),(0,k.jsx)(`li`,{children:`Once the chunk is loaded, React replaces the fallback with the actual component. Subsequent renders use the cached module — no additional network requests.`})]}),(0,k.jsx)(`h4`,{children:`Route-Based vs Component-Based Splitting`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Route-Based:`}),` Split at the page/route level. Each page is a separate chunk. This is the most common and safest approach — users naturally expect a brief loading moment during navigation.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Component-Based:`}),` Split individual components that are heavy or rarely used (charts, rich text editors, modals). This is more granular and can significantly reduce initial bundle size.`]})]}),(0,k.jsx)(M,{filename:`App.jsx`,language:`jsx`,children:`<span class="kw">import</span> React, { Suspense, lazy } <span class="kw">from</span> <span class="str">'react'</span>;
<span class="kw">import</span> { BrowserRouter, Routes, Route } <span class="kw">from</span> <span class="str">'react-router-dom'</span>;
<span class="kw">import</span> LoadingSpinner <span class="kw">from</span> <span class="str">'./components/LoadingSpinner'</span>;

<span class="cm">// ─── Lazy-loaded route components ────────────</span>
<span class="kw">const</span> Home <span class="op">=</span> <span class="fn">lazy</span>(() <span class="kw">=&gt;</span> <span class="kw">import</span>(<span class="str">'./pages/Home'</span>));
<span class="kw">const</span> Dashboard <span class="op">=</span> <span class="fn">lazy</span>(() <span class="kw">=&gt;</span> <span class="kw">import</span>(<span class="str">'./pages/Dashboard'</span>));
<span class="kw">const</span> Settings <span class="op">=</span> <span class="fn">lazy</span>(() <span class="kw">=&gt;</span> <span class="kw">import</span>(<span class="str">'./pages/Settings'</span>));
<span class="kw">const</span> Analytics <span class="op">=</span> <span class="fn">lazy</span>(() <span class="kw">=&gt;</span> <span class="kw">import</span>(<span class="str">'./pages/Analytics'</span>));

<span class="kw">export default function</span> <span class="fn">App</span>() {
  <span class="kw">return</span> (
    <span class="tag">&lt;BrowserRouter&gt;</span>
      <span class="tag">&lt;Suspense</span> <span class="attr">fallback</span><span class="op">=</span>{<span class="tag">&lt;LoadingSpinner /&gt;</span>}<span class="tag">&gt;</span>
        <span class="tag">&lt;Routes&gt;</span>
          <span class="tag">&lt;Route</span> <span class="attr">path</span><span class="op">=</span><span class="str">"/"</span> <span class="attr">element</span><span class="op">=</span>{<span class="tag">&lt;Home /&gt;</span>} <span class="tag">/&gt;</span>
          <span class="tag">&lt;Route</span> <span class="attr">path</span><span class="op">=</span><span class="str">"/dashboard"</span> <span class="attr">element</span><span class="op">=</span>{<span class="tag">&lt;Dashboard /&gt;</span>} <span class="tag">/&gt;</span>
          <span class="tag">&lt;Route</span> <span class="attr">path</span><span class="op">=</span><span class="str">"/settings"</span> <span class="attr">element</span><span class="op">=</span>{<span class="tag">&lt;Settings /&gt;</span>} <span class="tag">/&gt;</span>
          <span class="tag">&lt;Route</span> <span class="attr">path</span><span class="op">=</span><span class="str">"/analytics"</span> <span class="attr">element</span><span class="op">=</span>{<span class="tag">&lt;Analytics /&gt;</span>} <span class="tag">/&gt;</span>
        <span class="tag">&lt;/Routes&gt;</span>
      <span class="tag">&lt;/Suspense&gt;</span>
    <span class="tag">&lt;/BrowserRouter&gt;</span>
  );
}`}),(0,k.jsx)(M,{filename:`useLazyLoad.js`,language:`javascript`,children:`<span class="kw">import</span> { useState, useEffect, useRef } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">/**
 * Uses IntersectionObserver to detect when an element
 * enters the viewport. Perfect for lazy-loading images,
 * infinite scroll, or triggering animations on scroll.
 *
 * @param {Object} options - IntersectionObserver options
 * @returns {[ref, boolean]} Ref to attach and visibility state
 */</span>
<span class="kw">export function</span> <span class="fn">useLazyLoad</span>(options <span class="op">=</span> {}) {
  <span class="kw">const</span> {
    threshold <span class="op">=</span> <span class="num">0.1</span>,
    rootMargin <span class="op">=</span> <span class="str">'50px'</span>,
    triggerOnce <span class="op">=</span> <span class="bool">true</span>,
  } <span class="op">=</span> options;

  <span class="kw">const</span> [isVisible, setIsVisible] <span class="op">=</span> <span class="fn">useState</span>(<span class="bool">false</span>);
  <span class="kw">const</span> elementRef <span class="op">=</span> <span class="fn">useRef</span>(<span class="bool">null</span>);

  <span class="fn">useEffect</span>(() <span class="kw">=&gt;</span> {
    <span class="kw">const</span> element <span class="op">=</span> elementRef.current;
    <span class="kw">if</span> (<span class="op">!</span>element) <span class="kw">return</span>;

    <span class="kw">const</span> observer <span class="op">=</span> <span class="kw">new</span> <span class="fn">IntersectionObserver</span>(
      ([entry]) <span class="kw">=&gt;</span> {
        <span class="kw">if</span> (entry.isIntersecting) {
          <span class="fn">setIsVisible</span>(<span class="bool">true</span>);
          <span class="kw">if</span> (triggerOnce) {
            observer.<span class="fn">unobserve</span>(element);
          }
        } <span class="kw">else if</span> (<span class="op">!</span>triggerOnce) {
          <span class="fn">setIsVisible</span>(<span class="bool">false</span>);
        }
      },
      { threshold, rootMargin }
    );

    observer.<span class="fn">observe</span>(element);

    <span class="kw">return</span> () <span class="kw">=&gt;</span> observer.<span class="fn">disconnect</span>();
  }, [threshold, rootMargin, triggerOnce]);

  <span class="kw">return</span> [elementRef, isVisible];
}`})]}),(0,k.jsxs)(j,{id:`memoization`,icon:`🧠`,iconBg:`#fff7ed`,iconColor:`#ea580c`,title:`4.2 useMemo, useCallback & React.memo`,children:[(0,k.jsx)(`p`,{children:`Memoization is the technique of caching the result of an expensive computation so you don't have to repeat it on every render. React provides three memoization tools, each designed for a specific use case.`}),(0,k.jsx)(`h4`,{children:`Deep Dive: How Each One Works`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`React.memo (Component-level):`}),` A higher-order component that wraps your component and performs a shallow comparison of its props. If the props haven't changed, React skips re-rendering the component entirely and reuses the previous output. Ideal for components that receive the same props frequently.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`useMemo (Value-level):`}),` Caches the result of an expensive computation between re-renders. React only recomputes the value when one of its dependencies changes. Use it for filtering large arrays, complex calculations, or creating derived data.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`useCallback (Function-level):`}),` Caches a function definition between re-renders. Without `,(0,k.jsx)(`code`,{children:`useCallback`}),`, every render creates a new function reference, which can cause child components wrapped in `,(0,k.jsx)(`code`,{children:`React.memo`}),` to re-render unnecessarily.`]})]}),(0,k.jsx)(N,{type:`note`,title:`React 18+ Automatic Batching`,children:`React 18 introduced automatic batching — multiple state updates inside event handlers, promises, setTimeout, and native event handlers are now batched into a single re-render automatically. This means React is already optimizing many scenarios that previously required manual intervention. Before reaching for memoization, make sure you actually have a performance problem — premature optimization adds complexity without benefit.`}),(0,k.jsx)(M,{filename:`Performance Optimization Patterns`,language:`jsx`,children:`<span class="kw">import</span> React, { useMemo, useCallback, useState } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">// ─── React.memo: Skip re-renders when props ──</span>
<span class="cm">// haven't changed (shallow comparison)</span>
<span class="kw">const</span> <span class="fn">ExpensiveList</span> <span class="op">=</span> React.<span class="fn">memo</span>(({ items, onSelect }) <span class="kw">=&gt;</span> {
  console.<span class="fn">log</span>(<span class="str">'ExpensiveList rendered'</span>);
  <span class="kw">return</span> (
    <span class="tag">&lt;ul&gt;</span>
      {items.<span class="fn">map</span>((item) <span class="kw">=&gt;</span> (
        <span class="tag">&lt;li</span>
          <span class="attr">key</span><span class="op">=</span>{item.id}
          <span class="attr">onClick</span><span class="op">=</span>{() <span class="kw">=&gt;</span> <span class="fn">onSelect</span>(item.id)}
        <span class="tag">&gt;</span>
          {item.name}
        <span class="tag">&lt;/li&gt;</span>
      ))}
    <span class="tag">&lt;/ul&gt;</span>
  );
});

<span class="kw">export default function</span> <span class="fn">ProductPage</span>({ products }) {
  <span class="kw">const</span> [filter, setFilter] <span class="op">=</span> <span class="fn">useState</span>(<span class="str">''</span>);
  <span class="kw">const</span> [selectedId, setSelectedId] <span class="op">=</span> <span class="fn">useState</span>(<span class="bool">null</span>);

  <span class="cm">// ─── useMemo: Cache expensive computation ───</span>
  <span class="kw">const</span> filteredProducts <span class="op">=</span> <span class="fn">useMemo</span>(() <span class="kw">=&gt;</span> {
    console.<span class="fn">log</span>(<span class="str">'Filtering products...'</span>);
    <span class="kw">return</span> products
      .<span class="fn">filter</span>((p) <span class="kw">=&gt;</span>
        p.name.<span class="fn">toLowerCase</span>().<span class="fn">includes</span>(
          filter.<span class="fn">toLowerCase</span>()
        )
      )
      .<span class="fn">sort</span>((a, b) <span class="kw">=&gt;</span> a.name.<span class="fn">localeCompare</span>(b.name));
  }, [products, filter]);

  <span class="cm">// ─── useCallback: Stable function reference ─</span>
  <span class="kw">const</span> handleSelect <span class="op">=</span> <span class="fn">useCallback</span>((id) <span class="kw">=&gt;</span> {
    <span class="fn">setSelectedId</span>(id);
  }, []);

  <span class="kw">return</span> (
    <span class="tag">&lt;div&gt;</span>
      <span class="tag">&lt;input</span>
        <span class="attr">value</span><span class="op">=</span>{filter}
        <span class="attr">onChange</span><span class="op">=</span>{(e) <span class="kw">=&gt;</span> <span class="fn">setFilter</span>(e.target.value)}
        <span class="attr">placeholder</span><span class="op">=</span><span class="str">"Filter products..."</span>
      <span class="tag">/&gt;</span>
      <span class="tag">&lt;ExpensiveList</span>
        <span class="attr">items</span><span class="op">=</span>{filteredProducts}
        <span class="attr">onSelect</span><span class="op">=</span>{handleSelect}
      <span class="tag">/&gt;</span>
      {selectedId <span class="op">&amp;&amp;</span> <span class="tag">&lt;p&gt;</span>Selected: {selectedId}<span class="tag">&lt;/p&gt;</span>}
    <span class="tag">&lt;/div&gt;</span>
  );
}`}),(0,k.jsx)(N,{type:`note`,title:`When to Memoize`,children:`Don't memoize everything — memoization has a cost (memory for caching, comparison overhead). Use it when: (1) a component re-renders often with the same props, (2) the render output is expensive to compute, (3) you're passing callbacks to memoized children, or (4) you have large lists that filter or sort on every render. Profile first with React DevTools Profiler, then optimize the actual bottlenecks.`}),(0,k.jsx)(`h4`,{children:`Performance Comparison Table`}),(0,k.jsxs)(P,{headers:[`Technique`,`Level`,`What It Caches`,`When to Use`],children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`React.memo`})}),(0,k.jsx)(`td`,{children:`Component`}),(0,k.jsx)(`td`,{children:`Rendered output (JSX)`}),(0,k.jsx)(`td`,{children:`Component receives same props frequently and is expensive to render`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`useMemo`})}),(0,k.jsx)(`td`,{children:`Value`}),(0,k.jsx)(`td`,{children:`Computed value`}),(0,k.jsx)(`td`,{children:`Expensive calculations like filtering, sorting, or transforming large datasets`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`orange`,children:`useCallback`})}),(0,k.jsx)(`td`,{children:`Function`}),(0,k.jsx)(`td`,{children:`Function reference`}),(0,k.jsx)(`td`,{children:`Passing callbacks to React.memo children or as effect dependencies`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`purple`,children:`React.lazy`})}),(0,k.jsx)(`td`,{children:`Module`}),(0,k.jsx)(`td`,{children:`Component chunk`}),(0,k.jsx)(`td`,{children:`Route-level or heavy component splitting to reduce initial bundle size`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`yellow`,children:`useTransition`})}),(0,k.jsx)(`td`,{children:`Update priority`}),(0,k.jsx)(`td`,{children:`Deferred state update`}),(0,k.jsx)(`td`,{children:`Mark non-urgent updates (like search results filtering) as low priority`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`red`,children:`useDeferredValue`})}),(0,k.jsx)(`td`,{children:`Value priority`}),(0,k.jsx)(`td`,{children:`Deferred value`}),(0,k.jsx)(`td`,{children:`Show stale data while expensive re-render is in progress`})]})]})]}),(0,k.jsxs)(j,{id:`virtualization`,icon:`📜`,iconBg:`#fff7ed`,iconColor:`#ea580c`,title:`4.3 Virtualization & Large Lists`,children:[(0,k.jsx)(`p`,{children:`Rendering thousands of DOM nodes will inevitably crash the browser or cause severe jank, regardless of how well you memoize. Virtualization (or "windowing") solves this by only rendering the specific items currently visible in the user's viewport.`}),(0,k.jsxs)(`p`,{children:[`Libraries like `,(0,k.jsx)(`code`,{children:`react-window`}),` or `,(0,k.jsx)(`code`,{children:`react-virtuoso`}),` handle the math required to absolutely position items inside a scrolling container, dynamically swapping data as the user scrolls.`]})]}),(0,k.jsxs)(j,{id:`concurrent-features`,icon:`⏳`,iconBg:`#fff7ed`,iconColor:`#ea580c`,title:`4.4 React 18 Concurrent Features`,children:[(0,k.jsx)(`p`,{children:`React 18 introduced concurrent rendering, allowing React to pause, abort, and resume renders. This is exposed primarily through two hooks:`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsxs)(`strong`,{children:[(0,k.jsx)(`code`,{children:`useTransition`}),`:`]}),` Marks a state update as non-urgent. If the user types into an input, React will prioritize rendering the keystroke over rendering the heavy search results.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsxs)(`strong`,{children:[(0,k.jsx)(`code`,{children:`useDeferredValue`}),`:`]}),` Similar to useTransition, but used when you receive a value from above (as a prop) and want to defer updating the UI that depends on it.`]})]}),(0,k.jsx)(M,{filename:`useTransition.jsx`,language:`jsx`,children:`import { useState, useTransition } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // Urgent update: The input field updates instantly
    setQuery(e.target.value);
    
    // Non-urgent update: The heavy list rendering can be interrupted
    startTransition(() => {
      // Trigger search/filter here
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending ? <Spinner /> : <HeavyList query={query} />}
    </div>
  );
}`})]})]});function Ar(){return(0,k.jsxs)(A,{id:`collaborating-with-designers`,number:`05`,title:`Collaborating with UI/UX Designers`,theme:`blue`,children:[(0,k.jsx)(`p`,{className:`section-intro`,children:`The most impactful React applications are born from tight collaboration between developers and designers. This chapter explores how to bridge the gap between design and development—translating Figma mockups into maintainable component architectures, establishing shared design tokens, and building responsive layouts that honor the designer's vision across every screen size.`}),(0,k.jsx)(`h3`,{children:`Developer-Designer Collaboration Workflow`}),(0,k.jsxs)(`ol`,{className:`styled-list`,children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Design Handoff & Review`}),` — Walk through Figma/Sketch files together. Clarify spacing, states (hover, active, disabled, error), and responsive breakpoints`,(0,k.jsx)(`em`,{children:`before`}),` writing a single line of code.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Component Inventory`}),` — Map every unique UI element in the design to a React component. Identify shared patterns (buttons, cards, modals) that become your design system.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Token Extraction`}),` — Pull colors, typography scales, spacing units, and border radii from the design file and encode them as CSS custom properties or JS constants.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Iterative Build & QA`}),` — Build components in isolation (Storybook), then compose them into pages. Conduct pixel-level reviews with the designer at each milestone.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Living Style Guide`}),` — Maintain a component library that stays in sync with the design source of truth. Automate visual regression testing to catch drift.`]})]}),(0,k.jsx)(`h3`,{children:`Design System Fundamentals`}),(0,k.jsxs)(`div`,{className:`kv-grid`,children:[(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`4px / 8px Spacing Grid`}),(0,k.jsx)(`span`,{className:`kv-value`,children:`All spacing values are multiples of 4px. Use 8px as the base unit for padding, margins, and gaps. This ensures visual rhythm and consistency.`})]}),(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`Typography Scale`}),(0,k.jsxs)(`span`,{className:`kv-value`,children:[`A modular type scale (e.g., 1.25 ratio) creates hierarchy: 12px → 14px → 16px → 20px → 24px → 32px → 40px → 48px. Map each to a semantic token like`,(0,k.jsx)(`code`,{children:`--font-size-sm`}),`, `,(0,k.jsx)(`code`,{children:`--font-size-base`}),`, `,(0,k.jsx)(`code`,{children:`--font-size-lg`}),`.`]})]}),(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`Color System`}),(0,k.jsxs)(`span`,{className:`kv-value`,children:[`Define a palette with semantic names: `,(0,k.jsx)(`code`,{children:`--color-primary`}),`,`,(0,k.jsx)(`code`,{children:`--color-surface`}),`, `,(0,k.jsx)(`code`,{children:`--color-error`}),`. Include shades (50–900) for each hue to handle hover states, backgrounds, and borders.`]})]}),(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`Shared Language`}),(0,k.jsxs)(`span`,{className:`kv-value`,children:[`Agree on naming conventions between design and code. If the designer calls it a "Card," the component is `,(0,k.jsx)(`code`,{children:`<Card />`}),`. Alignment on vocabulary eliminates ambiguity in standups, PRs, and Jira tickets.`]})]})]}),(0,k.jsxs)(j,{id:`design-tokens-theming`,icon:`🎨`,iconBg:`rgba(59,130,246,0.15)`,iconColor:`#3b82f6`,title:`5.1 — Design Tokens & Theming`,children:[(0,k.jsx)(`h4`,{children:`Why CSS Custom Properties?`}),(0,k.jsxs)(`ul`,{className:`styled-list`,children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Dynamic & Runtime`}),` — Unlike Sass variables, custom properties are live in the browser. You can change them with JavaScript, media queries, or class toggles without recompiling your stylesheets.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Inheritance & Cascading`}),` — Custom properties follow CSS inheritance rules. Set a token on `,(0,k.jsx)(`code`,{children:`:root`}),` and override it on any descendant element or component scope.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Dark Mode Made Easy`}),` — Swap an entire theme by toggling a`,(0,k.jsx)(`code`,{children:`data-theme="dark"`}),` attribute on `,(0,k.jsx)(`code`,{children:`<html>`}),`and redefining a handful of properties.`]})]}),(0,k.jsx)(M,{filename:`tokens.css`,language:`CSS`,children:`<span class="cm">/* ── Color Tokens ── */</span>
<span class="kw">:root</span> {
  <span class="cm">/* Primary */</span>
  <span class="attr">--color-primary-50</span>:  <span class="str">#eff6ff</span>;
  <span class="attr">--color-primary-100</span>: <span class="str">#dbeafe</span>;
  <span class="attr">--color-primary-500</span>: <span class="str">#3b82f6</span>;
  <span class="attr">--color-primary-600</span>: <span class="str">#2563eb</span>;
  <span class="attr">--color-primary-700</span>: <span class="str">#1d4ed8</span>;

  <span class="cm">/* Neutral / Surface */</span>
  <span class="attr">--color-bg</span>:         <span class="str">#ffffff</span>;
  <span class="attr">--color-surface</span>:    <span class="str">#f8fafc</span>;
  <span class="attr">--color-border</span>:     <span class="str">#e2e8f0</span>;
  <span class="attr">--color-text</span>:       <span class="str">#0f172a</span>;
  <span class="attr">--color-text-muted</span>: <span class="str">#64748b</span>;

  <span class="cm">/* Semantic */</span>
  <span class="attr">--color-success</span>:    <span class="str">#22c55e</span>;
  <span class="attr">--color-warning</span>:    <span class="str">#f59e0b</span>;
  <span class="attr">--color-error</span>:      <span class="str">#ef4444</span>;

  <span class="cm">/* ── Typography ── */</span>
  <span class="attr">--font-sans</span>:  <span class="str">'Inter', system-ui, sans-serif</span>;
  <span class="attr">--font-mono</span>:  <span class="str">'JetBrains Mono', monospace</span>;

  <span class="attr">--font-size-xs</span>:  <span class="num">0.75rem</span>;   <span class="cm">/* 12px */</span>
  <span class="attr">--font-size-sm</span>:  <span class="num">0.875rem</span>;  <span class="cm">/* 14px */</span>
  <span class="attr">--font-size-base</span>: <span class="num">1rem</span>;      <span class="cm">/* 16px */</span>
  <span class="attr">--font-size-lg</span>:  <span class="num">1.25rem</span>;   <span class="cm">/* 20px */</span>
  <span class="attr">--font-size-xl</span>:  <span class="num">1.5rem</span>;    <span class="cm">/* 24px */</span>
  <span class="attr">--font-size-2xl</span>: <span class="num">2rem</span>;      <span class="cm">/* 32px */</span>

  <span class="cm">/* ── Spacing (4px grid) ── */</span>
  <span class="attr">--space-1</span>:  <span class="num">0.25rem</span>;  <span class="cm">/* 4px  */</span>
  <span class="attr">--space-2</span>:  <span class="num">0.5rem</span>;   <span class="cm">/* 8px  */</span>
  <span class="attr">--space-3</span>:  <span class="num">0.75rem</span>;  <span class="cm">/* 12px */</span>
  <span class="attr">--space-4</span>:  <span class="num">1rem</span>;     <span class="cm">/* 16px */</span>
  <span class="attr">--space-6</span>:  <span class="num">1.5rem</span>;   <span class="cm">/* 24px */</span>
  <span class="attr">--space-8</span>:  <span class="num">2rem</span>;     <span class="cm">/* 32px */</span>
  <span class="attr">--space-12</span>: <span class="num">3rem</span>;     <span class="cm">/* 48px */</span>

  <span class="cm">/* ── Border Radius ── */</span>
  <span class="attr">--radius-sm</span>:   <span class="num">4px</span>;
  <span class="attr">--radius-md</span>:   <span class="num">8px</span>;
  <span class="attr">--radius-lg</span>:   <span class="num">12px</span>;
  <span class="attr">--radius-full</span>: <span class="num">9999px</span>;
}`}),(0,k.jsx)(M,{filename:`dark-theme.css`,language:`CSS`,children:`<span class="cm">/* Dark theme overrides */</span>
<span class="kw">[data-theme="dark"]</span> {
  <span class="attr">--color-bg</span>:         <span class="str">#0f172a</span>;
  <span class="attr">--color-surface</span>:    <span class="str">#1e293b</span>;
  <span class="attr">--color-border</span>:     <span class="str">#334155</span>;
  <span class="attr">--color-text</span>:       <span class="str">#f1f5f9</span>;
  <span class="attr">--color-text-muted</span>: <span class="str">#94a3b8</span>;

  <span class="attr">--color-primary-50</span>:  <span class="str">#172554</span>;
  <span class="attr">--color-primary-100</span>: <span class="str">#1e3a5f</span>;
  <span class="attr">--color-primary-500</span>: <span class="str">#60a5fa</span>;
  <span class="attr">--color-primary-600</span>: <span class="str">#3b82f6</span>;
  <span class="attr">--color-primary-700</span>: <span class="str">#2563eb</span>;
}`})]}),(0,k.jsxs)(j,{id:`responsive-design`,icon:`📱`,iconBg:`rgba(59,130,246,0.15)`,iconColor:`#3b82f6`,title:`5.2 — Responsive Design Implementation`,children:[(0,k.jsx)(`h4`,{children:`The Mobile-First Approach`}),(0,k.jsxs)(`p`,{children:[`Mobile-first means writing your base styles for the smallest screen, then layering on complexity with `,(0,k.jsx)(`code`,{children:`min-width`}),` media queries. This forces you to prioritize content and performance—mobile users get only the CSS they need, while desktop users progressively receive richer layouts. It mirrors how designers think: `,(0,k.jsx)(`em`,{children:`what's essential?`})]}),(0,k.jsx)(`h4`,{children:`Breakpoint System`}),(0,k.jsxs)(P,{headers:[`Name`,`Min Width`,`Target`,`CSS Variable`],children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`sm`})}),(0,k.jsx)(`td`,{children:`640px`}),(0,k.jsx)(`td`,{children:`Large phones`}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:`--bp-sm`})})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`md`})}),(0,k.jsx)(`td`,{children:`768px`}),(0,k.jsx)(`td`,{children:`Tablets`}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:`--bp-md`})})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`lg`})}),(0,k.jsx)(`td`,{children:`1024px`}),(0,k.jsx)(`td`,{children:`Laptops`}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:`--bp-lg`})})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`xl`})}),(0,k.jsx)(`td`,{children:`1280px`}),(0,k.jsx)(`td`,{children:`Desktops`}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:`--bp-xl`})})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`2xl`})}),(0,k.jsx)(`td`,{children:`1536px`}),(0,k.jsx)(`td`,{children:`Large screens`}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:`--bp-2xl`})})]})]}),(0,k.jsx)(M,{filename:`responsive-grid.css`,language:`CSS`,children:`<span class="cm">/* Mobile-first responsive grid */</span>
<span class="kw">.grid</span> {
  <span class="attr">display</span>: <span class="fn">grid</span>;
  <span class="attr">gap</span>: <span class="fn">var</span>(<span class="attr">--space-4</span>);
  <span class="attr">grid-template-columns</span>: <span class="num">1fr</span>;
}

<span class="cm">/* Tablet: 2 columns */</span>
<span class="kw">@media</span> (<span class="attr">min-width</span>: <span class="num">768px</span>) {
  <span class="kw">.grid</span> {
    <span class="attr">grid-template-columns</span>: <span class="kw">repeat</span>(<span class="num">2</span>, <span class="num">1fr</span>);
    <span class="attr">gap</span>: <span class="fn">var</span>(<span class="attr">--space-6</span>);
  }
}

<span class="cm">/* Desktop: 3 columns */</span>
<span class="kw">@media</span> (<span class="attr">min-width</span>: <span class="num">1024px</span>) {
  <span class="kw">.grid</span> {
    <span class="attr">grid-template-columns</span>: <span class="kw">repeat</span>(<span class="num">3</span>, <span class="num">1fr</span>);
    <span class="attr">gap</span>: <span class="fn">var</span>(<span class="attr">--space-8</span>);
  }
}

<span class="cm">/* Large desktop: 4 columns */</span>
<span class="kw">@media</span> (<span class="attr">min-width</span>: <span class="num">1280px</span>) {
  <span class="kw">.grid</span> {
    <span class="attr">grid-template-columns</span>: <span class="kw">repeat</span>(<span class="num">4</span>, <span class="num">1fr</span>);
  }
}`}),(0,k.jsx)(M,{filename:`useMediaQuery.js`,language:`JavaScript`,children:`<span class="kw">import</span> { <span class="fn">useState</span>, <span class="fn">useEffect</span> } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">export default function</span> <span class="fn">useMediaQuery</span>(<span class="attr">query</span>) {
  <span class="kw">const</span> [<span class="attr">matches</span>, <span class="fn">setMatches</span>] = <span class="fn">useState</span>(
    () <span class="op">=&gt;</span> <span class="fn">window</span>.<span class="fn">matchMedia</span>(<span class="attr">query</span>).<span class="attr">matches</span>
  );

  <span class="fn">useEffect</span>(() <span class="op">=&gt;</span> {
    <span class="kw">const</span> <span class="attr">mql</span> = <span class="fn">window</span>.<span class="fn">matchMedia</span>(<span class="attr">query</span>);

    <span class="kw">const</span> <span class="fn">handler</span> = (<span class="attr">e</span>) <span class="op">=&gt;</span> <span class="fn">setMatches</span>(<span class="attr">e</span>.<span class="attr">matches</span>);
    <span class="attr">mql</span>.<span class="fn">addEventListener</span>(<span class="str">'change'</span>, <span class="fn">handler</span>);

    <span class="cm">// Sync on mount in case query changed</span>
    <span class="fn">setMatches</span>(<span class="attr">mql</span>.<span class="attr">matches</span>);

    <span class="kw">return</span> () <span class="op">=&gt;</span> <span class="attr">mql</span>.<span class="fn">removeEventListener</span>(<span class="str">'change'</span>, <span class="fn">handler</span>);
  }, [<span class="attr">query</span>]);

  <span class="kw">return</span> <span class="attr">matches</span>;
}

<span class="cm">// Usage:</span>
<span class="cm">// const isMobile  = useMediaQuery('(max-width: 767px)');</span>
<span class="cm">// const isDesktop = useMediaQuery('(min-width: 1024px)');</span>`}),(0,k.jsx)(N,{type:`tip`,title:`Designer-Developer Sync Tip`,children:(0,k.jsx)(`p`,{children:`Export your breakpoint values as both CSS custom properties and a shared JSON config. This way, designers and developers always reference the same breakpoints—no more "is tablet 768 or 800?" debates.`})})]}),(0,k.jsxs)(j,{id:`accessibility-first`,icon:`♿`,iconBg:`rgba(59,130,246,0.15)`,iconColor:`#3b82f6`,title:`5.3 — Accessibility (a11y) First`,children:[(0,k.jsx)(`p`,{children:`Accessibility shouldn't be an afterthought. Building inclusive applications means ensuring users who rely on screen readers, keyboard navigation, or have visual impairments can use your app without barriers.`}),(0,k.jsxs)(`ul`,{className:`styled-list`,children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Semantic HTML:`}),` Use `,(0,k.jsx)(`code`,{children:`<button>`}),` for actions and `,(0,k.jsx)(`code`,{children:`<a>`}),` for navigation. Don't use a `,(0,k.jsx)(`code`,{children:`<div>`}),` with an onClick handler unless absolutely necessary (and if you do, add `,(0,k.jsx)(`code`,{children:`role="button"`}),` and `,(0,k.jsx)(`code`,{children:`tabIndex={0}`}),`).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Focus Management:`}),` When a modal opens, trap the focus inside it. When it closes, return focus to the element that opened it.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`ARIA Attributes:`}),` Use `,(0,k.jsx)(`code`,{children:`aria-expanded`}),` for accordions, `,(0,k.jsx)(`code`,{children:`aria-hidden`}),` for decorative icons, and `,(0,k.jsx)(`code`,{children:`aria-live`}),` for dynamic content updates (like toast notifications).`]})]})]}),(0,k.jsxs)(j,{id:`micro-animations`,icon:`✨`,iconBg:`rgba(59,130,246,0.15)`,iconColor:`#3b82f6`,title:`5.4 — Micro-Animations & Interactions`,children:[(0,k.jsx)(`p`,{children:`Subtle animations provide feedback and delight without getting in the way. Hover states, active press states, and smooth transitions when elements enter or leave the DOM turn a static page into a fluid experience.`}),(0,k.jsx)(N,{type:`tip`,title:`Framer Motion`,children:(0,k.jsxs)(`p`,{children:[`For complex orchestrated animations in React, `,(0,k.jsx)(`a`,{href:`https://www.framer.com/motion/`,target:`_blank`,rel:`noreferrer`,children:`Framer Motion`}),` is the industry standard. It handles layout animations, gesture recognition, and spring physics effortlessly.`]})})]})]})}function jr(){return(0,k.jsxs)(A,{id:`version-control-git`,number:`06`,title:`Version Control with Git`,theme:`purple`,children:[(0,k.jsx)(`p`,{className:`section-intro`,children:`Git is the backbone of modern team collaboration. Beyond simply tracking changes, Git enables parallel development, safe experimentation via branches, and a reviewable history of every decision your team makes. Mastering Git workflows is what separates a solo coder from a productive team contributor.`}),(0,k.jsx)(`h3`,{children:`Git Fundamentals`}),(0,k.jsxs)(`div`,{className:`kv-grid`,children:[(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`Distributed VCS`}),(0,k.jsx)(`span`,{className:`kv-value`,children:`Every developer has a full copy of the repository, including its entire history. You can commit, branch, and diff offline—no server required.`})]}),(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`Three States`}),(0,k.jsxs)(`span`,{className:`kv-value`,children:[`Files move through three stages: `,(0,k.jsx)(`strong`,{children:`Working Directory`}),` (modified),`,(0,k.jsx)(`strong`,{children:` Staging Area`}),` (indexed), and `,(0,k.jsx)(`strong`,{children:`Repository`}),` (committed). Understanding this flow is key to every Git command.`]})]}),(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`Snapshots, Not Diffs`}),(0,k.jsx)(`span`,{className:`kv-value`,children:`Git stores full snapshots of your project at each commit, not incremental diffs. This makes branching and merging extremely fast and reliable.`})]})]}),(0,k.jsxs)(j,{id:`git-branching-strategy`,icon:`🌿`,iconBg:`rgba(168,85,247,0.15)`,iconColor:`#a855f7`,title:`6.1 — Git Branching Strategy (Git Flow)`,children:[(0,k.jsx)(`h4`,{children:`Common Branching Models`}),(0,k.jsxs)(`ul`,{className:`styled-list`,children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Git Flow`}),` — Uses `,(0,k.jsx)(`code`,{children:`main`}),`, `,(0,k.jsx)(`code`,{children:`develop`}),`,`,(0,k.jsx)(`code`,{children:`feature/*`}),`, `,(0,k.jsx)(`code`,{children:`release/*`}),`, and `,(0,k.jsx)(`code`,{children:`hotfix/*`}),` branches. Best for projects with scheduled releases and strict QA stages.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`GitHub Flow`}),` — A simpler model: branch from `,(0,k.jsx)(`code`,{children:`main`}),`, open a PR, review, merge. Ideal for continuous deployment where every merge goes straight to production.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Trunk-Based`}),` — Everyone commits to `,(0,k.jsx)(`code`,{children:`main`}),` (or a single trunk) multiple times a day using feature flags. Favored by high-velocity teams with strong CI/CD pipelines.`]})]}),(0,k.jsx)(`h4`,{children:`Merge vs. Rebase`}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Merge`}),` creates a merge commit preserving the full branch topology— great for auditing when a feature was integrated. `,(0,k.jsx)(`strong`,{children:`Rebase`}),` replays your commits onto the tip of the target branch, producing a linear history that's easier to read. The golden rule: `,(0,k.jsx)(`em`,{children:`never rebase commits that have been pushed to a shared branch`}),`. Use rebase for local cleanup; use merge for integrating shared work.`]}),(0,k.jsxs)(Sr,{title:`Git Flow Branching Model`,children:[(0,k.jsxs)(Cr,{children:[(0,k.jsxs)(wr,{variant:`primary`,children:[(0,k.jsx)(`strong`,{children:`main`}),(0,k.jsx)(`small`,{children:`Production`})]}),(0,k.jsx)(Tr,{children:`←`}),(0,k.jsxs)(wr,{variant:`accent`,children:[(0,k.jsx)(`strong`,{children:`develop`}),(0,k.jsx)(`small`,{children:`Integration`})]}),(0,k.jsx)(Tr,{children:`←`}),(0,k.jsxs)(wr,{variant:`success`,children:[(0,k.jsx)(`strong`,{children:`feature/*`}),(0,k.jsx)(`small`,{children:`New Features`})]})]}),(0,k.jsxs)(Cr,{style:{marginTop:`1rem`},children:[(0,k.jsxs)(wr,{variant:`warning`,children:[(0,k.jsx)(`strong`,{children:`hotfix/*`}),(0,k.jsx)(`small`,{children:`Critical Fixes`})]}),(0,k.jsx)(Tr,{children:`→`}),(0,k.jsxs)(wr,{variant:`primary`,children:[(0,k.jsx)(`strong`,{children:`main`}),(0,k.jsx)(`small`,{children:`& develop`})]})]})]}),(0,k.jsx)(M,{filename:`daily-git-workflow.sh`,language:`Bash`,children:`<span class="cm"># ── Daily Git Workflow ──</span>

<span class="cm"># 1. Start a new feature branch</span>
<span class="fn">git</span> checkout develop
<span class="fn">git</span> pull origin develop
<span class="fn">git</span> checkout <span class="op">-b</span> feature/user-dashboard

<span class="cm"># 2. Make changes and commit</span>
<span class="fn">git</span> add <span class="op">-A</span>
<span class="fn">git</span> commit <span class="op">-m</span> <span class="str">"feat(dashboard): add analytics chart component"</span>

<span class="cm"># 3. Push to remote</span>
<span class="fn">git</span> push origin feature/user-dashboard

<span class="cm"># 4. Keep up with develop (rebase for clean history)</span>
<span class="fn">git</span> fetch origin
<span class="fn">git</span> rebase origin/develop

<span class="cm"># 5. Stash work-in-progress when switching context</span>
<span class="fn">git</span> stash push <span class="op">-m</span> <span class="str">"WIP: chart tooltips"</span>
<span class="fn">git</span> stash list
<span class="fn">git</span> stash pop

<span class="cm"># 6. Review recent history</span>
<span class="fn">git</span> log <span class="op">--oneline</span> <span class="op">--graph</span> <span class="op">--all</span> <span class="op">-15</span>`})]}),(0,k.jsxs)(j,{id:`conventional-commits`,icon:`✍️`,iconBg:`rgba(168,85,247,0.15)`,iconColor:`#a855f7`,title:`6.2 — Conventional Commits & PR Best Practices`,children:[(0,k.jsx)(`h4`,{children:`Commit Message Format`}),(0,k.jsxs)(`p`,{children:[`Conventional Commits follow a structured format:`,(0,k.jsx)(`code`,{children:` type(scope): description`}),`. The `,(0,k.jsx)(`strong`,{children:`type`}),` tells reviewers`,(0,k.jsx)(`em`,{children:`what kind`}),` of change this is. The `,(0,k.jsx)(`strong`,{children:`scope`}),` (optional) narrows it to a module. The `,(0,k.jsx)(`strong`,{children:`description`}),` explains `,(0,k.jsx)(`em`,{children:`what`}),`changed, in imperative mood ("add" not "added"). This format enables automated changelogs, semantic versioning, and makes `,(0,k.jsx)(`code`,{children:`git log`}),` scannable.`]}),(0,k.jsxs)(P,{headers:[`Type`,`Purpose`,`Example`],children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`feat`})}),(0,k.jsx)(`td`,{children:`A new feature for the user`}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:`feat(auth): add OAuth2 login flow`})})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`red`,children:`fix`})}),(0,k.jsx)(`td`,{children:`A bug fix`}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:`fix(cart): correct quantity calculation`})})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`refactor`})}),(0,k.jsx)(`td`,{children:`Code restructuring without behavior change`}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:`refactor(api): extract fetch wrapper`})})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`orange`,children:`perf`})}),(0,k.jsx)(`td`,{children:`Performance improvement`}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:`perf(list): virtualize long product lists`})})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`purple`,children:`test`})}),(0,k.jsx)(`td`,{children:`Adding or correcting tests`}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:`test(utils): add date formatting tests`})})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`docs`})}),(0,k.jsx)(`td`,{children:`Documentation only changes`}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:`docs(readme): update setup instructions`})})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`gray`,children:`chore`})}),(0,k.jsx)(`td`,{children:`Build, CI, or tooling changes`}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:`chore(deps): bump react to 18.3`})})]})]}),(0,k.jsx)(N,{type:`tip`,title:`PR Review Checklist`,children:(0,k.jsxs)(`ul`,{children:[(0,k.jsx)(`li`,{children:`✅ Code compiles and all tests pass`}),(0,k.jsx)(`li`,{children:`✅ No unnecessary console.log or debugger statements`}),(0,k.jsx)(`li`,{children:`✅ Component follows existing naming conventions`}),(0,k.jsxs)(`li`,{children:[`✅ Complex logic has inline comments explaining `,(0,k.jsx)(`em`,{children:`why`})]}),(0,k.jsx)(`li`,{children:`✅ Accessibility: interactive elements are keyboard-navigable`}),(0,k.jsx)(`li`,{children:`✅ PR description links to the relevant Jira/Linear ticket`})]})})]}),(0,k.jsxs)(j,{id:`automated-checks-cicd`,icon:`🤖`,iconBg:`rgba(168,85,247,0.15)`,iconColor:`#a855f7`,title:`6.3 — Automated Checks (CI/CD)`,children:[(0,k.jsx)(`p`,{children:`Continuous Integration (CI) and Continuous Deployment (CD) are automated processes that ensure code quality and streamline delivery. As a front-end developer, you should understand how to gate your commits and PRs.`}),(0,k.jsxs)(`ul`,{className:`styled-list`,children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Pre-commit Hooks (Husky):`}),` Run ESLint, Prettier, and basic unit tests automatically when a developer runs `,(0,k.jsx)(`code`,{children:`git commit`}),`. If the checks fail, the commit is aborted.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`GitHub Actions / GitLab CI:`}),` When a PR is opened, a remote server runs the full test suite, builds the app, and performs dependency security audits. Reviewers only review code that passes the CI pipeline.`]})]})]}),(0,k.jsxs)(j,{id:`advanced-git-techniques`,icon:`🥷`,iconBg:`rgba(168,85,247,0.15)`,iconColor:`#a855f7`,title:`6.4 — Advanced Git Techniques`,children:[(0,k.jsx)(`p`,{children:`Beyond commit, push, and pull, power users leverage advanced Git commands to untangle messy histories and track down bugs.`}),(0,k.jsx)(M,{filename:`advanced-git.sh`,language:`Bash`,children:`# ── Interactive Rebase ──
# Squash multiple messy commits into one clean commit before merging
git rebase -i HEAD~3

# ── Cherry Picking ──
# Grab a specific commit from another branch and apply it here
git cherry-pick 9fceb02

# ── Git Bisect ──
# Automatically find which commit introduced a bug using binary search
git bisect start
git bisect bad HEAD       # The bug exists now
git bisect good 4a2b6c9   # The bug didn't exist 50 commits ago
# Git will checkout a commit in the middle for you to test`})]})]})}function Mr(){return(0,k.jsxs)(A,{id:`debugging-troubleshooting`,number:`07`,title:`Debugging, Troubleshooting & Upgrading`,theme:`red`,children:[(0,k.jsx)(`p`,{className:`section-intro`,children:`Every React developer spends a significant portion of their time debugging. The difference between a junior and senior developer isn't the number of bugs they encounter—it's how systematically they diagnose and resolve them. This chapter equips you with the mindset, tools, and patterns to squash bugs efficiently and build resilient applications.`}),(0,k.jsx)(`h3`,{children:`The Debugging Mindset`}),(0,k.jsxs)(`ol`,{className:`styled-list`,children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Reproduce`}),` — Before fixing anything, create a reliable reproduction. Can you trigger the bug consistently? Note the exact steps, browser, and state that cause it. A bug you can't reproduce is a bug you can't verify as fixed.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Isolate`}),` — Narrow the problem to the smallest possible scope. Comment out components, simplify state, or create a minimal reproduction in a fresh project. The goal is to eliminate variables.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Identify`}),` — Read the error messages carefully. Check the component tree in React DevTools. Add strategic `,(0,k.jsx)(`code`,{children:`console.log`}),` statements or breakpoints. Form a hypothesis and test it.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Fix & Verify`}),` — Apply the smallest possible fix. Run the full test suite. Verify the fix in the original reproduction scenario. Write a regression test so this bug never returns.`]})]}),(0,k.jsx)(`h3`,{children:`Common React Bugs`}),(0,k.jsxs)(`div`,{className:`kv-grid`,children:[(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`Infinite Re-renders`}),(0,k.jsxs)(`span`,{className:`kv-value`,children:[`Caused by calling `,(0,k.jsx)(`code`,{children:`setState`}),` inside a render or in a `,(0,k.jsx)(`code`,{children:`useEffect`}),`without proper dependencies. The component updates, triggers the effect, which updates state, triggering another render—an infinite loop.`]})]}),(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`Stale Closures`}),(0,k.jsx)(`span`,{className:`kv-value`,children:`Event handlers or effects that capture an old value of state or props because the dependency array is missing entries. The function "closes over" a stale snapshot instead of the current value.`})]}),(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`Memory Leaks`}),(0,k.jsxs)(`span`,{className:`kv-value`,children:[`Setting state on an unmounted component—typically from an uncleared subscription, timer, or async fetch that resolves after navigation. Always return cleanup functions from `,(0,k.jsx)(`code`,{children:`useEffect`}),`.`]})]})]}),(0,k.jsxs)(j,{id:`react-devtools-profiler`,icon:`🔍`,iconBg:`rgba(239,68,68,0.15)`,iconColor:`#ef4444`,title:`7.1 — React DevTools & Profiler`,children:[(0,k.jsx)(`h4`,{children:`Using the Components Tab`}),(0,k.jsxs)(`ul`,{className:`styled-list`,children:[(0,k.jsx)(`li`,{children:`Inspect the component tree to see the hierarchy, current props, state, and hooks for any component. Click a component to view its details in the right panel.`}),(0,k.jsx)(`li`,{children:`Use the search bar to quickly find components by name. Filter by "rendered by" to trace which parent is rendering a child component.`}),(0,k.jsx)(`li`,{children:`Right-click a component to "Log this component" to the console, "Show source," or "Store as global variable" for live debugging.`})]}),(0,k.jsx)(`h4`,{children:`Using the Profiler Tab`}),(0,k.jsxs)(`p`,{children:[`The Profiler records rendering performance. Click "Record," interact with your app, then stop. You'll see a flame graph of every component that rendered, how long each took, and `,(0,k.jsx)(`em`,{children:`why`}),` it rendered (prop change, state change, or parent re-render). Look for components that render frequently with the same props—those are candidates for `,(0,k.jsx)(`code`,{children:`React.memo()`}),`.`]}),(0,k.jsxs)(P,{headers:[`Tool`,`Purpose`,`When to Use`],children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`React DevTools Components`})}),(0,k.jsx)(`td`,{children:`Inspect component tree, props, state, hooks`}),(0,k.jsx)(`td`,{children:`Understanding component hierarchy and data flow`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`React DevTools Profiler`})}),(0,k.jsx)(`td`,{children:`Record and analyze rendering performance`}),(0,k.jsx)(`td`,{children:`Identifying unnecessary re-renders and slow components`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`purple`,children:`Chrome DevTools Network`})}),(0,k.jsx)(`td`,{children:`Monitor API requests, response times, payloads`}),(0,k.jsx)(`td`,{children:`Debugging API integration, checking request headers`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`purple`,children:`Chrome DevTools Performance`})}),(0,k.jsx)(`td`,{children:`CPU profiling, layout thrashing, long tasks`}),(0,k.jsx)(`td`,{children:`Diagnosing jank, slow interactions, large layout shifts`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`console.table()`})}),(0,k.jsx)(`td`,{children:`Display arrays/objects as formatted tables`}),(0,k.jsx)(`td`,{children:`Quick inspection of data structures during development`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`orange`,children:`React.StrictMode`})}),(0,k.jsx)(`td`,{children:`Double-invokes effects and renders in development`}),(0,k.jsx)(`td`,{children:`Catching side effects, impure renders, deprecated APIs`})]})]}),(0,k.jsx)(M,{filename:`useWhyDidYouRender.js`,language:`JavaScript`,children:`<span class="kw">import</span> { <span class="fn">useRef</span>, <span class="fn">useEffect</span> } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">/**
 * Debug hook: logs which props/state changed between renders.
 * Usage: useWhyDidYouRender('MyComponent', { count, user, items });
 */</span>
<span class="kw">export default function</span> <span class="fn">useWhyDidYouRender</span>(<span class="attr">componentName</span>, <span class="attr">props</span>) {
  <span class="kw">const</span> <span class="attr">prevProps</span> = <span class="fn">useRef</span>(<span class="attr">props</span>);

  <span class="fn">useEffect</span>(() <span class="op">=&gt;</span> {
    <span class="kw">if</span> (<span class="attr">prevProps</span>.<span class="attr">current</span>) {
      <span class="kw">const</span> <span class="attr">allKeys</span> = <span class="fn">Object</span>.<span class="fn">keys</span>({
        ...<span class="attr">prevProps</span>.<span class="attr">current</span>,
        ...<span class="attr">props</span>,
      });

      <span class="kw">const</span> <span class="attr">changes</span> = {};
      <span class="attr">allKeys</span>.<span class="fn">forEach</span>((<span class="attr">key</span>) <span class="op">=&gt;</span> {
        <span class="kw">if</span> (<span class="attr">prevProps</span>.<span class="attr">current</span>[<span class="attr">key</span>] <span class="op">!==</span> <span class="attr">props</span>[<span class="attr">key</span>]) {
          <span class="attr">changes</span>[<span class="attr">key</span>] = {
            <span class="attr">from</span>: <span class="attr">prevProps</span>.<span class="attr">current</span>[<span class="attr">key</span>],
            <span class="attr">to</span>: <span class="attr">props</span>[<span class="attr">key</span>],
          };
        }
      });

      <span class="kw">if</span> (<span class="fn">Object</span>.<span class="fn">keys</span>(<span class="attr">changes</span>).<span class="attr">length</span>) {
        <span class="fn">console</span>.<span class="fn">group</span>(
          <span class="str">\`[WhyRender] \${</span><span class="attr">componentName</span><span class="str">}\`</span>
        );
        <span class="fn">console</span>.<span class="fn">table</span>(<span class="attr">changes</span>);
        <span class="fn">console</span>.<span class="fn">groupEnd</span>();
      }
    }
    <span class="attr">prevProps</span>.<span class="attr">current</span> = <span class="attr">props</span>;
  });
}`})]}),(0,k.jsxs)(j,{id:`error-boundaries-logging`,icon:`🛡️`,iconBg:`rgba(239,68,68,0.15)`,iconColor:`#ef4444`,title:`7.2 — Error Boundaries & Logging`,children:[(0,k.jsxs)(`p`,{children:[`Error boundaries are React class components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application. They act as a `,(0,k.jsx)(`code`,{children:`try/catch`}),` for your component tree—without them, a single thrown error unmounts everything.`]}),(0,k.jsx)(`h4`,{children:`Strategic Placement`}),(0,k.jsxs)(`ul`,{className:`styled-list`,children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Route Level`}),` — Wrap each route in an error boundary so a crash in one page doesn't nuke the sidebar, navigation, or other routes. Users can navigate away from the broken page.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Widget Level`}),` — Wrap individual widgets (charts, feeds, third-party embeds) so a failure in one widget shows a localized error message while the rest of the page continues to function.`]})]}),(0,k.jsx)(M,{filename:`ErrorBoundary.jsx`,language:`JSX`,children:`<span class="kw">import</span> { <span class="type">Component</span> } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">export default class</span> <span class="type">ErrorBoundary</span> <span class="kw">extends</span> <span class="type">Component</span> {
  <span class="fn">constructor</span>(<span class="attr">props</span>) {
    <span class="kw">super</span>(<span class="attr">props</span>);
    <span class="kw">this</span>.<span class="attr">state</span> = {
      <span class="attr">hasError</span>: <span class="bool">false</span>,
      <span class="attr">error</span>: <span class="bool">null</span>,
      <span class="attr">errorInfo</span>: <span class="bool">null</span>,
    };
  }

  <span class="kw">static</span> <span class="fn">getDerivedStateFromError</span>(<span class="attr">error</span>) {
    <span class="cm">// Update state so the next render shows fallback UI</span>
    <span class="kw">return</span> { <span class="attr">hasError</span>: <span class="bool">true</span>, <span class="attr">error</span> };
  }

  <span class="fn">componentDidCatch</span>(<span class="attr">error</span>, <span class="attr">errorInfo</span>) {
    <span class="cm">// Log to an external error reporting service</span>
    <span class="fn">console</span>.<span class="fn">error</span>(<span class="str">'ErrorBoundary caught:'</span>, <span class="attr">error</span>, <span class="attr">errorInfo</span>);
    <span class="kw">this</span>.<span class="fn">setState</span>({ <span class="attr">errorInfo</span> });

    <span class="cm">// Example: send to Sentry, LogRocket, etc.</span>
    <span class="cm">// logErrorToService(error, errorInfo);</span>
  }

  <span class="fn">handleReset</span> = () <span class="op">=&gt;</span> {
    <span class="kw">this</span>.<span class="fn">setState</span>({
      <span class="attr">hasError</span>: <span class="bool">false</span>,
      <span class="attr">error</span>: <span class="bool">null</span>,
      <span class="attr">errorInfo</span>: <span class="bool">null</span>,
    });
  };

  <span class="fn">render</span>() {
    <span class="kw">if</span> (<span class="kw">this</span>.<span class="attr">state</span>.<span class="attr">hasError</span>) {
      <span class="kw">return</span> (
        <span class="tag">&lt;div</span> <span class="attr">className</span>=<span class="str">"error-fallback"</span><span class="tag">&gt;</span>
          <span class="tag">&lt;h2&gt;</span>Something went wrong<span class="tag">&lt;/h2&gt;</span>
          <span class="tag">&lt;pre&gt;</span>{<span class="kw">this</span>.<span class="attr">state</span>.<span class="attr">error</span>?.<span class="fn">toString</span>()}<span class="tag">&lt;/pre&gt;</span>
          <span class="tag">&lt;button</span> <span class="attr">onClick</span>={<span class="kw">this</span>.<span class="attr">handleReset</span>}<span class="tag">&gt;</span>
            Try Again
          <span class="tag">&lt;/button&gt;</span>
        <span class="tag">&lt;/div&gt;</span>
      );
    }

    <span class="kw">return</span> <span class="kw">this</span>.<span class="attr">props</span>.<span class="attr">children</span>;
  }
}`}),(0,k.jsxs)(N,{type:`important`,title:`What Error Boundaries Don't Catch`,children:[(0,k.jsxs)(`p`,{children:[`Error boundaries do `,(0,k.jsx)(`strong`,{children:`not`}),` catch errors in:`]}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[`Event handlers — use regular `,(0,k.jsx)(`code`,{children:`try/catch`}),` inside handlers`]}),(0,k.jsxs)(`li`,{children:[`Asynchronous code — `,(0,k.jsx)(`code`,{children:`setTimeout`}),`, `,(0,k.jsx)(`code`,{children:`requestAnimationFrame`}),`, promises`]}),(0,k.jsx)(`li`,{children:`Server-side rendering (SSR)`}),(0,k.jsx)(`li`,{children:`Errors thrown in the error boundary component itself`})]}),(0,k.jsxs)(`p`,{children:[`For async errors, pair error boundaries with global`,(0,k.jsx)(`code`,{children:` window.addEventListener('unhandledrejection', ...)`}),` handlers and an error logging service.`]})]})]}),(0,k.jsxs)(j,{id:`upgrading-react`,icon:`⬆️`,iconBg:`rgba(239,68,68,0.15)`,iconColor:`#ef4444`,title:`7.3 — Upgrading React Versions`,children:[(0,k.jsx)(`p`,{children:`React upgrades are typically smooth, but jumping across major versions (e.g., 17 to 18, or 18 to 19) requires planning. The React team provides codemods to automate many syntax changes.`}),(0,k.jsxs)(`ul`,{className:`styled-list`,children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Read the Changelog:`}),` Pay special attention to breaking changes and deprecation warnings in the console.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Use Strict Mode:`}),` Wrap your app in `,(0,k.jsx)(`code`,{children:`<React.StrictMode>`}),` in development. It surfaces legacy lifecycle methods and unsafe side effects.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Update Dependencies:`}),` Often, third-party libraries break before React itself does. Check compatibility of UI libraries, state managers, and routers.`]})]})]}),(0,k.jsxs)(j,{id:`end-to-end-testing`,icon:`🧪`,iconBg:`rgba(239,68,68,0.15)`,iconColor:`#ef4444`,title:`7.4 — End-to-End Testing (Cypress/Playwright)`,children:[(0,k.jsx)(`p`,{children:`Unit tests check components in isolation, but bugs often hide in the integration between components. End-to-End (E2E) tests spin up a real browser, click buttons, and verify the UI behaves correctly from a user's perspective.`}),(0,k.jsx)(M,{filename:`login.spec.js`,language:`JavaScript`,children:`// Cypress Example
describe('Login Flow', () => {
  it('should successfully log in and redirect to dashboard', () => {
    cy.visit('/login');
    
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    // Assert redirect and success state
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome back').should('be.visible');
  });
});`})]})]})}function Nr(){return(0,k.jsxs)(A,{id:`skills-expertise-deep-dive`,number:`08`,title:`Skills & Expertise Deep Dive`,theme:`green`,children:[(0,k.jsx)(`p`,{className:`section-intro`,children:`This chapter takes a comprehensive look at the core skills every React developer needs to master. From JavaScript fundamentals to advanced state management patterns to build tooling—these are the competencies that define your effectiveness on a professional React team.`}),(0,k.jsx)(`h3`,{children:`T-Shaped Developer`}),(0,k.jsxs)(`p`,{children:[`The most valuable developers are `,(0,k.jsx)(`strong`,{children:`T-shaped`}),`: they have broad knowledge across the entire stack (the horizontal bar) and deep expertise in one or two areas (the vertical bar). For a React developer, the horizontal bar spans HTML, CSS, JavaScript, testing, accessibility, networking, and DevOps. The vertical bar is your specialization—maybe it's state management architecture, performance optimization, or design system engineering. Invest in both dimensions.`]}),(0,k.jsxs)(j,{id:`javascript-es6-mastery`,icon:`⚡`,iconBg:`rgba(34,197,94,0.15)`,iconColor:`#22c55e`,title:`8.1 — JavaScript ES6+ Mastery`,children:[(0,k.jsxs)(`p`,{children:[`React is fundamentally JavaScript. Every JSX expression compiles to a`,(0,k.jsx)(`code`,{children:` React.createElement()`}),` call. Every hook is a function. Every component is a function (or class). If your JavaScript foundations are weak, React will feel like magic. When they're strong, React feels like a natural extension of the language.`]}),(0,k.jsx)(`h4`,{children:`Crucial JavaScript Concepts for React`}),(0,k.jsxs)(`div`,{className:`kv-grid`,children:[(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`Immutability`}),(0,k.jsxs)(`span`,{className:`kv-value`,children:[`React relies on reference equality to detect changes. Mutating objects or arrays in place bypasses React's change detection. Always create new references with spread syntax, `,(0,k.jsx)(`code`,{children:`.map()`}),`, or `,(0,k.jsx)(`code`,{children:`.filter()`}),`.`]})]}),(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`Closures`}),(0,k.jsxs)(`span`,{className:`kv-value`,children:[`Every event handler and `,(0,k.jsx)(`code`,{children:`useEffect`}),` callback forms a closure over its surrounding scope. Understanding closures is essential for avoiding stale state bugs and for writing correct dependency arrays.`]})]}),(0,k.jsxs)(`div`,{className:`kv-item`,children:[(0,k.jsx)(`span`,{className:`kv-label`,children:`Truthiness`}),(0,k.jsxs)(`span`,{className:`kv-value`,children:[`JSX conditional rendering relies on JavaScript's truthy/falsy rules.`,(0,k.jsx)(`code`,{children:` {count && <List />}`}),` renders `,(0,k.jsx)(`code`,{children:`0`}),` when count is zero because `,(0,k.jsx)(`code`,{children:`0`}),` is falsy but still a renderable value. Use explicit comparisons: `,(0,k.jsx)(`code`,{children:`{count > 0 && <List />}`}),`.`]})]})]}),(0,k.jsx)(M,{filename:`essential-es6-patterns.js`,language:`JavaScript`,children:`<span class="cm">// ── 1. Destructuring ──</span>
<span class="kw">const</span> { <span class="attr">name</span>, <span class="attr">age</span>, <span class="attr">role</span> = <span class="str">'developer'</span> } = <span class="attr">user</span>;
<span class="kw">const</span> [<span class="attr">first</span>, <span class="attr">second</span>, ...<span class="attr">rest</span>] = <span class="attr">items</span>;
<span class="kw">const</span> { <span class="attr">data</span>: <span class="attr">users</span>, <span class="attr">error</span> } = <span class="fn">useFetch</span>(<span class="str">'/api/users'</span>);

<span class="cm">// ── 2. Spread &amp; Rest ──</span>
<span class="kw">const</span> <span class="attr">updated</span> = { ...<span class="attr">user</span>, <span class="attr">age</span>: <span class="num">30</span> };        <span class="cm">// shallow clone + override</span>
<span class="kw">const</span> <span class="attr">newList</span> = [...<span class="attr">items</span>, <span class="attr">newItem</span>];              <span class="cm">// append to array</span>
<span class="kw">const</span> <span class="attr">without</span> = <span class="attr">items</span>.<span class="fn">filter</span>(<span class="attr">i</span> <span class="op">=&gt;</span> <span class="attr">i</span>.<span class="attr">id</span> <span class="op">!==</span> <span class="attr">id</span>);  <span class="cm">// immutable delete</span>

<span class="kw">function</span> <span class="fn">Button</span>({ <span class="attr">children</span>, ...<span class="attr">props</span> }) {
  <span class="kw">return</span> <span class="tag">&lt;button</span> {...<span class="attr">props</span>}<span class="tag">&gt;</span>{<span class="attr">children</span>}<span class="tag">&lt;/button&gt;</span>;
}

<span class="cm">// ── 3. Template Literals ──</span>
<span class="kw">const</span> <span class="attr">greeting</span> = <span class="str">\`Hello, \${name}! You are \${age} years old.\`</span>;
<span class="kw">const</span> <span class="attr">className</span> = <span class="str">\`btn \${isActive ? 'btn-active' : ''}\`</span>;

<span class="cm">// ── 4. Optional Chaining &amp; Nullish Coalescing ──</span>
<span class="kw">const</span> <span class="attr">city</span> = <span class="attr">user</span>?.<span class="attr">address</span>?.<span class="attr">city</span> <span class="op">??</span> <span class="str">'Unknown'</span>;
<span class="kw">const</span> <span class="attr">handler</span> = <span class="attr">config</span>?.<span class="fn">onClick</span> <span class="op">??</span> <span class="attr">noop</span>;

<span class="cm">// ── 5. Array Methods (The React Essentials) ──</span>
<span class="kw">const</span> <span class="attr">names</span>    = <span class="attr">users</span>.<span class="fn">map</span>(<span class="attr">u</span> <span class="op">=&gt;</span> <span class="attr">u</span>.<span class="attr">name</span>);
<span class="kw">const</span> <span class="attr">adults</span>   = <span class="attr">users</span>.<span class="fn">filter</span>(<span class="attr">u</span> <span class="op">=&gt;</span> <span class="attr">u</span>.<span class="attr">age</span> <span class="op">&gt;=</span> <span class="num">18</span>);
<span class="kw">const</span> <span class="attr">totalAge</span> = <span class="attr">users</span>.<span class="fn">reduce</span>((<span class="attr">sum</span>, <span class="attr">u</span>) <span class="op">=&gt;</span> <span class="attr">sum</span> + <span class="attr">u</span>.<span class="attr">age</span>, <span class="num">0</span>);
<span class="kw">const</span> <span class="attr">found</span>    = <span class="attr">users</span>.<span class="fn">find</span>(<span class="attr">u</span> <span class="op">=&gt;</span> <span class="attr">u</span>.<span class="attr">id</span> <span class="op">===</span> <span class="attr">targetId</span>);
<span class="kw">const</span> <span class="attr">hasAdmin</span> = <span class="attr">users</span>.<span class="fn">some</span>(<span class="attr">u</span> <span class="op">=&gt;</span> <span class="attr">u</span>.<span class="attr">role</span> <span class="op">===</span> <span class="str">'admin'</span>);

<span class="cm">// ── 6. Promises &amp; Async/Await ──</span>
<span class="kw">async function</span> <span class="fn">fetchUser</span>(<span class="attr">id</span>) {
  <span class="kw">try</span> {
    <span class="kw">const</span> <span class="attr">res</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">\`/api/users/\${id}\`</span>);
    <span class="kw">if</span> (<span class="op">!</span><span class="attr">res</span>.<span class="attr">ok</span>) <span class="kw">throw new</span> <span class="type">Error</span>(<span class="str">\`HTTP \${res.status}\`</span>);
    <span class="kw">return await</span> <span class="attr">res</span>.<span class="fn">json</span>();
  } <span class="kw">catch</span> (<span class="attr">err</span>) {
    <span class="fn">console</span>.<span class="fn">error</span>(<span class="str">'Failed to fetch user:'</span>, <span class="attr">err</span>);
    <span class="kw">throw</span> <span class="attr">err</span>;
  }
}

<span class="cm">// ── 7. Modules ──</span>
<span class="kw">export</span> <span class="kw">default</span> <span class="kw">function</span> <span class="fn">MyComponent</span>() { <span class="cm">/* ... */</span> }
<span class="kw">export</span> <span class="kw">const</span> <span class="attr">API_URL</span> = <span class="str">'/api/v2'</span>;
<span class="kw">import</span> <span class="fn">MyComponent</span>, { <span class="attr">API_URL</span> } <span class="kw">from</span> <span class="str">'./MyComponent'</span>;`})]}),(0,k.jsxs)(j,{id:`react-hooks-state-management`,icon:`🪝`,iconBg:`rgba(34,197,94,0.15)`,iconColor:`#22c55e`,title:`8.2 — React Hooks & State Management`,children:[(0,k.jsx)(`p`,{children:`Hooks revolutionized React by allowing function components to manage state, side effects, context, and refs—capabilities previously reserved for class components. They promote composition over inheritance and make logic reusable through custom hooks.`}),(0,k.jsx)(`h4`,{children:`Mental Model`}),(0,k.jsxs)(`p`,{children:[`Think of a component as a function that runs on every render. Hooks are "memory slots" attached to that component instance. `,(0,k.jsx)(`code`,{children:`useState`}),`gives you a slot for a value that persists across renders.`,(0,k.jsx)(`code`,{children:` useEffect`}),` gives you a slot for a side effect that runs after the DOM updates. `,(0,k.jsx)(`code`,{children:`useRef`}),` gives you a mutable box that doesn't trigger re-renders. The order you call hooks determines which slot you're accessing—that's why hooks must always be called in the same order (no conditionals, no loops).`]}),(0,k.jsxs)(P,{headers:[`Hook`,`Purpose`,`Common Use Case`],children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`useState`})}),(0,k.jsx)(`td`,{children:`Manage simple local state`}),(0,k.jsx)(`td`,{children:`Form inputs, toggles, counters`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`useEffect`})}),(0,k.jsx)(`td`,{children:`Side effects after render`}),(0,k.jsx)(`td`,{children:`API calls, subscriptions, DOM manipulation`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`purple`,children:`useContext`})}),(0,k.jsx)(`td`,{children:`Access context values`}),(0,k.jsx)(`td`,{children:`Theme, auth, locale without prop drilling`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`orange`,children:`useReducer`})}),(0,k.jsx)(`td`,{children:`Complex state with actions`}),(0,k.jsx)(`td`,{children:`Forms with many fields, state machines`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`useRef`})}),(0,k.jsx)(`td`,{children:`Mutable ref that persists across renders`}),(0,k.jsx)(`td`,{children:`DOM refs, previous values, timers`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`useId`})}),(0,k.jsx)(`td`,{children:`Generate unique IDs for accessibility`}),(0,k.jsx)(`td`,{children:`Linking labels to inputs, ARIA attributes`})]})]}),(0,k.jsx)(M,{filename:`useFormReducer.js`,language:`JavaScript`,children:`<span class="kw">import</span> { <span class="fn">useReducer</span>, <span class="fn">useCallback</span> } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">// Action types</span>
<span class="kw">const</span> <span class="attr">ACTIONS</span> = {
  <span class="attr">SET_FIELD</span>:    <span class="str">'SET_FIELD'</span>,
  <span class="attr">SET_ERROR</span>:    <span class="str">'SET_ERROR'</span>,
  <span class="attr">CLEAR_ERRORS</span>: <span class="str">'CLEAR_ERRORS'</span>,
  <span class="attr">RESET</span>:        <span class="str">'RESET'</span>,
  <span class="attr">SET_LOADING</span>:  <span class="str">'SET_LOADING'</span>,
};

<span class="kw">function</span> <span class="fn">formReducer</span>(<span class="attr">state</span>, <span class="attr">action</span>) {
  <span class="kw">switch</span> (<span class="attr">action</span>.<span class="attr">type</span>) {
    <span class="kw">case</span> <span class="attr">ACTIONS</span>.<span class="attr">SET_FIELD</span>:
      <span class="kw">return</span> {
        ...<span class="attr">state</span>,
        <span class="attr">values</span>: { ...<span class="attr">state</span>.<span class="attr">values</span>, [<span class="attr">action</span>.<span class="attr">field</span>]: <span class="attr">action</span>.<span class="attr">value</span> },
        <span class="attr">errors</span>: { ...<span class="attr">state</span>.<span class="attr">errors</span>, [<span class="attr">action</span>.<span class="attr">field</span>]: <span class="bool">null</span> },
      };
    <span class="kw">case</span> <span class="attr">ACTIONS</span>.<span class="attr">SET_ERROR</span>:
      <span class="kw">return</span> {
        ...<span class="attr">state</span>,
        <span class="attr">errors</span>: { ...<span class="attr">state</span>.<span class="attr">errors</span>, [<span class="attr">action</span>.<span class="attr">field</span>]: <span class="attr">action</span>.<span class="attr">message</span> },
      };
    <span class="kw">case</span> <span class="attr">ACTIONS</span>.<span class="attr">CLEAR_ERRORS</span>:
      <span class="kw">return</span> { ...<span class="attr">state</span>, <span class="attr">errors</span>: {} };
    <span class="kw">case</span> <span class="attr">ACTIONS</span>.<span class="attr">RESET</span>:
      <span class="kw">return</span> { ...<span class="attr">state</span>, <span class="attr">values</span>: <span class="attr">action</span>.<span class="attr">initialValues</span>, <span class="attr">errors</span>: {} };
    <span class="kw">case</span> <span class="attr">ACTIONS</span>.<span class="attr">SET_LOADING</span>:
      <span class="kw">return</span> { ...<span class="attr">state</span>, <span class="attr">isLoading</span>: <span class="attr">action</span>.<span class="attr">value</span> };
    <span class="kw">default</span>:
      <span class="kw">return</span> <span class="attr">state</span>;
  }
}

<span class="kw">export default function</span> <span class="fn">useForm</span>(<span class="attr">initialValues</span>) {
  <span class="kw">const</span> [<span class="attr">state</span>, <span class="fn">dispatch</span>] = <span class="fn">useReducer</span>(<span class="fn">formReducer</span>, {
    <span class="attr">values</span>: <span class="attr">initialValues</span>,
    <span class="attr">errors</span>: {},
    <span class="attr">isLoading</span>: <span class="bool">false</span>,
  });

  <span class="kw">const</span> <span class="fn">setField</span> = <span class="fn">useCallback</span>(
    (<span class="attr">field</span>, <span class="attr">value</span>) <span class="op">=&gt;</span>
      <span class="fn">dispatch</span>({ <span class="attr">type</span>: <span class="attr">ACTIONS</span>.<span class="attr">SET_FIELD</span>, <span class="attr">field</span>, <span class="attr">value</span> }),
    []
  );

  <span class="kw">const</span> <span class="fn">setError</span> = <span class="fn">useCallback</span>(
    (<span class="attr">field</span>, <span class="attr">message</span>) <span class="op">=&gt;</span>
      <span class="fn">dispatch</span>({ <span class="attr">type</span>: <span class="attr">ACTIONS</span>.<span class="attr">SET_ERROR</span>, <span class="attr">field</span>, <span class="attr">message</span> }),
    []
  );

  <span class="kw">const</span> <span class="fn">reset</span> = <span class="fn">useCallback</span>(
    () <span class="op">=&gt;</span> <span class="fn">dispatch</span>({ <span class="attr">type</span>: <span class="attr">ACTIONS</span>.<span class="attr">RESET</span>, <span class="attr">initialValues</span> }),
    [<span class="attr">initialValues</span>]
  );

  <span class="kw">return</span> { ...<span class="attr">state</span>, <span class="fn">setField</span>, <span class="fn">setError</span>, <span class="fn">reset</span>, <span class="fn">dispatch</span> };
}`}),(0,k.jsx)(M,{filename:`userSlice.js`,language:`JavaScript`,children:`<span class="kw">import</span> { <span class="fn">createSlice</span>, <span class="fn">createAsyncThunk</span> } <span class="kw">from</span> <span class="str">'@reduxjs/toolkit'</span>;

<span class="cm">// Async thunk for fetching users</span>
<span class="kw">export const</span> <span class="fn">fetchUsers</span> = <span class="fn">createAsyncThunk</span>(
  <span class="str">'users/fetchAll'</span>,
  <span class="kw">async</span> (<span class="attr">_</span>, { <span class="attr">rejectWithValue</span> }) <span class="op">=&gt;</span> {
    <span class="kw">try</span> {
      <span class="kw">const</span> <span class="attr">res</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">'/api/users'</span>);
      <span class="kw">if</span> (<span class="op">!</span><span class="attr">res</span>.<span class="attr">ok</span>) <span class="kw">throw new</span> <span class="type">Error</span>(<span class="str">'Failed to fetch'</span>);
      <span class="kw">return await</span> <span class="attr">res</span>.<span class="fn">json</span>();
    } <span class="kw">catch</span> (<span class="attr">err</span>) {
      <span class="kw">return</span> <span class="fn">rejectWithValue</span>(<span class="attr">err</span>.<span class="attr">message</span>);
    }
  }
);

<span class="kw">const</span> <span class="attr">userSlice</span> = <span class="fn">createSlice</span>({
  <span class="attr">name</span>: <span class="str">'users'</span>,
  <span class="attr">initialState</span>: {
    <span class="attr">entities</span>: [],
    <span class="attr">status</span>: <span class="str">'idle'</span>,   <span class="cm">// 'idle' | 'loading' | 'succeeded' | 'failed'</span>
    <span class="attr">error</span>: <span class="bool">null</span>,
  },
  <span class="attr">reducers</span>: {
    <span class="fn">userAdded</span>(<span class="attr">state</span>, <span class="attr">action</span>) {
      <span class="attr">state</span>.<span class="attr">entities</span>.<span class="fn">push</span>(<span class="attr">action</span>.<span class="attr">payload</span>);
    },
    <span class="fn">userRemoved</span>(<span class="attr">state</span>, <span class="attr">action</span>) {
      <span class="attr">state</span>.<span class="attr">entities</span> = <span class="attr">state</span>.<span class="attr">entities</span>.<span class="fn">filter</span>(
        <span class="attr">u</span> <span class="op">=&gt;</span> <span class="attr">u</span>.<span class="attr">id</span> <span class="op">!==</span> <span class="attr">action</span>.<span class="attr">payload</span>
      );
    },
  },
  <span class="attr">extraReducers</span>: (<span class="attr">builder</span>) <span class="op">=&gt;</span> {
    <span class="attr">builder</span>
      .<span class="fn">addCase</span>(<span class="attr">fetchUsers</span>.<span class="attr">pending</span>, (<span class="attr">state</span>) <span class="op">=&gt;</span> {
        <span class="attr">state</span>.<span class="attr">status</span> = <span class="str">'loading'</span>;
      })
      .<span class="fn">addCase</span>(<span class="attr">fetchUsers</span>.<span class="attr">fulfilled</span>, (<span class="attr">state</span>, <span class="attr">action</span>) <span class="op">=&gt;</span> {
        <span class="attr">state</span>.<span class="attr">status</span> = <span class="str">'succeeded'</span>;
        <span class="attr">state</span>.<span class="attr">entities</span> = <span class="attr">action</span>.<span class="attr">payload</span>;
      })
      .<span class="fn">addCase</span>(<span class="attr">fetchUsers</span>.<span class="attr">rejected</span>, (<span class="attr">state</span>, <span class="attr">action</span>) <span class="op">=&gt;</span> {
        <span class="attr">state</span>.<span class="attr">status</span> = <span class="str">'failed'</span>;
        <span class="attr">state</span>.<span class="attr">error</span> = <span class="attr">action</span>.<span class="attr">payload</span>;
      });
  },
});

<span class="kw">export const</span> { <span class="fn">userAdded</span>, <span class="fn">userRemoved</span> } = <span class="attr">userSlice</span>.<span class="attr">actions</span>;
<span class="kw">export default</span> <span class="attr">userSlice</span>.<span class="attr">reducer</span>;`}),(0,k.jsx)(M,{filename:`AuthContext.jsx`,language:`JSX`,children:`<span class="kw">import</span> { <span class="fn">createContext</span>, <span class="fn">useContext</span>, <span class="fn">useReducer</span> } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">const</span> <span class="attr">AuthContext</span> = <span class="fn">createContext</span>(<span class="bool">null</span>);

<span class="kw">function</span> <span class="fn">authReducer</span>(<span class="attr">state</span>, <span class="attr">action</span>) {
  <span class="kw">switch</span> (<span class="attr">action</span>.<span class="attr">type</span>) {
    <span class="kw">case</span> <span class="str">'LOGIN'</span>:
      <span class="kw">return</span> {
        ...<span class="attr">state</span>,
        <span class="attr">user</span>: <span class="attr">action</span>.<span class="attr">payload</span>,
        <span class="attr">isAuthenticated</span>: <span class="bool">true</span>,
      };
    <span class="kw">case</span> <span class="str">'LOGOUT'</span>:
      <span class="kw">return</span> {
        ...<span class="attr">state</span>,
        <span class="attr">user</span>: <span class="bool">null</span>,
        <span class="attr">isAuthenticated</span>: <span class="bool">false</span>,
      };
    <span class="kw">case</span> <span class="str">'UPDATE_PROFILE'</span>:
      <span class="kw">return</span> {
        ...<span class="attr">state</span>,
        <span class="attr">user</span>: { ...<span class="attr">state</span>.<span class="attr">user</span>, ...<span class="attr">action</span>.<span class="attr">payload</span> },
      };
    <span class="kw">default</span>:
      <span class="kw">return</span> <span class="attr">state</span>;
  }
}

<span class="kw">export function</span> <span class="fn">AuthProvider</span>({ <span class="attr">children</span> }) {
  <span class="kw">const</span> [<span class="attr">state</span>, <span class="fn">dispatch</span>] = <span class="fn">useReducer</span>(<span class="fn">authReducer</span>, {
    <span class="attr">user</span>: <span class="bool">null</span>,
    <span class="attr">isAuthenticated</span>: <span class="bool">false</span>,
  });

  <span class="kw">const</span> <span class="fn">login</span>  = (<span class="attr">user</span>) <span class="op">=&gt;</span> <span class="fn">dispatch</span>({ <span class="attr">type</span>: <span class="str">'LOGIN'</span>, <span class="attr">payload</span>: <span class="attr">user</span> });
  <span class="kw">const</span> <span class="fn">logout</span> = ()     <span class="op">=&gt;</span> <span class="fn">dispatch</span>({ <span class="attr">type</span>: <span class="str">'LOGOUT'</span> });

  <span class="kw">return</span> (
    <span class="tag">&lt;AuthContext.Provider</span> <span class="attr">value</span>={{ ...<span class="attr">state</span>, <span class="fn">login</span>, <span class="fn">logout</span>, <span class="fn">dispatch</span> }}<span class="tag">&gt;</span>
      {<span class="attr">children</span>}
    <span class="tag">&lt;/AuthContext.Provider&gt;</span>
  );
}

<span class="kw">export function</span> <span class="fn">useAuth</span>() {
  <span class="kw">const</span> <span class="attr">context</span> = <span class="fn">useContext</span>(<span class="attr">AuthContext</span>);
  <span class="kw">if</span> (<span class="op">!</span><span class="attr">context</span>) {
    <span class="kw">throw new</span> <span class="type">Error</span>(<span class="str">'useAuth must be used within an AuthProvider'</span>);
  }
  <span class="kw">return</span> <span class="attr">context</span>;
}`}),(0,k.jsx)(N,{type:`note`,title:`Redux vs. Context API — Decision Guide`,children:(0,k.jsxs)(`p`,{children:[`Use `,(0,k.jsx)(`strong`,{children:`Context API`}),` for low-frequency updates shared across many components (theme, locale, auth). Use `,(0,k.jsx)(`strong`,{children:`Redux Toolkit`}),` when you have complex, frequently-changing state with many actions, need middleware (thunks, sagas), require time-travel debugging, or your state graph has many interdependent slices. For server state (API data), consider `,(0,k.jsx)(`strong`,{children:`React Query`}),` or`,(0,k.jsx)(`strong`,{children:` SWR`}),`—they handle caching, deduplication, and revalidation out of the box.`]})})]}),(0,k.jsxs)(j,{id:`build-tools`,icon:`🔧`,iconBg:`rgba(34,197,94,0.15)`,iconColor:`#22c55e`,title:`8.3 — Build Tools: Webpack, Babel & Vite`,children:[(0,k.jsx)(`h4`,{children:`The Shift from Webpack to Vite`}),(0,k.jsx)(`p`,{children:`For years, Webpack was the de facto bundler for React projects. It's powerful and endlessly configurable—but that power comes at the cost of complexity and slow cold starts. Webpack bundles your entire application before serving it, which means even a small change requires re-processing thousands of modules.`}),(0,k.jsx)(`p`,{children:`Vite takes a fundamentally different approach. In development, it serves files over native ES modules—your browser does the bundling. Only the file you changed is hot-replaced, making HMR near-instant regardless of project size. For production, Vite uses Rollup under the hood, producing optimized bundles with tree-shaking, code splitting, and asset hashing.`}),(0,k.jsxs)(P,{headers:[`Tool`,`Role`,`Key Feature`],children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`Webpack`})}),(0,k.jsx)(`td`,{children:`Module bundler`}),(0,k.jsx)(`td`,{children:`Extremely configurable; vast plugin ecosystem`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`orange`,children:`Babel`})}),(0,k.jsx)(`td`,{children:`JavaScript compiler`}),(0,k.jsx)(`td`,{children:`Transpiles JSX and modern JS to browser-compatible code`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`Vite`})}),(0,k.jsx)(`td`,{children:`Dev server + bundler`}),(0,k.jsx)(`td`,{children:`Instant HMR via native ESM; Rollup for production`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`purple`,children:`ESLint`})}),(0,k.jsx)(`td`,{children:`Linter`}),(0,k.jsx)(`td`,{children:`Catches errors and enforces code style before runtime`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`purple`,children:`Prettier`})}),(0,k.jsx)(`td`,{children:`Code formatter`}),(0,k.jsx)(`td`,{children:`Opinionated formatting; eliminates style debates`})]})]}),(0,k.jsx)(M,{filename:`vite.config.js`,language:`JavaScript`,children:`<span class="kw">import</span> { <span class="fn">defineConfig</span> } <span class="kw">from</span> <span class="str">'vite'</span>;
<span class="kw">import</span> <span class="fn">react</span> <span class="kw">from</span> <span class="str">'@vitejs/plugin-react'</span>;

<span class="kw">export default</span> <span class="fn">defineConfig</span>({
  <span class="attr">plugins</span>: [<span class="fn">react</span>()],

  <span class="attr">server</span>: {
    <span class="attr">port</span>: <span class="num">3000</span>,
    <span class="attr">open</span>: <span class="bool">true</span>,
    <span class="attr">proxy</span>: {
      <span class="str">'/api'</span>: {
        <span class="attr">target</span>: <span class="str">'http://localhost:8080'</span>,
        <span class="attr">changeOrigin</span>: <span class="bool">true</span>,
      },
    },
  },

  <span class="attr">build</span>: {
    <span class="attr">outDir</span>: <span class="str">'dist'</span>,
    <span class="attr">sourcemap</span>: <span class="bool">true</span>,
    <span class="attr">rollupOptions</span>: {
      <span class="attr">output</span>: {
        <span class="attr">manualChunks</span>: {
          <span class="attr">vendor</span>: [<span class="str">'react'</span>, <span class="str">'react-dom'</span>],
          <span class="attr">router</span>: [<span class="str">'react-router-dom'</span>],
        },
      },
    },
  },

  <span class="attr">resolve</span>: {
    <span class="attr">alias</span>: {
      <span class="str">'@'</span>: <span class="str">'/src'</span>,
    },
  },
});`}),(0,k.jsx)(M,{filename:`.eslintrc.json`,language:`JSON`,children:`{
  <span class="attr">"root"</span>: <span class="bool">true</span>,
  <span class="attr">"env"</span>: {
    <span class="attr">"browser"</span>: <span class="bool">true</span>,
    <span class="attr">"es2022"</span>: <span class="bool">true</span>
  },
  <span class="attr">"extends"</span>: [
    <span class="str">"eslint:recommended"</span>,
    <span class="str">"plugin:react/recommended"</span>,
    <span class="str">"plugin:react/jsx-runtime"</span>,
    <span class="str">"plugin:react-hooks/recommended"</span>,
    <span class="str">"prettier"</span>
  ],
  <span class="attr">"parserOptions"</span>: {
    <span class="attr">"ecmaVersion"</span>: <span class="str">"latest"</span>,
    <span class="attr">"sourceType"</span>: <span class="str">"module"</span>,
    <span class="attr">"ecmaFeatures"</span>: { <span class="attr">"jsx"</span>: <span class="bool">true</span> }
  },
  <span class="attr">"rules"</span>: {
    <span class="attr">"react/prop-types"</span>:         <span class="str">"off"</span>,
    <span class="attr">"no-unused-vars"</span>:            <span class="str">"warn"</span>,
    <span class="attr">"no-console"</span>:                [<span class="str">"warn"</span>, { <span class="attr">"allow"</span>: [<span class="str">"warn"</span>, <span class="str">"error"</span>] }],
    <span class="attr">"react-hooks/exhaustive-deps"</span>: <span class="str">"warn"</span>
  },
  <span class="attr">"settings"</span>: {
    <span class="attr">"react"</span>: { <span class="attr">"version"</span>: <span class="str">"detect"</span> }
  }
}`})]}),(0,k.jsxs)(j,{id:`testing-strategy`,icon:`🧪`,iconBg:`rgba(34,197,94,0.15)`,iconColor:`#22c55e`,title:`8.4 — Testing Strategy`,children:[(0,k.jsx)(`p`,{children:`A robust testing strategy gives you the confidence to refactor and deploy. In the React ecosystem, the standard stack involves Jest (or Vitest) for test running/assertions, and React Testing Library (RTL) for rendering components.`}),(0,k.jsxs)(`ul`,{className:`styled-list`,children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Unit Tests:`}),` Test pure functions, utilities, and custom hooks in isolation.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Integration Tests (RTL):`}),` Render a component with its children, interact with the DOM (click buttons, type in inputs), and assert that the UI updates correctly. Avoid testing implementation details (like state variables); test the user experience instead.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`End-to-End Tests:`}),` Use tools like Playwright or Cypress to run your full application in a real browser, connecting to real (or closely mocked) backends.`]})]})]}),(0,k.jsxs)(j,{id:`typescript-basics`,icon:`🟦`,iconBg:`rgba(34,197,94,0.15)`,iconColor:`#22c55e`,title:`8.5 — TypeScript Basics for React`,children:[(0,k.jsx)(`p`,{children:`While this guide uses JavaScript for simplicity, TypeScript has become the industry standard for enterprise React applications. TypeScript adds static typing to JavaScript, catching errors at compile time rather than runtime.`}),(0,k.jsx)(`p`,{children:`When using TypeScript with React, you define interfaces for your component props and state. This provides excellent autocompletion in your IDE and ensures you don't accidentally pass a string where a number is expected.`})]}),(0,k.jsx)(`h3`,{children:`Quick Reference: Skills Proficiency Matrix`}),(0,k.jsxs)(P,{headers:[`Skill Area`,`Junior`,`Mid-Level`,`Senior`],children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`orange`,children:`JavaScript`})}),(0,k.jsx)(`td`,{children:`ES6 basics, array methods, promises`}),(0,k.jsx)(`td`,{children:`Closures, prototypes, generators, proxies`}),(0,k.jsx)(`td`,{children:`Engine internals, memory model, perf tuning`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`React Core`})}),(0,k.jsx)(`td`,{children:`Components, props, useState, useEffect`}),(0,k.jsx)(`td`,{children:`Custom hooks, memo, context, suspense`}),(0,k.jsx)(`td`,{children:`Concurrent features, RSC, reconciler knowledge`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`purple`,children:`State Management`})}),(0,k.jsx)(`td`,{children:`useState, prop drilling`}),(0,k.jsx)(`td`,{children:`useReducer, Context, Redux basics`}),(0,k.jsx)(`td`,{children:`Redux middleware, Zustand, Jotai, XState`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`Styling`})}),(0,k.jsx)(`td`,{children:`CSS basics, flexbox, class toggling`}),(0,k.jsx)(`td`,{children:`CSS Grid, custom properties, responsive design`}),(0,k.jsx)(`td`,{children:`Design systems, CSS-in-JS perf, animation APIs`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`Testing`})}),(0,k.jsx)(`td`,{children:`Basic unit tests with Jest`}),(0,k.jsx)(`td`,{children:`React Testing Library, mocking, integration tests`}),(0,k.jsx)(`td`,{children:`E2E (Playwright), visual regression, CI pipelines`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`orange`,children:`Build Tools`})}),(0,k.jsx)(`td`,{children:`Uses CRA/Vite defaults`}),(0,k.jsx)(`td`,{children:`Custom Vite config, ESLint rules, path aliases`}),(0,k.jsx)(`td`,{children:`Webpack internals, custom plugins, monorepo tooling`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`purple`,children:`Version Control`})}),(0,k.jsx)(`td`,{children:`add, commit, push, basic branching`}),(0,k.jsx)(`td`,{children:`Rebase, cherry-pick, conventional commits`}),(0,k.jsx)(`td`,{children:`Git internals, bisect, reflog, custom hooks`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`red`,children:`Performance`})}),(0,k.jsx)(`td`,{children:`Aware of re-render concept`}),(0,k.jsx)(`td`,{children:`Profiler, lazy loading, code splitting`}),(0,k.jsx)(`td`,{children:`Bundle analysis, runtime profiling, WASM integration`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`green`,children:`Accessibility`})}),(0,k.jsx)(`td`,{children:`Alt text, semantic HTML`}),(0,k.jsx)(`td`,{children:`ARIA roles, keyboard nav, focus management`}),(0,k.jsx)(`td`,{children:`Screen reader testing, WCAG audits, a11y architecture`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(F,{variant:`blue`,children:`Soft Skills`})}),(0,k.jsx)(`td`,{children:`Asks questions, follows guidance`}),(0,k.jsx)(`td`,{children:`Code reviews, mentoring juniors, technical writing`}),(0,k.jsx)(`td`,{children:`Architecture decisions, stakeholder communication, hiring`})]})]})]})}function Pr(){return(0,k.jsxs)(A,{id:`react-19-features`,number:`09`,title:`React 19 & The Future`,theme:`teal`,children:[(0,k.jsx)(`p`,{className:`section-intro`,children:`React 19 brings some of the most significant architectural changes to the library since Hooks were introduced. It focuses on simplifying data fetching, handling async transitions, and moving heavy computations out of the developer's hands and into the compiler. This chapter covers what's new and how to prepare your codebase for the future.`}),(0,k.jsxs)(j,{id:`react-compiler`,icon:`⚙️`,iconBg:`rgba(20,184,166,0.15)`,iconColor:`#14b8a6`,title:`9.1 — React Compiler`,children:[(0,k.jsxs)(`p`,{children:[`Historically, React developers had to manually optimize renders using `,(0,k.jsx)(`code`,{children:`useMemo`}),`, `,(0,k.jsx)(`code`,{children:`useCallback`}),`, and `,(0,k.jsx)(`code`,{children:`React.memo`}),`. The React Compiler changes this fundamentally. It automatically analyzes your code and applies memoization where it's needed, skipping unnecessary re-renders.`]}),(0,k.jsx)(N,{type:`tip`,title:`What this means for you`,children:(0,k.jsxs)(`p`,{children:[`You can write idiomatic React without worrying about performance micro-optimizations. No more wrapping every function in `,(0,k.jsx)(`code`,{children:`useCallback`}),` or primitive values in `,(0,k.jsx)(`code`,{children:`useMemo`}),` just to prevent a child component from re-rendering.`]})})]}),(0,k.jsxs)(j,{id:`server-actions`,icon:`🚀`,iconBg:`rgba(20,184,166,0.15)`,iconColor:`#14b8a6`,title:`9.2 — Server Actions`,children:[(0,k.jsx)(`p`,{children:`Server Actions allow you to run asynchronous functions directly on the server, tightly integrated with React's form submissions and transitions. They eliminate the need for writing boilerplate API endpoints for simple data mutations.`}),(0,k.jsx)(M,{filename:`ServerActionExample.js`,language:`javascript`,children:`// app/actions.js
'use server'

export async function createPost(formData) {
  const title = formData.get('title');
  const content = formData.get('content');
  
  await db.post.create({ data: { title, content } });
  revalidatePath('/posts'); // Revalidate cache
}

// app/PostForm.jsx
import { createPost } from './actions';

export default function PostForm() {
  return (
    <form action={createPost}>
      <input name="title" required />
      <textarea name="content" required />
      <button type="submit">Submit</button>
    </form>
  );
}`})]}),(0,k.jsxs)(j,{id:`use-hook`,icon:`🎣`,iconBg:`rgba(20,184,166,0.15)`,iconColor:`#14b8a6`,title:`9.3 — The new 'use' Hook`,children:[(0,k.jsxs)(`p`,{children:[`React 19 introduces a new primitive hook simply called `,(0,k.jsx)(`code`,{children:`use`}),`. It allows you to read the value of a Promise or Context directly inside a component's render function, integrating perfectly with Suspense.`]}),(0,k.jsx)(N,{type:`warning`,title:`Difference from other hooks`,children:(0,k.jsxs)(`p`,{children:[`Unlike other hooks, `,(0,k.jsx)(`code`,{children:`use`}),` can be called conditionally (e.g., inside an `,(0,k.jsx)(`code`,{children:`if`}),` statement or loop), making it extremely flexible for dynamic data requirements.`]})}),(0,k.jsx)(M,{filename:`UseHookExample.jsx`,language:`jsx`,children:`import { use, Suspense } from 'react';

const fetchUser = async (id) => {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
};

function UserProfile({ userPromise }) {
  // 'use' suspends the component until the promise resolves
  const user = use(userPromise);
  return <div>Welcome, {user.name}</div>;
}

export default function App() {
  const userPromise = fetchUser(123);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}`})]}),(0,k.jsxs)(j,{id:`document-metadata`,icon:`📄`,iconBg:`rgba(20,184,166,0.15)`,iconColor:`#14b8a6`,title:`9.4 — Built-in Document Metadata`,children:[(0,k.jsxs)(`p`,{children:[`Managing `,(0,k.jsx)(`code`,{children:`<title>`}),`, `,(0,k.jsx)(`code`,{children:`<meta>`}),`, and `,(0,k.jsx)(`code`,{children:`<link>`}),` tags used to require third-party libraries like `,(0,k.jsx)(`code`,{children:`react-helmet`}),`. React 19 natively supports rendering these elements in any component, automatically hoisting them to the document `,(0,k.jsx)(`code`,{children:`<head>`}),`.`]}),(0,k.jsx)(M,{filename:`MetadataExample.jsx`,language:`jsx`,children:`export default function BlogPost({ post }) {
  return (
    <article>
      {/* React hoists these to the <head> automatically */}
      <title>{post.title} | My Blog</title>
      <meta name="description" content={post.summary} />
      
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}`})]})]})}var Fr=()=>(0,k.jsxs)(j,{id:`dsa-arrays`,title:`10.1 — Arrays & Hashing`,icon:`📦`,children:[(0,k.jsxs)(`h3`,{children:[`Two Sum `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsxs)(`p`,{children:[`Given an array of integers `,(0,k.jsx)(`code`,{children:`nums`}),` and an integer `,(0,k.jsx)(`code`,{children:`target`}),`, return indices of the two numbers such that they add up to `,(0,k.jsx)(`code`,{children:`target`}),`.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n²) | Space Complexity: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`})]}),(0,k.jsx)(`h3`,{children:`Contains Duplicate`}),(0,k.jsxs)(`p`,{children:[`Given an integer array `,(0,k.jsx)(`code`,{children:`nums`}),`, return `,(0,k.jsx)(`code`,{children:`true`}),` if any value appears at least twice in the array, and return `,(0,k.jsx)(`code`,{children:`false`}),` if every element is distinct.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n²) | Space Complexity: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function containsDuplicate(nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}`})]}),(0,k.jsxs)(`h3`,{children:[`Group Anagrams `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Given an array of strings, group the anagrams together. You can return the answer in any order.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach (Sorting)`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n * k log k) | Space Complexity: O(n * k)`}),(0,k.jsx)(M,{language:`javascript`,children:`function groupAnagrams(strs) {
  const map = {};
  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map[sorted]) map[sorted] = [];
    map[sorted].push(str);
  }
  return Object.values(map);
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Character Frequency)`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n * k) | Space Complexity: O(n * k)`}),(0,k.jsx)(M,{language:`javascript`,children:`function groupAnagrams(strs) {
  const map = {};
  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - 97]++;
    }
    const key = count.join(',');
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
}`})]}),(0,k.jsxs)(`h3`,{children:[`Product of Array Except Self `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsxs)(`p`,{children:[`Given an integer array `,(0,k.jsx)(`code`,{children:`nums`}),`, return an array `,(0,k.jsx)(`code`,{children:`answer`}),` such that `,(0,k.jsx)(`code`,{children:`answer[i]`}),` is equal to the product of all the elements of `,(0,k.jsx)(`code`,{children:`nums`}),` except `,(0,k.jsx)(`code`,{children:`nums[i]`}),`. You must write an algorithm that runs in O(n) time and without using the division operation.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n²) | Space Complexity: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function productExceptSelf(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) product *= nums[j];
    }
    res.push(product);
  }
  return res;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(1) (excluding output array)`}),(0,k.jsx)(M,{language:`javascript`,children:`function productExceptSelf(nums) {
  const res = [];
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  return res;
}`})]}),(0,k.jsx)(`h3`,{children:`Top K Frequent Elements`}),(0,k.jsxs)(`p`,{children:[`Given an integer array `,(0,k.jsx)(`code`,{children:`nums`}),` and an integer `,(0,k.jsx)(`code`,{children:`k`}),`, return the `,(0,k.jsx)(`code`,{children:`k`}),` most frequent elements. You may return the answer in any order.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach (Sorting)`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n log n) | Space Complexity: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function topKFrequent(nums, k) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map(entry => entry[0]);
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Bucket Sort)`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function topKFrequent(nums, k) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  
  const bucket = Array.from({ length: nums.length + 1 }, () => []);
  for (let [num, freq] of map) {
    bucket[freq].push(num);
  }
  
  const res = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length > 0) {
      res.push(...bucket[i]);
      if (res.length >= k) {
        return res.slice(0, k);
      }
    }
  }
  return res;
}`})]}),(0,k.jsx)(`h3`,{children:`Longest Consecutive Sequence`}),(0,k.jsxs)(`p`,{children:[`Given an unsorted array of integers `,(0,k.jsx)(`code`,{children:`nums`}),`, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach (Sorting)`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n log n) | Space Complexity: O(1) or O(n) depending on sort`}),(0,k.jsx)(M,{language:`javascript`,children:`function longestConsecutive(nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  
  let longest = 1;
  let current = 1;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        current++;
      } else {
        longest = Math.max(longest, current);
        current = 1;
      }
    }
  }
  return Math.max(longest, current);
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;
  
  for (let num of set) {
    if (!set.has(num - 1)) {
      let length = 1;
      while (set.has(num + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}`})]})]}),Ir=()=>(0,k.jsxs)(j,{id:`dsa-two-pointers`,title:`10.2 — Two Pointers`,icon:`👉`,children:[(0,k.jsxs)(`h3`,{children:[`Valid Palindrome `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function isPalindrome(s) {
  const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  
  const isAlphaNumeric = (c) => /^[a-zA-Z0-9]*$/.test(c);
  
  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
    } else if (!isAlphaNumeric(s[right])) {
      right--;
    } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}`})]}),(0,k.jsx)(`h3`,{children:`Two Sum II - Input Array Is Sorted`}),(0,k.jsxs)(`p`,{children:[`Given a 1-indexed array of integers `,(0,k.jsx)(`code`,{children:`numbers`}),` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `,(0,k.jsx)(`code`,{children:`target`}),` number. Return the indices (1-indexed).`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n²) | Space Complexity: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
  return [];
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}`})]}),(0,k.jsxs)(`h3`,{children:[`3Sum `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsxs)(`p`,{children:[`Given an integer array nums, return all the triplets `,(0,k.jsx)(`code`,{children:`[nums[i], nums[j], nums[k]]`}),` such that `,(0,k.jsx)(`code`,{children:`i != j`}),`, `,(0,k.jsx)(`code`,{children:`i != k`}),`, and `,(0,k.jsx)(`code`,{children:`j != k`}),`, and `,(0,k.jsx)(`code`,{children:`nums[i] + nums[j] + nums[k] == 0`}),`. The solution set must not contain duplicate triplets.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n³) | Space Complexity: O(n) (for storing sets)`}),(0,k.jsx)(M,{language:`javascript`,children:`function threeSum(nums) {
  const result = [];
  const set = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          const key = triplet.join(',');
          if (!set.has(key)) {
            set.add(key);
            result.push(triplet);
          }
        }
      }
    }
  }
  return result;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n²) | Space Complexity: O(1) or O(n) (depending on sorting algorithm)`}),(0,k.jsx)(M,{language:`javascript`,children:`function threeSum(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) left++;
      }
    }
  }
  return res;
}`})]}),(0,k.jsx)(`h3`,{children:`Container With Most Water`}),(0,k.jsxs)(`p`,{children:[`Given an integer array `,(0,k.jsx)(`code`,{children:`height`}),` of length `,(0,k.jsx)(`code`,{children:`n`}),`, find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n²) | Space Complexity: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function maxArea(height) {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}`})]}),(0,k.jsx)(`h3`,{children:`Trapping Rain Water`}),(0,k.jsxs)(`p`,{children:[`Given `,(0,k.jsx)(`code`,{children:`n`}),` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n²) | Space Complexity: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function trap(height) {
  let res = 0;
  for (let i = 0; i < height.length; i++) {
    let leftMax = height[i];
    for (let j = 0; j < i; j++) {
      leftMax = Math.max(leftMax, height[j]);
    }
    
    let rightMax = height[i];
    for (let j = i + 1; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }
    
    res += Math.min(leftMax, rightMax) - height[i];
  }
  return res;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function trap(height) {
  if (height.length === 0) return 0;
  
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let res = 0;
  
  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      res += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      res += rightMax - height[right];
    }
  }
  return res;
}`})]})]}),Lr=()=>(0,k.jsxs)(j,{id:`dsa-sliding-window`,title:`10.3 — Sliding Window`,icon:`🪟`,children:[(0,k.jsx)(`h3`,{children:`Best Time to Buy and Sell Stock`}),(0,k.jsxs)(`p`,{children:[`You are given an array `,(0,k.jsx)(`code`,{children:`prices`}),` where `,(0,k.jsx)(`code`,{children:`prices[i]`}),` is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n²) | Space Complexity: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function maxProfit(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function maxProfit(prices) {
  let left = 0; // buy
  let right = 1; // sell
  let maxProfit = 0;
  
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
}`})]}),(0,k.jsxs)(`h3`,{children:[`Longest Substring Without Repeating Characters `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsxs)(`p`,{children:[`Given a string `,(0,k.jsx)(`code`,{children:`s`}),`, find the length of the longest substring without repeating characters.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n³) | Space Complexity: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function lengthOfLongestSubstring(s) {
  const isUnique = (str) => {
    const set = new Set();
    for (let char of str) {
      if (set.has(char)) return false;
      set.add(char);
    }
    return true;
  };
  
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isUnique(s.slice(i, j + 1))) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  return maxLength;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function lengthOfLongestSubstring(s) {
  const set = new Set();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}`})]}),(0,k.jsx)(`h3`,{children:`Longest Repeating Character Replacement`}),(0,k.jsxs)(`p`,{children:[`You are given a string `,(0,k.jsx)(`code`,{children:`s`}),` and an integer `,(0,k.jsx)(`code`,{children:`k`}),`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `,(0,k.jsx)(`code`,{children:`k`}),` times. Return the length of the longest substring containing the same letter you can get after performing the above operations.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n²) | Space Complexity: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function characterReplacement(s, k) {
  let maxLength = 0;
  
  for (let i = 0; i < s.length; i++) {
    const counts = {};
    let maxFreq = 0;
    for (let j = i; j < s.length; j++) {
      counts[s[j]] = (counts[s[j]] || 0) + 1;
      maxFreq = Math.max(maxFreq, counts[s[j]]);
      
      // cells replaced = (length of substring) - (most frequent char)
      if ((j - i + 1) - maxFreq <= k) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  return maxLength;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(1) (26 characters)`}),(0,k.jsx)(M,{language:`javascript`,children:`function characterReplacement(s, k) {
  const count = {};
  let res = 0;
  let left = 0;
  let maxf = 0;
  
  for (let right = 0; right < s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;
    maxf = Math.max(maxf, count[s[right]]);
    
    while ((right - left + 1) - maxf > k) {
      count[s[left]]--;
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
}`})]}),(0,k.jsx)(`h3`,{children:`Permutation in String`}),(0,k.jsxs)(`p`,{children:[`Given two strings `,(0,k.jsx)(`code`,{children:`s1`}),` and `,(0,k.jsx)(`code`,{children:`s2`}),`, return `,(0,k.jsx)(`code`,{children:`true`}),` if `,(0,k.jsx)(`code`,{children:`s2`}),` contains a permutation of `,(0,k.jsx)(`code`,{children:`s1`}),`, or `,(0,k.jsx)(`code`,{children:`false`}),` otherwise.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n * (m log m)) where m is s1 length, n is s2 length | Space Complexity: O(m)`}),(0,k.jsx)(M,{language:`javascript`,children:`function checkInclusion(s1, s2) {
  const sortStr = (str) => str.split('').sort().join('');
  const s1Sorted = sortStr(s1);
  
  for (let i = 0; i <= s2.length - s1.length; i++) {
    if (sortStr(s2.slice(i, i + s1.length)) === s1Sorted) {
      return true;
    }
  }
  return false;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n) | Space Complexity: O(1) (26 characters)`}),(0,k.jsx)(M,{language:`javascript`,children:`function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  
  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);
  
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 97]++;
    s2Count[s2.charCodeAt(i) - 97]++;
  }
  
  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) matches++;
  }
  
  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    if (matches === 26) return true;
    
    let index = s2.charCodeAt(right) - 97;
    s2Count[index]++;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] + 1 === s2Count[index]) {
      matches--;
    }
    
    index = s2.charCodeAt(left) - 97;
    s2Count[index]--;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] - 1 === s2Count[index]) {
      matches--;
    }
    left++;
  }
  return matches === 26;
}`})]}),(0,k.jsx)(`h3`,{children:`Minimum Window Substring`}),(0,k.jsxs)(`p`,{children:[`Given two strings `,(0,k.jsx)(`code`,{children:`s`}),` and `,(0,k.jsx)(`code`,{children:`t`}),` of lengths `,(0,k.jsx)(`code`,{children:`m`}),` and `,(0,k.jsx)(`code`,{children:`n`}),` respectively, return the minimum window substring of `,(0,k.jsx)(`code`,{children:`s`}),` such that every character in `,(0,k.jsx)(`code`,{children:`t`}),` (including duplicates) is included in the window. If there is no such substring, return the empty string `,(0,k.jsx)(`code`,{children:`""`}),`.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Brute Force Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(n²) | Space Complexity: O(t)`}),(0,k.jsx)(M,{language:`javascript`,children:`function minWindow(s, t) {
  const getCount = (str) => {
    const map = {};
    for (let char of str) map[char] = (map[char] || 0) + 1;
    return map;
  };
  
  const tCount = getCount(t);
  let minLen = Infinity;
  let minStr = "";
  
  for (let i = 0; i < s.length; i++) {
    for (let j = i + t.length - 1; j < s.length; j++) {
      const sub = s.slice(i, j + 1);
      const subCount = getCount(sub);
      
      let valid = true;
      for (let char in tCount) {
        if (!subCount[char] || subCount[char] < tCount[char]) {
          valid = false;
          break;
        }
      }
      
      if (valid && sub.length < minLen) {
        minLen = sub.length;
        minStr = sub;
      }
    }
  }
  return minStr;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach`}),(0,k.jsx)(`p`,{children:`Time Complexity: O(m + n) | Space Complexity: O(m + n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function minWindow(s, t) {
  if (t === "") return "";
  
  const countT = {};
  const window = {};
  for (let c of t) {
    countT[c] = (countT[c] || 0) + 1;
  }
  
  let have = 0;
  let need = Object.keys(countT).length;
  let res = [-1, -1];
  let resLen = Infinity;
  let left = 0;
  
  for (let right = 0; right < s.length; right++) {
    let c = s[right];
    window[c] = (window[c] || 0) + 1;
    
    if (countT[c] && window[c] === countT[c]) {
      have++;
    }
    
    while (have === need) {
      if ((right - left + 1) < resLen) {
        res = [left, right];
        resLen = right - left + 1;
      }
      
      window[s[left]]--;
      if (countT[s[left]] && window[s[left]] < countT[s[left]]) {
        have--;
      }
      left++;
    }
  }
  return resLen !== Infinity ? s.slice(res[0], res[1] + 1) : "";
}`})]})]}),Rr=()=>(0,k.jsxs)(j,{id:`dsa-stack`,title:`10.4 — Stack`,icon:`📚`,children:[(0,k.jsxs)(`h3`,{children:[`Valid Parentheses `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsxs)(`p`,{children:[`Given a string containing just the characters '(', ')', '`,`, `,`', '[' and ']', determine if the input string is valid.`]}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (String Replace)`}),(0,k.jsxs)(`p`,{children:[`Repeatedly replace valid pairs "()", "`,`", "[]" until no more pairs can be found. Time: O(n^2), Space: O(n)`]}),(0,k.jsx)(M,{language:`javascript`,children:`function isValid(s) {
  while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
    s = s.replace('()', '').replace('{}', '').replace('[]', '');
  }
  return s === '';
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Stack)`}),(0,k.jsx)(`p`,{children:`Use a stack to keep track of opening brackets. When a closing bracket is encountered, check if it matches the top of the stack. Time: O(n), Space: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}`})]}),(0,k.jsx)(`h3`,{children:`Min Stack`}),(0,k.jsx)(`p`,{children:`Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Search for Min)`}),(0,k.jsx)(`p`,{children:`Keep a standard stack. When getMin() is called, iterate through the stack to find the minimum. Time: O(1) push/pop, O(n) getMin. Space: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`class MinStack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return Math.min(...this.stack);
  }
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Two Stacks / Tuple)`}),(0,k.jsx)(`p`,{children:`Store pairs of [value, current_min] in the stack to retrieve the minimum in O(1) time. Time: O(1) all ops, Space: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`class MinStack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    if (this.stack.length === 0) {
      this.stack.push([val, val]);
    } else {
      const currentMin = this.stack[this.stack.length - 1][1];
      this.stack.push([val, Math.min(val, currentMin)]);
    }
  }
  pop() {
    this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1][0];
  }
  getMin() {
    return this.stack[this.stack.length - 1][1];
  }
}`})]}),(0,k.jsxs)(`h3`,{children:[`Daily Temperatures `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Given an array of temperatures, return an array such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Brute Force)`}),(0,k.jsx)(`p`,{children:`For each day, iterate forward to find the next warmer day. Time: O(n^2), Space: O(1) extra space.`}),(0,k.jsx)(M,{language:`javascript`,children:`function dailyTemperatures(temperatures) {
  const res = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        res[i] = j - i;
        break;
      }
    }
  }
  return res;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Monotonic Stack)`}),(0,k.jsx)(`p`,{children:`Use a stack to keep track of indices. If we see a warmer temperature, we pop indices from the stack and calculate the difference. Time: O(n), Space: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function dailyTemperatures(temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const stack = []; // stores indices
  
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const idx = stack.pop();
      res[idx] = i - idx;
    }
    stack.push(i);
  }
  return res;
}`})]}),(0,k.jsx)(`h3`,{children:`Next Greater Element`}),(0,k.jsx)(`p`,{children:`Given two arrays, find the next greater element for each element of the first array in the second array.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Brute Force)`}),(0,k.jsx)(`p`,{children:`For each element in nums1, find its position in nums2, then scan right to find the next greater. Time: O(n * m), Space: O(1) extra space.`}),(0,k.jsx)(M,{language:`javascript`,children:`function nextGreaterElement(nums1, nums2) {
  return nums1.map(num => {
    let idx = nums2.indexOf(num);
    for (let i = idx + 1; i < nums2.length; i++) {
      if (nums2[i] > num) return nums2[i];
    }
    return -1;
  });
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Monotonic Stack + Hash Map)`}),(0,k.jsx)(`p`,{children:`Use a monotonic stack to find the next greater elements for all of nums2, store results in a map, and quickly lookup for nums1. Time: O(n + m), Space: O(m)`}),(0,k.jsx)(M,{language:`javascript`,children:`function nextGreaterElement(nums1, nums2) {
  const map = new Map();
  const stack = [];
  
  for (let num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  
  return nums1.map(num => map.has(num) ? map.get(num) : -1);
}`})]}),(0,k.jsx)(`h3`,{children:`Largest Rectangle in Histogram`}),(0,k.jsx)(`p`,{children:`Given an array of integers representing the histogram's bar height, return the area of the largest rectangle.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Brute Force)`}),(0,k.jsx)(`p`,{children:`For each pair of bars, find the minimum height between them and calculate area. Time: O(n^2), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function largestRectangleArea(heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let minHeight = heights[i];
    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      maxArea = Math.max(maxArea, minHeight * (j - i + 1));
    }
  }
  return maxArea;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Monotonic Stack)`}),(0,k.jsx)(`p`,{children:`Use a stack to track indices of increasing bar heights. When a shorter bar is found, calculate areas for bars in the stack. Time: O(n), Space: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function largestRectangleArea(heights) {
  let maxArea = 0;
  const stack = []; // stores indices
  
  for (let i = 0; i <= heights.length; i++) {
    const currHeight = i === heights.length ? 0 : heights[i];
    
    while (stack.length > 0 && currHeight < heights[stack[stack.length - 1]]) {
      const h = heights[stack.pop()];
      const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }
  
  return maxArea;
}`})]})]}),zr=()=>(0,k.jsxs)(j,{id:`dsa-binary-search`,title:`10.5 — Binary Search`,icon:`🔍`,children:[(0,k.jsxs)(`h3`,{children:[`Binary Search `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Linear Search)`}),(0,k.jsx)(`p`,{children:`Iterate through the array one by one until the target is found. Time: O(n), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Binary Search)`}),(0,k.jsx)(`p`,{children:`Compare target with middle element, eliminate half the search space based on result. Time: O(log n), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`})]}),(0,k.jsxs)(`h3`,{children:[`Search in Rotated Sorted Array `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Search for a target value in a sorted array that has been rotated at some pivot.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Linear Search)`}),(0,k.jsx)(`p`,{children:`Scan through the entire array. Time: O(n), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function search(nums, target) {
  return nums.indexOf(target);
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Modified Binary Search)`}),(0,k.jsx)(`p`,{children:`Determine which half is properly sorted, and check if target falls within that sorted half. Time: O(log n), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function search(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    
    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } 
    // Right half is sorted
    else {
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}`})]}),(0,k.jsx)(`h3`,{children:`Find Minimum in Rotated Sorted Array`}),(0,k.jsx)(`p`,{children:`Find the minimum element in a sorted array that has been rotated.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Linear Search)`}),(0,k.jsx)(`p`,{children:`Iterate and find the minimum value. Time: O(n), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function findMin(nums) {
  return Math.min(...nums);
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Binary Search)`}),(0,k.jsx)(`p`,{children:`Look for the inflection point where the array drops. The drop represents the minimum. Time: O(log n), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function findMin(nums) {
  let left = 0, right = nums.length - 1;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    // If mid is greater than right, min is in the right half
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return nums[left];
}`})]}),(0,k.jsx)(`h3`,{children:`Koko Eating Bananas`}),(0,k.jsx)(`p`,{children:`Determine the minimum eating speed (k) for Koko to eat all bananas within h hours.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Linear Search for k)`}),(0,k.jsx)(`p`,{children:`Try every speed starting from 1 up to the max pile size. Time: O(max(piles) * n), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function minEatingSpeed(piles, h) {
  const maxPile = Math.max(...piles);
  
  for (let speed = 1; speed <= maxPile; speed++) {
    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / speed);
    }
    if (hours <= h) return speed;
  }
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Binary Search on Answer)`}),(0,k.jsx)(`p`,{children:`Binary search the eating speed between 1 and max pile size. Time: O(n * log(max(piles))), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let hours = 0;
    
    for (let pile of piles) {
      hours += Math.ceil(pile / mid);
    }
    
    if (hours <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  
  return left;
}`})]}),(0,k.jsx)(`h3`,{children:`Median of Two Sorted Arrays`}),(0,k.jsx)(`p`,{children:`Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Merge and Sort/Find)`}),(0,k.jsx)(`p`,{children:`Merge both arrays into one sorted array, then find the median. Time: O(n + m), Space: O(n + m)`}),(0,k.jsx)(M,{language:`javascript`,children:`function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  }
  return merged[mid];
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Binary Search on Partitions)`}),(0,k.jsx)(`p`,{children:`Binary search to find a partition in both arrays such that left half elements are less than or equal to right half elements. Time: O(log(min(m, n))), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  
  const m = nums1.length;
  const n = nums2.length;
  let low = 0, high = m;
  
  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((m + n + 1) / 2) - partitionX;
    
    let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minRightX = partitionX === m ? Infinity : nums1[partitionX];
    
    let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minRightY = partitionY === n ? Infinity : nums2[partitionY];
    
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
}`})]})]}),Br=()=>(0,k.jsxs)(j,{id:`dsa-linked-list`,title:`10.6 — Linked List`,icon:`🔗`,children:[(0,k.jsxs)(`h3`,{children:[`Reverse Linked List `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Given the head of a singly linked list, reverse the list, and return the reversed list.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Store in Array)`}),(0,k.jsx)(`p`,{children:`Traverse the linked list and store values in an array, then build a new reversed linked list. Time: O(n), Space: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function reverseList(head) {
  const vals = [];
  let curr = head;
  while (curr) {
    vals.push(curr.val);
    curr = curr.next;
  }
  
  let newHead = null;
  for (let val of vals) {
    newHead = new ListNode(val, newHead);
  }
  return newHead;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Iterative Pointers)`}),(0,k.jsx)(`p`,{children:`Use previous and current pointers to reverse the next links in-place. Time: O(n), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function reverseList(head) {
  let prev = null;
  let curr = head;
  
  while (curr) {
    let nextTemp = curr.next; // save next
    curr.next = prev;         // reverse
    prev = curr;              // advance prev
    curr = nextTemp;          // advance curr
  }
  
  return prev;
}`})]}),(0,k.jsxs)(`h3`,{children:[`Merge Two Sorted Lists `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Merge two sorted linked lists into one sorted linked list.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Collect and Sort)`}),(0,k.jsx)(`p`,{children:`Collect all values from both lists into an array, sort the array, and reconstruct the list. Time: O(n log n), Space: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function mergeTwoLists(l1, l2) {
  const vals = [];
  while (l1) { vals.push(l1.val); l1 = l1.next; }
  while (l2) { vals.push(l2.val); l2 = l2.next; }
  
  vals.sort((a, b) => a - b);
  
  let dummy = new ListNode(0);
  let curr = dummy;
  for (let val of vals) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Two Pointers)`}),(0,k.jsx)(`p`,{children:`Iterate through both lists simultaneously and link the smaller node to the merged list. Time: O(n + m), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(-1);
  let curr = dummy;
  
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  
  curr.next = l1 !== null ? l1 : l2;
  return dummy.next;
}`})]}),(0,k.jsxs)(`h3`,{children:[`Linked List Cycle `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Determine if a linked list has a cycle in it.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Hash Set)`}),(0,k.jsx)(`p`,{children:`Use a Set to keep track of nodes we've seen. If we encounter a seen node again, there is a cycle. Time: O(n), Space: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`function hasCycle(head) {
  const seen = new Set();
  let curr = head;
  
  while (curr) {
    if (seen.has(curr)) return true;
    seen.add(curr);
    curr = curr.next;
  }
  return false;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Floyd's Tortoise and Hare)`}),(0,k.jsx)(`p`,{children:`Use a slow pointer and a fast pointer. If there is a cycle, the fast pointer will eventually catch up to the slow pointer. Time: O(n), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function hasCycle(head) {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) return true;
  }
  return false;
}`})]}),(0,k.jsx)(`h3`,{children:`Remove Nth Node From End`}),(0,k.jsx)(`p`,{children:`Remove the nth node from the end of a linked list and return its head.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Two Passes)`}),(0,k.jsx)(`p`,{children:`First pass to count total length. Second pass to go to length - n node and remove it. Time: O(n), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function removeNthFromEnd(head, n) {
  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }
  
  if (length === n) return head.next;
  
  curr = head;
  for (let i = 1; i < length - n; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  
  return head;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (One Pass with Two Pointers)`}),(0,k.jsx)(`p`,{children:`Use two pointers. Move the fast pointer n steps ahead, then move both at the same speed. Time: O(n), Space: O(1)`}),(0,k.jsx)(M,{language:`javascript`,children:`function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;
  
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  
  slow.next = slow.next.next;
  return dummy.next;
}`})]}),(0,k.jsx)(`h3`,{children:`LRU Cache`}),(0,k.jsx)(`p`,{children:`Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Array of Objects)`}),(0,k.jsx)(`p`,{children:`Keep an array or map tracking usage history and loop through to find the least recently used on evict. Time: O(n) for get/put, Space: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.cap) {
      // Maps iterate in insertion order, so the first key is the oldest
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
  }
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Doubly Linked List + Hash Map)`}),(0,k.jsx)(`p`,{children:`Map gives O(1) lookup to nodes. Doubly linked list allows O(1) addition/removal of nodes to manage LRU status. Time: O(1) for get/put, Space: O(n)`}),(0,k.jsx)(M,{language:`javascript`,children:`class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.map = new Map();
    
    // dummy nodes
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  
  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  
  _add(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }
  
  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this._remove(node);
      this._add(node);
      return node.val;
    }
    return -1;
  }
  
  put(key, value) {
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }
    const newNode = new Node(key, value);
    this.map.set(key, newNode);
    this._add(newNode);
    
    if (this.map.size > this.cap) {
      const lru = this.tail.prev;
      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
}`})]})]}),Vr=()=>(0,k.jsxs)(j,{id:`dsa-trees`,title:`10.7 — Trees`,icon:`🌲`,children:[(0,k.jsx)(`p`,{children:`Trees are hierarchical data structures. The most common is the Binary Tree, where each node has at most two children. Tree traversal algorithms like DFS (Pre, In, Post) and BFS are foundational.`}),(0,k.jsxs)(`h3`,{children:[`Maximum Depth of Binary Tree `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Find the maximum depth (number of nodes along the longest path from root to leaf) of a binary tree.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Iterative BFS)`}),(0,k.jsx)(`p`,{children:`Traverse level by level using a queue, incrementing depth at each level. Time: O(N), Space: O(N) for the queue in the worst case (the widest level).`}),(0,k.jsx)(M,{language:`javascript`,children:`function maxDepth(root) {
  if (!root) return 0;
  let queue = [root];
  let depth = 0;
  
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Recursive DFS)`}),(0,k.jsx)(`p`,{children:`Use depth-first search recursively. The max depth of a tree is 1 + max(left_depth, right_depth). Time: O(N), Space: O(H) where H is tree height for the recursion stack.`}),(0,k.jsx)(M,{language:`javascript`,children:`function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`})]}),(0,k.jsx)(`h3`,{children:`Invert Binary Tree`}),(0,k.jsx)(`p`,{children:`Invert a binary tree (flip it like a mirror). This is famously the question Max Howell was asked in an interview.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Iterative BFS)`}),(0,k.jsx)(`p`,{children:`Use a queue to process nodes level by level, swapping the left and right children. Time: O(N), Space: O(N) for the queue.`}),(0,k.jsx)(M,{language:`javascript`,children:`function invertTree(root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Recursive DFS)`}),(0,k.jsx)(`p`,{children:`Recursively swap left and right subtrees. Time: O(N), Space: O(H) for the call stack.`}),(0,k.jsx)(M,{language:`javascript`,children:`function invertTree(root) {
  if (!root) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  
  invertTree(root.left);
  invertTree(root.right);
  
  return root;
}`})]}),(0,k.jsx)(`h3`,{children:`Same Tree`}),(0,k.jsx)(`p`,{children:`Check if two binary trees are structurally identical and have the same node values.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Iterative BFS)`}),(0,k.jsx)(`p`,{children:`Use a queue to traverse both trees together and compare nodes. Time: O(N), Space: O(N).`}),(0,k.jsx)(M,{language:`javascript`,children:`function isSameTree(p, q) {
  let queue = [[p, q]];
  while (queue.length) {
    let [n1, n2] = queue.shift();
    if (!n1 && !n2) continue;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    queue.push([n1.left, n2.left]);
    queue.push([n1.right, n2.right]);
  }
  return true;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Recursive DFS)`}),(0,k.jsx)(`p`,{children:`Recursively check if current nodes are equal and their subtrees are equal. Time: O(N), Space: O(H).`}),(0,k.jsx)(M,{language:`javascript`,children:`function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}`})]}),(0,k.jsxs)(`h3`,{children:[`Binary Tree Level Order Traversal `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Return the level order traversal of its nodes' values. (i.e., from left to right, level by level).`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Recursive DFS)`}),(0,k.jsx)(`p`,{children:`Pass the depth down the recursive calls to place node values into the correct array index. Time: O(N), Space: O(N) for output arrays + recursion stack.`}),(0,k.jsx)(M,{language:`javascript`,children:`function levelOrder(root) {
  let res = [];
  function dfs(node, level) {
    if (!node) return;
    if (res.length === level) res.push([]);
    res[level].push(node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
  dfs(root, 0);
  return res;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Iterative BFS)`}),(0,k.jsx)(`p`,{children:`Use a queue. Process level by level naturally. Time: O(N), Space: O(N) for queue and result arrays.`}),(0,k.jsx)(M,{language:`javascript`,children:`function levelOrder(root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  
  while (queue.length) {
    let levelSize = queue.length;
    let currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(currentLevel);
  }
  return res;
}`})]}),(0,k.jsx)(`h3`,{children:`Lowest Common Ancestor`}),(0,k.jsx)(`p`,{children:`Find the lowest common ancestor (LCA) of two given nodes in a Binary Search Tree.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Recursive Search)`}),(0,k.jsx)(`p`,{children:`If both values are lesser, search left. If both are greater, search right. Otherwise, we found the split point. Time: O(H), Space: O(H).`}),(0,k.jsx)(M,{language:`javascript`,children:`function lowestCommonAncestor(root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Iterative)`}),(0,k.jsx)(`p`,{children:`Same logic, but iterate down the tree avoiding call stack overhead. Time: O(H), Space: O(1).`}),(0,k.jsx)(M,{language:`javascript`,children:`function lowestCommonAncestor(root, p, q) {
  let curr = root;
  while (curr) {
    if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    } else if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    } else {
      return curr;
    }
  }
}`})]}),(0,k.jsxs)(`h3`,{children:[`Validate BST `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Determine if a binary tree is a valid binary search tree (BST).`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Inorder Array)`}),(0,k.jsx)(`p`,{children:`Do an inorder traversal, collect values, and check if array is strictly increasing. Time: O(N), Space: O(N).`}),(0,k.jsx)(M,{language:`javascript`,children:`function isValidBST(root) {
  let values = [];
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    values.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  for (let i = 1; i < values.length; i++) {
    if (values[i] <= values[i - 1]) return false;
  }
  return true;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Recursive with Boundaries)`}),(0,k.jsx)(`p`,{children:`Pass down a valid range [min, max] for each node to ensure every node satisfies the BST condition constraint. Time: O(N), Space: O(H).`}),(0,k.jsx)(M,{language:`javascript`,children:`function isValidBST(root, min = null, max = null) {
  if (!root) return true;
  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false;
  }
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}`})]}),(0,k.jsx)(`h3`,{children:`Kth Smallest Element in BST`}),(0,k.jsx)(`p`,{children:`Given the root of a BST, find the kth smallest value (1-indexed).`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Recursive Inorder Array)`}),(0,k.jsx)(`p`,{children:`Flatten the tree to an array via inorder traversal, then pick the (k-1)th element. Time: O(N), Space: O(N).`}),(0,k.jsx)(M,{language:`javascript`,children:`function kthSmallest(root, k) {
  let values = [];
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    values.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  return values[k - 1];
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Iterative Inorder Traversal)`}),(0,k.jsx)(`p`,{children:`Use a stack to simulate inorder traversal and stop early when we hit the k-th node. Time: O(H + k), Space: O(H) for the stack.`}),(0,k.jsx)(M,{language:`javascript`,children:`function kthSmallest(root, k) {
  let stack = [];
  let curr = root;
  let count = 0;
  
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    count++;
    if (count === k) return curr.val;
    curr = curr.right;
  }
}`})]})]}),Hr=()=>(0,k.jsxs)(j,{id:`dsa-graphs`,title:`10.8 — Graphs`,icon:`🕸️`,children:[(0,k.jsx)(`p`,{children:`Graph problems involve nodes (vertices) and connections (edges). Identifying whether to use BFS, DFS, or Topological Sort is key.`}),(0,k.jsxs)(`h3`,{children:[`Number of Islands `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Given a 2D grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (BFS)`}),(0,k.jsx)(`p`,{children:`Iterate through grid. When a '1' is found, increment count and run BFS to mark all connected '1's as visited (or flip to '0'). Time: O(M * N), Space: O(min(M, N)) for queue.`}),(0,k.jsx)(M,{language:`javascript`,children:`function numIslands(grid) {
  let count = 0;
  let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        count++;
        let queue = [[r, c]];
        grid[r][c] = '0';
        
        while (queue.length) {
          let [currR, currC] = queue.shift();
          for (let [dr, dc] of dirs) {
            let nr = currR + dr, nc = currC + dc;
            if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === '1') {
              queue.push([nr, nc]);
              grid[nr][nc] = '0';
            }
          }
        }
      }
    }
  }
  return count;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (DFS)`}),(0,k.jsx)(`p`,{children:`Similar logic but recursive DFS. Usually cleaner to implement. Time: O(M * N), Space: O(M * N) worst case for recursion stack.`}),(0,k.jsx)(M,{language:`javascript`,children:`function numIslands(grid) {
  let count = 0;
  
  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') return;
    grid[r][c] = '0'; // mark as visited
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}`})]}),(0,k.jsx)(`h3`,{children:`Clone Graph`}),(0,k.jsx)(`p`,{children:`Return a deep copy (clone) of a graph where each node contains a value and a list of neighbors.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (BFS)`}),(0,k.jsx)(`p`,{children:`Use a queue and a hash map to map original nodes to their clones. Time: O(V + E), Space: O(V).`}),(0,k.jsx)(M,{language:`javascript`,children:`function cloneGraph(node) {
  if (!node) return null;
  let map = new Map();
  let queue = [node];
  map.set(node, new Node(node.val));
  
  while (queue.length) {
    let curr = queue.shift();
    for (let neighbor of curr.neighbors) {
      if (!map.has(neighbor)) {
        map.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }
      map.get(curr).neighbors.push(map.get(neighbor));
    }
  }
  return map.get(node);
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (DFS)`}),(0,k.jsx)(`p`,{children:`Recursive DFS using a map to keep track of already visited nodes to prevent cycles. Time: O(V + E), Space: O(V).`}),(0,k.jsx)(M,{language:`javascript`,children:`function cloneGraph(node) {
  let map = new Map();
  function dfs(node) {
    if (!node) return null;
    if (map.has(node)) return map.get(node);
    
    let clone = new Node(node.val);
    map.set(node, clone);
    for (let neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    return clone;
  }
  return dfs(node);
}`})]}),(0,k.jsxs)(`h3`,{children:[`Course Schedule `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Given total courses and prerequisites, determine if it is possible to finish all courses (detect cycles in a directed graph).`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (DFS Cycle Detection)`}),(0,k.jsx)(`p`,{children:`Track visiting state for nodes. If we hit a node currently in the path, there's a cycle. Time: O(V + E), Space: O(V + E).`}),(0,k.jsx)(M,{language:`javascript`,children:`function canFinish(numCourses, prerequisites) {
  let adj = Array.from({length: numCourses}, () => []);
  for (let [crs, pre] of prerequisites) {
    adj[crs].push(pre);
  }
  
  let visiting = new Set();
  
  function dfs(crs) {
    if (visiting.has(crs)) return false; // Cycle detected
    if (adj[crs].length === 0) return true;
    
    visiting.add(crs);
    for (let pre of adj[crs]) {
      if (!dfs(pre)) return false;
    }
    visiting.delete(crs);
    adj[crs] = []; // Optimization: mark as completed
    return true;
  }
  
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Kahn's Algorithm - BFS)`}),(0,k.jsx)(`p`,{children:`Use in-degrees. Nodes with in-degree 0 can be completed. Decrement neighbors and add to queue. Time: O(V + E), Space: O(V + E).`}),(0,k.jsx)(M,{language:`javascript`,children:`function canFinish(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0);
  let adj = Array.from({length: numCourses}, () => []);
  
  for (let [crs, pre] of prerequisites) {
    adj[pre].push(crs);
    inDegree[crs]++;
  }
  
  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  
  let count = 0;
  while (queue.length) {
    let curr = queue.shift();
    count++;
    for (let next of adj[curr]) {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    }
  }
  
  return count === numCourses;
}`})]}),(0,k.jsx)(`h3`,{children:`Pacific Atlantic Water Flow`}),(0,k.jsx)(`p`,{children:`Given an m x n matrix of heights, find all coordinates that can flow to BOTH the Pacific (top/left) and Atlantic (bottom/right) oceans.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (DFS from each cell)`}),(0,k.jsx)(`p`,{children:`Run a DFS from every single cell and check if it reaches both oceans. This repeats a lot of work. Time: O((M*N)^2), Space: O(M*N).`}),(0,k.jsx)(M,{language:`javascript`,children:`// Pseudocode:
// For each cell [r, c]:
//   visited = set()
//   if dfs(r, c) reaches Pacific AND dfs(r, c) reaches Atlantic:
//     add [r, c] to result
// Very slow, will Time Out on large grids.`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (DFS from Oceans)`}),(0,k.jsx)(`p`,{children:`Start from ocean borders and flow water "uphill" to the inner cells. Intersect the results. Time: O(M*N), Space: O(M*N).`}),(0,k.jsx)(M,{language:`javascript`,children:`function pacificAtlantic(heights) {
  let rows = heights.length, cols = heights[0].length;
  let pac = Array.from({length: rows}, () => Array(cols).fill(false));
  let atl = Array.from({length: rows}, () => Array(cols).fill(false));
  
  function dfs(r, c, visited, prevHeight) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || visited[r][c] || heights[r][c] < prevHeight) return;
    visited[r][c] = true;
    dfs(r + 1, c, visited, heights[r][c]);
    dfs(r - 1, c, visited, heights[r][c]);
    dfs(r, c + 1, visited, heights[r][c]);
    dfs(r, c - 1, visited, heights[r][c]);
  }
  
  for (let c = 0; c < cols; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(rows - 1, c, atl, heights[rows - 1][c]);
  }
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, cols - 1, atl, heights[r][cols - 1]);
  }
  
  let res = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pac[r][c] && atl[r][c]) res.push([r, c]);
    }
  }
  return res;
}`})]}),(0,k.jsx)(`h3`,{children:`Word Ladder`}),(0,k.jsx)(`p`,{children:`Transform a beginWord to an endWord changing one letter at a time, where every transformed word must be in a wordList. Return shortest sequence length.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (DFS Backtracking)`}),(0,k.jsx)(`p`,{children:`Explore all possible paths recursively to find the minimum length. Extremely slow, easily leads to TLE. Time: Exponential, Space: O(N) call stack.`}),(0,k.jsx)(M,{language:`javascript`,children:`// Pseudocode:
// dfs(currWord, length, visited)
//   if currWord == endWord: update minLength
//   for word in wordList:
//     if word diff by 1 char and not visited:
//       dfs(word, length + 1, visited + word)
// Will Time Out.`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (BFS)`}),(0,k.jsx)(`p`,{children:`Shortest path in an unweighted graph is best solved with BFS. Time: O(M^2 * N) where M is word length and N is word list size. Space: O(M * N).`}),(0,k.jsx)(M,{language:`javascript`,children:`function ladderLength(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  
  let queue = [[beginWord, 1]];
  
  while (queue.length) {
    let [word, steps] = queue.shift();
    if (word === endWord) return steps;
    
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) { // 'a' to 'z'
        let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, steps + 1]);
          wordSet.delete(newWord); // Mark visited
        }
      }
    }
  }
  return 0;
}`})]})]}),Ur=()=>(0,k.jsxs)(j,{id:`dsa-dp`,title:`10.9 — Dynamic Programming`,icon:`🧠`,children:[(0,k.jsx)(`p`,{children:`Dynamic Programming (DP) is about breaking problems into subproblems and saving overlapping subproblem results (memoization/tabulation).`}),(0,k.jsx)(`h3`,{children:`Climbing Stairs`}),(0,k.jsx)(`p`,{children:`You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. How many distinct ways can you climb?`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Recursive)`}),(0,k.jsx)(`p`,{children:`Recurse tree taking 1 and 2 steps. This evaluates overlapping subproblems repeatedly. Time: O(2^n), Space: O(n) call stack.`}),(0,k.jsx)(M,{language:`javascript`,children:`function climbStairs(n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Iterative DP / Fibonacci)`}),(0,k.jsx)(`p`,{children:`Use two variables to track previous step combinations instead of an array. Time: O(n), Space: O(1).`}),(0,k.jsx)(M,{language:`javascript`,children:`function climbStairs(n) {
  if (n <= 2) return n;
  let prev2 = 1, prev1 = 2;
  
  for (let i = 3; i <= n; i++) {
    let curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}`})]}),(0,k.jsxs)(`h3`,{children:[`House Robber `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Given an array of integers representing house money, determine the max money you can rob without robbing adjacent houses.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Recursive with Memoization)`}),(0,k.jsx)(`p`,{children:`Top-down DP. Choice is either to rob current house + jump two, or skip current. Time: O(n), Space: O(n).`}),(0,k.jsx)(M,{language:`javascript`,children:`function rob(nums) {
  let memo = {};
  function dp(i) {
    if (i >= nums.length) return 0;
    if (i in memo) return memo[i];
    
    let robCurr = nums[i] + dp(i + 2);
    let skipCurr = dp(i + 1);
    
    memo[i] = Math.max(robCurr, skipCurr);
    return memo[i];
  }
  return dp(0);
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Iterative Bottom-Up O(1) Space)`}),(0,k.jsx)(`p`,{children:`Keep track of the max money at the last two steps. Time: O(n), Space: O(1).`}),(0,k.jsx)(M,{language:`javascript`,children:`function rob(nums) {
  let rob1 = 0, rob2 = 0;
  
  for (let n of nums) {
    let temp = Math.max(n + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
}`})]}),(0,k.jsxs)(`h3`,{children:[`Coin Change `,(0,k.jsx)(F,{variant:`purple`,children:`Frontend Priority`})]}),(0,k.jsx)(`p`,{children:`Given an array of coins and a target amount, return the fewest number of coins that make up that amount.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (DFS with Memoization)`}),(0,k.jsx)(`p`,{children:`Try every coin repeatedly. Top-down DP. Time: O(amount * len(coins)), Space: O(amount) recursion stack.`}),(0,k.jsx)(M,{language:`javascript`,children:`function coinChange(coins, amount) {
  let memo = {};
  function dfs(rem) {
    if (rem === 0) return 0;
    if (rem < 0) return -1;
    if (rem in memo) return memo[rem];
    
    let min = Infinity;
    for (let coin of coins) {
      let res = dfs(rem - coin);
      if (res >= 0 && res < min) min = 1 + res;
    }
    
    memo[rem] = min === Infinity ? -1 : min;
    return memo[rem];
  }
  return dfs(amount);
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Bottom-Up Tabulation)`}),(0,k.jsx)(`p`,{children:`Build an array from 0 to amount. For each amount, check each coin. Time: O(amount * len(coins)), Space: O(amount).`}),(0,k.jsx)(M,{language:`javascript`,children:`function coinChange(coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  
  for (let a = 1; a <= amount; a++) {
    for (let c of coins) {
      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
}`})]}),(0,k.jsx)(`h3`,{children:`Longest Increasing Subsequence`}),(0,k.jsx)(`p`,{children:`Given an integer array, return the length of the longest strictly increasing subsequence.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Dynamic Programming)`}),(0,k.jsx)(`p`,{children:`Compare each element with every element before it. Time: O(n^2), Space: O(n).`}),(0,k.jsx)(M,{language:`javascript`,children:`function lengthOfLIS(nums) {
  let dp = new Array(nums.length).fill(1);
  let max = 1;
  
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Binary Search)`}),(0,k.jsx)(`p`,{children:`Maintain a list of smallest tails for increasing subsequences. Overwrite with binary search. Time: O(n log n), Space: O(n).`}),(0,k.jsx)(M,{language:`javascript`,children:`function lengthOfLIS(nums) {
  let tails = [];
  
  for (let x of nums) {
    let left = 0, right = tails.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (tails[mid] < x) left = mid + 1;
      else right = mid;
    }
    tails[left] = x;
  }
  
  return tails.length;
}`})]}),(0,k.jsx)(`h3`,{children:`Longest Common Subsequence`}),(0,k.jsx)(`p`,{children:`Given two strings, return the length of their longest common subsequence.`}),(0,k.jsxs)(N,{type:`warning`,children:[(0,k.jsx)(`h4`,{children:`Normal Approach (Recursive with Memoization)`}),(0,k.jsx)(`p`,{children:`Check characters from the end. If match, 1 + move both. Else max of moving one or the other. Time: O(m*n), Space: O(m*n).`}),(0,k.jsx)(M,{language:`javascript`,children:`function longestCommonSubsequence(text1, text2) {
  let memo = {};
  function dfs(i, j) {
    if (i === text1.length || j === text2.length) return 0;
    let key = i + ',' + j;
    if (key in memo) return memo[key];
    
    if (text1[i] === text2[j]) {
      memo[key] = 1 + dfs(i + 1, j + 1);
    } else {
      memo[key] = Math.max(dfs(i + 1, j), dfs(i, j + 1));
    }
    return memo[key];
  }
  return dfs(0, 0);
}`})]}),(0,k.jsxs)(N,{type:`success`,children:[(0,k.jsx)(`h4`,{children:`Optimal Approach (Bottom-Up 2D Array)`}),(0,k.jsx)(`p`,{children:`Use a 2D matrix. Fill from bottom-right to top-left. Time: O(m*n), Space: O(m*n).`}),(0,k.jsx)(M,{language:`javascript`,children:`function longestCommonSubsequence(text1, text2) {
  let m = text1.length, n = text2.length;
  let dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));
  
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  return dp[0][0];
}`})]})]});function Wr(){return(0,k.jsxs)(A,{id:`important-dsa`,number:`10`,title:`Important DSA in JavaScript`,theme:`purple`,children:[(0,k.jsxs)(`p`,{className:`section-intro`,children:[`Data Structures and Algorithms (DSA) are the foundation of computer science and technical interviews. In this chapter, we cover the top 45+ medium-to-hard level problems across 9 key patterns. Each problem includes the brute-force ("Normal") approach and the optimized ("Optimal") approach. Look out for the `,(0,k.jsx)(`strong`,{children:`Frontend Priority`}),` badges which highlight the 20 most crucial problems to study if you are short on time.`]}),(0,k.jsx)(Fr,{}),(0,k.jsx)(Ir,{}),(0,k.jsx)(Lr,{}),(0,k.jsx)(Rr,{}),(0,k.jsx)(zr,{}),(0,k.jsx)(Br,{}),(0,k.jsx)(Vr,{}),(0,k.jsx)(Hr,{}),(0,k.jsx)(Ur,{})]})}var Gr={icon:`react`,title:`React.js Developer`,subtitle:`Comprehensive Guide`,accent:`#61dafb`},Kr={badge:`Professional Reference Guide`,title:`React.js Frontend Developer`,subtitle:`A practical field guide for building scalable React interfaces, integrating real APIs, improving performance, and preparing for frontend interviews.`,accent:`cyan`,firstChapterId:`chapter-1`};function qr(){return(0,k.jsxs)(mr,{chapters:er,brandConfig:Gr,children:[(0,k.jsx)(yr,{chapters:er,config:Kr}),(0,k.jsx)(br,{chapters:er}),(0,k.jsx)(Er,{}),(0,k.jsx)(Dr,{}),(0,k.jsx)(Or,{}),(0,k.jsx)(kr,{}),(0,k.jsx)(Ar,{}),(0,k.jsx)(jr,{}),(0,k.jsx)(Mr,{}),(0,k.jsx)(Nr,{}),(0,k.jsx)(Pr,{}),(0,k.jsx)(Wr,{}),(0,k.jsx)(xr,{chapters:er,trackName:`React.js Frontend Developer`})]})}var Jr=()=>(0,k.jsxs)(A,{id:`sb-chapter-1`,number:1,title:`Spring Boot Fundamentals`,theme:`green`,children:[(0,k.jsx)(`p`,{children:`Spring Boot completely revolutionized Java enterprise development by introducing the "convention over configuration" paradigm. Before Spring Boot, starting a new Spring project required massive amounts of XML configuration, dependency management headaches, and a deep understanding of application servers like Tomcat or WebSphere.`}),(0,k.jsx)(`p`,{children:`Today, Spring Boot allows you to create production-grade, stand-alone Spring applications that you can "just run." It takes an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.`}),(0,k.jsxs)(j,{id:`spring-boot-intro`,icon:`🚀`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`1.1 What is Spring Boot?`,children:[(0,k.jsxs)(`p`,{children:[`At its core, Spring Boot is not a replacement for the Spring Framework; it's a sophisticated layer built `,(0,k.jsx)(`em`,{children:`on top`}),` of it. It provides three major capabilities that make development blazingly fast:`]}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Auto-configuration:`})," Spring Boot automatically configures your application based on the jar dependencies you've added. If `spring-webmvc` is on the classpath, it configures a DispatcherServlet. If `h2-database` is present, it configures an in-memory database."]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Starter Dependencies:`}),' "Starters" are a set of convenient dependency descriptors you can include in your application. You get a one-stop-shop for all the Spring and related technology you need. Instead of hunting for the right versions of 10 different libraries to build a web app, you just include `spring-boot-starter-web`.']}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Embedded Servers:`}),` Spring Boot packages an embedded web server (Tomcat, Jetty, or Undertow) directly inside your executable JAR file. You no longer need to deploy a WAR file to a separate web server.`]})]}),(0,k.jsx)(N,{type:`note`,title:`Opinionated Defaults`,children:`Spring Boot's "opinionated" nature means it provides sensible default configurations for almost everything. However, it gets out of the way seamlessly when you need to define your own custom configurations.`})]}),(0,k.jsxs)(j,{id:`project-setup`,icon:`📦`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`1.2 Project Setup & Initializr`,children:[(0,k.jsxs)(`p`,{children:[`The absolute best way to start a new Spring Boot project is by using the `,(0,k.jsx)(`strong`,{children:`Spring Initializr`}),` (available at `,(0,k.jsx)(`a`,{href:`https://start.spring.io`,target:`_blank`,rel:`noreferrer`,children:`start.spring.io`}),`). It allows you to select your build tool (Maven or Gradle), Java version, and the Starter dependencies you need.`]}),(0,k.jsx)(`h4`,{children:`Understanding the Maven POM (pom.xml)`}),(0,k.jsx)(`p`,{children:"When you generate a project, you'll get a `pom.xml` that inherits from the `spring-boot-starter-parent`. This parent POM manages the versions of all Spring and third-party dependencies, ensuring compatibility."}),(0,k.jsx)(M,{filename:`pom.xml (Snippet)`,language:`xml`,children:`<span class="tag">&lt;parent&gt;</span>
  <span class="tag">&lt;groupId&gt;</span>org.springframework.boot<span class="tag">&lt;/groupId&gt;</span>
  <span class="tag">&lt;artifactId&gt;</span>spring-boot-starter-parent<span class="tag">&lt;/artifactId&gt;</span>
  <span class="tag">&lt;version&gt;</span>3.2.4<span class="tag">&lt;/version&gt;</span>
  <span class="tag">&lt;relativePath</span><span class="tag">/&gt;</span> <span class="cm">&lt;!-- lookup parent from repository --&gt;</span>
<span class="tag">&lt;/parent&gt;</span>

<span class="tag">&lt;dependencies&gt;</span>
  <span class="cm">&lt;!-- Provides Spring MVC, embedded Tomcat, Jackson, etc. --&gt;</span>
  <span class="tag">&lt;dependency&gt;</span>
    <span class="tag">&lt;groupId&gt;</span>org.springframework.boot<span class="tag">&lt;/groupId&gt;</span>
    <span class="tag">&lt;artifactId&gt;</span>spring-boot-starter-web<span class="tag">&lt;/artifactId&gt;</span>
  <span class="tag">&lt;/dependency&gt;</span>
  
  <span class="cm">&lt;!-- Provides JPA and Hibernate --&gt;</span>
  <span class="tag">&lt;dependency&gt;</span>
    <span class="tag">&lt;groupId&gt;</span>org.springframework.boot<span class="tag">&lt;/groupId&gt;</span>
    <span class="tag">&lt;artifactId&gt;</span>spring-boot-starter-data-jpa<span class="tag">&lt;/artifactId&gt;</span>
  <span class="tag">&lt;/dependency&gt;</span>
<span class="tag">&lt;/dependencies&gt;</span>`})]}),(0,k.jsxs)(j,{id:`project-structure`,icon:`📁`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`1.3 Project Structure & Conventions`,children:[(0,k.jsx)(`p`,{children:'Spring Boot recommends a standard package layout. The main application class should be placed in a root package above all other classes. This allows the `@SpringBootApplication` annotation to implicitly define a base "search package" for component scanning.'}),(0,k.jsx)(M,{filename:`Standard Directory Layout`,language:`bash`,children:`<span class="cm">src/main/java/com/example/demo/</span>
├── DemoApplication.java         <span class="cm"># Main application class</span>
├── <span class="fn">controller/</span>                  <span class="cm"># REST Controllers (@RestController)</span>
│   └── UserController.java
├── <span class="fn">service/</span>                     <span class="cm"># Business Logic (@Service)</span>
│   └── UserService.java
├── <span class="fn">repository/</span>                  <span class="cm"># Data Access (@Repository)</span>
│   └── UserRepository.java
├── <span class="fn">model/</span>                       <span class="cm"># JPA Entities (@Entity)</span>
│   └── User.java
├── <span class="fn">dto/</span>                         <span class="cm"># Data Transfer Objects</span>
│   └── UserDto.java
└── <span class="fn">config/</span>                      <span class="cm"># Configurations (@Configuration)</span>
    └── SecurityConfig.java

<span class="cm">src/main/resources/</span>
├── application.yml              <span class="cm"># Application configuration</span>
└── <span class="fn">static/</span>                      <span class="cm"># Static assets (HTML, CSS, JS)</span>`}),(0,k.jsx)(`h4`,{children:`The Main Application Class`}),(0,k.jsx)(`p`,{children:"Every Spring Boot application has a main class containing the `public static void main` method. This is the entry point that delegates to `SpringApplication.run()`."}),(0,k.jsx)(M,{filename:`DemoApplication.java`,language:`java`,children:`<span class="kw">package</span> com.example.demo;

<span class="kw">import</span> org.springframework.boot.SpringApplication;
<span class="kw">import</span> org.springframework.boot.autoconfigure.SpringBootApplication;

<span class="attr">@SpringBootApplication</span>
<span class="kw">public class</span> <span class="fn">DemoApplication</span> {

    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) {
        <span class="cm">// Bootstraps the application, starts the IoC container and embedded server</span>
        SpringApplication.<span class="fn">run</span>(DemoApplication.<span class="kw">class</span>, args);
    }
}`}),(0,k.jsxs)(N,{type:`tip`,title:`Unpacking @SpringBootApplication`,children:["`@SpringBootApplication` is actually a convenience annotation that combines three incredibly important annotations:",(0,k.jsx)(`br`,{}),`1. `,(0,k.jsx)(`code`,{children:`@Configuration`}),`: Tags the class as a source of bean definitions.`,(0,k.jsx)(`br`,{}),`2. `,(0,k.jsx)(`code`,{children:`@EnableAutoConfiguration`}),`: Tells Spring Boot to start adding beans based on classpath settings.`,(0,k.jsx)(`br`,{}),`3. `,(0,k.jsx)(`code`,{children:`@ComponentScan`}),`: Tells Spring to look for other components, configurations, and services in the current package and all its sub-packages.`]})]}),(0,k.jsxs)(j,{id:`application-properties`,icon:`⚙️`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`1.4 Configuration (Properties vs YAML)`,children:[(0,k.jsx)(`p`,{children:`Spring Boot externalizes configuration so you can work with the same application code in different environments. You can use properties files, YAML files, environment variables, or command-line arguments.`}),(0,k.jsx)(`p`,{children:"Most developers prefer YAML (`application.yml`) over properties (`application.properties`) due to its hierarchical and readable structure, especially when dealing with complex configurations."}),(0,k.jsx)(M,{filename:`src/main/resources/application.yml`,language:`yaml`,children:`<span class="cm"># Server Configuration</span>
server:
  port: 8080
  servlet:
    context-path: /api/v1

<span class="cm"># Database Configuration</span>
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: admin
    password: secure_password
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true

<span class="cm"># Custom Application Properties</span>
app:
  jwt:
    secret: my-super-secret-key-that-should-be-long-enough
    expiration-ms: 86400000`}),(0,k.jsx)(`h4`,{children:`Accessing Properties in Code`}),(0,k.jsx)(`p`,{children:"You can inject configuration values directly into your beans using the `@Value` annotation, or for complex configurations, use `@ConfigurationProperties` to bind properties to a POJO (Plain Old Java Object)."}),(0,k.jsx)(M,{filename:`JwtConfig.java`,language:`java`,children:`<span class="kw">package</span> com.example.demo.config;

<span class="kw">import</span> org.springframework.beans.factory.annotation.Value;
<span class="kw">import</span> org.springframework.stereotype.Component;
<span class="kw">import</span> org.springframework.boot.context.properties.ConfigurationProperties;

<span class="cm">// Approach 1: Using @Value for single properties</span>
<span class="attr">@Component</span>
<span class="kw">public class</span> <span class="fn">JwtUtils</span> {
    
    <span class="attr">@Value</span>(<span class="str">"\${app.jwt.secret}"</span>)
    <span class="kw">private</span> String jwtSecret;
    
    <span class="attr">@Value</span>(<span class="str">"\${app.jwt.expiration-ms}"</span>)
    <span class="kw">private int</span> jwtExpirationMs;
}

<span class="cm">// Approach 2: Using @ConfigurationProperties (Recommended for grouped properties)</span>
<span class="attr">@Component</span>
<span class="attr">@ConfigurationProperties</span>(prefix = <span class="str">"app.jwt"</span>)
<span class="kw">public class</span> <span class="fn">JwtProperties</span> {
    <span class="kw">private</span> String secret;
    <span class="kw">private int</span> expirationMs;

    <span class="cm">// Getters and Setters are required for @ConfigurationProperties to work!</span>
    <span class="kw">public</span> String <span class="fn">getSecret</span>() { <span class="kw">return</span> secret; }
    <span class="kw">public void</span> <span class="fn">setSecret</span>(String secret) { <span class="kw">this</span>.secret = secret; }
    
    <span class="kw">public int</span> <span class="fn">getExpirationMs</span>() { <span class="kw">return</span> expirationMs; }
    <span class="kw">public void</span> <span class="fn">setExpirationMs</span>(<span class="kw">int</span> expirationMs) { <span class="kw">this</span>.expirationMs = expirationMs; }
}`})]})]}),Yr=()=>(0,k.jsxs)(A,{id:`sb-chapter-2`,number:2,title:`Spring Core — IoC & Dependency Injection`,theme:`green`,children:[(0,k.jsxs)(`p`,{children:[`To truly master Spring Boot, you must understand the engine running beneath it: The Spring Core framework. The core concepts of Spring are `,(0,k.jsx)(`strong`,{children:`Inversion of Control (IoC)`}),` and `,(0,k.jsx)(`strong`,{children:`Dependency Injection (DI)`}),`. These patterns promote loose coupling, making your code easier to test, maintain, and scale.`]}),(0,k.jsxs)(j,{id:`ioc-container`,icon:`🔄`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`2.1 The IoC Container`,children:[(0,k.jsx)(`p`,{children:"In a traditional Java application, objects are responsible for instantiating their own dependencies (e.g., using the `new` keyword). This leads to tight coupling. If Class A creates Class B, Class A is hardcoded to depend on the specific implementation of Class B."}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Inversion of Control`})," means transferring the control of creating and managing objects away from the objects themselves and giving it to a container. In Spring, this container is the `ApplicationContext`. The objects managed by the Spring IoC container are called ",(0,k.jsx)(`strong`,{children:`Beans`}),`.`]}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`BeanFactory:`}),` The simplest container, providing basic DI support. Rarely used directly in modern applications.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`ApplicationContext:`})," A sub-interface of BeanFactory. It adds more enterprise-specific functionality like internationalization, event propagation, and environment profiles. Spring Boot uses `ApplicationContext`."]})]})]}),(0,k.jsxs)(j,{id:`dependency-injection`,icon:`💉`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`2.2 Dependency Injection Patterns`,children:[(0,k.jsx)(`p`,{children:`Dependency Injection is the mechanism used to implement IoC. The container injects the required dependencies into a bean when it is created. There are three primary ways to inject dependencies in Spring:`}),(0,k.jsx)(`h4`,{children:`1. Constructor Injection (Strongly Recommended)`}),(0,k.jsx)(`p`,{children:"This is the best practice. Dependencies are provided as constructor parameters. It ensures that the bean is fully initialized in a valid state before it's used. It also makes the class easier to unit test without Spring, and allows dependencies to be marked as `final`."}),(0,k.jsx)(M,{filename:`UserService.java (Constructor Injection)`,language:`java`,children:`<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">UserService</span> {

    <span class="kw">private final</span> UserRepository userRepository;
    <span class="kw">private final</span> EmailService emailService;

    <span class="cm">// @Autowired is optional in Spring 4.3+ if there's only one constructor</span>
    <span class="kw">public</span> <span class="fn">UserService</span>(UserRepository userRepository, EmailService emailService) {
        <span class="kw">this</span>.userRepository = userRepository;
        <span class="kw">this</span>.emailService = emailService;
    }

    <span class="kw">public void</span> <span class="fn">registerUser</span>(User user) {
        userRepository.<span class="fn">save</span>(user);
        emailService.<span class="fn">sendWelcomeEmail</span>(user.getEmail());
    }
}`}),(0,k.jsx)(`h4`,{children:`2. Field Injection (Not Recommended)`}),(0,k.jsx)(`p`,{children:"Dependencies are injected directly into the fields using `@Autowired`. While it requires the least amount of boilerplate code, it's heavily discouraged because it hides dependencies, prevents the use of `final` fields, and makes the class impossible to instantiate outside of a Spring container (e.g., in a unit test) without reflection."}),(0,k.jsx)(M,{filename:`BadPractice.java (Field Injection)`,language:`java`,children:`<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">BadUserService</span> {

    <span class="attr">@Autowired</span>
    <span class="kw">private</span> UserRepository userRepository; <span class="cm">// Difficult to mock without Spring context!</span>
}`}),(0,k.jsx)(`h4`,{children:`Handling Multiple Implementations (@Qualifier & @Primary)`}),(0,k.jsx)(`p`,{children:"What happens when Spring finds multiple beans of the same type? It throws a `NoUniqueBeanDefinitionException`. You can resolve this using `@Qualifier` or `@Primary`."}),(0,k.jsx)(M,{filename:`PaymentProcessing.java`,language:`java`,children:`<span class="kw">public interface</span> <span class="fn">PaymentGateway</span> { <span class="kw">void</span> <span class="fn">pay</span>(); }

<span class="attr">@Service</span>(<span class="str">"stripeGateway"</span>)
<span class="attr">@Primary</span> <span class="cm">// Makes this the default choice if no qualifier is specified</span>
<span class="kw">public class</span> <span class="fn">StripeGateway</span> <span class="kw">implements</span> PaymentGateway { ... }

<span class="attr">@Service</span>(<span class="str">"paypalGateway"</span>)
<span class="kw">public class</span> <span class="fn">PaypalGateway</span> <span class="kw">implements</span> PaymentGateway { ... }

<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">CheckoutService</span> {
    <span class="kw">private final</span> PaymentGateway defaultGateway; <span class="cm">// Gets Stripe (due to @Primary)</span>
    <span class="kw">private final</span> PaymentGateway paypalGateway;  <span class="cm">// Gets Paypal (due to @Qualifier)</span>

    <span class="kw">public</span> <span class="fn">CheckoutService</span>(
            PaymentGateway defaultGateway, 
            <span class="attr">@Qualifier</span>(<span class="str">"paypalGateway"</span>) PaymentGateway paypalGateway) {
        <span class="kw">this</span>.defaultGateway = defaultGateway;
        <span class="kw">this</span>.paypalGateway = paypalGateway;
    }
}`})]}),(0,k.jsxs)(j,{id:`bean-lifecycle`,icon:`♻️`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`2.3 Bean Scopes & Lifecycle`,children:[(0,k.jsx)(`p`,{children:`When you define a bean in Spring, you can declare the scope of that bean. The scope determines how long the bean lives and how many instances are created.`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Singleton (Default):`}),` Only one instance of the bean is created per Spring IoC container. This single instance is cached and returned for all subsequent requests. `,(0,k.jsx)(`em`,{children:`Stateful beans should not be singletons!`})]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Prototype:`}),` A new instance is created every time the bean is requested from the container.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Request:`}),` Scoped to a single HTTP request (web applications only).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Session:`}),` Scoped to an HTTP session (web applications only).`]})]}),(0,k.jsx)(`h4`,{children:`Lifecycle Callbacks`}),(0,k.jsx)(`p`,{children:"You can hook into the bean creation and destruction phases using standard Java annotations: `@PostConstruct` and `@PreDestroy`."}),(0,k.jsx)(M,{filename:`DatabaseCache.java`,language:`java`,children:`<span class="attr">@Component</span>
<span class="attr">@Scope</span>(<span class="str">"singleton"</span>) <span class="cm">// This is the default, explicitly stating it for clarity</span>
<span class="kw">public class</span> <span class="fn">DatabaseCache</span> {

    <span class="attr">@PostConstruct</span>
    <span class="kw">public void</span> <span class="fn">init</span>() {
        <span class="cm">// Called AFTER the bean has been instantiated and all dependencies injected.</span>
        <span class="cm">// Perfect place for expensive initialization logic.</span>
        System.out.<span class="fn">println</span>(<span class="str">"Populating cache from database..."</span>);
    }

    <span class="attr">@PreDestroy</span>
    <span class="kw">public void</span> <span class="fn">cleanup</span>() {
        <span class="cm">// Called right BEFORE the bean is destroyed (when application shuts down).</span>
        <span class="cm">// Perfect place to release resources, close connections, etc.</span>
        System.out.<span class="fn">println</span>(<span class="str">"Flushing cache to disk..."</span>);
    }
}`})]}),(0,k.jsxs)(j,{id:`spring-profiles`,icon:`🏷️`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`2.4 Profiles & Conditional Beans`,children:[(0,k.jsx)(`p`,{children:"Enterprise applications inevitably need to execute in different environments (e.g., `dev`, `qa`, `prod`). Spring Profiles provide a way to segregate parts of your application configuration and make it available only in certain environments."}),(0,k.jsx)(M,{filename:`EmailConfiguration.java`,language:`java`,children:`<span class="attr">@Configuration</span>
<span class="kw">public class</span> <span class="fn">EmailConfiguration</span> {

    <span class="cm">// This bean is only created if the "dev" profile is active</span>
    <span class="attr">@Bean</span>
    <span class="attr">@Profile</span>(<span class="str">"dev"</span>)
    <span class="kw">public</span> EmailSender <span class="fn">mockEmailSender</span>() {
        <span class="kw">return new</span> <span class="fn">MockEmailSender</span>(); <span class="cm">// Just logs emails to the console</span>
    }

    <span class="cm">// This bean is only created if the "prod" profile is active</span>
    <span class="attr">@Bean</span>
    <span class="attr">@Profile</span>(<span class="str">"prod"</span>)
    <span class="kw">public</span> EmailSender <span class="fn">smtpEmailSender</span>() {
        <span class="kw">return new</span> <span class="fn">SmtpEmailSender</span>(); <span class="cm">// Actually sends emails via AWS SES or SendGrid</span>
    }
}`}),(0,k.jsx)(`p`,{children:"You activate a profile by passing an environment variable or command-line argument when running the application, or by setting it in your `application.yml`:"}),(0,k.jsx)(M,{filename:`application.yml`,language:`yaml`,children:`spring:
  profiles:
    active: dev`}),(0,k.jsx)(N,{type:`tip`,title:`Advanced Conditionals`,children:"Spring Boot auto-configuration relies heavily on the `@Conditional` family of annotations. You can use these in your own code to dynamically register beans. Examples include: `@ConditionalOnProperty`, `@ConditionalOnClass`, and `@ConditionalOnMissingBean`."})]})]}),Xr=()=>(0,k.jsxs)(A,{id:`sb-chapter-3`,number:3,title:`Building REST APIs with Spring MVC`,theme:`green`,children:[(0,k.jsx)(`p`,{children:"Spring MVC is the web framework built into Spring Boot. It uses the `DispatcherServlet` to route incoming HTTP requests to the appropriate handlers (Controllers). When building REST APIs, Spring MVC handles the heavy lifting of routing, parameter extraction, and serialization."}),(0,k.jsxs)(j,{id:`rest-controller`,icon:`🌐`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`3.1 @RestController & Request Mapping`,children:[(0,k.jsx)(`p`,{children:"The `@RestController` annotation is a specialized version of `@Controller`. It combines `@Controller` and `@ResponseBody`, meaning every method returns a domain object instead of a view (HTML page), and Spring automatically serializes it into the HTTP response body (usually as JSON)."}),(0,k.jsx)(M,{filename:`ProductController.java`,language:`java`,children:`<span class="attr">@RestController</span>
<span class="attr">@RequestMapping</span>(<span class="str">"/api/v1/products"</span>) <span class="cm">// Base path for all endpoints in this class</span>
<span class="kw">public class</span> <span class="fn">ProductController</span> {

    <span class="kw">private final</span> ProductService productService;

    <span class="kw">public</span> <span class="fn">ProductController</span>(ProductService productService) {
        <span class="kw">this</span>.productService = productService;
    }

    <span class="cm">// GET /api/v1/products</span>
    <span class="attr">@GetMapping</span>
    <span class="kw">public</span> List&lt;Product&gt; <span class="fn">getAllProducts</span>() {
        <span class="kw">return</span> productService.<span class="fn">findAll</span>();
    }

    <span class="cm">// GET /api/v1/products/123</span>
    <span class="cm">// Extracts the 'id' from the URL path</span>
    <span class="attr">@GetMapping</span>(<span class="str">"/{id}"</span>)
    <span class="kw">public</span> Product <span class="fn">getProductById</span>(<span class="attr">@PathVariable</span> Long id) {
        <span class="kw">return</span> productService.<span class="fn">findById</span>(id);
    }

    <span class="cm">// GET /api/v1/products/search?category=electronics</span>
    <span class="cm">// Extracts the 'category' from the query string parameters</span>
    <span class="attr">@GetMapping</span>(<span class="str">"/search"</span>)
    <span class="kw">public</span> List&lt;Product&gt; <span class="fn">searchProducts</span>(<span class="attr">@RequestParam</span> String category) {
        <span class="kw">return</span> productService.<span class="fn">findByCategory</span>(category);
    }
}`})]}),(0,k.jsxs)(j,{id:`request-response`,icon:`📨`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`3.2 Request Body, Response & DTOs`,children:[(0,k.jsx)(`p`,{children:"For POST and PUT requests, the client sends data in the request body. We map this data to a Java object using `@RequestBody`."}),(0,k.jsxs)(`p`,{children:[`It's a crucial best practice to `,(0,k.jsx)(`strong`,{children:`never expose your database Entities directly in your REST controllers`}),`. Instead, use Data Transfer Objects (DTOs). Java 14+ Records are perfect for creating concise DTOs.`]}),(0,k.jsx)(M,{filename:`CreateProductDto.java`,language:`java`,children:`<span class="cm">// A Java Record automatically generates getters, equals(), hashCode(), and toString()</span>
<span class="kw">public record</span> <span class="fn">CreateProductDto</span>(
    String name,
    String description,
    BigDecimal price
) {}`}),(0,k.jsx)(`p`,{children:"Additionally, you should wrap your return objects in `ResponseEntity`. This gives you full control over the HTTP status code and response headers."}),(0,k.jsx)(M,{filename:`ProductController.java (POST)`,language:`java`,children:`    <span class="cm">// POST /api/v1/products</span>
    <span class="attr">@PostMapping</span>
    <span class="kw">public</span> ResponseEntity&lt;ProductResponseDto&gt; <span class="fn">createProduct</span>(
            <span class="attr">@RequestBody</span> CreateProductDto createDto) {
        
        <span class="cm">// Service layer converts DTO to Entity, saves it, and returns saved Entity</span>
        Product savedProduct = productService.<span class="fn">create</span>(createDto);
        
        <span class="cm">// Controller converts saved Entity back to Response DTO</span>
        ProductResponseDto responseDto = <span class="kw">new</span> <span class="fn">ProductResponseDto</span>(savedProduct);
        
        <span class="cm">// Return 201 Created status code with the newly created resource</span>
        <span class="kw">return</span> ResponseEntity.<span class="fn">status</span>(HttpStatus.CREATED).<span class="fn">body</span>(responseDto);
    }`}),(0,k.jsx)(N,{type:`note`,title:`Status Codes Matter`,children:"Always return the correct HTTP status code. `200 OK` for GET/PUT, `201 Created` for POST, `204 No Content` for successful DELETEs, `400 Bad Request` for invalid inputs, and `404 Not Found` when a resource doesn't exist."})]}),(0,k.jsxs)(j,{id:`content-negotiation`,icon:`🔗`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`3.3 Content Negotiation & JSON`,children:[(0,k.jsxs)(`p`,{children:[`Under the hood, Spring Boot uses the `,(0,k.jsx)(`strong`,{children:`Jackson`})," library to convert Java objects to JSON and vice-versa. This happens automatically thanks to Spring's `HttpMessageConverters`."]}),(0,k.jsx)(`p`,{children:"Content Negotiation allows the same endpoint to serve different formats based on the client's `Accept` header. If a client requests `Accept: application/xml`, and you've added the Jackson XML extension dependency, Spring will automatically serialize the response to XML instead of JSON without changing your controller code."}),(0,k.jsx)(M,{filename:`Jackson Annotations`,language:`java`,children:`<span class="kw">public class</span> <span class="fn">UserResponseDto</span> {
    
    <span class="kw">private</span> Long id;
    
    <span class="attr">@JsonProperty</span>(<span class="str">"full_name"</span>) <span class="cm">// Changes the JSON key from "name" to "full_name"</span>
    <span class="kw">private</span> String name;
    
    <span class="attr">@JsonIgnore</span> <span class="cm">// Prevents the password from being serialized into the response</span>
    <span class="kw">private</span> String password;
    
    <span class="attr">@JsonFormat</span>(pattern = <span class="str">"yyyy-MM-dd HH:mm:ss"</span>) <span class="cm">// Formats the date string</span>
    <span class="kw">private</span> LocalDateTime createdAt;
}`})]}),(0,k.jsxs)(j,{id:`api-versioning`,icon:`📋`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`3.4 API Versioning & Documentation`,children:[(0,k.jsxs)(`p`,{children:[`APIs evolve, and you must avoid breaking existing mobile apps or third-party integrations when you make changes. The most common versioning strategy is `,(0,k.jsx)(`strong`,{children:`URI Versioning`})," (e.g., `/api/v1/...` and `/api/v2/...`)."]}),(0,k.jsx)(`h4`,{children:`OpenAPI (Swagger) Documentation`}),(0,k.jsx)(`p`,{children:"Documenting your REST APIs is non-negotiable for professional teams. The `springdoc-openapi-starter-webmvc-ui` dependency automates this. It reads your Spring MVC annotations and generates an interactive Swagger UI."}),(0,k.jsx)(M,{filename:`pom.xml`,language:`xml`,children:`<span class="tag">&lt;dependency&gt;</span>
    <span class="tag">&lt;groupId&gt;</span>org.springdoc<span class="tag">&lt;/groupId&gt;</span>
    <span class="tag">&lt;artifactId&gt;</span>springdoc-openapi-starter-webmvc-ui<span class="tag">&lt;/artifactId&gt;</span>
    <span class="tag">&lt;version&gt;</span>2.5.0<span class="tag">&lt;/version&gt;</span>
<span class="tag">&lt;/dependency&gt;</span>`}),(0,k.jsx)(`p`,{children:"You can enrich the documentation using `@Operation` and `@ApiResponse` annotations on your controller methods to describe what the endpoint does and what status codes it might return."}),(0,k.jsx)(`p`,{children:"Once added and running, the interactive documentation is available at `http://localhost:8080/swagger-ui.html`."})]})]}),Zr=()=>(0,k.jsxs)(A,{id:`sb-chapter-4`,number:4,title:`Data Access with Spring Data JPA`,theme:`green`,children:[(0,k.jsxs)(`p`,{children:[`Interacting with relational databases is a core requirement for most backend applications. Spring Data JPA dramatically simplifies this by providing a repository abstraction over the Java Persistence API (JPA), which itself is an abstraction over JDBC. Under the hood, Spring Boot uses `,(0,k.jsx)(`strong`,{children:`Hibernate`}),` as the default JPA provider.`]}),(0,k.jsxs)(j,{id:`jpa-entities`,icon:`🗃️`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`4.1 JPA Entities & Relationships`,children:[(0,k.jsx)(`p`,{children:`An Entity is a plain Java class that represents a table in your database. Instances of the class represent rows. We map the object-oriented paradigm to the relational paradigm using annotations.`}),(0,k.jsx)(M,{filename:`Post.java (Entity)`,language:`java`,children:`<span class="kw">package</span> com.example.demo.model;

<span class="kw">import</span> jakarta.persistence.*;
<span class="kw">import</span> java.util.List;

<span class="attr">@Entity</span>
<span class="attr">@Table</span>(name = <span class="str">"posts"</span>)
<span class="kw">public class</span> <span class="fn">Post</span> {

    <span class="attr">@Id</span>
    <span class="attr">@GeneratedValue</span>(strategy = GenerationType.IDENTITY) <span class="cm">// Uses database auto-increment</span>
    <span class="kw">private</span> Long id;

    <span class="attr">@Column</span>(nullable = <span class="kw">false</span>, length = 100)
    <span class="kw">private</span> String title;

    <span class="attr">@Column</span>(columnDefinition = <span class="str">"TEXT"</span>)
    <span class="kw">private</span> String content;

    <span class="cm">// Relationship: Many Posts belong to One Author</span>
    <span class="attr">@ManyToOne</span>(fetch = FetchType.LAZY)
    <span class="attr">@JoinColumn</span>(name = <span class="str">"author_id"</span>, nullable = <span class="kw">false</span>)
    <span class="kw">private</span> User author;

    <span class="cm">// Relationship: One Post has Many Comments</span>
    <span class="attr">@OneToMany</span>(mappedBy = <span class="str">"post"</span>, cascade = CascadeType.ALL, orphanRemoval = <span class="kw">true</span>)
    <span class="kw">private</span> List&lt;Comment&gt; comments;
    
    <span class="cm">// Getters and Setters omitted for brevity</span>
}`}),(0,k.jsx)(N,{type:`warning`,title:`Always use FetchType.LAZY`,children:"By default, `@ManyToOne` and `@OneToOne` use `FetchType.EAGER`, meaning Hibernate will immediately fetch the related entity via a JOIN, even if you don't need it. This leads to the infamous N+1 query performance problem. Always explicitly set them to `FetchType.LAZY`."})]}),(0,k.jsxs)(j,{id:`repositories`,icon:`📚`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`4.2 Spring Data Repositories`,children:[(0,k.jsx)(`p`,{children:`Spring Data JPA allows you to create a DAO (Data Access Object) simply by defining an interface. Spring dynamically generates the implementation class at runtime.`}),(0,k.jsx)(M,{filename:`PostRepository.java`,language:`java`,children:`<span class="kw">import</span> org.springframework.data.jpa.repository.JpaRepository;
<span class="kw">import</span> org.springframework.data.jpa.repository.Query;
<span class="kw">import</span> org.springframework.stereotype.Repository;

<span class="attr">@Repository</span>
<span class="kw">public interface</span> <span class="fn">PostRepository</span> <span class="kw">extends</span> JpaRepository&lt;Post, Long&gt; {

    <span class="cm">// 1. Derived Query Method: Spring writes the SQL based on the method name!</span>
    <span class="cm">// Translates to: SELECT * FROM posts WHERE title = ? AND author_id = ?</span>
    List&lt;Post&gt; <span class="fn">findByTitleAndAuthorId</span>(String title, Long authorId);

    <span class="cm">// 2. Custom JPQL Query (Querying the Object model, not the Table model)</span>
    <span class="attr">@Query</span>(<span class="str">"SELECT p FROM Post p WHERE p.title LIKE %:keyword%"</span>)
    List&lt;Post&gt; <span class="fn">searchByKeyword</span>(String keyword);

    <span class="cm">// 3. Native SQL Query (Database specific, bypasses Hibernate ORM)</span>
    <span class="attr">@Query</span>(value = <span class="str">"SELECT * FROM posts ORDER BY created_at DESC LIMIT 5"</span>, nativeQuery = <span class="kw">true</span>)
    List&lt;Post&gt; <span class="fn">findTop5RecentPosts</span>();
}`}),(0,k.jsx)(`p`,{children:"By extending `JpaRepository`, you immediately inherit methods like `save()`, `findById()`, `findAll()`, and `deleteById()` without writing any code."})]}),(0,k.jsxs)(j,{id:`pagination-sorting`,icon:`📄`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`4.3 Pagination & Sorting`,children:[(0,k.jsx)(`p`,{children:"Returning thousands of records from a database is terrible for performance. Spring Data makes pagination incredibly easy via the `Pageable` interface."}),(0,k.jsx)(M,{filename:`Pagination Example`,language:`java`,children:`<span class="cm">// In the Repository:</span>
Page&lt;Post&gt; <span class="fn">findByAuthorId</span>(Long authorId, Pageable pageable);

<span class="cm">// In the Controller:</span>
<span class="attr">@GetMapping</span>(<span class="str">"/authors/{authorId}/posts"</span>)
<span class="kw">public</span> Page&lt;Post&gt; <span class="fn">getAuthorPosts</span>(
        <span class="attr">@PathVariable</span> Long authorId,
        <span class="attr">@RequestParam</span>(defaultValue = <span class="str">"0"</span>) <span class="kw">int</span> page,
        <span class="attr">@RequestParam</span>(defaultValue = <span class="str">"10"</span>) <span class="kw">int</span> size) {
        
    <span class="cm">// Create a PageRequest object, sorted by ID descending</span>
    Pageable pageable = PageRequest.<span class="fn">of</span>(page, size, Sort.<span class="fn">by</span>(<span class="str">"id"</span>).<span class="fn">descending</span>());
    
    <span class="cm">// Returns a Page object containing the data, total pages, total elements, etc.</span>
    <span class="kw">return</span> postRepository.<span class="fn">findByAuthorId</span>(authorId, pageable);
}`})]}),(0,k.jsxs)(j,{id:`transactions`,icon:`🔒`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`4.4 Transactions & Auditing`,children:[(0,k.jsx)(`p`,{children:`When you execute multiple database operations that must succeed or fail as a single unit (like transferring money between bank accounts), you use database transactions.`}),(0,k.jsx)(`p`,{children:"Spring manages transactions declaratively using the `@Transactional` annotation. If any runtime exception is thrown within the annotated method, Spring automatically rolls back the entire transaction, ensuring data integrity."}),(0,k.jsx)(M,{filename:`OrderService.java`,language:`java`,children:`<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">OrderService</span> {

    <span class="cm">// Wraps the entire method in a database transaction</span>
    <span class="attr">@Transactional</span>
    <span class="kw">public void</span> <span class="fn">processOrder</span>(Order order, Payment payment) {
        <span class="cm">// 1. Deduct inventory (UPDATE)</span>
        inventoryRepository.<span class="fn">deduct</span>(order.getItems());
        
        <span class="cm">// 2. Save payment (INSERT)</span>
        paymentRepository.<span class="fn">save</span>(payment);
        
        <span class="cm">// 3. Save order (INSERT)</span>
        orderRepository.<span class="fn">save</span>(order);
        
        <span class="cm">// If an exception is thrown here (e.g. out of memory, network failure),</span>
        <span class="cm">// ALL previous database operations are rolled back automatically!</span>
    }
}`}),(0,k.jsx)(`h4`,{children:`JPA Auditing`}),(0,k.jsx)(`p`,{children:"Spring Data JPA can automatically populate `created_at` and `updated_at` timestamps for your entities without you writing manual setters. Simply add `@EnableJpaAuditing` to your main application class, and use `@CreatedDate` and `@LastModifiedDate` on your entity fields."})]})]}),Qr=()=>(0,k.jsxs)(A,{id:`sb-chapter-5`,number:5,title:`Security with Spring Security`,theme:`green`,children:[(0,k.jsxs)(`p`,{children:[`Securing an application involves two primary concepts: `,(0,k.jsx)(`strong`,{children:`Authentication`}),` (Who are you?) and `,(0,k.jsx)(`strong`,{children:`Authorization`}),` (What are you allowed to do?). Spring Security is the de facto standard for securing Spring-based applications, providing comprehensive support for both.`]}),(0,k.jsxs)(j,{id:`security-fundamentals`,icon:`🔐`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`5.1 Security Fundamentals`,children:[(0,k.jsx)(`p`,{children:"Spring Security works through a chain of Servlet Filters (the `SecurityFilterChain`). It intercepts incoming HTTP requests, applies authentication rules, and then passes the request down to the controllers if the user is authorized."}),(0,k.jsx)(M,{filename:`SecurityConfig.java`,language:`java`,children:`<span class="attr">@Configuration</span>
<span class="attr">@EnableWebSecurity</span>
<span class="kw">public class</span> <span class="fn">SecurityConfig</span> {

    <span class="attr">@Bean</span>
    <span class="kw">public</span> SecurityFilterChain <span class="fn">filterChain</span>(HttpSecurity http) <span class="kw">throws</span> Exception {
        http
            <span class="cm">// Disable CSRF since we use stateless JWTs (explained next)</span>
            .<span class="fn">csrf</span>(csrf -&gt; csrf.<span class="fn">disable</span>())
            
            <span class="cm">// Configure route authorization rules</span>
            .<span class="fn">authorizeHttpRequests</span>(auth -&gt; auth
                .<span class="fn">requestMatchers</span>(<span class="str">"/api/auth/**"</span>, <span class="str">"/public/**"</span>).<span class="fn">permitAll</span>() <span class="cm">// Open access</span>
                .<span class="fn">requestMatchers</span>(<span class="str">"/api/admin/**"</span>).<span class="fn">hasRole</span>(<span class="str">"ADMIN"</span>) <span class="cm">// Admin only</span>
                .<span class="fn">anyRequest</span>().<span class="fn">authenticated</span>() <span class="cm">// Require login for everything else</span>
            )
            
            <span class="cm">// Set session management to STATELESS for REST APIs</span>
            .<span class="fn">sessionManagement</span>(sess -&gt; sess.<span class="fn">sessionCreationPolicy</span>(SessionCreationPolicy.STATELESS));
            
            <span class="cm">// (We would also add our JWT Filter here)</span>

        <span class="kw">return</span> http.<span class="fn">build</span>();
    }

    <span class="cm">// Always hash passwords before saving them! Never store plain text.</span>
    <span class="attr">@Bean</span>
    <span class="kw">public</span> PasswordEncoder <span class="fn">passwordEncoder</span>() {
        <span class="kw">return new</span> <span class="fn">BCryptPasswordEncoder</span>();
    }
}`})]}),(0,k.jsxs)(j,{id:`jwt-authentication`,icon:`🎫`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`5.2 JWT Authentication`,children:[(0,k.jsxs)(`p`,{children:[`In modern REST APIs and Single Page Applications (SPAs) like React or Angular, session-based authentication (cookies and server memory) is often replaced by token-based authentication using `,(0,k.jsx)(`strong`,{children:`JSON Web Tokens (JWT)`}),`.`]}),(0,k.jsx)(`p`,{children:`A JWT is a cryptographically signed, Base64-encoded string containing a header, a payload (claims about the user), and a signature. Because it contains everything needed to verify the user, the server doesn't need to keep a session state in memory.`}),(0,k.jsx)(`h4`,{children:`The JWT Authentication Flow`}),(0,k.jsxs)(`ol`,{children:[(0,k.jsx)(`li`,{children:"Client sends `POST /api/auth/login` with username and password."}),(0,k.jsx)(`li`,{children:"Server verifies credentials against the database using `AuthenticationManager`."}),(0,k.jsx)(`li`,{children:`If valid, the server generates a JWT (signed with a secret key) and returns it.`}),(0,k.jsx)(`li`,{children:`Client stores the token (e.g., in localStorage or an HttpOnly cookie).`}),(0,k.jsx)(`li`,{children:"For subsequent requests, the Client sends the token in the HTTP Header: `Authorization: Bearer <token>`."}),(0,k.jsx)(`li`,{children:"A custom `JwtAuthenticationFilter` intercepts the request, validates the token signature, and populates the Spring Security Context."})]})]}),(0,k.jsxs)(j,{id:`role-based-access`,icon:`👥`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`5.3 Role-Based Access Control (RBAC)`,children:[(0,k.jsx)(`p`,{children:"While you can configure URL-based authorization in the `SecurityFilterChain`, it's often more maintainable to secure your business logic directly at the method level using annotations."}),(0,k.jsx)(`p`,{children:`First, enable global method security:`}),(0,k.jsx)(M,{filename:`MethodSecurityConfig.java`,language:`java`,children:`<span class="attr">@Configuration</span>
<span class="attr">@EnableMethodSecurity</span> <span class="cm">// Enables @PreAuthorize, @PostAuthorize, etc.</span>
<span class="kw">public class</span> <span class="fn">MethodSecurityConfig</span> { }`}),(0,k.jsx)(`p`,{children:`Then, apply the annotations directly to your controllers or services:`}),(0,k.jsx)(M,{filename:`UserController.java`,language:`java`,children:`<span class="attr">@RestController</span>
<span class="attr">@RequestMapping</span>(<span class="str">"/api/users"</span>)
<span class="kw">public class</span> <span class="fn">UserController</span> {

    <span class="cm">// Only users with the ADMIN role can execute this method</span>
    <span class="attr">@PreAuthorize</span>(<span class="str">"hasRole('ADMIN')"</span>)
    <span class="attr">@DeleteMapping</span>(<span class="str">"/{id}"</span>)
    <span class="kw">public</span> ResponseEntity&lt;Void&gt; <span class="fn">deleteUser</span>(<span class="attr">@PathVariable</span> Long id) {
        userService.<span class="fn">deleteUser</span>(id);
        <span class="kw">return</span> ResponseEntity.<span class="fn">noContent</span>().<span class="fn">build</span>();
    }

    <span class="cm">// Users can only view their OWN profile, unless they are an ADMIN</span>
    <span class="attr">@PreAuthorize</span>(<span class="str">"hasRole('ADMIN') or #id == authentication.principal.id"</span>)
    <span class="attr">@GetMapping</span>(<span class="str">"/{id}"</span>)
    <span class="kw">public</span> UserDto <span class="fn">getUserProfile</span>(<span class="attr">@PathVariable</span> Long id) {
        <span class="kw">return</span> userService.<span class="fn">getUserById</span>(id);
    }
}`})]}),(0,k.jsxs)(j,{id:`oauth2-cors`,icon:`🌍`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`5.4 OAuth2 & CORS Configuration`,children:[(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`CORS (Cross-Origin Resource Sharing):`})," When your React frontend (e.g., `http://localhost:3000`) tries to call your Spring Boot backend (e.g., `http://localhost:8080`), the browser blocks the request for security reasons. You must configure Spring Security to allow cross-origin requests."]}),(0,k.jsx)(M,{filename:`CorsConfig.java`,language:`java`,children:`http.<span class="fn">cors</span>(cors -&gt; cors.<span class="fn">configurationSource</span>(request -&gt; {
    CorsConfiguration config = <span class="kw">new</span> <span class="fn">CorsConfiguration</span>();
    config.<span class="fn">setAllowedOrigins</span>(List.<span class="fn">of</span>(<span class="str">"http://localhost:3000"</span>)); <span class="cm">// Allowed frontends</span>
    config.<span class="fn">setAllowedMethods</span>(List.<span class="fn">of</span>(<span class="str">"GET"</span>, <span class="str">"POST"</span>, <span class="str">"PUT"</span>, <span class="str">"DELETE"</span>, <span class="str">"OPTIONS"</span>));
    config.<span class="fn">setAllowedHeaders</span>(List.<span class="fn">of</span>(<span class="str">"Authorization"</span>, <span class="str">"Content-Type"</span>));
    <span class="kw">return</span> config;
}));`}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`OAuth2 Login:`}),' Spring Security makes it incredibly easy to implement "Login with Google" or "Login with GitHub" via OAuth2. By adding the `spring-boot-starter-oauth2-client` dependency and putting your client ID and secret in `application.yml`, Spring auto-configures the entire redirection flow!']})]})]}),$r=()=>(0,k.jsxs)(A,{id:`sb-chapter-6`,number:6,title:`Exception Handling & Validation`,theme:`green`,children:[(0,k.jsx)(`p`,{children:`A robust API must gracefully handle errors and invalid inputs. Instead of returning raw HTML error pages or unreadable Java stack traces, a professional REST API returns structured, predictable JSON error responses.`}),(0,k.jsxs)(j,{id:`global-exception-handling`,icon:`🛡️`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`6.1 Global Exception Handling (@ControllerAdvice)`,children:[(0,k.jsx)(`p`,{children:"Instead of wrapping every controller method in `try/catch` blocks, Spring allows you to handle exceptions globally using `@ControllerAdvice`. This acts as an interceptor. Whenever an exception is thrown anywhere in the application, the advice class catches it and transforms it into an HTTP response."}),(0,k.jsx)(M,{filename:`GlobalExceptionHandler.java`,language:`java`,children:`<span class="attr">@RestControllerAdvice</span> <span class="cm">// Combines @ControllerAdvice and @ResponseBody</span>
<span class="kw">public class</span> <span class="fn">GlobalExceptionHandler</span> {

    <span class="cm">// Catches our custom business exception</span>
    <span class="attr">@ExceptionHandler</span>(ResourceNotFoundException.<span class="kw">class</span>)
    <span class="kw">public</span> ResponseEntity&lt;ErrorResponse&gt; <span class="fn">handleNotFound</span>(ResourceNotFoundException ex) {
        ErrorResponse error = <span class="kw">new</span> <span class="fn">ErrorResponse</span>(
            HttpStatus.NOT_FOUND.<span class="fn">value</span>(),
            ex.<span class="fn">getMessage</span>(),
            LocalDateTime.<span class="fn">now</span>()
        );
        <span class="kw">return new</span> <span class="fn">ResponseEntity</span>&lt;&gt;(error, HttpStatus.NOT_FOUND);
    }

    <span class="cm">// Fallback for any unhandled exception (Prevent returning 500 HTML pages)</span>
    <span class="attr">@ExceptionHandler</span>(Exception.<span class="kw">class</span>)
    <span class="kw">public</span> ResponseEntity&lt;ErrorResponse&gt; <span class="fn">handleGlobalException</span>(Exception ex) {
        ErrorResponse error = <span class="kw">new</span> <span class="fn">ErrorResponse</span>(
            HttpStatus.INTERNAL_SERVER_ERROR.<span class="fn">value</span>(),
            <span class="str">"An unexpected error occurred"</span>,
            LocalDateTime.<span class="fn">now</span>()
        );
        <span class="kw">return new</span> <span class="fn">ResponseEntity</span>&lt;&gt;(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}`})]}),(0,k.jsxs)(j,{id:`bean-validation`,icon:`✅`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`6.2 Bean Validation (JSR 380)`,children:[(0,k.jsx)(`p`,{children:`You should never trust client input. Spring Boot provides seamless integration with the Hibernate Validator framework. You define your validation rules directly on your DTO classes using annotations.`}),(0,k.jsx)(M,{filename:`RegisterRequestDto.java`,language:`java`,children:`<span class="kw">public class</span> <span class="fn">RegisterRequestDto</span> {

    <span class="attr">@NotBlank</span>(message = <span class="str">"Username is required"</span>)
    <span class="attr">@Size</span>(min = 3, max = 20, message = <span class="str">"Username must be between 3 and 20 characters"</span>)
    <span class="kw">private</span> String username;

    <span class="attr">@NotBlank</span>(message = <span class="str">"Email is required"</span>)
    <span class="attr">@Email</span>(message = <span class="str">"Please provide a valid email address"</span>)
    <span class="kw">private</span> String email;

    <span class="attr">@NotBlank</span>
    <span class="attr">@Pattern</span>(regexp = <span class="str">"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$"</span>, 
             message = <span class="str">"Password must contain at least one digit, one lowercase, one uppercase, and be 8+ chars long"</span>)
    <span class="kw">private</span> String password;
    
    <span class="cm">// ... getters/setters</span>
}`}),(0,k.jsx)(`p`,{children:"To trigger the validation, simply prepend the `@Valid` annotation to the `@RequestBody` in your controller:"}),(0,k.jsx)(M,{filename:`AuthController.java`,language:`java`,children:`<span class="attr">@PostMapping</span>(<span class="str">"/register"</span>)
<span class="kw">public</span> ResponseEntity&lt;String&gt; <span class="fn">register</span>(<span class="attr">@Valid</span> <span class="attr">@RequestBody</span> RegisterRequestDto request) {
    <span class="cm">// If validation fails, Spring automatically throws a MethodArgumentNotValidException</span>
    <span class="cm">// before this line of code is ever reached!</span>
    authService.<span class="fn">registerNewUser</span>(request);
    <span class="kw">return</span> ResponseEntity.<span class="fn">ok</span>(<span class="str">"User registered successfully"</span>);
}`})]}),(0,k.jsxs)(j,{id:`custom-validators`,icon:`🔧`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`6.3 Custom Validators`,children:[(0,k.jsx)(`p`,{children:"Sometimes the built-in annotations aren't enough. For example, validating that an email domain is allowed, or ensuring that `password` and `confirmPassword` fields match. You can create your own annotations!"}),(0,k.jsx)(`p`,{children:`1. Define the annotation:`}),(0,k.jsx)(M,{filename:`ValidIp.java`,language:`java`,children:`<span class="attr">@Target</span>({ElementType.FIELD})
<span class="attr">@Retention</span>(RetentionPolicy.RUNTIME)
<span class="attr">@Constraint</span>(validatedBy = IpAddressValidator.<span class="kw">class</span>)
<span class="kw">public @interface</span> <span class="fn">ValidIp</span> {
    String <span class="fn">message</span>() <span class="kw">default</span> <span class="str">"Invalid IP Address"</span>;
    Class&lt;?&gt;[] <span class="fn">groups</span>() <span class="kw">default</span> {};
    Class&lt;? extends Payload&gt;[] <span class="fn">payload</span>() <span class="kw">default</span> {};
}`}),(0,k.jsx)(`p`,{children:`2. Create the validator logic:`}),(0,k.jsx)(M,{filename:`IpAddressValidator.java`,language:`java`,children:`<span class="kw">public class</span> <span class="fn">IpAddressValidator</span> <span class="kw">implements</span> ConstraintValidator&lt;ValidIp, String&gt; {
    <span class="attr">@Override</span>
    <span class="kw">public boolean</span> <span class="fn">isValid</span>(String value, ConstraintValidatorContext context) {
        <span class="kw">if</span> (value == <span class="kw">null</span>) <span class="kw">return false</span>;
        <span class="cm">// Implement regex or IP parsing logic here</span>
        <span class="kw">return</span> value.<span class="fn">matches</span>(<span class="str">"^([0-9]{1,3}\\.){3}[0-9]{1,3}$"</span>);
    }
}`})]}),(0,k.jsxs)(j,{id:`error-response-patterns`,icon:`📝`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`6.4 RFC 7807 (Problem Details for HTTP APIs)`,children:[(0,k.jsx)(`p`,{children:`Rather than reinventing the wheel with a custom error JSON structure, Spring Boot 3 supports RFC 7807 (Problem Details) out of the box. This provides a standardized way for HTTP APIs to return error information.`}),(0,k.jsx)(`p`,{children:"Instead of creating a custom `ErrorResponse` DTO, you can return a `ProblemDetail` object from your `@ExceptionHandler`."}),(0,k.jsx)(M,{filename:`ProblemDetail Example`,language:`java`,children:`<span class="attr">@ExceptionHandler</span>(InsufficientFundsException.<span class="kw">class</span>)
<span class="kw">public</span> ProblemDetail <span class="fn">handleFundsError</span>(InsufficientFundsException ex) {
    ProblemDetail problemDetail = ProblemDetail.<span class="fn">forStatusAndDetail</span>(HttpStatus.BAD_REQUEST, ex.<span class="fn">getMessage</span>());
    problemDetail.<span class="fn">setTitle</span>(<span class="str">"Insufficient Funds"</span>);
    problemDetail.<span class="fn">setProperty</span>(<span class="str">"currentBalance"</span>, ex.<span class="fn">getCurrentBalance</span>());
    problemDetail.<span class="fn">setProperty</span>(<span class="str">"requiredAmount"</span>, ex.<span class="fn">getRequiredAmount</span>());
    
    <span class="kw">return</span> problemDetail;
}`})]})]}),ei=()=>(0,k.jsxs)(A,{id:`sb-chapter-7`,number:7,title:`Testing Spring Boot Applications`,theme:`green`,children:[(0,k.jsx)(`p`,{children:"Testing is not an afterthought in Spring Boot; it's a first-class citizen. Spring Boot provides a dedicated `spring-boot-starter-test` dependency that pulls in everything you need: JUnit 5, Mockito, AssertJ, Hamcrest, and Spring's own testing utilities."}),(0,k.jsxs)(j,{id:`unit-testing`,icon:`🧪`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`7.1 Unit Testing with JUnit 5 & Mockito`,children:[(0,k.jsx)(`p`,{children:`A unit test isolates a specific class and tests it without loading the Spring container. Because you used Constructor Injection (as discussed in Chapter 2), this is incredibly easy. You just instantiate the class and pass in Mock objects for its dependencies.`}),(0,k.jsx)(M,{filename:`UserServiceTest.java`,language:`java`,children:`<span class="kw">import</span> org.junit.jupiter.api.Test;
<span class="kw">import</span> org.junit.jupiter.api.extension.ExtendWith;
<span class="kw">import</span> org.mockito.InjectMocks;
<span class="kw">import</span> org.mockito.Mock;
<span class="kw">import</span> org.mockito.junit.jupiter.MockitoExtension;
<span class="kw">import static</span> org.mockito.Mockito.*;
<span class="kw">import static</span> org.assertj.core.api.Assertions.*;

<span class="attr">@ExtendWith</span>(MockitoExtension.<span class="kw">class</span>)
<span class="kw">class</span> <span class="fn">UserServiceTest</span> {

    <span class="attr">@Mock</span> <span class="cm">// Creates a fake implementation of UserRepository</span>
    <span class="kw">private</span> UserRepository userRepository;

    <span class="attr">@InjectMocks</span> <span class="cm">// Injects the mock repository into the service</span>
    <span class="kw">private</span> UserService userService;

    <span class="attr">@Test</span>
    <span class="kw">void</span> <span class="fn">shouldReturnUserWhenIdExists</span>() {
        <span class="cm">// Arrange (Given)</span>
        User mockUser = <span class="kw">new</span> <span class="fn">User</span>(1L, <span class="str">"Alice"</span>);
        <span class="fn">when</span>(userRepository.<span class="fn">findById</span>(1L)).<span class="fn">thenReturn</span>(Optional.<span class="fn">of</span>(mockUser));

        <span class="cm">// Act (When)</span>
        User result = userService.<span class="fn">getUserById</span>(1L);

        <span class="cm">// Assert (Then)</span>
        <span class="fn">assertThat</span>(result.<span class="fn">getName</span>()).<span class="fn">isEqualTo</span>(<span class="str">"Alice"</span>);
        <span class="fn">verify</span>(userRepository, <span class="fn">times</span>(1)).<span class="fn">findById</span>(1L);
    }
}`})]}),(0,k.jsxs)(j,{id:`integration-testing`,icon:`🔬`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`7.2 Integration Testing (@SpringBootTest)`,children:[(0,k.jsxs)(`p`,{children:["Integration tests ensure that all the components in your application wire together correctly and interact with databases/external systems as expected. The `@SpringBootTest` annotation loads the ",(0,k.jsx)(`em`,{children:`entire`}),` Spring Application Context.`]}),(0,k.jsx)(`p`,{children:"You can use `MockMvc` to simulate HTTP requests without actually starting an embedded web server, making the tests much faster."}),(0,k.jsx)(M,{filename:`UserControllerIntegrationTest.java`,language:`java`,children:`<span class="attr">@SpringBootTest</span>
<span class="attr">@AutoConfigureMockMvc</span>
<span class="kw">class</span> <span class="fn">UserControllerIntegrationTest</span> {

    <span class="attr">@Autowired</span>
    <span class="kw">private</span> MockMvc mockMvc;

    <span class="attr">@Autowired</span>
    <span class="kw">private</span> UserRepository userRepository;

    <span class="attr">@Test</span>
    <span class="kw">void</span> <span class="fn">shouldCreateNewUser</span>() <span class="kw">throws</span> Exception {
        String jsonPayload = <span class="str">"{ "username": "bob123", "email": "bob@example.com" }"</span>;

        mockMvc.<span class="fn">perform</span>(post(<span class="str">"/api/users"</span>)
                .<span class="fn">contentType</span>(MediaType.APPLICATION_JSON)
                .<span class="fn">content</span>(jsonPayload))
               .<span class="fn">andExpect</span>(status().<span class="fn">isCreated</span>())
               .<span class="fn">andExpect</span>(jsonPath(<span class="str">"$.username"</span>).<span class="fn">value</span>(<span class="str">"bob123"</span>));
               
        <span class="cm">// Verify the user was actually saved in the DB</span>
        <span class="fn">assertThat</span>(userRepository.<span class="fn">findByUsername</span>(<span class="str">"bob123"</span>)).<span class="fn">isPresent</span>();
    }
}`})]}),(0,k.jsxs)(j,{id:`slice-testing`,icon:`🍰`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`7.3 Slice Testing`,children:[(0,k.jsx)(`p`,{children:'Loading the full Application Context with `@SpringBootTest` is slow. If you only want to test the Web Layer (Controllers) or the Data Layer (Repositories), Spring Boot provides "slice" annotations. They only load the beans relevant to that specific slice.'}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`code`,{children:`@WebMvcTest(UserController.class)`}),": Loads only the specified controller, Jackson converters, and validation configurations. You must `@MockBean` any service dependencies."]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`code`,{children:`@DataJpaTest`}),`: Configures an in-memory database (like H2), configures Hibernate, and loads your Repository interfaces. It's automatically transactional and rolls back at the end of each test.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`code`,{children:`@JsonTest`}),`: Tests JSON serialization/deserialization.`]})]})]}),(0,k.jsxs)(j,{id:`testcontainers`,icon:`🐳`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`7.4 TestContainers`,children:[(0,k.jsx)(`p`,{children:"Using an in-memory H2 database for `@DataJpaTest` is fast, but H2 has different SQL syntax than your production PostgreSQL or MySQL database. This can lead to tests passing locally but failing in production."}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Testcontainers`}),` solves this by spinning up real, ephemeral Docker containers (e.g., a real Postgres database, a real Kafka broker) during test execution, wiring them to Spring, and tearing them down afterward.`]}),(0,k.jsx)(M,{filename:`PostgresTest.java`,language:`java`,children:`<span class="attr">@SpringBootTest</span>
<span class="attr">@Testcontainers</span>
<span class="kw">class</span> <span class="fn">ProductRepositoryTest</span> {

    <span class="cm">// Spins up a real Postgres 15 docker container before tests run!</span>
    <span class="attr">@Container</span>
    <span class="kw">static</span> PostgreSQLContainer&lt;?&gt; postgres = <span class="kw">new</span> <span class="fn">PostgreSQLContainer</span>&lt;&gt;(<span class="str">"postgres:15-alpine"</span>);

    <span class="attr">@DynamicPropertySource</span>
    <span class="kw">static void</span> <span class="fn">configureProperties</span>(DynamicPropertyRegistry registry) {
        <span class="cm">// Tells Spring to use the container's randomized URL and credentials</span>
        registry.<span class="fn">add</span>(<span class="str">"spring.datasource.url"</span>, postgres::getJdbcUrl);
        registry.<span class="fn">add</span>(<span class="str">"spring.datasource.username"</span>, postgres::getUsername);
        registry.<span class="fn">add</span>(<span class="str">"spring.datasource.password"</span>, postgres::getPassword);
    }
    
    <span class="cm">// ... your tests here run against the REAL dockerized database</span>
}`})]})]}),ti=()=>(0,k.jsxs)(A,{id:`sb-chapter-8`,number:8,title:`Microservices Architecture`,theme:`green`,children:[(0,k.jsx)(`p`,{children:`While Spring Boot makes it easy to build monoliths, it shines brightest when building microservices. Spring Cloud builds upon Spring Boot to provide patterns for distributed systems, such as configuration management, service discovery, circuit breakers, and API gateways.`}),(0,k.jsxs)(j,{id:`microservices-patterns`,icon:`🏗️`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`8.1 Microservices Design Patterns`,children:[(0,k.jsxs)(`p`,{children:[`Before splitting an application, you must understand boundaries. Microservices are typically divided by `,(0,k.jsx)(`strong`,{children:`Bounded Contexts`}),` (a concept from Domain-Driven Design). For an e-commerce app, you wouldn't split by technical layer (e.g., a service for all controllers, a service for all DB access). Instead, you split by business domain: an Inventory Service, an Order Service, and a Payment Service.`]}),(0,k.jsx)(`p`,{children:`Each microservice must own its own database to ensure loose coupling. If Order Service needs data from Inventory Service, it must call the Inventory API, not query the Inventory database directly.`})]}),(0,k.jsxs)(j,{id:`service-discovery`,icon:`🔍`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`8.2 Service Discovery (Eureka)`,children:[(0,k.jsx)(`p`,{children:`In a cloud environment, microservices dynamically scale up and down. Their IP addresses change constantly. Hardcoding IPs is impossible.`}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Netflix Eureka`}),` acts as a phonebook. When a service boots up, it registers its IP with Eureka. When Service A needs to call Service B, it asks Eureka for Service B's location.`]}),(0,k.jsx)(M,{filename:`EurekaServerApplication.java`,language:`java`,children:`<span class="attr">@SpringBootApplication</span>
<span class="attr">@EnableEurekaServer</span> <span class="cm">// Turns this app into a Eureka Registry</span>
<span class="kw">public class</span> <span class="fn">EurekaServerApplication</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) {
        SpringApplication.<span class="fn">run</span>(EurekaServerApplication.<span class="kw">class</span>, args);
    }
}`}),(0,k.jsx)(`p`,{children:"Then, in your worker microservices, you add `@EnableDiscoveryClient` and configure Eureka's URL in `application.yml`."})]}),(0,k.jsxs)(j,{id:`api-gateway`,icon:`🚪`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`8.3 API Gateway (Spring Cloud Gateway)`,children:[(0,k.jsx)(`p`,{children:`Clients shouldn't have to know the IP addresses of 50 different microservices, nor should they handle authentication 50 times. An API Gateway is the single entry point for all client requests.`}),(0,k.jsx)(`p`,{children:`Spring Cloud Gateway routes incoming requests to the correct backend service (often asking Eureka where that service is). It's also the perfect place to enforce rate limiting, CORS, and JWT authentication validation.`}),(0,k.jsx)(M,{filename:`application.yml (Gateway)`,language:`yaml`,children:`spring:
  cloud:
    gateway:
      routes:
        - id: order-service
          uri: lb://ORDER-SERVICE <span class="cm"># Load-balances via Eureka</span>
          predicates:
            - Path=/api/orders/**
          filters:
            - AddRequestHeader=X-Tenant, App1
        
        - id: inventory-service
          uri: lb://INVENTORY-SERVICE
          predicates:
            - Path=/api/inventory/**`})]}),(0,k.jsxs)(j,{id:`circuit-breaker`,icon:`🔌`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`8.4 Resilience with Circuit Breaker (Resilience4j)`,children:[(0,k.jsx)(`p`,{children:`In distributed systems, failures are guaranteed. If the Payment Service goes down, the Order Service (which calls it) will hang, tying up threads until it crashes too. This cascading failure can bring down your whole system.`}),(0,k.jsx)(`p`,{children:`A Circuit Breaker (like Resilience4j) wraps network calls. If the call fails repeatedly, the circuit "trips" (opens). Future calls fail fast without waiting for timeouts, allowing the failing service time to recover. You can provide a fallback response while the circuit is open.`}),(0,k.jsx)(M,{filename:`OrderService.java`,language:`java`,children:`<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">OrderService</span> {

    <span class="attr">@CircuitBreaker</span>(name = <span class="str">"inventoryService"</span>, fallbackMethod = <span class="str">"fallbackInventory"</span>)
    <span class="kw">public boolean</span> <span class="fn">checkInventory</span>(String productId) {
        <span class="cm">// Makes an HTTP call to the Inventory Service</span>
        <span class="kw">return</span> restTemplate.<span class="fn">getForObject</span>(<span class="str">"http://INVENTORY-SERVICE/api/inventory/"</span> + productId, Boolean.<span class="kw">class</span>);
    }

    <span class="cm">// Executed automatically if the circuit is open or an exception occurs</span>
    <span class="kw">public boolean</span> <span class="fn">fallbackInventory</span>(String productId, Throwable t) {
        <span class="cm">// Log the error and return a safe default</span>
        log.<span class="fn">error</span>(<span class="str">"Inventory service down, assuming out of stock for "</span> + productId, t);
        <span class="kw">return false</span>; 
    }
}`})]})]}),ni=()=>(0,k.jsxs)(A,{id:`sb-chapter-9`,number:9,title:`Messaging & Event-Driven Architecture`,theme:`green`,children:[(0,k.jsx)(`p`,{children:`In modern distributed systems, synchronous HTTP communication (like REST) isn't always the best approach. If Service A must wait for Service B to finish before returning a response, your system becomes slow and brittle. Event-Driven Architecture (EDA) uses asynchronous messaging to decouple services, improve performance, and increase resilience.`}),(0,k.jsxs)(j,{id:`spring-events`,icon:`📡`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`9.1 Spring Application Events`,children:[(0,k.jsxs)(`p`,{children:[`Before jumping into heavy message brokers, Spring provides a built-in event bus for decoupling components `,(0,k.jsx)(`em`,{children:`within the same application`}),` (the same JVM).`]}),(0,k.jsx)(`p`,{children:`You publish an event from one service, and one or more listeners react to it. By default, these events are synchronous, but they can easily be made asynchronous.`}),(0,k.jsx)(M,{filename:`UserRegistrationEvent.java`,language:`java`,children:`<span class="cm">// 1. Define the Event (can be a standard Record in modern Java)</span>
<span class="kw">public record</span> <span class="fn">UserRegistrationEvent</span>(Long userId, String email) { }

<span class="cm">// 2. Publish the Event</span>
<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">UserService</span> {
    <span class="kw">private final</span> ApplicationEventPublisher publisher;
    
    <span class="cm">// constructor omitted</span>
    
    <span class="kw">public void</span> <span class="fn">register</span>(User user) {
        userRepository.<span class="fn">save</span>(user);
        <span class="cm">// Instead of calling EmailService directly, we publish an event.</span>
        <span class="cm">// UserService no longer needs to know EmailService exists!</span>
        publisher.<span class="fn">publishEvent</span>(<span class="kw">new</span> <span class="fn">UserRegistrationEvent</span>(user.<span class="fn">getId</span>(), user.<span class="fn">getEmail</span>()));
    }
}

<span class="cm">// 3. Listen for the Event</span>
<span class="attr">@Component</span>
<span class="kw">public class</span> <span class="fn">EmailNotificationListener</span> {

    <span class="attr">@EventListener</span>
    <span class="cm">// @Async // Uncomment this to handle the event in a separate thread!</span>
    <span class="kw">public void</span> <span class="fn">handleUserRegistration</span>(UserRegistrationEvent event) {
        System.out.<span class="fn">println</span>(<span class="str">"Sending welcome email to: "</span> + event.<span class="fn">email</span>());
    }
}`})]}),(0,k.jsxs)(j,{id:`kafka-integration`,icon:`📬`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`9.2 Apache Kafka Integration`,children:[(0,k.jsxs)(`p`,{children:[`When you need to send events `,(0,k.jsx)(`em`,{children:`between`}),` different microservices, you need a message broker. Apache Kafka is the industry standard for high-throughput, distributed event streaming. Spring Kafka makes producing and consuming messages trivial.`]}),(0,k.jsx)(`h4`,{children:`Producing Messages`}),(0,k.jsx)(M,{filename:`OrderProducer.java`,language:`java`,children:`<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">OrderProducer</span> {
    <span class="kw">private final</span> KafkaTemplate&lt;String, OrderEvent&gt; kafkaTemplate;

    <span class="cm">// constructor omitted</span>

    <span class="kw">public void</span> <span class="fn">sendOrderCreatedEvent</span>(OrderEvent event) {
        <span class="cm">// Sends a message to the "orders-topic"</span>
        kafkaTemplate.<span class="fn">send</span>(<span class="str">"orders-topic"</span>, event.<span class="fn">getOrderId</span>(), event);
    }
}`}),(0,k.jsx)(`h4`,{children:`Consuming Messages`}),(0,k.jsx)(M,{filename:`InventoryConsumer.java`,language:`java`,children:`<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">InventoryConsumer</span> {

    <span class="cm">// Listens to the topic and assigns this consumer to a specific group</span>
    <span class="attr">@KafkaListener</span>(topics = <span class="str">"orders-topic"</span>, groupId = <span class="str">"inventory-group"</span>)
    <span class="kw">public void</span> <span class="fn">consumeOrderEvent</span>(OrderEvent event) {
        log.<span class="fn">info</span>(<span class="str">"Received order event for ID: {}"</span>, event.<span class="fn">getOrderId</span>());
        <span class="cm">// Deduct inventory based on the order...</span>
    }
}`})]}),(0,k.jsxs)(j,{id:`rabbitmq-integration`,icon:`🐰`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`9.3 RabbitMQ Integration`,children:[(0,k.jsx)(`p`,{children:`While Kafka is a streaming platform (logs are persisted), RabbitMQ is a traditional message broker (messages are deleted after consumption). RabbitMQ is excellent for complex routing topologies using Exchanges, Routing Keys, and Queues.`}),(0,k.jsx)(`p`,{children:"Spring AMQP operates similarly to Spring Kafka. You use a `RabbitTemplate` to send messages to an Exchange, and `@RabbitListener` to consume messages from a Queue."})]}),(0,k.jsxs)(j,{id:`async-processing`,icon:`⏰`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`9.4 Async Processing & Scheduling`,children:[(0,k.jsx)(`p`,{children:"Sometimes you don't need a message broker, you just need a background thread to do heavy lifting so the HTTP request can return immediately. Spring's `@Async` annotation handles this."}),(0,k.jsx)(M,{filename:`ReportService.java`,language:`java`,children:`<span class="attr">@Service</span>
<span class="attr">@EnableAsync</span> <span class="cm">// Must be enabled on a config class or main class</span>
<span class="kw">public class</span> <span class="fn">ReportService</span> {

    <span class="attr">@Async</span> <span class="cm">// Runs this method in a separate thread pool</span>
    <span class="kw">public</span> CompletableFuture&lt;String&gt; <span class="fn">generateMonthlyReport</span>() {
        <span class="cm">// Simulating a long-running PDF generation task</span>
        Thread.<span class="fn">sleep</span>(5000); 
        <span class="kw">return</span> CompletableFuture.<span class="fn">completedFuture</span>(<span class="str">"report-123.pdf"</span>);
    }
}`}),(0,k.jsx)(`h4`,{children:`Scheduled Tasks (Cron Jobs)`}),(0,k.jsx)(`p`,{children:`Spring can also run methods on a recurring schedule without requiring external tools like Kubernetes CronJobs or Linux crontab.`}),(0,k.jsx)(M,{filename:`BatchJob.java`,language:`java`,children:`<span class="attr">@Component</span>
<span class="attr">@EnableScheduling</span>
<span class="kw">public class</span> <span class="fn">DataCleanupJob</span> {

    <span class="cm">// Runs every day at 3:00 AM server time</span>
    <span class="attr">@Scheduled</span>(cron = <span class="str">"0 0 3 * * ?"</span>)
    <span class="kw">public void</span> <span class="fn">cleanupOldData</span>() {
        log.<span class="fn">info</span>(<span class="str">"Starting daily data cleanup..."</span>);
        <span class="cm">// delete soft-deleted records older than 30 days</span>
    }
}`})]})]}),ri=()=>(0,k.jsxs)(A,{id:`sb-chapter-10`,number:10,title:`Caching, Performance & Monitoring`,theme:`green`,children:[(0,k.jsx)(`p`,{children:`As your application scales, fetching data from the database for every single request becomes a severe bottleneck. Furthermore, without proper visibility into how your app is performing, you are flying blind in production.`}),(0,k.jsxs)(j,{id:`spring-cache`,icon:`⚡`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`10.1 Spring Cache Abstraction`,children:[(0,k.jsx)(`p`,{children:`Spring provides a transparent cache abstraction. It wraps your methods with caching logic. The first time a method is called with a specific parameter, the logic executes and the result is saved in the cache. The next time it's called with the same parameter, the cached result is returned instantly, bypassing the method execution entirely.`}),(0,k.jsx)(M,{filename:`ProductService.java`,language:`java`,children:`<span class="attr">@Service</span>
<span class="attr">@EnableCaching</span> <span class="cm">// Must be present on a config class</span>
<span class="kw">public class</span> <span class="fn">ProductService</span> {

    <span class="cm">// Checks the 'products' cache. If key 'id' exists, return it.</span>
    <span class="cm">// If not, run method, cache result, and return it.</span>
    <span class="attr">@Cacheable</span>(value = <span class="str">"products"</span>, key = <span class="str">"#id"</span>)
    <span class="kw">public</span> Product <span class="fn">getProductById</span>(Long id) {
        <span class="cm">// Expensive database call happens here</span>
        <span class="kw">return</span> repository.<span class="fn">findById</span>(id).<span class="fn">orElseThrow</span>();
    }

    <span class="cm">// Updates the record in the DB AND updates the cache entry</span>
    <span class="attr">@CachePut</span>(value = <span class="str">"products"</span>, key = <span class="str">"#product.id"</span>)
    <span class="kw">public</span> Product <span class="fn">updateProduct</span>(Product product) {
        <span class="kw">return</span> repository.<span class="fn">save</span>(product);
    }

    <span class="cm">// Removes the entry from the cache so stale data isn't served</span>
    <span class="attr">@CacheEvict</span>(value = <span class="str">"products"</span>, key = <span class="str">"#id"</span>)
    <span class="kw">public void</span> <span class="fn">deleteProduct</span>(Long id) {
        repository.<span class="fn">deleteById</span>(id);
    }
}`})]}),(0,k.jsxs)(j,{id:`redis-caching`,icon:`🔴`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`10.2 Redis as a Cache Store`,children:[(0,k.jsxs)(`p`,{children:["By default, Spring Boot uses a simple `ConcurrentHashMap` in memory for caching. This is fine for development, but in production with multiple microservice instances, you need a centralized, distributed cache so all instances share the same data. ",(0,k.jsx)(`strong`,{children:`Redis`}),` is the industry standard for this.`]}),(0,k.jsx)(`p`,{children:"Simply by adding the `spring-boot-starter-data-redis` dependency and providing the Redis connection URL in your `application.yml`, Spring Boot auto-configures Redis as the underlying provider for all your `@Cacheable` annotations. Zero code changes required!"})]}),(0,k.jsxs)(j,{id:`performance-tuning`,icon:`📈`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`10.3 Performance Tuning (JPA N+1)`,children:[(0,k.jsx)(`p`,{children:"The most common performance killer in Spring Boot applications is the JPA N+1 query problem. This occurs when you fetch a list of entities (1 query), and then iterate through them to fetch a lazily loaded relationship (N queries). If you fetch 100 Posts, and then access `post.getAuthor()`, Hibernate executes 101 queries!"}),(0,k.jsx)(`p`,{children:"You can fix this by telling Hibernate to execute a `JOIN FETCH` using `@EntityGraph` or custom JPQL."}),(0,k.jsx)(M,{filename:`PostRepository.java`,language:`java`,children:`<span class="kw">public interface</span> <span class="fn">PostRepository</span> <span class="kw">extends</span> JpaRepository&lt;Post, Long&gt; {

    <span class="cm">// BAD: Results in N+1 problem if you access the author property later</span>
    <span class="cm">// List&lt;Post&gt; findAll();</span>

    <span class="cm">// GOOD: Uses an EntityGraph to perform a LEFT OUTER JOIN in a single query</span>
    <span class="attr">@EntityGraph</span>(attributePaths = {<span class="str">"author"</span>})
    List&lt;Post&gt; <span class="fn">findAll</span>();

    <span class="cm">// ALTERNATIVE GOOD: Custom JPQL with JOIN FETCH</span>
    <span class="attr">@Query</span>(<span class="str">"SELECT p FROM Post p JOIN FETCH p.author"</span>)
    List&lt;Post&gt; <span class="fn">findAllWithAuthors</span>();
}`})]}),(0,k.jsxs)(j,{id:`actuator-monitoring`,icon:`📊`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`10.4 Spring Boot Actuator & Monitoring`,children:[(0,k.jsx)(`p`,{children:`Spring Boot Actuator brings production-ready features to your application. It provides built-in HTTP endpoints to monitor and manage your app.`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`code`,{children:`/actuator/health`}),`: Used by Kubernetes readiness/liveness probes to see if the app is healthy and connected to its database.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`code`,{children:`/actuator/info`}),`: Displays application version and git commit information.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`code`,{children:`/actuator/metrics`}),`: Provides memory usage, garbage collection stats, and HTTP request timings.`]})]}),(0,k.jsxs)(`p`,{children:[`Actuator integrates seamlessly with `,(0,k.jsx)(`strong`,{children:`Micrometer`})," (the SLF4J of metrics). By adding `micrometer-registry-prometheus`, Actuator automatically exposes a `/actuator/prometheus` endpoint. A Prometheus server can scrape this endpoint, and you can visualize the data in beautiful Grafana dashboards."]})]})]}),ii=()=>(0,k.jsxs)(A,{id:`sb-chapter-11`,number:11,title:`Deployment & CI/CD Integration`,theme:`green`,children:[(0,k.jsx)(`p`,{children:`Building the application is only half the battle. Getting it reliably and securely deployed to a production environment is the other half. Modern Spring Boot deployment revolves heavily around containerization and orchestration.`}),(0,k.jsxs)(j,{id:`docker-containerization`,icon:`🐋`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`11.1 Docker Containerization`,children:[(0,k.jsx)(`p`,{children:'Spring Boot applications compile into "fat JARs" containing all dependencies and an embedded web server. While you can run this directly with `java -jar`, wrapping it in a Docker container ensures the application runs exactly the same way on a developer\'s laptop as it does in AWS.'}),(0,k.jsx)(`h4`,{children:`Multi-Stage Dockerfile`}),(0,k.jsxs)(`p`,{children:[`A multi-stage build compiles the code inside the container using a heavy JDK image, but then copies `,(0,k.jsx)(`em`,{children:`only`}),` the compiled JAR into a lightweight JRE image for production. This keeps your final image size incredibly small and secure.`]}),(0,k.jsx)(M,{filename:`Dockerfile`,language:`dockerfile`,children:`<span class="cm"># Stage 1: Build the application</span>
<span class="kw">FROM</span> eclipse-temurin:21-jdk-alpine <span class="kw">AS</span> build
<span class="kw">WORKDIR</span> /workspace/app

<span class="cm"># Copy gradle wrapper and source code</span>
<span class="kw">COPY</span> gradlew .
<span class="kw">COPY</span> gradle gradle
<span class="kw">COPY</span> build.gradle settings.gradle ./
<span class="kw">COPY</span> src src

<span class="cm"># Build the fat JAR (skipping tests for speed in this example)</span>
<span class="kw">RUN</span> ./gradlew build -x test

<span class="cm"># Stage 2: Create the production image</span>
<span class="kw">FROM</span> eclipse-temurin:21-jre-alpine
<span class="kw">VOLUME</span> /tmp
<span class="kw">ARG</span> JAR_FILE=/workspace/app/build/libs/*.jar
<span class="kw">COPY</span> --from=build \${JAR_FILE} app.jar

<span class="cm"># Run the application as a non-root user for security</span>
<span class="kw">RUN</span> addgroup -S spring && adduser -S spring -G spring
<span class="kw">USER</span> spring:spring

<span class="kw">ENTRYPOINT</span> [<span class="str">"java"</span>,<span class="str">"-jar"</span>,<span class="str">"/app.jar"</span>]`}),(0,k.jsx)(N,{type:`tip`,title:`Cloud Native Buildpacks / Jib`,children:"Writing Dockerfiles by hand is no longer strictly necessary! You can use `mvn spring-boot:build-image` to automatically generate highly optimized Docker images using Cloud Native Buildpacks, or use Google's `Jib` maven/gradle plugin."})]}),(0,k.jsxs)(j,{id:`kubernetes-deployment`,icon:`☸️`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`11.2 Kubernetes Deployment`,children:[(0,k.jsx)(`p`,{children:`Once containerized, Kubernetes (K8s) is the industry standard for running those containers at scale. A standard Spring Boot deployment requires a Deployment, a Service, and often ConfigMaps/Secrets.`}),(0,k.jsx)(`p`,{children:`Kubernetes needs to know if your Spring Boot app is actually ready to receive traffic. This is where the Actuator health endpoints we discussed in Chapter 10 become critical.`}),(0,k.jsx)(M,{filename:`deployment.yaml`,language:`yaml`,children:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
        - name: user-service
          image: myregistry.com/user-service:1.0.4
          ports:
            - containerPort: 8080
          
          <span class="cm"># Liveness Probe: Restarts the pod if it hangs or deadlocks</span>
          livenessProbe:
            httpGet:
              path: /actuator/health/liveness
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
            
          <span class="cm"># Readiness Probe: Stops sending traffic if the DB connection fails</span>
          readinessProbe:
            httpGet:
              path: /actuator/health/readiness
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 5`})]}),(0,k.jsxs)(j,{id:`cicd-pipelines`,icon:`🔄`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`11.3 CI/CD Pipelines (GitHub Actions)`,children:[(0,k.jsx)(`p`,{children:`Continuous Integration and Continuous Deployment (CI/CD) automates the process of testing and building your application every time a developer pushes code.`}),(0,k.jsx)(M,{filename:`.github/workflows/build.yml`,language:`yaml`,children:`name: Java CI with Maven

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up JDK 21
      uses: actions/setup-java@v3
      with:
        java-version: '21'
        distribution: 'temurin'
        cache: maven
        
    - name: Build and Test with Maven
      run: mvn -B package --file pom.xml
      
    - name: Build and Push Docker image
      uses: docker/build-push-action@v4
      with:
        push: true
        tags: myregistry.com/my-app:\${{ github.sha }}`})]}),(0,k.jsxs)(j,{id:`profiles-environments`,icon:`🌐`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`11.4 Environment Configuration & Secrets`,children:[(0,k.jsx)(`p`,{children:"Never hardcode database passwords or API keys in your `application.yml`, and absolutely never commit them to GitHub. The Twelve-Factor App methodology states that configuration should be stored in the environment."}),(0,k.jsx)(`p`,{children:"Spring Boot automatically maps environment variables to your properties. If you have a property `spring.datasource.password`, you can override it in your Kubernetes pod by setting an environment variable named `SPRING_DATASOURCE_PASSWORD`."}),(0,k.jsxs)(`p`,{children:[`For advanced, centralized configuration across hundreds of microservices, enterprise teams use `,(0,k.jsx)(`strong`,{children:`Spring Cloud Config Server`}),` combined with HashiCorp Vault to securely store and distribute secrets.`]})]})]}),ai=()=>(0,k.jsxs)(A,{id:`sb-chapter-12`,number:12,title:`Advanced Topics & Interview Prep`,theme:`green`,children:[(0,k.jsx)(`p`,{children:`To truly distinguish yourself as a Senior Spring Boot Developer, you must understand the framework's internal mechanics and design patterns. This chapter covers the deep-dive topics frequently asked in technical interviews.`}),(0,k.jsxs)(j,{id:`design-patterns`,icon:`🎨`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`12.1 Design Patterns in Spring`,children:[(0,k.jsx)(`p`,{children:`The Spring Framework is a masterclass in applying software design patterns. Understanding them helps you understand how Spring works internally.`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Singleton Pattern:`}),` Used heavily. Spring Beans are singletons by default within the IoC container.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Factory Pattern:`})," The `BeanFactory` and `ApplicationContext` are classic implementations of the Factory pattern, responsible for creating and delivering objects."]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Proxy Pattern:`})," Used extensively in Spring AOP and `@Transactional`. When you inject a transactional bean, Spring doesn't give you the actual object; it gives you a dynamically generated Proxy object that wraps the actual object with begin/commit/rollback logic."]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Template Method Pattern:`})," Seen in `JdbcTemplate`, `RestTemplate`, and `KafkaTemplate`. They provide a skeleton algorithm, leaving specific steps to be implemented by the developer."]})]})]}),(0,k.jsxs)(j,{id:`transaction-deep-dive`,icon:`🔀`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`12.2 Transaction Propagation Deep Dive`,children:[(0,k.jsxs)(`p`,{children:["What happens when one `@Transactional` method calls another `@Transactional` method? Does it create a new transaction, or join the existing one? This is determined by the ",(0,k.jsx)(`strong`,{children:`Propagation Behavior`}),`.`]}),(0,k.jsx)(M,{filename:`Propagation Types`,language:`java`,children:`<span class="cm">// REQUIRED (Default): If a transaction exists, join it. If not, create a new one.</span>
<span class="attr">@Transactional</span>(propagation = Propagation.REQUIRED)

<span class="cm">// REQUIRES_NEW: Suspend the current transaction (if any) and ALWAYS start a new one.</span>
<span class="cm">// Useful for Audit Logging (logs must be saved even if the main transaction rolls back).</span>
<span class="attr">@Transactional</span>(propagation = Propagation.REQUIRES_NEW)

<span class="cm">// MANDATORY: Must be called from within an existing transaction, otherwise throws exception.</span>
<span class="attr">@Transactional</span>(propagation = Propagation.MANDATORY)

<span class="cm">// NESTED: Executes within a nested transaction using savepoints.</span>
<span class="attr">@Transactional</span>(propagation = Propagation.NESTED)`})]}),(0,k.jsxs)(j,{id:`aop-aspects`,icon:`🎯`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`12.3 Aspect-Oriented Programming (AOP)`,children:[(0,k.jsxs)(`p`,{children:[`AOP is a programming paradigm that aims to increase modularity by allowing the separation of `,(0,k.jsx)(`strong`,{children:`Cross-Cutting Concerns`}),`. Logging, security, and transaction management are things that "cut across" your entire application. Instead of copy-pasting logging code into every single service method, you use AOP.`]}),(0,k.jsx)(M,{filename:`LoggingAspect.java`,language:`java`,children:`<span class="attr">@Aspect</span>
<span class="attr">@Component</span>
<span class="kw">public class</span> <span class="fn">LoggingAspect</span> {

    <span class="cm">// Pointcut: Defines WHERE the aspect should be applied</span>
    <span class="cm">// This targets every method inside the 'service' package</span>
    <span class="attr">@Pointcut</span>(<span class="str">"execution(* com.example.demo.service.*.*(..))"</span>)
    <span class="kw">public void</span> <span class="fn">serviceMethods</span>() {}

    <span class="cm">// Advice: Defines WHAT code to run, and WHEN (Before, After, Around)</span>
    <span class="attr">@Around</span>(<span class="str">"serviceMethods()"</span>)
    <span class="kw">public</span> Object <span class="fn">logExecutionTime</span>(ProceedingJoinPoint joinPoint) <span class="kw">throws</span> Throwable {
        <span class="kw">long</span> start = System.<span class="fn">currentTimeMillis</span>();
        
        <span class="cm">// Continue executing the actual target method</span>
        Object proceed = joinPoint.<span class="fn">proceed</span>();
        
        <span class="kw">long</span> executionTime = System.<span class="fn">currentTimeMillis</span>() - start;
        System.out.<span class="fn">println</span>(joinPoint.<span class="fn">getSignature</span>() + <span class="str">" executed in "</span> + executionTime + <span class="str">"ms"</span>);
        
        <span class="kw">return</span> proceed;
    }
}`})]}),(0,k.jsx)(j,{id:`interview-questions`,icon:`💼`,iconBg:`#e6f4ea`,iconColor:`#137333`,title:`12.4 Top Spring Boot Interview Questions`,children:(0,k.jsxs)(`div`,{className:`interview-qa`,children:[(0,k.jsx)(`h4`,{children:`1. What is the difference between @Component, @Service, @Repository, and @Controller?`}),(0,k.jsx)(`p`,{children:"`@Component` is a generic stereotype for any Spring-managed component. `@Service`, `@Repository`, and `@Controller` are specializations of `@Component`. `@Repository` automatically translates database-specific SQLExceptions into Spring's unified DataAccessException hierarchy. `@Controller` is picked up by the DispatcherServlet for web routing. `@Service` currently has no additional behavior over `@Component` but clarifies intent."}),(0,k.jsx)(`h4`,{children:`2. Explain how Spring Boot Auto-Configuration works internally.`}),(0,k.jsx)(`p`,{children:'The `@EnableAutoConfiguration` annotation tells Spring Boot to look for `META-INF/spring.factories` (or `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` in newer versions) in all classpath JARs. These files list auto-configuration classes. Spring evaluates these classes based on `@Conditional` annotations (e.g., "if Tomcat is on the classpath, load the Tomcat config").'}),(0,k.jsx)(`h4`,{children:`3. What is the difference between ApplicationContext and BeanFactory?`}),(0,k.jsx)(`p`,{children:"`BeanFactory` uses lazy initialization (beans are created only when requested). `ApplicationContext` uses eager initialization (singleton beans are created at startup). ApplicationContext also supports internationalization, event publishing, and annotation-based dependency injection."}),(0,k.jsx)(`h4`,{children:`4. How do you resolve the "Circular Dependency" problem?`}),(0,k.jsx)(`p`,{children:"A circular dependency occurs when Bean A depends on Bean B, and Bean B depends on Bean A. The best solution is to redesign your classes to remove the cycle (often by extracting the shared logic into a third Bean C). If unavoidable, you can use `@Lazy` on one of the injected parameters to delay initialization."})]})})]}),oi={icon:`spring`,title:`Spring Boot Developer`,subtitle:`Comprehensive Guide`,accent:`#6db33f`},si={badge:`Professional Reference Guide`,title:`Java Spring Boot Backend Developer`,subtitle:`A comprehensive guide to building production-grade REST APIs, mastering Spring Security, JPA, microservices, testing, and deploying with Docker & Kubernetes.`,accent:`green`,firstChapterId:`sb-chapter-1`};function ci(){return(0,k.jsxs)(mr,{chapters:tr,brandConfig:oi,children:[(0,k.jsx)(yr,{chapters:tr,config:si}),(0,k.jsx)(br,{chapters:tr}),(0,k.jsx)(Jr,{}),(0,k.jsx)(Yr,{}),(0,k.jsx)(Xr,{}),(0,k.jsx)(Zr,{}),(0,k.jsx)(Qr,{}),(0,k.jsx)($r,{}),(0,k.jsx)(ei,{}),(0,k.jsx)(ti,{}),(0,k.jsx)(ni,{}),(0,k.jsx)(ri,{}),(0,k.jsx)(ii,{}),(0,k.jsx)(ai,{}),(0,k.jsx)(xr,{chapters:tr,trackName:`Java Spring Boot Backend Developer`})]})}function li(){return(0,k.jsxs)(A,{id:`culture-fundamentals`,number:1,title:`Culture & Fundamentals`,theme:`amber`,children:[(0,k.jsx)(`p`,{children:`DevOps is not just a toolchain—it is a cultural philosophy that bridges the gap between software development (Dev) and IT operations (Ops). The goal is to shorten the systems development life cycle and provide continuous delivery with high software quality.`}),(0,k.jsxs)(j,{id:`what-is-devops`,icon:`💡`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`1.1 What is DevOps?`,children:[(0,k.jsx)(`p`,{children:`Before DevOps, developers wrote code and "tossed it over the wall" to operations engineers to deploy. This led to a fundamental conflict: Developers wanted to release features fast, while Operations wanted stability and refused to deploy untested code.`}),(0,k.jsx)(`p`,{children:`DevOps solves this by creating cross-functional teams that share responsibility for the entire application lifecycle, from planning and coding to deployment and monitoring.`}),(0,k.jsxs)(N,{type:`info`,title:`CALMS Framework`,children:[`The DevOps philosophy is often summarized by the CALMS acronym: `,(0,k.jsx)(`strong`,{children:`C`}),`ulture, `,(0,k.jsx)(`strong`,{children:`A`}),`utomation, `,(0,k.jsx)(`strong`,{children:`L`}),`ean, `,(0,k.jsx)(`strong`,{children:`M`}),`easurement, and `,(0,k.jsx)(`strong`,{children:`S`}),`haring.`]})]}),(0,k.jsxs)(j,{id:`agile-lean`,icon:`🔄`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`1.2 Agile & Lean Principles`,children:[(0,k.jsx)(`p`,{children:`DevOps is the natural extension of Agile. While Agile focuses on optimizing the software development process (Scrum, Sprints), DevOps takes those same principles and applies them to infrastructure and deployment.`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Small Batches:`}),` Releasing code in small, frequent chunks rather than massive updates twice a year. This makes finding and fixing bugs vastly easier.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Shift-Left:`}),` Moving testing and security checks earlier ("left") in the development process so issues are caught before they reach production.`]})]})]}),(0,k.jsxs)(j,{id:`devops-lifecycle`,icon:`♾️`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`1.3 The DevOps Lifecycle`,children:[(0,k.jsx)(`p`,{children:`The DevOps lifecycle is often visualized as an infinite loop, emphasizing continuous improvement.`}),(0,k.jsxs)(`ol`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Plan:`}),` Define business value and requirements (Jira, Trello).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Code:`}),` Software design and development (Git).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Build:`}),` Compile code and package dependencies (Maven, npm).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Test:`}),` Automated unit and integration testing (JUnit, Jest).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Release:`}),` Artifact management and release approval (Nexus, Artifactory).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Deploy:`}),` Infrastructure provisioning and deployment (Terraform, Ansible, K8s).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Operate:`}),` Server configuration and scaling.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Monitor:`}),` Metrics and log collection (Prometheus, Grafana, ELK).`]})]})]})]})}function ui(){return(0,k.jsxs)(A,{id:`linux-basics`,number:2,title:`Linux Basics & Shell`,theme:`amber`,children:[(0,k.jsx)(`p`,{children:`Linux is the backbone of modern infrastructure. Over 90% of cloud servers and nearly all containers run on Linux. Mastering the Linux command line is the most foundational skill for any DevOps engineer.`}),(0,k.jsxs)(j,{id:`linux-architecture`,icon:`🐧`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`2.1 Linux Architecture`,children:[(0,k.jsx)(`p`,{children:`The Linux operating system is composed of three main layers:`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`The Kernel:`}),` The core of the OS that interacts directly with the hardware (CPU, Memory, Disks).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`The Shell:`}),` The command-line interpreter (like Bash or Zsh) that takes your commands and passes them to the kernel.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Applications:`}),` User-space programs (like Node.js, Docker, Nginx).`]})]})]}),(0,k.jsxs)(j,{id:`file-system`,icon:`📁`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`2.2 File System & Permissions`,children:[(0,k.jsxs)(`p`,{children:[`In Linux, `,(0,k.jsx)(`em`,{children:`everything is a file`}),". Even hardware devices are represented as files in the `/dev` directory."]}),(0,k.jsx)(M,{filename:`Terminal`,language:`bash`,children:`# View files with detailed permissions
ls -la

# Change file permissions (Owner: Read/Write/Execute, Group: Read/Execute, Others: Read/Execute)
chmod 755 script.sh

# Change the owner of a file to 'nginx' user
chown nginx:nginx /var/www/html/index.html`}),(0,k.jsxs)(`p`,{children:["A permission like `rwxr-xr-x` means:",(0,k.jsx)(`br`,{}),"- `rwx` (Owner): Read, Write, Execute",(0,k.jsx)(`br`,{}),"- `r-x` (Group): Read, Execute",(0,k.jsx)(`br`,{}),"- `r-x` (Others): Read, Execute"]})]}),(0,k.jsxs)(j,{id:`shell-scripting`,icon:`📜`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`2.3 Bash Scripting`,children:[(0,k.jsx)(`p`,{children:`Shell scripting allows you to automate repetitive tasks. A script is just a series of commands saved in a text file.`}),(0,k.jsx)(M,{filename:`backup.sh`,language:`bash`,children:`#!/bin/bash
# The line above is the "shebang" - it tells the OS to use bash to run this script

BACKUP_DIR="/var/backups"
SOURCE_DIR="/var/www/html"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")

echo "Starting backup of $SOURCE_DIR..."

# Create a compressed tarball
tar -czf "$BACKUP_DIR/backup_$TIMESTAMP.tar.gz" "$SOURCE_DIR"

if [ $? -eq 0 ]; then
  echo "Backup successful!"
else
  echo "Backup failed!" >&2
  exit 1
fi`})]}),(0,k.jsxs)(j,{id:`networking-basics`,icon:`🌐`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`2.4 Networking Basics`,children:[(0,k.jsx)(`p`,{children:`DevOps heavily relies on networking to connect microservices. Essential commands include:`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`code`,{children:`ping`}),`: Checks if a remote host is reachable via ICMP.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`code`,{children:`curl`}),`: Transfers data to/from a server (essential for testing APIs).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`code`,{children:`netstat`}),` or `,(0,k.jsx)(`code`,{children:`ss`}),`: Shows open ports and active connections.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`code`,{children:`nslookup`}),` or `,(0,k.jsx)(`code`,{children:`dig`}),`: Queries DNS to resolve domain names to IP addresses.`]})]})]})]})}function di(){return(0,k.jsxs)(A,{id:`version-control`,number:3,title:`Git & Version Control`,theme:`amber`,children:[(0,k.jsx)(`p`,{children:`Git is the foundation of GitOps and CI/CD. Infrastructure as Code (IaC) requires all infrastructure definitions to be version-controlled, meaning Git is no longer just for software developers—it is mandatory for operations as well.`}),(0,k.jsxs)(j,{id:`git-internals`,icon:`🧠`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`3.1 Git Internals`,children:[(0,k.jsx)(`p`,{children:`Unlike older systems (like SVN) that store differences between files, Git thinks of its data like a stream of snapshots. Every time you commit, Git takes a snapshot of what all your files look like at that moment and stores a reference to that snapshot.`}),(0,k.jsx)(`p`,{children:`Git has three main states that your files can reside in:`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Modified:`}),` You have changed the file but have not committed it to your database yet.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Staged:`})," You have marked a modified file in its current version to go into your next commit snapshot (`git add`)."]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Committed:`})," The data is safely stored in your local database (`git commit`)."]})]})]}),(0,k.jsxs)(j,{id:`branching-strategies`,icon:`🌿`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`3.2 Branching Strategies`,children:[(0,k.jsx)(`p`,{children:`A branching strategy defines how a team interacts with version control to deliver software.`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`GitFlow:`})," A complex, legacy strategy involving `master`, `develop`, `feature`, `release`, and `hotfix` branches. Best for software with strict, scheduled release cycles."]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Trunk-Based Development:`})," All developers commit to a single branch (`main` or `trunk`) multiple times a day. Requires robust automated testing and feature flags. This is the preferred approach for true DevOps and CI/CD."]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`GitHub Flow:`})," A simpler alternative where `main` is always deployable. Developers create feature branches, open Pull Requests, merge to `main`, and deploy immediately."]})]})]}),(0,k.jsxs)(j,{id:`advanced-git`,icon:`🍒`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`3.3 Advanced Git Operations`,children:[(0,k.jsx)(`p`,{children:`As a DevOps engineer, you will often need to fix broken commit histories or untangle messy merges.`}),(0,k.jsx)(M,{filename:`Git Operations`,language:`bash`,children:`# Interactive Rebase: allows you to squash, reorder, or edit the last 3 commits
git rebase -i HEAD~3

# Cherry-Pick: Apply a specific commit from another branch into your current branch
git cherry-pick <commit-hash>

# Stash: Temporarily save uncommitted changes so you can switch branches
git stash
# ... later, re-apply them ...
git stash pop

# Bisect: Use binary search to find the exact commit that introduced a bug
git bisect start
git bisect bad                 # Current version is bad
git bisect good <commit-hash>  # An older version you know is good`})]})]})}function fi(){return(0,k.jsxs)(A,{id:`docker`,number:4,title:`Containerization (Docker)`,theme:`amber`,children:[(0,k.jsx)(`p`,{children:`Docker revolutionized software delivery by solving the "It works on my machine" problem. Containerization allows developers to package an application with all of its dependencies into a single, standardized unit for software development.`}),(0,k.jsxs)(j,{id:`containers-vs-vms`,icon:`📦`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`4.1 Containers vs VMs`,children:[(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Virtual Machines (VMs)`}),` virtualize the `,(0,k.jsx)(`em`,{children:`hardware`}),`. Each VM runs a full guest operating system (Windows, Linux), which consumes significant RAM and CPU just to exist.`]}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Containers`}),` virtualize the `,(0,k.jsx)(`em`,{children:`operating system`}),`. They share the host system's kernel and isolate the application processes. Containers are lightweight, start in milliseconds, and use a fraction of the resources required by a VM.`]})]}),(0,k.jsxs)(j,{id:`dockerfile`,icon:`🐳`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`4.2 Writing Dockerfiles`,children:[(0,k.jsx)(`p`,{children:`A Dockerfile is a text document containing all the commands a user could call on the command line to assemble an image.`}),(0,k.jsx)(M,{filename:`Dockerfile`,language:`dockerfile`,children:`# 1. Base Image
FROM node:20-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# 4. Copy the rest of the application code
COPY . .

# 5. Expose the port the app runs on
EXPOSE 3000

# 6. Command to run the application
CMD ["node", "src/index.js"]`}),(0,k.jsxs)(N,{type:`tip`,title:`Docker Build Context`,children:[`Always use a `,(0,k.jsx)(`code`,{children:`.dockerignore`}),` file (similar to `,(0,k.jsx)(`code`,{children:`.gitignore`}),`) to prevent copying `,(0,k.jsx)(`code`,{children:`node_modules/`}),` or secret files into the image. This speeds up the build and reduces image size.`]})]}),(0,k.jsxs)(j,{id:`docker-compose`,icon:`🐙`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`4.3 Docker Compose`,children:[(0,k.jsx)(`p`,{children:`Modern applications rarely consist of a single container. You usually need a backend, a frontend, and a database. Docker Compose is a tool for defining and running multi-container Docker applications using a YAML file.`}),(0,k.jsx)(M,{filename:`docker-compose.yml`,language:`yaml`,children:`version: '3.8'
services:
  web:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - api
      
  api:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      - DB_URL=postgres://db:5432/myapp
      
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:`}),(0,k.jsxs)(`p`,{children:[`To start the entire stack, simply run `,(0,k.jsx)(`code`,{children:`docker-compose up -d`}),`.`]})]}),(0,k.jsxs)(j,{id:`docker-networking`,icon:`🔌`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`4.4 Volumes & Networking`,children:[(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Volumes:`}),` Containers are ephemeral. If a database container is deleted, all its data is lost. Docker Volumes provide persistent storage that exists outside the lifecycle of a given container.`]}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Networking:`})," By default, containers running on the same Docker network can talk to each other using their container names as hostnames (e.g., the `api` container can connect to the database at `http://db:5432`)."]})]})]})}function pi(){return(0,k.jsxs)(A,{id:`kubernetes`,number:5,title:`Orchestration (Kubernetes)`,theme:`amber`,children:[(0,k.jsx)(`p`,{children:`Docker is great for running containers on a single machine. But what happens when you need to run 500 containers across 20 servers? How do you ensure high availability, load balancing, and automatic scaling? This is where Kubernetes (K8s) comes in.`}),(0,k.jsxs)(j,{id:`k8s-architecture`,icon:`☸️`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`5.1 K8s Architecture`,children:[(0,k.jsx)(`p`,{children:`A Kubernetes cluster consists of two main parts:`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Control Plane (Master Nodes):`}),` The brain of the cluster. It schedules containers, manages state (etcd), and exposes the Kubernetes API.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Data Plane (Worker Nodes):`})," The physical or virtual machines that actually run your containerized applications. They run a component called the `kubelet` which communicates with the Control Plane."]})]})]}),(0,k.jsxs)(j,{id:`pods-deployments`,icon:`🏗️`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`5.2 Pods & Deployments`,children:[(0,k.jsxs)(`p`,{children:[`Kubernetes doesn't run containers directly; it wraps them in a higher-level structure called a `,(0,k.jsx)(`strong`,{children:`Pod`}),`. A Pod is the smallest deployable unit in Kubernetes and usually contains a single container.`]}),(0,k.jsxs)(`p`,{children:[`You rarely create Pods directly. Instead, you create a `,(0,k.jsx)(`strong`,{children:`Deployment`}),`. A Deployment ensures that a specified number of Pod replicas are running at all times. If a node crashes, the Deployment automatically reschedules those Pods onto healthy nodes.`]}),(0,k.jsx)(M,{filename:`deployment.yaml`,language:`yaml`,children:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80`})]}),(0,k.jsxs)(j,{id:`services-ingress`,icon:`🚪`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`5.3 Services & Ingress`,children:[(0,k.jsxs)(`p`,{children:[`Pods are mortal—they get created and destroyed constantly, getting new IP addresses every time. A `,(0,k.jsx)(`strong`,{children:`Service`}),` provides a stable IP address and DNS name that load-balances traffic across a dynamic set of Pods.`]}),(0,k.jsxs)(`p`,{children:[`An `,(0,k.jsx)(`strong`,{children:`Ingress`}),` is an API object that manages external access to the Services in a cluster, typically HTTP/HTTPS. It provides load balancing, SSL termination, and name-based virtual hosting.`]}),(0,k.jsx)(M,{filename:`service.yaml`,language:`yaml`,children:`apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP`})]}),(0,k.jsxs)(j,{id:`config-secrets`,icon:`🔐`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`5.4 ConfigMaps & Secrets`,children:[(0,k.jsx)(`p`,{children:`Following the Twelve-Factor App methodology, configuration should be separated from code.`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`ConfigMaps:`}),` Store non-confidential data in key-value pairs (e.g., application properties, environment variables).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Secrets:`}),` Store sensitive information, such as passwords, OAuth tokens, and ssh keys. They are similar to ConfigMaps but are base64 encoded and can be encrypted at rest.`]})]})]})]})}function mi(){return(0,k.jsxs)(A,{id:`ci-cd`,number:6,title:`CI/CD Pipelines`,theme:`amber`,children:[(0,k.jsx)(`p`,{children:`Continuous Integration (CI) and Continuous Deployment (CD) form the backbone of modern DevOps. By automating the integration and delivery process, teams can release code changes more frequently and reliably.`}),(0,k.jsxs)(j,{id:`ci-cd-concepts`,icon:`🚀`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`6.1 Continuous Integration & Deployment`,children:[(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Continuous Integration (CI):`}),` The practice of merging all developers' working copies to a shared mainline several times a day. Every commit triggers an automated build and test sequence.`]}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Continuous Delivery (CD):`}),` The extension of CI. It ensures that the software is always in a deployable state. A human might still need to click an "Approve" button to push it to production.`]}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Continuous Deployment (CD):`}),` Takes Delivery one step further. Every change that passes all stages of the production pipeline is released to the customers `,(0,k.jsx)(`em`,{children:`automatically`}),`, with no human intervention.`]})]}),(0,k.jsxs)(j,{id:`github-actions`,icon:`🐙`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`6.2 GitHub Actions`,children:[(0,k.jsx)(`p`,{children:"GitHub Actions makes it easy to automate all your software workflows directly within your GitHub repository. Workflows are defined using YAML files stored in the `.github/workflows` directory."}),(0,k.jsx)(M,{filename:`.github/workflows/ci.yml`,language:`yaml`,children:`name: Node.js CI

# Trigger the workflow on push to main or pull requests
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20.x'
        cache: 'npm'
        
    - name: Install Dependencies
      run: npm ci
      
    - name: Run Linter
      run: npm run lint
      
    - name: Run Tests
      run: npm test
      
    - name: Build Artifacts
      run: npm run build`})]}),(0,k.jsxs)(j,{id:`jenkins-overview`,icon:`🤵`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`6.3 Jenkins Overview`,children:[(0,k.jsxs)(`p`,{children:[`While GitHub Actions, GitLab CI, and CircleCI are popular SaaS CI/CD tools, `,(0,k.jsx)(`strong`,{children:`Jenkins`}),` remains the grandfather of CI servers. It is an open-source automation server that is typically self-hosted.`]}),(0,k.jsx)(`p`,{children:"Jenkins workflows are defined using a `Jenkinsfile` written in Groovy syntax (Declarative Pipeline). While highly customizable and extensible via thousands of plugins, it carries a higher maintenance burden compared to modern SaaS alternatives."})]})]})}function hi(){return(0,k.jsxs)(A,{id:`iac`,number:7,title:`Infrastructure as Code (Terraform)`,theme:`amber`,children:[(0,k.jsx)(`p`,{children:`Clicking through a web console to create servers, databases, and networks is slow, error-prone, and impossible to replicate perfectly across environments. Infrastructure as Code (IaC) solves this by defining infrastructure via machine-readable configuration files.`}),(0,k.jsxs)(j,{id:`iac-principles`,icon:`🏗️`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`7.1 IaC Principles`,children:[(0,k.jsx)(`p`,{children:`IaC brings software engineering practices to infrastructure:`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Version Control:`}),` Infrastructure changes go through Pull Requests, code review, and CI/CD pipelines.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Idempotency:`}),` Applying the same configuration multiple times should always result in the same state, without duplicating resources.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Declarative vs Imperative:`}),` Instead of writing a script that says "Create VM, then Create Network" (Imperative), you declare "I want a VM connected to this Network" (Declarative), and the IaC tool figures out the steps to achieve that state.`]})]})]}),(0,k.jsxs)(j,{id:`terraform-basics`,icon:`🌍`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`7.2 Terraform Basics`,children:[(0,k.jsx)(`p`,{children:`HashiCorp Terraform is the industry standard for declarative IaC. It uses the HashiCorp Configuration Language (HCL) and can provision resources across any cloud provider (AWS, Azure, GCP) using Providers.`}),(0,k.jsx)(M,{filename:`main.tf`,language:`hcl`,children:`# 1. Define the Provider
provider "aws" {
  region = "us-east-1"
}

# 2. Declare a Resource
resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0" # Ubuntu 20.04
  instance_type = "t2.micro"

  tags = {
    Name        = "Production-Web-Server"
    Environment = "Prod"
  }
}

# 3. Output a value after creation
output "server_public_ip" {
  value = aws_instance.web_server.public_ip
}`}),(0,k.jsx)(`p`,{children:"The core Terraform workflow consists of three commands: `terraform init` (downloads plugins), `terraform plan` (shows what will change), and `terraform apply` (executes the changes)."})]}),(0,k.jsxs)(j,{id:`state-management`,icon:`💾`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`7.3 State Management`,children:[(0,k.jsx)(`p`,{children:"Terraform must map the resources in your configuration files to the actual resources in the real world (e.g., matching the `aws_instance` block to the actual EC2 instance ID `i-0abcdef1234567890`)."}),(0,k.jsxs)(`p`,{children:[`It does this using a `,(0,k.jsx)(`strong`,{children:`State File`})," (`terraform.tfstate`). In a team environment, this file must never be committed to Git (it contains cleartext secrets and leads to merge conflicts). Instead, it must be stored in a remote backend (like an AWS S3 bucket) with state locking enabled (via DynamoDB) to prevent concurrent executions from corrupting the infrastructure."]})]})]})}function gi(){return(0,k.jsxs)(A,{id:`cloud-providers`,number:8,title:`Cloud Providers (AWS Overview)`,theme:`amber`,children:[(0,k.jsx)(`p`,{children:`The cloud is simply someone else's computer, but it provides on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Amazon Web Services (AWS) is the dominant market leader.`}),(0,k.jsxs)(j,{id:`cloud-computing`,icon:`☁️`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`8.1 Cloud Computing Models`,children:[(0,k.jsx)(`p`,{children:`Cloud services are generally divided into three main categories:`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`IaaS (Infrastructure as a Service):`}),` You rent the raw servers, networking, and storage. You are responsible for the OS and everything above it. (e.g., AWS EC2).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`PaaS (Platform as a Service):`}),` The cloud provider manages the OS and runtime. You just upload your application code. (e.g., Heroku, AWS Elastic Beanstalk).`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`SaaS (Software as a Service):`}),` Fully managed applications consumed via the browser. (e.g., Gmail, Salesforce).`]})]})]}),(0,k.jsxs)(j,{id:`aws-core`,icon:`🔶`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`8.2 Core AWS Services`,children:[(0,k.jsx)(`p`,{children:`AWS has hundreds of services, but almost all architectures rely on these core primitives:`}),(0,k.jsxs)(`table`,{className:`devops-table`,children:[(0,k.jsx)(`thead`,{children:(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`th`,{children:`Service Name`}),(0,k.jsx)(`th`,{children:`Category`}),(0,k.jsx)(`th`,{children:`Description`})]})}),(0,k.jsxs)(`tbody`,{children:[(0,k.jsxs)(`tr`,{children:[(0,k.jsxs)(`td`,{children:[(0,k.jsx)(`strong`,{children:`EC2`}),` (Elastic Compute Cloud)`]}),(0,k.jsx)(`td`,{children:`Compute`}),(0,k.jsx)(`td`,{children:`Virtual machines in the cloud. You have full root access.`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsxs)(`td`,{children:[(0,k.jsx)(`strong`,{children:`S3`}),` (Simple Storage Service)`]}),(0,k.jsx)(`td`,{children:`Storage`}),(0,k.jsx)(`td`,{children:`Object storage for files, images, backups, and static websites.`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsxs)(`td`,{children:[(0,k.jsx)(`strong`,{children:`RDS`}),` (Relational Database Service)`]}),(0,k.jsx)(`td`,{children:`Database`}),(0,k.jsx)(`td`,{children:`Managed SQL databases (PostgreSQL, MySQL). AWS handles backups and patching.`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsxs)(`td`,{children:[(0,k.jsx)(`strong`,{children:`VPC`}),` (Virtual Private Cloud)`]}),(0,k.jsx)(`td`,{children:`Networking`}),(0,k.jsx)(`td`,{children:`Your private, isolated section of the AWS network where you launch resources.`})]}),(0,k.jsxs)(`tr`,{children:[(0,k.jsxs)(`td`,{children:[(0,k.jsx)(`strong`,{children:`IAM`}),` (Identity and Access Management)`]}),(0,k.jsx)(`td`,{children:`Security`}),(0,k.jsx)(`td`,{children:`Manages users, roles, and permissions across AWS.`})]})]})]})]}),(0,k.jsxs)(j,{id:`serverless`,icon:`⚡`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`8.3 Serverless Computing (Lambda)`,children:[(0,k.jsx)(`p`,{children:`"Serverless" doesn't mean there are no servers; it means you don't manage them, and you only pay for the exact milliseconds your code is executing.`}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`AWS Lambda`}),` allows you to run code in response to events (like an HTTP request via API Gateway, or a file being uploaded to S3). It automatically scales from zero to thousands of concurrent executions instantly, making it highly cost-effective for spiky workloads.`]})]})]})}function _i(){return(0,k.jsxs)(A,{id:`observability`,number:9,title:`Monitoring & Observability`,theme:`amber`,children:[(0,k.jsx)(`p`,{children:`You cannot manage what you cannot measure. Once an application is deployed, you must know if it's healthy, if it's fast, and exactly why it crashed at 3:00 AM. This is the domain of Observability.`}),(0,k.jsxs)(j,{id:`metrics-logs-traces`,icon:`📊`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`9.1 The Three Pillars of Observability`,children:[(0,k.jsx)(`p`,{children:`True observability is built on three distinct types of telemetry data:`}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Metrics:`}),` Aggregated numeric data over time (e.g., CPU usage is 85%, API error rate is 2%). Great for triggering alerts.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Logs:`}),` Discrete text records of events that happened (e.g., "User 123 logged in", "NullPointerException at line 42"). Essential for debugging.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Traces:`}),` Represent the lifecycle of a single request as it travels across multiple microservices. Crucial for identifying latency bottlenecks in distributed systems.`]})]})]}),(0,k.jsxs)(j,{id:`prometheus-grafana`,icon:`📈`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`9.2 Prometheus & Grafana (Metrics)`,children:[(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Prometheus`}),` is an open-source systems monitoring and alerting toolkit. Unlike legacy systems that wait for servers to push data to them, Prometheus uses a `,(0,k.jsx)(`em`,{children:`pull model`}),". It periodically scrapes HTTP endpoints (like `/metrics`) exposed by your applications to collect time-series data."]}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`strong`,{children:`Grafana`}),` is the visualization layer. It connects to Prometheus (and many other data sources) to create beautiful, dynamic dashboards that visualize your metrics.`]})]}),(0,k.jsxs)(j,{id:`elk-stack`,icon:`🔍`,iconBg:`#fef3c7`,iconColor:`#d97706`,title:`9.3 The ELK Stack (Logs)`,children:[(0,k.jsx)(`p`,{children:"When you have 50 microservices running across 200 Kubernetes pods, SSHing into a server to read a log file using `grep` is impossible. You need centralized logging."}),(0,k.jsxs)(`p`,{children:[`The `,(0,k.jsx)(`strong`,{children:`ELK Stack`}),` is the most popular solution:`]}),(0,k.jsxs)(`ul`,{children:[(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Elasticsearch:`}),` A highly scalable, full-text search and analytics engine where all logs are stored and indexed.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Logstash`}),` (or Fluentd/Filebeat): The data collection pipeline that ingests logs from your containers, transforms them (e.g., parsing JSON), and sends them to Elasticsearch.`]}),(0,k.jsxs)(`li`,{children:[(0,k.jsx)(`strong`,{children:`Kibana:`}),` The visualization dashboard that allows you to search, filter, and analyze the logs stored in Elasticsearch.`]})]})]})]})}function vi(){return(0,k.jsxs)(mr,{chapters:nr,brand:{title:`DevOps`,logo:`♾️`,gradient:`linear-gradient(90deg, #f59e0b, #d97706)`,themeColor:`amber`},children:[(0,k.jsx)(yr,{config:{title:`DevOps & Infrastructure Guide`,subtitle:`From code to cloud`,description:`Master the art of shipping software reliably. Learn Linux, Docker, Kubernetes, CI/CD pipelines, and Infrastructure as Code to build resilient platforms.`,meta:[`Containers`,`Kubernetes`,`CI/CD`,`Cloud`],theme:`amber`}}),(0,k.jsx)(li,{}),(0,k.jsx)(ui,{}),(0,k.jsx)(di,{}),(0,k.jsx)(fi,{}),(0,k.jsx)(pi,{}),(0,k.jsx)(mi,{}),(0,k.jsx)(hi,{}),(0,k.jsx)(gi,{}),(0,k.jsx)(_i,{})]})}function yi(){return(0,k.jsxs)(Gt,{children:[(0,k.jsx)(Ut,{path:`/`,element:(0,k.jsx)(lr,{})}),(0,k.jsx)(Ut,{path:`/frontend`,element:(0,k.jsx)(qr,{})}),(0,k.jsx)(Ut,{path:`/backend`,element:(0,k.jsx)(ci,{})}),(0,k.jsx)(Ut,{path:`/devops`,element:(0,k.jsx)(vi,{})})]})}(0,$n.createRoot)(document.getElementById(`root`)).render((0,k.jsx)(x.StrictMode,{children:(0,k.jsx)(Nn,{children:(0,k.jsx)(yi,{})})}));