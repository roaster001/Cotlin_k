!function(){"use strict";function r(t){return t}var o,e,t=window,l=t.document,n=t.Boolean,u=t.Array,d=t.Object,s=t.String,f=t.Date,a=t.Math,p=t.setTimeout,h=t.clearTimeout,i=t.encodeURIComponent,c=t.decodeURIComponent,g=t.btoa,y=t.unescape,w=t.TypeError,m=t.navigator,_=t.location,v=t.XMLHttpRequest,b=function(n){return function(e,t){return arguments.length<2?function(t){return n.call(null,t,e)}:n.call(null,e,t)}},k=((A=b(function(t,e){return typeof t===e}))("boolean"),A("number"),A("string")),C=A("function"),S=A("object"),M=(A("undefined"),function(t){return!(null===t)&&S(t)}),A=((x=b(function(t,e){return t&&t[e]}))("length"),x("prototype")),E=b(function(t,e){return t instanceof e}),j=A(u),O=j.slice,z=b(function(t,e){return t&&j.forEach.call(t,e),t}),R=b(function(t,e){return O.call(t,e)}),T=(A(Function),e=function(t,e){return t.bind(e)},o=function(t){if(C(t))return e.apply(null,arguments);throw new w("not a function")},b(function(t,e){var n=arguments;return k(t)&&((n=R(n,0))[0]=e[t]),o.apply(null,n)})),I=b(function(e,n){var t;return z((t=e,d.keys(t||{})),function(t){return n(e[t],t,e)}),e}),x=b(function(n,t){return I(t,function(t,e){return n[e]=t}),n}),q=function(t){return console.warn("Promise error:",t)},P=function(t){return E(t,N)};function N(t){if(!P(this))throw"new Promise";this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],U(t,this)}function B(n,r){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,p(function(){var t,e=1===n._state?r.onFulfilled:r.onRejected;if(null!==e){try{t=e(n._value)}catch(t){return void F(r.promise,t)}L(r.promise,t)}else(1===n._state?L:F)(r.promise,n._value)})):n._deferreds.push(r)}function L(e,t){try{if(t===e)throw new w("promise resolved by itself");if(M(t)||C(t)){var n=t.then;if(P(t))return e._state=3,e._value=t,void D(e);if(C(n))return void U(T(n,t),e)}e._state=1,e._value=t,D(e)}catch(t){F(e,t)}}function F(t,e){t._state=2,t._value=e,D(t)}function D(e){var t;2===e._state&&0===e._deferreds.length&&p(function(){e._handled||q(e._value)}),t=e._deferreds,z(function(t){return B(e,t)})(t),e._deferreds=null}function J(t,e,n){this.onFulfilled=C(t)?t:null,this.onRejected=C(e)?e:null,this.promise=n}function U(t,e){var n=!1;try{t(function(t){n||(n=!0,L(e,t))},function(t){n||(n=!0,F(e,t))})}catch(t){if(n)return;n=!0,F(e,t)}}b=N.prototype,x({catch:function(t){return this.then(null,t)},then:function(t,e){var n=new N(r);return B(this,new J(t,e,n)),n},finally:function(e){return this.then(function(t){return N.resolve(e()).then(function(){return t})},function(t){return N.resolve(e()).then(function(){return N.reject(t)})})}})(b),N.all=function(c){return new N(function(r,o){if(!c||void 0===c.length)throw new w("Promise.all accepts an array");if(0===c.length)return r([]);var i=c.length,t=c;z(function e(t,n){try{if((M(t)||C(t))&&C(t.then))return t.then(function(t){return e(t,n)},o);c[n]=t,0==--i&&r(c)}catch(t){o(t)}})(t)})},N.resolve=function(e){return P(e)?e:new N(function(t){return t(e)})},N.reject=function(n){return new N(function(t,e){return e(n)})},N.race=function(r){return new N(function(e,n){var t=r;return z(function(t){return t.then(e,n)})(t)})};var Y=(t=t.Promise)&&C(A(t).then)&&t||N;function W(t,e){if(null==t)return{};var n,r=function(t,e){if(null==t)return{};for(var n,r={},o=Object.keys(t),i=0;i<o.length;i++)n=o[i],0<=e.indexOf(n)||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(t),i=0;i<o.length;i++)n=o[i],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n]);return r}function G(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,o,i=[],c=!0,a=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(t){a=!0,o=t}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return H(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}C(Y.prototype.finally)||(Y.prototype.finally=N.prototype.finally);var K,V,Q,Z,X,$,tt,et,nt,rt=window.rzpApi||"https://api.razorpay.com/v1/",ot="https://checkout.razorpay.com/v1/magic-checkout.js",it="https://lumberjack.razorpay.com/v1/track",ct=window.rzpCheckoutSrc||ot,at=window.magicShopifySrc||"https://magic-plugins.razorpay.com/shopify/magic-shopify.js",ut=window.rzpMode||"live",lt=!1,dt=function(){var t="";try{t=window.Shopify.shop.split(".")[0]}catch(t){fe("shop_id_read_fail",{error:null==t?void 0:t.message})}return t}(),st=null,ft=l.currentScript.getAttribute("data-delay"),pt=l.currentScript.getAttribute("data-showcoupons"),ht=l.currentScript.getAttribute("data-email"),gt=l.currentScript.getAttribute("data-phonenumber"),yt=l.currentScript.getAttribute("data-gtmctp")||"",wt=l.querySelector("script[gtag-conversion-id]"),mt="true"===l.currentScript.getAttribute("data-useshopid"),_t="true"===l.currentScript.getAttribute("enable_webengage_analytics"),vt="false"!==l.currentScript.getAttribute("enable_ga4_analytics"),bt="false"!==l.currentScript.getAttribute("data-deprecate"),kt=l.currentScript.getAttribute("data-deprecateconfigs")||"{}",Ct="",St=window.MagicAnalytics,Mt=window.MagicMxAnalytics,At=null,Et=null,jt=null,Ot=!1,zt=!1,Rt={},Tt=!1,It=window.location.origin+window.location.pathname+".js",xt=!1,qt=!1,Pt=new Y(function(t,e){$=t,tt=e}),Nt=new Y(function(t){mt?et=t:t()}),Bt=new Y(function(t){return nt=t}),Lt={},Ft=ge(),Dt="razorpay-magic-scroll";function Jt(){var t,e;null!==l.querySelector('script[src*="/magic-shopify.js"]')||(wt=l.querySelector("script[gtag-conversion-id]"),t=function(){try{return JSON.parse(kt)}catch(t){pe(t)}}(),e={email:ht,phone:gt,config:{merchant_key:st,checkoutSrc:ct,delay:ft,gTagId:(null===wt||void 0===wt?void 0:wt.getAttribute("gtag-conversion-id"))||"",gtagLabel:(null===wt||void 0===wt?void 0:wt.getAttribute("gtag-conversion-label"))||"",shouldUseShopId:mt,razorpayMagicBtnConfig:window.RazorpayMagicBtnConfig||{},checkoutOptions:{show_coupons:pt,enable_moengage_analytics:window.enableMoengageMagic,config:window.configForMagicCheckout,name:window.nameForMagicCheckout},enableGa4:vt,ga4id:null===wt||void 0===wt?void 0:wt.getAttribute("data-ga4-id"),ga4CustomEventName:"true"===(null===wt||void 0===wt?void 0:wt.getAttribute("data-ga4-custom-event-names")),gtmClevertapId:yt||"",isWebEngageEnabled:_t,cartConfig:{enableMagicBtn:!!l.querySelectorAll('magic-checkout-btn:not([page-type="product"])').length,status:"live"},productConfig:{enableMagicBtn:!!l.querySelectorAll('magic-checkout-btn[page-type="product"]').length,status:"live"},isDeprecateMode:!0}},t&&(e=function t(e,n){if("object"!=typeof e||"object"!=typeof n)return n;var r={...e};for(var o in n)n.hasOwnProperty(o)&&(e.hasOwnProperty(o)?r[o]=t(e[o],n[o]):r[o]=n[o]);return r}(e,{...e,config:t})),e=l.createRange().createContextualFragment((e=JSON.stringify(e),'\n    <div id="magic-checkout-data-container"><script src='+at+' defer><\/script><script id="RazorpayMagicCheckoutConfig" type="application/json">'+(e||"{}")+"<\/script></div>\n  ")),l.body.append(e))}function Ut(t){try{var e=("; "+l.cookie).split("; "+t+"=");return 2===(null==e?void 0:e.length)?e[1].split(";")[0]:""}catch(t){return fe("exception:cookie_parsing_failed",{}),""}}function Yt(){fe("evaluate_utm_params");var t=Ut("_shopify_sa_p");if(t){fe("shopify_analytics_present",{cookie:"_shopify_sa_p"});t=function(t){try{var e=t.split("&").map(function(t){return t.split("=")}).reduce(function(e,n){try{e[n[0]]=c(n[1])}catch(t){e[n[0]]=n[1]}return e},{});return fe("utm_parsing_finished",{keys:d.keys(e)}),e}catch(t){return fe("utm_parsing_failed",{error:null==t?void 0:t.message}),{}}}(c(t));return{utm_source:t.utm_source||null,utm_medium:t.utm_medium||null,utm_campaign:t.utm_campaign||null,utm_term:t.utm_term||null,utm_content:t.utm_content||null,gclid:t.gclid||null,fbclid:t.fbclid||null,wbraid:t.wbraid||null,gbraid:t.gbraid||null,ref:t.ref||null}}fe("shopify_analytics_empty",{cookie:"_shopify_sa_p"})}function Wt(){try{var t,e=Ut("_shopify_y");e||(zt=Ht(8)+"-"+Ht(4)+"-"+Ht(4)+"-"+Ht(4)+"-"+Ht(12)),Rt={em:"",fn:"",ln:"",ph:"",external_id:zt||e,ge:"",db:"",ct:"",st:"",zp:"",country:""},null===(t=window.fbq)||void 0===t||null!==(e=t.getState)&&void 0!==e&&e.call(t).pixels.forEach(function(t){var e,n;return null===(e=(n=window).fbq)||void 0===e?void 0:e.call(n,"init",t.id,Rt)})}catch(t){fe("exception:fb_capi_init_failed")}}function Gt(){var t=Kt(),e=(t||{}).event_source_url;e&&(null==t||delete t.event_source_url);var n=function(){var t={},e=l.cookie.split("; ");t.session_ids={};for(var n=0;n<e.length;n++){var r=G(e[n].split("="),2),o=r[0],r=r[1];o.startsWith("_ga_")?t.session_ids[o]=r:"_ga"===o&&(t.client_id=r)}return t}(),r=Yt();return{fb_analytics:t,ga4:n,google_ads:{gclid:(null==r?void 0:r.gclid)||"",wbraid:(null==r?void 0:r.wbraid)||"",gbraid:(null==r?void 0:r.gbraid)||""},source_url:e||""}}function Ht(t){chars="0123456789abcdefghijklmnopqrstuvwxyz";for(var e="",n=t;0<n;--n)e+=chars[a.floor(a.random()*chars.length)];return e}function Kt(){var t=Ut("_fbc");return!t&&window.location.search.includes("fbclid=")&&(t="fb.1."+ +new f+"."+window.location.search.split("fbclid=")[1]),{external_id:zt||Ut("_shopify_y"),fbp:Ut("_fbp"),fbc:t,event_source_url:window.location.origin+window.location.pathname}}mt&&!bt&&window.addEventListener("shopify.merchant_key",function(t){t.detail.key&&(st=t.detail.key,window.Razorpay.setConfig("merchant_key",st)),null!==et&&void 0!==et&&et()}),bt||(window.addEventListener("magic.exp_details",function(t){nt()}),window.addEventListener("magic.analytics_configs",function(t){t={...t.detail};Lt={...t.analyticsConfigs}}));var Vt=5,Qt=0;function Zt(){window.Razorpay||(window.Razorpay={}),"object"==typeof window.Razorpay&&(window.Razorpay.config||(window.Razorpay.config={}),mt&&(window.Razorpay.config.magic_shop_id=dt,window.Razorpay.config.mode=ut),window.Razorpay.config.merchant_key=st),Tt=!0;var t=l.createElement("script");t.src=ct,t.id="checkout-js",t.onload=function(){K=window.Razorpay.enableLite,$(),window.setTimeout(function(){return nt()},1e4)},t.onerror=function(){if(Vt<=++Qt)return fe("exception:checkout_sdk_load_failed"),void tt();p(function(){Zt()},500)},l.body.appendChild(t)}function Xt(){var t,r,n,e;st=null===(e=l.getElementById("rzpKey"))||void 0===e?void 0:e.value,bt?Jt():(function(){try{if(!/iPhone/g.test(m.userAgent))return;var t=l.createRange().createContextualFragment("\n    <style> ."+Dt+" { overflow: hidden !important; } </style>\n  ");l.head.append(t)}catch(t){}}(),st||mt?(ft?"lazy"!==ft&&p(Zt,ft):Zt(),function(t){var e=de(le);function n(){var t;4===this.readyState&&((t=JSON.parse(this.responseText)).token&&0<t.items.length&&e(t.total_price),this.removeEventListener("load",n))}v.prototype.open=function(){ue(arguments[1])&&(xt=!0,this.addEventListener("load",n)),t.apply(this,arguments)}}(v.prototype.open),t=window.fetch,r=de(le),window.fetch=function(n){return ue(n)&&(xt=!0),t.apply(this,arguments).then(function(t){var e=t.headers.get("Content-Type");return"string"==typeof e&&(e.includes("text/javascript")||e.includes("application/json"))&&"string"==typeof n&&t.clone().json().then(function(t){t.status&&200!==t.status||ue(n)&&t.token&&0<t.items.length&&r(t.total_price)}).catch(function(t){return console.error(t)}),t})},(e=l.querySelectorAll("magic-checkout-btn")).length&&(window.RazorpayMagicBtnConfig||(window.RazorpayMagicBtnConfig={}),n=window.RazorpayMagicBtnConfig,d.keys(n).length&&e.forEach(function(t){var e;null!==(e=t.setAttribute)&&void 0!==e&&e.call(t,"overrides",JSON.stringify(n))})),new Y(function(t,e){var n,r,o;if("/cart"!=window.location.pathname)return i.call(this);function i(){return t()}if(n=window.location.href,r=new URL(n),o=r.searchParams.get("magic_order_id")){return re(!0),mt?Y.resolve(Nt).then(function(t){try{return c.call(this)}catch(t){return e(t)}}.bind(this),e):c.call(this);function c(){return window.fetch(rt+"magic/checkout/recover?order_id="+o+"&key_id="+st).then(function(t){return t.ok||500===t.status?t.json():Y.reject("Error fetching order details")}).then(function(t){var e;!0===t.one_click_checkout?(t.abandoned_cart=!0,qt=!0,(e=r.searchParams.get("discount"))&&(t.prefill=t.prefill||{},t.prefill.coupon_code=e),re(!1),ce(t)):("CHECKOUT_PRICE_MISMATCH_ERROR"===t.Code?alert(t.Description):alert("This link has expired, please visit store to place a fresh order"),re(!1))}).catch(function(t){alert("This link has expired, please visit store to place a fresh order"),re(!1)}),a.call(this)}}function a(){return i.call(this)}return a.call(this)})):alert("Rzp key is missing."))}function $t(){bt||(p(function(){xt||window.fetch("/cart.js")},300),It.includes("/products/")&&window.fetch(It).then(function(t){return t.ok?t.json():Y.reject("Error fetching Product Details")}).then(function(t){var r=t,o=l.querySelector('[action="/cart/add"]'),i=ie(o),e=r.variants.filter(function(t){return t.id==i.id});null!==(t=e[0])&&void 0!==t&&t.available?null!==(t=e[0])&&void 0!==t&&t.price&&le(e[0].price,!0):he(),o&&o.addEventListener("change",function(t){var e,n;r&&(i=ie(o),null!==(e=(n=r.variants.filter(function(t){return t.id==i.id}))[0])&&void 0!==e&&e.available?(l.querySelectorAll('magic-checkout-btn[page-type="product"]').forEach(function(t){t.style.display="block"}),l.querySelectorAll(".shopify-payment-button__button").forEach(function(t){t.removeAttribute("disabled")}),le(n[0].price,!0)):he())})}).catch(function(t){pe(t)}),Wt(),function(){try{var t;if("/cart"!==window.location.pathname)return;if(window.localStorage.getItem("rzp_magic_globals"))return;window.localStorage.setItem("rzp_magic_globals","done"),fe("legacy_globals",{delay:ft,analytics:{analyticsScriptPresent:n(wt),gTagConversionId:null===(t=wt)||void 0===t?void 0:t.getAttribute("gtag-conversion-id"),gTagConversionLabel:null===(t=wt)||void 0===t?void 0:t.getAttribute("gtag-conversion-label"),currency:null===(t=wt)||void 0===t?void 0:t.getAttribute("data-currency"),gtmClevertap:yt},checkoutOptions:{showCoupons:pt,email:n(ht),phone:n(gt),name:window.nameForMagicCheckout,config:window.configForMagicCheckout},handlers:{onDismiss:null===(t=window.onDismissMagiCheckout)||void 0===t?void 0:t.toString(),onComplete:null===(t=window.onCompleteMagiCheckout)||void 0===t?void 0:t.toString()},brandedButton:{RazorpayMagicBtnConfig:window.RazorpayMagicBtnConfig},widgetHide:{widgetIDForMagicCheckout:window.widgetIDForMagicCheckout,widgetClassForMagicCheckout:window.widgetClassForMagicCheckout},website:window.location.hostname,magicInfo:function(){var t=0<l.querySelectorAll("magic-checkout-btn").length,e=0<l.querySelectorAll('[onclick^="openRzpCheckout"]').length;return{isMagicEnabled:t||e,hasBrandedButton:t,hasListenersOnCart:e}}(),shouldUseShopId:mt})}catch(t){fe("exception:global_tracking_failed",{message:t.message})}}())}function te(a,u){void 0===u&&(u={}),u.trackId||(Ft=ge()),window.widgetIDForMagicCheckout&&l.getElementById(window.widgetIDForMagicCheckout)&&(l.getElementById(window.widgetIDForMagicCheckout).style.zIndex="100"),window.widgetClassForMagicCheckout&&0<l.getElementsByClassName(window.widgetClassForMagicCheckout).length&&(l.getElementsByClassName(window.widgetClassForMagicCheckout)[0].style.zIndex="100"),a&&a.preventDefault&&(a.preventDefault(),function(t){try{var e=function(e){return function(t){return n(e.matches(t)||e.closest(t))}}(t),e={magic:e("magic-checkout-btn"),dynamic:e('form[action="/cart/add"] .shopify-payment-button'),unbranded:e('form[action="/cart/add"] button.shopify-payment-button__button--unbranded'),cart:e('form[action="/cart"] [type="submit"][name="checkout"]'),checkout:e('form[action="/checkout"] [type="submit"][name="checkout"]')};fe("button_detection",{selectors:e,match:d.values(e).some(function(t){return t})})}catch(t){}}(a.target)),lt||(window.MagicCheckout?window.MagicCheckout.showModal():re(!0),"lazy"!==ft||Tt||Zt(),window.fetch("/cart.js").then(function(t){var e,n;return t.ok?(null===(e=window.fbq)||void 0===e||null!==(n=e.getState)&&void 0!==n&&n.call(e).pixels.forEach(function(t){var e,n;return null===(e=(n=window).fbq)||void 0===e?void 0:e.call(n,"init",t.id,Rt)}),t.json()):Y.reject("Error fetching cart")}).then(ne).then(function(t){if(!t.order_id&&!K)return Y.reject("There was an issue while creating your order. Please try after some time.");var e,n,r;e=a,n=u.pageType,r=function(t){if(It.includes("/cart"))return"cart";if(It.includes("/products/")&&"product"===t)return"product";if("product"!==t)return"mini-cart"}(n),o=function(t){return t?"MAGIC-CHECKOUT-BTN"===(null===(t=t.target)||void 0===t?void 0:t.nodeName)?"branded":"native":"unknown"}(e),null===(n=Razorpay)||void 0===n||null!==(e=n.triggerShopifyCheckoutBtnClickEvent)&&void 0!==e&&e.call(n,r,o,Ft);var o=t.preferences,t=W(t,["preferences"]);K?(i=t.shopify_cart,(c={}).content_ids=i.items.map(function(t){return t.product_id}),c.currency=i.currency,c.value=i.total_price/100,Et=c,t.customer_cart=Et):(Et=t.customer_cart,t.customer_cart&&(t.customer_cart.content_ids=t.customer_cart.contents.map(function(t){return t.id}))),t.customer_cart.num_items=t.customer_cart.content_ids.length,t.customer_cart.content_type="product_group";var i=function(){var t=("; "+l.cookie).split("; discount_code=");if(2==t.length)return t.pop().split(";").shift()}(),c=u.couponCode;(i||c||Ct)&&(t.prefill=t.prefill||{},t.prefill.coupon_code=null!=c?c:Ct||i),t.order_id&&window.fetch(rt+"1cc/shopify/checkout/url?key_id="+st,{method:"POST",headers:{Accept:"application/json","Content-Type":"text/plain"},body:JSON.stringify({order_id:t.order_id,cart_note:At.note})}),!Ot&&o&&d.keys(o)?ce(t,o):ce(t)}).catch(function(t){window.MagicCheckout?window.MagicCheckout.hideModal():re(!1),"string"==typeof t?alert(t):alert("Something went wrong, please try again after some time.")}))}function ee(a){return new Y(function(o,i){var c={...a};return a.total_price&&a.items.length&&a.token?Y.resolve(Bt).then(function(t){try{return(r="discount_code"===(null===(n=(e=a).cart_level_discount_applications)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.type),e=e.items.filter(function(t){return t.original_price}).reduce(function(t,e){var e=null===(e=e.line_level_discount_allocations)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.discount_application,n="discount_code"===(null==e?void 0:e.type);return n&&(Ct=null==e?void 0:e.title),t||n},!1),r||e)?(fe("cart_patching"),c.total_price=a.original_total_price,c.total_discount=0,c.items=a.items.map(function(t){return t.original_line_price===t.line_price?t:{...t,line_price:t.original_line_price}}),o(c)):o(a)}catch(t){return i(t)}var e,n,r},i):o(a)})}function ne(o){return new Y(function(e,n){return fe("checkout_init_post_cart"),Y.resolve(Pt).then(function(t){try{return Y.resolve(ee(o)).then(function(t){try{return At=o=t,e(new Y(function(e,n){return 0!==(At=o).total_price&&0!==o.items.length&&o.token?K?e({shopify_cart:o,cart:{promotions:[],line_items:o.items.map(function(t){return{sku:t.sku,name:t.title,type:t.product_type,price:a.floor(t.original_line_price/t.quantity),weight:t.grams,quantity:t.quantity,image_url:t.image,variant_id:t.variant_id,description:t.product_description,offer_price:a.floor(t.line_price/t.quantity),product_url:t.url}})},ga_client_id:Ut("_ga"),utm_parameters:Yt(),fb_analytics:Kt(),backend_analytics_configs:Gt()}):(r=o,void new Y(function(e,n){try{var t=l.querySelector('script[id="checkout-js"]');if(!Razorpay.hasCheckoutFrameLoaded()||!t)return n();(jt=new Razorpay({key:st,one_click_checkout:!0})).on("shopify_success",function(t){Ot=!1,e(JSON.parse(t))}),jt.on("shopify_failure",function(){Ot=!0,n()}),jt.createCheckoutAndFetchPrefs?jt.createCheckoutAndFetchPrefs({cart:r,key:st,ga_id:Ut("_ga"),fb_analytics:Kt()}):(Ot=!0,n())}catch(t){return n(t)}}).then(function(t){e(t)}).catch(function(){window.fetch(rt+"1cc/shopify/checkout?key_id="+st,{method:"POST",headers:{Accept:"application/json","Content-Type":"text/plain"},body:JSON.stringify({cart:o,key:st,ga_id:Ut("_ga"),fb_analytics:Kt()})}).then(function(t){return t.ok||n("There was an issue while creating your order. Please try after some time."),t.json()}).then(function(t){e(t)}).catch(function(){n("There was an issue while creating your order. Please try after some time.")}),fe("legacy_checkout_triggered")})):(fe("empty_cart",{cart:o}),void n("Your cart is empty, add an item to continue"));var r}))}catch(t){return n(t)}},n)}catch(t){return n(t)}},n)})}function re(t){t?(l.getElementById("rzp-spinner-backdrop").classList.add("show"),l.getElementById("rzp-spinner").classList.add("show"),l.documentElement.classList.add(Dt),lt=!0):(l.getElementById("rzp-spinner-backdrop").classList.remove("show"),l.getElementById("rzp-spinner").classList.remove("show"),lt=!1,l.documentElement.classList.remove(Dt))}function oe(t){var a,u=t.razorpay_order_id;re(!0),fe("complete_start",{order_id:u});var l=f.now();window.fetch(rt+"1cc/shopify/complete?key_id="+st,{method:"POST",headers:{Accept:"application/json","Content-Type":"text/plain"},body:JSON.stringify({...t,key:st})}).then(function(t){return 200!==t.status?(fe("complete_failure",{order_id:u}),Y.reject(t)):(h(Z),t.json())}).then(function(c){return new Y(function(r,o){var t;if(a=c,fe("complete_success",{order_id:u,duration:f.now()-l}),window.onCompleteMagiCheckout&&window.onCompleteMagiCheckout(a.order_id,a.total_amount,a),St.purchase){var e=function(){try{return i.call(this)}catch(t){return o(t)}}.bind(this),n=function(t){try{return console.error(t),e()}catch(t){return o(t)}};try{return Y.resolve(St.purchase({id:a.order_id,total_amount:a.total_amount/100,tax:a.total_tax/100,shipping_fee:a.shipping_fee/100,coupon_code:null===(t=a.promotions[0])||void 0===t?void 0:t.code,products:null===(t=(t=At).items)||void 0===t?void 0:t.map(function(t){return{id:t.sku||t.id,name:t.title,price:t.price/100,variant:t.variant_title,quantity:t.quantity,vendor:t.vendor,product_id:t.id,image:t.image,variant_id:t.variant_id}}),customer_cart:Et,order_status_url:a.order_status_url,merchantAnalyticsConfigs:Lt})).then(function(t){try{return e()}catch(t){return n(t)}},n)}catch(t){n(t)}}function i(){if(Mt.purchase){var e=function(){try{return t.call(this)}catch(t){return o(t)}}.bind(this),n=function(t){try{return console.error(t),fe("exception:purchase_trigger_failed",{}),e()}catch(t){return o(t)}};try{return Y.resolve(Y.all(Mt.purchase({...c,merchantAnalyticsConfigs:qt?{}:Lt}))).then(function(t){try{return e()}catch(t){return n(t)}},n)}catch(t){n(t)}}function t(){return r(window.fetch("/cart/clear.js",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({})}))}return t.call(this)}return i.call(this)})}).then(function(){fe("complete_redirect",{order_id:u,duration:f.now()-l}),window.onbeforeunload=Q,window.removeEventListener("pagehide",X),p(function(){window.location=a.order_status_url},1e3)}).catch(function(o){return new Y(function(t,e){var n;return window.onbeforeunload=Q,window.removeEventListener("pagehide",X),a&&a.order_status_url?(fe("complete_redirect",{order_id:u,duration:f.now()-l}),window.location=a.order_status_url,t()):500==o.status?(alert("There was a problem processing your order. If any amount was deducted, please contact the seller to confirm your order"),r.call(this)):Y.resolve(o.json()).then(function(t){try{if((n=t).hasOwnProperty("error")&&n.error.hasOwnProperty("description"))switch(n.error.description){case"INSUFFICIENT_INVENTORY":case"RETRY_FAILED":case"DELEGATED_TO_SQS":alert("Order confirmation is pending. Please wait for a while as we confirm your order. In case the transaction fails, the amount will be credited to your account.");break;case"SQS_ORDER_PLACE_ERROR":alert("Your order could not be placed as the item went out of stock. If any amount was deducted, it will be credited to your account.");break;default:alert("There was a problem processing your order. If any amount was deducted, please contact the seller to confirm your order")}else alert("There was a problem processing your order. If any amount was deducted, please contact the seller to confirm your order");return r.call(this)}catch(t){return e(t)}}.bind(this),e);function r(){return re(!1),t()}})})}function ie(t){for(var e={},n=t.querySelectorAll("input, select, textarea"),r=0;r<n.length;++r){var o=n[r],i=o.name,o=o.value;i&&(i.includes("[")&&i.includes("]")?function(t,e,n,r){try{!e&&t&&(r[t]=n),e&&t&&(r[t]||(r[t]={}),r[t][e]=n)}catch(t){fe("adding_cart_property_failed",t)}}(i.substring(0,i.indexOf("[")),i.substring(i.indexOf("[")+1,i.indexOf("]")),o,e):e[i]=o)}return e}function ce(c,a){return new Y(function(r,o){var i;return V=void 0,St=window.MagicAnalytics,re(!0),Y.resolve(Y.all([Pt,Nt]).finally(function(){return re(!1)})).then(function(t){try{window.configForMagicCheckout&&(c.config=window.configForMagicCheckout),window.nameForMagicCheckout&&(c.name=window.nameForMagicCheckout),X=function(t){!V&&c.order_id&&(url=rt+"1cc/shopify/abandon_checkout?key_id="+st,V=m.sendBeacon(url,JSON.stringify({order_id:c.order_id})))},window.addEventListener("pagehide",X),Q=window.onbeforeunload,window.onbeforeunload=function(t){V||(ae(c),V=!0),Q&&"function"==typeof Q&&Q(t)},Z=p(function(){V||(ae(c),V=!0)},6e5),window.enableMoengageMagic&&(c.enable_moengage_analytics=window.enableMoengageMagic);try{jt=new Razorpay({key:st,one_click_checkout:!0,magic_shop_id:mt?dt:"",currency:null!==(i=null===(i=window.Shopify)||void 0===i?void 0:i.currency.active)&&void 0!==i?i:"INR"}),Mt=window.MagicMxAnalytics,wt=l.querySelector("script[gtag-conversion-id]"),null!==(i=Mt)&&void 0!==i&&i.reset(),a&&d.keys(a)&&(jt._prefs=a),e=c,d.keys(e).forEach(function(t){return jt.set(t,e[t])}),jt.set("animation",!1),pt&&(n="false"!=pt,jt.set("show_coupons",n)),ht&&jt.set("prefill.email",ht),gt&&jt.set("prefill.contact",gt),jt.set("modal.ondismiss",function(){V||(ae(e),V=!0),qt=!1}),jt.set("handler",function(t){oe({...t,abandoned_cart:e.abandoned_cart})}),jt.open(),jt.on("render",function(){null!==St&&void 0!==St&&St.startedOrder(),window.MagicCheckout?window.MagicCheckout.hideModal():re(!1)}),jt.on("triplePixel",function(t){var e=t.email,t=t.phone;"function"==typeof window.TriplePixel&&(window.TriplePixel("Contact",{email:e}),window.TriplePixel("Contact",{phone:t}))}),jt.on("shopify.order",function(t){c.order_id=t.order_id}),jt.on("shopify.redirect_to_native_checkout",function(){window.location="/checkout"}),jt.on("mx-analytics",function(t){var e,n={clevertap:yt.startsWith("GTM-"),webengage:_t&&window.webengage,ga4:vt&&window.gtag,googleAds:(null===wt||void 0===wt?void 0:wt.getAttribute("gtag-conversion-id"))&&(null===wt||void 0===wt?void 0:wt.getAttribute("gtag-conversion-label"))};null===Mt||void 0===Mt||null!==(e=Mt[t.event])&&void 0!==e&&e.call(Mt,{...t,gtmId:yt,merchantAnalyticsConfigs:qt?{}:Lt},At,n)}),jt.on("fault.close",function(){window.MagicCheckout?window.MagicCheckout.hideModal():re(!1)})}catch(t){window.MagicCheckout?window.MagicCheckout.hideModal():re(!1),alert("Something went wrong, please try again after some time.")}return r()}catch(t){return o(t)}var e,n},o)})}function ae(t){(t.order_id?window.fetch(rt+"1cc/shopify/abandon_checkout?key_id="+st,{method:"POST",keepalive:!0,headers:{Accept:"application/json","Content-Type":"text/plain"},body:JSON.stringify({order_id:t.order_id})}):Y.resolve()).then(function(){window.onDismissMagiCheckout&&window.onDismissMagiCheckout()}).catch(function(t){console.log(t)})}function ue(t){if(t instanceof URL||"string"==typeof t){t=t instanceof URL?t.toString():t;return t.includes("/cart.js")||t.includes("/cart.json")||t.includes("cart/change")||t.includes("cart/update")}}function le(c,a){return new Y(function(e,n){var r,o,i;return void 0===a&&(a=!1),!c||lt?e():Y.resolve(Nt).then(function(t){try{if(!(r=a?l.querySelectorAll('magic-checkout-btn[page-type="product"]'):l.querySelectorAll("magic-checkout-btn")).length)return e();for(o=0;o<r.length;o++)i=r[o].getAttribute("page-type"),!a&&"product"===i||r[o].setAttribute("amount",s(c));return e()}catch(t){return n(t)}},n)})}function de(o,i){var c,a=this;if(void 0===i&&(i=500),o)return function(){var t=a;c&&h(c);for(var e=arguments.length,n=new u(e),r=0;r<e;r++)n[r]=arguments[r];c=p(o.bind(t,...n),i)}}"loading"!==l.readyState?Xt():window.addEventListener("DOMContentLoaded",Xt,{once:!0}),"complete"===l.readyState?$t():window.addEventListener("load",$t,{once:!0});var se=null!=(t=l.currentScript.getAttribute("src"))&&t.includes("cdn.razorpay.com/static/shopify/magic-rzp.js")?"production":t||"unknown";function fe(t,e){var n=!!m.sendBeacon,r={data:i(g(y(i(JSON.stringify({addons:[],context:{magic_plugin_id:Ft,shop_id:dt,env:se,checkoutSrc:ct===ot?"production":ct,hostname:window.location.hostname,url:_.href,lib:"magic-rzp",key:st},events:[{event:"magic_shopify:"+t,timestamp:f.now(),properties:{...e}}]}))))),key:"ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk"};p(function(){try{var t=!1;n&&(t=m.sendBeacon(it,JSON.stringify(r))),t||window.fetch(it,{body:JSON.stringify(r),method:"post"}).catch(function(){})}catch{}})}function pe(t){t instanceof Error?fe("error",{message:t.message,stack:t.stack}):fe("custom_error",t)}function he(){l.querySelectorAll('magic-checkout-btn[page-type="product"]').forEach(function(t){t.style.display="none"}),l.querySelectorAll(".shopify-payment-button__button").forEach(function(t){t.setAttribute("disabled",!0)})}function ge(){var n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",r=n.split("").reduce(function(t,e,n){t={...t};return t[e]=n,t},{});function t(t){for(var e="";t;)e=n[t%62]+e,t=a.floor(t/62);return e}var o,i=t(+(s(f.now()-13885344e5)+s("000000"+a.floor(1e6*a.random())).slice(-6)))+t(a.floor(238328*a.random()))+"0",c=0;return i.split("").forEach(function(t,e){o=r[i[i.length-1-e]],(i.length-e)%2&&(o*=2),62<=o&&(o=o%62+1),c+=o}),o=(o=c%62)&&n[62-o],""+s(i).slice(0,13)+o}bt||(window.openRzpCheckout=te,window.onBuyNowClickMagic=function(n){Ft=ge(),re(!0),window.fetch("/cart/clear.js",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({})}).then(function(){n&&(t=null===(t=(e=n.target).closest)||void 0===t?void 0:t.call(e,"form")),t=t||l.querySelector('[action="/cart/add"]');var t,e={...ie(l.querySelector('[action="/cart/add"]')),...ie(t)};e.quantity||(t=l.getElementsByName("quantity")[0])&&(e.quantity=t.value||1);e={items:[{quantity:e.quantity,id:e.id,properties:e.properties,selling_plan:e.selling_plan}]};window.fetch("/cart/add.js",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(t){return new Y(function(e,n){var r,o,i,c,a,u,l,d,s;return 200!==t.status?e(Y.reject("Can not able to add product to the Cart")):Y.resolve(t.json()).then(function(t){try{return o=(r=t).items[0],i=o.sku,c=o.variant_id,a=o.final_price,u=o.quantity,l=o.product_title,d=o.variant_title,s=o.product_type,null!==(o=St)&&void 0!==o&&o.buyNowClicked({id:i||c,price:a/100,quantity:u,name:l,variant:d,category:s}),e(r)}catch(t){return n(t)}},n)})}).then(function(){re(!1),te(n,{pageType:"product",trackId:Ft})}).catch(function(){re(!1),alert("Getting Error from BuyNow, Please contact the merchant to confirm your order")})}).catch(function(){re(!1),alert("We are unable to process this order at the moment. Please contact the seller to confirm your order")})})}();