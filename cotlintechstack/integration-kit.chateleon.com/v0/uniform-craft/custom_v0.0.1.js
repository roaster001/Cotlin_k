(function (win, doc) {
  win.chateleonCustom = (function () {
    console.info("Chatleon Custom SDK loaded");
    function chateleonCustom(apiId) {
      var shadowrootNode;
      var chateleonContainer;
      var shopifyChatButton;
      var shopifyChatChild;
      const addShopifyClickListener = (chateleonContainer, shopifyChatButton) => {
        chateleonContainer.addEventListener('click', function () {
          chateleonContainer.style.display = 'none';
          shopifyChatButton.style.display = 'block';
          shopifyChatButton.click();
        });
      };

      // Callback function to execute when child is added in the DOM
      const bodyCallback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          if (mutation.target?.id === 'chateleon-container') {
            console.info("chateleon-animation added!");
            let shopifyCustomElement = document.getElementById("ShopifyChat");
            let shopifyChatButton = shopifyCustomElement?.shadowRoot.lastChild.lastChild;
            let shopifyCustomElementHeight = shopifyCustomElement.clientHeight;
            if (shopifyCustomElementHeight < 200) {
              shopifyChatButton.style.display = 'none';
            }
            addChatBoxObserver(shopifyCustomElement);
            observer.disconnect();
          }
          else if (mutation.addedNodes[0]?.id === 'shopify-chat') {
            console.info("shopifyChat added!");
            shopifyChatChild = mutation.addedNodes[0].children[0];
            shadowrootNode = mutation.addedNodes[0].children[0].shadowRoot;
            shadowRootElem(shadowrootNode);
          } else {
            // case: if shopifyChat is already appended to the dom.
            const shopifyChat = document.getElementById('shopify-chat');
            if (!chateleonContainer && shopifyChat && win.chateleon) {
              chateleon('create', apiId, null, null, customImpl);
              chateleonContainer = document.createElement('div');
              chateleonContainer.id = 'chateleon-container';
              chateleonContainer.style.position = 'fixed';
              chateleonContainer.style.bottom = '0px';
              chateleonContainer.style.right = '0px';
              chateleonContainer.style.cursor = 'pointer';
              chateleonContainer.style.zIndex = 2147483647;
              document.body.appendChild(chateleonContainer);
            }
          }
        }
      }
      const BodyNode = document.body;
      const config = { childList: true, subtree: true };
      const bodyObserver = new MutationObserver(bodyCallback);
      bodyObserver.observe(BodyNode, config);

      // Observing SHADOWROOT
      const shadowRootCallback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          chateleonContainer = document.getElementById('chateleon-container');
          if (!chateleonContainer && win.chateleon) {
            chateleonContainer = document.createElement('div');
            chateleonContainer.id = 'chateleon-container';
            chateleonContainer.style.position = 'fixed';
            chateleonContainer.style.bottom = '0px';
            chateleonContainer.style.right = '0px';
            chateleonContainer.style.cursor = 'pointer';
            chateleonContainer.style.zIndex = 2147483647;
            document.body.appendChild(chateleonContainer);
          }
          if (mutation.target?.className === 'chat-toggle chat-toggle--#49d50d chat-toggle--icon-button chat-toggle--text-button chat-toggle--bottom-right' ||
            mutation.target?.className === 'chat-toggle chat-toggle--#49d50d chat-toggle--icon-button chat-toggle--bottom-right icon-only mobile-only') {
            shopifyChatButton = mutation.target; 
          }
          if (chateleonContainer && shopifyChatButton) {
            addShopifyClickListener(chateleonContainer, shopifyChatButton);
          }
        }
      }
      function shadowRootElem(bodyNode) {
        const BodyNode = bodyNode;
        const config = { childList: true, subtree: true };
        const bodyObserver = new MutationObserver(shadowRootCallback);
        bodyObserver.observe(BodyNode, config);
      }

      // Callback function to execute when element's attribute changes
      const chatBoxCallback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          chateleonContainer.style.display = 'block';
          let shopifyCustomElement = document.getElementById("ShopifyChat");
          let shopifyChatButton = shopifyCustomElement.shadowRoot.lastChild.lastChild;
          let shopifyCustomElementHeight = shopifyCustomElement.clientHeight;
          if (
            mutation.type === 'attributes'
            && mutation.attributeName === 'style'
            && mutation.target.id == 'ShopifyChat'
          ) {
            if (
              (shopifyCustomElementHeight >= 200 &&
                shopifyCustomElementHeight <= 1200)
            ) {
              shopifyCustomElement.style.display = 'block';
              shopifyCustomElement.style.zIndex = 1000000;
              shopifyChatButton.style.display = 'block';
              if (chateleonContainer) {
                chateleonContainer.style.zIndex = 100;
                chateleonContainer.style.display = 'none';
              }
            } else {
              shopifyCustomElement.style.display = 'none';
              shopifyChatButton.style.display = 'none';
              if (chateleonContainer) {
                chateleonContainer.style.display = 'block';
                chateleonContainer.style.zIndex = 2147483647;
              }
            }
          }
        }
      }

      const addChatBoxObserver = function (bodyNode) {
        const chatBoxContainer = bodyNode;
        const chatBoxObserver = new MutationObserver(chatBoxCallback);
        const config = { attributes: true, subtree: true };
        chatBoxObserver.observe(chatBoxContainer, config);
      }

      // For custom implementation
      const customImpl = (filteredGif, id, trackEvent) => {
        chateleonContainer = document.getElementById('chateleon-container');
        if (!chateleonContainer && win.chateleon) {
          chateleonContainer = document.createElement('div');
          chateleonContainer.id = 'chateleon-container';
          chateleonContainer.style.position = 'fixed';
          chateleonContainer.style.bottom = '0px';
          chateleonContainer.style.right = '0px';
          chateleonContainer.style.cursor = 'pointer';
          chateleonContainer.style.zIndex = 2147483647;
          document.body.appendChild(chateleonContainer);
        }
        let shopifyCustomElement = document.getElementById("ShopifyChat");
        let shopifyChatButton = shopifyCustomElement?.shadowRoot.lastChild.lastChild;
        let shopifyCustomElementHeight = shopifyCustomElement.clientHeight;
        if (chateleonContainer && shopifyChatButton) {
          addShopifyClickListener(chateleonContainer, shopifyChatButton);
        }
        if (
          (shopifyCustomElementHeight >= 200 &&
            shopifyCustomElementHeight <= 1200)
        ) {
          chateleonContainer.style.display = 'none';
        }
        var elem = filteredGif;
        elem.className = 'chateleon-animation ' + filteredGif.className;
        chateleonContainer.appendChild(elem);
        elem.onmouseover = trackEvent;
        elem.onclick = trackEvent;
        elem.style.width = (240 * 0.5) + "px";
        elem.style.height = (236 * 0.5) + "px";
        elem.style.position = "relative";
      };
    }
    return chateleonCustom;
  })()
})(window, document);
