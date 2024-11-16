!function(){"use strict";function o(e){return e}var i,t,r=(j=window).document,a=j.Array,u=j.Object,c=j.setTimeout,d=j.TypeError,n=j.location,e=function(n){return function(t,e){return arguments.length<2?function(e){return n.call(null,e,t)}:n.call(null,t,e)}},l=((f=e(function(e,t){return typeof e===t}))("boolean"),f("number"),f("string")),s=f("function"),p=f("object"),_=(f("undefined"),function(e){return!(null===e)&&p(e)}),f=((w=e(function(e,t){return e&&e[t]}))("length"),w("prototype")),h=e(function(e,t){return e instanceof t}),m=f(a),g=m.slice,v=e(function(e,t){return e&&m.forEach.call(e,t),e}),E=e(function(e,t){return g.call(e,t)}),A=(f(Function),t=function(e,t){return e.bind(t)},i=function(e){if(s(e))return t.apply(null,arguments);throw new d("not a function")},e(function(e,t){var n=arguments;return l(e)&&((n=E(n,0))[0]=t[e]),i.apply(null,n)})),y=e(function(t,n){var e;return v((e=t,u.keys(e||{})),function(e){return n(t[e],e,t)}),t}),w=e(function(n,e){return y(e,function(e,t){return n[t]=e}),n}),C=function(e){return console.warn("Promise error:",e)},S=function(e){return h(e,N)};function N(e){if(!S(this))throw"new Promise";this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],b(e,this)}function I(n,o){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,c(function(){var e,t=1===n._state?o.onFulfilled:o.onRejected;if(null!==t){try{e=t(n._value)}catch(e){return void O(o.promise,e)}T(o.promise,e)}else(1===n._state?T:O)(o.promise,n._value)})):n._deferreds.push(o)}function T(t,e){try{if(e===t)throw new d("promise resolved by itself");if(_(e)||s(e)){var n=e.then;if(S(e))return t._state=3,t._value=e,void P(t);if(s(n))return void b(A(n,e),t)}t._state=1,t._value=e,P(t)}catch(e){O(t,e)}}function O(e,t){e._state=2,e._value=t,P(e)}function P(t){var e;2===t._state&&0===t._deferreds.length&&c(function(){t._handled||C(t._value)}),e=t._deferreds,v(function(e){return I(t,e)})(e),t._deferreds=null}function U(e,t,n){this.onFulfilled=s(e)?e:null,this.onRejected=s(t)?t:null,this.promise=n}function b(e,t){var n=!1;try{e(function(e){n||(n=!0,T(t,e))},function(e){n||(n=!0,O(t,e))})}catch(e){if(n)return;n=!0,O(t,e)}}e=N.prototype,w({catch:function(e){return this.then(null,e)},then:function(e,t){var n=new N(o);return I(this,new U(e,t,n)),n},finally:function(t){return this.then(function(e){return N.resolve(t()).then(function(){return e})},function(e){return N.resolve(t()).then(function(){return N.reject(e)})})}})(e),N.all=function(a){return new N(function(o,i){if(!a||void 0===a.length)throw new d("Promise.all accepts an array");if(0===a.length)return o([]);var r=a.length,e=a;v(function t(e,n){try{if((_(e)||s(e))&&s(e.then))return e.then(function(e){return t(e,n)},i);a[n]=e,0==--r&&o(a)}catch(e){i(e)}})(e)})},N.resolve=function(t){return S(t)?t:new N(function(e){return e(t)})},N.reject=function(n){return new N(function(e,t){return t(n)})},N.race=function(o){return new N(function(t,n){var e=o;return v(function(e){return e.then(t,n)})(e)})};var R=(j=j.Promise)&&s(f(j).then)&&j||N;s(R.prototype.finally)||(R.prototype.finally=N.prototype.finally);var G=r.currentScript,k=G.getAttribute("data-currency"),D="false"!==G.getAttribute("data-deprecate"),L=window.dataLayer=window.dataLayer||[],M={},F=[],V={initiate:"checkout_initiated",shipping_selected:"add_shipping_info",payment_initiated:"add_payment_info",purchase:"purchase"},x={ga4:"ga4",googleAds:"google_ads",facebook:"fb"},H={clevertap:!1,webengage:!1,ga4:!1,googleAds:!1};function B(e){return e.isScriptCouponApplied&&Q(M)?ee(e.lineItems)/100:(e.totalAmount||M.original_total_price)/100}function q(){var e;return k||(null===(e=window.Shopify)||void 0===e?void 0:e.currency.active)||"INR"}var j={initiate:function(e){L.push({event:"checkout",ecommerce:{checkout:{actionField:{step:2,option:"Information Page Visited"},products:F,total_amount:B(e),discount_amount:e.isScriptCouponApplied&&Q(M)?Z(e.lineItems)/100:((M.total_discount||0)+(e.couponDiscount||0))/100,coupon_code:e.appliedCoupon||"",sub_total:e.latestTotal/100,total_no_of_products:F.length,new_customer:!0}}})},shipping_selected:function(e){return L.push({event:"checkout",ecommerce:{checkout:{actionField:{step:3,option:"Shipping Selected"},products:F,total_no_of_products:F.length,total_amount:e.isScriptCouponApplied&&Q(M)?ee(e.lineItems)/100:(e.totalAmount||M.original_total_price)/100,sub_total:e.latestTotal/100,shipping_amount:e.shippingAmount/100,coupon_code:e.appliedCouponCode,discount_amount:e.isScriptCouponApplied&&Q(M)?Z(e.lineItems)/100:((M.total_discount||0)+(e.couponDiscount||0))/100,new_customer:!0}}})},payment_initiated:function(e){!function(e){if(e)try{window.google_tag_manager[e].dataLayer.reset()}catch(e){console.error(e)}}(e.gtmClevertap),L.push({event:"checkout",ecommerce:{checkout:{actionField:{step:4,option:"Payment Selected"},products:F,total_amount:e.isScriptCouponApplied&&Q(M)?ee(e.lineItems)/100:(e.totalAmount||M.original_total_price)/100,sub_total:e.latestTotal/100,shipping_amount:e.shippingAmount/100,discount_amount:e.isScriptCouponApplied&&Q(M)?(ee(e.lineItems)-getOfferAmount(e.lineItems))/100:((M.total_discount||0)+(e.couponDiscount||0))/100,coupon_code:e.appliedCouponCode,total_no_of_products:F.length,payment_mode:e.paymentMode,new_customer:!0}}})},coupon_applied:function(e){return L.push({event:"Coupon Code Applied",cart_value_before_discount:e.amountBeforeDisc/100,cart_value_after_discount:e.amountAfterDisc/100,coupon_code:e.appliedCouponCode,discount_amount:e.couponDiscountValue/100})},coupon_failed:function(e){return L.push({event:"coupon code failed",coupon_code:e.couponCode,message:e.errorMsg,page_url:n.href})},payment_failed:function(e){return L.push({event:"payment failure",payment_mode:e.paymentMode,reason:e.failureReason,total_amount:e.isScriptCouponApplied&&Q(M)?ee(e.lineItems)/100:(e.totalAmount||M.original_total_price)/100})},purchase:function(e){var t,n=$();return L.push({eventCallback:function(){return n.add()},event:"purchase",ecommerce:{purchase:{actionField:{id:e.order_id,affiliation:"Online Store",tax:e.total_tax,shipping:e.shipping_fee/100,coupon:(null===(t=e.promotions[0])||void 0===t?void 0:t.code)||"",revenue:e.total_amount/100},products:F}}}),n.wait()},user_data:function(e){return L.push({event:"UserData",email:e.email,first_name:e.first_name,last_name:e.last_name,phone:(t=e.phone,new RegExp(/^\+?[0-9-]+$/).test(t)?t.slice(-10):t),city:e.city,state:e.state});var t}},K={IS_LOGIN_TRIGGERED:!1,USER:{first_name:"",last_name:"",email:"",phone:"",city:"",state:""},WEBENGAGE_LS_KEY:"WEBENGAGE_SHOP_INFO",EVENTS:{CHECKOUT_CREATED:"Checkout created",CHECKOUT_UPDATED:"Checkout updated"},ACTIONS:{LOGIN:"login",SET_ATTRIBUTE:"setAttribute"},WEBENGAGE_ACTION_PARAMS:{EMAIL:"we_email",PHONE:"we_phone",FIRST_NAME:"we_first_name",LAST_NAME:"we_last_name"},handlers:{setUser:function(e){(e.email||e.phone)&&(K.USER={...e})},formatLineItems:function(e){return e.map(function(e){return{Title:e.name,"Product ID":e.sku,Quantity:e.quantity,"Variant ID":e.id,Currency:q(),Price:e.price}})},checkoutCreated:function(e){K.handlers.loginUser(e);e={line_items:K.handlers.formatLineItems(F),"total price":B(e)};return K.handlers.triggerEvent(K.EVENTS.CHECKOUT_CREATED,e)},checkoutUpdated:function(e){K.handlers.loginUser(e);e={name:K.USER.first_name+" "+K.USER.last_name,email:K.USER.email,"shipping address city":K.USER.city,"shipping address state":K.USER.state,tags:"magic"};return K.handlers.triggerEvent(K.EVENTS.CHECKOUT_UPDATED,e)},loginUser:function(e){K.handlers.setUser(e),K.IS_LOGIN_TRIGGERED||!K.USER.email&&!K.USER.phone||(K.IS_LOGIN_TRIGGERED=!0,e=null===(e=JSON.parse(localStorage.getItem("WEBENGAGE_SHOP_INFO")||"{}"))||void 0===e?void 0:e.id_type,K.handlers.triggerAction(K.ACTIONS.LOGIN,[null!==(e=K.USER[e])&&void 0!==e?e:K.USER.email]),K.handlers.setAttributes(K.WEBENGAGE_ACTION_PARAMS.EMAIL,K.USER.email),K.handlers.setAttributes(K.WEBENGAGE_ACTION_PARAMS.PHONE,K.USER.phone),K.handlers.setAttributes(K.WEBENGAGE_ACTION_PARAMS.FIRST_NAME,K.USER.first_name),K.handlers.setAttributes(K.WEBENGAGE_ACTION_PARAMS.LAST_NAME,K.USER.last_name))},setAttributes:function(e,t){K.IS_LOGIN_TRIGGERED&&K.handlers.triggerAction(K.ACTIONS.SET_ATTRIBUTE,[e,t])},triggerEvent:function(e,t){window.webengage.track(e,t)},triggerAction:function(e,t){var n;null===(n=window.webengage)||void 0===n||null!==(n=n.user)&&void 0!==n&&n[e](...t)}}},W={GTAG:G.getAttribute("data-ga4-id")||"",COUPON:"",CUSTOM_EVENTS:"true"===G.getAttribute("data-ga4-custom-event-names"),EVENTS:{BEGIN_CHECKOUT:"begin_checkout",ADD_SHIPPING_INFO:"add_shipping_info",ADD_PAYMENT_INFO:"add_payment_info",SELECT_PROMOTION:"select_promotion",PURCHASE:"purchase"},handlers:{setCoupon:function(e){return W.COUPON=e},resetCoupon:function(){return W.COUPON=""},getCustomEventName:function(e){var t;return((t={})[W.EVENTS.BEGIN_CHECKOUT]="beginCheckout",t[W.EVENTS.ADD_SHIPPING_INFO]="addShippingInfo",t[W.EVENTS.ADD_PAYMENT_INFO]="addPaymentInfo",t[W.EVENTS.SELECT_PROMOTION]="selectPromotion",t[W.EVENTS.PURCHASE]="Purchase",t)[e]},formatLineItems:function(){return F?F.map(function(e,t){e={index:t,item_id:e.sku||e.id,item_name:e.title||e.name,price:e.price.toFixed(2),quantity:e.quantity,discount:e.discount.toFixed(2),item_brand:e.brand||e.vendor||"",item_variant:e.id||""};return W.COUPON&&(e.coupon=W.COUPON),e}):[]},beginCheckout:function(e){e=W.handlers.generatePayload(e);W.handlers.triggerEvent(W.EVENTS.BEGIN_CHECKOUT,e)},addShippingInfo:function(e){e=W.handlers.generatePayload(e);W.handlers.triggerEvent(W.EVENTS.ADD_SHIPPING_INFO,e)},addPaymentInfo:function(e){e=W.handlers.generatePayload(e);W.handlers.triggerEvent(W.EVENTS.ADD_PAYMENT_INFO,e)},selectPromotion:function(e){e=W.handlers.generatePayload(e);W.handlers.triggerEvent(W.EVENTS.SELECT_PROMOTION,e)},purchase:function(e){var t=e.order_id,n=e.total_amount,o=e.total_tax,i=e.shipping_fee,r=e.cod_fee,a=void 0===r?0:r,r=W.handlers.formatLineItems()||[],a=+i+ +(null!=a?a:0),n=n-a;W.handlers.triggerEvent(W.EVENTS.PURCHASE,{transaction_id:t,currency:q(),items:r,tax:o,value:(n/100).toFixed(2),shipping:(a/100).toFixed(2),coupon:(null===(e=e.promotions[0])||void 0===e?void 0:e.code)||W.COUPON||""})},generatePayload:function(e){e.appliedCouponCode&&W.handlers.setCoupon(e.appliedCouponCode);var t=W.handlers.formatLineItems()||[],n=B(e)-((n=e).isScriptCouponApplied&&Q(M)?Z(n.lineItems)/100:((M.total_discount||0)+(n.couponDiscount||n.couponDiscountValue||0))/100),n={items:t,value:isNaN(n)?0:n,currency:q()};return W.COUPON&&(n.coupon=W.COUPON),e.paymentMode&&(n.payment_type=e.paymentMode),n},triggerEvent:function(e,t){if(W.GTAG&&(t.send_to=W.GTAG),W.CUSTOM_EVENTS)return L.push({ecommerce:null}),void L.push({event:W.handlers.getCustomEventName(e),ecommerce:t});window.gtag("event",e,t)}}},Y={clevertap:j,webengage:{initiate:K.handlers.checkoutCreated,shipping_selected:K.handlers.checkoutUpdated,user_data:K.handlers.loginUser},ga4:{initiate:W.handlers.beginCheckout,shipping_selected:W.handlers.addShippingInfo,payment_initiated:W.handlers.addPaymentInfo,coupon_applied:W.handlers.selectPromotion,coupon_failed:W.handlers.resetCoupon,purchase:W.handlers.purchase},googleAds:{purchase:{handlers:{conversion:function(e){var t=e.order_id,n=e.total_amount,o=e.customer_details,e=o.email,o=o.contact;window.gtag&&e&&o&&window.gtag("set","user_data",{email:e,phone_number:o});e=G.getAttribute("gtag-conversion-id"),o=G.getAttribute("gtag-conversion-label");window.gtag&&e&&o&&window.gtag("event","conversion",{transaction_id:t,send_to:e+"/"+o,value:n/100,currency:q()})}}}.handlers.conversion}},z=!1;function J(){z||"function"!=typeof window.ga||(z=!0,ga("require","ec"),ga("set","currencyCode",q()))}function Q(e){return 0===u.keys(e).length}function X(){for(var e=arguments.length,n=new a(e),t=0;t<e;t++)n[t]=arguments[t];"function"==typeof window.ga&&window.ga(function(){var t=n.shift();window.ga.getAll().forEach(function(e){var r,e=(r=e,function(e){var t=r.get("name");t&&(e=t+"."+e);for(var n=arguments.length,o=new a(1<n?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];window.ga(e,...o)});"function"==typeof t?t(e):e(t,...n)})})}function $(){var n=[];return{add:function(){var t,e=new R(function(e){t=e});return c(t,3e3),n.push(e),t},wait:function(){return R.all(n)}}}function Z(e){return e.reduce(function(e,t){return e+(t.price-t.offer_price)},0)}function ee(e){return e.reduce(function(e,t){return e+t.quantity*+t.price},0)}function te(e,t,n){var o=t.merchantAnalyticsConfigs,t=null!==(t=x[e])&&void 0!==t?t:e;if(null==o||!o[t])return 1;e=o[t],o=null==e?void 0:e.control_flow,t=null==e?void 0:e.one_cc_fe_analytics,e=null==e?void 0:e.events,t=o&&t?null==e?void 0:e[null==V?void 0:V[n]]:!(o&&!t);return t}function ne(n,o){u.entries(H).forEach(function(e){var t=e[0];if(e[1]&&"function"==typeof Y[t][n]&&te(t,o,n))try{Y[t][n](o)}catch(e){console.error(e)}})}function oe(e){X("ec:addProduct",{id:e.id,name:e.name,price:e.price,variant:e.variant,quantity:e.quantity,vendor:e.vendor})}window.addEventListener("load",function(){if(!D){J();try{"razorpay-order-json"===(null==(e=G.previousElementSibling)?void 0:e.id)&&(e=JSON.parse(e.innerText),ie.purchase({id:e.order_name,total_amount:e.total_price/100,tax:e.tax_price/100||0,shipping_fee:e.shipping_price/100||0,coupon_code:e.coupon_code,products:e.line_items.map(function(e){return{id:e.sku||e.product.id,name:e.title,price:parseFloat(e.price),variant:e.variant.title,quantity:e.quantity,vendor:e.vendor}}),customer_cart:{content_ids:e.line_items.map(function(e){return e.product.id}),currency:q(),value:e.total_price/100,num_items:e.line_items.length,content_type:"product_group"}}))}catch(e){}var e}});var ie={purchase:function(e){J(),e.products.forEach(oe),X("ec:setAction","purchase",{id:e.id,tax:e.tax,affiliation:e.affiliation,coupon:e.coupon_code,revenue:e.total_amount,shipping:e.shipping_fee});var t=$();X(function(e){e("send","event",{eventCategory:"EnhancedEcommerce",eventLabel:"Completed Order",eventAction:"Completed Order",hitCallback:t.add()})});var n={eventID:null==e?void 0:e.id};return window.fbq&&te("facebook",e,"purchase")&&window.fbq("track","Purchase",e.customer_cart,n),window.snaptr&&window.snaptr("track","PURCHASE",{currency:q(),price:e.total_amount,transaction_id:e.id}),t.wait()},buyNowClicked:function(e){oe(e),X("ec:setAction","add"),X("send","event",{eventCategory:"UX",eventAction:"click",eventLabel:"add to cart"})},startedOrder:function(){window.ga&&(window.ga("ec:setAction","checkout",{step:1}),window.ga("send","event",{eventCategory:"EnhancedEcommerce",eventLabel:"Started Order",eventAction:"Started Order",nonInteraction:!0}))}},j={initiate:function(e,t,n){void 0===t&&(t={}),M={...t},H={...H,...n},e.lineItems.forEach(function(e){var t;F.push({name:e.name,id:e.variant_id,sku:e.sku,price:e.offer_price/100,mrp:e.price/100,quantity:e.quantity,cropped_URL:null===(t=e.product_url)||void 0===t?void 0:t.slice(1),product_url_link:""+r.location.origin+e.product_url,image:null===(t=e.image_url)||void 0===t?void 0:t.replace(".jpg","_530x@2x.jpg"),brand:r.location.host,currency:q(),size:"NA",discount:(e.price-e.offer_price)/100})}),ne("initiate",e)},shipping_selected:function(e){ne("shipping_selected",e)},payment_initiated:function(e){ne("payment_initiated",e)},coupon_applied:function(e){ne("coupon_applied",e)},coupon_failed:function(e){ne("coupon_failed",e)},payment_failed:function(e){ne("payment_failed",e)},purchase:function(n){return void 0===n&&(n={}),u.entries(H).map(function(e){var t=e[0];return e[1]&&"function"==typeof Y[t].purchase&&te(t,n,"purchase")?Y[t].purchase(n):R.resolve()})},user_data:function(e){ne("user_data",e)},reset:function(){F=[]}};D||(window.MagicAnalytics=ie,window.MagicMxAnalytics=j)}();