(function(){return function e(t,n,i){function a(s,r){if(!n[s]){if(!t[s]){var d="function"==typeof require&&require
if(!r&&d)return d(s,!0)
if(o)return o(s,!0)
var u=new Error("Cannot find module '"+s+"'")
throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}}
t[s][0].call(l.exports,function(e){return a(t[s][1][e]||e)},l,l.exports,e,t,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)a(i[s])
return a}})()({1:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=o(e("./../obj/constants")),a=o(e("./../utils/common/dom"))
function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=function(e){27===e.keyCode&&this.destroy()}
return{create:function(t){var n=document,a=n.body,o=n.createElement("DIV"),s=n.createElement("IMG"),r=n.createElement("DIV"),d=n.createElement("DIV")
o.setAttribute("id",i.default.modalDivId),o.onclick=this.destroy,s.setAttribute("src",t),s.onclick=this.destory,d.appendChild(s),d.className="image-cell",r.appendChild(d),r.className="image-wrapper",o.appendChild(r),a.appendChild(o),window.addEventListener?window.addEventListener("keydown",e.bind(this),!1):window.attachEvent("keydown",e.bind(this),!1)},destroy:function(){var t=document,n=t.body,o=t.getElementById(i.default.modalDivId)
o&&(a.default.purge(o),n.removeChild(o)),window.removeEventListener?window.removeEventListener("keydown",e.bind(this)):window.detachEvent("keydown",e.bind(this))}}}.bind(void 0)()
n.default=s},{"./../obj/constants":7,"./../utils/common/dom":11}],2:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=o(e("./omni/transition")),a=o(e("./omni/activity"))
function o(e){return e&&e.__esModule?e:{default:e}}var s={init:function(){i.default.start(),a.default.start()},destroy:function(){i.default.stop(),a.default.stop()}}
n.default=s},{"./omni/activity":3,"./omni/transition":5}],3:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=o(e("./../../utils/frame")),a=o(e("./../../utils/common/dom"))
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var r=function(){s(this,this)
var e=null,t=null,n=null,o=function(){s(this,this),i.default.postMessage({action:"track_activity",payload:{seen:t}})}.bind(this),r=function(){s(this,this),t=(new Date).getTime()}.bind(this),d=function(e){s(this,this),a.default.unbindEvent("keypress",r),a.default.unbindEvent("mousemove",r),a.default.unbindEvent("click",r),e&&(a.default.bindEvent("keypress",r),a.default.bindEvent("mousemove",r),a.default.bindEvent("click",r))}.bind(this),u=function(){s(this,this)
var i=(new Date).getTime()
null===n||null===t||e&&(i<e||t<e||i-e<59e3||t>e&&t<i&&o()),e=i}.bind(this),l=function(){s(this,this),n&&clearInterval(n),n=null,t=null,e=null}.bind(this),f=function(){s(this,this),l(),d(!0),e=(new Date).getTime(),n=setInterval(u,6e4)}.bind(this),c=function(){s(this,this),t=(new Date).getTime(),o(),l(),d(!1)}.bind(this),h=function(){s(this,this),"hidden"===document.visibilityState&&c()}.bind(this)
return{start:function(){f(),a.default.bindEvent("focus",f),a.default.bindEvent("blur",c),a.default.bindEvent("beforeunload",c),a.default.bindEvent("visibilitychange",h)},stop:function(){c(),a.default.unbindEvent("focus",f),a.default.unbindEvent("blur",c),a.default.unbindEvent("beforeunload",c),a.default.unbindEvent("visibilitychange",h)}}}.bind(void 0)()
n.default=r},{"./../../utils/common/dom":11,"./../../utils/frame":15}],4:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i,a=(i=e("./../../utils/msg_handler"))&&i.__esModule?i:{default:i}
var o={track:function(e,t){a.default.subscribe("track_event",{eventName:e,data:t})}}
n.default=o},{"./../../utils/msg_handler":18}],5:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=o(e("./../../utils/common/observe")),a=o(e("./../../utils/frame"))
function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e,t,n,o=function(i){e=i.oldValue,t=i.newValue,n=i.title,a.default.postMessage({action:"track_location",payload:{pageUrl:i}})},s=function(){var i=window.location.href
t!==i&&(e=t,t=i,n=document.title,o({oldValue:e,newValue:t,title:n}))}
return{start:function(){t=window.location.href,o({newValue:t,title:document.title}),i.default.attach(window.history,"pushState",s),i.default.attach(window.history,"replaceState",s),window.addEventListener?(window.addEventListener("hashchange",s,!1),window.addEventListener("popstate",s,!1)):(window.attachEvent("hashchange",s,!1),window.attachEvent("popstate",s,!1))},stop:function(){e=t=void 0,i.default.detach(window.history,"pushState"),i.default.detach(window.history,"replaceState"),window.removeEventListener?(window.removeEventListener("hashchange",s),window.removeEventListener("popstate",s)):(window.detachEvent("hashchange",s),window.detachEvent("popstate",s))},track:o}}.bind(void 0)()
n.default=s},{"./../../utils/common/observe":13,"./../../utils/frame":15}],6:[function(e,t,n){"use strict"
var i,a,o=(i=e("./widget"))&&i.__esModule?i:{default:i}
if(window.fcWidget||(window.fcWidget=o.default),window.fcSettings)if("complete"===document.readyState){var s=window.fcSettings.onInit
s&&"function"==typeof s&&s(),o.default.init(window.fcSettings)}else document.onreadystatechange=(a=o.default,function(){if("complete"===document.readyState){var e=window.fcSettings.onInit
e&&"function"==typeof e&&e(),a.init(window.fcSettings)}})},{"./widget":23}],7:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
n.default={SAMPLE_TOKEN:"WEB_CHAT_TOKEN",frameDivId:"fc_frame",frameId:"fc_widget",pushFrameDivId:"fc_push_frame",pushFrameId:"fc_push",modalDivId:"fc_web_modal",classes:{fullscreenClass:"fc-widget-fullscreen"}}},{}],8:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=!1,t=!1,n=!1,i=!1,a=[],o={}
return{isLoaded:function(){return e},loaded:function(t){e=t},isInitialized:function(){return t},initialized:function(e){t=e},isOpened:function(){return n},opened:function(e){n=e},doOpen:function(){return i},openOnLoad:function(e){i=e},getTags:function(){return a},setTags:function(e){a=e},getFaqTags:function(){return o},setFaqTags:function(e){o=e},reset:function(){e=!1,t=!1,n=!1,i=!1,a=[],o={}}}}.bind(void 0)()
n.default=i},{}],9:[function(e,t,n){"use strict"
function i(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=function(){i(this,this)
var e=null,t=null,n=!1,a={},o={},s=["firstName","lastName","email","phone","phoneCountry","locale"]
return{getExternalId:function(){return e},setExternalId:function(t){e=t},getRestoreId:function(){return t},setRestoreId:function(e){t=e},setIdentifyByReferenceId:function(e){n=e},getIdentifyByReferenceId:function(){return n},getConfig:function(){return a},setConfig:function(e){a=e},getProperties:function(){return o},setProperties:function(e){e&&(s.forEach(function(t){i(this,this),e[t]&&(o[t]=e[t])}.bind(this)),e.meta&&this.setUserMeta(e.meta))},setFirstName:function(e){o.firstName=e},setLastName:function(e){o.lastName=e},setEmail:function(e){o.email=e},setPhone:function(e){o.phone=e},setPhoneCountry:function(e){o.phoneCountry=e},setUserMeta:function(e){if(o.meta=o.meta||{},e)for(var t in e)e.hasOwnProperty(t)&&(o.meta[t]=e[t])},setLocale:function(e){o.locale=e},reset:function(){e=null,t=null,a={},o={}},getJSON:function(){return{externalId:e,restoreId:t,customConfig:a,properties:o}}}}.bind(void 0)()
n.default=a},{}],10:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i,a=(i=e("./common/dom"))&&i.__esModule?i:{default:i}
var o=function(){return function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,this),{init:function(e){var t=document.createElement("script"),n=a.default.cdn_url()?a.default.cdn_url():e.host
t.type="text/javascript",t.src=n+"/js/co-browsing.js",(document.body?document.body:document.getElementsByTagName("head")[0]).appendChild(t),window.fc_cobrowse={host:e.host,locale:e.locale}}}}.bind(void 0)()
n.default=o},{"./common/dom":11}],11:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i,a=(i=e("../../../config/cb_environment"))&&i.__esModule?i:{default:i}
var o,s,r,d,u,l,f,c,h,g={url_domain:function(e){var t=document.createElement("a")
return t.href=e,t.origin},getElementStyle:function(e,t){return window.getComputedStyle(e)[t]},setAttr:function(e,t){for(var n in t)t.hasOwnProperty(n)&&e.setAttribute(n,t[n])
return e},remove:function(e){var t=document,n=t.body,i=t.getElementById(e)
i&&(this.purge(i),n.removeChild(i))},purge:function(e){var t,n,i,a=e.attributes
if(a)for(t=a.length-1;t>=0;t-=1)"function"==typeof e[i=a[t].name]&&(e[i]=null)
if(a=e.childNodes)for(n=a.length,t=0;t<n;++t)this.purge(e.childNodes[t])},cdn_url:function(){if(a.default&&a.default.config){var e=a.default.config.type,t=a.default.config.cdn
return t.protocol[e]+(t.enabled.forAssets?t.assets:"")+t.domain[e]}},bindEvent:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
window.addEventListener?window.addEventListener(e,t,n):window.attachEvent(e,t,n)},unbindEvent:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
window.removeEventListener?window.removeEventListener(e,t,n):window.detachEvent(e,t,n)},parseJSON:function(e){var t
if(e){try{t=JSON.parse(e)}catch(n){}return t}},storageAvailable:function(e){var t
try{var n="__storage_test__"
return(t=window.localStorage).setItem(n,n),t.removeItem(n),!0}catch(i){return i instanceof DOMException&&(22===i.code||1014===i.code||"QuotaExceededError"===i.name||"NS_ERROR_DOM_QUOTA_REACHED"===i.name)&&0!==t.length}}(),isPushSupportedByBrowser:function(){var e,t,n,i,a,o,s,r,d=!1,u=!1
i=window.chrome,a=window.navigator,o=a.vendor,s=a.userAgent.indexOf("OPR")>-1,r=a.userAgent.indexOf("Edge")>-1,null!=i&&"Google Inc."===o&&!1===s&&!1===r&&(e=!!(n=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./))&&parseInt(n[2],10))&&(d=e>=50),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(t=function(){var e=navigator.userAgent,t=e.indexOf("Firefox"),n=e.substring(t+8).split(".")
return!(!n||!n.length)&&parseInt(n[0],10)}())&&(u=t>=44)
var l="serviceWorker"in navigator,f=function(){var e=!1
try{ServiceWorkerRegistration&&"showNotification"in ServiceWorkerRegistration.prototype&&(e=!0)}catch(t){}return e}(),c="PushManager"in window
return l&&f&&c&&(d||u)},getAgent:(u=navigator.appVersion,l=navigator.userAgent,f=navigator.appName,c=""+parseFloat(u),h=parseInt(u,10),-1!==l.indexOf("Station")&&(d="Station"),-1!==(s=l.indexOf("Opera"))?(f="Opera",c=l.substring(s+6),-1!==(s=l.indexOf("Version"))&&(c=l.substring(s+8))):-1!==(s=l.indexOf("MSIE"))?(f="Microsoft Internet Explorer",c=l.substring(s+5)):-1!==(s=l.indexOf("Edge"))?(f="Edge",c=l.substring(s+5)):-1!==(s=l.indexOf("Trident"))?(f="Trident",c=l.substring(s+8)):-1!==(s=l.indexOf("Chrome"))?(f="Chrome",c=l.substring(s+7)):-1!==(s=l.indexOf("Safari"))?(f="Safari",c=l.substring(s+7),-1!==(s=l.indexOf("Version"))&&(c=l.substring(s+8))):-1!==(s=l.indexOf("Firefox"))?(f="Firefox",c=l.substring(s+8)):-1===(s=l.indexOf("Mobile"))||-1===l.indexOf("iPad")&&-1===l.indexOf("iPhone")&&-1===l.indexOf("iPod")&&-1===l.indexOf("wv")?(o=l.lastIndexOf(" ")+1)<(s=l.lastIndexOf("/"))&&(f=l.substring(o,s),c=l.substring(s+1),f.toLowerCase()===f.toUpperCase()&&(f=navigator.appName)):(f="WebView",c=l.substring(s+8)),-1!==(r=c.indexOf(";"))&&(c=c.substring(0,r)),-1!==(r=c.indexOf(" "))&&(c=c.substring(0,r)),h=parseInt(""+c,10),isNaN(h)&&(c=""+parseFloat(u),h=parseInt(u,10)),{name:f,appName:d,version:h,versionx:c,os:navigator.platform})}
n.default=g},{"../../../config/cb_environment":24}],12:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
n.default={isFunction:function(e){return!(!e||"function"!=typeof e)}}},{}],13:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e={}
return{attach:function(t,n,i){var a="".concat(n).concat("_fc_observer")
t[n]&&i&&(void 0===t[a]||t[a]!==i)&&(t[a]=i,function(t,n){e[n]=t[n],t[n]=function(){var i=e[n].apply(t,arguments),a=t["".concat(n).concat("_fc_observer")]
return"function"==typeof a&&a(),i}}(t,n))},detach:function(t,n){var i="".concat(n).concat("_fc_observer")
t[n]&&t[i]&&(t[i]=void 0,function(t,n){e[n]&&(delete t[n],t[n]=e[n],delete e[n])}(t,n))}}}.bind(void 0)()
n.default=i},{}],14:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i,a=(i=e("./common/js_util"))&&i.__esModule?i:{default:i}
var o=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e={},t=["widget:opened","widget:closed","widget:loaded","dialog:opened","dialog:closed","widget:destroyed","frame:statechange","user:statechange","user:created","user:cleared","user:authenticated","message:sent","message:received","unreadCount:notify","push:subscribed"]
return{clear:function(){e={}},valid:function(e){return!(!e||!t)&&-1!==t.indexOf(e)},subscribe:function(t,n){this.valid(t)&&(void 0===e[t]&&(e[t]=[]),e[t].push(n))},unsubscribe:function(t,n){if(this.valid(t)){var i,o=e&&e[t]
if(o)for(var s=0,r=o.length;s<r;s++)if(i=o[s],a.default.isFunction(i)&&(!n||i.name===n.name)){e[t].splice(s,1)
break}}},publish:function(t,n,i){if(this.valid(t)){var a=e&&e[t]
if(a)for(var o=function(e){return function(){n?e(n):e()}},s=0,r=a.length;s<r;s++){var d=o(a[s])
i?setTimeout(d,0):d()}}}}}.bind(void 0)()
n.default=o},{"./common/js_util":12}],15:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=s(e("./../obj/constants")),a=s(e("./../obj/user")),o=s(e("./common/dom"))
function s(e){return e&&e.__esModule?e:{default:e}}var r=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=null,t=null,n=null,s=null,r=null,d=null,u=!1,l=!1,f=null,c=!1,h=["get_user_uuid"]
return{getHost:function(){return r},getToken:function(){return t},getReferrer:function(){return n},getSiteId:function(){return s},getSettings:function(){return d},setSettings:function(e){u=!!((d=e).userAuthConfig&&d.userAuthConfig.jwtAuthEnabled&&d.userAuthConfig.strictModeEnabled),l=!(!d.userAuthConfig||!d.userAuthConfig.jwtAuthEnabled)},isJWTStrictMode:function(){return u},isJWTEnabled:function(){return l},getJWTAuthToken:function(){return f},setJWTAuthToken:function(e){f=e},isLoaded:function(){return c},loaded:function(e){c=e},loadingActions:function(){return h},init:function(e){t=e.token,n=e.referrer,r=e.host,s=e.siteId,u=!1,l=!1,f=e.jwtAuthToken,c=!1},reset:function(){t=n=r=s=u=l=f=c=void 0},getJSON:function(){return{token:t,referrer:n,host:r,siteId:s,jwtStrictMode:u,jwtEnabled:l,jwtAuthToken:f,loaded:c}},load:function(t,n){e=window.open(t,n)},postMessage:function(t){e&&e.postMessage(t,r)},dispatch:function(e,t){e&&t&&"function"==typeof e&&e(t)},unload:function(){this.postMessage({action:"push_subscribe_destroy"})},add:function(){var e=document,s=e.body,d=e.getElementById(i.default.frameDivId),u=e.createElement("IFRAME"),l=a.default.getConfig(),f=l&&l.cssNames
d&&"DIV"===d.tagName||(d=e.createElement("DIV"),s.appendChild(d)),o.default.setAttr(d,{id:i.default.frameDivId,class:f&&f.widget||""}),d.classList.add("fc_dn"),l&&l.headerProperty?("ltr"===l.headerProperty.direction&&d.classList.add("fc_l2r"),l.headerProperty.hideChatButton||d.classList.remove("fc_dn")):d.classList.remove("fc_dn"),o.default.setAttr(u,{id:i.default.frameId,name:i.default.frameId,title:"Chat",frameborder:"0"}),d.appendChild(u),this.load("".concat(r,"/widget/?token=").concat(t,"&referrer=").concat(n),i.default.frameId)},remove:function(t){o.default.remove(t),e=null},setFrameSize:function(){var e=this.getSettings(),t=a.default.getConfig()
if(null===e)return""
var n=e.widgetSize,o=!(!t||!t.fullscreen)&&t.fullscreen,s="fc-widget-normal",r=document.getElementById(i.default.frameDivId)
!0===o&&r.classList.add(i.default.classes.fullscreenClass),n&&n.length>0&&(s="fc-widget-"+n.toLowerCase()),r.classList.add(s)},setWidgetDisplayStyle:function(){var e=document.body,t=document.getElementById(i.default.frameDivId),n=o.default.getElementStyle(e,"display")
n&&-1!==["flex","grid"].indexOf(n)&&o.default.setAttr(t,{style:"display: ".concat(n)})}}}.bind(void 0)()
n.default=r},{"./../obj/constants":7,"./../obj/user":9,"./common/dom":11}],16:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=m(e("./common/dom")),a=m(e("./frame")),o=m(e("./events")),s=m(e("../obj/constants")),r=m(e("../obj/state")),d=m(e("../obj/user")),u=m(e("./msg_handler")),l=m(e("./push_frame")),f=m(e("../helpers/modal")),c=m(e("../helpers/omni")),h=m(e("./msg_processor")),g=m(e("./cb"))
function m(e){return e&&e.__esModule?e:{default:e}}var p,v={onMessageCB:function(){return p||(p=this.onMessage.bind(this))},onVisibilityChangeCB:function(){var e
return function(){return e||(e=this.onVisibilityChange.bind(this))}}(),subscribe:function(){window.addEventListener?(window.addEventListener("message",this.onMessageCB(),!1),window.addEventListener("focus",this.onVisibilityChangeCB(),!1),window.addEventListener("blur",this.onVisibilityChangeCB(),!1)):(window.attachEvent("onmessage",this.onMessageCB()),window.attachEvent("focus",this.onVisibilityChangeCB()),window.attachEvent("blur",this.onVisibilityChangeCB()))},unsubscribe:function(){window.removeEventListener?(window.removeEventListener("message",this.onMessageCB(),!1),window.removeEventListener("focus",this.onVisibilityChangeCB(),!1),window.removeEventListener("blur",this.onVisibilityChangeCB(),!1)):(window.detachEvent("onmessage",this.onMessageCB()),window.detachEvent("focus",this.onVisibilityChangeCB()),window.detachEvent("blur",this.onVisibilityChangeCB()))},onVisibilityChange:function(e){switch(e.type){case"focus":a.default.postMessage({action:"widget_focus"})
break
case"blur":a.default.postMessage({action:"widget_blur",payload:{title:document.title,location:window.location.href}}),l.default.postMessage({action:"widget_location",openWindow:!1,payload:window.location.href})}},onUserCreate:function(e){o.default.publish("user:created",e)},loadWidget:function(){if(!1===r.default.isInitialized()){r.default.initialized(!0)
var e=a.default.getJSON(),t=d.default.getProperties(),n=d.default.getConfig(),o=r.default.getTags(),s=r.default.getFaqTags()
if(e.externalId=d.default.getExternalId(),e.restoreId=d.default.getRestoreId(),e.identifyByReferenceId=d.default.getIdentifyByReferenceId(),t&&(e.properties=t),n&&(e.config=n),o&&(e.tags=o),s&&(e.faqTags=s),e.userAgent=i.default.getAgent,i.default.storageAvailable){var u=e.token,l=localStorage.getItem(u),f=e.siteId?"".concat(e.token,"_").concat(e.siteId):null,c=f?localStorage.getItem(f):null;(l||f&&c)&&(e.storage={},e.storage[u]=l||JSON.stringify({}),f&&(e.storage[f]=c||JSON.stringify({})))}a.default.setFrameSize(),a.default.setWidgetDisplayStyle(),a.default.postMessage({action:"load_widget",payload:e})}},unloadWidget:function(){l.default.isLoaded()&&l.default.unload(),r.default.reset(),d.default.reset(),c.default.destroy(),a.default.reset(),a.default.remove(s.default.frameDivId),this.unsubscribe(),o.default.publish("widget:destroyed",null,!0),o.default.clear()},updateFrameSettings:function(e){if(null!==a.default.getSettings()||void 0===e)return!1
a.default.setSettings(e)},onMessage:function(e){var t=e.origin||e.originalEvent.origin,n=d.default.getConfig(),m=n&&n.cssNames
if(t===a.default.getHost()||t===l.default.getHostOrigin()){var p=e.data,v=p&&p.action
if(this.updateFrameSettings(p.settingsPayload),v){var b=document.getElementById(s.default.frameDivId),w=m&&m.expanded||"expanded"
switch(v){case"push_subscribe_destroy_response":this.unloadWidget()
break
case"push_user_meta":o.default.publish("push:subscribed",p.data),a.default.postMessage(p)
break
case"toggle_dialog":p.data?o.default.publish("dialog:opened"):o.default.publish("dialog:closed")
break
case"notify_frame":var _=p.data,y=document.getElementById(s.default.frameDivId),E=m&&m.open||"fc-open"
"expand"===_?(y.removeAttribute("style"),y.classList.add("h-open-notify"),y.classList.add(E),y.classList.add(_)):"close"===_?(this.removeScrollEventAndStyleFromWidget(),y.removeAttribute("style"),y.classList.remove("h-open-notify"),y.classList.remove(E),y.classList.remove("expand")):(y.classList.add("h-open-notify"),y.classList.add(E))
break
case"resize_frame":var I=document.getElementsByTagName("BODY")[0],C=m&&m.open||"fc-open"
r.default.opened(p.isOpen),r.default.isOpened()?(this.removeScrollEventAndStyleFromWidget(),b.classList.add("h-open-container"),b.classList.add(C),o.default.publish("widget:opened"),I&&I.classList.add("fc-widget-open")):(b.removeAttribute("style"),b.classList.remove("h-open-container"),b.classList.remove(C),o.default.publish("widget:closed"),I&&I.classList.remove("fc-widget-open"))
break
case"toggle_frame":p.show?b.classList.remove("hide"):-1===b.className.trim().indexOf("hide")&&b.classList.add("hide")
break
case"push_frame_loaded":l.default.loaded(!0),l.default.setSource(e&&e.source),l.default.postMessage({action:"widget_location",openWindow:!1,payload:window.location.href}),a.default.postMessage({action:"widget_location",payload:{title:document.title,location:window.location.href}})
break
case"frame_state_change":var L=document.getElementById(s.default.frameDivId),k=p&&p.data,O=k&&k.frameState,M=a.default.getSettings()&&a.default.getSettings().enabledFeatures
o.default.publish("frame:statechange",p),"initialized"===O&&(a.default.isJWTEnabled()&&a.default.isJWTStrictMode()&&L.classList.add("fc_dn"),this.loadWidget(),M&&-1!==M.indexOf("COBROWSING")&&g.default.init({host:a.default.getHost(),locale:d.default.getProperties().locale})),"loaded"===O&&a.default.loaded(!0),"authenticated"!==O&&"not_authenticated"!==O||a.default.isJWTEnabled()&&a.default.isJWTStrictMode()&&(p.success?L.classList.remove("fc_dn"):304!==p.status&&this.unloadWidget())
break
case"widget_loaded":r.default.loaded(!0),o.default.publish("widget:loaded"),l.default.isLoaded()||l.default.init({host:p.pushDomain+"?ref="+btoa(window.location.origin),hostOrigin:i.default.url_domain(p.pushDomain),appLogoPath:p.appLogoPath}),r.default.doOpen()&&a.default.postMessage({action:"open_chat"}),a.default.postMessage({action:"widget_location",payload:{title:document.title,location:window.location.href}})
break
case"datastore_loaded":a.default.postMessage({action:"load_rules"})
break
case"rules_loaded":c.default.init(),h.default.start()
break
case"enlarge_image":f.default.create(p.picUrl)
break
case"expand_all":document.getElementById(s.default.frameDivId).classList.add("expanded-modal"),document.getElementById(s.default.frameDivId).classList.add(w)
break
case"collapse_all":document.getElementById(s.default.frameDivId).classList.remove("expanded-modal"),document.getElementById(s.default.frameDivId).classList.remove(w)
break
case"user_state_change":o.default.publish("user:statechange",p)
break
case"user_authenticated":o.default.publish("user:authenticated",p)
break
case"user_created":var P=p.data
if(r.default.isLoaded())P&&d.default.setRestoreId(P.restoreId),this.onUserCreate(p)
else if(p.success){var T=P&&P.externalId,S=P&&P.restoreId,x=d.default.getExternalId()
x?x===T&&(d.default.setRestoreId(S),this.onUserCreate(p)):this.onUserCreate(p)}else this.onUserCreate(p)
break
case"user_cleared":o.default.publish("user:cleared"),l.default.postMessage({action:"clear:subscription",openWindow:!1}),d.default.reset()
break
case"message_sent":o.default.publish("message:sent",p)
break
case"message_received":o.default.publish("message:received",p)
break
case"ask_permission":l.default.postMessage({action:"ask:permission",openWindow:!0})
break
case"clear_subscription":l.default.postMessage({action:"clear:subscription",openWindow:!1})
break
case"unread_count_notify":o.default.publish("unreadCount:notify",p.data)
break
case"message_from_agent":o.default.publish("message:received",p.data)
break
case"message_from_user":o.default.publish("message:sent",p.data)
break
case"set_storage_item":if(i.default.storageAvailable){var A=p.data
A&&A.key&&A.value&&localStorage.setItem(A.key,JSON.stringify(A.value))}break
case"remove_storage_item":if(i.default.storageAvailable){var N=p.data
N&&N.key&&localStorage.removeItem(N.key)}break
case"add_reply_dialog_absolute_class_to_frame":r.default.isOpened()||this.addScrollEventAndStyleFromWidget()
break
case"remove_reply_dialog_absolute_class_to_frame":this.removeScrollEventAndStyleFromWidget()
break
case"startScreenShare":window.fc_cobrowse&&window.fc_cobrowse.allowScreenShare(e)
break
default:u.default.publish(v,p)}}}},scrollHandlerForPositionCalculation:function(){var e=document.getElementById(s.default.frameDivId),t=document.getElementsByTagName("BODY")[0],n=screen.availHeight,i=.42
0!==window.orientation&&(n=screen.availWidth),n<=375?i=.51:n<=414?i=.29:n<=568?i=.365:n<=647?i=.468:n<=736&&(i=.486)
var a=t.scrollTop+n*i-e.offsetHeight
a+e.offsetHeight>=t.scrollHeight&&(a=t.scrollHeight-e.offsetHeight),e.style.top=Math.floor(a)+"px"},removeScrollEventAndStyleFromWidget:function(){var e=document.getElementById(s.default.frameDivId)
i.default.unbindEvent("scroll",this.scrollHandlerForPositionCalculation),e.classList.remove("fc_reply_position_absolute"),e.style.top="unset"},addScrollEventAndStyleFromWidget:function(){document.getElementById(s.default.frameDivId).classList.add("fc_reply_position_absolute"),i.default.bindEvent("scroll",this.scrollHandlerForPositionCalculation)},syncResponse:function(e,t){var n=e&&e.status
n?a.default.dispatch(t,{success:200===n,status:n}):a.default.dispatch(t,{success:!1,status:400})}}
n.default=v},{"../helpers/modal":1,"../helpers/omni":2,"../obj/constants":7,"../obj/state":8,"../obj/user":9,"./cb":10,"./common/dom":11,"./events":14,"./frame":15,"./msg_handler":18,"./msg_processor":19,"./push_frame":21}],17:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i,a=(i=e("./msg_handler"))&&i.__esModule?i:{default:i}
var o={send:function(e,t,n){t&&"function"==typeof t&&(n=t,t=null),a.default.subscribe(e,t,n)}}
n.default=o},{"./msg_handler":18}],18:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=s(e("./frame")),a=s(e("./../obj/state")),o=s(e("./queue"))
function s(e){return e&&e.__esModule?e:{default:e}}var r=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e={}
return{subscribe:function(t,n,s){a.default.isLoaded()||i.default.isLoaded()&&-1!==i.default.loadingActions().indexOf("get_user_uuid")?(e[t+"_ack"]=s,i.default.postMessage({action:t,payload:n})):o.default.enque({action:t,payload:n,handler:s})},publish:function(t,n){i.default.dispatch(e[t],{success:n.success,status:n.status,data:n.data})}}}.bind(void 0)()
n.default=r},{"./../obj/state":8,"./frame":15,"./queue":22}],19:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=o(e("./queue")),a=o(e("./msg_handler"))
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var r={start:function(){i.default.isEmpty()||i.default.isLocked()||(i.default.toggleLock(!0),this.run())},run:function(){var e=i.default.deque()
e?this.process(e):i.default.toggleLock(!1)},process:function(e){e.handler?a.default.subscribe(e.action,e.payload,function(t){s(this,this),"function"==typeof e.handler&&e.handler(t),this.run()}.bind(this)):(a.default.subscribe(e.action,e.payload),setTimeout(function(){s(this,this),this.run()}.bind(this),0))}}
n.default=r},{"./msg_handler":18,"./queue":22}],20:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i,a=(i=e("./msg_handler"))&&i.__esModule?i:{default:i}
var o={send:function(e,t){return new Promise(function(n,i){a.default.subscribe(e,t,function(e){var t=e&&e.status,a=e&&e.success
200===t||a?n(e):i(e)})})}}
n.default=o},{"./msg_handler":18}],21:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=o(e("./common/dom")),a=o(e("../obj/constants"))
function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=null,t=null,n=null,o=!1,s=null
return{isLoaded:function(){return o},loaded:function(e){o=e},getSource:function(){return s},setSource:function(e){s=e},getHost:function(){return e},getHostOrigin:function(){return t},getLogoPath:function(){return n},init:function(i){e=i.host,t=i.hostOrigin,n=i.appLogoPath,this.load()},reset:function(){e=null,t=null,n=null,o=!1,s=null},postMessage:function(t){t.openWindow?window.open(e+"&action="+btoa(t.action)+"&appLogoPath="+btoa(n),"_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"):o&&this.post({action:t.action,payload:t.payload})},post:function(e){s.postMessage(e,t)},add:function(){var t=document,n=t.body,o=t.getElementById(a.default.pushFrameDivId),s=t.createElement("IFRAME")
o&&"DIV"===o.tagName||(o=t.createElement("DIV"),n.appendChild(o)),o.setAttribute("id",a.default.pushFrameDivId),i.default.setAttr(s,{id:a.default.pushFrameId,src:e,frameborder:"0"}),o.appendChild(s)},load:function(){i.default.isPushSupportedByBrowser()&&this.add()},unload:function(){i.default.remove(a.default.pushFrameDivId),this.reset()}}}.bind(void 0)()
n.default=s},{"../obj/constants":7,"./common/dom":11}],22:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=[],t=!1
return{enque:function(n){t||(void 0===e&&(e=[]),e.push(n))},deque:function(){if(e&&e.length)return e.shift()},toggleLock:function(e){t=e},isLocked:function(){return t},isEmpty:function(){return!e||!e.length}}}.bind(void 0)()
n.default=i},{}],23:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=v(e("./obj/constants")),a=v(e("./obj/state")),o=v(e("./obj/user")),s=v(e("./utils/msg_promise")),r=v(e("./utils/msg_callback")),d=v(e("./utils/msg_handler")),u=v(e("./utils/common/dom")),l=v(e("./utils/frame")),f=v(e("./utils/message")),c=v(e("./utils/events")),h=v(e("./utils/push_frame")),g=v(e("./helpers/omni/analytics")),m=v(e("./helpers/omni/transition")),p=v(e("./helpers/omni"))
function v(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var w=function(){b(this,this)
return{init:function(e){var t,n,s,r,d=-1!==["Chrome","Firefox","Safari","Edge","Trident","WebView"].indexOf(u.default.getAgent.name),h=-1!==["Station"].indexOf(u.default.getAgent.appName)
if(d&&!h&&!this.isInitialized()){var g=e&&e.token
g&&g.toUpperCase()!==i.default.SAMPLE_TOKEN&&(window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),e.referrer=btoa(window.location.origin),void 0===e.open&&(e.open=!1),r=e,a.default.reset(),o.default.reset(),p.default.destroy(),f.default.unsubscribe(),l.default.init({host:r.host.trim(),token:r.token.trim(),referrer:r.referrer,siteId:r.siteId,jwtAuthToken:r.jwtAuthToken}),a.default.openOnLoad(r.open),r.identifyByReferenceId&&o.default.setIdentifyByReferenceId(!0),r.externalId&&(o.default.setExternalId(r.externalId),o.default.setRestoreId(r.restoreId)),r.tags&&r.tags.length&&a.default.setTags(r.tags),r.faqTags&&a.default.setFaqTags(r.faqTags),o.default.setProperties({firstName:r.firstName,lastName:r.lastName,email:r.email,phone:r.phone,phoneCountry:r.phoneCountryCode,locale:r.locale,meta:r.meta}),o.default.setConfig(r.config),r.onLoad&&c.default.subscribe("widget:loaded",r.onLoad),l.default.add(),f.default.subscribe(),t=document,n=t.createElement("link"),s=u.default.cdn_url()?u.default.cdn_url():l.default.getHost(),n.href=s+"/css/widget.css?t="+(new Date).getTime(),n.rel="stylesheet",t.getElementsByTagName("head")[0].appendChild(n))}},destroy:function(){h.default.unload(),l.default.unload()},isOpen:function(){return a.default.isOpened()},isInitialized:function(){return!!l.default.getToken()},isLoaded:function(){return a.default.isLoaded()},on:function(e,t){c.default.subscribe(e,t)},off:function(e,t){c.default.unsubscribe(e,t)},open:function(e){e?d.default.subscribe("open_channel",e):d.default.subscribe("open_chat")},close:function(){d.default.subscribe("close_chat")},show:function(){d.default.subscribe("show_chat")},hide:function(){d.default.subscribe("hide_chat")},setTags:function(e){a.default.isLoaded()&&(e&&e.length?a.default.setTags(e):a.default.setTags([]),d.default.subscribe("set_tags",{tags:a.default.getTags(),force:!0}))},setFaqTags:function(e){a.default.isLoaded()&&(e?a.default.setFaqTags(e):a.default.setFaqTags({}),d.default.subscribe("set_faq_tags",{faqTags:a.default.getFaqTags(),force:!0}))},setExternalId:function(e,t){var n={}
if(e){if("string"==typeof e?n.externalId=e:n=e,!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("set_external_id",n)
r.default.send("set_external_id",n,t)}},setConfig:function(e){var t=document.getElementById(i.default.frameDivId)
t&&e&&(void 0!==e.fullscreen&&(t.classList.remove(i.default.classes.fullscreenClass),!0===e.fullscreen&&t.classList.add(i.default.classes.fullscreenClass)),e.headerProperty&&(void 0!==e.headerProperty.direction&&(t.classList.remove("fc_l2r"),"ltr"===e.headerProperty.direction&&t.classList.add("fc_l2r")),void 0!==e.headerProperty.hideChatButton&&(t.classList.remove("fc_dn"),e.headerProperty.hideChatButton&&t.classList.add("fc_dn")))),d.default.subscribe("set_custom_config",e)},user:{get:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("get_user")
r.default.send("get_user",e)},isExists:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("user_exists")
r.default.send("user_exists",e)},update:function(e,t){if(e.jwtAuthToken?l.default.setJWTAuthToken(e.jwtAuthToken):(e.firstName&&o.default.setFirstName(e.firstName),e.lastName&&o.default.setLastName(e.lastName),e.email&&o.default.setEmail(e.email),e.phone&&o.default.setPhone(e.phone),e.phoneCountry&&o.default.setPhoneCountry(e.phoneCountry),e.meta&&o.default.setUserMeta(e.meta)),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("update_user",e)
r.default.send("update_user",e,t)},setProperties:function(e,t){var n={}
if(e.jwtAuthToken?(l.default.setJWTAuthToken(e.jwtAuthToken),n=e):(e.firstName&&(n.firstName=e.firstName,e.firstName=void 0),e.lastName&&(n.lastName=e.lastName,e.lastName=void 0),e.email&&(n.email=e.email,e.email=void 0),e.phone&&(n.phone=e.phone,e.phone=void 0),e.phoneCountryCode&&(n.phoneCountry=e.phoneCountryCode,e.phoneCountryCode=void 0),e.locale&&(n.locale=e.locale,e.locale=void 0),n.meta=e,o.default.setProperties(n)),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("set_user_properties",n)
r.default.send("set_user_properties",n,t)},setFirstName:function(e,t){var n={}
if(e){if("string"==typeof e?n.firstName=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setLastName:function(e,t){var n={}
if(e){if("string"==typeof e?n.lastName=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setEmail:function(e,t){var n={}
if(e){if("string"==typeof e?n.email=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setPhone:function(e,t){var n={}
if(e){if("string"==typeof e?n.phone=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setPhoneCountryCode:function(e,t){var n={}
if(e){if("string"==typeof e?n.phoneCountryCode=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setMeta:function(e,t){if(!t)return this.setProperties(e)
this.setProperties(e,t)},setLocale:function(e,t){var n={}
if(e){if("string"==typeof e?n.locale=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},clear:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("reset_user")
r.default.send("reset_user",e)},create:function(e,t){if("function"==typeof e&&(t=e,e=null),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("create_user",e)
r.default.send("create_user",e,t)},getUUID:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("get_user_uuid")
r.default.send("get_user_uuid",e)},generateUUID:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("generate_user_uuid")
r.default.send("generate_user_uuid",e)}},track:g.default.track,trackPage:function(e,t){m.default.track({newValue:e,title:t,force:!0})},authenticate:function(e){if(l.default.isJWTEnabled()){var t=function(){b(this,this),l.default.setJWTAuthToken(e),l.default.postMessage({action:"authenticate_user",payload:e})}.bind(this),n=function(n){b(this,this),n&&200===n.status?this.user.update({jwtAuthToken:e}):t()}.bind(this)
this.isLoaded()?void 0===window.Promise?this.user.get(n):this.user.get().then(n,n):t()}}}}.bind(void 0)()
n.default=w},{"./helpers/omni":2,"./helpers/omni/analytics":4,"./helpers/omni/transition":5,"./obj/constants":7,"./obj/state":8,"./obj/user":9,"./utils/common/dom":11,"./utils/events":14,"./utils/frame":15,"./utils/message":16,"./utils/msg_callback":17,"./utils/msg_handler":18,"./utils/msg_promise":20,"./utils/push_frame":21}],24:[function(e,t,n){n.config={type:"production",cdn:{enabled:{forAssets:!1,forApi:!1},assets:"assetscdn-",api:"apicdn-",domain:{production:"wchat.freshchat.com",staging:"webchat-msgreen.freshpori.com",local:"localhost:8580"},subDomain:"",protocol:{local:"http://",production:"https://",staging:"https://"}}}},{}]},{},[6])
