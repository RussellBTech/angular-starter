!function(e,t){"use strict";function n(){var e=C.splice(0,C.length);for(We=0;e.length;)e.shift().call(null,e.shift())}function r(e,t){for(var n=0,r=e.length;n<r;n++)d(e[n],t)}function o(e){return function(t){Re(t)&&(d(t,e),le.length&&r(t.querySelectorAll(le),e))}}function l(e){var t=Be.call(e,"is"),n=e.nodeName.toUpperCase(),r=ie.call(re,t?ee+t.toUpperCase():J+n);return t&&-1<r&&!a(n,t)?-1:r}function a(e,t){return-1<le.indexOf(e+'[is="'+t+'"]')}function i(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,o=e.target,l=e[X]||2,a=e[$]||3;!rt||o&&o!==t||!t[B]||"style"===r||e.prevValue===e.newValue&&(""!==e.newValue||n!==l&&n!==a)||t[B](r,n===l?null:e.prevValue,n===a?null:e.newValue)}function u(e){var t=o(e);return function(e){C.push(t,e.target),We&&clearTimeout(We),We=setTimeout(n,1)}}function c(e){nt&&(nt=!1,e.currentTarget.removeEventListener(W,c)),le.length&&r((e.target||g).querySelectorAll(le),e.detail===x?x:_),Ve&&function(){for(var e,t=0,n=Ue.length;t<n;t++)ae.contains(e=Ue[t])||(n--,Ue.splice(t--,1),d(e,x))}()}function s(e,t){var n=this;Ge.call(n,e,t),w.call(n,{target:n})}function m(e,t,n){var r=t.apply(e,n),o=l(r);return-1<o&&F(r,oe[o]),n.pop()&&le.length&&function(e){for(var t,n=0,r=e.length;n<r;n++)F(t=e[n],oe[l(t)])}(r.querySelectorAll(le)),r}function f(e,t){De(e,t),N?N.observe(e,$e):(tt&&(e.setAttribute=s,e[R]=O(e),e[U](Y,w)),e[U](Q,i)),e[z]&&rt&&(e.created=!0,e[z](),e.created=!1)}function p(e){throw new Error("A "+e+" type is already registered")}function d(e,t){var n,r,o=l(e);-1<o&&!xe.call(e,"TEMPLATE")&&(I(e,oe[o]),o=0,t!==_||e[_]?t!==x||e[x]||(e[_]=!1,e[x]=!0,r="disconnected",o=1):(e[x]=!1,e[_]=!0,r="connected",o=1,Ve&&ie.call(Ue,e)<0&&Ue.push(e)),o&&(n=e[t+k]||e[r+k])&&n.call(e))}function h(){}function T(e,t,n){var r=n&&n[q]||"",o=t.prototype,l=Ne(o),a=t.observedAttributes||fe,i={prototype:l};Pe(l,z,{value:function(){if(ye)ye=!1;else if(!this[Me]){this[Me]=!0,new t(this),o[z]&&o[z].call(this);var e=Ce[Ae.get(t)];(!ve||e.create.length>1)&&E(this)}}}),Pe(l,B,{value:function(e){-1<ie.call(a,e)&&o[B]&&o[B].apply(this,arguments)}}),o[j]&&Pe(l,Z,{value:o[j]}),o[G]&&Pe(l,K,{value:o[G]}),r&&(i[q]=r),e=e.toUpperCase(),Ce[e]={constructor:t,create:r?[r,Oe(e)]:[e]},Ae.set(t,e),g[V](e.toLowerCase(),i),v(e),we[e].r()}function L(e){var t=Ce[e.toUpperCase()];return t&&t.constructor}function M(e){return"string"==typeof e?e:e&&e.is||""}function E(e){for(var t,n=e[B],r=n?e.attributes:fe,o=r.length;o--;)n.call(e,(t=r[o]).name||t.nodeName,null,t.value||t.nodeValue)}function v(e){return(e=e.toUpperCase())in we||(we[e]={},we[e].p=new be((function(t){we[e].r=t}))),we[e].p}function H(){Ee&&delete e.customElements,me(e,"customElements",{configurable:!0,value:new h}),me(e,"CustomElementRegistry",{configurable:!0,value:h});for(var t=y.get(/^HTML[A-Z]*[a-z]/),n=t.length;n--;function(t){var n=e[t];if(n){e[t]=function(e){var t,r;return e||(e=this),e[Me]||(ye=!0,t=Ce[Ae.get(e.constructor)],(e=(r=ve&&1===t.create.length)?Reflect.construct(n,fe,t.constructor):g.createElement.apply(g,t.create))[Me]=!0,ye=!1,r||E(e)),e},e[t].prototype=n.prototype;try{n.prototype.constructor=e[t]}catch(r){me(n,Me,{value:e[t]})}}}(t[n]));g.createElement=function(e,t){var n=M(t);return n?Xe.call(this,e,Oe(n)):Xe.call(this,e)},Ye||(et=!0,g[V](""))}var g=e.document,b=e.Object,y=function(e){var t,n,r,o,l=/^[A-Z]+[a-z]/,a=function(e,t){(t=t.toLowerCase())in i||(i[e]=(i[e]||[]).concat(t),i[t]=i[t.toUpperCase()]=e)},i=(b.create||b)(null),u={};for(n in e)for(o in e[n])for(i[o]=r=e[n][o],t=0;t<r.length;t++)i[r[t].toLowerCase()]=i[r[t].toUpperCase()]=o;return u.get=function(e){return"string"==typeof e?i[e]||(l.test(e)?[]:""):function(e){var t,n=[];for(t in i)e.test(t)&&n.push(t);return n}(e)},u.set=function(e,t){return l.test(e)?a(e,t):a(t,e),u},u}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!=typeof t&&(t={type:t||"auto"});var C,w,A,O,N,D,I,F,S,V="registerElement",P=1e5*e.Math.random()>>0,R="__"+V+P,U="addEventListener",_="attached",k="Callback",x="detached",q="extends",B="attributeChanged"+k,Z=_+k,j="connected"+k,G="disconnected"+k,z="created"+k,K=x+k,X="ADDITION",$="REMOVAL",Q="DOMAttrModified",W="DOMContentLoaded",Y="DOMSubtreeModified",J="<",ee="=",te=/^[A-Z][._A-Z0-9]*-[-._A-Z0-9]*$/,ne=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],re=[],oe=[],le="",ae=g.documentElement,ie=re.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},ue=b.prototype,ce=ue.hasOwnProperty,se=ue.isPrototypeOf,me=b.defineProperty,fe=[],pe=b.getOwnPropertyDescriptor,de=b.getOwnPropertyNames,he=b.getPrototypeOf,Te=b.setPrototypeOf,Le=!!b.__proto__,Me="__dreCEv1",Ee=e.customElements,ve=!/^force/.test(t.type)&&!!(Ee&&Ee.define&&Ee.get&&Ee.whenDefined),He=b.create||b,ge=e.Map||function(){var e,t=[],n=[];return{get:function(e){return n[ie.call(t,e)]},set:function(r,o){(e=ie.call(t,r))<0?n[t.push(r)-1]=o:n[e]=o}}},be=e.Promise||function(e){function t(e){for(r=!0;n.length;)n.shift()(e)}var n=[],r=!1,o={catch:function(){return o},then:function(e){return n.push(e),r&&setTimeout(t,1),o}};return e(t),o},ye=!1,Ce=He(null),we=He(null),Ae=new ge,Oe=function(e){return e.toLowerCase()},Ne=b.create||function e(t){return t?(e.prototype=t,new e):this},De=Te||(Le?function(e,t){return e.__proto__=t,e}:de&&pe?function(){function e(e,t){for(var n,r=de(t),o=0,l=r.length;o<l;o++)ce.call(e,n=r[o])||me(e,n,pe(t,n))}return function(t,n){do{e(t,n)}while((n=he(n))&&!se.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),Ie=e.MutationObserver||e.WebKitMutationObserver,Fe=e.HTMLAnchorElement,Se=(e.HTMLElement||e.Element||e.Node).prototype,Ve=!se.call(Se,ae),Pe=Ve?function(e,t,n){return e[t]=n.value,e}:me,Re=Ve?function(e){return 1===e.nodeType}:function(e){return se.call(Se,e)},Ue=Ve&&[],_e=Se.attachShadow,ke=Se.cloneNode,xe=Se.closest||function(e){for(var t=this;t&&t.nodeName!==e;)t=t.parentNode;return t},qe=Se.dispatchEvent,Be=Se.getAttribute,Ze=Se.hasAttribute,je=Se.removeAttribute,Ge=Se.setAttribute,ze=g.createElement,Ke=g.importNode,Xe=ze,$e=Ie&&{attributes:!0,characterData:!0,attributeOldValue:!0},Qe=Ie||function(e){tt=!1,ae.removeEventListener(Q,Qe)},We=0,Ye=V in g&&!/^force-all/.test(t.type),Je=!0,et=!1,tt=!0,nt=!0,rt=!0;if(Ie&&((S=g.createElement("div")).innerHTML="<div><div></div></div>",new Ie((function(e,t){if(e[0]&&"childList"==e[0].type&&!e[0].removedNodes[0].childNodes.length){var n=(S=pe(Se,"innerHTML"))&&S.set;n&&me(Se,"innerHTML",{set:function(e){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,e)}})}t.disconnect(),S=null})).observe(S,{childList:!0,subtree:!0}),S.innerHTML=""),Ye||(Te||Le?(I=function(e,t){se.call(t,e)||f(e,t)},F=f):F=I=function(e,t){e[R]||(e[R]=b(!0),f(e,t))},Ve?(tt=!1,function(){var e=pe(Se,U),t=e.value,n=function(e){var t=new CustomEvent(Q,{bubbles:!0});t.attrName=e,t.prevValue=Be.call(this,e),t.newValue=null,t[$]=t.attrChange=2,je.call(this,e),qe.call(this,t)},r=function(e,t){var n=Ze.call(this,e),r=n&&Be.call(this,e),o=new CustomEvent(Q,{bubbles:!0});Ge.call(this,e,t),o.attrName=e,o.prevValue=n?r:null,o.newValue=t,n?o.MODIFICATION=o.attrChange=1:o[X]=o.attrChange=0,qe.call(this,o)},o=function(e){var t,n=e.currentTarget,r=n[R],o=e.propertyName;r.hasOwnProperty(o)&&(r=r[o],(t=new CustomEvent(Q,{bubbles:!0})).attrName=r.name,t.prevValue=r.value||null,t.newValue=r.value=n[o]||null,null==t.prevValue?t[X]=t.attrChange=0:t.MODIFICATION=t.attrChange=1,qe.call(n,t))};e.value=function(e,l,a){e===Q&&this[B]&&this.setAttribute!==r&&(this[R]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",o)),t.call(this,e,l,a)},me(Se,U,e)}()):Ie||(ae[U](Q,Qe),ae.setAttribute(R,1),ae.removeAttribute(R),tt&&(w=function(e){var t,n,r,o=this;if(o===e.target){for(r in t=o[R],o[R]=n=O(o),n){if(!(r in t))return A(0,o,r,t[r],n[r],X);if(n[r]!==t[r])return A(1,o,r,t[r],n[r],"MODIFICATION")}for(r in t)if(!(r in n))return A(2,o,r,t[r],n[r],$)}},A=function(e,t,n,r,o,l){var a={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:o};a[l]=e,i(a)},O=function(e){for(var t,n,r={},o=e.attributes,l=0,a=o.length;l<a;l++)"setAttribute"!==(n=(t=o[l]).name)&&(r[n]=t.value);return r})),g[V]=function(e,t){if(n=e.toUpperCase(),Je&&(Je=!1,Ie?(N=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new Ie((function(r){for(var o,l,a,i=0,u=r.length;i<u;i++)"childList"===(o=r[i]).type?(n(o.addedNodes,e),n(o.removedNodes,t)):(l=o.target,rt&&l[B]&&"style"!==o.attributeName&&(a=Be.call(l,o.attributeName))!==o.oldValue&&l[B](o.attributeName,o.oldValue,a))}))}(o(_),o(x)),(D=function(e){return N.observe(e,{childList:!0,subtree:!0}),e})(g),_e&&(Se.attachShadow=function(){return D(_e.apply(this,arguments))})):(C=[],g[U]("DOMNodeInserted",u(_)),g[U]("DOMNodeRemoved",u(x))),g[U](W,c),g[U]("readystatechange",c),g.importNode=function(e,t){switch(e.nodeType){case 1:return m(g,Ke,[e,!!t]);case 11:for(var n=g.createDocumentFragment(),r=e.childNodes,o=r.length,l=0;l<o;l++)n.appendChild(g.importNode(r[l],!!t));return n;default:return ke.call(e,!!t)}},Se.cloneNode=function(e){return m(this,ke,[!!e])}),et)return et=!1;if(-2<ie.call(re,ee+n)+ie.call(re,J+n)&&p(e),!te.test(n)||-1<ie.call(ne,n))throw new Error("The type "+e+" is invalid");var n,l,a=function(){return s?g.createElement(f,n):g.createElement(f)},i=t||ue,s=ce.call(i,q),f=s?t[q].toUpperCase():n;return s&&-1<ie.call(re,J+f)&&p(f),l=re.push((s?ee:J)+n)-1,le=le.concat(le.length?",":"",s?f+'[is="'+e.toLowerCase()+'"]':f),a.prototype=oe[l]=ce.call(i,"prototype")?i.prototype:Ne(Se),le.length&&r(g.querySelectorAll(le),_),a},g.createElement=Xe=function(e,t){var n=M(t),r=n?ze.call(g,e,Oe(n)):ze.call(g,e),o=""+e,l=ie.call(re,(n?ee:J)+(n||o).toUpperCase()),i=-1<l;return n&&(r.setAttribute("is",n=n.toLowerCase()),i&&(i=a(o.toUpperCase(),n))),rt=!g.createElement.innerHTMLHelper,i&&F(r,oe[l]),r}),h.prototype={constructor:h,define:ve?function(e,t,n){if(n)T(e,t,n);else{var r=e.toUpperCase();Ce[r]={constructor:t,create:[r]},Ae.set(t,r),Ee.define(e,t)}}:T,get:ve?function(e){return Ee.get(e)||L(e)}:L,whenDefined:ve?function(e){return be.race([Ee.whenDefined(e),v(e)])}:v},!Ee||/^force/.test(t.type))H();else if(!t.noBuiltIn)try{!function(t,n,r){var o=new RegExp("^<a\\s+is=('|\")"+r+"\\1></a>$");if(n[q]="a",(t.prototype=Ne(Fe.prototype)).constructor=t,e.customElements.define(r,t,n),!o.test(g.createElement("a",{is:r}).outerHTML)||!o.test((new t).outerHTML))throw n}((function e(){return Reflect.construct(Fe,[],e)}),{},"document-register-element-a"+P)}catch(ot){H()}if(!t.noBuiltIn)try{if(ze.call(g,"a","a").outerHTML.indexOf("is")<0)throw{}}catch(lt){Oe=function(e){return{is:e.toLowerCase()}}}}(window),function(e,t){"use strict";function n(){var e=C.splice(0,C.length);for(We=0;e.length;)e.shift().call(null,e.shift())}function r(e,t){for(var n=0,r=e.length;n<r;n++)d(e[n],t)}function o(e){return function(t){Re(t)&&(d(t,e),le.length&&r(t.querySelectorAll(le),e))}}function l(e){var t=Be.call(e,"is"),n=e.nodeName.toUpperCase(),r=ie.call(re,t?ee+t.toUpperCase():J+n);return t&&-1<r&&!a(n,t)?-1:r}function a(e,t){return-1<le.indexOf(e+'[is="'+t+'"]')}function i(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,o=e.target,l=e[X]||2,a=e[$]||3;!rt||o&&o!==t||!t[B]||"style"===r||e.prevValue===e.newValue&&(""!==e.newValue||n!==l&&n!==a)||t[B](r,n===l?null:e.prevValue,n===a?null:e.newValue)}function u(e){var t=o(e);return function(e){C.push(t,e.target),We&&clearTimeout(We),We=setTimeout(n,1)}}function c(e){nt&&(nt=!1,e.currentTarget.removeEventListener(W,c)),le.length&&r((e.target||g).querySelectorAll(le),e.detail===x?x:_),Ve&&function(){for(var e,t=0,n=Ue.length;t<n;t++)ae.contains(e=Ue[t])||(n--,Ue.splice(t--,1),d(e,x))}()}function s(e,t){var n=this;Ge.call(n,e,t),w.call(n,{target:n})}function m(e,t,n){var r=t.apply(e,n),o=l(r);return-1<o&&F(r,oe[o]),n.pop()&&le.length&&function(e){for(var t,n=0,r=e.length;n<r;n++)F(t=e[n],oe[l(t)])}(r.querySelectorAll(le)),r}function f(e,t){De(e,t),N?N.observe(e,$e):(tt&&(e.setAttribute=s,e[R]=O(e),e[U](Y,w)),e[U](Q,i)),e[z]&&rt&&(e.created=!0,e[z](),e.created=!1)}function p(e){throw new Error("A "+e+" type is already registered")}function d(e,t){var n,r,o=l(e);-1<o&&!xe.call(e,"TEMPLATE")&&(I(e,oe[o]),o=0,t!==_||e[_]?t!==x||e[x]||(e[_]=!1,e[x]=!0,r="disconnected",o=1):(e[x]=!1,e[_]=!0,r="connected",o=1,Ve&&ie.call(Ue,e)<0&&Ue.push(e)),o&&(n=e[t+k]||e[r+k])&&n.call(e))}function h(){}function T(e,t,n){var r=n&&n[q]||"",o=t.prototype,l=Ne(o),a=t.observedAttributes||fe,i={prototype:l};Pe(l,z,{value:function(){if(ye)ye=!1;else if(!this[Me]){this[Me]=!0,new t(this),o[z]&&o[z].call(this);var e=Ce[Ae.get(t)];(!ve||e.create.length>1)&&E(this)}}}),Pe(l,B,{value:function(e){-1<ie.call(a,e)&&o[B]&&o[B].apply(this,arguments)}}),o[j]&&Pe(l,Z,{value:o[j]}),o[G]&&Pe(l,K,{value:o[G]}),r&&(i[q]=r),e=e.toUpperCase(),Ce[e]={constructor:t,create:r?[r,Oe(e)]:[e]},Ae.set(t,e),g[V](e.toLowerCase(),i),v(e),we[e].r()}function L(e){var t=Ce[e.toUpperCase()];return t&&t.constructor}function M(e){return"string"==typeof e?e:e&&e.is||""}function E(e){for(var t,n=e[B],r=n?e.attributes:fe,o=r.length;o--;)n.call(e,(t=r[o]).name||t.nodeName,null,t.value||t.nodeValue)}function v(e){return(e=e.toUpperCase())in we||(we[e]={},we[e].p=new be((function(t){we[e].r=t}))),we[e].p}function H(){Ee&&delete e.customElements,me(e,"customElements",{configurable:!0,value:new h}),me(e,"CustomElementRegistry",{configurable:!0,value:h});for(var t=y.get(/^HTML[A-Z]*[a-z]/),n=t.length;n--;function(t){var n=e[t];if(n){e[t]=function(e){var t,r;return e||(e=this),e[Me]||(ye=!0,t=Ce[Ae.get(e.constructor)],(e=(r=ve&&1===t.create.length)?Reflect.construct(n,fe,t.constructor):g.createElement.apply(g,t.create))[Me]=!0,ye=!1,r||E(e)),e},e[t].prototype=n.prototype;try{n.prototype.constructor=e[t]}catch(r){me(n,Me,{value:e[t]})}}}(t[n]));g.createElement=function(e,t){var n=M(t);return n?Xe.call(this,e,Oe(n)):Xe.call(this,e)},Ye||(et=!0,g[V](""))}var g=e.document,b=e.Object,y=function(e){var t,n,r,o,l=/^[A-Z]+[a-z]/,a=function(e,t){(t=t.toLowerCase())in i||(i[e]=(i[e]||[]).concat(t),i[t]=i[t.toUpperCase()]=e)},i=(b.create||b)(null),u={};for(n in e)for(o in e[n])for(i[o]=r=e[n][o],t=0;t<r.length;t++)i[r[t].toLowerCase()]=i[r[t].toUpperCase()]=o;return u.get=function(e){return"string"==typeof e?i[e]||(l.test(e)?[]:""):function(e){var t,n=[];for(t in i)e.test(t)&&n.push(t);return n}(e)},u.set=function(e,t){return l.test(e)?a(e,t):a(t,e),u},u}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!=typeof t&&(t={type:t||"auto"});var C,w,A,O,N,D,I,F,S,V="registerElement",P=1e5*e.Math.random()>>0,R="__"+V+P,U="addEventListener",_="attached",k="Callback",x="detached",q="extends",B="attributeChanged"+k,Z=_+k,j="connected"+k,G="disconnected"+k,z="created"+k,K=x+k,X="ADDITION",$="REMOVAL",Q="DOMAttrModified",W="DOMContentLoaded",Y="DOMSubtreeModified",J="<",ee="=",te=/^[A-Z][._A-Z0-9]*-[-._A-Z0-9]*$/,ne=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],re=[],oe=[],le="",ae=g.documentElement,ie=re.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},ue=b.prototype,ce=ue.hasOwnProperty,se=ue.isPrototypeOf,me=b.defineProperty,fe=[],pe=b.getOwnPropertyDescriptor,de=b.getOwnPropertyNames,he=b.getPrototypeOf,Te=b.setPrototypeOf,Le=!!b.__proto__,Me="__dreCEv1",Ee=e.customElements,ve=!/^force/.test(t.type)&&!!(Ee&&Ee.define&&Ee.get&&Ee.whenDefined),He=b.create||b,ge=e.Map||function(){var e,t=[],n=[];return{get:function(e){return n[ie.call(t,e)]},set:function(r,o){(e=ie.call(t,r))<0?n[t.push(r)-1]=o:n[e]=o}}},be=e.Promise||function(e){function t(e){for(r=!0;n.length;)n.shift()(e)}var n=[],r=!1,o={catch:function(){return o},then:function(e){return n.push(e),r&&setTimeout(t,1),o}};return e(t),o},ye=!1,Ce=He(null),we=He(null),Ae=new ge,Oe=function(e){return e.toLowerCase()},Ne=b.create||function e(t){return t?(e.prototype=t,new e):this},De=Te||(Le?function(e,t){return e.__proto__=t,e}:de&&pe?function(){function e(e,t){for(var n,r=de(t),o=0,l=r.length;o<l;o++)ce.call(e,n=r[o])||me(e,n,pe(t,n))}return function(t,n){do{e(t,n)}while((n=he(n))&&!se.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),Ie=e.MutationObserver||e.WebKitMutationObserver,Fe=e.HTMLAnchorElement,Se=(e.HTMLElement||e.Element||e.Node).prototype,Ve=!se.call(Se,ae),Pe=Ve?function(e,t,n){return e[t]=n.value,e}:me,Re=Ve?function(e){return 1===e.nodeType}:function(e){return se.call(Se,e)},Ue=Ve&&[],_e=Se.attachShadow,ke=Se.cloneNode,xe=Se.closest||function(e){for(var t=this;t&&t.nodeName!==e;)t=t.parentNode;return t},qe=Se.dispatchEvent,Be=Se.getAttribute,Ze=Se.hasAttribute,je=Se.removeAttribute,Ge=Se.setAttribute,ze=g.createElement,Ke=g.importNode,Xe=ze,$e=Ie&&{attributes:!0,characterData:!0,attributeOldValue:!0},Qe=Ie||function(e){tt=!1,ae.removeEventListener(Q,Qe)},We=0,Ye=V in g&&!/^force-all/.test(t.type),Je=!0,et=!1,tt=!0,nt=!0,rt=!0;if(Ie&&((S=g.createElement("div")).innerHTML="<div><div></div></div>",new Ie((function(e,t){if(e[0]&&"childList"==e[0].type&&!e[0].removedNodes[0].childNodes.length){var n=(S=pe(Se,"innerHTML"))&&S.set;n&&me(Se,"innerHTML",{set:function(e){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,e)}})}t.disconnect(),S=null})).observe(S,{childList:!0,subtree:!0}),S.innerHTML=""),Ye||(Te||Le?(I=function(e,t){se.call(t,e)||f(e,t)},F=f):F=I=function(e,t){e[R]||(e[R]=b(!0),f(e,t))},Ve?(tt=!1,function(){var e=pe(Se,U),t=e.value,n=function(e){var t=new CustomEvent(Q,{bubbles:!0});t.attrName=e,t.prevValue=Be.call(this,e),t.newValue=null,t[$]=t.attrChange=2,je.call(this,e),qe.call(this,t)},r=function(e,t){var n=Ze.call(this,e),r=n&&Be.call(this,e),o=new CustomEvent(Q,{bubbles:!0});Ge.call(this,e,t),o.attrName=e,o.prevValue=n?r:null,o.newValue=t,n?o.MODIFICATION=o.attrChange=1:o[X]=o.attrChange=0,qe.call(this,o)},o=function(e){var t,n=e.currentTarget,r=n[R],o=e.propertyName;r.hasOwnProperty(o)&&(r=r[o],(t=new CustomEvent(Q,{bubbles:!0})).attrName=r.name,t.prevValue=r.value||null,t.newValue=r.value=n[o]||null,null==t.prevValue?t[X]=t.attrChange=0:t.MODIFICATION=t.attrChange=1,qe.call(n,t))};e.value=function(e,l,a){e===Q&&this[B]&&this.setAttribute!==r&&(this[R]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",o)),t.call(this,e,l,a)},me(Se,U,e)}()):Ie||(ae[U](Q,Qe),ae.setAttribute(R,1),ae.removeAttribute(R),tt&&(w=function(e){var t,n,r,o=this;if(o===e.target){for(r in t=o[R],o[R]=n=O(o),n){if(!(r in t))return A(0,o,r,t[r],n[r],X);if(n[r]!==t[r])return A(1,o,r,t[r],n[r],"MODIFICATION")}for(r in t)if(!(r in n))return A(2,o,r,t[r],n[r],$)}},A=function(e,t,n,r,o,l){var a={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:o};a[l]=e,i(a)},O=function(e){for(var t,n,r={},o=e.attributes,l=0,a=o.length;l<a;l++)"setAttribute"!==(n=(t=o[l]).name)&&(r[n]=t.value);return r})),g[V]=function(e,t){if(n=e.toUpperCase(),Je&&(Je=!1,Ie?(N=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new Ie((function(r){for(var o,l,a,i=0,u=r.length;i<u;i++)"childList"===(o=r[i]).type?(n(o.addedNodes,e),n(o.removedNodes,t)):(l=o.target,rt&&l[B]&&"style"!==o.attributeName&&(a=Be.call(l,o.attributeName))!==o.oldValue&&l[B](o.attributeName,o.oldValue,a))}))}(o(_),o(x)),(D=function(e){return N.observe(e,{childList:!0,subtree:!0}),e})(g),_e&&(Se.attachShadow=function(){return D(_e.apply(this,arguments))})):(C=[],g[U]("DOMNodeInserted",u(_)),g[U]("DOMNodeRemoved",u(x))),g[U](W,c),g[U]("readystatechange",c),g.importNode=function(e,t){switch(e.nodeType){case 1:return m(g,Ke,[e,!!t]);case 11:for(var n=g.createDocumentFragment(),r=e.childNodes,o=r.length,l=0;l<o;l++)n.appendChild(g.importNode(r[l],!!t));return n;default:return ke.call(e,!!t)}},Se.cloneNode=function(e){return m(this,ke,[!!e])}),et)return et=!1;if(-2<ie.call(re,ee+n)+ie.call(re,J+n)&&p(e),!te.test(n)||-1<ie.call(ne,n))throw new Error("The type "+e+" is invalid");var n,l,a=function(){return s?g.createElement(f,n):g.createElement(f)},i=t||ue,s=ce.call(i,q),f=s?t[q].toUpperCase():n;return s&&-1<ie.call(re,J+f)&&p(f),l=re.push((s?ee:J)+n)-1,le=le.concat(le.length?",":"",s?f+'[is="'+e.toLowerCase()+'"]':f),a.prototype=oe[l]=ce.call(i,"prototype")?i.prototype:Ne(Se),le.length&&r(g.querySelectorAll(le),_),a},g.createElement=Xe=function(e,t){var n=M(t),r=n?ze.call(g,e,Oe(n)):ze.call(g,e),o=""+e,l=ie.call(re,(n?ee:J)+(n||o).toUpperCase()),i=-1<l;return n&&(r.setAttribute("is",n=n.toLowerCase()),i&&(i=a(o.toUpperCase(),n))),rt=!g.createElement.innerHTMLHelper,i&&F(r,oe[l]),r}),h.prototype={constructor:h,define:ve?function(e,t,n){if(n)T(e,t,n);else{var r=e.toUpperCase();Ce[r]={constructor:t,create:[r]},Ae.set(t,r),Ee.define(e,t)}}:T,get:ve?function(e){return Ee.get(e)||L(e)}:L,whenDefined:ve?function(e){return be.race([Ee.whenDefined(e),v(e)])}:v},!Ee||/^force/.test(t.type))H();else if(!t.noBuiltIn)try{!function(t,n,r){var o=new RegExp("^<a\\s+is=('|\")"+r+"\\1></a>$");if(n[q]="a",(t.prototype=Ne(Fe.prototype)).constructor=t,e.customElements.define(r,t,n),!o.test(g.createElement("a",{is:r}).outerHTML)||!o.test((new t).outerHTML))throw n}((function e(){return Reflect.construct(Fe,[],e)}),{},"document-register-element-a"+P)}catch(ot){H()}if(!t.noBuiltIn)try{if(ze.call(g,"a","a").outerHTML.indexOf("is")<0)throw{}}catch(lt){Oe=function(e){return{is:e.toLowerCase()}}}}(window);