(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[993],{968:(t,e,r)=>{function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=r.nmd(t),function(e,r){var o=function(t,e,r){"use strict";var n,o;if(function(){var e,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in o=t.lazySizesConfig||t.lazysizesConfig||{},r)e in o||(o[e]=r[e])}(),!e||!e.getElementsByClassName)return{init:function(){},cfg:o,noSupport:!0};var i,a,s,c,u,l,f,d,h,p,y,m,v,g,b,w,z,E,A,C,L,x,S,_,N,M,F,j,T,k,O,P,R,B,W,I,G,H,D,$,q,U,Q,Y,J=e.documentElement,K=t.HTMLPictureElement,V="addEventListener",X=t.addEventListener.bind(t),Z=t.setTimeout,tt=t.requestAnimationFrame||Z,et=t.requestIdleCallback,rt=/^picture$/i,nt=["load","error","lazyincluded","_lazyloaded"],ot={},it=Array.prototype.forEach,at=function(t,e){return ot[e]||(ot[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),ot[e].test(t.getAttribute("class")||"")&&ot[e]},st=function(t,e){at(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},ct=function(t,e){var r;(r=at(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(r," "))},ut=function t(e,r,n){var o=n?V:"removeEventListener";n&&t(e,r),nt.forEach((function(t){e[o](t,r)}))},lt=function(t,r,o,i,a){var s=e.createEvent("Event");return o||(o={}),o.instance=n,s.initEvent(r,!i,!a),s.detail=o,t.dispatchEvent(s),s},ft=function(e,r){var n;!K&&(n=t.picturefill||o.pf)?(r&&r.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",r.src),n({reevaluate:!0,elements:[e]})):r&&r.src&&(e.src=r.src)},dt=function(t,e){return(getComputedStyle(t,null)||{})[e]},ht=function(t,e,r){for(r=r||t.offsetWidth;r<o.minSize&&e&&!t._lazysizesWidth;)r=e.offsetWidth,e=e.parentNode;return r},pt=(q=[],U=$=[],(Y=function(t,r){H&&!r?t.apply(this,arguments):(U.push(t),D||(D=!0,(e.hidden?Z:tt)(Q)))})._lsFlush=Q=function(){var t=U;for(U=$.length?q:$,H=!0,D=!1;t.length;)t.shift()();H=!1},Y),yt=function(t,e){return e?function(){pt(t)}:function(){var e=this,r=arguments;pt((function(){t.apply(e,r)}))}},mt=function(t){var e,n,o=function(){e=null,t()},i=function t(){var e=r.now()-n;e<99?Z(t,99-e):(et||o)(o)};return function(){n=r.now(),e||(e=Z(i,99))}},vt=(z=/^img$/i,E=/^iframe$/i,A="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),0,C=0,L=0,x=-1,S=function(t){L--,(!t||L<0||!t.target)&&(L=0)},_=function(t){return null==w&&(w="hidden"==dt(e.body,"visibility")),w||!("hidden"==dt(t.parentNode,"visibility")&&"hidden"==dt(t,"visibility"))},N=function(t,r){var n,o=t,i=_(t);for(m-=r,b+=r,v-=r,g+=r;i&&(o=o.offsetParent)&&o!=e.body&&o!=J;)(i=(dt(o,"opacity")||1)>0)&&"visible"!=dt(o,"overflow")&&(n=o.getBoundingClientRect(),i=g>n.left&&v<n.right&&b>n.top-1&&m<n.bottom+1);return i},F=function(t){var e,n=0,i=o.throttleDelay,a=o.ricTimeout,s=function(){e=!1,n=r.now(),t()},c=et&&a>49?function(){et(s,{timeout:a}),a!==o.ricTimeout&&(a=o.ricTimeout)}:yt((function(){Z(s)}),!0);return function(t){var o;(t=!0===t)&&(a=33),e||(e=!0,(o=i-(r.now()-n))<0&&(o=0),t||o<9?c():Z(c,o))}}(M=function(){var t,r,i,a,s,c,f,h,z,E,S,M,F=n.elements;if((d=o.loadMode)&&L<8&&(t=F.length)){for(r=0,x++;r<t;r++)if(F[r]&&!F[r]._lazyRace)if(!A||n.prematureUnveil&&n.prematureUnveil(F[r]))B(F[r]);else if((h=F[r].getAttribute("data-expand"))&&(c=1*h)||(c=C),E||(E=!o.expand||o.expand<1?J.clientHeight>500&&J.clientWidth>500?500:370:o.expand,n._defEx=E,S=E*o.expFactor,M=o.hFac,w=null,C<S&&L<1&&x>2&&d>2&&!e.hidden?(C=S,x=0):C=d>1&&x>1&&L<6?E:0),z!==c&&(p=innerWidth+c*M,y=innerHeight+c,f=-1*c,z=c),i=F[r].getBoundingClientRect(),(b=i.bottom)>=f&&(m=i.top)<=y&&(g=i.right)>=f*M&&(v=i.left)<=p&&(b||g||v||m)&&(o.loadHidden||_(F[r]))&&(l&&L<3&&!h&&(d<3||x<4)||N(F[r],c))){if(B(F[r]),s=!0,L>9)break}else!s&&l&&!a&&L<4&&x<4&&d>2&&(u[0]||o.preloadAfterLoad)&&(u[0]||!h&&(b||g||v||m||"auto"!=F[r].getAttribute(o.sizesAttr)))&&(a=u[0]||F[r]);a&&!s&&B(a)}}),T=yt(j=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(S(t),st(e,o.loadedClass),ct(e,o.loadingClass),ut(e,k),lt(e,"lazyloaded"))}),k=function(t){T({target:t.target})},O=function(t,e){var r=t.getAttribute("data-load-mode")||o.iframeLoadMode;0==r?t.contentWindow.location.replace(e):1==r&&(t.src=e)},P=function(t){var e,r=t.getAttribute(o.srcsetAttr);(e=o.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),r&&t.setAttribute("srcset",r)},R=yt((function(t,e,r,n,i){var a,s,c,u,l,d;(l=lt(t,"lazybeforeunveil",e)).defaultPrevented||(n&&(r?st(t,o.autosizesClass):t.setAttribute("sizes",n)),s=t.getAttribute(o.srcsetAttr),a=t.getAttribute(o.srcAttr),i&&(u=(c=t.parentNode)&&rt.test(c.nodeName||"")),d=e.firesLoad||"src"in t&&(s||a||u),l={target:t},st(t,o.loadingClass),d&&(clearTimeout(f),f=Z(S,2500),ut(t,k,!0)),u&&it.call(c.getElementsByTagName("source"),P),s?t.setAttribute("srcset",s):a&&!u&&(E.test(t.nodeName)?O(t,a):t.src=a),i&&(s||u)&&ft(t,{src:a})),t._lazyRace&&delete t._lazyRace,ct(t,o.lazyClass),pt((function(){var e=t.complete&&t.naturalWidth>1;d&&!e||(e&&st(t,o.fastLoadedClass),j(l),t._lazyCache=!0,Z((function(){"_lazyCache"in t&&delete t._lazyCache}),9)),"lazy"==t.loading&&L--}),!0)})),B=function(t){if(!t._lazyRace){var e,r=z.test(t.nodeName),n=r&&(t.getAttribute(o.sizesAttr)||t.getAttribute("sizes")),i="auto"==n;(!i&&l||!r||!t.getAttribute("src")&&!t.srcset||t.complete||at(t,o.errorClass)||!at(t,o.lazyClass))&&(e=lt(t,"lazyunveilread").detail,i&&gt.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,L++,R(t,e,i,n,r))}},W=mt((function(){o.loadMode=3,F()})),G=function t(){l||(r.now()-h<999?Z(t,999):(l=!0,o.loadMode=3,F(),X("scroll",I,!0)))},{_:function(){h=r.now(),n.elements=e.getElementsByClassName(o.lazyClass),u=e.getElementsByClassName(o.lazyClass+" "+o.preloadClass),X("scroll",F,!0),X("resize",F,!0),X("pageshow",(function(t){if(t.persisted){var r=e.querySelectorAll("."+o.loadingClass);r.length&&r.forEach&&tt((function(){r.forEach((function(t){t.complete&&B(t)}))}))}})),t.MutationObserver?new MutationObserver(F).observe(J,{childList:!0,subtree:!0,attributes:!0}):(J.addEventListener("DOMNodeInserted",F,!0),J.addEventListener("DOMAttrModified",F,!0),setInterval(F,999)),X("hashchange",F,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(t){e.addEventListener(t,F,!0)})),/d$|^c/.test(e.readyState)?G():(X("load",G),e.addEventListener("DOMContentLoaded",F),Z(G,2e4)),n.elements.length?(M(),pt._lsFlush()):F()},checkElems:F,unveil:B,_aLSL:I=function(){3==o.loadMode&&(o.loadMode=2),W()}}),gt=(a=yt((function(t,e,r,n){var o,i,a;if(t._lazysizesWidth=n,n+="px",t.setAttribute("sizes",n),rt.test(e.nodeName||""))for(i=0,a=(o=e.getElementsByTagName("source")).length;i<a;i++)o[i].setAttribute("sizes",n);r.detail.dataAttr||ft(t,r.detail)})),s=function(t,e,r){var n,o=t.parentNode;o&&(r=ht(t,o,r),(n=lt(t,"lazybeforesizes",{width:r,dataAttr:!!e})).defaultPrevented||(r=n.detail.width)&&r!==t._lazysizesWidth&&a(t,o,n,r))},{_:function(){i=e.getElementsByClassName(o.autosizesClass),X("resize",c)},checkElems:c=mt((function(){var t,e=i.length;if(e)for(t=0;t<e;t++)s(i[t])})),updateElem:s}),bt=function t(){!t.i&&e.getElementsByClassName&&(t.i=!0,gt._(),vt._())};return Z((function(){o.init&&bt()})),n={cfg:o,autoSizer:gt,loader:vt,init:bt,uP:ft,aC:st,rC:ct,hC:at,fire:lt,gW:ht,rAF:pt}}(e,e.document,Date);e.lazySizes=o,"object"==n(t)&&t.exports&&(t.exports=o)}("undefined"!=typeof window?window:{})},993:(t,e,r)=>{var n,o,i;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=r.nmd(t),function(s,c){s&&(c=c.bind(null,s,s.document),"object"==a(t)&&t.exports?c(r(968)):(o=[r(968)],void 0===(i="function"==typeof(n=c)?n.apply(e,o):n)||(t.exports=i)))}("undefined"!=typeof window?window:0,(function(t,e,r){"use strict";if(t.addEventListener){var n=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,o=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,i=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,a=/^picture$/i,s=r.cfg,c={getParent:function(e,r){var n=e,o=e.parentNode;return r&&"prev"!=r||!o||!a.test(o.nodeName||"")||(o=o.parentNode),"self"!=r&&(n="prev"==r?e.previousElementSibling:r&&(o.closest||t.jQuery)&&(o.closest?o.closest(r):jQuery(o).closest(r)[0])||o),n},getFit:function(t){var e,r,n=getComputedStyle(t,null)||{},a=n.content||n.fontFamily,s={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!s.fit&&a&&(e=a.match(o))&&(s.fit=e[1]),s.fit?(!(r=t._lazysizesParentContainer||t.getAttribute("data-parent-container"))&&a&&(e=a.match(i))&&(r=e[1]),s.parent=c.getParent(t,r)):s.fit=n.objectFit,s},getImageRatio:function(e){var r,o,i,c,u,l,f,d=e.parentNode,h=d&&a.test(d.nodeName||"")?d.querySelectorAll("source, img"):[e];for(r=0;r<h.length;r++)if(o=(e=h[r]).getAttribute(s.srcsetAttr)||e.getAttribute("srcset")||e.getAttribute("data-pfsrcset")||e.getAttribute("data-risrcset")||"",i=e._lsMedia||e.getAttribute("media"),i=s.customMedia[e.getAttribute("data-media")||i]||i,o&&(!i||(t.matchMedia&&matchMedia(i)||{}).matches)){(c=parseFloat(e.getAttribute("data-aspectratio")))||((u=o.match(n))?"w"==u[2]?(l=u[1],f=u[3]):(l=u[3],f=u[1]):(l=e.getAttribute("width"),f=e.getAttribute("height")),c=l/f);break}return c},calculateSize:function(t,e){var r,n,o,i=this.getFit(t),a=i.fit,s=i.parent;return"width"==a||("contain"==a||"cover"==a)&&(n=this.getImageRatio(t))?(s?e=s.clientWidth:s=t,o=e,"width"==a?o=e:(r=e/s.clientHeight)&&("cover"==a&&r<n||"contain"==a&&r>n)&&(o=e*(n/r)),o):e}};r.parentFit=c,e.addEventListener("lazybeforesizes",(function(t){if(!t.defaultPrevented&&t.detail.instance==r){var e=t.target;t.detail.width=c.calculateSize(e,t.detail.width)}}))}}))},39:(t,e,r)=>{function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(t){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=d;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=x(a,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?y:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=y,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",h="suspendedYield",p="executing",y="completed",m={};function v(){}function g(){}function b(){}var w={};w[a]=function(){return this};var z=Object.getPrototypeOf,E=z&&z(z(M([])));E&&E!==r&&o.call(E,a)&&(w=E);var A=b.prototype=v.prototype=Object.create(w);function C(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(i,a,s,c){var u=f(t[i],t,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"===n(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,c)}))}c(u.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function M(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}return g.prototype=A.constructor=b,b.constructor=g,g.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(A),t},t.awrap=function(t){return{__await:t}},C(L.prototype),L.prototype[s]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(A),u(A,c,"Generator"),A[a]=function(){return this},A.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=M,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}("object"===n(t=r.nmd(t))?t.exports:{});try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}},379:(t,e,r)=>{"use strict";var n,o=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),i=[];function a(t){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===t){e=r;break}return e}function s(t,e){for(var r={},n=[],o=0;o<t.length;o++){var s=t[o],c=e.base?s[0]+e.base:s[0],u=r[c]||0,l="".concat(c," ").concat(u);r[c]=u+1;var f=a(l),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:l,updater:y(d,e),references:1}),n.push(l)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,l=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h=null,p=0;function y(t,e){var r,n,o;if(e.singleton){var i=p++;r=h||(h=c(e)),n=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=c(e),n=d.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=a(r[n]);i[o].references--}for(var c=s(t,e),u=0;u<r.length;u++){var l=a(r[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=c}}}}}]);