
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills-legacy.kvvmhbGo.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app-legacy.C1r8k5S_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePage-legacy.D26z-Ynh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection-legacy.NIujDFLL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal-legacy.DKlyCtw3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods-legacy.DKKSEB5v.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup-legacy.DZiCSd2a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown-legacy.DeqpoCHL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/MarketsProDisclaimer-legacy.BoaeaAtH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo-legacy.CK72sUSq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index-legacy.Yi0v1wQd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo-legacy.B-zhWKNO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks-legacy.kEYC6F00.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment-legacy.DW1ys7Rl.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin-legacy.lv1G_dO8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShopPayRequiresVerification-legacy.DQAEBumt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section-legacy.C4_2FI6z.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGooglePaySdk-legacy.BxgHGCW9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLoginLoader-legacy.Yn7iHN3U.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage-legacy.onyU2Fd_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection-legacy.BAdq49HH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture-legacy.wY8hFsWq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context-legacy.s7FhwvGc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions-legacy.C8wzwKrr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact-legacy.CJK1V_b4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList-legacy.DlG8Rv2B.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch-legacy.DOt4OWqE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index-legacy.CfsT-Mrj.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  